(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"6Nk2":function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e("MUpH"),a=e("wTIg"),o=e("2yN9");function i(){var t=Object(r.a)(["\n    font-size: 14px;\n  "]);return i=function(){return t},t}var c=Object(a.a)("p",{target:"e18gzgyc0"})("line-height:1.756;font-size:18px;color:",(function(t){return t.theme.colors.articleText}),";font-family:",(function(t){return t.theme.fonts.sansSerif}),";transition:",(function(t){return t.theme.colorModeTransition}),";margin:0 0 35px;width:100%;",o.a.phablet(i()),"")},aB9R:function(t,n,e){"use strict";e.r(n);var r=e("wTIg"),a=e("q1tI"),o=e.n(a),i=e("ijqZ"),c=e("ytpH"),u=e("4XLq"),l=e("KQm4"),s=e("vuIU"),p=e("dI71"),f=e("MUpH"),b=e("AeFk"),d=e("Wbzz"),h=e("TJpk"),g=e("0lfv"),j=e("2yN9"),x=e("qKvR");function m(){var t=Object(f.a)(["\n    justify-content: flex-start;\n    "," { display: none; }\n  "]);return m=function(){return t},t}function O(){var t=Object(f.a)(["\n    .Paginator__pageLink, "," { display: none; }\n    left: -15px;\n  "]);return O=function(){return t},t}function v(){var t=Object(f.a)(["\n    display: block;\n    width: auto;\n    height: auto;\n    padding: 2rem;\n\n    &:first-of-type {\n      padding-left: 0;\n    }\n\n    &:last-child {\n      padding-right: 0;\n    }\n  "]);return v=function(){return t},t}function y(){var t=Object(f.a)(["\n  line-height: 1;\n  color: ",";\n  padding: 0;\n  width: 6.8rem;\n  height: 6.8rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-variant-numeric: tabular-nums;\n\n  ","\n"]);return y=function(){return t},t}var w=function(t){return Object(b.b)(y(),t.theme.colors.title,j.a.desktop_up(v()))},k=Object(r.a)(d.Link,{target:"e19b2hcf0"})("font-weight:600;font-size:18px;text-decoration:none;color:",(function(t){return t.theme.colors.title}),";",w," &:hover,&:focus{opacity:1;text-decoration:underline;}"),L=Object(r.a)(d.Link,{target:"e19b2hcf1"})("font-weight:400;font-size:18px;text-decoration:none;color:",(function(t){return t.theme.colors.title}),";",w," &:hover,&:focus{opacity:1;text-decoration:underline;}"),P=Object(r.a)("span",{target:"e19b2hcf2"})("opacity:0.3;",w," &::before{content:'...';}"),z=Object(r.a)("span",{target:"e19b2hcf3"})("font-weight:400;",w," color:",(function(t){return t.theme.colors.title}),";em{font-style:normal;color:",(function(t){return t.theme.colors.title}),";}"),q=Object(r.a)("nav",{target:"e19b2hcf4"})("position:relative;z-index:1;display:inline-flex;justify-content:space-between;align-items:center;",j.a.tablet(O(),P)," ",j.a.desktop_up(m(),z),""),R=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return(n=t.call.apply(t,[this].concat(r))||this).maxPages=3,n.count=n.props.pageCount,n.current=n.props.index,n.pageRoot=n.props.pathPrefix,n.getFullPath=function(t){return"/"===n.pageRoot?1===t?n.pageRoot:n.pageRoot+"page/"+t:1===t?n.pageRoot:n.pageRoot+"/page/"+t},n}return Object(p.a)(n,t),n.prototype.render=function(){var t=this.count,n=this.current;if(t<=1)return null;var e=this.previousPath,r=this.nextPath,a=this.current<this.count,i=this.current>1;return Object(x.jsx)(o.a.Fragment,null,Object(x.jsx)(h.Helmet,null,i&&Object(x.jsx)("link",{rel:"prev",href:e}),a&&Object(x.jsx)("link",{rel:"next",href:r})),Object(x.jsx)(q,null,i&&Object(x.jsx)(k,{to:e},"Prev"),this.getPageLinks,Object(x.jsx)(z,{"aria-hidden":"true"},Object(x.jsx)("em",null,n)," of ",t),a&&Object(x.jsx)(k,{to:r},"Next")))},Object(s.a)(n,[{key:"nextPath",get:function(){return this.getFullPath(this.current+1)}},{key:"previousPath",get:function(){return this.getFullPath(this.current-1)}},{key:"getPageLinks",get:function(){var t=this,n=this.current,e=this.count,r=this.maxPages,a=1===n?n:n-1,o=Object(g.i)(a,e+1-a),i=o.slice(0,r);return o[0]>2&&i.unshift(null),o[0]>1&&i.unshift(1),o[0]+1===e&&o[0]-1>0&&i.splice(o.length-1-r,0,o[0]-1),o[0]+r<e&&i.push(null),o[0]+r-1<e&&i.push(e),Object(l.a)(new Set(i)).map((function(e,r){return null===e?Object(x.jsx)(P,{key:"PaginatorPage_spacer_"+r,"aria-hidden":!0}):Object(x.jsx)(L,{key:"PaginatorPage_"+e,to:t.getFullPath(e),style:{opacity:n===e?1:.3},className:"Paginator__pageLink"},e)}))}}]),n}(a.Component),S=e("0ieP"),C=e("YSv4"),I=e("oM0X"),_=e("6Nk2");function A(){var t=Object(f.a)(["\n    margin-right: 0;\n  "]);return A=function(){return t},t}function T(){var t=Object(f.a)(["\n    font-size: 32px;\n  "]);return T=function(){return t},t}function H(){var t=Object(f.a)(["\n    font-size: 38px\n  "]);return H=function(){return t},t}function M(){var t=Object(f.a)(["\n    width: 100%;\n  "]);return M=function(){return t},t}function N(){var t=Object(f.a)(["\n    width: 80%;\n  "]);return N=function(){return t},t}function F(){var t=Object(f.a)(["\n    display: none;\n  "]);return F=function(){return t},t}function D(){var t=Object(f.a)(["\n    margin-bottom: 60px;\n  "]);return D=function(){return t},t}function X(){var t=Object(f.a)(["\n    margin-bottom: 80px;\n  "]);return X=function(){return t},t}var G=Object(r.a)("div",{target:"ee0l3qh0"})("display:flex;align-items:center;justify-content:space-between;margin-bottom:100px;",j.a.desktop(X()),";",j.a.tablet(D()),";"),K=Object(r.a)("div",{target:"ee0l3qh1"})("display:flex;align-items:center;",j.a.tablet(F()),";"),U=Object(r.a)("div",{target:"ee0l3qh2"})("margin:100px 0;",j.a.desktop(N())," ",j.a.tablet(M()),""),J=Object(r.a)("h1",{target:"ee0l3qh3"})("font-style:normal;font-weight:600;font-size:52px;line-height:1.15;color:",(function(t){return t.theme.colors.title}),";width:100%;a{color:",(function(t){return t.theme.colors.primary}),";}",j.a.desktop(H())," ",j.a.phablet(T()),""),W=Object(r.a)("span",{target:"ee0l3qh4"})("background-color:",(function(t){return t.theme.colors.secondaryTransparent}),";"),Y=Object(r.a)("div",{target:"ee0l3qh5"})("margin-right:40px;",j.a.tablet(A()),";"),E=Object(r.a)("button",{target:"ee0l3qh6"})("position:relative;display:flex;align-items:center;justify-content:center;height:36px;width:36px;border-radius:50%;background:transparent;transition:background 0.25s;&:not(:last-child){margin-right:30px;}&:hover{background:",(function(t){return t.theme.colors.hover}),";}&[data-a11y='true']:focus::after{content:'';position:absolute;left:-10%;top:-10%;width:120%;height:120%;border:2px solid ",(function(t){return t.theme.colors.primary}),";background:rgba(255,255,255,0.01);border-radius:50%;}svg{opacity:",(function(t){return t.active?1:.25}),";transition:opacity 0.2s;path{fill:",(function(t){return t.theme.colors.title}),";}}"),V=function(t){t.authors;var n=Object(a.useContext)(C.a),e=n.gridLayout,r=void 0===e?"tiles":e,o=n.hasSetGridLayout,c=n.setGridLayout,u=o&&"tiles"===r;return Object(x.jsx)(i.a,{relative:!0,id:"Articles__Hero"},Object(x.jsx)(U,null,Object(x.jsx)(J,null,"Let's build a ",Object(x.jsx)(W,null,"brighter tomorrow"))),Object(x.jsx)(G,null,Object(x.jsx)(Y,null,Object(x.jsx)(I.a,null),Object(x.jsx)(_.a,null,"All writings and thoughts represent my thoughts only, and not those of any organization or employer.")),Object(x.jsx)(K,null,Object(x.jsx)(E,{onClick:function(){return c("tiles")},active:u,"data-a11y":"false",title:"Show articles in Tile grid","aria-label":"Show articles in Tile grid"},Object(x.jsx)(S.a.Tiles,null)),Object(x.jsx)(E,{onClick:function(){return c("rows")},active:!u,"data-a11y":"false",title:"Show articles in Row grid","aria-label":"Show articles in Row grid"},Object(x.jsx)(S.a.Rows,null)))))},B=(e("E9XD"),e("zIkO")),Q=e("CvMP");function Z(){var t=Object(f.a)(["\n    &:hover "," {\n      transform: none;\n      box-shadow: initial;\n    }\n\n    &:active {\n      transform: scale(0.97) translateY(3px);\n    }\n  "]);return Z=function(){return t},t}function $(){var t=Object(f.a)(["\n    max-width: 100%;\n    padding:  0 20px 30px;\n  "]);return $=function(){return t},t}function tt(){var t=Object(f.a)(["\n    max-width: 100%;\n    padding:  0 20px;\n    margin-bottom: 20px;\n    -webkit-line-clamp: 3;\n  "]);return tt=function(){return t},t}function nt(){var t=Object(f.a)(["\n    margin-bottom: 15px;\n  "]);return nt=function(){return t},t}function et(){var t=Object(f.a)(["\n    display: -webkit-box;\n  "]);return et=function(){return t},t}function rt(){var t=Object(f.a)(["\n    font-size: 22px;  \n    padding: 30px 20px 0;\n    margin-bottom: 10px;\n    -webkit-line-clamp: 3;\n  "]);return rt=function(){return t},t}function at(){var t=Object(f.a)(["\n    font-size: 24px;  \n  "]);return at=function(){return t},t}function ot(){var t=Object(f.a)(["\n    margin-bottom: 15px;\n  "]);return ot=function(){return t},t}function it(){var t=Object(f.a)(["\n    overflow: hidden;\n    margin-bottom: 0;\n    box-shadow: none;\n    border-top-right-radius: 5px;\n    border-top-left-radius: 5px;\n  "]);return it=function(){return t},t}function ct(){var t=Object(f.a)(["\n    height: 200px;\n    margin-bottom: 35px;\n  "]);return ct=function(){return t},t}function ut(){var t=Object(f.a)(["\n  display: grid;\n  grid-template-rows: ",";\n"]);return ut=function(){return t},t}function lt(){var t=Object(f.a)(["\n    margin-bottom: 40px;\n    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);\n    border-bottom-right-radius: 5px;\n    border-bottom-left-radius: 5px;\n  "]);return lt=function(){return t},t}function st(){var t=Object(f.a)(["\n    margin-bottom: 60px;\n  "]);return st=function(){return t},t}function pt(){var t=Object(f.a)(["\n  position: relative;\n\n  ","\n\n  @media (max-width: 540px) {\n    background: ",";\n  }\n\n  ","\n"]);return pt=function(){return t},t}function ft(){var t=Object(f.a)(["\n    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);\n    border-bottom-right-radius: 5px;\n    border-bottom-left-radius: 5px;\n  "]);return ft=function(){return t},t}function bt(){var t=Object(f.a)(["\n    grid-template-columns: 1fr;\n  "]);return bt=function(){return t},t}function dt(){var t=Object(f.a)(["\n    grid-column-gap: 24px;\n    grid-template-columns: 1fr 380px;\n  "]);return dt=function(){return t},t}function ht(){var t=Object(f.a)(["\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-template-columns: 1fr 488px;\n  grid-column-gap: 96px;\n  grid-template-rows: 1;\n  align-items: center;\n  position: relative;\n  margin-bottom: 50px;\n\n  ","\n\n  ","\n\n  @media (max-width: 540px) {\n    background: ",";\n  }\n\n  ","\n"]);return ht=function(){return t},t}function gt(){var t=Object(f.a)(["\n    grid-template-columns: 1fr;\n    \n    &:not(:last-child) {\n      margin-bottom: 0;\n    }\n  "]);return gt=function(){return t},t}function jt(){var t=Object(f.a)(["\n    grid-template-columns: 1fr 1fr;\n  "]);return jt=function(){return t},t}function xt(){var t=Object(f.a)(["\n  position: relative;\n  display: grid;\n  grid-template-columns: ",";\n  grid-template-rows: 2;\n  column-gap: 30px;\n\n  &:not(:last-child) {\n    margin-bottom: 75px;\n  }\n\n  ","\n\n  ","\n"]);return xt=function(){return t},t}function mt(){var t=Object(f.a)(["\n  p {\n    display: -webkit-box;\n  }\n\n  h2 {\n    margin-bottom: 10px;\n  }\n"]);return mt=function(){return t},t}function Ot(){var t=Object(f.a)(["\n    -webkit-line-clamp: 3;\n  "]);return Ot=function(){return t},t}function vt(){var t=Object(f.a)(["\n  text-overflow: ellipsis;\n  overflow-wrap: normal;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  display: -webkit-box;\n  white-space: normal;\n  overflow: hidden;\n\n  ","\n"]);return vt=function(){return t},t}var yt=Object(b.b)(vt(),j.a.phablet(Ot())),wt=Object(b.b)(mt()),kt=Object(r.a)("div",{target:"em1cp5v0"})("transition:opacity 0.25s;",(function(t){return t.alwaysShowAllDetails&&wt}),""),Lt=function(t){return Object(b.b)(xt(),t.reverse?"457px 1fr":"1fr 457px",j.a.desktop_medium(jt()),j.a.tablet(gt()))},Pt=function(t){return Object(b.b)(ht(),j.a.desktop(dt()),j.a.tablet(bt()),t.theme.colors.card,j.a.phablet(ft()))},zt=function(t){return Object(b.b)(pt(),j.a.tablet(st()),t.theme.colors.card,j.a.phablet(lt()))},qt=function(t){return Object(b.b)(ut(),t.hasOnlyOneArticle?"1fr":"1fr 1fr")},Rt=Object(r.a)("div",{target:"em1cp5v1"})((function(t){return"tiles"===t.gridLayout?Lt:qt}),""),St=Object(r.a)("div",{target:"em1cp5v2"})((function(t){return"rows"===t.gridLayout?Pt:zt}),""),Ct=Object(r.a)("div",{target:"em1cp5v3"})("position:relative;height:",(function(t){return"tiles"===t.gridLayout?"280px":"220px"}),";box-shadow:0 30px 60px -10px rgba(0,0,0,",(function(t){return t.narrow?.22:.3}),"),0 18px 36px -18px rgba(0,0,0,",(function(t){return t.narrow?.25:.33}),");margin-bottom:",(function(t){return"tiles"===t.gridLayout?"30px":0}),";transition:transform 0.3s var(--ease-out-quad),box-shadow 0.3s var(--ease-out-quad);& > div{height:100%;}",j.a.tablet(ct())," ",j.a.phablet(it()),""),It=Object(r.a)(B.a.h2,{target:"em1cp5v4"})("font-size:21px;font-family:",(function(t){return t.theme.fonts.serif}),";margin-bottom:",(function(t){return t.hasOverflow&&"tiles"===t.gridLayout?"35px":"10px"}),";transition:color 0.3s ease-in-out;",yt,";color:",(function(t){return t.theme.colors.primary}),";",j.a.desktop(ot())," ",j.a.tablet(at())," ",j.a.phablet(rt()),""),_t=Object(r.a)("p",{target:"em1cp5v5"})(yt,";font-size:16px;margin-bottom:10px;color:",(function(t){return t.theme.colors.grey}),";display:",(function(t){return t.hasOverflow&&"tiles"===t.gridLayout?"none":"box"}),";max-width:",(function(t){return t.narrow?"415px":"515px"}),";",j.a.desktop(et())," ",j.a.phablet(nt())," ",j.a.phablet(tt()),""),At=Object(r.a)("div",{target:"em1cp5v6"})("font-weight:600;font-size:16px;color:",(function(t){return t.theme.colors.grey}),";opacity:0.33;",j.a.phablet($()),""),Tt=Object(r.a)(d.Link,{target:"em1cp5v7"})("position:relative;display:block;width:100%;height:100%;top:0;left:0;border-radius:5px;z-index:1;transition:transform 0.33s var(--ease-out-quart);-webkit-tap-highlight-color:rgba(255,255,255,0);&:hover ",Ct,",&:focus ",Ct,"{transform:translateY(-1px);box-shadow:0 50px 80px -20px rgba(0,0,0,0.27),0 30px 50px -30px rgba(0,0,0,0.3);}&:hover h2,&:focus h2{color:",(function(t){return t.theme.colors.secondary}),";}&[data-a11y='true']:focus::after{content:'';position:absolute;left:-1.5%;top:-2%;width:103%;height:104%;border:3px solid ",(function(t){return t.theme.colors.primary}),";background:rgba(255,255,255,0.01);border-radius:5px;}",j.a.phablet(Z(),Ct),""),Ht=function(t){var n=t.article,e=t.narrow;if(!n)return null;var r=Object(a.useContext)(C.a).gridLayout,o=e&&n.title.length>35,i=e?n.hero.narrow:n.hero.regular,c=i&&0!==Object.keys(i).length&&i.constructor===Object;return Object(x.jsx)(Tt,{to:n.slug,"data-a11y":"false"},Object(x.jsx)(St,{gridLayout:r},Object(x.jsx)(Ct,{narrow:e,gridLayout:r},c?Object(x.jsx)(Q.c,{src:i}):Object(x.jsx)(Q.a,null)),Object(x.jsx)("div",null,Object(x.jsx)(It,{dark:!0,hasOverflow:o,gridLayout:r},n.title),Object(x.jsx)(_t,{narrow:e,hasOverflow:o,gridLayout:r},n.excerpt),Object(x.jsx)(At,null,n.date," · ",n.timeToRead," min read"))))},Mt=function(t){var n=t.articles,e=t.alwaysShowAllDetails;if(!n)return null;var r=1===n.length,o=Object(a.useContext)(C.a),i=o.gridLayout,c=void 0===i?"tiles":i,u=o.hasSetGridLayout,l=o.getGridLayout,s=n.reduce((function(t,n,e,r){return e%2==0&&t.push(r.slice(e,e+2)),t}),[]);return Object(a.useEffect)((function(){return l()}),[]),Object(x.jsx)(kt,{style:{opacity:u?1:0},alwaysShowAllDetails:e},s.map((function(t,n){var e=n%2!=0,a=n%2!=1;return Object(x.jsx)(Rt,{key:n,gridLayout:c,hasOnlyOneArticle:r,reverse:e},Object(x.jsx)(Ht,{article:t[0],narrow:e}),Object(x.jsx)(Ht,{article:t[1],narrow:a}))})))},Nt=Object(r.a)("div",{target:"ekwlgd30"})((function(t){return t.show&&"margin-top: 95px;"}),"");n.default=function(t){var n=t.location,e=t.pageContext,r=e.group,a=e.additionalContext.authors;return Object(x.jsx)(u.a,null,Object(x.jsx)(c.a,{pathname:n.pathname}),Object(x.jsx)(V,{authors:a}),Object(x.jsx)(i.a,{narrow:!0},Object(x.jsx)(Mt,{articles:r}),Object(x.jsx)(Nt,{show:e.pageCount>1},Object(x.jsx)(R,e))))}},oM0X:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));e("q1tI");var r=e("6Nk2"),a=e("tjOp"),o=e("qKvR"),i=function(){return Object(o.jsx)(r.a,null,"Hey there"," ",Object(o.jsx)("span",{"aria-label":"Wave Hello",role:"img"},"👋")," ",", my name is ",Object(o.jsx)("strong",null,"David (Min Xiao) Li"),". I'm a software engineer currently based out of"," ",Object(o.jsx)("strong",null,"Vancouver, Canada"),". I currently work at ",Object(o.jsx)(a.a,{href:"https://aws.amazon.com/"},"Amazon Web Services"),".")}},tjOp:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e("wTIg"),a=Object(r.a)("a",{target:"e19uhvow0"})("color:",(function(t){return t.theme.colors.primary}),";&:hover,&:focus{color:",(function(t){return t.theme.colors.primaryLight}),";}")},vuIU:function(t,n,e){"use strict";function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),t}e.d(n,"a",(function(){return a}))},zIkO:function(t,n,e){"use strict";var r=e("KVAl");e.d(n,"a",(function(){return r.a}))}}]);
//# sourceMappingURL=component---src-templates-main-template-tsx-5973b46e226138b74f22.js.map