document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.querySelectorAll('.cart__item');
    cartItems.forEach(item => {
        const minusButton = item.querySelector('.cart__quantity-minus');
        const plusButton = item.querySelector('.cart__quantity-plus');
        const quantityCount = item.querySelector('.cart__quantity-count');
        const itemPrice = item.querySelector('.cart__item-price');
        const itemTotal = item.querySelector('.cart__item-total');
        const pricePerItem = parseFloat(itemPrice.textContent.replace('$', ''));
        plusButton.addEventListener('click', function() {
            let count = parseInt(quantityCount.textContent);
            count++;
            quantityCount.textContent = count;
            updateTotal(count, pricePerItem, itemTotal);
        });
        minusButton.addEventListener('click', function() {
            let count = parseInt(quantityCount.textContent);
            if (count > 1) {
                count--;
                quantityCount.textContent = count;
                updateTotal(count, pricePerItem, itemTotal);
            }
        });
    });
    function updateTotal(count, pricePerItem, itemTotal) {
        const totalPrice = (count * pricePerItem).toFixed(2);
        itemTotal.textContent = `$${totalPrice}`;
    }

    document.querySelector('.cart__coupon-name').addEventListener('click', ()=>{
        document.querySelector('.cart__totals-coupon').classList.toggle('active');
    });
});
