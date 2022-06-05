let spans = document.getElementsByTagName("span");
let len = spans.length;
for(let i = 0; i < len; i++){
    spans[i].onclick = function(){
        for(let j = 0; j < len; j++){
            spans[j].className = "none";
        }
        spans[i].className = "on";
        this.style.cursor = "pointer";
    }
}
