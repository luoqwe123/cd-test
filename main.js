
function $(el){
    return document.querySelector(el)
}

(()=>{
    let h1  = $('h1');
    let btn = $("button")
    btn.onclick = ()=>{
    h1.style.color = "blue"
    }
})()

