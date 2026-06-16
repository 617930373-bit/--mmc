const initialVisits = [
  {
    id: "KH2024060701",
    store: "卡泰驰（徐州）金欧店",
    dealAt: "2024-05-07 15:00:09",
    lastVisitAt: "2024-05-09 15:00:09",
    contractName: "王嘉雯",
    contractGender: "女",
    contractPhone: "136****9808",
    vehicle: "宝马2023款 Mi 260 运动版",
    dealPrice: "26.80万",
    saleNo: "XD789302038",
    saleType: "零售",
    salesName: "郭雪",
    vin: "VUJ67997H03D",
    customerSource: "成交",
    customerStatus: "成交",
    ownerName: "王嘉雯",
    ownerBirthday: "1995-08-14",
    ownerGender: "女",
    city: "江苏省 徐州市",
    trafficInsurance: "2026-08-09",
    businessInsurance: "2026-08-09",
    hobby: "瑜伽",
    source: "system",
    visitType: "交车面访",
    status: "associated",
    creator: "系统自动生成",
    updatedAt: "2024-05-09 15:00:09",
    visitAt: "2024-05-09T15:00",
    feedback: "交车完成后已做系统回访登记。",
    remark: "系统单据不可删除。",
    associatedSale: {
      saleNo: "XD789302038",
      customerName: "王嘉雯",
      customerId: "KH2024060701",
      vehicle: "宝马2023款 Mi 260 运动版",
      paidAt: "2024-05-07 15:00:09",
      hasExistingRecord: true,
      latestVisitor: "郭旭（23024898）",
      latestVisitAt: "2024-05-09 15:00:09"
    }
  },
  {
    id: "KH2024060702",
    store: "卡泰驰（徐州）金欧店",
    dealAt: "2024-05-07 13:00:09",
    lastVisitAt: "",
    contractName: "周雨桐",
    contractGender: "女",
    contractPhone: "138****2201",
    vehicle: "奔驰GLC 260 4MATIC",
    dealPrice: "32.50万",
    saleNo: "",
    saleType: "零售",
    salesName: "韩雪",
    vin: "",
    customerSource: "成交",
    customerStatus: "待回访",
    ownerName: "周雨桐",
    ownerBirthday: "1997-04-06",
    ownerGender: "女",
    city: "江苏省 徐州市",
    trafficInsurance: "2027-05-16",
    businessInsurance: "2027-05-16",
    hobby: "露营",
    source: "manual",
    visitType: "展厅面访",
    status: "pending",
    creator: "郭旭（23024898）",
    updatedAt: "2026-06-11 18:42",
    visitAt: "2026-06-11T18:20",
    feedback: "客户已到店，先完成展厅面访，重点记录用车偏好与保险到期时间。",
    remark: "待尾款收齐并生成成交客户数据后，再手工关联销单。",
    associatedSale: null
  },
  {
    id: "KH2024060703",
    store: "美驰直营旗舰店",
    dealAt: "2024-05-06 11:20:00",
    lastVisitAt: "",
    contractName: "",
    contractGender: "",
    contractPhone: "",
    vehicle: "",
    dealPrice: "",
    saleNo: "",
    saleType: "零售",
    salesName: "李清",
    vin: "",
    customerSource: "人工补录",
    customerStatus: "待关联",
    ownerName: "陈一鸣",
    ownerBirthday: "",
    ownerGender: "男",
    city: "山东省 青岛市",
    trafficInsurance: "",
    businessInsurance: "",
    hobby: "",
    source: "manual",
    visitType: "电话回访",
    status: "draft",
    creator: "郭旭（23024898）",
    updatedAt: "2026-06-11 17:25",
    visitAt: "2026-06-11T16:40",
    feedback: "已记录首轮电话沟通，客户同意后续继续联系。",
    remark: "当前还未确定对应销单。",
    associatedSale: null
  },
  {
    id: "KH2024060704",
    store: "卡泰驰（南京）雨花店",
    dealAt: "2024-05-05 16:48:20",
    lastVisitAt: "2024-05-10 10:24:00",
    contractName: "刘思远",
    contractGender: "男",
    contractPhone: "188****6652",
    vehicle: "理想L7 Pro",
    dealPrice: "30.90万",
    saleNo: "XD889120632",
    saleType: "零售",
    salesName: "李清",
    vin: "LIX889120632",
    customerSource: "成交",
    customerStatus: "成交",
    ownerName: "刘思远",
    ownerBirthday: "1991-11-02",
    ownerGender: "男",
    city: "江苏省 南京市",
    trafficInsurance: "2027-06-18",
    businessInsurance: "2027-06-18",
    hobby: "亲子出游",
    source: "manual",
    visitType: "保险提醒",
    status: "associated",
    creator: "李清（23100921）",
    updatedAt: "2024-05-10 10:24:00",
    visitAt: "2024-05-08T11:30",
    feedback: "客户关心商业险续保价格，已在门店面谈沟通。",
    remark: "人工建单后由客服手工选择对应销单。",
    associatedSale: {
      saleNo: "XD889120632",
      customerName: "刘思远",
      customerId: "KH2024060704",
      vehicle: "理想L7 Pro",
      paidAt: "2024-05-05 16:48:20",
      hasExistingRecord: false,
      latestVisitor: "李清（23100921）",
      latestVisitAt: "2024-05-10 10:24:00"
    }
  }
];

