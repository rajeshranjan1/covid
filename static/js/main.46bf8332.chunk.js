(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{192:function(e,t,a){},193:function(e,t,a){},196:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(68),l=a.n(c),o=(a(76),a(6)),u=a.n(o),s=a(8),i=a(24),d=a(25),m=a(28),p=a(26),v=(a(78),a(79),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:"row header"},r.a.createElement("div",{className:"col"},r.a.createElement("p",null,"Wash Your Hands Regularly !! No Hugs !! Stay Home !! Use Sanitizer !! Avoid Crowds !! Don't Touch Your Face")))}}]),a}(n.Component)),f=a(198),h=(a(80),a(17)),b=a.n(h),E=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,l=t.lastUpdate;if(!a)return!1;var o=a.value-(n.value+c.value);return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col text-center"},r.a.createElement("h5",{className:"total-case"},"Total Cases Reported Till : ",new Date(l).toDateString()))),r.a.createElement("div",{className:"row card-wrapper text-center"},r.a.createElement(f.a,{className:"col col-lg-3 col-md-3 col-sm-12 col-12"},r.a.createElement(f.a.Body,null,r.a.createElement(f.a.Title,null,r.a.createElement("h2",null,"Confirmed")),r.a.createElement(f.a.Title,null,r.a.createElement("h3",null,r.a.createElement(b.a,{end:a.value,start:0,duration:2,separator:","}))))),r.a.createElement(f.a,{className:"col col-lg-3 col-md-3 col-sm-12 col-12"},r.a.createElement(f.a.Body,null,r.a.createElement(f.a.Title,null,r.a.createElement("h2",null,"Active ")),r.a.createElement(f.a.Title,null,r.a.createElement("h3",null,r.a.createElement(b.a,{end:o,start:0,duration:2,separator:","}))),r.a.createElement("p",null," ",(100*o/a.value).toFixed(2),"%"))),r.a.createElement(f.a,{className:"col col-lg-3 col-md-3 col-sm-12 col-12"},r.a.createElement(f.a.Body,null,r.a.createElement(f.a.Title,null,r.a.createElement("h2",null,"Recovered ")),r.a.createElement(f.a.Title,null,r.a.createElement("h3",null,r.a.createElement(b.a,{end:n.value,start:0,duration:2,separator:","}))),r.a.createElement("p",null,(100*n.value/a.value).toFixed(2),"%"))),r.a.createElement(f.a,{className:"col col-lg-3 col-md-3 col-sm-12 col-12"},r.a.createElement(f.a.Body,null,r.a.createElement(f.a.Title,null,r.a.createElement("h2",null,"Deaths")," "),r.a.createElement(f.a.Title,null,r.a.createElement("h3",null,r.a.createElement(b.a,{end:c.value,start:0,duration:2,separator:","}))),r.a.createElement("p",null,(100*c.value/a.value).toFixed(2),"%")))))},g=a(27),y=a(29),w=a.n(y),C="https://covid19.mathdro.id/api",x=function(){var e=Object(s.a)(u.a.mark((function e(t){var a,n,r,c,l,o,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=C,t&&(a="".concat(C,"/countries/").concat(t)),e.prev=2,e.next=5,w.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,l=r.recovered,o=r.deaths,s=r.lastUpdate,i={confirmed:c,recovered:l,deaths:o,lastUpdate:s},e.abrupt("return",i);case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(s.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("".concat(C,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(s.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("".concat(C,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),O=a(42),N=(a(192),function(e){var t=e.data,a=t.confirmed,c=t.recovered,l=t.deaths,o=e.country,i=Object(n.useState)([]),d=Object(g.a)(i,2),m=d[0],p=d[1];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,j();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var v=0!==m.length||void 0!==m?r.a.createElement(O.b,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected People",borderColor:"#rgba(76,0,255,0.99)",pointBackgroundColor:"rgba(76,0,255,0.76)",pointBorderColor:"rgba(76,0,255,0.85)",backgroundColor:"rgba(76,0,255,0.56)",fill:!1},{data:m.map((function(e){return e.deaths})),label:"Total Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.45)",pointBackgroundColor:"rgba(255, 0, 0, 0.34)",pointBorderColor:"rgba(255, 0, 0,1)",fill:!1}]}}):null,f=a?r.a.createElement(O.a,{data:{labels:["Infected ","Active","Recovered","Deaths"],datasets:[{labels:"People",backgroundColor:["rgba(6,42,255,0.45)","rgba(6,255,255,0.45)","rgba(6,255,153,0.45)","rgba(255,6,6,0.45)"],borderColor:["rgba(6,42,255,0.8)","rgba(6,255,255,0.8)","rgba(6,255,153,0.8)","rgba(255,6,6,0.8)"],borderWidth:2,hoverBorderWidth:3,hoverBackgroundColor:["rgba(6,42,255,0.55)","rgba(6,255,255,0.55)","rgba(6,255,153,0.55)","rgba(255,6,6,0.55)"],hoverBorderColor:["rgba(6,42,255,0.85)","rgba(6,255,255,0.85)","rgba(6,255,153,0.85)","rgba(255,6,6,0.85)"],data:[a.value,a.value-(c.value+l.value),c.value,l.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current State In ".concat(o)}}}):null;return r.a.createElement("div",{className:"chart-container"},o?f:v)}),B=a(30),T=(a(193),function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(g.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,k();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]),r.a.createElement("div",{className:"country-picker"},r.a.createElement("div",{className:"row justify-content-md-center text-center"},r.a.createElement("div",{className:"col-md-4 "},r.a.createElement(B.a,{className:""},r.a.createElement(B.a.Group,{defaultValue:"",onChange:function(e){return t(e.target.value)},controlId:"exampleForm.SelectCustom"},r.a.createElement(B.a.Control,{as:"select",custom:!0},r.a.createElement("option",{value:""},"Global"),l.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))))))}),S=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(s.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(v,null),r.a.createElement("h1",null,"Covid-19 DashBoard"),r.a.createElement(E,{data:t}),r.a.createElement(T,{handleCountryChange:this.handleCountryChange}),r.a.createElement(N,{data:t,country:a})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(195);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},71:function(e,t,a){e.exports=a(196)},76:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.46bf8332.chunk.js.map