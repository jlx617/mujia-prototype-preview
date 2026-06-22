const bomData = [
  {
    code: "KC-BOM-STD-018",
    name: "墩身模板标准 BOM",
    category: "墩身模板",
    version: "V2.0",
    items: 18,
    weight: "48.600 t",
    owner: "张工",
    status: "已确认",
    warehouse: "中心标准库",
    source: "在线创建",
    updated: "2026-06-01 16:20",
    versions: [
      ["V2.0", "复制版本", "张工", "已确认", "2026-06-01 16:20"],
      ["V1.1", "Excel 导入", "张工", "已确认", "2026-05-18 09:40"],
      ["V1.0", "在线创建", "李工", "已确认", "2026-04-22 14:12"]
    ],
    nodes: [
      { level: "1", depth: 1, type: "group", name: "墩身模板总成", spec: "H=6m 标准段", qty: "1", unit: "套", unitWeight: "", totalWeight: "48.600 t", remark: "分类组" },
      { level: "1.1", depth: 2, type: "group", name: "面板系统", spec: "Q235B", qty: "", unit: "", unitWeight: "", totalWeight: "18.240 t", remark: "分类组" },
      { level: "1.1.1", depth: 3, type: "product", name: "标准面板", spec: "1500*3000*6", qty: "32", unit: "块", unitWeight: "0.570 t", totalWeight: "18.240 t", remark: "产品清单" },
      { level: "1.2", depth: 2, type: "group", name: "支撑系统", spec: "槽钢组合", qty: "", unit: "", unitWeight: "", totalWeight: "12.960 t", remark: "分类组" },
      { level: "1.2.1", depth: 3, type: "product", name: "背楞组件", spec: "10# 槽钢组合", qty: "48", unit: "件", unitWeight: "0.270 t", totalWeight: "12.960 t", remark: "产品清单" },
      { level: "1.3", depth: 2, type: "group", name: "紧固件", spec: "M20/M24", qty: "", unit: "", unitWeight: "", totalWeight: "4.360 t", remark: "分类组" },
      { level: "1.3.1", depth: 3, type: "product", name: "对拉杆", spec: "M24*1200", qty: "180", unit: "根", unitWeight: "0.018 t", totalWeight: "3.240 t", remark: "产品清单" },
      { level: "1.3.2", depth: 3, type: "product", name: "连接螺栓", spec: "M20*70", qty: "640", unit: "套", unitWeight: "0.002 t", totalWeight: "1.120 t", remark: "产品清单" }
    ]
  },
  {
    code: "KC-BOM-STD-041",
    name: "承台模板标准 BOM",
    category: "承台模板",
    version: "V1.3",
    items: 22,
    weight: "52.300 t",
    owner: "李工",
    status: "已确认",
    warehouse: "中心标准库",
    source: "Excel 导入",
    updated: "2026-05-28 09:15",
    versions: [["V1.3", "Excel 导入", "李工", "已确认", "2026-05-28 09:15"], ["V1.2", "复制版本", "李工", "已确认", "2026-05-20 10:20"]],
    nodes: [
      { level: "1", depth: 1, type: "group", name: "承台模板总成", spec: "8.4m*6.2m", qty: "1", unit: "套", unitWeight: "", totalWeight: "52.300 t", remark: "分类组" },
      { level: "1.1", depth: 2, type: "product", name: "承台侧模", spec: "2100*3000", qty: "24", unit: "块", unitWeight: "0.600 t", totalWeight: "14.400 t", remark: "产品清单" },
      { level: "1.2", depth: 2, type: "product", name: "承台角模", spec: "R200", qty: "8", unit: "块", unitWeight: "0.390 t", totalWeight: "3.120 t", remark: "产品清单" }
    ]
  },
  {
    code: "KC-BOM-STD-009",
    name: "隧道台车标准 BOM",
    category: "隧道台车",
    version: "V0.9",
    items: 36,
    weight: "86.500 t",
    owner: "王工",
    status: "草稿",
    warehouse: "上海周转仓",
    source: "在线创建",
    updated: "2026-05-29 14:08",
    versions: [["V0.9", "在线创建", "王工", "草稿", "2026-05-29 14:08"]],
    nodes: [
      { level: "1", depth: 1, type: "group", name: "隧道台车总成", spec: "12m 液压", qty: "1", unit: "套", unitWeight: "", totalWeight: "86.500 t", remark: "分类组" },
      { level: "1.1", depth: 2, type: "product", name: "门架主梁", spec: "H588", qty: "8", unit: "件", unitWeight: "3.100 t", totalWeight: "24.800 t", remark: "产品清单" },
      { level: "1.2", depth: 2, type: "product", name: "顶模", spec: "12m", qty: "6", unit: "块", unitWeight: "3.067 t", totalWeight: "18.400 t", remark: "产品清单" }
    ]
  },
  {
    code: "KC-BOM-STD-055",
    name: "造楼机标准 BOM",
    category: "造楼机",
    version: "V3.2",
    items: 58,
    weight: "142.700 t",
    owner: "周工",
    status: "已确认",
    warehouse: "苏州装备仓",
    source: "复制版本",
    updated: "2026-05-12 10:31",
    versions: [["V3.2", "复制版本", "周工", "已确认", "2026-05-12 10:31"], ["V3.1", "Excel 导入", "李工", "已确认", "2026-04-18 15:30"]],
    nodes: [
      { level: "1", depth: 1, type: "group", name: "造楼机总成", spec: "ZLJ-120", qty: "1", unit: "套", unitWeight: "", totalWeight: "142.700 t", remark: "分类组" },
      { level: "1.1", depth: 2, type: "product", name: "主平台梁", spec: "箱梁组合", qty: "12", unit: "件", unitWeight: "3.542 t", totalWeight: "42.500 t", remark: "产品清单" },
      { level: "1.2", depth: 2, type: "product", name: "爬升导轨", spec: "L=6000", qty: "16", unit: "根", unitWeight: "1.200 t", totalWeight: "19.200 t", remark: "产品清单" }
    ]
  },
  {
    code: "KC-BOM-STD-033",
    name: "液压系统标准 BOM",
    category: "液压系统",
    version: "V1.0",
    items: 11,
    weight: "9.400 t",
    owner: "张工",
    status: "已停用",
    warehouse: "苏州装备仓",
    source: "Excel 导入",
    updated: "2026-05-02 08:52",
    versions: [["V1.0", "Excel 导入", "张工", "已停用", "2026-05-02 08:52"]],
    nodes: [
      { level: "1", depth: 1, type: "group", name: "液压系统总成", spec: "双泵站", qty: "1", unit: "套", unitWeight: "", totalWeight: "9.400 t", remark: "分类组" },
      { level: "1.1", depth: 2, type: "product", name: "液压泵站", spec: "22kW", qty: "2", unit: "台", unitWeight: "1.600 t", totalWeight: "3.200 t", remark: "产品清单" },
      { level: "1.2", depth: 2, type: "product", name: "油缸", spec: "125/90-800", qty: "8", unit: "支", unitWeight: "0.310 t", totalWeight: "2.480 t", remark: "产品清单" }
    ]
  }
];

