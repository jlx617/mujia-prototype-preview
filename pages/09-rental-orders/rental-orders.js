const baseMaterials = [
  ["标准面板", "1500*3000*6", "批次", 32, 0, 32, "KC-BOM-202605-018", "直出", "¥540/块/月", "每月每件", "可匹配", "可编辑", "系统初次配模"],
  ["钢支撑", "609x16x6000", "批次", 48, 0, 48, "产品清单", "翻新", "¥240/根/月", "每月每件", "部分匹配", "可编辑", "翻新后出库"],
  ["对拉杆", "M24*1200", "数量", 180, 0, 180, "KC-BOM-202605-021", "采购", "¥36/根/月", "每月每件", "无库存", "可编辑", "采购补充"]
];

const bomCatalog = [
  { code: "KC-BOM-202605-018", name: "桥梁标准面板组合", version: "V2.1", itemCount: 1 },
  { code: "KC-BOM-202605-021", name: "通用紧固件组合", version: "V1.3", itemCount: 1 }
];

const bomPricing = {};
const expandedMaterials = new Set([0, 1, 2]);

function createMaterialPlans(materials, progress, status) {
  const splitTemplates = [
    [["直出", 18], ["翻新", 8], ["新生产", 6]],
    [["翻新", 20], ["改制", 12], ["采购", 16]],
    [["直出", 60], ["采购", 80], ["新生产", 40]]
  ];
  const actualStocks = [18, 20, 60];
  return materials.map((row, materialIndex) => ({
    name: row[0],
    spec: row[1],
    dimension: row[2],
    demand: Number(row[3]),
    actualStock: actualStocks[materialIndex],
    sourceBom: row[6].startsWith("KC-BOM") ? row[6] : "",
    price: row[8],
    billing: row[9],
    note: row[12],
    splits: splitTemplates[materialIndex].map(([type, quantity], splitIndex) => {
      const completedOutbound = progress === 100 ? quantity : 0;
      const executingOutbound = progress > 0 && materialIndex === 0 && splitIndex === 0 ? Math.min(12, quantity) : 0;
      return {
        type,
        quantity,
        outbound: completedOutbound || executingOutbound,
        price: row[8],
        billing: row[9],
        changeStatus: completedOutbound || executingOutbound ? "已出库锁定" : ["审批通过", "执行中"].includes(status) ? "未出库可变更" : status === "已完成" ? "已完成" : "可编辑",
        note: type === "直出" ? "库存直接配模" : `${type}补充`
      };
    })
  }));
}

const orders = [
  makeOrder("ZL-202606-001", "草稿", "待提交", "计划同步", "JH-ZL-202606-001", "华东高架 3 标", 0),
  makeOrder("ZL-202606-002", "待审批", "审批中", "手动新增", "-", "汉江桥梁 2 标", 0),
  makeOrder("ZL-202606-003", "已撤回", "已撤回", "计划同步", "JH-ZL-202606-003", "沪苏湖站房", 0),
  makeOrder("ZL-202606-004", "不通过", "不通过", "手动新增", "-", "苏州综合管廊二期", 0),
  makeOrder("ZL-202606-005", "审批通过", "已通过", "计划同步", "JH-ZL-202606-005", "南京北站枢纽", 0),
  makeOrder("ZL-202606-006", "执行中", "已通过", "计划同步", "JH-ZL-202606-006", "华东高架 3 标", 42),
  makeOrder("ZL-202605-018", "已完成", "已通过", "手动新增", "-", "苏州综合管廊二期", 100)
];

const approvedPlans = [
  { code: "JH-ZL-202606-001", project: "华东高架 3 标", demander: "华东建设公司三标项目部", warehouse: "上海物料站", startDate: "2026-06-20", returnDate: "2026-10-30", approvedAt: "2026-06-08", contact: "刘工 / 13800001234", usePlace: "K18+200-K19+600 高架段", demandDesc: "桥梁上部结构施工周转使用，按项目现场分批进场。" },
  { code: "JH-ZL-202606-003", project: "沪苏湖站房", demander: "城建工程公司站房项目部", warehouse: "苏州装备中心", startDate: "2026-07-01", returnDate: "2026-12-15", approvedAt: "2026-06-07", contact: "周工 / 13800003621", usePlace: "沪苏湖铁路站房施工区", demandDesc: "站房主体结构模板及支撑体系租赁需求。" },
  { code: "JH-ZL-202606-005", project: "南京北站枢纽", demander: "桥隧工程公司南京北站项目部", warehouse: "南京周转库", startDate: "2026-06-25", returnDate: "2027-01-20", approvedAt: "2026-06-09", contact: "陈工 / 13800007816", usePlace: "南京北站综合枢纽施工现场", demandDesc: "枢纽工程分区施工所需周转材料租赁。" },
  { code: "JH-ZL-202605-026", project: "苏州综合管廊二期", demander: "城建工程公司管廊项目部", warehouse: "苏州装备中心", startDate: "2026-06-18", returnDate: "2026-11-30", approvedAt: "2026-05-29", contact: "吴工 / 13800009260", usePlace: "苏州工业园区管廊二期", demandDesc: "管廊主体结构施工周转材料租赁。" }
];

const projects = [
  { code: "XM-HD-2026-003", name: "华东高架 3 标", organization: "华东建设公司", warehouse: "上海物料站", status: "在建" },
  { code: "XM-QS-2026-008", name: "汉江桥梁 2 标", organization: "桥隧工程公司", warehouse: "上海物料站", status: "在建" },
  { code: "XM-CJ-2026-012", name: "沪苏湖站房", organization: "城建工程公司", warehouse: "苏州装备中心", status: "在建" },
  { code: "XM-CJ-2026-015", name: "苏州综合管廊二期", organization: "城建工程公司", warehouse: "苏州装备中心", status: "在建" },
  { code: "XM-QS-2026-019", name: "南京北站枢纽", organization: "桥隧工程公司", warehouse: "南京周转库", status: "筹备" }
];

