const settlements = [
  {code:"JS-202606-008",customer:"华东高架 3 标项目部",order:"ZL-202606-018",period:"2026-05-01 至 2026-05-31",start:"2026-05-01",end:"2026-05-31",time:186420,quantity:42800,fixed:12000,adjust:-3200,total:238020,status:"待确认",contract:"KC-ZL-2026-018"},
  {code:"JS-202606-007",customer:"沪苏湖站房项目部",order:"ZL-202605-026",period:"2026-05-01 至 2026-05-31",start:"2026-05-01",end:"2026-05-31",time:96500,quantity:18600,fixed:8000,adjust:0,total:123100,status:"已确认",contract:"KC-ZL-2026-011"},
  {code:"JS-202605-019",customer:"苏州综合管廊二期项目部",order:"ZL-202604-035",period:"2026-04-01 至 2026-04-30",start:"2026-04-01",end:"2026-04-30",time:78240,quantity:0,fixed:36000,adjust:1500,total:115740,status:"已导出",contract:"KC-ZL-2026-006"},
  {code:"JS-202606-009",customer:"汉江桥梁 2 标项目部",order:"ZL-202606-022",period:"2026-06-01 至 2026-06-10",start:"2026-06-01",end:"2026-06-10",time:0,quantity:0,fixed:0,adjust:0,total:0,status:"待生成",contract:"KC-ZL-2026-022"}
];

let selected = settlements[0];
let editFees = [];
const $ = id => document.getElementById(id);
const money = value => `¥ ${Number(value).toLocaleString("zh-CN",{minimumFractionDigits:2})}`;

function showView(name){
  ["listView","detailView","editView"].forEach(id=>$(id).classList.toggle("hidden",id!==name));
  location.hash = name==="listView" ? "list" : name==="detailView" ? `detail/${selected.code}` : "edit";
  window.scrollTo(0,0);
}

function filteredRows(){
  const code=$("codeFilter").value.trim(),customer=$("customerFilter").value.trim(),order=$("orderFilter").value.trim(),status=$("statusFilter").value,start=$("startFilter").value,end=$("endFilter").value;
  return settlements.filter(x=>(!code||x.code.includes(code))&&(!customer||x.customer.includes(customer))&&(!order||x.order.includes(order))&&(status==="全部"||x.status===status)&&(!start||x.end>=start)&&(!end||x.start<=end));
}

function actionButtons(item){
  const edit=item.status==="待确认"||item.status==="待生成";
  const confirm=item.status==="待确认";
  return `<div class="row-actions">
    <button class="link view-btn" data-code="${item.code}">查看</button>
    <button class="link edit-btn ${edit?"":"disabled"}" data-code="${item.code}" ${edit?"":"disabled"}>编辑</button>
    <button class="link confirm-btn ${confirm?"":"disabled"}" data-code="${item.code}" ${confirm?"":"disabled"}>确认</button>
    <button class="link export-btn ${item.status==="待生成"?"disabled":""}" data-code="${item.code}" ${item.status==="待生成"?"disabled":""}>导出</button>
  </div>`;
}

function renderList(){
  const rows=filteredRows();
  $("settlementRows").innerHTML=rows.map(item=>`<tr>
    <td><input class="row-check" type="checkbox" data-code="${item.code}"></td><td>${item.code}</td><td>${item.customer}</td><td>${item.order}</td><td>${item.period}</td>
    <td class="num">${money(item.time)}</td><td class="num">${money(item.quantity)}</td><td class="num">${money(item.fixed)}</td><td class="num">${money(item.adjust)}</td><td class="num"><strong>${money(item.total)}</strong></td>
    <td><span class="status ${item.status==="待确认"?"wait":item.status==="已确认"?"done":item.status==="已导出"?"exported":"draft"}">${item.status}</span></td><td>${actionButtons(item)}</td>
  </tr>`).join("");
  $("emptyState").classList.toggle("hidden",rows.length>0);
  bindRows();
}

function feeData(item){
  if(item.status==="待生成") return [];
  return [
    {type:"按时间",name:"标准面板 1500×3000",qty:"120 件 × 31 天",price:42,amount:item.time,adjust:-2000,note:"按实际出库在租天数"},
    {type:"按工程量/数量",name:"异形模板加工服务",qty:"428 ㎡",price:100,amount:item.quantity,adjust:0,note:"依据工程量签认单"},
    {type:"一口价",name:"现场技术服务",qty:"1 项",price:item.fixed,amount:item.fixed,adjust:-1200,note:"本期驻场服务"}
  ].filter(x=>x.amount>0);
}

