// DOM (document object model)
// dom = body
// jab web pe kuch krne se kuch hota h use dom manipulation khte h 

// let sher = document.getElementsByClassName("df");
// console.log(sher)

// let abcd=document.querySelector("h1");
// console.dir(abcd)

// let h1 = document.querySelector("h1");
// h1.innerHTML = " <i> hello</>"
// let a = document.querySelector("a");
// // a.href = "https://chess.com "
// a.setAttribute ("href","https://google.com")
// console.dir(a)


// let h1 = document.createElement("h1")
// h1.textContent = "sher";
// document.body.prepend(h1)

// let h1 =  document.querySelector("h1");
// h1.remove();

// let h1= document.createElement("h1");
// h1.textContent="Shher"
// //document.body.append(h1)
// let a = document.querySelector("div").append(h1);
// // a.appendChild(h1)


// let h1 = document.querySelector("h1");
// // h1.style.color = "red";
// // h1.style.textTransform = "capitalize"

// h1.classList.toggle ("hulu");
// console.dir(h1)

// let a = document.getElementsByClassName("fg")
// console.log(a)

// let a = document.querySelectorAll("li");
// for(let i = 0;i<a.length;i++){
//     console.log(a[i].textContent)
// }

// let h1 = document.querySelector("h1")
// h1.textContent = "dsgdfg"

// let a = document.querySelector("ul");
// let b = document.createElement("li");
// b.textContent = "sher34535";
// a.append(b)


// document.body.style.marginLeft = '20px';
// document.body.style.marginTop = '10px';
// let a = document.querySelectorAll("ul li:nth-child(2n)")
// a.forEach(function(val){
//     val.classList.add("highlight")
// })

// bta =prompt("Tell the colour jo dbl click pe aayega")
// bta2 = prompt("Tell the colour jo single click pe aayega")
// bta3 = prompt("Tell the colour jo mouse rkhne pe aayega")
// bta4 = prompt("Tell the colour jo mouse htane pe aayega")

// let a = document.querySelector("h1");
// a.addEventListener("mouseover",function(){
//     a.style.color = bta3;
// })
// a.addEventListener("mouseout",function(){
//     a.style.color = bta4;
// })
// a.addEventListener("click",function(){
//     a.style.color = bta2;
// })
// a.addEventListener("dblclick",yellow)

// function yellow(){
//     a.style.color = bta
// }
// // a.removeEventListener("dblclick",yellow)

// let a = document.querySelector("input");
// a.addEventListener("mouseover",function(){
//     a.placeholder = "Ladle naam likh";
//     a.style.border = '4px outset blue'
//     a.style.height = '100px'
//     a.style.width = '300px'
//     a.style.fontSize = '30px'
// } 
// )
// a.addEventListener("mouseout",function(){
//     a.placeholder = "abe haggu hta kyu rha h";
//     a.style.border = '1px solid black' 
// } 
// )
// a.addEventListener("input",function(){
//     console.log('sherrrr')
// } 
// )

// let a = document.querySelector("input");
// total = "";
// a.addEventListener("input",function(s){
//     if(s.data!==null){
//         total+=s.data
//     }
// });

// let a = document.querySelector("select");
// let b = document.querySelector("#er");
// a.addEventListener("change",function(val){
//     console.log(val);
//     b.textContent = `Device Selected is ${val.target.value}`
// });

// textotal = ""
// let h1 = document.querySelector("h1")
// let k = window.addEventListener("keydown",function(a){
//     textotal+=a.key
//     h1.textContent = a.key
//     if(a.key==="Pause"){
//         textotal = textotal.replace(/Pause$/,"");
//         console.log(textotal)   
//     }
//     else if(a.key==="`"){
//         textotal=""
//     }
//     else if(textotal == "ALT+A"){
//         console.log('df')
//     }
// })

// let a = document.querySelector("#btn");
// let b = document.querySelector("#kutta");
// a.addEventListener("click",function(){
//     kutta.click();
// })
// b.addEventListener("change",function(val){
//     a.textContent = (val.target.files[0].name)
// })

// if (a=true){
// window.addEventListener("mousemove",function(a){
//     ab.style.top = a.clientY + "px";
//     ab.style.left = a.clientX + "px";
// }) 
// }


// window.addEventListener("keyup",function(ae){
//     if(ae.)
// })


// window.addEventListener("keyup",function(a){
//     if(a.key === "r"){
//         console.log("sher")
//     }  
// })

document.body.style.marginLeft = "20px"
document.body.style.marginTop = "10px"

// let a = setTimeout(function(){
//     console.log("sher")
// },3000)

// clearTimeout(a);

// let h1 = document.createElement("h1")
// h1.textContent = "Your video starts in 10secs";
// let count = 11;
// setInterval(function(){
//     count--;
//     if(count > 0){
//         h1.textContent = `Your video starts in ${count}`
//         document.body.prepend(h1)
//     }
//     else{
//         h1.textContent = "Tange Tange Tange"
//     }
// },1000)

// let count = 10;
// let a =setInterval(() => {
//     if(count>=0){
//         console.log(count);
//         count--;
//     }else{
//         clearInterval(a)
//     }
// }, 1000);

