const categories = [
  { id: "MJ", code: "MJ", name: "模架体系", parentId: "", level: 1, productCount: 0, state: "启用", owner: "中心主数据管理员", sort: 10, expanded: true },
  { id: "MJ-DS", code: "MJ-DS", name: "墩身", parentId: "MJ", level: 2, productCount: 20, state: "启用", owner: "中心主数据管理员", sort: 10, expanded: true },
  { id: "MJ-DS-001", code: "MJ-DS-001", name: "墩身标准节", parentId: "MJ-DS", level: 3, productCount: 12, state: "启用", owner: "中心主数据管理员", sort: 10, expanded: true },
  { id: "MJ-DS-002", code: "MJ-DS-002", name: "墩身调节节", parentId: "MJ-DS", level: 3, productCount: 8, state: "启用", owner: "中心主数据管理员", sort: 20, expanded: true },
  { id: "MJ-CT", code: "MJ-CT", name: "承台", parentId: "MJ", level: 2, productCount: 5, state: "启用", owner: "中心主数据管理员", sort: 20, expanded: true },
  { id: "MJ-CT-001", code: "MJ-CT-001", name: "承台模板", parentId: "MJ-CT", level: 3, productCount: 5, state: "启用", owner: "中心主数据管理员", sort: 10, expanded: true },
  { id: "MJ-XL", code: "MJ-XL", name: "系梁", parentId: "MJ", level: 2, productCount: 0, state: "启用", owner: "中心主数据管理员", sort: 30, expanded: true },
  { id: "MJ-XL-001", code: "MJ-XL-001", name: "系梁侧模", parentId: "MJ-XL", level: 3, productCount: 0, state: "禁用", owner: "中心主数据管理员", sort: 10, expanded: true },
  { id: "MJ-PM", code: "MJ-PM", name: "平模", parentId: "MJ", level: 2, productCount: 15, state: "启用", owner: "中心主数据管理员", sort: 40, expanded: true },
  { id: "MJ-PM-001", code: "MJ-PM-001", name: "平模通用板", parentId: "MJ-PM", level: 3, productCount: 15, state: "启用", owner: "中心主数据管理员", sort: 10, expanded: true },
  { id: "GZ", code: "GZ", name: "集成工装", parentId: "", level: 1, productCount: 10, state: "启用", owner: "中心主数据管理员", sort: 20, expanded: true },
  { id: "GZ-ZLJ", code: "GZ-ZLJ", name: "造楼机", parentId: "GZ", level: 2, productCount: 3, state: "启用", owner: "中心主数据管理员", sort: 10, expanded: true },
  { id: "GZ-ZLJ-001", code: "GZ-ZLJ-001", name: "造楼机主平台", parentId: "GZ-ZLJ", level: 3, productCount: 3, state: "启用", owner: "中心主数据管理员", sort: 10, expanded: true },
  { id: "GZ-TC", code: "GZ-TC", name: "台车", parentId: "GZ", level: 2, productCount: 7, state: "启用", owner: "中心主数据管理员", sort: 20, expanded: true },
  { id: "GZ-TC-001", code: "GZ-TC-001", name: "隧道台车", parentId: "GZ-TC", level: 3, productCount: 7, state: "启用", owner: "中心主数据管理员", sort: 10, expanded: true },
  { id: "GZ-TC-002", code: "GZ-TC-002", name: "液压台车", parentId: "GZ-TC", level: 3, productCount: 0, state: "禁用", owner: "中心主数据管理员", sort: 20, expanded: true },
  { id: "SB", code: "SB", name: "大型设备", parentId: "", level: 1, productCount: 4, state: "启用", owner: "中心主数据管理员", sort: 30, expanded: true },
  { id: "SB-YY", code: "SB-YY", name: "液压系统", parentId: "SB", level: 2, productCount: 4, state: "启用", owner: "中心主数据管理员", sort: 10, expanded: true },
  { id: "SB-YY-001", code: "SB-YY-001", name: "液压泵站", parentId: "SB-YY", level: 3, productCount: 4, state: "启用", owner: "中心主数据管理员", sort: 10, expanded: true }
];

let currentRows = [];
let editingParentId = "";
let editingCategoryId = "";
let editingSpecs = [];

