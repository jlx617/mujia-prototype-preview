const products = [
  { code: "KC-MJ-DS-001", name: "墩身标准节 2.0m", category: "墩身标准节", parent: "模架体系", spec: "长度2000mm / 宽度1500mm / 厚度80mm / 材质Q355", mode: "序列号", unit: "块", supplier: "武汉科创加工厂", attrs: "Q355", status: "启用", owner: "中心主数据管理员", cost: "一物一码", drawing: "已归档" },
  { code: "KC-MJ-CT-006", name: "承台侧模 A 型", category: "承台侧模", parent: "模架体系", spec: "长度3000mm / 宽度1200mm / 厚度90mm / 型号A型", mode: "序列号", unit: "块", supplier: "湖北桥建钢构", attrs: "A型", status: "启用", owner: "中心主数据管理员", cost: "批次", drawing: "涉密受控" },
  { code: "KC-GZ-TC-002", name: "液压台车主梁", category: "台车主梁", parent: "集成工装", spec: "长度12m / 结构组合梁 / 型号加强型", mode: "序列号", unit: "套", supplier: "中铁模板配套", attrs: "加强型", status: "启用", owner: "中心主数据管理员", cost: "人工指定", drawing: "已归档" },
  { code: "KC-SB-YY-014", name: "液压泵站 15kW", category: "液压泵站", parent: "大型设备", spec: "功率15kW / 压力31.5MPa / 型号高压型", mode: "序列号", unit: "台", supplier: "中铁模板配套", attrs: "高压型", status: "启用", owner: "中心主数据管理员", cost: "最新采购价", drawing: "待上传" },
  { code: "KC-FC-LS-021", name: "连接螺栓 M20", category: "连接件", parent: "低值辅材", spec: "直径M20 / 长度70mm / 强度8.8级 / 表面镀锌", mode: "数量", unit: "件", supplier: "本地辅材采购", attrs: "8.8级", status: "启用", owner: "中心主数据管理员", cost: "采购均价", drawing: "缺失" },
  { code: "KC-MJ-PM-018", name: "平模通用板", category: "墩身标准节", parent: "模架体系", spec: "长度1500mm / 宽度1000mm / 厚度70mm / 材质Q235", mode: "批次", unit: "块", supplier: "武汉科创加工厂", attrs: "Q235", status: "启用", owner: "中心主数据管理员", cost: "待确认", drawing: "涉密受控" },
  { code: "KC-FC-MD-009", name: "木垫板", category: "木垫板", parent: "低值辅材", spec: "长度4000mm / 宽度200mm / 厚度50mm / 材质松木", mode: "批次", unit: "米", supplier: "本地辅材采购", attrs: "松木", status: "停用", owner: "中心主数据管理员", cost: "批次", drawing: "缺失" }
];

const instances = [
  ["KC-DS-001-0008", "一物一码", "科创中心仓", "A1-03-02", "1 块", "可用", "RK-20260318-004", "本地维护 / 未同步", "一物一码"],
  ["KC-DS-001-0042", "一物一码", "项目临时仓", "汉江桥 2 标", "1 块", "在租", "ZL-20260402-011", "来源系统 / 待确认", "一物一码"],
  ["KC-DS-001-0086", "一物一码", "翻新待检仓", "F2-01", "1 块", "待检", "TK-20260510-006", "同步异常", "翻新成本待确认"],
  ["FC-2026-04-017", "批次", "科创中心仓", "C3-12", "300 件", "可用", "RK-20260401-013", "本地维护 / 未同步", "批次"],
  ["FC-2026-04-018", "批次", "东区周转仓", "D1-08", "1800 件", "可用", "RK-20260413-021", "本地维护 / 未同步", "采购均价"]
];

