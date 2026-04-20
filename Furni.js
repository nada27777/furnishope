let currentPhotoNumber = 1; // بنبدأ بصورة رقم 1
const totalPhotos = 6; // غيري الرقم ده حسب عدد الصور اللي عندك فعلياً

const sliderImg = document.getElementById('slider-img');

function nextSlide() {
    currentPhotoNumber++; // نزود الرقم 1
    
    // لو الرقم عدى عدد الصور الكلي يرجع لـ 1
    if (currentPhotoNumber > totalPhotos) {
        currentPhotoNumber = 1;
    }
    
    // نغير مسار الصورة باستخدام الرقم الجديد
    // تأكدي إن الامتداد (png) صح ومطابق للي عندك
    sliderImg.src = `picturesFurniture/chair/${currentPhotoNumber}.jpg`;

}

function prevSlide() {
    currentPhotoNumber--; // ننقص الرقم 1
    
    // لو الرقم بقى أقل من 1 يروح لآخر صورة
    if (currentPhotoNumber < 1) {
        currentPhotoNumber = totalPhotos;
    }
    
    sliderImg.src = `picturesFurniture/chair/${currentPhotoNumber}.jpg`;
}
//product page js
// قراءة البيانات من الرابط (URL)
const params = new URLSearchParams(window.location.search);

const name = params.get('name');
const price = params.get('price');
const img = params.get('img');

if(name) {
    document.getElementById('product-title').innerText = name;
    document.getElementById('product-price').innerText = "$" + price;

document.getElementById('main-product-img').src = "picturesFurniture/sofa/" + img;}

function openNav() {
    document.getElementById("side-menu").style.width = "250px";
}

function closeNav() {
    document.getElementById("side-menu").style.width = "0";
}