const inboundOrders = [
  {
    no: "RK-20260612-018",
    type: "租赁入库",
    source: "CK-20260612-018",
    warehouse: "华东项目虚拟仓",
    project: "华东高架 3 标",
    supplier: "上海物料站",
    sourceOrder: "ZLDD-20260601-018",
    itemCount: 3,
    amount: "300 件 / 12.8 吨",
    grossWeight: "17.20",
    tareWeight: "4.40",
    netWeight: "12.80",
    outboundGrossWeight: "17.20",
    outboundTareWeight: "4.40",
    outboundNetWeight: "12.80",
    vehicleNo: "沪A·K2096",
    driver: "张师傅 13800001234",
    outboundAddress: "上海物料站 A 库区",
    inboundAddress: "华东高架 3 标项目仓",
    syncState: "待项目验收",
    files: ["复磅照片 待上传", "收货照片 待上传", "签收/确认单 待上传"],
    accept: "待验收",
    cost: "已带出",
    confirm: "待审批",
    attachment: "待上传",
    status: "草稿",
    date: "2026-06-12",
    task: "pending",
    items: [
      ["标准面板", "1500×3000×6", "批次", "KC-GMB-202606-08", "88", "0", "186000.00", "项目默认库区-01", "待上传", "来源租赁出库"],
      ["钢支撑", "609×16×6000", "批次", "KC-ZC-2026-06", "48", "0", "57600.00", "项目默认库区-01", "待上传", ""],
      ["对拉杆", "M24×1200", "数量", "KC-DLG-202606", "180", "0", "21600.00", "项目默认库区-01", "待上传", ""],
    ],
  },
  {
    no: "RK-20260529-001",
    type: "采购入库",
    source: "CG-20260518-011",
    warehouse: "上海物料站",
    project: "汉江桥梁 2 标",
    supplier: "上海桥装装备有限公司",
    sourceOrder: "CGDD-20260518-011",
    itemCount: 4,
    amount: "628 件 / 12.8 吨",
    grossWeight: "17.20",
    tareWeight: "4.40",
    netWeight: "12.80",
    outboundGrossWeight: "17.20",
    outboundTareWeight: "4.40",
    outboundNetWeight: "12.80",
    vehicleNo: "沪A·K2096",
    driver: "张师傅 13800001234",
    outboundAddress: "上海物料站 A 库区",
    inboundAddress: "汉江桥梁 2 标项目仓",
    syncState: "待仓库确认差异",
    files: ["复磅照片 2 张", "收货照片 4 张", "签收/确认单 已上传"],
    accept: "待验收",
    cost: "待录入",
    confirm: "待提交",
    attachment: "待上传",
    status: "待入库",
    date: "2026-05-29",
    task: "pending",
    items: [
      ["贝雷片", "321 型 3m Q345", "批次", "自动生成", "360", "0", "0.00", "A-01-01", "待上传", "采购到货"],
      ["连接销", "M30 加强型", "数量", "自动生成", "180", "0", "0.00", "A-04-02", "待上传", ""],
      ["高强螺栓", "10.9 级 M24", "数量", "自动生成", "88", "0", "0.00", "A-04-02", "待上传", ""],
    ],
  },
  {
    no: "RK-20260528-008",
    type: "租赁退换入库",
    source: "TK-20260528-003",
    warehouse: "上海物料站",
    project: "沪苏湖站房",
    supplier: "项目退库",
    sourceOrder: "ZLDD-20260502-006",
    itemCount: 3,
    amount: "216 件 / 8.4 吨",
    grossWeight: "13.10",
    tareWeight: "4.70",
    netWeight: "8.40",
    outboundGrossWeight: "13.30",
    outboundTareWeight: "4.70",
    outboundNetWeight: "8.60",
    vehicleNo: "苏E·7K261",
    driver: "李师傅 13900004567",
    outboundAddress: "沪苏湖站房项目仓",
    inboundAddress: "上海物料站 B 待检区",
    syncState: "待仓库确认差异",
    files: ["复磅照片 1 张", "收货照片 3 张", "签收/确认单 已上传"],
    accept: "异常",
    cost: "已录入",
    confirm: "待确认",
    attachment: "已上传",
    status: "部分入库",
    date: "2026-05-28",
    task: "inspect",
    items: [
      ["钢模板", "1500x3000x80", "序列号", "KC-GMB-0008", "120", "108", "168000.00", "B-01-03", "已上传", "12 块待检"],
      ["扣件", "48 系列 十字", "数量", "FC-2026-05-017", "80", "78", "1560.00", "B-01-03", "已上传", "2 只异常"],
    ],
  },
  {
    no: "RK-20260527-006",
    type: "翻新入库",
    source: "FX-20260526-006",
    warehouse: "上海物料站",
    project: "科创中心备料",
    supplier: "内部翻新班组",
    sourceOrder: "FXRW-20260526-006",
    itemCount: 2,
    amount: "96 件 / 5.4 吨",
    grossWeight: "9.60",
    tareWeight: "4.20",
    netWeight: "5.40",
    outboundGrossWeight: "9.60",
    outboundTareWeight: "4.20",
    outboundNetWeight: "5.40",
    vehicleNo: "沪B·3F098",
    driver: "王师傅 13600007890",
    outboundAddress: "翻新车间",
    inboundAddress: "上海物料站 A 库区",
    syncState: "已同步出库记录",
    files: ["复磅照片 1 张", "收货照片 2 张"],
    accept: "通过",
    cost: "待复核",
    confirm: "已确认",
    attachment: "已上传",
    status: "已入库",
    date: "2026-05-27",
    task: "cost",
    items: [
      ["钢支撑", "609x16x6000", "批次", "KC-ZC-2026-04", "96", "96", "43200.00", "A-03-02", "已上传", "翻新成本待复核"],
      ["墩身标准节", "2.0m Q355", "序列号", "KC-DS-RET-0526", "28", "28", "39200.00", "A-03-03", "已上传", ""],
    ],
  },
  {
    no: "RK-20260526-012",
    type: "调拨入库",
    source: "DB-20260525-018",
    warehouse: "苏州装备中心",
    project: "沪苏湖站房",
    supplier: "上海物料站",
    sourceOrder: "DBDD-20260525-018",
    itemCount: 2,
    amount: "102 件 / 4.6 吨",
    grossWeight: "8.90",
    tareWeight: "4.30",
    netWeight: "4.60",
    outboundGrossWeight: "8.90",
    outboundTareWeight: "4.30",
    outboundNetWeight: "4.60",
    vehicleNo: "苏E·6D188",
    driver: "赵师傅 13700001122",
    outboundAddress: "上海物料站",
    inboundAddress: "苏州装备中心",
    syncState: "已同步租赁订单",
    files: ["复磅照片 1 张", "签收/确认单 已上传"],
    accept: "通过",
    cost: "已录入",
    confirm: "已确认",
    attachment: "已上传",
    status: "已入库",
    date: "2026-05-26",
    task: "all",
    items: [
      ["防护平台", "4.5m 装配式", "序列号", "DB-20260525-018", "42", "42", "210000.00", "A-02-01", "已上传", ""],
      ["爬架导轨", "6m 标准段", "序列号", "KC-PJ-2026-03", "60", "60", "78000.00", "A-02-02", "已上传", ""],
    ],
  },
  {
    no: "RK-20260525-004",
    type: "新生产入库",
    source: "SC-20260520-002",
    warehouse: "上海物料站",
    project: "科创中心备料",
    supplier: "自有加工车间",
    sourceOrder: "SCDD-20260520-002",
    itemCount: 1,
    amount: "24 件 / 9.6 吨",
    grossWeight: "14.10",
    tareWeight: "4.50",
    netWeight: "9.60",
    outboundGrossWeight: "14.10",
    outboundTareWeight: "4.50",
    outboundNetWeight: "9.60",
    vehicleNo: "沪D·8P516",
    driver: "周师傅 13500003344",
    outboundAddress: "自有加工车间",
    inboundAddress: "上海物料站 A 库区",
    syncState: "待项目复核",
    files: ["收货照片 待上传", "签收/确认单 待上传"],
    accept: "待验收",
    cost: "待录入",
    confirm: "待提交",
    attachment: "待上传",
    status: "待入库",
    date: "2026-05-25",
    task: "pending",
    items: [
      ["墩身标准节", "2.0m Q355", "序列号", "自动生成", "24", "0", "0.00", "A-03-01", "待上传", "新生产入库"],
    ],
  },
  {
    no: "RK-20260524-009",
    type: "改制入库",
    source: "GZ-20260522-001",
    warehouse: "上海物料站",
    project: "科创中心备料",
    supplier: "内部改制班组",
    sourceOrder: "GZRW-20260522-001",
    itemCount: 2,
    amount: "38 件 / 3.1 吨",
    grossWeight: "7.40",
    tareWeight: "4.30",
    netWeight: "3.10",
    outboundGrossWeight: "7.90",
    outboundTareWeight: "4.30",
    outboundNetWeight: "3.60",
    vehicleNo: "沪C·5G336",
    driver: "陈师傅 13100005566",
    outboundAddress: "改制车间",
    inboundAddress: "上海物料站 B 待检区",
    syncState: "待仓库确认差异",
    files: ["复磅照片 1 张", "收货照片 2 张"],
    accept: "异常",
    cost: "待录入",
    confirm: "驳回",
    attachment: "已上传",
    status: "部分入库",
    date: "2026-05-24",
    task: "inspect",
    items: [
      ["异形钢模板", "改制 1200x2600", "批次", "GZ-20260522-001", "30", "22", "0.00", "B-02-01", "已上传", "尺寸复核不通过"],
    ],
  },
];

