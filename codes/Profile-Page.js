const imageinp = document.querySelector(".imageinpu");
imageinp.addEventListener("change", function() {
    const reader1 = new FileReader();
    reader1.addEventListener("load", () => {
    const uploadedimage = reader1.result;
    document.querySelector(".avatar").src = uploadedimage
  });
    reader1.readAsDataURL(this.files[0]);
});