const candidateSales = [
  {
    saleNo: "XD902631108",
    customerName: "周雨桐",
    customerId: "KH2024060702",
    vehicle: "奔驰GLC 260 4MATIC",
    vin: "LDC6135A0N1204581",
    paidAt: "2026-06-11 17:56",
    customerDataCreated: true,
    hasExistingRecord: false,
    latestVisitor: "",
    latestVisitAt: ""
  },
  {
    saleNo: "XD902631109",
    customerName: "周雨桐",
    customerId: "KH2024060702",
    vehicle: "宝马X5 xDrive30Li",
    vin: "LBV12EV08RS908632",
    paidAt: "2026-06-11 18:05",
    customerDataCreated: true,
    hasExistingRecord: true,
    latestVisitor: "韩雪（23091218）",
    latestVisitAt: "2026-06-11 18:12"
  },
  {
    saleNo: "XD902631210",
    customerName: "陈一鸣",
    customerId: "KH2024060703",
    vehicle: "腾势N8L 四驱旗舰版",
    vin: "LC0CE4CB9N1006128",
    paidAt: "2026-06-11 15:32",
    customerDataCreated: true,
    hasExistingRecord: false,
    latestVisitor: "",
    latestVisitAt: ""
  }
];

let visits = cloneData(initialVisits);
let currentEditingId = null;
let associateTargetId = null;
let deleteTargetId = null;
let toastTimer = null;
let appliedFilters = getDefaultFilters();
let candidateFilters = getCandidateDefaultFilters();

const visitTableBody = document.getElementById("visitTableBody");
const emptyState = document.getElementById("emptyState");
const resultCountTag = document.getElementById("resultCountTag");
const toast = document.getElementById("toast");

const globalSearchInput = document.getElementById("globalSearchInput");
const storeSelect = document.getElementById("storeSelect");
const saleTypeFilter = document.getElementById("saleTypeFilter");
const visitTypeFilter = document.getElementById("visitTypeFilter");
const hobbyFilter = document.getElementById("hobbyFilter");
const brandFilter = document.getElementById("brandFilter");
const cityFilter = document.getElementById("cityFilter");
const vinFilter = document.getElementById("vinFilter");
const salesFilter = document.getElementById("salesFilter");
const sourceFilter = document.getElementById("sourceFilter");
const statusFilter = document.getElementById("statusFilter");
const queryBtn = document.getElementById("queryBtn");
const resetBtn = document.getElementById("resetBtn");
const globalSearchBtn = document.getElementById("globalSearchBtn");
const exportBtn = document.getElementById("exportBtn");
const createVisitBtn = document.getElementById("createVisitBtn");

const visitDrawer = document.getElementById("visitDrawer");
const drawerKicker = document.getElementById("drawerKicker");
const drawerTitle = document.getElementById("drawerTitle");
const formSource = document.getElementById("formSource");
const formStatusText = document.getElementById("formStatusText");
const formVisitType = document.getElementById("formVisitType");
const formStore = document.getElementById("formStore");
const formVisitAt = document.getElementById("formVisitAt");
const formCreator = document.getElementById("formCreator");
const formOwnerName = document.getElementById("formOwnerName");
const formOwnerPhone = document.getElementById("formOwnerPhone");
const formGender = document.getElementById("formGender");
const formBirthday = document.getElementById("formBirthday");
const formCity = document.getElementById("formCity");
const formHobby = document.getElementById("formHobby");
const formTrafficInsurance = document.getElementById("formTrafficInsurance");
const formBusinessInsurance = document.getElementById("formBusinessInsurance");
const formFeedback = document.getElementById("formFeedback");
const formRemark = document.getElementById("formRemark");
const associationCard = document.getElementById("associationCard");
const saveDraftBtn = document.getElementById("saveDraftBtn");
const submitVisitBtn = document.getElementById("submitVisitBtn");

