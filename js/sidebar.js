const mobile_btn = document.querySelectorAll(".mobile-sidebar-btn");
const mobile_sidebar = document.querySelector(".mobile-sidebar");

mobile_btn.forEach((ele) => {
    ele.addEventListener("click", () => {
        mobile_sidebar.classList.toggle("mobile-sidebar-active")

    })
})