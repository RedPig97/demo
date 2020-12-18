import commonLogic from '@/locale/logic/common/common-logic';
export default {
  fields: {
    lastediteddate: "修改日期",
    scripteddate: "scriptedDate",
    color: "标题颜色",
    path: "path",
    openeddate: "创建日期",
    lastrunresult: "结果",
    linkcase: "相关用例",
    order: "排序",
    howrun: "howRun",
    version: "用例版本",
    scriptedby: "scriptedBy",
    openedby: "由谁创建",
    type: "用例类型",
    status: "用例状态",
    auto: "auto",
    frequency: "frequency",
    title: "用例标题",
    lasteditedby: "最后修改者",
    reviewedby: "由谁评审",
    deleted: "已删除",
    revieweddate: "评审时间",
    pri: "优先级",
    stage: "适用阶段",
    scriptlocation: "scriptLocation",
    lastrundate: "执行时间",
    keywords: "关键词",
    scriptstatus: "scriptStatus",
    frame: "工具/框架",
    substatus: "子状态",
    id: "用例编号",
    precondition: "前置条件",
    lastrunner: "执行人",
    fromcaseversion: "来源用例版本",
    storyversion: "需求版本",
    fromcaseid: "来源用例",
    branch: "平台/分支",
    frombug: "来源Bug",
    story: "相关需求",
    product: "所属产品",
    lib: "所属库",
    module: "所属模块",
    modulename: "模块名称",
    storyname: "需求名称",
    productname: "产品名称",
    casesteps: "用例步骤集合",
    tobugcnt: "转bug数",
    resultcnt: "测试结果数",
    stepcnt: "用例步骤数",
    comment: "备注",
    resultfalicnt: "测试失败数",
    status1: "用例状态",
    assignedto: "指派给",
    task: "属性",
    libname: "用例库",
    lastrunresult1: "测试用例结果",
    isfavorites: "是否收藏",
    modulename1: "模块名称",
    files: "附件",
    noticeusers: "消息通知用户",
  },
	views: {
		mobmdview_testtask: {
			caption: commonLogic.appcommonhandle("测试用例",null),
		},
		mobmdview_testsuite: {
			caption: commonLogic.appcommonhandle("测试用例",null),
		},
		usr2mobmpickupview: {
			caption: commonLogic.appcommonhandle("关联用例",null),
		},
		mobmdview: {
			caption: commonLogic.appcommonhandle("测试用例",null),
		},
		usr2mobpickupmdview: {
			caption: commonLogic.appcommonhandle("关联用例",null),
		},
		createcasemobeditview: {
			caption: commonLogic.appcommonhandle("测试用例",null),
		},
		mobeditview: {
			caption: commonLogic.appcommonhandle("测试用例",null),
		},
	},
	mobmain_form: {
		details: {
			druipart1: commonLogic.appcommonhandle("",null), 
			grouppanel1: commonLogic.appcommonhandle("用例步骤",null), 
			druipart2: commonLogic.appcommonhandle("",null), 
			grouppanel2: commonLogic.appcommonhandle("历史记录",null), 
			group1: commonLogic.appcommonhandle("测试用例基本信息",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srfupdatedate: commonLogic.appcommonhandle("修改日期",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("用例编号",null), 
			srfmajortext: commonLogic.appcommonhandle("用例标题",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			title: commonLogic.appcommonhandle("用例标题",null), 
			type: commonLogic.appcommonhandle("用例类型",null), 
			stage: commonLogic.appcommonhandle("适用阶段",null), 
			precondition: commonLogic.appcommonhandle("前置条件",null), 
			id: commonLogic.appcommonhandle("用例编号",null), 
			version: commonLogic.appcommonhandle("用例版本",null), 
			keywords: commonLogic.appcommonhandle("关键词",null), 
		},
		uiactions: {
		},
	},
	createmob_form: {
		details: {
			group1: commonLogic.appcommonhandle("测试用例基本信息",null), 
			formpage1: commonLogic.appcommonhandle("基本信息",null), 
			srfupdatedate: commonLogic.appcommonhandle("修改日期",null), 
			srforikey: commonLogic.appcommonhandle("",null), 
			srfkey: commonLogic.appcommonhandle("用例编号",null), 
			srfmajortext: commonLogic.appcommonhandle("用例标题",null), 
			srftempmode: commonLogic.appcommonhandle("",null), 
			srfuf: commonLogic.appcommonhandle("",null), 
			srfdeid: commonLogic.appcommonhandle("",null), 
			srfsourcekey: commonLogic.appcommonhandle("",null), 
			title: commonLogic.appcommonhandle("用例标题",null), 
			type: commonLogic.appcommonhandle("用例类型",null), 
			stage: commonLogic.appcommonhandle("适用阶段",null), 
			precondition: commonLogic.appcommonhandle("前置条件",null), 
			version: commonLogic.appcommonhandle("用例版本",null), 
			keywords: commonLogic.appcommonhandle("关键词",null), 
			id: commonLogic.appcommonhandle("用例编号",null), 
		},
		uiactions: {
		},
	},
	mobdef_searchform: {
		details: {
			formpage1: commonLogic.appcommonhandle("常规条件",null), 
			n_title_like: commonLogic.appcommonhandle("用例标题",null), 
			n_type_eq: commonLogic.appcommonhandle("用例类型",null), 
			n_status_eq: commonLogic.appcommonhandle("用例状态",null), 
			n_modulename_eq: commonLogic.appcommonhandle("模块名称",null), 
		},
		uiactions: {
		},
	},
	mobmdview_testtaskrighttoolbar2_toolbar: {
		deuiaction1: {
			caption: commonLogic.appcommonhandle("关联需求",null),
			tip: '关联需求',
		},
	},
	mobeditviewrighttoolbar_toolbar: {
	},
	createcasemobeditviewrighttoolbar_toolbar: {
		tbitem1: {
			caption: commonLogic.appcommonhandle("保存",null),
			tip: '保存',
		},
	},
	mobmdviewrighttoolbar_toolbar: {
		deuiaction1: {
			caption: commonLogic.appcommonhandle("移动端新建",null),
			tip: '移动端新建',
		},
	},
	mobmdview_testsuiterighttoolbar_toolbar: {
	},
};