const associateModal = document.getElementById("associateModal");
const associateSummary = document.getElementById("associateSummary");
const candidateTableBody = document.getElementById("candidateTableBody");
const mergeWarning = document.getElementById("mergeWarning");
const mergeWarningText = document.getElementById("mergeWarningText");
const confirmAssociateBtn = document.getElementById("confirmAssociateBtn");
const candidateVinSearch = document.getElementById("candidateVinSearch");
const candidateVehicleSearch = document.getElementById("candidateVehicleSearch");
const candidateQueryBtn = document.getElementById("candidateQueryBtn");
const candidateResetBtn = document.getElementById("candidateResetBtn");

const deleteModal = document.getElementById("deleteModal");
const deleteDesc = document.getElementById("deleteDesc");
const confirmDeleteBtn = document.getElementById("confirmDeleteBtn");

function cloneData(data) {
  return data.map((item) => ({
    ...item,
    associatedSale: item.associatedSale ? { ...item.associatedSale } : null
  }));
}

function getDefaultFilters() {
  return {
    keyword: "",
    store: "卡泰驰（徐州）金欧店",
    saleType: "all",
    visitType: "all",
    hobby: "all",
    brand: "all",
    city: "all",
    vin: "",
    sales: "all",
    source: "all",
    status: "all"
  };
}

function getCandidateDefaultFilters() {
  return {
    vin: "",
    vehicle: ""
  };
}

function createVisitId() {
  const seed = visits.reduce((max, visit) => {
    const numeric = Number(String(visit.id).replace(/\D/g, "").slice(-4));
    return Number.isNaN(numeric) ? max : Math.max(max, numeric);
  }, 0) + 1;
  return `KH202406${String(seed).padStart(4, "0")}`;
}

function formatDateTimeLocalValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day}T${hour}:${minute}`;
}

function formatNow() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day} ${hour}:${minute}`;
}

function getStatusLabel(status) {
  if (status === "draft") {
    return "草稿";
  }
  if (status === "pending") {
    return "待关联";
  }
  if (status === "voided") {
    return "已作废";
  }
  return "已关联";
}

function getBrandName(vehicle) {
  if (!vehicle) {
    return "";
  }
  if (vehicle.includes("宝马")) {
    return "宝马";
  }
  if (vehicle.includes("奔驰")) {
    return "奔驰";
  }
  if (vehicle.includes("理想")) {
    return "理想";
  }
  if (vehicle.includes("腾势")) {
    return "腾势";
  }
  return "";
}

function getFilteredVisits() {
  return visits.filter((visit) => {
    const keyword = appliedFilters.keyword.trim();
    const keywordMatched = !keyword || [
      visit.id,
      visit.contractName,
      visit.contractPhone,
      visit.ownerName,
      visit.saleNo,
      visit.vin,
      visit.salesName
    ].some((value) => String(value || "").includes(keyword));

    const storeMatched = !appliedFilters.store || visit.store === appliedFilters.store;

    const saleTypeMatched = appliedFilters.saleType === "all" || visit.saleType === appliedFilters.saleType;
    const visitTypeMatched = appliedFilters.visitType === "all" || visit.visitType === appliedFilters.visitType;
    const hobbyMatched = appliedFilters.hobby === "all" || visit.hobby === appliedFilters.hobby;
    const brandMatched = appliedFilters.brand === "all" || getBrandName(visit.vehicle) === appliedFilters.brand;
    const cityMatched = appliedFilters.city === "all" || visit.city === appliedFilters.city;
    const vinMatched = !appliedFilters.vin || String(visit.vin || "").includes(appliedFilters.vin);
    const salesMatched = appliedFilters.sales === "all" || visit.salesName === appliedFilters.sales;
    const sourceMatched = appliedFilters.source === "all" || visit.source === appliedFilters.source;
    const statusMatched = appliedFilters.status === "all" || visit.status === appliedFilters.status;

    return keywordMatched && storeMatched && saleTypeMatched && visitTypeMatched && hobbyMatched && brandMatched && cityMatched && vinMatched && salesMatched && sourceMatched && statusMatched;
  });
}