const sourceOutboundRecords = [
  {
    no: "CK-20260612-018",
    type: "租赁",
    sourceOrder: "ZLDD-20260601-018",
    project: "华东高架 3 标",
    warehouse: "上海物料站",
    confirm: "已确认",
    status: "已出库",
    date: "2026-06-12",
    items: [
      { id: "CK018-01", name: "标准面板", spec: "1500×3000×6", dimension: "批次", outbound: 120, returned: 32, unit: "块", code: "KC-GMB-202606-08", slot: "A-02-03", cost: "186000.00" },
      { id: "CK018-02", name: "钢支撑", spec: "609×16×6000", dimension: "批次", outbound: 64, returned: 16, unit: "根", code: "KC-ZC-2026-06", slot: "A-03-06", cost: "57600.00" },
      { id: "CK018-03", name: "对拉杆", spec: "M24×1200", dimension: "数量", outbound: 360, returned: 180, unit: "根", code: "KC-DLG-202606", slot: "A-05-02", cost: "21600.00" },
    ],
  },
  {
    no: "CK-20260610-006",
    type: "调拨",
    sourceOrder: "DBDD-20260608-006",
    project: "苏州综合管廊二期",
    warehouse: "苏州装备中心",
    confirm: "已确认",
    status: "部分出库",
    date: "2026-06-10",
    items: [
      { id: "CK006-01", name: "防护平台", spec: "4.5m 装配式", dimension: "序列号", outbound: 36, returned: 6, unit: "套", code: "FHT-260601~260636", slot: "T-01", cost: "180000.00" },
      { id: "CK006-02", name: "爬架导轨", spec: "6m 标准段", dimension: "序列号", outbound: 48, returned: 12, unit: "根", code: "PJDG-260101~260148", slot: "A-03-06", cost: "62400.00" },
    ],
  },
  {
    no: "CK-20260608-009",
    type: "翻新",
    sourceOrder: "FXRW-20260606-009",
    project: "科创中心备料",
    warehouse: "上海物料站",
    confirm: "已确认",
    status: "已出库",
    date: "2026-06-08",
    items: [
      { id: "CK009-01", name: "钢支撑", spec: "609×16×6000", dimension: "批次", outbound: 96, returned: 40, unit: "根", code: "KC-ZC-2026-04", slot: "C-02-01", cost: "43200.00" },
      { id: "CK009-02", name: "墩身标准节", spec: "2.0m Q355", dimension: "序列号", outbound: 28, returned: 8, unit: "节", code: "KC-DS-RET-0526", slot: "C-02-02", cost: "39200.00" },
    ],
  },
  {
    no: "CK-20260605-004",
    type: "改制",
    sourceOrder: "GZRW-20260602-004",
    project: "科创中心备料",
    warehouse: "上海物料站",
    confirm: "已确认",
    status: "已出库",
    date: "2026-06-05",
    items: [
      { id: "CK004-01", name: "异形钢模板", spec: "原规格 1200×2400", dimension: "批次", outbound: 30, returned: 0, unit: "块", code: "GZ-20260605-001", slot: "A-02-06", cost: "90000.00" },
    ],
  },
];

const inboundTypeConfigs = {
  "租赁入库": {
    sourceLabel: "来源租赁出库",
    sourceRule: "仓库租赁出库审批通过后，项目侧自动生成入库草稿",
    handler: "项目业务操作角色",
    approval: "项目验收提交审批，差异回写仓库出库记录",
    stockEffect: "审批通过后增加项目仓在用/待检库存",
    materialMode: "从来源租赁出库同步物资清单",
    requiredAttachments: ["复磅照片", "收货照片", "签收/确认单"],
    fields: [
      ["来源出库单", "选择已审批租赁出库记录"],
      ["验收结论", "可用 / 待检 / 部分接收"],
      ["差异处理", "少收/多收回写来源出库，待仓库确认"],
      ["租赁订单同步", "审批通过后同步租赁订单差值"],
    ],
    detailBlocks: [
      ["项目验收", "逐项填写实收复核数量、差值和验收结论"],
      ["差异回写", "数量或重量差异进入待仓库确认状态"],
      ["订单联动", "仓库确认后同步租赁订单执行数量"],
    ],
  },
  "调拨入库": {
    sourceLabel: "来源调拨出库",
    sourceRule: "调拨出库审批通过后，目标仓自动生成入库草稿",
    handler: "仓库业务操作角色",
    approval: "目标仓验收后提交审批",
    stockEffect: "审批通过后增加目标仓库存，来源仓保持出库记录",
    materialMode: "从来源调拨出库同步物资清单",
    requiredAttachments: ["复磅照片", "收货照片", "调拨确认单"],
    fields: [
      ["来源调拨单", "选择已审批调拨出库记录"],
      ["目标仓库", "自动带出调入仓库"],
      ["验收差异", "差异回写调拨出库记录"],
      ["库存转移", "审批通过后完成目标仓入库"],
    ],
    detailBlocks: [
      ["调拨验收", "核对调拨出库清单与实际到货"],
      ["差异确认", "目标仓提交差异后由来源仓确认"],
      ["库存更新", "确认通过后完成库存转移闭环"],
    ],
  },
  "租赁退换入库": {
    sourceLabel: "来源租赁退换出库",
    sourceRule: "项目发起租赁退换出库，仓库侧自动生成退换入库草稿",
    handler: "仓库业务操作角色",
    approval: "仓库回库验收后提交审批",
    stockEffect: "可用物资恢复仓库库存，待检/报废进入对应状态",
    materialMode: "从项目退还出库同步物资清单",
    requiredAttachments: ["回库照片", "质检照片", "签收/确认单"],
    fields: [
      ["退换出库单", "选择项目已提交退换出库"],
      ["回库判定", "可用 / 待检 / 报废拒收"],
      ["差异确认", "少回、多回、损坏均形成差异"],
      ["库存状态", "按验收结论更新可用/待检/报废库存"],
    ],
    detailBlocks: [
      ["回库验收", "仓库逐项确认项目退还物资"],
      ["状态分流", "可用、待检、报废分别进入不同库存状态"],
      ["租赁闭环", "退还确认后同步租赁订单归还数量"],
    ],
  },
  "翻新入库": {
    sourceLabel: "来源翻新出库",
    sourceRule: "翻新出库审批通过后，自动生成翻新入库待办理记录",
    handler: "仓库业务操作角色",
    approval: "翻新完成上传凭证后提交审批",
    stockEffect: "翻新合格入可用库存，不合格入待检/报废",
    materialMode: "从翻新出库同步待返库物资",
    requiredAttachments: ["翻新完成照片", "维修记录", "质检记录"],
    fields: [
      ["翻新出库单", "自动带出已审批翻新出库"],
      ["翻新结果", "合格 / 待检 / 报废"],
      ["翻新成本", "记录工费、材料费、外协费"],
      ["资产状态", "按质检结果更新资产状态"],
    ],
    detailBlocks: [
      ["翻新完成", "登记完工数量、质检结果和附件"],
      ["成本沉淀", "翻新成本进入成本信息与分析"],
      ["库存恢复", "合格物资恢复可用库存"],
    ],
  },
  "改制入库": {
    sourceLabel: "来源改制出库",
    sourceRule: "改制出库审批通过后，自动生成改制入库待办理记录",
    handler: "仓库业务操作角色",
    approval: "改制完成上传凭证后提交审批",
    stockEffect: "审批通过后生成或更新改制后产品/资产档案",
    materialMode: "从改制出库同步原物资，入库时登记改制后物资",
    requiredAttachments: ["改制完成照片", "改制审批记录", "质检记录"],
    fields: [
      ["改制出库单", "自动带出已审批改制出库"],
      ["改制后产品", "选择或生成新产品/规格"],
      ["原资产关系", "保留原资产编码与改制后编码关系"],
      ["改制成本", "记录改制费用并进入成本档案"],
    ],
    detailBlocks: [
      ["改制完成", "登记改制后规格、数量和资产编码"],
      ["档案联动", "更新产品清单、资产档案和成本信息"],
      ["库存入库", "按改制后产品进入对应库存"],
    ],
  },
  "采购入库": {
    sourceLabel: "来源采购申请",
    sourceRule: "采购申请或采购订单审批通过后，自动生成采购入库记录",
    handler: "仓库业务操作角色",
    approval: "到货验收并上传凭证后提交审批",
    stockEffect: "审批通过后新增仓库库存并沉淀采购成本",
    materialMode: "从采购申请/采购订单同步采购物资",
    requiredAttachments: ["到货照片", "采购凭证", "验收记录"],
    fields: [
      ["采购申请", "选择已审批采购/订单记录"],
      ["供应商", "带出或手工维护供应商"],
      ["批次/编码", "生成批次或一物一码"],
      ["采购成本", "录入或带出采购成本"],
    ],
    detailBlocks: [
      ["到货验收", "核对供应商到货与采购清单"],
      ["成本录入", "成本进入产品/批次成本档案"],
      ["库存新增", "审批通过后新增库存"],
    ],
  },
  "新生产入库": {
    sourceLabel: "来源新生产申请",
    sourceRule: "新生产申请审批通过后，自动生成新生产入库记录",
    handler: "仓库业务操作角色",
    approval: "生产完成并上传凭证后提交审批",
    stockEffect: "审批通过后新增生产成品库存并沉淀生产成本",
    materialMode: "从新生产申请同步生产物资",
    requiredAttachments: ["生产完成照片", "生产凭证", "验收记录"],
    fields: [
      ["新生产申请", "选择已审批生产申请"],
      ["加工单位", "带出或维护加工单位"],
      ["成品编码", "生成批次或一物一码"],
      ["生产成本", "记录材料、加工、运输等成本"],
    ],
    detailBlocks: [
      ["生产完工", "登记生产完成数量和验收结论"],
      ["编码建档", "生成批次/一物一码并进入资产档案"],
      ["成本沉淀", "生产成本进入成本信息与分析"],
    ],
  },
};

