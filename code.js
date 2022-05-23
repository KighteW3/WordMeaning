
function wordSearch() {
    let actualLang = document.querySelector(".form-parent").name;
    if (actualLang == "english"){
        let word = document.querySelector(".text-input").value;
        window.open(`https://www.merriam-webster.com/dictionary/${word}`);
    }else if (actualLang == "español"){
        let word = document.querySelector(".text-input").value;
        window.open(`https://dle.rae.es/${word}?m=form`);
    }
}

