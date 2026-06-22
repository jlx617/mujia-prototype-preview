const outboundTypes = {
  "租赁出库": {
    sourceLabel: "租赁订单",
    inboundType: "租赁入库",
    autoInbound: true,
    sourceTitle: "租赁订单来源",
    handleText: "关联租赁订单后，仓库完成清点提交出库；系统自动生成项目侧租赁入库草稿。",
  },
  "调拨出库": {
    sourceLabel: "调拨订单",
    inboundType: "调拨入库",
    autoInbound: true,
    sourceTitle: "调拨订单来源",
    handleText: "关联调拨订单后，调出仓完成清点提交出库；系统自动生成调入仓调拨入库草稿。",
  },
  "租赁退换出库": {
    sourceLabel: "退换申请",
    inboundType: "租赁退换入库",
    autoInbound: true,
    sourceTitle: "租赁退换来源",
    handleText: "项目创建退还或换货出库后，仓库侧自动生成租赁退换入库草稿。",
  },
  "翻新出库": {
    sourceLabel: "翻新申请",
    inboundType: "翻新入库",
    autoInbound: true,
    sourceTitle: "翻新申请来源",
    handleText: "翻新出库申请审批通过后，系统自动生成翻新入库记录，待翻新完成后上传凭证提交审批。",
  },
  "改制出库": {
    sourceLabel: "改制申请",
    inboundType: "改制入库",
    autoInbound: true,
    sourceTitle: "改制申请来源",
    handleText: "改制出库申请审批通过后，系统自动生成改制入库记录，待改制完成后上传凭证提交审批。",
  },
  "废旧处置出库": {
    sourceLabel: "废旧处置申请",
    inboundType: "不生成入库",
    autoInbound: false,
    sourceTitle: "废旧处置来源",
    handleText: "废旧处置出库可选关联租赁订单，审批通过后物资自动出库，不生成对向入库记录。",
  },
};

