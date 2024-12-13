"use strict";(self.webpackChunkexplore=self.webpackChunkexplore||[]).push([[593],{3614:(t,e,r)=>{r.r(e),r.d(e,{default:()=>p});var a=r(2878),i=r(5251),o=r(5684),s=r(3440);const u=function(t){var e=t.href,r=t.type,i=t.value,o=t.disabled,s=t.rounded,u=t.className,c=t.children,n=t.dataId,p=t.variant,d=void 0===p?"secondary":p,l=t.onClick,m=e?"a":"button";return a.createElement(m,{disabled:o,href:e,type:r,value:i,onClick:l,"data-id":n||void 0,className:"e_Button e_Button--".concat(d," ").concat(u," ").concat(s?"e_Button--rounded":"")},a.createElement("div",{className:"e_Button__inner"},c))};var c=r(276);function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=Array(e);r<e;r++)a[r]=t[r];return a}r(6888);const p=(0,o.A)({React:a,ReactDOMClient:i,rootComponent:function(){var t,e,r=(t=a.useState(""),e=2,function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var a,i,o,s,u=[],c=!0,n=!1;try{if(o=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(a=o.call(r)).done)&&(u.push(a.value),u.length!==e);c=!0);}catch(t){n=!0,i=t}finally{try{if(!c&&null!=r.return&&(s=r.return(),Object(s)!==s))return}finally{if(n)throw i}}return u}}(t,e)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=r[0],o=r[1],p=a.useRef(),d=function(t){var e=t.currentTarget.getAttribute("data-id");o(t.currentTarget.previousElementSibling.innerHTML),window.dispatchEvent(new CustomEvent("selected-shop",{detail:{shop:e}})),p.current.close()};return a.createElement("div",{className:"e_StorePicker"},a.createElement("div",{className:"e_StorePicker_control","data-boundary":"explore"},a.createElement("div",{className:"e_StorePicker_selected",dangerouslySetInnerHTML:{__html:i}}),a.createElement(u,{className:"e_StorePicker_choose",type:"button",onClick:function(){p.current.showModal()}},"choose a store")),a.createElement("dialog",{className:"e_StorePicker_dialog","data-boundary":"explore",ref:p},a.createElement("div",{className:"e_StorePicker_wrapper"},a.createElement("h2",null,"Stores"),a.createElement("ul",{className:"e_StorePicker_list"},s.zQ.map((function(t,e){return a.createElement("li",{key:e,className:"e_StorePicker_entry"},a.createElement("div",{className:"e_StorePicker_content"},a.createElement("img",{className:"e_StorePicker_image",src:(0,c.$z)(t.image,200),srcSet:(0,c.hH)(t.image,[200,400]),width:"200",height:"200"}),a.createElement("p",{className:"e_StorePicker_address"},t.name,a.createElement("br",null),t.street,a.createElement("br",null),t.city)),a.createElement(u,{className:"e_StorePicker_select",type:"button",dataId:t.id,onClick:d},"select"))}))))))},errorBoundary:function(){return a.createElement("div",null,"StorePicker failed!")}})},276:(t,e,r)=>{function a(t,e){return t.replace("[size]","".concat(e))}function i(t){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).map((function(e){return"".concat(a(t,e)," ").concat(e,"w")})).join(", ")}function o(t){return"".concat(t,",00 Ø")}r.d(e,{$x:()=>o,$z:()=>a,hH:()=>i})},3440:t=>{t.exports=JSON.parse('{"nn":[{"title":"Classic Tractors","image":"https://blueprint.the-tractor.store/cdn/img/scene/[size]/classics.webp","url":"/products/classic"},{"title":"Autonomous Tractors","image":"https://blueprint.the-tractor.store/cdn/img/scene/[size]/autonomous.webp","url":"/products/autonomous"}],"LZ":[{"key":"classic","name":"Classics","products":[{"name":"Heritage Workhorse","id":"CL-01","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-01-GR.webp","startPrice":5700,"url":"/product/CL-01"},{"name":"Falcon Crest Farm","id":"CL-02","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-02-BL.webp","startPrice":2600,"url":"/product/CL-02"},{"name":"Falcon Crest Work","id":"CL-03","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-03-GR.webp","startPrice":2300,"url":"/product/CL-03"},{"name":"Broadfield Majestic","id":"CL-04","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-04-BL.webp","startPrice":2200,"url":"/product/CL-04"},{"name":"Countryside Commander","id":"CL-05","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-05-PT.webp","startPrice":2700,"url":"/product/CL-05"},{"name":"Danamark Steadfast","id":"CL-06","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-06-MT.webp","startPrice":2800,"url":"/product/CL-06"},{"name":"Greenland Rover","id":"CL-07","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-07-GR.webp","startPrice":2900,"url":"/product/CL-07"},{"name":"Holland Hamster","id":"CL-08","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-08-GR.webp","startPrice":7750,"url":"/product/CL-08"},{"name":"TerraFirma Veneto","id":"CL-09","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-09-BL.webp","startPrice":2950,"url":"/product/CL-09"},{"name":"Global Gallant","id":"CL-10","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-10-SD.webp","startPrice":2600,"url":"/product/CL-10"},{"name":"Scandinavia Sower","id":"CL-11","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-11-SK.webp","startPrice":3100,"url":"/product/CL-11"},{"name":"Celerity Cruiser","id":"CL-12","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-12-BL.webp","startPrice":3200,"url":"/product/CL-12"},{"name":"Rapid Racer","id":"CL-13","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-13-BL.webp","startPrice":7500,"url":"/product/CL-13"},{"name":"Caribbean Cruiser","id":"CL-14","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-14-GR.webp","startPrice":2300,"url":"/product/CL-14"},{"name":"Fieldmaster Classic","id":"CL-15","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-15-PI.webp","startPrice":6200,"url":"/product/CL-15"}]},{"key":"autonomous","name":"Autonomous","products":[{"name":"TerraFirma AutoCultivator T-300","id":"AU-01","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/AU-01-SI.webp","startPrice":1000,"url":"/product/AU-01"},{"name":"SmartFarm Titan","id":"AU-02","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/AU-02-OG.webp","startPrice":4000,"url":"/product/AU-02"},{"name":"FutureHarvest Navigator","id":"AU-03","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/AU-03-TQ.webp","startPrice":1600,"url":"/product/AU-03"},{"name":"Sapphire Sunworker 460R","id":"AU-04","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/AU-04-RD.webp","startPrice":8500,"url":"/product/AU-04"},{"name":"EcoGrow Crop Commander","id":"AU-05","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/AU-05-ZH.webp","startPrice":3400,"url":"/product/AU-05"},{"name":"FarmFleet Sovereign","id":"AU-06","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/AU-06-CZ.webp","startPrice":2100,"url":"/product/AU-06"},{"name":"Verde Voyager","id":"AU-07","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/AU-07-MT.webp","startPrice":4000,"url":"/product/AU-07"},{"name":"Field Pioneer","id":"AU-08","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/AU-08-WH.webp","startPrice":4500,"url":"/product/AU-08"}]}],"Jl":{"AU-01-SI":{"name":"TerraFirma AutoCultivator T-300 Silver","sku":"AU-01-SI","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/AU-01-SI.webp","url":"/product/AU-01?sku=AU-01-SI","rgb":[192,192,192]},"AU-02-OG":{"name":"SmartFarm Titan Sunset Copper","sku":"AU-02-OG","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/AU-02-OG.webp","url":"/product/AU-02?sku=AU-02-OG","rgb":[221,82,25]},"AU-02-BL":{"name":"SmartFarm Titan Cosmic Sapphire","sku":"AU-02-BL","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/AU-02-BL.webp","url":"/product/AU-02?sku=AU-02-BL","rgb":[42,82,190]},"AU-02-GG":{"name":"SmartFarm Titan Verdant Shadow","sku":"AU-02-GG","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/AU-02-GG.webp","url":"/product/AU-02?sku=AU-02-GG","rgb":[0,90,4]},"AU-03-TQ":{"name":"FutureHarvest Navigator Turquoise Titan","sku":"AU-03-TQ","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/AU-03-TQ.webp","url":"/product/AU-03?sku=AU-03-TQ","rgb":[22,159,184]},"AU-03-PL":{"name":"FutureHarvest Navigator Majestic Violet","sku":"AU-03-PL","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/AU-03-PL.webp","url":"/product/AU-03?sku=AU-03-PL","rgb":[155,95,192]},"AU-03-RD":{"name":"FutureHarvest Navigator Scarlet Dynamo","sku":"AU-03-RD","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/AU-03-RD.webp","url":"/product/AU-03?sku=AU-03-RD","rgb":[255,36,0]},"AU-03-YE":{"name":"FutureHarvest Navigator Sunbeam Yellow","sku":"AU-03-YE","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/AU-03-YE.webp","url":"/product/AU-03?sku=AU-03-YE","rgb":[250,173,0]},"AU-04-RD":{"name":"Sapphire Sunworker 460R Ruby Red","sku":"AU-04-RD","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/AU-04-RD.webp","url":"/product/AU-04?sku=AU-04-RD","rgb":[155,17,30]},"AU-04-BK":{"name":"Sapphire Sunworker 460R Midnight Onyx","sku":"AU-04-BK","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/AU-04-BK.webp","url":"/product/AU-04?sku=AU-04-BK","rgb":[53,56,57]},"AU-05-ZH":{"name":"EcoGrow Crop Commander Zestful Horizon","sku":"AU-05-ZH","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/AU-05-ZH.webp","url":"/product/AU-05?sku=AU-05-ZH","rgb":[255,160,122]},"AU-06-CZ":{"name":"FarmFleet Sovereign Canary Zenith","sku":"AU-06-CZ","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/AU-06-CZ.webp","url":"/product/AU-06?sku=AU-06-CZ","rgb":[255,215,0]},"AU-06-MT":{"name":"FarmFleet Sovereign Minted Jade","sku":"AU-06-MT","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/AU-06-MT.webp","url":"/product/AU-06?sku=AU-06-MT","rgb":[98,136,130]},"AU-07-MT":{"name":"Verde Voyager Glacial Mint","sku":"AU-07-MT","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/AU-07-MT.webp","url":"/product/AU-07?sku=AU-07-MT","rgb":[175,219,210]},"AU-07-YE":{"name":"Verde Voyager Sunbeam Yellow","sku":"AU-07-YE","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/AU-07-YE.webp","url":"/product/AU-07?sku=AU-07-YE","rgb":[255,218,3]},"AU-08-WH":{"name":"Field Pioneer Polar White","sku":"AU-08-WH","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/AU-08-WH.webp","url":"/product/AU-08?sku=AU-08-WH","rgb":[232,232,232]},"CL-01-GR":{"name":"Heritage Workhorse Verdant Field","sku":"CL-01-GR","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-01-GR.webp","url":"/product/CL-01?sku=CL-01-GR","rgb":[107,142,35]},"CL-01-GY":{"name":"Heritage Workhorse Stormy Sky","sku":"CL-01-GY","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-01-GY.webp","url":"/product/CL-01?sku=CL-01-GY","rgb":[112,128,144]},"CL-02-BL":{"name":"Falcon Crest Farm Cerulean Classic","sku":"CL-02-BL","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-02-BL.webp","url":"/product/CL-02?sku=CL-02-BL","rgb":[0,123,167]},"CL-03-GR":{"name":"Falcon Crest Work Meadow Green","sku":"CL-03-GR","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-03-GR.webp","url":"/product/CL-03?sku=CL-03-GR","rgb":[124,252,0]},"CL-03-PI":{"name":"Falcon Crest Work Rustic Rose","sku":"CL-03-PI","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-03-PI.webp","url":"/product/CL-03?sku=CL-03-PI","rgb":[181,0,24]},"CL-03-YE":{"name":"Falcon Crest Work Harvest Gold","sku":"CL-03-YE","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-03-YE.webp","url":"/product/CL-03?sku=CL-03-YE","rgb":[218,145,0]},"CL-04-BL":{"name":"Broadfield Majestic Oceanic Blue","sku":"CL-04-BL","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-04-BL.webp","url":"/product/CL-04?sku=CL-04-BL","rgb":[0,64,166]},"CL-04-RD":{"name":"Broadfield Majestic Rustic Crimson","sku":"CL-04-RD","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-04-RD.webp","url":"/product/CL-04?sku=CL-04-RD","rgb":[123,63,0]},"CL-04-TQ":{"name":"Broadfield Majestic Aqua Green","sku":"CL-04-TQ","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-04-TQ.webp","url":"/product/CL-04?sku=CL-04-TQ","rgb":[0,178,152]},"CL-05-PT":{"name":"Countryside Commander Pacific Teal","sku":"CL-05-PT","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-05-PT.webp","url":"/product/CL-05?sku=CL-05-PT","rgb":[71,157,168]},"CL-05-RD":{"name":"Countryside Commander Barn Red","sku":"CL-05-RD","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-05-RD.webp","url":"/product/CL-05?sku=CL-05-RD","rgb":[124,10,2]},"CL-06-MT":{"name":"Danamark Steadfast Emerald Forest","sku":"CL-06-MT","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-06-MT.webp","url":"/product/CL-06?sku=CL-06-MT","rgb":[70,245,187]},"CL-06-YE":{"name":"Danamark Steadfast Golden Wheat","sku":"CL-06-YE","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-06-YE.webp","url":"/product/CL-06?sku=CL-06-YE","rgb":[250,175,63]},"CL-07-GR":{"name":"Greenland Rover Forest Fern","sku":"CL-07-GR","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-07-GR.webp","url":"/product/CL-07?sku=CL-07-GR","rgb":[46,162,80]},"CL-07-YE":{"name":"Greenland Rover Autumn Amber","sku":"CL-07-YE","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-07-YE.webp","url":"/product/CL-07?sku=CL-07-YE","rgb":[255,191,0]},"CL-08-GR":{"name":"Holland Hamster Polder Green","sku":"CL-08-GR","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-08-GR.webp","url":"/product/CL-08?sku=CL-08-GR","rgb":[194,178,128]},"CL-08-PI":{"name":"Holland Hamster Tulip Magenta","sku":"CL-08-PI","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-08-PI.webp","url":"/product/CL-08?sku=CL-08-PI","rgb":[214,82,130]},"CL-09-BL":{"name":"TerraFirma Veneto Adriatic Blue","sku":"CL-09-BL","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-09-BL.webp","url":"/product/CL-09?sku=CL-09-BL","rgb":[47,110,163]},"CL-09-GR":{"name":"TerraFirma Veneto Tuscan Green","sku":"CL-09-GR","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-09-GR.webp","url":"/product/CL-09?sku=CL-09-GR","rgb":[81,139,43]},"CL-10-SD":{"name":"Global Gallant Sahara Dawn","sku":"CL-10-SD","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-10-SD.webp","url":"/product/CL-10?sku=CL-10-SD","rgb":[184,168,117]},"CL-10-VI":{"name":"Global Gallant Violet Vintage","sku":"CL-10-VI","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-10-VI.webp","url":"/product/CL-10?sku=CL-10-VI","rgb":[138,43,226]},"CL-11-SK":{"name":"Scandinavia Sower Baltic Blue","sku":"CL-11-SK","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-11-SK.webp","url":"/product/CL-11?sku=CL-11-SK","rgb":[149,193,244]},"CL-11-YE":{"name":"Scandinavia Sower Nordic Gold","sku":"CL-11-YE","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-11-YE.webp","url":"/product/CL-11?sku=CL-11-YE","rgb":[255,215,0]},"CL-12-BL":{"name":"Celerity Cruiser Velocity Blue","sku":"CL-12-BL","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-12-BL.webp","url":"/product/CL-12?sku=CL-12-BL","rgb":[30,144,255]},"CL-12-RD":{"name":"Celerity Cruiser Rally Red","sku":"CL-12-RD","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-12-RD.webp","url":"/product/CL-12?sku=CL-12-RD","rgb":[237,41,57]},"CL-13-BL":{"name":"Rapid Racer Speedway Blue","sku":"CL-13-BL","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-13-BL.webp","url":"/product/CL-13?sku=CL-13-BL","rgb":[38,121,166]},"CL-13-RD":{"name":"Rapid Racer Raceway Red","sku":"CL-13-RD","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-13-RD.webp","url":"/product/CL-13?sku=CL-13-RD","rgb":[207,16,32]},"CL-14-GR":{"name":"Caribbean Cruiser Emerald Grove","sku":"CL-14-GR","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-14-GR.webp","url":"/product/CL-14?sku=CL-14-GR","rgb":[87,174,19]},"CL-14-RD":{"name":"Caribbean Cruiser Ruby Fields","sku":"CL-14-RD","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-14-RD.webp","url":"/product/CL-14?sku=CL-14-RD","rgb":[205,43,30]},"CL-15-PI":{"name":"Fieldmaster Classic Vintage Pink","sku":"CL-15-PI","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-15-PI.webp","url":"/product/CL-15?sku=CL-15-PI","rgb":[225,148,158]},"CL-15-SD":{"name":"Fieldmaster Classic Sahara Dust","sku":"CL-15-SD","image":"https://blueprint.the-tractor.store/cdn/img/product/[size]/CL-15-SD.webp","url":"/product/CL-15?sku=CL-15-SD","rgb":[222,199,140]}},"zQ":[{"id":"store-a","name":"Aurora Flagship Store","street":"Astronaut Way 1","city":"Arlington","image":"https://blueprint.the-tractor.store/cdn/img/store/[size]/store-1.webp"},{"id":"store-b","name":"Big Micro Machines","street":"Broadway 2","city":"Burlington","image":"https://blueprint.the-tractor.store/cdn/img/store/[size]/store-2.webp"},{"id":"store-c","name":"Central Mall","street":"Clown Street 3","city":"Cryo","image":"https://blueprint.the-tractor.store/cdn/img/store/[size]/store-3.webp"},{"id":"store-d","name":"Downtown Model Store","street":"Duck Street 4","city":"Davenport","image":"https://blueprint.the-tractor.store/cdn/img/store/[size]/store-4.webp"}]}')}}]);