const productRows = document.querySelector("#productRows");
const empty = document.querySelector("#empty");
const productTable = document.querySelector("#productTable");
const views = {
  list: document.querySelector("#listView"),
  detail: document.querySelector("#detailView"),
  edit: document.querySelector("#editView")
};
const mask = document.querySelector("#mask");
const modal = document.querySelector("#modal");
const editCategory = document.querySelector("#editCategory");
const commonUnit = document.querySelector("#commonUnit");
const commonManageMode = document.querySelector("#commonManageMode");
const commonSupplier = document.querySelector("#commonSupplier");
const specTrigger = document.querySelector("#specTrigger");
const specMenu = document.querySelector("#specMenu");
const specTags = document.querySelector("#specTags");
const modelTrigger = document.querySelector("#modelTrigger");
const modelMenu = document.querySelector("#modelMenu");
const modelTags = document.querySelector("#modelTags");
const skuRows = document.querySelector("#skuRows");
const skuEmpty = document.querySelector("#skuEmpty");
const skuTotal = document.querySelector("#skuTotal");
const formError = document.querySelector("#formError");
let editMode = "new";
const specOptions = {
  pier: {
    specs: ["2000×1500×80", "1500×1000×70", "2000×1200×80", "调节节 500×1500×80"],
    models: ["Q355", "Q235", "标准孔距150", "加强肋型"]
  },
  cap: {
    specs: ["3000×1200×90", "2500×1200×90", "转角模 1200×1200", "异形侧模"],
    models: ["A型", "B型", "Q355", "快拆型"]
  },
  trolley: {
    specs: ["12m 组合梁", "9m 组合梁", "液压台车主梁", "台车横梁"],
    models: ["标准型", "加强型", "右幅", "左幅"]
  },
  hydraulic: {
    specs: ["15kW/31.5MPa", "22kW/31.5MPa", "双泵 30kW", "便携式 7.5kW"],
    models: ["国产阀组", "进口阀组", "高压型", "低噪型"]
  },
  fastener: {
    specs: ["M20×70", "M24×90", "M16×60", "对拉螺杆 Φ20"],
    models: ["8.8级", "10.9级", "镀锌", "发黑"]
  },
  timber: {
    specs: ["200×50×4000", "150×50×4000", "100×100×3000", "防潮木方"],
    models: ["松木", "覆膜", "防潮", "加厚"]
  }
};
let selectedCategory = "全部";
let selectedSpecs = [];
let selectedModels = [];
let asc = true;

function statusClass(value) {
  if (value === "启用") return "ok";
  if (value === "停用") return "stop";
  return "wait";
}

function badgeClass(value) {
  if (value.includes("涉密") || value.includes("机密") || value.includes("秘密")) return "secure";
  if (value.includes("缺失") || value.includes("异常")) return "danger";
  if (value.includes("待") || value.includes("人工")) return "warn";
  return "ok";
}

function syncClass(value) {
  if (value.includes("异常")) return "error";
  if (value.includes("本地")) return "local";
  return "";
}

function showView(name) {
  Object.values(views).forEach((view) => view.classList.add("hidden"));
  views[name].classList.remove("hidden");
  window.scrollTo(0, 0);
  try {
    if (location.hash !== `#${name}`) history.replaceState(null, "", `#${name}`);
  } catch {
    location.hash = name;
  }
}

function categoryMatch(item) {
  if (selectedCategory === "全部") return true;
  return item.parent === selectedCategory || item.category === selectedCategory || item.name.includes(selectedCategory);
}

function renderSpecOptions() {
  const options = specOptions[editCategory.value]?.specs || [];
  specTrigger.disabled = options.length === 0;
  specTrigger.textContent = options.length ? (selectedSpecs.length ? `已选择 ${selectedSpecs.length} 项规格` : "请选择规格属性") : "请先选择产品分类";
  specMenu.innerHTML = options.map((option) => `
    <label><input type="checkbox" value="${option}" ${selectedSpecs.includes(option) ? "checked" : ""}>${option}</label>
  `).join("");
  specTags.innerHTML = selectedSpecs.map((option) => `<span>${option}</span>`).join("");
  specMenu.querySelectorAll("input").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      selectedSpecs = checkbox.checked
        ? [...selectedSpecs, checkbox.value]
        : selectedSpecs.filter((value) => value !== checkbox.value);
      renderSpecOptions();
      specMenu.classList.remove("hidden");
      renderSkuRows();
    });
  });
}

function renderModelOptions() {
  const options = specOptions[editCategory.value]?.models || [];
  modelTrigger.disabled = options.length === 0;
  modelTrigger.textContent = options.length ? (selectedModels.length ? `已选择 ${selectedModels.length} 项型号` : "请选择型号属性") : "请先选择产品分类";
  modelMenu.innerHTML = options.map((option) => `
    <label><input type="checkbox" value="${option}" ${selectedModels.includes(option) ? "checked" : ""}>${option}</label>
  `).join("");
  modelTags.innerHTML = selectedModels.map((option) => `<span>${option}</span>`).join("");
  modelMenu.querySelectorAll("input").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      selectedModels = checkbox.checked
        ? [...selectedModels, checkbox.value]
        : selectedModels.filter((value) => value !== checkbox.value);
      renderModelOptions();
      modelMenu.classList.remove("hidden");
      renderSkuRows();
    });
  });
}