const materialCostSources = [
  {
    dimension: "批次",
    prices: [
      { price: 1680, sources: ["KC-MB-2026-03｜2026-03-12 入库｜可用 12 块", "KC-MB-2026-04｜2026-04-08 入库｜可用 10 块"] },
      { price: 1800, sources: ["KC-MB-2026-05｜2026-05-06 入库｜可用 20 块", "KC-MB-2026-06｜2026-06-02 入库｜可用 16 块"] }
    ]
  },
  {
    dimension: "批次",
    prices: [
      { price: 760, sources: ["KC-ZC-2026-02｜2026-02-18 入库｜可用 20 根", "KC-ZC-2026-03｜2026-03-20 入库｜可用 18 根"] },
      { price: 800, sources: ["KC-ZC-2026-04｜2026-04-09 入库｜可用 30 根", "KC-ZC-2026-05｜2026-05-15 入库｜可用 24 根"] }
    ]
  },
  {
    dimension: "数量",
    prices: [
      { price: 56, sources: ["数量成本记录 SL-2026-02｜2026-02-10 入库｜可用 80 根"] },
      { price: 60, sources: ["数量成本记录 SL-2026-04｜2026-04-16 入库｜可用 160 根", "数量成本记录 SL-2026-05｜2026-05-22 入库｜可用 120 根"] }
    ]
  }
];

function makeOrder(code, status, auditStatus, source, plan, project, progress) {
  const isExecuted = progress > 0;
  const materials = baseMaterials.map((row, index) => {
    const copy = [...row];
    if (progress === 100) {
      copy[4] = copy[3];
      copy[5] = 0;
      copy[11] = "已全部出库";
      copy[12] = "已出库物资锁定";
    } else if (isExecuted && index === 0) {
      copy[4] = 12;
      copy[5] = 20;
      copy[11] = "部分已出库";
      copy[12] = "已出库部分锁定";
    }
    return copy;
  });
  const companyByProject = {
    "华东高架 3 标": "华东建设公司",
    "汉江桥梁 2 标": "桥隧工程公司",
    "沪苏湖站房": "城建工程公司",
    "苏州综合管廊二期": "城建工程公司",
    "南京北站枢纽": "桥隧工程公司"
  };
  const requiredQuantity = materials.reduce((sum, row) => sum + Number(row[3]), 0);
  const outboundQuantity = materials.reduce((sum, row) => sum + Number(row[4]), 0);
  const approved = ["审批通过", "执行中", "已完成"].includes(status);
  const ledger = approved ? [
    ["翻新维保", `FX-${code.slice(-3)}-001`, "钢支撑 609x16x6000", "翻新", "48 根", progress > 0 ? "执行中" : "待执行", "王海", "2026-06-18 09:20"],
    ["采购", `CG-${code.slice(-3)}-002`, "对拉杆 M24*1200", "采购", "180 根", progress > 0 ? "采购中" : "待执行", "赵敏", "2026-06-18 10:10"],
    ...(progress > 0 ? [["出库", `CK-${code.slice(-3)}-003`, "标准面板 1500*3000*6", "直出", progress === 100 ? "32 块" : "12 块", "已完成", "陈伟", "2026-06-20 15:30"]] : []),
    ...(progress === 100 ? [
      ["改制", `GZ-${code.slice(-3)}-004`, "钢支撑 609x16x6000", "改制", "8 根", "已完成", "周强", "2026-07-02 11:15"],
      ["新生产", `SC-${code.slice(-3)}-005`, "异型连接件", "新生产", "24 件", "已完成", "李娜", "2026-07-05 16:40"],
      ["入库", `RK-${code.slice(-3)}-006`, "退租标准面板", "退库", "32 块", "已完成", "陈伟", "2026-10-30 14:20"]
    ] : [])
  ] : [];
  return {
    code,
    status,
    auditStatus,
    source,
    sourcePlan: plan,
    project,
    company: companyByProject[project] || "华东建设公司",
    contact: "刘工 / 13800001234",
    warehouse: project.includes("苏州") ? "苏州装备中心" : "上海物料站",
    startDate: "2026-06-20",
    returnDate: "2026-10-30",
    usePlace: "项目施工现场",
    demandDesc: source === "计划同步" ? "基础信息由已审批需求计划自动带入，订单物资清单由订单侧独立维护。" : "仓库业务人员手动新增租赁订单。",
    contract: "KC-ZL-2026-0606",
    itemCount: materials.length,
    requiredQuantity,
    outboundQuantity,
    rule: "华东月租规则",
    feeDefault: "按月计费",
    rentStart: "实际出库日期",
    rentEnd: "退库验收日期",
    plannedOutbound: "2026-06-18",
    outboundPercent: progress,
    outboundStatus: progress === 100 ? "已出库" : progress > 0 ? "部分出库" : "未出库",
    settlementStatus: progress > 0 ? "待结算" : "未生成",
    materials,
    materialPlans: createMaterialPlans(materials, progress, status),
    fees: [["进场运费", "¥9,000", "指定日期", "2026-06-20", "进场运输费用", "已设置"], ["退场运费", "¥9,000", "指定日期", "2026-10-30", "退场运输费用", "已设置"], ["现场指导费", "¥6,000", "按月分摊", "2026-06-20 至 2026-10-30", "按预计使用周期分摊", "已设置"]],
    ledger,
    changes: status === "不通过" ? [["2026-06-17 10:20", "审批负责人", "审批退回", "租赁单价依据不完整", "整单", "否", "不通过", "待修改"]] : [],
    settlement: [["累计应结金额", progress > 0 ? "¥86,400" : "¥0"], ["累计已结金额", progress === 100 ? "¥86,400" : progress > 0 ? "¥32,000" : "¥0"], ["未结金额", progress === 100 ? "¥0" : progress > 0 ? "¥54,400" : "¥0"], ["结算进度", progress === 100 ? "100%" : progress > 0 ? "37%" : "0%"], ["最近结算期间", progress > 0 ? "2026-06" : "-"], ["结算状态", progress === 100 ? "已结算" : progress > 0 ? "结算中" : "未生成"]],
    files: source === "计划同步" ? [["关联需求计划", `${plan}.pdf`, "已关联"], ["合同附件", "租赁合同.pdf", "已上传"]] : [["合同附件", "租赁合同.pdf", "已上传"]]
  };
}

