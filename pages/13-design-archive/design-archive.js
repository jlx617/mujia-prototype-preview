const archives = [
  {code:"DA-202606-018",name:"墩身模板总装图",type:"DWG",project:"华东高架 3 标",bom:"KC-BOM-STD-018",order:"ZL-202605-018",version:"V2.1",secret:"涉密",uploader:"张工",status:"已确认",updated:"2026-06-09 16:20",authorized:true,size:"36.8 MB",remark:"华东高架 3 标墩身模板加工与装配依据。"},
  {code:"DA-202606-016",name:"模板设计清单",type:"Excel",project:"沪苏湖站房",bom:"KC-BOM-STD-041",order:"ZL-202605-024",version:"V1.3",secret:"普通",uploader:"李工",status:"已确认",updated:"2026-06-08 10:45",authorized:true,size:"2.4 MB",remark:"站房项目模板设计物料清单。"},
  {code:"DA-202606-013",name:"承台模板施工图",type:"PDF",project:"汉江桥梁 2 标",bom:"KC-BOM-STD-032",order:"DB-202605-011",version:"V1.0",secret:"涉密",uploader:"周工",status:"待确认",updated:"2026-06-07 14:12",authorized:false,size:"18.6 MB",remark:"承台模板施工图送审版本。"},
  {code:"DA-202606-011",name:"异形节点详图",type:"图片",project:"苏州综合管廊二期",bom:"未关联",order:"CG-202606-012",version:"V1.0",secret:"普通",uploader:"王工",status:"已确认",updated:"2026-06-06 09:30",authorized:true,size:"8.1 MB",remark:"异形连接节点现场交底图片。"},
  {code:"DA-202606-008",name:"液压爬模 BOM 原始文件",type:"Excel",project:"华东高架 3 标",bom:"KC-BOM-STD-052",order:"未关联",version:"V1.2",secret:"普通",uploader:"张工",status:"已退回",updated:"2026-06-05 17:05",authorized:true,size:"5.7 MB",remark:"液压爬模标准 BOM 原始设计文件。"},
  {code:"DA-202606-006",name:"隧道台车电气图",type:"PDF",project:"沪苏湖站房",bom:"KC-BOM-STD-066",order:"ZL-202605-031",version:"V1.0",secret:"涉密",uploader:"赵工",status:"已确认",updated:"2026-06-04 11:18",authorized:false,size:"24.3 MB",remark:"隧道台车电气系统布置及接线图。"}
];

let current = archives[0];
let modalAction = null;
const $ = (selector) => document.querySelector(selector);

