function displayAbbreviations() {
    let abbreviation = document.getElementsByTagName("abbr");
    if (abbreviation.length <1) return false;

    let defin = new Array();
    for (let i=0;i<abbreviation.length;i++){
        let definition = abbreviation[i].getAttribute("title");
        let key = abbreviation[i].lastChild.nodeValue;
        defin[key] = definition
    }
    let dList = document.createElement("dl");
    for (key in defin){
        let definition = defin[key];
        let dtitle = document.createElement("dt");
        let dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        let ddesc = document.createElement("dd");
        let ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        dList.appendChild(dtitle);
        dList.appendChild(ddesc);
    }
    let header = document.createElement("h2");
    let header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(dList);
}

function displayCications(){
    let quotes = document.getElementsByTagName("blockquote");
    for (let i = 0; i < quotes.length; i++) {
        if (!quotes[i].getAttribute("cite")) continue;
        let url = quotes[i].getAttribute("cite");
        let quoteChildren = quotes[i].getElementsByTagName("*");
        if (quoteChildren.length <1) continue;
        let elem = quoteChildren[quoteChildren.length - 1];
        let link = document.createElement("a");
        let link_text = document.createTextNode("进入详情");
        link.appendChild(link_text);
        link.setAttribute("href",url);
        let superScript = document.createElement("sup");
        superScript.appendChild(link);
        elem.appendChild(superScript);
    }
}
addLoadEvent(displayAbbreviations);
addLoadEvent(displayCications);