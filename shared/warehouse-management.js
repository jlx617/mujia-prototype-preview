const inventory = [
  { name: "贝雷片", spec: "321 型 3m Q345", state: "可用", warehouse: "上海物料站", project: "科创中心备料", area: "A 储存区", slot: "A-01-01", available: 1260, rented: 320, inspect: 18, refurbish: 0, code: "KC-BL-2026-05", time: "2026-05-27 16:20", unique: "否", category: "模架体系", confirm: "已确认", cost: "已维护" },
  { name: "钢模板", spec: "1500x3000x80", state: "在租", warehouse: "华东项目仓库", project: "汉江桥梁 2 标", area: "现场默认库区", slot: "X-02", available: 86, rented: 640, inspect: 42, refurbish: 12, code: "KC-GMB-0008", time: "2026-05-26 18:10", unique: "是", category: "模架体系", confirm: "已确认", cost: "已维护" },
  { name: "墩身标准节", spec: "2.0m Q355", state: "待检", warehouse: "上海物料站", project: "汉江桥梁 2 标", area: "B 待检区", slot: "B-01-03", available: 0, rented: 0, inspect: 76, refurbish: 0, code: "KC-DS-RET-0526", time: "2026-05-26 11:42", unique: "是", category: "集成工装", confirm: "待确认", cost: "已维护" },
  { name: "钢支撑", spec: "609x16x6000", state: "翻新中", warehouse: "上海物料站", project: "科创中心备料", area: "C 翻新区", slot: "C-02-01", available: 28, rented: 210, inspect: 0, refurbish: 96, code: "KC-ZC-2026-04", time: "2026-05-25 09:05", unique: "否", category: "模架体系", confirm: "处理中", cost: "缺失" },
  { name: "防护平台", spec: "4.5m 装配式", state: "在途", warehouse: "苏州装备中心", project: "沪苏湖站房", area: "调拨暂存", slot: "T-01", available: 0, rented: 0, inspect: 0, refurbish: 0, code: "DB-20260525-018", time: "2026-05-25 17:40", unique: "是", category: "集成工装", confirm: "待确认", cost: "已维护" },
  { name: "扣件", spec: "48 系列 十字", state: "一次性", warehouse: "上海物料站", project: "沪苏湖站房", area: "A 储存区", slot: "A-05-08", available: 4200, rented: 0, inspect: 0, refurbish: 0, code: "FC-2026-05-017", time: "2026-05-24 14:22", unique: "否", category: "低值辅材", confirm: "已确认", cost: "已维护" },
  { name: "旧模板边框", spec: "废旧处置批", state: "报废", warehouse: "上海物料站", project: "科创中心备料", area: "D 废品区", slot: "D-01-01", available: 0, rented: 0, inspect: 0, refurbish: 0, code: "BF-20260523-002", time: "2026-05-23 10:18", unique: "否", category: "模架体系", confirm: "审批中", cost: "已维护" },
  { name: "爬架导轨", spec: "6m 标准段", state: "可用", warehouse: "苏州装备中心", project: "科创中心备料", area: "A 储存区", slot: "A-03-06", available: 188, rented: 46, inspect: 8, refurbish: 4, code: "KC-PJ-2026-03", time: "2026-05-22 15:36", unique: "是", category: "集成工装", confirm: "已确认", cost: "已维护" },
];

const stateClass = {
  "可用": "available",
  "在租": "rented",
  "待检": "inspect",
  "翻新中": "refurbish",
  "在途": "transit",
  "报废": "scrap",
  "一次性": "oneuse",
};

let sortKey = "";
let asc = true;
let currentItem = inventory[0];
const $ = (id) => document.getElementById(id);

function showView(viewId) {
  document.querySelectorAll(".page-view").forEach((view) => view.classList.remove("active"));
  $(viewId).classList.add("active");
  location.hash = viewId.replace("View", "");
}

function filteredRows() {
  const values = {
    warehouse: $("warehouse").value,
    area: $("area").value,
    category: $("category").value,
    spec: $("spec").value.trim(),
    state: $("state").value,
    project: $("project").value,
    unique: $("unique").value,
    batch: $("batch").value.trim(),
  };
  let rows = inventory.filter((item) => {
    const keywordHit = !values.spec || item.name.includes(values.spec) || item.spec.includes(values.spec);
    const batchHit = !values.batch || item.code.includes(values.batch);
    return (values.warehouse === "全部" || item.warehouse === values.warehouse)
      && (values.area === "全部" || item.area === values.area)
      && (values.category === "全部" || item.category === values.category)
      && (values.state === "全部" || item.state === values.state)
      && (values.project === "全部" || item.project === values.project)
      && (values.unique === "全部" || item.unique === values.unique)
      && keywordHit && batchHit;
  });
  if (sortKey) {
    rows = [...rows].sort((a, b) => {
      if (sortKey === "time") return asc ? a.time.localeCompare(b.time) : b.time.localeCompare(a.time);
      return asc ? a[sortKey] - b[sortKey] : b[sortKey] - a[sortKey];
    });
  }
  return rows;
}