function renderTable() {
  const filtered = getFilteredVisits();
  resultCountTag.textContent = `共 ${filtered.length} 条`;
  emptyState.classList.toggle("visible", filtered.length === 0);

  visitTableBody.innerHTML = filtered.map((visit) => {
    const isVoided = visit.status === "voided";
    return `
      <tr class="${isVoided ? "row-voided" : ""}">
        <td class="checkbox-col"><input class="row-checkbox" type="checkbox" /></td>
        <td>${visit.id}</td>
        <td>${visit.dealAt || "-"}</td>
        <td>${visit.lastVisitAt || "-"}</td>
        <td>${visit.contractName || "-"}</td>
        <td>${visit.contractGender || "-"}</td>
        <td>${visit.contractPhone || "-"}</td>
        <td>${visit.vehicle || "-"}</td>
        <td>${visit.dealPrice || "-"}</td>
        <td>${visit.saleType || "-"}</td>
        <td>${visit.salesName || "-"}</td>
        <td>${visit.vin ? `<button class="link-btn secondary" type="button" data-action="open-sale" data-id="${visit.id}">${visit.vin}</button>` : "-"}</td>
        <td>${visit.customerSource || "-"}</td>
        <td>${visit.customerStatus || "-"}</td>
        <td>${visit.ownerName || "-"}</td>
        <td>${visit.ownerBirthday || "-"}</td>
        <td>${visit.ownerGender || "-"}</td>
        <td>${visit.city || "-"}</td>
        <td>${visit.trafficInsurance || "-"}</td>
        <td>${visit.businessInsurance || "-"}</td>
        <td>${visit.hobby || "-"}</td>
        <td><span class="source-tag ${visit.source === "manual" ? "source-manual" : "source-system"}">${visit.source === "manual" ? "人工创建" : "系统生成"}</span></td>
        <td><span class="status-tag status-${visit.status}">${getStatusLabel(visit.status)}</span></td>
        <td>${visit.creator}</td>
        <td>
          <div class="table-actions">
            <button class="link-btn" type="button" data-action="edit" data-id="${visit.id}">${visit.source === "system" ? "查看回访" : "编辑回访"}</button>
            <button class="link-btn secondary" type="button" data-action="associate" data-id="${visit.id}" ${visit.source !== "manual" || visit.status === "draft" || visit.status === "voided" ? "disabled" : ""}>关联销单</button>
            <button class="link-btn danger" type="button" data-action="delete" data-id="${visit.id}" ${visit.source !== "manual" || visit.status === "associated" || visit.status === "voided" ? "disabled" : ""}>作废</button>
          </div>
        </td>
      </tr>
    `;
  }).join("");

  Array.from(document.querySelectorAll("[data-action]")).forEach((button) => {
    button.addEventListener("click", handleTableAction);
  });
}

function resetDrawerForm() {
  currentEditingId = null;
  drawerKicker.textContent = "人工创建单";
  drawerTitle.textContent = "新建面访单";
  formSource.value = "人工创建";
  formStatusText.value = "草稿";
  formVisitType.value = "展厅面访";
  formStore.value = storeSelect.value;
  formVisitAt.value = formatDateTimeLocalValue(new Date());
  formCreator.value = "郭旭（23024898）";
  formOwnerName.value = "";
  formOwnerPhone.value = "";
  formGender.value = "";
  formBirthday.value = "";
  formCity.value = "";
  formHobby.value = "";
  formTrafficInsurance.value = "";
  formBusinessInsurance.value = "";
  formFeedback.value = "";
  formRemark.value = "";
  associationCard.innerHTML = '<div class="association-empty">当前单据暂未关联销单</div>';

  [
    formVisitType,
    formStore,
    formVisitAt,
    formOwnerName,
    formOwnerPhone,
    formGender,
    formBirthday,
    formCity,
    formHobby,
    formTrafficInsurance,
    formBusinessInsurance,
    formFeedback,
    formRemark
  ].forEach((field) => {
    field.disabled = false;
  });

  saveDraftBtn.disabled = false;
  submitVisitBtn.disabled = false;
}

