const productCatalog = [
  { code: "CP-DS-001", name: "墩身标准节", spec: "2.0m", unit: "块", defaultQty: 120 },
  { code: "CP-LS-020", name: "连接螺栓", spec: "M20", unit: "件", defaultQty: 3000 },
  { code: "CP-MB-150", name: "钢模板", spec: "1500x1000", unit: "块", defaultQty: 80 },
  { code: "CP-YY-015", name: "液压泵站", spec: "15kW", unit: "台", defaultQty: 2 },
  { code: "CP-CT-A01", name: "承台侧模", spec: "A 型", unit: "套", defaultQty: 8 },
  { code: "CP-BL-321", name: "贝雷片", spec: "321 型", unit: "片", defaultQty: 120 }
];

const bomCatalog = [
  {
    code: "KC-BOM-202605-018",
    name: "华东高架 3 标墩身模板",
    items: [
      { code: "CP-DS-001", name: "墩身标准节", spec: "2.0m", unit: "块", qty: 120 },
      { code: "CP-LS-020", name: "连接螺栓", spec: "M20", unit: "件", qty: 3000 },
      { code: "CP-MB-150", name: "钢模板", spec: "1500x1000", unit: "块", qty: 80 }
    ]
  },
  {
    code: "KC-BOM-STD-041",
    name: "标准墩身模板 BOM",
    items: [
      { code: "CP-DS-001", name: "墩身标准节", spec: "2.0m", unit: "块", qty: 80 },
      { code: "CP-LS-020", name: "连接螺栓", spec: "M20", unit: "件", qty: 2400 },
      { code: "CP-YY-015", name: "液压泵站", spec: "15kW", unit: "台", qty: 1 }
    ]
  },
  {
    code: "KC-BOM-202605-026",
    name: "滨江快速路承台模板",
    items: [
      { code: "CP-CT-A01", name: "承台侧模", spec: "A 型", unit: "套", qty: 12 },
      { code: "CP-MB-150", name: "钢模板", spec: "1500x1000", unit: "块", qty: 60 },
      { code: "CP-BL-321", name: "贝雷片", spec: "321 型", unit: "片", qty: 90 }
    ]
  }
];

let demandItems = [
  { code: "CP-DS-001", name: "墩身标准节", spec: "2.0m", unit: "块", qty: 120, source: "产品清单" },
  { code: "CP-LS-020", name: "连接螺栓", spec: "M20", unit: "件", qty: 3000, source: "产品清单" },
  { code: "CP-MB-150", name: "钢模板", spec: "1500x1000", unit: "块", qty: 80, source: "产品清单" }
];