const outboundOrders = [
  {
    no: "CK-20260622-001",
    type: "租赁出库",
    source: "ZL-20260612-018",
    inboundNo: "RK-20260622-101",
    project: "华东高架 3 标",
    warehouse: "上海物料站",
    target: "华东高架 3 标项目仓",
    outAddress: "上海物料站 A 门",
    inAddress: "华东高架 3 标北门",
    driver: "周明 / 沪A·K6208",
    date: "2026-06-22 09:30",
    itemCount: 3,
    amount: "272 件 / 16.6 吨",
    approval: "审批通过",
    status: "已出库",
    diffStatus: "待仓库确认差异",
    attachment: "已上传",
    weighing: { gross: "20800", tare: "4200", net: "16600" },
    inboundWeighing: { gross: "20620", tare: "4180", net: "16440" },
    inboundStatus: "项目已复核",
    inboundAttachment: "已上传",
    task: "confirm",
    sourceInfo: {
      "租赁订单": "ZL-20260612-018",
      "订单项目": "华东高架 3 标",
      "费用类型": "租赁费、装车费、运输费",
      "对向记录": "自动生成租赁入库草稿",
    },
    items: [
      { name: "标准面板", spec: "1500x3000x6", planQty: 88, outQty: 88, inQty: 86, unit: "块", slot: "A-02-03", code: "KC-GMB-202606-08", diffStatus: "待仓库确认差异", remark: "项目少收 2 块" },
      { name: "钢支撑", spec: "609x16x6000", planQty: 48, outQty: 48, inQty: 48, unit: "根", slot: "A-03-06", code: "KC-ZC-2026-06", diffStatus: "无差异", remark: "" },
      { name: "对拉杆", spec: "M24x1200", planQty: 136, outQty: 136, inQty: 136, unit: "根", slot: "A-05-02", code: "KC-DLG-202606", diffStatus: "已同步入库记录", remark: "" },
    ],
  },
  {
    no: "CK-20260621-006",
    type: "调拨出库",
    source: "DB-20260610-006",
    inboundNo: "RK-20260621-044",
    project: "苏州综合管廊二期",
    warehouse: "苏州装备中心",
    target: "华东项目虚拟仓",
    outAddress: "苏州装备中心 2 号门",
    inAddress: "华东项目虚拟仓默认库区",
    driver: "刘涛 / 苏E·2K180",
    date: "2026-06-21 14:20",
    itemCount: 2,
    amount: "84 件 / 9.2 吨",
    approval: "审批通过",
    status: "部分出库",
    diffStatus: "待项目复核",
    attachment: "已上传",
    weighing: { gross: "13800", tare: "4600", net: "9200" },
    inboundWeighing: { gross: "-", tare: "-", net: "-" },
    inboundStatus: "待目标仓复核",
    inboundAttachment: "待上传",
    task: "pending",
    sourceInfo: {
      "调拨订单": "DB-20260610-006",
      "调出仓": "苏州装备中心",
      "调入仓": "华东项目虚拟仓",
      "对向记录": "自动生成调拨入库草稿",
    },
    items: [
      { name: "防护平台", spec: "4.5m 装配式", planQty: 42, outQty: 36, inQty: "", unit: "套", slot: "T-01", code: "FHT-260601~260642", diffStatus: "待项目复核", remark: "" },
      { name: "爬架导轨", spec: "6m 标准段", planQty: 60, outQty: 48, inQty: "", unit: "根", slot: "A-03-06", code: "PJDG-260101~260160", diffStatus: "待项目复核", remark: "" },
    ],
  },
  {
    no: "CK-20260620-012",
    type: "租赁退换出库",
    source: "TH-20260620-003",
    inboundNo: "RK-20260620-073",
    project: "汉江桥梁 2 标",
    warehouse: "汉江桥梁 2 标项目仓",
    target: "上海物料站",
    outAddress: "汉江桥梁 2 标南门",
    inAddress: "上海物料站退换验收区",
    driver: "项目自提 / 鄂A·92K18",
    date: "2026-06-20 11:10",
    itemCount: 2,
    amount: "96 件 / 3.4 吨",
    approval: "审批中",
    status: "待出库",
    diffStatus: "待项目复核",
    attachment: "待上传",
    weighing: { gross: "7200", tare: "3800", net: "3400" },
    inboundWeighing: { gross: "-", tare: "-", net: "-" },
    inboundStatus: "仓库待验收",
    inboundAttachment: "待上传",
    task: "pending",
    sourceInfo: {
      "退换申请": "TH-20260620-003",
      "退换原因": "部分模板规格替换",
      "原租赁订单": "ZL-20260521-008",
      "对向记录": "自动生成租赁退换入库草稿",
    },
    items: [
      { name: "钢模板", spec: "1500x3000x80", planQty: 36, outQty: 36, inQty: "", unit: "块", slot: "项目默认库区", code: "KC-GMB-0018", diffStatus: "待项目复核", remark: "换货出库" },
      { name: "连接销", spec: "M30 加强型", planQty: 60, outQty: 60, inQty: "", unit: "只", slot: "项目默认库区", code: "TH-20260620-003", diffStatus: "待项目复核", remark: "" },
    ],
  },
  {
    no: "CK-20260619-009",
    type: "翻新出库",
    source: "FX-20260618-006",
    inboundNo: "RK-20260619-052",
    project: "科创中心备料",
    warehouse: "上海物料站",
    target: "上海翻新车间",
    outAddress: "上海物料站翻新区",
    inAddress: "上海翻新车间完工区",
    driver: "厂内转运",
    date: "2026-06-19 10:00",
    itemCount: 2,
    amount: "124 件 / 5.4 吨",
    approval: "审批通过",
    status: "已出库",
    diffStatus: "已同步入库记录",
    attachment: "已上传",
    weighing: { gross: "8900", tare: "3500", net: "5400" },
    inboundWeighing: { gross: "8860", tare: "3500", net: "5360" },
    inboundStatus: "翻新处理中",
    inboundAttachment: "已上传",
    task: "weighing",
    sourceInfo: {
      "翻新申请": "FX-20260618-006",
      "申请来源": "租赁订单自动创建",
      "翻新原因": "退租待检后翻新",
      "对向记录": "审批通过后生成翻新入库记录",
    },
    items: [
      { name: "钢支撑", spec: "609x16x6000", planQty: 96, outQty: 96, inQty: 96, unit: "根", slot: "C-02-01", code: "KC-ZC-2026-04", diffStatus: "已同步入库记录", remark: "" },
      { name: "墩身标准节", spec: "2.0m Q355", planQty: 28, outQty: 28, inQty: 28, unit: "节", slot: "B-01-03", code: "KC-DS-RET-0526", diffStatus: "已同步入库记录", remark: "" },
    ],
  },
  {
    no: "CK-20260618-004",
    type: "改制出库",
    source: "GZ-20260617-002",
    inboundNo: "RK-20260618-030",
    project: "科创中心备料",
    warehouse: "上海物料站",
    target: "改制加工区",
    outAddress: "上海物料站改制区",
    inAddress: "改制加工区完工库位",
    driver: "厂内转运",
    date: "2026-06-18 16:40",
    itemCount: 1,
    amount: "24 件 / 2.8 吨",
    approval: "待提交",
    status: "待出库",
    diffStatus: "待项目复核",
    attachment: "待上传",
    weighing: { gross: "6200", tare: "3400", net: "2800" },
    inboundWeighing: { gross: "-", tare: "-", net: "-" },
    inboundStatus: "待改制完成",
    inboundAttachment: "待上传",
    task: "confirm",
    sourceInfo: {
      "改制申请": "GZ-20260617-002",
      "申请来源": "仓库手工申请",
      "改制方向": "短节改长节",
      "对向记录": "审批通过后生成改制入库记录",
    },
    items: [
      { name: "贝雷片短节", spec: "1.5m Q345", planQty: 24, outQty: 24, inQty: "", unit: "片", slot: "B-04-01", code: "KC-BL-GZ-0617", diffStatus: "待项目复核", remark: "改制后重新编码" },
    ],
  },
  {
    no: "CK-20260616-002",
    type: "废旧处置出库",
    source: "BF-20260615-001",
    inboundNo: "-",
    project: "科创中心备料",
    warehouse: "上海物料站",
    target: "废旧处置商",
    outAddress: "上海物料站废旧区",
    inAddress: "-",
    driver: "王强 / 沪D·77821",
    date: "2026-06-16 15:30",
    itemCount: 1,
    amount: "32 件 / 2.1 吨",
    approval: "审批通过",
    status: "已出库",
    diffStatus: "无差异",
    attachment: "已归档",
    weighing: { gross: "6700", tare: "4600", net: "2100" },
    inboundWeighing: { gross: "-", tare: "-", net: "-" },
    inboundStatus: "不生成入库",
    inboundAttachment: "-",
    task: "all",
    sourceInfo: {
      "处置申请": "BF-20260615-001",
      "关联订单": "可选关联",
      "处置方式": "称重出售",
      "对向记录": "不生成入库",
    },
    disposal: {
      applyMonth: "2026 年 06 月",
      applyUnit: "云构公司",
      applyDept: "阳逻厂库区",
      totalNetValue: "27,578.96",
      reason: "废旧挂架材料已完成现场鉴定，无法继续周转使用，申请按废旧物资称重处置。",
      compiler: "资产管理中心",
      approvedAttachment: "废旧物资处理表格2026.4.20（阳逻厂库区）.docx",
    },
    items: [
      { category: "材料", name: "造楼机材料（挂架材料）", spec: "废旧处置批", planQty: 1, outQty: 1, inQty: 1, unit: "吨", slot: "D-01-01", code: "BF-20260615-001", tareWeight: "19220", grossWeight: "31680", netWeight: "12460", taxPrice: "2213.40", totalAmount: "27578.96", vehicleNo: "鄂A QF123", diffStatus: "无差异", remark: "审批通过自动出库" },
    ],
  },
];

