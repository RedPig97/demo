/**
 * MyWeekly 部件模型
 *
 * @export
 * @class MyWeeklyModel
 */
export class MyWeeklyModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MyWeeklyModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'ibzweeklyname',
      },
      {
        name: 'ibzweekly',
        prop: 'ibzweeklyid',
      },
      {
        name: 'createman',
      },
      {
        name: 'createdate',
      },
      {
        name: 'updateman',
      },
      {
        name: 'updatedate',
      },
      {
        name: 'account',
      },
      {
        name: 'mailto',
      },
      {
        name: 'files',
      },
      {
        name: 'issubmit',
      },
      {
        name: 'reportto',
      },
      {
        name: 'comment',
      },
      {
        name: 'date',
      },
      {
        name: 'workthisweek',
      },
      {
        name: 'plannextweek',
      },
      {
        name: 'thisweektask',
      },
      {
        name: 'nextweektask',
      },
      {
        name: 'updatemanname',
      },
      {
        name: 'createmanname',
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
export default MyWeeklyModel;