let current = orders[0];
let editMode = "new";
let asc = true;
const rows = document.querySelector("#orderRows");
const empty = document.querySelector("#empty");
const mask = document.querySelector("#mask");
const syncModal = document.querySelector("#syncModal");
const changeModal = document.querySelector("#changeModal");
const outboundModal = document.querySelector("#outboundModal");
const planSelectModal = document.querySelector("#planSelectModal");
const projectSelectModal = document.querySelector("#projectSelectModal");
const bomPriceModal = document.querySelector("#bomPriceModal");
let selectedPlan = null;
let selectedProject = null;

function statusClass(value) {
  if (["审批通过", "已完成", "已通过", "已出库", "已执行"].includes(value)) return "ok";
  if (["执行中", "部分出库", "待结算"].includes(value)) return "run";
  if (["不通过", "已关闭"].includes(value)) return "danger";
  if (value === "已撤回") return "closed";
  return "wait";
}

function pathClass(value) {
  return { "翻新": "refurbish", "新生产": "produce", "采购": "buy", "直出": "rent", "改制": "modify" }[value] || "";
}

function selectedOption(value, selected) {
  return `<option ${value === selected ? "selected" : ""}>${value}</option>`;
}

function showView(viewId) {
  document.querySelectorAll(".page-view").forEach((view) => view.classList.add("hidden"));
  document.querySelector(`#${viewId}`).classList.remove("hidden");
  history.replaceState(null, "", `#${viewId}`);
  window.scrollTo({ top: 0, behavior: "instant" });
}

function rowActions(item) {
  const actions = [`<button class="link-btn view">查看</button>`];
  if (["草稿", "已撤回", "不通过"].includes(item.status)) actions.push(`<button class="link-btn edit">编辑</button>`);
  if (item.status === "草稿") actions.push(`<button class="link-btn submit">提交</button>`);
  if (item.status === "待审批") actions.push(`<button class="link-btn withdraw">撤回</button>`);
  if (["审批通过", "执行中", "已完成"].includes(item.status)) actions.push(`<button class="link-btn cost">成本分析</button>`);
  if (["审批通过", "执行中"].includes(item.status)) actions.push(`<button class="link-btn change-material">变更</button>`);
  if (item.status === "审批通过") actions.push(`<button class="link-btn execute">分批出库</button>`);
  if (["草稿", "已撤回"].includes(item.status)) actions.push(`<button class="link-btn danger delete">删除</button>`);
  return actions.join("");
}

function filteredOrders() {
  const plan = document.querySelector("#planFilter").value.trim();
  const project = document.querySelector("#projectFilter").value;
  const company = document.querySelector("#companyFilter").value.trim();
  const warehouse = document.querySelector("#warehouseFilter").value;
  const status = document.querySelector("#orderStatusFilter").value;
  const outbound = document.querySelector("#outboundFilter").value;
  const settle = document.querySelector("#settleFilter").value;
  return orders.filter((item) => (!plan || item.sourcePlan.includes(plan) || item.code.includes(plan))
    && (project === "全部" || item.project === project)
    && (!company || item.company.includes(company))
    && (warehouse === "全部" || item.warehouse === warehouse)
    && (status === "全部" || item.status === status)
    && (outbound === "全部" || item.outboundStatus === outbound)
    && (settle === "全部" || item.settlementStatus === settle));
}

function renderRows(list) {
  rows.innerHTML = list.map((item) => `
    <tr data-index="${orders.indexOf(item)}">
      <td><input type="checkbox" /></td><td>${item.code}</td><td>${item.sourcePlan}</td><td>${item.project}</td><td>${item.company}</td><td>${item.warehouse}</td><td>${item.requiredQuantity}</td><td>${item.outboundQuantity}</td><td>${item.rule}</td>
      <td><span class="status ${statusClass(item.status)}">${item.status}</span></td>
      <td><div class="progress"><b><i style="width:${item.outboundPercent}%"></i></b><span>${item.outboundPercent}%</span></div></td>
      <td><span class="status ${statusClass(item.settlementStatus)}">${item.settlementStatus}</span></td>
      <td><div class="row-actions">${rowActions(item)}</div></td>
    </tr>`).join("");
  document.querySelector(".table-panel table").classList.toggle("hidden", list.length === 0);
  empty.classList.toggle("hidden", list.length !== 0);
  document.querySelector("#pageSummary").textContent = `共${list.length}条`;
  bindRowActions();
}

function bindRowActions() {
  document.querySelectorAll("#orderRows tr").forEach((tr) => {
    const item = orders[Number(tr.dataset.index)];
    tr.querySelector(".view")?.addEventListener("click", () => openDetail(item));
    tr.querySelector(".edit")?.addEventListener("click", () => openEdit(item));
    tr.querySelector(".cost")?.addEventListener("click", () => openCost(item));
    tr.querySelector(".change-material")?.addEventListener("click", () => openMaterialChange(item));
    tr.querySelector(".submit")?.addEventListener("click", () => openChange("提交审批", "草稿", "待审批"));
    tr.querySelector(".withdraw")?.addEventListener("click", () => openChange("撤回订单", "待审批", "已撤回"));
    tr.querySelector(".execute")?.addEventListener("click", () => openDetail(item));
    tr.querySelector(".delete")?.addEventListener("click", () => openChange("删除订单", item.code, "删除"));
  });
}

function detailButtons() {
  const secondary = document.querySelector("#detailSecondary");
  const primary = document.querySelector("#detailPrimary");
  secondary.classList.remove("hidden");
  primary.classList.remove("hidden");
  if (current.status === "草稿") { secondary.textContent = "编辑"; primary.textContent = "提交审批"; }
  else if (current.status === "待审批") { secondary.textContent = "返回"; primary.textContent = "撤回"; }
  else if (["已撤回", "不通过"].includes(current.status)) { secondary.textContent = "编辑"; primary.textContent = "重新提交"; }
  else if (current.status === "审批通过") { secondary.classList.add("hidden"); primary.textContent = "分批出库"; }
  else if (current.status === "执行中") { secondary.classList.add("hidden"); primary.textContent = "继续出库"; }
  else { secondary.classList.add("hidden"); primary.classList.add("hidden"); }
}

