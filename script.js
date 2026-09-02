let content = document.querySelector(".content");
let navbar = document.querySelector(".navbar");
console.log(navbar);
let div1 = document.createElement("div");
div1.style.height = "90vh";
div1.style.width = "100%";
div1.style.display = "flex";
div1.style.flexDirection = "column";
div1.style.fontSize = "170px";
div1.style.position = "relative";
div1.style.textAlign = "center";
div1.style.alignContent = "center";
div1.style.alignItems = "center";
div1.style.justifyContent = "center";

div1.style.fontWeight = "700";
div1.classList.add("div1");

let p = document.createElement("span");
let p4 = document.createElement("p");
p.append(p4);
p4.innerText = "WE THINK";
p4.style.position = "relative";

let p1 = document.createElement("span");
let p5 = document.createElement("p");
p5.innerText = "CRAFT AND";
p1.append(p5);
p5.style.position = "relative";

let p2 = document.createElement("span");
let p6 = document.createElement("p");
p2.append(p6);
p6.innerText = "DESIGN";
p6.style.position = "relative";

div1.append(p, p1, p2);
let div3 = document.createElement("div");
div3.classList.add("div3");

let span1 = document.createElement("span");
span1.innerText = "Creative studio building premium Brands";
span1.style.fontSize = "30px";
span1.style.marginBottom = "50px";
span1.style.textTransform = "uppercase";
span1.classList.add("span1");

let h2 = document.createElement("h2");
h2.innerHTML = `IT’S NEVER “JUST A WEBSITE.”<br>
EVERY DETAIL MATTERS.<br>
WE CRAFT DIGITAL EXPERIENCES.<br>
YOUR DESIGN. OUR OBSESSION.<br>
YOUR BRAND. OUR PLAYGROUND.`;

h2.style.fontWeight = "1000";

h2.classList.add("h2");
h2.style.textTransform = "uppercase";

div3.append(span1, h2);

let div4 = document.createElement("div");
div4.classList.add("div4");
let span2 = document.createElement("span");
span2.innerText = "Selected projects";
span2.style.textTransform = "uppercase";
span2.classList.add("span2");

let span3 = document.createElement("span");
span3.innerText = "playground";
span3.style.textTransform = "uppercase";
span3.classList.add("span3");
div4.append(span2, span3);

let div5 = document.createElement("div");
div5.classList.add("div5");
let div51 = document.createElement("div");
div51.classList.add("div51");
let div52 = document.createElement("div");
div52.classList.add("div52");
div5.append(div51, div52);

let div6 = document.createElement("div");
div6.classList.add("div6");
let div61 = document.createElement("div");
div61.classList.add("div61");

let div62 = document.createElement("div");
div62.classList.add("div62");
div6.append(div61, div62);

let div2 = document.createElement("div");
div2.classList.add("div2");

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      } 
    });
  },
  {
    threshold: 0.15,
  },
);

observer.observe(div1);
observer.observe(div5);
observer.observe(div6);
observer.observe(content);

let observer1 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate1");
        observer.unobserve(entry.target);
      } 
    });
  },
  {
    threshold: 0.5,
  },
);
let observer3 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate1");
        observer.unobserve(entry.target);
      } 
    });
  },
  {
    threshold: 0.35,
  },
);
let cursor = document.createElement("div");
cursor.classList.add("cursor");
document.addEventListener("mousemove", (event) => {
  console.log(event.clientX + " " + event.clientY);
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
});
content.addEventListener("mouseenter", (event) => {
  console.log(event.clientX + " " + event.clientY);
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
});
div1.addEventListener("mousemove", (event) => {
  console.log(event.clientX + " " + event.clientY);
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
});
div1.addEventListener("mouseenter", (event) => {
  cursor.style.width = "350px";
  cursor.style.height = "420px";
  cursor.style.overflow = "hidden";
  cursor.style.borderRadius = "0px";
  cursor.style.backgroundColor = "transparent";

 cursor.innerHTML = `
  <video
    autoplay
    muted
    loop
    playsinline
    style="
      width: 100%;
      height: 600px;
      min-height: 600px;
      object-fit: cover;
      display: block;
      border: 0;
      pointer-events: none;
    "
  >
    <source 
      src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68dfa4ffe42ad829f9d5bd31_Home-Hero-lightV5-transcode.mp4"
      type="video/mp4"
    >
  </video>
`;
});

div1.addEventListener("mouseleave", (event) => {
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
  cursor.style.height = "30px";
  cursor.style.width = "30px";
  cursor.style.backgroundColor = "blue";
  cursor.innerHTML = "";
  cursor.style.borderRadius = "50%";
});

div1.addEventListener("mouseleave", (event) => {
  console.log(event.clientX + " " + event.clientY);
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
  cursor.style.height = "30px";
  cursor.style.width = "30px";
  cursor.style.backgroundColor = "blue";
  cursor.innerHTML = "";
  cursor.style.borderRadius = "50%";
});

let div7 = document.createElement("div");
div7.style.height = "100vh";
div7.style.width = "100%";

div7.style.display = "flex";
div7.style.flexDirection = "column";
div7.style.fontSize = "145px";
div7.style.fontFamily = "Impact, 'Arial Black', sans-serif";
div7.style.fontWeight = "500";
div7.style.position = "relative";
div7.style.textAlign = "center";
div7.style.lineHeight = "0.9";
div7.style.alignContent = "center";
div7.style.marginTop = "800px";
div7.style.marginBottom = "100px";
div7.style.alignItems = "center";
div7.style.justifyContent = "center";
div7.style.letterSpacing = "0.5px";
div7.style.padding = "3px";
div7.classList.add("div7");
div7.style.left="50px";

let service = document.createElement("span");

service.innerText = "SERVICES";

service.style.position = "absolute";

service.style.top = "-250px";

service.style.fontSize = "30px";

service.style.left = "30px";

