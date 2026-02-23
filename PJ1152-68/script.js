const galleryImages = document.querySelectorAll(".gallery-img");
const modalImage = document.getElementById("modalImage");

if (galleryImages && modalImage) {
galleryImages.forEach(img=>{
img.addEventListener("click",function(){
modalImage.src = this.src;
});
});
}