const warehouses = [
  {
    code: "KC-SH-001",
    name: "上海嘉定物料站",
    company: "科创公司",
    region: "华东片区",
    type: "物料站",
    category: "模架体系",
    stockState: "可用",
    address: "上海市嘉定区安亭镇模架周转基地",
    owner: "陈志强 138****6201",
    distance: 18,
    point: [70, 62],
    inventory: [
      { code: "CP-DS-001", name: "墩身标准节", spec: "2.0m", state: "可用", available: 116, locked: 12, release: 56, location: "A1-01" },
      { code: "CP-LS-020", name: "连接螺栓", spec: "M20", state: "可用", available: 3000, locked: 600, release: 1200, location: "B2-08" },
      { code: "CP-MB-150", name: "钢模板", spec: "1500x1000", state: "部分缺货", available: 68, locked: 16, release: 24, location: "A3-12" },
      { code: "CP-YY-015", name: "液压泵站", spec: "15kW", state: "可用", available: 4, locked: 0, release: 1, location: "D1-02" }
    ],
    refurbish: [["钢模板 1500x1000", "18 块", "2026-06-05", "翻新中"], ["标准节连接件", "42 件", "2026-06-02", "待验收"]],
    releases: [["沪苏湖高架 2 标", "墩身标准节 2.0m", "56 块", "2026-06-12"], ["嘉闵线项目", "钢模板 1500x1000", "24 块", "2026-06-20"]],
    shortages: [["钢模板 1500x1000", "12 块", "等待释放 / 采购预留", "已维护"]]
  },
  {
    code: "KC-SZ-003",
    name: "苏州装备中心",
    company: "科创公司",
    region: "华东片区",
    type: "物料站",
    category: "模架体系",
    stockState: "部分缺货",
    address: "江苏省苏州市工业园区装备中心",
    owner: "周琳 139****8820",
    distance: 92,
    point: [73, 57],
    inventory: [
      { code: "CP-DS-001", name: "墩身标准节", spec: "2.0m", state: "部分缺货", available: 96, locked: 8, release: 0, location: "A2-05" },
      { code: "CP-LS-020", name: "连接螺栓", spec: "M20", state: "部分缺货", available: 2600, locked: 400, release: 900, location: "B1-11" },
      { code: "CP-MB-150", name: "钢模板", spec: "1500x1000", state: "可用", available: 72, locked: 20, release: 36, location: "C1-03" },
      { code: "CP-BL-321", name: "贝雷片", spec: "321 型", state: "可用", available: 160, locked: 24, release: 30, location: "E2-06" }
    ],
    refurbish: [["墩身标准节 2.0m", "16 块", "2026-06-08", "翻新中"]],
    releases: [["苏州园区快速路", "钢模板 1500x1000", "36 块", "2026-06-18"]],
    shortages: [["连接螺栓 M20", "400 件", "辅材采购 / 外租预留", "待补录"], ["墩身标准节 2.0m", "24 块", "等待释放", "已维护"]]
  },
  {
    code: "KC-WH-002",
    name: "武汉科创中心仓",
    company: "科创公司",
    region: "华中片区",
    type: "物料站",
    category: "模架体系",
    stockState: "预计释放",
    address: "湖北省武汉市蔡甸区科创周转中心",
    owner: "刘明 136****4318",
    distance: 702,
    point: [53, 60],
    inventory: [
      { code: "CP-DS-001", name: "墩身标准节", spec: "2.0m", state: "部分缺货", available: 76, locked: 12, release: 80, location: "A1-09" },
      { code: "CP-LS-020", name: "连接螺栓", spec: "M20", state: "部分缺货", available: 1800, locked: 300, release: 2400, location: "B3-01" },
      { code: "CP-MB-150", name: "钢模板", spec: "1500x1000", state: "可用", available: 80, locked: 8, release: 32, location: "C2-10" },
      { code: "CP-CT-A01", name: "承台侧模", spec: "A 型", state: "可用", available: 10, locked: 0, release: 4, location: "D2-04" }
    ],
    refurbish: [["连接螺栓 M20", "620 件", "2026-06-15", "翻新中"], ["钢模板 1500x1000", "32 块", "2026-06-18", "待质检"]],
    releases: [["汉江桥 2 标", "墩身标准节 2.0m", "80 块", "2026-06-28"], ["武汉外环项目", "连接螺栓 M20", "2400 件", "2026-07-05"]],
    shortages: [["墩身标准节 2.0m", "44 块", "等待释放 / 调拨组合", "待补录"], ["连接螺栓 M20", "1200 件", "采购预留", "待补录"]]
  },
  {
    code: "KC-PJ-012",
    name: "华东高架项目临时点",
    company: "科创公司",
    region: "华东片区",
    type: "项目临时点",
    category: "模架体系",
    stockState: "预计释放",
    address: "上海市青浦区华东高架 3 标现场",
    owner: "王海 137****1208",
    distance: 46,
    point: [68, 64],
    inventory: [
      { code: "CP-DS-001", name: "墩身标准节", spec: "2.0m", state: "部分缺货", available: 44, locked: 10, release: 120, location: "现场 3 区" },
      { code: "CP-LS-020", name: "连接螺栓", spec: "M20", state: "部分缺货", available: 1100, locked: 200, release: 1800, location: "现场 2 区" },
      { code: "CP-MB-150", name: "钢模板", spec: "1500x1000", state: "部分缺货", available: 32, locked: 12, release: 48, location: "现场 1 区" },
      { code: "CP-BL-321", name: "贝雷片", spec: "321 型", state: "预计释放", available: 60, locked: 20, release: 80, location: "现场 5 区" }
    ],
    refurbish: [["钢模板 1500x1000", "24 块", "2026-06-06", "现场验收后确认"]],
    releases: [["华东高架 3 标", "墩身标准节 2.0m", "120 块", "2026-06-22"], ["华东高架 3 标", "连接螺栓 M20", "1800 件", "2026-06-22"]],
    shortages: [["连接螺栓 M20", "1900 件", "等待退库 / 采购预留", "待补录"], ["钢模板 1500x1000", "48 块", "等待释放", "待补齐"]]
  }
];

let currentRows = [...warehouses];
let activeCode = warehouses[0].code;
let sortMode = "match";
const $ = (selector) => document.querySelector(selector);

function getStock(item, code) {
  return item.inventory.find((stock) => stock.code === code);
}