service.style.fontWeight = "200";

let child1 = document.createElement("div");

child1.style.alignContent = "center";

child1.style.alignItems = "cemter";

child1.style.justifyContent = "center";

child1.style.width = "100%";

child1.style.overflow = "hidden";

child1.style.display = "flex";

let t1 = document.createElement("span");

t1.innerText = "ART DIRECTION";

t1.style.position = "relative";

child1.append(t1);

let child2 = document.createElement("div");

child2.style.alignContent = "center";

child2.style.alignItems = "cemter";

child2.style.justifyContent = "center";

child2.style.width = "100%";

child2.style.overflow = "hidden";

child2.style.display = "flex";

let t2 = document.createElement("span");

t2.innerText = "BRANDING";

t2.style.position = "relative";

child2.append(t2);

let child3 = document.createElement("div");

child3.style.alignContent = "center";

child3.style.alignItems = "cemter";

child3.style.justifyContent = "center";

child3.style.width = "100%";

child3.style.overflow = "hidden";

child3.style.display = "flex";

let t3 = document.createElement("span");

t3.innerText = "WEBFLOW";

t3.style.position = "relative";

child3.append(t3);

let child4 = document.createElement("div");

child4.style.alignContent = "center";

child4.style.alignItems = "cemter";

child4.style.justifyContent = "center";

child4.style.width = "100%";

child4.style.overflow = "hidden";

child4.style.display = "flex";

let t4 = document.createElement("span");

t4.innerText = "UI/UX DESIGN";

t4.style.position = "relative";

child4.append(t4);

let child5 = document.createElement("div");

child5.style.alignContent = "center";

child5.style.alignItems = "cemter";

child5.style.justifyContent = "center";

child5.style.width = "100%";

child5.style.overflow = "hidden";

child5.style.display = "flex";

let t5 = document.createElement("span");

t5.innerText = "GSAP ANIMATIONS";

t5.style.position = "relative";

child5.append(t5);

let child6 = document.createElement("div");

child6.style.alignContent = "center";

child6.style.alignItems = "cemter";

child6.style.justifyContent = "center";

child6.style.width = "100%";

child6.style.overflow = "hidden";

child6.style.display = "flex";

let t6 = document.createElement("span");

t6.innerText = "ADVERTISING";

t6.style.position = "relative";

child6.append(t6);

let child7 = document.createElement("div");

child7.style.alignContent = "center";

child7.style.alignItems = "cemter";

child7.style.justifyContent = "center";

child7.style.width = "100%";

child7.style.overflow = "hidden";

child7.style.display = "flex";

let t7 = document.createElement("span");

t7.innerText = "SEO & CONTENT";

t7.style.position = "relative";

child7.append(t7);
child1.classList.add("child1");
t1.classList.add("t1");

child2.classList.add("child2");
t2.classList.add("t2");

child3.classList.add("child3");
t3.classList.add("t3");

child4.classList.add("child4");
t4.classList.add("t4");

child5.classList.add("child5");
t5.classList.add("t5");

child6.classList.add("child6");
t6.classList.add("t6");

child7.classList.add("child7");
t7.classList.add("t7");





child1.addEventListener("mouseenter", () => {
  video.style.height="350px";
  video.style.top="-100px";
  child2.style.opacity = "0.5";
  child3.style.opacity = "0.5";
  child4.style.opacity = "0.5";
  child5.style.opacity = "0.5";
  child6.style.opacity = "0.5";
  child7.style.opacity = "0.5";
 videoSource.src = "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68bef694221ab31dc7a0898e_Home-artdirection-transcode.webm";
   videoElement.load();
   videoElement.play();
});

child1.addEventListener("mouseleave", () => {
  video.style.height="0px";
  child2.style.opacity = "1";
  child3.style.opacity = "1";
  child4.style.opacity = "1";
  child5.style.opacity = "1";
  child6.style.opacity = "1";
  child7.style.opacity = "1";
});

child2.addEventListener("mouseenter", () => {
  video.style.height="350px";
  video.style.top="0px";
   videoSource.src = "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68bef76a17912168bc67811f_Home-branding-transcode.webm";
   videoElement.load();
   videoElement.play();
  child1.style.opacity = "0.5";
  child3.style.opacity = "0.5";
  child4.style.opacity = "0.5";
  child5.style.opacity = "0.5";
  child6.style.opacity = "0.5";
  child7.style.opacity = "0.5";
});

child2.addEventListener("mouseleave", () => {
   video.style.height="0px";
  child1.style.opacity = "1";
  child3.style.opacity = "1";
  child4.style.opacity = "1";
  child5.style.opacity = "1";
  child6.style.opacity = "1";
  child7.style.opacity = "1";
});

child3.addEventListener("mouseenter", () => {
  video.style.height="350px";
  video.style.top="150px";
   videoSource.src = "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68bef7ea54539b4433a39276_Webflow-home-transcode.webm";
   videoElement.load();
   videoElement.play();
  child1.style.opacity = "0.5";
  child2.style.opacity = "0.5";
  child4.style.opacity = "0.5";
  child5.style.opacity = "0.5";
  child6.style.opacity = "0.5";
  child7.style.opacity = "0.5";
});

child3.addEventListener("mouseleave", () => {
  
  video.style.height="0px";
  child1.style.opacity = "1";
  child2.style.opacity = "1";
  child4.style.opacity = "1";
  child5.style.opacity = "1";
  child6.style.opacity = "1";
  child7.style.opacity = "1";
});

child4.addEventListener("mouseenter", () => {
  video.style.height="350px";
  video.style.top="260px";
   videoSource.src = "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68bef86a1717db6af24e06f2_UI-UX-Home-transcode.webm";
   videoElement.load();
   videoElement.play();
  child1.style.opacity = "0.5";
  child2.style.opacity = "0.5";
  child3.style.opacity = "0.5";
  child5.style.opacity = "0.5";
  child6.style.opacity = "0.5";
  child7.style.opacity = "0.5";
});