function makeSkuCode(index) {
  const categoryCode = {
    pier: "MJ-DS",
    cap: "MJ-CT",
    trolley: "GZ-TC",
    hydraulic: "SB-YY",
    fastener: "FC-LJ",
    timber: "FC-MD"
  }[editCategory.value] || "CP";
  return `KC-${categoryCode}-${String(index + 1).padStart(3, "0")}`;
}

function categoryLabel() {
  return editCategory.options[editCategory.selectedIndex]?.text || "";
}

function currentRowsFromPreview() {
  return [...skuRows.querySelectorAll("tr")].map((row) => ({
    name: row.querySelector(".sku-name")?.value.trim() || "未命名产品",
    spec: row.dataset.spec,
    model: row.dataset.model
  }));
}

function renderSkuRows() {
  const rows = [];
  selectedSpecs.forEach((spec) => {
    selectedModels.forEach((model) => {
      rows.push({ spec, model });
    });
  });
  skuTotal.textContent = `共 ${rows.length} 条`;
  skuRows.innerHTML = rows.map((item, index) => `
    <tr data-spec="${item.spec}" data-model="${item.model}">
      <td>${index + 1}</td>
      <td><input class="sku-name" value="${categoryLabel().split(" / ").pop() || "未命名产品"} ${item.spec} ${item.model}" title="${categoryLabel()} ${item.spec} ${item.model}"></td>
      <td title="${item.spec}">${item.spec}</td>
      <td title="${item.model}">${item.model}</td>
      <td><span class="badge warn">待生成</span></td>
      <td><button class="sku-attach" type="button">上传</button></td>
      <td><div class="row-actions"><button class="danger remove-sku" type="button" data-index="${index}">移除</button></div></td>
    </tr>
  `).join("");
  skuEmpty.classList.toggle("hidden", rows.length !== 0);
  document.querySelectorAll(".remove-sku").forEach((button) => {
    button.addEventListener("click", () => {
      const rowIndex = Number(button.dataset.index);
      const target = rows[rowIndex];
      selectedSpecs = selectedSpecs.filter((value) => value !== target.spec || rows.some((row, index) => index !== rowIndex && row.spec === value));
      button.closest("tr").remove();
      skuTotal.textContent = `共 ${skuRows.querySelectorAll("tr").length} 条`;
      skuEmpty.classList.toggle("hidden", skuRows.querySelectorAll("tr").length !== 0);
    });
  });
}

function prepareEditForm(mode) {
  editMode = mode;
  document.querySelectorAll(".new-only").forEach((node) => node.classList.toggle("hidden", mode !== "new"));
  document.querySelectorAll(".edit-only").forEach((node) => node.classList.toggle("hidden", mode !== "edit"));
  if (mode === "new") {
    editCategory.value = "";
    selectedSpecs = [];
    selectedModels = [];
  } else {
    editCategory.value = "pier";
    selectedSpecs = ["2000×1500×80", "1500×1000×70"];
    selectedModels = ["Q355", "标准孔距150"];
  }
  specMenu.classList.add("hidden");
  modelMenu.classList.add("hidden");
  formError.classList.add("hidden");
  renderSpecOptions();
  renderModelOptions();
  renderSkuRows();
}

function prepareSingleEdit(item) {
  prepareEditForm("edit");
  const specModel = splitSpecModel(item);
  document.querySelector("#singleCode").value = item.code;
  document.querySelector("#singleName").value = item.name;
  document.querySelector("#singleCategory").value = `${item.parent} / ${item.category}`;
  document.querySelector("#singleSpec").value = specModel.spec;
  document.querySelector("#singleModel").value = specModel.model;
  document.querySelector("#singleUnit").value = item.unit;
  document.querySelector("#singleMode").value = item.mode;
  document.querySelector("#singleSupplier").value = item.supplier;
  document.querySelector("#singleStatus").value = item.status;
}

function splitSpecModel(item) {
  const [spec, ...modelParts] = item.spec.split(" ");
  return {
    spec: spec || item.spec,
  model: modelParts.join(" ") || item.attrs || "-"
  };
}

