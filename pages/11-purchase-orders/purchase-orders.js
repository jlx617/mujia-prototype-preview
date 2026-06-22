const requirements = [
  {
    code: "CG-202606-001",
    project: "华东高架 3 标",
    sourceOrder: "ZL-202605-018",
    sourceBom: "KC-BOM-202605-018",
    type: "采购",
    launchMode: "订单同步",
    executionMode: "线下采购",
    itemCount: 2,
    qty: 228,
    supplier: "湖北桥建钢构有限公司",
    arrival: "2026-06-10",
    inboundPercent: 45,
    costStatus: "部分录入",
    status: "部分入库",
    approvalStatus: "已通过",
    contract: "KC-CG-2026-0601",
    amount: "¥186,400.00",
    sourceFields: [["来源单据", "租赁订单 ZL-202605-018"], ["来源项目", "华东高架 3 标"], ["生成方式", "从订单物资清单生成"], ["处理标记", "采购"], ["需求日期", "2026-06-02"], ["计划出库", "2026-06-05"]],
    materials: [["钢支撑", "609x16x6000", "48", "根", "订单缺口采购", "¥1,280.00", "湖北桥建钢构有限公司", "2026-06-10"], ["对拉杆", "M24x1200", "180", "根", "紧固件补充采购", "¥68.00", "湖北桥建钢构有限公司", "2026-06-08"]],
    inbound: [["RK-20260608-003", "2026-06-08", "180 根", "176 根", "上海物料站", "已验收", "已录入"], ["RK-20260610-002", "2026-06-10", "48 根", "26 根", "上海物料站", "部分验收", "部分录入"]],
    approvals: [["2026-06-01 09:20 发起提交", "提交采购需求"], ["2026-06-01 14:30 负责人确认", "合同金额与报价单一致"], ["2026-06-02 10:05 审批通过", "进入采购执行"]],
    files: [["合同", "KC-CG-2026-0601.pdf", "已上传"], ["报价", "湖北桥建钢构报价单.xlsx", "已上传"], ["审批附件", "采购审批记录.pdf", "已归档"]]
  },
  {
    code: "SC-202606-004",
    project: "沪苏湖站房",
    sourceOrder: "ZL-202605-024",
    sourceBom: "KC-BOM-STD-041",
    type: "新生产",
    launchMode: "订单同步",
    executionMode: "线下生产",
    itemCount: 3,
    qty: 38,
    supplier: "武汉科创加工厂",
    arrival: "2026-06-18",
    inboundPercent: 0,
    costStatus: "待录入",
    status: "执行中",
    approvalStatus: "审批中",
    contract: "KC-SC-2026-0604",
    amount: "¥428,000.00",
    sourceFields: [["来源单据", "租赁订单 ZL-202605-024"], ["来源项目", "沪苏湖站房"], ["生成方式", "订单同步"], ["处理标记", "新生产"], ["需求日期", "2026-06-10"], ["计划出库", "2026-06-22"]],
    materials: [["标准墩身模板", "通用 6m", "1", "套", "订单新生产", "¥286,000.00", "武汉科创加工厂", "2026-06-18"], ["面板系统", "Q235B", "36", "块", "加工排产", "¥3,600.00", "武汉科创加工厂", "2026-06-18"], ["紧固件包", "M20/M24", "1", "批", "配套采购", "¥12,400.00", "武汉科创加工厂", "2026-06-16"]],
    inbound: [["-", "-", "38 项", "0", "上海物料站", "未入库", "待入库"]],
    approvals: [["2026-06-04 11:10 发起提交", "提交新生产需求"], ["2026-06-04 16:00 技术复核", "规格与标准 BOM 一致"], ["2026-06-05 09:30 负责人确认", "审批中"]],
    files: [["合同", "KC-SC-2026-0604.pdf", "已上传"], ["报价", "科创加工厂报价单.pdf", "已上传"], ["审批附件", "技术复核单.pdf", "已上传"]]
  },
  {
    code: "CG-202606-007",
    project: "汉江桥梁 2 标",
    sourceOrder: "手工录入",
    sourceBom: "未关联",
    type: "采购",
    launchMode: "手工发起",
    executionMode: "线下采购",
    itemCount: 1,
    qty: 16,
    supplier: "华中周转材料供应站",
    arrival: "2026-06-06",
    inboundPercent: 100,
    costStatus: "已录入",
    status: "已完成",
    approvalStatus: "无需审批",
    contract: "KC-CG-2026-0602",
    amount: "¥32,800.00",
    sourceFields: [["来源单据", "手工录入"], ["来源项目", "汉江桥梁 2 标"], ["生成方式", "手工发起"], ["处理标记", "采购"], ["需求日期", "2026-06-01"], ["计划到场", "2026-06-06"]],
    materials: [["爬架导轨", "6m 标准段", "16", "根", "现场补充采购", "¥2,050.00", "华中周转材料供应站", "2026-06-06"]],
    inbound: [["RK-20260606-011", "2026-06-06", "16 根", "16 根", "项目临时仓", "已验收", "已录入"]],
    approvals: [["2026-06-02 10:12 发起登记", "手工采购需求"], ["2026-06-02 10:45 负责人确认", "无需审批"], ["2026-06-06 17:10 入库完成", "按实收数量入库"]],
    files: [["合同", "KC-CG-2026-0602.pdf", "已上传"], ["报价", "华中供应站报价单.pdf", "已上传"], ["审批附件", "-", "无"]]
  },
  {
    code: "CG-202606-012",
    project: "苏州综合管廊二期",
    sourceOrder: "DB-202605-009",
    sourceBom: "KC-BOM-202605-021",
    type: "采购",
    launchMode: "订单同步",
    executionMode: "线下采购",
    itemCount: 2,
    qty: 96,
    supplier: "苏州鑫联紧固件有限公司",
    arrival: "2026-06-15",
    inboundPercent: 0,
    costStatus: "待确认",
    status: "待下单",
    approvalStatus: "待确认",
    contract: "待签订",
    amount: "¥58,600.00",
    sourceFields: [["来源单据", "调拨订单 DB-202605-009"], ["来源项目", "苏州综合管廊二期"], ["生成方式", "订单同步"], ["处理标记", "采购"], ["需求日期", "2026-06-06"], ["计划到货", "2026-06-15"]],
    materials: [["连接销", "φ50x180", "64", "件", "调拨缺口采购", "¥520.00", "苏州鑫联紧固件有限公司", "2026-06-15"], ["保险销", "φ12", "32", "件", "配套补齐", "¥48.00", "苏州鑫联紧固件有限公司", "2026-06-15"]],
    inbound: [["-", "-", "96 件", "0", "苏州装备中心", "未入库", "待确认"]],
    approvals: [["2026-06-06 15:18 发起建单", "待负责人确认"], ["2026-06-06 16:20 合同资料补充", "供应商报价已上传"]],
    files: [["合同", "-", "未上传"], ["报价", "鑫联紧固件报价.xlsx", "已上传"], ["审批附件", "采购申请单.pdf", "已上传"]]
  }
];

