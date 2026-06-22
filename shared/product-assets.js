const products = [
  { code: "KC-MJ-DS-001", name: "墩身标准节 2.0m", category: "墩身标准节", parent: "模架体系", spec: "2000×1500×80", mode: "序列号", unit: "块", supplier: "武汉科创加工厂", attrs: "Q355 / 185kg", status: "启用", owner: "中心主数据管理员", cost: "一物一码", drawing: "已归档" },
  { code: "KC-MJ-CT-006", name: "承台侧模 A 型", category: "承台侧模", parent: "模架体系", spec: "3000×1200×90", mode: "序列号", unit: "块", supplier: "湖北桥建钢构", attrs: "Q355 / 拼装孔距150", status: "启用", owner: "中心主数据管理员", cost: "批次", drawing: "涉密受控" },
  { code: "KC-GZ-TC-002", name: "液压台车主梁", category: "台车主梁", parent: "集成工装", spec: "12m 组合梁", mode: "序列号", unit: "套", supplier: "中铁模板配套", attrs: "12m / 液压台车", status: "待确认", owner: "中心主数据管理员", cost: "人工指定", drawing: "已归档" },
  { code: "KC-SB-YY-014", name: "液压泵站 15kW", category: "液压泵站", parent: "大型设备", spec: "15kW/31.5MPa", mode: "序列号", unit: "台", supplier: "中铁模板配套", attrs: "31.5MPa / 15kW", status: "启用", owner: "中心主数据管理员", cost: "最新采购价", drawing: "待上传" },
  { code: "KC-FC-LS-021", name: "连接螺栓 M20", category: "连接件", parent: "低值辅材", spec: "M20×70 8.8级", mode: "数量", unit: "件", supplier: "本地辅材采购", attrs: "8.8级 / 镀锌", status: "启用", owner: "中心主数据管理员", cost: "采购均价", drawing: "缺失" },
  { code: "KC-MJ-PM-018", name: "平模通用板", category: "墩身标准节", parent: "模架体系", spec: "1500×1000×70", mode: "批次", unit: "块", supplier: "武汉科创加工厂", attrs: "Q235 / 通用板", status: "待确认", owner: "中心主数据管理员", cost: "待确认", drawing: "涉密受控" },
  { code: "KC-FC-MD-009", name: "木垫板", category: "木垫板", parent: "低值辅材", spec: "200×50×4000", mode: "批次", unit: "米", supplier: "本地辅材采购", attrs: "松木 / 防潮", status: "停用", owner: "中心主数据管理员", cost: "批次", drawing: "缺失" }
];

const instances = [
  ["KC-DS-001-0008", "一物一码", "科创中心仓", "A1-03-02", "1 块", "可用", "RK-20260318-004", "本地维护 / 未同步", "一物一码"],
  ["KC-DS-001-0042", "一物一码", "项目临时仓", "汉江桥 2 标", "1 块", "在租", "ZL-20260402-011", "来源系统 / 待确认", "一物一码"],
  ["KC-DS-001-0086", "一物一码", "翻新待检仓", "F2-01", "1 块", "待检", "TK-20260510-006", "同步异常", "翻新成本待确认"],
  ["FC-2026-04-017", "批次", "科创中心仓", "C3-12", "300 件", "可用", "RK-20260401-013", "本地维护 / 未同步", "批次"],
  ["FC-2026-04-018", "批次", "东区周转仓", "D1-08", "1800 件", "可用", "RK-20260413-021", "本地维护 / 未同步", "采购均价"]
];

const productRows = document.querySelector("#productRows");
const instanceRows = document.querySelector("#instanceRows");
const empty = document.querySelector("#empty");
const productTable = document.querySelector("#productTable");
const views = {
  list: document.querySelector("#listView"),
  detail: document.querySelector("#detailView"),
  edit: document.querySelector("#editView")
};
const mask = document.querySelector("#mask");
const modal = document.querySelector("#modal");
const editManageMode = document.querySelector("#editManageMode");
const identifierLabel = document.querySelector("#identifierLabel");
const identifierInput = document.querySelector("#identifierInput");
const editCategory = document.querySelector("#editCategory");
const specTrigger = document.querySelector("#specTrigger");
const specMenu = document.querySelector("#specMenu");
const specTags = document.querySelector("#specTags");
const formError = document.querySelector("#formError");
const specOptions = {
  pier: ["2000×1500×80", "1500×1000×70", "2000×1200×80", "调节节 500×1500×80"],
  cap: ["3000×1200×90", "2500×1200×90", "转角模 1200×1200", "异形侧模"],
  trolley: ["12m 组合梁", "9m 组合梁", "液压台车主梁", "台车横梁"],
  hydraulic: ["15kW/31.5MPa", "22kW/31.5MPa", "双泵 30kW", "便携式 7.5kW"],
  fastener: ["M20×70 8.8级", "M24×90 8.8级", "M16×60 8.8级", "对拉螺杆 Φ20"],
  timber: ["200×50×4000", "150×50×4000", "100×100×3000", "防潮木方"]
};
let selectedCategory = "全部";
let selectedSpecs = [];
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
  const options = specOptions[editCategory.value] || [];
  specTrigger.disabled = options.length === 0;
  specTrigger.textContent = options.length ? (selectedSpecs.length ? `已选择 ${selectedSpecs.length} 项` : "请选择规格型号") : "请先选择产品分类";
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
    });
  });
}