let currentTask = "all";
let currentOrder = inboundOrders[0];
let activeOutboundNo = "";
let selectedOutboundMaterialIds = new Set();
const $ = (id) => document.getElementById(id);

const tagClass = {
  "待验收": "tag-yellow",
  "通过": "tag-green",
  "异常": "tag-red",
  "待录入": "tag-yellow",
  "已录入": "tag-green",
  "待复核": "tag-blue",
  "待上传": "tag-yellow",
  "已上传": "tag-green",
  "已带出": "tag-blue",
  "草稿": "tag-gray",
  "待审批": "tag-yellow",
  "审批中": "tag-blue",
  "审批通过": "tag-green",
  "待复核": "tag-yellow",
  "已复核": "tag-green",
  "待提交": "tag-yellow",
  "待确认": "tag-orange",
  "已确认": "tag-green",
  "驳回": "tag-red",
  "待入库": "tag-yellow",
  "部分入库": "tag-blue",
  "已入库": "tag-green",
  "已退回": "tag-red",
  "待项目复核": "tag-yellow",
  "待项目验收": "tag-yellow",
  "待仓库确认差异": "tag-orange",
  "已同步来源出库记录": "tag-blue",
  "已同步业务订单": "tag-green",
  "已同步出库记录": "tag-blue",
  "已同步租赁订单": "tag-green",
  "无差异": "tag-green",
};

function tag(value) {
  return `<span class="tag ${tagClass[value] || "tag-gray"}">${value}</span>`;
}

function isOutboundLinkedType(type = currentOrder.type) {
  return ["租赁入库", "调拨入库"].includes(type);
}

function isReturnType(type = currentOrder.type) {
  return type === "租赁退换入库";
}

function isCompletionType(type = currentOrder.type) {
  return ["翻新入库", "改制入库"].includes(type);
}

function isSupplyType(type = currentOrder.type) {
  return ["采购入库", "新生产入库"].includes(type);
}

function sourceOutboundNo(order = currentOrder) {
  if (["租赁入库", "调拨入库", "租赁退换入库", "翻新入库", "改制入库"].includes(order.type)) return order.source;
  return "";
}

function inboundLocation(order = currentOrder) {
  if (order.type === "租赁入库") return order.inboundAddress || `${order.project}项目仓`;
  if (order.type === "调拨入库") return order.warehouse;
  return order.warehouse;
}

function projectSourceText(order = currentOrder) {
  if (order.type === "调拨入库") return order.supplier || order.outboundAddress || "-";
  if (order.type === "租赁退换入库") return `${order.project} / ${order.supplier}`;
  return order.project || order.supplier || "-";
}

function diffState(order = currentOrder) {
  const diffs = (order.items || []).filter((item) => calcDiff(item) !== 0).length;
  if (!diffs) return "无差异";
  if (order.syncState === "已同步租赁订单") return "已同步业务订单";
  if (order.syncState === "已同步出库记录") return "已同步来源出库记录";
  return order.syncState || "待仓库确认差异";
}

function toNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

function calcDiff(item) {
  return toNumber(item[5]) - toNumber(item[4]);
}

function diffTag(diff) {
  const text = diff > 0 ? `+${diff}` : String(diff);
  const cls = diff > 0 ? "diff-positive" : diff < 0 ? "diff-negative" : "diff-zero";
  return `<span class="diff-tag ${cls}">${text}</span>`;
}

function normalizeItems() {
  currentOrder.items = currentOrder.items.map((item) => {
    if (item.length >= 12) return item;
    const unit = item[10] || inferUnit(item[0]);
    const sourceNo = item[11] || currentOrder.source || "";
    const sourceOrder = item[12] || currentOrder.sourceOrder || "";
    return [item[0], item[1], item[2], item[3], item[4], item[5], item[6], item[7], item[8], item[9], unit, sourceNo, sourceOrder];
  });
}

function inferUnit(name) {
  if (name.includes("模板") || name.includes("面板")) return "块";
  if (name.includes("平台")) return "套";
  if (name.includes("标准节")) return "节";
  return "件";
}

function projectDefaultSlot(project) {
  const map = {
    "华东高架 3 标": "项目默认库区-01",
    "苏州综合管廊二期": "项目默认库区-01",
    "沪苏湖站房": "项目默认库区-01",
    "汉江桥梁 2 标": "项目默认库区-01",
    "科创中心备料": "A-01-01",
  };
  return map[project] || "项目默认库区-01";
}

function resolveSlot(item, record) {
  if (record && record.warehouse.includes("项目")) return projectDefaultSlot(record.project);
  return item.slot || projectDefaultSlot(record ? record.project : currentOrder.project);
}

function renderFiles(targetId) {
  const files = currentOrder.files || ["复磅照片 待上传", "收货照片 待上传", "签收/确认单 待上传"];
  $(targetId).innerHTML = files.map((file) => `<div class="file-item"><span>${file}</span><button type="button">查看</button></div>`).join("");
}

function calculateNetWeight() {
  const gross = toNumber($("grossWeight").value);
  const tare = toNumber($("tareWeight").value);
  const net = Math.max(gross - tare, 0).toFixed(2);
  $("netWeight").value = net;
  currentOrder.grossWeight = gross.toFixed(2);
  currentOrder.tareWeight = tare.toFixed(2);
  currentOrder.netWeight = net;
}

