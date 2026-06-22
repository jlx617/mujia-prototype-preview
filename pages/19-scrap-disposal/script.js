const records=[
  {no:"FJ-202606-001",org:"科创公司上海物料站",items:2,weight:"8.46 吨",type:"报废",approval:"审批中",weigh:"待过磅",payment:"待收款",outbound:"未发起",execute:"待执行",warehouse:"上海物料站",applicant:"李晨",date:"2026-06-18",special:true,reason:"长期露天使用后严重锈蚀变形，经检验已无修复使用价值。"},
  {no:"FJ-202606-002",org:"科创公司苏州装备中心",items:3,weight:"12.30 吨",type:"处置",approval:"通过",weigh:"已过磅",payment:"已收款",outbound:"待确认",execute:"已处置",warehouse:"苏州装备中心",applicant:"周航",date:"2026-06-15",special:false,reason:"退租物资检验不合格，按审批方案集中处置。"},
  {no:"FJ-202605-018",org:"江北项目部",items:1,weight:"4.18 吨",type:"报废",approval:"通过",weigh:"已过磅",payment:"不涉及",outbound:"已出库",execute:"已出库",warehouse:"江北项目仓",applicant:"陈凯",date:"2026-05-28",special:false,reason:"项目现场损毁且无法修复，申请报废出库。"},
  {no:"FJ-202605-015",org:"科创公司上海物料站",items:2,weight:"6.72 吨",type:"处置",approval:"驳回",weigh:"待过磅",payment:"待收款",outbound:"未发起",execute:"待执行",warehouse:"上海物料站",applicant:"王立",date:"2026-06-10",special:false,reason:"淘汰规格物资集中处置。"},
  {no:"FJ-202605-012",org:"科创公司上海物料站",items:1,weight:"3.25 吨",type:"报废",approval:"待提交",weigh:"待过磅",payment:"不涉及",outbound:"未发起",execute:"待执行",warehouse:"上海物料站",applicant:"赵宁",date:"2026-06-20",special:false,reason:"盘点发现严重变形，待提交报废审批。"}
];
let current=records[0];
const $=id=>document.getElementById(id);
const tagClass={"待提交":"tag-yellow","审批中":"tag-orange","通过":"tag-green","驳回":"tag-red","待过磅":"tag-yellow","已过磅":"tag-green","待收款":"tag-yellow","已收款":"tag-green","不涉及":"tag-gray","未发起":"tag-gray","待确认":"tag-orange","已出库":"tag-green","待执行":"tag-yellow","已处置":"tag-blue"};
const tag=value=>`<span class="tag ${tagClass[value]||"tag-gray"}">${value}</span>`;
const field=(label,value)=>`<div><dt>${label}</dt><dd>${value}</dd></div>`;
const role=()=>$("roleSwitch").value;

