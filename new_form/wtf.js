const checkBox = () => {
let textBox = document.querySelectorAll(".content1");
    for (let i = 0;i<textBox.length;i++) {
        if (textBox[i].value == "") {
            textBox[i].classList.remove('changeBackground');
        } else {
            textBox[i].classList.add('changeBackground');
        }
    }
}
