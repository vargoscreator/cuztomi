document.querySelectorAll('.faq__item-name').forEach(function(nameElement) {
    nameElement.addEventListener('click', function() {
        const parentItem = this.closest('.faq__item');
        if (parentItem.classList.contains('active')) {
            parentItem.classList.remove('active');
        } else {
            document.querySelectorAll('.faq__item').forEach(function(item) {
                item.classList.remove('active');
            });
            parentItem.classList.add('active');
        }
    });
});
