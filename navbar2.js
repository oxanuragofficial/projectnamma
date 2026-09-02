function initNavbar() {
    let navbar = document.createElement('nav');
    navbar.classList.add('navbar');

    let ul = document.createElement('ul');
    
    let li1 = document.createElement('li');
    li1.classList.add('li1');
    
    let li2 = document.createElement('li');
    li2.classList.add('li2'); 
    
    let li3 = document.createElement('li');
    li3.classList.add('li3');
    
    let li4 = document.createElement('li');
    li4.classList.add('li4');

    li1.textContent = 'CodeUI';
    li2.textContent = 'DARK MODE';
    li3.textContent = 'CLOSE';
    li4.textContent = "LET'S TALK";
    
    li3.style.transition = "all 1s";


    li2.addEventListener("click", () => {
        if (li2.innerText === "DARK MODE") {
            li2.innerText = "LIGHT MODE";
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
            ul.style.color = "white";                 
        } 
        else {
            li2.innerText = "DARK MODE";
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            ul.style.color = "black";                    
        }
    });

li1.addEventListener("click",()=>{
    window.location.href="dashbord.html";
})
    li3.addEventListener("mouseenter", () => {
        li3.innerText = "MENU"; 
    });

    li3.addEventListener("mouseleave", () => {
        li3.innerText = "CLOSE";
    });


    li3.addEventListener("click", () => {
     
        if (li3.innerText === "MENU" || li3.innerText === "CLOSE") {
            li3.innerText="CLOSE";
            window.location.href = "index.html"; 
        }
        
    });

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    navbar.appendChild(ul);

   let mess=document.createElement("div");
    mess.style.position="fixed";
    mess.style.right="20px";
    mess.style.top="50%";
    mess.style.borderRadius="25px";
    mess.style.height="450px";
    mess.style.width="450px";
    mess.style.backgroundColor="black";
    mess.style.transitionDuration="1s";
    mess.style.zIndex="999";
;
    let up=document.createElement("div");
    up.style.width="100%";
    up.style.height="120px";
    up.style.borderBottom="1px solid white";
    up.style.alignContent="center";
    up.style.alignItems="center";

    up.style.paddingLeft="30px";
    up.style.display="flex";
    up.style.textAlign="center";


    let img=document.createElement("img");
    img.src="https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/d8c3ace0-ba4a-4b2a-b7bd-5e7325a8a381/gabriel-2025-square-4x.png";
    img.style.height="80px";
    img.style.width="80px";
    img.style.borderRadius="50%";

    let n=document.createElement("div");
n.style.display="flex";
n.style.flexDirection="column";


let dot=document.createElement("span");
dot.innerText="●";
dot.style.fontSize="30px";
dot.style.position="relative";
dot.style.left="-15px";
dot.style.top="25px";
dot.style.fontWeight="600";
dot.style.color="green";

    let name=document.createElement("span");
    name.innerText="Codetrio Tech";
    name.style.fontSize="30px";
    name.style.position="relative";
    name.style.top="-10px";
    name.style.left="20px";
    name.style.color="white";
    name.style.fontWeight="600";

    let status=document.createElement("span");
    status.innerText="Online";
    status.style.fontSize="20px";
    status.style.color="white";
    status.style.position="relative";
    status.style.left="-35px";
    

n.append(name,status);

let cut=document.createElement("div");
cut.innerText="✖";
cut.style.fontSize="30px";
cut.style.color="white";
cut.style.position="relative";
cut.style.left="90px";
cut.style.top="-30px";

cut.style.width="35px"
cut.style.height="40px"


let wicon = document.createElement("div");

wicon.style.position = "fixed";
wicon.style.right = "40px";
wicon.style.bottom = "50px";
wicon.style.width = "80px";
wicon.style.height = "80px";
wicon.style.borderRadius = "50%";
wicon.style.backgroundColor = "green";
wicon.style.zIndex = "1000";
wicon.style.display = "none";
wicon.style.alignItems = "center";
wicon.style.justifyContent = "center";
wicon.style.cursor = "pointer";
wicon.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
wicon.style.transitionDuration = "5s";

let wimg = document.createElement("img");

wimg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzjBVhKPPCNIcf9yuNHnkNasMtZlp07F1bGKl6MLLSCA&s=10";

wimg.style.width = "60px";
wimg.style.height = "60px";
wimg.style.borderRadius = "50%";

wicon.append(wimg);


cut.addEventListener("click", () => {
    mess.style.right = "-700px";

    wicon.style.display = "flex";
});


wicon.addEventListener("click", () => {
    mess.style.right = "20px";

    wicon.style.display = "none";
});
    up.append(img,dot,n,cut);

    let down=document.createElement("div");
    down.style.width="100%";
    down.style.height="330px";
    down.style.display="flex";
    down.style.flexDirection="column";
    down.style.alignItems="center";
    
    let msg=document.createElement("span");
    msg.innerText="Hello, welcome to Namma! Do you want to tell us about your project? Write to us directly here 😊 (Si tu parles français, nous aussi !)";
    msg.style.fontSize="18px";
    msg.style.color="white";
    msg.style.backgroundColor="rgba(255, 255, 255, 0.3) ";
    msg.style.padding="10px";
    msg.style.borderRadius="20px";
    msg.style.width="65%";
    msg.style.marginTop="20px";
    msg.style.marginLeft="-100px";
    msg.style.textAlign="left";
    msg.style.height="90px";
    msg.style.position="relative";
    msg.style.top="20px";   

    let chat=document.createElement("a");
    chat.style.width="70%";
    chat.style.height="60px";
    chat.style.backgroundColor="blue";
    chat.style.display="flex";
    chat.style.alignItems="center";
    chat.style.justifyContent="center";
    chat.style.textDecoration="none";
    chat.style.color="black";
    chat.style.fontSize="20px";
    chat.style.marginTop="90px";
    chat.style.fontWeight="600";
    chat.style.borderRadius="60px";

    chat.href="https://api.whatsapp.com/send/?phone=917479521662&text&type=phone_number&app_absent=0&utm_source=chatgpt.com"; 

    let icon=document.createElement("img");
    icon.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzjBVhKPPCNIcf9yuNHnkNasMtZlp07F1bGKl6MLLSCA&s=10";
    icon.style.width="30px";
    icon.style.height="30px";
    icon.style.borderRadius="50%";
    icon.style.backgroundColor="transparent";
    icon.style.marginRight="10px";

    let text=document.createElement("span");
    text.innerText="Chat with Whatsapp";
    text.style.color="white";
    text.style.fontSize="20px";
    text.style.fontWeight="600";

    chat.append(icon,text);

    down.append(msg,chat);

    mess.append(up,down);
    



    document.body.prepend(navbar,mess,wicon);
}

window.addEventListener("DOMContentLoaded", initNavbar);