function openDetail(item) {
  current = item;
  renderDetail();
  detailButtons();
  showView("detailView");
}

function renderDetail() {
  document.querySelector("#detailHeading").textContent = `${current.code} 租赁订单详情`;
  document.querySelector("#basicFields").innerHTML = [
    ["关联需求计划", current.sourcePlan], ["项目", current.project], ["所属公司", current.company], ["需求方联系人", current.contact], ["当前仓库", current.warehouse],
    ["预计使用开始", current.startDate], ["预计归还", current.returnDate], ["使用地点", current.usePlace], ["合同信息", current.contract], ["订单状态", current.status], ["审批状态", current.auditStatus]
  ].map(([label, value]) => `<div class="info-item"><span>${label}</span><strong>${value}</strong></div>`).join("");
  document.querySelector("#warehouseFields").innerHTML = [
    ["租赁规则", current.rule], ["默认计费方式", current.feeDefault], ["计租开始口径", current.rentStart], ["计租结束口径", current.rentEnd], ["预计出库日期", current.plannedOutbound], ["出库进度", `${current.outboundPercent}%`]
  ].map(([label, value]) => `<div class="info-item"><span>${label}</span><strong>${value}</strong></div>`).join("");
  const approved = ["审批通过", "执行中", "已完成"].includes(current.status);
  renderDetailMaterials(approved);
  document.querySelector("#feeRows").innerHTML = current.fees.map((r) => `<tr>${r.map((v) => `<td>${v}</td>`).join("")}</tr>`).join("");
  renderLedger();
  document.querySelector("#changeRows").innerHTML = current.changes.length ? current.changes.map((r) => `<tr>${r.map((v, i) => `<td>${i === 6 ? `<span class="status ${statusClass(v)}">${v}</span>` : v}</td>`).join("")}</tr>`).join("") : `<tr><td colspan="8">暂无变更记录</td></tr>`;
  document.querySelector("#settlementFields").innerHTML = current.settlement.map(([l, v]) => `<div class="info-item"><span>${l}</span><strong>${v}</strong></div>`).join("");
  document.querySelector("#fileList").innerHTML = current.files.map((r) => `<div><span>${r[0]}</span><strong>${r[1]}</strong><em>${r[2]}</em></div>`).join("");
  const editable = ["草稿", "已撤回", "不通过"].includes(current.status);
  ["detailBringBom", "detailChooseProduct", "detailImportFile", "detailAdjustMaterial"].forEach((id) => document.querySelector(`#${id}`).disabled = !editable);
  document.querySelector("#detailBatchOutbound").classList.toggle("hidden", !["审批通过", "执行中"].includes(current.status));
  ["ledgerInfo", "changeInfo", "settlementInfo"].forEach((id) => document.querySelector(`#${id}`).classList.toggle("hidden", !approved));
}

function renderDetailMaterials(approved) {
  document.querySelector("#materialRows").innerHTML = current.materialPlans.map((material, materialIndex) => {
    const totalOutbound = material.splits.reduce((sum, split) => sum + split.outbound, 0);
    const splitTotal = material.splits.reduce((sum, split) => sum + Number(split.quantity), 0);
    const shortage = material.actualStock < material.demand;
    const expanded = expandedMaterials.has(materialIndex);
    const parent = `<tr class="material-parent" data-material-parent="${materialIndex}">
      <td><input type="checkbox" disabled /></td>
      <td><div class="tree-name"><button class="tree-toggle" data-toggle-material="${materialIndex}">${expanded ? "−" : "+"}</button>${material.name}</div>${material.sourceBom ? `<span class="tree-source">${material.sourceBom}</span>` : ""}</td>
      <td>${material.spec}</td><td>${material.dimension}</td><td>${material.demand}</td>
      <td><span class="stock-value ${shortage ? "shortage" : ""}">${material.actualStock}<small>${shortage ? `缺口 ${material.demand - material.actualStock}` : "库存充足"}</small></span></td>
      <td><span class="split-total">${splitTotal} / ${material.demand}</span></td><td>${totalOutbound}</td><td>-</td><td>${material.splits.length} 种路径</td><td>${bomPricing[material.sourceBom]?.price || material.price}</td><td>${bomPricing[material.sourceBom]?.billing || material.billing}</td>
      <td>${material.note}</td>
    </tr>`;
    const children = material.splits.map((split) => {
      const remaining = Math.max(0, split.quantity - split.outbound);
      const canOutbound = approved && ["审批通过", "执行中"].includes(current.status) && remaining > 0;
      return `<tr class="material-child ${expanded ? "" : "hidden"}" data-material-child="${materialIndex}">
        <td><input type="checkbox" ${canOutbound ? "" : "disabled"} /></td><td><span class="tree-branch">└</span>配模明细</td><td>-</td><td>-</td><td>-</td><td>-</td>
        <td>${split.quantity}</td><td>${split.outbound}</td><td>${canOutbound ? `<input class="outbound-qty" value="${Math.min(remaining, 8)}" />` : "-"}</td>
        <td><span class="method ${pathClass(split.type)}">${split.type}</span></td><td>-</td><td>-</td><td>${split.note}</td>
      </tr>`;
    }).join("");
    return parent + children;
  }).join("");
  bindTreeToggles();
}

function bindTreeToggles() {
  document.querySelectorAll("[data-toggle-material]").forEach((button) => button.onclick = () => {
    const index = Number(button.dataset.toggleMaterial);
    if (expandedMaterials.has(index)) expandedMaterials.delete(index);
    else expandedMaterials.add(index);
    if (!document.querySelector("#detailView").classList.contains("hidden")) renderDetailMaterials(["审批通过", "执行中", "已完成"].includes(current.status));
    else if (!document.querySelector("#materialChangeView").classList.contains("hidden")) renderChangeMaterials();
    else renderEditMaterials();
  });
}

