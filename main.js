let ele = document.querySelector(".progress");

let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", function () {
    let scrollTop = document.documentElement.scrollTop;
    // console.log(scrollTop);
    ele.style.width = `${(scrollTop / height) * 100}%`;
})