child4.addEventListener("mouseleave", () => {
  video.style.height="0px";
  child1.style.opacity = "1";
  child2.style.opacity = "1";
  child3.style.opacity = "1";
  child5.style.opacity = "1";
  child6.style.opacity = "1";

  child7.style.opacity = "1";
});

child5.addEventListener("mouseenter", () => {
  video.style.height="350px";
  video.style.top="400px";
  
   videoSource.src = "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F69f31d237bb976aa6e0bc834_Scene-1_webm.webm";
   videoElement.load();
   videoElement.play();
  child1.style.opacity = "0.5";
  child2.style.opacity = "0.5";
  child3.style.opacity = "0.5";
  child4.style.opacity = "0.5";
  child6.style.opacity = "0.5";
  child7.style.opacity = "0.5";
});

child5.addEventListener("mouseleave", () => {
  video.style.height="0px";
  child1.style.opacity = "1";
  child2.style.opacity = "1";
  child3.style.opacity = "1";
  child4.style.opacity = "1";
  child6.style.opacity = "1";
  child7.style.opacity = "1";
});

child6.addEventListener("mouseenter", () => {
  video.style.height="350px";
  video.style.top="500px";
   videoSource.src = "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68df9e1b94554da67438cec0_Ads-service-homeV3-transcode.mp4";
   videoElement.load();
   videoElement.play();
  child1.style.opacity = "0.5";
  child2.style.opacity = "0.5";
  child3.style.opacity = "0.5";
  child4.style.opacity = "0.5";
  child5.style.opacity = "0.5";
  child7.style.opacity = "0.5";
});

child6.addEventListener("mouseleave", () => {
  video.style.height="0px";
  child1.style.opacity = "1";
  child2.style.opacity = "1";
  child3.style.opacity = "1";
  child4.style.opacity = "1";
  child5.style.opacity = "1";
  child7.style.opacity = "1";
});

child7.addEventListener("mouseenter", () => {
  
  videoSource.src = "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68befca9c05567e63bc4d4a0_seo%20content%20home-transcode.webm";
   videoElement.load();
   videoElement.play();
  video.style.height="350px";
  video.style.top="700px";
  child1.style.opacity = "0.5";
  child2.style.opacity = "0.5";
  child3.style.opacity = "0.5";
  child4.style.opacity = "0.5";
  child5.style.opacity = "0.5";
  child6.style.opacity = "0.5";
});

child7.addEventListener("mouseleave", () => {
  video.style.height="0px";
  child1.style.opacity = "1";
  child2.style.opacity = "1";
  child3.style.opacity = "1";
  child4.style.opacity = "1";
  child5.style.opacity = "1";
  child6.style.opacity = "1";
});


let div9 = document.createElement("div");

div9.style.display = "flex";
div9.style.flexDirection = "column";
div9.style.height = "100vh";
div9.style.width = "100%";
div9.style.overflow = "hidden";
div9.style.gap = "10px";
div9.style.padding = "10px";
div9.style.alignContent = "center";
div9.style.alignItems = "center";
div9.style.justifyContent = "center";
div9.style.position = "relative";


let vc = document.createElement("div");

vc.style.display = "flex";
vc.style.flexDirection = "row";
vc.style.justifyContent = "space-between";
vc.style.alignItems = "center";
vc.style.width = "100%";
vc.style.height = "80px";

let videoUrls = [
  "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68bef694221ab31dc7a0898e_Home-artdirection-transcode.webm",
  "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68bef76a17912168bc67811f_Home-branding-transcode.webm",
  "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68bef7ea54539b4433a39276_Webflow-home-transcode.webm",
  "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68bef86a1717db6af24e06f2_UI-UX-Home-transcode.webm",
  "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F69f31d237bb976aa6e0bc834_Scene-1_webm.webm",
  "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68df9e1b94554da67438cec0_Ads-service-homeV3-transcode.mp4",
];

videoUrls.forEach((url) => {
  

   let video = document.createElement("video");

  video.src = url;
  video.muted = true;
  video.autoplay = true;
  video.loop = true;
  video.playsInline = true;

  video.style.height = "250px";
  video.style.width = "250px";
  video.style.objectFit = "cover";
  video.style.display = "block";
  video.style.flexShrink = "0";

  vc.append(video);
});
div9.append(vc);


let observer4 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate3");
        observer.unobserve(entry.target);
      } 
    });
  },
  {
    threshold: 0.15,
  },
);


let video=document.createElement("div");
video.innerHTML = `
    <video 
        autoplay
        loop
        muted
        playsinline
        draggable="true"
        style="
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        "
    >
        <source 
            src="https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68bef76a17912168bc67811f_Home-branding-transcode.webm"
            type="video/webm"
        >
    </video>
`;
let videoElement = video.querySelector("video");
let videoSource = video.querySelector("source");

      video.style.height="0px";
      video.style.width="450px"
      video.style.backgroundPosition="center"
      video.style.backgroundSize="cover";
        video.style.overflow="hidden";
        video.style.position="absolute";
        video.style.left="40px";
        video.style.top="0px";



div7.append(video,service, child1, child2, child3, child4, child5, child6, child7);



document.body.style.display = "flex";

document.body.style.flexDirection = "column";

document.body.style.alignContent = "centet";

document.body.style.justifyContent = "centet";

document.body.style.alignItems = "centet";

observer1.observe(span1);

observer1.observe(div3);

observer3.observe(div4);
observer3.observe(div7);
 let div8=document.createElement("div");
 div8.style.height = "100vh";
div8.style.width = "100%";