function openMaterialChange(item) {
  current = item;
  document.querySelector("#changeViewHeading").textContent = `${item.code} 物资清单变更`;
  document.querySelector("#changeOrderFields").innerHTML = [
    ["订单编号", item.code], ["项目名称", item.project], ["当前仓库", item.warehouse],
    ["订单状态", item.status], ["已出库数量", item.outboundQuantity], ["审批状态", item.auditStatus]
  ].map(([label, value]) => `<div class="info-item"><span>${label}</span><strong>${value}</strong></div>`).join("");
  document.querySelector("#materialChangeReason").value = "";
  renderChangeMaterials();
  showView("materialChangeView");
}

function renderChangeMaterials() {
  document.querySelector("#changeMaterialRows").innerHTML = current.materialPlans.map((material, materialIndex) => {
    const shortage = material.actualStock < material.demand;
    const totalOutbound = material.splits.reduce((sum, split) => sum + split.outbound, 0);
    const splitTotal = material.splits.reduce((sum, split) => sum + Number(split.quantity), 0);
    const expanded = expandedMaterials.has(materialIndex);
    const parentLocked = totalOutbound > 0;
    const parent = `<tr class="material-parent">
      <td><input type="checkbox" ${parentLocked ? "disabled" : ""} /></td>
      <td><div class="tree-name"><button class="tree-toggle" data-toggle-material="${materialIndex}">${expanded ? "−" : "+"}</button>${material.name}</div>${material.sourceBom ? `<span class="tree-source">${material.sourceBom}</span>` : ""}</td>
      <td><input value="${material.spec}" ${parentLocked ? "disabled" : ""} /></td><td>${material.dimension}</td>
      <td><input value="${material.demand}" min="${totalOutbound}" ${parentLocked ? "disabled" : ""} /></td>
      <td><span class="stock-value ${shortage ? "shortage" : ""}">${material.actualStock}<small>${shortage ? `缺口 ${material.demand - material.actualStock}` : "库存充足"}</small></span></td>
      <td><span class="split-total">${splitTotal} / ${material.demand}</span></td><td>${material.splits.length} 种路径</td>
      <td><input value="${material.price}" ${parentLocked ? "disabled" : ""} /></td>
      <td><select ${parentLocked ? "disabled" : ""}>${["每月每件", "每月每吨", "一口价", "按工程量"].map((type) => selectedOption(type, material.billing)).join("")}</select></td>
      <td>${parentLocked ? "已出库物资项锁定" : material.note}</td><td><button data-change-add="${materialIndex}">新增拆分</button></td>
    </tr>`;
    const children = material.splits.map((split, splitIndex) => {
      const locked = split.outbound > 0;
      return `<tr class="material-child ${expanded ? "" : "hidden"}" data-change-material="${materialIndex}" data-change-split="${splitIndex}">
        <td><input type="checkbox" ${locked ? "disabled" : ""} /></td><td><span class="tree-branch">└</span>配模明细 ${splitIndex + 1}</td><td>-</td><td>-</td><td>-</td><td>-</td>
        <td><input value="${split.quantity}" min="${split.outbound}" ${locked ? "disabled" : ""} /></td>
        <td><select ${locked ? "disabled" : ""}>${["直出", "翻新", "改制", "新生产", "采购"].map((type) => selectedOption(type, split.type)).join("")}</select></td>
        <td>-</td><td>-</td><td><input value="${split.note}" ${locked ? "disabled" : ""} /></td>
        <td><button class="change-delete-split" ${locked ? "disabled" : ""}>删除</button></td>
      </tr>`;
    }).join("");
    return parent + children;
  }).join("");
  bindTreeToggles();
  document.querySelectorAll("[data-change-add]").forEach((button) => button.onclick = () => {
    current.materialPlans[Number(button.dataset.changeAdd)].splits.push({ type: "采购", quantity: 0, outbound: 0, price: "", billing: "", changeStatus: "待审核", note: "" });
    renderChangeMaterials();
  });
  document.querySelectorAll(".change-delete-split:not(:disabled)").forEach((button) => button.onclick = () => {
    const row = button.closest("tr");
    const materialIndex = Number(row.dataset.changeMaterial);
    const splitIndex = Number(row.dataset.changeSplit);
    current.materialPlans[materialIndex].splits.splice(splitIndex, 1);
    renderChangeMaterials();
  });
}

function renderLedger() {
  const type = document.querySelector("#ledgerTypeFilter").value;
  const start = document.querySelector("#ledgerStartDate").value;
  const end = document.querySelector("#ledgerEndDate").value;
  const list = current.ledger.filter((row) => (type === "全部" || row[0] === type)
    && (!start || row[7].slice(0, 10) >= start)
    && (!end || row[7].slice(0, 10) <= end));
  document.querySelector("#ledgerRows").innerHTML = list.length ? list.map((row) => `<tr>${row.map((value, index) => `<td>${index === 5 ? `<span class="status ${statusClass(value)}">${value}</span>` : value}</td>`).join("")}</tr>`).join("") : `<tr><td colspan="8">暂无符合条件的业务记录</td></tr>`;
  document.querySelector("#ledgerSummary").textContent = `共 ${list.length} 条业务记录`;
}

