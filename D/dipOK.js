class PurchaseHandler {
  processPayment(paymentDetails, amount) {
    const paymentSuccess = PaymentHandler.requestPayment(
      paymentDetails,
      amount
    );

    if (paymentSuccess) {
      return true;
    }

    return false;
  }
}

class PaymentHandler {
  requestPayment(paymentDetails, amount) {
    return PayPal.requestPayment(paymentDetails, amount);
  }
}