function demandMatch(item) {
  if (!demandItems.length) return { rate: 0, available: 0, shortage: 0, rows: [] };
  const rows = demandItems.map((need) => {
    const stock = getStock(item, need.code);
    const available = stock ? stock.available : 0;
    const shortage = Math.max(0, need.qty - available);
    return { ...need, available, shortage, enough: shortage === 0 };
  });
  const needTotal = rows.reduce((sum, row) => sum + row.qty, 0);
  const matchedTotal = rows.reduce((sum, row) => sum + Math.min(row.qty, row.available), 0);
  return {
    rate: needTotal ? Math.round((matchedTotal / needTotal) * 100) : 0,
    available: matchedTotal,
    shortage: rows.reduce((sum, row) => sum + row.shortage, 0),
    rows
  };
}

function updateDemandPickerText() {
  $("#demandPicker").textContent = demandItems.length
    ? demandItems.map((item) => `${item.name} ${item.spec} ${item.qty} ${item.unit}`).join("、")
    : "请选择产品清单或 BOM 组成需求物资清单";
}

function shortageCount(item) {
  return demandMatch(item).shortage;
}

function badgeClass(value) {
  if (value.includes("缺货")) return "warn";
  if (value.includes("释放")) return "info";
  return "ok";
}

function filteredRows() {
  const company = $("#companyFilter").value;
  const region = $("#regionFilter").value;
  const type = $("#typeFilter").value;
  const category = $("#categoryFilter").value;
  const stock = $("#stockFilter").value;
  const distanceText = $("#distanceFilter").value;
  const maxDistance = distanceText === "全部" ? Infinity : Number(distanceText.replace(/\D/g, ""));
  return warehouses.filter((item) => (
    (company === "全部" || item.company === company) &&
    (region === "全部" || item.region === region) &&
    (type === "全部" || item.type === type) &&
    (category === "全部" || item.category === category) &&
    (stock === "全部" || item.stockState === stock) &&
    item.distance <= maxDistance
  ));
}

function renderMap(rows) {
  $("#mapPoints").innerHTML = rows.map((item) => {
    const match = demandMatch(item);
    return `
      <button class="map-point ${item.type === "项目临时点" ? "temp" : ""} ${item.code === activeCode ? "active" : ""}"
        style="left:${item.point[0]}%;top:${item.point[1]}%" data-code="${item.code}" type="button">
        ${item.name.replace("物料站", "").replace("项目临时点", "")}
        <em>${match.rate}%</em>
      </button>
    `;
  }).join("");
  document.querySelectorAll(".map-point").forEach((button) => {
    button.addEventListener("click", () => openWarehouse(button.dataset.code));
  });
}

function renderList(rows) {
  $("#warehouseList").innerHTML = rows.map((item) => {
    const match = demandMatch(item);
    return `
      <article class="warehouse-card ${item.code === activeCode ? "active" : ""}" data-code="${item.code}">
        <div class="warehouse-thumb"></div>
        <div>
          <div class="warehouse-name">
            <b title="${item.name}">${item.name}</b>
            <span class="badge ${badgeClass(item.stockState)}">${item.type}</span>
          </div>
          <div class="warehouse-meta">
            <span title="${item.address}">${item.address}</span>
            <span>负责人：${item.owner}</span>
            <span>所属分公司：${item.company} / ${item.region}</span>
          </div>
          <div class="card-footer">
            <button class="match-btn" data-code="${item.code}" type="button">${match.rate}%</button>
            <span class="stock-count">匹配库存：${match.available.toLocaleString()} 件</span>
          </div>
        </div>
      </article>
    `;
  }).join("");
  $("#empty").classList.toggle("hidden", rows.length !== 0);
  $("#warehouseList").classList.toggle("hidden", rows.length === 0);
  document.querySelectorAll(".warehouse-card").forEach((card) => {
    card.addEventListener("click", () => openWarehouse(card.dataset.code));
  });
  document.querySelectorAll(".match-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      openMatch(button.dataset.code);
    });
  });
}

function renderAll(rows = filteredRows()) {
  currentRows = [...rows].sort((a, b) => {
    if (sortMode === "distance") return a.distance - b.distance;
    return demandMatch(b).rate - demandMatch(a).rate;
  });
  if (!currentRows.find((item) => item.code === activeCode) && currentRows[0]) activeCode = currentRows[0].code;
  $("#resultSummary").textContent = `共 ${currentRows.length} 个仓库，按${sortMode === "distance" ? "距离" : "匹配率"}排序`;
  renderList(currentRows);
  renderMap(currentRows);
}

