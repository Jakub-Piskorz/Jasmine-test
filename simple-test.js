let name = document.querySelector("#name");
const formSubmit = () => {
    let request = name.value;
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = () => {
        if (ajax.readyState == 4 && ajax.status == 200) {
            document.querySelector("#answer").innerHTML = ajax.responseText;
        }
    }
    ajax.open("GET", "myFirst.php?q=" + request, true);
    ajax.send();
}
let submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", formSubmit);