import { ListServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MobModel } from '@/app-core/ctrl-model/sub-task/mob-panel-model';


/**
 * Mob 部件服务对象
 *
 * @export
 * @class MobService
 * @extends {ListServiceBase}
 */
export class MobService extends ListServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MobModel}
     * @memberof ControlServiceBase
     */
    protected model: MobModel = new MobModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobService
     */
    protected appDEName: string = 'subtask';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MobService
     */
    protected appDeKey: string = 'id';
}
// 默认导出
export default MobService;