const initialStores = [
  {
    id: "MMC001",
    name: "上海浦东 MMC 门店",
    region: "华东 / 上海",
    type: "直营 MMC",
    enabled: true,
    operator: "平台管理员-张琳",
    operatedAt: "2026-06-08 10:32"
  },
  {
    id: "MMC002",
    name: "杭州滨江 MMC 门店",
    region: "华东 / 杭州",
    type: "直营 MMC",
    enabled: true,
    operator: "线索分配专员-刘毅",
    operatedAt: "2026-06-08 09:48"
  },
  {
    id: "MMC003",
    name: "苏州工业园 MMC 门店",
    region: "华东 / 苏州",
    type: "加盟 MMC",
    enabled: false,
    operator: "平台管理员-张琳",
    operatedAt: "2026-06-07 18:10"
  },
  {
    id: "MMC004",
    name: "北京朝阳 MMC 门店",
    region: "华北 / 北京",
    type: "直营 MMC",
    enabled: true,
    operator: "平台管理员-张琳",
    operatedAt: "2026-06-08 08:56"
  },
  {
    id: "MMC005",
    name: "天津滨海 MMC 门店",
    region: "华北 / 天津",
    type: "加盟 MMC",
    enabled: false,
    operator: "线索分配专员-刘毅",
    operatedAt: "2026-06-06 17:42"
  },
  {
    id: "MMC006",
    name: "广州天河 MMC 门店",
    region: "华南 / 广州",
    type: "直营 MMC",
    enabled: true,
    operator: "平台管理员-张琳",
    operatedAt: "2026-06-08 11:06"
  },
  {
    id: "MMC007",
    name: "深圳南山 MMC 门店",
    region: "华南 / 深圳",
    type: "直营 MMC",
    enabled: true,
    operator: "线索分配专员-刘毅",
    operatedAt: "2026-06-08 10:05"
  },
  {
    id: "MMC008",
    name: "成都高新 MMC 门店",
    region: "西南 / 成都",
    type: "加盟 MMC",
    enabled: false,
    operator: "平台管理员-张琳",
    operatedAt: "2026-06-05 16:20"
  },
  {
    id: "MMC009",
    name: "重庆渝北 MMC 门店",
    region: "西南 / 重庆",
    type: "直营 MMC",
    enabled: true,
    operator: "平台管理员-张琳",
    operatedAt: "2026-06-07 20:12"
  },
  {
    id: "MMC010",
    name: "武汉光谷 MMC 门店",
    region: "华中 / 武汉",
    type: "加盟 MMC",
    enabled: false,
    operator: "线索分配专员-刘毅",
    operatedAt: "2026-06-06 15:38"
  },
  {
    id: "MMC011",
    name: "郑州金水 MMC 门店",
    region: "华中 / 郑州",
    type: "直营 MMC",
    enabled: true,
    operator: "平台管理员-张琳",
    operatedAt: "2026-06-08 09:02"
  },
  {
    id: "MMC012",
    name: "西安高新 MMC 门店",
    region: "西北 / 西安",
    type: "加盟 MMC",
    enabled: false,
    operator: "平台管理员-张琳",
    operatedAt: "2026-06-04 14:26"
  }
];

function cloneStores(data) {
  return data.map((store) => ({ ...store }));
}

let stores = cloneStores(initialStores);
let selectedStoreId = "";
let draftSearchQuery = "";
let appliedSearchQuery = "";
let statusFilter = "all";
let pendingAction = null;
let toastTimer = null;

const storeCount = document.getElementById("storeCount");
const enabledCount = document.getElementById("enabledCount");
const disabledCount = document.getElementById("disabledCount");
const resultCountTag = document.getElementById("resultCountTag");
const storeTableBody = document.getElementById("storeTableBody");
const emptyState = document.getElementById("emptyState");
const tableWrapper = document.getElementById("tableWrapper");

const storeSearch = document.getElementById("storeSearch");
const storeDropdown = document.getElementById("storeDropdown");
const statusSelect = document.getElementById("statusFilter");
const queryBtn = document.getElementById("queryBtn");
const clearFilterBtn = document.getElementById("clearFilterBtn");
const enableAllBtn = document.getElementById("enableAllBtn");
const disableAllBtn = document.getElementById("disableAllBtn");
const backBtn = document.getElementById("backBtn");