function filteredOrders() {
  const type = $("typeFilter").value;
  const no = $("noFilter").value.trim();
  const source = $("sourceFilter").value.trim();
  const sourceOutbound = $("sourceOutboundFilter").value.trim();
  const warehouse = $("warehouseFilter").value;
  const project = $("projectFilter").value;
  const supplier = $("supplierFilter").value.trim();
  const accept = $("acceptFilter").value;
  const approval = $("approvalFilter").value;
  const diff = $("diffFilter").value;
  const status = $("statusFilter").value;
  return inboundOrders.filter((order) => {
    const taskHit = currentTask === "all" || order.task === currentTask;
    return taskHit
      && (type === "全部" || order.type === type)
      && (!no || order.no.includes(no))
      && (!source || order.source.includes(source) || order.no.includes(source))
      && (!sourceOutbound || sourceOutboundNo(order).includes(sourceOutbound))
      && (warehouse === "全部" || order.warehouse === warehouse)
      && (project === "全部" || order.project === project)
      && (!supplier || order.supplier.includes(supplier))
      && (accept === "全部" || order.accept === accept)
      && (approval === "全部" || order.confirm === approval)
      && (diff === "全部" || diffState(order) === diff)
      && (status === "全部" || order.status === status);
  });
}

function renderList() {
  const rows = filteredOrders();
  $("inboundRows").innerHTML = rows.map((order, index) => `
    <tr>
      <td><input type="checkbox" aria-label="选择 ${order.no}"></td>
      <td title="${order.no}">${order.no}</td>
      <td>${order.type}</td>
      <td title="${order.source}">${order.source}</td>
      <td title="${sourceOutboundNo(order)}">${sourceOutboundNo(order) || "-"}</td>
      <td title="${order.warehouse}">${inboundLocation(order)}</td>
      <td title="${order.project}">${projectSourceText(order)}</td>
      <td>${order.itemCount}</td>
      <td>${tag(order.confirm)}</td>
      <td>${tag(order.accept)}</td>
      <td>${tag(diffState(order))}</td>
      <td>${tag(order.status)}</td>
      <td>
        <div class="row-actions">
          <button data-index="${index}" data-action="detail">查看</button>
          <button data-index="${index}" data-action="handle">办理</button>
          <button data-index="${index}" data-action="confirm">确认</button>
        </div>
      </td>
    </tr>
  `).join("");
  $("emptyState").classList.toggle("hidden", rows.length > 0);
  $("summaryText").textContent = `共 ${rows.length} 条`;
  document.querySelectorAll(".row-actions button").forEach((button) => {
    button.onclick = () => {
      currentOrder = rows[Number(button.dataset.index)];
      if (button.dataset.action === "detail") showDetail();
      if (button.dataset.action === "handle") showHandle("办理入库");
      if (button.dataset.action === "confirm") showHandle("入库确认");
    };
  });
}

function switchView(id) {
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("is-active"));
  $(id).classList.add("is-active");
  window.location.hash = id.replace("View", "");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function detailRow(label, value) {
  return `<div><dt>${label}</dt><dd>${value}</dd></div>`;
}

function compactRow(label, value) {
  return `<div><dt>${label}</dt><dd>${value || "-"}</dd></div>`;
}

function getTypeConfig(type = currentOrder.type) {
  return inboundTypeConfigs[type] || inboundTypeConfigs["租赁入库"];
}

function summaryCard(label, value, tone = "") {
  return `<div class="summary-card ${tone}"><span>${label}</span><strong>${value || "-"}</strong></div>`;
}

function renderTypeOverview() {
  const config = getTypeConfig();
  $("typeOverviewCards").innerHTML = [
    summaryCard("来源类型", config.sourceLabel),
    summaryCard("办理角色", config.handler),
    summaryCard("审批状态", currentOrder.confirm),
    summaryCard("库存状态", currentOrder.status),
  ].join("");
}

function renderSourceRelation() {
  const config = getTypeConfig();
  const diffCount = currentOrder.items.filter((item) => calcDiff(item) !== 0).length;
  const netDiff = toNumber(currentOrder.netWeight) - toNumber(currentOrder.outboundNetWeight);
  $("sourceRelationPanel").innerHTML = [
    ["来源单据", currentOrder.source],
    ["来源订单", currentOrder.sourceOrder || "-"],
    ["来源出库单", sourceOutboundNo() || "-"],
    ["入库位置", inboundLocation()],
    ["差异状态", currentOrder.syncState || "待项目验收"],
    ["差异统计", `${diffCount} 项数量差异 / 净重差异 ${netDiff > 0 ? "+" : ""}${netDiff.toFixed(2)} 吨`],
  ].map(([label, value]) => compactRow(label, value)).join("");
  $("syncCards").innerHTML = [
    summaryCard("来源类型", config.sourceLabel),
    summaryCard("当前状态", currentOrder.syncState || "待项目验收", "primary"),
    summaryCard("库存状态", currentOrder.status),
  ].join("");
}

function renderTypeDetail() {
  const config = getTypeConfig();
  const rows = typeSpecificRows();
  $("typeDetailPanel").innerHTML = `
    <div class="type-block-grid">
      ${config.detailBlocks.map(([title, text]) => `<div class="type-block"><strong>${title}</strong><span>${text}</span></div>`).join("")}
    </div>
    <table class="type-field-table">
      <thead><tr><th>字段</th><th>内容</th></tr></thead>
      <tbody>${rows.map(([label, value]) => `<tr><td>${label}</td><td>${value}</td></tr>`).join("")}</tbody>
    </table>
    <div class="attachment-requirements">
      ${config.requiredAttachments.map((item) => `<span>${item}</span>`).join("")}
    </div>
  `;
}

function typeSpecificRows() {
  const diffCount = currentOrder.items.filter((item) => calcDiff(item) !== 0).length;
  if (currentOrder.type === "租赁入库") return [["来源租赁订单", currentOrder.sourceOrder], ["来源出库单", currentOrder.source], ["入库位置/项目仓库", inboundLocation()], ["来源仓库", currentOrder.supplier || currentOrder.warehouse], ["差异数量", `${diffCount} 项`]];
  if (currentOrder.type === "调拨入库") return [["来源调拨订单", currentOrder.sourceOrder], ["来源出库单", currentOrder.source], ["调出仓", currentOrder.supplier], ["调入仓", currentOrder.warehouse], ["库存转移记录", currentOrder.syncState || "待同步"]];
  if (currentOrder.type === "租赁退换入库") return [["来源退换申请", currentOrder.sourceOrder], ["来源退换出库单", currentOrder.source], ["原租赁订单", currentOrder.sourceOrder], ["退换原因", currentOrder.returnReason || "退回检修/换货"], ["复核状态", currentOrder.accept]];
  if (currentOrder.type === "翻新入库") return [["来源翻新申请", currentOrder.sourceOrder], ["来源翻新出库单", currentOrder.source], ["翻新车间/仓库", currentOrder.supplier], ["翻新状态", currentOrder.accept], ["处理时间", currentOrder.date]];
  if (currentOrder.type === "改制入库") return [["来源改制申请", currentOrder.sourceOrder], ["来源改制出库单", currentOrder.source], ["改制方向", currentOrder.modifyDirection || "吊头改制"], ["改制状态", currentOrder.accept], ["处理时间", currentOrder.date]];
  if (currentOrder.type === "采购入库") return [["来源采购申请", currentOrder.source], ["采购订单", currentOrder.sourceOrder], ["供应商", currentOrder.supplier], ["入库仓库", currentOrder.warehouse], ["成本录入状态", currentOrder.cost]];
  return [["来源新生产申请", currentOrder.source], ["生产任务单", currentOrder.sourceOrder], ["入库仓库", currentOrder.warehouse], ["生产完成时间", currentOrder.date], ["成本录入状态", currentOrder.cost]];
}

