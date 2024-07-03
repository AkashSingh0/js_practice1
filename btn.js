const text=[
    "Welcome Home Winner!",
    "Congrats India!",
    "140Cr Indian Salute You",
    "You are the Proud of India",
    "Best Captain Ever Rohit Sharma"
];
let currentIndex=0;

document.getElementById("btn").addEventListener("click", function(){
    currentIndex= (currentIndex+1)% text.length;
    document.getElementById("myPara").textContent=text[currentIndex];
});













// const texts = [
//     "This is the original text.",
//     "This is the second text.",
//     "Here is the third text.",
//     "Now it's the fourth text.",
//     "And finally the fifth text."
// ];

// let currentIndex = 0;

// document.getElementById("myButton").addEventListener("click", function() {
//     currentIndex = (currentIndex + 1) % texts.length;
//     document.getElementById("myParagraph").textContent = texts[currentIndex];
// });
