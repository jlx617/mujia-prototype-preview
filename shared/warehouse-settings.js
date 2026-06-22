const warehouses = [
  {
    code: "KC-WH-001",
    name: "上海物料站",
    type: "物料站",
    company: "科创公司",
    address: "上海市嘉定区安亭镇模架周转基地",
    owner: "陈志强",
    region: "华东片区",
    area: 4,
    slot: 200,
    qty: 3680,
    status: "启用",
    zones: [
      { name: "储存区 A", tag: "存放区", cls: "storage", locations: [["A-01-01", "已启用", "贝雷片 360 件"], ["A-01-02", "已禁用", "立杆 520 件"], ["A-02-03", "已启用", "横杆 410 件"]] },
      { name: "待检区 B", tag: "待检区", cls: "inspect", locations: [["B-01-01", "已启用", "退库扣件 86 件"], ["B-01-02", "已启用", "钢模板 24 件"]] },
      { name: "翻新区 C", tag: "翻新区", cls: "refurbish", locations: [["C-01-01", "已启用", "钢支撑 18 件"], ["C-02-01", "已禁用", "连接件 64 件"]] },
      { name: "废品区 D", tag: "报废区", cls: "scrap", locations: [["D-01-01", "已禁用", "废旧模板 12 件"]] },
    ],
  },
  {
    code: "KC-WH-003",
    name: "苏州装备中心",
    type: "装备中心",
    company: "科创公司",
    address: "江苏省苏州市工业园区装备中心",
    owner: "周琳",
    region: "华东片区",
    area: 5,
    slot: 260,
    qty: 2156,
    status: "启用",
    zones: [
      { name: "储存区 A", tag: "存放区", cls: "storage", locations: [["A-01-01", "已启用", "爬架组件 180 件"], ["A-02-01", "已启用", "标准节 96 件"]] },
      { name: "待检区 B", tag: "待检区", cls: "inspect", locations: [["B-01-01", "已启用", "退库平台 16 件"]] },
      { name: "翻新区 C", tag: "翻新区", cls: "refurbish", locations: [["C-01-01", "已启用", "防护网 42 件"]] },
      { name: "废品区 D", tag: "报废区", cls: "scrap", locations: [["D-01-01", "已禁用", "损坏扣件 33 件"]] },
    ],
  },
  {
    code: "KC-PW-012",
    name: "华东项目虚拟仓",
    type: "项目虚拟仓",
    company: "科创公司",
    address: "项目现场虚拟库位",
    owner: "王海",
    region: "华东片区",
    area: 2,
    slot: 48,
    qty: 18,
    status: "启用",
    zones: [
      { name: "现场使用区", tag: "存放区", cls: "storage", locations: [["X-01", "已启用", "钢模板 12 件"], ["X-02", "已启用", "连接件 6 件"]] },
      { name: "现场待退区", tag: "待检区", cls: "inspect", locations: [["R-01", "已启用", "扣件 18 件"]] },
    ],
  },
  {
    code: "LQ-WH-101",
    name: "路桥兼容仓",
    type: "物料站",
    company: "路桥公司",
    address: "安徽省合肥市包河区",
    owner: "刘明",
    region: "华中片区",
    area: 3,
    slot: 80,
    qty: 0,
    status: "停用",
    zones: [
      { name: "储存区 A", tag: "存放区", cls: "storage", locations: [["A-01", "已禁用", "无库存"]] },
      { name: "废品区 D", tag: "报废区", cls: "scrap", locations: [["D-01", "已禁用", "无库存"]] },
    ],
  },
  {
    code: "KC-WH-005",
    name: "成都临时周转仓",
    type: "物料站",
    company: "科创公司",
    address: "四川省成都市新都区",
    owner: "赵敏",
    region: "西南片区",
    area: 0,
    slot: 0,
    qty: 0,
    status: "启用",
    zones: [],
  },
];

let sortKey = "";
let asc = true;
let selectedCompany = "科创公司";
const $ = (id) => document.getElementById(id);

function filtered() {
  const keyword = $("keyword").value.trim();
  const status = $("status").value;
  const owner = $("owner").value.trim();
  const region = $("region").value;
  return warehouses.filter((item) => {
    return item.company === selectedCompany
      && (!keyword || item.code.includes(keyword) || item.name.includes(keyword))
      && (status === "全部" || item.status === status)
      && (!owner || item.owner.includes(owner))
      && (region === "全部" || item.address.includes(region));
  });
}

