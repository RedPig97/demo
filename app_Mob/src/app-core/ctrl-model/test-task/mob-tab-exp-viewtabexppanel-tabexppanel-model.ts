/**
 * MobTabExpViewtabexppanel 部件模型
 *
 * @export
 * @class MobTabExpViewtabexppanelModel
 */
export class MobTabExpViewtabexppanelModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MobTabExpViewtabexppanelModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'end',
      },
      {
        name: 'begin',
      },
      {
        name: 'mailto',
      },
      {
        name: 'pri',
      },
      {
        name: 'substatus',
      },
      {
        name: 'report',
      },
      {
        name: 'desc',
      },
      {
        name: 'testtask',
        prop: 'id',
      },
      {
        name: 'status',
      },
      {
        name: 'owner',
      },
      {
        name: 'deleted',
      },
      {
        name: 'auto',
      },
      {
        name: 'name',
      },
      {
        name: 'product',
      },
      {
        name: 'build',
      },
      {
        name: 'project',
      },
      {
        name: 'productname',
      },
      {
        name: 'projecttname',
      },
      {
        name: 'buildname',
      },
      {
        name: 'comment',
      },
      {
        name: 'casecnt',
      },
      {
        name: 'ownerpk',
      },
      {
        name: 'mailtoconact',
      },
      {
        name: 'mailtopk',
      },
    ]
  }

}
// 默认导出
export default MobTabExpViewtabexppanelModel;