function renderHandleTypeTemplate() {
  const config = getTypeConfig($("handleType").value);
  const type = $("handleType").value;
  $("handleSourceOutbound").closest("label").style.display = isSupplyType(type) ? "none" : "";
  $("handleTypeGuidance").innerHTML = [
    summaryCard("来源", config.sourceLabel),
    summaryCard("办理角色", config.handler),
    summaryCard("审批状态", currentOrder.confirm),
    summaryCard("入库状态", currentOrder.status),
  ].join("");
  $("handleTypeFields").innerHTML = typeSpecificRows().slice(0, 4).map(([label, value], index) => `
    <label>
      <span>${label}</span>
      <input value="${index === 0 ? currentOrder.source || value : value}">
    </label>
  `).join("");
  renderItems("handleItems", true);
}

function detailTitleFor(type = currentOrder.type) {
  const map = {
    "租赁入库": "租赁入库物资清单",
    "调拨入库": "调拨入库物资清单",
    "租赁退换入库": "租赁退换入库物资清单",
    "翻新入库": "翻新入库物资清单",
    "改制入库": "改制入库物资清单",
    "采购入库": "采购入库物资清单",
    "新生产入库": "新生产入库物资清单",
  };
  return map[type] || "入库物资清单";
}

function renderLinkedDetailHead(type) {
  const leftTitle = type === "调拨入库" ? "调出仓出库清点" : "仓库出库清点";
  const rightTitle = type === "调拨入库" ? "调入仓入库复核" : "项目入库验收";
  return `
    <tr>
      <th rowspan="2">序号</th>
      <th colspan="7" class="group-head">${leftTitle}</th>
      <th colspan="4" class="group-head">${rightTitle}</th>
      <th rowspan="2">差异确认状态</th>
    </tr>
    <tr>
      <th>物资名称</th>
      <th>规格</th>
      <th>单位</th>
      <th>仓库清点数量</th>
      <th>批次/资产编码</th>
      <th>出库过磅重量</th>
      <th>出场序号</th>
      <th>复核数量</th>
      <th>差值</th>
      <th>复磅重量</th>
      <th>附件状态</th>
    </tr>`;
}

function renderSimpleDetailHead(type) {
  const heads = {
    "租赁退换入库": ["物资名称", "规格", "单位", "项目退换出库数量", "仓库复核数量", "差值", "批次/资产编码", "复核结果", "附件状态"],
    "翻新入库": ["物资名称", "规格", "单位", "翻新出库数量", "翻新完成数量", "批次/资产编码", "完工状态", "附件状态", "备注"],
    "改制入库": ["原物资名称", "原规格型号", "改制后物资名称", "改制后规格型号", "单位", "改制出库数量", "改制完成数量", "新批次/资产编码", "完工状态", "附件状态", "备注"],
    "采购入库": ["物资名称", "规格型号", "单位", "采购数量", "实收入库数量", "批次/资产编码", "库区库位", "含税单价", "总金额", "成本录入状态", "附件状态"],
    "新生产入库": ["产品名称", "规格型号", "单位", "计划生产数量", "实收入库数量", "批次/资产编码", "库区库位", "质检状态", "成本录入状态", "附件状态"],
  };
  return `<tr>${(heads[type] || heads["采购入库"]).map((head) => `<th>${head}</th>`).join("")}</tr>`;
}

function weightStack(gross, tare, net) {
  return `<div class="weight-stack"><span>毛重 ${gross || "0.00"} 吨</span><span>皮重 ${tare || "0.00"} 吨</span><strong>净重 ${net || "0.00"} 吨</strong></div>`;
}

function renderDetailRows() {
  normalizeItems();
  const rows = currentOrder.items;
  $("detailMaterialTitle").textContent = detailTitleFor(currentOrder.type);
  if (isOutboundLinkedType()) {
    $("detailItemsHead").innerHTML = renderLinkedDetailHead(currentOrder.type);
    $("detailItems").innerHTML = rows.map((item, index) => {
      const diff = calcDiff(item);
      const state = diff === 0 ? "无差异" : diffState();
      return `<tr>
        <td>${index + 1}</td>
        <td title="${item[0]}">${item[0]}</td>
        <td title="${item[1]}">${item[1]}</td>
        <td>${item[10]}</td>
        <td>${item[4]}</td>
        <td title="${item[3]}">${item[3]}</td>
        ${index === 0 ? `<td rowspan="${rows.length}" class="weight-cell">${weightStack(currentOrder.outboundGrossWeight, currentOrder.outboundTareWeight, currentOrder.outboundNetWeight)}</td>` : ""}
        <td>${index + 1}</td>
        <td>${item[5]}</td>
        <td>${diffTag(diff)}</td>
        ${index === 0 ? `<td rowspan="${rows.length}" class="weight-cell">${weightStack(currentOrder.grossWeight, currentOrder.tareWeight, currentOrder.netWeight)}</td>` : ""}
        <td>${tag(item[8] || currentOrder.attachment)}</td>
        <td>${diff === 0 ? tag("无差异") : tag(state)}</td>
      </tr>`;
    }).join("");
    return;
  }
  $("detailItemsHead").innerHTML = renderSimpleDetailHead(currentOrder.type);
  $("detailItems").innerHTML = rows.map((item) => {
    const diff = calcDiff(item);
    if (isReturnType()) {
      return `<tr><td>${item[0]}</td><td>${item[1]}</td><td>${item[10]}</td><td>${item[4]}</td><td>${item[5]}</td><td>${diffTag(diff)}</td><td>${item[3]}</td><td>${item[9] || currentOrder.accept}</td><td>${tag(item[8] || currentOrder.attachment)}</td></tr>`;
    }
    if (currentOrder.type === "翻新入库") {
      return `<tr><td>${item[0]}</td><td>${item[1]}</td><td>${item[10]}</td><td>${item[4]}</td><td>${item[5]}</td><td>${item[3]}</td><td>${currentOrder.accept}</td><td>${tag(item[8] || currentOrder.attachment)}</td><td>${item[9]}</td></tr>`;
    }
    if (currentOrder.type === "改制入库") {
      return `<tr><td>${item[0]}</td><td>${item[1]}</td><td>改制${item[0]}</td><td>${item[1]}</td><td>${item[10]}</td><td>${item[4]}</td><td>${item[5]}</td><td>${item[3]}</td><td>${currentOrder.accept}</td><td>${tag(item[8] || currentOrder.attachment)}</td><td>${item[9]}</td></tr>`;
    }
    if (currentOrder.type === "新生产入库") {
      return `<tr><td>${item[0]}</td><td>${item[1]}</td><td>${item[10]}</td><td>${item[4]}</td><td>${item[5]}</td><td>${item[3]}</td><td>${item[7]}</td><td>${currentOrder.accept}</td><td>${tag(currentOrder.cost)}</td><td>${tag(item[8] || currentOrder.attachment)}</td></tr>`;
    }
    const unitPrice = item[6] && toNumber(item[4]) ? (toNumber(item[6]) / Math.max(toNumber(item[4]), 1)).toFixed(2) : "0.00";
    return `<tr><td>${item[0]}</td><td>${item[1]}</td><td>${item[10]}</td><td>${item[4]}</td><td>${item[5]}</td><td>${item[3]}</td><td>${item[7]}</td><td>${unitPrice}</td><td>${item[6]}</td><td>${tag(currentOrder.cost)}</td><td>${tag(item[8] || currentOrder.attachment)}</td></tr>`;
  }).join("");
}

function renderHandleHead() {
  const type = $("handleType").value;
  const commonOp = "<th>操作</th>";
  let heads;
  if (isOutboundLinkedType(type) || isReturnType(type)) heads = ["物资名称", "规格", "来源数量", "复核数量", "差值", "单位", "批次/资产编码", "附件状态", "备注"];
  else if (type === "翻新入库") heads = ["物资名称", "规格", "单位", "翻新出库数量", "翻新完成数量", "批次/资产编码", "完工状态", "附件状态", "备注"];
  else if (type === "改制入库") heads = ["原物资名称", "原规格", "改制后物资名称", "改制后规格", "单位", "改制出库数量", "改制完成数量", "新批次/资产编码", "完工状态", "附件状态"];
  else if (type === "新生产入库") heads = ["产品名称", "规格", "单位", "计划生产数量", "实收入库数量", "批次/资产编码", "库区库位", "质检状态", "成本状态", "附件状态"];
  else heads = ["物资名称", "规格", "单位", "采购数量", "实收入库数量", "批次/资产编码", "库区库位", "含税单价", "总金额", "成本状态", "附件状态"];
  $("handleItemsHead").innerHTML = `<tr>${heads.map((head) => `<th>${head}</th>`).join("")}${commonOp}</tr>`;
}

