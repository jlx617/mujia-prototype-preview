const records = [
  {code:"JSZL-202606-001",supplier:"上海科建物资有限公司",business:"采购",document:"CG-202605-018",amount:286400,status:"待确认",approval:"线上确认",files:4,updated:"2026-06-10 16:24",credit:"91310115MA1K4X8P2Q",contact:"张敏",phone:"138 0186 4721",bank:"中国建设银行上海浦东支行",account:"3100 **** **** 2689",period:"2026-05-01 至 2026-05-31",remark:"5月份钢模板及配套材料采购结算。"},
  {code:"JSZL-202606-002",supplier:"江苏路桥装备制造有限公司",business:"改制",document:"GZ-202606-006",amount:74800,status:"待提交",approval:"线下确认",files:2,updated:"2026-06-09 11:05",credit:"91320594MA20X7T83A",contact:"周凯",phone:"139 6218 0935",bank:"招商银行苏州工业园区支行",account:"5129 **** **** 6018",period:"2026-05-20 至 2026-06-08",remark:"异形面板改制加工费及辅材结算。"},
  {code:"JSZL-202605-016",supplier:"安徽联创建筑设备有限公司",business:"翻新",document:"FX-202605-012",amount:126500,status:"已归档",approval:"线下确认",files:6,updated:"2026-06-06 09:42",credit:"91340100MA2MR61F7C",contact:"王倩",phone:"136 9560 1824",bank:"徽商银行合肥科技支行",account:"1020 **** **** 7721",period:"2026-05-01 至 2026-05-25",remark:"钢支撑除锈、校正及防腐翻新费用。"},
  {code:"JSZL-202605-014",supplier:"湖北桥建钢构有限公司",business:"采购",document:"CG-202605-009",amount:418900,status:"已归档",approval:"线上确认",files:5,updated:"2026-06-03 14:18",credit:"91420112MA4KQ5N12W",contact:"赵磊",phone:"137 0712 6638",bank:"中国工商银行武汉东西湖支行",account:"3202 **** **** 1180",period:"2026-04-25 至 2026-05-28",remark:"钢支撑、连接件及紧固件采购结算。"},
  {code:"JSZL-202605-011",supplier:"浙江华构机械服务有限公司",business:"其他",document:"QT-202605-003",amount:36200,status:"待确认",approval:"线上确认",files:3,updated:"2026-06-02 10:30",credit:"91330110MA2B1K9R4E",contact:"陈洁",phone:"135 8872 4066",bank:"杭州银行余杭支行",account:"3301 **** **** 4406",period:"2026-05-01 至 2026-05-31",remark:"现场技术服务与运输辅助费用。"}
];

let current = records[0];
let archiveTarget = null;
const $ = selector => document.querySelector(selector);
const money = value => Number(value).toLocaleString("zh-CN",{minimumFractionDigits:2});
const tag = status => `<span class="tag ${status==="已归档"?"done":status==="待确认"?"pending":"wait"}">${status}</span>`;

function showView(name){
  document.querySelectorAll(".view").forEach(view=>view.classList.remove("active"));
  $(`#${name}View`).classList.add("active");
  window.scrollTo(0,0);
}

function route(){
  const hash = location.hash || "#list";
  if(hash.startsWith("#detail/")){
    current = records.find(item=>item.code===decodeURIComponent(hash.split("/")[1])) || records[0];
    renderDetail();
    showView("detail");
  }else if(hash.startsWith("#edit")){
    const code = hash.split("/")[1];
    current = records.find(item=>item.code===decodeURIComponent(code || "")) || null;
    renderEdit(Boolean(current));
    showView("edit");
  }else{
    showView("list");
  }
}

function renderRows(data=records){
  $("#recordRows").innerHTML = data.map(item=>`<tr>
    <td>${item.code}</td><td title="${item.supplier}">${item.supplier}</td><td>${item.business}</td><td>${item.document}</td>
    <td class="money">${money(item.amount)}</td><td>${tag(item.status)}</td><td><span class="tag ${item.approval==="线下确认"?"offline":"pending"}">${item.approval}</span></td>
    <td>${item.files} 个</td><td>${item.updated}</td><td><div class="row-actions">
      <button class="link" data-view="${item.code}">查看</button>
      ${item.status==="已归档"?"":`<button class="link" data-edit="${item.code}">编辑</button><button class="link archive" data-archive="${item.code}">归档</button>`}
    </div></td></tr>`).join("");
  $("#emptyState").classList.toggle("hidden",data.length>0);
}

function info(items){return items.map(([label,value])=>`<div><dt>${label}</dt><dd>${value}</dd></div>`).join("")}