const sourceOrderMaterials = [
  {
    id: "ZL-20260612-018",
    type: "租赁订单",
    project: "华东高架 3 标",
    warehouse: "上海物料站",
    status: "审批通过",
    materials: [
      { id: "ZL018-01", name: "标准面板", spec: "1500x3000x6", dimension: "批次", ordered: 120, outbound: 32, unit: "块", slot: "A-02-03", code: "KC-GMB-202606-08" },
      { id: "ZL018-02", name: "钢支撑", spec: "609x16x6000", dimension: "批次", ordered: 64, outbound: 16, unit: "根", slot: "A-03-06", code: "KC-ZC-2026-06" },
      { id: "ZL018-03", name: "对拉杆", spec: "M24x1200", dimension: "数量", ordered: 360, outbound: 180, unit: "根", slot: "A-05-02", code: "KC-DLG-202606" },
    ],
  },
  {
    id: "DB-20260610-006",
    type: "调拨订单",
    project: "苏州综合管廊二期",
    warehouse: "苏州装备中心",
    status: "审批通过",
    materials: [
      { id: "DB006-01", name: "防护平台", spec: "4.5m 装配式", dimension: "序列号", ordered: 42, outbound: 6, unit: "套", slot: "T-01", code: "FHT-260601~260642" },
      { id: "DB006-02", name: "爬架导轨", spec: "6m 标准段", dimension: "序列号", ordered: 60, outbound: 12, unit: "根", slot: "A-03-06", code: "PJDG-260101~260160" },
    ],
  },
];

let currentTask = "all";
let currentOrder = outboundOrders[0];
let selectedSourceMaterialIds = new Set();
const $ = (id) => document.getElementById(id);

const tagClass = {
  "已过磅": "tag-green",
  "待过磅": "tag-yellow",
  "无需过磅": "tag-gray",
  "已归档": "tag-green",
  "已上传": "tag-green",
  "待回传": "tag-yellow",
  "待上传": "tag-yellow",
  "待补充": "tag-yellow",
  "审批通过": "tag-green",
  "审批中": "tag-orange",
  "待提交": "tag-yellow",
  "驳回": "tag-red",
  "待出库": "tag-yellow",
  "部分出库": "tag-blue",
  "已出库": "tag-green",
  "无差异": "tag-green",
  "待项目复核": "tag-yellow",
  "待仓库确认差异": "tag-orange",
  "已同步入库记录": "tag-blue",
  "已同步租赁订单": "tag-green",
};

function tag(value) {
  return `<span class="tag ${tagClass[value] || "tag-gray"}">${value}</span>`;
}

function detailRow(label, value) {
  return `<div><dt>${label}</dt><dd>${value}</dd></div>`;
}

function itemDiff(item) {
  if (item.inQty === "" || item.inQty === undefined || item.inQty === null) return "-";
  return Number(item.inQty) - Number(item.outQty);
}

function driverName(order) {
  return order.driver.includes(" / ") ? order.driver.split(" / ")[0] : order.driver;
}

function vehicleNo(order) {
  return order.driver.includes(" / ") ? order.driver.split(" / ")[1] : "-";
}

function filteredOrders() {
  const no = $("noFilter").value.trim();
  const type = $("typeFilter").value;
  const source = $("sourceFilter").value.trim();
  const warehouse = $("warehouseFilter").value;
  const project = $("projectFilter").value;
  const approval = $("confirmFilter").value;
  const diff = $("diffFilter").value;
  const status = $("statusFilter").value;
  const driver = $("driverFilter").value.trim();
  return outboundOrders.filter((order) => {
    const taskHit = currentTask === "all" || order.task === currentTask;
    return taskHit
      && (!no || order.no.includes(no))
      && (type === "全部" || order.type === type)
      && (!source || order.source.includes(source) || order.no.includes(source) || order.inboundNo.includes(source))
      && (warehouse === "全部" || order.warehouse === warehouse)
      && (project === "全部" || order.project === project)
      && (approval === "全部" || order.approval === approval)
      && (diff === "全部" || order.diffStatus === diff)
      && (status === "全部" || order.status === status)
      && (!driver || order.driver.includes(driver));
  });
}