const rows = document.querySelector("#bomRows");
const empty = document.querySelector("#empty");
const mask = document.querySelector("#mask");
const importModal = document.querySelector("#importModal");
const copyModal = document.querySelector("#copyModal");
const addNodeModal = document.querySelector("#addNodeModal");
let current = bomData[0];
let asc = true;
let collapsedLevels = new Set();

function statusClass(value) {
  if (value === "已确认") return "ok";
  if (value === "已停用") return "stop";
  return "wait";
}

function sourceClass(value) {
  if (value === "Excel 导入") return "import";
  if (value === "复制版本") return "copy";
  return "";
}

function showView(viewId) {
  document.querySelectorAll(".page-view").forEach((view) => view.classList.add("hidden"));
  document.querySelector(`#${viewId}`).classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "instant" });
}

function renderRows(list) {
  rows.innerHTML = list.map((item) => `
    <tr data-index="${bomData.indexOf(item)}">
      <td><input type="checkbox" /></td>
      <td title="${item.code}">${item.code}</td>
      <td title="${item.name}">${item.name}</td>
      <td>${item.category}</td>
      <td>${item.version}</td>
      <td>${item.items}</td>
      <td>${item.weight}</td>
      <td>${item.owner}</td>
      <td><span class="status ${statusClass(item.status)}">${item.status}</span></td>
      <td>${item.warehouse}</td>
      <td><span class="source ${sourceClass(item.source)}">${item.source}</span></td>
      <td>${item.updated}</td>
      <td><div class="row-actions"><button class="link-btn view">查看</button><button class="link-btn copy">复制版本</button></div></td>
    </tr>
  `).join("");
  document.querySelector(".table-panel table").classList.toggle("hidden", list.length === 0);
  empty.classList.toggle("hidden", list.length !== 0);
  document.querySelector("#pageSummary").textContent = `共 ${list.length} 条`;
  document.querySelectorAll(".view").forEach((button) => button.addEventListener("click", (event) => {
    current = bomData[Number(event.target.closest("tr").dataset.index)];
    collapsedLevels = new Set();
    renderDetail();
    showView("detailView");
  }));
  document.querySelectorAll(".copy").forEach((button) => button.addEventListener("click", (event) => {
    current = bomData[Number(event.target.closest("tr").dataset.index)];
    openCopyModal();
  }));
}

