

let getData=async(page_number)=>{
    try{
let res=await fetch(`https://json-server-sco3.onrender.com/posts?_page=${page_number}}&_limit=5`)
let data =await res.json();
append(data)

console.log(data)
    }
    catch(err){
console.log(data)
    }

}


let container=document.getElementById("container");

function append(data){
    container.innerHTML=""
    data.forEach(({ image,name,price,rating }) => {
        let div=document.createElement("div");
        let img=document.createElement("img");
        
        img.src=image;
       

        let p=document.createElement("p");
        p.innerText=`Restaurant :-${name}`;
        let price1=document.createElement("p")
        price1.innerText=`Minimim Price :-${price}`;
        let rating1=document.createElement("p");
        rating1.innerText=`Rating :-${rating}`
        
        div.append(img,p,price1,rating1)
        container.append(div);
        
    });

}

let showButtons=(results,per_page)=>{
let buttons_div=document.getElementById("buttons");
let buttons=Math.ceil(results/per_page);
for(let i=1;i<=buttons;i++){
    let btn=document.createElement("button");
    btn.innerText=i;
    btn.onclick=function(){
        getData(i)
      
    }
    buttons_div.append(btn);
}
}
// showButtons(12,3)






let getData1=async(page_number)=>{
    try{
let res=await fetch(`https://json-server-sco3.onrender.com/posts`)
let data =await res.json();
showButtons(data.length,5)
// for showing default 3 products without clicking on button
let arr2=[]
for(let i=0;i<5;i++){
    arr2.push(data[i])

}
append(arr2)
console.log(data)
    }
    catch(err){
console.log(err)
    }

}
getData1();

// for ratings highest to lowest
let filter=async(page_number)=>{
    try{
let res=await fetch(`https://json-server-sco3.onrender.com/posts?_page=${page_number}}&_limit=5`)
let data =await res.json();

filter4(data)
console.log(data)
    }
    catch(err){
console.log(data)
    }

}

function filter4(data){

  data.sort(function(a,b){
  return  b.rating-a.rating
  })
append(data)

}