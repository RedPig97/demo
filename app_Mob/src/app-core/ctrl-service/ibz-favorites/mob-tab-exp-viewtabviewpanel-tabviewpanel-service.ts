import { TabViewPanelServiceBase } from '@/ibiz-core';
import { Util, HttpResponse } from '@/ibiz-core/utils';
import { MobTabExpViewtabviewpanelModel } from '@/app-core/ctrl-model/ibz-favorites/mob-tab-exp-viewtabviewpanel-tabviewpanel-model';


/**
 * MobTabExpViewtabviewpanel 部件服务对象
 *
 * @export
 * @class MobTabExpViewtabviewpanelService
 * @extends {TabViewPanelServiceBase}
 */
export class MobTabExpViewtabviewpanelService extends TabViewPanelServiceBase {

    /**
     * 部件模型
     *
     * @protected
     * @type {MobTabExpViewtabviewpanelModel}
     * @memberof ControlServiceBase
     */
    protected model: MobTabExpViewtabviewpanelModel = new MobTabExpViewtabviewpanelModel();

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MobTabExpViewtabviewpanelService
     */
    protected appDEName: string = 'ibzfavorites';

    /**
     * 当前应用实体主键标识
     *
     * @protected
     * @type {string}
     * @memberof MobTabExpViewtabviewpanelService
     */
    protected appDeKey: string = 'ibzfavoritesid';
}
// 默认导出
export default MobTabExpViewtabviewpanelService;