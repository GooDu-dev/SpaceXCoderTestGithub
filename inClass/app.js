window.onresize = function(){
    setOpSize()
    setTabSize()
}


function showCate(type){
    let cates = document.querySelectorAll(".cate")
    cates.forEach(cate => {
        let cate_type = Number(cate.getAttribute("type"))
        switch(Number(type)){
            case cate_type:
                cate.style.display = "flex"
                break;
            case 0:
                cate.style.display = "flex"
                break;
            default:
                cate.style.display = "none"
                break;
        }
    })
}

function addEventNav(){
    let nav_texts = document.querySelectorAll(".nav_text")
    nav_texts.forEach(nav_text => {
        nav_text.addEventListener("click", function(){
            let type = Number(nav_text.getAttribute("type"))
            chaseMouse(nav_text.offsetWidth, nav_text.offsetLeft)
            showCate(type)
        })
    })
}
addEventNav()

function chaseMouse(width, left){
    let tab = document.getElementById("tab")
    tab.style.width = Number(width) + "px";
    tab.style.left = Number(left) + "px"
    console.log("run this")
}

function setTabSize(){
    let nav_text = document.getElementsByClassName("nav_text")[0]
    chaseMouse(nav_text.offsetWidth, nav_text.offsetLeft)
}
setTabSize()

function setOpSize(){
    let op = document.getElementsByClassName("op-container")[0]
    op.style.height = window.innerHeight + "px"
}
setOpSize()