(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{3199:(e,t,n)=>{Promise.resolve().then(n.bind(n,3752))},3752:(e,t,n)=>{"use strict";n.d(t,{default:()=>N});var s=n(5155),i=n(2115),r=n(8586),a=n(5683),l=n(6974);function o(e){let{text:t}=e,n=i.useRef(null),o=(0,r.W)(n,{once:!0});return(0,s.jsx)("div",{className:"flex space-x-1 justify-center",children:(0,s.jsx)(a.N,{children:t.split("").map((e,t,i)=>(0,s.jsx)(l.P.h1,{ref:n,initial:{WebkitTextStroke:"1px white",color:"transparent"},animate:o?{WebkitTextStroke:"0px",color:"white"}:{},exit:"hidden",transition:{duration:.5,delay:.09*t},className:"",children:" "===e?(0,s.jsx)("span",{children:"\xa0"}):e},t))})})}function c(e){let{text:t}=e,n=i.useRef(null),o=(0,r.W)(n,{once:!0});return(0,s.jsx)("div",{className:"flex space-x-1 justify-center",children:(0,s.jsx)(a.N,{children:t.split("").map((e,t,i)=>(0,s.jsx)(l.P.h1,{ref:n,initial:{WebkitTextStroke:"1px white",color:"transparent"},animate:o?{WebkitTextStroke:"0px",color:"white"}:{},exit:"hidden",transition:{duration:.5,delay:(i.length-t-1)*.09},className:"",children:" "===e?(0,s.jsx)("span",{children:"\xa0"}):e},t))})})}var d=n(5083);function x(){var e,t;let[n,r]=(0,i.useState)(0),[a,x]=(0,i.useState)(!1),[u,p]=(0,i.useState)(!1),m=(0,i.useRef)(null),{ref:h,inView:g}=(0,d.Wx)({triggerOnce:!1,threshold:.3}),f=[{text1:"An Exclusive",text2:"Experience App!",video:"https://hypegymapp.s3.ap-south-1.amazonaws.com/popcornNew.mp4"},{text1:"Spotlighting Craft,",text2:"Fueling Stardom",video:"https://hypegymapp.s3.ap-south-1.amazonaws.com/spotlightNew.mp4"},{text1:"Only fan are",text2:"STARMAKERS!",video:"https://hypegymapp.s3.ap-south-1.amazonaws.com/OnlyfansNew.mp4"},{text1:"Stars rewards",text2:"True Fans!",video:"https://hypegymapp.s3.ap-south-1.amazonaws.com/moneyNew.mp4"},{text1:"EngageX App ",text2:"For Every Moment!",video:"https://hypegymapp.s3.ap-south-1.amazonaws.com/HomeBannerTwo.mp4"}],b=(0,i.useCallback)(()=>{x(!0),p(!0),setTimeout(()=>{p(!1),r(e=>(e+1)%f.length),x(!1)},1e3)},[]);return(0,i.useEffect)(()=>{let e=setTimeout(()=>{a||b()},6e3);return()=>clearTimeout(e)},[n,a,b]),(0,s.jsxs)("div",{className:"relative h-screen w-full overflow-hidden",children:[(0,s.jsx)("video",{autoPlay:g,muted:!0,playsInline:!0,className:"absolute inset-0 h-full w-full object-cover transition-opacity duration-1000",src:null===(e=f[n])||void 0===e?void 0:e.video,ref:e=>{m.current=e,h(e)},onEnded:()=>{a||b()}},f[n].video),(0,s.jsx)("div",{className:"absolute inset-0 flex items-center justify-center",children:(0,s.jsxs)("svg",{onClick:()=>{a||b()},viewBox:"0 0 408 362",xmlns:"http://www.w3.org/2000/svg",className:"transition-transform duration-1000 ease-in ".concat(u&&"scale-[17]"," cursor-pointer w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[360px] lg:h-[310px]"),style:{pointerEvents:"auto"},children:[(0,s.jsx)("defs",{children:(0,s.jsx)("clipPath",{id:"starClip",children:(0,s.jsx)("path",{d:"M2.97802 349.139C-0.604362 353.312 1.48536 357.833 2.97802 359.572C7.15746 364.17 14.3151 360.352 17.3715 357.868L65.6696 324.975L134.652 277.71L203.847 230.446L269.951 264.723L293.087 276.859L314.41 287.93C320.466 292.018 324.468 289.633 325.712 287.93C329.806 283.416 326.707 278.243 324.646 276.22L316.863 267.598L286.583 233.64L264.3 208.411C254.747 195.466 255.273 181.159 256.73 175.623C258.009 165.063 266.077 155.611 269.951 152.204L273.895 147.946L287.009 134.64L314.624 106.324L338.4 82.1591L374.97 44.6881L392.668 26.5914C396.045 23.043 403.224 15.5417 404.929 13.9237C407.062 11.9011 408.341 7.43013 404.716 3.17207C401.816 -0.234378 397.395 1.11401 395.547 2.21401L389.47 6.36561L299.91 67.4688L248.094 102.811L204.06 132.724L122.497 90.0365C114.074 85.6365 96.1838 76.2617 92.0044 73.9623C87.825 71.6629 84.2213 73.643 82.9418 74.9204C77.6536 79.5191 80.7384 84.7849 82.9418 86.8429L120.152 128.572L141.902 153.056C146.806 160.188 151.497 164.978 151.711 182.011C151.881 195.636 141.689 208.127 136.571 212.669L84.861 265.362C59.0593 291.549 6.5604 344.966 2.97802 349.139Z"})})}),(0,s.jsx)("foreignObject",{x:"0",y:"0",width:"408",height:"362",clipPath:"url(#starClip)",children:(0,s.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,className:"inset-0 h-full w-full object-none transition-opacity duration-1000",src:null===(t=f[(n+1)%f.length])||void 0===t?void 0:t.video})})]})}),(0,s.jsx)("div",{className:"absolute bottom-[20%] mx-auto lg:bottom-8 w-full",children:(0,s.jsxs)("div",{className:"w-[80%] mx-auto",children:[(0,s.jsx)(l.P.div,{initial:{x:-230,opacity:0},animate:{x:0,opacity:1},transition:{duration:.8},children:(0,s.jsx)("div",{className:"flex justify-center md:justify-center lg:justify-start",children:(0,s.jsx)("h1",{className:"text-white text-[40px] md:text-[4rem] lg:text-[113px] font-medium",children:(0,s.jsx)(o,{text:f[n].text1})})})},"text1-".concat(n)),(0,s.jsx)(l.P.div,{initial:{x:230,opacity:0},animate:{x:0,opacity:1},transition:{duration:.8},children:(0,s.jsx)("div",{className:"flex justify-center md:justify-center lg:justify-end mt-0 md:mt-[-20px]",children:(0,s.jsx)("h1",{className:"text-white text-[40px] md:text-[4rem] lg:text-[113px] font-medium",children:(0,s.jsx)(c,{text:f[n].text2})})})},"text2-".concat(n))]})})]})}var u=n(5565);let p={src:"/_next/static/media/ComingSoon.2b56872f.png",height:1074,width:2136,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAIVBMVEX5+v79/f/////+/v////9MaXH////////////L2vT////j1ep4AAAAC3RSTlNDN3drWABeTyVjkJnp45sAAAAJcEhZcwAAITgAACE4AUWWMWAAAAAlSURBVHicBcGJAQAgDAKxA/qo+w9swqDiIqqSdR69I6FDY8f0BwfCAGpZNRloAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4};function m(){let{ref:e,inView:t}=(0,d.Wx)({threshold:.1});return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"relative h-screen w-full overflow-hidden bg-indigo-600 bg-opacity-25",children:[(0,s.jsx)("div",{className:"absolute inset-0 h-full w-full",ref:e,children:t?(0,s.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"absolute inset-0 h-full w-full object-cover",src:"https://hypegymapp.s3.ap-south-1.amazonaws.com/ladies.mp4"}):null}),(0,s.jsxs)("div",{className:"absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-5",children:[(0,s.jsx)("h3",{className:"text-white text-2xl md:text-[55px] mb-2",children:"Stars Are Rehearsing...."}),(0,s.jsx)("div",{className:"mt-5 mb-5",children:(0,s.jsx)(u.default,{src:p,alt:"commit soon",className:"w-[600px]"})}),(0,s.jsx)("button",{className:"gradient-border-button mt-6",children:(0,s.jsx)("span",{className:"button-text",children:"Join now"})})]}),(0,s.jsx)("style",{children:'\n        .gradient-border-button {\n          position: relative;\n          display: inline-flex;\n          align-items: center;\n          justify-content: center;\n          padding: 0.5rem 1rem;\n          border: none;\n          background: transparent;\n          border-radius: 50px;\n          cursor: pointer;\n          overflow: hidden;\n        }\n        .gradient-border-button:hover {\n          box-shadow: 2px 4px 8px rgba(137, 135, 135, 0.5);\n        }\n        .gradient-border-button::before {\n          content: "";\n          position: absolute;\n          inset: 0;\n          border-radius: 50px;\n          padding: 3px;\n          background: linear-gradient(\n            90deg,\n            rgb(66, 235, 237),\n            rgb(8, 51, 241),\n            rgba(131, 131, 131, 0.75)\n          );\n          background-size: 200% 200%;\n          animation: gradientAnimation 2s linear infinite;\n          -webkit-mask: linear-gradient(#fff 0 0) content-box,\n            linear-gradient(#fff 0 0);\n          mask-composite: exclude;\n          z-index: 0;\n        }\n\n        .button-text {\n          position: relative;\n          z-index: 1;\n          color: white;\n          font-size: 20px;\n          font-weight: bold;\n          border-radius: 50px;\n          padding: 0.5rem 1rem;\n        }\n\n        @keyframes gradientAnimation {\n          0% {\n            background-position: 0% 50%;\n          }\n          50% {\n            background-position: 100% 50%;\n          }\n          100% {\n            background-position: 0% 50%;\n          }\n        }\n      '})]})})}var h=n(5429),g=n(7521);let f=()=>(0,s.jsx)("footer",{className:"py-6 px-4 h-[200px] bg-white",children:(0,s.jsxs)("div",{className:"flex px-5 flex-col md:flex-row items-center justify-between",children:[(0,s.jsx)("div",{className:"flex items-center mb-4 md:mb-0",children:(0,s.jsx)("img",{src:"./engageX_black.png",alt:"Logo",className:"lg:w-[200px] w-[120px]"})}),(0,s.jsxs)("div",{className:"flex space-x-4",children:[(0,s.jsx)("img",{src:"./youtube.png",alt:"youtube",className:"w-[32px]"}),(0,s.jsx)("img",{src:"./facebook.png",alt:"Facebook",className:"w-[32px]"}),(0,s.jsx)("a",{href:"https://x.com/EngageX_world",target:"_blank",rel:"noopener noreferrer",className:"text-white hover:text-blue-400 transition",children:(0,s.jsx)("img",{src:"./twitter.png",alt:"twitter",className:"w-[32px]"})}),(0,s.jsx)("a",{href:"https://www.instagram.com/engagex.world/",target:"_blank",rel:"noopener noreferrer",className:"text-white hover:text-pink-500 transition",children:(0,s.jsx)("img",{src:"./instagram.png",alt:"instagram",className:"w-[32px]"})}),(0,s.jsx)("a",{href:"https://www.linkedin.com/company/engagex-world/",target:"_blank",rel:"noopener noreferrer",className:"text-white hover:text-blue-700 transition",children:(0,s.jsx)("img",{src:"./linkedin.png",alt:"linkedin",className:"w-[32px]"})})]})]})});var b=n(6261),w=n(1478),j=n(5415);let v={src:"/_next/static/media/ourKeyValue.1ea7c936.svg",height:1e3,width:1124,blurWidth:0,blurHeight:0},y=()=>(0,s.jsxs)("div",{class:"relative w-[100%] md:w-[100%] lg:w-[100%] xl:w-[50%] mx-auto ",children:[(0,s.jsx)("p",{className:"absolute lg:top-20 md:top-15 top-10  left-[35%] lg:text-[40px] md:text-[35px] text-[20px] text-sky-500 font-semibold",children:"Our Key Value"}),(0,s.jsx)(u.default,{priority:!0,src:v,alt:"Our Key Value"}),";"]});function N(){let[e,t]=(0,i.useState)(!1),n=(0,i.useRef)([]),r=(0,i.useRef)(null);return(0,i.useEffect)(()=>(w.os.registerPlugin(j.u),n.current.forEach((e,t)=>{let s=e.querySelector(".content");w.os.fromTo(s,{opacity:1},{opacity:1,y:0,duration:1,ease:"power2.out",scrollTrigger:{trigger:e,start:"top center",end:"bottom center",toggleActions:"play none none reverse"}}),t!==n.current.length-1&&j.u.create({trigger:e,start:"top top",end:"bottom top",pin:!0,pinSpacing:!1,scrub:!0})}),j.u.create({trigger:n.current[n.current.length-1],start:"top top",end:"bottom bottom",scrub:!0,onUpdate:e=>{let{progress:t}=e;r.current&&w.os.to(r.current,{rotation:t>.5?180:0,duration:.3})}}),()=>{j.u.getAll().forEach(e=>e.kill())}),[]),(0,i.useEffect)(()=>{let e=()=>{t(window.scrollY>0)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,s.jsxs)("div",{className:"relative h-auto w-full",children:[(0,s.jsx)("button",{className:"fixed bottom-5 lg:bottom-10 left-5 lg:left-10 z-10 animate-bounce",onClick:()=>{(n.current.find(e=>e.getBoundingClientRect().top>.2*window.innerHeight)||n.current[0]).scrollIntoView({behavior:"smooth"})},children:(0,s.jsx)(b.A,{size:45,ref:r,style:{backgroundColor:"white",color:"black",padding:5,borderRadius:"20px",cursor:"pointer",transformOrigin:"center"}})}),(0,s.jsx)(h.default,{isNavbarScrolled:e}),(0,s.jsx)("div",{id:"section1",className:"h-screen bg-black",ref:e=>n.current[0]=e,children:(0,s.jsx)("div",{className:"content",children:(0,s.jsx)(x,{})})}),(0,s.jsx)("div",{id:"section2",className:"lg:h-screen bg-black md:h-auto h-auto",ref:e=>n.current[1]=e,children:(0,s.jsx)("div",{className:"content",children:(0,s.jsx)(g.default,{})})}),(0,s.jsx)("div",{id:"section3",className:"lg:h-screen bg-black md:h-auto h-auto",ref:e=>n.current[2]=e,children:(0,s.jsx)("div",{className:"content",children:(0,s.jsx)(y,{})})}),(0,s.jsx)("div",{id:"section4",className:"h-[110%]",ref:e=>n.current[3]=e,children:(0,s.jsxs)("div",{className:"content flex-grow",children:[(0,s.jsx)(m,{}),(0,s.jsx)(f,{})]})})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[831,367,592,116,6,749,441,447,358],()=>t(3199)),_N_E=e.O()}]);