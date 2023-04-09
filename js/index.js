window.addEventListener("scroll", function(){
    var header = this.document.querySelector ("header");
    header.classList.list.toggler ("abajo",window.scrollY>0);
})