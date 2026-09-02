let div1=document.createElement('div');
div1.classList.add('div1');
div1.style.height="80vh";
div1.style.width="100%";
div1.style.display="flex";
div1.style.position="fixed";
div1.style.marginTop="80px";

let container1=document.createElement('div');
container1.classList.add('container1');
container1.style.height="80%";
container1.style.gap="10px";
container1.style.display="flex";
container1.style.flexDirection="column";
container1.style.width="auto";


let part1=document.createElement('div');
part1.classList.add('part1');
part1.style.height="30%";
part1.style.padding="10px";
part1.style.boxSizing = "border-box";
part1.style.justifyContent = "flex-start";
part1.style.width="100%";
part1.style.display="flex";
part1.style.alignItems="center";
part1.style.alignContent="center";


let spart1=document.createElement('img');
spart1.classList.add('spart1');
spart1.style.height="70%";
spart1.style.width="0";
spart1.src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/687f51f589db1d6a1057cde2_shared%20(4).gif";
spart1.style.position="relative";
spart1.style.top="5px";
spart1.style.transition="all 0.5s ease-in-out";




let spart2=document.createElement('span');
spart2.classList.add('spart2');
spart2.style.height="100%";
spart2.innerText="Home";
spart2.style.textAlign="left";
spart2.style.alignItems="center";
spart2.style.display="flex";
spart2.style.alignContent="center";
spart2.style.textTransform="uppercase";

spart2.style.letterSpacing="-10px";
spart2.style.fontSize="150px";
spart2.style.fontWeight="800";
spart2.style.position="relative";
spart2.style.fontFamily="Arial, Helvetica, sans-serif";
spart2.style.width="100%";

part1.addEventListener('mouseenter', () => {
    spart1.style.width = "250px";
});

part1.addEventListener('mouseleave', () => {
    spart1.style.width = "0";
});
part1.addEventListener('click', () => {
    window.location.href = "index.html";
});

part1.append(spart1,spart2);

let part2=document.createElement('div');
part2.classList.add('part2');
part2.style.height="30%";
part2.style.padding="10px";
part2.style.boxSizing = "border-box";
part2.style.justifyContent = "flex-start";
part2.style.width="100%";
part2.style.display="flex";
part2.style.alignItems="center";
part2.style.alignContent="center";


let spart3=document.createElement('img');
spart3.classList.add('spart3');
spart3.style.height="70%";
spart3.style.width="0";
spart3.src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/687f520f976b04b16bc61d2b_shared%20(5).gif";
spart3.style.position="relative";
spart3.style.top="5px";
spart3.style.transition="all 0.5s ease-in-out";

let spart4=document.createElement('span');
spart4.classList.add('spart4');
spart4.style.height="100%";
spart4.innerText="Work";
spart4.style.textAlign="left";
spart4.style.alignItems="center";
spart4.style.display="flex";
spart4.style.alignContent="center";
spart4.style.textTransform="uppercase";

spart4.style.letterSpacing="-10px";
spart4.style.fontSize="150px";
spart4.style.fontWeight="800";
spart4.style.position="relative";
spart4.style.fontFamily="Arial, Helvetica, sans-serif";
spart4.style.width="100%";

part2.addEventListener('mouseenter', () => {
    spart3.style.width = "250px";
});

part2.addEventListener('mouseleave', () => {
    spart3.style.width = "0";
});
part2.addEventListener('click', () => {
    window.location.href = "work.html";
});
part2.append(spart3,spart4);



let part3=document.createElement('div');
part3.classList.add('part3');
part3.style.height="30%";
part3.style.padding="10px";
part3.style.boxSizing = "border-box";
part3.style.justifyContent = "flex-start";
part3.style.width="100%";
part3.style.display="flex";
part3.style.alignItems="center";
part3.style.alignContent="center";