function prepareDetail(item) {
  const specModel = splitSpecModel(item);
  document.querySelector("#detailCrumb").textContent = item.code;
  document.querySelector("#detailCode").textContent = item.code;
  document.querySelector("#detailName").textContent = item.name;
  document.querySelector("#detailCategory").textContent = `${item.parent} / ${item.category}`;
  document.querySelector("#detailSpec").textContent = specModel.spec;
  document.querySelector("#detailModel").textContent = specModel.model;
  document.querySelector("#detailUnit").textContent = item.unit;
  document.querySelector("#detailMode").textContent = item.mode;
  document.querySelector("#detailSupplier").textContent = item.supplier;
  const status = document.querySelector("#detailStatus");
  status.textContent = item.status;
  status.className = `status ${statusClass(item.status)}`;
}

function syncSingleEditToList(code) {
  const item = products.find((product) => product.code === code);
  if (!item) return;
  item.name = document.querySelector("#singleName").value.trim() || item.name;
  item.supplier = document.querySelector("#singleSupplier").value.trim() || item.supplier;
  item.status = document.querySelector("#singleStatus").value;
  renderProducts(products);
}

function appendPreviewRowsToProducts() {
  const categoryText = categoryLabel();
  const categoryName = categoryText.split(" / ").pop() || "未分类";
  const parentName = categoryText.split(" / ")[0] || "未分类";
  const start = products.length;
  currentRowsFromPreview().forEach((row, index) => {
    products.unshift({
      code: makeSkuCode(start + index),
      name: row.name,
      category: categoryName,
      parent: parentName,
      spec: `${row.spec} ${row.model}`,
      mode: commonManageMode.value,
      unit: commonUnit.value,
      supplier: commonSupplier.value || "未填写",
      attrs: row.model,
      status: "启用",
      owner: "中心主数据管理员",
      cost: "",
      drawing: "待上传"
    });
  });
  selectedCategory = "全部";
  document.querySelectorAll(".tree-node").forEach((node) => node.classList.toggle("active", node.dataset.category === "全部"));
  renderProducts(products);
}

function renderProducts(list) {
  productRows.innerHTML = list.map((item, index) => `
    <tr>
      <td><input type="checkbox"></td>
      <td>${index + 1}</td>
      <td title="${item.code}">${item.code}</td>
      <td title="${item.name}">${item.name}</td>
      <td title="${item.spec}">${item.spec}</td>
      <td>${item.mode}</td>
      <td>${item.unit}</td>
      <td>${item.category}</td>
      <td title="${item.supplier}">${item.supplier}</td>
      <td><span class="status ${statusClass(item.status)}">${item.status}</span></td>
      <td>${item.owner}</td>
      <td><div class="row-actions"><button class="detail" data-code="${item.code}">查看</button><button class="edit" data-code="${item.code}">编辑</button><button>图纸</button></div></td>
    </tr>
  `).join("");
  productTable.classList.toggle("hidden", list.length === 0);
  empty.classList.toggle("hidden", list.length !== 0);
  document.querySelectorAll(".detail").forEach((button) => button.addEventListener("click", () => {
    const item = products.find((product) => product.code === button.dataset.code) || products[0];
    prepareDetail(item);
    showView("detail");
  }));
  document.querySelectorAll(".edit").forEach((button) => button.addEventListener("click", () => {
    const item = products.find((product) => product.code === button.dataset.code) || products[0];
    document.querySelector("#editTitle").textContent = "编辑产品";
    document.querySelector("#editCrumb").textContent = button.dataset.code;
    prepareSingleEdit(item);
    showView("edit");
  }));
}

function renderInstances() {
  const instanceRows = document.querySelector("#instanceRows");
  if (!instanceRows) return;
  instanceRows.innerHTML = instances.map((item) => `
    <tr>
      <td title="${item[0]}">${item[0]}</td>
      <td>${item[1]}</td>
      <td>${item[2]}</td>
      <td>${item[3]}</td>
      <td>${item[4]}</td>
      <td><span class="badge ${badgeClass(item[5])}">${item[5]}</span></td>
      <td title="${item[6]}">${item[6]}</td>
      <td><span class="sync ${syncClass(item[7])}">${item[7]}</span></td>
      <td><span class="badge ${badgeClass(item[8])}">${item[8]}</span></td>
      <td><div class="row-actions"><button>查看</button><button>标签</button></div></td>
    </tr>
  `).join("");
}

