const bomData = [
  {
    code: "KC-BOM-STD-018",
    name: "墩身标准模板 BOM",
    category: "墩身模板",
    version: "V2.0",
    items: 18,
    weight: "48.6 t",
    designer: "张工",
    status: "已确认",
    warehouse: "中心标准库",
    updated: "2026-06-01 16:20",
    source: "会议清单上传",
    tree: [["root", "总成", "18"], ["child", "标准节", "8"], ["leaf", "面板系统", "4"], ["leaf", "支撑系统", "3"], ["leaf", "紧固件", "1"], ["child", "调节节", "5"], ["child", "连接件", "5"]],
    versions: [["V2.0", "张工", "2026-06-01 16:20", "已确认", "中心主数据管理员"], ["V1.1", "张工", "2026-05-18 09:40", "已确认", "中心主数据管理员"], ["V1.0", "李工", "2026-04-22 14:12", "已确认", "中心主数据管理员"]],
    itemsList: [
      ["1", "墩身模板总成", "H=6m 标准段", "1", "套", "48.600 t", "标准清单项"],
      ["1.1", "标准面板", "1500*3000*6", "32", "块", "18.240 t", "含吊点预留"],
      ["1.2", "背楞组件", "10# 槽钢组合", "48", "件", "12.960 t", "按加工图复核"],
      ["1.3", "对拉杆", "M24*1200", "180", "根", "3.240 t", "按订单清单复核"],
      ["1.4", "连接螺栓", "M20*70", "640", "套", "1.120 t", "可从产品清单匹配"]
    ]
  },
  {
    code: "KC-BOM-STD-041",
    name: "标准墩身模板 BOM",
    category: "墩身模板",
    version: "V1.3",
    items: 22,
    weight: "52.3 t",
    designer: "李工",
    status: "已确认",
    warehouse: "中心标准库",
    updated: "2026-05-28 09:15",
    source: "线下确认清单",
    tree: [["root", "总成", "22"], ["child", "标准节", "8"], ["child", "面板系统", "9"], ["child", "支撑系统", "4"], ["child", "紧固件", "1"]],
    versions: [["V1.3", "李工", "2026-05-28 09:15", "已确认", "中心主数据管理员"], ["V1.2", "李工", "2026-05-20 10:20", "已确认", "中心主数据管理员"], ["V1.0", "李工", "2026-04-22 09:15", "已确认", "中心主数据管理员"]],
    itemsList: [
      ["1", "标准墩身模板", "通用 6m", "1", "套", "52.300 t", "可复制生成新版本"],
      ["1.1", "面板系统", "Q235B", "36", "块", "21.600 t", "标准件"],
      ["1.2", "支撑系统", "双槽钢", "52", "件", "16.120 t", "标准件"],
      ["1.3", "紧固件包", "M20/M24", "1", "批", "1.580 t", "按订单复核"]
    ]
  },
  {
    code: "KC-BOM-STD-021",
    name: "承台模板标准 BOM",
    category: "承台模板",
    version: "V1.0",
    items: 14,
    weight: "31.8 t",
    designer: "周工",
    status: "待确认",
    warehouse: "中心标准库",
    updated: "2026-06-01 11:42",
    source: "Excel 导入",
    tree: [["root", "总成", "14"], ["child", "标准节", "6"], ["child", "面板系统", "4"], ["child", "支撑系统", "3"], ["child", "紧固件", "1"]],
    versions: [["V1.0", "周工", "2026-06-01 11:42", "待确认", "-"]],
    itemsList: [
      ["1", "承台模板总成", "8.4m*6.2m", "1", "套", "31.800 t", "Excel 导入"],
      ["1.1", "承台侧模", "2100*3000", "24", "块", "14.400 t", "规格需复核"],
      ["1.2", "承台角模", "R200", "8", "块", "3.120 t", "结构节点"],
      ["1.3", "斜撑", "L=3200", "32", "根", "5.600 t", "订单带入后确认数量"]
    ]
  },
  {
    code: "KC-BOM-STD-009",
    name: "隧道台车标准 BOM",
    category: "隧道台车",
    version: "V0.9",
    items: 36,
    weight: "86.5 t",
    designer: "王工",
    status: "草稿",
    warehouse: "上海物料站",
    updated: "2026-05-29 14:08",
    source: "手工上传",
    tree: [["root", "总成", "36"], ["child", "标准节", "12"], ["child", "面板系统", "13"], ["child", "支撑系统", "7"], ["child", "紧固件", "4"]],
    versions: [["V0.9", "王工", "2026-05-29 14:08", "草稿", "-"]],
    itemsList: [
      ["1", "隧道台车", "12m 液压", "1", "套", "86.500 t", "草稿版本"],
      ["1.1", "门架主梁", "H588", "8", "件", "24.800 t", "需匹配产品清单"],
      ["1.2", "顶模", "12m", "6", "块", "18.400 t", "附件待补"],
      ["1.3", "液压泵站", "15kW", "2", "台", "1.900 t", "按标准规格维护"]
    ]
  },
  {
    code: "KC-BOM-STD-055",
    name: "造楼机标准 BOM",
    category: "造楼机",
    version: "V3.2",
    items: 58,
    weight: "142.7 t",
    designer: "李工",
    status: "已确认",
    warehouse: "中心标准库",
    updated: "2026-05-12 10:31",
    source: "会议清单上传",
    tree: [["root", "总成", "58"], ["child", "标准节", "18"], ["child", "面板系统", "16"], ["child", "支撑系统", "18"], ["child", "紧固件", "6"]],
    versions: [["V3.2", "李工", "2026-05-12 10:31", "已确认", "中心主数据管理员"], ["V3.1", "李工", "2026-04-18 15:30", "已确认", "中心主数据管理员"], ["V3.0", "张工", "2026-03-28 10:31", "已确认", "中心主数据管理员"]],
    itemsList: [
      ["1", "造楼机标准总成", "ZLJ-120", "1", "套", "142.700 t", "标准来源"],
      ["1.1", "主平台梁", "箱梁组合", "12", "件", "42.500 t", "可复制生成新版本"],
      ["1.2", "爬升导轨", "L=6000", "16", "根", "19.200 t", "按项目订单调整"],
      ["1.3", "防护网片", "1200*2400", "180", "片", "11.700 t", "订单清单确认"]
    ]
  },
  {
    code: "KC-BOM-STD-033",
    name: "液压系统标准 BOM",
    category: "液压系统",
    version: "V1.0",
    items: 11,
    weight: "9.4 t",
    designer: "张工",
    status: "停用",
    warehouse: "苏州装备中心",
    updated: "2026-05-02 08:52",
    source: "历史清单归档",
    tree: [["root", "总成", "11"], ["child", "标准节", "3"], ["child", "支撑系统", "5"], ["child", "紧固件", "3"]],
    versions: [["V1.0", "张工", "2026-05-02 08:52", "停用", "中心主数据管理员"]],
    itemsList: [
      ["1", "液压系统", "双泵站", "1", "套", "9.400 t", "历史版本"],
      ["1.1", "液压泵站", "22kW", "2", "台", "3.200 t", "停用记录"],
      ["1.2", "油缸", "125/90-800", "8", "支", "2.480 t", "历史数据"],
      ["1.3", "高压油管", "31.5MPa", "1", "批", "0.640 t", "历史数据"]
    ]
  }
];