function getAssociationCardHtml(association) {
  return `
    <div class="association-result">
      <strong>${association.saleNo}</strong>
      <div>签约客户：${association.customerName}（${association.customerId}）</div>
      <div>成交车辆：${association.vehicle}</div>
      <div>尾款收齐时间：${association.paidAt}</div>
    </div>
  `;
}

function fillDrawerForm(visit, readonly = false) {
  currentEditingId = visit.id;
  drawerKicker.textContent = visit.source === "manual" ? "人工创建单" : "系统生成单";
  drawerTitle.textContent = `${readonly || visit.source === "system" ? "查看" : "编辑"}回访单 - ${visit.id}`;
  formSource.value = visit.source === "manual" ? "人工创建" : "系统生成";
  formStatusText.value = getStatusLabel(visit.status);
  formVisitType.value = visit.visitType || "展厅面访";
  formStore.value = storeSelect.value;
  formVisitAt.value = visit.visitAt || formatDateTimeLocalValue(new Date());
  formCreator.value = visit.creator;
  formOwnerName.value = visit.ownerName || "";
  formOwnerPhone.value = visit.contractPhone || "";
  formGender.value = visit.ownerGender || "";
  formBirthday.value = visit.ownerBirthday || "";
  formCity.value = visit.city || "";
  formHobby.value = visit.hobby || "";
  formTrafficInsurance.value = visit.trafficInsurance || "";
  formBusinessInsurance.value = visit.businessInsurance || "";
  formFeedback.value = visit.feedback || "";
  formRemark.value = visit.remark || "";
  associationCard.innerHTML = visit.associatedSale ? getAssociationCardHtml(visit.associatedSale) : '<div class="association-empty">当前单据暂未关联销单</div>';

  const editable = !readonly && visit.source === "manual";
  [
    formVisitType,
    formStore,
    formVisitAt,
    formOwnerName,
    formOwnerPhone,
    formGender,
    formBirthday,
    formCity,
    formHobby,
    formTrafficInsurance,
    formBusinessInsurance,
    formFeedback,
    formRemark
  ].forEach((field) => {
    field.disabled = !editable;
  });

  saveDraftBtn.disabled = !editable;
  submitVisitBtn.disabled = !editable;
}