function openEdit(item = null) {
  current = item || orders[0];
  editMode = item ? "edit" : "new";
  document.querySelector("#editHeading").textContent = item ? "编辑租赁订单" : "新增租赁订单";
  document.querySelector("#editCrumb").textContent = item ? "编辑" : "新增";
  document.querySelector("#editCode").value = item ? item.code : "系统自动生成";
  document.querySelector("#editPlan").value = item?.sourcePlan === "-" ? "" : item?.sourcePlan || "";
  document.querySelector("#editProject").value = item?.project || "";
  document.querySelector("#editContact").value = item?.contact || "";
  document.querySelector("#editUsePlace").value = item?.usePlace || "";
  document.querySelector("#editStartDate").value = item?.startDate || "2026-06-20";
  document.querySelector("#editReturnDate").value = item?.returnDate || "2026-10-30";
  document.querySelector("#editDemandDesc").value = item?.demandDesc || "";
  document.querySelector("#editRule").value = item?.rule || "华东月租规则";
  document.querySelector("#editContract").value = item?.contract || "";
  selectedPlan = approvedPlans.find((plan) => plan.code === item?.sourcePlan) || null;
  selectedProject = projects.find((project) => project.name === item?.project) || null;
  renderEditMaterials();
  showView("editView");
}

function renderEditMaterials() {
  document.querySelector("#editMaterialRows").innerHTML = current.materialPlans.map((material, materialIndex) => {
    const shortage = material.actualStock < material.demand;
    const splitTotal = material.splits.reduce((sum, split) => sum + Number(split.quantity), 0);
    const expanded = expandedMaterials.has(materialIndex);
    const locked = Boolean(material.sourceBom && bomPricing[material.sourceBom]?.price);
    const materialPrice = locked ? bomPricing[material.sourceBom].price : material.price;
    const materialBilling = locked ? bomPricing[material.sourceBom].billing : material.billing;
    const parent = `<tr class="material-parent">
      <td><input type="checkbox" /></td>
      <td><div class="tree-name"><button class="tree-toggle" data-toggle-material="${materialIndex}">${expanded ? "−" : "+"}</button>${material.name}</div>${material.sourceBom ? `<span class="tree-source">${material.sourceBom}</span>` : ""}</td>
      <td>${material.spec}</td><td>${material.dimension}</td><td><input value="${material.demand}" /></td>
      <td><span class="stock-value ${shortage ? "shortage" : ""}">${material.actualStock}<small>${shortage ? `缺口 ${material.demand - material.actualStock}` : "库存充足"}</small></span></td>
      <td><span class="split-total">${splitTotal} / ${material.demand}</span></td><td>${material.splits.length} 种路径</td>
      <td><input class="parent-price ${locked ? "locked-price" : ""}" data-material-price="${materialIndex}" value="${materialPrice}" ${locked ? "disabled" : ""} />${locked ? `<span class="price-lock-note">按 BOM 定价</span>` : ""}</td>
      <td><select class="parent-billing" data-material-billing="${materialIndex}" ${locked ? "disabled" : ""}>${["每月每件", "每月每吨", "一口价", "按工程量"].map((type) => selectedOption(type, materialBilling)).join("")}</select></td>
      <td>${material.note}</td><td><button class="add-split" data-add-split="${materialIndex}">拆分配模</button></td>
    </tr>`;
    const children = material.splits.map((split, splitIndex) => {
      return `<tr class="material-child ${expanded ? "" : "hidden"}" data-material-child="${materialIndex}">
        <td><input type="checkbox" /></td><td><span class="tree-branch">└</span>配模明细 ${splitIndex + 1}</td><td>-</td><td>-</td><td>-</td><td>-</td>
        <td><input value="${split.quantity}" /></td>
        <td><select>${["直出", "翻新", "改制", "新生产", "采购"].map((type) => selectedOption(type, split.type)).join("")}</select></td>
        <td>-</td><td>-</td>
        <td><input value="${split.note}" /></td><td><button class="delete-split">删除</button></td>
      </tr>`;
    }).join("");
    return parent + children;
  }).join("");
  bindTreeToggles();
  document.querySelectorAll("[data-add-split]").forEach((button) => button.onclick = () => {
    current.materialPlans[Number(button.dataset.addSplit)].splits.push({ type: "采购", quantity: 0, outbound: 0, price: "¥0/件/月", billing: "每月每件", changeStatus: "可编辑", note: "" });
    renderEditMaterials();
  });
  document.querySelectorAll("[data-material-price]").forEach((input) => input.oninput = () => {
    current.materialPlans[Number(input.dataset.materialPrice)].price = input.value;
  });
  document.querySelectorAll("[data-material-billing]").forEach((select) => select.onchange = () => {
    current.materialPlans[Number(select.dataset.materialBilling)].billing = select.value;
  });
  document.querySelectorAll(".delete-split").forEach((button) => button.onclick = () => {
    const row = button.closest("tr");
    const materialIndex = Number(row.dataset.materialChild);
    const siblingRows = [...document.querySelectorAll(`tr[data-material-child="${materialIndex}"]`)];
    const splitIndex = siblingRows.indexOf(row);
    if (splitIndex >= 0 && current.materialPlans[materialIndex].splits.length > 1) {
      current.materialPlans[materialIndex].splits.splice(splitIndex, 1);
      renderEditMaterials();
    }
  });
}

function openCost(item) {
  current = item;
  document.querySelector("#costHeading").textContent = `${item.code} 成本分析`;
  document.querySelector("#costBasicFields").innerHTML = [["订单编号", item.code], ["项目", item.project], ["当前仓库", item.warehouse], ["物资项数", `${item.itemCount} 项`], ["订单状态", item.status], ["租赁收入方案", item.rule]].map(([l, v]) => `<div class="info-item"><span>${l}</span><strong>${v}</strong></div>`).join("");
  document.querySelector("#costRows").innerHTML = item.materials.map((material, index) => {
    const source = materialCostSources[index];
    const fifoPrice = source.prices[0];
    return `<tr data-cost-index="${index}">
      <td>${material[0]}</td><td>${material[1]}</td><td>${source.dimension}</td><td>${material[3]}</td>
      <td><select class="unit-cost-select">${source.prices.map((entry, priceIndex) => `<option value="${priceIndex}">¥${entry.price.toLocaleString()}/${source.dimension === "数量" ? "根" : material[0] === "标准面板" ? "块" : "根"}</option>`).join("")}</select></td>
      <td><select class="cost-source-select">${fifoPrice.sources.map((value) => `<option>${value}</option>`).join("")}</select></td>
      <td><input class="cost-quantity" value="${material[3]}" /></td>
      <td class="cost-subtotal">¥${(fifoPrice.price * Number(material[3])).toLocaleString()}</td>
      <td><input value="系统按先进先出自动选择" /></td>
    </tr>`;
  }).join("");
  bindCostSelectors();
  showView("costView");
}