const specificationTemplates = {
  "MJ-DS": [
    { name: "截面尺寸", required: true, searchable: true, models: [{ name: "1.8m×1.8m", required: false, searchable: true }, { name: "2.0m×2.0m", required: false, searchable: true }, { name: "2.2m×2.2m", required: false, searchable: true }] },
    { name: "标准高度", required: false, searchable: true, models: [{ name: "1.0m", required: false, searchable: true }, { name: "1.5m", required: false, searchable: true }, { name: "2.0m", required: false, searchable: true }] }
  ],
  "MJ-DS-001": [
    { name: "截面尺寸", required: true, searchable: true, models: [{ name: "1.8m×1.8m", required: false, searchable: true }, { name: "2.0m×2.0m", required: false, searchable: true }] },
    { name: "板高", required: true, searchable: false, models: [{ name: "1.5m", required: false, searchable: false }, { name: "2.0m", required: false, searchable: false }] }
  ],
  "GZ-TC": [
    { name: "适用断面", required: true, searchable: true, models: [{ name: "6m", required: false, searchable: true }, { name: "9m", required: false, searchable: true }, { name: "12m", required: false, searchable: true }] },
    { name: "驱动方式", required: false, searchable: true, models: [{ name: "液压", required: false, searchable: true }, { name: "机械", required: false, searchable: true }] }
  ],
  "SB-YY": [
    { name: "额定压力", required: true, searchable: true, models: [{ name: "16MPa", required: false, searchable: true }, { name: "25MPa", required: false, searchable: true }, { name: "31.5MPa", required: false, searchable: true }] }
  ]
};

const listView = document.querySelector("#listView");
const editView = document.querySelector("#editView");
const rows = document.querySelector("#rows");
const emptyState = document.querySelector("#emptyState");
const totalText = document.querySelector("#totalText");
const mask = document.querySelector("#mask");
const batchAddModal = document.querySelector("#batchAddModal");
const confirmModal = document.querySelector("#confirmModal");
const errorModal = document.querySelector("#errorModal");
const specList = document.querySelector("#specList");
const specEmpty = document.querySelector("#specEmpty");
const specReadonly = document.querySelector("#specReadonly");
const addSpecBtn = document.querySelector("#addSpecBtn");

function childrenOf(parentId) {
  return categories
    .filter((item) => item.parentId === parentId)
    .sort((a, b) => Number(a.sort) - Number(b.sort));
}

function hasChildren(id) {
  return categories.some((item) => item.parentId === id);
}

function isLeafCategory(id, parentId = "") {
  if (id) return !hasChildren(id);
  if (parentId) {
    const parent = categories.find((item) => item.id === parentId);
    return Boolean(parent && parent.level + 1 >= 10);
  }
  return false;
}

function collectVisible(parentId = "", list = []) {
  childrenOf(parentId).forEach((item) => {
    list.push(item);
    if (item.expanded) collectVisible(item.id, list);
  });
  return list;
}

function collectSearchResults() {
  const codeKeyword = document.querySelector("#codeKeyword").value.trim();
  const nameKeyword = document.querySelector("#nameKeyword").value.trim();
  if (!codeKeyword && !nameKeyword) return collectVisible();
  return categories.filter((item) => {
    const codeHit = !codeKeyword || item.code.includes(codeKeyword);
    const nameHit = !nameKeyword || item.name.includes(nameKeyword);
    return codeHit && nameHit;
  });
}

function stateTag(value) {
  return value === "启用" ? "ok" : "";
}

function levelName(level) {
  return `${level}级`;
}

