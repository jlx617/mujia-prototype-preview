const countTasks = [
  {
    no: "PD-20260529-001",
    warehouse: "上海物料站",
    scope: "A 储存区",
    scopeType: "库区",
    planDate: "2026-05-29",
    itemCount: 6,
    bookQty: 6280,
    actualQty: 6276,
    diffQty: -4,
    locked: "否",
    status: "待审批",
    approval: "待提交",
    user: "王立",
    start: "2026-05-29 09:00",
    diffStatus: "有差异",
    items: [
      ["贝雷片", "321 型 3m Q345", "KC-BL-2026-05", 1260, 1258, -2, "库存调整", "盘亏"],
      ["钢模板", "1500x3000x80", "KC-GMB-0008", 96, 96, 0, "无需处理", "无差异"],
      ["扣件", "48 系列 十字", "FC-2026-05-017", 4200, 4204, 4, "库存调整", "盘盈"],
      ["钢支撑", "609x16x6000", "KC-ZC-2026-04", 96, 94, -2, "转维修/翻新", "损坏"],
    ],
  },
  {
    no: "PD-20260528-006",
    warehouse: "苏州装备中心",
    scope: "项目退库待检区",
    scopeType: "库区",
    planDate: "2026-05-28",
    itemCount: 4,
    bookQty: 860,
    actualQty: 860,
    diffQty: 0,
    locked: "否",
    status: "已完成",
    approval: "已通过",
    user: "张婷",
    start: "2026-05-28 14:00",
    diffStatus: "无差异",
    items: [
      ["爬架导轨", "6m 标准段", "KC-PJ-2026-03", 188, 188, 0, "无需处理", "无差异"],
      ["防护平台", "4.5m 装配式", "DB-20260525-018", 42, 42, 0, "无需处理", "无差异"],
    ],
  },
  {
    no: "PD-20260527-003",
    warehouse: "华东项目虚拟仓",
    scope: "汉江桥梁 2 标",
    scopeType: "仓库",
    planDate: "2026-05-27",
    itemCount: 8,
    bookQty: 3180,
    actualQty: 3166,
    diffQty: -14,
    locked: "是",
    status: "待审批",
    approval: "审批中",
    user: "周明",
    start: "2026-05-27 10:30",
    diffStatus: "有差异",
    items: [
      ["墩身标准节", "2.0m Q355", "KC-DS-RET-0526", 76, 70, -6, "库位调整", "位置错误"],
      ["连接销", "M30 加强型", "CG-20260518-011", 240, 232, -8, "提交审批", "盘亏"],
      ["高强螺栓", "10.9 级 M24", "CG-20260518-011", 18, 18, 0, "无需处理", "无差异"],
    ],
  },
  {
    no: "PD-20260526-002",
    warehouse: "上海物料站",
    scope: "D 废品区",
    scopeType: "库区",
    planDate: "2026-05-26",
    itemCount: 3,
    bookQty: 226,
    actualQty: 219,
    diffQty: -7,
    locked: "否",
    status: "盘点中",
    approval: "待提交",
    user: "刘涛",
    start: "2026-05-26 16:00",
    diffStatus: "有差异",
    items: [
      ["旧模板边框", "废旧处置批", "BF-20260523-002", 32, 29, -3, "报废申请", "损坏"],
      ["旧钢支撑", "废旧处置批", "BF-20260523-003", 48, 44, -4, "库存调整", "盘亏"],
    ],
  },
  {
    no: "PD-20260525-001",
    warehouse: "上海物料站",
    scope: "C 翻新区",
    scopeType: "库区",
    planDate: "2026-05-30",
    itemCount: 5,
    bookQty: 684,
    actualQty: 0,
    diffQty: 0,
    locked: "否",
    status: "草稿",
    approval: "待提交",
    user: "王立",
    start: "2026-05-30 09:00",
    diffStatus: "有差异",
    items: [
      ["钢支撑", "609x16x6000", "KC-ZC-2026-04", 96, 0, -96, "待录入", "未录入"],
      ["贝雷片", "321 型 3m Q345", "KC-BL-2026-05", 120, 0, -120, "待录入", "未录入"],
    ],
  },
];

let currentTask = countTasks[0];
const $ = (id) => document.getElementById(id);

const tagClass = {
  "草稿": "tag-gray",
  "盘点中": "tag-blue",
  "待审批": "tag-orange",
  "已完成": "tag-green",
  "待提交": "tag-yellow",
  "审批中": "tag-orange",
  "已通过": "tag-green",
  "无差异": "tag-green",
  "有差异": "tag-orange",
};

function tag(value) {
  return `<span class="tag ${tagClass[value] || "tag-gray"}">${value}</span>`;
}