let spart5=document.createElement('img');
spart5.classList.add('spart5');
spart5.style.height="70%";
spart5.style.width="0";
spart5.src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/687f52905775f96448c20208_shared%20(8).gif";
spart5.style.position="relative";
spart5.style.top="5px";
spart5.style.transition="all 0.5s ease-in-out";

let spart6=document.createElement('span');
spart6.classList.add('spart6');
spart6.style.height="100%";
spart6.innerText="Services";
spart6.style.textAlign="left";
spart6.style.alignItems="center";
spart6.style.display="flex";
spart6.style.alignContent="center";
spart6.style.textTransform="uppercase";
spart6.style.letterSpacing="-10px";
spart6.style.fontSize="150px";
spart6.style.fontWeight="800";
spart6.style.position="relative";
spart6.style.fontFamily="Arial, Helvetica, sans-serif";
spart6.style.width="100%";

part3.addEventListener('mouseenter', () => {
    spart5.style.width = "250px";
});

part3.addEventListener('mouseleave', () => {
    spart5.style.width = "0";
});
part3.addEventListener('click', () => {
    window.location.href = "services.html";
});
part3.append(spart5,spart6);

let part4=document.createElement('div');
part4.classList.add('part4');
part4.style.height="30%";
part4.style.padding="10px";
part4.style.boxSizing = "border-box";
part4.style.justifyContent = "flex-start";
part4.style.width="100%";
part4.style.display="flex";
part4.style.alignItems="center";
part4.style.alignContent="center";


let spart7=document.createElement('img');
spart7.classList.add('spart7');
spart7.style.height="70%";
spart7.style.width="0";
spart7.src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/687f52f85a6d01903d3b0903_shared9-ezgif.com-optimize.gif";
spart7.style.position="relative";
spart7.style.top="5px";
spart7.style.transition="all 0.5s ease-in-out";

let spart8=document.createElement('span');
spart8.classList.add('spart8');
spart8.style.height="100%";
spart8.innerText="Approach";
spart8.style.textAlign="left";
spart8.style.alignItems="center";
spart8.style.display="flex";
spart8.style.alignContent="center";
spart8.style.textTransform="uppercase";

spart8.style.letterSpacing="-10px";
spart8.style.fontSize="150px";
spart8.style.fontWeight="800";
spart8.style.position="relative";
spart8.style.fontFamily="Arial, Helvetica, sans-serif";
spart8.style.width="100%";

part4.addEventListener('mouseenter', () => {
    spart7.style.width = "250px";
});

part4.addEventListener('mouseleave', () => {
    spart7.style.width = "0";
});
part4.addEventListener('click', () => {
    window.location.href = "index.html";
});
part4.append(spart7,spart8);

container1.append(part1,part2,part3,part4);






let container2=document.createElement('div');
container2.classList.add('container2');
container2.style.height="80%";
container2.style.gap="10px";
container2.style.display="flex";
container2.style.flexDirection="column";
container2.style.width="auto";
container2.style.paddingLeft="80px";

 

let part5=document.createElement('div');
part5.classList.add('part5');

part5.style.height="30%";
part5.style.width="100%";

part5.style.minHeight="30%";
part5.style.minWidth="100%";

part5.style.padding="10px";
part5.style.boxSizing="border-box";


part5.style.flexShrink="0";




let part6=document.createElement('div');
part6.classList.add('part6');
part6.style.height="30%";
part6.style.padding="10px";
part6.style.boxSizing = "border-box";
part6.style.justifyContent = "flex-start";
part6.style.width="100%";
part6.style.display="flex";
part6.style.alignItems="center";
part6.style.alignContent="center";


let spart11=document.createElement('img');
spart11.classList.add('spart11');
spart11.style.height="70%";
spart11.style.width="0";
spart11.src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/687f52743978d71c86ce864a_shared%20(7).gif";
spart11.style.position="relative";
spart11.style.top="5px";
spart11.style.transition="all 0.5s ease-in-out";

