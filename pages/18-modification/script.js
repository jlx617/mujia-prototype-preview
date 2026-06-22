const records = [
  { no:"GZ-202606-001", order:"ZL-202606-018", oldProduct:"标准面板", oldSpec:"1500×3000×6mm", oldCode:"PC-202604-031", newProduct:"异形面板", newSpec:"1500×2400×6mm", newCode:"待入库生成", qty:"24 件", newQty:"24 件", approval:"审批中", status:"待执行", outbound:"待生成", inbound:"未生成", costStatus:"待更新", cost:"¥7,200.00", unit:"科创建模加工班组", reason:"订单现场规格调整，需切割并重新焊接加强肋。", warehouse:"上海物料站", applicant:"李晨", date:"2026-06-18" },
  { no:"GZ-202606-002", order:"DB-202606-006", oldProduct:"钢支撑", oldSpec:"609×16×6000mm", oldCode:"ZC-GZ-0921~0928", newProduct:"短节钢支撑", newSpec:"609×16×3000mm", newCode:"ZC-GZ-0921A~0936A", qty:"8 根", newQty:"16 根", approval:"通过", status:"执行中", outbound:"已出库", inbound:"待入库", costStatus:"核算中", cost:"¥4,680.00", unit:"苏州钢构加工中心", reason:"项目短节支撑需求，将长节一分为二并补焊端板。", warehouse:"苏州装备中心", applicant:"周航", date:"2026-06-15" },
  { no:"GZ-202605-016", order:"ZL-202605-041", oldProduct:"贝雷片", oldSpec:"321 型标准片", oldCode:"BL-202503-118", newProduct:"加强贝雷片", newSpec:"321 型加强片", newCode:"BL-GZ-202605-022", qty:"12 片", newQty:"12 片", approval:"通过", status:"已完成", outbound:"已出库", inbound:"已入库", costStatus:"已更新", cost:"¥13,560.00", unit:"上海桥装装备有限公司", reason:"按项目承载要求增焊加强弦杆。", warehouse:"上海物料站", applicant:"王立", date:"2026-05-28" },
  { no:"GZ-202605-013", order:"ZL-202605-033", oldProduct:"标准面板", oldSpec:"1200×3000×6mm", oldCode:"PC-202602-109", newProduct:"转角模板", newSpec:"600+600×3000mm", newCode:"-", qty:"18 块", newQty:"18 块", approval:"驳回", status:"待执行", outbound:"未生成", inbound:"未生成", costStatus:"未开始", cost:"¥9,800.00", unit:"科创建模加工班组", reason:"现场墙角模板规格变更。", warehouse:"江北项目仓", applicant:"陈凯", date:"2026-06-10" }
];
let current = records[0];
const $ = id => document.getElementById(id);
const tagClass = { "待提交":"tag-yellow","审批中":"tag-orange","通过":"tag-green","驳回":"tag-red","待执行":"tag-yellow","执行中":"tag-blue","已完成":"tag-green","待生成":"tag-yellow","未生成":"tag-gray","已出库":"tag-green","待入库":"tag-yellow","已入库":"tag-green","待更新":"tag-yellow","核算中":"tag-blue","已更新":"tag-green","未开始":"tag-gray" };
const tag = value => `<span class="tag ${tagClass[value] || "tag-gray"}">${value}</span>`;
const field = (label,value) => `<div><dt>${label}</dt><dd>${value}</dd></div>`;