let current = requirements[0];
let asc = true;
const $ = (selector) => document.querySelector(selector);
const rows = $("#requirementRows");
const empty = $("#empty");
const mask = $("#mask");
const modal = $("#orderModal");

function typeClass(value) {
  return value === "新生产" ? "produce" : "buy";
}

function statusClass(value) {
  if (value === "已完成" || value === "已通过" || value === "无需审批" || value === "已录入") return "ok";
  if (value === "执行中" || value === "部分入库" || value === "审批中" || value === "部分录入") return "run";
  if (value === "已退回") return "back";
  if (value === "待确认") return "warn";
  return "wait";
}

function showView(viewId) {
  document.querySelectorAll(".page-view").forEach((view) => view.classList.add("hidden"));
  $(`#${viewId}`).classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "instant" });
  window.location.hash = viewId === "listView" ? "" : viewId.replace("View", "");
}

function filteredRequirements() {
  const sourceOrder = $("#sourceOrderFilter").value.trim();
  const sourceBom = $("#sourceBomFilter").value.trim();
  const type = $("#typeFilter").value;
  const supplier = $("#supplierFilter").value.trim();
  const project = $("#projectFilter").value;
  const launch = $("#launchFilter").value;
  const status = $("#statusFilter").value;
  const approval = $("#approvalFilter").value;
  return requirements.filter((item) => (!sourceOrder || item.sourceOrder.includes(sourceOrder))
    && (!sourceBom || item.sourceBom.includes(sourceBom))
    && (type === "全部" || item.type === type)
    && (!supplier || item.supplier.includes(supplier))
    && (project === "全部" || item.project === project)
    && (launch === "全部" || item.launchMode === launch)
    && (status === "全部" || item.status === status)
    && (approval === "全部" || item.approvalStatus === approval));
}