let spart12=document.createElement('span');
spart12.classList.add('spart12');
spart12.style.height="100%";
spart12.innerText="Studio";
spart12.style.textAlign="left";
spart12.style.alignItems="center";
spart12.style.display="flex";
spart12.style.alignContent="center";
spart12.style.textTransform="uppercase";

spart12.style.letterSpacing="-10px";
spart12.style.fontSize="150px";
spart12.style.fontWeight="800";
spart12.style.position="relative";
spart12.style.fontFamily="Arial, Helvetica, sans-serif";
spart12.style.width="100%";

part6.addEventListener('mouseenter', () => {
    spart11.style.width = "250px";
});

part6.addEventListener('mouseleave', () => {
    spart11.style.width = "0";
});
part6.addEventListener('click', () => {
    window.location.href = "index.html";
});
part6.append(spart11,spart12);


let part7=document.createElement('div');
part7.classList.add('part7');
part7.style.height="30%";
part7.style.padding="10px";
part7.style.boxSizing = "border-box";
part7.style.justifyContent = "flex-start";
part7.style.width="100%";
part7.style.display="flex";
part7.style.alignItems="center";
part7.style.alignContent="center";


let spart13=document.createElement('img');
spart13.classList.add('spart13');
spart13.style.height="70%";
spart13.style.width="0";
spart13.src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/687f53340fd0b3d13f6ce6ec_shared%20(10).gif";
spart13.style.position="relative";
spart13.style.top="5px";
spart13.style.transition="all 0.5s ease-in-out";

let spart14=document.createElement('span');
spart14.classList.add('spart14');
spart14.style.height="100%";
spart14.innerText="plans";
spart14.style.textAlign="left";
spart14.style.alignItems="center";
spart14.style.display="flex";
spart14.style.alignContent="center";
spart14.style.textTransform="uppercase";
spart14.style.letterSpacing="-10px";
spart14.style.fontSize="150px";
spart14.style.fontWeight="800";
spart14.style.position="relative";
spart14.style.fontFamily="Arial, Helvetica, sans-serif";
spart14.style.width="100%";

part7.addEventListener('mouseenter', () => {
    spart13.style.width = "250px";
});

part7.addEventListener('mouseleave', () => {
    spart13.style.width = "0";
});

part7.addEventListener('click', () => {
    window.location.href = "plans.html";
});

part7.append(spart13,spart14);


let part8=document.createElement('div');
part8.classList.add('part8');
part8.style.height="30%";
part8.style.padding="10px";
part8.style.boxSizing = "border-box";
part8.style.justifyContent = "flex-start";
part8.style.width="100%";
part8.style.display="flex";
part8.style.alignItems="center";
part8.style.alignContent="center";


let spart15=document.createElement('img');
spart15.classList.add('spart15');
spart15.style.height="70%";
spart15.style.width="0";
spart15.src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/687f539812c66351fb6ee1cc_shared%20(11).gif";
spart15.style.position="relative";
spart15.style.top="5px";
spart15.style.transition="all 0.5s ease-in-out";

let spart16=document.createElement('span');
spart16.classList.add('spart16');
spart16.style.height="100%";
spart16.innerText="news";
spart16.style.textAlign="left";
spart16.style.alignItems="center";
spart16.style.display="flex";
spart16.style.alignContent="center";
spart16.style.textTransform="uppercase";
spart16.style.letterSpacing="-10px";
spart16.style.fontSize="150px";
spart16.style.fontWeight="800";
spart16.style.position="relative";
spart16.style.fontFamily="Arial, Helvetica, sans-serif";
spart16.style.width="100%";

part8.addEventListener('mouseenter', () => {
    spart15.style.width = "250px";
});

part8.addEventListener('mouseleave', () => {
    spart15.style.width = "0";
});
part8.addEventListener('click', () => {
    window.location.href = "news.html";
});
part8.append(spart15,spart16);

container2.append(part5,part6,part7,part8);
div1.append(container1,container2);


document.body.appendChild(div1);