div8.style.display = "flex";
div8.style.flexDirection = "column";
div8.style.fontSize = "145px";
div8.style.fontFamily = "Impact, 'Arial Black', sans-serif";
div8.style.fontWeight = "500";
div8.style.position = "relative";
div8.style.textAlign = "center";
div8.style.lineHeight = "0.9";
div8.style.alignContent = "center";
div8.style.marginTop = "400px";
div8.style.marginBottom = "100px";
div6.style.left="50px";
div8.style.letterSpacing = "0.5px";
div8.style.padding = "3px";
div8.classList.add("div8");



let container1=document.createElement("div");
container1.style.height="200px";
container1.style.width="100%";
container1.style.display="flex";
container1.style.gap="150px";
container1.style.alignContent="center";
container1.style.alignItems="center";
div8.append(container1);
let con1=document.createElement("div");
con1.innerHTML = `
<svg 
  class="client_logo is-qonto" 
  viewBox="0 0 128 38" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
  style="translate: none; rotate: none; scale: none; transform: translate(0px, 0%);"
>
  <mask 
    id="mask0_2019_1807" 
    style="mask-type:luminance" 
    maskUnits="userSpaceOnUse" 
    x="0" 
    y="0" 
    width="128" 
    height="38"
  >
    <path 
      d="M127.75 0.785156H0.25V37.2138H127.75V0.785156Z" 
      fill="#fff"
    ></path>
  </mask>

  <g mask="url(#mask0_2019_1807)">
    <path 
      d="M65.804 35.2H70.596V21.633C70.596 18.366 72.93 15.815 75.948 15.815C78.966 15.815 81.58 18.242 81.58 21.633V35.2H86.777V21.385C86.777 15.566 81.985 11.0849 76.757 11.0849C74.828 11.0849 72.37 11.7694 70.596 14.1966V11.6139H65.804V35.2ZM114.907 11.0849C107.905 11.0849 102.428 16.655 102.428 23.563C102.428 30.595 107.781 35.761 114.907 35.761C122.032 35.761 127.509 30.626 127.509 23.563C127.509 16.655 122.157 11.0849 114.907 11.0849ZM114.907 30.875C110.923 30.875 107.781 27.608 107.781 23.563C107.781 19.237 111.079 16.095 114.907 16.095C119.014 16.095 122.312 19.206 122.312 23.563C122.312 27.608 119.139 30.875 114.907 30.875ZM101.588 35.2V30.191C98.01 31.964 94.587 30.595 94.587 26.674V16.375H101.028V11.645H94.618V5.54595H89.546V25.865C89.546 34.267 95.303 37.099 101.588 35.2ZM50.4634 11.0849C43.462 11.0849 37.9855 16.655 37.9855 23.563C37.9855 30.595 43.3376 35.761 50.4634 35.761C57.5891 35.761 63.066 30.626 63.066 23.563C63.066 16.655 57.7136 11.0849 50.4634 11.0849ZM50.4634 30.875C46.4804 30.875 43.3376 27.608 43.3376 23.563C43.3376 19.237 46.4804 16.095 50.4634 16.095C54.5709 16.095 57.8692 19.206 57.8692 23.563C57.8692 27.608 54.5709 30.875 50.4634 30.875ZM18.2262 0.785156C8.36218 0.785156 0.800781 8.25316 0.800781 18.397C0.800781 28.168 8.33108 35.885 18.2262 35.885C28.3704 35.885 35.9318 28.168 35.9318 18.553C35.9007 8.25316 28.3704 0.785156 18.2262 0.785156ZM18.2262 30.595C11.3805 30.595 6.30848 25.461 6.30848 18.397C6.30848 11.0849 11.3805 5.67046 18.2262 5.67046C25.2276 5.67046 30.2996 11.0849 30.2996 18.273C30.2996 25.461 25.2276 30.595 18.2262 30.595Z" 
      fill="currentColor"
    ></path>

    <path 
      d="M35.0922 36.5706C25.2281 35.4816 18.9114 30.5956 15.7686 21.3856L20.7161 19.7676C23.1744 27.0796 27.8419 30.7516 35.6523 31.5606L35.0922 36.5706Z" 
      fill="currentColor"
    ></path>
  </g>
</svg>
`;
con1.style.height="200px";
con1.style.width="300px";
let con2=document.createElement("div");
con2.innerHTML = `
<svg class="client_logo is-matera"
     viewBox="0 0 162 28"
     fill="none"
     xmlns="http://www.w3.org/2000/svg">

  <mask id="mask0_2019_1800"
        style="mask-type:luminance"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="162"
        height="28">
    <path d="M162 0.5H0V27.5H162V0.5Z" fill="white"></path>
  </mask>

  <g mask="url(#mask0_2019_1800)">

    <path d="M64.949 5.11719C61.6631 5.11719 59.1631 6.99089 57.8584 10.411C57.7282 7.58939 56.814 5.11719 52.2682 5.11719C48.8708 5.11719 46.3013 7.09689 45.0039 10.702L44.6093 5.52268H40.0327V27.094H45.1956V15.963C45.1956 14.018 45.7598 12.206 46.7854 10.86C47.7503 9.59299 49.0437 8.86698 50.3344 8.86698C52.1139 8.86698 52.7142 9.72598 52.7142 12.269V27.094H57.8771V16.045C57.8771 14.089 58.4366 12.262 59.4522 10.9C60.4158 9.60899 61.7145 8.86798 63.0152 8.86798C64.7947 8.86798 65.395 9.72598 65.395 12.27V27.095H70.5579V11.255C70.5579 8.21998 69.8915 5.11719 64.9503 5.11719H64.949Z" fill="currentColor"></path>

    <path d="M91.118 23.976L91.108 23.97C90.451 23.606 90.145 22.958 90.145 21.931V11.823C90.145 7.37338 87.455 5.11719 82.15 5.11719C79.792 5.11719 77.872 5.67608 76.444 6.77888C74.9059 7.96598 73.9838 9.75299 73.7027 12.093L73.6873 12.22L77.895 12.781L77.915 12.657C78.424 9.64898 79.579 8.42198 81.902 8.42198C84.004 8.42198 84.982 9.51498 84.982 11.864V13.277C84.339 13.522 83.52 13.813 82.654 14.121C81.516 14.526 80.226 14.984 79.054 15.438C76.197 16.556 72.9595 17.824 72.9595 21.85C72.9595 25.283 75.387 27.501 79.143 27.501C82.142 27.501 84.263 26.163 85.446 23.523H85.57C85.861 26.163 87.507 27.501 90.465 27.501C91.385 27.501 92.722 27.298 93.368 26.958L93.437 26.921V24.4H93.306C92.575 24.4 91.666 24.352 91.116 23.976H91.118ZM84.983 16.274V19.983C84.983 22.527 83.332 24.237 80.874 24.237C79.021 24.237 78 23.23 78 21.403C78 19.31 79.382 18.545 81.051 17.828C82.494 17.196 83.524 16.815 84.433 16.478C84.622 16.408 84.804 16.341 84.983 16.274Z" fill="currentColor"></path>

    <path d="M116.894 5.11719C113.881 5.11719 111.308 6.31148 109.453 8.56998C107.768 10.622 106.84 13.363 106.84 16.289C106.84 19.639 107.786 22.448 109.576 24.414C111.415 26.433 114.102 27.501 117.347 27.501C123.38 27.501 125.65 23.629 126.49 20.381L126.519 20.269L122.812 18.877L122.776 19.019C122.363 20.672 121.854 21.814 121.172 22.615C120.312 23.625 119.155 24.116 117.634 24.116C114.156 24.116 112.457 21.837 112.294 16.947H126.659V16.817C126.659 13.332 125.816 10.42 124.223 8.39498C122.535 6.25088 120.001 5.11778 116.893 5.11778L116.894 5.11719ZM121.245 14.17H112.384C112.705 10.277 114.153 8.46198 116.935 8.46198C119.717 8.46198 121.095 10.224 121.245 14.17Z" fill="currentColor"></path>

    <path d="M139.287 5.11594C136.885 5.11594 135.045 7.10684 133.946 10.882L133.563 5.52154H128.945V27.093H134.108V17.139C134.108 12.919 136.189 10.084 139.287 10.084C139.829 10.084 140.312 10.157 140.854 10.322L141.025 10.374V5.57944L140.963 5.54124C140.705 5.38254 140.144 5.11594 139.287 5.11594Z" fill="currentColor"></path>

    <path d="M161.868 24.4C161.138 24.4 160.229 24.352 159.679 23.976L159.668 23.97C159.012 23.606 158.706 22.958 158.706 21.931V11.823C158.706 7.37338 156.016 5.11719 150.711 5.11719C148.352 5.11719 146.433 5.67608 145.004 6.77888C143.467 7.96598 142.544 9.75299 142.263 12.093L142.248 12.22L146.455 12.781L146.476 12.657C146.985 9.64898 148.14 8.42198 150.463 8.42198C152.564 8.42198 153.543 9.51498 153.543 11.864V13.277C152.9 13.522 152.08 13.814 151.214 14.121C150.076 14.525 148.787 14.984 147.615 15.437C144.759 16.556 141.521 17.823 141.521 21.85C141.521 25.283 143.949 27.501 147.705 27.501C150.704 27.501 152.825 26.162 154.008 23.522H154.132C154.423 26.162 156.069 27.501 159.027 27.501C159.947 27.501 161.284 27.297 161.93 26.957L161.999 26.921V24.399L161.868 24.4ZM153.543 16.274V19.983C153.543 22.527 151.892 24.237 149.434 24.237C147.581 24.237 146.56 23.23 146.56 21.403C146.56 19.31 147.942 18.545 149.611 17.828C151.053 17.196 152.084 16.815 152.992 16.478C153.181 16.408 153.364 16.341 153.543 16.274Z" fill="currentColor"></path>

    <path d="M104.073 23.5461C103.209 23.5461 102.551 23.4551 102.062 23.2701C101.12 22.9131 100.952 22.1411 100.952 20.1441V9.15105H106.14V5.52195H100.952V1.15625H95.7899V5.52195H91.7959V9.15105H95.7899V20.3871C95.7899 24.2511 96.2189 25.6911 98.7569 26.5981C99.6219 26.9311 100.984 27.0941 102.921 27.0941H106.593V23.5461H104.074H104.073Z" fill="currentColor"></path>

    <path d="M27.8851 6.30604C27.4651 4.89054 26.1797 -0.0472643 22.8398 0.549836C19.8136 1.07334 19.2387 5.80704 18.4955 9.89304C18.2692 11.4 16.8937 11.352 16.5391 9.95404C15.5375 7.03224 14.5079 -0.0999583 10.5349 0.547242C6.94122 1.13254 7.10742 9.18204 6.64072 13.593C6.57392 14.221 5.99172 14.674 5.35132 14.673L2.28712 14.669C0.893621 14.667 -0.178779 15.887 0.0255205 17.247C0.38412 19.632 1.20272 24.421 1.55732 26.525C1.61812 26.885 1.92192 27.148 2.27782 27.147L7.53612 27.142C7.97882 27.146 8.32342 26.745 8.26462 26.293C7.41932 19.747 6.69612 13.029 9.05322 12.595C11.4069 12.161 12.4733 19.441 13.6652 26.513C13.726 26.873 14.0298 27.136 14.3857 27.135L19.6106 27.13C20.0433 27.134 20.3812 26.751 20.3418 26.311C20.3418 26.308 20.3411 26.304 20.3411 26.301C20.3405 26.294 20.3411 26.288 20.3398 26.281C19.4965 19.753 18.8347 13.112 21.0783 12.613C23.432 12.181 24.5792 19.46 25.7711 26.531C25.8319 26.891 26.1357 27.153 26.4916 27.153L31.804 27.14C32.2661 27.139 32.61 26.703 32.5165 26.236C32.1512 24.43 31.5863 21.776 30.9633 18.946C30.4445 16.589 28.2657 7.58524 27.8865 6.30604H27.8851Z" fill="currentColor"></path>

  </g>
</svg>
`;
con2.style.height="200px";
con2.style.width="350px";
let con3=document.createElement("div");
con3.innerHTML = `
<svg class="client_logo is-chance" viewBox="0 0 160 28" fill="none" xmlns="http://www.w3.org/2000/svg" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0%);">
<mask id="mask0_2019_1788" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="160" height="28">
<path d="M159.5 0.5H0.5V27.5H159.5V0.5Z" fill="white"></path>
</mask>
<g mask="url(#mask0_2019_1788)">
<path d="M13.8048 0.5C18.1291 0.5 22.1873 2.6488 24.682 6.2263L20.2469 9.905C18.872 7.6325 16.4327 6.2375 13.8048 6.2263C9.66909 6.2713 6.3538 9.702 6.3981 13.899C6.3981 13.932 6.3981 13.966 6.3981 14C6.2983 18.196 9.5693 21.672 13.705 21.774C13.7383 21.774 13.7716 21.774 13.8048 21.774C16.4327 21.774 18.872 20.368 20.2469 18.095L24.682 21.774C20.4465 27.871 12.1527 29.334 6.1431 25.036C0.133496 20.739 -1.3079 12.324 2.9276 6.2263C5.4224 2.6375 9.48059 0.5 13.8048 0.5Z" fill="currentColor"></path>
<path d="M29.8721 0.792969H35.7376V11.143H46.1491V0.792969H52.0145V27.208H46.1491V16.869H35.7376V27.208H29.8721V0.792969Z" fill="currentColor"></path>
<path d="M56.1064 27.207H62.2602L64.1673 23.113H73.6918L75.566 27.207H81.719L68.9129 0.5L56.1064 27.207ZM66.4071 18.275L68.9129 12.807L71.452 18.275H66.4071Z" fill="currentColor"></path>
<path d="M108.131 0.5V27.207H102.265V13.404L85.8438 27.5V0.792503H91.7097V14.596L108.131 0.5Z" fill="currentColor"></path>
<path d="M127.299 0.5C131.624 0.5 135.682 2.6375 138.188 6.2263L133.752 9.905C132.377 7.6212 129.938 6.2375 127.299 6.2263C123.163 6.2825 119.859 9.725 119.915 13.921C119.915 13.944 119.915 13.978 119.915 14C119.815 18.196 123.086 21.672 127.222 21.774C127.255 21.774 127.277 21.774 127.31 21.774C129.949 21.774 132.389 20.379 133.763 18.095L138.199 21.774C133.963 27.871 125.669 29.334 119.66 25.036C113.65 20.739 112.209 12.324 116.444 6.2263C118.928 2.6375 122.986 0.5 127.299 0.5Z" fill="currentColor"></path>
<path d="M143.377 0.792969H159.499V6.67667H149.243V11.177H157.304V16.903H149.243V21.403H159.499V27.287H143.377V0.792969Z" fill="currentColor"></path>
</g>
</svg>
`;
con3.style.height="200px";
con3.style.width="350px";

