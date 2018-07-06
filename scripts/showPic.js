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
function insertAfter(newElement,targetElement) {
    let parent = targetElement.parentNode;
    if (parent.lastChild == targetElement){
        parent.appendChild(newElement)
    } else {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

function preparePlaceholder() {
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    let placeholder = document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","images/pic0.png");
    placeholder.setAttribute("alt","my image Gallery");
    placeholder.setAttribute("width","500");
    placeholder.setAttribute("height","500");
    let desciption = document.createElement("p");
    desciption.setAttribute("id","description");
    let desctext = document.createTextNode("Choose a image");
    desciption.appendChild(desctext);
    let gallery = document.getElementById("imagegallery");
    insertAfter(placeholder,gallery);
    insertAfter(desciption,placeholder);
}

function prepareGallery() {
   if (!document.getElementsByTagName) return false;
   if (!document.getElementById) return false;
   if (!document.getElementById("imagegallery")) return false;
   let gallery = document.getElementById("imagegallery");
   let links = gallery.getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            return showPic(this);
        };
        links[i].onkeypress = links[i].onclick;
    }
}

function showPic(whichpic) {
    if (!document.getElementById("placeholder")) return true;
    let source = whichpic.getAttribute("href");
    let placeholder = document.getElementById("placeholder");
    let text = "";
    placeholder.setAttribute("src",source);
    if (!document.getElementById("description")) return false;
    if (whichpic.getAttribute("title")){
        text = whichpic.getAttribute("title");
    }
    let description = document.getElementById("description");
    if (description.firstChild.nodeType == 3){
        description.firstChild.nodeValue = text;
    }
    return false;
}
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);