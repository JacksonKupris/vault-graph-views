var VaultGraphViews=(()=>{var Ho=Object.defineProperty;var jd=Object.getOwnPropertyDescriptor;var Qd=Object.getOwnPropertyNames;var Kd=Object.prototype.hasOwnProperty;var $d=(i,t)=>{for(var e in t)Ho(i,e,{get:t[e],enumerable:!0})},tf=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Qd(t))!Kd.call(i,s)&&s!==e&&Ho(i,s,{get:()=>t[s],enumerable:!(n=jd(t,s))||n.enumerable});return i};var ef=i=>tf(Ho({},"__esModule",{value:!0}),i);var T_={};$d(T_,{VIEWS:()=>w_,bench:()=>Wd,check:()=>Wo,checkInputs:()=>Zo,mountViews:()=>E_});var ms={top:{nodes:"array",links:"array",clusters:"array",wanted:"array"},node:{id:"string",name:"string",cluster:"number",folder:"string",inlinks:"number",outlinks:"number",words:"number"},link:{source:"string",target:"string",kind:"string"},cluster:{id:"number",name:"string",label:"string",size:"number"},strand:{days:"array",paths:"array",ids:"array",rows:"array"}},nf={n:"number",X:"array",stress:"number",grade:"string",domains:"array",loops:"array"},sf={guide:"string",where:"string",notes:"array"},rf={ids:"array",level:"array",edges:"array",stats:"object"};var $e=i=>Array.isArray(i)?"array":i===null?"null":typeof i,$n=(i,t,e,n)=>{for(let[s,r]of Object.entries(n))$e(e[s])!==r&&i.push(`${t}.${s} should be ${r}, is ${$e(e[s])}`)};function Wo(i){let t=[];if(!i||typeof i!="object")return["data is not an object"];if($n(t,"data",i,ms.top),t.length)return t;i.nodes[0]&&$n(t,"nodes[0]",i.nodes[0],ms.node),i.links[0]&&$n(t,"links[0]",i.links[0],ms.link),i.clusters[0]&&$n(t,"clusters[0]",i.clusters[0],ms.cluster);let e=new Set(i.nodes.map(s=>s.id));for(let s of i.wanted)e.add(s.id);let n=i.links.filter(s=>!e.has(s.source)||!e.has(s.target)).length;return n&&t.push(`${n} links point at a note that is in neither nodes nor wanted`),t}function Zo(i,t,e){let n=[],s=e||{};if(i==="genome"){let r=t&&t.strand;if($e(r)!=="object")return[`data.strand should be object, is ${$e(r)}`];if($n(n,"data.strand",r,ms.strand),$e(s.fold)!=="object")return n.concat(`inputs.fold should be object, is ${$e(s.fold)}`);if($n(n,"inputs.fold",s.fold,nf),n.length)return n;let a=s.fold;(r.rows.length!==r.days.length||r.paths.length!==r.days.length)&&n.push(`data.strand has ${r.days.length} days, ${r.rows.length} rows and ${r.paths.length} paths: they should be the same number`),(a.n!==r.days.length||a.X.length!==a.n)&&n.push(`inputs.fold is for ${a.n} days (${a.X.length} points) and data.strand has ${r.days.length}: the fold is from other data`);let o=a.loops.filter(c=>!(c.a>=0&&c.a<a.n&&c.b>=0&&c.b<a.n&&typeof c.count=="number")).length;o&&n.push(`${o} of inputs.fold.loops don't name two days of the strand and a count`)}if(i==="foodweb"){if($e(s.web)!=="object")return n.concat(`inputs.web should be object, is ${$e(s.web)}`);if($n(n,"inputs.web",s.web,rf),n.length)return n;let r=s.web;r.level.length!==r.ids.length&&n.push(`inputs.web has ${r.ids.length} ids and ${r.level.length} levels: they should be the same`);let a=r.edges.filter(o=>!(o[0]>=0&&o[0]<r.ids.length&&o[1]>=0&&o[1]<r.ids.length)).length;a&&n.push(`${a} of inputs.web.edges don't name two of its ids`);for(let o of["mean","maxLevel","incoherence"])typeof r.stats[o]!="number"&&n.push(`inputs.web.stats.${o} should be number, is ${$e(r.stats[o])}`);if(n.length)return n}if(i==="cas9"&&s.scan!=null){if($e(s.scan)!=="object")return[`inputs.scan should be object, is ${$e(s.scan)}`];$n(n,"inputs.scan",s.scan,sf),s.scan.ids!==void 0&&!Array.isArray(s.scan.ids)&&n.push(`inputs.scan.ids should be array, is ${$e(s.scan.ids)}`),!n.length&&s.scan.notes[0]&&(typeof s.scan.notes[0].path!="string"||typeof s.scan.notes[0].hits!="number")&&n.push("inputs.scan.notes[0] should be { path: string, hits: number }")}return s.hour!=null&&typeof s.hour!="number"&&n.push(`inputs.hour should be number, is ${$e(s.hour)}`),s.selected!=null&&typeof s.selected!="string"&&n.push(`inputs.selected should be string, is ${$e(s.selected)}`),n}var af=["#4385BE","#879A39","#DA702C","#8B7EC8","#3AA99F","#D14D41","#D0A215","#CE5D97","#205EA6","#66800B","#BC5215","#5E409D","#24837B","#AF3029","#AD8301","#A02F6F"];function yr(i){return Object.assign({bg:"#14161a",fg:"#dddddd",muted:"#8a8f98",accent:"#6aa9ff",warn:"#f59e0b",palette:af},i||{})}var Sh=0,Tl=1,vh=2;var Qs=1,bh=2,is=3,hi=0,Ge=1,ye=2,Ti=0,ss=1,Al=2,Rl=3,Cl=4,wh=5;var Ai=100,Eh=101,Th=102,Ah=103,Rh=104,Ch=200,Ih=201,Uh=202,Nh=203,Il=204,Ul=205,Ph=206,Fh=207,Dh=208,Lh=209,Bh=210,Oh=211,kh=212,Vh=213,zh=214,Xr=0,Jr=1,qr=2,Xi=3,jr=4,Qr=5,Kr=6,$r=7,Fa=0,Gh=1,Hh=2,Nn=0,Nl=1,Pl=2,Fl=3,Dl=4,Ll=5,Bl=6,Ol=7;var kl=300,Ri=301,rs=302,Da=303,La=304,Ji=1e3,An=1001,ta=1002,Ce=1003,Wh=1004;var Ks=1005;var Qe=1006,Ba=1007;var Yn=1008;var tn=1009,Vl=1010,zl=1011,as=1012,Oa=1013,bn=1014,mn=1015,wn=1016,ka=1017,Va=1018,Ci=1020,Gl=35902,Hl=35899,Wl=1021,Zl=1022,En=1023,Wn=1026,Xn=1027,za=1028,Ga=1029,ui=1030,Ha=1031;var Wa=1033,$s=33776,tr=33777,er=33778,nr=33779,Za=35840,Ya=35841,Xa=35842,Ja=35843,qa=36196,ja=37492,Qa=37496,Ka=37488,$a=37489,ir=37490,to=37491,eo=37808,no=37809,io=37810,so=37811,ro=37812,ao=37813,oo=37814,lo=37815,co=37816,ho=37817,uo=37818,fo=37819,po=37820,mo=37821,go=36492,xo=36494,_o=36495,yo=36283,Mo=36284,sr=36285,So=36286;var Ts=2300,ea=2301,Zr=2302,_l=2303,yl=2400,Ml=2401,Sl=2402;var Zh=3200;var rr=0,Yh=1,Jn="",Be="srgb",As="srgb-linear",Rs="linear",me="srgb";var Yr=7680;var Xh=519,Jh=512,qh=513,jh=514,Yl=515,Qh=516,Kh=517,Xl=518,Jl=519,$h=35044;var ql="300 es",hn=2e3,qi=2001;function of(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function lf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Cs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function tu(){let i=Cs("canvas");return i.style.display="block",i}var zc={},ji=null;function jl(...i){let t="THREE."+i.shift();ji?ji("log",t,...i):console.log(t,...i)}function eu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xt(...i){i=eu(i);let t="THREE."+i.shift();if(ji)ji("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function jt(...i){i=eu(i);let t="THREE."+i.shift();if(ji)ji("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function bs(...i){let t=i.join(" ");t in zc||(zc[t]=!0,Xt(...i))}function nu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var iu={[Xr]:Xr,[qr]:Kr,[jr]:jr,[Xi]:Qr,[Jr]:Jr,[Kr]:qr,[$r]:$r,[Qr]:Xi},Rn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Yo=Math.PI/180,na=180/Math.PI;function ar(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function ae(i,t,e){return Math.max(t,Math.min(e,i))}function cf(i,t){return(i%t+t)%t}function Xo(i,t,e){return(1-e)*i+e*t}function su(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ql(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function hf(i,t){if(t.constructor===Float32Array)return i;let e=Ql(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function uf(i,t){if(t.constructor===Float32Array)return i;let e=Ql(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Vt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],d=r[a+1],m=r[a+2],M=r[a+3];if(f!==M||c!==u||l!==d||h!==m){let g=c*u+l*d+h*m+f*M;g<0&&(u=-u,d=-d,m=-m,M=-M,g=-g);let p=1-o;if(g<.9995){let y=Math.acos(g),v=Math.sin(y);p=Math.sin(p*y)/v,o=Math.sin(o*y)/v,c=c*p+u*o,l=l*p+d*o,h=h*p+m*o,f=f*p+M*o}else{c=c*p+u*o,l=l*p+d*o,h=h*p+m*o,f=f*p+M*o;let y=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=y,l*=y,h*=y,f*=y}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],m=r[a+3];return t[e]=o*m+h*f+c*d-l*u,t[e+1]=c*m+h*u+l*f-o*d,t[e+2]=l*m+h*d+o*u-c*f,t[e+3]=h*m-o*f-c*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),f=o(r/2),u=c(n/2),d=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=u*h*f+l*d*m,this._y=l*d*f-u*h*m,this._z=l*h*m+u*d*f,this._w=l*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+l*d*m,this._y=l*d*f-u*h*m,this._z=l*h*m-u*d*f,this._w=l*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-l*d*m,this._y=l*d*f+u*h*m,this._z=l*h*m+u*d*f,this._w=l*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-l*d*m,this._y=l*d*f+u*h*m,this._z=l*h*m-u*d*f,this._w=l*h*f+u*d*m;break;case"YZX":this._x=u*h*f+l*d*m,this._y=l*d*f+u*h*m,this._z=l*h*m-u*d*f,this._w=l*h*f-u*d*m;break;case"XZY":this._x=u*h*f-l*d*m,this._y=l*d*f-u*h*m,this._z=l*h*m+u*d*f,this._w=l*h*f+u*d*m;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(h-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+c*l+a*f-o*h,this.y=n+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Jo.copy(this).projectOnVector(t),this.sub(Jo)}reflect(t){return this.sub(Jo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jo=new H,Gc=new Xe,Qt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],d=n[5],m=n[8],M=s[0],g=s[3],p=s[6],y=s[1],v=s[4],_=s[7],w=s[2],E=s[5],x=s[8];return r[0]=a*M+o*y+c*w,r[3]=a*g+o*v+c*E,r[6]=a*p+o*_+c*x,r[1]=l*M+h*y+f*w,r[4]=l*g+h*v+f*E,r[7]=l*p+h*_+f*x,r[2]=u*M+d*y+m*w,r[5]=u*g+d*v+m*E,r[8]=u*p+d*_+m*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,u=o*c-h*r,d=l*r-a*c,m=e*f+n*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/m;return t[0]=f*M,t[1]=(s*l-h*n)*M,t[2]=(o*n-s*a)*M,t[3]=u*M,t[4]=(h*e-s*c)*M,t[5]=(s*r-o*e)*M,t[6]=d*M,t[7]=(n*c-l*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return bs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qo.makeScale(t,e)),this}rotate(t){return bs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qo.makeRotation(-t)),this}translate(t,e){return bs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},qo=new Qt,Hc=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wc=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function df(){let i={enabled:!0,workingColorSpace:As,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===me&&(s.r=Hn(s.r),s.g=Hn(s.g),s.b=Hn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===me&&(s.r=Yi(s.r),s.g=Yi(s.g),s.b=Yi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Jn?Rs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[As]:{primaries:t,whitePoint:n,transfer:Rs,toXYZ:Hc,fromXYZ:Wc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:t,whitePoint:n,transfer:me,toXYZ:Hc,fromXYZ:Wc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}}),i}var ce=df();function Hn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Yi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ni,ia=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ni===void 0&&(Ni=Cs("canvas")),Ni.width=t.width,Ni.height=t.height;let s=Ni.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ni}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Cs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Hn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hn(e[n]/255)*255):e[n]=Hn(e[n]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ff=0,Qi=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=ar(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(jo(s[a].image)):r.push(jo(s[a]))}else r=jo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function jo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ia.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}var pf=0,Qo=new H,Ke=class i extends Rn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=An,s=An,r=Qe,a=Yn,o=En,c=tn,l=i.DEFAULT_ANISOTROPY,h=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=ar(),this.name="",this.source=new Qi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Qo).x}get height(){return this.source.getSize(Qo).y}get depth(){return this.source.getSize(Qo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ji:t.x=t.x-Math.floor(t.x);break;case An:t.x=t.x<0?0:1;break;case ta:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ji:t.y=t.y-Math.floor(t.y);break;case An:t.y=t.y<0?0:1;break;case ta:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=kl;Ke.DEFAULT_ANISOTROPY=1;var be=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],m=c[9],M=c[2],g=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-M)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+M)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,_=(d+1)/2,w=(p+1)/2,E=(h+u)/4,x=(f+M)/4,S=(m+g)/4;return v>_&&v>w?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=E/n,r=x/n):_>w?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=S/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=x/r,s=S/r),this.set(n,s,r,e),this}let y=Math.sqrt((g-m)*(g-m)+(f-M)*(f-M)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(f-M)/y,this.z=(u-h)/y,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sa=class extends Rn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Ke({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Qi(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},on=class extends sa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Is=class extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ra=class extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Yt=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,c,l,h,f,u,d,m,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,f,u,d,m,M,g)}set(t,e,n,s,r,a,o,c,l,h,f,u,d,m,M,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=m,p[11]=M,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Pi.setFromMatrixColumn(t,0).length(),r=1/Pi.setFromMatrixColumn(t,1).length(),a=1/Pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,d=a*f,m=o*h,M=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=d+m*l,e[5]=u-M*l,e[9]=-o*c,e[2]=M-u*l,e[6]=m+d*l,e[10]=a*c}else if(t.order==="YXZ"){let u=c*h,d=c*f,m=l*h,M=l*f;e[0]=u+M*o,e[4]=m*o-d,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-m,e[6]=M+u*o,e[10]=a*c}else if(t.order==="ZXY"){let u=c*h,d=c*f,m=l*h,M=l*f;e[0]=u-M*o,e[4]=-a*f,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*h,e[9]=M-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let u=a*h,d=a*f,m=o*h,M=o*f;e[0]=c*h,e[4]=m*l-d,e[8]=u*l+M,e[1]=c*f,e[5]=M*l+u,e[9]=d*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,d=a*l,m=o*c,M=o*l;e[0]=c*h,e[4]=M-u*f,e[8]=m*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*f+m,e[10]=u-M*f}else if(t.order==="XZY"){let u=a*c,d=a*l,m=o*c,M=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+M,e[5]=a*h,e[9]=d*f-m,e[2]=m*f-d,e[6]=o*h,e[10]=M*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mf,t,gf)}lookAt(t,e,n){let s=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),ti.crossVectors(n,sn),ti.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),ti.crossVectors(n,sn)),ti.normalize(),Mr.crossVectors(sn,ti),s[0]=ti.x,s[4]=Mr.x,s[8]=sn.x,s[1]=ti.y,s[5]=Mr.y,s[9]=sn.y,s[2]=ti.z,s[6]=Mr.z,s[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],d=n[13],m=n[2],M=n[6],g=n[10],p=n[14],y=n[3],v=n[7],_=n[11],w=n[15],E=s[0],x=s[4],S=s[8],F=s[12],T=s[1],I=s[5],P=s[9],B=s[13],N=s[2],Z=s[6],G=s[10],X=s[14],z=s[3],D=s[7],j=s[11],O=s[15];return r[0]=a*E+o*T+c*N+l*z,r[4]=a*x+o*I+c*Z+l*D,r[8]=a*S+o*P+c*G+l*j,r[12]=a*F+o*B+c*X+l*O,r[1]=h*E+f*T+u*N+d*z,r[5]=h*x+f*I+u*Z+d*D,r[9]=h*S+f*P+u*G+d*j,r[13]=h*F+f*B+u*X+d*O,r[2]=m*E+M*T+g*N+p*z,r[6]=m*x+M*I+g*Z+p*D,r[10]=m*S+M*P+g*G+p*j,r[14]=m*F+M*B+g*X+p*O,r[3]=y*E+v*T+_*N+w*z,r[7]=y*x+v*I+_*Z+w*D,r[11]=y*S+v*P+_*G+w*j,r[15]=y*F+v*B+_*X+w*O,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],d=t[14],m=t[3],M=t[7],g=t[11],p=t[15],y=c*d-l*u,v=o*d-l*f,_=o*u-c*f,w=a*d-l*h,E=a*u-c*h,x=a*f-o*h;return e*(M*y-g*v+p*_)-n*(m*y-g*w+p*E)+s*(m*v-M*w+p*x)-r*(m*_-M*E+g*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],d=t[11],m=t[12],M=t[13],g=t[14],p=t[15],y=e*o-n*a,v=e*c-s*a,_=e*l-r*a,w=n*c-s*o,E=n*l-r*o,x=s*l-r*c,S=h*M-f*m,F=h*g-u*m,T=h*p-d*m,I=f*g-u*M,P=f*p-d*M,B=u*p-d*g,N=y*B-v*P+_*I+w*T-E*F+x*S;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Z=1/N;return t[0]=(o*B-c*P+l*I)*Z,t[1]=(s*P-n*B-r*I)*Z,t[2]=(M*x-g*E+p*w)*Z,t[3]=(u*E-f*x-d*w)*Z,t[4]=(c*T-a*B-l*F)*Z,t[5]=(e*B-s*T+r*F)*Z,t[6]=(g*_-m*x-p*v)*Z,t[7]=(h*x-u*_+d*v)*Z,t[8]=(a*P-o*T+l*S)*Z,t[9]=(n*T-e*P-r*S)*Z,t[10]=(m*E-M*_+p*y)*Z,t[11]=(f*_-h*E-d*y)*Z,t[12]=(o*F-a*I-c*S)*Z,t[13]=(e*I-n*F+s*S)*Z,t[14]=(M*v-m*w-g*y)*Z,t[15]=(h*w-f*v+u*y)*Z,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,f=o+o,u=r*l,d=r*h,m=r*f,M=a*h,g=a*f,p=o*f,y=c*l,v=c*h,_=c*f,w=n.x,E=n.y,x=n.z;return s[0]=(1-(M+p))*w,s[1]=(d+_)*w,s[2]=(m-v)*w,s[3]=0,s[4]=(d-_)*E,s[5]=(1-(u+p))*E,s[6]=(g+y)*E,s[7]=0,s[8]=(m+v)*x,s[9]=(g-y)*x,s[10]=(1-(u+M))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Pi.set(s[0],s[1],s[2]).length(),o=Pi.set(s[4],s[5],s[6]).length(),c=Pi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),xn.copy(this);let l=1/a,h=1/o,f=1/c;return xn.elements[0]*=l,xn.elements[1]*=l,xn.elements[2]*=l,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=f,xn.elements[9]*=f,xn.elements[10]*=f,e.setFromRotationMatrix(xn),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=hn,c=!1){let l=this.elements,h=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),m,M;if(c)m=r/(a-r),M=a*r/(a-r);else if(o===hn)m=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===qi)m=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=hn,c=!1){let l=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),d=-(n+s)/(n-s),m,M;if(c)m=1/(a-r),M=a/(a-r);else if(o===hn)m=-2/(a-r),M=-(a+r)/(a-r);else if(o===qi)m=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Pi=new H,xn=new Yt,mf=new H(0,0,0),gf=new H(1,1,1),ti=new H,Mr=new H,sn=new H,Zc=new Yt,Yc=new Xe,Cn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ae(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Zc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yc.setFromEuler(this),this.setFromQuaternion(Yc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cn.DEFAULT_ORDER="XYZ";var Us=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},xf=0,Xc=new H,Fi=new Xe,Bn=new Yt,Sr=new H,gs=new H,_f=new H,yf=new Xe,Jc=new H(1,0,0),qc=new H(0,1,0),jc=new H(0,0,1),Qc={type:"added"},Mf={type:"removed"},Di={type:"childadded",child:null},Ko={type:"childremoved",child:null},ze=class i extends Rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new H,e=new Cn,n=new Xe,s=new H(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Yt},normalMatrix:{value:new Qt}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.premultiply(Fi),this}rotateX(t){return this.rotateOnAxis(Jc,t)}rotateY(t){return this.rotateOnAxis(qc,t)}rotateZ(t){return this.rotateOnAxis(jc,t)}translateOnAxis(t,e){return Xc.copy(t).applyQuaternion(this.quaternion),this.position.add(Xc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Jc,t)}translateY(t){return this.translateOnAxis(qc,t)}translateZ(t){return this.translateOnAxis(jc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sr.copy(t):Sr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(gs,Sr,this.up):Bn.lookAt(Sr,gs,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),Fi.setFromRotationMatrix(Bn),this.quaternion.premultiply(Fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qc),Di.child=t,this.dispatchEvent(Di),Di.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mf),Ko.child=t,this.dispatchEvent(Ko),Ko.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qc),Di.child=t,this.dispatchEvent(Di),Di.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,t,_f),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,yf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ze.DEFAULT_UP=new H(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gn=class extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sf={type:"move"},Ki=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let M of t.hand.values()){let g=e.getJointPose(M,n),p=this._getHandJoint(l,M);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;l.inputState.pinching&&u>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sf)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Gn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},vr={h:0,s:0,l:0};function $o(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Mt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ce.workingColorSpace){if(t=cf(t,1),e=ae(e,0,1),n=ae(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=$o(a,r,t+1/3),this.g=$o(a,r,t),this.b=$o(a,r,t-1/3)}return ce.colorSpaceToWorking(this,s),this}setStyle(t,e=Be){function n(r){r!==void 0&&parseFloat(r)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){let n=ru[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}copyLinearToSRGB(t){return this.r=Yi(t.r),this.g=Yi(t.g),this.b=Yi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return ce.workingToColorSpace(Ye.copy(this),t),Math.round(ae(Ye.r*255,0,255))*65536+Math.round(ae(Ye.g*255,0,255))*256+Math.round(ae(Ye.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.workingToColorSpace(Ye.copy(this),e);let n=Ye.r,s=Ye.g,r=Ye.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.workingToColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=Be){ce.workingToColorSpace(Ye.copy(this),t);let e=Ye.r,n=Ye.g,s=Ye.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(vr);let n=Xo(ei.h,vr.h,e),s=Xo(ei.s,vr.s,e),r=Xo(ei.l,vr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ye=new Mt;Mt.NAMES=ru;var Ns=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Mt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ps=class extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},_n=new H,On=new H,tl=new H,kn=new H,Li=new H,Bi=new H,Kc=new H,el=new H,nl=new H,il=new H,sl=new be,rl=new be,al=new be,ri=class i{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),_n.subVectors(t,e),s.cross(_n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){_n.subVectors(s,e),On.subVectors(n,e),tl.subVectors(t,e);let a=_n.dot(_n),o=_n.dot(On),c=_n.dot(tl),l=On.dot(On),h=On.dot(tl),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(l*c-o*h)*u,m=(a*h-o*c)*u;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,kn.x),c.addScaledVector(a,kn.y),c.addScaledVector(o,kn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return sl.setScalar(0),rl.setScalar(0),al.setScalar(0),sl.fromBufferAttribute(t,e),rl.fromBufferAttribute(t,n),al.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(sl,r.x),a.addScaledVector(rl,r.y),a.addScaledVector(al,r.z),a}static isFrontFacing(t,e,n,s){return _n.subVectors(n,e),On.subVectors(t,e),_n.cross(On).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),On.subVectors(this.a,this.b),_n.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Li.subVectors(s,n),Bi.subVectors(r,n),el.subVectors(t,n);let c=Li.dot(el),l=Bi.dot(el);if(c<=0&&l<=0)return e.copy(n);nl.subVectors(t,s);let h=Li.dot(nl),f=Bi.dot(nl);if(h>=0&&f<=h)return e.copy(s);let u=c*f-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),e.copy(n).addScaledVector(Li,a);il.subVectors(t,r);let d=Li.dot(il),m=Bi.dot(il);if(m>=0&&d<=m)return e.copy(r);let M=d*l-c*m;if(M<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(Bi,o);let g=h*m-d*f;if(g<=0&&f-h>=0&&d-m>=0)return Kc.subVectors(r,s),o=(f-h)/(f-h+(d-m)),e.copy(s).addScaledVector(Kc,o);let p=1/(g+M+u);return a=M*p,o=u*p,e.copy(n).addScaledVector(Li,a).addScaledVector(Bi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},un=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,yn):yn.fromBufferAttribute(r,a),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),br.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),br.copy(n.boundingBox)),br.applyMatrix4(t.matrixWorld),this.union(br)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xs),wr.subVectors(this.max,xs),Oi.subVectors(t.a,xs),ki.subVectors(t.b,xs),Vi.subVectors(t.c,xs),ni.subVectors(ki,Oi),ii.subVectors(Vi,ki),xi.subVectors(Oi,Vi);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-xi.z,xi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,xi.z,0,-xi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-xi.y,xi.x,0];return!ol(e,Oi,ki,Vi,wr)||(e=[1,0,0,0,1,0,0,0,1],!ol(e,Oi,ki,Vi,wr))?!1:(Er.crossVectors(ni,ii),e=[Er.x,Er.y,Er.z],ol(e,Oi,ki,Vi,wr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Vn=[new H,new H,new H,new H,new H,new H,new H,new H],yn=new H,br=new un,Oi=new H,ki=new H,Vi=new H,ni=new H,ii=new H,xi=new H,xs=new H,wr=new H,Er=new H,_i=new H;function ol(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){_i.fromArray(i,r);let o=s.x*Math.abs(_i.x)+s.y*Math.abs(_i.y)+s.z*Math.abs(_i.z),c=t.dot(_i),l=e.dot(_i),h=n.dot(_i);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Re=new H,Tr=new Vt,vf=0,an=class extends Rn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$h,this.updateRanges=[],this.gpuType=mn,this.version=0,this._normalizationScale=t!==void 0?Ql(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Tr.fromBufferAttribute(this,e),Tr.applyMatrix3(t),this.setXY(e,Tr.x,Tr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):hf(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):uf(t,this.array)}};var Fs=class extends an{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ds=class extends an{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Gt=class extends an{constructor(t,e,n){super(new Float32Array(t),e,n)}},bf=new un,_s=new H,ll=new H,In=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):bf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_s.subVectors(t,this.center);let e=_s.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(_s,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ll.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_s.copy(t.center).add(ll)),this.expandByPoint(_s.copy(t.center).sub(ll))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},wf=0,cn=new Yt,cl=new ze,zi=new H,rn=new un,ys=new un,Le=new H,he=class i extends Rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=ar(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(of(t)?Ds:Fs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,n){return cn.makeTranslation(t,e,n),this.applyMatrix4(cn),this}scale(t,e,n){return cn.makeScale(t,e,n),this.applyMatrix4(cn),this}lookAt(t){return cl.lookAt(t),cl.updateMatrix(),this.applyMatrix4(cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Gt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new In);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Le.addVectors(rn.min,ys.min),rn.expandByPoint(Le),Le.addVectors(rn.max,ys.max),rn.expandByPoint(Le)):(rn.expandByPoint(ys.min),rn.expandByPoint(ys.max))}rn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Le));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Le.fromBufferAttribute(o,l),c&&(zi.fromBufferAttribute(t,l),Le.add(zi)),s=Math.max(s,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new an(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let F=0;F<n.count;F++)o[F]=new H,c[F]=new H;let h=new H,f=new H,u=new H,d=new Vt,m=new Vt,M=new Vt,g=new H,p=new H;function y(F,T,I){l[F]=l[T]=l[I]=1,h.fromBufferAttribute(n,F),f.fromBufferAttribute(n,T),u.fromBufferAttribute(n,I),d.fromBufferAttribute(r,F),m.fromBufferAttribute(r,T),M.fromBufferAttribute(r,I),f.sub(h),u.sub(h),m.sub(d),M.sub(d);let P=1/(m.x*M.y-M.x*m.y);isFinite(P)&&(g.copy(f).multiplyScalar(M.y).addScaledVector(u,-m.y).multiplyScalar(P),p.copy(u).multiplyScalar(m.x).addScaledVector(f,-M.x).multiplyScalar(P),o[F].add(g),o[T].add(g),o[I].add(g),c[F].add(p),c[T].add(p),c[I].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let F=0,T=v.length;F<T;++F){let I=v[F],P=I.start,B=I.count;for(let N=P,Z=P+B;N<Z;N+=3)y(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let _=new H,w=new H,E=new H,x=new H;function S(F){E.fromBufferAttribute(s,F),x.copy(E);let T=o[F];_.copy(T),_.sub(E.multiplyScalar(E.dot(T))).normalize(),w.crossVectors(x,T);let P=w.dot(c[F])<0?-1:1;a.setXYZW(F,_.x,_.y,_.z,P)}for(let F=0,T=n.count;F<T;++F)l[F]&&S(F);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new an(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new H,r=new H,a=new H,o=new H,c=new H,l=new H,h=new H,f=new H;if(t)for(let u=0,d=t.count;u<d;u+=3){let m=t.getX(u+0),M=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,g),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h),d=0,m=0;for(let M=0,g=c.length;M<g;M++){o.isInterleavedBufferAttribute?d=c[M]*o.data.stride+o.offset:d=c[M]*h;for(let p=0;p<h;p++)u[m++]=l[d++]}return new an(u,h,f)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){let u=l[h],d=t(u,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){let d=l[f];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],f=r[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var hl=new H,Ef=new H,Tf=new Qt,Mn=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=hl.subVectors(n,e).cross(Ef.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(hl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Tf.getNormalMatrix(t),s=this.coplanarPoint(hl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Af=0,Sn=class extends Rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=ar(),this.name="",this.type="Material",this.blending=ss,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Il,this.blendDst=Ul,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Mt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Mn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Vt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Vt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var zn=new H,ul=new H,Ar=new H,Rr=new H,$i=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,e),zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ul.copy(t).add(e).multiplyScalar(.5),Ar.copy(e).sub(t).normalize(),Rr.copy(this.origin).sub(ul);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ar),o=Rr.dot(this.direction),c=-Rr.dot(Ar),l=Rr.lengthSq(),h=Math.abs(1-a*a),f,u,d,m;if(h>0)if(f=a*c-o,u=a*o-c,m=r*h,f>=0)if(u>=-m)if(u<=m){let M=1/h;f*=M,u*=M,d=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u<=-m?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l):u<=m?(f=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+l):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ul).addScaledVector(Ar,u),d}intersectSphere(t,e){if(t.radius<0)return null;zn.subVectors(t.center,this.origin);let n=zn.dot(this.direction),s=zn.dot(zn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,m=e.x-a.x,M=e.y-a.y,g=e.z-a.z,p=n.x-a.x,y=n.y-a.y,v=n.z-a.z,_=Math.abs(c),w=Math.abs(l),E=Math.abs(h),x,S,F,T,I,P,B,N,Z,G,X,z;if(_>=w&&_>=E?(F=c,P=f,Z=m,z=p,c>=0?(x=l,S=h,T=u,I=d,B=M,N=g,G=y,X=v):(x=h,S=l,T=d,I=u,B=g,N=M,G=v,X=y)):w>=E?(F=l,P=u,Z=M,z=y,l>=0?(x=h,S=c,T=d,I=f,B=g,N=m,G=v,X=p):(x=c,S=h,T=f,I=d,B=m,N=g,G=p,X=v)):(F=h,P=d,Z=g,z=v,h>=0?(x=c,S=l,T=f,I=u,B=m,N=M,G=p,X=y):(x=l,S=c,T=u,I=f,B=M,N=m,G=y,X=p)),F===0)return null;let D=x/F,j=S/F,O=1/F,V=T-D*P,tt=I-j*P,L=B-D*Z,C=N-j*Z,nt=G-D*z,dt=X-j*z,ot=nt*C-dt*L,ut=V*dt-tt*nt,gt=L*tt-C*V;if(s){if(ot<0||ut<0||gt<0)return null}else if((ot<0||ut<0||gt<0)&&(ot>0||ut>0||gt>0))return null;let pt=ot+ut+gt;if(pt===0)return null;let Ct=O*(ot*P+ut*Z+gt*z);return(pt>0?Ct<0:Ct>0)?null:this.at(Ct/pt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},de=class extends Sn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},$c=new Yt,yi=new $i,Cr=new In,th=new H,Ir=new H,Ur=new H,Nr=new H,dl=new H,Pr=new H,eh=new H,Fr=new H,re=class extends ze{constructor(t=new he,e=new de){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Pr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],f=r[c];h!==0&&(dl.fromBufferAttribute(f,t),a?Pr.addScaledVector(dl,h):Pr.addScaledVector(dl.sub(e),h))}e.add(Pr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(r),yi.copy(t.ray).recast(t.near),!(Cr.containsPoint(yi.origin)===!1&&(yi.intersectSphere(Cr,th)===null||yi.origin.distanceToSquared(th)>(t.far-t.near)**2))&&($c.copy(r).invert(),yi.copy(t.ray).applyMatrix4($c),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,yi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,M=u.length;m<M;m++){let g=u[m],p=a[g.materialIndex],y=Math.max(g.start,d.start),v=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let _=y,w=v;_<w;_+=3){let E=o.getX(_),x=o.getX(_+1),S=o.getX(_+2);s=Dr(this,p,t,n,l,h,f,E,x,S),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let g=m,p=M;g<p;g+=3){let y=o.getX(g),v=o.getX(g+1),_=o.getX(g+2);s=Dr(this,a,t,n,l,h,f,y,v,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,M=u.length;m<M;m++){let g=u[m],p=a[g.materialIndex],y=Math.max(g.start,d.start),v=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let _=y,w=v;_<w;_+=3){let E=_,x=_+1,S=_+2;s=Dr(this,p,t,n,l,h,f,E,x,S),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),M=Math.min(c.count,d.start+d.count);for(let g=m,p=M;g<p;g+=3){let y=g,v=g+1,_=g+2;s=Dr(this,a,t,n,l,h,f,y,v,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Rf(i,t,e,n,s,r,a,o){let c;if(t.side===Ge?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===hi,o),c===null)return null;Fr.copy(o),Fr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Fr);return l<e.near||l>e.far?null:{distance:l,point:Fr.clone(),object:i}}function Dr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Ir),i.getVertexPosition(c,Ur),i.getVertexPosition(l,Nr);let h=Rf(i,t,e,n,Ir,Ur,Nr,eh);if(h){let f=new H;ri.getBarycoord(eh,Ir,Ur,Nr,f),s&&(h.uv=ri.getInterpolatedAttribute(s,o,c,l,f,new Vt)),r&&(h.uv1=ri.getInterpolatedAttribute(r,o,c,l,f,new Vt)),a&&(h.normal=ri.getInterpolatedAttribute(a,o,c,l,f,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new H,materialIndex:0};ri.getNormal(Ir,Ur,Nr,u.normal),h.face=u,h.barycoord=f}return h}var Ls=class extends Ke{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Ce,h=Ce,f,u){super(null,a,o,c,l,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bs=class extends an{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Gi=new Yt,nh=new Yt,Lr=[],ih=new un,Cf=new Yt,Ms=new re,Ss=new In,fe=class extends re{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Bs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Cf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new un),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gi),ih.copy(t.boundingBox).applyMatrix4(Gi),this.boundingBox.union(ih)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new In),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gi),Ss.copy(t.boundingSphere).applyMatrix4(Gi),this.boundingSphere.union(Ss)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ms.geometry=this.geometry,Ms.material=this.material,Ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ss.copy(this.boundingSphere),Ss.applyMatrix4(n),t.ray.intersectsSphere(Ss)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gi),nh.multiplyMatrices(n,Gi),Ms.matrixWorld=nh,Ms.raycast(t,Lr);for(let a=0,o=Lr.length;a<o;a++){let c=Lr[a];c.instanceId=r,c.object=this,e.push(c)}Lr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Bs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ls(new Float32Array(s*this.count),s,this.count,za,mn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Mi=new In,If=new Vt(.5,.5),Br=new H,ai=class{constructor(t=new Mn,e=new Mn,n=new Mn,s=new Mn,r=new Mn,a=new Mn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=hn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],f=r[5],u=r[6],d=r[7],m=r[8],M=r[9],g=r[10],p=r[11],y=r[12],v=r[13],_=r[14],w=r[15];if(s[0].setComponents(l-a,d-h,p-m,w-y).normalize(),s[1].setComponents(l+a,d+h,p+m,w+y).normalize(),s[2].setComponents(l+o,d+f,p+M,w+v).normalize(),s[3].setComponents(l-o,d-f,p-M,w-v).normalize(),n)s[4].setComponents(c,u,g,_).normalize(),s[5].setComponents(l-c,d-u,p-g,w-_).normalize();else if(s[4].setComponents(l-c,d-u,p-g,w-_).normalize(),e===hn)s[5].setComponents(l+c,d+u,p+g,w+_).normalize();else if(e===qi)s[5].setComponents(c,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(t){Mi.center.set(0,0,0);let e=If.distanceTo(t.center);return Mi.radius=.7071067811865476+e,Mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Br.x=s.normal.x>0?t.max.x:t.min.x,Br.y=s.normal.y>0?t.max.y:t.min.y,Br.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Br)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},sh=new Yt,aa=class i{constructor(){this.coordinateSystem=hn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];sh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ai),n[s].setFromProjectionMatrix(sh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new ai),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Ue=class extends Sn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},oa=new H,la=new H,rh=new Yt,vs=new $i,Or=new In,fl=new H,ah=new H,ca=class extends ze{constructor(t=new he,e=new Ue){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)oa.fromBufferAttribute(e,s-1),la.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=oa.distanceTo(la);t.setAttribute("lineDistance",new Gt(n,1))}else Xt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(s),Or.radius+=r,t.ray.intersectsSphere(Or)===!1)return;rh.copy(s).invert(),vs.copy(t.ray).applyMatrix4(rh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let M=d,g=m-1;M<g;M+=l){let p=h.getX(M),y=h.getX(M+1),v=kr(this,t,vs,c,p,y,M);v&&e.push(v)}if(this.isLineLoop){let M=h.getX(m-1),g=h.getX(d),p=kr(this,t,vs,c,M,g,m-1);p&&e.push(p)}}else{let d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let M=d,g=m-1;M<g;M+=l){let p=kr(this,t,vs,c,M,M+1,M);p&&e.push(p)}if(this.isLineLoop){let M=kr(this,t,vs,c,m-1,d,m-1);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function kr(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(oa.fromBufferAttribute(o,s),la.fromBufferAttribute(o,r),e.distanceSqToSegment(oa,la,fl,ah)>n)return;fl.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(fl);if(!(l<t.near||l>t.far))return{distance:l,point:ah.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var oh=new H,lh=new H,Oe=class extends ca{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)oh.fromBufferAttribute(e,s),lh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+oh.distanceTo(lh);t.setAttribute("lineDistance",new Gt(n,1))}else Xt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ts=class extends Sn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ch=new Yt,vl=new $i,Vr=new In,zr=new H,Os=class extends ze{constructor(t=new he,e=new ts){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(s),Vr.radius+=r,t.ray.intersectsSphere(Vr)===!1)return;ch.copy(s).invert(),vl.copy(t.ray).applyMatrix4(ch);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){let u=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let m=u,M=d;m<M;m++){let g=l.getX(m);zr.fromBufferAttribute(f,g),hh(zr,g,c,s,t,e,this)}}else{let u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let m=u,M=d;m<M;m++)zr.fromBufferAttribute(f,m),hh(zr,m,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function hh(i,t,e,n,s,r,a){let o=vl.distanceSqToPoint(i);if(o<e){let c=new H;vl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var ks=class extends Ke{constructor(t=[],e=Ri,n,s,r,a,o,c,l,h){super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Vs=class extends Ke{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Zn=class extends Ke{constructor(t,e,n=bn,s,r,a,o=Ce,c=Ce,l,h=Wn,f=1){if(h!==Wn&&h!==Xn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},zs=class extends Zn{constructor(t,e=bn,n=Ri,s,r,a=Ce,o=Ce,c,l=Wn){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Gs=class extends Ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},dn=class i extends he{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],f=[],u=0,d=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(f,2));function m(M,g,p,y,v,_,w,E,x,S,F){let T=_/x,I=w/S,P=_/2,B=w/2,N=E/2,Z=x+1,G=S+1,X=0,z=0,D=new H;for(let j=0;j<G;j++){let O=j*I-B;for(let V=0;V<Z;V++){let tt=V*T-P;D[M]=tt*y,D[g]=O*v,D[p]=N,l.push(D.x,D.y,D.z),D[M]=0,D[g]=0,D[p]=E>0?1:-1,h.push(D.x,D.y,D.z),f.push(V/x),f.push(1-j/S),X+=1}}for(let j=0;j<S;j++)for(let O=0;O<x;O++){let V=u+O+Z*j,tt=u+O+Z*(j+1),L=u+(O+1)+Z*(j+1),C=u+(O+1)+Z*j;c.push(V,tt,C),c.push(tt,L,C),z+=6}o.addGroup(d,z,F),d+=z,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var vn=class i extends he{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new H,h=new Vt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){let d=n+f/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,c.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Gt(a,3)),this.setAttribute("normal",new Gt(o,3)),this.setAttribute("uv",new Gt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},fn=class i extends he{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],m=0,M=[],g=n/2,p=0;y(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Gt(f,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(d,2));function y(){let _=new H,w=new H,E=0,x=(e-t)/n;for(let S=0;S<=r;S++){let F=[],T=S/r,I=T*(e-t)+t;for(let P=0;P<=s;P++){let B=P/s,N=B*c+o,Z=Math.sin(N),G=Math.cos(N);w.x=I*Z,w.y=-T*n+g,w.z=I*G,f.push(w.x,w.y,w.z),_.set(Z,x,G).normalize(),u.push(_.x,_.y,_.z),d.push(B,1-T),F.push(m++)}M.push(F)}for(let S=0;S<s;S++)for(let F=0;F<r;F++){let T=M[F][S],I=M[F+1][S],P=M[F+1][S+1],B=M[F][S+1];(t>0||F!==0)&&(h.push(T,I,B),E+=3),(e>0||F!==r-1)&&(h.push(I,P,B),E+=3)}l.addGroup(p,E,0),p+=E}function v(_){let w=m,E=new Vt,x=new H,S=0,F=_===!0?t:e,T=_===!0?1:-1;for(let P=1;P<=s;P++)f.push(0,g*T,0),u.push(0,T,0),d.push(.5,.5),m++;let I=m;for(let P=0;P<=s;P++){let N=P/s*c+o,Z=Math.cos(N),G=Math.sin(N);x.x=F*G,x.y=g*T,x.z=F*Z,f.push(x.x,x.y,x.z),u.push(0,T,0),E.x=Z*.5+.5,E.y=G*.5*T+.5,d.push(E.x,E.y),m++}for(let P=0;P<s;P++){let B=w+P,N=I+P;_===!0?h.push(N,N+1,B):h.push(N+1,N,B),S+=3}l.addGroup(p,S,_===!0?1:2),p+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},es=class i extends fn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ha=class i extends he{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new Gt(r,3)),this.setAttribute("normal",new Gt(r.slice(),3)),this.setAttribute("uv",new Gt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let v=new H,_=new H,w=new H;for(let E=0;E<e.length;E+=3)d(e[E+0],v),d(e[E+1],_),d(e[E+2],w),c(v,_,w,y)}function c(y,v,_,w){let E=w+1,x=[];for(let S=0;S<=E;S++){x[S]=[];let F=y.clone().lerp(_,S/E),T=v.clone().lerp(_,S/E),I=E-S;for(let P=0;P<=I;P++)P===0&&S===E?x[S][P]=F:x[S][P]=F.clone().lerp(T,P/I)}for(let S=0;S<E;S++)for(let F=0;F<2*(E-S)-1;F++){let T=Math.floor(F/2);F%2===0?(u(x[S][T+1]),u(x[S+1][T]),u(x[S][T])):(u(x[S][T+1]),u(x[S+1][T+1]),u(x[S+1][T]))}}function l(y){let v=new H;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(y),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function h(){let y=new H;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];let _=g(y)/2/Math.PI+.5,w=p(y)/Math.PI+.5;a.push(_,1-w)}m(),f()}function f(){for(let y=0;y<a.length;y+=6){let v=a[y+0],_=a[y+2],w=a[y+4],E=Math.max(v,_,w),x=Math.min(v,_,w);E>.9&&x<.1&&(v<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),w<.2&&(a[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function d(y,v){let _=y*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function m(){let y=new H,v=new H,_=new H,w=new H,E=new Vt,x=new Vt,S=new Vt;for(let F=0,T=0;F<r.length;F+=9,T+=6){y.set(r[F+0],r[F+1],r[F+2]),v.set(r[F+3],r[F+4],r[F+5]),_.set(r[F+6],r[F+7],r[F+8]),E.set(a[T+0],a[T+1]),x.set(a[T+2],a[T+3]),S.set(a[T+4],a[T+5]),w.copy(y).add(v).add(_).divideScalar(3);let I=g(w);M(E,T+0,y,I),M(x,T+2,v,I),M(S,T+4,_,I)}}function M(y,v,_,w){w<0&&y.x===1&&(a[v]=y.x-1),_.x===0&&_.z===0&&(a[v]=w/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var pn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new Vt:new H);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new H,s=[],r=[],a=[],o=new H,c=new Yt;for(let d=0;d<=t;d++){let m=d/t;s[d]=this.getTangentAt(m,new H)}r[0]=new H,a[0]=new H;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(ae(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,m))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ae(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],d*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Hs=class extends pn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new Vt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,d=l-this.aY;c=u*h-d*f+this.aX,l=u*f+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ua=class extends Hs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Kl(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,f){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+f)+(c-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var uh=new H,dh=new H,pl=new Kl,ml=new Kl,gl=new Kl,da=class extends pn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new H){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(dh.subVectors(s[0],s[1]).add(s[0]),l=dh);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(uh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=uh),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(f),d),M=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);M<1e-4&&(M=1),m<1e-4&&(m=M),g<1e-4&&(g=M),pl.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,m,M,g),ml.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,m,M,g),gl.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,m,M,g)}else this.curveType==="catmullrom"&&(pl.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),ml.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),gl.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return n.set(pl.calc(c),ml.calc(c),gl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new H().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function fh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function Uf(i,t){let e=1-i;return e*e*t}function Nf(i,t){return 2*(1-i)*i*t}function Pf(i,t){return i*i*t}function ws(i,t,e,n){return Uf(i,t)+Nf(i,e)+Pf(i,n)}function Ff(i,t){let e=1-i;return e*e*e*t}function Df(i,t){let e=1-i;return 3*e*e*i*t}function Lf(i,t){return 3*(1-i)*i*i*t}function Bf(i,t){return i*i*i*t}function Es(i,t,e,n,s){return Ff(i,t)+Df(i,e)+Lf(i,n)+Bf(i,s)}var fa=class extends pn{constructor(t=new Vt,e=new Vt,n=new Vt,s=new Vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Vt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Es(t,s.x,r.x,a.x,o.x),Es(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},pa=class extends pn{constructor(t=new H,e=new H,n=new H,s=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new H){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Es(t,s.x,r.x,a.x,o.x),Es(t,s.y,r.y,a.y,o.y),Es(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ma=class extends pn{constructor(t=new Vt,e=new Vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Vt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ga=class extends pn{constructor(t=new H,e=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new H){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new H){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xa=class extends pn{constructor(t=new Vt,e=new Vt,n=new Vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Vt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ws(t,s.x,r.x,a.x),ws(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Si=class extends pn{constructor(t=new H,e=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new H){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ws(t,s.x,r.x,a.x),ws(t,s.y,r.y,a.y),ws(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_a=class extends pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Vt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(fh(o,c.x,l.x,h.x,f.x),fh(o,c.y,l.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Vt().fromArray(s))}return this}},Of=Object.freeze({__proto__:null,ArcCurve:ua,CatmullRomCurve3:da,CubicBezierCurve:fa,CubicBezierCurve3:pa,EllipseCurve:Hs,LineCurve:ma,LineCurve3:ga,QuadraticBezierCurve:xa,QuadraticBezierCurve3:Si,SplineCurve:_a});var vi=class i extends ha{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var bi=class i extends he{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,f=t/o,u=e/c,d=[],m=[],M=[],g=[];for(let p=0;p<h;p++){let y=p*u-a;for(let v=0;v<l;v++){let _=v*f-r;m.push(_,-y,0),M.push(0,0,1),g.push(v/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){let v=y+l*p,_=y+l*(p+1),w=y+1+l*(p+1),E=y+1+l*p;d.push(v,_,E),d.push(_,w,E)}this.setIndex(d),this.setAttribute("position",new Gt(m,3)),this.setAttribute("normal",new Gt(M,3)),this.setAttribute("uv",new Gt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},wi=class i extends he{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],f=t,u=(e-t)/s,d=new H,m=new Vt;for(let M=0;M<=s;M++){for(let g=0;g<=n;g++){let p=r+g/n*a;d.x=f*Math.cos(p),d.y=f*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,h.push(m.x,m.y)}f+=u}for(let M=0;M<s;M++){let g=M*(n+1);for(let p=0;p<n;p++){let y=p+g,v=y,_=y+n+1,w=y+n+2,E=y+1;o.push(v,_,E),o.push(_,w,E)}}this.setIndex(o),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(l,3)),this.setAttribute("uv",new Gt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ve=class i extends he{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],f=new H,u=new H,d=[],m=[],M=[],g=[];for(let p=0;p<=n;p++){let y=[],v=p/n,_=a+v*o,w=t*Math.cos(_),E=Math.sqrt(t*t-w*w),x=0;p===0&&a===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let S=0;S<=e;S++){let F=S/e,T=s+F*r;f.x=-E*Math.cos(T),f.y=w,f.z=E*Math.sin(T),m.push(f.x,f.y,f.z),u.copy(f).normalize(),M.push(u.x,u.y,u.z),g.push(F+x,1-v),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let v=h[p][y+1],_=h[p][y],w=h[p+1][y],E=h[p+1][y+1];(p!==0||a>0)&&d.push(v,_,E),(p!==n-1||c<Math.PI)&&d.push(_,w,E)}this.setIndex(d),this.setAttribute("position",new Gt(m,3)),this.setAttribute("normal",new Gt(M,3)),this.setAttribute("uv",new Gt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ws=class i extends he{constructor(t=new Si(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new H,c=new H,l=new Vt,h=new H,f=[],u=[],d=[],m=[];M(),this.setIndex(m),this.setAttribute("position",new Gt(f,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(d,2));function M(){for(let v=0;v<e;v++)g(v);g(r===!1?e:0),y(),p()}function g(v){h=t.getPointAt(v/e,h);let _=a.normals[v],w=a.binormals[v];for(let E=0;E<=s;E++){let x=E/s*Math.PI*2,S=Math.sin(x),F=-Math.cos(x);c.x=F*_.x+S*w.x,c.y=F*_.y+S*w.y,c.z=F*_.z+S*w.z,c.normalize(),u.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,f.push(o.x,o.y,o.z)}}function p(){for(let v=1;v<=e;v++)for(let _=1;_<=s;_++){let w=(s+1)*(v-1)+(_-1),E=(s+1)*v+(_-1),x=(s+1)*v+_,S=(s+1)*(v-1)+_;m.push(w,E,S),m.push(E,x,S)}}function y(){for(let v=0;v<=e;v++)for(let _=0;_<=s;_++)l.x=v/e,l.y=_/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Of[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Ii(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(ph(s))s.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(ph(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Je(i){let t={};for(let e=0;e<i.length;e++){let n=Ii(i[e]);for(let s in n)t[s]=n[s]}return t}function ph(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function kf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function $l(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}var au={clone:Ii,merge:Je},Vf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Un=class extends Sn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vf,this.fragmentShader=zf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ii(t.uniforms),this.uniformsGroups=kf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Mt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Vt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new H().fromArray(s.value);break;case"v4":this.uniforms[n].value=new be().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Qt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Yt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ya=class extends Un{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ee=class extends Sn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rr,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ei=class extends Sn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rr,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Fa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ma=class extends Sn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Sa=class extends Sn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Hi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Gr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var oi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},va=class extends oi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yl,endingEnd:yl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ml:r=t,o=2*e-n;break;case Sl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ml:a=t,c=2*n-e;break;case Sl:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(n-e)/(s-e),M=m*m,g=M*m,p=-u*g+2*u*M-u*m,y=(1+u)*g+(-1.5-2*u)*M+(-.5+u)*m+1,v=(-1-d)*g+(1.5+d)*M+.5*m,_=d*g-d*M;for(let w=0;w!==o;++w)r[w]=p*a[h+w]+y*a[l+w]+v*a[c+w]+_*a[f+w];return r}},ba=class extends oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*f+a[c+u]*h;return r}},wa=class extends oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ea=class extends oi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let m=(n-e)/(s-e),M=1-m;for(let g=0;g!==o;++g)r[g]=a[l+g]*M+a[c+g]*m;return r}let u=o*2,d=t-1;for(let m=0;m!==o;++m){let M=a[l+m],g=a[c+m],p=d*u+m*2,y=f[p],v=f[p+1],_=t*u+m*2,w=h[_],E=h[_+1],x=Hf(n,e,y,w,s);r[m]=ou(x,M,v,E,g)}return r}};function ou(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Gf(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Hf(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=ou(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Gf(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var ln=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Hi(e,this.TimeBufferType),this.values=Hi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Hi(t.times,Array),values:Hi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Gr(t.settings)&&(n.settings={inTangents:Hi(t.settings.inTangents,Array),outTangents:Hi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ba(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new va(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ea(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ts:e=this.InterpolantFactoryMethodDiscrete;break;case ea:e=this.InterpolantFactoryMethodLinear;break;case Zr:e=this.InterpolantFactoryMethodSmooth;break;case _l:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ts;case this.InterpolantFactoryMethodLinear:return ea;case this.InterpolantFactoryMethodSmooth:return Zr;case this.InterpolantFactoryMethodBezier:return _l}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Gr(this.settings)&&(mh(this.settings.inTangents,t),mh(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Gr(this.settings)&&(gh(this.settings.inTangents,t),gh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(jt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){jt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){jt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&lf(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){jt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Zr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let f=o*n,u=f-n,d=f+n;for(let m=0;m!==n;++m){let M=e[f+m];if(M!==e[u+m]||M!==e[d+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let f=o*n,u=a*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Gr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function mh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function gh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}ln.prototype.ValueTypeName="";ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=ea;var li=class extends ln{constructor(t,e,n){super(t,e,n)}};li.prototype.ValueTypeName="bool";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=Ts;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var Ta=class extends ln{constructor(t,e,n,s){super(t,e,n,s)}};Ta.prototype.ValueTypeName="color";var Aa=class extends ln{constructor(t,e,n,s){super(t,e,n,s)}};Aa.prototype.ValueTypeName="number";var Ra=class extends oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)Xe.slerpFlat(r,0,a,l-o,a,l,c);return r}},Zs=class extends ln{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ra(this.times,this.values,this.getValueSize(),t)}};Zs.prototype.ValueTypeName="quaternion";Zs.prototype.InterpolantFactoryMethodSmooth=void 0;var ci=class extends ln{constructor(t,e,n){super(t,e,n)}};ci.prototype.ValueTypeName="string";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=Ts;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Ca=class extends ln{constructor(t,e,n,s){super(t,e,n,s)}};Ca.prototype.ValueTypeName="vector";var Ia=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){let d=l[f],m=l[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},lu=new Ia,Ua=class{constructor(t){this.manager=t!==void 0?t:lu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ua.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ys=class extends ze{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var xl=new Yt,xh=new H,_h=new H,Na=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vt(512,512),this.mapType=tn,this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ai,this._frameExtents=new Vt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;xh.setFromMatrixPosition(t.matrixWorld),e.position.copy(xh),_h.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_h),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){xl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(xl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===qi||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(xl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Hr=new H,Wr=new Xe,Tn=new H,Xs=class extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Hr,Wr,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hr,Wr,Tn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Hr,Wr,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hr,Wr,Tn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},si=new H,yh=new Vt,Mh=new Vt,je=class extends Xs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=na*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Yo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return na*2*Math.atan(Math.tan(Yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,yh,Mh),e.subVectors(Mh,yh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Yo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Js=class extends Xs{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},bl=class extends Na{constructor(){super(new Js(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qs=class extends Ys{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.shadow=new bl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},js=class extends Ys{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Wi=-90,Zi=1,ns=class extends ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new je(Wi,Zi,t,e);s.layers=this.layers,this.add(s);let r=new je(Wi,Zi,t,e);r.layers=this.layers,this.add(r);let a=new je(Wi,Zi,t,e);a.layers=this.layers,this.add(a);let o=new je(Wi,Zi,t,e);o.layers=this.layers,this.add(o);let c=new je(Wi,Zi,t,e);c.layers=this.layers,this.add(c);let l=new je(Wi,Zi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===qi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.mipmapsAutoUpdate=M,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Pa=class extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var tc="\\[\\]\\.:\\/",Wf=new RegExp("["+tc+"]","g"),ec="[^"+tc+"]",Zf="[^"+tc.replace("\\.","")+"]",Yf=/((?:WC+[\/:])*)/.source.replace("WC",ec),Xf=/(WCOD+)?/.source.replace("WCOD",Zf),Jf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ec),qf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ec),jf=new RegExp("^"+Yf+Xf+Jf+qf+"$"),Qf=["material","materials","bones","map"],wl=class{constructor(t,e,n){let s=n||Se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Se=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Wf,"")}static parseTrackName(t){let e=jf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Qf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Xt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;jt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Se.Composite=wl;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var C_=new Float32Array(1);var El=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function nc(i,t,e,n){let s=Kf(n);switch(e){case Wl:return i*t;case za:return i*t/s.components*s.byteLength;case Ga:return i*t/s.components*s.byteLength;case ui:return i*t*2/s.components*s.byteLength;case Ha:return i*t*2/s.components*s.byteLength;case Zl:return i*t*3/s.components*s.byteLength;case En:return i*t*4/s.components*s.byteLength;case Wa:return i*t*4/s.components*s.byteLength;case $s:case tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case er:case nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ya:case Ja:return Math.max(i,16)*Math.max(t,8)/4;case Za:case Xa:return Math.max(i,8)*Math.max(t,8)/2;case qa:case ja:case Ka:case $a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qa:case ir:case to:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case no:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case io:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case so:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ro:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ao:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case oo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case lo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case co:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ho:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case uo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case fo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case po:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case mo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case go:case xo:case _o:return Math.ceil(i/4)*Math.ceil(t/4)*16;case yo:case Mo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case sr:case So:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Kf(i){switch(i){case tn:case Vl:return{byteLength:1,components:1};case as:case zl:case wn:return{byteLength:2,components:1};case ka:case Va:return{byteLength:2,components:4};case bn:case Oa:case mn:return{byteLength:4,components:1};case Gl:case Hl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Iu(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function tp(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,f=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){let h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){let m=f[u],M=f[d];M.start<=m.start+m.count+1?m.count=Math.max(m.count,M.start+M.count-m.start):(++u,f[u]=M)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){let M=f[d];i.bufferSubData(l,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var ep=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,np=`#ifdef USE_ALPHAHASH
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
#endif`,ip=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,op=`#ifdef USE_AOMAP
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
#endif`,lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cp=`#ifdef USE_BATCHING
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
#endif`,hp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,up=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pp=`#ifdef USE_IRIDESCENCE
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
#endif`,mp=`#ifdef USE_BUMPMAP
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
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,wp=`#define PI 3.141592653589793
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
} // validated`,Ep=`vec3 transformedNormal = objectNormal;
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
#endif`,Tp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ap=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ip="gl_FragColor = linearToOutputTexel( gl_FragColor );",Up=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Np=`#ifdef USE_ENVMAP
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
#endif`,Pp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Fp=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Op=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zp=`#ifdef USE_GRADIENTMAP
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
}`,Gp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Yp=`#ifdef USE_ENVMAP
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
#endif`,Xp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qp=`PhysicalMaterial material;
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
#endif`,Kp=`uniform sampler2D dfgLUT;
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
}`,$p=`
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
#endif`,tm=`#if defined( RE_IndirectDiffuse )
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
#endif`,em=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nm=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,im=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,am=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,om=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hm=`#if defined( USE_POINTS_UV )
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
#endif`,um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pm=`#if defined( USE_MORPHCOLORS )
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
#endif`,mm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gm=`#ifdef USE_MORPHTARGETS
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
#endif`,xm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_m=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ym=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,bm=`#ifdef USE_NORMALMAP
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
#endif`,wm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Em=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Am=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Om=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,km=`float getShadowMask() {
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
}`,Vm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zm=`#ifdef USE_SKINNING
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
#endif`,Gm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hm=`#ifdef USE_SKINNING
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
#endif`,Wm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ym=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jm=`#ifdef USE_TRANSMISSION
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
#endif`,qm=`#ifdef USE_TRANSMISSION
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
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eg=`uniform sampler2D t2D;
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
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ig=`uniform float backgroundBlurriness;
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
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`#include <common>
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
}`,og=`#if DEPTH_PACKING == 3200
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
}`,lg=`#define DISTANCE
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
}`,cg=`#define DISTANCE
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
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ug=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`uniform float scale;
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
}`,fg=`uniform vec3 diffuse;
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
}`,pg=`#include <common>
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
}`,mg=`uniform vec3 diffuse;
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
}`,gg=`#define LAMBERT
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
}`,xg=`#define LAMBERT
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
}`,_g=`#define MATCAP
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
}`,yg=`#define MATCAP
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
}`,Mg=`#define NORMAL
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
}`,Sg=`#define NORMAL
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
}`,vg=`#define PHONG
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
}`,bg=`#define PHONG
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
}`,wg=`#define STANDARD
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
}`,Eg=`#define STANDARD
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
}`,Tg=`#define TOON
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
}`,Ag=`#define TOON
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
}`,Rg=`uniform float size;
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
}`,Cg=`uniform vec3 diffuse;
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
}`,Ig=`#include <common>
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
}`,Ug=`uniform vec3 color;
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
}`,Ng=`uniform float rotation;
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
}`,Pg=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:ep,alphahash_pars_fragment:np,alphamap_fragment:ip,alphamap_pars_fragment:sp,alphatest_fragment:rp,alphatest_pars_fragment:ap,aomap_fragment:op,aomap_pars_fragment:lp,batching_pars_vertex:cp,batching_vertex:hp,begin_vertex:up,beginnormal_vertex:dp,bsdfs:fp,iridescence_fragment:pp,bumpmap_pars_fragment:mp,clipping_planes_fragment:gp,clipping_planes_pars_fragment:xp,clipping_planes_pars_vertex:_p,clipping_planes_vertex:yp,color_fragment:Mp,color_pars_fragment:Sp,color_pars_vertex:vp,color_vertex:bp,common:wp,defaultnormal_vertex:Ep,displacementmap_pars_vertex:Tp,displacementmap_vertex:Ap,emissivemap_fragment:Rp,emissivemap_pars_fragment:Cp,colorspace_fragment:Ip,colorspace_pars_fragment:Up,envmap_fragment:Np,envmap_common_pars_fragment:Pp,envmap_pars_fragment:Fp,envmap_pars_vertex:Dp,envmap_physical_pars_fragment:Yp,envmap_vertex:Lp,fog_vertex:Bp,fog_pars_vertex:Op,fog_fragment:kp,fog_pars_fragment:Vp,gradientmap_pars_fragment:zp,lightmap_pars_fragment:Gp,lights_lambert_fragment:Hp,lights_lambert_pars_fragment:Wp,lights_pars_begin:Zp,lights_toon_fragment:Xp,lights_toon_pars_fragment:Jp,lights_phong_fragment:qp,lights_phong_pars_fragment:jp,lights_physical_fragment:Qp,lights_physical_pars_fragment:Kp,lights_fragment_begin:$p,lights_fragment_maps:tm,lights_fragment_end:em,lightprobes_pars_fragment:nm,logdepthbuf_fragment:im,logdepthbuf_pars_fragment:sm,logdepthbuf_pars_vertex:rm,logdepthbuf_vertex:am,map_fragment:om,map_pars_fragment:lm,map_particle_fragment:cm,map_particle_pars_fragment:hm,metalnessmap_fragment:um,metalnessmap_pars_fragment:dm,morphinstance_vertex:fm,morphcolor_vertex:pm,morphnormal_vertex:mm,morphtarget_pars_vertex:gm,morphtarget_vertex:xm,normal_fragment_begin:_m,normal_fragment_maps:ym,normal_pars_fragment:Mm,normal_pars_vertex:Sm,normal_vertex:vm,normalmap_pars_fragment:bm,clearcoat_normal_fragment_begin:wm,clearcoat_normal_fragment_maps:Em,clearcoat_pars_fragment:Tm,iridescence_pars_fragment:Am,opaque_fragment:Rm,packing:Cm,premultiplied_alpha_fragment:Im,project_vertex:Um,dithering_fragment:Nm,dithering_pars_fragment:Pm,roughnessmap_fragment:Fm,roughnessmap_pars_fragment:Dm,shadowmap_pars_fragment:Lm,shadowmap_pars_vertex:Bm,shadowmap_vertex:Om,shadowmask_pars_fragment:km,skinbase_vertex:Vm,skinning_pars_vertex:zm,skinning_vertex:Gm,skinnormal_vertex:Hm,specularmap_fragment:Wm,specularmap_pars_fragment:Zm,tonemapping_fragment:Ym,tonemapping_pars_fragment:Xm,transmission_fragment:Jm,transmission_pars_fragment:qm,uv_pars_fragment:jm,uv_pars_vertex:Qm,uv_vertex:Km,worldpos_vertex:$m,background_vert:tg,background_frag:eg,backgroundCube_vert:ng,backgroundCube_frag:ig,cube_vert:sg,cube_frag:rg,depth_vert:ag,depth_frag:og,distance_vert:lg,distance_frag:cg,equirect_vert:hg,equirect_frag:ug,linedashed_vert:dg,linedashed_frag:fg,meshbasic_vert:pg,meshbasic_frag:mg,meshlambert_vert:gg,meshlambert_frag:xg,meshmatcap_vert:_g,meshmatcap_frag:yg,meshnormal_vert:Mg,meshnormal_frag:Sg,meshphong_vert:vg,meshphong_frag:bg,meshphysical_vert:wg,meshphysical_frag:Eg,meshtoon_vert:Tg,meshtoon_frag:Ag,points_vert:Rg,points_frag:Cg,shadow_vert:Ig,shadow_frag:Ug,sprite_vert:Ng,sprite_frag:Pg},Ut={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Fn={basic:{uniforms:Je([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:Je([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Mt(0)},envMapIntensity:{value:1}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:Je([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:Je([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:Je([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Mt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:Je([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:Je([Ut.points,Ut.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:Je([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:Je([Ut.common,Ut.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:Je([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:Je([Ut.sprite,Ut.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distance:{uniforms:Je([Ut.common,Ut.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distance_vert,fragmentShader:ie.distance_frag},shadow:{uniforms:Je([Ut.lights,Ut.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};Fn.physical={uniforms:Je([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};var vo={r:0,b:0,g:0},Fg=new Yt,Uu=new Qt;Uu.set(-1,0,0,0,1,0,0,0,1);function Dg(i,t,e,n,s,r){let a=new Mt(0),o=s===!0?0:1,c,l,h=null,f=0,u=null;function d(y){let v=y.isScene===!0?y.background:null;if(v&&v.isTexture){let _=y.backgroundBlurriness>0;v=t.get(v,_)}return v}function m(y){let v=!1,_=d(y);_===null?g(a,o):_&&_.isColor&&(g(_,1),v=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(y,v){let _=d(v);_&&_.isCubeTexture?(l===void 0&&(l=new re(new dn(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Ii(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Fg.makeRotationFromEuler(v.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Uu),l.material.toneMapped=ce.getTransfer(_.colorSpace)!==me,(h!==_||f!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new re(new bi(2,2),new Un({name:"BackgroundMaterial",uniforms:Ii(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ce.getTransfer(_.colorSpace)!==me,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function g(y,v){y.getRGB(vo,$l(i)),e.buffers.color.setClear(vo.r,vo.g,vo.b,v,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),o=v,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:m,addToRenderList:M,dispose:p}}function Lg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(I,P,B,N,Z){let G=!1,X=f(I,N,B,P);r!==X&&(r=X,l(r.object)),G=d(I,N,B,Z),G&&m(I,N,B,Z),Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,_(I,P,B,N),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function c(){return i.createVertexArray()}function l(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function f(I,P,B,N){let Z=N.wireframe===!0,G=n[P.id];G===void 0&&(G={},n[P.id]=G);let X=I.isInstancedMesh===!0?I.id:0,z=G[X];z===void 0&&(z={},G[X]=z);let D=z[B.id];D===void 0&&(D={},z[B.id]=D);let j=D[Z];return j===void 0&&(j=u(c()),D[Z]=j),j}function u(I){let P=[],B=[],N=[];for(let Z=0;Z<e;Z++)P[Z]=0,B[Z]=0,N[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:N,object:I,attributes:{},index:null}}function d(I,P,B,N){let Z=r.attributes,G=P.attributes,X=0,z=B.getAttributes();for(let D in z)if(z[D].location>=0){let O=Z[D],V=G[D];if(V===void 0&&(D==="instanceMatrix"&&I.instanceMatrix&&(V=I.instanceMatrix),D==="instanceColor"&&I.instanceColor&&(V=I.instanceColor)),O===void 0||O.attribute!==V||V&&O.data!==V.data)return!0;X++}return r.attributesNum!==X||r.index!==N}function m(I,P,B,N){let Z={},G=P.attributes,X=0,z=B.getAttributes();for(let D in z)if(z[D].location>=0){let O=G[D];O===void 0&&(D==="instanceMatrix"&&I.instanceMatrix&&(O=I.instanceMatrix),D==="instanceColor"&&I.instanceColor&&(O=I.instanceColor));let V={};V.attribute=O,O&&O.data&&(V.data=O.data),Z[D]=V,X++}r.attributes=Z,r.attributesNum=X,r.index=N}function M(){let I=r.newAttributes;for(let P=0,B=I.length;P<B;P++)I[P]=0}function g(I){p(I,0)}function p(I,P){let B=r.newAttributes,N=r.enabledAttributes,Z=r.attributeDivisors;B[I]=1,N[I]===0&&(i.enableVertexAttribArray(I),N[I]=1),Z[I]!==P&&(i.vertexAttribDivisor(I,P),Z[I]=P)}function y(){let I=r.newAttributes,P=r.enabledAttributes;for(let B=0,N=P.length;B<N;B++)P[B]!==I[B]&&(i.disableVertexAttribArray(B),P[B]=0)}function v(I,P,B,N,Z,G,X){X===!0?i.vertexAttribIPointer(I,P,B,Z,G):i.vertexAttribPointer(I,P,B,N,Z,G)}function _(I,P,B,N){M();let Z=N.attributes,G=B.getAttributes(),X=P.defaultAttributeValues;for(let z in G){let D=G[z];if(D.location>=0){let j=Z[z];if(j===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),j!==void 0){let O=j.normalized,V=j.itemSize,tt=t.get(j);if(tt===void 0)continue;let L=tt.buffer,C=tt.type,nt=tt.bytesPerElement,dt=C===i.INT||C===i.UNSIGNED_INT||j.gpuType===Oa;if(j.isInterleavedBufferAttribute){let ot=j.data,ut=ot.isInterleavedBuffer===!0?ot.stride:ot.itemSize,gt=j.offset;if(ot.isInstancedInterleavedBuffer||ot.isInstancedBufferAttribute){for(let pt=0;pt<D.locationSize;pt++)p(D.location+pt,ot.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let pt=0;pt<D.locationSize;pt++)g(D.location+pt);i.bindBuffer(i.ARRAY_BUFFER,L);for(let pt=0;pt<D.locationSize;pt++)v(D.location+pt,V/D.locationSize,C,O,ut*nt,(gt+V/D.locationSize*pt)*nt,dt)}else{if(j.isInstancedBufferAttribute){for(let ot=0;ot<D.locationSize;ot++)p(D.location+ot,j.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ot=0;ot<D.locationSize;ot++)g(D.location+ot);i.bindBuffer(i.ARRAY_BUFFER,L);for(let ot=0;ot<D.locationSize;ot++)v(D.location+ot,V/D.locationSize,C,O,V*nt,V/D.locationSize*ot*nt,dt)}}else if(X!==void 0){let O=X[z];if(O!==void 0)switch(O.length){case 2:i.vertexAttrib2fv(D.location,O);break;case 3:i.vertexAttrib3fv(D.location,O);break;case 4:i.vertexAttrib4fv(D.location,O);break;default:i.vertexAttrib1fv(D.location,O)}}}}y()}function w(){F();for(let I in n){let P=n[I];for(let B in P){let N=P[B];for(let Z in N){let G=N[Z];for(let X in G)h(G[X].object),delete G[X];delete N[Z]}}delete n[I]}}function E(I){if(n[I.id]===void 0)return;let P=n[I.id];for(let B in P){let N=P[B];for(let Z in N){let G=N[Z];for(let X in G)h(G[X].object),delete G[X];delete N[Z]}}delete n[I.id]}function x(I){for(let P in n){let B=n[P];for(let N in B){let Z=B[N];if(Z[I.id]===void 0)continue;let G=Z[I.id];for(let X in G)h(G[X].object),delete G[X];delete Z[I.id]}}}function S(I){for(let P in n){let B=n[P],N=I.isInstancedMesh===!0?I.id:0,Z=B[N];if(Z!==void 0){for(let G in Z){let X=Z[G];for(let z in X)h(X[z].object),delete X[z];delete Z[G]}delete B[N],Object.keys(B).length===0&&delete n[P]}}}function F(){T(),a=!0,r!==s&&(r=s,l(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:T,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:M,enableAttribute:g,disableUnusedAttributes:y}}function Bg(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let d=0;d<h;d++)u+=l[d];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Og(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==En&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let S=x===wn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==tn&&x!==mn&&!S&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Xt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&Xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&Xt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:M,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:_,maxSamples:w,samples:E}}function kg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Mn,o=new Qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let m=f.clippingPlanes,M=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let y=r?0:n,v=y*4,_=p.clippingState||null;c.value=_,_=h(m,u,v,d);for(let w=0;w!==v;++w)_[w]=e[w];p.clippingState=_,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,m){let M=f!==null?f.length:0,g=null;if(M!==0){if(g=c.value,m!==!0||g===null){let p=d+M*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,_=d;v!==M;++v,_+=4)a.copy(f[v]).applyMatrix4(y,o),a.normal.toArray(g,_),g[_+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}var cr=class extends on{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ks(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new dn(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:Ti});r.uniforms.tEquirect.value=e;let a=new re(s,r),o=e.minFilter;return e.minFilter===Yn&&(e.minFilter=Qe),new ns(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},cu=256,Vg=3,zg=20,Nu=256,Pu=16,Gg=3,Hg=new H,Wg=new Mt,wo=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ns(1,10,null),this._boxMesh=new re(new dn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Hg}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,u=c.autoClearColor,d=c.autoClearDepth,m=c.autoClearStencil,M=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,M===null&&(t.background=c.getClearColor(Wg));let g=new ns(n,s,h);return g.position.copy(o),g.update(c,t),c.autoClear=f,c.autoClearColor=u,c.autoClearDepth=d,c.autoClearStencil=m,t.background=M,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(cu,su(t))}_fromTexture(t,e){t.mapping===Ri||t.mapping===rs?this._setSize(t.image.length===0?cu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=hu(t,!1,!1),n=Math.log2(t)-Vg;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=hu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ri||t.mapping===rs?(this._cubemapMaterial===null&&(this._cubemapMaterial=du()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=uu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Zg(),this._integrationMaterial=Yg());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Pu);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Gg)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let c=o>0?Math.log2(e)+.5*Math.log2(6/(Nu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Xg());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function hu(i,t,e){return new cr(i,{minFilter:Yn,generateMipmaps:t,type:wn,colorSpace:As,depthBuffer:e})}function hr(i,t,e){return new Un({name:i,uniforms:t,vertexShader:ie.cube_vert,fragmentShader:e,side:Ge,blending:Ti,depthTest:!1,depthWrite:!1})}function Zg(){return hr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Nu}u

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
	`)}function Yg(){return hr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Pu}},`

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
	`)}function Xg(){return hr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${zg}
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
	`)}function uu(){return hr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function du(){return hr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Jg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Da||d===La)if(t.has(u)){let m=t.get(u).texture;return o(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let M=new cr(m.height);return M.fromEquirectangularTexture(i,u),t.set(u,M),u.addEventListener("dispose",l),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,m=d===Da||d===La,M=d===Ri||d===rs;if(m||M){let g=e.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new wo(i)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let y=u.image;return m&&y&&y.height>0||M&&y&&c(y)?(n===null&&(n=new wo(i)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,d){return d===Da?u.mapping=Ri:d===La&&(u.mapping=rs),u}function c(u){let d=0,m=6;for(let M=0;M<m;M++)u[M]!==void 0&&d++;return d===m}function l(u){let d=u.target;d.removeEventListener("dispose",l);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function qg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&bs("WebGLRenderer: "+n+" extension not supported."),s}}}function jg(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){c(m.target)}function c(m){m.index!==null&&t.remove(m.index);for(let g in m.attributes)t.remove(m.attributes[g]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);let M=r.get(m);M&&(t.remove(M),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function l(m,M){return s[M.id]!==void 0||(M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),a.register(M,M.id,M),e.memory.geometries++),M}function h(m){let M=m.attributes;for(let g in M)t.update(M[g],i.ARRAY_BUFFER)}function f(m){let M=m.index,g=m.attributes.position,p=0;if(g===void 0)return;let y=M!==null?M.array.length:g.array.length/3-1,v=g.count>=65535?Ds:Fs,_=new v(Math.ceil(y/3)*6,1),w=_.array;if(M!==null){let x=M.array;p=M.version;for(let S=0,F=0;S<y;S+=3){let T=x[S+0],I=x[S+1],P=x[S+2];w[F++]=T,w[F++]=I,w[F++]=I,w[F++]=P,w[F++]=P,w[F++]=T}}else{p=g.version;for(let x=0,S=0;x<y;x+=3){let F=x+0,T=x+1,I=x+2;w[S++]=F,w[S++]=T,w[S++]=T,w[S++]=I,w[S++]=I,w[S++]=F}}_.version=p;let E=r.get(m);E&&t.remove(E),r.set(m,_)}function u(m){let M=r.get(m);if(M){let g=m.index;g!==null&&M.version<g.version&&f(m)}else f(m);return r.get(m)}function d(){for(let m in s){let M=s[m].deref();M!==void 0&&c(M)}}return{get:l,update:h,getWireframeAttribute:u,dispose:d}}function Qg(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,u){i.drawElements(n,u,r,f*a),e.update(u,n,1)}function l(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*a,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let M=0;for(let g=0;g<d;g++)M+=u[g];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Kg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:jt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function $g(i,t,e){let n=new WeakMap,s=new be;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let F=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",F)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],v=0;d===!0&&(v=1),m===!0&&(v=2),M===!0&&(v=3);let _=o.attributes.position.count*v,w=1;_>t.maxTextureSize&&(w=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let E=new Float32Array(_*w*4*f),x=new Is(E,_,w,f);x.type=mn,x.needsUpdate=!0;let S=v*4;for(let T=0;T<f;T++){let I=g[T],P=p[T],B=y[T],N=_*w*4*T;for(let Z=0;Z<I.count;Z++){let G=Z*S;d===!0&&(s.fromBufferAttribute(I,Z),E[N+G+0]=s.x,E[N+G+1]=s.y,E[N+G+2]=s.z,E[N+G+3]=0),m===!0&&(s.fromBufferAttribute(P,Z),E[N+G+4]=s.x,E[N+G+5]=s.y,E[N+G+6]=s.z,E[N+G+7]=0),M===!0&&(s.fromBufferAttribute(B,Z),E[N+G+8]=s.x,E[N+G+9]=s.y,E[N+G+10]=s.z,E[N+G+11]=B.itemSize===4?s.w:1)}}u={count:f,texture:x,size:new Vt(_,w)},n.set(o,u),o.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let M=0;M<l.length;M++)d+=l[M];let m=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function t0(i,t,e,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,f=l.geometry,u=t.get(l,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var e0={[Nl]:"LINEAR_TONE_MAPPING",[Pl]:"REINHARD_TONE_MAPPING",[Fl]:"CINEON_TONE_MAPPING",[Dl]:"ACES_FILMIC_TONE_MAPPING",[Bl]:"AGX_TONE_MAPPING",[Ol]:"NEUTRAL_TONE_MAPPING",[Ll]:"CUSTOM_TONE_MAPPING"};function n0(i,t,e,n,s,r){let a=new on(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new he;h.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Gt([0,2,0,0,2,0],2));let f=new ya({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new re(h,f),d=new Js(-1,1,1,-1,0,1),m=null,M=null,g=!1,p,y=null,v=[],_=!1;this.setSize=function(w,E){a.setSize(w,E),o!==null&&o.setSize(w,E),c!==null&&c.setSize(w,E);for(let x=0;x<v.length;x++){let S=v[x];S.setSize&&S.setSize(w,E)}},this.setEffects=function(w){v=w,_=v.length>0&&v[0].isRenderPass===!0;let E=a.width,x=a.height;v.length>0&&o===null&&(o=new on(E,x,{type:wn,depthBuffer:!1,stencilBuffer:!1}),c=new on(E,x,{type:wn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&v.some(F=>F.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&l===null&&(l=new Zn(E,x),r===!0&&(l.format=Xn,l.type=Ci)),a.dispose(),a.depthTexture=S?l:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let F=0;F<v.length;F++){let T=v[F];T.setSize&&T.setSize(E,x),S&&T.needsDepthTexture===!0&&T.setDepthTexture&&T.setDepthTexture(l)}},this.begin=function(w,E){if(g||w.toneMapping===Nn&&v.length===0)return!1;if(y=E,E!==null){let x=E.width,S=E.height;(a.width!==x||a.height!==S)&&this.setSize(x,S)}return _===!1&&w.setRenderTarget(a),p=w.toneMapping,w.toneMapping=Nn,!0},this.hasRenderPass=function(){return _},this.end=function(w,E){w.toneMapping=p,g=!0;let x=a,S=o;for(let F=0;F<v.length;F++){let T=v[F];T.enabled!==!1&&(T.render(w,S,x,E),T.needsSwap!==!1&&(x=S,S=S===o?c:o))}if(m!==w.outputColorSpace||M!==w.toneMapping){m=w.outputColorSpace,M=w.toneMapping,f.defines={},ce.getTransfer(m)===me&&(f.defines.SRGB_TRANSFER="");let F=e0[M];F&&(f.defines[F]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,w.setRenderTarget(y),w.render(u,d),y=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}var Fu=new Ke,Du=new Zn(1,1),Lu=new zs(1),Bu=new Is,Ou=new ra,ku=new ks,fu=[],pu=[],mu=new Float32Array(16),gu=new Float32Array(9),xu=new Float32Array(4);function ls(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=fu[s];if(r===void 0&&(r=new Float32Array(s),fu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function To(i,t){let e=pu[t];e===void 0&&(e=new Int32Array(t),pu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function i0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function s0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Pe(e,t)}}function r0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Pe(e,t)}}function a0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Pe(e,t)}}function o0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ne(e,n))return;xu.set(n),i.uniformMatrix2fv(this.addr,!1,xu),Pe(e,n)}}function l0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ne(e,n))return;gu.set(n),i.uniformMatrix3fv(this.addr,!1,gu),Pe(e,n)}}function c0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ne(e,n))return;mu.set(n),i.uniformMatrix4fv(this.addr,!1,mu),Pe(e,n)}}function h0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function u0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Pe(e,t)}}function d0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Pe(e,t)}}function f0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Pe(e,t)}}function p0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function m0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Pe(e,t)}}function g0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Pe(e,t)}}function x0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Pe(e,t)}}function Ao(i){return i.version===0&&(i.compareFunction=Jl,i.needsUpdate=!0),i}function _0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Ao(Du):r=Fu,e.setTexture2D(t||r,s)}function y0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ou,s)}function M0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Ao(Lu):r=ku,e.setTextureCube(t||r,s)}function S0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Bu,s)}function v0(i){switch(i){case 5126:return i0;case 35664:return s0;case 35665:return r0;case 35666:return a0;case 35674:return o0;case 35675:return l0;case 35676:return c0;case 5124:case 35670:return h0;case 35667:case 35671:return u0;case 35668:case 35672:return d0;case 35669:case 35673:return f0;case 5125:return p0;case 36294:return m0;case 36295:return g0;case 36296:return x0;case 35678:case 36198:case 36298:case 36306:case 35682:return _0;case 35679:case 36299:case 36307:return y0;case 35680:case 36300:case 36308:case 36293:return M0;case 36289:case 36303:case 36311:case 36292:return S0}}function b0(i,t){i.uniform1fv(this.addr,t)}function w0(i,t){let e=ls(t,this.size,2);i.uniform2fv(this.addr,e)}function E0(i,t){let e=ls(t,this.size,3);i.uniform3fv(this.addr,e)}function T0(i,t){let e=ls(t,this.size,4);i.uniform4fv(this.addr,e)}function A0(i,t){let e=ls(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function R0(i,t){let e=ls(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function C0(i,t){let e=ls(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function I0(i,t){i.uniform1iv(this.addr,t)}function U0(i,t){i.uniform2iv(this.addr,t)}function N0(i,t){i.uniform3iv(this.addr,t)}function P0(i,t){i.uniform4iv(this.addr,t)}function F0(i,t){i.uniform1uiv(this.addr,t)}function D0(i,t){i.uniform2uiv(this.addr,t)}function L0(i,t){i.uniform3uiv(this.addr,t)}function B0(i,t){i.uniform4uiv(this.addr,t)}function O0(i,t,e){let n=this.cache,s=t.length,r=To(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ao(Du):a=Fu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function k0(i,t,e){let n=this.cache,s=t.length,r=To(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ou,r[a])}function V0(i,t,e){let n=this.cache,s=t.length,r=To(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Ao(Lu):a=ku;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function z0(i,t,e){let n=this.cache,s=t.length,r=To(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Bu,r[a])}function G0(i){switch(i){case 5126:return b0;case 35664:return w0;case 35665:return E0;case 35666:return T0;case 35674:return A0;case 35675:return R0;case 35676:return C0;case 5124:case 35670:return I0;case 35667:case 35671:return U0;case 35668:case 35672:return N0;case 35669:case 35673:return P0;case 5125:return F0;case 36294:return D0;case 36295:return L0;case 36296:return B0;case 35678:case 36198:case 36298:case 36306:case 35682:return O0;case 35679:case 36299:case 36307:return k0;case 35680:case 36300:case 36308:case 36293:return V0;case 36289:case 36303:case 36311:case 36292:return z0}}var rc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=v0(e.type)}},ac=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=G0(e.type)}},oc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},ic=/(\w+)(\])?(\[|\.)?/g;function _u(i,t){i.seq.push(t),i.map[t.id]=t}function H0(i,t,e){let n=i.name,s=n.length;for(ic.lastIndex=0;;){let r=ic.exec(n),a=ic.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){_u(e,l===void 0?new rc(o,i,t):new ac(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new oc(o),_u(e,f)),e=f}}}var os=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);H0(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function yu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var W0=37297,Z0=0;function Y0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Mu=new Qt;function X0(i){ce._getMatrix(Mu,ce.workingColorSpace,i);let t=`mat3( ${Mu.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(i)){case Rs:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Su(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Y0(i.getShaderSource(t),o)}else return r}function J0(i,t){let e=X0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var q0={[Nl]:"Linear",[Pl]:"Reinhard",[Fl]:"Cineon",[Dl]:"ACESFilmic",[Bl]:"AgX",[Ol]:"Neutral",[Ll]:"Custom"};function j0(i,t){let e=q0[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var bo=new H;function Q0(){ce.getLuminanceCoefficients(bo);let i=bo.x.toFixed(4),t=bo.y.toFixed(4),e=bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function $0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function tx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function lr(i){return i!==""}function vu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function bu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ex=/^[ \t]*#include +<([\w\d./]+)>/gm;function lc(i){return i.replace(ex,nx)}function nx(i,t){let e=ie[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return lc(e)}var ix=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wu(i){return i.replace(ix,sx)}function sx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Eu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var rx={[Qs]:"SHADOWMAP_TYPE_PCF",[is]:"SHADOWMAP_TYPE_VSM"};function ax(i){return rx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ox={[rs]:"ENVMAP_MODE_REFRACTION"};function lx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ox[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var cx={[Fa]:"ENVMAP_BLENDING_MULTIPLY",[Gh]:"ENVMAP_BLENDING_MIX",[Hh]:"ENVMAP_BLENDING_ADD"};function hx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":cx[i.combine]||"ENVMAP_BLENDING_NONE"}function ux(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=ax(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=lx(e),f=hx(e),u=K0(e),d=$0(r),m=s.createProgram(),M,g,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(lr).join(`
`),M.length>0&&(M+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(lr).join(`
`),g.length>0&&(g+=`
`)):(M=[Eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),g=[Eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?ie.tonemapping_pars_fragment:"",e.toneMapping!==Nn?j0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,J0("linearToOutputTexel",e.outputColorSpace),Q0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(lr).join(`
`)),a=lc(a),a=vu(a,e),a=bu(a,e),o=lc(o),o=vu(o,e),o=bu(o,e),a=wu(a),o=wu(o),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,g=["#define varying in",e.glslVersion===ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let y=p+M+a,v=p+g+o,_=yu(s,s.VERTEX_SHADER,y),w=yu(s,s.FRAGMENT_SHADER,v);s.attachShader(m,_),s.attachShader(m,w),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function E(T){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(m)||"",P=s.getShaderInfoLog(_)||"",B=s.getShaderInfoLog(w)||"",N=I.trim(),Z=P.trim(),G=B.trim(),X=!0,z=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,_,w);else{let D=Su(s,_,"vertex"),j=Su(s,w,"fragment");jt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+N+`
`+D+`
`+j)}else N!==""?Xt("WebGLProgram: Program Info Log:",N):(Z===""||G==="")&&(z=!1);z&&(T.diagnostics={runnable:X,programLog:N,vertexShader:{log:Z,prefix:M},fragmentShader:{log:G,prefix:g}})}s.deleteShader(_),s.deleteShader(w),x=new os(s,m),S=tx(s,m)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(m,W0)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Z0++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=_,this.fragmentShader=w,this}var dx=0,cc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new hc(t),e.set(t,n)),n}},hc=class{constructor(t){this.id=dx++,this.code=t,this.usedTimes=0}};function fx(i){return i===ui||i===ir||i===sr}function px(i,t,e,n,s,r){let a=new Us,o=new cc,c=new Set,l=[],h=new Map,f=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,S,F,T,I,P){let B=T.fog,N=I.geometry,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?T.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,X=t.get(x.envMap||Z,G),z=u[x.type],D=n.precision;x.precision!==null&&(D=n.getMaxPrecision(x.precision),D!==x.precision&&Xt("WebGLProgram.getParameters:",x.precision,"not supported, using",D,"instead."));let j=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,O=j!==void 0?j.length:0,V=0;N.morphAttributes.position!==void 0&&(V=1),N.morphAttributes.normal!==void 0&&(V=2),N.morphAttributes.color!==void 0&&(V=3);let tt,L,C,nt;if(z){let It=Fn[z];tt=It.vertexShader,L=It.fragmentShader}else{tt=x.vertexShader,L=x.fragmentShader;let It=o.getVertexShaderStage(x),ge=o.getFragmentShaderStage(x);o.update(x,It,ge),C=It.id,nt=ge.id}let dt=i.getRenderTarget(),ot=i.state.buffers.depth.getReversed(),ut=I.isInstancedMesh===!0,gt=I.isBatchedMesh===!0,pt=!!x.map,Ct=!!x.matcap,St=!!X,Q=St&&X.isPMREMTexture===!0,Pt=!!x.aoMap,Ft=!!x.lightMap,Zt=!!x.bumpMap&&x.wireframe===!1,Ht=!!x.normalMap,Dt=!!x.displacementMap,qt=!!x.emissiveMap,$t=!!x.metalnessMap,Te=!!x.roughnessMap,Me=x.anisotropy>0,Y=x.clearcoat>0,J=x.diffuseRoughness>0,vt=x.dispersion>0,Jt=x.retroreflectivity>0,ct=x.iridescence>0,te=x.sheen>0,Rt=x.transmission>0,st=Me&&!!x.anisotropyMap,R=Y&&!!x.clearcoatMap,b=Y&&!!x.clearcoatNormalMap,U=Y&&!!x.clearcoatRoughnessMap,q=J&&!!x.diffuseRoughnessMap,K=ct&&!!x.iridescenceMap,at=ct&&!!x.iridescenceThicknessMap,mt=te&&!!x.sheenColorMap,it=te&&!!x.sheenRoughnessMap,ht=!!x.specularMap,yt=!!x.specularColorMap,k=!!x.specularIntensityMap,ft=Rt&&!!x.transmissionMap,lt=Rt&&!!x.thicknessMap,wt=!!x.gradientMap,bt=!!x.alphaMap,Et=x.alphaTest>0,zt=!!x.alphaHash,ne=!!x.extensions,_t=Nn;x.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(_t=i.toneMapping);let Wt=Q?X.isCompressedCubeTexture?X.image[0].mipmaps:X.mipmaps:null,ee={shaderID:z,shaderType:x.type,shaderName:x.name,vertexShader:tt,fragmentShader:L,defines:x.defines,customVertexShaderID:C,customFragmentShaderID:nt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:D,batching:gt,batchingColor:gt&&I._colorsTexture!==null,instancing:ut,instancingColor:ut&&I.instanceColor!==null,instancingMorph:ut&&I.morphTexture!==null,outputColorSpace:dt===null?i.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:ce.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:pt,matcap:Ct,envMap:St,envMapMode:St&&X.mapping,envMapPMREM:Q,envMapMaxLod:Q?Wt.length-1:null,envMapSize:Q?Wt[0].width:null,aoMap:Pt,lightMap:Ft,bumpMap:Zt,normalMap:Ht,displacementMap:Dt,emissiveMap:qt,normalMapObjectSpace:Ht&&x.normalMapType===Yh,normalMapTangentSpace:Ht&&x.normalMapType===rr,packedNormalMap:Ht&&x.normalMapType===rr&&fx(x.normalMap.format),metalnessMap:$t,roughnessMap:Te,anisotropy:Me,anisotropyMap:st,clearcoat:Y,clearcoatMap:R,clearcoatNormalMap:b,clearcoatRoughnessMap:U,diffuseRoughness:J,diffuseRoughnessMap:q,dispersion:vt,retroreflection:Jt,iridescence:ct,iridescenceMap:K,iridescenceThicknessMap:at,sheen:te,sheenColorMap:mt,sheenRoughnessMap:it,specularMap:ht,specularColorMap:yt,specularIntensityMap:k,transmission:Rt,transmissionMap:ft,thicknessMap:lt,gradientMap:wt,opaque:x.transparent===!1&&x.blending===ss&&x.alphaToCoverage===!1,alphaMap:bt,alphaTest:Et,alphaHash:zt,combine:x.combine,mapUv:pt&&d(x.map.channel),aoMapUv:Pt&&d(x.aoMap.channel),lightMapUv:Ft&&d(x.lightMap.channel),bumpMapUv:Zt&&d(x.bumpMap.channel),normalMapUv:Ht&&d(x.normalMap.channel),displacementMapUv:Dt&&d(x.displacementMap.channel),emissiveMapUv:qt&&d(x.emissiveMap.channel),metalnessMapUv:$t&&d(x.metalnessMap.channel),roughnessMapUv:Te&&d(x.roughnessMap.channel),anisotropyMapUv:st&&d(x.anisotropyMap.channel),clearcoatMapUv:R&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:b&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:q&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:K&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:at&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:it&&d(x.sheenRoughnessMap.channel),specularMapUv:ht&&d(x.specularMap.channel),specularColorMapUv:yt&&d(x.specularColorMap.channel),specularIntensityMapUv:k&&d(x.specularIntensityMap.channel),transmissionMapUv:ft&&d(x.transmissionMap.channel),thicknessMapUv:lt&&d(x.thicknessMap.channel),alphaMapUv:bt&&d(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Ht||Me),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!N.attributes.uv&&(pt||bt),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&Ht===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ot,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:V,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:P.filter(It=>It.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:_t,decodeVideoTexture:pt&&x.map.isVideoTexture===!0&&ce.getTransfer(x.map.colorSpace)===me,decodeVideoTextureEmissive:qt&&x.emissiveMap.isVideoTexture===!0&&ce.getTransfer(x.emissiveMap.colorSpace)===me,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ye,flipSided:x.side===Ge,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ne&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&x.extensions.multiDraw===!0||gt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ee.vertexUv1s=c.has(1),ee.vertexUv2s=c.has(2),ee.vertexUv3s=c.has(3),c.clear(),ee}function M(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let F in x.defines)S.push(F),S.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(g(S,x),p(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function g(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function p(x,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function y(x){let S=u[x.type],F;if(S){let T=Fn[S];F=au.clone(T.uniforms)}else F=x.uniforms;return F}function v(x,S){let F=h.get(S);return F!==void 0?++F.usedTimes:(F=new ux(i,S,x,s),l.push(F),h.set(S,F)),F}function _(x){if(--x.usedTimes===0){let S=l.indexOf(x);l[S]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function E(){o.dispose()}return{getParameters:m,getProgramCacheKey:M,getUniforms:y,acquireProgram:v,releaseProgram:_,releaseShaderCache:w,programs:l,dispose:E}}function mx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function gx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Tu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Au(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,m,M,g,p){let y=i[t];return y===void 0?(y={id:u.id,object:u,geometry:d,material:m,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:g,group:p},i[t]=y):(y.id=u.id,y.object=u,y.geometry=d,y.material=m,y.materialVariant=a(u),y.groupOrder=M,y.renderOrder=u.renderOrder,y.z=g,y.group=p),t++,y}function c(u,d,m,M,g,p,y){y.reversedDepth===!0&&(g=-g);let v=o(u,d,m,M,g,p);m.transmission>0?n.push(v):m.transparent===!0?s.push(v):e.push(v)}function l(u,d,m,M,g,p){let y=o(u,d,m,M,g,p);m.transmission>0?n.unshift(y):m.transparent===!0?s.unshift(y):e.unshift(y)}function h(u,d){e.length>1&&e.sort(u||gx),n.length>1&&n.sort(d||Tu),s.length>1&&s.sort(d||Tu)}function f(){for(let u=t,d=i.length;u<d;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function xx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Au,i.set(n,[a])):s>=r.length?(a=new Au,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function _x(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new H,color:new Mt};break;case"SpotLight":e={position:new H,direction:new H,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":e={color:new Mt,position:new H,halfWidth:new H,halfHeight:new H};break}return i[t.id]=e,e}}}function yx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Mx=0;function Sx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function vx(i){let t=new _x,e=yx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new H);let s=new H,r=new Yt,a=new Yt;function o(l){let h=0,f=0,u=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let d=0,m=0,M=0,g=0,p=0,y=0,v=0,_=0,w=0,E=0,x=0,S=0,F=0,T=0;l.sort(Sx);for(let P=0,B=l.length;P<B;P++){let N=l[P],Z=N.color,G=N.intensity,X=N.distance,z=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===ui?z=N.shadow.map.texture:z=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=Z.r*G,f+=Z.g*G,u+=Z.b*G;else if(N.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(N.sh.coefficients[D],G);T++}else if(N.isSunLight){let D=t.get(N);if(D.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let j=N.shadow,O=e.get(N);O.shadowIntensity=j.intensity,O.shadowBias=j.bias,O.shadowNormalBias=j.normalBias,O.shadowRadius=j.radius,O.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[m]=O,n.sunShadowMap[m]=z;let V=j.getViewportCount();for(let tt=0;tt<V;tt++)n.sunShadowMatrix[M+tt]=j.getMatrix(tt),n.sunShadowCascade[M+tt]=j._cascadeData[tt];M+=V,m++}n.sun[d]=D,d++}else if(N.isDirectionalLight){let D=t.get(N);if(D.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let j=N.shadow,O=e.get(N);O.shadowIntensity=j.intensity,O.shadowBias=j.bias,O.shadowNormalBias=j.normalBias,O.shadowRadius=j.radius,O.shadowMapSize=j.mapSize,n.directionalShadow[g]=O,n.directionalShadowMap[g]=z,n.directionalShadowMatrix[g]=N.shadow.matrix,w++}n.directional[g]=D,g++}else if(N.isSpotLight){let D=t.get(N);D.position.setFromMatrixPosition(N.matrixWorld),D.color.copy(Z).multiplyScalar(G),D.distance=X,D.coneCos=Math.cos(N.angle),D.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),D.decay=N.decay,n.spot[y]=D;let j=N.shadow;if(N.map&&(n.spotLightMap[S]=N.map,S++,j.updateMatrices(N),N.castShadow&&F++),n.spotLightMatrix[y]=j.matrix,N.castShadow){let O=e.get(N);O.shadowIntensity=j.intensity,O.shadowBias=j.bias,O.shadowNormalBias=j.normalBias,O.shadowRadius=j.radius,O.shadowMapSize=j.mapSize,n.spotShadow[y]=O,n.spotShadowMap[y]=z,x++}y++}else if(N.isRectAreaLight){let D=t.get(N);D.color.copy(Z).multiplyScalar(G),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),n.rectArea[v]=D,v++}else if(N.isPointLight){let D=t.get(N);if(D.color.copy(N.color).multiplyScalar(N.intensity),D.distance=N.distance,D.decay=N.decay,N.castShadow){let j=N.shadow,O=e.get(N);O.shadowIntensity=j.intensity,O.shadowBias=j.bias,O.shadowNormalBias=j.normalBias,O.shadowRadius=j.radius,O.shadowMapSize=j.mapSize,O.shadowCameraNear=j.camera.near,O.shadowCameraFar=j.camera.far,n.pointShadow[p]=O,n.pointShadowMap[p]=z,n.pointShadowMatrix[p]=N.shadow.matrix,E++}n.point[p]=D,p++}else if(N.isHemisphereLight){let D=t.get(N);D.skyColor.copy(N.color).multiplyScalar(G),D.groundColor.copy(N.groundColor).multiplyScalar(G),n.hemi[_]=D,_++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ut.LTC_FLOAT_1,n.rectAreaLTC2=Ut.LTC_FLOAT_2):(n.rectAreaLTC1=Ut.LTC_HALF_1,n.rectAreaLTC2=Ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let I=n.hash;(I.sunLength!==d||I.directionalLength!==g||I.pointLength!==p||I.spotLength!==y||I.rectAreaLength!==v||I.hemiLength!==_||I.numSunShadows!==m||I.numDirectionalShadows!==w||I.numPointShadows!==E||I.numSpotShadows!==x||I.numSpotMaps!==S||I.numLightProbes!==T)&&(n.sun.length=d,n.directional.length=g,n.spot.length=y,n.rectArea.length=v,n.point.length=p,n.hemi.length=_,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+S-F,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=T,I.sunLength=d,I.directionalLength=g,I.pointLength=p,I.spotLength=y,I.rectAreaLength=v,I.hemiLength=_,I.numSunShadows=m,I.numDirectionalShadows=w,I.numPointShadows=E,I.numSpotShadows=x,I.numSpotMaps=S,I.numLightProbes=T,n.version=Mx++)}function c(l,h){let f=0,u=0,d=0,m=0,M=0,g=0,p=h.matrixWorldInverse;for(let y=0,v=l.length;y<v;y++){let _=l[y];if(_.isSunLight){let w=n.sun[f];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(p),f++}else if(_.isDirectionalLight){let w=n.directional[u];w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),u++}else if(_.isSpotLight){let w=n.spot[m];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),m++}else if(_.isRectAreaLight){let w=n.rectArea[M];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),M++}else if(_.isPointLight){let w=n.point[d];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){let w=n.hemi[g];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(p),g++}}}return{setup:o,setupView:c,state:n}}function Ru(i){let t=new vx(i),e=[],n=[],s=[];function r(f){h.camera=f,e.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):e.push(f)}function o(f){n.push(f)}function c(){t.setup(e),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function l(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function bx(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Ru(i),t.set(s,[o])):r>=a.length?(o=new Ru(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var wx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ex=`uniform sampler2D shadow_pass;
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
}`,Tx=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],Ax=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Cu=new Yt,or=new H,sc=new H;function Rx(i,t,e){let n=new ai,s=new Vt,r=new Vt,a=new be,o=new Ma,c=new Sa,l={},h=e.maxTextureSize,f={[hi]:Ge,[Ge]:hi,[ye]:ye},u=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:wx,fragmentShader:Ex}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let m=new he;m.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new re(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qs;let p=this.type;this.render=function(E,x,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===bh&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Qs);let F=i.getRenderTarget(),T=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Ti),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let B=p!==this.type;B&&x.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(Z=>Z.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,Z=E.length;N<Z;N++){let G=E[N],X=G.shadow;if(X===void 0){Xt("WebGLShadowMap:",G,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let z=X.getFrameExtents();s.multiply(z),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/z.x),s.x=r.x*z.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/z.y),s.y=r.y*z.y,X.mapSize.y=r.y));let D=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=D,X.map===null||B===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===is){if(G.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new on(s.x,s.y,{format:ui,type:wn,minFilter:Qe,magFilter:Qe,generateMipmaps:!1}),X.map.texture.name=G.name+".shadowMap",X.map.depthTexture=new Zn(s.x,s.y,mn),X.map.depthTexture.name=G.name+".shadowMapDepth",X.map.depthTexture.format=Wn,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ce,X.map.depthTexture.magFilter=Ce}else G.isPointLight?(X.map=new cr(s.x),X.map.depthTexture=new zs(s.x,bn)):(X.map=new on(s.x,s.y),X.map.depthTexture=new Zn(s.x,s.y,bn)),X.map.depthTexture.name=G.name+".shadowMap",X.map.depthTexture.format=Wn,this.type===Qs?(X.map.depthTexture.compareFunction=D?Xl:Yl,X.map.depthTexture.minFilter=Qe,X.map.depthTexture.magFilter=Qe):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ce,X.map.depthTexture.magFilter=Ce);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let j=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();G.isPointLight!==!0&&X.updateMatrices(G,S);let O=(X.camera.layers.mask&4294967294)!==0?X.camera.layers:S.layers;for(let V=0;V<j;V++){let tt=X.getCamera(V);if(G.isPointLight){let L=X.camera,C=X.matrix,nt=G.distance||L.far;nt!==L.far&&(L.far=nt,L.updateProjectionMatrix()),or.setFromMatrixPosition(G.matrixWorld),L.position.copy(or),sc.copy(L.position),sc.add(Tx[V]),L.up.copy(Ax[V]),L.lookAt(sc),L.updateMatrixWorld(),C.makeTranslation(-or.x,-or.y,-or.z),Cu.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Cu,L.coordinateSystem,L.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,V),i.clear();else{V===0&&(i.setRenderTarget(X.map),i.clear());let L=X.getViewport(V);a.set(r.x*L.x,r.y*L.y,r.x*L.z,r.y*L.w),P.viewport(a)}n=X.getFrustum(V),_(x,S,tt,G,O,this.type)}X.isPointLightShadow!==!0&&this.type===is&&y(X,S),X.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(F,T,I)};function y(E,x){let S=t.update(M);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new on(s.x,s.y,{format:ui,type:wn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(x,null,S,u,M,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(x,null,S,d,M,null)}function v(E,x,S,F){let T=null,I=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)T=I;else if(T=S.isPointLight===!0?c:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let P=T.uuid,B=x.uuid,N=l[P];N===void 0&&(N={},l[P]=N);let Z=N[B];Z===void 0&&(Z=T.clone(),N[B]=Z,x.addEventListener("dispose",w)),T=Z}if(T.visible=x.visible,T.wireframe=x.wireframe,F===is?T.side=x.shadowSide!==null?x.shadowSide:x.side:T.side=x.shadowSide!==null?x.shadowSide:f[x.side],T.alphaMap=x.alphaMap,T.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,T.map=x.map,T.clipShadows=x.clipShadows,T.clippingPlanes=x.clippingPlanes,T.clipIntersection=x.clipIntersection,T.displacementMap=x.displacementMap,T.displacementScale=x.displacementScale,T.displacementBias=x.displacementBias,T.wireframeLinewidth=x.wireframeLinewidth,T.linewidth=x.linewidth,S.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let P=i.properties.get(T);P.light=S}return T}function _(E,x,S,F,T,I){if(E.visible===!1)return;if(E.layers.test(T)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&I===is)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let N=t.update(E),Z=E.material;if(Array.isArray(Z)){let G=N.groups;for(let X=0,z=G.length;X<z;X++){let D=G[X],j=Z[D.materialIndex];if(j&&j.visible){let O=v(E,j,F,I);E.onBeforeShadow(i,E,x,S,N,O,D),i.renderBufferDirect(S,null,N,O,E,D),E.onAfterShadow(i,E,x,S,N,O,D)}}}else if(Z.visible){let G=v(E,Z,F,I);E.onBeforeShadow(i,E,x,S,N,G,null),i.renderBufferDirect(S,null,N,G,E,null),E.onAfterShadow(i,E,x,S,N,G,null)}}let B=E.children;for(let N=0,Z=B.length;N<Z;N++)_(B[N],x,S,F,T,I)}function w(E){E.target.removeEventListener("dispose",w);for(let S in l){let F=l[S],T=E.target.uuid;T in F&&(F[T].dispose(),delete F[T])}}}function Cx(i,t){function e(){let k=!1,ft=new be,lt=null,wt=new be(0,0,0,0);return{setMask:function(bt){lt!==bt&&!k&&(i.colorMask(bt,bt,bt,bt),lt=bt)},setLocked:function(bt){k=bt},setClear:function(bt,Et,zt,ne,_t){_t===!0&&(bt*=ne,Et*=ne,zt*=ne),ft.set(bt,Et,zt,ne),wt.equals(ft)===!1&&(i.clearColor(bt,Et,zt,ne),wt.copy(ft))},reset:function(){k=!1,lt=null,wt.set(-1,0,0,0)}}}function n(){let k=!1,ft=!1,lt=null,wt=null,bt=null;return{setReversed:function(Et){if(ft!==Et){let zt=t.get("EXT_clip_control");Et?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),ft=Et;let ne=bt;bt=null,this.setClear(ne)}},getReversed:function(){return ft},setTest:function(Et){Et?ot(i.DEPTH_TEST):ut(i.DEPTH_TEST)},setMask:function(Et){lt!==Et&&!k&&(i.depthMask(Et),lt=Et)},setFunc:function(Et){if(ft&&(Et=iu[Et]),wt!==Et){switch(Et){case Xr:i.depthFunc(i.NEVER);break;case Jr:i.depthFunc(i.ALWAYS);break;case qr:i.depthFunc(i.LESS);break;case Xi:i.depthFunc(i.LEQUAL);break;case jr:i.depthFunc(i.EQUAL);break;case Qr:i.depthFunc(i.GEQUAL);break;case Kr:i.depthFunc(i.GREATER);break;case $r:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}wt=Et}},setLocked:function(Et){k=Et},setClear:function(Et){bt!==Et&&(bt=Et,ft&&(Et=1-Et),i.clearDepth(Et))},reset:function(){k=!1,lt=null,wt=null,bt=null,ft=!1}}}function s(){let k=!1,ft=null,lt=null,wt=null,bt=null,Et=null,zt=null,ne=null,_t=null;return{setTest:function(Wt){k||(Wt?ot(i.STENCIL_TEST):ut(i.STENCIL_TEST))},setMask:function(Wt){ft!==Wt&&!k&&(i.stencilMask(Wt),ft=Wt)},setFunc:function(Wt,ee,It){(lt!==Wt||wt!==ee||bt!==It)&&(i.stencilFunc(Wt,ee,It),lt=Wt,wt=ee,bt=It)},setOp:function(Wt,ee,It){(Et!==Wt||zt!==ee||ne!==It)&&(i.stencilOp(Wt,ee,It),Et=Wt,zt=ee,ne=It)},setLocked:function(Wt){k=Wt},setClear:function(Wt){_t!==Wt&&(i.clearStencil(Wt),_t=Wt)},reset:function(){k=!1,ft=null,lt=null,wt=null,bt=null,Et=null,zt=null,ne=null,_t=null}}}let r=new e,a=new n,o=new s,c={},l=new WeakMap,h={},f={},u={},d=new WeakMap,m=[],M=null,g=!1,p=null,y=null,v=null,_=null,w=null,E=null,x=null,S=new Mt(0,0,0),F=0,T=!1,I=null,P=null,B=null,N=null,Z=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,z=0,D=i.getParameter(i.VERSION);D.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(D)[1]),X=z>=1):D.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),X=z>=2);let j=null,O={},V=i.getParameter(i.SCISSOR_BOX),tt=i.getParameter(i.VIEWPORT),L=new be().fromArray(V),C=new be().fromArray(tt);function nt(k,ft,lt,wt){let bt=new Uint8Array(4),Et=i.createTexture();i.bindTexture(k,Et),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<lt;zt++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,wt,0,i.RGBA,i.UNSIGNED_BYTE,bt):i.texImage2D(ft+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,bt);return Et}let dt={};dt[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),dt[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),dt[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(i.DEPTH_TEST),a.setFunc(Xi),Zt(!1),Ht(Tl),ot(i.CULL_FACE),Pt(Ti);function ot(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function ut(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function gt(k,ft){return u[k]!==ft?(i.bindFramebuffer(k,ft),u[k]=ft,k===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ft),k===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function pt(k,ft){let lt=m,wt=!1;if(k){lt=d.get(ft),lt===void 0&&(lt=[],d.set(ft,lt));let bt=k.textures;if(lt.length!==bt.length||lt[0]!==i.COLOR_ATTACHMENT0){for(let Et=0,zt=bt.length;Et<zt;Et++)lt[Et]=i.COLOR_ATTACHMENT0+Et;lt.length=bt.length,wt=!0}}else lt[0]!==i.BACK&&(lt[0]=i.BACK,wt=!0);wt&&i.drawBuffers(lt)}function Ct(k){return M!==k?(i.useProgram(k),M=k,!0):!1}let St={[Ai]:i.FUNC_ADD,[Eh]:i.FUNC_SUBTRACT,[Th]:i.FUNC_REVERSE_SUBTRACT};St[Ah]=i.MIN,St[Rh]=i.MAX;let Q={[Ch]:i.ZERO,[Ih]:i.ONE,[Uh]:i.SRC_COLOR,[Il]:i.SRC_ALPHA,[Bh]:i.SRC_ALPHA_SATURATE,[Dh]:i.DST_COLOR,[Ph]:i.DST_ALPHA,[Nh]:i.ONE_MINUS_SRC_COLOR,[Ul]:i.ONE_MINUS_SRC_ALPHA,[Lh]:i.ONE_MINUS_DST_COLOR,[Fh]:i.ONE_MINUS_DST_ALPHA,[Oh]:i.CONSTANT_COLOR,[kh]:i.ONE_MINUS_CONSTANT_COLOR,[Vh]:i.CONSTANT_ALPHA,[zh]:i.ONE_MINUS_CONSTANT_ALPHA};function Pt(k,ft,lt,wt,bt,Et,zt,ne,_t,Wt){if(k===Ti){g===!0&&(ut(i.BLEND),g=!1);return}if(g===!1&&(ot(i.BLEND),g=!0),k!==wh){if(k!==p||Wt!==T){if((y!==Ai||w!==Ai)&&(i.blendEquation(i.FUNC_ADD),y=Ai,w=Ai),Wt)switch(k){case ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Al:i.blendFunc(i.ONE,i.ONE);break;case Rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:jt("WebGLState: Invalid blending: ",k);break}else switch(k){case ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Al:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Rl:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cl:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",k);break}v=null,_=null,E=null,x=null,S.set(0,0,0),F=0,p=k,T=Wt}return}bt=bt||ft,Et=Et||lt,zt=zt||wt,(ft!==y||bt!==w)&&(i.blendEquationSeparate(St[ft],St[bt]),y=ft,w=bt),(lt!==v||wt!==_||Et!==E||zt!==x)&&(i.blendFuncSeparate(Q[lt],Q[wt],Q[Et],Q[zt]),v=lt,_=wt,E=Et,x=zt),(ne.equals(S)===!1||_t!==F)&&(i.blendColor(ne.r,ne.g,ne.b,_t),S.copy(ne),F=_t),p=k,T=!1}function Ft(k,ft){k.side===ye?ut(i.CULL_FACE):ot(i.CULL_FACE);let lt=k.side===Ge;ft&&(lt=!lt),Zt(lt),k.blending===ss&&k.transparent===!1?Pt(Ti):Pt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let wt=k.stencilWrite;o.setTest(wt),wt&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),qt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(k){I!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),I=k)}function Ht(k){k!==Sh?(ot(i.CULL_FACE),k!==P&&(k===Tl?i.cullFace(i.BACK):k===vh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ut(i.CULL_FACE),P=k}function Dt(k){k!==B&&(X&&i.lineWidth(k),B=k)}function qt(k,ft,lt){k?(ot(i.POLYGON_OFFSET_FILL),(N!==ft||Z!==lt)&&(N=ft,Z=lt,a.getReversed()&&(ft=-ft,lt=-lt),i.polygonOffset(ft,lt))):ut(i.POLYGON_OFFSET_FILL)}function $t(k){k?ot(i.SCISSOR_TEST):ut(i.SCISSOR_TEST)}function Te(k){k===void 0&&(k=i.TEXTURE0+G-1),j!==k&&(i.activeTexture(k),j=k)}function Me(k,ft,lt){lt===void 0&&(j===null?lt=i.TEXTURE0+G-1:lt=j);let wt=O[lt];wt===void 0&&(wt={type:void 0,texture:void 0},O[lt]=wt),(wt.type!==k||wt.texture!==ft)&&(j!==lt&&(i.activeTexture(lt),j=lt),i.bindTexture(k,ft||dt[k]),wt.type=k,wt.texture=ft)}function Y(){let k=O[j];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function J(){try{i.compressedTexImage2D(...arguments)}catch(k){jt("WebGLState:",k)}}function vt(){try{i.compressedTexImage3D(...arguments)}catch(k){jt("WebGLState:",k)}}function Jt(){try{i.texSubImage2D(...arguments)}catch(k){jt("WebGLState:",k)}}function ct(){try{i.texSubImage3D(...arguments)}catch(k){jt("WebGLState:",k)}}function te(){try{i.compressedTexSubImage2D(...arguments)}catch(k){jt("WebGLState:",k)}}function Rt(){try{i.compressedTexSubImage3D(...arguments)}catch(k){jt("WebGLState:",k)}}function st(){try{i.texStorage2D(...arguments)}catch(k){jt("WebGLState:",k)}}function R(){try{i.texStorage3D(...arguments)}catch(k){jt("WebGLState:",k)}}function b(){try{i.texImage2D(...arguments)}catch(k){jt("WebGLState:",k)}}function U(){try{i.texImage3D(...arguments)}catch(k){jt("WebGLState:",k)}}function q(k){return f[k]!==void 0?f[k]:i.getParameter(k)}function K(k,ft){f[k]!==ft&&(i.pixelStorei(k,ft),f[k]=ft)}function at(k){L.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),L.copy(k))}function mt(k){C.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),C.copy(k))}function it(k,ft){let lt=l.get(ft);lt===void 0&&(lt=new WeakMap,l.set(ft,lt));let wt=lt.get(k);wt===void 0&&(wt=i.getUniformBlockIndex(ft,k.name),i.uniformBlockBinding(ft,wt,wt),lt.set(k,wt))}function ht(k,ft,lt){let bt=l.get(ft).get(k);c[bt]!==lt&&(i.bindBufferBase(i.UNIFORM_BUFFER,bt,lt),c[bt]=lt)}function yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},j=null,O={},u={},c={},d=new WeakMap,m=[],M=null,g=!1,p=null,y=null,v=null,_=null,w=null,E=null,x=null,S=new Mt(0,0,0),F=0,T=!1,I=null,P=null,B=null,N=null,Z=null,L.set(0,0,i.canvas.width,i.canvas.height),C.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ot,disable:ut,bindFramebuffer:gt,drawBuffers:pt,useProgram:Ct,setBlending:Pt,setMaterial:Ft,setFlipSided:Zt,setCullFace:Ht,setLineWidth:Dt,setPolygonOffset:qt,setScissorTest:$t,activeTexture:Te,bindTexture:Me,unbindTexture:Y,compressedTexImage2D:J,compressedTexImage3D:vt,texImage2D:b,texImage3D:U,pixelStorei:K,getParameter:q,updateUBOMapping:it,uniformBlockBinding:ht,texStorage2D:st,texStorage3D:R,texSubImage2D:Jt,texSubImage3D:ct,compressedTexSubImage2D:te,compressedTexSubImage3D:Rt,scissor:at,viewport:mt,reset:yt}}function Ix(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Vt,h=new WeakMap,f=new Set,u,d=new WeakMap,m=new Set,M=new FinalizationRegistry(R=>m.delete(R)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,b){return g?new OffscreenCanvas(R,b):Cs("canvas")}function y(R,b,U){let q=1,K=st(R);if((K.width>U||K.height>U)&&(q=U/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let at=Math.floor(q*K.width),mt=Math.floor(q*K.height);u===void 0&&(u=p(at,mt));let it=b?p(at,mt):u;return it.width=at,it.height=mt,it.getContext("2d").drawImage(R,0,0,at,mt),Xt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+at+"x"+mt+")."),it}else return"data"in R&&Xt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function v(R){return R.generateMipmaps}function _(R){i.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(R,b,U,q,K,at=!1){if(R!==null){if(i[R]!==void 0)return i[R];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let mt;q&&(mt=t.get("EXT_texture_norm16"),mt||Xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=b;if(b===i.RED&&(U===i.FLOAT&&(it=i.R32F),U===i.HALF_FLOAT&&(it=i.R16F),U===i.UNSIGNED_BYTE&&(it=i.R8),U===i.UNSIGNED_SHORT&&mt&&(it=mt.R16_EXT),U===i.SHORT&&mt&&(it=mt.R16_SNORM_EXT)),b===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(it=i.R8UI),U===i.UNSIGNED_SHORT&&(it=i.R16UI),U===i.UNSIGNED_INT&&(it=i.R32UI),U===i.BYTE&&(it=i.R8I),U===i.SHORT&&(it=i.R16I),U===i.INT&&(it=i.R32I)),b===i.RG&&(U===i.FLOAT&&(it=i.RG32F),U===i.HALF_FLOAT&&(it=i.RG16F),U===i.UNSIGNED_BYTE&&(it=i.RG8),U===i.UNSIGNED_SHORT&&mt&&(it=mt.RG16_EXT),U===i.SHORT&&mt&&(it=mt.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(it=i.RG8UI),U===i.UNSIGNED_SHORT&&(it=i.RG16UI),U===i.UNSIGNED_INT&&(it=i.RG32UI),U===i.BYTE&&(it=i.RG8I),U===i.SHORT&&(it=i.RG16I),U===i.INT&&(it=i.RG32I)),b===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(it=i.RGB8UI),U===i.UNSIGNED_SHORT&&(it=i.RGB16UI),U===i.UNSIGNED_INT&&(it=i.RGB32UI),U===i.BYTE&&(it=i.RGB8I),U===i.SHORT&&(it=i.RGB16I),U===i.INT&&(it=i.RGB32I)),b===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),U===i.UNSIGNED_INT&&(it=i.RGBA32UI),U===i.BYTE&&(it=i.RGBA8I),U===i.SHORT&&(it=i.RGBA16I),U===i.INT&&(it=i.RGBA32I)),b===i.RGB&&(U===i.UNSIGNED_SHORT&&mt&&(it=mt.RGB16_EXT),U===i.SHORT&&mt&&(it=mt.RGB16_SNORM_EXT),U===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(it=i.R11F_G11F_B10F)),b===i.RGBA){let ht=at?Rs:ce.getTransfer(K);U===i.FLOAT&&(it=i.RGBA32F),U===i.HALF_FLOAT&&(it=i.RGBA16F),U===i.UNSIGNED_BYTE&&(it=ht===me?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT&&mt&&(it=mt.RGBA16_EXT),U===i.SHORT&&mt&&(it=mt.RGBA16_SNORM_EXT),U===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function x(R,b){let U;return R?b===null||b===bn||b===Ci?U=i.DEPTH24_STENCIL8:b===mn?U=i.DEPTH32F_STENCIL8:b===as&&(U=i.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===bn||b===Ci?U=i.DEPTH_COMPONENT24:b===mn?U=i.DEPTH_COMPONENT32F:b===as&&(U=i.DEPTH_COMPONENT16),U}function S(R,b){return v(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ce&&R.minFilter!==Qe?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function F(R){let b=new WeakRef(R);n.get(R).__ref=b,m.add(b),M.register(R,b,b)}function T(R){let b=n.get(R).__ref;b!==void 0&&(m.delete(b),M.unregister(b))}function I(R){B(R.target)}function P(R){N(R.target)}function B(R){R.removeEventListener("dispose",I),T(R),G(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&f.delete(R)}function N(R){R.removeEventListener("dispose",P),T(R),z(R)}function Z(){for(let R of m){let b=R.deref();b!==void 0&&(b.isRenderTarget===!0?N(b):B(b))}m.clear(),f.clear()}function G(R){let b=n.get(R);if(b.__webglInit===void 0)return;let U=R.source,q=d.get(U);if(q){let K=q[b.__cacheKey];K.usedTimes--,K.usedTimes===0&&X(R),Object.keys(q).length===0&&d.delete(U)}n.remove(R)}function X(R){let b=n.get(R);i.deleteTexture(b.__webglTexture);let U=R.source,q=d.get(U);delete q[b.__cacheKey],a.memory.textures--}function z(R){let b=n.get(R);b.__depthDisposeCallback&&b.__depthDisposeCallback();let U=R.depthTexture;if(U&&U.renderTarget===R&&B(U),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let at=0;at<b.__webglFramebuffer[K].length;at++)i.deleteFramebuffer(b.__webglFramebuffer[K][at]);else i.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)i.deleteFramebuffer(b.__webglFramebuffer[K]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let q=R.textures;for(let K=0,at=q.length;K<at;K++){let mt=n.get(q[K]);mt.__webglTexture&&(i.deleteTexture(mt.__webglTexture),a.memory.textures--),n.remove(q[K])}n.remove(R)}let D=0;function j(){D=0}function O(){return D}function V(R){D=R}function tt(){let R=D;return R>=s.maxTextures&&Xt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,R}function L(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.mipmapsAutoUpdate),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function C(R,b){let U=n.get(R);if(R.isVideoTexture&&te(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&U.__version!==R.version){let q=R.image;if(q===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ft(U,R,b);return}}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+b)}function nt(R,b){let U=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){Ft(U,R,b);return}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+b)}function dt(R,b){let U=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){Ft(U,R,b);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+b)}function ot(R,b){let U=n.get(R);if(R.version>0&&U.__version!==R.version){Zt(U,R,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+b)}let ut={[Ji]:i.REPEAT,[An]:i.CLAMP_TO_EDGE,[ta]:i.MIRRORED_REPEAT},gt={[Ce]:i.NEAREST,[Wh]:i.NEAREST_MIPMAP_NEAREST,[Ks]:i.NEAREST_MIPMAP_LINEAR,[Qe]:i.LINEAR,[Ba]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},pt={[Jh]:i.NEVER,[Jl]:i.ALWAYS,[qh]:i.LESS,[Yl]:i.LEQUAL,[jh]:i.EQUAL,[Xl]:i.GEQUAL,[Qh]:i.GREATER,[Kh]:i.NOTEQUAL};function Ct(R,b){if(b.type===mn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Qe||b.magFilter===Ba||b.magFilter===Ks||b.magFilter===Yn||b.minFilter===Qe||b.minFilter===Ba||b.minFilter===Ks||b.minFilter===Yn)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ut[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ut[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ut[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,gt[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,gt[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,pt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ce||b.minFilter!==Ks&&b.minFilter!==Yn||b.type===mn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function St(R,b){let U=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",I),F(b));let q=b.source,K=d.get(q);K===void 0&&(K={},d.set(q,K));let at=L(b);if(at!==R.__cacheKey){K[at]===void 0&&(K[at]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),K[at].usedTimes++;let mt=K[R.__cacheKey];mt!==void 0&&(K[R.__cacheKey].usedTimes--,mt.usedTimes===0&&X(b)),R.__cacheKey=at,R.__webglTexture=K[at].texture}return U}function Q(R,b,U){return Math.floor(Math.floor(R/U)/b)}function Pt(R,b,U,q){let at=R.updateRanges;if(at.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,U,q,b.data);else{at.sort((k,ft)=>k.start-ft.start);let mt=0;for(let k=1;k<at.length;k++){let ft=at[mt],lt=at[k],wt=ft.start+ft.count,bt=Q(lt.start,b.width,4),Et=Q(ft.start,b.width,4);lt.start<=wt+1&&bt===Et&&Q(lt.start+lt.count-1,b.width,4)===bt?ft.count=Math.max(ft.count,lt.start+lt.count-ft.start):(++mt,at[mt]=lt)}at.length=mt+1;let it=e.getParameter(i.UNPACK_ROW_LENGTH),ht=e.getParameter(i.UNPACK_SKIP_PIXELS),yt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let k=0,ft=at.length;k<ft;k++){let lt=at[k],wt=Math.floor(lt.start/4),bt=Math.ceil(lt.count/4),Et=wt%b.width,zt=Math.floor(wt/b.width),ne=bt,_t=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Et),e.pixelStorei(i.UNPACK_SKIP_ROWS,zt),e.texSubImage2D(i.TEXTURE_2D,0,Et,zt,ne,_t,U,q,b.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,it),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(i.UNPACK_SKIP_ROWS,yt)}}function Ft(R,b,U){let q=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(q=i.TEXTURE_3D);let K=St(R,b),at=b.source;e.bindTexture(q,R.__webglTexture,i.TEXTURE0+U);let mt=n.get(at);if(at.version!==mt.__version||K===!0){if(e.activeTexture(i.TEXTURE0+U),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let _t=ce.getPrimaries(ce.workingColorSpace),Wt=b.colorSpace===Jn?null:ce.getPrimaries(b.colorSpace),ee=b.colorSpace===Jn||_t===Wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee)}e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let ht=y(b.image,!1,s.maxTextureSize);ht=Rt(b,ht);let yt=r.convert(b.format,b.colorSpace),k=r.convert(b.type),ft=E(b.internalFormat,yt,k,b.normalized,b.colorSpace,b.isVideoTexture);Ct(q,b);let lt,wt=b.mipmaps,bt=b.isVideoTexture!==!0,Et=mt.__version===void 0||K===!0,zt=at.dataReady,ne=S(b,ht);if(b.isDepthTexture)ft=x(b.format===Xn,b.type),Et&&(bt?e.texStorage2D(i.TEXTURE_2D,1,ft,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,ft,ht.width,ht.height,0,yt,k,null));else if(b.isDataTexture)if(wt.length>0){bt&&Et&&e.texStorage2D(i.TEXTURE_2D,ne,ft,wt[0].width,wt[0].height);for(let _t=0,Wt=wt.length;_t<Wt;_t++)lt=wt[_t],bt?zt&&e.texSubImage2D(i.TEXTURE_2D,_t,0,0,lt.width,lt.height,yt,k,lt.data):e.texImage2D(i.TEXTURE_2D,_t,ft,lt.width,lt.height,0,yt,k,lt.data);b.generateMipmaps=!1}else bt?(Et&&e.texStorage2D(i.TEXTURE_2D,ne,ft,ht.width,ht.height),zt&&Pt(b,ht,yt,k)):e.texImage2D(i.TEXTURE_2D,0,ft,ht.width,ht.height,0,yt,k,ht.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){bt&&Et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ne,ft,wt[0].width,wt[0].height,ht.depth);for(let _t=0,Wt=wt.length;_t<Wt;_t++)if(lt=wt[_t],b.format!==En)if(yt!==null)if(bt){if(zt)if(b.layerUpdates.size>0){let ee=nc(lt.width,lt.height,b.format,b.type);for(let It of b.layerUpdates){let ge=lt.data.subarray(It*ee/lt.data.BYTES_PER_ELEMENT,(It+1)*ee/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_t,0,0,It,lt.width,lt.height,1,yt,ge)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_t,0,0,0,lt.width,lt.height,ht.depth,yt,lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,_t,ft,lt.width,lt.height,ht.depth,0,lt.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else bt?zt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,_t,0,0,0,lt.width,lt.height,ht.depth,yt,k,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,_t,ft,lt.width,lt.height,ht.depth,0,yt,k,lt.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{bt&&Et&&e.texStorage2D(i.TEXTURE_2D,ne,ft,wt[0].width,wt[0].height);for(let _t=0,Wt=wt.length;_t<Wt;_t++)lt=wt[_t],b.format!==En?yt!==null?bt?zt&&e.compressedTexSubImage2D(i.TEXTURE_2D,_t,0,0,lt.width,lt.height,yt,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,_t,ft,lt.width,lt.height,0,lt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):bt?zt&&e.texSubImage2D(i.TEXTURE_2D,_t,0,0,lt.width,lt.height,yt,k,lt.data):e.texImage2D(i.TEXTURE_2D,_t,ft,lt.width,lt.height,0,yt,k,lt.data)}else if(b.isDataArrayTexture)if(bt){if(Et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ne,ft,ht.width,ht.height,ht.depth),zt)if(b.layerUpdates.size>0){let _t=nc(ht.width,ht.height,b.format,b.type);for(let Wt of b.layerUpdates){let ee=ht.data.subarray(Wt*_t/ht.data.BYTES_PER_ELEMENT,(Wt+1)*_t/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Wt,ht.width,ht.height,1,yt,k,ee)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,yt,k,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ft,ht.width,ht.height,ht.depth,0,yt,k,ht.data);else if(b.isData3DTexture)bt?(Et&&e.texStorage3D(i.TEXTURE_3D,ne,ft,ht.width,ht.height,ht.depth),zt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,yt,k,ht.data)):e.texImage3D(i.TEXTURE_3D,0,ft,ht.width,ht.height,ht.depth,0,yt,k,ht.data);else if(b.isFramebufferTexture){if(Et)if(bt)e.texStorage2D(i.TEXTURE_2D,ne,ft,ht.width,ht.height);else{let _t=ht.width,Wt=ht.height;for(let ee=0;ee<ne;ee++)e.texImage2D(i.TEXTURE_2D,ee,ft,_t,Wt,0,yt,k,null),_t>>=1,Wt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let _t=i.canvas;if(_t.hasAttribute("layoutsubtree")||_t.setAttribute("layoutsubtree","true"),ht.parentNode!==_t){_t.appendChild(ht),f.add(b),_t.onpaint=Wt=>{let ee=Wt.changedElements;for(let It of f)ee.includes(It.image)&&(It.needsUpdate=!0)},_t.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ht);else{let ee=i.RGBA,It=i.RGBA,ge=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ee,It,ge,ht)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(wt.length>0){if(bt&&Et){let _t=st(wt[0]);e.texStorage2D(i.TEXTURE_2D,ne,ft,_t.width,_t.height)}for(let _t=0,Wt=wt.length;_t<Wt;_t++)lt=wt[_t],bt?zt&&e.texSubImage2D(i.TEXTURE_2D,_t,0,0,yt,k,lt):e.texImage2D(i.TEXTURE_2D,_t,ft,yt,k,lt);b.generateMipmaps=!1}else if(bt){if(Et){let _t=st(ht);e.texStorage2D(i.TEXTURE_2D,ne,ft,_t.width,_t.height)}zt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,k,ht)}else e.texImage2D(i.TEXTURE_2D,0,ft,yt,k,ht);v(b)&&b.mipmapsAutoUpdate===!0&&_(q),mt.__version=at.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Zt(R,b,U){if(b.image.length!==6)return;let q=St(R,b),K=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+U);let at=n.get(K);if(K.version!==at.__version||q===!0){e.activeTexture(i.TEXTURE0+U);let mt=ce.getPrimaries(ce.workingColorSpace),it=b.colorSpace===Jn?null:ce.getPrimaries(b.colorSpace),ht=b.colorSpace===Jn||mt===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let yt=b.isCompressedTexture||b.image[0].isCompressedTexture,k=b.image[0]&&b.image[0].isDataTexture,ft=[];for(let It=0;It<6;It++)!yt&&!k?ft[It]=y(b.image[It],!0,s.maxCubemapSize):ft[It]=k?b.image[It].image:b.image[It],ft[It]=Rt(b,ft[It]);let lt=ft[0],wt=r.convert(b.format,b.colorSpace),bt=r.convert(b.type),Et=E(b.internalFormat,wt,bt,b.normalized,b.colorSpace),zt=b.isVideoTexture!==!0,ne=at.__version===void 0||q===!0,_t=K.dataReady,Wt=S(b,lt);Ct(i.TEXTURE_CUBE_MAP,b);let ee;if(b.isDepthTexture){if(Et=x(b.format===Xn,b.type),ne)if(zt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,Et,lt.width,lt.height);else for(let It=0;It<6;It++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,Et,lt.width,lt.height,0,wt,bt,null)}else if(yt){zt&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Wt,Et,lt.width,lt.height);for(let It=0;It<6;It++){ee=ft[It].mipmaps;for(let ge=0;ge<ee.length;ge++){let Fe=ee[ge];b.format!==En?wt!==null?zt?_t&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,ge,0,0,Fe.width,Fe.height,wt,Fe.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,ge,Et,Fe.width,Fe.height,0,Fe.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,ge,0,0,Fe.width,Fe.height,wt,bt,Fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,ge,Et,Fe.width,Fe.height,0,wt,bt,Fe.data)}}}else{if(ee=b.mipmaps,zt&&ne){ee.length>0&&Wt++;let It=st(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Wt,Et,It.width,It.height)}for(let It=0;It<6;It++)if(k){zt?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,0,0,ft[It].width,ft[It].height,wt,bt,ft[It].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,Et,ft[It].width,ft[It].height,0,wt,bt,ft[It].data);for(let ge=0;ge<ee.length;ge++){let Qn=ee[ge].image[It].image;zt?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,ge+1,0,0,Qn.width,Qn.height,wt,bt,Qn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,ge+1,Et,Qn.width,Qn.height,0,wt,bt,Qn.data)}}else{zt?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,0,0,wt,bt,ft[It]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,Et,wt,bt,ft[It]);for(let ge=0;ge<ee.length;ge++){let Fe=ee[ge];zt?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,ge+1,0,0,wt,bt,Fe.image[It]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,ge+1,Et,wt,bt,Fe.image[It])}}}v(b)&&b.mipmapsAutoUpdate===!0&&_(i.TEXTURE_CUBE_MAP),at.__version=K.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Ht(R,b,U,q,K,at){let mt=r.convert(U.format,U.colorSpace),it=r.convert(U.type),ht=E(U.internalFormat,mt,it,U.normalized,U.colorSpace),yt=n.get(b),k=n.get(U);if(k.__renderTarget=b,!yt.__hasExternalTextures){let ft=Math.max(1,b.width>>at),lt=Math.max(1,b.height>>at);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,at,ht,ft,lt,b.depth,0,mt,it,null):e.texImage2D(K,at,ht,ft,lt,0,mt,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),ct(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,K,k.__webglTexture,0,Jt(b)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,K,k.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(R,b,U){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){let q=b.depthTexture,K=q&&q.isDepthTexture?q.type:null,at=x(b.stencilBuffer,K),mt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ct(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt(b),at,b.width,b.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt(b),at,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,at,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,R)}else{let q=b.textures;for(let K=0;K<q.length;K++){let at=q[K],mt=r.convert(at.format,at.colorSpace),it=r.convert(at.type),ht=E(at.internalFormat,mt,it,at.normalized,at.colorSpace);ct(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt(b),ht,b.width,b.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt(b),ht,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ht,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function qt(R,b,U){let q=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(b.depthTexture);K.__renderTarget=b;let at=q?b.depthTexture.image[0]:b.depthTexture.image;(!K.__webglTexture||at.width!==b.width||at.height!==b.height)&&(at.width=b.width,at.height=b.height,b.depthTexture.needsUpdate=!0),q?ot(b.depthTexture,0):C(b.depthTexture,0);let mt=K.__webglTexture,it=Jt(b),ht=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,yt=b.depthTexture.format===Xn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Wn)ct(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,yt,ht,mt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,yt,ht,mt,0);else if(b.depthTexture.format===Xn)ct(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,yt,ht,mt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,yt,ht,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $t(R){let b=n.get(R),U=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let q=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),q){let K=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),b.__depthDisposeCallback=K}b.__boundDepthTexture=q}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(U)for(let q=0;q<6;q++)qt(b.__webglFramebuffer[q],R,q);else R.texture.mipmaps.length>0?qt(b.__webglFramebuffer[0],R,0):qt(b.__webglFramebuffer,R,0);else if(U){b.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[q]),b.__webglDepthbuffer[q]===void 0)b.__webglDepthbuffer[q]=i.createRenderbuffer(),Dt(b.__webglDepthbuffer[q],R,!1);else{let K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=b.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,at)}}else if(R.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Dt(b.__webglDepthbuffer,R,!1);else{let K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,at)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(R,b,U){let q=n.get(R);b!==void 0&&Ht(q.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&$t(R)}function Me(R){let b=R.texture,U=n.get(R),q=n.get(b);R.addEventListener("dispose",P),F(R);let K=R.textures,at=R.isWebGLCubeRenderTarget===!0,mt=K.length>1;if(mt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=b.version,a.memory.textures++),at){U.__webglFramebuffer=[];for(let it=0;it<6;it++)if(b.mipmaps.length>0){U.__webglFramebuffer[it]=[];for(let ht=0;ht<b.mipmaps.length;ht++)U.__webglFramebuffer[it][ht]=i.createFramebuffer()}else U.__webglFramebuffer[it]=i.createFramebuffer()}else{if(b.mipmaps.length>0){U.__webglFramebuffer=[];for(let it=0;it<b.mipmaps.length;it++)U.__webglFramebuffer[it]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(mt)for(let it=0,ht=K.length;it<ht;it++){let yt=n.get(K[it]);yt.__webglTexture===void 0&&(yt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&ct(R)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let it=0;it<K.length;it++){let ht=K[it];U.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[it]);let yt=r.convert(ht.format,ht.colorSpace),k=r.convert(ht.type),ft=E(ht.internalFormat,yt,k,ht.normalized,ht.colorSpace,R.isXRRenderTarget===!0),lt=Jt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,ft,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,U.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Dt(U.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ct(i.TEXTURE_CUBE_MAP,b);for(let it=0;it<6;it++)if(b.mipmaps.length>0)for(let ht=0;ht<b.mipmaps.length;ht++)Ht(U.__webglFramebuffer[it][ht],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,ht);else Ht(U.__webglFramebuffer[it],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);v(b)?_(i.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}else if(mt){for(let it=0,ht=K.length;it<ht;it++){let yt=K[it],k=n.get(yt),ft=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ft=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,k.__webglTexture),Ct(ft,yt),Ht(U.__webglFramebuffer,R,yt,i.COLOR_ATTACHMENT0+it,ft,0),v(yt)&&_(ft)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(it=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,q.__webglTexture),Ct(it,b),b.mipmaps.length>0)for(let ht=0;ht<b.mipmaps.length;ht++)Ht(U.__webglFramebuffer[ht],R,b,i.COLOR_ATTACHMENT0,it,ht);else Ht(U.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,it,0);v(b)?_(it):b.mipmaps.length>0&&i.texParameteri(it,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}R.depthBuffer&&$t(R)}function Y(R){let b=R.textures;for(let U=0,q=b.length;U<q;U++){let K=b[U];if(v(K)&&K.mipmapsAutoUpdate===!0){let at=w(R),mt=n.get(K).__webglTexture;e.bindTexture(at,mt),_(at),e.unbindTexture()}}}let J=[];function vt(R){if(R.samples>0){if(ct(R)===!1){let b=R.textures,U=R.width,q=R.height,K=i.COLOR_BUFFER_BIT,at=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(R),it=b.length>1;if(it)for(let yt=0;yt<b.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let yt=0;yt<b.length;yt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[yt]);let k=n.get(b[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,k,0)}i.blitFramebuffer(0,0,U,q,0,0,U,q,K,i.NEAREST),c===!0&&(J.length=0,J.push(i.COLOR_ATTACHMENT0+yt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&J.push(at),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let yt=0;yt<b.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,mt.__webglColorRenderbuffer[yt]);let k=n.get(b[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,k,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){let b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Jt(R){return Math.min(s.maxSamples,R.samples)}function ct(R){let b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function te(R){let b=a.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function Rt(R,b){let U=R.colorSpace,q=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||U!==As&&U!==Jn&&(ce.getTransfer(U)===me?(q!==En||K!==tn)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",U)),b}function st(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=tt,this.resetTextureUnits=j,this.getTextureUnits=O,this.setTextureUnits=V,this.setTexture2D=C,this.setTexture2DArray=nt,this.setTexture3D=dt,this.setTextureCube=ot,this.rebindTextures=Te,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=Ht,this.useMultisampledRTT=ct,this.dispose=Z}function Ux(i,t){function e(n,s=Jn){let r,a=ce.getTransfer(s);if(n===tn)return i.UNSIGNED_BYTE;if(n===ka)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Va)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Gl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vl)return i.BYTE;if(n===zl)return i.SHORT;if(n===as)return i.UNSIGNED_SHORT;if(n===Oa)return i.INT;if(n===bn)return i.UNSIGNED_INT;if(n===mn)return i.FLOAT;if(n===wn)return i.HALF_FLOAT;if(n===Wl)return i.ALPHA;if(n===Zl)return i.RGB;if(n===En)return i.RGBA;if(n===Wn)return i.DEPTH_COMPONENT;if(n===Xn)return i.DEPTH_STENCIL;if(n===za)return i.RED;if(n===Ga)return i.RED_INTEGER;if(n===ui)return i.RG;if(n===Ha)return i.RG_INTEGER;if(n===Wa)return i.RGBA_INTEGER;if(n===$s||n===tr||n===er||n===nr)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$s)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$s)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Za||n===Ya||n===Xa||n===Ja)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qa||n===ja||n===Qa||n===Ka||n===$a||n===ir||n===to)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===qa||n===ja)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qa)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ka)return r.COMPRESSED_R11_EAC;if(n===$a)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ir)return r.COMPRESSED_RG11_EAC;if(n===to)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===eo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===no)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===io)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===so)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ro)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ao)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===co)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ho)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===po)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===go||n===xo||n===_o)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===go)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_o)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yo||n===Mo||n===sr||n===So)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===yo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Mo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===So)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ci?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Nx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Px=`
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

}`,uc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Gs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Un({vertexShader:Nx,fragmentShader:Px,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new re(new bi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},dc=class extends Rn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,m=null,M=typeof XRWebGLBinding<"u",g=new uc,p={},y=e.getContextAttributes(),v=null,_=null,w=[],E=[],x=new Vt,S=null,F=null,T=new je;T.viewport=new be;let I=new je;I.viewport=new be;let P=[T,I],B=new Pa,N=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let C=w[L];return C===void 0&&(C=new Ki,w[L]=C),C.getTargetRaySpace()},this.getControllerGrip=function(L){let C=w[L];return C===void 0&&(C=new Ki,w[L]=C),C.getGripSpace()},this.getHand=function(L){let C=w[L];return C===void 0&&(C=new Ki,w[L]=C),C.getHandSpace()};function G(L){let C=E.indexOf(L.inputSource);if(C===-1)return;let nt=w[C];nt!==void 0&&(nt.update(L.inputSource,L.frame,l||a),nt.dispatchEvent({type:L.type,data:L.inputSource}))}function X(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",z);for(let L=0;L<w.length;L++){let C=E[L];C!==null&&(E[L]=null,w[L].disconnect(C))}N=null,Z=null,g.reset();for(let L in p)delete p[L];if(t.setRenderTarget(v),d=null,u=null,f=null,s=null,_=null,tt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(x.width,x.height,!1),F!==null){let L=F.camera;L.fov=F.fov,L.zoom=F.zoom,L.updateProjectionMatrix(),F=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){r=L,n.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){o=L,n.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(L){l=L},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(L){if(s=L,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",X),s.addEventListener("inputsourceschange",z),y.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(x),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,dt=null,ot=null;y.depth&&(ot=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=y.stencil?Xn:Wn,dt=y.stencil?Ci:bn);let ut={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(ut),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new on(u.textureWidth,u.textureHeight,{format:En,type:tn,depthTexture:new Zn(u.textureWidth,u.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let nt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new on(d.framebufferWidth,d.framebufferHeight,{format:En,type:tn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),tt.setContext(s),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function z(L){for(let C=0;C<L.removed.length;C++){let nt=L.removed[C],dt=E.indexOf(nt);dt>=0&&(E[dt]=null,w[dt].disconnect(nt))}for(let C=0;C<L.added.length;C++){let nt=L.added[C],dt=E.indexOf(nt);if(dt===-1){for(let ut=0;ut<w.length;ut++)if(ut>=E.length){E.push(nt),dt=ut;break}else if(E[ut]===null){E[ut]=nt,dt=ut;break}if(dt===-1)break}let ot=w[dt];ot&&ot.connect(nt)}}function D(L,C){C===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(C.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(s===null)return;let C=L.near,nt=L.far;g.texture!==null&&(g.depthNear>0&&(C=g.depthNear),g.depthFar>0&&(nt=g.depthFar)),B.near=I.near=T.near=C,B.far=I.far=T.far=nt,(N!==B.near||Z!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),N=B.near,Z=B.far),B.layers.mask=L.layers.mask|6,T.layers.mask=B.layers.mask&-5,I.layers.mask=B.layers.mask&-3;let dt=L.parent,ot=B.cameras;D(B,dt);for(let ut=0;ut<ot.length;ut++)D(ot[ut],dt);B.projectionMatrix.copy(T.projectionMatrix),B.projectionMatrixInverse.copy(T.projectionMatrixInverse),F===null&&L.isPerspectiveCamera&&(F={camera:L,fov:L.fov,zoom:L.zoom}),j(L,B,dt)};function j(L,C,nt){nt===null?L.matrix.copy(C.matrixWorld):(L.matrix.copy(nt.matrixWorld),L.matrix.invert(),L.matrix.multiply(C.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(C.projectionMatrix),L.projectionMatrixInverse.copy(C.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=na*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(L){c=L,u!==null&&(u.fixedFoveation=L),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=L)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(L){return p[L]};let O=null;function V(L,C){if(h=C.getViewerPose(l||a),m=C,h!==null){let nt=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let dt=!1;nt.length!==B.cameras.length&&(B.cameras.length=0,dt=!0);for(let pt=0;pt<nt.length;pt++){let Ct=nt[pt],St=null;if(d!==null)St=d.getViewport(Ct);else{let Pt=f.getViewSubImage(u,Ct);St=Pt.viewport,pt===0&&(t.setRenderTargetTextures(_,Pt.colorTexture,Pt.depthStencilTexture),t.setRenderTarget(_))}let Q=P[pt];Q===void 0&&(Q=new je,Q.layers.enable(pt),Q.viewport=new be,P[pt]=Q),Q.matrix.fromArray(Ct.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Ct.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(St.x,St.y,St.width,St.height),pt===0&&(B.matrix.copy(Q.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),dt===!0&&B.cameras.push(Q)}let ot=s.enabledFeatures;if(ot&&ot.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=n.getBinding();let pt=f.getDepthInformation(nt[0]);pt&&pt.isValid&&pt.texture&&g.init(pt,s.renderState)}if(ot&&ot.includes("camera-access")&&M){t.state.unbindTexture(),f=n.getBinding();for(let pt=0;pt<nt.length;pt++){let Ct=nt[pt].camera;if(Ct){let St=p[Ct];St||(St=new Gs,p[Ct]=St);let Q=f.getCameraImage(Ct);St.sourceTexture=Q}}}}for(let nt=0;nt<w.length;nt++){let dt=E[nt],ot=w[nt];dt!==null&&ot!==void 0&&ot.update(dt,C,l||a)}O&&O(L,C),C.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:C}),m=null}let tt=new Iu;tt.setAnimationLoop(V),this.setAnimationLoop=function(L){O=L},this.dispose=function(){}}},Fx=new Yt,Vu=new Qt;Vu.set(-1,0,0,0,1,0,0,0,1);function Dx(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,$l(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,v,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&d(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),M(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,y,v):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ge&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ge&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=t.get(p),v=y.envMap,_=y.envMapRotation;v&&(g.envMap.value=v,g.envMapRotation.value.setFromMatrix4(Fx.makeRotationFromEuler(_)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Vu),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,y,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=v*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,y){g.ior.value=p.ior,p.diffuseRoughness>0&&(g.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ge&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function M(g,p){let y=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Lx(i,t,e,n){let s={},r={};function a(y,v){let _=v.program;n.uniformBlockBinding(y,_,s[y.id])}function o(y,v){let _=s[y.id];_===void 0&&(m(y),_=c(y),s[y.id]=_,y.addEventListener("dispose",g));let w=v.program;n.updateUBOMapping(y,w);let E=t.render.frame;r[y.id]!==E&&(l(y),r[y.id]=E)}function c(y){let v=i.createBuffer(),_=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,_,w),i.bindBuffer(i.UNIFORM_BUFFER,null),v}function l(y){let v=s[y.id],_=y.uniforms,w=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,x=_.length;E<x;E++){let S=_[E];if(Array.isArray(S))for(let F=0,T=S.length;F<T;F++)h(S[F],E,F,w);else h(S,E,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,v,_,w){if(u(y,v,_,w)===!0){let E=y.__offset,x=y.value;if(Array.isArray(x)){let S=0;for(let F=0;F<x.length;F++){let T=x[F],I=M(T,!0);f(T,y.__data,S),S+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,y.__data)}}function f(y,v,_){typeof y=="number"||typeof y=="boolean"?v[_]=y:y.isMatrix3?(v[_]=y.elements[0],v[_+1]=y.elements[1],v[_+2]=y.elements[2],v[_+3]=0,v[_+4]=y.elements[3],v[_+5]=y.elements[4],v[_+6]=y.elements[5],v[_+7]=0,v[_+8]=y.elements[6],v[_+9]=y.elements[7],v[_+10]=y.elements[8],v[_+11]=0):ArrayBuffer.isView(y)?v.set(y.subarray(0,v.length-_),_):y.toArray(v,_)}function u(y,v,_,w){let E=y.value,x=v+"_"+_;if(Array.isArray(E)){w[x]===void 0&&(w[x]=[]);let S=w[x],F=!1;for(let T=0;T<E.length;T++)d(E[T],S,T)===!0&&(F=!0);return F}return d(E,w,x)}function d(y,v,_){if(v[_]===void 0)return typeof y=="number"||typeof y=="boolean"?v[_]=y:ArrayBuffer.isView(y)?v[_]=y.slice():v[_]=y.clone(),!0;{let w=v[_];if(typeof y=="number"||typeof y=="boolean"){if(w!==y)return v[_]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(w.equals(y)===!1)return w.copy(y),!0}}return!1}function m(y){let v=y.uniforms,_=0,w=16;for(let x=0,S=v.length;x<S;x++){let F=Array.isArray(v[x])?v[x]:[v[x]];for(let T=0,I=F.length;T<I;T++){let P=F[T],B=Array.isArray(P.value)?P.value:[P.value],N=Array.isArray(v[x])||Array.isArray(P.value),Z=_;for(let X=0,z=B.length;X<z;X++){let D=B[X],j=M(D,N),O=_%w,V=O%j.boundary,tt=O+V;_+=V,tt!==0&&w-tt<j.storage&&(_+=w-tt),X===0&&(Z=_),_+=j.storage}let G=P.type==="int"?Int32Array:P.type==="uint"?Uint32Array:Float32Array;P.__data=new G((_-Z)/Float32Array.BYTES_PER_ELEMENT),P.__offset=Z}}let E=_%w;return E>0&&(_+=w-E),y.__size=_,y.__cache={},this}function M(y,v){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=16,_.storage=48):y.isMatrix4?(_.boundary=16,_.storage=64):y.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(_.boundary=16,_.storage=y.byteLength):Xt("WebGLRenderer: Unsupported uniform value type.",y),v===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function g(y){let v=y.target;v.removeEventListener("dispose",g),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:o,dispose:p}}var Bx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Pn=null;function Ox(){return Pn===null&&(Pn=new Ls(Bx,16,16,ui,wn),Pn.name="DFG_LUT",Pn.minFilter=Qe,Pn.magFilter=Qe,Pn.wrapS=An,Pn.wrapT=An,Pn.generateMipmaps=!1,Pn.needsUpdate=!0),Pn}var Eo=class{constructor(t={}){let{canvas:e=tu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=tn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let M=d,g=new Set([Wa,Ha,Ga]),p=new Set([tn,bn,as,Ci,ka,Va]),y=new Uint32Array(4),v=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},w=null,E=null,x=[],S=[],F=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,I=!1,P=null,B=null,N=null,Z=null;this._outputColorSpace=Be;let G=0,X=0,z=null,D=-1,j=null,O=new be,V=new be,tt=null,L=new Mt(0),C=0,nt=e.width,dt=e.height,ot=1,ut=null,gt=null,pt=new be(0,0,nt,dt),Ct=new be(0,0,nt,dt),St=!1,Q=new ai,Pt=new aa,Ft=!1,Zt=!1,Ht=new Yt,Dt=new H,qt=new be,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Te=!1;function Me(){return z===null?ot:1}let Y=n;function J(A,W){return e.getContext(A,W)}let vt,Jt,ct,te,Rt,st,R,b,U,q,K,at,mt,it,ht,yt,k,ft,lt,wt,bt,Et,zt;try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Wt,!1),e.addEventListener("webglcontextrestored",ee,!1),e.addEventListener("webglcontextcreationerror",It,!1),Y===null){let W="webgl2";if(Y=J(W,A),Y===null)throw J(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ne()}catch(A){throw e.removeEventListener("webglcontextlost",Wt,!1),e.removeEventListener("webglcontextrestored",ee,!1),e.removeEventListener("webglcontextcreationerror",It,!1),jt("WebGLRenderer: "+A.message),A}function ne(){vt=new qg(Y),vt.init(),bt=new Ux(Y,vt),Jt=new Og(Y,vt,t,bt),ct=new Cx(Y,vt),Jt.reversedDepthBuffer&&u&&ct.buffers.depth.setReversed(!0),B=Y.createFramebuffer(),N=Y.createFramebuffer(),Z=Y.createFramebuffer(),te=new Kg(Y),Rt=new mx,st=new Ix(Y,vt,ct,Rt,Jt,bt,te),R=new Jg(T),b=new tp(Y),Et=new Lg(Y,b),U=new jg(Y,b,te,Et),q=new t0(Y,U,b,Et,te),ft=new $g(Y,Jt,st),ht=new kg(Rt),K=new px(T,R,vt,Jt,Et,ht),at=new Dx(T,Rt),mt=new xx,it=new bx(vt),k=new Dg(T,R,ct,q,m,c),yt=new Rx(T,q,Jt),zt=new Lx(Y,te,Jt,ct),lt=new Bg(Y,vt,te),wt=new Qg(Y,vt,te),te.programs=K.programs,T.capabilities=Jt,T.extensions=vt,T.properties=Rt,T.renderLists=mt,T.shadowMap=yt,T.state=ct,T.info=te}M!==tn&&(F=new n0(M,e.width,e.height,o,s,r));let _t=new dc(T,Y);this.xr=_t,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let A=vt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=vt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(A){A!==void 0&&(ot=A,this.setSize(nt,dt,!1))},this.getSize=function(A){return A.set(nt,dt)},this.setSize=function(A,W,rt=!0){if(_t.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}nt=A,dt=W,e.width=Math.floor(A*ot),e.height=Math.floor(W*ot),rt===!0&&(e.style.width=A+"px",e.style.height=W+"px"),F!==null&&F.setSize(e.width,e.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(nt*ot,dt*ot).floor()},this.setDrawingBufferSize=function(A,W,rt){nt=A,dt=W,ot=rt,e.width=Math.floor(A*rt),e.height=Math.floor(W*rt),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(M===tn){jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){Xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(O)},this.getViewport=function(A){return A.copy(pt)},this.setViewport=function(A,W,rt,$){A.isVector4?pt.set(A.x,A.y,A.z,A.w):pt.set(A,W,rt,$),ct.viewport(O.copy(pt).multiplyScalar(Me()).round())},this.getScissor=function(A){return A.copy(Ct)},this.setScissor=function(A,W,rt,$){A.isVector4?Ct.set(A.x,A.y,A.z,A.w):Ct.set(A,W,rt,$),ct.scissor(V.copy(Ct).multiplyScalar(Me()).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(A){ct.setScissorTest(St=A)},this.setOpaqueSort=function(A){ut=A},this.setTransparentSort=function(A){gt=A},this.getClearColor=function(A){return A.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor(...arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,rt=!0){let $=0;if(A){let et=!1;if(z!==null){let At=z.texture.format;et=g.has(At)}if(et){let At=z.texture.type,Lt=p.has(At),Tt=k.getClearColor(),Nt=k.getClearAlpha(),kt=Tt.r,Kt=Tt.g,oe=Tt.b;Lt?(y[0]=kt,y[1]=Kt,y[2]=oe,y[3]=Nt,Y.clearBufferuiv(Y.COLOR,0,y)):(v[0]=kt,v[1]=Kt,v[2]=oe,v[3]=Nt,Y.clearBufferiv(Y.COLOR,0,v))}else $|=Y.COLOR_BUFFER_BIT}W&&($|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&($|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&Y.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),P=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Wt,!1),e.removeEventListener("webglcontextrestored",ee,!1),e.removeEventListener("webglcontextcreationerror",It,!1),k.dispose(),mt.dispose(),it.dispose(),st.dispose(),Rt.dispose(),R.dispose(),q.dispose(),U.dispose(),Et.dispose(),zt.dispose(),K.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",Uc),_t.removeEventListener("sessionend",Nc),pi.stop()};function Wt(A){A.preventDefault(),jl("WebGLRenderer: Context Lost."),I=!0}function ee(){jl("WebGLRenderer: Context Restored."),I=!1;let A=te.autoReset,W=yt.enabled,rt=yt.autoUpdate,$=yt.needsUpdate,et=yt.type;ne(),te.autoReset=A,yt.enabled=W,yt.autoUpdate=rt,yt.needsUpdate=$,yt.type=et}function It(A){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ge(A){let W=A.target;W.removeEventListener("dispose",ge),Fe(W)}function Fe(A){Qn(A),Rt.remove(A)}function Qn(A){let W=Rt.get(A).programs;W!==void 0&&(W.forEach(function(rt){K.releaseProgram(rt)}),A.isShaderMaterial&&K.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,rt,$,et,At){W===null&&(W=$t);let Lt=et.isMesh&&et.matrixWorld.determinantAffine()<0,Tt=Xd(A,W,rt,$,et);ct.setMaterial($,Lt);let Nt=rt.index,kt=1;if($.wireframe===!0){if(Nt=U.getWireframeAttribute(rt),Nt===void 0)return;kt=2}let Kt=rt.drawRange,oe=rt.attributes.position,Bt=Kt.start*kt,le=(Kt.start+Kt.count)*kt;At!==null&&(Bt=Math.max(Bt,At.start*kt),le=Math.min(le,(At.start+At.count)*kt)),Nt!==null?(Bt=Math.max(Bt,0),le=Math.min(le,Nt.count)):oe!=null&&(Bt=Math.max(Bt,0),le=Math.min(le,oe.count));let Ae=le-Bt;if(Ae<0||Ae===1/0)return;Et.setup(et,$,Tt,rt,Nt);let _e,xe=lt;if(Nt!==null&&(_e=b.get(Nt),xe=wt,xe.setIndex(_e)),et.isMesh)$.wireframe===!0?(ct.setLineWidth($.wireframeLinewidth*Me()),xe.setMode(Y.LINES)):xe.setMode(Y.TRIANGLES);else if(et.isLine){let He=$.linewidth;He===void 0&&(He=1),ct.setLineWidth(He*Me()),et.isLineSegments?xe.setMode(Y.LINES):et.isLineLoop?xe.setMode(Y.LINE_LOOP):xe.setMode(Y.LINE_STRIP)}else et.isPoints?xe.setMode(Y.POINTS):et.isSprite&&xe.setMode(Y.TRIANGLES);if(et.isBatchedMesh)if(vt.get("WEBGL_multi_draw"))xe.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{let He=et._multiDrawStarts,Ot=et._multiDrawCounts,qe=et._multiDrawCount,pe=Nt?b.get(Nt).bytesPerElement:1,mi=Rt.get($).currentProgram.getUniforms();for(let We=0;We<qe;We++)mi.setValue(Y,"_gl_DrawID",We),xe.render(He[We]/pe,Ot[We])}else if(et.isInstancedMesh)xe.renderInstances(Bt,Ae,et.count);else if(rt.isInstancedBufferGeometry){let He=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ot=Math.min(rt.instanceCount,He);xe.renderInstances(Bt,Ae,Ot)}else xe.render(Bt,Ae)};function Ic(A,W,rt,$){P!==null&&A.isNodeMaterial&&P.setObject($,A),Ft===!0&&ht.setState(A,rt,!1),A.transparent===!0&&A.side===ye&&A.forceSinglePass===!1?(A.side=Ge,A.needsUpdate=!0,ps(A,W,$),A.side=hi,A.needsUpdate=!0,ps(A,W,$),A.side=ye):ps(A,W,$)}this.compile=function(A,W,rt=null){rt===null&&(rt=A),P!==null&&P.renderStart(A,W,rt),E=it.get(rt),E.init(W),S.push(E),rt.traverseVisible(function(et){et.isLight&&et.layers.test(W.layers)&&(E.pushLight(et),et.castShadow&&E.pushShadow(et))}),A!==rt&&A.traverseVisible(function(et){et.isLight&&et.layers.test(W.layers)&&(E.pushLight(et),et.castShadow&&E.pushShadow(et))}),E.setupLights(),P!==null&&P.updateLights(E.state.lightsArray),Zt=this.localClippingEnabled,Ft=ht.init(this.clippingPlanes,Zt),Ft===!0&&ht.setGlobalState(this.clippingPlanes,W),P!==null&&yt.render(E.state.shadowsArray,rt,W);let $=new Set;return A.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;let At=et.material;if(At)if(Array.isArray(At))for(let Lt=0;Lt<At.length;Lt++){let Tt=At[Lt];Ic(Tt,rt,W,et),$.add(Tt)}else Ic(At,rt,W,et),$.add(At)}),E=S.pop(),P!==null&&P.renderEnd(),$},this.compileAsync=function(A,W,rt=null){let $=this.compile(A,W,rt);return new Promise(et=>{function At(){if($.forEach(function(Lt){let Nt=Rt.get(Lt).currentProgram;(Nt===void 0||Nt.isReady())&&$.delete(Lt)}),$.size===0){et(A);return}setTimeout(At,10)}vt.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let zo=null;function Zd(A){zo&&zo(A)}function Uc(){pi.stop()}function Nc(){pi.start()}let pi=new Iu;pi.setAnimationLoop(Zd),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(A){zo=A,_t.setAnimationLoop(A),A===null?pi.stop():pi.start()},_t.addEventListener("sessionstart",Uc),_t.addEventListener("sessionend",Nc),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;P!==null&&P.renderStart(A,W);let rt=_t.enabled===!0&&_t.isPresenting===!0,$=F!==null&&(z===null||rt)&&F.begin(T,z);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(W),W=_t.getCamera()),A.isScene===!0&&A.onBeforeRender(T,A,W,z),E=it.get(A,S.length),E.init(W),E.state.textureUnits=st.getTextureUnits(),S.push(E),Ht.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),W.isArrayCamera?Pt.setFromArrayCamera(W):Q.setFromProjectionMatrix(Ht,hn,W.reversedDepth),Zt=this.localClippingEnabled,Ft=ht.init(this.clippingPlanes,Zt),w=mt.get(A,x.length),w.init(),x.push(w),this.info.render.frame++,_t.enabled===!0&&_t.isPresenting===!0){let Lt=T.xr.getDepthSensingMesh();Lt!==null&&Go(Lt,W,-1/0,T.sortObjects)}Go(A,W,0,T.sortObjects),w.finish(),P!==null&&P.updateLights(E.state.lightsArray),T.sortObjects===!0&&w.sort(ut,gt),Te=_t.enabled===!1||_t.isPresenting===!1||_t.hasDepthSensing()===!1,Te&&k.addToRenderList(w,A),this.info.autoReset===!0&&this.info.reset(),Ft===!0&&ht.beginShadows();let et=E.state.shadowsArray;if(yt.render(et,A,W),Ft===!0&&ht.endShadows(),($&&F.hasRenderPass())===!1){let Lt=w.opaque,Tt=w.transmissive;if(E.setupLights(),W.isArrayCamera){let Nt=W.cameras;if(Tt.length>0)for(let kt=0,Kt=Nt.length;kt<Kt;kt++){let oe=Nt[kt];Fc(Lt,Tt,A,oe)}Te&&k.render(A);for(let kt=0,Kt=Nt.length;kt<Kt;kt++){let oe=Nt[kt];Pc(w,A,oe,oe.viewport)}}else Tt.length>0&&Fc(Lt,Tt,A,W),Te&&k.render(A),Pc(w,A,W)}z!==null&&X===0&&(st.updateMultisampleRenderTarget(z),st.updateRenderTargetMipmap(z)),$&&F.end(T),A.isScene===!0&&A.onAfterRender(T,A,W),Et.resetDefaultState(),D=-1,j=null,S.pop(),S.length>0?(E=S[S.length-1],st.setTextureUnits(E.state.textureUnits),Ft===!0&&ht.setGlobalState(T.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?w=x[x.length-1]:w=null,P!==null&&P.renderEnd()};function Go(A,W,rt,$){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)rt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)E.pushLight(A),A.castShadow&&E.pushShadow(A);else if(A.isSprite){let Lt=W.isArrayCamera?Pt:Q;if(!A.frustumCulled||A.intersectsFrustum(Lt)){$&&qt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ht);let Tt=q.update(A),Nt=A.material;Nt.visible&&w.push(A,Tt,Nt,rt,qt.z,null,W)}}else if(A.isMesh||A.isLine||A.isPoints){let Lt=W.isArrayCamera?Pt:Q;if(!A.frustumCulled||A.intersectsFrustum(Lt)){let Tt=q.update(A),Nt=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),qt.copy(A.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),qt.copy(Tt.boundingSphere.center)),qt.applyMatrix4(A.matrixWorld).applyMatrix4(Ht)),Array.isArray(Nt)){let kt=Tt.groups;for(let Kt=0,oe=kt.length;Kt<oe;Kt++){let Bt=kt[Kt],le=Nt[Bt.materialIndex];le&&le.visible&&w.push(A,Tt,le,rt,qt.z,Bt,W)}}else Nt.visible&&w.push(A,Tt,Nt,rt,qt.z,null,W)}}}let At=A.children;for(let Lt=0,Tt=At.length;Lt<Tt;Lt++)Go(At[Lt],W,rt,$)}function Pc(A,W,rt,$){let{opaque:et,transmissive:At,transparent:Lt}=A;E.setupLightsView(rt),Ft===!0&&ht.setGlobalState(T.clippingPlanes,rt),$&&ct.viewport(O.copy($)),et.length>0&&xr(et,W,rt),At.length>0&&xr(At,W,rt),Lt.length>0&&xr(Lt,W,rt),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Fc(A,W,rt,$){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[$.id]===void 0){let Bt=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[$.id]=new on(1,1,{generateMipmaps:!0,type:Bt?wn:tn,minFilter:Yn,samples:Math.max(4,Jt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ce.workingColorSpace})}let At=E.state.transmissionRenderTarget[$.id],Lt=$.viewport||O;At.setSize(Lt.z*T.transmissionResolutionScale,Lt.w*T.transmissionResolutionScale);let Tt=T.getRenderTarget(),Nt=T.getActiveCubeFace(),kt=T.getActiveMipmapLevel();T.setRenderTarget(At),T.getClearColor(L),C=T.getClearAlpha(),C<1&&T.setClearColor(16777215,.5),T.clear(),Te&&k.render(rt);let Kt=T.toneMapping;T.toneMapping=Nn;let oe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),E.setupLightsView($),Ft===!0&&ht.setGlobalState(T.clippingPlanes,$),xr(A,rt,$),st.updateMultisampleRenderTarget(At),st.updateRenderTargetMipmap(At),vt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let le=0,Ae=W.length;le<Ae;le++){let _e=W[le],{object:xe,geometry:He,material:Ot,group:qe}=_e;if(Ot.side===ye&&xe.layers.test($.layers)){let pe=Ot.side;Ot.side=Ge,Ot.needsUpdate=!0,Dc(xe,rt,$,He,Ot,qe),Ot.side=pe,Ot.needsUpdate=!0,Bt=!0}}Bt===!0&&(st.updateMultisampleRenderTarget(At),st.updateRenderTargetMipmap(At))}T.setRenderTarget(Tt,Nt,kt),T.setClearColor(L,C),oe!==void 0&&($.viewport=oe),T.toneMapping=Kt}function xr(A,W,rt){let $=W.isScene===!0?W.overrideMaterial:null;for(let et=0,At=A.length;et<At;et++){let Lt=A[et],{object:Tt,geometry:Nt,group:kt}=Lt,Kt=Lt.material;Kt.allowOverride===!0&&$!==null&&(Kt=$),Tt.layers.test(rt.layers)&&Dc(Tt,W,rt,Nt,Kt,kt)}}function Dc(A,W,rt,$,et,At){P!==null&&et.isNodeMaterial&&P.setObject(A,et),A.onBeforeRender(T,W,rt,$,et,At),A.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),et.onBeforeRender(T,W,rt,$,A,At),et.transparent===!0&&et.side===ye&&et.forceSinglePass===!1?(et.side=Ge,et.needsUpdate=!0,T.renderBufferDirect(rt,W,$,et,A,At),et.side=hi,et.needsUpdate=!0,T.renderBufferDirect(rt,W,$,et,A,At),et.side=ye):T.renderBufferDirect(rt,W,$,et,A,At),A.onAfterRender(T,W,rt,$,et,At)}function Lc(A){let W=0;for(let rt of A)rt.texture!==null&&W++;return W}function ps(A,W,rt){W.isScene!==!0&&(W=$t);let $=Rt.get(A),et=E.state.lights,At=E.state.shadowsArray,Lt=et.state.version,Tt=K.getParameters(A,et.state,At,W,rt,E.state.lightProbeGridArray),Nt=K.getProgramCacheKey(Tt),kt=$.programs;$.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?W.environment:null,$.fog=W.fog;let Kt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;$.envMap=R.get(A.envMap||$.environment,Kt),$.envMapRotation=$.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,kt===void 0&&(A.addEventListener("dispose",ge),kt=new Map,$.programs=kt,$.programVariants=new Map);let oe=kt.get(Nt);if(oe!==void 0){if($.currentProgram===oe&&$.lightsStateVersion===Lt)return Oc(A,Tt),oe}else Tt.uniforms=K.getUniforms(A),P!==null&&A.isNodeMaterial&&P.build(A,rt,Tt),A.onBeforeCompile(Tt,T),oe=K.acquireProgram(Tt,Nt),kt.set(Nt,oe),$.uniforms=Tt.uniforms;let Bt=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Bt.clippingPlanes=ht.uniform),Oc(A,Tt),$.needsLights=qd(A),$.lightsStateVersion=Lt,$.needsLights&&(Bt.ambientLightColor.value=et.state.ambient,Bt.lightProbe.value=et.state.probe,Bt.sunLights.value=et.state.sun,Bt.sunLightShadows.value=et.state.sunShadow,Bt.directionalLights.value=et.state.directional,Bt.directionalLightShadows.value=et.state.directionalShadow,Bt.spotLights.value=et.state.spot,Bt.spotLightShadows.value=et.state.spotShadow,Bt.rectAreaLights.value=et.state.rectArea,Bt.ltc_1.value=et.state.rectAreaLTC1,Bt.ltc_2.value=et.state.rectAreaLTC2,Bt.pointLights.value=et.state.point,Bt.pointLightShadows.value=et.state.pointShadow,Bt.hemisphereLights.value=et.state.hemi,Bt.sunShadowMatrix.value=et.state.sunShadowMatrix,Bt.sunShadowCascade.value=et.state.sunShadowCascade,Bt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Bt.spotLightMatrix.value=et.state.spotLightMatrix,Bt.spotLightMap.value=et.state.spotLightMap,Bt.pointShadowMatrix.value=et.state.pointShadowMatrix),$.numLightProbeGrids=Lc(E.state.lightProbeGridArray),$.currentProgram=oe,$.uniformsList=null,oe}function Yd(A,W,rt,$,et){let At=Rt.get(A),Lt=At.currentProgram.id+","+$+","+et,Tt=At.programVariants.get(Lt);return Tt===void 0?(Tt=ps(A,W,rt),At.programVariants.set(Lt,Tt)):(At.currentProgram=Tt,At.uniformsList=null,At.outputColorSpace=$,At.toneMapping=et),Tt}function Bc(A){if(A.uniformsList===null){let W=A.currentProgram.getUniforms();A.uniformsList=os.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Oc(A,W){let rt=Rt.get(A);rt.outputColorSpace=W.outputColorSpace,rt.batching=W.batching,rt.batchingColor=W.batchingColor,rt.instancing=W.instancing,rt.instancingColor=W.instancingColor,rt.instancingMorph=W.instancingMorph,rt.skinning=W.skinning,rt.morphTargets=W.morphTargets,rt.morphNormals=W.morphNormals,rt.morphColors=W.morphColors,rt.morphTargetsCount=W.morphTargetsCount,rt.numClippingPlanes=W.numClippingPlanes,rt.numIntersection=W.numClipIntersection,rt.vertexAlphas=W.vertexAlphas,rt.vertexTangents=W.vertexTangents,rt.toneMapping=W.toneMapping}function Xd(A,W,rt,$,et){W.isScene!==!0&&(W=$t),st.resetTextureUnits();let At=W.fog,Lt=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?W.environment:null,Tt=z===null?T.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:ce.workingColorSpace,Nt=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,kt=R.get($.envMap||Lt,Nt),Kt=$.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,oe=!!rt.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Bt=!!rt.morphAttributes.position,le=!!rt.morphAttributes.normal,Ae=!!rt.morphAttributes.color,_e=Nn;$.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(_e=T.toneMapping);let xe=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,He=xe!==void 0?xe.length:0,Ot=Rt.get($),qe=E.state.lights;if(Ft===!0&&(Zt===!0||A!==j)){let we=A===j&&$.id===D;ht.setState($,A,we)}let pe=!1,mi=!1;$.version===Ot.__version?Ot.needsLights&&Ot.lightsStateVersion!==qe.state.version||et.isBatchedMesh&&Ot.batching===!1||!et.isBatchedMesh&&Ot.batching===!0||et.isBatchedMesh&&Ot.batchingColor===!0&&et._colorsTexture===null||et.isBatchedMesh&&Ot.batchingColor===!1&&et._colorsTexture!==null||et.isInstancedMesh&&Ot.instancing===!1||!et.isInstancedMesh&&Ot.instancing===!0||et.isSkinnedMesh&&Ot.skinning===!1||!et.isSkinnedMesh&&Ot.skinning===!0||et.isInstancedMesh&&Ot.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&Ot.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&Ot.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&Ot.instancingMorph===!1&&et.morphTexture!==null||Ot.envMap!==kt||$.fog===!0&&Ot.fog!==At||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==ht.numPlanes||Ot.numIntersection!==ht.numIntersection)||Ot.vertexAlphas!==Kt||Ot.vertexTangents!==oe||Ot.morphTargets!==Bt||Ot.morphNormals!==le||Ot.morphColors!==Ae||Ot.morphTargetsCount!==He||Ot.numLightProbeGrids!==Lc(E.state.lightProbeGridArray)?pe=!0:(Ot.outputColorSpace!==Tt||Ot.toneMapping!==_e)&&(mi=!0):(pe=!0,Ot.__version=$.version);let We=Ot.currentProgram;(pe===!0||mi===!0)&&(We=mi===!0?Yd($,W,et,Tt,_e):ps($,W,et),P&&$.isNodeMaterial&&P.onUpdateProgram($,We,Ot));let _r=!1,Kn=!1,gi=!1,ue=We.getUniforms(),Ve=Ot.uniforms;if(ct.useProgram(We.program)&&(_r=!0,Kn=!0,gi=!0),$.id!==D&&(D=$.id,Kn=!0),_r||j!==A){ct.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ue.setValue(Y,"projectionMatrix",A.projectionMatrix),ue.setValue(Y,"viewMatrix",A.matrixWorldInverse);let De=ue.map.cameraPosition;De!==void 0&&De.setValue(Y,Dt.setFromMatrixPosition(A.matrixWorld)),Jt.logarithmicDepthBuffer&&ue.setValue(Y,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ue.setValue(Y,"isOrthographic",A.isOrthographicCamera===!0),j!==A&&(j=A,Kn=!0,gi=!0)}if(Ot.needsLights&&(qe.state.sunShadowMap.length>0&&ue.setValue(Y,"sunShadowMap",qe.state.sunShadowMap,st),qe.state.directionalShadowMap.length>0&&ue.setValue(Y,"directionalShadowMap",qe.state.directionalShadowMap,st),qe.state.spotShadowMap.length>0&&ue.setValue(Y,"spotShadowMap",qe.state.spotShadowMap,st),qe.state.pointShadowMap.length>0&&ue.setValue(Y,"pointShadowMap",qe.state.pointShadowMap,st)),et.isSkinnedMesh){ue.setOptional(Y,et,"bindMatrix"),ue.setOptional(Y,et,"bindMatrixInverse");let we=et.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),ue.setValue(Y,"boneTexture",we.boneTexture,st))}et.isBatchedMesh&&(ue.setOptional(Y,et,"batchingTexture"),ue.setValue(Y,"batchingTexture",et._matricesTexture,st),ue.setOptional(Y,et,"batchingIdTexture"),ue.setValue(Y,"batchingIdTexture",et._indirectTexture,st),ue.setOptional(Y,et,"batchingColorTexture"),et._colorsTexture!==null&&ue.setValue(Y,"batchingColorTexture",et._colorsTexture,st));let gn=rt.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&ft.update(et,rt,We),(Kn||Ot.receiveShadow!==et.receiveShadow)&&(Ot.receiveShadow=et.receiveShadow,ue.setValue(Y,"receiveShadow",et.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&W.environment!==null&&(Ve.envMapIntensity.value=W.environmentIntensity),Ve.dfgLUT!==void 0&&(Ve.dfgLUT.value=Ox()),Kn){if(ue.setValue(Y,"toneMappingExposure",T.toneMappingExposure),Ot.needsLights&&Jd(Ve,gi),At&&$.fog===!0&&at.refreshFogUniforms(Ve,At),at.refreshMaterialUniforms(Ve,$,ot,dt,E.state.transmissionRenderTarget[A.id]),Ot.needsLights&&Ot.numLightProbeGrids>0){let we=_,De=0;for(let Ln of E.state.lightProbeGridArray)Ln.texture!==null&&(we.textures[De]=Ln.texture,we.min[De]=Ln.boundingBox.min,we.max[De]=Ln.boundingBox.max,we.resolution[De]=Ln.resolution,De++);for(let Ln in we)we[Ln].length=De;Ve.probesSH.value=we.textures,Ve.probesMin.value=we.min,Ve.probesMax.value=we.max,Ve.probesResolution.value=we.resolution}os.upload(Y,Bc(Ot),Ve,st)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(os.upload(Y,Bc(Ot),Ve,st),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ue.setValue(Y,"center",et.center),ue.setValue(Y,"modelViewMatrix",et.modelViewMatrix),ue.setValue(Y,"normalMatrix",et.normalMatrix),ue.setValue(Y,"modelMatrix",et.matrixWorld),$.uniformsGroups!==void 0){let we=$.uniformsGroups;for(let De=0,Ln=we.length;De<Ln;De++){let Vc=we[De];zt.update(Vc,We),zt.bind(Vc,We)}}return We}function Jd(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.sunLights.needsUpdate=W,A.sunLightShadows.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function qd(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(A,W,rt){let $=Rt.get(A);$.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Rt.get(A.texture).__webglTexture=W,Rt.get(A.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:rt,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){let rt=Rt.get(A);rt.__webglFramebuffer=W,rt.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,rt=0){z=A,G=W,X=rt;let $=null,et=!1,At=!1;if(A){let Tt=Rt.get(A);if(Tt.__useDefaultFramebuffer!==void 0){ct.bindFramebuffer(Y.FRAMEBUFFER,Tt.__webglFramebuffer),O.copy(A.viewport),V.copy(A.scissor),tt=A.scissorTest,ct.viewport(O),ct.scissor(V),ct.setScissorTest(tt),D=-1;return}else if(Tt.__webglFramebuffer===void 0)st.setupRenderTarget(A);else if(Tt.__hasExternalTextures)st.rebindTextures(A,Rt.get(A.texture).__webglTexture,Rt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Kt=A.depthTexture;if(Tt.__boundDepthTexture!==Kt){if(Kt!==null&&Rt.has(Kt)&&(A.width!==Kt.image.width||A.height!==Kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(A)}}let Nt=A.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(At=!0);let kt=Rt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(kt[W])?$=kt[W][rt]:$=kt[W],et=!0):A.samples>0&&st.useMultisampledRTT(A)===!1?$=Rt.get(A).__webglMultisampledFramebuffer:Array.isArray(kt)?$=kt[rt]:$=kt,O.copy(A.viewport),V.copy(A.scissor),tt=A.scissorTest}else O.copy(pt).multiplyScalar(ot).floor(),V.copy(Ct).multiplyScalar(ot).floor(),tt=St;if(rt!==0&&($=B),ct.bindFramebuffer(Y.FRAMEBUFFER,$)&&ct.drawBuffers(A,$),ct.viewport(O),ct.scissor(V),ct.setScissorTest(tt),et){let Tt=Rt.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+W,Tt.__webglTexture,rt)}else if(At){let Tt=W;for(let Nt=0;Nt<A.textures.length;Nt++){let kt=Rt.get(A.textures[Nt]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Nt,kt.__webglTexture,rt,Tt)}}else if(A!==null&&rt!==0){let Tt=Rt.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Tt.__webglTexture,rt)}D=-1};function kc(A){let W=Rt.get(A);return(W.__readFormat!==A.format||W.__readType!==A.type)&&(W.__readFormat=A.format,W.__readType=A.type,W.__formatReadable=Jt.textureFormatReadable(A.format),W.__typeReadable=Jt.textureTypeReadable(A.type)),W}this.readRenderTargetPixels=function(A,W,rt,$,et,At,Lt,Tt=0){if(!(A&&A.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Rt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Lt!==void 0&&(Nt=Nt[Lt],Array.isArray(Nt)&&(Nt=Nt[0])),Nt){ct.bindFramebuffer(Y.FRAMEBUFFER,Nt);try{let kt=A.textures[Tt],Kt=kt.format,oe=kt.type;A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Tt);let Bt=kc(kt);if(Bt.__formatReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Bt.__typeReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-$&&rt>=0&&rt<=A.height-et&&Y.readPixels(W,rt,$,et,bt.convert(Kt),bt.convert(oe),At)}finally{let kt=z!==null?Rt.get(z).__webglFramebuffer:null;ct.bindFramebuffer(Y.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(A,W,rt,$,et,At,Lt,Tt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Rt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Lt!==void 0&&(Nt=Nt[Lt],Array.isArray(Nt)&&(Nt=Nt[0])),Nt)if(W>=0&&W<=A.width-$&&rt>=0&&rt<=A.height-et){ct.bindFramebuffer(Y.FRAMEBUFFER,Nt);let kt=A.textures[Tt],Kt=kt.format,oe=kt.type;A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Tt);let Bt=kc(kt);if(Bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let le=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,le),Y.bufferData(Y.PIXEL_PACK_BUFFER,At.byteLength,Y.STREAM_READ),Y.readPixels(W,rt,$,et,bt.convert(Kt),bt.convert(oe),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);let Ae=z!==null?Rt.get(z).__webglFramebuffer:null;ct.bindFramebuffer(Y.FRAMEBUFFER,Ae);let _e=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await nu(Y,_e,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,le),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,At),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(le),Y.deleteSync(_e),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,rt=0){let $=Math.pow(2,-rt),et=Math.floor(A.image.width*$),At=Math.floor(A.image.height*$),Lt=W!==null?W.x:0,Tt=W!==null?W.y:0;st.setTexture2D(A,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,rt,0,0,Lt,Tt,et,At),ct.unbindTexture()},this.copyTextureToTexture=function(A,W,rt=null,$=null,et=0,At=0){let Lt,Tt,Nt,kt,Kt,oe,Bt,le,Ae,_e=A.isCompressedTexture?A.mipmaps[At]:A.image;if(rt!==null)Lt=rt.max.x-rt.min.x,Tt=rt.max.y-rt.min.y,Nt=rt.isBox3?rt.max.z-rt.min.z:1,kt=rt.min.x,Kt=rt.min.y,oe=rt.isBox3?rt.min.z:0;else{let ue=Math.pow(2,-et);Lt=Math.floor(_e.width*ue),Tt=Math.floor(_e.height*ue),A.isDataArrayTexture?Nt=_e.depth:A.isData3DTexture?Nt=Math.floor(_e.depth*ue):Nt=1,kt=0,Kt=0,oe=0}$!==null?(Bt=$.x,le=$.y,Ae=$.z):(Bt=0,le=0,Ae=0);let xe=bt.convert(W.format),He=bt.convert(W.type),Ot;W.isData3DTexture?(st.setTexture3D(W,0),Ot=Y.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(st.setTexture2DArray(W,0),Ot=Y.TEXTURE_2D_ARRAY):(st.setTexture2D(W,0),Ot=Y.TEXTURE_2D),ct.activeTexture(Y.TEXTURE0),ct.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,W.flipY),ct.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),ct.pixelStorei(Y.UNPACK_ALIGNMENT,W.unpackAlignment);let qe=ct.getParameter(Y.UNPACK_ROW_LENGTH),pe=ct.getParameter(Y.UNPACK_IMAGE_HEIGHT),mi=ct.getParameter(Y.UNPACK_SKIP_PIXELS),We=ct.getParameter(Y.UNPACK_SKIP_ROWS),_r=ct.getParameter(Y.UNPACK_SKIP_IMAGES);ct.pixelStorei(Y.UNPACK_ROW_LENGTH,_e.width),ct.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,_e.height),ct.pixelStorei(Y.UNPACK_SKIP_PIXELS,kt),ct.pixelStorei(Y.UNPACK_SKIP_ROWS,Kt),ct.pixelStorei(Y.UNPACK_SKIP_IMAGES,oe);let Kn=A.isDataArrayTexture||A.isData3DTexture,gi=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){let ue=Rt.get(A),Ve=Rt.get(W),gn=Rt.get(ue.__renderTarget),we=Rt.get(Ve.__renderTarget);ct.bindFramebuffer(Y.READ_FRAMEBUFFER,gn.__webglFramebuffer),ct.bindFramebuffer(Y.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let De=0;De<Nt;De++)Kn&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Rt.get(A).__webglTexture,et,oe+De),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Rt.get(W).__webglTexture,At,Ae+De)),Y.blitFramebuffer(kt,Kt,kt+Lt,Kt+Tt,Bt,le,Bt+Lt,le+Tt,Y.DEPTH_BUFFER_BIT,Y.NEAREST);ct.bindFramebuffer(Y.READ_FRAMEBUFFER,null),ct.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(et!==0||A.isRenderTargetTexture||Rt.has(A)){let ue=Rt.get(A),Ve=Rt.get(W);ct.bindFramebuffer(Y.READ_FRAMEBUFFER,N),ct.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Z);for(let gn=0;gn<Nt;gn++)Kn?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ue.__webglTexture,et,oe+gn):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,ue.__webglTexture,et),gi?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ve.__webglTexture,At,Ae+gn):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ve.__webglTexture,At),et!==0?Y.blitFramebuffer(kt,Kt,kt+Lt,Kt+Tt,Bt,le,Bt+Lt,le+Tt,Y.COLOR_BUFFER_BIT,Y.NEAREST):gi?Y.copyTexSubImage3D(Ot,At,Bt,le,Ae+gn,kt,Kt,Lt,Tt):Y.copyTexSubImage2D(Ot,At,Bt,le,kt,Kt,Lt,Tt);ct.bindFramebuffer(Y.READ_FRAMEBUFFER,null),ct.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else gi?A.isDataTexture||A.isData3DTexture?Y.texSubImage3D(Ot,At,Bt,le,Ae,Lt,Tt,Nt,xe,He,_e.data):W.isCompressedArrayTexture?Y.compressedTexSubImage3D(Ot,At,Bt,le,Ae,Lt,Tt,Nt,xe,_e.data):Y.texSubImage3D(Ot,At,Bt,le,Ae,Lt,Tt,Nt,xe,He,_e):A.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,At,Bt,le,Lt,Tt,xe,He,_e.data):A.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,At,Bt,le,_e.width,_e.height,xe,_e.data):Y.texSubImage2D(Y.TEXTURE_2D,At,Bt,le,Lt,Tt,xe,He,_e);ct.pixelStorei(Y.UNPACK_ROW_LENGTH,qe),ct.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,pe),ct.pixelStorei(Y.UNPACK_SKIP_PIXELS,mi),ct.pixelStorei(Y.UNPACK_SKIP_ROWS,We),ct.pixelStorei(Y.UNPACK_SKIP_IMAGES,_r),At===0&&W.generateMipmaps===!0&&W.mipmapsAutoUpdate===!0&&Y.generateMipmap(Ot),ct.unbindTexture()},this.initRenderTarget=function(A){Rt.get(A).__webglFramebuffer===void 0&&st.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?st.setTextureCube(A,0):A.isData3DTexture?st.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?st.setTexture2DArray(A,0):st.setTexture2D(A,0),ct.unbindTexture()},this.resetState=function(){G=0,X=0,z=null,ct.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}};function Ro(i,t,{fog:e=[40,120],light:n="fixed",ambient:s=.6}={}){let r=new Eo({antialias:!0});r.setPixelRatio(Math.min(globalThis.devicePixelRatio||1,2)),r.setClearColor(new Mt(t.bg)),i.appendChild(r.domElement);let a=new Ps;e&&(a.fog=new Ns(new Mt(t.bg),e[0],e[1]));let o=new je(50,1,.1,400);a.add(new js(16777215,s));let c=new qs(16777215,2.2);n==="camera"?(c.position.set(-.5,.9,.45),o.add(c),o.add(c.target),c.target.position.set(0,0,-1),a.add(o)):(c.position.set(20,30,25),a.add(c));function l(){let E=i.clientWidth||300,x=i.clientHeight||300;r.setSize(E,x),o.aspect=E/x,o.updateProjectionMatrix()}l();let h=new H,f=new H,u=new un,d=new H,m=new Yt,M=new H,g=1,p="",y=()=>{let E=0;return a.traverse(x=>{(x.isMesh||x.isLine||x.isPoints)&&!x.userData.backdrop&&(E+=1+(x.isInstancedMesh?x.count:0)+(x.geometry&&x.geometry.attributes.position?x.geometry.attributes.position.count:0))}),E},v=E=>{E.sort((S,F)=>S-F);let x=E.length;return(E[Math.floor(x*.02)]+E[Math.min(x-1,Math.floor(x*.98))])/2};function _(E){a.updateMatrixWorld(!0);let x=[];a.traverse(I=>{if(!(!(I.isMesh||I.isLine||I.isPoints)||I.userData.backdrop)){if(I.isInstancedMesh)for(let P=0;P<I.count;P++)I.getMatrixAt(P,m),x.push(d.setFromMatrixPosition(m).applyMatrix4(I.matrixWorld).clone());else if(u.makeEmpty().expandByObject(I),!u.isEmpty())for(let P=0;P<8;P++)x.push(M.set(P&1?u.max.x:u.min.x,P&2?u.max.y:u.min.y,P&4?u.max.z:u.min.z).clone())}}),p=y();let S=x.filter(I=>Number.isFinite(I.x+I.y+I.z));if(!S.length){h.set(0,0,0),g=1;return}h.set(v(S.map(I=>I.x)),v(S.map(I=>I.y)),v(S.map(I=>I.z)));let F=S.map(I=>I.distanceTo(h)).sort((I,P)=>I-P),T=F[Math.min(F.length-1,Math.floor(F.length*.98))]*1.05;if(!(T>0)){g=1;return}g=Math.max(.3,Math.min(30,2.4*T/E))}let w=null;return{renderer:r,scene:a,camera:o,resize:l,canvas:r.domElement,fit:_,changed:()=>y()!==p,centre:h,orbit(E,x,S,F){let T=g/Math.min(1,o.aspect*1.15),I=S*T,P=F?(f.set(h.x+F.x*I,h.y,h.z+F.z*I),f):h;e&&(a.fog.near=e[0]*T,a.fog.far=e[1]*T),o.position.set(P.x+Math.sin(E)*Math.cos(x)*I,P.y+Math.sin(x)*I,P.z+Math.cos(E)*Math.cos(x)*I),o.lookAt(P),w&&w.position.copy(o.position),o.updateMatrixWorld()},sky({top:E,haze:x,stars:S=0,starColor:F="#ffffff"}){w&&(a.remove(w),w.traverse(X=>{X.geometry&&(X.geometry.dispose(),X.material.dispose())}));let T=300,I=new ve(T,24,16),P=I.getAttribute("position"),B=[],N=new Mt(x),Z=new Mt(E),G=new Mt;for(let X=0;X<P.count;X++){let z=Math.max(0,Math.min(1,P.getY(X)/T/.5));G.copy(N).lerp(Z,z*z*(3-2*z)),B.push(G.r,G.g,G.b)}if(I.setAttribute("color",new Gt(B,3)),w=new re(I,new de({vertexColors:!0,side:Ge,fog:!1,depthTest:!1,depthWrite:!1})),w.renderOrder=-10,w.frustumCulled=!1,w.userData.backdrop=!0,S>0){let X=[];for(let D=0;D<S;D++){let j=D*2654435761%6283/1e3,O=.12+D*40503%1e3/1e3*.85,V=Math.sqrt(1-O*O);X.push(Math.cos(j)*V*T*.98,O*T*.98,Math.sin(j)*V*T*.98)}let z=new Os(new he().setAttribute("position",new Gt(X,3)),new ts({color:F,size:1.6,sizeAttenuation:!1,fog:!1,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.8}));z.renderOrder=-9,z.frustumCulled=!1,z.userData.backdrop=!0,w.add(z)}a.add(w),w.position.copy(o.position),r.setClearColor(N),e&&a.fog.color.copy(N)},render(){r.render(a,o)},snapshot(){return r.render(a,o),r.domElement.toDataURL("image/png")},dispose(){a.traverse(E=>{E.geometry&&E.geometry.dispose(),E.material&&E.material.dispose(),E.isInstancedMesh&&E.dispose()}),r.dispose(),r.domElement.remove()}}}function zu(i,{yaw:t=.6,pitch:e=.3,dist:n=48,min:s=15,max:r=110,minPitch:a=.3,maxPitch:o=1.4,pan:c=!1,onChange:l,onClick:h,onHover:f}){let u=i.canvas,d={yaw:t,pitch:e,dist:n,x:0,z:0},m=new Map,M=e,g=.75,p=!1,y=null,v=0;u.style.touchAction="none";let _=T=>Math.max(s,Math.min(r,T)),w=T=>Math.max(a,Math.min(o,T)),E=T=>Math.max(-.7,Math.min(.7,T)),x=(T,I)=>{let P=2*Math.tan(25*Math.PI/180)/(u.clientHeight||300);d.x=E(d.x-(Math.cos(d.yaw)*T+Math.sin(d.yaw)*I)*P),d.z=E(d.z+(Math.sin(d.yaw)*T-Math.cos(d.yaw)*I)*P)},S=()=>{let[T,I]=[...m.values()];return Math.hypot(T.x-I.x,T.y-I.y)},F={pointerdown(T){m.set(T.pointerId,{x:T.clientX,y:T.clientY});try{u.setPointerCapture(T.pointerId)}catch{}m.size===1?(p=!1,y={x:T.clientX,y:T.clientY}):(p=!0,v=S())},pointermove(T){let I=m.get(T.pointerId);if(!I){T.pointerType==="mouse"&&f&&f(T.clientX,T.clientY);return}let P=T.clientX-I.x,B=T.clientY-I.y;if(I.x=T.clientX,I.y=T.clientY,m.size===2){let N=S();v>0&&N>0&&(d.dist=_(d.dist*v/N),l()),v=N;return}!p&&Math.abs(T.clientX-y.x)+Math.abs(T.clientY-y.y)>4&&(p=!0),p&&(c?x(P,B):(d.yaw-=P*.008,d.pitch=w(d.pitch+B*.008)),l())},pointerup(T){m.delete(T.pointerId)&&!p&&!m.size&&h&&h(T.clientX,T.clientY)},pointercancel(T){m.delete(T.pointerId)},wheel(T){T.preventDefault(),d.dist=_(d.dist*(1+Math.sign(T.deltaY)*.08)),l()}};for(let[T,I]of Object.entries(F))u.addEventListener(T,I,{passive:T!=="wheel"});return{get yaw(){return d.yaw},get pitch(){return d.pitch},get dist(){return d.dist},get x(){return d.x},get z(){return d.z},set(T){Object.assign(d,T),d.dist=_(d.dist),d.pitch=w(d.pitch),d.x=E(d.x),d.z=E(d.z),l()},get tilted(){return d.pitch<M-.2},tilt(T=!(d.pitch<M-.2)){return d.pitch=w(T?g:M),l(),T},apply(){i.orbit(d.yaw,d.pitch,d.dist,d)},dispose(){for(let[T,I]of Object.entries(F))u.removeEventListener(T,I)}}}var Co=new H;function cs(i,t){let e=i.camera,n=i.canvas.clientWidth,s=i.canvas.clientHeight;Co.set(t[0],t[1],t[2]).applyMatrix4(e.matrixWorldInverse);let r=-Co.z;if(r<=e.near)return null;let a=s/(2*Math.tan(e.fov*Math.PI/360));return{x:n/2+Co.x*a/r,y:s/2-Co.y*a/r,depth:r,px:a/r}}function Gu(i,t,e,n,s=8){let r=null,a=1/0,o=null,c=1/0;for(let l of t){let h=cs(i,l.at);if(!h)continue;let f=Math.hypot(h.x-e,h.y-n),u=l.r*h.px;f<=u?h.depth<a&&(a=h.depth,r=l.key):f-u<=s&&f-u<c&&(c=f-u,o=l.key)}return r||o}var ur=(i,t)=>(Object.assign(i.style,t),i);function Hu(i,t){getComputedStyle(i).position==="static"&&(i.style.position="relative");let e=`0 0 3px ${t.bg}, 0 0 3px ${t.bg}, 0 1px 2px ${t.bg}`,n=`color-mix(in srgb, ${t.bg} 72%, transparent)`,s=(T,I,P)=>{let B=document.createElement(T);return ur(B,I),(P||r).appendChild(B),B},r=ur(document.createElement("div"),{position:"absolute",inset:"0",pointerEvents:"none",overflow:"hidden",font:"13px system-ui, sans-serif",color:t.fg,userSelect:"none"});r.className="vgv-frame",i.appendChild(r);let a=s("div",{position:"absolute",left:"12px",top:"10px",right:"12px",color:t.muted,textShadow:e});a.className="vgv-stat";let o=s("div",{position:"absolute",left:"12px",top:"34px",right:"12px",display:"flex",flexWrap:"wrap",gap:"2px 12px",fontSize:"11px",color:t.muted,textShadow:e});o.className="vgv-legend";let c=s("div",{position:"absolute",left:"10px",right:"10px",bottom:"112px",maxHeight:"55%",overflowY:"auto",display:"none",flexDirection:"column",gap:"8px",padding:"10px 12px",borderRadius:"10px",background:t.bg,border:`1px solid ${t.muted}`,pointerEvents:"auto",userSelect:"text"});c.className="vgv-insights";let l=s("div",{position:"absolute",top:"34px",left:"0",right:"0",display:"none",justifyContent:"center"}),h=s("div",{position:"absolute",inset:"0"});h.className="vgv-labels";let f=s("div",{position:"absolute",inset:"0",pointerEvents:"none"});f.className="vgv-rings";let u=s("div",{position:"absolute",left:"0",right:"0",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",padding:"0 12px"});u.className="vgv-controls";let d=s("div",{position:"absolute",display:"none",maxWidth:"260px",padding:"4px 8px",borderRadius:"6px",background:t.bg,border:`1px solid ${t.muted}`,color:t.fg,fontSize:"12px"});d.className="vgv-tip",r.appendChild(c);let m=40,M=24;function g(T,{label:I,title:P,run:B,off:N},Z){let G=s("button",Object.assign({pointerEvents:N?"none":"auto",cursor:"pointer",minHeight:m+"px",height:"auto",minWidth:m+"px",width:"auto",padding:"6px 14px",margin:"0",borderRadius:"8px",border:`1px solid ${t.muted}`,background:t.bg,color:t.fg,font:"600 13px system-ui, sans-serif",boxShadow:"none",opacity:N?"0.35":"1",lineHeight:"1.2"},Z||{}),T);return G.type="button",G.textContent=I,G.disabled=!!N,P&&(G.title=P,G.setAttribute("aria-label",P)),G.addEventListener("click",X=>{X.stopPropagation(),B()}),G}let p=T=>{let I=T.canvas.getBoundingClientRect(),P=r.getBoundingClientRect();return{x:I.left-P.left,y:I.top-P.top}},y=[],v=null,_=!1,w={},E=null,x=[],S=()=>{let T=o.querySelector(".vgv-mark");if(T&&T.remove(),!E)return;let I=s("span",{display:"inline-flex",alignItems:"center",gap:"5px"},o);I.className="vgv-mark",s("i",{width:"9px",height:"9px",borderRadius:"50%",border:`2px solid ${t.warn}`,boxSizing:"border-box"},I),I.append(E)},F=()=>{if(c.style.display=v&&_?"flex":"none",c.replaceChildren(),!(!v||!_)){if(v.plain){let T=s("div",{color:t.fg,lineHeight:"1.35",fontWeight:"600"},c);T.textContent=v.plain}v.about&&(s("div",{color:t.fg,lineHeight:"1.35"},c).textContent=v.about);for(let T of v.insights||[]){let I=s("div",{display:"flex",gap:"8px",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"},c);s("div",{color:t.muted,flex:"1 1 160px",lineHeight:"1.35"},I).textContent=T.text;let P=[...T.run?[{label:T.label||"Show",title:T.title||T.label||"Show",run:T.run}]:[],...T.extra||[]];for(let B of P)g(I,B,{minHeight:m+"px",padding:"4px 10px",fontWeight:"500"})}}};return{stat(T){a.textContent=T||""},explain(T){v=T||null,o.replaceChildren();for(let I of v&&v.legend||[]){let P=s("span",{display:"inline-flex",alignItems:"center",gap:"5px"},o);s("i",{width:"9px",height:"9px",borderRadius:"50%",background:I.color,display:"inline-block",flex:"none"},P),s("span",{},P).textContent=I.text}v||(_=!1),S(),F(),this.controls(w)},card(T){_=!!T&&!!v,F(),this.controls(w)},mark(T){E=T||null,S()},rings(T,I){for(;x.length<T.length;){let B=s("div",{position:"absolute",left:"0",top:"0",borderRadius:"50%",boxSizing:"border-box",willChange:"transform"},f);x.push(B)}let P=p(I);x.forEach((B,N)=>{let Z=T[N],G=Z&&cs(I,Z.at);if(!G){B.style.display="none";return}G.x+=P.x,G.y+=P.y;let X=Math.max(4,Math.min(24,Z.r*G.px))+4,z=2*X+(Z.n>1?8:0);ur(B,{display:"",width:z+"px",height:z+"px",border:`2px solid ${t.warn}`,boxShadow:Z.n>1?`inset 0 0 0 2px transparent, inset 0 0 0 3.5px ${t.warn}`:"none",transform:`translate(${Math.round(G.x-z/2)}px, ${Math.round(G.y-z/2)}px)`})})},controls(T={}){w=T;let{at:I="bottom",lines:P=[],buttons:B=[]}=T,N=v&&I==="bottom"?[...B,{label:_?"Close":"Insights",title:_?"Close the insights":"How the notes relate to this view and how to improve them",run:()=>{_=!_,F(),this.controls(w)}}]:B;if(u.replaceChildren(),ur(u,I==="centre"?{top:"50%",bottom:"auto",transform:"translateY(-50%)"}:{top:"auto",bottom:"18px",transform:"none"}),P.forEach((Z,G)=>{s("div",{textAlign:"center",textShadow:e,color:G||I!=="centre"?t.muted:t.fg,fontWeight:G||I!=="centre"?"400":"600",fontSize:G||I!=="centre"?"13px":"14px"},u).textContent=Z}),N.length){let Z=s("div",{display:"flex",gap:"8px",alignItems:"center",justifyContent:"center",maxWidth:"100%"},u);N.forEach(G=>g(Z,G,G.wide?{maxWidth:"70vw",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}:null))}},chip(T,I){l.replaceChildren(),l.style.display=T?"flex":"none",T&&g(l,{label:`${T}  \u2715`,title:`${T}. Clear`,run:I},{borderRadius:"18px",fontWeight:"400"})},labels(T){h.replaceChildren(),y=T.map(I=>{let P={position:"absolute",left:"0",top:"0",whiteSpace:"nowrap",color:I.color||t.fg,textShadow:e,font:`${I.strong?"700 15px":"12px"} system-ui, sans-serif`,willChange:"transform",background:n,borderRadius:"5px",padding:"1px 5px"},B=I.run?g(h,{label:I.text,title:I.title,run:I.run},Object.assign(P,{minHeight:M+"px",minWidth:M+"px",padding:"3px 5px",border:"none",background:n})):s("div",P,h);return I.run||(B.textContent=I.text),{l:I,n:B,w:B.offsetWidth,h:B.offsetHeight}})},tip(T,I,P){d.style.display=T?"block":"none",T&&(d.textContent=T,ur(d,{left:Math.max(4,Math.min(r.clientWidth-264,I+14))+"px",top:Math.max(4,P+16)+"px"}))},place(T){let I=r.clientWidth,P=r.clientHeight,B=[],N=p(T);for(let{l:Z,n:G,w:X,h:z}of y){let D=cs(T,Z.at);D&&(D.x+=N.x,D.y+=N.y);let j=!!D&&D.x>-X&&D.x<I+X&&D.y>-z&&D.y<P+z,O=0,V=0;j&&(O=Math.max(6,Math.min(I-X-6,Z.side==="right"?D.x+(Z.dx||0):D.x-X/2)),V=Math.max(34+(o.offsetHeight?o.offsetHeight+6:0),Math.min(P-110,D.y+(Z.dy||0)-z/2)),j=!B.some(tt=>O<tt[0]+tt[2]&&O+X>tt[0]&&V<tt[1]+tt[3]&&V+z>tt[1])),G.style.display=j?"":"none",j&&(G.style.transform=`translate(${Math.round(O)}px, ${Math.round(V)}px)`,B.push([O,V,X,z]))}},dispose(){r.remove()}}}function Wu(i,t,e){let n=Ro(i,e.theme,t.stage),s=Hu(i,e.theme),r=0,a=!1,o=null,c=new Map,l=()=>s.rings(c.size?M.targets().filter(p=>p.key.kind==="note"&&c.has(p.key.id)).map(p=>({at:p.at,r:p.r,n:c.get(p.key.id)})):[],n),h=()=>{n.changed()&&g(),m.apply(),M.frame&&M.frame(),s.place(n),l()},f=()=>{r=0,!a&&(h(),n.render())},u=()=>{!r&&!a&&(r=requestAnimationFrame(f))},d=(p,y)=>{let v=n.canvas.getBoundingClientRect();return m.apply(),Gu(n,M.targets(),p-v.left,y-v.top)},m=zu(n,{...t.home,onChange:u,onClick(p,y){let v=d(p,y);v&&(M.click(v),u())},onHover(p,y){let v=d(p,y),_=n.canvas.getBoundingClientRect();n.canvas.style.cursor=v?"pointer":"",s.tip(v&&v.tip?v.tip:null,p-_.left,y-_.top),(v&&v.kind+v.id)!==(o&&o.kind+o.id)&&(o=v,M.hover&&(M.hover(v),u()))}}),M=t.build({stage:n,frame:s,orbit:m,invalidate:u,...e}),g=()=>n.fit(t.home&&t.home.dist||48);return g(),u(),{view:t.id,resize(){n.resize(),u()},keyAt:d,noteAt(p,y){let v=d(p,y);return v&&v.kind==="note"?v.id:null},pageAt(p){m.apply();let y=cs(n,p),v=n.canvas.getBoundingClientRect();return y&&{x:y.x+v.left,y:y.y+v.top}},mark(p,y){c=p instanceof Map?p:new Map(Object.entries(p||{})),s.mark(c.size?y||"needs attention":null),u()},update(p){M.update(p||{}),g(),u()},stat:()=>M.stat(),today:()=>M.today?M.today():null,turn(p){return p&&m.set(p),{yaw:m.yaw,pitch:m.pitch,dist:m.dist}},snapshot(){return h(),n.snapshot()},api:M.api||{},dispose(){a=!0,cancelAnimationFrame(r),m.dispose(),M.dispose&&M.dispose(),s.dispose(),n.dispose()}}}var kx=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],xt=(i,t)=>`${i} ${t}${i===1?"":"s"}`,se=(i,t)=>i.length>t?i.slice(0,t-1)+"\u2026":i,di=i=>{let[,t,e]=i.split("-");return`${kx[+t-1]} ${+e}`},Io=(i,t)=>Math.round(Math.abs(Date.parse(t)-Date.parse(i))/864e5);function Vx(i,t=18){let e=i.length,n=Math.PI*(3-Math.sqrt(5));return i.map((s,r)=>{let a=e>1?1-r/(e-1)*2:0,o=Math.sqrt(1-a*a),c=r*n;return{x:Math.cos(c)*o*t,y:a*t,z:Math.sin(c)*o*t,size:.5+Math.sqrt((s.inlinks||0)+(s.outlinks||0))*.35}})}var Zu={id:"bodies",name:"Notes",hint:"Every note as a sphere",home:{yaw:.6,pitch:.3,dist:48,min:15,max:110},build({stage:i,frame:t,data:e,onOpen:n}){let s=e.nodes,r=Vx(s),a=new fe(new ve(1,20,14),new Ee({roughness:.5}),Math.max(s.length,1));a.count=s.length;let o=new Yt,c=new Mt;r.forEach((f,u)=>{o.makeScale(f.size,f.size,f.size).setPosition(f.x,f.y,f.z),a.setMatrixAt(u,o),a.setColorAt(u,c.setHSL((s[u].cluster||0)*.137%1,.6,.55))}),i.scene.add(a);let l=r.map((f,u)=>({at:[f.x,f.y,f.z],r:f.size,key:{kind:"note",id:s[u].id,tip:s[u].name}})),h=()=>xt(s.length,"note");return t.stat(h()),{targets:()=>l,click:f=>n(f.id),update(){},stat:h}}};var Yu={source:"PDB 5F9R (Jiang et al., Science 351:867, 2016) and 1BNA (Drew et al., PNAS 78:2179, 1981); public domain",q:.55914,lo:[-59.037,-52.177,-45.243],radius:1.8,protein:8622,rna:[[1,23],[2,18],[3,14],[4,16],[5,14],[6,14],[7,15],[8,15],[9,15],[10,15],[11,15],[12,16],[13,15],[14,15],[15,13],[16,16],[17,17],[18,13],[19,15],[20,14],[21,14],[22,14],[23,14],[24,10],[25,14],[26,14],[27,21],[28,22],[29,17],[30,15],[31,15],[32,17],[33,16],[34,18],[35,15],[36,16],[37,19],[38,15],[39,13],[40,17],[41,15],[42,19],[43,20],[44,16],[45,17],[46,17],[47,20],[48,20],[49,18],[50,16],[51,15],[52,17],[53,14],[54,17],[55,18],[56,16],[57,16],[58,15],[59,18],[60,16],[61,17],[62,15],[63,15],[64,17],[65,16],[66,17],[67,16],[68,17],[69,16],[70,16],[71,15],[72,16],[73,16],[74,17],[75,20],[76,16],[77,20],[78,14],[79,15],[80,16],[81,17],[82,18],[83,19],[84,19],[85,19],[86,15],[87,14],[88,16],[89,14],[90,18],[91,19],[92,20],[93,14],[94,15],[95,18],[96,15],[97,17],[98,19],[99,22],[100,20],[101,16],[102,17],[103,14],[104,15],[105,17],[106,19],[107,22],[108,19],[109,17],[110,16],[111,16],[112,15],[113,16],[114,15],[115,20],[116,20]],target:[[1,15],[2,15],[3,16],[4,16],[5,16],[6,15],[7,16],[8,15],[9,14],[10,18],[11,19],[12,16],[13,16],[14,18],[15,15],[16,15],[17,16],[18,14],[19,16],[20,15],[21,15],[22,13],[23,16],[24,17],[25,14],[26,16],[27,14],[28,18],[29,17],[30,17]],other:[[12,21],[13,19],[14,18],[15,16],[16,18],[17,19],[18,13],[19,22],[20,19],[21,14],[22,14],[23,15],[24,14],[25,16],[26,15],[27,15],[28,16],[29,16],[30,22]],spacer:20,pam:[[10,21],[9,22],[8,23]],flank:[[7,24],[6,25],[5,26],[4,27],[3,28],[2,29],[1,30]],step:{turn:.62351,rise:3.2376},pair:[[9.699,0,-2.305,0,0],[10.839,.901,-2.582,0,0],[9.939,-1.059,-1.289,0,0],[8.473,.907,-1.868,0,0],[8,1.916,-2.762,0,0],[6.881,2.551,-2.001,0,0],[5.884,1.565,-1.789,0,0],[7.28,2.993,-.605,0,0],[7.569,4.393,-.583,0,0],[6.113,2.528,.278,0,0],[5.076,2.087,-.754,0,0],[4.225,.946,-.343,0,1],[2.882,1.115,-.303,0,1],[2.389,2.221,-.546,0,1],[2.101,.031,-.017,0,1],[2.619,-1.208,.254,0,1],[1.832,-2.138,.454,0,1],[4.007,-1.353,.26,0,1],[4.641,-2.674,.601,0,1],[4.803,-.254,-.061,0,1],[-9.607,1.703,2.313,1,0],[-10.67,2.703,2.57,1,0],[-9.986,.564,1.436,1,0],[-8.324,2.485,1.789,1,0],[-7.756,3.509,2.615,1,0],[-6.674,4.18,1.825,1,0],[-5.519,3.332,1.755,1,0],[-7.034,4.586,.4,1,0],[-6.674,5.949,.158,1,0],[-6.253,3.555,-.414,1,0],[-5.004,3.39,.428,1,0],[-4.379,2.059,.236,1,1],[-4.984,.831,.172,1,1],[-4.103,-.178,.07,1,1],[-2.905,.441,.079,1,1],[-1.572,-.063,.016,1,1],[-1.289,-1.392,-.053,1,1],[-.579,.825,.041,1,1],[-.854,2.124,.134,1,1],[-2.04,2.718,.212,1,1],[-3.03,1.798,.18,1,1]],tails:{near:{o:[46.898,-16.831,-6.652],x:[.205,-.031,.978],y:[-.292,-.956,.03],z:[.934,-.292,-.205],phase:1.8705},far:{o:[-33.927,-16.831,-6.652],x:[-.732,-.357,.58],y:[-.659,.585,-.472],z:[-.17,-.728,-.664],phase:1.8705}},atoms:"TxsjTBsjTB4lTR8kTBklSh0nSSAoSyAqTB4rRx8pSyIrTSMtTCUuSycuTyMsUCUrUScsTyYoUSkqTygnUSsmTSUxTygzUSczSyc0SSYzTys0US03UC43Ui4yVC8zVC4uUy47VS87VTE8VzQ/VTRBVjU7VTU4VTc3WDQ3WTVAWTZCXThCWjREWTdHXDRIWjpCWzxCXD5EWz1GWj5AWDw+Wz8+Vz48Xj9DX0BFYUJEYUJCYURGY0ZFZkdCY0hHZUZJYUhIZkNEaEBCaj9AakFFa0NGbEVFa0NJZj9BYT5AZjtCZDtEYzs9YTo8YjY6YTs6Xjo4YT46YDY+YDQ+XjI8XDM8XzE6Xyw4XTE2YDE1YjI1YS8zZDE0Yy8zXy0yYSsxYywwWyw4Wyo4WSk2Vyo2Wik6WSc1VyQ0WCI0ViUvWSkwVCM0UyE1UiAzUSIyUiE3UCI3VCI5TiI5UB0xThwyTR0zURsvVBswURstTRoxShkxSxg0SRg1SRgvRhgwRRgyRRguTRYzTRU1UBU4TxM0Txg3URo5VRk7UBk8TRk8TBs9TBc8Shs9SRc8SBk9Rho9VBk3Vxg2WBo1VxszVxY1Whs1XRoyXR41Xxw2Xx8zXBwtXx4tWh0rWB4tWR4vXxorYhsnYBomYxgrZRkqYx0nZB0kZh4jaB8lYh8jZx0haSAfZyAdahweayIfayQebSQdbyQdaiYgaCYhaCYkZiUgZSYlZCUhYyUkbCYabiYZcCgabyobbScWcigZdykXeCocdCcedS0Xdy4Wei4Wei4YdjAVdDETczMTdDARezAVfTEVfy8Ufi4Sgy0UhCsVhioVhS4ShjAUhjAWhzITgioXgygYgiUXgSUWgigbgCgbgyscgyQZgiEYgCAZfh8YhB8ZhyAZhyEXiB8afyEbfSEceiQafCEfeiEZdCMYeCAVeiETfCIUeyARfiISfSERdSAacx8edR4ecR4achwaciAfbx8jbiAjcyEjdiEjcyAmeCIkbx0kbhwpbBklax4oaB8sZx4qbCIqaCAuZCIvZSQuZh8xZhsxaR0yYiIvYCQvXiYyXiQuZig1YSU3YCc5YyM3YCU7ZCo3Ziw4ZS45aDQ5ajQ5ZzI9ZzY5aDg4aDo7Zzo2aDw1ajw0Zj40bzs9bjg+cDc/bDlAbUA8bUI7bUQ/a0M5aUM7aEY7aEE7ZkY9ZUI8ZUQ9cEg+bEk+cUo+dEk9dEc+dUo7bUpBbE5Aa0tFa0lGaE5AaFA/Z1JDalZCZ1hBbFdCblVCcVZCcVlCclVCaFlEZltFZ11DaV1CZVtHZ1xIZFlIZV9EZ2NEZ2VEZGJBZ2JGamVIa2dIZ2NLaGRNZ2NPZ2FPZ2RRbGNIbmRHb2ZFcGdFcGJHbmVDbmZBbmtBbWU/bWM/bWc9a2lDa21Fa29EZm1FZG1GZGxJYmhIY2pMbGxHbm1IcG5HcHBHbmxKbWxNamtMbmpPc25Ec3JCdGxCdmtEdmpGeGlHeWdFb3ZBa3I9aXE8Z3A9aGw9ZW0/bXRDbXZFb3lGa3ZHbHRJaXVHcXZGc3ZGdXpFdXRHdXhAdXxAdHc+dnU9dXM7c3I8c3A7dHA5cW87cXtAcH1AcYFCbXxAbHw+anw9aHo+Z3g9Z3g7Znc+cX5Ecn9GdIBFdYNFc35IcX9Lc39NdX1Ndn1Pd39QeHxQdn9FeIBEeIJCeYRCen5De31FfX5He3tGfX1Je3lIfXtKfnpMd4FAd4M+doU/doc+dYI8c4E8doA6dIVAcodBdItDcIdCboZBbIRCaoNAaIFCZ4E+dYhEeYxFeIdIeohJfYdJfYVLf4RKgYVJgIJMeolCfIpBfI5AfYg/foo9gIs+gow9hI0+d5I/dY49dY06d4w6c405dpBCdpJEeJVEdZFGc5BGcY9Jco1JdY5MdIpMepJEfZNEfpdCf5FEf5BHgZNEf5JJfJRAfJU9e5c9e5k8e5M7fpE7d5k/eZ0/dZlAc5c8cZY/cpY7cJQ+cJQ8b5M6fp9De5tGfJ1Ifp5Iep9IgJxAgaA+gpo/hZc/hZc9hpZBfp49fZ87fKI8faM6e546ep83d583dp04d6A1e6I+e6Q/fag/eaRBd6NBeaZCdaNDgaZAhac+g6RCgqVFgKZFg6RGf6ZHgqRJgKVJg6U6h6g5gqQ4g6Q2g6k5hKw4h645gq03f604f6o5fq45ha08hq4+i64/ha5Ag7A/hLI/hbNAgrQ+iao+iqY/jaVBjKREjKdFjKo7jqo5j6w6ka05jao3jq47j7A7kbA+krE+jbI8jLM6irU7i7c7ibk8kK4/ka5Bk6xBlqxBkaxGjq9Ek6pAlKg/kqY9laZBl6RBl6M/mKRDlac7lKY5lKM5k6I3lqc3mac3maU5mqg2lp09mJ85mqA6lJ8+k5pAkqBCkZ9Ekp5Ijp1Hj51IkJw+jpo+j5g9j5Y9jJs9ipxBiZ49iZ5Ch58/h59BkZk7k5c6lJY7lJM7lJg4kpk2kZs2kpk0kJw0kJszlZc9lZRAlpJBmJdAmpg/nJpBmptCm55Ak5VBkpNCkI9CkJVDkJZGkZhGjZdGkYw8jpA7jI87ipA9ipI+iI89lI49lo08l4w/mYs/l447mZA8m5E6m5A4m5M7loxBl4xDmYlFlY1Fk4tFlohClYRBlYFClIBEln9AlH5Fln1BlXxDmoU/n4dAnIY7moU5mIU6m4c3ooQ/o4c+ooc8pII/poJAo4A/pYg/poo+p4k8p4s6qItAqY0/q45BrJBArI1CqIc7qYY5qIc1qoQ5q4M3rIA3rH85rH81pYY4o4Y2oYk2oIk1oYQ2o4I1pYI0ooA2oYw5o482oY07n482n5E0opU0nZIzn5Q4oJY5oZY7opQ7npg5n5s5n5w7oJw4oJ47oJ45opc9o5c/n5VBo5lApppAqJlBqpk/p5dCo5RCopJEn5FHpJBEppFFqJBGq5FHq5FJqpBLrZJJnpdInphGophKpJdNppZKppZOqJZMmZZImZhJmJlHmJRKmpNLnJRLmZpLmJxLmJ1Nl5tPlp9NlpxRm55Kn6FGnqJLm6RNnKFPmaVPm6FRmaNRn55HoZ1Fo51GpZxFpJ9Hpp9Ip55KpZ1Lp6JJpaNLpqJNo6RKqZ5Lp5xRq5tNrJpLrJlPrplLqZ9QqaFTpqFVqqNTqqRQqqVVo6NSoKBUoaRQo6ZQo6dRo6dNop5SoJxSoZtVn5tWoZpQo5xVpJtYopxbp5tYp5taqJpWop9ZoaFan6BbnqBdoaNZnZ9Zm55ZmZxdmp5XlZ5Yl5pXk51ZlZlYk5pYkZlZnJhcnZlenJhgnpdbnJNZnpZWm5NWnZRVnptfn5xhnJxkoZ1hpJxipJxkop1mpZplnJ9imqBjl59lmqNimKRkmKdjlqhllqplmJ1hlphflJ1fkaBhlKFekaNhlKNekqdgl5VjlpJgmJVllpdnlpllkJVgkJdgj5JjjpRkkZFljpRfjJZdiplfi5RbipZaiZNdi5hYiJtliJVlhJNjiJFjg5Fiho9ig45hjZxli6BkkJxlkptpkZdpkphriaBfiKJfjZ5djKBbjaJbjZ9YiJ5ghZ5ghaBihKJihJxhhJpfgppegZhdgJZef5dgf5Rdhp9khaFmhaVmh6BohqJrh6Fth6NviKJxiKRliaZkh6pjjKZjjahijapkjqxkj65mhahfgqpfhaZch6VZiKlbgKdifqtkf6VkfKZlfqNigqtng61mga9ng6pqgqhrgKdqhKdsha1mhq9lg7Bhia9kirFjhbNjg7VhhbZghbhfgrZig7hkgLVkibZeibVbiLNbjLVfjLZii7dijbRjirZajrRWirdWirdTirlRirhPirpNi7FXjK9Wja9Ui7BSjK1Yjq1Tj6xRi6pRkatQkqpOkalNk6xNjKtNiqpMiaZMiqtJiKtIhqxJiKxFjaRLjaNOi6FOkKRLkaRIk6RIlaZJl6ZJmKVHmKhKjaRQjKNSiaFTjqRUkKRUkaVWkaJUiaVRhqVRg6FRhadQhqlSgqdRhaxShqJOhaBMhJxOh6BKhJ1IiJxJhJtHiJpIhZdGiJtQhplTi5tRj5tQjJlOhp1UhJ1WgZpVhJ9XgZ1Tf51Sf5pRfZlRfp9QfqFRfaNPfKFTgJpPgZdOgJNPg5dMgpZSgpRUf5FVhJRVg5JZhpFXg5BbhY9afJVWeZNVe5hXfJlZe5tafZ1beZRQeJBPeZVOeJhPeJRMeJlNfI5Pe4pQf45OgItNgotMg4lLhYlKeY5YfYtWf4pVf4dUgItUgYdTgopTgohSdo1VdY9WdI5ZdI9ac49Uco1Tco1RcI5PbopPbY5Ocotbb4pYbIhbaotca4VdaYdgbYZhaohjbIdjaIlaZopaZIlbYolbZYpXZ4xWaYtVZo5Vao1UZ5BUao9TY4dfX4hhZIVgZoNfZ4JhZIFeYophYYxiYI5hYZBgYo1kZItlYY9mZYxnXY5hXJBfXJJhXJJjWY9fWY1dV41cVY5eVoxaXJRfXJdgX5hgYJdfX5liYppmYJpnYpxiYJ5iYJ5kX59gZJlmZZlpZ5tqaZtqZpdqZZVqYpVqZZRnZp1qZ59rZ55vZqJraKRraaRtaKVpa55ubJ1wa6Fzbp5wb55tbJ9saZ5zZ591aZ93a6B3ZZ11aJ15aZ17bZx8aJx9a5p5bZh5cJZ7b5l4cZh3bJd9bZZ/a5WAaZaAbpiBa5OBaZGCaJOEZpOEao+DaI2EbI6BapSGaZWIZ5eHZZeJa5eJZ5mGZpuGY5qFYZqGZ52EY5iDYZiCXpaEYpZ/ZJd8Ypp9YJOHX5SJXZSKYpGIYJaKX5iMW5mMYZqMY5mOYJyOZZqPXZqJV5qIW5yFWZ6EWp+CXJ+BWKGCWpeGWJWGVZSIWZOFWJKDWZCCVpGEWJSKV5ONVpWOVJWPWZOOWJKRW5GOVpeNVZmOUZqNVpyNVZ6NV6CMWKCLVqKNUpmKUJiJT5aKTJaKUZiGUpaGUpqFUJSKT5KLTJKOUJCLT5SPTpWRTJeRSpaTUJaTTJiQSpqPSJmORpqOS5yOTZ6PTqCOT6CMTaKPSJeNRpaLQ5WNR5SKRZKJQ5SHRpCHRZKRSJKURY+QRJOURJSXQ5KYRJKbQ5aYQpCXQo6YRIyZRIubQIyWPouWPI2WPI+VOo2YRoyYSIuYSoyXS4uWSIiYSYeZS4iaSYWaTY+XT42YUI2aTpGYTJGaSpCaUY2WU4uXVYyWVo2UU4mWUYeWVYeXUIWVV42YW4qYWpCZWJKaVpGbWJSYXY2WX4yWYoqYYY2UYI2aYY2cZI2cZYydYYudYougZY6aZ46ZaYyYa4yYZ4uXaYmVaoqTaIuRZ4eVaIWTZoaXbImTbYqQbYeOcImRcoqPcYyOdImOa4qNaomKbIeHaIuKbYuIb4uGcYmHc4qHcI2GcYeHcoWHcYKHcoCHdIWJb4OIbYGIa3+Fa4GKa4OCbYOAbIN+aYWCZ4WDZYOCZ4aFb4OBcYN/coGAdIF+c4WAdYZ+cn+Bc32BcXt9cnuDdXp+dXl8dHd8dXV8eHl7cnd8cHV8bnV7bXd6cHR+cXF/cXCBcG99bHN7anN6aXZ9aXB7ZnB6Z3Z5ZXh6Y3h+ZHh4Y3R8YnOCYHF9X3B+ZXJ/Z3KCZ3WDZ3WFaXGBZ3eCZ3mDZXqGaHuBY3mDYHmEX3mIX3iCXHiDW3qDWneBYXaGYXSIYXaMYnKIZXiNZHqNY3uPaHiMaXaLaHSKa3aLY3uLYn2LX3+OYX+JY4GIY4KLZoCIXHuOW3qSWnmMW3eMWXqKWXWOX3iSYHmWYXaSYX6VX3+ZYoCUZICTZn6VZ3+WZnyUXX+WWH2XWYKXWoSYWoSaXYWXWX2aWHubVXubVX2cWXqdWnyeW32cVHqbUXqbUHuYTnuYUnuXUnqSVHmSU36TUn+RUICQToCST4GOUHmRUHeQUnqNTnaPU3aMUneIUniGVXSJUHaITnaHTHmHS3mGTHSHSnSFSnWESXKFTXqJTHyKS4CIS4KHTYOGToSESYSHSYaKSIiKSYSMT4OIUYSIU4KHVIOGUoWLUoCIVH6HVX2DUX2BUn9/U399Tn2BUoR/VYR/VoR9UoaBT4eATYZ/T4mBWYOBXIB/WoODWYCFWoWFWoCHWX19V3t+V4F4WYN2VIN4VIR2VYZ2VIJ0WoR5XIV5XoR4YIV3XYd7W4h8XoF5YIB4YH92YX11YX56YX99YX1/ZIB8Xn91Xn5yXXxyXXtwXHt0Wnl0V3tyWnh3XHd7XnZ3Vnh0VHhzUXV1U3ZxVXZvUXZvUnl2UHl4TXl3TXl1UXt6U3x4U3x2THl5SXl5SHt7SXp9SHd5Rnd4RXl4RXV3Rnx7Q319QX5+RYB8Qnt8QHp8P3l+PXl/P3h6QXiAQHiCQHqGQnWDQXWFQn6EQICGRX+DR32DSX6DR3uEPYGCO4CBOYGBPoN/QIWAQYZ+QIWCQ4d+QoeCQ4iAO36COXyBNX1/N3yENnqENXqGNXmCOXx9N317N3h7OX15NoB3OX90NHt5Mnl4NHd3NHV2MHl3NXh1N3dzOXd0Onl1NnhxNnZvNXRvNXJvM3RxO3ZzPXZzPXlwPnRyQXNyQnR0QnJxQHlzQXtyRHxyRX10QH5yRntxSHtxSX1wSX1uSXhxS35xTYBwT39wUH5xTIJxSoNxSoZySYNvUYBuU4NrVH1sVn1tVXlqWXlsVoNtWYZoWYZuW4dyV4lwWYJqW4FoWYFlWoJjXH9oWn1pV4BmVYBjVYRkU39kVINgVIVfUYZfUIhfVYZdVIRbUoJcVYRZT4RgTYVgS4dkS4NgS4FiTIJeToZkTodnTIppUYdoUIdsUopqUIlvU4xtUotvUoxxTotlSY5nTo9kUJBlUZBnUpFjR4xjRYtlRItmRothR41fSY5fRo1dRodoRIhsR4VoR4NmSYJmRYNlR4prSIxtRI5vSo1tS49vSpFuSo5xQ5BrQY9rP5BsQ5JoRZRoR5NpRZVmQY1qP4tqPIttP4loPYdoPYZqPIdmP4lwPop0QYdxQod0Q4V1RYl0QI9zPpBzPZF1QpBzPZBxO5FwOZBxN5ByOpJuOY1xOItyOIt1Not2OYlxOox5OY96OZB8PIt6Po16PIl5P458OZF4OZN4PZR4O5d4PZl4Ppl6QJp7PJt3Opx4OZt6OZ13PZd8Ppd/QZZ/Q5h/PZaAQZR+RJN/RZN8RZJ7RJF/R5V8SJV5TJV4R5d4S5d7Tph7T5Z8Upd8Tpp9TJx8Spx7TZ59T5R9UJN+U5F9TpGATZGCSpKATI+DUJF6UZB4U5J3VJB1T5B3TY54S413Tox6Sot3TYp6S4p5U5R3VZV2WZV2VJh1VZt4UZt3WJV7XJJ7V5V+WY56W453XY13V4x6WpB2W5BzXZF0X5BzWZFyXpN1YJR1ZJN2YJd2Xpd4Xpd6XJh3YpB6Y455ZY55YI98YY5+YpB/X4x/Yo13Y4t1ZotzYYp0YItyZI5zZpByaJBzapByZZJxaJB1apF3a453bo54apJ5aox3a4p4bYd2aYl5aod7aId3aIV8bIlyb4lxcIdxa4pvcItyc4tydYx1c45ydI9vdpFwdY1uc4h1dId3eIh4c4V3dIR5eIZ1e4V0foh0e4Nzeolze4tye45ze5ByeolufY1ufYhteZB3e5F4fZB5eI95fJN3fpR4fpZ6fZh5f5V2fpZ8fpd+fJl+eph/gJl+gZqAgph9fJt9ep19e555e59+eaF+eqN9d6F/d556d593d6J3d6N1dJ52dJ90cqB4eKN5eKZ4e6l4d6d7fKV4f6V4gKh0gKN4gKJ6g6R4gKN9fqVzfqZxe6VweqRxgKRwf6RtgKJwe6VteaVseKJpeKdrfp1rfqBoepxse5tufJhtfZdveJpvd5tteJ1se5drfJVqfpVqgJRre5Roe5JnepBpepFlf5dpg5hqgplmgJlkgplshJpuhpdwg5xvgpRxhZFxgJJxgJByhpBsipBthpBphI9ohIxpgotriZRti5VujpNxi5duiphrjZhviptripRyipN0i5B0jZB1iJN2io9zi4xyjYxyj4tziYtwh4pxholvhIdwg4ZsgYVvkZBtlZJtlo9ql5JsmJFrmpFqk5F1k493lY93kpR2kpZ0lJVykZd0kY53kox5lYl6j4t6jY17i4x8i4l8iY19k4p2lIh1mId2k4hyl4VwlINul4Nvmox0nYp3mo50nY90n45znZF1oJB0oJF1m4x7m4p8nYl9mY59mZB8l5J9lpF/l5R9mYZ8nIJ8l4R8lYZ+loeAk4Z9nIV5nYR3oIR4oYN5nYV1n4Rzn4Fzn4VxoId5o4d6pYV9o4p6oot4pYt7oYZ+oYWAo4GBnoWBnoaDn4SFnoiEoIF+oX5+pHx+n318n3t8n3l+nXp6pH98p397qX99qn59p4F5poF3p4J1poJyp4RxqIF+qoKBqX+Cq36DqYSCp3+Dp32EqXmFpHyFo36GoX2GpH2JqHqBqXiArXaBqXd9qnZ8pnZ9rXqAr3qAsHqCsnmDsH1/sH18sX97sX94tHx4sn11r3uEr3qHsXeIrnyIrnyLrH2Nqn2MrX6PrXSIrnGIqnSJqXeLp3aMpnSNpniMrXKFrXF/q2+CqW6Ep22Dqm2GsnN/snF9s3J7tHSAtXKCsnKDsm99s217sWx4tGt8smp+sWuAsm2Br2qBr256rW15rG93qm92qmx6rXR2rnZ3rXh2rnl0rntzq3x3rH90r3JzsHFxrnBwrnBtsnBxrG9xq21wqG5wp25uqmtxqGlwqGdxqWdzpmVxqHBxpXFxo3NupXB2onR0pHF4p3duqHlrqHlwpXtyp3h0pHt0pnl2pXp2qnRpqXJlrXRprnZqr3dor3dssHlosHltsXprqXBpqG5no25oqGxpqGlop2lmqWhppW5koWxjn2xiom9hpHJgpHNeo3JcpXVdompjoGhjoGdloGVmoWZhpGVioGhnoGhqnmlrnmltomhrpGZqo2NrpWFqpF9rnGpqmmtrm21tmm5vmWptmGhrl2hpl2ZsnW5tnnBunHJsnnRunXhqn3lvm3xvn31tmn5vnn9tmoJtoHVqoXVoo3RnnnJnnHFmmHJlmXRol3Volndll3Zrk3dqlXltkXhqk3pukXpsj3ttmnplmXpgm3xlm31om35kmH5onXhinnhgnHVdoHhgoXpgoHxfo3thm3FgmXFfmHNemG9flW9elG5hkW5glW5jk25lknJllW1nkG9njnBnj3Bri29ni21pjHNqjHRtjXJwinZtindviHlvh3ptiHtxinFuiW9wjG1wjGxyh21vhmtwhGpvg2ttg2hwjWxuj2tukmtxkGpsjmlqj2hokGpnj2ZnkW5vk29wk3JvlHZymXVylXdzmHdzkG13kW15jXF3jnV2inR2jnd2inZ1jHh1i3p1kGx2kGl3lGd5j2d1j2V2jmN0j2B1jmB3lGp2l2l2mmp5mGpznGhznmh0nmxzn2p0mW56mW9+mXF5lnJ5mnF3lnV5lG1/l22Dkmx/kWyBjmuBjWuEi2qEl2qAnGmEmGaBmGZ+l2h+m2uAnmyBnm6Cn2+Dn21+n2p9oW5+oGt6m2+Cm3GEm3GGnHKImXSBlnWBm3aCmW6Jm22Km22Ml22Jl2qIlGmIk2qJlGeHnWyJn2uKoW2Lo2yLoGmIoXGLoHKNnnKNonOJo3KHo3SEpXaGonOPoXSRn3eRnneSo3STonWVoHSWo3aXoHiPn3qOnXqNm3mOnHuLmnuKl36LmniJmXeKnHeIl3qMlXqOk3uMkXqLlXuQk36MkX+Lj36HkoKLj4OKkIaKkoeKjoeJk36Hk32EkHqClnyEmH6Dmn2Dl4CCknmGkHeGjniGjHeFkXWIkXOHlHOGkXGJjXqHi3uHiHuEin2JiH2Ki3yMi32Ei36BiXx+jX+BjYKCj4SBjoaCkIiAjHh/iHZ9jXZ/jnR9kHN9jHJ+hnWBhHaBgnaAhXSEhnKEiHGFhHCEgnuAgnx8gn2Cgn2Egn+FgYGEgoODhIODgYSChXp6hX13g3l4gnZ5gHZ3f3d1f3R4h356ioB6i4J6hoJ6hoR5hoR3hoZ6jH55j312j3x7knt7k3t5k319kYB3koF0kYBwlH90ln92loB4mH11joFzjIFxjoRvioFxhIBygn5vgX1zjYJsjYNqioVrjoFoiYhnhYdmiopmjYtnjYtpj4tqi4xqiIVkh4Bih4RgiIZfhYhehYhchIdag4VbhIhYhH9lgX5khH9ogoBph39pgHxlfntlenxlfnhlf3hogXhpfXhqgndrfXdsgHdtfH1oen5pd4Fpe35sfYBsfoBueYNldoRje4RkfYVlfYZngIVkdoFkdIBicoFjcIFic4JmcYNnb4dncYNqcoFqc4dlc4plcYlhdYpkd4pmdY1jeYtlcI9ha41jbI5lb41mb5VdbZBaapNZZpFaZ5NZa5ZgbpdhbplhaZZiZ5VhZpNgaJFgZJJgb5ZicZdkdJpicpZmcpNlcZZoc5Jnc5ZgdZdedZtcdZVcd5Ndd5FdeZNfeZBeepFfcZtbcZ9cbptbbZ1abp1Xap1ZcZ1fcZ9gdKBgdKJgdp9geKBgeqJdep5heZ1je5tkfZtie5pmd6FZd6VYdp9YdqBVd55Tc6FUdKNac6ZadKhcdKpbcKVbbqdbbKdcbqlaa6lbbKpadaddd6hfealeeaxed6dhfKlbfaxZfqZagKdYgKNbeqpYeatWea9Wd6pVd6hTdadSeahRdq5Zd7Fad7Rac7BbcrJccLFebrBebLFdbLNdaq9cebBbe7JcfbJaf7NbfbBefbNUfrNSgK9Vga5Xg7BXhLFWhbBZebhQd7NSdrRVc7NVcrJTcrRXe7hUfLpUfrtTfr1TfLtXerpYeLpXerpaf7lSgbpQgblOgbtMg7hRhbtVg7dWhbtXg7dYhLlZgLZLfLZMg7NLhLJNhbNJhrJOh7NKirJNfbdIerhIebZHd7VHerpGfblEfrhGerRFebJEdq9Ge7FDfbBEf7FFfa1Ega9Gf6xFga1GeK5Kda5Ne61LfLBOf61NcrNLcLNMdbZNc7NJcbJHbq9HcrNEcLRDcLVBbrNDcaxHcapJcqhJc6pFc6xDcqtBda1DcatLcapNb6ZOcaxQb61Qba1Sa65TbLBVbrBWarFVbalNa6hNaqRLaKlMaKtOZaxOZaxMZKxQbKZJbaRHbqBIbqVFbaZDbqZBbac/a6U+cZ5NdKJMdaRKdqFNd6VLbqBQa5xQbKJRbqNTbKVVaqRWbadVa59Nap1La5tKaplKaZ5JbZtKb5lJb5VLcptGc5hIdJxFb5hNcJdPbZRRcZhScZZUdJhVb5ZVaZZRZpNQZ5hRaZpSZZhTaJVNZ5NLaZBLaJRIZJNGZ5FFYpJEZpBEY5BDZZBLZY1LYI1KZIxOY4pOYolRYoZRYYVTYIZVYINSY4tIYYpHYIdJYohFZIpDYIdDZYhBW4hJWYlJWotIXItHWoNKWX5GWn9MWIBNWIFPVn5MVYFQVH5NUYBRUoJHUoVIUoVKUolHU4dLU4lKU4tLWIRBWYI9WYdBWYg+V4lCW4JBXYBAX4M+XoI5Yn46YXw7X309Yog4Yoo6YYg8ZIs7YYM0YYIyXoQwYYAxYYMtYIQrX4IqYIIoYYYqYIcoYYonY4kmZYslZI0lZ4okXoArXX4qX3wpX3snYXwqY3oqY3ksZXcsZXspZHwlZn8nYXgtYXcwX3YwXXcwYngyYnc0YHMxXnIxXXI0W3E1Xm8xYW8yYmwyYWszYmg0Y2czYWc2XnQ4W3c6YHQ5YXA6Y3I3Ym46ZG83ZG04XXg2XHs3WHk1XXw1WHw3VX03VX83UoA2VHs5U388Vnw9VH8+V3o9WXk/WXtBVoE3VoM4VoQzWIU4V4c4Wok3Woc0U4Y1UoczU4s1UIczT4k1T4UzVIsxVY0xU48wUo8uV40vWYwwW4wuXYsvX4wwX48vYYswU5EyUZMxUpUvUZUtUZUzVZUvVpYtV5QsV5IsWJguV5ovWZUrW5MpXpQqX5QoWpMnWZEmWo4nXI4nWY0oXpUsYJcsYZMvYJkuXpotXZwuW54uX50wZJUuZZczaJUvaZQsapMxY5M2Z5I4YpE3YJA1YZE5X442Zpc9ZJc9Z5s5apk3Z5dBZJpDaZdDa5ZBZJ1AYp0+YJ4/Zp8/aaBCap4/a6BDbJ9Ba509bp5BbZw9b50/Ypw8X5w7XJk6YJw4Yps1X5k9XZY+WZU+X5VAXpE/XJNDXY9AW5BDW45CWphAU5g+V5pCWJlFWJdGVpZGWZZHVZo6Vpk4VJg3Vp06VJ48Vp4+WJ0+VJ9AWJg4V5Q2VpM1W5Y1W5QzXJg1V5M4U5I8WJA7V408Wo86UpA5T486T4w7To84S484S5A6So43UI8+UI1ATopBUI9CUpBCU5JEVJFGVZJITI1ASYxASYhASYo8SYg7SoQ7SYg4T4U8UYY8UYg+S39DTYVFSYJBR4FAR30/Q4E+QYM9QYU9P4I8SX89Sn07THo8S345TYA5TndBU3pDUHxGVHhFUXtIU3lISnhESXdCSHRCSHlGSnpIR3dHSXpKSHhARnY+SHU9R3M8RXg9Q3k+Qns8Qnw6QHw9SnU9THM7THE8TW87TnQ6UHU8UnY8VHU9VXM7VHM5V3I8TG9ASmtBTW9DT3FCUXFFU25ESG9BRWw+Q29CQ3FARHFEQ2pBQmk/P2s+QmZARGVARWRCRWQ+P2g8PGQ9PWg4Pmo3Pmw4P2o1P244QGw0QG41OGI5NGU8M2Q9M2I+OGA8OF46Nl05Nlw3OVw8NF46Ml44MF80L146MFw8MF0+MFo8MmQ2MGU3LWY2LGM2LGc4OGQyOGcyOmczOGMwNmEwNGIxN2gwOGowN24yNmsuN2orOWsqNmgrNW02N204MWs1MG40MHA1MG4yN285OW87OG4+Nmw9OXE8O3I6O3U6PXY4Png4OG5AOG1CN29EOHFEOWtDOWpFOmlBNW9FN25JMnBIMHFGLnBHMHNGNXBOOHVNOHZLNnVJOXBQOG9SNW9VOm5TNnJTNXRVMXZUNnZWOHVYOnNXOHVaO3NZOnNbMnRRMHRQLnRRLnJSMHNOLnNMLHVRKnVSKXNRJ3JSKXdTKnlVKXtVKnhXKHFNKG1OKHJLJnNKJXZLJnRHLGxRK2pRL21OMGpNMGpLMWlPMWdKMmdOMmZMM2RLLG1TK21VK29XLnBYLHNaMHJbJ21UJGxUI2hTI25SInBUInBWIXJSIXJXIXRUIXRWIHZXJmlRJmdQJWNSKGVNJ2RLKmNOJ2JKKmFNKGBLKWRUJ2FXK2RVLGJXLGZXJGVZIWFZI2daIWZcJWhcIWRWH2NVHl9UHmRTImBTI11SIlpUJV1RJ1pRJFtYIltaIllbJlxaIF1ZHl1bHFxZGlxaHV9cG2BdG15fHGJfHFtXG1pWGldWGVZVG1pTGVpSHVhSG1ZYG1NZG1NbG1FcHVJYHVJVG1FUHFFRGlBQG1VdGFRgFlVgG1dhGlZjHVhgFFBjFVBlFU5fFU5dFEtcFUtZFElYElFjEFFmD09mDU9lD1RmD05oDUxpDk5tDkpqDUhrD0lnCk5sCU9uCE1wCEtvBlBtB1FrBVJvCE1yB0t0BUpzBUh0B0x2BEtyAUpxAkluAEhtA0ptBElqBEdqBkZrBktpBEZoBENnBkNlB0FlAkJmB0VkCURiCkdiCUljCERgDEdiDUldEEhhEEZgDkVhDE5eDlJfCU9eD1FcEFNbDVVcEVNYEVdcEFldEFpZElteEVxgEVpiE15hDVtbC11ZCV1aCV9cDGBWDWJVDGRXDmVXCmRYCmZZC2ZcDGhdB2daC2RdDWNfD2RfEGVgDGFfCmBhCl1hClxgCV1kE2RcFGZdFWdeFGNaFGFZFGBXFF1WFF1UEmhcEmpcE21fEWxaEGpfEGtiEmtkEmxlDmljE2ljFWhlF2pkGGtmFmZkFWRjGGVnE2NlF2tiGnBkGW1eG29eGmtdFnJjFnRnE3NiFHRgFHZfE3JeFXBnFXBqGHBrGHFtFG5rFG1tEnBvEmtuHG5rH29rHGtsGmpuGmhvGmxwIG5mInFkH2xkIGpkIGhiIWlmIGZiIWZmIWVkH3JmH3VlIHZoIHhoHXZkIHVqIHZsI3duHnVuHHRtHXdwI3NtJXJuJnFqJXBwI3ByI3JzIm5yKXJtK3FrK29qK25oLXFtLnRuLnZsL3htLnlvK3lvL3twKm1sKmtrKGptKGpvLGlrJmhsJWVuJWNsImhtIGdvImttJWRwJWFxIWFxJmFzJV50JWJ1I11wIVxwHVxyIVlvH1hvIlltIFx0H1x3Hl93HF54IVx5H2B2HWN2GWN0H2V1IGZ3IWh2Iml0Imp4GWFwGmBuGF5sGV9qGVxsGF5zFlx0FV52E112F1p1Fl93FmB5FWN5E2R6GGB7FmR3FWd3E2d0E2l0F2h2GGp4Fmp6Gmt4E2VzEWVxDWRxE2RvEWRtEGZrEWFsD2VpD2FqDmNpDWJnDl9yDGB0CmBzD11xDVpuEVxtDVlsEVtrD1pqDWB2DGF4CmN4CWR5DWF6C2V2C2d2CWh0B2l0DWl2CGZwBmRwBGRwCWZuCmhtB2ZsCWttBWBwAl5yB15vCF5sBl9qBV1pBmFqBV13A1x4A2F3A2J6B1l2Clp5CFh0B1hyBFhyCFdwA1hvB1duBVdtB1d6CFZ8DFZ9B1R+C1R6DVN5DlN3DFN1DlB6DlB9EFN2EVNzElFzE1B0ElZzElZwEVd1ElFwFE9vFU9tE1BrEkxvF1BtGFFrGU9qG05rGlNsGVVuG1RpF1ZtGk1mHE5kG01iGEtlGUlkHU9kH1BiIVFiI1FhIlJlJFNlJFNoIlNpJFZlJldmJFdiJlNpJ1JrKFRsKVZrKVBrKFRvKVZwJ1pxK1ZxLFhzLVpyLVd1KVpuKVxtKVxqKlppK15uKV5pK19lLWBmJ2BmJGBmI2FoI19kIWBpIV5lIF9nK11jLl5iL2JhLlxgLllhL1ljLlhfLGFfLGNeKmRiKmNcLGdfK2lhK2tfK2tdLWljLGtkKm1gK3JgJ3BfJm5eI29eJm5bLXFgL3NiL3ZgL3diL3ZeL3hdLXxeMXZaMHpZKXpeKX1hJ3heJHlfI3tdJHlhIXxeInpiIHxgHn1hKntlLH1lLH5mK3lnKHVlJ3dpJnRmLnxkMH5jL4JjMn1iM3tjM3tlNHphLoBgLIJfKoNhKoVhK4FdLYBbLH9ZL4NbKYJiJ4NkKIRmJ4VnJYFkKoNnK4RoLYdoLYhpLYNqLYdlLolkLI1lMIhiModjMYthNIZhK4piKYxhJo5jKIxfKIleKo1dJohfJYtmIotmIYxnJY1oIopjH4piH4hhH4hfH4xhHY1fG45gHIteHYdiHYRhG4NjGoZfGIZdGYZaGIZZFoldG4haHIhYHYVVHopYHoRZIIJYHn5WIYFaGn5ZGX9WGH1VGH9bGX5dGXtdGX9fGYFVGIFTG4BRGIRTFoVRFoNPFodRGH9PGH1NG35KFnxMF3pLF3tIF31HGXlHGIFLGYNJHINJHYRHF4VJFYRJE4ZJFIhKEYZIH4RMI4NMH4VOHodPHIdOHohRIIBLIn5LJn5JIXxKIHtIH3lHH3dJIHhFJ4JGKYJGJIFDI4BBIX9DI38/JoRHJohKJYlIKIlLI4tIKINMKYFOK4BNLYBOJ4BPJYFRJH5RJoJTLX1KMX1JK3tIKnpJLXdKKnhNLoBIMIJHNINJL4RFMoVCModFMINLMoRNNoNPMIVPL4dOMYVRLYhQM4BONH5POH5OM3xQNHpQMXxSNn5LN31JO39KNn1HOH1FOHpFN31DOYFKOoNKPoNNOYZKOIZIO4hLPIJRP4BSOoJTOoRVOIZTOINXQ3xOPXpOPHlQP3hOQH5LQn5JRoBJQX9HQX1FP3xFQX9DRYNMRoRPRYJQRIZLRIZJQoVIRoZHQYVGRYZFQ4ZESIVQSIVSSYlVS4NTTIRVSoRXSIJXS4VZSolRS4tRR41QTIxPTY9PTZBNTZBRSY5UR5BURpFTRJJSR5FXSJNRR5RPRpNNRJRMSZZPR5FNRpBLQ49LQY9KR45KSo5JS4xJSotGQ45NQI1OPY9OQIxRQopRPotRQolTQJFPPpNQO5VNQJVRP5dSQJlTQJlWQppSP5RMPpVJO5RHQJZIQJdFP5VDQJNEP5ZCO5BHN49HPI1IP41HPoxEQYxDQYtAP4o/Q4tANpFMNZRMM5RNNpBON41RNYxNNpVKNZhKMphJMZlJNplJMpZHL5VGK5VIL5NELZNDMJFFLpRKLJNMLJRQLZBNLY9KK49JLo1KK41HLotJLIpFLZdOLphQK5pQK5tSMJpPKppPJ5tPJJpSJptNJZlMJ5hKI5hMJZZKI5ZKJpZVJJVXJZNSI5FOIZVQKJdWKZZYKplZK5pYKpRZKplbK5tdKptfLJ1hLJ9gLJ1jL51dMp1cNZpeM6BdNaBdNqBbNqBfMpxhM5piMpdiNJZiMZtlMJdhMJVgMpJeLZJeLJVhMpZcNJVaNpRbN5NaNJdYMpdXMZVVNJRUN5ZdOZVeOZJfO5FfOpdgOplfPZpgPpxgPZ5fN5JhN49iN4tgNY9jNZFlNpBnN45nN5JpOIpaNI5aMoxYNItWMopaOY5aPI5ZPYxbP4taPZBYPYxdP4tfQIdfPoxhPIhePIVePIZaOYRePoJbP4FZP39ZP35bQoJZP35XP3tXQHpVQXtUPHpWO3tbOHtYOXtdNnxaN3xcNnxeQXdWQ3ZVQnNUQHNWRXZWRHVYRnhWQnJSQXBRP3JPP25OPWpNP25KQnFLQnRKPXJHQHZIPXVGPndGOWlMOWdKO2dJOGZJOGRIN2NEOGFJOWFLPGFLPV9KPmBHP1xIMmhDMmpFMGRFMGJGLmFHMWBDMWpALmxBLWtDMGw8Lm5AK29BKW4/J25ALHJBKXNCKnZBKHdCKHlCKntCJnpDKm49KG07Jmo7KW05J2dAJWZAKmU+KmI+KWI7K2E/J2hCJmlEIWhDJ2pGKWlHJWtIKmpJI2xCIXA/IW9EHG9EHnNEIW0+IW47IGw5H204IWo5IGg4HWY6ImY3JGc3IGQ1JmQ2HGg3GWU2GmQ0GGk3FmQ3E2I0EmQ1FWA3FVw1EV42E2EyEWIwD2ExDWMxEWAuE2EsE2AqFWEoFWAmDl8yDF8zCmE2DFw0CVs1B1wzCFwxBVw0DWI5DmQ5DGY5EGE7EF88EGU4EGg4EWk6Ems6Emc8E2g+Fmc+FmU8EmdAF2g/GWVCG2tCG2s+HWVBHmNDHWJHIWFAIWFFIF9AHmZGHWdIG2dJGmdLHmtLH2pNHm5KF2dIFmVJFWRLFWhGFmtFFWxGF2tEF2NHFmBIFl5LGF9GFl5EFVxEFmBCE1xCFF9AE11AGGBRHWBNIWBMHlxMFmRQFGNQE2NSFmdQGGhRGGhUGmlVGmlYE2JOEGFOEGBKD2NODGJOD11MD1xKDVpLDFlKEVpKEFpGEldHDFtNCVpOCldPC1dRCVVOCVNPDFFRB1FODVJND1JNEVRNElVLEFBLElRPFFZPFlVOGFVQFFdSEVlSEldVF1VMG1hLGFNIF1FIFlBFFlJEFVJBFlBAFFRAH1VMIVROI1VPJVVOIlZRI1lIJFdEJlpJJ1tHJ11GKVpGKF5FKltEKl1DJVVIJlNGJFFFJFBDJ1FIKlJJK1NGLFBFIlFGH1BFHlJDHlFBHlBHHk5JG09MG0tKHlZCHlY9HllDHFpEG1hFHVxFIlZAI1U+I1M6JlY+J1g+KFQ8JlpAIk89IE49H00+I00+KEw8KE8/Kkw9Kk4/HlA7HE87G084G1E3GlE9Gk43GU41Fk81FlAzGEs0G0ozHEoyG0k1FU83E1A4ElQ3ElA6FFE8GFc1GFU0GFg6Flg8F1k+FFo7GFk1GlkyHloxGVwxGlwvGV4zHVo1IFo1IVk0I1kzIFo4Hlw5H185HVw7HmA6HF48HGA8IVY0I1QzI1UxJVQwIlI0IVYvIVYtJVgrH1csI1ouJFwtJ1wuKF0tI14uIV8tIV8rH2AuKloxLVkvKVk0KFs1LFg0Kl01KlcuK1UtLFcrLlYpKVMrK1kqLVspL1wqMF4pK10oMFssMlstNF8rM1kuNlsqOFwpOFonNlknOlwqOlomOlgkPVclP1glO1kiO1cgOFohPVQmP1MmQFIkQ1IlPlEoQE8oP1IiQVEgQlMfQlMdQlUgQ1cfRlceR1UfQ1ogR1gdSlgdS1gfTFkgS1UfTVUiTlMhTVEhTFQkSlclSFckS1gmUVMhUlEgUk8iUU8kVVIgVlMhVE0iVEskVkwmVUsoVUkjU0ghUUgiU0kfV04lWFAnV1IoVFIoW1EmXU8mXU0nXk8kX0smYE0lWFQoVlYoVVcsVVcmU1UqUVQrUVQwT1IqTVIsTFMuTE8sS1IvS1AuVFIuVVIwVlQzV1AwVU0wWFAyVU0tV1UwWFcwV1oxWFwxWlgvU1sxUVszUFwzUVsuUV0tUV8uUl0rUlk0UVk3U1w4UVY3UFQ2UVI3TlQ2UFo6UFw8Uls+Ulk+Tl09U11AVFxBV10/WVtCW1tCW1g/XVpEXFhFXlo+X1k8YVU7YVs7YF08X1w/YFY/YVRAYFI/YVA/YVRDXFA/XE07WVE/WVJCWE8/WlBEXFE6XFE4XU41XFM3YUs4YUk2ZE45Zkw4aE05a0s4bU05YEo6X0g7XUU4WUU0V0o3VUk1VEw6XEgxXUUvXkowXkouX00tYEktXkAxYkM1ZEU1ZEUyZUMxZEcxWz81Wj0yWj83WD03WUE4WUAyV0AvWD4sVkIvVUIsVEMxW0EtXEArXTwpXkEqYEEoYUMoY0MlZEUkXDcsXjcxYToxWDctVzcrVzUqVTkvUzcuVjgxVzkpVzknWTgmWDckVzwmVT0nVD0oVD8lWzgnXTYmXDIkXzcnYTUmZDYmZDgmZTQoWzMoWjEpWDAnWS4mWTArWzAtWjAwXS4tVzEmVS8hUzIlUTEjUTInVzIiWTIfWi8dWjQfWikfXSwjXikjXy0jUikhVSglVSYmVyQmWCIkVSceUycdUikcUCkaUiscUi4cTy4cTi8bUi4ZTC0fTSwjSiseRyseRiofRi0cQysfRC0dSi8iSi8lSCsmSDElSisqSCsrRi0rTCwsTS4sTC8pRyktRSkuRSswQy0wRScvSy0zRiw2QSw1Qik3STA1STM5SzM0TDMyTTU2TTUwTjI+UDI9TC8+Sy9BSi09TTQ/TjZDTDVETzg/TTpAUDg9TTw/UDZEUDlIUTpHUjVIUjVLVDNMVTJKVDNOTjxKTjxNTjtOSz1KSjxISz1FS0BFTz5NUD9QTj9STj9UUUFQTD9RSUBSST1TSDtSR0FQST1VSDtXRjtYRT1ZSjlYSjpbTT1ZSz5dRDlZQjpaQjpdQjheQDhZQDhXQjhVPjhWQzxeQzxhQDxiPzxgRD5hRz5hSEBjRkJjSkFjQDtkPj9mPzloQDppPzdnO0NqNz9oNz5qNj5mOz9rPEBuP0FtP0NuPD5vQEBsQ0FsREVrRD9qQUNoQUVnQUlnPkdqPklrP0ptQExuO0lsQUhuQ0hwRktwQ0ZxSEtsR01rSE9rSUlqSkdqS0ZsSkVoRU1qRE9pQlFrQVNqQk9nQVFmQ1FuQlJvQ1VwRVVxQlFyQldvQllwQ1h0QFtvRVtyR1t0Rlp5SV10RF13Q115QVt6QVp8QV96QmJ6Q2J9QWF/QFp4P1d4QVV5QFR7Pld2Q1V4RFN5RVR8RVJ9RlN3RlZ8R1d+RVWCR1l+Sll9SFqBS1x9Q1eAQVeCQFSEPlmBP1OAP1GBQVCCQE6EP09+PVB9PU96Pk16O095RVCFRU6HRVKGRVOJQ1KKQ1GMRlWJR1aHRlaLSlWIQVKJP1GKPk6NPFKJQE2JQEuJQkiNQUmHQUeHP0WIPUaIP0OHREyLRkuNRkuRSE2MQ0+SRFGTQ1KVRlKSR1STRFeRSlSSS1aTRliURVqUR16URFuWSFuRSl2QSmGOTFuPTl2OS1qNUFyMR16ORV+MRGGORGONRF6LRF2IR1yIQluHRGGQQ2KRRGaTQWGTR2OTSWWTSmmSS2SUSmiNSWeLSmaKTWiNT2iPT2aRUGqQUGeTUWqSR2mLRmiJRmqGRmyHQ2mKRGuLRmqNRmmER2qCRWmARWaASWqBSmx/S2uDRGp+Q2l8R2l7QWp7RmZ3SGd0RGR1QmR0QWZ1QmRyRmp2Rmx0SW11Sm1zRW50RW93Qm10SW13TG14TWt5T2t6S296TWd5UGR3S2V5S2J6TGF3TmJ7T2d1UGZyU2ZzVGVxT2dwTWZvTmRtUGNuTWRrVGd1Vmd1VmN3V2l3Wml3Wmh5W2p2WWR1WmF1WV94XGF0XV90YF9yYWFyYF1xXGJ5XWF7WmB/X2J8WWJ8V2N+VGB/VWV9VGZ/UWV/VWaCVWB7U156U1p9U114Ult3T1x3U1l2Tlp2UVd1T1h1TVZ0V1t8WFl9V1l/V1iBWll8W1l6XVl5WlZ5V1yAV1yDVVqGWF+EV1+GWF6IVWGHV1+KVWKJVWGNU1yDUFuDUFiDTleDTl2CTl+ETV+GUGGDTGGHT2OFTmOHTmWIUViBUVWAUVGCUlV+UVN8U1R6UVF9VVOFVFOHVVKJWFOFWVOCW1OCXFOAXFSDUlWIUVWKU1aOUFOLTlSNTlaOTVKNVViLVlmMWVmPWVaNXFOKWVKPYE+LY1OMZVKIZlWKYVCIYU2HY0mHYE2EXE2EXEuCZ0yMZ0qNaU2IaU2FaEuEak6EaEuBak6BaU2AaU1+aE6PZk6RZ02TaVKSalKNYk2TYlCUYk+XYkuUYEuWYEuYXkqVYlKTYlSVYFWUX1WSZFWVZVaSZ1iTZ1mVaFmRX1eVXVmUYFyTXFqWXl2PXV+PW1+QXlyMXlmJYVqMXmGPXWSPXWWNXmWLX2WRXmeSXGiRX2iUW2eNWmiLXGqKXGuJWGmLV2iNV2mJVWqOXmuMX22MYW2IYW2OY2uLZWqJZWaHZ2mKY2mFYWiEY2eCY2WBX2mDXWeEW2iDXmSDZGmAZWl+aGh/aWd+Zmt9Z2p6amiDa2WDbGSDa2mFamyFa2yDam2HaGGEaGF/ZmCEZ2GJY2CIZmGLYmGKZGGMY2GOal6Ba11/aFp/bVx/b12Ab2CAcVyBaFx7Z1p6aVh5all3ZVt4ZFl2ZF15alR5aVJ3ZlJ3a1N7bFB6bVB4a097alF1a0x2ak9xalFwalRxaVJualVvaVRtZ0l2a0d2ZUh2Y0l3ZUV3Y0p6aUdya0Zxa0pvakVvaEZubERtcEpwb0lsc0lwckdycEZycU1tcE5qckxpck1mcVBqb1Jsb1RtcVRub1ZrdEtqdUpodEhndUdld0lqeEprc0ZocURnb0RjcENpckFqc0Jscz9pdUFtdD5qdT9sbkdmbEdka0pka0tmakZkaEZmZUdlZ0NoaktjaU5jZU1iak9hZk5mZE9mY1FoZVFqY0xoYExoX0poYlNnYlVpX1VqX1ZrYldnX1dlXlVlXlllW1NqXlFuWlFpW05pWlJuWlJxWlByWk90V1NyV1ZwV1R0WVhxWU5wWktwXEtxXUlyWUpuVkpuVUxuVUhtXkxwYExxYU5zY05zYkxuZEtvZUpwZkxtXlF4YFR0YlVxYVdxY1huYlpuYlJ5ZFV8YlB9Y1F/YE59YVZ+YliAY1eCYlaEYFmAYFyCYl2AXl2CZleFaFmGaFuFaFWEaVSGalaCaFmIalqJbV2IalqMbVmHcFmGb1SGclmIcleKcVeCcVSBc1OBc1GAcVV+c1d+dVZ9c1l+dlKEdk6GeFOFeVWEfFWDfFKBflKAck6Ib0uIcFCKcVKLclOKb1ONcUyEcEuDcEaDcEyAdEmEdUeEd0eCeUiDd0aAeUZ+eEh9dkh8eUN9ekl7eUt6eUp3eEt2e016fkx5eUh3d0V0eENzfEZ0fEZxekZwfkZwdkV2dEN2cUV5dUB3dD52cT52dTx2cEJ3cEB8bD94aj96a0B1bUN9bUN/bT+Aa0SAakZ+a0V8cEGCcT+Dc0CEc0KGcDyFbzqGbTqKcDiGbzaEcDSEcDOGcTKCcDyJcD6Mbj+MbT+Ocj+MdT6Mdz+Md0GNeT6Ma0KKZ0GKbESIaUaIbkWJZDyJaDyFZTuEaT2DZzmMZjuPZjqQaTeNZj2OZj+QZECQYkGRaECRYUKNX0CLXkGKZEaMYkePYEmNXz6LXj2KWz2KWj2JXzqKWz2NWD2OVUCNWT2RWj+SXECQWkCUWESMVkWJWkaNWUiMWEqOWkqLV0yNWkyKWE2LV0+LWEOGVUKDW0KEXUaFX0OEX0aFYEGDY0WEY0CDZEKDVD6GUj+HUD+GVDuHUkGJUEKKT0SITUWIUEOMTkSOT0SQUUSRTUWSUUeFT0eBU0iEU0qGVkuFUkyFT0KBS0J/UECAUD5+Tj1+UUB8TEGDSUGESEOERUOESUCGST2HSDyHTD2HSUWER0iBRkqBSUmFSEZ/R0d9SUl8SEp6RUd8S0p9TEx9Tkx5TU1/TE+DS1B/Ukl6UUd5T0V5VEh8VUp9VUV+UkZ2UUV1UkJ1VEJ3UkVyUkNxVUZyUkB0Uz50Vz10UTxzUTxwTz5vTj9wUD5sVj9xWD9xXEBzWEBuWUJ0W0N1W0J4XUJ4WUZ2WUB4Wj96XTx7Vz57WD2AWDp+WDyCWDiAWDqCWzx3XTp2YTl3XDl0WTh0WTd2WDhyYj51ZT54YkB0YkBxYj5wY0FwY0B8ZT1/YUF9YUR9X0V+Y0V9Yjl9ZDh8ZTZ8YDh+Xjp+YDaAZjd4aTd5ajZ4Zjl1aDdzZjZyZDRzYjNxazh8bjV9bDp+ajOAai9/aDOCZzWDZjSFZDSEZjWHaTF8aTB6ay95ay13ZzB4bTF5bzB4cDJ3cjN2bzR4cDd3cDd0bjdzcThzczhvdTlwcTxwbz9wbTxwczZudTVtdTZqdDhqdDJscjJqdzZpeDdndjdjejdmfTdnfTZpfzdrfDRqdDVmczRkcDVicjFlcDBjcS9hby5kbjllcDtkcD1kbjpnbThpbDZobThrcDphcTxgcD5fcEBgcjtebj5ebD9ebUFcbkNda0FgbkNYbUZWaEhaZURXZERbZUBaZENeZT9cZEBeZklXZkxYY0xXYktVZ05WZ01UaU5YakxTYUxZX0xYXU1UXk5aX01dXk5fXUxhXE1jYE9VX1BSXk9PYVJSYFNPYlNNZFROZlRNaFVOZ1JLYU1RYUtPY0lPZUpPZ0dRaUlOXUlRW0dUWEZVVkdWWERTWUxRV01QVU1MVk9RVk9TWFFQWk1KWUtJWEtHXU5KWUdJVkdJVUZHWkRKWkVNXERKVUhLUkhLUElHUUlNUUdPUUdRUEVTUEhWUENXU0tIUk1GUktEUUtCVE9GU1FIVVNJVlNHVFRLVUlBWEhBWEc/WUdDWkY+UURCTUNAUUJFUURHU0FFTkZDS0dDSUg/SklETUk/TUo9TEg5T0w8T049TlA7T1A/TVI8TlI+T0Q6TEI3UUM7UUA5U0Q6SUE7RkE4SEE+RkY1RUc0REc5Q0c7QUU7QEU5QUM9SEY1SUYzSEQvTEczTEk0TUcwT0o0SkIySkAxRz4vSz4zTj0yTj0wTz8zQz8yQD8vQkA1Pz02PkE0Q0IvQkMtREMrQ0MpQkYuREcuR0EpRz8oRz8mSkIqS0QqTkQqT0QoUEMnUEAoUUMlRTspQjomRjkrSDksSjkpSTYoQTwpPj4nPkAoPTwrPzgsPTovPT4lPUAjOkIiP0AhQT8iP0IfOT4iNz4hNT4lNzwfMz8hLz0gMEIjMUMlM0QkMEQnNEYmMUYoM0coNEgpKzsiKT0hKj8gKjolKTsnKTsoJzshJTwgIkAgIzsfJD4kIz8lJEEmJEIoIj4nJkIlKEQmKUUqJ0YmLEAqLj8pLj0oKj8sMD8qMjsrNEArNDsoNTgoOTkpNTclMzgkNjUlNDchNzYrOjEtODUvNzcwNzgzNzozNzs2Nzk3Nz02OzMqPTEpPy4rPjEmPDIkPjIiQDEiPDIgQDIsQDUwRDMtRjIuRTIqQTIyQDM0RDI2PzE1QjY2Qjc8Rjs5RTo1RDQ+RjVASDVAQzA8RDBBRC48RTZCRjdERjVGRDVIRTlFQjlGRDtDSDRHSTNJSjRLTDVLSjFISS9HSy1GRy5JSTRNSjVPTTJPSDVRTjVRUTBTUjZSUjhRTjJVTjFXTixXTDJYSzBaSTFcSzRdTTNeTC5USyxTTipSTihTSixRRy1SRS1QRixUTytQUSpPVChRUitNVCpMUCxLUytTVStVVSdXVS1WVi1YUSdZUSRXUSNYTidZTilbUCpcTCpbUSVVUSNTVB9TUCNRTiBPUiBOTh5OUh5NUB1NVSNUWCJUWCFWWiBWWiRTWSZRXCdRXiZQXyZOXidMYSVOVx5dVyRcWSVdWidbXChcWypdUx1bUxpZUhlZUB1bTx9dUSBdTR9dVRpYVhhWWBhWWRdUVBlUUhlUURZUUBtUThZUThpUTRhUWhlYXxlVXRZYXh1TXx9TXiFSXB1RWxpQXBhQWRpPXBZPWBhOWRZOYSFWYyNUZCJSYyFYXyBbYh1aXh9cYRxcXx1dXRteYyVUZSdTZihVZilWYylSaShUbSpRbSdWbylXayZYay1TbC9Rby9OazFRaTJRaTVSajZQazhNZzdOcC9Scy9SdC1Rdi1QdDBUcy5WcS9XcTBZby9WcytQdipLcidPciZScyVNcSRScytLcytJcS1Iby1JcylHbyhIcSVGcC5GbC5Eay9CbzFDcTNFczNEcDRGaypDZipEaydDbSZCbihAbiRBcCc+byNAcCU+ciQ8aCtHZitIYi1IZyxLai9KZzFMazFLYzBEYC5DZTJDZjRFaDVEZTVHaDZGZzZHYy1BYitAYCpBXylAZCo+YCdEXCdFYSZHZCVGZSRHZCREZyNGZiNEXCxHWCxFXS5KXC1MXzBLWi1AVis/Wy4+WSY/WyQ/WSE9WSBBWR49WR5BVxs+VSVFUSZFViZIWCRIWSRLWCFHUi1EUy5GUTBHVS5HUCg+TCY+USg8SiFBUCBBTx5CUh8/SyRFRyRFTCVISiZJTSRJSSdDRyhCRiZARCZARyU+RiQ8QiE9RyM6SSI7SCU5RiE/RR5AQh9CQR5CRh1CQyJDQSNEPSNEQiVFQiRIQyZJQCRJPyRBPSU/OSI+PSY9PyU7Pik+PSQ5PB49ORw/Ph08OhxENhxFPBxGOCBFNSFFNSNENSVFNSFINh9JNB1KOB5KNBtMOBxLNhtMNxlOMCZBMCg/MiM+MyE+MyBBLyZDLSdDLilFLCtFKyZFKCZEJyhFJSlFJClCMClFMStHMyxGNC5HMSpJMixLLy1MMitONixCNzBBNitANCs+NS08NC47Nyw7MzBBMzJBNTZCMDNALzJCNDNFNTVGOTdHNTRJNTVLNTRNNDJNNTZPOTNFPDRFPTVDPzZDPTFFOzRBPDY+OjlAOzU8ODU8PDU6Pjk9Pjw9Ozw5QD08Oj48OD87Nj48NT8+Mzs7Mzo+NDk/Mjk5MDo/LjhBLDlAMTtDLz1DLj1FLz9BLD9FLUBCLEFEKkJELTZDKzZDLDdHKjNDKDdHKDhJKjdMJTlKJTlMJTxIJzRLKDJMKTNPKzJPKjFLJzRQJzVSJzJVJTdTIzVTITZVIzNSKjRVLDJXKjJZKzFbLjNXLzNVLjVYKTRaJzRcJjJcJTFeJjdcJTJaIzBaJC1aIytaIjBXJy1ZKCtZKShcKyxYLSpYLCdXLiVYKipgKCxiKSxkLSpgLi1gLilfMC1iJixhJC1jJCtlIiplIi1hJixmJippJStqJC1qKSppJCpsIytuJC1wIy9xIilwISdvJy1wKC9xJzNwKy5xKyxvLixuLy1vLyptKDFtKDNrKTVsKTdtJTRrLDVrLjdsLjtqMDVrLThoLDpmLjtlMDplKjxnLj1kMD9jMT5hMz5gMDxfMTtdNTheMTxbNjxeODtfOTdgOT1hODdkODNjNjdmNzloNjVoNDViMzNgNTBdMTRgNjRdNzRbOjNbOjFZODZaOzNdPTJePi5dPzNgOy9fOixgOSteOildOC1iOC1cNyxaOilXNi1YPCxYPixXQChWQC5XPylaQCdbPyVbPyNaQSdePihfPCVbOyNaOyJYOyBXOCRbOyRWOyNUPiFSOyVSOyRPPSdSOSJPQiJUQiBVRB5URCRVRiRURiVRRiJPQR9XQRxYQRhXQBxbPh1bPBxZPR5cPhlTQBhRPxdQPBpSQhpRRBlQRRdRRxZQRRtPRRdURxZVRhNVRBJURhdYSBJWRw9WRg5YRQ1YSg5WSw9YSw9URhBaRQ9cRBFeRRNeRw5eQhFeQRNfQBNiPxJjPxRbPRZfPBRaQhVjQhVmQRllRBVnRRNmRBZqPhdoPRpoPhtqPhpsOhloPh1qPh9sOx9tOyBvPyFsOh5sNx5tNRxwNR5rOBpuNxhvNxZuNxZsOBRvOBFuOhFsOxNrNhBtOg9qOw9oOg5mOA5mPg1oOw5kOg5iPA1gPg5fORBhOwtfPQpdPAtaOgxaPAddPgtZPgxXPgtVPwlVPw5WPAtTPAlRPwxPOgpPOQ1QOg1TQAhPQghOQgpLRAtLQwZNQApKQBBIPwpGQAhFPgxEQghEPQ5KPBBLOxFJOhNJPRJMPRFPOhRPOhJSOhBHNRFHOBBBOA1DNhNEMxREMRNDMhJBMxdEMRhELxhCMBhGLxJELhFDLBJBLBE/LBRBKxY/KxY7KhhALxY9MBY7MBQ4Mxc8NBY+Mxo9MRA7NA86NA44NRE6OBE6ORE8ORI+OBQ4Ow87PQ89QBI8Pw08PhI/PxVAQxZAPhZCPBdBPhVEQxNCRRBDRA5ERRRFSBRGShRESBZITBVGSxZIRxdKTBdJSBhLSxhLSA9DTA5FSQtBSglCSQdBTAhCSQxISwxKTQpKTgpLSQtMTQlITwdHUQhGUwdGUAlEUgpCUwxCVQ1BUQhAUQ5CUxJDVRNDTxJCThE/ThE9SxFAUxFFVRJHWRJHVBBKUhFLUBFKUhNNThJLUBROThNNWA9FWg5EXRBCWgtEWRFBWhI/XRZAWBM9VhM+WBE7WxdEXxhFWRhGWhlIVhhFXRRGYBRHZBVFXxFHYBFKXhBMXA5LWg5MWQ9OWQxLYRNCYxNAYxZAZhdAYhI+ZBA+Yw5AZQw/ZApBYho/YxtBZRxAXxs/Xx4/Xho9ZBxFaBxGYxtHYR1IYh9JXx1GahhEaxhBbRdBahVFbBRFaRlAaho9bBs9bB0+aBs8Zxk7ZBo5ZRw3cBw8cSA6cho6cRg7bhg7bx44ayE3bx80biEycCMxciMybyQvbiQ3bCU4byg3aig7aiQ7bCk1bCs0bC01ay41aysxbCkuaScwby42cjE1cC86by07cTE7bC48bzQ2cDU0cDg2bzYycDgxbzMwcjk2cj00dD0zdTw4dT45dz87d0E9dEE/cT81cEEzc0Iyc0M0bkIzdEIwdEYtd0ItdUIrdz8udkcxeUsyc0oydEk1cUo2cUg4cEw2eU8vd1EyeVAte1IteU8qe1I0elU0e1YyfVI2fU83ek04e1A7eVY1eFk1eFk5dlkzdFk1dlgxeFw3eF45e2E4e2A8fWI8f2E7gF86gWM6g2I4hl85hGU3gWU0gmg1f2YzgWo0f2gyhWI8h2E+hmFAhWJBiWI9iWQ9iGBCiGFEiWVDimBGil1GjF1Ii1pJjVlLhmhGiGlHiWtHhGhHgmdFf2hHf2lJfWdFiWdJi2hKjWlJjmhIjGZMimVNjmxJj21Ikm1LjHBHkXFHjHNHl25Gl2hIlWZJlmRIlWdMmW1KnG1GnW5Mm21NmmxMn3BHom1HonJFpHJHpXRGpHZFpXhFomxDo2pEpWlBpGpAomhEo2VFoWNFn2NGnWJFnmBEm2JGpmhCqGdAp2U+qGM+qmZBqmVDqmVFqmJDpWU+pGI9omM7oWU6omE/oV89omE5oWE3nmA4nGE2omA1oV02oVs0ol04m187l2E7nF09nVs8nFk7nVc6nVY9m2M7mWU8mWY4m2c9m2dAm2VBnGlBlmc6lGg4k2w7kmQ4kGg3kGM4lGw3lG83kG83lHA0knE6j3I7jHM5kHM9jnM+jnNBkHRCjXdDkXhDj3Y2kHY0knQ0j3k3jHo3ink4iHo4h3s1kHcykXcwlXYwkHgtkngrkXkpk3gnknollHowl3owmHozmnozl30wln4ulnwslYAul3k0mXY3mHQ3lng5lXs5lX04lH85kno9kX88kHs+kH4+m3Y3nXQ3nXQ7oHU2oXM2oXE1o3M3nHE5nG87nm88n24/m206nG04m283oG87o3E9pXE/pW46o3Y+oXhBpHc8m3VCmnVDm3g+nHo9nHo7nH4+nXw6nX47noE6mnBCmHBBl3JAl25BlW1Ak2tAk2tDkmo/kmZAlGY/jWo+jGtAi2s8i21Aim08im4+kWRAkmJBjmBBk2FDlF5FlV5BkV5AjVw+i1w/jltCkFpEjVw7i1w6ilo5i1g5jV03j1w4kFw6hlg5hlc2hVk1hFk6hFk8glc6h1U2hFQzg1I0iFIziFExi1M0g1Uxf1EvgFYuglItgk8shlAqgE8qgFAogVAmgFMoglEkgFQmgVMkgVUihkwriEwqhkomiUorikouikwmjkskik4ji04giFAjjEgijkgdjEQgjkMfkEIhjUAekUgfkkkdlEgclUYdlEwdkk4elUsglUgamUgXmEkVlkQXlEUWmEMWm0kYnEoWn0oXoEgXm00WoEwXo0wXpE4Yo1AYpEwVpU4aplAcqk4bpU8eo1Afpk0fqlIcrFIcrlAfrVAgrVQdrFYbrVkbrlkdrVoZsFAesU4gtE8gtU8esUwgtU8it1AiuFMhtlQhulMhu1Uhu1Yeu1gdvlYhu1Qdu1QauFQZuFQXvFIZu08atFQas1MWs1YatE8Zs04XsE0Xr00ZtUsXr00VrEkWrEgUq00Tq1ATqlARqlEVq0kYp0YYpkgZq0Uaq0IarEEYqkAWqj0XpkQXo0MapEEbo0IVpEMToUQboEQdnUQdnEUcoUUfpEUgoUgenEMfmkMfmUMimkEjmEEemT4flzwelzofmjkgmEQil0UllUYlk0cjmUYmmkglnEomnUkonUsllEYnkkoplEoqkUYqkEQqj0MsjkQokUwokU4oj08qjU4pklAmklInlFMoklQkkFAsjlEtjlYtiFUpilUmh1cojFYmiVkuhVwtiVwxil4wjFsxhFwwgl0wgWAtgF4yf1szfl8xflw1hGEvhWMvhmMshWUqhmUwh2cwiWgyiGg1h2EsiGEphmAnh2Alil8qjF8rjVsrkF0sgl4ngV4jgF0of1snfVooe1kneVgoeVgrd1cngWElgGIjgmMhgWIff2UkfWQlhGMihmQgiGIdiGUiimUghlwbiFshilgfhlcgilYehlUeiVQegVwcgV0agF0Yf1wef1ogfVohe1sgfFgjgmAagmEYg18UgmQZgmYXgmgYgWoWf2oVhmEXiGAVi18XimIUiGQTh2YTiGMQjFkXjlkYiFgXh1gVh1sVjVkUj1kTkVsUk1oVj1gRjVgQkFYQjFYOkF0UkV8Ukl8XlGAYkGEUj2ERjWARkGIQkF4ZkV4blF0djl0cjlsgjl8gjlsjjl8jjl0kkloblFgbl1kamFgck1YakFMaklQel1oYml0ZnF0ZmVwVmV4amWAcml8enGAfl2IcmV0fmlwhnVsjmFohnVofn1ken1cdoVYdnVUanlUXnVcXm1Mam1Idm1AdmlQfm08fmlMhmlAhmk8knlMWn1QTnlATolQTnVIQnFAOmk4Qm0wRnk8NmE8QlE0Qk04PlVAUk04Vl1EVlEsRkkkPkEoQj0kSkkcQj0wPjE0QiUsRi08OikkPiUcPiUURiEQRiEYMh0gLh0oLhUcJi0YSjEQUjEYWjUUYjkMTj0IRkUERjUARikcWhUgZiUsYjEwXiU0ai08WiEYchkUdhUcfhkgghkMdhkEbhEIfhz8cg0gfgkkhgUcjf0YjgEsggU0fgE0cgVAbf1EZgkglgUcpgkkrhEUoh0Img0Emf0cqfkgsf0cugEUue0gse0cpfUYpfkgwf0cze0Qyfkg1f0c3fkk5f0g7f0o9fUA0fD0ye0A1fEI6eUQ4fEM8eUU6ekY+fz4ugDwvgT8sgEIsfjoufzcvgTYtgTcrfTYvfTMvfTMyejIvgzUvhTQthTEuhTEwhzUthzcsiDcqhjktiDkohzsrhzsphjAtiSwsii0qhSsshSkthCcsgigrhCUtjSotjCgtiycrjisvjy4vjS8xkS8wjSYvjSQviyMwiSQwkCMwkiUxkSYzjyU0kigzjCEyih8ziCA0hyA2ix41jh00jhwyjxw2hiEyhCMzhSU0gyY2hyY1iCoziig3iyo4jio4jyw5kS03kSw1ki84hTA2hjA4gi01gCszfis0fCkzeikzhjI1hTY1hTYziTQ2izM3ijM6izE7jzM8jjA+hDg2hDw2hT03gTo3fjk2fDk5fTw6hD00hkAzg0M1hUExh0MwikEwh0QuhkM5hkY4hUg5h0M7iEY3iUk2i0g0i0Yzi0o4jEw3jEo0jkoykEkzkkkxjkwxkEg1kkc2kkY5k0Y6j0M7jUE6jkU9jkM/jkVBj0dBjkRDij0+jDs5jTw3jjk2jDw1hjs+hTg9hTc7gzw+hD4/gUA/fz8+gUI/hTc/hDQ/gjQ+gDU+hDNChjREhTNGhDVHgzVKgjI8gDI6fi85fy49fiw9fSs/fixBgCo9gCg5eyo/eilBeidCeiVAdypAdiw/dS5BdC9Bdi1EeiZEeCNFdiNGeyRIfCJJfSBIfSNLdh9Ddh1FdxxFdh5AdR5HdRxJcxtJcRxJdR5LeBtOdh5QcxhKcRdKcBhOchRKdBVJdRdJbRdMaxhOaxhSaRdNaBdKbRVQbRRTbhZWbxFScRZTchhUcRpVcRtXdBhTdhZSdxVUdRVQdxNPeBJRehBQbh1UbB5YbB5SayBSbh5PaxtWaRtYahpaahtcZxlXZhpVZBtVZhlTbBlabhlcbhtfcBdccRVgcxhechVidRhgdBdicB9dbiBebiFgcSBbdSBYdSBdaiFeaSJiaCFcZCFfZSRcYiNgYyZdYCZfaR5gaB1jah5naBpiZhphZRdhYxtibB1kbh1mcCBocRxlbyRlbidocCVjcCRhaSVoaShnailoaiVraSNsaiFraCNuaR9taCBvaCdlZyljZStkZS1jZylhaSpfaS1gaSldai5eaitbay1cbC9aYyplYStlYCpoXSpoXypjYSlpYShsXyZrXiVtXyptXyVpXSNoWyJqWyBrXyFoWiRrWCNsVSJqVyZtViBtVB5tUx1vVB5xUxtvUhlxVRhxURdwThdwVRh0WBd1WBV0WxVzVxd3VRl4Uxh2VxNzVxFyWRFwWxBwVQ9yWBJuWRJsXRRqVxNqVhVrVxdqVBVrXhduYBVvYhVuXRlwXBtvWhpuXB1wXxNwYRJxYRBvYw9vYBBzYBJ2YBB4Yg54XhB5YA9tYA5rYg9qZA5pXg1qXA1rWgxqWgtoWAtrYhFpYxNoZxNoYhVnZhNraBNsbBFsZxRvaRNxbBRxbBZwbRJyaQ1sagxqbAxpaAttZwlvZwtxZgdvaQ1oag1mbg5kaA5kaQ1haQtgag9gagteaw9dawxdbhJnchFnbhVocBZpbBZncBBqcg9rcw1qdQxqcQ5ucQxocgpndglkcAhmbwZobQVnbAVlbARpdhBgcg1fcQtecAlfcQpcbwhecAhcdw5jeRBkfRFiehBmew5gfQ5ffhBbfQteewpdewpaeQleeQlaeAlcexBdexRbdxNbdhFacxFadQ5XchBZcQxXfBVdfhdegBhafxdgfRhiehdifhlkhBRbgxRYhRVXhRJchhNehRRgiBJfgRNYgBNVgRZSfhFVfw9WfA1Vew5VfAtWfhlVgRtSfRpWehpWfR1WeRtZhRtWhxxShhtYhRtaiRxXhR5bhRhThhdRhRhOhhlNhhRRiBNShxBShg9RiA9TgxlOghpMgx1KfxpNfhlLfBdLfBZNexZKgx1OhCBOhyFMhCFQgSFRhSNQgSJUiB5Oih5Nix1LjB5JixxPjhtOiRtKihtHih5EiBlGiRZHiBRGhhVFiBJHhx5GhiBFhCFGgSJDgyVFgCRCgidEgCdCiSNHjiZFiyVKiSZMkCFFjyFCkSFBkR9GjSFBjCE/jSQ8ih8/iR88hx08hR49gx87hB85gSA8iCg+hyo+hiY9jCxDjy5DiytGiCtGiy5HhypIkytDky1FlS5FlCxBlCs8kyg/kyxHky1KkS1LlytKmSpLmStNmClPmyxKmy9JmzBLmi9Hmi1Omi1RmC1SmCxUnC9Sli5SlC5TkytTkitVki9RkzJRlDJPkzNTkypRkihSkyZUkiZQkSRQjiNRkSJNlyZWlidYliVamSZVmiVTmSNSnCZSlilYlSpbkylckylelS1amC5amDFZmjJZmzRZkSlajyhbjiVdjShYiyZZjSpYkSFbkiFdkR9fkiBZkh9Vjx5XlCJelSJgkyNikyJklyRgmSRikiVhkCZjjSRmjyhijSNiiyFiix5liiBghh5hiRxghRxiiBpghRphhBhhkBxlkB1nkBxpkhtkkhpikBpglBlhkR9okSBqjyBukiNqiiFsiR9rhx9riSNriiVsiSZujCdriihvjCltiRpqiBpthhhtihlpiRpviBpxhhtyhBp0ihpzihl1ixp3iBh1hR1xgx9xgRxwgyFwfx5yfB1yex90fCF0fyB0ehtveRtseB5pdxlseBdudxhqdxVudh5tdSBsdiNpcyFuciNtcSRwcyVxdCRzcyFzdiR0eCNseiVsfCVueyZwfCdyfydxfCd0fCJpfSFnfCFlfSJjfh9ngB9pghxpghtngxxreSFleCFjdSBkdyhkeSthdypmdClndCpqdixqciprfylffylkfy1mfipofSdafSJdfyFefCFbfh5eeidceClbeixZdCdcdSxccihdeyxcfC5cfi5afy9Zfi5efTBgey9ifTJhejFjezJjgStYgitUgihYhSZbhipbfitVfStSfi1ReypSeiZReSdVeSRReCVVeSNTfi9SgjNOfzNTgDVSgTJVhS9PhS9Lhy1QiSxPiy5PiipQgi1MgSxKfixIfilMgihLfTFJfzJGfDJLejFNei9NejNPezJGfDNDfDZDezdFeTNCeTQ/ezM+dzQ/fjdCfjlCgjlDgD1EgjxIgkBFhjtJhzxMiD5MiTpJijxHiD1GhTxOhT1QhjtShjlSgz5Qhz1UiDtWhjpYhDtXiT1XhzlZhTdbhjZdiDZdhDZahjRWhTFaiDJVhzBYiDBWhTVfhTFhgzFghjVjhzhjhzllhTlnhTpphzBihi5jhi1lhCxmiCxihylihShhiChkhCZhhCNkhy9nhy9phjNriC1rhCttgilthCdqgidsijFqizRrjTRpjjZpjDRtijRviTJvijZwjTJnjzNljjRjjTNikDBlji9kkS9njjZjkTdfjjpijTtkjTxgjzVbjjdZjDdYjjFcjzJYjS9ckDlYjzhUkT1XkT5ZkT1bkkBZjzxSjjtQkDpOkjxOjDxPjT9Pi0FPi0NPi0VNi0RLjEdOkDlNkjhLkTlJjzhHkjVLlTVJlDVHlzVFmDdGkTtIlDtEkT9Gj0BJkENJkERHkEdHkUhKkEhGkTxCkjs/kz4+kj89kTo+kTdBjTc/kDVCjDZAjTJDlj8/lkE+mEM7mEJAmkBAl0NClz86mD84lj42lTw2mj43nD85lkA0lD8ylT4wlD4ukkEyk0IwkUI0lz0xmTwvmDkulzksmzwvnT4vnEAxnUIxnEQzlzgvljYvkzQslTQxkzQykzM0kTI1lTE1kDgskTgpjzcojzotjDosjjowkzkpkzomkzgilTsmmD4olD8nlDUlkjEkki8kljIjlzQhljUfmjQhkDImjjAnjDAljTEpijAmhjElhTEnhy0khiwniSsjhTMkgTIjhDcjhDsigTokfTMmejYofzAoejAofi4qejYkeDgkdjUjezshez0ifDoffT4hfjwgdTcmczYncTooczUqdDcrdTMudjcvbjYnbDgpbTgrajYmajQnaTkpaTosaDgvZjssZj0uZDorZD8uZzMtaTItaTAuZTItZTEqYzQtbTErbC8qbi0qaiwnay0kbCskZywnZCspaCoray8jbC8hbzIhazEgaC4eZjEgZS0dZDAgYy4fYS4ecC4hcy8idC8gdC0jcy0mdCsndiomcyopdjEfejIeejMgdzQcdzYddDQbezAdgDAbfi0ffCwhfCohfSkjfCkmeikmfSgngTIehjIdhzIfhDUcgTYbhjYbgTUZhzAcjDIaii0bjSwbjiwdjisajjQekDMdkjMejjYgjDchjDgjijgfkzIakzMXkzIVky8aki4clDUXlDYVljgVlzkXkjcTkTkVjzgXjzYXjjoYOj1ROkFRPT9UPj9POz5MPkFMPz1MPDpLQDpJPT1IPz5GPj9EPD1DPUJDP0NDPEFAOj9DOD9EOD5HNj9IMUFJMkVBNUJCP0ZEQEdDP0VGPEdEO0hBOUlBN0hCOUtDOk1CNU1CNUlENUhGNkZHNUZJM0dJMkZNLk1JMkpHOlBEPFFDO09GOFFEOFNFNVRFNFJGNVVHNVhHMFZHL1JMM0xPNE1LNE9KN1lIOFtHOVdJNlpKM1xKMlxMMVlMM1xOM15PL11QMFlOM1VOM1NPM1BTLlVXL1ZTNl9QNmJQN15PNV9TM2BTMV1VM19YNGFZMF5bMVtXMVdaNlNVNVdUNFlVNmJaN2RaOGBYN2BcNWFeNV9gOWBjNlxkNVtgN1pcOFlbOlRaOVRgOFZgO2FjPGNkPGBgPV9kPF5mPVxnPFpmQFtnQVxoQFhpPVhmPlRkP1ZcPllfPllhRF1oRV9qRF9lRVtnRlppR1doSVhmS1lnSlRnR1RlRVhiRVhgRVZbSFJeR1JhTVhoTFZqT1ppT1ZnUFVnUVNlT1JkVVRlU1BiT1JiTlZhTVdfTFdZTlJaT1FdV1ZjWVZlVVhjV1VhWFNgWFJeVlJdWVRcXFRcWVFZVVNbVFdcU1lcUFxYUlZVXVZbX1VaXVhdXFdZXVhXXFdUWVdVXllRWlZQWFhTV1tWVl1WU2FUU11NVVtQX1tQYltPX11SXVxOXVpMW1tKWVxMXF5JWV5HWF5LWGBNWWBPWGFQVmZRVWVLVmNKX2BHYF9EYWFJXmJGXWJEW2RDWWRFXmdBWWlBWWdFWGtHWmlMWmlOW2ZLWmZJYGhBYWg/YmhEXmxAXG5AW21CX3E/W3NBW3BEW29GXW1HXW1JXXBOWHZKWnNIYnNAY3M+Y3FCYXVCX3dBXXdEYHpEXXhGX3VIYHRKYXVQXnpOXnpMZH1DZH5BZXpDZH5FYoBFZIJJZYRJYoRNYn9MY3tLZHlMZHpOZndRZX5UY35QZH1PaIVIaIdHaYNHaYVLaYNMaYRPaIJQbINQbYZQaoVUaYFSan1QantQa3tSbHdTbHxXa35WcIVQcodPcYNQcoZUcINXc4RYdYZZcoNccIFYcX1acnlTcX1TcX9Ud4ZYeIhZeIVWeYRaeIRcd39de4BdfYFee31geH1ceH5YeHxWeXhTe3RbeXhbf4JdgYNff4NbgH9cgn5dgntegHpdhnpegnZfgHhcgHRZf3hSf3pWf3pYiHpdintfiHxbiXhbiXZciHRbhnRZjHNZiXBXhnhWhnlUhXpPhXJNhnNRj3RZkXNbj3dZkHNWj3FWj3FTjXJSk3FRj3FOjXNQjHZNi3xRjHlTjHZTlnJSl3FTlXVTlnNPlnJNmXVJlXZGk3ZKkXpKkXpIkHxMkH1QknpPknhOnHZKnXRLnHhMnnlIm3tGoX5GnX9Dl4FLlYBOmH1Mo39IpX5Hon5KooFIooNGoYdIo4hIn4pHnIVKmohLmoNOmoJQnIJNnYNLpYlKp4tIpodLo4tLn45MpJFOn5JPno5OnYxPnopPnohQm4ZUmoxUm41TppBQqJJPp45QpZFSppBVpJFXopFWpJBZppFbopBaoZNboYxWoYpWn4pYnohZnoVZnYhbnItcm4tenY1bn4xZqJNaqZNdppVaqZNYq5RXrZNWrpZVr5JXsJBVsZRYs5RYsJZVsZhWsJpYsJxXspxVs55Us6BVtJ1StJtRs5lSsppUsI5WsIxUro1Xso5Ysoxas41csYxetY1dto9ctI9hsotgs4lgs4detIVftoJjtohotIlkuY5cupFauoxbu45eu5Fgu5Biuo5jvo9iwJFivo9nu41lvIlou4Niu4hhu4phwpBhxJJhwo5fxI5jxY9lxY1nw4xoyYxnxolox4pqxIlow4RpwINhwYdiwohkzIxlzo1lyotjzYlmzolozoZozIVpz4Rn0oRnz4FpzINoyoNmyYVlx4RjxIBgyH1kyX5m04Rk1oRl0oVi04Fk1H9l031k0X1l1nth0nhi0Hxjzn1hzHpgzIBeyoJdzYFgz4Bh13tf2ntf135e1npd13dd1nZb03Zc1nZY2HVX1HVX1HNX0nZZ0XhZ0Xpaz3xZzH1WzHZSznZW2XdV3HZV2XlW2HZT2HRS1nRQ1HRR1nVO2HVM03RL0nVPznhN0H9S0ntS03lR2ndL3HZK2nhN2HhJ13dH1nlG1HpH2HtD1X1F031D03xH0YBI1IBN1IFP1X5N1X1L231D3HxB235F2X9B2X8/14E+1YE/2IM+2oQ71oU+1YU71IQ/1YRC1oNE1oRG1IhJ0ItD0ohC1IZD3IQ83YQ53YE93YY+3og93Io92ok/3Iw+3Y482I492YtA141E24lJ3IhF24lD4I894ZA64Y4+35E+3pM93JQ/25JA3phA2ZdC2pNC2pNH341J349F4JpA4Jw/4phA4JpD3ptE3ptH3phH4JtI4Z5J35pM45RK45VM5JNJ5JJH5pFG45NF4ZVG459I4qJI5J5G5Z9K5p1L5p1N5ZpO6ZxO6p9O6J1S55lQ6JZT6pFN6ZRM6JdN7Z9N7qFN7Z1L7p5Q8J1P8ZpR75lR85lQ9ZpS8pZR8pZU75ZR7pdM7pVK7pNL7pFI749L8I1P75FP95pQ+ZpR9pxO95hO+ZhM+pZM/JZO+JNL/ZFM/ZRP/JRS+pZT+pVV/JRW/JNY+5Na/pFY/5BW/5FU/ZNU9pFL9JFJ9ZFO945L9oxM+ItO+Y1P94pQ9odP+ohS+YxS9ZFU9ZNZ95Ba+Y5a+Y1X9IZR9INP8odR9YVT9INV9YRX9odX8oVZ8YJa84Zb9IVd9YhZ8o1W75FX8JBb8Y5d8oxc74JZ7n9b74FW7YRa7YRc7Idd7Ylb54Zd6Ylb6Itd64pa7IhW7IlU64xQ6o9T6pBV6o5X5YVd5IRe5YVa5Ihd4Ylc4Ytc44xb3oxb3Y5d341Z3Y9Y4Y5Z441X5ItW5YxU5I5T5Y9R5o9P45NT4pFV35Bd4ZBd3pFg3ZJc25Jb2pRZ3JRX2JNY1pRa2JVW15dW2pRV25JU25BU3I9S3o5N3pJN3pVO3ZVR3JNR05Na0ZRa1JBb05JX0JJW0JNU0pNSzpJSzZRQ0JBRzo9P0pFQ1JBQ1I5S1oxS2otP2JBL1pBNzpZQ0JdPzJhSzJdOzpdLzJVJzpRIyZNLyZJGzZJHz5BI0pFI0pJG1IxL0I1Kz45Jx5JNxZJNyZFPx49LxY9Jxo1IyI1HwopIxYlFyYpHyotLzIpN0IZOz4VIzYdHwYhKvohKwolNwoZJwYVHwoJHxINGwH9Jw31GxoFHx4FJx4RKyYRLzoJOzXtKyn5JyYBKv35LvH5Lv4BNwHxMwHpLwnhLxHpLwHVOxXVNxnlMynlPyIFSxX9PxX1Ov3VRvXNQv3hRwXRSwXFSxHFUxnNTxHFWw29Xx29Xx3NVx3ZVxXdUxXlVx31ZynhayXZZwW9awG1bv3FZw3BcxW5dxnBfx3JexXBhxG5jxnJiyHFjx3NgxnZfyHhixHpew3xdxHhdxXZdwm9lwWxmwHBkw3BnwnFpxHNqxXVownVswnRuxndtxXdpwndmwXlkv35kw35oxHxpv3Rvv3NxvXRtv3dwwXhywHpywXxwvXt0vn5xwH9zwH5vv3xsvXxqu4BmvoZrvoJsunx1unt3uXtzun91uIB1uIJ0uoJxtoNztYR0uIdyuYRwuIZstn9nt39suIBusoR0sYV2sYJzsYZysolysYpws4lur4pvrYxwr4pssI1ssolssoRssoNrsIBmr4Rlr4ZlsIdnq4tyrIx0q4hxqYxxp4tvqIttqopspoprpItrp4xnqYlpq4Nsq35pqoBmqYJlqYVmootpo41nn4xqoYlmoIZlooRmnoZmnYVknoRooYNno4RrpINtpn9sp39upn1rpXpoo35om4Zim4VgnIlimIZjl4RjlYRllYVnlIlmkopmlIdok4lsmYptmotumolrmIhpj4ZijYZikIRgkIhgj4phkIxgko1gjY1ckJBck41dlYtclo5ZmIZZlodclIldi4taiYxbjIlbjIxYjI9YjpBWkI9WjY9Ti5BSkJFRkY5UkopWk4hWlIhTloRTlYpPlItQiY9Rh5BQiYxRi49Oi5FNjZBLj49Mi49HkI9GkI1Kj4pOj4hOkoNOlIVLlIdKk4lKiI5Hh5BFh45JiYxFi4pCjYlEiohCiIdAjYVAjYdEjYZGjIdIjIZKjYFNj4BHj4JGjoRHhoZAhIc+hYZCh4NAiII+iYA/ioBBh34/hX09iXo/in5CiIBFiIBIiH5Ni3pJintGgn0+gX07goA/gns/gnk/g3dBhHhDgHdCf3VBgnZFgnNFhHdFhHlJhHdKg39Mg35Hg3xGfXVAfHg/e3VCfHM+fXM8f3I8f289g3M6gm86hG88gG48f2k7e2Y2emo1e202fG03gnU3g3c4gHU2h3M2iHI0h280iHEwi3Awh28xgm8ygG8xfWwtgWssg2sshWwtg20viXcwi3kwhngxiHYthncshHUsgnYqg3UogHIqgXQugHgwf3kxensyd3Uue3Uugncmg3cjgnonf3clfnUkfHQke3Une3YheHckd3UjeXYne3kpe3oreH4ucXordXkpe3kffHcdfXogeXoed3gddHkedHogdHsccnscdH0ec38edX0jcX4kd4ApeH4ld30jcX0Zb3sYc34Yb38abH4aa38can0eaoMea34gbHwhanwkaX0ka3olbXglbXYmbngibXoha4YfaYcfbYYdbIYha4YjbYkmbYoocIkkcYslcYYmc4Ukc4QidYMidoQjeYQkeoMieYUmeIYndoYndYUlbIwpa40mbo4qaowraIsqZ4ksaIYrZoovaIYvZoYwaYUtbYYub4Yuc4IrbX8obIIqZ40wZY4yaI4vaYwyaIs0a4o2bIw3aog4aoY3bYg5b4c4bYs5bI07bo09b4s9bY4/a5A+apFAapA8ao46aYM4Z4Q6bIM6aYE3aIAzaYExaX0zZ3w0aHwva38wbn0tdIAwcIEyboEyaHo2Zng3aXs4aXg0aHcyanUxbHcwbHQya3EzbXIubnYvcnYudXs0cXozb3kybHA1am42bHI3b24ycW0yc28xc2o0dW0zdmsxdW8ydHM0dXU2d3Q1eXY2eXg3eXIzcWk2b2g1cGs4cmU2c2M4dWQ4cmI6cmA6c2Q8c2I+d2Y8eGU+eGM/emc/e2s/eGo8d2g7cV45cls6cV42bl46bl08a109al88alk8Z1w+aF87aGA5ZmA4ZGA5Z2E1aWE0aWIya2E1amA4alY6alQ7bFc5aFY4ZlU5ZFk2ZFI0YVYzZFkzZloyaFs0aVwzaVwwaV0ubF4uaFwsZlssZVouZlswZVAzZE4zaFA0ZlEwZFEvZVIsZlUtZlErZU8qaFMpZlMnaFUrbFYrbFcpblctblYvcFYwbFQwalQvZkwqZUopZkwtaUwpaU0na0wmbU4nbEgmb0oncEolb00nb00qck0rc0wqck4ucE4vcE8xbk8ubk4rbEUnakQma0YqbkQnb0QlcUMlcUEmckIidEQhdkEkcz8lbj4kbTwjbDggcjggdkQgeEQidkYedkIeeEAedz4aeT8ZdzoZcT4ebz4eaj0cazsabToZcDoZeUEXfEIWd0MYeEAUeD4Udj0SdDwUdT4Qdj4Ocz0QczsOcjwTc0AVb0AWa0EXbjwUdkENeEELdkMOdEALcz4KcT8Ibz4KckIGbUAFbT8KaUELa0QSbkIQbkEOckUFdUUEckYHcEUEcEgEbUgDbEYFbEsEbEwCaUoEaEoCaUgGaEkJZkkIaEkMakkPbEgMbEgJbk4CblAAcE4DbVAEalEEaVIGaFEHa1YGaFYJaVIKalALbE4KbU0LbU4Obk4Qb0wRbU8SalITalEPblcFblgDb1QFb1kHcFgJcFoLb1wJcFkPb10PbV0La10KalwIaFwIZ10JZV4KY10IZF8LZmANaGANaV4Lb1YQcVUSblUObVcSbVkUa1oUalwSaVkYZ10WaFwSYlcKYVoNYVsOY1wQaFYZaFYbaFQXZVYYZFgaYVkZYVkWXlYbXFkXYFgVY1YTY1INX1MNXVQOXlYQX1McXVMeYVMcXlEaW1EZW1EWXVEVWU0WW04SYU8UYk8WZE4WZE0UaEwTZkwQZEwPYk0QYk4SWUoXV0oYW0oZWkkVWEkTWUgQW0kQWUMQW0UMXUgPYEgTYkgUZ0cTZUUOYkYOWUERVkARWkEUW0AQWz8NXT4MX0AMXjwNXToMYTwKYT8NYkAPYEERYUETZkAWaj0PZj8PXTgOXDYNXDkRYDcPYjYNZDYNZTgOZDQQZDEPZzQRaDMPZzcQaDgUajcUaDkWZToXZTsZZDoVZDkTYjAQYC8PYDISYy4SZS0RZisTaCwUZSoUZicVZSsXZCoZZywWaC8YZjAYZzIZajEZbDUbbjIabi8ZcC4ZbC4Yai8YZSUTZiMVZiURYiUUYSMWXyIVYCESXyAWXSAYWx8UXx4SYR0SYx0SZRsSYxkSZBcSZhYRXRUTXxkSYRoSXR8bXCAcYB4bXB0aWR0aWBoZWhkXVhgdVhUZWhYYXBYYWxIYYRUZYxQZYBcZXhgYVxcfVRghWRcgVhQfVxMhVxAgWRAeWA8hVw0jVwsfWg4eXREeYBEfZQ8fYwseYQoeXgseVw0mVQwnWQ8mWQsmWQklWwclXQgjXAUoXwQlXwgjZAgjZBAlYA4lXwwkXQUrWwQtXQgsYAUrYAIrYwIrZAMpZAMtZAEvaAEsZgQqagcqZg4qZAsqZAgqZAIxZQAzYQIyZQQxZwUzaQYzaQcwawc0bAY2bQgybgcyawgwZwsvZw0vaBMvcBAwbQ0wbAg5bQY7aQg5bQo4cAo4cQ03bw42cQ46cw85bxA6bxI7bxA3ag82aBE2aRM1ZRU0axc1bRU1axM2dRA7dg48dBE9dxI6dhQ5eBY5eBY7ehU4exg3fBU6fhU6exU/ehNAehNCfBVCfRZFfBVHfhhEfhlCgBtDfRlAfBdAexg0eRYzfhgzehs0eBs0dx40dx43eSAzdyIyeiA1eyM1eCA3eiA6eiI7eiQ6eyE9fR5Aex08eh06dyIweSEudiUvdCEvdB8tdRwucxwvdxoqdxcucxkvcBkvbxcwcRUwbBgvaRgubRoubxsudhoneBomdBondhcoeBUpeBMpdhMrdxEneREldw4pdBEqcRQqbxQpahIpbQsrcA4qeBAjehAhdxIidw4ieAwjdgokdAsldAkhdQggcgYjcgolcQ4kbxAkahEkaAkkbAoldAgddgYcdAsccgcccQQdbwQdbgYfbQMZagMdbAYfaAkfbA4dbBAdbgwdbgoebQQWbQIVbgYWagQWaAIWZgMWZQQYZAQSYQQWZAYYZQgZZwkZZwsZZhAaXg4ZYQsZZAUQZAMOZwYQYgcQYAcQXwkQYAoSXQsNXA0RYA0SZRETZw8SaRASZg0RZAwRXgsKXAoIYAoJXg4KXBAKXRIKXxIMXhMIXRQGYBUJXhcKYBQMYxMMZRUMZRcMZxMMaBEMahAMZRAMYxEMXhQDXBMCYBIDXxYDYRcDYRkEYxoGYhsDYBwBYx0EYR8FZBwHZhwHZx4IZh8Iah0IaxwHbRwHahoGZxoGvUw8vUk9u0g8u0Y9uUk7uEg6uEk+uUZBuURCuEJBuURFukZGu0ZIu0hFukhCtkk3t0g1tkw4tEg3s0c5skU5s0M7sEQ5r0I3r0Q7sUI8sT9As0ZFs0lCskY/rUE2rUA0q0Q2q0A5rD45qj08qz4+qD47pjw8qEA9qkA/q0RArEVBrUZGq0FHqkBEoz08ojs7oz88ozw/ozpAozpDpTxDoTpEoTlGoT1Eoz1FpEFDpENDpkdGpkJKpUFJnjhHnjZInTlGnzpJnzlMoDtNoT1MnzxPnztSnz9PoT9No0RPoEdIoENInkNGoEFKnjtUnjpWmztTnj5VoD9VoEFWoENTnkJXn0NZnURVn0VUoElSnEhLnEVOnURQnURbnkRemkNbnEdankhanktZnUtXm0xbnE5bmUtZm0xXmUhVmEhSlklNmlFPmk5Smk9dm1FfmE5emFFbmlNamFRYmFJWllVZlldZlFRXllNVlFNQkUxQk01UlE9VlFlalVtbk1hcklpYk1tWkltUkVhTj1xUj15TjVpTj1hSjU9SjlJUj1RUjV9UjWJUjF5Xi19Ti2BQiV9PiVxPh19PhmBNhl1Qh1tPh1lQiFlTiFdUiFFTh1RNh1ZNh1dQhmJLhGJJiGNLhWRNgmRNgWZPgmhPf2ZQfmRSfmhRgWlRgGxQgG1OgG9NgHBQgHRPgXBXgW5UgW5RfGNTfGFUemRRe2VVfWVXfWdYfWpXemhZemdcemtafGxYe3BaenFTenJSem5Te21Ud2Zcd2VfdmVadmlddmlgdmxgd25fc21gcmxic29gdnBedm9adXBYdHRVc3hcdHRcb2xhbmtjbmtfbm9hbnBjbnNjb3Rha3NiaXNka3ZhbnZfbnVdbXlcbnRYbnNWbnJab29abnNcZ3NjZnJmZnFhZnViZndjZXlhZ3pgY3lgYXphY3teZnteZn1ZZ3ZVZ3ZaZndcXnlhXHljXnZgXXpfXX1fXH5dXn5bWn1bWH5cW35ZXn5ZXn1UYXZUYHVZX3pZVnxcVH5dVnpdVXxZVX5YVH1VVnxUU3pVUHtVU3pSWHlSV3dPW3VTXXNTW3dVWXhUT3hVTHlWUHdXTndTTXlRTndOUHdOS3VOT3RMUXVNU3RRVXJRWG5RVHFLSXNPRnROSnJRSXBNSHBLSm9JTG9KSWxJR2xITGxIT2xLUGlJU2pQUG1PUG5RT25NRmlJRGlIR2lMSGdHSGVISmRHTGVHSmFISWBGTWFHTmNIUGBLT2VSTmZOTWVMRl9HRF9FRmBKRlxHSFtJSlpITFtJSlVHTVdJTlpKT1dOTV1TTF1PS2BQTFxNSFNIR1JGRlRKSVJKS1BJTlFMS05NTU5PTlBPT1FUSldUSVdPS1RPSUpMSUhLR0xKSEtOR0lQSUhRSEdUSEVUSkhWS0pUS0xZSU9YR1JXR1BURlFSSU5URURVRUFVQ0VTRUVYRkNZRkRcRkZcQ0ZeRUheREpcREpaQ0xZQlFZQlBeQk9fQ01fQ0xdP0JcPj9cP0NZPkNePkJgPkdiOERjOkhjPUliPE5iPE5aPUpcPUlZPUleNkRiNEJjNkRfNUZjNEdlM0lmNUtlL0plMU1kNE1jNU1hNUtgNktdNU5ZM1ReNFFgLUlkK0hmLUdiLEtjK01kKk9iLFBhJk1hKFBfK1FfLFNbME1XLkxbLU1dJExfIk1fJElgJktdJEtaJE1ZJk9ZI01WIUxWJE9WJlBXKk1XLExWL01RLFBQK1JRKlRPKVFTIEtUHUtUIUhVIUxSIUpPIktNJE1OI0pLIUlKJUtKJkxMKEtOK0xKLElQLkhRKklRKEtQIUdIH0dHIkVJIkhFI0dDJEhCJklDJkZAJUU+KEdAKElCKkhELEdELUhDLUVKKUZIKEdGQipqQyxpRClsQCtrQCxtQS9tPzBuQy9uRTBtQzFxQTJwPzNxPTNyPDR0PjV0Pjd2PDh4QDh2Qjh1QjZzQDVzSDBtSC9wSTJtSC5rSy1rTC5pSy9nTjBqUC9rTjJoTDFmSjRkSjNiSDZkRzdmRjlmSDdoSDhqSjVoUjBsVC9uUTNsVDBpVC5oVC9lUzFlVzBlWDBjVjNlVDNkUzZnUThoTzplTjxmTjpjTjhfUDdiWzBiWy1iXDFkWzFgWjBeVzNdXDRcXTNZWzZcWDZcVDhcUzpdUz1iVjtjWDljWDhhXDNXWjFXXjNVWjVXWTZVWDlXWjpUWjpRWTxVWDtXWjxbWj1dWUBhVkFeVEFcUkJcVT9aVz5bXTpQXDlNXjlSXT1PXT9RXkFQYUFQYUJOYkJSYENUXz9WXz5YX0BaXkFcXj9eXkNdXkVbX0RZX0JYY0FMY0JJYz9MZ0FOa0FPbUNPbD9QaT5XZztWZjpVZDhVZjpSZzxSb0RNbkZMcEJMcURPcUZRckVTckNUdUVTdkVVdUJTc0FUcj9Tcj5RcTxQcDtSbzlTbjhSbjlVbztXbztZcT1WcT1UeEdVeUhXeElTe0ZUfUdTfEdQfEpQfkZPfEZMf0hOfkpOf0xQf05Pf09MgFBQgVBSglJTgU5TgExSfURKfENIfkJMgEVJf0dIgUlHgkpJhEhEhUhIhUpJhk5LiExThkdRhklNhEdCgkhBhURChkhAhko/h0xAiEtCikw/ik49i01BiU1DikpHjFRJi1BHjU48jVA6jkw9jlA+jlM9j1Q/j1NBklU/klc/k1RBkVNDkU9EkU5Gk1VMklRIlVg+lVs9lVY8llhAlllCmFhEl1ZFnFpEm1VFmVVGmVNKl0tIl05FmFFFnlpDn1xCn1hCoFlFn1tHoFpJn1hKo1lJpFpLo1ZJoVZKn1NHn1FHnUxIn05Qn1FNp1lMqFtNqFhJp1dNp1hQplVRpVNQqVRSqVNUqVJQp1FPp1FLplBJpEtHpE1Oq1JVq1NYrVNTq09VqU5WqUxWqEtUq0pXqkhYrElUqklTqEZQqkpJrE5Mq0tPrEdZq0Zcr0harUVYq0NXrEJVrENTrUBVrD1VrkBSrUJRrEJMsEhKsEdOsklPr0ZQrjtWrDpYsDxXrjpUrDlSrThQrjpPsDdQrzROsThOsDpNsj5Ps0BOtERKsD9HsD5JsTJOsDBOszNQszNMsTJKszNHszZItTNHtjFGtjVGtTdGtTlItjlKtjxLtz1Itz9IuEFJt0BFtz5Etz9BtjxEtjtG"};var Ie=i=>!!(i.person||i.ghost||i.moc);function en(i){let t=i.filter(s=>!Ie(s)),e=s=>Math.max(1e-9,...t.map(s)),n={i:e(s=>Math.log1p(s.inlinks||0)),m:e(s=>Math.log1p(s.mentions||0)),b:e(s=>s.bc||0),r:e(s=>Math.log1p(s.recent||0))};return s=>.4*Math.log1p(s.inlinks||0)/n.i+.3*Math.log1p(s.mentions||0)/n.m+.2*(s.bc||0)/n.b+.1*Math.log1p(s.recent||0)/n.r}var nn=i=>{let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619);return t>>>0},Xu=i=>{let t=Math.max(1,...i.filter(e=>!Ie(e)).map(e=>e.recent||0));return e=>Ie(e)?0:Math.min(1,Math.exp(-(e.age||0)/7)+.6*(e.recent||0)/t)},Uo=i=>{let t=i.quality&&i.quality.stale_days||180;return e=>!Ie(e)&&!/\d{4}-\d{2}-\d{2}/.test(e.name||"")&&(e.age||0)>t};var ke={ATOM:1.8,SCALE:.16,PROTEIN:[.93,.93,.9],RNA:[.94,.34,.15],TARGET:[.13,.31,.8],OTHER:[.38,.64,.97],HIT:[1,.79,.2],NEAR:[.78,.62,.96],COIL:{lead:90,ease:40,radius:60,pitch:34},NEAR_AXIS:[0,1,0],FAR_AXIS:[-1,0,0]};function Ju(i,t,e,n){let s=new Float64Array(t*12),r=(y,v)=>y[0]*v[0]+y[1]*v[1]+y[2]*v[2],a=(y,v)=>[y[1]*v[2]-y[2]*v[1],y[2]*v[0]-y[0]*v[2],y[0]*v[1]-y[1]*v[0]],o=y=>{let v=Math.hypot(y[0],y[1],y[2])||1;return[y[0]/v,y[1]/v,y[2]/v]},c=(y,v,_)=>{let w=Math.cos(_),E=Math.sin(_);return[y.map((x,S)=>w*x+E*v[S]),v.map((x,S)=>w*x-E*y[S])]},l=i.o.slice(),h=o(i.z),f=o(i.x),u=a(h,f),d=0,m=null,M=null,g=0,p=0;if(n){let y=n.pitch/(2*Math.PI*n.radius);g=1/(n.radius*(1+y*y)),p=g*y;let v=n.axis,_=r(v,h);M=o([v[0]-_*h[0],v[1]-_*h[1],v[2]-_*h[2]]),m=a(M,h)}for(let y=0;y<t;y++){let v=i.phase+y*e.turn,_=Math.cos(v),w=Math.sin(v),E=y*12;for(let x=0;x<3;x++)s[E+x]=l[x],s[E+3+x]=_*f[x]+w*u[x],s[E+6+x]=_*u[x]-w*f[x],s[E+9+x]=h[x];if(n&&d>=n.lead){let x=Math.min(1,(d-n.lead)/(n.ease||1)+1e-9),S=x*x*(3-2*x);[h,m]=c(h,m,g*S*e.rise),[m,M]=c(m,M,p*S*e.rise),h=o(h);let F=r(f,h);f=o([f[0]-F*h[0],f[1]-F*h[1],f[2]-F*h[2]]),u=a(h,f)}for(let x=0;x<3;x++)l[x]+=h[x]*e.rise;d+=e.rise}return s}var fc=null;function dr(){if(fc)return fc;let i=Yu,t=atob(i.atoms),e=t.length/3,n=new Float32Array(e*3),s=new Uint8Array(e),r=new Int16Array(e),a=new Int8Array(e).fill(-1),o=new Float32Array(e);for(let _=0;_<e*3;_++)n[_]=t.charCodeAt(_)*i.q+i.lo[_%3];let c=i.protein;if([i.rna,i.target,i.other].forEach((_,w)=>_.forEach(([E,x])=>{for(let S=0;S<x;S++,c++)s[c]=w+1,r[c]=E})),c!==e)throw new Error("the Cas9 model's tables don't add up to its atoms: run scripts/cas9_model.cjs again");for(let _=0;_<e;_++)i.flank.forEach(([w,E],x)=>{(s[_]===2&&r[_]===w||s[_]===3&&r[_]===E)&&(a[_]=x)});let l=12,h=new Map,f=_=>`${Math.floor(n[_*3]/l)},${Math.floor(n[_*3+1]/l)},${Math.floor(n[_*3+2]/l)}`,u=new Uint16Array(e);for(let _=0;_<e;_++){let w=f(_);h.has(w)||h.set(w,[]),h.get(w).push(_)}for(let _=0;_<e;_++){let w=n[_*3],E=n[_*3+1],x=n[_*3+2],S=Math.floor(w/l),F=Math.floor(E/l),T=Math.floor(x/l),I=0;for(let P=-1;P<=1;P++)for(let B=-1;B<=1;B++)for(let N=-1;N<=1;N++)for(let Z of h.get(`${S+P},${F+B},${T+N}`)||[]){let G=n[Z*3]-w,X=n[Z*3+1]-E,z=n[Z*3+2]-x;G*G+X*X+z*z<l*l&&I++}u[_]=I}let d=Array.from(u).sort((_,w)=>_-w),m=d[Math.floor(e*.08)],M=d[Math.floor(e*.97)];for(let _=0;_<e;_++)o[_]=1-.72*Math.max(0,Math.min(1,(u[_]-m)/Math.max(1,M-m)));let g=_=>{let w=[0,0,0],E=0;for(let x=0;x<e;x++)_(x)&&(w[0]+=n[x*3],w[1]+=n[x*3+1],w[2]+=n[x*3+2],E++);return w.map(x=>x/(E||1))},p=(_,w)=>{let E=-1,x=-1/0;for(let S=0;S<e;S++)if(_(S)){let F=w(S);F>x&&(x=F,E=S)}return[n[E*3],n[E*3+1],n[E*3+2]]},y=i.pair.map(([_,w,E,x,S])=>({x:_,y:w,z:E,strand:x,base:S,r:ke.ATOM})),v=[];for(let _ of[0,1])for(let w of[0,1]){let E=y.filter(S=>S.strand===_&&S.base===w),x=S=>E.reduce((F,T)=>F+T[S],0)/E.length;v.push({x:x("x"),y:x("y"),z:x("z"),strand:_,base:w,r:w?3.3:3.6})}return fc={M:i,n:e,xyz:n,kind:s,res:r,flank:a,shade:o,pair:y,beads:v,base:[ke.PROTEIN,ke.RNA,ke.TARGET,ke.OTHER],flankAt:i.flank.map((_,w)=>g(E=>a[E]===w)),held:g(_=>s[_]===1&&r[_]<=i.spacer+1||s[_]===2&&r[_]>30-i.spacer),labels:{protein:p(_=>s[_]===0,_=>-n[_*3+1]),rna:p(_=>s[_]===1,_=>Math.hypot(n[_*3],n[_*3+1],n[_*3+2]))}}}function qu(i,t,e){let n=dr(),s=n.M,r=t&&t.ids?new Set(t.ids):null,a=new Map,o=i.filter(_=>!Ie(_)&&(!r||r.has(_.id))).sort((_,w)=>_.id<w.id?-1:_.id>w.id?1:0),c=new Set(o.map(_=>_.id));t&&t.notes.forEach(_=>{c.has(_.path)&&a.set(_.path,_.hits?"hit":"near")});let l=o.filter(_=>a.get(_.id)==="hit"),h=l.find(_=>_.id===e)||l[0]||null,f=h?o.indexOf(h):o.length>>1,u=o.slice(h?f+1:f),d=u.slice(0,s.flank.length).map(_=>_.id),m=u.slice(s.flank.length).map(_=>_.id),M=o.slice(0,f).reverse().map(_=>_.id),g=Ju(s.tails.near,m.length,s.step,{...ke.COIL,axis:ke.NEAR_AXIS}),p=Ju(s.tails.far,M.length,s.step,{...ke.COIL,axis:ke.FAR_AXIS}),y=new Map,v=new Map;return h&&(y.set(h.id,n.held),v.set(h.id,"held")),d.forEach((_,w)=>{y.set(_,n.flankAt[w]),v.set(_,"flank")}),[[m,g,"near"],[M,p,"far"]].forEach(([_,w,E])=>_.forEach((x,S)=>{y.set(x,[w[S*12],w[S*12+1],w[S*12+2]]),v.set(x,E)})),{pos:y,where:v,all:o,hits:a,sites:l,site:h?h.id:null,flankIds:d,nearIds:m,farIds:M,near:g,far:p,scan:t||null}}var fr=ke.SCALE,pc=28,zx=.3,hs=i=>[i[0]*fr,-i[1]*fr,-i[2]*fr];function mc(i,t,e){let n=new Gn,s=new fe(t,e,i.n),r=new Yt,a=new Mt;for(let o=0;o<i.n;o++){r.makeScale(ke.ATOM,ke.ATOM,ke.ATOM).setPosition(i.xyz[o*3],i.xyz[o*3+1],i.xyz[o*3+2]),s.setMatrixAt(o,r);let c=i.base[i.kind[o]];s.setColorAt(o,a.setRGB(c[0],c[1],c[2],Be).multiplyScalar(i.shade[o]))}return n.rotation.x=Math.PI,n.scale.setScalar(fr),n.add(s),{root:n,mesh:s}}var ju={id:"cas9",name:"Cas9",hint:"Notes as DNA, the Guide scan's matches as cut sites",home:{yaw:0,pitch:.2,dist:44,min:14,max:240,minPitch:-1.4},stage:{light:"camera",fog:[70,260],ambient:.5},actions:["guide-scan"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,invalidate:a}){let o=dr(),c=new Map(e.nodes.map(V=>[V.id,V])),l=V=>c.get(V)?c.get(V).name:V,h=new vi(1,1),f=new Ei,{root:u,mesh:d}=mc(o,h,f);i.scene.add(u);let m=new Yt,M=new Mt,g=(V,tt)=>M.setRGB(V[0],V[1],V[2],Be).multiplyScalar(tt),p=null,y=null,v=[],_={atoms:0,pairs:0,fine:0,beads:0},w=n.scan||null,E=n.selected||null,x=null,S=null,F=V=>{let tt=y.hits.get(V);return tt==="hit"?ke.HIT:tt==="near"?ke.NEAR:null},T=V=>S&&!S.has(V)?zx:1;function I(){for(let V=0;V<o.n;V++){let tt=o.flank[V]>=0?y.flankIds[o.flank[V]]:null,L=tt?F(tt):null;d.setColorAt(V,g(L||o.base[o.kind[V]],o.shade[V]*(tt?T(tt):1)))}d.instanceColor.needsUpdate=!0}function P(){p&&(u.remove(p),p.dispose());let V=[y.nearIds,y.farIds].reduce((L,C)=>L+Math.min(C.length,pc)*o.pair.length+Math.max(0,C.length-pc)*o.beads.length,0);p=new fe(h,f,Math.max(V,1)),p.count=V;let tt=0;_={atoms:o.n,pairs:y.nearIds.length+y.farIds.length,fine:0,beads:0},[[y.nearIds,y.near,!0],[y.farIds,y.far,!1]].forEach(([L,C,nt])=>L.forEach((dt,ot)=>{let ut=ot<pc,gt=ot*12,pt=F(dt),Ct=T(dt);ut?_.fine++:_.beads++;for(let St of ut?o.pair:o.beads){m.makeScale(St.r,St.r,St.r).setPosition(C[gt]+C[gt+3]*St.x+C[gt+6]*St.y+C[gt+9]*St.z,C[gt+1]+C[gt+4]*St.x+C[gt+7]*St.y+C[gt+10]*St.z,C[gt+2]+C[gt+5]*St.x+C[gt+8]*St.y+C[gt+11]*St.z),p.setMatrixAt(tt,m);let Q=St.strand===0===nt?ke.OTHER:ke.TARGET;p.setColorAt(tt++,g(pt&&(St.base||!ut)?pt:Q,(St.base?.78:1)*Ct))}})),_.atoms+=tt,u.add(p)}let B=()=>{if(!w)return`${xt(y.all.length,"note")} \xB7 no guide`;let V=`\u201C${w.guide}\u201D${w.where?" "+w.where:""}`,tt=[...y.hits.values()].filter(L=>L==="near").length;return y.sites.length?`${V}: exact in ${xt(y.sites.length,"note")} of ${y.all.length}${tt?` \xB7 look-alikes in ${tt}`:""}`:`${V}: no match in ${xt(y.all.length,"note")}`},N={label:"Open Guide scan",title:"Open Guide scan",run:()=>r("guide-scan")},Z=()=>y.sites.findIndex(V=>V.id===y.site);function G(V){let tt=y.sites.length;tt&&(x=y.sites[(Z()+V+tt)%tt].id,j(),a())}function X(V){y.hits.get(V)==="hit"&&(x=V,j(),a())}function z(){t.stat(B());let V=[{text:"Cas9 protein",at:hs(o.labels.protein),dy:-16,run:()=>r("guide-scan"),title:"Cas9 protein. Open Guide scan"},{text:w?`RNA \xB7 ${se(w.guide,24)}`:"RNA",at:hs(o.labels.rna),color:"#f2764a",dy:-14,run:()=>r("guide-scan"),title:"The guide. Open Guide scan"},{text:"DNA",at:hs(o.M.tails.near.o),color:"#8fbcfb",dy:16,title:y.sites.length?"DNA. Show the exact matches":"DNA. Open Guide scan",run:()=>{if(!y.sites.length)return r("guide-scan");S=new Set(y.sites.map(L=>L.id)),D(),a()}}],tt=y.site||(E&&y.pos.has(E)?E:null);if(tt&&V.unshift({text:se(l(tt),34),at:hs(y.pos.get(tt)),strong:!0,dy:30,run:()=>s(tt),title:`Open ${l(tt)}`}),t.labels(V),t.chip(S?`Exact matches of \u201C${se(w.guide,24)}\u201D`:null,()=>{S=null,D(),a()}),!w)t.controls({lines:[`${xt(y.all.length,"note")}, a base pair each. No guide yet.`],buttons:[N]});else if(!y.sites.length)t.controls({lines:[`No \u201C${se(w.guide,24)}\u201D in these ${xt(y.all.length,"note")}.`],buttons:[N]});else{let L=y.sites.length===1;t.controls({lines:[`Site ${Z()+1} of ${y.sites.length}`],buttons:[{label:"\u2039",title:"Previous site",off:L,run:()=>G(-1)},{label:l(y.site),title:`Open ${l(y.site)}`,wide:!0,run:()=>s(y.site)},{label:"\u203A",title:"Next site",off:L,run:()=>G(1)}]})}}function D(){I(),P(),z()}function j(){y=qu(e.nodes,w,x),S&&!y.sites.length&&(S=null),v=[];for(let[V,tt]of y.pos){let L=y.where.get(V);v.push({at:hs(tt),r:(L==="held"?14:L==="flank"?6:7)*fr,key:{kind:"note",id:V,tip:l(V)}})}D()}function O(){E&&y.hits.get(E)==="hit"&&y.site!==E?(x=E,j()):x=y.site}return j(),O(),{targets:()=>v,click(V){E=V.id,y.hits.get(V.id)==="hit"?(x=V.id,j()):z(),s(V.id)},update(V){"scan"in V&&(w=V.scan||null,S=null),"selected"in V&&(E=V.selected||null),j(),O()},stat:B,today(){if(!y.site)return null;let V=y.sites.length;return{text:`Cas9 is on ${l(y.site)}: site ${Z()+1} of ${V} for \u201C${w.guide}\u201D`,label:V>1?"Next site":"Open it",run:()=>V>1?G(1):s(y.site)}},api:{layout:()=>y,drew:()=>_,at:V=>y.pos.has(V)?hs(y.pos.get(V)):null,step:G,go:X,highlighted:()=>S?[...S]:null}}}};var No=18,Qu=4,Ku="#facc15",Gx=14;function Hx(i,t){let e=t.X.map(a=>[a[0]*No,a[1]*No,(a[2]||0)*No]),n=new Array(t.n).fill(0),s=new Map,r=new Map;t.domains.forEach(([a,o],c)=>{for(let l=a;l<=o&&l<t.n;l++)n[l]=c}),i.rows.forEach((a,o)=>{for(let c of new Set(a)){let l=i.ids[c];s.has(l)||s.set(l,[]),s.get(l).push(o)}});for(let[a,o]of s){let c=[0,0,0],l=nn(a),h=l%628/100,f=(l>>>10)%314/100-1.57,u=No*.03;for(let d of o)for(let m=0;m<3;m++)c[m]+=e[d][m]/o.length;r.set(a,[c[0]+Math.cos(h)*Math.cos(f)*u,c[1]+Math.sin(f)*u,c[2]+Math.sin(h)*Math.cos(f)*u])}return{beads:e,domainOf:n,daysOf:s,notes:r}}var $u={id:"genome",name:"Genome fold",hint:"The journals as one folded strand",home:{yaw:.6,pitch:.25,dist:46,min:12,max:110},stage:{fog:[34,80]},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:a,invalidate:o}){let c=e.strand,l=n.fold,h=l.n;if(h<Qu){let Q=()=>`${xt(h,"day")} of journals`;return t.stat(Q()),t.controls({at:"centre",lines:[`Genome fold needs ${Qu} days of journals that name notes.`,`${xt(h,"day")} so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:Q,today:()=>null,api:{empty:!0}}}let f=Hx(c,l),u=new Map(e.nodes.map(Q=>[Q.id,Q])),d=en(e.nodes),m=[...f.notes.keys()].filter(Q=>u.has(Q)),M=new Map(m.map(Q=>[Q,d(u.get(Q))])),g=Q=>.22+.55*Math.sqrt(Math.max(0,M.get(Q))),p=a.palette,y=Q=>p[Q%p.length],v="#6b7280",_=new Yt,w=new Xe,E=new H,x=new H(0,1,0),S=new Mt,F=Q=>(i.scene.add(Q),Q),T=F(new fe(new ve(1,16,12),new Ee({roughness:.55}),h)),I=F(new fe(new fn(1,1,1,8,1,!0),new Ee({roughness:.7}),Math.max(h-1,1)));I.count=h-1;for(let Q=0;Q+1<h;Q++){let Pt=f.beads[Q],Ft=f.beads[Q+1],Zt=f.domainOf[Q]===f.domainOf[Q+1],Ht=Zt?.11:.05;E.set(Ft[0]-Pt[0],Ft[1]-Pt[1],Ft[2]-Pt[2]);let Dt=E.length()||1e-6;_.compose(new H((Pt[0]+Ft[0])/2,(Pt[1]+Ft[1])/2,(Pt[2]+Ft[2])/2),w.setFromUnitVectors(x,E.divideScalar(Dt)),new H(Ht,Dt,Ht)),I.setMatrixAt(Q,_),I.setColorAt(Q,S.set(Zt?y(f.domainOf[Q]):v))}let P=F(new fe(new ve(1,16,12),new Ee({roughness:.4}),Math.max(m.length,1)));P.count=m.length;let B=new de({color:Ku,transparent:!0,opacity:.85}),N=new de({color:Ku,transparent:!0,opacity:.18}),Z=new ve(.3,12,8),G=l.loops.map((Q,Pt)=>{let Ft=f.beads[Q.a],Zt=f.beads[Q.b],Ht=new Si(new H(...Ft),new H((Ft[0]+Zt[0])*.68,(Ft[1]+Zt[1])*.68,(Ft[2]+Zt[2])*.68),new H(...Zt)),Dt=Ht.getPoint(.5),qt=F(new re(new Ws(Ht,24,.045,6),B)),$t=F(new re(Z,B));$t.position.copy(Dt);let Te=c.rows[Q.a].filter(vt=>c.rows[Q.b].includes(vt)),Me=[...new Set(Te)].map(vt=>c.ids[vt]),Y=Io(c.days[Q.a],c.days[Q.b]),J=`${di(c.days[Q.a])} and ${di(c.days[Q.b])}`;return{k:Pt,l:Q,tube:qt,dot:$t,mid:[Dt.x,Dt.y,Dt.z],ids:Me,apart:Y,pair:J,tip:`${J}: ${xt(Q.count,"note")} named on both, ${xt(Y,"day")} apart`}}),X=new wi(1,1.18,40),z=Q=>F(new re(X,new de({color:Q,side:ye,fog:!1}))),D=z(a.fg),j=z(a.accent);D.position.set(...f.beads[h-1]),D.scale.setScalar(.62);let O=F(new Oe(new he,new Ue({color:a.accent,transparent:!0,opacity:.7}))),V=n.selected||null,tt=null,L=null,C=()=>tt&&f.notes.has(tt)?tt:V&&f.notes.has(V)?V:null,nt=Q=>u.get(Q)?u.get(Q).name:Q,dt=()=>`${xt(h,"day")} \xB7 ${xt(l.domains.length,"domain")} \xB7 ${xt(l.loops.length,"loop")} \xB7 fit ${l.grade} (stress ${l.stress.toFixed(2)})`,ot=G.reduce((Q,Pt)=>Q&&Q.l.count>=Pt.l.count?Q:Pt,null),ut=[...m].sort((Q,Pt)=>M.get(Pt)-M.get(Q)).slice(0,Gx);function gt(){let Q=C(),Pt=Q?new Set(f.daysOf.get(Q)):null,Ft=L?new Set(L.ids):null;for(let Dt=0;Dt<h;Dt++){let qt=Pt&&Pt.has(Dt)?.5:.32;_.makeScale(qt,qt,qt).setPosition(...f.beads[Dt]),T.setMatrixAt(Dt,_),T.setColorAt(Dt,S.set(y(f.domainOf[Dt])).multiplyScalar(Pt&&!Pt.has(Dt)?.35:1))}m.forEach((Dt,qt)=>{let $t=g(Dt)*(Dt===Q?1.25:1);_.makeScale($t,$t,$t).setPosition(...f.notes.get(Dt)),P.setMatrixAt(qt,_),P.setColorAt(qt,S.set(p[(u.get(Dt).cluster||0)%p.length]).multiplyScalar(Ft&&!Ft.has(Dt)?.25:1))});for(let Dt of[T,P])Dt.instanceMatrix.needsUpdate=!0,Dt.instanceColor&&(Dt.instanceColor.needsUpdate=!0);for(let Dt of G)Dt.tube.material=Dt.dot.material=!L||L===Dt?B:N;j.visible=!!(V&&f.notes.has(V)&&u.has(V)),j.visible&&(j.position.set(...f.notes.get(V)),j.scale.setScalar(g(V)+.25));let Zt=[];if(Q)for(let Dt of f.daysOf.get(Q))Zt.push(...f.notes.get(Q),...f.beads[Dt]);O.geometry.dispose(),O.geometry=new he().setAttribute("position",new Gt(Zt,3));let Ht=[];Q&&Ht.push({text:se(nt(Q),34),at:f.notes.get(Q),strong:!0,dy:-22,run:()=>Ct(Q),title:`Open ${nt(Q)}`}),l.domains.forEach(([Dt,qt],$t)=>{qt-Dt>=3&&Ht.push({text:`${di(c.days[Dt])} \u2013 ${di(c.days[qt])}`,at:f.beads[Dt+qt>>1],color:y($t),dy:-14})});for(let Dt of Ft?L.ids.filter(qt=>u.has(qt)):ut)Dt!==Q&&Ht.push({text:se(nt(Dt),26),at:f.notes.get(Dt),dy:14});t.labels(Ht),t.chip(L?`Named on both ${L.pair}`:null,()=>{L=null,gt(),o()}),t.stat(dt())}function pt(Q){L=Q,gt(),o()}function Ct(Q){V=Q,gt(),o(),s(Q)}let St=[];return f.beads.forEach((Q,Pt)=>St.push({at:Q,r:.4,key:{kind:"day",id:Pt,tip:`${c.days[Pt]} \xB7 ${xt(new Set(c.rows[Pt]).size,"note")} named`}})),m.forEach(Q=>St.push({at:f.notes.get(Q),r:g(Q),key:{kind:"note",id:Q,tip:nt(Q)}})),G.forEach(Q=>St.push({at:Q.mid,r:.4,key:{kind:"loop",id:Q.k,tip:Q.tip}})),gt(),{targets:()=>St,click(Q){Q.kind==="note"?Ct(Q.id):Q.kind==="day"?s(c.paths[Q.id]):pt(G[Q.id])},hover(Q){let Pt=Q&&Q.kind==="note"?Q.id:null;Pt!==tt&&(tt=Pt,gt())},frame(){D.quaternion.copy(i.camera.quaternion),j.quaternion.copy(i.camera.quaternion)},update(Q){"selected"in Q&&(V=Q.selected||null,gt())},stat:dt,today:()=>ot?{text:`Strongest loop: ${ot.pair} name the same ${xt(ot.l.count,"note")}, ${xt(ot.apart,"day")} apart`,label:"Show them",run:()=>pt(ot)}:null,api:{layout:()=>f,loops:()=>G.map(Q=>({a:Q.l.a,b:Q.l.b,count:Q.l.count,ids:Q.ids,mid:Q.mid})),shown:()=>L?L.k:null,selected:()=>V,notes:()=>m,show:Q=>pt(G[Q])},dispose(){B.dispose(),N.dispose(),Z.dispose(),X.dispose()}}}};var Po=18,gc="#60a5fa",xc="#f59e0b",ed=864e5;function Wx(i,t){let e=new Map;for(let a of i)!Ie(a)&&typeof a.born=="string"&&Number.isFinite(Date.parse(a.born))&&e.set(a.id,Date.parse(a.born)/ed);let n=new Map,s=new Map;for(let a of e.keys())n.set(a,[]),s.set(a,[]);let r=new Set;for(let a of t){if(a.kind!=="link"||!e.has(a.source)||!e.has(a.target)||e.get(a.source)===e.get(a.target))continue;let[o,c]=e.get(a.source)<e.get(a.target)?[a.source,a.target]:[a.target,a.source],l=o+`
`+c;r.has(l)||(r.add(l),n.get(c).push(o),s.get(o).push(c))}return{day:e,older:n,newer:s}}function td(i,t){let e=new Set,n=[t];for(;n.length;)for(let s of i.get(n.pop())||[])e.has(s)||(e.add(s),n.push(s));return e}function Zx(i,t){let e=[...t.day.keys()],n=e.map(h=>t.day.get(h)),s=Math.min(...n),r=Math.max(...n),a=Math.max(r-s,1),o=new Map(i.map(h=>[h.id,h])),c=[...new Set(e.map(h=>o.get(h).cluster||0))].sort((h,f)=>h-f),l=new Map;for(let h of e){let f=nn(h),d=c.indexOf(o.get(h).cluster||0)/Math.max(c.length,1)*Math.PI*2+(f%1e3/1e3-.5)*(Math.PI*2/Math.max(c.length,1))*.8,m=Po*(.25+.65*((f>>>10)%1e3/1e3));l.set(h,[Math.cos(d)*m,((t.day.get(h)-s)/a-.5)*Po*1.6,Math.sin(d)*m])}return{pos:l,from:s,to:r,axis:[[0,-Po*.8,0],[0,Po*.8,0]]}}var Fo=i=>new Date(i*ed).toISOString().slice(0,10),nd={id:"cones",name:"Light cones",hint:"What a note rested on and what it touched",home:{yaw:.7,pitch:.2,dist:52,min:14,max:120},stage:{fog:[40,95]},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:a,invalidate:o}){let c=Wx(e.nodes,e.links),l=[...c.day.keys()];if(l.length<2){let D=()=>xt(l.length,"dated note");return t.stat(D()),t.controls({at:"centre",lines:["Light cones needs notes with a date and links between them.",`${xt(l.length,"dated note")} so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:D,today:()=>null,api:{empty:!0}}}let h=Zx(e.nodes,c),f=new Map(e.nodes.map(D=>[D.id,D])),u=en(e.nodes),d=D=>.25+.6*Math.sqrt(Math.max(0,u(f.get(D)))),m=D=>f.get(D).name,M=a.palette,g=new Yt,p=new Mt,y=D=>(i.scene.add(D),D),v=y(new fe(new ve(1,16,12),new Ee({roughness:.45}),l.length)),_=[];for(let[D,j]of c.older)for(let O of j)_.push(...h.pos.get(O),...h.pos.get(D));let w=y(new Oe(new he().setAttribute("position",new Gt(_,3)),new Ue({color:a.muted,transparent:!0,opacity:.22})));y(new Oe(new he().setAttribute("position",new Gt([...h.axis[0],...h.axis[1]],3)),new Ue({color:a.muted,transparent:!0,opacity:.6})));let E=D=>new de({color:D,transparent:!0,opacity:.1,side:ye,depthWrite:!1}),x=y(new re(new es(1,1,40,1,!0),E(gc))),S=y(new re(new es(1,1,40,1,!0),E(xc)));x.visible=S.visible=!1;let F=n.selected&&h.pos.has(n.selected)?n.selected:null,T=null,I=new Map,P=D=>(I.has(D)||I.set(D,{past:td(c.older,D),future:td(c.newer,D)}),I.get(D)),B=()=>T||F,N=()=>F?`${m(F)} \xB7 ${xt(P(F).past.size,"note")} in its past \xB7 ${xt(P(F).future.size,"note")} in its future`:`${xt(l.length,"dated note")} \xB7 ${xt(_.length/6,"link")} \xB7 ${Io(Fo(h.from),Fo(h.to))} days`;function Z(D,j,O){let V=h.pos.get(j)[1],tt=h.axis[1][1],L=h.axis[0][1],C=Math.max(O?tt-V:V-L,.5);D.visible=!0,D.scale.set(C*.55,C,C*.55),D.position.set(h.pos.get(j)[0],V+(O?C/2:-C/2),h.pos.get(j)[2]),D.rotation.set(O?Math.PI:0,0,0)}function G(){let D=B(),j=D?P(D):null;l.forEach((V,tt)=>{let L=d(V)*(V===D?1.4:1);g.makeScale(L,L,L).setPosition(...h.pos.get(V)),v.setMatrixAt(tt,g);let C=j?V===D?p.set(a.accent):j.past.has(V)?p.set(gc):j.future.has(V)?p.set(xc):p.set(M[(f.get(V).cluster||0)%M.length]).multiplyScalar(.22):p.set(M[(f.get(V).cluster||0)%M.length]);v.setColorAt(tt,C)}),v.instanceMatrix.needsUpdate=!0,v.instanceColor&&(v.instanceColor.needsUpdate=!0),x.visible=S.visible=!1,D&&(Z(x,D,!1),Z(S,D,!0));let O=[{text:di(Fo(h.from)),at:h.axis[0],dy:12,color:a.muted},{text:di(Fo(h.to)),at:h.axis[1],dy:-12,color:a.muted}];if(D&&O.push({text:se(m(D),34),at:h.pos.get(D),strong:!0,dy:-18,run:()=>X(D),title:`Open ${m(D)}`}),j){let V=(tt,L)=>[...tt].sort((C,nt)=>L*(c.day.get(C)-c.day.get(nt)))[0];for(let[tt,L]of[[j.past,-1],[j.future,1]]){let C=V(tt,L);C&&O.push({text:se(m(C),26),at:h.pos.get(C),dy:14,color:L<0?gc:xc})}}t.labels(O),t.stat(N())}function X(D){F=D,G(),o(),s(D)}let z=l.map(D=>({at:h.pos.get(D),r:d(D),key:{kind:"note",id:D,tip:`${m(D)} \xB7 ${f.get(D).born}`}}));return G(),{targets:()=>z,click(D){D.kind==="note"&&X(D.id)},hover(D){let j=D&&D.kind==="note"?D.id:null;j!==T&&(T=j,G())},update(D){"selected"in D&&(F=D.selected&&h.pos.has(D.selected)?D.selected:null,G())},stat:N,today:()=>{let D=l.reduce((j,O)=>j&&P(j).future.size>=P(O).future.size?j:O,null);return D&&P(D).future.size?{text:`${m(D)} reaches the most: ${xt(P(D).future.size,"note")} in its future`,label:"Show it",run:()=>{F=D,G(),o()}}:null},api:{layout:()=>h,graph:()=>c,cones:D=>P(D),selected:()=>F,notes:()=>l},dispose(){w.material.dispose(),x.material.dispose(),S.material.dispose()}}}};var id=(i,t)=>{let e=new Array(i).fill(0);for(let[n,s]of t)e[n]++,e[s]++;return e};function sd({n:i,bars:t,ground:e,sag:n,sagging:s,weakest:r,busiest:a,carry:o},c){let l=id(i,t),h=[];n[s]>0&&h.push({text:`${c(s)} sags most (${n[s].toFixed(2)}). It is held by ${xt(l[s],"link")}; link it to a note near the ground notes and it stiffens.`,label:"Open note",note:s}),r>=0&&h.push({text:`${c(t[r][0])} \u2013 ${c(t[r][1])} is closest to buckling: it is pushed hardest, so if that link goes its notes lose their support. A second route between them takes the load.`,label:"Show link",bar:r}),a>=0&&h.push({text:`${c(t[a][0])} \u2013 ${c(t[a][1])} carries the most (${o[a].toFixed(1)}). Everything leaning on it is one edit from sagging.`,label:"Show link",bar:a});let f=l.map((u,d)=>[u,d]).filter(([u,d])=>u===1&&!e.includes(d)).length;return f&&h.push({text:`${xt(f,"note")} hang from a single link. Each is a note to link from a second place.`,label:"Show worst",note:s}),{plain:"Picture your notes as a bridge. Links are the beams and notes are the joints. A note held up by only one beam droops, and a beam doing all the carrying is the one that snaps first.",about:"Each written link is a steel bar and each note a joint; the most linked notes are the ground. Load is the notes' weight. A note sags when few links hold it, and a link carries more when more notes lean on it.",insights:h}}function rd({bars:i,vector:t,freq:e,k:n,count:s},r){let a=m=>Math.abs(t[m])<.05?0:t[m]>0?1:-1,o=t.filter((m,M)=>a(M)>0).length,c=t.filter((m,M)=>a(M)<0).length,l=i.filter(([m,M])=>a(m)*a(M)<0).length,h=t.indexOf(Math.max(...t)),f=t.indexOf(Math.min(...t)),u=[{text:`Mode ${n+1} splits the vault ${o} notes against ${c}; ${xt(l,"link")} cross the cut${l<=Math.max(2,i.length*.05)?", so the two halves are barely connected":""}.`,label:"Show it",show:!0}];h!==f&&u.push({text:`${r(h)} and ${r(f)} swing furthest apart. A link between them, or through a shared note, ties the halves together.`,label:"Open "+r(h).slice(0,18),note:h});let d=t.filter((m,M)=>a(M)===0).length;return d&&u.push({text:`${xt(d,"note")} sit on the nodal line, belonging to neither half. They are the bridges; keep their links.`,label:"Show it",show:!0}),{plain:"Picture your notes as a drum skin. Tap it and it wobbles in a pattern. The two halves that move against each other are the two clumps of your notes that hardly talk to each other.",about:"Notes are masses on a stretched sheet and links are springs. The sheet rings in the shapes the links allow; amber swings up while blue swings down, and the dark line between them does not move. A lower frequency means a cleaner cut.",insights:u,freq:e,count:s}}function ad({n:i,bars:t,kept:e,hubs:n,order:s},r){let a=new Array(i).fill(0);t.forEach(([f,u],d)=>{e[d]&&(a[f]++,a[u]++)});let o=s.filter(f=>!a[f]&&!n.includes(f)),c=id(i,t),l=e.filter(Boolean).length,h=[];return h.push({text:`${l} of ${xt(t.length,"link")} carry the vault between its ${n.length} hubs. The rest are never the short way from one hub to another.`,label:"Show it",show:!0}),o.length&&h.push({text:`${xt(o.length,"note")} are off the backbone. ${r(o[0])} has ${xt(c[o[0]],"link")} but none that leads to a hub; link it to one.`,label:"Open note",note:o[0]}),h.push({text:"Links off the backbone are not wrong, but they add detours. Where two notes say the same thing, keep the one on the backbone.",label:"Show it",show:!0}),{plain:"Picture your notes as a slime mould finding food. It keeps the tubes that get used and lets the rest dry up. The links that stay thick are the ones your notes really rely on.",about:"A slime mould thickens the tubes that carry the most flow and lets the rest die. Here each written link is a tube and the hubs are the food: what survives is the shortest set of links that holds the vault together.",insights:h}}function us(i,t,{max:e=120,hubs:n=0}={}){let s=en(i),r=new Map(i.filter(g=>!Ie(g)||n&&g.moc).map(g=>[g.id,g])),a=n?g=>g==="link"||g==="moc":g=>g==="link",o=new Map([...r.keys()].map(g=>[g,new Set]));for(let g of t)a(g.kind)&&g.source!==g.target&&o.has(g.source)&&o.has(g.target)&&(o.get(g.source).add(g.target),o.get(g.target).add(g.source));let c=new Set,l=[];for(let g of[...o.keys()].sort()){if(c.has(g)||!o.get(g).size)continue;let p=[g];c.add(g);for(let y=0;y<p.length;y++)for(let v of o.get(p[y]))c.has(v)||(c.add(v),p.push(v));p.length>l.length&&(l=p)}let h=(g,p)=>s(r.get(p))-s(r.get(g))||(g<p?-1:1),f=g=>!!r.get(g).moc,d=[...l.filter(f).sort((g,p)=>o.get(p).size-o.get(g).size||(g<p?-1:1)).slice(0,n),...l.filter(g=>!f(g)).sort(h)].slice(0,e),m=new Map(d.map((g,p)=>[g,p])),M=[];for(let g of d)for(let p of o.get(g))m.has(p)&&m.get(g)<m.get(p)&&M.push([m.get(g),m.get(p)]);return{ids:d,bars:M,own:r,imp:s}}function ds(i,t,{radius:e=14,rest:n=3}={}){let s=i.length,r=i.map((a,o)=>{let c=nn(a)%6283/1e3,l=e*Math.sqrt((o+1)/s);return[Math.cos(c)*l,Math.sin(c)*l]});for(let a=0;a<80;a++){let o=r.map(()=>[0,0]),c=.5*(1-a/80);for(let l=0;l<s;l++)for(let h=l+1;h<s;h++){let f=r[l][0]-r[h][0],u=r[l][1]-r[h][1],d=6/(f*f+u*u+.01);o[l][0]+=f*d,o[l][1]+=u*d,o[h][0]-=f*d,o[h][1]-=u*d}for(let[l,h]of t){let f=r[h][0]-r[l][0],u=r[h][1]-r[l][1],d=Math.hypot(f,u)||1e-6,m=(d-n)*.08;o[l][0]+=f*m,o[l][1]+=u*m,o[h][0]-=f*m,o[h][1]-=u*m}for(let l=0;l<s;l++){let h=Math.hypot(...o[l])||1,f=Math.min(h,c*4)/h;r[l][0]+=o[l][0]*f,r[l][1]+=o[l][1]*f}}return r}function od({pos:i,bars:t,fixed:e,loads:n},{iterations:s=2e3,tolerance:r=1e-10,sway:a=1e-9}={}){let o=i.length,c=new Uint8Array(o).fill(1);for(let _ of e)c[_]=0;let l=t.map(([_,w])=>{let E=[0,1,2].map(S=>i[w][S]-i[_][S]),x=Math.hypot(...E)||1e-9;return{L:x,c:E.map(S=>S/x)}}),h=a,f=_=>{let w=new Float64Array(3*o);t.forEach(([E,x],S)=>{let{L:F,c:T}=l[S],I=0;for(let P=0;P<3;P++)I+=T[P]*(_[3*x+P]-_[3*E+P]);I/=F;for(let P=0;P<3;P++)w[3*x+P]+=T[P]*I,w[3*E+P]-=T[P]*I});for(let E=0;E<o;E++)for(let x=0;x<3;x++)w[3*E+x]=c[E]?w[3*E+x]+h*_[3*E+x]:0;return w},u=new Float64Array(3*o),d=0;for(let _=0;_<o;_++)if(c[_]&&n[_])for(let w=0;w<3;w++)u[3*_+w]=n[_][w],d+=u[3*_+w]**2;let m=new Float64Array(3*o),M=Float64Array.from(u),g=Float64Array.from(u),p=M.reduce((_,w)=>_+w*w,0);for(let _=0;_<s&&p>r*Math.max(d,1e-30);_++){let w=f(g),E=0;for(let T=0;T<g.length;T++)E+=g[T]*w[T];if(E<=0)break;let x=p/E,S=0;for(let T=0;T<m.length;T++)m[T]+=x*g[T],M[T]-=x*w[T],S+=M[T]*M[T];let F=S/p;p=S;for(let T=0;T<g.length;T++)g[T]=M[T]+F*g[T]}let y=Array.from({length:o},(_,w)=>[m[3*w],m[3*w+1],m[3*w+2]]),v=t.map(([_,w],E)=>{let{L:x,c:S}=l[E],F=0;for(let T=0;T<3;T++)F+=S[T]*(y[w][T]-y[_][T]);return F/x});return{u:y,force:v,residual:d?Math.sqrt(p/d):0}}function ld(i,t,{max:e=120,ground:n=.1}={}){let{ids:s,bars:r,own:a,imp:o}=us(i,t,{max:e}),c=s.length,l=ds(s,r),h=Math.max(1e-9,...s.map(g=>o(a.get(g)))),f=10,u=s.map((g,p)=>[l[p][0],(.5-o(a.get(g))/h)*2*f,l[p][1]]),d=Math.min(c,Math.max(3,Math.round(c*n))),m=[...Array(d).keys()],M=s.map(g=>(a.get(g).tasks||0)+.1);return{ids:s,pos:u,bars:r,fixed:m,loads:M.map(g=>[0,-g,0]),weight:M,ground:m.map(g=>s[g])}}function cd(i,t){let e=i.bars.map(([o,c])=>Math.hypot(...[0,1,2].map(l=>i.pos[c][l]-i.pos[o][l]))),n=t.force.map(Math.abs),s=t.force.map((o,c)=>o<0?-o*e[c]*e[c]:0),r=o=>o.reduce((c,l,h)=>l>o[c]?h:c,0),a=t.u.map((o,c)=>i.fixed.includes(c)?0:Math.hypot(...o));return{len:e,carry:n,buckle:s,sag:a,busiest:n.length?r(n):-1,weakest:s.length&&Math.max(...s)>0?r(s):-1,sagging:a.length?r(a):-1}}var Yx=.01,hd="#60a5fa",_c="#f87171",ud="#f59e0b",dd={id:"loadpaths",name:"Load paths",hint:"Which links carry the vault, and which note sags first",home:{yaw:.6,pitch:.65,dist:46,min:12,max:110},stage:{fog:[38,90]},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:a,invalidate:o}){let c=ld(e.nodes,e.links);if(c.ids.length<4){let L=()=>xt(c.ids.length,"linked note");return t.stat(L()),t.controls({at:"centre",lines:["Load paths needs a set of notes joined by written links.",`${xt(c.ids.length,"note")} joined so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:L,today:()=>null,api:{empty:!0}}}let l=od(c,{sway:Yx}),h=cd(c,l),f=new Map(e.nodes.map(L=>[L.id,L])),u=en(e.nodes),d=c.ids.length,m=L=>f.get(c.ids[L]).name,M=new Map(c.ids.map((L,C)=>[L,C])),g=L=>.3+.55*Math.sqrt(Math.max(0,u(f.get(c.ids[L])))),p=Math.max(...h.carry,1e-9),y=a.palette,v=new Yt,_=new Xe,w=new Mt,E=new H(0,1,0),x=L=>(i.scene.add(L),L),S=new Set(c.fixed),F=x(new fe(new ve(1,16,12),new Ee({roughness:.45}),d)),T=x(new fe(new fn(1,1,1,8,1),new Ee({roughness:.6}),Math.max(c.bars.length,1))),I=L=>.03+.17*Math.sqrt(h.carry[L]/p),P=n.selected&&M.has(n.selected)?M.get(n.selected):null,B=null,N=null,Z=L=>c.bars.map((C,nt)=>C[0]===L||C[1]===L?nt:-1).filter(C=>C>=0),G=L=>l.force[L]<0?"pushed":"pulled",X=L=>h.carry[L].toFixed(h.carry[L]<10?2:1),z=()=>{if(B!=null)return`${m(c.bars[B][0])} \u2013 ${m(c.bars[B][1])} \xB7 ${G(B)} with ${X(B)}`;let L=N??P;if(L!=null){let C=Z(L),nt=C.reduce((dt,ot)=>dt+h.carry[ot],0);return`${m(L)} \xB7 ${S.has(L)?"ground":`sags ${h.sag[L].toFixed(2)}`} \xB7 ${xt(C.length,"bar")} carrying ${nt.toFixed(1)}`}return`${xt(d,"note")} \xB7 ${xt(c.bars.length,"bar")} \xB7 ${xt(c.ground.length,"ground note")} \xB7 load ${c.weight.reduce((C,nt)=>C+nt,0).toFixed(1)}`};function D(){let L=N??P,C=new Set(L!=null?Z(L):B!=null?[B]:[]),nt=new Set(B!=null?c.bars[B]:[]);for(let ut=0;ut<d;ut++){let gt=g(ut)*(ut===L?1.4:1);v.makeScale(gt,gt,gt).setPosition(...c.pos[ut]),F.setMatrixAt(ut,v);let pt=(L!=null||B!=null)&&ut!==L&&!nt.has(ut)&&!Z(ut).some(Ct=>C.has(Ct));w.set(S.has(ut)?ud:y[(f.get(c.ids[ut]).cluster||0)%y.length]),ut===L&&w.set(a.fg),pt&&w.multiplyScalar(.25),F.setColorAt(ut,w)}c.bars.forEach(([ut,gt],pt)=>{let Ct=new H(...c.pos[ut]),St=new H(...c.pos[gt]),Q=St.clone().sub(Ct),Pt=Q.length()||1e-6,Ft=I(pt)*(C.has(pt)?1.6:1);_.setFromUnitVectors(E,Q.normalize()),v.compose(Ct.add(St).multiplyScalar(.5),_,new H(Ft,Pt,Ft)),T.setMatrixAt(pt,v),w.set(l.force[pt]<0?_c:hd),(L!=null||B!=null)&&!C.has(pt)&&w.multiplyScalar(.25),T.setColorAt(pt,w)});for(let ut of[F,T])ut.instanceMatrix.needsUpdate=!0,ut.instanceColor&&(ut.instanceColor.needsUpdate=!0);let dt=[],ot=(ut,gt,pt)=>dt.push({text:se(gt,34),at:c.pos[ut],dy:-14,color:pt});if(L!=null)dt.push({text:se(m(L),34),at:c.pos[L],strong:!0,dy:-18,run:()=>j(L),title:`Open ${m(L)}`});else if(B==null){if(h.sag[h.sagging]>0&&ot(h.sagging,`${m(h.sagging)} sags most`,a.fg),h.weakest>=0){let[ut,gt]=c.bars[h.weakest];ot(h.sag[ut]>=h.sag[gt]?ut:gt,"closest to buckling",_c)}}else for(let ut of c.bars[B])ot(ut,m(ut),a.fg);t.labels(dt),t.stat(z())}function j(L){P=L,B=null,D(),o(),s(c.ids[L])}let O=L=>[0,1,2].map(C=>(c.pos[c.bars[L][0]][C]+c.pos[c.bars[L][1]][C])/2),V=[...c.ids.map((L,C)=>({at:c.pos[C],r:g(C),key:{kind:"note",id:L,tip:`${m(C)} \xB7 ${S.has(C)?"ground":`sags ${h.sag[C].toFixed(2)}`}`}})),...c.bars.map((L,C)=>({at:O(C),r:Math.max(I(C)*2,.35),key:{kind:"bar",id:String(C),tip:`${m(L[0])} \u2013 ${m(L[1])} \xB7 ${G(C)} with ${X(C)}`}}))];return(()=>{let L=sd({n:d,bars:c.bars,ground:c.ground,sag:h.sag,sagging:h.sagging,weakest:h.weakest,busiest:h.busiest,carry:h.carry},m);t.explain({plain:L.plain,about:L.about,legend:[{color:hd,text:"pulled"},{color:_c,text:"pushed"},{color:ud,text:"ground"},{color:a.muted,text:"thicker bar = more load"}],insights:L.insights.map(C=>({text:C.text,label:C.label,run:()=>{C.bar!=null?(B=C.bar,P=null,D(),o()):j(C.note)}}))})})(),D(),{targets:()=>V,click(L){L.kind==="note"?j(M.get(L.id)):L.kind==="bar"&&(B=+L.id,P=null,D(),o())},hover(L){let C=L&&L.kind==="note"?M.get(L.id):null;C!==N&&(N=C,D())},update(L){"selected"in L&&(P=L.selected&&M.has(L.selected)?M.get(L.selected):null,B=null,D())},stat:z,today:()=>h.busiest<0?null:{text:`${m(c.bars[h.busiest][0])} \u2013 ${m(c.bars[h.busiest][1])} carries the most (${X(h.busiest)}), ${G(h.busiest)}`,label:"Show it",run:()=>{B=h.busiest,P=null,D(),o()}},api:{truss:()=>c,solved:()=>l,read:()=>h,selected:()=>P==null?null:c.ids[P],bar:()=>B,notes:()=>c.ids},dispose(){F.material.dispose(),T.material.dispose()}}}};function Xx(i,{sweeps:t=60,tolerance:e=1e-12}={}){let n=i.length,s=i.map(o=>Float64Array.from(o)),r=Array.from({length:n},(o,c)=>{let l=new Float64Array(n);return l[c]=1,l});for(let o=0;o<t;o++){let c=0;for(let l=0;l<n;l++)for(let h=l+1;h<n;h++)c+=s[l][h]*s[l][h];if(c<e*e)break;for(let l=0;l<n;l++)for(let h=l+1;h<n;h++){if(Math.abs(s[l][h])<1e-300)continue;let f=(s[h][h]-s[l][l])/(2*s[l][h]),u=Math.sign(f||1)/(Math.abs(f)+Math.sqrt(f*f+1)),d=1/Math.sqrt(u*u+1),m=u*d;for(let M=0;M<n;M++){let g=s[M][l],p=s[M][h];s[M][l]=d*g-m*p,s[M][h]=m*g+d*p}for(let M=0;M<n;M++){let g=s[l][M],p=s[h][M];s[l][M]=d*g-m*p,s[h][M]=m*g+d*p}for(let M=0;M<n;M++){let g=r[M][l],p=r[M][h];r[M][l]=d*g-m*p,r[M][h]=m*g+d*p}}}let a=[...Array(n).keys()].sort((o,c)=>s[o][o]-s[c][c]);return{values:a.map(o=>s[o][o]),vectors:a.map(o=>Array.from({length:n},(c,l)=>r[l][o]))}}function Jx(i,t){let e=Array.from({length:i},()=>new Array(i).fill(0));for(let[n,s]of t)n!==s&&(e[n][n]++,e[s][s]++,e[n][s]--,e[s][n]--);return e}function qx(i,t){let{values:e,vectors:n}=Xx(Jx(i,t)),s=[];for(let r=0;r<i;r++){if(e[r]<1e-9)continue;let a=n[r],o=Math.max(...a.map(Math.abs))||1,c=a.find(l=>Math.abs(l)>1e-9*o)<0?-1:1;s.push({value:e[r],freq:Math.sqrt(e[r]),vector:a.map(l=>c*l/o)})}return s}function yc(i,t=.05){let e=[],n=[],s=[];return i.forEach((r,a)=>(r>t?e:r<-t?n:s).push(a)),{up:e,down:n,rest:s}}function fd(i,t,{max:e=100}={}){let{ids:n,bars:s}=us(i,t,{max:e});return{ids:n,bars:s,pos:ds(n,s),modes:n.length>=3?qx(n.length,s):[]}}var Mc="#f59e0b",Sc="#38bdf8",jx=6,Qx=.18,pd=44,md={id:"modes",name:"Normal modes",hint:"How the vault would ring: its natural cuts into halves",home:{yaw:.7,pitch:.8,dist:50,min:14,max:110},stage:{fog:[40,100]},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:a,invalidate:o}){let c=fd(e.nodes,e.links,{max:80}),l=c.ids.length;if(!c.modes.length){let st=()=>xt(l,"linked note");return t.stat(st()),t.controls({at:"centre",lines:["Normal modes needs a set of notes joined by written links.",`${xt(l,"note")} joined so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:st,today:()=>null,api:{empty:!0}}}let h=new Map(e.nodes.map(st=>[st.id,st])),f=st=>h.get(c.ids[st]).name,u=new Map(c.ids.map((st,R)=>[st,R])),d=new Mt(Mc),m=new Mt(Sc),M=new Mt(a.bg).lerp(new Mt(a.muted),.12),g=new Yt,p=new Mt,y=st=>(i.scene.add(st),st),v=c.pos.map(st=>st[0]),_=c.pos.map(st=>st[1]),w=2,E=Math.min(...v)-w,x=Math.max(...v)+w,S=Math.min(..._)-w,F=Math.max(..._)+w,T=(E+x)/2,I=(S+F)/2,P=x-E,B=F-S,N=st=>[c.pos[st][0]-T,c.pos[st][1]-I],Z=Math.max(jx,Qx*Math.max(P,B)),G=new bi(P,B,pd,pd).rotateX(-Math.PI/2),X=G.attributes.position.count,z=new Float32Array(X*l);for(let st=0;st<X;st++){let R=G.attributes.position.getX(st),b=G.attributes.position.getZ(st),U=0;for(let q=0;q<l;q++){let[K,at]=N(q),mt=1/((R-K)**2+(b-at)**2+4);z[st*l+q]=mt,U+=mt}for(let q=0;q<l;q++)z[st*l+q]/=U}G.setAttribute("color",new Gt(new Float32Array(X*3),3));let D=y(new re(G,new Ee({vertexColors:!0,roughness:.55,metalness:.05,side:ye,transparent:!0,opacity:.9}))),j=y(new re(G,new Ee({color:a.fg,wireframe:!0,transparent:!0,opacity:.12}))),O=y(new fe(new ve(1,16,12),new Ee({roughness:.4}),l)),V=new he;V.setAttribute("position",new an(new Float32Array(c.bars.length*6),3));let tt=y(new Oe(V,new Ue({color:a.fg,transparent:!0,opacity:.55})));tt.frustumCulled=O.frustumCulled=D.frustumCulled=j.frustumCulled=!1;let L=st=>.4+(st<6?.2:0),C=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,nt=!1,dt=0,ot=0,ut=!C,gt=C?.25:0,pt=null,Ct=n.selected&&u.has(n.selected)?u.get(n.selected):null,St=null,Q=()=>c.modes[ot],Pt=()=>Math.sin(gt*2*Math.PI),Ft=new Float64Array(l),Zt=()=>yc(Q().vector),Ht=st=>Q().vector[st],Dt=()=>{let st=St??Ct;if(st!=null)return`${f(st)} \xB7 ${Math.abs(Ht(st))<.05?"on a nodal line":Ht(st)>0?"swings up":"swings down"} ${Math.abs(Ht(st)).toFixed(2)} in mode ${ot+1}`;let R=Zt();return`Mode ${ot+1} of ${c.modes.length} \xB7 ${R.up.length} up, ${R.down.length} down \xB7 frequency ${Q().freq.toFixed(2)}`};function qt(){let st=Zt(),R=[ot===0?"The cleanest cut of the vault into two halves":`${xt(st.up.length,"note")} swinging up, ${xt(st.down.length,"note")} down, ${xt(st.rest.length,"note")} on a nodal line`];t.controls({lines:R,buttons:[{label:"\u25C0",title:"Previous mode (slower)",off:ot===0,run:()=>vt(ot-1)},{label:`Mode ${ot+1}`,title:"Back to mode 1, the slowest",run:()=>vt(0)},{label:"\u25B6",title:"Next mode (faster)",off:ot===c.modes.length-1,run:()=>vt(ot+1)},{label:ut?"Hold":"Ring",title:ut?"Hold the sheet still":"Let the sheet ring",run:()=>{ut=!ut,pt=null,qt(),o()}}]})}function $t(){let st=[],R=Q().vector,b=R.indexOf(Math.max(...R)),U=R.indexOf(Math.min(...R)),q=St??Ct,K=(at,mt,it)=>st.push({text:se(mt,34),at:[N(at)[0],0,N(at)[1]],dy:-14,color:it});q!=null?st.push({text:se(f(q),34),at:[N(q)[0],0,N(q)[1]],strong:!0,dy:-18,run:()=>Jt(q),title:`Open ${f(q)}`}):(K(b,f(b),Mc),U!==b&&K(U,f(U),Sc)),t.labels(st)}function Te(){let st=Q().vector,R=G.attributes.color;for(let b=0;b<X;b++){let U=0;for(let q=0;q<l;q++)U+=z[b*l+q]*st[q];p.copy(M).lerp(U>=0?d:m,Math.min(1,Math.abs(U)**.8*1.25)),R.setXYZ(b,p.r,p.g,p.b)}R.needsUpdate=!0,Y()}function Me(){let st=rd({bars:c.bars,vector:Q().vector,freq:Q().freq,k:ot,count:c.modes.length},f);t.explain({plain:st.plain,about:st.about,legend:[{color:Mc,text:"swings up"},{color:Sc,text:"swings down"},{color:a.muted,text:"nodal line, still"}],insights:st.insights.map(R=>({text:R.text,label:R.label,run:()=>{R.note!=null?Jt(R.note):(Ct=null,vt(ot))}}))})}function Y(){$t(),t.stat(Dt())}function J(){let st=Q().vector,R=Pt(),b=G.attributes.position;for(let q=0;q<X;q++){let K=0;for(let at=0;at<l;at++)K+=z[q*l+at]*st[at];b.setY(q,K*Z*R)}b.needsUpdate=!0,G.computeVertexNormals();let U=V.attributes.position;for(let q=0;q<l;q++)Ft[q]=st[q]*Z*R;c.bars.forEach(([q,K],at)=>{let[mt,it]=N(q),[ht,yt]=N(K);U.setXYZ(2*at,mt,Ft[q]+.05,it),U.setXYZ(2*at+1,ht,Ft[K]+.05,yt)}),U.needsUpdate=!0;for(let q=0;q<l;q++){let[K,at]=N(q),mt=q===(St??Ct),it=L(q)*(mt?1.5:1);g.makeScale(it,it,it).setPosition(K,Ft[q]+it*.6,at),O.setMatrixAt(q,g),p.copy(M).lerp(st[q]>=0?d:m,Math.min(1,Math.abs(st[q])**.8*1.25+.25)),mt&&p.set(a.fg),O.setColorAt(q,p)}O.instanceMatrix.needsUpdate=!0,O.instanceColor&&(O.instanceColor.needsUpdate=!0)}function vt(st){ot=Math.max(0,Math.min(c.modes.length-1,st)),Te(),Me(),qt(),J(),o()}function Jt(st){Ct=st,Y(),J(),o(),s(c.ids[st])}let ct=()=>c.ids.map((st,R)=>{let[b,U]=N(R);return{at:[b,Ft[R]+.4,U],r:L(R)*1.2,key:{kind:"note",id:st,tip:`${f(R)} \xB7 ${Math.abs(Ht(R))<.05?"still":Ht(R)>0?"up":"down"} ${Math.abs(Ht(R)).toFixed(2)}`}}}),te=()=>{nt=!0,clearTimeout(dt)},Rt=()=>{clearTimeout(dt),dt=setTimeout(()=>{nt=!1,pt=null,o()},1500)};return i.canvas.addEventListener("pointerdown",te,!0),addEventListener("pointerup",Rt),addEventListener("pointercancel",Rt),Me(),Te(),qt(),J(),{targets:ct,click(st){st.kind==="note"&&Jt(u.get(st.id))},hover(st){let R=st&&st.kind==="note"?u.get(st.id):null;R!==St&&(St=R,Y(),J())},update(st){"selected"in st&&(Ct=st.selected&&u.has(st.selected)?u.get(st.selected):null,Y(),J())},frame(){if(ut&&!nt){let st=performance.now();pt!=null&&(gt=(gt+(st-pt)/1e3*.5*Math.min(2.2,.45+Q().freq*.8))%1),pt=st,J(),o()}else pt=null},stat:Dt,today:()=>{let st=yc(c.modes[0].vector);return{text:`The vault's cleanest cut is ${st.up.length} notes against ${st.down.length}`,label:"Show it",run:()=>{Ct=null,vt(0)}}},api:{modes:()=>c.modes,ids:()=>c.ids,mode:()=>ot,setMode:vt,playing:()=>ut,moving:()=>ut&&!nt,hold(st){ut=!1,st!=null&&(gt=st),J(),qt(),o()},span:()=>Math.max(P,B),rise:()=>Z,selected:()=>Ct==null?null:c.ids[Ct],heights:()=>Array.from(Ft),sheetHeights:()=>Array.from(G.attributes.position.array.filter((st,R)=>R%3===1)),split:Zt},dispose(){clearTimeout(dt),i.canvas.removeEventListener("pointerdown",te,!0),removeEventListener("pointerup",Rt),removeEventListener("pointercancel",Rt);for(let st of[D,j,O,tt])st.material.dispose();G.dispose(),V.dispose()}}}};function vc(i,t,e,n,s){let r=[],a=new Array(i).fill(-1);for(let h=0;h<i;h++)h!==s&&(a[h]=r.length,r.push(h));let o=r.length,c=Array.from({length:o},()=>new Float64Array(o+1));t.forEach(([h,f],u)=>{let d=e[u];for(let[m,M]of[[h,f],[f,h]])a[m]>=0&&(c[a[m]][a[m]]+=d,a[M]>=0&&(c[a[m]][a[M]]-=d))}),a[n]>=0&&(c[a[n]][o]=1);for(let h=0;h<o;h++)c[h][h]<1e-300&&(c[h][h]=1);for(let h=0;h<o;h++){let f=h;for(let d=h+1;d<o;d++)Math.abs(c[d][h])>Math.abs(c[f][h])&&(f=d);[c[h],c[f]]=[c[f],c[h]];let u=c[h][h];if(!(Math.abs(u)<1e-300))for(let d=h+1;d<o;d++){let m=c[d][h]/u;if(m)for(let M=h;M<=o;M++)c[d][M]-=m*c[h][M]}}let l=new Float64Array(o);for(let h=o-1;h>=0;h--){let f=c[h][o];for(let u=h+1;u<o;u++)f-=c[h][u]*l[u];l[h]=Math.abs(c[h][h])<1e-300?0:f/c[h][h]}return Array.from({length:i},(h,f)=>a[f]>=0?l[a[f]]:0)}function Kx(i,t,e,n,s,r){let a=vc(i,t,t.map((o,c)=>e[c]/n[c]),s,r);return t.map(([o,c],l)=>e[l]/n[l]*(a[o]-a[c]))}function $x(i,t,{lengths:e,pairs:n,steps:s=200,dt:r=.5,floor:a=1e-6,keep:o=40}={}){let c=e||t.map(()=>1),l=t.map(()=>1),h=[Float32Array.from(l)],f=Math.max(1,Math.floor(s/(o-1)));for(let u=0;u<s&&n.length;u++){let[d,m]=n[u%n.length],M=Kx(i,t,l,c,d,m);for(let g=0;g<l.length;g++)l[g]=Math.max(a,l[g]+r*(Math.abs(M[g])-l[g]));(u+1)%f===0&&h.length<o&&h.push(Float32Array.from(l))}for(;h.length<o;)h.push(Float32Array.from(l));return h[h.length-1]=Float32Array.from(l),{D:l,frames:h,steps:s}}function t_(i,t=.1){let e=Math.max(...i,1e-12),n=Array.from(i,s=>s/e);return{share:n,kept:n.map(s=>s>=t)}}var e_=24;function gd(i,t,{max:e=80,hubs:n=6,hubMax:s=e_,steps:r=200}={}){let{ids:a,bars:o,own:c}=us(i,t,{max:e,hubs:s}),l=a.map((p,y)=>c.get(p).moc?y:-1).filter(p=>p>=0),h=l.length>=2?"hubs":"top",f=a.map((p,y)=>y).filter(p=>!l.includes(p)),u=h==="hubs"?l:f.slice(0,Math.min(n,f.length)),d=[];for(let p=0;p<u.length;p++)for(let y=p+1;y<u.length;y++)d.push([u[p],u[y]]);let m=d.length?$x(a.length,o,{pairs:d,steps:Math.max(r,d.length)}):{D:o.map(()=>1),frames:[Float32Array.from(o.map(()=>1))]},{share:M,kept:g}=t_(m.D);return{ids:a,bars:o,pos:ds(a,o),hubs:u,fed:h,D:m.D,frames:m.frames,share:M,kept:g}}function xd(i=1){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function _d(i,t){let e=Array.from({length:i},()=>[]);for(let[r,a]of t)e[r].push(a),e[a].push(r);let n=new Array(i).fill(-1),s=0;for(let r=0;r<i;r++){if(n[r]>=0)continue;let a=[r];for(n[r]=s;a.length;)for(let o of e[a.pop()])n[o]<0&&(n[o]=s,a.push(o));s++}return n}function Do(i,t,e){if(e.length<2)return 0;let n=_d(i,t),s=t.map(()=>1),r=0,a=0;for(let o=0;o<e.length;o++)for(let c=o+1;c<e.length;c++)a++,r+=n[e[o]]!==n[e[c]]?i:vc(i,t,s,e[o],e[c])[e[o]];return r/a}function yd(i,t,e){if(i<2||new Set(_d(i,t)).size!==1)return null;let n=i-1,s=Array.from({length:n},(l,h)=>{let f=new Float64Array(2*n);return f[n+h]=1,f});for(let[l,h]of t){let f=l-1,u=h-1;f>=0&&s[f][f]++,u>=0&&s[u][u]++,f>=0&&u>=0&&(s[f][u]--,s[u][f]--)}for(let l=0;l<n;l++){let h=l;for(let u=l+1;u<n;u++)Math.abs(s[u][l])>Math.abs(s[h][l])&&(h=u);[s[l],s[h]]=[s[h],s[l]];let f=s[l][l];for(let u=0;u<2*n;u++)s[l][u]/=f;for(let u=0;u<n;u++){if(u===l||!s[u][l])continue;let d=s[u][l];for(let m=0;m<2*n;m++)s[u][m]-=d*s[l][m]}}let r=(l,h)=>l===0||h===0?0:s[l-1][n+h-1],a=(l,h)=>r(l,l)+r(h,h)-2*r(l,h),o=[];for(let l=0;l<e.length;l++)for(let h=l+1;h<e.length;h++)o.push([e[l],e[h]]);let c=l=>o.length?o.reduce((h,[f,u])=>h+l(f,u),0)/o.length:0;return{base:c(a),after:([l,h])=>{let f=a(l,h);return c((u,d)=>{let m=r(u,l)-r(u,h)-r(d,l)+r(d,h);return a(u,d)-m*m/(1+f)})}}}var fs=(i,t)=>i<t?i+","+t:t+","+i;function n_(i,t,e,n=null){let s=(r,a)=>r!==a&&!t.has(fs(r,a))&&!(n&&(n.has(r)||n.has(a)));for(let r=0;r<200;r++){let a=Math.floor(e()*i),o=Math.floor(e()*i);if(s(a,o))return[a,o]}for(let r=0;r<i;r++)for(let a=r+1;a<i;a++)if(s(r,a))return[r,a];return null}function i_(i,t,e,n,{shuffles:s=50,seed:r=1,fast:a,skip:o=null}={}){let c=a===void 0?yd(i,t,e):a,l=c?c.base:Do(i,t,e),h=p=>c?c.after(p):Do(i,[...t,p],e),f=new Set(t.map(([p,y])=>fs(p,y))),u=o&&o.length?new Set(o):null;if(n[0]===n[1]||f.has(fs(n[0],n[1]))||u&&(u.has(n[0])||u.has(n[1])))return{gain:0,p:1,valid:!1};let d=l-h(n),m=xd(r),M=0,g=new Set(f);g.add(fs(n[0],n[1]));for(let p=0;p<s;p++){let y=n_(i,g,m,u);if(!y)break;l-h(y)>=d&&M++}return{gain:d,p:(1+M)/(1+s),valid:!0}}function s_(i,t,e,n,{shuffles:s=50,seed:r=1,alpha:a=.05,minGain:o=.001,skip:c=null}={}){let l=yd(i,t,e);return n.map(h=>({link:h,...i_(i,t,e,h,{shuffles:s,seed:r,fast:l,skip:c})})).filter(h=>h.valid&&h.p<a&&h.gain>=o).sort((h,f)=>f.gain-h.gain||h.p-f.p)}function r_(i,t,{max:e=200,seed:n=1,skip:s=null}={}){let r=new Set(t.map(([l,h])=>fs(l,h))),a=[],o=new Set(s||[]);for(let l=0;l<i;l++)if(!o.has(l))for(let h=l+1;h<i;h++)!o.has(h)&&!r.has(fs(l,h))&&a.push([l,h]);if(a.length<=e)return a;let c=xd(n);for(let l=a.length-1;l>0;l--){let h=Math.floor(c()*(l+1));[a[l],a[h]]=[a[h],a[l]]}return a.slice(0,e).sort((l,h)=>l[0]-h[0]||l[1]-h[1])}function Md(i,t,e,{steps:n=5,max:s=200,shuffles:r=50,seed:a=1,alpha:o=.05,minGain:c=.001,skip:l=null}={}){let h=t.map(([d,m])=>[d,m]),f=[],u=Do(i,h,e);for(let d=0;d<n;d++){let m=s_(i,h,e,r_(i,h,{max:s,seed:a+d,skip:l}),{shuffles:r,seed:a+d,alpha:o,minGain:c,skip:l})[0];if(!m)break;h=[...h,m.link],f.push(m)}return{added:f,before:u,after:Do(i,h,e)}}var a_=8,Sd=.1,vd={id:"slime",name:"Slime mould",hint:"Which written links carry the vault, and which fade away",home:{yaw:.6,pitch:.75,dist:46,min:14,max:110},stage:{fog:[40,100]},actions:["graph","add-link","decline-link"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:a,invalidate:o}){let c=gd(e.nodes,e.links,{max:80}),l=c.ids.length,h=c.frames.length-1;if(l<3||c.hubs.length<2){let U=()=>xt(l,"linked note");return t.stat(U()),t.controls({at:"centre",lines:["Slime mould needs a set of notes joined by written links.",`${xt(l,"note")} joined so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:U,today:()=>null,api:{empty:!0}}}let f=new Map(e.nodes.map(U=>[U.id,U])),u=U=>f.get(c.ids[U]).name,d=new Map(c.ids.map((U,q)=>[U,q])),m=c.fed==="hubs"?"hubs":"most linked notes",M=new Set(c.hubs),g=Math.max(...c.D,1e-12),p=U=>(i.scene.add(U),U),y=c.pos.map(U=>U[0]),v=c.pos.map(U=>U[1]),_=(Math.min(...y)+Math.max(...y))/2,w=(Math.min(...v)+Math.max(...v))/2,E=20,x=Math.max(1e-9,...c.pos.map(U=>Math.hypot(U[0]-_,U[1]-w))),S=E/x,F=U=>[(c.pos[U][0]-_)*S,(c.pos[U][1]-w)*S],T=9,I=new Float64Array(l),P=[],B=U=>[F(U)[0],I[U],F(U)[1]],N=()=>{let U=new Float64Array(l);c.bars.forEach(([K,at],mt)=>{let it=Zt[mt]/g;U[K]+=it,U[at]+=it});let q=Math.max(...U,1e-9);for(let K=0;K<l;K++)I[K]=T*Math.sqrt(U[K]/q)*(M.has(K)?1:.85)},Z=new Yt,G=new Mt,X=new Mt(a.bg).lerp(new Mt(a.muted),.55),z=new Mt("#f59e0b"),D=new Mt(a.accent||"#38bdf8"),j=new Mt(a.fg),O=new H(0,1,0),V=new H,tt=new H,L=new Xe,C=new H,nt=p(new fe(new fn(1,1,1,10,1),new Ee({roughness:.5}),c.bars.length)),dt=p(new fe(new ve(1,16,12),new Ee({roughness:.4}),l));nt.frustumCulled=dt.frustumCulled=!1;let ot=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,ut=ot?h:0,gt=!ot,pt=null,Ct=n.selected&&d.has(n.selected)?d.get(n.selected):null,St=null,Q=()=>{let U=c.frames[Math.floor(ut)],q=c.frames[Math.min(h,Math.floor(ut)+1)],K=ut-Math.floor(ut);return Array.from(U,(at,mt)=>at+(q[mt]-at)*K)},Pt=U=>U.filter(q=>q/g>=Sd).length,Ft=U=>M.has(U)?.75:.4,Zt=Q();N();let Ht=()=>{let U=St??Ct;if(U!=null){let q=c.bars.map((at,mt)=>at[0]===U||at[1]===U?mt:-1).filter(at=>at>=0),K=q.filter(at=>Zt[at]/g>=Sd).length;return`${u(U)} \xB7 ${M.has(U)?"hub \xB7 ":""}${K} of ${xt(q.length,"link")} carry on`}return`${Pt(Zt)} of ${xt(c.bars.length,"link")} carry on \xB7 fed by ${c.hubs.length} ${m} \xB7 step ${Math.round(ut)} of ${h}`};function Dt(){let U=ut>=h;t.controls({lines:[U?`The links that carry flow between the ${m}`:"Tubes thicken where flow is high and thin where it is not"],buttons:[{label:gt&&!U?"Hold":U?"Grow again":"Play",title:gt&&!U?"Hold the growth":U?"Start again from tubes of equal width":"Let the mould grow",run:()=>{ut>=h&&(ut=0),gt=!(gt&&!U),pt=null,$t(),o()}},{label:"Start",title:"Back to tubes of equal width",off:ut===0,run:()=>{ut=0,gt=!1,pt=null,$t(),o()}},{label:"End",title:"Jump to the finished backbone",off:ut>=h,run:()=>{ut=h,gt=!1,$t(),o()}},{label:"Simulate",title:`Find links that would shorten the routes between your ${m}, and test each against random links`,run:st}]})}function qt(){let U=[],q=St??Ct;P.length=0;let K=(at,mt)=>{mt.at=B(at),P.push([at,mt.at]),U.push(mt)};for(let at of c.hubs.slice(0,4))at!==q&&K(at,{text:se(u(at),30),dy:-16,color:a.accent});q!=null&&K(q,{text:se(u(q),34),strong:!0,dy:-20,run:()=>Me(q),title:`Open ${u(q)}`}),t.labels(U)}function $t(){Zt=Q(),Te(),qt(),Dt(),t.stat(Ht())}function Te(){N(),c.bars.forEach(([U,q],K)=>{let[at,mt,it]=B(U),[ht,yt,k]=B(q),ft=Math.min(1,Zt[K]/g),lt=.05+.4*Math.sqrt(ft);V.set(ht-at,yt-mt,k-it);let wt=V.length()||1e-6;V.normalize(),tt.set((at+ht)/2,(mt+yt)/2,(it+k)/2),L.setFromUnitVectors(O,V),C.set(lt,wt,lt),Z.compose(tt,L,C),nt.setMatrixAt(K,Z),G.copy(X).lerp(z,Math.min(1,Math.sqrt(ft)*1.1)),nt.setColorAt(K,G)}),nt.instanceMatrix.needsUpdate=!0,nt.instanceColor&&(nt.instanceColor.needsUpdate=!0);for(let U=0;U<l;U++){let[q,K,at]=B(U),mt=U===(St??Ct),it=Ft(U)*(mt?1.4:1);Z.makeScale(it,it,it).setPosition(q,K,at),dt.setMatrixAt(U,Z),G.copy(M.has(U)?D:X).lerp(j,M.has(U)?0:.35),mt&&G.copy(j),dt.setColorAt(U,G)}for(let[U,q]of P)q[1]=I[U];dt.instanceMatrix.needsUpdate=!0,dt.instanceColor&&(dt.instanceColor.needsUpdate=!0)}function Me(U){Ct=U,$t(),o(),s(c.ids[U])}let Y=()=>c.ids.map((U,q)=>({at:B(q),r:Ft(q)*1.3,key:{kind:"note",id:U,tip:`${u(q)}${M.has(q)?" \xB7 hub":""}`}})),J=ad({n:l,bars:c.bars,kept:c.kept,hubs:c.hubs,order:c.ids.map((U,q)=>q)},u),vt=null,Jt=new Set,ct=()=>{Jt.clear();for(let U of n.declined||[])Jt.add(U.from+">"+U.to)};ct();let te=()=>vt?vt.rows.filter(U=>!Jt.has(U.from+">"+U.to)):[],Rt=U=>{let q=U.from+">"+U.to,K=[d.get(U.from),d.get(U.to)],at=`about 1 in ${Math.max(2,Math.round(1/U.p))}`;return{text:`Link ${u(K[0])} to ${u(K[1])}: routes between your ${m} get ${Math.max(1,Math.round(U.pct*100))}% shorter. A random link would do this ${at} times.`,label:"Add link",title:`Add a link between ${u(K[0])} and ${u(K[1])}`,run:()=>{Jt.add(q),R(),r("add-link",{from:U.from,to:U.to})},extra:[{label:"Decline",title:"Skip this link",run:()=>{Jt.add(q),R(),r("decline-link",{from:U.from,to:U.to})}},{label:"Show",title:`Show ${u(K[0])}`,run:()=>Me(K[0])}]}};function st(){let U=Md(l,c.bars,c.hubs,{steps:5,max:200,shuffles:50,seed:1,skip:c.fed==="hubs"?c.hubs:null}),q=U.before;vt={rows:U.added.map(at=>{let mt={from:c.ids[at.link[0]],to:c.ids[at.link[1]],p:at.p,pct:q>0?at.gain/q:0};return q-=at.gain,mt})},ct(),R(),t.card(!0)}function R(){let U=te(),q=vt&&!U.length?[{text:vt.rows.length?"No more links to test.":`No link does better than a random one would. Your ${m} already reach each other about as well as links can.`,label:"Show it",run:()=>{Ct=null,ut=h,gt=!1,$t(),o()}}]:[];t.explain({plain:J.plain,about:J.about,legend:b,insights:[...U.map(Rt),...q,...J.insights.map(K=>({text:K.text,label:K.label,run:()=>{K.note!=null?Me(K.note):(Ct=null,ut=h,gt=!1,$t(),o())}}))]})}let b=[{color:"#f59e0b",text:"carries flow (higher = more)"},{color:a.muted,text:"fading"},{color:a.accent||"#38bdf8",text:"hub"}];return R(),$t(),{targets:Y,click(U){U.kind==="note"&&Me(d.get(U.id))},hover(U){let q=U&&U.kind==="note"?d.get(U.id):null;q!==St&&(St=q,$t())},update(U){"declined"in U&&(n={...n,declined:U.declined},vt&&(ct(),R())),"selected"in U&&(Ct=U.selected&&d.has(U.selected)?d.get(U.selected):null,$t())},frame(){if(gt&&ut<h){let U=performance.now();pt!=null&&(ut=Math.min(h,ut+(U-pt)/1e3*a_)),pt=U,ut>=h?(gt=!1,$t()):(Zt=Q(),Te(),t.stat(Ht())),o()}else pt=null},stat:Ht,today:()=>({text:`${Pt(c.frames[h])} of ${xt(c.bars.length,"link")} carry the vault between its ${c.hubs.length} ${m}`,label:"Show it",run:()=>{Ct=null,ut=h,gt=!1,$t()}}),api:{ids:()=>c.ids,hubs:()=>c.hubs.map(U=>c.ids[U]),step:()=>ut,steps:()=>h,playing:()=>gt&&ut<h,widths:()=>Array.from(Zt),final:()=>Array.from(c.D),setStep(U){ut=Math.max(0,Math.min(h,U)),gt=!1,$t(),o()},hold(){gt=!1,$t()},selected:()=>Ct==null?null:c.ids[Ct],carrying:()=>Pt(Zt),links:()=>c.bars.length},dispose(){for(let U of[nt,dt])U.material.dispose(),U.geometry.dispose()}}}};function bd(i,{linkedOnly:t=!0}={}){let e=en(i.nodes),n=new Map;for(let s of i.nodes)s.moc&&!n.has(s.cluster)&&n.set(s.cluster,s);return[...i.clusters].sort((s,r)=>r.size-s.size||s.id-r.id).map(s=>({cluster:s.id,name:s.label||s.name,moc:n.get(s.id)||null,notes:i.nodes.filter(r=>r.cluster===s.id&&!Ie(r)&&!(t&&r.isolated)).sort((r,a)=>e(a)-e(r)||(r.id<a.id?-1:1))})).filter(s=>s.notes.length)}var Lo=(i,t=1)=>{let e=Math.max(1,Math.ceil(Math.sqrt(i*t)));return{cols:e,rows:Math.ceil(i/e)}},bc=i=>{let t=nn(i),e=Math.imul(t^t>>>15,2246822507)>>>0;return[(t>>>4)%1e3/1e3,(e>>>7)%1e3/1e3]};function wd(i){let{cols:t,rows:e}=Lo(i),n=(t-1)/2,s=(e-1)/2,r=[];for(let a=0;a<e;a++)for(let o=0;o<t;o++)r.push([o-n,a-s]);return r.sort((a,o)=>Math.hypot(a[0],a[1])-Math.hypot(o[0],o[1])||a[1]-o[1]||a[0]-o[0]).slice(0,i)}var wc=2.4,o_=["#22d3ee","#f472b6","#facc15","#a5f3fc"],Ed="#fb7185",Td="#facc15",l_=(i,t,e)=>e(i)?0:t(i)>.3?2:1;function c_(i,{hall:t=!1,now:e=Date.now()}={}){let n=en(i.nodes),s=Xu(i.nodes),r=Uo(i),a=bd(i),o=Math.max(...a.map(_=>Lo(_.notes.length).cols),2)*wc+3,{cols:c,rows:l}=Lo(Math.max(a.length,1),.8),h=[],f=[],u=new Set,d=-(c-1)*o/2,m=-(l-1)*o/2;a.forEach((_,w)=>{_.x=d+w%c*o,_.z=m+Math.floor(w/c)*o,f.push({x:_.x,z:_.z,size:o-1.2,d:w});let E=wd(_.notes.length);if(_.notes.forEach((x,S)=>{let F=Math.max(.7,Math.min(1.8,.35+Math.log1p(x.words||0)*.2)),T=.9+9*Math.sqrt(Math.max(0,n(x))),[I,P]=E[S];h.push({n:x,x:_.x+I*wc,z:_.z+P*wc,w:F,h:T,kind:"tower",d:w,level:l_(x,s,r)}),u.add(x.id)}),_.moc){let x=Math.max(3,...h.filter(S=>S.d===w).map(S=>S.h));h.push(t?{n:_.moc,x:_.x,z:_.z+o/2-1.3,w:1.4,h:1.1,kind:"hall",d:w,level:2}:{n:_.moc,x:_.x,z:_.z-o/2+1.6,w:.9,h:x+3,kind:"spire",d:w,level:2}),u.add(_.moc.id)}_.cars=Math.round(2+10*Math.min(1,_.notes.reduce((x,S)=>x+s(S),0)/6))});let M=m+(l-1)*o+o/2+3,g=Math.max(c*o-4,8);for(let _ of i.nodes){if(Ie(_)||u.has(_.id))continue;let[w]=bc("stall:"+_.id);h.push({n:_,x:d-o/2+2+w*g,z:M+nn(_.id)%3*1.4,w:.7,h:.8,kind:"stall",d:-1,level:1})}let p=e-7*864e5,y=_=>typeof _.n.born=="string"?Date.parse(_.n.born):NaN,v=h.filter(_=>_.kind==="tower"&&y(_)>=p).sort((_,w)=>y(w)-y(_)).slice(0,15).map(_=>_.n.id);return{towers:h,pads:f,districts:a,cell:o,front:M,fresh:v,bounds:{x:[d-o/2,-d+o/2],z:[m-o/2,M+3]}}}function h_(i,t){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d");n.fillStyle=t.wall,n.fillRect(0,0,128,128);for(let r=0;r<8;r++)for(let a=0;a<8;a++){let o=nn(`${i}:${a}:${r}`)%1e3/1e3,c=o<i;n.fillStyle=c?t.lit[(a+r*3)%t.lit.length]:t.pane,n.globalAlpha=c?.55+.45*(o/i):.5,n.fillRect(a*16+3,r*16+3,10,11)}let s=new Vs(e);return s.wrapS=s.wrapT=Ji,s.colorSpace=Be,s.magFilter=Ce,s}var fi=(i,t,e)=>new Mt(i).lerp(new Mt(t),e),u_={id:"cyberpunk",name:"Cyberpunk",hint:"A neon city: topics are districts, notes are towers, stale ones go dark",stage:{fog:[55,170],ambient:.4},tower:"tower",hall:!1,cranes:!1,sheet:{wall:"#2a2a36",pane:"#3a3a4a",lit:o_},beacon:Ed,beaconName:"pink",stall:Td,arc:"#22d3ee",wall:(i,t)=>fi(i,"#ffffff",t===0?.55:.3).multiplyScalar(t===0?.5:1),lane:(i,t,e,n)=>({y:4+t*8,z:(i-.5)*(n-3),c:e%3?"#fca5a5":"#e0f2fe"}),stat:i=>`${xt(i.towers,"tower")} \xB7 ${i.dark} dark \xB7 ${xt(i.districts,"district")}`,plain:"Picture your notes as a city. A tall tower is a note everything else leans on. Lit windows mean someone has been in it lately; a dark tower has been left alone for a long time.",about:"Each topic is a district and each note a tower. Height is how many notes link to it and how much runs through it; lit windows are how recently it was edited; dark is stale. A pink beacon on a roof is an open task, the tall thin spire is the topic's map, and a stall on the street is a note in no topic.",legend:[{color:"#22d3ee",text:"height = relied on, windows = recent"},{color:"#6b7280",text:"dark = stale"},{color:Ed,text:"beacon = open task"},{color:Td,text:"stall = no topic"}]},d_="#e5e7eb",Ad="#facc15",Ec=i=>({id:i.id,name:i.name,hint:i.hint,home:{yaw:.55,pitch:.38,dist:58,min:12,max:140},stage:i.stage,actions:["graph"],build({stage:t,frame:e,data:n,inputs:s,onOpen:r,onAction:a,theme:o,invalidate:c}){let l=c_(n,{hall:i.hall}),h=l.towers,f=h.filter(J=>J.kind!=="stall");if(f.length<3){let J=()=>xt(h.length,"note");return e.stat(J()),e.controls({at:"centre",lines:[`${i.name} needs notes in topics, linked to one another.`,`${xt(f.length,i.tower)} so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>a("graph")}]}),{targets:()=>[],click(){},update(){},stat:J,today:()=>null,api:{empty:!0}}}let u=new Map(h.map(J=>[J.n.id,J])),d=J=>J.n.name,m=J=>(t.scene.add(J),J),M=J=>J.kind==="stall"?i.stall:J.kind==="hall"?d_:o.palette[(J.n.cluster||0)%o.palette.length],g=new Map,p=(J,vt)=>{g.has(J)||g.set(J,new Set),g.get(J).add(vt)};for(let J of n.links)J.kind!=="wanted"&&u.has(J.source)&&u.has(J.target)&&(p(J.source,J.target),p(J.target,J.source));let y=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,v=new Yt,_=typeof s.hour=="number"?s.hour:new Date().getHours(),w=_<5||_>=21,E=new Mt(o.bg).getHSL({}).l<.5,x=i.sky?i.sky(_):null,S=null;x&&(t.sky({top:fi(o.bg,x,E?0:.3),haze:fi(o.bg,x,E?.035:.1),stars:w&&E?160:0}),S=m(new re(new vn(Math.max(l.bounds.x[1]-l.bounds.x[0],l.cell*3)*4,48).rotateX(-Math.PI/2),new de({color:fi(i.ground,o.bg,E?.94:.45)}))),S.position.set((l.bounds.x[0]+l.bounds.x[1])/2,-.16,l.front),S.userData.backdrop=!0);let F=m(new fe(new dn(1,.1,1),new de,l.pads.length));l.pads.forEach((J,vt)=>{F.setMatrixAt(vt,v.makeScale(J.size,1,J.size).setPosition(J.x,-.05,J.z)),F.setColorAt(vt,fi(o.palette[l.districts[J.d].cluster%o.palette.length],o.bg,.86))});let T=m(new re(new dn(l.bounds.x[1]-l.bounds.x[0],.1,5),new de({color:fi(i.stall,o.bg,.9)})));T.position.set((l.bounds.x[0]+l.bounds.x[1])/2,-.06,l.front+.5);let I=[0,1,2].map(J=>{let vt=h.filter(R=>R.level===J&&(R.kind==="tower"||R.kind==="spire")),Jt=[],ct=[],te=[];vt.forEach(R=>{let b=R.w/2,U=nn(R.n.id)%8/8;for(let[q,K,at,mt]of[[-b,-b,b,-b],[b,-b,b,b],[b,b,-b,b],[-b,b,-b,-b]]){let it=Jt.length/3,ht=Math.hypot(at-q,mt-K)/4,yt=R.h/4;Jt.push(R.x+q,0,R.z+K,R.x+at,0,R.z+mt,R.x+at,R.h,R.z+mt,R.x+q,R.h,R.z+K),ct.push(U,0,U+ht,0,U+ht,yt,U,yt),te.push(it,it+1,it+2,it,it+2,it+3)}});let Rt=new he().setAttribute("position",new Gt(Jt,3)).setAttribute("uv",new Gt(ct,2)).setAttribute("color",new Gt(new Float32Array(Jt.length),3));Rt.setIndex(te);let st=m(new re(Rt,new de({map:h_([.04,.28,.7][J],i.sheet),vertexColors:!0,side:ye})));return st.frustumCulled=!1,{list:vt,geo:Rt,mesh:st}}),P=m(new fe(new dn(1,1,1),new de,h.length));P.frustumCulled=!1;let B=h.filter(J=>J.n.tasks>0),N=m(new fe(new ve(1,10,8),new de({color:i.beacon}),Math.max(B.length,1)));N.count=B.length,N.frustumCulled=!1,B.forEach((J,vt)=>N.setMatrixAt(vt,v.makeScale(.28,.28,.28).setPosition(J.x,J.h+.35,J.z)));let Z=l.districts.flatMap(J=>Array.from({length:J.cars},(vt,Jt)=>{let[ct,te]=bc(`car:${J.cluster}:${Jt}`);return{d:J,u:ct,v:(.02+te*.05)*(Jt%2?1:-1),...i.lane(ct,te,Jt,l.cell)}})),G=m(new fe(new dn(.7,.12,.14),new de,Math.max(Z.length,1)));G.count=Z.length,G.frustumCulled=!1,Z.forEach((J,vt)=>G.setColorAt(vt,new Mt(J.c)));let X=m(new Oe(new he,new Ue({color:i.arc,transparent:!0,opacity:.9})));X.frustumCulled=!1;let z=i.cranes?l.fresh.map(J=>u.get(J)):[],D=h.filter(J=>J.kind==="hall"),j=[];for(let J of z)j.push([J.x+J.w/2,J.h+.8,J.z+J.w/2,.09,1.6,.09,Ad],[J.x+J.w/2-.45,J.h+1.55,J.z+J.w/2,1.5,.09,.09,Ad]);for(let J of D)j.push([J.x,J.h+.7,J.z,.07,1.4,.07,"#94a3b8"],[J.x+.32,J.h+1.2,J.z,.6,.36,.05,o.palette[l.districts[J.d].cluster%o.palette.length]]);let O=m(new fe(new dn(1,1,1),new de,Math.max(j.length,1)));O.count=j.length,O.frustumCulled=!1,j.forEach(([J,vt,Jt,ct,te,Rt,st],R)=>{O.setMatrixAt(R,v.makeScale(ct,te,Rt).setPosition(J,vt,Jt)),O.setColorAt(R,new Mt(st))});let V=h.filter(J=>J.kind==="tower").sort((J,vt)=>vt.h-J.h)[0]||null,tt=s.selected&&u.has(s.selected)?s.selected:null,L=null,C=null,nt=y,dt=()=>L||tt,ot=new Set,ut=J=>(C==null||J.d===C||J.d<0)&&(!dt()||ot.has(J.n.id)),gt=h.filter(J=>J.kind==="tower"&&J.level===0),pt=J=>gt.filter(vt=>vt.d===J),Ct=()=>{let J=dt()&&u.get(dt());return J&&(J.kind==="spire"||J.kind==="hall")?`${d(J)} \xB7 map of ${xt(l.districts[J.d].notes.length,"note")}`:J?`${d(J)} \xB7 ${xt(J.n.inlinks||0,"link")} in \xB7 ${J.level===0?"dark":J.level===2?"busy":"dim"}${J.n.tasks?` \xB7 ${xt(J.n.tasks,"open task")}`:""}`:i.stat({towers:h.filter(vt=>vt.kind==="tower").length,dark:gt.length,districts:l.districts.length,fresh:l.fresh.length,tallest:V?se(d(V),22):""})};function St(){let J=dt();if(ot.clear(),J){ot.add(J);for(let ct of g.get(J)||[])ot.add(ct)}for(let ct of I){let te=ct.geo.getAttribute("color"),Rt=0;ct.list.forEach(st=>{let R=i.wall(M(st),st.level).multiplyScalar(ut(st)?1:.16);for(let b=0;b<16;b++)te.setXYZ(Rt++,R.r,R.g,R.b)}),te.needsUpdate=!0}h.forEach((ct,te)=>{let Rt=ct.kind==="stall"||ct.kind==="hall",st=Rt?ct.w:ct.w*1.04;P.setMatrixAt(te,v.makeScale(st,Rt?ct.h:.12,st).setPosition(ct.x,Rt?ct.h/2:ct.h+.06,ct.z)),P.setColorAt(te,fi(M(ct),o.bg,ut(ct)?ct.level===0?.55:0:.85))}),P.instanceMatrix.needsUpdate=!0,P.instanceColor.needsUpdate=!0;let vt=[];if(J){let ct=u.get(J);for(let te of g.get(J)||[]){let Rt=u.get(te),st=[ct.x,ct.h,ct.z],R=[Rt.x,Rt.h,Rt.z],b=[(ct.x+Rt.x)/2,Math.max(ct.h,Rt.h)+3+Math.hypot(ct.x-Rt.x,ct.z-Rt.z)*.25,(ct.z+Rt.z)/2],U=st;for(let q=1;q<=12;q++){let K=q/12,at=[0,1,2].map(mt=>(1-K)*(1-K)*st[mt]+2*(1-K)*K*b[mt]+K*K*R[mt]);vt.push(...U,...at),U=at}}}X.geometry.setAttribute("position",new Gt(vt,3)),X.visible=vt.length>0;let Jt=l.districts.map((ct,te)=>({d:ct,i:te})).filter(ct=>C==null||C===ct.i).map(({d:ct})=>({text:se(ct.name,28)+(i.hall&&!ct.moc?" \xB7 no map":""),at:[ct.x,.4,ct.z+l.cell/2-.6],color:fi(o.palette[ct.cluster%o.palette.length],"#ffffff",.45).getStyle(),dy:6}));if(J){let ct=u.get(J);Jt.unshift({text:se(d(ct),34),at:[ct.x,ct.h,ct.z],strong:!0,dy:-18,run:()=>Q(J),title:`Open ${d(ct)}`})}e.labels(Jt),e.stat(Ct()),e.chip(C==null?null:`District: ${se(l.districts[C].name,24)}`,()=>{C=null,St(),c()})}function Q(J){tt=J,St(),c(),r(J)}let Pt=J=>{C=null,tt=J,St(),c()},Ft=J=>{C=J,tt=null,St(),c()},Zt=l.districts.map((J,vt)=>[pt(vt).length,vt]).sort((J,vt)=>vt[0]-J[0])[0],Ht=h.filter(J=>J.kind==="stall"),Dt=[...gt].sort((J,vt)=>vt.h-J.h)[0],qt=[];Zt&&Zt[0]&&qt.push({text:`${l.districts[Zt[1]].name} is the darkest district: ${xt(Zt[0],"stale note")}. Open the tallest and decide whether it is still true.`,label:"Show district",run:()=>Ft(Zt[1])}),Dt&&Dt.h>3&&qt.push({text:`${d(Dt)} stands tall yet has gone dark: other notes lean on it and it has not been edited in ${Dt.n.age} days.`,label:"Open note",run:()=>Q(Dt.n.id)}),B.length&&qt.push({text:`${xt(B.length,i.tower)} with a ${i.beaconName} beacon: an open task. The tallest is the one the most notes wait on.`,label:"Open note",run:()=>Q([...B].sort((J,vt)=>vt.h-J.h)[0].n.id)}),Ht.length&&qt.push({text:`${xt(Ht.length,"note")} stand as stalls on the street, in no topic. Link each to a topic's notes and it gets a ${i.tower}.`,label:"Open note",run:()=>Q(Ht[0].n.id)}),i.cranes&&V&&qt.unshift({text:`${d(V)} is the tallest ${i.tower}: ${xt(V.n.inlinks||0,"note")} link to it.`,label:"Show tallest",run:()=>Pt(V.n.id)}),z.length&&qt.push({text:`${xt(z.length,i.tower)} went up this week, each with a crane. The newest is ${d(z[0])}: link it to the notes it belongs with.`,label:"Open note",run:()=>Q(z[0].n.id)});let $t=l.districts.filter(J=>!J.moc);i.hall&&$t.length&&qt.push({text:`${xt($t.length,"district")} have no town hall: the topic has no map note. The biggest is ${$t[0].name}.`,label:"Show district",run:()=>Ft(l.districts.indexOf($t[0]))}),e.explain({plain:i.plain,about:i.about,legend:i.legend,insights:qt}),e.controls({lines:[`Pick a ${i.tower} to see what it links to`]}),St();let Te=performance.now(),Me=J=>{Z.forEach((vt,Jt)=>G.setMatrixAt(Jt,v.makeTranslation(vt.d.x+(((vt.u+vt.v*J)%1+1)%1-.5)*(l.cell-2),vt.y,vt.d.z+vt.z))),G.instanceMatrix.needsUpdate=!0,G.instanceColor&&(G.instanceColor.needsUpdate=!0)};Me(0);let Y=0;return{targets:()=>h.filter(J=>C==null||J.d===C||J.d<0).map(J=>({at:[J.x,J.h/2,J.z],r:Math.max(J.w*.7,Math.min(J.h*.3,1.5)),key:{kind:"note",id:J.n.id,tip:`${d(J)}${J.level===0?" \xB7 dark":""}${J.n.tasks?` \xB7 ${xt(J.n.tasks,"open task")}`:""}`}})),click(J){J.kind==="note"&&Q(J.id)},hover(J){let vt=J&&J.kind==="note"?J.id:null;vt!==L&&(L=vt,St())},update(J){"selected"in J&&(tt=J.selected&&u.has(J.selected)?J.selected:null,St())},frame(){if(nt)return;let J=(performance.now()-Te)/1e3;N.visible=Math.sin(J*4)>-.3,Me(J),clearTimeout(Y),Y=setTimeout(c,33)},stat:Ct,today:()=>Zt&&Zt[0]?{text:`Darkest district: ${l.districts[Zt[1]].name} \xB7 ${xt(Zt[0],"stale note")}`,label:"Go there",run:()=>Ft(Zt[1])}:null,api:{back:()=>t.camera.position.distanceTo(t.centre),sky:()=>x?{hour:_,glow:x,stars:w&&E}:null,layout:()=>l,selected:()=>tt,district:()=>C==null?null:l.districts[C].cluster,hold(){nt=!0,N.visible=!0,c()},towers:()=>h.filter(J=>J.kind==="tower").length,stalls:()=>Ht.length,dark:()=>gt.length,halls:()=>D.length,cranes:()=>z.length,tallest:()=>V?V.n.id:null},dispose(){nt=!0,clearTimeout(Y);for(let J of[F,T,...S?[S]:[],P,N,G,X,O,...I.map(vt=>vt.mesh)])J.material.map&&J.material.map.dispose()}}}}),Rd=Ec(u_);var Cd="#ef4444",f_="#a8a29e",Id="#5e626d",Ud=(i,t,e)=>new Mt(i).lerp(new Mt(t),e),Nd=Ec({id:"city",name:"City",hint:"Notes as buildings: tall = relied on, lit = recent, grey = stale; town halls are maps",stage:{fog:[55,170],ambient:.6},tower:"building",hall:!0,cranes:!0,sky:i=>i<5||i>=21?"#4f5fc4":i<8?"#f9a8d4":i<17?"#7dd3fc":"#fb923c",ground:"#6b8f71",sheet:{wall:"#d9dbe3",pane:"#3d4352",lit:["#ffd977","#ffe9a8","#ffc94d"]},beacon:Cd,beaconName:"red",stall:f_,arc:"#ffd977",wall:(i,t)=>t===0?Ud(i,Id,.72):Ud(i,"#ffffff",.18),lane:(i,t,e,n)=>({y:.1,z:(e%2?1:-1)*(n/2-.3),c:e%2?"#fef08a":"#f87171"}),stat:i=>`${xt(i.towers,"building")} \xB7 ${i.fresh} new this week \xB7 tallest: ${i.tallest}`,plain:"Picture your notes as a town. A tall building is a note everything else leans on. Lit windows mean someone has been in it lately; a grey building has been left alone for a long time.",about:"Each topic is a district and each note a building in the topic's colour. Height is how many notes link to it and how much runs through it; lit windows are how recently it was edited; grey is stale. A crane stands on a note written this week, a red beacon is an open task, the pale hall with a flag is the topic's map, and a stall on the street is a note in no topic.",legend:[{color:"#ffd977",text:"height = relied on, windows = recent"},{color:Id,text:"grey = stale"},{color:"#facc15",text:"crane = new this week"},{color:Cd,text:"beacon = open task"},{color:"#e5e7eb",text:"hall = the topic's map"}]});var Dn=18,Tc=2.5,pr=90,Ui="#22c55e",Bo="#f87171",Pd=i=>Tc+(Dn-Tc)*(1-Math.min(1,Math.log1p(Math.max(0,i))/Math.log1p(365))),qn=i=>(i.taskAge!=null?i.taskAge:i.age)||0;function p_(i){let t=i.nodes.filter(f=>!Ie(f)&&f.tasks>0),e=new Map;for(let f of t)e.has(f.cluster)||e.set(f.cluster,[]),e.get(f.cluster).push(f);let n=new Map(i.clusters.map(f=>[f.id,f.name])),s=[...e.keys()].sort((f,u)=>e.get(u).length-e.get(f).length||f-u),r=Math.max(1,t.length),a=s.map(f=>Math.max(.25,e.get(f).length/r*2*Math.PI*.92+.08)),o=a.reduce((f,u)=>f+u,0)||1,c=-Math.PI/2,l=s.map((f,u)=>{let d=a[u]/o*2*Math.PI,m={cluster:f,name:n.get(f)||"No topic",a0:c,a1:c+d,n:e.get(f).length};return c+=d,m}),h=[];for(let f of l)for(let u of e.get(f.cluster)){let d=nn(u.id),m=f.a0+(f.a1-f.a0)*(.1+.8*(d%100/100)),M=Math.max(Tc*.6,Math.min(Dn,Pd(qn(u))+((d>>>7)%41-20)/20));h.push({n:u,x:Math.cos(m)*M,z:Math.sin(m)*M,r:.28+.16*Math.sqrt(u.tasks),h:.6+.9*u.tasks,holding:qn(u)>pr})}return{blips:h,sectors:l,hold:Pd(pr),tasks:t.reduce((f,u)=>f+u.tasks,0),notes:t.length}}var Fd={id:"radar",name:"Radar",hint:"Open tasks as blips by how long they've waited; red = 90+ days",home:{yaw:0,pitch:1.5,dist:46,min:14,max:110,minPitch:.55,maxPitch:1.5,pan:!0},stage:{fog:!1,ambient:1},actions:["graph","triage"],build({stage:i,frame:t,orbit:e,data:n,inputs:s,onOpen:r,onAction:a,theme:o,invalidate:c}){let l=p_(n),h=new Map(l.blips.map(O=>[O.n.id,O])),f=O=>(i.scene.add(O),O),u=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,d=O=>(O.rotation.x=-Math.PI/2,O);if(l.notes<1){let O=()=>"No open tasks";return t.stat(O()),t.controls({at:"centre",lines:["Radar shows the notes that have open tasks.","No note has one."],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>a("graph")}]}),{targets:()=>[],click(){},update(){},stat:O,today:()=>null,api:{empty:!0}}}let m=new Yt,M=new Mt,g=(O,V,tt)=>{let L=new he().setAttribute("position",new Gt(O,3));return f(new Oe(L,new Ue({color:V,transparent:!0,opacity:tt})))};f(d(new re(new vn(Dn,64),new de({color:"#04140b"}))));let p=(O,V,tt,L=.05)=>f(d(new re(new wi(O-L,O+L,96),new de({color:V,transparent:!0,opacity:tt,side:ye})))).position.set(0,.02,0);l.sectors.forEach((O,V)=>{let tt=f(d(new re(new vn(Dn,24,-O.a1,O.a1-O.a0),new de({color:o.palette[V%o.palette.length],transparent:!0,opacity:.3,side:ye}))));tt.position.y=.01});for(let O=1;O<=4;O++)p(Dn*O/4,Ui,.25);p(l.hold,Bo,.7,.07),g(l.sectors.flatMap(O=>[0,.03,0,Math.cos(O.a0)*Dn,.03,Math.sin(O.a0)*Dn]),Ui,.3);let y=f(d(new re(new vn(Dn,32,0,.7),new de({color:Ui,transparent:!0,opacity:.22,side:ye}))));y.position.y=.05;let v=f(new fe(new fn(1,1,1,14),new de,l.blips.length));v.frustumCulled=!1;let _=s.selected&&h.has(s.selected)?s.selected:null,w=null,E=u,x=()=>w||_,S=O=>se(O.n.name,30),F=()=>{let O=x()&&h.get(x());return O?`${S(O)} \xB7 ${xt(O.n.tasks,"open task")} \xB7 waiting ${qn(O.n)} days`:`${xt(l.tasks,"open task")} \xB7 ${xt(l.notes,"note")}`},T=(O,V)=>M.set(O).multiplyScalar(V);function I(){let O=x();l.blips.forEach((tt,L)=>{let C=!O||tt.n.id===O,nt=tt.r*(tt.n.id===O?1.5:1);m.makeScale(nt,tt.h,nt).setPosition(tt.x,tt.h/2,tt.z),v.setMatrixAt(L,m),v.setColorAt(L,C?M.set(tt.n.id===O?o.fg:tt.holding?Bo:Ui):T(tt.holding?Bo:Ui,.25))}),v.instanceMatrix.needsUpdate=!0,v.instanceColor&&(v.instanceColor.needsUpdate=!0);let V=l.sectors.map(tt=>{let L=(tt.a0+tt.a1)/2;return{text:`${se(tt.name,24).toUpperCase()} \xB7 ${tt.n}`,at:[Math.cos(L)*(Dn+1.2),0,Math.sin(L)*(Dn+1.2)],color:Ui}});for(let tt of[...l.blips].sort((L,C)=>C.n.tasks-L.n.tasks).slice(0,8))V.push({text:`${se(tt.n.name,22)} \xB7 ${tt.n.tasks}`,at:[tt.x,tt.h,tt.z],dy:-10,color:tt.holding?"#fecaca":"#bbf7d0"});if(O){let tt=h.get(O);V.unshift({text:S(tt),at:[tt.x,tt.h,tt.z],strong:!0,dy:-18,run:()=>P(O),title:`Open ${S(tt)}`})}t.labels(V),t.stat(F())}function P(O){_=O,I(),c(),r(O)}let B=l.blips.filter(O=>O.holding),N=[...l.blips].sort((O,V)=>qn(V.n)-qn(O.n))[0],Z=[];B.length&&Z.push({text:`${xt(B.length,"note")} ${B.length===1?"has":"have"} a task waiting more than ${pr} days. Each is either still wanted or can be crossed off.`,label:"Triage",run:()=>a("triage")}),N&&qn(N.n)>30&&Z.push({text:`${se(N.n.name,40)} has waited longest: ${qn(N.n)} days.`,label:"Open note",run:()=>P(N.n.id)});let G=l.sectors[0];G&&l.sectors.length>1&&Z.push({text:`${G.name} holds the most notes with open tasks (${G.n} of ${l.notes}).`,label:"Open its busiest",run:()=>P(l.blips.filter(O=>O.n.cluster===G.cluster).sort((O,V)=>V.n.tasks-O.n.tasks)[0].n.id)}),t.explain({plain:"Picture a radar screen. Every note with an open task is a blip. The longer its oldest task has waited, the closer to the middle it drifts, and inside the red ring it has been waiting more than three months.",about:"Each topic has a slice of the screen and each note with open tasks is a blip in its slice. Distance from the centre is how long the oldest open task has waited (a year or more sits in the middle). The size of a blip, and the height of its column when you tilt, is how many open tasks it holds. Tick tasks off in the note and its blip drifts away or goes.",legend:[{color:Ui,text:"note with open tasks"},{color:Bo,text:"oldest task 90+ days"},{color:"#6b7280",text:"nearer the middle = waited longer"}],insights:Z});let X=()=>t.controls({lines:[B.length?`${xt(B.length,"note")} holding past ${pr} days`:"Pick a blip to open its note"],buttons:[{label:e.tilted?"Flat":"Tilt",title:e.tilted?"Look straight down again":"Tilt into 3D: a blip becomes a column as tall as its task count",run:()=>{e.tilt(),X()}},...B.length?[{label:"Triage",title:"Go through the open tasks one by one",run:()=>a("triage")}]:[]]});X(),I();let z=performance.now(),D=0,j=O=>{y.rotation.z=-(O*.5%(2*Math.PI))};return j(0),{targets:()=>l.blips.map(O=>({at:[O.x,O.h/2,O.z],r:Math.max(.7,O.r*1.3),key:{kind:"note",id:O.n.id,tip:`${O.n.name} \xB7 ${xt(O.n.tasks,"open task")} \xB7 waiting ${qn(O.n)} days`}})),click(O){O.kind==="note"&&P(O.id)},hover(O){let V=O&&O.kind==="note"?O.id:null;V!==w&&(w=V,I())},update(O){"selected"in O&&(_=O.selected&&h.has(O.selected)?O.selected:null,I())},frame(){E||(j((performance.now()-z)/1e3),clearTimeout(D),D=setTimeout(c,33))},stat:F,today:()=>B.length?{text:`${xt(B.length,"note")} ${B.length===1?"has":"have"} tasks waiting ${pr}+ days \xB7 oldest: ${se(N.n.name,30)} (${qn(N.n)} days)`,label:"Triage",run:()=>a("triage")}:null,api:{layout:()=>l,selected:()=>_,hold(){E=!0,c()},blips:()=>l.blips.length,holding:()=>B.length,tilted:()=>e.tilted},dispose(){E=!0,clearTimeout(D)}}}};var ko=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Dd=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],mr=3.2,gr=1.5,Ld=1.2,m_=2.2,g_=12,x_=3,Oo="#fde047",__=[{key:"wd",n:7,name:"WEEK",labels:ko},{key:"mo",n:12,name:"YEAR",labels:Dd}],jn=(i,t)=>i/t*2*Math.PI-Math.PI/2;function y_(i,t=new Date,e=!1){let n=new Map(i.clusters.map(u=>[u.id,u.name])),s=Object.entries(i.rhythm||{}).map(([u,d])=>({cluster:+u,name:n.get(+u)||"No topic",wd:d.wd,mo:d.mo,tot:d.wd.reduce((m,M)=>m+M,0)})).filter(u=>u.tot>=x_&&n.has(u.cluster)).sort((u,d)=>u.tot-d.tot||u.cluster-d.cluster).slice(-g_),r=mr+s.length*gr,a=r+3,o=__.map((u,d)=>{let m=new Array(u.n).fill(0);s.forEach(g=>g[u.key].forEach((p,y)=>{m[y]+=p}));let M=(d?1:-1)*a;return{...u,centre:e?[0,M]:[M,0],totals:m,peak:m.indexOf(Math.max(...m))}}),c=[];o.forEach((u,d)=>s.forEach((m,M)=>{let g=Math.max(1,...m[u.key]);for(let p=0;p<u.n;p++){let y=m[u.key][p],v=y/g;c.push({dial:d,ring:M,s:p,v:y,t:v,cluster:m.cluster,a0:jn(p,u.n),a1:jn(p+1,u.n),r0:mr+M*gr,r1:mr+M*gr+Ld,h:y?.15+m_*v:.04})}}));let l=(t.getDay()+6)%7,h=new Date(t.getFullYear(),t.getMonth()+1,0).getDate(),f=t.getMonth();return{rings:s,dials:o,cells:c,rOut:r,now:{wd:l,mo:f,frac:{wd:(l+(t.getHours()+t.getMinutes()/60)/24)/7,mo:(f+(t.getDate()-1+t.getHours()/24)/h)/12}}}}var Ac=(i,t)=>i[t].indexOf(Math.max(...i[t])),Bd={id:"clock",name:"Heat clock",hint:"When each topic comes up: weekday and month dials, hotter = more mentions",home:{yaw:0,pitch:1.5,dist:60,min:20,max:140,minPitch:.55,maxPitch:1.5,pan:!0},stage:{fog:!1,ambient:1},actions:["graph"],build({stage:i,frame:t,orbit:e,data:n,inputs:s,onOpen:r,onAction:a,theme:o,invalidate:c}){let l=(i.camera.aspect||1)<1,h=y_(n,s.now||new Date,l),f=C=>(i.scene.add(C),C);if(h.rings.length<1){let C=()=>"No weekday or month pattern yet";return t.stat(C()),t.controls({at:"centre",lines:["The Heat clock shows when each topic comes up in your daily notes.","There is no pattern to show yet."],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>a("graph")}]}),{targets:()=>[],click(){},update(){},stat:C,today:()=>null,api:{empty:!0}}}let u=C=>o.palette[Math.max(0,n.clusters.findIndex(nt=>nt.id===C))%o.palette.length],d=new Mt("#1f2933"),m=new Mt("#1a2027"),M=new Mt,g=new Mt,p=(C,nt,dt)=>[C.centre[0]+Math.cos(nt)*dt,C.centre[1]+Math.sin(nt)*dt],y=[],v=[],_=C=>C.n===7?3:2,w=(...C)=>{for(let nt of C)y.push(nt[0],nt[1],nt[2])};for(let C of h.cells){let nt=h.dials[C.dial],dt=y.length/3,ot=_(nt),ut=(C.a1-C.a0)/ot,gt=.012,pt=(Q,Pt,Ft)=>{let[Zt,Ht]=p(nt,Q,Pt);return[Zt,Ft,Ht]};for(let Q=0;Q<ot;Q++){let Pt=C.a0+Q*ut+(Q===0?gt:0),Ft=C.a0+(Q+1)*ut-(Q===ot-1?gt:0);w(pt(Pt,C.r0,C.h),pt(Ft,C.r0,C.h),pt(Ft,C.r1,C.h),pt(Pt,C.r0,C.h),pt(Ft,C.r1,C.h),pt(Pt,C.r1,C.h)),w(pt(Pt,C.r1,0),pt(Ft,C.r1,0),pt(Ft,C.r1,C.h),pt(Pt,C.r1,0),pt(Ft,C.r1,C.h),pt(Pt,C.r1,C.h)),w(pt(Pt,C.r0,0),pt(Ft,C.r0,C.h),pt(Ft,C.r0,0),pt(Pt,C.r0,0),pt(Pt,C.r0,C.h),pt(Ft,C.r0,C.h))}let Ct=C.a0+gt,St=C.a1-gt;w(pt(Ct,C.r0,0),pt(Ct,C.r1,0),pt(Ct,C.r1,C.h),pt(Ct,C.r0,0),pt(Ct,C.r1,C.h),pt(Ct,C.r0,C.h)),w(pt(St,C.r0,0),pt(St,C.r1,C.h),pt(St,C.r1,0),pt(St,C.r0,0),pt(St,C.r0,C.h),pt(St,C.r1,C.h)),v.push([dt,y.length/3-dt,ot*6])}let E=new he().setAttribute("position",new Gt(y,3)),x=new Gt(new Float32Array(y.length),3);E.setAttribute("color",x),f(new re(E,new de({vertexColors:!0,side:ye}))).frustumCulled=!1;let S=[],F=[];h.dials.forEach(C=>{let nt=h.now.frac[C.key],dt=jn(nt*C.n,C.n),ot=h.now[C.key],ut=mr-.6,gt=h.rOut+.4,[pt,Ct]=p(C,dt,ut),[St,Q]=p(C,dt,gt);S.push(pt,.3,Ct,St,.3,Q);for(let Pt of[jn(ot,C.n),jn(ot+1,C.n)]){let[Ft,Zt]=p(C,Pt,ut),[Ht,Dt]=p(C,Pt,gt);F.push(Ft,.3,Zt,Ht,.3,Dt)}});let T=(C,nt)=>{let dt=new he().setAttribute("position",new Gt(C,3));return f(new Oe(dt,new Ue({color:Oo,transparent:!0,opacity:nt})))};T(S,1),T(F,.55),h.dials.forEach(C=>{let nt=jn(h.now.frac[C.key]*C.n,C.n),[dt,ot]=p(C,nt,h.rOut+.4);f(new re(new ve(.4,12,8),new de({color:Oo}))).position.set(dt,.3,ot)});let I=new Map(h.rings.map(C=>[C.cluster,C])),P=C=>n.nodes.filter(nt=>nt.cluster===C&&!Ie(nt)).sort((nt,dt)=>dt.inlinks+dt.outlinks-(nt.inlinks+nt.outlinks)||(nt.id<dt.id?-1:1)),B=null,N=null,Z=C=>h.dials[C.dial].labels[C.s],G=C=>Math.round(100*C.v/Math.max(1,I.get(C.cluster).tot)),X=new Map(h.cells.map((C,nt)=>[`${C.dial}:${C.ring}:${C.s}`,nt])),z=()=>{let C=N!=null&&h.cells[N];if(C)return`${se(I.get(C.cluster).name,28)} \xB7 ${Z(C)} \xB7 ${xt(C.v,"mention")}`;if(B!=null){let nt=I.get(B);return`${se(nt.name,28)} \xB7 busiest ${ko[Ac(nt,"wd")]} \xB7 ${Dd[Ac(nt,"mo")]} \xB7 ${xt(nt.tot,"mention")}`}return`${xt(h.rings.length,"topic")} \xB7 busiest ${h.dials[0].labels[h.dials[0].peak]} \xB7 ${h.dials[1].labels[h.dials[1].peak]}`};function D(){let C=x.array;h.cells.forEach((dt,ot)=>{let ut=B==null||dt.cluster===B,[gt,pt,Ct]=v[ot],St=ot===N;dt.v?g.copy(d).lerp(M.set(u(dt.cluster)),.15+.85*dt.t):g.copy(m),ut||g.multiplyScalar(.3),St&&g.lerp(M.set(o.fg),.35);for(let Q=0;Q<pt;Q++){let Pt=Q<Ct?1:.62;C[(gt+Q)*3]=g.r*Pt,C[(gt+Q)*3+1]=g.g*Pt,C[(gt+Q)*3+2]=g.b*Pt}}),x.needsUpdate=!0;let nt=[];if(h.dials.forEach(dt=>{dt.labels.forEach((ot,ut)=>{let gt=(jn(ut,dt.n)+jn(ut+1,dt.n))/2,[pt,Ct]=p(dt,gt,h.rOut+1.6);nt.push({text:ot,at:[pt,0,Ct],color:ut===h.now[dt.key]?Oo:"#e2e8f0"})}),nt.push({text:dt.name,at:[dt.centre[0],0,dt.centre[1]],dy:-8,color:"#94a3b8"},{text:`busiest: ${dt.labels[dt.peak]}`,at:[dt.centre[0],0,dt.centre[1]],dy:8,color:"#f8fafc"})}),B!=null){let dt=P(B)[0],ot=I.get(B),ut=h.dials[0],gt=h.rings.indexOf(ot),[pt,Ct]=p(ut,jn(0,7),mr+gt*gr+Ld/2);nt.push({text:se(ot.name,26),at:[pt,.5,Ct],strong:!0,dy:-10,...dt?{run:()=>r(dt.id),title:`Open ${dt.name}`}:{}})}t.labels(nt),t.stat(z())}function j(C){B=B===C?null:C,D(),tt(),c()}let O=h.rings.filter(C=>C.tot>=10).map(C=>({r:C,k:Math.max(...C.wd)/C.tot})).sort((C,nt)=>nt.k-C.k)[0],V=[];V.push({text:`Mentions peak on ${h.dials[0].labels[h.dials[0].peak]} and in ${h.dials[1].labels[h.dials[1].peak]}.`,label:"Busiest topic",run:()=>j(h.rings[h.rings.length-1].cluster)}),O&&O.k>.3&&V.push({text:`${O.r.name} clusters on ${ko[Ac(O.r,"wd")]}: ${Math.round(O.k*100)}% of its mentions.`,label:"Show its ring",run:()=>j(O.r.cluster)}),t.explain({plain:"Picture two clock faces. One is a week, one is a year, and each topic is a ring on both. A cell glows when that topic comes up in your daily notes on that weekday or in that month.",about:"Each ring is a topic, the busiest outside. A cell's heat, and its height when you tilt, is that topic's share of its own mentions that fall on that weekday or month, so a bright cell is where the topic peaks. It counts mentions in daily notes, not hours worked. The yellow hand is right now.",legend:[{color:o.fg,text:"bright, tall cell: the topic's busiest weekday or month"},{color:"#1f2933",text:"dark cell: rarely"},{color:Oo,text:"now"}],insights:V});function tt(){let C=B!=null?P(B)[0]:null;t.controls({lines:[B!=null?`${I.get(B).name}`:"Pick a ring to see its topic"],buttons:[...C?[{label:`Open ${se(C.name,18)}`,title:`Open ${C.name}, the topic's most linked note`,run:()=>r(C.id)}]:[],...B!=null?[{label:"Clear",title:"Show every topic again",run:()=>j(B)}]:[],{label:e.tilted?"Flat":"Tilt",title:e.tilted?"Look straight down again":"Tilt into 3D: a cell is as tall as its heat",run:()=>{e.tilt(),tt()}}]})}tt(),D();let L=h.rings[h.rings.length-1];return{targets:()=>h.cells.map((C,nt)=>{let dt=h.dials[C.dial],ot=(C.a0+C.a1)/2,[ut,gt]=p(dt,ot,(C.r0+C.r1)/2),pt=(C.a1-C.a0)*(C.r0+C.r1)/2;return{at:[ut,C.h/2,gt],r:Math.max(.55,Math.min(gr*.6,pt*.4)),key:{kind:"ring",id:C.cluster,cell:nt,tip:`${I.get(C.cluster).name} \xB7 ${Z(C)} \xB7 ${xt(C.v,"mention")} (${G(C)}%)`}}}),click(C){C.kind==="ring"&&j(C.id)},hover(C){let nt=C&&C.kind==="ring"?C.cell:null;nt!==N&&(N=nt,D())},update(){},stat:z,today(){let C=h.now.wd,nt=h.rings.map(ot=>({r:ot,k:ot.wd[C]/ot.tot})).sort((ot,ut)=>ut.k-ot.k)[0],dt=nt&&P(nt.r.cluster)[0];return nt&&nt.k>0?{text:`It is ${ko[C]}: ${se(nt.r.name,30)} usually comes up most on this day (${Math.round(nt.k*100)}% of its mentions)`,label:dt?"Open note":"Show ring",run:()=>dt?r(dt.id):j(nt.r.cluster)}:null},api:{layout:()=>h,focus:()=>B,hovered:()=>N,tilted:()=>e.tilted,rings:()=>h.rings.length,cells:()=>h.cells.length,vertical:()=>l,cell:(C,nt,dt)=>X.get(`${C}:${nt}:${dt}`),top:()=>L&&L.cluster},dispose(){}}}};var Rc=4,M_=1.15,Gd=4,Od="#f87171",kd="#fde047",Vd="#22d3ee",S_=2.399963;function v_(i,t){let e=new Map(t.ids.map((d,m)=>[d,m])),n=en(i.nodes),s=Uo(i),r=new Map,a=new Map,o=(d,m,M)=>{d.has(m)||d.set(m,[]),d.get(m).push(M)};for(let[d,m]of t.edges)o(r,t.ids[d],t.ids[m]),o(a,t.ids[m],t.ids[d]);let c=i.nodes.filter(d=>e.has(d.id)&&!Ie(d)&&!d.isolated),l=Math.max(2,Math.ceil(Math.max(1,...c.map(d=>t.level[e.get(d.id)])))),h=Array.from({length:l},()=>[]);for(let d of c)h[Math.max(0,Math.min(l-1,Math.round(t.level[e.get(d.id)])-1))].push(d);let f=[];h.forEach((d,m)=>{d.sort((M,g)=>M.cluster-g.cluster||n(g)-n(M)),d.forEach((M,g)=>{let p=t.level[e.get(M.id)],y=M_*Math.sqrt(g+.5)*1.5,v=g*S_,_=(a.get(M.id)||[]).length;f.push({n:M,x:y*Math.cos(v),z:y*Math.sin(v),y:(p-1)*Rc,r:.3+.9*Math.sqrt(Math.max(0,n(M))),level:p,band:m,reliedOn:_,leansOn:(r.get(M.id)||[]).length,endangered:_>=Gd&&s(M)})})});let u=Math.max(4,...f.map(d=>Math.hypot(d.x,d.z)))+2;return{notes:f,bands:h.map(d=>d.length),radius:u,up:d=>a.get(d)||[],down:d=>r.get(d)||[]}}var zd=(i,t,e)=>new Mt(i).lerp(new Mt(t),e),Hd={id:"foodweb",name:"Food web",hint:"Which notes feed which: the notes everything rests on at the base, logs and plans on top, stale ones others rest on in red",home:{yaw:.6,pitch:.3,dist:46,min:10,max:130},stage:{fog:[60,190],ambient:.5},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:a,invalidate:o}){let c=v_(e,n.web),l=c.notes,h=n.web.stats,f=z=>(i.scene.add(z),z);if(l.length<3){let z=()=>xt(l.length,"note");return t.stat(z()),t.controls({at:"centre",lines:["The Food web needs notes that link to one another.",`${xt(l.length,"note")} so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:z,today:()=>null,api:{empty:!0}}}let u=new Map(l.map(z=>[z.n.id,z])),d=z=>z.n.name,m=new Yt,M=z=>z.endangered?Od:a.palette[(z.n.cluster||0)%a.palette.length],g=c.bands.map((z,D)=>{if(!z)return null;let j=f(new re(new vn(c.radius,48),new de({color:zd(a.palette[D%a.palette.length],a.bg,.9),transparent:!0,opacity:.55,side:ye})));return j.rotation.x=-Math.PI/2,j.position.y=D*Rc-.4,j.frustumCulled=!1,j}),p=f(new fe(new ve(1,14,10),new de,l.length));p.frustumCulled=!1;let y=z=>f(new Oe(new he,new Ue({color:z,transparent:!0,opacity:.9}))),v=y(kd),_=y(Vd);v.frustumCulled=_.frustumCulled=!1;let w=n.selected&&u.has(n.selected)?n.selected:null,E=null,x=()=>E||w,S=new Set,F=l.filter(z=>z.endangered),T=z=>z.endangered?" \xB7 stale, others rest on it":"",I=()=>{let z=x()&&u.get(x());return z?`${d(z)} \xB7 rests on ${xt(z.leansOn,"note")} \xB7 ${xt(z.reliedOn,"note")} rest on it${T(z)}`:`mean level ${h.mean.toFixed(1)} \xB7 top ${h.maxLevel.toFixed(1)} \xB7 incoherence ${h.incoherence.toFixed(2)} \xB7 ${xt(F.length,"endangered note")}`},P=(z,D,j)=>j.push(z.x,z.y,z.z,D.x,D.y,D.z);function B(){let z=x();S.clear(),z&&(S.add(z),c.up(z).forEach(V=>S.add(V)),c.down(z).forEach(V=>S.add(V))),l.forEach((V,tt)=>{p.setMatrixAt(tt,m.makeScale(V.r,V.r,V.r).setPosition(V.x,V.y,V.z)),p.setColorAt(tt,zd(M(V),a.bg,!z||S.has(V.n.id)?0:.8))}),p.instanceMatrix.needsUpdate=!0,p.instanceColor.needsUpdate=!0;let D=[],j=[];if(z){let V=u.get(z);c.up(z).forEach(tt=>u.has(tt)&&P(u.get(tt),V,D)),c.down(z).forEach(tt=>u.has(tt)&&P(V,u.get(tt),j))}v.geometry.setAttribute("position",new Gt(D,3)),v.visible=D.length>0,_.geometry.setAttribute("position",new Gt(j,3)),_.visible=j.length>0;let O=c.bands.map((V,tt)=>V?{text:`${tt===0?"Level 1 \xB7 the base":"Level "+(tt+1)} (${V})`,at:[-c.radius,tt*Rc,0],color:"#bbf7d0"}:null).filter(Boolean);if(z){let V=u.get(z);O.unshift({text:se(d(V),34),at:[V.x,V.y+V.r,V.z],strong:!0,dy:-18,run:()=>N(z),title:`Open ${d(V)}`})}t.labels(O),t.stat(I())}function N(z){w=z,B(),o(),s(z)}let Z=[...F].sort((z,D)=>D.reliedOn-z.reliedOn)[0],G=[...l].filter(z=>z.band===0).sort((z,D)=>D.reliedOn-z.reliedOn)[0],X=[];return Z&&X.push({text:`${d(Z)} holds up ${xt(Z.reliedOn,"note")} and has not been edited in ${Z.n.age} days. Open it and decide whether it is still true.`,label:"Open note",run:()=>N(Z.n.id)}),G&&G.reliedOn&&X.push({text:`${d(G)} is the most relied-on note at the base: ${xt(G.reliedOn,"note")} rest on it.`,label:"Open note",run:()=>N(G.n.id)}),t.explain({plain:"Picture a food chain. The notes everything rests on are the plants at the bottom; logs and plans that mostly point at other notes are the animals at the top. If a note at the bottom goes out of date, everything standing on it is built on something stale.",about:`A note rests on the notes it links to, so each note gets a level: the more links lead up from the base to it, the higher it sits. Level is worked out so that every link climbs by about one; incoherence ${h.incoherence.toFixed(2)} is how far the links are from a clean hierarchy (0 is a clean one, 1 shows no direction at all). A red sphere is a note ${Gd} or more notes link to that has not been edited within the vault's stale limit. Pick a note: yellow lines go to the notes resting on it, blue to the notes it rests on.`,legend:[{color:"#bbf7d0",text:"height = level, the base at the bottom"},{color:Od,text:"stale, and others rest on it"},{color:kd,text:"rests on the picked note"},{color:Vd,text:"the picked note rests on"}],insights:X}),t.controls({lines:["Pick a note to see what rests on it"]}),B(),{targets:()=>l.map(z=>({at:[z.x,z.y,z.z],r:Math.max(z.r*1.2,.9),key:{kind:"note",id:z.n.id,tip:`${d(z)} \xB7 level ${z.level.toFixed(1)}${T(z)}`}})),click(z){z.kind==="note"&&N(z.id)},hover(z){let D=z&&z.kind==="note"?z.id:null;D!==E&&(E=D,B())},update(z){"selected"in z&&(w=z.selected&&u.has(z.selected)?z.selected:null,B())},stat:I,today:()=>Z?{text:`${d(Z)} is stale and ${xt(Z.reliedOn,"note")} rest on it`,label:"Open note",run:()=>N(Z.n.id)}:null,api:{layout:()=>c,selected:()=>w,hold(){},notes:()=>l.length},dispose(){for(let z of[...g.filter(Boolean),p,v,_])z.geometry.dispose(),z.material.dispose()}}}};var Vo={low:0,medium:1,high:2},b_=i=>20*(i+1)**2;async function Wd({host:i,detail:t="medium",pbr:e=!1,warmup:n=3e3,run:s=5e3}={}){if(!(t in Vo))throw new Error(`bench: detail is one of ${Object.keys(Vo).join(", ")}`);if(!i)throw new Error("bench: host (an element to draw in) is required");let r=dr(),a=Ro(i,yr(),{fog:!1});try{a.scene.add(mc(r,new vi(1,Vo[t]),e?new Ee({roughness:.6}):new Ei).root);let o=a.renderer.getContext(),c=o.getExtension("WEBGL_debug_renderer_info"),l=String(c&&o.getParameter(c.UNMASKED_RENDERER_WEBGL)||o.getParameter(o.RENDERER)||"unknown"),h=()=>new Promise(y=>requestAnimationFrame(y)),f=performance.now(),u=f,d=f,m=0,M=0,g=0;for(;u-f<n+s;)u=await h(),a.orbit(u/2e3,.3,42),a.render(),u-f>=n&&(g?(m++,M=Math.max(M,u-d)):g=u),d=u;let p=u-g;return{atoms:r.n,detail:t,triangles:r.n*b_(Vo[t]),light:e?"pbr":"basic",fps:p>0?Math.round(m*1e3/p*10)/10:0,worstMs:Math.round(M*10)/10,frames:m,gpu:l}}finally{a.dispose()}}var Cc={bodies:Zu,cas9:ju,genome:$u,cones:nd,loadpaths:dd,modes:md,slime:vd,cyberpunk:Rd,radar:Fd,clock:Bd,foodweb:Hd,city:Nd},w_=Object.values(Cc).map(i=>({id:i.id,name:i.name,hint:i.hint,actions:i.actions||[]}));function E_(i,{view:t="bodies",data:e,inputs:n,onOpen:s,onAction:r,theme:a}={}){let o=Cc[t];if(!o)throw new Error(`vault-graph-views: no view "${t}" (there is ${Object.keys(Cc).join(", ")})`);let c=Wo(e);if(c.length||c.push(...Zo(t,e,n)),c.length)throw new Error("vault-graph-views: "+c.join("; "));if(typeof s!="function")throw new Error("vault-graph-views: onOpen is required");if((o.actions||[]).length&&typeof r!="function")throw new Error(`vault-graph-views: onAction is required for the ${o.name} view (it asks the host for: ${o.actions.join(", ")})`);return Wu(i,o,{data:e,inputs:n||{},onOpen:s,onAction:r,theme:yr(a)})}return ef(T_);})();