function filterRows() {
  const codeKeyword = document.querySelector("#codeKeyword").value.trim();
  const nameKeyword = document.querySelector("#nameKeyword").value.trim();
  const specKeyword = document.querySelector("#specKeyword").value.trim();
  const manageMode = document.querySelector("#manageMode").value;
  const state = document.querySelector("#state").value;
  const supplier = document.querySelector("#supplier").value;
  renderProducts(products.filter((item) => {
    const hitCode = !codeKeyword || item.code.includes(codeKeyword);
    const hitName = !nameKeyword || item.name.includes(nameKeyword);
    const hitSpec = !specKeyword || item.spec.includes(specKeyword);
    const hitMode = manageMode === "全部" || item.mode === manageMode;
    const hitState = state === "全部" || item.status === state;
    const hitSupplier = supplier === "全部" || item.supplier === supplier;
    return categoryMatch(item) && hitCode && hitName && hitSpec && hitMode && hitState && hitSupplier;
  }));
}

function openModal() {
  modal.classList.remove("hidden");
  mask.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  mask.classList.add("hidden");
}

document.querySelector("#search").addEventListener("click", filterRows);
document.querySelector("#reset").addEventListener("click", () => {
  ["#codeKeyword", "#nameKeyword", "#specKeyword", "#manageMode", "#state", "#supplier"].forEach((selector) => {
    const field = document.querySelector(selector);
    field.value = selector.includes("Keyword") ? "" : "全部";
  });
  selectedCategory = "全部";
  document.querySelectorAll(".tree-node").forEach((node) => node.classList.toggle("active", node.dataset.category === "全部"));
  renderProducts(products);
});
document.querySelectorAll(".tree-node").forEach((node) => {
  node.addEventListener("click", () => {
    selectedCategory = node.dataset.category;
    document.querySelectorAll(".tree-node").forEach((item) => item.classList.remove("active"));
    node.classList.add("active");
    filterRows();
  });
});
document.querySelector("#treeKeyword").addEventListener("input", (event) => {
  const value = event.target.value.trim();
  document.querySelectorAll(".tree-node").forEach((node) => {
    node.classList.toggle("hidden", !!value && !node.textContent.includes(value));
  });
});
document.querySelector("#addProduct").addEventListener("click", () => {
  document.querySelector("#editTitle").textContent = "新增产品";
  document.querySelector("#editCrumb").textContent = "新增产品";
  prepareEditForm("new");
  showView("edit");
});
editCategory.addEventListener("change", () => {
  selectedSpecs = [];
  selectedModels = [];
  formError.classList.add("hidden");
  specMenu.classList.add("hidden");
  modelMenu.classList.add("hidden");
  renderSpecOptions();
  renderModelOptions();
  renderSkuRows();
});
specTrigger.addEventListener("click", () => {
  if (!specTrigger.disabled) specMenu.classList.toggle("hidden");
});
modelTrigger.addEventListener("click", () => {
  if (!modelTrigger.disabled) modelMenu.classList.toggle("hidden");
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".multi-select")) {
    specMenu.classList.add("hidden");
    modelMenu.classList.add("hidden");
  }
});
document.querySelector("#backFromDetail").addEventListener("click", () => showView("list"));
document.querySelector("#cancelEdit").addEventListener("click", () => showView("list"));
document.querySelector("#saveEdit").addEventListener("click", () => {
  if (editMode === "edit") {
    syncSingleEditToList(document.querySelector("#singleCode").value);
    showView("list");
    return;
  }
  if (!editCategory.value || selectedSpecs.length === 0 || selectedModels.length === 0 || currentRowsFromPreview().length === 0) {
    formError.classList.remove("hidden");
    return;
  }
  formError.classList.add("hidden");
  appendPreviewRowsToProducts();
  showView("list");
});
document.querySelector("#importProduct").addEventListener("click", openModal);
document.querySelector("#closeModal").addEventListener("click", closeModal);
document.querySelector("#cancelImport").addEventListener("click", closeModal);
mask.addEventListener("click", closeModal);

document.querySelectorAll("th[data-sort]").forEach((th) => {
  th.addEventListener("click", () => {
    const current = products.filter(categoryMatch);
    renderProducts([...current].sort((a, b) => asc ? a.code.localeCompare(b.code, "zh-CN") : b.code.localeCompare(a.code, "zh-CN")));
    asc = !asc;
  });
});

renderProducts(products);
prepareEditForm("edit");
prepareDetail(products[0]);
showView(location.hash.replace("#", "") === "detail" || location.hash.replace("#", "") === "edit" ? location.hash.replace("#", "") : "list");