function renderList() {
  const rows = filteredOrders();
  $("outboundRows").innerHTML = rows.map((order, index) => `
    <tr>
      <td><input type="checkbox" aria-label="选择 ${order.no}"></td>
      <td title="${order.no}">${order.no}</td>
      <td>${order.type}</td>
      <td title="${order.source}">${order.source}</td>
      <td title="${order.inboundNo}">${order.inboundNo}</td>
      <td title="${order.warehouse}">${order.warehouse}</td>
      <td title="${order.target}">${order.target}</td>
      <td>${order.itemCount}</td>
      <td>${tag(order.approval)}</td>
      <td>${tag(order.diffStatus)}</td>
      <td>${tag(order.status)}</td>
      <td>
        <div class="row-actions">
          <button data-index="${index}" data-action="detail">查看</button>
          <button data-index="${index}" data-action="handle">办理</button>
          <button data-index="${index}" data-action="print">打印</button>
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
      if (button.dataset.action === "handle") showHandle(false);
      if (button.dataset.action === "print") showPrint();
    };
  });
}

function switchView(id) {
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("is-active"));
  $(id).classList.add("is-active");
  window.location.hash = id.replace("View", "");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function isReviewLinkedType(type) {
  return type === "租赁出库" || type === "调拨出库";
}

function renderDetailMaterials(order) {
  if (order.type === "废旧处置出库") {
    const canSupplement = order.approval === "审批通过";
    $("detailMaterialTitle").textContent = "云构公司资产处置申请单";
    $("detailWeightSummary").innerHTML = "";
    $("detailMaterialHead").innerHTML = canSupplement ? `
      <tr>
        <th>序号</th>
        <th>资产类别</th>
        <th>材料、构配件、设备名称</th>
        <th>规格型号</th>
        <th>单位</th>
        <th>数量</th>
        <th>皮重(kg)</th>
        <th>毛重(kg)</th>
        <th>净重(kg)</th>
        <th>含税单价</th>
        <th>总金额</th>
        <th>车牌号</th>
      </tr>` : `
      <tr>
        <th>序号</th>
        <th>资产类别</th>
        <th>材料、构配件、设备名称</th>
        <th>规格型号</th>
        <th>单位</th>
        <th>数量</th>
        <th>单重(kg)</th>
        <th>总重(kg)</th>
      </tr>`;
    $("detailCompareRows").innerHTML = order.items.map((item, index) => canSupplement ? `<tr>
      <td>${index + 1}</td>
      <td>${item.category || "材料"}</td>
      <td title="${item.name}">${item.name}</td>
      <td title="${item.spec}">${item.spec}</td>
      <td>${item.unit}</td>
      <td>${item.outQty}</td>
      <td><input class="scrap-detail-input" value="${item.tareWeight || ""}"></td>
      <td><input class="scrap-detail-input" value="${item.grossWeight || ""}"></td>
      <td><input class="scrap-detail-input" value="${item.netWeight || ""}"></td>
      <td><input class="scrap-detail-input" value="${item.taxPrice || ""}"></td>
      <td><input class="scrap-detail-input" value="${item.totalAmount || ""}"></td>
      <td><input class="scrap-detail-input" value="${item.vehicleNo || ""}"></td>
    </tr>` : `<tr>
      <td>${index + 1}</td>
      <td>${item.category || "材料"}</td>
      <td title="${item.name}">${item.name}</td>
      <td title="${item.spec}">${item.spec}</td>
      <td>${item.unit}</td>
      <td>${item.outQty}</td>
      <td>${item.singleWeight || "-"}</td>
      <td>${item.totalWeight || "-"}</td>
    </tr>`).join("");
    return;
  }
  $("detailMaterialTitle").textContent = `${order.type}物资清单`;
  $("detailWeightSummary").innerHTML = "";
  if (isReviewLinkedType(order.type)) {
    $("detailMaterialHead").innerHTML = `
      <tr class="group-head">
        <th rowspan="2">序号</th>
        <th rowspan="2">物资名称</th>
        <th rowspan="2">规格</th>
        <th rowspan="2">单位</th>
        <th colspan="4">仓库出库清点</th>
        <th colspan="4">收货方验收清点</th>
        <th rowspan="2">差异确认</th>
      </tr>
      <tr>
        <th>清点数量</th>
        <th>批次/资产编码</th>
        <th>过磅重量(kg)</th>
        <th>出场序号</th>
        <th>复核数量</th>
        <th>差值</th>
        <th>过磅重量复核(kg)</th>
        <th>附件状态</th>
      </tr>`;
    $("detailCompareRows").innerHTML = order.items.map((item, index) => {
      const diff = itemDiff(item);
      const diffText = diff === "-" ? "-" : diff > 0 ? `+${diff}` : String(diff);
      const hasDiff = diff !== "-" && Number(diff) !== 0;
      const canAdjust = hasDiff && item.diffStatus === "待仓库确认差异";
      return `<tr>
        <td>${index + 1}</td>
        <td title="${item.name}">${item.name}</td>
        <td title="${item.spec}">${item.spec}</td>
        <td>${item.unit}</td>
        <td>${item.outQty}</td>
        <td title="${item.code}">${item.code}</td>
        ${index === 0 ? `<td class="merged-weight" rowspan="${order.items.length}">
          <span>毛重：${order.weighing.gross}</span>
          <span>皮重：${order.weighing.tare}</span>
          <span>净重：${order.weighing.net}</span>
        </td>` : ""}
        <td>${index + 1}</td>
        <td>${item.inQty === "" ? "" : item.inQty}</td>
        <td class="${diff < 0 ? "diff-negative" : diff > 0 ? "diff-positive" : ""}">${canAdjust ? `<input class="diff-adjust" value="${diffText}">` : diffText}</td>
        ${index === 0 ? `<td class="merged-weight" rowspan="${order.items.length}">
          <span>毛重：${order.inboundWeighing.gross}</span>
          <span>皮重：${order.inboundWeighing.tare}</span>
          <span>净重：${order.inboundWeighing.net}</span>
        </td>` : ""}
        <td>${item.inQty === "" ? "" : order.inboundAttachment}</td>
        <td>${hasDiff ? `<button type="button" class="confirm-diff">确认差异</button>` : ""}</td>
      </tr>`;
    }).join("");
  } else {
    $("detailMaterialHead").innerHTML = `
      <tr>
        <th>物资名称</th>
        <th>规格</th>
        <th>清点数量</th>
        <th>单位</th>
        <th>库区库位</th>
        <th>批次/资产编码</th>
        <th>过磅重量(kg)</th>
        <th>出场地址</th>
        <th>状态</th>
      </tr>`;
    $("detailCompareRows").innerHTML = order.items.map((item, index) => `<tr>
      <td title="${item.name}">${item.name}</td>
      <td title="${item.spec}">${item.spec}</td>
      <td>${item.outQty}</td>
      <td>${item.unit}</td>
      <td title="${item.slot}">${item.slot}</td>
      <td title="${item.code}">${item.code}</td>
      ${index === 0 ? `<td class="merged-weight" rowspan="${order.items.length}">
        <span>毛重：${order.weighing.gross}</span>
        <span>皮重：${order.weighing.tare}</span>
        <span>净重：${order.weighing.net}</span>
      </td>` : ""}
      <td title="${order.outAddress}">${order.outAddress}</td>
      <td>${tag(item.diffStatus)}</td>
    </tr>`).join("");
  }
}

function renderApprovalFlow(order) {
  const nodes = [
    { title: "发起节点", user: "郑航", state: "提交", tone: "done", meta: "自动审批" },
    { title: `${order.type}审批`, user: "仓库负责人", state: order.approval, tone: order.approval === "审批通过" ? "done" : "active", meta: order.approval === "审批通过" ? "已完成" : "审批中" },
    { title: isReviewLinkedType(order.type) ? "收货方验收" : "业务完成确认", user: order.target, state: order.inboundStatus, tone: order.inboundStatus.includes("待") ? "todo" : "active", meta: order.inboundNo },
    { title: "同步更新", user: isReviewLinkedType(order.type) ? "入库记录、业务订单" : "库存台账", state: order.diffStatus, tone: order.diffStatus.includes("已同步") || order.diffStatus === "无差异" ? "done" : "todo", meta: order.diffStatus },
  ];
  $("approvalFlow").innerHTML = nodes.map((node) => `
    <div class="approval-node ${node.tone}">
      <span class="approval-dot"></span>
      <strong>${node.title}</strong>
      <em>${node.user}</em>
      <b>${node.state}</b>
      <small>${node.meta}</small>
    </div>
  `).join("");
}

function renderDetailAttachments(order) {
  const files = order.type === "废旧处置出库"
    ? ["云构公司资产处置申请单.xlsx", order.disposal.approvedAttachment, "资产处置审批截图.png", "过磅单.jpg"]
    : isReviewLinkedType(order.type)
    ? ["出库过磅照片.jpg", "装车照片.jpg", "项目验收照片.jpg", "复磅照片.jpg", "签收确认单.pdf"]
    : ["出库过磅照片.jpg", "业务审批附件.pdf", "现场照片.jpg", "纸质确认单.pdf"];
  $("detailAttachmentFiles").innerHTML = files.map((file, index) => `<span class="${index === 1 ? "downloadable" : ""}">${file}</span>`).join("");
}

function showDetail() {
  const stampClass = currentOrder.approval === "审批通过" ? "is-pass" : currentOrder.approval === "驳回" ? "is-reject" : "is-pending";
  const baseRows = currentOrder.type === "废旧处置出库"
    ? [
      ["", `<span class="status-stamp ${stampClass}">${currentOrder.approval}</span>`],
      ["出库单号", currentOrder.no],
      ["出库类型", currentOrder.type],
      ["来源业务单据", currentOrder.source],
      ["出库位置", currentOrder.warehouse],
      ["处理时间", currentOrder.date],
      ["处置资产总净值", `${currentOrder.disposal.totalNetValue} 元`],
      ["处置原因", currentOrder.disposal.reason],
      ["出库状态", tag(currentOrder.status)],
    ]
    : [
      ["", `<span class="status-stamp ${stampClass}">${currentOrder.approval}</span>`],
      ["出库单号", currentOrder.no],
      ["出库类型", currentOrder.type],
      ["来源业务单据", currentOrder.source],
      ["对向入库单", currentOrder.inboundNo],
      ["出库仓库", currentOrder.warehouse],
      ["目标项目/仓库", currentOrder.target],
      ["司机", driverName(currentOrder)],
      ["车牌", vehicleNo(currentOrder)],
      ["出库时间", currentOrder.date],
      ["出场地址", currentOrder.outAddress],
      ["差异状态", tag(currentOrder.diffStatus)],
      ["出库状态", tag(currentOrder.status)],
    ];
  $("detailInfo").innerHTML = baseRows.map(([label, value]) => label ? detailRow(label, value) : value).join("");
  renderDetailMaterials(currentOrder);
  renderApprovalFlow(currentOrder);
  renderDetailAttachments(currentOrder);
  switchView("detailView");
}

function renderItems(targetId, editable = false, print = false) {
  if (editable && currentOrder.type === "废旧处置出库") {
    $("handleItemsHead").innerHTML = `
      <tr>
        <th>资产类别</th>
        <th>材料、构配件、设备名称</th>
        <th>规格型号</th>
        <th>单位</th>
        <th>数量</th>
        <th>单重(kg)</th>
        <th>总重(kg)</th>
        <th>备注</th>
        <th>操作</th>
      </tr>`;
    $(targetId).innerHTML = currentOrder.items.map((item, rowIndex) => `<tr>
      <td><input data-field="category" data-row="${rowIndex}" value="${item.category || "材料"}"></td>
      <td><input data-field="name" data-row="${rowIndex}" value="${item.name}"></td>
      <td><input data-field="spec" data-row="${rowIndex}" value="${item.spec}"></td>
      <td><input data-field="unit" data-row="${rowIndex}" value="${item.unit}"></td>
      <td><input class="scrap-qty" data-row="${rowIndex}" value="${item.outQty}"></td>
      <td><input class="scrap-single-weight" data-row="${rowIndex}" value="${item.singleWeight || ""}"></td>
      <td><input class="scrap-total-weight" data-row="${rowIndex}" value="${item.totalWeight || ""}" readonly></td>
      <td><input data-field="remark" data-row="${rowIndex}" value="${item.remark || ""}"></td>
      <td><button type="button" class="remove-material" data-row="${rowIndex}">移除</button></td>
    </tr>`).join("");
    bindEditableMaterialRows();
    return;
  }
  if (editable) {
    $("handleItemsHead").innerHTML = `
      <tr>
        <th>物资名称</th>
        <th>规格</th>
        <th>应出数量</th>
        <th>清点出库数量</th>
        <th>单位</th>
        <th>库区库位</th>
        <th>批次/资产编码</th>
        <th>备注</th>
        <th>操作</th>
      </tr>`;
  }
  const rows = currentOrder.items.map((item, rowIndex) => {
    if (editable) {
      return `<tr>
        <td><input value="${item.name}" readonly></td>
        <td><input value="${item.spec}" readonly></td>
        <td><input value="${item.planQty}" readonly></td>
        <td><input class="outbound-qty" data-row="${rowIndex}" value="${item.outQty}"></td>
        <td><input value="${item.unit}" readonly></td>
        <td><input value="${item.slot}" readonly title="由所选批次/资产编码自动带出"></td>
        <td><input value="${item.code}" readonly title="由订单物资清单或库存选择带出"></td>
        <td><input data-field="remark" data-row="${rowIndex}" value="${item.remark || ""}"></td>
        <td><button type="button" class="remove-material" data-row="${rowIndex}">移除</button></td>
      </tr>`;
    }
    const values = print
      ? [item.name, item.spec, item.outQty, item.unit, item.slot, item.code, currentOrder.weighing.net]
      : [item.name, item.spec, item.planQty, item.outQty, item.unit, item.slot, item.code, currentOrder.weighing.net, item.remark || ""];
    return `<tr>${values.map((value) => `<td title="${value}">${value}</td>`).join("")}</tr>`;
  }).join("");
  $(targetId).innerHTML = rows;
  if (editable) bindEditableMaterialRows();
}

function bindEditableMaterialRows() {
  document.querySelectorAll(".scrap-qty, .scrap-single-weight").forEach((input) => {
    input.oninput = () => {
      const row = Number(input.dataset.row);
      const item = currentOrder.items[row];
      if (input.classList.contains("scrap-qty")) item.outQty = Number(input.value) || 0;
      if (input.classList.contains("scrap-single-weight")) item.singleWeight = input.value;
      const total = (Number(item.outQty) || 0) * (Number(item.singleWeight) || 0);
      item.totalWeight = total ? String(total) : "";
      const totalInput = document.querySelector(`.scrap-total-weight[data-row="${row}"]`);
      if (totalInput) totalInput.value = item.totalWeight;
    };
  });
  document.querySelectorAll(".outbound-qty").forEach((input) => {
    input.oninput = () => {
      const row = Number(input.dataset.row);
      const max = Number(currentOrder.items[row].planQty) || 0;
      const value = Math.max(0, Math.min(Number(input.value) || 0, max));
      currentOrder.items[row].outQty = value;
      if (input.value !== String(value)) input.value = String(value);
    };
  });
  document.querySelectorAll("[data-field]").forEach((control) => {
    control.onchange = () => {
      const item = currentOrder.items[Number(control.dataset.row)];
      if (currentOrder.type === "废旧处置出库") item[control.dataset.field] = control.value;
      else item.remark = control.value;
    };
  });
  document.querySelectorAll(".remove-material").forEach((button) => {
    button.onclick = () => {
      currentOrder.items.splice(Number(button.dataset.row), 1);
      currentOrder.itemCount = currentOrder.items.length;
      renderItems("handleItems", true);
    };
  });
}

function renderTypePanel() {
  const type = $("handleType").value;
  const config = outboundTypes[type];
  const isScrap = type === "废旧处置出库";
  document.querySelectorAll(".hide-for-scrap").forEach((el) => el.classList.toggle("hidden", isScrap));
  document.querySelectorAll(".show-for-scrap").forEach((el) => el.classList.toggle("hidden", !isScrap));
  $("handlePositionLabel").querySelector("span").textContent = isScrap ? "出库位置" : "目标项目";
  $("handleDateLabel").textContent = isScrap ? "处理时间" : "预计出库日期";
  if (isScrap) {
    $("handleProject").value = [...$("handleProject").options].some((option) => option.value === "阳逻厂库区") ? "阳逻厂库区" : $("handleProject").value;
  }
  if (type === "废旧处置出库") {
    $("handleTypePanel").innerHTML = "";
    if ($("handleInbound")) $("handleInbound").value = "不生成入库";
    return;
  }
  $("handleTypePanel").innerHTML = `
    <strong>${config.sourceLabel}</strong>
    <span>${config.handleText}</span>
  `;
  $("handleInbound").value = config.autoInbound ? "提交后自动生成" : "不生成入库";
}

function showHandle(isCreate) {
  $("handleTitle").textContent = isCreate ? "新增出库" : "办理出库";
  if (isCreate) {
    currentOrder = {
      ...outboundOrders[0],
      no: "自动生成",
      type: "租赁出库",
      inboundNo: "提交后自动生成",
      status: "待出库",
      approval: "待提交",
      diffStatus: "待项目复核",
      attachment: "待上传",
      itemCount: 0,
      items: [],
    };
  } else {
    currentOrder = { ...currentOrder, items: currentOrder.items.map((item) => ({ ...item })) };
  }
  $("handleType").value = currentOrder.type;
  $("handleProject").value = currentOrder.type === "废旧处置出库" ? currentOrder.disposal.applyDept : currentOrder.project;
  $("handleSource").value = currentOrder.source;
  $("handleWarehouse").value = currentOrder.warehouse;
  $("handleInbound").value = currentOrder.inboundNo;
  $("handleOutAddress").value = currentOrder.outAddress;
  $("handleDate").value = currentOrder.type === "废旧处置出库" ? currentOrder.date : currentOrder.date.slice(0, 10);
  if (currentOrder.type === "废旧处置出库") {
    $("handleDisposalReason").value = currentOrder.disposal.reason;
    $("handleDisposalValue").value = currentOrder.disposal.totalNetValue;
  }
  $("grossWeight").value = currentOrder.weighing.gross;
  $("tareWeight").value = currentOrder.weighing.tare;
  $("netWeight").value = currentOrder.weighing.net;
  renderTypePanel();
  document.querySelector(".weigh-panel").classList.toggle("hidden", currentOrder.type === "废旧处置出库");
  renderItems("handleItems", true);
  updateNetWeight();
  switchView("handleView");
}

function filteredSourceOrders() {
  const keyword = $("materialKeyword").value.trim().toLowerCase();
  const type = $("materialOrderType").value;
  const orderId = $("materialOrderSelect").value;
  return sourceOrderMaterials.filter((order) => {
    const materialHit = order.materials.some((material) => `${material.name}${material.spec}`.toLowerCase().includes(keyword));
    const keywordHit = !keyword || `${order.id}${order.project}`.toLowerCase().includes(keyword) || materialHit;
    const orderHit = !orderId || order.id === orderId;
    return keywordHit && orderHit && (type === "全部" || order.type === type);
  });
}

function visiblePickerMaterials() {
  const orders = filteredSourceOrders();
  const keyword = $("materialKeyword").value.trim().toLowerCase();
  return orders.flatMap((order) => order.materials
    .filter((material) => !keyword || `${order.id}${order.project}${material.name}${material.spec}`.toLowerCase().includes(keyword))
    .map((material) => ({ ...material, orderId: order.id, orderType: order.type, project: order.project, warehouse: order.warehouse })));
}

function renderMaterialOrderOptions(defaultOrderId = "") {
  const previousValue = $("materialOrderSelect").value;
  const preferredValue = defaultOrderId || previousValue;
  $("materialOrderSelect").innerHTML = `<option value="">全部已审批订单</option>${sourceOrderMaterials.map((order) => (
    `<option value="${order.id}">${order.type} ${order.id} · ${order.project}</option>`
  )).join("")}`;
  const values = [...$("materialOrderSelect").options].map((option) => option.value);
  $("materialOrderSelect").value = values.includes(preferredValue) ? preferredValue : "";
}

function renderMaterialPickerRows() {
  const materials = visiblePickerMaterials();
  const activeOrder = sourceOrderMaterials.find((order) => order.id === $("materialOrderSelect").value);
  $("selectedOrderTitle").textContent = activeOrder ? `${activeOrder.type} ${activeOrder.id}` : "全部已审批订单";
  $("selectedOrderMeta").textContent = activeOrder ? `${activeOrder.project} · ${activeOrder.warehouse}` : "可跨订单查看，确认时将按所选物资带入";
  $("materialPickerRows").innerHTML = materials.map((material) => {
    const available = Math.max(material.ordered - material.outbound, 0);
    return `<tr class="${selectedSourceMaterialIds.has(material.id) ? "selected" : ""}">
      <td><input type="checkbox" class="material-check" data-material-id="${material.id}" ${selectedSourceMaterialIds.has(material.id) ? "checked" : ""}></td>
      <td title="${material.orderId}">${material.orderId}</td>
      <td title="${material.name}">${material.name}</td>
      <td title="${material.spec}">${material.spec}</td>
      <td>${material.dimension}</td>
      <td>${material.ordered}</td>
      <td>${material.outbound}</td>
      <td>${available}</td>
      <td>${material.unit}</td>
      <td>${material.slot}</td>
      <td title="${material.code}">${material.code}</td>
    </tr>`;
  }).join("");
  $("materialPickerEmpty").classList.toggle("hidden", materials.length > 0);
  $("selectedMaterialCount").textContent = selectedSourceMaterialIds.size;
  $("selectAllMaterials").checked = materials.length > 0 && materials.every((material) => selectedSourceMaterialIds.has(material.id));
  document.querySelectorAll(".material-check").forEach((checkbox) => {
    checkbox.onchange = () => {
      if (checkbox.checked) selectedSourceMaterialIds.add(checkbox.dataset.materialId);
      else selectedSourceMaterialIds.delete(checkbox.dataset.materialId);
      renderMaterialPickerRows();
    };
  });
}

function openMaterialPicker() {
  selectedSourceMaterialIds = new Set();
  $("materialKeyword").value = "";
  $("materialOrderType").value = "全部";
  const sourceValue = $("handleSource").value;
  const defaultOrder = sourceOrderMaterials.find((order) => sourceValue.includes(order.id)) || sourceOrderMaterials[0];
  renderMaterialOrderOptions(defaultOrder ? defaultOrder.id : "");
  renderMaterialPickerRows();
  $("materialPickerMask").classList.remove("hidden");
  $("materialPickerModal").classList.remove("hidden");
}

function closeMaterialPicker() {
  $("materialPickerMask").classList.add("hidden");
  $("materialPickerModal").classList.add("hidden");
}

function confirmMaterialSelection() {
  const selected = sourceOrderMaterials.flatMap((order) => order.materials
    .filter((material) => selectedSourceMaterialIds.has(material.id))
    .map((material) => ({ ...material, order })));
  if (!selected.length) {
    alert("请至少选择一项待出库物资。");
    return;
  }
  const existingKeys = new Set(currentOrder.items.map((item) => `${item.name}|${item.spec}|${item.code}`));
  selected.forEach(({ order, ...material }) => {
    const available = Math.max(material.ordered - material.outbound, 0);
    const key = `${material.name}|${material.spec}|${material.code}`;
    if (!existingKeys.has(key)) {
      currentOrder.items.push({
        name: material.name,
        spec: material.spec,
        planQty: available,
        outQty: available,
        inQty: "",
        unit: material.unit,
        slot: material.slot,
        code: material.code,
        diffStatus: "待项目复核",
        remark: `${order.type} ${order.id}`,
      });
      existingKeys.add(key);
    }
  });
  const sourceOrders = [...new Set(selected.map((item) => item.order.id))];
  const projects = [...new Set(selected.map((item) => item.order.project))];
  const warehouses = [...new Set(selected.map((item) => item.order.warehouse))];
  currentOrder.itemCount = currentOrder.items.length;
  $("handleSource").value = sourceOrders.join("、");
  currentOrder.source = sourceOrders.join("、");
  if (sourceOrders.length === 1) {
    const onlyOrder = selected[0].order;
    const businessType = onlyOrder.type === "租赁订单" ? "租赁出库" : "调拨出库";
    $("handleType").value = businessType;
    currentOrder.type = businessType;
  }
  if (projects.length === 1 && [...$("handleProject").options].some((option) => option.value === projects[0])) {
    $("handleProject").value = projects[0];
    currentOrder.project = projects[0];
  }
  if (warehouses.length === 1 && [...$("handleWarehouse").options].some((option) => option.value === warehouses[0])) {
    $("handleWarehouse").value = warehouses[0];
    currentOrder.warehouse = warehouses[0];
  }
  renderTypePanel();
  renderItems("handleItems", true);
  updateNetWeight();
  closeMaterialPicker();
}

function updateNetWeight() {
  if (!$("grossWeight") || !$("tareWeight") || !$("netWeight")) return;
  const gross = Number($("grossWeight").value) || 0;
  const tare = Number($("tareWeight").value) || 0;
  const net = Math.max(gross - tare, 0);
  $("netWeight").value = net ? net.toFixed(2) : "0.00";
  currentOrder.weighing = { gross: $("grossWeight").value, tare: $("tareWeight").value, net: $("netWeight").value };
}

function showPrint() {
  $("printNo").textContent = currentOrder.no;
  $("printInfo").innerHTML = [
    ["出库类型", currentOrder.type],
    ["来源单据", currentOrder.source],
    ["目标项目/仓库", currentOrder.target],
    ["出库仓库", currentOrder.warehouse],
    ["司机/车牌", currentOrder.driver],
    ["出库日期", currentOrder.date],
  ].map(([label, value]) => detailRow(label, value)).join("");
  renderItems("printItems", false, true);
  switchView("printView");
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
  ["typeFilter", "warehouseFilter", "projectFilter", "confirmFilter", "statusFilter", "diffFilter"].forEach((id) => $(id).value = "全部");
  ["noFilter", "sourceFilter", "driverFilter"].forEach((id) => $(id).value = "");
  $("dateFilter").value = "2026-05-01 至 2026-05-29";
  renderList();
};
$("createBtn").onclick = () => showHandle(true);
$("batchHandleBtn").onclick = () => showHandle(false);
$("syncOrderBtn").onclick = () => alert("已同步审批通过的业务来源单据。");
$("exportBtn").onclick = () => alert("已按当前筛选条件生成出库单导出文件。");
$("detailHandleBtn").onclick = () => showHandle(false);
$("detailPrintBtn").onclick = showPrint;
$("previewConfirmBtn").onclick = showPrint;
$("saveDraftBtn").onclick = () => alert("草稿已保存。");
$("submitHandleBtn").onclick = () => alert("出库办理已提交。");
$("addLineBtn").onclick = () => {
  if (currentOrder.type === "废旧处置出库") {
    currentOrder.items.push({ category: "材料", name: "", spec: "", outQty: 1, unit: "吨", singleWeight: "", totalWeight: "", remark: "" });
    currentOrder.itemCount = currentOrder.items.length;
    renderItems("handleItems", true);
    return;
  }
  openMaterialPicker();
};
$("handleType").onchange = () => {
  currentOrder.type = $("handleType").value;
  renderTypePanel();
  document.querySelector(".weigh-panel").classList.toggle("hidden", currentOrder.type === "废旧处置出库");
  if (currentOrder.type === "废旧处置出库" && !currentOrder.items.some((item) => item.category)) {
    currentOrder.items = [{ category: "材料", name: "造楼机材料（挂架材料）", spec: "废旧处置批", outQty: 1, unit: "吨", singleWeight: "12460", totalWeight: "12460", remark: "" }];
  }
  renderItems("handleItems", true);
};
$("grossWeight").oninput = updateNetWeight;
$("tareWeight").oninput = updateNetWeight;
$("closeMaterialPicker").onclick = closeMaterialPicker;
$("cancelMaterialPicker").onclick = closeMaterialPicker;
$("materialPickerMask").onclick = closeMaterialPicker;
$("queryMaterial").onclick = renderMaterialPickerRows;
$("resetMaterialFilter").onclick = () => {
  $("materialKeyword").value = "";
  $("materialOrderType").value = "全部";
  renderMaterialOrderOptions(sourceOrderMaterials[0] ? sourceOrderMaterials[0].id : "");
  renderMaterialPickerRows();
};
$("materialOrderSelect").onchange = renderMaterialPickerRows;
$("materialOrderType").onchange = () => {
  const currentValue = $("materialOrderSelect").value;
  renderMaterialOrderOptions(currentValue);
  renderMaterialPickerRows();
};
$("selectAllMaterials").onchange = () => {
  visiblePickerMaterials().forEach((material) => {
    if ($("selectAllMaterials").checked) selectedSourceMaterialIds.add(material.id);
    else selectedSourceMaterialIds.delete(material.id);
  });
  renderMaterialPickerRows();
};
$("confirmMaterialPicker").onclick = confirmMaterialSelection;
document.querySelectorAll(".backBtn").forEach((button) => {
  button.onclick = () => {
    switchView("listView");
    renderList();
  };
});

const initialRoute = window.location.hash.replace("#", "");
if (initialRoute === "handle") {
  showHandle(true);
} else if (initialRoute === "detail") {
  showDetail();
} else if (initialRoute === "print") {
  showPrint();
} else {
  renderList();
}