function approvalNodesFor(type) {
  if (type === "租赁入库") return ["出库生成入库草稿", "项目验收", "提交审批", "差异确认", "同步租赁订单"];
  if (type === "调拨入库") return ["调拨出库生成草稿", "调入仓复核", "提交审批", "差异确认", "同步库存转移"];
  if (type === "租赁退换入库") return ["退换出库生成草稿", "仓库回库验收", "提交审批", "差异确认", "同步租赁订单"];
  if (type === "翻新入库") return ["翻新出库审批通过", "上传完工凭证", "提交审批", "质检确认", "恢复库存"];
  if (type === "改制入库") return ["改制出库审批通过", "上传改制凭证", "提交审批", "档案更新", "改制后入库"];
  if (type === "采购入库") return ["采购申请审批通过", "到货验收", "提交审批", "成本入档", "新增库存"];
  return ["新生产申请审批通过", "完工验收", "提交审批", "质检/成本入档", "新增库存"];
}

function renderItems(targetId, editable = false) {
  normalizeItems();
  if (!editable) {
    renderDetailRows();
    return;
  }
  renderHandleHead();
  const type = $("handleType").value;
  $(targetId).innerHTML = currentOrder.items.map((item, rowIndex) => {
    const diff = calcDiff(item);
    if (isOutboundLinkedType(type) || isReturnType(type)) {
      return `<tr>
        <td><input data-field="0" data-row="${rowIndex}" value="${item[0]}"></td>
        <td><input data-field="1" data-row="${rowIndex}" value="${item[1]}"></td>
        <td><input data-field="4" data-row="${rowIndex}" value="${item[4]}"></td>
        <td><input data-field="5" data-row="${rowIndex}" value="${item[5]}"></td>
        <td>${diffTag(diff)}</td>
        <td><input data-field="10" data-row="${rowIndex}" value="${item[10]}"></td>
        <td><input data-field="7" data-row="${rowIndex}" value="${item[7]}" readonly title="由批次/资产编码或项目默认仓库自动带出"></td>
        <td><input data-field="3" data-row="${rowIndex}" value="${item[3]}" placeholder="批次/资产编码"></td>
        <td><input data-field="9" data-row="${rowIndex}" value="${item[9]}" placeholder="备注"></td>
        <td><button type="button" class="remove-material" data-row="${rowIndex}">移除</button></td>
      </tr>`;
    }
    if (type === "翻新入库") {
      return `<tr>
        <td><input data-field="0" data-row="${rowIndex}" value="${item[0]}"></td>
        <td><input data-field="1" data-row="${rowIndex}" value="${item[1]}"></td>
        <td><input data-field="10" data-row="${rowIndex}" value="${item[10]}"></td>
        <td><input data-field="4" data-row="${rowIndex}" value="${item[4]}"></td>
        <td><input data-field="5" data-row="${rowIndex}" value="${item[5]}"></td>
        <td><input data-field="3" data-row="${rowIndex}" value="${item[3]}"></td>
        <td><select><option>已完工</option><option>待质检</option><option>返工</option></select></td>
        <td>${tag(item[8] || "待上传")}</td>
        <td><input data-field="9" data-row="${rowIndex}" value="${item[9]}"></td>
        <td><button type="button" class="remove-material" data-row="${rowIndex}">移除</button></td>
      </tr>`;
    }
    if (type === "改制入库") {
      return `<tr>
        <td><input data-field="0" data-row="${rowIndex}" value="${item[0]}"></td>
        <td><input data-field="1" data-row="${rowIndex}" value="${item[1]}"></td>
        <td><input value="改制${item[0]}"></td>
        <td><input value="${item[1]}"></td>
        <td><input data-field="10" data-row="${rowIndex}" value="${item[10]}"></td>
        <td><input data-field="4" data-row="${rowIndex}" value="${item[4]}"></td>
        <td><input data-field="5" data-row="${rowIndex}" value="${item[5]}"></td>
        <td><input data-field="3" data-row="${rowIndex}" value="${item[3]}"></td>
        <td><select><option>已完工</option><option>待质检</option><option>返工</option></select></td>
        <td>${tag(item[8] || "待上传")}</td>
        <td><button type="button" class="remove-material" data-row="${rowIndex}">移除</button></td>
      </tr>`;
    }
    if (type === "新生产入库") {
      return `<tr>
        <td><input data-field="0" data-row="${rowIndex}" value="${item[0]}"></td>
        <td><input data-field="1" data-row="${rowIndex}" value="${item[1]}"></td>
        <td><input data-field="10" data-row="${rowIndex}" value="${item[10]}"></td>
        <td><input data-field="4" data-row="${rowIndex}" value="${item[4]}"></td>
        <td><input data-field="5" data-row="${rowIndex}" value="${item[5]}"></td>
        <td><input data-field="3" data-row="${rowIndex}" value="${item[3]}"></td>
        <td><input data-field="7" data-row="${rowIndex}" value="${item[7]}"></td>
        <td><select><option>待质检</option><option>合格</option><option>不合格</option></select></td>
        <td>${tag(currentOrder.cost)}</td>
        <td>${tag(item[8] || "待上传")}</td>
        <td><button type="button" class="remove-material" data-row="${rowIndex}">移除</button></td>
      </tr>`;
    }
    const unitPrice = item[6] && toNumber(item[4]) ? (toNumber(item[6]) / Math.max(toNumber(item[4]), 1)).toFixed(2) : "0.00";
    return `<tr>
      <td><input data-field="0" data-row="${rowIndex}" value="${item[0]}"></td>
      <td><input data-field="1" data-row="${rowIndex}" value="${item[1]}"></td>
      <td><input data-field="10" data-row="${rowIndex}" value="${item[10]}"></td>
      <td><input data-field="4" data-row="${rowIndex}" value="${item[4]}"></td>
      <td><input data-field="5" data-row="${rowIndex}" value="${item[5]}"></td>
      <td><input data-field="3" data-row="${rowIndex}" value="${item[3]}"></td>
      <td><input data-field="7" data-row="${rowIndex}" value="${item[7]}"></td>
      <td><input value="${unitPrice}"></td>
      <td><input data-field="6" data-row="${rowIndex}" value="${item[6]}"></td>
      <td>${tag(currentOrder.cost)}</td>
      <td>${tag(item[8] || "待上传")}</td>
      <td><button type="button" class="remove-material" data-row="${rowIndex}">移除</button></td>
    </tr>`;
  }).join("");
  if (editable) bindEditableRows();
}

function bindEditableRows() {
  document.querySelectorAll("#handleItems [data-field]").forEach((control) => {
    const update = () => {
      currentOrder.items[Number(control.dataset.row)][Number(control.dataset.field)] = control.value;
      if (control.dataset.field === "3") {
        const row = currentOrder.items[Number(control.dataset.row)];
        row[7] = row[7] || projectDefaultSlot(currentOrder.project);
      }
      if (["4", "5", "3"].includes(control.dataset.field)) renderItems("handleItems", true);
    };
    control.oninput = update;
    control.onchange = update;
  });
  document.querySelectorAll(".remove-material").forEach((button) => {
    button.onclick = () => {
      currentOrder.items.splice(Number(button.dataset.row), 1);
      currentOrder.itemCount = currentOrder.items.length;
      renderItems("handleItems", true);
    };
  });
}