function updateIdentifierField(value = "") {
  const config = {
    serial: { label: "* 序列号规则", placeholder: "例如：KC-MJ-DS-{0000}", defaultValue: "KC-MJ-DS-{0000}" },
    batch: { label: "* 批次号规则", placeholder: "例如：KC-MJ-DS-{YYYYMM}-{000}", defaultValue: "KC-MJ-DS-{YYYYMM}-{000}" },
    quantity: { label: "* 产品编码", placeholder: "例如：KC-MJ-DS-001", defaultValue: "KC-MJ-DS-001" }
  }[editManageMode.value];
  identifierInput.disabled = !config;
  identifierLabel.textContent = config ? config.label : "* 识别规则";
  identifierInput.placeholder = config ? config.placeholder : "请先选择管理维度";
  identifierInput.value = config ? (value || config.defaultValue) : "";
}

function prepareEditForm(mode) {
  if (mode === "new") {
    editManageMode.value = "";
    editCategory.value = "";
    selectedSpecs = [];
    updateIdentifierField();
  } else {
    editManageMode.value = "serial";
    editCategory.value = "pier";
    selectedSpecs = ["2000×1500×80", "1500×1000×70"];
    updateIdentifierField("KC-MJ-DS-{0000}");
  }
  specMenu.classList.add("hidden");
  formError.classList.add("hidden");
  renderSpecOptions();
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
      <td title="${item.attrs}">${item.attrs}</td>
      <td><span class="status ${statusClass(item.status)}">${item.status}</span></td>
      <td>${item.owner}</td>
      <td><div class="row-actions"><button class="detail" data-code="${item.code}">查看</button><button class="edit" data-code="${item.code}">编辑</button><button>图纸</button></div></td>
    </tr>
  `).join("");
  productTable.classList.toggle("hidden", list.length === 0);
  empty.classList.toggle("hidden", list.length !== 0);
  document.querySelectorAll(".detail").forEach((button) => button.addEventListener("click", () => {
    document.querySelector("#detailCrumb").textContent = button.dataset.code;
    showView("detail");
  }));
  document.querySelectorAll(".edit").forEach((button) => button.addEventListener("click", () => {
    document.querySelector("#editTitle").textContent = "编辑产品";
    document.querySelector("#editCrumb").textContent = button.dataset.code;
    prepareEditForm("edit");
    showView("edit");
  }));
}

function renderInstances() {
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
  formError.classList.add("hidden");
  specMenu.classList.add("hidden");
  renderSpecOptions();
});
editManageMode.addEventListener("change", () => {
  formError.classList.add("hidden");
  updateIdentifierField();
});
specTrigger.addEventListener("click", () => {
  if (!specTrigger.disabled) specMenu.classList.toggle("hidden");
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".multi-select")) specMenu.classList.add("hidden");
});
document.querySelector("#backFromDetail").addEventListener("click", () => showView("list"));
document.querySelector("#cancelEdit").addEventListener("click", () => showView("list"));
document.querySelector("#saveEdit").addEventListener("click", () => showView("list"));
document.querySelector("#submitEdit").addEventListener("click", () => {
  if (!editManageMode.value || !identifierInput.value.trim() || !editCategory.value || selectedSpecs.length === 0) {
    formError.classList.remove("hidden");
    return;
  }
  formError.classList.add("hidden");
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
renderInstances();
prepareEditForm("edit");
showView(location.hash.replace("#", "") === "detail" || location.hash.replace("#", "") === "edit" ? location.hash.replace("#", "") : "list");
