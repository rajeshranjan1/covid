(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{101:function(e,t,a){},210:function(e,t,a){},211:function(e,t,a){},213:function(e,t,a){},214:function(e,t,a){},215:function(e,t,a){},235:function(e,t,a){},236:function(e,t,a){},237:function(e,t,a){},239:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(79),c=a.n(l),o=(a(92),a(10)),s=a(11),i=a(13),u=a(12),m=(a(93),a(94),a(14)),d=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header-wrap"},r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"row header "},r.a.createElement("div",{className:"col col-lg-6 col-md-6 col-12  left"},r.a.createElement("h1",{className:"theme-gradient "},r.a.createElement(m.b,{to:"/covid"},"Corona Dashboard"))),r.a.createElement("div",{className:"col col-lg-6 col-md-6  col-12 right"},r.a.createElement("ul",{className:"menu"},r.a.createElement("li",null,r.a.createElement(m.b,{to:"/covid"},"Home")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/country"},"Browse By Country"))))))))}}]),a}(n.Component);a(99);var h=function(){return r.a.createElement("div",{className:"footer-wrap"},r.a.createElement("div",{className:"container text-center"},r.a.createElement("p",null," Copyright @ Rajesh Ranjan ")))},v=a(6),E=a.n(v),p=a(16),f=a(241),g=(a(101),a(7)),b=a.n(g),y=function(e){var t=e.data,a=t.confirmed,n=t.recovered,l=t.deaths,c=t.lastUpdate;if(!a)return!1;var o=a.value-(n.value+l.value);return r.a.createElement("div",{className:"cards-wrap"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col text-center"},r.a.createElement("h5",{className:"total-case"},"Total Cases Reported Till : ",new Date(c).toDateString(),", ",new Date(c).toTimeString()," "))),r.a.createElement("div",{className:"row card-wrapper text-center"},r.a.createElement(f.a,{className:"col col-lg-3 col-md-3 col-sm-12 col-12"},r.a.createElement(f.a.Body,null,r.a.createElement(f.a.Title,null,r.a.createElement("h2",null,a.detail.split("/").pop())),r.a.createElement(f.a.Title,null,r.a.createElement("h3",null,r.a.createElement(b.a,{end:a.value,start:0,duration:2,separator:","}))))),r.a.createElement(f.a,{className:"col col-lg-3 col-md-3 col-sm-12 col-12"},r.a.createElement(f.a.Body,null,r.a.createElement(f.a.Title,null,r.a.createElement("h2",null,"Active ")),r.a.createElement(f.a.Title,null,r.a.createElement("h3",null,r.a.createElement(b.a,{end:o,start:0,duration:2,separator:","}))),r.a.createElement("p",null," ",(100*o/a.value).toFixed(2),"%"))),r.a.createElement(f.a,{className:"col col-lg-3 col-md-3 col-sm-12 col-12"},r.a.createElement(f.a.Body,null,r.a.createElement(f.a.Title,null,r.a.createElement("h2",null,n.detail.split("/").pop()," ")),r.a.createElement(f.a.Title,null,r.a.createElement("h3",null,r.a.createElement(b.a,{end:n.value,start:0,duration:2,separator:","}))),r.a.createElement("p",null,(100*n.value/a.value).toFixed(2),"%"))),r.a.createElement(f.a,{className:"col col-lg-3 col-md-3 col-sm-12 col-12"},r.a.createElement(f.a.Body,null,r.a.createElement(f.a.Title,null,r.a.createElement("h2",null,l.detail.split("/").pop())," "),r.a.createElement(f.a.Title,null,r.a.createElement("h3",null,r.a.createElement(b.a,{end:l.value,start:0,duration:2,separator:","}))),r.a.createElement("p",null,(100*l.value/a.value).toFixed(2),"%"))))))},N=a(36),w=a(18),C=a.n(w),k="https://covid19.mathdro.id/api",x=function(){var e=Object(p.a)(E.a.mark((function e(t){var a,n,r,l,c,o,s,i;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=k,t&&(a="".concat(k,"/countries/").concat(t)),e.prev=2,e.next=5,C.a.get(a);case 5:return n=e.sent,r=n.data,l=r.confirmed,c=r.recovered,o=r.deaths,s=r.lastUpdate,i={confirmed:l,recovered:c,deaths:o,lastUpdate:s},e.abrupt("return",i);case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(p.a)(E.a.mark((function e(){var t,a,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("".concat(k,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(p.a)(E.a.mark((function e(){var t,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("".concat(k,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),B=a(24),D=(a(210),function(e){var t=e.data,a=t.confirmed,l=t.recovered,c=t.deaths,o=e.country,s=Object(n.useState)([]),i=Object(N.a)(s,2),u=i[0],m=i[1];Object(n.useEffect)((function(){(function(){var e=Object(p.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m,e.next=3,j();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var d=0!==u.length||void 0!==u?r.a.createElement(B.c,{data:{labels:u.map((function(e){return e.date})),datasets:[{data:u.map((function(e){return e.confirmed})),label:"Infected People",borderColor:"#rgba(76,0,255,0.99)",pointBackgroundColor:"rgba(76,0,255,0.76)",pointBorderColor:"rgba(76,0,255,0.85)",backgroundColor:"rgba(76,0,255,0.56)",fill:!0},{data:u.map((function(e){return e.deaths})),label:"Total Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.45)",pointBackgroundColor:"rgba(255, 0, 0, 0.34)",pointBorderColor:"rgba(255, 0, 0,1)",fill:!0}]}}):null,h=a?r.a.createElement(B.a,{data:{labels:["Infected ","Active","Recovered","Deaths"],datasets:[{labels:"People",backgroundColor:["rgba(6,42,255,0.45)","rgba(6,255,255,0.45)","rgba(6,255,153,0.45)","rgba(255,6,6,0.45)"],borderColor:["rgba(6,42,255,0.8)","rgba(6,255,255,0.8)","rgba(6,255,153,0.8)","rgba(255,6,6,0.8)"],borderWidth:2,hoverBorderWidth:3,hoverBackgroundColor:["rgba(6,42,255,0.55)","rgba(6,255,255,0.55)","rgba(6,255,153,0.55)","rgba(255,6,6,0.55)"],hoverBorderColor:["rgba(6,42,255,0.85)","rgba(6,255,255,0.85)","rgba(6,255,153,0.85)","rgba(255,6,6,0.85)"],data:[a.value,a.value-(l.value+c.value),l.value,c.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current State In ".concat(o)}}}):null;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"chart-container"},o?h:d))}),S=a(29),T=(a(211),function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),l=Object(N.a)(a,2),c=l[0],o=l[1];return Object(n.useEffect)((function(){(function(){var e=Object(p.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,O();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]),r.a.createElement("div",{className:"country-picker"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-md-center text-center"},r.a.createElement("div",{className:"col-md-4 "},r.a.createElement(S.a,{className:""},r.a.createElement(S.a.Group,{defaultValue:"",onChange:function(e){return t(e.target.value)},controlId:"exampleForm.SelectCustom"},r.a.createElement(S.a.Label,null,"Select Your Country"),r.a.createElement(S.a.Control,{as:"select",custom:!0},r.a.createElement("option",{value:""},"Global"),c.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))))))))});a(213);var F=function(){return r.a.createElement("div",{className:"content-wrap"},r.a.createElement("div",{className:"container "},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col-lg-4 col-md-4 col-sm-12 col-12 content"},r.a.createElement("h4",null,r.a.createElement("span",null,"#."),"Practice respiratory hygiene"),r.a.createElement("p",null,"Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately.")),r.a.createElement("div",{className:"col col-lg-4 col-md-4 col-sm-12 col-12 content"},r.a.createElement("h4",null," ",r.a.createElement("span",null,"#."),"If you have fever, cough and difficulty breathing"),r.a.createElement("p",null,"Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention and call in advance. Follow the directions of your local health authority.")),r.a.createElement("div",{className:"col col-lg-4 col-md-4 col-sm-12 col-12 content"},r.a.createElement("h4",null," ",r.a.createElement("span",null,"#."),"Please don't walk unneccesary"),r.a.createElement("p",null,r.a.createElement("strong",null," Why? "),"  It is irresponsible behaviour as a citizen of India. Against Corono virus a large number of Doctors, Police, Delivery boys, Soldiers are giving their efforts. Hence request to you please do not go out side of your home. #StayHomeStaySafe")))))},I=(a(214),a(84)),W=a.n(I),A=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={confirmed:0,recovered:0,deaths:0,lastUpdate:0},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;C.a.get("https://covid19.mathdro.id/api/countries/india").then((function(t){var a=t.data;e.setState({confirmed:a.confirmed.value,recovered:a.recovered.value,deaths:a.deaths.value,lastUpdated:a.lastUpdate})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.confirmed,a=e.deaths,n=e.recovered,l=t-(n+a),c=t?r.a.createElement(B.b,{data:{labels:["Infected ","Active","Recovered","Deaths"],datasets:[{labels:"People",backgroundColor:["rgba(6,42,255,0.45)","rgba(6,255,255,0.45)","rgba(6,255,153,0.45)","rgba(255,6,6,0.45)"],borderColor:["rgba(6,42,255,0.8)","rgba(6,255,255,0.8)","rgba(6,255,153,0.8)","rgba(255,6,6,0.8)"],borderWidth:2,barThickness:28,hoverBorderWidth:3,hoverBackgroundColor:["rgba(6,42,255,0.55)","rgba(6,255,255,0.55)","rgba(6,255,153,0.55)","rgba(255,6,6,0.55)"],hoverBorderColor:["rgba(6,42,255,0.85)","rgba(6,255,255,0.85)","rgba(6,255,153,0.85)","rgba(255,6,6,0.85)"],data:[t,t-(n+a),n,a]}]},options:{legend:{display:!1},title:{display:!0,text:"Current State In India"}}}):null;return r.a.createElement("div",null,r.a.createElement("div",{className:"india-fig-wrap"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-md-center text-center"},r.a.createElement("div",{className:"col-lg-4 india-fig-left "},r.a.createElement("div",null,r.a.createElement("img",{alt:"India Flag",src:W.a,className:"indFlag"})),r.a.createElement("div",null," ",r.a.createElement("h3",{className:"text-left"}," Corona Live Status In ",r.a.createElement("span",{className:"india"},"India"))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col-lg-6 col-md-6 col-sm-12 col-12 india-fig-right text-center"},r.a.createElement("div",{className:"india-figure"},r.a.createElement("div",{className:"grid2"},r.a.createElement("h4",null,"Confirmed "),r.a.createElement(b.a,{end:t,start:0,duration:2,separator:","})),r.a.createElement("div",{className:"grid3"},r.a.createElement("h4",null,"Active  ")," ",r.a.createElement(b.a,{end:t-(n+a),start:0,duration:2,separator:","}),"(",(100*l/t).toFixed(2),"%)"),r.a.createElement("div",{className:"grid4"},r.a.createElement("h4",null,"Recovered ")," ",r.a.createElement(b.a,{end:n,start:0,duration:2,separator:","})," (",(100*n/t).toFixed(2),"%)"),r.a.createElement("div",{className:"grid5"},r.a.createElement("h4",null,"Deaths  "),"  ",r.a.createElement(b.a,{end:a,start:0,duration:2,separator:","}),"(",(100*a/t).toFixed(2),"%)"))),r.a.createElement("div",{className:"col col-lg-6 col-md-6 col-sm-12 col-12"},r.a.createElement("div",{className:"chart-wpr"},c))))))}}]),a}(n.Component);a(215);var _=function(){return r.a.createElement("div",{className:"prevention"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h2",{className:"advice theme-gradient"},"Corona Virus Advice for the public .")))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col-lg-4 col-md-4 col-sm-12 col-12 content"},r.a.createElement("h4",null,r.a.createElement("span",null,"#."),"Wash your hands frequently"),r.a.createElement("p",null,"Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.",r.a.createElement("strong",null," Why? ")," Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands.")),r.a.createElement("div",{className:"col col-lg-4 col-md-4 col-sm-12 col-12 content"},r.a.createElement("h4",null," ",r.a.createElement("span",null,"#."),"Maintain social distancing"),r.a.createElement("p",null,"Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.",r.a.createElement("strong",null," Why? "),"  When someone coughs or sneezes they spray small liquid droplets from their nose or mouth which may contain virus.")),r.a.createElement("div",{className:"col col-lg-4 col-md-4 col-sm-12 col-12 content"},r.a.createElement("h4",null," ",r.a.createElement("span",null,"#."),"Avoid touching eyes, nose and mouth"),r.a.createElement("p",null,r.a.createElement("strong",null," Why? "),"  Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and can make you sick.")))))},L=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(p.a)(E.a.mark((function t(a){var n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(p.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement(_,null),r.a.createElement(T,{handleCountryChange:this.handleCountryChange}),r.a.createElement(y,{data:t}),r.a.createElement(D,{data:t,country:a}),r.a.createElement(F,null))}}]),a}(n.Component),R=a(86);a(78);var M=function(e){var t=e.country,a=t.ourid,n=t.title,l=t.code,c=t.total_cases,o=t.total_active_cases,s=t.total_deaths,i=t.total_recovered,u=t.total_serious_cases;return r.a.createElement("tr",null,r.a.createElement("td",null,a),r.a.createElement("td",null," ","DP"===l?null:r.a.createElement("img",{className:"country-image",alt:n,src:"https://www.countryflags.io/".concat(l,"/flat/",16,".png")}),"  ",n," "),c>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("td",{className:"skyblue text-center"},c),r.a.createElement("td",{className:"yellow text-center"},o),r.a.createElement("td",{className:"green text-center"},i),r.a.createElement("td",{className:"red text-center"},s),r.a.createElement("td",{className:"serious text-center"},u),r.a.createElement("td",{className:"text-center"},r.a.createElement(m.b,{className:"get-btn",to:{pathname:"/country/".concat(n),state:[{id:a,title:n,code:l,total:c,active:o,death:s,recovered:i,serious:u}]}},"Get Details")," ")):r.a.createElement("td",{colSpan:"6",className:"text-center bg-success"}," Corona Free Country"))},P=a(85),U=a.n(P);a(235);var z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"loader-back"},r.a.createElement(U.a,{type:"Bars",color:"#f81f01",height:80,width:80,timeout:2e4})))},H=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={countries:[],isLoading:!1},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;C.a.get("https://api.thevirustracker.com/free-api?countryTotals=ALL/").then((function(t){e.setState({countries:t.data.countryitems[0],isLoading:!0})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.countries,t=Object.values(e);return t.pop(),r.a.createElement(r.a.Fragment,null,this.state.isLoading?r.a.createElement("div",{className:"table-wrap"},r.a.createElement("div",{className:"container"},r.a.createElement(R.a,{responsive:!0,striped:!0,bordered:!0,hover:!0,variant:"dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Country "),r.a.createElement("th",{className:"text-center skyblue"},"Total"),r.a.createElement("th",{className:"text-center yellow"},"Active"),r.a.createElement("th",{className:"text-center green"},"Recovered"),r.a.createElement("th",{className:"text-center red"},"Deaths"),r.a.createElement("th",{className:"text-center serious"},"Serious Case"))),r.a.createElement("tbody",null,t.map((function(e,t){return r.a.createElement(M,{key:t,country:e})})))))):r.a.createElement(z,null))}}]),a}(n.Component),q=(a(236),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={items:[],isLoading:!1},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;C.a.get("https://api.thevirustracker.com/free-api?countryTimeline=".concat(this.props.location.state[0].code)).then((function(t){e.setState({items:t.data.timelineitems[0],isLoading:!0})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.items,a=e.isLoading,n=Object.values(t);console.log(t);var l=0!==t.length||void 0!==t?r.a.createElement(B.c,{data:{labels:Object.keys(t),datasets:[{data:n.map((function(e){return e.total_cases})),label:"Total",borderColor:"blue",pointBackgroundColor:"blue",pointBorderColor:"blue",backgroundColor:"blue",fill:!1},{data:n.map((function(e){return e.total_recoveries})),label:"Daily Recovered",borderColor:"green",backgroundColor:"green",pointBackgroundColor:"green",pointBorderColor:"green",fill:!1},{data:n.map((function(e){var t=e.new_daily_cases;return Math.abs(t)})),label:"Daily New Cases",borderColor:"hotpink",pointBackgroundColor:"hotpink",pointBorderColor:"hotpink",backgroundColor:"hotpink",fill:!1},{data:n.map((function(e){return e.total_deaths})),label:"Total Death",borderColor:"red",pointBackgroundColor:"red",pointBorderColor:"red",backgroundColor:"red",fill:!1}]}}):null,c=this.props.location.state[0],o=c.code,s=c.title,i=c.total,u=c.active,d=c.death,h=c.recovered;return r.a.createElement(r.a.Fragment,null,a?r.a.createElement("div",{className:"country-details"},r.a.createElement("div",{className:" country-header text-center container"},r.a.createElement("h2",null,"DP"===o?null:r.a.createElement("img",{className:"country-image",alt:s,src:"https://www.countryflags.io/".concat(o,"/flat/",64,".png")})," ",s)),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col-12 col-lg-12 col-sm-12"},r.a.createElement("div",{className:"con-details"},r.a.createElement("div",null,r.a.createElement("h2",null,"Total ",r.a.createElement(b.a,{end:i,start:0,duration:2,separator:","})," ")),r.a.createElement("div",null,r.a.createElement("h2",null,"Active ",r.a.createElement(b.a,{end:u,start:0,duration:2,separator:","})," ")),r.a.createElement("div",null,r.a.createElement("h2",null,"Recovered ",r.a.createElement(b.a,{end:h,start:0,duration:2,separator:","})," ")),r.a.createElement("div",null,r.a.createElement("h2",null,"Death ",r.a.createElement(b.a,{end:d,start:0,duration:2,separator:","})," "))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col-12"},l),r.a.createElement("div",{className:"col col-12 text-center"}," ",r.a.createElement("button",{className:"btn btn-warning btn-md"},r.a.createElement(m.b,{to:"/country"},"Back")," "))))):r.a.createElement(z,null))}}]),a}(n.Component));a(237);var G=function(){return r.a.createElement("div",{className:"not-found"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"wrapper text-center"},r.a.createElement("div",null,r.a.createElement("h1",null,"Page not found"),r.a.createElement("button",{className:"btn btn-warning btn-md"},r.a.createElement(m.b,{to:"/covid"},"Back to home")," ")))))},J=a(22),V=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(J.d,null,r.a.createElement(J.b,{exact:!0,path:"/covid",component:L}),r.a.createElement(J.b,{exact:!0,path:"/country",component:H}),r.a.createElement(J.b,{exact:!0,path:"/country/:id",component:q}),r.a.createElement(J.b,{exact:!0,path:"/404",component:G}),r.a.createElement(J.a,{to:"/404"}),r.a.createElement(q,null)),r.a.createElement(h,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(238);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},78:function(e,t,a){},84:function(e,t,a){e.exports=a.p+"static/media/ind.b64e96da.png"},87:function(e,t,a){e.exports=a(239)},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},99:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.afa3e04a.chunk.js.map