function filtered(){
  const no=$("noFilter").value.trim(),type=$("typeFilter").value,approval=$("approvalFilter").value,execute=$("executeFilter").value,warehouse=$("topWarehouse").value;
  return records.filter(item=>(!no||item.no.includes(no))&&(type==="全部"||item.type===type)&&(approval==="全部"||item.approval===approval)&&(execute==="全部"||item.execute===execute)&&item.warehouse===warehouse);
}
function renderRows(){
  const list=filtered();
  $("recordRows").innerHTML=list.map((item,index)=>`<tr>
    <td>${item.no}</td><td title="${item.org}">${item.org}</td><td>${item.items} 项</td><td>${item.weight}</td><td>${item.type}</td><td>${tag(item.approval)}</td><td>${tag(item.weigh)}</td><td>${tag(item.payment)}</td><td>${tag(item.outbound)}</td>
    <td><div class="row-actions"><button class="link-btn" data-action="detail" data-index="${index}">查看</button>${role()!=="approver"&&["待提交","驳回"].includes(item.approval)?`<button class="link-btn" data-action="edit" data-index="${index}">编辑</button>`:""}${role()==="approver"&&item.approval==="审批中"?`<button class="link-btn" data-action="approve" data-index="${index}">审批</button>`:""}</div></td></tr>`).join("");
  $("emptyState").classList.toggle("hidden",list.length>0);
  $("createBtn").style.display=role()==="approver"?"none":"";
  document.querySelectorAll(".row-actions button").forEach(button=>button.onclick=()=>{current=list[Number(button.dataset.index)];if(button.dataset.action==="detail")showDetail();if(button.dataset.action==="edit")showEdit(false);if(button.dataset.action==="approve")openModal("approvalModal");});
}
function switchView(id){
  document.querySelectorAll(".view").forEach(view=>view.classList.remove("is-active"));
  $(id).classList.add("is-active");
  location.hash=id.replace("View","");
  scrollTo({top:0});
}
function materials(){
  return current.items===1
    ?[["标准面板","1200×3000×6mm","24","块",current.weight,"严重变形开裂","¥6,200.00","现场损毁"]]
    :[["钢支撑","609×16×6000mm","18","根","7.82 吨","严重锈蚀变形","¥15,200.00","待过磅复核"],["标准面板","1500×3000×6mm","8","块","0.64 吨","多处开裂穿孔","¥1,350.00","集中处置"]];
}
function showDetail(){
  $("detailTitle").textContent=`${current.no} 处置申请详情`;
  $("baseInfo").innerHTML=[["处置单号",current.no],["当前仓库",current.warehouse],["申请方",current.org],["处置类型",current.type],["物资项数",`${current.items} 项`],["预估重量",current.weight],["申请人",current.applicant],["计划处置日期",current.date],["审批状态",tag(current.approval)],["执行状态",tag(current.execute)],["特殊/大额",current.special?"是，追加领导审批":"否"],["申请说明",current.reason]].map(x=>field(...x)).join("");
  $("materialRows").innerHTML=materials().map(row=>`<tr>${row.map(cell=>`<td title="${cell}">${cell}</td>`).join("")}</tr>`).join("");
  $("settlementInfo").innerHTML=[["过磅状态",tag(current.weigh)],["实际重量",current.weigh==="已过磅"?"12.18 吨":"-"],["过磅单号",current.weigh==="已过磅"?"BG-202606-021":"-"],["收款状态",tag(current.payment)],["实际收款",current.payment==="已收款"?"¥28,460.00":"-"],["收款日期",current.payment==="已收款"?"2026-06-10":"-"]].map(x=>field(...x)).join("");
  $("outboundInfo").innerHTML=[["出库状态",tag(current.outbound)],["报废出库单",current.outbound==="未发起"?"-":`CK-BF-${current.no.slice(-3)}`],["出库发起人",current.outbound==="未发起"?"-":"周航"],["确认人",current.outbound==="已出库"?"赵敏":"-"],["库存更新",current.outbound==="已出库"?"已扣减并生成台账":"确认出库后更新"],["出库时间",current.outbound==="已出库"?"2026-05-28 16:32":"-"]].map(x=>field(...x)).join("");
  const leaderStep=current.special?`<li><strong>${current.approval==="审批中"?"等待领导审批":"领导审批通过"}</strong><span>${current.approval==="审批中"?"当前节点：分管领导":"审批人：孙明"}</span></li>`:"";
  $("approvalFlow").innerHTML=`<li><strong>申请提交</strong><span>${current.applicant} · 2026-06-08 09:18</span></li><li><strong>${current.approval==="驳回"?"负责人审批驳回":current.approval==="审批中"&&!current.special?"等待负责人审批":"负责人审批通过"}</strong><span>${current.approval==="审批中"&&!current.special?"当前节点：仓库负责人":"审批人：赵敏"}</span></li>${leaderStep}<li><strong>报废出库确认</strong><span>${current.outbound==="已出库"?"已由非发起人确认并更新库存":"审批通过后选择库存并双人确认"}</span></li>`;
  $("attachments").innerHTML=[["现场照片-报废物资.zip","现场照片"],["二级公司处置审批资料.pdf","审批资料"],[current.weigh==="已过磅"?"过磅单-BG-202606-021.pdf":"过磅单（待上传）","过磅单"],[current.payment==="已收款"?"收款凭证-28460.pdf":"收款凭证（待上传）","收款凭证"]].map(x=>`<div class="attachment-card"><strong>${x[0]}</strong><span>${x[1]} · ${x[0].includes("待上传")?"暂无文件":"可下载"}</span></div>`).join("");
  $("detailEditBtn").style.display=role()!=="approver"&&["待提交","驳回"].includes(current.approval)?"":"none";
  $("detailApproveBtn").style.display=role()==="approver"&&current.approval==="审批中"?"":"none";
  $("detailOutboundBtn").style.display=role()==="warehouse"&&current.approval==="通过"&&current.outbound==="未发起"?"":"none";
  $("detailConfirmBtn").style.display=role()==="approver"&&current.approval==="通过"&&current.outbound==="待确认"?"":"none";
  switchView("detailView");
}
function showEdit(isNew){
  $("editTitle").textContent=isNew?"新增处置申请":"编辑处置申请";
  $("editCrumb").textContent=isNew?"新增":"编辑";
  $("editNo").value=isNew?"系统自动生成":current.no;
  $("editType").value=isNew?"报废":current.type;
  $("editApplicantOrg").value=isNew?"科创公司上海物料站":current.org;
  $("editDate").value=isNew?"2026-06-18":current.date;
  $("editSpecial").value=!isNew&&current.special?"是，追加领导审批":"否";
  $("editReason").value=isNew?"长期露天使用后严重锈蚀变形，经检验已无修复使用价值，申请集中报废处置。":current.reason;
  switchView("editView");
}
function openModal(id){$(id).classList.remove("hidden");}
function closeModal(id){$(id).classList.add("hidden");}
function toast(message){$("toast").textContent=message;$("toast").classList.remove("hidden");setTimeout(()=>$("toast").classList.add("hidden"),2200);}

