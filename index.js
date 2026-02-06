const toggleButton = document.getElementById("bkaah-button");
const paymentPanel = document.getElementById("payment-panel");
const tabButtons = document.querySelectorAll(".tab-button");
const formPanels = document.querySelectorAll(".form-panel");
const paymentAlert = document.getElementById("payment-alert");

const showPaymentPrompt = () => {
  if (!paymentPanel || !toggleButton || !paymentAlert) {
    return;
  }

  paymentPanel.classList.add("active");
  toggleButton.textContent = "Hide Payment";
  paymentAlert.classList.add("active");
  paymentPanel.scrollIntoView({ behavior: "smooth", block: "start" });
};

if (toggleButton && paymentPanel) {
  toggleButton.addEventListener("click", () => {
    paymentPanel.classList.toggle("active");
    toggleButton.textContent = paymentPanel.classList.contains("active")
      ? "Hide Payment"
      : "Payment Now";
  });
}

formPanels.forEach((panel) => {
  panel.addEventListener("submit", (event) => {
    event.preventDefault();
    showPaymentPrompt();
  });
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((tab) => tab.classList.remove("active"));
    formPanels.forEach((panel) => panel.classList.remove("active"));
    button.classList.add("active");
    const targetId = button.getAttribute("data-target");
    const panel = document.getElementById(targetId);
    if (panel) {
      panel.classList.add("active");
    }
  });
});
