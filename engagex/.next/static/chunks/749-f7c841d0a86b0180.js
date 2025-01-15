"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[749],{7521:(e,t,a)=>{a.d(t,{default:()=>b});var n=a(5155),s=a(2115),i=a(7274),r=a(337),l=a(3451),o=a(3473),c=a(7911),u=a(975),d=a(1130),h=a(5895);let p=[{id:1,name:"Alice Johnson",latitude:37.7749,longitude:-122.4194,continent:"North America",profilePicture:"https://hrmportal.s3.ap-south-1.amazonaws.com/userDataImages/User1.svg"},{id:2,name:"Bob Smith",latitude:55.7558,longitude:37.6173,continent:"Europe",profilePicture:"https://hrmportal.s3.ap-south-1.amazonaws.com/userDataImages/User2.svg"},{id:3,name:"Charlie Brown",latitude:13.7563,longitude:100.5018,continent:"Asia",profilePicture:"https://hrmportal.s3.ap-south-1.amazonaws.com/userDataImages/User4.svg"},{id:4,name:"Diana Lee",latitude:-33.8688,longitude:151.2093,continent:"Australia",profilePicture:"https://hrmportal.s3.ap-south-1.amazonaws.com/userDataImages/User3.svg"},{id:5,name:"Fiona Taylor",latitude:-23.5505,longitude:-46.6333,continent:"South America",profilePicture:"https://hrmportal.s3.ap-south-1.amazonaws.com/userDataImages/User6.svg"},{id:6,name:"Hannah White",latitude:48.8566,longitude:2.3522,continent:"Europe",profilePicture:"https://hrmportal.s3.ap-south-1.amazonaws.com/userDataImages/User5.svg"},{id:7,name:"Ivan Davis",latitude:-1.2921,longitude:36.8219,continent:"Africa",profilePicture:"https://hrmportal.s3.ap-south-1.amazonaws.com/userDataImages/User4.svg"},{id:8,name:"Liam Lewis",latitude:-34.6037,longitude:-58.3816,continent:"South America",profilePicture:"https://hrmportal.s3.ap-south-1.amazonaws.com/userDataImages/User2.svg"},{id:9,name:"Mia Robinson",latitude:35.6762,longitude:139.6503,continent:"Asia",profilePicture:"https://hrmportal.s3.ap-south-1.amazonaws.com/userDataImages/User5.svg"},{id:10,name:"Noah Hall",latitude:-26.2041,longitude:28.0473,continent:"Africa",profilePicture:"https://hrmportal.s3.ap-south-1.amazonaws.com/userDataImages/User8.svg"},{id:11,name:"Olivia Martinez",latitude:19.4326,longitude:-99.1332,continent:"North America",profilePicture:"https://hrmportal.s3.ap-south-1.amazonaws.com/userDataImages/User2.svg"},{id:12,name:"Paul Walker",latitude:51.5074,longitude:-.1278,continent:"Europe",profilePicture:"https://hrmportal.s3.ap-south-1.amazonaws.com/userDataImages/User7.svg"},{id:13,name:"Quinn Carter",latitude:28.6139,longitude:77.209,continent:"Asia",profilePicture:"https://hrmportal.s3.ap-south-1.amazonaws.com/userDataImages/User9.svg"},{id:14,name:"Rebecca Adams",latitude:-41.2865,longitude:174.7762,continent:"Australia",profilePicture:"https://hrmportal.s3.ap-south-1.amazonaws.com/userDataImages/User10.svg"},{id:15,name:"Samuel Wilson",latitude:40.7128,longitude:-74.006,continent:"North America",profilePicture:"https://hrmportal.s3.ap-south-1.amazonaws.com/userDataImages/User11.svg"},{id:16,name:"Tina Garcia",latitude:-12.0464,longitude:-77.0428,continent:"South America",profilePicture:"https://hrmportal.s3.ap-south-1.amazonaws.com/userDataImages/User12.svg"},{id:17,name:"Uma Nelson",latitude:6.9271,longitude:79.8612,continent:"Asia",profilePicture:"https://hrmportal.s3.ap-south-1.amazonaws.com/userDataImages/User13.svg"},{id:18,name:"Victor Green",latitude:-17.8249,longitude:31.053,continent:"Africa",profilePicture:"https://hrmportal.s3.ap-south-1.amazonaws.com/userDataImages/User14.svg"}];var m=a(8586),f=a(5403),g=a(3549);let A=e=>{let{from:t,to:a,animationOptions:i}=e,r=(0,s.useRef)(null),l=(0,m.W)(r,{once:!0});return(0,f.E)(()=>{let e=r.current;if(!e||!l)return;if(e.textContent="".concat(String(t).replace(/\B(?=(\d{3})+(?!\d))/g,","),"+"),window.matchMedia("(prefers-reduced-motion)").matches){e.textContent="".concat(String(a).replace(/\B(?=(\d{3})+(?!\d))/g,","),"+");return}let n=(0,g.i)(t,a,{duration:3,ease:"easeInOut",...i,onUpdate(t){e.textContent="".concat(Number(t).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g,","),"+")}});return()=>{n.stop()}},[r,l,t,a]),(0,n.jsx)("span",{ref:r})},x=e=>{let{visibleProfile:t}=e;return(0,n.jsx)("img",{className:"absolute top-[-10px] lg:top-[-28px] left-[16px] lg:left-[14px] lg:w-[60px] w-[50px]  rounded-full opacity-100 text-sky-50 p-1",src:null==t?void 0:t.profilePicture,alt:null==t?void 0:t.name})};var w=a(3107),v=a(8190);let b=()=>{let e=(0,s.useRef)(null),[t,a]=(0,s.useState)(null),[m,f]=(0,s.useState)([{x:0,y:0}]),[g,b]=(0,s.useState)(!1),y=(0,v.Ub)({query:"(max-width: 767px)"}),j=(0,v.Ub)({query:"(min-width: 768px) and (max-width: 1024px)"}),P=(0,v.Ub)({query:"(min-width: 1025px)"});(0,s.useEffect)(()=>{let t=e.current,n=new i.JeP({canvas:t,antialias:!0});n.setSize(t.clientWidth,t.clientHeight),n.setPixelRatio(window.devicePixelRatio),n.setClearColor("#2c2c2c");let s=new r.Z58,o=new r.ubm(45,t.clientWidth/t.clientHeight,.01,1e3);o.position.z=2;let m=new l.N(o,n.domElement);m.enableDamping=!0,m.enableZoom=!1,m.enablePan=!1,m.rotateSpeed=1,m.zoomSpeed=.5;let A=()=>{t.clientWidth,t.clientHeight,y?(m.minDistance=1.8,m.maxDistance=1.5):j?(m.minDistance=1.5,m.maxDistance=1.7):P&&(m.minDistance=1.2,m.maxDistance=3)};A(),m.addEventListener("start",()=>b(!0)),m.addEventListener("end",()=>b(!1));let x=new r.YJl;s.add(x);let w=new r.Gu$(.6,64,64),v=new r.V9B({color:"white"}),M=new r.eaF(w,v);x.add(M);let D=new r.Gu$(.01,24,16),z=new r.V9B({color:"red"}),S=[];p.forEach(e=>{let{latitude:t,longitude:a}=e,n=N(t,a),s=new r.eaF(D,z);s.position.set(n.x,n.y,n.z),s.userData=e,S.push(s),x.add(s)});let U=function(){let e,{numStars:t=500,sprite:a}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=[],s=[],i=[];for(let a=0;a<t;a+=1){let t=function(){let e=25*Math.random()+25,t=2*Math.PI*Math.random(),a=Math.acos(2*Math.random()-1),n=e*Math.sin(a)*Math.cos(t),s=e*Math.sin(a)*Math.sin(t),i=e*Math.cos(a);return{pos:new r.Pq0(n,s,i),hue:.6,minDist:e}}(),{pos:a,hue:l}=t;i.push(t),e=new r.Q1f().setHSL(l,.2,Math.random()),n.push(a.x,a.y,a.z),s.push(e.r,e.g,e.b)}let l=new r.LoY;l.setAttribute("position",new r.qtW(n,3)),l.setAttribute("color",new r.qtW(s,3));let o=new r.BH$({size:.2,vertexColors:!0,fog:!1});return new r.ONl(l,o)}({numStars:1e3,fog:!1});s.add(U);let E=new r.$p8(0xffffff,10);s.add(E);let C=(e,n,s)=>{let i=new r.Pq0;n.getWorldDirection(i);let l=e.filter(e=>{let t=e.position.clone().applyMatrix4(s.matrixWorld);return -.65>i.dot(t.normalize())}),o=l.map(e=>{let a=e.position.clone().applyMatrix4(s.matrixWorld).clone().project(n);return a.x>=-1&&a.x<=1&&a.y>=-1&&a.y<=1?{userData:e.userData,x:(.5*a.x+.5)*t.clientWidth+10,y:(-(.5*a.y)+.5)*t.clientHeight+10}:null}).filter(e=>null!==e);a(l.map(e=>e.userData)),f(o)},I=()=>{requestAnimationFrame(I),g||(x.rotation.y+=.01),C(S,o,x),m.update(),n.render(s,o),c.yo()};fetch("./geojson/ne_110m_land.json").then(e=>e.json()).then(e=>{let t=function(e){let{json:t,radius:a,materialOptions:n}=e,s=new r.B69;s.userData.update=e=>{for(let n=0;n<s.children.length;n++){var t,a;null===(t=(a=s.children[n].userData).update)||void 0===t||t.call(a,e)}},s.rotation.x=-(.5*Math.PI);let i=[],l=[],o=[],c=function(e){let t=[];if("Feature"==e.type)t.push(e.geometry);else if("FeatureCollection"==e.type)for(let a=0;a<e.features.length;a++)t.push(e.features[a].geometry);else if("GeometryCollection"==e.type)for(let a=0;a<e.geometries.length;a++)t.push(e.geometries[a]);else throw Error("The geoJSON is not valid.");return t}(t),p=[];for(let e=0;e<c.length;e++)if("Point"==c[e].type)g(c[e].coordinates,a),A(i[0],l[0],o[0],n);else if("MultiPoint"==c[e].type)for(let t=0;t<c[e].coordinates.length;t++)g(c[e].coordinates[t],a),A(i[0],l[0],o[0],n);else if("LineString"==c[e].type){p=m(c[e].coordinates);for(let e=0;e<p.length;e++)g(p[e],a);x(i,l,o,n)}else if("Polygon"==c[e].type)for(let t=0;t<c[e].coordinates.length;t++){p=m(c[e].coordinates[t]);for(let e=0;e<p.length;e++)g(p[e],a);x(i,l,o,n)}else if("MultiLineString"==c[e].type)for(let t=0;t<c[e].coordinates.length;t++){p=m(c[e].coordinates[t]);for(let e=0;e<p.length;e++)g(p[e],a);x(i,l,o,n)}else if("MultiPolygon"==c[e].type)for(let t=0;t<c[e].coordinates.length;t++)for(let s=0;s<c[e].coordinates[t].length;s++){p=m(c[e].coordinates[t][s]);for(let e=0;e<p.length;e++)g(p[e],a);x(i,l,o,n)}else throw Error("The geoJSON is not valid.");function m(e){let t=[],a=[];for(let n=0;n<e.length;n++){let s=e[n],i=e[n-1];if(n>0){if(f(i,s)){a=function e(t){let a,n,s=[];for(let e=0;e<t.length-1;e++){var i,r;a=t[e],f(n=t[e+1],a)?(s.push(a),s.push((i=a,r=n,[(i[0]+r[0])/2,(i[1]+r[1])/2]))):s.push(a)}return s.push(t[t.length-1]),s.length>t.length&&(s=e(s)),s}(a=[i,s]);for(let e=0;e<a.length;e++)t.push(a[e])}else t.push(s)}else t.push(s)}return t}function f(e,t){let a=t[0],n=t[1],s=e[0],i=Math.abs(n-e[1]);return Math.abs(a-s)>5||i>5}function g(e,t){let a=e[0],n=e[1];i.push(Math.cos(n*Math.PI/180)*Math.cos(a*Math.PI/180)*t),l.push(Math.cos(n*Math.PI/180)*Math.sin(a*Math.PI/180)*t),o.push(Math.sin(n*Math.PI/180)*t)}function A(e,t,a,n){new r.LoY().setAttribute("position",new r.qtW([e,t,a],3));let i=new r.BH$(n),l=new r.ONl(particle_geom,i);s.add(l),w()}function x(e,t,a,n){let i=new d.v,r=[];for(let n=0;n<e.length;n++)r.push(e[n],t[n],a[n]);i.setPositions(r);let l=new u.G({color:n.color,linewidth:1}),o=new h.X(i,l);o.computeLineDistances();let c=2e-4*Math.random();o.userData.update=e=>{l.dashOffset=e*c},s.add(o),w()}function w(){i.length=0,l.length=0,o.length=0}return s}({json:e,radius:.6,shape:"sphere",materialOptions:{color:"#0282f2",wireframe:!0}});x.add(t)}),I();let k=()=>{let e=t.clientWidth,a=t.clientHeight;n.setSize(e,a),o.aspect=e/a,o.updateProjectionMatrix(),A()};return window.addEventListener("resize",k),k(),()=>{window.removeEventListener("resize",k),n.dispose()}},[]);let M=e=>{e.forEach(e=>{new Image().src=e})};(0,s.useEffect)(()=>{(null==p?void 0:p.length)>0&&M(null==p?void 0:p.map(e=>null==e?void 0:e.profilePicture))},[]);let N=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.6,n=Math.PI/180*(90-e),s=Math.PI/180*(t+180);return{x:-a*Math.sin(n)*Math.cos(s),y:a*Math.cos(n),z:a*Math.sin(n)*Math.sin(s)}};return(0,n.jsxs)("div",{className:"flex flex-col lg:flex-row md:flex-col justify-center bg-[#2c2c2c] h-full sm:h-auto px-4 py-4 lg:px-10 relative w-full",children:[(0,n.jsxs)(w.P.div,{initial:{x:-230,opacity:0},animate:{x:0,opacity:1},transition:{duration:1.5},className:"flex flex-col justify-center items-start gap-3 w-full lg:w-[30%] lg:h-[100vh] px-4 py-4 bg-transparent text-white ",children:[(0,n.jsx)("p",{className:"border-b-[1px] border-sky-500 w-full text-[28px] font-semibold pb-3",children:"Total Market Size"}),(0,n.jsx)("div",{className:"flex justify-between font-sans text-lg items-center w-auto border-b-[1px] border-sky-500 py-2",children:(0,n.jsxs)("p",{className:"text-[32px]",children:[(0,n.jsx)(A,{from:100,to:224e6})," ",(0,n.jsx)("span",{className:"font-sans",style:{fontSize:"18px"},children:"Creators"})]})}),(0,n.jsx)("div",{className:"flex justify-between font-sans text-lg items-center w-auto border-b-[1px] border-sky-500 py-2",children:(0,n.jsxs)("p",{className:"text-[32px]",children:[(0,n.jsx)(A,{from:0,to:175e4})," ",(0,n.jsx)("span",{className:"font-sans",style:{fontSize:"18px"},children:"Communities"})]})}),(0,n.jsx)("div",{className:"flex justify-between font-sans text-lg items-center w-auto border-b-[1px] border-sky-500 py-2",children:(0,n.jsxs)("p",{className:"text-[32px]",children:[(0,n.jsx)(A,{from:0,to:1e8})," ",(0,n.jsx)("span",{className:"font-sans",style:{fontSize:"18px"},children:"Fans"})]})})]}),(0,n.jsxs)("div",{className:"relative flex items-center justify-center h-[50vh] sm:h-auto lg:h-[100vh] rounded-full w-full lg:w-[70%]",children:[(0,n.jsx)("canvas",{ref:e,className:"w-full h-full"}),t&&m&&m.map((e,a)=>{var s,i;return(0,n.jsx)("div",{className:"absolute transform -translate-x-1/2 rounded-full -translate-y-1/2",style:{left:"".concat(e.x,"px"),top:"".concat(e.y,"px"),zIndex:"".concat(e.zDepth)},children:(0,n.jsx)("div",{className:"flex flex-row justify-start rounded-full items-center",children:(null===(s=t[a])||void 0===s?void 0:s.profilePicture)?(0,n.jsx)("div",{className:"relative w-24 h-24",children:(null===(i=t[a])||void 0===i?void 0:i.profilePicture)&&(0,n.jsx)(x,{visibleProfile:t[a]})}):(0,n.jsx)(o.A,{className:"w-[32px] h-[32px] bg-sky-500 text-sky-50 sm:w-[40px] sm:h-[40px]"})})},e.x)})]})]})}},5429:(e,t,a)=>{a.d(t,{default:()=>A});var n=a(5155),s=a(2115),i=a(5565),r=a(8998),l=a(291),o=a(4918),c=a(5061),u=a(3345),d=a(6429);let h={src:"/_next/static/media/Hamburger.a4ca2389.png",height:128,width:128,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABt0UjBAAAAC3RSTlMBS4WsfUVWXE0aGa9K3mYAAAAJcEhZcwAALEsAACxLAaU9lqkAAAAsSURBVHicY2CAARYmMGBhYGNnBAFWBgYGVg4og4WJhYWFhYGTC6qYGQrgugESawCCj2UrnwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},p={src:"/_next/static/media/engagex-logo.90a28c5d.png",height:100,width:313,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAHlBMVEX////9/f/9//8Aq/k3zf////8pr/rM8v8At/1Cx//nVDPxAAAACnRSTlMJGmsbBF09KIxzbzQGHQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACBJREFUeJxjYAABFmZmBiYmViZWTg4WBkZGRkZ2NmYWAAMMAEgHrSgTAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:3};var m=a(8173),f=a.n(m),g=a(863);function A(e){let{isNavbarScrolled:t}=e,[a,m]=s.useState(!1),[A,x]=s.useState(null),w=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),v=/iPhone|iPad|iPod/i.test(navigator.userAgent);s.useEffect(()=>{{let e=e=>{e.preventDefault(),x(e)};return window.addEventListener("beforeinstallprompt",e),()=>{window.removeEventListener("beforeinstallprompt",e)}}},[]);let b=e=>{m(e)},y=(0,n.jsxs)(r.A,{sx:{width:350,display:"flex",flexDirection:"column",gap:2,paddingX:2},role:"presentation",onClick:()=>b(!1),children:[(0,n.jsxs)(o.A,{children:[(0,n.jsx)(f(),{href:"/",passHref:!0,children:(0,n.jsx)(c.Ay,{disablePadding:!0,className:"hover:text-sky-500 ",children:(0,n.jsx)(u.A,{children:(0,n.jsx)(d.A,{primary:"Home"})})})}),(0,n.jsx)(f(),{href:"/",passHref:!0,children:(0,n.jsx)(c.Ay,{disablePadding:!0,className:"hover:text-sky-500",children:(0,n.jsx)(u.A,{children:(0,n.jsx)(d.A,{primary:"Global"})})})})]}),(0,n.jsx)("button",{onClick:()=>{w?v?alert("To install this app on your iPhone/iPad:\n1. Open Safari.\n2. Tap the 'Share' icon.\n3. Tap 'Add to Home Screen.'"):A?(A.prompt(),A.userChoice.then(e=>{"accepted"===e.outcome?console.info("User accepted the A2HS prompt"):console.info("User dismissed the A2HS prompt"),x(null)})):(console.warn("The install prompt is unavailable."),alert("The install prompt is unavailable. Ensure the following:\n1. The app meets PWA requirements (HTTPS, manifest, service worker).\n2. You've added your site to the home screen.")):alert("You can add this app to your home screen on mobile devices.")},children:"Download"})]});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"fixed top-0 left-0 right-0 flex justify-between items-center px-3 lg:px-6 py-3 z-10 transition-all duration-700 ".concat(t?"bg-black bg-opacity-75":"bg-transparent"),children:[(0,n.jsx)(i.default,{src:p,alt:"EngageX",className:"lg:w-[200px] w-[120px]"}),(0,n.jsxs)("div",{className:"flex space-x-6",children:[(0,n.jsx)("button",{className:"px-6 py-2 bg-white text-black text-sm font-medium border border-white rounded-full shadow-md hover:shadow-lg focus:shadow-xl transition-shadow",children:"Login"}),(0,n.jsxs)("button",{onClick:()=>b(!0),className:"px-3 lg:px-6 py-2 bg-white text-black text-sm font-medium border border-white rounded-full flex items-center space-x-0 lg:space-x-2 transition",children:[(0,n.jsx)("span",{className:"hidden lg:block",children:"Menu"}),(0,n.jsx)(i.default,{src:h,alt:"hamburger",className:"w-[20px]"})]})]})]}),(0,n.jsxs)(l.Ay,{anchor:"right",open:a,onClose:()=>b(!1),children:[(0,n.jsx)("div",{className:"p-2 m-3 bg-white text-black text-sm font-medium self-end rounded-full transition cursor-pointer",children:(0,n.jsx)(g.A,{onClick:()=>b(!1),className:"text-sky-500",size:30})}),y]})]})}}}]);