let con4=document.createElement("div");
con4.innerHTML = `
<svg class="client_logo is-silvr" viewBox="0 0 104 38" fill="none" xmlns="http://www.w3.org/2000/svg" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0%);">
<mask id="mask0_2019_1777" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="104" height="38">
<path d="M103.071 0.785156H0.928711V37.215H103.071V0.785156Z" fill="white"></path>
</mask>
<g mask="url(#mask0_2019_1777)">
<path d="M77.47 17.592V12.8707H82.192C84.011 12.8707 85.008 13.824 85.008 15.253C85.008 16.683 84.011 17.592 82.192 17.592H77.47ZM74.352 27.685H77.47V20.061L84.661 27.685H88.776L82.712 21.448C82.235 20.971 81.759 20.451 81.369 20.105H82.669C85.614 20.105 88.3 18.329 88.3 15.21C88.3 12.1776 85.917 10.2717 82.712 10.2717H74.352V27.685ZM70.366 37.215H84.315C95.837 37.215 103.071 29.245 103.071 18.935C103.071 8.62555 95.88 0.785156 84.315 0.785156H70.366V3.60075H84.315C94.278 3.60075 99.952 10.0984 99.952 18.892C99.952 27.685 94.278 34.399 84.315 34.399H70.366V37.215ZM53.7757 10.2717L60.36 27.685H64.302L70.886 10.2717H67.551L62.439 24.566L57.241 10.2717H53.7757ZM51.6967 37.215H72.966V34.399H51.6967V37.215ZM51.6967 3.60075H72.966V0.785156H51.6967V3.60075ZM43.2929 27.685H54.7287V25H46.4552V10.2717H43.2929V27.685ZM39.3079 37.215H56.938V34.399H39.3079V37.215ZM39.3079 3.60075H56.938V0.785156H39.3079V3.60075ZM33.8933 27.685H37.0555V10.2717H33.8933V27.685ZM29.9081 37.215H41.0407V34.399H29.9081V37.215ZM29.9081 3.60075H41.0407V0.785156H29.9081V3.60075ZM15.6999 14.95C15.6999 17.506 16.9128 19.108 20.8981 19.931L23.3672 20.451C25.4031 20.884 26.0095 21.664 26.0095 22.834C26.0095 23.743 25.3164 25 23.3238 25H15.9599V27.685H23.3238C27.4823 27.685 29.215 25.303 29.215 22.834C29.215 20.105 27.5689 18.415 24.0169 17.679L21.5045 17.159C19.3819 16.726 18.7755 15.99 18.7755 14.907C18.7755 14.04 19.4253 12.8707 21.5478 12.8707H28.0887V10.2717H21.3312C17.346 10.2717 15.6999 12.5675 15.6999 14.95ZM19.6852 37.215H31.8574V34.399H19.6852C9.72211 34.399 4.04761 27.902 4.04761 19.108C4.04761 10.315 9.72211 3.60075 19.6852 3.60075H31.8574V0.785156H19.6852C8.16271 0.785156 0.928711 8.75556 0.928711 19.065C0.928711 29.375 8.11941 37.215 19.6852 37.215Z" fill="currentColor"></path>
</g>
</svg>
`;
con4.style.height="150px";
con4.style.width="350px";