function render() {
  const rows = filtered();
  $("rows").innerHTML = rows.map((item) => `
    <tr>
      <td><input type="checkbox"></td>
      <td><button class="cell-link detail-open" data-code="${item.code}">${item.code}</button></td>
      <td><button class="cell-link detail-open" data-code="${item.code}" title="${item.name}">${item.name}</button></td>
      <td>${item.company}</td>
      <td title="${item.address}">${item.address}</td>
      <td>${item.owner}</td>
      <td>${item.area}</td>
      <td>${item.slot}</td>
      <td><span class="state ${item.status === "启用" ? "on" : "off"}">${item.status}</span></td>
      <td><div class="actions"><button class="link detail-open" data-code="${item.code}">查看</button><button class="link edit" data-code="${item.code}">编辑</button><button class="link zone-edit" data-code="${item.code}">新增库区/库位</button><button class="link stop" data-code="${item.code}">停用</button><button class="link red del" data-code="${item.code}">删除</button></div></td>
    </tr>
  `).join("");
  $("empty").classList.toggle("show", rows.length === 0);
  $("summary").textContent = `共 ${rows.length} 条，当前显示第 1 页`;
  document.querySelectorAll(".detail-open").forEach((button) => button.onclick = () => openWarehouseDetail(button.dataset.code));
  document.querySelectorAll(".edit").forEach((button) => button.onclick = () => openEditPage("编辑仓库", button.dataset.code));
  document.querySelectorAll(".zone-edit").forEach((button) => button.onclick = () => openZonePage(button.dataset.code));
  document.querySelectorAll(".stop").forEach((button) => button.onclick = () => blocked(button.dataset.code, "停用"));
  document.querySelectorAll(".del").forEach((button) => button.onclick = () => blocked(button.dataset.code, "删除"));
}

function showPage(pageId) {
  document.querySelectorAll(".page-view").forEach((page) => page.classList.remove("active"));
  $(pageId).classList.add("active");
}

function backToList() {
  showPage("listPage");
}

function openEditPage(title, code) {
  const item = warehouses.find((row) => row.code === code);
  $("editPageTitle").textContent = title || "新增仓库";
  showPage("editPage");
}

function openWarehouseDetail(code) {
  const item = warehouses.find((row) => row.code === code);
  if (!item) return;
  $("detailPageTitle").textContent = `${item.name}详情`;
  $("detailSummary").innerHTML = [
    ["仓库编码", item.code],
    ["仓库名称", item.name],
    ["所属公司", item.company],
    ["地址", item.address],
    ["负责人", item.owner],
    ["库区数", item.area],
    ["库位数", item.slot],
  ].map(([label, value]) => `<div class="summary-item"><span>${label}</span><b>${value}</b></div>`).join("");
  $("locationTree").innerHTML = item.zones.length ? item.zones.map((zone) => `
    <section class="area-node">
      <div class="area-head">▾ <b>${zone.name}</b><span class="area-tag ${zone.cls}">${zone.tag}</span><span>${zone.locations.length} 个库位</span></div>
      <div class="location-list">
        ${zone.locations.map(([location, state]) => `<div class="location-row"><span>└ ${location}</span><span>${state}</span><span></span></div>`).join("")}
      </div>
    </section>
  `).join("") : `<section class="area-node"><div class="area-head"><b>暂无库区库位</b></div><div class="location-list"><div class="location-row"><span>可通过“新增库区/库位”维护</span><span></span><span></span></div></div></section>`;
  showPage("detailPage");
}

function openZonePage(code) {
  const item = warehouses.find((row) => row.code === code);
  if (!item) return;
  $("zonePageTitle").textContent = `${item.name}库区/库位维护`;
  $("zoneWarehouseName").value = item.name;
  renderZoneTree(item);
  showPage("zonePage");
}

function renderZoneTree(item) {
  $("zoneTree").innerHTML = item.zones.length ? `
    <div class="zone-table-head"><span>库区/库位名称</span><span>类型</span><span>启用状态</span><span>物资占用</span><span>操作</span></div>
    ${item.zones.map((zone) => `
    <section class="zone-node">
      <div class="zone-row zone-area-row">
        <span>▾ ${zone.name}</span>
        <span><span class="area-tag ${zone.cls}">${zone.tag}</span></span>
        <span>已启用</span>
        <span>${zone.locations.length}</span>
        <span class="zone-row-actions"><button class="link zone-location-add" data-area="${zone.name}">新增库位</button><button class="link zone-select" data-name="${zone.name}" data-kind="area" data-type="${zone.tag}">编辑</button><button class="link">禁用</button><button class="link red zone-delete" data-state="已启用" data-empty="false">删除</button></span>
      </div>
      ${zone.locations.map(([location, state, goods]) => `
        <div class="zone-row zone-location-row">
          <span>└ ${location}</span>
          <span>库位</span>
          <span>${state}</span>
          <span>${goods === "无库存" ? "0" : "有物资"}</span>
          <span class="zone-row-actions"><button class="link zone-select" data-name="${location}" data-kind="location" data-type="库位">编辑</button><button class="link">${state === "已启用" ? "禁用" : "启用"}</button><button class="link red zone-delete" data-state="${state}" data-empty="${goods === "无库存"}">删除</button></span>
        </div>
      `).join("")}
    </section>
  `).join("")}` : `<div class="zone-empty">暂无库区库位，可先新增库区。</div>`;
  document.querySelectorAll(".zone-select").forEach((button) => {
    button.onclick = () => {
      openZoneModal(button.dataset.kind === "location" ? "编辑库位" : "编辑库区", button.dataset.kind, button.dataset.name, "储存区 A", button.dataset.type);
    };
  });
  document.querySelectorAll(".zone-location-add").forEach((button) => {
    button.onclick = () => openZoneModal("新增库位", "location", "", button.dataset.area);
  });
  document.querySelectorAll(".zone-delete").forEach((button) => {
    button.onclick = () => handleZoneDelete(button.dataset.state, button.dataset.empty === "true");
  });
}

