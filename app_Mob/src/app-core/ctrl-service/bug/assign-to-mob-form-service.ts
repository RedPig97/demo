import { FormServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { AssignToMobModel } from '@/app-core/ctrl-model/bug/assign-to-mob-form-model';


/**
 * AssignToMob 部件服务对象
 *
 * @export
 * @class AssignToMobService
 * @extends {FormServiceBase}
 */
export class AssignToMobService extends FormServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {AssignToMobModel}
     * @memberof ControlServiceBase
     */
    protected model: AssignToMobModel = new AssignToMobModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof AssignToMobService
     */
    protected appDEName: string = 'bug';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof AssignToMobService
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
     * @memberof  AssignToMobService
     */
    public async getItems(serviceName: string, interfaceName: string, context?: any, data?: any, isLoading?: boolean): Promise<any[]> {
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
     * @memberof AssignToMobService
     */
    public mergeDefaults(response:any = {}): void {
        if (response.data) {
        }
    }

}
// 默认导出
export default AssignToMobService;