document.addEventListener("DOMContentLoaded", function () {
    const headerBurder = document.querySelector('.header__burger');
    headerBurder.addEventListener('click', () =>{
        document.querySelector('.header__menu').classList.toggle('active')
        document.querySelector('.body').classList.toggle('no-scroll')
    })
    document.querySelectorAll('.header__link-icon').forEach(icon => {
        icon.addEventListener('click', () => {
            const headerLinkTop = icon.closest('.header__link-top');
            headerLinkTop.classList.toggle('active');
        });
    });

    if(document.querySelector('.accountpopup')){
        document.querySelector('.create-btn').addEventListener('click', () =>{
            document.querySelectorAll('.accountpopup__content').forEach(element => {
                element.classList.remove('active');
            });
            document.querySelector('.accountpopup__content-create').classList.add('active')
        });
    
        document.querySelector('.login-btn').addEventListener('click', () =>{
            document.querySelectorAll('.accountpopup__content').forEach(element => {
                element.classList.remove('active');
            });
            document.querySelector('.accountpopup__content-login').classList.add('active')
        });
        
        document.querySelector('.accountpopup__select-name').addEventListener('click', function() {
            const content = document.querySelector('.accountpopup__select-content');
            content.classList.toggle('active');
        });    
    
        document.querySelectorAll('.accountpopup__select-item').forEach(item => {
            item.addEventListener('click', function() {
                document.querySelector('.accountpopup__select-name').textContent = this.textContent;
                document.querySelector('.accountpopup__select-content').classList.remove('active');
            });
        });
    
        const accountpopupBtnsOpen = document.querySelectorAll('.loginBtn')
        const accountpopupBtnsClose = document.querySelector('.accountpopup__close')
    
        accountpopupBtnsOpen.forEach(item => {
            item.addEventListener('click', function() {
                accountpopupReset()
                document.querySelectorAll('.accountpopup__content').forEach(element => {
                    element.classList.remove('active');
                });
                document.querySelector('.accountpopup__content-login').classList.add('active')
            });
        });
    
        accountpopupBtnsClose.addEventListener('click', accountpopupReset);
    
        function accountpopupReset(){
            document.querySelector('.accountpopup').classList.toggle('active');
            document.querySelector('.body').classList.toggle('no-scroll');
        }
    }  


    if (document.querySelector('.popupdiscount')) {
        setTimeout(() => {
            document.querySelector('.popupdiscount').classList.add('active');
        }, 2000);
        document.querySelectorAll('.popupdiscount__close, .popupdiscount__later').forEach(element => {
            element.addEventListener('click', () => {
                document.querySelector('.popupdiscount').classList.remove('active');
            });
        });

    }

    
});
