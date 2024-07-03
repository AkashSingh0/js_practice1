document.getElementById("btn").addEventListener("click", function(){
    const image1=document.getElementById("img1")
    const image2=document.getElementById("img2")

    const res= img1.src;
    img1.src=img2.src;
    img2.src=res;
});