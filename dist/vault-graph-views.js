var VaultGraphViews=(()=>{var fo=Object.defineProperty;var xu=Object.getOwnPropertyDescriptor;var _u=Object.getOwnPropertyNames;var yu=Object.prototype.hasOwnProperty;var Su=(i,t)=>{for(var e in t)fo(i,e,{get:t[e],enumerable:!0})},vu=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of _u(t))!yu.call(i,s)&&s!==e&&fo(i,s,{get:()=>t[s],enumerable:!(n=xu(t,s))||n.enumerable});return i};var Mu=i=>vu(fo({},"__esModule",{value:!0}),i);var f0={};Su(f0,{VIEWS:()=>u0,bench:()=>uu,check:()=>po,checkInputs:()=>mo,mountViews:()=>d0});var Xi={top:{nodes:"array",links:"array",clusters:"array",wanted:"array"},node:{id:"string",name:"string",cluster:"number",folder:"string",inlinks:"number",outlinks:"number",words:"number"},link:{source:"string",target:"string",kind:"string"},cluster:{id:"number",name:"string",label:"string",size:"number"},strand:{days:"array",paths:"array",ids:"array",rows:"array"}},bu={n:"number",X:"array",stress:"number",grade:"string",domains:"array",loops:"array"},Eu={guide:"string",where:"string",notes:"array"};var dn=i=>Array.isArray(i)?"array":i===null?"null":typeof i,ii=(i,t,e,n)=>{for(let[s,r]of Object.entries(n))dn(e[s])!==r&&i.push(`${t}.${s} should be ${r}, is ${dn(e[s])}`)};function po(i){let t=[];if(!i||typeof i!="object")return["data is not an object"];if(ii(t,"data",i,Xi.top),t.length)return t;i.nodes[0]&&ii(t,"nodes[0]",i.nodes[0],Xi.node),i.links[0]&&ii(t,"links[0]",i.links[0],Xi.link),i.clusters[0]&&ii(t,"clusters[0]",i.clusters[0],Xi.cluster);let e=new Set(i.nodes.map(s=>s.id));for(let s of i.wanted)e.add(s.id);let n=i.links.filter(s=>!e.has(s.source)||!e.has(s.target)).length;return n&&t.push(`${n} links point at a note that is in neither nodes nor wanted`),t}function mo(i,t,e){let n=[],s=e||{};if(i==="genome"){let r=t&&t.strand;if(dn(r)!=="object")return[`data.strand should be object, is ${dn(r)}`];if(ii(n,"data.strand",r,Xi.strand),dn(s.fold)!=="object")return n.concat(`inputs.fold should be object, is ${dn(s.fold)}`);if(ii(n,"inputs.fold",s.fold,bu),n.length)return n;let a=s.fold;(r.rows.length!==r.days.length||r.paths.length!==r.days.length)&&n.push(`data.strand has ${r.days.length} days, ${r.rows.length} rows and ${r.paths.length} paths: they should be the same number`),(a.n!==r.days.length||a.X.length!==a.n)&&n.push(`inputs.fold is for ${a.n} days (${a.X.length} points) and data.strand has ${r.days.length}: the fold is from other data`);let o=a.loops.filter(l=>!(l.a>=0&&l.a<a.n&&l.b>=0&&l.b<a.n&&typeof l.count=="number")).length;o&&n.push(`${o} of inputs.fold.loops don't name two days of the strand and a count`)}if(i==="cas9"&&s.scan!=null){if(dn(s.scan)!=="object")return[`inputs.scan should be object, is ${dn(s.scan)}`];ii(n,"inputs.scan",s.scan,Eu),s.scan.ids!==void 0&&!Array.isArray(s.scan.ids)&&n.push(`inputs.scan.ids should be array, is ${dn(s.scan.ids)}`),!n.length&&s.scan.notes[0]&&(typeof s.scan.notes[0].path!="string"||typeof s.scan.notes[0].hits!="number")&&n.push("inputs.scan.notes[0] should be { path: string, hits: number }")}return s.selected!=null&&typeof s.selected!="string"&&n.push(`inputs.selected should be string, is ${dn(s.selected)}`),n}var Tu=["#4385BE","#879A39","#DA702C","#8B7EC8","#3AA99F","#D14D41","#D0A215","#CE5D97","#205EA6","#66800B","#BC5215","#5E409D","#24837B","#AF3029","#AD8301","#A02F6F"];function Ks(i){return Object.assign({bg:"#14161a",fg:"#dddddd",muted:"#8a8f98",accent:"#6aa9ff",palette:Tu},i||{})}var Cc=0,qo=1,Uc=2;var Ns=1,Nc=2,Vi=3,Qn=0,Ve=1,$e=2,ui=0,ki=1,jo=2,Qo=3,Ko=4,Pc=5;var di=100,Fc=101,Dc=102,Lc=103,Bc=104,Oc=200,Vc=201,kc=202,zc=203,$o=204,tl=205,Gc=206,Hc=207,Wc=208,Zc=209,Yc=210,Xc=211,Jc=212,qc=213,jc=214,Er=0,Tr=1,Ar=2,Ui=3,wr=4,Rr=5,Ir=6,Cr=7,da=0,Qc=1,Kc=2,Sn=0,el=1,nl=2,il=3,sl=4,rl=5,al=6,ol=7;var ll=300,fi=301,zi=302,fa=303,pa=304,Ur=1e3,pn=1001,Nr=1002,be=1003,$c=1004;var Ps=1005;var Oe=1006,ma=1007;var Dn=1008;var He=1009,cl=1010,hl=1011,Gi=1012,ga=1013,cn=1014,tn=1015,hn=1016,xa=1017,_a=1018,pi=1020,ul=35902,dl=35899,fl=1021,pl=1022,un=1023,Un=1026,Ln=1027,ya=1028,Sa=1029,Kn=1030,va=1031;var Ma=1033,Fs=33776,Ds=33777,Ls=33778,Bs=33779,ba=35840,Ea=35841,Ta=35842,Aa=35843,wa=36196,Ra=37492,Ia=37496,Ca=37488,Ua=37489,Os=37490,Na=37491,Pa=37808,Fa=37809,Da=37810,La=37811,Ba=37812,Oa=37813,Va=37814,ka=37815,za=37816,Ga=37817,Ha=37818,Wa=37819,Za=37820,Ya=37821,Xa=36492,Ja=36494,qa=36495,ja=36283,Qa=36284,Vs=36285,Ka=36286;var ss=2300,Pr=2301,Mr=2302,Go=2303,Ho=2400,Wo=2401,Zo=2402;var th=3200;var ks=0,eh=1,Bn="",Ue="srgb",rs="srgb-linear",as="linear",ie="srgb";var br=7680;var nh=519,ih=512,sh=513,rh=514,ml=515,ah=516,oh=517,gl=518,xl=519,lh=35044;var _l="300 es",qe=2e3,Ni=2001;function Au(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function wu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function os(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ch(){let i=os("canvas");return i.style.display="block",i}var Kl={},Pi=null;function yl(...i){let t="THREE."+i.shift();Pi?Pi("log",t,...i):console.log(t,...i)}function hh(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ct(...i){i=hh(i);let t="THREE."+i.shift();if(Pi)Pi("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Lt(...i){i=hh(i);let t="THREE."+i.shift();if(Pi)Pi("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function es(...i){let t=i.join(" ");t in Kl||(Kl[t]=!0,Ct(...i))}function uh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var dh={[Er]:Er,[Ar]:Ir,[wr]:wr,[Ui]:Rr,[Tr]:Tr,[Ir]:Ar,[Cr]:Cr,[Rr]:Ui},mn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var go=Math.PI/180,Fr=180/Math.PI;function zs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Zt(i,t,e){return Math.max(t,Math.min(e,i))}function Ru(i,t){return(i%t+t)%t}function xo(i,t,e){return(1-e)*i+e*t}function fh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Sl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Iu(i,t){if(t.constructor===Float32Array)return i;let e=Sl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Cu(i,t){if(t.constructor===Float32Array)return i;let e=Sl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Tt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},je=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],_=r[a+2],S=r[a+3];if(d!==S||l!==u||c!==f||h!==_){let p=l*u+c*f+h*_+d*S;p<0&&(u=-u,f=-f,_=-_,S=-S,p=-p);let m=1-o;if(p<.9995){let x=Math.acos(p),E=Math.sin(x);m=Math.sin(m*x)/E,o=Math.sin(o*x)/E,l=l*m+u*o,c=c*m+f*o,h=h*m+_*o,d=d*m+S*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+_*o,d=d*m+S*o;let x=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=x,c*=x,h*=x,d*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],_=r[a+3];return t[e]=o*_+h*d+l*f-c*u,t[e+1]=l*_+h*u+c*d-o*f,t[e+2]=c*_+h*f+o*u-l*d,t[e+3]=h*_-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"YXZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"ZXY":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"ZYX":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"YZX":this._x=u*h*d+c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d-u*f*_;break;case"XZY":this._x=u*h*d-c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d+u*f*_;break;default:Ct("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($l.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($l.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _o.copy(this).projectOnVector(t),this.sub(_o)}reflect(t){return this.sub(_o.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_o=new P,$l=new je,Bt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],_=n[8],S=s[0],p=s[3],m=s[6],x=s[1],E=s[4],y=s[7],A=s[2],T=s[5],g=s[8];return r[0]=a*S+o*x+l*A,r[3]=a*p+o*E+l*T,r[6]=a*m+o*y+l*g,r[1]=c*S+h*x+d*A,r[4]=c*p+h*E+d*T,r[7]=c*m+h*y+d*g,r[2]=u*S+f*x+_*A,r[5]=u*p+f*E+_*T,r[8]=u*m+f*y+_*g,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,_=e*d+n*u+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/_;return t[0]=d*S,t[1]=(s*c-h*n)*S,t[2]=(o*n-s*a)*S,t[3]=u*S,t[4]=(h*e-s*l)*S,t[5]=(s*r-o*e)*S,t[6]=f*S,t[7]=(n*l-c*e)*S,t[8]=(a*e-n*r)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return es("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yo.makeScale(t,e)),this}rotate(t){return es("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yo.makeRotation(-t)),this}translate(t,e){return es("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},yo=new Bt,tc=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ec=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Uu(){let i={enabled:!0,workingColorSpace:rs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ie&&(s.r=Cn(s.r),s.g=Cn(s.g),s.b=Cn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ie&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bn?as:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[rs]:{primaries:t,whitePoint:n,transfer:as,toXYZ:tc,fromXYZ:ec,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:n,transfer:ie,toXYZ:tc,fromXYZ:ec,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),i}var Jt=Uu();function Cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ci(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var gi,Dr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{gi===void 0&&(gi=os("canvas")),gi.width=t.width,gi.height=t.height;let s=gi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=gi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=os("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Cn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Cn(e[n]/255)*255):e[n]=Cn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Nu=0,Fi=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=zs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(So(s[a].image)):r.push(So(s[a]))}else r=So(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function So(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Dr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ct("Texture: Unable to serialize Texture."),{})}var Pu=0,vo=new P,Ge=class i extends mn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=pn,s=pn,r=Oe,a=Dn,o=un,l=He,c=i.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=zs(),this.name="",this.source=new Fi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(vo).x}get height(){return this.source.getSize(vo).y}get depth(){return this.source.getSize(vo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ct(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ct(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ll)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ur:t.x=t.x-Math.floor(t.x);break;case pn:t.x=t.x<0?0:1;break;case Nr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ur:t.y=t.y-Math.floor(t.y);break;case pn:t.y=t.y<0?0:1;break;case Nr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=ll;Ge.DEFAULT_ANISOTROPY=1;var ue=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],_=l[9],S=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-S)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+S)<.1&&Math.abs(_+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,y=(f+1)/2,A=(m+1)/2,T=(h+u)/4,g=(d+S)/4,M=(_+p)/4;return E>y&&E>A?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=T/n,r=g/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=M/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=g/r,s=M/r),this.set(n,s,r,e),this}let x=Math.sqrt((p-_)*(p-_)+(d-S)*(d-S)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(p-_)/x,this.y=(d-S)/x,this.z=(u-h)/x,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Lr=class extends mn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Ge({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Oe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Fi(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ye=class extends Lr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ls=class extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=be,this.minFilter=be,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Br=class extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=be,this.minFilter=be,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var qt=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,_,S,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,_,S,p)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,_,S,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=_,m[11]=S,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/xi.setFromMatrixColumn(t,0).length(),r=1/xi.setFromMatrixColumn(t,1).length(),a=1/xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,_=o*h,S=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+_*c,e[5]=u-S*c,e[9]=-o*l,e[2]=S-u*c,e[6]=_+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,_=c*h,S=c*d;e[0]=u+S*o,e[4]=_*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-_,e[6]=S+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,_=c*h,S=c*d;e[0]=u-S*o,e[4]=-a*d,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*h,e[9]=S-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,_=o*h,S=o*d;e[0]=l*h,e[4]=_*c-f,e[8]=u*c+S,e[1]=l*d,e[5]=S*c+u,e[9]=f*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,_=o*l,S=o*c;e[0]=l*h,e[4]=S-u*d,e[8]=_*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+_,e[10]=u-S*d}else if(t.order==="XZY"){let u=a*l,f=a*c,_=o*l,S=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+S,e[5]=a*h,e[9]=f*d-_,e[2]=_*d-f,e[6]=o*h,e[10]=S*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fu,t,Du)}lookAt(t,e,n){let s=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),kn.crossVectors(n,We),kn.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),kn.crossVectors(n,We)),kn.normalize(),$s.crossVectors(We,kn),s[0]=kn.x,s[4]=$s.x,s[8]=We.x,s[1]=kn.y,s[5]=$s.y,s[9]=We.y,s[2]=kn.z,s[6]=$s.z,s[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],_=n[2],S=n[6],p=n[10],m=n[14],x=n[3],E=n[7],y=n[11],A=n[15],T=s[0],g=s[4],M=s[8],U=s[12],R=s[1],F=s[5],L=s[9],G=s[13],C=s[2],z=s[6],Z=s[10],H=s[14],nt=s[3],Y=s[7],K=s[11],et=s[15];return r[0]=a*T+o*R+l*C+c*nt,r[4]=a*g+o*F+l*z+c*Y,r[8]=a*M+o*L+l*Z+c*K,r[12]=a*U+o*G+l*H+c*et,r[1]=h*T+d*R+u*C+f*nt,r[5]=h*g+d*F+u*z+f*Y,r[9]=h*M+d*L+u*Z+f*K,r[13]=h*U+d*G+u*H+f*et,r[2]=_*T+S*R+p*C+m*nt,r[6]=_*g+S*F+p*z+m*Y,r[10]=_*M+S*L+p*Z+m*K,r[14]=_*U+S*G+p*H+m*et,r[3]=x*T+E*R+y*C+A*nt,r[7]=x*g+E*F+y*z+A*Y,r[11]=x*M+E*L+y*Z+A*K,r[15]=x*U+E*G+y*H+A*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],_=t[3],S=t[7],p=t[11],m=t[15],x=l*f-c*u,E=o*f-c*d,y=o*u-l*d,A=a*f-c*h,T=a*u-l*h,g=a*d-o*h;return e*(S*x-p*E+m*y)-n*(_*x-p*A+m*T)+s*(_*E-S*A+m*g)-r*(_*y-S*T+p*g)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],_=t[12],S=t[13],p=t[14],m=t[15],x=e*o-n*a,E=e*l-s*a,y=e*c-r*a,A=n*l-s*o,T=n*c-r*o,g=s*c-r*l,M=h*S-d*_,U=h*p-u*_,R=h*m-f*_,F=d*p-u*S,L=d*m-f*S,G=u*m-f*p,C=x*G-E*L+y*F+A*R-T*U+g*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/C;return t[0]=(o*G-l*L+c*F)*z,t[1]=(s*L-n*G-r*F)*z,t[2]=(S*g-p*T+m*A)*z,t[3]=(u*T-d*g-f*A)*z,t[4]=(l*R-a*G-c*U)*z,t[5]=(e*G-s*R+r*U)*z,t[6]=(p*y-_*g-m*E)*z,t[7]=(h*g-u*y+f*E)*z,t[8]=(a*L-o*R+c*M)*z,t[9]=(n*R-e*L-r*M)*z,t[10]=(_*T-S*y+m*x)*z,t[11]=(d*y-h*T-f*x)*z,t[12]=(o*U-a*F-l*M)*z,t[13]=(e*F-n*U+s*M)*z,t[14]=(S*E-_*A-p*x)*z,t[15]=(h*A-d*E+u*x)*z,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,_=r*d,S=a*h,p=a*d,m=o*d,x=l*c,E=l*h,y=l*d,A=n.x,T=n.y,g=n.z;return s[0]=(1-(S+m))*A,s[1]=(f+y)*A,s[2]=(_-E)*A,s[3]=0,s[4]=(f-y)*T,s[5]=(1-(u+m))*T,s[6]=(p+x)*T,s[7]=0,s[8]=(_+E)*g,s[9]=(p-x)*g,s[10]=(1-(u+S))*g,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=xi.set(s[0],s[1],s[2]).length(),o=xi.set(s[4],s[5],s[6]).length(),l=xi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),nn.copy(this);let c=1/a,h=1/o,d=1/l;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=d,nn.elements[9]*=d,nn.elements[10]*=d,e.setFromRotationMatrix(nn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=qe,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),_,S;if(l)_=r/(a-r),S=a*r/(a-r);else if(o===qe)_=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===Ni)_=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=qe,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),_,S;if(l)_=1/(a-r),S=a/(a-r);else if(o===qe)_=-2/(a-r),S=-(a+r)/(a-r);else if(o===Ni)_=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},xi=new P,nn=new qt,Fu=new P(0,0,0),Du=new P(1,1,1),kn=new P,$s=new P,We=new P,nc=new qt,ic=new je,gn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return nc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ic.setFromEuler(this),this.setFromQuaternion(ic,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gn.DEFAULT_ORDER="XYZ";var cs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Lu=0,sc=new P,_i=new je,En=new qt,tr=new P,Ji=new P,Bu=new P,Ou=new je,rc=new P(1,0,0),ac=new P(0,1,0),oc=new P(0,0,1),lc={type:"added"},Vu={type:"removed"},yi={type:"childadded",child:null},Mo={type:"childremoved",child:null},Ne=class i extends mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new gn,n=new je,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qt},normalMatrix:{value:new Bt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.multiply(_i),this}rotateOnWorldAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.premultiply(_i),this}rotateX(t){return this.rotateOnAxis(rc,t)}rotateY(t){return this.rotateOnAxis(ac,t)}rotateZ(t){return this.rotateOnAxis(oc,t)}translateOnAxis(t,e){return sc.copy(t).applyQuaternion(this.quaternion),this.position.add(sc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rc,t)}translateY(t){return this.translateOnAxis(ac,t)}translateZ(t){return this.translateOnAxis(oc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?tr.copy(t):tr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(Ji,tr,this.up):En.lookAt(tr,Ji,this.up),this.quaternion.setFromRotationMatrix(En),s&&(En.extractRotation(s.matrixWorld),_i.setFromRotationMatrix(En),this.quaternion.premultiply(_i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Lt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lc),yi.child=t,this.dispatchEvent(yi),yi.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vu),Mo.child=t,this.dispatchEvent(Mo),Mo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),En.multiply(t.parent.matrixWorld)),t.applyMatrix4(En),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lc),yi.child=t,this.dispatchEvent(yi),yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,t,Bu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,Ou,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ne.DEFAULT_UP=new P(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var In=class extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}},ku={type:"move"},Di=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let S of t.hand.values()){let p=e.getJointPose(S,n),m=this._getHandJoint(c,S);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&u>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ku)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new In;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},er={h:0,s:0,l:0};function bo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Pt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Jt.workingColorSpace){if(t=Ru(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=bo(a,r,t+1/3),this.g=bo(a,r,t),this.b=bo(a,r,t-1/3)}return Jt.colorSpaceToWorking(this,s),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&Ct("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ct("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ct("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){let n=ph[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ct("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cn(t.r),this.g=Cn(t.g),this.b=Cn(t.b),this}copyLinearToSRGB(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return Jt.workingToColorSpace(Ce.copy(this),t),Math.round(Zt(Ce.r*255,0,255))*65536+Math.round(Zt(Ce.g*255,0,255))*256+Math.round(Zt(Ce.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.workingToColorSpace(Ce.copy(this),e);let n=Ce.r,s=Ce.g,r=Ce.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.workingToColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=Ue){Jt.workingToColorSpace(Ce.copy(this),t);let e=Ce.r,n=Ce.g,s=Ce.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(zn),this.setHSL(zn.h+t,zn.s+e,zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zn),t.getHSL(er);let n=xo(zn.h,er.h,e),s=xo(zn.s,er.s,e),r=xo(zn.l,er.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ce=new Pt;Pt.NAMES=ph;var hs=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Pt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},us=class extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},sn=new P,Tn=new P,Eo=new P,An=new P,Si=new P,vi=new P,cc=new P,To=new P,Ao=new P,wo=new P,Ro=new ue,Io=new ue,Co=new ue,Zn=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),sn.subVectors(t,e),s.cross(sn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){sn.subVectors(s,e),Tn.subVectors(n,e),Eo.subVectors(t,e);let a=sn.dot(sn),o=sn.dot(Tn),l=sn.dot(Eo),c=Tn.dot(Tn),h=Tn.dot(Eo),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,_=(a*h-o*l)*u;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,An.x),l.addScaledVector(a,An.y),l.addScaledVector(o,An.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ro.setScalar(0),Io.setScalar(0),Co.setScalar(0),Ro.fromBufferAttribute(t,e),Io.fromBufferAttribute(t,n),Co.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ro,r.x),a.addScaledVector(Io,r.y),a.addScaledVector(Co,r.z),a}static isFrontFacing(t,e,n,s){return sn.subVectors(n,e),Tn.subVectors(t,e),sn.cross(Tn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),sn.cross(Tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Si.subVectors(s,n),vi.subVectors(r,n),To.subVectors(t,n);let l=Si.dot(To),c=vi.dot(To);if(l<=0&&c<=0)return e.copy(n);Ao.subVectors(t,s);let h=Si.dot(Ao),d=vi.dot(Ao);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(Si,a);wo.subVectors(t,r);let f=Si.dot(wo),_=vi.dot(wo);if(_>=0&&f<=_)return e.copy(r);let S=f*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(vi,o);let p=h*_-f*d;if(p<=0&&d-h>=0&&f-_>=0)return cc.subVectors(r,s),o=(d-h)/(d-h+(f-_)),e.copy(s).addScaledVector(cc,o);let m=1/(p+S+u);return a=S*m,o=u*m,e.copy(n).addScaledVector(Si,a).addScaledVector(vi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},xn=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,rn):rn.fromBufferAttribute(r,a),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),nr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),nr.copy(n.boundingBox)),nr.applyMatrix4(t.matrixWorld),this.union(nr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qi),ir.subVectors(this.max,qi),Mi.subVectors(t.a,qi),bi.subVectors(t.b,qi),Ei.subVectors(t.c,qi),Gn.subVectors(bi,Mi),Hn.subVectors(Ei,bi),si.subVectors(Mi,Ei);let e=[0,-Gn.z,Gn.y,0,-Hn.z,Hn.y,0,-si.z,si.y,Gn.z,0,-Gn.x,Hn.z,0,-Hn.x,si.z,0,-si.x,-Gn.y,Gn.x,0,-Hn.y,Hn.x,0,-si.y,si.x,0];return!Uo(e,Mi,bi,Ei,ir)||(e=[1,0,0,0,1,0,0,0,1],!Uo(e,Mi,bi,Ei,ir))?!1:(sr.crossVectors(Gn,Hn),e=[sr.x,sr.y,sr.z],Uo(e,Mi,bi,Ei,ir))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},wn=[new P,new P,new P,new P,new P,new P,new P,new P],rn=new P,nr=new xn,Mi=new P,bi=new P,Ei=new P,Gn=new P,Hn=new P,si=new P,qi=new P,ir=new P,sr=new P,ri=new P;function Uo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ri.fromArray(i,r);let o=s.x*Math.abs(ri.x)+s.y*Math.abs(ri.y)+s.z*Math.abs(ri.z),l=t.dot(ri),c=e.dot(ri),h=n.dot(ri);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var me=new P,rr=new Tt,zu=0,on=class extends mn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=lh,this.updateRanges=[],this.gpuType=tn,this.version=0,this._normalizationScale=t!==void 0?Sl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)rr.fromBufferAttribute(this,e),rr.applyMatrix3(t),this.setXY(e,rr.x,rr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Iu(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Cu(t,this.array)}};var ds=class extends on{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var fs=class extends on{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ne=class extends on{constructor(t,e,n){super(new Float32Array(t),e,n)}},Gu=new xn,ji=new P,No=new P,Nn=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Gu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ji.subVectors(t,this.center);let e=ji.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ji,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(No.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ji.copy(t.center).add(No)),this.expandByPoint(ji.copy(t.center).sub(No))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Hu=0,Je=new qt,Po=new Ne,Ti=new P,Ze=new xn,Qi=new xn,Me=new P,Ae=class i extends mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Au(t)?fs:ds)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return Po.lookAt(t),Po.updateMatrix(),this.applyMatrix4(Po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ne(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Qi.setFromBufferAttribute(o),this.morphTargetsRelative?(Me.addVectors(Ze.min,Qi.min),Ze.expandByPoint(Me),Me.addVectors(Ze.max,Qi.max),Ze.expandByPoint(Me)):(Ze.expandByPoint(Qi.min),Ze.expandByPoint(Qi.max))}Ze.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Me));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Me.fromBufferAttribute(o,c),l&&(Ti.fromBufferAttribute(t,c),Me.add(Ti)),s=Math.max(s,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new on(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let U=0;U<n.count;U++)o[U]=new P,l[U]=new P;let h=new P,d=new P,u=new P,f=new Tt,_=new Tt,S=new Tt,p=new P,m=new P;function x(U,R,F){c[U]=c[R]=c[F]=1,h.fromBufferAttribute(n,U),d.fromBufferAttribute(n,R),u.fromBufferAttribute(n,F),f.fromBufferAttribute(r,U),_.fromBufferAttribute(r,R),S.fromBufferAttribute(r,F),d.sub(h),u.sub(h),_.sub(f),S.sub(f);let L=1/(_.x*S.y-S.x*_.y);isFinite(L)&&(p.copy(d).multiplyScalar(S.y).addScaledVector(u,-_.y).multiplyScalar(L),m.copy(u).multiplyScalar(_.x).addScaledVector(d,-S.x).multiplyScalar(L),o[U].add(p),o[R].add(p),o[F].add(p),l[U].add(m),l[R].add(m),l[F].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let U=0,R=E.length;U<R;++U){let F=E[U],L=F.start,G=F.count;for(let C=L,z=L+G;C<z;C+=3)x(t.getX(C+0),t.getX(C+1),t.getX(C+2))}let y=new P,A=new P,T=new P,g=new P;function M(U){T.fromBufferAttribute(s,U),g.copy(T);let R=o[U];y.copy(R),y.sub(T.multiplyScalar(T.dot(R))).normalize(),A.crossVectors(g,R);let L=A.dot(l[U])<0?-1:1;a.setXYZW(U,y.x,y.y,y.z,L)}for(let U=0,R=n.count;U<R;++U)c[U]&&M(U);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let u=0,f=t.count;u<f;u+=3){let _=t.getX(u+0),S=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,_=0;for(let S=0,p=l.length;S<p;S++){o.isInterleavedBufferAttribute?f=l[S]*o.data.stride+o.offset:f=l[S]*h;for(let m=0;m<h;m++)u[_++]=c[f++]}return new on(u,h,d)}if(this.index===null)return Ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Fo=new P,Wu=new P,Zu=new Bt,an=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Fo.subVectors(n,e).cross(Wu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Fo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Zu.getNormalMatrix(t),s=this.coplanarPoint(Fo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Yu=0,_n=class extends mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=zs(),this.name="",this.type="Material",this.blending=ki,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$o,this.blendDst=tl,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ct(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ct(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Pt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new an().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Tt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Tt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Rn=new P,Do=new P,ar=new P,or=new P,ps=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Do.copy(t).add(e).multiplyScalar(.5),ar.copy(e).sub(t).normalize(),or.copy(this.origin).sub(Do);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ar),o=or.dot(this.direction),l=-or.dot(ar),c=or.lengthSq(),h=Math.abs(1-a*a),d,u,f,_;if(h>0)if(d=a*l-o,u=a*o-l,_=r*h,d>=0)if(u>=-_)if(u<=_){let S=1/h;d*=S,u*=S,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-_?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=_?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Do).addScaledVector(ar,u),f}intersectSphere(t,e){if(t.radius<0)return null;Rn.subVectors(t.center,this.origin);let n=Rn.dot(this.direction),s=Rn.dot(Rn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,_=e.x-a.x,S=e.y-a.y,p=e.z-a.z,m=n.x-a.x,x=n.y-a.y,E=n.z-a.z,y=Math.abs(l),A=Math.abs(c),T=Math.abs(h),g,M,U,R,F,L,G,C,z,Z,H,nt;if(y>=A&&y>=T?(U=l,L=d,z=_,nt=m,l>=0?(g=c,M=h,R=u,F=f,G=S,C=p,Z=x,H=E):(g=h,M=c,R=f,F=u,G=p,C=S,Z=E,H=x)):A>=T?(U=c,L=u,z=S,nt=x,c>=0?(g=h,M=l,R=f,F=d,G=p,C=_,Z=E,H=m):(g=l,M=h,R=d,F=f,G=_,C=p,Z=m,H=E)):(U=h,L=f,z=p,nt=E,h>=0?(g=l,M=c,R=d,F=u,G=_,C=S,Z=m,H=x):(g=c,M=l,R=u,F=d,G=S,C=_,Z=x,H=m)),U===0)return null;let Y=g/U,K=M/U,et=1/U,q=R-Y*L,mt=F-K*L,k=G-Y*z,st=C-K*z,St=Z-Y*nt,At=H-K*nt,ut=St*st-At*k,Ft=q*At-mt*St,Gt=k*mt-st*q;if(s){if(ut<0||Ft<0||Gt<0)return null}else if((ut<0||Ft<0||Gt<0)&&(ut>0||Ft>0||Gt>0))return null;let Rt=ut+Ft+Gt;if(Rt===0)return null;let Qt=et*(ut*L+Ft*z+Gt*nt);return(Rt>0?Qt<0:Qt>0)?null:this.at(Qt/Rt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yn=class extends _n{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},hc=new qt,ai=new ps,lr=new Nn,uc=new P,cr=new P,hr=new P,ur=new P,Lo=new P,dr=new P,dc=new P,fr=new P,Pe=class extends Ne{constructor(t=new Ae,e=new Yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){dr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Lo.fromBufferAttribute(d,t),a?dr.addScaledVector(Lo,h):dr.addScaledVector(Lo.sub(e),h))}e.add(dr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(r),ai.copy(t.ray).recast(t.near),!(lr.containsPoint(ai.origin)===!1&&(ai.intersectSphere(lr,uc)===null||ai.origin.distanceToSquared(uc)>(t.far-t.near)**2))&&(hc.copy(r).invert(),ai.copy(t.ray).applyMatrix4(hc),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ai)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=u.length;_<S;_++){let p=u[_],m=a[p.materialIndex],x=Math.max(p.start,f.start),E=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let y=x,A=E;y<A;y+=3){let T=o.getX(y),g=o.getX(y+1),M=o.getX(y+2);s=pr(this,m,t,n,c,h,d,T,g,M),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,f.start),S=Math.min(o.count,f.start+f.count);for(let p=_,m=S;p<m;p+=3){let x=o.getX(p),E=o.getX(p+1),y=o.getX(p+2);s=pr(this,a,t,n,c,h,d,x,E,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=u.length;_<S;_++){let p=u[_],m=a[p.materialIndex],x=Math.max(p.start,f.start),E=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=x,A=E;y<A;y+=3){let T=y,g=y+1,M=y+2;s=pr(this,m,t,n,c,h,d,T,g,M),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,f.start),S=Math.min(l.count,f.start+f.count);for(let p=_,m=S;p<m;p+=3){let x=p,E=p+1,y=p+2;s=pr(this,a,t,n,c,h,d,x,E,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Xu(i,t,e,n,s,r,a,o){let l;if(t.side===Ve?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Qn,o),l===null)return null;fr.copy(o),fr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(fr);return c<e.near||c>e.far?null:{distance:c,point:fr.clone(),object:i}}function pr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,cr),i.getVertexPosition(l,hr),i.getVertexPosition(c,ur);let h=Xu(i,t,e,n,cr,hr,ur,dc);if(h){let d=new P;Zn.getBarycoord(dc,cr,hr,ur,d),s&&(h.uv=Zn.getInterpolatedAttribute(s,o,l,c,d,new Tt)),r&&(h.uv1=Zn.getInterpolatedAttribute(r,o,l,c,d,new Tt)),a&&(h.normal=Zn.getInterpolatedAttribute(a,o,l,c,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new P,materialIndex:0};Zn.getNormal(cr,hr,ur,u.normal),h.face=u,h.barycoord=d}return h}var ms=class extends Ge{constructor(t=null,e=1,n=1,s,r,a,o,l,c=be,h=be,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gs=class extends on{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ai=new qt,fc=new qt,mr=[],pc=new xn,Ju=new qt,Ki=new Pe,$i=new Nn,Qe=class extends Pe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new gs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ju)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new xn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ai),pc.copy(t.boundingBox).applyMatrix4(Ai),this.boundingBox.union(pc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ai),$i.copy(t.boundingSphere).applyMatrix4(Ai),this.boundingSphere.union($i)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ki.geometry=this.geometry,Ki.material=this.material,Ki.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$i.copy(this.boundingSphere),$i.applyMatrix4(n),t.ray.intersectsSphere($i)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ai),fc.multiplyMatrices(n,Ai),Ki.matrixWorld=fc,Ki.raycast(t,mr);for(let a=0,o=mr.length;a<o;a++){let l=mr[a];l.instanceId=r,l.object=this,e.push(l)}mr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new gs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ms(new Float32Array(s*this.count),s,this.count,ya,tn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},oi=new Nn,qu=new Tt(.5,.5),gr=new P,Xn=class{constructor(t=new an,e=new an,n=new an,s=new an,r=new an,a=new an){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qe,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],_=r[8],S=r[9],p=r[10],m=r[11],x=r[12],E=r[13],y=r[14],A=r[15];if(s[0].setComponents(c-a,f-h,m-_,A-x).normalize(),s[1].setComponents(c+a,f+h,m+_,A+x).normalize(),s[2].setComponents(c+o,f+d,m+S,A+E).normalize(),s[3].setComponents(c-o,f-d,m-S,A-E).normalize(),n)s[4].setComponents(l,u,p,y).normalize(),s[5].setComponents(c-l,f-u,m-p,A-y).normalize();else if(s[4].setComponents(c-l,f-u,m-p,A-y).normalize(),e===qe)s[5].setComponents(c+l,f+u,m+p,A+y).normalize();else if(e===Ni)s[5].setComponents(l,u,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(t){oi.center.set(0,0,0);let e=qu.distanceTo(t.center);return oi.radius=.7071067811865476+e,oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(gr.x=s.normal.x>0?t.max.x:t.min.x,gr.y=s.normal.y>0?t.max.y:t.min.y,gr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(gr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},mc=new qt,Or=class i{constructor(){this.coordinateSystem=qe,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];mc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Xn),n[s].setFromProjectionMatrix(mc,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Xn),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Li=class extends _n{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Vr=new P,kr=new P,gc=new qt,ts=new ps,xr=new Nn,Bo=new P,xc=new P,zr=class extends Ne{constructor(t=new Ae,e=new Li){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Vr.fromBufferAttribute(e,s-1),kr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Vr.distanceTo(kr);t.setAttribute("lineDistance",new ne(n,1))}else Ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(s),xr.radius+=r,t.ray.intersectsSphere(xr)===!1)return;gc.copy(s).invert(),ts.copy(t.ray).applyMatrix4(gc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let S=f,p=_-1;S<p;S+=c){let m=h.getX(S),x=h.getX(S+1),E=_r(this,t,ts,l,m,x,S);E&&e.push(E)}if(this.isLineLoop){let S=h.getX(_-1),p=h.getX(f),m=_r(this,t,ts,l,S,p,_-1);m&&e.push(m)}}else{let f=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let S=f,p=_-1;S<p;S+=c){let m=_r(this,t,ts,l,S,S+1,S);m&&e.push(m)}if(this.isLineLoop){let S=_r(this,t,ts,l,_-1,f,_-1);S&&e.push(S)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function _r(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(Vr.fromBufferAttribute(o,s),kr.fromBufferAttribute(o,r),e.distanceSqToSegment(Vr,kr,Bo,xc)>n)return;Bo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Bo);if(!(c<t.near||c>t.far))return{distance:c,point:xc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var _c=new P,yc=new P,xs=class extends zr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)_c.fromBufferAttribute(e,s),yc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+_c.distanceTo(yc);t.setAttribute("lineDistance",new ne(n,1))}else Ct("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var _s=class extends Ge{constructor(t=[],e=fi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Pn=class extends Ge{constructor(t,e,n=cn,s,r,a,o=be,l=be,c,h=Un,d=1){if(h!==Un&&h!==Ln)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Fi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ys=class extends Pn{constructor(t,e=cn,n=fi,s,r,a=be,o=be,l,c=Un){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ss=class extends Ge{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Bi=class i extends Ae{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(d,2));function _(S,p,m,x,E,y,A,T,g,M,U){let R=y/g,F=A/M,L=y/2,G=A/2,C=T/2,z=g+1,Z=M+1,H=0,nt=0,Y=new P;for(let K=0;K<Z;K++){let et=K*F-G;for(let q=0;q<z;q++){let mt=q*R-L;Y[S]=mt*x,Y[p]=et*E,Y[m]=C,c.push(Y.x,Y.y,Y.z),Y[S]=0,Y[p]=0,Y[m]=T>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(q/g),d.push(1-K/M),H+=1}}for(let K=0;K<M;K++)for(let et=0;et<g;et++){let q=u+et+z*K,mt=u+et+z*(K+1),k=u+(et+1)+z*(K+1),st=u+(et+1)+z*K;l.push(q,mt,st),l.push(mt,k,st),nt+=6}o.addGroup(f,nt,U),f+=nt,u+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var vs=class i extends Ae{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],_=0,S=[],p=n/2,m=0;x(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new ne(d,3)),this.setAttribute("normal",new ne(u,3)),this.setAttribute("uv",new ne(f,2));function x(){let y=new P,A=new P,T=0,g=(e-t)/n;for(let M=0;M<=r;M++){let U=[],R=M/r,F=R*(e-t)+t;for(let L=0;L<=s;L++){let G=L/s,C=G*l+o,z=Math.sin(C),Z=Math.cos(C);A.x=F*z,A.y=-R*n+p,A.z=F*Z,d.push(A.x,A.y,A.z),y.set(z,g,Z).normalize(),u.push(y.x,y.y,y.z),f.push(G,1-R),U.push(_++)}S.push(U)}for(let M=0;M<s;M++)for(let U=0;U<r;U++){let R=S[U][M],F=S[U+1][M],L=S[U+1][M+1],G=S[U][M+1];(t>0||U!==0)&&(h.push(R,F,G),T+=3),(e>0||U!==r-1)&&(h.push(F,L,G),T+=3)}c.addGroup(m,T,0),m+=T}function E(y){let A=_,T=new Tt,g=new P,M=0,U=y===!0?t:e,R=y===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,p*R,0),u.push(0,R,0),f.push(.5,.5),_++;let F=_;for(let L=0;L<=s;L++){let C=L/s*l+o,z=Math.cos(C),Z=Math.sin(C);g.x=U*Z,g.y=p*R,g.z=U*z,d.push(g.x,g.y,g.z),u.push(0,R,0),T.x=z*.5+.5,T.y=Z*.5*R+.5,f.push(T.x,T.y),_++}for(let L=0;L<s;L++){let G=A+L,C=F+L;y===!0?h.push(C,C+1,G):h.push(C+1,C,G),M+=3}c.addGroup(m,M,y===!0?1:2),m+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Gr=class i extends Ae{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let E=new P,y=new P,A=new P;for(let T=0;T<e.length;T+=3)f(e[T+0],E),f(e[T+1],y),f(e[T+2],A),l(E,y,A,x)}function l(x,E,y,A){let T=A+1,g=[];for(let M=0;M<=T;M++){g[M]=[];let U=x.clone().lerp(y,M/T),R=E.clone().lerp(y,M/T),F=T-M;for(let L=0;L<=F;L++)L===0&&M===T?g[M][L]=U:g[M][L]=U.clone().lerp(R,L/F)}for(let M=0;M<T;M++)for(let U=0;U<2*(T-M)-1;U++){let R=Math.floor(U/2);U%2===0?(u(g[M][R+1]),u(g[M+1][R]),u(g[M][R])):(u(g[M][R+1]),u(g[M+1][R+1]),u(g[M+1][R]))}}function c(x){let E=new P;for(let y=0;y<r.length;y+=3)E.x=r[y+0],E.y=r[y+1],E.z=r[y+2],E.normalize().multiplyScalar(x),r[y+0]=E.x,r[y+1]=E.y,r[y+2]=E.z}function h(){let x=new P;for(let E=0;E<r.length;E+=3){x.x=r[E+0],x.y=r[E+1],x.z=r[E+2];let y=p(x)/2/Math.PI+.5,A=m(x)/Math.PI+.5;a.push(y,1-A)}_(),d()}function d(){for(let x=0;x<a.length;x+=6){let E=a[x+0],y=a[x+2],A=a[x+4],T=Math.max(E,y,A),g=Math.min(E,y,A);T>.9&&g<.1&&(E<.2&&(a[x+0]+=1),y<.2&&(a[x+2]+=1),A<.2&&(a[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function f(x,E){let y=x*3;E.x=t[y+0],E.y=t[y+1],E.z=t[y+2]}function _(){let x=new P,E=new P,y=new P,A=new P,T=new Tt,g=new Tt,M=new Tt;for(let U=0,R=0;U<r.length;U+=9,R+=6){x.set(r[U+0],r[U+1],r[U+2]),E.set(r[U+3],r[U+4],r[U+5]),y.set(r[U+6],r[U+7],r[U+8]),T.set(a[R+0],a[R+1]),g.set(a[R+2],a[R+3]),M.set(a[R+4],a[R+5]),A.copy(x).add(E).add(y).divideScalar(3);let F=p(A);S(T,R+0,x,F),S(g,R+2,E,F),S(M,R+4,y,F)}}function S(x,E,y,A){A<0&&x.x===1&&(a[E]=x.x-1),y.x===0&&y.z===0&&(a[E]=A/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Ke=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ct("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Tt:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new P,s=[],r=[],a=[],o=new P,l=new qt;for(let f=0;f<=t;f++){let _=f/t;s[f]=this.getTangentAt(_,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(Zt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,_))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Zt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],f*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Ms=class extends Ke{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Tt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Hr=class extends Ms{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function vl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Sc=new P,vc=new P,Oo=new vl,Vo=new vl,ko=new vl,Wr=class extends Ke{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(vc.subVectors(s[0],s[1]).add(s[0]),c=vc);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Sc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Sc),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(d),f),S=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);S<1e-4&&(S=1),_<1e-4&&(_=S),p<1e-4&&(p=S),Oo.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,_,S,p),Vo.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,_,S,p),ko.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,_,S,p)}else this.curveType==="catmullrom"&&(Oo.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Vo.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),ko.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Oo.calc(l),Vo.calc(l),ko.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Mc(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function ju(i,t){let e=1-i;return e*e*t}function Qu(i,t){return 2*(1-i)*i*t}function Ku(i,t){return i*i*t}function ns(i,t,e,n){return ju(i,t)+Qu(i,e)+Ku(i,n)}function $u(i,t){let e=1-i;return e*e*e*t}function td(i,t){let e=1-i;return 3*e*e*i*t}function ed(i,t){return 3*(1-i)*i*i*t}function nd(i,t){return i*i*i*t}function is(i,t,e,n,s){return $u(i,t)+td(i,e)+ed(i,n)+nd(i,s)}var Zr=class extends Ke{constructor(t=new Tt,e=new Tt,n=new Tt,s=new Tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Tt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(is(t,s.x,r.x,a.x,o.x),is(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Yr=class extends Ke{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(is(t,s.x,r.x,a.x,o.x),is(t,s.y,r.y,a.y,o.y),is(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Xr=class extends Ke{constructor(t=new Tt,e=new Tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Tt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jr=class extends Ke{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qr=class extends Ke{constructor(t=new Tt,e=new Tt,n=new Tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Tt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ns(t,s.x,r.x,a.x),ns(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},li=class extends Ke{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ns(t,s.x,r.x,a.x),ns(t,s.y,r.y,a.y),ns(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jr=class extends Ke{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Tt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Mc(o,l.x,c.x,h.x,d.x),Mc(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Tt().fromArray(s))}return this}},id=Object.freeze({__proto__:null,ArcCurve:Hr,CatmullRomCurve3:Wr,CubicBezierCurve:Zr,CubicBezierCurve3:Yr,EllipseCurve:Ms,LineCurve:Xr,LineCurve3:Jr,QuadraticBezierCurve:qr,QuadraticBezierCurve3:li,SplineCurve:jr});var ci=class i extends Gr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var bs=class i extends Ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],_=[],S=[],p=[];for(let m=0;m<h;m++){let x=m*u-a;for(let E=0;E<c;E++){let y=E*d-r;_.push(y,-x,0),S.push(0,0,1),p.push(E/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<o;x++){let E=x+c*m,y=x+c*(m+1),A=x+1+c*(m+1),T=x+1+c*m;f.push(E,y,T),f.push(y,A,T)}this.setIndex(f),this.setAttribute("position",new ne(_,3)),this.setAttribute("normal",new ne(S,3)),this.setAttribute("uv",new ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Es=class i extends Ae{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=t,u=(e-t)/s,f=new P,_=new Tt;for(let S=0;S<=s;S++){for(let p=0;p<=n;p++){let m=r+p/n*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),_.x=(f.x/e+1)/2,_.y=(f.y/e+1)/2,h.push(_.x,_.y)}d+=u}for(let S=0;S<s;S++){let p=S*(n+1);for(let m=0;m<n;m++){let x=m+p,E=x,y=x+n+1,A=x+n+2,T=x+1;o.push(E,y,T),o.push(y,A,T)}}this.setIndex(o),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Fn=class i extends Ae{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new P,u=new P,f=[],_=[],S=[],p=[];for(let m=0;m<=n;m++){let x=[],E=m/n,y=a+E*o,A=t*Math.cos(y),T=Math.sqrt(t*t-A*A),g=0;m===0&&a===0?g=.5/e:m===n&&l===Math.PI&&(g=-.5/e);for(let M=0;M<=e;M++){let U=M/e,R=s+U*r;d.x=-T*Math.cos(R),d.y=A,d.z=T*Math.sin(R),_.push(d.x,d.y,d.z),u.copy(d).normalize(),S.push(u.x,u.y,u.z),p.push(U+g,1-E),x.push(c++)}h.push(x)}for(let m=0;m<n;m++)for(let x=0;x<e;x++){let E=h[m][x+1],y=h[m][x],A=h[m+1][x],T=h[m+1][x+1];(m!==0||a>0)&&f.push(E,y,T),(m!==n-1||l<Math.PI)&&f.push(y,A,T)}this.setIndex(f),this.setAttribute("position",new ne(_,3)),this.setAttribute("normal",new ne(S,3)),this.setAttribute("uv",new ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ts=class i extends Ae{constructor(t=new li(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,c=new Tt,h=new P,d=[],u=[],f=[],_=[];S(),this.setIndex(_),this.setAttribute("position",new ne(d,3)),this.setAttribute("normal",new ne(u,3)),this.setAttribute("uv",new ne(f,2));function S(){for(let E=0;E<e;E++)p(E);p(r===!1?e:0),x(),m()}function p(E){h=t.getPointAt(E/e,h);let y=a.normals[E],A=a.binormals[E];for(let T=0;T<=s;T++){let g=T/s*Math.PI*2,M=Math.sin(g),U=-Math.cos(g);l.x=U*y.x+M*A.x,l.y=U*y.y+M*A.y,l.z=U*y.z+M*A.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let E=1;E<=e;E++)for(let y=1;y<=s;y++){let A=(s+1)*(E-1)+(y-1),T=(s+1)*E+(y-1),g=(s+1)*E+y,M=(s+1)*(E-1)+y;_.push(A,T,M),_.push(T,g,M)}}function x(){for(let E=0;E<=e;E++)for(let y=0;y<=s;y++)c.x=E/e,c.y=y/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new id[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function mi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(bc(s))s.isRenderTargetTexture?(Ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(bc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Fe(i){let t={};for(let e=0;e<i.length;e++){let n=mi(i[e]);for(let s in n)t[s]=n[s]}return t}function bc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function sd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ml(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}var mh={clone:mi,merge:Fe},rd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ad=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yn=class extends _n{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rd,this.fragmentShader=ad,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mi(t.uniforms),this.uniformsGroups=sd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Pt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Tt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ue().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Bt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new qt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Qr=class extends yn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ln=class extends _n{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ks,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var hi=class extends _n{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ks,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=da,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Kr=class extends _n{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=th,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},$r=class extends _n{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function wi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function yr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Jn=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ta=class extends Jn{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ho,endingEnd:Ho}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Wo:r=t,o=2*e-n;break;case Zo:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Wo:a=t,l=2*n-e;break;case Zo:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,_=(n-e)/(s-e),S=_*_,p=S*_,m=-u*p+2*u*S-u*_,x=(1+u)*p+(-1.5-2*u)*S+(-.5+u)*_+1,E=(-1-f)*p+(1.5+f)*S+.5*_,y=f*p-f*S;for(let A=0;A!==o;++A)r[A]=m*a[h+A]+x*a[c+A]+E*a[l+A]+y*a[d+A];return r}},ea=class extends Jn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},na=class extends Jn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ia=class extends Jn{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let _=(n-e)/(s-e),S=1-_;for(let p=0;p!==o;++p)r[p]=a[c+p]*S+a[l+p]*_;return r}let u=o*2,f=t-1;for(let _=0;_!==o;++_){let S=a[c+_],p=a[l+_],m=f*u+_*2,x=d[m],E=d[m+1],y=t*u+_*2,A=h[y],T=h[y+1],g=ld(n,e,x,A,s);r[_]=gh(g,S,E,T,p)}return r}};function gh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function od(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function ld(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=gh(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=od(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Xe=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=wi(e,this.TimeBufferType),this.values=wi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:wi(t.times,Array),values:wi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),yr(t.settings)&&(n.settings={inTangents:wi(t.settings.inTangents,Array),outTangents:wi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new na(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ea(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ta(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ia(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ss:e=this.InterpolantFactoryMethodDiscrete;break;case Pr:e=this.InterpolantFactoryMethodLinear;break;case Mr:e=this.InterpolantFactoryMethodSmooth;break;case Go:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ct("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ss;case this.InterpolantFactoryMethodLinear:return Pr;case this.InterpolantFactoryMethodSmooth:return Mr;case this.InterpolantFactoryMethodBezier:return Go}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;yr(this.settings)&&(Ec(this.settings.inTangents,t),Ec(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;yr(this.settings)&&(Tc(this.settings.inTangents,t),Tc(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Lt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Lt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Lt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Lt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&wu(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Lt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Mr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let _=0;_!==n;++_){let S=e[d+_];if(S!==e[u+_]||S!==e[f+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,yr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ec(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Tc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Xe.prototype.ValueTypeName="";Xe.prototype.TimeBufferType=Float32Array;Xe.prototype.ValueBufferType=Float32Array;Xe.prototype.DefaultInterpolation=Pr;var qn=class extends Xe{constructor(t,e,n){super(t,e,n)}};qn.prototype.ValueTypeName="bool";qn.prototype.ValueBufferType=Array;qn.prototype.DefaultInterpolation=ss;qn.prototype.InterpolantFactoryMethodLinear=void 0;qn.prototype.InterpolantFactoryMethodSmooth=void 0;var sa=class extends Xe{constructor(t,e,n,s){super(t,e,n,s)}};sa.prototype.ValueTypeName="color";var ra=class extends Xe{constructor(t,e,n,s){super(t,e,n,s)}};ra.prototype.ValueTypeName="number";var aa=class extends Jn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)je.slerpFlat(r,0,a,c-o,a,c,l);return r}},As=class extends Xe{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new aa(this.times,this.values,this.getValueSize(),t)}};As.prototype.ValueTypeName="quaternion";As.prototype.InterpolantFactoryMethodSmooth=void 0;var jn=class extends Xe{constructor(t,e,n){super(t,e,n)}};jn.prototype.ValueTypeName="string";jn.prototype.ValueBufferType=Array;jn.prototype.DefaultInterpolation=ss;jn.prototype.InterpolantFactoryMethodLinear=void 0;jn.prototype.InterpolantFactoryMethodSmooth=void 0;var oa=class extends Xe{constructor(t,e,n,s){super(t,e,n,s)}};oa.prototype.ValueTypeName="vector";var la=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],_=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},xh=new la,ca=class{constructor(t){this.manager=t!==void 0?t:xh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};ca.DEFAULT_MATERIAL_NAME="__DEFAULT";var ws=class extends Ne{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var zo=new qt,Ac=new P,wc=new P,ha=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.mapType=He,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xn,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Ac.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ac),wc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){zo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(zo,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ni||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(zo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Sr=new P,vr=new je,fn=new P,Rs=class extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=qe,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Sr,vr,fn),fn.x===1&&fn.y===1&&fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sr,vr,fn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Sr,vr,fn),fn.x===1&&fn.y===1&&fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sr,vr,fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Wn=new P,Rc=new Tt,Ic=new Tt,Be=class extends Rs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Fr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(go*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fr*2*Math.atan(Math.tan(go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z)}getViewSize(t,e){return this.getViewBounds(t,Rc,Ic),e.subVectors(Ic,Rc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(go*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Is=class extends Rs{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Yo=class extends ha{constructor(){super(new Is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Cs=class extends ws{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new Yo}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Us=class extends ws{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ri=-90,Ii=1,Oi=class extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Be(Ri,Ii,t,e);s.layers=this.layers,this.add(s);let r=new Be(Ri,Ii,t,e);r.layers=this.layers,this.add(r);let a=new Be(Ri,Ii,t,e);a.layers=this.layers,this.add(a);let o=new Be(Ri,Ii,t,e);o.layers=this.layers,this.add(o);let l=new Be(Ri,Ii,t,e);l.layers=this.layers,this.add(l);let c=new Be(Ri,Ii,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===qe)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ni)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=S,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},ua=class extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var bl="\\[\\]\\.:\\/",cd=new RegExp("["+bl+"]","g"),El="[^"+bl+"]",hd="[^"+bl.replace("\\.","")+"]",ud=/((?:WC+[\/:])*)/.source.replace("WC",El),dd=/(WCOD+)?/.source.replace("WCOD",hd),fd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",El),pd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",El),md=new RegExp("^"+ud+dd+fd+pd+"$"),gd=["material","materials","bones","map"],Xo=class{constructor(t,e,n){let s=n||ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(cd,"")}static parseTrackName(t){let e=md.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);gd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ct("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Lt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Lt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Lt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Lt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Lt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Lt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ce.Composite=Xo;ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ce.prototype.GetterByBindingType=[ce.prototype._getValue_direct,ce.prototype._getValue_array,ce.prototype._getValue_arrayElement,ce.prototype._getValue_toArray];ce.prototype.SetterByBindingTypeAndVersioning=[[ce.prototype._setValue_direct,ce.prototype._setValue_direct_setNeedsUpdate,ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_array,ce.prototype._setValue_array_setNeedsUpdate,ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_arrayElement,ce.prototype._setValue_arrayElement_setNeedsUpdate,ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_fromArray,ce.prototype._setValue_fromArray_setNeedsUpdate,ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var g0=new Float32Array(1);var Jo=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function Tl(i,t,e,n){let s=xd(n);switch(e){case fl:return i*t;case ya:return i*t/s.components*s.byteLength;case Sa:return i*t/s.components*s.byteLength;case Kn:return i*t*2/s.components*s.byteLength;case va:return i*t*2/s.components*s.byteLength;case pl:return i*t*3/s.components*s.byteLength;case un:return i*t*4/s.components*s.byteLength;case Ma:return i*t*4/s.components*s.byteLength;case Fs:case Ds:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ls:case Bs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ea:case Aa:return Math.max(i,16)*Math.max(t,8)/4;case ba:case Ta:return Math.max(i,8)*Math.max(t,8)/2;case wa:case Ra:case Ca:case Ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ia:case Os:case Na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Da:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Va:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ka:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Za:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ya:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Xa:case Ja:case qa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ja:case Qa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Vs:case Ka:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xd(i){switch(i){case He:case cl:return{byteLength:1,components:1};case Gi:case hl:case hn:return{byteLength:2,components:1};case xa:case _a:return{byteLength:2,components:4};case cn:case ga:case tn:return{byteLength:4,components:1};case ul:case dl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Vh(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function yd(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,_)=>f.start-_.start);let u=0;for(let f=1;f<d.length;f++){let _=d[u],S=d[f];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++u,d[u]=S)}d.length=u+1;for(let f=0,_=d.length;f<_;f++){let S=d[f];i.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Sd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vd=`#ifdef USE_ALPHAHASH
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
#endif`,Md=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ed=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Td=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ad=`#ifdef USE_AOMAP
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
#endif`,wd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rd=`#ifdef USE_BATCHING
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
#endif`,Id=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ud=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pd=`#ifdef USE_IRIDESCENCE
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
#endif`,Fd=`#ifdef USE_BUMPMAP
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
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Gd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Hd=`#define PI 3.141592653589793
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
} // validated`,Wd=`vec3 transformedNormal = objectNormal;
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
#endif`,Zd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qd="gl_FragColor = linearToOutputTexel( gl_FragColor );",jd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qd=`#ifdef USE_ENVMAP
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
#endif`,Kd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,$d=`#ifdef USE_ENVMAP
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
#endif`,tf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ef=`#ifdef USE_ENVMAP
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
#endif`,nf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,af=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,of=`#ifdef USE_GRADIENTMAP
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
}`,lf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,df=`#ifdef USE_ENVMAP
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
#endif`,ff=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xf=`PhysicalMaterial material;
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
#endif`,_f=`uniform sampler2D dfgLUT;
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
}`,yf=`
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
#endif`,Sf=`#if defined( RE_IndirectDiffuse )
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
#endif`,vf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mf=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,bf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ef=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Af=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,If=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cf=`#if defined( USE_POINTS_UV )
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
#endif`,Uf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ff=`#if defined( USE_MORPHCOLORS )
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
#endif`,Df=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lf=`#ifdef USE_MORPHTARGETS
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
#endif`,Bf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Of=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Hf=`#ifdef USE_NORMALMAP
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
#endif`,Wf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$f=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ep=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,np=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ip=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rp=`float getShadowMask() {
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
}`,ap=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,op=`#ifdef USE_SKINNING
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
#endif`,lp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cp=`#ifdef USE_SKINNING
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
#endif`,hp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,up=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pp=`#ifdef USE_TRANSMISSION
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
#endif`,mp=`#ifdef USE_TRANSMISSION
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
#endif`,gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vp=`uniform sampler2D t2D;
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
}`,Mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bp=`uniform float backgroundBlurriness;
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
}`,Ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ap=`#include <common>
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
}`,wp=`#if DEPTH_PACKING == 3200
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
}`,Rp=`#define DISTANCE
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
}`,Ip=`#define DISTANCE
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
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Up=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`uniform float scale;
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
}`,Pp=`uniform vec3 diffuse;
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
}`,Fp=`#include <common>
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
}`,Dp=`uniform vec3 diffuse;
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
}`,Lp=`#define LAMBERT
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
}`,Bp=`#define LAMBERT
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
}`,Op=`#define MATCAP
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
}`,Vp=`#define MATCAP
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
}`,kp=`#define NORMAL
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
}`,zp=`#define NORMAL
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
}`,Gp=`#define PHONG
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
}`,Hp=`#define PHONG
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
}`,Wp=`#define STANDARD
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
}`,Zp=`#define STANDARD
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
}`,Yp=`#define TOON
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
}`,Xp=`#define TOON
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
}`,Jp=`uniform float size;
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
}`,qp=`uniform vec3 diffuse;
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
}`,jp=`#include <common>
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
}`,Qp=`uniform vec3 color;
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
}`,Kp=`uniform float rotation;
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
}`,$p=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:Sd,alphahash_pars_fragment:vd,alphamap_fragment:Md,alphamap_pars_fragment:bd,alphatest_fragment:Ed,alphatest_pars_fragment:Td,aomap_fragment:Ad,aomap_pars_fragment:wd,batching_pars_vertex:Rd,batching_vertex:Id,begin_vertex:Cd,beginnormal_vertex:Ud,bsdfs:Nd,iridescence_fragment:Pd,bumpmap_pars_fragment:Fd,clipping_planes_fragment:Dd,clipping_planes_pars_fragment:Ld,clipping_planes_pars_vertex:Bd,clipping_planes_vertex:Od,color_fragment:Vd,color_pars_fragment:kd,color_pars_vertex:zd,color_vertex:Gd,common:Hd,defaultnormal_vertex:Wd,displacementmap_pars_vertex:Zd,displacementmap_vertex:Yd,emissivemap_fragment:Xd,emissivemap_pars_fragment:Jd,colorspace_fragment:qd,colorspace_pars_fragment:jd,envmap_fragment:Qd,envmap_common_pars_fragment:Kd,envmap_pars_fragment:$d,envmap_pars_vertex:tf,envmap_physical_pars_fragment:df,envmap_vertex:ef,fog_vertex:nf,fog_pars_vertex:sf,fog_fragment:rf,fog_pars_fragment:af,gradientmap_pars_fragment:of,lightmap_pars_fragment:lf,lights_lambert_fragment:cf,lights_lambert_pars_fragment:hf,lights_pars_begin:uf,lights_toon_fragment:ff,lights_toon_pars_fragment:pf,lights_phong_fragment:mf,lights_phong_pars_fragment:gf,lights_physical_fragment:xf,lights_physical_pars_fragment:_f,lights_fragment_begin:yf,lights_fragment_maps:Sf,lights_fragment_end:vf,lightprobes_pars_fragment:Mf,logdepthbuf_fragment:bf,logdepthbuf_pars_fragment:Ef,logdepthbuf_pars_vertex:Tf,logdepthbuf_vertex:Af,map_fragment:wf,map_pars_fragment:Rf,map_particle_fragment:If,map_particle_pars_fragment:Cf,metalnessmap_fragment:Uf,metalnessmap_pars_fragment:Nf,morphinstance_vertex:Pf,morphcolor_vertex:Ff,morphnormal_vertex:Df,morphtarget_pars_vertex:Lf,morphtarget_vertex:Bf,normal_fragment_begin:Of,normal_fragment_maps:Vf,normal_pars_fragment:kf,normal_pars_vertex:zf,normal_vertex:Gf,normalmap_pars_fragment:Hf,clearcoat_normal_fragment_begin:Wf,clearcoat_normal_fragment_maps:Zf,clearcoat_pars_fragment:Yf,iridescence_pars_fragment:Xf,opaque_fragment:Jf,packing:qf,premultiplied_alpha_fragment:jf,project_vertex:Qf,dithering_fragment:Kf,dithering_pars_fragment:$f,roughnessmap_fragment:tp,roughnessmap_pars_fragment:ep,shadowmap_pars_fragment:np,shadowmap_pars_vertex:ip,shadowmap_vertex:sp,shadowmask_pars_fragment:rp,skinbase_vertex:ap,skinning_pars_vertex:op,skinning_vertex:lp,skinnormal_vertex:cp,specularmap_fragment:hp,specularmap_pars_fragment:up,tonemapping_fragment:dp,tonemapping_pars_fragment:fp,transmission_fragment:pp,transmission_pars_fragment:mp,uv_pars_fragment:gp,uv_pars_vertex:xp,uv_vertex:_p,worldpos_vertex:yp,background_vert:Sp,background_frag:vp,backgroundCube_vert:Mp,backgroundCube_frag:bp,cube_vert:Ep,cube_frag:Tp,depth_vert:Ap,depth_frag:wp,distance_vert:Rp,distance_frag:Ip,equirect_vert:Cp,equirect_frag:Up,linedashed_vert:Np,linedashed_frag:Pp,meshbasic_vert:Fp,meshbasic_frag:Dp,meshlambert_vert:Lp,meshlambert_frag:Bp,meshmatcap_vert:Op,meshmatcap_frag:Vp,meshnormal_vert:kp,meshnormal_frag:zp,meshphong_vert:Gp,meshphong_frag:Hp,meshphysical_vert:Wp,meshphysical_frag:Zp,meshtoon_vert:Yp,meshtoon_frag:Xp,points_vert:Jp,points_frag:qp,shadow_vert:jp,shadow_frag:Qp,sprite_vert:Kp,sprite_frag:$p},_t={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},Mn={basic:{uniforms:Fe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Fe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Pt(0)},envMapIntensity:{value:1}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Fe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Fe([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Fe([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Fe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Fe([_t.points,_t.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Fe([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Fe([_t.common,_t.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Fe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Fe([_t.sprite,_t.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distance:{uniforms:Fe([_t.common,_t.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distance_vert,fragmentShader:Wt.distance_frag},shadow:{uniforms:Fe([_t.lights,_t.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Mn.physical={uniforms:Fe([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Bt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};var $a={r:0,b:0,g:0},tm=new qt,kh=new Bt;kh.set(-1,0,0,0,1,0,0,0,1);function em(i,t,e,n,s,r){let a=new Pt(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(x){let E=x.isScene===!0?x.background:null;if(E&&E.isTexture){let y=x.backgroundBlurriness>0;E=t.get(E,y)}return E}function _(x){let E=!1,y=f(x);y===null?p(a,o):y&&y.isColor&&(p(y,1),E=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(x,E){let y=f(E);y&&y.isCubeTexture?(c===void 0&&(c=new Pe(new Bi(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:mi(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(tm.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(kh),c.material.toneMapped=Jt.getTransfer(y.colorSpace)!==ie,(h!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Pe(new bs(2,2),new yn({name:"BackgroundMaterial",uniforms:mi(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(y.colorSpace)!==ie,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,E){x.getRGB($a,Ml(i)),e.buffers.color.setClear($a.r,$a.g,$a.b,E,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,E=1){a.set(x),o=E,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,p(a,o)},render:_,addToRenderList:S,dispose:m}}function nm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(F,L,G,C,z){let Z=!1,H=d(F,C,G,L);r!==H&&(r=H,c(r.object)),Z=f(F,C,G,z),Z&&_(F,C,G,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,y(F,L,G,C),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function c(F){return i.bindVertexArray(F)}function h(F){return i.deleteVertexArray(F)}function d(F,L,G,C){let z=C.wireframe===!0,Z=n[L.id];Z===void 0&&(Z={},n[L.id]=Z);let H=F.isInstancedMesh===!0?F.id:0,nt=Z[H];nt===void 0&&(nt={},Z[H]=nt);let Y=nt[G.id];Y===void 0&&(Y={},nt[G.id]=Y);let K=Y[z];return K===void 0&&(K=u(l()),Y[z]=K),K}function u(F){let L=[],G=[],C=[];for(let z=0;z<e;z++)L[z]=0,G[z]=0,C[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:C,object:F,attributes:{},index:null}}function f(F,L,G,C){let z=r.attributes,Z=L.attributes,H=0,nt=G.getAttributes();for(let Y in nt)if(nt[Y].location>=0){let et=z[Y],q=Z[Y];if(q===void 0&&(Y==="instanceMatrix"&&F.instanceMatrix&&(q=F.instanceMatrix),Y==="instanceColor"&&F.instanceColor&&(q=F.instanceColor)),et===void 0||et.attribute!==q||q&&et.data!==q.data)return!0;H++}return r.attributesNum!==H||r.index!==C}function _(F,L,G,C){let z={},Z=L.attributes,H=0,nt=G.getAttributes();for(let Y in nt)if(nt[Y].location>=0){let et=Z[Y];et===void 0&&(Y==="instanceMatrix"&&F.instanceMatrix&&(et=F.instanceMatrix),Y==="instanceColor"&&F.instanceColor&&(et=F.instanceColor));let q={};q.attribute=et,et&&et.data&&(q.data=et.data),z[Y]=q,H++}r.attributes=z,r.attributesNum=H,r.index=C}function S(){let F=r.newAttributes;for(let L=0,G=F.length;L<G;L++)F[L]=0}function p(F){m(F,0)}function m(F,L){let G=r.newAttributes,C=r.enabledAttributes,z=r.attributeDivisors;G[F]=1,C[F]===0&&(i.enableVertexAttribArray(F),C[F]=1),z[F]!==L&&(i.vertexAttribDivisor(F,L),z[F]=L)}function x(){let F=r.newAttributes,L=r.enabledAttributes;for(let G=0,C=L.length;G<C;G++)L[G]!==F[G]&&(i.disableVertexAttribArray(G),L[G]=0)}function E(F,L,G,C,z,Z,H){H===!0?i.vertexAttribIPointer(F,L,G,z,Z):i.vertexAttribPointer(F,L,G,C,z,Z)}function y(F,L,G,C){S();let z=C.attributes,Z=G.getAttributes(),H=L.defaultAttributeValues;for(let nt in Z){let Y=Z[nt];if(Y.location>=0){let K=z[nt];if(K===void 0&&(nt==="instanceMatrix"&&F.instanceMatrix&&(K=F.instanceMatrix),nt==="instanceColor"&&F.instanceColor&&(K=F.instanceColor)),K!==void 0){let et=K.normalized,q=K.itemSize,mt=t.get(K);if(mt===void 0)continue;let k=mt.buffer,st=mt.type,St=mt.bytesPerElement,At=st===i.INT||st===i.UNSIGNED_INT||K.gpuType===ga;if(K.isInterleavedBufferAttribute){let ut=K.data,Ft=ut.isInterleavedBuffer===!0?ut.stride:ut.itemSize,Gt=K.offset;if(ut.isInstancedInterleavedBuffer||ut.isInstancedBufferAttribute){for(let Rt=0;Rt<Y.locationSize;Rt++)m(Y.location+Rt,ut.meshPerAttribute);F.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Rt=0;Rt<Y.locationSize;Rt++)p(Y.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,k);for(let Rt=0;Rt<Y.locationSize;Rt++)E(Y.location+Rt,q/Y.locationSize,st,et,Ft*St,(Gt+q/Y.locationSize*Rt)*St,At)}else{if(K.isInstancedBufferAttribute){for(let ut=0;ut<Y.locationSize;ut++)m(Y.location+ut,K.meshPerAttribute);F.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ut=0;ut<Y.locationSize;ut++)p(Y.location+ut);i.bindBuffer(i.ARRAY_BUFFER,k);for(let ut=0;ut<Y.locationSize;ut++)E(Y.location+ut,q/Y.locationSize,st,et,q*St,q/Y.locationSize*ut*St,At)}}else if(H!==void 0){let et=H[nt];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(Y.location,et);break;case 3:i.vertexAttrib3fv(Y.location,et);break;case 4:i.vertexAttrib4fv(Y.location,et);break;default:i.vertexAttrib1fv(Y.location,et)}}}}x()}function A(){U();for(let F in n){let L=n[F];for(let G in L){let C=L[G];for(let z in C){let Z=C[z];for(let H in Z)h(Z[H].object),delete Z[H];delete C[z]}}delete n[F]}}function T(F){if(n[F.id]===void 0)return;let L=n[F.id];for(let G in L){let C=L[G];for(let z in C){let Z=C[z];for(let H in Z)h(Z[H].object),delete Z[H];delete C[z]}}delete n[F.id]}function g(F){for(let L in n){let G=n[L];for(let C in G){let z=G[C];if(z[F.id]===void 0)continue;let Z=z[F.id];for(let H in Z)h(Z[H].object),delete Z[H];delete z[F.id]}}}function M(F){for(let L in n){let G=n[L],C=F.isInstancedMesh===!0?F.id:0,z=G[C];if(z!==void 0){for(let Z in z){let H=z[Z];for(let nt in H)h(H[nt].object),delete H[nt];delete z[Z]}delete G[C],Object.keys(G).length===0&&delete n[L]}}}function U(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:g,initAttributes:S,enableAttribute:p,disableUnusedAttributes:x}}function im(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function sm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==un&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let M=g===hn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==He&&g!==tn&&!M&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ct("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Ct("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:y,maxSamples:A,samples:T}}function rm(i){let t=this,e=null,n=0,s=!1,r=!1,a=new an,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let _=d.clippingPlanes,S=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||_===null||_.length===0||r&&!p)r?h(null):c();else{let x=r?0:n,E=x*4,y=m.clippingState||null;l.value=y,y=h(_,u,E,f);for(let A=0;A!==E;++A)y[A]=e[A];m.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,_){let S=d!==null?d.length:0,p=null;if(S!==0){if(p=l.value,_!==!0||p===null){let m=f+S*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,y=f;E!==S;++E,y+=4)a.copy(d[E]).applyMatrix4(x,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,p}}var Ws=class extends Ye{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new _s(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bi(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:ui});r.uniforms.tEquirect.value=e;let a=new Pe(s,r),o=e.minFilter;return e.minFilter===Dn&&(e.minFilter=Oe),new Oi(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},_h=256,am=3,om=20,zh=256,Gh=16,lm=3,cm=new P,hm=new Pt,eo=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Oi(1,10,null),this._boxMesh=new Pe(new Bi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=cm}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,_=l.autoClearStencil,S=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,S===null&&(t.background=l.getClearColor(hm));let p=new Oi(n,s,h);return p.position.copy(o),p.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=_,t.background=S,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(_h,fh(t))}_fromTexture(t,e){t.mapping===fi||t.mapping===zi?this._setSize(t.image.length===0?_h:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=yh(t,!1,!1),n=Math.log2(t)-am;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=yh(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===fi||t.mapping===zi?(this._cubemapMaterial===null&&(this._cubemapMaterial=vh()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Sh()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=um(),this._integrationMaterial=dm());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Gh);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-lm)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(zh*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=fm());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function yh(i,t,e){return new Ws(i,{minFilter:Dn,generateMipmaps:t,type:hn,colorSpace:rs,depthBuffer:e})}function Zs(i,t,e){return new yn({name:i,uniforms:t,vertexShader:Wt.cube_vert,fragmentShader:e,side:Ve,blending:ui,depthTest:!1,depthWrite:!1})}function um(){return Zs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${zh}u

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
	`)}function dm(){return Zs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Gh}},`

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
	`)}function fm(){return Zs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${om}
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
	`)}function Sh(){return Zs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function vh(){return Zs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function pm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===fa||f===pa)if(t.has(u)){let _=t.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let S=new Ws(_.height);return S.fromEquirectangularTexture(i,u),t.set(u,S),u.addEventListener("dispose",c),o(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,_=f===fa||f===pa,S=f===fi||f===zi;if(_||S){let p=e.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new eo(i)),p=_?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let x=u.image;return _&&x&&x.height>0||S&&x&&l(x)?(n===null&&(n=new eo(i)),p=_?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,f){return f===fa?u.mapping=fi:f===pa&&(u.mapping=zi),u}function l(u){let f=0,_=6;for(let S=0;S<_;S++)u[S]!==void 0&&f++;return f===_}function c(u){let f=u.target;f.removeEventListener("dispose",c);let _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function mm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&es("WebGLRenderer: "+n+" extension not supported."),s}}}function gm(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){l(_.target)}function l(_){_.index!==null&&t.remove(_.index);for(let p in _.attributes)t.remove(_.attributes[p]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);let S=r.get(_);S&&(t.remove(S),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function c(_,S){return s[S.id]!==void 0||(S.addEventListener("dispose",o),s[S.id]=new WeakRef(S),a.register(S,S.id,S),e.memory.geometries++),S}function h(_){let S=_.attributes;for(let p in S)t.update(S[p],i.ARRAY_BUFFER)}function d(_){let S=_.index,p=_.attributes.position,m=0;if(p===void 0)return;let x=S!==null?S.array.length:p.array.length/3-1,E=p.count>=65535?fs:ds,y=new E(Math.ceil(x/3)*6,1),A=y.array;if(S!==null){let g=S.array;m=S.version;for(let M=0,U=0;M<x;M+=3){let R=g[M+0],F=g[M+1],L=g[M+2];A[U++]=R,A[U++]=F,A[U++]=F,A[U++]=L,A[U++]=L,A[U++]=R}}else{m=p.version;for(let g=0,M=0;g<x;g+=3){let U=g+0,R=g+1,F=g+2;A[M++]=U,A[M++]=R,A[M++]=R,A[M++]=F,A[M++]=F,A[M++]=U}}y.version=m;let T=r.get(_);T&&t.remove(T),r.set(_,y)}function u(_){let S=r.get(_);if(S){let p=_.index;p!==null&&S.version<p.version&&d(_)}else d(_);return r.get(_)}function f(){for(let _ in s){let S=s[_].deref();S!==void 0&&l(S)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function xm(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let S=0;for(let p=0;p<f;p++)S+=u[p];e.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function _m(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Lt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ym(i,t,e){let n=new WeakMap,s=new ue;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let U=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",U)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],E=0;f===!0&&(E=1),_===!0&&(E=2),S===!0&&(E=3);let y=o.attributes.position.count*E,A=1;y>t.maxTextureSize&&(A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*A*4*d),g=new ls(T,y,A,d);g.type=tn,g.needsUpdate=!0;let M=E*4;for(let R=0;R<d;R++){let F=p[R],L=m[R],G=x[R],C=y*A*4*R;for(let z=0;z<F.count;z++){let Z=z*M;f===!0&&(s.fromBufferAttribute(F,z),T[C+Z+0]=s.x,T[C+Z+1]=s.y,T[C+Z+2]=s.z,T[C+Z+3]=0),_===!0&&(s.fromBufferAttribute(L,z),T[C+Z+4]=s.x,T[C+Z+5]=s.y,T[C+Z+6]=s.z,T[C+Z+7]=0),S===!0&&(s.fromBufferAttribute(G,z),T[C+Z+8]=s.x,T[C+Z+9]=s.y,T[C+Z+10]=s.z,T[C+Z+11]=G.itemSize===4?s.w:1)}}u={count:d,texture:g,size:new Tt(y,A)},n.set(o,u),o.addEventListener("dispose",U)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let S=0;S<c.length;S++)f+=c[S];let _=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Sm(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var vm={[el]:"LINEAR_TONE_MAPPING",[nl]:"REINHARD_TONE_MAPPING",[il]:"CINEON_TONE_MAPPING",[sl]:"ACES_FILMIC_TONE_MAPPING",[al]:"AGX_TONE_MAPPING",[ol]:"NEUTRAL_TONE_MAPPING",[rl]:"CUSTOM_TONE_MAPPING"};function Mm(i,t,e,n,s,r){let a=new Ye(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Ae;h.setAttribute("position",new ne([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ne([0,2,0,0,2,0],2));let d=new Qr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Pe(h,d),f=new Is(-1,1,1,-1,0,1),_=null,S=null,p=!1,m,x=null,E=[],y=!1;this.setSize=function(A,T){a.setSize(A,T),o!==null&&o.setSize(A,T),l!==null&&l.setSize(A,T);for(let g=0;g<E.length;g++){let M=E[g];M.setSize&&M.setSize(A,T)}},this.setEffects=function(A){E=A,y=E.length>0&&E[0].isRenderPass===!0;let T=a.width,g=a.height;E.length>0&&o===null&&(o=new Ye(T,g,{type:hn,depthBuffer:!1,stencilBuffer:!1}),l=new Ye(T,g,{type:hn,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&E.some(U=>U.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new Pn(T,g),r===!0&&(c.format=Ln,c.type=pi)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let U=0;U<E.length;U++){let R=E[U];R.setSize&&R.setSize(T,g),M&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(A,T){if(p||A.toneMapping===Sn&&E.length===0)return!1;if(x=T,T!==null){let g=T.width,M=T.height;(a.width!==g||a.height!==M)&&this.setSize(g,M)}return y===!1&&A.setRenderTarget(a),m=A.toneMapping,A.toneMapping=Sn,!0},this.hasRenderPass=function(){return y},this.end=function(A,T){A.toneMapping=m,p=!0;let g=a,M=o;for(let U=0;U<E.length;U++){let R=E[U];R.enabled!==!1&&(R.render(A,M,g,T),R.needsSwap!==!1&&(g=M,M=M===o?l:o))}if(_!==A.outputColorSpace||S!==A.toneMapping){_=A.outputColorSpace,S=A.toneMapping,d.defines={},Jt.getTransfer(_)===ie&&(d.defines.SRGB_TRANSFER="");let U=vm[S];U&&(d.defines[U]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=g.texture,A.setRenderTarget(x),A.render(u,f),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var Hh=new Ge,Wh=new Pn(1,1),Zh=new ys(1),Yh=new ls,Xh=new Br,Jh=new _s,Mh=[],bh=[],Eh=new Float32Array(16),Th=new Float32Array(9),Ah=new Float32Array(4);function Wi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Mh[s];if(r===void 0&&(r=new Float32Array(s),Mh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function _e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function io(i,t){let e=bh[t];e===void 0&&(e=new Int32Array(t),bh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function bm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Em(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2fv(this.addr,t),_e(e,t)}}function Tm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;i.uniform3fv(this.addr,t),_e(e,t)}}function Am(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4fv(this.addr,t),_e(e,t)}}function wm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(xe(e,n))return;Ah.set(n),i.uniformMatrix2fv(this.addr,!1,Ah),_e(e,n)}}function Rm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(xe(e,n))return;Th.set(n),i.uniformMatrix3fv(this.addr,!1,Th),_e(e,n)}}function Im(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(xe(e,n))return;Eh.set(n),i.uniformMatrix4fv(this.addr,!1,Eh),_e(e,n)}}function Cm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Um(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2iv(this.addr,t),_e(e,t)}}function Nm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3iv(this.addr,t),_e(e,t)}}function Pm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4iv(this.addr,t),_e(e,t)}}function Fm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2uiv(this.addr,t),_e(e,t)}}function Lm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3uiv(this.addr,t),_e(e,t)}}function Bm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4uiv(this.addr,t),_e(e,t)}}function so(i){return i.version===0&&(i.compareFunction=xl,i.needsUpdate=!0),i}function Om(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=so(Wh):r=Hh,e.setTexture2D(t||r,s)}function Vm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Xh,s)}function km(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=so(Zh):r=Jh,e.setTextureCube(t||r,s)}function zm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Yh,s)}function Gm(i){switch(i){case 5126:return bm;case 35664:return Em;case 35665:return Tm;case 35666:return Am;case 35674:return wm;case 35675:return Rm;case 35676:return Im;case 5124:case 35670:return Cm;case 35667:case 35671:return Um;case 35668:case 35672:return Nm;case 35669:case 35673:return Pm;case 5125:return Fm;case 36294:return Dm;case 36295:return Lm;case 36296:return Bm;case 35678:case 36198:case 36298:case 36306:case 35682:return Om;case 35679:case 36299:case 36307:return Vm;case 35680:case 36300:case 36308:case 36293:return km;case 36289:case 36303:case 36311:case 36292:return zm}}function Hm(i,t){i.uniform1fv(this.addr,t)}function Wm(i,t){let e=Wi(t,this.size,2);i.uniform2fv(this.addr,e)}function Zm(i,t){let e=Wi(t,this.size,3);i.uniform3fv(this.addr,e)}function Ym(i,t){let e=Wi(t,this.size,4);i.uniform4fv(this.addr,e)}function Xm(i,t){let e=Wi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Jm(i,t){let e=Wi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function qm(i,t){let e=Wi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function jm(i,t){i.uniform1iv(this.addr,t)}function Qm(i,t){i.uniform2iv(this.addr,t)}function Km(i,t){i.uniform3iv(this.addr,t)}function $m(i,t){i.uniform4iv(this.addr,t)}function tg(i,t){i.uniform1uiv(this.addr,t)}function eg(i,t){i.uniform2uiv(this.addr,t)}function ng(i,t){i.uniform3uiv(this.addr,t)}function ig(i,t){i.uniform4uiv(this.addr,t)}function sg(i,t,e){let n=this.cache,s=t.length,r=io(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=so(Wh):a=Hh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function rg(i,t,e){let n=this.cache,s=t.length,r=io(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Xh,r[a])}function ag(i,t,e){let n=this.cache,s=t.length,r=io(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=so(Zh):a=Jh;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function og(i,t,e){let n=this.cache,s=t.length,r=io(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Yh,r[a])}function lg(i){switch(i){case 5126:return Hm;case 35664:return Wm;case 35665:return Zm;case 35666:return Ym;case 35674:return Xm;case 35675:return Jm;case 35676:return qm;case 5124:case 35670:return jm;case 35667:case 35671:return Qm;case 35668:case 35672:return Km;case 35669:case 35673:return $m;case 5125:return tg;case 36294:return eg;case 36295:return ng;case 36296:return ig;case 35678:case 36198:case 36298:case 36306:case 35682:return sg;case 35679:case 36299:case 36307:return rg;case 35680:case 36300:case 36308:case 36293:return ag;case 36289:case 36303:case 36311:case 36292:return og}}var Rl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Gm(e.type)}},Il=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lg(e.type)}},Cl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Al=/(\w+)(\])?(\[|\.)?/g;function wh(i,t){i.seq.push(t),i.map[t.id]=t}function cg(i,t,e){let n=i.name,s=n.length;for(Al.lastIndex=0;;){let r=Al.exec(n),a=Al.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){wh(e,c===void 0?new Rl(o,i,t):new Il(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Cl(o),wh(e,d)),e=d}}}var Hi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);cg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Rh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var hg=37297,ug=0;function dg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Ih=new Bt;function fg(i){Jt._getMatrix(Ih,Jt.workingColorSpace,i);let t=`mat3( ${Ih.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(i)){case as:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return Ct("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ch(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+dg(i.getShaderSource(t),o)}else return r}function pg(i,t){let e=fg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var mg={[el]:"Linear",[nl]:"Reinhard",[il]:"Cineon",[sl]:"ACESFilmic",[al]:"AgX",[ol]:"Neutral",[rl]:"Custom"};function gg(i,t){let e=mg[t];return e===void 0?(Ct("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var to=new P;function xg(){Jt.getLuminanceCoefficients(to);let i=to.x.toFixed(4),t=to.y.toFixed(4),e=to.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _g(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)}function yg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Sg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Hs(i){return i!==""}function Uh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Nh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var vg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ul(i){return i.replace(vg,Mg)}function Mg(i,t){let e=Wt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Ul(e)}var bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ph(i){return i.replace(bg,Eg)}function Eg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Tg={[Ns]:"SHADOWMAP_TYPE_PCF",[Vi]:"SHADOWMAP_TYPE_VSM"};function Ag(i){return Tg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var wg={[zi]:"ENVMAP_MODE_REFRACTION"};function Rg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":wg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ig={[da]:"ENVMAP_BLENDING_MULTIPLY",[Qc]:"ENVMAP_BLENDING_MIX",[Kc]:"ENVMAP_BLENDING_ADD"};function Cg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ig[i.combine]||"ENVMAP_BLENDING_NONE"}function Ug(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Ag(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Rg(e),d=Cg(e),u=_g(e),f=yg(r),_=s.createProgram(),S,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Hs).join(`
`),S.length>0&&(S+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Hs).join(`
`),p.length>0&&(p+=`
`)):(S=[Fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),p=[Fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Sn?"#define TONE_MAPPING":"",e.toneMapping!==Sn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Sn?gg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,pg("linearToOutputTexel",e.outputColorSpace),xg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hs).join(`
`)),a=Ul(a),a=Uh(a,e),a=Nh(a,e),o=Ul(o),o=Uh(o,e),o=Nh(o,e),a=Ph(a),o=Ph(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,S=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,p=["#define varying in",e.glslVersion===_l?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=m+S+a,E=m+p+o,y=Rh(s,s.VERTEX_SHADER,x),A=Rh(s,s.FRAGMENT_SHADER,E);s.attachShader(_,y),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(R){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(_)||"",L=s.getShaderInfoLog(y)||"",G=s.getShaderInfoLog(A)||"",C=F.trim(),z=L.trim(),Z=G.trim(),H=!0,nt=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,y,A);else{let Y=Ch(s,y,"vertex"),K=Ch(s,A,"fragment");Lt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+C+`
`+Y+`
`+K)}else C!==""?Ct("WebGLProgram: Program Info Log:",C):(z===""||Z==="")&&(nt=!1);nt&&(R.diagnostics={runnable:H,programLog:C,vertexShader:{log:z,prefix:S},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(y),s.deleteShader(A),g=new Hi(s,_),M=Sg(s,_)}let g;this.getUniforms=function(){return g===void 0&&T(this),g};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(_,hg)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ug++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=A,this}var Ng=0,Nl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Pl(t),e.set(t,n)),n}},Pl=class{constructor(t){this.id=Ng++,this.code=t,this.usedTimes=0}};function Pg(i){return i===Kn||i===Os||i===Vs}function Fg(i,t,e,n,s,r){let a=new cs,o=new Nl,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,M,U,R,F,L){let G=R.fog,C=F.geometry,z=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?R.environment:null,Z=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,H=t.get(g.envMap||z,Z),nt=u[g.type],Y=n.precision;g.precision!==null&&(Y=n.getMaxPrecision(g.precision),Y!==g.precision&&Ct("WebGLProgram.getParameters:",g.precision,"not supported, using",Y,"instead."));let K=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,et=K!==void 0?K.length:0,q=0;C.morphAttributes.position!==void 0&&(q=1),C.morphAttributes.normal!==void 0&&(q=2),C.morphAttributes.color!==void 0&&(q=3);let mt,k,st,St;if(nt){let xt=Mn[nt];mt=xt.vertexShader,k=xt.fragmentShader}else{mt=g.vertexShader,k=g.fragmentShader;let xt=o.getVertexShaderStage(g),se=o.getFragmentShaderStage(g);o.update(g,xt,se),st=xt.id,St=se.id}let At=i.getRenderTarget(),ut=i.state.buffers.depth.getReversed(),Ft=F.isInstancedMesh===!0,Gt=F.isBatchedMesh===!0,Rt=!!g.map,Qt=!!g.matcap,Dt=!!H,X=Dt&&H.isPMREMTexture===!0,kt=!!g.aoMap,jt=!!g.lightMap,le=!!g.bumpMap&&g.wireframe===!1,Kt=!!g.normalMap,Nt=!!g.displacementMap,$t=!!g.emissiveMap,fe=!!g.metalnessMap,ke=!!g.roughnessMap,ze=g.anisotropy>0,D=g.clearcoat>0,De=g.diffuseRoughness>0,re=g.dispersion>0,he=g.retroreflectivity>0,gt=g.iridescence>0,ge=g.sheen>0,Ut=g.transmission>0,Ot=ze&&!!g.anisotropyMap,w=D&&!!g.clearcoatMap,v=D&&!!g.clearcoatNormalMap,O=D&&!!g.clearcoatRoughnessMap,it=De&&!!g.diffuseRoughnessMap,tt=gt&&!!g.iridescenceMap,ot=gt&&!!g.iridescenceThicknessMap,ft=ge&&!!g.sheenColorMap,j=ge&&!!g.sheenRoughnessMap,Q=!!g.specularMap,ct=!!g.specularColorMap,I=!!g.specularIntensityMap,$=Ut&&!!g.transmissionMap,J=Ut&&!!g.thicknessMap,ht=!!g.gradientMap,at=!!g.alphaMap,lt=g.alphaTest>0,wt=!!g.alphaHash,Ht=!!g.extensions,rt=Sn;g.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(rt=i.toneMapping);let It=X?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,zt={shaderID:nt,shaderType:g.type,shaderName:g.name,vertexShader:mt,fragmentShader:k,defines:g.defines,customVertexShaderID:st,customFragmentShaderID:St,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:Y,batching:Gt,batchingColor:Gt&&F._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&F.instanceColor!==null,instancingMorph:Ft&&F.morphTexture!==null,outputColorSpace:At===null?i.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Jt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Rt,matcap:Qt,envMap:Dt,envMapMode:Dt&&H.mapping,envMapPMREM:X,envMapMaxLod:X?It.length-1:null,envMapSize:X?It[0].width:null,aoMap:kt,lightMap:jt,bumpMap:le,normalMap:Kt,displacementMap:Nt,emissiveMap:$t,normalMapObjectSpace:Kt&&g.normalMapType===eh,normalMapTangentSpace:Kt&&g.normalMapType===ks,packedNormalMap:Kt&&g.normalMapType===ks&&Pg(g.normalMap.format),metalnessMap:fe,roughnessMap:ke,anisotropy:ze,anisotropyMap:Ot,clearcoat:D,clearcoatMap:w,clearcoatNormalMap:v,clearcoatRoughnessMap:O,diffuseRoughness:De,diffuseRoughnessMap:it,dispersion:re,retroreflection:he,iridescence:gt,iridescenceMap:tt,iridescenceThicknessMap:ot,sheen:ge,sheenColorMap:ft,sheenRoughnessMap:j,specularMap:Q,specularColorMap:ct,specularIntensityMap:I,transmission:Ut,transmissionMap:$,thicknessMap:J,gradientMap:ht,opaque:g.transparent===!1&&g.blending===ki&&g.alphaToCoverage===!1,alphaMap:at,alphaTest:lt,alphaHash:wt,combine:g.combine,mapUv:Rt&&f(g.map.channel),aoMapUv:kt&&f(g.aoMap.channel),lightMapUv:jt&&f(g.lightMap.channel),bumpMapUv:le&&f(g.bumpMap.channel),normalMapUv:Kt&&f(g.normalMap.channel),displacementMapUv:Nt&&f(g.displacementMap.channel),emissiveMapUv:$t&&f(g.emissiveMap.channel),metalnessMapUv:fe&&f(g.metalnessMap.channel),roughnessMapUv:ke&&f(g.roughnessMap.channel),anisotropyMapUv:Ot&&f(g.anisotropyMap.channel),clearcoatMapUv:w&&f(g.clearcoatMap.channel),clearcoatNormalMapUv:v&&f(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&f(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:it&&f(g.diffuseRoughnessMap.channel),iridescenceMapUv:tt&&f(g.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&f(g.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&f(g.sheenColorMap.channel),sheenRoughnessMapUv:j&&f(g.sheenRoughnessMap.channel),specularMapUv:Q&&f(g.specularMap.channel),specularColorMapUv:ct&&f(g.specularColorMap.channel),specularIntensityMapUv:I&&f(g.specularIntensityMap.channel),transmissionMapUv:$&&f(g.transmissionMap.channel),thicknessMapUv:J&&f(g.thicknessMap.channel),alphaMapUv:at&&f(g.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(Kt||ze),vertexNormals:!!C.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!C.attributes.uv&&(Rt||at),fog:!!G,useFog:g.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||C.attributes.normal===void 0&&Kt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ut,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:q,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:L.filter(xt=>xt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:rt,decodeVideoTexture:Rt&&g.map.isVideoTexture===!0&&Jt.getTransfer(g.map.colorSpace)===ie,decodeVideoTextureEmissive:$t&&g.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(g.emissiveMap.colorSpace)===ie,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===$e,flipSided:g.side===Ve,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Ht&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&g.extensions.multiDraw===!0||Gt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return zt.vertexUv1s=l.has(1),zt.vertexUv2s=l.has(2),zt.vertexUv3s=l.has(3),l.clear(),zt}function S(g){let M=[];if(g.shaderID?M.push(g.shaderID):(M.push(g.customVertexShaderID),M.push(g.customFragmentShaderID)),g.defines!==void 0)for(let U in g.defines)M.push(U),M.push(g.defines[U]);return g.isRawShaderMaterial===!1&&(p(M,g),m(M,g),M.push(i.outputColorSpace)),M.push(g.customProgramCacheKey),M.join()}function p(g,M){g.push(M.precision),g.push(M.outputColorSpace),g.push(M.envMapMode),g.push(M.envMapPMREM),g.push(M.envMapMaxLod),g.push(M.envMapSize),g.push(M.mapUv),g.push(M.alphaMapUv),g.push(M.lightMapUv),g.push(M.aoMapUv),g.push(M.bumpMapUv),g.push(M.normalMapUv),g.push(M.displacementMapUv),g.push(M.emissiveMapUv),g.push(M.metalnessMapUv),g.push(M.roughnessMapUv),g.push(M.anisotropyMapUv),g.push(M.clearcoatMapUv),g.push(M.clearcoatNormalMapUv),g.push(M.clearcoatRoughnessMapUv),g.push(M.diffuseRoughnessMapUv),g.push(M.iridescenceMapUv),g.push(M.iridescenceThicknessMapUv),g.push(M.sheenColorMapUv),g.push(M.sheenRoughnessMapUv),g.push(M.specularMapUv),g.push(M.specularColorMapUv),g.push(M.specularIntensityMapUv),g.push(M.transmissionMapUv),g.push(M.thicknessMapUv),g.push(M.combine),g.push(M.fogExp2),g.push(M.sizeAttenuation),g.push(M.morphTargetsCount),g.push(M.numSunLights),g.push(M.numDirLights),g.push(M.numPointLights),g.push(M.numSpotLights),g.push(M.numSpotLightMaps),g.push(M.numHemiLights),g.push(M.numRectAreaLights),g.push(M.numSunLightShadows),g.push(M.numDirLightShadows),g.push(M.numPointLightShadows),g.push(M.numSpotLightShadows),g.push(M.numSpotLightShadowsWithMaps),g.push(M.numLightProbes),g.push(M.numLightProbeGrids),g.push(M.shadowMapType),g.push(M.toneMapping),g.push(M.numClippingPlanes),g.push(M.numClipIntersection),g.push(M.depthPacking)}function m(g,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function x(g){let M=u[g.type],U;if(M){let R=Mn[M];U=mh.clone(R.uniforms)}else U=g.uniforms;return U}function E(g,M){let U=h.get(M);return U!==void 0?++U.usedTimes:(U=new Ug(i,M,g,s),c.push(U),h.set(M,U)),U}function y(g){if(--g.usedTimes===0){let M=c.indexOf(g);c[M]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function A(g){o.remove(g)}function T(){o.dispose()}return{getParameters:_,getProgramCacheKey:S,getUniforms:x,acquireProgram:E,releaseProgram:y,releaseShaderCache:A,programs:c,dispose:T}}function Dg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Lg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Dh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Lh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,_,S,p,m){let x=i[t];return x===void 0?(x={id:u.id,object:u,geometry:f,material:_,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:p,group:m},i[t]=x):(x.id=u.id,x.object=u,x.geometry=f,x.material=_,x.materialVariant=a(u),x.groupOrder=S,x.renderOrder=u.renderOrder,x.z=p,x.group=m),t++,x}function l(u,f,_,S,p,m,x){x.reversedDepth===!0&&(p=-p);let E=o(u,f,_,S,p,m);_.transmission>0?n.push(E):_.transparent===!0?s.push(E):e.push(E)}function c(u,f,_,S,p,m){let x=o(u,f,_,S,p,m);_.transmission>0?n.unshift(x):_.transparent===!0?s.unshift(x):e.unshift(x)}function h(u,f){e.length>1&&e.sort(u||Lg),n.length>1&&n.sort(f||Dh),s.length>1&&s.sort(f||Dh)}function d(){for(let u=t,f=i.length;u<f;u++){let _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Bg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Lh,i.set(n,[a])):s>=r.length?(a=new Lh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Og(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new Pt};break;case"SpotLight":e={position:new P,direction:new P,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function Vg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var kg=0;function zg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Gg(i){let t=new Og,e=Vg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new qt,a=new qt;function o(c){let h=0,d=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,_=0,S=0,p=0,m=0,x=0,E=0,y=0,A=0,T=0,g=0,M=0,U=0,R=0;c.sort(zg);for(let L=0,G=c.length;L<G;L++){let C=c[L],z=C.color,Z=C.intensity,H=C.distance,nt=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Kn?nt=C.shadow.map.texture:nt=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=z.r*Z,d+=z.g*Z,u+=z.b*Z;else if(C.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(C.sh.coefficients[Y],Z);R++}else if(C.isSunLight){let Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let K=C.shadow,et=e.get(C);et.shadowIntensity=K.intensity,et.shadowBias=K.bias,et.shadowNormalBias=K.normalBias,et.shadowRadius=K.radius,et.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[_]=et,n.sunShadowMap[_]=nt;let q=K.getViewportCount();for(let mt=0;mt<q;mt++)n.sunShadowMatrix[S+mt]=K.getMatrix(mt),n.sunShadowCascade[S+mt]=K._cascadeData[mt];S+=q,_++}n.sun[f]=Y,f++}else if(C.isDirectionalLight){let Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let K=C.shadow,et=e.get(C);et.shadowIntensity=K.intensity,et.shadowBias=K.bias,et.shadowNormalBias=K.normalBias,et.shadowRadius=K.radius,et.shadowMapSize=K.mapSize,n.directionalShadow[p]=et,n.directionalShadowMap[p]=nt,n.directionalShadowMatrix[p]=C.shadow.matrix,A++}n.directional[p]=Y,p++}else if(C.isSpotLight){let Y=t.get(C);Y.position.setFromMatrixPosition(C.matrixWorld),Y.color.copy(z).multiplyScalar(Z),Y.distance=H,Y.coneCos=Math.cos(C.angle),Y.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Y.decay=C.decay,n.spot[x]=Y;let K=C.shadow;if(C.map&&(n.spotLightMap[M]=C.map,M++,K.updateMatrices(C),C.castShadow&&U++),n.spotLightMatrix[x]=K.matrix,C.castShadow){let et=e.get(C);et.shadowIntensity=K.intensity,et.shadowBias=K.bias,et.shadowNormalBias=K.normalBias,et.shadowRadius=K.radius,et.shadowMapSize=K.mapSize,n.spotShadow[x]=et,n.spotShadowMap[x]=nt,g++}x++}else if(C.isRectAreaLight){let Y=t.get(C);Y.color.copy(z).multiplyScalar(Z),Y.halfWidth.set(C.width*.5,0,0),Y.halfHeight.set(0,C.height*.5,0),n.rectArea[E]=Y,E++}else if(C.isPointLight){let Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),Y.distance=C.distance,Y.decay=C.decay,C.castShadow){let K=C.shadow,et=e.get(C);et.shadowIntensity=K.intensity,et.shadowBias=K.bias,et.shadowNormalBias=K.normalBias,et.shadowRadius=K.radius,et.shadowMapSize=K.mapSize,et.shadowCameraNear=K.camera.near,et.shadowCameraFar=K.camera.far,n.pointShadow[m]=et,n.pointShadowMap[m]=nt,n.pointShadowMatrix[m]=C.shadow.matrix,T++}n.point[m]=Y,m++}else if(C.isHemisphereLight){let Y=t.get(C);Y.skyColor.copy(C.color).multiplyScalar(Z),Y.groundColor.copy(C.groundColor).multiplyScalar(Z),n.hemi[y]=Y,y++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let F=n.hash;(F.sunLength!==f||F.directionalLength!==p||F.pointLength!==m||F.spotLength!==x||F.rectAreaLength!==E||F.hemiLength!==y||F.numSunShadows!==_||F.numDirectionalShadows!==A||F.numPointShadows!==T||F.numSpotShadows!==g||F.numSpotMaps!==M||F.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=p,n.spot.length=x,n.rectArea.length=E,n.point.length=m,n.hemi.length=y,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+M-U,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=R,F.sunLength=f,F.directionalLength=p,F.pointLength=m,F.spotLength=x,F.rectAreaLength=E,F.hemiLength=y,F.numSunShadows=_,F.numDirectionalShadows=A,F.numPointShadows=T,F.numSpotShadows=g,F.numSpotMaps=M,F.numLightProbes=R,n.version=kg++)}function l(c,h){let d=0,u=0,f=0,_=0,S=0,p=0,m=h.matrixWorldInverse;for(let x=0,E=c.length;x<E;x++){let y=c[x];if(y.isSunLight){let A=n.sun[d];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(m),d++}else if(y.isDirectionalLight){let A=n.directional[u];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),u++}else if(y.isSpotLight){let A=n.spot[_];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),_++}else if(y.isRectAreaLight){let A=n.rectArea[S];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),S++}else if(y.isPointLight){let A=n.point[f];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let A=n.hemi[p];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function Bh(i){let t=new Gg(i),e=[],n=[],s=[];function r(d){h.camera=d,e.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):e.push(d)}function o(d){n.push(d)}function l(){t.setup(e),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Hg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Bh(i),t.set(s,[o])):r>=a.length?(o=new Bh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Wg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zg=`uniform sampler2D shadow_pass;
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
}`,Yg=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Xg=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Oh=new qt,Gs=new P,wl=new P;function Jg(i,t,e){let n=new Xn,s=new Tt,r=new Tt,a=new ue,o=new Kr,l=new $r,c={},h=e.maxTextureSize,d={[Qn]:Ve,[Ve]:Qn,[$e]:$e},u=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:Wg,fragmentShader:Zg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let _=new Ae;_.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Pe(_,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ns;let m=this.type;this.render=function(T,g,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Nc&&(Ct("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ns);let U=i.getRenderTarget(),R=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),L=i.state;L.setBlending(ui),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let G=m!==this.type;G&&g.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(z=>z.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,z=T.length;C<z;C++){let Z=T[C],H=Z.shadow;if(H===void 0){Ct("WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let nt=H.getFrameExtents();s.multiply(nt),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,H.mapSize.y=r.y));let Y=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=Y,H.map===null||G===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Vi){if(Z.isPointLight){Ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Ye(s.x,s.y,{format:Kn,type:hn,minFilter:Oe,magFilter:Oe,generateMipmaps:!1}),H.map.texture.name=Z.name+".shadowMap",H.map.depthTexture=new Pn(s.x,s.y,tn),H.map.depthTexture.name=Z.name+".shadowMapDepth",H.map.depthTexture.format=Un,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=be,H.map.depthTexture.magFilter=be}else Z.isPointLight?(H.map=new Ws(s.x),H.map.depthTexture=new ys(s.x,cn)):(H.map=new Ye(s.x,s.y),H.map.depthTexture=new Pn(s.x,s.y,cn)),H.map.depthTexture.name=Z.name+".shadowMap",H.map.depthTexture.format=Un,this.type===Ns?(H.map.depthTexture.compareFunction=Y?gl:ml,H.map.depthTexture.minFilter=Oe,H.map.depthTexture.magFilter=Oe):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=be,H.map.depthTexture.magFilter=be);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let K=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();Z.isPointLight!==!0&&H.updateMatrices(Z,M);let et=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:M.layers;for(let q=0;q<K;q++){let mt=H.getCamera(q);if(Z.isPointLight){let k=H.camera,st=H.matrix,St=Z.distance||k.far;St!==k.far&&(k.far=St,k.updateProjectionMatrix()),Gs.setFromMatrixPosition(Z.matrixWorld),k.position.copy(Gs),wl.copy(k.position),wl.add(Yg[q]),k.up.copy(Xg[q]),k.lookAt(wl),k.updateMatrixWorld(),st.makeTranslation(-Gs.x,-Gs.y,-Gs.z),Oh.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Oh,k.coordinateSystem,k.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,q),i.clear();else{q===0&&(i.setRenderTarget(H.map),i.clear());let k=H.getViewport(q);a.set(r.x*k.x,r.y*k.y,r.x*k.z,r.y*k.w),L.viewport(a)}n=H.getFrustum(q),y(g,M,mt,Z,et,this.type)}H.isPointLightShadow!==!0&&this.type===Vi&&x(H,M),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(U,R,F)};function x(T,g){let M=t.update(S);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Ye(s.x,s.y,{format:Kn,type:hn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(g,null,M,u,S,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(g,null,M,f,S,null)}function E(T,g,M,U){let R=null,F=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(F!==void 0)R=F;else if(R=M.isPointLight===!0?l:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let L=R.uuid,G=g.uuid,C=c[L];C===void 0&&(C={},c[L]=C);let z=C[G];z===void 0&&(z=R.clone(),C[G]=z,g.addEventListener("dispose",A)),R=z}if(R.visible=g.visible,R.wireframe=g.wireframe,U===Vi?R.side=g.shadowSide!==null?g.shadowSide:g.side:R.side=g.shadowSide!==null?g.shadowSide:d[g.side],R.alphaMap=g.alphaMap,R.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,R.map=g.map,R.clipShadows=g.clipShadows,R.clippingPlanes=g.clippingPlanes,R.clipIntersection=g.clipIntersection,R.displacementMap=g.displacementMap,R.displacementScale=g.displacementScale,R.displacementBias=g.displacementBias,R.wireframeLinewidth=g.wireframeLinewidth,R.linewidth=g.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let L=i.properties.get(R);L.light=M}return R}function y(T,g,M,U,R,F){if(T.visible===!1)return;if(T.layers.test(R)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&F===Vi)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);let C=t.update(T),z=T.material;if(Array.isArray(z)){let Z=C.groups;for(let H=0,nt=Z.length;H<nt;H++){let Y=Z[H],K=z[Y.materialIndex];if(K&&K.visible){let et=E(T,K,U,F);T.onBeforeShadow(i,T,g,M,C,et,Y),i.renderBufferDirect(M,null,C,et,T,Y),T.onAfterShadow(i,T,g,M,C,et,Y)}}}else if(z.visible){let Z=E(T,z,U,F);T.onBeforeShadow(i,T,g,M,C,Z,null),i.renderBufferDirect(M,null,C,Z,T,null),T.onAfterShadow(i,T,g,M,C,Z,null)}}let G=T.children;for(let C=0,z=G.length;C<z;C++)y(G[C],g,M,U,R,F)}function A(T){T.target.removeEventListener("dispose",A);for(let M in c){let U=c[M],R=T.target.uuid;R in U&&(U[R].dispose(),delete U[R])}}}function qg(i,t){function e(){let I=!1,$=new ue,J=null,ht=new ue(0,0,0,0);return{setMask:function(at){J!==at&&!I&&(i.colorMask(at,at,at,at),J=at)},setLocked:function(at){I=at},setClear:function(at,lt,wt,Ht,rt){rt===!0&&(at*=Ht,lt*=Ht,wt*=Ht),$.set(at,lt,wt,Ht),ht.equals($)===!1&&(i.clearColor(at,lt,wt,Ht),ht.copy($))},reset:function(){I=!1,J=null,ht.set(-1,0,0,0)}}}function n(){let I=!1,$=!1,J=null,ht=null,at=null;return{setReversed:function(lt){if($!==lt){let wt=t.get("EXT_clip_control");lt?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),$=lt;let Ht=at;at=null,this.setClear(Ht)}},getReversed:function(){return $},setTest:function(lt){lt?ut(i.DEPTH_TEST):Ft(i.DEPTH_TEST)},setMask:function(lt){J!==lt&&!I&&(i.depthMask(lt),J=lt)},setFunc:function(lt){if($&&(lt=dh[lt]),ht!==lt){switch(lt){case Er:i.depthFunc(i.NEVER);break;case Tr:i.depthFunc(i.ALWAYS);break;case Ar:i.depthFunc(i.LESS);break;case Ui:i.depthFunc(i.LEQUAL);break;case wr:i.depthFunc(i.EQUAL);break;case Rr:i.depthFunc(i.GEQUAL);break;case Ir:i.depthFunc(i.GREATER);break;case Cr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ht=lt}},setLocked:function(lt){I=lt},setClear:function(lt){at!==lt&&(at=lt,$&&(lt=1-lt),i.clearDepth(lt))},reset:function(){I=!1,J=null,ht=null,at=null,$=!1}}}function s(){let I=!1,$=null,J=null,ht=null,at=null,lt=null,wt=null,Ht=null,rt=null;return{setTest:function(It){I||(It?ut(i.STENCIL_TEST):Ft(i.STENCIL_TEST))},setMask:function(It){$!==It&&!I&&(i.stencilMask(It),$=It)},setFunc:function(It,zt,xt){(J!==It||ht!==zt||at!==xt)&&(i.stencilFunc(It,zt,xt),J=It,ht=zt,at=xt)},setOp:function(It,zt,xt){(lt!==It||wt!==zt||Ht!==xt)&&(i.stencilOp(It,zt,xt),lt=It,wt=zt,Ht=xt)},setLocked:function(It){I=It},setClear:function(It){rt!==It&&(i.clearStencil(It),rt=It)},reset:function(){I=!1,$=null,J=null,ht=null,at=null,lt=null,wt=null,Ht=null,rt=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,_=[],S=null,p=!1,m=null,x=null,E=null,y=null,A=null,T=null,g=null,M=new Pt(0,0,0),U=0,R=!1,F=null,L=null,G=null,C=null,z=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,nt=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(Y)[1]),H=nt>=1):Y.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),H=nt>=2);let K=null,et={},q=i.getParameter(i.SCISSOR_BOX),mt=i.getParameter(i.VIEWPORT),k=new ue().fromArray(q),st=new ue().fromArray(mt);function St(I,$,J,ht){let at=new Uint8Array(4),lt=i.createTexture();i.bindTexture(I,lt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let wt=0;wt<J;wt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D($,0,i.RGBA,1,1,ht,0,i.RGBA,i.UNSIGNED_BYTE,at):i.texImage2D($+wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,at);return lt}let At={};At[i.TEXTURE_2D]=St(i.TEXTURE_2D,i.TEXTURE_2D,1),At[i.TEXTURE_CUBE_MAP]=St(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[i.TEXTURE_2D_ARRAY]=St(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),At[i.TEXTURE_3D]=St(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ut(i.DEPTH_TEST),a.setFunc(Ui),le(!1),Kt(qo),ut(i.CULL_FACE),kt(ui);function ut(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function Ft(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Gt(I,$){return u[I]!==$?(i.bindFramebuffer(I,$),u[I]=$,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=$),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=$),!0):!1}function Rt(I,$){let J=_,ht=!1;if(I){J=f.get($),J===void 0&&(J=[],f.set($,J));let at=I.textures;if(J.length!==at.length||J[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,wt=at.length;lt<wt;lt++)J[lt]=i.COLOR_ATTACHMENT0+lt;J.length=at.length,ht=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,ht=!0);ht&&i.drawBuffers(J)}function Qt(I){return S!==I?(i.useProgram(I),S=I,!0):!1}let Dt={[di]:i.FUNC_ADD,[Fc]:i.FUNC_SUBTRACT,[Dc]:i.FUNC_REVERSE_SUBTRACT};Dt[Lc]=i.MIN,Dt[Bc]=i.MAX;let X={[Oc]:i.ZERO,[Vc]:i.ONE,[kc]:i.SRC_COLOR,[$o]:i.SRC_ALPHA,[Yc]:i.SRC_ALPHA_SATURATE,[Wc]:i.DST_COLOR,[Gc]:i.DST_ALPHA,[zc]:i.ONE_MINUS_SRC_COLOR,[tl]:i.ONE_MINUS_SRC_ALPHA,[Zc]:i.ONE_MINUS_DST_COLOR,[Hc]:i.ONE_MINUS_DST_ALPHA,[Xc]:i.CONSTANT_COLOR,[Jc]:i.ONE_MINUS_CONSTANT_COLOR,[qc]:i.CONSTANT_ALPHA,[jc]:i.ONE_MINUS_CONSTANT_ALPHA};function kt(I,$,J,ht,at,lt,wt,Ht,rt,It){if(I===ui){p===!0&&(Ft(i.BLEND),p=!1);return}if(p===!1&&(ut(i.BLEND),p=!0),I!==Pc){if(I!==m||It!==R){if((x!==di||A!==di)&&(i.blendEquation(i.FUNC_ADD),x=di,A=di),It)switch(I){case ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jo:i.blendFunc(i.ONE,i.ONE);break;case Qo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ko:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Lt("WebGLState: Invalid blending: ",I);break}else switch(I){case ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Qo:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ko:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",I);break}E=null,y=null,T=null,g=null,M.set(0,0,0),U=0,m=I,R=It}return}at=at||$,lt=lt||J,wt=wt||ht,($!==x||at!==A)&&(i.blendEquationSeparate(Dt[$],Dt[at]),x=$,A=at),(J!==E||ht!==y||lt!==T||wt!==g)&&(i.blendFuncSeparate(X[J],X[ht],X[lt],X[wt]),E=J,y=ht,T=lt,g=wt),(Ht.equals(M)===!1||rt!==U)&&(i.blendColor(Ht.r,Ht.g,Ht.b,rt),M.copy(Ht),U=rt),m=I,R=!1}function jt(I,$){I.side===$e?Ft(i.CULL_FACE):ut(i.CULL_FACE);let J=I.side===Ve;$&&(J=!J),le(J),I.blending===ki&&I.transparent===!1?kt(ui):kt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let ht=I.stencilWrite;o.setTest(ht),ht&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),$t(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):Ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function le(I){F!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),F=I)}function Kt(I){I!==Cc?(ut(i.CULL_FACE),I!==L&&(I===qo?i.cullFace(i.BACK):I===Uc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ft(i.CULL_FACE),L=I}function Nt(I){I!==G&&(H&&i.lineWidth(I),G=I)}function $t(I,$,J){I?(ut(i.POLYGON_OFFSET_FILL),(C!==$||z!==J)&&(C=$,z=J,a.getReversed()&&($=-$,J=-J),i.polygonOffset($,J))):Ft(i.POLYGON_OFFSET_FILL)}function fe(I){I?ut(i.SCISSOR_TEST):Ft(i.SCISSOR_TEST)}function ke(I){I===void 0&&(I=i.TEXTURE0+Z-1),K!==I&&(i.activeTexture(I),K=I)}function ze(I,$,J){J===void 0&&(K===null?J=i.TEXTURE0+Z-1:J=K);let ht=et[J];ht===void 0&&(ht={type:void 0,texture:void 0},et[J]=ht),(ht.type!==I||ht.texture!==$)&&(K!==J&&(i.activeTexture(J),K=J),i.bindTexture(I,$||At[I]),ht.type=I,ht.texture=$)}function D(){let I=et[K];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function De(){try{i.compressedTexImage2D(...arguments)}catch(I){Lt("WebGLState:",I)}}function re(){try{i.compressedTexImage3D(...arguments)}catch(I){Lt("WebGLState:",I)}}function he(){try{i.texSubImage2D(...arguments)}catch(I){Lt("WebGLState:",I)}}function gt(){try{i.texSubImage3D(...arguments)}catch(I){Lt("WebGLState:",I)}}function ge(){try{i.compressedTexSubImage2D(...arguments)}catch(I){Lt("WebGLState:",I)}}function Ut(){try{i.compressedTexSubImage3D(...arguments)}catch(I){Lt("WebGLState:",I)}}function Ot(){try{i.texStorage2D(...arguments)}catch(I){Lt("WebGLState:",I)}}function w(){try{i.texStorage3D(...arguments)}catch(I){Lt("WebGLState:",I)}}function v(){try{i.texImage2D(...arguments)}catch(I){Lt("WebGLState:",I)}}function O(){try{i.texImage3D(...arguments)}catch(I){Lt("WebGLState:",I)}}function it(I){return d[I]!==void 0?d[I]:i.getParameter(I)}function tt(I,$){d[I]!==$&&(i.pixelStorei(I,$),d[I]=$)}function ot(I){k.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),k.copy(I))}function ft(I){st.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),st.copy(I))}function j(I,$){let J=c.get($);J===void 0&&(J=new WeakMap,c.set($,J));let ht=J.get(I);ht===void 0&&(ht=i.getUniformBlockIndex($,I.name),i.uniformBlockBinding($,ht,ht),J.set(I,ht))}function Q(I,$,J){let at=c.get($).get(I);l[at]!==J&&(i.bindBufferBase(i.UNIFORM_BUFFER,at,J),l[at]=J)}function ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},K=null,et={},u={},l={},f=new WeakMap,_=[],S=null,p=!1,m=null,x=null,E=null,y=null,A=null,T=null,g=null,M=new Pt(0,0,0),U=0,R=!1,F=null,L=null,G=null,C=null,z=null,k.set(0,0,i.canvas.width,i.canvas.height),st.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ut,disable:Ft,bindFramebuffer:Gt,drawBuffers:Rt,useProgram:Qt,setBlending:kt,setMaterial:jt,setFlipSided:le,setCullFace:Kt,setLineWidth:Nt,setPolygonOffset:$t,setScissorTest:fe,activeTexture:ke,bindTexture:ze,unbindTexture:D,compressedTexImage2D:De,compressedTexImage3D:re,texImage2D:v,texImage3D:O,pixelStorei:tt,getParameter:it,updateUBOMapping:j,uniformBlockBinding:Q,texStorage2D:Ot,texStorage3D:w,texSubImage2D:he,texSubImage3D:gt,compressedTexSubImage2D:ge,compressedTexSubImage3D:Ut,scissor:ot,viewport:ft,reset:ct}}function jg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,h=new WeakMap,d=new Set,u,f=new WeakMap,_=new Set,S=new FinalizationRegistry(w=>_.delete(w)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,v){return p?new OffscreenCanvas(w,v):os("canvas")}function x(w,v,O){let it=1,tt=Ot(w);if((tt.width>O||tt.height>O)&&(it=O/Math.max(tt.width,tt.height)),it<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let ot=Math.floor(it*tt.width),ft=Math.floor(it*tt.height);u===void 0&&(u=m(ot,ft));let j=v?m(ot,ft):u;return j.width=ot,j.height=ft,j.getContext("2d").drawImage(w,0,0,ot,ft),Ct("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+ot+"x"+ft+")."),j}else return"data"in w&&Ct("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),w;return w}function E(w){return w.generateMipmaps}function y(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(w,v,O,it,tt,ot=!1){if(w!==null){if(i[w]!==void 0)return i[w];Ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ft;it&&(ft=t.get("EXT_texture_norm16"),ft||Ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=v;if(v===i.RED&&(O===i.FLOAT&&(j=i.R32F),O===i.HALF_FLOAT&&(j=i.R16F),O===i.UNSIGNED_BYTE&&(j=i.R8),O===i.UNSIGNED_SHORT&&ft&&(j=ft.R16_EXT),O===i.SHORT&&ft&&(j=ft.R16_SNORM_EXT)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(j=i.R8UI),O===i.UNSIGNED_SHORT&&(j=i.R16UI),O===i.UNSIGNED_INT&&(j=i.R32UI),O===i.BYTE&&(j=i.R8I),O===i.SHORT&&(j=i.R16I),O===i.INT&&(j=i.R32I)),v===i.RG&&(O===i.FLOAT&&(j=i.RG32F),O===i.HALF_FLOAT&&(j=i.RG16F),O===i.UNSIGNED_BYTE&&(j=i.RG8),O===i.UNSIGNED_SHORT&&ft&&(j=ft.RG16_EXT),O===i.SHORT&&ft&&(j=ft.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(j=i.RG8UI),O===i.UNSIGNED_SHORT&&(j=i.RG16UI),O===i.UNSIGNED_INT&&(j=i.RG32UI),O===i.BYTE&&(j=i.RG8I),O===i.SHORT&&(j=i.RG16I),O===i.INT&&(j=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(j=i.RGB8UI),O===i.UNSIGNED_SHORT&&(j=i.RGB16UI),O===i.UNSIGNED_INT&&(j=i.RGB32UI),O===i.BYTE&&(j=i.RGB8I),O===i.SHORT&&(j=i.RGB16I),O===i.INT&&(j=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),O===i.UNSIGNED_INT&&(j=i.RGBA32UI),O===i.BYTE&&(j=i.RGBA8I),O===i.SHORT&&(j=i.RGBA16I),O===i.INT&&(j=i.RGBA32I)),v===i.RGB&&(O===i.UNSIGNED_SHORT&&ft&&(j=ft.RGB16_EXT),O===i.SHORT&&ft&&(j=ft.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),v===i.RGBA){let Q=ot?as:Jt.getTransfer(tt);O===i.FLOAT&&(j=i.RGBA32F),O===i.HALF_FLOAT&&(j=i.RGBA16F),O===i.UNSIGNED_BYTE&&(j=Q===ie?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&ft&&(j=ft.RGBA16_EXT),O===i.SHORT&&ft&&(j=ft.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function g(w,v){let O;return w?v===null||v===cn||v===pi?O=i.DEPTH24_STENCIL8:v===tn?O=i.DEPTH32F_STENCIL8:v===Gi&&(O=i.DEPTH24_STENCIL8,Ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===cn||v===pi?O=i.DEPTH_COMPONENT24:v===tn?O=i.DEPTH_COMPONENT32F:v===Gi&&(O=i.DEPTH_COMPONENT16),O}function M(w,v){return E(w)===!0||w.isFramebufferTexture&&w.minFilter!==be&&w.minFilter!==Oe?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function U(w){let v=new WeakRef(w);n.get(w).__ref=v,_.add(v),S.register(w,v,v)}function R(w){let v=n.get(w).__ref;v!==void 0&&(_.delete(v),S.unregister(v))}function F(w){G(w.target)}function L(w){C(w.target)}function G(w){w.removeEventListener("dispose",F),R(w),Z(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&d.delete(w)}function C(w){w.removeEventListener("dispose",L),R(w),nt(w)}function z(){for(let w of _){let v=w.deref();v!==void 0&&(v.isRenderTarget===!0?C(v):G(v))}_.clear(),d.clear()}function Z(w){let v=n.get(w);if(v.__webglInit===void 0)return;let O=w.source,it=f.get(O);if(it){let tt=it[v.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&H(w),Object.keys(it).length===0&&f.delete(O)}n.remove(w)}function H(w){let v=n.get(w);i.deleteTexture(v.__webglTexture);let O=w.source,it=f.get(O);delete it[v.__cacheKey],a.memory.textures--}function nt(w){let v=n.get(w);v.__depthDisposeCallback&&v.__depthDisposeCallback();let O=w.depthTexture;if(O&&O.renderTarget===w&&G(O),w.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(v.__webglFramebuffer[tt]))for(let ot=0;ot<v.__webglFramebuffer[tt].length;ot++)i.deleteFramebuffer(v.__webglFramebuffer[tt][ot]);else i.deleteFramebuffer(v.__webglFramebuffer[tt]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[tt])}else{if(Array.isArray(v.__webglFramebuffer))for(let tt=0;tt<v.__webglFramebuffer.length;tt++)i.deleteFramebuffer(v.__webglFramebuffer[tt]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let tt=0;tt<v.__webglColorRenderbuffer.length;tt++)v.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[tt]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let it=w.textures;for(let tt=0,ot=it.length;tt<ot;tt++){let ft=n.get(it[tt]);ft.__webglTexture&&(i.deleteTexture(ft.__webglTexture),a.memory.textures--),n.remove(it[tt])}n.remove(w)}let Y=0;function K(){Y=0}function et(){return Y}function q(w){Y=w}function mt(){let w=Y;return w>=s.maxTextures&&Ct("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,w}function k(w){let v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.mipmapsAutoUpdate),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function st(w,v){let O=n.get(w);if(w.isVideoTexture&&ge(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){let it=w.image;if(it===null)Ct("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)Ct("WebGLRenderer: Texture marked for update but image is incomplete");else{jt(O,w,v);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function St(w,v){let O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){jt(O,w,v);return}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function At(w,v){let O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){jt(O,w,v);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function ut(w,v){let O=n.get(w);if(w.version>0&&O.__version!==w.version){le(O,w,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}let Ft={[Ur]:i.REPEAT,[pn]:i.CLAMP_TO_EDGE,[Nr]:i.MIRRORED_REPEAT},Gt={[be]:i.NEAREST,[$c]:i.NEAREST_MIPMAP_NEAREST,[Ps]:i.NEAREST_MIPMAP_LINEAR,[Oe]:i.LINEAR,[ma]:i.LINEAR_MIPMAP_NEAREST,[Dn]:i.LINEAR_MIPMAP_LINEAR},Rt={[ih]:i.NEVER,[xl]:i.ALWAYS,[sh]:i.LESS,[ml]:i.LEQUAL,[rh]:i.EQUAL,[gl]:i.GEQUAL,[ah]:i.GREATER,[oh]:i.NOTEQUAL};function Qt(w,v){if(v.type===tn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Oe||v.magFilter===ma||v.magFilter===Ps||v.magFilter===Dn||v.minFilter===Oe||v.minFilter===ma||v.minFilter===Ps||v.minFilter===Dn)&&Ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Ft[v.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Ft[v.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Ft[v.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,Gt[v.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,Gt[v.minFilter]),v.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Rt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===be||v.minFilter!==Ps&&v.minFilter!==Dn||v.type===tn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Dt(w,v){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",F),U(v));let it=v.source,tt=f.get(it);tt===void 0&&(tt={},f.set(it,tt));let ot=k(v);if(ot!==w.__cacheKey){tt[ot]===void 0&&(tt[ot]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),tt[ot].usedTimes++;let ft=tt[w.__cacheKey];ft!==void 0&&(tt[w.__cacheKey].usedTimes--,ft.usedTimes===0&&H(v)),w.__cacheKey=ot,w.__webglTexture=tt[ot].texture}return O}function X(w,v,O){return Math.floor(Math.floor(w/O)/v)}function kt(w,v,O,it){let ot=w.updateRanges;if(ot.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,O,it,v.data);else{ot.sort((I,$)=>I.start-$.start);let ft=0;for(let I=1;I<ot.length;I++){let $=ot[ft],J=ot[I],ht=$.start+$.count,at=X(J.start,v.width,4),lt=X($.start,v.width,4);J.start<=ht+1&&at===lt&&X(J.start+J.count-1,v.width,4)===at?$.count=Math.max($.count,J.start+J.count-$.start):(++ft,ot[ft]=J)}ot.length=ft+1;let j=e.getParameter(i.UNPACK_ROW_LENGTH),Q=e.getParameter(i.UNPACK_SKIP_PIXELS),ct=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let I=0,$=ot.length;I<$;I++){let J=ot[I],ht=Math.floor(J.start/4),at=Math.ceil(J.count/4),lt=ht%v.width,wt=Math.floor(ht/v.width),Ht=at,rt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(i.UNPACK_SKIP_ROWS,wt),e.texSubImage2D(i.TEXTURE_2D,0,lt,wt,Ht,rt,O,it,v.data)}w.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,j),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(i.UNPACK_SKIP_ROWS,ct)}}function jt(w,v,O){let it=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(it=i.TEXTURE_3D);let tt=Dt(w,v),ot=v.source;e.bindTexture(it,w.__webglTexture,i.TEXTURE0+O);let ft=n.get(ot);if(ot.version!==ft.__version||tt===!0){if(e.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let rt=Jt.getPrimaries(Jt.workingColorSpace),It=v.colorSpace===Bn?null:Jt.getPrimaries(v.colorSpace),zt=v.colorSpace===Bn||rt===It?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let Q=x(v.image,!1,s.maxTextureSize);Q=Ut(v,Q);let ct=r.convert(v.format,v.colorSpace),I=r.convert(v.type),$=T(v.internalFormat,ct,I,v.normalized,v.colorSpace,v.isVideoTexture);Qt(it,v);let J,ht=v.mipmaps,at=v.isVideoTexture!==!0,lt=ft.__version===void 0||tt===!0,wt=ot.dataReady,Ht=M(v,Q);if(v.isDepthTexture)$=g(v.format===Ln,v.type),lt&&(at?e.texStorage2D(i.TEXTURE_2D,1,$,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,$,Q.width,Q.height,0,ct,I,null));else if(v.isDataTexture)if(ht.length>0){at&&lt&&e.texStorage2D(i.TEXTURE_2D,Ht,$,ht[0].width,ht[0].height);for(let rt=0,It=ht.length;rt<It;rt++)J=ht[rt],at?wt&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,J.width,J.height,ct,I,J.data):e.texImage2D(i.TEXTURE_2D,rt,$,J.width,J.height,0,ct,I,J.data);v.generateMipmaps=!1}else at?(lt&&e.texStorage2D(i.TEXTURE_2D,Ht,$,Q.width,Q.height),wt&&kt(v,Q,ct,I)):e.texImage2D(i.TEXTURE_2D,0,$,Q.width,Q.height,0,ct,I,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){at&&lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ht,$,ht[0].width,ht[0].height,Q.depth);for(let rt=0,It=ht.length;rt<It;rt++)if(J=ht[rt],v.format!==un)if(ct!==null)if(at){if(wt)if(v.layerUpdates.size>0){let zt=Tl(J.width,J.height,v.format,v.type);for(let xt of v.layerUpdates){let se=J.data.subarray(xt*zt/J.data.BYTES_PER_ELEMENT,(xt+1)*zt/J.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,xt,J.width,J.height,1,ct,se)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,J.width,J.height,Q.depth,ct,J.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,$,J.width,J.height,Q.depth,0,J.data,0,0);else Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?wt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,J.width,J.height,Q.depth,ct,I,J.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,$,J.width,J.height,Q.depth,0,ct,I,J.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{at&&lt&&e.texStorage2D(i.TEXTURE_2D,Ht,$,ht[0].width,ht[0].height);for(let rt=0,It=ht.length;rt<It;rt++)J=ht[rt],v.format!==un?ct!==null?at?wt&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,J.width,J.height,ct,J.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,$,J.width,J.height,0,J.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?wt&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,J.width,J.height,ct,I,J.data):e.texImage2D(i.TEXTURE_2D,rt,$,J.width,J.height,0,ct,I,J.data)}else if(v.isDataArrayTexture)if(at){if(lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ht,$,Q.width,Q.height,Q.depth),wt)if(v.layerUpdates.size>0){let rt=Tl(Q.width,Q.height,v.format,v.type);for(let It of v.layerUpdates){let zt=Q.data.subarray(It*rt/Q.data.BYTES_PER_ELEMENT,(It+1)*rt/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,It,Q.width,Q.height,1,ct,I,zt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ct,I,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,$,Q.width,Q.height,Q.depth,0,ct,I,Q.data);else if(v.isData3DTexture)at?(lt&&e.texStorage3D(i.TEXTURE_3D,Ht,$,Q.width,Q.height,Q.depth),wt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ct,I,Q.data)):e.texImage3D(i.TEXTURE_3D,0,$,Q.width,Q.height,Q.depth,0,ct,I,Q.data);else if(v.isFramebufferTexture){if(lt)if(at)e.texStorage2D(i.TEXTURE_2D,Ht,$,Q.width,Q.height);else{let rt=Q.width,It=Q.height;for(let zt=0;zt<Ht;zt++)e.texImage2D(i.TEXTURE_2D,zt,$,rt,It,0,ct,I,null),rt>>=1,It>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let rt=i.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),Q.parentNode!==rt){rt.appendChild(Q),d.add(v),rt.onpaint=It=>{let zt=It.changedElements;for(let xt of d)zt.includes(xt.image)&&(xt.needsUpdate=!0)},rt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let zt=i.RGBA,xt=i.RGBA,se=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,zt,xt,se,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ht.length>0){if(at&&lt){let rt=Ot(ht[0]);e.texStorage2D(i.TEXTURE_2D,Ht,$,rt.width,rt.height)}for(let rt=0,It=ht.length;rt<It;rt++)J=ht[rt],at?wt&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,ct,I,J):e.texImage2D(i.TEXTURE_2D,rt,$,ct,I,J);v.generateMipmaps=!1}else if(at){if(lt){let rt=Ot(Q);e.texStorage2D(i.TEXTURE_2D,Ht,$,rt.width,rt.height)}wt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,I,Q)}else e.texImage2D(i.TEXTURE_2D,0,$,ct,I,Q);E(v)&&v.mipmapsAutoUpdate===!0&&y(it),ft.__version=ot.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function le(w,v,O){if(v.image.length!==6)return;let it=Dt(w,v),tt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+O);let ot=n.get(tt);if(tt.version!==ot.__version||it===!0){e.activeTexture(i.TEXTURE0+O);let ft=Jt.getPrimaries(Jt.workingColorSpace),j=v.colorSpace===Bn?null:Jt.getPrimaries(v.colorSpace),Q=v.colorSpace===Bn||ft===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let ct=v.isCompressedTexture||v.image[0].isCompressedTexture,I=v.image[0]&&v.image[0].isDataTexture,$=[];for(let xt=0;xt<6;xt++)!ct&&!I?$[xt]=x(v.image[xt],!0,s.maxCubemapSize):$[xt]=I?v.image[xt].image:v.image[xt],$[xt]=Ut(v,$[xt]);let J=$[0],ht=r.convert(v.format,v.colorSpace),at=r.convert(v.type),lt=T(v.internalFormat,ht,at,v.normalized,v.colorSpace),wt=v.isVideoTexture!==!0,Ht=ot.__version===void 0||it===!0,rt=tt.dataReady,It=M(v,J);Qt(i.TEXTURE_CUBE_MAP,v);let zt;if(v.isDepthTexture){if(lt=g(v.format===Ln,v.type),Ht)if(wt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,lt,J.width,J.height);else for(let xt=0;xt<6;xt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,lt,J.width,J.height,0,ht,at,null)}else if(ct){wt&&Ht&&e.texStorage2D(i.TEXTURE_CUBE_MAP,It,lt,J.width,J.height);for(let xt=0;xt<6;xt++){zt=$[xt].mipmaps;for(let se=0;se<zt.length;se++){let Se=zt[se];v.format!==un?ht!==null?wt?rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,se,0,0,Se.width,Se.height,ht,Se.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,se,lt,Se.width,Se.height,0,Se.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):wt?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,se,0,0,Se.width,Se.height,ht,at,Se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,se,lt,Se.width,Se.height,0,ht,at,Se.data)}}}else{if(zt=v.mipmaps,wt&&Ht){zt.length>0&&It++;let xt=Ot($[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,It,lt,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(I){wt?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,$[xt].width,$[xt].height,ht,at,$[xt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,lt,$[xt].width,$[xt].height,0,ht,at,$[xt].data);for(let se=0;se<zt.length;se++){let On=zt[se].image[xt].image;wt?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,se+1,0,0,On.width,On.height,ht,at,On.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,se+1,lt,On.width,On.height,0,ht,at,On.data)}}else{wt?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,ht,at,$[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,lt,ht,at,$[xt]);for(let se=0;se<zt.length;se++){let Se=zt[se];wt?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,se+1,0,0,ht,at,Se.image[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,se+1,lt,ht,at,Se.image[xt])}}}E(v)&&v.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),ot.__version=tt.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Kt(w,v,O,it,tt,ot){let ft=r.convert(O.format,O.colorSpace),j=r.convert(O.type),Q=T(O.internalFormat,ft,j,O.normalized,O.colorSpace),ct=n.get(v),I=n.get(O);if(I.__renderTarget=v,!ct.__hasExternalTextures){let $=Math.max(1,v.width>>ot),J=Math.max(1,v.height>>ot);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,ot,Q,$,J,v.depth,0,ft,j,null):e.texImage2D(tt,ot,Q,$,J,0,ft,j,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),gt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,tt,I.__webglTexture,0,he(v)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,tt,I.__webglTexture,ot),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(w,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),v.depthBuffer){let it=v.depthTexture,tt=it&&it.isDepthTexture?it.type:null,ot=g(v.stencilBuffer,tt),ft=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;gt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he(v),ot,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,he(v),ot,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ot,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,w)}else{let it=v.textures;for(let tt=0;tt<it.length;tt++){let ot=it[tt],ft=r.convert(ot.format,ot.colorSpace),j=r.convert(ot.type),Q=T(ot.internalFormat,ft,j,ot.normalized,ot.colorSpace);gt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he(v),Q,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,he(v),Q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Q,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function $t(w,v,O){let it=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=n.get(v.depthTexture);tt.__renderTarget=v;let ot=it?v.depthTexture.image[0]:v.depthTexture.image;(!tt.__webglTexture||ot.width!==v.width||ot.height!==v.height)&&(ot.width=v.width,ot.height=v.height,v.depthTexture.needsUpdate=!0),it?ut(v.depthTexture,0):st(v.depthTexture,0);let ft=tt.__webglTexture,j=he(v),Q=it?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,ct=v.depthTexture.format===Ln?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Un)gt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,Q,ft,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,ct,Q,ft,0);else if(v.depthTexture.format===Ln)gt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,Q,ft,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,ct,Q,ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function fe(w){let v=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){let it=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),it){let tt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,it.removeEventListener("dispose",tt)};it.addEventListener("dispose",tt),v.__depthDisposeCallback=tt}v.__boundDepthTexture=it}if(w.depthTexture&&!v.__autoAllocateDepthBuffer)if(O)for(let it=0;it<6;it++)$t(v.__webglFramebuffer[it],w,it);else w.texture.mipmaps.length>0?$t(v.__webglFramebuffer[0],w,0):$t(v.__webglFramebuffer,w,0);else if(O){v.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[it]),v.__webglDepthbuffer[it]===void 0)v.__webglDepthbuffer[it]=i.createRenderbuffer(),Nt(v.__webglDepthbuffer[it],w,!1);else{let tt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=v.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,ot)}}else if(w.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Nt(v.__webglDepthbuffer,w,!1);else{let tt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,ot)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(w,v,O){let it=n.get(w);v!==void 0&&Kt(it.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&fe(w)}function ze(w){let v=w.texture,O=n.get(w),it=n.get(v);w.addEventListener("dispose",L),U(w);let tt=w.textures,ot=w.isWebGLCubeRenderTarget===!0,ft=tt.length>1;if(ft||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=v.version,a.memory.textures++),ot){O.__webglFramebuffer=[];for(let j=0;j<6;j++)if(v.mipmaps.length>0){O.__webglFramebuffer[j]=[];for(let Q=0;Q<v.mipmaps.length;Q++)O.__webglFramebuffer[j][Q]=i.createFramebuffer()}else O.__webglFramebuffer[j]=i.createFramebuffer()}else{if(v.mipmaps.length>0){O.__webglFramebuffer=[];for(let j=0;j<v.mipmaps.length;j++)O.__webglFramebuffer[j]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ft)for(let j=0,Q=tt.length;j<Q;j++){let ct=n.get(tt[j]);ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&gt(w)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let j=0;j<tt.length;j++){let Q=tt[j];O.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[j]);let ct=r.convert(Q.format,Q.colorSpace),I=r.convert(Q.type),$=T(Q.internalFormat,ct,I,Q.normalized,Q.colorSpace,w.isXRRenderTarget===!0),J=he(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,J,$,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,O.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Nt(O.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),Qt(i.TEXTURE_CUBE_MAP,v);for(let j=0;j<6;j++)if(v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)Kt(O.__webglFramebuffer[j][Q],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Q);else Kt(O.__webglFramebuffer[j],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);E(v)?y(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}else if(ft){for(let j=0,Q=tt.length;j<Q;j++){let ct=tt[j],I=n.get(ct),$=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&($=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,I.__webglTexture),Qt($,ct),Kt(O.__webglFramebuffer,w,ct,i.COLOR_ATTACHMENT0+j,$,0),E(ct)&&y($)}e.unbindTexture()}else{let j=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(j=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(j,it.__webglTexture),Qt(j,v),v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)Kt(O.__webglFramebuffer[Q],w,v,i.COLOR_ATTACHMENT0,j,Q);else Kt(O.__webglFramebuffer,w,v,i.COLOR_ATTACHMENT0,j,0);E(v)?y(j):v.mipmaps.length>0&&i.texParameteri(j,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}w.depthBuffer&&fe(w)}function D(w){let v=w.textures;for(let O=0,it=v.length;O<it;O++){let tt=v[O];if(E(tt)&&tt.mipmapsAutoUpdate===!0){let ot=A(w),ft=n.get(tt).__webglTexture;e.bindTexture(ot,ft),y(ot),e.unbindTexture()}}}let De=[];function re(w){if(w.samples>0){if(gt(w)===!1){let v=w.textures,O=w.width,it=w.height,tt=i.COLOR_BUFFER_BIT,ot=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(w),j=v.length>1;if(j)for(let ct=0;ct<v.length;ct++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let ct=0;ct<v.length;ct++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[ct]);let I=n.get(v[ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,I,0)}i.blitFramebuffer(0,0,O,it,0,0,O,it,tt,i.NEAREST),l===!0&&(De.length=0,De.push(i.COLOR_ATTACHMENT0+ct),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&De.push(ot),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,De))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let ct=0;ct<v.length;ct++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,ft.__webglColorRenderbuffer[ct]);let I=n.get(v[ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,I,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let v=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function he(w){return Math.min(s.maxSamples,w.samples)}function gt(w){let v=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ge(w){let v=a.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function Ut(w,v){let O=w.colorSpace,it=w.format,tt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==rs&&O!==Bn&&(Jt.getTransfer(O)===ie?(it!==un||tt!==He)&&Ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",O)),v}function Ot(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=mt,this.resetTextureUnits=K,this.getTextureUnits=et,this.setTextureUnits=q,this.setTexture2D=st,this.setTexture2DArray=St,this.setTexture3D=At,this.setTextureCube=ut,this.rebindTextures=ke,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=Kt,this.useMultisampledRTT=gt,this.dispose=z}function Qg(i,t){function e(n,s=Bn){let r,a=Jt.getTransfer(s);if(n===He)return i.UNSIGNED_BYTE;if(n===xa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_a)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ul)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===dl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===cl)return i.BYTE;if(n===hl)return i.SHORT;if(n===Gi)return i.UNSIGNED_SHORT;if(n===ga)return i.INT;if(n===cn)return i.UNSIGNED_INT;if(n===tn)return i.FLOAT;if(n===hn)return i.HALF_FLOAT;if(n===fl)return i.ALPHA;if(n===pl)return i.RGB;if(n===un)return i.RGBA;if(n===Un)return i.DEPTH_COMPONENT;if(n===Ln)return i.DEPTH_STENCIL;if(n===ya)return i.RED;if(n===Sa)return i.RED_INTEGER;if(n===Kn)return i.RG;if(n===va)return i.RG_INTEGER;if(n===Ma)return i.RGBA_INTEGER;if(n===Fs||n===Ds||n===Ls||n===Bs)if(a===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Bs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ba||n===Ea||n===Ta||n===Aa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ba)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wa||n===Ra||n===Ia||n===Ca||n===Ua||n===Os||n===Na)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wa||n===Ra)return a===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ia)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ca)return r.COMPRESSED_R11_EAC;if(n===Ua)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Os)return r.COMPRESSED_RG11_EAC;if(n===Na)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Pa||n===Fa||n===Da||n===La||n===Ba||n===Oa||n===Va||n===ka||n===za||n===Ga||n===Ha||n===Wa||n===Za||n===Ya)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Pa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Da)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===La)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ba)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Va)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ka)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===za)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ga)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ha)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Za)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ya)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xa||n===Ja||n===qa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Xa)return a===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ja)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ja||n===Qa||n===Vs||n===Ka)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ja)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ka)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Kg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$g=`
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

}`,Fl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ss(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new yn({vertexShader:Kg,fragmentShader:$g,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pe(new bs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dl=class extends mn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,_=null,S=typeof XRWebGLBinding<"u",p=new Fl,m={},x=e.getContextAttributes(),E=null,y=null,A=[],T=[],g=new Tt,M=null,U=null,R=new Be;R.viewport=new ue;let F=new Be;F.viewport=new ue;let L=[R,F],G=new ua,C=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let st=A[k];return st===void 0&&(st=new Di,A[k]=st),st.getTargetRaySpace()},this.getControllerGrip=function(k){let st=A[k];return st===void 0&&(st=new Di,A[k]=st),st.getGripSpace()},this.getHand=function(k){let st=A[k];return st===void 0&&(st=new Di,A[k]=st),st.getHandSpace()};function Z(k){let st=T.indexOf(k.inputSource);if(st===-1)return;let St=A[st];St!==void 0&&(St.update(k.inputSource,k.frame,c||a),St.dispatchEvent({type:k.type,data:k.inputSource}))}function H(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",nt);for(let k=0;k<A.length;k++){let st=T[k];st!==null&&(T[k]=null,A[k].disconnect(st))}C=null,z=null,p.reset();for(let k in m)delete m[k];if(t.setRenderTarget(E),f=null,u=null,d=null,s=null,y=null,mt.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(g.width,g.height,!1),U!==null){let k=U.camera;k.fov=U.fov,k.zoom=U.zoom,k.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&Ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&Ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",H),s.addEventListener("inputsourceschange",nt),x.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(g),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,At=null,ut=null;x.depth&&(ut=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=x.stencil?Ln:Un,At=x.stencil?pi:cn);let Ft={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ft),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Ye(u.textureWidth,u.textureHeight,{format:un,type:He,depthTexture:new Pn(u.textureWidth,u.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let St={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,St),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ye(f.framebufferWidth,f.framebufferHeight,{format:un,type:He,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),mt.setContext(s),mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function nt(k){for(let st=0;st<k.removed.length;st++){let St=k.removed[st],At=T.indexOf(St);At>=0&&(T[At]=null,A[At].disconnect(St))}for(let st=0;st<k.added.length;st++){let St=k.added[st],At=T.indexOf(St);if(At===-1){for(let Ft=0;Ft<A.length;Ft++)if(Ft>=T.length){T.push(St),At=Ft;break}else if(T[Ft]===null){T[Ft]=St,At=Ft;break}if(At===-1)break}let ut=A[At];ut&&ut.connect(St)}}function Y(k,st){st===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(st.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;let st=k.near,St=k.far;p.texture!==null&&(p.depthNear>0&&(st=p.depthNear),p.depthFar>0&&(St=p.depthFar)),G.near=F.near=R.near=st,G.far=F.far=R.far=St,(C!==G.near||z!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),C=G.near,z=G.far),G.layers.mask=k.layers.mask|6,R.layers.mask=G.layers.mask&-5,F.layers.mask=G.layers.mask&-3;let At=k.parent,ut=G.cameras;Y(G,At);for(let Ft=0;Ft<ut.length;Ft++)Y(ut[Ft],At);G.projectionMatrix.copy(R.projectionMatrix),G.projectionMatrixInverse.copy(R.projectionMatrixInverse),U===null&&k.isPerspectiveCamera&&(U={camera:k,fov:k.fov,zoom:k.zoom}),K(k,G,At)};function K(k,st,St){St===null?k.matrix.copy(st.matrixWorld):(k.matrix.copy(St.matrixWorld),k.matrix.invert(),k.matrix.multiply(st.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(st.projectionMatrix),k.projectionMatrixInverse.copy(st.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Fr*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(k){l=k,u!==null&&(u.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(G)},this.getCameraTexture=function(k){return m[k]};let et=null;function q(k,st){if(h=st.getViewerPose(c||a),_=st,h!==null){let St=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let At=!1;St.length!==G.cameras.length&&(G.cameras.length=0,At=!0);for(let Rt=0;Rt<St.length;Rt++){let Qt=St[Rt],Dt=null;if(f!==null)Dt=f.getViewport(Qt);else{let kt=d.getViewSubImage(u,Qt);Dt=kt.viewport,Rt===0&&(t.setRenderTargetTextures(y,kt.colorTexture,kt.depthStencilTexture),t.setRenderTarget(y))}let X=L[Rt];X===void 0&&(X=new Be,X.layers.enable(Rt),X.viewport=new ue,L[Rt]=X),X.matrix.fromArray(Qt.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(Qt.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),Rt===0&&(G.matrix.copy(X.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),At===!0&&G.cameras.push(X)}let ut=s.enabledFeatures;if(ut&&ut.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=n.getBinding();let Rt=d.getDepthInformation(St[0]);Rt&&Rt.isValid&&Rt.texture&&p.init(Rt,s.renderState)}if(ut&&ut.includes("camera-access")&&S){t.state.unbindTexture(),d=n.getBinding();for(let Rt=0;Rt<St.length;Rt++){let Qt=St[Rt].camera;if(Qt){let Dt=m[Qt];Dt||(Dt=new Ss,m[Qt]=Dt);let X=d.getCameraImage(Qt);Dt.sourceTexture=X}}}}for(let St=0;St<A.length;St++){let At=T[St],ut=A[St];At!==null&&ut!==void 0&&ut.update(At,st,c||a)}et&&et(k,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),_=null}let mt=new Vh;mt.setAnimationLoop(q),this.setAnimationLoop=function(k){et=k},this.dispose=function(){}}},t0=new qt,qh=new Bt;qh.set(-1,0,0,0,1,0,0,0,1);function e0(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Ml(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,x,E,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),S(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,x,E):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ve&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ve&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let x=t.get(m),E=x.envMap,y=x.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(t0.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(qh),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,x,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=E*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,x){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ve&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function S(p,m){let x=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function n0(i,t,e,n){let s={},r={};function a(x,E){let y=E.program;n.uniformBlockBinding(x,y,s[x.id])}function o(x,E){let y=s[x.id];y===void 0&&(_(x),y=l(x),s[x.id]=y,x.addEventListener("dispose",p));let A=E.program;n.updateUBOMapping(x,A);let T=t.render.frame;r[x.id]!==T&&(c(x),r[x.id]=T)}function l(x){let E=i.createBuffer(),y=x.__size,A=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,y,A),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function c(x){let E=s[x.id],y=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,g=y.length;T<g;T++){let M=y[T];if(Array.isArray(M))for(let U=0,R=M.length;U<R;U++)h(M[U],T,U,A);else h(M,T,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(x,E,y,A){if(u(x,E,y,A)===!0){let T=x.__offset,g=x.value;if(Array.isArray(g)){let M=0;for(let U=0;U<g.length;U++){let R=g[U],F=S(R,!0);d(R,x.__data,M),M+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else d(g,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,x.__data)}}function d(x,E,y){typeof x=="number"||typeof x=="boolean"?E[y]=x:x.isMatrix3?(E[y]=x.elements[0],E[y+1]=x.elements[1],E[y+2]=x.elements[2],E[y+3]=0,E[y+4]=x.elements[3],E[y+5]=x.elements[4],E[y+6]=x.elements[5],E[y+7]=0,E[y+8]=x.elements[6],E[y+9]=x.elements[7],E[y+10]=x.elements[8],E[y+11]=0):ArrayBuffer.isView(x)?E.set(x.subarray(0,E.length-y),y):x.toArray(E,y)}function u(x,E,y,A){let T=x.value,g=E+"_"+y;if(Array.isArray(T)){A[g]===void 0&&(A[g]=[]);let M=A[g],U=!1;for(let R=0;R<T.length;R++)f(T[R],M,R)===!0&&(U=!0);return U}return f(T,A,g)}function f(x,E,y){if(E[y]===void 0)return typeof x=="number"||typeof x=="boolean"?E[y]=x:ArrayBuffer.isView(x)?E[y]=x.slice():E[y]=x.clone(),!0;{let A=E[y];if(typeof x=="number"||typeof x=="boolean"){if(A!==x)return E[y]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(A.equals(x)===!1)return A.copy(x),!0}}return!1}function _(x){let E=x.uniforms,y=0,A=16;for(let g=0,M=E.length;g<M;g++){let U=Array.isArray(E[g])?E[g]:[E[g]];for(let R=0,F=U.length;R<F;R++){let L=U[R],G=Array.isArray(L.value)?L.value:[L.value],C=Array.isArray(E[g])||Array.isArray(L.value),z=y;for(let H=0,nt=G.length;H<nt;H++){let Y=G[H],K=S(Y,C),et=y%A,q=et%K.boundary,mt=et+q;y+=q,mt!==0&&A-mt<K.storage&&(y+=A-mt),H===0&&(z=y),y+=K.storage}let Z=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new Z((y-z)/Float32Array.BYTES_PER_ELEMENT),L.__offset=z}}let T=y%A;return T>0&&(y+=A-T),x.__size=y,x.__cache={},this}function S(x,E){let y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=16,y.storage=48):x.isMatrix4?(y.boundary=16,y.storage=64):x.isTexture?Ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(y.boundary=16,y.storage=x.byteLength):Ct("WebGLRenderer: Unsupported uniform value type.",x),E===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(x){let E=x.target;E.removeEventListener("dispose",p),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(let x in s)i.deleteBuffer(s[x]);s={},r={}}return{bind:a,update:o,dispose:m}}var i0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vn=null;function s0(){return vn===null&&(vn=new ms(i0,16,16,Kn,hn),vn.name="DFG_LUT",vn.minFilter=Oe,vn.magFilter=Oe,vn.wrapS=pn,vn.wrapT=pn,vn.generateMipmaps=!1,vn.needsUpdate=!0),vn}var no=class{constructor(t={}){let{canvas:e=ch(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=He}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let S=f,p=new Set([Ma,va,Sa]),m=new Set([He,cn,Gi,pi,xa,_a]),x=new Uint32Array(4),E=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},A=null,T=null,g=[],M=[],U=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,F=!1,L=null,G=null,C=null,z=null;this._outputColorSpace=Ue;let Z=0,H=0,nt=null,Y=-1,K=null,et=new ue,q=new ue,mt=null,k=new Pt(0),st=0,St=e.width,At=e.height,ut=1,Ft=null,Gt=null,Rt=new ue(0,0,St,At),Qt=new ue(0,0,St,At),Dt=!1,X=new Xn,kt=new Or,jt=!1,le=!1,Kt=new qt,Nt=new P,$t=new ue,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ke=!1;function ze(){return nt===null?ut:1}let D=n;function De(b,N){return e.getContext(b,N)}let re,he,gt,ge,Ut,Ot,w,v,O,it,tt,ot,ft,j,Q,ct,I,$,J,ht,at,lt,wt;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",It,!1),e.addEventListener("webglcontextrestored",zt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),D===null){let N="webgl2";if(D=De(N,b),D===null)throw De(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ht()}catch(b){throw e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",zt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),Lt("WebGLRenderer: "+b.message),b}function Ht(){re=new mm(D),re.init(),at=new Qg(D,re),he=new sm(D,re,t,at),gt=new qg(D,re),he.reversedDepthBuffer&&u&&gt.buffers.depth.setReversed(!0),G=D.createFramebuffer(),C=D.createFramebuffer(),z=D.createFramebuffer(),ge=new _m(D),Ut=new Dg,Ot=new jg(D,re,gt,Ut,he,at,ge),w=new pm(R),v=new yd(D),lt=new nm(D,v),O=new gm(D,v,ge,lt),it=new Sm(D,O,v,lt,ge),$=new ym(D,he,Ot),Q=new rm(Ut),tt=new Fg(R,w,re,he,lt,Q),ot=new e0(R,Ut),ft=new Bg,j=new Hg(re),I=new em(R,w,gt,it,_,l),ct=new Jg(R,it,he),wt=new n0(D,ge,he,gt),J=new im(D,re,ge),ht=new xm(D,re,ge),ge.programs=tt.programs,R.capabilities=he,R.extensions=re,R.properties=Ut,R.renderLists=ft,R.shadowMap=ct,R.state=gt,R.info=ge}S!==He&&(U=new Mm(S,e.width,e.height,o,s,r));let rt=new Dl(R,D);this.xr=rt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let b=re.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=re.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ut},this.setPixelRatio=function(b){b!==void 0&&(ut=b,this.setSize(St,At,!1))},this.getSize=function(b){return b.set(St,At)},this.setSize=function(b,N,W=!0){if(rt.isPresenting){Ct("WebGLRenderer: Can't change size while VR device is presenting.");return}St=b,At=N,e.width=Math.floor(b*ut),e.height=Math.floor(N*ut),W===!0&&(e.style.width=b+"px",e.style.height=N+"px"),U!==null&&U.setSize(e.width,e.height),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(St*ut,At*ut).floor()},this.setDrawingBufferSize=function(b,N,W){St=b,At=N,ut=W,e.width=Math.floor(b*W),e.height=Math.floor(N*W),this.setViewport(0,0,b,N)},this.setEffects=function(b){if(S===He){Lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let N=0;N<b.length;N++)if(b[N].isOutputPass===!0){Ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(et)},this.getViewport=function(b){return b.copy(Rt)},this.setViewport=function(b,N,W,B){b.isVector4?Rt.set(b.x,b.y,b.z,b.w):Rt.set(b,N,W,B),gt.viewport(et.copy(Rt).multiplyScalar(ze()).round())},this.getScissor=function(b){return b.copy(Qt)},this.setScissor=function(b,N,W,B){b.isVector4?Qt.set(b.x,b.y,b.z,b.w):Qt.set(b,N,W,B),gt.scissor(q.copy(Qt).multiplyScalar(ze()).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(b){gt.setScissorTest(Dt=b)},this.setOpaqueSort=function(b){Ft=b},this.setTransparentSort=function(b){Gt=b},this.getClearColor=function(b){return b.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(b=!0,N=!0,W=!0){let B=0;if(b){let V=!1;if(nt!==null){let pt=nt.texture.format;V=p.has(pt)}if(V){let pt=nt.texture.type,vt=m.has(pt),dt=I.getClearColor(),yt=I.getClearAlpha(),Et=dt.r,Vt=dt.g,Yt=dt.b;vt?(x[0]=Et,x[1]=Vt,x[2]=Yt,x[3]=yt,D.clearBufferuiv(D.COLOR,0,x)):(E[0]=Et,E[1]=Vt,E[2]=Yt,E[3]=yt,D.clearBufferiv(D.COLOR,0,E))}else B|=D.COLOR_BUFFER_BIT}N&&(B|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),L=b},this.dispose=function(){e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",zt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),I.dispose(),ft.dispose(),j.dispose(),Ot.dispose(),Ut.dispose(),w.dispose(),it.dispose(),O.dispose(),lt.dispose(),wt.dispose(),tt.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Gl),rt.removeEventListener("sessionend",Hl),ti.stop()};function It(b){b.preventDefault(),yl("WebGLRenderer: Context Lost."),F=!0}function zt(){yl("WebGLRenderer: Context Restored."),F=!1;let b=ge.autoReset,N=ct.enabled,W=ct.autoUpdate,B=ct.needsUpdate,V=ct.type;Ht(),ge.autoReset=b,ct.enabled=N,ct.autoUpdate=W,ct.needsUpdate=B,ct.type=V}function xt(b){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function se(b){let N=b.target;N.removeEventListener("dispose",se),Se(N)}function Se(b){On(b),Ut.remove(b)}function On(b){let N=Ut.get(b).programs;N!==void 0&&(N.forEach(function(W){tt.releaseProgram(W)}),b.isShaderMaterial&&tt.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,W,B,V,pt){N===null&&(N=fe);let vt=V.isMesh&&V.matrixWorld.determinantAffine()<0,dt=pu(b,N,W,B,V);gt.setMaterial(B,vt);let yt=W.index,Et=1;if(B.wireframe===!0){if(yt=O.getWireframeAttribute(W),yt===void 0)return;Et=2}let Vt=W.drawRange,Yt=W.attributes.position,Mt=Vt.start*Et,Xt=(Vt.start+Vt.count)*Et;pt!==null&&(Mt=Math.max(Mt,pt.start*Et),Xt=Math.min(Xt,(pt.start+pt.count)*Et)),yt!==null?(Mt=Math.max(Mt,0),Xt=Math.min(Xt,yt.count)):Yt!=null&&(Mt=Math.max(Mt,0),Xt=Math.min(Xt,Yt.count));let pe=Xt-Mt;if(pe<0||pe===1/0)return;lt.setup(V,B,dt,W,yt);let oe,ae=J;if(yt!==null&&(oe=v.get(yt),ae=ht,ae.setIndex(oe)),V.isMesh)B.wireframe===!0?(gt.setLineWidth(B.wireframeLinewidth*ze()),ae.setMode(D.LINES)):ae.setMode(D.TRIANGLES);else if(V.isLine){let we=B.linewidth;we===void 0&&(we=1),gt.setLineWidth(we*ze()),V.isLineSegments?ae.setMode(D.LINES):V.isLineLoop?ae.setMode(D.LINE_LOOP):ae.setMode(D.LINE_STRIP)}else V.isPoints?ae.setMode(D.POINTS):V.isSprite&&ae.setMode(D.TRIANGLES);if(V.isBatchedMesh)if(re.get("WEBGL_multi_draw"))ae.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let we=V._multiDrawStarts,bt=V._multiDrawCounts,Le=V._multiDrawCount,ee=yt?v.get(yt).bytesPerElement:1,ei=Ut.get(B).currentProgram.getUniforms();for(let Re=0;Re<Le;Re++)ei.setValue(D,"_gl_DrawID",Re),ae.render(we[Re]/ee,bt[Re])}else if(V.isInstancedMesh)ae.renderInstances(Mt,pe,V.count);else if(W.isInstancedBufferGeometry){let we=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,bt=Math.min(W.instanceCount,we);ae.renderInstances(Mt,pe,bt)}else ae.render(Mt,pe)};function zl(b,N,W,B){L!==null&&b.isNodeMaterial&&L.setObject(B,b),jt===!0&&Q.setState(b,W,!1),b.transparent===!0&&b.side===$e&&b.forceSinglePass===!1?(b.side=Ve,b.needsUpdate=!0,Yi(b,N,B),b.side=Qn,b.needsUpdate=!0,Yi(b,N,B),b.side=$e):Yi(b,N,B)}this.compile=function(b,N,W=null){W===null&&(W=b),L!==null&&L.renderStart(b,N,W),T=j.get(W),T.init(N),M.push(T),W.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),b!==W&&b.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),T.setupLights(),L!==null&&L.updateLights(T.state.lightsArray),le=this.localClippingEnabled,jt=Q.init(this.clippingPlanes,le),jt===!0&&Q.setGlobalState(this.clippingPlanes,N),L!==null&&ct.render(T.state.shadowsArray,W,N);let B=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let pt=V.material;if(pt)if(Array.isArray(pt))for(let vt=0;vt<pt.length;vt++){let dt=pt[vt];zl(dt,W,N,V),B.add(dt)}else zl(pt,W,N,V),B.add(pt)}),T=M.pop(),L!==null&&L.renderEnd(),B},this.compileAsync=function(b,N,W=null){let B=this.compile(b,N,W);return new Promise(V=>{function pt(){if(B.forEach(function(vt){let yt=Ut.get(vt).currentProgram;(yt===void 0||yt.isReady())&&B.delete(vt)}),B.size===0){V(b);return}setTimeout(pt,10)}re.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let ho=null;function du(b){ho&&ho(b)}function Gl(){ti.stop()}function Hl(){ti.start()}let ti=new Vh;ti.setAnimationLoop(du),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(b){ho=b,rt.setAnimationLoop(b),b===null?ti.stop():ti.start()},rt.addEventListener("sessionstart",Gl),rt.addEventListener("sessionend",Hl),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;L!==null&&L.renderStart(b,N);let W=rt.enabled===!0&&rt.isPresenting===!0,B=U!==null&&(nt===null||W)&&U.begin(R,nt);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(N),N=rt.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,N,nt),T=j.get(b,M.length),T.init(N),T.state.textureUnits=Ot.getTextureUnits(),M.push(T),Kt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?kt.setFromArrayCamera(N):X.setFromProjectionMatrix(Kt,qe,N.reversedDepth),le=this.localClippingEnabled,jt=Q.init(this.clippingPlanes,le),A=ft.get(b,g.length),A.init(),g.push(A),this.info.render.frame++,rt.enabled===!0&&rt.isPresenting===!0){let vt=R.xr.getDepthSensingMesh();vt!==null&&uo(vt,N,-1/0,R.sortObjects)}uo(b,N,0,R.sortObjects),A.finish(),L!==null&&L.updateLights(T.state.lightsArray),R.sortObjects===!0&&A.sort(Ft,Gt),ke=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,ke&&I.addToRenderList(A,b),this.info.autoReset===!0&&this.info.reset(),jt===!0&&Q.beginShadows();let V=T.state.shadowsArray;if(ct.render(V,b,N),jt===!0&&Q.endShadows(),(B&&U.hasRenderPass())===!1){let vt=A.opaque,dt=A.transmissive;if(T.setupLights(),N.isArrayCamera){let yt=N.cameras;if(dt.length>0)for(let Et=0,Vt=yt.length;Et<Vt;Et++){let Yt=yt[Et];Zl(vt,dt,b,Yt)}ke&&I.render(b);for(let Et=0,Vt=yt.length;Et<Vt;Et++){let Yt=yt[Et];Wl(A,b,Yt,Yt.viewport)}}else dt.length>0&&Zl(vt,dt,b,N),ke&&I.render(b),Wl(A,b,N)}nt!==null&&H===0&&(Ot.updateMultisampleRenderTarget(nt),Ot.updateRenderTargetMipmap(nt)),B&&U.end(R),b.isScene===!0&&b.onAfterRender(R,b,N),lt.resetDefaultState(),Y=-1,K=null,M.pop(),M.length>0?(T=M[M.length-1],Ot.setTextureUnits(T.state.textureUnits),jt===!0&&Q.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,g.pop(),g.length>0?A=g[g.length-1]:A=null,L!==null&&L.renderEnd()};function uo(b,N,W,B){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){let vt=N.isArrayCamera?kt:X;if(!b.frustumCulled||b.intersectsFrustum(vt)){B&&$t.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Kt);let dt=it.update(b),yt=b.material;yt.visible&&A.push(b,dt,yt,W,$t.z,null,N)}}else if(b.isMesh||b.isLine||b.isPoints){let vt=N.isArrayCamera?kt:X;if(!b.frustumCulled||b.intersectsFrustum(vt)){let dt=it.update(b),yt=b.material;if(B&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),$t.copy(b.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),$t.copy(dt.boundingSphere.center)),$t.applyMatrix4(b.matrixWorld).applyMatrix4(Kt)),Array.isArray(yt)){let Et=dt.groups;for(let Vt=0,Yt=Et.length;Vt<Yt;Vt++){let Mt=Et[Vt],Xt=yt[Mt.materialIndex];Xt&&Xt.visible&&A.push(b,dt,Xt,W,$t.z,Mt,N)}}else yt.visible&&A.push(b,dt,yt,W,$t.z,null,N)}}}let pt=b.children;for(let vt=0,dt=pt.length;vt<dt;vt++)uo(pt[vt],N,W,B)}function Wl(b,N,W,B){let{opaque:V,transmissive:pt,transparent:vt}=b;T.setupLightsView(W),jt===!0&&Q.setGlobalState(R.clippingPlanes,W),B&&gt.viewport(et.copy(B)),V.length>0&&js(V,N,W),pt.length>0&&js(pt,N,W),vt.length>0&&js(vt,N,W),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function Zl(b,N,W,B){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[B.id]===void 0){let Mt=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[B.id]=new Ye(1,1,{generateMipmaps:!0,type:Mt?hn:He,minFilter:Dn,samples:Math.max(4,he.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}let pt=T.state.transmissionRenderTarget[B.id],vt=B.viewport||et;pt.setSize(vt.z*R.transmissionResolutionScale,vt.w*R.transmissionResolutionScale);let dt=R.getRenderTarget(),yt=R.getActiveCubeFace(),Et=R.getActiveMipmapLevel();R.setRenderTarget(pt),R.getClearColor(k),st=R.getClearAlpha(),st<1&&R.setClearColor(16777215,.5),R.clear(),ke&&I.render(W);let Vt=R.toneMapping;R.toneMapping=Sn;let Yt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),T.setupLightsView(B),jt===!0&&Q.setGlobalState(R.clippingPlanes,B),js(b,W,B),Ot.updateMultisampleRenderTarget(pt),Ot.updateRenderTargetMipmap(pt),re.has("WEBGL_multisampled_render_to_texture")===!1){let Mt=!1;for(let Xt=0,pe=N.length;Xt<pe;Xt++){let oe=N[Xt],{object:ae,geometry:we,material:bt,group:Le}=oe;if(bt.side===$e&&ae.layers.test(B.layers)){let ee=bt.side;bt.side=Ve,bt.needsUpdate=!0,Yl(ae,W,B,we,bt,Le),bt.side=ee,bt.needsUpdate=!0,Mt=!0}}Mt===!0&&(Ot.updateMultisampleRenderTarget(pt),Ot.updateRenderTargetMipmap(pt))}R.setRenderTarget(dt,yt,Et),R.setClearColor(k,st),Yt!==void 0&&(B.viewport=Yt),R.toneMapping=Vt}function js(b,N,W){let B=N.isScene===!0?N.overrideMaterial:null;for(let V=0,pt=b.length;V<pt;V++){let vt=b[V],{object:dt,geometry:yt,group:Et}=vt,Vt=vt.material;Vt.allowOverride===!0&&B!==null&&(Vt=B),dt.layers.test(W.layers)&&Yl(dt,N,W,yt,Vt,Et)}}function Yl(b,N,W,B,V,pt){L!==null&&V.isNodeMaterial&&L.setObject(b,V),b.onBeforeRender(R,N,W,B,V,pt),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(R,N,W,B,b,pt),V.transparent===!0&&V.side===$e&&V.forceSinglePass===!1?(V.side=Ve,V.needsUpdate=!0,R.renderBufferDirect(W,N,B,V,b,pt),V.side=Qn,V.needsUpdate=!0,R.renderBufferDirect(W,N,B,V,b,pt),V.side=$e):R.renderBufferDirect(W,N,B,V,b,pt),b.onAfterRender(R,N,W,B,V,pt)}function Xl(b){let N=0;for(let W of b)W.texture!==null&&N++;return N}function Yi(b,N,W){N.isScene!==!0&&(N=fe);let B=Ut.get(b),V=T.state.lights,pt=T.state.shadowsArray,vt=V.state.version,dt=tt.getParameters(b,V.state,pt,N,W,T.state.lightProbeGridArray),yt=tt.getProgramCacheKey(dt),Et=B.programs;B.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?N.environment:null,B.fog=N.fog;let Vt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;B.envMap=w.get(b.envMap||B.environment,Vt),B.envMapRotation=B.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Et===void 0&&(b.addEventListener("dispose",se),Et=new Map,B.programs=Et,B.programVariants=new Map);let Yt=Et.get(yt);if(Yt!==void 0){if(B.currentProgram===Yt&&B.lightsStateVersion===vt)return ql(b,dt),Yt}else dt.uniforms=tt.getUniforms(b),L!==null&&b.isNodeMaterial&&L.build(b,W,dt),b.onBeforeCompile(dt,R),Yt=tt.acquireProgram(dt,yt),Et.set(yt,Yt),B.uniforms=dt.uniforms;let Mt=B.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Mt.clippingPlanes=Q.uniform),ql(b,dt),B.needsLights=gu(b),B.lightsStateVersion=vt,B.needsLights&&(Mt.ambientLightColor.value=V.state.ambient,Mt.lightProbe.value=V.state.probe,Mt.sunLights.value=V.state.sun,Mt.sunLightShadows.value=V.state.sunShadow,Mt.directionalLights.value=V.state.directional,Mt.directionalLightShadows.value=V.state.directionalShadow,Mt.spotLights.value=V.state.spot,Mt.spotLightShadows.value=V.state.spotShadow,Mt.rectAreaLights.value=V.state.rectArea,Mt.ltc_1.value=V.state.rectAreaLTC1,Mt.ltc_2.value=V.state.rectAreaLTC2,Mt.pointLights.value=V.state.point,Mt.pointLightShadows.value=V.state.pointShadow,Mt.hemisphereLights.value=V.state.hemi,Mt.sunShadowMatrix.value=V.state.sunShadowMatrix,Mt.sunShadowCascade.value=V.state.sunShadowCascade,Mt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Mt.spotLightMatrix.value=V.state.spotLightMatrix,Mt.spotLightMap.value=V.state.spotLightMap,Mt.pointShadowMatrix.value=V.state.pointShadowMatrix),B.numLightProbeGrids=Xl(T.state.lightProbeGridArray),B.currentProgram=Yt,B.uniformsList=null,Yt}function fu(b,N,W,B,V){let pt=Ut.get(b),vt=pt.currentProgram.id+","+B+","+V,dt=pt.programVariants.get(vt);return dt===void 0?(dt=Yi(b,N,W),pt.programVariants.set(vt,dt)):(pt.currentProgram=dt,pt.uniformsList=null,pt.outputColorSpace=B,pt.toneMapping=V),dt}function Jl(b){if(b.uniformsList===null){let N=b.currentProgram.getUniforms();b.uniformsList=Hi.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function ql(b,N){let W=Ut.get(b);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function pu(b,N,W,B,V){N.isScene!==!0&&(N=fe),Ot.resetTextureUnits();let pt=N.fog,vt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?N.environment:null,dt=nt===null?R.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Jt.workingColorSpace,yt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Et=w.get(B.envMap||vt,yt),Vt=B.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Yt=!!W.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Mt=!!W.morphAttributes.position,Xt=!!W.morphAttributes.normal,pe=!!W.morphAttributes.color,oe=Sn;B.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(oe=R.toneMapping);let ae=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,we=ae!==void 0?ae.length:0,bt=Ut.get(B),Le=T.state.lights;if(jt===!0&&(le===!0||b!==K)){let de=b===K&&B.id===Y;Q.setState(B,b,de)}let ee=!1,ei=!1;B.version===bt.__version?bt.needsLights&&bt.lightsStateVersion!==Le.state.version||V.isBatchedMesh&&bt.batching===!1||!V.isBatchedMesh&&bt.batching===!0||V.isBatchedMesh&&bt.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&bt.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&bt.instancing===!1||!V.isInstancedMesh&&bt.instancing===!0||V.isSkinnedMesh&&bt.skinning===!1||!V.isSkinnedMesh&&bt.skinning===!0||V.isInstancedMesh&&bt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&bt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&bt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&bt.instancingMorph===!1&&V.morphTexture!==null||bt.envMap!==Et||B.fog===!0&&bt.fog!==pt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==Q.numPlanes||bt.numIntersection!==Q.numIntersection)||bt.vertexAlphas!==Vt||bt.vertexTangents!==Yt||bt.morphTargets!==Mt||bt.morphNormals!==Xt||bt.morphColors!==pe||bt.morphTargetsCount!==we||bt.numLightProbeGrids!==Xl(T.state.lightProbeGridArray)?ee=!0:(bt.outputColorSpace!==dt||bt.toneMapping!==oe)&&(ei=!0):(ee=!0,bt.__version=B.version);let Re=bt.currentProgram;(ee===!0||ei===!0)&&(Re=ei===!0?fu(B,N,V,dt,oe):Yi(B,N,V),L&&B.isNodeMaterial&&L.onUpdateProgram(B,Re,bt));let Qs=!1,Vn=!1,ni=!1,te=Re.getUniforms(),Te=bt.uniforms;if(gt.useProgram(Re.program)&&(Qs=!0,Vn=!0,ni=!0),B.id!==Y&&(Y=B.id,Vn=!0),Qs||K!==b){gt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),te.setValue(D,"projectionMatrix",b.projectionMatrix),te.setValue(D,"viewMatrix",b.matrixWorldInverse);let ve=te.map.cameraPosition;ve!==void 0&&ve.setValue(D,Nt.setFromMatrixPosition(b.matrixWorld)),he.logarithmicDepthBuffer&&te.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&te.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),K!==b&&(K=b,Vn=!0,ni=!0)}if(bt.needsLights&&(Le.state.sunShadowMap.length>0&&te.setValue(D,"sunShadowMap",Le.state.sunShadowMap,Ot),Le.state.directionalShadowMap.length>0&&te.setValue(D,"directionalShadowMap",Le.state.directionalShadowMap,Ot),Le.state.spotShadowMap.length>0&&te.setValue(D,"spotShadowMap",Le.state.spotShadowMap,Ot),Le.state.pointShadowMap.length>0&&te.setValue(D,"pointShadowMap",Le.state.pointShadowMap,Ot)),V.isSkinnedMesh){te.setOptional(D,V,"bindMatrix"),te.setOptional(D,V,"bindMatrixInverse");let de=V.skeleton;de&&(de.boneTexture===null&&de.computeBoneTexture(),te.setValue(D,"boneTexture",de.boneTexture,Ot))}V.isBatchedMesh&&(te.setOptional(D,V,"batchingTexture"),te.setValue(D,"batchingTexture",V._matricesTexture,Ot),te.setOptional(D,V,"batchingIdTexture"),te.setValue(D,"batchingIdTexture",V._indirectTexture,Ot),te.setOptional(D,V,"batchingColorTexture"),V._colorsTexture!==null&&te.setValue(D,"batchingColorTexture",V._colorsTexture,Ot));let en=W.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&$.update(V,W,Re),(Vn||bt.receiveShadow!==V.receiveShadow)&&(bt.receiveShadow=V.receiveShadow,te.setValue(D,"receiveShadow",V.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&N.environment!==null&&(Te.envMapIntensity.value=N.environmentIntensity),Te.dfgLUT!==void 0&&(Te.dfgLUT.value=s0()),Vn){if(te.setValue(D,"toneMappingExposure",R.toneMappingExposure),bt.needsLights&&mu(Te,ni),pt&&B.fog===!0&&ot.refreshFogUniforms(Te,pt),ot.refreshMaterialUniforms(Te,B,ut,At,T.state.transmissionRenderTarget[b.id]),bt.needsLights&&bt.numLightProbeGrids>0){let de=y,ve=0;for(let bn of T.state.lightProbeGridArray)bn.texture!==null&&(de.textures[ve]=bn.texture,de.min[ve]=bn.boundingBox.min,de.max[ve]=bn.boundingBox.max,de.resolution[ve]=bn.resolution,ve++);for(let bn in de)de[bn].length=ve;Te.probesSH.value=de.textures,Te.probesMin.value=de.min,Te.probesMax.value=de.max,Te.probesResolution.value=de.resolution}Hi.upload(D,Jl(bt),Te,Ot)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Hi.upload(D,Jl(bt),Te,Ot),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&te.setValue(D,"center",V.center),te.setValue(D,"modelViewMatrix",V.modelViewMatrix),te.setValue(D,"normalMatrix",V.normalMatrix),te.setValue(D,"modelMatrix",V.matrixWorld),B.uniformsGroups!==void 0){let de=B.uniformsGroups;for(let ve=0,bn=de.length;ve<bn;ve++){let Ql=de[ve];wt.update(Ql,Re),wt.bind(Ql,Re)}}return Re}function mu(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.sunLights.needsUpdate=N,b.sunLightShadows.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function gu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(b,N,W){let B=Ut.get(b);B.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Ut.get(b.texture).__webglTexture=N,Ut.get(b.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:W,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,N){let W=Ut.get(b);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,W=0){nt=b,Z=N,H=W;let B=null,V=!1,pt=!1;if(b){let dt=Ut.get(b);if(dt.__useDefaultFramebuffer!==void 0){gt.bindFramebuffer(D.FRAMEBUFFER,dt.__webglFramebuffer),et.copy(b.viewport),q.copy(b.scissor),mt=b.scissorTest,gt.viewport(et),gt.scissor(q),gt.setScissorTest(mt),Y=-1;return}else if(dt.__webglFramebuffer===void 0)Ot.setupRenderTarget(b);else if(dt.__hasExternalTextures)Ot.rebindTextures(b,Ut.get(b.texture).__webglTexture,Ut.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Vt=b.depthTexture;if(dt.__boundDepthTexture!==Vt){if(Vt!==null&&Ut.has(Vt)&&(b.width!==Vt.image.width||b.height!==Vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ot.setupDepthRenderbuffer(b)}}let yt=b.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(pt=!0);let Et=Ut.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Et[N])?B=Et[N][W]:B=Et[N],V=!0):b.samples>0&&Ot.useMultisampledRTT(b)===!1?B=Ut.get(b).__webglMultisampledFramebuffer:Array.isArray(Et)?B=Et[W]:B=Et,et.copy(b.viewport),q.copy(b.scissor),mt=b.scissorTest}else et.copy(Rt).multiplyScalar(ut).floor(),q.copy(Qt).multiplyScalar(ut).floor(),mt=Dt;if(W!==0&&(B=G),gt.bindFramebuffer(D.FRAMEBUFFER,B)&&gt.drawBuffers(b,B),gt.viewport(et),gt.scissor(q),gt.setScissorTest(mt),V){let dt=Ut.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,dt.__webglTexture,W)}else if(pt){let dt=N;for(let yt=0;yt<b.textures.length;yt++){let Et=Ut.get(b.textures[yt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+yt,Et.__webglTexture,W,dt)}}else if(b!==null&&W!==0){let dt=Ut.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,dt.__webglTexture,W)}Y=-1};function jl(b){let N=Ut.get(b);return(N.__readFormat!==b.format||N.__readType!==b.type)&&(N.__readFormat=b.format,N.__readType=b.type,N.__formatReadable=he.textureFormatReadable(b.format),N.__typeReadable=he.textureTypeReadable(b.type)),N}this.readRenderTargetPixels=function(b,N,W,B,V,pt,vt,dt=0){if(!(b&&b.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&vt!==void 0&&(yt=yt[vt],Array.isArray(yt)&&(yt=yt[0])),yt){gt.bindFramebuffer(D.FRAMEBUFFER,yt);try{let Et=b.textures[dt],Vt=Et.format,Yt=Et.type;b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+dt);let Mt=jl(Et);if(Mt.__formatReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Mt.__typeReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-B&&W>=0&&W<=b.height-V&&D.readPixels(N,W,B,V,at.convert(Vt),at.convert(Yt),pt)}finally{let Et=nt!==null?Ut.get(nt).__webglFramebuffer:null;gt.bindFramebuffer(D.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(b,N,W,B,V,pt,vt,dt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Ut.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&vt!==void 0&&(yt=yt[vt],Array.isArray(yt)&&(yt=yt[0])),yt)if(N>=0&&N<=b.width-B&&W>=0&&W<=b.height-V){gt.bindFramebuffer(D.FRAMEBUFFER,yt);let Et=b.textures[dt],Vt=Et.format,Yt=Et.type;b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+dt);let Mt=jl(Et);if(Mt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Mt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Xt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Xt),D.bufferData(D.PIXEL_PACK_BUFFER,pt.byteLength,D.STREAM_READ),D.readPixels(N,W,B,V,at.convert(Vt),at.convert(Yt),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let pe=nt!==null?Ut.get(nt).__webglFramebuffer:null;gt.bindFramebuffer(D.FRAMEBUFFER,pe);let oe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await uh(D,oe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Xt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,pt),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(Xt),D.deleteSync(oe),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,N=null,W=0){let B=Math.pow(2,-W),V=Math.floor(b.image.width*B),pt=Math.floor(b.image.height*B),vt=N!==null?N.x:0,dt=N!==null?N.y:0;Ot.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,vt,dt,V,pt),gt.unbindTexture()},this.copyTextureToTexture=function(b,N,W=null,B=null,V=0,pt=0){let vt,dt,yt,Et,Vt,Yt,Mt,Xt,pe,oe=b.isCompressedTexture?b.mipmaps[pt]:b.image;if(W!==null)vt=W.max.x-W.min.x,dt=W.max.y-W.min.y,yt=W.isBox3?W.max.z-W.min.z:1,Et=W.min.x,Vt=W.min.y,Yt=W.isBox3?W.min.z:0;else{let te=Math.pow(2,-V);vt=Math.floor(oe.width*te),dt=Math.floor(oe.height*te),b.isDataArrayTexture?yt=oe.depth:b.isData3DTexture?yt=Math.floor(oe.depth*te):yt=1,Et=0,Vt=0,Yt=0}B!==null?(Mt=B.x,Xt=B.y,pe=B.z):(Mt=0,Xt=0,pe=0);let ae=at.convert(N.format),we=at.convert(N.type),bt;N.isData3DTexture?(Ot.setTexture3D(N,0),bt=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ot.setTexture2DArray(N,0),bt=D.TEXTURE_2D_ARRAY):(Ot.setTexture2D(N,0),bt=D.TEXTURE_2D),gt.activeTexture(D.TEXTURE0),gt.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),gt.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),gt.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);let Le=gt.getParameter(D.UNPACK_ROW_LENGTH),ee=gt.getParameter(D.UNPACK_IMAGE_HEIGHT),ei=gt.getParameter(D.UNPACK_SKIP_PIXELS),Re=gt.getParameter(D.UNPACK_SKIP_ROWS),Qs=gt.getParameter(D.UNPACK_SKIP_IMAGES);gt.pixelStorei(D.UNPACK_ROW_LENGTH,oe.width),gt.pixelStorei(D.UNPACK_IMAGE_HEIGHT,oe.height),gt.pixelStorei(D.UNPACK_SKIP_PIXELS,Et),gt.pixelStorei(D.UNPACK_SKIP_ROWS,Vt),gt.pixelStorei(D.UNPACK_SKIP_IMAGES,Yt);let Vn=b.isDataArrayTexture||b.isData3DTexture,ni=N.isDataArrayTexture||N.isData3DTexture;if(b.isDepthTexture){let te=Ut.get(b),Te=Ut.get(N),en=Ut.get(te.__renderTarget),de=Ut.get(Te.__renderTarget);gt.bindFramebuffer(D.READ_FRAMEBUFFER,en.__webglFramebuffer),gt.bindFramebuffer(D.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ve=0;ve<yt;ve++)Vn&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ut.get(b).__webglTexture,V,Yt+ve),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ut.get(N).__webglTexture,pt,pe+ve)),D.blitFramebuffer(Et,Vt,Et+vt,Vt+dt,Mt,Xt,Mt+vt,Xt+dt,D.DEPTH_BUFFER_BIT,D.NEAREST);gt.bindFramebuffer(D.READ_FRAMEBUFFER,null),gt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(V!==0||b.isRenderTargetTexture||Ut.has(b)){let te=Ut.get(b),Te=Ut.get(N);gt.bindFramebuffer(D.READ_FRAMEBUFFER,C),gt.bindFramebuffer(D.DRAW_FRAMEBUFFER,z);for(let en=0;en<yt;en++)Vn?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,te.__webglTexture,V,Yt+en):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,te.__webglTexture,V),ni?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Te.__webglTexture,pt,pe+en):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Te.__webglTexture,pt),V!==0?D.blitFramebuffer(Et,Vt,Et+vt,Vt+dt,Mt,Xt,Mt+vt,Xt+dt,D.COLOR_BUFFER_BIT,D.NEAREST):ni?D.copyTexSubImage3D(bt,pt,Mt,Xt,pe+en,Et,Vt,vt,dt):D.copyTexSubImage2D(bt,pt,Mt,Xt,Et,Vt,vt,dt);gt.bindFramebuffer(D.READ_FRAMEBUFFER,null),gt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ni?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(bt,pt,Mt,Xt,pe,vt,dt,yt,ae,we,oe.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(bt,pt,Mt,Xt,pe,vt,dt,yt,ae,oe.data):D.texSubImage3D(bt,pt,Mt,Xt,pe,vt,dt,yt,ae,we,oe):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,pt,Mt,Xt,vt,dt,ae,we,oe.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,pt,Mt,Xt,oe.width,oe.height,ae,oe.data):D.texSubImage2D(D.TEXTURE_2D,pt,Mt,Xt,vt,dt,ae,we,oe);gt.pixelStorei(D.UNPACK_ROW_LENGTH,Le),gt.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ee),gt.pixelStorei(D.UNPACK_SKIP_PIXELS,ei),gt.pixelStorei(D.UNPACK_SKIP_ROWS,Re),gt.pixelStorei(D.UNPACK_SKIP_IMAGES,Qs),pt===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&D.generateMipmap(bt),gt.unbindTexture()},this.initRenderTarget=function(b){Ut.get(b).__webglFramebuffer===void 0&&Ot.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ot.setTextureCube(b,0):b.isData3DTexture?Ot.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ot.setTexture2DArray(b,0):Ot.setTexture2D(b,0),gt.unbindTexture()},this.resetState=function(){Z=0,H=0,nt=null,gt.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qe}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}};function ro(i,t,{fog:e=[40,120],light:n="fixed",ambient:s=.6}={}){let r=new no({antialias:!0});r.setPixelRatio(Math.min(globalThis.devicePixelRatio||1,2)),r.setClearColor(new Pt(t.bg)),i.appendChild(r.domElement);let a=new us;e&&(a.fog=new hs(new Pt(t.bg),e[0],e[1]));let o=new Be(50,1,.1,400);a.add(new Us(16777215,s));let l=new Cs(16777215,2.2);n==="camera"?(l.position.set(-.5,.9,.45),o.add(l),o.add(l.target),l.target.position.set(0,0,-1),a.add(o)):(l.position.set(20,30,25),a.add(l));function c(){let h=i.clientWidth||300,d=i.clientHeight||300;r.setSize(h,d),o.aspect=h/d,o.updateProjectionMatrix()}return c(),{renderer:r,scene:a,camera:o,resize:c,canvas:r.domElement,orbit(h,d,u){let f=1/Math.min(1,o.aspect*1.15),_=u*f;e&&(a.fog.near=e[0]*f,a.fog.far=e[1]*f),o.position.set(Math.sin(h)*Math.cos(d)*_,Math.sin(d)*_,Math.cos(h)*Math.cos(d)*_),o.lookAt(0,0,0),o.updateMatrixWorld()},render(){r.render(a,o)},snapshot(){return r.render(a,o),r.domElement.toDataURL("image/png")},dispose(){a.traverse(h=>{h.geometry&&h.geometry.dispose(),h.material&&h.material.dispose(),h.isInstancedMesh&&h.dispose()}),r.dispose(),r.domElement.remove()}}}function jh(i,{yaw:t=.6,pitch:e=.3,dist:n=48,min:s=15,max:r=110,onChange:a,onClick:o,onHover:l}){let c=i.canvas,h={yaw:t,pitch:e,dist:n},d=new Map,u=!1,f=null,_=0;c.style.touchAction="none";let S=x=>Math.max(s,Math.min(r,x)),p=()=>{let[x,E]=[...d.values()];return Math.hypot(x.x-E.x,x.y-E.y)},m={pointerdown(x){d.set(x.pointerId,{x:x.clientX,y:x.clientY});try{c.setPointerCapture(x.pointerId)}catch{}d.size===1?(u=!1,f={x:x.clientX,y:x.clientY}):(u=!0,_=p())},pointermove(x){let E=d.get(x.pointerId);if(!E){x.pointerType==="mouse"&&l&&l(x.clientX,x.clientY);return}let y=x.clientX-E.x,A=x.clientY-E.y;if(E.x=x.clientX,E.y=x.clientY,d.size===2){let T=p();_>0&&T>0&&(h.dist=S(h.dist*_/T),a()),_=T;return}!u&&Math.abs(x.clientX-f.x)+Math.abs(x.clientY-f.y)>4&&(u=!0),u&&(h.yaw-=y*.008,h.pitch=Math.max(-1.4,Math.min(1.4,h.pitch+A*.008)),a())},pointerup(x){d.delete(x.pointerId)&&!u&&!d.size&&o&&o(x.clientX,x.clientY)},pointercancel(x){d.delete(x.pointerId)},wheel(x){x.preventDefault(),h.dist=S(h.dist*(1+Math.sign(x.deltaY)*.08)),a()}};for(let[x,E]of Object.entries(m))c.addEventListener(x,E,{passive:x!=="wheel"});return{get yaw(){return h.yaw},get pitch(){return h.pitch},get dist(){return h.dist},set(x){Object.assign(h,x),h.dist=S(h.dist),a()},apply(){i.orbit(h.yaw,h.pitch,h.dist)},dispose(){for(let[x,E]of Object.entries(m))c.removeEventListener(x,E)}}}var ao=new P;function Ys(i,t){let e=i.camera,n=i.canvas.clientWidth,s=i.canvas.clientHeight;ao.set(t[0],t[1],t[2]).applyMatrix4(e.matrixWorldInverse);let r=-ao.z;if(r<=e.near)return null;let a=s/(2*Math.tan(e.fov*Math.PI/360));return{x:n/2+ao.x*a/r,y:s/2-ao.y*a/r,depth:r,px:a/r}}function Qh(i,t,e,n,s=8){let r=null,a=1/0,o=null,l=1/0;for(let c of t){let h=Ys(i,c.at);if(!h)continue;let d=Math.hypot(h.x-e,h.y-n),u=c.r*h.px;d<=u?h.depth<a&&(a=h.depth,r=c.key):d-u<=s&&d-u<l&&(l=d-u,o=c.key)}return r||o}var oo=(i,t)=>(Object.assign(i.style,t),i);function Kh(i,t){getComputedStyle(i).position==="static"&&(i.style.position="relative");let e=`0 0 3px ${t.bg}, 0 0 3px ${t.bg}, 0 1px 2px ${t.bg}`,n=(u,f,_)=>{let S=document.createElement(u);return oo(S,f),(_||s).appendChild(S),S},s=oo(document.createElement("div"),{position:"absolute",inset:"0",pointerEvents:"none",overflow:"hidden",font:"13px system-ui, sans-serif",color:t.fg,userSelect:"none"});s.className="vgv-frame",i.appendChild(s);let r=n("div",{position:"absolute",left:"12px",top:"10px",right:"12px",color:t.muted,textShadow:e});r.className="vgv-stat";let a=n("div",{position:"absolute",top:"34px",left:"0",right:"0",display:"none",justifyContent:"center"}),o=n("div",{position:"absolute",inset:"0"}),l=n("div",{position:"absolute",left:"0",right:"0",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",padding:"0 12px"});l.className="vgv-controls";let c=n("div",{position:"absolute",display:"none",maxWidth:"260px",padding:"4px 8px",borderRadius:"6px",background:t.bg,border:`1px solid ${t.muted}`,color:t.fg,fontSize:"12px"});c.className="vgv-tip";function h(u,{label:f,title:_,run:S,off:p},m){let x=n("button",Object.assign({pointerEvents:p?"none":"auto",cursor:"pointer",minHeight:"36px",height:"auto",minWidth:"36px",width:"auto",padding:"6px 14px",margin:"0",borderRadius:"8px",border:`1px solid ${t.muted}`,background:t.bg,color:t.fg,font:"600 13px system-ui, sans-serif",boxShadow:"none",opacity:p?"0.35":"1",lineHeight:"1.2"},m||{}),u);return x.type="button",x.textContent=f,x.disabled=!!p,_&&(x.title=_,x.setAttribute("aria-label",_)),x.addEventListener("click",E=>{E.stopPropagation(),S()}),x}let d=[];return{stat(u){r.textContent=u||""},controls({at:u="bottom",lines:f=[],buttons:_=[]}={}){if(l.replaceChildren(),oo(l,u==="centre"?{top:"50%",bottom:"auto",transform:"translateY(-50%)"}:{top:"auto",bottom:"18px",transform:"none"}),f.forEach((S,p)=>{n("div",{textAlign:"center",textShadow:e,color:p||u!=="centre"?t.muted:t.fg,fontWeight:p||u!=="centre"?"400":"600",fontSize:p||u!=="centre"?"13px":"14px"},l).textContent=S}),_.length){let S=n("div",{display:"flex",gap:"8px",alignItems:"center",justifyContent:"center",maxWidth:"100%"},l);_.forEach(p=>h(S,p,p.wide?{maxWidth:"70vw",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}:null))}},chip(u,f){a.replaceChildren(),a.style.display=u?"flex":"none",u&&h(a,{label:`${u}  \u2715`,title:`${u}. Clear`,run:f},{borderRadius:"18px",fontWeight:"400"})},labels(u){o.replaceChildren(),d=u.map(f=>{let _={position:"absolute",left:"0",top:"0",whiteSpace:"nowrap",color:f.color||t.fg,textShadow:e,font:`${f.strong?"700 15px":"11px"} system-ui, sans-serif`,willChange:"transform"},S=f.run?h(o,{label:f.text,title:f.title,run:f.run},Object.assign(_,{minHeight:"0",minWidth:"0",padding:"3px 4px",border:"none",background:"transparent"})):n("div",_,o);return f.run||(S.textContent=f.text),{l:f,n:S,w:S.offsetWidth,h:S.offsetHeight}})},tip(u,f,_){c.style.display=u?"block":"none",u&&(c.textContent=u,oo(c,{left:Math.max(4,Math.min(s.clientWidth-264,f+14))+"px",top:Math.max(4,_+16)+"px"}))},place(u){let f=s.clientWidth,_=s.clientHeight,S=[];for(let{l:p,n:m,w:x,h:E}of d){let y=Ys(u,p.at),A=!!y&&y.x>-x&&y.x<f+x&&y.y>-E&&y.y<_+E,T=0,g=0;A&&(T=Math.max(6,Math.min(f-x-6,p.side==="right"?y.x+(p.dx||0):y.x-x/2)),g=Math.max(34,Math.min(_-110,y.y+(p.dy||0)-E/2)),A=!S.some(M=>T<M[0]+M[2]&&T+x>M[0]&&g<M[1]+M[3]&&g+E>M[1])),m.style.display=A?"":"none",A&&(m.style.transform=`translate(${Math.round(T)}px, ${Math.round(g)}px)`,S.push([T,g,x,E]))}},dispose(){s.remove()}}}function $h(i,t,e){let n=ro(i,e.theme,t.stage),s=Kh(i,e.theme),r=0,a=!1,o=null,l=()=>{u.apply(),f.frame&&f.frame(),s.place(n)},c=()=>{r=0,!a&&(l(),n.render())},h=()=>{!r&&!a&&(r=requestAnimationFrame(c))},d=(_,S)=>{let p=n.canvas.getBoundingClientRect();return u.apply(),Qh(n,f.targets(),_-p.left,S-p.top)},u=jh(n,{...t.home,onChange:h,onClick(_,S){let p=d(_,S);p&&(f.click(p),h())},onHover(_,S){let p=d(_,S),m=n.canvas.getBoundingClientRect();n.canvas.style.cursor=p?"pointer":"",s.tip(p&&p.tip?p.tip:null,_-m.left,S-m.top),(p&&p.kind+p.id)!==(o&&o.kind+o.id)&&(o=p,f.hover&&(f.hover(p),h()))}}),f=t.build({stage:n,frame:s,orbit:u,invalidate:h,...e});return h(),{view:t.id,resize(){n.resize(),h()},keyAt:d,noteAt(_,S){let p=d(_,S);return p&&p.kind==="note"?p.id:null},pageAt(_){u.apply();let S=Ys(n,_),p=n.canvas.getBoundingClientRect();return S&&{x:S.x+p.left,y:S.y+p.top}},update(_){f.update(_||{}),h()},stat:()=>f.stat(),today:()=>f.today?f.today():null,turn(_){return _&&u.set(_),{yaw:u.yaw,pitch:u.pitch,dist:u.dist}},snapshot(){return l(),n.snapshot()},api:f.api||{},dispose(){a=!0,cancelAnimationFrame(r),u.dispose(),f.dispose&&f.dispose(),s.dispose(),n.dispose()}}}var r0=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ye=(i,t)=>`${i} ${t}${i===1?"":"s"}`,$n=(i,t)=>i.length>t?i.slice(0,t-1)+"\u2026":i,Xs=i=>{let[,t,e]=i.split("-");return`${r0[+t-1]} ${+e}`},tu=(i,t)=>Math.round(Math.abs(Date.parse(t)-Date.parse(i))/864e5);function a0(i,t=18){let e=i.length,n=Math.PI*(3-Math.sqrt(5));return i.map((s,r)=>{let a=e>1?1-r/(e-1)*2:0,o=Math.sqrt(1-a*a),l=r*n;return{x:Math.cos(l)*o*t,y:a*t,z:Math.sin(l)*o*t,size:.5+Math.sqrt((s.inlinks||0)+(s.outlinks||0))*.35}})}var eu={id:"bodies",name:"Notes",hint:"Every note as a sphere",home:{yaw:.6,pitch:.3,dist:48,min:15,max:110},build({stage:i,frame:t,data:e,onOpen:n}){let s=e.nodes,r=a0(s),a=new Qe(new Fn(1,20,14),new ln({roughness:.5}),Math.max(s.length,1));a.count=s.length;let o=new qt,l=new Pt;r.forEach((d,u)=>{o.makeScale(d.size,d.size,d.size).setPosition(d.x,d.y,d.z),a.setMatrixAt(u,o),a.setColorAt(u,l.setHSL((s[u].cluster||0)*.137%1,.6,.55))}),i.scene.add(a);let c=r.map((d,u)=>({at:[d.x,d.y,d.z],r:d.size,key:{kind:"note",id:s[u].id,tip:s[u].name}})),h=()=>ye(s.length,"note");return t.stat(h()),{targets:()=>c,click:d=>n(d.id),update(){},stat:h}}};var nu={source:"PDB 5F9R (Jiang et al., Science 351:867, 2016) and 1BNA (Drew et al., PNAS 78:2179, 1981); public domain",q:.55914,lo:[-59.037,-52.177,-45.243],radius:1.8,protein:8622,rna:[[1,23],[2,18],[3,14],[4,16],[5,14],[6,14],[7,15],[8,15],[9,15],[10,15],[11,15],[12,16],[13,15],[14,15],[15,13],[16,16],[17,17],[18,13],[19,15],[20,14],[21,14],[22,14],[23,14],[24,10],[25,14],[26,14],[27,21],[28,22],[29,17],[30,15],[31,15],[32,17],[33,16],[34,18],[35,15],[36,16],[37,19],[38,15],[39,13],[40,17],[41,15],[42,19],[43,20],[44,16],[45,17],[46,17],[47,20],[48,20],[49,18],[50,16],[51,15],[52,17],[53,14],[54,17],[55,18],[56,16],[57,16],[58,15],[59,18],[60,16],[61,17],[62,15],[63,15],[64,17],[65,16],[66,17],[67,16],[68,17],[69,16],[70,16],[71,15],[72,16],[73,16],[74,17],[75,20],[76,16],[77,20],[78,14],[79,15],[80,16],[81,17],[82,18],[83,19],[84,19],[85,19],[86,15],[87,14],[88,16],[89,14],[90,18],[91,19],[92,20],[93,14],[94,15],[95,18],[96,15],[97,17],[98,19],[99,22],[100,20],[101,16],[102,17],[103,14],[104,15],[105,17],[106,19],[107,22],[108,19],[109,17],[110,16],[111,16],[112,15],[113,16],[114,15],[115,20],[116,20]],target:[[1,15],[2,15],[3,16],[4,16],[5,16],[6,15],[7,16],[8,15],[9,14],[10,18],[11,19],[12,16],[13,16],[14,18],[15,15],[16,15],[17,16],[18,14],[19,16],[20,15],[21,15],[22,13],[23,16],[24,17],[25,14],[26,16],[27,14],[28,18],[29,17],[30,17]],other:[[12,21],[13,19],[14,18],[15,16],[16,18],[17,19],[18,13],[19,22],[20,19],[21,14],[22,14],[23,15],[24,14],[25,16],[26,15],[27,15],[28,16],[29,16],[30,22]],spacer:20,pam:[[10,21],[9,22],[8,23]],flank:[[7,24],[6,25],[5,26],[4,27],[3,28],[2,29],[1,30]],step:{turn:.62351,rise:3.2376},pair:[[9.699,0,-2.305,0,0],[10.839,.901,-2.582,0,0],[9.939,-1.059,-1.289,0,0],[8.473,.907,-1.868,0,0],[8,1.916,-2.762,0,0],[6.881,2.551,-2.001,0,0],[5.884,1.565,-1.789,0,0],[7.28,2.993,-.605,0,0],[7.569,4.393,-.583,0,0],[6.113,2.528,.278,0,0],[5.076,2.087,-.754,0,0],[4.225,.946,-.343,0,1],[2.882,1.115,-.303,0,1],[2.389,2.221,-.546,0,1],[2.101,.031,-.017,0,1],[2.619,-1.208,.254,0,1],[1.832,-2.138,.454,0,1],[4.007,-1.353,.26,0,1],[4.641,-2.674,.601,0,1],[4.803,-.254,-.061,0,1],[-9.607,1.703,2.313,1,0],[-10.67,2.703,2.57,1,0],[-9.986,.564,1.436,1,0],[-8.324,2.485,1.789,1,0],[-7.756,3.509,2.615,1,0],[-6.674,4.18,1.825,1,0],[-5.519,3.332,1.755,1,0],[-7.034,4.586,.4,1,0],[-6.674,5.949,.158,1,0],[-6.253,3.555,-.414,1,0],[-5.004,3.39,.428,1,0],[-4.379,2.059,.236,1,1],[-4.984,.831,.172,1,1],[-4.103,-.178,.07,1,1],[-2.905,.441,.079,1,1],[-1.572,-.063,.016,1,1],[-1.289,-1.392,-.053,1,1],[-.579,.825,.041,1,1],[-.854,2.124,.134,1,1],[-2.04,2.718,.212,1,1],[-3.03,1.798,.18,1,1]],tails:{near:{o:[46.898,-16.831,-6.652],x:[.205,-.031,.978],y:[-.292,-.956,.03],z:[.934,-.292,-.205],phase:1.8705},far:{o:[-33.927,-16.831,-6.652],x:[-.732,-.357,.58],y:[-.659,.585,-.472],z:[-.17,-.728,-.664],phase:1.8705}},atoms:"TxsjTBsjTB4lTR8kTBklSh0nSSAoSyAqTB4rRx8pSyIrTSMtTCUuSycuTyMsUCUrUScsTyYoUSkqTygnUSsmTSUxTygzUSczSyc0SSYzTys0US03UC43Ui4yVC8zVC4uUy47VS87VTE8VzQ/VTRBVjU7VTU4VTc3WDQ3WTVAWTZCXThCWjREWTdHXDRIWjpCWzxCXD5EWz1GWj5AWDw+Wz8+Vz48Xj9DX0BFYUJEYUJCYURGY0ZFZkdCY0hHZUZJYUhIZkNEaEBCaj9AakFFa0NGbEVFa0NJZj9BYT5AZjtCZDtEYzs9YTo8YjY6YTs6Xjo4YT46YDY+YDQ+XjI8XDM8XzE6Xyw4XTE2YDE1YjI1YS8zZDE0Yy8zXy0yYSsxYywwWyw4Wyo4WSk2Vyo2Wik6WSc1VyQ0WCI0ViUvWSkwVCM0UyE1UiAzUSIyUiE3UCI3VCI5TiI5UB0xThwyTR0zURsvVBswURstTRoxShkxSxg0SRg1SRgvRhgwRRgyRRguTRYzTRU1UBU4TxM0Txg3URo5VRk7UBk8TRk8TBs9TBc8Shs9SRc8SBk9Rho9VBk3Vxg2WBo1VxszVxY1Whs1XRoyXR41Xxw2Xx8zXBwtXx4tWh0rWB4tWR4vXxorYhsnYBomYxgrZRkqYx0nZB0kZh4jaB8lYh8jZx0haSAfZyAdahweayIfayQebSQdbyQdaiYgaCYhaCYkZiUgZSYlZCUhYyUkbCYabiYZcCgabyobbScWcigZdykXeCocdCcedS0Xdy4Wei4Wei4YdjAVdDETczMTdDARezAVfTEVfy8Ufi4Sgy0UhCsVhioVhS4ShjAUhjAWhzITgioXgygYgiUXgSUWgigbgCgbgyscgyQZgiEYgCAZfh8YhB8ZhyAZhyEXiB8afyEbfSEceiQafCEfeiEZdCMYeCAVeiETfCIUeyARfiISfSERdSAacx8edR4ecR4achwaciAfbx8jbiAjcyEjdiEjcyAmeCIkbx0kbhwpbBklax4oaB8sZx4qbCIqaCAuZCIvZSQuZh8xZhsxaR0yYiIvYCQvXiYyXiQuZig1YSU3YCc5YyM3YCU7ZCo3Ziw4ZS45aDQ5ajQ5ZzI9ZzY5aDg4aDo7Zzo2aDw1ajw0Zj40bzs9bjg+cDc/bDlAbUA8bUI7bUQ/a0M5aUM7aEY7aEE7ZkY9ZUI8ZUQ9cEg+bEk+cUo+dEk9dEc+dUo7bUpBbE5Aa0tFa0lGaE5AaFA/Z1JDalZCZ1hBbFdCblVCcVZCcVlCclVCaFlEZltFZ11DaV1CZVtHZ1xIZFlIZV9EZ2NEZ2VEZGJBZ2JGamVIa2dIZ2NLaGRNZ2NPZ2FPZ2RRbGNIbmRHb2ZFcGdFcGJHbmVDbmZBbmtBbWU/bWM/bWc9a2lDa21Fa29EZm1FZG1GZGxJYmhIY2pMbGxHbm1IcG5HcHBHbmxKbWxNamtMbmpPc25Ec3JCdGxCdmtEdmpGeGlHeWdFb3ZBa3I9aXE8Z3A9aGw9ZW0/bXRDbXZFb3lGa3ZHbHRJaXVHcXZGc3ZGdXpFdXRHdXhAdXxAdHc+dnU9dXM7c3I8c3A7dHA5cW87cXtAcH1AcYFCbXxAbHw+anw9aHo+Z3g9Z3g7Znc+cX5Ecn9GdIBFdYNFc35IcX9Lc39NdX1Ndn1Pd39QeHxQdn9FeIBEeIJCeYRCen5De31FfX5He3tGfX1Je3lIfXtKfnpMd4FAd4M+doU/doc+dYI8c4E8doA6dIVAcodBdItDcIdCboZBbIRCaoNAaIFCZ4E+dYhEeYxFeIdIeohJfYdJfYVLf4RKgYVJgIJMeolCfIpBfI5AfYg/foo9gIs+gow9hI0+d5I/dY49dY06d4w6c405dpBCdpJEeJVEdZFGc5BGcY9Jco1JdY5MdIpMepJEfZNEfpdCf5FEf5BHgZNEf5JJfJRAfJU9e5c9e5k8e5M7fpE7d5k/eZ0/dZlAc5c8cZY/cpY7cJQ+cJQ8b5M6fp9De5tGfJ1Ifp5Iep9IgJxAgaA+gpo/hZc/hZc9hpZBfp49fZ87fKI8faM6e546ep83d583dp04d6A1e6I+e6Q/fag/eaRBd6NBeaZCdaNDgaZAhac+g6RCgqVFgKZFg6RGf6ZHgqRJgKVJg6U6h6g5gqQ4g6Q2g6k5hKw4h645gq03f604f6o5fq45ha08hq4+i64/ha5Ag7A/hLI/hbNAgrQ+iao+iqY/jaVBjKREjKdFjKo7jqo5j6w6ka05jao3jq47j7A7kbA+krE+jbI8jLM6irU7i7c7ibk8kK4/ka5Bk6xBlqxBkaxGjq9Ek6pAlKg/kqY9laZBl6RBl6M/mKRDlac7lKY5lKM5k6I3lqc3mac3maU5mqg2lp09mJ85mqA6lJ8+k5pAkqBCkZ9Ekp5Ijp1Hj51IkJw+jpo+j5g9j5Y9jJs9ipxBiZ49iZ5Ch58/h59BkZk7k5c6lJY7lJM7lJg4kpk2kZs2kpk0kJw0kJszlZc9lZRAlpJBmJdAmpg/nJpBmptCm55Ak5VBkpNCkI9CkJVDkJZGkZhGjZdGkYw8jpA7jI87ipA9ipI+iI89lI49lo08l4w/mYs/l447mZA8m5E6m5A4m5M7loxBl4xDmYlFlY1Fk4tFlohClYRBlYFClIBEln9AlH5Fln1BlXxDmoU/n4dAnIY7moU5mIU6m4c3ooQ/o4c+ooc8pII/poJAo4A/pYg/poo+p4k8p4s6qItAqY0/q45BrJBArI1CqIc7qYY5qIc1qoQ5q4M3rIA3rH85rH81pYY4o4Y2oYk2oIk1oYQ2o4I1pYI0ooA2oYw5o482oY07n482n5E0opU0nZIzn5Q4oJY5oZY7opQ7npg5n5s5n5w7oJw4oJ47oJ45opc9o5c/n5VBo5lApppAqJlBqpk/p5dCo5RCopJEn5FHpJBEppFFqJBGq5FHq5FJqpBLrZJJnpdInphGophKpJdNppZKppZOqJZMmZZImZhJmJlHmJRKmpNLnJRLmZpLmJxLmJ1Nl5tPlp9NlpxRm55Kn6FGnqJLm6RNnKFPmaVPm6FRmaNRn55HoZ1Fo51GpZxFpJ9Hpp9Ip55KpZ1Lp6JJpaNLpqJNo6RKqZ5Lp5xRq5tNrJpLrJlPrplLqZ9QqaFTpqFVqqNTqqRQqqVVo6NSoKBUoaRQo6ZQo6dRo6dNop5SoJxSoZtVn5tWoZpQo5xVpJtYopxbp5tYp5taqJpWop9ZoaFan6BbnqBdoaNZnZ9Zm55ZmZxdmp5XlZ5Yl5pXk51ZlZlYk5pYkZlZnJhcnZlenJhgnpdbnJNZnpZWm5NWnZRVnptfn5xhnJxkoZ1hpJxipJxkop1mpZplnJ9imqBjl59lmqNimKRkmKdjlqhllqplmJ1hlphflJ1fkaBhlKFekaNhlKNekqdgl5VjlpJgmJVllpdnlpllkJVgkJdgj5JjjpRkkZFljpRfjJZdiplfi5RbipZaiZNdi5hYiJtliJVlhJNjiJFjg5Fiho9ig45hjZxli6BkkJxlkptpkZdpkphriaBfiKJfjZ5djKBbjaJbjZ9YiJ5ghZ5ghaBihKJihJxhhJpfgppegZhdgJZef5dgf5Rdhp9khaFmhaVmh6BohqJrh6Fth6NviKJxiKRliaZkh6pjjKZjjahijapkjqxkj65mhahfgqpfhaZch6VZiKlbgKdifqtkf6VkfKZlfqNigqtng61mga9ng6pqgqhrgKdqhKdsha1mhq9lg7Bhia9kirFjhbNjg7VhhbZghbhfgrZig7hkgLVkibZeibVbiLNbjLVfjLZii7dijbRjirZajrRWirdWirdTirlRirhPirpNi7FXjK9Wja9Ui7BSjK1Yjq1Tj6xRi6pRkatQkqpOkalNk6xNjKtNiqpMiaZMiqtJiKtIhqxJiKxFjaRLjaNOi6FOkKRLkaRIk6RIlaZJl6ZJmKVHmKhKjaRQjKNSiaFTjqRUkKRUkaVWkaJUiaVRhqVRg6FRhadQhqlSgqdRhaxShqJOhaBMhJxOh6BKhJ1IiJxJhJtHiJpIhZdGiJtQhplTi5tRj5tQjJlOhp1UhJ1WgZpVhJ9XgZ1Tf51Sf5pRfZlRfp9QfqFRfaNPfKFTgJpPgZdOgJNPg5dMgpZSgpRUf5FVhJRVg5JZhpFXg5BbhY9afJVWeZNVe5hXfJlZe5tafZ1beZRQeJBPeZVOeJhPeJRMeJlNfI5Pe4pQf45OgItNgotMg4lLhYlKeY5YfYtWf4pVf4dUgItUgYdTgopTgohSdo1VdY9WdI5ZdI9ac49Uco1Tco1RcI5PbopPbY5Ocotbb4pYbIhbaotca4VdaYdgbYZhaohjbIdjaIlaZopaZIlbYolbZYpXZ4xWaYtVZo5Vao1UZ5BUao9TY4dfX4hhZIVgZoNfZ4JhZIFeYophYYxiYI5hYZBgYo1kZItlYY9mZYxnXY5hXJBfXJJhXJJjWY9fWY1dV41cVY5eVoxaXJRfXJdgX5hgYJdfX5liYppmYJpnYpxiYJ5iYJ5kX59gZJlmZZlpZ5tqaZtqZpdqZZVqYpVqZZRnZp1qZ59rZ55vZqJraKRraaRtaKVpa55ubJ1wa6Fzbp5wb55tbJ9saZ5zZ591aZ93a6B3ZZ11aJ15aZ17bZx8aJx9a5p5bZh5cJZ7b5l4cZh3bJd9bZZ/a5WAaZaAbpiBa5OBaZGCaJOEZpOEao+DaI2EbI6BapSGaZWIZ5eHZZeJa5eJZ5mGZpuGY5qFYZqGZ52EY5iDYZiCXpaEYpZ/ZJd8Ypp9YJOHX5SJXZSKYpGIYJaKX5iMW5mMYZqMY5mOYJyOZZqPXZqJV5qIW5yFWZ6EWp+CXJ+BWKGCWpeGWJWGVZSIWZOFWJKDWZCCVpGEWJSKV5ONVpWOVJWPWZOOWJKRW5GOVpeNVZmOUZqNVpyNVZ6NV6CMWKCLVqKNUpmKUJiJT5aKTJaKUZiGUpaGUpqFUJSKT5KLTJKOUJCLT5SPTpWRTJeRSpaTUJaTTJiQSpqPSJmORpqOS5yOTZ6PTqCOT6CMTaKPSJeNRpaLQ5WNR5SKRZKJQ5SHRpCHRZKRSJKURY+QRJOURJSXQ5KYRJKbQ5aYQpCXQo6YRIyZRIubQIyWPouWPI2WPI+VOo2YRoyYSIuYSoyXS4uWSIiYSYeZS4iaSYWaTY+XT42YUI2aTpGYTJGaSpCaUY2WU4uXVYyWVo2UU4mWUYeWVYeXUIWVV42YW4qYWpCZWJKaVpGbWJSYXY2WX4yWYoqYYY2UYI2aYY2cZI2cZYydYYudYougZY6aZ46ZaYyYa4yYZ4uXaYmVaoqTaIuRZ4eVaIWTZoaXbImTbYqQbYeOcImRcoqPcYyOdImOa4qNaomKbIeHaIuKbYuIb4uGcYmHc4qHcI2GcYeHcoWHcYKHcoCHdIWJb4OIbYGIa3+Fa4GKa4OCbYOAbIN+aYWCZ4WDZYOCZ4aFb4OBcYN/coGAdIF+c4WAdYZ+cn+Bc32BcXt9cnuDdXp+dXl8dHd8dXV8eHl7cnd8cHV8bnV7bXd6cHR+cXF/cXCBcG99bHN7anN6aXZ9aXB7ZnB6Z3Z5ZXh6Y3h+ZHh4Y3R8YnOCYHF9X3B+ZXJ/Z3KCZ3WDZ3WFaXGBZ3eCZ3mDZXqGaHuBY3mDYHmEX3mIX3iCXHiDW3qDWneBYXaGYXSIYXaMYnKIZXiNZHqNY3uPaHiMaXaLaHSKa3aLY3uLYn2LX3+OYX+JY4GIY4KLZoCIXHuOW3qSWnmMW3eMWXqKWXWOX3iSYHmWYXaSYX6VX3+ZYoCUZICTZn6VZ3+WZnyUXX+WWH2XWYKXWoSYWoSaXYWXWX2aWHubVXubVX2cWXqdWnyeW32cVHqbUXqbUHuYTnuYUnuXUnqSVHmSU36TUn+RUICQToCST4GOUHmRUHeQUnqNTnaPU3aMUneIUniGVXSJUHaITnaHTHmHS3mGTHSHSnSFSnWESXKFTXqJTHyKS4CIS4KHTYOGToSESYSHSYaKSIiKSYSMT4OIUYSIU4KHVIOGUoWLUoCIVH6HVX2DUX2BUn9/U399Tn2BUoR/VYR/VoR9UoaBT4eATYZ/T4mBWYOBXIB/WoODWYCFWoWFWoCHWX19V3t+V4F4WYN2VIN4VIR2VYZ2VIJ0WoR5XIV5XoR4YIV3XYd7W4h8XoF5YIB4YH92YX11YX56YX99YX1/ZIB8Xn91Xn5yXXxyXXtwXHt0Wnl0V3tyWnh3XHd7XnZ3Vnh0VHhzUXV1U3ZxVXZvUXZvUnl2UHl4TXl3TXl1UXt6U3x4U3x2THl5SXl5SHt7SXp9SHd5Rnd4RXl4RXV3Rnx7Q319QX5+RYB8Qnt8QHp8P3l+PXl/P3h6QXiAQHiCQHqGQnWDQXWFQn6EQICGRX+DR32DSX6DR3uEPYGCO4CBOYGBPoN/QIWAQYZ+QIWCQ4d+QoeCQ4iAO36COXyBNX1/N3yENnqENXqGNXmCOXx9N317N3h7OX15NoB3OX90NHt5Mnl4NHd3NHV2MHl3NXh1N3dzOXd0Onl1NnhxNnZvNXRvNXJvM3RxO3ZzPXZzPXlwPnRyQXNyQnR0QnJxQHlzQXtyRHxyRX10QH5yRntxSHtxSX1wSX1uSXhxS35xTYBwT39wUH5xTIJxSoNxSoZySYNvUYBuU4NrVH1sVn1tVXlqWXlsVoNtWYZoWYZuW4dyV4lwWYJqW4FoWYFlWoJjXH9oWn1pV4BmVYBjVYRkU39kVINgVIVfUYZfUIhfVYZdVIRbUoJcVYRZT4RgTYVgS4dkS4NgS4FiTIJeToZkTodnTIppUYdoUIdsUopqUIlvU4xtUotvUoxxTotlSY5nTo9kUJBlUZBnUpFjR4xjRYtlRItmRothR41fSY5fRo1dRodoRIhsR4VoR4NmSYJmRYNlR4prSIxtRI5vSo1tS49vSpFuSo5xQ5BrQY9rP5BsQ5JoRZRoR5NpRZVmQY1qP4tqPIttP4loPYdoPYZqPIdmP4lwPop0QYdxQod0Q4V1RYl0QI9zPpBzPZF1QpBzPZBxO5FwOZBxN5ByOpJuOY1xOItyOIt1Not2OYlxOox5OY96OZB8PIt6Po16PIl5P458OZF4OZN4PZR4O5d4PZl4Ppl6QJp7PJt3Opx4OZt6OZ13PZd8Ppd/QZZ/Q5h/PZaAQZR+RJN/RZN8RZJ7RJF/R5V8SJV5TJV4R5d4S5d7Tph7T5Z8Upd8Tpp9TJx8Spx7TZ59T5R9UJN+U5F9TpGATZGCSpKATI+DUJF6UZB4U5J3VJB1T5B3TY54S413Tox6Sot3TYp6S4p5U5R3VZV2WZV2VJh1VZt4UZt3WJV7XJJ7V5V+WY56W453XY13V4x6WpB2W5BzXZF0X5BzWZFyXpN1YJR1ZJN2YJd2Xpd4Xpd6XJh3YpB6Y455ZY55YI98YY5+YpB/X4x/Yo13Y4t1ZotzYYp0YItyZI5zZpByaJBzapByZZJxaJB1apF3a453bo54apJ5aox3a4p4bYd2aYl5aod7aId3aIV8bIlyb4lxcIdxa4pvcItyc4tydYx1c45ydI9vdpFwdY1uc4h1dId3eIh4c4V3dIR5eIZ1e4V0foh0e4Nzeolze4tye45ze5ByeolufY1ufYhteZB3e5F4fZB5eI95fJN3fpR4fpZ6fZh5f5V2fpZ8fpd+fJl+eph/gJl+gZqAgph9fJt9ep19e555e59+eaF+eqN9d6F/d556d593d6J3d6N1dJ52dJ90cqB4eKN5eKZ4e6l4d6d7fKV4f6V4gKh0gKN4gKJ6g6R4gKN9fqVzfqZxe6VweqRxgKRwf6RtgKJwe6VteaVseKJpeKdrfp1rfqBoepxse5tufJhtfZdveJpvd5tteJ1se5drfJVqfpVqgJRre5Roe5JnepBpepFlf5dpg5hqgplmgJlkgplshJpuhpdwg5xvgpRxhZFxgJJxgJByhpBsipBthpBphI9ohIxpgotriZRti5VujpNxi5duiphrjZhviptripRyipN0i5B0jZB1iJN2io9zi4xyjYxyj4tziYtwh4pxholvhIdwg4ZsgYVvkZBtlZJtlo9ql5JsmJFrmpFqk5F1k493lY93kpR2kpZ0lJVykZd0kY53kox5lYl6j4t6jY17i4x8i4l8iY19k4p2lIh1mId2k4hyl4VwlINul4Nvmox0nYp3mo50nY90n45znZF1oJB0oJF1m4x7m4p8nYl9mY59mZB8l5J9lpF/l5R9mYZ8nIJ8l4R8lYZ+loeAk4Z9nIV5nYR3oIR4oYN5nYV1n4Rzn4Fzn4VxoId5o4d6pYV9o4p6oot4pYt7oYZ+oYWAo4GBnoWBnoaDn4SFnoiEoIF+oX5+pHx+n318n3t8n3l+nXp6pH98p397qX99qn59p4F5poF3p4J1poJyp4RxqIF+qoKBqX+Cq36DqYSCp3+Dp32EqXmFpHyFo36GoX2GpH2JqHqBqXiArXaBqXd9qnZ8pnZ9rXqAr3qAsHqCsnmDsH1/sH18sX97sX94tHx4sn11r3uEr3qHsXeIrnyIrnyLrH2Nqn2MrX6PrXSIrnGIqnSJqXeLp3aMpnSNpniMrXKFrXF/q2+CqW6Ep22Dqm2GsnN/snF9s3J7tHSAtXKCsnKDsm99s217sWx4tGt8smp+sWuAsm2Br2qBr256rW15rG93qm92qmx6rXR2rnZ3rXh2rnl0rntzq3x3rH90r3JzsHFxrnBwrnBtsnBxrG9xq21wqG5wp25uqmtxqGlwqGdxqWdzpmVxqHBxpXFxo3NupXB2onR0pHF4p3duqHlrqHlwpXtyp3h0pHt0pnl2pXp2qnRpqXJlrXRprnZqr3dor3dssHlosHltsXprqXBpqG5no25oqGxpqGlop2lmqWhppW5koWxjn2xiom9hpHJgpHNeo3JcpXVdompjoGhjoGdloGVmoWZhpGVioGhnoGhqnmlrnmltomhrpGZqo2NrpWFqpF9rnGpqmmtrm21tmm5vmWptmGhrl2hpl2ZsnW5tnnBunHJsnnRunXhqn3lvm3xvn31tmn5vnn9tmoJtoHVqoXVoo3RnnnJnnHFmmHJlmXRol3Volndll3Zrk3dqlXltkXhqk3pukXpsj3ttmnplmXpgm3xlm31om35kmH5onXhinnhgnHVdoHhgoXpgoHxfo3thm3FgmXFfmHNemG9flW9elG5hkW5glW5jk25lknJllW1nkG9njnBnj3Bri29ni21pjHNqjHRtjXJwinZtindviHlvh3ptiHtxinFuiW9wjG1wjGxyh21vhmtwhGpvg2ttg2hwjWxuj2tukmtxkGpsjmlqj2hokGpnj2ZnkW5vk29wk3JvlHZymXVylXdzmHdzkG13kW15jXF3jnV2inR2jnd2inZ1jHh1i3p1kGx2kGl3lGd5j2d1j2V2jmN0j2B1jmB3lGp2l2l2mmp5mGpznGhznmh0nmxzn2p0mW56mW9+mXF5lnJ5mnF3lnV5lG1/l22Dkmx/kWyBjmuBjWuEi2qEl2qAnGmEmGaBmGZ+l2h+m2uAnmyBnm6Cn2+Dn21+n2p9oW5+oGt6m2+Cm3GEm3GGnHKImXSBlnWBm3aCmW6Jm22Km22Ml22Jl2qIlGmIk2qJlGeHnWyJn2uKoW2Lo2yLoGmIoXGLoHKNnnKNonOJo3KHo3SEpXaGonOPoXSRn3eRnneSo3STonWVoHSWo3aXoHiPn3qOnXqNm3mOnHuLmnuKl36LmniJmXeKnHeIl3qMlXqOk3uMkXqLlXuQk36MkX+Lj36HkoKLj4OKkIaKkoeKjoeJk36Hk32EkHqClnyEmH6Dmn2Dl4CCknmGkHeGjniGjHeFkXWIkXOHlHOGkXGJjXqHi3uHiHuEin2JiH2Ki3yMi32Ei36BiXx+jX+BjYKCj4SBjoaCkIiAjHh/iHZ9jXZ/jnR9kHN9jHJ+hnWBhHaBgnaAhXSEhnKEiHGFhHCEgnuAgnx8gn2Cgn2Egn+FgYGEgoODhIODgYSChXp6hX13g3l4gnZ5gHZ3f3d1f3R4h356ioB6i4J6hoJ6hoR5hoR3hoZ6jH55j312j3x7knt7k3t5k319kYB3koF0kYBwlH90ln92loB4mH11joFzjIFxjoRvioFxhIBygn5vgX1zjYJsjYNqioVrjoFoiYhnhYdmiopmjYtnjYtpj4tqi4xqiIVkh4Bih4RgiIZfhYhehYhchIdag4VbhIhYhH9lgX5khH9ogoBph39pgHxlfntlenxlfnhlf3hogXhpfXhqgndrfXdsgHdtfH1oen5pd4Fpe35sfYBsfoBueYNldoRje4RkfYVlfYZngIVkdoFkdIBicoFjcIFic4JmcYNnb4dncYNqcoFqc4dlc4plcYlhdYpkd4pmdY1jeYtlcI9ha41jbI5lb41mb5VdbZBaapNZZpFaZ5NZa5ZgbpdhbplhaZZiZ5VhZpNgaJFgZJJgb5ZicZdkdJpicpZmcpNlcZZoc5Jnc5ZgdZdedZtcdZVcd5Ndd5FdeZNfeZBeepFfcZtbcZ9cbptbbZ1abp1Xap1ZcZ1fcZ9gdKBgdKJgdp9geKBgeqJdep5heZ1je5tkfZtie5pmd6FZd6VYdp9YdqBVd55Tc6FUdKNac6ZadKhcdKpbcKVbbqdbbKdcbqlaa6lbbKpadaddd6hfealeeaxed6dhfKlbfaxZfqZagKdYgKNbeqpYeatWea9Wd6pVd6hTdadSeahRdq5Zd7Fad7Rac7BbcrJccLFebrBebLFdbLNdaq9cebBbe7JcfbJaf7NbfbBefbNUfrNSgK9Vga5Xg7BXhLFWhbBZebhQd7NSdrRVc7NVcrJTcrRXe7hUfLpUfrtTfr1TfLtXerpYeLpXerpaf7lSgbpQgblOgbtMg7hRhbtVg7dWhbtXg7dYhLlZgLZLfLZMg7NLhLJNhbNJhrJOh7NKirJNfbdIerhIebZHd7VHerpGfblEfrhGerRFebJEdq9Ge7FDfbBEf7FFfa1Ega9Gf6xFga1GeK5Kda5Ne61LfLBOf61NcrNLcLNMdbZNc7NJcbJHbq9HcrNEcLRDcLVBbrNDcaxHcapJcqhJc6pFc6xDcqtBda1DcatLcapNb6ZOcaxQb61Qba1Sa65TbLBVbrBWarFVbalNa6hNaqRLaKlMaKtOZaxOZaxMZKxQbKZJbaRHbqBIbqVFbaZDbqZBbac/a6U+cZ5NdKJMdaRKdqFNd6VLbqBQa5xQbKJRbqNTbKVVaqRWbadVa59Nap1La5tKaplKaZ5JbZtKb5lJb5VLcptGc5hIdJxFb5hNcJdPbZRRcZhScZZUdJhVb5ZVaZZRZpNQZ5hRaZpSZZhTaJVNZ5NLaZBLaJRIZJNGZ5FFYpJEZpBEY5BDZZBLZY1LYI1KZIxOY4pOYolRYoZRYYVTYIZVYINSY4tIYYpHYIdJYohFZIpDYIdDZYhBW4hJWYlJWotIXItHWoNKWX5GWn9MWIBNWIFPVn5MVYFQVH5NUYBRUoJHUoVIUoVKUolHU4dLU4lKU4tLWIRBWYI9WYdBWYg+V4lCW4JBXYBAX4M+XoI5Yn46YXw7X309Yog4Yoo6YYg8ZIs7YYM0YYIyXoQwYYAxYYMtYIQrX4IqYIIoYYYqYIcoYYonY4kmZYslZI0lZ4okXoArXX4qX3wpX3snYXwqY3oqY3ksZXcsZXspZHwlZn8nYXgtYXcwX3YwXXcwYngyYnc0YHMxXnIxXXI0W3E1Xm8xYW8yYmwyYWszYmg0Y2czYWc2XnQ4W3c6YHQ5YXA6Y3I3Ym46ZG83ZG04XXg2XHs3WHk1XXw1WHw3VX03VX83UoA2VHs5U388Vnw9VH8+V3o9WXk/WXtBVoE3VoM4VoQzWIU4V4c4Wok3Woc0U4Y1UoczU4s1UIczT4k1T4UzVIsxVY0xU48wUo8uV40vWYwwW4wuXYsvX4wwX48vYYswU5EyUZMxUpUvUZUtUZUzVZUvVpYtV5QsV5IsWJguV5ovWZUrW5MpXpQqX5QoWpMnWZEmWo4nXI4nWY0oXpUsYJcsYZMvYJkuXpotXZwuW54uX50wZJUuZZczaJUvaZQsapMxY5M2Z5I4YpE3YJA1YZE5X442Zpc9ZJc9Z5s5apk3Z5dBZJpDaZdDa5ZBZJ1AYp0+YJ4/Zp8/aaBCap4/a6BDbJ9Ba509bp5BbZw9b50/Ypw8X5w7XJk6YJw4Yps1X5k9XZY+WZU+X5VAXpE/XJNDXY9AW5BDW45CWphAU5g+V5pCWJlFWJdGVpZGWZZHVZo6Vpk4VJg3Vp06VJ48Vp4+WJ0+VJ9AWJg4V5Q2VpM1W5Y1W5QzXJg1V5M4U5I8WJA7V408Wo86UpA5T486T4w7To84S484S5A6So43UI8+UI1ATopBUI9CUpBCU5JEVJFGVZJITI1ASYxASYhASYo8SYg7SoQ7SYg4T4U8UYY8UYg+S39DTYVFSYJBR4FAR30/Q4E+QYM9QYU9P4I8SX89Sn07THo8S345TYA5TndBU3pDUHxGVHhFUXtIU3lISnhESXdCSHRCSHlGSnpIR3dHSXpKSHhARnY+SHU9R3M8RXg9Q3k+Qns8Qnw6QHw9SnU9THM7THE8TW87TnQ6UHU8UnY8VHU9VXM7VHM5V3I8TG9ASmtBTW9DT3FCUXFFU25ESG9BRWw+Q29CQ3FARHFEQ2pBQmk/P2s+QmZARGVARWRCRWQ+P2g8PGQ9PWg4Pmo3Pmw4P2o1P244QGw0QG41OGI5NGU8M2Q9M2I+OGA8OF46Nl05Nlw3OVw8NF46Ml44MF80L146MFw8MF0+MFo8MmQ2MGU3LWY2LGM2LGc4OGQyOGcyOmczOGMwNmEwNGIxN2gwOGowN24yNmsuN2orOWsqNmgrNW02N204MWs1MG40MHA1MG4yN285OW87OG4+Nmw9OXE8O3I6O3U6PXY4Png4OG5AOG1CN29EOHFEOWtDOWpFOmlBNW9FN25JMnBIMHFGLnBHMHNGNXBOOHVNOHZLNnVJOXBQOG9SNW9VOm5TNnJTNXRVMXZUNnZWOHVYOnNXOHVaO3NZOnNbMnRRMHRQLnRRLnJSMHNOLnNMLHVRKnVSKXNRJ3JSKXdTKnlVKXtVKnhXKHFNKG1OKHJLJnNKJXZLJnRHLGxRK2pRL21OMGpNMGpLMWlPMWdKMmdOMmZMM2RLLG1TK21VK29XLnBYLHNaMHJbJ21UJGxUI2hTI25SInBUInBWIXJSIXJXIXRUIXRWIHZXJmlRJmdQJWNSKGVNJ2RLKmNOJ2JKKmFNKGBLKWRUJ2FXK2RVLGJXLGZXJGVZIWFZI2daIWZcJWhcIWRWH2NVHl9UHmRTImBTI11SIlpUJV1RJ1pRJFtYIltaIllbJlxaIF1ZHl1bHFxZGlxaHV9cG2BdG15fHGJfHFtXG1pWGldWGVZVG1pTGVpSHVhSG1ZYG1NZG1NbG1FcHVJYHVJVG1FUHFFRGlBQG1VdGFRgFlVgG1dhGlZjHVhgFFBjFVBlFU5fFU5dFEtcFUtZFElYElFjEFFmD09mDU9lD1RmD05oDUxpDk5tDkpqDUhrD0lnCk5sCU9uCE1wCEtvBlBtB1FrBVJvCE1yB0t0BUpzBUh0B0x2BEtyAUpxAkluAEhtA0ptBElqBEdqBkZrBktpBEZoBENnBkNlB0FlAkJmB0VkCURiCkdiCUljCERgDEdiDUldEEhhEEZgDkVhDE5eDlJfCU9eD1FcEFNbDVVcEVNYEVdcEFldEFpZElteEVxgEVpiE15hDVtbC11ZCV1aCV9cDGBWDWJVDGRXDmVXCmRYCmZZC2ZcDGhdB2daC2RdDWNfD2RfEGVgDGFfCmBhCl1hClxgCV1kE2RcFGZdFWdeFGNaFGFZFGBXFF1WFF1UEmhcEmpcE21fEWxaEGpfEGtiEmtkEmxlDmljE2ljFWhlF2pkGGtmFmZkFWRjGGVnE2NlF2tiGnBkGW1eG29eGmtdFnJjFnRnE3NiFHRgFHZfE3JeFXBnFXBqGHBrGHFtFG5rFG1tEnBvEmtuHG5rH29rHGtsGmpuGmhvGmxwIG5mInFkH2xkIGpkIGhiIWlmIGZiIWZmIWVkH3JmH3VlIHZoIHhoHXZkIHVqIHZsI3duHnVuHHRtHXdwI3NtJXJuJnFqJXBwI3ByI3JzIm5yKXJtK3FrK29qK25oLXFtLnRuLnZsL3htLnlvK3lvL3twKm1sKmtrKGptKGpvLGlrJmhsJWVuJWNsImhtIGdvImttJWRwJWFxIWFxJmFzJV50JWJ1I11wIVxwHVxyIVlvH1hvIlltIFx0H1x3Hl93HF54IVx5H2B2HWN2GWN0H2V1IGZ3IWh2Iml0Imp4GWFwGmBuGF5sGV9qGVxsGF5zFlx0FV52E112F1p1Fl93FmB5FWN5E2R6GGB7FmR3FWd3E2d0E2l0F2h2GGp4Fmp6Gmt4E2VzEWVxDWRxE2RvEWRtEGZrEWFsD2VpD2FqDmNpDWJnDl9yDGB0CmBzD11xDVpuEVxtDVlsEVtrD1pqDWB2DGF4CmN4CWR5DWF6C2V2C2d2CWh0B2l0DWl2CGZwBmRwBGRwCWZuCmhtB2ZsCWttBWBwAl5yB15vCF5sBl9qBV1pBmFqBV13A1x4A2F3A2J6B1l2Clp5CFh0B1hyBFhyCFdwA1hvB1duBVdtB1d6CFZ8DFZ9B1R+C1R6DVN5DlN3DFN1DlB6DlB9EFN2EVNzElFzE1B0ElZzElZwEVd1ElFwFE9vFU9tE1BrEkxvF1BtGFFrGU9qG05rGlNsGVVuG1RpF1ZtGk1mHE5kG01iGEtlGUlkHU9kH1BiIVFiI1FhIlJlJFNlJFNoIlNpJFZlJldmJFdiJlNpJ1JrKFRsKVZrKVBrKFRvKVZwJ1pxK1ZxLFhzLVpyLVd1KVpuKVxtKVxqKlppK15uKV5pK19lLWBmJ2BmJGBmI2FoI19kIWBpIV5lIF9nK11jLl5iL2JhLlxgLllhL1ljLlhfLGFfLGNeKmRiKmNcLGdfK2lhK2tfK2tdLWljLGtkKm1gK3JgJ3BfJm5eI29eJm5bLXFgL3NiL3ZgL3diL3ZeL3hdLXxeMXZaMHpZKXpeKX1hJ3heJHlfI3tdJHlhIXxeInpiIHxgHn1hKntlLH1lLH5mK3lnKHVlJ3dpJnRmLnxkMH5jL4JjMn1iM3tjM3tlNHphLoBgLIJfKoNhKoVhK4FdLYBbLH9ZL4NbKYJiJ4NkKIRmJ4VnJYFkKoNnK4RoLYdoLYhpLYNqLYdlLolkLI1lMIhiModjMYthNIZhK4piKYxhJo5jKIxfKIleKo1dJohfJYtmIotmIYxnJY1oIopjH4piH4hhH4hfH4xhHY1fG45gHIteHYdiHYRhG4NjGoZfGIZdGYZaGIZZFoldG4haHIhYHYVVHopYHoRZIIJYHn5WIYFaGn5ZGX9WGH1VGH9bGX5dGXtdGX9fGYFVGIFTG4BRGIRTFoVRFoNPFodRGH9PGH1NG35KFnxMF3pLF3tIF31HGXlHGIFLGYNJHINJHYRHF4VJFYRJE4ZJFIhKEYZIH4RMI4NMH4VOHodPHIdOHohRIIBLIn5LJn5JIXxKIHtIH3lHH3dJIHhFJ4JGKYJGJIFDI4BBIX9DI38/JoRHJohKJYlIKIlLI4tIKINMKYFOK4BNLYBOJ4BPJYFRJH5RJoJTLX1KMX1JK3tIKnpJLXdKKnhNLoBIMIJHNINJL4RFMoVCModFMINLMoRNNoNPMIVPL4dOMYVRLYhQM4BONH5POH5OM3xQNHpQMXxSNn5LN31JO39KNn1HOH1FOHpFN31DOYFKOoNKPoNNOYZKOIZIO4hLPIJRP4BSOoJTOoRVOIZTOINXQ3xOPXpOPHlQP3hOQH5LQn5JRoBJQX9HQX1FP3xFQX9DRYNMRoRPRYJQRIZLRIZJQoVIRoZHQYVGRYZFQ4ZESIVQSIVSSYlVS4NTTIRVSoRXSIJXS4VZSolRS4tRR41QTIxPTY9PTZBNTZBRSY5UR5BURpFTRJJSR5FXSJNRR5RPRpNNRJRMSZZPR5FNRpBLQ49LQY9KR45KSo5JS4xJSotGQ45NQI1OPY9OQIxRQopRPotRQolTQJFPPpNQO5VNQJVRP5dSQJlTQJlWQppSP5RMPpVJO5RHQJZIQJdFP5VDQJNEP5ZCO5BHN49HPI1IP41HPoxEQYxDQYtAP4o/Q4tANpFMNZRMM5RNNpBON41RNYxNNpVKNZhKMphJMZlJNplJMpZHL5VGK5VIL5NELZNDMJFFLpRKLJNMLJRQLZBNLY9KK49JLo1KK41HLotJLIpFLZdOLphQK5pQK5tSMJpPKppPJ5tPJJpSJptNJZlMJ5hKI5hMJZZKI5ZKJpZVJJVXJZNSI5FOIZVQKJdWKZZYKplZK5pYKpRZKplbK5tdKptfLJ1hLJ9gLJ1jL51dMp1cNZpeM6BdNaBdNqBbNqBfMpxhM5piMpdiNJZiMZtlMJdhMJVgMpJeLZJeLJVhMpZcNJVaNpRbN5NaNJdYMpdXMZVVNJRUN5ZdOZVeOZJfO5FfOpdgOplfPZpgPpxgPZ5fN5JhN49iN4tgNY9jNZFlNpBnN45nN5JpOIpaNI5aMoxYNItWMopaOY5aPI5ZPYxbP4taPZBYPYxdP4tfQIdfPoxhPIhePIVePIZaOYRePoJbP4FZP39ZP35bQoJZP35XP3tXQHpVQXtUPHpWO3tbOHtYOXtdNnxaN3xcNnxeQXdWQ3ZVQnNUQHNWRXZWRHVYRnhWQnJSQXBRP3JPP25OPWpNP25KQnFLQnRKPXJHQHZIPXVGPndGOWlMOWdKO2dJOGZJOGRIN2NEOGFJOWFLPGFLPV9KPmBHP1xIMmhDMmpFMGRFMGJGLmFHMWBDMWpALmxBLWtDMGw8Lm5AK29BKW4/J25ALHJBKXNCKnZBKHdCKHlCKntCJnpDKm49KG07Jmo7KW05J2dAJWZAKmU+KmI+KWI7K2E/J2hCJmlEIWhDJ2pGKWlHJWtIKmpJI2xCIXA/IW9EHG9EHnNEIW0+IW47IGw5H204IWo5IGg4HWY6ImY3JGc3IGQ1JmQ2HGg3GWU2GmQ0GGk3FmQ3E2I0EmQ1FWA3FVw1EV42E2EyEWIwD2ExDWMxEWAuE2EsE2AqFWEoFWAmDl8yDF8zCmE2DFw0CVs1B1wzCFwxBVw0DWI5DmQ5DGY5EGE7EF88EGU4EGg4EWk6Ems6Emc8E2g+Fmc+FmU8EmdAF2g/GWVCG2tCG2s+HWVBHmNDHWJHIWFAIWFFIF9AHmZGHWdIG2dJGmdLHmtLH2pNHm5KF2dIFmVJFWRLFWhGFmtFFWxGF2tEF2NHFmBIFl5LGF9GFl5EFVxEFmBCE1xCFF9AE11AGGBRHWBNIWBMHlxMFmRQFGNQE2NSFmdQGGhRGGhUGmlVGmlYE2JOEGFOEGBKD2NODGJOD11MD1xKDVpLDFlKEVpKEFpGEldHDFtNCVpOCldPC1dRCVVOCVNPDFFRB1FODVJND1JNEVRNElVLEFBLElRPFFZPFlVOGFVQFFdSEVlSEldVF1VMG1hLGFNIF1FIFlBFFlJEFVJBFlBAFFRAH1VMIVROI1VPJVVOIlZRI1lIJFdEJlpJJ1tHJ11GKVpGKF5FKltEKl1DJVVIJlNGJFFFJFBDJ1FIKlJJK1NGLFBFIlFGH1BFHlJDHlFBHlBHHk5JG09MG0tKHlZCHlY9HllDHFpEG1hFHVxFIlZAI1U+I1M6JlY+J1g+KFQ8JlpAIk89IE49H00+I00+KEw8KE8/Kkw9Kk4/HlA7HE87G084G1E3GlE9Gk43GU41Fk81FlAzGEs0G0ozHEoyG0k1FU83E1A4ElQ3ElA6FFE8GFc1GFU0GFg6Flg8F1k+FFo7GFk1GlkyHloxGVwxGlwvGV4zHVo1IFo1IVk0I1kzIFo4Hlw5H185HVw7HmA6HF48HGA8IVY0I1QzI1UxJVQwIlI0IVYvIVYtJVgrH1csI1ouJFwtJ1wuKF0tI14uIV8tIV8rH2AuKloxLVkvKVk0KFs1LFg0Kl01KlcuK1UtLFcrLlYpKVMrK1kqLVspL1wqMF4pK10oMFssMlstNF8rM1kuNlsqOFwpOFonNlknOlwqOlomOlgkPVclP1glO1kiO1cgOFohPVQmP1MmQFIkQ1IlPlEoQE8oP1IiQVEgQlMfQlMdQlUgQ1cfRlceR1UfQ1ogR1gdSlgdS1gfTFkgS1UfTVUiTlMhTVEhTFQkSlclSFckS1gmUVMhUlEgUk8iUU8kVVIgVlMhVE0iVEskVkwmVUsoVUkjU0ghUUgiU0kfV04lWFAnV1IoVFIoW1EmXU8mXU0nXk8kX0smYE0lWFQoVlYoVVcsVVcmU1UqUVQrUVQwT1IqTVIsTFMuTE8sS1IvS1AuVFIuVVIwVlQzV1AwVU0wWFAyVU0tV1UwWFcwV1oxWFwxWlgvU1sxUVszUFwzUVsuUV0tUV8uUl0rUlk0UVk3U1w4UVY3UFQ2UVI3TlQ2UFo6UFw8Uls+Ulk+Tl09U11AVFxBV10/WVtCW1tCW1g/XVpEXFhFXlo+X1k8YVU7YVs7YF08X1w/YFY/YVRAYFI/YVA/YVRDXFA/XE07WVE/WVJCWE8/WlBEXFE6XFE4XU41XFM3YUs4YUk2ZE45Zkw4aE05a0s4bU05YEo6X0g7XUU4WUU0V0o3VUk1VEw6XEgxXUUvXkowXkouX00tYEktXkAxYkM1ZEU1ZEUyZUMxZEcxWz81Wj0yWj83WD03WUE4WUAyV0AvWD4sVkIvVUIsVEMxW0EtXEArXTwpXkEqYEEoYUMoY0MlZEUkXDcsXjcxYToxWDctVzcrVzUqVTkvUzcuVjgxVzkpVzknWTgmWDckVzwmVT0nVD0oVD8lWzgnXTYmXDIkXzcnYTUmZDYmZDgmZTQoWzMoWjEpWDAnWS4mWTArWzAtWjAwXS4tVzEmVS8hUzIlUTEjUTInVzIiWTIfWi8dWjQfWikfXSwjXikjXy0jUikhVSglVSYmVyQmWCIkVSceUycdUikcUCkaUiscUi4cTy4cTi8bUi4ZTC0fTSwjSiseRyseRiofRi0cQysfRC0dSi8iSi8lSCsmSDElSisqSCsrRi0rTCwsTS4sTC8pRyktRSkuRSswQy0wRScvSy0zRiw2QSw1Qik3STA1STM5SzM0TDMyTTU2TTUwTjI+UDI9TC8+Sy9BSi09TTQ/TjZDTDVETzg/TTpAUDg9TTw/UDZEUDlIUTpHUjVIUjVLVDNMVTJKVDNOTjxKTjxNTjtOSz1KSjxISz1FS0BFTz5NUD9QTj9STj9UUUFQTD9RSUBSST1TSDtSR0FQST1VSDtXRjtYRT1ZSjlYSjpbTT1ZSz5dRDlZQjpaQjpdQjheQDhZQDhXQjhVPjhWQzxeQzxhQDxiPzxgRD5hRz5hSEBjRkJjSkFjQDtkPj9mPzloQDppPzdnO0NqNz9oNz5qNj5mOz9rPEBuP0FtP0NuPD5vQEBsQ0FsREVrRD9qQUNoQUVnQUlnPkdqPklrP0ptQExuO0lsQUhuQ0hwRktwQ0ZxSEtsR01rSE9rSUlqSkdqS0ZsSkVoRU1qRE9pQlFrQVNqQk9nQVFmQ1FuQlJvQ1VwRVVxQlFyQldvQllwQ1h0QFtvRVtyR1t0Rlp5SV10RF13Q115QVt6QVp8QV96QmJ6Q2J9QWF/QFp4P1d4QVV5QFR7Pld2Q1V4RFN5RVR8RVJ9RlN3RlZ8R1d+RVWCR1l+Sll9SFqBS1x9Q1eAQVeCQFSEPlmBP1OAP1GBQVCCQE6EP09+PVB9PU96Pk16O095RVCFRU6HRVKGRVOJQ1KKQ1GMRlWJR1aHRlaLSlWIQVKJP1GKPk6NPFKJQE2JQEuJQkiNQUmHQUeHP0WIPUaIP0OHREyLRkuNRkuRSE2MQ0+SRFGTQ1KVRlKSR1STRFeRSlSSS1aTRliURVqUR16URFuWSFuRSl2QSmGOTFuPTl2OS1qNUFyMR16ORV+MRGGORGONRF6LRF2IR1yIQluHRGGQQ2KRRGaTQWGTR2OTSWWTSmmSS2SUSmiNSWeLSmaKTWiNT2iPT2aRUGqQUGeTUWqSR2mLRmiJRmqGRmyHQ2mKRGuLRmqNRmmER2qCRWmARWaASWqBSmx/S2uDRGp+Q2l8R2l7QWp7RmZ3SGd0RGR1QmR0QWZ1QmRyRmp2Rmx0SW11Sm1zRW50RW93Qm10SW13TG14TWt5T2t6S296TWd5UGR3S2V5S2J6TGF3TmJ7T2d1UGZyU2ZzVGVxT2dwTWZvTmRtUGNuTWRrVGd1Vmd1VmN3V2l3Wml3Wmh5W2p2WWR1WmF1WV94XGF0XV90YF9yYWFyYF1xXGJ5XWF7WmB/X2J8WWJ8V2N+VGB/VWV9VGZ/UWV/VWaCVWB7U156U1p9U114Ult3T1x3U1l2Tlp2UVd1T1h1TVZ0V1t8WFl9V1l/V1iBWll8W1l6XVl5WlZ5V1yAV1yDVVqGWF+EV1+GWF6IVWGHV1+KVWKJVWGNU1yDUFuDUFiDTleDTl2CTl+ETV+GUGGDTGGHT2OFTmOHTmWIUViBUVWAUVGCUlV+UVN8U1R6UVF9VVOFVFOHVVKJWFOFWVOCW1OCXFOAXFSDUlWIUVWKU1aOUFOLTlSNTlaOTVKNVViLVlmMWVmPWVaNXFOKWVKPYE+LY1OMZVKIZlWKYVCIYU2HY0mHYE2EXE2EXEuCZ0yMZ0qNaU2IaU2FaEuEak6EaEuBak6BaU2AaU1+aE6PZk6RZ02TaVKSalKNYk2TYlCUYk+XYkuUYEuWYEuYXkqVYlKTYlSVYFWUX1WSZFWVZVaSZ1iTZ1mVaFmRX1eVXVmUYFyTXFqWXl2PXV+PW1+QXlyMXlmJYVqMXmGPXWSPXWWNXmWLX2WRXmeSXGiRX2iUW2eNWmiLXGqKXGuJWGmLV2iNV2mJVWqOXmuMX22MYW2IYW2OY2uLZWqJZWaHZ2mKY2mFYWiEY2eCY2WBX2mDXWeEW2iDXmSDZGmAZWl+aGh/aWd+Zmt9Z2p6amiDa2WDbGSDa2mFamyFa2yDam2HaGGEaGF/ZmCEZ2GJY2CIZmGLYmGKZGGMY2GOal6Ba11/aFp/bVx/b12Ab2CAcVyBaFx7Z1p6aVh5all3ZVt4ZFl2ZF15alR5aVJ3ZlJ3a1N7bFB6bVB4a097alF1a0x2ak9xalFwalRxaVJualVvaVRtZ0l2a0d2ZUh2Y0l3ZUV3Y0p6aUdya0Zxa0pvakVvaEZubERtcEpwb0lsc0lwckdycEZycU1tcE5qckxpck1mcVBqb1Jsb1RtcVRub1ZrdEtqdUpodEhndUdld0lqeEprc0ZocURnb0RjcENpckFqc0Jscz9pdUFtdD5qdT9sbkdmbEdka0pka0tmakZkaEZmZUdlZ0NoaktjaU5jZU1iak9hZk5mZE9mY1FoZVFqY0xoYExoX0poYlNnYlVpX1VqX1ZrYldnX1dlXlVlXlllW1NqXlFuWlFpW05pWlJuWlJxWlByWk90V1NyV1ZwV1R0WVhxWU5wWktwXEtxXUlyWUpuVkpuVUxuVUhtXkxwYExxYU5zY05zYkxuZEtvZUpwZkxtXlF4YFR0YlVxYVdxY1huYlpuYlJ5ZFV8YlB9Y1F/YE59YVZ+YliAY1eCYlaEYFmAYFyCYl2AXl2CZleFaFmGaFuFaFWEaVSGalaCaFmIalqJbV2IalqMbVmHcFmGb1SGclmIcleKcVeCcVSBc1OBc1GAcVV+c1d+dVZ9c1l+dlKEdk6GeFOFeVWEfFWDfFKBflKAck6Ib0uIcFCKcVKLclOKb1ONcUyEcEuDcEaDcEyAdEmEdUeEd0eCeUiDd0aAeUZ+eEh9dkh8eUN9ekl7eUt6eUp3eEt2e016fkx5eUh3d0V0eENzfEZ0fEZxekZwfkZwdkV2dEN2cUV5dUB3dD52cT52dTx2cEJ3cEB8bD94aj96a0B1bUN9bUN/bT+Aa0SAakZ+a0V8cEGCcT+Dc0CEc0KGcDyFbzqGbTqKcDiGbzaEcDSEcDOGcTKCcDyJcD6Mbj+MbT+Ocj+MdT6Mdz+Md0GNeT6Ma0KKZ0GKbESIaUaIbkWJZDyJaDyFZTuEaT2DZzmMZjuPZjqQaTeNZj2OZj+QZECQYkGRaECRYUKNX0CLXkGKZEaMYkePYEmNXz6LXj2KWz2KWj2JXzqKWz2NWD2OVUCNWT2RWj+SXECQWkCUWESMVkWJWkaNWUiMWEqOWkqLV0yNWkyKWE2LV0+LWEOGVUKDW0KEXUaFX0OEX0aFYEGDY0WEY0CDZEKDVD6GUj+HUD+GVDuHUkGJUEKKT0SITUWIUEOMTkSOT0SQUUSRTUWSUUeFT0eBU0iEU0qGVkuFUkyFT0KBS0J/UECAUD5+Tj1+UUB8TEGDSUGESEOERUOESUCGST2HSDyHTD2HSUWER0iBRkqBSUmFSEZ/R0d9SUl8SEp6RUd8S0p9TEx9Tkx5TU1/TE+DS1B/Ukl6UUd5T0V5VEh8VUp9VUV+UkZ2UUV1UkJ1VEJ3UkVyUkNxVUZyUkB0Uz50Vz10UTxzUTxwTz5vTj9wUD5sVj9xWD9xXEBzWEBuWUJ0W0N1W0J4XUJ4WUZ2WUB4Wj96XTx7Vz57WD2AWDp+WDyCWDiAWDqCWzx3XTp2YTl3XDl0WTh0WTd2WDhyYj51ZT54YkB0YkBxYj5wY0FwY0B8ZT1/YUF9YUR9X0V+Y0V9Yjl9ZDh8ZTZ8YDh+Xjp+YDaAZjd4aTd5ajZ4Zjl1aDdzZjZyZDRzYjNxazh8bjV9bDp+ajOAai9/aDOCZzWDZjSFZDSEZjWHaTF8aTB6ay95ay13ZzB4bTF5bzB4cDJ3cjN2bzR4cDd3cDd0bjdzcThzczhvdTlwcTxwbz9wbTxwczZudTVtdTZqdDhqdDJscjJqdzZpeDdndjdjejdmfTdnfTZpfzdrfDRqdDVmczRkcDVicjFlcDBjcS9hby5kbjllcDtkcD1kbjpnbThpbDZobThrcDphcTxgcD5fcEBgcjtebj5ebD9ebUFcbkNda0FgbkNYbUZWaEhaZURXZERbZUBaZENeZT9cZEBeZklXZkxYY0xXYktVZ05WZ01UaU5YakxTYUxZX0xYXU1UXk5aX01dXk5fXUxhXE1jYE9VX1BSXk9PYVJSYFNPYlNNZFROZlRNaFVOZ1JLYU1RYUtPY0lPZUpPZ0dRaUlOXUlRW0dUWEZVVkdWWERTWUxRV01QVU1MVk9RVk9TWFFQWk1KWUtJWEtHXU5KWUdJVkdJVUZHWkRKWkVNXERKVUhLUkhLUElHUUlNUUdPUUdRUEVTUEhWUENXU0tIUk1GUktEUUtCVE9GU1FIVVNJVlNHVFRLVUlBWEhBWEc/WUdDWkY+UURCTUNAUUJFUURHU0FFTkZDS0dDSUg/SklETUk/TUo9TEg5T0w8T049TlA7T1A/TVI8TlI+T0Q6TEI3UUM7UUA5U0Q6SUE7RkE4SEE+RkY1RUc0REc5Q0c7QUU7QEU5QUM9SEY1SUYzSEQvTEczTEk0TUcwT0o0SkIySkAxRz4vSz4zTj0yTj0wTz8zQz8yQD8vQkA1Pz02PkE0Q0IvQkMtREMrQ0MpQkYuREcuR0EpRz8oRz8mSkIqS0QqTkQqT0QoUEMnUEAoUUMlRTspQjomRjkrSDksSjkpSTYoQTwpPj4nPkAoPTwrPzgsPTovPT4lPUAjOkIiP0AhQT8iP0IfOT4iNz4hNT4lNzwfMz8hLz0gMEIjMUMlM0QkMEQnNEYmMUYoM0coNEgpKzsiKT0hKj8gKjolKTsnKTsoJzshJTwgIkAgIzsfJD4kIz8lJEEmJEIoIj4nJkIlKEQmKUUqJ0YmLEAqLj8pLj0oKj8sMD8qMjsrNEArNDsoNTgoOTkpNTclMzgkNjUlNDchNzYrOjEtODUvNzcwNzgzNzozNzs2Nzk3Nz02OzMqPTEpPy4rPjEmPDIkPjIiQDEiPDIgQDIsQDUwRDMtRjIuRTIqQTIyQDM0RDI2PzE1QjY2Qjc8Rjs5RTo1RDQ+RjVASDVAQzA8RDBBRC48RTZCRjdERjVGRDVIRTlFQjlGRDtDSDRHSTNJSjRLTDVLSjFISS9HSy1GRy5JSTRNSjVPTTJPSDVRTjVRUTBTUjZSUjhRTjJVTjFXTixXTDJYSzBaSTFcSzRdTTNeTC5USyxTTipSTihTSixRRy1SRS1QRixUTytQUSpPVChRUitNVCpMUCxLUytTVStVVSdXVS1WVi1YUSdZUSRXUSNYTidZTilbUCpcTCpbUSVVUSNTVB9TUCNRTiBPUiBOTh5OUh5NUB1NVSNUWCJUWCFWWiBWWiRTWSZRXCdRXiZQXyZOXidMYSVOVx5dVyRcWSVdWidbXChcWypdUx1bUxpZUhlZUB1bTx9dUSBdTR9dVRpYVhhWWBhWWRdUVBlUUhlUURZUUBtUThZUThpUTRhUWhlYXxlVXRZYXh1TXx9TXiFSXB1RWxpQXBhQWRpPXBZPWBhOWRZOYSFWYyNUZCJSYyFYXyBbYh1aXh9cYRxcXx1dXRteYyVUZSdTZihVZilWYylSaShUbSpRbSdWbylXayZYay1TbC9Rby9OazFRaTJRaTVSajZQazhNZzdOcC9Scy9SdC1Rdi1QdDBUcy5WcS9XcTBZby9WcytQdipLcidPciZScyVNcSRScytLcytJcS1Iby1JcylHbyhIcSVGcC5GbC5Eay9CbzFDcTNFczNEcDRGaypDZipEaydDbSZCbihAbiRBcCc+byNAcCU+ciQ8aCtHZitIYi1IZyxLai9KZzFMazFLYzBEYC5DZTJDZjRFaDVEZTVHaDZGZzZHYy1BYitAYCpBXylAZCo+YCdEXCdFYSZHZCVGZSRHZCREZyNGZiNEXCxHWCxFXS5KXC1MXzBLWi1AVis/Wy4+WSY/WyQ/WSE9WSBBWR49WR5BVxs+VSVFUSZFViZIWCRIWSRLWCFHUi1EUy5GUTBHVS5HUCg+TCY+USg8SiFBUCBBTx5CUh8/SyRFRyRFTCVISiZJTSRJSSdDRyhCRiZARCZARyU+RiQ8QiE9RyM6SSI7SCU5RiE/RR5AQh9CQR5CRh1CQyJDQSNEPSNEQiVFQiRIQyZJQCRJPyRBPSU/OSI+PSY9PyU7Pik+PSQ5PB49ORw/Ph08OhxENhxFPBxGOCBFNSFFNSNENSVFNSFINh9JNB1KOB5KNBtMOBxLNhtMNxlOMCZBMCg/MiM+MyE+MyBBLyZDLSdDLilFLCtFKyZFKCZEJyhFJSlFJClCMClFMStHMyxGNC5HMSpJMixLLy1MMitONixCNzBBNitANCs+NS08NC47Nyw7MzBBMzJBNTZCMDNALzJCNDNFNTVGOTdHNTRJNTVLNTRNNDJNNTZPOTNFPDRFPTVDPzZDPTFFOzRBPDY+OjlAOzU8ODU8PDU6Pjk9Pjw9Ozw5QD08Oj48OD87Nj48NT8+Mzs7Mzo+NDk/Mjk5MDo/LjhBLDlAMTtDLz1DLj1FLz9BLD9FLUBCLEFEKkJELTZDKzZDLDdHKjNDKDdHKDhJKjdMJTlKJTlMJTxIJzRLKDJMKTNPKzJPKjFLJzRQJzVSJzJVJTdTIzVTITZVIzNSKjRVLDJXKjJZKzFbLjNXLzNVLjVYKTRaJzRcJjJcJTFeJjdcJTJaIzBaJC1aIytaIjBXJy1ZKCtZKShcKyxYLSpYLCdXLiVYKipgKCxiKSxkLSpgLi1gLilfMC1iJixhJC1jJCtlIiplIi1hJixmJippJStqJC1qKSppJCpsIytuJC1wIy9xIilwISdvJy1wKC9xJzNwKy5xKyxvLixuLy1vLyptKDFtKDNrKTVsKTdtJTRrLDVrLjdsLjtqMDVrLThoLDpmLjtlMDplKjxnLj1kMD9jMT5hMz5gMDxfMTtdNTheMTxbNjxeODtfOTdgOT1hODdkODNjNjdmNzloNjVoNDViMzNgNTBdMTRgNjRdNzRbOjNbOjFZODZaOzNdPTJePi5dPzNgOy9fOixgOSteOildOC1iOC1cNyxaOilXNi1YPCxYPixXQChWQC5XPylaQCdbPyVbPyNaQSdePihfPCVbOyNaOyJYOyBXOCRbOyRWOyNUPiFSOyVSOyRPPSdSOSJPQiJUQiBVRB5URCRVRiRURiVRRiJPQR9XQRxYQRhXQBxbPh1bPBxZPR5cPhlTQBhRPxdQPBpSQhpRRBlQRRdRRxZQRRtPRRdURxZVRhNVRBJURhdYSBJWRw9WRg5YRQ1YSg5WSw9YSw9URhBaRQ9cRBFeRRNeRw5eQhFeQRNfQBNiPxJjPxRbPRZfPBRaQhVjQhVmQRllRBVnRRNmRBZqPhdoPRpoPhtqPhpsOhloPh1qPh9sOx9tOyBvPyFsOh5sNx5tNRxwNR5rOBpuNxhvNxZuNxZsOBRvOBFuOhFsOxNrNhBtOg9qOw9oOg5mOA5mPg1oOw5kOg5iPA1gPg5fORBhOwtfPQpdPAtaOgxaPAddPgtZPgxXPgtVPwlVPw5WPAtTPAlRPwxPOgpPOQ1QOg1TQAhPQghOQgpLRAtLQwZNQApKQBBIPwpGQAhFPgxEQghEPQ5KPBBLOxFJOhNJPRJMPRFPOhRPOhJSOhBHNRFHOBBBOA1DNhNEMxREMRNDMhJBMxdEMRhELxhCMBhGLxJELhFDLBJBLBE/LBRBKxY/KxY7KhhALxY9MBY7MBQ4Mxc8NBY+Mxo9MRA7NA86NA44NRE6OBE6ORE8ORI+OBQ4Ow87PQ89QBI8Pw08PhI/PxVAQxZAPhZCPBdBPhVEQxNCRRBDRA5ERRRFSBRGShRESBZITBVGSxZIRxdKTBdJSBhLSxhLSA9DTA5FSQtBSglCSQdBTAhCSQxISwxKTQpKTgpLSQtMTQlITwdHUQhGUwdGUAlEUgpCUwxCVQ1BUQhAUQ5CUxJDVRNDTxJCThE/ThE9SxFAUxFFVRJHWRJHVBBKUhFLUBFKUhNNThJLUBROThNNWA9FWg5EXRBCWgtEWRFBWhI/XRZAWBM9VhM+WBE7WxdEXxhFWRhGWhlIVhhFXRRGYBRHZBVFXxFHYBFKXhBMXA5LWg5MWQ9OWQxLYRNCYxNAYxZAZhdAYhI+ZBA+Yw5AZQw/ZApBYho/YxtBZRxAXxs/Xx4/Xho9ZBxFaBxGYxtHYR1IYh9JXx1GahhEaxhBbRdBahVFbBRFaRlAaho9bBs9bB0+aBs8Zxk7ZBo5ZRw3cBw8cSA6cho6cRg7bhg7bx44ayE3bx80biEycCMxciMybyQvbiQ3bCU4byg3aig7aiQ7bCk1bCs0bC01ay41aysxbCkuaScwby42cjE1cC86by07cTE7bC48bzQ2cDU0cDg2bzYycDgxbzMwcjk2cj00dD0zdTw4dT45dz87d0E9dEE/cT81cEEzc0Iyc0M0bkIzdEIwdEYtd0ItdUIrdz8udkcxeUsyc0oydEk1cUo2cUg4cEw2eU8vd1EyeVAte1IteU8qe1I0elU0e1YyfVI2fU83ek04e1A7eVY1eFk1eFk5dlkzdFk1dlgxeFw3eF45e2E4e2A8fWI8f2E7gF86gWM6g2I4hl85hGU3gWU0gmg1f2YzgWo0f2gyhWI8h2E+hmFAhWJBiWI9iWQ9iGBCiGFEiWVDimBGil1GjF1Ii1pJjVlLhmhGiGlHiWtHhGhHgmdFf2hHf2lJfWdFiWdJi2hKjWlJjmhIjGZMimVNjmxJj21Ikm1LjHBHkXFHjHNHl25Gl2hIlWZJlmRIlWdMmW1KnG1GnW5Mm21NmmxMn3BHom1HonJFpHJHpXRGpHZFpXhFomxDo2pEpWlBpGpAomhEo2VFoWNFn2NGnWJFnmBEm2JGpmhCqGdAp2U+qGM+qmZBqmVDqmVFqmJDpWU+pGI9omM7oWU6omE/oV89omE5oWE3nmA4nGE2omA1oV02oVs0ol04m187l2E7nF09nVs8nFk7nVc6nVY9m2M7mWU8mWY4m2c9m2dAm2VBnGlBlmc6lGg4k2w7kmQ4kGg3kGM4lGw3lG83kG83lHA0knE6j3I7jHM5kHM9jnM+jnNBkHRCjXdDkXhDj3Y2kHY0knQ0j3k3jHo3ink4iHo4h3s1kHcykXcwlXYwkHgtkngrkXkpk3gnknollHowl3owmHozmnozl30wln4ulnwslYAul3k0mXY3mHQ3lng5lXs5lX04lH85kno9kX88kHs+kH4+m3Y3nXQ3nXQ7oHU2oXM2oXE1o3M3nHE5nG87nm88n24/m206nG04m283oG87o3E9pXE/pW46o3Y+oXhBpHc8m3VCmnVDm3g+nHo9nHo7nH4+nXw6nX47noE6mnBCmHBBl3JAl25BlW1Ak2tAk2tDkmo/kmZAlGY/jWo+jGtAi2s8i21Aim08im4+kWRAkmJBjmBBk2FDlF5FlV5BkV5AjVw+i1w/jltCkFpEjVw7i1w6ilo5i1g5jV03j1w4kFw6hlg5hlc2hVk1hFk6hFk8glc6h1U2hFQzg1I0iFIziFExi1M0g1Uxf1EvgFYuglItgk8shlAqgE8qgFAogVAmgFMoglEkgFQmgVMkgVUihkwriEwqhkomiUorikouikwmjkskik4ji04giFAjjEgijkgdjEQgjkMfkEIhjUAekUgfkkkdlEgclUYdlEwdkk4elUsglUgamUgXmEkVlkQXlEUWmEMWm0kYnEoWn0oXoEgXm00WoEwXo0wXpE4Yo1AYpEwVpU4aplAcqk4bpU8eo1Afpk0fqlIcrFIcrlAfrVAgrVQdrFYbrVkbrlkdrVoZsFAesU4gtE8gtU8esUwgtU8it1AiuFMhtlQhulMhu1Uhu1Yeu1gdvlYhu1Qdu1QauFQZuFQXvFIZu08atFQas1MWs1YatE8Zs04XsE0Xr00ZtUsXr00VrEkWrEgUq00Tq1ATqlARqlEVq0kYp0YYpkgZq0Uaq0IarEEYqkAWqj0XpkQXo0MapEEbo0IVpEMToUQboEQdnUQdnEUcoUUfpEUgoUgenEMfmkMfmUMimkEjmEEemT4flzwelzofmjkgmEQil0UllUYlk0cjmUYmmkglnEomnUkonUsllEYnkkoplEoqkUYqkEQqj0MsjkQokUwokU4oj08qjU4pklAmklInlFMoklQkkFAsjlEtjlYtiFUpilUmh1cojFYmiVkuhVwtiVwxil4wjFsxhFwwgl0wgWAtgF4yf1szfl8xflw1hGEvhWMvhmMshWUqhmUwh2cwiWgyiGg1h2EsiGEphmAnh2Alil8qjF8rjVsrkF0sgl4ngV4jgF0of1snfVooe1kneVgoeVgrd1cngWElgGIjgmMhgWIff2UkfWQlhGMihmQgiGIdiGUiimUghlwbiFshilgfhlcgilYehlUeiVQegVwcgV0agF0Yf1wef1ogfVohe1sgfFgjgmAagmEYg18UgmQZgmYXgmgYgWoWf2oVhmEXiGAVi18XimIUiGQTh2YTiGMQjFkXjlkYiFgXh1gVh1sVjVkUj1kTkVsUk1oVj1gRjVgQkFYQjFYOkF0UkV8Ukl8XlGAYkGEUj2ERjWARkGIQkF4ZkV4blF0djl0cjlsgjl8gjlsjjl8jjl0kkloblFgbl1kamFgck1YakFMaklQel1oYml0ZnF0ZmVwVmV4amWAcml8enGAfl2IcmV0fmlwhnVsjmFohnVofn1ken1cdoVYdnVUanlUXnVcXm1Mam1Idm1AdmlQfm08fmlMhmlAhmk8knlMWn1QTnlATolQTnVIQnFAOmk4Qm0wRnk8NmE8QlE0Qk04PlVAUk04Vl1EVlEsRkkkPkEoQj0kSkkcQj0wPjE0QiUsRi08OikkPiUcPiUURiEQRiEYMh0gLh0oLhUcJi0YSjEQUjEYWjUUYjkMTj0IRkUERjUARikcWhUgZiUsYjEwXiU0ai08WiEYchkUdhUcfhkgghkMdhkEbhEIfhz8cg0gfgkkhgUcjf0YjgEsggU0fgE0cgVAbf1EZgkglgUcpgkkrhEUoh0Img0Emf0cqfkgsf0cugEUue0gse0cpfUYpfkgwf0cze0Qyfkg1f0c3fkk5f0g7f0o9fUA0fD0ye0A1fEI6eUQ4fEM8eUU6ekY+fz4ugDwvgT8sgEIsfjoufzcvgTYtgTcrfTYvfTMvfTMyejIvgzUvhTQthTEuhTEwhzUthzcsiDcqhjktiDkohzsrhzsphjAtiSwsii0qhSsshSkthCcsgigrhCUtjSotjCgtiycrjisvjy4vjS8xkS8wjSYvjSQviyMwiSQwkCMwkiUxkSYzjyU0kigzjCEyih8ziCA0hyA2ix41jh00jhwyjxw2hiEyhCMzhSU0gyY2hyY1iCoziig3iyo4jio4jyw5kS03kSw1ki84hTA2hjA4gi01gCszfis0fCkzeikzhjI1hTY1hTYziTQ2izM3ijM6izE7jzM8jjA+hDg2hDw2hT03gTo3fjk2fDk5fTw6hD00hkAzg0M1hUExh0MwikEwh0QuhkM5hkY4hUg5h0M7iEY3iUk2i0g0i0Yzi0o4jEw3jEo0jkoykEkzkkkxjkwxkEg1kkc2kkY5k0Y6j0M7jUE6jkU9jkM/jkVBj0dBjkRDij0+jDs5jTw3jjk2jDw1hjs+hTg9hTc7gzw+hD4/gUA/fz8+gUI/hTc/hDQ/gjQ+gDU+hDNChjREhTNGhDVHgzVKgjI8gDI6fi85fy49fiw9fSs/fixBgCo9gCg5eyo/eilBeidCeiVAdypAdiw/dS5BdC9Bdi1EeiZEeCNFdiNGeyRIfCJJfSBIfSNLdh9Ddh1FdxxFdh5AdR5HdRxJcxtJcRxJdR5LeBtOdh5QcxhKcRdKcBhOchRKdBVJdRdJbRdMaxhOaxhSaRdNaBdKbRVQbRRTbhZWbxFScRZTchhUcRpVcRtXdBhTdhZSdxVUdRVQdxNPeBJRehBQbh1UbB5YbB5SayBSbh5PaxtWaRtYahpaahtcZxlXZhpVZBtVZhlTbBlabhlcbhtfcBdccRVgcxhechVidRhgdBdicB9dbiBebiFgcSBbdSBYdSBdaiFeaSJiaCFcZCFfZSRcYiNgYyZdYCZfaR5gaB1jah5naBpiZhphZRdhYxtibB1kbh1mcCBocRxlbyRlbidocCVjcCRhaSVoaShnailoaiVraSNsaiFraCNuaR9taCBvaCdlZyljZStkZS1jZylhaSpfaS1gaSldai5eaitbay1cbC9aYyplYStlYCpoXSpoXypjYSlpYShsXyZrXiVtXyptXyVpXSNoWyJqWyBrXyFoWiRrWCNsVSJqVyZtViBtVB5tUx1vVB5xUxtvUhlxVRhxURdwThdwVRh0WBd1WBV0WxVzVxd3VRl4Uxh2VxNzVxFyWRFwWxBwVQ9yWBJuWRJsXRRqVxNqVhVrVxdqVBVrXhduYBVvYhVuXRlwXBtvWhpuXB1wXxNwYRJxYRBvYw9vYBBzYBJ2YBB4Yg54XhB5YA9tYA5rYg9qZA5pXg1qXA1rWgxqWgtoWAtrYhFpYxNoZxNoYhVnZhNraBNsbBFsZxRvaRNxbBRxbBZwbRJyaQ1sagxqbAxpaAttZwlvZwtxZgdvaQ1oag1mbg5kaA5kaQ1haQtgag9gagteaw9dawxdbhJnchFnbhVocBZpbBZncBBqcg9rcw1qdQxqcQ5ucQxocgpndglkcAhmbwZobQVnbAVlbARpdhBgcg1fcQtecAlfcQpcbwhecAhcdw5jeRBkfRFiehBmew5gfQ5ffhBbfQteewpdewpaeQleeQlaeAlcexBdexRbdxNbdhFacxFadQ5XchBZcQxXfBVdfhdegBhafxdgfRhiehdifhlkhBRbgxRYhRVXhRJchhNehRRgiBJfgRNYgBNVgRZSfhFVfw9WfA1Vew5VfAtWfhlVgRtSfRpWehpWfR1WeRtZhRtWhxxShhtYhRtaiRxXhR5bhRhThhdRhRhOhhlNhhRRiBNShxBShg9RiA9TgxlOghpMgx1KfxpNfhlLfBdLfBZNexZKgx1OhCBOhyFMhCFQgSFRhSNQgSJUiB5Oih5Nix1LjB5JixxPjhtOiRtKihtHih5EiBlGiRZHiBRGhhVFiBJHhx5GhiBFhCFGgSJDgyVFgCRCgidEgCdCiSNHjiZFiyVKiSZMkCFFjyFCkSFBkR9GjSFBjCE/jSQ8ih8/iR88hx08hR49gx87hB85gSA8iCg+hyo+hiY9jCxDjy5DiytGiCtGiy5HhypIkytDky1FlS5FlCxBlCs8kyg/kyxHky1KkS1LlytKmSpLmStNmClPmyxKmy9JmzBLmi9Hmi1Omi1RmC1SmCxUnC9Sli5SlC5TkytTkitVki9RkzJRlDJPkzNTkypRkihSkyZUkiZQkSRQjiNRkSJNlyZWlidYliVamSZVmiVTmSNSnCZSlilYlSpbkylckylelS1amC5amDFZmjJZmzRZkSlajyhbjiVdjShYiyZZjSpYkSFbkiFdkR9fkiBZkh9Vjx5XlCJelSJgkyNikyJklyRgmSRikiVhkCZjjSRmjyhijSNiiyFiix5liiBghh5hiRxghRxiiBpghRphhBhhkBxlkB1nkBxpkhtkkhpikBpglBlhkR9okSBqjyBukiNqiiFsiR9rhx9riSNriiVsiSZujCdriihvjCltiRpqiBpthhhtihlpiRpviBpxhhtyhBp0ihpzihl1ixp3iBh1hR1xgx9xgRxwgyFwfx5yfB1yex90fCF0fyB0ehtveRtseB5pdxlseBdudxhqdxVudh5tdSBsdiNpcyFuciNtcSRwcyVxdCRzcyFzdiR0eCNseiVsfCVueyZwfCdyfydxfCd0fCJpfSFnfCFlfSJjfh9ngB9pghxpghtngxxreSFleCFjdSBkdyhkeSthdypmdClndCpqdixqciprfylffylkfy1mfipofSdafSJdfyFefCFbfh5eeidceClbeixZdCdcdSxccihdeyxcfC5cfi5afy9Zfi5efTBgey9ifTJhejFjezJjgStYgitUgihYhSZbhipbfitVfStSfi1ReypSeiZReSdVeSRReCVVeSNTfi9SgjNOfzNTgDVSgTJVhS9PhS9Lhy1QiSxPiy5PiipQgi1MgSxKfixIfilMgihLfTFJfzJGfDJLejFNei9NejNPezJGfDNDfDZDezdFeTNCeTQ/ezM+dzQ/fjdCfjlCgjlDgD1EgjxIgkBFhjtJhzxMiD5MiTpJijxHiD1GhTxOhT1QhjtShjlSgz5Qhz1UiDtWhjpYhDtXiT1XhzlZhTdbhjZdiDZdhDZahjRWhTFaiDJVhzBYiDBWhTVfhTFhgzFghjVjhzhjhzllhTlnhTpphzBihi5jhi1lhCxmiCxihylihShhiChkhCZhhCNkhy9nhy9phjNriC1rhCttgilthCdqgidsijFqizRrjTRpjjZpjDRtijRviTJvijZwjTJnjzNljjRjjTNikDBlji9kkS9njjZjkTdfjjpijTtkjTxgjzVbjjdZjDdYjjFcjzJYjS9ckDlYjzhUkT1XkT5ZkT1bkkBZjzxSjjtQkDpOkjxOjDxPjT9Pi0FPi0NPi0VNi0RLjEdOkDlNkjhLkTlJjzhHkjVLlTVJlDVHlzVFmDdGkTtIlDtEkT9Gj0BJkENJkERHkEdHkUhKkEhGkTxCkjs/kz4+kj89kTo+kTdBjTc/kDVCjDZAjTJDlj8/lkE+mEM7mEJAmkBAl0NClz86mD84lj42lTw2mj43nD85lkA0lD8ylT4wlD4ukkEyk0IwkUI0lz0xmTwvmDkulzksmzwvnT4vnEAxnUIxnEQzlzgvljYvkzQslTQxkzQykzM0kTI1lTE1kDgskTgpjzcojzotjDosjjowkzkpkzomkzgilTsmmD4olD8nlDUlkjEkki8kljIjlzQhljUfmjQhkDImjjAnjDAljTEpijAmhjElhTEnhy0khiwniSsjhTMkgTIjhDcjhDsigTokfTMmejYofzAoejAofi4qejYkeDgkdjUjezshez0ifDoffT4hfjwgdTcmczYncTooczUqdDcrdTMudjcvbjYnbDgpbTgrajYmajQnaTkpaTosaDgvZjssZj0uZDorZD8uZzMtaTItaTAuZTItZTEqYzQtbTErbC8qbi0qaiwnay0kbCskZywnZCspaCoray8jbC8hbzIhazEgaC4eZjEgZS0dZDAgYy4fYS4ecC4hcy8idC8gdC0jcy0mdCsndiomcyopdjEfejIeejMgdzQcdzYddDQbezAdgDAbfi0ffCwhfCohfSkjfCkmeikmfSgngTIehjIdhzIfhDUcgTYbhjYbgTUZhzAcjDIaii0bjSwbjiwdjisajjQekDMdkjMejjYgjDchjDgjijgfkzIakzMXkzIVky8aki4clDUXlDYVljgVlzkXkjcTkTkVjzgXjzYXjjoYOj1ROkFRPT9UPj9POz5MPkFMPz1MPDpLQDpJPT1IPz5GPj9EPD1DPUJDP0NDPEFAOj9DOD9EOD5HNj9IMUFJMkVBNUJCP0ZEQEdDP0VGPEdEO0hBOUlBN0hCOUtDOk1CNU1CNUlENUhGNkZHNUZJM0dJMkZNLk1JMkpHOlBEPFFDO09GOFFEOFNFNVRFNFJGNVVHNVhHMFZHL1JMM0xPNE1LNE9KN1lIOFtHOVdJNlpKM1xKMlxMMVlMM1xOM15PL11QMFlOM1VOM1NPM1BTLlVXL1ZTNl9QNmJQN15PNV9TM2BTMV1VM19YNGFZMF5bMVtXMVdaNlNVNVdUNFlVNmJaN2RaOGBYN2BcNWFeNV9gOWBjNlxkNVtgN1pcOFlbOlRaOVRgOFZgO2FjPGNkPGBgPV9kPF5mPVxnPFpmQFtnQVxoQFhpPVhmPlRkP1ZcPllfPllhRF1oRV9qRF9lRVtnRlppR1doSVhmS1lnSlRnR1RlRVhiRVhgRVZbSFJeR1JhTVhoTFZqT1ppT1ZnUFVnUVNlT1JkVVRlU1BiT1JiTlZhTVdfTFdZTlJaT1FdV1ZjWVZlVVhjV1VhWFNgWFJeVlJdWVRcXFRcWVFZVVNbVFdcU1lcUFxYUlZVXVZbX1VaXVhdXFdZXVhXXFdUWVdVXllRWlZQWFhTV1tWVl1WU2FUU11NVVtQX1tQYltPX11SXVxOXVpMW1tKWVxMXF5JWV5HWF5LWGBNWWBPWGFQVmZRVWVLVmNKX2BHYF9EYWFJXmJGXWJEW2RDWWRFXmdBWWlBWWdFWGtHWmlMWmlOW2ZLWmZJYGhBYWg/YmhEXmxAXG5AW21CX3E/W3NBW3BEW29GXW1HXW1JXXBOWHZKWnNIYnNAY3M+Y3FCYXVCX3dBXXdEYHpEXXhGX3VIYHRKYXVQXnpOXnpMZH1DZH5BZXpDZH5FYoBFZIJJZYRJYoRNYn9MY3tLZHlMZHpOZndRZX5UY35QZH1PaIVIaIdHaYNHaYVLaYNMaYRPaIJQbINQbYZQaoVUaYFSan1QantQa3tSbHdTbHxXa35WcIVQcodPcYNQcoZUcINXc4RYdYZZcoNccIFYcX1acnlTcX1TcX9Ud4ZYeIhZeIVWeYRaeIRcd39de4BdfYFee31geH1ceH5YeHxWeXhTe3RbeXhbf4JdgYNff4NbgH9cgn5dgntegHpdhnpegnZfgHhcgHRZf3hSf3pWf3pYiHpdintfiHxbiXhbiXZciHRbhnRZjHNZiXBXhnhWhnlUhXpPhXJNhnNRj3RZkXNbj3dZkHNWj3FWj3FTjXJSk3FRj3FOjXNQjHZNi3xRjHlTjHZTlnJSl3FTlXVTlnNPlnJNmXVJlXZGk3ZKkXpKkXpIkHxMkH1QknpPknhOnHZKnXRLnHhMnnlIm3tGoX5GnX9Dl4FLlYBOmH1Mo39IpX5Hon5KooFIooNGoYdIo4hIn4pHnIVKmohLmoNOmoJQnIJNnYNLpYlKp4tIpodLo4tLn45MpJFOn5JPno5OnYxPnopPnohQm4ZUmoxUm41TppBQqJJPp45QpZFSppBVpJFXopFWpJBZppFbopBaoZNboYxWoYpWn4pYnohZnoVZnYhbnItcm4tenY1bn4xZqJNaqZNdppVaqZNYq5RXrZNWrpZVr5JXsJBVsZRYs5RYsJZVsZhWsJpYsJxXspxVs55Us6BVtJ1StJtRs5lSsppUsI5WsIxUro1Xso5Ysoxas41csYxetY1dto9ctI9hsotgs4lgs4detIVftoJjtohotIlkuY5cupFauoxbu45eu5Fgu5Biuo5jvo9iwJFivo9nu41lvIlou4Niu4hhu4phwpBhxJJhwo5fxI5jxY9lxY1nw4xoyYxnxolox4pqxIlow4RpwINhwYdiwohkzIxlzo1lyotjzYlmzolozoZozIVpz4Rn0oRnz4FpzINoyoNmyYVlx4RjxIBgyH1kyX5m04Rk1oRl0oVi04Fk1H9l031k0X1l1nth0nhi0Hxjzn1hzHpgzIBeyoJdzYFgz4Bh13tf2ntf135e1npd13dd1nZb03Zc1nZY2HVX1HVX1HNX0nZZ0XhZ0Xpaz3xZzH1WzHZSznZW2XdV3HZV2XlW2HZT2HRS1nRQ1HRR1nVO2HVM03RL0nVPznhN0H9S0ntS03lR2ndL3HZK2nhN2HhJ13dH1nlG1HpH2HtD1X1F031D03xH0YBI1IBN1IFP1X5N1X1L231D3HxB235F2X9B2X8/14E+1YE/2IM+2oQ71oU+1YU71IQ/1YRC1oNE1oRG1IhJ0ItD0ohC1IZD3IQ83YQ53YE93YY+3og93Io92ok/3Iw+3Y482I492YtA141E24lJ3IhF24lD4I894ZA64Y4+35E+3pM93JQ/25JA3phA2ZdC2pNC2pNH341J349F4JpA4Jw/4phA4JpD3ptE3ptH3phH4JtI4Z5J35pM45RK45VM5JNJ5JJH5pFG45NF4ZVG459I4qJI5J5G5Z9K5p1L5p1N5ZpO6ZxO6p9O6J1S55lQ6JZT6pFN6ZRM6JdN7Z9N7qFN7Z1L7p5Q8J1P8ZpR75lR85lQ9ZpS8pZR8pZU75ZR7pdM7pVK7pNL7pFI749L8I1P75FP95pQ+ZpR9pxO95hO+ZhM+pZM/JZO+JNL/ZFM/ZRP/JRS+pZT+pVV/JRW/JNY+5Na/pFY/5BW/5FU/ZNU9pFL9JFJ9ZFO945L9oxM+ItO+Y1P94pQ9odP+ohS+YxS9ZFU9ZNZ95Ba+Y5a+Y1X9IZR9INP8odR9YVT9INV9YRX9odX8oVZ8YJa84Zb9IVd9YhZ8o1W75FX8JBb8Y5d8oxc74JZ7n9b74FW7YRa7YRc7Idd7Ylb54Zd6Ylb6Itd64pa7IhW7IlU64xQ6o9T6pBV6o5X5YVd5IRe5YVa5Ihd4Ylc4Ytc44xb3oxb3Y5d341Z3Y9Y4Y5Z441X5ItW5YxU5I5T5Y9R5o9P45NT4pFV35Bd4ZBd3pFg3ZJc25Jb2pRZ3JRX2JNY1pRa2JVW15dW2pRV25JU25BU3I9S3o5N3pJN3pVO3ZVR3JNR05Na0ZRa1JBb05JX0JJW0JNU0pNSzpJSzZRQ0JBRzo9P0pFQ1JBQ1I5S1oxS2otP2JBL1pBNzpZQ0JdPzJhSzJdOzpdLzJVJzpRIyZNLyZJGzZJHz5BI0pFI0pJG1IxL0I1Kz45Jx5JNxZJNyZFPx49LxY9Jxo1IyI1HwopIxYlFyYpHyotLzIpN0IZOz4VIzYdHwYhKvohKwolNwoZJwYVHwoJHxINGwH9Jw31GxoFHx4FJx4RKyYRLzoJOzXtKyn5JyYBKv35LvH5Lv4BNwHxMwHpLwnhLxHpLwHVOxXVNxnlMynlPyIFSxX9PxX1Ov3VRvXNQv3hRwXRSwXFSxHFUxnNTxHFWw29Xx29Xx3NVx3ZVxXdUxXlVx31ZynhayXZZwW9awG1bv3FZw3BcxW5dxnBfx3JexXBhxG5jxnJiyHFjx3NgxnZfyHhixHpew3xdxHhdxXZdwm9lwWxmwHBkw3BnwnFpxHNqxXVownVswnRuxndtxXdpwndmwXlkv35kw35oxHxpv3Rvv3NxvXRtv3dwwXhywHpywXxwvXt0vn5xwH9zwH5vv3xsvXxqu4BmvoZrvoJsunx1unt3uXtzun91uIB1uIJ0uoJxtoNztYR0uIdyuYRwuIZstn9nt39suIBusoR0sYV2sYJzsYZysolysYpws4lur4pvrYxwr4pssI1ssolssoRssoNrsIBmr4Rlr4ZlsIdnq4tyrIx0q4hxqYxxp4tvqIttqopspoprpItrp4xnqYlpq4Nsq35pqoBmqYJlqYVmootpo41nn4xqoYlmoIZlooRmnoZmnYVknoRooYNno4RrpINtpn9sp39upn1rpXpoo35om4Zim4VgnIlimIZjl4RjlYRllYVnlIlmkopmlIdok4lsmYptmotumolrmIhpj4ZijYZikIRgkIhgj4phkIxgko1gjY1ckJBck41dlYtclo5ZmIZZlodclIldi4taiYxbjIlbjIxYjI9YjpBWkI9WjY9Ti5BSkJFRkY5UkopWk4hWlIhTloRTlYpPlItQiY9Rh5BQiYxRi49Oi5FNjZBLj49Mi49HkI9GkI1Kj4pOj4hOkoNOlIVLlIdKk4lKiI5Hh5BFh45JiYxFi4pCjYlEiohCiIdAjYVAjYdEjYZGjIdIjIZKjYFNj4BHj4JGjoRHhoZAhIc+hYZCh4NAiII+iYA/ioBBh34/hX09iXo/in5CiIBFiIBIiH5Ni3pJintGgn0+gX07goA/gns/gnk/g3dBhHhDgHdCf3VBgnZFgnNFhHdFhHlJhHdKg39Mg35Hg3xGfXVAfHg/e3VCfHM+fXM8f3I8f289g3M6gm86hG88gG48f2k7e2Y2emo1e202fG03gnU3g3c4gHU2h3M2iHI0h280iHEwi3Awh28xgm8ygG8xfWwtgWssg2sshWwtg20viXcwi3kwhngxiHYthncshHUsgnYqg3UogHIqgXQugHgwf3kxensyd3Uue3Uugncmg3cjgnonf3clfnUkfHQke3Une3YheHckd3UjeXYne3kpe3oreH4ucXordXkpe3kffHcdfXogeXoed3gddHkedHogdHsccnscdH0ec38edX0jcX4kd4ApeH4ld30jcX0Zb3sYc34Yb38abH4aa38can0eaoMea34gbHwhanwkaX0ka3olbXglbXYmbngibXoha4YfaYcfbYYdbIYha4YjbYkmbYoocIkkcYslcYYmc4Ukc4QidYMidoQjeYQkeoMieYUmeIYndoYndYUlbIwpa40mbo4qaowraIsqZ4ksaIYrZoovaIYvZoYwaYUtbYYub4Yuc4IrbX8obIIqZ40wZY4yaI4vaYwyaIs0a4o2bIw3aog4aoY3bYg5b4c4bYs5bI07bo09b4s9bY4/a5A+apFAapA8ao46aYM4Z4Q6bIM6aYE3aIAzaYExaX0zZ3w0aHwva38wbn0tdIAwcIEyboEyaHo2Zng3aXs4aXg0aHcyanUxbHcwbHQya3EzbXIubnYvcnYudXs0cXozb3kybHA1am42bHI3b24ycW0yc28xc2o0dW0zdmsxdW8ydHM0dXU2d3Q1eXY2eXg3eXIzcWk2b2g1cGs4cmU2c2M4dWQ4cmI6cmA6c2Q8c2I+d2Y8eGU+eGM/emc/e2s/eGo8d2g7cV45cls6cV42bl46bl08a109al88alk8Z1w+aF87aGA5ZmA4ZGA5Z2E1aWE0aWIya2E1amA4alY6alQ7bFc5aFY4ZlU5ZFk2ZFI0YVYzZFkzZloyaFs0aVwzaVwwaV0ubF4uaFwsZlssZVouZlswZVAzZE4zaFA0ZlEwZFEvZVIsZlUtZlErZU8qaFMpZlMnaFUrbFYrbFcpblctblYvcFYwbFQwalQvZkwqZUopZkwtaUwpaU0na0wmbU4nbEgmb0oncEolb00nb00qck0rc0wqck4ucE4vcE8xbk8ubk4rbEUnakQma0YqbkQnb0QlcUMlcUEmckIidEQhdkEkcz8lbj4kbTwjbDggcjggdkQgeEQidkYedkIeeEAedz4aeT8ZdzoZcT4ebz4eaj0cazsabToZcDoZeUEXfEIWd0MYeEAUeD4Udj0SdDwUdT4Qdj4Ocz0QczsOcjwTc0AVb0AWa0EXbjwUdkENeEELdkMOdEALcz4KcT8Ibz4KckIGbUAFbT8KaUELa0QSbkIQbkEOckUFdUUEckYHcEUEcEgEbUgDbEYFbEsEbEwCaUoEaEoCaUgGaEkJZkkIaEkMakkPbEgMbEgJbk4CblAAcE4DbVAEalEEaVIGaFEHa1YGaFYJaVIKalALbE4KbU0LbU4Obk4Qb0wRbU8SalITalEPblcFblgDb1QFb1kHcFgJcFoLb1wJcFkPb10PbV0La10KalwIaFwIZ10JZV4KY10IZF8LZmANaGANaV4Lb1YQcVUSblUObVcSbVkUa1oUalwSaVkYZ10WaFwSYlcKYVoNYVsOY1wQaFYZaFYbaFQXZVYYZFgaYVkZYVkWXlYbXFkXYFgVY1YTY1INX1MNXVQOXlYQX1McXVMeYVMcXlEaW1EZW1EWXVEVWU0WW04SYU8UYk8WZE4WZE0UaEwTZkwQZEwPYk0QYk4SWUoXV0oYW0oZWkkVWEkTWUgQW0kQWUMQW0UMXUgPYEgTYkgUZ0cTZUUOYkYOWUERVkARWkEUW0AQWz8NXT4MX0AMXjwNXToMYTwKYT8NYkAPYEERYUETZkAWaj0PZj8PXTgOXDYNXDkRYDcPYjYNZDYNZTgOZDQQZDEPZzQRaDMPZzcQaDgUajcUaDkWZToXZTsZZDoVZDkTYjAQYC8PYDISYy4SZS0RZisTaCwUZSoUZicVZSsXZCoZZywWaC8YZjAYZzIZajEZbDUbbjIabi8ZcC4ZbC4Yai8YZSUTZiMVZiURYiUUYSMWXyIVYCESXyAWXSAYWx8UXx4SYR0SYx0SZRsSYxkSZBcSZhYRXRUTXxkSYRoSXR8bXCAcYB4bXB0aWR0aWBoZWhkXVhgdVhUZWhYYXBYYWxIYYRUZYxQZYBcZXhgYVxcfVRghWRcgVhQfVxMhVxAgWRAeWA8hVw0jVwsfWg4eXREeYBEfZQ8fYwseYQoeXgseVw0mVQwnWQ8mWQsmWQklWwclXQgjXAUoXwQlXwgjZAgjZBAlYA4lXwwkXQUrWwQtXQgsYAUrYAIrYwIrZAMpZAMtZAEvaAEsZgQqagcqZg4qZAsqZAgqZAIxZQAzYQIyZQQxZwUzaQYzaQcwawc0bAY2bQgybgcyawgwZwsvZw0vaBMvcBAwbQ0wbAg5bQY7aQg5bQo4cAo4cQ03bw42cQ46cw85bxA6bxI7bxA3ag82aBE2aRM1ZRU0axc1bRU1axM2dRA7dg48dBE9dxI6dhQ5eBY5eBY7ehU4exg3fBU6fhU6exU/ehNAehNCfBVCfRZFfBVHfhhEfhlCgBtDfRlAfBdAexg0eRYzfhgzehs0eBs0dx40dx43eSAzdyIyeiA1eyM1eCA3eiA6eiI7eiQ6eyE9fR5Aex08eh06dyIweSEudiUvdCEvdB8tdRwucxwvdxoqdxcucxkvcBkvbxcwcRUwbBgvaRgubRoubxsudhoneBomdBondhcoeBUpeBMpdhMrdxEneREldw4pdBEqcRQqbxQpahIpbQsrcA4qeBAjehAhdxIidw4ieAwjdgokdAsldAkhdQggcgYjcgolcQ4kbxAkahEkaAkkbAoldAgddgYcdAsccgcccQQdbwQdbgYfbQMZagMdbAYfaAkfbA4dbBAdbgwdbgoebQQWbQIVbgYWagQWaAIWZgMWZQQYZAQSYQQWZAYYZQgZZwkZZwsZZhAaXg4ZYQsZZAUQZAMOZwYQYgcQYAcQXwkQYAoSXQsNXA0RYA0SZRETZw8SaRASZg0RZAwRXgsKXAoIYAoJXg4KXBAKXRIKXxIMXhMIXRQGYBUJXhcKYBQMYxMMZRUMZRcMZxMMaBEMahAMZRAMYxEMXhQDXBMCYBIDXxYDYRcDYRkEYxoGYhsDYBwBYx0EYR8FZBwHZhwHZx4IZh8Iah0IaxwHbRwHahoGZxoGvUw8vUk9u0g8u0Y9uUk7uEg6uEk+uUZBuURCuEJBuURFukZGu0ZIu0hFukhCtkk3t0g1tkw4tEg3s0c5skU5s0M7sEQ5r0I3r0Q7sUI8sT9As0ZFs0lCskY/rUE2rUA0q0Q2q0A5rD45qj08qz4+qD47pjw8qEA9qkA/q0RArEVBrUZGq0FHqkBEoz08ojs7oz88ozw/ozpAozpDpTxDoTpEoTlGoT1Eoz1FpEFDpENDpkdGpkJKpUFJnjhHnjZInTlGnzpJnzlMoDtNoT1MnzxPnztSnz9PoT9No0RPoEdIoENInkNGoEFKnjtUnjpWmztTnj5VoD9VoEFWoENTnkJXn0NZnURVn0VUoElSnEhLnEVOnURQnURbnkRemkNbnEdankhanktZnUtXm0xbnE5bmUtZm0xXmUhVmEhSlklNmlFPmk5Smk9dm1FfmE5emFFbmlNamFRYmFJWllVZlldZlFRXllNVlFNQkUxQk01UlE9VlFlalVtbk1hcklpYk1tWkltUkVhTj1xUj15TjVpTj1hSjU9SjlJUj1RUjV9UjWJUjF5Xi19Ti2BQiV9PiVxPh19PhmBNhl1Qh1tPh1lQiFlTiFdUiFFTh1RNh1ZNh1dQhmJLhGJJiGNLhWRNgmRNgWZPgmhPf2ZQfmRSfmhRgWlRgGxQgG1OgG9NgHBQgHRPgXBXgW5UgW5RfGNTfGFUemRRe2VVfWVXfWdYfWpXemhZemdcemtafGxYe3BaenFTenJSem5Te21Ud2Zcd2VfdmVadmlddmlgdmxgd25fc21gcmxic29gdnBedm9adXBYdHRVc3hcdHRcb2xhbmtjbmtfbm9hbnBjbnNjb3Rha3NiaXNka3ZhbnZfbnVdbXlcbnRYbnNWbnJab29abnNcZ3NjZnJmZnFhZnViZndjZXlhZ3pgY3lgYXphY3teZnteZn1ZZ3ZVZ3ZaZndcXnlhXHljXnZgXXpfXX1fXH5dXn5bWn1bWH5cW35ZXn5ZXn1UYXZUYHVZX3pZVnxcVH5dVnpdVXxZVX5YVH1VVnxUU3pVUHtVU3pSWHlSV3dPW3VTXXNTW3dVWXhUT3hVTHlWUHdXTndTTXlRTndOUHdOS3VOT3RMUXVNU3RRVXJRWG5RVHFLSXNPRnROSnJRSXBNSHBLSm9JTG9KSWxJR2xITGxIT2xLUGlJU2pQUG1PUG5RT25NRmlJRGlIR2lMSGdHSGVISmRHTGVHSmFISWBGTWFHTmNIUGBLT2VSTmZOTWVMRl9HRF9FRmBKRlxHSFtJSlpITFtJSlVHTVdJTlpKT1dOTV1TTF1PS2BQTFxNSFNIR1JGRlRKSVJKS1BJTlFMS05NTU5PTlBPT1FUSldUSVdPS1RPSUpMSUhLR0xKSEtOR0lQSUhRSEdUSEVUSkhWS0pUS0xZSU9YR1JXR1BURlFSSU5URURVRUFVQ0VTRUVYRkNZRkRcRkZcQ0ZeRUheREpcREpaQ0xZQlFZQlBeQk9fQ01fQ0xdP0JcPj9cP0NZPkNePkJgPkdiOERjOkhjPUliPE5iPE5aPUpcPUlZPUleNkRiNEJjNkRfNUZjNEdlM0lmNUtlL0plMU1kNE1jNU1hNUtgNktdNU5ZM1ReNFFgLUlkK0hmLUdiLEtjK01kKk9iLFBhJk1hKFBfK1FfLFNbME1XLkxbLU1dJExfIk1fJElgJktdJEtaJE1ZJk9ZI01WIUxWJE9WJlBXKk1XLExWL01RLFBQK1JRKlRPKVFTIEtUHUtUIUhVIUxSIUpPIktNJE1OI0pLIUlKJUtKJkxMKEtOK0xKLElQLkhRKklRKEtQIUdIH0dHIkVJIkhFI0dDJEhCJklDJkZAJUU+KEdAKElCKkhELEdELUhDLUVKKUZIKEdGQipqQyxpRClsQCtrQCxtQS9tPzBuQy9uRTBtQzFxQTJwPzNxPTNyPDR0PjV0Pjd2PDh4QDh2Qjh1QjZzQDVzSDBtSC9wSTJtSC5rSy1rTC5pSy9nTjBqUC9rTjJoTDFmSjRkSjNiSDZkRzdmRjlmSDdoSDhqSjVoUjBsVC9uUTNsVDBpVC5oVC9lUzFlVzBlWDBjVjNlVDNkUzZnUThoTzplTjxmTjpjTjhfUDdiWzBiWy1iXDFkWzFgWjBeVzNdXDRcXTNZWzZcWDZcVDhcUzpdUz1iVjtjWDljWDhhXDNXWjFXXjNVWjVXWTZVWDlXWjpUWjpRWTxVWDtXWjxbWj1dWUBhVkFeVEFcUkJcVT9aVz5bXTpQXDlNXjlSXT1PXT9RXkFQYUFQYUJOYkJSYENUXz9WXz5YX0BaXkFcXj9eXkNdXkVbX0RZX0JYY0FMY0JJYz9MZ0FOa0FPbUNPbD9QaT5XZztWZjpVZDhVZjpSZzxSb0RNbkZMcEJMcURPcUZRckVTckNUdUVTdkVVdUJTc0FUcj9Tcj5RcTxQcDtSbzlTbjhSbjlVbztXbztZcT1WcT1UeEdVeUhXeElTe0ZUfUdTfEdQfEpQfkZPfEZMf0hOfkpOf0xQf05Pf09MgFBQgVBSglJTgU5TgExSfURKfENIfkJMgEVJf0dIgUlHgkpJhEhEhUhIhUpJhk5LiExThkdRhklNhEdCgkhBhURChkhAhko/h0xAiEtCikw/ik49i01BiU1DikpHjFRJi1BHjU48jVA6jkw9jlA+jlM9j1Q/j1NBklU/klc/k1RBkVNDkU9EkU5Gk1VMklRIlVg+lVs9lVY8llhAlllCmFhEl1ZFnFpEm1VFmVVGmVNKl0tIl05FmFFFnlpDn1xCn1hCoFlFn1tHoFpJn1hKo1lJpFpLo1ZJoVZKn1NHn1FHnUxIn05Qn1FNp1lMqFtNqFhJp1dNp1hQplVRpVNQqVRSqVNUqVJQp1FPp1FLplBJpEtHpE1Oq1JVq1NYrVNTq09VqU5WqUxWqEtUq0pXqkhYrElUqklTqEZQqkpJrE5Mq0tPrEdZq0Zcr0harUVYq0NXrEJVrENTrUBVrD1VrkBSrUJRrEJMsEhKsEdOsklPr0ZQrjtWrDpYsDxXrjpUrDlSrThQrjpPsDdQrzROsThOsDpNsj5Ps0BOtERKsD9HsD5JsTJOsDBOszNQszNMsTJKszNHszZItTNHtjFGtjVGtTdGtTlItjlKtjxLtz1Itz9IuEFJt0BFtz5Etz9BtjxEtjtG"};var Ll=i=>!!(i.person||i.ghost||i.moc);function iu(i){let t=i.filter(s=>!Ll(s)),e=s=>Math.max(1e-9,...t.map(s)),n={i:e(s=>Math.log1p(s.inlinks||0)),m:e(s=>Math.log1p(s.mentions||0)),b:e(s=>s.bc||0),r:e(s=>Math.log1p(s.recent||0))};return s=>.4*Math.log1p(s.inlinks||0)/n.i+.3*Math.log1p(s.mentions||0)/n.m+.2*(s.bc||0)/n.b+.1*Math.log1p(s.recent||0)/n.r}var su=i=>{let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619);return t>>>0};var Ee={ATOM:1.8,SCALE:.16,PROTEIN:[.93,.93,.9],RNA:[.94,.34,.15],TARGET:[.13,.31,.8],OTHER:[.38,.64,.97],HIT:[1,.79,.2],NEAR:[.78,.62,.96],COIL:{lead:90,ease:40,radius:60,pitch:34},NEAR_AXIS:[0,1,0],FAR_AXIS:[-1,0,0]};function ru(i,t,e,n){let s=new Float64Array(t*12),r=(x,E)=>x[0]*E[0]+x[1]*E[1]+x[2]*E[2],a=(x,E)=>[x[1]*E[2]-x[2]*E[1],x[2]*E[0]-x[0]*E[2],x[0]*E[1]-x[1]*E[0]],o=x=>{let E=Math.hypot(x[0],x[1],x[2])||1;return[x[0]/E,x[1]/E,x[2]/E]},l=(x,E,y)=>{let A=Math.cos(y),T=Math.sin(y);return[x.map((g,M)=>A*g+T*E[M]),E.map((g,M)=>A*g-T*x[M])]},c=i.o.slice(),h=o(i.z),d=o(i.x),u=a(h,d),f=0,_=null,S=null,p=0,m=0;if(n){let x=n.pitch/(2*Math.PI*n.radius);p=1/(n.radius*(1+x*x)),m=p*x;let E=n.axis,y=r(E,h);S=o([E[0]-y*h[0],E[1]-y*h[1],E[2]-y*h[2]]),_=a(S,h)}for(let x=0;x<t;x++){let E=i.phase+x*e.turn,y=Math.cos(E),A=Math.sin(E),T=x*12;for(let g=0;g<3;g++)s[T+g]=c[g],s[T+3+g]=y*d[g]+A*u[g],s[T+6+g]=y*u[g]-A*d[g],s[T+9+g]=h[g];if(n&&f>=n.lead){let g=Math.min(1,(f-n.lead)/(n.ease||1)+1e-9),M=g*g*(3-2*g);[h,_]=l(h,_,p*M*e.rise),[_,S]=l(_,S,m*M*e.rise),h=o(h);let U=r(d,h);d=o([d[0]-U*h[0],d[1]-U*h[1],d[2]-U*h[2]]),u=a(h,d)}for(let g=0;g<3;g++)c[g]+=h[g]*e.rise;f+=e.rise}return s}var Bl=null;function Js(){if(Bl)return Bl;let i=nu,t=atob(i.atoms),e=t.length/3,n=new Float32Array(e*3),s=new Uint8Array(e),r=new Int16Array(e),a=new Int8Array(e).fill(-1),o=new Float32Array(e);for(let y=0;y<e*3;y++)n[y]=t.charCodeAt(y)*i.q+i.lo[y%3];let l=i.protein;if([i.rna,i.target,i.other].forEach((y,A)=>y.forEach(([T,g])=>{for(let M=0;M<g;M++,l++)s[l]=A+1,r[l]=T})),l!==e)throw new Error("the Cas9 model's tables don't add up to its atoms: run scripts/cas9_model.cjs again");for(let y=0;y<e;y++)i.flank.forEach(([A,T],g)=>{(s[y]===2&&r[y]===A||s[y]===3&&r[y]===T)&&(a[y]=g)});let c=12,h=new Map,d=y=>`${Math.floor(n[y*3]/c)},${Math.floor(n[y*3+1]/c)},${Math.floor(n[y*3+2]/c)}`,u=new Uint16Array(e);for(let y=0;y<e;y++){let A=d(y);h.has(A)||h.set(A,[]),h.get(A).push(y)}for(let y=0;y<e;y++){let A=n[y*3],T=n[y*3+1],g=n[y*3+2],M=Math.floor(A/c),U=Math.floor(T/c),R=Math.floor(g/c),F=0;for(let L=-1;L<=1;L++)for(let G=-1;G<=1;G++)for(let C=-1;C<=1;C++)for(let z of h.get(`${M+L},${U+G},${R+C}`)||[]){let Z=n[z*3]-A,H=n[z*3+1]-T,nt=n[z*3+2]-g;Z*Z+H*H+nt*nt<c*c&&F++}u[y]=F}let f=Array.from(u).sort((y,A)=>y-A),_=f[Math.floor(e*.08)],S=f[Math.floor(e*.97)];for(let y=0;y<e;y++)o[y]=1-.72*Math.max(0,Math.min(1,(u[y]-_)/Math.max(1,S-_)));let p=y=>{let A=[0,0,0],T=0;for(let g=0;g<e;g++)y(g)&&(A[0]+=n[g*3],A[1]+=n[g*3+1],A[2]+=n[g*3+2],T++);return A.map(g=>g/(T||1))},m=(y,A)=>{let T=-1,g=-1/0;for(let M=0;M<e;M++)if(y(M)){let U=A(M);U>g&&(g=U,T=M)}return[n[T*3],n[T*3+1],n[T*3+2]]},x=i.pair.map(([y,A,T,g,M])=>({x:y,y:A,z:T,strand:g,base:M,r:Ee.ATOM})),E=[];for(let y of[0,1])for(let A of[0,1]){let T=x.filter(M=>M.strand===y&&M.base===A),g=M=>T.reduce((U,R)=>U+R[M],0)/T.length;E.push({x:g("x"),y:g("y"),z:g("z"),strand:y,base:A,r:A?3.3:3.6})}return Bl={M:i,n:e,xyz:n,kind:s,res:r,flank:a,shade:o,pair:x,beads:E,base:[Ee.PROTEIN,Ee.RNA,Ee.TARGET,Ee.OTHER],flankAt:i.flank.map((y,A)=>p(T=>a[T]===A)),held:p(y=>s[y]===1&&r[y]<=i.spacer+1||s[y]===2&&r[y]>30-i.spacer),labels:{protein:m(y=>s[y]===0,y=>-n[y*3+1]),rna:m(y=>s[y]===1,y=>Math.hypot(n[y*3],n[y*3+1],n[y*3+2]))}}}function au(i,t,e){let n=Js(),s=n.M,r=t&&t.ids?new Set(t.ids):null,a=new Map,o=i.filter(y=>!Ll(y)&&(!r||r.has(y.id))).sort((y,A)=>y.id<A.id?-1:y.id>A.id?1:0),l=new Set(o.map(y=>y.id));t&&t.notes.forEach(y=>{l.has(y.path)&&a.set(y.path,y.hits?"hit":"near")});let c=o.filter(y=>a.get(y.id)==="hit"),h=c.find(y=>y.id===e)||c[0]||null,d=h?o.indexOf(h):o.length>>1,u=o.slice(h?d+1:d),f=u.slice(0,s.flank.length).map(y=>y.id),_=u.slice(s.flank.length).map(y=>y.id),S=o.slice(0,d).reverse().map(y=>y.id),p=ru(s.tails.near,_.length,s.step,{...Ee.COIL,axis:Ee.NEAR_AXIS}),m=ru(s.tails.far,S.length,s.step,{...Ee.COIL,axis:Ee.FAR_AXIS}),x=new Map,E=new Map;return h&&(x.set(h.id,n.held),E.set(h.id,"held")),f.forEach((y,A)=>{x.set(y,n.flankAt[A]),E.set(y,"flank")}),[[_,p,"near"],[S,m,"far"]].forEach(([y,A,T])=>y.forEach((g,M)=>{x.set(g,[A[M*12],A[M*12+1],A[M*12+2]]),E.set(g,T)})),{pos:x,where:E,all:o,hits:a,sites:c,site:h?h.id:null,flankIds:f,nearIds:_,farIds:S,near:p,far:m,scan:t||null}}var qs=Ee.SCALE,Ol=28,o0=.3,Zi=i=>[i[0]*qs,-i[1]*qs,-i[2]*qs];function Vl(i,t,e){let n=new In,s=new Qe(t,e,i.n),r=new qt,a=new Pt;for(let o=0;o<i.n;o++){r.makeScale(Ee.ATOM,Ee.ATOM,Ee.ATOM).setPosition(i.xyz[o*3],i.xyz[o*3+1],i.xyz[o*3+2]),s.setMatrixAt(o,r);let l=i.base[i.kind[o]];s.setColorAt(o,a.setRGB(l[0],l[1],l[2],Ue).multiplyScalar(i.shade[o]))}return n.rotation.x=Math.PI,n.scale.setScalar(qs),n.add(s),{root:n,mesh:s}}var ou={id:"cas9",name:"Cas9",hint:"Notes as DNA, the Guide scan's matches as cut sites",home:{yaw:0,pitch:.2,dist:44,min:14,max:240},stage:{light:"camera",fog:[70,260],ambient:.5},actions:["guide-scan"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,invalidate:a}){let o=Js(),l=new Map(e.nodes.map(q=>[q.id,q])),c=q=>l.get(q)?l.get(q).name:q,h=new ci(1,1),d=new hi,{root:u,mesh:f}=Vl(o,h,d);i.scene.add(u);let _=new qt,S=new Pt,p=(q,mt)=>S.setRGB(q[0],q[1],q[2],Ue).multiplyScalar(mt),m=null,x=null,E=[],y={atoms:0,pairs:0,fine:0,beads:0},A=n.scan||null,T=n.selected||null,g=null,M=null,U=q=>{let mt=x.hits.get(q);return mt==="hit"?Ee.HIT:mt==="near"?Ee.NEAR:null},R=q=>M&&!M.has(q)?o0:1;function F(){for(let q=0;q<o.n;q++){let mt=o.flank[q]>=0?x.flankIds[o.flank[q]]:null,k=mt?U(mt):null;f.setColorAt(q,p(k||o.base[o.kind[q]],o.shade[q]*(mt?R(mt):1)))}f.instanceColor.needsUpdate=!0}function L(){m&&(u.remove(m),m.dispose());let q=[x.nearIds,x.farIds].reduce((k,st)=>k+Math.min(st.length,Ol)*o.pair.length+Math.max(0,st.length-Ol)*o.beads.length,0);m=new Qe(h,d,Math.max(q,1)),m.count=q;let mt=0;y={atoms:o.n,pairs:x.nearIds.length+x.farIds.length,fine:0,beads:0},[[x.nearIds,x.near,!0],[x.farIds,x.far,!1]].forEach(([k,st,St])=>k.forEach((At,ut)=>{let Ft=ut<Ol,Gt=ut*12,Rt=U(At),Qt=R(At);Ft?y.fine++:y.beads++;for(let Dt of Ft?o.pair:o.beads){_.makeScale(Dt.r,Dt.r,Dt.r).setPosition(st[Gt]+st[Gt+3]*Dt.x+st[Gt+6]*Dt.y+st[Gt+9]*Dt.z,st[Gt+1]+st[Gt+4]*Dt.x+st[Gt+7]*Dt.y+st[Gt+10]*Dt.z,st[Gt+2]+st[Gt+5]*Dt.x+st[Gt+8]*Dt.y+st[Gt+11]*Dt.z),m.setMatrixAt(mt,_);let X=Dt.strand===0===St?Ee.OTHER:Ee.TARGET;m.setColorAt(mt++,p(Rt&&(Dt.base||!Ft)?Rt:X,(Dt.base?.78:1)*Qt))}})),y.atoms+=mt,u.add(m)}let G=()=>{if(!A)return`${ye(x.all.length,"note")} \xB7 no guide`;let q=`\u201C${A.guide}\u201D${A.where?" "+A.where:""}`,mt=[...x.hits.values()].filter(k=>k==="near").length;return x.sites.length?`${q}: exact in ${ye(x.sites.length,"note")} of ${x.all.length}${mt?` \xB7 look-alikes in ${mt}`:""}`:`${q}: no match in ${ye(x.all.length,"note")}`},C={label:"Open Guide scan",title:"Open Guide scan",run:()=>r("guide-scan")},z=()=>x.sites.findIndex(q=>q.id===x.site);function Z(q){let mt=x.sites.length;mt&&(g=x.sites[(z()+q+mt)%mt].id,K(),a())}function H(q){x.hits.get(q)==="hit"&&(g=q,K(),a())}function nt(){t.stat(G());let q=[{text:"Cas9 protein",at:Zi(o.labels.protein),dy:-16,run:()=>r("guide-scan"),title:"Cas9 protein. Open Guide scan"},{text:A?`RNA \xB7 ${$n(A.guide,24)}`:"RNA",at:Zi(o.labels.rna),color:"#f2764a",dy:-14,run:()=>r("guide-scan"),title:"The guide. Open Guide scan"},{text:"DNA",at:Zi(o.M.tails.near.o),color:"#8fbcfb",dy:16,title:x.sites.length?"DNA. Show the exact matches":"DNA. Open Guide scan",run:()=>{if(!x.sites.length)return r("guide-scan");M=new Set(x.sites.map(k=>k.id)),Y(),a()}}],mt=x.site||(T&&x.pos.has(T)?T:null);if(mt&&q.unshift({text:$n(c(mt),34),at:Zi(x.pos.get(mt)),strong:!0,dy:30,run:()=>s(mt),title:`Open ${c(mt)}`}),t.labels(q),t.chip(M?`Exact matches of \u201C${$n(A.guide,24)}\u201D`:null,()=>{M=null,Y(),a()}),!A)t.controls({lines:[`${ye(x.all.length,"note")}, a base pair each. No guide yet.`],buttons:[C]});else if(!x.sites.length)t.controls({lines:[`No \u201C${$n(A.guide,24)}\u201D in these ${ye(x.all.length,"note")}.`],buttons:[C]});else{let k=x.sites.length===1;t.controls({lines:[`Site ${z()+1} of ${x.sites.length}`],buttons:[{label:"\u2039",title:"Previous site",off:k,run:()=>Z(-1)},{label:c(x.site),title:`Open ${c(x.site)}`,wide:!0,run:()=>s(x.site)},{label:"\u203A",title:"Next site",off:k,run:()=>Z(1)}]})}}function Y(){F(),L(),nt()}function K(){x=au(e.nodes,A,g),M&&!x.sites.length&&(M=null),E=[];for(let[q,mt]of x.pos){let k=x.where.get(q);E.push({at:Zi(mt),r:(k==="held"?14:k==="flank"?6:7)*qs,key:{kind:"note",id:q,tip:c(q)}})}Y()}function et(){T&&x.hits.get(T)==="hit"&&x.site!==T?(g=T,K()):g=x.site}return K(),et(),{targets:()=>E,click(q){T=q.id,x.hits.get(q.id)==="hit"?(g=q.id,K()):nt(),s(q.id)},update(q){"scan"in q&&(A=q.scan||null,M=null),"selected"in q&&(T=q.selected||null),K(),et()},stat:G,today(){if(!x.site)return null;let q=x.sites.length;return{text:`Cas9 is on ${c(x.site)}: site ${z()+1} of ${q} for \u201C${A.guide}\u201D`,label:q>1?"Next site":"Open it",run:()=>q>1?Z(1):s(x.site)}},api:{layout:()=>x,drew:()=>y,at:q=>x.pos.has(q)?Zi(x.pos.get(q)):null,step:Z,go:H,highlighted:()=>M?[...M]:null}}}};var lo=18,lu=4,cu="#facc15",l0=14;function c0(i,t){let e=t.X.map(a=>[a[0]*lo,a[1]*lo,(a[2]||0)*lo]),n=new Array(t.n).fill(0),s=new Map,r=new Map;t.domains.forEach(([a,o],l)=>{for(let c=a;c<=o&&c<t.n;c++)n[c]=l}),i.rows.forEach((a,o)=>{for(let l of new Set(a)){let c=i.ids[l];s.has(c)||s.set(c,[]),s.get(c).push(o)}});for(let[a,o]of s){let l=[0,0,0],c=su(a),h=c%628/100,d=(c>>>10)%314/100-1.57,u=lo*.03;for(let f of o)for(let _=0;_<3;_++)l[_]+=e[f][_]/o.length;r.set(a,[l[0]+Math.cos(h)*Math.cos(d)*u,l[1]+Math.sin(d)*u,l[2]+Math.sin(h)*Math.cos(d)*u])}return{beads:e,domainOf:n,daysOf:s,notes:r}}var hu={id:"genome",name:"Genome fold",hint:"The journals as one folded strand",home:{yaw:.6,pitch:.25,dist:46,min:12,max:110},stage:{fog:[34,80]},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:a,invalidate:o}){let l=e.strand,c=n.fold,h=c.n;if(h<lu){let X=()=>`${ye(h,"day")} of journals`;return t.stat(X()),t.controls({at:"centre",lines:[`Genome fold needs ${lu} days of journals that name notes.`,`${ye(h,"day")} so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:X,today:()=>null,api:{empty:!0}}}let d=c0(l,c),u=new Map(e.nodes.map(X=>[X.id,X])),f=iu(e.nodes),_=[...d.notes.keys()].filter(X=>u.has(X)),S=new Map(_.map(X=>[X,f(u.get(X))])),p=X=>.22+.55*Math.sqrt(Math.max(0,S.get(X))),m=a.palette,x=X=>m[X%m.length],E="#6b7280",y=new qt,A=new je,T=new P,g=new P(0,1,0),M=new Pt,U=X=>(i.scene.add(X),X),R=U(new Qe(new Fn(1,16,12),new ln({roughness:.55}),h)),F=U(new Qe(new vs(1,1,1,8,1,!0),new ln({roughness:.7}),Math.max(h-1,1)));F.count=h-1;for(let X=0;X+1<h;X++){let kt=d.beads[X],jt=d.beads[X+1],le=d.domainOf[X]===d.domainOf[X+1],Kt=le?.11:.05;T.set(jt[0]-kt[0],jt[1]-kt[1],jt[2]-kt[2]);let Nt=T.length()||1e-6;y.compose(new P((kt[0]+jt[0])/2,(kt[1]+jt[1])/2,(kt[2]+jt[2])/2),A.setFromUnitVectors(g,T.divideScalar(Nt)),new P(Kt,Nt,Kt)),F.setMatrixAt(X,y),F.setColorAt(X,M.set(le?x(d.domainOf[X]):E))}let L=U(new Qe(new Fn(1,16,12),new ln({roughness:.4}),Math.max(_.length,1)));L.count=_.length;let G=new Yn({color:cu,transparent:!0,opacity:.85}),C=new Yn({color:cu,transparent:!0,opacity:.18}),z=new Fn(.3,12,8),Z=c.loops.map((X,kt)=>{let jt=d.beads[X.a],le=d.beads[X.b],Kt=new li(new P(...jt),new P((jt[0]+le[0])*.68,(jt[1]+le[1])*.68,(jt[2]+le[2])*.68),new P(...le)),Nt=Kt.getPoint(.5),$t=U(new Pe(new Ts(Kt,24,.045,6),G)),fe=U(new Pe(z,G));fe.position.copy(Nt);let ke=l.rows[X.a].filter(re=>l.rows[X.b].includes(re)),ze=[...new Set(ke)].map(re=>l.ids[re]),D=tu(l.days[X.a],l.days[X.b]),De=`${Xs(l.days[X.a])} and ${Xs(l.days[X.b])}`;return{k:kt,l:X,tube:$t,dot:fe,mid:[Nt.x,Nt.y,Nt.z],ids:ze,apart:D,pair:De,tip:`${De}: ${ye(X.count,"note")} named on both, ${ye(D,"day")} apart`}}),H=new Es(1,1.18,40),nt=X=>U(new Pe(H,new Yn({color:X,side:$e,fog:!1}))),Y=nt(a.fg),K=nt(a.accent);Y.position.set(...d.beads[h-1]),Y.scale.setScalar(.62);let et=U(new xs(new Ae,new Li({color:a.accent,transparent:!0,opacity:.7}))),q=n.selected||null,mt=null,k=null,st=()=>mt&&d.notes.has(mt)?mt:q&&d.notes.has(q)?q:null,St=X=>u.get(X)?u.get(X).name:X,At=()=>`${ye(h,"day")} \xB7 ${ye(c.domains.length,"domain")} \xB7 ${ye(c.loops.length,"loop")} \xB7 fit ${c.grade} (stress ${c.stress.toFixed(2)})`,ut=Z.reduce((X,kt)=>X&&X.l.count>=kt.l.count?X:kt,null),Ft=[..._].sort((X,kt)=>S.get(kt)-S.get(X)).slice(0,l0);function Gt(){let X=st(),kt=X?new Set(d.daysOf.get(X)):null,jt=k?new Set(k.ids):null;for(let Nt=0;Nt<h;Nt++){let $t=kt&&kt.has(Nt)?.5:.32;y.makeScale($t,$t,$t).setPosition(...d.beads[Nt]),R.setMatrixAt(Nt,y),R.setColorAt(Nt,M.set(x(d.domainOf[Nt])).multiplyScalar(kt&&!kt.has(Nt)?.35:1))}_.forEach((Nt,$t)=>{let fe=p(Nt)*(Nt===X?1.25:1);y.makeScale(fe,fe,fe).setPosition(...d.notes.get(Nt)),L.setMatrixAt($t,y),L.setColorAt($t,M.set(m[(u.get(Nt).cluster||0)%m.length]).multiplyScalar(jt&&!jt.has(Nt)?.25:1))});for(let Nt of[R,L])Nt.instanceMatrix.needsUpdate=!0,Nt.instanceColor.needsUpdate=!0;for(let Nt of Z)Nt.tube.material=Nt.dot.material=!k||k===Nt?G:C;K.visible=!!(q&&d.notes.has(q)&&u.has(q)),K.visible&&(K.position.set(...d.notes.get(q)),K.scale.setScalar(p(q)+.25));let le=[];if(X)for(let Nt of d.daysOf.get(X))le.push(...d.notes.get(X),...d.beads[Nt]);et.geometry.dispose(),et.geometry=new Ae().setAttribute("position",new ne(le,3));let Kt=[];X&&Kt.push({text:$n(St(X),34),at:d.notes.get(X),strong:!0,dy:-22,run:()=>Qt(X),title:`Open ${St(X)}`}),c.domains.forEach(([Nt,$t],fe)=>{$t-Nt>=3&&Kt.push({text:`${Xs(l.days[Nt])} \u2013 ${Xs(l.days[$t])}`,at:d.beads[Nt+$t>>1],color:x(fe),dy:-14})});for(let Nt of jt?k.ids.filter($t=>u.has($t)):Ft)Nt!==X&&Kt.push({text:$n(St(Nt),26),at:d.notes.get(Nt),dy:14});t.labels(Kt),t.chip(k?`Named on both ${k.pair}`:null,()=>{k=null,Gt(),o()}),t.stat(At())}function Rt(X){k=X,Gt(),o()}function Qt(X){q=X,Gt(),o(),s(X)}let Dt=[];return d.beads.forEach((X,kt)=>Dt.push({at:X,r:.4,key:{kind:"day",id:kt,tip:`${l.days[kt]} \xB7 ${ye(new Set(l.rows[kt]).size,"note")} named`}})),_.forEach(X=>Dt.push({at:d.notes.get(X),r:p(X),key:{kind:"note",id:X,tip:St(X)}})),Z.forEach(X=>Dt.push({at:X.mid,r:.4,key:{kind:"loop",id:X.k,tip:X.tip}})),Gt(),{targets:()=>Dt,click(X){X.kind==="note"?Qt(X.id):X.kind==="day"?s(l.paths[X.id]):Rt(Z[X.id])},hover(X){let kt=X&&X.kind==="note"?X.id:null;kt!==mt&&(mt=kt,Gt())},frame(){Y.quaternion.copy(i.camera.quaternion),K.quaternion.copy(i.camera.quaternion)},update(X){"selected"in X&&(q=X.selected||null,Gt())},stat:At,today:()=>ut?{text:`Strongest loop: ${ut.pair} name the same ${ye(ut.l.count,"note")}, ${ye(ut.apart,"day")} apart`,label:"Show them",run:()=>Rt(ut)}:null,api:{layout:()=>d,loops:()=>Z.map(X=>({a:X.l.a,b:X.l.b,count:X.l.count,ids:X.ids,mid:X.mid})),shown:()=>k?k.k:null,selected:()=>q,notes:()=>_,show:X=>Rt(Z[X])},dispose(){G.dispose(),C.dispose(),z.dispose(),H.dispose()}}}};var co={low:0,medium:1,high:2},h0=i=>20*(i+1)**2;async function uu({host:i,detail:t="medium",pbr:e=!1,warmup:n=3e3,run:s=5e3}={}){if(!(t in co))throw new Error(`bench: detail is one of ${Object.keys(co).join(", ")}`);if(!i)throw new Error("bench: host (an element to draw in) is required");let r=Js(),a=ro(i,Ks(),{fog:!1});try{a.scene.add(Vl(r,new ci(1,co[t]),e?new ln({roughness:.6}):new hi).root);let o=a.renderer.getContext(),l=o.getExtension("WEBGL_debug_renderer_info"),c=String(l&&o.getParameter(l.UNMASKED_RENDERER_WEBGL)||o.getParameter(o.RENDERER)||"unknown"),h=()=>new Promise(x=>requestAnimationFrame(x)),d=performance.now(),u=d,f=d,_=0,S=0,p=0;for(;u-d<n+s;)u=await h(),a.orbit(u/2e3,.3,42),a.render(),u-d>=n&&(p?(_++,S=Math.max(S,u-f)):p=u),f=u;let m=u-p;return{atoms:r.n,detail:t,triangles:r.n*h0(co[t]),light:e?"pbr":"basic",fps:m>0?Math.round(_*1e3/m*10)/10:0,worstMs:Math.round(S*10)/10,frames:_,gpu:c}}finally{a.dispose()}}var kl={bodies:eu,cas9:ou,genome:hu},u0=Object.values(kl).map(i=>({id:i.id,name:i.name,hint:i.hint,actions:i.actions||[]}));function d0(i,{view:t="bodies",data:e,inputs:n,onOpen:s,onAction:r,theme:a}={}){let o=kl[t];if(!o)throw new Error(`vault-graph-views: no view "${t}" (there is ${Object.keys(kl).join(", ")})`);let l=po(e);if(l.length||l.push(...mo(t,e,n)),l.length)throw new Error("vault-graph-views: "+l.join("; "));if(typeof s!="function")throw new Error("vault-graph-views: onOpen is required");if((o.actions||[]).length&&typeof r!="function")throw new Error(`vault-graph-views: onAction is required for the ${o.name} view (it asks the host for: ${o.actions.join(", ")})`);return $h(i,o,{data:e,inputs:n||{},onOpen:s,onAction:r,theme:Ks(a)})}return Mu(f0);})();