function showDetail() {
  const config = getTypeConfig();
  const baseRows = [
    ["入库单号", currentOrder.no],
    ["入库类型", currentOrder.type],
    [config.sourceLabel, currentOrder.source],
    ["来源订单", currentOrder.sourceOrder || "-"],
  ];
  if (currentOrder.type === "调拨入库") {
    baseRows.push(["调出仓", currentOrder.supplier], ["调入仓", currentOrder.warehouse]);
  } else if (currentOrder.type === "租赁入库") {
    baseRows.push(["入库位置/项目仓库", inboundLocation()], ["来源仓库", currentOrder.supplier || currentOrder.warehouse]);
  } else if (currentOrder.type === "租赁退换入库") {
    baseRows.push(["入库仓库", currentOrder.warehouse], ["项目", currentOrder.project], ["退换原因", currentOrder.returnReason || "退回检修/换货"]);
  } else if (currentOrder.type === "翻新入库") {
    baseRows.push(["入库位置", currentOrder.warehouse], ["翻新车间/仓库", currentOrder.supplier], ["翻新状态", currentOrder.accept]);
  } else if (currentOrder.type === "改制入库") {
    baseRows.push(["入库位置", currentOrder.warehouse], ["改制方向", currentOrder.modifyDirection || "吊头改制"], ["改制状态", currentOrder.accept]);
  } else if (currentOrder.type === "采购入库") {
    baseRows.push(["采购订单", currentOrder.sourceOrder], ["供应商", currentOrder.supplier], ["入库仓库", currentOrder.warehouse]);
  } else {
    baseRows.push(["生产任务单", currentOrder.sourceOrder], ["入库仓库", currentOrder.warehouse], ["生产完成时间", currentOrder.date]);
  }
  baseRows.push(["入库状态", currentOrder.status], ["处理时间/入库时间", currentOrder.date]);
  $("detailInfo").innerHTML = baseRows.map(([label, value]) => detailRow(label, value)).join("");
  $("acceptInfo").innerHTML = [
    ["审批状态", currentOrder.confirm],
    ["复核状态", currentOrder.accept],
    ["差异状态", diffState()],
    ["成本状态", currentOrder.cost],
    ["附件状态", currentOrder.attachment],
    ["库存更新", currentOrder.confirm === "已确认" ? "已更新库存" : "确认后更新库存"],
    ["办理角色", config.handler],
  ].map(([label, value]) => detailRow(label, value)).join("");
  $("typeDetailTitle").textContent = `${currentOrder.type}办理信息`;
  renderTypeOverview();
  renderSourceRelation();
  renderTypeDetail();
  $("weightInfo").innerHTML = [
    ["复磅毛重(吨)", currentOrder.grossWeight || "0.00"],
    ["复磅皮重(吨)", currentOrder.tareWeight || "0.00"],
    ["复磅净重(吨)", currentOrder.netWeight || "0.00"],
    ["附件状态", currentOrder.attachment],
  ].map(([label, value]) => detailRow(label, value)).join("");
  renderItems("detailItems");
  renderFiles("detailFiles");
  const flowNodes = approvalNodesFor(currentOrder.type);
  $("processFlow").innerHTML = flowNodes.map((node, index) => `
    <div class="approval-node ${index <= 2 ? "done" : index === 3 ? "current" : ""}">
      <b>${index + 1}</b>
      <strong>${node}</strong>
      <span>${index <= 2 ? "已完成" : index === 3 ? currentOrder.confirm : "待处理"}</span>
    </div>
  `).join("");
  switchView("detailView");
}

function showHandle(title) {
  $("handleTitle").textContent = title;
  $("handleType").value = currentOrder.type;
  $("handleSource").value = currentOrder.source;
  $("handleSourceOutbound").value = sourceOutboundNo(currentOrder);
  $("handleSourceOrder").value = currentOrder.sourceOrder || "";
  $("handleWarehouse").value = currentOrder.warehouse;
  $("handleProject").value = currentOrder.project;
  $("handleSupplier").value = currentOrder.supplier;
  $("grossWeight").value = currentOrder.grossWeight || "0.00";
  $("tareWeight").value = currentOrder.tareWeight || "0.00";
  $("netWeight").value = currentOrder.netWeight || "0.00";
  renderHandleTypeTemplate();
  renderFiles("handleFiles");
  switchView("handleView");
}

function createInbound() {
  currentOrder = {
    ...inboundOrders[0],
    no: "自动生成",
    source: "",
    sourceOrder: "",
    amount: "0 件 / 0 吨",
    grossWeight: "0.00",
    tareWeight: "0.00",
    netWeight: "0.00",
    files: ["复磅照片 待上传", "收货照片 待上传", "签收/确认单 待上传"],
    itemCount: 1,
    accept: "待验收",
    cost: "待录入",
    confirm: "待提交",
    attachment: "待上传",
    status: "待提交",
    items: [["", "", "数量", "自动生成", "0", "0", "0.00", "项目默认库区-01", "待上传", "", "件", "", ""]],
  };
  showHandle("新增入库");
}

function filteredOutboundRecords() {
  const keyword = $("outboundKeyword").value.trim().toLowerCase();
  const type = $("outboundTypeFilter").value;
  return sourceOutboundRecords.filter((record) => {
    const materialHit = record.items.some((item) => `${item.name}${item.spec}${item.code}`.toLowerCase().includes(keyword));
    const keywordHit = !keyword || `${record.no}${record.project}`.toLowerCase().includes(keyword) || materialHit;
    return record.confirm === "已确认" && keywordHit && (type === "全部" || record.type === type);
  });
}

function visibleOutboundMaterials() {
  const records = filteredOutboundRecords();
  const scoped = activeOutboundNo ? records.filter((record) => record.no === activeOutboundNo) : records;
  const keyword = $("outboundKeyword").value.trim().toLowerCase();
  return scoped.flatMap((record) => record.items
    .filter((item) => {
      const returnable = Math.max(item.outbound - item.returned, 0);
      const keywordHit = !keyword || `${record.no}${record.project}${item.name}${item.spec}${item.code}`.toLowerCase().includes(keyword);
      return returnable > 0 && keywordHit;
    })
    .map((item) => ({ ...item, record })));
}

function renderOutboundTree() {
  const records = filteredOutboundRecords();
  $("outboundTreeCount").textContent = `${records.length} 单`;
  const groups = ["租赁", "调拨", "翻新", "改制"].map((type) => {
    const groupRecords = records.filter((record) => record.type === type);
    if (!groupRecords.length) return "";
    return `<div class="tree-group">
      <button type="button" class="tree-group-title">⌄ ${type}出库<span>${groupRecords.length}</span></button>
      ${groupRecords.map((record) => `<button type="button" class="tree-order ${activeOutboundNo === record.no ? "active" : ""}" data-outbound-no="${record.no}">
        <strong>${record.no}</strong><span>${record.project} · ${record.date}</span>
      </button>`).join("")}
    </div>`;
  }).join("");
  $("outboundTree").innerHTML = `<div class="tree-group"><button type="button" class="tree-order ${activeOutboundNo ? "" : "active"}" data-outbound-no=""><strong>全部已确认记录</strong><span>仅显示仍有可回库数量的物资</span></button></div>${groups}`;
  document.querySelectorAll("#outboundTree .tree-order").forEach((button) => {
    button.onclick = () => {
      activeOutboundNo = button.dataset.outboundNo;
      renderOutboundTree();
      renderOutboundPickerRows();
    };
  });
}

function renderOutboundPickerRows() {
  const materials = visibleOutboundMaterials();
  const activeRecord = sourceOutboundRecords.find((record) => record.no === activeOutboundNo);
  $("selectedOutboundTitle").textContent = activeRecord ? `${activeRecord.type}出库 ${activeRecord.no}` : "全部已确认出库记录";
  $("selectedOutboundMeta").textContent = activeRecord ? `${activeRecord.project} · ${activeRecord.warehouse}` : "可跨出库单批量选择物资";
  $("outboundPickerRows").innerHTML = materials.map(({ record, ...item }) => {
    const returnable = Math.max(item.outbound - item.returned, 0);
    return `<tr class="${selectedOutboundMaterialIds.has(item.id) ? "selected" : ""}">
      <td><input type="checkbox" class="outbound-material-check" data-material-id="${item.id}" ${selectedOutboundMaterialIds.has(item.id) ? "checked" : ""}></td>
      <td title="${record.no}">${record.no}</td>
      <td title="${record.sourceOrder}">${record.sourceOrder}</td>
      <td title="${record.project}">${record.project}</td>
      <td title="${record.warehouse}">${record.warehouse}</td>
      <td title="${item.name}">${item.name}</td>
      <td title="${item.spec}">${item.spec}</td>
      <td>${item.outbound}</td>
      <td>${item.returned}</td>
      <td>${returnable}</td>
      <td>${item.unit}</td>
      <td title="${item.code}">${item.code}</td>
      <td>${item.slot}</td>
    </tr>`;
  }).join("");
  $("outboundPickerEmpty").classList.toggle("hidden", materials.length > 0);
  $("selectedOutboundMaterialCount").textContent = selectedOutboundMaterialIds.size;
  $("selectAllOutboundMaterials").checked = materials.length > 0 && materials.every((item) => selectedOutboundMaterialIds.has(item.id));
  document.querySelectorAll(".outbound-material-check").forEach((checkbox) => {
    checkbox.onchange = () => {
      if (checkbox.checked) selectedOutboundMaterialIds.add(checkbox.dataset.materialId);
      else selectedOutboundMaterialIds.delete(checkbox.dataset.materialId);
      renderOutboundPickerRows();
    };
  });
}