function openZoneModal(title, kind, name, parentName = "储存区 A", currentType = "储存区") {
  $("zoneModalTitle").textContent = title;
  $("zoneName").value = name;
  $("zoneSort").value = "1";
  $("zoneTypeField").firstChild.textContent = kind === "location" ? "类型" : "分类";
  $("zoneType").innerHTML = kind === "location"
    ? `<option>库位</option>`
    : `<option>储存区</option><option>待检区</option><option>翻新区</option><option>废品区</option>`;
  $("zoneType").disabled = kind === "location";
  $("zoneType").value = kind === "location" ? "库位" : (["储存区", "待检区", "翻新区", "废品区"].includes(currentType) ? currentType : "储存区");
  $("parentNodeField").style.display = kind === "location" ? "grid" : "none";
  const parentSelect = $("parentNodeField").querySelector("select");
  parentSelect.value = parentName;
  $("mask").classList.add("show");
  $("zoneModal").classList.add("show");
}

function closeZoneModal() {
  $("zoneModal").classList.remove("show");
  if (!$("modal").classList.contains("show")) $("mask").classList.remove("show");
}

function handleZoneDelete(state, empty) {
  $("modalTitle").textContent = state === "已禁用" && empty ? "删除确认" : "操作不可执行";
  $("modalText").textContent = state === "已禁用" && empty
    ? "当前库区/库位已禁用且无物资，可以删除。"
    : "仅已禁用且库区/库位内无物资时允许删除。当前节点仍存在物资或未禁用，不可删除。";
  $("mask").classList.add("show");
  $("modal").classList.add("show");
}

function blocked(code, action) {
  const item = warehouses.find((row) => row.code === code);
  $("modalTitle").textContent = "操作不可执行";
  $("modalText").textContent = item.qty > 0
    ? `${item.name} 内存在 ${item.qty.toLocaleString()} 件物资，不可${action}。请先完成出库、退库或报废处置后再试。`
    : `${item.name} 当前无库存，可进入${action}流程。`;
  $("mask").classList.add("show");
  $("modal").classList.add("show");
}

function closeModal() {
  $("modal").classList.remove("show");
  $("mask").classList.remove("show");
}

$("query").onclick = render;
$("reset").onclick = () => {
  ["status", "region"].forEach((id) => {
    $(id).value = "全部";
  });
  $("keyword").value = "";
  $("owner").value = "";
  render();
};
$("add").onclick = () => openEditPage("新增仓库");
$("editCancel").onclick = backToList;
$("editSubmit").onclick = backToList;
$("detailBack").onclick = backToList;
$("zoneBack").onclick = backToList;
$("zoneSubmit").onclick = backToList;
$("addAreaBtn").onclick = () => {
  openZoneModal("新增库区", "area", "");
};
$("zoneModalClose").onclick = closeZoneModal;
$("zoneModalCancel").onclick = closeZoneModal;
$("zoneModalOk").onclick = closeZoneModal;
document.querySelectorAll(".org-node").forEach((node) => {
  node.onclick = () => {
    document.querySelectorAll(".org-node").forEach((item) => item.classList.remove("sel"));
    node.classList.add("sel");
    selectedCompany = node.dataset.company;
    render();
  };
});
$("orgSearch").oninput = () => {
  const value = $("orgSearch").value.trim();
  document.querySelectorAll(".org-node").forEach((node) => {
    node.hidden = value && !node.dataset.company.includes(value);
  });
};
$("mclose").onclick = closeModal;
$("mok").onclick = closeModal;
$("mask").onclick = () => {
  if ($("zoneModal").classList.contains("show")) closeZoneModal();
  if ($("modal").classList.contains("show")) closeModal();
};

render();
