const metrics = [
  ["库存总量", "18,642", "可用 9,486 / 在租 5,218", "stock"],
  ["在租资产", "5,218", "较上月 +8.4%", "rent"],
  ["闲置资产", "2,086", "可优先调拨 1,204", "idle"],
  ["待检资产", "1,206", "退库待检 786", "inspect", "warning"],
  ["待翻新", "684", "审批待处理 18", "refurbish", "warning"],
  ["待报废", "226", "废旧处置待确认 9", "scrap", "danger"],
  ["当月出库", "1,342", "已确认 1,126", "outbound"],
  ["当月入库", "1,018", "待验收 124", "inbound"],
  ["资产利用率", "73.6%", "目标 78%", "analysis"],
];

const todoByRole = {
  "科创领导": [
    ["翻新审批", "FX-20260529-003，钢支撑 96 根", "待审批", "orange"],
    ["报废审批", "BF-20260528-009，旧模板边框 32 件", "审批中", "red"],
    ["采购确认", "CG-20260528-011，缺口采购 2 项", "待确认", "yellow"],
    ["成本口径缺失", "资产成本字段 14 项未补齐", "需处理", "red"],
  ],
  "仓库人员": [
    ["盘点差异", "上海物料站 A-02 区差异 6 项", "待复核", "orange"],
    ["翻新审批", "翻新出库单 CK-20260527-009", "待提交", "yellow"],
    ["采购确认", "到货验收单 RK-20260529-006", "待验收", "blue"],
    ["订单物资清单变更", "ZL-202605-018 新增钢支撑", "待配料", "green"],
  ],
  "商务人员": [
    ["成本口径缺失", "租赁订单 ZL-202605-018 缺成本", "需补充", "red"],
    ["订单物资清单变更", "汉江桥梁 2 标需求调整", "待确认", "orange"],
    ["采购确认", "CG-20260528-011 报价已回传", "待确认", "yellow"],
  ],
  "设计人员": [
    ["订单物资清单变更", "BOM KC-BOM-202605-018 规格替换", "待复核", "blue"],
    ["采购确认", "新生产物资清单 3 项", "待确认", "yellow"],
    ["成本口径缺失", "图纸版本与成本项未匹配", "待补充", "orange"],
  ],
};

const quickLinks = [
  ["BOM 清单", "设计带入"],
  ["租赁订单", "订单物资"],
  ["出库", "办理/打印"],
  ["入库", "验收/成本"],
  ["翻新", "任务审批"],
  ["废旧处置", "报废出库"],
  ["内部结算", "成本汇总"],
];

const exceptions = [
  ["超期未退", "ZL-202604-033", "苏州综合管廊二期", "已超 5 天", "red"],
  ["待检超时", "TK-20260520-006", "翻新待检仓", "超 48 小时", "orange"],
  ["库存不足", "对拉杆 M24*1200", "汉江桥梁 2 标", "缺口 180 根", "yellow"],
  ["成本字段缺失", "KC-DS-001-0086", "资产档案", "待补齐", "red"],
  ["同步失败", "WZGJ-REQ-202605024", "物资工匠", "待重试", "orange"],
];

const $ = (id) => document.getElementById(id);

function badge(text, cls) {
  return `<span class="badge ${cls || ""}">${text}</span>`;
}

function renderMetrics() {
  $("metricGrid").innerHTML = metrics.map(([name, value, desc, key, tone]) => `
    <article class="metric-card ${tone || ""}" data-key="${key}">
      <span>${name}</span>
      <strong>${value}</strong>
      <em>${desc}</em>
    </article>
  `).join("");
  document.querySelectorAll(".metric-card").forEach((card) => {
    card.onclick = () => alert(`将进入对应业务列表，并带入当前公司、仓库、项目和时间范围筛选。`);
  });
}

function renderTodos() {
  const role = $("roleSelect").value;
  const list = todoByRole[role] || [];
  $("todoScope").textContent = `${role}重点`;
  $("todoList").innerHTML = list.map((item) => `
    <button class="todo-item" type="button">
      <div><strong>${item[0]}</strong><span>${item[1]}</span></div>
      ${badge(item[2], item[3])}
    </button>
  `).join("");
  $("todoEmpty").classList.toggle("hidden", list.length > 0);
  document.querySelectorAll(".todo-item").forEach((button) => {
    button.onclick = () => alert("进入业务详情或审批确认页。");
  });
}

function renderQuickLinks() {
  $("quickGrid").innerHTML = quickLinks.map((item) => `<button type="button"><strong>${item[0]}</strong><span>${item[1]}</span></button>`).join("");
}

function renderCharts() {
  const trend = [["1月", 62], ["2月", 65], ["3月", 68], ["4月", 71], ["5月", 74], ["目标", 78]];
  $("lineChart").innerHTML = trend.map(([month, value]) => `<div class="line-point"><b style="height:${value * 1.8}px"></b><span>${month}</span><strong>${value}%</strong></div>`).join("");
  const stock = [["可用", 52], ["在租", 29], ["待检", 10], ["翻新中", 7], ["报废", 2]];
  $("stockBars").innerHTML = stock.map(([name, value]) => `<div class="bar-row"><span>${name}</span><b><i style="width:${value}%"></i></b><em>${value}%</em></div>`).join("");
  const ranks = [["贝雷片", 88], ["钢模板", 82], ["钢支撑", 74], ["防护平台", 69], ["扣件", 61]];
  $("rankList").innerHTML = ranks.map(([name, value]) => `<div class="rank-row"><span>${name}</span><b><i style="width:${value}%"></i></b><em>${value}%</em></div>`).join("");
}

function renderExceptions() {
  $("exceptionRows").innerHTML = exceptions.map((item) => `
    <tr>
      <td>${item[0]}</td>
      <td title="${item[1]}">${item[1]}</td>
      <td title="${item[2]}">${item[2]}</td>
      <td>${badge(item[3], item[4])}</td>
      <td><button class="link-btn">查看</button></td>
    </tr>
  `).join("");
}

function openRule() {
  $("mask").classList.remove("hidden");
  $("ruleModal").classList.remove("hidden");
}

function closeRule() {
  $("mask").classList.add("hidden");
  $("ruleModal").classList.add("hidden");
}

$("roleSelect").onchange = renderTodos;
$("refreshBtn").onclick = () => {
  $("loadingState").classList.remove("hidden");
  setTimeout(() => $("loadingState").classList.add("hidden"), 900);
};
$("exportBtn").onclick = () => alert("已按当前范围生成看板导出文件。");
$("analysisBtn").onclick = () => alert("进入库存/资产利用率分析，并继承当前筛选条件。");
$("ruleBtn").onclick = openRule;
$("closeRule").onclick = closeRule;
$("confirmRule").onclick = closeRule;
$("mask").onclick = closeRule;
$("emptyTodoBtn").onclick = () => {
  $("todoList").innerHTML = "";
  $("todoEmpty").classList.remove("hidden");
};
$("loadingBtn").onclick = () => $("refreshBtn").click();
$("permissionBtn").onclick = () => {
  $("exceptionRows").innerHTML = "";
  $("permissionState").classList.remove("hidden");
};

renderMetrics();
renderTodos();
renderQuickLinks();
renderCharts();
renderExceptions();
