class PurchaseHandler {
  processPayment(paymentDetails, amount) {
    const paymentSuccess = PayPal.requestPayment(paymentDetails, amount);

    if (paymentSuccess) {
      return true;
    }

    return false;
  }
}
