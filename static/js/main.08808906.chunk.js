(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{21:function(e,a,t){e.exports=t(33)},26:function(e,a,t){},27:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),s=t(15),c=t.n(s),r=(t(26),t(9)),m=(t(27),function(e){var a=e.children;return n.a.createElement("div",{className:"container"},a)}),o=function(e){var a=e.className,t=e.children;return n.a.createElement("div",{className:"row "+a},t)},i=function(e){var a=e.className,t=e.children;return n.a.createElement("div",{className:"col-"+a},t)},g=t(16),p=t(17),E=t(20),d=t(19),h=function(e){Object(E.a)(t,e);var a=Object(d.a)(t);function t(){return Object(g.a)(this,t),a.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){var e=this.props,a=e.className,t=e.children;e.cardheader,e.headerbackground;return n.a.createElement("div",{className:"card "+a},n.a.createElement("div",{className:"card-body"},t))}}]),t}(l.Component),u=t(7),N=function(e){var a=e.name,t=e.className,l=e.id,s=e.to,c=e.bgcolor,r={};return r="nav-link active"===t?{menuStyle:{color:"#fff",backgroundColor:"".concat(c),boxShadow:"0 1rem 3rem rgba(0, 0, 0, .175)!important"}}:{menuStyle:{color:"#024dbc",boxShadow:"0 1rem 3rem rgba(0, 0, 0, .175)!important"}},n.a.createElement(u.b,{style:r.menuStyle,className:t,id:l,to:s},a)},f=t(1),b=function(e){var a=e.setActive,t=Object(f.f)();return""!==t.pathname&&a(t.pathname),null},w=function(e){var a=e.bgcolor,t=Object(l.useState)([]),s=Object(r.a)(t,2),c=s[0],m=s[1],o=Object(l.useState)(""),i=Object(r.a)(o,2),g=i[0],p=i[1];return Object(l.useEffect)((function(){m([{name:"ABOUT",content:"About"},{name:"PROJECTS",content:"Projects"},{name:"SKILLS",content:"Skills"},{name:"CONTACT",content:"Contact"}])}),[]),n.a.createElement("div",null,n.a.createElement(b,{setActive:p}),n.a.createElement("div",{className:"nav flex-column nav-pills mt-5"},c.map((function(e){var t="nav-link";return"/"+e.content.toLowerCase()===g&&(t+=" active"),n.a.createElement(N,{key:e.name,name:e.name,bgcolor:a,className:t,id:"",to:e.name.toLowerCase()})}))))},x=function(e){var a=e.name,t=e.source,l=e.height,s=e.width;return n.a.createElement("img",{src:t,alt:a,height:l,width:s})},C=function(e){var a=e.height,t=(e.margin,e.width,e.className);return n.a.createElement("hr",{className:t,height:a})},v=function(e){var a=e.href,t=e.className,l=e.children;return n.a.createElement("a",{class:t,href:a},l)},L=function(e){var a=e.className,t=e.id;return n.a.createElement("div",{class:a,id:t,role:"tabpanel"},n.a.createElement("h6",{className:"text-left font-weight-bold"},n.a.createElement("i",{class:"fa fa-star text-success","aria-hidden":"true"})," ABOUT"),n.a.createElement(C,{className:"bg-seablue w-75",margin:"2px !important",width:"90px"}),n.a.createElement("p",{className:"text-left"},"Having around 1.6 year(s) of experience in Web Application Development, Analysis, Design,Customization,Coordination of Development and Deployment across the software solutions"),n.a.createElement("p",{className:"text-left"},"Having very good knowledge on ",n.a.createElement("b",null,"React JS,Bootstrap,PHP")," Responsible for development of new highly-responsive, web-based user interface and Building ",n.a.createElement("b",null,"reusable components")," and front-end libraries for future use "),n.a.createElement("p",{className:"text-left"},"Work with product team and graphic designers Have very good understanding of ",n.a.createElement("b",null,"REST API")," ,Have very good hands on ",n.a.createElement("b",null,"React Redux,hooks")," to Develop a flexible and well-structured front-end architecture, along with the APIs to support it."),n.a.createElement("p",{className:"text-left"},"Specialized in writing the web services using ",n.a.createElement("b",null,"PHP")," to support across various platforms which can help us to integrate React with Third Party apps"),n.a.createElement("p",{className:"text-left"},"Have excellent quality of adapting to latest technology with ",n.a.createElement("b",null,"analytical, logical")," and innovative knowledge to provide excellent software solutions. ",n.a.createElement("b",null,"Productive,")," dedicated and capable of working independently."),n.a.createElement("h6",{className:"text-left font-weight-bold"},n.a.createElement("i",{class:"fa fa-star text-success","aria-hidden":"true"})," WORK EXPERIENCE"),n.a.createElement(C,{className:"bg-seablue w-75",margin:"2px !important",width:"90px"}),n.a.createElement("p",{className:"text-left"},"Currently Working as ",n.a.createElement("b",null,"Web Application Developer")," at Entro Labs Pvt Ltd since March 2019 to till date"))},y=function(e){var a=e.className;return n.a.createElement("div",{class:a},n.a.createElement("h6",{className:"text-left font-weight-bold"},n.a.createElement("i",{class:"fa fa-star text-success","aria-hidden":"true"})," PROJECTS"),n.a.createElement(C,{className:"bg-seablue w-75",margin:"2px !important",width:"90px"}),n.a.createElement("div",{className:"scroll-automatic"},n.a.createElement(o,{className:"mb-3"},n.a.createElement(i,{className:"lg-12"},n.a.createElement("h6",{className:"text-left font-weight-bold"},"APEMCL(Andhra Pradesh Enivironmental Management Corporation Limited)"),n.a.createElement(C,{className:"bg-seablue w-25",margin:"2px !important"}),n.a.createElement("h6",{className:"font-weight-bold text-left"},"Description :"),n.a.createElement("p",{className:"text-left mb-3"},"Andhra Pradesh Environment Management Corporation Limited (APEMCL) is incorporated on 13th January 2020 as a Government Company for providing effective mechanism of collection, transportation, storage, treatment, processing, delivery and disposal of the industrial waste and other wastes through online."),n.a.createElement("h6",{className:"font-weight-bold text-left"},"Responsibilities :"),n.a.createElement("p",{className:"text-left mb-0"},"1 . Responsible for creating well structured front end with reusable components."),n.a.createElement("p",{className:"text-left mb-0"},"2 . Responsible for creating multiple pages and implmented React router to navigate between the pages."),n.a.createElement("p",{className:"text-left mb-0"},"3 . Integrating with third-party services and external APIs as a part of implementation using PHP."))),n.a.createElement(o,{className:""},n.a.createElement(i,{className:"lg-12"},n.a.createElement("h6",{className:"font-weight-bold text-left"},"Technologies :"),n.a.createElement("p",{className:"text-left mb-0"},"1 . React Js"),n.a.createElement("p",{className:"text-left mb-0"},"2 . PHP"),n.a.createElement("p",{className:"text-left mb-0"},"3 . MY SQL")))),n.a.createElement(C,{className:"bg-seablue w-75",margin:"2px !important",width:"90px"}),n.a.createElement("div",{className:"scroll-automatic mt-3"},n.a.createElement(o,{className:"mb-3"},n.a.createElement(i,{className:"lg-12"},n.a.createElement("h6",{className:"text-left font-weight-bold"},"E-Waste(Electronic Waste Management)"),n.a.createElement(C,{className:"bg-seablue w-25",margin:"2px !important"}),n.a.createElement("h6",{className:"font-weight-bold text-left"},"Description :"),n.a.createElement("p",{className:"text-left mb-3"},"E-Waste Application Facillitates exchange of Electronic Waste between empaneled vendors and citizens elaborates effective mechanism of collection, transportation, storage, treatment, processing, delivery and disposal of the Electronic waste through online."),n.a.createElement("h6",{className:"font-weight-bold text-left"},"Responsibilities :"),n.a.createElement("p",{className:"text-left mb-0"},"1 . Responsible for creating bootstrap admin panel for user to watch the reprts of E-waste Collection by making granular react components and implmented React router to navigate between the pages."),n.a.createElement("p",{className:"text-left mb-0"},"2 . Responsible for creating well structured front end with reusable components."),n.a.createElement("p",{className:"text-left mb-0"},"3 . Wrote Services using MYSQL and PHP for the Mobile App and helped the App Developer to make use of reusable components."))),n.a.createElement(o,{className:""},n.a.createElement(i,{className:"lg-12"},n.a.createElement("h6",{className:"font-weight-bold text-left"},"Technologies :"),n.a.createElement("p",{className:"text-left mb-0"},"1 . React Js"),n.a.createElement("p",{className:"text-left mb-0"},"2 . PHP"),n.a.createElement("p",{className:"text-left mb-0"},"3 . MY SQL")))))},k=function(e){var a=e.className;return n.a.createElement("div",{class:a},n.a.createElement("h6",{className:"text-left font-weight-bold"},n.a.createElement("i",{class:"fa fa-star text-success","aria-hidden":"true"})," SKILLS"),n.a.createElement(C,{className:"bg-seablue w-75",margin:"2px !important",width:"90px"}),n.a.createElement("h6",{className:"text-left"},"Programming/Markup Languages"),n.a.createElement(C,{className:"bg-seablue w-75",margin:"2px !important",width:"90px"}),n.a.createElement(o,{className:"m-2"},n.a.createElement(i,{className:"lg-6"},n.a.createElement(h,{className:"shadow-lg border-0"},n.a.createElement(o,{className:""},n.a.createElement(i,{className:"lg-4"},n.a.createElement(x,{source:"./assets/images/react.png",name:"React JS",height:"30px",width:"30px"})),n.a.createElement(i,{className:"lg-4"},n.a.createElement("span",null,"React JS"))))),n.a.createElement(i,{className:"lg-6"},n.a.createElement(h,{className:"shadow-lg border-0"},n.a.createElement(o,{className:""},n.a.createElement(i,{className:"lg-4"},n.a.createElement(x,{source:"./assets/images/redux.png",name:"Redux",height:"30px",width:"30px"})),n.a.createElement(i,{className:"lg-4"},n.a.createElement("span",null,"Redux")))))),n.a.createElement(o,{className:"m-2"},n.a.createElement(i,{className:"lg-6"},n.a.createElement(h,{className:"shadow-lg border-0"},n.a.createElement(o,{className:""},n.a.createElement(i,{className:"lg-4"},n.a.createElement(x,{source:"./assets/images/JavaScript-logo.png",name:"Javascript",height:"30px",width:"30px"})),n.a.createElement(i,{className:"lg-4"},n.a.createElement("span",null,"Javascript"))))),n.a.createElement(i,{className:"lg-6"},n.a.createElement(h,{className:"shadow-lg border-0"},n.a.createElement(o,{className:""},n.a.createElement(i,{className:"lg-4"},n.a.createElement(x,{source:"./assets/images/jquery-logo.png",name:"jQuery",height:"30px",width:"30px"})),n.a.createElement(i,{className:"lg-4"},n.a.createElement("span",null,"jQuery")))))),n.a.createElement(o,{className:"m-2"},n.a.createElement(i,{className:"lg-6"},n.a.createElement(h,{className:"shadow-lg border-0"},n.a.createElement(o,{className:""},n.a.createElement(i,{className:"lg-4"},n.a.createElement(x,{source:"./assets/images/ajax-logo.jpg",name:"AJAX",height:"30px",width:"40px"})),n.a.createElement(i,{className:"lg-4"},n.a.createElement("span",null,"AJAX"))))),n.a.createElement(i,{className:"lg-6"},n.a.createElement(h,{className:"shadow-lg border-0"},n.a.createElement(o,{className:""},n.a.createElement(i,{className:"lg-4"},n.a.createElement(x,{source:"./assets/images/bootstrap-logo.png",name:"Bootstrap",height:"30px",width:"30px"})),n.a.createElement(i,{className:"lg-4"},n.a.createElement("span",null,"Bootstrap")))))),n.a.createElement(o,{className:"m-2"},n.a.createElement(i,{className:"lg-6"},n.a.createElement(h,{className:"shadow-lg border-0"},n.a.createElement(o,{className:""},n.a.createElement(i,{className:"lg-4"},n.a.createElement(x,{source:"./assets/images/php-logo.png",name:"php",height:"30px",width:"40px"})),n.a.createElement(i,{className:"lg-4"},n.a.createElement("span",null,"PHP"))))),n.a.createElement(i,{className:"lg-6"},n.a.createElement(h,{className:"shadow-lg border-0"},n.a.createElement(o,{className:""},n.a.createElement(i,{className:"lg-4"},n.a.createElement(x,{source:"./assets/images/mysql-logo.png",name:"MYSQL",height:"30px",width:"30px"})),n.a.createElement(i,{className:"lg-4"},n.a.createElement("span",null,"MYSQL")))))),n.a.createElement(o,{className:"m-2"},n.a.createElement(i,{className:"lg-6"},n.a.createElement(h,{className:"shadow-lg border-0"},n.a.createElement(o,{className:""},n.a.createElement(i,{className:"lg-4"},n.a.createElement(x,{source:"./assets/images/html-logo.png",name:"HTML",height:"30px",width:"30px"})),n.a.createElement(i,{className:"lg-4"},n.a.createElement("span",null,"HTML"))))),n.a.createElement(i,{className:"lg-6"},n.a.createElement(h,{className:"shadow-lg border-0"},n.a.createElement(o,{className:""},n.a.createElement(i,{className:"lg-4"},n.a.createElement(x,{source:"./assets/images/css-logo.png",name:"Bootstrap",height:"30px",width:"30px"})),n.a.createElement(i,{className:"lg-4"},n.a.createElement("span",null,"CSS")))))))},S=function(e){var a=e.className,t=e.id;return n.a.createElement("div",{class:a,id:t,role:"tabpanel"},n.a.createElement("h6",{className:"text-left font-weight-bold"},n.a.createElement("i",{class:"fa fa-star text-success","aria-hidden":"true"})," Contact"),n.a.createElement(C,{className:"bg-seablue w-75",margin:"2px !important",width:"90px"}),n.a.createElement(o,{className:"m-2"},n.a.createElement(i,{className:"lg-6"},n.a.createElement(h,{className:"shadow-lg border-0"},n.a.createElement(o,{className:"m-2"},n.a.createElement(i,{className:"lg-4"},n.a.createElement(x,{source:"./assets/images/fb-logo.png",name:"Facebook",height:"30px",width:"40px"})),n.a.createElement(i,{className:"lg-4"},n.a.createElement("span",null,"Facebook")),n.a.createElement(i,{className:"lg-4"},n.a.createElement("a",{target:"blank",href:"https://www.facebook.com/kirantirumalasette"},n.a.createElement("svg",{viewBox:"0 0 24 24",style:{width:"36px",height:"36px",padding:"8px"}},n.a.createElement("path",{fill:"#00C853",d:"M10.59, 13.41C11, 13.8 11, 14.44 10.59, 14.83C10.2, 15.22 9.56, 15.22 9.17, 14.83C7.22, 12.88 7.22, 9.71 9.17, 7.76V7.76L12.71, 4.22C14.66, 2.27 17.83, 2.27 19.78, 4.22C21.73, 6.17 21.73, 9.34 19.78, 11.29L18.29, 12.78C18.3, 11.96 18.17, 11.14 17.89, 10.36L18.36, 9.88C19.54, 8.71 19.54, 6.81 18.36, 5.64C17.19, 4.46 15.29, 4.46 14.12, 5.64L10.59, 9.17C9.41, 10.34 9.41, 12.24 10.59, 13.41M13.41, 9.17C13.8, 8.78 14.44, 8.78 14.83, 9.17C16.78, 11.12 16.78, 14.29 14.83, 16.24V16.24L11.29, 19.78C9.34, 21.73 6.17, 21.73 4.22, 19.78C2.27, 17.83 2.27, 14.66 4.22, 12.71L5.71, 11.22C5.7, 12.04 5.83, 12.86 6.11, 13.65L5.64, 14.12C4.46, 15.29 4.46, 17.19 5.64, 18.36C6.81, 19.54 8.71, 19.54 9.88, 18.36L13.41, 14.83C14.59, 13.66 14.59, 11.76 13.41, 10.59C13, 10.2 13, 9.56 13.41, 9.17Z"}))))))),n.a.createElement(i,{className:"lg-6"},n.a.createElement(h,{className:"shadow-lg border-0"},n.a.createElement(o,{className:"m-2"},n.a.createElement(i,{className:"lg-4"},n.a.createElement(x,{source:"./assets/images/whatsapp-logo.png",name:"Whatsapp",height:"30px",width:"30px"})),n.a.createElement(i,{className:"lg-4"},n.a.createElement("span",null,"Whatsapp")),n.a.createElement(i,{className:"lg-4"},n.a.createElement("a",{target:"blank",href:"https://api.whatsapp.com/send?phone=+917097081191"},n.a.createElement("svg",{viewBox:"0 0 24 24",style:{width:"36px",height:"36px",padding:"8px"}},n.a.createElement("path",{fill:"#00C853",d:"M10.59, 13.41C11, 13.8 11, 14.44 10.59, 14.83C10.2, 15.22 9.56, 15.22 9.17, 14.83C7.22, 12.88 7.22, 9.71 9.17, 7.76V7.76L12.71, 4.22C14.66, 2.27 17.83, 2.27 19.78, 4.22C21.73, 6.17 21.73, 9.34 19.78, 11.29L18.29, 12.78C18.3, 11.96 18.17, 11.14 17.89, 10.36L18.36, 9.88C19.54, 8.71 19.54, 6.81 18.36, 5.64C17.19, 4.46 15.29, 4.46 14.12, 5.64L10.59, 9.17C9.41, 10.34 9.41, 12.24 10.59, 13.41M13.41, 9.17C13.8, 8.78 14.44, 8.78 14.83, 9.17C16.78, 11.12 16.78, 14.29 14.83, 16.24V16.24L11.29, 19.78C9.34, 21.73 6.17, 21.73 4.22, 19.78C2.27, 17.83 2.27, 14.66 4.22, 12.71L5.71, 11.22C5.7, 12.04 5.83, 12.86 6.11, 13.65L5.64, 14.12C4.46, 15.29 4.46, 17.19 5.64, 18.36C6.81, 19.54 8.71, 19.54 9.88, 18.36L13.41, 14.83C14.59, 13.66 14.59, 11.76 13.41, 10.59C13, 10.2 13, 9.56 13.41, 9.17Z"})))))))),n.a.createElement(o,{className:"m-2"},n.a.createElement(i,{className:"lg-6"},n.a.createElement(h,{className:"shadow-lg border-0"},n.a.createElement(o,{className:""},n.a.createElement(i,{className:"lg-4"},n.a.createElement(x,{source:"./assets/images/github-logo.png",name:"GitHub",height:"30px",width:"40px"})),n.a.createElement(i,{className:"lg-4"},n.a.createElement("span",null,"GitHub")),n.a.createElement(i,{className:"lg-4"},n.a.createElement("a",{target:"blank",href:"https://github.com/imkinnu"},n.a.createElement("svg",{viewBox:"0 0 24 24",style:{width:"36px",height:"36px",padding:"8px"}},n.a.createElement("path",{fill:"#00C853",d:"M10.59, 13.41C11, 13.8 11, 14.44 10.59, 14.83C10.2, 15.22 9.56, 15.22 9.17, 14.83C7.22, 12.88 7.22, 9.71 9.17, 7.76V7.76L12.71, 4.22C14.66, 2.27 17.83, 2.27 19.78, 4.22C21.73, 6.17 21.73, 9.34 19.78, 11.29L18.29, 12.78C18.3, 11.96 18.17, 11.14 17.89, 10.36L18.36, 9.88C19.54, 8.71 19.54, 6.81 18.36, 5.64C17.19, 4.46 15.29, 4.46 14.12, 5.64L10.59, 9.17C9.41, 10.34 9.41, 12.24 10.59, 13.41M13.41, 9.17C13.8, 8.78 14.44, 8.78 14.83, 9.17C16.78, 11.12 16.78, 14.29 14.83, 16.24V16.24L11.29, 19.78C9.34, 21.73 6.17, 21.73 4.22, 19.78C2.27, 17.83 2.27, 14.66 4.22, 12.71L5.71, 11.22C5.7, 12.04 5.83, 12.86 6.11, 13.65L5.64, 14.12C4.46, 15.29 4.46, 17.19 5.64, 18.36C6.81, 19.54 8.71, 19.54 9.88, 18.36L13.41, 14.83C14.59, 13.66 14.59, 11.76 13.41, 10.59C13, 10.2 13, 9.56 13.41, 9.17Z"}))))))),n.a.createElement(i,{className:"lg-6"},n.a.createElement(h,{className:"shadow-lg border-0"},n.a.createElement(o,{className:""},n.a.createElement(i,{className:"lg-4"},n.a.createElement(x,{source:"./assets/images/linkedin-logo.png",name:"LinkedIn",height:"30px",width:"30px"})),n.a.createElement(i,{className:"lg-4"},n.a.createElement("span",null,"LinkedIn")),n.a.createElement(i,{className:"lg-4"},n.a.createElement("a",{target:"blank",href:"https://www.linkedin.com/in/kiran-tirumalasetti-51b0b9187/"},n.a.createElement("svg",{viewBox:"0 0 24 24",style:{width:"36px",height:"36px",padding:"8px"}},n.a.createElement("path",{fill:"#00C853",d:"M10.59, 13.41C11, 13.8 11, 14.44 10.59, 14.83C10.2, 15.22 9.56, 15.22 9.17, 14.83C7.22, 12.88 7.22, 9.71 9.17, 7.76V7.76L12.71, 4.22C14.66, 2.27 17.83, 2.27 19.78, 4.22C21.73, 6.17 21.73, 9.34 19.78, 11.29L18.29, 12.78C18.3, 11.96 18.17, 11.14 17.89, 10.36L18.36, 9.88C19.54, 8.71 19.54, 6.81 18.36, 5.64C17.19, 4.46 15.29, 4.46 14.12, 5.64L10.59, 9.17C9.41, 10.34 9.41, 12.24 10.59, 13.41M13.41, 9.17C13.8, 8.78 14.44, 8.78 14.83, 9.17C16.78, 11.12 16.78, 14.29 14.83, 16.24V16.24L11.29, 19.78C9.34, 21.73 6.17, 21.73 4.22, 19.78C2.27, 17.83 2.27, 14.66 4.22, 12.71L5.71, 11.22C5.7, 12.04 5.83, 12.86 6.11, 13.65L5.64, 14.12C4.46, 15.29 4.46, 17.19 5.64, 18.36C6.81, 19.54 8.71, 19.54 9.88, 18.36L13.41, 14.83C14.59, 13.66 14.59, 11.76 13.41, 10.59C13, 10.2 13, 9.56 13.41, 9.17Z"})))))))))},A=function(e){var a=e.changeColor;return n.a.createElement("div",null,n.a.createElement("ul",{style:{color:"white",padding:"10px",fontFamily:"Arial",margin:"0 25px"}},["#1abc9c","#f1c40f","#e74c3c","#d35400"].map((function(e){return n.a.createElement("li",{className:"li",style:{backgroundColor:"".concat(e)},onClick:function(){return a(e)}})}))))},P=function(){var e=Object(l.useState)("#0091ea"),a=Object(r.a)(e,2),t=a[0],s=a[1],c={bgcolor:{backgroundColor:"".concat(t),transition:"0.4s linear all"}};return n.a.createElement(u.a,{basename:"/"},n.a.createElement("div",{style:c.bgcolor,className:"App vh-100 d-flex justify-content-center align-items-center bg-seablue text-consolas"},n.a.createElement(m,null,n.a.createElement(o,{className:""},n.a.createElement(i,{className:"lg-12"},n.a.createElement(h,{className:"shadow-lg border-0"},n.a.createElement(o,{className:""},n.a.createElement(i,{className:"lg-3"},n.a.createElement(x,{source:"./assets/images/download.png",name:"Kiran Tirumalasetti",height:"",width:""}),n.a.createElement("h6",{className:"mt-2 font-weight-bold"},"KIRAN TIRUMALASETTI "),n.a.createElement(C,{className:"bg-seablue mt-4 w-75 mx-auto",width:"90px"}),n.a.createElement("span",{className:"text-14 font-weight-bold"},"Web Application Developer"),n.a.createElement(C,{className:"bg-seablue mt-4 w-75 mx-auto",width:"90px"}),n.a.createElement(A,{changeColor:function(e){return function(e){s(e)}(e)}}),n.a.createElement(w,{bgcolor:t}),n.a.createElement(C,{className:"bg-seablue mt-5 w-75 mx-auto",margin:"16px",width:"90px"}),n.a.createElement(o,{className:"d-flex justify-content-center align-items-center"},n.a.createElement(i,{className:"lg-2"},n.a.createElement(v,{href:"#!",className:"text-seablue"},n.a.createElement("i",{class:"fa fa-github","aria-hidden":"true"}))),n.a.createElement(i,{className:"lg-2"},n.a.createElement(v,{href:"#!",className:"text-seablue"},n.a.createElement("i",{class:"fa fa-facebook","aria-hidden":"true"}))),n.a.createElement(i,{className:"lg-2"},n.a.createElement(v,{href:"#!",className:"text-seablue"},n.a.createElement("i",{class:"fa fa-linkedin","aria-hidden":"true"}))))),n.a.createElement(i,{className:"lg-9"},n.a.createElement("div",{className:"",style:{overflowY:"scroll",overflowX:"hidden",height:"75vh"}},n.a.createElement(f.c,null,n.a.createElement(f.a,{exact:!0,path:"/",component:L}),n.a.createElement(f.a,{path:"/about",component:L}),n.a.createElement(f.a,{path:"/projects",component:y}),n.a.createElement(f.a,{path:"/skills",component:k}),n.a.createElement(f.a,{path:"/contact",component:S})))))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.08808906.chunk.js.map