function rowsHtml(rows) {
  return rows.map((row) => `<tr>${row.map((cell) => `<td title="${cell}">${cell}</td>`).join("")}</tr>`).join("");
}

function showOverlay(selector) {
  $("#mask").classList.remove("hidden");
  $(selector).classList.remove("hidden");
}

function closeOverlays() {
  $("#mask").classList.add("hidden");
  ["#demandModal", "#productModal", "#bomModal", "#importModal", "#addressModal", "#matchModal", "#warehouseModal", "#planModal"].forEach((selector) => $(selector).classList.add("hidden"));
}

function openMatch(code) {
  const item = warehouses.find((row) => row.code === code);
  if (!item) return;
  const match = demandMatch(item);
  activeCode = code;
  $("#matchTitle").textContent = `${item.name}匹配明细`;
  $("#matchSummary").innerHTML = [
    ["需求匹配率", `${match.rate}%`],
    ["匹配库存", `${match.available.toLocaleString()} 件`],
    ["预计释放", item.inventory.reduce((sum, stock) => sum + stock.release, 0).toLocaleString() + " 件"],
    ["缺货数量", `${match.shortage.toLocaleString()} 件`]
  ].map(([label, value]) => `<div><span>${label}</span><b>${value}</b></div>`).join("");
  $("#matchedRows").innerHTML = match.rows.map((row) => `<tr><td>${row.name} ${row.spec}</td><td>${row.qty} ${row.unit}</td><td>${Math.min(row.qty, row.available)} ${row.unit}</td><td>${row.enough ? "满足" : "部分满足"}</td></tr>`).join("");
  $("#refurbishRows").innerHTML = rowsHtml(item.refurbish);
  $("#releaseRows").innerHTML = rowsHtml(item.releases);
  $("#shortageRows").innerHTML = rowsHtml(item.shortages);
  renderAll(currentRows);
  showOverlay("#matchModal");
}

function setWarehouseTab(tab) {
  const demandActive = tab === "demand";
  $("#demandTab").classList.toggle("active", demandActive);
  $("#inventoryTab").classList.toggle("active", !demandActive);
  $("#demandPanel").classList.toggle("hidden", !demandActive);
  $("#inventoryPanel").classList.toggle("hidden", demandActive);
}

function openWarehouse(code) {
  const item = warehouses.find((row) => row.code === code);
  if (!item) return;
  const match = demandMatch(item);
  activeCode = code;
  $("#warehouseTitle").textContent = `${item.name}详情`;
  $("#warehouseSummary").innerHTML = [
    ["仓库类型", item.type],
    ["所属分公司", item.company],
    ["负责人", item.owner],
    ["距离", `${item.distance}km`],
    ["需求匹配率", demandItems.length ? `${match.rate}%` : "-"],
    ["当前可用", item.inventory.reduce((sum, stock) => sum + stock.available, 0).toLocaleString() + " 件"],
    ["库存状态", item.stockState],
    ["地址", item.address]
  ].map(([label, value]) => `<div><span>${label}</span><b>${value}</b></div>`).join("");
  $("#demandSatisfaction").innerHTML = [
    ["需求物资", `${demandItems.length} 项`],
    ["匹配库存", `${match.available.toLocaleString()} 件`],
    ["缺口数量", `${match.shortage.toLocaleString()} 件`],
    ["是否满足", match.shortage === 0 && demandItems.length ? "满足" : "部分满足"]
  ].map(([label, value]) => `<div><span>${label}</span><b>${value}</b></div>`).join("");
  $("#satisfactionRows").innerHTML = demandItems.length
    ? match.rows.map((row) => `<tr><td>${row.name}</td><td>${row.spec}</td><td>${row.qty} ${row.unit}</td><td>${row.available} ${row.unit}</td><td>${row.shortage} ${row.unit}</td><td><span class="badge ${row.enough ? "ok" : "warn"}">${row.enough ? "满足" : "不满足"}</span></td></tr>`).join("")
    : `<tr><td colspan="6">未选择需求物资清单</td></tr>`;
  $("#inventoryRows").innerHTML = item.inventory.map((stock) => `<tr><td>${stock.name}</td><td>${stock.spec}</td><td><span class="badge ${badgeClass(stock.state)}">${stock.state}</span></td><td>${stock.available}</td><td>${stock.locked}</td><td>${stock.release}</td><td>${stock.location}</td></tr>`).join("");
  $("#demandTab").classList.toggle("hidden", !demandItems.length);
  setWarehouseTab(demandItems.length ? "demand" : "inventory");
  renderAll(currentRows);
  showOverlay("#warehouseModal");
}

