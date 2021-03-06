/**
 * MobMPickupViewpickupviewpanel 部件模型
 *
 * @export
 * @class MobMPickupViewpickupviewpanelModel
 */
export class MobMPickupViewpickupviewpanelModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MobMPickupViewpickupviewpanelModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'name',
      },
      {
        name: 'builder',
      },
      {
        name: 'desc',
      },
      {
        name: 'build',
        prop: 'id',
      },
      {
        name: 'deleted',
      },
      {
        name: 'scmpath',
      },
      {
        name: 'filepath',
      },
      {
        name: 'stories',
      },
      {
        name: 'bugs',
      },
      {
        name: 'date',
      },
      {
        name: 'product',
      },
      {
        name: 'branch',
      },
      {
        name: 'project',
      },
      {
        name: 'productname',
      },
      {
        name: 'ids',
      },
      {
        name: 'files',
      },
      {
        name: 'rebuild',
      },
      {
        name: 'releasetype',
      },
      {
        name: 'frontapplication',
      },
      {
        name: 'backgroundid',
      },
      {
        name: 'sqlid',
      },
      {
        name: 'createbugcnt',
      },
      {
        name: 'builderpk',
      },
      {
        name: 'noticeusers',
      },
    ]
  }

}
// 默认导出
export default MobMPickupViewpickupviewpanelModel;