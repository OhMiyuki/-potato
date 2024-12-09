document.querySelectorAll(".toggle-btn").forEach((button) => {
    button.addEventListener("click", function () {
        const faqItem = this.closest(".faq-item");
        const answer = faqItem.querySelector(".answer");

        // トグルを切り替え
        faqItem.classList.toggle("open");

        // ボタンの表示切り替え
        if (faqItem.classList.contains("open")) {
            this.textContent = "-";
        } else {
            this.textContent = "+";
        }
    });
});

// **********************************トップに戻るボタン**********************************

function siteScroll() {
    let scrolly = window.scrollY;
    const topButton = document.querySelector(".topButton");

    if (scrollY > 200) {
        topButton.classList.add("active");
    } else {
        topButton.classList.remove("active");
    }
}

window.addEventListener("scroll", siteScroll);


// **********************************ドロワーメニュー**********************************


const drawerbutton01=document.getElementById("drawerButton");
console.log("drawerbutton01");

const menu01=document.querySelector(".mobile_nav");
console.log("menu01");
// 変数を作って、HTMLからid属性drawerButtonがついている要素を探して見つけたら変数に代入


drawerbutton01.addEventListener("click" , drawermenu)
// 変数drawerbutton01がクリックされた時にイベントリスナーが動いて、関数drawermenuが実行される

function drawermenu(){
drawerbutton01.classList.toggle("close");
menu01.classList.toggle("open");
// 関数drawermenuを作って、処理をまとめておく
// 今回はボタンを押されたら、クラスのつけ外しが行われるので、クラスのつけ外しを行っている処理をまとめておく

// menu→closeにテキスト変更
const buttonText = drawerbutton01.querySelector("p"); // ボタン内の<p>要素を取得
if (drawerbutton01.classList.contains("close")) {
  buttonText.textContent = "close"; // closeクラスがついている場合
} else {
  buttonText.textContent = "menu"; // closeクラスが外れている場合
}

}