function statusClass(value){return value==="已确认"?"ok":value==="已退回"?"back":"wait"}
function showView(id){
  document.querySelectorAll(".page-view").forEach(view=>view.classList.add("hidden"));
  $(`#${id}`).classList.remove("hidden");
  window.location.hash=id==="listView"?"":id.replace("View","");
  window.scrollTo({top:0,behavior:"instant"});
}
function filtered(){
  const keyword=$("#keywordFilter").value.trim().toLowerCase();
  const project=$("#projectFilter").value;
  const bom=$("#bomFilter").value.trim().toLowerCase();
  const type=$("#typeFilter").value;
  const secret=$("#secretFilter").value;
  const start=$("#startDate").value;
  const end=$("#endDate").value;
  const updatedDate=item=>item.updated.slice(0,10);
  return archives.filter(item=>(!keyword||`${item.code}${item.name}`.toLowerCase().includes(keyword))
    &&(project==="全部"||item.project===project)
    &&(!bom||item.bom.toLowerCase().includes(bom))
    &&(type==="全部"||item.type===type)
    &&(secret==="全部"||item.secret===secret)
    &&(!start||updatedDate(item)>=start)
    &&(!end||updatedDate(item)<=end));
}
function renderRows(list){
  $("#archiveRows").innerHTML=list.map(item=>`<tr data-index="${archives.indexOf(item)}">
    <td title="${item.code}">${item.code}</td><td title="${item.name}">${item.name}</td>
    <td><span class="file-type">${item.type}</span></td><td title="${item.project}">${item.project}</td>
    <td title="${item.bom}">${item.bom}</td><td>${item.version}</td>
    <td><span class="secret ${item.secret==="涉密"?"restricted":"normal"}">${item.secret}</span></td>
    <td>${item.uploader}</td><td><span class="status ${statusClass(item.status)}">${item.status}</span></td>
    <td>${item.updated}</td><td><div class="row-actions">
      <button class="link-btn viewBtn">查看</button>
      <button class="link-btn editBtn">编辑</button>
      ${item.authorized?'<button class="link-btn downloadBtn">下载</button>':'<button class="link-btn request requestBtn">申请下载</button>'}
    </div></td></tr>`).join("");
  $("table").classList.toggle("hidden",list.length===0);
  $("#emptyState").classList.toggle("hidden",list.length!==0);
  document.querySelectorAll(".viewBtn").forEach(btn=>btn.onclick=()=>openDetail(btn));
  document.querySelectorAll(".editBtn").forEach(btn=>btn.onclick=()=>openEdit(btn));
  document.querySelectorAll(".downloadBtn").forEach(btn=>btn.onclick=()=>downloadFromRow(btn));
  document.querySelectorAll(".requestBtn").forEach(btn=>btn.onclick=()=>requestFromRow(btn));
}
function itemFromButton(btn){return archives[Number(btn.closest("tr").dataset.index)]}
function openDetail(btn){current=itemFromButton(btn);renderDetail();showView("detailView")}
function openEdit(btn){
  current=itemFromButton(btn);
  $("#editTitle").textContent="编辑设计档案";$("#editCrumb").textContent="编辑";
  $("#editCode").value=current.code;$("#editName").value=current.name;$("#editType").value=current.type;
  $("#editVersion").value=current.version;$("#editSecret").value=current.secret;$("#editProject").value=current.project;
  $("#editBom").value=current.bom==="未关联"?"":current.bom;$("#editOrder").value=current.order==="未关联"?"":current.order;$("#editRemark").value=current.remark;
  $("#selectedFile").classList.remove("hidden");showView("editView");
}
function newArchive(){
  $("#editTitle").textContent="上传设计档案";$("#editCrumb").textContent="上传";
  $("#editCode").value="系统自动生成";$("#editName").value="";$("#editType").value="PDF";$("#editVersion").value="V1.0";
  $("#editSecret").value="普通";$("#editProject").value="华东高架 3 标";$("#editBom").value="";$("#editOrder").value="";$("#editRemark").value="";
  $("#selectedFile").classList.add("hidden");showView("editView");
}
function info(label,value,full=false){return `<div class="info-item${full?" full":""}"><span>${label}</span><strong>${value}</strong></div>`}
function renderDetail(){
  $("#detailTitle").textContent=`${current.code} 档案详情`;
  $("#fileInfo").innerHTML=[
    ["档案编号",current.code],["档案名称",current.name],["文件类型",current.type],["当前版本",current.version],
    ["保密等级",current.secret],["文件大小",current.size],["上传人",current.uploader],["确认状态",current.status],
    ["更新时间",current.updated],["下载权限",current.authorized?"已授权":"未授权，可发起申请"],["档案说明",current.remark,true]
  ].map(x=>info(...x)).join("");
  $("#businessInfo").innerHTML=[
    ["关联项目",current.project],["关联 BOM",current.bom],["关联订单",current.order],
    ["所属目录","项目图纸 / 施工图"],["业务组织","科创公司"],["归档状态","已归档"]
  ].map(x=>info(...x)).join("");
  $("#versionRows").innerHTML=[
    [current.version,`${current.name}.${current.type.toLowerCase()}`,current.uploader,current.updated,current.status,current.status==="已确认"?"陈工":"-"],
    ["V1.0",`${current.name}-初版.${current.type.toLowerCase()}`,current.uploader,"2026-05-28 11:20","已确认","陈工"]
  ].map(row=>`<tr>${row.map(cell=>`<td>${cell}</td>`).join("")}<td><button class="link-btn versionDownload">下载</button></td></tr>`).join("");
  $("#attachmentList").innerHTML=[
    [`主文件 · ${current.type}`,`${current.name}.${current.type.toLowerCase()}`,current.size],
    ["设计确认单","设计文件确认单.pdf","1.2 MB"],
    ["变更说明","版本变更说明.docx","680 KB"]
  ].map((row,i)=>`<div class="attachment-card"><span>${row[0]}</span><strong>${row[1]}</strong><em>${row[2]}</em><button class="attachmentDownload">${current.authorized||i>0?"下载":"申请下载"}</button></div>`).join("");
  $("#downloadRows").innerHTML=`<tr><td>陈工</td><td>图纸授权角色</td><td>${current.version}</td><td>2026-06-10 09:18</td><td>授权通过</td></tr>
    <tr><td>刘工</td><td>项目设计人员</td><td>V1.0</td><td>2026-06-03 15:26</td><td>授权通过</td></tr>`;
  $("#detailDownloadBtn").textContent=current.authorized?"下载附件":"申请下载";
  document.querySelectorAll(".versionDownload,.attachmentDownload").forEach(btn=>btn.onclick=()=>current.authorized?openConfirm("下载档案",`确认下载 ${current.name} ${current.version}？`,"下载"):openRequest());
}
function openModal(title,body,action,confirmText="确定"){
  $("#modalTitle").textContent=title;$("#modalBody").innerHTML=body;$("#confirmModalBtn").textContent=confirmText;
  modalAction=action;$("#mask").classList.remove("hidden");$("#modal").classList.remove("hidden");
}
function closeModal(){$("#mask").classList.add("hidden");$("#modal").classList.add("hidden");modalAction=null}
function openConfirm(title,message,confirmText="确定"){
  openModal(title,`<div class="confirm-message"><div class="confirm-icon">!</div><strong>${message}</strong><p>操作记录将保留在档案下载记录中。</p></div>`,
    ()=>showToast(confirmText==="下载"?"下载任务已创建":"操作成功"),confirmText);
}
function openRequest(){
  openModal("申请图纸下载",`<label><span>申请档案</span><input value="${current.code} ${current.name}" disabled></label>
    <label><span>使用项目</span><input value="${current.project}"></label>
    <label><span>申请原因</span><textarea>用于项目设计复核与现场技术交底。</textarea></label>`,
    ()=>showToast("下载申请已提交"),"提交申请");
}
function downloadFromRow(btn){current=itemFromButton(btn);openConfirm("下载档案",`确认下载 ${current.name} ${current.version}？`,"下载")}
function requestFromRow(btn){current=itemFromButton(btn);openRequest()}
function showToast(message){closeModal();$("#toast").textContent=message;$("#toast").classList.remove("hidden");setTimeout(()=>$("#toast").classList.add("hidden"),2200)}

