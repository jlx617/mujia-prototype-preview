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
      { name: "储存区 A", tag: "存放区", cls: "storage", locations: [["A-01-01", "可用", "贝雷片 360 件"], ["A-01-02", "占用", "立杆 520 件"], ["A-02-03", "可用", "横杆 410 件"]] },
      { name: "待检区 B", tag: "待检区", cls: "inspect", locations: [["B-01-01", "待检", "退库扣件 86 件"], ["B-01-02", "待检", "钢模板 24 件"]] },
      { name: "翻新区 C", tag: "翻新区", cls: "refurbish", locations: [["C-01-01", "处理中", "钢支撑 18 件"], ["C-02-01", "待处理", "连接件 64 件"]] },
      { name: "废品区 D", tag: "报废区", cls: "scrap", locations: [["D-01-01", "待处置", "废旧模板 12 件"]] },
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
      { name: "储存区 A", tag: "存放区", cls: "storage", locations: [["A-01-01", "占用", "爬架组件 180 件"], ["A-02-01", "可用", "标准节 96 件"]] },
      { name: "待检区 B", tag: "待检区", cls: "inspect", locations: [["B-01-01", "待检", "退库平台 16 件"]] },
      { name: "翻新区 C", tag: "翻新区", cls: "refurbish", locations: [["C-01-01", "处理中", "防护网 42 件"]] },
      { name: "废品区 D", tag: "报废区", cls: "scrap", locations: [["D-01-01", "待处置", "损坏扣件 33 件"]] },
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
      { name: "现场使用区", tag: "存放区", cls: "storage", locations: [["X-01", "使用中", "钢模板 12 件"], ["X-02", "使用中", "连接件 6 件"]] },
      { name: "现场待退区", tag: "待检区", cls: "inspect", locations: [["R-01", "待退库", "扣件 18 件"]] },
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
      { name: "储存区 A", tag: "存放区", cls: "storage", locations: [["A-01", "空置", "无库存"]] },
      { name: "废品区 D", tag: "报废区", cls: "scrap", locations: [["D-01", "空置", "无库存"]] },
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
const $ = (id) => document.getElementById(id);

function filtered() {
  const company = $("company").value;
  const type = $("type").value;
  const status = $("status").value;
  const owner = $("owner").value.trim();
  const region = $("region").value.trim();
  let rows = warehouses.filter((item) => {
    return (company === "全部" || item.company === company)
      && (type === "全部" || item.type === type)
      && (status === "全部" || item.status === status)
      && (!owner || item.owner.includes(owner))
      && (!region || item.region.includes(region) || item.address.includes(region));
  });
  if (sortKey) {
    rows = [...rows].sort((a, b) => {
      if (typeof a[sortKey] === "number") return asc ? a[sortKey] - b[sortKey] : b[sortKey] - a[sortKey];
      return asc ? String(a[sortKey]).localeCompare(String(b[sortKey]), "zh") : String(b[sortKey]).localeCompare(String(a[sortKey]), "zh");
    });
  }
  return rows;
}

function render() {
  const rows = filtered();
  $("rows").innerHTML = rows.map((item) => `
    <tr>
      <td><input type="checkbox"></td>
      <td><button class="cell-link detail-open" data-code="${item.code}">${item.code}</button></td>
      <td><button class="cell-link detail-open" data-code="${item.code}" title="${item.name}">${item.name}</button></td>
      <td>${item.type}</td>
      <td>${item.company}</td>
      <td title="${item.address}">${item.address}</td>
      <td>${item.owner}</td>
      <td>${item.area}</td>
      <td>${item.slot}</td>
      <td>${item.qty.toLocaleString()}</td>
      <td><span class="state ${item.status === "启用" ? "on" : "off"}">${item.status}</span></td>
      <td><div class="actions"><button class="link edit">编辑</button><button class="link stop" data-code="${item.code}">停用</button><button class="link red del" data-code="${item.code}">删除</button></div></td>
    </tr>
  `).join("");
  $("empty").classList.toggle("show", rows.length === 0);
  $("summary").textContent = `共 ${rows.length} 条，当前显示第 1 页`;
  document.querySelectorAll(".detail-open").forEach((button) => button.onclick = () => openWarehouseDetail(button.dataset.code));
  document.querySelectorAll(".edit").forEach((button) => button.onclick = () => openDrawer("编辑仓库"));
  document.querySelectorAll(".stop").forEach((button) => button.onclick = () => blocked(button.dataset.code, "停用"));
  document.querySelectorAll(".del").forEach((button) => button.onclick = () => blocked(button.dataset.code, "删除"));
}

