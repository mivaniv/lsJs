function getRnd(result) {
    const variants = ["Криниця", "Папір", "Ножниці"];
    const variantsAI = document.getElementById("variantsAI");
    const resultAI = variants[Math.floor(Math.random() * variants.length)];
    const resultPl = document.querySelectorAll(".variants button");
    document.getElementById("variantsAI").innerText = resultAI;
    document.getElementsByName("variant").innerText= resultPl;
    console.log(resultPl);
    console.log(`resultPl ${resultPl}`);
    const winner = document.querySelector(".winner");
    if (resultAI === resultPl) {
        winner.textContent = "Нічія";
        return;
    }
    if (resultPl === "Криниця") {
        if (resultAI === "Ножниці") {
            winner.textContent = "Ти Переміг";
            return;
        } else {
            winner.textContent = "Комп Переміг";
            return;
        }
    }
    if (resultPl === "Папір") {
        if (resultAI === "Ножниці") {
            winner.textContent = "Комп Переміг";
            return;
        } else {
            winner.textContent = "Ти Переміг";
            return;
        }
    }
    if (resultPl === "Ножниці") {
        if (resultAI === "Криниця") {
            winner.textContent = "Комп Переміг";
            return;
        } else {
            winner.textContent = "Ти Переміг";
            return;
        }
    }
}
