var btn_html = document.getElementById("html");
var btn_css = document.getElementById("css");
var btn_js = document.getElementById("js");
var btn_reactjs = document.getElementById("reactjs");
var menu_itens = document.querySelectorAll(".menu a[href^='#']");


menu_itens.forEach(item => {
    item.addEventListener("click", scrollitens);
})

function getScrollTopByHref(element){
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

function scrollitens(event){
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 65.59; 
    scrollToPosition(to);
}

function scrollToPosition(to){
    window.scroll({
        top: to,
        behavior: "smooth"
    });
}


btn_html.addEventListener("click", function() {

    document.getElementById("texto").innerText = "HTML is an abbreviation for the English expression HyperText Markup Language, which means: HyperText Markup Language is a markup language used in the construction of web pages."

})

btn_css.addEventListener("click", function() {

    document.getElementById("texto").innerText = "It is a markup language, widely used with HTML or XHTML, and represents several possibilities for formatting. CSS helps you edit, align, remove and work in the space between elements on a page."
    
})

btn_js.addEventListener("click", function (){

    document.getElementById("texto").innerText = "JavaScript is a programming language that allows you to implement complex items in web pages whenever a web page does more than simply show you static information by showing content that updates over time."

})

btn_reactjs.addEventListener("click", function () {

    document.getElementById("texto").innerText = "React is the most popular JavaScript library and is used to build a user interface (UI). It provides an excellent response for the user to add commands using a new method of rendering websites. The components of this tool were developed by Facebook."

})