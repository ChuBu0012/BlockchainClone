document.addEventListener("DOMContentLoaded", function () {
    // Your JavaScript code here

    const wallet_menu = document.querySelectorAll(".wallet-menu");
    const wallet_content = document.querySelectorAll(".wallet-menu p");
    const wallet_img = document.querySelector(".wallet-img > img");

    const wallet_img_select = ['./assetsBlockchain/homepage/app-ease.png', './assetsBlockchain/homepage/app-earn-rewards.png', './assetsBlockchain/homepage/app-self-custody.png', './assetsBlockchain/homepage/app-connect-defi.png'];

    function resetElements(excludeIndex) {
        wallet_menu.forEach((ele, j) => {
            ele.style.height = j === excludeIndex ? "auto" : "56px";
            ele.style.backgroundColor = j === excludeIndex ? "rgb(239, 236, 254)" : "rgb(247, 245, 255)";
            wallet_content[j].style.marginTop = j === excludeIndex ? "8px" : "0px";
            wallet_content[j].style.height = j === excludeIndex ? '48px' : "0";
        });
        wallet_img.src = wallet_img_select[excludeIndex];
    }

    resetElements(0);

    wallet_menu.forEach((ele, i) => {
        ele.addEventListener("click", () => {
            resetElements(i);
        });
    });

    const exchange_menu = document.querySelectorAll(".exchange-menu");
    const exchange_content = document.querySelectorAll(".exchange-menu p");
    const exchange_img = document.querySelector(".exchange-img > img");
    const exchange_img_select = ['./assetsBlockchain/homepage/prod-exchange-fiat-currencies.png',
        './assetsBlockchain/homepage/prod-exchange-matching-engine.png',
        './assetsBlockchain/homepage/prod-exchange-chat-support.png',
        './assetsBlockchain/homepage/ex-landing-margin-image.png'];

    function resetElementsExchange(excludeIndex) {
        exchange_menu.forEach((ele, j) => {
            ele.style.height = j === excludeIndex ? "auto" : "56px";
            ele.style.backgroundColor = j === excludeIndex ? "rgb(236, 245, 254)" : "rgb(245, 250, 254)";
            exchange_content[j].style.marginTop = j === excludeIndex ? "8px" : "0px";
            exchange_content[j].style.height = j === excludeIndex ? '48px' : "0";
        });

        exchange_img.src = exchange_img_select[excludeIndex];

        if (excludeIndex == 3) {
            exchange_img.style.right = "60px";
        } else {
            exchange_img.style.right = "0px";

        }
    }

    resetElementsExchange(0);

    exchange_menu.forEach((ele, i) => {
        ele.addEventListener("click", () => {
            resetElementsExchange(i);
        });
    });
});