function hasChildren(node) {
  return current.nodes.some((item) => item.level.startsWith(`${node.level}.`) && item.depth === node.depth + 1);
}

function isHiddenByCollapse(node) {
  return [...collapsedLevels].some((level) => node.level.startsWith(`${level}.`));
}

function treeToggle(node) {
  if (!hasChildren(node)) return `<span class="tree-spacer"></span>`;
  const collapsed = collapsedLevels.has(node.level);
  return `<button class="tree-toggle" data-level="${node.level}" title="${collapsed ? "展开" : "收起"}">${collapsed ? "›" : "⌄"}</button>`;
}

function renderTreeRows(target, editable = false) {
  target.innerHTML = current.nodes.filter((node) => !isHiddenByCollapse(node)).map((node) => {
    const isGroup = node.type === "group";
    const name = `<div class="tree-name depth-${node.depth}">${treeToggle(node)}<span>${node.name}</span></div>`;
    const empty = isGroup ? "" : null;
    if (!editable) {
      return `<tr class="level-${node.depth} ${isGroup ? "group-row" : "product-row"}"><td>${node.level}</td><td title="${node.name}">${name}</td><td>${empty ?? node.spec}</td><td>${empty ?? node.qty}</td><td>${empty ?? node.unit}</td><td>${empty ?? node.unitWeight}</td><td>${empty ?? node.totalWeight}</td><td title="${empty ?? node.remark}">${empty ?? node.remark}</td></tr>`;
    }
    const operation = isGroup ? `<button class="link-btn add-child" data-level="${node.level}">新增下级</button>` : `<button class="link-btn">删除</button>`;
    const textInput = (value, disabled = false) => `<input value="${value}" ${disabled ? "disabled" : ""} />`;
    return `<tr class="level-${node.depth} ${isGroup ? "group-row" : "product-row"}">
      <td><input type="checkbox" /></td>
      <td>${node.level}</td>
      <td>${textInput(node.name)}</td>
      <td>${textInput(isGroup ? "" : node.spec, isGroup)}</td>
      <td>${textInput(isGroup ? "" : node.qty, isGroup)}</td>
      <td>${textInput(isGroup ? "" : node.unit, isGroup)}</td>
      <td>${textInput(isGroup ? "" : node.unitWeight, isGroup)}</td>
      <td>${textInput(isGroup ? "" : node.totalWeight, isGroup)}</td>
      <td>${textInput(isGroup ? "" : node.remark, isGroup)}</td>
      <td>${operation}</td>
    </tr>`;
  }).join("");
  target.querySelectorAll(".tree-toggle").forEach((button) => button.addEventListener("click", () => {
    const level = button.dataset.level;
    if (collapsedLevels.has(level)) collapsedLevels.delete(level);
    else collapsedLevels.add(level);
    renderTreeRows(target, editable);
  }));
  target.querySelectorAll(".add-child").forEach((button) => button.addEventListener("click", () => openAddNode("child")));
}

function renderDetail() {
  document.querySelector("#detailHeading").textContent = `${current.name} ${current.version}`;
  document.querySelector("#basicFields").innerHTML = [
    ["BOM 编号", current.code],
    ["BOM 名称", current.name],
    ["适用品类", current.category],
    ["当前版本", current.version],
    ["维护仓库", current.warehouse],
    ["维护人员", current.owner],
    ["版本状态", current.status],
    ["来源方式", current.source],
    ["产品项数", current.items],
    ["预计重量", current.weight],
    ["最近更新", current.updated],
    ["权限范围", "中心主数据管理员 / 仓库创建角色"]
  ].map((item) => `<div class="info-item"><span>${item[0]}</span><strong>${item[1]}</strong></div>`).join("");
  renderTreeRows(document.querySelector("#detailTreeRows"));
  document.querySelector("#versionRows").innerHTML = current.versions.map((row) => `
    <tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td><td><span class="status ${statusClass(row[3])}">${row[3]}</span></td><td>${row[4]}</td><td><button class="link-btn">查看</button></td></tr>
  `).join("");
}

function filterRows() {
  const keyword = document.querySelector("#bomFilter").value.trim();
  const category = document.querySelector("#categoryFilter").value;
  const owner = document.querySelector("#ownerFilter").value;
  const status = document.querySelector("#statusFilter").value;
  const warehouse = document.querySelector("#warehouseFilter").value;
  renderRows(bomData.filter((item) => {
    const hitKeyword = !keyword || item.name.includes(keyword) || item.code.includes(keyword);
    const hitCategory = category === "全部" || item.category === category;
    const hitOwner = owner === "全部" || item.owner === owner;
    const hitStatus = status === "全部" || item.status === status;
    const hitWarehouse = warehouse === "全部" || item.warehouse === warehouse;
    return hitKeyword && hitCategory && hitOwner && hitStatus && hitWarehouse;
  }));
}