function bindCostSelectors() {
  document.querySelectorAll("#costRows tr[data-cost-index]").forEach((row) => {
    const index = Number(row.dataset.costIndex);
    const unitCost = row.querySelector(".unit-cost-select");
    const costSource = row.querySelector(".cost-source-select");
    const quantity = row.querySelector(".cost-quantity");
    const subtotal = row.querySelector(".cost-subtotal");
    const updateSubtotal = () => {
      const price = materialCostSources[index].prices[Number(unitCost.value)].price;
      subtotal.textContent = `¥${(price * (Number(quantity.value) || 0)).toLocaleString()}`;
    };
    unitCost.onchange = () => {
      const selectedPrice = materialCostSources[index].prices[Number(unitCost.value)];
      costSource.innerHTML = selectedPrice.sources.map((value) => `<option>${value}</option>`).join("");
      costSource.selectedIndex = 0;
      updateSubtotal();
    };
    quantity.oninput = updateSubtotal;
  });
}

function openModal(modal) { modal.classList.remove("hidden"); mask.classList.remove("hidden"); }
function closeModals() { [syncModal, changeModal, outboundModal, planSelectModal, projectSelectModal, bomPriceModal].forEach((m) => m.classList.add("hidden")); mask.classList.add("hidden"); }
function openChange(type, before, after) { document.querySelector("#changeTitle").textContent = type; document.querySelector("#beforeChange").value = before; document.querySelector("#afterChange").value = after; openModal(changeModal); }

function renderBomPricing() {
  const usedBomCodes = [...new Set(current.materialPlans.map((material) => material.sourceBom).filter(Boolean))];
  document.querySelector("#bomPriceRows").innerHTML = usedBomCodes.map((code) => {
    const bom = bomCatalog.find((item) => item.code === code);
    const pricing = bomPricing[code] || { mode: "逐项定价", price: "", billing: "每月每件" };
    return `<tr data-bom-code="${code}"><td>${code}</td><td>${bom?.name || "已引用 BOM"}</td><td>${bom?.version || "-"}</td><td>${bom?.itemCount || 0} 项</td>
      <td><select class="bom-price-mode">${["逐项定价", "整单月租", "整单一口价"].map((value) => selectedOption(value, pricing.mode)).join("")}</select></td>
      <td><input class="bom-price-value" value="${pricing.price}" placeholder="请输入租赁价格" /></td>
      <td><select class="bom-billing">${["每月每件", "每月每吨", "一口价"].map((value) => selectedOption(value, pricing.billing)).join("")}</select></td></tr>`;
  }).join("");
}

function confirmBomPricing() {
  document.querySelectorAll("#bomPriceRows tr[data-bom-code]").forEach((row) => {
    const price = row.querySelector(".bom-price-value").value.trim();
    const code = row.dataset.bomCode;
    if (price) {
      bomPricing[code] = {
        mode: row.querySelector(".bom-price-mode").value,
        price,
        billing: row.querySelector(".bom-billing").value
      };
    } else delete bomPricing[code];
  });
  renderEditMaterials();
  closeModals();
}

function filteredPlans() {
  const keyword = document.querySelector("#planKeyword").value.trim();
  const warehouse = document.querySelector("#planWarehouse").value;
  const start = document.querySelector("#planApprovedStart").value;
  const end = document.querySelector("#planApprovedEnd").value;
  return approvedPlans.filter((plan) => (!keyword || plan.code.includes(keyword) || plan.project.includes(keyword))
    && (warehouse === "全部" || plan.warehouse === warehouse)
    && (!start || plan.approvedAt >= start)
    && (!end || plan.approvedAt <= end));
}

function renderPlanOptions(list = approvedPlans) {
  document.querySelector("#planSelectRows").innerHTML = list.length ? list.map((plan) => `
    <tr class="${selectedPlan?.code === plan.code ? "is-selected" : ""}" data-plan="${plan.code}">
      <td><input type="radio" name="approvedPlan" value="${plan.code}" ${selectedPlan?.code === plan.code ? "checked" : ""} /></td>
      <td>${plan.code}</td><td>${plan.project}</td><td>${plan.demander}</td><td>${plan.warehouse}</td>
      <td>${plan.startDate} 至 ${plan.returnDate}</td><td>${plan.approvedAt}</td>
    </tr>`).join("") : `<tr><td class="selection-empty" colspan="7">未找到符合条件的已审批需求计划</td></tr>`;
  document.querySelector("#planResultCount").textContent = `共 ${list.length} 条`;
  document.querySelectorAll("#planSelectRows tr[data-plan]").forEach((row) => row.onclick = () => {
    selectedPlan = approvedPlans.find((plan) => plan.code === row.dataset.plan);
    renderPlanOptions(list);
  });
}

function filteredProjects() {
  const keyword = document.querySelector("#projectKeyword").value.trim();
  const organization = document.querySelector("#projectOrganization").value;
  const status = document.querySelector("#projectStatus").value;
  return projects.filter((project) => (!keyword || project.code.includes(keyword) || project.name.includes(keyword))
    && (organization === "全部" || project.organization === organization)
    && (status === "全部" || project.status === status));
}

function renderProjectOptions(list = projects) {
  document.querySelector("#projectSelectRows").innerHTML = list.length ? list.map((project) => `
    <tr class="${selectedProject?.code === project.code ? "is-selected" : ""}" data-project="${project.code}">
      <td><input type="radio" name="project" value="${project.code}" ${selectedProject?.code === project.code ? "checked" : ""} /></td>
      <td>${project.code}</td><td>${project.name}</td><td>${project.organization}</td><td>${project.warehouse}</td><td><span class="status ${project.status === "在建" ? "ok" : "wait"}">${project.status}</span></td>
    </tr>`).join("") : `<tr><td class="selection-empty" colspan="6">未找到符合条件的项目</td></tr>`;
  document.querySelectorAll("#projectSelectRows tr[data-project]").forEach((row) => row.onclick = () => {
    selectedProject = projects.find((project) => project.code === row.dataset.project);
    renderProjectOptions(list);
  });
}