let con5=document.createElement("div");
con5.innerHTML = `
<svg
  class="client_logo is-alan"
  viewBox="0 0 154 34"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  style="translate: none; rotate: none; scale: none; transform: translate(0px, 0%);"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.3173 6.71729C12.6769 2.95169 9.24429 0.441289 5.63229 1.10729C2.99379 1.59399 0.970091 3.69459 0.355291 6.25619V6.28179C0.329691 6.38429 0.30409 6.48679 0.30409 6.56359V6.58919C0.278491 6.69169 0.27849 6.76849 0.25289 6.87099C0.25289 6.89659 0.25289 6.89659 0.25289 6.92219C0.22719 7.02469 0.22719 7.12719 0.20159 7.22959V7.25529C0.20159 7.35769 0.175991 7.46019 0.175991 7.53699C0.175991 7.63949 0.150391 7.74199 0.150391 7.87009C0.150391 7.89569 0.150391 7.92129 0.150391 7.94689C0.150391 7.97249 0.150391 7.99809 0.150391 8.02379C0.150391 8.07499 0.150391 8.10059 0.150391 8.15179C0.150391 8.48489 0.20159 8.81789 0.25289 9.12529C0.61149 11.277 2.58399 12.712 4.63329 12.327C5.37619 12.199 6.01659 11.841 6.52889 11.354C6.96439 10.944 7.57919 10.816 8.14269 11.072C8.80879 11.354 9.52599 11.431 10.2433 11.303C12.2158 10.944 13.5478 9.02279 13.3429 6.97349C13.3429 6.89659 13.3173 6.79419 13.3173 6.71729ZM29.1739 2.00389C21.9244 2.00389 17.3903 4.56549 17.3903 8.68979C17.3903 13.506 22.0269 20.064 29.1739 20.064C36.2185 20.064 40.9575 13.429 40.9575 8.68979C40.9575 4.48869 36.5515 2.00389 29.1739 2.00389ZM58.1718 7.61389C58.1718 7.58829 58.1718 7.56269 58.1718 7.51139C58.1718 7.43459 58.1718 7.33209 58.1462 7.22959V7.20399C58.1462 7.10159 58.1206 6.99909 58.1206 6.89659V6.84539C58.095 6.64049 58.0438 6.43549 58.0181 6.25619V6.23059C57.4033 3.66889 55.4053 1.56839 52.7411 1.08169C49.1548 0.415592 45.6966 2.92609 45.0562 6.69169C45.0306 6.76849 45.0306 6.87099 45.0306 6.94789C44.8256 8.99719 46.1577 10.8928 48.1302 11.277C48.873 11.405 49.5903 11.303 50.2307 11.047C50.7687 10.816 51.4091 10.9184 51.8189 11.328C52.3313 11.815 52.9717 12.174 53.7146 12.302C55.7639 12.686 57.7364 11.251 58.095 9.09959C58.1462 8.76659 58.1718 8.43359 58.1975 8.12619C58.1975 8.07499 58.1975 8.04939 58.1975 7.99809C58.1975 7.97249 58.1975 7.94689 58.1975 7.92129C58.1975 7.89569 58.1975 7.84439 58.1975 7.84439C58.1718 7.76759 58.1718 7.69069 58.1718 7.61389ZM39.6255 23.88C37.7298 23.009 35.1682 24.47 32.9908 24.854C31.71 25.059 30.4547 25.187 29.1995 25.187C27.9187 25.161 26.6635 25.059 25.4083 24.854C23.2309 24.495 20.6692 23.035 18.7736 23.88C17.8002 24.316 17.5184 25.392 17.9026 26.647C18.1844 27.518 18.6968 28.338 19.3628 28.978C20.7461 30.336 22.488 31.36 24.1275 32.001C25.7669 32.667 27.5088 33.025 29.2252 33.025C30.9671 33 32.6834 32.667 34.3228 32.001C35.9367 31.36 37.7042 30.31 39.0875 28.978C39.7535 28.338 40.2659 27.518 40.5477 26.647C40.8807 25.366 40.5989 24.316 39.6255 23.88ZM145.934 9.63759C143.065 9.63759 140.862 10.6879 139.274 13.045V10.9697C139.274 10.4829 138.89 10.0987 138.403 10.0987H132.716C132.229 10.0987 131.845 10.4829 131.845 10.9697V31.668C131.845 32.155 132.229 32.539 132.716 32.539H138.403C138.89 32.539 139.274 32.155 139.274 31.668V20.422C139.274 17.861 140.17 15.606 142.86 15.606C145.601 15.606 146.421 18.245 146.421 20.422V31.668C146.421 32.155 146.805 32.539 147.292 32.539H152.979C153.465 32.539 153.85 32.155 153.85 31.668V19.987C153.875 15.094 152.492 9.63759 145.934 9.63759ZM101.822 27.159H100.644C99.696 27.134 99.312 26.416 99.312 25.443V2.54179C99.312 2.05509 98.928 1.67089 98.441 1.67089H92.908C92.421 1.67089 92.037 2.05509 92.037 2.54179V25.059C92.037 31.514 96.187 33 100.055 33C100.593 33 101.105 32.974 101.925 32.897C102.386 32.846 102.745 32.488 102.745 32.026V28.03C102.693 27.544 102.309 27.159 101.822 27.159ZM116.014 27.185C112.863 27.185 110.916 24.572 110.916 21.293C110.916 18.142 112.786 15.529 115.937 15.529C119.088 15.529 121.214 17.912 121.214 21.498C121.214 25.059 118.96 27.185 116.014 27.185ZM127.618 10.1243H121.906C121.419 10.1243 121.035 10.5086 121.035 10.9953V13.096C119.652 11.021 117.141 9.63759 114.195 9.63759C107.612 9.63759 103.411 14.787 103.411 21.293C103.411 27.928 107.791 33.025 114.246 33.025C117.397 33.025 119.626 31.668 121.035 29.465V31.668C121.035 32.155 121.419 32.539 121.906 32.539H127.618C128.105 32.539 128.489 32.155 128.489 31.668V10.9697C128.489 10.5086 128.105 10.1243 127.618 10.1243ZM76.206 27.185C73.055 27.185 71.083 24.572 71.083 21.293C71.083 18.142 72.953 15.529 76.103 15.529C79.254 15.529 81.38 17.912 81.38 21.498C81.406 25.059 79.152 27.185 76.206 27.185ZM87.81 10.1243H82.098C81.611 10.1243 81.227 10.5086 81.227 10.9953V13.096C79.843 11.021 77.333 9.63759 74.387 9.63759C67.8037 9.63759 63.6025 14.787 63.6025 21.293C63.6025 27.928 67.983 33.025 74.438 33.025C77.589 33.025 79.818 31.668 81.227 29.465V31.668C81.227 32.155 81.611 32.539 82.098 32.539H87.81C88.297 32.539 88.681 32.155 88.681 31.668V10.9697C88.681 10.5086 88.297 10.1243 87.81 10.1243Z"
    fill="currentColor"
  />
</svg>
`;
con5.style.height="200px";
con5.style.width="350px";