function renderDetail(){
  const item=selected;
  $("basicInfo").innerHTML=[["结算单号",item.code],["外部客户/项目",item.customer],["结算周期",item.period],["合同编号",item.contract],["结算状态",item.status],["应结金额",money(item.total)]].map(info).join("");
  $("orderInfo").innerHTML=[["关联租赁订单",item.order],["订单性质","收费租赁订单"],["执行仓库",$("warehouseSwitch").value],["费用口径","按时间 / 工程量数量 / 一口价"],["生成时间","2026-06-08 10:26"],["经办人","李晨"]].map(info).join("");
  $("detailFees").innerHTML=feeData(item).map(x=>`<tr><td>${x.type}</td><td>${x.name}</td><td>${x.qty}</td><td>${money(x.price)}</td><td>${money(x.amount)}</td><td>${money(x.adjust)}</td><td>${x.note}</td></tr>`).join("")||`<tr><td colspan="7">尚未生成费用明细</td></tr>`;
  $("amountSummary").innerHTML=`<span>费用合计：${money(item.time+item.quantity+item.fixed)}</span><span>调整合计：${money(item.adjust)}</span><b>应结金额：${money(item.total)}</b>`;
  $("adjustmentRows").innerHTML=item.adjust?`<tr><td>2026-06-08 14:18</td><td>李晨</td><td>在租天数核减、现场服务折让</td><td>${money(item.time+item.quantity+item.fixed)}</td><td>${money(item.total)}</td><td>依据项目签认记录核减停工期费用</td></tr>`:`<tr><td colspan="6">无人工调整记录</td></tr>`;
  $("confirmRecords").innerHTML=item.status==="待确认"?`<li><b>李晨</b> 发起结算确认 <span>2026-06-08 14:25</span></li><li><b>王敏</b> 待确认</li>`:`<li><b>李晨</b> 发起结算确认 <span>2026-06-02 10:10</span></li><li><b>王敏</b> 确认通过 <span>2026-06-03 09:18</span></li>${item.status==="已导出"?'<li><b>赵工</b> 导出结算单 <span>2026-06-05 16:42</span></li>':""}`;
  $("attachments").innerHTML=`<div class="file-item">租赁合同-${item.contract}.pdf <button>下载</button></div><div class="file-item">本期工程量签认单.pdf <button>下载</button></div>`;
  $("detailEdit").style.display=(item.status==="待确认"||item.status==="待生成")?"":"none";
  $("detailConfirm").style.display=item.status==="待确认"?"":"none";
}
function info([label,value]){return `<div class="info-item"><span>${label}</span><strong>${value}</strong></div>`}

function openDetail(code){selected=settlements.find(x=>x.code===code)||settlements[0];renderDetail();showView("detailView")}
function openEdit(code){
  selected=settlements.find(x=>x.code===code)||settlements[0];
  const isNew=!code;
  $("editTitle").textContent=isNew?"生成结算单":"编辑结算单";
  $("editCrumb").textContent=isNew?"生成":"编辑";
  $("editCode").value=isNew?"系统自动生成":selected.code;
  $("editOrder").value=isNew?"":`${selected.order}｜${selected.customer.replace("项目部","")}`;
  $("editCustomer").value=isNew?"":selected.customer;
  $("editStart").value=isNew?"2026-06-01":selected.start;$("editEnd").value=isNew?"2026-06-30":selected.end;$("editContract").value=isNew?"":selected.contract;
  editFees=isNew?[]:feeData(selected).map(x=>({...x}));
  renderEditFees();showView("editView");
}

