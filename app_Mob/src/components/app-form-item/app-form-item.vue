<template>
  <ion-item :class="[classes,labelPos.toLowerCase()]" :disabled="disabled">
        <template v-if="uiStyle == 'STYLE2'">
            <ion-label :class="classes" :style="{minWidth:labelWidth+'px'}" position="floating" v-if="isShowCaption && labelWidth > 0">{{isEmptyCaption ? '' : caption}}</ion-label>
            <slot></slot>
        </template>
        <template v-else>
            <template v-if="labelPos == 'LEFT'">
                <ion-label  :class="classes" :style="{minWidth:labelWidth+'px'}" v-if="isShowCaption && labelWidth > 0">{{isEmptyCaption ? '' : caption}}</ion-label>
                <div :style="contentStyle" style="display: flex;align-items: center;">
                    <slot></slot>
                </div>
                <div class="prompt_text">{{error}}</div>
            </template>
            <template v-if="labelPos == 'TOP'">
                <ion-label
                :class="classes"
                :style="{minWidth:labelWidth+'px'}"
                position="floating"
                v-if="isShowCaption && labelWidth > 0">
                    {{isEmptyCaption ? '' : caption}}
                </ion-label>
                <slot></slot>
                <div class="prompt_text">{{error}}</div>
            </template>
            <template v-if="labelPos == 'RIGHT' ">
                <slot></slot>
                <div class="prompt_text_right">{{error}}</div>
                <ion-label :class="classes" :style="{minWidth:labelWidth+'px'}" v-if="isShowCaption && labelWidth > 0">{{isEmptyCaption ? '' : caption}}</ion-label>
            </template>
            <template v-if="labelPos == 'NONE'" >
                <slot></slot>
            </template>
      </template>
  </ion-item>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { Util } from '@/ibiz-core/utils';
@Component({})
export default class AppFormItem extends Vue {
    /**
     * 名称
     *
     * @type {string}
     * @memberof AppFormItem
     */
    @Prop() public caption!: string;

    /**
     * 是否禁用
     *
     * @type {boolean}
     * @memberof AppFormItem
     */
    @Prop() public disabled?: boolean;

    /**
     * 错误信息
     *
     * @type {string}
     * @memberof AppFormItem
     */
    @Prop() public error?: string;

    /**
     * 表单项值
     *
     * @type {any}
     * @memberof AppFormItem
     */
    @Prop() public itemValue?: any;

    /**
     * 错误信息
     *
     * @type {string}
     * @memberof AppFormItem
     */
    public errorText: string = '';

    /**
     * label样式
     *
     * @type {string}
     * @memberof AppFormItem
     */
    @Prop() public labelStyle?: string;

    /**
     * 标签位置
     *
     * @type {(string | 'BOTTOM' | 'LEFT' | 'NONE' | 'RIGHT' | 'TOP')}
     * @memberof AppFormItem
     */
    @Prop() public labelPos?: string | 'BOTTOM' | 'LEFT' | 'NONE' | 'RIGHT' | 'TOP';

    /**
     * 标签宽度
     *
     * @type {number}
     * @memberof AppFormItem
     */
    @Prop({}) public labelWidth!: number;

    /**
     * 是否显示标题
     *
     * @type {boolean}
     * @memberof AppFormItem
     */
    @Prop() public isShowCaption?: boolean;

    /**
     * 标签是否空白
     *
     * @type {boolean}
     * @memberof AppFormItem
     */
    @Prop() public isEmptyCaption?: boolean;

    /**
     * 表单项名称
     *
     * @type {string}
     * @memberof AppFormItem
     */
    @Prop() public name!: string;

    /**
     * 内置样式
     *
     * @type {string}
     * @memberof AppFormItem
     */
    @Prop() public uiStyle?: string;

    /**
     * 表单项值规则
     *
     * @type {any}
     * @memberof AppFormItem
     */
    @Prop() public itemRules!: any;

    /**
     * 值规则数组
     *
     * @type {any[]}
     * @memberof AppFormItem
     */
    public rules: any[] = [];

    /**
     * 是否必填
     *
     * @type {boolean}
     * @memberof AppFormItem
     */
    public required: boolean = false;

    /**
     * 表单项值规则监控
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof AppFormItem
     */
    @Watch('itemRules', { deep: true })
    onItemRulesChange(newVal: any, oldVal: any) {
        if (!newVal) {
            return;
        }
        this.computeRequired(newVal);
    }

    /**
     * 计算样式
     *
     * @readonly
     * @type {string []}
     * @memberof AppFormItem
     */
    get classes(): string[] {
        return [
            'app-form-item',
            Object.is(this.labelPos, 'TOP') ? 'app-form-item-label-top item-label-floating' : '', this.required ? 'app-form-item-label-required' : 'app-form-item-label-notRequired', this.itemValue!= null && this.itemValue !=undefined ? "item-has-value" : "", 'sc-ion-label-ios-h', 'sc-ion-label-ios-s ', 'ios', ' hydrated'
        ];
    }

    /**
     * 内容样式
     *
     * @readonly
     * @memberof AppFormItem
     */
    get contentStyle() {
        return {
            width: this.isShowCaption && this.labelWidth > 0 ? `calc(100% - ${this.labelWidth}px)` : '100%',
        }
    }

    /**
     * 计算是否必填
     *
     * @private
     * @param {*} rules
     * @memberof AppFormItem
     */
    private computeRequired(rules: any): void {
        try {
            const _rules: any[] = rules;
            this.rules = [..._rules];
            this.rules.some((rule: any) => {
                if (rule.hasOwnProperty('required')) {
                    this.required = rule.required;
                    return true;
                }
                return false;
            });
        } catch (error) {
        }
    }

    /**
     * 校验值规则
     *
     * @returns {boolean}
     * @memberof AppFormItem
     */
    public async validateRules(): Promise<boolean> {
        return await this.validate(name, this.itemValue);
    }

    /**
     * 校验值规则
     *
     * @returns {boolean}
     * @memberof AppFormItem
     */
    public validate(property: string, data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            Util.validateItem(property, data, this.rules).then(() => {
                this.errorText = "";
                resolve(true);
            }).catch(({ errors, fields }) => {
                this.errorText = errors[0].message;
                resolve(false);
            });
        });

    }

    /**
     * vue 生命周期
     *
     * @memberof AppFormItem
     */
    public mounted() {
        if (this.itemRules) {
            this.computeRequired(this.itemRules);
        }
    }

}
</script>

<style lang='less'>
@import './app-form-item.less';
</style>