function openDrawer(title) {
  $("drawerTitle").textContent = title || "新增仓库";
  $("mask").classList.add("show");
  $("drawer").classList.add("open");
}

function closeDrawer() {
  $("drawer").classList.remove("open");
  if (!$("warehouseDetail").classList.contains("open") && !$("modal").classList.contains("show")) $("mask").classList.remove("show");
}

function openWarehouseDetail(code) {
  const item = warehouses.find((row) => row.code === code);
  if (!item) return;
  $("detailTitle").textContent = `${item.name}详情`;
  $("detailSubtitle").textContent = `${item.code} / ${item.company} / ${item.type}`;
  $("detailSummary").innerHTML = [
    ["仓库编码", item.code],
    ["仓库名称", item.name],
    ["所属公司", item.company],
    ["仓库类型", item.type],
    ["地址", item.address],
    ["负责人", item.owner],
    ["库区数", item.area],
    ["库位数", item.slot],
    ["库存数量", item.qty.toLocaleString()],
  ].map(([label, value]) => `<div class="summary-item"><span>${label}</span><b>${value}</b></div>`).join("");
  $("locationTree").innerHTML = item.zones.length ? item.zones.map((zone) => `
    <section class="area-node">
      <div class="area-head">▾ <b>${zone.name}</b><span class="area-tag ${zone.cls}">${zone.tag}</span><span>${zone.locations.length} 个库位</span></div>
      <div class="location-list">
        ${zone.locations.map(([location, state, goods]) => `<div class="location-row"><span>└ ${location}</span><span>${state}</span><span>${goods}</span></div>`).join("")}
      </div>
    </section>
  `).join("") : `<section class="area-node"><div class="area-head"><b>暂无库区库位</b></div><div class="location-list"><div class="location-row"><span>可通过“新增库区/库位”维护</span><span></span><span></span></div></div></section>`;
  $("mask").classList.add("show");
  $("warehouseDetail").classList.add("open");
}

function closeWarehouseDetail() {
  $("warehouseDetail").classList.remove("open");
  if (!$("drawer").classList.contains("open") && !$("modal").classList.contains("show")) $("mask").classList.remove("show");
}

function blocked(code, action) {
  const item = warehouses.find((row) => row.code === code);
  $("modalText").textContent = item.qty > 0
    ? `${item.name} 内存在 ${item.qty.toLocaleString()} 件物资，不可${action}。请先完成出库、退库或报废处置后再试。`
    : `${item.name} 当前无库存，可进入${action}流程；是否需要审批仍为待确认配置项。`;
  $("mask").classList.add("show");
  $("modal").classList.add("show");
}

function closeModal() {
  $("modal").classList.remove("show");
  if (!$("drawer").classList.contains("open") && !$("warehouseDetail").classList.contains("open")) $("mask").classList.remove("show");
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
  ["company", "type", "status"].forEach((id) => {
    $(id).value = "全部";
  });
  $("owner").value = "";
  $("region").value = "";
  render();
};
$("add").onclick = () => openDrawer("新增仓库");
$("addZone").onclick = () => openDrawer("新增库区/库位");
$("close").onclick = closeDrawer;
$("cancel").onclick = closeDrawer;
$("detailClose").onclick = closeWarehouseDetail;
$("mclose").onclick = closeModal;
$("mok").onclick = closeModal;
$("mask").onclick = () => {
  if ($("modal").classList.contains("show")) closeModal();
  if ($("warehouseDetail").classList.contains("open")) closeWarehouseDetail();
  if ($("drawer").classList.contains("open")) closeDrawer();
};

render();