function filteredTasks() {
  const warehouse = $("warehouseFilter").value;
  const no = $("noFilter").value.trim();
  const scope = $("scopeFilter").value;
  const status = $("statusFilter").value;
  const user = $("userFilter").value;
  const diff = $("diffFilter").value;
  return countTasks.filter((task) => {
    return (warehouse === "全部" || task.warehouse === warehouse)
      && (!no || task.no.includes(no))
      && (scope === "全部" || task.scopeType === scope)
      && (status === "全部" || task.status === status)
      && (user === "全部" || task.user === user)
      && (diff === "全部" || task.diffStatus === diff);
  });
}

function renderList() {
  const rows = filteredTasks();
  $("countRows").innerHTML = rows.map((task, index) => `
    <tr>
      <td><input type="checkbox" aria-label="选择 ${task.no}"></td>
      <td title="${task.no}">${task.no}</td>
      <td title="${task.warehouse}">${task.warehouse}</td>
      <td title="${task.scope}">${task.scope}</td>
      <td>${task.planDate}</td>
      <td>${task.user}</td>
      <td>${task.bookQty.toLocaleString()}</td>
      <td>${task.actualQty.toLocaleString()}</td>
      <td>${task.diffQty}</td>
      <td>${tag(task.approval)}</td>
      <td>${tag(task.status)}</td>
      <td>
        <div class="row-actions">
          <button data-index="${index}" data-action="detail">查看</button>
          <button data-index="${index}" data-action="record">录入</button>
          <button data-index="${index}" data-action="diff">处理差异</button>
        </div>
      </td>
    </tr>
  `).join("");
  $("emptyState").classList.toggle("hidden", rows.length > 0);
  $("summaryText").textContent = `共${rows.length}条`;
  document.querySelectorAll(".row-actions button").forEach((button) => {
    button.onclick = () => {
      currentTask = rows[Number(button.dataset.index)];
      if (button.dataset.action === "detail") showDetail();
      if (button.dataset.action === "record") showRecord();
      if (button.dataset.action === "diff") showDiff();
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

function renderInfo(targetId, task) {
  $(targetId).innerHTML = [
    ["盘点单号", task.no],
    ["当前仓库", task.warehouse],
    ["盘点范围", task.scope],
    ["计划日期", task.planDate],
    ["盘点人", task.user],
    ["开始时间", task.start],
    ["是否锁库", task.locked],
    ["盘点状态", task.status],
    ["差异状态", task.diffStatus],
    ["审批状态", task.approval],
  ].map(([label, value]) => detailRow(label, value)).join("");
}

function renderReadonlyItems(targetId, task) {
  $(targetId).innerHTML = task.items.map((item) => `
    <tr>${item.map((value) => `<td title="${value}">${value}</td>`).join("")}</tr>
  `).join("");
}

function renderEditableItems(targetId, task, mode = "record") {
  $(targetId).innerHTML = task.items.map((item) => `
    <tr>
      <td><input value="${item[0]}"></td>
      <td><input value="${item[1]}"></td>
      <td><input value="${item[2]}"></td>
      <td><input value="${item[3]}"></td>
      <td><input value="${item[4]}"></td>
      <td><input value="${item[5]}"></td>
      <td>
        <select>
          ${["无需处理", "库存调整", "库位调整", "转维修/翻新", "报废申请", "提交审批", "待录入"].map((way) => `<option ${way === item[6] ? "selected" : ""}>${way}</option>`).join("")}
        </select>
      </td>
      <td>
        <select>
          ${["无差异", "盘盈", "盘亏", "位置错误", "损坏", "未录入"].map((memo) => `<option ${memo === item[7] ? "selected" : ""}>${memo}</option>`).join("")}
        </select>
      </td>
    </tr>
  `).join("");
  if (mode === "record") bindDiffInputs(targetId);
}

function bindDiffInputs(targetId) {
  document.querySelectorAll(`#${targetId} tr`).forEach((row) => {
    const cells = row.querySelectorAll("input");
    const calc = () => {
      const book = Number(cells[3].value || 0);
      const actual = Number(cells[4].value || 0);
      cells[5].value = actual - book;
    };
    cells[3].oninput = calc;
    cells[4].oninput = calc;
  });
}

function renderEditScopeItems() {
  $("editItems").innerHTML = [
    ["贝雷片", "321 型 3m Q345", "KC-BL-2026-05", "1260", "片", "按库位生成"],
    ["钢模板", "1500x3000x80", "KC-GMB-0008", "96", "块", "序列号抽盘"],
    ["扣件", "48 系列 十字", "FC-2026-05-017", "4200", "只", "批次盘点"],
  ].map((item) => `
    <tr>${item.map((value) => `<td><input value="${value}"></td>`).join("")}</tr>
  `).join("");
}

function showDetail() {
  renderInfo("detailInfo", currentTask);
  renderReadonlyItems("detailItems", currentTask);
  $("approvalFlow").innerHTML = [
    ["创建盘点任务", `${currentTask.user} 创建任务，范围：${currentTask.scope}`],
    ["盘点执行", `当前状态：${currentTask.status}，锁库：${currentTask.locked}`],
    ["结果提交", `差异状态：${currentTask.diffStatus}，差异数量：${currentTask.diffQty}`],
    ["审批更新库存", currentTask.approval],
  ].map(([title, desc]) => `<li><strong>${title}</strong><span>${desc}</span></li>`).join("");
  switchView("detailView");
}

function showCreate() {
  $("editTitle").textContent = "新建盘点";
  $("editNo").value = "自动生成";
  renderEditScopeItems();
  switchView("editView");
}

function showRecord() {
  renderInfo("recordInfo", currentTask);
  renderEditableItems("recordItems", currentTask, "record");
  switchView("recordView");
}

function showDiff() {
  renderInfo("diffInfo", currentTask);
  renderEditableItems("diffItems", currentTask, "diff");
  $("diffFlow").innerHTML = [
    ["生成差异", `账面 ${currentTask.bookQty.toLocaleString()}，实盘 ${currentTask.actualQty.toLocaleString()}，差异 ${currentTask.diffQty}`],
    ["差异登记", "记录盘盈、盘亏、位置错误、损坏等原因"],
    ["处理方式", "库存调整、库位调整、转维修/翻新、报废申请或提交审批"],
  ].map(([title, desc]) => `<li><strong>${title}</strong><span>${desc}</span></li>`).join("");
  switchView("diffView");
}

function toast(message) {
  const old = document.querySelector(".toast");
  if (old) old.remove();
  const node = document.createElement("div");
  node.className = "toast";
  node.textContent = message;
  document.body.appendChild(node);
  setTimeout(() => node.remove(), 2200);
}

$("queryBtn").onclick = renderList;
$("resetBtn").onclick = () => {
  ["warehouseFilter", "scopeFilter", "statusFilter", "userFilter", "diffFilter"].forEach((id) => $(id).value = "全部");
  $("noFilter").value = "";
  $("dateFilter").value = "2026-05-01 至 2026-05-29";
  renderList();
};
$("createBtn").onclick = showCreate;
$("exportBtn").onclick = () => toast("已按当前筛选条件生成盘点清单。");
$("detailExportBtn").onclick = () => toast("已生成当前盘点清单。");
$("exportResultBtn").onclick = () => toast("已按当前筛选条件生成盘点结果。");
$("importBtn").onclick = () => {
  currentTask = countTasks[0];
  showRecord();
};
$("detailRecordBtn").onclick = showRecord;
$("saveDraftBtn").onclick = () => toast("盘点任务草稿已保存。");
$("submitCreateBtn").onclick = () => toast("盘点任务已提交。");
$("recordDraftBtn").onclick = () => toast("盘点结果已保存。");
$("submitRecordBtn").onclick = () => toast("盘点结果已提交审批。");
$("autoCalcBtn").onclick = () => {
  document.querySelectorAll("#recordItems tr").forEach((row) => {
    const cells = row.querySelectorAll("input");
    cells[5].value = Number(cells[4].value || 0) - Number(cells[3].value || 0);
  });
  toast("差异数量已重新计算。");
};
$("diffSaveBtn").onclick = () => toast("差异处理已保存。");
$("diffSubmitBtn").onclick = () => toast("差异处理已提交审批。");
$("addItemBtn").onclick = () => {
  $("editItems").insertAdjacentHTML("beforeend", `
    <tr>
      <td><input placeholder="产品"></td>
      <td><input placeholder="规格"></td>
      <td><input placeholder="批次/资产码"></td>
      <td><input value="0"></td>
      <td><input value="件"></td>
      <td><input placeholder="备注"></td>
    </tr>
  `);
};
$("appendDiffBtn").onclick = () => {
  $("diffItems").insertAdjacentHTML("beforeend", `
    <tr>
      <td><input placeholder="产品"></td>
      <td><input placeholder="规格"></td>
      <td><input placeholder="批次/资产码"></td>
      <td><input value="0"></td>
      <td><input value="0"></td>
      <td><input value="0"></td>
      <td><select><option>库存调整</option><option>库位调整</option><option>转维修/翻新</option><option>报废申请</option><option>提交审批</option></select></td>
      <td><select><option>盘盈</option><option>盘亏</option><option>位置错误</option><option>损坏</option></select></td>
    </tr>
  `);
};
document.querySelectorAll(".backBtn").forEach((button) => {
  button.onclick = () => {
    switchView("listView");
    renderList();
  };
});

const initialHash = window.location.hash.replace("#", "");
if (initialHash === "detail") showDetail();
else if (initialHash === "edit") showCreate();
else if (initialHash === "record") showRecord();
else if (initialHash === "diff") showDiff();
else renderList();
