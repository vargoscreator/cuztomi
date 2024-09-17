const paymentItems = document.querySelectorAll('.checkout__payment-item');
paymentItems.forEach(item => {
  const label = item.querySelector('label');
  label.addEventListener('click', () => {
    paymentItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});
document.querySelector('.cart__coupon-name').addEventListener('click', ()=>{
    document.querySelector('.cart__totals-coupon').classList.toggle('active');
});