container1.append(con1,con2,con3,con4,con5);

let container2=document.createElement("div");
container2.style.height="300px";
container2.style.marginTop="300px";
container2.style.display="flex"
container2.style.width="100%";

let con6=document.createElement("div");
con6.style.display="flex";
con6.style.flexDirection="column";

let con7=document.createElement("div");

let el1=document.createElement("div");
el1.style.position="relative";

el1.style.overflow="hidden";
let e3=document.createElement("span");
e3.innerText="Let's work";
e3.classList.add("e3");
el1.append(e3);
e3.style.letterSpacing="3px";

e3.style.textTransform = "uppercase";
let el2=document.createElement("div");
el2.style.display="flex";


el2.style.gap="50px";
el2.style.position="relative";
el2.style.left="80px";



let e1=document.createElement("img");
e1.src = "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985/68dce0426bc778f79210aebb_CTA-Team_Namma.webp"; 
e1.style.height="140px";
let e2=document.createElement("span");
e2.innerText = "together";

e2.style.textTransform = "uppercase";
e2.style.top="20px";
el2.append(e1,e2);

con6.append(el1,el2);
div8.classList.add("div8");
con6.classList.add("con6");
el1.classList.add("el1");
el2.classList.add("el2");
e1.classList.add("e1");
e2.classList.add("e2");