function renderDemandOptions() {
  $("#productOptions").innerHTML = productCatalog.map((product) => {
    const existing = demandItems.find((item) => item.code === product.code);
    return `
      <label class="choice-item">
        <input class="product-check" type="checkbox" value="${product.code}" ${existing ? "checked" : ""}>
        <span>${product.name} ${product.spec}</span>
        <input class="qty-input" data-code="${product.code}" type="number" min="1" value="${existing?.qty || product.defaultQty}">
        <em>${product.unit}</em>
      </label>
    `;
  }).join("");
  $("#bomOptions").innerHTML = bomCatalog.map((bom, index) => `
    <label class="choice-item">
      <input class="bom-check" type="radio" name="bom" value="${bom.code}" ${index === 0 ? "checked" : ""}>
      <span>${bom.code} ${bom.name}</span>
    </label>
  `).join("");
}

function renderDemandRows() {
  $("#demandRows").innerHTML = demandItems.length
    ? demandItems.map((item) => `<tr>
        <td>${item.name}</td>
        <td>${item.spec}</td>
        <td><input class="demand-qty" data-code="${item.code}" type="number" min="1" value="${item.qty}"></td>
        <td>${item.unit}</td>
        <td>${item.source}</td>
        <td><button class="delete-demand" data-code="${item.code}" type="button">删除</button></td>
      </tr>`).join("")
    : `<tr><td colspan="6">暂无需求物资，请从产品清单、BOM 清单或导入文件中带入。</td></tr>`;
}

function mergeDemandItems(items) {
  const merged = new Map(demandItems.map((item) => [item.code, item]));
  items.forEach((item) => {
    const existing = merged.get(item.code);
    merged.set(item.code, existing
      ? { ...existing, qty: Math.max(existing.qty, item.qty), source: `${existing.source} / ${item.source}` }
      : item);
  });
  demandItems = Array.from(merged.values());
  renderDemandRows();
}

function applyProductsFromModal() {
  const selectedProducts = Array.from(document.querySelectorAll(".product-check:checked")).map((input) => {
    const product = productCatalog.find((item) => item.code === input.value);
    const qtyInput = document.querySelector(`.qty-input[data-code="${input.value}"]`);
    return { ...product, qty: Number(qtyInput.value || product.defaultQty), source: "产品清单" };
  });
  mergeDemandItems(selectedProducts);
  hidePickModals();
}

function applyBomFromModal() {
  const bomCode = document.querySelector(".bom-check:checked")?.value;
  const bom = bomCatalog.find((item) => item.code === bomCode);
  const bomItems = bom ? bom.items.map((item) => ({ ...item, source: bom.code })) : [];
  mergeDemandItems(bomItems);
  hidePickModals();
}

function hidePickModals() {
  ["#productModal", "#bomModal", "#importModal"].forEach((selector) => $(selector).classList.add("hidden"));
}

function applyDemandFromModal() {
  updateDemandPickerText();
  closeOverlays();
  renderAll();
}

$("#demandPicker").addEventListener("click", () => {
  renderDemandRows();
  showOverlay("#demandModal");
});

$("#demandModal").addEventListener("input", (event) => {
  if (!event.target.matches(".demand-qty")) return;
  const item = demandItems.find((row) => row.code === event.target.dataset.code);
  if (item) item.qty = Math.max(1, Number(event.target.value || 1));
  updateDemandPickerText();
  renderAll();
});

$("#demandModal").addEventListener("click", (event) => {
  if (event.target.matches(".delete-demand")) {
    demandItems = demandItems.filter((item) => item.code !== event.target.dataset.code);
    renderDemandRows();
    updateDemandPickerText();
    renderAll();
  }
});

$("#applyDemand").addEventListener("click", applyDemandFromModal);
$("#chooseProducts").addEventListener("click", () => {
  renderDemandOptions();
  showOverlay("#productModal");
});
$("#chooseBom").addEventListener("click", () => {
  renderDemandOptions();
  showOverlay("#bomModal");
});
$("#importDemand").addEventListener("click", () => {
  showOverlay("#importModal");
});
$("#applyProductPick").addEventListener("click", applyProductsFromModal);
$("#applyBomPick").addEventListener("click", applyBomFromModal);
$("#mockImport").addEventListener("click", () => {
  $("#mockImport").textContent = "已选择：需求物资清单.xlsx";
});
$("#applyImport").addEventListener("click", () => {
  mergeDemandItems([
    { code: "CP-CT-A01", name: "承台侧模", spec: "A 型", unit: "套", qty: 12, source: "导入清单" },
    { code: "CP-BL-321", name: "贝雷片", spec: "321 型", unit: "片", qty: 90, source: "导入清单" }
  ]);
  hidePickModals();
});
document.querySelectorAll(".backDemandModal").forEach((button) => button.addEventListener("click", hidePickModals));