function applySelectedPlan() {
  if (!selectedPlan) return;
  document.querySelector("#editPlan").value = selectedPlan.code;
  document.querySelector("#editProject").value = selectedPlan.project;
  document.querySelector("#editContact").value = selectedPlan.contact;
  document.querySelector("#editUsePlace").value = selectedPlan.usePlace;
  document.querySelector("#editStartDate").value = selectedPlan.startDate;
  document.querySelector("#editReturnDate").value = selectedPlan.returnDate;
  document.querySelector("#editDemandDesc").value = selectedPlan.demandDesc;
  selectedProject = projects.find((project) => project.name === selectedPlan.project) || null;
  closeModals();
}

function applySelectedProject() {
  if (!selectedProject) return;
  if (selectedPlan && selectedPlan.project !== selectedProject.name) {
    selectedPlan = null;
    document.querySelector("#editPlan").value = "";
  }
  document.querySelector("#editProject").value = selectedProject.name;
  closeModals();
}

document.querySelector("#query").onclick = () => renderRows(filteredOrders());
document.querySelector("#reset").onclick = () => { ["#projectFilter", "#warehouseFilter", "#orderStatusFilter", "#outboundFilter", "#settleFilter"].forEach((s) => document.querySelector(s).value = "全部"); document.querySelector("#planFilter").value = ""; document.querySelector("#companyFilter").value = ""; renderRows(orders); };
document.querySelector("#syncPlan").onclick = () => openModal(syncModal);
document.querySelector("#newOrder").onclick = () => openEdit();
document.querySelector("#exportOrder").onclick = () => openChange("导出订单", "当前筛选结果", "租赁订单台账");
document.querySelector("#backFromDetail").onclick = () => showView("listView");
document.querySelector("#backFromCost").onclick = () => showView("listView");
document.querySelector("#detailSecondary").onclick = () => current.status === "待审批" ? showView("listView") : openEdit(current);
document.querySelector("#detailPrimary").onclick = () => ["审批通过", "执行中"].includes(current.status) ? openModal(outboundModal) : openChange(current.status === "待审批" ? "撤回订单" : "提交审批", current.status, current.status === "待审批" ? "已撤回" : "待审批");
document.querySelector("#detailBatchOutbound").onclick = () => openModal(outboundModal);
document.querySelector("#cancelEdit").onclick = () => showView("listView");
document.querySelector("#cancelMaterialChange").onclick = () => showView("listView");
document.querySelector("#saveMaterialChange").onclick = () => openChange("保存物资变更", current.code, "物资变更草稿");
document.querySelector("#submitMaterialChange").onclick = () => {
  const reason = document.querySelector("#materialChangeReason").value.trim();
  if (!reason) {
    document.querySelector("#materialChangeReason").focus();
    return;
  }
  openChange("提交物资变更审核", current.status, "变更待审批");
};
document.querySelector("#bomPrice").onclick = () => { renderBomPricing(); openModal(bomPriceModal); };
document.querySelector("#confirmBomPrice").onclick = confirmBomPricing;
document.querySelector("#queryLedger").onclick = renderLedger;
document.querySelector("#resetLedgerFilter").onclick = () => {
  document.querySelector("#ledgerTypeFilter").value = "全部";
  document.querySelector("#ledgerStartDate").value = "";
  document.querySelector("#ledgerEndDate").value = "";
  renderLedger();
};
document.querySelector("#editPlan").onclick = () => { renderPlanOptions(); openModal(planSelectModal); };
document.querySelector("#editProject").onclick = () => { renderProjectOptions(); openModal(projectSelectModal); };
document.querySelector("#queryPlan").onclick = () => renderPlanOptions(filteredPlans());
document.querySelector("#resetPlanFilter").onclick = () => {
  document.querySelector("#planKeyword").value = "";
  document.querySelector("#planWarehouse").value = "全部";
  document.querySelector("#planApprovedStart").value = "";
  document.querySelector("#planApprovedEnd").value = "";
  renderPlanOptions();
};
document.querySelector("#confirmPlan").onclick = applySelectedPlan;
document.querySelector("#queryProject").onclick = () => renderProjectOptions(filteredProjects());
document.querySelector("#resetProjectFilter").onclick = () => {
  document.querySelector("#projectKeyword").value = "";
  document.querySelector("#projectOrganization").value = "全部";
  document.querySelector("#projectStatus").value = "全部";
  renderProjectOptions();
};
document.querySelector("#confirmProject").onclick = applySelectedProject;
["detailBringBom", "detailChooseProduct", "detailImportFile", "detailAdjustMaterial", "bringBom", "chooseProduct", "importFile", "batchMatch", "addFee", "changeBringBom", "changeChooseProduct", "changeImportFile"].forEach((id) => document.querySelector(`#${id}`).onclick = () => openChange(document.querySelector(`#${id}`).textContent, "当前订单物资清单", "更新订单物资清单"));
document.querySelectorAll(".closeModal").forEach((b) => b.onclick = closeModals);
mask.onclick = closeModals;
document.querySelectorAll("th[data-sort]").forEach((th) => th.onclick = () => { const key = th.dataset.sort; const sorted = [...filteredOrders()].sort((a, b) => asc ? String(a[key]).localeCompare(String(b[key]), "zh-CN", { numeric: true }) : String(b[key]).localeCompare(String(a[key]), "zh-CN", { numeric: true })); asc = !asc; renderRows(sorted); });

renderRows(orders);
renderDetail();
if (location.hash === "#detailView") showView("detailView");
else if (location.hash === "#editView") openEdit();
else if (location.hash === "#materialChangeView") openMaterialChange(orders[4]);
else if (location.hash === "#costView") openCost(orders[4]);
else showView("listView");