function render() {
  const rows = filteredRows();
  $("rows").innerHTML = rows.map((item, index) => `
    <tr>
      <td><input type="checkbox"></td>
      <td title="${item.name}">${item.name}</td>
      <td title="${item.spec}">${item.spec}</td>
      <td><span class="status ${stateClass[item.state]}">${item.state}</span></td>
      <td title="${item.warehouse} / ${item.project}">${item.warehouse} / ${item.project}</td>
      <td>${item.area} ${item.slot}</td>
      <td>${item.available.toLocaleString()}</td>
      <td>${item.rented.toLocaleString()}</td>
      <td>${item.inspect.toLocaleString()}</td>
      <td>${item.refurbish.toLocaleString()}</td>
      <td title="${item.code}">${item.code}</td>
      <td><span class="status ${item.confirm === "已确认" ? "available" : item.confirm === "审批中" ? "inspect" : "transit"}">${item.confirm}</span></td>
      <td><span class="status ${item.cost === "已维护" ? "available" : "scrap"}">${item.cost}</span></td>
      <td>${item.time}</td>
      <td><div class="row-actions"><button data-index="${index}" class="detail">查看</button><button data-index="${index}" class="row-out">出库</button><button data-index="${index}" class="row-count">盘点</button></div></td>
    </tr>
  `).join("");
  $("empty").classList.toggle("hidden", rows.length > 0);
  $("summary").textContent = `共${rows.length}条`;
  $("scopeText").textContent = `当前：${$("warehouse").value === "全部" ? "全部仓库" : $("warehouse").value}`;
  document.querySelectorAll(".detail").forEach((button) => button.onclick = () => openDetail(rows[Number(button.dataset.index)]));
  document.querySelectorAll(".row-out").forEach((button) => button.onclick = () => openEdit("outbound", rows[Number(button.dataset.index)]));
  document.querySelectorAll(".row-count").forEach((button) => button.onclick = () => openEdit("stocktake", rows[Number(button.dataset.index)]));
}

function openDetail(item) {
  currentItem = item || currentItem;
  $("detailTitle").textContent = `${currentItem.name}库存详情`;
  $("detailGrid").innerHTML = [
    ["物资名称", currentItem.name],
    ["规格型号", currentItem.spec],
    ["库存状态", currentItem.state],
    ["所在仓库", currentItem.warehouse],
    ["所属项目", currentItem.project],
    ["库区库位", `${currentItem.area} ${currentItem.slot}`],
    ["批次/编码", currentItem.code],
    ["管理方式", currentItem.unique === "是" ? "序列号" : "批次/数量"],
    ["确认状态", currentItem.confirm],
    ["成本状态", currentItem.cost],
  ].map(([label, value]) => `<div><span>${label}</span><b>${value}</b></div>`).join("");
  $("detailOverview").innerHTML = [
    ["可用数量", currentItem.available],
    ["在租数量", currentItem.rented],
    ["待检数量", currentItem.inspect],
    ["翻新中数量", currentItem.refurbish],
  ].map(([label, value]) => `<article><span>${label}</span><strong>${Number(value).toLocaleString()}</strong><em>${currentItem.name}</em></article>`).join("");
  const total = Math.max(currentItem.available + currentItem.rented + currentItem.inspect + currentItem.refurbish, 1);
  $("detailBars").innerHTML = [
    ["可用", currentItem.available],
    ["在租", currentItem.rented],
    ["待检", currentItem.inspect],
    ["翻新中", currentItem.refurbish],
  ].map(([label, value]) => `<div><span>${label}</span><b style="width:${Math.max((value / total) * 100, value ? 6 : 0)}%"></b><em>${value.toLocaleString()}</em></div>`).join("");
  $("locationDetail").innerHTML = `
    <div class="area-node"><div class="area-head">▾ ${currentItem.warehouse} / ${currentItem.area}</div>
    <div class="location-list"><div class="location-row"><span>${currentItem.slot}</span><span>${currentItem.state}</span><span>${currentItem.name}</span></div></div></div>
  `;
  $("timeline").innerHTML = [
    ["2026-03-18 入库", "采购/加工入库，生成库存记录"],
    ["2026-04-02 出库", `项目：${currentItem.project}`],
    ["2026-05-10 退库验收", `确认状态：${currentItem.confirm}`],
    [currentItem.time, `库存状态更新为：${currentItem.state}`],
  ].map(([title, desc]) => `<li><b>${title}</b><span>${desc}</span></li>`).join("");
  $("flowRows").innerHTML = [
    ["RK-20260318-004", "入库", "采购入库单", 120, "仓库业务操作角色", "已确认", "2026-03-18 10:20"],
    ["CK-20260402-011", "出库", "租赁订单", 64, "仓库业务操作角色", "已确认", "2026-04-02 15:36"],
    ["TK-20260510-006", "退库", "退库验收单", 18, "项目业务操作角色", currentItem.confirm, "2026-05-10 09:12"],
  ].map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("");
  showView("detailView");
}