function renderEditFees(){
  $("editFees").innerHTML=editFees.map((x,i)=>`<tr>
    <td><select data-i="${i}" data-key="type"><option ${x.type==="按时间"?"selected":""}>按时间</option><option ${x.type==="按工程量/数量"?"selected":""}>按工程量/数量</option><option ${x.type==="一口价"?"selected":""}>一口价</option></select></td>
    <td><input data-i="${i}" data-key="name" value="${x.name}"></td><td><input data-i="${i}" data-key="qty" value="${x.qty}"></td><td><input type="number" data-i="${i}" data-key="price" value="${x.price}"></td>
    <td>${money(x.amount)}</td><td><input type="number" data-i="${i}" data-key="adjust" value="${x.adjust}"></td><td><input data-i="${i}" data-key="note" value="${x.note}"></td><td><button type="button" class="link remove-fee" data-i="${i}">删除</button></td>
  </tr>`).join("")||`<tr><td colspan="8">请选择收费租赁订单后带出费用，或新增费用项。</td></tr>`;
  const amount=editFees.reduce((s,x)=>s+Number(x.amount||0),0),adjust=editFees.reduce((s,x)=>s+Number(x.adjust||0),0);
  $("editSummary").innerHTML=`<span>费用合计：${money(amount)}</span><span>调整合计：${money(adjust)}</span><b>应结金额：${money(amount+adjust)}</b>`;
  document.querySelectorAll("#editFees input,#editFees select").forEach(el=>el.onchange=()=>{const x=editFees[el.dataset.i];x[el.dataset.key]=el.type==="number"?Number(el.value):el.value;if(el.dataset.key==="price")x.amount=Number(el.value);renderEditFees()});
  document.querySelectorAll(".remove-fee").forEach(btn=>btn.onclick=()=>{editFees.splice(Number(btn.dataset.i),1);renderEditFees()});
}

function bindRows(){
  document.querySelectorAll(".view-btn").forEach(b=>b.onclick=()=>openDetail(b.dataset.code));
  document.querySelectorAll(".edit-btn:not(.disabled)").forEach(b=>b.onclick=()=>openEdit(b.dataset.code));
  document.querySelectorAll(".confirm-btn:not(.disabled)").forEach(b=>b.onclick=()=>{selected=settlements.find(x=>x.code===b.dataset.code);$("confirmModal").classList.remove("hidden")});
  document.querySelectorAll(".export-btn:not(.disabled)").forEach(b=>b.onclick=()=>toast(`已导出 ${b.dataset.code}`));
}
function toast(text){$("toast").textContent=text;$("toast").classList.remove("hidden");setTimeout(()=>$("toast").classList.add("hidden"),1800)}

$("queryBtn").onclick=renderList;
$("resetBtn").onclick=()=>{["codeFilter","customerFilter","orderFilter","startFilter","endFilter"].forEach(id=>$(id).value="");$("statusFilter").value="全部";renderList()};
$("createBtn").onclick=()=>openEdit();
$("batchExportBtn").onclick=()=>{const count=document.querySelectorAll(".row-check:checked").length;toast(count?`已导出选中的 ${count} 张结算单`:"请先选择结算单")};
$("checkAll").onchange=e=>document.querySelectorAll(".row-check").forEach(x=>x.checked=e.target.checked);
document.querySelectorAll(".back-btn").forEach(b=>b.onclick=()=>showView("listView"));
$("detailEdit").onclick=()=>openEdit(selected.code);$("detailExport").onclick=()=>toast(`已导出 ${selected.code}`);
$("detailConfirm").onclick=()=> $("confirmModal").classList.remove("hidden");
$("closeModal").onclick=$("cancelConfirm").onclick=()=> $("confirmModal").classList.add("hidden");
$("confirmBtn").onclick=()=>{selected.status="已确认";$("confirmModal").classList.add("hidden");renderDetail();renderList();toast("结算已确认")};
$("addFeeBtn").onclick=()=>{editFees.push({type:"按时间",name:"新增费用项",qty:"1",price:0,amount:0,adjust:0,note:""});renderEditFees()};
$("editOrder").onchange=()=>{if($("editOrder").value){$("editCustomer").value=$("editOrder").value.split("｜")[1]+"项目部";editFees=feeData(settlements[0]).map(x=>({...x}));renderEditFees()}};
$("saveBtn").onclick=()=>toast("结算单已保存");
$("submitBtn").onclick=()=>{if(!$("editOrder").value||!editFees.length){toast("请选择收费租赁订单并维护费用明细");return}toast("已提交结算确认");setTimeout(()=>showView("listView"),700)};
$("uploadBtn").onclick=()=>{$("uploadText").textContent="本期结算签认资料.zip";toast("附件已添加")};
renderList();
