<template>
  <div class="ion-textarea">
        <ion-textarea
        :placeholder="placeholder"
        :auto-grow = "true"
        :value = "value"
        @ionChange = "valueChange($event)"
      ></ion-textarea>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';

@Component({
    components: {
    }
})
export default class AppTextarea extends Vue {       
    /**
     * 输入值
     *
     * @type {string}
     * @memberof AppTextarea
     */
    @Prop() public value?: string;
        
    /**
     * 值改变
     * 
     * @memberof AppTextarea
     */
    public valueChange(event:any){
     	this.$emit('change',event.detail.value);
    }

		/**
     * 占位提示文字
     *
     * @type {string}
     * @memberof AppTextarea
     */
    @Prop() public placeholder?:string;       
}
</script>
<style lang="less">
@import './app-mob-textarea.less';
</style>