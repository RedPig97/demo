import { SearchFormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MobDefModel } from '@/app-core/ctrl-model/test-suite/mob-def-searchform-model';


/**
 * MobDef 部件服务对象
 *
 * @export
 * @class MobDefService
 * @extends {SearchFormServiceBase}
 */
export class MobDefService extends SearchFormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MobDefModel}
     * @memberof ControlServiceBase
     */
    protected model: MobDefModel = new MobDefModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobDefService
     */
    protected appDEName: string = 'testsuite';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MobDefService
     */
    protected appDeKey: string = 'id';

    /**
     * 获取跨实体数据集合
     *
     * @param {string} serviceName 服务名称
     * @param {string} interfaceName 接口名称
     * @param {*} [context]
     * @param {*} [data]
     * @param {boolean} [isLoading]
     * @returns {Promise<any[]>}
     * @memberof  MobDefService
     */
    public async getItems(serviceName: string, interfaceName: string, context?: any, data?: any, isLoading?: boolean): Promise<any[]> {
        return [];
    }

    /**
     * 合并配置的默认值
     *
     * @protected
     * @param {*} [response={}]
     * @memberof MobDefService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
        }
    }

}
// 默认导出
export default MobDefService;