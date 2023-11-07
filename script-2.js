document.addEventListener("DOMContentLoaded", function () {
    const allFreqDropdown = document.querySelectorAll(".freq-dropdown");
    const allFreqDetail = document.querySelectorAll(".freq-detail");
    const allFreqMenu = document.querySelectorAll(".freq-menu");

    allFreqDropdown.forEach((ele, i) => {
        ele.addEventListener("click", () => {
            if (allFreqDetail[i].classList.contains("freq-detail-active")) {
                allFreqDetail[i].classList.toggle("freq-detail-active")
                allFreqMenu[i].classList.toggle("freq-menu-active")

            } else {
                allFreqDetail[i].classList.toggle("freq-detail-active")
                allFreqMenu[i].classList.toggle("freq-menu-active")
            }
        })
    })

})