function renderRows(list) {
  rows.innerHTML = list.map((item) => `
    <tr data-index="${requirements.indexOf(item)}">
      <td><input type="checkbox" /></td>
      <td title="${item.code}">${item.code}</td>
      <td title="${item.project}">${item.project}</td>
      <td title="${item.sourceOrder}">${item.sourceOrder}</td>
      <td title="${item.sourceBom}">${item.sourceBom}</td>
      <td><span class="badge ${typeClass(item.type)}">${item.type}</span></td>
      <td>${item.launchMode}</td>
      <td>${item.itemCount}</td>
      <td>${item.qty}</td>
      <td title="${item.supplier}">${item.supplier}</td>
      <td>${item.arrival}</td>
      <td><div class="progress"><b><i style="width:${item.inboundPercent}%"></i></b><span>${item.inboundPercent}%</span></div></td>
      <td><span class="status ${statusClass(item.approvalStatus)}">${item.approvalStatus}</span></td>
      <td><span class="status ${statusClass(item.costStatus)}">${item.costStatus}</span></td>
      <td><div class="row-actions"><button class="link-btn view">查看</button><button class="link-btn edit">编辑</button><button class="link-btn approve">审批</button></div></td>
    </tr>
  `).join("");
  $(".table-panel table").classList.toggle("hidden", list.length === 0);
  empty.classList.toggle("hidden", list.length !== 0);
  $("#pageSummary").textContent = `共 ${list.length} 条，已选 0 项`;
  document.querySelectorAll(".view").forEach((button) => button.addEventListener("click", (event) => {
    current = requirements[Number(event.target.closest("tr").dataset.index)];
    renderDetail();
    showView("detailView");
  }));
  document.querySelectorAll(".edit").forEach((button) => button.addEventListener("click", (event) => {
    current = requirements[Number(event.target.closest("tr").dataset.index)];
    openEdit("edit");
  }));
  document.querySelectorAll(".approve").forEach((button) => button.addEventListener("click", (event) => {
    current = requirements[Number(event.target.closest("tr").dataset.index)];
    openModal("审批", "当前需求", `${current.code} / ${current.approvalStatus}`);
  }));
}

function renderDetail() {
  $("#detailHeading").textContent = `${current.code} 采购需求详情`;
  $("#baseFields").innerHTML = [
    ["需求单号", current.code], ["项目", current.project], ["需求类型", current.type],
    ["状态", current.status], ["审批状态", current.approvalStatus], ["成本状态", current.costStatus],
    ["发起方式", current.launchMode], ["执行方式", current.executionMode], ["预计到货", current.arrival],
    ["物资项数", `${current.itemCount} 项`], ["预计数量", current.qty], ["数据范围", "当前仓库 / 项目仓库"]
  ].map(infoItem).join("");
  $("#sourceFields").innerHTML = current.sourceFields.map(([label, value]) => infoItem([label, value])).join("");
  $("#materialRows").innerHTML = current.materials.map((row) => `<tr>${row.map((cell) => `<td title="${cell}">${cell}</td>`).join("")}</tr>`).join("");
  $("#supplierFields").innerHTML = [
    ["供应商", current.supplier], ["合同编号", current.contract], ["合同金额", current.amount],
    ["联系人", current.supplier.includes("桥建") ? "周经理 / 13900005678" : "业务联系人 / 13800000000"],
    ["结算方式", "按实收数量结算"], ["合同状态", current.contract === "待签订" ? "待签订" : "已归档"], ["业务范围", "采购 / 新生产"]
  ].map(infoItem).join("");
  $("#inboundCards").innerHTML = [
    ["计划数量", current.qty, "来自需求明细汇总"],
    ["实收进度", `${current.inboundPercent}%`, "分批入库"],
    ["成本录入", current.costStatus, "随入库记录维护"]
  ].map((item) => `<article><span>${item[0]}</span><strong>${item[1]}</strong><em>${item[2]}</em></article>`).join("");
  $("#inboundRows").innerHTML = current.inbound.map((row) => `<tr>${row.map((cell) => `<td title="${cell}">${cell}</td>`).join("")}</tr>`).join("");
  $("#approvalRows").innerHTML = current.approvals.map((item) => `<li><b>${item[0]}</b><span>${item[1]}</span></li>`).join("");
  $("#fileList").innerHTML = current.files.map((item) => `<div><span>${item[0]}</span><strong>${item[1]}</strong><em>${item[2]}</em></div>`).join("");
}