$("#addressInput").addEventListener("click", () => {
  $("#addressManual").value = $("#addressInput").value;
  showOverlay("#addressModal");
});

document.querySelectorAll(".pick-point").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".pick-point").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    $("#addressManual").value = button.dataset.address;
  });
});

$("#useAddress").addEventListener("click", () => {
  $("#addressInput").value = $("#addressManual").value;
  closeOverlays();
  renderAll();
});

$("#query").addEventListener("click", () => renderAll());
function openPlanSync() {
  const selected = currentRows.slice(0, 3);
  const best = selected[0];
  const bestMatch = best ? demandMatch(best) : null;
  $("#planSummary").innerHTML = [
    ["计划来源", "资产地图"],
    ["需求物资", `${demandItems.length} 项`],
    ["建议仓库", best ? best.name : "-"],
    ["最高匹配率", bestMatch ? `${bestMatch.rate}%` : "-"],
    ["收货地址", $("#addressInput").value],
    ["计划状态", "待提交"]
  ].map(([label, value]) => `<div><span>${label}</span><b>${value}</b></div>`).join("");
  $("#planDemandRows").innerHTML = demandItems.length
    ? demandItems.map((item) => `<tr><td>${item.name}</td><td>${item.spec}</td><td>${item.qty}</td><td>${item.unit}</td><td>${item.source}</td></tr>`).join("")
    : `<tr><td colspan="5">暂无需求物资清单</td></tr>`;
  $("#planWarehouseRows").innerHTML = selected.length
    ? selected.map((item) => {
      const match = demandMatch(item);
      return `<tr><td>${item.name}</td><td>${item.type}</td><td>${match.rate}%</td><td>${match.available}</td><td>${match.shortage}</td><td>${item.distance}km</td></tr>`;
    }).join("")
    : `<tr><td colspan="6">暂无匹配仓库数据</td></tr>`;
  showOverlay("#planModal");
}

$("#syncPlan").addEventListener("click", openPlanSync);
$("#confirmPlanSync").addEventListener("click", () => {
  $("#confirmPlanSync").textContent = "已生成需求计划";
  setTimeout(() => {
    $("#confirmPlanSync").textContent = "确认生成需求计划";
    closeOverlays();
  }, 700);
});

$("#reset").addEventListener("click", () => {
  $("#companyFilter").value = "科创公司";
  $("#regionFilter").value = "华东片区";
  $("#typeFilter").value = "全部";
  $("#categoryFilter").value = "模架体系";
  $("#stockFilter").value = "全部";
  $("#releaseFilter").value = "30 天内";
  $("#distanceFilter").value = "300km 内";
  $("#addressInput").value = "上海市嘉定区安亭镇项目部";
  demandItems = [
    { code: "CP-DS-001", name: "墩身标准节", spec: "2.0m", unit: "块", qty: 120, source: "产品清单" },
    { code: "CP-LS-020", name: "连接螺栓", spec: "M20", unit: "件", qty: 3000, source: "产品清单" },
    { code: "CP-MB-150", name: "钢模板", spec: "1500x1000", unit: "块", qty: 80, source: "产品清单" }
  ];
  updateDemandPickerText();
  renderAll();
});

$("#sortMatch").addEventListener("click", () => {
  sortMode = "match";
  $("#sortMatch").classList.add("active");
  $("#sortDistance").classList.remove("active");
  renderAll();
});

$("#sortDistance").addEventListener("click", () => {
  sortMode = "distance";
  $("#sortDistance").classList.add("active");
  $("#sortMatch").classList.remove("active");
  renderAll();
});

$("#demandTab").addEventListener("click", () => setWarehouseTab("demand"));
$("#inventoryTab").addEventListener("click", () => setWarehouseTab("inventory"));
document.querySelectorAll(".closeModal").forEach((button) => button.addEventListener("click", closeOverlays));
$("#mask").addEventListener("click", closeOverlays);

updateDemandPickerText();
renderAll();
