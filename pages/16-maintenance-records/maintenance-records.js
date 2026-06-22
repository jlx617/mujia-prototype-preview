const records = [
  {
    no: "FXWB-20260529-001",
    type: "翻新",
    source: "订单同步",
    sourceOrder: "ZL-202605-018",
    asset: "钢支撑 609x16x6000",
    quantity: "96 根",
    unit: "科创建模维修班组",
    cost: "¥8,620.00",
    approval: "审批中",
    execute: "执行中",
    inbound: "待入库",
    warehouse: "翻新待检仓",
    problem: "退库待检发现局部变形，需校正后补焊。",
    requirement: "校正变形部位，焊补后完成喷涂并提交验收照片。",
    result: ["2026-05-26 建立任务，资产转入翻新待检仓。", "2026-05-27 完成校正与焊补。", "2026-05-29 完成喷涂，等待验收复核。"],
    approvals: ["2026-05-26 发起翻新申请。", "2026-05-26 仓库负责人确认通过。", "2026-05-29 等待执行结果复核。"],
    files: [["过程照片", "6 张", "已上传"], ["报价单", "FXWB-20260529-001.pdf", "已上传"], ["验收单", "-", "待上传"]],
    relations: [["出库", "CK-20260527-009", "已出库", "翻新出库"], ["入库", "RK-20260530-003", "待入库", "翻新入库"]],
  },
  {
    no: "FXWB-20260528-006",
    type: "维保",
    source: "手工创建",
    sourceOrder: "-",
    asset: "贝雷片 321 型",
    quantity: "42 片",
    unit: "上海桥装装备有限公司",
    cost: "¥12,300.00",
    approval: "通过",
    execute: "已完成",
    inbound: "已入库",
    warehouse: "上海物料站",
    problem: "连接耳板开裂，影响拼装精度。",
    requirement: "更换耳板，完成探伤后回库。",
    result: ["2026-05-23 外协接收。", "2026-05-25 更换耳板并探伤。", "2026-05-28 验收通过并回库。"],
    approvals: ["2026-05-23 发起维保申请。", "2026-05-23 仓库负责人确认通过。"],
    files: [["外协报价", "贝雷片维修报价.pdf", "已上传"], ["探伤报告", "2 份", "已上传"], ["验收照片", "8 张", "已上传"]],
    relations: [["入库", "RK-20260528-014", "已入库", "维保回库"]],
  },
  {
    no: "FXWB-20260527-003",
    type: "维保",
    source: "手工创建",
    sourceOrder: "-",
    asset: "液压泵站 15kW",
    quantity: "1 台",
    unit: "设备维保组",
    cost: "¥1,860.00",
    approval: "通过",
    execute: "已完成",
    inbound: "无需入库",
    warehouse: "苏州装备中心",
    problem: "例行更换液压油和密封件。",
    requirement: "完成油液更换并运行测试。",
    result: ["2026-05-27 完成油液更换。", "2026-05-27 运行测试正常。"],
    approvals: ["2026-05-27 发起维保申请。", "2026-05-27 负责人确认通过。"],
    files: [["保养照片", "3 张", "已上传"], ["材料清单", "密封件、液压油", "已归档"]],
    relations: [["资产台账", "SB-YY-014", "已更新", "设备维保记录"]],
  },
  {
    no: "FXWB-20260524-011",
    type: "翻新",
    source: "订单同步",
    sourceOrder: "ZL-202605-021",
    asset: "标准面板 1500x3000",
    quantity: "28 块",
    unit: "科创建模维修班组",
    cost: "¥5,480.00",
    approval: "通过",
    execute: "执行中",
    inbound: "未生成",
    warehouse: "翻新待检仓",
    problem: "面板锈蚀，需打磨喷涂。",
    requirement: "完成打磨、喷涂和验收照片上传。",
    result: ["2026-05-24 已接收。", "2026-05-28 打磨完成 70%。"],
    approvals: ["2026-05-24 订单同步生成任务。", "2026-05-24 仓库负责人确认通过。"],
    files: [["过程照片", "4 张", "已上传"], ["费用清单", "-", "待上传"]],
    relations: [["出库", "CK-20260524-004", "已出库", "翻新出库"]],
  },
];

let current = records[0];
const $ = (id) => document.getElementById(id);
const tagMap = {
  "翻新": "tag-orange",
  "维保": "tag-blue",
  "订单同步": "tag-blue",
  "手工创建": "tag-gray",
  "待提交": "tag-yellow",
  "审批中": "tag-orange",
  "通过": "tag-green",
  "驳回": "tag-gray",
  "待执行": "tag-yellow",
  "执行中": "tag-blue",
  "已完成": "tag-green",
  "未生成": "tag-gray",
  "待入库": "tag-yellow",
  "已入库": "tag-green",
  "无需入库": "tag-gray",
};

function tag(value) {
  return `<span class="tag ${tagMap[value] || "tag-gray"}">${value}</span>`;
}

function filteredRecords() {
  const order = $("orderFilter").value.trim();
  const warehouse = $("warehouseFilter").value;
  const source = $("sourceFilter").value;
  const type = $("typeFilter").value;
  const approval = $("approvalFilter").value;
  const execute = $("executeFilter").value;
  return records.filter((item) => (!order || item.no.includes(order) || item.sourceOrder.includes(order))
    && (warehouse === "全部" || item.warehouse === warehouse)
    && (source === "全部" || item.source === source)
    && (type === "全部" || item.type === type)
    && (approval === "全部" || item.approval === approval)
    && (execute === "全部" || item.execute === execute));
}