function infoItem([label, value]) {
  return `<div class="info-item"><span>${label}</span><strong>${value}</strong></div>`;
}

function openEdit(mode) {
  $("#editHeading").textContent = mode === "edit" ? "编辑采购需求" : "新增采购需求";
  $("#editCrumb").textContent = mode === "edit" ? "编辑" : "新增";
  $("#editCode").value = mode === "edit" ? current.code : "系统自动生成";
  $("#editProject").value = mode === "edit" ? current.project : "华东高架 3 标";
  $("#editType").value = mode === "edit" ? current.type : "采购";
  $("#editSourceOrder").value = mode === "edit" ? current.sourceOrder : "ZL-202605-018";
  $("#editBom").value = mode === "edit" ? current.sourceBom : "KC-BOM-202605-018";
  $("#editLaunchMode").value = mode === "edit" ? current.launchMode : "手工发起";
  $("#editStatus").value = mode === "edit" ? current.status : "草稿";
  $("#editArrival").value = mode === "edit" ? current.arrival : "2026-06-10";
  $("#editApproval").value = mode === "edit" ? current.approvalStatus : "待提交";
  $("#editExecution").value = mode === "edit" ? current.executionMode : "线下采购";
  $("#editCost").value = mode === "edit" ? current.costStatus : "待录入";
  $("#editSupplier").value = mode === "edit" ? current.supplier : "湖北桥建钢构有限公司";
  $("#editContract").value = mode === "edit" ? current.contract : "KC-CG-2026-0601";
  showView("editView");
}

function openModal(title, label, value) {
  $("#modalTitle").textContent = title;
  $("#modalBody").innerHTML = `
    <label>${label}<input value="${value}" /></label>
    <label>处理意见<textarea>同意按当前供应商、合同和到货计划执行。</textarea></label>
    <div class="modal-state"><span>入库成本</span><strong>按实收数量录入批次和成本</strong></div>
  `;
  mask.classList.remove("hidden");
  modal.classList.remove("hidden");
}

function closeModal() {
  mask.classList.add("hidden");
  modal.classList.add("hidden");
}

$("#query").addEventListener("click", () => renderRows(filteredRequirements()));
$("#reset").addEventListener("click", () => {
  ["#typeFilter", "#projectFilter", "#launchFilter", "#statusFilter", "#approvalFilter"].forEach((selector) => $(selector).value = "全部");
  ["#sourceOrderFilter", "#sourceBomFilter", "#supplierFilter"].forEach((selector) => $(selector).value = "");
  renderRows(requirements);
});
$("#newRequirement").addEventListener("click", () => openEdit("new"));
$("#generateFromOrder").addEventListener("click", () => openModal("订单同步", "来源订单", "ZL-202605-018 已标记采购 / 新生产的物资项"));
$("#exportOrder").addEventListener("click", () => openModal("导出", "导出范围", "当前筛选采购需求台账"));
$("#backFromDetail").addEventListener("click", () => showView("listView"));
$("#detailEdit").addEventListener("click", () => openEdit("edit"));
$("#detailApprove").addEventListener("click", () => openModal("审批", "当前需求", `${current.code} / ${current.approvalStatus}`));
$("#cancelEdit").addEventListener("click", () => showView("listView"));
$("#bringOrderItems").addEventListener("click", () => openModal("从订单带入", "来源订单", "ZL-202605-018 已标记采购 / 新生产的物资项"));
$("#addMaterialLine").addEventListener("click", () => openModal("新增明细行", "物资名称", "请输入物资名称、规格和数量"));
document.querySelectorAll(".closeModal").forEach((button) => button.addEventListener("click", closeModal));
mask.addEventListener("click", closeModal);
document.querySelectorAll("th[data-sort]").forEach((th) => {
  th.addEventListener("click", () => {
    const key = th.dataset.sort;
    const list = [...filteredRequirements()].sort((a, b) => asc ? String(a[key]).localeCompare(String(b[key]), "zh-CN", { numeric: true }) : String(b[key]).localeCompare(String(a[key]), "zh-CN", { numeric: true }));
    asc = !asc;
    renderRows(list);
  });
});

renderRows(requirements);
renderDetail();
if (window.location.hash === "#detail") showView("detailView");
if (window.location.hash === "#edit") openEdit("new");