function openDrawer() {
  visitDrawer.classList.add("open");
  visitDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeDrawer() {
  visitDrawer.classList.remove("open");
  visitDrawer.setAttribute("aria-hidden", "true");
  if (!associateModal.classList.contains("open") && !deleteModal.classList.contains("open")) {
    document.body.classList.remove("modal-open");
  }
}

function openAssociateModal(visitId) {
  associateTargetId = visitId;
  const visit = visits.find((item) => item.id === visitId);
  if (!visit) {
    return;
  }

  associateSummary.textContent = `当前单据：${visit.id} / ${visit.ownerName || "未填写用车人"} / ${visit.contractPhone || visit.ownerPhone || "未填写联系方式"}。请选择要手工关联的销单。`;
  candidateFilters = getCandidateDefaultFilters();
  candidateVinSearch.value = "";
  candidateVehicleSearch.value = "";
  renderCandidateTable();
  associateModal.classList.add("open");
  associateModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function getFilteredCandidateSales() {
  const vinQuery = candidateFilters.vin.trim().toUpperCase();
  const vehicleQuery = candidateFilters.vehicle.trim();

  return candidateSales.filter((sale) => {
    if (!sale.customerDataCreated) {
      return false;
    }

    const vin = String(sale.vin || "").toUpperCase();
    const vinMatched = !vinQuery || vin === vinQuery || vin.endsWith(vinQuery);
    const vehicleMatched = !vehicleQuery || String(sale.vehicle || "").includes(vehicleQuery);
    return vinMatched && vehicleMatched;
  });
}

function renderCandidateTable() {
  const candidates = getFilteredCandidateSales();
  candidateTableBody.innerHTML = candidates.map((sale, index) => `
    <tr>
      <td><input type="radio" name="candidateSale" value="${sale.saleNo}" ${index === 0 ? "checked" : ""}></td>
      <td>${sale.saleNo}</td>
      <td>${sale.customerName}<br><span class="cell-sub">${sale.customerId}</span></td>
      <td>${sale.vehicle}</td>
      <td>${sale.vin}</td>
      <td>${sale.paidAt}</td>
      <td>已生成</td>
      <td>${sale.hasExistingRecord ? `已生成系统单<br><span class="cell-sub">最近回访人：${sale.latestVisitor}</span>` : "无"}</td>
    </tr>
  `).join("") || `
    <tr>
      <td colspan="8" class="cell-sub">暂无符合条件的销单</td>
    </tr>
  `;

  Array.from(document.querySelectorAll('input[name="candidateSale"]')).forEach((radio) => {
    radio.addEventListener("change", updateMergeWarning);
  });

  updateMergeWarning();
}

function closeAssociateModal() {
  associateModal.classList.remove("open");
  associateModal.setAttribute("aria-hidden", "true");
  associateTargetId = null;
  if (!visitDrawer.classList.contains("open") && !deleteModal.classList.contains("open")) {
    document.body.classList.remove("modal-open");
  }
}

function getSelectedSaleNo() {
  const selected = document.querySelector('input[name="candidateSale"]:checked');
  return selected ? selected.value : "";
}

function updateMergeWarning() {
  const sale = candidateSales.find((item) => item.saleNo === getSelectedSaleNo());
  if (!sale || !sale.hasExistingRecord) {
    mergeWarning.classList.add("hidden");
    mergeWarningText.textContent = "";
    return;
  }

  mergeWarning.classList.remove("hidden");
  mergeWarningText.textContent = `本销单已生成一条回访记录，最近一次回访人为 ${sale.latestVisitor}，时间为 ${sale.latestVisitAt}。若继续关联，原系统单将被当前人工单覆盖，仅保留当前这条记录，请再次确认。`;
}

function openDeleteModal(visitId) {
  deleteTargetId = visitId;
  const visit = visits.find((item) => item.id === visitId);
  if (!visit) {
    return;
  }
  deleteDesc.textContent = `确认作废人工单 ${visit.id} 吗？作废后不可再关联销单。`;
  deleteModal.classList.add("open");
  deleteModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeDeleteModal() {
  deleteModal.classList.remove("open");
  deleteModal.setAttribute("aria-hidden", "true");
  deleteTargetId = null;
  if (!visitDrawer.classList.contains("open") && !associateModal.classList.contains("open")) {
    document.body.classList.remove("modal-open");
  }
}

function collectFormData() {
  return {
    visitType: formVisitType.value,
    visitAt: formVisitAt.value,
    ownerName: formOwnerName.value.trim(),
    ownerBirthday: formBirthday.value,
    ownerGender: formGender.value,
    city: formCity.value.trim(),
    hobby: formHobby.value.trim(),
    trafficInsurance: formTrafficInsurance.value,
    businessInsurance: formBusinessInsurance.value,
    feedback: formFeedback.value.trim(),
    remark: formRemark.value.trim(),
    contractPhone: formOwnerPhone.value.trim()
  };
}

function saveVisit(status) {
  const data = collectFormData();
  const now = formatNow();

  if (currentEditingId) {
    visits = visits.map((visit) => {
      if (visit.id !== currentEditingId) {
        return visit;
      }
      return {
        ...visit,
        ...data,
        store: formStore.value,
        status,
        updatedAt: now,
        customerStatus: status === "associated" ? "成交" : "待关联",
        lastVisitAt: status === "draft" ? visit.lastVisitAt : now
      };
    });
  } else {
    visits.unshift({
      id: createVisitId(),
      dealAt: "",
      store: formStore.value,
      lastVisitAt: status === "draft" ? "" : now,
      contractName: "",
      contractGender: "",
      contractPhone: data.contractPhone,
      vehicle: "",
      dealPrice: "",
      saleNo: "",
      saleType: "零售",
      salesName: "郭旭",
      vin: "",
      customerSource: "人工补录",
      customerStatus: status === "draft" ? "草稿" : "待关联",
      source: "manual",
      creator: "郭旭（23024898）",
      updatedAt: now,
      associatedSale: null,
      ...data,
      status
    });
  }

  closeDrawer();
  renderTable();
  showToast(status === "draft" ? "草稿已保存" : "人工回访单已提交，状态变更为待关联");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("visible");
  }, 2200);
}

function handleTableAction(event) {
  const { action, id } = event.currentTarget.dataset;
  const visit = visits.find((item) => item.id === id);
  if (!visit) {
    return;
  }

  if (action === "edit") {
    fillDrawerForm(visit, visit.source === "system");
    openDrawer();
    return;
  }

  if (action === "open-sale") {
    showToast(`跳转销单：${visit.saleNo || "待关联销单"}`);
    return;
  }

  if (action === "associate" && visit.source === "manual" && visit.status !== "draft") {
    openAssociateModal(id);
    return;
  }

  if (action === "delete" && visit.source === "manual") {
    openDeleteModal(id);
  }
}

function bindEvents() {
  createVisitBtn.addEventListener("click", () => {
    resetDrawerForm();
    openDrawer();
  });

  queryBtn.addEventListener("click", () => {
    appliedFilters = {
      keyword: globalSearchInput.value,
      store: storeSelect.value,
      saleType: saleTypeFilter.value,
      visitType: visitTypeFilter.value,
      hobby: hobbyFilter.value,
      brand: brandFilter.value,
      city: cityFilter.value,
      vin: vinFilter.value.trim(),
      sales: salesFilter.value,
      source: sourceFilter.value,
      status: statusFilter.value
    };
    renderTable();
  });

  globalSearchBtn.addEventListener("click", () => {
    queryBtn.click();
  });

  exportBtn.addEventListener("click", () => {
    showToast("已按当前筛选条件导出列表");
  });

  resetBtn.addEventListener("click", () => {
    appliedFilters = getDefaultFilters();
    globalSearchInput.value = "";
    storeSelect.value = "卡泰驰（徐州）金欧店";
    saleTypeFilter.value = "all";
    visitTypeFilter.value = "all";
    hobbyFilter.value = "all";
    brandFilter.value = "all";
    cityFilter.value = "all";
    vinFilter.value = "";
    salesFilter.value = "all";
    sourceFilter.value = "all";
    statusFilter.value = "all";
    renderTable();
  });

  Array.from(document.querySelectorAll("[data-close-drawer]")).forEach((element) => {
    element.addEventListener("click", closeDrawer);
  });

  saveDraftBtn.addEventListener("click", () => saveVisit("draft"));
  submitVisitBtn.addEventListener("click", () => saveVisit("pending"));

  Array.from(document.querySelectorAll("[data-close-associate]")).forEach((element) => {
    element.addEventListener("click", closeAssociateModal);
  });

  confirmAssociateBtn.addEventListener("click", () => {
    const sale = candidateSales.find((item) => item.saleNo === getSelectedSaleNo());
    if (!associateTargetId || !sale) {
      showToast("请先选择要关联的销单");
      return;
    }

    visits = visits
      .filter((visit) => !(sale.hasExistingRecord && visit.source === "system" && visit.saleNo === sale.saleNo))
      .map((visit) => {
        if (visit.id !== associateTargetId) {
          return visit;
        }
        return {
          ...visit,
          saleNo: sale.saleNo,
          contractName: sale.customerName,
          vehicle: sale.vehicle,
          dealAt: sale.paidAt,
          dealPrice: visit.dealPrice || "待补充",
        customerStatus: "成交",
        status: "associated",
        updatedAt: formatNow(),
        lastVisitAt: formatNow(),
        vin: sale.vin,
        associatedSale: { ...sale }
      };
    });

    closeAssociateModal();
    closeDrawer();
    renderTable();
    showToast(sale.hasExistingRecord ? "已完成关联并覆盖原系统单" : "已完成销单关联");
  });

  Array.from(document.querySelectorAll("[data-close-delete]")).forEach((element) => {
    element.addEventListener("click", closeDeleteModal);
  });

  confirmDeleteBtn.addEventListener("click", () => {
    if (!deleteTargetId) {
      return;
    }

    visits = visits.map((visit) => {
      if (visit.id !== deleteTargetId) {
        return visit;
      }
      return {
        ...visit,
        status: "voided",
        customerStatus: "已作废",
        updatedAt: formatNow()
      };
    });
    closeDeleteModal();
    renderTable();
    showToast("人工回访单已作废");
  });

  candidateQueryBtn.addEventListener("click", () => {
    candidateFilters = {
      vin: candidateVinSearch.value,
      vehicle: candidateVehicleSearch.value
    };
    renderCandidateTable();
  });

  candidateResetBtn.addEventListener("click", () => {
    candidateFilters = getCandidateDefaultFilters();
    candidateVinSearch.value = "";
    candidateVehicleSearch.value = "";
    renderCandidateTable();
  });
}

bindEvents();
renderTable();
