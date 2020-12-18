import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MobMainEditModel } from '@/app-core/ctrl-model/story/mob-main-edit-form-model';


/**
 * MobMainEdit 部件服务对象
 *
 * @export
 * @class MobMainEditService
 * @extends {FormServiceBase}
 */
export class MobMainEditService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MobMainEditModel}
     * @memberof ControlServiceBase
     */
    protected model: MobMainEditModel = new MobMainEditModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobMainEditService
     */
    protected appDEName: string = 'story';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MobMainEditService
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
     * @memberof  MobMainEditService
     */
    public async getItems(serviceName: string, interfaceName: string, context?: any, data?: any, isLoading?: boolean): Promise<any[]> {
        if (Object.is(serviceName, 'ProductService') && Object.is(interfaceName, 'FetchDefault')) {
            const service: any = await this.getService('product');
            await this.onBeforeAction(interfaceName, context, data, isLoading);
            const response: any = await service.FetchDefault(data);
            return this.doItems(response);
        }
        if (Object.is(serviceName, 'ProductModuleService') && Object.is(interfaceName, 'FetchStoryModule')) {
            const service: any = await this.getService('productmodule');
            await this.onBeforeAction(interfaceName, context, data, isLoading);
            const response: any = await service.FetchStoryModule(data);
            return this.doItems(response);
        }
        if (Object.is(serviceName, 'SysEmployeeService') && Object.is(interfaceName, 'FetchDefault')) {
            const service: any = await this.getService('sysemployee');
            await this.onBeforeAction(interfaceName, context, data, isLoading);
            const response: any = await service.FetchDefault(data);
            return this.doItems(response);
        }
        return [];
    }

    /**
     * 合并配置的默认值
     *
     * @protected
     * @param {*} [response={}]
     * @memberof MobMainEditService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
            Object.assign(response.data, { 'neednotreview': '1' });
        }
    }

}
// 默认导出
export default MobMainEditService;