function renderRows() {
  const list = filteredRecords();
  $("recordRows").innerHTML = list.map((item, index) => `
    <tr>
      <td><input type="checkbox" aria-label="选择 ${item.no}"></td>
      <td title="${item.no}">${item.no}</td>
      <td>${tag(item.type)}</td>
      <td title="${item.sourceOrder}">${item.sourceOrder}</td>
      <td title="${item.asset}">${item.asset}</td>
      <td>${item.quantity}</td>
      <td title="${item.unit}">${item.unit}</td>
      <td>${item.cost}</td>
      <td>${tag(item.approval)}</td>
      <td>${tag(item.execute)}</td>
      <td>${tag(item.inbound)}</td>
      <td><div class="row-actions"><button class="link-btn" data-index="${index}" data-action="detail">查看</button><button class="link-btn" data-index="${index}" data-action="edit">编辑</button><button class="link-btn" data-index="${index}" data-action="approve">审批</button></div></td>
    </tr>
  `).join("");
  $("emptyState").classList.toggle("hidden", list.length > 0);
  $("summaryText").textContent = `共 ${list.length} 条`;
  document.querySelectorAll(".row-actions button").forEach((button) => {
    button.onclick = () => {
      current = list[Number(button.dataset.index)];
      if (button.dataset.action === "detail" || button.dataset.action === "approve") showDetail();
      if (button.dataset.action === "edit") showEdit("edit");
    };
  });
}

function switchView(id) {
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("is-active"));
  $(id).classList.add("is-active");
  window.location.hash = id.replace("View", "");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function field(label, value) {
  return `<div><dt>${label}</dt><dd>${value}</dd></div>`;
}

function timeline(items) {
  return items.map((item) => `<li><strong>${item.slice(0, 10)}</strong><span>${item.slice(11)}</span></li>`).join("");
}

function showDetail() {
  $("detailHeading").textContent = `${current.no} 翻新维保详情`;
  $("baseFields").innerHTML = [
    ["单号", current.no],
    ["类型", current.type],
    ["来源", current.source],
    ["来源订单", current.sourceOrder],
    ["产品/资产", current.asset],
    ["数量", current.quantity],
    ["当前仓库", current.warehouse],
    ["外包单位", current.unit],
    ["预计费用", current.cost],
    ["审批状态", current.approval],
    ["执行状态", current.execute],
    ["入库状态", current.inbound],
  ].map(([label, value]) => field(label, value)).join("");
  $("problemFields").innerHTML = [
    ["问题描述", current.problem],
    ["处理要求", current.requirement],
  ].map(([label, value]) => field(label, value)).join("");
  $("approvalRows").innerHTML = timeline(current.approvals);
  $("processRows").innerHTML = timeline(current.result);
  $("fileRows").innerHTML = current.files.map((item) => `<div><span>${item[0]}</span><strong>${item[1]}</strong><em>${item[2]}</em></div>`).join("");
  $("relationRows").innerHTML = current.relations.map((row) => `<tr>${row.map((cell) => `<td title="${cell}">${cell}</td>`).join("")}</tr>`).join("");
  switchView("detailView");
}

function showEdit(mode) {
  $("editHeading").textContent = mode === "new" ? "新增翻新维保" : "编辑翻新维保";
  $("editCrumb").textContent = mode === "new" ? "新增" : "编辑";
  const data = mode === "new" ? { ...records[0], no: "系统自动生成", source: "手工创建", approval: "待提交", execute: "待执行", inbound: "未生成" } : current;
  $("editNo").value = data.no;
  $("editAsset").value = data.asset;
  $("editType").value = data.type;
  $("editSource").value = data.source;
  $("editSourceOrder").value = data.sourceOrder;
  $("editQty").value = data.quantity;
  $("editWarehouse").value = data.warehouse;
  $("editUnit").value = data.unit;
  $("editApproval").value = data.approval;
  $("editExecute").value = data.execute;
  $("editInbound").value = data.inbound;
  $("editProblem").value = data.problem;
  $("editRequirement").value = data.requirement;
  $("editProcess").value = data.result.join("\n");
  $("editCost").value = data.cost;
  $("editRelationRows").innerHTML = data.relations.map((row) => `<tr>${row.map((cell) => `<td><input value="${cell}"></td>`).join("")}</tr>`).join("");
  switchView("editView");
}

$("queryBtn").onclick = renderRows;
$("resetBtn").onclick = () => {
  ["warehouseFilter", "sourceFilter", "typeFilter", "approvalFilter", "executeFilter"].forEach((id) => $(id).value = "全部");
  $("orderFilter").value = "";
  renderRows();
};
$("createBtn").onclick = () => showEdit("new");
$("syncBtn").onclick = () => alert("已从已审核订单中同步翻新维保任务。");
$("exportBtn").onclick = () => alert("已按当前筛选条件生成翻新维保台账导出文件。");
$("detailEditBtn").onclick = () => showEdit("edit");
$("saveDraftBtn").onclick = () => alert("翻新维保任务已保存。");
$("submitBtn").onclick = () => alert("翻新维保任务已提交。");
$("addRelationBtn").onclick = () => {
  $("editRelationRows").insertAdjacentHTML("beforeend", `<tr><td><input value="出库"></td><td><input value=""></td><td><input value="待关联"></td><td><input value=""></td></tr>`);
};
document.querySelectorAll(".backBtn").forEach((button) => {
  button.onclick = () => {
    switchView("listView");
    renderRows();
  };
});

function initFromHash() {
  if (window.location.hash === "#detail") showDetail();
  else if (window.location.hash === "#edit") showEdit("edit");
  else switchView("listView");
}

renderRows();
initFromHash();