$("#queryBtn").onclick=()=>renderRows(filtered());
$("#resetBtn").onclick=()=>{["#keywordFilter","#bomFilter","#startDate","#endDate"].forEach(s=>$(s).value="");["#projectFilter","#typeFilter","#secretFilter"].forEach(s=>$(s).value="全部");renderRows(archives)};
$("#uploadBtn").onclick=newArchive;
$("#newFolderBtn").onclick=()=>openModal("新增目录",`<label><span>目录名称</span><input placeholder="请输入目录名称"></label><label><span>上级目录</span><select><option>项目图纸</option><option>设计清单</option><option>BOM 文件</option></select></label>`,()=>showToast("目录已创建"));
$("#exportBtn").onclick=()=>showToast("档案目录已导出");
document.querySelectorAll(".backBtn").forEach(btn=>btn.onclick=()=>showView("listView"));
$("#detailEditBtn").onclick=()=>{const index=archives.indexOf(current);const fake={closest:()=>({dataset:{index}})};openEdit(fake)};
$("#detailDownloadBtn").onclick=()=>current.authorized?openConfirm("下载附件",`确认下载 ${current.name} 全部附件？`,"下载"):openRequest();
$("#chooseFileBtn").onclick=()=>$("#selectedFile").classList.remove("hidden");
$("#selectedFile button").onclick=()=>$("#selectedFile").classList.add("hidden");
$("#saveBtn").onclick=()=>showToast("草稿已保存");
$("#submitBtn").onclick=()=>openModal("提交上传确认",`<div class="confirm-message"><div class="confirm-icon">!</div><strong>确认提交当前设计档案？</strong><p>提交后将由其他有确认权限的人员进行确认，发起人不能确认本人提交的档案。</p></div>`,()=>{showToast("档案已提交确认");setTimeout(()=>showView("listView"),500)},"确认提交");
$("#closeModalBtn").onclick=closeModal;$("#cancelModalBtn").onclick=closeModal;$("#mask").onclick=closeModal;
$("#confirmModalBtn").onclick=()=>{if(modalAction)modalAction()};

renderRows(archives);renderDetail();
if(location.hash==="#detail")showView("detailView");
if(location.hash==="#edit")newArchive();