const confirmModal = document.getElementById("confirmModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalStoreName = document.getElementById("modalStoreName");
const modalActionType = document.getElementById("modalActionType");
const modalAffected = document.getElementById("modalAffected");
const modalResult = document.getElementById("modalResult");
const confirmModalBtn = document.getElementById("confirmModalBtn");
const cancelModalBtn = document.getElementById("cancelModalBtn");
const toast = document.getElementById("toast");

function formatNow() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day} ${hour}:${minute}`;
}

function getSearchMatchedStores(querySource) {
  const query = querySource.trim().toLowerCase();
  if (!query) {
    return stores;
  }

  return stores.filter((store) => {
    return (
      store.name.toLowerCase().includes(query) ||
      store.id.toLowerCase().includes(query)
    );
  });
}

function getFilteredStores() {
  const baseStores = selectedStoreId
    ? stores.filter((store) => store.id === selectedStoreId)
    : getSearchMatchedStores(appliedSearchQuery);

  return baseStores.filter((store) => {
    return (
      statusFilter === "all" ||
      (statusFilter === "on" && store.enabled) ||
      (statusFilter === "off" && !store.enabled)
    );
  });
}

function renderSummary() {
  const enabled = stores.filter((store) => store.enabled).length;
  storeCount.textContent = stores.length;
  enabledCount.textContent = enabled;
  disabledCount.textContent = stores.length - enabled;
  resultCountTag.textContent = `共 ${getFilteredStores().length} 条`;
}

function renderDropdown() {
  const matches = getSearchMatchedStores(draftSearchQuery).slice(0, 8);

  if (document.activeElement !== storeSearch) {
    storeDropdown.classList.remove("visible");
    return;
  }

  if (matches.length === 0) {
    storeDropdown.innerHTML = `<button class="search-option" type="button">暂无匹配门店</button>`;
  } else {
    storeDropdown.innerHTML = matches
      .map(
        (store) => `
          <button class="search-option" type="button" data-store-id="${store.id}">
            <span>${store.name}<br><small>${store.id}</small></span>
            <span class="dropdown-status">${store.enabled ? "已开启" : "已关闭"}</span>
          </button>
        `
      )
      .join("");
  }

  storeDropdown.classList.add("visible");

  Array.from(storeDropdown.querySelectorAll("[data-store-id]")).forEach((button) => {
    button.addEventListener("click", () => {
      const selected = stores.find((store) => store.id === button.dataset.storeId);
      if (!selected) {
        return;
      }
      selectedStoreId = selected.id;
      draftSearchQuery = selected.name;
      appliedSearchQuery = selected.name;
      storeSearch.value = selected.name;
      storeDropdown.classList.remove("visible");
      renderPage();
    });
  });
}

function renderTable() {
  const filtered = getFilteredStores();
  emptyState.classList.toggle("visible", filtered.length === 0);
  tableWrapper.style.display = filtered.length === 0 ? "none" : "block";

  storeTableBody.innerHTML = filtered
    .map(
      (store) => `
        <tr>
          <td>${store.name}</td>
          <td>${store.id}</td>
          <td>${store.type}</td>
          <td><span class="status ${store.enabled ? "on" : "off"}">${store.enabled ? "已开启" : "已关闭"}</span></td>
          <td>${store.operator}</td>
          <td>${store.operatedAt}</td>
          <td>
            <div class="action-cell">
              <label class="switch" aria-label="${store.name}开关">
                <input type="checkbox" data-toggle-id="${store.id}" ${store.enabled ? "checked" : ""}>
                <span class="slider"></span>
              </label>
              <button class="link-btn" type="button" data-action-id="${store.id}">${store.enabled ? "关闭" : "开启"}</button>
            </div>
          </td>
        </tr>
      `
    )
    .join("");

  Array.from(document.querySelectorAll("[data-toggle-id]")).forEach((input) => {
    input.addEventListener("change", (event) => {
      const store = stores.find((item) => item.id === event.target.dataset.toggleId);
      if (!store) {
        return;
      }
      event.target.checked = store.enabled;
      openConfirmModal({
        type: store.enabled ? "single-off" : "single-on",
        storeIds: [store.id]
      });
    });
  });

  Array.from(document.querySelectorAll("[data-action-id]")).forEach((button) => {
    button.addEventListener("click", () => {
      const store = stores.find((item) => item.id === button.dataset.actionId);
      if (!store) {
        return;
      }
      openConfirmModal({
        type: store.enabled ? "single-off" : "single-on",
        storeIds: [store.id]
      });
    });
  });
}

function renderPage() {
  renderSummary();
  renderTable();
}

function openConfirmModal(action) {
  pendingAction = action;
  const affectedStores = stores.filter((store) => action.storeIds.includes(store.id));
  const isEnable = action.type.includes("on");
  const isAll = action.type.startsWith("all");

  modalTitle.textContent = isEnable ? "确认开启共享开关" : "确认关闭共享开关";
  modalDesc.textContent = isEnable
    ? "开启后，对应门店客户将参与共享扫描，请确认是否继续。"
    : "关闭后，对应门店将停止新增客户共享扫描，请确认是否继续。";
  modalStoreName.textContent = isAll
    ? "全部 MMC 门店"
    : affectedStores.map((store) => store.name).join("、");
  modalActionType.textContent = isAll
    ? isEnable ? "全部开启" : "全部关闭"
    : isEnable ? "开启" : "关闭";
  modalAffected.textContent = `${affectedStores.length} 家门店`;
  modalResult.textContent = isAll
    ? `全部 MMC 门店将变为${isEnable ? "开启" : "关闭"}状态`
    : `所选门店将变为${isEnable ? "开启" : "关闭"}状态`;

  confirmModal.classList.add("visible");
  confirmModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeConfirmModal() {
  pendingAction = null;
  confirmModal.classList.remove("visible");
  confirmModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");

  if (toastTimer) {
    window.clearTimeout(toastTimer);
  }

  toastTimer = window.setTimeout(() => {
    toast.classList.remove("visible");
  }, 2200);
}

function applyPendingAction() {
  if (!pendingAction) {
    return;
  }

  const actionType = pendingAction.type;
  const targetIds = actionType.startsWith("all")
    ? stores.map((store) => store.id)
    : pendingAction.storeIds;
  const nextEnabled = actionType.includes("on");
  const now = formatNow();

  stores = stores.map((store) => {
    if (!targetIds.includes(store.id)) {
      return store;
    }

    return {
      ...store,
      enabled: nextEnabled,
      operator: "平台管理员-当前用户",
      operatedAt: now
    };
  });

  const message = actionType.startsWith("all")
    ? `已${nextEnabled ? "开启" : "关闭"}全部 MMC 门店共享开关`
    : `已${nextEnabled ? "开启" : "关闭"}所选门店共享开关`;

  closeConfirmModal();
  renderPage();
  renderDropdown();
  showToast(message);
}

function queryStores() {
  appliedSearchQuery = draftSearchQuery;
  selectedStoreId = "";

  const exactStore = stores.find((store) => store.name === draftSearchQuery || store.id === draftSearchQuery);
  if (exactStore) {
    selectedStoreId = exactStore.id;
  }

  renderPage();
  storeDropdown.classList.remove("visible");
}

function resetFilters() {
  selectedStoreId = "";
  draftSearchQuery = "";
  appliedSearchQuery = "";
  statusFilter = "all";
  storeSearch.value = "";
  statusSelect.value = "all";
  renderPage();
  renderDropdown();
}

storeSearch.addEventListener("input", (event) => {
  draftSearchQuery = event.target.value;
  selectedStoreId = "";
  renderDropdown();
});

storeSearch.addEventListener("focus", renderDropdown);

statusSelect.addEventListener("change", (event) => {
  statusFilter = event.target.value;
});

queryBtn.addEventListener("click", queryStores);
clearFilterBtn.addEventListener("click", resetFilters);

enableAllBtn.addEventListener("click", () => {
  openConfirmModal({
    type: "all-on",
    storeIds: stores.map((store) => store.id)
  });
});

disableAllBtn.addEventListener("click", () => {
  openConfirmModal({
    type: "all-off",
    storeIds: stores.map((store) => store.id)
  });
});

backBtn.addEventListener("click", () => {
  if (window.history.length > 1) {
    window.history.back();
    return;
  }

  showToast("返回上一级页面");
});

confirmModalBtn.addEventListener("click", applyPendingAction);
cancelModalBtn.addEventListener("click", closeConfirmModal);

confirmModal.addEventListener("click", (event) => {
  if (event.target === confirmModal) {
    closeConfirmModal();
  }
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".search-box")) {
    storeDropdown.classList.remove("visible");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && document.activeElement === storeSearch) {
    queryStores();
  }

  if (event.key === "Escape") {
    storeDropdown.classList.remove("visible");
    if (confirmModal.classList.contains("visible")) {
      closeConfirmModal();
    }
  }
});

renderPage();