$("queryBtn").onclick=renderRows;
$("resetBtn").onclick=()=>{$("noFilter").value="";$("typeFilter").value="全部";$("approvalFilter").value="全部";$("executeFilter").value="全部";renderRows();};
$("topWarehouse").onchange=renderRows;
$("roleSwitch").onchange=()=>{renderRows();if($("detailView").classList.contains("is-active"))showDetail();};
$("createBtn").onclick=()=>showEdit(true);
$("exportBtn").onclick=()=>toast("已按当前条件生成废旧处置台账");
$("detailEditBtn").onclick=()=>showEdit(false);
$("detailApproveBtn").onclick=()=>openModal("approvalModal");
$("detailOutboundBtn").onclick=()=>{$("inventoryWarehouse").textContent=current.warehouse;openModal("inventoryModal");};
$("detailConfirmBtn").onclick=()=>openModal("confirmModal");
$("saveBtn").onclick=()=>toast("处置申请已保存");
$("submitBtn").onclick=()=>{toast("处置申请已提交审批");setTimeout(()=>switchView("listView"),500);};
$("uploadBtn").onclick=()=>{if(!$("fileText").textContent.includes("过磅单"))$("fileText").textContent+="、过磅单.pdf";toast("附件已添加");};
$("addMaterialBtn").onclick=()=>toast("已新增一行物资明细");
document.querySelectorAll(".backBtn").forEach(button=>button.onclick=()=>{switchView("listView");renderRows();});
document.querySelectorAll("[data-close]").forEach(button=>button.onclick=()=>closeModal(button.dataset.close));
$("confirmApproval").onclick=()=>{current.approval=$("approvalResult").value==="同意"?"通过":"驳回";closeModal("approvalModal");toast(current.approval==="通过"?"审批通过":"审批已驳回");showDetail();};
$("confirmInventory").onclick=()=>{current.outbound="待确认";closeModal("inventoryModal");toast("报废出库已发起，等待另一名确认人确认");showDetail();};
$("confirmOutbound").onclick=()=>{current.outbound="已出库";current.execute="已出库";closeModal("confirmModal");toast("出库确认完成，库存已扣减并生成台账");showDetail();};
document.querySelectorAll(".modal").forEach(modal=>modal.onclick=event=>{if(event.target===modal)closeModal(modal.id);});
function initFromHash(){if(location.hash==="#detail")showDetail();else if(location.hash==="#edit")showEdit(false);else switchView("listView");}
window.onhashchange=()=>{if(!location.hash||location.hash==="#list")switchView("listView");};
renderRows();
initFromHash();