function openEdit(mode) {
  collapsedLevels = new Set();
  document.querySelector("#editHeading").textContent = mode === "edit" ? "编辑 BOM" : "新增 BOM";
  document.querySelector("#editCrumb").textContent = mode === "edit" ? "编辑" : "新增";
  if (mode === "edit") {
    document.querySelector("#editCode").value = current.code;
    document.querySelector("#editName").value = current.name;
    document.querySelector("#editCategory").value = current.category;
    document.querySelector("#editVersion").value = current.version;
    document.querySelector("#editWarehouse").value = current.warehouse;
    document.querySelector("#editOwner").value = current.owner;
    document.querySelector("#editStatus").value = current.status;
    document.querySelector("#editSource").value = current.source;
  }
  renderTreeRows(document.querySelector("#editTreeRows"), true);
  showView("editView");
}

function openModal(modal) {
  modal.classList.remove("hidden");
  mask.classList.remove("hidden");
}

function closeModals() {
  [importModal, copyModal, addNodeModal].forEach((modal) => modal.classList.add("hidden"));
  mask.classList.add("hidden");
}

function openCopyModal() {
  document.querySelector("#copySource").value = `${current.code} ${current.name} ${current.version}`;
  const versionNumber = Number(current.version.replace("V", "").split(".")[0]) || 1;
  document.querySelector("#copyVersion").value = `V${versionNumber + 1}.0`;
  openModal(copyModal);
}

function openAddNode(type) {
  const titleMap = { root: "新增一级", child: "新增下级", product: "选择产品", bom: "选择 BOM 带入", group: "创建分类组" };
  const valueMap = { root: "创建分类组", child: "创建分类组", product: "选择产品清单已有产品", bom: "选择 BOM 清单已有 BOM", group: "创建分类组" };
  document.querySelector("#addNodeTitle").textContent = titleMap[type];
  document.querySelector("#nodeType").value = valueMap[type];
  openModal(addNodeModal);
}

document.querySelector("#query").addEventListener("click", filterRows);
document.querySelector("#reset").addEventListener("click", () => {
  document.querySelector("#bomFilter").value = "";
  document.querySelector("#categoryFilter").value = "全部";
  document.querySelector("#ownerFilter").value = "全部";
  document.querySelector("#statusFilter").value = "全部";
  document.querySelector("#warehouseFilter").value = "全部";
  renderRows(bomData);
});
document.querySelector("#newBom").addEventListener("click", () => openEdit("new"));
document.querySelector("#importBom").addEventListener("click", () => openModal(importModal));
document.querySelector("#editImport").addEventListener("click", () => openModal(importModal));
document.querySelector("#copyBom").addEventListener("click", openCopyModal);
document.querySelector("#confirmBom").addEventListener("click", () => {
  current.status = "已确认";
  renderRows(bomData);
});
document.querySelector("#backFromDetail").addEventListener("click", () => showView("listView"));
document.querySelector("#detailEdit").addEventListener("click", () => openEdit("edit"));
document.querySelector("#detailCopy").addEventListener("click", openCopyModal);
document.querySelector("#detailAttachment").addEventListener("click", () => document.querySelector("#attachInfo").scrollIntoView({ behavior: "smooth" }));
document.querySelector("#cancelEdit").addEventListener("click", () => showView("listView"));
document.querySelector("#addRoot").addEventListener("click", () => openAddNode("root"));
document.querySelector("#confirmAddNode").addEventListener("click", closeModals);
document.querySelectorAll(".closeModal").forEach((button) => button.addEventListener("click", closeModals));
mask.addEventListener("click", closeModals);
document.querySelectorAll("th[data-sort]").forEach((th) => {
  th.addEventListener("click", () => {
    const key = th.dataset.sort;
    const sorted = [...bomData].sort((a, b) => {
      const av = key === "items" ? a.items : key === "weight" ? Number(a.weight.replace(" t", "")) : a[key];
      const bv = key === "items" ? b.items : key === "weight" ? Number(b.weight.replace(" t", "")) : b[key];
      return asc ? String(av).localeCompare(String(bv), "zh-CN", { numeric: true }) : String(bv).localeCompare(String(av), "zh-CN", { numeric: true });
    });
    renderRows(sorted);
    asc = !asc;
  });
});

renderRows(bomData);
renderDetail();
