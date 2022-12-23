(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))e(i);new MutationObserver(i=>{for(const u of i)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&e(f)}).observe(document,{childList:!0,subtree:!0});function t(i){const u={};return i.integrity&&(u.integrity=i.integrity),i.referrerpolicy&&(u.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?u.credentials="include":i.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function e(i){if(i.ep)return;i.ep=!0;const u=t(i);fetch(i.href,u)}})();const un=document.querySelector("#btn-draw-card"),fn=document.querySelector("#btn-stop"),Pr=document.querySelector("#btn-new-game"),qn=document.querySelectorAll("h1 small"),Fn=document.querySelectorAll(".cards-container"),Pn=document.querySelector("#result-container"),zn=(n,r)=>{const t=document.createElement("img");t.classList.add("card"),t.src=`assets/cards/${r}.png`,Fn[n].append(t)},zr=(n,r)=>{qn[n].innerText=r},Ur=()=>{Fn.forEach(n=>n.innerHTML=""),qn.forEach(n=>n.innerText=0),un.disabled=!1,fn.disabled=!1,Pn.innerHTML=""},J=()=>{un.disabled=!0,fn.disabled=!0},Wr=(n,r)=>{let t=document.createElement("div");t.classList=`alert alert-${r} mb-0`,t.innerText=n,Pn.append(t)},Gr={btnDrawCard:un,btnStop:fn,btnNewGame:Pr},Hr=n=>{if(!n)throw new Error("Card is mandatory as a string value");const r=n.slice(0,-1);return isNaN(r)?r==="A"?11:10:parseInt(r)},Jr=n=>{setTimeout(()=>{let r="CPU wins...",t="danger";n[0]>21?r="You lose...":n[0]===n[n.length-1]?(r="Draw",t="warning"):(n[n.length-1]>21||n[0]>n[n.length-1])&&(r="You win!!!",t="success"),Wr(r,t)},200)},Un=n=>{if(!n||n.length===0)throw new Error("Deck is empty");return n.pop()},Wn=(n,r,t)=>{n[r]+=Hr(t),zr(r,n[r])},Y=(n,r)=>{if(!r||r.length===0)throw new Error("Players score required");do{const t=Un(n);Wn(r,r.length-1,t),zn(r.length-1,t)}while(r[r.length-1]<r[0]&&r[0]<=21);Jr(r)};var Gn="1.13.6",Nn=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global||Function("return this")()||{},G=Array.prototype,ln=Object.prototype,In=typeof Symbol<"u"?Symbol.prototype:null,Yr=G.push,R=G.slice,L=ln.toString,Xr=ln.hasOwnProperty,Hn=typeof ArrayBuffer<"u",Qr=typeof DataView<"u",Zr=Array.isArray,Sn=Object.keys,Bn=Object.create,Tn=Hn&&ArrayBuffer.isView,Kr=isNaN,xr=isFinite,Jn=!{toString:null}.propertyIsEnumerable("toString"),Ln=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],kr=Math.pow(2,53)-1;function m(n,r){return r=r==null?n.length-1:+r,function(){for(var t=Math.max(arguments.length-r,0),e=Array(t),i=0;i<t;i++)e[i]=arguments[i+r];switch(r){case 0:return n.call(this,e);case 1:return n.call(this,arguments[0],e);case 2:return n.call(this,arguments[0],arguments[1],e)}var u=Array(r+1);for(i=0;i<r;i++)u[i]=arguments[i];return u[r]=e,n.apply(this,u)}}function M(n){var r=typeof n;return r==="function"||r==="object"&&!!n}function br(n){return n===null}function Yn(n){return n===void 0}function Xn(n){return n===!0||n===!1||L.call(n)==="[object Boolean]"}function jr(n){return!!(n&&n.nodeType===1)}function h(n){var r="[object "+n+"]";return function(t){return L.call(t)===r}}const an=h("String"),Qn=h("Number"),nt=h("Date"),rt=h("RegExp"),tt=h("Error"),Zn=h("Symbol"),Kn=h("ArrayBuffer");var xn=h("Function"),et=Nn.document&&Nn.document.childNodes;typeof/./!="function"&&typeof Int8Array!="object"&&typeof et!="function"&&(xn=function(n){return typeof n=="function"||!1});const g=xn,kn=h("Object");var bn=Qr&&kn(new DataView(new ArrayBuffer(8))),on=typeof Map<"u"&&kn(new Map),ut=h("DataView");function it(n){return n!=null&&g(n.getInt8)&&Kn(n.buffer)}const z=bn?it:ut,N=Zr||h("Array");function E(n,r){return n!=null&&Xr.call(n,r)}var x=h("Arguments");(function(){x(arguments)||(x=function(n){return E(n,"callee")})})();const cn=x;function ft(n){return!Zn(n)&&xr(n)&&!isNaN(parseFloat(n))}function jn(n){return Qn(n)&&Kr(n)}function nr(n){return function(){return n}}function rr(n){return function(r){var t=n(r);return typeof t=="number"&&t>=0&&t<=kr}}function tr(n){return function(r){return r==null?void 0:r[n]}}const U=tr("byteLength"),lt=rr(U);var at=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;function ot(n){return Tn?Tn(n)&&!z(n):lt(n)&&at.test(L.call(n))}const er=Hn?ot:nr(!1),d=tr("length");function ct(n){for(var r={},t=n.length,e=0;e<t;++e)r[n[e]]=!0;return{contains:function(i){return r[i]===!0},push:function(i){return r[i]=!0,n.push(i)}}}function ur(n,r){r=ct(r);var t=Ln.length,e=n.constructor,i=g(e)&&e.prototype||ln,u="constructor";for(E(n,u)&&!r.contains(u)&&r.push(u);t--;)u=Ln[t],u in n&&n[u]!==i[u]&&!r.contains(u)&&r.push(u)}function v(n){if(!M(n))return[];if(Sn)return Sn(n);var r=[];for(var t in n)E(n,t)&&r.push(t);return Jn&&ur(n,r),r}function st(n){if(n==null)return!0;var r=d(n);return typeof r=="number"&&(N(n)||an(n)||cn(n))?r===0:d(v(n))===0}function ir(n,r){var t=v(r),e=t.length;if(n==null)return!e;for(var i=Object(n),u=0;u<e;u++){var f=t[u];if(r[f]!==i[f]||!(f in i))return!1}return!0}function c(n){if(n instanceof c)return n;if(!(this instanceof c))return new c(n);this._wrapped=n}c.VERSION=Gn;c.prototype.value=function(){return this._wrapped};c.prototype.valueOf=c.prototype.toJSON=c.prototype.value;c.prototype.toString=function(){return String(this._wrapped)};function Dn(n){return new Uint8Array(n.buffer||n,n.byteOffset||0,U(n))}var $n="[object DataView]";function k(n,r,t,e){if(n===r)return n!==0||1/n===1/r;if(n==null||r==null)return!1;if(n!==n)return r!==r;var i=typeof n;return i!=="function"&&i!=="object"&&typeof r!="object"?!1:fr(n,r,t,e)}function fr(n,r,t,e){n instanceof c&&(n=n._wrapped),r instanceof c&&(r=r._wrapped);var i=L.call(n);if(i!==L.call(r))return!1;if(bn&&i=="[object Object]"&&z(n)){if(!z(r))return!1;i=$n}switch(i){case"[object RegExp]":case"[object String]":return""+n==""+r;case"[object Number]":return+n!=+n?+r!=+r:+n==0?1/+n===1/r:+n==+r;case"[object Date]":case"[object Boolean]":return+n==+r;case"[object Symbol]":return In.valueOf.call(n)===In.valueOf.call(r);case"[object ArrayBuffer]":case $n:return fr(Dn(n),Dn(r),t,e)}var u=i==="[object Array]";if(!u&&er(n)){var f=U(n);if(f!==U(r))return!1;if(n.buffer===r.buffer&&n.byteOffset===r.byteOffset)return!0;u=!0}if(!u){if(typeof n!="object"||typeof r!="object")return!1;var l=n.constructor,o=r.constructor;if(l!==o&&!(g(l)&&l instanceof l&&g(o)&&o instanceof o)&&"constructor"in n&&"constructor"in r)return!1}t=t||[],e=e||[];for(var a=t.length;a--;)if(t[a]===n)return e[a]===r;if(t.push(n),e.push(r),u){if(a=n.length,a!==r.length)return!1;for(;a--;)if(!k(n[a],r[a],t,e))return!1}else{var s=v(n),p;if(a=s.length,v(r).length!==a)return!1;for(;a--;)if(p=s[a],!(E(r,p)&&k(n[p],r[p],t,e)))return!1}return t.pop(),e.pop(),!0}function vt(n,r){return k(n,r)}function C(n){if(!M(n))return[];var r=[];for(var t in n)r.push(t);return Jn&&ur(n,r),r}function sn(n){var r=d(n);return function(t){if(t==null)return!1;var e=C(t);if(d(e))return!1;for(var i=0;i<r;i++)if(!g(t[n[i]]))return!1;return n!==or||!g(t[vn])}}var vn="forEach",lr="has",hn=["clear","delete"],ar=["get",lr,"set"],ht=hn.concat(vn,ar),or=hn.concat(ar),pt=["add"].concat(hn,vn,lr);const gt=on?sn(ht):h("Map"),mt=on?sn(or):h("WeakMap"),dt=on?sn(pt):h("Set"),yt=h("WeakSet");function B(n){for(var r=v(n),t=r.length,e=Array(t),i=0;i<t;i++)e[i]=n[r[i]];return e}function wt(n){for(var r=v(n),t=r.length,e=Array(t),i=0;i<t;i++)e[i]=[r[i],n[r[i]]];return e}function cr(n){for(var r={},t=v(n),e=0,i=t.length;e<i;e++)r[n[t[e]]]=t[e];return r}function b(n){var r=[];for(var t in n)g(n[t])&&r.push(t);return r.sort()}function pn(n,r){return function(t){var e=arguments.length;if(r&&(t=Object(t)),e<2||t==null)return t;for(var i=1;i<e;i++)for(var u=arguments[i],f=n(u),l=f.length,o=0;o<l;o++){var a=f[o];(!r||t[a]===void 0)&&(t[a]=u[a])}return t}}const sr=pn(C),W=pn(v),vr=pn(C,!0);function _t(){return function(){}}function hr(n){if(!M(n))return{};if(Bn)return Bn(n);var r=_t();r.prototype=n;var t=new r;return r.prototype=null,t}function At(n,r){var t=hr(n);return r&&W(t,r),t}function Et(n){return M(n)?N(n)?n.slice():sr({},n):n}function Ot(n,r){return r(n),n}function pr(n){return N(n)?n:[n]}c.toPath=pr;function V(n){return c.toPath(n)}function gn(n,r){for(var t=r.length,e=0;e<t;e++){if(n==null)return;n=n[r[e]]}return t?n:void 0}function gr(n,r,t){var e=gn(n,V(r));return Yn(e)?t:e}function Mt(n,r){r=V(r);for(var t=r.length,e=0;e<t;e++){var i=r[e];if(!E(n,i))return!1;n=n[i]}return!!t}function mn(n){return n}function D(n){return n=W({},n),function(r){return ir(r,n)}}function dn(n){return n=V(n),function(r){return gn(r,n)}}function q(n,r,t){if(r===void 0)return n;switch(t??3){case 1:return function(e){return n.call(r,e)};case 3:return function(e,i,u){return n.call(r,e,i,u)};case 4:return function(e,i,u,f){return n.call(r,e,i,u,f)}}return function(){return n.apply(r,arguments)}}function mr(n,r,t){return n==null?mn:g(n)?q(n,r,t):M(n)&&!N(n)?D(n):dn(n)}function yn(n,r){return mr(n,r,1/0)}c.iteratee=yn;function y(n,r,t){return c.iteratee!==yn?c.iteratee(n,r):mr(n,r,t)}function Nt(n,r,t){r=y(r,t);for(var e=v(n),i=e.length,u={},f=0;f<i;f++){var l=e[f];u[l]=r(n[l],l,n)}return u}function dr(){}function It(n){return n==null?dr:function(r){return gr(n,r)}}function St(n,r,t){var e=Array(Math.max(0,n));r=q(r,t,1);for(var i=0;i<n;i++)e[i]=r(i);return e}function j(n,r){return r==null&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))}const $=Date.now||function(){return new Date().getTime()};function yr(n){var r=function(u){return n[u]},t="(?:"+v(n).join("|")+")",e=RegExp(t),i=RegExp(t,"g");return function(u){return u=u==null?"":""+u,e.test(u)?u.replace(i,r):u}}const wr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},Bt=yr(wr),Tt=cr(wr),Lt=yr(Tt),Dt=c.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var X=/(.)^/,$t={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},Rt=/\\|'|\r|\n|\u2028|\u2029/g;function Ct(n){return"\\"+$t[n]}var Vt=/^\s*(\w|\$)+\s*$/;function qt(n,r,t){!r&&t&&(r=t),r=vr({},r,c.templateSettings);var e=RegExp([(r.escape||X).source,(r.interpolate||X).source,(r.evaluate||X).source].join("|")+"|$","g"),i=0,u="__p+='";n.replace(e,function(a,s,p,On,Mn){return u+=n.slice(i,Mn).replace(Rt,Ct),i=Mn+a.length,s?u+=`'+
((__t=(`+s+`))==null?'':_.escape(__t))+
'`:p?u+=`'+
((__t=(`+p+`))==null?'':__t)+
'`:On&&(u+=`';
`+On+`
__p+='`),a}),u+=`';
`;var f=r.variable;if(f){if(!Vt.test(f))throw new Error("variable is not a bare identifier: "+f)}else u=`with(obj||{}){
`+u+`}
`,f="obj";u=`var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
`+u+`return __p;
`;var l;try{l=new Function(f,"_",u)}catch(a){throw a.source=u,a}var o=function(a){return l.call(this,a,c)};return o.source="function("+f+`){
`+u+"}",o}function Ft(n,r,t){r=V(r);var e=r.length;if(!e)return g(t)?t.call(n):t;for(var i=0;i<e;i++){var u=n==null?void 0:n[r[i]];u===void 0&&(u=t,i=e),n=g(u)?u.call(n):u}return n}var Pt=0;function zt(n){var r=++Pt+"";return n?n+r:r}function Ut(n){var r=c(n);return r._chain=!0,r}function _r(n,r,t,e,i){if(!(e instanceof r))return n.apply(t,i);var u=hr(n.prototype),f=n.apply(u,i);return M(f)?f:u}var T=m(function(n,r){var t=T.placeholder,e=function(){for(var i=0,u=r.length,f=Array(u),l=0;l<u;l++)f[l]=r[l]===t?arguments[i++]:r[l];for(;i<arguments.length;)f.push(arguments[i++]);return _r(n,e,this,this,f)};return e});T.placeholder=c;const Ar=m(function(n,r,t){if(!g(n))throw new TypeError("Bind must be called on a function");var e=m(function(i){return _r(n,e,r,this,t.concat(i))});return e}),w=rr(d);function I(n,r,t,e){if(e=e||[],!r&&r!==0)r=1/0;else if(r<=0)return e.concat(n);for(var i=e.length,u=0,f=d(n);u<f;u++){var l=n[u];if(w(l)&&(N(l)||cn(l)))if(r>1)I(l,r-1,t,e),i=e.length;else for(var o=0,a=l.length;o<a;)e[i++]=l[o++];else t||(e[i++]=l)}return e}const Wt=m(function(n,r){r=I(r,!1,!1);var t=r.length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=Ar(n[e],n)}return n});function Gt(n,r){var t=function(e){var i=t.cache,u=""+(r?r.apply(this,arguments):e);return E(i,u)||(i[u]=n.apply(this,arguments)),i[u]};return t.cache={},t}const Er=m(function(n,r,t){return setTimeout(function(){return n.apply(null,t)},r)}),Ht=T(Er,c,1);function Jt(n,r,t){var e,i,u,f,l=0;t||(t={});var o=function(){l=t.leading===!1?0:$(),e=null,f=n.apply(i,u),e||(i=u=null)},a=function(){var s=$();!l&&t.leading===!1&&(l=s);var p=r-(s-l);return i=this,u=arguments,p<=0||p>r?(e&&(clearTimeout(e),e=null),l=s,f=n.apply(i,u),e||(i=u=null)):!e&&t.trailing!==!1&&(e=setTimeout(o,p)),f};return a.cancel=function(){clearTimeout(e),l=0,e=i=u=null},a}function Yt(n,r,t){var e,i,u,f,l,o=function(){var s=$()-i;r>s?e=setTimeout(o,r-s):(e=null,t||(f=n.apply(l,u)),e||(u=l=null))},a=m(function(s){return l=this,u=s,i=$(),e||(e=setTimeout(o,r),t&&(f=n.apply(l,u))),f});return a.cancel=function(){clearTimeout(e),e=u=l=null},a}function Xt(n,r){return T(r,n)}function wn(n){return function(){return!n.apply(this,arguments)}}function Qt(){var n=arguments,r=n.length-1;return function(){for(var t=r,e=n[r].apply(this,arguments);t--;)e=n[t].call(this,e);return e}}function Zt(n,r){return function(){if(--n<1)return r.apply(this,arguments)}}function Or(n,r){var t;return function(){return--n>0&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}}const Kt=T(Or,2);function Mr(n,r,t){r=y(r,t);for(var e=v(n),i,u=0,f=e.length;u<f;u++)if(i=e[u],r(n[i],i,n))return i}function Nr(n){return function(r,t,e){t=y(t,e);for(var i=d(r),u=n>0?0:i-1;u>=0&&u<i;u+=n)if(t(r[u],u,r))return u;return-1}}const _n=Nr(1),Ir=Nr(-1);function Sr(n,r,t,e){t=y(t,e,1);for(var i=t(r),u=0,f=d(n);u<f;){var l=Math.floor((u+f)/2);t(n[l])<i?u=l+1:f=l}return u}function Br(n,r,t){return function(e,i,u){var f=0,l=d(e);if(typeof u=="number")n>0?f=u>=0?u:Math.max(u+l,f):l=u>=0?Math.min(u+1,l):u+l+1;else if(t&&u&&l)return u=t(e,i),e[u]===i?u:-1;if(i!==i)return u=r(R.call(e,f,l),jn),u>=0?u+f:-1;for(u=n>0?f:l-1;u>=0&&u<l;u+=n)if(e[u]===i)return u;return-1}}const Tr=Br(1,_n,Sr),xt=Br(-1,Ir);function nn(n,r,t){var e=w(n)?_n:Mr,i=e(n,r,t);if(i!==void 0&&i!==-1)return n[i]}function kt(n,r){return nn(n,D(r))}function A(n,r,t){r=q(r,t);var e,i;if(w(n))for(e=0,i=n.length;e<i;e++)r(n[e],e,n);else{var u=v(n);for(e=0,i=u.length;e<i;e++)r(n[u[e]],u[e],n)}return n}function O(n,r,t){r=y(r,t);for(var e=!w(n)&&v(n),i=(e||n).length,u=Array(i),f=0;f<i;f++){var l=e?e[f]:f;u[f]=r(n[l],l,n)}return u}function Lr(n){var r=function(t,e,i,u){var f=!w(t)&&v(t),l=(f||t).length,o=n>0?0:l-1;for(u||(i=t[f?f[o]:o],o+=n);o>=0&&o<l;o+=n){var a=f?f[o]:o;i=e(i,t[a],a,t)}return i};return function(t,e,i,u){var f=arguments.length>=3;return r(t,q(e,u,4),i,f)}}const Q=Lr(1),Rn=Lr(-1);function S(n,r,t){var e=[];return r=y(r,t),A(n,function(i,u,f){r(i,u,f)&&e.push(i)}),e}function bt(n,r,t){return S(n,wn(y(r)),t)}function Cn(n,r,t){r=y(r,t);for(var e=!w(n)&&v(n),i=(e||n).length,u=0;u<i;u++){var f=e?e[u]:u;if(!r(n[f],f,n))return!1}return!0}function Vn(n,r,t){r=y(r,t);for(var e=!w(n)&&v(n),i=(e||n).length,u=0;u<i;u++){var f=e?e[u]:u;if(r(n[f],f,n))return!0}return!1}function _(n,r,t,e){return w(n)||(n=B(n)),(typeof t!="number"||e)&&(t=0),Tr(n,r,t)>=0}const jt=m(function(n,r,t){var e,i;return g(r)?i=r:(r=V(r),e=r.slice(0,-1),r=r[r.length-1]),O(n,function(u){var f=i;if(!f){if(e&&e.length&&(u=gn(u,e)),u==null)return;f=u[r]}return f==null?f:f.apply(u,t)})});function An(n,r){return O(n,dn(r))}function ne(n,r){return S(n,D(r))}function Dr(n,r,t){var e=-1/0,i=-1/0,u,f;if(r==null||typeof r=="number"&&typeof n[0]!="object"&&n!=null){n=w(n)?n:B(n);for(var l=0,o=n.length;l<o;l++)u=n[l],u!=null&&u>e&&(e=u)}else r=y(r,t),A(n,function(a,s,p){f=r(a,s,p),(f>i||f===-1/0&&e===-1/0)&&(e=a,i=f)});return e}function re(n,r,t){var e=1/0,i=1/0,u,f;if(r==null||typeof r=="number"&&typeof n[0]!="object"&&n!=null){n=w(n)?n:B(n);for(var l=0,o=n.length;l<o;l++)u=n[l],u!=null&&u<e&&(e=u)}else r=y(r,t),A(n,function(a,s,p){f=r(a,s,p),(f<i||f===1/0&&e===1/0)&&(e=a,i=f)});return e}var te=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function $r(n){return n?N(n)?R.call(n):an(n)?n.match(te):w(n)?O(n,mn):B(n):[]}function Rr(n,r,t){if(r==null||t)return w(n)||(n=B(n)),n[j(n.length-1)];var e=$r(n),i=d(e);r=Math.max(Math.min(r,i),0);for(var u=i-1,f=0;f<r;f++){var l=j(f,u),o=e[f];e[f]=e[l],e[l]=o}return e.slice(0,r)}function ee(n){return Rr(n,1/0)}function ue(n,r,t){var e=0;return r=y(r,t),An(O(n,function(i,u,f){return{value:i,index:e++,criteria:r(i,u,f)}}).sort(function(i,u){var f=i.criteria,l=u.criteria;if(f!==l){if(f>l||f===void 0)return 1;if(f<l||l===void 0)return-1}return i.index-u.index}),"value")}function H(n,r){return function(t,e,i){var u=r?[[],[]]:{};return e=y(e,i),A(t,function(f,l){var o=e(f,l,t);n(u,f,o)}),u}}const ie=H(function(n,r,t){E(n,t)?n[t].push(r):n[t]=[r]}),fe=H(function(n,r,t){n[t]=r}),le=H(function(n,r,t){E(n,t)?n[t]++:n[t]=1}),ae=H(function(n,r,t){n[t?0:1].push(r)},!0);function oe(n){return n==null?0:w(n)?n.length:v(n).length}function ce(n,r,t){return r in t}const Cr=m(function(n,r){var t={},e=r[0];if(n==null)return t;g(e)?(r.length>1&&(e=q(e,r[1])),r=C(n)):(e=ce,r=I(r,!1,!1),n=Object(n));for(var i=0,u=r.length;i<u;i++){var f=r[i],l=n[f];e(l,f,n)&&(t[f]=l)}return t}),se=m(function(n,r){var t=r[0],e;return g(t)?(t=wn(t),r.length>1&&(e=r[1])):(r=O(I(r,!1,!1),String),t=function(i,u){return!_(r,u)}),Cr(n,t,e)});function Vr(n,r,t){return R.call(n,0,Math.max(0,n.length-(r==null||t?1:r)))}function Z(n,r,t){return n==null||n.length<1?r==null||t?void 0:[]:r==null||t?n[0]:Vr(n,n.length-r)}function P(n,r,t){return R.call(n,r==null||t?1:r)}function ve(n,r,t){return n==null||n.length<1?r==null||t?void 0:[]:r==null||t?n[n.length-1]:P(n,Math.max(0,n.length-r))}function he(n){return S(n,Boolean)}function pe(n,r){return I(n,r,!1)}const qr=m(function(n,r){return r=I(r,!0,!0),S(n,function(t){return!_(r,t)})}),ge=m(function(n,r){return qr(n,r)});function rn(n,r,t,e){Xn(r)||(e=t,t=r,r=!1),t!=null&&(t=y(t,e));for(var i=[],u=[],f=0,l=d(n);f<l;f++){var o=n[f],a=t?t(o,f,n):o;r&&!t?((!f||u!==a)&&i.push(o),u=a):t?_(u,a)||(u.push(a),i.push(o)):_(i,o)||i.push(o)}return i}const me=m(function(n){return rn(I(n,!0,!0))});function de(n){for(var r=[],t=arguments.length,e=0,i=d(n);e<i;e++){var u=n[e];if(!_(r,u)){var f;for(f=1;f<t&&_(arguments[f],u);f++);f===t&&r.push(u)}}return r}function tn(n){for(var r=n&&Dr(n,d).length||0,t=Array(r),e=0;e<r;e++)t[e]=An(n,e);return t}const ye=m(tn);function we(n,r){for(var t={},e=0,i=d(n);e<i;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t}function _e(n,r,t){r==null&&(r=n||0,n=0),t||(t=r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),i=Array(e),u=0;u<e;u++,n+=t)i[u]=n;return i}function Ae(n,r){if(r==null||r<1)return[];for(var t=[],e=0,i=n.length;e<i;)t.push(R.call(n,e,e+=r));return t}function En(n,r){return n._chain?c(r).chain():r}function Fr(n){return A(b(n),function(r){var t=c[r]=n[r];c.prototype[r]=function(){var e=[this._wrapped];return Yr.apply(e,arguments),En(this,t.apply(c,e))}}),c}A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var r=G[n];c.prototype[n]=function(){var t=this._wrapped;return t!=null&&(r.apply(t,arguments),(n==="shift"||n==="splice")&&t.length===0&&delete t[0]),En(this,t)}});A(["concat","join","slice"],function(n){var r=G[n];c.prototype[n]=function(){var t=this._wrapped;return t!=null&&(t=r.apply(t,arguments)),En(this,t)}});const Ee=Object.freeze(Object.defineProperty({__proto__:null,VERSION:Gn,restArguments:m,isObject:M,isNull:br,isUndefined:Yn,isBoolean:Xn,isElement:jr,isString:an,isNumber:Qn,isDate:nt,isRegExp:rt,isError:tt,isSymbol:Zn,isArrayBuffer:Kn,isDataView:z,isArray:N,isFunction:g,isArguments:cn,isFinite:ft,isNaN:jn,isTypedArray:er,isEmpty:st,isMatch:ir,isEqual:vt,isMap:gt,isWeakMap:mt,isSet:dt,isWeakSet:yt,keys:v,allKeys:C,values:B,pairs:wt,invert:cr,functions:b,methods:b,extend:sr,extendOwn:W,assign:W,defaults:vr,create:At,clone:Et,tap:Ot,get:gr,has:Mt,mapObject:Nt,identity:mn,constant:nr,noop:dr,toPath:pr,property:dn,propertyOf:It,matcher:D,matches:D,times:St,random:j,now:$,escape:Bt,unescape:Lt,templateSettings:Dt,template:qt,result:Ft,uniqueId:zt,chain:Ut,iteratee:yn,partial:T,bind:Ar,bindAll:Wt,memoize:Gt,delay:Er,defer:Ht,throttle:Jt,debounce:Yt,wrap:Xt,negate:wn,compose:Qt,after:Zt,before:Or,once:Kt,findKey:Mr,findIndex:_n,findLastIndex:Ir,sortedIndex:Sr,indexOf:Tr,lastIndexOf:xt,find:nn,detect:nn,findWhere:kt,each:A,forEach:A,map:O,collect:O,reduce:Q,foldl:Q,inject:Q,reduceRight:Rn,foldr:Rn,filter:S,select:S,reject:bt,every:Cn,all:Cn,some:Vn,any:Vn,contains:_,includes:_,include:_,invoke:jt,pluck:An,where:ne,max:Dr,min:re,shuffle:ee,sample:Rr,sortBy:ue,groupBy:ie,indexBy:fe,countBy:le,partition:ae,toArray:$r,size:oe,pick:Cr,omit:se,first:Z,head:Z,take:Z,initial:Vr,last:ve,rest:P,tail:P,drop:P,compact:he,flatten:pe,without:ge,uniq:rn,unique:rn,union:me,intersection:de,difference:qr,unzip:tn,transpose:tn,zip:ye,object:we,range:_e,chunk:Ae,mixin:Fr,default:c},Symbol.toStringTag,{value:"Module"}));var en=Fr(Ee);en._=en;const F=["C","D","H","S"],K=["A","J","Q","K"],Oe=()=>{if(!F||F.length===0)throw new Error("Card Colors are mandatory as an array of strings");if(!K||K.length===0)throw new Error("Card Letters are mandatory as an array of strings");const n=[];for(let r=2;r<=10;r++)for(let t of F)n.push(`${r}${t}`);for(let r of K)for(let t of F)n.push(`${r}${t}`);return en.shuffle(n)},Me=(()=>{let n=[],r=[];const{btnDrawCard:t,btnStop:e,btnNewGame:i}=Gr,u=(f=2)=>{n=Oe(),r=[];for(let l=0;l<f;l++)r.push(0);Ur()};return t.addEventListener("click",()=>{const f=Un(n);Wn(r,0,f),zn(0,f),(r[0]>21||r[0]===21)&&(J(),Y(n,r))}),e.addEventListener("click",()=>{J(),Y(n,r)}),i.addEventListener("click",()=>{u()}),{init:u}})();Me.init();