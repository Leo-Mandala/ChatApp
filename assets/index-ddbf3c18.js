(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Wr(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const oe={},hn=[],Ge=()=>{},Th=()=>!1,xh=/^on[^a-z]/,fi=t=>xh.test(t),$r=t=>t.startsWith("onUpdate:"),ye=Object.assign,jr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Rh=Object.prototype.hasOwnProperty,q=(t,e)=>Rh.call(t,e),U=Array.isArray,fn=t=>pi(t)==="[object Map]",La=t=>pi(t)==="[object Set]",W=t=>typeof t=="function",fe=t=>typeof t=="string",di=t=>typeof t=="symbol",le=t=>t!==null&&typeof t=="object",Fa=t=>(le(t)||W(t))&&W(t.then)&&W(t.catch),Ba=Object.prototype.toString,pi=t=>Ba.call(t),Nh=t=>pi(t).slice(8,-1),Ua=t=>pi(t)==="[object Object]",Vr=t=>fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Bs=Wr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_i=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ah=/-(\w)/g,bn=_i(t=>t.replace(Ah,(e,n)=>n?n.toUpperCase():"")),Ph=/\B([A-Z])/g,kn=_i(t=>t.replace(Ph,"-$1").toLowerCase()),Ha=_i(t=>t.charAt(0).toUpperCase()+t.slice(1)),Di=_i(t=>t?`on${Ha(t)}`:""),qt=(t,e)=>!Object.is(t,e),Us=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Vs=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},nr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let qo;const sr=()=>qo||(qo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function zr(t){if(U(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=fe(s)?Mh(s):zr(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(fe(t)||le(t))return t}const Oh=/;(?![^(]*\))/g,kh=/:([^]+)/,Dh=/\/\*[^]*?\*\//g;function Mh(t){const e={};return t.replace(Dh,"").split(Oh).forEach(n=>{if(n){const s=n.split(kh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function dn(t){let e="";if(fe(t))e=t;else if(U(t))for(let n=0;n<t.length;n++){const s=dn(t[n]);s&&(e+=s+" ")}else if(le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Lh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fh=Wr(Lh);function Wa(t){return!!t||t===""}const Dt=t=>fe(t)?t:t==null?"":U(t)||le(t)&&(t.toString===Ba||!W(t.toString))?JSON.stringify(t,$a,2):String(t),$a=(t,e)=>e&&e.__v_isRef?$a(t,e.value):fn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:La(e)?{[`Set(${e.size})`]:[...e.values()]}:le(e)&&!U(e)&&!Ua(e)?String(e):e;let Ue;class Bh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ue,!e&&Ue&&(this.index=(Ue.scopes||(Ue.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ue;try{return Ue=this,e()}finally{Ue=n}}}on(){Ue=this}off(){Ue=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Uh(t,e=Ue){e&&e.active&&e.effects.push(t)}function Hh(){return Ue}const Kr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ja=t=>(t.w&At)>0,Va=t=>(t.n&At)>0,Wh=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=At},$h=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];ja(i)&&!Va(i)?i.delete(t):e[n++]=i,i.w&=~At,i.n&=~At}e.length=n}},ir=new WeakMap;let Yn=0,At=1;const rr=30;let He;const Vt=Symbol(""),or=Symbol("");class qr{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Uh(this,s)}run(){if(!this.active)return this.fn();let e=He,n=St;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=He,He=this,St=!0,At=1<<++Yn,Yn<=rr?Wh(this):Go(this),this.fn()}finally{Yn<=rr&&$h(this),At=1<<--Yn,He=this.parent,St=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){He===this?this.deferStop=!0:this.active&&(Go(this),this.onStop&&this.onStop(),this.active=!1)}}function Go(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let St=!0;const za=[];function Dn(){za.push(St),St=!1}function Mn(){const t=za.pop();St=t===void 0?!0:t}function Oe(t,e,n){if(St&&He){let s=ir.get(t);s||ir.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Kr()),Ka(i)}}function Ka(t,e){let n=!1;Yn<=rr?Va(t)||(t.n|=At,n=!ja(t)):n=!t.has(He),n&&(t.add(He),He.deps.push(t))}function ht(t,e,n,s,i,r){const o=ir.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&U(t)){const a=Number(s);o.forEach((c,u)=>{(u==="length"||!di(u)&&u>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":U(t)?Vr(n)&&l.push(o.get("length")):(l.push(o.get(Vt)),fn(t)&&l.push(o.get(or)));break;case"delete":U(t)||(l.push(o.get(Vt)),fn(t)&&l.push(o.get(or)));break;case"set":fn(t)&&l.push(o.get(Vt));break}if(l.length===1)l[0]&&lr(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);lr(Kr(a))}}function lr(t,e){const n=U(t)?t:[...t];for(const s of n)s.computed&&Yo(s);for(const s of n)s.computed||Yo(s)}function Yo(t,e){(t!==He||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const jh=Wr("__proto__,__v_isRef,__isVue"),qa=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(di)),Qo=Vh();function Vh(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Y(this);for(let r=0,o=this.length;r<o;r++)Oe(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(Y)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Dn();const s=Y(this)[e].apply(this,n);return Mn(),s}}),t}function zh(t){const e=Y(this);return Oe(e,"has",t),e.hasOwnProperty(t)}class Ga{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,s){const i=this._isReadonly,r=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw"&&s===(i?r?rf:Ja:r?Xa:Qa).get(e))return e;const o=U(e);if(!i){if(o&&q(Qo,n))return Reflect.get(Qo,n,s);if(n==="hasOwnProperty")return zh}const l=Reflect.get(e,n,s);return(di(n)?qa.has(n):jh(n))||(i||Oe(e,"get",n),r)?l:Ie(l)?o&&Vr(n)?l:l.value:le(l)?i?ec(l):bs(l):l}}class Ya extends Ga{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(wn(r)&&Ie(r)&&!Ie(s))return!1;if(!this._shallow&&(!zs(s)&&!wn(s)&&(r=Y(r),s=Y(s)),!U(e)&&Ie(r)&&!Ie(s)))return r.value=s,!0;const o=U(e)&&Vr(n)?Number(n)<e.length:q(e,n),l=Reflect.set(e,n,s,i);return e===Y(i)&&(o?qt(s,r)&&ht(e,"set",n,s):ht(e,"add",n,s)),l}deleteProperty(e,n){const s=q(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&ht(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!di(n)||!qa.has(n))&&Oe(e,"has",n),s}ownKeys(e){return Oe(e,"iterate",U(e)?"length":Vt),Reflect.ownKeys(e)}}class Kh extends Ga{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const qh=new Ya,Gh=new Kh,Yh=new Ya(!0),Gr=t=>t,gi=t=>Reflect.getPrototypeOf(t);function As(t,e,n=!1,s=!1){t=t.__v_raw;const i=Y(t),r=Y(e);n||(qt(e,r)&&Oe(i,"get",e),Oe(i,"get",r));const{has:o}=gi(i),l=s?Gr:n?Xr:rs;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function Ps(t,e=!1){const n=this.__v_raw,s=Y(n),i=Y(t);return e||(qt(t,i)&&Oe(s,"has",t),Oe(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Os(t,e=!1){return t=t.__v_raw,!e&&Oe(Y(t),"iterate",Vt),Reflect.get(t,"size",t)}function Xo(t){t=Y(t);const e=Y(this);return gi(e).has.call(e,t)||(e.add(t),ht(e,"add",t,t)),this}function Jo(t,e){e=Y(e);const n=Y(this),{has:s,get:i}=gi(n);let r=s.call(n,t);r||(t=Y(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?qt(e,o)&&ht(n,"set",t,e):ht(n,"add",t,e),this}function Zo(t){const e=Y(this),{has:n,get:s}=gi(e);let i=n.call(e,t);i||(t=Y(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&ht(e,"delete",t,void 0),r}function el(){const t=Y(this),e=t.size!==0,n=t.clear();return e&&ht(t,"clear",void 0,void 0),n}function ks(t,e){return function(s,i){const r=this,o=r.__v_raw,l=Y(o),a=e?Gr:t?Xr:rs;return!t&&Oe(l,"iterate",Vt),o.forEach((c,u)=>s.call(i,a(c),a(u),r))}}function Ds(t,e,n){return function(...s){const i=this.__v_raw,r=Y(i),o=fn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?Gr:e?Xr:rs;return!e&&Oe(r,"iterate",a?or:Vt),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:l?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Ct(t){return function(...e){return t==="delete"?!1:this}}function Qh(){const t={get(r){return As(this,r)},get size(){return Os(this)},has:Ps,add:Xo,set:Jo,delete:Zo,clear:el,forEach:ks(!1,!1)},e={get(r){return As(this,r,!1,!0)},get size(){return Os(this)},has:Ps,add:Xo,set:Jo,delete:Zo,clear:el,forEach:ks(!1,!0)},n={get(r){return As(this,r,!0)},get size(){return Os(this,!0)},has(r){return Ps.call(this,r,!0)},add:Ct("add"),set:Ct("set"),delete:Ct("delete"),clear:Ct("clear"),forEach:ks(!0,!1)},s={get(r){return As(this,r,!0,!0)},get size(){return Os(this,!0)},has(r){return Ps.call(this,r,!0)},add:Ct("add"),set:Ct("set"),delete:Ct("delete"),clear:Ct("clear"),forEach:ks(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Ds(r,!1,!1),n[r]=Ds(r,!0,!1),e[r]=Ds(r,!1,!0),s[r]=Ds(r,!0,!0)}),[t,n,e,s]}const[Xh,Jh,Zh,ef]=Qh();function Yr(t,e){const n=e?t?ef:Zh:t?Jh:Xh;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(q(n,i)&&i in s?n:s,i,r)}const tf={get:Yr(!1,!1)},nf={get:Yr(!1,!0)},sf={get:Yr(!0,!1)},Qa=new WeakMap,Xa=new WeakMap,Ja=new WeakMap,rf=new WeakMap;function of(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lf(t){return t.__v_skip||!Object.isExtensible(t)?0:of(Nh(t))}function bs(t){return wn(t)?t:Qr(t,!1,qh,tf,Qa)}function Za(t){return Qr(t,!1,Yh,nf,Xa)}function ec(t){return Qr(t,!0,Gh,sf,Ja)}function Qr(t,e,n,s,i){if(!le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=lf(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function pn(t){return wn(t)?pn(t.__v_raw):!!(t&&t.__v_isReactive)}function wn(t){return!!(t&&t.__v_isReadonly)}function zs(t){return!!(t&&t.__v_isShallow)}function tc(t){return pn(t)||wn(t)}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function nc(t){return Vs(t,"__v_skip",!0),t}const rs=t=>le(t)?bs(t):t,Xr=t=>le(t)?ec(t):t;function sc(t){St&&He&&(t=Y(t),Ka(t.dep||(t.dep=Kr())))}function ic(t,e){t=Y(t);const n=t.dep;n&&lr(n)}function Ie(t){return!!(t&&t.__v_isRef===!0)}function ar(t){return rc(t,!1)}function af(t){return rc(t,!0)}function rc(t,e){return Ie(t)?t:new cf(t,e)}class cf{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Y(e),this._value=n?e:rs(e)}get value(){return sc(this),this._value}set value(e){const n=this.__v_isShallow||zs(e)||wn(e);e=n?e:Y(e),qt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:rs(e),ic(this))}}function _n(t){return Ie(t)?t.value:t}const uf={get:(t,e,n)=>_n(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ie(i)&&!Ie(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function oc(t){return pn(t)?t:new Proxy(t,uf)}class hf{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new qr(e,()=>{this._dirty||(this._dirty=!0,ic(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=Y(this);return sc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ff(t,e,n=!1){let s,i;const r=W(t);return r?(s=t,i=Ge):(s=t.get,i=t.set),new hf(s,i,r||!i,n)}function Tt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){mi(r,e,n)}return i}function Ye(t,e,n,s){if(W(t)){const r=Tt(t,e,n,s);return r&&Fa(r)&&r.catch(o=>{mi(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Ye(t[r],e,n,s));return i}function mi(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){Tt(a,null,10,[t,o,l]);return}}df(t,n,i,s)}function df(t,e,n,s=!0){console.error(t)}let os=!1,cr=!1;const be=[];let rt=0;const gn=[];let ct=null,Ut=0;const lc=Promise.resolve();let Jr=null;function ac(t){const e=Jr||lc;return t?e.then(this?t.bind(this):t):e}function pf(t){let e=rt+1,n=be.length;for(;e<n;){const s=e+n>>>1,i=be[s],r=ls(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function Zr(t){(!be.length||!be.includes(t,os&&t.allowRecurse?rt+1:rt))&&(t.id==null?be.push(t):be.splice(pf(t.id),0,t),cc())}function cc(){!os&&!cr&&(cr=!0,Jr=lc.then(hc))}function _f(t){const e=be.indexOf(t);e>rt&&be.splice(e,1)}function gf(t){U(t)?gn.push(...t):(!ct||!ct.includes(t,t.allowRecurse?Ut+1:Ut))&&gn.push(t),cc()}function tl(t,e=os?rt+1:0){for(;e<be.length;e++){const n=be[e];n&&n.pre&&(be.splice(e,1),e--,n())}}function uc(t){if(gn.length){const e=[...new Set(gn)];if(gn.length=0,ct){ct.push(...e);return}for(ct=e,ct.sort((n,s)=>ls(n)-ls(s)),Ut=0;Ut<ct.length;Ut++)ct[Ut]();ct=null,Ut=0}}const ls=t=>t.id==null?1/0:t.id,mf=(t,e)=>{const n=ls(t)-ls(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function hc(t){cr=!1,os=!0,be.sort(mf);const e=Ge;try{for(rt=0;rt<be.length;rt++){const n=be[rt];n&&n.active!==!1&&Tt(n,null,14)}}finally{rt=0,be.length=0,uc(),os=!1,Jr=null,(be.length||gn.length)&&hc()}}function yf(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||oe;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||oe;f&&(i=n.map(g=>fe(g)?g.trim():g)),h&&(i=n.map(nr))}let l,a=s[l=Di(e)]||s[l=Di(bn(e))];!a&&r&&(a=s[l=Di(kn(e))]),a&&Ye(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Ye(c,t,6,i)}}function fc(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!W(t)){const a=c=>{const u=fc(c,e,!0);u&&(l=!0,ye(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(le(t)&&s.set(t,null),null):(U(r)?r.forEach(a=>o[a]=null):ye(o,r),le(t)&&s.set(t,o),o)}function yi(t,e){return!t||!fi(e)?!1:(e=e.slice(2).replace(/Once$/,""),q(t,e[0].toLowerCase()+e.slice(1))||q(t,kn(e))||q(t,e))}let je=null,dc=null;function Ks(t){const e=je;return je=t,dc=t&&t.type.__scopeId||null,e}function vf(t,e=je,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&fl(-1);const r=Ks(e);let o;try{o=t(...i)}finally{Ks(r),s._d&&fl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Mi(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:h,data:f,setupState:g,ctx:v,inheritAttrs:S}=t;let P,O;const D=Ks(t);try{if(n.shapeFlag&4){const F=i||s;P=it(u.call(F,F,h,r,g,f,v)),O=a}else{const F=e;P=it(F.length>1?F(r,{attrs:a,slots:l,emit:c}):F(r,null)),O=e.props?a:Ef(a)}}catch(F){Jn.length=0,mi(F,t,1),P=ze(as)}let K=P;if(O&&S!==!1){const F=Object.keys(O),{shapeFlag:ve}=K;F.length&&ve&7&&(o&&F.some($r)&&(O=Cf(O,o)),K=In(K,O))}return n.dirs&&(K=In(K),K.dirs=K.dirs?K.dirs.concat(n.dirs):n.dirs),n.transition&&(K.transition=n.transition),P=K,Ks(D),P}const Ef=t=>{let e;for(const n in t)(n==="class"||n==="style"||fi(n))&&((e||(e={}))[n]=t[n]);return e},Cf=(t,e)=>{const n={};for(const s in t)(!$r(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function bf(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?nl(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!yi(c,f))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?nl(s,o,c):!0:!!o;return!1}function nl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!yi(n,r))return!0}return!1}function wf({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const If=Symbol.for("v-ndc"),Sf=t=>t.__isSuspense;function Tf(t,e){e&&e.pendingBranch?U(t)?e.effects.push(...t):e.effects.push(t):gf(t)}const Ms={};function Hs(t,e,n){return pc(t,e,n)}function pc(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=oe){var l;const a=Hh()===((l=we)==null?void 0:l.scope)?we:null;let c,u=!1,h=!1;if(Ie(t)?(c=()=>t.value,u=zs(t)):pn(t)?(c=()=>t,s=!0):U(t)?(h=!0,u=t.some(F=>pn(F)||zs(F)),c=()=>t.map(F=>{if(Ie(F))return F.value;if(pn(F))return Wt(F);if(W(F))return Tt(F,a,2)})):W(t)?e?c=()=>Tt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),Ye(t,a,3,[g])}:c=Ge,e&&s){const F=c;c=()=>Wt(F())}let f,g=F=>{f=D.onStop=()=>{Tt(F,a,4)}},v;if(us)if(g=Ge,e?n&&Ye(e,a,3,[c(),h?[]:void 0,g]):c(),i==="sync"){const F=md();v=F.__watcherHandles||(F.__watcherHandles=[])}else return Ge;let S=h?new Array(t.length).fill(Ms):Ms;const P=()=>{if(D.active)if(e){const F=D.run();(s||u||(h?F.some((ve,Se)=>qt(ve,S[Se])):qt(F,S)))&&(f&&f(),Ye(e,a,3,[F,S===Ms?void 0:h&&S[0]===Ms?[]:S,g]),S=F)}else D.run()};P.allowRecurse=!!e;let O;i==="sync"?O=P:i==="post"?O=()=>Re(P,a&&a.suspense):(P.pre=!0,a&&(P.id=a.uid),O=()=>Zr(P));const D=new qr(c,O);e?n?P():S=D.run():i==="post"?Re(D.run.bind(D),a&&a.suspense):D.run();const K=()=>{D.stop(),a&&a.scope&&jr(a.scope.effects,D)};return v&&v.push(K),K}function xf(t,e,n){const s=this.proxy,i=fe(t)?t.includes(".")?_c(s,t):()=>s[t]:t.bind(s,s);let r;W(e)?r=e:(r=e.handler,n=e);const o=we;Sn(this);const l=pc(i,r.bind(s),n);return o?Sn(o):zt(),l}function _c(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Wt(t,e){if(!le(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ie(t))Wt(t.value,e);else if(U(t))for(let n=0;n<t.length;n++)Wt(t[n],e);else if(La(t)||fn(t))t.forEach(n=>{Wt(n,e)});else if(Ua(t))for(const n in t)Wt(t[n],e);return t}function sl(t,e){const n=je;if(n===null)return t;const s=bi(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,l,a,c=oe]=e[r];o&&(W(o)&&(o={mounted:o,updated:o}),o.deep&&Wt(l),i.push({dir:o,instance:s,value:l,oldValue:void 0,arg:a,modifiers:c}))}return t}function Mt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(Dn(),Ye(a,n,8,[t.el,l,t,e]),Mn())}}/*! #__NO_SIDE_EFFECTS__ */function gc(t,e){return W(t)?(()=>ye({name:t.name},e,{setup:t}))():t}const Ws=t=>!!t.type.__asyncLoader,mc=t=>t.type.__isKeepAlive;function Rf(t,e){yc(t,"a",e)}function Nf(t,e){yc(t,"da",e)}function yc(t,e,n=we){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(vi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)mc(i.parent.vnode)&&Af(s,e,n,i),i=i.parent}}function Af(t,e,n,s){const i=vi(e,t,s,!0);Ec(()=>{jr(s[e],i)},n)}function vi(t,e,n=we,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Dn(),Sn(n);const l=Ye(e,n,t,o);return zt(),Mn(),l});return s?i.unshift(r):i.push(r),r}}const gt=t=>(e,n=we)=>(!us||t==="sp")&&vi(t,(...s)=>e(...s),n),Pf=gt("bm"),vc=gt("m"),Of=gt("bu"),kf=gt("u"),Df=gt("bum"),Ec=gt("um"),Mf=gt("sp"),Lf=gt("rtg"),Ff=gt("rtc");function Bf(t,e=we){vi("ec",t,e)}function Li(t,e,n,s){let i;const r=n&&n[s];if(U(t)||fe(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(le(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];i[l]=e(t[c],c,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const ur=t=>t?Pc(t)?bi(t)||t.proxy:ur(t.parent):null,Xn=ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ur(t.parent),$root:t=>ur(t.root),$emit:t=>t.emit,$options:t=>eo(t),$forceUpdate:t=>t.f||(t.f=()=>Zr(t.update)),$nextTick:t=>t.n||(t.n=ac.bind(t.proxy)),$watch:t=>xf.bind(t)}),Fi=(t,e)=>t!==oe&&!t.__isScriptSetup&&q(t,e),Uf={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Fi(s,e))return o[e]=1,s[e];if(i!==oe&&q(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&q(c,e))return o[e]=3,r[e];if(n!==oe&&q(n,e))return o[e]=4,n[e];hr&&(o[e]=0)}}const u=Xn[e];let h,f;if(u)return e==="$attrs"&&Oe(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==oe&&q(n,e))return o[e]=4,n[e];if(f=a.config.globalProperties,q(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Fi(i,e)?(i[e]=n,!0):s!==oe&&q(s,e)?(s[e]=n,!0):q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==oe&&q(t,o)||Fi(e,o)||(l=r[0])&&q(l,o)||q(s,o)||q(Xn,o)||q(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function il(t){return U(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let hr=!0;function Hf(t){const e=eo(t),n=t.proxy,s=t.ctx;hr=!1,e.beforeCreate&&rl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:v,activated:S,deactivated:P,beforeDestroy:O,beforeUnmount:D,destroyed:K,unmounted:F,render:ve,renderTracked:Se,renderTriggered:Je,errorCaptured:ot,serverPrefetch:en,expose:Ze,inheritAttrs:vt,components:kt,directives:et,filters:Wn}=e;if(c&&Wf(c,s,null),o)for(const ee in o){const Q=o[ee];W(Q)&&(s[ee]=Q.bind(n))}if(i){const ee=i.call(n,n);le(ee)&&(t.data=bs(ee))}if(hr=!0,r)for(const ee in r){const Q=r[ee],lt=W(Q)?Q.bind(n,n):W(Q.get)?Q.get.bind(n,n):Ge,Et=!W(Q)&&W(Q.set)?Q.set.bind(n):Ge,tt=We({get:lt,set:Et});Object.defineProperty(s,ee,{enumerable:!0,configurable:!0,get:()=>tt.value,set:xe=>tt.value=xe})}if(l)for(const ee in l)Cc(l[ee],s,n,ee);if(a){const ee=W(a)?a.call(n):a;Reflect.ownKeys(ee).forEach(Q=>{$s(Q,ee[Q])})}u&&rl(u,t,"c");function de(ee,Q){U(Q)?Q.forEach(lt=>ee(lt.bind(n))):Q&&ee(Q.bind(n))}if(de(Pf,h),de(vc,f),de(Of,g),de(kf,v),de(Rf,S),de(Nf,P),de(Bf,ot),de(Ff,Se),de(Lf,Je),de(Df,D),de(Ec,F),de(Mf,en),U(Ze))if(Ze.length){const ee=t.exposed||(t.exposed={});Ze.forEach(Q=>{Object.defineProperty(ee,Q,{get:()=>n[Q],set:lt=>n[Q]=lt})})}else t.exposed||(t.exposed={});ve&&t.render===Ge&&(t.render=ve),vt!=null&&(t.inheritAttrs=vt),kt&&(t.components=kt),et&&(t.directives=et)}function Wf(t,e,n=Ge){U(t)&&(t=fr(t));for(const s in t){const i=t[s];let r;le(i)?"default"in i?r=ft(i.from||s,i.default,!0):r=ft(i.from||s):r=ft(i),Ie(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function rl(t,e,n){Ye(U(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Cc(t,e,n,s){const i=s.includes(".")?_c(n,s):()=>n[s];if(fe(t)){const r=e[t];W(r)&&Hs(i,r)}else if(W(t))Hs(i,t.bind(n));else if(le(t))if(U(t))t.forEach(r=>Cc(r,e,n,s));else{const r=W(t.handler)?t.handler.bind(n):e[t.handler];W(r)&&Hs(i,r,t)}}function eo(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>qs(a,c,o,!0)),qs(a,e,o)),le(e)&&r.set(e,a),a}function qs(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&qs(t,r,n,!0),i&&i.forEach(o=>qs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=$f[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const $f={data:ol,props:ll,emits:ll,methods:Qn,computed:Qn,beforeCreate:Te,created:Te,beforeMount:Te,mounted:Te,beforeUpdate:Te,updated:Te,beforeDestroy:Te,beforeUnmount:Te,destroyed:Te,unmounted:Te,activated:Te,deactivated:Te,errorCaptured:Te,serverPrefetch:Te,components:Qn,directives:Qn,watch:Vf,provide:ol,inject:jf};function ol(t,e){return e?t?function(){return ye(W(t)?t.call(this,this):t,W(e)?e.call(this,this):e)}:e:t}function jf(t,e){return Qn(fr(t),fr(e))}function fr(t){if(U(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Te(t,e){return t?[...new Set([].concat(t,e))]:e}function Qn(t,e){return t?ye(Object.create(null),t,e):e}function ll(t,e){return t?U(t)&&U(e)?[...new Set([...t,...e])]:ye(Object.create(null),il(t),il(e??{})):e}function Vf(t,e){if(!t)return e;if(!e)return t;const n=ye(Object.create(null),t);for(const s in e)n[s]=Te(t[s],e[s]);return n}function bc(){return{app:null,config:{isNativeTag:Th,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zf=0;function Kf(t,e){return function(s,i=null){W(s)||(s=ye({},s)),i!=null&&!le(i)&&(i=null);const r=bc(),o=new WeakSet;let l=!1;const a=r.app={_uid:zf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:yd,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&W(c.install)?(o.add(c),c.install(a,...u)):W(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,h){if(!l){const f=ze(s,i);return f.appContext=r,u&&e?e(f,c):t(f,c,h),l=!0,a._container=c,c.__vue_app__=a,bi(f.component)||f.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a},runWithContext(c){Gs=a;try{return c()}finally{Gs=null}}};return a}}let Gs=null;function $s(t,e){if(we){let n=we.provides;const s=we.parent&&we.parent.provides;s===n&&(n=we.provides=Object.create(s)),n[t]=e}}function ft(t,e,n=!1){const s=we||je;if(s||Gs){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Gs._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&W(e)?e.call(s&&s.proxy):e}}function qf(t,e,n,s=!1){const i={},r={};Vs(r,Ci,1),t.propsDefaults=Object.create(null),wc(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Za(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Gf(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=Y(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(yi(t.emitsOptions,f))continue;const g=e[f];if(a)if(q(r,f))g!==r[f]&&(r[f]=g,c=!0);else{const v=bn(f);i[v]=dr(a,l,v,g,t,!1)}else g!==r[f]&&(r[f]=g,c=!0)}}}else{wc(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!q(e,h)&&((u=kn(h))===h||!q(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=dr(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!q(e,h))&&(delete r[h],c=!0)}c&&ht(t,"set","$attrs")}function wc(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(Bs(a))continue;const c=e[a];let u;i&&q(i,u=bn(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:yi(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=Y(n),c=l||oe;for(let u=0;u<r.length;u++){const h=r[u];n[h]=dr(i,a,h,c[h],t,!q(c,h))}}return o}function dr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=q(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&W(a)){const{propsDefaults:c}=i;n in c?s=c[n]:(Sn(i),s=c[n]=a.call(null,e),zt())}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===kn(n))&&(s=!0))}return s}function Ic(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!W(t)){const u=h=>{a=!0;const[f,g]=Ic(h,e,!0);ye(o,f),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return le(t)&&s.set(t,hn),hn;if(U(r))for(let u=0;u<r.length;u++){const h=bn(r[u]);al(h)&&(o[h]=oe)}else if(r)for(const u in r){const h=bn(u);if(al(h)){const f=r[u],g=o[h]=U(f)||W(f)?{type:f}:ye({},f);if(g){const v=hl(Boolean,g.type),S=hl(String,g.type);g[0]=v>-1,g[1]=S<0||v<S,(v>-1||q(g,"default"))&&l.push(h)}}}const c=[o,l];return le(t)&&s.set(t,c),c}function al(t){return t[0]!=="$"}function cl(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function ul(t,e){return cl(t)===cl(e)}function hl(t,e){return U(e)?e.findIndex(n=>ul(n,t)):W(e)&&ul(e,t)?0:-1}const Sc=t=>t[0]==="_"||t==="$stable",to=t=>U(t)?t.map(it):[it(t)],Yf=(t,e,n)=>{if(e._n)return e;const s=vf((...i)=>to(e(...i)),n);return s._c=!1,s},Tc=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Sc(i))continue;const r=t[i];if(W(r))e[i]=Yf(i,r,s);else if(r!=null){const o=to(r);e[i]=()=>o}}},xc=(t,e)=>{const n=to(e);t.slots.default=()=>n},Qf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Y(e),Vs(e,"_",n)):Tc(e,t.slots={})}else t.slots={},e&&xc(t,e);Vs(t.slots,Ci,1)},Xf=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=oe;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(ye(i,e),!n&&l===1&&delete i._):(r=!e.$stable,Tc(e,i)),o=e}else e&&(xc(t,e),o={default:1});if(r)for(const l in i)!Sc(l)&&o[l]==null&&delete i[l]};function pr(t,e,n,s,i=!1){if(U(t)){t.forEach((f,g)=>pr(f,e&&(U(e)?e[g]:e),n,s,i));return}if(Ws(s)&&!i)return;const r=s.shapeFlag&4?bi(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===oe?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(fe(c)?(u[c]=null,q(h,c)&&(h[c]=null)):Ie(c)&&(c.value=null)),W(a))Tt(a,l,12,[o,u]);else{const f=fe(a),g=Ie(a);if(f||g){const v=()=>{if(t.f){const S=f?q(h,a)?h[a]:u[a]:a.value;i?U(S)&&jr(S,r):U(S)?S.includes(r)||S.push(r):f?(u[a]=[r],q(h,a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else f?(u[a]=o,q(h,a)&&(h[a]=o)):g&&(a.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,Re(v,n)):v()}}}const Re=Tf;function Jf(t){return Zf(t)}function Zf(t,e){const n=sr();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=Ge,insertStaticContent:v}=t,S=(d,p,_,m=null,E=null,C=null,R=!1,I=null,T=!!p.dynamicChildren)=>{if(d===p)return;d&&!jn(d,p)&&(m=y(d),xe(d,E,C,!0),d=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:b,ref:M,shapeFlag:A}=p;switch(b){case Ei:P(d,p,_,m);break;case as:O(d,p,_,m);break;case Bi:d==null&&D(p,_,m,R);break;case Fe:kt(d,p,_,m,E,C,R,I,T);break;default:A&1?ve(d,p,_,m,E,C,R,I,T):A&6?et(d,p,_,m,E,C,R,I,T):(A&64||A&128)&&b.process(d,p,_,m,E,C,R,I,T,x)}M!=null&&E&&pr(M,d&&d.ref,C,p||d,!p)},P=(d,p,_,m)=>{if(d==null)s(p.el=l(p.children),_,m);else{const E=p.el=d.el;p.children!==d.children&&c(E,p.children)}},O=(d,p,_,m)=>{d==null?s(p.el=a(p.children||""),_,m):p.el=d.el},D=(d,p,_,m)=>{[d.el,d.anchor]=v(d.children,p,_,m,d.el,d.anchor)},K=({el:d,anchor:p},_,m)=>{let E;for(;d&&d!==p;)E=f(d),s(d,_,m),d=E;s(p,_,m)},F=({el:d,anchor:p})=>{let _;for(;d&&d!==p;)_=f(d),i(d),d=_;i(p)},ve=(d,p,_,m,E,C,R,I,T)=>{R=R||p.type==="svg",d==null?Se(p,_,m,E,C,R,I,T):en(d,p,E,C,R,I,T)},Se=(d,p,_,m,E,C,R,I)=>{let T,b;const{type:M,props:A,shapeFlag:L,transition:H,dirs:z}=d;if(T=d.el=o(d.type,C,A&&A.is,A),L&8?u(T,d.children):L&16&&ot(d.children,T,null,m,E,C&&M!=="foreignObject",R,I),z&&Mt(d,null,m,"created"),Je(T,d,d.scopeId,R,m),A){for(const Z in A)Z!=="value"&&!Bs(Z)&&r(T,Z,null,A[Z],C,d.children,m,E,Ee);"value"in A&&r(T,"value",null,A.value),(b=A.onVnodeBeforeMount)&&st(b,m,d)}z&&Mt(d,null,m,"beforeMount");const ne=ed(E,H);ne&&H.beforeEnter(T),s(T,p,_),((b=A&&A.onVnodeMounted)||ne||z)&&Re(()=>{b&&st(b,m,d),ne&&H.enter(T),z&&Mt(d,null,m,"mounted")},E)},Je=(d,p,_,m,E)=>{if(_&&g(d,_),m)for(let C=0;C<m.length;C++)g(d,m[C]);if(E){let C=E.subTree;if(p===C){const R=E.vnode;Je(d,R,R.scopeId,R.slotScopeIds,E.parent)}}},ot=(d,p,_,m,E,C,R,I,T=0)=>{for(let b=T;b<d.length;b++){const M=d[b]=I?wt(d[b]):it(d[b]);S(null,M,p,_,m,E,C,R,I)}},en=(d,p,_,m,E,C,R)=>{const I=p.el=d.el;let{patchFlag:T,dynamicChildren:b,dirs:M}=p;T|=d.patchFlag&16;const A=d.props||oe,L=p.props||oe;let H;_&&Lt(_,!1),(H=L.onVnodeBeforeUpdate)&&st(H,_,p,d),M&&Mt(p,d,_,"beforeUpdate"),_&&Lt(_,!0);const z=E&&p.type!=="foreignObject";if(b?Ze(d.dynamicChildren,b,I,_,m,z,C):R||Q(d,p,I,null,_,m,z,C,!1),T>0){if(T&16)vt(I,p,A,L,_,m,E);else if(T&2&&A.class!==L.class&&r(I,"class",null,L.class,E),T&4&&r(I,"style",A.style,L.style,E),T&8){const ne=p.dynamicProps;for(let Z=0;Z<ne.length;Z++){const ce=ne[Z],Be=A[ce],rn=L[ce];(rn!==Be||ce==="value")&&r(I,ce,Be,rn,E,d.children,_,m,Ee)}}T&1&&d.children!==p.children&&u(I,p.children)}else!R&&b==null&&vt(I,p,A,L,_,m,E);((H=L.onVnodeUpdated)||M)&&Re(()=>{H&&st(H,_,p,d),M&&Mt(p,d,_,"updated")},m)},Ze=(d,p,_,m,E,C,R)=>{for(let I=0;I<p.length;I++){const T=d[I],b=p[I],M=T.el&&(T.type===Fe||!jn(T,b)||T.shapeFlag&70)?h(T.el):_;S(T,b,M,null,m,E,C,R,!0)}},vt=(d,p,_,m,E,C,R)=>{if(_!==m){if(_!==oe)for(const I in _)!Bs(I)&&!(I in m)&&r(d,I,_[I],null,R,p.children,E,C,Ee);for(const I in m){if(Bs(I))continue;const T=m[I],b=_[I];T!==b&&I!=="value"&&r(d,I,b,T,R,p.children,E,C,Ee)}"value"in m&&r(d,"value",_.value,m.value)}},kt=(d,p,_,m,E,C,R,I,T)=>{const b=p.el=d?d.el:l(""),M=p.anchor=d?d.anchor:l("");let{patchFlag:A,dynamicChildren:L,slotScopeIds:H}=p;H&&(I=I?I.concat(H):H),d==null?(s(b,_,m),s(M,_,m),ot(p.children,_,M,E,C,R,I,T)):A>0&&A&64&&L&&d.dynamicChildren?(Ze(d.dynamicChildren,L,_,E,C,R,I),(p.key!=null||E&&p===E.subTree)&&Rc(d,p,!0)):Q(d,p,_,M,E,C,R,I,T)},et=(d,p,_,m,E,C,R,I,T)=>{p.slotScopeIds=I,d==null?p.shapeFlag&512?E.ctx.activate(p,_,m,R,T):Wn(p,_,m,E,C,R,T):tn(d,p,T)},Wn=(d,p,_,m,E,C,R)=>{const I=d.component=ud(d,m,E);if(mc(d)&&(I.ctx.renderer=x),hd(I),I.asyncDep){if(E&&E.registerDep(I,de),!d.el){const T=I.subTree=ze(as);O(null,T,p,_)}return}de(I,d,p,_,E,C,R)},tn=(d,p,_)=>{const m=p.component=d.component;if(bf(d,p,_))if(m.asyncDep&&!m.asyncResolved){ee(m,p,_);return}else m.next=p,_f(m.update),m.update();else p.el=d.el,m.vnode=p},de=(d,p,_,m,E,C,R)=>{const I=()=>{if(d.isMounted){let{next:M,bu:A,u:L,parent:H,vnode:z}=d,ne=M,Z;Lt(d,!1),M?(M.el=z.el,ee(d,M,R)):M=z,A&&Us(A),(Z=M.props&&M.props.onVnodeBeforeUpdate)&&st(Z,H,M,z),Lt(d,!0);const ce=Mi(d),Be=d.subTree;d.subTree=ce,S(Be,ce,h(Be.el),y(Be),d,E,C),M.el=ce.el,ne===null&&wf(d,ce.el),L&&Re(L,E),(Z=M.props&&M.props.onVnodeUpdated)&&Re(()=>st(Z,H,M,z),E)}else{let M;const{el:A,props:L}=p,{bm:H,m:z,parent:ne}=d,Z=Ws(p);if(Lt(d,!1),H&&Us(H),!Z&&(M=L&&L.onVnodeBeforeMount)&&st(M,ne,p),Lt(d,!0),A&&X){const ce=()=>{d.subTree=Mi(d),X(A,d.subTree,d,E,null)};Z?p.type.__asyncLoader().then(()=>!d.isUnmounted&&ce()):ce()}else{const ce=d.subTree=Mi(d);S(null,ce,_,m,d,E,C),p.el=ce.el}if(z&&Re(z,E),!Z&&(M=L&&L.onVnodeMounted)){const ce=p;Re(()=>st(M,ne,ce),E)}(p.shapeFlag&256||ne&&Ws(ne.vnode)&&ne.vnode.shapeFlag&256)&&d.a&&Re(d.a,E),d.isMounted=!0,p=_=m=null}},T=d.effect=new qr(I,()=>Zr(b),d.scope),b=d.update=()=>T.run();b.id=d.uid,Lt(d,!0),b()},ee=(d,p,_)=>{p.component=d;const m=d.vnode.props;d.vnode=p,d.next=null,Gf(d,p.props,m,_),Xf(d,p.children,_),Dn(),tl(),Mn()},Q=(d,p,_,m,E,C,R,I,T=!1)=>{const b=d&&d.children,M=d?d.shapeFlag:0,A=p.children,{patchFlag:L,shapeFlag:H}=p;if(L>0){if(L&128){Et(b,A,_,m,E,C,R,I,T);return}else if(L&256){lt(b,A,_,m,E,C,R,I,T);return}}H&8?(M&16&&Ee(b,E,C),A!==b&&u(_,A)):M&16?H&16?Et(b,A,_,m,E,C,R,I,T):Ee(b,E,C,!0):(M&8&&u(_,""),H&16&&ot(A,_,m,E,C,R,I,T))},lt=(d,p,_,m,E,C,R,I,T)=>{d=d||hn,p=p||hn;const b=d.length,M=p.length,A=Math.min(b,M);let L;for(L=0;L<A;L++){const H=p[L]=T?wt(p[L]):it(p[L]);S(d[L],H,_,null,E,C,R,I,T)}b>M?Ee(d,E,C,!0,!1,A):ot(p,_,m,E,C,R,I,T,A)},Et=(d,p,_,m,E,C,R,I,T)=>{let b=0;const M=p.length;let A=d.length-1,L=M-1;for(;b<=A&&b<=L;){const H=d[b],z=p[b]=T?wt(p[b]):it(p[b]);if(jn(H,z))S(H,z,_,null,E,C,R,I,T);else break;b++}for(;b<=A&&b<=L;){const H=d[A],z=p[L]=T?wt(p[L]):it(p[L]);if(jn(H,z))S(H,z,_,null,E,C,R,I,T);else break;A--,L--}if(b>A){if(b<=L){const H=L+1,z=H<M?p[H].el:m;for(;b<=L;)S(null,p[b]=T?wt(p[b]):it(p[b]),_,z,E,C,R,I,T),b++}}else if(b>L)for(;b<=A;)xe(d[b],E,C,!0),b++;else{const H=b,z=b,ne=new Map;for(b=z;b<=L;b++){const De=p[b]=T?wt(p[b]):it(p[b]);De.key!=null&&ne.set(De.key,b)}let Z,ce=0;const Be=L-z+1;let rn=!1,Vo=0;const $n=new Array(Be);for(b=0;b<Be;b++)$n[b]=0;for(b=H;b<=A;b++){const De=d[b];if(ce>=Be){xe(De,E,C,!0);continue}let nt;if(De.key!=null)nt=ne.get(De.key);else for(Z=z;Z<=L;Z++)if($n[Z-z]===0&&jn(De,p[Z])){nt=Z;break}nt===void 0?xe(De,E,C,!0):($n[nt-z]=b+1,nt>=Vo?Vo=nt:rn=!0,S(De,p[nt],_,null,E,C,R,I,T),ce++)}const zo=rn?td($n):hn;for(Z=zo.length-1,b=Be-1;b>=0;b--){const De=z+b,nt=p[De],Ko=De+1<M?p[De+1].el:m;$n[b]===0?S(null,nt,_,Ko,E,C,R,I,T):rn&&(Z<0||b!==zo[Z]?tt(nt,_,Ko,2):Z--)}}},tt=(d,p,_,m,E=null)=>{const{el:C,type:R,transition:I,children:T,shapeFlag:b}=d;if(b&6){tt(d.component.subTree,p,_,m);return}if(b&128){d.suspense.move(p,_,m);return}if(b&64){R.move(d,p,_,x);return}if(R===Fe){s(C,p,_);for(let A=0;A<T.length;A++)tt(T[A],p,_,m);s(d.anchor,p,_);return}if(R===Bi){K(d,p,_);return}if(m!==2&&b&1&&I)if(m===0)I.beforeEnter(C),s(C,p,_),Re(()=>I.enter(C),E);else{const{leave:A,delayLeave:L,afterLeave:H}=I,z=()=>s(C,p,_),ne=()=>{A(C,()=>{z(),H&&H()})};L?L(C,z,ne):ne()}else s(C,p,_)},xe=(d,p,_,m=!1,E=!1)=>{const{type:C,props:R,ref:I,children:T,dynamicChildren:b,shapeFlag:M,patchFlag:A,dirs:L}=d;if(I!=null&&pr(I,null,_,d,!0),M&256){p.ctx.deactivate(d);return}const H=M&1&&L,z=!Ws(d);let ne;if(z&&(ne=R&&R.onVnodeBeforeUnmount)&&st(ne,p,d),M&6)Ns(d.component,_,m);else{if(M&128){d.suspense.unmount(_,m);return}H&&Mt(d,null,p,"beforeUnmount"),M&64?d.type.remove(d,p,_,E,x,m):b&&(C!==Fe||A>0&&A&64)?Ee(b,p,_,!1,!0):(C===Fe&&A&384||!E&&M&16)&&Ee(T,p,_),m&&nn(d)}(z&&(ne=R&&R.onVnodeUnmounted)||H)&&Re(()=>{ne&&st(ne,p,d),H&&Mt(d,null,p,"unmounted")},_)},nn=d=>{const{type:p,el:_,anchor:m,transition:E}=d;if(p===Fe){sn(_,m);return}if(p===Bi){F(d);return}const C=()=>{i(_),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(d.shapeFlag&1&&E&&!E.persisted){const{leave:R,delayLeave:I}=E,T=()=>R(_,C);I?I(d.el,C,T):T()}else C()},sn=(d,p)=>{let _;for(;d!==p;)_=f(d),i(d),d=_;i(p)},Ns=(d,p,_)=>{const{bum:m,scope:E,update:C,subTree:R,um:I}=d;m&&Us(m),E.stop(),C&&(C.active=!1,xe(R,d,p,_)),I&&Re(I,p),Re(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ee=(d,p,_,m=!1,E=!1,C=0)=>{for(let R=C;R<d.length;R++)xe(d[R],p,_,m,E)},y=d=>d.shapeFlag&6?y(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),N=(d,p,_)=>{d==null?p._vnode&&xe(p._vnode,null,null,!0):S(p._vnode||null,d,p,null,null,null,_),tl(),uc(),p._vnode=d},x={p:S,um:xe,m:tt,r:nn,mt:Wn,mc:ot,pc:Q,pbc:Ze,n:y,o:t};let k,X;return e&&([k,X]=e(x)),{render:N,hydrate:k,createApp:Kf(N,k)}}function Lt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ed(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Rc(t,e,n=!1){const s=t.children,i=e.children;if(U(s)&&U(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=wt(i[r]),l.el=o.el),n||Rc(o,l)),l.type===Ei&&(l.el=o.el)}}function td(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const nd=t=>t.__isTeleport,Fe=Symbol.for("v-fgt"),Ei=Symbol.for("v-txt"),as=Symbol.for("v-cmt"),Bi=Symbol.for("v-stc"),Jn=[];let Ve=null;function Me(t=!1){Jn.push(Ve=t?null:[])}function sd(){Jn.pop(),Ve=Jn[Jn.length-1]||null}let cs=1;function fl(t){cs+=t}function id(t){return t.dynamicChildren=cs>0?Ve||hn:null,sd(),cs>0&&Ve&&Ve.push(t),t}function Le(t,e,n,s,i,r){return id(ue(t,e,n,s,i,r,!0))}function _r(t){return t?t.__v_isVNode===!0:!1}function jn(t,e){return t.type===e.type&&t.key===e.key}const Ci="__vInternal",Nc=({key:t})=>t??null,js=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?fe(t)||Ie(t)||W(t)?{i:je,r:t,k:e,f:!!n}:t:null);function ue(t,e=null,n=null,s=0,i=null,r=t===Fe?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Nc(e),ref:e&&js(e),scopeId:dc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:je};return l?(no(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=fe(n)?8:16),cs>0&&!o&&Ve&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Ve.push(a),a}const ze=rd;function rd(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===If)&&(t=as),_r(t)){const l=In(t,e,!0);return n&&no(l,n),cs>0&&!r&&Ve&&(l.shapeFlag&6?Ve[Ve.indexOf(t)]=l:Ve.push(l)),l.patchFlag|=-2,l}if(_d(t)&&(t=t.__vccOpts),e){e=od(e);let{class:l,style:a}=e;l&&!fe(l)&&(e.class=dn(l)),le(a)&&(tc(a)&&!U(a)&&(a=ye({},a)),e.style=zr(a))}const o=fe(t)?1:Sf(t)?128:nd(t)?64:le(t)?4:W(t)?2:0;return ue(t,e,n,s,i,o,r,!0)}function od(t){return t?tc(t)||Ci in t?ye({},t):t:null}function In(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?ld(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Nc(l),ref:e&&e.ref?n&&i?U(i)?i.concat(js(e)):[i,js(e)]:js(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Fe?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&In(t.ssContent),ssFallback:t.ssFallback&&In(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ac(t=" ",e=0){return ze(Ei,null,t,e)}function it(t){return t==null||typeof t=="boolean"?ze(as):U(t)?ze(Fe,null,t.slice()):typeof t=="object"?wt(t):ze(Ei,null,String(t))}function wt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:In(t)}function no(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(U(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),no(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Ci in e)?e._ctx=je:i===3&&je&&(je.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else W(e)?(e={default:e,_ctx:je},n=32):(e=String(e),s&64?(n=16,e=[Ac(e)]):n=8);t.children=e,t.shapeFlag|=n}function ld(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=dn([e.class,s.class]));else if(i==="style")e.style=zr([e.style,s.style]);else if(fi(i)){const r=e[i],o=s[i];o&&r!==o&&!(U(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function st(t,e,n,s=null){Ye(t,e,7,[n,s])}const ad=bc();let cd=0;function ud(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||ad,r={uid:cd++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ic(s,i),emitsOptions:fc(s,i),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:s.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=yf.bind(null,r),t.ce&&t.ce(r),r}let we=null,so,on,dl="__VUE_INSTANCE_SETTERS__";(on=sr()[dl])||(on=sr()[dl]=[]),on.push(t=>we=t),so=t=>{on.length>1?on.forEach(e=>e(t)):on[0](t)};const Sn=t=>{so(t),t.scope.on()},zt=()=>{we&&we.scope.off(),so(null)};function Pc(t){return t.vnode.shapeFlag&4}let us=!1;function hd(t,e=!1){us=e;const{props:n,children:s}=t.vnode,i=Pc(t);qf(t,n,i,e),Qf(t,s);const r=i?fd(t,e):void 0;return us=!1,r}function fd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=nc(new Proxy(t.ctx,Uf));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?pd(t):null;Sn(t),Dn();const r=Tt(s,t,0,[t.props,i]);if(Mn(),zt(),Fa(r)){if(r.then(zt,zt),e)return r.then(o=>{pl(t,o,e)}).catch(o=>{mi(o,t,0)});t.asyncDep=r}else pl(t,r,e)}else Oc(t,e)}function pl(t,e,n){W(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:le(e)&&(t.setupState=oc(e)),Oc(t,n)}let _l;function Oc(t,e,n){const s=t.type;if(!t.render){if(!e&&_l&&!s.render){const i=s.template||eo(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=ye(ye({isCustomElement:r,delimiters:l},o),a);s.render=_l(i,c)}}t.render=s.render||Ge}{Sn(t),Dn();try{Hf(t)}finally{Mn(),zt()}}}function dd(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Oe(t,"get","$attrs"),e[n]}}))}function pd(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return dd(t)},slots:t.slots,emit:t.emit,expose:e}}function bi(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(oc(nc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Xn)return Xn[n](t)},has(e,n){return n in e||n in Xn}}))}function _d(t){return W(t)&&"__vccOpts"in t}const We=(t,e)=>ff(t,e,us);function kc(t,e,n){const s=arguments.length;return s===2?le(e)&&!U(e)?_r(e)?ze(t,null,[e]):ze(t,e):ze(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&_r(n)&&(n=[n]),ze(t,e,n))}const gd=Symbol.for("v-scx"),md=()=>ft(gd),yd="3.3.8",vd="http://www.w3.org/2000/svg",Ht=typeof document<"u"?document:null,gl=Ht&&Ht.createElement("template"),Ed={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Ht.createElementNS(vd,t):Ht.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Ht.createTextNode(t),createComment:t=>Ht.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ht.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{gl.innerHTML=s?`<svg>${t}</svg>`:t;const l=gl.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Cd=Symbol("_vtc");function bd(t,e,n){const s=t[Cd];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const wd=Symbol("_vod");function Id(t,e,n){const s=t.style,i=fe(n);if(n&&!i){if(e&&!fe(e))for(const r in e)n[r]==null&&gr(s,r,"");for(const r in n)gr(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),wd in t&&(s.display=r)}}const ml=/\s*!important$/;function gr(t,e,n){if(U(n))n.forEach(s=>gr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Sd(t,e);ml.test(n)?t.setProperty(kn(s),n.replace(ml,""),"important"):t[s]=n}}const yl=["Webkit","Moz","ms"],Ui={};function Sd(t,e){const n=Ui[e];if(n)return n;let s=bn(e);if(s!=="filter"&&s in t)return Ui[e]=s;s=Ha(s);for(let i=0;i<yl.length;i++){const r=yl[i]+s;if(r in t)return Ui[e]=r}return e}const vl="http://www.w3.org/1999/xlink";function Td(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(vl,e.slice(6,e.length)):t.setAttributeNS(vl,e,n);else{const r=Fh(e);n==null||r&&!Wa(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function xd(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const l=t.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){t._value=n;const c=l==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Wa(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function an(t,e,n,s){t.addEventListener(e,n,s)}function Rd(t,e,n,s){t.removeEventListener(e,n,s)}const El=Symbol("_vei");function Nd(t,e,n,s,i=null){const r=t[El]||(t[El]={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=Ad(e);if(s){const c=r[e]=kd(s,i);an(t,l,c,a)}else o&&(Rd(t,l,o,a),r[e]=void 0)}}const Cl=/(?:Once|Passive|Capture)$/;function Ad(t){let e;if(Cl.test(t)){e={};let s;for(;s=t.match(Cl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):kn(t.slice(2)),e]}let Hi=0;const Pd=Promise.resolve(),Od=()=>Hi||(Pd.then(()=>Hi=0),Hi=Date.now());function kd(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ye(Dd(s,n.value),e,5,[s])};return n.value=t,n.attached=Od(),n}function Dd(t,e){if(U(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const bl=/^on[a-z]/,Md=(t,e,n,s,i=!1,r,o,l,a)=>{e==="class"?bd(t,s,i):e==="style"?Id(t,n,s):fi(e)?$r(e)||Nd(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ld(t,e,s,i))?xd(t,e,s,r,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Td(t,e,s,i))};function Ld(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&bl.test(e)&&W(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||bl.test(e)&&fe(n)?!1:e in t}const wl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return U(e)?n=>Us(e,n):e};function Fd(t){t.target.composing=!0}function Il(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Wi=Symbol("_assign"),Sl={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Wi]=wl(i);const r=s||i.props&&i.props.type==="number";an(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=nr(l)),t[Wi](l)}),n&&an(t,"change",()=>{t.value=t.value.trim()}),e||(an(t,"compositionstart",Fd),an(t,"compositionend",Il),an(t,"change",Il))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t[Wi]=wl(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&nr(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Bd=["ctrl","shift","alt","meta"],Ud={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Bd.some(n=>t[`${n}Key`]&&!e.includes(n))},Tl=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=Ud[e[i]];if(r&&r(n,e))return}return t(n,...s)},Hd=ye({patchProp:Md},Ed);let xl;function Wd(){return xl||(xl=Jf(Hd))}const $d=(...t)=>{const e=Wd().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=jd(s);if(!i)return;const r=e._component;!W(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function jd(t){return fe(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w=function(t,e){if(!t)throw Ln(e)},Ln=function(t){return new Error("Firebase Database ("+Dc.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Vd=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},io={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let f=(l&15)<<2|c>>6,g=c&63;a||(g=64,o||(f=64)),s.push(n[u],n[h],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Mc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Vd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new zd;const f=r<<2|l>>4;if(s.push(f),c!==64){const g=l<<4&240|c>>2;if(s.push(g),h!==64){const v=c<<6&192|h;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class zd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lc=function(t){const e=Mc(t);return io.encodeByteArray(e,!0)},Ys=function(t){return Lc(t).replace(/\./g,"")},mr=function(t){try{return io.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(t){return Fc(void 0,t)}function Fc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!qd(n)||(t[n]=Fc(t[n],e[n]));return t}function qd(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd=()=>Gd().__FIREBASE_DEFAULTS__,Qd=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Xd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&mr(t[1]);return e&&JSON.parse(e)},Bc=()=>{try{return Yd()||Qd()||Xd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Jd=t=>{var e,n;return(n=(e=Bc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Zd=t=>{const e=Jd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Uc=()=>{var t;return(t=Bc())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Ys(JSON.stringify(n)),Ys(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tp())}function np(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wc(){return Dc.NODE_ADMIN===!0}function sp(){try{return typeof indexedDB=="object"}catch{return!1}}function ip(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp="FirebaseError";class ws extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=rp,Object.setPrototypeOf(this,ws.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$c.prototype.create)}}class $c{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?op(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ws(i,l,s)}}function op(t,e){return t.replace(lp,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const lp=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(t){return JSON.parse(t)}function ge(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=hs(mr(r[0])||""),n=hs(mr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},ap=function(t){const e=jc(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},cp=function(t){const e=jc(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Tn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Rl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qs(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function yr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Nl(r)&&Nl(o)){if(!yr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Nl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const f=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function ro(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,w(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ii=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t){return t&&t._delegate?t._delegate:t}class fs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new wi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_p(e))try{this.getOrInitializeService({instanceIdentifier:Ft})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ft){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ft){return this.instances.has(e)}getOptions(e=Ft){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:pp(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ft){return this.component?this.component.multipleInstances?e:Ft:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pp(t){return t===Ft?void 0:t}function _p(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const mp={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},yp=se.INFO,vp={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},Ep=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=vp[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vc{constructor(e){this.name=e,this._logLevel=yp,this._logHandler=Ep,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const Cp=(t,e)=>e.some(n=>t instanceof n);let Al,Pl;function bp(){return Al||(Al=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wp(){return Pl||(Pl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zc=new WeakMap,vr=new WeakMap,Kc=new WeakMap,$i=new WeakMap,oo=new WeakMap;function Ip(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(xt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&zc.set(n,t)}).catch(()=>{}),oo.set(e,t),e}function Sp(t){if(vr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});vr.set(t,e)}let Er={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Kc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Tp(t){Er=t(Er)}function xp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ji(this),e,...n);return Kc.set(s,e.sort?e.sort():[e]),xt(s)}:wp().includes(t)?function(...e){return t.apply(ji(this),e),xt(zc.get(this))}:function(...e){return xt(t.apply(ji(this),e))}}function Rp(t){return typeof t=="function"?xp(t):(t instanceof IDBTransaction&&Sp(t),Cp(t,bp())?new Proxy(t,Er):t)}function xt(t){if(t instanceof IDBRequest)return Ip(t);if($i.has(t))return $i.get(t);const e=Rp(t);return e!==t&&($i.set(t,e),oo.set(e,t)),e}const ji=t=>oo.get(t);function Np(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=xt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(xt(o.result),a.oldVersion,a.newVersion,xt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Ap=["get","getKey","getAll","getAllKeys","count"],Pp=["put","add","delete","clear"],Vi=new Map;function Ol(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vi.get(e))return Vi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Pp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ap.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Vi.set(e,r),r}Tp(t=>({...t,get:(e,n,s)=>Ol(e,n)||t.get(e,n,s),has:(e,n)=>!!Ol(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function kp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cr="@firebase/app",kl="0.9.22";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt=new Vc("@firebase/app"),Dp="@firebase/app-compat",Mp="@firebase/analytics-compat",Lp="@firebase/analytics",Fp="@firebase/app-check-compat",Bp="@firebase/app-check",Up="@firebase/auth",Hp="@firebase/auth-compat",Wp="@firebase/database",$p="@firebase/database-compat",jp="@firebase/functions",Vp="@firebase/functions-compat",zp="@firebase/installations",Kp="@firebase/installations-compat",qp="@firebase/messaging",Gp="@firebase/messaging-compat",Yp="@firebase/performance",Qp="@firebase/performance-compat",Xp="@firebase/remote-config",Jp="@firebase/remote-config-compat",Zp="@firebase/storage",e_="@firebase/storage-compat",t_="@firebase/firestore",n_="@firebase/firestore-compat",s_="firebase",i_="10.5.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br="[DEFAULT]",r_={[Cr]:"fire-core",[Dp]:"fire-core-compat",[Lp]:"fire-analytics",[Mp]:"fire-analytics-compat",[Bp]:"fire-app-check",[Fp]:"fire-app-check-compat",[Up]:"fire-auth",[Hp]:"fire-auth-compat",[Wp]:"fire-rtdb",[$p]:"fire-rtdb-compat",[jp]:"fire-fn",[Vp]:"fire-fn-compat",[zp]:"fire-iid",[Kp]:"fire-iid-compat",[qp]:"fire-fcm",[Gp]:"fire-fcm-compat",[Yp]:"fire-perf",[Qp]:"fire-perf-compat",[Xp]:"fire-rc",[Jp]:"fire-rc-compat",[Zp]:"fire-gcs",[e_]:"fire-gcs-compat",[t_]:"fire-fst",[n_]:"fire-fst-compat","fire-js":"fire-js",[s_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs=new Map,wr=new Map;function o_(t,e){try{t.container.addComponent(e)}catch(n){Gt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Js(t){const e=t.name;if(wr.has(e))return Gt.debug(`There were multiple attempts to register component ${e}.`),!1;wr.set(e,t);for(const n of Xs.values())o_(n,t);return!0}function l_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Rt=new $c("app","Firebase",a_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new fs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_=i_;function qc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:br,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Rt.create("bad-app-name",{appName:String(i)});if(n||(n=Uc()),!n)throw Rt.create("no-options");const r=Xs.get(i);if(r){if(yr(n,r.options)&&yr(s,r.config))return r;throw Rt.create("duplicate-app",{appName:i})}const o=new gp(i);for(const a of wr.values())o.addComponent(a);const l=new c_(n,s,o);return Xs.set(i,l),l}function h_(t=br){const e=Xs.get(t);if(!e&&t===br&&Uc())return qc();if(!e)throw Rt.create("no-app",{appName:t});return e}function mn(t,e,n){var s;let i=(s=r_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gt.warn(l.join(" "));return}Js(new fs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_="firebase-heartbeat-database",d_=1,ds="firebase-heartbeat-store";let zi=null;function Gc(){return zi||(zi=Np(f_,d_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ds)}}}).catch(t=>{throw Rt.create("idb-open",{originalErrorMessage:t.message})})),zi}async function p_(t){try{return await(await Gc()).transaction(ds).objectStore(ds).get(Yc(t))}catch(e){if(e instanceof ws)Gt.warn(e.message);else{const n=Rt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gt.warn(n.message)}}}async function Dl(t,e){try{const s=(await Gc()).transaction(ds,"readwrite");await s.objectStore(ds).put(e,Yc(t)),await s.done}catch(n){if(n instanceof ws)Gt.warn(n.message);else{const s=Rt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gt.warn(s.message)}}}function Yc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __=1024,g_=30*24*60*60*1e3;class m_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new v_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ml();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=g_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ml(),{heartbeatsToSend:n,unsentEntries:s}=y_(this._heartbeatsCache.heartbeats),i=Ys(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ml(){return new Date().toISOString().substring(0,10)}function y_(t,e=__){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ll(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ll(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class v_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sp()?ip().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await p_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ll(t){return Ys(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(t){Js(new fs("platform-logger",e=>new Op(e),"PRIVATE")),Js(new fs("heartbeat",e=>new m_(e),"PRIVATE")),mn(Cr,kl,t),mn(Cr,kl,"esm2017"),mn("fire-js","")}E_("");const Fl="@firebase/database",Bl="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qc="";function C_(t){Qc=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ge(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:hs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return mt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new b_(e)}}catch{}return new w_},$t=Xc("localStorage"),Ir=Xc("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=new Vc("@firebase/database"),I_=function(){let t=1;return function(){return t++}}(),Jc=function(t){const e=fp(t),n=new hp;n.update(e);const s=n.digest();return io.encodeByteArray(s)},Is=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Is.apply(null,s):typeof s=="object"?e+=ge(s):e+=s,e+=" "}return e};let Kt=null,Ul=!0;const S_=function(t,e){w(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(yn.logLevel=se.VERBOSE,Kt=yn.log.bind(yn),e&&Ir.set("logging_enabled",!0)):typeof t=="function"?Kt=t:(Kt=null,Ir.remove("logging_enabled"))},Ce=function(...t){if(Ul===!0&&(Ul=!1,Kt===null&&Ir.get("logging_enabled")===!0&&S_(!0)),Kt){const e=Is.apply(null,t);Kt(e)}},Ss=function(t){return function(...e){Ce(t,...e)}},Sr=function(...t){const e="FIREBASE INTERNAL ERROR: "+Is(...t);yn.error(e)},pt=function(...t){const e=`FIREBASE FATAL ERROR: ${Is(...t)}`;throw yn.error(e),new Error(e)},Pe=function(...t){const e="FIREBASE WARNING: "+Is(...t);yn.warn(e)},T_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Pe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Zc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},x_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},xn="[MIN_NAME]",Yt="[MAX_NAME]",Bn=function(t,e){if(t===e)return 0;if(t===xn||e===Yt)return-1;if(e===xn||t===Yt)return 1;{const n=Hl(t),s=Hl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},R_=function(t,e){return t===e?0:t<e?-1:1},Vn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ge(e))},lo=function(t){if(typeof t!="object"||t===null)return ge(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ge(e[s]),n+=":",n+=lo(t[e[s]]);return n+="}",n},eu=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function ke(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const tu=function(t){w(!Zc(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let f=parseInt(u.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},N_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},A_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function P_(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const O_=new RegExp("^-?(0*)\\d{1,10}$"),k_=-2147483648,D_=2147483647,Hl=function(t){if(O_.test(t)){const e=Number(t);if(e>=k_&&e<=D_)return e}return null},Un=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Pe("Exception was thrown by user callback.",n),e},Math.floor(0))}},M_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Zn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Pe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Pe(e)}}class vn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}vn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao="5",nu="v",su="s",iu="r",ru="f",ou=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,lu="ls",au="p",Tr="ac",cu="websocket",uu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=$t.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&$t.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function B_(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function fu(t,e,n){w(typeof e=="string","typeof type must == string"),w(typeof n=="object","typeof params must == object");let s;if(e===cu)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===uu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);B_(t)&&(n.ns=t.namespace);const i=[];return ke(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(){this.counters_={}}incrementCounter(e,n=1){mt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Kd(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki={},qi={};function co(t){const e=t.toString();return Ki[e]||(Ki[e]=new U_),Ki[e]}function H_(t,e){const n=t.toString();return qi[n]||(qi[n]=e()),qi[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Un(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl="start",$_="close",j_="pLPCommand",V_="pRTLPCB",du="id",pu="pw",_u="ser",z_="cb",K_="seg",q_="ts",G_="d",Y_="dframe",gu=1870,mu=30,Q_=gu-mu,X_=25e3,J_=3e4;class un{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ss(e),this.stats_=co(n),this.urlFn=a=>(this.appCheckToken&&(a[Tr]=this.appCheckToken),fu(n,uu,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new W_(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(J_)),x_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new uo((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Wl)this.id=l,this.password=a;else if(o===$_)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Wl]="t",s[_u]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[z_]=this.scriptTagHolder.uniqueCallbackIdentifier),s[nu]=ao,this.transportSessionId&&(s[su]=this.transportSessionId),this.lastSessionId&&(s[lu]=this.lastSessionId),this.applicationId&&(s[au]=this.applicationId),this.appCheckToken&&(s[Tr]=this.appCheckToken),typeof location<"u"&&location.hostname&&ou.test(location.hostname)&&(s[iu]=ru);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){un.forceAllow_=!0}static forceDisallow(){un.forceDisallow_=!0}static isAvailable(){return un.forceAllow_?!0:!un.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!N_()&&!A_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Lc(n),i=eu(s,Q_);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Y_]="t",s[du]=e,s[pu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ge(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class uo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=I_(),window[j_+this.uniqueCallbackIdentifier]=e,window[V_+this.uniqueCallbackIdentifier]=n,this.myIFrame=uo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ce("frame writing exception"),l.stack&&Ce(l.stack),Ce(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ce("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[du]=this.myID,e[pu]=this.myPW,e[_u]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+mu+s.length<=gu;){const o=this.pendingSegs.shift();s=s+"&"+K_+i+"="+o.seg+"&"+q_+i+"="+o.ts+"&"+G_+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(X_)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_=16384,eg=45e3;let Zs=null;typeof MozWebSocket<"u"?Zs=MozWebSocket:typeof WebSocket<"u"&&(Zs=WebSocket);class $e{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ss(this.connId),this.stats_=co(n),this.connURL=$e.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[nu]=ao,typeof location<"u"&&location.hostname&&ou.test(location.hostname)&&(o[iu]=ru),n&&(o[su]=n),s&&(o[lu]=s),i&&(o[Tr]=i),r&&(o[au]=r),fu(e,cu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,$t.set("previous_websocket_failure",!0);try{let s;Wc(),this.mySock=new Zs(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){$e.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Zs!==null&&!$e.forceDisallow_}static previouslyFailed(){return $t.isInMemoryStorage||$t.get("previous_websocket_failure")===!0}markConnectionHealthy(){$t.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=hs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(w(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=eu(n,Z_);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(eg))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$e.responsesRequiredToBeHealthy=2;$e.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[un,$e]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=$e&&$e.isAvailable();let s=n&&!$e.previouslyFailed();if(e.webSocketOnly&&(n||Pe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[$e];else{const i=this.transports_=[];for(const r of ps.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ps.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ps.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg=6e4,ng=5e3,sg=10*1024,ig=100*1024,Gi="t",$l="d",rg="s",jl="r",og="e",Vl="o",zl="a",Kl="n",ql="p",lg="h";class ag{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ss("c:"+this.id+":"),this.transportManager_=new ps(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Zn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ig?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>sg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Gi in e){const n=e[Gi];n===zl?this.upgradeIfSecondaryHealthy_():n===jl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Vl&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Vn("t",e),s=Vn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ql,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:zl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Kl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Vn("t",e),s=Vn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Vn(Gi,e);if($l in e){const s=e[$l];if(n===lg){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Kl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===rg?this.onConnectionShutdown_(s):n===jl?this.onReset_(s):n===og?Sr("Server Error: "+s):n===Vl?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Sr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ao!==s&&Pe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Zn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(tg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Zn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ng))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ql,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&($t.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e){this.allowedEvents_=e,this.listeners_={},w(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){w(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends vu{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Hc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ei}getInitialEvent(e){return w(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl=32,Yl=768;class te{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function G(){return new te("")}function $(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Pt(t){return t.pieces_.length-t.pieceNum_}function ie(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new te(t.pieces_,e)}function Eu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function cg(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Cu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function bu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new te(e,0)}function he(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof te)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new te(n,0)}function V(t){return t.pieceNum_>=t.pieces_.length}function Ne(t,e){const n=$(t),s=$(e);if(n===null)return e;if(n===s)return Ne(ie(t),ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ho(t,e){if(Pt(t)!==Pt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ke(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Pt(t)>Pt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class ug{constructor(e,n){this.errorPrefix_=n,this.parts_=Cu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ii(this.parts_[s]);wu(this)}}function hg(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ii(e),wu(t)}function fg(t){const e=t.parts_.pop();t.byteLength_-=Ii(e),t.parts_.length>0&&(t.byteLength_-=1)}function wu(t){if(t.byteLength_>Yl)throw new Error(t.errorPrefix_+"has a key path longer than "+Yl+" bytes ("+t.byteLength_+").");if(t.parts_.length>Gl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Gl+") or object contains a cycle "+Bt(t))}function Bt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo extends vu{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new fo}getInitialEvent(e){return w(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=1e3,dg=60*5*1e3,Ql=30*1e3,pg=1.3,_g=3e4,gg="server_kill",Xl=3;class dt extends yu{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=dt.nextPersistentConnectionId_++,this.log_=Ss("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=zn,this.maxReconnectDelay_=dg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Wc())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");fo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ei.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ge(r)),w(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new wi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),w(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;dt.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&mt(e,"w")){const s=Tn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Pe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||cp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ql)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=ap(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ge(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Sr("Unrecognized action received from server: "+ge(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){w(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=zn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=zn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>_g&&(this.reconnectDelay_=zn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*pg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+dt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){w(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ce("getToken() completed but was canceled"):(Ce("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new ag(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{Pe(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(gg)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Pe(h),a())}}}interrupt(e){Ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Rl(this.interruptReasons_)&&(this.reconnectDelay_=zn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>lo(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new te(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ce("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Xl&&(this.reconnectDelay_=Ql,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ce("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Xl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Qc.replace(/\./g,"-")]=1,Hc()?e["framework.cordova"]=1:np()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ei.getInstance().currentlyOnline();return Rl(this.interruptReasons_)&&e}}dt.nextPersistentConnectionId_=0;dt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new j(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new j(xn,e),i=new j(xn,n);return this.compare(s,i)!==0}minPost(){return j.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ls;class Iu extends Si{static get __EMPTY_NODE(){return Ls}static set __EMPTY_NODE(e){Ls=e}compare(e,n){return Bn(e.name,n.name)}isDefinedOn(e){throw Ln("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return j.MIN}maxPost(){return new j(Yt,Ls)}makePost(e,n){return w(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,Ls)}toString(){return".key"}}const En=new Iu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class _e{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??_e.RED,this.left=i??Ae.EMPTY_NODE,this.right=r??Ae.EMPTY_NODE}copy(e,n,s,i,r){return new _e(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ae.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ae.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}_e.RED=!0;_e.BLACK=!1;class mg{copy(e,n,s,i,r){return this}insert(e,n,s){return new _e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ae{constructor(e,n=Ae.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ae(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,_e.BLACK,null,null))}remove(e){return new Ae(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,_e.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Fs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Fs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Fs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Fs(this.root_,null,this.comparator_,!0,e)}}Ae.EMPTY_NODE=new mg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(t,e){return Bn(t.name,e.name)}function po(t,e){return Bn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xr;function vg(t){xr=t}const Su=function(t){return typeof t=="number"?"number:"+tu(t):"string:"+t},Tu=function(t){if(t.isLeafNode()){const e=t.val();w(typeof e=="string"||typeof e=="number"||typeof e=="object"&&mt(e,".sv"),"Priority must be a string or number.")}else w(t===xr||t.isEmpty(),"priority of unexpected type.");w(t===xr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jl;class pe{constructor(e,n=pe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,w(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Tu(this.priorityNode_)}static set __childrenNodeConstructor(e){Jl=e}static get __childrenNodeConstructor(){return Jl}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new pe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return V(e)?this:$(e)===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:pe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=$(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(w(s!==".priority"||Pt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,pe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ie(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Su(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=tu(this.value_):e+=this.value_,this.lazyHash_=Jc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===pe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof pe.__childrenNodeConstructor?-1:(w(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=pe.VALUE_TYPE_ORDER.indexOf(n),r=pe.VALUE_TYPE_ORDER.indexOf(s);return w(i>=0,"Unknown leaf type: "+n),w(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}pe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xu,Ru;function Eg(t){xu=t}function Cg(t){Ru=t}class bg extends Si{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Bn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return j.MIN}maxPost(){return new j(Yt,new pe("[PRIORITY-POST]",Ru))}makePost(e,n){const s=xu(e);return new j(n,new pe("[PRIORITY-POST]",s))}toString(){return".priority"}}const ae=new bg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg=Math.log(2);class Ig{constructor(e){const n=r=>parseInt(Math.log(r)/wg,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ti=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,f;if(u===0)return null;if(u===1)return h=t[a],f=n?n(h):h,new _e(f,h.node,_e.BLACK,null,null);{const g=parseInt(u/2,10)+a,v=i(a,g),S=i(g+1,c);return h=t[g],f=n?n(h):h,new _e(f,h.node,_e.BLACK,v,S)}},r=function(a){let c=null,u=null,h=t.length;const f=function(v,S){const P=h-v,O=h;h-=v;const D=i(P+1,O),K=t[P],F=n?n(K):K;g(new _e(F,K.node,S,null,D))},g=function(v){c?(c.left=v,c=v):(u=v,c=v)};for(let v=0;v<a.count;++v){const S=a.nextBitIsOne(),P=Math.pow(2,a.count-(v+1));S?f(P,_e.BLACK):(f(P,_e.BLACK),f(P,_e.RED))}return u},o=new Ig(t.length),l=r(o);return new Ae(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yi;const ln={};class ut{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return w(ln&&ae,"ChildrenNode.ts has not been loaded"),Yi=Yi||new ut({".priority":ln},{".priority":ae}),Yi}get(e){const n=Tn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ae?n:null}hasIndex(e){return mt(this.indexSet_,e.toString())}addIndex(e,n){w(e!==En,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(j.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=ti(s,e.getCompare()):l=ln;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new ut(u,c)}addToIndexes(e,n){const s=Qs(this.indexes_,(i,r)=>{const o=Tn(this.indexSet_,r);if(w(o,"Missing index implementation for "+r),i===ln)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(j.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),ti(l,o.getCompare())}else return ln;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new j(e.name,l))),a.insert(e,e.node)}});return new ut(s,this.indexSet_)}removeFromIndexes(e,n){const s=Qs(this.indexes_,i=>{if(i===ln)return i;{const r=n.get(e.name);return r?i.remove(new j(e.name,r)):i}});return new ut(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kn;class B{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Tu(this.priorityNode_),this.children_.isEmpty()&&w(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Kn||(Kn=new B(new Ae(po),null,ut.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Kn}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Kn:n}}getChild(e){const n=$(e);return n===null?this:this.getImmediateChild(n).getChild(ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(w(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new j(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Kn:this.priorityNode_;return new B(i,o,r)}}updateChild(e,n){const s=$(e);if(s===null)return n;{w($(e)!==".priority"||Pt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ie(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ae,(o,l)=>{n[o]=l.val(e),s++,r&&B.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Su(this.getPriority().val())+":"),this.forEachChild(ae,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Jc(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new j(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new j(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new j(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,j.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ts?-1:0}withIndex(e){if(e===En||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===En||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ae),i=n.getIterator(ae);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===En?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Sg extends B{constructor(){super(new Ae(po),B.EMPTY_NODE,ut.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const Ts=new Sg;Object.defineProperties(j,{MIN:{value:new j(xn,B.EMPTY_NODE)},MAX:{value:new j(Yt,Ts)}});Iu.__EMPTY_NODE=B.EMPTY_NODE;pe.__childrenNodeConstructor=B;vg(Ts);Cg(Ts);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg=!0;function me(t,e=null){if(t===null)return B.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),w(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new pe(n,me(e))}if(!(t instanceof Array)&&Tg){const n=[];let s=!1;if(ke(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=me(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new j(o,a)))}}),n.length===0)return B.EMPTY_NODE;const r=ti(n,yg,o=>o.name,po);if(s){const o=ti(n,ae.getCompare());return new B(r,me(e),new ut({".priority":o},{".priority":ae}))}else return new B(r,me(e),ut.Default)}else{let n=B.EMPTY_NODE;return ke(t,(s,i)=>{if(mt(t,s)&&s.substring(0,1)!=="."){const r=me(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(me(e))}}Eg(me);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg extends Si{constructor(e){super(),this.indexPath_=e,w(!V(e)&&$(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Bn(e.name,n.name):r}makePost(e,n){const s=me(e),i=B.EMPTY_NODE.updateChild(this.indexPath_,s);return new j(n,i)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,Ts);return new j(Yt,e)}toString(){return Cu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg extends Si{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Bn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,n){const s=me(e);return new j(n,s)}toString(){return".value"}}const Ng=new Rg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t){return{type:"value",snapshotNode:t}}function Rn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function _s(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function gs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Ag(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){w(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(_s(n,l)):w(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Rn(n,s)):o.trackChildChange(gs(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ae,(i,r)=>{n.hasChild(i)||s.trackChildChange(_s(i,r))}),n.isLeafNode()||n.forEachChild(ae,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(gs(i,r,o))}else s.trackChildChange(Rn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?B.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.indexedFilter_=new _o(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ms.getStartPost_(e),this.endPost_=ms.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new j(n,s))||(s=B.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=B.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(B.EMPTY_NODE);const r=this;return n.forEachChild(ae,(o,l)=>{r.matches(new j(o,l))||(i=i.updateImmediateChild(o,B.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ms(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new j(n,s))||(s=B.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=B.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(B.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,g)=>h(g,f)}else o=this.index_.getCompare();const l=e;w(l.numChildren()===this.limit_,"");const a=new j(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,a);if(u&&!s.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(gs(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(_s(n,h));const S=l.updateImmediateChild(n,B.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Rn(f.name,f.node)),S.updateImmediateChild(f.name,f.node)):S}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(_s(c.name,c.node)),r.trackChildChange(Rn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,B.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ae}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return w(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return w(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:xn}hasEnd(){return this.endSet_}getIndexEndValue(){return w(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return w(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Yt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return w(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ae}copy(){const e=new go;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Og(t){return t.loadsAllData()?new _o(t.getIndex()):t.hasLimit()?new Pg(t):new ms(t)}function Zl(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ae?n="$priority":t.index_===Ng?n="$value":t.index_===En?n="$key":(w(t.index_ instanceof xg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ge(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=ge(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+ge(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=ge(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+ge(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ea(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ae&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends yu{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ss("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(w(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ni.getListenId_(e,s),l={};this.listens_[o]=l;const a=Zl(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Tn(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=ni.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Zl(e._queryParams),s=e._path.toString(),i=new wi;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+up(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=hs(l.responseText)}catch{Pe("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Pe("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(){return{value:null,children:new Map}}function Au(t,e,n){if(V(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=$(e);t.children.has(s)||t.children.set(s,si());const i=t.children.get(s);e=ie(e),Au(i,e,n)}}function Rr(t,e,n){t.value!==null?n(e,t.value):Dg(t,(s,i)=>{const r=new te(e.toString()+"/"+s);Rr(i,r,n)})}function Dg(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ke(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=10*1e3,Lg=30*1e3,Fg=5*60*1e3;class Bg{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Mg(e);const s=ta+(Lg-ta)*Math.random();Zn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;ke(e,(i,r)=>{r>0&&mt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Zn(this.reportStats_.bind(this),Math.floor(Math.random()*2*Fg))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(qe||(qe={}));function Pu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function mo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function yo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=qe.ACK_USER_WRITE,this.source=Pu()}operationForChild(e){if(V(this.path)){if(this.affectedTree.value!=null)return w(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new te(e));return new ii(G(),n,this.revert)}}else return w($(this.path)===e,"operationForChild called for unrelated child."),new ii(ie(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n){this.source=e,this.path=n,this.type=qe.LISTEN_COMPLETE}operationForChild(e){return V(this.path)?new ys(this.source,G()):new ys(this.source,ie(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=qe.OVERWRITE}operationForChild(e){return V(this.path)?new Qt(this.source,G(),this.snap.getImmediateChild(e)):new Qt(this.source,ie(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=qe.MERGE}operationForChild(e){if(V(this.path)){const n=this.children.subtree(new te(e));return n.isEmpty()?null:n.value?new Qt(this.source,G(),n.value):new vs(this.source,G(),n)}else return w($(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new vs(this.source,ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(V(e))return this.isFullyInitialized()&&!this.filtered_;const n=$(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Hg(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Ag(o.childName,o.snapshotNode))}),qn(t,i,"child_removed",e,s,n),qn(t,i,"child_added",e,s,n),qn(t,i,"child_moved",r,s,n),qn(t,i,"child_changed",e,s,n),qn(t,i,"value",e,s,n),i}function qn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>$g(t,l,a)),o.forEach(l=>{const a=Wg(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Wg(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function $g(t,e,n){if(e.childName==null||n.childName==null)throw Ln("Should only compare child_ events.");const s=new j(e.childName,e.snapshotNode),i=new j(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(t,e){return{eventCache:t,serverCache:e}}function es(t,e,n,s){return Ti(new Xt(e,n,s),t.serverCache)}function Ou(t,e,n,s){return Ti(t.eventCache,new Xt(e,n,s))}function Nr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Jt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qi;const jg=()=>(Qi||(Qi=new Ae(R_)),Qi);class re{constructor(e,n=jg()){this.value=e,this.children=n}static fromObject(e){let n=new re(null);return ke(e,(s,i)=>{n=n.set(new te(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:G(),value:this.value};if(V(e))return null;{const s=$(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ie(e),n);return r!=null?{path:he(new te(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(V(e))return this;{const n=$(e),s=this.children.get(n);return s!==null?s.subtree(ie(e)):new re(null)}}set(e,n){if(V(e))return new re(n,this.children);{const s=$(e),r=(this.children.get(s)||new re(null)).set(ie(e),n),o=this.children.insert(s,r);return new re(this.value,o)}}remove(e){if(V(e))return this.children.isEmpty()?new re(null):new re(null,this.children);{const n=$(e),s=this.children.get(n);if(s){const i=s.remove(ie(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new re(null):new re(this.value,r)}else return this}}get(e){if(V(e))return this.value;{const n=$(e),s=this.children.get(n);return s?s.get(ie(e)):null}}setTree(e,n){if(V(e))return n;{const s=$(e),r=(this.children.get(s)||new re(null)).setTree(ie(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new re(this.value,o)}}fold(e){return this.fold_(G(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(he(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,G(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(V(e))return null;{const r=$(e),o=this.children.get(r);return o?o.findOnPath_(ie(e),he(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,G(),n)}foreachOnPath_(e,n,s){if(V(e))return this;{this.value&&s(n,this.value);const i=$(e),r=this.children.get(i);return r?r.foreachOnPath_(ie(e),he(n,i),s):new re(null)}}foreach(e){this.foreach_(G(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(he(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.writeTree_=e}static empty(){return new Qe(new re(null))}}function ts(t,e,n){if(V(e))return new Qe(new re(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ne(i,e);return r=r.updateChild(o,n),new Qe(t.writeTree_.set(i,r))}else{const i=new re(n),r=t.writeTree_.setTree(e,i);return new Qe(r)}}}function na(t,e,n){let s=t;return ke(n,(i,r)=>{s=ts(s,he(e,i),r)}),s}function sa(t,e){if(V(e))return Qe.empty();{const n=t.writeTree_.setTree(e,new re(null));return new Qe(n)}}function Ar(t,e){return Zt(t,e)!=null}function Zt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ne(n.path,e)):null}function ia(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ae,(s,i)=>{e.push(new j(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new j(s,i.value))}),e}function Nt(t,e){if(V(e))return t;{const n=Zt(t,e);return n!=null?new Qe(new re(n)):new Qe(t.writeTree_.subtree(e))}}function Pr(t){return t.writeTree_.isEmpty()}function Nn(t,e){return ku(G(),t.writeTree_,e)}function ku(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(w(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=ku(he(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(he(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(t,e){return Fu(e,t)}function Vg(t,e,n,s,i){w(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=ts(t.visibleWrites,e,n)),t.lastWriteId=s}function zg(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Kg(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);w(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&qg(l,s.path)?i=!1:Ke(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Gg(t),!0;if(s.snap)t.visibleWrites=sa(t.visibleWrites,s.path);else{const l=s.children;ke(l,a=>{t.visibleWrites=sa(t.visibleWrites,he(s.path,a))})}return!0}else return!1}function qg(t,e){if(t.snap)return Ke(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ke(he(t.path,n),e))return!0;return!1}function Gg(t){t.visibleWrites=Du(t.allWrites,Yg,G()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Yg(t){return t.visible}function Du(t,e,n){let s=Qe.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Ke(n,o)?(l=Ne(n,o),s=ts(s,l,r.snap)):Ke(o,n)&&(l=Ne(o,n),s=ts(s,G(),r.snap.getChild(l)));else if(r.children){if(Ke(n,o))l=Ne(n,o),s=na(s,l,r.children);else if(Ke(o,n))if(l=Ne(o,n),V(l))s=na(s,G(),r.children);else{const a=Tn(r.children,$(l));if(a){const c=a.getChild(ie(l));s=ts(s,G(),c)}}}else throw Ln("WriteRecord should have .snap or .children")}}return s}function Mu(t,e,n,s,i){if(!s&&!i){const r=Zt(t.visibleWrites,e);if(r!=null)return r;{const o=Nt(t.visibleWrites,e);if(Pr(o))return n;if(n==null&&!Ar(o,G()))return null;{const l=n||B.EMPTY_NODE;return Nn(o,l)}}}else{const r=Nt(t.visibleWrites,e);if(!i&&Pr(r))return n;if(!i&&n==null&&!Ar(r,G()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Ke(c.path,e)||Ke(e,c.path))},l=Du(t.allWrites,o,e),a=n||B.EMPTY_NODE;return Nn(l,a)}}}function Qg(t,e,n){let s=B.EMPTY_NODE;const i=Zt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ae,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Nt(t.visibleWrites,e);return n.forEachChild(ae,(o,l)=>{const a=Nn(Nt(r,new te(o)),l);s=s.updateImmediateChild(o,a)}),ia(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Nt(t.visibleWrites,e);return ia(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Xg(t,e,n,s,i){w(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=he(e,n);if(Ar(t.visibleWrites,r))return null;{const o=Nt(t.visibleWrites,r);return Pr(o)?i.getChild(n):Nn(o,i.getChild(n))}}function Jg(t,e,n,s){const i=he(e,n),r=Zt(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Nt(t.visibleWrites,i);return Nn(o,s.getNode().getImmediateChild(n))}else return null}function Zg(t,e){return Zt(t.visibleWrites,e)}function em(t,e,n,s,i,r,o){let l;const a=Nt(t.visibleWrites,e),c=Zt(a,G());if(c!=null)l=c;else if(n!=null)l=Nn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let g=f.getNext();for(;g&&u.length<i;)h(g,s)!==0&&u.push(g),g=f.getNext();return u}else return[]}function tm(){return{visibleWrites:Qe.empty(),allWrites:[],lastWriteId:-1}}function ri(t,e,n,s){return Mu(t.writeTree,t.treePath,e,n,s)}function Eo(t,e){return Qg(t.writeTree,t.treePath,e)}function ra(t,e,n,s){return Xg(t.writeTree,t.treePath,e,n,s)}function oi(t,e){return Zg(t.writeTree,he(t.treePath,e))}function nm(t,e,n,s,i,r){return em(t.writeTree,t.treePath,e,n,s,i,r)}function Co(t,e,n){return Jg(t.writeTree,t.treePath,e,n)}function Lu(t,e){return Fu(he(t.treePath,e),t.writeTree)}function Fu(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;w(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),w(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,gs(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,_s(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Rn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,gs(s,e.snapshotNode,i.oldSnap));else throw Ln("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Bu=new im;class bo{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Xt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Co(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Jt(this.viewCache_),r=nm(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(t){return{filter:t}}function om(t,e){w(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),w(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function lm(t,e,n,s,i){const r=new sm;let o,l;if(n.type===qe.OVERWRITE){const c=n;c.source.fromUser?o=Or(t,e,c.path,c.snap,s,i,r):(w(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!V(c.path),o=li(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===qe.MERGE){const c=n;c.source.fromUser?o=cm(t,e,c.path,c.children,s,i,r):(w(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=kr(t,e,c.path,c.children,s,i,l,r))}else if(n.type===qe.ACK_USER_WRITE){const c=n;c.revert?o=fm(t,e,c.path,s,i,r):o=um(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===qe.LISTEN_COMPLETE)o=hm(t,e,n.path,s,r);else throw Ln("Unknown operation type: "+n.type);const a=r.getChanges();return am(e,o,a),{viewCache:o,changes:a}}function am(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Nr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Nu(Nr(e)))}}function Uu(t,e,n,s,i,r){const o=e.eventCache;if(oi(s,n)!=null)return e;{let l,a;if(V(n))if(w(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Jt(e),u=c instanceof B?c:B.EMPTY_NODE,h=Eo(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=ri(s,Jt(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=$(n);if(c===".priority"){w(Pt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=ra(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=ie(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=ra(s,n,o.getNode(),a);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=Co(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return es(e,l,o.isFullyInitialized()||V(n),t.filter.filtersNodes())}}function li(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(V(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),g,null)}else{const g=$(n);if(!a.isCompleteForPath(n)&&Pt(n)>1)return e;const v=ie(n),P=a.getNode().getImmediateChild(g).updateChild(v,s);g===".priority"?c=u.updatePriority(a.getNode(),P):c=u.updateChild(a.getNode(),g,P,v,Bu,null)}const h=Ou(e,c,a.isFullyInitialized()||V(n),u.filtersNodes()),f=new bo(i,h,r);return Uu(t,h,n,i,f,l)}function Or(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new bo(i,e,r);if(V(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=es(e,c,!0,t.filter.filtersNodes());else{const h=$(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=es(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=ie(n),g=l.getNode().getImmediateChild(h);let v;if(V(f))v=s;else{const S=u.getCompleteChild(h);S!=null?Eu(f)===".priority"&&S.getChild(bu(f)).isEmpty()?v=S:v=S.updateChild(f,s):v=B.EMPTY_NODE}if(g.equals(v))a=e;else{const S=t.filter.updateChild(l.getNode(),h,v,f,u,o);a=es(e,S,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function oa(t,e){return t.eventCache.isCompleteForChild(e)}function cm(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=he(n,a);oa(e,$(u))&&(l=Or(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=he(n,a);oa(e,$(u))||(l=Or(t,l,u,c,i,r,o))}),l}function la(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function kr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;V(n)?c=s:c=new re(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),v=la(t,g,f);a=li(t,a,new te(h),v,i,r,o,l)}}),c.children.inorderTraversal((h,f)=>{const g=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!g){const v=e.serverCache.getNode().getImmediateChild(h),S=la(t,v,f);a=li(t,a,new te(h),S,i,r,o,l)}}),a}function um(t,e,n,s,i,r,o){if(oi(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(V(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return li(t,e,n,a.getNode().getChild(n),i,r,l,o);if(V(n)){let c=new re(null);return a.getNode().forEachChild(En,(u,h)=>{c=c.set(new te(u),h)}),kr(t,e,n,c,i,r,l,o)}else return e}else{let c=new re(null);return s.foreach((u,h)=>{const f=he(n,u);a.isCompleteForPath(f)&&(c=c.set(u,a.getNode().getChild(f)))}),kr(t,e,n,c,i,r,l,o)}}function hm(t,e,n,s,i){const r=e.serverCache,o=Ou(e,r.getNode(),r.isFullyInitialized()||V(n),r.isFiltered());return Uu(t,o,n,s,Bu,i)}function fm(t,e,n,s,i,r){let o;if(oi(s,n)!=null)return e;{const l=new bo(s,e,i),a=e.eventCache.getNode();let c;if(V(n)||$(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ri(s,Jt(e));else{const h=e.serverCache.getNode();w(h instanceof B,"serverChildren would be complete if leaf node"),u=Eo(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=$(n);let h=Co(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,ie(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,B.EMPTY_NODE,ie(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ri(s,Jt(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||oi(s,G())!=null,es(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new _o(s.getIndex()),r=Og(s);this.processor_=rm(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(B.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(B.EMPTY_NODE,l.getNode(),null),u=new Xt(a,o.isFullyInitialized(),i.filtersNodes()),h=new Xt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ti(h,u),this.eventGenerator_=new Ug(this.query_)}get query(){return this.query_}}function pm(t){return t.viewCache_.serverCache.getNode()}function _m(t,e){const n=Jt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!V(e)&&!n.getImmediateChild($(e)).isEmpty())?n.getChild(e):null}function aa(t){return t.eventRegistrations_.length===0}function gm(t,e){t.eventRegistrations_.push(e)}function ca(t,e,n){const s=[];if(n){w(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function ua(t,e,n,s){e.type===qe.MERGE&&e.source.queryId!==null&&(w(Jt(t.viewCache_),"We should always have a full cache before handling merges"),w(Nr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=lm(t.processor_,i,e,n,s);return om(t.processor_,r.viewCache),w(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Hu(t,r.changes,r.viewCache.eventCache.getNode(),null)}function mm(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ae,(r,o)=>{s.push(Rn(r,o))}),n.isFullyInitialized()&&s.push(Nu(n.getNode())),Hu(t,s,n.getNode(),e)}function Hu(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Hg(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ai;class ym{constructor(){this.views=new Map}}function vm(t){w(!ai,"__referenceConstructor has already been defined"),ai=t}function Em(){return w(ai,"Reference.ts has not been loaded"),ai}function Cm(t){return t.views.size===0}function wo(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return w(r!=null,"SyncTree gave us an op for an invalid query."),ua(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(ua(o,e,n,s));return r}}function bm(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=ri(n,i?s:null),a=!1;l?a=!0:s instanceof B?(l=Eo(n,s),a=!1):(l=B.EMPTY_NODE,a=!1);const c=Ti(new Xt(l,a,!1),new Xt(s,i,!1));return new dm(e,c)}return o}function wm(t,e,n,s,i,r){const o=bm(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),gm(o,n),mm(o,n)}function Im(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Ot(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(ca(c,n,s)),aa(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(ca(a,n,s)),aa(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Ot(t)&&r.push(new(Em())(e._repo,e._path)),{removed:r,events:o}}function Wu(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Cn(t,e){let n=null;for(const s of t.views.values())n=n||_m(s,e);return n}function $u(t,e){if(e._queryParams.loadsAllData())return xi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function ju(t,e){return $u(t,e)!=null}function Ot(t){return xi(t)!=null}function xi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ci;function Sm(t){w(!ci,"__referenceConstructor has already been defined"),ci=t}function Tm(){return w(ci,"Reference.ts has not been loaded"),ci}let xm=1;class ha{constructor(e){this.listenProvider_=e,this.syncPointTree_=new re(null),this.pendingWriteTree_=tm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Vu(t,e,n,s,i){return Vg(t.pendingWriteTree_,e,n,s,i),i?xs(t,new Qt(Pu(),e,n)):[]}function jt(t,e,n=!1){const s=zg(t.pendingWriteTree_,e);if(Kg(t.pendingWriteTree_,e)){let r=new re(null);return s.snap!=null?r=r.set(G(),!0):ke(s.children,o=>{r=r.set(new te(o),!0)}),xs(t,new ii(s.path,r,n))}else return[]}function Ri(t,e,n){return xs(t,new Qt(mo(),e,n))}function Rm(t,e,n){const s=re.fromObject(n);return xs(t,new vs(mo(),e,s))}function Nm(t,e){return xs(t,new ys(mo(),e))}function Am(t,e,n){const s=So(t,n);if(s){const i=To(s),r=i.path,o=i.queryId,l=Ne(r,e),a=new ys(yo(o),l);return xo(t,r,a)}else return[]}function Dr(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||ju(o,e))){const a=Im(o,e,n,s);Cm(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(f,g)=>Ot(g));if(u&&!h){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const g=km(f);for(let v=0;v<g.length;++v){const S=g[v],P=S.query,O=qu(t,S);t.listenProvider_.startListening(ns(P),ui(t,P),O.hashFn,O.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(ns(e),null):c.forEach(f=>{const g=t.queryToTagMap.get(Ni(f));t.listenProvider_.stopListening(ns(f),g)}))}Dm(t,c)}return l}function Pm(t,e,n,s){const i=So(t,s);if(i!=null){const r=To(i),o=r.path,l=r.queryId,a=Ne(o,e),c=new Qt(yo(l),a,n);return xo(t,o,c)}else return[]}function Om(t,e,n,s){const i=So(t,s);if(i){const r=To(i),o=r.path,l=r.queryId,a=Ne(o,e),c=re.fromObject(n),u=new vs(yo(l),a,c);return xo(t,o,u)}else return[]}function fa(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,g)=>{const v=Ne(f,i);r=r||Cn(g,v),o=o||Ot(g)});let l=t.syncPointTree_.get(i);l?(o=o||Ot(l),r=r||Cn(l,G())):(l=new ym,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=B.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,v)=>{const S=Cn(v,G());S&&(r=r.updateImmediateChild(g,S))}));const c=ju(l,e);if(!c&&!e._queryParams.loadsAllData()){const f=Ni(e);w(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const g=Mm();t.queryToTagMap.set(f,g),t.tagToQueryMap.set(g,f)}const u=vo(t.pendingWriteTree_,i);let h=wm(l,e,n,u,r,a);if(!c&&!o&&!s){const f=$u(l,e);h=h.concat(Lm(t,e,f))}return h}function Io(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ne(o,e),c=Cn(l,a);if(c)return c});return Mu(i,e,r,n,!0)}function xs(t,e){return zu(e,t.syncPointTree_,null,vo(t.pendingWriteTree_,G()))}function zu(t,e,n,s){if(V(t.path))return Ku(t,e,n,s);{const i=e.get(G());n==null&&i!=null&&(n=Cn(i,G()));let r=[];const o=$(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=Lu(s,o);r=r.concat(zu(l,a,c,u))}return i&&(r=r.concat(wo(i,t,s,n))),r}}function Ku(t,e,n,s){const i=e.get(G());n==null&&i!=null&&(n=Cn(i,G()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=Lu(s,o),u=t.operationForChild(o);u&&(r=r.concat(Ku(u,l,a,c)))}),i&&(r=r.concat(wo(i,t,s,n))),r}function qu(t,e){const n=e.query,s=ui(t,n);return{hashFn:()=>(pm(e)||B.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Am(t,n._path,s):Nm(t,n._path);{const r=P_(i,n);return Dr(t,n,null,r)}}}}function ui(t,e){const n=Ni(e);return t.queryToTagMap.get(n)}function Ni(t){return t._path.toString()+"$"+t._queryIdentifier}function So(t,e){return t.tagToQueryMap.get(e)}function To(t){const e=t.indexOf("$");return w(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new te(t.substr(0,e))}}function xo(t,e,n){const s=t.syncPointTree_.get(e);w(s,"Missing sync point for query tag that we're tracking");const i=vo(t.pendingWriteTree_,e);return wo(s,n,i,null)}function km(t){return t.fold((e,n,s)=>{if(n&&Ot(n))return[xi(n)];{let i=[];return n&&(i=Wu(n)),ke(s,(r,o)=>{i=i.concat(o)}),i}})}function ns(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Tm())(t._repo,t._path):t}function Dm(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ni(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Mm(){return xm++}function Lm(t,e,n){const s=e._path,i=ui(t,e),r=qu(t,n),o=t.listenProvider_.startListening(ns(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)w(!Ot(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!V(c)&&u&&Ot(u))return[xi(u).query];{let f=[];return u&&(f=f.concat(Wu(u).map(g=>g.query))),ke(h,(g,v)=>{f=f.concat(v)}),f}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(ns(u),ui(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ro(n)}node(){return this.node_}}class No{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=he(this.path_,e);return new No(this.syncTree_,n)}node(){return Io(this.syncTree_,this.path_)}}const Fm=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},da=function(t,e,n){if(!t||typeof t!="object")return t;if(w(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Bm(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Um(t[".sv"],e);w(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Bm=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:w(!1,"Unexpected server value: "+t)}},Um=function(t,e,n){t.hasOwnProperty("increment")||w(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&w(!1,"Unexpected increment value: "+s);const i=e.node();if(w(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Hm=function(t,e,n,s){return Ao(e,new No(n,t),s)},Gu=function(t,e,n){return Ao(t,new Ro(e),n)};function Ao(t,e,n){const s=t.getPriority().val(),i=da(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=da(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new pe(l,me(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new pe(i))),o.forEachChild(ae,(l,a)=>{const c=Ao(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Oo(t,e){let n=e instanceof te?e:new te(e),s=t,i=$(n);for(;i!==null;){const r=Tn(s.node.children,i)||{children:{},childCount:0};s=new Po(i,s,r),n=ie(n),i=$(n)}return s}function Hn(t){return t.node.value}function Yu(t,e){t.node.value=e,Mr(t)}function Qu(t){return t.node.childCount>0}function Wm(t){return Hn(t)===void 0&&!Qu(t)}function Ai(t,e){ke(t.node.children,(n,s)=>{e(new Po(n,t,s))})}function Xu(t,e,n,s){n&&!s&&e(t),Ai(t,i=>{Xu(i,e,!0,s)}),n&&s&&e(t)}function $m(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Rs(t){return new te(t.parent===null?t.name:Rs(t.parent)+"/"+t.name)}function Mr(t){t.parent!==null&&jm(t.parent,t.name,t)}function jm(t,e,n){const s=Wm(n),i=mt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Mr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Mr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm=/[\[\].#$\/\u0000-\u001F\u007F]/,zm=/[\[\].#$\u0000-\u001F\u007F]/,Xi=10*1024*1024,Ju=function(t){return typeof t=="string"&&t.length!==0&&!Vm.test(t)},Zu=function(t){return typeof t=="string"&&t.length!==0&&!zm.test(t)},Km=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Zu(t)},eh=function(t,e,n,s){s&&e===void 0||ko(ro(t,"value"),e,n)},ko=function(t,e,n){const s=n instanceof te?new ug(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Bt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Bt(s)+" with contents = "+e.toString());if(Zc(e))throw new Error(t+"contains "+e.toString()+" "+Bt(s));if(typeof e=="string"&&e.length>Xi/3&&Ii(e)>Xi)throw new Error(t+"contains a string greater than "+Xi+" utf8 bytes "+Bt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(ke(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ju(o)))throw new Error(t+" contains an invalid key ("+o+") "+Bt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);hg(s,o),ko(t,l,s),fg(s)}),i&&r)throw new Error(t+' contains ".value" child '+Bt(s)+" in addition to actual children.")}},th=function(t,e,n,s){if(!(s&&n===void 0)&&!Zu(n))throw new Error(ro(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},qm=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),th(t,e,n,s)},nh=function(t,e){if($(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Gm=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ju(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Km(n))throw new Error(ro(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Do(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!ho(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function sh(t,e,n){Do(t,n),ih(t,s=>ho(s,e))}function _t(t,e,n){Do(t,n),ih(t,s=>Ke(s,e)||Ke(e,s))}function ih(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Qm(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Qm(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Kt&&Ce("event: "+n.toString()),Un(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm="repo_interrupt",Jm=25;class Zm{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ym,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=si(),this.transactionQueueTree_=new Po,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ey(t,e,n){if(t.stats_=co(t.repoInfo_),t.forceRestClient_||M_())t.server_=new ni(t.repoInfo_,(s,i,r,o)=>{pa(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>_a(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ge(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new dt(t.repoInfo_,e,(s,i,r,o)=>{pa(t,s,i,r,o)},s=>{_a(t,s)},s=>{ty(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=H_(t.repoInfo_,()=>new Bg(t.stats_,t.server_)),t.infoData_=new kg,t.infoSyncTree_=new ha({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=Ri(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Lo(t,"connected",!1),t.serverSyncTree_=new ha({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);_t(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function rh(t){const n=t.infoData_.getNode(new te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Mo(t){return Fm({timestamp:rh(t)})}function pa(t,e,n,s,i){t.dataUpdateCount++;const r=new te(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=Qs(n,c=>me(c));o=Om(t.serverSyncTree_,r,a,i)}else{const a=me(n);o=Pm(t.serverSyncTree_,r,a,i)}else if(s){const a=Qs(n,c=>me(c));o=Rm(t.serverSyncTree_,r,a)}else{const a=me(n);o=Ri(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Pi(t,r)),_t(t.eventQueue_,l,o)}function _a(t,e){Lo(t,"connected",e),e===!1&&sy(t)}function ty(t,e){ke(e,(n,s)=>{Lo(t,n,s)})}function Lo(t,e,n){const s=new te("/.info/"+e),i=me(n);t.infoData_.updateSnapshot(s,i);const r=Ri(t.infoSyncTree_,s,i);_t(t.eventQueue_,s,r)}function oh(t){return t.nextWriteId_++}function ny(t,e,n,s,i){Fo(t,"set",{path:e.toString(),value:n,priority:s});const r=Mo(t),o=me(n,s),l=Io(t.serverSyncTree_,e),a=Gu(o,l,r),c=oh(t),u=Vu(t.serverSyncTree_,e,a,c,!0);Do(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,g)=>{const v=f==="ok";v||Pe("set at "+e+" failed: "+f);const S=jt(t.serverSyncTree_,c,!v);_t(t.eventQueue_,e,S),oy(t,i,f,g)});const h=hh(t,e);Pi(t,h),_t(t.eventQueue_,h,[])}function sy(t){Fo(t,"onDisconnectEvents");const e=Mo(t),n=si();Rr(t.onDisconnect_,G(),(i,r)=>{const o=Hm(i,r,t.serverSyncTree_,e);Au(n,i,o)});let s=[];Rr(n,G(),(i,r)=>{s=s.concat(Ri(t.serverSyncTree_,i,r));const o=hh(t,i);Pi(t,o)}),t.onDisconnect_=si(),_t(t.eventQueue_,G(),s)}function iy(t,e,n){let s;$(e._path)===".info"?s=fa(t.infoSyncTree_,e,n):s=fa(t.serverSyncTree_,e,n),sh(t.eventQueue_,e._path,s)}function ga(t,e,n){let s;$(e._path)===".info"?s=Dr(t.infoSyncTree_,e,n):s=Dr(t.serverSyncTree_,e,n),sh(t.eventQueue_,e._path,s)}function ry(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Xm)}function Fo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ce(n,...e)}function oy(t,e,n,s){e&&Un(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function lh(t,e,n){return Io(t.serverSyncTree_,e,n)||B.EMPTY_NODE}function Bo(t,e=t.transactionQueueTree_){if(e||Oi(t,e),Hn(e)){const n=ch(t,e);w(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&ly(t,Rs(e),n)}else Qu(e)&&Ai(e,n=>{Bo(t,n)})}function ly(t,e,n){const s=n.map(c=>c.currentWriteId),i=lh(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];w(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ne(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Fo(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(jt(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Oi(t,Oo(t.transactionQueueTree_,e)),Bo(t,t.transactionQueueTree_),_t(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Un(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Pe("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Pi(t,e)}},o)}function Pi(t,e){const n=ah(t,e),s=Rs(n),i=ch(t,n);return ay(t,i,s),s}function ay(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Ne(n,a.path);let u=!1,h;if(w(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(jt(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Jm)u=!0,h="maxretry",i=i.concat(jt(t.serverSyncTree_,a.currentWriteId,!0));else{const f=lh(t,a.path,o);a.currentInputSnapshot=f;const g=e[l].update(f.val());if(g!==void 0){ko("transaction failed: Data returned ",g,a.path);let v=me(g);typeof g=="object"&&g!=null&&mt(g,".priority")||(v=v.updatePriority(f.getPriority()));const P=a.currentWriteId,O=Mo(t),D=Gu(v,f,O);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=D,a.currentWriteId=oh(t),o.splice(o.indexOf(P),1),i=i.concat(Vu(t.serverSyncTree_,a.path,D,a.currentWriteId,a.applyLocally)),i=i.concat(jt(t.serverSyncTree_,P,!0))}else u=!0,h="nodata",i=i.concat(jt(t.serverSyncTree_,a.currentWriteId,!0))}_t(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Oi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Un(s[l]);Bo(t,t.transactionQueueTree_)}function ah(t,e){let n,s=t.transactionQueueTree_;for(n=$(e);n!==null&&Hn(s)===void 0;)s=Oo(s,n),e=ie(e),n=$(e);return s}function ch(t,e){const n=[];return uh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function uh(t,e,n){const s=Hn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ai(e,i=>{uh(t,i,n)})}function Oi(t,e){const n=Hn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Yu(e,n.length>0?n:void 0)}Ai(e,s=>{Oi(t,s)})}function hh(t,e){const n=Rs(ah(t,e)),s=Oo(t.transactionQueueTree_,e);return $m(s,i=>{Ji(t,i)}),Ji(t,s),Xu(s,i=>{Ji(t,i)}),n}function Ji(t,e){const n=Hn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(w(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(w(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(jt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Yu(e,void 0):n.length=r+1,_t(t.eventQueue_,Rs(e),i);for(let o=0;o<s.length;o++)Un(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function uy(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Pe(`Invalid query segment '${n}' in query '${t}'`)}return e}const ma=function(t,e){const n=hy(t),s=n.namespace;n.domain==="firebase.com"&&pt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&pt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||T_();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new hu(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new te(n.pathString)}},hy=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=cy(t.substring(u,h)));const f=uy(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const v=e.indexOf(".");s=e.substring(0,v).toLowerCase(),n=e.substring(v+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",fy=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=ya.charAt(n%64),n=Math.floor(n/64);w(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=ya.charAt(e[i]);return w(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ge(this.snapshot.exportVal())}}class dh{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return w(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return V(this._path)?null:Eu(this._path)}get ref(){return new yt(this._repo,this._path)}get _queryIdentifier(){const e=ea(this._queryParams),n=lo(e);return n==="{}"?"default":n}get _queryObject(){return ea(this._queryParams)}isEqual(e){if(e=Fn(e),!(e instanceof Uo))return!1;const n=this._repo===e._repo,s=ho(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+cg(this._path)}}class yt extends Uo{constructor(e,n){super(e,n,new go,!1)}get parent(){const e=bu(this._path);return e===null?null:new yt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Es{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new te(e),s=An(this.ref,e);return new Es(this._node.getChild(n),s,ae)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Es(i,An(this.ref,s),ae)))}hasChild(e){const n=new te(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function va(t,e){return t=Fn(t),t._checkNotDeleted("ref"),e!==void 0?An(t._root,e):t._root}function An(t,e){return t=Fn(t),$(t._path)===null?qm("child","path",e,!1):th("child","path",e,!1),new yt(t._repo,he(t._path,e))}function py(t,e){t=Fn(t),nh("push",t._path),eh("push",e,t._path,!0);const n=rh(t._repo),s=fy(n),i=An(t,s),r=An(t,s);let o;return e!=null?o=_y(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function _y(t,e){t=Fn(t),nh("set",t._path),eh("set",e,t._path,!1);const n=new wi;return ny(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Ho{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new fh("value",this,new Es(e.snapshotNode,new yt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new dh(this,e,n):null}matches(e){return e instanceof Ho?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Wo{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new dh(this,e,n):null}createEvent(e,n){w(e.childName!=null,"Child events should have a childName.");const s=An(new yt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new fh(e.type,this,new Es(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Wo?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function gy(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const a=n,c=(u,h)=>{ga(t._repo,t,l),a(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new dy(n,r||void 0),l=e==="value"?new Ho(o):new Wo(e,o);return iy(t._repo,t,l),()=>ga(t._repo,t,l)}function my(t,e,n,s){return gy(t,"value",e,n,s)}vm(yt);Sm(yt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy="FIREBASE_DATABASE_EMULATOR_HOST",Lr={};let vy=!1;function Ey(t,e,n,s){t.repoInfo_=new hu(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function Cy(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||pt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ce("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ma(r,i),l=o.repoInfo,a,c;typeof process<"u"&&process.env&&(c=process.env[yy]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=ma(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new vn(vn.OWNER):new F_(t.name,t.options,e);Gm("Invalid Firebase Database URL",o),V(o.path)||pt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=wy(l,t,u,new L_(t.name,n));return new Iy(h,t)}function by(t,e){const n=Lr[e];(!n||n[t.key]!==t)&&pt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),ry(t),delete n[t.key]}function wy(t,e,n,s){let i=Lr[e.name];i||(i={},Lr[e.name]=i);let r=i[t.toURLString()];return r&&pt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Zm(t,vy,n,s),i[t.toURLString()]=r,r}class Iy{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ey(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new yt(this._repo,G())),this._rootInternal}_delete(){return this._rootInternal!==null&&(by(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&pt("Cannot call "+e+" on a deleted database.")}}function Fr(t=h_(),e){const n=l_(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Zd("database");s&&Sy(n,...s)}return n}function Sy(t,e,n,s={}){t=Fn(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&pt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&pt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new vn(vn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:ep(s.mockUserToken,t.app.options.projectId);r=new vn(o)}Ey(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(t){C_(u_),Js(new fs("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Cy(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),mn(Fl,Bl,t),mn(Fl,Bl,"esm2017")}dt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};dt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Ty();var xy="firebase",Ry="10.5.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mn(xy,Ry,"app");const Ny={apiKey:"AIzaSyDduNvimJGBKBPyB3biWR597yO1gygeYi0",authDomain:"chat-f02aa.firebaseapp.com",projectId:"chat-f02aa",storageBucket:"chat-f02aa.appspot.com",messagingSenderId:"70568979384",appId:"1:70568979384:web:768bbe670efbcc2bbbfd4d",measurementId:"G-5WH6SVM5VB"},Ay=qc(Ny);Fr(Ay);const Py=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Oy={setup(){const t=ar(""),e=ar(""),n=bs({username:"",messages:[]}),s=()=>{t.value!==""&&t.value!==null&&(n.username=t.value,t.value="")},i=()=>{n.username=""},r=()=>{const o=Fr(),l=va(o,"messages");if(e.value===""||e.value===null)return;const a={username:n.username,content:e.value};py(l,a),e.value=""};return vc(()=>{const o=Fr(),l=va(o,"messages");my(l,a=>{const c=a.val();let u=[];c&&(Object.keys(c).forEach(h=>{u.push({key:h,username:c[h].username,content:c[h].content})}),n.messages=u)})}),{inputUsername:t,Login:s,state:n,inputMessage:e,SendMessage:r,Logout:i}}},ky=ue("h1",{class:"text-white text-4xl mb-12"},[Ac("Connexion "),ue("span",{class:"text-orange-500"},"au chat")],-1),Dy=ue("label",{for:"username",class:"block mb-2 text-white text-lg transition duration-400"}," Pseudo ",-1),My=ue("input",{type:"submit",value:"login",class:"appearance-none border-none outline-none bg-none block w-full p-4 bg-orange-500 rounded text-black text-xl font-semibold"},null,-1),Ly=ue("h1",{class:"text-white text-4xl p-12 pb-4"},"Chat:",-1),Fy={class:"relative block w-full p-12 pb-4"},By={class:"text-white text-4xl"},Uy={class:"rounded-tl-lg rounded-tr-lg bg-black shadow-md flex-1 p-4"},Hy={key:0,class:"username text-orange-500 text-lg mb-2 px-6 text-right w-full"},Wy={key:1,class:"username text-orange-500 text-lg mb-2 px-6 w-full"},$y={key:2,class:"content-right inline-block p-4 bg-orange-200 rounded-l-lg text-black text-xl leading-relaxed"},jy={key:3,class:"content-left inline-block p-4 bg-orange-500 rounded-l-lg text-black text-xl leading-relaxed text-left"},Vy={class:"sticky bottom-0 bg-black p-4"},zy=ue("input",{type:"submit",value:"Envoyer",class:"appearance-none border-none outline-none bg-none block p-4 rounded-r bg-orange-500 text-black text-xl font-semibold"},null,-1),Ky={class:"mt-4"},qy=["onClick"],Gy={class:"mt-4"},Yy=["onClick"];function Qy(t,e,n,s,i,r){return Me(),Le("div",null,[s.state.username===""||s.state.username===null?(Me(),Le("div",{key:0,class:dn(["flex justify-center min-h-screen bg-black",{Login:s.state.username===""||s.state.username===null}])},[ue("form",{class:"login-form p-4",onSubmit:e[1]||(e[1]=Tl((...o)=>s.Login&&s.Login(...o),["prevent"]))},[ky,Dy,sl(ue("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>s.inputUsername=o),placeholder:"Entrez votre Pseudo",class:"appearance-none border-none outline-none bg-none block w-full p-4 rounded my-4 text-black text-xl shadow-none transition duration-400"},null,512),[[Sl,s.inputUsername]]),My],32)],2)):(Me(),Le("div",{key:1,class:dn(["flex-col",{Chat:s.state.username!==""&&s.state.username!==null}])},[Ly,ue("header",Fy,[ue("button",{class:"absolute top-4 right-4 appearance-none border-none outline-none bg-none text-white text-xl mb-4 text-right",onClick:e[2]||(e[2]=(...o)=>s.Logout&&s.Logout(...o))}," Deconnexion "),ue("h1",By,"Bienvenue "+Dt(s.state.username),1)]),ue("section",Uy,[(Me(!0),Le(Fe,null,Li(s.state.messages,o=>(Me(),Le("div",{key:o.key,class:dn([{"message current-user":o.username===s.state.username,"message other-user":o.username!==s.state.username},"flex mb-4"])},[o.username===s.state.username?(Me(),Le("div",Hy,Dt(o.username),1)):(Me(),Le("div",Wy,Dt(o.username),1)),o.username===s.state.username?(Me(),Le("div",$y,Dt(o.content),1)):(Me(),Le("div",jy,Dt(o.content),1))],2))),128))]),ue("footer",Vy,[ue("form",{onSubmit:e[4]||(e[4]=Tl((...o)=>s.SendMessage&&s.SendMessage(...o),["prevent"])),class:"flex"},[sl(ue("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=o=>s.inputMessage=o),placeholder:"Tapez votre message...",class:"flex-1 appearance-none border-none outline-none bg-orange-400 block w-full p-4 rounded-l text-black text-xl shadow-none transition duration-400"},null,512),[[Sl,s.inputMessage]]),zy],32),ue("div",Ky,[(Me(!0),Le(Fe,null,Li(t.salons,(o,l)=>(Me(),Le("button",{key:l,onClick:a=>t.changeSalon(l),class:"mr-2 px-4 py-2 bg-orange-500 text-black rounded-md"},Dt(l),9,qy))),128))]),ue("div",Gy,[(Me(!0),Le(Fe,null,Li(t.salons,(o,l)=>(Me(),Le("button",{key:l,onClick:a=>t.changeSalon(l),class:"mr-2 px-4 py-2 bg-orange-500 text-black rounded-md"},Dt(l),9,Yy))),128))])])],2))])}const Xy=Py(Oy,[["render",Qy]]);/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const cn=typeof window<"u";function Jy(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const J=Object.assign;function Zi(t,e){const n={};for(const s in e){const i=e[s];n[s]=Xe(i)?i.map(t):t(i)}return n}const ss=()=>{},Xe=Array.isArray,Zy=/\/$/,ev=t=>t.replace(Zy,"");function er(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("#");let a=e.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(s=e.slice(0,a),r=e.slice(a+1,l>-1?l:e.length),i=t(r)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=iv(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function tv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ea(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function nv(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Pn(e.matched[s],n.matched[i])&&ph(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Pn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ph(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!sv(t[n],e[n]))return!1;return!0}function sv(t,e){return Xe(t)?Ca(t,e):Xe(e)?Ca(e,t):t===e}function Ca(t,e){return Xe(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function iv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var Cs;(function(t){t.pop="pop",t.push="push"})(Cs||(Cs={}));var is;(function(t){t.back="back",t.forward="forward",t.unknown=""})(is||(is={}));function rv(t){if(!t)if(cn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ev(t)}const ov=/^[^#]+#/;function lv(t,e){return t.replace(ov,"#")+e}function av(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const ki=()=>({left:window.pageXOffset,top:window.pageYOffset});function cv(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=av(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ba(t,e){return(history.state?history.state.position-e:-1)+t}const Br=new Map;function uv(t,e){Br.set(t,e)}function hv(t){const e=Br.get(t);return Br.delete(t),e}let fv=()=>location.protocol+"//"+location.host;function _h(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let l=i.includes(t.slice(r))?t.slice(r).length:1,a=i.slice(l);return a[0]!=="/"&&(a="/"+a),Ea(a,"")}return Ea(n,t)+s+i}function dv(t,e,n,s){let i=[],r=[],o=null;const l=({state:f})=>{const g=_h(t,location),v=n.value,S=e.value;let P=0;if(f){if(n.value=g,e.value=f,o&&o===v){o=null;return}P=S?f.position-S.position:0}else s(g);i.forEach(O=>{O(n.value,v,{delta:P,type:Cs.pop,direction:P?P>0?is.forward:is.back:is.unknown})})};function a(){o=n.value}function c(f){i.push(f);const g=()=>{const v=i.indexOf(f);v>-1&&i.splice(v,1)};return r.push(g),g}function u(){const{history:f}=window;f.state&&f.replaceState(J({},f.state,{scroll:ki()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:c,destroy:h}}function wa(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?ki():null}}function pv(t){const{history:e,location:n}=window,s={value:_h(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(a,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:fv()+t+a;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function o(a,c){const u=J({},e.state,wa(i.value.back,a,i.value.forward,!0),c,{position:i.value.position});r(a,u,!0),s.value=a}function l(a,c){const u=J({},i.value,e.state,{forward:a,scroll:ki()});r(u.current,u,!0);const h=J({},wa(s.value,a,null),{position:u.position+1},c);r(a,h,!1),s.value=a}return{location:s,state:i,push:l,replace:o}}function _v(t){t=rv(t);const e=pv(t),n=dv(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=J({location:"",base:t,go:s,createHref:lv.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function gv(t){return typeof t=="string"||t&&typeof t=="object"}function gh(t){return typeof t=="string"||typeof t=="symbol"}const bt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},mh=Symbol("");var Ia;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ia||(Ia={}));function On(t,e){return J(new Error,{type:t,[mh]:!0},e)}function at(t,e){return t instanceof Error&&mh in t&&(e==null||!!(t.type&e))}const Sa="[^/]+?",mv={sensitive:!1,strict:!1,start:!0,end:!0},yv=/[.+*?^${}()[\]/\\]/g;function vv(t,e){const n=J({},mv,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const f=c[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(yv,"\\$&"),g+=40;else if(f.type===1){const{value:v,repeatable:S,optional:P,regexp:O}=f;r.push({name:v,repeatable:S,optional:P});const D=O||Sa;if(D!==Sa){g+=10;try{new RegExp(`(${D})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${v}" (${D}): `+F.message)}}let K=S?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;h||(K=P&&c.length<2?`(?:/${K})`:"/"+K),P&&(K+="?"),i+=K,g+=20,P&&(g+=-8),S&&(g+=-20),D===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",v=r[f-1];h[v.name]=g&&v.repeatable?g.split("/"):g}return h}function a(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:v,repeatable:S,optional:P}=g,O=v in c?c[v]:"";if(Xe(O)&&!S)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const D=Xe(O)?O.join("/"):O;if(!D)if(P)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);u+=D}}return u||"/"}return{re:o,score:s,keys:r,parse:l,stringify:a}}function Ev(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Cv(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=Ev(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Ta(s))return 1;if(Ta(i))return-1}return i.length-s.length}function Ta(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const bv={type:0,value:""},wv=/[a-zA-Z0-9_]/;function Iv(t){if(!t)return[[]];if(t==="/")return[[bv]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,a,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=a}for(;l<t.length;){if(a=t[l++],a==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:a==="/"?(c&&h(),o()):a===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:a==="("?n=2:wv.test(a)?f():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function Sv(t,e,n){const s=vv(Iv(t.path),n),i=J(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Tv(t,e){const n=[],s=new Map;e=Na({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,f){const g=!f,v=xv(u);v.aliasOf=f&&f.record;const S=Na(e,u),P=[v];if("alias"in u){const K=typeof u.alias=="string"?[u.alias]:u.alias;for(const F of K)P.push(J({},v,{components:f?f.record.components:v.components,path:F,aliasOf:f?f.record:v}))}let O,D;for(const K of P){const{path:F}=K;if(h&&F[0]!=="/"){const ve=h.record.path,Se=ve[ve.length-1]==="/"?"":"/";K.path=h.record.path+(F&&Se+F)}if(O=Sv(K,h,S),f?f.alias.push(O):(D=D||O,D!==O&&D.alias.push(O),g&&u.name&&!Ra(O)&&o(u.name)),v.children){const ve=v.children;for(let Se=0;Se<ve.length;Se++)r(ve[Se],O,f&&f.children[Se])}f=f||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&a(O)}return D?()=>{o(D)}:ss}function o(u){if(gh(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return n}function a(u){let h=0;for(;h<n.length&&Cv(u,n[h])>=0&&(u.record.path!==n[h].record.path||!yh(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Ra(u)&&s.set(u.record.name,u)}function c(u,h){let f,g={},v,S;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw On(1,{location:u});S=f.record.name,g=J(xa(h.params,f.keys.filter(D=>!D.optional).map(D=>D.name)),u.params&&xa(u.params,f.keys.map(D=>D.name))),v=f.stringify(g)}else if("path"in u)v=u.path,f=n.find(D=>D.re.test(v)),f&&(g=f.parse(v),S=f.record.name);else{if(f=h.name?s.get(h.name):n.find(D=>D.re.test(h.path)),!f)throw On(1,{location:u,currentLocation:h});S=f.record.name,g=J({},h.params,u.params),v=f.stringify(g)}const P=[];let O=f;for(;O;)P.unshift(O.record),O=O.parent;return{name:S,path:v,params:g,matched:P,meta:Nv(P)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:l,getRecordMatcher:i}}function xa(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function xv(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Rv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Rv(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Ra(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Nv(t){return t.reduce((e,n)=>J(e,n.meta),{})}function Na(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function yh(t,e){return e.children.some(n=>n===t||yh(t,n))}const vh=/#/g,Av=/&/g,Pv=/\//g,Ov=/=/g,kv=/\?/g,Eh=/\+/g,Dv=/%5B/g,Mv=/%5D/g,Ch=/%5E/g,Lv=/%60/g,bh=/%7B/g,Fv=/%7C/g,wh=/%7D/g,Bv=/%20/g;function $o(t){return encodeURI(""+t).replace(Fv,"|").replace(Dv,"[").replace(Mv,"]")}function Uv(t){return $o(t).replace(bh,"{").replace(wh,"}").replace(Ch,"^")}function Ur(t){return $o(t).replace(Eh,"%2B").replace(Bv,"+").replace(vh,"%23").replace(Av,"%26").replace(Lv,"`").replace(bh,"{").replace(wh,"}").replace(Ch,"^")}function Hv(t){return Ur(t).replace(Ov,"%3D")}function Wv(t){return $o(t).replace(vh,"%23").replace(kv,"%3F")}function $v(t){return t==null?"":Wv(t).replace(Pv,"%2F")}function hi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function jv(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Eh," "),o=r.indexOf("="),l=hi(o<0?r:r.slice(0,o)),a=o<0?null:hi(r.slice(o+1));if(l in e){let c=e[l];Xe(c)||(c=e[l]=[c]),c.push(a)}else e[l]=a}return e}function Aa(t){let e="";for(let n in t){const s=t[n];if(n=Hv(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Xe(s)?s.map(r=>r&&Ur(r)):[s&&Ur(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Vv(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Xe(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const zv=Symbol(""),Pa=Symbol(""),jo=Symbol(""),Ih=Symbol(""),Hr=Symbol("");function Gn(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function It(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,l)=>{const a=h=>{h===!1?l(On(4,{from:n,to:e})):h instanceof Error?l(h):gv(h)?l(On(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,a);let u=Promise.resolve(c);t.length<3&&(u=u.then(a)),u.catch(h=>l(h))})}function tr(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let l=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(Kv(l)){const c=(l.__vccOpts||l)[e];c&&i.push(It(c,n,s,r,o))}else{let a=l();i.push(()=>a.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=Jy(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&It(f,n,s,r,o)()}))}}return i}function Kv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Oa(t){const e=ft(jo),n=ft(Ih),s=We(()=>e.resolve(_n(t.to))),i=We(()=>{const{matched:a}=s.value,{length:c}=a,u=a[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Pn.bind(null,u));if(f>-1)return f;const g=ka(a[c-2]);return c>1&&ka(u)===g&&h[h.length-1].path!==g?h.findIndex(Pn.bind(null,a[c-2])):f}),r=We(()=>i.value>-1&&Qv(n.params,s.value.params)),o=We(()=>i.value>-1&&i.value===n.matched.length-1&&ph(n.params,s.value.params));function l(a={}){return Yv(a)?e[_n(t.replace)?"replace":"push"](_n(t.to)).catch(ss):Promise.resolve()}return{route:s,href:We(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}const qv=gc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Oa,setup(t,{slots:e}){const n=bs(Oa(t)),{options:s}=ft(jo),i=We(()=>({[Da(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Da(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:kc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),Gv=qv;function Yv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Qv(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Xe(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function ka(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Da=(t,e,n)=>t??e??n,Xv=gc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=ft(Hr),i=We(()=>t.route||s.value),r=ft(Pa,0),o=We(()=>{let c=_n(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),l=We(()=>i.value.matched[o.value]);$s(Pa,We(()=>o.value+1)),$s(zv,l),$s(Hr,i);const a=ar();return Hs(()=>[a.value,l.value,t.name],([c,u,h],[f,g,v])=>{u&&(u.instances[h]=c,g&&g!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!Pn(u,g)||!f)&&(u.enterCallbacks[h]||[]).forEach(S=>S(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=l.value,f=h&&h.components[u];if(!f)return Ma(n.default,{Component:f,route:c});const g=h.props[u],v=g?g===!0?c.params:typeof g=="function"?g(c):g:null,P=kc(f,J({},v,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(h.instances[u]=null)},ref:a}));return Ma(n.default,{Component:P,route:c})||P}}});function Ma(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Jv=Xv;function Zv(t){const e=Tv(t.routes,t),n=t.parseQuery||jv,s=t.stringifyQuery||Aa,i=t.history,r=Gn(),o=Gn(),l=Gn(),a=af(bt);let c=bt;cn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Zi.bind(null,y=>""+y),h=Zi.bind(null,$v),f=Zi.bind(null,hi);function g(y,N){let x,k;return gh(y)?(x=e.getRecordMatcher(y),k=N):k=y,e.addRoute(k,x)}function v(y){const N=e.getRecordMatcher(y);N&&e.removeRoute(N)}function S(){return e.getRoutes().map(y=>y.record)}function P(y){return!!e.getRecordMatcher(y)}function O(y,N){if(N=J({},N||a.value),typeof y=="string"){const _=er(n,y,N.path),m=e.resolve({path:_.path},N),E=i.createHref(_.fullPath);return J(_,m,{params:f(m.params),hash:hi(_.hash),redirectedFrom:void 0,href:E})}let x;if("path"in y)x=J({},y,{path:er(n,y.path,N.path).path});else{const _=J({},y.params);for(const m in _)_[m]==null&&delete _[m];x=J({},y,{params:h(_)}),N.params=h(N.params)}const k=e.resolve(x,N),X=y.hash||"";k.params=u(f(k.params));const d=tv(s,J({},y,{hash:Uv(X),path:k.path})),p=i.createHref(d);return J({fullPath:d,hash:X,query:s===Aa?Vv(y.query):y.query||{}},k,{redirectedFrom:void 0,href:p})}function D(y){return typeof y=="string"?er(n,y,a.value.path):J({},y)}function K(y,N){if(c!==y)return On(8,{from:N,to:y})}function F(y){return Je(y)}function ve(y){return F(J(D(y),{replace:!0}))}function Se(y){const N=y.matched[y.matched.length-1];if(N&&N.redirect){const{redirect:x}=N;let k=typeof x=="function"?x(y):x;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=D(k):{path:k},k.params={}),J({query:y.query,hash:y.hash,params:"path"in k?{}:y.params},k)}}function Je(y,N){const x=c=O(y),k=a.value,X=y.state,d=y.force,p=y.replace===!0,_=Se(x);if(_)return Je(J(D(_),{state:typeof _=="object"?J({},X,_.state):X,force:d,replace:p}),N||x);const m=x;m.redirectedFrom=N;let E;return!d&&nv(s,k,x)&&(E=On(16,{to:m,from:k}),tt(k,k,!0,!1)),(E?Promise.resolve(E):Ze(m,k)).catch(C=>at(C)?at(C,2)?C:Et(C):Q(C,m,k)).then(C=>{if(C){if(at(C,2))return Je(J({replace:p},D(C.to),{state:typeof C.to=="object"?J({},X,C.to.state):X,force:d}),N||m)}else C=kt(m,k,!0,p,X);return vt(m,k,C),C})}function ot(y,N){const x=K(y,N);return x?Promise.reject(x):Promise.resolve()}function en(y){const N=sn.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(y):y()}function Ze(y,N){let x;const[k,X,d]=eE(y,N);x=tr(k.reverse(),"beforeRouteLeave",y,N);for(const _ of k)_.leaveGuards.forEach(m=>{x.push(It(m,y,N))});const p=ot.bind(null,y,N);return x.push(p),Ee(x).then(()=>{x=[];for(const _ of r.list())x.push(It(_,y,N));return x.push(p),Ee(x)}).then(()=>{x=tr(X,"beforeRouteUpdate",y,N);for(const _ of X)_.updateGuards.forEach(m=>{x.push(It(m,y,N))});return x.push(p),Ee(x)}).then(()=>{x=[];for(const _ of d)if(_.beforeEnter)if(Xe(_.beforeEnter))for(const m of _.beforeEnter)x.push(It(m,y,N));else x.push(It(_.beforeEnter,y,N));return x.push(p),Ee(x)}).then(()=>(y.matched.forEach(_=>_.enterCallbacks={}),x=tr(d,"beforeRouteEnter",y,N),x.push(p),Ee(x))).then(()=>{x=[];for(const _ of o.list())x.push(It(_,y,N));return x.push(p),Ee(x)}).catch(_=>at(_,8)?_:Promise.reject(_))}function vt(y,N,x){l.list().forEach(k=>en(()=>k(y,N,x)))}function kt(y,N,x,k,X){const d=K(y,N);if(d)return d;const p=N===bt,_=cn?history.state:{};x&&(k||p?i.replace(y.fullPath,J({scroll:p&&_&&_.scroll},X)):i.push(y.fullPath,X)),a.value=y,tt(y,N,x,p),Et()}let et;function Wn(){et||(et=i.listen((y,N,x)=>{if(!Ns.listening)return;const k=O(y),X=Se(k);if(X){Je(J(X,{replace:!0}),k).catch(ss);return}c=k;const d=a.value;cn&&uv(ba(d.fullPath,x.delta),ki()),Ze(k,d).catch(p=>at(p,12)?p:at(p,2)?(Je(p.to,k).then(_=>{at(_,20)&&!x.delta&&x.type===Cs.pop&&i.go(-1,!1)}).catch(ss),Promise.reject()):(x.delta&&i.go(-x.delta,!1),Q(p,k,d))).then(p=>{p=p||kt(k,d,!1),p&&(x.delta&&!at(p,8)?i.go(-x.delta,!1):x.type===Cs.pop&&at(p,20)&&i.go(-1,!1)),vt(k,d,p)}).catch(ss)}))}let tn=Gn(),de=Gn(),ee;function Q(y,N,x){Et(y);const k=de.list();return k.length?k.forEach(X=>X(y,N,x)):console.error(y),Promise.reject(y)}function lt(){return ee&&a.value!==bt?Promise.resolve():new Promise((y,N)=>{tn.add([y,N])})}function Et(y){return ee||(ee=!y,Wn(),tn.list().forEach(([N,x])=>y?x(y):N()),tn.reset()),y}function tt(y,N,x,k){const{scrollBehavior:X}=t;if(!cn||!X)return Promise.resolve();const d=!x&&hv(ba(y.fullPath,0))||(k||!x)&&history.state&&history.state.scroll||null;return ac().then(()=>X(y,N,d)).then(p=>p&&cv(p)).catch(p=>Q(p,y,N))}const xe=y=>i.go(y);let nn;const sn=new Set,Ns={currentRoute:a,listening:!0,addRoute:g,removeRoute:v,hasRoute:P,getRoutes:S,resolve:O,options:t,push:F,replace:ve,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:de.add,isReady:lt,install(y){const N=this;y.component("RouterLink",Gv),y.component("RouterView",Jv),y.config.globalProperties.$router=N,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>_n(a)}),cn&&!nn&&a.value===bt&&(nn=!0,F(i.location).catch(X=>{}));const x={};for(const X in bt)Object.defineProperty(x,X,{get:()=>a.value[X],enumerable:!0});y.provide(jo,N),y.provide(Ih,Za(x)),y.provide(Hr,a);const k=y.unmount;sn.add(y),y.unmount=function(){sn.delete(y),sn.size<1&&(c=bt,et&&et(),et=null,a.value=bt,nn=!1,ee=!1),k()}}};function Ee(y){return y.reduce((N,x)=>N.then(()=>en(x)),Promise.resolve())}return Ns}function eE(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(c=>Pn(c,l))?s.push(l):n.push(l));const a=t.matched[o];a&&(e.matched.find(c=>Pn(c,a))||i.push(a))}return[n,s,i]}const tE=Zv({history:_v("/ChatApp/"),routes:[]});const Sh=$d(Xy);Sh.use(tE);Sh.mount("#app");
