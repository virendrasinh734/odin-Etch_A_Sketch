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
        // b.addEventListener("onclick",()=>{
        //     b.style.backgroundColor="red"});

        
    }
}
const q=document.querySelectorAll(".row");
q.forEach((ele) => {
    ele.addEventListener("mouseover", () => {
    //   console.log(random255())  
      ele.style.backgroundColor = `rgb(${random255()}, ${random255()}, ${random255()})`;
    });
  });
// function func(b){
//     b.style.backgroundColor="blue";
// }
const btn=document.querySelector("button");

btn.addEventListener("click",creatgrid)
function creatgrid(){
    const inp=prompt("Enter Grid dimension between 2 to 64");
    while(Number(inp) >64 || Number(inp)<2){
        inp=prompt("enter between 2 and 64")
    }
    let w=70*8/(Number(inp));
    let qer=document.querySelectorAll(".col");
    qer.forEach((ele)=>{
        ele.remove();
    });
    for(let i=0;i<inp;i++)
    {
        const a = document.createElement('div');
        a.classList.add("col");
        temp.appendChild(a);
        for(let j=0;j<inp;j++){
            const b = document.createElement('div');
            b.classList.add("row");
            b.style.width=`${w}px`;
            b.style.height=`${w}px`;
            a.appendChild(b);
    }
}

    const q=document.querySelectorAll(".row");
    q.forEach((ele)=>{ele.addEventListener("mouseover",()=>{
        ele.style.backgroundColor = `rgb(${random255()}, ${random255()}, ${random255()})`;
    });}
    );


}

function random255(){
    return Number(Math.floor(Math.random()*(256)));
}