function filtered() {
  const no = $("noFilter").value.trim(), order = $("orderFilter").value.trim(), approval = $("approvalFilter").value, status = $("statusFilter").value, warehouse = $("topWarehouse").value;
  return records.filter(item => (!no || item.no.includes(no)) && (!order || item.order.includes(order)) && (approval === "全部" || item.approval === approval) && (status === "全部" || item.status === status) && item.warehouse === warehouse);
}
function renderRows() {
  const list = filtered();
  $("recordRows").innerHTML = list.map((item,index) => `<tr>
    <td title="${item.no}">${item.no}</td><td>${item.order}</td><td>${item.oldProduct}</td><td title="${item.oldSpec}">${item.oldSpec}</td><td>${item.newProduct}</td><td title="${item.newSpec}">${item.newSpec}</td><td>${item.qty}</td><td>${tag(item.approval)}</td><td>${tag(item.outbound)}</td><td>${tag(item.inbound)}</td><td>${tag(item.costStatus)}</td>
    <td><div class="row-actions"><button class="link-btn" data-action="detail" data-index="${index}">查看</button>${item.approval === "待提交" || item.approval === "驳回" ? `<button class="link-btn" data-action="edit" data-index="${index}">编辑</button>` : ""}${item.approval === "审批中" ? `<button class="link-btn" data-action="approve" data-index="${index}">审批</button>` : ""}</div></td></tr>`).join("");
  $("emptyState").classList.toggle("hidden", list.length > 0);
  document.querySelectorAll(".row-actions button").forEach(button => button.onclick = () => {
    current = list[Number(button.dataset.index)];
    if (button.dataset.action === "detail") showDetail();
    if (button.dataset.action === "edit") showEdit(false);
    if (button.dataset.action === "approve") openApproval();
  });
}
function switchView(id) {
  document.querySelectorAll(".view").forEach(view => view.classList.remove("is-active"));
  $(id).classList.add("is-active");
  location.hash = id.replace("View","");
  scrollTo({top:0});
}
function showDetail() {
  $("detailTitle").textContent = `${current.no} 改制详情`;
  $("baseInfo").innerHTML = [["改制单号",current.no],["来源订单",current.order],["当前仓库",current.warehouse],["执行单位",current.unit],["改制原因",current.reason],["数量",current.qty],["申请人",current.applicant],["计划完成日期",current.date],["审批状态",tag(current.approval)],["改制状态",tag(current.status)]].map(x=>field(...x)).join("");
  $("oldInfo").innerHTML = [["原产品",current.oldProduct],["原规格",current.oldSpec],["原批次/编号",current.oldCode],["出库数量",current.qty],["改制前成本","¥48,000.00"],["库存状态",current.outbound === "已出库" ? "改制占用" : "在库"]].map(x=>field(...x)).join("");
  $("newInfo").innerHTML = [["新产品",current.newProduct],["新规格",current.newSpec],["新批次/编号",current.newCode],["成品数量",current.newQty],["数量变化",current.qty === current.newQty ? "无变化" : `${current.qty} → ${current.newQty}`],["前后关系",`${current.oldCode} → ${current.newCode}`]].map(x=>field(...x)).join("");
  $("outboundInfo").innerHTML = [["出库状态",tag(current.outbound)],["出库单号",current.outbound === "已出库" ? `CK-GZ-${current.no.slice(-3)}` : "-"],["确认人",current.outbound === "已出库" ? "赵敏" : "-"],["确认时间",current.outbound === "已出库" ? "2026-06-09 10:26" : "-"]].map(x=>field(...x)).join("");
  $("inboundInfo").innerHTML = [["入库状态",tag(current.inbound)],["入库单号",current.inbound === "已入库" ? `RK-GZ-${current.no.slice(-3)}` : "-"],["实收数量",current.inbound === "已入库" ? current.newQty : "-"],["入库库区",current.inbound === "已入库" ? "A区 / A-03-06" : "-"]].map(x=>field(...x)).join("");
  $("costInfo").innerHTML = [["成本状态",tag(current.costStatus)],["原物资成本","¥48,000.00"],["改制成本加项",current.cost],["改制后成本","¥55,200.00"],["成本归集","计入新物资批次成本"],["更新时间",current.costStatus === "已更新" ? "2026-05-28 16:42" : "-"]].map(x=>field(...x)).join("");
  $("approvalFlow").innerHTML = `<li><strong>申请提交</strong><span>${current.applicant} · 2026-06-08 09:18</span></li><li><strong>${current.approval === "驳回" ? "审批驳回" : current.approval === "审批中" ? "等待负责人审批" : "负责人审批通过"}</strong><span>${current.approval === "审批中" ? "当前节点：仓库负责人" : "审批人：赵敏"}</span></li><li><strong>库存与台账更新</strong><span>${current.approval === "通过" ? "按出入库确认结果更新" : "审批通过后执行"}</span></li>`;
  $("attachments").innerHTML = [["改制图纸-V2.pdf","2.8 MB"],["加工报价单.pdf","1.1 MB"],["现场测量照片.zip","8.6 MB"]].map(x=>`<div class="attachment-card"><strong>${x[0]}</strong><span>${x[1]} · 可下载</span></div>`).join("");
  const canEdit = current.approval === "待提交" || current.approval === "驳回";
  $("detailEditBtn").style.display = canEdit ? "" : "none";
  $("detailApproveBtn").style.display = current.approval === "审批中" ? "" : "none";
  switchView("detailView");
}
function showEdit(isNew) {
  const data = isNew ? records[0] : current;
  $("editTitle").textContent = isNew ? "新增改制" : "编辑改制";
  $("editCrumb").textContent = isNew ? "新增" : "编辑";
  $("editNo").value = isNew ? "系统自动生成" : data.no;
  $("editOrder").value = data.order; $("editUnit").value = data.unit; $("editQty").value = parseInt(data.qty); $("editDate").value = data.date; $("editReason").value = data.reason;
  $("editOldProduct").value = data.oldProduct; $("editOldSpec").value = data.oldSpec; $("editOldCode").value = data.oldCode; $("editNewProduct").value = data.newProduct; $("editNewSpec").value = data.newSpec; $("editNewQty").value = parseInt(data.newQty); $("editCost").value = data.cost.replace(/[¥,]/g,"");
  switchView("editView");
}
function openApproval() { $("approvalModal").classList.remove("hidden"); }
function closeApproval() { $("approvalModal").classList.add("hidden"); }
function toast(message) { $("toast").textContent = message; $("toast").classList.remove("hidden"); setTimeout(()=>$("toast").classList.add("hidden"),2200); }

