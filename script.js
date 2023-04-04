let temp=document.getElementById("container");
for(let i=0;i<8;i++)
{
    const a = document.createElement('div');
    a.classList.add("col");
    temp.appendChild(a);
    for(let j=0;j<8;j++){
        const b = document.createElement('div');
        b.classList.add("row");
        //b.setAttribute("onmouseover",`${b}.classList.add('hov')`);

        a.appendChild(b);
    }
}
function func(b){
    b.style.backgroundColor="blue";
}