function render(list) {
  currentRows = list;
  rows.innerHTML = list.map((item) => {
    const expandable = hasChildren(item.id);
    const childAllowed = item.level < 10;
    const indent = (item.level - 1) * 20;
    return `
      <tr>
        <td><input type="checkbox"></td>
        <td title="${item.code}">${item.code}</td>
        <td title="${item.name}">
          <button class="tree-toggle ${expandable ? "" : "placeholder"}" data-id="${item.id}" style="margin-left:${indent}px">${expandable ? (item.expanded ? "▾" : "▸") : ""}</button>
          <span class="category-name">${item.name}</span>
          <span class="level-chip">${levelName(item.level)}</span>
        </td>
        <td>${item.productCount}</td>
        <td><span class="tag ${stateTag(item.state)}">${item.state}</span></td>
        <td>
          <div class="row-actions">
            <button class="edit-row" data-id="${item.id}">编辑</button>
            ${childAllowed ? `<button class="add-child-row" data-id="${item.id}">新增子级</button>` : ""}
            <button class="disable-row danger-link" data-id="${item.id}" data-state="${item.state}">${item.state === "禁用" ? "启用" : "禁用"}</button>
            <button class="delete-row danger-link" data-linked="${item.productCount > 0 ? "已关联" : "未关联"}">删除</button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
  document.querySelector("table").classList.toggle("hidden", list.length === 0);
  emptyState.classList.toggle("hidden", list.length !== 0);
  totalText.textContent = `共 ${list.length} 条`;
  bindRowActions();
}

function applyFilters() {
  render(collectSearchResults());
}

function bindRowActions() {
  document.querySelectorAll(".tree-toggle:not(.placeholder)").forEach((button) => {
    button.addEventListener("click", () => {
      const item = categories.find((row) => row.id === button.dataset.id);
      item.expanded = !item.expanded;
      applyFilters();
    });
  });
  document.querySelectorAll(".edit-row").forEach((button) => {
    button.addEventListener("click", () => openEdit("编辑分类", button.dataset.id));
  });
  document.querySelectorAll(".add-child-row").forEach((button) => {
    button.addEventListener("click", () => openEdit("新增子级", "", button.dataset.id));
  });
  document.querySelectorAll(".disable-row").forEach((button) => {
    button.addEventListener("click", () => openConfirm(button.dataset.state === "禁用" ? "启用确认" : "禁用确认", button.dataset.state));
  });
  document.querySelectorAll(".delete-row").forEach((button) => {
    button.addEventListener("click", () => openDeleteConfirm(button.dataset.linked));
  });
}

function showList() {
  editView.classList.remove("active");
  listView.classList.add("active");
}

function openEdit(title, id = "", parentId = "") {
  const item = categories.find((row) => row.id === id);
  const parent = categories.find((row) => row.id === parentId);
  const leaf = isLeafCategory(id, parentId);
  editingParentId = parentId;
  editingCategoryId = id;
  editingSpecs = leaf ? normalizeSpecs(structuredClone(specificationTemplates[id] || [])) : [];
  document.querySelector("#editTitle").textContent = title;
  document.querySelector("#editCrumb").textContent = title;
  document.querySelector("#formCode").value = item ? item.code : "";
  document.querySelector("#formName").value = item ? item.name : "";
  document.querySelector("#formParent").value = item ? (categories.find((row) => row.id === item.parentId)?.name || "") : (parent?.name || "");
  document.querySelector("#formLevel").value = item ? levelName(item.level) : levelName(parent ? parent.level + 1 : 1);
  document.querySelector("#formSort").value = item ? item.sort : "10";
  document.querySelector("#formState").value = item ? item.state : "启用";
  document.querySelector("#formOwner").value = "中心主数据管理员";
  specReadonly.classList.toggle("hidden", leaf);
  specList.classList.toggle("hidden", !leaf);
  specEmpty.classList.toggle("hidden", !leaf || editingSpecs.length !== 0);
  addSpecBtn.classList.toggle("hidden", !leaf);
  renderSpecs();
  listView.classList.remove("active");
  editView.classList.add("active");
}

function normalizeSpecs(specs) {
  return specs.map((spec) => ({
    name: spec.name || "",
    required: Boolean(spec.required),
    searchable: Boolean(spec.searchable),
    models: (spec.models || []).map((model) => (
      typeof model === "string"
        ? { name: model, required: false, searchable: false }
        : { name: model.name || "", required: Boolean(model.required), searchable: Boolean(model.searchable) }
    ))
  }));
}

function renderSpecs() {
  if (specList.classList.contains("hidden")) return;
  specList.innerHTML = editingSpecs.map((spec, specIndex) => `
    <div class="spec-item">
      <div class="spec-head">
        <label>
          <span>规格名称</span>
          <input class="spec-name" data-index="${specIndex}" value="${spec.name}" placeholder="例如：截面尺寸">
        </label>
        <label class="inline-check"><input type="checkbox" class="spec-required" data-index="${specIndex}" ${spec.required ? "checked" : ""}> 必填</label>
        <label class="inline-check"><input type="checkbox" class="spec-searchable" data-index="${specIndex}" ${spec.searchable ? "checked" : ""}> 用于搜索</label>
        <button type="button" class="remove-spec danger-link" data-index="${specIndex}">删除规格</button>
      </div>
      <div class="model-area">
        <span class="model-label">型号选项</span>
        <div class="model-content">
          <div class="model-list">
            ${spec.models.map((model, modelIndex) => `
              <div class="model-row">
                <input class="model-name" data-spec="${specIndex}" data-model="${modelIndex}" value="${model.name}" placeholder="型号名称">
                <button type="button" class="remove-model danger-link" data-spec="${specIndex}" data-model="${modelIndex}">删除</button>
              </div>
            `).join("")}
          </div>
          <div class="model-add">
            <input class="model-input" data-index="${specIndex}" placeholder="输入型号后添加">
            <button type="button" class="add-model" data-index="${specIndex}">添加型号</button>
          </div>
        </div>
      </div>
    </div>
  `).join("");
  specEmpty.classList.toggle("hidden", editingSpecs.length !== 0);
  bindSpecActions();
}

function bindSpecActions() {
  document.querySelectorAll(".spec-name").forEach((input) => {
    input.addEventListener("input", () => {
      editingSpecs[Number(input.dataset.index)].name = input.value;
    });
  });
  document.querySelectorAll(".spec-required").forEach((input) => {
    input.addEventListener("change", () => {
      editingSpecs[Number(input.dataset.index)].required = input.checked;
    });
  });
  document.querySelectorAll(".spec-searchable").forEach((input) => {
    input.addEventListener("change", () => {
      editingSpecs[Number(input.dataset.index)].searchable = input.checked;
    });
  });
  document.querySelectorAll(".model-name").forEach((input) => {
    input.addEventListener("input", () => {
      editingSpecs[Number(input.dataset.spec)].models[Number(input.dataset.model)].name = input.value;
    });
  });
  document.querySelectorAll(".remove-spec").forEach((button) => {
    button.addEventListener("click", () => {
      editingSpecs.splice(Number(button.dataset.index), 1);
      renderSpecs();
    });
  });
  document.querySelectorAll(".remove-model").forEach((button) => {
    button.addEventListener("click", () => {
      editingSpecs[Number(button.dataset.spec)].models.splice(Number(button.dataset.model), 1);
      renderSpecs();
    });
  });
  document.querySelectorAll(".add-model").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.index);
      const input = document.querySelector(`.model-input[data-index="${index}"]`);
      const value = input.value.trim();
      if (value && !editingSpecs[index].models.some((model) => model.name === value)) {
        editingSpecs[index].models.push({ name: value, required: false, searchable: editingSpecs[index].searchable });
        renderSpecs();
      }
    });
  });
}

function openModal(modal) {
  mask.classList.remove("hidden");
  modal.classList.remove("hidden");
}

function closeModals() {
  mask.classList.add("hidden");
  batchAddModal.classList.add("hidden");
  confirmModal.classList.add("hidden");
  errorModal.classList.add("hidden");
}

function openConfirm(title, state) {
  document.querySelector("#confirmTitle").textContent = title;
  document.querySelector("#confirmText").textContent = state === "禁用" ? "启用后该分类可重新被产品引用。" : "禁用父级分类时，子级分类将同步禁用。";
  document.querySelector("#confirmLinkText").textContent = "关联产品：按当前分类校验";
  document.querySelector("#confirmOk").textContent = state === "禁用" ? "确认启用" : "确认禁用";
  openModal(confirmModal);
}

function openDeleteConfirm(linked) {
  document.querySelector("#confirmTitle").textContent = linked === "已关联" ? "删除受限" : "删除确认";
  document.querySelector("#confirmText").textContent = linked === "已关联" ? "该分类已关联产品，不能删除，可改为禁用。" : "删除后该分类将从层级列表移除。";
  document.querySelector("#confirmLinkText").textContent = linked === "已关联" ? "关联产品：不可删除" : "关联产品：0 个";
  document.querySelector("#confirmOk").textContent = linked === "已关联" ? "改为禁用" : "确认删除";
  openModal(confirmModal);
}

document.querySelector("#search").addEventListener("click", applyFilters);
document.querySelector("#reset").addEventListener("click", () => {
  document.querySelector("#codeKeyword").value = "";
  document.querySelector("#nameKeyword").value = "";
  applyFilters();
});
document.querySelector("#addRootBtn").addEventListener("click", () => openEdit("新增一级分类"));
document.querySelector("#batchAddBtn").addEventListener("click", () => openModal(batchAddModal));
document.querySelector("#exportBtn").addEventListener("click", () => {});
document.querySelector("#addSpecBtn").addEventListener("click", () => {
  editingSpecs.push({ name: "", required: false, searchable: false, models: [] });
  renderSpecs();
});
document.querySelector("#cancelEdit").addEventListener("click", showList);
document.querySelector("#saveDraft").addEventListener("click", showList);
document.querySelector("#submitEdit").addEventListener("click", () => {
  if (editingCategoryId) specificationTemplates[editingCategoryId] = structuredClone(editingSpecs);
  showList();
});
document.querySelector("#closeBatchAdd").addEventListener("click", closeModals);
document.querySelector("#cancelBatchAdd").addEventListener("click", closeModals);
document.querySelector("#closeConfirm").addEventListener("click", closeModals);
document.querySelector("#cancelConfirm").addEventListener("click", closeModals);
document.querySelector("#confirmOk").addEventListener("click", closeModals);
document.querySelector("#closeError").addEventListener("click", closeModals);
document.querySelector("#errorOk").addEventListener("click", closeModals);
mask.addEventListener("click", closeModals);

render(collectVisible());
