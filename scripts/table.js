function addLoadEvent(func) {
    let oldOnload = window.onload;
    if (typeof window.onload != 'function'){
        window.onload = func;
    } else {
        window.onload = function () {
            oldOnload();
            func();
        }
    }
}

function highlightRows() {
    let rows = document.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {

        rows[i].onmouseover = function () {
            this.style.color = "blue";
        }
        row[i].onmouseout = function () {
            this.style.color = "black";
        }
    }
}
addLoadEvent(highlightRows);