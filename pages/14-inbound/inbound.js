const inboundOrders = [
  {
    no: "RK-20260529-001",
    type: "采购",
    source: "CG-20260518-011",
    warehouse: "上海物料站",
    project: "汉江桥梁 2 标",
    supplier: "上海桥装装备有限公司",
    itemCount: 4,
    amount: "628 件 / 12.8 吨",
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
    type: "退租",
    source: "TK-20260528-003",
    warehouse: "上海物料站",
    project: "沪苏湖站房",
    supplier: "项目退库",
    itemCount: 3,
    amount: "216 件 / 8.4 吨",
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
    type: "翻新",
    source: "FX-20260526-006",
    warehouse: "上海物料站",
    project: "科创中心备料",
    supplier: "内部翻新班组",
    itemCount: 2,
    amount: "96 件 / 5.4 吨",
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
    itemCount: 2,
    amount: "102 件 / 4.6 吨",
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
    type: "新生产",
    source: "SC-20260520-002",
    warehouse: "上海物料站",
    project: "科创中心备料",
    supplier: "自有加工车间",
    itemCount: 1,
    amount: "24 件 / 9.6 吨",
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
    itemCount: 2,
    amount: "38 件 / 3.1 吨",
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
  "待提交": "tag-yellow",
  "待确认": "tag-orange",
  "已确认": "tag-green",
  "驳回": "tag-red",
  "待入库": "tag-yellow",
  "部分入库": "tag-blue",
  "已入库": "tag-green",
  "已退回": "tag-red",
};

function tag(value) {
  return `<span class="tag ${tagClass[value] || "tag-gray"}">${value}</span>`;
}

function filteredOrders() {
  const type = $("typeFilter").value;
  const no = $("noFilter").value.trim();
  const source = $("sourceFilter").value.trim();
  const warehouse = $("warehouseFilter").value;
  const project = $("projectFilter").value;
  const supplier = $("supplierFilter").value.trim();
  const accept = $("acceptFilter").value;
  const status = $("statusFilter").value;
  return inboundOrders.filter((order) => {
    const taskHit = currentTask === "all" || order.task === currentTask;
    return taskHit
      && (type === "全部" || order.type === type)
      && (!no || order.no.includes(no))
      && (!source || order.source.includes(source) || order.no.includes(source))
      && (warehouse === "全部" || order.warehouse === warehouse)
      && (project === "全部" || order.project === project)
      && (!supplier || order.supplier.includes(supplier))
      && (accept === "全部" || order.accept === accept)
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
      <td title="${order.warehouse}">${order.warehouse}</td>
      <td>${order.itemCount}</td>
      <td title="${order.amount}">${order.amount}</td>
      <td>${tag(order.cost)}</td>
      <td>${tag(order.accept)}</td>
      <td>${tag(order.confirm)}</td>
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

function renderItems(targetId, editable = false) {
  $(targetId).innerHTML = currentOrder.items.map((item, rowIndex) => {
    if (editable) {
      return `<tr>
        <td><input data-field="0" data-row="${rowIndex}" value="${item[0]}"></td>
        <td><input data-field="1" data-row="${rowIndex}" value="${item[1]}"></td>
        <td><select data-field="2" data-row="${rowIndex}"><option ${item[2] === "数量" ? "selected" : ""}>数量</option><option ${item[2] === "批次" ? "selected" : ""}>批次</option><option ${item[2] === "序列号" ? "selected" : ""}>序列号</option></select></td>
        <td><input data-field="3" data-row="${rowIndex}" value="${item[3]}" placeholder="批次/资产码"></td>
        <td><input data-field="4" data-row="${rowIndex}" value="${item[4]}"></td>
        <td><input data-field="5" data-row="${rowIndex}" value="${item[5]}"></td>
        <td><input data-field="6" data-row="${rowIndex}" value="${item[6]}" placeholder="成本"></td>
        <td><select data-field="7" data-row="${rowIndex}"><option>${item[7]}</option><option>默认库区</option><option>A-01-01</option><option>A-02-03</option><option>B-01-03</option></select></td>
        <td><input data-field="8" data-row="${rowIndex}" value="${item[8]}"></td>
        <td><input data-field="9" data-row="${rowIndex}" value="${item[9]}" placeholder="备注"></td>
        <td><button type="button" class="remove-material" data-row="${rowIndex}">移除</button></td>
      </tr>`;
    }
    return `<tr>${item.map((value) => `<td title="${value}">${value}</td>`).join("")}</tr>`;
  }).join("");
  if (editable) bindEditableRows();
}

function bindEditableRows() {
  document.querySelectorAll("#handleItems [data-field]").forEach((control) => {
    const update = () => {
      currentOrder.items[Number(control.dataset.row)][Number(control.dataset.field)] = control.value;
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
  $("detailInfo").innerHTML = [
    ["入库单号", currentOrder.no],
    ["入库类型", currentOrder.type],
    ["来源单据", currentOrder.source],
    ["项目", currentOrder.project],
    ["仓库", currentOrder.warehouse],
    ["供应商", currentOrder.supplier],
    ["入库日期", currentOrder.date],
    ["物资项数", currentOrder.itemCount],
    ["数量/重量", currentOrder.amount],
  ].map(([label, value]) => detailRow(label, value)).join("");
  $("acceptInfo").innerHTML = [
    ["成本状态", currentOrder.cost],
    ["验收状态", currentOrder.accept],
    ["确认状态", currentOrder.confirm],
    ["附件状态", currentOrder.attachment],
    ["入库状态", currentOrder.status],
    ["库存更新", currentOrder.confirm === "已确认" ? "已更新库存" : "确认后更新库存"],
    ["经办权限", "仓库业务操作角色"],
    ["确认权限", "仓库业务操作角色（确认）"],
  ].map(([label, value]) => detailRow(label, value)).join("");
  renderItems("detailItems");
  $("processFlow").innerHTML = [
    ["创建入库单", `来源：${currentOrder.source}，入库类型：${currentOrder.type}`],
    [currentOrder.accept, `验收状态：${currentOrder.accept}`],
    [currentOrder.cost, `成本状态：${currentOrder.cost}`],
    [currentOrder.confirm, `确认状态：${currentOrder.confirm}`],
    [currentOrder.status, `入库状态：${currentOrder.status}`],
  ].map(([title, desc]) => `<li><strong>${title}</strong><span>${desc}</span></li>`).join("");
  switchView("detailView");
}

function showHandle(title) {
  $("handleTitle").textContent = title;
  $("handleType").value = currentOrder.type;
  $("handleSource").value = currentOrder.source;
  $("handleWarehouse").value = currentOrder.warehouse;
  $("handleProject").value = currentOrder.project;
  $("handleSupplier").value = currentOrder.supplier;
  renderItems("handleItems", true);
  switchView("handleView");
}

function createInbound() {
  currentOrder = {
    ...inboundOrders[0],
    no: "自动生成",
    source: "",
    amount: "0 件 / 0 吨",
    itemCount: 1,
    accept: "待验收",
    cost: "待录入",
    confirm: "待提交",
    attachment: "待上传",
    status: "待入库",
    items: [["", "", "数量", "自动生成", "0", "0", "0.00", "默认库区", "待上传", ""]],
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
      <td title="${item.name}">${item.name}</td>
      <td title="${item.spec}">${item.spec}</td>
      <td>${item.dimension}</td>
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
      currentOrder.items.push([item.name, item.spec, item.dimension, item.code, String(returnable), "0", item.cost, "默认库区", "待上传", `来源出库单 ${record.no}`]);
      existingKeys.add(key);
    }
  });
  const sourceRecords = [...new Set(selected.map((item) => item.record.no))];
  const projects = [...new Set(selected.map((item) => item.record.project))];
  const types = [...new Set(selected.map((item) => item.record.type))];
  currentOrder.itemCount = currentOrder.items.length;
  currentOrder.source = sourceRecords.join("、");
  $("handleSource").value = currentOrder.source;
  if (projects.length === 1 && [...$("handleProject").options].some((option) => option.value === projects[0])) {
    currentOrder.project = projects[0];
    $("handleProject").value = projects[0];
  }
  if (types.length === 1) {
    const typeMap = { "租赁": "退租", "调拨": "调拨入库", "翻新": "翻新", "改制": "改制入库" };
    currentOrder.type = typeMap[types[0]];
    $("handleType").value = currentOrder.type;
  }
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
  ["typeFilter", "warehouseFilter", "projectFilter", "acceptFilter", "statusFilter"].forEach((id) => $(id).value = "全部");
  ["noFilter", "sourceFilter", "supplierFilter"].forEach((id) => $(id).value = "");
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
  currentOrder.items.push(["", "", "数量", "自动生成", "0", "0", "0.00", "默认库区", "待上传", ""]);
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
if (window.location.hash === "#handle") showHandle("办理入库");
