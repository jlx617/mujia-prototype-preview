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

let currentTask = "all";
let currentOrder = inboundOrders[0];
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
  $(targetId).innerHTML = currentOrder.items.map((item) => {
    if (editable) {
      return `<tr>${item.map((value, index) => {
        if (index === 9) return `<td><input value="${value}" placeholder="备注"></td>`;
        if (index === 3) return `<td><input value="${value}" placeholder="批次/资产码"></td>`;
        if (index === 6) return `<td><input value="${value}" placeholder="成本"></td>`;
        return `<td><input value="${value}"></td>`;
      }).join("")}</tr>`;
    }
    return `<tr>${item.map((value) => `<td title="${value}">${value}</td>`).join("")}</tr>`;
  }).join("");
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
$("addLineBtn").onclick = () => {
  currentOrder.items.push(["", "", "数量", "自动生成", "0", "0", "0.00", "默认库区", "待上传", ""]);
  renderItems("handleItems", true);
};
document.querySelectorAll(".backBtn").forEach((button) => {
  button.onclick = () => {
    switchView("listView");
    renderList();
  };
});

renderList();