const rows = document.querySelector("#bomRows");
const empty = document.querySelector("#empty");
const mask = document.querySelector("#mask");
const importModal = document.querySelector("#importModal");
const orderModal = document.querySelector("#orderModal");
const copyModal = document.querySelector("#copyModal");
let current = bomData[0];
let asc = true;

function statusClass(value) {
  if (value === "已确认") return "ok";
  if (value === "停用") return "stop";
  return "wait";
}

function sourceClass(value) {
  if (value.includes("Excel")) return "local";
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
      <td>${item.designer}</td>
      <td><span class="status ${statusClass(item.status)}">${item.status}</span></td>
      <td>${item.warehouse}</td>
      <td>${item.updated}</td>
      <td><span class="sync ${sourceClass(item.source)}">${item.source}</span></td>
      <td><div class="row-actions"><button class="link-btn view">查看</button><button class="link-btn copy">复制版本</button><button class="link-btn order">带入订单</button></div></td>
    </tr>
  `).join("");
  document.querySelector(".table-panel table").classList.toggle("hidden", list.length === 0);
  empty.classList.toggle("hidden", list.length !== 0);
  document.querySelector("#pageSummary").textContent = `共 ${list.length} 条`;
  document.querySelectorAll("#bomRows tr").forEach((tr) => {
    tr.addEventListener("click", (event) => {
      if (event.target.closest("button") || event.target.tagName === "INPUT") return;
      current = bomData[Number(tr.dataset.index)];
    });
  });
  document.querySelectorAll(".view").forEach((button) => button.addEventListener("click", (event) => {
    event.stopPropagation();
    current = bomData[Number(event.target.closest("tr").dataset.index)];
    renderDetail();
    showView("detailView");
  }));
  document.querySelectorAll(".copy").forEach((button) => button.addEventListener("click", (event) => {
    event.stopPropagation();
    current = bomData[Number(event.target.closest("tr").dataset.index)];
    openCopyModal();
  }));
  document.querySelectorAll(".order").forEach((button) => button.addEventListener("click", (event) => {
    event.stopPropagation();
    current = bomData[Number(event.target.closest("tr").dataset.index)];
    setOrderModal("从 BOM 创建订单", "租赁订单");
    openModal(orderModal);
  }));
}

function renderDetail() {
  document.querySelector("#detailHeading").textContent = `${current.name} ${current.version}`;
  document.querySelector("#basicFields").innerHTML = [
    ["BOM 编号", current.code],
    ["BOM 名称", current.name],
    ["适用品类", current.category],
    ["当前版本", current.version],
    ["设计人员", current.designer],
    ["确认状态", current.status],
    ["物料项数", current.items],
    ["预计重量", current.weight],
    ["维护仓库", current.warehouse],
    ["上传来源", current.source],
    ["更新时间", current.updated],
    ["权限范围", "中心主数据管理员 / 授权维护角色"]
  ].map((item) => `<div class="info-item"><span>${item[0]}</span><strong>${item[1]}</strong></div>`).join("");
  document.querySelector("#treeList").innerHTML = current.tree.map((node) => `<li class="${node[0]}">${node[1]} <span>${node[2]}</span></li>`).join("");
  document.querySelector("#itemRows").innerHTML = current.itemsList.map((row) => `
    <tr><td>${row[0]}</td><td title="${row[1]}">${row[1]}</td><td title="${row[2]}">${row[2]}</td><td>${row[3]}</td><td>${row[4]}</td><td>${row[5]}</td><td title="${row[6]}">${row[6]}</td></tr>
  `).join("");
  document.querySelector("#versionRows").innerHTML = current.versions.map((row) => `
    <tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td><td><span class="status ${statusClass(row[3])}">${row[3]}</span></td><td>${row[4]}</td><td><button class="link-btn">查看</button></td></tr>
  `).join("");
}

function filterRows() {
  const keyword = document.querySelector("#bomFilter").value.trim();
  const category = document.querySelector("#categoryFilter").value;
  const designer = document.querySelector("#designerFilter").value;
  const status = document.querySelector("#statusFilter").value;
  const warehouse = document.querySelector("#warehouseFilter").value;
  renderRows(bomData.filter((item) => {
    const hitKeyword = !keyword || item.name.includes(keyword) || item.code.includes(keyword);
    const hitCategory = category === "全部" || item.category === category;
    const hitDesigner = designer === "全部" || item.designer === designer;
    const hitStatus = status === "全部" || item.status === status;
    const hitWarehouse = warehouse === "全部可见" || item.warehouse === warehouse;
    return hitKeyword && hitCategory && hitDesigner && hitStatus && hitWarehouse;
  }));
}

function openEdit(mode) {
  document.querySelector("#editHeading").textContent = mode === "edit" ? "编辑 BOM" : "上传 BOM";
  document.querySelector("#editCrumb").textContent = mode === "edit" ? "编辑" : "上传";
  if (mode === "edit") {
    document.querySelector("#editCode").value = current.code;
    document.querySelector("#editName").value = current.name;
    document.querySelector("#editCategory").value = current.category;
    document.querySelector("#editVersion").value = current.version;
    document.querySelector("#editDesigner").value = current.designer;
    document.querySelector("#editStatus").value = current.status;
  }
  showView("editView");
}

function openModal(modal) {
  modal.classList.remove("hidden");
  mask.classList.remove("hidden");
}

function closeModals() {
  [importModal, orderModal, copyModal].forEach((modal) => modal.classList.add("hidden"));
  mask.classList.add("hidden");
}

function openCopyModal() {
  document.querySelector("#copySource").value = `${current.code} ${current.name} ${current.version}`;
  const versionNumber = Number(current.version.replace("V", "").split(".")[0]) || 1;
  document.querySelector("#copyVersion").value = `V${versionNumber + 1}.0`;
  openModal(copyModal);
}

function setOrderModal(title, type) {
  document.querySelector("#orderTitle").textContent = title;
  document.querySelector("#orderType").value = type;
  document.querySelector("#orderBom").value = `${current.code} ${current.name} ${current.version}`;
}

document.querySelector("#query").addEventListener("click", filterRows);
document.querySelector("#reset").addEventListener("click", () => {
  document.querySelector("#bomFilter").value = "";
  document.querySelector("#categoryFilter").value = "全部";
  document.querySelector("#designerFilter").value = "全部";
  document.querySelector("#statusFilter").value = "全部";
  document.querySelector("#warehouseFilter").value = "全部可见";
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
document.querySelector("#exportBom").addEventListener("click", () => {
  document.querySelector("#pageSummary").textContent = `共 ${bomData.length} 条，导出任务已创建`;
});
document.querySelector("#createRental").addEventListener("click", () => {
  setOrderModal("从 BOM 创建租赁订单", "租赁订单");
  openModal(orderModal);
});
document.querySelector("#createTransfer").addEventListener("click", () => {
  setOrderModal("从 BOM 创建调拨订单", "调拨订单");
  openModal(orderModal);
});
document.querySelector("#backFromDetail").addEventListener("click", () => showView("listView"));
document.querySelector("#detailEdit").addEventListener("click", () => openEdit("edit"));
document.querySelector("#detailAttachment").addEventListener("click", () => document.querySelector("#attachInfo").scrollIntoView({ behavior: "smooth" }));
document.querySelector("#detailHistory").addEventListener("click", () => document.querySelector("#versionInfo").scrollIntoView({ behavior: "smooth" }));
document.querySelector("#cancelEdit").addEventListener("click", () => showView("listView"));
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