$("queryBtn").onclick = renderRows;
$("resetBtn").onclick = () => { $("noFilter").value=""; $("orderFilter").value=""; $("approvalFilter").value="全部"; $("statusFilter").value="全部"; renderRows(); };
$("topWarehouse").onchange = renderRows;
$("createBtn").onclick = () => showEdit(true);
$("syncBtn").onclick = () => toast("已同步 2 条订单改制任务");
$("exportBtn").onclick = () => toast("已按当前条件生成改制台账");
$("detailEditBtn").onclick = () => showEdit(false);
$("detailApproveBtn").onclick = openApproval;
$("saveBtn").onclick = () => toast("改制单已保存");
$("submitBtn").onclick = () => { toast("改制申请已提交审批"); setTimeout(()=>switchView("listView"),500); };
$("uploadBtn").onclick = () => { $("fileText").textContent += "、现场测量照片.zip"; toast("附件已添加"); };
document.querySelectorAll(".backBtn").forEach(button => button.onclick = () => { switchView("listView"); renderRows(); });
$("closeModal").onclick = $("cancelApproval").onclick = closeApproval;
$("confirmApproval").onclick = () => { const result=$("approvalResult").value; current.approval=result === "同意" ? "通过" : "驳回"; closeApproval(); toast(`审批${result === "同意" ? "通过" : "已驳回"}`); renderRows(); switchView("listView"); };
$("approvalModal").onclick = event => { if (event.target === $("approvalModal")) closeApproval(); };
function initFromHash() {
  if (location.hash === "#detail") showDetail();
  else if (location.hash === "#edit") showEdit(false);
  else switchView("listView");
}
window.onhashchange = () => {
  if (!location.hash || location.hash === "#list") switchView("listView");
};
renderRows();
initFromHash();
