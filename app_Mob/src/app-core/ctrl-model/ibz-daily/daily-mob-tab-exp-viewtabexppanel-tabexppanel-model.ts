/**
 * DailyMobTabExpViewtabexppanel 部件模型
 *
 * @export
 * @class DailyMobTabExpViewtabexppanelModel
 */
export class DailyMobTabExpViewtabexppanelModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof DailyMobTabExpViewtabexppanelModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'createman',
      },
      {
        name: 'ibzdaily',
        prop: 'ibzdailyid',
      },
      {
        name: 'ibzdailyname',
      },
      {
        name: 'updatedate',
      },
      {
        name: 'createdate',
      },
      {
        name: 'updateman',
      },
      {
        name: 'date',
      },
      {
        name: 'account',
      },
      {
        name: 'worktoday',
      },
      {
        name: 'mailto',
      },
      {
        name: 'files',
      },
      {
        name: 'todaytask',
      },
      {
        name: 'issubmit',
      },
      {
        name: 'planstomorrow',
      },
      {
        name: 'tomorrowplanstask',
      },
      {
        name: 'reportto',
      },
      {
        name: 'comment',
      },
      {
        name: 'createmanname',
      },
      {
        name: 'updatemanname',
      },
      {
        name: 'reportstatus',
      },
      {
        name: 'submittime',
      },
      {
        name: 'reporttopk',
      },
      {
        name: 'mailtopk',
      },
    ]
  }

}
// 默认导出
export default DailyMobTabExpViewtabexppanelModel;