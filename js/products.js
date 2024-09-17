document.querySelectorAll('.questions__item-name').forEach(function(nameElement) {
    nameElement.addEventListener('click', function() {
        const parentItem = this.closest('.questions__item');
        if (parentItem.classList.contains('active')) {
            parentItem.classList.remove('active');
        } else {
            document.querySelectorAll('.questions__item').forEach(function(item) {
                item.classList.remove('active');
            });
            parentItem.classList.add('active');
        }
    });
});
