const API_BASE_URL = "https://example.com/api";
const ORDER_STATUS = {
  DELIVERED: "Delivered",
};

function getOrderModalElements() {
  const modal = document.getElementById("orderModal");

  return {
    modal,
    detailsContainer: modal.querySelector("#orderDetails"),
    closeButton: modal.querySelector(".close"),
    confirmButton: modal.querySelector("#confirmOrderBtn"),
  };
}

async function fetchOrderDetails(orderId, token) {
  try {
    const order = await getOrderById(orderId, token);
    showOrderDetailsModal(order, token);
  } catch (error) {
    handleOrderDetailsError(error);
  }
}

async function getOrderById(orderId, token) {
  const response = await fetch(`${API_BASE_URL}/order/${orderId}`, {
    headers: {
      Authorization: token,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch order details");
  }

  return response.json();
}

function showOrderDetailsModal(order, token) {
  const {
    modal,
    detailsContainer,
    closeButton,
    confirmButton,
  } = getOrderModalElements();

  renderOrderDetails(detailsContainer, order);
  setupCloseButton(closeButton, modal);
  setupConfirmButton(confirmButton, order, token);
  openModal(modal);
}

function renderOrderDetails(container, order) {
  container.innerHTML = "";

  const header = createTextElement("h3", `Order ID: ${order.id}`);
  const status = createTextElement("p", `Status: ${order.status}`);

  container.appendChild(header);
  container.appendChild(status);
}

function createTextElement(tagName, text) {
  const element = document.createElement(tagName);
  element.textContent = text;
  return element;
}

function setupCloseButton(closeButton, modal) {
  closeButton.onclick = () => closeModal(modal);
}

function setupConfirmButton(confirmButton, order, token) {
  confirmButton.onclick = null;

  if (order.status === ORDER_STATUS.DELIVERED) {
    hideElement(confirmButton);
    return;
  }

  showElement(confirmButton);

  confirmButton.onclick = () => {
    confirmOrder(order.id, token);
  };
}

function openModal(modal) {
  modal.style.display = "block";
}

function closeModal(modal) {
  modal.style.display = "none";
}

function showElement(element) {
  element.style.display = "block";
}

function hideElement(element) {
  element.style.display = "none";
}

function handleOrderDetailsError(error) {
  console.error("Error:", error.message);
}
