document.addEventListener("DOMContentLoaded", function() {
    const englishButton = document.getElementById("english-button");
    const spanishButton = document.getElementById("spanish-button");
    const greetingText = document.getElementById("greeting");

    // 默认语言为英语
    let currentLanguage = "english";

    // 定义语言切换函数
    function updateLanguage(language) {
        if (language === "english") {
            greetingText.textContent = "Hello, welcome to our website!";
        } else if (language === "spanish") {
            greetingText.textContent = "¡Hola, bienvenido a nuestro sitio web!";
        }
       
        // 更新当前语言
        currentLanguage = language;
    }

    // 添加按钮点击事件监听器
    englishButton.addEventListener("click", function() {
        if (currentLanguage !== "english") {
            updateLanguage("english");
        }
    });

    spanishButton.addEventListener("click", function() {
        if (currentLanguage !== "spanish") {
            updateLanguage("spanish");
        }
    });
});