con7.style.width = "45%";
con7.style.position = "relative";
con7.style.left="30px";
con7.classList.add("con7");
let a1 = document.createElement("div");
a1.classList.add("a1");
let a2 = document.createElement("div");
a1.style.lineHeight="2px";
a2.classList.add("a2");
let s1 = document.createElement("span");
s1.classList.add("s1");

s1.innerText = `Work with us if average isn’t your thing.`;
s1.style.fontFamily = "Helvetica Neue, Arial, sans-serif";
s1.style.fontSize = "35px";
s1.style.fontWeight = "500";
s1.style.letterSpacing = "0";
s1.style.lineHeight = "1.1";
s1.style.width = "100%";
s1.style.display = "block";

s1.style.textAlign = "left";
let s2 = document.createElement("span");

s2.innerText = `Drop it, we'll build it!`;
s2.style.fontFamily = "Helvetica Neue, Arial, sans-serif";
s2.style.fontSize = "35px";
s2.style.fontWeight = "500";
s2.style.letterSpacing = "0";
s2.style.lineHeight = "1.1";
s2.style.width = "100%";
s2.style.display = "block";
s2.style.textAlign = "left";
s2.classList.add("s2");

a1.append(s1,s2);

let s3=document.createElement("span");
s3.innerText="say hello →";
s3.style.textTransform="uppercase"; 
s3.style.fontFamily = "Helvetica Neue, Arial, sans-serif";
s3.style.fontSize = "20px";
s3.style.fontWeight = "200";
s3.style.letterSpacing = "0";
s3.style.lineHeight = "1.1";
s3.style.width = "100%";
s3.style.display = "block";
s3.style.textAlign = "left";
s3.classList.add("s3");

a2.style.marginTop="100px";
a2.append(s3);


con7.append(a1, a2);
container2.append(con6,con7);

div8.append(container1,container2);

observer3.observe(div8);
let namma = document.createElement("div");

namma.innerText = "NAMMA";

namma.style.width = "100%";
namma.style.height = "600px";
namma.style.marginTop="400px";
namma.style.overflow = "hidden";
namma.style.fontSize = "460px";
namma.style.fontWeight = "1000";
namma.style.lineHeight = "1";
namma.style.textAlign = "center";
namma.style.letterSpacing = "-10px";
namma.style.flexShrink = "0";
namma.style.fontFamily = "Helvetica Neue, Arial, sans-serif";
namma.style.textTransform = "uppercase";
  
namma.style.display = "flex";
namma.style.justifyContent = "center";
namma.style.alignItems = "center";
namma.style.position = "relative";
namma.style.zIndex = "1";

div9.append(namma);




document.body.append(cursor, div1, content, div3, div4, div5, div6, div7,div8,div9);
