const wallet_menu = document.querySelectorAll(".wallet-menu");
const content = document.querySelectorAll(".wallet-menu p");
const wallet_img = document.querySelector(".wallet-img > img")
const wallet_img_select = ['./assetsBlockchain/homepage/app-ease.png',
    './assetsBlockchain/homepage/app-earn-rewards.png',
    './assetsBlockchain/homepage/app-self-custody.png',
    './assetsBlockchain/homepage/app-connect-defi.png']
function resetElements(excludeIndex) {
    wallet_menu.forEach((ele, j) => {
        ele.style.height = j === excludeIndex ? "auto" : "56px";
        ele.style.backgroundColor = j === excludeIndex ? "rgb(239, 236, 254)" : "rgb(247, 245, 255)";
        content[j].style.marginTop = j === excludeIndex ? "8px" : "0px";
        content[j].style.height = j === excludeIndex ? '48px' : "0";
    });

    wallet_img.src = wallet_img_select[excludeIndex];

}

resetElements(0);

wallet_menu.forEach((ele, i) => {
    ele.addEventListener("click", () => {
        console.log("Hello");
        resetElements(i);
    });
});