function openEdit(type, item = currentItem) {
  currentItem = item || currentItem;
  const isOutbound = type === "outbound";
  $("editTitle").textContent = isOutbound ? "发起出库" : "发起盘点";
  $("editCrumb").textContent = `仓库业务 > 仓库管理 > ${isOutbound ? "发起出库" : "发起盘点"}`;
  $("editForm").innerHTML = isOutbound ? `
    <label>出库类型<select><option>租赁出库</option><option>调拨出库</option><option>翻新出库</option><option>报废出库</option></select></label>
    <label>目标项目/仓库<select><option>${currentItem.project}</option><option>汉江桥梁 2 标</option><option>沪苏湖站房</option></select></label>
    <label>发起人<input value="仓库业务操作角色"></label>
    <label>确认人<input value="仓库负责人"></label>
    <label>计划出库日期<input value="2026-06-04"></label>
    <label>确认状态<select><option>待提交</option><option>待确认</option><option>已确认</option></select></label>
  ` : `
    <label>盘点范围<select><option>${currentItem.warehouse} / ${currentItem.area}</option><option>当前仓库全部库区</option><option>当前筛选结果</option></select></label>
    <label>盘点方式<select><option>库位盘点</option><option>项目维度盘点</option><option>批次/编码盘点</option></select></label>
    <label>盘点人<input value="仓库业务操作角色"></label>
    <label>确认人<input value="仓库负责人"></label>
    <label>计划日期<input value="2026-06-04"></label>
    <label>盘点状态<select><option>待提交</option><option>盘点中</option><option>待确认</option></select></label>
  `;
  $("editRows").innerHTML = `
    <tr><td>${currentItem.name}</td><td>${currentItem.spec}</td><td>${currentItem.warehouse} / ${currentItem.project}</td><td>${currentItem.area} ${currentItem.slot}</td><td>${currentItem.code}</td><td>${isOutbound ? Math.min(currentItem.available || 1, 20) : currentItem.available + currentItem.rented + currentItem.inspect + currentItem.refurbish}</td><td>待提交</td></tr>
  `;
  showView("editView");
}

function openModal(type) {
  $("modalTitle").textContent = type === "flow" ? "库存流水" : "导出库存台账";
  $("modalBody").innerHTML = type === "flow" ? `
    <div class="mini-table"><div>RK-20260318-004 入库验收 / 上海物料站 / 数量 120</div><div>CK-20260402-011 租赁出库 / 汉江桥梁 2 标 / 数量 64</div><div>TK-20260510-006 退库验收 / B 待检区 / 数量 18</div></div>
  ` : `
    <div class="modal-grid">
      <label>导出维度<select><option>当前筛选结果</option><option>仓库维度</option><option>项目维度</option><option>批次/编码维度</option></select></label>
      <label>导出字段<select><option>库存基础字段</option><option>库存与成本字段</option><option>库存与确认状态</option></select></label>
    </div>
  `;
  $("mask").classList.remove("hidden");
  $("modal").classList.remove("hidden");
}

function closeModal() {
  $("mask").classList.add("hidden");
  $("modal").classList.add("hidden");
}

document.querySelectorAll("th[data-sort]").forEach((th) => {
  th.onclick = () => {
    const key = th.dataset.sort;
    asc = sortKey === key ? !asc : true;
    sortKey = key;
    render();
  };
});

$("query").onclick = render;
$("reset").onclick = () => {
  $("warehouse").value = "全部"; $("area").value = "全部"; $("category").value = "全部"; $("state").value = "全部"; $("project").value = "全部"; $("unique").value = "全部";
  $("spec").value = ""; $("batch").value = ""; $("error").classList.add("hidden"); render();
};
$("outbound").onclick = () => openEdit("outbound", filteredRows()[0] || inventory[0]);
$("stocktake").onclick = () => openEdit("stocktake", filteredRows()[0] || inventory[0]);
$("exportLedger").onclick = () => openModal("export");
$("flowEntry").onclick = () => openModal("flow");
$("detailBack").onclick = () => showView("listView");
$("detailOutbound").onclick = () => openEdit("outbound", currentItem);
$("editCancel").onclick = () => showView("listView");
$("editSave").onclick = () => showView("listView");
$("editSubmit").onclick = () => showView("listView");
$("closeModal").onclick = closeModal;
$("cancelModal").onclick = closeModal;
$("confirmModal").onclick = closeModal;
$("mask").onclick = closeModal;

if (location.hash === "#detail") openDetail(inventory[0]);
else if (location.hash === "#edit") openEdit("outbound", inventory[0]);
else showView("listView");
render();