function openOutboundPicker() {
  activeOutboundNo = "";
  selectedOutboundMaterialIds = new Set();
  $("outboundKeyword").value = "";
  $("outboundTypeFilter").value = "全部";
  renderOutboundTree();
  renderOutboundPickerRows();
  $("outboundPickerMask").classList.remove("hidden");
  $("outboundPickerModal").classList.remove("hidden");
}

function closeOutboundPicker() {
  $("outboundPickerMask").classList.add("hidden");
  $("outboundPickerModal").classList.add("hidden");
}

function confirmOutboundSelection() {
  const selected = sourceOutboundRecords.flatMap((record) => record.items
    .filter((item) => selectedOutboundMaterialIds.has(item.id))
    .map((item) => ({ ...item, record })));
  if (!selected.length) {
    alert("请至少选择一项可回库物资。");
    return;
  }
  const existingKeys = new Set(currentOrder.items.map((item) => `${item[0]}|${item[1]}|${item[3]}`));
  selected.forEach(({ record, ...item }) => {
    const returnable = Math.max(item.outbound - item.returned, 0);
    const key = `${item.name}|${item.spec}|${item.code}`;
    if (!existingKeys.has(key)) {
      currentOrder.items.push([
        item.name,
        item.spec,
        item.dimension,
        item.code,
        String(returnable),
        String(returnable),
        item.cost,
        resolveSlot(item, record),
        "待上传",
        `来源出库单 ${record.no}`,
        item.unit,
        record.no,
        record.sourceOrder,
      ]);
      existingKeys.add(key);
    }
  });
  const sourceRecords = [...new Set(selected.map((item) => item.record.no))];
  const sourceOrders = [...new Set(selected.map((item) => item.record.sourceOrder))];
  const projects = [...new Set(selected.map((item) => item.record.project))];
  const warehouses = [...new Set(selected.map((item) => item.record.warehouse))];
  const types = [...new Set(selected.map((item) => item.record.type))];
  currentOrder.itemCount = currentOrder.items.length;
  currentOrder.source = sourceRecords.join("、");
  currentOrder.sourceOrder = sourceOrders.join("、");
  $("handleSource").value = currentOrder.source;
  $("handleSourceOrder").value = currentOrder.sourceOrder;
  if (projects.length === 1 && [...$("handleProject").options].some((option) => option.value === projects[0])) {
    currentOrder.project = projects[0];
    $("handleProject").value = projects[0];
  }
  if (warehouses.length === 1 && [...$("handleWarehouse").options].some((option) => option.value === warehouses[0])) {
    currentOrder.warehouse = warehouses[0];
    $("handleWarehouse").value = warehouses[0];
  }
  if (types.length === 1) {
    const typeMap = { "租赁": "租赁入库", "调拨": "调拨入库", "翻新": "翻新入库", "改制": "改制入库" };
    currentOrder.type = typeMap[types[0]];
    $("handleType").value = currentOrder.type;
  }
  renderHandleTypeTemplate();
  renderItems("handleItems", true);
  closeOutboundPicker();
}

document.querySelectorAll(".tab").forEach((button) => {
  button.onclick = () => {
    document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("active"));
    button.classList.add("active");
    currentTask = button.dataset.task;
    renderList();
  };
});

$("queryBtn").onclick = renderList;
$("resetBtn").onclick = () => {
  ["typeFilter", "warehouseFilter", "projectFilter", "acceptFilter", "approvalFilter", "diffFilter", "statusFilter"].forEach((id) => $(id).value = "全部");
  ["noFilter", "sourceFilter", "sourceOutboundFilter", "supplierFilter"].forEach((id) => $(id).value = "");
  renderList();
};
$("createBtn").onclick = createInbound;
$("batchHandleBtn").onclick = () => showHandle("办理入库");
$("exportBtn").onclick = () => alert("已按当前筛选条件生成入库单导出文件。");
$("syncBtn").onclick = () => alert("已从已审核采购/订单记录同步待入库任务。");
$("detailHandleBtn").onclick = () => showHandle("办理入库");
$("detailEditBtn").onclick = () => showHandle("编辑入库");
$("saveDraftBtn").onclick = () => alert("草稿已保存。");
$("submitHandleBtn").onclick = () => alert("入库办理已提交。");
$("handleType").onchange = () => {
  currentOrder.type = $("handleType").value;
  renderHandleTypeTemplate();
};
$("grossWeight").oninput = calculateNetWeight;
$("tareWeight").oninput = calculateNetWeight;
$("handleSource").oninput = () => currentOrder.source = $("handleSource").value;
$("handleSourceOrder").oninput = () => currentOrder.sourceOrder = $("handleSourceOrder").value;
$("handleWarehouse").onchange = () => currentOrder.warehouse = $("handleWarehouse").value;
$("handleProject").onchange = () => {
  currentOrder.project = $("handleProject").value;
  currentOrder.items = currentOrder.items.map((item) => {
    const next = [...item];
    if (!next[7] || next[7].includes("项目默认库区")) next[7] = projectDefaultSlot(currentOrder.project);
    return next;
  });
  renderItems("handleItems", true);
};
$("uploadDropzone").onclick = () => {
  currentOrder.files = ["复磅照片 2 张", "收货照片 3 张", "签收/确认单 已上传"];
  currentOrder.attachment = "已上传";
  renderFiles("handleFiles");
};
$("batchCodeBtn").onclick = () => {
  currentOrder.items = currentOrder.items.map((item, index) => {
    const next = [...item];
    next[3] = `RK-${new Date().getFullYear()}05-${String(index + 1).padStart(3, "0")}`;
    return next;
  });
  renderItems("handleItems", true);
};
$("uniqueCodeBtn").onclick = () => {
  currentOrder.items = currentOrder.items.map((item, index) => {
    const next = [...item];
    next[2] = "序列号";
    next[3] = `KC-ASSET-202605-${String(index + 1).padStart(4, "0")}`;
    return next;
  });
  renderItems("handleItems", true);
};
$("manualAddLineBtn").onclick = () => {
  currentOrder.items.push(["", "", "数量", "自动生成", "0", "0", "0.00", projectDefaultSlot(currentOrder.project), "待上传", "", "件", currentOrder.source || "", currentOrder.sourceOrder || ""]);
  currentOrder.itemCount = currentOrder.items.length;
  renderItems("handleItems", true);
};
$("addLineBtn").onclick = openOutboundPicker;
$("closeOutboundPicker").onclick = closeOutboundPicker;
$("cancelOutboundPicker").onclick = closeOutboundPicker;
$("outboundPickerMask").onclick = closeOutboundPicker;
$("queryOutbound").onclick = () => {
  activeOutboundNo = "";
  renderOutboundTree();
  renderOutboundPickerRows();
};
$("resetOutboundFilter").onclick = () => {
  $("outboundKeyword").value = "";
  $("outboundTypeFilter").value = "全部";
  activeOutboundNo = "";
  renderOutboundTree();
  renderOutboundPickerRows();
};
$("selectAllOutboundMaterials").onchange = () => {
  visibleOutboundMaterials().forEach((item) => {
    if ($("selectAllOutboundMaterials").checked) selectedOutboundMaterialIds.add(item.id);
    else selectedOutboundMaterialIds.delete(item.id);
  });
  renderOutboundPickerRows();
};
$("confirmOutboundPicker").onclick = confirmOutboundSelection;
document.querySelectorAll(".backBtn").forEach((button) => {
  button.onclick = () => {
    switchView("listView");
    renderList();
  };
});

renderList();
function applyHashRoute() {
  if (window.location.hash === "#handle" && !$("handleView").classList.contains("is-active")) showHandle("办理入库");
  if (window.location.hash === "#detail" && !$("detailView").classList.contains("is-active")) showDetail();
}
window.addEventListener("hashchange", applyHashRoute);
applyHashRoute();
