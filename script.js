const showListBtn = document.querySelector("#showList");

window.onload = function () {
    showListBtn.addEventListener("click", function (e) {
        e.preventDefault();
        goToListPage();
    })
}

function goToListPage(){
    location.href = 'index1.html';
}