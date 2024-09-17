let galleryThumbs = new Swiper(".product__slider .gallery-thumbs", {
    spaceBetween: 12,
    slidesPerView: 4,     
    loop: false,
    freeMode: true,
    loopedSlides: 4,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
        768: {
            spaceBetween: 16,
        },
    },
});
let galleryTop = new Swiper(".product__slider .gallery-top", {
    spaceBetween: 16,
    loop: false,
    loopedSlides: 4,
    thumbs: {
        swiper: galleryThumbs,
    },
});

document.querySelectorAll('.product__about-name').forEach(function(nameElement) {
    nameElement.addEventListener('click', function() {
        const parentItem = this.closest('.product__about-item');
        if (parentItem.classList.contains('active')) {
            parentItem.classList.remove('active');
        } else {
            document.querySelectorAll('.product__about-item').forEach(function(item) {
                item.classList.remove('active');
            });
            parentItem.classList.add('active');
        }
    });
});

const reviewBasedText = document.querySelector(".product__review-based")?.textContent || "";
const totalReviews = parseInt(reviewBasedText.replace(/\D/g, ''));
const blockItems = document.querySelectorAll(".product__block-item");
blockItems.forEach(item => {
    const reviewCount = parseInt(item.querySelector(".product__block-descr").textContent.replace(/\D/g, ''));
    const line = item.querySelector(".product__block-line span");
    if (reviewCount > 0 && totalReviews > 0) {
        const percentage = (reviewCount / totalReviews) * 100;
        line.style.width = `${percentage}%`;
    }
});

document.querySelectorAll('.productcustomize__form-image img').forEach((img, index) => {
    img.addEventListener('click', function () {
        document.querySelectorAll('.productcustomize__form-image input').forEach(input => {
            input.checked = false;
        });
        const input = this.previousElementSibling;
        input.checked = true;
        document.querySelectorAll('.productcustomize__left-image').forEach(image => {
            image.classList.remove('active');
        });
        document.querySelectorAll('.productcustomize__left-image')[index].classList.add('active');
    });
});
document.querySelectorAll('.productcustomize__form-color span').forEach((img, index) => {
    img.addEventListener('click', function () {
        document.querySelectorAll('.productcustomize__form-color input').forEach(input => {
            input.checked = false;
        });
        const input = this.previousElementSibling;
        input.checked = true;
    });
});

const fileInputs = document.querySelectorAll('.custom-file-upload + input[type="file"]');
const fileLabels = document.querySelectorAll('.custom-file-upload');
const fileNames = document.querySelectorAll('#file-name');

fileInputs.forEach((fileInput, index) => {
    const fileLabel = fileLabels[index];
    const fileNameDisplay = fileNames[index];

    fileLabel.addEventListener('dragover', (e) => {
        e.preventDefault();
        fileLabel.classList.add('dragover');
    });

    fileLabel.addEventListener('dragleave', () => {
        fileLabel.classList.remove('dragover');
    });

    fileLabel.addEventListener('drop', (e) => {
        e.preventDefault();
        fileLabel.classList.remove('dragover');
        fileInput.files = e.dataTransfer.files;
        updateFileName(fileInput, fileNameDisplay);
    });

    fileInput.addEventListener('change', () => {
        updateFileName(fileInput, fileNameDisplay);
    });
});

function updateFileName(fileInput, fileNameDisplay) {
    const fileName = fileInput.files.length > 0 ? fileInput.files[0].name : '';
    if (fileName) {
        fileNameDisplay.innerHTML = `<span>File selected:</span> ${fileName}`;
    } else {
        fileNameDisplay.innerHTML = `<span>Click to upload</span> or drag and drop <br>SVG, PNG, JPG (max. 800x400px)`;
    }
}

const qtyBlocks = document.querySelectorAll('.productcustomize__form-block');
qtyBlocks.forEach((block) => {
    const input = block.querySelector('input[type="number"]');
    const btnUp = block.querySelector('.custom-arrow.up');
    const btnDown = block.querySelector('.custom-arrow.down');
    if (input && btnUp && btnDown) {
        btnUp.addEventListener('click', function() {
            input.stepUp();
        });
        btnDown.addEventListener('click', function() {
            input.stepDown();
        });
    }
});

document.querySelector('.customize-font-btn').addEventListener('click', function() {
    document.querySelectorAll('.productcustomize-golf .productcustomize__content').forEach(element => {
        element.classList.remove('active');
    }); 
    document.querySelector('.productcustomize-golf .productcustomize__font-content').classList.add('active');
});
document.querySelector('.customize-back-btn').addEventListener('click', function() {
    document.querySelectorAll('.productcustomize-golf .productcustomize__content').forEach(element => {
        element.classList.remove('active');
    }); 
    document.querySelector('.productcustomize-golf .productcustomize__back-content').classList.add('active');
});
document.querySelectorAll('.productcustomize__form-back button, .productcustomize__font-continue, .productcustomize__back-continue').forEach(element => {
    element.addEventListener('click', function() {
        document.querySelectorAll('.productcustomize-golf .productcustomize__content').forEach(element => {
            element.classList.remove('active');
        }); 
        document.querySelectorAll('.productcustomize-golf .productcustomize__content')[0].classList.add('active');
    });
}); 



const productCustomizeInners = document.querySelectorAll('.productcustomize__inner');
productCustomizeInners.forEach((productcustomizeInner) => {
    productcustomizeInner.addEventListener('touchstart', handleTouchStart, false);
    productcustomizeInner.addEventListener('touchmove', handleTouchMove, false);
});
let yStart = null;
function handleTouchStart(evt) {
    yStart = evt.touches[0].clientY;
}
function handleTouchMove(evt) {
    if (!yStart) {
        return;
    }
    let yMove = evt.touches[0].clientY;
    let yDiff = yStart - yMove;
    let productcustomizeInner = evt.currentTarget;    
    let isAtTop = productcustomizeInner.scrollTop === 0;
    if (isAtTop && yDiff < 0) {
        productcustomizeInner.classList.remove('expanded');
    } else if (yDiff > 0) {
        productcustomizeInner.classList.add('expanded');
    }
    yStart = null;
}

const productcustomizecloseButtons = document.querySelectorAll('.productcustomize__close, .productcustomize__bottom-cancel');
productcustomizecloseButtons.forEach((closeButton) => {
    closeButton.addEventListener('click', () => {
        const productBlock = closeButton.closest('.productcustomize');
        if (productBlock) {
            productBlock.classList.remove('active');
            document.querySelector('.body').classList.remove('no-scroll');
        }
    });
});

document.querySelectorAll('.product__btn').forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-productcustomize');
        document.querySelector('.body').classList.add('no-scroll');
        const productCustomize = document.querySelector(`.${target}`);
        if (productCustomize) {
            productCustomize.classList.add('active');
        }
    });
});