function renderDetail(){
  $("#supplierInfo").innerHTML=info([["供应商名称",current.supplier],["统一社会信用代码",current.credit],["联系人",current.contact],["联系电话",current.phone],["开户银行",current.bank],["银行账号",current.account]]);
  $("#settlementInfo").innerHTML=info([["资料编号",current.code],["关联业务",current.business],["关联单据",current.document],["结算期间",current.period],["结算金额",`¥ ${money(current.amount)}`],["资料状态",tag(current.status)],["确认方式",current.approval],["最近更新",current.updated],["结算说明",current.remark]]);
  const names=["供应商结算单.pdf","采购对账明细.xlsx","增值税发票.pdf","合同补充协议.pdf","验收记录.pdf","付款申请.pdf"];
  $("#fileList").innerHTML=names.slice(0,current.files).map((name,index)=>`<div class="file"><strong>${name}</strong><span>${index%2?"1.8 MB":"826 KB"} · 2026-06-0${Math.min(index+3,9)}</span><button class="link">下载</button></div>`).join("");
  $("#businessRows").innerHTML=`<tr><td>${current.business}</td><td>${current.document}</td><td>${current.business==="采购"?"钢模板及配套材料":"模架工装服务费用"}</td><td>2026-05-28</td><td class="money">${money(current.amount)}</td><td><span class="tag done">已完成</span></td></tr>`;
  $("#confirmList").innerHTML=`<li><strong>资料登记 · ${current.contact}</strong><span>2026-06-02 09:18　上传供应商结算资料并关联业务单据</span></li><li><strong>业务复核 · 采购人员</strong><span>2026-06-06 15:36　关联单据及金额核对完成</span></li>${current.status==="已归档"?'<li><strong>财务确认 · 财务人员</strong><span>2026-06-06 16:42　确认资料完整并完成归档</span></li>':'<li><strong>财务确认</strong><span>待处理</span></li>'}`;
  $("#detailEditBtn").classList.toggle("hidden",current.status==="已归档");
}

function renderEdit(isEdit){
  $("#editHeading").textContent=isEdit?"编辑结算资料":"新增结算资料";
  $("#editCrumb").textContent=isEdit?"编辑":"新增";
  const data=current||records[0];
  $("#editSupplier").value=isEdit?data.supplier:"";
  $("#editCreditCode").value=isEdit?data.credit:"";
  $("#editContact").value=isEdit?data.contact:"";
  $("#editPhone").value=isEdit?data.phone:"";
  $("#editBank").value=isEdit?data.bank:"";
  $("#editAccount").value=isEdit?data.account:"";
  $("#editBusiness").value=isEdit?data.business:"采购";
  $("#editDocument").value=isEdit?data.document:"";
  $("#editAmount").value=isEdit?money(data.amount).replace(/,/g,""):"";
  $("#editStart").value="2026-05-01";
  $("#editEnd").value="2026-05-31";
  $("#editApproval").value=isEdit?data.approval:"线上确认";
  $("#editRemark").value=isEdit?data.remark:"";
}

function toast(message){$("#toast").textContent=message;$("#toast").classList.remove("hidden");setTimeout(()=>$("#toast").classList.add("hidden"),1800)}
function closeModals(){document.querySelectorAll(".modal").forEach(modal=>modal.classList.add("hidden"))}

$("#filterForm").addEventListener("submit",event=>{
  event.preventDefault();
  const supplier=$("#supplierFilter").value.trim(),code=$("#codeFilter").value.trim(),business=$("#businessFilter").value,status=$("#statusFilter").value;
  renderRows(records.filter(item=>(!supplier||item.supplier.includes(supplier))&&(!code||item.code.includes(code))&&(!business||item.business===business)&&(!status||item.status===status)));
});
$("#resetBtn").onclick=()=>{$("#filterForm").reset();renderRows()};
$("#recordRows").onclick=event=>{
  const button=event.target.closest("button");if(!button)return;
  if(button.dataset.view)location.hash=`detail/${button.dataset.view}`;
  if(button.dataset.edit)location.hash=`edit/${button.dataset.edit}`;
  if(button.dataset.archive){archiveTarget=records.find(item=>item.code===button.dataset.archive);$("#archiveModal").classList.remove("hidden")}
};
$("#createBtn").onclick=()=>location.hash="edit/new";
$("#detailEditBtn").onclick=()=>location.hash=`edit/${current.code}`;
document.querySelectorAll("[data-back]").forEach(button=>button.onclick=()=>location.hash="list");
$("#uploadBtn").onclick=()=>$("#uploadModal").classList.remove("hidden");
$("#uploadPanel").onclick=()=>{toast("已选择文件：供应商结算补充资料.pdf");$("#uploadedFiles").textContent+="　供应商结算补充资料.pdf"};
$("#exportBtn").onclick=()=>toast("结算资料台账已导出");
$("#confirmUpload").onclick=()=>{closeModals();toast("附件上传成功")};
$("#confirmArchive").onclick=()=>{if(archiveTarget)archiveTarget.status="已归档";closeModals();renderRows();toast("结算资料已归档")};
document.querySelectorAll("[data-close]").forEach(button=>button.onclick=closeModals);
$("#saveBtn").onclick=()=>toast("结算资料已保存");
$("#editForm").addEventListener("submit",event=>event.preventDefault());
$("#submitBtn").onclick=()=>{if(!$("#editSupplier").value||!$("#editDocument").value||!$("#editAmount").value){toast("请完善必填信息");return}toast("已提交确认");setTimeout(()=>location.hash="list",700)};
window.addEventListener("hashchange",route);
renderRows();
route();
