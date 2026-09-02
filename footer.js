// ===============================
// FOOTER - DIV9
// ===============================

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


// ===============================
// VIDEO CONTAINER
// ===============================

let vc = document.createElement("div");

vc.style.display = "flex";
vc.style.flexDirection = "row";
vc.style.justifyContent = "space-between";
vc.style.alignItems = "center";
vc.style.width = "100%";
vc.style.height = "80px";


// ===============================
// FOOTER VIDEOS
// ===============================

let videoUrls = [
    "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68bef694221ab31dc7a0898e_Home-artdirection-transcode.webm",

    "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68bef76a17912168bc67811f_Home-branding-transcode.webm",

    "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68bef7ea54539b4433a39276_Webflow-home-transcode.webm",

    "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68bef86a1717db6af24e06f2_UI-UX-Home-transcode.webm",

    "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F69f31d237bb976aa6e0bc834_Scene-1_webm.webm",

    "https://cdn.prod.website-files.com/679cb9cacf00799ba4b4c985%2F68df9e1b94554da67438cec0_Ads-service-homeV3-transcode.mp4"
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


// ===============================
// NAMMA
// ===============================

let namma = document.createElement("div");

namma.innerText = "NAMMA";

namma.style.width = "100%";
namma.style.height = "600px";
namma.style.marginTop = "400px";
namma.style.overflow = "hidden";

namma.style.fontSize = "460px";
namma.style.fontWeight = "1000";
namma.style.lineHeight = "1";
namma.style.textAlign = "center";
namma.style.letterSpacing = "-10px";

namma.style.flexShrink = "0";

namma.style.fontFamily =
    "Helvetica Neue, Arial, sans-serif";

namma.style.textTransform = "uppercase";

namma.style.display = "flex";
namma.style.justifyContent = "center";
namma.style.alignItems = "center";

namma.style.position = "relative";
namma.style.zIndex = "1";

div9.append(namma);


// ===============================
// ADD FOOTER TO PAGE
// ===============================

document.body.append(div9);