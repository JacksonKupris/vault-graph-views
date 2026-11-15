var VaultGraphViews=(()=>{var Dl=Object.defineProperty;var ip=Object.getOwnPropertyDescriptor;var sp=Object.getOwnPropertyNames;var rp=Object.prototype.hasOwnProperty;var op=(i,t)=>{for(var e in t)Dl(i,e,{get:t[e],enumerable:!0})},ap=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of sp(t))!rp.call(i,s)&&s!==e&&Dl(i,s,{get:()=>t[s],enumerable:!(n=ip(t,s))||n.enumerable});return i};var lp=i=>ap(Dl({},"__esModule",{value:!0}),i);var zy={};op(zy,{VIEWS:()=>Oy,bench:()=>Qf,check:()=>Ll,checkInputs:()=>Bl,mountViews:()=>Vy});var Zs={top:{nodes:"array",links:"array",clusters:"array",wanted:"array"},node:{id:"string",name:"string",cluster:"number",folder:"string",inlinks:"number",outlinks:"number",words:"number"},link:{source:"string",target:"string",kind:"string"},cluster:{id:"number",name:"string",label:"string",size:"number"},strand:{days:"array",paths:"array",ids:"array",rows:"array"}},cp={n:"number",X:"array",stress:"number",grade:"string",domains:"array",loops:"array"},hp={guide:"string",where:"string",notes:"array"},up={ids:"array",level:"array",edges:"array",stats:"object"};var hn=i=>Array.isArray(i)?"array":i===null?"null":typeof i,mi=(i,t,e,n)=>{for(let[s,r]of Object.entries(n))hn(e[s])!==r&&i.push(`${t}.${s} should be ${r}, is ${hn(e[s])}`)};function Ll(i){let t=[];if(!i||typeof i!="object")return["data is not an object"];if(mi(t,"data",i,Zs.top),t.length)return t;i.nodes[0]&&mi(t,"nodes[0]",i.nodes[0],Zs.node),i.links[0]&&mi(t,"links[0]",i.links[0],Zs.link),i.clusters[0]&&mi(t,"clusters[0]",i.clusters[0],Zs.cluster);let e=new Set(i.nodes.map(s=>s.id));for(let s of i.wanted)e.add(s.id);let n=i.links.filter(s=>!e.has(s.source)||!e.has(s.target)).length;return n&&t.push(`${n} links point at a note that is in neither nodes nor wanted`),t}function Bl(i,t,e){let n=[],s=e||{};if(i==="genome"){let r=t&&t.strand;if(hn(r)!=="object")return[`data.strand should be object, is ${hn(r)}`];if(mi(n,"data.strand",r,Zs.strand),hn(s.fold)!=="object")return n.concat(`inputs.fold should be object, is ${hn(s.fold)}`);if(mi(n,"inputs.fold",s.fold,cp),n.length)return n;let o=s.fold;(r.rows.length!==r.days.length||r.paths.length!==r.days.length)&&n.push(`data.strand has ${r.days.length} days, ${r.rows.length} rows and ${r.paths.length} paths: they should be the same number`),(o.n!==r.days.length||o.X.length!==o.n)&&n.push(`inputs.fold is for ${o.n} days (${o.X.length} points) and data.strand has ${r.days.length}: the fold is from other data`);let a=o.loops.filter(l=>!(l.a>=0&&l.a<o.n&&l.b>=0&&l.b<o.n&&typeof l.count=="number")).length;a&&n.push(`${a} of inputs.fold.loops don't name two days of the strand and a count`)}if(i==="foodweb"){if(hn(s.web)!=="object")return n.concat(`inputs.web should be object, is ${hn(s.web)}`);if(mi(n,"inputs.web",s.web,up),n.length)return n;let r=s.web;r.level.length!==r.ids.length&&n.push(`inputs.web has ${r.ids.length} ids and ${r.level.length} levels: they should be the same`);let o=r.edges.filter(a=>!(a[0]>=0&&a[0]<r.ids.length&&a[1]>=0&&a[1]<r.ids.length)).length;o&&n.push(`${o} of inputs.web.edges don't name two of its ids`);for(let a of["mean","maxLevel","incoherence"])typeof r.stats[a]!="number"&&n.push(`inputs.web.stats.${a} should be number, is ${hn(r.stats[a])}`);if(n.length)return n}if(i==="cas9"&&s.scan!=null){if(hn(s.scan)!=="object")return[`inputs.scan should be object, is ${hn(s.scan)}`];mi(n,"inputs.scan",s.scan,hp),s.scan.ids!==void 0&&!Array.isArray(s.scan.ids)&&n.push(`inputs.scan.ids should be array, is ${hn(s.scan.ids)}`),!n.length&&s.scan.notes[0]&&(typeof s.scan.notes[0].path!="string"||typeof s.scan.notes[0].hits!="number")&&n.push("inputs.scan.notes[0] should be { path: string, hits: number }")}return s.hour!=null&&typeof s.hour!="number"&&n.push(`inputs.hour should be number, is ${hn(s.hour)}`),s.selected!=null&&typeof s.selected!="string"&&n.push(`inputs.selected should be string, is ${hn(s.selected)}`),n}var dp=["#4385BE","#879A39","#DA702C","#8B7EC8","#3AA99F","#D14D41","#D0A215","#CE5D97","#205EA6","#66800B","#BC5215","#5E409D","#24837B","#AF3029","#AD8301","#A02F6F"];function oo(i){return Object.assign({bg:"#14161a",fg:"#dddddd",muted:"#8a8f98",accent:"#6aa9ff",warn:"#f59e0b",palette:dp},i||{})}var du=0,yc=1,fu=2;var Tr=1,pu=2,As=3,Ai=0,Ce=1,me=2,si=0,Rs=1,Un=2,Mc=3,vc=4,mu=5;var Xi=100,gu=101,xu=102,_u=103,yu=104,Mu=200,vu=201,Su=202,bu=203,Sc=204,bc=205,wu=206,Eu=207,Tu=208,Au=209,Ru=210,Cu=211,Iu=212,Pu=213,Uu=214,Do=0,Lo=1,Bo=2,gs=3,ko=4,Oo=5,Vo=6,zo=7,Ar=0,Nu=1,Fu=2,Vn=0,Rr=1,Cr=2,Ir=3,Ji=4,Pr=5,Ur=6,Nr=7;var wc=300,qi=301,Cs=302,Ma=303,va=304,xs=1e3,Ln=1001,Go=1002,Ne=1003,Du=1004;var Fr=1005;var on=1006,Sa=1007;var ri=1008;var dn=1009,Ec=1010,Tc=1011,Is=1012,ba=1013,Nn=1014,wn=1015,qe=1016,wa=1017,Ea=1018,ji=1020,Ac=35902,Rc=35899,Cc=1021,Ic=1022,Fn=1023,ti=1026,oi=1027,Ta=1028,Aa=1029,Ri=1030,Ra=1031;var Ca=1033,Dr=33776,Lr=33777,Br=33778,kr=33779,Ia=35840,Pa=35841,Ua=35842,Na=35843,Fa=36196,Da=37492,La=37496,Ba=37488,ka=37489,Or=37490,Oa=37491,Va=37808,za=37809,Ga=37810,Ha=37811,Wa=37812,Za=37813,Ya=37814,Xa=37815,Ja=37816,qa=37817,ja=37818,Qa=37819,Ka=37820,$a=37821,tl=36492,el=36494,nl=36495,il=36283,sl=36284,Vr=36285,rl=36286;var nr=2300,Ho=2301,No=2302,hc=2303,uc=2400,dc=2401,fc=2402;var Lu=3200;var Ps=0,Bu=1,ai="",ze="srgb",ir="srgb-linear",sr="linear",ge="srgb";var Fo=7680;var ku=519,Ou=512,Vu=513,zu=514,Pc=515,Gu=516,Hu=517,Uc=518,Nc=519,Wu=35044;var Fc="300 es",Mn=2e3,_s=2001;function fp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function pp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zu(){let i=rr("canvas");return i.style.display="block",i}var Uh={},ys=null;function Dc(...i){let t="THREE."+i.shift();ys?ys("log",t,...i):console.log(t,...i)}function Yu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xt(...i){i=Yu(i);let t="THREE."+i.shift();if(ys)ys("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Kt(...i){i=Yu(i);let t="THREE."+i.shift();if(ys)ys("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function $s(...i){let t=i.join(" ");t in Uh||(Uh[t]=!0,Xt(...i))}function Xu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Ju={[Do]:Do,[Bo]:Vo,[ko]:ko,[gs]:Oo,[Lo]:Lo,[Vo]:Bo,[zo]:zo,[Oo]:gs},Bn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var kl=Math.PI/180,Wo=180/Math.PI;function zr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function ce(i,t,e){return Math.max(t,Math.min(e,i))}function mp(i,t){return(i%t+t)%t}function Ol(i,t,e){return(1-e)*i+e*t}function qu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Lc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function gp(i,t){if(t.constructor===Float32Array)return i;let e=Lc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function xp(i,t){if(t.constructor===Float32Array)return i;let e=Lc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Ut=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ge=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],p=r[o+2],M=r[o+3];if(d!==M||l!==u||c!==f||h!==p){let x=l*u+c*f+h*p+d*M;x<0&&(u=-u,f=-f,p=-p,M=-M,x=-x);let g=1-a;if(x<.9995){let y=Math.acos(x),w=Math.sin(y);g=Math.sin(g*y)/w,a=Math.sin(a*y)/w,l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+M*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+M*a;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-a*f,t[e+2]=c*p+h*f+a*u-l*d,t[e+3]=h*p-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Vl.copy(this).projectOnVector(t),this.sub(Vl)}reflect(t){return this.sub(Vl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Vl=new z,Nh=new Ge,$t=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],M=s[0],x=s[3],g=s[6],y=s[1],w=s[4],_=s[7],S=s[2],b=s[5],m=s[8];return r[0]=o*M+a*y+l*S,r[3]=o*x+a*w+l*b,r[6]=o*g+a*_+l*m,r[1]=c*M+h*y+d*S,r[4]=c*x+h*w+d*b,r[7]=c*g+h*_+d*m,r[2]=u*M+f*y+p*S,r[5]=u*x+f*w+p*b,r[8]=u*g+f*_+p*m,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,p=e*d+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/p;return t[0]=d*M,t[1]=(s*c-h*n)*M,t[2]=(a*n-s*o)*M,t[3]=u*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-a*e)*M,t[6]=f*M,t[7]=(n*l-c*e)*M,t[8]=(o*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return $s("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zl.makeScale(t,e)),this}rotate(t){return $s("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zl.makeRotation(-t)),this}translate(t,e){return $s("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},zl=new $t,Fh=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dh=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _p(){let i={enabled:!0,workingColorSpace:ir,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ge&&(s.r=$n(s.r),s.g=$n(s.g),s.b=$n(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ge&&(s.r=ms(s.r),s.g=ms(s.g),s.b=ms(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ai?sr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ir]:{primaries:t,whitePoint:n,transfer:sr,toXYZ:Fh,fromXYZ:Dh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:n,transfer:ge,toXYZ:Fh,fromXYZ:Dh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),i}var le=_p();function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var es,Zo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{es===void 0&&(es=rr("canvas")),es.width=t.width,es.height=t.height;let s=es.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=es}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=rr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$n(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($n(e[n]/255)*255):e[n]=$n(e[n]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},yp=0,Ms=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=zr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Gl(s[o].image)):r.push(Gl(s[o]))}else r=Gl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Gl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}var Mp=0,Hl=new z,an=class i extends Bn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ln,s=Ln,r=on,o=ri,a=Fn,l=dn,c=i.DEFAULT_ANISOTROPY,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=zr(),this.name="",this.source=new Ms(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Hl).x}get height(){return this.source.getSize(Hl).y}get depth(){return this.source.getSize(Hl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xs:t.x=t.x-Math.floor(t.x);break;case Ln:t.x=t.x<0?0:1;break;case Go:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xs:t.y=t.y-Math.floor(t.y);break;case Ln:t.y=t.y<0?0:1;break;case Go:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=wc;an.DEFAULT_ANISOTROPY=1;var we=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],M=l[2],x=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-M)<.01&&Math.abs(p-x)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+M)<.1&&Math.abs(p+x)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,_=(f+1)/2,S=(g+1)/2,b=(h+u)/4,m=(d+M)/4,v=(p+x)/4;return w>_&&w>S?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=b/n,r=m/n):_>S?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=b/s,r=v/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=m/r,s=v/r),this.set(n,s,r,e),this}let y=Math.sqrt((x-p)*(x-p)+(d-M)*(d-M)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(x-p)/y,this.y=(d-M)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yo=class extends Bn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new an({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ms(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fe=class extends Yo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},or=class extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xo=class extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ht=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,l,c,h,d,u,f,p,M,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,f,p,M,x)}set(t,e,n,s,r,o,a,l,c,h,d,u,f,p,M,x){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=M,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ns.setFromMatrixColumn(t,0).length(),r=1/ns.setFromMatrixColumn(t,1).length(),o=1/ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,p=a*h,M=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-M*c,e[9]=-a*l,e[2]=M-u*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,M=c*d;e[0]=u+M*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=M+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,M=c*d;e[0]=u-M*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=M-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,p=a*h,M=a*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+M,e[1]=l*d,e[5]=M*c+u,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,p=a*l,M=a*c;e[0]=l*h,e[4]=M-u*d,e[8]=p*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-M*d}else if(t.order==="XZY"){let u=o*l,f=o*c,p=a*l,M=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+M,e[5]=o*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*h,e[10]=M*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vp,t,Sp)}lookAt(t,e,n){let s=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),gi.crossVectors(n,fn),gi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),gi.crossVectors(n,fn)),gi.normalize(),ao.crossVectors(fn,gi),s[0]=gi.x,s[4]=ao.x,s[8]=fn.x,s[1]=gi.y,s[5]=ao.y,s[9]=fn.y,s[2]=gi.z,s[6]=ao.z,s[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],M=n[6],x=n[10],g=n[14],y=n[3],w=n[7],_=n[11],S=n[15],b=s[0],m=s[4],v=s[8],P=s[12],E=s[1],U=s[5],N=s[9],D=s[13],R=s[2],H=s[6],O=s[10],q=s[14],Z=s[3],L=s[7],X=s[11],V=s[15];return r[0]=o*b+a*E+l*R+c*Z,r[4]=o*m+a*U+l*H+c*L,r[8]=o*v+a*N+l*O+c*X,r[12]=o*P+a*D+l*q+c*V,r[1]=h*b+d*E+u*R+f*Z,r[5]=h*m+d*U+u*H+f*L,r[9]=h*v+d*N+u*O+f*X,r[13]=h*P+d*D+u*q+f*V,r[2]=p*b+M*E+x*R+g*Z,r[6]=p*m+M*U+x*H+g*L,r[10]=p*v+M*N+x*O+g*X,r[14]=p*P+M*D+x*q+g*V,r[3]=y*b+w*E+_*R+S*Z,r[7]=y*m+w*U+_*H+S*L,r[11]=y*v+w*N+_*O+S*X,r[15]=y*P+w*D+_*q+S*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],M=t[7],x=t[11],g=t[15],y=l*f-c*u,w=a*f-c*d,_=a*u-l*d,S=o*f-c*h,b=o*u-l*h,m=o*d-a*h;return e*(M*y-x*w+g*_)-n*(p*y-x*S+g*b)+s*(p*w-M*S+g*m)-r*(p*_-M*b+x*m)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],M=t[13],x=t[14],g=t[15],y=e*a-n*o,w=e*l-s*o,_=e*c-r*o,S=n*l-s*a,b=n*c-r*a,m=s*c-r*l,v=h*M-d*p,P=h*x-u*p,E=h*g-f*p,U=d*x-u*M,N=d*g-f*M,D=u*g-f*x,R=y*D-w*N+_*U+S*E-b*P+m*v;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/R;return t[0]=(a*D-l*N+c*U)*H,t[1]=(s*N-n*D-r*U)*H,t[2]=(M*m-x*b+g*S)*H,t[3]=(u*b-d*m-f*S)*H,t[4]=(l*E-o*D-c*P)*H,t[5]=(e*D-s*E+r*P)*H,t[6]=(x*_-p*m-g*w)*H,t[7]=(h*m-u*_+f*w)*H,t[8]=(o*N-a*E+c*v)*H,t[9]=(n*E-e*N-r*v)*H,t[10]=(p*b-M*_+g*y)*H,t[11]=(d*_-h*b-f*y)*H,t[12]=(a*P-o*U-l*v)*H,t[13]=(e*U-n*P+s*v)*H,t[14]=(M*w-p*S-x*y)*H,t[15]=(h*S-d*w+u*y)*H,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,p=r*d,M=o*h,x=o*d,g=a*d,y=l*c,w=l*h,_=l*d,S=n.x,b=n.y,m=n.z;return s[0]=(1-(M+g))*S,s[1]=(f+_)*S,s[2]=(p-w)*S,s[3]=0,s[4]=(f-_)*b,s[5]=(1-(u+g))*b,s[6]=(x+y)*b,s[7]=0,s[8]=(p+w)*m,s[9]=(x-y)*m,s[10]=(1-(u+M))*m,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=ns.set(s[0],s[1],s[2]).length(),a=ns.set(s[4],s[5],s[6]).length(),l=ns.set(s[8],s[9],s[10]).length();r<0&&(o=-o),An.copy(this);let c=1/o,h=1/a,d=1/l;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=d,An.elements[9]*=d,An.elements[10]*=d,e.setFromRotationMatrix(An),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Mn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),p,M;if(l)p=r/(o-r),M=o*r/(o-r);else if(a===Mn)p=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===_s)p=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Mn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),p,M;if(l)p=1/(o-r),M=o/(o-r);else if(a===Mn)p=-2/(o-r),M=-(o+r)/(o-r);else if(a===_s)p=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ns=new z,An=new Ht,vp=new z(0,0,0),Sp=new z(1,1,1),gi=new z,ao=new z,fn=new z,Lh=new Ht,Bh=new Ge,ln=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ce(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Lh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bh.setFromEuler(this),this.setFromQuaternion(Bh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ln.DEFAULT_ORDER="XYZ";var ar=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},bp=0,kh=new z,is=new Ge,Jn=new Ht,lo=new z,Ys=new z,wp=new z,Ep=new Ge,Oh=new z(1,0,0),Vh=new z(0,1,0),zh=new z(0,0,1),Gh={type:"added"},Tp={type:"removed"},ss={type:"childadded",child:null},Wl={type:"childremoved",child:null},Je=class i extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new z,e=new ln,n=new Ge,s=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ht},normalMatrix:{value:new $t}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ar,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(Oh,t)}rotateY(t){return this.rotateOnAxis(Vh,t)}rotateZ(t){return this.rotateOnAxis(zh,t)}translateOnAxis(t,e){return kh.copy(t).applyQuaternion(this.quaternion),this.position.add(kh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Oh,t)}translateY(t){return this.translateOnAxis(Vh,t)}translateZ(t){return this.translateOnAxis(zh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?lo.copy(t):lo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Ys,lo,this.up):Jn.lookAt(lo,Ys,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),is.setFromRotationMatrix(Jn),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gh),ss.child=t,this.dispatchEvent(ss),ss.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tp),Wl.child=t,this.dispatchEvent(Wl),Wl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gh),ss.child=t,this.dispatchEvent(ss),ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,t,wp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,Ep,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Je.DEFAULT_UP=new z(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rn=class extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ap={type:"move"},vs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let M of t.hand.values()){let x=e.getJointPose(M,n),g=this._getHandJoint(c,M);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ap)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new rn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},co={h:0,s:0,l:0};function Zl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var _t=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=mp(t,1),e=ce(e,0,1),n=ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Zl(o,r,t+1/3),this.g=Zl(o,r,t),this.b=Zl(o,r,t-1/3)}return le.colorSpaceToWorking(this,s),this}setStyle(t,e=ze){function n(r){r!==void 0&&parseFloat(r)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){let n=ju[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return le.workingToColorSpace($e.copy(this),t),Math.round(ce($e.r*255,0,255))*65536+Math.round(ce($e.g*255,0,255))*256+Math.round(ce($e.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace($e.copy(this),e);let n=$e.r,s=$e.g,r=$e.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=ze){le.workingToColorSpace($e.copy(this),t);let e=$e.r,n=$e.g,s=$e.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(xi),this.setHSL(xi.h+t,xi.s+e,xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xi),t.getHSL(co);let n=Ol(xi.h,co.h,e),s=Ol(xi.s,co.s,e),r=Ol(xi.l,co.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$e=new _t;_t.NAMES=ju;var lr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new _t(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},cr=class extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Rn=new z,qn=new z,Yl=new z,jn=new z,rs=new z,os=new z,Hh=new z,Xl=new z,Jl=new z,ql=new z,jl=new we,Ql=new we,Kl=new we,vi=class i{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Rn.subVectors(t,e),s.cross(Rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Rn.subVectors(s,e),qn.subVectors(n,e),Yl.subVectors(t,e);let o=Rn.dot(Rn),a=Rn.dot(qn),l=Rn.dot(Yl),c=qn.dot(qn),h=qn.dot(Yl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(o,jn.y),l.addScaledVector(a,jn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return jl.setScalar(0),Ql.setScalar(0),Kl.setScalar(0),jl.fromBufferAttribute(t,e),Ql.fromBufferAttribute(t,n),Kl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(jl,r.x),o.addScaledVector(Ql,r.y),o.addScaledVector(Kl,r.z),o}static isFrontFacing(t,e,n,s){return Rn.subVectors(n,e),qn.subVectors(t,e),Rn.cross(qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Rn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;rs.subVectors(s,n),os.subVectors(r,n),Xl.subVectors(t,n);let l=rs.dot(Xl),c=os.dot(Xl);if(l<=0&&c<=0)return e.copy(n);Jl.subVectors(t,s);let h=rs.dot(Jl),d=os.dot(Jl);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(rs,o);ql.subVectors(t,r);let f=rs.dot(ql),p=os.dot(ql);if(p>=0&&f<=p)return e.copy(r);let M=f*c-l*p;if(M<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(os,a);let x=h*p-f*d;if(x<=0&&d-h>=0&&f-p>=0)return Hh.subVectors(r,s),a=(d-h)/(d-h+(f-p)),e.copy(s).addScaledVector(Hh,a);let g=1/(x+M+u);return o=M*g,a=u*g,e.copy(n).addScaledVector(rs,o).addScaledVector(os,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vn=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Cn):Cn.fromBufferAttribute(r,o),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ho.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ho.copy(n.boundingBox)),ho.applyMatrix4(t.matrixWorld),this.union(ho)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xs),uo.subVectors(this.max,Xs),as.subVectors(t.a,Xs),ls.subVectors(t.b,Xs),cs.subVectors(t.c,Xs),_i.subVectors(ls,as),yi.subVectors(cs,ls),Bi.subVectors(as,cs);let e=[0,-_i.z,_i.y,0,-yi.z,yi.y,0,-Bi.z,Bi.y,_i.z,0,-_i.x,yi.z,0,-yi.x,Bi.z,0,-Bi.x,-_i.y,_i.x,0,-yi.y,yi.x,0,-Bi.y,Bi.x,0];return!$l(e,as,ls,cs,uo)||(e=[1,0,0,0,1,0,0,0,1],!$l(e,as,ls,cs,uo))?!1:(fo.crossVectors(_i,yi),e=[fo.x,fo.y,fo.z],$l(e,as,ls,cs,uo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Qn=[new z,new z,new z,new z,new z,new z,new z,new z],Cn=new z,ho=new vn,as=new z,ls=new z,cs=new z,_i=new z,yi=new z,Bi=new z,Xs=new z,uo=new z,fo=new z,ki=new z;function $l(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ki.fromArray(i,r);let a=s.x*Math.abs(ki.x)+s.y*Math.abs(ki.y)+s.z*Math.abs(ki.z),l=t.dot(ki),c=e.dot(ki),h=n.dot(ki);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ue=new z,po=new Ut,Rp=0,mn=class extends Bn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wu,this.updateRanges=[],this.gpuType=wn,this.version=0,this._normalizationScale=t!==void 0?Lc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)po.fromBufferAttribute(this,e),po.applyMatrix3(t),this.setXY(e,po.x,po.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):gp(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):xp(t,this.array)}};var hr=class extends mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ur=class extends mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var kt=class extends mn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Cp=new vn,Js=new z,tc=new z,kn=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Cp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Js.subVectors(t,this.center);let e=Js.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Js,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Js.copy(t.center).add(tc)),this.expandByPoint(Js.copy(t.center).sub(tc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ip=0,yn=new Ht,ec=new Je,hs=new z,pn=new vn,qs=new vn,Ve=new z,se=class i extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=zr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fp(t)?ur:hr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,n){return yn.makeTranslation(t,e,n),this.applyMatrix4(yn),this}scale(t,e,n){return yn.makeScale(t,e,n),this.applyMatrix4(yn),this}lookAt(t){return ec.lookAt(t),ec.updateMatrix(),this.applyMatrix4(ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new kt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let n=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(pn.min,qs.min),pn.expandByPoint(Ve),Ve.addVectors(pn.max,qs.max),pn.expandByPoint(Ve)):(pn.expandByPoint(qs.min),pn.expandByPoint(qs.max))}pn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ve));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ve.fromBufferAttribute(a,c),l&&(hs.fromBufferAttribute(t,c),Ve.add(hs)),s=Math.max(s,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new mn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)a[P]=new z,l[P]=new z;let h=new z,d=new z,u=new z,f=new Ut,p=new Ut,M=new Ut,x=new z,g=new z;function y(P,E,U){c[P]=c[E]=c[U]=1,h.fromBufferAttribute(n,P),d.fromBufferAttribute(n,E),u.fromBufferAttribute(n,U),f.fromBufferAttribute(r,P),p.fromBufferAttribute(r,E),M.fromBufferAttribute(r,U),d.sub(h),u.sub(h),p.sub(f),M.sub(f);let N=1/(p.x*M.y-M.x*p.y);isFinite(N)&&(x.copy(d).multiplyScalar(M.y).addScaledVector(u,-p.y).multiplyScalar(N),g.copy(u).multiplyScalar(p.x).addScaledVector(d,-M.x).multiplyScalar(N),a[P].add(x),a[E].add(x),a[U].add(x),l[P].add(g),l[E].add(g),l[U].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let P=0,E=w.length;P<E;++P){let U=w[P],N=U.start,D=U.count;for(let R=N,H=N+D;R<H;R+=3)y(t.getX(R+0),t.getX(R+1),t.getX(R+2))}let _=new z,S=new z,b=new z,m=new z;function v(P){b.fromBufferAttribute(s,P),m.copy(b);let E=a[P];_.copy(E),_.sub(b.multiplyScalar(b.dot(E))).normalize(),S.crossVectors(m,E);let N=S.dot(l[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,N)}for(let P=0,E=n.count;P<E;++P)c[P]&&v(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,h=new z,d=new z;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),M=t.getX(u+1),x=t.getX(u+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,x),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,x),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let M=0,x=l.length;M<x;M++){a.isInterleavedBufferAttribute?f=l[M]*a.data.stride+a.offset:f=l[M]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new mn(u,h,d)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var nc=new z,Pp=new z,Up=new $t,In=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=nc.subVectors(n,e).cross(Pp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(nc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Up.getNormalMatrix(t),s=this.coplanarPoint(nc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Np=0,Sn=class extends Bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=zr(),this.name="",this.type="Material",this.blending=Rs,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sc,this.blendDst=bc,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ku,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fo,this.stencilZFail=Fo,this.stencilZPass=Fo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new _t().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new In().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ut().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ut().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Kn=new z,ic=new z,mo=new z,go=new z,Ss=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ic.copy(t).add(e).multiplyScalar(.5),mo.copy(e).sub(t).normalize(),go.copy(this.origin).sub(ic);let r=t.distanceTo(e)*.5,o=-this.direction.dot(mo),a=go.dot(this.direction),l=-go.dot(mo),c=go.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let M=1/h;d*=M,u*=M,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ic).addScaledVector(mo,u),f}intersectSphere(t,e){if(t.radius<0)return null;Kn.subVectors(t.center,this.origin);let n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,p=e.x-o.x,M=e.y-o.y,x=e.z-o.z,g=n.x-o.x,y=n.y-o.y,w=n.z-o.z,_=Math.abs(l),S=Math.abs(c),b=Math.abs(h),m,v,P,E,U,N,D,R,H,O,q,Z;if(_>=S&&_>=b?(P=l,N=d,H=p,Z=g,l>=0?(m=c,v=h,E=u,U=f,D=M,R=x,O=y,q=w):(m=h,v=c,E=f,U=u,D=x,R=M,O=w,q=y)):S>=b?(P=c,N=u,H=M,Z=y,c>=0?(m=h,v=l,E=f,U=d,D=x,R=p,O=w,q=g):(m=l,v=h,E=d,U=f,D=p,R=x,O=g,q=w)):(P=h,N=f,H=x,Z=w,h>=0?(m=l,v=c,E=d,U=u,D=p,R=M,O=g,q=y):(m=c,v=l,E=u,U=d,D=M,R=p,O=y,q=g)),P===0)return null;let L=m/P,X=v/P,V=1/P,G=E-L*N,W=U-X*N,B=D-L*H,C=R-X*H,k=O-L*Z,tt=q-X*Z,nt=k*C-tt*B,ot=G*tt-W*k,xt=B*W-C*G;if(s){if(nt<0||ot<0||xt<0)return null}else if((nt<0||ot<0||xt<0)&&(nt>0||ot>0||xt>0))return null;let ft=nt+ot+xt;if(ft===0)return null;let wt=V*(nt*N+ot*H+xt*Z);return(ft>0?wt<0:wt>0)?null:this.at(wt/ft,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oe=class extends Sn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Ar,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Wh=new Ht,Oi=new Ss,xo=new kn,Zh=new z,_o=new z,yo=new z,Mo=new z,sc=new z,vo=new z,Yh=new z,So=new z,qt=class extends Je{constructor(t=new se,e=new oe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){vo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(sc.fromBufferAttribute(d,t),o?vo.addScaledVector(sc,h):vo.addScaledVector(sc.sub(e),h))}e.add(vo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(r),Oi.copy(t.ray).recast(t.near),!(xo.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(xo,Zh)===null||Oi.origin.distanceToSquared(Zh)>(t.far-t.near)**2))&&(Wh.copy(r).invert(),Oi.copy(t.ray).applyMatrix4(Wh),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Oi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,M=u.length;p<M;p++){let x=u[p],g=o[x.materialIndex],y=Math.max(x.start,f.start),w=Math.min(a.count,Math.min(x.start+x.count,f.start+f.count));for(let _=y,S=w;_<S;_+=3){let b=a.getX(_),m=a.getX(_+1),v=a.getX(_+2);s=bo(this,g,t,n,c,h,d,b,m,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),M=Math.min(a.count,f.start+f.count);for(let x=p,g=M;x<g;x+=3){let y=a.getX(x),w=a.getX(x+1),_=a.getX(x+2);s=bo(this,o,t,n,c,h,d,y,w,_),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,M=u.length;p<M;p++){let x=u[p],g=o[x.materialIndex],y=Math.max(x.start,f.start),w=Math.min(l.count,Math.min(x.start+x.count,f.start+f.count));for(let _=y,S=w;_<S;_+=3){let b=_,m=_+1,v=_+2;s=bo(this,g,t,n,c,h,d,b,m,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let x=p,g=M;x<g;x+=3){let y=x,w=x+1,_=x+2;s=bo(this,o,t,n,c,h,d,y,w,_),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function Fp(i,t,e,n,s,r,o,a){let l;if(t.side===Ce?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ai,a),l===null)return null;So.copy(a),So.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(So);return c<e.near||c>e.far?null:{distance:c,point:So.clone(),object:i}}function bo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,_o),i.getVertexPosition(l,yo),i.getVertexPosition(c,Mo);let h=Fp(i,t,e,n,_o,yo,Mo,Yh);if(h){let d=new z;vi.getBarycoord(Yh,_o,yo,Mo,d),s&&(h.uv=vi.getInterpolatedAttribute(s,a,l,c,d,new Ut)),r&&(h.uv1=vi.getInterpolatedAttribute(r,a,l,c,d,new Ut)),o&&(h.normal=vi.getInterpolatedAttribute(o,a,l,c,d,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new z,materialIndex:0};vi.getNormal(_o,yo,Mo,u.normal),h.face=u,h.barycoord=d}return h}var dr=class extends an{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ne,h=Ne,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fr=class extends mn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},us=new Ht,Xh=new Ht,wo=[],Jh=new vn,Dp=new Ht,js=new qt,Qs=new kn,fe=class extends qt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new fr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Dp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,us),Jh.copy(t.boundingBox).applyMatrix4(us),this.boundingBox.union(Jh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new kn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,us),Qs.copy(t.boundingSphere).applyMatrix4(us),this.boundingSphere.union(Qs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(js.geometry=this.geometry,js.material=this.material,js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qs.copy(this.boundingSphere),Qs.applyMatrix4(n),t.ray.intersectsSphere(Qs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,us),Xh.multiplyMatrices(n,us),js.matrixWorld=Xh,js.raycast(t,wo);for(let o=0,a=wo.length;o<a;o++){let l=wo[o];l.instanceId=r,l.object=this,e.push(l)}wo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new fr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new dr(new Float32Array(s*this.count),s,this.count,Ta,wn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vi=new kn,Lp=new Ut(.5,.5),Eo=new z,Si=class{constructor(t=new In,e=new In,n=new In,s=new In,r=new In,o=new In){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],M=r[9],x=r[10],g=r[11],y=r[12],w=r[13],_=r[14],S=r[15];if(s[0].setComponents(c-o,f-h,g-p,S-y).normalize(),s[1].setComponents(c+o,f+h,g+p,S+y).normalize(),s[2].setComponents(c+a,f+d,g+M,S+w).normalize(),s[3].setComponents(c-a,f-d,g-M,S-w).normalize(),n)s[4].setComponents(l,u,x,_).normalize(),s[5].setComponents(c-l,f-u,g-x,S-_).normalize();else if(s[4].setComponents(c-l,f-u,g-x,S-_).normalize(),e===Mn)s[5].setComponents(c+l,f+u,g+x,S+_).normalize();else if(e===_s)s[5].setComponents(l,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(t){Vi.center.set(0,0,0);let e=Lp.distanceTo(t.center);return Vi.radius=.7071067811865476+e,Vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Eo.x=s.normal.x>0?t.max.x:t.min.x,Eo.y=s.normal.y>0?t.max.y:t.min.y,Eo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Eo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},qh=new Ht,Jo=class i{constructor(){this.coordinateSystem=Mn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];qh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Si),n[s].setFromProjectionMatrix(qh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Si),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var De=class extends Sn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},qo=new z,jo=new z,jh=new Ht,Ks=new Ss,To=new kn,rc=new z,Qh=new z,Qo=class extends Je{constructor(t=new se,e=new De){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)qo.fromBufferAttribute(e,s-1),jo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=qo.distanceTo(jo);t.setAttribute("lineDistance",new kt(n,1))}else Xt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(s),To.radius+=r,t.ray.intersectsSphere(To)===!1)return;jh.copy(s).invert(),Ks.copy(t.ray).applyMatrix4(jh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let M=f,x=p-1;M<x;M+=c){let g=h.getX(M),y=h.getX(M+1),w=Ao(this,t,Ks,l,g,y,M);w&&e.push(w)}if(this.isLineLoop){let M=h.getX(p-1),x=h.getX(f),g=Ao(this,t,Ks,l,M,x,p-1);g&&e.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let M=f,x=p-1;M<x;M+=c){let g=Ao(this,t,Ks,l,M,M+1,M);g&&e.push(g)}if(this.isLineLoop){let M=Ao(this,t,Ks,l,p-1,f,p-1);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ao(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(qo.fromBufferAttribute(a,s),jo.fromBufferAttribute(a,r),e.distanceSqToSegment(qo,jo,rc,Qh)>n)return;rc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(rc);if(!(c<t.near||c>t.far))return{distance:c,point:Qh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Kh=new z,$h=new z,He=class extends Qo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Kh.fromBufferAttribute(e,s),$h.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Kh.distanceTo($h);t.setAttribute("lineDistance",new kt(n,1))}else Xt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var bi=class extends Sn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},tu=new Ht,pc=new Ss,Ro=new kn,Co=new z,zi=class extends Je{constructor(t=new se,e=new bi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(s),Ro.radius+=r,t.ray.intersectsSphere(Ro)===!1)return;tu.copy(s).invert(),pc.copy(t.ray).applyMatrix4(tu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,M=f;p<M;p++){let x=c.getX(p);Co.fromBufferAttribute(d,x),eu(Co,x,l,s,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,M=f;p<M;p++)Co.fromBufferAttribute(d,p),eu(Co,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function eu(i,t,e,n,s,r,o){let a=pc.distanceSqToPoint(i);if(a<e){let l=new z;pc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var pr=class extends an{constructor(t=[],e=qi,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Gi=class extends an{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ei=class extends an{constructor(t,e,n=Nn,s,r,o,a=Ne,l=Ne,c,h=ti,d=1){if(h!==ti&&h!==oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ms(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},mr=class extends ei{constructor(t,e=Nn,n=qi,s,r,o=Ne,a=Ne,l,c=ti){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},gr=class extends an{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},cn=class i extends se{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(h,3)),this.setAttribute("uv",new kt(d,2));function p(M,x,g,y,w,_,S,b,m,v,P){let E=_/m,U=S/v,N=_/2,D=S/2,R=b/2,H=m+1,O=v+1,q=0,Z=0,L=new z;for(let X=0;X<O;X++){let V=X*U-D;for(let G=0;G<H;G++){let W=G*E-N;L[M]=W*y,L[x]=V*w,L[g]=R,c.push(L.x,L.y,L.z),L[M]=0,L[x]=0,L[g]=b>0?1:-1,h.push(L.x,L.y,L.z),d.push(G/m),d.push(1-X/v),q+=1}}for(let X=0;X<v;X++)for(let V=0;V<m;V++){let G=u+V+H*X,W=u+V+H*(X+1),B=u+(V+1)+H*(X+1),C=u+(V+1)+H*X;l.push(G,W,C),l.push(W,B,C),Z+=6}a.addGroup(f,Z,P),f+=Z,u+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Pn=class i extends se{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new z,h=new Ut;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new kt(o,3)),this.setAttribute("normal",new kt(a,3)),this.setAttribute("uv",new kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Me=class i extends se{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,M=[],x=n/2,g=0;y(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new kt(d,3)),this.setAttribute("normal",new kt(u,3)),this.setAttribute("uv",new kt(f,2));function y(){let _=new z,S=new z,b=0,m=(e-t)/n;for(let v=0;v<=r;v++){let P=[],E=v/r,U=E*(e-t)+t;for(let N=0;N<=s;N++){let D=N/s,R=D*l+a,H=Math.sin(R),O=Math.cos(R);S.x=U*H,S.y=-E*n+x,S.z=U*O,d.push(S.x,S.y,S.z),_.set(H,m,O).normalize(),u.push(_.x,_.y,_.z),f.push(D,1-E),P.push(p++)}M.push(P)}for(let v=0;v<s;v++)for(let P=0;P<r;P++){let E=M[P][v],U=M[P+1][v],N=M[P+1][v+1],D=M[P][v+1];(t>0||P!==0)&&(h.push(E,U,D),b+=3),(e>0||P!==r-1)&&(h.push(U,N,D),b+=3)}c.addGroup(g,b,0),g+=b}function w(_){let S=p,b=new Ut,m=new z,v=0,P=_===!0?t:e,E=_===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,x*E,0),u.push(0,E,0),f.push(.5,.5),p++;let U=p;for(let N=0;N<=s;N++){let R=N/s*l+a,H=Math.cos(R),O=Math.sin(R);m.x=P*O,m.y=x*E,m.z=P*H,d.push(m.x,m.y,m.z),u.push(0,E,0),b.x=H*.5+.5,b.y=O*.5*E+.5,f.push(b.x,b.y),p++}for(let N=0;N<s;N++){let D=S+N,R=U+N;_===!0?h.push(R,R+1,D):h.push(R+1,R,D),v+=3}c.addGroup(g,v,_===!0?1:2),g+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},bs=class i extends Me{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ko=class i extends se{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new kt(r,3)),this.setAttribute("normal",new kt(r.slice(),3)),this.setAttribute("uv",new kt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let w=new z,_=new z,S=new z;for(let b=0;b<e.length;b+=3)f(e[b+0],w),f(e[b+1],_),f(e[b+2],S),l(w,_,S,y)}function l(y,w,_,S){let b=S+1,m=[];for(let v=0;v<=b;v++){m[v]=[];let P=y.clone().lerp(_,v/b),E=w.clone().lerp(_,v/b),U=b-v;for(let N=0;N<=U;N++)N===0&&v===b?m[v][N]=P:m[v][N]=P.clone().lerp(E,N/U)}for(let v=0;v<b;v++)for(let P=0;P<2*(b-v)-1;P++){let E=Math.floor(P/2);P%2===0?(u(m[v][E+1]),u(m[v+1][E]),u(m[v][E])):(u(m[v][E+1]),u(m[v+1][E+1]),u(m[v+1][E]))}}function c(y){let w=new z;for(let _=0;_<r.length;_+=3)w.x=r[_+0],w.y=r[_+1],w.z=r[_+2],w.normalize().multiplyScalar(y),r[_+0]=w.x,r[_+1]=w.y,r[_+2]=w.z}function h(){let y=new z;for(let w=0;w<r.length;w+=3){y.x=r[w+0],y.y=r[w+1],y.z=r[w+2];let _=x(y)/2/Math.PI+.5,S=g(y)/Math.PI+.5;o.push(_,1-S)}p(),d()}function d(){for(let y=0;y<o.length;y+=6){let w=o[y+0],_=o[y+2],S=o[y+4],b=Math.max(w,_,S),m=Math.min(w,_,S);b>.9&&m<.1&&(w<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),S<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,w){let _=y*3;w.x=t[_+0],w.y=t[_+1],w.z=t[_+2]}function p(){let y=new z,w=new z,_=new z,S=new z,b=new Ut,m=new Ut,v=new Ut;for(let P=0,E=0;P<r.length;P+=9,E+=6){y.set(r[P+0],r[P+1],r[P+2]),w.set(r[P+3],r[P+4],r[P+5]),_.set(r[P+6],r[P+7],r[P+8]),b.set(o[E+0],o[E+1]),m.set(o[E+2],o[E+3]),v.set(o[E+4],o[E+5]),S.copy(y).add(w).add(_).divideScalar(3);let U=x(S);M(b,E+0,y,U),M(m,E+2,w,U),M(v,E+4,_,U)}}function M(y,w,_,S){S<0&&y.x===1&&(o[w]=y.x-1),_.x===0&&_.z===0&&(o[w]=S/2/Math.PI+.5)}function x(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Ut:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new z,s=[],r=[],o=[],a=new z,l=new Ht;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new z)}r[0]=new z,o[0]=new z;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ce(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ce(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},xr=class extends bn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Ut){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},$o=class extends xr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Bc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var nu=new z,iu=new z,oc=new Bc,ac=new Bc,lc=new Bc,ta=class extends bn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new z){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(iu.subVectors(s[0],s[1]).add(s[0]),c=iu);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(nu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=nu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),M=Math.pow(d.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(h),f);M<1e-4&&(M=1),p<1e-4&&(p=M),x<1e-4&&(x=M),oc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,M,x),ac.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,M,x),lc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,M,x)}else this.curveType==="catmullrom"&&(oc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),ac.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),lc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(oc.calc(l),ac.calc(l),lc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function su(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Bp(i,t){let e=1-i;return e*e*t}function kp(i,t){return 2*(1-i)*i*t}function Op(i,t){return i*i*t}function tr(i,t,e,n){return Bp(i,t)+kp(i,e)+Op(i,n)}function Vp(i,t){let e=1-i;return e*e*e*t}function zp(i,t){let e=1-i;return 3*e*e*i*t}function Gp(i,t){return 3*(1-i)*i*i*t}function Hp(i,t){return i*i*i*t}function er(i,t,e,n,s){return Vp(i,t)+zp(i,e)+Gp(i,n)+Hp(i,s)}var ea=class extends bn{constructor(t=new Ut,e=new Ut,n=new Ut,s=new Ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Ut){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(er(t,s.x,r.x,o.x,a.x),er(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},na=class extends bn{constructor(t=new z,e=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new z){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(er(t,s.x,r.x,o.x,a.x),er(t,s.y,r.y,o.y,a.y),er(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ia=class extends bn{constructor(t=new Ut,e=new Ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ut){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sa=class extends bn{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ra=class extends bn{constructor(t=new Ut,e=new Ut,n=new Ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ut){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(tr(t,s.x,r.x,o.x),tr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hi=class extends bn{constructor(t=new z,e=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new z){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(tr(t,s.x,r.x,o.x),tr(t,s.y,r.y,o.y),tr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},oa=class extends bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ut){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(su(a,l.x,c.x,h.x,d.x),su(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Ut().fromArray(s))}return this}},Wp=Object.freeze({__proto__:null,ArcCurve:$o,CatmullRomCurve3:ta,CubicBezierCurve:ea,CubicBezierCurve3:na,EllipseCurve:xr,LineCurve:ia,LineCurve3:sa,QuadraticBezierCurve:ra,QuadraticBezierCurve3:Hi,SplineCurve:oa});var ni=class i extends Ko{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Wi=class i extends se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],p=[],M=[],x=[];for(let g=0;g<h;g++){let y=g*u-o;for(let w=0;w<c;w++){let _=w*d-r;p.push(_,-y,0),M.push(0,0,1),x.push(w/a),x.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let w=y+c*g,_=y+c*(g+1),S=y+1+c*(g+1),b=y+1+c*g;f.push(w,_,b),f.push(_,S,b)}this.setIndex(f),this.setAttribute("position",new kt(p,3)),this.setAttribute("normal",new kt(M,3)),this.setAttribute("uv",new kt(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ii=class i extends se{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=t,u=(e-t)/s,f=new z,p=new Ut;for(let M=0;M<=s;M++){for(let x=0;x<=n;x++){let g=r+x/n*o;f.x=d*Math.cos(g),f.y=d*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}d+=u}for(let M=0;M<s;M++){let x=M*(n+1);for(let g=0;g<n;g++){let y=g+x,w=y,_=y+n+1,S=y+n+2,b=y+1;a.push(w,_,b),a.push(_,S,b)}}this.setIndex(a),this.setAttribute("position",new kt(l,3)),this.setAttribute("normal",new kt(c,3)),this.setAttribute("uv",new kt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var de=class i extends se{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new z,u=new z,f=[],p=[],M=[],x=[];for(let g=0;g<=n;g++){let y=[],w=g/n,_=o+w*a,S=t*Math.cos(_),b=Math.sqrt(t*t-S*S),m=0;g===0&&o===0?m=.5/e:g===n&&l===Math.PI&&(m=-.5/e);for(let v=0;v<=e;v++){let P=v/e,E=s+P*r;d.x=-b*Math.cos(E),d.y=S,d.z=b*Math.sin(E),p.push(d.x,d.y,d.z),u.copy(d).normalize(),M.push(u.x,u.y,u.z),x.push(P+m,1-w),y.push(c++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<e;y++){let w=h[g][y+1],_=h[g][y],S=h[g+1][y],b=h[g+1][y+1];(g!==0||o>0)&&f.push(w,_,b),(g!==n-1||l<Math.PI)&&f.push(_,S,b)}this.setIndex(f),this.setAttribute("position",new kt(p,3)),this.setAttribute("normal",new kt(M,3)),this.setAttribute("uv",new kt(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var On=class i extends se{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new z,f=new z,p=new z;for(let M=0;M<=n;M++){let x=o+M/n*a;for(let g=0;g<=s;g++){let y=g/s*r;f.x=(t+e*Math.cos(x))*Math.cos(y),f.y=(t+e*Math.cos(x))*Math.sin(y),f.z=e*Math.sin(x),c.push(f.x,f.y,f.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(g/s),d.push(M/n)}}for(let M=1;M<=n;M++)for(let x=1;x<=s;x++){let g=(s+1)*M+x-1,y=(s+1)*(M-1)+x-1,w=(s+1)*(M-1)+x,_=(s+1)*M+x;l.push(g,y,_),l.push(y,w,_)}this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(h,3)),this.setAttribute("uv",new kt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var _r=class i extends se{constructor(t=new Hi(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new z,l=new z,c=new Ut,h=new z,d=[],u=[],f=[],p=[];M(),this.setIndex(p),this.setAttribute("position",new kt(d,3)),this.setAttribute("normal",new kt(u,3)),this.setAttribute("uv",new kt(f,2));function M(){for(let w=0;w<e;w++)x(w);x(r===!1?e:0),y(),g()}function x(w){h=t.getPointAt(w/e,h);let _=o.normals[w],S=o.binormals[w];for(let b=0;b<=s;b++){let m=b/s*Math.PI*2,v=Math.sin(m),P=-Math.cos(m);l.x=P*_.x+v*S.x,l.y=P*_.y+v*S.y,l.z=P*_.z+v*S.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let w=1;w<=e;w++)for(let _=1;_<=s;_++){let S=(s+1)*(w-1)+(_-1),b=(s+1)*w+(_-1),m=(s+1)*w+_,v=(s+1)*(w-1)+_;p.push(S,b,v),p.push(b,m,v)}}function y(){for(let w=0;w<=e;w++)for(let _=0;_<=s;_++)c.x=w/e,c.y=_/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Wp[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Qi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(ru(s))s.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(ru(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function en(i){let t={};for(let e=0;e<i.length;e++){let n=Qi(i[e]);for(let s in n)t[s]=n[s]}return t}function ru(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Zp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function kc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var li={clone:Qi,merge:en},Yp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,We=class extends Sn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yp,this.fragmentShader=Xp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qi(t.uniforms),this.uniformsGroups=Zp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new _t().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ut().fromArray(s.value);break;case"v3":this.uniforms[n].value=new z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new we().fromArray(s.value);break;case"m3":this.uniforms[n].value=new $t().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ht().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ws=class extends We{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Te=class extends Sn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ps,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var un=class extends Sn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new _t(16777215),this.specular=new _t(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ps,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Ar,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Zi=class extends Sn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ps,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Ar,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},aa=class extends Sn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},la=class extends Sn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ds(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Io(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var wi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ca=class extends wi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uc,endingEnd:uc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case dc:r=t,a=2*e-n;break;case fc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case dc:o=t,l=2*n-e;break;case fc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),M=p*p,x=M*p,g=-u*x+2*u*M-u*p,y=(1+u)*x+(-1.5-2*u)*M+(-.5+u)*p+1,w=(-1-f)*x+(1.5+f)*M+.5*p,_=f*x-f*M;for(let S=0;S!==a;++S)r[S]=g*o[h+S]+y*o[c+S]+w*o[l+S]+_*o[d+S];return r}},ha=class extends wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},ua=class extends wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},da=class extends wi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-e)/(s-e),M=1-p;for(let x=0;x!==a;++x)r[x]=o[c+x]*M+o[l+x]*p;return r}let u=a*2,f=t-1;for(let p=0;p!==a;++p){let M=o[c+p],x=o[l+p],g=f*u+p*2,y=d[g],w=d[g+1],_=t*u+p*2,S=h[_],b=h[_+1],m=qp(n,e,y,S,s);r[p]=Qu(m,M,w,b,x)}return r}};function Qu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Jp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function qp(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Qu(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Jp(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var gn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ds(e,this.TimeBufferType),this.values=ds(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ds(t.times,Array),values:ds(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Io(t.settings)&&(n.settings={inTangents:ds(t.settings.inTangents,Array),outTangents:ds(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ha(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ca(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new da(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case nr:e=this.InterpolantFactoryMethodDiscrete;break;case Ho:e=this.InterpolantFactoryMethodLinear;break;case No:e=this.InterpolantFactoryMethodSmooth;break;case hc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nr;case this.InterpolantFactoryMethodLinear:return Ho;case this.InterpolantFactoryMethodSmooth:return No;case this.InterpolantFactoryMethodBezier:return hc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Io(this.settings)&&(ou(this.settings.inTangents,t),ou(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Io(this.settings)&&(au(this.settings.inTangents,t),au(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Kt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Kt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Kt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&pp(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Kt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===No,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let M=e[d+p];if(M!==e[u+p]||M!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Io(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ou(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function au(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=Ho;var Ei=class extends gn{constructor(t,e,n){super(t,e,n)}};Ei.prototype.ValueTypeName="bool";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=nr;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var fa=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}};fa.prototype.ValueTypeName="color";var pa=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}};pa.prototype.ValueTypeName="number";var ma=class extends wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ge.slerpFlat(r,0,o,c-a,o,c,l);return r}},yr=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ma(this.times,this.values,this.getValueSize(),t)}};yr.prototype.ValueTypeName="quaternion";yr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ti=class extends gn{constructor(t,e,n){super(t,e,n)}};Ti.prototype.ValueTypeName="string";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=nr;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}};ga.prototype.ValueTypeName="vector";var xa=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ku=new xa,_a=class{constructor(t){this.manager=t!==void 0?t:Ku,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};_a.DEFAULT_MATERIAL_NAME="__DEFAULT";var Es=class extends Je{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var cc=new Ht,lu=new z,cu=new z,Mr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Si,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;lu.setFromMatrixPosition(t.matrixWorld),e.position.copy(lu),cu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){cc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(cc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===_s||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(cc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Po=new z,Uo=new Ge,Dn=new z,vr=class extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Po,Uo,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Po,Uo,Dn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Po,Uo,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Po,Uo,Dn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Mi=new z,hu=new Ut,uu=new Ut,tn=class extends vr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Wo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(kl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wo*2*Math.atan(Math.tan(kl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z)}getViewSize(t,e){return this.getViewBounds(t,hu,uu),e.subVectors(uu,hu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(kl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var mc=class extends Mr{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}},Sr=class extends Es{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new mc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Yi=class extends vr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},gc=class extends Mr{constructor(){super(new Yi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},br=class extends Es{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new gc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},wr=class extends Es{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var fs=-90,ps=1,Ts=class extends Je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new tn(fs,ps,t,e);s.layers=this.layers,this.add(s);let r=new tn(fs,ps,t,e);r.layers=this.layers,this.add(r);let o=new tn(fs,ps,t,e);o.layers=this.layers,this.add(o);let a=new tn(fs,ps,t,e);a.layers=this.layers,this.add(a);let l=new tn(fs,ps,t,e);l.layers=this.layers,this.add(l);let c=new tn(fs,ps,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_s)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=M,t.setRenderTarget(n,5,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ya=class extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},Er=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=jp.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function jp(){this._document.hidden===!1&&this.reset()}var Oc="\\[\\]\\.:\\/",Qp=new RegExp("["+Oc+"]","g"),Vc="[^"+Oc+"]",Kp="[^"+Oc.replace("\\.","")+"]",$p=/((?:WC+[\/:])*)/.source.replace("WC",Vc),tm=/(WCOD+)?/.source.replace("WCOD",Kp),em=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vc),nm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vc),im=new RegExp("^"+$p+tm+em+nm+"$"),sm=["material","materials","bones","map"],xc=class{constructor(t,e,n){let s=n||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},be=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Qp,"")}static parseTrackName(t){let e=im.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);sm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Xt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Kt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=xc;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Wy=new Float32Array(1);var _c=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function zc(i,t,e,n){let s=rm(n);switch(e){case Cc:return i*t;case Ta:return i*t/s.components*s.byteLength;case Aa:return i*t/s.components*s.byteLength;case Ri:return i*t*2/s.components*s.byteLength;case Ra:return i*t*2/s.components*s.byteLength;case Ic:return i*t*3/s.components*s.byteLength;case Fn:return i*t*4/s.components*s.byteLength;case Ca:return i*t*4/s.components*s.byteLength;case Dr:case Lr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Br:case kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pa:case Na:return Math.max(i,16)*Math.max(t,8)/4;case Ia:case Ua:return Math.max(i,8)*Math.max(t,8)/2;case Fa:case Da:case Ba:case ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case La:case Or:case Oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case za:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Za:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ka:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case $a:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case tl:case el:case nl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case il:case sl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Vr:case rl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function rm(i){switch(i){case dn:case Ec:return{byteLength:1,components:1};case Is:case Tc:case qe:return{byteLength:2,components:1};case wa:case Ea:return{byteLength:2,components:4};case Nn:case ba:case wn:return{byteLength:4,components:1};case Ac:case Rc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Md(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function am(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],M=d[f];M.start<=p.start+p.count+1?p.count=Math.max(p.count,M.start+M.count-p.start):(++u,d[u]=M)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let M=d[f];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var lm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,um=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,xm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_m=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ym=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Im=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Pm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Um=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Nm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",km=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Om=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Vm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,zm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ym=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Km=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,$m=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ng=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ig=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,og=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ag=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cg=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,hg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ug=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_g=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vg=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Tg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ig=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Pg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ug=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ng=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Og=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Yg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$g=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,e0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,n0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,o0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,a0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h0=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,p0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,m0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,g0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,S0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,T0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,R0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,C0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,U0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,L0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,V0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ae={alphahash_fragment:lm,alphahash_pars_fragment:cm,alphamap_fragment:hm,alphamap_pars_fragment:um,alphatest_fragment:dm,alphatest_pars_fragment:fm,aomap_fragment:pm,aomap_pars_fragment:mm,batching_pars_vertex:gm,batching_vertex:xm,begin_vertex:_m,beginnormal_vertex:ym,bsdfs:Mm,iridescence_fragment:vm,bumpmap_pars_fragment:Sm,clipping_planes_fragment:bm,clipping_planes_pars_fragment:wm,clipping_planes_pars_vertex:Em,clipping_planes_vertex:Tm,color_fragment:Am,color_pars_fragment:Rm,color_pars_vertex:Cm,color_vertex:Im,common:Pm,defaultnormal_vertex:Um,displacementmap_pars_vertex:Nm,displacementmap_vertex:Fm,emissivemap_fragment:Dm,emissivemap_pars_fragment:Lm,colorspace_fragment:Bm,colorspace_pars_fragment:km,envmap_fragment:Om,envmap_common_pars_fragment:Vm,envmap_pars_fragment:zm,envmap_pars_vertex:Gm,envmap_physical_pars_fragment:$m,envmap_vertex:Hm,fog_vertex:Wm,fog_pars_vertex:Zm,fog_fragment:Ym,fog_pars_fragment:Xm,gradientmap_pars_fragment:Jm,lightmap_pars_fragment:qm,lights_lambert_fragment:jm,lights_lambert_pars_fragment:Qm,lights_pars_begin:Km,lights_toon_fragment:tg,lights_toon_pars_fragment:eg,lights_phong_fragment:ng,lights_phong_pars_fragment:ig,lights_physical_fragment:sg,lights_physical_pars_fragment:rg,lights_fragment_begin:og,lights_fragment_maps:ag,lights_fragment_end:lg,lightprobes_pars_fragment:cg,logdepthbuf_fragment:hg,logdepthbuf_pars_fragment:ug,logdepthbuf_pars_vertex:dg,logdepthbuf_vertex:fg,map_fragment:pg,map_pars_fragment:mg,map_particle_fragment:gg,map_particle_pars_fragment:xg,metalnessmap_fragment:_g,metalnessmap_pars_fragment:yg,morphinstance_vertex:Mg,morphcolor_vertex:vg,morphnormal_vertex:Sg,morphtarget_pars_vertex:bg,morphtarget_vertex:wg,normal_fragment_begin:Eg,normal_fragment_maps:Tg,normal_pars_fragment:Ag,normal_pars_vertex:Rg,normal_vertex:Cg,normalmap_pars_fragment:Ig,clearcoat_normal_fragment_begin:Pg,clearcoat_normal_fragment_maps:Ug,clearcoat_pars_fragment:Ng,iridescence_pars_fragment:Fg,opaque_fragment:Dg,packing:Lg,premultiplied_alpha_fragment:Bg,project_vertex:kg,dithering_fragment:Og,dithering_pars_fragment:Vg,roughnessmap_fragment:zg,roughnessmap_pars_fragment:Gg,shadowmap_pars_fragment:Hg,shadowmap_pars_vertex:Wg,shadowmap_vertex:Zg,shadowmask_pars_fragment:Yg,skinbase_vertex:Xg,skinning_pars_vertex:Jg,skinning_vertex:qg,skinnormal_vertex:jg,specularmap_fragment:Qg,specularmap_pars_fragment:Kg,tonemapping_fragment:$g,tonemapping_pars_fragment:t0,transmission_fragment:e0,transmission_pars_fragment:n0,uv_pars_fragment:i0,uv_pars_vertex:s0,uv_vertex:r0,worldpos_vertex:o0,background_vert:a0,background_frag:l0,backgroundCube_vert:c0,backgroundCube_frag:h0,cube_vert:u0,cube_frag:d0,depth_vert:f0,depth_frag:p0,distance_vert:m0,distance_frag:g0,equirect_vert:x0,equirect_frag:_0,linedashed_vert:y0,linedashed_frag:M0,meshbasic_vert:v0,meshbasic_frag:S0,meshlambert_vert:b0,meshlambert_frag:w0,meshmatcap_vert:E0,meshmatcap_frag:T0,meshnormal_vert:A0,meshnormal_frag:R0,meshphong_vert:C0,meshphong_frag:I0,meshphysical_vert:P0,meshphysical_frag:U0,meshtoon_vert:N0,meshtoon_frag:F0,points_vert:D0,points_frag:L0,shadow_vert:B0,shadow_frag:k0,sprite_vert:O0,sprite_frag:V0},Nt={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Gn={basic:{uniforms:en([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:en([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new _t(0)},envMapIntensity:{value:1}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:en([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:en([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:en([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new _t(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:en([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:en([Nt.points,Nt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:en([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:en([Nt.common,Nt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:en([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:en([Nt.sprite,Nt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:en([Nt.common,Nt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:en([Nt.lights,Nt.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};Gn.physical={uniforms:en([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};var ol={r:0,b:0,g:0},z0=new Ht,vd=new $t;vd.set(-1,0,0,0,1,0,0,0,1);function G0(i,t,e,n,s,r){let o=new _t(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){let _=y.backgroundBlurriness>0;w=t.get(w,_)}return w}function p(y){let w=!1,_=f(y);_===null?x(o,a):_&&_.isColor&&(x(_,1),w=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(y,w){let _=f(w);_&&_.isCubeTexture?(c===void 0&&(c=new qt(new cn(1,1,1),new We({name:"BackgroundCubeMaterial",uniforms:Qi(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,b,m){this.matrixWorld.copyPosition(m.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(z0.makeRotationFromEuler(w.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(vd),c.material.toneMapped=le.getTransfer(_.colorSpace)!==ge,(h!==_||d!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new qt(new Wi(2,2),new We({name:"BackgroundMaterial",uniforms:Qi(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=le.getTransfer(_.colorSpace)!==ge,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function x(y,w){y.getRGB(ol,kc(i)),e.buffers.color.setClear(ol.r,ol.g,ol.b,w,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,w=1){o.set(y),a=w,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,x(o,a)},render:p,addToRenderList:M,dispose:g}}function H0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(U,N,D,R,H){let O=!1,q=d(U,R,D,N);r!==q&&(r=q,c(r.object)),O=f(U,R,D,H),O&&p(U,R,D,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,_(U,N,D,R),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function h(U){return i.deleteVertexArray(U)}function d(U,N,D,R){let H=R.wireframe===!0,O=n[N.id];O===void 0&&(O={},n[N.id]=O);let q=U.isInstancedMesh===!0?U.id:0,Z=O[q];Z===void 0&&(Z={},O[q]=Z);let L=Z[D.id];L===void 0&&(L={},Z[D.id]=L);let X=L[H];return X===void 0&&(X=u(l()),L[H]=X),X}function u(U){let N=[],D=[],R=[];for(let H=0;H<e;H++)N[H]=0,D[H]=0,R[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:D,attributeDivisors:R,object:U,attributes:{},index:null}}function f(U,N,D,R){let H=r.attributes,O=N.attributes,q=0,Z=D.getAttributes();for(let L in Z)if(Z[L].location>=0){let V=H[L],G=O[L];if(G===void 0&&(L==="instanceMatrix"&&U.instanceMatrix&&(G=U.instanceMatrix),L==="instanceColor"&&U.instanceColor&&(G=U.instanceColor)),V===void 0||V.attribute!==G||G&&V.data!==G.data)return!0;q++}return r.attributesNum!==q||r.index!==R}function p(U,N,D,R){let H={},O=N.attributes,q=0,Z=D.getAttributes();for(let L in Z)if(Z[L].location>=0){let V=O[L];V===void 0&&(L==="instanceMatrix"&&U.instanceMatrix&&(V=U.instanceMatrix),L==="instanceColor"&&U.instanceColor&&(V=U.instanceColor));let G={};G.attribute=V,V&&V.data&&(G.data=V.data),H[L]=G,q++}r.attributes=H,r.attributesNum=q,r.index=R}function M(){let U=r.newAttributes;for(let N=0,D=U.length;N<D;N++)U[N]=0}function x(U){g(U,0)}function g(U,N){let D=r.newAttributes,R=r.enabledAttributes,H=r.attributeDivisors;D[U]=1,R[U]===0&&(i.enableVertexAttribArray(U),R[U]=1),H[U]!==N&&(i.vertexAttribDivisor(U,N),H[U]=N)}function y(){let U=r.newAttributes,N=r.enabledAttributes;for(let D=0,R=N.length;D<R;D++)N[D]!==U[D]&&(i.disableVertexAttribArray(D),N[D]=0)}function w(U,N,D,R,H,O,q){q===!0?i.vertexAttribIPointer(U,N,D,H,O):i.vertexAttribPointer(U,N,D,R,H,O)}function _(U,N,D,R){M();let H=R.attributes,O=D.getAttributes(),q=N.defaultAttributeValues;for(let Z in O){let L=O[Z];if(L.location>=0){let X=H[Z];if(X===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(X=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(X=U.instanceColor)),X!==void 0){let V=X.normalized,G=X.itemSize,W=t.get(X);if(W===void 0)continue;let B=W.buffer,C=W.type,k=W.bytesPerElement,tt=C===i.INT||C===i.UNSIGNED_INT||X.gpuType===ba;if(X.isInterleavedBufferAttribute){let nt=X.data,ot=nt.isInterleavedBuffer===!0?nt.stride:nt.itemSize,xt=X.offset;if(nt.isInstancedInterleavedBuffer||nt.isInstancedBufferAttribute){for(let ft=0;ft<L.locationSize;ft++)g(L.location+ft,nt.meshPerAttribute);U.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let ft=0;ft<L.locationSize;ft++)x(L.location+ft);i.bindBuffer(i.ARRAY_BUFFER,B);for(let ft=0;ft<L.locationSize;ft++)w(L.location+ft,G/L.locationSize,C,V,ot*k,(xt+G/L.locationSize*ft)*k,tt)}else{if(X.isInstancedBufferAttribute){for(let nt=0;nt<L.locationSize;nt++)g(L.location+nt,X.meshPerAttribute);U.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let nt=0;nt<L.locationSize;nt++)x(L.location+nt);i.bindBuffer(i.ARRAY_BUFFER,B);for(let nt=0;nt<L.locationSize;nt++)w(L.location+nt,G/L.locationSize,C,V,G*k,G/L.locationSize*nt*k,tt)}}else if(q!==void 0){let V=q[Z];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(L.location,V);break;case 3:i.vertexAttrib3fv(L.location,V);break;case 4:i.vertexAttrib4fv(L.location,V);break;default:i.vertexAttrib1fv(L.location,V)}}}}y()}function S(){P();for(let U in n){let N=n[U];for(let D in N){let R=N[D];for(let H in R){let O=R[H];for(let q in O)h(O[q].object),delete O[q];delete R[H]}}delete n[U]}}function b(U){if(n[U.id]===void 0)return;let N=n[U.id];for(let D in N){let R=N[D];for(let H in R){let O=R[H];for(let q in O)h(O[q].object),delete O[q];delete R[H]}}delete n[U.id]}function m(U){for(let N in n){let D=n[N];for(let R in D){let H=D[R];if(H[U.id]===void 0)continue;let O=H[U.id];for(let q in O)h(O[q].object),delete O[q];delete H[U.id]}}}function v(U){for(let N in n){let D=n[N],R=U.isInstancedMesh===!0?U.id:0,H=D[R];if(H!==void 0){for(let O in H){let q=H[O];for(let Z in q)h(q[Z].object),delete q[Z];delete H[O]}delete D[R],Object.keys(D).length===0&&delete n[N]}}}function P(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:m,initAttributes:M,enableAttribute:x,disableUnusedAttributes:y}}function W0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Z0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let m=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(m.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(m){return!(m!==Fn&&n.convert(m)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(m){let v=m===qe&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(m!==dn&&m!==wn&&!v&&n.convert(m)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(m){if(m==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";m="mediump"}return m==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Xt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Xt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:M,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:_,maxSamples:S,samples:b}}function Y0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new In,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,M=d.clipIntersection,x=d.clipShadows,g=i.get(d);if(!s||p===null||p.length===0||r&&!x)r?h(null):c();else{let y=r?0:n,w=y*4,_=g.clippingState||null;l.value=_,_=h(p,u,w,f);for(let S=0;S!==w;++S)_[S]=e[S];g.clippingState=_,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){let M=d!==null?d.length:0,x=null;if(M!==0){if(x=l.value,p!==!0||x===null){let g=f+M*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(x===null||x.length<g)&&(x=new Float32Array(g));for(let w=0,_=f;w!==M;++w,_+=4)o.copy(d[w]).applyMatrix4(y,a),o.normal.toArray(x,_),x[_+3]=o.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,x}}var Wr=class extends Fe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new pr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new cn(5,5,5),r=new We({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ce,blending:si});r.uniforms.tEquirect.value=e;let o=new qt(s,r),a=e.minFilter;return e.minFilter===ri&&(e.minFilter=on),new Ts(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},$u=256,X0=3,J0=20,Sd=256,bd=16,q0=3,j0=new z,Q0=new _t,ll=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ts(1,10,null),this._boxMesh=new qt(new cn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=j0}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,M=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(t.background=l.getClearColor(Q0));let x=new Ts(n,s,h);return x.position.copy(a),x.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=p,t.background=M,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ed(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max($u,qu(t))}_fromTexture(t,e){t.mapping===qi||t.mapping===Cs?this._setSize(t.image.length===0?$u:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=td(t,!1,!1),n=Math.log2(t)-X0;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=td(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===qi||t.mapping===Cs?(this._cubemapMaterial===null&&(this._cubemapMaterial=nd()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ed()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=K0(),this._integrationMaterial=$0());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/bd);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-q0)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(Sd*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=tx());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function td(i,t,e){return new Wr(i,{minFilter:ri,generateMipmaps:t,type:qe,colorSpace:ir,depthBuffer:e})}function Zr(i,t,e){return new We({name:i,uniforms:t,vertexShader:ae.cube_vert,fragmentShader:e,side:Ce,blending:si,depthTest:!1,depthWrite:!1})}function K0(){return Zr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Sd}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function $0(){return Zr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:bd}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function tx(){return Zr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${J0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function ed(){return Zr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function nd(){return Zr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ex(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Ma||f===va)if(t.has(u)){let p=t.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let M=new Wr(p.height);return M.fromEquirectangularTexture(i,u),t.set(u,M),u.addEventListener("dispose",c),a(M.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,p=f===Ma||f===va,M=f===qi||f===Cs;if(p||M){let x=e.get(u),g=x!==void 0?x.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new ll(i)),x=p?n.fromEquirectangular(u,x):n.fromCubemap(u,x),x.texture.pmremVersion=u.pmremVersion,e.set(u,x),x.texture;if(x!==void 0)return x.texture;{let y=u.image;return p&&y&&y.height>0||M&&y&&l(y)?(n===null&&(n=new ll(i)),x=p?n.fromEquirectangular(u):n.fromCubemap(u),x.texture.pmremVersion=u.pmremVersion,e.set(u,x),u.addEventListener("dispose",h),x.texture):null}}}return u}function a(u,f){return f===Ma?u.mapping=qi:f===va&&(u.mapping=Cs),u}function l(u){let f=0,p=6;for(let M=0;M<p;M++)u[M]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function nx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&$s("WebGLRenderer: "+n+" extension not supported."),s}}}function ix(i,t,e,n){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let x in p.attributes)t.remove(p.attributes[x]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let M=r.get(p);M&&(t.remove(M),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,M){return s[M.id]!==void 0||(M.addEventListener("dispose",a),s[M.id]=new WeakRef(M),o.register(M,M.id,M),e.memory.geometries++),M}function h(p){let M=p.attributes;for(let x in M)t.update(M[x],i.ARRAY_BUFFER)}function d(p){let M=p.index,x=p.attributes.position,g=0;if(x===void 0)return;let y=M!==null?M.array.length:x.array.length/3-1,w=x.count>=65535?ur:hr,_=new w(Math.ceil(y/3)*6,1),S=_.array;if(M!==null){let m=M.array;g=M.version;for(let v=0,P=0;v<y;v+=3){let E=m[v+0],U=m[v+1],N=m[v+2];S[P++]=E,S[P++]=U,S[P++]=U,S[P++]=N,S[P++]=N,S[P++]=E}}else{g=x.version;for(let m=0,v=0;m<y;m+=3){let P=m+0,E=m+1,U=m+2;S[v++]=P,S[v++]=E,S[v++]=E,S[v++]=U,S[v++]=U,S[v++]=P}}_.version=g;let b=r.get(p);b&&t.remove(b),r.set(p,_)}function u(p){let M=r.get(p);if(M){let x=p.index;x!==null&&M.version<x.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in s){let M=s[p].deref();M!==void 0&&l(M)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function sx(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let M=0;for(let x=0;x<f;x++)M+=u[x];e.update(M,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function rx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Kt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ox(i,t,e){let n=new WeakMap,s=new we;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let P=function(){m.dispose(),n.delete(a),a.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],w=0;f===!0&&(w=1),p===!0&&(w=2),M===!0&&(w=3);let _=a.attributes.position.count*w,S=1;_>t.maxTextureSize&&(S=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let b=new Float32Array(_*S*4*d),m=new or(b,_,S,d);m.type=wn,m.needsUpdate=!0;let v=w*4;for(let E=0;E<d;E++){let U=x[E],N=g[E],D=y[E],R=_*S*4*E;for(let H=0;H<U.count;H++){let O=H*v;f===!0&&(s.fromBufferAttribute(U,H),b[R+O+0]=s.x,b[R+O+1]=s.y,b[R+O+2]=s.z,b[R+O+3]=0),p===!0&&(s.fromBufferAttribute(N,H),b[R+O+4]=s.x,b[R+O+5]=s.y,b[R+O+6]=s.z,b[R+O+7]=0),M===!0&&(s.fromBufferAttribute(D,H),b[R+O+8]=s.x,b[R+O+9]=s.y,b[R+O+10]=s.z,b[R+O+11]=D.itemSize===4?s.w:1)}}u={count:d,texture:m,size:new Ut(_,S)},n.set(a,u),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function ax(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var lx={[Rr]:"LINEAR_TONE_MAPPING",[Cr]:"REINHARD_TONE_MAPPING",[Ir]:"CINEON_TONE_MAPPING",[Ji]:"ACES_FILMIC_TONE_MAPPING",[Ur]:"AGX_TONE_MAPPING",[Nr]:"NEUTRAL_TONE_MAPPING",[Pr]:"CUSTOM_TONE_MAPPING"};function cx(i,t,e,n,s,r){let o=new Fe(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new se;h.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new kt([0,2,0,0,2,0],2));let d=new ws({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new qt(h,d),f=new Yi(-1,1,1,-1,0,1),p=null,M=null,x=!1,g,y=null,w=[],_=!1;this.setSize=function(S,b){o.setSize(S,b),a!==null&&a.setSize(S,b),l!==null&&l.setSize(S,b);for(let m=0;m<w.length;m++){let v=w[m];v.setSize&&v.setSize(S,b)}},this.setEffects=function(S){w=S,_=w.length>0&&w[0].isRenderPass===!0;let b=o.width,m=o.height;w.length>0&&a===null&&(a=new Fe(b,m,{type:qe,depthBuffer:!1,stencilBuffer:!1}),l=new Fe(b,m,{type:qe,depthBuffer:!1,stencilBuffer:!1}));let v=s===!0&&w.some(P=>P.needsDepthTexture===!0);v!==(o.depthTexture!==null)&&(v===!0&&c===null&&(c=new ei(b,m),r===!0&&(c.format=oi,c.type=ji)),o.dispose(),o.depthTexture=v?c:null,o.resolveDepthBuffer=v,o.storeMultisampledDepthBuffer=v);for(let P=0;P<w.length;P++){let E=w[P];E.setSize&&E.setSize(b,m),v&&E.needsDepthTexture===!0&&E.setDepthTexture&&E.setDepthTexture(c)}},this.begin=function(S,b){if(x||S.toneMapping===Vn&&w.length===0)return!1;if(y=b,b!==null){let m=b.width,v=b.height;(o.width!==m||o.height!==v)&&this.setSize(m,v)}return _===!1&&S.setRenderTarget(o),g=S.toneMapping,S.toneMapping=Vn,!0},this.hasRenderPass=function(){return _},this.end=function(S,b){S.toneMapping=g,x=!0;let m=o,v=a;for(let P=0;P<w.length;P++){let E=w[P];E.enabled!==!1&&(E.render(S,v,m,b),E.needsSwap!==!1&&(m=v,v=v===a?l:a))}if(p!==S.outputColorSpace||M!==S.toneMapping){p=S.outputColorSpace,M=S.toneMapping,d.defines={},le.getTransfer(p)===ge&&(d.defines.SRGB_TRANSFER="");let P=lx[M];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=m.texture,S.setRenderTarget(y),S.render(u,f),y=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var wd=new an,Ed=new ei(1,1),Td=new mr(1),Ad=new or,Rd=new Xo,Cd=new pr,id=[],sd=[],rd=new Float32Array(16),od=new Float32Array(9),ad=new Float32Array(4);function Ns(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=id[s];if(r===void 0&&(r=new Float32Array(s),id[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function hl(i,t){let e=sd[t];e===void 0&&(e=new Int32Array(t),sd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function hx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ux(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function dx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function fx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function px(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Le(e,n))return;ad.set(n),i.uniformMatrix2fv(this.addr,!1,ad),Be(e,n)}}function mx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Le(e,n))return;od.set(n),i.uniformMatrix3fv(this.addr,!1,od),Be(e,n)}}function gx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Le(e,n))return;rd.set(n),i.uniformMatrix4fv(this.addr,!1,rd),Be(e,n)}}function xx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function _x(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function yx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function Mx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function vx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Sx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function bx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function wx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function ul(i){return i.version===0&&(i.compareFunction=Nc,i.needsUpdate=!0),i}function Ex(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=ul(Ed):r=wd,e.setTexture2D(t||r,s)}function Tx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Rd,s)}function Ax(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=ul(Td):r=Cd,e.setTextureCube(t||r,s)}function Rx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ad,s)}function Cx(i){switch(i){case 5126:return hx;case 35664:return ux;case 35665:return dx;case 35666:return fx;case 35674:return px;case 35675:return mx;case 35676:return gx;case 5124:case 35670:return xx;case 35667:case 35671:return _x;case 35668:case 35672:return yx;case 35669:case 35673:return Mx;case 5125:return vx;case 36294:return Sx;case 36295:return bx;case 36296:return wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ex;case 35679:case 36299:case 36307:return Tx;case 35680:case 36300:case 36308:case 36293:return Ax;case 36289:case 36303:case 36311:case 36292:return Rx}}function Ix(i,t){i.uniform1fv(this.addr,t)}function Px(i,t){let e=Ns(t,this.size,2);i.uniform2fv(this.addr,e)}function Ux(i,t){let e=Ns(t,this.size,3);i.uniform3fv(this.addr,e)}function Nx(i,t){let e=Ns(t,this.size,4);i.uniform4fv(this.addr,e)}function Fx(i,t){let e=Ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Dx(i,t){let e=Ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Lx(i,t){let e=Ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Bx(i,t){i.uniform1iv(this.addr,t)}function kx(i,t){i.uniform2iv(this.addr,t)}function Ox(i,t){i.uniform3iv(this.addr,t)}function Vx(i,t){i.uniform4iv(this.addr,t)}function zx(i,t){i.uniform1uiv(this.addr,t)}function Gx(i,t){i.uniform2uiv(this.addr,t)}function Hx(i,t){i.uniform3uiv(this.addr,t)}function Wx(i,t){i.uniform4uiv(this.addr,t)}function Zx(i,t,e){let n=this.cache,s=t.length,r=hl(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=ul(Ed):o=wd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Yx(i,t,e){let n=this.cache,s=t.length,r=hl(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Rd,r[o])}function Xx(i,t,e){let n=this.cache,s=t.length,r=hl(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=ul(Td):o=Cd;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function Jx(i,t,e){let n=this.cache,s=t.length,r=hl(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ad,r[o])}function qx(i){switch(i){case 5126:return Ix;case 35664:return Px;case 35665:return Ux;case 35666:return Nx;case 35674:return Fx;case 35675:return Dx;case 35676:return Lx;case 5124:case 35670:return Bx;case 35667:case 35671:return kx;case 35668:case 35672:return Ox;case 35669:case 35673:return Vx;case 5125:return zx;case 36294:return Gx;case 36295:return Hx;case 36296:return Wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Zx;case 35679:case 36299:case 36307:return Yx;case 35680:case 36300:case 36308:case 36293:return Xx;case 36289:case 36303:case 36311:case 36292:return Jx}}var Wc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Cx(e.type)}},Zc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qx(e.type)}},Yc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Gc=/(\w+)(\])?(\[|\.)?/g;function ld(i,t){i.seq.push(t),i.map[t.id]=t}function jx(i,t,e){let n=i.name,s=n.length;for(Gc.lastIndex=0;;){let r=Gc.exec(n),o=Gc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ld(e,c===void 0?new Wc(a,i,t):new Zc(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Yc(a),ld(e,d)),e=d}}}var Us=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);jx(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function cd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Qx=37297,Kx=0;function $x(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var hd=new $t;function t_(i){le._getMatrix(hd,le.workingColorSpace,i);let t=`mat3( ${hd.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(i)){case sr:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ud(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+$x(i.getShaderSource(t),a)}else return r}function e_(i,t){let e=t_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var n_={[Rr]:"Linear",[Cr]:"Reinhard",[Ir]:"Cineon",[Ji]:"ACESFilmic",[Ur]:"AgX",[Nr]:"Neutral",[Pr]:"Custom"};function i_(i,t){let e=n_[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var al=new z;function s_(){le.getLuminanceCoefficients(al);let i=al.x.toFixed(4),t=al.y.toFixed(4),e=al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hr).join(`
`)}function o_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function a_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Hr(i){return i!==""}function dd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function fd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var l_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xc(i){return i.replace(l_,c_)}function c_(i,t){let e=ae[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Xc(e)}var h_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pd(i){return i.replace(h_,u_)}function u_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function md(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var d_={[Tr]:"SHADOWMAP_TYPE_PCF",[As]:"SHADOWMAP_TYPE_VSM"};function f_(i){return d_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var p_={[Cs]:"ENVMAP_MODE_REFRACTION"};function m_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":p_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var g_={[Ar]:"ENVMAP_BLENDING_MULTIPLY",[Nu]:"ENVMAP_BLENDING_MIX",[Fu]:"ENVMAP_BLENDING_ADD"};function x_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":g_[i.combine]||"ENVMAP_BLENDING_NONE"}function __(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=f_(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=m_(e),d=x_(e),u=r_(e),f=o_(r),p=s.createProgram(),M,x,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Hr).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Hr).join(`
`),x.length>0&&(x+=`
`)):(M=[md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),x=[md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vn?"#define TONE_MAPPING":"",e.toneMapping!==Vn?ae.tonemapping_pars_fragment:"",e.toneMapping!==Vn?i_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,e_("linearToOutputTexel",e.outputColorSpace),s_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hr).join(`
`)),o=Xc(o),o=dd(o,e),o=fd(o,e),a=Xc(a),a=dd(a,e),a=fd(a,e),o=pd(o),a=pd(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",e.glslVersion===Fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let y=g+M+o,w=g+x+a,_=cd(s,s.VERTEX_SHADER,y),S=cd(s,s.FRAGMENT_SHADER,w);s.attachShader(p,_),s.attachShader(p,S),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function b(E){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(p)||"",N=s.getShaderInfoLog(_)||"",D=s.getShaderInfoLog(S)||"",R=U.trim(),H=N.trim(),O=D.trim(),q=!0,Z=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,_,S);else{let L=ud(s,_,"vertex"),X=ud(s,S,"fragment");Kt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+R+`
`+L+`
`+X)}else R!==""?Xt("WebGLProgram: Program Info Log:",R):(H===""||O==="")&&(Z=!1);Z&&(E.diagnostics={runnable:q,programLog:R,vertexShader:{log:H,prefix:M},fragmentShader:{log:O,prefix:x}})}s.deleteShader(_),s.deleteShader(S),m=new Us(s,p),v=a_(s,p)}let m;this.getUniforms=function(){return m===void 0&&b(this),m};let v;this.getAttributes=function(){return v===void 0&&b(this),v};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(p,Qx)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kx++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=_,this.fragmentShader=S,this}var y_=0,Jc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new qc(t),e.set(t,n)),n}},qc=class{constructor(t){this.id=y_++,this.code=t,this.usedTimes=0}};function M_(i){return i===Ri||i===Or||i===Vr}function v_(i,t,e,n,s,r){let o=new ar,a=new Jc,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(m){return l.add(m),m===0?"uv":`uv${m}`}function p(m,v,P,E,U,N){let D=E.fog,R=U.geometry,H=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?E.environment:null,O=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,q=t.get(m.envMap||H,O),Z=u[m.type],L=n.precision;m.precision!==null&&(L=n.getMaxPrecision(m.precision),L!==m.precision&&Xt("WebGLProgram.getParameters:",m.precision,"not supported, using",L,"instead."));let X=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,V=X!==void 0?X.length:0,G=0;R.morphAttributes.position!==void 0&&(G=1),R.morphAttributes.normal!==void 0&&(G=2),R.morphAttributes.color!==void 0&&(G=3);let W,B,C,k;if(Z){let Pt=Gn[Z];W=Pt.vertexShader,B=Pt.fragmentShader}else{W=m.vertexShader,B=m.fragmentShader;let Pt=a.getVertexShaderStage(m),_e=a.getFragmentShaderStage(m);a.update(m,Pt,_e),C=Pt.id,k=_e.id}let tt=i.getRenderTarget(),nt=i.state.buffers.depth.getReversed(),ot=U.isInstancedMesh===!0,xt=U.isBatchedMesh===!0,ft=!!m.map,wt=!!m.matcap,Mt=!!q,$=Mt&&q.isPMREMTexture===!0,It=!!m.aoMap,Dt=!!m.lightMap,Yt=!!m.bumpMap&&m.wireframe===!1,Wt=!!m.normalMap,Lt=!!m.displacementMap,Qt=!!m.emissiveMap,ee=!!m.metalnessMap,Ae=!!m.roughnessMap,Se=m.anisotropy>0,j=m.clearcoat>0,Q=m.diffuseRoughness>0,St=m.dispersion>0,Jt=m.retroreflectivity>0,ut=m.iridescence>0,ne=m.sheen>0,Ct=m.transmission>0,at=Se&&!!m.anisotropyMap,I=j&&!!m.clearcoatMap,T=j&&!!m.clearcoatNormalMap,F=j&&!!m.clearcoatRoughnessMap,K=Q&&!!m.diffuseRoughnessMap,et=ut&&!!m.iridescenceMap,ct=ut&&!!m.iridescenceThicknessMap,gt=ne&&!!m.sheenColorMap,rt=ne&&!!m.sheenRoughnessMap,dt=!!m.specularMap,vt=!!m.specularColorMap,Y=!!m.specularIntensityMap,pt=Ct&&!!m.transmissionMap,ht=Ct&&!!m.thicknessMap,Et=!!m.gradientMap,bt=!!m.alphaMap,Tt=m.alphaTest>0,Gt=!!m.alphaHash,re=!!m.extensions,yt=Vn;m.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(yt=i.toneMapping);let Zt=$?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,ie={shaderID:Z,shaderType:m.type,shaderName:m.name,vertexShader:W,fragmentShader:B,defines:m.defines,customVertexShaderID:C,customFragmentShaderID:k,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:L,batching:xt,batchingColor:xt&&U._colorsTexture!==null,instancing:ot,instancingColor:ot&&U.instanceColor!==null,instancingMorph:ot&&U.morphTexture!==null,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:ft,matcap:wt,envMap:Mt,envMapMode:Mt&&q.mapping,envMapPMREM:$,envMapMaxLod:$?Zt.length-1:null,envMapSize:$?Zt[0].width:null,aoMap:It,lightMap:Dt,bumpMap:Yt,normalMap:Wt,displacementMap:Lt,emissiveMap:Qt,normalMapObjectSpace:Wt&&m.normalMapType===Bu,normalMapTangentSpace:Wt&&m.normalMapType===Ps,packedNormalMap:Wt&&m.normalMapType===Ps&&M_(m.normalMap.format),metalnessMap:ee,roughnessMap:Ae,anisotropy:Se,anisotropyMap:at,clearcoat:j,clearcoatMap:I,clearcoatNormalMap:T,clearcoatRoughnessMap:F,diffuseRoughness:Q,diffuseRoughnessMap:K,dispersion:St,retroreflection:Jt,iridescence:ut,iridescenceMap:et,iridescenceThicknessMap:ct,sheen:ne,sheenColorMap:gt,sheenRoughnessMap:rt,specularMap:dt,specularColorMap:vt,specularIntensityMap:Y,transmission:Ct,transmissionMap:pt,thicknessMap:ht,gradientMap:Et,opaque:m.transparent===!1&&m.blending===Rs&&m.alphaToCoverage===!1,alphaMap:bt,alphaTest:Tt,alphaHash:Gt,combine:m.combine,mapUv:ft&&f(m.map.channel),aoMapUv:It&&f(m.aoMap.channel),lightMapUv:Dt&&f(m.lightMap.channel),bumpMapUv:Yt&&f(m.bumpMap.channel),normalMapUv:Wt&&f(m.normalMap.channel),displacementMapUv:Lt&&f(m.displacementMap.channel),emissiveMapUv:Qt&&f(m.emissiveMap.channel),metalnessMapUv:ee&&f(m.metalnessMap.channel),roughnessMapUv:Ae&&f(m.roughnessMap.channel),anisotropyMapUv:at&&f(m.anisotropyMap.channel),clearcoatMapUv:I&&f(m.clearcoatMap.channel),clearcoatNormalMapUv:T&&f(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F&&f(m.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:K&&f(m.diffuseRoughnessMap.channel),iridescenceMapUv:et&&f(m.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&f(m.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&f(m.sheenColorMap.channel),sheenRoughnessMapUv:rt&&f(m.sheenRoughnessMap.channel),specularMapUv:dt&&f(m.specularMap.channel),specularColorMapUv:vt&&f(m.specularColorMap.channel),specularIntensityMapUv:Y&&f(m.specularIntensityMap.channel),transmissionMapUv:pt&&f(m.transmissionMap.channel),thicknessMapUv:ht&&f(m.thicknessMap.channel),alphaMapUv:bt&&f(m.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(Wt||Se),vertexNormals:!!R.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!R.attributes.uv&&(ft||bt),fog:!!D,useFog:m.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||R.attributes.normal===void 0&&Wt===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:nt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:G,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:N.filter(Pt=>Pt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:yt,decodeVideoTexture:ft&&m.map.isVideoTexture===!0&&le.getTransfer(m.map.colorSpace)===ge,decodeVideoTextureEmissive:Qt&&m.emissiveMap.isVideoTexture===!0&&le.getTransfer(m.emissiveMap.colorSpace)===ge,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===me,flipSided:m.side===Ce,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:re&&m.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&m.extensions.multiDraw===!0||xt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return ie.vertexUv1s=l.has(1),ie.vertexUv2s=l.has(2),ie.vertexUv3s=l.has(3),l.clear(),ie}function M(m){let v=[];if(m.shaderID?v.push(m.shaderID):(v.push(m.customVertexShaderID),v.push(m.customFragmentShaderID)),m.defines!==void 0)for(let P in m.defines)v.push(P),v.push(m.defines[P]);return m.isRawShaderMaterial===!1&&(x(v,m),g(v,m),v.push(i.outputColorSpace)),v.push(m.customProgramCacheKey),v.join()}function x(m,v){m.push(v.precision),m.push(v.outputColorSpace),m.push(v.envMapMode),m.push(v.envMapPMREM),m.push(v.envMapMaxLod),m.push(v.envMapSize),m.push(v.mapUv),m.push(v.alphaMapUv),m.push(v.lightMapUv),m.push(v.aoMapUv),m.push(v.bumpMapUv),m.push(v.normalMapUv),m.push(v.displacementMapUv),m.push(v.emissiveMapUv),m.push(v.metalnessMapUv),m.push(v.roughnessMapUv),m.push(v.anisotropyMapUv),m.push(v.clearcoatMapUv),m.push(v.clearcoatNormalMapUv),m.push(v.clearcoatRoughnessMapUv),m.push(v.diffuseRoughnessMapUv),m.push(v.iridescenceMapUv),m.push(v.iridescenceThicknessMapUv),m.push(v.sheenColorMapUv),m.push(v.sheenRoughnessMapUv),m.push(v.specularMapUv),m.push(v.specularColorMapUv),m.push(v.specularIntensityMapUv),m.push(v.transmissionMapUv),m.push(v.thicknessMapUv),m.push(v.combine),m.push(v.fogExp2),m.push(v.sizeAttenuation),m.push(v.morphTargetsCount),m.push(v.numSunLights),m.push(v.numDirLights),m.push(v.numPointLights),m.push(v.numSpotLights),m.push(v.numSpotLightMaps),m.push(v.numHemiLights),m.push(v.numRectAreaLights),m.push(v.numSunLightShadows),m.push(v.numDirLightShadows),m.push(v.numPointLightShadows),m.push(v.numSpotLightShadows),m.push(v.numSpotLightShadowsWithMaps),m.push(v.numLightProbes),m.push(v.numLightProbeGrids),m.push(v.shadowMapType),m.push(v.toneMapping),m.push(v.numClippingPlanes),m.push(v.numClipIntersection),m.push(v.depthPacking)}function g(m,v){o.disableAll(),v.instancing&&o.enable(0),v.instancingColor&&o.enable(1),v.instancingMorph&&o.enable(2),v.matcap&&o.enable(3),v.envMap&&o.enable(4),v.normalMapObjectSpace&&o.enable(5),v.normalMapTangentSpace&&o.enable(6),v.clearcoat&&o.enable(7),v.iridescence&&o.enable(8),v.alphaTest&&o.enable(9),v.vertexColors&&o.enable(10),v.vertexAlphas&&o.enable(11),v.vertexUv1s&&o.enable(12),v.vertexUv2s&&o.enable(13),v.vertexUv3s&&o.enable(14),v.vertexTangents&&o.enable(15),v.anisotropy&&o.enable(16),v.alphaHash&&o.enable(17),v.batching&&o.enable(18),v.dispersion&&o.enable(19),v.retroreflection&&o.enable(24),v.diffuseRoughness&&o.enable(25),v.batchingColor&&o.enable(20),v.gradientMap&&o.enable(21),v.packedNormalMap&&o.enable(22),v.vertexNormals&&o.enable(23),m.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),v.numLightProbeGrids>0&&o.enable(22),v.hasPositionAttribute&&o.enable(23),m.push(o.mask)}function y(m){let v=u[m.type],P;if(v){let E=Gn[v];P=li.clone(E.uniforms)}else P=m.uniforms;return P}function w(m,v){let P=h.get(v);return P!==void 0?++P.usedTimes:(P=new __(i,v,m,s),c.push(P),h.set(v,P)),P}function _(m){if(--m.usedTimes===0){let v=c.indexOf(m);c[v]=c[c.length-1],c.pop(),h.delete(m.cacheKey),m.destroy()}}function S(m){a.remove(m)}function b(){a.dispose()}return{getParameters:p,getProgramCacheKey:M,getUniforms:y,acquireProgram:w,releaseProgram:_,releaseShaderCache:S,programs:c,dispose:b}}function S_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function b_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function gd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function xd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,M,x,g){let y=i[t];return y===void 0?(y={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:M,renderOrder:u.renderOrder,z:x,group:g},i[t]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=p,y.materialVariant=o(u),y.groupOrder=M,y.renderOrder=u.renderOrder,y.z=x,y.group=g),t++,y}function l(u,f,p,M,x,g,y){y.reversedDepth===!0&&(x=-x);let w=a(u,f,p,M,x,g);p.transmission>0?n.push(w):p.transparent===!0?s.push(w):e.push(w)}function c(u,f,p,M,x,g){let y=a(u,f,p,M,x,g);p.transmission>0?n.unshift(y):p.transparent===!0?s.unshift(y):e.unshift(y)}function h(u,f){e.length>1&&e.sort(u||b_),n.length>1&&n.sort(f||gd),s.length>1&&s.sort(f||gd)}function d(){for(let u=t,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function w_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new xd,i.set(n,[o])):s>=r.length?(o=new xd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function E_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new z,color:new _t};break;case"SpotLight":e={position:new z,direction:new z,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new _t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":e={color:new _t,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function T_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var A_=0;function R_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function C_(i){let t=new E_,e=T_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let s=new z,r=new Ht,o=new Ht;function a(c){let h=0,d=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,p=0,M=0,x=0,g=0,y=0,w=0,_=0,S=0,b=0,m=0,v=0,P=0,E=0;c.sort(R_);for(let N=0,D=c.length;N<D;N++){let R=c[N],H=R.color,O=R.intensity,q=R.distance,Z=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Ri?Z=R.shadow.map.texture:Z=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=H.r*O,d+=H.g*O,u+=H.b*O;else if(R.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(R.sh.coefficients[L],O);E++}else if(R.isSunLight){let L=t.get(R);if(L.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let X=R.shadow,V=e.get(R);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),n.sunShadow[p]=V,n.sunShadowMap[p]=Z;let G=X.getViewportCount();for(let W=0;W<G;W++)n.sunShadowMatrix[M+W]=X.getMatrix(W),n.sunShadowCascade[M+W]=X._cascadeData[W];M+=G,p++}n.sun[f]=L,f++}else if(R.isDirectionalLight){let L=t.get(R);if(L.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let X=R.shadow,V=e.get(R);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.directionalShadow[x]=V,n.directionalShadowMap[x]=Z,n.directionalShadowMatrix[x]=R.shadow.matrix,S++}n.directional[x]=L,x++}else if(R.isSpotLight){let L=t.get(R);L.position.setFromMatrixPosition(R.matrixWorld),L.color.copy(H).multiplyScalar(O),L.distance=q,L.coneCos=Math.cos(R.angle),L.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),L.decay=R.decay,n.spot[y]=L;let X=R.shadow;if(R.map&&(n.spotLightMap[v]=R.map,v++,X.updateMatrices(R),R.castShadow&&P++),n.spotLightMatrix[y]=X.matrix,R.castShadow){let V=e.get(R);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.spotShadow[y]=V,n.spotShadowMap[y]=Z,m++}y++}else if(R.isRectAreaLight){let L=t.get(R);L.color.copy(H).multiplyScalar(O),L.halfWidth.set(R.width*.5,0,0),L.halfHeight.set(0,R.height*.5,0),n.rectArea[w]=L,w++}else if(R.isPointLight){let L=t.get(R);if(L.color.copy(R.color).multiplyScalar(R.intensity),L.distance=R.distance,L.decay=R.decay,R.castShadow){let X=R.shadow,V=e.get(R);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,V.shadowCameraNear=X.camera.near,V.shadowCameraFar=X.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=R.shadow.matrix,b++}n.point[g]=L,g++}else if(R.isHemisphereLight){let L=t.get(R);L.skyColor.copy(R.color).multiplyScalar(O),L.groundColor.copy(R.groundColor).multiplyScalar(O),n.hemi[_]=L,_++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Nt.LTC_FLOAT_1,n.rectAreaLTC2=Nt.LTC_FLOAT_2):(n.rectAreaLTC1=Nt.LTC_HALF_1,n.rectAreaLTC2=Nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let U=n.hash;(U.sunLength!==f||U.directionalLength!==x||U.pointLength!==g||U.spotLength!==y||U.rectAreaLength!==w||U.hemiLength!==_||U.numSunShadows!==p||U.numDirectionalShadows!==S||U.numPointShadows!==b||U.numSpotShadows!==m||U.numSpotMaps!==v||U.numLightProbes!==E)&&(n.sun.length=f,n.directional.length=x,n.spot.length=y,n.rectArea.length=w,n.point.length=g,n.hemi.length=_,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=m,n.spotShadowMap.length=m,n.spotLightMatrix.length=m+v-P,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=E,U.sunLength=f,U.directionalLength=x,U.pointLength=g,U.spotLength=y,U.rectAreaLength=w,U.hemiLength=_,U.numSunShadows=p,U.numDirectionalShadows=S,U.numPointShadows=b,U.numSpotShadows=m,U.numSpotMaps=v,U.numLightProbes=E,n.version=A_++)}function l(c,h){let d=0,u=0,f=0,p=0,M=0,x=0,g=h.matrixWorldInverse;for(let y=0,w=c.length;y<w;y++){let _=c[y];if(_.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(g),d++}else if(_.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),u++}else if(_.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),p++}else if(_.isRectAreaLight){let S=n.rectArea[M];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),M++}else if(_.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){let S=n.hemi[x];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function _d(i){let t=new C_(i),e=[],n=[],s=[];function r(d){h.camera=d,e.length=0,n.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function I_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new _d(i),t.set(s,[a])):r>=o.length?(a=new _d(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var P_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,N_=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],F_=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],yd=new Ht,Gr=new z,Hc=new z;function D_(i,t,e){let n=new Si,s=new Ut,r=new Ut,o=new we,a=new aa,l=new la,c={},h=e.maxTextureSize,d={[Ai]:Ce,[Ce]:Ai,[me]:me},u=new We({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:P_,fragmentShader:U_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new se;p.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new qt(p,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tr;let g=this.type;this.render=function(b,m,v){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||b.length===0)return;this.type===pu&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Tr);let P=i.getRenderTarget(),E=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),N=i.state;N.setBlending(si),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let D=g!==this.type;D&&m.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(H=>H.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,H=b.length;R<H;R++){let O=b[R],q=O.shadow;if(q===void 0){Xt("WebGLShadowMap:",O,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let Z=q.getFrameExtents();s.multiply(Z),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,q.mapSize.y=r.y));let L=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=L,q.map===null||D===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===As){if(O.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Fe(s.x,s.y,{format:Ri,type:qe,minFilter:on,magFilter:on,generateMipmaps:!1}),q.map.texture.name=O.name+".shadowMap",q.map.depthTexture=new ei(s.x,s.y,wn),q.map.depthTexture.name=O.name+".shadowMapDepth",q.map.depthTexture.format=ti,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Ne,q.map.depthTexture.magFilter=Ne}else O.isPointLight?(q.map=new Wr(s.x),q.map.depthTexture=new mr(s.x,Nn)):(q.map=new Fe(s.x,s.y),q.map.depthTexture=new ei(s.x,s.y,Nn)),q.map.depthTexture.name=O.name+".shadowMap",q.map.depthTexture.format=ti,this.type===Tr?(q.map.depthTexture.compareFunction=L?Uc:Pc,q.map.depthTexture.minFilter=on,q.map.depthTexture.magFilter=on):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Ne,q.map.depthTexture.magFilter=Ne);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let X=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();O.isPointLight!==!0&&q.updateMatrices(O,v);let V=(q.camera.layers.mask&4294967294)!==0?q.camera.layers:v.layers;for(let G=0;G<X;G++){let W=q.getCamera(G);if(O.isPointLight){let B=q.camera,C=q.matrix,k=O.distance||B.far;k!==B.far&&(B.far=k,B.updateProjectionMatrix()),Gr.setFromMatrixPosition(O.matrixWorld),B.position.copy(Gr),Hc.copy(B.position),Hc.add(N_[G]),B.up.copy(F_[G]),B.lookAt(Hc),B.updateMatrixWorld(),C.makeTranslation(-Gr.x,-Gr.y,-Gr.z),yd.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),q._frustum.setFromProjectionMatrix(yd,B.coordinateSystem,B.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,G),i.clear();else{G===0&&(i.setRenderTarget(q.map),i.clear());let B=q.getViewport(G);o.set(r.x*B.x,r.y*B.y,r.x*B.z,r.y*B.w),N.viewport(o)}n=q.getFrustum(G),_(m,v,W,O,V,this.type)}q.isPointLightShadow!==!0&&this.type===As&&y(q,v),q.needsUpdate=!1}g=this.type,x.needsUpdate=!1,i.setRenderTarget(P,E,U)};function y(b,m){let v=t.update(M);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new Fe(s.x,s.y,{format:Ri,type:qe}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(m,null,v,u,M,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(m,null,v,f,M,null)}function w(b,m,v,P){let E=null,U=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(U!==void 0)E=U;else if(E=v.isPointLight===!0?l:a,i.localClippingEnabled&&m.clipShadows===!0&&Array.isArray(m.clippingPlanes)&&m.clippingPlanes.length!==0||m.displacementMap&&m.displacementScale!==0||m.alphaMap&&m.alphaTest>0||m.map&&m.alphaTest>0||m.alphaToCoverage===!0){let N=E.uuid,D=m.uuid,R=c[N];R===void 0&&(R={},c[N]=R);let H=R[D];H===void 0&&(H=E.clone(),R[D]=H,m.addEventListener("dispose",S)),E=H}if(E.visible=m.visible,E.wireframe=m.wireframe,P===As?E.side=m.shadowSide!==null?m.shadowSide:m.side:E.side=m.shadowSide!==null?m.shadowSide:d[m.side],E.alphaMap=m.alphaMap,E.alphaTest=m.alphaToCoverage===!0?.5:m.alphaTest,E.map=m.map,E.clipShadows=m.clipShadows,E.clippingPlanes=m.clippingPlanes,E.clipIntersection=m.clipIntersection,E.displacementMap=m.displacementMap,E.displacementScale=m.displacementScale,E.displacementBias=m.displacementBias,E.wireframeLinewidth=m.wireframeLinewidth,E.linewidth=m.linewidth,v.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let N=i.properties.get(E);N.light=v}return E}function _(b,m,v,P,E,U){if(b.visible===!1)return;if(b.layers.test(E)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&U===As)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);let R=t.update(b),H=b.material;if(Array.isArray(H)){let O=R.groups;for(let q=0,Z=O.length;q<Z;q++){let L=O[q],X=H[L.materialIndex];if(X&&X.visible){let V=w(b,X,P,U);b.onBeforeShadow(i,b,m,v,R,V,L),i.renderBufferDirect(v,null,R,V,b,L),b.onAfterShadow(i,b,m,v,R,V,L)}}}else if(H.visible){let O=w(b,H,P,U);b.onBeforeShadow(i,b,m,v,R,O,null),i.renderBufferDirect(v,null,R,O,b,null),b.onAfterShadow(i,b,m,v,R,O,null)}}let D=b.children;for(let R=0,H=D.length;R<H;R++)_(D[R],m,v,P,E,U)}function S(b){b.target.removeEventListener("dispose",S);for(let v in c){let P=c[v],E=b.target.uuid;E in P&&(P[E].dispose(),delete P[E])}}}function L_(i,t){function e(){let Y=!1,pt=new we,ht=null,Et=new we(0,0,0,0);return{setMask:function(bt){ht!==bt&&!Y&&(i.colorMask(bt,bt,bt,bt),ht=bt)},setLocked:function(bt){Y=bt},setClear:function(bt,Tt,Gt,re,yt){yt===!0&&(bt*=re,Tt*=re,Gt*=re),pt.set(bt,Tt,Gt,re),Et.equals(pt)===!1&&(i.clearColor(bt,Tt,Gt,re),Et.copy(pt))},reset:function(){Y=!1,ht=null,Et.set(-1,0,0,0)}}}function n(){let Y=!1,pt=!1,ht=null,Et=null,bt=null;return{setReversed:function(Tt){if(pt!==Tt){let Gt=t.get("EXT_clip_control");Tt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),pt=Tt;let re=bt;bt=null,this.setClear(re)}},getReversed:function(){return pt},setTest:function(Tt){Tt?nt(i.DEPTH_TEST):ot(i.DEPTH_TEST)},setMask:function(Tt){ht!==Tt&&!Y&&(i.depthMask(Tt),ht=Tt)},setFunc:function(Tt){if(pt&&(Tt=Ju[Tt]),Et!==Tt){switch(Tt){case Do:i.depthFunc(i.NEVER);break;case Lo:i.depthFunc(i.ALWAYS);break;case Bo:i.depthFunc(i.LESS);break;case gs:i.depthFunc(i.LEQUAL);break;case ko:i.depthFunc(i.EQUAL);break;case Oo:i.depthFunc(i.GEQUAL);break;case Vo:i.depthFunc(i.GREATER);break;case zo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Et=Tt}},setLocked:function(Tt){Y=Tt},setClear:function(Tt){bt!==Tt&&(bt=Tt,pt&&(Tt=1-Tt),i.clearDepth(Tt))},reset:function(){Y=!1,ht=null,Et=null,bt=null,pt=!1}}}function s(){let Y=!1,pt=null,ht=null,Et=null,bt=null,Tt=null,Gt=null,re=null,yt=null;return{setTest:function(Zt){Y||(Zt?nt(i.STENCIL_TEST):ot(i.STENCIL_TEST))},setMask:function(Zt){pt!==Zt&&!Y&&(i.stencilMask(Zt),pt=Zt)},setFunc:function(Zt,ie,Pt){(ht!==Zt||Et!==ie||bt!==Pt)&&(i.stencilFunc(Zt,ie,Pt),ht=Zt,Et=ie,bt=Pt)},setOp:function(Zt,ie,Pt){(Tt!==Zt||Gt!==ie||re!==Pt)&&(i.stencilOp(Zt,ie,Pt),Tt=Zt,Gt=ie,re=Pt)},setLocked:function(Zt){Y=Zt},setClear:function(Zt){yt!==Zt&&(i.clearStencil(Zt),yt=Zt)},reset:function(){Y=!1,pt=null,ht=null,Et=null,bt=null,Tt=null,Gt=null,re=null,yt=null}}}let r=new e,o=new n,a=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],M=null,x=!1,g=null,y=null,w=null,_=null,S=null,b=null,m=null,v=new _t(0,0,0),P=0,E=!1,U=null,N=null,D=null,R=null,H=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,Z=0,L=i.getParameter(i.VERSION);L.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(L)[1]),q=Z>=1):L.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),q=Z>=2);let X=null,V={},G=i.getParameter(i.SCISSOR_BOX),W=i.getParameter(i.VIEWPORT),B=new we().fromArray(G),C=new we().fromArray(W);function k(Y,pt,ht,Et){let bt=new Uint8Array(4),Tt=i.createTexture();i.bindTexture(Y,Tt),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<ht;Gt++)Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,bt):i.texImage2D(pt+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,bt);return Tt}let tt={};tt[i.TEXTURE_2D]=k(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=k(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=k(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=k(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(i.DEPTH_TEST),o.setFunc(gs),Yt(!1),Wt(yc),nt(i.CULL_FACE),It(si);function nt(Y){h[Y]!==!0&&(i.enable(Y),h[Y]=!0)}function ot(Y){h[Y]!==!1&&(i.disable(Y),h[Y]=!1)}function xt(Y,pt){return u[Y]!==pt?(i.bindFramebuffer(Y,pt),u[Y]=pt,Y===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pt),Y===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function ft(Y,pt){let ht=p,Et=!1;if(Y){ht=f.get(pt),ht===void 0&&(ht=[],f.set(pt,ht));let bt=Y.textures;if(ht.length!==bt.length||ht[0]!==i.COLOR_ATTACHMENT0){for(let Tt=0,Gt=bt.length;Tt<Gt;Tt++)ht[Tt]=i.COLOR_ATTACHMENT0+Tt;ht.length=bt.length,Et=!0}}else ht[0]!==i.BACK&&(ht[0]=i.BACK,Et=!0);Et&&i.drawBuffers(ht)}function wt(Y){return M!==Y?(i.useProgram(Y),M=Y,!0):!1}let Mt={[Xi]:i.FUNC_ADD,[gu]:i.FUNC_SUBTRACT,[xu]:i.FUNC_REVERSE_SUBTRACT};Mt[_u]=i.MIN,Mt[yu]=i.MAX;let $={[Mu]:i.ZERO,[vu]:i.ONE,[Su]:i.SRC_COLOR,[Sc]:i.SRC_ALPHA,[Ru]:i.SRC_ALPHA_SATURATE,[Tu]:i.DST_COLOR,[wu]:i.DST_ALPHA,[bu]:i.ONE_MINUS_SRC_COLOR,[bc]:i.ONE_MINUS_SRC_ALPHA,[Au]:i.ONE_MINUS_DST_COLOR,[Eu]:i.ONE_MINUS_DST_ALPHA,[Cu]:i.CONSTANT_COLOR,[Iu]:i.ONE_MINUS_CONSTANT_COLOR,[Pu]:i.CONSTANT_ALPHA,[Uu]:i.ONE_MINUS_CONSTANT_ALPHA};function It(Y,pt,ht,Et,bt,Tt,Gt,re,yt,Zt){if(Y===si){x===!0&&(ot(i.BLEND),x=!1);return}if(x===!1&&(nt(i.BLEND),x=!0),Y!==mu){if(Y!==g||Zt!==E){if((y!==Xi||S!==Xi)&&(i.blendEquation(i.FUNC_ADD),y=Xi,S=Xi),Zt)switch(Y){case Rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Un:i.blendFunc(i.ONE,i.ONE);break;case Mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Kt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Un:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Mc:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vc:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",Y);break}w=null,_=null,b=null,m=null,v.set(0,0,0),P=0,g=Y,E=Zt}return}bt=bt||pt,Tt=Tt||ht,Gt=Gt||Et,(pt!==y||bt!==S)&&(i.blendEquationSeparate(Mt[pt],Mt[bt]),y=pt,S=bt),(ht!==w||Et!==_||Tt!==b||Gt!==m)&&(i.blendFuncSeparate($[ht],$[Et],$[Tt],$[Gt]),w=ht,_=Et,b=Tt,m=Gt),(re.equals(v)===!1||yt!==P)&&(i.blendColor(re.r,re.g,re.b,yt),v.copy(re),P=yt),g=Y,E=!1}function Dt(Y,pt){Y.side===me?ot(i.CULL_FACE):nt(i.CULL_FACE);let ht=Y.side===Ce;pt&&(ht=!ht),Yt(ht),Y.blending===Rs&&Y.transparent===!1?It(si):It(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),r.setMask(Y.colorWrite);let Et=Y.stencilWrite;a.setTest(Et),Et&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Qt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(Y){U!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),U=Y)}function Wt(Y){Y!==du?(nt(i.CULL_FACE),Y!==N&&(Y===yc?i.cullFace(i.BACK):Y===fu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ot(i.CULL_FACE),N=Y}function Lt(Y){Y!==D&&(q&&i.lineWidth(Y),D=Y)}function Qt(Y,pt,ht){Y?(nt(i.POLYGON_OFFSET_FILL),(R!==pt||H!==ht)&&(R=pt,H=ht,o.getReversed()&&(pt=-pt,ht=-ht),i.polygonOffset(pt,ht))):ot(i.POLYGON_OFFSET_FILL)}function ee(Y){Y?nt(i.SCISSOR_TEST):ot(i.SCISSOR_TEST)}function Ae(Y){Y===void 0&&(Y=i.TEXTURE0+O-1),X!==Y&&(i.activeTexture(Y),X=Y)}function Se(Y,pt,ht){ht===void 0&&(X===null?ht=i.TEXTURE0+O-1:ht=X);let Et=V[ht];Et===void 0&&(Et={type:void 0,texture:void 0},V[ht]=Et),(Et.type!==Y||Et.texture!==pt)&&(X!==ht&&(i.activeTexture(ht),X=ht),i.bindTexture(Y,pt||tt[Y]),Et.type=Y,Et.texture=pt)}function j(){let Y=V[X];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function Q(){try{i.compressedTexImage2D(...arguments)}catch(Y){Kt("WebGLState:",Y)}}function St(){try{i.compressedTexImage3D(...arguments)}catch(Y){Kt("WebGLState:",Y)}}function Jt(){try{i.texSubImage2D(...arguments)}catch(Y){Kt("WebGLState:",Y)}}function ut(){try{i.texSubImage3D(...arguments)}catch(Y){Kt("WebGLState:",Y)}}function ne(){try{i.compressedTexSubImage2D(...arguments)}catch(Y){Kt("WebGLState:",Y)}}function Ct(){try{i.compressedTexSubImage3D(...arguments)}catch(Y){Kt("WebGLState:",Y)}}function at(){try{i.texStorage2D(...arguments)}catch(Y){Kt("WebGLState:",Y)}}function I(){try{i.texStorage3D(...arguments)}catch(Y){Kt("WebGLState:",Y)}}function T(){try{i.texImage2D(...arguments)}catch(Y){Kt("WebGLState:",Y)}}function F(){try{i.texImage3D(...arguments)}catch(Y){Kt("WebGLState:",Y)}}function K(Y){return d[Y]!==void 0?d[Y]:i.getParameter(Y)}function et(Y,pt){d[Y]!==pt&&(i.pixelStorei(Y,pt),d[Y]=pt)}function ct(Y){B.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),B.copy(Y))}function gt(Y){C.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),C.copy(Y))}function rt(Y,pt){let ht=c.get(pt);ht===void 0&&(ht=new WeakMap,c.set(pt,ht));let Et=ht.get(Y);Et===void 0&&(Et=i.getUniformBlockIndex(pt,Y.name),i.uniformBlockBinding(pt,Et,Et),ht.set(Y,Et))}function dt(Y,pt,ht){let bt=c.get(pt).get(Y);l[bt]!==ht&&(i.bindBufferBase(i.UNIFORM_BUFFER,bt,ht),l[bt]=ht)}function vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},X=null,V={},u={},l={},f=new WeakMap,p=[],M=null,x=!1,g=null,y=null,w=null,_=null,S=null,b=null,m=null,v=new _t(0,0,0),P=0,E=!1,U=null,N=null,D=null,R=null,H=null,B.set(0,0,i.canvas.width,i.canvas.height),C.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:nt,disable:ot,bindFramebuffer:xt,drawBuffers:ft,useProgram:wt,setBlending:It,setMaterial:Dt,setFlipSided:Yt,setCullFace:Wt,setLineWidth:Lt,setPolygonOffset:Qt,setScissorTest:ee,activeTexture:Ae,bindTexture:Se,unbindTexture:j,compressedTexImage2D:Q,compressedTexImage3D:St,texImage2D:T,texImage3D:F,pixelStorei:et,getParameter:K,updateUBOMapping:rt,uniformBlockBinding:dt,texStorage2D:at,texStorage3D:I,texSubImage2D:Jt,texSubImage3D:ut,compressedTexSubImage2D:ne,compressedTexSubImage3D:Ct,scissor:ct,viewport:gt,reset:vt}}function B_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ut,h=new WeakMap,d=new Set,u,f=new WeakMap,p=new Set,M=new FinalizationRegistry(I=>p.delete(I)),x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,T){return x?new OffscreenCanvas(I,T):rr("canvas")}function y(I,T,F){let K=1,et=at(I);if((et.width>F||et.height>F)&&(K=F/Math.max(et.width,et.height)),K<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ct=Math.floor(K*et.width),gt=Math.floor(K*et.height);u===void 0&&(u=g(ct,gt));let rt=T?g(ct,gt):u;return rt.width=ct,rt.height=gt,rt.getContext("2d").drawImage(I,0,0,ct,gt),Xt("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+ct+"x"+gt+")."),rt}else return"data"in I&&Xt("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),I;return I}function w(I){return I.generateMipmaps}function _(I){i.generateMipmap(I)}function S(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(I,T,F,K,et,ct=!1){if(I!==null){if(i[I]!==void 0)return i[I];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let gt;K&&(gt=t.get("EXT_texture_norm16"),gt||Xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let rt=T;if(T===i.RED&&(F===i.FLOAT&&(rt=i.R32F),F===i.HALF_FLOAT&&(rt=i.R16F),F===i.UNSIGNED_BYTE&&(rt=i.R8),F===i.UNSIGNED_SHORT&&gt&&(rt=gt.R16_EXT),F===i.SHORT&&gt&&(rt=gt.R16_SNORM_EXT)),T===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(rt=i.R8UI),F===i.UNSIGNED_SHORT&&(rt=i.R16UI),F===i.UNSIGNED_INT&&(rt=i.R32UI),F===i.BYTE&&(rt=i.R8I),F===i.SHORT&&(rt=i.R16I),F===i.INT&&(rt=i.R32I)),T===i.RG&&(F===i.FLOAT&&(rt=i.RG32F),F===i.HALF_FLOAT&&(rt=i.RG16F),F===i.UNSIGNED_BYTE&&(rt=i.RG8),F===i.UNSIGNED_SHORT&&gt&&(rt=gt.RG16_EXT),F===i.SHORT&&gt&&(rt=gt.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(rt=i.RG8UI),F===i.UNSIGNED_SHORT&&(rt=i.RG16UI),F===i.UNSIGNED_INT&&(rt=i.RG32UI),F===i.BYTE&&(rt=i.RG8I),F===i.SHORT&&(rt=i.RG16I),F===i.INT&&(rt=i.RG32I)),T===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),F===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),F===i.UNSIGNED_INT&&(rt=i.RGB32UI),F===i.BYTE&&(rt=i.RGB8I),F===i.SHORT&&(rt=i.RGB16I),F===i.INT&&(rt=i.RGB32I)),T===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),F===i.UNSIGNED_INT&&(rt=i.RGBA32UI),F===i.BYTE&&(rt=i.RGBA8I),F===i.SHORT&&(rt=i.RGBA16I),F===i.INT&&(rt=i.RGBA32I)),T===i.RGB&&(F===i.UNSIGNED_SHORT&&gt&&(rt=gt.RGB16_EXT),F===i.SHORT&&gt&&(rt=gt.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(rt=i.R11F_G11F_B10F)),T===i.RGBA){let dt=ct?sr:le.getTransfer(et);F===i.FLOAT&&(rt=i.RGBA32F),F===i.HALF_FLOAT&&(rt=i.RGBA16F),F===i.UNSIGNED_BYTE&&(rt=dt===ge?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&gt&&(rt=gt.RGBA16_EXT),F===i.SHORT&&gt&&(rt=gt.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function m(I,T){let F;return I?T===null||T===Nn||T===ji?F=i.DEPTH24_STENCIL8:T===wn?F=i.DEPTH32F_STENCIL8:T===Is&&(F=i.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Nn||T===ji?F=i.DEPTH_COMPONENT24:T===wn?F=i.DEPTH_COMPONENT32F:T===Is&&(F=i.DEPTH_COMPONENT16),F}function v(I,T){return w(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ne&&I.minFilter!==on?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function P(I){let T=new WeakRef(I);n.get(I).__ref=T,p.add(T),M.register(I,T,T)}function E(I){let T=n.get(I).__ref;T!==void 0&&(p.delete(T),M.unregister(T))}function U(I){D(I.target)}function N(I){R(I.target)}function D(I){I.removeEventListener("dispose",U),E(I),O(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&d.delete(I)}function R(I){I.removeEventListener("dispose",N),E(I),Z(I)}function H(){for(let I of p){let T=I.deref();T!==void 0&&(T.isRenderTarget===!0?R(T):D(T))}p.clear(),d.clear()}function O(I){let T=n.get(I);if(T.__webglInit===void 0)return;let F=I.source,K=f.get(F);if(K){let et=K[T.__cacheKey];et.usedTimes--,et.usedTimes===0&&q(I),Object.keys(K).length===0&&f.delete(F)}n.remove(I)}function q(I){let T=n.get(I);i.deleteTexture(T.__webglTexture);let F=I.source,K=f.get(F);delete K[T.__cacheKey],o.memory.textures--}function Z(I){let T=n.get(I);T.__depthDisposeCallback&&T.__depthDisposeCallback();let F=I.depthTexture;if(F&&F.renderTarget===I&&D(F),I.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(T.__webglFramebuffer[et]))for(let ct=0;ct<T.__webglFramebuffer[et].length;ct++)i.deleteFramebuffer(T.__webglFramebuffer[et][ct]);else i.deleteFramebuffer(T.__webglFramebuffer[et]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[et])}else{if(Array.isArray(T.__webglFramebuffer))for(let et=0;et<T.__webglFramebuffer.length;et++)i.deleteFramebuffer(T.__webglFramebuffer[et]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let et=0;et<T.__webglColorRenderbuffer.length;et++)T.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[et]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let K=I.textures;for(let et=0,ct=K.length;et<ct;et++){let gt=n.get(K[et]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(K[et])}n.remove(I)}let L=0;function X(){L=0}function V(){return L}function G(I){L=I}function W(){let I=L;return I>=s.maxTextures&&Xt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,I}function B(I){let T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.mipmapsAutoUpdate),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function C(I,T){let F=n.get(I);if(I.isVideoTexture&&ne(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&F.__version!==I.version){let K=I.image;if(K===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{Dt(F,I,T);return}}else I.isExternalTexture&&(F.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+T)}function k(I,T){let F=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&F.__version!==I.version){Dt(F,I,T);return}else I.isExternalTexture&&(F.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+T)}function tt(I,T){let F=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&F.__version!==I.version){Dt(F,I,T);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+T)}function nt(I,T){let F=n.get(I);if(I.version>0&&F.__version!==I.version){Yt(F,I,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+T)}let ot={[xs]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[Go]:i.MIRRORED_REPEAT},xt={[Ne]:i.NEAREST,[Du]:i.NEAREST_MIPMAP_NEAREST,[Fr]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[Sa]:i.LINEAR_MIPMAP_NEAREST,[ri]:i.LINEAR_MIPMAP_LINEAR},ft={[Ou]:i.NEVER,[Nc]:i.ALWAYS,[Vu]:i.LESS,[Pc]:i.LEQUAL,[zu]:i.EQUAL,[Uc]:i.GEQUAL,[Gu]:i.GREATER,[Hu]:i.NOTEQUAL};function wt(I,T){if(T.type===wn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===on||T.magFilter===Sa||T.magFilter===Fr||T.magFilter===ri||T.minFilter===on||T.minFilter===Sa||T.minFilter===Fr||T.minFilter===ri)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,ot[T.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,ot[T.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,ot[T.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,xt[T.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,xt[T.minFilter]),T.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,ft[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ne||T.minFilter!==Fr&&T.minFilter!==ri||T.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Mt(I,T){let F=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",U),P(T));let K=T.source,et=f.get(K);et===void 0&&(et={},f.set(K,et));let ct=B(T);if(ct!==I.__cacheKey){et[ct]===void 0&&(et[ct]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),et[ct].usedTimes++;let gt=et[I.__cacheKey];gt!==void 0&&(et[I.__cacheKey].usedTimes--,gt.usedTimes===0&&q(T)),I.__cacheKey=ct,I.__webglTexture=et[ct].texture}return F}function $(I,T,F){return Math.floor(Math.floor(I/F)/T)}function It(I,T,F,K){let ct=I.updateRanges;if(ct.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,F,K,T.data);else{ct.sort((Y,pt)=>Y.start-pt.start);let gt=0;for(let Y=1;Y<ct.length;Y++){let pt=ct[gt],ht=ct[Y],Et=pt.start+pt.count,bt=$(ht.start,T.width,4),Tt=$(pt.start,T.width,4);ht.start<=Et+1&&bt===Tt&&$(ht.start+ht.count-1,T.width,4)===bt?pt.count=Math.max(pt.count,ht.start+ht.count-pt.start):(++gt,ct[gt]=ht)}ct.length=gt+1;let rt=e.getParameter(i.UNPACK_ROW_LENGTH),dt=e.getParameter(i.UNPACK_SKIP_PIXELS),vt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let Y=0,pt=ct.length;Y<pt;Y++){let ht=ct[Y],Et=Math.floor(ht.start/4),bt=Math.ceil(ht.count/4),Tt=Et%T.width,Gt=Math.floor(Et/T.width),re=bt,yt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Tt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Gt),e.texSubImage2D(i.TEXTURE_2D,0,Tt,Gt,re,yt,F,K,T.data)}I.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,rt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(i.UNPACK_SKIP_ROWS,vt)}}function Dt(I,T,F){let K=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(K=i.TEXTURE_3D);let et=Mt(I,T),ct=T.source;e.bindTexture(K,I.__webglTexture,i.TEXTURE0+F);let gt=n.get(ct);if(ct.version!==gt.__version||et===!0){if(e.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let yt=le.getPrimaries(le.workingColorSpace),Zt=T.colorSpace===ai?null:le.getPrimaries(T.colorSpace),ie=T.colorSpace===ai||yt===Zt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie)}e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let dt=y(T.image,!1,s.maxTextureSize);dt=Ct(T,dt);let vt=r.convert(T.format,T.colorSpace),Y=r.convert(T.type),pt=b(T.internalFormat,vt,Y,T.normalized,T.colorSpace,T.isVideoTexture);wt(K,T);let ht,Et=T.mipmaps,bt=T.isVideoTexture!==!0,Tt=gt.__version===void 0||et===!0,Gt=ct.dataReady,re=v(T,dt);if(T.isDepthTexture)pt=m(T.format===oi,T.type),Tt&&(bt?e.texStorage2D(i.TEXTURE_2D,1,pt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,pt,dt.width,dt.height,0,vt,Y,null));else if(T.isDataTexture)if(Et.length>0){bt&&Tt&&e.texStorage2D(i.TEXTURE_2D,re,pt,Et[0].width,Et[0].height);for(let yt=0,Zt=Et.length;yt<Zt;yt++)ht=Et[yt],bt?Gt&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,ht.width,ht.height,vt,Y,ht.data):e.texImage2D(i.TEXTURE_2D,yt,pt,ht.width,ht.height,0,vt,Y,ht.data);T.generateMipmaps=!1}else bt?(Tt&&e.texStorage2D(i.TEXTURE_2D,re,pt,dt.width,dt.height),Gt&&It(T,dt,vt,Y)):e.texImage2D(i.TEXTURE_2D,0,pt,dt.width,dt.height,0,vt,Y,dt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){bt&&Tt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,re,pt,Et[0].width,Et[0].height,dt.depth);for(let yt=0,Zt=Et.length;yt<Zt;yt++)if(ht=Et[yt],T.format!==Fn)if(vt!==null)if(bt){if(Gt)if(T.layerUpdates.size>0){let ie=zc(ht.width,ht.height,T.format,T.type);for(let Pt of T.layerUpdates){let _e=ht.data.subarray(Pt*ie/ht.data.BYTES_PER_ELEMENT,(Pt+1)*ie/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,Pt,ht.width,ht.height,1,vt,_e)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,0,ht.width,ht.height,dt.depth,vt,ht.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,yt,pt,ht.width,ht.height,dt.depth,0,ht.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else bt?Gt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,0,ht.width,ht.height,dt.depth,vt,Y,ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,yt,pt,ht.width,ht.height,dt.depth,0,vt,Y,ht.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{bt&&Tt&&e.texStorage2D(i.TEXTURE_2D,re,pt,Et[0].width,Et[0].height);for(let yt=0,Zt=Et.length;yt<Zt;yt++)ht=Et[yt],T.format!==Fn?vt!==null?bt?Gt&&e.compressedTexSubImage2D(i.TEXTURE_2D,yt,0,0,ht.width,ht.height,vt,ht.data):e.compressedTexImage2D(i.TEXTURE_2D,yt,pt,ht.width,ht.height,0,ht.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):bt?Gt&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,ht.width,ht.height,vt,Y,ht.data):e.texImage2D(i.TEXTURE_2D,yt,pt,ht.width,ht.height,0,vt,Y,ht.data)}else if(T.isDataArrayTexture)if(bt){if(Tt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,re,pt,dt.width,dt.height,dt.depth),Gt)if(T.layerUpdates.size>0){let yt=zc(dt.width,dt.height,T.format,T.type);for(let Zt of T.layerUpdates){let ie=dt.data.subarray(Zt*yt/dt.data.BYTES_PER_ELEMENT,(Zt+1)*yt/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Zt,dt.width,dt.height,1,vt,Y,ie)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,vt,Y,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,pt,dt.width,dt.height,dt.depth,0,vt,Y,dt.data);else if(T.isData3DTexture)bt?(Tt&&e.texStorage3D(i.TEXTURE_3D,re,pt,dt.width,dt.height,dt.depth),Gt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,vt,Y,dt.data)):e.texImage3D(i.TEXTURE_3D,0,pt,dt.width,dt.height,dt.depth,0,vt,Y,dt.data);else if(T.isFramebufferTexture){if(Tt)if(bt)e.texStorage2D(i.TEXTURE_2D,re,pt,dt.width,dt.height);else{let yt=dt.width,Zt=dt.height;for(let ie=0;ie<re;ie++)e.texImage2D(i.TEXTURE_2D,ie,pt,yt,Zt,0,vt,Y,null),yt>>=1,Zt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let yt=i.canvas;if(yt.hasAttribute("layoutsubtree")||yt.setAttribute("layoutsubtree","true"),dt.parentNode!==yt){yt.appendChild(dt),d.add(T),yt.onpaint=Zt=>{let ie=Zt.changedElements;for(let Pt of d)ie.includes(Pt.image)&&(Pt.needsUpdate=!0)},yt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,dt);else{let ie=i.RGBA,Pt=i.RGBA,_e=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ie,Pt,_e,dt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Et.length>0){if(bt&&Tt){let yt=at(Et[0]);e.texStorage2D(i.TEXTURE_2D,re,pt,yt.width,yt.height)}for(let yt=0,Zt=Et.length;yt<Zt;yt++)ht=Et[yt],bt?Gt&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,vt,Y,ht):e.texImage2D(i.TEXTURE_2D,yt,pt,vt,Y,ht);T.generateMipmaps=!1}else if(bt){if(Tt){let yt=at(dt);e.texStorage2D(i.TEXTURE_2D,re,pt,yt.width,yt.height)}Gt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Y,dt)}else e.texImage2D(i.TEXTURE_2D,0,pt,vt,Y,dt);w(T)&&T.mipmapsAutoUpdate===!0&&_(K),gt.__version=ct.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function Yt(I,T,F){if(T.image.length!==6)return;let K=Mt(I,T),et=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+F);let ct=n.get(et);if(et.version!==ct.__version||K===!0){e.activeTexture(i.TEXTURE0+F);let gt=le.getPrimaries(le.workingColorSpace),rt=T.colorSpace===ai?null:le.getPrimaries(T.colorSpace),dt=T.colorSpace===ai||gt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let vt=T.isCompressedTexture||T.image[0].isCompressedTexture,Y=T.image[0]&&T.image[0].isDataTexture,pt=[];for(let Pt=0;Pt<6;Pt++)!vt&&!Y?pt[Pt]=y(T.image[Pt],!0,s.maxCubemapSize):pt[Pt]=Y?T.image[Pt].image:T.image[Pt],pt[Pt]=Ct(T,pt[Pt]);let ht=pt[0],Et=r.convert(T.format,T.colorSpace),bt=r.convert(T.type),Tt=b(T.internalFormat,Et,bt,T.normalized,T.colorSpace),Gt=T.isVideoTexture!==!0,re=ct.__version===void 0||K===!0,yt=et.dataReady,Zt=v(T,ht);wt(i.TEXTURE_CUBE_MAP,T);let ie;if(T.isDepthTexture){if(Tt=m(T.format===oi,T.type),re)if(Gt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,Tt,ht.width,ht.height);else for(let Pt=0;Pt<6;Pt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,Tt,ht.width,ht.height,0,Et,bt,null)}else if(vt){Gt&&re&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Zt,Tt,ht.width,ht.height);for(let Pt=0;Pt<6;Pt++){ie=pt[Pt].mipmaps;for(let _e=0;_e<ie.length;_e++){let ke=ie[_e];T.format!==Fn?Et!==null?Gt?yt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,_e,0,0,ke.width,ke.height,Et,ke.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,_e,Tt,ke.width,ke.height,0,ke.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,_e,0,0,ke.width,ke.height,Et,bt,ke.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,_e,Tt,ke.width,ke.height,0,Et,bt,ke.data)}}}else{if(ie=T.mipmaps,Gt&&re){ie.length>0&&Zt++;let Pt=at(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Zt,Tt,Pt.width,Pt.height)}for(let Pt=0;Pt<6;Pt++)if(Y){Gt?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,0,0,pt[Pt].width,pt[Pt].height,Et,bt,pt[Pt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,Tt,pt[Pt].width,pt[Pt].height,0,Et,bt,pt[Pt].data);for(let _e=0;_e<ie.length;_e++){let fi=ie[_e].image[Pt].image;Gt?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,_e+1,0,0,fi.width,fi.height,Et,bt,fi.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,_e+1,Tt,fi.width,fi.height,0,Et,bt,fi.data)}}else{Gt?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,0,0,Et,bt,pt[Pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,Tt,Et,bt,pt[Pt]);for(let _e=0;_e<ie.length;_e++){let ke=ie[_e];Gt?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,_e+1,0,0,Et,bt,ke.image[Pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,_e+1,Tt,Et,bt,ke.image[Pt])}}}w(T)&&T.mipmapsAutoUpdate===!0&&_(i.TEXTURE_CUBE_MAP),ct.__version=et.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function Wt(I,T,F,K,et,ct){let gt=r.convert(F.format,F.colorSpace),rt=r.convert(F.type),dt=b(F.internalFormat,gt,rt,F.normalized,F.colorSpace),vt=n.get(T),Y=n.get(F);if(Y.__renderTarget=T,!vt.__hasExternalTextures){let pt=Math.max(1,T.width>>ct),ht=Math.max(1,T.height>>ct);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,ct,dt,pt,ht,T.depth,0,gt,rt,null):e.texImage2D(et,ct,dt,pt,ht,0,gt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),ut(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,et,Y.__webglTexture,0,Jt(T)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,et,Y.__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(I,T,F){if(i.bindRenderbuffer(i.RENDERBUFFER,I),T.depthBuffer){let K=T.depthTexture,et=K&&K.isDepthTexture?K.type:null,ct=m(T.stencilBuffer,et),gt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ut(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt(T),ct,T.width,T.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt(T),ct,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ct,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,I)}else{let K=T.textures;for(let et=0;et<K.length;et++){let ct=K[et],gt=r.convert(ct.format,ct.colorSpace),rt=r.convert(ct.type),dt=b(ct.internalFormat,gt,rt,ct.normalized,ct.colorSpace);ut(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt(T),dt,T.width,T.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt(T),dt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,dt,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Qt(I,T,F){let K=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let et=n.get(T.depthTexture);et.__renderTarget=T;let ct=K?T.depthTexture.image[0]:T.depthTexture.image;(!et.__webglTexture||ct.width!==T.width||ct.height!==T.height)&&(ct.width=T.width,ct.height=T.height,T.depthTexture.needsUpdate=!0),K?nt(T.depthTexture,0):C(T.depthTexture,0);let gt=et.__webglTexture,rt=Jt(T),dt=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,vt=T.depthTexture.format===oi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===ti)ut(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,vt,dt,gt,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,vt,dt,gt,0);else if(T.depthTexture.format===oi)ut(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,vt,dt,gt,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,vt,dt,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ee(I){let T=n.get(I),F=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){let K=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),K){let et=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,K.removeEventListener("dispose",et)};K.addEventListener("dispose",et),T.__depthDisposeCallback=et}T.__boundDepthTexture=K}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if(F)for(let K=0;K<6;K++)Qt(T.__webglFramebuffer[K],I,K);else I.texture.mipmaps.length>0?Qt(T.__webglFramebuffer[0],I,0):Qt(T.__webglFramebuffer,I,0);else if(F){T.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[K]),T.__webglDepthbuffer[K]===void 0)T.__webglDepthbuffer[K]=i.createRenderbuffer(),Lt(T.__webglDepthbuffer[K],I,!1);else{let et=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=T.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,ct)}}else if(I.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Lt(T.__webglDepthbuffer,I,!1);else{let et=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,ct)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(I,T,F){let K=n.get(I);T!==void 0&&Wt(K.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&ee(I)}function Se(I){let T=I.texture,F=n.get(I),K=n.get(T);I.addEventListener("dispose",N),P(I);let et=I.textures,ct=I.isWebGLCubeRenderTarget===!0,gt=et.length>1;if(gt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=T.version,o.memory.textures++),ct){F.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(T.mipmaps.length>0){F.__webglFramebuffer[rt]=[];for(let dt=0;dt<T.mipmaps.length;dt++)F.__webglFramebuffer[rt][dt]=i.createFramebuffer()}else F.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(T.mipmaps.length>0){F.__webglFramebuffer=[];for(let rt=0;rt<T.mipmaps.length;rt++)F.__webglFramebuffer[rt]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(gt)for(let rt=0,dt=et.length;rt<dt;rt++){let vt=n.get(et[rt]);vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&ut(I)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let rt=0;rt<et.length;rt++){let dt=et[rt];F.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[rt]);let vt=r.convert(dt.format,dt.colorSpace),Y=r.convert(dt.type),pt=b(dt.internalFormat,vt,Y,dt.normalized,dt.colorSpace,I.isXRRenderTarget===!0),ht=Jt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,pt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,F.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Lt(F.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),wt(i.TEXTURE_CUBE_MAP,T);for(let rt=0;rt<6;rt++)if(T.mipmaps.length>0)for(let dt=0;dt<T.mipmaps.length;dt++)Wt(F.__webglFramebuffer[rt][dt],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,dt);else Wt(F.__webglFramebuffer[rt],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);w(T)?_(i.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(gt){for(let rt=0,dt=et.length;rt<dt;rt++){let vt=et[rt],Y=n.get(vt),pt=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,Y.__webglTexture),wt(pt,vt),Wt(F.__webglFramebuffer,I,vt,i.COLOR_ATTACHMENT0+rt,pt,0),w(vt)&&_(pt)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(rt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,K.__webglTexture),wt(rt,T),T.mipmaps.length>0)for(let dt=0;dt<T.mipmaps.length;dt++)Wt(F.__webglFramebuffer[dt],I,T,i.COLOR_ATTACHMENT0,rt,dt);else Wt(F.__webglFramebuffer,I,T,i.COLOR_ATTACHMENT0,rt,0);w(T)?_(rt):T.mipmaps.length>0&&i.texParameteri(rt,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}I.depthBuffer&&ee(I)}function j(I){let T=I.textures;for(let F=0,K=T.length;F<K;F++){let et=T[F];if(w(et)&&et.mipmapsAutoUpdate===!0){let ct=S(I),gt=n.get(et).__webglTexture;e.bindTexture(ct,gt),_(ct),e.unbindTexture()}}}let Q=[];function St(I){if(I.samples>0){if(ut(I)===!1){let T=I.textures,F=I.width,K=I.height,et=i.COLOR_BUFFER_BIT,ct=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(I),rt=T.length>1;if(rt)for(let vt=0;vt<T.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let vt=0;vt<T.length;vt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[vt]);let Y=n.get(T[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Y,0)}i.blitFramebuffer(0,0,F,K,0,0,F,K,et,i.NEAREST),l===!0&&(Q.length=0,Q.push(i.COLOR_ATTACHMENT0+vt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&Q.push(ct),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let vt=0;vt<T.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,gt.__webglColorRenderbuffer[vt]);let Y=n.get(T[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,Y,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let T=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Jt(I){return Math.min(s.maxSamples,I.samples)}function ut(I){let T=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ne(I){let T=o.render.frame;h.get(I)!==T&&(h.set(I,T),I.update())}function Ct(I,T){let F=I.colorSpace,K=I.format,et=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||F!==ir&&F!==ai&&(le.getTransfer(F)===ge?(K!==Fn||et!==dn)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",F)),T}function at(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=X,this.getTextureUnits=V,this.setTextureUnits=G,this.setTexture2D=C,this.setTexture2DArray=k,this.setTexture3D=tt,this.setTextureCube=nt,this.rebindTextures=Ae,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=Wt,this.useMultisampledRTT=ut,this.dispose=H}function k_(i,t){function e(n,s=ai){let r,o=le.getTransfer(s);if(n===dn)return i.UNSIGNED_BYTE;if(n===wa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ea)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ac)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ec)return i.BYTE;if(n===Tc)return i.SHORT;if(n===Is)return i.UNSIGNED_SHORT;if(n===ba)return i.INT;if(n===Nn)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===qe)return i.HALF_FLOAT;if(n===Cc)return i.ALPHA;if(n===Ic)return i.RGB;if(n===Fn)return i.RGBA;if(n===ti)return i.DEPTH_COMPONENT;if(n===oi)return i.DEPTH_STENCIL;if(n===Ta)return i.RED;if(n===Aa)return i.RED_INTEGER;if(n===Ri)return i.RG;if(n===Ra)return i.RG_INTEGER;if(n===Ca)return i.RGBA_INTEGER;if(n===Dr||n===Lr||n===Br||n===kr)if(o===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Lr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ia||n===Pa||n===Ua||n===Na)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fa||n===Da||n===La||n===Ba||n===ka||n===Or||n===Oa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fa||n===Da)return o===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===La)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ba)return r.COMPRESSED_R11_EAC;if(n===ka)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Or)return r.COMPRESSED_RG11_EAC;if(n===Oa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Va||n===za||n===Ga||n===Ha||n===Wa||n===Za||n===Ya||n===Xa||n===Ja||n===qa||n===ja||n===Qa||n===Ka||n===$a)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Va)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===za)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ga)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ha)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Za)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ya)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ja)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ja)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ka)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$a)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===tl||n===el||n===nl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===tl)return o===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===el)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===il||n===sl||n===Vr||n===rl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===il)return r.COMPRESSED_RED_RGTC1_EXT;if(n===sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ji?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var O_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,V_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,jc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new gr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new We({vertexShader:O_,fragmentShader:V_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new qt(new Wi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qc=class extends Bn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,M=typeof XRWebGLBinding<"u",x=new jc,g={},y=e.getContextAttributes(),w=null,_=null,S=[],b=[],m=new Ut,v=null,P=null,E=new tn;E.viewport=new we;let U=new tn;U.viewport=new we;let N=[E,U],D=new ya,R=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let C=S[B];return C===void 0&&(C=new vs,S[B]=C),C.getTargetRaySpace()},this.getControllerGrip=function(B){let C=S[B];return C===void 0&&(C=new vs,S[B]=C),C.getGripSpace()},this.getHand=function(B){let C=S[B];return C===void 0&&(C=new vs,S[B]=C),C.getHandSpace()};function O(B){let C=b.indexOf(B.inputSource);if(C===-1)return;let k=S[C];k!==void 0&&(k.update(B.inputSource,B.frame,c||o),k.dispatchEvent({type:B.type,data:B.inputSource}))}function q(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",Z);for(let B=0;B<S.length;B++){let C=b[B];C!==null&&(b[B]=null,S[B].disconnect(C))}R=null,H=null,x.reset();for(let B in g)delete g[B];if(t.setRenderTarget(w),f=null,u=null,d=null,s=null,_=null,W.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(m.width,m.height,!1),P!==null){let B=P.camera;B.fov=P.fov,B.zoom=P.zoom,B.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",q),s.addEventListener("inputsourceschange",Z),y.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(m),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let k=null,tt=null,nt=null;y.depth&&(nt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,k=y.stencil?oi:ti,tt=y.stencil?ji:Nn);let ot={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(ot),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new Fe(u.textureWidth,u.textureHeight,{format:Fn,type:dn,depthTexture:new ei(u.textureWidth,u.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let k={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,k),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Fe(f.framebufferWidth,f.framebufferHeight,{format:Fn,type:dn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),W.setContext(s),W.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(B){for(let C=0;C<B.removed.length;C++){let k=B.removed[C],tt=b.indexOf(k);tt>=0&&(b[tt]=null,S[tt].disconnect(k))}for(let C=0;C<B.added.length;C++){let k=B.added[C],tt=b.indexOf(k);if(tt===-1){for(let ot=0;ot<S.length;ot++)if(ot>=b.length){b.push(k),tt=ot;break}else if(b[ot]===null){b[ot]=k,tt=ot;break}if(tt===-1)break}let nt=S[tt];nt&&nt.connect(k)}}function L(B,C){C===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(C.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let C=B.near,k=B.far;x.texture!==null&&(x.depthNear>0&&(C=x.depthNear),x.depthFar>0&&(k=x.depthFar)),D.near=U.near=E.near=C,D.far=U.far=E.far=k,(R!==D.near||H!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),R=D.near,H=D.far),D.layers.mask=B.layers.mask|6,E.layers.mask=D.layers.mask&-5,U.layers.mask=D.layers.mask&-3;let tt=B.parent,nt=D.cameras;L(D,tt);for(let ot=0;ot<nt.length;ot++)L(nt[ot],tt);D.projectionMatrix.copy(E.projectionMatrix),D.projectionMatrixInverse.copy(E.projectionMatrixInverse),P===null&&B.isPerspectiveCamera&&(P={camera:B,fov:B.fov,zoom:B.zoom}),X(B,D,tt)};function X(B,C,k){k===null?B.matrix.copy(C.matrixWorld):(B.matrix.copy(k.matrixWorld),B.matrix.invert(),B.matrix.multiply(C.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(C.projectionMatrix),B.projectionMatrixInverse.copy(C.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Wo*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(B){l=B,u!==null&&(u.fixedFoveation=B),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=B)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(D)},this.getCameraTexture=function(B){return g[B]};let V=null;function G(B,C){if(h=C.getViewerPose(c||o),p=C,h!==null){let k=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let tt=!1;k.length!==D.cameras.length&&(D.cameras.length=0,tt=!0);for(let ft=0;ft<k.length;ft++){let wt=k[ft],Mt=null;if(f!==null)Mt=f.getViewport(wt);else{let It=d.getViewSubImage(u,wt);Mt=It.viewport,ft===0&&(t.setRenderTargetTextures(_,It.colorTexture,It.depthStencilTexture),t.setRenderTarget(_))}let $=N[ft];$===void 0&&($=new tn,$.layers.enable(ft),$.viewport=new we,N[ft]=$),$.matrix.fromArray(wt.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(wt.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),ft===0&&(D.matrix.copy($.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),tt===!0&&D.cameras.push($)}let nt=s.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=n.getBinding();let ft=d.getDepthInformation(k[0]);ft&&ft.isValid&&ft.texture&&x.init(ft,s.renderState)}if(nt&&nt.includes("camera-access")&&M){t.state.unbindTexture(),d=n.getBinding();for(let ft=0;ft<k.length;ft++){let wt=k[ft].camera;if(wt){let Mt=g[wt];Mt||(Mt=new gr,g[wt]=Mt);let $=d.getCameraImage(wt);Mt.sourceTexture=$}}}}for(let k=0;k<S.length;k++){let tt=b[k],nt=S[k];tt!==null&&nt!==void 0&&nt.update(tt,C,c||o)}V&&V(B,C),C.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:C}),p=null}let W=new Md;W.setAnimationLoop(G),this.setAnimationLoop=function(B){V=B},this.dispose=function(){}}},z_=new Ht,Id=new $t;Id.set(-1,0,0,0,1,0,0,0,1);function G_(i,t){function e(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function n(x,g){g.color.getRGB(x.fogColor.value,kc(i)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function s(x,g,y,w,_){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(x,g):g.isMeshLambertMaterial?(r(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(x,g),d(x,g)):g.isMeshPhongMaterial?(r(x,g),h(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(x,g),u(x,g),g.isMeshPhysicalMaterial&&f(x,g,_)):g.isMeshMatcapMaterial?(r(x,g),p(x,g)):g.isMeshDepthMaterial?r(x,g):g.isMeshDistanceMaterial?(r(x,g),M(x,g)):g.isMeshNormalMaterial?r(x,g):g.isLineBasicMaterial?(o(x,g),g.isLineDashedMaterial&&a(x,g)):g.isPointsMaterial?l(x,g,y,w):g.isSpriteMaterial?c(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,e(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===Ce&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,e(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===Ce&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,e(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,e(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);let y=t.get(g),w=y.envMap,_=y.envMapRotation;w&&(x.envMap.value=w,x.envMapRotation.value.setFromMatrix4(z_.makeRotationFromEuler(_)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Id),x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,x.aoMapTransform))}function o(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform))}function a(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function l(x,g,y,w){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*y,x.scale.value=w*.5,g.map&&(x.map.value=g.map,e(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function c(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function h(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function d(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function u(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function f(x,g,y){x.ior.value=g.ior,g.diffuseRoughness>0&&(x.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ce&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.retroreflectivity>0&&(x.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=y.texture,x.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,x.specularIntensityMapTransform))}function p(x,g){g.matcap&&(x.matcap.value=g.matcap)}function M(x,g){let y=t.get(g).light;x.referencePosition.value.setFromMatrixPosition(y.matrixWorld),x.nearDistance.value=y.shadow.camera.near,x.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function H_(i,t,e,n){let s={},r={};function o(y,w){let _=w.program;n.uniformBlockBinding(y,_,s[y.id])}function a(y,w){let _=s[y.id];_===void 0&&(p(y),_=l(y),s[y.id]=_,y.addEventListener("dispose",x));let S=w.program;n.updateUBOMapping(y,S);let b=t.render.frame;r[y.id]!==b&&(c(y),r[y.id]=b)}function l(y){let w=i.createBuffer(),_=y.__size,S=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,_,S),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function c(y){let w=s[y.id],_=y.uniforms,S=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let b=0,m=_.length;b<m;b++){let v=_[b];if(Array.isArray(v))for(let P=0,E=v.length;P<E;P++)h(v[P],b,P,S);else h(v,b,0,S)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,w,_,S){if(u(y,w,_,S)===!0){let b=y.__offset,m=y.value;if(Array.isArray(m)){let v=0;for(let P=0;P<m.length;P++){let E=m[P],U=M(E,!0);d(E,y.__data,v),v+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else d(m,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,y.__data)}}function d(y,w,_){typeof y=="number"||typeof y=="boolean"?w[_]=y:y.isMatrix3?(w[_]=y.elements[0],w[_+1]=y.elements[1],w[_+2]=y.elements[2],w[_+3]=0,w[_+4]=y.elements[3],w[_+5]=y.elements[4],w[_+6]=y.elements[5],w[_+7]=0,w[_+8]=y.elements[6],w[_+9]=y.elements[7],w[_+10]=y.elements[8],w[_+11]=0):ArrayBuffer.isView(y)?w.set(y.subarray(0,w.length-_),_):y.toArray(w,_)}function u(y,w,_,S){let b=y.value,m=w+"_"+_;if(Array.isArray(b)){S[m]===void 0&&(S[m]=[]);let v=S[m],P=!1;for(let E=0;E<b.length;E++)f(b[E],v,E)===!0&&(P=!0);return P}return f(b,S,m)}function f(y,w,_){if(w[_]===void 0)return typeof y=="number"||typeof y=="boolean"?w[_]=y:ArrayBuffer.isView(y)?w[_]=y.slice():w[_]=y.clone(),!0;{let S=w[_];if(typeof y=="number"||typeof y=="boolean"){if(S!==y)return w[_]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(S.equals(y)===!1)return S.copy(y),!0}}return!1}function p(y){let w=y.uniforms,_=0,S=16;for(let m=0,v=w.length;m<v;m++){let P=Array.isArray(w[m])?w[m]:[w[m]];for(let E=0,U=P.length;E<U;E++){let N=P[E],D=Array.isArray(N.value)?N.value:[N.value],R=Array.isArray(w[m])||Array.isArray(N.value),H=_;for(let q=0,Z=D.length;q<Z;q++){let L=D[q],X=M(L,R),V=_%S,G=V%X.boundary,W=V+G;_+=G,W!==0&&S-W<X.storage&&(_+=S-W),q===0&&(H=_),_+=X.storage}let O=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new O((_-H)/Float32Array.BYTES_PER_ELEMENT),N.__offset=H}}let b=_%S;return b>0&&(_+=S-b),y.__size=_,y.__cache={},this}function M(y,w){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=16,_.storage=48):y.isMatrix4?(_.boundary=16,_.storage=64):y.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(_.boundary=16,_.storage=y.byteLength):Xt("WebGLRenderer: Unsupported uniform value type.",y),w===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function x(y){let w=y.target;w.removeEventListener("dispose",x),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function g(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:g}}var W_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),zn=null;function Z_(){return zn===null&&(zn=new dr(W_,16,16,Ri,qe),zn.name="DFG_LUT",zn.minFilter=on,zn.magFilter=on,zn.wrapS=Ln,zn.wrapT=Ln,zn.generateMipmaps=!1,zn.needsUpdate=!0),zn}var cl=class{constructor(t={}){let{canvas:e=Zu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=dn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let M=f,x=new Set([Ca,Ra,Aa]),g=new Set([dn,Nn,Is,ji,wa,Ea]),y=new Uint32Array(4),w=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},S=null,b=null,m=[],v=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,U=!1,N=null,D=null,R=null,H=null;this._outputColorSpace=ze;let O=0,q=0,Z=null,L=-1,X=null,V=new we,G=new we,W=null,B=new _t(0),C=0,k=e.width,tt=e.height,nt=1,ot=null,xt=null,ft=new we(0,0,k,tt),wt=new we(0,0,k,tt),Mt=!1,$=new Si,It=new Jo,Dt=!1,Yt=!1,Wt=new Ht,Lt=new z,Qt=new we,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function Se(){return Z===null?nt:1}let j=n;function Q(A,J){return e.getContext(A,J)}let St,Jt,ut,ne,Ct,at,I,T,F,K,et,ct,gt,rt,dt,vt,Y,pt,ht,Et,bt,Tt,Gt;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Zt,!1),e.addEventListener("webglcontextrestored",ie,!1),e.addEventListener("webglcontextcreationerror",Pt,!1),j===null){let J="webgl2";if(j=Q(J,A),j===null)throw Q(J)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}re()}catch(A){throw e.removeEventListener("webglcontextlost",Zt,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",Pt,!1),Kt("WebGLRenderer: "+A.message),A}function re(){St=new nx(j),St.init(),bt=new k_(j,St),Jt=new Z0(j,St,t,bt),ut=new L_(j,St),Jt.reversedDepthBuffer&&u&&ut.buffers.depth.setReversed(!0),D=j.createFramebuffer(),R=j.createFramebuffer(),H=j.createFramebuffer(),ne=new rx(j),Ct=new S_,at=new B_(j,St,ut,Ct,Jt,bt,ne),I=new ex(E),T=new am(j),Tt=new H0(j,T),F=new ix(j,T,ne,Tt),K=new ax(j,F,T,Tt,ne),pt=new ox(j,Jt,at),dt=new Y0(Ct),et=new v_(E,I,St,Jt,Tt,dt),ct=new G_(E,Ct),gt=new w_,rt=new I_(St),Y=new G0(E,I,ut,K,p,l),vt=new D_(E,K,Jt),Gt=new H_(j,ne,Jt,ut),ht=new W0(j,St,ne),Et=new sx(j,St,ne),ne.programs=et.programs,E.capabilities=Jt,E.extensions=St,E.properties=Ct,E.renderLists=gt,E.shadowMap=vt,E.state=ut,E.info=ne}M!==dn&&(P=new cx(M,e.width,e.height,a,s,r));let yt=new Qc(E,j);this.xr=yt,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let A=St.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=St.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(A){A!==void 0&&(nt=A,this.setSize(k,tt,!1))},this.getSize=function(A){return A.set(k,tt)},this.setSize=function(A,J,lt=!0){if(yt.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}k=A,tt=J,e.width=Math.floor(A*nt),e.height=Math.floor(J*nt),lt===!0&&(e.style.width=A+"px",e.style.height=J+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,A,J)},this.getDrawingBufferSize=function(A){return A.set(k*nt,tt*nt).floor()},this.setDrawingBufferSize=function(A,J,lt){k=A,tt=J,nt=lt,e.width=Math.floor(A*lt),e.height=Math.floor(J*lt),this.setViewport(0,0,A,J)},this.setEffects=function(A){if(M===dn){Kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let J=0;J<A.length;J++)if(A[J].isOutputPass===!0){Xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(V)},this.getViewport=function(A){return A.copy(ft)},this.setViewport=function(A,J,lt,it){A.isVector4?ft.set(A.x,A.y,A.z,A.w):ft.set(A,J,lt,it),ut.viewport(V.copy(ft).multiplyScalar(Se()).round())},this.getScissor=function(A){return A.copy(wt)},this.setScissor=function(A,J,lt,it){A.isVector4?wt.set(A.x,A.y,A.z,A.w):wt.set(A,J,lt,it),ut.scissor(G.copy(wt).multiplyScalar(Se()).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(A){ut.setScissorTest(Mt=A)},this.setOpaqueSort=function(A){ot=A},this.setTransparentSort=function(A){xt=A},this.getClearColor=function(A){return A.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor(...arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha(...arguments)},this.clear=function(A=!0,J=!0,lt=!0){let it=0;if(A){let st=!1;if(Z!==null){let Rt=Z.texture.format;st=x.has(Rt)}if(st){let Rt=Z.texture.type,Bt=g.has(Rt),At=Y.getClearColor(),Ft=Y.getClearAlpha(),zt=At.r,te=At.g,he=At.b;Bt?(y[0]=zt,y[1]=te,y[2]=he,y[3]=Ft,j.clearBufferuiv(j.COLOR,0,y)):(w[0]=zt,w[1]=te,w[2]=he,w[3]=Ft,j.clearBufferiv(j.COLOR,0,w))}else it|=j.COLOR_BUFFER_BIT}J&&(it|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),lt&&(it|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it!==0&&j.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),N=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Zt,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",Pt,!1),Y.dispose(),gt.dispose(),rt.dispose(),at.dispose(),Ct.dispose(),I.dispose(),K.dispose(),F.dispose(),Tt.dispose(),Gt.dispose(),et.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",Sh),yt.removeEventListener("sessionend",bh),Fi.stop()};function Zt(A){A.preventDefault(),Dc("WebGLRenderer: Context Lost."),U=!0}function ie(){Dc("WebGLRenderer: Context Restored."),U=!1;let A=ne.autoReset,J=vt.enabled,lt=vt.autoUpdate,it=vt.needsUpdate,st=vt.type;re(),ne.autoReset=A,vt.enabled=J,vt.autoUpdate=lt,vt.needsUpdate=it,vt.type=st}function Pt(A){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function _e(A){let J=A.target;J.removeEventListener("dispose",_e),ke(J)}function ke(A){fi(A),Ct.remove(A)}function fi(A){let J=Ct.get(A).programs;J!==void 0&&(J.forEach(function(lt){et.releaseProgram(lt)}),A.isShaderMaterial&&et.releaseShaderCache(A))}this.renderBufferDirect=function(A,J,lt,it,st,Rt){J===null&&(J=ee);let Bt=st.isMesh&&st.matrixWorld.determinantAffine()<0,At=tp(A,J,lt,it,st);ut.setMaterial(it,Bt);let Ft=lt.index,zt=1;if(it.wireframe===!0){if(Ft=F.getWireframeAttribute(lt),Ft===void 0)return;zt=2}let te=lt.drawRange,he=lt.attributes.position,Ot=te.start*zt,ue=(te.start+te.count)*zt;Rt!==null&&(Ot=Math.max(Ot,Rt.start*zt),ue=Math.min(ue,(Rt.start+Rt.count)*zt)),Ft!==null?(Ot=Math.max(Ot,0),ue=Math.min(ue,Ft.count)):he!=null&&(Ot=Math.max(Ot,0),ue=Math.min(ue,he.count));let Pe=ue-Ot;if(Pe<0||Pe===1/0)return;Tt.setup(st,it,At,lt,Ft);let ve,ye=ht;if(Ft!==null&&(ve=T.get(Ft),ye=Et,ye.setIndex(ve)),st.isMesh)it.wireframe===!0?(ut.setLineWidth(it.wireframeLinewidth*Se()),ye.setMode(j.LINES)):ye.setMode(j.TRIANGLES);else if(st.isLine){let je=it.linewidth;je===void 0&&(je=1),ut.setLineWidth(je*Se()),st.isLineSegments?ye.setMode(j.LINES):st.isLineLoop?ye.setMode(j.LINE_LOOP):ye.setMode(j.LINE_STRIP)}else st.isPoints?ye.setMode(j.POINTS):st.isSprite&&ye.setMode(j.TRIANGLES);if(st.isBatchedMesh)if(St.get("WEBGL_multi_draw"))ye.renderMultiDraw(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount);else{let je=st._multiDrawStarts,Vt=st._multiDrawCounts,sn=st._multiDrawCount,xe=Ft?T.get(Ft).bytesPerElement:1,Di=Ct.get(it).currentProgram.getUniforms();for(let Qe=0;Qe<sn;Qe++)Di.setValue(j,"_gl_DrawID",Qe),ye.render(je[Qe]/xe,Vt[Qe])}else if(st.isInstancedMesh)ye.renderInstances(Ot,Pe,st.count);else if(lt.isInstancedBufferGeometry){let je=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Vt=Math.min(lt.instanceCount,je);ye.renderInstances(Ot,Pe,Vt)}else ye.render(Ot,Pe)};function vh(A,J,lt,it){N!==null&&A.isNodeMaterial&&N.setObject(it,A),Dt===!0&&dt.setState(A,lt,!1),A.transparent===!0&&A.side===me&&A.forceSinglePass===!1?(A.side=Ce,A.needsUpdate=!0,Ws(A,J,it),A.side=Ai,A.needsUpdate=!0,Ws(A,J,it),A.side=me):Ws(A,J,it)}this.compile=function(A,J,lt=null){lt===null&&(lt=A),N!==null&&N.renderStart(A,J,lt),b=rt.get(lt),b.init(J),v.push(b),lt.traverseVisible(function(st){st.isLight&&st.layers.test(J.layers)&&(b.pushLight(st),st.castShadow&&b.pushShadow(st))}),A!==lt&&A.traverseVisible(function(st){st.isLight&&st.layers.test(J.layers)&&(b.pushLight(st),st.castShadow&&b.pushShadow(st))}),b.setupLights(),N!==null&&N.updateLights(b.state.lightsArray),Yt=this.localClippingEnabled,Dt=dt.init(this.clippingPlanes,Yt),Dt===!0&&dt.setGlobalState(this.clippingPlanes,J),N!==null&&vt.render(b.state.shadowsArray,lt,J);let it=new Set;return A.traverse(function(st){if(!(st.isMesh||st.isPoints||st.isLine||st.isSprite))return;let Rt=st.material;if(Rt)if(Array.isArray(Rt))for(let Bt=0;Bt<Rt.length;Bt++){let At=Rt[Bt];vh(At,lt,J,st),it.add(At)}else vh(Rt,lt,J,st),it.add(Rt)}),b=v.pop(),N!==null&&N.renderEnd(),it},this.compileAsync=function(A,J,lt=null){let it=this.compile(A,J,lt);return new Promise(st=>{function Rt(){if(it.forEach(function(Bt){let Ft=Ct.get(Bt).currentProgram;(Ft===void 0||Ft.isReady())&&it.delete(Bt)}),it.size===0){st(A);return}setTimeout(Rt,10)}St.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let Nl=null;function Kf(A){Nl&&Nl(A)}function Sh(){Fi.stop()}function bh(){Fi.start()}let Fi=new Md;Fi.setAnimationLoop(Kf),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(A){Nl=A,yt.setAnimationLoop(A),A===null?Fi.stop():Fi.start()},yt.addEventListener("sessionstart",Sh),yt.addEventListener("sessionend",bh),this.render=function(A,J){if(J!==void 0&&J.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;N!==null&&N.renderStart(A,J);let lt=yt.enabled===!0&&yt.isPresenting===!0,it=P!==null&&(Z===null||lt)&&P.begin(E,Z);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(J),J=yt.getCamera()),A.isScene===!0&&A.onBeforeRender(E,A,J,Z),b=rt.get(A,v.length),b.init(J),b.state.textureUnits=at.getTextureUnits(),v.push(b),Wt.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),J.isArrayCamera?It.setFromArrayCamera(J):$.setFromProjectionMatrix(Wt,Mn,J.reversedDepth),Yt=this.localClippingEnabled,Dt=dt.init(this.clippingPlanes,Yt),S=gt.get(A,m.length),S.init(),m.push(S),this.info.render.frame++,yt.enabled===!0&&yt.isPresenting===!0){let Bt=E.xr.getDepthSensingMesh();Bt!==null&&Fl(Bt,J,-1/0,E.sortObjects)}Fl(A,J,0,E.sortObjects),S.finish(),N!==null&&N.updateLights(b.state.lightsArray),E.sortObjects===!0&&S.sort(ot,xt),Ae=yt.enabled===!1||yt.isPresenting===!1||yt.hasDepthSensing()===!1,Ae&&Y.addToRenderList(S,A),this.info.autoReset===!0&&this.info.reset(),Dt===!0&&dt.beginShadows();let st=b.state.shadowsArray;if(vt.render(st,A,J),Dt===!0&&dt.endShadows(),(it&&P.hasRenderPass())===!1){let Bt=S.opaque,At=S.transmissive;if(b.setupLights(),J.isArrayCamera){let Ft=J.cameras;if(At.length>0)for(let zt=0,te=Ft.length;zt<te;zt++){let he=Ft[zt];Eh(Bt,At,A,he)}Ae&&Y.render(A);for(let zt=0,te=Ft.length;zt<te;zt++){let he=Ft[zt];wh(S,A,he,he.viewport)}}else At.length>0&&Eh(Bt,At,A,J),Ae&&Y.render(A),wh(S,A,J)}Z!==null&&q===0&&(at.updateMultisampleRenderTarget(Z),at.updateRenderTargetMipmap(Z)),it&&P.end(E),A.isScene===!0&&A.onAfterRender(E,A,J),Tt.resetDefaultState(),L=-1,X=null,v.pop(),v.length>0?(b=v[v.length-1],at.setTextureUnits(b.state.textureUnits),Dt===!0&&dt.setGlobalState(E.clippingPlanes,b.state.camera)):b=null,m.pop(),m.length>0?S=m[m.length-1]:S=null,N!==null&&N.renderEnd()};function Fl(A,J,lt,it){if(A.visible===!1)return;if(A.layers.test(J.layers)){if(A.isGroup)lt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(J);else if(A.isLight)b.pushLight(A),A.castShadow&&b.pushShadow(A);else if(A.isSprite){let Bt=J.isArrayCamera?It:$;if(!A.frustumCulled||A.intersectsFrustum(Bt)){it&&Qt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Wt);let At=K.update(A),Ft=A.material;Ft.visible&&S.push(A,At,Ft,lt,Qt.z,null,J)}}else if(A.isMesh||A.isLine||A.isPoints){let Bt=J.isArrayCamera?It:$;if(!A.frustumCulled||A.intersectsFrustum(Bt)){let At=K.update(A),Ft=A.material;if(it&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Qt.copy(A.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Qt.copy(At.boundingSphere.center)),Qt.applyMatrix4(A.matrixWorld).applyMatrix4(Wt)),Array.isArray(Ft)){let zt=At.groups;for(let te=0,he=zt.length;te<he;te++){let Ot=zt[te],ue=Ft[Ot.materialIndex];ue&&ue.visible&&S.push(A,At,ue,lt,Qt.z,Ot,J)}}else Ft.visible&&S.push(A,At,Ft,lt,Qt.z,null,J)}}}let Rt=A.children;for(let Bt=0,At=Rt.length;Bt<At;Bt++)Fl(Rt[Bt],J,lt,it)}function wh(A,J,lt,it){let{opaque:st,transmissive:Rt,transparent:Bt}=A;b.setupLightsView(lt),Dt===!0&&dt.setGlobalState(E.clippingPlanes,lt),it&&ut.viewport(V.copy(it)),st.length>0&&so(st,J,lt),Rt.length>0&&so(Rt,J,lt),Bt.length>0&&so(Bt,J,lt),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function Eh(A,J,lt,it){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[it.id]===void 0){let Ot=St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[it.id]=new Fe(1,1,{generateMipmaps:!0,type:Ot?qe:dn,minFilter:ri,samples:Math.max(4,Jt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:le.workingColorSpace})}let Rt=b.state.transmissionRenderTarget[it.id],Bt=it.viewport||V;Rt.setSize(Bt.z*E.transmissionResolutionScale,Bt.w*E.transmissionResolutionScale);let At=E.getRenderTarget(),Ft=E.getActiveCubeFace(),zt=E.getActiveMipmapLevel();E.setRenderTarget(Rt),E.getClearColor(B),C=E.getClearAlpha(),C<1&&E.setClearColor(16777215,.5),E.clear(),Ae&&Y.render(lt);let te=E.toneMapping;E.toneMapping=Vn;let he=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),b.setupLightsView(it),Dt===!0&&dt.setGlobalState(E.clippingPlanes,it),so(A,lt,it),at.updateMultisampleRenderTarget(Rt),at.updateRenderTargetMipmap(Rt),St.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let ue=0,Pe=J.length;ue<Pe;ue++){let ve=J[ue],{object:ye,geometry:je,material:Vt,group:sn}=ve;if(Vt.side===me&&ye.layers.test(it.layers)){let xe=Vt.side;Vt.side=Ce,Vt.needsUpdate=!0,Th(ye,lt,it,je,Vt,sn),Vt.side=xe,Vt.needsUpdate=!0,Ot=!0}}Ot===!0&&(at.updateMultisampleRenderTarget(Rt),at.updateRenderTargetMipmap(Rt))}E.setRenderTarget(At,Ft,zt),E.setClearColor(B,C),he!==void 0&&(it.viewport=he),E.toneMapping=te}function so(A,J,lt){let it=J.isScene===!0?J.overrideMaterial:null;for(let st=0,Rt=A.length;st<Rt;st++){let Bt=A[st],{object:At,geometry:Ft,group:zt}=Bt,te=Bt.material;te.allowOverride===!0&&it!==null&&(te=it),At.layers.test(lt.layers)&&Th(At,J,lt,Ft,te,zt)}}function Th(A,J,lt,it,st,Rt){N!==null&&st.isNodeMaterial&&N.setObject(A,st),A.onBeforeRender(E,J,lt,it,st,Rt),A.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),st.onBeforeRender(E,J,lt,it,A,Rt),st.transparent===!0&&st.side===me&&st.forceSinglePass===!1?(st.side=Ce,st.needsUpdate=!0,E.renderBufferDirect(lt,J,it,st,A,Rt),st.side=Ai,st.needsUpdate=!0,E.renderBufferDirect(lt,J,it,st,A,Rt),st.side=me):E.renderBufferDirect(lt,J,it,st,A,Rt),A.onAfterRender(E,J,lt,it,st,Rt)}function Ah(A){let J=0;for(let lt of A)lt.texture!==null&&J++;return J}function Ws(A,J,lt){J.isScene!==!0&&(J=ee);let it=Ct.get(A),st=b.state.lights,Rt=b.state.shadowsArray,Bt=st.state.version,At=et.getParameters(A,st.state,Rt,J,lt,b.state.lightProbeGridArray),Ft=et.getProgramCacheKey(At),zt=it.programs;it.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?J.environment:null,it.fog=J.fog;let te=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;it.envMap=I.get(A.envMap||it.environment,te),it.envMapRotation=it.environment!==null&&A.envMap===null?J.environmentRotation:A.envMapRotation,zt===void 0&&(A.addEventListener("dispose",_e),zt=new Map,it.programs=zt,it.programVariants=new Map);let he=zt.get(Ft);if(he!==void 0){if(it.currentProgram===he&&it.lightsStateVersion===Bt)return Ch(A,At),he}else At.uniforms=et.getUniforms(A),N!==null&&A.isNodeMaterial&&N.build(A,lt,At),A.onBeforeCompile(At,E),he=et.acquireProgram(At,Ft),zt.set(Ft,he),it.uniforms=At.uniforms;let Ot=it.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ot.clippingPlanes=dt.uniform),Ch(A,At),it.needsLights=np(A),it.lightsStateVersion=Bt,it.needsLights&&(Ot.ambientLightColor.value=st.state.ambient,Ot.lightProbe.value=st.state.probe,Ot.sunLights.value=st.state.sun,Ot.sunLightShadows.value=st.state.sunShadow,Ot.directionalLights.value=st.state.directional,Ot.directionalLightShadows.value=st.state.directionalShadow,Ot.spotLights.value=st.state.spot,Ot.spotLightShadows.value=st.state.spotShadow,Ot.rectAreaLights.value=st.state.rectArea,Ot.ltc_1.value=st.state.rectAreaLTC1,Ot.ltc_2.value=st.state.rectAreaLTC2,Ot.pointLights.value=st.state.point,Ot.pointLightShadows.value=st.state.pointShadow,Ot.hemisphereLights.value=st.state.hemi,Ot.sunShadowMatrix.value=st.state.sunShadowMatrix,Ot.sunShadowCascade.value=st.state.sunShadowCascade,Ot.directionalShadowMatrix.value=st.state.directionalShadowMatrix,Ot.spotLightMatrix.value=st.state.spotLightMatrix,Ot.spotLightMap.value=st.state.spotLightMap,Ot.pointShadowMatrix.value=st.state.pointShadowMatrix),it.numLightProbeGrids=Ah(b.state.lightProbeGridArray),it.currentProgram=he,it.uniformsList=null,he}function $f(A,J,lt,it,st){let Rt=Ct.get(A),Bt=Rt.currentProgram.id+","+it+","+st,At=Rt.programVariants.get(Bt);return At===void 0?(At=Ws(A,J,lt),Rt.programVariants.set(Bt,At)):(Rt.currentProgram=At,Rt.uniformsList=null,Rt.outputColorSpace=it,Rt.toneMapping=st),At}function Rh(A){if(A.uniformsList===null){let J=A.currentProgram.getUniforms();A.uniformsList=Us.seqWithValue(J.seq,A.uniforms)}return A.uniformsList}function Ch(A,J){let lt=Ct.get(A);lt.outputColorSpace=J.outputColorSpace,lt.batching=J.batching,lt.batchingColor=J.batchingColor,lt.instancing=J.instancing,lt.instancingColor=J.instancingColor,lt.instancingMorph=J.instancingMorph,lt.skinning=J.skinning,lt.morphTargets=J.morphTargets,lt.morphNormals=J.morphNormals,lt.morphColors=J.morphColors,lt.morphTargetsCount=J.morphTargetsCount,lt.numClippingPlanes=J.numClippingPlanes,lt.numIntersection=J.numClipIntersection,lt.vertexAlphas=J.vertexAlphas,lt.vertexTangents=J.vertexTangents,lt.toneMapping=J.toneMapping}function tp(A,J,lt,it,st){J.isScene!==!0&&(J=ee),at.resetTextureUnits();let Rt=J.fog,Bt=it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial?J.environment:null,At=Z===null?E.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:le.workingColorSpace,Ft=it.isMeshStandardMaterial||it.isMeshLambertMaterial&&!it.envMap||it.isMeshPhongMaterial&&!it.envMap,zt=I.get(it.envMap||Bt,Ft),te=it.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,he=!!lt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Ot=!!lt.morphAttributes.position,ue=!!lt.morphAttributes.normal,Pe=!!lt.morphAttributes.color,ve=Vn;it.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(ve=E.toneMapping);let ye=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,je=ye!==void 0?ye.length:0,Vt=Ct.get(it),sn=b.state.lights;if(Dt===!0&&(Yt===!0||A!==X)){let Ee=A===X&&it.id===L;dt.setState(it,A,Ee)}let xe=!1,Di=!1;it.version===Vt.__version?Vt.needsLights&&Vt.lightsStateVersion!==sn.state.version||st.isBatchedMesh&&Vt.batching===!1||!st.isBatchedMesh&&Vt.batching===!0||st.isBatchedMesh&&Vt.batchingColor===!0&&st._colorsTexture===null||st.isBatchedMesh&&Vt.batchingColor===!1&&st._colorsTexture!==null||st.isInstancedMesh&&Vt.instancing===!1||!st.isInstancedMesh&&Vt.instancing===!0||st.isSkinnedMesh&&Vt.skinning===!1||!st.isSkinnedMesh&&Vt.skinning===!0||st.isInstancedMesh&&Vt.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&Vt.instancingColor===!1&&st.instanceColor!==null||st.isInstancedMesh&&Vt.instancingMorph===!0&&st.morphTexture===null||st.isInstancedMesh&&Vt.instancingMorph===!1&&st.morphTexture!==null||Vt.envMap!==zt||it.fog===!0&&Vt.fog!==Rt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==dt.numPlanes||Vt.numIntersection!==dt.numIntersection)||Vt.vertexAlphas!==te||Vt.vertexTangents!==he||Vt.morphTargets!==Ot||Vt.morphNormals!==ue||Vt.morphColors!==Pe||Vt.morphTargetsCount!==je||Vt.numLightProbeGrids!==Ah(b.state.lightProbeGridArray)?xe=!0:(Vt.outputColorSpace!==At||Vt.toneMapping!==ve)&&(Di=!0):(xe=!0,Vt.__version=it.version);let Qe=Vt.currentProgram;(xe===!0||Di===!0)&&(Qe=Di===!0?$f(it,J,st,At,ve):Ws(it,J,st),N&&it.isNodeMaterial&&N.onUpdateProgram(it,Qe,Vt));let ro=!1,pi=!1,Li=!1,pe=Qe.getUniforms(),Xe=Vt.uniforms;if(ut.useProgram(Qe.program)&&(ro=!0,pi=!0,Li=!0),it.id!==L&&(L=it.id,pi=!0),ro||X!==A){ut.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),pe.setValue(j,"projectionMatrix",A.projectionMatrix),pe.setValue(j,"viewMatrix",A.matrixWorldInverse);let Oe=pe.map.cameraPosition;Oe!==void 0&&Oe.setValue(j,Lt.setFromMatrixPosition(A.matrixWorld)),Jt.logarithmicDepthBuffer&&pe.setValue(j,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&pe.setValue(j,"isOrthographic",A.isOrthographicCamera===!0),X!==A&&(X=A,pi=!0,Li=!0)}if(Vt.needsLights&&(sn.state.sunShadowMap.length>0&&pe.setValue(j,"sunShadowMap",sn.state.sunShadowMap,at),sn.state.directionalShadowMap.length>0&&pe.setValue(j,"directionalShadowMap",sn.state.directionalShadowMap,at),sn.state.spotShadowMap.length>0&&pe.setValue(j,"spotShadowMap",sn.state.spotShadowMap,at),sn.state.pointShadowMap.length>0&&pe.setValue(j,"pointShadowMap",sn.state.pointShadowMap,at)),st.isSkinnedMesh){pe.setOptional(j,st,"bindMatrix"),pe.setOptional(j,st,"bindMatrixInverse");let Ee=st.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),pe.setValue(j,"boneTexture",Ee.boneTexture,at))}st.isBatchedMesh&&(pe.setOptional(j,st,"batchingTexture"),pe.setValue(j,"batchingTexture",st._matricesTexture,at),pe.setOptional(j,st,"batchingIdTexture"),pe.setValue(j,"batchingIdTexture",st._indirectTexture,at),pe.setOptional(j,st,"batchingColorTexture"),st._colorsTexture!==null&&pe.setValue(j,"batchingColorTexture",st._colorsTexture,at));let Tn=lt.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&pt.update(st,lt,Qe),(pi||Vt.receiveShadow!==st.receiveShadow)&&(Vt.receiveShadow=st.receiveShadow,pe.setValue(j,"receiveShadow",st.receiveShadow)),(it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial)&&it.envMap===null&&J.environment!==null&&(Xe.envMapIntensity.value=J.environmentIntensity),Xe.dfgLUT!==void 0&&(Xe.dfgLUT.value=Z_()),pi){if(pe.setValue(j,"toneMappingExposure",E.toneMappingExposure),Vt.needsLights&&ep(Xe,Li),Rt&&it.fog===!0&&ct.refreshFogUniforms(Xe,Rt),ct.refreshMaterialUniforms(Xe,it,nt,tt,b.state.transmissionRenderTarget[A.id]),Vt.needsLights&&Vt.numLightProbeGrids>0){let Ee=_,Oe=0;for(let Xn of b.state.lightProbeGridArray)Xn.texture!==null&&(Ee.textures[Oe]=Xn.texture,Ee.min[Oe]=Xn.boundingBox.min,Ee.max[Oe]=Xn.boundingBox.max,Ee.resolution[Oe]=Xn.resolution,Oe++);for(let Xn in Ee)Ee[Xn].length=Oe;Xe.probesSH.value=Ee.textures,Xe.probesMin.value=Ee.min,Xe.probesMax.value=Ee.max,Xe.probesResolution.value=Ee.resolution}Us.upload(j,Rh(Vt),Xe,at)}if(it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Us.upload(j,Rh(Vt),Xe,at),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&pe.setValue(j,"center",st.center),pe.setValue(j,"modelViewMatrix",st.modelViewMatrix),pe.setValue(j,"normalMatrix",st.normalMatrix),pe.setValue(j,"modelMatrix",st.matrixWorld),it.uniformsGroups!==void 0){let Ee=it.uniformsGroups;for(let Oe=0,Xn=Ee.length;Oe<Xn;Oe++){let Ph=Ee[Oe];Gt.update(Ph,Qe),Gt.bind(Ph,Qe)}}return Qe}function ep(A,J){A.ambientLightColor.needsUpdate=J,A.lightProbe.needsUpdate=J,A.sunLights.needsUpdate=J,A.sunLightShadows.needsUpdate=J,A.directionalLights.needsUpdate=J,A.directionalLightShadows.needsUpdate=J,A.pointLights.needsUpdate=J,A.pointLightShadows.needsUpdate=J,A.spotLights.needsUpdate=J,A.spotLightShadows.needsUpdate=J,A.rectAreaLights.needsUpdate=J,A.hemisphereLights.needsUpdate=J}function np(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(A,J,lt){let it=Ct.get(A);it.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),Ct.get(A.texture).__webglTexture=J,Ct.get(A.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:lt,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,J){let lt=Ct.get(A);lt.__webglFramebuffer=J,lt.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(A,J=0,lt=0){Z=A,O=J,q=lt;let it=null,st=!1,Rt=!1;if(A){let At=Ct.get(A);if(At.__useDefaultFramebuffer!==void 0){ut.bindFramebuffer(j.FRAMEBUFFER,At.__webglFramebuffer),V.copy(A.viewport),G.copy(A.scissor),W=A.scissorTest,ut.viewport(V),ut.scissor(G),ut.setScissorTest(W),L=-1;return}else if(At.__webglFramebuffer===void 0)at.setupRenderTarget(A);else if(At.__hasExternalTextures)at.rebindTextures(A,Ct.get(A.texture).__webglTexture,Ct.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let te=A.depthTexture;if(At.__boundDepthTexture!==te){if(te!==null&&Ct.has(te)&&(A.width!==te.image.width||A.height!==te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(A)}}let Ft=A.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(Rt=!0);let zt=Ct.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(zt[J])?it=zt[J][lt]:it=zt[J],st=!0):A.samples>0&&at.useMultisampledRTT(A)===!1?it=Ct.get(A).__webglMultisampledFramebuffer:Array.isArray(zt)?it=zt[lt]:it=zt,V.copy(A.viewport),G.copy(A.scissor),W=A.scissorTest}else V.copy(ft).multiplyScalar(nt).floor(),G.copy(wt).multiplyScalar(nt).floor(),W=Mt;if(lt!==0&&(it=D),ut.bindFramebuffer(j.FRAMEBUFFER,it)&&ut.drawBuffers(A,it),ut.viewport(V),ut.scissor(G),ut.setScissorTest(W),st){let At=Ct.get(A.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+J,At.__webglTexture,lt)}else if(Rt){let At=J;for(let Ft=0;Ft<A.textures.length;Ft++){let zt=Ct.get(A.textures[Ft]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+Ft,zt.__webglTexture,lt,At)}}else if(A!==null&&lt!==0){let At=Ct.get(A.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,At.__webglTexture,lt)}L=-1};function Ih(A){let J=Ct.get(A);return(J.__readFormat!==A.format||J.__readType!==A.type)&&(J.__readFormat=A.format,J.__readType=A.type,J.__formatReadable=Jt.textureFormatReadable(A.format),J.__typeReadable=Jt.textureTypeReadable(A.type)),J}this.readRenderTargetPixels=function(A,J,lt,it,st,Rt,Bt,At=0){if(!(A&&A.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Ct.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Bt!==void 0&&(Ft=Ft[Bt],Array.isArray(Ft)&&(Ft=Ft[0])),Ft){ut.bindFramebuffer(j.FRAMEBUFFER,Ft);try{let zt=A.textures[At],te=zt.format,he=zt.type;A.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+At);let Ot=Ih(zt);if(Ot.__formatReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ot.__typeReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=A.width-it&&lt>=0&&lt<=A.height-st&&j.readPixels(J,lt,it,st,bt.convert(te),bt.convert(he),Rt)}finally{let zt=Z!==null?Ct.get(Z).__webglFramebuffer:null;ut.bindFramebuffer(j.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(A,J,lt,it,st,Rt,Bt,At=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=Ct.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Bt!==void 0&&(Ft=Ft[Bt],Array.isArray(Ft)&&(Ft=Ft[0])),Ft)if(J>=0&&J<=A.width-it&&lt>=0&&lt<=A.height-st){ut.bindFramebuffer(j.FRAMEBUFFER,Ft);let zt=A.textures[At],te=zt.format,he=zt.type;A.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+At);let Ot=Ih(zt);if(Ot.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ot.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ue=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,ue),j.bufferData(j.PIXEL_PACK_BUFFER,Rt.byteLength,j.STREAM_READ),j.readPixels(J,lt,it,st,bt.convert(te),bt.convert(he),0),j.bindBuffer(j.PIXEL_PACK_BUFFER,null);let Pe=Z!==null?Ct.get(Z).__webglFramebuffer:null;ut.bindFramebuffer(j.FRAMEBUFFER,Pe);let ve=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await Xu(j,ve,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,ue),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Rt),j.bindBuffer(j.PIXEL_PACK_BUFFER,null),j.deleteBuffer(ue),j.deleteSync(ve),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,J=null,lt=0){let it=Math.pow(2,-lt),st=Math.floor(A.image.width*it),Rt=Math.floor(A.image.height*it),Bt=J!==null?J.x:0,At=J!==null?J.y:0;at.setTexture2D(A,0),j.copyTexSubImage2D(j.TEXTURE_2D,lt,0,0,Bt,At,st,Rt),ut.unbindTexture()},this.copyTextureToTexture=function(A,J,lt=null,it=null,st=0,Rt=0){let Bt,At,Ft,zt,te,he,Ot,ue,Pe,ve=A.isCompressedTexture?A.mipmaps[Rt]:A.image;if(lt!==null)Bt=lt.max.x-lt.min.x,At=lt.max.y-lt.min.y,Ft=lt.isBox3?lt.max.z-lt.min.z:1,zt=lt.min.x,te=lt.min.y,he=lt.isBox3?lt.min.z:0;else{let pe=Math.pow(2,-st);Bt=Math.floor(ve.width*pe),At=Math.floor(ve.height*pe),A.isDataArrayTexture?Ft=ve.depth:A.isData3DTexture?Ft=Math.floor(ve.depth*pe):Ft=1,zt=0,te=0,he=0}it!==null?(Ot=it.x,ue=it.y,Pe=it.z):(Ot=0,ue=0,Pe=0);let ye=bt.convert(J.format),je=bt.convert(J.type),Vt;J.isData3DTexture?(at.setTexture3D(J,0),Vt=j.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(at.setTexture2DArray(J,0),Vt=j.TEXTURE_2D_ARRAY):(at.setTexture2D(J,0),Vt=j.TEXTURE_2D),ut.activeTexture(j.TEXTURE0),ut.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,J.flipY),ut.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),ut.pixelStorei(j.UNPACK_ALIGNMENT,J.unpackAlignment);let sn=ut.getParameter(j.UNPACK_ROW_LENGTH),xe=ut.getParameter(j.UNPACK_IMAGE_HEIGHT),Di=ut.getParameter(j.UNPACK_SKIP_PIXELS),Qe=ut.getParameter(j.UNPACK_SKIP_ROWS),ro=ut.getParameter(j.UNPACK_SKIP_IMAGES);ut.pixelStorei(j.UNPACK_ROW_LENGTH,ve.width),ut.pixelStorei(j.UNPACK_IMAGE_HEIGHT,ve.height),ut.pixelStorei(j.UNPACK_SKIP_PIXELS,zt),ut.pixelStorei(j.UNPACK_SKIP_ROWS,te),ut.pixelStorei(j.UNPACK_SKIP_IMAGES,he);let pi=A.isDataArrayTexture||A.isData3DTexture,Li=J.isDataArrayTexture||J.isData3DTexture;if(A.isDepthTexture){let pe=Ct.get(A),Xe=Ct.get(J),Tn=Ct.get(pe.__renderTarget),Ee=Ct.get(Xe.__renderTarget);ut.bindFramebuffer(j.READ_FRAMEBUFFER,Tn.__webglFramebuffer),ut.bindFramebuffer(j.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Oe=0;Oe<Ft;Oe++)pi&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ct.get(A).__webglTexture,st,he+Oe),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ct.get(J).__webglTexture,Rt,Pe+Oe)),j.blitFramebuffer(zt,te,zt+Bt,te+At,Ot,ue,Ot+Bt,ue+At,j.DEPTH_BUFFER_BIT,j.NEAREST);ut.bindFramebuffer(j.READ_FRAMEBUFFER,null),ut.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(st!==0||A.isRenderTargetTexture||Ct.has(A)){let pe=Ct.get(A),Xe=Ct.get(J);ut.bindFramebuffer(j.READ_FRAMEBUFFER,R),ut.bindFramebuffer(j.DRAW_FRAMEBUFFER,H);for(let Tn=0;Tn<Ft;Tn++)pi?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,pe.__webglTexture,st,he+Tn):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,pe.__webglTexture,st),Li?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Xe.__webglTexture,Rt,Pe+Tn):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Xe.__webglTexture,Rt),st!==0?j.blitFramebuffer(zt,te,zt+Bt,te+At,Ot,ue,Ot+Bt,ue+At,j.COLOR_BUFFER_BIT,j.NEAREST):Li?j.copyTexSubImage3D(Vt,Rt,Ot,ue,Pe+Tn,zt,te,Bt,At):j.copyTexSubImage2D(Vt,Rt,Ot,ue,zt,te,Bt,At);ut.bindFramebuffer(j.READ_FRAMEBUFFER,null),ut.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Li?A.isDataTexture||A.isData3DTexture?j.texSubImage3D(Vt,Rt,Ot,ue,Pe,Bt,At,Ft,ye,je,ve.data):J.isCompressedArrayTexture?j.compressedTexSubImage3D(Vt,Rt,Ot,ue,Pe,Bt,At,Ft,ye,ve.data):j.texSubImage3D(Vt,Rt,Ot,ue,Pe,Bt,At,Ft,ye,je,ve):A.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Rt,Ot,ue,Bt,At,ye,je,ve.data):A.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Rt,Ot,ue,ve.width,ve.height,ye,ve.data):j.texSubImage2D(j.TEXTURE_2D,Rt,Ot,ue,Bt,At,ye,je,ve);ut.pixelStorei(j.UNPACK_ROW_LENGTH,sn),ut.pixelStorei(j.UNPACK_IMAGE_HEIGHT,xe),ut.pixelStorei(j.UNPACK_SKIP_PIXELS,Di),ut.pixelStorei(j.UNPACK_SKIP_ROWS,Qe),ut.pixelStorei(j.UNPACK_SKIP_IMAGES,ro),Rt===0&&J.generateMipmaps===!0&&J.mipmapsAutoUpdate===!0&&j.generateMipmap(Vt),ut.unbindTexture()},this.initRenderTarget=function(A){Ct.get(A).__webglFramebuffer===void 0&&at.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?at.setTextureCube(A,0):A.isData3DTexture?at.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?at.setTexture2DArray(A,0):at.setTexture2D(A,0),ut.unbindTexture()},this.resetState=function(){O=0,q=0,Z=null,ut.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var Fs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var xn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Y_=new Yi(-1,1,1,-1,0,1),Kc=class extends se{constructor(){super(),this.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new kt([0,2,0,0,2,0],2))}},X_=new Kc,Ci=class{constructor(t){this._mesh=new qt(X_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Y_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var dl=class extends xn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof We?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=li.clone(t.uniforms),this.material=new We({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Ci(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Yr=class extends xn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},fl=class extends xn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var pl=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Ut);this._width=n.width,this._height=n.height,e=new Fe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qe}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new dl(Fs),this.copyPass.material.blending=si,this.timer=new Er}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Yr!==void 0&&(o instanceof Yr?n=!0:o instanceof fl&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Ut);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ml=class extends xn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new _t}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Pd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new _t(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Ds=class i extends xn{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Ut(t.x,t.y):new Ut(256,256),this.clearColor=new _t(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Fe(r,o,{type:qe,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Fe(r,o,{type:qe,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Fe(r,o,{type:qe,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=Pd;this.highPassUniforms=li.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new We({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ut(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=li.clone(Fs.uniforms),this.blendMaterial=new We({uniforms:this.copyUniforms,vertexShader:Fs.vertexShader,fragmentShader:Fs.fragmentShader,premultipliedAlpha:!0,blending:Un,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new _t,this._oldClearAlpha=1,this._basic=new oe,this._fsQuad=new Ci(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ut(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new We({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ut(.5,.5)},direction:{value:new Ut(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new We({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Ds.BlurDirectionX=new Ut(1,0);Ds.BlurDirectionY=new Ut(0,1);var Xr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var gl=class extends xn{constructor(){super(),this.isOutputPass=!0,this.uniforms=li.clone(Xr.uniforms),this.material=new ws({name:Xr.name,uniforms:this.uniforms,vertexShader:Xr.vertexShader,fragmentShader:Xr.fragmentShader}),this._fsQuad=new Ci(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},le.getTransfer(this._outputColorSpace)===ge&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Rr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Cr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ir?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ji?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ur?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Nr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Pr&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function xl(i,t,{fog:e=[40,120],light:n="fixed",ambient:s=.6,glow:r=null}={}){let o=new cl({antialias:!0});o.setPixelRatio(Math.min(globalThis.devicePixelRatio||1,2)),o.setClearColor(new _t(t.bg)),i.appendChild(o.domElement),r&&(o.toneMapping=Ji);let a=new cr;e&&(a.fog=new lr(new _t(t.bg),e[0],e[1]));let l=new tn(50,1,.1,400);a.add(new wr(16777215,s));let c=new br(16777215,2.2);n==="camera"?(c.position.set(-.5,.9,.45),l.add(c),l.add(c.target),c.target.position.set(0,0,-1),a.add(l)):(c.position.set(20,30,25),a.add(c));function h(){let v=i.clientWidth||300,P=i.clientHeight||300;o.setSize(v,P),d&&(d.setPixelRatio(o.getPixelRatio()),d.setSize(v,P)),l.aspect=v/P,l.updateProjectionMatrix()}let d=null;r&&(d=new pl(o),d.addPass(new ml(a,l)),d.addPass(new Ds(new Ut(256,256),r.strength??.8,r.radius??.6,r.threshold??.55)),d.addPass(new gl)),h();let u=new z,f=new z,p=new vn,M=new z,x=new Ht,g=new z,y=1,w="",_=()=>{let v=0;return a.traverse(P=>{(P.isMesh||P.isLine||P.isPoints)&&!P.userData.backdrop&&(v+=1+(P.isInstancedMesh?P.count:0)+(P.geometry&&P.geometry.attributes.position?P.geometry.attributes.position.count:0))}),v},S=v=>{v.sort((E,U)=>E-U);let P=v.length;return(v[Math.floor(P*.02)]+v[Math.min(P-1,Math.floor(P*.98))])/2};function b(v){a.updateMatrixWorld(!0);let P=[];a.traverse(D=>{if(!(!(D.isMesh||D.isLine||D.isPoints)||D.userData.backdrop)){if(D.isInstancedMesh)for(let R=0;R<D.count;R++)D.getMatrixAt(R,x),P.push(M.setFromMatrixPosition(x).applyMatrix4(D.matrixWorld).clone());else if(p.makeEmpty().expandByObject(D),!p.isEmpty())for(let R=0;R<8;R++)P.push(g.set(R&1?p.max.x:p.min.x,R&2?p.max.y:p.min.y,R&4?p.max.z:p.min.z).clone())}}),w=_();let E=P.filter(D=>Number.isFinite(D.x+D.y+D.z));if(!E.length){u.set(0,0,0),y=1;return}u.set(S(E.map(D=>D.x)),S(E.map(D=>D.y)),S(E.map(D=>D.z)));let U=E.map(D=>D.distanceTo(u)).sort((D,R)=>D-R),N=U[Math.min(U.length-1,Math.floor(U.length*.98))]*1.05;if(!(N>0)){y=1;return}y=Math.max(.3,Math.min(30,2.4*N/v))}let m=null;return{renderer:o,scene:a,camera:l,resize:h,canvas:o.domElement,fit:b,changed:()=>_()!==w,centre:u,orbit(v,P,E,U){let N=y/Math.min(1,l.aspect*1.15),D=E*N,R=U?(f.set(u.x+U.x*D,u.y,u.z+U.z*D),f):u;e&&(a.fog.near=e[0]*N,a.fog.far=e[1]*N),l.position.set(R.x+Math.sin(v)*Math.cos(P)*D,R.y+Math.sin(P)*D,R.z+Math.cos(v)*Math.cos(P)*D),l.lookAt(R),m&&m.position.copy(l.position),l.updateMatrixWorld()},sky({top:v,haze:P,stars:E=0,starColor:U="#ffffff"}){m&&(a.remove(m),m.traverse(L=>{L.geometry&&(L.geometry.dispose(),L.material.dispose())}));let N=300,D=new de(N,24,16),R=D.getAttribute("position"),H=[],O=new _t(P),q=new _t(v),Z=new _t;for(let L=0;L<R.count;L++){let X=Math.max(0,Math.min(1,R.getY(L)/N/.5));Z.copy(O).lerp(q,X*X*(3-2*X)),H.push(Z.r,Z.g,Z.b)}if(D.setAttribute("color",new kt(H,3)),m=new qt(D,new oe({vertexColors:!0,side:Ce,fog:!1,depthTest:!1,depthWrite:!1})),m.renderOrder=-10,m.frustumCulled=!1,m.userData.backdrop=!0,E>0){let L=[];for(let V=0;V<E;V++){let G=V*2654435761%6283/1e3,W=.12+V*40503%1e3/1e3*.85,B=Math.sqrt(1-W*W);L.push(Math.cos(G)*B*N*.98,W*N*.98,Math.sin(G)*B*N*.98)}let X=new zi(new se().setAttribute("position",new kt(L,3)),new bi({color:U,size:1.6,sizeAttenuation:!1,fog:!1,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.8}));X.renderOrder=-9,X.frustumCulled=!1,X.userData.backdrop=!0,m.add(X)}a.add(m),m.position.copy(l.position),o.setClearColor(O),e&&a.fog.color.copy(O)},render(){d?d.render():o.render(a,l)},snapshot(){return this.render(),o.domElement.toDataURL("image/png")},dispose(){a.traverse(v=>{v.geometry&&v.geometry.dispose(),v.material&&v.material.dispose(),v.isInstancedMesh&&v.dispose()}),d&&d.dispose(),o.dispose(),o.domElement.remove()}}}function Ud(i,{yaw:t=.6,pitch:e=.3,dist:n=48,min:s=15,max:r=110,minPitch:o=.3,maxPitch:a=1.4,pan:l=!1,onChange:c,onClick:h,onHover:d}){let u=i.canvas,f={yaw:t,pitch:e,dist:n,x:0,z:0},p=new Map,M=e,x=.75,g=!1,y=null,w=0;u.style.touchAction="none";let _=E=>Math.max(s,Math.min(r,E)),S=E=>Math.max(o,Math.min(a,E)),b=E=>Math.max(-.7,Math.min(.7,E)),m=(E,U)=>{let N=2*Math.tan(25*Math.PI/180)/(u.clientHeight||300);f.x=b(f.x-(Math.cos(f.yaw)*E+Math.sin(f.yaw)*U)*N),f.z=b(f.z+(Math.sin(f.yaw)*E-Math.cos(f.yaw)*U)*N)},v=()=>{let[E,U]=[...p.values()];return Math.hypot(E.x-U.x,E.y-U.y)},P={pointerdown(E){p.set(E.pointerId,{x:E.clientX,y:E.clientY});try{u.setPointerCapture(E.pointerId)}catch{}p.size===1?(g=!1,y={x:E.clientX,y:E.clientY}):(g=!0,w=v())},pointermove(E){let U=p.get(E.pointerId);if(!U){E.pointerType==="mouse"&&d&&d(E.clientX,E.clientY);return}let N=E.clientX-U.x,D=E.clientY-U.y;if(U.x=E.clientX,U.y=E.clientY,p.size===2){let R=v();w>0&&R>0&&(f.dist=_(f.dist*w/R),c()),w=R;return}!g&&Math.abs(E.clientX-y.x)+Math.abs(E.clientY-y.y)>4&&(g=!0),g&&(l?m(N,D):(f.yaw-=N*.008,f.pitch=S(f.pitch+D*.008)),c())},pointerup(E){p.delete(E.pointerId)&&!g&&!p.size&&h&&h(E.clientX,E.clientY)},pointercancel(E){p.delete(E.pointerId)},wheel(E){E.preventDefault(),f.dist=_(f.dist*(1+Math.sign(E.deltaY)*.08)),c()}};for(let[E,U]of Object.entries(P))u.addEventListener(E,U,{passive:E!=="wheel"});return{get yaw(){return f.yaw},get pitch(){return f.pitch},get dist(){return f.dist},get x(){return f.x},get z(){return f.z},set(E){Object.assign(f,E),f.dist=_(f.dist),f.pitch=S(f.pitch),f.x=b(f.x),f.z=b(f.z),c()},get tilted(){return f.pitch<M-.2},tilt(E=!(f.pitch<M-.2)){return f.pitch=S(E?x:M),c(),E},apply(){i.orbit(f.yaw,f.pitch,f.dist,f)},dispose(){for(let[E,U]of Object.entries(P))u.removeEventListener(E,U)}}}var _l=new z;function Ls(i,t){let e=i.camera,n=i.canvas.clientWidth,s=i.canvas.clientHeight;_l.set(t[0],t[1],t[2]).applyMatrix4(e.matrixWorldInverse);let r=-_l.z;if(r<=e.near)return null;let o=s/(2*Math.tan(e.fov*Math.PI/360));return{x:n/2+_l.x*o/r,y:s/2-_l.y*o/r,depth:r,px:o/r}}function Nd(i,t,e,n,s=8){let r=null,o=1/0,a=null,l=1/0;for(let c of t){let h=Ls(i,c.at);if(!h)continue;let d=Math.hypot(h.x-e,h.y-n),u=c.r*h.px;d<=u?h.depth<o&&(o=h.depth,r=c.key):d-u<=s&&d-u<l&&(l=d-u,a=c.key)}return r||a}var Jr=(i,t)=>(Object.assign(i.style,t),i);function Fd(i,t){getComputedStyle(i).position==="static"&&(i.style.position="relative");let e=`0 0 3px ${t.bg}, 0 0 3px ${t.bg}, 0 1px 2px ${t.bg}`,n=`color-mix(in srgb, ${t.bg} 72%, transparent)`,s=(E,U,N)=>{let D=document.createElement(E);return Jr(D,U),(N||r).appendChild(D),D},r=Jr(document.createElement("div"),{position:"absolute",inset:"0",pointerEvents:"none",overflow:"hidden",font:"13px system-ui, sans-serif",color:t.fg,userSelect:"none"});r.className="vgv-frame",i.appendChild(r);let o=s("div",{position:"absolute",left:"12px",top:"10px",right:"12px",color:t.muted,textShadow:e});o.className="vgv-stat";let a=s("div",{position:"absolute",left:"12px",top:"34px",right:"12px",display:"flex",flexWrap:"wrap",gap:"2px 12px",fontSize:"11px",color:t.muted,textShadow:e});a.className="vgv-legend";let l=s("div",{position:"absolute",left:"10px",right:"10px",bottom:"112px",maxHeight:"55%",overflowY:"auto",display:"none",flexDirection:"column",gap:"8px",padding:"10px 12px",borderRadius:"10px",background:t.bg,border:`1px solid ${t.muted}`,pointerEvents:"auto",userSelect:"text"});l.className="vgv-insights";let c=s("div",{position:"absolute",top:"34px",left:"0",right:"0",display:"none",justifyContent:"center"}),h=s("div",{position:"absolute",inset:"0"});h.className="vgv-labels";let d=s("div",{position:"absolute",inset:"0",pointerEvents:"none"});d.className="vgv-rings";let u=s("div",{position:"absolute",left:"0",right:"0",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",padding:"0 12px"});u.className="vgv-controls";let f=s("div",{position:"absolute",display:"none",maxWidth:"260px",padding:"4px 8px",borderRadius:"6px",background:t.bg,border:`1px solid ${t.muted}`,color:t.fg,fontSize:"12px"});f.className="vgv-tip",r.appendChild(l);let p=40,M=24;function x(E,{label:U,title:N,run:D,off:R},H){let O=s("button",Object.assign({pointerEvents:R?"none":"auto",cursor:"pointer",minHeight:p+"px",height:"auto",minWidth:p+"px",width:"auto",padding:"6px 14px",margin:"0",borderRadius:"8px",border:`1px solid ${t.muted}`,background:t.bg,color:t.fg,font:"600 13px system-ui, sans-serif",boxShadow:"none",opacity:R?"0.35":"1",lineHeight:"1.2"},H||{}),E);return O.type="button",O.textContent=U,O.disabled=!!R,N&&(O.title=N,O.setAttribute("aria-label",N)),O.addEventListener("click",q=>{q.stopPropagation(),D()}),O}let g=E=>{let U=E.canvas.getBoundingClientRect(),N=r.getBoundingClientRect();return{x:U.left-N.left,y:U.top-N.top}},y=[],w=null,_=!1,S={},b=null,m=[],v=()=>{let E=a.querySelector(".vgv-mark");if(E&&E.remove(),!b)return;let U=s("span",{display:"inline-flex",alignItems:"center",gap:"5px"},a);U.className="vgv-mark",s("i",{width:"9px",height:"9px",borderRadius:"50%",border:`2px solid ${t.warn}`,boxSizing:"border-box"},U),U.append(b)},P=()=>{if(l.style.display=w&&_?"flex":"none",l.replaceChildren(),!(!w||!_)){if(w.plain){let E=s("div",{color:t.fg,lineHeight:"1.35",fontWeight:"600"},l);E.textContent=w.plain}w.about&&(s("div",{color:t.fg,lineHeight:"1.35"},l).textContent=w.about);for(let E of w.insights||[]){let U=s("div",{display:"flex",gap:"8px",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"},l);s("div",{color:t.muted,flex:"1 1 160px",lineHeight:"1.35"},U).textContent=E.text;let N=[...E.run?[{label:E.label||"Show",title:E.title||E.label||"Show",run:E.run}]:[],...E.extra||[]];for(let D of N)x(U,D,{minHeight:p+"px",padding:"4px 10px",fontWeight:"500"})}}};return{stat(E){o.textContent=E||""},explain(E){w=E||null,a.replaceChildren();for(let U of w&&w.legend||[]){let N=s("span",{display:"inline-flex",alignItems:"center",gap:"5px"},a);s("i",{width:"9px",height:"9px",borderRadius:"50%",background:U.color,display:"inline-block",flex:"none"},N),s("span",{},N).textContent=U.text}w||(_=!1),v(),P(),this.controls(S)},card(E){_=!!E&&!!w,P(),this.controls(S)},mark(E){b=E||null,v()},rings(E,U){for(;m.length<E.length;){let D=s("div",{position:"absolute",left:"0",top:"0",borderRadius:"50%",boxSizing:"border-box",willChange:"transform"},d);m.push(D)}let N=g(U);m.forEach((D,R)=>{let H=E[R],O=H&&Ls(U,H.at);if(!O){D.style.display="none";return}O.x+=N.x,O.y+=N.y;let q=Math.max(4,Math.min(24,H.r*O.px))+4,Z=2*q+(H.n>1?8:0);Jr(D,{display:"",width:Z+"px",height:Z+"px",border:`2px solid ${t.warn}`,boxShadow:H.n>1?`inset 0 0 0 2px transparent, inset 0 0 0 3.5px ${t.warn}`:"none",transform:`translate(${Math.round(O.x-Z/2)}px, ${Math.round(O.y-Z/2)}px)`})})},controls(E={}){S=E;let{at:U="bottom",lines:N=[],buttons:D=[]}=E,R=w&&U==="bottom"?[...D,{label:_?"Close":"Insights",title:_?"Close the insights":"How the notes relate to this view and how to improve them",run:()=>{_=!_,P(),this.controls(S)}}]:D;if(u.replaceChildren(),Jr(u,U==="centre"?{top:"50%",bottom:"auto",transform:"translateY(-50%)"}:{top:"auto",bottom:"18px",transform:"none"}),N.forEach((H,O)=>{s("div",{textAlign:"center",textShadow:e,color:O||U!=="centre"?t.muted:t.fg,fontWeight:O||U!=="centre"?"400":"600",fontSize:O||U!=="centre"?"13px":"14px"},u).textContent=H}),R.length){let H=s("div",{display:"flex",gap:"8px",alignItems:"center",justifyContent:"center",maxWidth:"100%"},u);R.forEach(O=>x(H,O,O.wide?{maxWidth:"70vw",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}:null))}},chip(E,U){c.replaceChildren(),c.style.display=E?"flex":"none",E&&x(c,{label:`${E}  \u2715`,title:`${E}. Clear`,run:U},{borderRadius:"18px",fontWeight:"400"})},labels(E){h.replaceChildren(),y=E.map(U=>{let N={position:"absolute",left:"0",top:"0",whiteSpace:"nowrap",color:U.color||t.fg,textShadow:e,font:`${U.strong?"700 15px":"12px"} system-ui, sans-serif`,willChange:"transform",background:n,borderRadius:"5px",padding:"1px 5px"},D=U.run?x(h,{label:U.text,title:U.title,run:U.run},Object.assign(N,{minHeight:M+"px",minWidth:M+"px",padding:"3px 5px",border:"none",background:n})):s("div",N,h);return U.run||(D.textContent=U.text),{l:U,n:D,w:D.offsetWidth,h:D.offsetHeight}})},tip(E,U,N){f.style.display=E?"block":"none",E&&(f.textContent=E,Jr(f,{left:Math.max(4,Math.min(r.clientWidth-264,U+14))+"px",top:Math.max(4,N+16)+"px"}))},place(E){let U=r.clientWidth,N=r.clientHeight,D=[],R=g(E);for(let{l:H,n:O,w:q,h:Z}of y){let L=Ls(E,H.at);L&&(L.x+=R.x,L.y+=R.y);let X=!!L&&L.x>-q&&L.x<U+q&&L.y>-Z&&L.y<N+Z,V=0,G=0;X&&(V=Math.max(6,Math.min(U-q-6,H.side==="right"?L.x+(H.dx||0):L.x-q/2)),G=Math.max(34+(a.offsetHeight?a.offsetHeight+6:0),Math.min(N-110,L.y+(H.dy||0)-Z/2)),X=!D.some(W=>V<W[0]+W[2]&&V+q>W[0]&&G<W[1]+W[3]&&G+Z>W[1])),O.style.display=X?"":"none",X&&(O.style.transform=`translate(${Math.round(V)}px, ${Math.round(G)}px)`,D.push([V,G,q,Z]))}},dispose(){r.remove()}}}function Dd(i,t,e){let n=xl(i,e.theme,t.stage),s=Fd(i,e.theme),r=0,o=!1,a=null,l=new Map,c=!1,h=0,d=!!e.motion&&!(globalThis.matchMedia&&globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches);n.canvas.addEventListener("pointerenter",()=>{c=!0}),n.canvas.addEventListener("pointerleave",()=>{c=!1});let u=()=>s.rings(l.size?y.targets().filter(_=>_.key.kind==="note"&&l.has(_.key.id)).map(_=>({at:_.at,r:_.r,n:l.get(_.key.id)})):[],n),f=()=>{n.changed()&&w(),g.apply(),y.frame&&y.frame(),s.place(n),u()},p=()=>{if(r=0,!o){if(d){let _=performance.now(),S=Math.min(.1,(_-h)/1e3);h=_,y.tick&&y.tick(_/1e3,S),t.drift&&!c&&g.set({yaw:g.yaw+S*t.drift})}f(),n.render(),d&&M()}},M=()=>{!r&&!o&&(r=requestAnimationFrame(p))},x=(_,S)=>{let b=n.canvas.getBoundingClientRect();return g.apply(),Nd(n,y.targets(),_-b.left,S-b.top)},g=Ud(n,{...t.home,onChange:M,onClick(_,S){let b=x(_,S);b&&(y.click(b),M())},onHover(_,S){let b=x(_,S),m=n.canvas.getBoundingClientRect();n.canvas.style.cursor=b?"pointer":"",s.tip(b&&b.tip?b.tip:null,_-m.left,S-m.top),(b&&b.kind+b.id)!==(a&&a.kind+a.id)&&(a=b,y.hover&&(y.hover(b),M()))}}),y=t.build({stage:n,frame:s,orbit:g,invalidate:M,...e}),w=()=>n.fit(t.home&&t.home.dist||48);return w(),M(),{view:t.id,resize(){n.resize(),M()},keyAt:x,noteAt(_,S){let b=x(_,S);return b&&b.kind==="note"?b.id:null},pageAt(_){g.apply();let S=Ls(n,_),b=n.canvas.getBoundingClientRect();return S&&{x:S.x+b.left,y:S.y+b.top}},mark(_,S){l=_ instanceof Map?_:new Map(Object.entries(_||{})),s.mark(l.size?S||"needs attention":null),M()},update(_){y.update(_||{}),w(),M()},stat:()=>y.stat(),today:()=>y.today?y.today():null,turn(_){return _&&g.set(_),{yaw:g.yaw,pitch:g.pitch,dist:g.dist}},snapshot(){return f(),n.snapshot()},api:y.api||{},dispose(){o=!0,cancelAnimationFrame(r),g.dispose(),y.dispose&&y.dispose(),s.dispose(),n.dispose()}}}var J_=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],mt=(i,t)=>`${i} ${t}${i===1?"":"s"}`,jt=(i,t)=>i.length>t?i.slice(0,t-1)+"\u2026":i,Ii=i=>{let[,t,e]=i.split("-");return`${J_[+t-1]} ${+e}`},yl=(i,t)=>Math.round(Math.abs(Date.parse(t)-Date.parse(i))/864e5);function q_(i,t=18){let e=i.length,n=Math.PI*(3-Math.sqrt(5));return i.map((s,r)=>{let o=e>1?1-r/(e-1)*2:0,a=Math.sqrt(1-o*o),l=r*n;return{x:Math.cos(l)*a*t,y:o*t,z:Math.sin(l)*a*t,size:.5+Math.sqrt((s.inlinks||0)+(s.outlinks||0))*.35}})}var Ld={id:"bodies",name:"Notes",hint:"Every note as a sphere",home:{yaw:.6,pitch:.3,dist:48,min:15,max:110},build({stage:i,frame:t,data:e,onOpen:n}){let s=e.nodes,r=q_(s),o=new fe(new de(1,20,14),new Te({roughness:.5}),Math.max(s.length,1));o.count=s.length;let a=new Ht,l=new _t;r.forEach((d,u)=>{a.makeScale(d.size,d.size,d.size).setPosition(d.x,d.y,d.z),o.setMatrixAt(u,a),o.setColorAt(u,l.setHSL((s[u].cluster||0)*.137%1,.6,.55))}),i.scene.add(o);let c=r.map((d,u)=>({at:[d.x,d.y,d.z],r:d.size,key:{kind:"note",id:s[u].id,tip:s[u].name}})),h=()=>mt(s.length,"note");return t.stat(h()),{targets:()=>c,click:d=>n(d.id),update(){},stat:h}}};var Bd={source:"PDB 5F9R (Jiang et al., Science 351:867, 2016) and 1BNA (Drew et al., PNAS 78:2179, 1981); public domain",q:.55914,lo:[-59.037,-52.177,-45.243],radius:1.8,protein:8622,rna:[[1,23],[2,18],[3,14],[4,16],[5,14],[6,14],[7,15],[8,15],[9,15],[10,15],[11,15],[12,16],[13,15],[14,15],[15,13],[16,16],[17,17],[18,13],[19,15],[20,14],[21,14],[22,14],[23,14],[24,10],[25,14],[26,14],[27,21],[28,22],[29,17],[30,15],[31,15],[32,17],[33,16],[34,18],[35,15],[36,16],[37,19],[38,15],[39,13],[40,17],[41,15],[42,19],[43,20],[44,16],[45,17],[46,17],[47,20],[48,20],[49,18],[50,16],[51,15],[52,17],[53,14],[54,17],[55,18],[56,16],[57,16],[58,15],[59,18],[60,16],[61,17],[62,15],[63,15],[64,17],[65,16],[66,17],[67,16],[68,17],[69,16],[70,16],[71,15],[72,16],[73,16],[74,17],[75,20],[76,16],[77,20],[78,14],[79,15],[80,16],[81,17],[82,18],[83,19],[84,19],[85,19],[86,15],[87,14],[88,16],[89,14],[90,18],[91,19],[92,20],[93,14],[94,15],[95,18],[96,15],[97,17],[98,19],[99,22],[100,20],[101,16],[102,17],[103,14],[104,15],[105,17],[106,19],[107,22],[108,19],[109,17],[110,16],[111,16],[112,15],[113,16],[114,15],[115,20],[116,20]],target:[[1,15],[2,15],[3,16],[4,16],[5,16],[6,15],[7,16],[8,15],[9,14],[10,18],[11,19],[12,16],[13,16],[14,18],[15,15],[16,15],[17,16],[18,14],[19,16],[20,15],[21,15],[22,13],[23,16],[24,17],[25,14],[26,16],[27,14],[28,18],[29,17],[30,17]],other:[[12,21],[13,19],[14,18],[15,16],[16,18],[17,19],[18,13],[19,22],[20,19],[21,14],[22,14],[23,15],[24,14],[25,16],[26,15],[27,15],[28,16],[29,16],[30,22]],spacer:20,pam:[[10,21],[9,22],[8,23]],flank:[[7,24],[6,25],[5,26],[4,27],[3,28],[2,29],[1,30]],step:{turn:.62351,rise:3.2376},pair:[[9.699,0,-2.305,0,0],[10.839,.901,-2.582,0,0],[9.939,-1.059,-1.289,0,0],[8.473,.907,-1.868,0,0],[8,1.916,-2.762,0,0],[6.881,2.551,-2.001,0,0],[5.884,1.565,-1.789,0,0],[7.28,2.993,-.605,0,0],[7.569,4.393,-.583,0,0],[6.113,2.528,.278,0,0],[5.076,2.087,-.754,0,0],[4.225,.946,-.343,0,1],[2.882,1.115,-.303,0,1],[2.389,2.221,-.546,0,1],[2.101,.031,-.017,0,1],[2.619,-1.208,.254,0,1],[1.832,-2.138,.454,0,1],[4.007,-1.353,.26,0,1],[4.641,-2.674,.601,0,1],[4.803,-.254,-.061,0,1],[-9.607,1.703,2.313,1,0],[-10.67,2.703,2.57,1,0],[-9.986,.564,1.436,1,0],[-8.324,2.485,1.789,1,0],[-7.756,3.509,2.615,1,0],[-6.674,4.18,1.825,1,0],[-5.519,3.332,1.755,1,0],[-7.034,4.586,.4,1,0],[-6.674,5.949,.158,1,0],[-6.253,3.555,-.414,1,0],[-5.004,3.39,.428,1,0],[-4.379,2.059,.236,1,1],[-4.984,.831,.172,1,1],[-4.103,-.178,.07,1,1],[-2.905,.441,.079,1,1],[-1.572,-.063,.016,1,1],[-1.289,-1.392,-.053,1,1],[-.579,.825,.041,1,1],[-.854,2.124,.134,1,1],[-2.04,2.718,.212,1,1],[-3.03,1.798,.18,1,1]],tails:{near:{o:[46.898,-16.831,-6.652],x:[.205,-.031,.978],y:[-.292,-.956,.03],z:[.934,-.292,-.205],phase:1.8705},far:{o:[-33.927,-16.831,-6.652],x:[-.732,-.357,.58],y:[-.659,.585,-.472],z:[-.17,-.728,-.664],phase:1.8705}},atoms:"TxsjTBsjTB4lTR8kTBklSh0nSSAoSyAqTB4rRx8pSyIrTSMtTCUuSycuTyMsUCUrUScsTyYoUSkqTygnUSsmTSUxTygzUSczSyc0SSYzTys0US03UC43Ui4yVC8zVC4uUy47VS87VTE8VzQ/VTRBVjU7VTU4VTc3WDQ3WTVAWTZCXThCWjREWTdHXDRIWjpCWzxCXD5EWz1GWj5AWDw+Wz8+Vz48Xj9DX0BFYUJEYUJCYURGY0ZFZkdCY0hHZUZJYUhIZkNEaEBCaj9AakFFa0NGbEVFa0NJZj9BYT5AZjtCZDtEYzs9YTo8YjY6YTs6Xjo4YT46YDY+YDQ+XjI8XDM8XzE6Xyw4XTE2YDE1YjI1YS8zZDE0Yy8zXy0yYSsxYywwWyw4Wyo4WSk2Vyo2Wik6WSc1VyQ0WCI0ViUvWSkwVCM0UyE1UiAzUSIyUiE3UCI3VCI5TiI5UB0xThwyTR0zURsvVBswURstTRoxShkxSxg0SRg1SRgvRhgwRRgyRRguTRYzTRU1UBU4TxM0Txg3URo5VRk7UBk8TRk8TBs9TBc8Shs9SRc8SBk9Rho9VBk3Vxg2WBo1VxszVxY1Whs1XRoyXR41Xxw2Xx8zXBwtXx4tWh0rWB4tWR4vXxorYhsnYBomYxgrZRkqYx0nZB0kZh4jaB8lYh8jZx0haSAfZyAdahweayIfayQebSQdbyQdaiYgaCYhaCYkZiUgZSYlZCUhYyUkbCYabiYZcCgabyobbScWcigZdykXeCocdCcedS0Xdy4Wei4Wei4YdjAVdDETczMTdDARezAVfTEVfy8Ufi4Sgy0UhCsVhioVhS4ShjAUhjAWhzITgioXgygYgiUXgSUWgigbgCgbgyscgyQZgiEYgCAZfh8YhB8ZhyAZhyEXiB8afyEbfSEceiQafCEfeiEZdCMYeCAVeiETfCIUeyARfiISfSERdSAacx8edR4ecR4achwaciAfbx8jbiAjcyEjdiEjcyAmeCIkbx0kbhwpbBklax4oaB8sZx4qbCIqaCAuZCIvZSQuZh8xZhsxaR0yYiIvYCQvXiYyXiQuZig1YSU3YCc5YyM3YCU7ZCo3Ziw4ZS45aDQ5ajQ5ZzI9ZzY5aDg4aDo7Zzo2aDw1ajw0Zj40bzs9bjg+cDc/bDlAbUA8bUI7bUQ/a0M5aUM7aEY7aEE7ZkY9ZUI8ZUQ9cEg+bEk+cUo+dEk9dEc+dUo7bUpBbE5Aa0tFa0lGaE5AaFA/Z1JDalZCZ1hBbFdCblVCcVZCcVlCclVCaFlEZltFZ11DaV1CZVtHZ1xIZFlIZV9EZ2NEZ2VEZGJBZ2JGamVIa2dIZ2NLaGRNZ2NPZ2FPZ2RRbGNIbmRHb2ZFcGdFcGJHbmVDbmZBbmtBbWU/bWM/bWc9a2lDa21Fa29EZm1FZG1GZGxJYmhIY2pMbGxHbm1IcG5HcHBHbmxKbWxNamtMbmpPc25Ec3JCdGxCdmtEdmpGeGlHeWdFb3ZBa3I9aXE8Z3A9aGw9ZW0/bXRDbXZFb3lGa3ZHbHRJaXVHcXZGc3ZGdXpFdXRHdXhAdXxAdHc+dnU9dXM7c3I8c3A7dHA5cW87cXtAcH1AcYFCbXxAbHw+anw9aHo+Z3g9Z3g7Znc+cX5Ecn9GdIBFdYNFc35IcX9Lc39NdX1Ndn1Pd39QeHxQdn9FeIBEeIJCeYRCen5De31FfX5He3tGfX1Je3lIfXtKfnpMd4FAd4M+doU/doc+dYI8c4E8doA6dIVAcodBdItDcIdCboZBbIRCaoNAaIFCZ4E+dYhEeYxFeIdIeohJfYdJfYVLf4RKgYVJgIJMeolCfIpBfI5AfYg/foo9gIs+gow9hI0+d5I/dY49dY06d4w6c405dpBCdpJEeJVEdZFGc5BGcY9Jco1JdY5MdIpMepJEfZNEfpdCf5FEf5BHgZNEf5JJfJRAfJU9e5c9e5k8e5M7fpE7d5k/eZ0/dZlAc5c8cZY/cpY7cJQ+cJQ8b5M6fp9De5tGfJ1Ifp5Iep9IgJxAgaA+gpo/hZc/hZc9hpZBfp49fZ87fKI8faM6e546ep83d583dp04d6A1e6I+e6Q/fag/eaRBd6NBeaZCdaNDgaZAhac+g6RCgqVFgKZFg6RGf6ZHgqRJgKVJg6U6h6g5gqQ4g6Q2g6k5hKw4h645gq03f604f6o5fq45ha08hq4+i64/ha5Ag7A/hLI/hbNAgrQ+iao+iqY/jaVBjKREjKdFjKo7jqo5j6w6ka05jao3jq47j7A7kbA+krE+jbI8jLM6irU7i7c7ibk8kK4/ka5Bk6xBlqxBkaxGjq9Ek6pAlKg/kqY9laZBl6RBl6M/mKRDlac7lKY5lKM5k6I3lqc3mac3maU5mqg2lp09mJ85mqA6lJ8+k5pAkqBCkZ9Ekp5Ijp1Hj51IkJw+jpo+j5g9j5Y9jJs9ipxBiZ49iZ5Ch58/h59BkZk7k5c6lJY7lJM7lJg4kpk2kZs2kpk0kJw0kJszlZc9lZRAlpJBmJdAmpg/nJpBmptCm55Ak5VBkpNCkI9CkJVDkJZGkZhGjZdGkYw8jpA7jI87ipA9ipI+iI89lI49lo08l4w/mYs/l447mZA8m5E6m5A4m5M7loxBl4xDmYlFlY1Fk4tFlohClYRBlYFClIBEln9AlH5Fln1BlXxDmoU/n4dAnIY7moU5mIU6m4c3ooQ/o4c+ooc8pII/poJAo4A/pYg/poo+p4k8p4s6qItAqY0/q45BrJBArI1CqIc7qYY5qIc1qoQ5q4M3rIA3rH85rH81pYY4o4Y2oYk2oIk1oYQ2o4I1pYI0ooA2oYw5o482oY07n482n5E0opU0nZIzn5Q4oJY5oZY7opQ7npg5n5s5n5w7oJw4oJ47oJ45opc9o5c/n5VBo5lApppAqJlBqpk/p5dCo5RCopJEn5FHpJBEppFFqJBGq5FHq5FJqpBLrZJJnpdInphGophKpJdNppZKppZOqJZMmZZImZhJmJlHmJRKmpNLnJRLmZpLmJxLmJ1Nl5tPlp9NlpxRm55Kn6FGnqJLm6RNnKFPmaVPm6FRmaNRn55HoZ1Fo51GpZxFpJ9Hpp9Ip55KpZ1Lp6JJpaNLpqJNo6RKqZ5Lp5xRq5tNrJpLrJlPrplLqZ9QqaFTpqFVqqNTqqRQqqVVo6NSoKBUoaRQo6ZQo6dRo6dNop5SoJxSoZtVn5tWoZpQo5xVpJtYopxbp5tYp5taqJpWop9ZoaFan6BbnqBdoaNZnZ9Zm55ZmZxdmp5XlZ5Yl5pXk51ZlZlYk5pYkZlZnJhcnZlenJhgnpdbnJNZnpZWm5NWnZRVnptfn5xhnJxkoZ1hpJxipJxkop1mpZplnJ9imqBjl59lmqNimKRkmKdjlqhllqplmJ1hlphflJ1fkaBhlKFekaNhlKNekqdgl5VjlpJgmJVllpdnlpllkJVgkJdgj5JjjpRkkZFljpRfjJZdiplfi5RbipZaiZNdi5hYiJtliJVlhJNjiJFjg5Fiho9ig45hjZxli6BkkJxlkptpkZdpkphriaBfiKJfjZ5djKBbjaJbjZ9YiJ5ghZ5ghaBihKJihJxhhJpfgppegZhdgJZef5dgf5Rdhp9khaFmhaVmh6BohqJrh6Fth6NviKJxiKRliaZkh6pjjKZjjahijapkjqxkj65mhahfgqpfhaZch6VZiKlbgKdifqtkf6VkfKZlfqNigqtng61mga9ng6pqgqhrgKdqhKdsha1mhq9lg7Bhia9kirFjhbNjg7VhhbZghbhfgrZig7hkgLVkibZeibVbiLNbjLVfjLZii7dijbRjirZajrRWirdWirdTirlRirhPirpNi7FXjK9Wja9Ui7BSjK1Yjq1Tj6xRi6pRkatQkqpOkalNk6xNjKtNiqpMiaZMiqtJiKtIhqxJiKxFjaRLjaNOi6FOkKRLkaRIk6RIlaZJl6ZJmKVHmKhKjaRQjKNSiaFTjqRUkKRUkaVWkaJUiaVRhqVRg6FRhadQhqlSgqdRhaxShqJOhaBMhJxOh6BKhJ1IiJxJhJtHiJpIhZdGiJtQhplTi5tRj5tQjJlOhp1UhJ1WgZpVhJ9XgZ1Tf51Sf5pRfZlRfp9QfqFRfaNPfKFTgJpPgZdOgJNPg5dMgpZSgpRUf5FVhJRVg5JZhpFXg5BbhY9afJVWeZNVe5hXfJlZe5tafZ1beZRQeJBPeZVOeJhPeJRMeJlNfI5Pe4pQf45OgItNgotMg4lLhYlKeY5YfYtWf4pVf4dUgItUgYdTgopTgohSdo1VdY9WdI5ZdI9ac49Uco1Tco1RcI5PbopPbY5Ocotbb4pYbIhbaotca4VdaYdgbYZhaohjbIdjaIlaZopaZIlbYolbZYpXZ4xWaYtVZo5Vao1UZ5BUao9TY4dfX4hhZIVgZoNfZ4JhZIFeYophYYxiYI5hYZBgYo1kZItlYY9mZYxnXY5hXJBfXJJhXJJjWY9fWY1dV41cVY5eVoxaXJRfXJdgX5hgYJdfX5liYppmYJpnYpxiYJ5iYJ5kX59gZJlmZZlpZ5tqaZtqZpdqZZVqYpVqZZRnZp1qZ59rZ55vZqJraKRraaRtaKVpa55ubJ1wa6Fzbp5wb55tbJ9saZ5zZ591aZ93a6B3ZZ11aJ15aZ17bZx8aJx9a5p5bZh5cJZ7b5l4cZh3bJd9bZZ/a5WAaZaAbpiBa5OBaZGCaJOEZpOEao+DaI2EbI6BapSGaZWIZ5eHZZeJa5eJZ5mGZpuGY5qFYZqGZ52EY5iDYZiCXpaEYpZ/ZJd8Ypp9YJOHX5SJXZSKYpGIYJaKX5iMW5mMYZqMY5mOYJyOZZqPXZqJV5qIW5yFWZ6EWp+CXJ+BWKGCWpeGWJWGVZSIWZOFWJKDWZCCVpGEWJSKV5ONVpWOVJWPWZOOWJKRW5GOVpeNVZmOUZqNVpyNVZ6NV6CMWKCLVqKNUpmKUJiJT5aKTJaKUZiGUpaGUpqFUJSKT5KLTJKOUJCLT5SPTpWRTJeRSpaTUJaTTJiQSpqPSJmORpqOS5yOTZ6PTqCOT6CMTaKPSJeNRpaLQ5WNR5SKRZKJQ5SHRpCHRZKRSJKURY+QRJOURJSXQ5KYRJKbQ5aYQpCXQo6YRIyZRIubQIyWPouWPI2WPI+VOo2YRoyYSIuYSoyXS4uWSIiYSYeZS4iaSYWaTY+XT42YUI2aTpGYTJGaSpCaUY2WU4uXVYyWVo2UU4mWUYeWVYeXUIWVV42YW4qYWpCZWJKaVpGbWJSYXY2WX4yWYoqYYY2UYI2aYY2cZI2cZYydYYudYougZY6aZ46ZaYyYa4yYZ4uXaYmVaoqTaIuRZ4eVaIWTZoaXbImTbYqQbYeOcImRcoqPcYyOdImOa4qNaomKbIeHaIuKbYuIb4uGcYmHc4qHcI2GcYeHcoWHcYKHcoCHdIWJb4OIbYGIa3+Fa4GKa4OCbYOAbIN+aYWCZ4WDZYOCZ4aFb4OBcYN/coGAdIF+c4WAdYZ+cn+Bc32BcXt9cnuDdXp+dXl8dHd8dXV8eHl7cnd8cHV8bnV7bXd6cHR+cXF/cXCBcG99bHN7anN6aXZ9aXB7ZnB6Z3Z5ZXh6Y3h+ZHh4Y3R8YnOCYHF9X3B+ZXJ/Z3KCZ3WDZ3WFaXGBZ3eCZ3mDZXqGaHuBY3mDYHmEX3mIX3iCXHiDW3qDWneBYXaGYXSIYXaMYnKIZXiNZHqNY3uPaHiMaXaLaHSKa3aLY3uLYn2LX3+OYX+JY4GIY4KLZoCIXHuOW3qSWnmMW3eMWXqKWXWOX3iSYHmWYXaSYX6VX3+ZYoCUZICTZn6VZ3+WZnyUXX+WWH2XWYKXWoSYWoSaXYWXWX2aWHubVXubVX2cWXqdWnyeW32cVHqbUXqbUHuYTnuYUnuXUnqSVHmSU36TUn+RUICQToCST4GOUHmRUHeQUnqNTnaPU3aMUneIUniGVXSJUHaITnaHTHmHS3mGTHSHSnSFSnWESXKFTXqJTHyKS4CIS4KHTYOGToSESYSHSYaKSIiKSYSMT4OIUYSIU4KHVIOGUoWLUoCIVH6HVX2DUX2BUn9/U399Tn2BUoR/VYR/VoR9UoaBT4eATYZ/T4mBWYOBXIB/WoODWYCFWoWFWoCHWX19V3t+V4F4WYN2VIN4VIR2VYZ2VIJ0WoR5XIV5XoR4YIV3XYd7W4h8XoF5YIB4YH92YX11YX56YX99YX1/ZIB8Xn91Xn5yXXxyXXtwXHt0Wnl0V3tyWnh3XHd7XnZ3Vnh0VHhzUXV1U3ZxVXZvUXZvUnl2UHl4TXl3TXl1UXt6U3x4U3x2THl5SXl5SHt7SXp9SHd5Rnd4RXl4RXV3Rnx7Q319QX5+RYB8Qnt8QHp8P3l+PXl/P3h6QXiAQHiCQHqGQnWDQXWFQn6EQICGRX+DR32DSX6DR3uEPYGCO4CBOYGBPoN/QIWAQYZ+QIWCQ4d+QoeCQ4iAO36COXyBNX1/N3yENnqENXqGNXmCOXx9N317N3h7OX15NoB3OX90NHt5Mnl4NHd3NHV2MHl3NXh1N3dzOXd0Onl1NnhxNnZvNXRvNXJvM3RxO3ZzPXZzPXlwPnRyQXNyQnR0QnJxQHlzQXtyRHxyRX10QH5yRntxSHtxSX1wSX1uSXhxS35xTYBwT39wUH5xTIJxSoNxSoZySYNvUYBuU4NrVH1sVn1tVXlqWXlsVoNtWYZoWYZuW4dyV4lwWYJqW4FoWYFlWoJjXH9oWn1pV4BmVYBjVYRkU39kVINgVIVfUYZfUIhfVYZdVIRbUoJcVYRZT4RgTYVgS4dkS4NgS4FiTIJeToZkTodnTIppUYdoUIdsUopqUIlvU4xtUotvUoxxTotlSY5nTo9kUJBlUZBnUpFjR4xjRYtlRItmRothR41fSY5fRo1dRodoRIhsR4VoR4NmSYJmRYNlR4prSIxtRI5vSo1tS49vSpFuSo5xQ5BrQY9rP5BsQ5JoRZRoR5NpRZVmQY1qP4tqPIttP4loPYdoPYZqPIdmP4lwPop0QYdxQod0Q4V1RYl0QI9zPpBzPZF1QpBzPZBxO5FwOZBxN5ByOpJuOY1xOItyOIt1Not2OYlxOox5OY96OZB8PIt6Po16PIl5P458OZF4OZN4PZR4O5d4PZl4Ppl6QJp7PJt3Opx4OZt6OZ13PZd8Ppd/QZZ/Q5h/PZaAQZR+RJN/RZN8RZJ7RJF/R5V8SJV5TJV4R5d4S5d7Tph7T5Z8Upd8Tpp9TJx8Spx7TZ59T5R9UJN+U5F9TpGATZGCSpKATI+DUJF6UZB4U5J3VJB1T5B3TY54S413Tox6Sot3TYp6S4p5U5R3VZV2WZV2VJh1VZt4UZt3WJV7XJJ7V5V+WY56W453XY13V4x6WpB2W5BzXZF0X5BzWZFyXpN1YJR1ZJN2YJd2Xpd4Xpd6XJh3YpB6Y455ZY55YI98YY5+YpB/X4x/Yo13Y4t1ZotzYYp0YItyZI5zZpByaJBzapByZZJxaJB1apF3a453bo54apJ5aox3a4p4bYd2aYl5aod7aId3aIV8bIlyb4lxcIdxa4pvcItyc4tydYx1c45ydI9vdpFwdY1uc4h1dId3eIh4c4V3dIR5eIZ1e4V0foh0e4Nzeolze4tye45ze5ByeolufY1ufYhteZB3e5F4fZB5eI95fJN3fpR4fpZ6fZh5f5V2fpZ8fpd+fJl+eph/gJl+gZqAgph9fJt9ep19e555e59+eaF+eqN9d6F/d556d593d6J3d6N1dJ52dJ90cqB4eKN5eKZ4e6l4d6d7fKV4f6V4gKh0gKN4gKJ6g6R4gKN9fqVzfqZxe6VweqRxgKRwf6RtgKJwe6VteaVseKJpeKdrfp1rfqBoepxse5tufJhtfZdveJpvd5tteJ1se5drfJVqfpVqgJRre5Roe5JnepBpepFlf5dpg5hqgplmgJlkgplshJpuhpdwg5xvgpRxhZFxgJJxgJByhpBsipBthpBphI9ohIxpgotriZRti5VujpNxi5duiphrjZhviptripRyipN0i5B0jZB1iJN2io9zi4xyjYxyj4tziYtwh4pxholvhIdwg4ZsgYVvkZBtlZJtlo9ql5JsmJFrmpFqk5F1k493lY93kpR2kpZ0lJVykZd0kY53kox5lYl6j4t6jY17i4x8i4l8iY19k4p2lIh1mId2k4hyl4VwlINul4Nvmox0nYp3mo50nY90n45znZF1oJB0oJF1m4x7m4p8nYl9mY59mZB8l5J9lpF/l5R9mYZ8nIJ8l4R8lYZ+loeAk4Z9nIV5nYR3oIR4oYN5nYV1n4Rzn4Fzn4VxoId5o4d6pYV9o4p6oot4pYt7oYZ+oYWAo4GBnoWBnoaDn4SFnoiEoIF+oX5+pHx+n318n3t8n3l+nXp6pH98p397qX99qn59p4F5poF3p4J1poJyp4RxqIF+qoKBqX+Cq36DqYSCp3+Dp32EqXmFpHyFo36GoX2GpH2JqHqBqXiArXaBqXd9qnZ8pnZ9rXqAr3qAsHqCsnmDsH1/sH18sX97sX94tHx4sn11r3uEr3qHsXeIrnyIrnyLrH2Nqn2MrX6PrXSIrnGIqnSJqXeLp3aMpnSNpniMrXKFrXF/q2+CqW6Ep22Dqm2GsnN/snF9s3J7tHSAtXKCsnKDsm99s217sWx4tGt8smp+sWuAsm2Br2qBr256rW15rG93qm92qmx6rXR2rnZ3rXh2rnl0rntzq3x3rH90r3JzsHFxrnBwrnBtsnBxrG9xq21wqG5wp25uqmtxqGlwqGdxqWdzpmVxqHBxpXFxo3NupXB2onR0pHF4p3duqHlrqHlwpXtyp3h0pHt0pnl2pXp2qnRpqXJlrXRprnZqr3dor3dssHlosHltsXprqXBpqG5no25oqGxpqGlop2lmqWhppW5koWxjn2xiom9hpHJgpHNeo3JcpXVdompjoGhjoGdloGVmoWZhpGVioGhnoGhqnmlrnmltomhrpGZqo2NrpWFqpF9rnGpqmmtrm21tmm5vmWptmGhrl2hpl2ZsnW5tnnBunHJsnnRunXhqn3lvm3xvn31tmn5vnn9tmoJtoHVqoXVoo3RnnnJnnHFmmHJlmXRol3Volndll3Zrk3dqlXltkXhqk3pukXpsj3ttmnplmXpgm3xlm31om35kmH5onXhinnhgnHVdoHhgoXpgoHxfo3thm3FgmXFfmHNemG9flW9elG5hkW5glW5jk25lknJllW1nkG9njnBnj3Bri29ni21pjHNqjHRtjXJwinZtindviHlvh3ptiHtxinFuiW9wjG1wjGxyh21vhmtwhGpvg2ttg2hwjWxuj2tukmtxkGpsjmlqj2hokGpnj2ZnkW5vk29wk3JvlHZymXVylXdzmHdzkG13kW15jXF3jnV2inR2jnd2inZ1jHh1i3p1kGx2kGl3lGd5j2d1j2V2jmN0j2B1jmB3lGp2l2l2mmp5mGpznGhznmh0nmxzn2p0mW56mW9+mXF5lnJ5mnF3lnV5lG1/l22Dkmx/kWyBjmuBjWuEi2qEl2qAnGmEmGaBmGZ+l2h+m2uAnmyBnm6Cn2+Dn21+n2p9oW5+oGt6m2+Cm3GEm3GGnHKImXSBlnWBm3aCmW6Jm22Km22Ml22Jl2qIlGmIk2qJlGeHnWyJn2uKoW2Lo2yLoGmIoXGLoHKNnnKNonOJo3KHo3SEpXaGonOPoXSRn3eRnneSo3STonWVoHSWo3aXoHiPn3qOnXqNm3mOnHuLmnuKl36LmniJmXeKnHeIl3qMlXqOk3uMkXqLlXuQk36MkX+Lj36HkoKLj4OKkIaKkoeKjoeJk36Hk32EkHqClnyEmH6Dmn2Dl4CCknmGkHeGjniGjHeFkXWIkXOHlHOGkXGJjXqHi3uHiHuEin2JiH2Ki3yMi32Ei36BiXx+jX+BjYKCj4SBjoaCkIiAjHh/iHZ9jXZ/jnR9kHN9jHJ+hnWBhHaBgnaAhXSEhnKEiHGFhHCEgnuAgnx8gn2Cgn2Egn+FgYGEgoODhIODgYSChXp6hX13g3l4gnZ5gHZ3f3d1f3R4h356ioB6i4J6hoJ6hoR5hoR3hoZ6jH55j312j3x7knt7k3t5k319kYB3koF0kYBwlH90ln92loB4mH11joFzjIFxjoRvioFxhIBygn5vgX1zjYJsjYNqioVrjoFoiYhnhYdmiopmjYtnjYtpj4tqi4xqiIVkh4Bih4RgiIZfhYhehYhchIdag4VbhIhYhH9lgX5khH9ogoBph39pgHxlfntlenxlfnhlf3hogXhpfXhqgndrfXdsgHdtfH1oen5pd4Fpe35sfYBsfoBueYNldoRje4RkfYVlfYZngIVkdoFkdIBicoFjcIFic4JmcYNnb4dncYNqcoFqc4dlc4plcYlhdYpkd4pmdY1jeYtlcI9ha41jbI5lb41mb5VdbZBaapNZZpFaZ5NZa5ZgbpdhbplhaZZiZ5VhZpNgaJFgZJJgb5ZicZdkdJpicpZmcpNlcZZoc5Jnc5ZgdZdedZtcdZVcd5Ndd5FdeZNfeZBeepFfcZtbcZ9cbptbbZ1abp1Xap1ZcZ1fcZ9gdKBgdKJgdp9geKBgeqJdep5heZ1je5tkfZtie5pmd6FZd6VYdp9YdqBVd55Tc6FUdKNac6ZadKhcdKpbcKVbbqdbbKdcbqlaa6lbbKpadaddd6hfealeeaxed6dhfKlbfaxZfqZagKdYgKNbeqpYeatWea9Wd6pVd6hTdadSeahRdq5Zd7Fad7Rac7BbcrJccLFebrBebLFdbLNdaq9cebBbe7JcfbJaf7NbfbBefbNUfrNSgK9Vga5Xg7BXhLFWhbBZebhQd7NSdrRVc7NVcrJTcrRXe7hUfLpUfrtTfr1TfLtXerpYeLpXerpaf7lSgbpQgblOgbtMg7hRhbtVg7dWhbtXg7dYhLlZgLZLfLZMg7NLhLJNhbNJhrJOh7NKirJNfbdIerhIebZHd7VHerpGfblEfrhGerRFebJEdq9Ge7FDfbBEf7FFfa1Ega9Gf6xFga1GeK5Kda5Ne61LfLBOf61NcrNLcLNMdbZNc7NJcbJHbq9HcrNEcLRDcLVBbrNDcaxHcapJcqhJc6pFc6xDcqtBda1DcatLcapNb6ZOcaxQb61Qba1Sa65TbLBVbrBWarFVbalNa6hNaqRLaKlMaKtOZaxOZaxMZKxQbKZJbaRHbqBIbqVFbaZDbqZBbac/a6U+cZ5NdKJMdaRKdqFNd6VLbqBQa5xQbKJRbqNTbKVVaqRWbadVa59Nap1La5tKaplKaZ5JbZtKb5lJb5VLcptGc5hIdJxFb5hNcJdPbZRRcZhScZZUdJhVb5ZVaZZRZpNQZ5hRaZpSZZhTaJVNZ5NLaZBLaJRIZJNGZ5FFYpJEZpBEY5BDZZBLZY1LYI1KZIxOY4pOYolRYoZRYYVTYIZVYINSY4tIYYpHYIdJYohFZIpDYIdDZYhBW4hJWYlJWotIXItHWoNKWX5GWn9MWIBNWIFPVn5MVYFQVH5NUYBRUoJHUoVIUoVKUolHU4dLU4lKU4tLWIRBWYI9WYdBWYg+V4lCW4JBXYBAX4M+XoI5Yn46YXw7X309Yog4Yoo6YYg8ZIs7YYM0YYIyXoQwYYAxYYMtYIQrX4IqYIIoYYYqYIcoYYonY4kmZYslZI0lZ4okXoArXX4qX3wpX3snYXwqY3oqY3ksZXcsZXspZHwlZn8nYXgtYXcwX3YwXXcwYngyYnc0YHMxXnIxXXI0W3E1Xm8xYW8yYmwyYWszYmg0Y2czYWc2XnQ4W3c6YHQ5YXA6Y3I3Ym46ZG83ZG04XXg2XHs3WHk1XXw1WHw3VX03VX83UoA2VHs5U388Vnw9VH8+V3o9WXk/WXtBVoE3VoM4VoQzWIU4V4c4Wok3Woc0U4Y1UoczU4s1UIczT4k1T4UzVIsxVY0xU48wUo8uV40vWYwwW4wuXYsvX4wwX48vYYswU5EyUZMxUpUvUZUtUZUzVZUvVpYtV5QsV5IsWJguV5ovWZUrW5MpXpQqX5QoWpMnWZEmWo4nXI4nWY0oXpUsYJcsYZMvYJkuXpotXZwuW54uX50wZJUuZZczaJUvaZQsapMxY5M2Z5I4YpE3YJA1YZE5X442Zpc9ZJc9Z5s5apk3Z5dBZJpDaZdDa5ZBZJ1AYp0+YJ4/Zp8/aaBCap4/a6BDbJ9Ba509bp5BbZw9b50/Ypw8X5w7XJk6YJw4Yps1X5k9XZY+WZU+X5VAXpE/XJNDXY9AW5BDW45CWphAU5g+V5pCWJlFWJdGVpZGWZZHVZo6Vpk4VJg3Vp06VJ48Vp4+WJ0+VJ9AWJg4V5Q2VpM1W5Y1W5QzXJg1V5M4U5I8WJA7V408Wo86UpA5T486T4w7To84S484S5A6So43UI8+UI1ATopBUI9CUpBCU5JEVJFGVZJITI1ASYxASYhASYo8SYg7SoQ7SYg4T4U8UYY8UYg+S39DTYVFSYJBR4FAR30/Q4E+QYM9QYU9P4I8SX89Sn07THo8S345TYA5TndBU3pDUHxGVHhFUXtIU3lISnhESXdCSHRCSHlGSnpIR3dHSXpKSHhARnY+SHU9R3M8RXg9Q3k+Qns8Qnw6QHw9SnU9THM7THE8TW87TnQ6UHU8UnY8VHU9VXM7VHM5V3I8TG9ASmtBTW9DT3FCUXFFU25ESG9BRWw+Q29CQ3FARHFEQ2pBQmk/P2s+QmZARGVARWRCRWQ+P2g8PGQ9PWg4Pmo3Pmw4P2o1P244QGw0QG41OGI5NGU8M2Q9M2I+OGA8OF46Nl05Nlw3OVw8NF46Ml44MF80L146MFw8MF0+MFo8MmQ2MGU3LWY2LGM2LGc4OGQyOGcyOmczOGMwNmEwNGIxN2gwOGowN24yNmsuN2orOWsqNmgrNW02N204MWs1MG40MHA1MG4yN285OW87OG4+Nmw9OXE8O3I6O3U6PXY4Png4OG5AOG1CN29EOHFEOWtDOWpFOmlBNW9FN25JMnBIMHFGLnBHMHNGNXBOOHVNOHZLNnVJOXBQOG9SNW9VOm5TNnJTNXRVMXZUNnZWOHVYOnNXOHVaO3NZOnNbMnRRMHRQLnRRLnJSMHNOLnNMLHVRKnVSKXNRJ3JSKXdTKnlVKXtVKnhXKHFNKG1OKHJLJnNKJXZLJnRHLGxRK2pRL21OMGpNMGpLMWlPMWdKMmdOMmZMM2RLLG1TK21VK29XLnBYLHNaMHJbJ21UJGxUI2hTI25SInBUInBWIXJSIXJXIXRUIXRWIHZXJmlRJmdQJWNSKGVNJ2RLKmNOJ2JKKmFNKGBLKWRUJ2FXK2RVLGJXLGZXJGVZIWFZI2daIWZcJWhcIWRWH2NVHl9UHmRTImBTI11SIlpUJV1RJ1pRJFtYIltaIllbJlxaIF1ZHl1bHFxZGlxaHV9cG2BdG15fHGJfHFtXG1pWGldWGVZVG1pTGVpSHVhSG1ZYG1NZG1NbG1FcHVJYHVJVG1FUHFFRGlBQG1VdGFRgFlVgG1dhGlZjHVhgFFBjFVBlFU5fFU5dFEtcFUtZFElYElFjEFFmD09mDU9lD1RmD05oDUxpDk5tDkpqDUhrD0lnCk5sCU9uCE1wCEtvBlBtB1FrBVJvCE1yB0t0BUpzBUh0B0x2BEtyAUpxAkluAEhtA0ptBElqBEdqBkZrBktpBEZoBENnBkNlB0FlAkJmB0VkCURiCkdiCUljCERgDEdiDUldEEhhEEZgDkVhDE5eDlJfCU9eD1FcEFNbDVVcEVNYEVdcEFldEFpZElteEVxgEVpiE15hDVtbC11ZCV1aCV9cDGBWDWJVDGRXDmVXCmRYCmZZC2ZcDGhdB2daC2RdDWNfD2RfEGVgDGFfCmBhCl1hClxgCV1kE2RcFGZdFWdeFGNaFGFZFGBXFF1WFF1UEmhcEmpcE21fEWxaEGpfEGtiEmtkEmxlDmljE2ljFWhlF2pkGGtmFmZkFWRjGGVnE2NlF2tiGnBkGW1eG29eGmtdFnJjFnRnE3NiFHRgFHZfE3JeFXBnFXBqGHBrGHFtFG5rFG1tEnBvEmtuHG5rH29rHGtsGmpuGmhvGmxwIG5mInFkH2xkIGpkIGhiIWlmIGZiIWZmIWVkH3JmH3VlIHZoIHhoHXZkIHVqIHZsI3duHnVuHHRtHXdwI3NtJXJuJnFqJXBwI3ByI3JzIm5yKXJtK3FrK29qK25oLXFtLnRuLnZsL3htLnlvK3lvL3twKm1sKmtrKGptKGpvLGlrJmhsJWVuJWNsImhtIGdvImttJWRwJWFxIWFxJmFzJV50JWJ1I11wIVxwHVxyIVlvH1hvIlltIFx0H1x3Hl93HF54IVx5H2B2HWN2GWN0H2V1IGZ3IWh2Iml0Imp4GWFwGmBuGF5sGV9qGVxsGF5zFlx0FV52E112F1p1Fl93FmB5FWN5E2R6GGB7FmR3FWd3E2d0E2l0F2h2GGp4Fmp6Gmt4E2VzEWVxDWRxE2RvEWRtEGZrEWFsD2VpD2FqDmNpDWJnDl9yDGB0CmBzD11xDVpuEVxtDVlsEVtrD1pqDWB2DGF4CmN4CWR5DWF6C2V2C2d2CWh0B2l0DWl2CGZwBmRwBGRwCWZuCmhtB2ZsCWttBWBwAl5yB15vCF5sBl9qBV1pBmFqBV13A1x4A2F3A2J6B1l2Clp5CFh0B1hyBFhyCFdwA1hvB1duBVdtB1d6CFZ8DFZ9B1R+C1R6DVN5DlN3DFN1DlB6DlB9EFN2EVNzElFzE1B0ElZzElZwEVd1ElFwFE9vFU9tE1BrEkxvF1BtGFFrGU9qG05rGlNsGVVuG1RpF1ZtGk1mHE5kG01iGEtlGUlkHU9kH1BiIVFiI1FhIlJlJFNlJFNoIlNpJFZlJldmJFdiJlNpJ1JrKFRsKVZrKVBrKFRvKVZwJ1pxK1ZxLFhzLVpyLVd1KVpuKVxtKVxqKlppK15uKV5pK19lLWBmJ2BmJGBmI2FoI19kIWBpIV5lIF9nK11jLl5iL2JhLlxgLllhL1ljLlhfLGFfLGNeKmRiKmNcLGdfK2lhK2tfK2tdLWljLGtkKm1gK3JgJ3BfJm5eI29eJm5bLXFgL3NiL3ZgL3diL3ZeL3hdLXxeMXZaMHpZKXpeKX1hJ3heJHlfI3tdJHlhIXxeInpiIHxgHn1hKntlLH1lLH5mK3lnKHVlJ3dpJnRmLnxkMH5jL4JjMn1iM3tjM3tlNHphLoBgLIJfKoNhKoVhK4FdLYBbLH9ZL4NbKYJiJ4NkKIRmJ4VnJYFkKoNnK4RoLYdoLYhpLYNqLYdlLolkLI1lMIhiModjMYthNIZhK4piKYxhJo5jKIxfKIleKo1dJohfJYtmIotmIYxnJY1oIopjH4piH4hhH4hfH4xhHY1fG45gHIteHYdiHYRhG4NjGoZfGIZdGYZaGIZZFoldG4haHIhYHYVVHopYHoRZIIJYHn5WIYFaGn5ZGX9WGH1VGH9bGX5dGXtdGX9fGYFVGIFTG4BRGIRTFoVRFoNPFodRGH9PGH1NG35KFnxMF3pLF3tIF31HGXlHGIFLGYNJHINJHYRHF4VJFYRJE4ZJFIhKEYZIH4RMI4NMH4VOHodPHIdOHohRIIBLIn5LJn5JIXxKIHtIH3lHH3dJIHhFJ4JGKYJGJIFDI4BBIX9DI38/JoRHJohKJYlIKIlLI4tIKINMKYFOK4BNLYBOJ4BPJYFRJH5RJoJTLX1KMX1JK3tIKnpJLXdKKnhNLoBIMIJHNINJL4RFMoVCModFMINLMoRNNoNPMIVPL4dOMYVRLYhQM4BONH5POH5OM3xQNHpQMXxSNn5LN31JO39KNn1HOH1FOHpFN31DOYFKOoNKPoNNOYZKOIZIO4hLPIJRP4BSOoJTOoRVOIZTOINXQ3xOPXpOPHlQP3hOQH5LQn5JRoBJQX9HQX1FP3xFQX9DRYNMRoRPRYJQRIZLRIZJQoVIRoZHQYVGRYZFQ4ZESIVQSIVSSYlVS4NTTIRVSoRXSIJXS4VZSolRS4tRR41QTIxPTY9PTZBNTZBRSY5UR5BURpFTRJJSR5FXSJNRR5RPRpNNRJRMSZZPR5FNRpBLQ49LQY9KR45KSo5JS4xJSotGQ45NQI1OPY9OQIxRQopRPotRQolTQJFPPpNQO5VNQJVRP5dSQJlTQJlWQppSP5RMPpVJO5RHQJZIQJdFP5VDQJNEP5ZCO5BHN49HPI1IP41HPoxEQYxDQYtAP4o/Q4tANpFMNZRMM5RNNpBON41RNYxNNpVKNZhKMphJMZlJNplJMpZHL5VGK5VIL5NELZNDMJFFLpRKLJNMLJRQLZBNLY9KK49JLo1KK41HLotJLIpFLZdOLphQK5pQK5tSMJpPKppPJ5tPJJpSJptNJZlMJ5hKI5hMJZZKI5ZKJpZVJJVXJZNSI5FOIZVQKJdWKZZYKplZK5pYKpRZKplbK5tdKptfLJ1hLJ9gLJ1jL51dMp1cNZpeM6BdNaBdNqBbNqBfMpxhM5piMpdiNJZiMZtlMJdhMJVgMpJeLZJeLJVhMpZcNJVaNpRbN5NaNJdYMpdXMZVVNJRUN5ZdOZVeOZJfO5FfOpdgOplfPZpgPpxgPZ5fN5JhN49iN4tgNY9jNZFlNpBnN45nN5JpOIpaNI5aMoxYNItWMopaOY5aPI5ZPYxbP4taPZBYPYxdP4tfQIdfPoxhPIhePIVePIZaOYRePoJbP4FZP39ZP35bQoJZP35XP3tXQHpVQXtUPHpWO3tbOHtYOXtdNnxaN3xcNnxeQXdWQ3ZVQnNUQHNWRXZWRHVYRnhWQnJSQXBRP3JPP25OPWpNP25KQnFLQnRKPXJHQHZIPXVGPndGOWlMOWdKO2dJOGZJOGRIN2NEOGFJOWFLPGFLPV9KPmBHP1xIMmhDMmpFMGRFMGJGLmFHMWBDMWpALmxBLWtDMGw8Lm5AK29BKW4/J25ALHJBKXNCKnZBKHdCKHlCKntCJnpDKm49KG07Jmo7KW05J2dAJWZAKmU+KmI+KWI7K2E/J2hCJmlEIWhDJ2pGKWlHJWtIKmpJI2xCIXA/IW9EHG9EHnNEIW0+IW47IGw5H204IWo5IGg4HWY6ImY3JGc3IGQ1JmQ2HGg3GWU2GmQ0GGk3FmQ3E2I0EmQ1FWA3FVw1EV42E2EyEWIwD2ExDWMxEWAuE2EsE2AqFWEoFWAmDl8yDF8zCmE2DFw0CVs1B1wzCFwxBVw0DWI5DmQ5DGY5EGE7EF88EGU4EGg4EWk6Ems6Emc8E2g+Fmc+FmU8EmdAF2g/GWVCG2tCG2s+HWVBHmNDHWJHIWFAIWFFIF9AHmZGHWdIG2dJGmdLHmtLH2pNHm5KF2dIFmVJFWRLFWhGFmtFFWxGF2tEF2NHFmBIFl5LGF9GFl5EFVxEFmBCE1xCFF9AE11AGGBRHWBNIWBMHlxMFmRQFGNQE2NSFmdQGGhRGGhUGmlVGmlYE2JOEGFOEGBKD2NODGJOD11MD1xKDVpLDFlKEVpKEFpGEldHDFtNCVpOCldPC1dRCVVOCVNPDFFRB1FODVJND1JNEVRNElVLEFBLElRPFFZPFlVOGFVQFFdSEVlSEldVF1VMG1hLGFNIF1FIFlBFFlJEFVJBFlBAFFRAH1VMIVROI1VPJVVOIlZRI1lIJFdEJlpJJ1tHJ11GKVpGKF5FKltEKl1DJVVIJlNGJFFFJFBDJ1FIKlJJK1NGLFBFIlFGH1BFHlJDHlFBHlBHHk5JG09MG0tKHlZCHlY9HllDHFpEG1hFHVxFIlZAI1U+I1M6JlY+J1g+KFQ8JlpAIk89IE49H00+I00+KEw8KE8/Kkw9Kk4/HlA7HE87G084G1E3GlE9Gk43GU41Fk81FlAzGEs0G0ozHEoyG0k1FU83E1A4ElQ3ElA6FFE8GFc1GFU0GFg6Flg8F1k+FFo7GFk1GlkyHloxGVwxGlwvGV4zHVo1IFo1IVk0I1kzIFo4Hlw5H185HVw7HmA6HF48HGA8IVY0I1QzI1UxJVQwIlI0IVYvIVYtJVgrH1csI1ouJFwtJ1wuKF0tI14uIV8tIV8rH2AuKloxLVkvKVk0KFs1LFg0Kl01KlcuK1UtLFcrLlYpKVMrK1kqLVspL1wqMF4pK10oMFssMlstNF8rM1kuNlsqOFwpOFonNlknOlwqOlomOlgkPVclP1glO1kiO1cgOFohPVQmP1MmQFIkQ1IlPlEoQE8oP1IiQVEgQlMfQlMdQlUgQ1cfRlceR1UfQ1ogR1gdSlgdS1gfTFkgS1UfTVUiTlMhTVEhTFQkSlclSFckS1gmUVMhUlEgUk8iUU8kVVIgVlMhVE0iVEskVkwmVUsoVUkjU0ghUUgiU0kfV04lWFAnV1IoVFIoW1EmXU8mXU0nXk8kX0smYE0lWFQoVlYoVVcsVVcmU1UqUVQrUVQwT1IqTVIsTFMuTE8sS1IvS1AuVFIuVVIwVlQzV1AwVU0wWFAyVU0tV1UwWFcwV1oxWFwxWlgvU1sxUVszUFwzUVsuUV0tUV8uUl0rUlk0UVk3U1w4UVY3UFQ2UVI3TlQ2UFo6UFw8Uls+Ulk+Tl09U11AVFxBV10/WVtCW1tCW1g/XVpEXFhFXlo+X1k8YVU7YVs7YF08X1w/YFY/YVRAYFI/YVA/YVRDXFA/XE07WVE/WVJCWE8/WlBEXFE6XFE4XU41XFM3YUs4YUk2ZE45Zkw4aE05a0s4bU05YEo6X0g7XUU4WUU0V0o3VUk1VEw6XEgxXUUvXkowXkouX00tYEktXkAxYkM1ZEU1ZEUyZUMxZEcxWz81Wj0yWj83WD03WUE4WUAyV0AvWD4sVkIvVUIsVEMxW0EtXEArXTwpXkEqYEEoYUMoY0MlZEUkXDcsXjcxYToxWDctVzcrVzUqVTkvUzcuVjgxVzkpVzknWTgmWDckVzwmVT0nVD0oVD8lWzgnXTYmXDIkXzcnYTUmZDYmZDgmZTQoWzMoWjEpWDAnWS4mWTArWzAtWjAwXS4tVzEmVS8hUzIlUTEjUTInVzIiWTIfWi8dWjQfWikfXSwjXikjXy0jUikhVSglVSYmVyQmWCIkVSceUycdUikcUCkaUiscUi4cTy4cTi8bUi4ZTC0fTSwjSiseRyseRiofRi0cQysfRC0dSi8iSi8lSCsmSDElSisqSCsrRi0rTCwsTS4sTC8pRyktRSkuRSswQy0wRScvSy0zRiw2QSw1Qik3STA1STM5SzM0TDMyTTU2TTUwTjI+UDI9TC8+Sy9BSi09TTQ/TjZDTDVETzg/TTpAUDg9TTw/UDZEUDlIUTpHUjVIUjVLVDNMVTJKVDNOTjxKTjxNTjtOSz1KSjxISz1FS0BFTz5NUD9QTj9STj9UUUFQTD9RSUBSST1TSDtSR0FQST1VSDtXRjtYRT1ZSjlYSjpbTT1ZSz5dRDlZQjpaQjpdQjheQDhZQDhXQjhVPjhWQzxeQzxhQDxiPzxgRD5hRz5hSEBjRkJjSkFjQDtkPj9mPzloQDppPzdnO0NqNz9oNz5qNj5mOz9rPEBuP0FtP0NuPD5vQEBsQ0FsREVrRD9qQUNoQUVnQUlnPkdqPklrP0ptQExuO0lsQUhuQ0hwRktwQ0ZxSEtsR01rSE9rSUlqSkdqS0ZsSkVoRU1qRE9pQlFrQVNqQk9nQVFmQ1FuQlJvQ1VwRVVxQlFyQldvQllwQ1h0QFtvRVtyR1t0Rlp5SV10RF13Q115QVt6QVp8QV96QmJ6Q2J9QWF/QFp4P1d4QVV5QFR7Pld2Q1V4RFN5RVR8RVJ9RlN3RlZ8R1d+RVWCR1l+Sll9SFqBS1x9Q1eAQVeCQFSEPlmBP1OAP1GBQVCCQE6EP09+PVB9PU96Pk16O095RVCFRU6HRVKGRVOJQ1KKQ1GMRlWJR1aHRlaLSlWIQVKJP1GKPk6NPFKJQE2JQEuJQkiNQUmHQUeHP0WIPUaIP0OHREyLRkuNRkuRSE2MQ0+SRFGTQ1KVRlKSR1STRFeRSlSSS1aTRliURVqUR16URFuWSFuRSl2QSmGOTFuPTl2OS1qNUFyMR16ORV+MRGGORGONRF6LRF2IR1yIQluHRGGQQ2KRRGaTQWGTR2OTSWWTSmmSS2SUSmiNSWeLSmaKTWiNT2iPT2aRUGqQUGeTUWqSR2mLRmiJRmqGRmyHQ2mKRGuLRmqNRmmER2qCRWmARWaASWqBSmx/S2uDRGp+Q2l8R2l7QWp7RmZ3SGd0RGR1QmR0QWZ1QmRyRmp2Rmx0SW11Sm1zRW50RW93Qm10SW13TG14TWt5T2t6S296TWd5UGR3S2V5S2J6TGF3TmJ7T2d1UGZyU2ZzVGVxT2dwTWZvTmRtUGNuTWRrVGd1Vmd1VmN3V2l3Wml3Wmh5W2p2WWR1WmF1WV94XGF0XV90YF9yYWFyYF1xXGJ5XWF7WmB/X2J8WWJ8V2N+VGB/VWV9VGZ/UWV/VWaCVWB7U156U1p9U114Ult3T1x3U1l2Tlp2UVd1T1h1TVZ0V1t8WFl9V1l/V1iBWll8W1l6XVl5WlZ5V1yAV1yDVVqGWF+EV1+GWF6IVWGHV1+KVWKJVWGNU1yDUFuDUFiDTleDTl2CTl+ETV+GUGGDTGGHT2OFTmOHTmWIUViBUVWAUVGCUlV+UVN8U1R6UVF9VVOFVFOHVVKJWFOFWVOCW1OCXFOAXFSDUlWIUVWKU1aOUFOLTlSNTlaOTVKNVViLVlmMWVmPWVaNXFOKWVKPYE+LY1OMZVKIZlWKYVCIYU2HY0mHYE2EXE2EXEuCZ0yMZ0qNaU2IaU2FaEuEak6EaEuBak6BaU2AaU1+aE6PZk6RZ02TaVKSalKNYk2TYlCUYk+XYkuUYEuWYEuYXkqVYlKTYlSVYFWUX1WSZFWVZVaSZ1iTZ1mVaFmRX1eVXVmUYFyTXFqWXl2PXV+PW1+QXlyMXlmJYVqMXmGPXWSPXWWNXmWLX2WRXmeSXGiRX2iUW2eNWmiLXGqKXGuJWGmLV2iNV2mJVWqOXmuMX22MYW2IYW2OY2uLZWqJZWaHZ2mKY2mFYWiEY2eCY2WBX2mDXWeEW2iDXmSDZGmAZWl+aGh/aWd+Zmt9Z2p6amiDa2WDbGSDa2mFamyFa2yDam2HaGGEaGF/ZmCEZ2GJY2CIZmGLYmGKZGGMY2GOal6Ba11/aFp/bVx/b12Ab2CAcVyBaFx7Z1p6aVh5all3ZVt4ZFl2ZF15alR5aVJ3ZlJ3a1N7bFB6bVB4a097alF1a0x2ak9xalFwalRxaVJualVvaVRtZ0l2a0d2ZUh2Y0l3ZUV3Y0p6aUdya0Zxa0pvakVvaEZubERtcEpwb0lsc0lwckdycEZycU1tcE5qckxpck1mcVBqb1Jsb1RtcVRub1ZrdEtqdUpodEhndUdld0lqeEprc0ZocURnb0RjcENpckFqc0Jscz9pdUFtdD5qdT9sbkdmbEdka0pka0tmakZkaEZmZUdlZ0NoaktjaU5jZU1iak9hZk5mZE9mY1FoZVFqY0xoYExoX0poYlNnYlVpX1VqX1ZrYldnX1dlXlVlXlllW1NqXlFuWlFpW05pWlJuWlJxWlByWk90V1NyV1ZwV1R0WVhxWU5wWktwXEtxXUlyWUpuVkpuVUxuVUhtXkxwYExxYU5zY05zYkxuZEtvZUpwZkxtXlF4YFR0YlVxYVdxY1huYlpuYlJ5ZFV8YlB9Y1F/YE59YVZ+YliAY1eCYlaEYFmAYFyCYl2AXl2CZleFaFmGaFuFaFWEaVSGalaCaFmIalqJbV2IalqMbVmHcFmGb1SGclmIcleKcVeCcVSBc1OBc1GAcVV+c1d+dVZ9c1l+dlKEdk6GeFOFeVWEfFWDfFKBflKAck6Ib0uIcFCKcVKLclOKb1ONcUyEcEuDcEaDcEyAdEmEdUeEd0eCeUiDd0aAeUZ+eEh9dkh8eUN9ekl7eUt6eUp3eEt2e016fkx5eUh3d0V0eENzfEZ0fEZxekZwfkZwdkV2dEN2cUV5dUB3dD52cT52dTx2cEJ3cEB8bD94aj96a0B1bUN9bUN/bT+Aa0SAakZ+a0V8cEGCcT+Dc0CEc0KGcDyFbzqGbTqKcDiGbzaEcDSEcDOGcTKCcDyJcD6Mbj+MbT+Ocj+MdT6Mdz+Md0GNeT6Ma0KKZ0GKbESIaUaIbkWJZDyJaDyFZTuEaT2DZzmMZjuPZjqQaTeNZj2OZj+QZECQYkGRaECRYUKNX0CLXkGKZEaMYkePYEmNXz6LXj2KWz2KWj2JXzqKWz2NWD2OVUCNWT2RWj+SXECQWkCUWESMVkWJWkaNWUiMWEqOWkqLV0yNWkyKWE2LV0+LWEOGVUKDW0KEXUaFX0OEX0aFYEGDY0WEY0CDZEKDVD6GUj+HUD+GVDuHUkGJUEKKT0SITUWIUEOMTkSOT0SQUUSRTUWSUUeFT0eBU0iEU0qGVkuFUkyFT0KBS0J/UECAUD5+Tj1+UUB8TEGDSUGESEOERUOESUCGST2HSDyHTD2HSUWER0iBRkqBSUmFSEZ/R0d9SUl8SEp6RUd8S0p9TEx9Tkx5TU1/TE+DS1B/Ukl6UUd5T0V5VEh8VUp9VUV+UkZ2UUV1UkJ1VEJ3UkVyUkNxVUZyUkB0Uz50Vz10UTxzUTxwTz5vTj9wUD5sVj9xWD9xXEBzWEBuWUJ0W0N1W0J4XUJ4WUZ2WUB4Wj96XTx7Vz57WD2AWDp+WDyCWDiAWDqCWzx3XTp2YTl3XDl0WTh0WTd2WDhyYj51ZT54YkB0YkBxYj5wY0FwY0B8ZT1/YUF9YUR9X0V+Y0V9Yjl9ZDh8ZTZ8YDh+Xjp+YDaAZjd4aTd5ajZ4Zjl1aDdzZjZyZDRzYjNxazh8bjV9bDp+ajOAai9/aDOCZzWDZjSFZDSEZjWHaTF8aTB6ay95ay13ZzB4bTF5bzB4cDJ3cjN2bzR4cDd3cDd0bjdzcThzczhvdTlwcTxwbz9wbTxwczZudTVtdTZqdDhqdDJscjJqdzZpeDdndjdjejdmfTdnfTZpfzdrfDRqdDVmczRkcDVicjFlcDBjcS9hby5kbjllcDtkcD1kbjpnbThpbDZobThrcDphcTxgcD5fcEBgcjtebj5ebD9ebUFcbkNda0FgbkNYbUZWaEhaZURXZERbZUBaZENeZT9cZEBeZklXZkxYY0xXYktVZ05WZ01UaU5YakxTYUxZX0xYXU1UXk5aX01dXk5fXUxhXE1jYE9VX1BSXk9PYVJSYFNPYlNNZFROZlRNaFVOZ1JLYU1RYUtPY0lPZUpPZ0dRaUlOXUlRW0dUWEZVVkdWWERTWUxRV01QVU1MVk9RVk9TWFFQWk1KWUtJWEtHXU5KWUdJVkdJVUZHWkRKWkVNXERKVUhLUkhLUElHUUlNUUdPUUdRUEVTUEhWUENXU0tIUk1GUktEUUtCVE9GU1FIVVNJVlNHVFRLVUlBWEhBWEc/WUdDWkY+UURCTUNAUUJFUURHU0FFTkZDS0dDSUg/SklETUk/TUo9TEg5T0w8T049TlA7T1A/TVI8TlI+T0Q6TEI3UUM7UUA5U0Q6SUE7RkE4SEE+RkY1RUc0REc5Q0c7QUU7QEU5QUM9SEY1SUYzSEQvTEczTEk0TUcwT0o0SkIySkAxRz4vSz4zTj0yTj0wTz8zQz8yQD8vQkA1Pz02PkE0Q0IvQkMtREMrQ0MpQkYuREcuR0EpRz8oRz8mSkIqS0QqTkQqT0QoUEMnUEAoUUMlRTspQjomRjkrSDksSjkpSTYoQTwpPj4nPkAoPTwrPzgsPTovPT4lPUAjOkIiP0AhQT8iP0IfOT4iNz4hNT4lNzwfMz8hLz0gMEIjMUMlM0QkMEQnNEYmMUYoM0coNEgpKzsiKT0hKj8gKjolKTsnKTsoJzshJTwgIkAgIzsfJD4kIz8lJEEmJEIoIj4nJkIlKEQmKUUqJ0YmLEAqLj8pLj0oKj8sMD8qMjsrNEArNDsoNTgoOTkpNTclMzgkNjUlNDchNzYrOjEtODUvNzcwNzgzNzozNzs2Nzk3Nz02OzMqPTEpPy4rPjEmPDIkPjIiQDEiPDIgQDIsQDUwRDMtRjIuRTIqQTIyQDM0RDI2PzE1QjY2Qjc8Rjs5RTo1RDQ+RjVASDVAQzA8RDBBRC48RTZCRjdERjVGRDVIRTlFQjlGRDtDSDRHSTNJSjRLTDVLSjFISS9HSy1GRy5JSTRNSjVPTTJPSDVRTjVRUTBTUjZSUjhRTjJVTjFXTixXTDJYSzBaSTFcSzRdTTNeTC5USyxTTipSTihTSixRRy1SRS1QRixUTytQUSpPVChRUitNVCpMUCxLUytTVStVVSdXVS1WVi1YUSdZUSRXUSNYTidZTilbUCpcTCpbUSVVUSNTVB9TUCNRTiBPUiBOTh5OUh5NUB1NVSNUWCJUWCFWWiBWWiRTWSZRXCdRXiZQXyZOXidMYSVOVx5dVyRcWSVdWidbXChcWypdUx1bUxpZUhlZUB1bTx9dUSBdTR9dVRpYVhhWWBhWWRdUVBlUUhlUURZUUBtUThZUThpUTRhUWhlYXxlVXRZYXh1TXx9TXiFSXB1RWxpQXBhQWRpPXBZPWBhOWRZOYSFWYyNUZCJSYyFYXyBbYh1aXh9cYRxcXx1dXRteYyVUZSdTZihVZilWYylSaShUbSpRbSdWbylXayZYay1TbC9Rby9OazFRaTJRaTVSajZQazhNZzdOcC9Scy9SdC1Rdi1QdDBUcy5WcS9XcTBZby9WcytQdipLcidPciZScyVNcSRScytLcytJcS1Iby1JcylHbyhIcSVGcC5GbC5Eay9CbzFDcTNFczNEcDRGaypDZipEaydDbSZCbihAbiRBcCc+byNAcCU+ciQ8aCtHZitIYi1IZyxLai9KZzFMazFLYzBEYC5DZTJDZjRFaDVEZTVHaDZGZzZHYy1BYitAYCpBXylAZCo+YCdEXCdFYSZHZCVGZSRHZCREZyNGZiNEXCxHWCxFXS5KXC1MXzBLWi1AVis/Wy4+WSY/WyQ/WSE9WSBBWR49WR5BVxs+VSVFUSZFViZIWCRIWSRLWCFHUi1EUy5GUTBHVS5HUCg+TCY+USg8SiFBUCBBTx5CUh8/SyRFRyRFTCVISiZJTSRJSSdDRyhCRiZARCZARyU+RiQ8QiE9RyM6SSI7SCU5RiE/RR5AQh9CQR5CRh1CQyJDQSNEPSNEQiVFQiRIQyZJQCRJPyRBPSU/OSI+PSY9PyU7Pik+PSQ5PB49ORw/Ph08OhxENhxFPBxGOCBFNSFFNSNENSVFNSFINh9JNB1KOB5KNBtMOBxLNhtMNxlOMCZBMCg/MiM+MyE+MyBBLyZDLSdDLilFLCtFKyZFKCZEJyhFJSlFJClCMClFMStHMyxGNC5HMSpJMixLLy1MMitONixCNzBBNitANCs+NS08NC47Nyw7MzBBMzJBNTZCMDNALzJCNDNFNTVGOTdHNTRJNTVLNTRNNDJNNTZPOTNFPDRFPTVDPzZDPTFFOzRBPDY+OjlAOzU8ODU8PDU6Pjk9Pjw9Ozw5QD08Oj48OD87Nj48NT8+Mzs7Mzo+NDk/Mjk5MDo/LjhBLDlAMTtDLz1DLj1FLz9BLD9FLUBCLEFEKkJELTZDKzZDLDdHKjNDKDdHKDhJKjdMJTlKJTlMJTxIJzRLKDJMKTNPKzJPKjFLJzRQJzVSJzJVJTdTIzVTITZVIzNSKjRVLDJXKjJZKzFbLjNXLzNVLjVYKTRaJzRcJjJcJTFeJjdcJTJaIzBaJC1aIytaIjBXJy1ZKCtZKShcKyxYLSpYLCdXLiVYKipgKCxiKSxkLSpgLi1gLilfMC1iJixhJC1jJCtlIiplIi1hJixmJippJStqJC1qKSppJCpsIytuJC1wIy9xIilwISdvJy1wKC9xJzNwKy5xKyxvLixuLy1vLyptKDFtKDNrKTVsKTdtJTRrLDVrLjdsLjtqMDVrLThoLDpmLjtlMDplKjxnLj1kMD9jMT5hMz5gMDxfMTtdNTheMTxbNjxeODtfOTdgOT1hODdkODNjNjdmNzloNjVoNDViMzNgNTBdMTRgNjRdNzRbOjNbOjFZODZaOzNdPTJePi5dPzNgOy9fOixgOSteOildOC1iOC1cNyxaOilXNi1YPCxYPixXQChWQC5XPylaQCdbPyVbPyNaQSdePihfPCVbOyNaOyJYOyBXOCRbOyRWOyNUPiFSOyVSOyRPPSdSOSJPQiJUQiBVRB5URCRVRiRURiVRRiJPQR9XQRxYQRhXQBxbPh1bPBxZPR5cPhlTQBhRPxdQPBpSQhpRRBlQRRdRRxZQRRtPRRdURxZVRhNVRBJURhdYSBJWRw9WRg5YRQ1YSg5WSw9YSw9URhBaRQ9cRBFeRRNeRw5eQhFeQRNfQBNiPxJjPxRbPRZfPBRaQhVjQhVmQRllRBVnRRNmRBZqPhdoPRpoPhtqPhpsOhloPh1qPh9sOx9tOyBvPyFsOh5sNx5tNRxwNR5rOBpuNxhvNxZuNxZsOBRvOBFuOhFsOxNrNhBtOg9qOw9oOg5mOA5mPg1oOw5kOg5iPA1gPg5fORBhOwtfPQpdPAtaOgxaPAddPgtZPgxXPgtVPwlVPw5WPAtTPAlRPwxPOgpPOQ1QOg1TQAhPQghOQgpLRAtLQwZNQApKQBBIPwpGQAhFPgxEQghEPQ5KPBBLOxFJOhNJPRJMPRFPOhRPOhJSOhBHNRFHOBBBOA1DNhNEMxREMRNDMhJBMxdEMRhELxhCMBhGLxJELhFDLBJBLBE/LBRBKxY/KxY7KhhALxY9MBY7MBQ4Mxc8NBY+Mxo9MRA7NA86NA44NRE6OBE6ORE8ORI+OBQ4Ow87PQ89QBI8Pw08PhI/PxVAQxZAPhZCPBdBPhVEQxNCRRBDRA5ERRRFSBRGShRESBZITBVGSxZIRxdKTBdJSBhLSxhLSA9DTA5FSQtBSglCSQdBTAhCSQxISwxKTQpKTgpLSQtMTQlITwdHUQhGUwdGUAlEUgpCUwxCVQ1BUQhAUQ5CUxJDVRNDTxJCThE/ThE9SxFAUxFFVRJHWRJHVBBKUhFLUBFKUhNNThJLUBROThNNWA9FWg5EXRBCWgtEWRFBWhI/XRZAWBM9VhM+WBE7WxdEXxhFWRhGWhlIVhhFXRRGYBRHZBVFXxFHYBFKXhBMXA5LWg5MWQ9OWQxLYRNCYxNAYxZAZhdAYhI+ZBA+Yw5AZQw/ZApBYho/YxtBZRxAXxs/Xx4/Xho9ZBxFaBxGYxtHYR1IYh9JXx1GahhEaxhBbRdBahVFbBRFaRlAaho9bBs9bB0+aBs8Zxk7ZBo5ZRw3cBw8cSA6cho6cRg7bhg7bx44ayE3bx80biEycCMxciMybyQvbiQ3bCU4byg3aig7aiQ7bCk1bCs0bC01ay41aysxbCkuaScwby42cjE1cC86by07cTE7bC48bzQ2cDU0cDg2bzYycDgxbzMwcjk2cj00dD0zdTw4dT45dz87d0E9dEE/cT81cEEzc0Iyc0M0bkIzdEIwdEYtd0ItdUIrdz8udkcxeUsyc0oydEk1cUo2cUg4cEw2eU8vd1EyeVAte1IteU8qe1I0elU0e1YyfVI2fU83ek04e1A7eVY1eFk1eFk5dlkzdFk1dlgxeFw3eF45e2E4e2A8fWI8f2E7gF86gWM6g2I4hl85hGU3gWU0gmg1f2YzgWo0f2gyhWI8h2E+hmFAhWJBiWI9iWQ9iGBCiGFEiWVDimBGil1GjF1Ii1pJjVlLhmhGiGlHiWtHhGhHgmdFf2hHf2lJfWdFiWdJi2hKjWlJjmhIjGZMimVNjmxJj21Ikm1LjHBHkXFHjHNHl25Gl2hIlWZJlmRIlWdMmW1KnG1GnW5Mm21NmmxMn3BHom1HonJFpHJHpXRGpHZFpXhFomxDo2pEpWlBpGpAomhEo2VFoWNFn2NGnWJFnmBEm2JGpmhCqGdAp2U+qGM+qmZBqmVDqmVFqmJDpWU+pGI9omM7oWU6omE/oV89omE5oWE3nmA4nGE2omA1oV02oVs0ol04m187l2E7nF09nVs8nFk7nVc6nVY9m2M7mWU8mWY4m2c9m2dAm2VBnGlBlmc6lGg4k2w7kmQ4kGg3kGM4lGw3lG83kG83lHA0knE6j3I7jHM5kHM9jnM+jnNBkHRCjXdDkXhDj3Y2kHY0knQ0j3k3jHo3ink4iHo4h3s1kHcykXcwlXYwkHgtkngrkXkpk3gnknollHowl3owmHozmnozl30wln4ulnwslYAul3k0mXY3mHQ3lng5lXs5lX04lH85kno9kX88kHs+kH4+m3Y3nXQ3nXQ7oHU2oXM2oXE1o3M3nHE5nG87nm88n24/m206nG04m283oG87o3E9pXE/pW46o3Y+oXhBpHc8m3VCmnVDm3g+nHo9nHo7nH4+nXw6nX47noE6mnBCmHBBl3JAl25BlW1Ak2tAk2tDkmo/kmZAlGY/jWo+jGtAi2s8i21Aim08im4+kWRAkmJBjmBBk2FDlF5FlV5BkV5AjVw+i1w/jltCkFpEjVw7i1w6ilo5i1g5jV03j1w4kFw6hlg5hlc2hVk1hFk6hFk8glc6h1U2hFQzg1I0iFIziFExi1M0g1Uxf1EvgFYuglItgk8shlAqgE8qgFAogVAmgFMoglEkgFQmgVMkgVUihkwriEwqhkomiUorikouikwmjkskik4ji04giFAjjEgijkgdjEQgjkMfkEIhjUAekUgfkkkdlEgclUYdlEwdkk4elUsglUgamUgXmEkVlkQXlEUWmEMWm0kYnEoWn0oXoEgXm00WoEwXo0wXpE4Yo1AYpEwVpU4aplAcqk4bpU8eo1Afpk0fqlIcrFIcrlAfrVAgrVQdrFYbrVkbrlkdrVoZsFAesU4gtE8gtU8esUwgtU8it1AiuFMhtlQhulMhu1Uhu1Yeu1gdvlYhu1Qdu1QauFQZuFQXvFIZu08atFQas1MWs1YatE8Zs04XsE0Xr00ZtUsXr00VrEkWrEgUq00Tq1ATqlARqlEVq0kYp0YYpkgZq0Uaq0IarEEYqkAWqj0XpkQXo0MapEEbo0IVpEMToUQboEQdnUQdnEUcoUUfpEUgoUgenEMfmkMfmUMimkEjmEEemT4flzwelzofmjkgmEQil0UllUYlk0cjmUYmmkglnEomnUkonUsllEYnkkoplEoqkUYqkEQqj0MsjkQokUwokU4oj08qjU4pklAmklInlFMoklQkkFAsjlEtjlYtiFUpilUmh1cojFYmiVkuhVwtiVwxil4wjFsxhFwwgl0wgWAtgF4yf1szfl8xflw1hGEvhWMvhmMshWUqhmUwh2cwiWgyiGg1h2EsiGEphmAnh2Alil8qjF8rjVsrkF0sgl4ngV4jgF0of1snfVooe1kneVgoeVgrd1cngWElgGIjgmMhgWIff2UkfWQlhGMihmQgiGIdiGUiimUghlwbiFshilgfhlcgilYehlUeiVQegVwcgV0agF0Yf1wef1ogfVohe1sgfFgjgmAagmEYg18UgmQZgmYXgmgYgWoWf2oVhmEXiGAVi18XimIUiGQTh2YTiGMQjFkXjlkYiFgXh1gVh1sVjVkUj1kTkVsUk1oVj1gRjVgQkFYQjFYOkF0UkV8Ukl8XlGAYkGEUj2ERjWARkGIQkF4ZkV4blF0djl0cjlsgjl8gjlsjjl8jjl0kkloblFgbl1kamFgck1YakFMaklQel1oYml0ZnF0ZmVwVmV4amWAcml8enGAfl2IcmV0fmlwhnVsjmFohnVofn1ken1cdoVYdnVUanlUXnVcXm1Mam1Idm1AdmlQfm08fmlMhmlAhmk8knlMWn1QTnlATolQTnVIQnFAOmk4Qm0wRnk8NmE8QlE0Qk04PlVAUk04Vl1EVlEsRkkkPkEoQj0kSkkcQj0wPjE0QiUsRi08OikkPiUcPiUURiEQRiEYMh0gLh0oLhUcJi0YSjEQUjEYWjUUYjkMTj0IRkUERjUARikcWhUgZiUsYjEwXiU0ai08WiEYchkUdhUcfhkgghkMdhkEbhEIfhz8cg0gfgkkhgUcjf0YjgEsggU0fgE0cgVAbf1EZgkglgUcpgkkrhEUoh0Img0Emf0cqfkgsf0cugEUue0gse0cpfUYpfkgwf0cze0Qyfkg1f0c3fkk5f0g7f0o9fUA0fD0ye0A1fEI6eUQ4fEM8eUU6ekY+fz4ugDwvgT8sgEIsfjoufzcvgTYtgTcrfTYvfTMvfTMyejIvgzUvhTQthTEuhTEwhzUthzcsiDcqhjktiDkohzsrhzsphjAtiSwsii0qhSsshSkthCcsgigrhCUtjSotjCgtiycrjisvjy4vjS8xkS8wjSYvjSQviyMwiSQwkCMwkiUxkSYzjyU0kigzjCEyih8ziCA0hyA2ix41jh00jhwyjxw2hiEyhCMzhSU0gyY2hyY1iCoziig3iyo4jio4jyw5kS03kSw1ki84hTA2hjA4gi01gCszfis0fCkzeikzhjI1hTY1hTYziTQ2izM3ijM6izE7jzM8jjA+hDg2hDw2hT03gTo3fjk2fDk5fTw6hD00hkAzg0M1hUExh0MwikEwh0QuhkM5hkY4hUg5h0M7iEY3iUk2i0g0i0Yzi0o4jEw3jEo0jkoykEkzkkkxjkwxkEg1kkc2kkY5k0Y6j0M7jUE6jkU9jkM/jkVBj0dBjkRDij0+jDs5jTw3jjk2jDw1hjs+hTg9hTc7gzw+hD4/gUA/fz8+gUI/hTc/hDQ/gjQ+gDU+hDNChjREhTNGhDVHgzVKgjI8gDI6fi85fy49fiw9fSs/fixBgCo9gCg5eyo/eilBeidCeiVAdypAdiw/dS5BdC9Bdi1EeiZEeCNFdiNGeyRIfCJJfSBIfSNLdh9Ddh1FdxxFdh5AdR5HdRxJcxtJcRxJdR5LeBtOdh5QcxhKcRdKcBhOchRKdBVJdRdJbRdMaxhOaxhSaRdNaBdKbRVQbRRTbhZWbxFScRZTchhUcRpVcRtXdBhTdhZSdxVUdRVQdxNPeBJRehBQbh1UbB5YbB5SayBSbh5PaxtWaRtYahpaahtcZxlXZhpVZBtVZhlTbBlabhlcbhtfcBdccRVgcxhechVidRhgdBdicB9dbiBebiFgcSBbdSBYdSBdaiFeaSJiaCFcZCFfZSRcYiNgYyZdYCZfaR5gaB1jah5naBpiZhphZRdhYxtibB1kbh1mcCBocRxlbyRlbidocCVjcCRhaSVoaShnailoaiVraSNsaiFraCNuaR9taCBvaCdlZyljZStkZS1jZylhaSpfaS1gaSldai5eaitbay1cbC9aYyplYStlYCpoXSpoXypjYSlpYShsXyZrXiVtXyptXyVpXSNoWyJqWyBrXyFoWiRrWCNsVSJqVyZtViBtVB5tUx1vVB5xUxtvUhlxVRhxURdwThdwVRh0WBd1WBV0WxVzVxd3VRl4Uxh2VxNzVxFyWRFwWxBwVQ9yWBJuWRJsXRRqVxNqVhVrVxdqVBVrXhduYBVvYhVuXRlwXBtvWhpuXB1wXxNwYRJxYRBvYw9vYBBzYBJ2YBB4Yg54XhB5YA9tYA5rYg9qZA5pXg1qXA1rWgxqWgtoWAtrYhFpYxNoZxNoYhVnZhNraBNsbBFsZxRvaRNxbBRxbBZwbRJyaQ1sagxqbAxpaAttZwlvZwtxZgdvaQ1oag1mbg5kaA5kaQ1haQtgag9gagteaw9dawxdbhJnchFnbhVocBZpbBZncBBqcg9rcw1qdQxqcQ5ucQxocgpndglkcAhmbwZobQVnbAVlbARpdhBgcg1fcQtecAlfcQpcbwhecAhcdw5jeRBkfRFiehBmew5gfQ5ffhBbfQteewpdewpaeQleeQlaeAlcexBdexRbdxNbdhFacxFadQ5XchBZcQxXfBVdfhdegBhafxdgfRhiehdifhlkhBRbgxRYhRVXhRJchhNehRRgiBJfgRNYgBNVgRZSfhFVfw9WfA1Vew5VfAtWfhlVgRtSfRpWehpWfR1WeRtZhRtWhxxShhtYhRtaiRxXhR5bhRhThhdRhRhOhhlNhhRRiBNShxBShg9RiA9TgxlOghpMgx1KfxpNfhlLfBdLfBZNexZKgx1OhCBOhyFMhCFQgSFRhSNQgSJUiB5Oih5Nix1LjB5JixxPjhtOiRtKihtHih5EiBlGiRZHiBRGhhVFiBJHhx5GhiBFhCFGgSJDgyVFgCRCgidEgCdCiSNHjiZFiyVKiSZMkCFFjyFCkSFBkR9GjSFBjCE/jSQ8ih8/iR88hx08hR49gx87hB85gSA8iCg+hyo+hiY9jCxDjy5DiytGiCtGiy5HhypIkytDky1FlS5FlCxBlCs8kyg/kyxHky1KkS1LlytKmSpLmStNmClPmyxKmy9JmzBLmi9Hmi1Omi1RmC1SmCxUnC9Sli5SlC5TkytTkitVki9RkzJRlDJPkzNTkypRkihSkyZUkiZQkSRQjiNRkSJNlyZWlidYliVamSZVmiVTmSNSnCZSlilYlSpbkylckylelS1amC5amDFZmjJZmzRZkSlajyhbjiVdjShYiyZZjSpYkSFbkiFdkR9fkiBZkh9Vjx5XlCJelSJgkyNikyJklyRgmSRikiVhkCZjjSRmjyhijSNiiyFiix5liiBghh5hiRxghRxiiBpghRphhBhhkBxlkB1nkBxpkhtkkhpikBpglBlhkR9okSBqjyBukiNqiiFsiR9rhx9riSNriiVsiSZujCdriihvjCltiRpqiBpthhhtihlpiRpviBpxhhtyhBp0ihpzihl1ixp3iBh1hR1xgx9xgRxwgyFwfx5yfB1yex90fCF0fyB0ehtveRtseB5pdxlseBdudxhqdxVudh5tdSBsdiNpcyFuciNtcSRwcyVxdCRzcyFzdiR0eCNseiVsfCVueyZwfCdyfydxfCd0fCJpfSFnfCFlfSJjfh9ngB9pghxpghtngxxreSFleCFjdSBkdyhkeSthdypmdClndCpqdixqciprfylffylkfy1mfipofSdafSJdfyFefCFbfh5eeidceClbeixZdCdcdSxccihdeyxcfC5cfi5afy9Zfi5efTBgey9ifTJhejFjezJjgStYgitUgihYhSZbhipbfitVfStSfi1ReypSeiZReSdVeSRReCVVeSNTfi9SgjNOfzNTgDVSgTJVhS9PhS9Lhy1QiSxPiy5PiipQgi1MgSxKfixIfilMgihLfTFJfzJGfDJLejFNei9NejNPezJGfDNDfDZDezdFeTNCeTQ/ezM+dzQ/fjdCfjlCgjlDgD1EgjxIgkBFhjtJhzxMiD5MiTpJijxHiD1GhTxOhT1QhjtShjlSgz5Qhz1UiDtWhjpYhDtXiT1XhzlZhTdbhjZdiDZdhDZahjRWhTFaiDJVhzBYiDBWhTVfhTFhgzFghjVjhzhjhzllhTlnhTpphzBihi5jhi1lhCxmiCxihylihShhiChkhCZhhCNkhy9nhy9phjNriC1rhCttgilthCdqgidsijFqizRrjTRpjjZpjDRtijRviTJvijZwjTJnjzNljjRjjTNikDBlji9kkS9njjZjkTdfjjpijTtkjTxgjzVbjjdZjDdYjjFcjzJYjS9ckDlYjzhUkT1XkT5ZkT1bkkBZjzxSjjtQkDpOkjxOjDxPjT9Pi0FPi0NPi0VNi0RLjEdOkDlNkjhLkTlJjzhHkjVLlTVJlDVHlzVFmDdGkTtIlDtEkT9Gj0BJkENJkERHkEdHkUhKkEhGkTxCkjs/kz4+kj89kTo+kTdBjTc/kDVCjDZAjTJDlj8/lkE+mEM7mEJAmkBAl0NClz86mD84lj42lTw2mj43nD85lkA0lD8ylT4wlD4ukkEyk0IwkUI0lz0xmTwvmDkulzksmzwvnT4vnEAxnUIxnEQzlzgvljYvkzQslTQxkzQykzM0kTI1lTE1kDgskTgpjzcojzotjDosjjowkzkpkzomkzgilTsmmD4olD8nlDUlkjEkki8kljIjlzQhljUfmjQhkDImjjAnjDAljTEpijAmhjElhTEnhy0khiwniSsjhTMkgTIjhDcjhDsigTokfTMmejYofzAoejAofi4qejYkeDgkdjUjezshez0ifDoffT4hfjwgdTcmczYncTooczUqdDcrdTMudjcvbjYnbDgpbTgrajYmajQnaTkpaTosaDgvZjssZj0uZDorZD8uZzMtaTItaTAuZTItZTEqYzQtbTErbC8qbi0qaiwnay0kbCskZywnZCspaCoray8jbC8hbzIhazEgaC4eZjEgZS0dZDAgYy4fYS4ecC4hcy8idC8gdC0jcy0mdCsndiomcyopdjEfejIeejMgdzQcdzYddDQbezAdgDAbfi0ffCwhfCohfSkjfCkmeikmfSgngTIehjIdhzIfhDUcgTYbhjYbgTUZhzAcjDIaii0bjSwbjiwdjisajjQekDMdkjMejjYgjDchjDgjijgfkzIakzMXkzIVky8aki4clDUXlDYVljgVlzkXkjcTkTkVjzgXjzYXjjoYOj1ROkFRPT9UPj9POz5MPkFMPz1MPDpLQDpJPT1IPz5GPj9EPD1DPUJDP0NDPEFAOj9DOD9EOD5HNj9IMUFJMkVBNUJCP0ZEQEdDP0VGPEdEO0hBOUlBN0hCOUtDOk1CNU1CNUlENUhGNkZHNUZJM0dJMkZNLk1JMkpHOlBEPFFDO09GOFFEOFNFNVRFNFJGNVVHNVhHMFZHL1JMM0xPNE1LNE9KN1lIOFtHOVdJNlpKM1xKMlxMMVlMM1xOM15PL11QMFlOM1VOM1NPM1BTLlVXL1ZTNl9QNmJQN15PNV9TM2BTMV1VM19YNGFZMF5bMVtXMVdaNlNVNVdUNFlVNmJaN2RaOGBYN2BcNWFeNV9gOWBjNlxkNVtgN1pcOFlbOlRaOVRgOFZgO2FjPGNkPGBgPV9kPF5mPVxnPFpmQFtnQVxoQFhpPVhmPlRkP1ZcPllfPllhRF1oRV9qRF9lRVtnRlppR1doSVhmS1lnSlRnR1RlRVhiRVhgRVZbSFJeR1JhTVhoTFZqT1ppT1ZnUFVnUVNlT1JkVVRlU1BiT1JiTlZhTVdfTFdZTlJaT1FdV1ZjWVZlVVhjV1VhWFNgWFJeVlJdWVRcXFRcWVFZVVNbVFdcU1lcUFxYUlZVXVZbX1VaXVhdXFdZXVhXXFdUWVdVXllRWlZQWFhTV1tWVl1WU2FUU11NVVtQX1tQYltPX11SXVxOXVpMW1tKWVxMXF5JWV5HWF5LWGBNWWBPWGFQVmZRVWVLVmNKX2BHYF9EYWFJXmJGXWJEW2RDWWRFXmdBWWlBWWdFWGtHWmlMWmlOW2ZLWmZJYGhBYWg/YmhEXmxAXG5AW21CX3E/W3NBW3BEW29GXW1HXW1JXXBOWHZKWnNIYnNAY3M+Y3FCYXVCX3dBXXdEYHpEXXhGX3VIYHRKYXVQXnpOXnpMZH1DZH5BZXpDZH5FYoBFZIJJZYRJYoRNYn9MY3tLZHlMZHpOZndRZX5UY35QZH1PaIVIaIdHaYNHaYVLaYNMaYRPaIJQbINQbYZQaoVUaYFSan1QantQa3tSbHdTbHxXa35WcIVQcodPcYNQcoZUcINXc4RYdYZZcoNccIFYcX1acnlTcX1TcX9Ud4ZYeIhZeIVWeYRaeIRcd39de4BdfYFee31geH1ceH5YeHxWeXhTe3RbeXhbf4JdgYNff4NbgH9cgn5dgntegHpdhnpegnZfgHhcgHRZf3hSf3pWf3pYiHpdintfiHxbiXhbiXZciHRbhnRZjHNZiXBXhnhWhnlUhXpPhXJNhnNRj3RZkXNbj3dZkHNWj3FWj3FTjXJSk3FRj3FOjXNQjHZNi3xRjHlTjHZTlnJSl3FTlXVTlnNPlnJNmXVJlXZGk3ZKkXpKkXpIkHxMkH1QknpPknhOnHZKnXRLnHhMnnlIm3tGoX5GnX9Dl4FLlYBOmH1Mo39IpX5Hon5KooFIooNGoYdIo4hIn4pHnIVKmohLmoNOmoJQnIJNnYNLpYlKp4tIpodLo4tLn45MpJFOn5JPno5OnYxPnopPnohQm4ZUmoxUm41TppBQqJJPp45QpZFSppBVpJFXopFWpJBZppFbopBaoZNboYxWoYpWn4pYnohZnoVZnYhbnItcm4tenY1bn4xZqJNaqZNdppVaqZNYq5RXrZNWrpZVr5JXsJBVsZRYs5RYsJZVsZhWsJpYsJxXspxVs55Us6BVtJ1StJtRs5lSsppUsI5WsIxUro1Xso5Ysoxas41csYxetY1dto9ctI9hsotgs4lgs4detIVftoJjtohotIlkuY5cupFauoxbu45eu5Fgu5Biuo5jvo9iwJFivo9nu41lvIlou4Niu4hhu4phwpBhxJJhwo5fxI5jxY9lxY1nw4xoyYxnxolox4pqxIlow4RpwINhwYdiwohkzIxlzo1lyotjzYlmzolozoZozIVpz4Rn0oRnz4FpzINoyoNmyYVlx4RjxIBgyH1kyX5m04Rk1oRl0oVi04Fk1H9l031k0X1l1nth0nhi0Hxjzn1hzHpgzIBeyoJdzYFgz4Bh13tf2ntf135e1npd13dd1nZb03Zc1nZY2HVX1HVX1HNX0nZZ0XhZ0Xpaz3xZzH1WzHZSznZW2XdV3HZV2XlW2HZT2HRS1nRQ1HRR1nVO2HVM03RL0nVPznhN0H9S0ntS03lR2ndL3HZK2nhN2HhJ13dH1nlG1HpH2HtD1X1F031D03xH0YBI1IBN1IFP1X5N1X1L231D3HxB235F2X9B2X8/14E+1YE/2IM+2oQ71oU+1YU71IQ/1YRC1oNE1oRG1IhJ0ItD0ohC1IZD3IQ83YQ53YE93YY+3og93Io92ok/3Iw+3Y482I492YtA141E24lJ3IhF24lD4I894ZA64Y4+35E+3pM93JQ/25JA3phA2ZdC2pNC2pNH341J349F4JpA4Jw/4phA4JpD3ptE3ptH3phH4JtI4Z5J35pM45RK45VM5JNJ5JJH5pFG45NF4ZVG459I4qJI5J5G5Z9K5p1L5p1N5ZpO6ZxO6p9O6J1S55lQ6JZT6pFN6ZRM6JdN7Z9N7qFN7Z1L7p5Q8J1P8ZpR75lR85lQ9ZpS8pZR8pZU75ZR7pdM7pVK7pNL7pFI749L8I1P75FP95pQ+ZpR9pxO95hO+ZhM+pZM/JZO+JNL/ZFM/ZRP/JRS+pZT+pVV/JRW/JNY+5Na/pFY/5BW/5FU/ZNU9pFL9JFJ9ZFO945L9oxM+ItO+Y1P94pQ9odP+ohS+YxS9ZFU9ZNZ95Ba+Y5a+Y1X9IZR9INP8odR9YVT9INV9YRX9odX8oVZ8YJa84Zb9IVd9YhZ8o1W75FX8JBb8Y5d8oxc74JZ7n9b74FW7YRa7YRc7Idd7Ylb54Zd6Ylb6Itd64pa7IhW7IlU64xQ6o9T6pBV6o5X5YVd5IRe5YVa5Ihd4Ylc4Ytc44xb3oxb3Y5d341Z3Y9Y4Y5Z441X5ItW5YxU5I5T5Y9R5o9P45NT4pFV35Bd4ZBd3pFg3ZJc25Jb2pRZ3JRX2JNY1pRa2JVW15dW2pRV25JU25BU3I9S3o5N3pJN3pVO3ZVR3JNR05Na0ZRa1JBb05JX0JJW0JNU0pNSzpJSzZRQ0JBRzo9P0pFQ1JBQ1I5S1oxS2otP2JBL1pBNzpZQ0JdPzJhSzJdOzpdLzJVJzpRIyZNLyZJGzZJHz5BI0pFI0pJG1IxL0I1Kz45Jx5JNxZJNyZFPx49LxY9Jxo1IyI1HwopIxYlFyYpHyotLzIpN0IZOz4VIzYdHwYhKvohKwolNwoZJwYVHwoJHxINGwH9Jw31GxoFHx4FJx4RKyYRLzoJOzXtKyn5JyYBKv35LvH5Lv4BNwHxMwHpLwnhLxHpLwHVOxXVNxnlMynlPyIFSxX9PxX1Ov3VRvXNQv3hRwXRSwXFSxHFUxnNTxHFWw29Xx29Xx3NVx3ZVxXdUxXlVx31ZynhayXZZwW9awG1bv3FZw3BcxW5dxnBfx3JexXBhxG5jxnJiyHFjx3NgxnZfyHhixHpew3xdxHhdxXZdwm9lwWxmwHBkw3BnwnFpxHNqxXVownVswnRuxndtxXdpwndmwXlkv35kw35oxHxpv3Rvv3NxvXRtv3dwwXhywHpywXxwvXt0vn5xwH9zwH5vv3xsvXxqu4BmvoZrvoJsunx1unt3uXtzun91uIB1uIJ0uoJxtoNztYR0uIdyuYRwuIZstn9nt39suIBusoR0sYV2sYJzsYZysolysYpws4lur4pvrYxwr4pssI1ssolssoRssoNrsIBmr4Rlr4ZlsIdnq4tyrIx0q4hxqYxxp4tvqIttqopspoprpItrp4xnqYlpq4Nsq35pqoBmqYJlqYVmootpo41nn4xqoYlmoIZlooRmnoZmnYVknoRooYNno4RrpINtpn9sp39upn1rpXpoo35om4Zim4VgnIlimIZjl4RjlYRllYVnlIlmkopmlIdok4lsmYptmotumolrmIhpj4ZijYZikIRgkIhgj4phkIxgko1gjY1ckJBck41dlYtclo5ZmIZZlodclIldi4taiYxbjIlbjIxYjI9YjpBWkI9WjY9Ti5BSkJFRkY5UkopWk4hWlIhTloRTlYpPlItQiY9Rh5BQiYxRi49Oi5FNjZBLj49Mi49HkI9GkI1Kj4pOj4hOkoNOlIVLlIdKk4lKiI5Hh5BFh45JiYxFi4pCjYlEiohCiIdAjYVAjYdEjYZGjIdIjIZKjYFNj4BHj4JGjoRHhoZAhIc+hYZCh4NAiII+iYA/ioBBh34/hX09iXo/in5CiIBFiIBIiH5Ni3pJintGgn0+gX07goA/gns/gnk/g3dBhHhDgHdCf3VBgnZFgnNFhHdFhHlJhHdKg39Mg35Hg3xGfXVAfHg/e3VCfHM+fXM8f3I8f289g3M6gm86hG88gG48f2k7e2Y2emo1e202fG03gnU3g3c4gHU2h3M2iHI0h280iHEwi3Awh28xgm8ygG8xfWwtgWssg2sshWwtg20viXcwi3kwhngxiHYthncshHUsgnYqg3UogHIqgXQugHgwf3kxensyd3Uue3Uugncmg3cjgnonf3clfnUkfHQke3Une3YheHckd3UjeXYne3kpe3oreH4ucXordXkpe3kffHcdfXogeXoed3gddHkedHogdHsccnscdH0ec38edX0jcX4kd4ApeH4ld30jcX0Zb3sYc34Yb38abH4aa38can0eaoMea34gbHwhanwkaX0ka3olbXglbXYmbngibXoha4YfaYcfbYYdbIYha4YjbYkmbYoocIkkcYslcYYmc4Ukc4QidYMidoQjeYQkeoMieYUmeIYndoYndYUlbIwpa40mbo4qaowraIsqZ4ksaIYrZoovaIYvZoYwaYUtbYYub4Yuc4IrbX8obIIqZ40wZY4yaI4vaYwyaIs0a4o2bIw3aog4aoY3bYg5b4c4bYs5bI07bo09b4s9bY4/a5A+apFAapA8ao46aYM4Z4Q6bIM6aYE3aIAzaYExaX0zZ3w0aHwva38wbn0tdIAwcIEyboEyaHo2Zng3aXs4aXg0aHcyanUxbHcwbHQya3EzbXIubnYvcnYudXs0cXozb3kybHA1am42bHI3b24ycW0yc28xc2o0dW0zdmsxdW8ydHM0dXU2d3Q1eXY2eXg3eXIzcWk2b2g1cGs4cmU2c2M4dWQ4cmI6cmA6c2Q8c2I+d2Y8eGU+eGM/emc/e2s/eGo8d2g7cV45cls6cV42bl46bl08a109al88alk8Z1w+aF87aGA5ZmA4ZGA5Z2E1aWE0aWIya2E1amA4alY6alQ7bFc5aFY4ZlU5ZFk2ZFI0YVYzZFkzZloyaFs0aVwzaVwwaV0ubF4uaFwsZlssZVouZlswZVAzZE4zaFA0ZlEwZFEvZVIsZlUtZlErZU8qaFMpZlMnaFUrbFYrbFcpblctblYvcFYwbFQwalQvZkwqZUopZkwtaUwpaU0na0wmbU4nbEgmb0oncEolb00nb00qck0rc0wqck4ucE4vcE8xbk8ubk4rbEUnakQma0YqbkQnb0QlcUMlcUEmckIidEQhdkEkcz8lbj4kbTwjbDggcjggdkQgeEQidkYedkIeeEAedz4aeT8ZdzoZcT4ebz4eaj0cazsabToZcDoZeUEXfEIWd0MYeEAUeD4Udj0SdDwUdT4Qdj4Ocz0QczsOcjwTc0AVb0AWa0EXbjwUdkENeEELdkMOdEALcz4KcT8Ibz4KckIGbUAFbT8KaUELa0QSbkIQbkEOckUFdUUEckYHcEUEcEgEbUgDbEYFbEsEbEwCaUoEaEoCaUgGaEkJZkkIaEkMakkPbEgMbEgJbk4CblAAcE4DbVAEalEEaVIGaFEHa1YGaFYJaVIKalALbE4KbU0LbU4Obk4Qb0wRbU8SalITalEPblcFblgDb1QFb1kHcFgJcFoLb1wJcFkPb10PbV0La10KalwIaFwIZ10JZV4KY10IZF8LZmANaGANaV4Lb1YQcVUSblUObVcSbVkUa1oUalwSaVkYZ10WaFwSYlcKYVoNYVsOY1wQaFYZaFYbaFQXZVYYZFgaYVkZYVkWXlYbXFkXYFgVY1YTY1INX1MNXVQOXlYQX1McXVMeYVMcXlEaW1EZW1EWXVEVWU0WW04SYU8UYk8WZE4WZE0UaEwTZkwQZEwPYk0QYk4SWUoXV0oYW0oZWkkVWEkTWUgQW0kQWUMQW0UMXUgPYEgTYkgUZ0cTZUUOYkYOWUERVkARWkEUW0AQWz8NXT4MX0AMXjwNXToMYTwKYT8NYkAPYEERYUETZkAWaj0PZj8PXTgOXDYNXDkRYDcPYjYNZDYNZTgOZDQQZDEPZzQRaDMPZzcQaDgUajcUaDkWZToXZTsZZDoVZDkTYjAQYC8PYDISYy4SZS0RZisTaCwUZSoUZicVZSsXZCoZZywWaC8YZjAYZzIZajEZbDUbbjIabi8ZcC4ZbC4Yai8YZSUTZiMVZiURYiUUYSMWXyIVYCESXyAWXSAYWx8UXx4SYR0SYx0SZRsSYxkSZBcSZhYRXRUTXxkSYRoSXR8bXCAcYB4bXB0aWR0aWBoZWhkXVhgdVhUZWhYYXBYYWxIYYRUZYxQZYBcZXhgYVxcfVRghWRcgVhQfVxMhVxAgWRAeWA8hVw0jVwsfWg4eXREeYBEfZQ8fYwseYQoeXgseVw0mVQwnWQ8mWQsmWQklWwclXQgjXAUoXwQlXwgjZAgjZBAlYA4lXwwkXQUrWwQtXQgsYAUrYAIrYwIrZAMpZAMtZAEvaAEsZgQqagcqZg4qZAsqZAgqZAIxZQAzYQIyZQQxZwUzaQYzaQcwawc0bAY2bQgybgcyawgwZwsvZw0vaBMvcBAwbQ0wbAg5bQY7aQg5bQo4cAo4cQ03bw42cQ46cw85bxA6bxI7bxA3ag82aBE2aRM1ZRU0axc1bRU1axM2dRA7dg48dBE9dxI6dhQ5eBY5eBY7ehU4exg3fBU6fhU6exU/ehNAehNCfBVCfRZFfBVHfhhEfhlCgBtDfRlAfBdAexg0eRYzfhgzehs0eBs0dx40dx43eSAzdyIyeiA1eyM1eCA3eiA6eiI7eiQ6eyE9fR5Aex08eh06dyIweSEudiUvdCEvdB8tdRwucxwvdxoqdxcucxkvcBkvbxcwcRUwbBgvaRgubRoubxsudhoneBomdBondhcoeBUpeBMpdhMrdxEneREldw4pdBEqcRQqbxQpahIpbQsrcA4qeBAjehAhdxIidw4ieAwjdgokdAsldAkhdQggcgYjcgolcQ4kbxAkahEkaAkkbAoldAgddgYcdAsccgcccQQdbwQdbgYfbQMZagMdbAYfaAkfbA4dbBAdbgwdbgoebQQWbQIVbgYWagQWaAIWZgMWZQQYZAQSYQQWZAYYZQgZZwkZZwsZZhAaXg4ZYQsZZAUQZAMOZwYQYgcQYAcQXwkQYAoSXQsNXA0RYA0SZRETZw8SaRASZg0RZAwRXgsKXAoIYAoJXg4KXBAKXRIKXxIMXhMIXRQGYBUJXhcKYBQMYxMMZRUMZRcMZxMMaBEMahAMZRAMYxEMXhQDXBMCYBIDXxYDYRcDYRkEYxoGYhsDYBwBYx0EYR8FZBwHZhwHZx4IZh8Iah0IaxwHbRwHahoGZxoGvUw8vUk9u0g8u0Y9uUk7uEg6uEk+uUZBuURCuEJBuURFukZGu0ZIu0hFukhCtkk3t0g1tkw4tEg3s0c5skU5s0M7sEQ5r0I3r0Q7sUI8sT9As0ZFs0lCskY/rUE2rUA0q0Q2q0A5rD45qj08qz4+qD47pjw8qEA9qkA/q0RArEVBrUZGq0FHqkBEoz08ojs7oz88ozw/ozpAozpDpTxDoTpEoTlGoT1Eoz1FpEFDpENDpkdGpkJKpUFJnjhHnjZInTlGnzpJnzlMoDtNoT1MnzxPnztSnz9PoT9No0RPoEdIoENInkNGoEFKnjtUnjpWmztTnj5VoD9VoEFWoENTnkJXn0NZnURVn0VUoElSnEhLnEVOnURQnURbnkRemkNbnEdankhanktZnUtXm0xbnE5bmUtZm0xXmUhVmEhSlklNmlFPmk5Smk9dm1FfmE5emFFbmlNamFRYmFJWllVZlldZlFRXllNVlFNQkUxQk01UlE9VlFlalVtbk1hcklpYk1tWkltUkVhTj1xUj15TjVpTj1hSjU9SjlJUj1RUjV9UjWJUjF5Xi19Ti2BQiV9PiVxPh19PhmBNhl1Qh1tPh1lQiFlTiFdUiFFTh1RNh1ZNh1dQhmJLhGJJiGNLhWRNgmRNgWZPgmhPf2ZQfmRSfmhRgWlRgGxQgG1OgG9NgHBQgHRPgXBXgW5UgW5RfGNTfGFUemRRe2VVfWVXfWdYfWpXemhZemdcemtafGxYe3BaenFTenJSem5Te21Ud2Zcd2VfdmVadmlddmlgdmxgd25fc21gcmxic29gdnBedm9adXBYdHRVc3hcdHRcb2xhbmtjbmtfbm9hbnBjbnNjb3Rha3NiaXNka3ZhbnZfbnVdbXlcbnRYbnNWbnJab29abnNcZ3NjZnJmZnFhZnViZndjZXlhZ3pgY3lgYXphY3teZnteZn1ZZ3ZVZ3ZaZndcXnlhXHljXnZgXXpfXX1fXH5dXn5bWn1bWH5cW35ZXn5ZXn1UYXZUYHVZX3pZVnxcVH5dVnpdVXxZVX5YVH1VVnxUU3pVUHtVU3pSWHlSV3dPW3VTXXNTW3dVWXhUT3hVTHlWUHdXTndTTXlRTndOUHdOS3VOT3RMUXVNU3RRVXJRWG5RVHFLSXNPRnROSnJRSXBNSHBLSm9JTG9KSWxJR2xITGxIT2xLUGlJU2pQUG1PUG5RT25NRmlJRGlIR2lMSGdHSGVISmRHTGVHSmFISWBGTWFHTmNIUGBLT2VSTmZOTWVMRl9HRF9FRmBKRlxHSFtJSlpITFtJSlVHTVdJTlpKT1dOTV1TTF1PS2BQTFxNSFNIR1JGRlRKSVJKS1BJTlFMS05NTU5PTlBPT1FUSldUSVdPS1RPSUpMSUhLR0xKSEtOR0lQSUhRSEdUSEVUSkhWS0pUS0xZSU9YR1JXR1BURlFSSU5URURVRUFVQ0VTRUVYRkNZRkRcRkZcQ0ZeRUheREpcREpaQ0xZQlFZQlBeQk9fQ01fQ0xdP0JcPj9cP0NZPkNePkJgPkdiOERjOkhjPUliPE5iPE5aPUpcPUlZPUleNkRiNEJjNkRfNUZjNEdlM0lmNUtlL0plMU1kNE1jNU1hNUtgNktdNU5ZM1ReNFFgLUlkK0hmLUdiLEtjK01kKk9iLFBhJk1hKFBfK1FfLFNbME1XLkxbLU1dJExfIk1fJElgJktdJEtaJE1ZJk9ZI01WIUxWJE9WJlBXKk1XLExWL01RLFBQK1JRKlRPKVFTIEtUHUtUIUhVIUxSIUpPIktNJE1OI0pLIUlKJUtKJkxMKEtOK0xKLElQLkhRKklRKEtQIUdIH0dHIkVJIkhFI0dDJEhCJklDJkZAJUU+KEdAKElCKkhELEdELUhDLUVKKUZIKEdGQipqQyxpRClsQCtrQCxtQS9tPzBuQy9uRTBtQzFxQTJwPzNxPTNyPDR0PjV0Pjd2PDh4QDh2Qjh1QjZzQDVzSDBtSC9wSTJtSC5rSy1rTC5pSy9nTjBqUC9rTjJoTDFmSjRkSjNiSDZkRzdmRjlmSDdoSDhqSjVoUjBsVC9uUTNsVDBpVC5oVC9lUzFlVzBlWDBjVjNlVDNkUzZnUThoTzplTjxmTjpjTjhfUDdiWzBiWy1iXDFkWzFgWjBeVzNdXDRcXTNZWzZcWDZcVDhcUzpdUz1iVjtjWDljWDhhXDNXWjFXXjNVWjVXWTZVWDlXWjpUWjpRWTxVWDtXWjxbWj1dWUBhVkFeVEFcUkJcVT9aVz5bXTpQXDlNXjlSXT1PXT9RXkFQYUFQYUJOYkJSYENUXz9WXz5YX0BaXkFcXj9eXkNdXkVbX0RZX0JYY0FMY0JJYz9MZ0FOa0FPbUNPbD9QaT5XZztWZjpVZDhVZjpSZzxSb0RNbkZMcEJMcURPcUZRckVTckNUdUVTdkVVdUJTc0FUcj9Tcj5RcTxQcDtSbzlTbjhSbjlVbztXbztZcT1WcT1UeEdVeUhXeElTe0ZUfUdTfEdQfEpQfkZPfEZMf0hOfkpOf0xQf05Pf09MgFBQgVBSglJTgU5TgExSfURKfENIfkJMgEVJf0dIgUlHgkpJhEhEhUhIhUpJhk5LiExThkdRhklNhEdCgkhBhURChkhAhko/h0xAiEtCikw/ik49i01BiU1DikpHjFRJi1BHjU48jVA6jkw9jlA+jlM9j1Q/j1NBklU/klc/k1RBkVNDkU9EkU5Gk1VMklRIlVg+lVs9lVY8llhAlllCmFhEl1ZFnFpEm1VFmVVGmVNKl0tIl05FmFFFnlpDn1xCn1hCoFlFn1tHoFpJn1hKo1lJpFpLo1ZJoVZKn1NHn1FHnUxIn05Qn1FNp1lMqFtNqFhJp1dNp1hQplVRpVNQqVRSqVNUqVJQp1FPp1FLplBJpEtHpE1Oq1JVq1NYrVNTq09VqU5WqUxWqEtUq0pXqkhYrElUqklTqEZQqkpJrE5Mq0tPrEdZq0Zcr0harUVYq0NXrEJVrENTrUBVrD1VrkBSrUJRrEJMsEhKsEdOsklPr0ZQrjtWrDpYsDxXrjpUrDlSrThQrjpPsDdQrzROsThOsDpNsj5Ps0BOtERKsD9HsD5JsTJOsDBOszNQszNMsTJKszNHszZItTNHtjFGtjVGtTdGtTlItjlKtjxLtz1Itz9IuEFJt0BFtz5Etz9BtjxEtjtG"};var Re=i=>!!(i.person||i.ghost||i.moc);function Ze(i){let t=i.filter(s=>!Re(s)),e=s=>Math.max(1e-9,...t.map(s)),n={i:e(s=>Math.log1p(s.inlinks||0)),m:e(s=>Math.log1p(s.mentions||0)),b:e(s=>s.bc||0),r:e(s=>Math.log1p(s.recent||0))};return s=>.4*Math.log1p(s.inlinks||0)/n.i+.3*Math.log1p(s.mentions||0)/n.m+.2*(s.bc||0)/n.b+.1*Math.log1p(s.recent||0)/n.r}var nn=i=>{let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619);return t>>>0},Bs=i=>{let t=Math.max(1,...i.filter(e=>!Re(e)).map(e=>e.recent||0));return e=>Re(e)?0:Math.min(1,Math.exp(-(e.age||0)/7)+.6*(e.recent||0)/t)},Pi=i=>{let t=i.quality&&i.quality.stale_days||180;return e=>!Re(e)&&!/\d{4}-\d{2}-\d{2}/.test(e.name||"")&&(e.age||0)>t};var Ye={ATOM:1.8,SCALE:.16,PROTEIN:[.93,.93,.9],RNA:[.94,.34,.15],TARGET:[.13,.31,.8],OTHER:[.38,.64,.97],HIT:[1,.79,.2],NEAR:[.78,.62,.96],COIL:{lead:90,ease:40,radius:60,pitch:34},NEAR_AXIS:[0,1,0],FAR_AXIS:[-1,0,0]};function kd(i,t,e,n){let s=new Float64Array(t*12),r=(y,w)=>y[0]*w[0]+y[1]*w[1]+y[2]*w[2],o=(y,w)=>[y[1]*w[2]-y[2]*w[1],y[2]*w[0]-y[0]*w[2],y[0]*w[1]-y[1]*w[0]],a=y=>{let w=Math.hypot(y[0],y[1],y[2])||1;return[y[0]/w,y[1]/w,y[2]/w]},l=(y,w,_)=>{let S=Math.cos(_),b=Math.sin(_);return[y.map((m,v)=>S*m+b*w[v]),w.map((m,v)=>S*m-b*y[v])]},c=i.o.slice(),h=a(i.z),d=a(i.x),u=o(h,d),f=0,p=null,M=null,x=0,g=0;if(n){let y=n.pitch/(2*Math.PI*n.radius);x=1/(n.radius*(1+y*y)),g=x*y;let w=n.axis,_=r(w,h);M=a([w[0]-_*h[0],w[1]-_*h[1],w[2]-_*h[2]]),p=o(M,h)}for(let y=0;y<t;y++){let w=i.phase+y*e.turn,_=Math.cos(w),S=Math.sin(w),b=y*12;for(let m=0;m<3;m++)s[b+m]=c[m],s[b+3+m]=_*d[m]+S*u[m],s[b+6+m]=_*u[m]-S*d[m],s[b+9+m]=h[m];if(n&&f>=n.lead){let m=Math.min(1,(f-n.lead)/(n.ease||1)+1e-9),v=m*m*(3-2*m);[h,p]=l(h,p,x*v*e.rise),[p,M]=l(p,M,g*v*e.rise),h=a(h);let P=r(d,h);d=a([d[0]-P*h[0],d[1]-P*h[1],d[2]-P*h[2]]),u=o(h,d)}for(let m=0;m<3;m++)c[m]+=h[m]*e.rise;f+=e.rise}return s}var $c=null;function qr(){if($c)return $c;let i=Bd,t=atob(i.atoms),e=t.length/3,n=new Float32Array(e*3),s=new Uint8Array(e),r=new Int16Array(e),o=new Int8Array(e).fill(-1),a=new Float32Array(e);for(let _=0;_<e*3;_++)n[_]=t.charCodeAt(_)*i.q+i.lo[_%3];let l=i.protein;if([i.rna,i.target,i.other].forEach((_,S)=>_.forEach(([b,m])=>{for(let v=0;v<m;v++,l++)s[l]=S+1,r[l]=b})),l!==e)throw new Error("the Cas9 model's tables don't add up to its atoms: run scripts/cas9_model.cjs again");for(let _=0;_<e;_++)i.flank.forEach(([S,b],m)=>{(s[_]===2&&r[_]===S||s[_]===3&&r[_]===b)&&(o[_]=m)});let c=12,h=new Map,d=_=>`${Math.floor(n[_*3]/c)},${Math.floor(n[_*3+1]/c)},${Math.floor(n[_*3+2]/c)}`,u=new Uint16Array(e);for(let _=0;_<e;_++){let S=d(_);h.has(S)||h.set(S,[]),h.get(S).push(_)}for(let _=0;_<e;_++){let S=n[_*3],b=n[_*3+1],m=n[_*3+2],v=Math.floor(S/c),P=Math.floor(b/c),E=Math.floor(m/c),U=0;for(let N=-1;N<=1;N++)for(let D=-1;D<=1;D++)for(let R=-1;R<=1;R++)for(let H of h.get(`${v+N},${P+D},${E+R}`)||[]){let O=n[H*3]-S,q=n[H*3+1]-b,Z=n[H*3+2]-m;O*O+q*q+Z*Z<c*c&&U++}u[_]=U}let f=Array.from(u).sort((_,S)=>_-S),p=f[Math.floor(e*.08)],M=f[Math.floor(e*.97)];for(let _=0;_<e;_++)a[_]=1-.72*Math.max(0,Math.min(1,(u[_]-p)/Math.max(1,M-p)));let x=_=>{let S=[0,0,0],b=0;for(let m=0;m<e;m++)_(m)&&(S[0]+=n[m*3],S[1]+=n[m*3+1],S[2]+=n[m*3+2],b++);return S.map(m=>m/(b||1))},g=(_,S)=>{let b=-1,m=-1/0;for(let v=0;v<e;v++)if(_(v)){let P=S(v);P>m&&(m=P,b=v)}return[n[b*3],n[b*3+1],n[b*3+2]]},y=i.pair.map(([_,S,b,m,v])=>({x:_,y:S,z:b,strand:m,base:v,r:Ye.ATOM})),w=[];for(let _ of[0,1])for(let S of[0,1]){let b=y.filter(v=>v.strand===_&&v.base===S),m=v=>b.reduce((P,E)=>P+E[v],0)/b.length;w.push({x:m("x"),y:m("y"),z:m("z"),strand:_,base:S,r:S?3.3:3.6})}return $c={M:i,n:e,xyz:n,kind:s,res:r,flank:o,shade:a,pair:y,beads:w,base:[Ye.PROTEIN,Ye.RNA,Ye.TARGET,Ye.OTHER],flankAt:i.flank.map((_,S)=>x(b=>o[b]===S)),held:x(_=>s[_]===1&&r[_]<=i.spacer+1||s[_]===2&&r[_]>30-i.spacer),labels:{protein:g(_=>s[_]===0,_=>-n[_*3+1]),rna:g(_=>s[_]===1,_=>Math.hypot(n[_*3],n[_*3+1],n[_*3+2]))}}}function Od(i,t,e){let n=qr(),s=n.M,r=t&&t.ids?new Set(t.ids):null,o=new Map,a=i.filter(_=>!Re(_)&&(!r||r.has(_.id))).sort((_,S)=>_.id<S.id?-1:_.id>S.id?1:0),l=new Set(a.map(_=>_.id));t&&t.notes.forEach(_=>{l.has(_.path)&&o.set(_.path,_.hits?"hit":"near")});let c=a.filter(_=>o.get(_.id)==="hit"),h=c.find(_=>_.id===e)||c[0]||null,d=h?a.indexOf(h):a.length>>1,u=a.slice(h?d+1:d),f=u.slice(0,s.flank.length).map(_=>_.id),p=u.slice(s.flank.length).map(_=>_.id),M=a.slice(0,d).reverse().map(_=>_.id),x=kd(s.tails.near,p.length,s.step,{...Ye.COIL,axis:Ye.NEAR_AXIS}),g=kd(s.tails.far,M.length,s.step,{...Ye.COIL,axis:Ye.FAR_AXIS}),y=new Map,w=new Map;return h&&(y.set(h.id,n.held),w.set(h.id,"held")),f.forEach((_,S)=>{y.set(_,n.flankAt[S]),w.set(_,"flank")}),[[p,x,"near"],[M,g,"far"]].forEach(([_,S,b])=>_.forEach((m,v)=>{y.set(m,[S[v*12],S[v*12+1],S[v*12+2]]),w.set(m,b)})),{pos:y,where:w,all:a,hits:o,sites:c,site:h?h.id:null,flankIds:f,nearIds:p,farIds:M,near:x,far:g,scan:t||null}}var jr=Ye.SCALE,th=28,j_=.3,ks=i=>[i[0]*jr,-i[1]*jr,-i[2]*jr];function eh(i,t,e){let n=new rn,s=new fe(t,e,i.n),r=new Ht,o=new _t;for(let a=0;a<i.n;a++){r.makeScale(Ye.ATOM,Ye.ATOM,Ye.ATOM).setPosition(i.xyz[a*3],i.xyz[a*3+1],i.xyz[a*3+2]),s.setMatrixAt(a,r);let l=i.base[i.kind[a]];s.setColorAt(a,o.setRGB(l[0],l[1],l[2],ze).multiplyScalar(i.shade[a]))}return n.rotation.x=Math.PI,n.scale.setScalar(jr),n.add(s),{root:n,mesh:s}}var Vd={id:"cas9",name:"Cas9",hint:"Notes as DNA, the Guide scan's matches as cut sites",home:{yaw:0,pitch:.2,dist:44,min:14,max:240,minPitch:-1.4},stage:{light:"camera",fog:[70,260],ambient:.5},actions:["guide-scan"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,invalidate:o}){let a=qr(),l=new Map(e.nodes.map(G=>[G.id,G])),c=G=>l.get(G)?l.get(G).name:G,h=new ni(1,1),d=new Zi,{root:u,mesh:f}=eh(a,h,d);i.scene.add(u);let p=new Ht,M=new _t,x=(G,W)=>M.setRGB(G[0],G[1],G[2],ze).multiplyScalar(W),g=null,y=null,w=[],_={atoms:0,pairs:0,fine:0,beads:0},S=n.scan||null,b=n.selected||null,m=null,v=null,P=G=>{let W=y.hits.get(G);return W==="hit"?Ye.HIT:W==="near"?Ye.NEAR:null},E=G=>v&&!v.has(G)?j_:1;function U(){for(let G=0;G<a.n;G++){let W=a.flank[G]>=0?y.flankIds[a.flank[G]]:null,B=W?P(W):null;f.setColorAt(G,x(B||a.base[a.kind[G]],a.shade[G]*(W?E(W):1)))}f.instanceColor.needsUpdate=!0}function N(){g&&(u.remove(g),g.dispose());let G=[y.nearIds,y.farIds].reduce((B,C)=>B+Math.min(C.length,th)*a.pair.length+Math.max(0,C.length-th)*a.beads.length,0);g=new fe(h,d,Math.max(G,1)),g.count=G;let W=0;_={atoms:a.n,pairs:y.nearIds.length+y.farIds.length,fine:0,beads:0},[[y.nearIds,y.near,!0],[y.farIds,y.far,!1]].forEach(([B,C,k])=>B.forEach((tt,nt)=>{let ot=nt<th,xt=nt*12,ft=P(tt),wt=E(tt);ot?_.fine++:_.beads++;for(let Mt of ot?a.pair:a.beads){p.makeScale(Mt.r,Mt.r,Mt.r).setPosition(C[xt]+C[xt+3]*Mt.x+C[xt+6]*Mt.y+C[xt+9]*Mt.z,C[xt+1]+C[xt+4]*Mt.x+C[xt+7]*Mt.y+C[xt+10]*Mt.z,C[xt+2]+C[xt+5]*Mt.x+C[xt+8]*Mt.y+C[xt+11]*Mt.z),g.setMatrixAt(W,p);let $=Mt.strand===0===k?Ye.OTHER:Ye.TARGET;g.setColorAt(W++,x(ft&&(Mt.base||!ot)?ft:$,(Mt.base?.78:1)*wt))}})),_.atoms+=W,u.add(g)}let D=()=>{if(!S)return`${mt(y.all.length,"note")} \xB7 no guide`;let G=`\u201C${S.guide}\u201D${S.where?" "+S.where:""}`,W=[...y.hits.values()].filter(B=>B==="near").length;return y.sites.length?`${G}: exact in ${mt(y.sites.length,"note")} of ${y.all.length}${W?` \xB7 look-alikes in ${W}`:""}`:`${G}: no match in ${mt(y.all.length,"note")}`},R={label:"Open Guide scan",title:"Open Guide scan",run:()=>r("guide-scan")},H=()=>y.sites.findIndex(G=>G.id===y.site);function O(G){let W=y.sites.length;W&&(m=y.sites[(H()+G+W)%W].id,X(),o())}function q(G){y.hits.get(G)==="hit"&&(m=G,X(),o())}function Z(){t.stat(D());let G=[{text:"Cas9 protein",at:ks(a.labels.protein),dy:-16,run:()=>r("guide-scan"),title:"Cas9 protein. Open Guide scan"},{text:S?`RNA \xB7 ${jt(S.guide,24)}`:"RNA",at:ks(a.labels.rna),color:"#f2764a",dy:-14,run:()=>r("guide-scan"),title:"The guide. Open Guide scan"},{text:"DNA",at:ks(a.M.tails.near.o),color:"#8fbcfb",dy:16,title:y.sites.length?"DNA. Show the exact matches":"DNA. Open Guide scan",run:()=>{if(!y.sites.length)return r("guide-scan");v=new Set(y.sites.map(B=>B.id)),L(),o()}}],W=y.site||(b&&y.pos.has(b)?b:null);if(W&&G.unshift({text:jt(c(W),34),at:ks(y.pos.get(W)),strong:!0,dy:30,run:()=>s(W),title:`Open ${c(W)}`}),t.labels(G),t.chip(v?`Exact matches of \u201C${jt(S.guide,24)}\u201D`:null,()=>{v=null,L(),o()}),!S)t.controls({lines:[`${mt(y.all.length,"note")}, a base pair each. No guide yet.`],buttons:[R]});else if(!y.sites.length)t.controls({lines:[`No \u201C${jt(S.guide,24)}\u201D in these ${mt(y.all.length,"note")}.`],buttons:[R]});else{let B=y.sites.length===1;t.controls({lines:[`Site ${H()+1} of ${y.sites.length}`],buttons:[{label:"\u2039",title:"Previous site",off:B,run:()=>O(-1)},{label:c(y.site),title:`Open ${c(y.site)}`,wide:!0,run:()=>s(y.site)},{label:"\u203A",title:"Next site",off:B,run:()=>O(1)}]})}}function L(){U(),N(),Z()}function X(){y=Od(e.nodes,S,m),v&&!y.sites.length&&(v=null),w=[];for(let[G,W]of y.pos){let B=y.where.get(G);w.push({at:ks(W),r:(B==="held"?14:B==="flank"?6:7)*jr,key:{kind:"note",id:G,tip:c(G)}})}L()}function V(){b&&y.hits.get(b)==="hit"&&y.site!==b?(m=b,X()):m=y.site}return X(),V(),{targets:()=>w,click(G){b=G.id,y.hits.get(G.id)==="hit"?(m=G.id,X()):Z(),s(G.id)},update(G){"scan"in G&&(S=G.scan||null,v=null),"selected"in G&&(b=G.selected||null),X(),V()},stat:D,today(){if(!y.site)return null;let G=y.sites.length;return{text:`Cas9 is on ${c(y.site)}: site ${H()+1} of ${G} for \u201C${S.guide}\u201D`,label:G>1?"Next site":"Open it",run:()=>G>1?O(1):s(y.site)}},api:{layout:()=>y,drew:()=>_,at:G=>y.pos.has(G)?ks(y.pos.get(G)):null,step:O,go:q,highlighted:()=>v?[...v]:null}}}};var Ml=18,zd=4,Gd="#facc15",Q_=14;function K_(i,t){let e=t.X.map(o=>[o[0]*Ml,o[1]*Ml,(o[2]||0)*Ml]),n=new Array(t.n).fill(0),s=new Map,r=new Map;t.domains.forEach(([o,a],l)=>{for(let c=o;c<=a&&c<t.n;c++)n[c]=l}),i.rows.forEach((o,a)=>{for(let l of new Set(o)){let c=i.ids[l];s.has(c)||s.set(c,[]),s.get(c).push(a)}});for(let[o,a]of s){let l=[0,0,0],c=nn(o),h=c%628/100,d=(c>>>10)%314/100-1.57,u=Ml*.03;for(let f of a)for(let p=0;p<3;p++)l[p]+=e[f][p]/a.length;r.set(o,[l[0]+Math.cos(h)*Math.cos(d)*u,l[1]+Math.sin(d)*u,l[2]+Math.sin(h)*Math.cos(d)*u])}return{beads:e,domainOf:n,daysOf:s,notes:r}}var Hd={id:"genome",name:"Genome fold",hint:"The journals as one folded strand",home:{yaw:.6,pitch:.25,dist:46,min:12,max:110},stage:{fog:[34,80]},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=e.strand,c=n.fold,h=c.n;if(h<zd){let $=()=>`${mt(h,"day")} of journals`;return t.stat($()),t.controls({at:"centre",lines:[`Genome fold needs ${zd} days of journals that name notes.`,`${mt(h,"day")} so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:$,today:()=>null,api:{empty:!0}}}let d=K_(l,c),u=new Map(e.nodes.map($=>[$.id,$])),f=Ze(e.nodes),p=[...d.notes.keys()].filter($=>u.has($)),M=new Map(p.map($=>[$,f(u.get($))])),x=$=>.22+.55*Math.sqrt(Math.max(0,M.get($))),g=o.palette,y=$=>g[$%g.length],w="#6b7280",_=new Ht,S=new Ge,b=new z,m=new z(0,1,0),v=new _t,P=$=>(i.scene.add($),$),E=P(new fe(new de(1,16,12),new Te({roughness:.55}),h)),U=P(new fe(new Me(1,1,1,8,1,!0),new Te({roughness:.7}),Math.max(h-1,1)));U.count=h-1;for(let $=0;$+1<h;$++){let It=d.beads[$],Dt=d.beads[$+1],Yt=d.domainOf[$]===d.domainOf[$+1],Wt=Yt?.11:.05;b.set(Dt[0]-It[0],Dt[1]-It[1],Dt[2]-It[2]);let Lt=b.length()||1e-6;_.compose(new z((It[0]+Dt[0])/2,(It[1]+Dt[1])/2,(It[2]+Dt[2])/2),S.setFromUnitVectors(m,b.divideScalar(Lt)),new z(Wt,Lt,Wt)),U.setMatrixAt($,_),U.setColorAt($,v.set(Yt?y(d.domainOf[$]):w))}let N=P(new fe(new de(1,16,12),new Te({roughness:.4}),Math.max(p.length,1)));N.count=p.length;let D=new oe({color:Gd,transparent:!0,opacity:.85}),R=new oe({color:Gd,transparent:!0,opacity:.18}),H=new de(.3,12,8),O=c.loops.map(($,It)=>{let Dt=d.beads[$.a],Yt=d.beads[$.b],Wt=new Hi(new z(...Dt),new z((Dt[0]+Yt[0])*.68,(Dt[1]+Yt[1])*.68,(Dt[2]+Yt[2])*.68),new z(...Yt)),Lt=Wt.getPoint(.5),Qt=P(new qt(new _r(Wt,24,.045,6),D)),ee=P(new qt(H,D));ee.position.copy(Lt);let Ae=l.rows[$.a].filter(St=>l.rows[$.b].includes(St)),Se=[...new Set(Ae)].map(St=>l.ids[St]),j=yl(l.days[$.a],l.days[$.b]),Q=`${Ii(l.days[$.a])} and ${Ii(l.days[$.b])}`;return{k:It,l:$,tube:Qt,dot:ee,mid:[Lt.x,Lt.y,Lt.z],ids:Se,apart:j,pair:Q,tip:`${Q}: ${mt($.count,"note")} named on both, ${mt(j,"day")} apart`}}),q=new ii(1,1.18,40),Z=$=>P(new qt(q,new oe({color:$,side:me,fog:!1}))),L=Z(o.fg),X=Z(o.accent);L.position.set(...d.beads[h-1]),L.scale.setScalar(.62);let V=P(new He(new se,new De({color:o.accent,transparent:!0,opacity:.7}))),G=n.selected||null,W=null,B=null,C=()=>W&&d.notes.has(W)?W:G&&d.notes.has(G)?G:null,k=$=>u.get($)?u.get($).name:$,tt=()=>`${mt(h,"day")} \xB7 ${mt(c.domains.length,"domain")} \xB7 ${mt(c.loops.length,"loop")} \xB7 fit ${c.grade} (stress ${c.stress.toFixed(2)})`,nt=O.reduce(($,It)=>$&&$.l.count>=It.l.count?$:It,null),ot=[...p].sort(($,It)=>M.get(It)-M.get($)).slice(0,Q_);function xt(){let $=C(),It=$?new Set(d.daysOf.get($)):null,Dt=B?new Set(B.ids):null;for(let Lt=0;Lt<h;Lt++){let Qt=It&&It.has(Lt)?.5:.32;_.makeScale(Qt,Qt,Qt).setPosition(...d.beads[Lt]),E.setMatrixAt(Lt,_),E.setColorAt(Lt,v.set(y(d.domainOf[Lt])).multiplyScalar(It&&!It.has(Lt)?.35:1))}p.forEach((Lt,Qt)=>{let ee=x(Lt)*(Lt===$?1.25:1);_.makeScale(ee,ee,ee).setPosition(...d.notes.get(Lt)),N.setMatrixAt(Qt,_),N.setColorAt(Qt,v.set(g[(u.get(Lt).cluster||0)%g.length]).multiplyScalar(Dt&&!Dt.has(Lt)?.25:1))});for(let Lt of[E,N])Lt.instanceMatrix.needsUpdate=!0,Lt.instanceColor&&(Lt.instanceColor.needsUpdate=!0);for(let Lt of O)Lt.tube.material=Lt.dot.material=!B||B===Lt?D:R;X.visible=!!(G&&d.notes.has(G)&&u.has(G)),X.visible&&(X.position.set(...d.notes.get(G)),X.scale.setScalar(x(G)+.25));let Yt=[];if($)for(let Lt of d.daysOf.get($))Yt.push(...d.notes.get($),...d.beads[Lt]);V.geometry.dispose(),V.geometry=new se().setAttribute("position",new kt(Yt,3));let Wt=[];$&&Wt.push({text:jt(k($),34),at:d.notes.get($),strong:!0,dy:-22,run:()=>wt($),title:`Open ${k($)}`}),c.domains.forEach(([Lt,Qt],ee)=>{Qt-Lt>=3&&Wt.push({text:`${Ii(l.days[Lt])} \u2013 ${Ii(l.days[Qt])}`,at:d.beads[Lt+Qt>>1],color:y(ee),dy:-14})});for(let Lt of Dt?B.ids.filter(Qt=>u.has(Qt)):ot)Lt!==$&&Wt.push({text:jt(k(Lt),26),at:d.notes.get(Lt),dy:14});t.labels(Wt),t.chip(B?`Named on both ${B.pair}`:null,()=>{B=null,xt(),a()}),t.stat(tt())}function ft($){B=$,xt(),a()}function wt($){G=$,xt(),a(),s($)}let Mt=[];return d.beads.forEach(($,It)=>Mt.push({at:$,r:.4,key:{kind:"day",id:It,tip:`${l.days[It]} \xB7 ${mt(new Set(l.rows[It]).size,"note")} named`}})),p.forEach($=>Mt.push({at:d.notes.get($),r:x($),key:{kind:"note",id:$,tip:k($)}})),O.forEach($=>Mt.push({at:$.mid,r:.4,key:{kind:"loop",id:$.k,tip:$.tip}})),xt(),{targets:()=>Mt,click($){$.kind==="note"?wt($.id):$.kind==="day"?s(l.paths[$.id]):ft(O[$.id])},hover($){let It=$&&$.kind==="note"?$.id:null;It!==W&&(W=It,xt())},frame(){L.quaternion.copy(i.camera.quaternion),X.quaternion.copy(i.camera.quaternion)},update($){"selected"in $&&(G=$.selected||null,xt())},stat:tt,today:()=>nt?{text:`Strongest loop: ${nt.pair} name the same ${mt(nt.l.count,"note")}, ${mt(nt.apart,"day")} apart`,label:"Show them",run:()=>ft(nt)}:null,api:{layout:()=>d,loops:()=>O.map($=>({a:$.l.a,b:$.l.b,count:$.l.count,ids:$.ids,mid:$.mid})),shown:()=>B?B.k:null,selected:()=>G,notes:()=>p,show:$=>ft(O[$])},dispose(){D.dispose(),R.dispose(),H.dispose(),q.dispose()}}}};var vl=18,nh="#60a5fa",ih="#f59e0b",Zd=864e5;function $_(i,t){let e=new Map;for(let o of i)!Re(o)&&typeof o.born=="string"&&Number.isFinite(Date.parse(o.born))&&e.set(o.id,Date.parse(o.born)/Zd);let n=new Map,s=new Map;for(let o of e.keys())n.set(o,[]),s.set(o,[]);let r=new Set;for(let o of t){if(o.kind!=="link"||!e.has(o.source)||!e.has(o.target)||e.get(o.source)===e.get(o.target))continue;let[a,l]=e.get(o.source)<e.get(o.target)?[o.source,o.target]:[o.target,o.source],c=a+`
`+l;r.has(c)||(r.add(c),n.get(l).push(a),s.get(a).push(l))}return{day:e,older:n,newer:s}}function Wd(i,t){let e=new Set,n=[t];for(;n.length;)for(let s of i.get(n.pop())||[])e.has(s)||(e.add(s),n.push(s));return e}function ty(i,t){let e=[...t.day.keys()],n=e.map(h=>t.day.get(h)),s=Math.min(...n),r=Math.max(...n),o=Math.max(r-s,1),a=new Map(i.map(h=>[h.id,h])),l=[...new Set(e.map(h=>a.get(h).cluster||0))].sort((h,d)=>h-d),c=new Map;for(let h of e){let d=nn(h),f=l.indexOf(a.get(h).cluster||0)/Math.max(l.length,1)*Math.PI*2+(d%1e3/1e3-.5)*(Math.PI*2/Math.max(l.length,1))*.8,p=vl*(.25+.65*((d>>>10)%1e3/1e3));c.set(h,[Math.cos(f)*p,((t.day.get(h)-s)/o-.5)*vl*1.6,Math.sin(f)*p])}return{pos:c,from:s,to:r,axis:[[0,-vl*.8,0],[0,vl*.8,0]]}}var Sl=i=>new Date(i*Zd).toISOString().slice(0,10),Yd={id:"cones",name:"Light cones",hint:"What a note rested on and what it touched",home:{yaw:.7,pitch:.2,dist:52,min:14,max:120},stage:{fog:[40,95]},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=$_(e.nodes,e.links),c=[...l.day.keys()];if(c.length<2){let L=()=>mt(c.length,"dated note");return t.stat(L()),t.controls({at:"centre",lines:["Light cones needs notes with a date and links between them.",`${mt(c.length,"dated note")} so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:L,today:()=>null,api:{empty:!0}}}let h=ty(e.nodes,l),d=new Map(e.nodes.map(L=>[L.id,L])),u=Ze(e.nodes),f=L=>.25+.6*Math.sqrt(Math.max(0,u(d.get(L)))),p=L=>d.get(L).name,M=o.palette,x=new Ht,g=new _t,y=L=>(i.scene.add(L),L),w=y(new fe(new de(1,16,12),new Te({roughness:.45}),c.length)),_=[];for(let[L,X]of l.older)for(let V of X)_.push(...h.pos.get(V),...h.pos.get(L));let S=y(new He(new se().setAttribute("position",new kt(_,3)),new De({color:o.muted,transparent:!0,opacity:.22})));y(new He(new se().setAttribute("position",new kt([...h.axis[0],...h.axis[1]],3)),new De({color:o.muted,transparent:!0,opacity:.6})));let b=L=>new oe({color:L,transparent:!0,opacity:.1,side:me,depthWrite:!1}),m=y(new qt(new bs(1,1,40,1,!0),b(nh))),v=y(new qt(new bs(1,1,40,1,!0),b(ih)));m.visible=v.visible=!1;let P=n.selected&&h.pos.has(n.selected)?n.selected:null,E=null,U=new Map,N=L=>(U.has(L)||U.set(L,{past:Wd(l.older,L),future:Wd(l.newer,L)}),U.get(L)),D=()=>E||P,R=()=>P?`${p(P)} \xB7 ${mt(N(P).past.size,"note")} in its past \xB7 ${mt(N(P).future.size,"note")} in its future`:`${mt(c.length,"dated note")} \xB7 ${mt(_.length/6,"link")} \xB7 ${yl(Sl(h.from),Sl(h.to))} days`;function H(L,X,V){let G=h.pos.get(X)[1],W=h.axis[1][1],B=h.axis[0][1],C=Math.max(V?W-G:G-B,.5);L.visible=!0,L.scale.set(C*.55,C,C*.55),L.position.set(h.pos.get(X)[0],G+(V?C/2:-C/2),h.pos.get(X)[2]),L.rotation.set(V?Math.PI:0,0,0)}function O(){let L=D(),X=L?N(L):null;c.forEach((G,W)=>{let B=f(G)*(G===L?1.4:1);x.makeScale(B,B,B).setPosition(...h.pos.get(G)),w.setMatrixAt(W,x);let C=X?G===L?g.set(o.accent):X.past.has(G)?g.set(nh):X.future.has(G)?g.set(ih):g.set(M[(d.get(G).cluster||0)%M.length]).multiplyScalar(.22):g.set(M[(d.get(G).cluster||0)%M.length]);w.setColorAt(W,C)}),w.instanceMatrix.needsUpdate=!0,w.instanceColor&&(w.instanceColor.needsUpdate=!0),m.visible=v.visible=!1,L&&(H(m,L,!1),H(v,L,!0));let V=[{text:Ii(Sl(h.from)),at:h.axis[0],dy:12,color:o.muted},{text:Ii(Sl(h.to)),at:h.axis[1],dy:-12,color:o.muted}];if(L&&V.push({text:jt(p(L),34),at:h.pos.get(L),strong:!0,dy:-18,run:()=>q(L),title:`Open ${p(L)}`}),X){let G=(W,B)=>[...W].sort((C,k)=>B*(l.day.get(C)-l.day.get(k)))[0];for(let[W,B]of[[X.past,-1],[X.future,1]]){let C=G(W,B);C&&V.push({text:jt(p(C),26),at:h.pos.get(C),dy:14,color:B<0?nh:ih})}}t.labels(V),t.stat(R())}function q(L){P=L,O(),a(),s(L)}let Z=c.map(L=>({at:h.pos.get(L),r:f(L),key:{kind:"note",id:L,tip:`${p(L)} \xB7 ${d.get(L).born}`}}));return O(),{targets:()=>Z,click(L){L.kind==="note"&&q(L.id)},hover(L){let X=L&&L.kind==="note"?L.id:null;X!==E&&(E=X,O())},update(L){"selected"in L&&(P=L.selected&&h.pos.has(L.selected)?L.selected:null,O())},stat:R,today:()=>{let L=c.reduce((X,V)=>X&&N(X).future.size>=N(V).future.size?X:V,null);return L&&N(L).future.size?{text:`${p(L)} reaches the most: ${mt(N(L).future.size,"note")} in its future`,label:"Show it",run:()=>{P=L,O(),a()}}:null},api:{layout:()=>h,graph:()=>l,cones:L=>N(L),selected:()=>P,notes:()=>c},dispose(){S.material.dispose(),m.material.dispose(),v.material.dispose()}}}};var Xd=(i,t)=>{let e=new Array(i).fill(0);for(let[n,s]of t)e[n]++,e[s]++;return e};function Jd({n:i,bars:t,ground:e,sag:n,sagging:s,weakest:r,busiest:o,carry:a},l){let c=Xd(i,t),h=[];n[s]>0&&h.push({text:`${l(s)} sags most (${n[s].toFixed(2)}). It is held by ${mt(c[s],"link")}; link it to a note near the ground notes and it stiffens.`,label:"Open note",note:s}),r>=0&&h.push({text:`${l(t[r][0])} \u2013 ${l(t[r][1])} is closest to buckling: it is pushed hardest, so if that link goes its notes lose their support. A second route between them takes the load.`,label:"Show link",bar:r}),o>=0&&h.push({text:`${l(t[o][0])} \u2013 ${l(t[o][1])} carries the most (${a[o].toFixed(1)}). Everything leaning on it is one edit from sagging.`,label:"Show link",bar:o});let d=c.map((u,f)=>[u,f]).filter(([u,f])=>u===1&&!e.includes(f)).length;return d&&h.push({text:`${mt(d,"note")} hang from a single link. Each is a note to link from a second place.`,label:"Show worst",note:s}),{plain:"Picture your notes as a bridge. Links are the beams and notes are the joints. A note held up by only one beam droops, and a beam doing all the carrying is the one that snaps first.",about:"Each written link is a steel bar and each note a joint; the most linked notes are the ground. Load is the notes' weight. A note sags when few links hold it, and a link carries more when more notes lean on it.",insights:h}}function qd({bars:i,vector:t,freq:e,k:n,count:s},r){let o=p=>Math.abs(t[p])<.05?0:t[p]>0?1:-1,a=t.filter((p,M)=>o(M)>0).length,l=t.filter((p,M)=>o(M)<0).length,c=i.filter(([p,M])=>o(p)*o(M)<0).length,h=t.indexOf(Math.max(...t)),d=t.indexOf(Math.min(...t)),u=[{text:`Mode ${n+1} splits the vault ${a} notes against ${l}; ${mt(c,"link")} cross the cut${c<=Math.max(2,i.length*.05)?", so the two halves are barely connected":""}.`,label:"Show it",show:!0}];h!==d&&u.push({text:`${r(h)} and ${r(d)} swing furthest apart. A link between them, or through a shared note, ties the halves together.`,label:"Open "+r(h).slice(0,18),note:h});let f=t.filter((p,M)=>o(M)===0).length;return f&&u.push({text:`${mt(f,"note")} sit on the nodal line, belonging to neither half. They are the bridges; keep their links.`,label:"Show it",show:!0}),{plain:"Picture your notes as a drum skin. Tap it and it wobbles in a pattern. The two halves that move against each other are the two clumps of your notes that hardly talk to each other.",about:"Notes are masses on a stretched sheet and links are springs. The sheet rings in the shapes the links allow; amber swings up while blue swings down, and the dark line between them does not move. A lower frequency means a cleaner cut.",insights:u,freq:e,count:s}}function jd({n:i,bars:t,kept:e,hubs:n,order:s},r){let o=new Array(i).fill(0);t.forEach(([d,u],f)=>{e[f]&&(o[d]++,o[u]++)});let a=s.filter(d=>!o[d]&&!n.includes(d)),l=Xd(i,t),c=e.filter(Boolean).length,h=[];return h.push({text:`${c} of ${mt(t.length,"link")} carry the vault between its ${n.length} hubs. The rest are never the short way from one hub to another.`,label:"Show it",show:!0}),a.length&&h.push({text:`${mt(a.length,"note")} are off the backbone. ${r(a[0])} has ${mt(l[a[0]],"link")} but none that leads to a hub; link it to one.`,label:"Open note",note:a[0]}),h.push({text:"Links off the backbone are not wrong, but they add detours. Where two notes say the same thing, keep the one on the backbone.",label:"Show it",show:!0}),{plain:"Picture your notes as a slime mould finding food. It keeps the tubes that get used and lets the rest dry up. The links that stay thick are the ones your notes really rely on.",about:"A slime mould thickens the tubes that carry the most flow and lets the rest die. Here each written link is a tube and the hubs are the food: what survives is the shortest set of links that holds the vault together.",insights:h}}function Qr(i,t,{hubs:e=!1}={}){let n=new Map(i.filter(o=>!Re(o)||e&&o.moc).map(o=>[o.id,o])),s=e?o=>o==="link"||o==="moc":o=>o==="link",r=new Map([...n.keys()].map(o=>[o,new Set]));for(let o of t)s(o.kind)&&o.source!==o.target&&r.has(o.source)&&r.has(o.target)&&(r.get(o.source).add(o.target),r.get(o.target).add(o.source));return{own:n,adj:r}}function Os(i,t,{max:e=120,hubs:n=0}={}){let s=Ze(i),{own:r,adj:o}=Qr(i,t,{hubs:!!n}),a=new Set,l=[];for(let M of[...o.keys()].sort()){if(a.has(M)||!o.get(M).size)continue;let x=[M];a.add(M);for(let g=0;g<x.length;g++)for(let y of o.get(x[g]))a.has(y)||(a.add(y),x.push(y));x.length>l.length&&(l=x)}let c=(M,x)=>s(r.get(x))-s(r.get(M))||(M<x?-1:1),h=M=>!!r.get(M).moc,u=[...l.filter(h).sort((M,x)=>o.get(x).size-o.get(M).size||(M<x?-1:1)).slice(0,n),...l.filter(M=>!h(M)).sort(c)].slice(0,e),f=new Map(u.map((M,x)=>[M,x])),p=[];for(let M of u)for(let x of o.get(M))f.has(x)&&f.get(M)<f.get(x)&&p.push([f.get(M),f.get(x)]);return{ids:u,bars:p,own:r,imp:s}}function Vs(i,t,{radius:e=14,rest:n=3}={}){let s=i.length,r=i.map((o,a)=>{let l=nn(o)%6283/1e3,c=e*Math.sqrt((a+1)/s);return[Math.cos(l)*c,Math.sin(l)*c]});for(let o=0;o<80;o++){let a=r.map(()=>[0,0]),l=.5*(1-o/80);for(let c=0;c<s;c++)for(let h=c+1;h<s;h++){let d=r[c][0]-r[h][0],u=r[c][1]-r[h][1],f=6/(d*d+u*u+.01);a[c][0]+=d*f,a[c][1]+=u*f,a[h][0]-=d*f,a[h][1]-=u*f}for(let[c,h]of t){let d=r[h][0]-r[c][0],u=r[h][1]-r[c][1],f=Math.hypot(d,u)||1e-6,p=(f-n)*.08;a[c][0]+=d*p,a[c][1]+=u*p,a[h][0]-=d*p,a[h][1]-=u*p}for(let c=0;c<s;c++){let h=Math.hypot(...a[c])||1,d=Math.min(h,l*4)/h;r[c][0]+=a[c][0]*d,r[c][1]+=a[c][1]*d}}return r}function Qd({pos:i,bars:t,fixed:e,loads:n},{iterations:s=2e3,tolerance:r=1e-10,sway:o=1e-9}={}){let a=i.length,l=new Uint8Array(a).fill(1);for(let _ of e)l[_]=0;let c=t.map(([_,S])=>{let b=[0,1,2].map(v=>i[S][v]-i[_][v]),m=Math.hypot(...b)||1e-9;return{L:m,c:b.map(v=>v/m)}}),h=o,d=_=>{let S=new Float64Array(3*a);t.forEach(([b,m],v)=>{let{L:P,c:E}=c[v],U=0;for(let N=0;N<3;N++)U+=E[N]*(_[3*m+N]-_[3*b+N]);U/=P;for(let N=0;N<3;N++)S[3*m+N]+=E[N]*U,S[3*b+N]-=E[N]*U});for(let b=0;b<a;b++)for(let m=0;m<3;m++)S[3*b+m]=l[b]?S[3*b+m]+h*_[3*b+m]:0;return S},u=new Float64Array(3*a),f=0;for(let _=0;_<a;_++)if(l[_]&&n[_])for(let S=0;S<3;S++)u[3*_+S]=n[_][S],f+=u[3*_+S]**2;let p=new Float64Array(3*a),M=Float64Array.from(u),x=Float64Array.from(u),g=M.reduce((_,S)=>_+S*S,0);for(let _=0;_<s&&g>r*Math.max(f,1e-30);_++){let S=d(x),b=0;for(let E=0;E<x.length;E++)b+=x[E]*S[E];if(b<=0)break;let m=g/b,v=0;for(let E=0;E<p.length;E++)p[E]+=m*x[E],M[E]-=m*S[E],v+=M[E]*M[E];let P=v/g;g=v;for(let E=0;E<x.length;E++)x[E]=M[E]+P*x[E]}let y=Array.from({length:a},(_,S)=>[p[3*S],p[3*S+1],p[3*S+2]]),w=t.map(([_,S],b)=>{let{L:m,c:v}=c[b],P=0;for(let E=0;E<3;E++)P+=v[E]*(y[S][E]-y[_][E]);return P/m});return{u:y,force:w,residual:f?Math.sqrt(g/f):0}}function Kd(i,t,{max:e=120,ground:n=.1}={}){let{ids:s,bars:r,own:o,imp:a}=Os(i,t,{max:e}),l=s.length,c=Vs(s,r),h=Math.max(1e-9,...s.map(x=>a(o.get(x)))),d=10,u=s.map((x,g)=>[c[g][0],(.5-a(o.get(x))/h)*2*d,c[g][1]]),f=Math.min(l,Math.max(3,Math.round(l*n))),p=[...Array(f).keys()],M=s.map(x=>(o.get(x).tasks||0)+.1);return{ids:s,pos:u,bars:r,fixed:p,loads:M.map(x=>[0,-x,0]),weight:M,ground:p.map(x=>s[x])}}function $d(i,t){let e=i.bars.map(([a,l])=>Math.hypot(...[0,1,2].map(c=>i.pos[l][c]-i.pos[a][c]))),n=t.force.map(Math.abs),s=t.force.map((a,l)=>a<0?-a*e[l]*e[l]:0),r=a=>a.reduce((l,c,h)=>c>a[l]?h:l,0),o=t.u.map((a,l)=>i.fixed.includes(l)?0:Math.hypot(...a));return{len:e,carry:n,buckle:s,sag:o,busiest:n.length?r(n):-1,weakest:s.length&&Math.max(...s)>0?r(s):-1,sagging:o.length?r(o):-1}}var ey=.01,tf="#60a5fa",sh="#f87171",ef="#f59e0b",nf={id:"loadpaths",name:"Load paths",hint:"Which links carry the vault, and which note sags first",home:{yaw:.6,pitch:.65,dist:46,min:12,max:110},stage:{fog:[38,90]},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=Kd(e.nodes,e.links);if(l.ids.length<4){let B=()=>mt(l.ids.length,"linked note");return t.stat(B()),t.controls({at:"centre",lines:["Load paths needs a set of notes joined by written links.",`${mt(l.ids.length,"note")} joined so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:B,today:()=>null,api:{empty:!0}}}let c=Qd(l,{sway:ey}),h=$d(l,c),d=new Map(e.nodes.map(B=>[B.id,B])),u=Ze(e.nodes),f=l.ids.length,p=B=>d.get(l.ids[B]).name,M=new Map(l.ids.map((B,C)=>[B,C])),x=B=>.3+.55*Math.sqrt(Math.max(0,u(d.get(l.ids[B])))),g=Math.max(...h.carry,1e-9),y=o.palette,w=new Ht,_=new Ge,S=new _t,b=new z(0,1,0),m=B=>(i.scene.add(B),B),v=new Set(l.fixed),P=m(new fe(new de(1,16,12),new Te({roughness:.45}),f)),E=m(new fe(new Me(1,1,1,8,1),new Te({roughness:.6}),Math.max(l.bars.length,1))),U=B=>.03+.17*Math.sqrt(h.carry[B]/g),N=n.selected&&M.has(n.selected)?M.get(n.selected):null,D=null,R=null,H=B=>l.bars.map((C,k)=>C[0]===B||C[1]===B?k:-1).filter(C=>C>=0),O=B=>c.force[B]<0?"pushed":"pulled",q=B=>h.carry[B].toFixed(h.carry[B]<10?2:1),Z=()=>{if(D!=null)return`${p(l.bars[D][0])} \u2013 ${p(l.bars[D][1])} \xB7 ${O(D)} with ${q(D)}`;let B=R??N;if(B!=null){let C=H(B),k=C.reduce((tt,nt)=>tt+h.carry[nt],0);return`${p(B)} \xB7 ${v.has(B)?"ground":`sags ${h.sag[B].toFixed(2)}`} \xB7 ${mt(C.length,"bar")} carrying ${k.toFixed(1)}`}return`${mt(f,"note")} \xB7 ${mt(l.bars.length,"bar")} \xB7 ${mt(l.ground.length,"ground note")} \xB7 load ${l.weight.reduce((C,k)=>C+k,0).toFixed(1)}`};function L(){let B=R??N,C=new Set(B!=null?H(B):D!=null?[D]:[]),k=new Set(D!=null?l.bars[D]:[]);for(let ot=0;ot<f;ot++){let xt=x(ot)*(ot===B?1.4:1);w.makeScale(xt,xt,xt).setPosition(...l.pos[ot]),P.setMatrixAt(ot,w);let ft=(B!=null||D!=null)&&ot!==B&&!k.has(ot)&&!H(ot).some(wt=>C.has(wt));S.set(v.has(ot)?ef:y[(d.get(l.ids[ot]).cluster||0)%y.length]),ot===B&&S.set(o.fg),ft&&S.multiplyScalar(.25),P.setColorAt(ot,S)}l.bars.forEach(([ot,xt],ft)=>{let wt=new z(...l.pos[ot]),Mt=new z(...l.pos[xt]),$=Mt.clone().sub(wt),It=$.length()||1e-6,Dt=U(ft)*(C.has(ft)?1.6:1);_.setFromUnitVectors(b,$.normalize()),w.compose(wt.add(Mt).multiplyScalar(.5),_,new z(Dt,It,Dt)),E.setMatrixAt(ft,w),S.set(c.force[ft]<0?sh:tf),(B!=null||D!=null)&&!C.has(ft)&&S.multiplyScalar(.25),E.setColorAt(ft,S)});for(let ot of[P,E])ot.instanceMatrix.needsUpdate=!0,ot.instanceColor&&(ot.instanceColor.needsUpdate=!0);let tt=[],nt=(ot,xt,ft)=>tt.push({text:jt(xt,34),at:l.pos[ot],dy:-14,color:ft});if(B!=null)tt.push({text:jt(p(B),34),at:l.pos[B],strong:!0,dy:-18,run:()=>X(B),title:`Open ${p(B)}`});else if(D==null){if(h.sag[h.sagging]>0&&nt(h.sagging,`${p(h.sagging)} sags most`,o.fg),h.weakest>=0){let[ot,xt]=l.bars[h.weakest];nt(h.sag[ot]>=h.sag[xt]?ot:xt,"closest to buckling",sh)}}else for(let ot of l.bars[D])nt(ot,p(ot),o.fg);t.labels(tt),t.stat(Z())}function X(B){N=B,D=null,L(),a(),s(l.ids[B])}let V=B=>[0,1,2].map(C=>(l.pos[l.bars[B][0]][C]+l.pos[l.bars[B][1]][C])/2),G=[...l.ids.map((B,C)=>({at:l.pos[C],r:x(C),key:{kind:"note",id:B,tip:`${p(C)} \xB7 ${v.has(C)?"ground":`sags ${h.sag[C].toFixed(2)}`}`}})),...l.bars.map((B,C)=>({at:V(C),r:Math.max(U(C)*2,.35),key:{kind:"bar",id:String(C),tip:`${p(B[0])} \u2013 ${p(B[1])} \xB7 ${O(C)} with ${q(C)}`}}))];return(()=>{let B=Jd({n:f,bars:l.bars,ground:l.ground,sag:h.sag,sagging:h.sagging,weakest:h.weakest,busiest:h.busiest,carry:h.carry},p);t.explain({plain:B.plain,about:B.about,legend:[{color:tf,text:"pulled"},{color:sh,text:"pushed"},{color:ef,text:"ground"},{color:o.muted,text:"thicker bar = more load"}],insights:B.insights.map(C=>({text:C.text,label:C.label,run:()=>{C.bar!=null?(D=C.bar,N=null,L(),a()):X(C.note)}}))})})(),L(),{targets:()=>G,click(B){B.kind==="note"?X(M.get(B.id)):B.kind==="bar"&&(D=+B.id,N=null,L(),a())},hover(B){let C=B&&B.kind==="note"?M.get(B.id):null;C!==R&&(R=C,L())},update(B){"selected"in B&&(N=B.selected&&M.has(B.selected)?M.get(B.selected):null,D=null,L())},stat:Z,today:()=>h.busiest<0?null:{text:`${p(l.bars[h.busiest][0])} \u2013 ${p(l.bars[h.busiest][1])} carries the most (${q(h.busiest)}), ${O(h.busiest)}`,label:"Show it",run:()=>{D=h.busiest,N=null,L(),a()}},api:{truss:()=>l,solved:()=>c,read:()=>h,selected:()=>N==null?null:l.ids[N],bar:()=>D,notes:()=>l.ids},dispose(){P.material.dispose(),E.material.dispose()}}}};function ny(i,{sweeps:t=60,tolerance:e=1e-12}={}){let n=i.length,s=i.map(a=>Float64Array.from(a)),r=Array.from({length:n},(a,l)=>{let c=new Float64Array(n);return c[l]=1,c});for(let a=0;a<t;a++){let l=0;for(let c=0;c<n;c++)for(let h=c+1;h<n;h++)l+=s[c][h]*s[c][h];if(l<e*e)break;for(let c=0;c<n;c++)for(let h=c+1;h<n;h++){if(Math.abs(s[c][h])<1e-300)continue;let d=(s[h][h]-s[c][c])/(2*s[c][h]),u=Math.sign(d||1)/(Math.abs(d)+Math.sqrt(d*d+1)),f=1/Math.sqrt(u*u+1),p=u*f;for(let M=0;M<n;M++){let x=s[M][c],g=s[M][h];s[M][c]=f*x-p*g,s[M][h]=p*x+f*g}for(let M=0;M<n;M++){let x=s[c][M],g=s[h][M];s[c][M]=f*x-p*g,s[h][M]=p*x+f*g}for(let M=0;M<n;M++){let x=r[M][c],g=r[M][h];r[M][c]=f*x-p*g,r[M][h]=p*x+f*g}}}let o=[...Array(n).keys()].sort((a,l)=>s[a][a]-s[l][l]);return{values:o.map(a=>s[a][a]),vectors:o.map(a=>Array.from({length:n},(l,c)=>r[c][a]))}}function iy(i,t){let e=Array.from({length:i},()=>new Array(i).fill(0));for(let[n,s]of t)n!==s&&(e[n][n]++,e[s][s]++,e[n][s]--,e[s][n]--);return e}function sy(i,t){let{values:e,vectors:n}=ny(iy(i,t)),s=[];for(let r=0;r<i;r++){if(e[r]<1e-9)continue;let o=n[r],a=Math.max(...o.map(Math.abs))||1,l=o.find(c=>Math.abs(c)>1e-9*a)<0?-1:1;s.push({value:e[r],freq:Math.sqrt(e[r]),vector:o.map(c=>l*c/a)})}return s}function rh(i,t=.05){let e=[],n=[],s=[];return i.forEach((r,o)=>(r>t?e:r<-t?n:s).push(o)),{up:e,down:n,rest:s}}function sf(i,t,{max:e=100}={}){let{ids:n,bars:s}=Os(i,t,{max:e});return{ids:n,bars:s,pos:Vs(n,s),modes:n.length>=3?sy(n.length,s):[]}}var oh="#f59e0b",ah="#38bdf8",ry=6,oy=.18,rf=44,of={id:"modes",name:"Normal modes",hint:"How the vault would ring: its natural cuts into halves",home:{yaw:.7,pitch:.8,dist:50,min:14,max:110},stage:{fog:[40,100]},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=sf(e.nodes,e.links,{max:80}),c=l.ids.length;if(!l.modes.length){let at=()=>mt(c,"linked note");return t.stat(at()),t.controls({at:"centre",lines:["Normal modes needs a set of notes joined by written links.",`${mt(c,"note")} joined so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:at,today:()=>null,api:{empty:!0}}}let h=new Map(e.nodes.map(at=>[at.id,at])),d=at=>h.get(l.ids[at]).name,u=new Map(l.ids.map((at,I)=>[at,I])),f=new _t(oh),p=new _t(ah),M=new _t(o.bg).lerp(new _t(o.muted),.12),x=new Ht,g=new _t,y=at=>(i.scene.add(at),at),w=l.pos.map(at=>at[0]),_=l.pos.map(at=>at[1]),S=2,b=Math.min(...w)-S,m=Math.max(...w)+S,v=Math.min(..._)-S,P=Math.max(..._)+S,E=(b+m)/2,U=(v+P)/2,N=m-b,D=P-v,R=at=>[l.pos[at][0]-E,l.pos[at][1]-U],H=Math.max(ry,oy*Math.max(N,D)),O=new Wi(N,D,rf,rf).rotateX(-Math.PI/2),q=O.attributes.position.count,Z=new Float32Array(q*c);for(let at=0;at<q;at++){let I=O.attributes.position.getX(at),T=O.attributes.position.getZ(at),F=0;for(let K=0;K<c;K++){let[et,ct]=R(K),gt=1/((I-et)**2+(T-ct)**2+4);Z[at*c+K]=gt,F+=gt}for(let K=0;K<c;K++)Z[at*c+K]/=F}O.setAttribute("color",new kt(new Float32Array(q*3),3));let L=y(new qt(O,new Te({vertexColors:!0,roughness:.55,metalness:.05,side:me,transparent:!0,opacity:.9}))),X=y(new qt(O,new Te({color:o.fg,wireframe:!0,transparent:!0,opacity:.12}))),V=y(new fe(new de(1,16,12),new Te({roughness:.4}),c)),G=new se;G.setAttribute("position",new mn(new Float32Array(l.bars.length*6),3));let W=y(new He(G,new De({color:o.fg,transparent:!0,opacity:.55})));W.frustumCulled=V.frustumCulled=L.frustumCulled=X.frustumCulled=!1;let B=at=>.4+(at<6?.2:0),C=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,k=!1,tt=0,nt=0,ot=!C,xt=C?.25:0,ft=null,wt=n.selected&&u.has(n.selected)?u.get(n.selected):null,Mt=null,$=()=>l.modes[nt],It=()=>Math.sin(xt*2*Math.PI),Dt=new Float64Array(c),Yt=()=>rh($().vector),Wt=at=>$().vector[at],Lt=()=>{let at=Mt??wt;if(at!=null)return`${d(at)} \xB7 ${Math.abs(Wt(at))<.05?"on a nodal line":Wt(at)>0?"swings up":"swings down"} ${Math.abs(Wt(at)).toFixed(2)} in mode ${nt+1}`;let I=Yt();return`Mode ${nt+1} of ${l.modes.length} \xB7 ${I.up.length} up, ${I.down.length} down \xB7 frequency ${$().freq.toFixed(2)}`};function Qt(){let at=Yt(),I=[nt===0?"The cleanest cut of the vault into two halves":`${mt(at.up.length,"note")} swinging up, ${mt(at.down.length,"note")} down, ${mt(at.rest.length,"note")} on a nodal line`];t.controls({lines:I,buttons:[{label:"\u25C0",title:"Previous mode (slower)",off:nt===0,run:()=>St(nt-1)},{label:`Mode ${nt+1}`,title:"Back to mode 1, the slowest",run:()=>St(0)},{label:"\u25B6",title:"Next mode (faster)",off:nt===l.modes.length-1,run:()=>St(nt+1)},{label:ot?"Hold":"Ring",title:ot?"Hold the sheet still":"Let the sheet ring",run:()=>{ot=!ot,ft=null,Qt(),a()}}]})}function ee(){let at=[],I=$().vector,T=I.indexOf(Math.max(...I)),F=I.indexOf(Math.min(...I)),K=Mt??wt,et=(ct,gt,rt)=>at.push({text:jt(gt,34),at:[R(ct)[0],0,R(ct)[1]],dy:-14,color:rt});K!=null?at.push({text:jt(d(K),34),at:[R(K)[0],0,R(K)[1]],strong:!0,dy:-18,run:()=>Jt(K),title:`Open ${d(K)}`}):(et(T,d(T),oh),F!==T&&et(F,d(F),ah)),t.labels(at)}function Ae(){let at=$().vector,I=O.attributes.color;for(let T=0;T<q;T++){let F=0;for(let K=0;K<c;K++)F+=Z[T*c+K]*at[K];g.copy(M).lerp(F>=0?f:p,Math.min(1,Math.abs(F)**.8*1.25)),I.setXYZ(T,g.r,g.g,g.b)}I.needsUpdate=!0,j()}function Se(){let at=qd({bars:l.bars,vector:$().vector,freq:$().freq,k:nt,count:l.modes.length},d);t.explain({plain:at.plain,about:at.about,legend:[{color:oh,text:"swings up"},{color:ah,text:"swings down"},{color:o.muted,text:"nodal line, still"}],insights:at.insights.map(I=>({text:I.text,label:I.label,run:()=>{I.note!=null?Jt(I.note):(wt=null,St(nt))}}))})}function j(){ee(),t.stat(Lt())}function Q(){let at=$().vector,I=It(),T=O.attributes.position;for(let K=0;K<q;K++){let et=0;for(let ct=0;ct<c;ct++)et+=Z[K*c+ct]*at[ct];T.setY(K,et*H*I)}T.needsUpdate=!0,O.computeVertexNormals();let F=G.attributes.position;for(let K=0;K<c;K++)Dt[K]=at[K]*H*I;l.bars.forEach(([K,et],ct)=>{let[gt,rt]=R(K),[dt,vt]=R(et);F.setXYZ(2*ct,gt,Dt[K]+.05,rt),F.setXYZ(2*ct+1,dt,Dt[et]+.05,vt)}),F.needsUpdate=!0;for(let K=0;K<c;K++){let[et,ct]=R(K),gt=K===(Mt??wt),rt=B(K)*(gt?1.5:1);x.makeScale(rt,rt,rt).setPosition(et,Dt[K]+rt*.6,ct),V.setMatrixAt(K,x),g.copy(M).lerp(at[K]>=0?f:p,Math.min(1,Math.abs(at[K])**.8*1.25+.25)),gt&&g.set(o.fg),V.setColorAt(K,g)}V.instanceMatrix.needsUpdate=!0,V.instanceColor&&(V.instanceColor.needsUpdate=!0)}function St(at){nt=Math.max(0,Math.min(l.modes.length-1,at)),Ae(),Se(),Qt(),Q(),a()}function Jt(at){wt=at,j(),Q(),a(),s(l.ids[at])}let ut=()=>l.ids.map((at,I)=>{let[T,F]=R(I);return{at:[T,Dt[I]+.4,F],r:B(I)*1.2,key:{kind:"note",id:at,tip:`${d(I)} \xB7 ${Math.abs(Wt(I))<.05?"still":Wt(I)>0?"up":"down"} ${Math.abs(Wt(I)).toFixed(2)}`}}}),ne=()=>{k=!0,clearTimeout(tt)},Ct=()=>{clearTimeout(tt),tt=setTimeout(()=>{k=!1,ft=null,a()},1500)};return i.canvas.addEventListener("pointerdown",ne,!0),addEventListener("pointerup",Ct),addEventListener("pointercancel",Ct),Se(),Ae(),Qt(),Q(),{targets:ut,click(at){at.kind==="note"&&Jt(u.get(at.id))},hover(at){let I=at&&at.kind==="note"?u.get(at.id):null;I!==Mt&&(Mt=I,j(),Q())},update(at){"selected"in at&&(wt=at.selected&&u.has(at.selected)?u.get(at.selected):null,j(),Q())},frame(){if(ot&&!k){let at=performance.now();ft!=null&&(xt=(xt+(at-ft)/1e3*.5*Math.min(2.2,.45+$().freq*.8))%1),ft=at,Q(),a()}else ft=null},stat:Lt,today:()=>{let at=rh(l.modes[0].vector);return{text:`The vault's cleanest cut is ${at.up.length} notes against ${at.down.length}`,label:"Show it",run:()=>{wt=null,St(0)}}},api:{modes:()=>l.modes,ids:()=>l.ids,mode:()=>nt,setMode:St,playing:()=>ot,moving:()=>ot&&!k,hold(at){ot=!1,at!=null&&(xt=at),Q(),Qt(),a()},span:()=>Math.max(N,D),rise:()=>H,selected:()=>wt==null?null:l.ids[wt],heights:()=>Array.from(Dt),sheetHeights:()=>Array.from(O.attributes.position.array.filter((at,I)=>I%3===1)),split:Yt},dispose(){clearTimeout(tt),i.canvas.removeEventListener("pointerdown",ne,!0),removeEventListener("pointerup",Ct),removeEventListener("pointercancel",Ct);for(let at of[L,X,V,W])at.material.dispose();O.dispose(),G.dispose()}}}};function lh(i,t,e,n,s){let r=[],o=new Array(i).fill(-1);for(let h=0;h<i;h++)h!==s&&(o[h]=r.length,r.push(h));let a=r.length,l=Array.from({length:a},()=>new Float64Array(a+1));t.forEach(([h,d],u)=>{let f=e[u];for(let[p,M]of[[h,d],[d,h]])o[p]>=0&&(l[o[p]][o[p]]+=f,o[M]>=0&&(l[o[p]][o[M]]-=f))}),o[n]>=0&&(l[o[n]][a]=1);for(let h=0;h<a;h++)l[h][h]<1e-300&&(l[h][h]=1);for(let h=0;h<a;h++){let d=h;for(let f=h+1;f<a;f++)Math.abs(l[f][h])>Math.abs(l[d][h])&&(d=f);[l[h],l[d]]=[l[d],l[h]];let u=l[h][h];if(!(Math.abs(u)<1e-300))for(let f=h+1;f<a;f++){let p=l[f][h]/u;if(p)for(let M=h;M<=a;M++)l[f][M]-=p*l[h][M]}}let c=new Float64Array(a);for(let h=a-1;h>=0;h--){let d=l[h][a];for(let u=h+1;u<a;u++)d-=l[h][u]*c[u];c[h]=Math.abs(l[h][h])<1e-300?0:d/l[h][h]}return Array.from({length:i},(h,d)=>o[d]>=0?c[o[d]]:0)}function ay(i,t,e,n,s,r){let o=lh(i,t,t.map((a,l)=>e[l]/n[l]),s,r);return t.map(([a,l],c)=>e[c]/n[c]*(o[a]-o[l]))}function ly(i,t,{lengths:e,pairs:n,steps:s=200,dt:r=.5,floor:o=1e-6,keep:a=40}={}){let l=e||t.map(()=>1),c=t.map(()=>1),h=[Float32Array.from(c)],d=Math.max(1,Math.floor(s/(a-1)));for(let u=0;u<s&&n.length;u++){let[f,p]=n[u%n.length],M=ay(i,t,c,l,f,p);for(let x=0;x<c.length;x++)c[x]=Math.max(o,c[x]+r*(Math.abs(M[x])-c[x]));(u+1)%d===0&&h.length<a&&h.push(Float32Array.from(c))}for(;h.length<a;)h.push(Float32Array.from(c));return h[h.length-1]=Float32Array.from(c),{D:c,frames:h,steps:s}}function cy(i,t=.1){let e=Math.max(...i,1e-12),n=Array.from(i,s=>s/e);return{share:n,kept:n.map(s=>s>=t)}}var hy=24;function af(i,t,{max:e=80,hubs:n=6,hubMax:s=hy,steps:r=200}={}){let{ids:o,bars:a,own:l}=Os(i,t,{max:e,hubs:s}),c=o.map((g,y)=>l.get(g).moc?y:-1).filter(g=>g>=0),h=c.length>=2?"hubs":"top",d=o.map((g,y)=>y).filter(g=>!c.includes(g)),u=h==="hubs"?c:d.slice(0,Math.min(n,d.length)),f=[];for(let g=0;g<u.length;g++)for(let y=g+1;y<u.length;y++)f.push([u[g],u[y]]);let p=f.length?ly(o.length,a,{pairs:f,steps:Math.max(r,f.length)}):{D:a.map(()=>1),frames:[Float32Array.from(a.map(()=>1))]},{share:M,kept:x}=cy(p.D);return{ids:o,bars:a,pos:Vs(o,a),hubs:u,fed:h,D:p.D,frames:p.frames,share:M,kept:x}}function lf(i=1){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function cf(i,t){let e=Array.from({length:i},()=>[]);for(let[r,o]of t)e[r].push(o),e[o].push(r);let n=new Array(i).fill(-1),s=0;for(let r=0;r<i;r++){if(n[r]>=0)continue;let o=[r];for(n[r]=s;o.length;)for(let a of e[o.pop()])n[a]<0&&(n[a]=s,o.push(a));s++}return n}function bl(i,t,e){if(e.length<2)return 0;let n=cf(i,t),s=t.map(()=>1),r=0,o=0;for(let a=0;a<e.length;a++)for(let l=a+1;l<e.length;l++)o++,r+=n[e[a]]!==n[e[l]]?i:lh(i,t,s,e[a],e[l])[e[a]];return r/o}function hf(i,t,e){if(i<2||new Set(cf(i,t)).size!==1)return null;let n=i-1,s=Array.from({length:n},(c,h)=>{let d=new Float64Array(2*n);return d[n+h]=1,d});for(let[c,h]of t){let d=c-1,u=h-1;d>=0&&s[d][d]++,u>=0&&s[u][u]++,d>=0&&u>=0&&(s[d][u]--,s[u][d]--)}for(let c=0;c<n;c++){let h=c;for(let u=c+1;u<n;u++)Math.abs(s[u][c])>Math.abs(s[h][c])&&(h=u);[s[c],s[h]]=[s[h],s[c]];let d=s[c][c];for(let u=0;u<2*n;u++)s[c][u]/=d;for(let u=0;u<n;u++){if(u===c||!s[u][c])continue;let f=s[u][c];for(let p=0;p<2*n;p++)s[u][p]-=f*s[c][p]}}let r=(c,h)=>c===0||h===0?0:s[c-1][n+h-1],o=(c,h)=>r(c,c)+r(h,h)-2*r(c,h),a=[];for(let c=0;c<e.length;c++)for(let h=c+1;h<e.length;h++)a.push([e[c],e[h]]);let l=c=>a.length?a.reduce((h,[d,u])=>h+c(d,u),0)/a.length:0;return{base:l(o),after:([c,h])=>{let d=o(c,h);return l((u,f)=>{let p=r(u,c)-r(u,h)-r(f,c)+r(f,h);return o(u,f)-p*p/(1+d)})}}}var zs=(i,t)=>i<t?i+","+t:t+","+i;function uy(i,t,e,n=null){let s=(r,o)=>r!==o&&!t.has(zs(r,o))&&!(n&&(n.has(r)||n.has(o)));for(let r=0;r<200;r++){let o=Math.floor(e()*i),a=Math.floor(e()*i);if(s(o,a))return[o,a]}for(let r=0;r<i;r++)for(let o=r+1;o<i;o++)if(s(r,o))return[r,o];return null}function dy(i,t,e,n,{shuffles:s=50,seed:r=1,fast:o,skip:a=null}={}){let l=o===void 0?hf(i,t,e):o,c=l?l.base:bl(i,t,e),h=g=>l?l.after(g):bl(i,[...t,g],e),d=new Set(t.map(([g,y])=>zs(g,y))),u=a&&a.length?new Set(a):null;if(n[0]===n[1]||d.has(zs(n[0],n[1]))||u&&(u.has(n[0])||u.has(n[1])))return{gain:0,p:1,valid:!1};let f=c-h(n),p=lf(r),M=0,x=new Set(d);x.add(zs(n[0],n[1]));for(let g=0;g<s;g++){let y=uy(i,x,p,u);if(!y)break;c-h(y)>=f&&M++}return{gain:f,p:(1+M)/(1+s),valid:!0}}function fy(i,t,e,n,{shuffles:s=50,seed:r=1,alpha:o=.05,minGain:a=.001,skip:l=null}={}){let c=hf(i,t,e);return n.map(h=>({link:h,...dy(i,t,e,h,{shuffles:s,seed:r,fast:c,skip:l})})).filter(h=>h.valid&&h.p<o&&h.gain>=a).sort((h,d)=>d.gain-h.gain||h.p-d.p)}function py(i,t,{max:e=200,seed:n=1,skip:s=null}={}){let r=new Set(t.map(([c,h])=>zs(c,h))),o=[],a=new Set(s||[]);for(let c=0;c<i;c++)if(!a.has(c))for(let h=c+1;h<i;h++)!a.has(h)&&!r.has(zs(c,h))&&o.push([c,h]);if(o.length<=e)return o;let l=lf(n);for(let c=o.length-1;c>0;c--){let h=Math.floor(l()*(c+1));[o[c],o[h]]=[o[h],o[c]]}return o.slice(0,e).sort((c,h)=>c[0]-h[0]||c[1]-h[1])}function uf(i,t,e,{steps:n=5,max:s=200,shuffles:r=50,seed:o=1,alpha:a=.05,minGain:l=.001,skip:c=null}={}){let h=t.map(([f,p])=>[f,p]),d=[],u=bl(i,h,e);for(let f=0;f<n;f++){let p=fy(i,h,e,py(i,h,{max:s,seed:o+f,skip:c}),{shuffles:r,seed:o+f,alpha:a,minGain:l,skip:c})[0];if(!p)break;h=[...h,p.link],d.push(p)}return{added:d,before:u,after:bl(i,h,e)}}var my=8,df=.1,ff={id:"slime",name:"Slime mould",hint:"Which written links carry the vault, and which fade away",home:{yaw:.6,pitch:.75,dist:46,min:14,max:110},stage:{fog:[40,100]},actions:["graph","add-link","decline-link"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=af(e.nodes,e.links,{max:80}),c=l.ids.length,h=l.frames.length-1;if(c<3||l.hubs.length<2){let F=()=>mt(c,"linked note");return t.stat(F()),t.controls({at:"centre",lines:["Slime mould needs a set of notes joined by written links.",`${mt(c,"note")} joined so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:F,today:()=>null,api:{empty:!0}}}let d=new Map(e.nodes.map(F=>[F.id,F])),u=F=>d.get(l.ids[F]).name,f=new Map(l.ids.map((F,K)=>[F,K])),p=l.fed==="hubs"?"hubs":"most linked notes",M=new Set(l.hubs),x=Math.max(...l.D,1e-12),g=F=>(i.scene.add(F),F),y=l.pos.map(F=>F[0]),w=l.pos.map(F=>F[1]),_=(Math.min(...y)+Math.max(...y))/2,S=(Math.min(...w)+Math.max(...w))/2,b=20,m=Math.max(1e-9,...l.pos.map(F=>Math.hypot(F[0]-_,F[1]-S))),v=b/m,P=F=>[(l.pos[F][0]-_)*v,(l.pos[F][1]-S)*v],E=9,U=new Float64Array(c),N=[],D=F=>[P(F)[0],U[F],P(F)[1]],R=()=>{let F=new Float64Array(c);l.bars.forEach(([et,ct],gt)=>{let rt=Yt[gt]/x;F[et]+=rt,F[ct]+=rt});let K=Math.max(...F,1e-9);for(let et=0;et<c;et++)U[et]=E*Math.sqrt(F[et]/K)*(M.has(et)?1:.85)},H=new Ht,O=new _t,q=new _t(o.bg).lerp(new _t(o.muted),.55),Z=new _t("#f59e0b"),L=new _t(o.accent||"#38bdf8"),X=new _t(o.fg),V=new z(0,1,0),G=new z,W=new z,B=new Ge,C=new z,k=g(new fe(new Me(1,1,1,10,1),new Te({roughness:.5}),l.bars.length)),tt=g(new fe(new de(1,16,12),new Te({roughness:.4}),c));k.frustumCulled=tt.frustumCulled=!1;let nt=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,ot=nt?h:0,xt=!nt,ft=null,wt=n.selected&&f.has(n.selected)?f.get(n.selected):null,Mt=null,$=()=>{let F=l.frames[Math.floor(ot)],K=l.frames[Math.min(h,Math.floor(ot)+1)],et=ot-Math.floor(ot);return Array.from(F,(ct,gt)=>ct+(K[gt]-ct)*et)},It=F=>F.filter(K=>K/x>=df).length,Dt=F=>M.has(F)?.75:.4,Yt=$();R();let Wt=()=>{let F=Mt??wt;if(F!=null){let K=l.bars.map((ct,gt)=>ct[0]===F||ct[1]===F?gt:-1).filter(ct=>ct>=0),et=K.filter(ct=>Yt[ct]/x>=df).length;return`${u(F)} \xB7 ${M.has(F)?"hub \xB7 ":""}${et} of ${mt(K.length,"link")} carry on`}return`${It(Yt)} of ${mt(l.bars.length,"link")} carry on \xB7 fed by ${l.hubs.length} ${p} \xB7 step ${Math.round(ot)} of ${h}`};function Lt(){let F=ot>=h;t.controls({lines:[F?`The links that carry flow between the ${p}`:"Tubes thicken where flow is high and thin where it is not"],buttons:[{label:xt&&!F?"Hold":F?"Grow again":"Play",title:xt&&!F?"Hold the growth":F?"Start again from tubes of equal width":"Let the mould grow",run:()=>{ot>=h&&(ot=0),xt=!(xt&&!F),ft=null,ee(),a()}},{label:"Start",title:"Back to tubes of equal width",off:ot===0,run:()=>{ot=0,xt=!1,ft=null,ee(),a()}},{label:"End",title:"Jump to the finished backbone",off:ot>=h,run:()=>{ot=h,xt=!1,ee(),a()}},{label:"Simulate",title:`Find links that would shorten the routes between your ${p}, and test each against random links`,run:at}]})}function Qt(){let F=[],K=Mt??wt;N.length=0;let et=(ct,gt)=>{gt.at=D(ct),N.push([ct,gt.at]),F.push(gt)};for(let ct of l.hubs.slice(0,4))ct!==K&&et(ct,{text:jt(u(ct),30),dy:-16,color:o.accent});K!=null&&et(K,{text:jt(u(K),34),strong:!0,dy:-20,run:()=>Se(K),title:`Open ${u(K)}`}),t.labels(F)}function ee(){Yt=$(),Ae(),Qt(),Lt(),t.stat(Wt())}function Ae(){R(),l.bars.forEach(([F,K],et)=>{let[ct,gt,rt]=D(F),[dt,vt,Y]=D(K),pt=Math.min(1,Yt[et]/x),ht=.05+.4*Math.sqrt(pt);G.set(dt-ct,vt-gt,Y-rt);let Et=G.length()||1e-6;G.normalize(),W.set((ct+dt)/2,(gt+vt)/2,(rt+Y)/2),B.setFromUnitVectors(V,G),C.set(ht,Et,ht),H.compose(W,B,C),k.setMatrixAt(et,H),O.copy(q).lerp(Z,Math.min(1,Math.sqrt(pt)*1.1)),k.setColorAt(et,O)}),k.instanceMatrix.needsUpdate=!0,k.instanceColor&&(k.instanceColor.needsUpdate=!0);for(let F=0;F<c;F++){let[K,et,ct]=D(F),gt=F===(Mt??wt),rt=Dt(F)*(gt?1.4:1);H.makeScale(rt,rt,rt).setPosition(K,et,ct),tt.setMatrixAt(F,H),O.copy(M.has(F)?L:q).lerp(X,M.has(F)?0:.35),gt&&O.copy(X),tt.setColorAt(F,O)}for(let[F,K]of N)K[1]=U[F];tt.instanceMatrix.needsUpdate=!0,tt.instanceColor&&(tt.instanceColor.needsUpdate=!0)}function Se(F){wt=F,ee(),a(),s(l.ids[F])}let j=()=>l.ids.map((F,K)=>({at:D(K),r:Dt(K)*1.3,key:{kind:"note",id:F,tip:`${u(K)}${M.has(K)?" \xB7 hub":""}`}})),Q=jd({n:c,bars:l.bars,kept:l.kept,hubs:l.hubs,order:l.ids.map((F,K)=>K)},u),St=null,Jt=new Set,ut=()=>{Jt.clear();for(let F of n.declined||[])Jt.add(F.from+">"+F.to)};ut();let ne=()=>St?St.rows.filter(F=>!Jt.has(F.from+">"+F.to)):[],Ct=F=>{let K=F.from+">"+F.to,et=[f.get(F.from),f.get(F.to)],ct=`about 1 in ${Math.max(2,Math.round(1/F.p))}`;return{text:`Link ${u(et[0])} to ${u(et[1])}: routes between your ${p} get ${Math.max(1,Math.round(F.pct*100))}% shorter. A random link would do this ${ct} times.`,label:"Add link",title:`Add a link between ${u(et[0])} and ${u(et[1])}`,run:()=>{Jt.add(K),I(),r("add-link",{from:F.from,to:F.to})},extra:[{label:"Decline",title:"Skip this link",run:()=>{Jt.add(K),I(),r("decline-link",{from:F.from,to:F.to})}},{label:"Show",title:`Show ${u(et[0])}`,run:()=>Se(et[0])}]}};function at(){let F=uf(c,l.bars,l.hubs,{steps:5,max:200,shuffles:50,seed:1,skip:l.fed==="hubs"?l.hubs:null}),K=F.before;St={rows:F.added.map(ct=>{let gt={from:l.ids[ct.link[0]],to:l.ids[ct.link[1]],p:ct.p,pct:K>0?ct.gain/K:0};return K-=ct.gain,gt})},ut(),I(),t.card(!0)}function I(){let F=ne(),K=St&&!F.length?[{text:St.rows.length?"No more links to test.":`No link does better than a random one would. Your ${p} already reach each other about as well as links can.`,label:"Show it",run:()=>{wt=null,ot=h,xt=!1,ee(),a()}}]:[];t.explain({plain:Q.plain,about:Q.about,legend:T,insights:[...F.map(Ct),...K,...Q.insights.map(et=>({text:et.text,label:et.label,run:()=>{et.note!=null?Se(et.note):(wt=null,ot=h,xt=!1,ee(),a())}}))]})}let T=[{color:"#f59e0b",text:"carries flow (higher = more)"},{color:o.muted,text:"fading"},{color:o.accent||"#38bdf8",text:"hub"}];return I(),ee(),{targets:j,click(F){F.kind==="note"&&Se(f.get(F.id))},hover(F){let K=F&&F.kind==="note"?f.get(F.id):null;K!==Mt&&(Mt=K,ee())},update(F){"declined"in F&&(n={...n,declined:F.declined},St&&(ut(),I())),"selected"in F&&(wt=F.selected&&f.has(F.selected)?f.get(F.selected):null,ee())},frame(){if(xt&&ot<h){let F=performance.now();ft!=null&&(ot=Math.min(h,ot+(F-ft)/1e3*my)),ft=F,ot>=h?(xt=!1,ee()):(Yt=$(),Ae(),t.stat(Wt())),a()}else ft=null},stat:Wt,today:()=>({text:`${It(l.frames[h])} of ${mt(l.bars.length,"link")} carry the vault between its ${l.hubs.length} ${p}`,label:"Show it",run:()=>{wt=null,ot=h,xt=!1,ee()}}),api:{ids:()=>l.ids,hubs:()=>l.hubs.map(F=>l.ids[F]),step:()=>ot,steps:()=>h,playing:()=>xt&&ot<h,widths:()=>Array.from(Yt),final:()=>Array.from(l.D),setStep(F){ot=Math.max(0,Math.min(h,F)),xt=!1,ee(),a()},hold(){xt=!1,ee()},selected:()=>wt==null?null:l.ids[wt],carrying:()=>It(Yt),links:()=>l.bars.length},dispose(){for(let F of[k,tt])F.material.dispose(),F.geometry.dispose()}}}};function wl(i,{linkedOnly:t=!0}={}){let e=Ze(i.nodes),n=new Map;for(let s of i.nodes)s.moc&&!n.has(s.cluster)&&n.set(s.cluster,s);return[...i.clusters].sort((s,r)=>r.size-s.size||s.id-r.id).map(s=>({cluster:s.id,name:s.label||s.name,moc:n.get(s.id)||null,notes:i.nodes.filter(r=>r.cluster===s.id&&!Re(r)&&!(t&&r.isolated)).sort((r,o)=>e(o)-e(r)||(r.id<o.id?-1:1))})).filter(s=>s.notes.length)}var El=(i,t=1)=>{let e=Math.max(1,Math.ceil(Math.sqrt(i*t)));return{cols:e,rows:Math.ceil(i/e)}},Kr=i=>{let t=nn(i),e=Math.imul(t^t>>>15,2246822507)>>>0;return[(t>>>4)%1e3/1e3,(e>>>7)%1e3/1e3]};function pf(i){let{cols:t,rows:e}=El(i),n=(t-1)/2,s=(e-1)/2,r=[];for(let o=0;o<e;o++)for(let a=0;a<t;a++)r.push([a-n,o-s]);return r.sort((o,a)=>Math.hypot(o[0],o[1])-Math.hypot(a[0],a[1])||o[1]-a[1]||o[0]-a[0]).slice(0,i)}var ch=2.4,gy=["#22d3ee","#f472b6","#facc15","#a5f3fc"],mf="#fb7185",gf="#facc15",xy=(i,t,e)=>e(i)?0:t(i)>.3?2:1;function _y(i,{hall:t=!1,now:e=Date.now()}={}){let n=Ze(i.nodes),s=Bs(i.nodes),r=Pi(i),o=wl(i),a=Math.max(...o.map(_=>El(_.notes.length).cols),2)*ch+3,{cols:l,rows:c}=El(Math.max(o.length,1),.8),h=[],d=[],u=new Set,f=-(l-1)*a/2,p=-(c-1)*a/2;o.forEach((_,S)=>{_.x=f+S%l*a,_.z=p+Math.floor(S/l)*a,d.push({x:_.x,z:_.z,size:a-1.2,d:S});let b=pf(_.notes.length);if(_.notes.forEach((m,v)=>{let P=Math.max(.7,Math.min(1.8,.35+Math.log1p(m.words||0)*.2)),E=.9+9*Math.sqrt(Math.max(0,n(m))),[U,N]=b[v];h.push({n:m,x:_.x+U*ch,z:_.z+N*ch,w:P,h:E,kind:"tower",d:S,level:xy(m,s,r)}),u.add(m.id)}),_.moc){let m=Math.max(3,...h.filter(v=>v.d===S).map(v=>v.h));h.push(t?{n:_.moc,x:_.x,z:_.z+a/2-1.3,w:1.4,h:1.1,kind:"hall",d:S,level:2}:{n:_.moc,x:_.x,z:_.z-a/2+1.6,w:.9,h:m+3,kind:"spire",d:S,level:2}),u.add(_.moc.id)}_.cars=Math.round(2+10*Math.min(1,_.notes.reduce((m,v)=>m+s(v),0)/6))});let M=p+(c-1)*a+a/2+3,x=Math.max(l*a-4,8);for(let _ of i.nodes){if(Re(_)||u.has(_.id))continue;let[S]=Kr("stall:"+_.id);h.push({n:_,x:f-a/2+2+S*x,z:M+nn(_.id)%3*1.4,w:.7,h:.8,kind:"stall",d:-1,level:1})}let g=e-7*864e5,y=_=>typeof _.n.born=="string"?Date.parse(_.n.born):NaN,w=h.filter(_=>_.kind==="tower"&&y(_)>=g).sort((_,S)=>y(S)-y(_)).slice(0,15).map(_=>_.n.id);return{towers:h,pads:d,districts:o,cell:a,front:M,fresh:w,bounds:{x:[f-a/2,-f+a/2],z:[p-a/2,M+3]}}}function yy(i,t){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d");n.fillStyle=t.wall,n.fillRect(0,0,128,128);for(let r=0;r<8;r++)for(let o=0;o<8;o++){let a=nn(`${i}:${o}:${r}`)%1e3/1e3,l=a<i;n.fillStyle=l?t.lit[(o+r*3)%t.lit.length]:t.pane,n.globalAlpha=l?.55+.45*(a/i):.5,n.fillRect(o*16+3,r*16+3,10,11)}let s=new Gi(e);return s.wrapS=s.wrapT=xs,s.colorSpace=ze,s.magFilter=Ne,s}var Ui=(i,t,e)=>new _t(i).lerp(new _t(t),e),My={id:"cyberpunk",name:"Cyberpunk",hint:"A neon city: topics are districts, notes are towers, stale ones go dark",stage:{fog:[55,170],ambient:.4},tower:"tower",hall:!1,cranes:!1,sheet:{wall:"#2a2a36",pane:"#3a3a4a",lit:gy},beacon:mf,beaconName:"pink",stall:gf,arc:"#22d3ee",wall:(i,t)=>Ui(i,"#ffffff",t===0?.55:.3).multiplyScalar(t===0?.5:1),lane:(i,t,e,n)=>({y:4+t*8,z:(i-.5)*(n-3),c:e%3?"#fca5a5":"#e0f2fe"}),stat:i=>`${mt(i.towers,"tower")} \xB7 ${i.dark} dark \xB7 ${mt(i.districts,"district")}`,plain:"Picture your notes as a city. A tall tower is a note everything else leans on. Lit windows mean someone has been in it lately; a dark tower has been left alone for a long time.",about:"Each topic is a district and each note a tower. Height is how many notes link to it and how much runs through it; lit windows are how recently it was edited; dark is stale. A pink beacon on a roof is an open task, the tall thin spire is the topic's map, and a stall on the street is a note in no topic.",legend:[{color:"#22d3ee",text:"height = relied on, windows = recent"},{color:"#6b7280",text:"dark = stale"},{color:mf,text:"beacon = open task"},{color:gf,text:"stall = no topic"}]},vy="#e5e7eb",xf="#facc15",hh=i=>({id:i.id,name:i.name,hint:i.hint,home:{yaw:.55,pitch:.38,dist:58,min:12,max:140},stage:i.stage,actions:["graph"],build({stage:t,frame:e,data:n,inputs:s,onOpen:r,onAction:o,theme:a,invalidate:l}){let c=_y(n,{hall:i.hall}),h=c.towers,d=h.filter(Q=>Q.kind!=="stall");if(d.length<3){let Q=()=>mt(h.length,"note");return e.stat(Q()),e.controls({at:"centre",lines:[`${i.name} needs notes in topics, linked to one another.`,`${mt(d.length,i.tower)} so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>o("graph")}]}),{targets:()=>[],click(){},update(){},stat:Q,today:()=>null,api:{empty:!0}}}let u=new Map(h.map(Q=>[Q.n.id,Q])),f=Q=>Q.n.name,p=Q=>(t.scene.add(Q),Q),M=Q=>Q.kind==="stall"?i.stall:Q.kind==="hall"?vy:a.palette[(Q.n.cluster||0)%a.palette.length],x=new Map,g=(Q,St)=>{x.has(Q)||x.set(Q,new Set),x.get(Q).add(St)};for(let Q of n.links)Q.kind!=="wanted"&&u.has(Q.source)&&u.has(Q.target)&&(g(Q.source,Q.target),g(Q.target,Q.source));let y=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,w=new Ht,_=typeof s.hour=="number"?s.hour:new Date().getHours(),S=_<5||_>=21,b=new _t(a.bg).getHSL({}).l<.5,m=i.sky?i.sky(_):null,v=null;m&&(t.sky({top:Ui(a.bg,m,b?0:.3),haze:Ui(a.bg,m,b?.035:.1),stars:S&&b?160:0}),v=p(new qt(new Pn(Math.max(c.bounds.x[1]-c.bounds.x[0],c.cell*3)*4,48).rotateX(-Math.PI/2),new oe({color:Ui(i.ground,a.bg,b?.94:.45)}))),v.position.set((c.bounds.x[0]+c.bounds.x[1])/2,-.16,c.front),v.userData.backdrop=!0);let P=p(new fe(new cn(1,.1,1),new oe,c.pads.length));c.pads.forEach((Q,St)=>{P.setMatrixAt(St,w.makeScale(Q.size,1,Q.size).setPosition(Q.x,-.05,Q.z)),P.setColorAt(St,Ui(a.palette[c.districts[Q.d].cluster%a.palette.length],a.bg,.86))});let E=p(new qt(new cn(c.bounds.x[1]-c.bounds.x[0],.1,5),new oe({color:Ui(i.stall,a.bg,.9)})));E.position.set((c.bounds.x[0]+c.bounds.x[1])/2,-.06,c.front+.5);let U=[0,1,2].map(Q=>{let St=h.filter(I=>I.level===Q&&(I.kind==="tower"||I.kind==="spire")),Jt=[],ut=[],ne=[];St.forEach(I=>{let T=I.w/2,F=nn(I.n.id)%8/8;for(let[K,et,ct,gt]of[[-T,-T,T,-T],[T,-T,T,T],[T,T,-T,T],[-T,T,-T,-T]]){let rt=Jt.length/3,dt=Math.hypot(ct-K,gt-et)/4,vt=I.h/4;Jt.push(I.x+K,0,I.z+et,I.x+ct,0,I.z+gt,I.x+ct,I.h,I.z+gt,I.x+K,I.h,I.z+et),ut.push(F,0,F+dt,0,F+dt,vt,F,vt),ne.push(rt,rt+1,rt+2,rt,rt+2,rt+3)}});let Ct=new se().setAttribute("position",new kt(Jt,3)).setAttribute("uv",new kt(ut,2)).setAttribute("color",new kt(new Float32Array(Jt.length),3));Ct.setIndex(ne);let at=p(new qt(Ct,new oe({map:yy([.04,.28,.7][Q],i.sheet),vertexColors:!0,side:me})));return at.frustumCulled=!1,{list:St,geo:Ct,mesh:at}}),N=p(new fe(new cn(1,1,1),new oe,h.length));N.frustumCulled=!1;let D=h.filter(Q=>Q.n.tasks>0),R=p(new fe(new de(1,10,8),new oe({color:i.beacon}),Math.max(D.length,1)));R.count=D.length,R.frustumCulled=!1,D.forEach((Q,St)=>R.setMatrixAt(St,w.makeScale(.28,.28,.28).setPosition(Q.x,Q.h+.35,Q.z)));let H=c.districts.flatMap(Q=>Array.from({length:Q.cars},(St,Jt)=>{let[ut,ne]=Kr(`car:${Q.cluster}:${Jt}`);return{d:Q,u:ut,v:(.02+ne*.05)*(Jt%2?1:-1),...i.lane(ut,ne,Jt,c.cell)}})),O=p(new fe(new cn(.7,.12,.14),new oe,Math.max(H.length,1)));O.count=H.length,O.frustumCulled=!1,H.forEach((Q,St)=>O.setColorAt(St,new _t(Q.c)));let q=p(new He(new se,new De({color:i.arc,transparent:!0,opacity:.9})));q.frustumCulled=!1;let Z=i.cranes?c.fresh.map(Q=>u.get(Q)):[],L=h.filter(Q=>Q.kind==="hall"),X=[];for(let Q of Z)X.push([Q.x+Q.w/2,Q.h+.8,Q.z+Q.w/2,.09,1.6,.09,xf],[Q.x+Q.w/2-.45,Q.h+1.55,Q.z+Q.w/2,1.5,.09,.09,xf]);for(let Q of L)X.push([Q.x,Q.h+.7,Q.z,.07,1.4,.07,"#94a3b8"],[Q.x+.32,Q.h+1.2,Q.z,.6,.36,.05,a.palette[c.districts[Q.d].cluster%a.palette.length]]);let V=p(new fe(new cn(1,1,1),new oe,Math.max(X.length,1)));V.count=X.length,V.frustumCulled=!1,X.forEach(([Q,St,Jt,ut,ne,Ct,at],I)=>{V.setMatrixAt(I,w.makeScale(ut,ne,Ct).setPosition(Q,St,Jt)),V.setColorAt(I,new _t(at))});let G=h.filter(Q=>Q.kind==="tower").sort((Q,St)=>St.h-Q.h)[0]||null,W=s.selected&&u.has(s.selected)?s.selected:null,B=null,C=null,k=y,tt=()=>B||W,nt=new Set,ot=Q=>(C==null||Q.d===C||Q.d<0)&&(!tt()||nt.has(Q.n.id)),xt=h.filter(Q=>Q.kind==="tower"&&Q.level===0),ft=Q=>xt.filter(St=>St.d===Q),wt=()=>{let Q=tt()&&u.get(tt());return Q&&(Q.kind==="spire"||Q.kind==="hall")?`${f(Q)} \xB7 map of ${mt(c.districts[Q.d].notes.length,"note")}`:Q?`${f(Q)} \xB7 ${mt(Q.n.inlinks||0,"link")} in \xB7 ${Q.level===0?"dark":Q.level===2?"busy":"dim"}${Q.n.tasks?` \xB7 ${mt(Q.n.tasks,"open task")}`:""}`:i.stat({towers:h.filter(St=>St.kind==="tower").length,dark:xt.length,districts:c.districts.length,fresh:c.fresh.length,tallest:G?jt(f(G),22):""})};function Mt(){let Q=tt();if(nt.clear(),Q){nt.add(Q);for(let ut of x.get(Q)||[])nt.add(ut)}for(let ut of U){let ne=ut.geo.getAttribute("color"),Ct=0;ut.list.forEach(at=>{let I=i.wall(M(at),at.level).multiplyScalar(ot(at)?1:.16);for(let T=0;T<16;T++)ne.setXYZ(Ct++,I.r,I.g,I.b)}),ne.needsUpdate=!0}h.forEach((ut,ne)=>{let Ct=ut.kind==="stall"||ut.kind==="hall",at=Ct?ut.w:ut.w*1.04;N.setMatrixAt(ne,w.makeScale(at,Ct?ut.h:.12,at).setPosition(ut.x,Ct?ut.h/2:ut.h+.06,ut.z)),N.setColorAt(ne,Ui(M(ut),a.bg,ot(ut)?ut.level===0?.55:0:.85))}),N.instanceMatrix.needsUpdate=!0,N.instanceColor.needsUpdate=!0;let St=[];if(Q){let ut=u.get(Q);for(let ne of x.get(Q)||[]){let Ct=u.get(ne),at=[ut.x,ut.h,ut.z],I=[Ct.x,Ct.h,Ct.z],T=[(ut.x+Ct.x)/2,Math.max(ut.h,Ct.h)+3+Math.hypot(ut.x-Ct.x,ut.z-Ct.z)*.25,(ut.z+Ct.z)/2],F=at;for(let K=1;K<=12;K++){let et=K/12,ct=[0,1,2].map(gt=>(1-et)*(1-et)*at[gt]+2*(1-et)*et*T[gt]+et*et*I[gt]);St.push(...F,...ct),F=ct}}}q.geometry.setAttribute("position",new kt(St,3)),q.visible=St.length>0;let Jt=c.districts.map((ut,ne)=>({d:ut,i:ne})).filter(ut=>C==null||C===ut.i).map(({d:ut})=>({text:jt(ut.name,28)+(i.hall&&!ut.moc?" \xB7 no map":""),at:[ut.x,.4,ut.z+c.cell/2-.6],color:Ui(a.palette[ut.cluster%a.palette.length],"#ffffff",.45).getStyle(),dy:6}));if(Q){let ut=u.get(Q);Jt.unshift({text:jt(f(ut),34),at:[ut.x,ut.h,ut.z],strong:!0,dy:-18,run:()=>$(Q),title:`Open ${f(ut)}`})}e.labels(Jt),e.stat(wt()),e.chip(C==null?null:`District: ${jt(c.districts[C].name,24)}`,()=>{C=null,Mt(),l()})}function $(Q){W=Q,Mt(),l(),r(Q)}let It=Q=>{C=null,W=Q,Mt(),l()},Dt=Q=>{C=Q,W=null,Mt(),l()},Yt=c.districts.map((Q,St)=>[ft(St).length,St]).sort((Q,St)=>St[0]-Q[0])[0],Wt=h.filter(Q=>Q.kind==="stall"),Lt=[...xt].sort((Q,St)=>St.h-Q.h)[0],Qt=[];Yt&&Yt[0]&&Qt.push({text:`${c.districts[Yt[1]].name} is the darkest district: ${mt(Yt[0],"stale note")}. Open the tallest and decide whether it is still true.`,label:"Show district",run:()=>Dt(Yt[1])}),Lt&&Lt.h>3&&Qt.push({text:`${f(Lt)} stands tall yet has gone dark: other notes lean on it and it has not been edited in ${Lt.n.age} days.`,label:"Open note",run:()=>$(Lt.n.id)}),D.length&&Qt.push({text:`${mt(D.length,i.tower)} with a ${i.beaconName} beacon: an open task. The tallest is the one the most notes wait on.`,label:"Open note",run:()=>$([...D].sort((Q,St)=>St.h-Q.h)[0].n.id)}),Wt.length&&Qt.push({text:`${mt(Wt.length,"note")} stand as stalls on the street, in no topic. Link each to a topic's notes and it gets a ${i.tower}.`,label:"Open note",run:()=>$(Wt[0].n.id)}),i.cranes&&G&&Qt.unshift({text:`${f(G)} is the tallest ${i.tower}: ${mt(G.n.inlinks||0,"note")} link to it.`,label:"Show tallest",run:()=>It(G.n.id)}),Z.length&&Qt.push({text:`${mt(Z.length,i.tower)} went up this week, each with a crane. The newest is ${f(Z[0])}: link it to the notes it belongs with.`,label:"Open note",run:()=>$(Z[0].n.id)});let ee=c.districts.filter(Q=>!Q.moc);i.hall&&ee.length&&Qt.push({text:`${mt(ee.length,"district")} have no town hall: the topic has no map note. The biggest is ${ee[0].name}.`,label:"Show district",run:()=>Dt(c.districts.indexOf(ee[0]))}),e.explain({plain:i.plain,about:i.about,legend:i.legend,insights:Qt}),e.controls({lines:[`Pick a ${i.tower} to see what it links to`]}),Mt();let Ae=performance.now(),Se=Q=>{H.forEach((St,Jt)=>O.setMatrixAt(Jt,w.makeTranslation(St.d.x+(((St.u+St.v*Q)%1+1)%1-.5)*(c.cell-2),St.y,St.d.z+St.z))),O.instanceMatrix.needsUpdate=!0,O.instanceColor&&(O.instanceColor.needsUpdate=!0)};Se(0);let j=0;return{targets:()=>h.filter(Q=>C==null||Q.d===C||Q.d<0).map(Q=>({at:[Q.x,Q.h/2,Q.z],r:Math.max(Q.w*.7,Math.min(Q.h*.3,1.5)),key:{kind:"note",id:Q.n.id,tip:`${f(Q)}${Q.level===0?" \xB7 dark":""}${Q.n.tasks?` \xB7 ${mt(Q.n.tasks,"open task")}`:""}`}})),click(Q){Q.kind==="note"&&$(Q.id)},hover(Q){let St=Q&&Q.kind==="note"?Q.id:null;St!==B&&(B=St,Mt())},update(Q){"selected"in Q&&(W=Q.selected&&u.has(Q.selected)?Q.selected:null,Mt())},frame(){if(k)return;let Q=(performance.now()-Ae)/1e3;R.visible=Math.sin(Q*4)>-.3,Se(Q),clearTimeout(j),j=setTimeout(l,33)},stat:wt,today:()=>Yt&&Yt[0]?{text:`Darkest district: ${c.districts[Yt[1]].name} \xB7 ${mt(Yt[0],"stale note")}`,label:"Go there",run:()=>Dt(Yt[1])}:null,api:{back:()=>t.camera.position.distanceTo(t.centre),sky:()=>m?{hour:_,glow:m,stars:S&&b}:null,layout:()=>c,selected:()=>W,district:()=>C==null?null:c.districts[C].cluster,hold(){k=!0,R.visible=!0,l()},towers:()=>h.filter(Q=>Q.kind==="tower").length,stalls:()=>Wt.length,dark:()=>xt.length,halls:()=>L.length,cranes:()=>Z.length,tallest:()=>G?G.n.id:null},dispose(){k=!0,clearTimeout(j);for(let Q of[P,E,...v?[v]:[],N,R,O,q,V,...U.map(St=>St.mesh)])Q.material.map&&Q.material.map.dispose()}}}}),_f=hh(My);var yf="#ef4444",Sy="#a8a29e",Mf="#5e626d",vf=(i,t,e)=>new _t(i).lerp(new _t(t),e),Sf=hh({id:"city",name:"City",hint:"Notes as buildings: tall = relied on, lit = recent, grey = stale; town halls are maps",stage:{fog:[55,170],ambient:.6},tower:"building",hall:!0,cranes:!0,sky:i=>i<5||i>=21?"#4f5fc4":i<8?"#f9a8d4":i<17?"#7dd3fc":"#fb923c",ground:"#6b8f71",sheet:{wall:"#d9dbe3",pane:"#3d4352",lit:["#ffd977","#ffe9a8","#ffc94d"]},beacon:yf,beaconName:"red",stall:Sy,arc:"#ffd977",wall:(i,t)=>t===0?vf(i,Mf,.72):vf(i,"#ffffff",.18),lane:(i,t,e,n)=>({y:.1,z:(e%2?1:-1)*(n/2-.3),c:e%2?"#fef08a":"#f87171"}),stat:i=>`${mt(i.towers,"building")} \xB7 ${i.fresh} new this week \xB7 tallest: ${i.tallest}`,plain:"Picture your notes as a town. A tall building is a note everything else leans on. Lit windows mean someone has been in it lately; a grey building has been left alone for a long time.",about:"Each topic is a district and each note a building in the topic's colour. Height is how many notes link to it and how much runs through it; lit windows are how recently it was edited; grey is stale. A crane stands on a note written this week, a red beacon is an open task, the pale hall with a flag is the topic's map, and a stall on the street is a note in no topic.",legend:[{color:"#ffd977",text:"height = relied on, windows = recent"},{color:Mf,text:"grey = stale"},{color:"#facc15",text:"crane = new this week"},{color:yf,text:"beacon = open task"},{color:"#e5e7eb",text:"hall = the topic's map"}]});var Hn=18,uh=2.5,$r=90,Ki="#22c55e",Tl="#f87171",bf=i=>uh+(Hn-uh)*(1-Math.min(1,Math.log1p(Math.max(0,i))/Math.log1p(365))),ci=i=>(i.taskAge!=null?i.taskAge:i.age)||0;function by(i){let t=i.nodes.filter(d=>!Re(d)&&d.tasks>0),e=new Map;for(let d of t)e.has(d.cluster)||e.set(d.cluster,[]),e.get(d.cluster).push(d);let n=new Map(i.clusters.map(d=>[d.id,d.name])),s=[...e.keys()].sort((d,u)=>e.get(u).length-e.get(d).length||d-u),r=Math.max(1,t.length),o=s.map(d=>Math.max(.25,e.get(d).length/r*2*Math.PI*.92+.08)),a=o.reduce((d,u)=>d+u,0)||1,l=-Math.PI/2,c=s.map((d,u)=>{let f=o[u]/a*2*Math.PI,p={cluster:d,name:n.get(d)||"No topic",a0:l,a1:l+f,n:e.get(d).length};return l+=f,p}),h=[];for(let d of c)for(let u of e.get(d.cluster)){let f=nn(u.id),p=d.a0+(d.a1-d.a0)*(.1+.8*(f%100/100)),M=Math.max(uh*.6,Math.min(Hn,bf(ci(u))+((f>>>7)%41-20)/20));h.push({n:u,x:Math.cos(p)*M,z:Math.sin(p)*M,r:.28+.16*Math.sqrt(u.tasks),h:.6+.9*u.tasks,holding:ci(u)>$r})}return{blips:h,sectors:c,hold:bf($r),tasks:t.reduce((d,u)=>d+u.tasks,0),notes:t.length}}var wf={id:"radar",name:"Radar",hint:"Open tasks as blips by how long they've waited; red = 90+ days",home:{yaw:0,pitch:1.5,dist:46,min:14,max:110,minPitch:.55,maxPitch:1.5,pan:!0},stage:{fog:!1,ambient:1},actions:["graph","triage"],build({stage:i,frame:t,orbit:e,data:n,inputs:s,onOpen:r,onAction:o,theme:a,invalidate:l}){let c=by(n),h=new Map(c.blips.map(V=>[V.n.id,V])),d=V=>(i.scene.add(V),V),u=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,f=V=>(V.rotation.x=-Math.PI/2,V);if(c.notes<1){let V=()=>"No open tasks";return t.stat(V()),t.controls({at:"centre",lines:["Radar shows the notes that have open tasks.","No note has one."],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>o("graph")}]}),{targets:()=>[],click(){},update(){},stat:V,today:()=>null,api:{empty:!0}}}let p=new Ht,M=new _t,x=(V,G,W)=>{let B=new se().setAttribute("position",new kt(V,3));return d(new He(B,new De({color:G,transparent:!0,opacity:W})))};d(f(new qt(new Pn(Hn,64),new oe({color:"#04140b"}))));let g=(V,G,W,B=.05)=>d(f(new qt(new ii(V-B,V+B,96),new oe({color:G,transparent:!0,opacity:W,side:me})))).position.set(0,.02,0);c.sectors.forEach((V,G)=>{let W=d(f(new qt(new Pn(Hn,24,-V.a1,V.a1-V.a0),new oe({color:a.palette[G%a.palette.length],transparent:!0,opacity:.3,side:me}))));W.position.y=.01});for(let V=1;V<=4;V++)g(Hn*V/4,Ki,.25);g(c.hold,Tl,.7,.07),x(c.sectors.flatMap(V=>[0,.03,0,Math.cos(V.a0)*Hn,.03,Math.sin(V.a0)*Hn]),Ki,.3);let y=d(f(new qt(new Pn(Hn,32,0,.7),new oe({color:Ki,transparent:!0,opacity:.22,side:me}))));y.position.y=.05;let w=d(new fe(new Me(1,1,1,14),new oe,c.blips.length));w.frustumCulled=!1;let _=s.selected&&h.has(s.selected)?s.selected:null,S=null,b=u,m=()=>S||_,v=V=>jt(V.n.name,30),P=()=>{let V=m()&&h.get(m());return V?`${v(V)} \xB7 ${mt(V.n.tasks,"open task")} \xB7 waiting ${ci(V.n)} days`:`${mt(c.tasks,"open task")} \xB7 ${mt(c.notes,"note")}`},E=(V,G)=>M.set(V).multiplyScalar(G);function U(){let V=m();c.blips.forEach((W,B)=>{let C=!V||W.n.id===V,k=W.r*(W.n.id===V?1.5:1);p.makeScale(k,W.h,k).setPosition(W.x,W.h/2,W.z),w.setMatrixAt(B,p),w.setColorAt(B,C?M.set(W.n.id===V?a.fg:W.holding?Tl:Ki):E(W.holding?Tl:Ki,.25))}),w.instanceMatrix.needsUpdate=!0,w.instanceColor&&(w.instanceColor.needsUpdate=!0);let G=c.sectors.map(W=>{let B=(W.a0+W.a1)/2;return{text:`${jt(W.name,24).toUpperCase()} \xB7 ${W.n}`,at:[Math.cos(B)*(Hn+1.2),0,Math.sin(B)*(Hn+1.2)],color:Ki}});for(let W of[...c.blips].sort((B,C)=>C.n.tasks-B.n.tasks).slice(0,8))G.push({text:`${jt(W.n.name,22)} \xB7 ${W.n.tasks}`,at:[W.x,W.h,W.z],dy:-10,color:W.holding?"#fecaca":"#bbf7d0"});if(V){let W=h.get(V);G.unshift({text:v(W),at:[W.x,W.h,W.z],strong:!0,dy:-18,run:()=>N(V),title:`Open ${v(W)}`})}t.labels(G),t.stat(P())}function N(V){_=V,U(),l(),r(V)}let D=c.blips.filter(V=>V.holding),R=[...c.blips].sort((V,G)=>ci(G.n)-ci(V.n))[0],H=[];D.length&&H.push({text:`${mt(D.length,"note")} ${D.length===1?"has":"have"} a task waiting more than ${$r} days. Each is either still wanted or can be crossed off.`,label:"Triage",run:()=>o("triage")}),R&&ci(R.n)>30&&H.push({text:`${jt(R.n.name,40)} has waited longest: ${ci(R.n)} days.`,label:"Open note",run:()=>N(R.n.id)});let O=c.sectors[0];O&&c.sectors.length>1&&H.push({text:`${O.name} holds the most notes with open tasks (${O.n} of ${c.notes}).`,label:"Open its busiest",run:()=>N(c.blips.filter(V=>V.n.cluster===O.cluster).sort((V,G)=>G.n.tasks-V.n.tasks)[0].n.id)}),t.explain({plain:"Picture a radar screen. Every note with an open task is a blip. The longer its oldest task has waited, the closer to the middle it drifts, and inside the red ring it has been waiting more than three months.",about:"Each topic has a slice of the screen and each note with open tasks is a blip in its slice. Distance from the centre is how long the oldest open task has waited (a year or more sits in the middle). The size of a blip, and the height of its column when you tilt, is how many open tasks it holds. Tick tasks off in the note and its blip drifts away or goes.",legend:[{color:Ki,text:"note with open tasks"},{color:Tl,text:"oldest task 90+ days"},{color:"#6b7280",text:"nearer the middle = waited longer"}],insights:H});let q=()=>t.controls({lines:[D.length?`${mt(D.length,"note")} holding past ${$r} days`:"Pick a blip to open its note"],buttons:[{label:e.tilted?"Flat":"Tilt",title:e.tilted?"Look straight down again":"Tilt into 3D: a blip becomes a column as tall as its task count",run:()=>{e.tilt(),q()}},...D.length?[{label:"Triage",title:"Go through the open tasks one by one",run:()=>o("triage")}]:[]]});q(),U();let Z=performance.now(),L=0,X=V=>{y.rotation.z=-(V*.5%(2*Math.PI))};return X(0),{targets:()=>c.blips.map(V=>({at:[V.x,V.h/2,V.z],r:Math.max(.7,V.r*1.3),key:{kind:"note",id:V.n.id,tip:`${V.n.name} \xB7 ${mt(V.n.tasks,"open task")} \xB7 waiting ${ci(V.n)} days`}})),click(V){V.kind==="note"&&N(V.id)},hover(V){let G=V&&V.kind==="note"?V.id:null;G!==S&&(S=G,U())},update(V){"selected"in V&&(_=V.selected&&h.has(V.selected)?V.selected:null,U())},frame(){b||(X((performance.now()-Z)/1e3),clearTimeout(L),L=setTimeout(l,33))},stat:P,today:()=>D.length?{text:`${mt(D.length,"note")} ${D.length===1?"has":"have"} tasks waiting ${$r}+ days \xB7 oldest: ${jt(R.n.name,30)} (${ci(R.n)} days)`,label:"Triage",run:()=>o("triage")}:null,api:{layout:()=>c,selected:()=>_,hold(){b=!0,l()},blips:()=>c.blips.length,holding:()=>D.length,tilted:()=>e.tilted},dispose(){b=!0,clearTimeout(L)}}}};var Rl=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Ef=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],to=3.2,eo=1.5,Tf=1.2,wy=2.2,Ey=12,Ty=3,Al="#fde047",Ay=[{key:"wd",n:7,name:"WEEK",labels:Rl},{key:"mo",n:12,name:"YEAR",labels:Ef}],hi=(i,t)=>i/t*2*Math.PI-Math.PI/2;function Ry(i,t=new Date,e=!1){let n=new Map(i.clusters.map(u=>[u.id,u.name])),s=Object.entries(i.rhythm||{}).map(([u,f])=>({cluster:+u,name:n.get(+u)||"No topic",wd:f.wd,mo:f.mo,tot:f.wd.reduce((p,M)=>p+M,0)})).filter(u=>u.tot>=Ty&&n.has(u.cluster)).sort((u,f)=>u.tot-f.tot||u.cluster-f.cluster).slice(-Ey),r=to+s.length*eo,o=r+3,a=Ay.map((u,f)=>{let p=new Array(u.n).fill(0);s.forEach(x=>x[u.key].forEach((g,y)=>{p[y]+=g}));let M=(f?1:-1)*o;return{...u,centre:e?[0,M]:[M,0],totals:p,peak:p.indexOf(Math.max(...p))}}),l=[];a.forEach((u,f)=>s.forEach((p,M)=>{let x=Math.max(1,...p[u.key]);for(let g=0;g<u.n;g++){let y=p[u.key][g],w=y/x;l.push({dial:f,ring:M,s:g,v:y,t:w,cluster:p.cluster,a0:hi(g,u.n),a1:hi(g+1,u.n),r0:to+M*eo,r1:to+M*eo+Tf,h:y?.15+wy*w:.04})}}));let c=(t.getDay()+6)%7,h=new Date(t.getFullYear(),t.getMonth()+1,0).getDate(),d=t.getMonth();return{rings:s,dials:a,cells:l,rOut:r,now:{wd:c,mo:d,frac:{wd:(c+(t.getHours()+t.getMinutes()/60)/24)/7,mo:(d+(t.getDate()-1+t.getHours()/24)/h)/12}}}}var dh=(i,t)=>i[t].indexOf(Math.max(...i[t])),Af={id:"clock",name:"Heat clock",hint:"When each topic comes up: weekday and month dials, hotter = more mentions",home:{yaw:0,pitch:1.5,dist:60,min:20,max:140,minPitch:.55,maxPitch:1.5,pan:!0},stage:{fog:!1,ambient:1},actions:["graph"],build({stage:i,frame:t,orbit:e,data:n,inputs:s,onOpen:r,onAction:o,theme:a,invalidate:l}){let c=(i.camera.aspect||1)<1,h=Ry(n,s.now||new Date,c),d=C=>(i.scene.add(C),C);if(h.rings.length<1){let C=()=>"No weekday or month pattern yet";return t.stat(C()),t.controls({at:"centre",lines:["The Heat clock shows when each topic comes up in your daily notes.","There is no pattern to show yet."],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>o("graph")}]}),{targets:()=>[],click(){},update(){},stat:C,today:()=>null,api:{empty:!0}}}let u=C=>a.palette[Math.max(0,n.clusters.findIndex(k=>k.id===C))%a.palette.length],f=new _t("#1f2933"),p=new _t("#1a2027"),M=new _t,x=new _t,g=(C,k,tt)=>[C.centre[0]+Math.cos(k)*tt,C.centre[1]+Math.sin(k)*tt],y=[],w=[],_=C=>C.n===7?3:2,S=(...C)=>{for(let k of C)y.push(k[0],k[1],k[2])};for(let C of h.cells){let k=h.dials[C.dial],tt=y.length/3,nt=_(k),ot=(C.a1-C.a0)/nt,xt=.012,ft=($,It,Dt)=>{let[Yt,Wt]=g(k,$,It);return[Yt,Dt,Wt]};for(let $=0;$<nt;$++){let It=C.a0+$*ot+($===0?xt:0),Dt=C.a0+($+1)*ot-($===nt-1?xt:0);S(ft(It,C.r0,C.h),ft(Dt,C.r0,C.h),ft(Dt,C.r1,C.h),ft(It,C.r0,C.h),ft(Dt,C.r1,C.h),ft(It,C.r1,C.h)),S(ft(It,C.r1,0),ft(Dt,C.r1,0),ft(Dt,C.r1,C.h),ft(It,C.r1,0),ft(Dt,C.r1,C.h),ft(It,C.r1,C.h)),S(ft(It,C.r0,0),ft(Dt,C.r0,C.h),ft(Dt,C.r0,0),ft(It,C.r0,0),ft(It,C.r0,C.h),ft(Dt,C.r0,C.h))}let wt=C.a0+xt,Mt=C.a1-xt;S(ft(wt,C.r0,0),ft(wt,C.r1,0),ft(wt,C.r1,C.h),ft(wt,C.r0,0),ft(wt,C.r1,C.h),ft(wt,C.r0,C.h)),S(ft(Mt,C.r0,0),ft(Mt,C.r1,C.h),ft(Mt,C.r1,0),ft(Mt,C.r0,0),ft(Mt,C.r0,C.h),ft(Mt,C.r1,C.h)),w.push([tt,y.length/3-tt,nt*6])}let b=new se().setAttribute("position",new kt(y,3)),m=new kt(new Float32Array(y.length),3);b.setAttribute("color",m),d(new qt(b,new oe({vertexColors:!0,side:me}))).frustumCulled=!1;let v=[],P=[];h.dials.forEach(C=>{let k=h.now.frac[C.key],tt=hi(k*C.n,C.n),nt=h.now[C.key],ot=to-.6,xt=h.rOut+.4,[ft,wt]=g(C,tt,ot),[Mt,$]=g(C,tt,xt);v.push(ft,.3,wt,Mt,.3,$);for(let It of[hi(nt,C.n),hi(nt+1,C.n)]){let[Dt,Yt]=g(C,It,ot),[Wt,Lt]=g(C,It,xt);P.push(Dt,.3,Yt,Wt,.3,Lt)}});let E=(C,k)=>{let tt=new se().setAttribute("position",new kt(C,3));return d(new He(tt,new De({color:Al,transparent:!0,opacity:k})))};E(v,1),E(P,.55),h.dials.forEach(C=>{let k=hi(h.now.frac[C.key]*C.n,C.n),[tt,nt]=g(C,k,h.rOut+.4);d(new qt(new de(.4,12,8),new oe({color:Al}))).position.set(tt,.3,nt)});let U=new Map(h.rings.map(C=>[C.cluster,C])),N=C=>n.nodes.filter(k=>k.cluster===C&&!Re(k)).sort((k,tt)=>tt.inlinks+tt.outlinks-(k.inlinks+k.outlinks)||(k.id<tt.id?-1:1)),D=null,R=null,H=C=>h.dials[C.dial].labels[C.s],O=C=>Math.round(100*C.v/Math.max(1,U.get(C.cluster).tot)),q=new Map(h.cells.map((C,k)=>[`${C.dial}:${C.ring}:${C.s}`,k])),Z=()=>{let C=R!=null&&h.cells[R];if(C)return`${jt(U.get(C.cluster).name,28)} \xB7 ${H(C)} \xB7 ${mt(C.v,"mention")}`;if(D!=null){let k=U.get(D);return`${jt(k.name,28)} \xB7 busiest ${Rl[dh(k,"wd")]} \xB7 ${Ef[dh(k,"mo")]} \xB7 ${mt(k.tot,"mention")}`}return`${mt(h.rings.length,"topic")} \xB7 busiest ${h.dials[0].labels[h.dials[0].peak]} \xB7 ${h.dials[1].labels[h.dials[1].peak]}`};function L(){let C=m.array;h.cells.forEach((tt,nt)=>{let ot=D==null||tt.cluster===D,[xt,ft,wt]=w[nt],Mt=nt===R;tt.v?x.copy(f).lerp(M.set(u(tt.cluster)),.15+.85*tt.t):x.copy(p),ot||x.multiplyScalar(.3),Mt&&x.lerp(M.set(a.fg),.35);for(let $=0;$<ft;$++){let It=$<wt?1:.62;C[(xt+$)*3]=x.r*It,C[(xt+$)*3+1]=x.g*It,C[(xt+$)*3+2]=x.b*It}}),m.needsUpdate=!0;let k=[];if(h.dials.forEach(tt=>{tt.labels.forEach((nt,ot)=>{let xt=(hi(ot,tt.n)+hi(ot+1,tt.n))/2,[ft,wt]=g(tt,xt,h.rOut+1.6);k.push({text:nt,at:[ft,0,wt],color:ot===h.now[tt.key]?Al:"#e2e8f0"})}),k.push({text:tt.name,at:[tt.centre[0],0,tt.centre[1]],dy:-8,color:"#94a3b8"},{text:`busiest: ${tt.labels[tt.peak]}`,at:[tt.centre[0],0,tt.centre[1]],dy:8,color:"#f8fafc"})}),D!=null){let tt=N(D)[0],nt=U.get(D),ot=h.dials[0],xt=h.rings.indexOf(nt),[ft,wt]=g(ot,hi(0,7),to+xt*eo+Tf/2);k.push({text:jt(nt.name,26),at:[ft,.5,wt],strong:!0,dy:-10,...tt?{run:()=>r(tt.id),title:`Open ${tt.name}`}:{}})}t.labels(k),t.stat(Z())}function X(C){D=D===C?null:C,L(),W(),l()}let V=h.rings.filter(C=>C.tot>=10).map(C=>({r:C,k:Math.max(...C.wd)/C.tot})).sort((C,k)=>k.k-C.k)[0],G=[];G.push({text:`Mentions peak on ${h.dials[0].labels[h.dials[0].peak]} and in ${h.dials[1].labels[h.dials[1].peak]}.`,label:"Busiest topic",run:()=>X(h.rings[h.rings.length-1].cluster)}),V&&V.k>.3&&G.push({text:`${V.r.name} clusters on ${Rl[dh(V.r,"wd")]}: ${Math.round(V.k*100)}% of its mentions.`,label:"Show its ring",run:()=>X(V.r.cluster)}),t.explain({plain:"Picture two clock faces. One is a week, one is a year, and each topic is a ring on both. A cell glows when that topic comes up in your daily notes on that weekday or in that month.",about:"Each ring is a topic, the busiest outside. A cell's heat, and its height when you tilt, is that topic's share of its own mentions that fall on that weekday or month, so a bright cell is where the topic peaks. It counts mentions in daily notes, not hours worked. The yellow hand is right now.",legend:[{color:a.fg,text:"bright, tall cell: the topic's busiest weekday or month"},{color:"#1f2933",text:"dark cell: rarely"},{color:Al,text:"now"}],insights:G});function W(){let C=D!=null?N(D)[0]:null;t.controls({lines:[D!=null?`${U.get(D).name}`:"Pick a ring to see its topic"],buttons:[...C?[{label:`Open ${jt(C.name,18)}`,title:`Open ${C.name}, the topic's most linked note`,run:()=>r(C.id)}]:[],...D!=null?[{label:"Clear",title:"Show every topic again",run:()=>X(D)}]:[],{label:e.tilted?"Flat":"Tilt",title:e.tilted?"Look straight down again":"Tilt into 3D: a cell is as tall as its heat",run:()=>{e.tilt(),W()}}]})}W(),L();let B=h.rings[h.rings.length-1];return{targets:()=>h.cells.map((C,k)=>{let tt=h.dials[C.dial],nt=(C.a0+C.a1)/2,[ot,xt]=g(tt,nt,(C.r0+C.r1)/2),ft=(C.a1-C.a0)*(C.r0+C.r1)/2;return{at:[ot,C.h/2,xt],r:Math.max(.55,Math.min(eo*.6,ft*.4)),key:{kind:"ring",id:C.cluster,cell:k,tip:`${U.get(C.cluster).name} \xB7 ${H(C)} \xB7 ${mt(C.v,"mention")} (${O(C)}%)`}}}),click(C){C.kind==="ring"&&X(C.id)},hover(C){let k=C&&C.kind==="ring"?C.cell:null;k!==R&&(R=k,L())},update(){},stat:Z,today(){let C=h.now.wd,k=h.rings.map(nt=>({r:nt,k:nt.wd[C]/nt.tot})).sort((nt,ot)=>ot.k-nt.k)[0],tt=k&&N(k.r.cluster)[0];return k&&k.k>0?{text:`It is ${Rl[C]}: ${jt(k.r.name,30)} usually comes up most on this day (${Math.round(k.k*100)}% of its mentions)`,label:tt?"Open note":"Show ring",run:()=>tt?r(tt.id):X(k.r.cluster)}:null},api:{layout:()=>h,focus:()=>D,hovered:()=>R,tilted:()=>e.tilted,rings:()=>h.rings.length,cells:()=>h.cells.length,vertical:()=>c,cell:(C,k,tt)=>q.get(`${C}:${k}:${tt}`),top:()=>B&&B.cluster},dispose(){}}}};var fh=4,Cy=1.15,Uf=4,Rf="#f87171",Cf="#fde047",If="#22d3ee",Iy=2.399963;function Py(i,t){let e=new Map(t.ids.map((f,p)=>[f,p])),n=Ze(i.nodes),s=Pi(i),r=new Map,o=new Map,a=(f,p,M)=>{f.has(p)||f.set(p,[]),f.get(p).push(M)};for(let[f,p]of t.edges)a(r,t.ids[f],t.ids[p]),a(o,t.ids[p],t.ids[f]);let l=i.nodes.filter(f=>e.has(f.id)&&!Re(f)&&!f.isolated),c=Math.max(2,Math.ceil(Math.max(1,...l.map(f=>t.level[e.get(f.id)])))),h=Array.from({length:c},()=>[]);for(let f of l)h[Math.max(0,Math.min(c-1,Math.round(t.level[e.get(f.id)])-1))].push(f);let d=[];h.forEach((f,p)=>{f.sort((M,x)=>M.cluster-x.cluster||n(x)-n(M)),f.forEach((M,x)=>{let g=t.level[e.get(M.id)],y=Cy*Math.sqrt(x+.5)*1.5,w=x*Iy,_=(o.get(M.id)||[]).length;d.push({n:M,x:y*Math.cos(w),z:y*Math.sin(w),y:(g-1)*fh,r:.3+.9*Math.sqrt(Math.max(0,n(M))),level:g,band:p,reliedOn:_,leansOn:(r.get(M.id)||[]).length,endangered:_>=Uf&&s(M)})})});let u=Math.max(4,...d.map(f=>Math.hypot(f.x,f.z)))+2;return{notes:d,bands:h.map(f=>f.length),radius:u,up:f=>o.get(f)||[],down:f=>r.get(f)||[]}}var Pf=(i,t,e)=>new _t(i).lerp(new _t(t),e),Nf={id:"foodweb",name:"Food web",hint:"Which notes feed which: the notes everything rests on at the base, logs and plans on top, stale ones others rest on in red",home:{yaw:.6,pitch:.3,dist:46,min:10,max:130},stage:{fog:[60,190],ambient:.5},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=Py(e,n.web),c=l.notes,h=n.web.stats,d=Z=>(i.scene.add(Z),Z);if(c.length<3){let Z=()=>mt(c.length,"note");return t.stat(Z()),t.controls({at:"centre",lines:["The Food web needs notes that link to one another.",`${mt(c.length,"note")} so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:Z,today:()=>null,api:{empty:!0}}}let u=new Map(c.map(Z=>[Z.n.id,Z])),f=Z=>Z.n.name,p=new Ht,M=Z=>Z.endangered?Rf:o.palette[(Z.n.cluster||0)%o.palette.length],x=l.bands.map((Z,L)=>{if(!Z)return null;let X=d(new qt(new Pn(l.radius,48),new oe({color:Pf(o.palette[L%o.palette.length],o.bg,.9),transparent:!0,opacity:.55,side:me})));return X.rotation.x=-Math.PI/2,X.position.y=L*fh-.4,X.frustumCulled=!1,X}),g=d(new fe(new de(1,14,10),new oe,c.length));g.frustumCulled=!1;let y=Z=>d(new He(new se,new De({color:Z,transparent:!0,opacity:.9}))),w=y(Cf),_=y(If);w.frustumCulled=_.frustumCulled=!1;let S=n.selected&&u.has(n.selected)?n.selected:null,b=null,m=()=>b||S,v=new Set,P=c.filter(Z=>Z.endangered),E=Z=>Z.endangered?" \xB7 stale, others rest on it":"",U=()=>{let Z=m()&&u.get(m());return Z?`${f(Z)} \xB7 rests on ${mt(Z.leansOn,"note")} \xB7 ${mt(Z.reliedOn,"note")} rest on it${E(Z)}`:`mean level ${h.mean.toFixed(1)} \xB7 top ${h.maxLevel.toFixed(1)} \xB7 incoherence ${h.incoherence.toFixed(2)} \xB7 ${mt(P.length,"endangered note")}`},N=(Z,L,X)=>X.push(Z.x,Z.y,Z.z,L.x,L.y,L.z);function D(){let Z=m();v.clear(),Z&&(v.add(Z),l.up(Z).forEach(G=>v.add(G)),l.down(Z).forEach(G=>v.add(G))),c.forEach((G,W)=>{g.setMatrixAt(W,p.makeScale(G.r,G.r,G.r).setPosition(G.x,G.y,G.z)),g.setColorAt(W,Pf(M(G),o.bg,!Z||v.has(G.n.id)?0:.8))}),g.instanceMatrix.needsUpdate=!0,g.instanceColor.needsUpdate=!0;let L=[],X=[];if(Z){let G=u.get(Z);l.up(Z).forEach(W=>u.has(W)&&N(u.get(W),G,L)),l.down(Z).forEach(W=>u.has(W)&&N(G,u.get(W),X))}w.geometry.setAttribute("position",new kt(L,3)),w.visible=L.length>0,_.geometry.setAttribute("position",new kt(X,3)),_.visible=X.length>0;let V=l.bands.map((G,W)=>G?{text:`${W===0?"Level 1 \xB7 the base":"Level "+(W+1)} (${G})`,at:[-l.radius,W*fh,0],color:"#bbf7d0"}:null).filter(Boolean);if(Z){let G=u.get(Z);V.unshift({text:jt(f(G),34),at:[G.x,G.y+G.r,G.z],strong:!0,dy:-18,run:()=>R(Z),title:`Open ${f(G)}`})}t.labels(V),t.stat(U())}function R(Z){S=Z,D(),a(),s(Z)}let H=[...P].sort((Z,L)=>L.reliedOn-Z.reliedOn)[0],O=[...c].filter(Z=>Z.band===0).sort((Z,L)=>L.reliedOn-Z.reliedOn)[0],q=[];return H&&q.push({text:`${f(H)} holds up ${mt(H.reliedOn,"note")} and has not been edited in ${H.n.age} days. Open it and decide whether it is still true.`,label:"Open note",run:()=>R(H.n.id)}),O&&O.reliedOn&&q.push({text:`${f(O)} is the most relied-on note at the base: ${mt(O.reliedOn,"note")} rest on it.`,label:"Open note",run:()=>R(O.n.id)}),t.explain({plain:"Picture a food chain. The notes everything rests on are the plants at the bottom; logs and plans that mostly point at other notes are the animals at the top. If a note at the bottom goes out of date, everything standing on it is built on something stale.",about:`A note rests on the notes it links to, so each note gets a level: the more links lead up from the base to it, the higher it sits. Level is worked out so that every link climbs by about one; incoherence ${h.incoherence.toFixed(2)} is how far the links are from a clean hierarchy (0 is a clean one, 1 shows no direction at all). A red sphere is a note ${Uf} or more notes link to that has not been edited within the vault's stale limit. Pick a note: yellow lines go to the notes resting on it, blue to the notes it rests on.`,legend:[{color:"#bbf7d0",text:"height = level, the base at the bottom"},{color:Rf,text:"stale, and others rest on it"},{color:Cf,text:"rests on the picked note"},{color:If,text:"the picked note rests on"}],insights:q}),t.controls({lines:["Pick a note to see what rests on it"]}),D(),{targets:()=>c.map(Z=>({at:[Z.x,Z.y,Z.z],r:Math.max(Z.r*1.2,.9),key:{kind:"note",id:Z.n.id,tip:`${f(Z)} \xB7 level ${Z.level.toFixed(1)}${E(Z)}`}})),click(Z){Z.kind==="note"&&R(Z.id)},hover(Z){let L=Z&&Z.kind==="note"?Z.id:null;L!==b&&(b=L,D())},update(Z){"selected"in Z&&(S=Z.selected&&u.has(Z.selected)?Z.selected:null,D())},stat:U,today:()=>H?{text:`${f(H)} is stale and ${mt(H.reliedOn,"note")} rest on it`,label:"Open note",run:()=>R(H.n.id)}:null,api:{layout:()=>l,selected:()=>S,hold(){},notes:()=>c.length},dispose(){for(let Z of[...x.filter(Boolean),g,w,_])Z.geometry.dispose(),Z.material.dispose()}}}};var Uy=new z(0,1,0),ph=new z,Cl=new z,Ff=new z,Ny=new z,Df=new Ge,Fy=new _t;function $i(i,t,e,n){ph.set(t[0],t[1],t[2]),Cl.set(e[0],e[1],e[2]).sub(ph);let s=Cl.length()||1e-6;return Ff.copy(ph).addScaledVector(Cl,.5),Df.setFromUnitVectors(Uy,Cl.multiplyScalar(1/s)),i.compose(Ff,Df,Ny.set(n,s,n))}function _n(i,t,e,n){let s=new fe(i,t,Math.max(1,e.length)),r=new Ht;return s.count=e.length,s.frustumCulled=!1,e.forEach((o,a)=>{r.identity();let l=n(o,a,r);s.setMatrixAt(a,r),l!=null&&s.setColorAt(a,Fy.set(l))}),s}var mh=null;function Dy(){if(mh||typeof document>"u")return mh;let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),mh=new Gi(i)}function En(i,t,{size:e=3.4,color:n="#ffffff",opacity:s=.95}={}){let r=new se().setAttribute("position",new kt(new Float32Array(Math.max(1,i)*3),3)),o=new zi(r,new bi({color:n,size:e*2,map:Dy(),sizeAttenuation:!1,transparent:!0,opacity:s,blending:Un,depthWrite:!1}));o.frustumCulled=!1,o.userData.backdrop=!0;let a=l=>{let c=r.getAttribute("position");for(let h=0;h<i;h++){let d=t(h,l);c.setXYZ(h,d[0],d[1],d[2])}c.needsUpdate=!0};return a(0),{object:o,tick:a}}function ui(i,t){i.remove(t),t.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose(),e.isInstancedMesh&&e.dispose()})}var Ie=(i,t,e)=>"#"+new _t(i).lerp(new _t(t),e).getHexString();function Gs(i,t,e,n){return i.stat(e),i.controls({at:"centre",lines:n,buttons:[{label:"Open the graph",title:"Open the graph",run:()=>t("graph")}]}),{targets:()=>[],click(){},update(){},stat:()=>e,today:()=>null,api:{empty:!0}}}var xh=[8,18,32],Wn=[6,9,12],kf=40,Lf="#ef4444",Il="#60a5fa",Pl=[[1.15,0,.3,"ZXY"],[1.15,0,.3+Math.PI/3,"ZXY"],[1.15,0,.3+2*Math.PI/3,"ZXY"]],Ly=2.399963,no=.95;function gh(i,t){let{own:e,adj:n}=Qr(i.nodes,i.links),s=Ze(i.nodes),r=(m,v)=>s(e.get(v))-s(e.get(m))||(m<v?-1:1),o=[...e.keys()].filter(m=>n.get(m).size).sort(r);if(!o.length)return{centre:null,linked:0};let a=t&&e.has(t)&&n.get(t).size?t:o[0],l=new Map([[a,0]]),c=[a];for(let m=0;m<c.length;m++)for(let v of n.get(c[m]))l.has(v)||(l.set(v,l.get(c[m])+1),c.push(v));let h=xh.map((m,v)=>{let P=c.filter(E=>l.get(E)===v+1).sort(r);return{all:P.length,ids:P.slice(0,m)}}),d=new Set,u=new Set;for(let m of i.links)m.kind==="link"&&m.source!==m.target&&e.has(m.source)&&e.has(m.target)&&(m.target===a&&d.add(m.source),m.source===a&&u.add(m.target));let f=d.size,p=u.size,M=f+p,x=Math.min(M,kf),g=M?Math.max(f?1:0,Math.min(x-(p?1:0),Math.round(x*f/M))):0,y=[];for(let m=0,v=0;m<x;m++){let P=x>1?no*.92*Math.cbrt(m+.35):0,E=1-2*((m*.618034+.5)%1),U=Math.sqrt(1-E*E),N=m*Ly,D=Math.floor((m+1)*g/x)>v;D&&v++,y.push({at:[P*U*Math.cos(N),P*E,P*U*Math.sin(N)],proton:D})}let w=new z,_=[];h.forEach((m,v)=>{let P=new ln(...Pl[v]);m.ids.forEach((E,U)=>{let N=U/m.ids.length*Math.PI*2+v*.7;w.set(Wn[v]*Math.cos(N),Wn[v]*Math.sin(N),0).applyEuler(P),_.push({id:E,shell:v,at:[w.x,w.y,w.z],r:.5+.5*Math.sqrt(Math.max(0,s(e.get(E))))})})});let S=h.map((m,v)=>{let P=.5/Math.max(1,m.ids.length)*Math.PI*2+v*.7+Math.PI;return w.set(Wn[v]*Math.cos(P),Wn[v]*Math.sin(P),0).applyEuler(new ln(...Pl[v])),[w.x,w.y,w.z]}),b=c[c.length-1];return{centre:a,own:e,protons:f,neutrons:p,shells:h,electrons:_,gaps:S,nucleus:y,nucleusR:no*(1+.92*Math.cbrt(Math.max(x,1))),dist:m=>l.has(m)?l.get(m):null,within:c.filter(m=>l.get(m)>=1&&l.get(m)<=xh.length).length,linked:o.length,unreached:o.filter(m=>!l.has(m)),far:{id:b,d:l.get(b)}}}var Bf=["one link away","two links away","three links away"],Of={id:"atom",name:"Atom",hint:"One note as an atom: its links are the nucleus, the notes one, two and three links away its shells",drift:.08,home:{yaw:.25,pitch:.2,dist:33,min:10,max:160,minPitch:-1.4},stage:{light:"camera",fog:[70,240],ambient:.55,glow:{strength:.9,radius:.7,threshold:.5}},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=gh(e,n.selected),c=null,h=null,d=null,u=null,f=[];if(!l.centre)return Gs(t,r,mt(e.nodes.length,"note"),["The Atom needs notes that link to one another.","No written links yet."]);let p=b=>l.own.get(b).name,M=b=>o.palette[(l.own.get(b).cluster||0)%o.palette.length],x=[],g=()=>new un({color:"#ffffff",specular:"#777777",shininess:55}),y=()=>`${p(l.centre)} \xB7 ${mt(l.protons,"link")} in \xB7 ${l.neutrons} out \xB7 ${l.shells.map(b=>b.all).join(", ")} notes one, two and three links away`;function w(){c&&ui(i.scene,c),c=new rn;let b=()=>new de(1,24,16);c.add(_n(b(),g(),l.nucleus,(R,H,O)=>(O.makeScale(no,no,no).setPosition(...R.at),R.proton?Lf:Il))),f=[[1.35,.16],[1.9,.07]].map(([R,H])=>{let O=new qt(new de(l.nucleusR*R,32,16),new oe({color:Il,transparent:!0,opacity:H,blending:Un,depthWrite:!1,side:Ce}));return c.add(O),O});let m=Pl.map(R=>new ln(...R)),v=new z;h=En(9,(R,H)=>{let O=Math.floor(R/3),q=H*(.9-.25*O)+R%3*Math.PI*2/3;return v.set(Wn[O]*Math.cos(q),Wn[O]*Math.sin(q),0).applyEuler(m[O]).toArray()},{size:5,color:"#bfdcff"}),c.add(h.object),d=En(63,(R,H)=>{let O=R%9,q=Math.floor(R/9)+1,Z=Math.floor(O/3),L=H*(.9-.25*Z)+O%3*Math.PI*2/3-q*.09;return v.set(Wn[Z]*Math.cos(L),Wn[Z]*Math.sin(L),0).applyEuler(m[Z]).toArray()},{size:2.6,color:"#6aa8ff",opacity:.55}),c.add(d.object);let P=720,E=R=>[Wn[R%3],(R*2654435761>>>0)%10007/10007,(R*40503>>>0)%7919/7919,(R*69069>>>0)%6007/6007];u=En(P,(R,H)=>{let[O,q,Z,L]=E(R),X=q*Math.PI*2+.05*H*(1+R%3),V=Math.acos(2*Z-1),G=O*(1+.16*(L-.5)+.02*Math.sin(H*2+R));return[G*Math.sin(V)*Math.cos(X),G*Math.cos(V),G*Math.sin(V)*Math.sin(X)]},{size:1.6,color:"#7fb6ff",opacity:.5}),c.add(u.object),l.shells.forEach((R,H)=>{let O=new qt(new On(Wn[H],.16-.04*H,8,160),new oe({color:Ie(Il,o.fg,.35+.15*H),transparent:!0,opacity:R.ids.length?.85-.2*H:.25}));O.rotation.set(...Pl[H]),c.add(O)}),c.add(_n(b(),g(),l.electrons,(R,H,O)=>(O.makeScale(R.r,R.r,R.r).setPosition(...R.at),M(R.id)))),i.scene.add(c);let U=[{text:jt(p(l.centre),34),at:[0,l.nucleusR,0],strong:!0,dy:-18,run:()=>s(l.centre),title:`Open ${p(l.centre)}`}];l.shells.forEach((R,H)=>{R.ids.length&&U.push({text:`${Bf[H]} (${R.ids.length<R.all?`${R.ids.length} of ${R.all}`:R.all})`,at:l.gaps[H],color:o.muted,dy:14})});for(let R of l.electrons.filter(H=>H.shell===0).slice(0,4))U.push({text:jt(p(R.id),22),at:R.at,dy:-16,run:()=>E(R.id),title:`Open ${p(R.id)}`});t.labels(U),t.stat(y());let N=l.unreached[0],D=[];D.push({text:`${l.within} of ${mt(l.linked-1,"other linked note")} are within three links of ${p(l.centre)}.${l.far.d>3?` The farthest, ${p(l.far.id)}, is ${l.far.d} links away.`:""}`,...l.far.d>3?{label:"Open farthest",run:()=>E(l.far.id)}:{}}),l.shells[0].all===1&&D.push({text:`One link holds ${p(l.centre)} to the rest of the vault. A second link from a related note keeps it reachable if that one goes.`,label:"Open its neighbour",run:()=>E(l.shells[0].ids[0])}),N&&D.push({text:`${mt(l.unreached.length,"linked note")} can't be reached from here by any chain of links. ${p(N)} is the most relied-on of them.`,label:"Open note",run:()=>E(N)}),t.explain({plain:"Picture one note as an atom. Its own links are packed in the middle. The notes one link away circle closest, the notes two links away further out, and so on. A full, close shell means the note is well tied in.",about:`The nucleus is ${p(l.centre)}: a red ball for each note that links to it and a blue ball for each note it links to (at most ${kf} are drawn, in the same share). Each shell holds the notes that many written links away, the most relied-on first; a shell shows at most ${xh.join(", ")} of them, as an atom's shells do, and its label says how many there are in all. An electron takes its topic's colour and is bigger the more the vault leans on it.`,legend:[{color:Lf,text:"a note that links to it"},{color:Il,text:"a note it links to"},{color:o.palette[0],text:"electron = a note, shell = links away, colour = topic"}],insights:D}),t.controls({lines:["Pick an electron to make it the nucleus"],buttons:[{label:"\u2039 Back",title:"Back to the note before",off:!x.length,run:()=>{l=gh(e,x.pop()),w(),a()}},{label:p(l.centre),title:`Open ${p(l.centre)}`,wide:!0,run:()=>s(l.centre)}]})}function _(b){if(b===l.centre||!l.own.has(b))return;let m=gh(e,b);m.centre===b&&(x.push(l.centre),l=m,w())}function S(b){_(b),a(),s(b)}return i.sky({top:"#02050f",haze:"#0b1432",stars:500,starColor:"#cfe0ff"}),w(),{targets:()=>[{at:[0,0,0],r:l.nucleusR,key:{kind:"note",id:l.centre,tip:`${p(l.centre)} \xB7 ${mt(l.protons,"link")} in, ${l.neutrons} out`}},...l.electrons.map(b=>({at:b.at,r:Math.max(b.r*1.3,.9),key:{kind:"note",id:b.id,tip:`${p(b.id)} \xB7 ${Bf[b.shell]}`}}))],click(b){b.kind==="note"&&S(b.id)},update(b){"selected"in b&&b.selected&&_(b.selected)},stat:y,today:()=>null,api:{layout:()=>l,centre:()=>l.centre,back:()=>x.length},tick(b){h&&h.tick(b),d&&d.tick(b),u&&u.tick(b),f.forEach((m,v)=>m.scale.setScalar(1+.05*Math.sin(b*1.6+v)))},dispose(){c&&ui(i.scene,c)}}}};var di=9,Zn=1.8,_h=48,Gf=40,Vf="#fbbf24";function zf(i,t){let e=wl(i,{linkedOnly:!1});if(!e.length)return{topics:[],core:null};let n=Math.max(0,e.findIndex(w=>w.cluster===t)),s=e[n],{adj:r}=Qr(i.nodes,i.links,{hubs:!0}),o=Ze(i.nodes),a=Bs(i.nodes),l=Pi(i),c=s.moc||s.notes[0],h=s.notes.filter(w=>w!==c),d=new Set(h.map(w=>w.id)),u=r.get(c.id)||new Set,f=w=>({id:w.id,state:l(w)?"stale":a(w)>.35?"active":"steady",size:.7+.6*Math.sqrt(Math.max(0,o(w)))}),p={docked:[],second:[],adrift:[]};for(let w of h)(u.has(w.id)?p.docked:[...r.get(w.id)||[]].some(_=>d.has(_))?p.second:p.adrift).push(w);let M=p.docked.slice(0,_h).map((w,_,S)=>{let b=_/S.length*Math.PI*2+Math.PI/2;return{...f(w),a:b,at:[di*Math.cos(b),di*Math.sin(b),Zn]}}),x=new Map(M.map(w=>[w.id,w.a])),g=p.second.slice(0,_h).map(w=>({...f(w),anchor:[...r.get(w.id)].filter(_=>x.has(_)).sort((_,S)=>x.get(_)-x.get(S))[0]||null})).sort((w,_)=>(w.anchor?x.get(w.anchor):99)-(_.anchor?x.get(_.anchor):99)||(w.id<_.id?-1:1)).map((w,_,S)=>{let b=_/S.length*Math.PI*2+Math.PI/2;return{...w,a:b,at:[di*Math.cos(b),di*Math.sin(b),-Zn]}}),y=p.adrift.slice(0,Gf).map(w=>{let[_,S]=Kr(w.id),b=_*Math.PI*2,m=di+4.5+4*S;return{...f(w),at:[m*Math.cos(b),m*Math.sin(b),(nn(w.id)%100/100-.5)*8]}});return{topics:e.map(w=>({cluster:w.cluster,name:w.name})),index:n,cluster:s.cluster,name:s.name,core:{id:c.id,name:c.name,map:!!c.moc},docked:M,second:g,adrift:y,counts:{docked:p.docked.length,second:p.second.length,adrift:p.adrift.length}}}var Hf={id:"station",name:"Station",hint:"One topic as a ring station: notes its map links are docked, the rest ride the second ring or drift outside",drift:.06,home:{yaw:.65,pitch:.28,dist:50,min:12,max:170,minPitch:-1.4},stage:{light:"camera",fog:[80,260],ambient:.5,glow:{strength:.8,radius:.6,threshold:.55}},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=new Map(e.nodes.map(S=>[S.id,S])),c=S=>l.has(S)?l.get(S).cluster:void 0,h=zf(e,c(n.selected)),d=null,u=null,f=null;if(!h.core)return Gs(t,r,mt(e.nodes.length,"note"),["The Station needs notes in a topic.","No notes yet."]);let p=S=>l.get(S).name,M=(S,b)=>S.length<b?`${S.length} of ${b}`:`${b}`,x=()=>`${h.name} \xB7 ${h.counts.docked} docked \xB7 ${h.counts.second} on the second ring \xB7 ${h.counts.adrift} adrift`;function g(){d&&ui(i.scene,d),d=new rn;let S=o.palette[(h.cluster||0)%o.palette.length],b=Ie(o.muted,o.bg,.25),m=Ie(o.muted,o.fg,.55),v=W=>W.state==="stale"?b:W.state==="active"?Vf:S,P=W=>new un({color:W,specular:"#888888",shininess:40}),E=(W,B,C,k)=>{let tt=new qt(W,B);return tt.position.set(...C),k&&tt.rotation.set(...k),d.add(tt),tt};E(new Me(1.5,1.5,7,28),P(m),[0,0,0],[Math.PI/2,0,0]),E(new de(1.5,28,16),P(S),[0,0,3.5]),E(new de(1.5,28,16),P(m),[0,0,-3.5]),E(new Me(.22,.22,16,10),P(m),[0,0,0],[Math.PI/2,0,0]);for(let W of[7.2,-7.2]){E(new Me(.12,.12,13,8),P(m),[0,0,W],[0,0,Math.PI/2]);for(let B of[4,-4])E(new cn(5,2.6,.08),new un({color:"#1e3a8a",emissive:"#0b1a45",specular:"#93c5fd",shininess:90}),[B,0,W])}for(let W of[Zn,-Zn])E(new On(di,.16,8,96),P(m),[0,0,W]);let U=new z,N=(W,B)=>B.makeRotationZ(W.a).scale(U.set(.85*W.size,1.15*W.size,1.1*W.size)).setPosition(...W.at);d.add(_n(new cn(1,1,1),P("#ffffff"),[...h.docked,...h.second],(W,B,C)=>(N(W,C),v(W))));let D=new Map(h.docked.map(W=>[W.id,W.at])),R=()=>new Me(1,1,1,6),H=()=>new un({color:m,transparent:!0,opacity:.35,depthWrite:!1});d.add(_n(R(),H(),h.docked,(W,B,C)=>{$i(C,[0,0,Zn],W.at,.05)})),d.add(_n(R(),H(),h.second.filter(W=>W.anchor),(W,B,C)=>{$i(C,W.at,D.get(W.anchor),.05)})),d.add(_n(new ni(1,0),new un({color:"#ffffff",flatShading:!0}),h.adrift,(W,B,C)=>(C.makeRotationZ(B).scale(U.set(.6*W.size,.45*W.size,.5*W.size)).setPosition(...W.at),W.state==="stale"?b:Ie(S,b,.6))));let O=[...h.docked.map(W=>[[0,0,Zn],W.at]),...h.second.filter(W=>W.anchor).map(W=>[D.get(W.anchor),W.at])];u=En(O.length,(W,B)=>{let[C,k]=O[W],tt=(B*.35+W*.618)%1;return[C[0]+(k[0]-C[0])*tt,C[1]+(k[1]-C[1])*tt,C[2]+(k[2]-C[2])*tt]},{size:4,color:"#ffe9a8"}),d.add(u.object);let q=150;f=En(q,(W,B)=>{let C=W/q*Math.PI*2,k=W%2?Zn:-Zn,tt=di+(W%3-1)*.35;return[tt*Math.cos(C),tt*Math.sin(C),k+.45*(W%5===0?1:-1)*(.6+.4*Math.sin(B*2.5+W*7)*(W%7===0?1:0))]},{size:2.4,color:"#ffd98a",opacity:.9}),d.add(f.object),i.scene.add(d);let Z=W=>({run:()=>s(W.id),title:`Open ${p(W.id)}`}),L=[{text:jt(h.core.name,34),at:[0,1.6,3.5],strong:!0,dy:-16,run:()=>s(h.core.id),title:`Open ${h.core.name}`}];for(let W of h.docked.slice(0,5))L.push({text:jt(p(W.id),22),at:W.at,dy:-14,...Z(W)});h.docked.length&&L.push({text:`docked (${M(h.docked,h.counts.docked)})`,at:[0,-di,Zn],color:o.muted,dy:16}),h.second.length&&L.push({text:`second ring (${M(h.second,h.counts.second)})`,at:[di,0,-Zn],color:o.muted,dy:16}),h.adrift.length&&L.push({text:`adrift (${M(h.adrift,h.counts.adrift)})`,at:h.adrift[0].at,color:o.muted,dy:16}),t.labels(L),t.stat(x());let X=[],V=h.counts.docked+h.counts.second+h.counts.adrift;V&&X.push({text:`${h.counts.docked} of ${mt(V,"note")} in ${h.name} link with ${h.core.name}.`+(h.core.map?"":` ${h.name} has no map; ${h.core.name} is its most relied-on note.`),label:`Open ${jt(h.core.name,18)}`,run:()=>s(h.core.id)}),h.second.length&&X.push({text:`${mt(h.counts.second,"note")} link with the topic but not with ${h.core.name}. ${p(h.second[0].id)} is the most relied-on of them; a link from ${h.core.name} docks it.`,label:"Open note",run:()=>s(h.second[0].id)}),h.adrift.length&&X.push({text:`${mt(h.counts.adrift,"note")} link with nothing in ${h.name}. ${p(h.adrift[0].id)} is the most relied-on of them.`,label:"Open note",run:()=>s(h.adrift[0].id)}),t.explain({plain:"Picture a topic as a space station. The hub in the middle is the topic's map. Every note the map links with is a module bolted to the front ring. Notes that only link with other notes ride the second ring. Notes that link with nothing here drift outside as rocks.",about:`The hub is ${h.core.name}${h.core.map?", the topic's map":", the topic's most relied-on note (the topic has no map)"}. A spoke is a link between the hub and a note; a strut is a link between a second-ring note and a docked one. A module is bigger the more the vault leans on the note. A ring shows at most ${_h} modules and ${Gf} rocks are drawn, the most relied-on first; each label says how many there are in all.`,legend:[{color:Vf,text:"edited lately"},{color:S,text:"a note of the topic"},{color:b,text:"stale"},{color:m,text:"spoke or strut = a link"}],insights:X});let G=W=>()=>{y(h.topics[(h.index+W+h.topics.length)%h.topics.length].cluster),a()};t.controls({lines:[`Topic ${h.index+1} of ${h.topics.length}`],buttons:[{label:"\u2039",title:"The topic before",off:h.topics.length<2,run:G(-1)},{label:h.name,title:`Open ${h.core.name}`,wide:!0,run:()=>s(h.core.id)},{label:"\u203A",title:"The next topic",off:h.topics.length<2,run:G(1)}]})}function y(S){if(S===void 0||S===h.cluster)return;let b=zf(e,S);b.cluster===S&&(h=b,g())}i.sky({top:"#02050f",haze:"#0b1432",stars:500,starColor:"#cfe0ff"}),g();let w={active:"edited lately",steady:"",stale:"stale"},_=(S,b)=>[p(S.id),b,w[S.state]].filter(Boolean).join(" \xB7 ");return{targets:()=>[{at:[0,0,0],r:2.2,key:{kind:"note",id:h.core.id,tip:`${h.core.name} \xB7 the hub of ${h.name}`}},...h.docked.map(S=>({at:S.at,r:.9*S.size,key:{kind:"note",id:S.id,tip:_(S,"docked")}})),...h.second.map(S=>({at:S.at,r:.9*S.size,key:{kind:"note",id:S.id,tip:_(S,"second ring")}})),...h.adrift.map(S=>({at:S.at,r:.8*S.size,key:{kind:"note",id:S.id,tip:_(S,"adrift")}}))],click(S){S.kind==="note"&&s(S.id)},update(S){"selected"in S&&S.selected&&y(c(S.selected))},stat:x,today:()=>h.adrift.length?{text:`${p(h.adrift[0].id)} links with nothing in ${h.name}.`,label:"Open note",run:()=>s(h.adrift[0].id)}:null,api:{layout:()=>h,go:S=>{y(S),a()}},tick(S){u&&u.tick(S),f&&f.tick(S)},dispose(){d&&ui(i.scene,d)}}}};var Ni=30,Xf=37,Jf=12,qf=4,Wf=1.5,Zf="#ef4444",yh="#3b82f6",io=.6,Hs=2.1,Yn=7.2,ts=5;function Yf(i,t=[]){let e=[];for(let n=-i-1;n<=i;n++)for(let s=-i-1;s<=i;s++)for(let r of t.length?t:[0]){let o=n+r,a=s+r,l=Wf*(o+a/2),c=Wf*a*.8660254;(t.length||Math.max(Math.abs(n),Math.abs(s),Math.abs(n+s))<=i)&&e.push([l,c])}return e.sort((n,s)=>Math.hypot(...n)-Math.hypot(...s)||Math.atan2(n[1],n[0])-Math.atan2(s[1],s[0]))}function By(i){let t=i.nodes.filter(y=>!Re(y)),e=Bs(i.nodes),n=Pi(i),s=i.quality&&i.quality.stale_days||180,r=(y,w)=>y.id<w.id?-1:1,o=t.filter(y=>(y.age||0)<=Ni).sort((y,w)=>e(w)-e(y)||r(y,w)),a=t.filter(n),l=a.filter(y=>y.age<=s+Ni),c=Yf(3),h=Yf(3,[1/3,2/3]),d=o.slice(0,Xf).map((y,w)=>({id:y.id,cluster:y.cluster,heat:e(y),at:c[w],h:2.2+3.2*e(y)})),u=a.filter(y=>y.inlinks>0).sort((y,w)=>w.inlinks-y.inlinks||r(y,w)),f=u.length?u[0].inlinks:1,p=u.slice(0,Jf).map((y,w)=>({id:y.id,cluster:y.cluster,links:y.inlinks,depth:.25+.75*(y.inlinks/f),at:h[w]})),M=new Map;for(let y of o)M.set(y.cluster,(M.get(y.cluster)||0)+1);let x=new Map(i.clusters.map(y=>[y.id,y.label||y.name])),g=[...M].sort((y,w)=>w[1]-y[1]||y[0]-w[0]).slice(0,qf).map(([y,w])=>({cluster:y,name:x.get(y)||`Topic ${y}`,edited:w,share:w/o.length}));return{edited:o.length,wentStale:l.length,stale:a.length,leaned:u.length,k:l.length?o.length/l.length:null,fuel:d,control:p,loops:g}}var jf={id:"reactor",name:"Reactor",hint:"The last 30 days as a reactor: edited notes are fuel, stale notes others link to are control rods",home:{yaw:io,pitch:.42,dist:62,min:10,max:200},stage:{light:"camera",fog:[90,300],ambient:.6,glow:{strength:.7,radius:.5,threshold:.85}},actions:["graph"],build({stage:i,frame:t,data:e,onOpen:n,onAction:s,theme:r,invalidate:o}){let a=By(e),l=new Map(e.nodes.map(v=>[v.id,v])),c=v=>l.get(v).name;if(!a.fuel.length&&!a.control.length)return Gs(t,s,mt(e.nodes.length,"note"),[`The Reactor needs notes edited in the last ${Ni} days, or stale notes other notes link to.`,"Neither yet."]);let h=null,d=null,u=null,f=null,p=null,M=null,x=v=>r.palette[(v||0)%r.palette.length],g=a.k==null?null:a.k.toFixed(2),y=()=>`${g?`k ${g} \xB7 `:""}${mt(a.edited,"note")} edited in ${Ni} days \xB7 ${a.wentStale||"none"} went stale \xB7 ${mt(a.control.length,"control rod")}`,w=v=>io+Math.PI+(v-(a.loops.length-1)/2)*1,_=(v,P,E)=>[P*Math.sin(v),E,P*Math.cos(v)];function S(){h&&ui(i.scene,h),h=new rn;let v=Ie("#5b6b86",r.bg,.25),P=Ie("#1b2742",r.bg,.2),E=Ie(r.fg,r.bg,.25),U=k=>d==null||d===k?0:.82,N=(k,tt)=>new un({color:k,specular:"#666666",shininess:35,...tt}),D=(k,tt,nt)=>{let ot=new qt(k,tt);return ot.position.y=nt,h.add(ot),ot},R=(k,tt)=>new Me(k,k,tt,64,1,!0,io+Hs/2,Math.PI*2-Hs),H=(k,tt)=>new de(k,64,20,io+Hs/2+Math.PI/2,Math.PI*2-Hs,tt?0:Math.PI/2,Math.PI/2);D(new Me(19,19,1,64),N(P),-5.5);let O=(k,tt,nt=me)=>new oe({color:k,transparent:!0,opacity:tt,blending:Un,depthWrite:!1,side:nt});[8,12.5,16,18.4].forEach((k,tt)=>{let nt=D(new ii(k-.07,k+.07,96),O(tt===3?"#38bdf8":"#1d4ed8",.55-tt*.08),-4.98);nt.rotation.x=-Math.PI/2}),[-3,1,5,9,13].forEach(k=>{let tt=D(new On(18,.045,6,128),O("#3b82f6",.5),k-1);tt.rotation.x=Math.PI/2});for(let k=0;k<12;k++){let tt=D(new On(18,.045,6,64,Math.PI/2),O("#3b82f6",.38),12);tt.scale.y=.6,tt.rotation.order="YXZ",tt.rotation.y=k/12*Math.PI*2,tt.rotation.z=0}let q=new Sr("#38bdf8",90,40,1.6);q.position.set(0,3.5,0),h.add(q),D(new Me(5.9,5.9,Yn,48,1,!0),O("#22d3ee",.16,Ce),Yn/2);let Z={side:me,transparent:!0,opacity:.3,depthWrite:!1};D(R(18,17),N(P,Z),3.5),D(H(18,!0),N(P,Z),12).scale.y=.6,D(R(6.2,12),N(v,{side:me}),3),D(H(6.2,!1),N(v,{side:me}),-3).scale.y=.5,D(H(6.2,!0),N(v,{side:me}),9).scale.y=.5,D(new Me(5.9,5.9,.3,48),N(E),-.2),D(new Me(5.9,5.9,.3,48),N(E),Yn),D(new Me(5.8,5.8,Yn,48,1,!1,io+Hs/2,Math.PI*2-Hs),new un({color:"#38bdf8",transparent:!0,opacity:.2,depthWrite:!1,side:me}),Yn/2);let L=k=>new Me(1,1,1,k);h.add(_n(L(12),new un({color:"#ffffff",shininess:70}),a.fuel,(k,tt,nt)=>($i(nt,[k.at[0],0,k.at[1]],[k.at[0],k.h,k.at[1]],.42),Ie(Ie(E,x(k.cluster),.5+.5*k.heat),r.bg,U(k.cluster))))),h.add(_n(L(8),N("#ffffff"),a.control,(k,tt,nt)=>{let ot=Yn-ts*k.depth;return $i(nt,[k.at[0],ot,k.at[1]],[k.at[0],ot+ts+1.4,k.at[1]],.2),Ie(E,r.bg,U(k.cluster))})),h.add(_n(new de(1,12,8),N("#ffffff"),a.control,(k,tt,nt)=>(nt.makeScale(.36,.36,.36).setPosition(k.at[0],Yn-ts*k.depth+ts+1.4,k.at[1]),Ie(E,r.bg,U(k.cluster)))));let X=[];a.loops.forEach((k,tt)=>{let nt=w(tt),ot=.28+.5*k.share,xt=U(k.cluster),ft=_(nt,13.5,0),wt=_(nt+.2,10.5,0),Mt=new qt(new Me(1.9,1.4,12,24),N(Ie(x(k.cluster),r.bg,xt)));Mt.position.set(ft[0],1,ft[2]),h.add(Mt);let $=new qt(new de(1.9,24,12,0,Math.PI*2,0,Math.PI/2),N(Ie(x(k.cluster),r.bg,xt)));$.position.set(ft[0],7,ft[2]),h.add($);let It=new qt(new Me(.9,.9,3.4,16),N(Ie(v,r.bg,xt)));It.position.set(wt[0],1.2,wt[2]),h.add(It),X.push({from:_(nt-.07,6.1,5),to:_(nt-.05,12.4,5),w:ot,c:Ie(Zf,r.bg,xt)},{from:_(nt+.05,12.6,1),to:[wt[0],1,wt[2]],w:ot,c:Ie(yh,r.bg,xt)},{from:[wt[0],2.4,wt[2]],to:_(nt+.12,6.1,3.2),w:ot,c:Ie(yh,r.bg,xt)})});let V=a.fuel.slice(0,48);u=En(V.length,(k,tt)=>{let nt=V[k],ot=(tt*(.18+.1*(k*7%5)/5)+k*.37)%1;return[nt.at[0]+.35*Math.sin(tt*2+k),ot*Yn,nt.at[1]+.35*Math.cos(tt*2+k)]},{size:3,color:"#bfe9ff",opacity:.8}),h.add(u.object);let G=a.fuel.map(k=>[k.at[0],k.h,k.at[1]]);f=En(G.length,(k,tt)=>[G[k][0],G[k][1]+.1+.05*Math.sin(tt*3+k),G[k][2]],{size:6,color:"#a5f3fc",opacity:1}),h.add(f.object);let W=a.loops.map((k,tt)=>_(w(tt),13.5,8));p=W.length?En(W.length*14,(k,tt)=>{let nt=W[k%W.length],ot=(tt*.12+k*.173)%1;return[nt[0]+.9*Math.sin(k*2.3+ot*4),nt[1]+ot*6,nt[2]+.9*Math.cos(k*1.7+ot*4)]},{size:9,color:"#cbd5e1",opacity:.12}):null,p&&h.add(p.object),M=X.length?En(X.length*4,(k,tt)=>{let nt=X[k%X.length],ot=(tt*.22+Math.floor(k/X.length)/4)%1;return[0,1,2].map(xt=>nt.from[xt]+(nt.to[xt]-nt.from[xt])*ot)},{size:4,color:"#fff1c2",opacity:.95}):null,M&&h.add(M.object),h.add(_n(L(12),N("#ffffff"),X,(k,tt,nt)=>($i(nt,k.from,k.to,k.w),k.c))),i.scene.add(h);let B=a.loops.map((k,tt)=>({text:`${jt(k.name,20)} (${k.edited})`,at:_(w(tt),13.5,9),dy:-14,run:()=>b(k.cluster),title:`Only ${k.name}`}));for(let k of a.fuel.slice(0,3))B.push({text:jt(c(k.id),22),at:[k.at[0],k.h,k.at[1]],dy:-14,run:()=>n(k.id),title:`Open ${c(k.id)}`});a.control[0]&&B.push({text:jt(c(a.control[0].id),22),at:[a.control[0].at[0],Yn+ts+1.4,a.control[0].at[1]],dy:-14,color:r.muted,run:()=>n(a.control[0].id),title:`Open ${c(a.control[0].id)}`}),t.labels(B),t.stat(y());let C=d==null?null:a.loops.find(k=>k.cluster===d);t.chip(C?`Only ${C.name}`:null,()=>b(null))}function b(v){d=v===d?null:v,S(),o()}let m=[];return g?m.push({text:`k is ${g}: ${mt(a.edited,"note")} edited in the last ${Ni} days for ${mt(a.wentStale,"note")} that went stale in them. ${a.k>=1?"Above 1, the vault is heating up.":"Below 1, the vault is cooling."}`,...a.fuel[0]?{label:"Open liveliest",run:()=>n(a.fuel[0].id)}:{}}):m.push({text:`${mt(a.edited,"note")} edited in the last ${Ni} days and none went stale in them, so there is no k to work out.`,...a.fuel[0]?{label:"Open liveliest",run:()=>n(a.fuel[0].id)}:{}}),a.control[0]&&m.push({text:`${mt(a.leaned,"stale note")} still ${a.leaned===1?"has":"have"} notes linking to ${a.leaned===1?"it":"them"}. ${c(a.control[0].id)} has the most: ${mt(a.control[0].links,"note")} link to it.`,label:"Open note",run:()=>n(a.control[0].id)}),a.loops[0]&&m.push({text:`${a.loops[0].name} had the most edits: ${a.loops[0].edited} of the ${a.edited}.`,label:"Only this topic",run:()=>b(a.loops[0].cluster)}),t.explain({plain:"Picture a reactor. Every note you edited this month is a fuel rod giving off heat. Every note left to go stale takes heat away. Divide one by the other and you get k: above 1 the vault is heating up, below 1 it is cooling.",about:`A fuel rod is a note edited in the last ${Ni} days, taller and brighter the livelier it is; the ${Xf} liveliest are drawn, the liveliest in the middle. A control rod is a stale note that other notes still link to, pushed deeper the more notes link to it; the ${Jf} most linked are drawn. k is the notes edited in the ${Ni} days divided by the notes that went stale in them. Each coolant loop is one of the ${qf} topics with the most edited notes; its pipes are wider the bigger its share.`,legend:[{color:r.palette[0],text:"fuel rod = a note edited lately, colour = topic"},{color:Ie(r.fg,r.bg,.25),text:"control rod = a stale note others link to"},{color:Zf,text:"hot leg"},{color:yh,text:"cold leg, back to the vessel"}],insights:m}),t.controls({lines:["Pick a rod to open its note, a loop to see only its topic"],buttons:[]}),i.sky({top:"#04060c",haze:"#0e121c"}),S(),{targets:()=>[...a.fuel.map(v=>({at:[v.at[0],v.h*.6,v.at[1]],r:.7,key:{kind:"note",id:v.id,tip:`${c(v.id)} \xB7 edited ${mt(l.get(v.id).age||0,"day")} ago`}})),...a.control.map(v=>({at:[v.at[0],Yn-ts*v.depth+ts+1.4,v.at[1]],r:.6,key:{kind:"note",id:v.id,tip:`${c(v.id)} \xB7 stale \xB7 ${mt(v.links,"note")} link to it`}})),...a.loops.map((v,P)=>({at:_(w(P),13.5,4),r:2.4,key:{kind:"loop",id:v.cluster,tip:`${v.name} \xB7 ${mt(v.edited,"note")} edited \xB7 pick to see only this topic`}}))],click(v){v.kind==="note"?n(v.id):v.kind==="loop"&&b(v.id)},update(){},stat:y,today:()=>a.control[0]?{text:`${c(a.control[0].id)} is stale and ${mt(a.control[0].links,"note")} link to it.`,label:"Open note",run:()=>n(a.control[0].id)}:null,api:{layout:()=>a,filter:b,only:()=>d},tick(v){for(let P of[u,f,p,M])P&&P.tick(v)},dispose(){h&&ui(i.scene,h)}}}};var Ul={low:0,medium:1,high:2},ky=i=>20*(i+1)**2;async function Qf({host:i,detail:t="medium",pbr:e=!1,warmup:n=3e3,run:s=5e3}={}){if(!(t in Ul))throw new Error(`bench: detail is one of ${Object.keys(Ul).join(", ")}`);if(!i)throw new Error("bench: host (an element to draw in) is required");let r=qr(),o=xl(i,oo(),{fog:!1});try{o.scene.add(eh(r,new ni(1,Ul[t]),e?new Te({roughness:.6}):new Zi).root);let a=o.renderer.getContext(),l=a.getExtension("WEBGL_debug_renderer_info"),c=String(l&&a.getParameter(l.UNMASKED_RENDERER_WEBGL)||a.getParameter(a.RENDERER)||"unknown"),h=()=>new Promise(y=>requestAnimationFrame(y)),d=performance.now(),u=d,f=d,p=0,M=0,x=0;for(;u-d<n+s;)u=await h(),o.orbit(u/2e3,.3,42),o.render(),u-d>=n&&(x?(p++,M=Math.max(M,u-f)):x=u),f=u;let g=u-x;return{atoms:r.n,detail:t,triangles:r.n*ky(Ul[t]),light:e?"pbr":"basic",fps:g>0?Math.round(p*1e3/g*10)/10:0,worstMs:Math.round(M*10)/10,frames:p,gpu:c}}finally{o.dispose()}}var Mh={bodies:Ld,cas9:Vd,genome:Hd,cones:Yd,loadpaths:nf,modes:of,slime:ff,cyberpunk:_f,radar:wf,clock:Af,foodweb:Nf,city:Sf,atom:Of,station:Hf,reactor:jf},Oy=Object.values(Mh).map(i=>({id:i.id,name:i.name,hint:i.hint,actions:i.actions||[],under:(i.home.minPitch||0)<0}));function Vy(i,{view:t="bodies",data:e,inputs:n,onOpen:s,onAction:r,theme:o,motion:a=!1}={}){let l=Mh[t];if(!l)throw new Error(`vault-graph-views: no view "${t}" (there is ${Object.keys(Mh).join(", ")})`);let c=Ll(e);if(c.length||c.push(...Bl(t,e,n)),c.length)throw new Error("vault-graph-views: "+c.join("; "));if(typeof s!="function")throw new Error("vault-graph-views: onOpen is required");if((l.actions||[]).length&&typeof r!="function")throw new Error(`vault-graph-views: onAction is required for the ${l.name} view (it asks the host for: ${l.actions.join(", ")})`);return Dd(i,l,{data:e,inputs:n||{},onOpen:s,onAction:r,motion:a,theme:oo(o)})}return lp(zy);})();
