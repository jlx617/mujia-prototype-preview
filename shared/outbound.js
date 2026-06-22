const outboundOrders = [
  {
    no: "CK-20260529-001",
    type: "租赁",
    source: "ZL-20260521-008",
    project: "汉江桥梁 2 标",
    warehouse: "上海物料站",
    itemCount: 4,
    amount: "1,286 件 / 18.6 吨",
    weighing: "已过磅",
    confirm: "待确认",
    approval: "仓库负责人确认",
    status: "待出库",
    attachment: "待回传",
    driver: "周明 / 沪A·K6208",
    date: "2026-05-29",
    task: "pending",
    items: [
      ["贝雷片", "321 型 3m Q345", "480", "0", "片", "A-01-01", "KC-BL-2026-05", "0 吨", "按租赁订单配料"],
      ["钢模板", "1500x3000x80", "96", "0", "块", "A-02-03", "KC-GMB-0008", "0 吨", "一物一码"],
      ["扣件", "48 系列 十字", "640", "0", "只", "A-05-08", "FC-2026-05-017", "0 吨", ""],
    ],
  },
  {
    no: "CK-20260528-014",
    type: "调拨",
    source: "DB-20260525-018",
    project: "沪苏湖站房",
    warehouse: "苏州装备中心",
    itemCount: 3,
    amount: "216 件 / 9.2 吨",
    weighing: "待过磅",
    confirm: "已确认",
    approval: "负责人已确认",
    status: "部分出库",
    attachment: "已上传",
    driver: "刘涛 / 苏E·2K180",
    date: "2026-05-28",
    task: "weighing",
    items: [
      ["防护平台", "4.5m 装配式", "42", "36", "套", "T-01", "DB-20260525-018", "7.8 吨", "跨仓调拨"],
      ["爬架导轨", "6m 标准段", "60", "48", "根", "A-03-06", "KC-PJ-2026-03", "1.4 吨", ""],
    ],
  },
  {
    no: "CK-20260527-009",
    type: "翻新",
    source: "FX-20260526-006",
    project: "科创中心备料",
    warehouse: "上海物料站",
    itemCount: 2,
    amount: "124 件 / 5.4 吨",
    weighing: "无需过磅",
    confirm: "待提交",
    approval: "待提交",
    status: "待出库",
    attachment: "已上传",
    driver: "厂内转运",
    date: "2026-05-27",
    task: "confirm",
    items: [
      ["钢支撑", "609x16x6000", "96", "96", "根", "C-02-01", "KC-ZC-2026-04", "5.4 吨", "送翻新区"],
      ["墩身标准节", "2.0m Q355", "28", "28", "节", "B-01-03", "KC-DS-RET-0526", "0 吨", "退库待检后翻新"],
    ],
  },
  {
    no: "CK-20260526-006",
    type: "报废",
    source: "BF-20260523-002",
    project: "科创中心备料",
    warehouse: "上海物料站",
    itemCount: 1,
    amount: "32 件 / 2.1 吨",
    weighing: "已过磅",
    confirm: "待确认",
    approval: "审批中",
    status: "待出库",
    attachment: "待上传",
    driver: "王强 / 沪D·77821",
    date: "2026-05-26",
    task: "pending",
    items: [
      ["旧模板边框", "废旧处置批", "32", "0", "件", "D-01-01", "BF-20260523-002", "0 吨", "待出库称重"],
    ],
  },
  {
    no: "CK-20260524-003",
    type: "退货",
    source: "CG-20260518-011",
    project: "汉江桥梁 2 标",
    warehouse: "上海物料站",
    itemCount: 2,
    amount: "58 件 / 1.6 吨",
    weighing: "已过磅",
    confirm: "已确认",
    approval: "负责人已确认",
    status: "已出库",
    attachment: "已归档",
    driver: "赵磊 / 沪B·901K2",
    date: "2026-05-24",
    task: "all",
    items: [
      ["连接销", "M30 加强型", "40", "40", "只", "A-04-02", "CG-20260518-011", "0.7 吨", ""],
      ["高强螺栓", "10.9 级 M24", "18", "18", "箱", "A-04-02", "CG-20260518-011", "0.9 吨", "供应商退货"],
    ],
  },
  {
    no: "CK-20260523-012",
    type: "退租",
    source: "TZ-20260522-004",
    project: "沪苏湖站房",
    warehouse: "华东项目虚拟仓",
    itemCount: 3,
    amount: "88 件 / 3.4 吨",
    weighing: "无需过磅",
    confirm: "驳回",
    approval: "确认驳回",
    status: "待出库",
    attachment: "待补充",
    driver: "项目自提",
    date: "2026-05-23",
    task: "confirm",
    items: [
      ["钢模板", "1500x3000x80", "28", "0", "块", "项目默认库区", "KC-GMB-0018", "0 吨", "退租换货出库"],
      ["连接销", "M30 加强型", "60", "0", "只", "项目默认库区", "TZ-20260522-004", "0 吨", ""],
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
      { id: "ZL018-01", name: "标准面板", spec: "1500×3000×6", dimension: "批次", ordered: 120, outbound: 32, unit: "块", slot: "A-02-03", code: "KC-GMB-202606-08" },
      { id: "ZL018-02", name: "钢支撑", spec: "609×16×6000", dimension: "批次", ordered: 64, outbound: 16, unit: "根", slot: "A-03-06", code: "KC-ZC-2026-06" },
      { id: "ZL018-03", name: "对拉杆", spec: "M24×1200", dimension: "数量", ordered: 360, outbound: 180, unit: "根", slot: "A-05-02", code: "KC-DLG-202606" },
    ],
  },
  {
    id: "ZL-20260608-011",
    type: "租赁订单",
    project: "汉江桥梁 2 标",
    warehouse: "上海物料站",
    status: "审批通过",
    materials: [
      { id: "ZL011-01", name: "贝雷片", spec: "321 型 3m Q345", dimension: "批次", ordered: 480, outbound: 0, unit: "片", slot: "A-01-01", code: "KC-BL-2026-05" },
      { id: "ZL011-02", name: "扣件", spec: "48 系列 十字", dimension: "数量", ordered: 640, outbound: 0, unit: "只", slot: "A-05-08", code: "FC-2026-05-017" },
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
  {
    id: "DB-20260605-003",
    type: "调拨订单",
    project: "沪苏湖站房",
    warehouse: "华东项目虚拟仓",
    status: "审批通过",
    materials: [
      { id: "DB003-01", name: "墩身标准节", spec: "2.0m Q355", dimension: "序列号", ordered: 28, outbound: 0, unit: "节", slot: "项目默认库区", code: "KC-DS-260501~260528" },
      { id: "DB003-02", name: "连接销", spec: "M30 加强型", dimension: "数量", ordered: 120, outbound: 40, unit: "只", slot: "项目默认库区", code: "DB-20260605-003" },
    ],
  },
];

let currentTask = "all";
let currentOrder = outboundOrders[0];
let activeSourceOrderId = "";
let selectedSourceMaterialIds = new Set();
const $ = (id) => document.getElementById(id);

const tagClass = {
  "已过磅": "tag-green",
  "待过磅": "tag-yellow",
  "无需过磅": "tag-gray",
  "已归档": "tag-green",
  "已上传": "tag-green",
  "已生成": "tag-blue",
  "待回传": "tag-yellow",
  "待上传": "tag-yellow",
  "待补充": "tag-yellow",
  "未生成": "tag-gray",
  "无需审批": "tag-gray",
  "审批通过": "tag-green",
  "审批中": "tag-orange",
  "待提交": "tag-yellow",
  "待确认": "tag-orange",
  "已确认": "tag-green",
  "驳回": "tag-red",
  "待出库": "tag-yellow",
  "部分出库": "tag-blue",
  "已出库": "tag-green",
  "已取消": "tag-red",
};

function tag(value) {
  return `<span class="tag ${tagClass[value] || "tag-gray"}">${value}</span>`;
}

function filteredOrders() {
  const no = $("noFilter").value.trim();
  const type = $("typeFilter").value;
  const source = $("sourceFilter").value.trim();
  const warehouse = $("warehouseFilter").value;
  const project = $("projectFilter").value;
  const confirm = $("confirmFilter").value;
  const status = $("statusFilter").value;
  const driver = $("driverFilter").value.trim();
  return outboundOrders.filter((order) => {
    const taskHit = currentTask === "all" || order.task === currentTask;
    return taskHit
      && (!no || order.no.includes(no))
      && (type === "全部" || order.type === type)
      && (!source || order.source.includes(source) || order.no.includes(source))
      && (warehouse === "全部" || order.warehouse === warehouse)
      && (project === "全部" || order.project === project)
      && (confirm === "全部" || order.confirm === confirm)
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
      <td title="${order.warehouse}">${order.warehouse}</td>
      <td title="${order.project}">${order.project}</td>
      <td>${order.itemCount}</td>
      <td>${tag(order.confirm)}</td>
      <td>${tag(order.status)}</td>
      <td>${tag(order.attachment)}</td>
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
      if (button.dataset.action === "handle") showHandle(false);
      if (button.dataset.action === "confirm") showDetail();
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

function renderItems(targetId, editable = false, print = false) {
  const rows = currentOrder.items.map((item, rowIndex) => {
    if (editable) {
      return `<tr>
        <td><input value="${item[0]}" readonly></td>
        <td><input value="${item[1]}" readonly></td>
        <td><input value="${item[2]}" readonly></td>
        <td><input class="outbound-qty" data-row="${rowIndex}" value="${item[3]}"></td>
        <td><input value="${item[4]}" readonly></td>
        <td><select data-field="slot" data-row="${rowIndex}"><option>${item[5]}</option><option>A-01-01</option><option>A-02-03</option><option>A-03-06</option><option>项目默认库区</option></select></td>
        <td><input data-field="code" data-row="${rowIndex}" value="${item[6]}"></td>
        <td><input data-field="weight" data-row="${rowIndex}" value="${item[7]}"></td>
        <td><input data-field="remark" data-row="${rowIndex}" value="${item[8]}"></td>
        <td><button type="button" class="remove-material" data-row="${rowIndex}">移除</button></td>
      </tr>`;
    }
    const values = print ? [item[0], item[1], item[3], item[4], item[5], item[6], item[7]] : item;
    return `<tr>${values.map((value) => `<td title="${value}">${value}</td>`).join("")}</tr>`;
  }).join("");
  $(targetId).innerHTML = rows;
  if (editable) bindEditableMaterialRows();
}

function bindEditableMaterialRows() {
  document.querySelectorAll(".outbound-qty").forEach((input) => {
    input.oninput = () => {
      const row = Number(input.dataset.row);
      const max = Number(currentOrder.items[row][2]) || 0;
      const value = Math.max(0, Math.min(Number(input.value) || 0, max));
      currentOrder.items[row][3] = String(value);
      if (input.value !== String(value)) input.value = String(value);
    };
  });
  document.querySelectorAll("[data-field]").forEach((control) => {
    control.onchange = () => {
      const indexMap = { slot: 5, code: 6, weight: 7, remark: 8 };
      currentOrder.items[Number(control.dataset.row)][indexMap[control.dataset.field]] = control.value;
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

function showDetail() {
  $("detailInfo").innerHTML = [
    ["出库单号", currentOrder.no],
    ["出库类型", currentOrder.type],
    ["来源单据", currentOrder.source],
    ["项目", currentOrder.project],
    ["仓库", currentOrder.warehouse],
    ["出库日期", currentOrder.date],
    ["物资项数", currentOrder.itemCount],
    ["数量/重量", currentOrder.amount],
    ["出库状态", currentOrder.status],
  ].map(([label, value]) => detailRow(label, value)).join("");
  $("transportInfo").innerHTML = [
    ["司机/车牌", currentOrder.driver],
    ["过磅状态", currentOrder.weighing],
    ["确认状态", currentOrder.confirm],
    ["附件状态", currentOrder.attachment],
    ["发起权限", "仓库业务操作角色"],
    ["确认权限", "仓库负责人"],
    ["项目确认", currentOrder.status === "已出库" ? "已确认" : "待确认"],
  ].map(([label, value]) => detailRow(label, value)).join("");
  renderItems("detailItems");
  $("approvalFlow").innerHTML = [
    ["创建出库单", "仓库人员创建，来源单据已关联"],
    [currentOrder.approval, `${currentOrder.type}出库当前确认状态：${currentOrder.confirm}`],
    [currentOrder.status, `出库执行状态：${currentOrder.status}`],
    [currentOrder.attachment, `附件状态：${currentOrder.attachment}`],
  ].map(([title, desc]) => `<li><strong>${title}</strong><span>${desc}</span></li>`).join("");
  switchView("detailView");
}

function showHandle(isCreate) {
  $("handleTitle").textContent = isCreate ? "新增出库" : "办理出库";
  if (isCreate) {
    currentOrder = { ...outboundOrders[0], no: "自动生成", status: "待出库", confirm: "待提交", attachment: "待上传", itemCount: 0, items: [] };
  } else {
    currentOrder = { ...currentOrder, items: currentOrder.items.map((item) => [...item]) };
  }
  $("handleType").value = currentOrder.type;
  $("handleProject").value = currentOrder.project;
  $("handleSource").value = currentOrder.source;
  $("handleWarehouse").value = currentOrder.warehouse;
  renderItems("handleItems", true);
  switchView("handleView");
}

function filteredSourceOrders() {
  const keyword = $("materialKeyword").value.trim().toLowerCase();
  const type = $("materialOrderType").value;
  return sourceOrderMaterials.filter((order) => {
    const materialHit = order.materials.some((material) => `${material.name}${material.spec}`.toLowerCase().includes(keyword));
    const keywordHit = !keyword || `${order.id}${order.project}`.toLowerCase().includes(keyword) || materialHit;
    return keywordHit && (type === "全部" || order.type === type);
  });
}

function visiblePickerMaterials() {
  const orders = filteredSourceOrders();
  const scopedOrders = activeSourceOrderId ? orders.filter((order) => order.id === activeSourceOrderId) : orders;
  const keyword = $("materialKeyword").value.trim().toLowerCase();
  return scopedOrders.flatMap((order) => order.materials
    .filter((material) => !keyword || `${order.id}${order.project}${material.name}${material.spec}`.toLowerCase().includes(keyword))
    .map((material) => ({ ...material, orderId: order.id, orderType: order.type, project: order.project, warehouse: order.warehouse })));
}

function renderOrderTree() {
  const orders = filteredSourceOrders();
  $("orderTreeCount").textContent = `${orders.length} 单`;
  const groups = ["租赁订单", "调拨订单"].map((type) => {
    const groupOrders = orders.filter((order) => order.type === type);
    if (!groupOrders.length) return "";
    return `<div class="tree-group">
      <button type="button" class="tree-group-title" data-tree-type="${type}">⌄ ${type}<span>${groupOrders.length}</span></button>
      ${groupOrders.map((order) => `<button type="button" class="tree-order ${activeSourceOrderId === order.id ? "active" : ""}" data-order-id="${order.id}">
        <strong>${order.id}</strong><span>${order.project} · ${order.materials.length} 项</span>
      </button>`).join("")}
    </div>`;
  }).join("");
  $("orderTree").innerHTML = `<div class="tree-group"><button type="button" class="tree-order ${activeSourceOrderId ? "" : "active"}" data-order-id=""><strong>全部已审批订单</strong><span>租赁订单与调拨订单</span></button></div>${groups}`;
  document.querySelectorAll(".tree-order").forEach((button) => {
    button.onclick = () => {
      activeSourceOrderId = button.dataset.orderId;
      renderOrderTree();
      renderMaterialPickerRows();
    };
  });
}

function renderMaterialPickerRows() {
  const materials = visiblePickerMaterials();
  const activeOrder = sourceOrderMaterials.find((order) => order.id === activeSourceOrderId);
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
  activeSourceOrderId = "";
  selectedSourceMaterialIds = new Set();
  $("materialKeyword").value = "";
  $("materialOrderType").value = "全部";
  renderOrderTree();
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
  const existingKeys = new Set(currentOrder.items.map((item) => `${item[0]}|${item[1]}|${item[6]}`));
  selected.forEach(({ order, ...material }) => {
    const available = Math.max(material.ordered - material.outbound, 0);
    const key = `${material.name}|${material.spec}|${material.code}`;
    if (!existingKeys.has(key)) {
      currentOrder.items.push([material.name, material.spec, String(available), String(available), material.unit, material.slot, material.code, "0 吨", `${order.type} ${order.id}`]);
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
    const businessType = onlyOrder.type === "租赁订单" ? "租赁" : "调拨";
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
  renderItems("handleItems", true);
  closeMaterialPicker();
}

function showPrint() {
  $("printNo").textContent = currentOrder.no;
  $("printInfo").innerHTML = [
    ["出库类型", currentOrder.type],
    ["来源单据", currentOrder.source],
    ["目标项目", currentOrder.project],
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
  ["typeFilter", "warehouseFilter", "projectFilter", "confirmFilter", "statusFilter"].forEach((id) => $(id).value = "全部");
  ["noFilter", "sourceFilter", "driverFilter"].forEach((id) => $(id).value = "");
  $("dateFilter").value = "2026-05-01 至 2026-05-29";
  renderList();
};
$("createBtn").onclick = () => showHandle(true);
$("batchHandleBtn").onclick = () => showHandle(false);
$("syncOrderBtn").onclick = () => alert("已同步审核通过的订单出库台账。");
$("exportBtn").onclick = () => alert("已按当前筛选条件生成出库单导出文件。");
$("detailHandleBtn").onclick = () => showHandle(false);
$("detailPrintBtn").onclick = showPrint;
$("previewConfirmBtn").onclick = showPrint;
$("saveDraftBtn").onclick = () => alert("草稿已保存。");
$("submitHandleBtn").onclick = () => alert("出库办理已提交。");
$("addLineBtn").onclick = openMaterialPicker;
$("closeMaterialPicker").onclick = closeMaterialPicker;
$("cancelMaterialPicker").onclick = closeMaterialPicker;
$("materialPickerMask").onclick = closeMaterialPicker;
$("queryMaterial").onclick = () => {
  activeSourceOrderId = "";
  renderOrderTree();
  renderMaterialPickerRows();
};
$("resetMaterialFilter").onclick = () => {
  $("materialKeyword").value = "";
  $("materialOrderType").value = "全部";
  activeSourceOrderId = "";
  renderOrderTree();
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

renderList();