// let count = 0;
// let progress = document.querySelector("#fill");
// let percent = document.querySelector("#percent");
// let text = document.querySelector("#Download")
// let sher = setInterval(function(){
//     if(count<100){
//         count++
//         progress.style.width = `${count}%`
//         percent.textContent = `${count}%`
//     }
//     if(count === 100){
//         // text.textContent = "";
//         // text.style.fontSize = "30px"
//         text.textContent = "Downloaded";
//         clearInterval(sher)
//     }
// },50)

// localStorage.setItem("name",JSON.stringify["Gaita,ladle"]);

// localStorage.setItem("friends",JSON.stringify(["harsh","akash","amit"]));

let btn = document.querySelector("#btn")
btn.addEventListener("click",function(){
  setTimeout(function(){
    document.body.innerHTML = "";
    setTimeout(function(){
      // back.style.transition = "all 0.5 ease";
      let back = document.createElement("div");
      let h1 = document.createElement("h1");
      h1.classList.add("hulala")
      h1.style.color = "white";
      h1.style.fontSize = "60px"
      h1.style.marginLeft = "290px"
      h1.textContent = "Sign in to your account";
      back.style.backgroundColor = "black";
      back.style.border = "4px skyblue solid"
      back.style.height = "100px";
      back.style.width = "1200px"
      back.style.marginLeft = "20px"
      back.style.borderRadius = "20px";
      back.appendChild(h1)
      document.body.prepend(back);

      let card = document.createElement("div");
      let name = document.createElement("input");
      let bio = document.createElement("input");
      let url = document.createElement("input");
      let submit = document.createElement("button");

      card.style.marginLeft = "210px"
      card.style.marginTop = "50px"
      card.style.height = "400px";
      card.style.width = "800px"
      card.style.border = " 8px skyblue solid"
      card.classList.add("cardi")
      card.style.backgroundColor = ""
      card.appendChild(name);
      card.appendChild(bio);
      card.appendChild(url);
      card.appendChild(submit);
      document.body.appendChild(card);

      name.classList.add("inp2323");
      name.placeholder = "Enter your name"

      bio.classList.add("bio");
      bio.placeholder = "Enter something about you";

      url.classList.add('url')
      url.placeholder = "Enter your image url"

      submit.classList.add("submit")
      submit.textContent = "submit";

      submit.addEventListener("click", function () {

    let newUser = {
        name: name.value,
        pic: url.value,
        bio: bio.value
    };

    users.unshift(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    location.reload();
});
      })
    },500)
    
  },200);


let users = [

  {
    name:"Daksh",
    pic:"https://images.unsplash.com/photo-1779896412200-e1047994622b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio:"Good person who enjoys helping others and staying positive."
  },

  {
    name:"Aarav",
    pic:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=870&auto=format&fit=crop",
    bio:"Tech enthusiast who loves coding, music, and learning new things."
  },

  {
    name:"Rohan",
    pic:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=870&auto=format&fit=crop",
    bio:"Simple guy who enjoys photography, travel, and good conversations."
  },

  {
    name:"Arjun",
    pic:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=870&auto=format&fit=crop",
    bio:"Always curious, always learning, and never afraid of a challenge."
  },

  {
    name:"Kabir",
    pic:"https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=870&auto=format&fit=crop",
    bio:"Sports lover who spends his free time playing football and exploring."
  },

  {
    name:"Vihaan",
    pic:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=870&auto=format&fit=crop",
    bio:"Creative mind with a passion for design, technology, and innovation."
  },

  {
    name:"Aditya",
    pic:"https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=870&auto=format&fit=crop",
    bio:"Calm personality who enjoys coding, gaming, and spending time with friends."
  },

  {
    name:"Kunal",
    pic:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=870&auto=format&fit=crop",
    bio:"Friendly person who believes that every day is a chance to improve."
  },

  {
    name:"Yash",
    pic:"https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=870&auto=format&fit=crop",
    bio:"Music fan, occasional gamer, and someone who enjoys a good laugh."
  },

  {
    name:"Aryan",
    pic:"https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=870&auto=format&fit=crop",
    bio:"Dreamer and learner who loves technology, movies, and new experiences."
  }

];
let savedUsers = JSON.parse(localStorage.getItem("users"));

if (savedUsers) {
    users = savedUsers;
}
function showuser(user) {

    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    img.src = user.pic;

    let container = document.createElement("div");
    container.classList.add("container");

    let h1 = document.createElement("div");
    h1.classList.add("h1");
    h1.textContent = user.name;

    let p = document.createElement("div");
    p.classList.add("p");
    p.textContent = user.bio;

    card.appendChild(img);
    card.appendChild(container);

    container.appendChild(h1);
    container.appendChild(p);

    document.querySelector(".cards").appendChild(card);
    
}

users.forEach(function(user) {
    showuser(user);
});

let inp = document.querySelector("#search");
inp.addEventListener("input",function(val){
  let newarr = users.filter(function(user){
    return user.name.toLowerCase().startsWith(inp.value.toLowerCase());
  });
  document.querySelector(".cards").innerHTML="";
  newarr.forEach(function(user) {
      showuser(user);
  });
});