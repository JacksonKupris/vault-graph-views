var VaultGraphViews=(()=>{var Uo=Object.defineProperty;var gd=Object.getOwnPropertyDescriptor;var xd=Object.getOwnPropertyNames;var _d=Object.prototype.hasOwnProperty;var yd=(i,t)=>{for(var e in t)Uo(i,e,{get:t[e],enumerable:!0})},Md=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of xd(t))!_d.call(i,s)&&s!==e&&Uo(i,s,{get:()=>t[s],enumerable:!(n=gd(t,s))||n.enumerable});return i};var Sd=i=>Md(Uo({},"__esModule",{value:!0}),i);var Ax={};yd(Ax,{VIEWS:()=>wx,bench:()=>hd,check:()=>No,checkInputs:()=>Po,mountViews:()=>Tx});var hs={top:{nodes:"array",links:"array",clusters:"array",wanted:"array"},node:{id:"string",name:"string",cluster:"number",folder:"string",inlinks:"number",outlinks:"number",words:"number"},link:{source:"string",target:"string",kind:"string"},cluster:{id:"number",name:"string",label:"string",size:"number"},strand:{days:"array",paths:"array",ids:"array",rows:"array"}},vd={n:"number",X:"array",stress:"number",grade:"string",domains:"array",loops:"array"},bd={guide:"string",where:"string",notes:"array"};var bn=i=>Array.isArray(i)?"array":i===null?"null":typeof i,fi=(i,t,e,n)=>{for(let[s,r]of Object.entries(n))bn(e[s])!==r&&i.push(`${t}.${s} should be ${r}, is ${bn(e[s])}`)};function No(i){let t=[];if(!i||typeof i!="object")return["data is not an object"];if(fi(t,"data",i,hs.top),t.length)return t;i.nodes[0]&&fi(t,"nodes[0]",i.nodes[0],hs.node),i.links[0]&&fi(t,"links[0]",i.links[0],hs.link),i.clusters[0]&&fi(t,"clusters[0]",i.clusters[0],hs.cluster);let e=new Set(i.nodes.map(s=>s.id));for(let s of i.wanted)e.add(s.id);let n=i.links.filter(s=>!e.has(s.source)||!e.has(s.target)).length;return n&&t.push(`${n} links point at a note that is in neither nodes nor wanted`),t}function Po(i,t,e){let n=[],s=e||{};if(i==="genome"){let r=t&&t.strand;if(bn(r)!=="object")return[`data.strand should be object, is ${bn(r)}`];if(fi(n,"data.strand",r,hs.strand),bn(s.fold)!=="object")return n.concat(`inputs.fold should be object, is ${bn(s.fold)}`);if(fi(n,"inputs.fold",s.fold,vd),n.length)return n;let a=s.fold;(r.rows.length!==r.days.length||r.paths.length!==r.days.length)&&n.push(`data.strand has ${r.days.length} days, ${r.rows.length} rows and ${r.paths.length} paths: they should be the same number`),(a.n!==r.days.length||a.X.length!==a.n)&&n.push(`inputs.fold is for ${a.n} days (${a.X.length} points) and data.strand has ${r.days.length}: the fold is from other data`);let o=a.loops.filter(l=>!(l.a>=0&&l.a<a.n&&l.b>=0&&l.b<a.n&&typeof l.count=="number")).length;o&&n.push(`${o} of inputs.fold.loops don't name two days of the strand and a count`)}if(i==="cas9"&&s.scan!=null){if(bn(s.scan)!=="object")return[`inputs.scan should be object, is ${bn(s.scan)}`];fi(n,"inputs.scan",s.scan,bd),s.scan.ids!==void 0&&!Array.isArray(s.scan.ids)&&n.push(`inputs.scan.ids should be array, is ${bn(s.scan.ids)}`),!n.length&&s.scan.notes[0]&&(typeof s.scan.notes[0].path!="string"||typeof s.scan.notes[0].hits!="number")&&n.push("inputs.scan.notes[0] should be { path: string, hits: number }")}return s.selected!=null&&typeof s.selected!="string"&&n.push(`inputs.selected should be string, is ${bn(s.selected)}`),n}var Ed=["#4385BE","#879A39","#DA702C","#8B7EC8","#3AA99F","#D14D41","#D0A215","#CE5D97","#205EA6","#66800B","#BC5215","#5E409D","#24837B","#AF3029","#AD8301","#A02F6F"];function fr(i){return Object.assign({bg:"#14161a",fg:"#dddddd",muted:"#8a8f98",accent:"#6aa9ff",warn:"#f59e0b",palette:Ed},i||{})}var ih=0,fl=1,sh=2;var Ys=1,rh=2,$i=3,oi=0,Qe=1,we=2,Ei=0,ts=1,pl=2,ml=3,gl=4,ah=5;var wi=100,oh=101,lh=102,ch=103,hh=104,uh=200,dh=201,fh=202,ph=203,xl=204,_l=205,mh=206,gh=207,xh=208,_h=209,yh=210,Mh=211,Sh=212,vh=213,bh=214,kr=0,Vr=1,zr=2,Zi=3,Gr=4,Hr=5,Wr=6,Zr=7,Ta=0,Eh=1,wh=2,In=0,yl=1,Ml=2,Sl=3,vl=4,bl=5,El=6,wl=7;var Tl=300,Ti=301,es=302,Aa=303,Ra=304,Yi=1e3,wn=1001,Yr=1002,Re=1003,Th=1004;var Xs=1005;var Je=1006,Ca=1007;var Zn=1008;var $e=1009,Al=1010,Rl=1011,ns=1012,Ia=1013,Mn=1014,dn=1015,Sn=1016,Ua=1017,Na=1018,Ai=1020,Cl=35902,Il=35899,Ul=1021,Nl=1022,vn=1023,Gn=1026,Yn=1027,Pa=1028,Fa=1029,li=1030,Da=1031;var La=1033,Js=33776,qs=33777,js=33778,Qs=33779,Ba=35840,Oa=35841,ka=35842,Va=35843,za=36196,Ga=37492,Ha=37496,Wa=37488,Za=37489,Ks=37490,Ya=37491,Xa=37808,Ja=37809,qa=37810,ja=37811,Qa=37812,Ka=37813,$a=37814,to=37815,eo=37816,no=37817,io=37818,so=37819,ro=37820,ao=37821,oo=36492,lo=36494,co=36495,ho=36283,uo=36284,$s=36285,fo=36286;var Ss=2300,Xr=2301,Br=2302,al=2303,ol=2400,ll=2401,cl=2402;var Ah=3200;var tr=0,Rh=1,Xn="",De="srgb",vs="srgb-linear",bs="linear",ue="srgb";var Or=7680;var Ch=519,Ih=512,Uh=513,Nh=514,Pl=515,Ph=516,Fh=517,Fl=518,Dl=519,Dh=35044;var Ll="300 es",ln=2e3,Xi=2001;function wd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Td(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Es(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lh(){let i=Es("canvas");return i.style.display="block",i}var wc={},Ji=null;function Bl(...i){let t="THREE."+i.shift();Ji?Ji("log",t,...i):console.log(t,...i)}function Bh(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Yt(...i){i=Bh(i);let t="THREE."+i.shift();if(Ji)Ji("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function qt(...i){i=Bh(i);let t="THREE."+i.shift();if(Ji)Ji("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function _s(...i){let t=i.join(" ");t in wc||(wc[t]=!0,Yt(...i))}function Oh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var kh={[kr]:kr,[zr]:Wr,[Gr]:Gr,[Zi]:Hr,[Vr]:Vr,[Wr]:zr,[Zr]:Zr,[Hr]:Zi},Tn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Fo=Math.PI/180,Jr=180/Math.PI;function er(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function ie(i,t,e){return Math.max(t,Math.min(e,i))}function Ad(i,t){return(i%t+t)%t}function Do(i,t,e){return(1-e)*i+e*t}function Vh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ol(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Rd(i,t){if(t.constructor===Float32Array)return i;let e=Ol(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Cd(i,t){if(t.constructor===Float32Array)return i;let e=Ol(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var zt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ge=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],m=r[a+2],M=r[a+3];if(u!==M||l!==d||c!==f||h!==m){let x=l*d+c*f+h*m+u*M;x<0&&(d=-d,f=-f,m=-m,M=-M,x=-x);let p=1-o;if(x<.9995){let _=Math.acos(x),E=Math.sin(_);p=Math.sin(p*_)/E,o=Math.sin(o*_)/E,l=l*p+d*o,c=c*p+f*o,h=h*p+m*o,u=u*p+M*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+m*o,u=u*p+M*o;let _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-o*f,t[e+2]=c*m+h*f+o*d-l*u,t[e+3]=h*m-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:Yt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Tc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Tc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Lo.copy(this).projectOnVector(t),this.sub(Lo)}reflect(t){return this.sub(Lo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Lo=new B,Tc=new Ge,Qt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],M=s[0],x=s[3],p=s[6],_=s[1],E=s[4],y=s[7],v=s[2],b=s[5],g=s[8];return r[0]=a*M+o*_+l*v,r[3]=a*x+o*E+l*b,r[6]=a*p+o*y+l*g,r[1]=c*M+h*_+u*v,r[4]=c*x+h*E+u*b,r[7]=c*p+h*y+u*g,r[2]=d*M+f*_+m*v,r[5]=d*x+f*E+m*b,r[8]=d*p+f*y+m*g,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/m;return t[0]=u*M,t[1]=(s*c-h*n)*M,t[2]=(o*n-s*a)*M,t[3]=d*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=f*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return _s("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bo.makeScale(t,e)),this}rotate(t){return _s("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bo.makeRotation(-t)),this}translate(t,e){return _s("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Bo=new Qt,Ac=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rc=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Id(){let i={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ue&&(s.r=zn(s.r),s.g=zn(s.g),s.b=zn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ue&&(s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xn?bs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[vs]:{primaries:t,whitePoint:n,transfer:bs,toXYZ:Ac,fromXYZ:Rc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:Ac,fromXYZ:Rc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:De}}}),i}var ae=Id();function zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ii,qr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ii===void 0&&(Ii=Es("canvas")),Ii.width=t.width,Ii.height=t.height;let s=Ii.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ii}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Es("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=zn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(zn(e[n]/255)*255):e[n]=zn(e[n]);return{data:e,width:t.width,height:t.height}}else return Yt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ud=0,qi=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=er(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Oo(s[a].image)):r.push(Oo(s[a]))}else r=Oo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Oo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Yt("Texture: Unable to serialize Texture."),{})}var Nd=0,ko=new B,qe=class i extends Tn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=wn,s=wn,r=Je,a=Zn,o=vn,l=$e,c=i.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=er(),this.name="",this.source=new qi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ko).x}get height(){return this.source.getSize(ko).y}get depth(){return this.source.getSize(ko).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Yt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Yt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yi:t.x=t.x-Math.floor(t.x);break;case wn:t.x=t.x<0?0:1;break;case Yr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yi:t.y=t.y-Math.floor(t.y);break;case wn:t.y=t.y<0?0:1;break;case Yr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=Tl;qe.DEFAULT_ANISOTROPY=1;var Se=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],M=l[2],x=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-M)<.01&&Math.abs(m-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+M)<.1&&Math.abs(m+x)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,y=(f+1)/2,v=(p+1)/2,b=(h+d)/4,g=(u+M)/4,S=(m+x)/4;return E>y&&E>v?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=b/n,r=g/n):y>v?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=b/s,r=S/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=g/r,s=S/r),this.set(n,s,r,e),this}let _=Math.sqrt((x-m)*(x-m)+(u-M)*(u-M)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(x-m)/_,this.y=(u-M)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jr=class extends Tn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new qe({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new qi(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},rn=class extends jr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ws=class extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qr=class extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Jt=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,m,M,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,m,M,x)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,m,M,x){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=M,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ui.setFromMatrixColumn(t,0).length(),r=1/Ui.setFromMatrixColumn(t,1).length(),a=1/Ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,m=o*h,M=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-M*c,e[9]=-o*l,e[2]=M-d*c,e[6]=m+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,m=c*h,M=c*u;e[0]=d+M*o,e[4]=m*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=M+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,m=c*h,M=c*u;e[0]=d-M*o,e[4]=-a*u,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=M-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,m=o*h,M=o*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+M,e[1]=l*u,e[5]=M*c+d,e[9]=f*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,m=o*l,M=o*c;e[0]=l*h,e[4]=M-d*u,e[8]=m*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-M*u}else if(t.order==="XZY"){let d=a*l,f=a*c,m=o*l,M=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+M,e[5]=a*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=o*h,e[10]=M*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pd,t,Fd)}lookAt(t,e,n){let s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),Qn.crossVectors(n,en),Qn.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),Qn.crossVectors(n,en)),Qn.normalize(),pr.crossVectors(en,Qn),s[0]=Qn.x,s[4]=pr.x,s[8]=en.x,s[1]=Qn.y,s[5]=pr.y,s[9]=en.y,s[2]=Qn.z,s[6]=pr.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],M=n[6],x=n[10],p=n[14],_=n[3],E=n[7],y=n[11],v=n[15],b=s[0],g=s[4],S=s[8],R=s[12],T=s[1],U=s[5],P=s[9],O=s[13],I=s[2],G=s[6],W=s[10],Z=s[14],ot=s[3],F=s[7],J=s[11],L=s[15];return r[0]=a*b+o*T+l*I+c*ot,r[4]=a*g+o*U+l*G+c*F,r[8]=a*S+o*P+l*W+c*J,r[12]=a*R+o*O+l*Z+c*L,r[1]=h*b+u*T+d*I+f*ot,r[5]=h*g+u*U+d*G+f*F,r[9]=h*S+u*P+d*W+f*J,r[13]=h*R+u*O+d*Z+f*L,r[2]=m*b+M*T+x*I+p*ot,r[6]=m*g+M*U+x*G+p*F,r[10]=m*S+M*P+x*W+p*J,r[14]=m*R+M*O+x*Z+p*L,r[3]=_*b+E*T+y*I+v*ot,r[7]=_*g+E*U+y*G+v*F,r[11]=_*S+E*P+y*W+v*J,r[15]=_*R+E*O+y*Z+v*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],M=t[7],x=t[11],p=t[15],_=l*f-c*d,E=o*f-c*u,y=o*d-l*u,v=a*f-c*h,b=a*d-l*h,g=a*u-o*h;return e*(M*_-x*E+p*y)-n*(m*_-x*v+p*b)+s*(m*E-M*v+p*g)-r*(m*y-M*b+x*g)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],M=t[13],x=t[14],p=t[15],_=e*o-n*a,E=e*l-s*a,y=e*c-r*a,v=n*l-s*o,b=n*c-r*o,g=s*c-r*l,S=h*M-u*m,R=h*x-d*m,T=h*p-f*m,U=u*x-d*M,P=u*p-f*M,O=d*p-f*x,I=_*O-E*P+y*U+v*T-b*R+g*S;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/I;return t[0]=(o*O-l*P+c*U)*G,t[1]=(s*P-n*O-r*U)*G,t[2]=(M*g-x*b+p*v)*G,t[3]=(d*b-u*g-f*v)*G,t[4]=(l*T-a*O-c*R)*G,t[5]=(e*O-s*T+r*R)*G,t[6]=(x*y-m*g-p*E)*G,t[7]=(h*g-d*y+f*E)*G,t[8]=(a*P-o*T+c*S)*G,t[9]=(n*T-e*P-r*S)*G,t[10]=(m*b-M*y+p*_)*G,t[11]=(u*y-h*b-f*_)*G,t[12]=(o*R-a*U-l*S)*G,t[13]=(e*U-n*R+s*S)*G,t[14]=(M*E-m*v-x*_)*G,t[15]=(h*v-u*E+d*_)*G,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,m=r*u,M=a*h,x=a*u,p=o*u,_=l*c,E=l*h,y=l*u,v=n.x,b=n.y,g=n.z;return s[0]=(1-(M+p))*v,s[1]=(f+y)*v,s[2]=(m-E)*v,s[3]=0,s[4]=(f-y)*b,s[5]=(1-(d+p))*b,s[6]=(x+_)*b,s[7]=0,s[8]=(m+E)*g,s[9]=(x-_)*g,s[10]=(1-(d+M))*g,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ui.set(s[0],s[1],s[2]).length(),o=Ui.set(s[4],s[5],s[6]).length(),l=Ui.set(s[8],s[9],s[10]).length();r<0&&(a=-a),mn.copy(this);let c=1/a,h=1/o,u=1/l;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=u,mn.elements[9]*=u,mn.elements[10]*=u,e.setFromRotationMatrix(mn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=ln,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),m,M;if(l)m=r/(a-r),M=a*r/(a-r);else if(o===ln)m=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Xi)m=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ln,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),m,M;if(l)m=1/(a-r),M=a/(a-r);else if(o===ln)m=-2/(a-r),M=-(a+r)/(a-r);else if(o===Xi)m=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ui=new B,mn=new Jt,Pd=new B(0,0,0),Fd=new B(1,1,1),Qn=new B,pr=new B,en=new B,Cc=new Jt,Ic=new Ge,An=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ie(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Yt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Cc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ic.setFromEuler(this),this.setFromQuaternion(Ic,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};An.DEFAULT_ORDER="XYZ";var Ts=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Dd=0,Uc=new B,Ni=new Ge,Dn=new Jt,mr=new B,us=new B,Ld=new B,Bd=new Ge,Nc=new B(1,0,0),Pc=new B(0,1,0),Fc=new B(0,0,1),Dc={type:"added"},Od={type:"removed"},Pi={type:"childadded",child:null},Vo={type:"childremoved",child:null},He=class i extends Tn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new B,e=new An,n=new Ge,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Qt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ts,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.premultiply(Ni),this}rotateX(t){return this.rotateOnAxis(Nc,t)}rotateY(t){return this.rotateOnAxis(Pc,t)}rotateZ(t){return this.rotateOnAxis(Fc,t)}translateOnAxis(t,e){return Uc.copy(t).applyQuaternion(this.quaternion),this.position.add(Uc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nc,t)}translateY(t){return this.translateOnAxis(Pc,t)}translateZ(t){return this.translateOnAxis(Fc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?mr.copy(t):mr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(us,mr,this.up):Dn.lookAt(mr,us,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),Ni.setFromRotationMatrix(Dn),this.quaternion.premultiply(Ni.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dc),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null):qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Od),Vo.child=t,this.dispatchEvent(Vo),Vo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dc),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,t,Ld),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,Bd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};He.DEFAULT_UP=new B(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vn=class extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}},kd={type:"move"},ji=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let M of t.hand.values()){let x=e.getJointPose(M,n),p=this._getHandJoint(c,M);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Vn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},gr={h:0,s:0,l:0};function zo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Pt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=Ad(t,1),e=ie(e,0,1),n=ie(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=zo(a,r,t+1/3),this.g=zo(a,r,t),this.b=zo(a,r,t-1/3)}return ae.colorSpaceToWorking(this,s),this}setStyle(t,e=De){function n(r){r!==void 0&&parseFloat(r)<1&&Yt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Yt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Yt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){let n=zh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Yt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zn(t.r),this.g=zn(t.g),this.b=zn(t.b),this}copyLinearToSRGB(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return ae.workingToColorSpace(ze.copy(this),t),Math.round(ie(ze.r*255,0,255))*65536+Math.round(ie(ze.g*255,0,255))*256+Math.round(ie(ze.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(ze.copy(this),e);let n=ze.r,s=ze.g,r=ze.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=De){ae.workingToColorSpace(ze.copy(this),t);let e=ze.r,n=ze.g,s=ze.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Kn),this.setHSL(Kn.h+t,Kn.s+e,Kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Kn),t.getHSL(gr);let n=Do(Kn.h,gr.h,e),s=Do(Kn.s,gr.s,e),r=Do(Kn.l,gr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ze=new Pt;Pt.NAMES=zh;var As=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Pt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Rs=class extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},gn=new B,Ln=new B,Go=new B,Bn=new B,Fi=new B,Di=new B,Lc=new B,Ho=new B,Wo=new B,Zo=new B,Yo=new Se,Xo=new Se,Jo=new Se,ni=class i{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),gn.subVectors(t,e),s.cross(gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){gn.subVectors(s,e),Ln.subVectors(n,e),Go.subVectors(t,e);let a=gn.dot(gn),o=gn.dot(Ln),l=gn.dot(Go),c=Ln.dot(Ln),h=Ln.dot(Go),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(a,Bn.y),l.addScaledVector(o,Bn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Yo.setScalar(0),Xo.setScalar(0),Jo.setScalar(0),Yo.fromBufferAttribute(t,e),Xo.fromBufferAttribute(t,n),Jo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Yo,r.x),a.addScaledVector(Xo,r.y),a.addScaledVector(Jo,r.z),a}static isFrontFacing(t,e,n,s){return gn.subVectors(n,e),Ln.subVectors(t,e),gn.cross(Ln).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),gn.cross(Ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Fi.subVectors(s,n),Di.subVectors(r,n),Ho.subVectors(t,n);let l=Fi.dot(Ho),c=Di.dot(Ho);if(l<=0&&c<=0)return e.copy(n);Wo.subVectors(t,s);let h=Fi.dot(Wo),u=Di.dot(Wo);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(Fi,a);Zo.subVectors(t,r);let f=Fi.dot(Zo),m=Di.dot(Zo);if(m>=0&&f<=m)return e.copy(r);let M=f*c-l*m;if(M<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Di,o);let x=h*m-f*u;if(x<=0&&u-h>=0&&f-m>=0)return Lc.subVectors(r,s),o=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(Lc,o);let p=1/(x+M+d);return a=M*p,o=d*p,e.copy(n).addScaledVector(Fi,a).addScaledVector(Di,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},cn=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,xn):xn.fromBufferAttribute(r,a),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xr.copy(n.boundingBox)),xr.applyMatrix4(t.matrixWorld),this.union(xr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ds),_r.subVectors(this.max,ds),Li.subVectors(t.a,ds),Bi.subVectors(t.b,ds),Oi.subVectors(t.c,ds),$n.subVectors(Bi,Li),ti.subVectors(Oi,Bi),pi.subVectors(Li,Oi);let e=[0,-$n.z,$n.y,0,-ti.z,ti.y,0,-pi.z,pi.y,$n.z,0,-$n.x,ti.z,0,-ti.x,pi.z,0,-pi.x,-$n.y,$n.x,0,-ti.y,ti.x,0,-pi.y,pi.x,0];return!qo(e,Li,Bi,Oi,_r)||(e=[1,0,0,0,1,0,0,0,1],!qo(e,Li,Bi,Oi,_r))?!1:(yr.crossVectors($n,ti),e=[yr.x,yr.y,yr.z],qo(e,Li,Bi,Oi,_r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},On=[new B,new B,new B,new B,new B,new B,new B,new B],xn=new B,xr=new cn,Li=new B,Bi=new B,Oi=new B,$n=new B,ti=new B,pi=new B,ds=new B,_r=new B,yr=new B,mi=new B;function qo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){mi.fromArray(i,r);let o=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),l=t.dot(mi),c=e.dot(mi),h=n.dot(mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ae=new B,Mr=new zt,Vd=0,sn=class extends Tn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Dh,this.updateRanges=[],this.gpuType=dn,this.version=0,this._normalizationScale=t!==void 0?Ol(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Mr.fromBufferAttribute(this,e),Mr.applyMatrix3(t),this.setXY(e,Mr.x,Mr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Rd(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Cd(t,this.array)}};var Cs=class extends sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Is=class extends sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var jt=class extends sn{constructor(t,e,n){super(new Float32Array(t),e,n)}},zd=new cn,fs=new B,jo=new B,Hn=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):zd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fs.subVectors(t,this.center);let e=fs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(fs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fs.copy(t.center).add(jo)),this.expandByPoint(fs.copy(t.center).sub(jo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Gd=0,on=new Jt,Qo=new He,ki=new B,nn=new cn,ps=new cn,Fe=new B,xe=class i extends Tn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=er(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wd(t)?Is:Cs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return Qo.lookAt(t),Qo.updateMatrix(),this.applyMatrix4(Qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new jt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Yt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ps.setFromBufferAttribute(o),this.morphTargetsRelative?(Fe.addVectors(nn.min,ps.min),nn.expandByPoint(Fe),Fe.addVectors(nn.max,ps.max),nn.expandByPoint(Fe)):(nn.expandByPoint(ps.min),nn.expandByPoint(ps.max))}nn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Fe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Fe.fromBufferAttribute(o,c),l&&(ki.fromBufferAttribute(t,c),Fe.add(ki)),s=Math.max(s,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new sn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let R=0;R<n.count;R++)o[R]=new B,l[R]=new B;let h=new B,u=new B,d=new B,f=new zt,m=new zt,M=new zt,x=new B,p=new B;function _(R,T,U){c[R]=c[T]=c[U]=1,h.fromBufferAttribute(n,R),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,U),f.fromBufferAttribute(r,R),m.fromBufferAttribute(r,T),M.fromBufferAttribute(r,U),u.sub(h),d.sub(h),m.sub(f),M.sub(f);let P=1/(m.x*M.y-M.x*m.y);isFinite(P)&&(x.copy(u).multiplyScalar(M.y).addScaledVector(d,-m.y).multiplyScalar(P),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-M.x).multiplyScalar(P),o[R].add(x),o[T].add(x),o[U].add(x),l[R].add(p),l[T].add(p),l[U].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let R=0,T=E.length;R<T;++R){let U=E[R],P=U.start,O=U.count;for(let I=P,G=P+O;I<G;I+=3)_(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let y=new B,v=new B,b=new B,g=new B;function S(R){b.fromBufferAttribute(s,R),g.copy(b);let T=o[R];y.copy(T),y.sub(b.multiplyScalar(b.dot(T))).normalize(),v.crossVectors(g,T);let P=v.dot(l[R])<0?-1:1;a.setXYZW(R,y.x,y.y,y.z,P)}for(let R=0,T=n.count;R<T;++R)c[R]&&S(R);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,h=new B,u=new B;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),M=t.getX(d+1),x=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,x),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,x),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let M=0,x=l.length;M<x;M++){o.isInterleavedBufferAttribute?f=l[M]*o.data.stride+o.offset:f=l[M]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new sn(d,h,u)}if(this.index===null)return Yt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ko=new B,Hd=new B,Wd=new Qt,_n=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ko.subVectors(n,e).cross(Hd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ko),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Wd.getNormalMatrix(t),s=this.coplanarPoint(Ko).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Zd=0,Rn=class extends Tn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=er(),this.name="",this.type="Material",this.blending=ts,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xl,this.blendDst=_l,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Yt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Yt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Pt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new _n().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new zt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new zt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var kn=new B,$o=new B,Sr=new B,vr=new B,Us=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){$o.copy(t).add(e).multiplyScalar(.5),Sr.copy(e).sub(t).normalize(),vr.copy(this.origin).sub($o);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Sr),o=vr.dot(this.direction),l=-vr.dot(Sr),c=vr.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let M=1/h;u*=M,d*=M,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy($o).addScaledVector(Sr,d),f}intersectSphere(t,e){if(t.radius<0)return null;kn.subVectors(t.center,this.origin);let n=kn.dot(this.direction),s=kn.dot(kn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,d=t.y-a.y,f=t.z-a.z,m=e.x-a.x,M=e.y-a.y,x=e.z-a.z,p=n.x-a.x,_=n.y-a.y,E=n.z-a.z,y=Math.abs(l),v=Math.abs(c),b=Math.abs(h),g,S,R,T,U,P,O,I,G,W,Z,ot;if(y>=v&&y>=b?(R=l,P=u,G=m,ot=p,l>=0?(g=c,S=h,T=d,U=f,O=M,I=x,W=_,Z=E):(g=h,S=c,T=f,U=d,O=x,I=M,W=E,Z=_)):v>=b?(R=c,P=d,G=M,ot=_,c>=0?(g=h,S=l,T=f,U=u,O=x,I=m,W=E,Z=p):(g=l,S=h,T=u,U=f,O=m,I=x,W=p,Z=E)):(R=h,P=f,G=x,ot=E,h>=0?(g=l,S=c,T=u,U=d,O=m,I=M,W=p,Z=_):(g=c,S=l,T=d,U=u,O=M,I=m,W=_,Z=p)),R===0)return null;let F=g/R,J=S/R,L=1/R,Y=T-F*P,tt=U-J*P,N=O-F*G,X=I-J*G,ft=W-F*ot,Mt=Z-J*ot,at=ft*X-Mt*N,pt=Y*Mt-tt*ft,Dt=N*tt-X*Y;if(s){if(at<0||pt<0||Dt<0)return null}else if((at<0||pt<0||Dt<0)&&(at>0||pt>0||Dt>0))return null;let xt=at+pt+Dt;if(xt===0)return null;let H=L*(at*P+pt*G+Dt*ot);return(xt>0?H<0:H>0)?null:this.at(H/xt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},be=class extends Rn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Bc=new Jt,gi=new Us,br=new Hn,Oc=new B,Er=new B,wr=new B,Tr=new B,tl=new B,Ar=new B,kc=new B,Rr=new B,de=class extends He{constructor(t=new xe,e=new be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ar.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(tl.fromBufferAttribute(u,t),a?Ar.addScaledVector(tl,h):Ar.addScaledVector(tl.sub(e),h))}e.add(Ar)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(r),gi.copy(t.ray).recast(t.near),!(br.containsPoint(gi.origin)===!1&&(gi.intersectSphere(br,Oc)===null||gi.origin.distanceToSquared(Oc)>(t.far-t.near)**2))&&(Bc.copy(r).invert(),gi.copy(t.ray).applyMatrix4(Bc),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,M=d.length;m<M;m++){let x=d[m],p=a[x.materialIndex],_=Math.max(x.start,f.start),E=Math.min(o.count,Math.min(x.start+x.count,f.start+f.count));for(let y=_,v=E;y<v;y+=3){let b=o.getX(y),g=o.getX(y+1),S=o.getX(y+2);s=Cr(this,p,t,n,c,h,u,b,g,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let x=m,p=M;x<p;x+=3){let _=o.getX(x),E=o.getX(x+1),y=o.getX(x+2);s=Cr(this,a,t,n,c,h,u,_,E,y),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,M=d.length;m<M;m++){let x=d[m],p=a[x.materialIndex],_=Math.max(x.start,f.start),E=Math.min(l.count,Math.min(x.start+x.count,f.start+f.count));for(let y=_,v=E;y<v;y+=3){let b=y,g=y+1,S=y+2;s=Cr(this,p,t,n,c,h,u,b,g,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let x=m,p=M;x<p;x+=3){let _=x,E=x+1,y=x+2;s=Cr(this,a,t,n,c,h,u,_,E,y),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function Yd(i,t,e,n,s,r,a,o){let l;if(t.side===Qe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===oi,o),l===null)return null;Rr.copy(o),Rr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Rr);return c<e.near||c>e.far?null:{distance:c,point:Rr.clone(),object:i}}function Cr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Er),i.getVertexPosition(l,wr),i.getVertexPosition(c,Tr);let h=Yd(i,t,e,n,Er,wr,Tr,kc);if(h){let u=new B;ni.getBarycoord(kc,Er,wr,Tr,u),s&&(h.uv=ni.getInterpolatedAttribute(s,o,l,c,u,new zt)),r&&(h.uv1=ni.getInterpolatedAttribute(r,o,l,c,u,new zt)),a&&(h.normal=ni.getInterpolatedAttribute(a,o,l,c,u,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new B,materialIndex:0};ni.getNormal(Er,wr,Tr,d.normal),h.face=d,h.barycoord=u}return h}var Ns=class extends qe{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Re,h=Re,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ps=class extends sn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Vi=new Jt,Vc=new Jt,Ir=[],zc=new cn,Xd=new Jt,ms=new de,gs=new Hn,ge=class extends de{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ps(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Xd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new cn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vi),zc.copy(t.boundingBox).applyMatrix4(Vi),this.boundingBox.union(zc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vi),gs.copy(t.boundingSphere).applyMatrix4(Vi),this.boundingSphere.union(gs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ms.geometry=this.geometry,ms.material=this.material,ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gs.copy(this.boundingSphere),gs.applyMatrix4(n),t.ray.intersectsSphere(gs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Vi),Vc.multiplyMatrices(n,Vi),ms.matrixWorld=Vc,ms.raycast(t,Ir);for(let a=0,o=Ir.length;a<o;a++){let l=Ir[a];l.instanceId=r,l.object=this,e.push(l)}Ir.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ps(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ns(new Float32Array(s*this.count),s,this.count,Pa,dn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},xi=new Hn,Jd=new zt(.5,.5),Ur=new B,ii=class{constructor(t=new _n,e=new _n,n=new _n,s=new _n,r=new _n,a=new _n){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ln,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],M=r[9],x=r[10],p=r[11],_=r[12],E=r[13],y=r[14],v=r[15];if(s[0].setComponents(c-a,f-h,p-m,v-_).normalize(),s[1].setComponents(c+a,f+h,p+m,v+_).normalize(),s[2].setComponents(c+o,f+u,p+M,v+E).normalize(),s[3].setComponents(c-o,f-u,p-M,v-E).normalize(),n)s[4].setComponents(l,d,x,y).normalize(),s[5].setComponents(c-l,f-d,p-x,v-y).normalize();else if(s[4].setComponents(c-l,f-d,p-x,v-y).normalize(),e===ln)s[5].setComponents(c+l,f+d,p+x,v+y).normalize();else if(e===Xi)s[5].setComponents(l,d,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){xi.center.set(0,0,0);let e=Jd.distanceTo(t.center);return xi.radius=.7071067811865476+e,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ur.x=s.normal.x>0?t.max.x:t.min.x,Ur.y=s.normal.y>0?t.max.y:t.min.y,Ur.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ur)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Gc=new Jt,Kr=class i{constructor(){this.coordinateSystem=ln,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Gc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ii),n[s].setFromProjectionMatrix(Gc,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new ii),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var je=class extends Rn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},$r=new B,ta=new B,Hc=new Jt,xs=new Us,Nr=new Hn,el=new B,Wc=new B,ea=class extends He{constructor(t=new xe,e=new je){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)$r.fromBufferAttribute(e,s-1),ta.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=$r.distanceTo(ta);t.setAttribute("lineDistance",new jt(n,1))}else Yt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(s),Nr.radius+=r,t.ray.intersectsSphere(Nr)===!1)return;Hc.copy(s).invert(),xs.copy(t.ray).applyMatrix4(Hc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let M=f,x=m-1;M<x;M+=c){let p=h.getX(M),_=h.getX(M+1),E=Pr(this,t,xs,l,p,_,M);E&&e.push(E)}if(this.isLineLoop){let M=h.getX(m-1),x=h.getX(f),p=Pr(this,t,xs,l,M,x,m-1);p&&e.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let M=f,x=m-1;M<x;M+=c){let p=Pr(this,t,xs,l,M,M+1,M);p&&e.push(p)}if(this.isLineLoop){let M=Pr(this,t,xs,l,m-1,f,m-1);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Pr(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if($r.fromBufferAttribute(o,s),ta.fromBufferAttribute(o,r),e.distanceSqToSegment($r,ta,el,Wc)>n)return;el.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(el);if(!(c<t.near||c>t.far))return{distance:c,point:Wc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Zc=new B,Yc=new B,Ke=class extends ea{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Zc.fromBufferAttribute(e,s),Yc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Zc.distanceTo(Yc);t.setAttribute("lineDistance",new jt(n,1))}else Yt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Fs=class extends qe{constructor(t=[],e=Ti,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ds=class extends qe{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Wn=class extends qe{constructor(t,e,n=Mn,s,r,a,o=Re,l=Re,c,h=Gn,u=1){if(h!==Gn&&h!==Yn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ls=class extends Wn{constructor(t,e=Mn,n=Ti,s,r,a=Re,o=Re,l,c=Gn){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Bs=class extends qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},yn=class i extends xe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(u,2));function m(M,x,p,_,E,y,v,b,g,S,R){let T=y/g,U=v/S,P=y/2,O=v/2,I=b/2,G=g+1,W=S+1,Z=0,ot=0,F=new B;for(let J=0;J<W;J++){let L=J*U-O;for(let Y=0;Y<G;Y++){let tt=Y*T-P;F[M]=tt*_,F[x]=L*E,F[p]=I,c.push(F.x,F.y,F.z),F[M]=0,F[x]=0,F[p]=b>0?1:-1,h.push(F.x,F.y,F.z),u.push(Y/g),u.push(1-J/S),Z+=1}}for(let J=0;J<S;J++)for(let L=0;L<g;L++){let Y=d+L+G*J,tt=d+L+G*(J+1),N=d+(L+1)+G*(J+1),X=d+(L+1)+G*J;l.push(Y,tt,X),l.push(tt,N,X),ot+=6}o.addGroup(f,ot,R),f+=ot,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var _i=class i extends xe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new B,h=new zt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new jt(a,3)),this.setAttribute("normal",new jt(o,3)),this.setAttribute("uv",new jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},hn=class i extends xe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,M=[],x=n/2,p=0;_(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(d,3)),this.setAttribute("uv",new jt(f,2));function _(){let y=new B,v=new B,b=0,g=(e-t)/n;for(let S=0;S<=r;S++){let R=[],T=S/r,U=T*(e-t)+t;for(let P=0;P<=s;P++){let O=P/s,I=O*l+o,G=Math.sin(I),W=Math.cos(I);v.x=U*G,v.y=-T*n+x,v.z=U*W,u.push(v.x,v.y,v.z),y.set(G,g,W).normalize(),d.push(y.x,y.y,y.z),f.push(O,1-T),R.push(m++)}M.push(R)}for(let S=0;S<s;S++)for(let R=0;R<r;R++){let T=M[R][S],U=M[R+1][S],P=M[R+1][S+1],O=M[R][S+1];(t>0||R!==0)&&(h.push(T,U,O),b+=3),(e>0||R!==r-1)&&(h.push(U,P,O),b+=3)}c.addGroup(p,b,0),p+=b}function E(y){let v=m,b=new zt,g=new B,S=0,R=y===!0?t:e,T=y===!0?1:-1;for(let P=1;P<=s;P++)u.push(0,x*T,0),d.push(0,T,0),f.push(.5,.5),m++;let U=m;for(let P=0;P<=s;P++){let I=P/s*l+o,G=Math.cos(I),W=Math.sin(I);g.x=R*W,g.y=x*T,g.z=R*G,u.push(g.x,g.y,g.z),d.push(0,T,0),b.x=G*.5+.5,b.y=W*.5*T+.5,f.push(b.x,b.y),m++}for(let P=0;P<s;P++){let O=v+P,I=U+P;y===!0?h.push(I,I+1,O):h.push(I+1,I,O),S+=3}c.addGroup(p,S,y===!0?1:2),p+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Qi=class i extends hn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},na=class i extends xe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new jt(r,3)),this.setAttribute("normal",new jt(r.slice(),3)),this.setAttribute("uv",new jt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let E=new B,y=new B,v=new B;for(let b=0;b<e.length;b+=3)f(e[b+0],E),f(e[b+1],y),f(e[b+2],v),l(E,y,v,_)}function l(_,E,y,v){let b=v+1,g=[];for(let S=0;S<=b;S++){g[S]=[];let R=_.clone().lerp(y,S/b),T=E.clone().lerp(y,S/b),U=b-S;for(let P=0;P<=U;P++)P===0&&S===b?g[S][P]=R:g[S][P]=R.clone().lerp(T,P/U)}for(let S=0;S<b;S++)for(let R=0;R<2*(b-S)-1;R++){let T=Math.floor(R/2);R%2===0?(d(g[S][T+1]),d(g[S+1][T]),d(g[S][T])):(d(g[S][T+1]),d(g[S+1][T+1]),d(g[S+1][T]))}}function c(_){let E=new B;for(let y=0;y<r.length;y+=3)E.x=r[y+0],E.y=r[y+1],E.z=r[y+2],E.normalize().multiplyScalar(_),r[y+0]=E.x,r[y+1]=E.y,r[y+2]=E.z}function h(){let _=new B;for(let E=0;E<r.length;E+=3){_.x=r[E+0],_.y=r[E+1],_.z=r[E+2];let y=x(_)/2/Math.PI+.5,v=p(_)/Math.PI+.5;a.push(y,1-v)}m(),u()}function u(){for(let _=0;_<a.length;_+=6){let E=a[_+0],y=a[_+2],v=a[_+4],b=Math.max(E,y,v),g=Math.min(E,y,v);b>.9&&g<.1&&(E<.2&&(a[_+0]+=1),y<.2&&(a[_+2]+=1),v<.2&&(a[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,E){let y=_*3;E.x=t[y+0],E.y=t[y+1],E.z=t[y+2]}function m(){let _=new B,E=new B,y=new B,v=new B,b=new zt,g=new zt,S=new zt;for(let R=0,T=0;R<r.length;R+=9,T+=6){_.set(r[R+0],r[R+1],r[R+2]),E.set(r[R+3],r[R+4],r[R+5]),y.set(r[R+6],r[R+7],r[R+8]),b.set(a[T+0],a[T+1]),g.set(a[T+2],a[T+3]),S.set(a[T+4],a[T+5]),v.copy(_).add(E).add(y).divideScalar(3);let U=x(v);M(b,T+0,_,U),M(g,T+2,E,U),M(S,T+4,y,U)}}function M(_,E,y,v){v<0&&_.x===1&&(a[E]=_.x-1),y.x===0&&y.z===0&&(a[E]=v/2/Math.PI+.5)}function x(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Yt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new zt:new B);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new B,s=[],r=[],a=[],o=new B,l=new Jt;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new B)}r[0]=new B,a[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(ie(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ie(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Os=class extends un{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new zt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ia=class extends Os{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function kl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Xc=new B,Jc=new B,nl=new kl,il=new kl,sl=new kl,sa=class extends un{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new B){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Jc.subVectors(s[0],s[1]).add(s[0]),c=Jc);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Xc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Xc),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),M=Math.pow(u.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f);M<1e-4&&(M=1),m<1e-4&&(m=M),x<1e-4&&(x=M),nl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,M,x),il.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,M,x),sl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,M,x)}else this.curveType==="catmullrom"&&(nl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),il.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),sl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(nl.calc(l),il.calc(l),sl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new B().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function qc(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function qd(i,t){let e=1-i;return e*e*t}function jd(i,t){return 2*(1-i)*i*t}function Qd(i,t){return i*i*t}function ys(i,t,e,n){return qd(i,t)+jd(i,e)+Qd(i,n)}function Kd(i,t){let e=1-i;return e*e*e*t}function $d(i,t){let e=1-i;return 3*e*e*i*t}function tf(i,t){return 3*(1-i)*i*i*t}function ef(i,t){return i*i*i*t}function Ms(i,t,e,n,s){return Kd(i,t)+$d(i,e)+tf(i,n)+ef(i,s)}var ra=class extends un{constructor(t=new zt,e=new zt,n=new zt,s=new zt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new zt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ms(t,s.x,r.x,a.x,o.x),Ms(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},aa=class extends un{constructor(t=new B,e=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new B){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ms(t,s.x,r.x,a.x,o.x),Ms(t,s.y,r.y,a.y,o.y),Ms(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},oa=class extends un{constructor(t=new zt,e=new zt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new zt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new zt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},la=class extends un{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ca=class extends un{constructor(t=new zt,e=new zt,n=new zt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new zt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ys(t,s.x,r.x,a.x),ys(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yi=class extends un{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ys(t,s.x,r.x,a.x),ys(t,s.y,r.y,a.y),ys(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ha=class extends un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new zt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(qc(o,l.x,c.x,h.x,u.x),qc(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new zt().fromArray(s))}return this}},nf=Object.freeze({__proto__:null,ArcCurve:ia,CatmullRomCurve3:sa,CubicBezierCurve:ra,CubicBezierCurve3:aa,EllipseCurve:Os,LineCurve:oa,LineCurve3:la,QuadraticBezierCurve:ca,QuadraticBezierCurve3:yi,SplineCurve:ha});var Mi=class i extends na{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Si=class i extends xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],m=[],M=[],x=[];for(let p=0;p<h;p++){let _=p*d-a;for(let E=0;E<c;E++){let y=E*u-r;m.push(y,-_,0),M.push(0,0,1),x.push(E/o),x.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){let E=_+c*p,y=_+c*(p+1),v=_+1+c*(p+1),b=_+1+c*p;f.push(E,y,b),f.push(y,v,b)}this.setIndex(f),this.setAttribute("position",new jt(m,3)),this.setAttribute("normal",new jt(M,3)),this.setAttribute("uv",new jt(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},vi=class i extends xe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new B,m=new zt;for(let M=0;M<=s;M++){for(let x=0;x<=n;x++){let p=r+x/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let M=0;M<s;M++){let x=M*(n+1);for(let p=0;p<n;p++){let _=p+x,E=_,y=_+n+1,v=_+n+2,b=_+1;o.push(E,y,b),o.push(y,v,b)}}this.setIndex(o),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(c,3)),this.setAttribute("uv",new jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ce=class i extends xe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new B,d=new B,f=[],m=[],M=[],x=[];for(let p=0;p<=n;p++){let _=[],E=p/n,y=a+E*o,v=t*Math.cos(y),b=Math.sqrt(t*t-v*v),g=0;p===0&&a===0?g=.5/e:p===n&&l===Math.PI&&(g=-.5/e);for(let S=0;S<=e;S++){let R=S/e,T=s+R*r;u.x=-b*Math.cos(T),u.y=v,u.z=b*Math.sin(T),m.push(u.x,u.y,u.z),d.copy(u).normalize(),M.push(d.x,d.y,d.z),x.push(R+g,1-E),_.push(c++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){let E=h[p][_+1],y=h[p][_],v=h[p+1][_],b=h[p+1][_+1];(p!==0||a>0)&&f.push(E,y,b),(p!==n-1||l<Math.PI)&&f.push(y,v,b)}this.setIndex(f),this.setAttribute("position",new jt(m,3)),this.setAttribute("normal",new jt(M,3)),this.setAttribute("uv",new jt(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ks=class i extends xe{constructor(t=new yi(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new B,l=new B,c=new zt,h=new B,u=[],d=[],f=[],m=[];M(),this.setIndex(m),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(d,3)),this.setAttribute("uv",new jt(f,2));function M(){for(let E=0;E<e;E++)x(E);x(r===!1?e:0),_(),p()}function x(E){h=t.getPointAt(E/e,h);let y=a.normals[E],v=a.binormals[E];for(let b=0;b<=s;b++){let g=b/s*Math.PI*2,S=Math.sin(g),R=-Math.cos(g);l.x=R*y.x+S*v.x,l.y=R*y.y+S*v.y,l.z=R*y.z+S*v.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let E=1;E<=e;E++)for(let y=1;y<=s;y++){let v=(s+1)*(E-1)+(y-1),b=(s+1)*E+(y-1),g=(s+1)*E+y,S=(s+1)*(E-1)+y;m.push(v,b,S),m.push(b,g,S)}}function _(){for(let E=0;E<=e;E++)for(let y=0;y<=s;y++)c.x=E/e,c.y=y/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new nf[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Ri(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(jc(s))s.isRenderTargetTexture?(Yt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(jc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function We(i){let t={};for(let e=0;e<i.length;e++){let n=Ri(i[e]);for(let s in n)t[s]=n[s]}return t}function jc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function sf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Vl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var Gh={clone:Ri,merge:We},rf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,af=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Cn=class extends Rn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rf,this.fragmentShader=af,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ri(t.uniforms),this.uniformsGroups=sf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Pt().setHex(s.value);break;case"v2":this.uniforms[n].value=new zt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new B().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Se().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Qt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Jt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ua=class extends Cn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ee=class extends Rn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tr,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var bi=class extends Rn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tr,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Ta,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},da=class extends Rn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fa=class extends Rn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function zi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Fr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var si=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},pa=class extends si{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ol,endingEnd:ol}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ll:r=t,o=2*e-n;break;case cl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ll:a=t,l=2*n-e;break;case cl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),M=m*m,x=M*m,p=-d*x+2*d*M-d*m,_=(1+d)*x+(-1.5-2*d)*M+(-.5+d)*m+1,E=(-1-f)*x+(1.5+f)*M+.5*m,y=f*x-f*M;for(let v=0;v!==o;++v)r[v]=p*a[h+v]+_*a[c+v]+E*a[l+v]+y*a[u+v];return r}},ma=class extends si{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},ga=class extends si{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},xa=class extends si{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-e)/(s-e),M=1-m;for(let x=0;x!==o;++x)r[x]=a[c+x]*M+a[l+x]*m;return r}let d=o*2,f=t-1;for(let m=0;m!==o;++m){let M=a[c+m],x=a[l+m],p=f*d+m*2,_=u[p],E=u[p+1],y=t*d+m*2,v=h[y],b=h[y+1],g=lf(n,e,_,v,s);r[m]=Hh(g,M,E,b,x)}return r}};function Hh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function of(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function lf(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Hh(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=of(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var an=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=zi(e,this.TimeBufferType),this.values=zi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:zi(t.times,Array),values:zi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Fr(t.settings)&&(n.settings={inTangents:zi(t.settings.inTangents,Array),outTangents:zi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ga(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ma(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new pa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new xa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ss:e=this.InterpolantFactoryMethodDiscrete;break;case Xr:e=this.InterpolantFactoryMethodLinear;break;case Br:e=this.InterpolantFactoryMethodSmooth;break;case al:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Yt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ss;case this.InterpolantFactoryMethodLinear:return Xr;case this.InterpolantFactoryMethodSmooth:return Br;case this.InterpolantFactoryMethodBezier:return al}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Fr(this.settings)&&(Qc(this.settings.inTangents,t),Qc(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Fr(this.settings)&&(Kc(this.settings.inTangents,t),Kc(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(qt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){qt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){qt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Td(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){qt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Br,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let M=e[u+m];if(M!==e[d+m]||M!==e[f+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Fr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Qc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Kc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}an.prototype.ValueTypeName="";an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=Xr;var ri=class extends an{constructor(t,e,n){super(t,e,n)}};ri.prototype.ValueTypeName="bool";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=Ss;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var _a=class extends an{constructor(t,e,n,s){super(t,e,n,s)}};_a.prototype.ValueTypeName="color";var ya=class extends an{constructor(t,e,n,s){super(t,e,n,s)}};ya.prototype.ValueTypeName="number";var Ma=class extends si{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Ge.slerpFlat(r,0,a,c-o,a,c,l);return r}},Vs=class extends an{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ma(this.times,this.values,this.getValueSize(),t)}};Vs.prototype.ValueTypeName="quaternion";Vs.prototype.InterpolantFactoryMethodSmooth=void 0;var ai=class extends an{constructor(t,e,n){super(t,e,n)}};ai.prototype.ValueTypeName="string";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=Ss;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Sa=class extends an{constructor(t,e,n,s){super(t,e,n,s)}};Sa.prototype.ValueTypeName="vector";var va=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Wh=new va,ba=class{constructor(t){this.manager=t!==void 0?t:Wh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};ba.DEFAULT_MATERIAL_NAME="__DEFAULT";var zs=class extends He{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var rl=new Jt,$c=new B,th=new B,Ea=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.mapType=$e,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ii,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;$c.setFromMatrixPosition(t.matrixWorld),e.position.copy($c),th.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(th),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){rl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(rl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Xi||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(rl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Dr=new B,Lr=new Ge,En=new B,Gs=class extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Dr,Lr,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dr,Lr,En.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Dr,Lr,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dr,Lr,En.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ei=new B,eh=new zt,nh=new zt,Xe=class extends Gs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Jr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Fo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jr*2*Math.atan(Math.tan(Fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ei.x,ei.y).multiplyScalar(-t/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-t/ei.z)}getViewSize(t,e){return this.getViewBounds(t,eh,nh),e.subVectors(nh,eh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Fo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Hs=class extends Gs{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},hl=class extends Ea{constructor(){super(new Hs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ws=class extends zs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new hl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Zs=class extends zs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Gi=-90,Hi=1,Ki=class extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xe(Gi,Hi,t,e);s.layers=this.layers,this.add(s);let r=new Xe(Gi,Hi,t,e);r.layers=this.layers,this.add(r);let a=new Xe(Gi,Hi,t,e);a.layers=this.layers,this.add(a);let o=new Xe(Gi,Hi,t,e);o.layers=this.layers,this.add(o);let l=new Xe(Gi,Hi,t,e);l.layers=this.layers,this.add(l);let c=new Xe(Gi,Hi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=M,t.setRenderTarget(n,5,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},wa=class extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var zl="\\[\\]\\.:\\/",cf=new RegExp("["+zl+"]","g"),Gl="[^"+zl+"]",hf="[^"+zl.replace("\\.","")+"]",uf=/((?:WC+[\/:])*)/.source.replace("WC",Gl),df=/(WCOD+)?/.source.replace("WCOD",hf),ff=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gl),pf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gl),mf=new RegExp("^"+uf+df+ff+pf+"$"),gf=["material","materials","bones","map"],ul=class{constructor(t,e,n){let s=n||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(cf,"")}static parseTrackName(t){let e=mf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);gf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Yt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;qt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=ul;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ix=new Float32Array(1);var dl=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function Hl(i,t,e,n){let s=xf(n);switch(e){case Ul:return i*t;case Pa:return i*t/s.components*s.byteLength;case Fa:return i*t/s.components*s.byteLength;case li:return i*t*2/s.components*s.byteLength;case Da:return i*t*2/s.components*s.byteLength;case Nl:return i*t*3/s.components*s.byteLength;case vn:return i*t*4/s.components*s.byteLength;case La:return i*t*4/s.components*s.byteLength;case Js:case qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case js:case Qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oa:case Va:return Math.max(i,16)*Math.max(t,8)/4;case Ba:case ka:return Math.max(i,8)*Math.max(t,8)/2;case za:case Ga:case Wa:case Za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ha:case Ks:case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ja:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case to:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case eo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case no:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case io:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case so:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ro:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ao:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case oo:case lo:case co:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ho:case uo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case $s:case fo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xf(i){switch(i){case $e:case Al:return{byteLength:1,components:1};case ns:case Rl:case Sn:return{byteLength:2,components:1};case Ua:case Na:return{byteLength:2,components:4};case Mn:case Ia:case dn:return{byteLength:4,components:1};case Cl:case Il:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Yt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function du(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function yf(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],M=u[f];M.start<=m.start+m.count+1?m.count=Math.max(m.count,M.start+M.count-m.start):(++d,u[d]=M)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let M=u[f];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Mf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sf=`#ifdef USE_ALPHAHASH
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
#endif`,vf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ef=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tf=`#ifdef USE_AOMAP
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
#endif`,Af=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rf=`#ifdef USE_BATCHING
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
#endif`,Cf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,If=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pf=`#ifdef USE_IRIDESCENCE
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
#endif`,Ff=`#ifdef USE_BUMPMAP
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
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Vf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Gf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Hf=`#define PI 3.141592653589793
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
} // validated`,Wf=`vec3 transformedNormal = objectNormal;
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
#endif`,Zf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qf="gl_FragColor = linearToOutputTexel( gl_FragColor );",jf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qf=`#ifdef USE_ENVMAP
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
#endif`,Kf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,$f=`#ifdef USE_ENVMAP
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
#endif`,tp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ep=`#ifdef USE_ENVMAP
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
#endif`,np=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ip=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ap=`#ifdef USE_GRADIENTMAP
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
}`,op=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,up=`#ifdef USE_ENVMAP
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
#endif`,dp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gp=`PhysicalMaterial material;
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
#endif`,xp=`uniform sampler2D dfgLUT;
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
}`,_p=`
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
#endif`,yp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sp=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,vp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ep=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ap=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cp=`#if defined( USE_POINTS_UV )
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
#endif`,Ip=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Up=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Np=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pp=`#if defined( USE_MORPHCOLORS )
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
#endif`,Fp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dp=`#ifdef USE_MORPHTARGETS
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
#endif`,Lp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Op=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Gp=`#ifdef USE_NORMALMAP
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
#endif`,Hp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,im=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sm=`float getShadowMask() {
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
}`,rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,am=`#ifdef USE_SKINNING
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
#endif`,om=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lm=`#ifdef USE_SKINNING
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
#endif`,cm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fm=`#ifdef USE_TRANSMISSION
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
#endif`,pm=`#ifdef USE_TRANSMISSION
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
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ym=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mm=`uniform sampler2D t2D;
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vm=`uniform float backgroundBlurriness;
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
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Em=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wm=`#include <common>
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
}`,Tm=`#if DEPTH_PACKING == 3200
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
}`,Am=`#define DISTANCE
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
}`,Rm=`#define DISTANCE
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
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Im=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Um=`uniform float scale;
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
}`,Nm=`uniform vec3 diffuse;
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
}`,Pm=`#include <common>
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
}`,Fm=`uniform vec3 diffuse;
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
}`,Dm=`#define LAMBERT
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
}`,Lm=`#define LAMBERT
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
}`,Bm=`#define MATCAP
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
}`,Om=`#define MATCAP
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
}`,km=`#define NORMAL
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
}`,Vm=`#define NORMAL
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
}`,zm=`#define PHONG
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
}`,Gm=`#define PHONG
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
}`,Hm=`#define STANDARD
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
}`,Wm=`#define STANDARD
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
}`,Zm=`#define TOON
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
}`,Ym=`#define TOON
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
}`,Xm=`uniform float size;
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
}`,Jm=`uniform vec3 diffuse;
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
}`,qm=`#include <common>
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
}`,jm=`uniform vec3 color;
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
}`,Qm=`uniform float rotation;
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
}`,Km=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:Mf,alphahash_pars_fragment:Sf,alphamap_fragment:vf,alphamap_pars_fragment:bf,alphatest_fragment:Ef,alphatest_pars_fragment:wf,aomap_fragment:Tf,aomap_pars_fragment:Af,batching_pars_vertex:Rf,batching_vertex:Cf,begin_vertex:If,beginnormal_vertex:Uf,bsdfs:Nf,iridescence_fragment:Pf,bumpmap_pars_fragment:Ff,clipping_planes_fragment:Df,clipping_planes_pars_fragment:Lf,clipping_planes_pars_vertex:Bf,clipping_planes_vertex:Of,color_fragment:kf,color_pars_fragment:Vf,color_pars_vertex:zf,color_vertex:Gf,common:Hf,defaultnormal_vertex:Wf,displacementmap_pars_vertex:Zf,displacementmap_vertex:Yf,emissivemap_fragment:Xf,emissivemap_pars_fragment:Jf,colorspace_fragment:qf,colorspace_pars_fragment:jf,envmap_fragment:Qf,envmap_common_pars_fragment:Kf,envmap_pars_fragment:$f,envmap_pars_vertex:tp,envmap_physical_pars_fragment:up,envmap_vertex:ep,fog_vertex:np,fog_pars_vertex:ip,fog_fragment:sp,fog_pars_fragment:rp,gradientmap_pars_fragment:ap,lightmap_pars_fragment:op,lights_lambert_fragment:lp,lights_lambert_pars_fragment:cp,lights_pars_begin:hp,lights_toon_fragment:dp,lights_toon_pars_fragment:fp,lights_phong_fragment:pp,lights_phong_pars_fragment:mp,lights_physical_fragment:gp,lights_physical_pars_fragment:xp,lights_fragment_begin:_p,lights_fragment_maps:yp,lights_fragment_end:Mp,lightprobes_pars_fragment:Sp,logdepthbuf_fragment:vp,logdepthbuf_pars_fragment:bp,logdepthbuf_pars_vertex:Ep,logdepthbuf_vertex:wp,map_fragment:Tp,map_pars_fragment:Ap,map_particle_fragment:Rp,map_particle_pars_fragment:Cp,metalnessmap_fragment:Ip,metalnessmap_pars_fragment:Up,morphinstance_vertex:Np,morphcolor_vertex:Pp,morphnormal_vertex:Fp,morphtarget_pars_vertex:Dp,morphtarget_vertex:Lp,normal_fragment_begin:Bp,normal_fragment_maps:Op,normal_pars_fragment:kp,normal_pars_vertex:Vp,normal_vertex:zp,normalmap_pars_fragment:Gp,clearcoat_normal_fragment_begin:Hp,clearcoat_normal_fragment_maps:Wp,clearcoat_pars_fragment:Zp,iridescence_pars_fragment:Yp,opaque_fragment:Xp,packing:Jp,premultiplied_alpha_fragment:qp,project_vertex:jp,dithering_fragment:Qp,dithering_pars_fragment:Kp,roughnessmap_fragment:$p,roughnessmap_pars_fragment:tm,shadowmap_pars_fragment:em,shadowmap_pars_vertex:nm,shadowmap_vertex:im,shadowmask_pars_fragment:sm,skinbase_vertex:rm,skinning_pars_vertex:am,skinning_vertex:om,skinnormal_vertex:lm,specularmap_fragment:cm,specularmap_pars_fragment:hm,tonemapping_fragment:um,tonemapping_pars_fragment:dm,transmission_fragment:fm,transmission_pars_fragment:pm,uv_pars_fragment:mm,uv_pars_vertex:gm,uv_vertex:xm,worldpos_vertex:_m,background_vert:ym,background_frag:Mm,backgroundCube_vert:Sm,backgroundCube_frag:vm,cube_vert:bm,cube_frag:Em,depth_vert:wm,depth_frag:Tm,distance_vert:Am,distance_frag:Rm,equirect_vert:Cm,equirect_frag:Im,linedashed_vert:Um,linedashed_frag:Nm,meshbasic_vert:Pm,meshbasic_frag:Fm,meshlambert_vert:Dm,meshlambert_frag:Lm,meshmatcap_vert:Bm,meshmatcap_frag:Om,meshnormal_vert:km,meshnormal_frag:Vm,meshphong_vert:zm,meshphong_frag:Gm,meshphysical_vert:Hm,meshphysical_frag:Wm,meshtoon_vert:Zm,meshtoon_frag:Ym,points_vert:Xm,points_frag:Jm,shadow_vert:qm,shadow_frag:jm,sprite_vert:Qm,sprite_frag:Km},Ct={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Nn={basic:{uniforms:We([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:We([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Pt(0)},envMapIntensity:{value:1}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:We([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:We([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:We([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new Pt(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:We([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:We([Ct.points,Ct.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:We([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:We([Ct.common,Ct.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:We([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:We([Ct.sprite,Ct.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distance:{uniforms:We([Ct.common,Ct.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distance_vert,fragmentShader:ne.distance_frag},shadow:{uniforms:We([Ct.lights,Ct.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Nn.physical={uniforms:We([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};var po={r:0,b:0,g:0},$m=new Jt,fu=new Qt;fu.set(-1,0,0,0,1,0,0,0,1);function tg(i,t,e,n,s,r){let a=new Pt(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(_){let E=_.isScene===!0?_.background:null;if(E&&E.isTexture){let y=_.backgroundBlurriness>0;E=t.get(E,y)}return E}function m(_){let E=!1,y=f(_);y===null?x(a,o):y&&y.isColor&&(x(y,1),E=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?e.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(_,E){let y=f(E);y&&y.isCubeTexture?(c===void 0&&(c=new de(new yn(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Ri(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,b,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4($m.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(fu),c.material.toneMapped=ae.getTransfer(y.colorSpace)!==ue,(h!==y||u!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new de(new Si(2,2),new Cn({name:"BackgroundMaterial",uniforms:Ri(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ae.getTransfer(y.colorSpace)!==ue,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function x(_,E){_.getRGB(po,Vl(i)),e.buffers.color.setClear(po.r,po.g,po.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,E=1){a.set(_),o=E,x(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,x(a,o)},render:m,addToRenderList:M,dispose:p}}function eg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(U,P,O,I,G){let W=!1,Z=u(U,I,O,P);r!==Z&&(r=Z,c(r.object)),W=f(U,I,O,G),W&&m(U,I,O,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,y(U,P,O,I),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function h(U){return i.deleteVertexArray(U)}function u(U,P,O,I){let G=I.wireframe===!0,W=n[P.id];W===void 0&&(W={},n[P.id]=W);let Z=U.isInstancedMesh===!0?U.id:0,ot=W[Z];ot===void 0&&(ot={},W[Z]=ot);let F=ot[O.id];F===void 0&&(F={},ot[O.id]=F);let J=F[G];return J===void 0&&(J=d(l()),F[G]=J),J}function d(U){let P=[],O=[],I=[];for(let G=0;G<e;G++)P[G]=0,O[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:I,object:U,attributes:{},index:null}}function f(U,P,O,I){let G=r.attributes,W=P.attributes,Z=0,ot=O.getAttributes();for(let F in ot)if(ot[F].location>=0){let L=G[F],Y=W[F];if(Y===void 0&&(F==="instanceMatrix"&&U.instanceMatrix&&(Y=U.instanceMatrix),F==="instanceColor"&&U.instanceColor&&(Y=U.instanceColor)),L===void 0||L.attribute!==Y||Y&&L.data!==Y.data)return!0;Z++}return r.attributesNum!==Z||r.index!==I}function m(U,P,O,I){let G={},W=P.attributes,Z=0,ot=O.getAttributes();for(let F in ot)if(ot[F].location>=0){let L=W[F];L===void 0&&(F==="instanceMatrix"&&U.instanceMatrix&&(L=U.instanceMatrix),F==="instanceColor"&&U.instanceColor&&(L=U.instanceColor));let Y={};Y.attribute=L,L&&L.data&&(Y.data=L.data),G[F]=Y,Z++}r.attributes=G,r.attributesNum=Z,r.index=I}function M(){let U=r.newAttributes;for(let P=0,O=U.length;P<O;P++)U[P]=0}function x(U){p(U,0)}function p(U,P){let O=r.newAttributes,I=r.enabledAttributes,G=r.attributeDivisors;O[U]=1,I[U]===0&&(i.enableVertexAttribArray(U),I[U]=1),G[U]!==P&&(i.vertexAttribDivisor(U,P),G[U]=P)}function _(){let U=r.newAttributes,P=r.enabledAttributes;for(let O=0,I=P.length;O<I;O++)P[O]!==U[O]&&(i.disableVertexAttribArray(O),P[O]=0)}function E(U,P,O,I,G,W,Z){Z===!0?i.vertexAttribIPointer(U,P,O,G,W):i.vertexAttribPointer(U,P,O,I,G,W)}function y(U,P,O,I){M();let G=I.attributes,W=O.getAttributes(),Z=P.defaultAttributeValues;for(let ot in W){let F=W[ot];if(F.location>=0){let J=G[ot];if(J===void 0&&(ot==="instanceMatrix"&&U.instanceMatrix&&(J=U.instanceMatrix),ot==="instanceColor"&&U.instanceColor&&(J=U.instanceColor)),J!==void 0){let L=J.normalized,Y=J.itemSize,tt=t.get(J);if(tt===void 0)continue;let N=tt.buffer,X=tt.type,ft=tt.bytesPerElement,Mt=X===i.INT||X===i.UNSIGNED_INT||J.gpuType===Ia;if(J.isInterleavedBufferAttribute){let at=J.data,pt=at.isInterleavedBuffer===!0?at.stride:at.itemSize,Dt=J.offset;if(at.isInstancedInterleavedBuffer||at.isInstancedBufferAttribute){for(let xt=0;xt<F.locationSize;xt++)p(F.location+xt,at.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let xt=0;xt<F.locationSize;xt++)x(F.location+xt);i.bindBuffer(i.ARRAY_BUFFER,N);for(let xt=0;xt<F.locationSize;xt++)E(F.location+xt,Y/F.locationSize,X,L,pt*ft,(Dt+Y/F.locationSize*xt)*ft,Mt)}else{if(J.isInstancedBufferAttribute){for(let at=0;at<F.locationSize;at++)p(F.location+at,J.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let at=0;at<F.locationSize;at++)x(F.location+at);i.bindBuffer(i.ARRAY_BUFFER,N);for(let at=0;at<F.locationSize;at++)E(F.location+at,Y/F.locationSize,X,L,Y*ft,Y/F.locationSize*at*ft,Mt)}}else if(Z!==void 0){let L=Z[ot];if(L!==void 0)switch(L.length){case 2:i.vertexAttrib2fv(F.location,L);break;case 3:i.vertexAttrib3fv(F.location,L);break;case 4:i.vertexAttrib4fv(F.location,L);break;default:i.vertexAttrib1fv(F.location,L)}}}}_()}function v(){R();for(let U in n){let P=n[U];for(let O in P){let I=P[O];for(let G in I){let W=I[G];for(let Z in W)h(W[Z].object),delete W[Z];delete I[G]}}delete n[U]}}function b(U){if(n[U.id]===void 0)return;let P=n[U.id];for(let O in P){let I=P[O];for(let G in I){let W=I[G];for(let Z in W)h(W[Z].object),delete W[Z];delete I[G]}}delete n[U.id]}function g(U){for(let P in n){let O=n[P];for(let I in O){let G=O[I];if(G[U.id]===void 0)continue;let W=G[U.id];for(let Z in W)h(W[Z].object),delete W[Z];delete G[U.id]}}}function S(U){for(let P in n){let O=n[P],I=U.isInstancedMesh===!0?U.id:0,G=O[I];if(G!==void 0){for(let W in G){let Z=G[W];for(let ot in Z)h(Z[ot].object),delete Z[ot];delete G[W]}delete O[I],Object.keys(O).length===0&&delete n[P]}}}function R(){T(),a=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:T,dispose:v,releaseStatesOfGeometry:b,releaseStatesOfObject:S,releaseStatesOfProgram:g,initAttributes:M,enableAttribute:x,disableUnusedAttributes:_}}function ng(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function ig(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==vn&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let S=g===Sn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==$e&&g!==dn&&!S&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Yt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Yt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Yt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:M,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:_,maxVaryings:E,maxFragmentUniforms:y,maxSamples:v,samples:b}}function sg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new _n,o=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,M=u.clipIntersection,x=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!x)r?h(null):c();else{let _=r?0:n,E=_*4,y=p.clippingState||null;l.value=y,y=h(m,d,E,f);for(let v=0;v!==E;++v)y[v]=e[v];p.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let M=u!==null?u.length:0,x=null;if(M!==0){if(x=l.value,m!==!0||x===null){let p=f+M*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(x===null||x.length<p)&&(x=new Float32Array(p));for(let E=0,y=f;E!==M;++E,y+=4)a.copy(u[E]).applyMatrix4(_,o),a.normal.toArray(x,y),x[y+3]=a.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,x}}var sr=class extends rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Fs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new yn(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:Ei});r.uniforms.tEquirect.value=e;let a=new de(s,r),o=e.minFilter;return e.minFilter===Zn&&(e.minFilter=Je),new Ki(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Zh=256,rg=3,ag=20,pu=256,mu=16,og=3,lg=new B,cg=new Pt,go=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ki(1,10,null),this._boxMesh=new de(new yn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=lg}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,M=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(t.background=l.getClearColor(cg));let x=new Ki(n,s,h);return x.position.copy(o),x.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=m,t.background=M,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Zh,Vh(t))}_fromTexture(t,e){t.mapping===Ti||t.mapping===es?this._setSize(t.image.length===0?Zh:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Yh(t,!1,!1),n=Math.log2(t)-rg;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Yh(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ti||t.mapping===es?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jh()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Xh()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=hg(),this._integrationMaterial=ug());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/mu);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-og)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(pu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=dg());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Yh(i,t,e){return new sr(i,{minFilter:Zn,generateMipmaps:t,type:Sn,colorSpace:vs,depthBuffer:e})}function rr(i,t,e){return new Cn({name:i,uniforms:t,vertexShader:ne.cube_vert,fragmentShader:e,side:Qe,blending:Ei,depthTest:!1,depthWrite:!1})}function hg(){return rr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${pu}u

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
	`)}function ug(){return rr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:mu}},`

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
	`)}function dg(){return rr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ag}
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
	`)}function Xh(){return rr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Jh(){return rr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function fg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Aa||f===Ra)if(t.has(d)){let m=t.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let M=new sr(m.height);return M.fromEquirectangularTexture(i,d),t.set(d,M),d.addEventListener("dispose",c),o(M.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,m=f===Aa||f===Ra,M=f===Ti||f===es;if(m||M){let x=e.get(d),p=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new go(i)),x=m?n.fromEquirectangular(d,x):n.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{let _=d.image;return m&&_&&_.height>0||M&&_&&l(_)?(n===null&&(n=new go(i)),x=m?n.fromEquirectangular(d):n.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",h),x.texture):null}}}return d}function o(d,f){return f===Aa?d.mapping=Ti:f===Ra&&(d.mapping=es),d}function l(d){let f=0,m=6;for(let M=0;M<m;M++)d[M]!==void 0&&f++;return f===m}function c(d){let f=d.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function pg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&_s("WebGLRenderer: "+n+" extension not supported."),s}}}function mg(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let x in m.attributes)t.remove(m.attributes[x]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);let M=r.get(m);M&&(t.remove(M),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,M){return s[M.id]!==void 0||(M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),a.register(M,M.id,M),e.memory.geometries++),M}function h(m){let M=m.attributes;for(let x in M)t.update(M[x],i.ARRAY_BUFFER)}function u(m){let M=m.index,x=m.attributes.position,p=0;if(x===void 0)return;let _=M!==null?M.array.length:x.array.length/3-1,E=x.count>=65535?Is:Cs,y=new E(Math.ceil(_/3)*6,1),v=y.array;if(M!==null){let g=M.array;p=M.version;for(let S=0,R=0;S<_;S+=3){let T=g[S+0],U=g[S+1],P=g[S+2];v[R++]=T,v[R++]=U,v[R++]=U,v[R++]=P,v[R++]=P,v[R++]=T}}else{p=x.version;for(let g=0,S=0;g<_;g+=3){let R=g+0,T=g+1,U=g+2;v[S++]=R,v[S++]=T,v[S++]=T,v[S++]=U,v[S++]=U,v[S++]=R}}y.version=p;let b=r.get(m);b&&t.remove(b),r.set(m,y)}function d(m){let M=r.get(m);if(M){let x=m.index;x!==null&&M.version<x.version&&u(m)}else u(m);return r.get(m)}function f(){for(let m in s){let M=s[m].deref();M!==void 0&&l(M)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function gg(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),e.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let M=0;for(let x=0;x<f;x++)M+=d[x];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function xg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:qt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function _g(i,t,e){let n=new WeakMap,s=new Se;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let R=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",R)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],E=0;f===!0&&(E=1),m===!0&&(E=2),M===!0&&(E=3);let y=o.attributes.position.count*E,v=1;y>t.maxTextureSize&&(v=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let b=new Float32Array(y*v*4*u),g=new ws(b,y,v,u);g.type=dn,g.needsUpdate=!0;let S=E*4;for(let T=0;T<u;T++){let U=x[T],P=p[T],O=_[T],I=y*v*4*T;for(let G=0;G<U.count;G++){let W=G*S;f===!0&&(s.fromBufferAttribute(U,G),b[I+W+0]=s.x,b[I+W+1]=s.y,b[I+W+2]=s.z,b[I+W+3]=0),m===!0&&(s.fromBufferAttribute(P,G),b[I+W+4]=s.x,b[I+W+5]=s.y,b[I+W+6]=s.z,b[I+W+7]=0),M===!0&&(s.fromBufferAttribute(O,G),b[I+W+8]=s.x,b[I+W+9]=s.y,b[I+W+10]=s.z,b[I+W+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:g,size:new zt(y,v)},n.set(o,d),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function yg(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Mg={[yl]:"LINEAR_TONE_MAPPING",[Ml]:"REINHARD_TONE_MAPPING",[Sl]:"CINEON_TONE_MAPPING",[vl]:"ACES_FILMIC_TONE_MAPPING",[El]:"AGX_TONE_MAPPING",[wl]:"NEUTRAL_TONE_MAPPING",[bl]:"CUSTOM_TONE_MAPPING"};function Sg(i,t,e,n,s,r){let a=new rn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new xe;h.setAttribute("position",new jt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new jt([0,2,0,0,2,0],2));let u=new ua({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new de(h,u),f=new Hs(-1,1,1,-1,0,1),m=null,M=null,x=!1,p,_=null,E=[],y=!1;this.setSize=function(v,b){a.setSize(v,b),o!==null&&o.setSize(v,b),l!==null&&l.setSize(v,b);for(let g=0;g<E.length;g++){let S=E[g];S.setSize&&S.setSize(v,b)}},this.setEffects=function(v){E=v,y=E.length>0&&E[0].isRenderPass===!0;let b=a.width,g=a.height;E.length>0&&o===null&&(o=new rn(b,g,{type:Sn,depthBuffer:!1,stencilBuffer:!1}),l=new rn(b,g,{type:Sn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&E.some(R=>R.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new Wn(b,g),r===!0&&(c.format=Yn,c.type=Ai)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let R=0;R<E.length;R++){let T=E[R];T.setSize&&T.setSize(b,g),S&&T.needsDepthTexture===!0&&T.setDepthTexture&&T.setDepthTexture(c)}},this.begin=function(v,b){if(x||v.toneMapping===In&&E.length===0)return!1;if(_=b,b!==null){let g=b.width,S=b.height;(a.width!==g||a.height!==S)&&this.setSize(g,S)}return y===!1&&v.setRenderTarget(a),p=v.toneMapping,v.toneMapping=In,!0},this.hasRenderPass=function(){return y},this.end=function(v,b){v.toneMapping=p,x=!0;let g=a,S=o;for(let R=0;R<E.length;R++){let T=E[R];T.enabled!==!1&&(T.render(v,S,g,b),T.needsSwap!==!1&&(g=S,S=S===o?l:o))}if(m!==v.outputColorSpace||M!==v.toneMapping){m=v.outputColorSpace,M=v.toneMapping,u.defines={},ae.getTransfer(m)===ue&&(u.defines.SRGB_TRANSFER="");let R=Mg[M];R&&(u.defines[R]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=g.texture,v.setRenderTarget(_),v.render(d,f),_=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var gu=new qe,xu=new Wn(1,1),_u=new Ls(1),yu=new ws,Mu=new Qr,Su=new Fs,qh=[],jh=[],Qh=new Float32Array(16),Kh=new Float32Array(9),$h=new Float32Array(4);function ss(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=qh[s];if(r===void 0&&(r=new Float32Array(s),qh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function _o(i,t){let e=jh[t];e===void 0&&(e=new Int32Array(t),jh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function vg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function Eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function Tg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Ie(e,n))return;$h.set(n),i.uniformMatrix2fv(this.addr,!1,$h),Ue(e,n)}}function Ag(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Ie(e,n))return;Kh.set(n),i.uniformMatrix3fv(this.addr,!1,Kh),Ue(e,n)}}function Rg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Ie(e,n))return;Qh.set(n),i.uniformMatrix4fv(this.addr,!1,Qh),Ue(e,n)}}function Cg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function Ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function Ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function Pg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function Dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function Lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function yo(i){return i.version===0&&(i.compareFunction=Dl,i.needsUpdate=!0),i}function Bg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=yo(xu):r=gu,e.setTexture2D(t||r,s)}function Og(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Mu,s)}function kg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=yo(_u):r=Su,e.setTextureCube(t||r,s)}function Vg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||yu,s)}function zg(i){switch(i){case 5126:return vg;case 35664:return bg;case 35665:return Eg;case 35666:return wg;case 35674:return Tg;case 35675:return Ag;case 35676:return Rg;case 5124:case 35670:return Cg;case 35667:case 35671:return Ig;case 35668:case 35672:return Ug;case 35669:case 35673:return Ng;case 5125:return Pg;case 36294:return Fg;case 36295:return Dg;case 36296:return Lg;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return kg;case 36289:case 36303:case 36311:case 36292:return Vg}}function Gg(i,t){i.uniform1fv(this.addr,t)}function Hg(i,t){let e=ss(t,this.size,2);i.uniform2fv(this.addr,e)}function Wg(i,t){let e=ss(t,this.size,3);i.uniform3fv(this.addr,e)}function Zg(i,t){let e=ss(t,this.size,4);i.uniform4fv(this.addr,e)}function Yg(i,t){let e=ss(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Xg(i,t){let e=ss(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Jg(i,t){let e=ss(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function qg(i,t){i.uniform1iv(this.addr,t)}function jg(i,t){i.uniform2iv(this.addr,t)}function Qg(i,t){i.uniform3iv(this.addr,t)}function Kg(i,t){i.uniform4iv(this.addr,t)}function $g(i,t){i.uniform1uiv(this.addr,t)}function t0(i,t){i.uniform2uiv(this.addr,t)}function e0(i,t){i.uniform3uiv(this.addr,t)}function n0(i,t){i.uniform4uiv(this.addr,t)}function i0(i,t,e){let n=this.cache,s=t.length,r=_o(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=yo(xu):a=gu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function s0(i,t,e){let n=this.cache,s=t.length,r=_o(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Mu,r[a])}function r0(i,t,e){let n=this.cache,s=t.length,r=_o(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=yo(_u):a=Su;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function a0(i,t,e){let n=this.cache,s=t.length,r=_o(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||yu,r[a])}function o0(i){switch(i){case 5126:return Gg;case 35664:return Hg;case 35665:return Wg;case 35666:return Zg;case 35674:return Yg;case 35675:return Xg;case 35676:return Jg;case 5124:case 35670:return qg;case 35667:case 35671:return jg;case 35668:case 35672:return Qg;case 35669:case 35673:return Kg;case 5125:return $g;case 36294:return t0;case 36295:return e0;case 36296:return n0;case 35678:case 36198:case 36298:case 36306:case 35682:return i0;case 35679:case 36299:case 36307:return s0;case 35680:case 36300:case 36308:case 36293:return r0;case 36289:case 36303:case 36311:case 36292:return a0}}var Yl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zg(e.type)}},Xl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=o0(e.type)}},Jl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Wl=/(\w+)(\])?(\[|\.)?/g;function tu(i,t){i.seq.push(t),i.map[t.id]=t}function l0(i,t,e){let n=i.name,s=n.length;for(Wl.lastIndex=0;;){let r=Wl.exec(n),a=Wl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){tu(e,c===void 0?new Yl(o,i,t):new Xl(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Jl(o),tu(e,u)),e=u}}}var is=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);l0(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function eu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var c0=37297,h0=0;function u0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var nu=new Qt;function d0(i){ae._getMatrix(nu,ae.workingColorSpace,i);let t=`mat3( ${nu.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(i)){case bs:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return Yt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function iu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+u0(i.getShaderSource(t),o)}else return r}function f0(i,t){let e=d0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var p0={[yl]:"Linear",[Ml]:"Reinhard",[Sl]:"Cineon",[vl]:"ACESFilmic",[El]:"AgX",[wl]:"Neutral",[bl]:"Custom"};function m0(i,t){let e=p0[t];return e===void 0?(Yt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var mo=new B;function g0(){ae.getLuminanceCoefficients(mo);let i=mo.x.toFixed(4),t=mo.y.toFixed(4),e=mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function x0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ir).join(`
`)}function _0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function y0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ir(i){return i!==""}function su(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function ru(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var M0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ql(i){return i.replace(M0,S0)}function S0(i,t){let e=ne[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return ql(e)}var v0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function au(i){return i.replace(v0,b0)}function b0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ou(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var E0={[Ys]:"SHADOWMAP_TYPE_PCF",[$i]:"SHADOWMAP_TYPE_VSM"};function w0(i){return E0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var T0={[es]:"ENVMAP_MODE_REFRACTION"};function A0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":T0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var R0={[Ta]:"ENVMAP_BLENDING_MULTIPLY",[Eh]:"ENVMAP_BLENDING_MIX",[wh]:"ENVMAP_BLENDING_ADD"};function C0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":R0[i.combine]||"ENVMAP_BLENDING_NONE"}function I0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=w0(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=A0(e),u=C0(e),d=x0(e),f=_0(r),m=s.createProgram(),M,x,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(ir).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(ir).join(`
`),x.length>0&&(x+=`
`)):(M=[ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),x=[ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==In?"#define TONE_MAPPING":"",e.toneMapping!==In?ne.tonemapping_pars_fragment:"",e.toneMapping!==In?m0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,f0("linearToOutputTexel",e.outputColorSpace),g0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ir).join(`
`)),a=ql(a),a=su(a,e),a=ru(a,e),o=ql(o),o=su(o,e),o=ru(o,e),a=au(a),o=au(o),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,M=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",e.glslVersion===Ll?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ll?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let _=p+M+a,E=p+x+o,y=eu(s,s.VERTEX_SHADER,_),v=eu(s,s.FRAGMENT_SHADER,E);s.attachShader(m,y),s.attachShader(m,v),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function b(T){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(m)||"",P=s.getShaderInfoLog(y)||"",O=s.getShaderInfoLog(v)||"",I=U.trim(),G=P.trim(),W=O.trim(),Z=!0,ot=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,y,v);else{let F=iu(s,y,"vertex"),J=iu(s,v,"fragment");qt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+I+`
`+F+`
`+J)}else I!==""?Yt("WebGLProgram: Program Info Log:",I):(G===""||W==="")&&(ot=!1);ot&&(T.diagnostics={runnable:Z,programLog:I,vertexShader:{log:G,prefix:M},fragmentShader:{log:W,prefix:x}})}s.deleteShader(y),s.deleteShader(v),g=new is(s,m),S=y0(s,m)}let g;this.getUniforms=function(){return g===void 0&&b(this),g};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(m,c0)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=h0++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=v,this}var U0=0,jl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ql(t),e.set(t,n)),n}},Ql=class{constructor(t){this.id=U0++,this.code=t,this.usedTimes=0}};function N0(i){return i===li||i===Ks||i===$s}function P0(i,t,e,n,s,r){let a=new Ts,o=new jl,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(g){return l.add(g),g===0?"uv":`uv${g}`}function m(g,S,R,T,U,P){let O=T.fog,I=U.geometry,G=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?T.environment:null,W=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,Z=t.get(g.envMap||G,W),ot=d[g.type],F=n.precision;g.precision!==null&&(F=n.getMaxPrecision(g.precision),F!==g.precision&&Yt("WebGLProgram.getParameters:",g.precision,"not supported, using",F,"instead."));let J=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,L=J!==void 0?J.length:0,Y=0;I.morphAttributes.position!==void 0&&(Y=1),I.morphAttributes.normal!==void 0&&(Y=2),I.morphAttributes.color!==void 0&&(Y=3);let tt,N,X,ft;if(ot){let Rt=Nn[ot];tt=Rt.vertexShader,N=Rt.fragmentShader}else{tt=g.vertexShader,N=g.fragmentShader;let Rt=o.getVertexShaderStage(g),me=o.getFragmentShaderStage(g);o.update(g,Rt,me),X=Rt.id,ft=me.id}let Mt=i.getRenderTarget(),at=i.state.buffers.depth.getReversed(),pt=U.isInstancedMesh===!0,Dt=U.isBatchedMesh===!0,xt=!!g.map,H=!!g.matcap,ut=!!Z,j=ut&&Z.isPMREMTexture===!0,dt=!!g.aoMap,Lt=!!g.lightMap,Ht=!!g.bumpMap&&g.wireframe===!1,Zt=!!g.normalMap,Tt=!!g.displacementMap,Ft=!!g.emissiveMap,oe=!!g.metalnessMap,pe=!!g.roughnessMap,ce=g.anisotropy>0,k=g.clearcoat>0,it=g.diffuseRoughness>0,Ut=g.dispersion>0,Xt=g.retroreflectivity>0,ht=g.iridescence>0,te=g.sheen>0,K=g.transmission>0,St=ce&&!!g.anisotropyMap,C=k&&!!g.clearcoatMap,w=k&&!!g.clearcoatNormalMap,V=k&&!!g.clearcoatRoughnessMap,ct=it&&!!g.diffuseRoughnessMap,et=ht&&!!g.iridescenceMap,mt=ht&&!!g.iridescenceThicknessMap,_t=te&&!!g.sheenColorMap,st=te&&!!g.sheenRoughnessMap,rt=!!g.specularMap,bt=!!g.specularColorMap,D=!!g.specularIntensityMap,lt=K&&!!g.transmissionMap,nt=K&&!!g.thicknessMap,Et=!!g.gradientMap,yt=!!g.alphaMap,vt=g.alphaTest>0,Gt=!!g.alphaHash,ee=!!g.extensions,gt=In;g.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(gt=i.toneMapping);let Wt=j?Z.isCompressedCubeTexture?Z.image[0].mipmaps:Z.mipmaps:null,$t={shaderID:ot,shaderType:g.type,shaderName:g.name,vertexShader:tt,fragmentShader:N,defines:g.defines,customVertexShaderID:X,customFragmentShaderID:ft,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:F,batching:Dt,batchingColor:Dt&&U._colorsTexture!==null,instancing:pt,instancingColor:pt&&U.instanceColor!==null,instancingMorph:pt&&U.morphTexture!==null,outputColorSpace:Mt===null?i.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:ae.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:xt,matcap:H,envMap:ut,envMapMode:ut&&Z.mapping,envMapPMREM:j,envMapMaxLod:j?Wt.length-1:null,envMapSize:j?Wt[0].width:null,aoMap:dt,lightMap:Lt,bumpMap:Ht,normalMap:Zt,displacementMap:Tt,emissiveMap:Ft,normalMapObjectSpace:Zt&&g.normalMapType===Rh,normalMapTangentSpace:Zt&&g.normalMapType===tr,packedNormalMap:Zt&&g.normalMapType===tr&&N0(g.normalMap.format),metalnessMap:oe,roughnessMap:pe,anisotropy:ce,anisotropyMap:St,clearcoat:k,clearcoatMap:C,clearcoatNormalMap:w,clearcoatRoughnessMap:V,diffuseRoughness:it,diffuseRoughnessMap:ct,dispersion:Ut,retroreflection:Xt,iridescence:ht,iridescenceMap:et,iridescenceThicknessMap:mt,sheen:te,sheenColorMap:_t,sheenRoughnessMap:st,specularMap:rt,specularColorMap:bt,specularIntensityMap:D,transmission:K,transmissionMap:lt,thicknessMap:nt,gradientMap:Et,opaque:g.transparent===!1&&g.blending===ts&&g.alphaToCoverage===!1,alphaMap:yt,alphaTest:vt,alphaHash:Gt,combine:g.combine,mapUv:xt&&f(g.map.channel),aoMapUv:dt&&f(g.aoMap.channel),lightMapUv:Lt&&f(g.lightMap.channel),bumpMapUv:Ht&&f(g.bumpMap.channel),normalMapUv:Zt&&f(g.normalMap.channel),displacementMapUv:Tt&&f(g.displacementMap.channel),emissiveMapUv:Ft&&f(g.emissiveMap.channel),metalnessMapUv:oe&&f(g.metalnessMap.channel),roughnessMapUv:pe&&f(g.roughnessMap.channel),anisotropyMapUv:St&&f(g.anisotropyMap.channel),clearcoatMapUv:C&&f(g.clearcoatMap.channel),clearcoatNormalMapUv:w&&f(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&f(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ct&&f(g.diffuseRoughnessMap.channel),iridescenceMapUv:et&&f(g.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&f(g.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&f(g.sheenColorMap.channel),sheenRoughnessMapUv:st&&f(g.sheenRoughnessMap.channel),specularMapUv:rt&&f(g.specularMap.channel),specularColorMapUv:bt&&f(g.specularColorMap.channel),specularIntensityMapUv:D&&f(g.specularIntensityMap.channel),transmissionMapUv:lt&&f(g.transmissionMap.channel),thicknessMapUv:nt&&f(g.thicknessMap.channel),alphaMapUv:yt&&f(g.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Zt||ce),vertexNormals:!!I.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!I.attributes.uv&&(xt||yt),fog:!!O,useFog:g.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||I.attributes.normal===void 0&&Zt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:at,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:Y,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:P.filter(Rt=>Rt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:gt,decodeVideoTexture:xt&&g.map.isVideoTexture===!0&&ae.getTransfer(g.map.colorSpace)===ue,decodeVideoTextureEmissive:Ft&&g.emissiveMap.isVideoTexture===!0&&ae.getTransfer(g.emissiveMap.colorSpace)===ue,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===we,flipSided:g.side===Qe,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ee&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&g.extensions.multiDraw===!0||Dt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return $t.vertexUv1s=l.has(1),$t.vertexUv2s=l.has(2),$t.vertexUv3s=l.has(3),l.clear(),$t}function M(g){let S=[];if(g.shaderID?S.push(g.shaderID):(S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID)),g.defines!==void 0)for(let R in g.defines)S.push(R),S.push(g.defines[R]);return g.isRawShaderMaterial===!1&&(x(S,g),p(S,g),S.push(i.outputColorSpace)),S.push(g.customProgramCacheKey),S.join()}function x(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapPMREM),g.push(S.envMapMaxLod),g.push(S.envMapSize),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.diffuseRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.numSunLights),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numSunLightShadows),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.numLightProbeGrids),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function p(g,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function _(g){let S=d[g.type],R;if(S){let T=Nn[S];R=Gh.clone(T.uniforms)}else R=g.uniforms;return R}function E(g,S){let R=h.get(S);return R!==void 0?++R.usedTimes:(R=new I0(i,S,g,s),c.push(R),h.set(S,R)),R}function y(g){if(--g.usedTimes===0){let S=c.indexOf(g);c[S]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function v(g){o.remove(g)}function b(){o.dispose()}return{getParameters:m,getProgramCacheKey:M,getUniforms:_,acquireProgram:E,releaseProgram:y,releaseShaderCache:v,programs:c,dispose:b}}function F0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function D0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function lu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function cu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,M,x,p){let _=i[t];return _===void 0?(_={id:d.id,object:d,geometry:f,material:m,materialVariant:a(d),groupOrder:M,renderOrder:d.renderOrder,z:x,group:p},i[t]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=m,_.materialVariant=a(d),_.groupOrder=M,_.renderOrder=d.renderOrder,_.z=x,_.group=p),t++,_}function l(d,f,m,M,x,p,_){_.reversedDepth===!0&&(x=-x);let E=o(d,f,m,M,x,p);m.transmission>0?n.push(E):m.transparent===!0?s.push(E):e.push(E)}function c(d,f,m,M,x,p){let _=o(d,f,m,M,x,p);m.transmission>0?n.unshift(_):m.transparent===!0?s.unshift(_):e.unshift(_)}function h(d,f){e.length>1&&e.sort(d||D0),n.length>1&&n.sort(f||lu),s.length>1&&s.sort(f||lu)}function u(){for(let d=t,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function L0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new cu,i.set(n,[a])):s>=r.length?(a=new cu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function B0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new B,color:new Pt};break;case"SpotLight":e={position:new B,direction:new B,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function O0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var k0=0;function V0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function z0(i){let t=new B0,e=O0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let s=new B,r=new Jt,a=new Jt;function o(c){let h=0,u=0,d=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let f=0,m=0,M=0,x=0,p=0,_=0,E=0,y=0,v=0,b=0,g=0,S=0,R=0,T=0;c.sort(V0);for(let P=0,O=c.length;P<O;P++){let I=c[P],G=I.color,W=I.intensity,Z=I.distance,ot=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===li?ot=I.shadow.map.texture:ot=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=G.r*W,u+=G.g*W,d+=G.b*W;else if(I.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(I.sh.coefficients[F],W);T++}else if(I.isSunLight){let F=t.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let J=I.shadow,L=e.get(I);L.shadowIntensity=J.intensity,L.shadowBias=J.bias,L.shadowNormalBias=J.normalBias,L.shadowRadius=J.radius,L.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[m]=L,n.sunShadowMap[m]=ot;let Y=J.getViewportCount();for(let tt=0;tt<Y;tt++)n.sunShadowMatrix[M+tt]=J.getMatrix(tt),n.sunShadowCascade[M+tt]=J._cascadeData[tt];M+=Y,m++}n.sun[f]=F,f++}else if(I.isDirectionalLight){let F=t.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let J=I.shadow,L=e.get(I);L.shadowIntensity=J.intensity,L.shadowBias=J.bias,L.shadowNormalBias=J.normalBias,L.shadowRadius=J.radius,L.shadowMapSize=J.mapSize,n.directionalShadow[x]=L,n.directionalShadowMap[x]=ot,n.directionalShadowMatrix[x]=I.shadow.matrix,v++}n.directional[x]=F,x++}else if(I.isSpotLight){let F=t.get(I);F.position.setFromMatrixPosition(I.matrixWorld),F.color.copy(G).multiplyScalar(W),F.distance=Z,F.coneCos=Math.cos(I.angle),F.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),F.decay=I.decay,n.spot[_]=F;let J=I.shadow;if(I.map&&(n.spotLightMap[S]=I.map,S++,J.updateMatrices(I),I.castShadow&&R++),n.spotLightMatrix[_]=J.matrix,I.castShadow){let L=e.get(I);L.shadowIntensity=J.intensity,L.shadowBias=J.bias,L.shadowNormalBias=J.normalBias,L.shadowRadius=J.radius,L.shadowMapSize=J.mapSize,n.spotShadow[_]=L,n.spotShadowMap[_]=ot,g++}_++}else if(I.isRectAreaLight){let F=t.get(I);F.color.copy(G).multiplyScalar(W),F.halfWidth.set(I.width*.5,0,0),F.halfHeight.set(0,I.height*.5,0),n.rectArea[E]=F,E++}else if(I.isPointLight){let F=t.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),F.distance=I.distance,F.decay=I.decay,I.castShadow){let J=I.shadow,L=e.get(I);L.shadowIntensity=J.intensity,L.shadowBias=J.bias,L.shadowNormalBias=J.normalBias,L.shadowRadius=J.radius,L.shadowMapSize=J.mapSize,L.shadowCameraNear=J.camera.near,L.shadowCameraFar=J.camera.far,n.pointShadow[p]=L,n.pointShadowMap[p]=ot,n.pointShadowMatrix[p]=I.shadow.matrix,b++}n.point[p]=F,p++}else if(I.isHemisphereLight){let F=t.get(I);F.skyColor.copy(I.color).multiplyScalar(W),F.groundColor.copy(I.groundColor).multiplyScalar(W),n.hemi[y]=F,y++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let U=n.hash;(U.sunLength!==f||U.directionalLength!==x||U.pointLength!==p||U.spotLength!==_||U.rectAreaLength!==E||U.hemiLength!==y||U.numSunShadows!==m||U.numDirectionalShadows!==v||U.numPointShadows!==b||U.numSpotShadows!==g||U.numSpotMaps!==S||U.numLightProbes!==T)&&(n.sun.length=f,n.directional.length=x,n.spot.length=_,n.rectArea.length=E,n.point.length=p,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+S-R,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=T,U.sunLength=f,U.directionalLength=x,U.pointLength=p,U.spotLength=_,U.rectAreaLength=E,U.hemiLength=y,U.numSunShadows=m,U.numDirectionalShadows=v,U.numPointShadows=b,U.numSpotShadows=g,U.numSpotMaps=S,U.numLightProbes=T,n.version=k0++)}function l(c,h){let u=0,d=0,f=0,m=0,M=0,x=0,p=h.matrixWorldInverse;for(let _=0,E=c.length;_<E;_++){let y=c[_];if(y.isSunLight){let v=n.sun[u];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(p),u++}else if(y.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),d++}else if(y.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),m++}else if(y.isRectAreaLight){let v=n.rectArea[M];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),M++}else if(y.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(p),x++}}}return{setup:o,setupView:l,state:n}}function hu(i){let t=new z0(i),e=[],n=[],s=[];function r(u){h.camera=u,e.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):e.push(u)}function o(u){n.push(u)}function l(){t.setup(e),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function G0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new hu(i),t.set(s,[o])):r>=a.length?(o=new hu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var H0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W0=`uniform sampler2D shadow_pass;
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
}`,Z0=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Y0=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],uu=new Jt,nr=new B,Zl=new B;function X0(i,t,e){let n=new ii,s=new zt,r=new zt,a=new Se,o=new da,l=new fa,c={},h=e.maxTextureSize,u={[oi]:Qe,[Qe]:oi,[we]:we},d=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:H0,fragmentShader:W0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new xe;m.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new de(m,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ys;let p=this.type;this.render=function(b,g,S){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||b.length===0)return;this.type===rh&&(Yt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ys);let R=i.getRenderTarget(),T=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Ei),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let O=p!==this.type;O&&g.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(G=>G.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,G=b.length;I<G;I++){let W=b[I],Z=W.shadow;if(Z===void 0){Yt("WebGLShadowMap:",W,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let ot=Z.getFrameExtents();s.multiply(ot),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ot.x),s.x=r.x*ot.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ot.y),s.y=r.y*ot.y,Z.mapSize.y=r.y));let F=i.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=F,Z.map===null||O===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===$i){if(W.isPointLight){Yt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new rn(s.x,s.y,{format:li,type:Sn,minFilter:Je,magFilter:Je,generateMipmaps:!1}),Z.map.texture.name=W.name+".shadowMap",Z.map.depthTexture=new Wn(s.x,s.y,dn),Z.map.depthTexture.name=W.name+".shadowMapDepth",Z.map.depthTexture.format=Gn,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Re,Z.map.depthTexture.magFilter=Re}else W.isPointLight?(Z.map=new sr(s.x),Z.map.depthTexture=new Ls(s.x,Mn)):(Z.map=new rn(s.x,s.y),Z.map.depthTexture=new Wn(s.x,s.y,Mn)),Z.map.depthTexture.name=W.name+".shadowMap",Z.map.depthTexture.format=Gn,this.type===Ys?(Z.map.depthTexture.compareFunction=F?Fl:Pl,Z.map.depthTexture.minFilter=Je,Z.map.depthTexture.magFilter=Je):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Re,Z.map.depthTexture.magFilter=Re);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==s.x||Z.map.height!==s.y)&&Z.map.setSize(s.x,s.y);let J=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();W.isPointLight!==!0&&Z.updateMatrices(W,S);let L=(Z.camera.layers.mask&4294967294)!==0?Z.camera.layers:S.layers;for(let Y=0;Y<J;Y++){let tt=Z.getCamera(Y);if(W.isPointLight){let N=Z.camera,X=Z.matrix,ft=W.distance||N.far;ft!==N.far&&(N.far=ft,N.updateProjectionMatrix()),nr.setFromMatrixPosition(W.matrixWorld),N.position.copy(nr),Zl.copy(N.position),Zl.add(Z0[Y]),N.up.copy(Y0[Y]),N.lookAt(Zl),N.updateMatrixWorld(),X.makeTranslation(-nr.x,-nr.y,-nr.z),uu.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(uu,N.coordinateSystem,N.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)i.setRenderTarget(Z.map,Y),i.clear();else{Y===0&&(i.setRenderTarget(Z.map),i.clear());let N=Z.getViewport(Y);a.set(r.x*N.x,r.y*N.y,r.x*N.z,r.y*N.w),P.viewport(a)}n=Z.getFrustum(Y),y(g,S,tt,W,L,this.type)}Z.isPointLightShadow!==!0&&this.type===$i&&_(Z,S),Z.needsUpdate=!1}p=this.type,x.needsUpdate=!1,i.setRenderTarget(R,T,U)};function _(b,g){let S=t.update(M);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new rn(s.x,s.y,{format:li,type:Sn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(g,null,S,d,M,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(g,null,S,f,M,null)}function E(b,g,S,R){let T=null,U=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(U!==void 0)T=U;else if(T=S.isPointLight===!0?l:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let P=T.uuid,O=g.uuid,I=c[P];I===void 0&&(I={},c[P]=I);let G=I[O];G===void 0&&(G=T.clone(),I[O]=G,g.addEventListener("dispose",v)),T=G}if(T.visible=g.visible,T.wireframe=g.wireframe,R===$i?T.side=g.shadowSide!==null?g.shadowSide:g.side:T.side=g.shadowSide!==null?g.shadowSide:u[g.side],T.alphaMap=g.alphaMap,T.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,T.map=g.map,T.clipShadows=g.clipShadows,T.clippingPlanes=g.clippingPlanes,T.clipIntersection=g.clipIntersection,T.displacementMap=g.displacementMap,T.displacementScale=g.displacementScale,T.displacementBias=g.displacementBias,T.wireframeLinewidth=g.wireframeLinewidth,T.linewidth=g.linewidth,S.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let P=i.properties.get(T);P.light=S}return T}function y(b,g,S,R,T,U){if(b.visible===!1)return;if(b.layers.test(T)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&U===$i)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);let I=t.update(b),G=b.material;if(Array.isArray(G)){let W=I.groups;for(let Z=0,ot=W.length;Z<ot;Z++){let F=W[Z],J=G[F.materialIndex];if(J&&J.visible){let L=E(b,J,R,U);b.onBeforeShadow(i,b,g,S,I,L,F),i.renderBufferDirect(S,null,I,L,b,F),b.onAfterShadow(i,b,g,S,I,L,F)}}}else if(G.visible){let W=E(b,G,R,U);b.onBeforeShadow(i,b,g,S,I,W,null),i.renderBufferDirect(S,null,I,W,b,null),b.onAfterShadow(i,b,g,S,I,W,null)}}let O=b.children;for(let I=0,G=O.length;I<G;I++)y(O[I],g,S,R,T,U)}function v(b){b.target.removeEventListener("dispose",v);for(let S in c){let R=c[S],T=b.target.uuid;T in R&&(R[T].dispose(),delete R[T])}}}function J0(i,t){function e(){let D=!1,lt=new Se,nt=null,Et=new Se(0,0,0,0);return{setMask:function(yt){nt!==yt&&!D&&(i.colorMask(yt,yt,yt,yt),nt=yt)},setLocked:function(yt){D=yt},setClear:function(yt,vt,Gt,ee,gt){gt===!0&&(yt*=ee,vt*=ee,Gt*=ee),lt.set(yt,vt,Gt,ee),Et.equals(lt)===!1&&(i.clearColor(yt,vt,Gt,ee),Et.copy(lt))},reset:function(){D=!1,nt=null,Et.set(-1,0,0,0)}}}function n(){let D=!1,lt=!1,nt=null,Et=null,yt=null;return{setReversed:function(vt){if(lt!==vt){let Gt=t.get("EXT_clip_control");vt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),lt=vt;let ee=yt;yt=null,this.setClear(ee)}},getReversed:function(){return lt},setTest:function(vt){vt?at(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(vt){nt!==vt&&!D&&(i.depthMask(vt),nt=vt)},setFunc:function(vt){if(lt&&(vt=kh[vt]),Et!==vt){switch(vt){case kr:i.depthFunc(i.NEVER);break;case Vr:i.depthFunc(i.ALWAYS);break;case zr:i.depthFunc(i.LESS);break;case Zi:i.depthFunc(i.LEQUAL);break;case Gr:i.depthFunc(i.EQUAL);break;case Hr:i.depthFunc(i.GEQUAL);break;case Wr:i.depthFunc(i.GREATER);break;case Zr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Et=vt}},setLocked:function(vt){D=vt},setClear:function(vt){yt!==vt&&(yt=vt,lt&&(vt=1-vt),i.clearDepth(vt))},reset:function(){D=!1,nt=null,Et=null,yt=null,lt=!1}}}function s(){let D=!1,lt=null,nt=null,Et=null,yt=null,vt=null,Gt=null,ee=null,gt=null;return{setTest:function(Wt){D||(Wt?at(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function(Wt){lt!==Wt&&!D&&(i.stencilMask(Wt),lt=Wt)},setFunc:function(Wt,$t,Rt){(nt!==Wt||Et!==$t||yt!==Rt)&&(i.stencilFunc(Wt,$t,Rt),nt=Wt,Et=$t,yt=Rt)},setOp:function(Wt,$t,Rt){(vt!==Wt||Gt!==$t||ee!==Rt)&&(i.stencilOp(Wt,$t,Rt),vt=Wt,Gt=$t,ee=Rt)},setLocked:function(Wt){D=Wt},setClear:function(Wt){gt!==Wt&&(i.clearStencil(Wt),gt=Wt)},reset:function(){D=!1,lt=null,nt=null,Et=null,yt=null,vt=null,Gt=null,ee=null,gt=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,m=[],M=null,x=!1,p=null,_=null,E=null,y=null,v=null,b=null,g=null,S=new Pt(0,0,0),R=0,T=!1,U=null,P=null,O=null,I=null,G=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,ot=0,F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(F)[1]),Z=ot>=1):F.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),Z=ot>=2);let J=null,L={},Y=i.getParameter(i.SCISSOR_BOX),tt=i.getParameter(i.VIEWPORT),N=new Se().fromArray(Y),X=new Se().fromArray(tt);function ft(D,lt,nt,Et){let yt=new Uint8Array(4),vt=i.createTexture();i.bindTexture(D,vt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<nt;Gt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(lt+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return vt}let Mt={};Mt[i.TEXTURE_2D]=ft(i.TEXTURE_2D,i.TEXTURE_2D,1),Mt[i.TEXTURE_CUBE_MAP]=ft(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[i.TEXTURE_2D_ARRAY]=ft(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Mt[i.TEXTURE_3D]=ft(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(i.DEPTH_TEST),a.setFunc(Zi),Ht(!1),Zt(fl),at(i.CULL_FACE),dt(Ei);function at(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function pt(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Dt(D,lt){return d[D]!==lt?(i.bindFramebuffer(D,lt),d[D]=lt,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=lt),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function xt(D,lt){let nt=m,Et=!1;if(D){nt=f.get(lt),nt===void 0&&(nt=[],f.set(lt,nt));let yt=D.textures;if(nt.length!==yt.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,Gt=yt.length;vt<Gt;vt++)nt[vt]=i.COLOR_ATTACHMENT0+vt;nt.length=yt.length,Et=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,Et=!0);Et&&i.drawBuffers(nt)}function H(D){return M!==D?(i.useProgram(D),M=D,!0):!1}let ut={[wi]:i.FUNC_ADD,[oh]:i.FUNC_SUBTRACT,[lh]:i.FUNC_REVERSE_SUBTRACT};ut[ch]=i.MIN,ut[hh]=i.MAX;let j={[uh]:i.ZERO,[dh]:i.ONE,[fh]:i.SRC_COLOR,[xl]:i.SRC_ALPHA,[yh]:i.SRC_ALPHA_SATURATE,[xh]:i.DST_COLOR,[mh]:i.DST_ALPHA,[ph]:i.ONE_MINUS_SRC_COLOR,[_l]:i.ONE_MINUS_SRC_ALPHA,[_h]:i.ONE_MINUS_DST_COLOR,[gh]:i.ONE_MINUS_DST_ALPHA,[Mh]:i.CONSTANT_COLOR,[Sh]:i.ONE_MINUS_CONSTANT_COLOR,[vh]:i.CONSTANT_ALPHA,[bh]:i.ONE_MINUS_CONSTANT_ALPHA};function dt(D,lt,nt,Et,yt,vt,Gt,ee,gt,Wt){if(D===Ei){x===!0&&(pt(i.BLEND),x=!1);return}if(x===!1&&(at(i.BLEND),x=!0),D!==ah){if(D!==p||Wt!==T){if((_!==wi||v!==wi)&&(i.blendEquation(i.FUNC_ADD),_=wi,v=wi),Wt)switch(D){case ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pl:i.blendFunc(i.ONE,i.ONE);break;case ml:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qt("WebGLState: Invalid blending: ",D);break}else switch(D){case ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ml:qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gl:qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qt("WebGLState: Invalid blending: ",D);break}E=null,y=null,b=null,g=null,S.set(0,0,0),R=0,p=D,T=Wt}return}yt=yt||lt,vt=vt||nt,Gt=Gt||Et,(lt!==_||yt!==v)&&(i.blendEquationSeparate(ut[lt],ut[yt]),_=lt,v=yt),(nt!==E||Et!==y||vt!==b||Gt!==g)&&(i.blendFuncSeparate(j[nt],j[Et],j[vt],j[Gt]),E=nt,y=Et,b=vt,g=Gt),(ee.equals(S)===!1||gt!==R)&&(i.blendColor(ee.r,ee.g,ee.b,gt),S.copy(ee),R=gt),p=D,T=!1}function Lt(D,lt){D.side===we?pt(i.CULL_FACE):at(i.CULL_FACE);let nt=D.side===Qe;lt&&(nt=!nt),Ht(nt),D.blending===ts&&D.transparent===!1?dt(Ei):dt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let Et=D.stencilWrite;o.setTest(Et),Et&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ft(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(D){U!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),U=D)}function Zt(D){D!==ih?(at(i.CULL_FACE),D!==P&&(D===fl?i.cullFace(i.BACK):D===sh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),P=D}function Tt(D){D!==O&&(Z&&i.lineWidth(D),O=D)}function Ft(D,lt,nt){D?(at(i.POLYGON_OFFSET_FILL),(I!==lt||G!==nt)&&(I=lt,G=nt,a.getReversed()&&(lt=-lt,nt=-nt),i.polygonOffset(lt,nt))):pt(i.POLYGON_OFFSET_FILL)}function oe(D){D?at(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function pe(D){D===void 0&&(D=i.TEXTURE0+W-1),J!==D&&(i.activeTexture(D),J=D)}function ce(D,lt,nt){nt===void 0&&(J===null?nt=i.TEXTURE0+W-1:nt=J);let Et=L[nt];Et===void 0&&(Et={type:void 0,texture:void 0},L[nt]=Et),(Et.type!==D||Et.texture!==lt)&&(J!==nt&&(i.activeTexture(nt),J=nt),i.bindTexture(D,lt||Mt[D]),Et.type=D,Et.texture=lt)}function k(){let D=L[J];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function it(){try{i.compressedTexImage2D(...arguments)}catch(D){qt("WebGLState:",D)}}function Ut(){try{i.compressedTexImage3D(...arguments)}catch(D){qt("WebGLState:",D)}}function Xt(){try{i.texSubImage2D(...arguments)}catch(D){qt("WebGLState:",D)}}function ht(){try{i.texSubImage3D(...arguments)}catch(D){qt("WebGLState:",D)}}function te(){try{i.compressedTexSubImage2D(...arguments)}catch(D){qt("WebGLState:",D)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(D){qt("WebGLState:",D)}}function St(){try{i.texStorage2D(...arguments)}catch(D){qt("WebGLState:",D)}}function C(){try{i.texStorage3D(...arguments)}catch(D){qt("WebGLState:",D)}}function w(){try{i.texImage2D(...arguments)}catch(D){qt("WebGLState:",D)}}function V(){try{i.texImage3D(...arguments)}catch(D){qt("WebGLState:",D)}}function ct(D){return u[D]!==void 0?u[D]:i.getParameter(D)}function et(D,lt){u[D]!==lt&&(i.pixelStorei(D,lt),u[D]=lt)}function mt(D){N.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),N.copy(D))}function _t(D){X.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),X.copy(D))}function st(D,lt){let nt=c.get(lt);nt===void 0&&(nt=new WeakMap,c.set(lt,nt));let Et=nt.get(D);Et===void 0&&(Et=i.getUniformBlockIndex(lt,D.name),i.uniformBlockBinding(lt,Et,Et),nt.set(D,Et))}function rt(D,lt,nt){let yt=c.get(lt).get(D);l[yt]!==nt&&(i.bindBufferBase(i.UNIFORM_BUFFER,yt,nt),l[yt]=nt)}function bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},J=null,L={},d={},l={},f=new WeakMap,m=[],M=null,x=!1,p=null,_=null,E=null,y=null,v=null,b=null,g=null,S=new Pt(0,0,0),R=0,T=!1,U=null,P=null,O=null,I=null,G=null,N.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:at,disable:pt,bindFramebuffer:Dt,drawBuffers:xt,useProgram:H,setBlending:dt,setMaterial:Lt,setFlipSided:Ht,setCullFace:Zt,setLineWidth:Tt,setPolygonOffset:Ft,setScissorTest:oe,activeTexture:pe,bindTexture:ce,unbindTexture:k,compressedTexImage2D:it,compressedTexImage3D:Ut,texImage2D:w,texImage3D:V,pixelStorei:et,getParameter:ct,updateUBOMapping:st,uniformBlockBinding:rt,texStorage2D:St,texStorage3D:C,texSubImage2D:Xt,texSubImage3D:ht,compressedTexSubImage2D:te,compressedTexSubImage3D:K,scissor:mt,viewport:_t,reset:bt}}function q0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new zt,h=new WeakMap,u=new Set,d,f=new WeakMap,m=new Set,M=new FinalizationRegistry(C=>m.delete(C)),x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,w){return x?new OffscreenCanvas(C,w):Es("canvas")}function _(C,w,V){let ct=1,et=St(C);if((et.width>V||et.height>V)&&(ct=V/Math.max(et.width,et.height)),ct<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let mt=Math.floor(ct*et.width),_t=Math.floor(ct*et.height);d===void 0&&(d=p(mt,_t));let st=w?p(mt,_t):d;return st.width=mt,st.height=_t,st.getContext("2d").drawImage(C,0,0,mt,_t),Yt("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+mt+"x"+_t+")."),st}else return"data"in C&&Yt("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),C;return C}function E(C){return C.generateMipmaps}function y(C){i.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(C,w,V,ct,et,mt=!1){if(C!==null){if(i[C]!==void 0)return i[C];Yt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let _t;ct&&(_t=t.get("EXT_texture_norm16"),_t||Yt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let st=w;if(w===i.RED&&(V===i.FLOAT&&(st=i.R32F),V===i.HALF_FLOAT&&(st=i.R16F),V===i.UNSIGNED_BYTE&&(st=i.R8),V===i.UNSIGNED_SHORT&&_t&&(st=_t.R16_EXT),V===i.SHORT&&_t&&(st=_t.R16_SNORM_EXT)),w===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(st=i.R8UI),V===i.UNSIGNED_SHORT&&(st=i.R16UI),V===i.UNSIGNED_INT&&(st=i.R32UI),V===i.BYTE&&(st=i.R8I),V===i.SHORT&&(st=i.R16I),V===i.INT&&(st=i.R32I)),w===i.RG&&(V===i.FLOAT&&(st=i.RG32F),V===i.HALF_FLOAT&&(st=i.RG16F),V===i.UNSIGNED_BYTE&&(st=i.RG8),V===i.UNSIGNED_SHORT&&_t&&(st=_t.RG16_EXT),V===i.SHORT&&_t&&(st=_t.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(st=i.RG8UI),V===i.UNSIGNED_SHORT&&(st=i.RG16UI),V===i.UNSIGNED_INT&&(st=i.RG32UI),V===i.BYTE&&(st=i.RG8I),V===i.SHORT&&(st=i.RG16I),V===i.INT&&(st=i.RG32I)),w===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(st=i.RGB8UI),V===i.UNSIGNED_SHORT&&(st=i.RGB16UI),V===i.UNSIGNED_INT&&(st=i.RGB32UI),V===i.BYTE&&(st=i.RGB8I),V===i.SHORT&&(st=i.RGB16I),V===i.INT&&(st=i.RGB32I)),w===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(st=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(st=i.RGBA16UI),V===i.UNSIGNED_INT&&(st=i.RGBA32UI),V===i.BYTE&&(st=i.RGBA8I),V===i.SHORT&&(st=i.RGBA16I),V===i.INT&&(st=i.RGBA32I)),w===i.RGB&&(V===i.UNSIGNED_SHORT&&_t&&(st=_t.RGB16_EXT),V===i.SHORT&&_t&&(st=_t.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(st=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(st=i.R11F_G11F_B10F)),w===i.RGBA){let rt=mt?bs:ae.getTransfer(et);V===i.FLOAT&&(st=i.RGBA32F),V===i.HALF_FLOAT&&(st=i.RGBA16F),V===i.UNSIGNED_BYTE&&(st=rt===ue?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&_t&&(st=_t.RGBA16_EXT),V===i.SHORT&&_t&&(st=_t.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function g(C,w){let V;return C?w===null||w===Mn||w===Ai?V=i.DEPTH24_STENCIL8:w===dn?V=i.DEPTH32F_STENCIL8:w===ns&&(V=i.DEPTH24_STENCIL8,Yt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Mn||w===Ai?V=i.DEPTH_COMPONENT24:w===dn?V=i.DEPTH_COMPONENT32F:w===ns&&(V=i.DEPTH_COMPONENT16),V}function S(C,w){return E(C)===!0||C.isFramebufferTexture&&C.minFilter!==Re&&C.minFilter!==Je?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function R(C){let w=new WeakRef(C);n.get(C).__ref=w,m.add(w),M.register(C,w,w)}function T(C){let w=n.get(C).__ref;w!==void 0&&(m.delete(w),M.unregister(w))}function U(C){O(C.target)}function P(C){I(C.target)}function O(C){C.removeEventListener("dispose",U),T(C),W(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&u.delete(C)}function I(C){C.removeEventListener("dispose",P),T(C),ot(C)}function G(){for(let C of m){let w=C.deref();w!==void 0&&(w.isRenderTarget===!0?I(w):O(w))}m.clear(),u.clear()}function W(C){let w=n.get(C);if(w.__webglInit===void 0)return;let V=C.source,ct=f.get(V);if(ct){let et=ct[w.__cacheKey];et.usedTimes--,et.usedTimes===0&&Z(C),Object.keys(ct).length===0&&f.delete(V)}n.remove(C)}function Z(C){let w=n.get(C);i.deleteTexture(w.__webglTexture);let V=C.source,ct=f.get(V);delete ct[w.__cacheKey],a.memory.textures--}function ot(C){let w=n.get(C);w.__depthDisposeCallback&&w.__depthDisposeCallback();let V=C.depthTexture;if(V&&V.renderTarget===C&&O(V),C.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(w.__webglFramebuffer[et]))for(let mt=0;mt<w.__webglFramebuffer[et].length;mt++)i.deleteFramebuffer(w.__webglFramebuffer[et][mt]);else i.deleteFramebuffer(w.__webglFramebuffer[et]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[et])}else{if(Array.isArray(w.__webglFramebuffer))for(let et=0;et<w.__webglFramebuffer.length;et++)i.deleteFramebuffer(w.__webglFramebuffer[et]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let et=0;et<w.__webglColorRenderbuffer.length;et++)w.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[et]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let ct=C.textures;for(let et=0,mt=ct.length;et<mt;et++){let _t=n.get(ct[et]);_t.__webglTexture&&(i.deleteTexture(_t.__webglTexture),a.memory.textures--),n.remove(ct[et])}n.remove(C)}let F=0;function J(){F=0}function L(){return F}function Y(C){F=C}function tt(){let C=F;return C>=s.maxTextures&&Yt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,C}function N(C){let w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.mipmapsAutoUpdate),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function X(C,w){let V=n.get(C);if(C.isVideoTexture&&te(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){let ct=C.image;if(ct===null)Yt("WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)Yt("WebGLRenderer: Texture marked for update but image is incomplete");else{Lt(V,C,w);return}}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+w)}function ft(C,w){let V=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){Lt(V,C,w);return}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+w)}function Mt(C,w){let V=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){Lt(V,C,w);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+w)}function at(C,w){let V=n.get(C);if(C.version>0&&V.__version!==C.version){Ht(V,C,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+w)}let pt={[Yi]:i.REPEAT,[wn]:i.CLAMP_TO_EDGE,[Yr]:i.MIRRORED_REPEAT},Dt={[Re]:i.NEAREST,[Th]:i.NEAREST_MIPMAP_NEAREST,[Xs]:i.NEAREST_MIPMAP_LINEAR,[Je]:i.LINEAR,[Ca]:i.LINEAR_MIPMAP_NEAREST,[Zn]:i.LINEAR_MIPMAP_LINEAR},xt={[Ih]:i.NEVER,[Dl]:i.ALWAYS,[Uh]:i.LESS,[Pl]:i.LEQUAL,[Nh]:i.EQUAL,[Fl]:i.GEQUAL,[Ph]:i.GREATER,[Fh]:i.NOTEQUAL};function H(C,w){if(w.type===dn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Je||w.magFilter===Ca||w.magFilter===Xs||w.magFilter===Zn||w.minFilter===Je||w.minFilter===Ca||w.minFilter===Xs||w.minFilter===Zn)&&Yt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,pt[w.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,pt[w.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,pt[w.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Dt[w.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Dt[w.minFilter]),w.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,xt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Re||w.minFilter!==Xs&&w.minFilter!==Zn||w.type===dn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ut(C,w){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",U),R(w));let ct=w.source,et=f.get(ct);et===void 0&&(et={},f.set(ct,et));let mt=N(w);if(mt!==C.__cacheKey){et[mt]===void 0&&(et[mt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),et[mt].usedTimes++;let _t=et[C.__cacheKey];_t!==void 0&&(et[C.__cacheKey].usedTimes--,_t.usedTimes===0&&Z(w)),C.__cacheKey=mt,C.__webglTexture=et[mt].texture}return V}function j(C,w,V){return Math.floor(Math.floor(C/V)/w)}function dt(C,w,V,ct){let mt=C.updateRanges;if(mt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,V,ct,w.data);else{mt.sort((D,lt)=>D.start-lt.start);let _t=0;for(let D=1;D<mt.length;D++){let lt=mt[_t],nt=mt[D],Et=lt.start+lt.count,yt=j(nt.start,w.width,4),vt=j(lt.start,w.width,4);nt.start<=Et+1&&yt===vt&&j(nt.start+nt.count-1,w.width,4)===yt?lt.count=Math.max(lt.count,nt.start+nt.count-lt.start):(++_t,mt[_t]=nt)}mt.length=_t+1;let st=e.getParameter(i.UNPACK_ROW_LENGTH),rt=e.getParameter(i.UNPACK_SKIP_PIXELS),bt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let D=0,lt=mt.length;D<lt;D++){let nt=mt[D],Et=Math.floor(nt.start/4),yt=Math.ceil(nt.count/4),vt=Et%w.width,Gt=Math.floor(Et/w.width),ee=yt,gt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,vt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Gt),e.texSubImage2D(i.TEXTURE_2D,0,vt,Gt,ee,gt,V,ct,w.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,st),e.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(i.UNPACK_SKIP_ROWS,bt)}}function Lt(C,w,V){let ct=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ct=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ct=i.TEXTURE_3D);let et=ut(C,w),mt=w.source;e.bindTexture(ct,C.__webglTexture,i.TEXTURE0+V);let _t=n.get(mt);if(mt.version!==_t.__version||et===!0){if(e.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let gt=ae.getPrimaries(ae.workingColorSpace),Wt=w.colorSpace===Xn?null:ae.getPrimaries(w.colorSpace),$t=w.colorSpace===Xn||gt===Wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t)}e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let rt=_(w.image,!1,s.maxTextureSize);rt=K(w,rt);let bt=r.convert(w.format,w.colorSpace),D=r.convert(w.type),lt=b(w.internalFormat,bt,D,w.normalized,w.colorSpace,w.isVideoTexture);H(ct,w);let nt,Et=w.mipmaps,yt=w.isVideoTexture!==!0,vt=_t.__version===void 0||et===!0,Gt=mt.dataReady,ee=S(w,rt);if(w.isDepthTexture)lt=g(w.format===Yn,w.type),vt&&(yt?e.texStorage2D(i.TEXTURE_2D,1,lt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,lt,rt.width,rt.height,0,bt,D,null));else if(w.isDataTexture)if(Et.length>0){yt&&vt&&e.texStorage2D(i.TEXTURE_2D,ee,lt,Et[0].width,Et[0].height);for(let gt=0,Wt=Et.length;gt<Wt;gt++)nt=Et[gt],yt?Gt&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,nt.width,nt.height,bt,D,nt.data):e.texImage2D(i.TEXTURE_2D,gt,lt,nt.width,nt.height,0,bt,D,nt.data);w.generateMipmaps=!1}else yt?(vt&&e.texStorage2D(i.TEXTURE_2D,ee,lt,rt.width,rt.height),Gt&&dt(w,rt,bt,D)):e.texImage2D(i.TEXTURE_2D,0,lt,rt.width,rt.height,0,bt,D,rt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){yt&&vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ee,lt,Et[0].width,Et[0].height,rt.depth);for(let gt=0,Wt=Et.length;gt<Wt;gt++)if(nt=Et[gt],w.format!==vn)if(bt!==null)if(yt){if(Gt)if(w.layerUpdates.size>0){let $t=Hl(nt.width,nt.height,w.format,w.type);for(let Rt of w.layerUpdates){let me=nt.data.subarray(Rt*$t/nt.data.BYTES_PER_ELEMENT,(Rt+1)*$t/nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,Rt,nt.width,nt.height,1,bt,me)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,nt.width,nt.height,rt.depth,bt,nt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,gt,lt,nt.width,nt.height,rt.depth,0,nt.data,0,0);else Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else yt?Gt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,nt.width,nt.height,rt.depth,bt,D,nt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,gt,lt,nt.width,nt.height,rt.depth,0,bt,D,nt.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{yt&&vt&&e.texStorage2D(i.TEXTURE_2D,ee,lt,Et[0].width,Et[0].height);for(let gt=0,Wt=Et.length;gt<Wt;gt++)nt=Et[gt],w.format!==vn?bt!==null?yt?Gt&&e.compressedTexSubImage2D(i.TEXTURE_2D,gt,0,0,nt.width,nt.height,bt,nt.data):e.compressedTexImage2D(i.TEXTURE_2D,gt,lt,nt.width,nt.height,0,nt.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?Gt&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,nt.width,nt.height,bt,D,nt.data):e.texImage2D(i.TEXTURE_2D,gt,lt,nt.width,nt.height,0,bt,D,nt.data)}else if(w.isDataArrayTexture)if(yt){if(vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ee,lt,rt.width,rt.height,rt.depth),Gt)if(w.layerUpdates.size>0){let gt=Hl(rt.width,rt.height,w.format,w.type);for(let Wt of w.layerUpdates){let $t=rt.data.subarray(Wt*gt/rt.data.BYTES_PER_ELEMENT,(Wt+1)*gt/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Wt,rt.width,rt.height,1,bt,D,$t)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,bt,D,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,lt,rt.width,rt.height,rt.depth,0,bt,D,rt.data);else if(w.isData3DTexture)yt?(vt&&e.texStorage3D(i.TEXTURE_3D,ee,lt,rt.width,rt.height,rt.depth),Gt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,bt,D,rt.data)):e.texImage3D(i.TEXTURE_3D,0,lt,rt.width,rt.height,rt.depth,0,bt,D,rt.data);else if(w.isFramebufferTexture){if(vt)if(yt)e.texStorage2D(i.TEXTURE_2D,ee,lt,rt.width,rt.height);else{let gt=rt.width,Wt=rt.height;for(let $t=0;$t<ee;$t++)e.texImage2D(i.TEXTURE_2D,$t,lt,gt,Wt,0,bt,D,null),gt>>=1,Wt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let gt=i.canvas;if(gt.hasAttribute("layoutsubtree")||gt.setAttribute("layoutsubtree","true"),rt.parentNode!==gt){gt.appendChild(rt),u.add(w),gt.onpaint=Wt=>{let $t=Wt.changedElements;for(let Rt of u)$t.includes(Rt.image)&&(Rt.needsUpdate=!0)},gt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,rt);else{let $t=i.RGBA,Rt=i.RGBA,me=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,$t,Rt,me,rt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Et.length>0){if(yt&&vt){let gt=St(Et[0]);e.texStorage2D(i.TEXTURE_2D,ee,lt,gt.width,gt.height)}for(let gt=0,Wt=Et.length;gt<Wt;gt++)nt=Et[gt],yt?Gt&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,bt,D,nt):e.texImage2D(i.TEXTURE_2D,gt,lt,bt,D,nt);w.generateMipmaps=!1}else if(yt){if(vt){let gt=St(rt);e.texStorage2D(i.TEXTURE_2D,ee,lt,gt.width,gt.height)}Gt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,D,rt)}else e.texImage2D(i.TEXTURE_2D,0,lt,bt,D,rt);E(w)&&w.mipmapsAutoUpdate===!0&&y(ct),_t.__version=mt.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Ht(C,w,V){if(w.image.length!==6)return;let ct=ut(C,w),et=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+V);let mt=n.get(et);if(et.version!==mt.__version||ct===!0){e.activeTexture(i.TEXTURE0+V);let _t=ae.getPrimaries(ae.workingColorSpace),st=w.colorSpace===Xn?null:ae.getPrimaries(w.colorSpace),rt=w.colorSpace===Xn||_t===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let bt=w.isCompressedTexture||w.image[0].isCompressedTexture,D=w.image[0]&&w.image[0].isDataTexture,lt=[];for(let Rt=0;Rt<6;Rt++)!bt&&!D?lt[Rt]=_(w.image[Rt],!0,s.maxCubemapSize):lt[Rt]=D?w.image[Rt].image:w.image[Rt],lt[Rt]=K(w,lt[Rt]);let nt=lt[0],Et=r.convert(w.format,w.colorSpace),yt=r.convert(w.type),vt=b(w.internalFormat,Et,yt,w.normalized,w.colorSpace),Gt=w.isVideoTexture!==!0,ee=mt.__version===void 0||ct===!0,gt=et.dataReady,Wt=S(w,nt);H(i.TEXTURE_CUBE_MAP,w);let $t;if(w.isDepthTexture){if(vt=g(w.format===Yn,w.type),ee)if(Gt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,vt,nt.width,nt.height);else for(let Rt=0;Rt<6;Rt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,vt,nt.width,nt.height,0,Et,yt,null)}else if(bt){Gt&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Wt,vt,nt.width,nt.height);for(let Rt=0;Rt<6;Rt++){$t=lt[Rt].mipmaps;for(let me=0;me<$t.length;me++){let Ne=$t[me];w.format!==vn?Et!==null?Gt?gt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,me,0,0,Ne.width,Ne.height,Et,Ne.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,me,vt,Ne.width,Ne.height,0,Ne.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,me,0,0,Ne.width,Ne.height,Et,yt,Ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,me,vt,Ne.width,Ne.height,0,Et,yt,Ne.data)}}}else{if($t=w.mipmaps,Gt&&ee){$t.length>0&&Wt++;let Rt=St(lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Wt,vt,Rt.width,Rt.height)}for(let Rt=0;Rt<6;Rt++)if(D){Gt?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,lt[Rt].width,lt[Rt].height,Et,yt,lt[Rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,vt,lt[Rt].width,lt[Rt].height,0,Et,yt,lt[Rt].data);for(let me=0;me<$t.length;me++){let qn=$t[me].image[Rt].image;Gt?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,me+1,0,0,qn.width,qn.height,Et,yt,qn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,me+1,vt,qn.width,qn.height,0,Et,yt,qn.data)}}else{Gt?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,Et,yt,lt[Rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,vt,Et,yt,lt[Rt]);for(let me=0;me<$t.length;me++){let Ne=$t[me];Gt?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,me+1,0,0,Et,yt,Ne.image[Rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,me+1,vt,Et,yt,Ne.image[Rt])}}}E(w)&&w.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),mt.__version=et.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Zt(C,w,V,ct,et,mt){let _t=r.convert(V.format,V.colorSpace),st=r.convert(V.type),rt=b(V.internalFormat,_t,st,V.normalized,V.colorSpace),bt=n.get(w),D=n.get(V);if(D.__renderTarget=w,!bt.__hasExternalTextures){let lt=Math.max(1,w.width>>mt),nt=Math.max(1,w.height>>mt);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,mt,rt,lt,nt,w.depth,0,_t,st,null):e.texImage2D(et,mt,rt,lt,nt,0,_t,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),ht(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,et,D.__webglTexture,0,Xt(w)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ct,et,D.__webglTexture,mt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(C,w,V){if(i.bindRenderbuffer(i.RENDERBUFFER,C),w.depthBuffer){let ct=w.depthTexture,et=ct&&ct.isDepthTexture?ct.type:null,mt=g(w.stencilBuffer,et),_t=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ht(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt(w),mt,w.width,w.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt(w),mt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,mt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,C)}else{let ct=w.textures;for(let et=0;et<ct.length;et++){let mt=ct[et],_t=r.convert(mt.format,mt.colorSpace),st=r.convert(mt.type),rt=b(mt.internalFormat,_t,st,mt.normalized,mt.colorSpace);ht(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt(w),rt,w.width,w.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt(w),rt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,rt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ft(C,w,V){let ct=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let et=n.get(w.depthTexture);et.__renderTarget=w;let mt=ct?w.depthTexture.image[0]:w.depthTexture.image;(!et.__webglTexture||mt.width!==w.width||mt.height!==w.height)&&(mt.width=w.width,mt.height=w.height,w.depthTexture.needsUpdate=!0),ct?at(w.depthTexture,0):X(w.depthTexture,0);let _t=et.__webglTexture,st=Xt(w),rt=ct?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,bt=w.depthTexture.format===Yn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===Gn)ht(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,bt,rt,_t,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,bt,rt,_t,0);else if(w.depthTexture.format===Yn)ht(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,bt,rt,_t,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,bt,rt,_t,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function oe(C){let w=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){let ct=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ct){let et=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ct.removeEventListener("dispose",et)};ct.addEventListener("dispose",et),w.__depthDisposeCallback=et}w.__boundDepthTexture=ct}if(C.depthTexture&&!w.__autoAllocateDepthBuffer)if(V)for(let ct=0;ct<6;ct++)Ft(w.__webglFramebuffer[ct],C,ct);else C.texture.mipmaps.length>0?Ft(w.__webglFramebuffer[0],C,0):Ft(w.__webglFramebuffer,C,0);else if(V){w.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ct]),w.__webglDepthbuffer[ct]===void 0)w.__webglDepthbuffer[ct]=i.createRenderbuffer(),Tt(w.__webglDepthbuffer[ct],C,!1);else{let et=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=w.__webglDepthbuffer[ct];i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,mt)}}else if(C.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Tt(w.__webglDepthbuffer,C,!1);else{let et=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,mt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(C,w,V){let ct=n.get(C);w!==void 0&&Zt(ct.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&oe(C)}function ce(C){let w=C.texture,V=n.get(C),ct=n.get(w);C.addEventListener("dispose",P),R(C);let et=C.textures,mt=C.isWebGLCubeRenderTarget===!0,_t=et.length>1;if(_t||(ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture()),ct.__version=w.version,a.memory.textures++),mt){V.__webglFramebuffer=[];for(let st=0;st<6;st++)if(w.mipmaps.length>0){V.__webglFramebuffer[st]=[];for(let rt=0;rt<w.mipmaps.length;rt++)V.__webglFramebuffer[st][rt]=i.createFramebuffer()}else V.__webglFramebuffer[st]=i.createFramebuffer()}else{if(w.mipmaps.length>0){V.__webglFramebuffer=[];for(let st=0;st<w.mipmaps.length;st++)V.__webglFramebuffer[st]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(_t)for(let st=0,rt=et.length;st<rt;st++){let bt=n.get(et[st]);bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&ht(C)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let st=0;st<et.length;st++){let rt=et[st];V.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[st]);let bt=r.convert(rt.format,rt.colorSpace),D=r.convert(rt.type),lt=b(rt.internalFormat,bt,D,rt.normalized,rt.colorSpace,C.isXRRenderTarget===!0),nt=Xt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,lt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,V.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Tt(V.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(mt){e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),H(i.TEXTURE_CUBE_MAP,w);for(let st=0;st<6;st++)if(w.mipmaps.length>0)for(let rt=0;rt<w.mipmaps.length;rt++)Zt(V.__webglFramebuffer[st][rt],C,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,rt);else Zt(V.__webglFramebuffer[st],C,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);E(w)?y(i.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}else if(_t){for(let st=0,rt=et.length;st<rt;st++){let bt=et[st],D=n.get(bt),lt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(lt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,D.__webglTexture),H(lt,bt),Zt(V.__webglFramebuffer,C,bt,i.COLOR_ATTACHMENT0+st,lt,0),E(bt)&&y(lt)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(st=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,ct.__webglTexture),H(st,w),w.mipmaps.length>0)for(let rt=0;rt<w.mipmaps.length;rt++)Zt(V.__webglFramebuffer[rt],C,w,i.COLOR_ATTACHMENT0,st,rt);else Zt(V.__webglFramebuffer,C,w,i.COLOR_ATTACHMENT0,st,0);E(w)?y(st):w.mipmaps.length>0&&i.texParameteri(st,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),e.unbindTexture()}C.depthBuffer&&oe(C)}function k(C){let w=C.textures;for(let V=0,ct=w.length;V<ct;V++){let et=w[V];if(E(et)&&et.mipmapsAutoUpdate===!0){let mt=v(C),_t=n.get(et).__webglTexture;e.bindTexture(mt,_t),y(mt),e.unbindTexture()}}}let it=[];function Ut(C){if(C.samples>0){if(ht(C)===!1){let w=C.textures,V=C.width,ct=C.height,et=i.COLOR_BUFFER_BIT,mt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(C),st=w.length>1;if(st)for(let bt=0;bt<w.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let bt=0;bt<w.length;bt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[bt]);let D=n.get(w[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,V,ct,0,0,V,ct,et,i.NEAREST),l===!0&&(it.length=0,it.push(i.COLOR_ATTACHMENT0+bt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&it.push(mt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let bt=0;bt<w.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,_t.__webglColorRenderbuffer[bt]);let D=n.get(w[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,D,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let w=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Xt(C){return Math.min(s.maxSamples,C.samples)}function ht(C){let w=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function te(C){let w=a.render.frame;h.get(C)!==w&&(h.set(C,w),C.update())}function K(C,w){let V=C.colorSpace,ct=C.format,et=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==vs&&V!==Xn&&(ae.getTransfer(V)===ue?(ct!==vn||et!==$e)&&Yt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qt("WebGLTextures: Unsupported texture color space:",V)),w}function St(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=tt,this.resetTextureUnits=J,this.getTextureUnits=L,this.setTextureUnits=Y,this.setTexture2D=X,this.setTexture2DArray=ft,this.setTexture3D=Mt,this.setTextureCube=at,this.rebindTextures=pe,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=Zt,this.useMultisampledRTT=ht,this.dispose=G}function j0(i,t){function e(n,s=Xn){let r,a=ae.getTransfer(s);if(n===$e)return i.UNSIGNED_BYTE;if(n===Ua)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Na)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Il)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Al)return i.BYTE;if(n===Rl)return i.SHORT;if(n===ns)return i.UNSIGNED_SHORT;if(n===Ia)return i.INT;if(n===Mn)return i.UNSIGNED_INT;if(n===dn)return i.FLOAT;if(n===Sn)return i.HALF_FLOAT;if(n===Ul)return i.ALPHA;if(n===Nl)return i.RGB;if(n===vn)return i.RGBA;if(n===Gn)return i.DEPTH_COMPONENT;if(n===Yn)return i.DEPTH_STENCIL;if(n===Pa)return i.RED;if(n===Fa)return i.RED_INTEGER;if(n===li)return i.RG;if(n===Da)return i.RG_INTEGER;if(n===La)return i.RGBA_INTEGER;if(n===Js||n===qs||n===js||n===Qs)if(a===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Js)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Js)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ba||n===Oa||n===ka||n===Va)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ba)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Va)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===za||n===Ga||n===Ha||n===Wa||n===Za||n===Ks||n===Ya)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===za||n===Ga)return a===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ha)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wa)return r.COMPRESSED_R11_EAC;if(n===Za)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ks)return r.COMPRESSED_RG11_EAC;if(n===Ya)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xa||n===Ja||n===qa||n===ja||n===Qa||n===Ka||n===$a||n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xa)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ja)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qa)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ja)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qa)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ka)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$a)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===to)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===eo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===no)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===io)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===so)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ro)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ao)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oo||n===lo||n===co)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===oo)return a===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===co)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ho||n===uo||n===$s||n===fo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ho)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$s)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ai?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Q0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K0=`
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

}`,Kl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Bs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Cn({vertexShader:Q0,fragmentShader:K0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new de(new Si(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$l=class extends Tn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,M=typeof XRWebGLBinding<"u",x=new Kl,p={},_=e.getContextAttributes(),E=null,y=null,v=[],b=[],g=new zt,S=null,R=null,T=new Xe;T.viewport=new Se;let U=new Xe;U.viewport=new Se;let P=[T,U],O=new wa,I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let X=v[N];return X===void 0&&(X=new ji,v[N]=X),X.getTargetRaySpace()},this.getControllerGrip=function(N){let X=v[N];return X===void 0&&(X=new ji,v[N]=X),X.getGripSpace()},this.getHand=function(N){let X=v[N];return X===void 0&&(X=new ji,v[N]=X),X.getHandSpace()};function W(N){let X=b.indexOf(N.inputSource);if(X===-1)return;let ft=v[X];ft!==void 0&&(ft.update(N.inputSource,N.frame,c||a),ft.dispatchEvent({type:N.type,data:N.inputSource}))}function Z(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",ot);for(let N=0;N<v.length;N++){let X=b[N];X!==null&&(b[N]=null,v[N].disconnect(X))}I=null,G=null,x.reset();for(let N in p)delete p[N];if(t.setRenderTarget(E),f=null,d=null,u=null,s=null,y=null,tt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(g.width,g.height,!1),R!==null){let N=R.camera;N.fov=R.fov,N.zoom=R.zoom,N.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&Yt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,n.isPresenting===!0&&Yt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(N){if(s=N,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",ot),_.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(g),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ft=null,Mt=null,at=null;_.depth&&(at=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=_.stencil?Yn:Gn,Mt=_.stencil?Ai:Mn);let pt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(pt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new rn(d.textureWidth,d.textureHeight,{format:vn,type:$e,depthTexture:new Wn(d.textureWidth,d.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ft={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ft),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new rn(f.framebufferWidth,f.framebufferHeight,{format:vn,type:$e,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),tt.setContext(s),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ot(N){for(let X=0;X<N.removed.length;X++){let ft=N.removed[X],Mt=b.indexOf(ft);Mt>=0&&(b[Mt]=null,v[Mt].disconnect(ft))}for(let X=0;X<N.added.length;X++){let ft=N.added[X],Mt=b.indexOf(ft);if(Mt===-1){for(let pt=0;pt<v.length;pt++)if(pt>=b.length){b.push(ft),Mt=pt;break}else if(b[pt]===null){b[pt]=ft,Mt=pt;break}if(Mt===-1)break}let at=v[Mt];at&&at.connect(ft)}}function F(N,X){X===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(X.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(s===null)return;let X=N.near,ft=N.far;x.texture!==null&&(x.depthNear>0&&(X=x.depthNear),x.depthFar>0&&(ft=x.depthFar)),O.near=U.near=T.near=X,O.far=U.far=T.far=ft,(I!==O.near||G!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),I=O.near,G=O.far),O.layers.mask=N.layers.mask|6,T.layers.mask=O.layers.mask&-5,U.layers.mask=O.layers.mask&-3;let Mt=N.parent,at=O.cameras;F(O,Mt);for(let pt=0;pt<at.length;pt++)F(at[pt],Mt);O.projectionMatrix.copy(T.projectionMatrix),O.projectionMatrixInverse.copy(T.projectionMatrixInverse),R===null&&N.isPerspectiveCamera&&(R={camera:N,fov:N.fov,zoom:N.zoom}),J(N,O,Mt)};function J(N,X,ft){ft===null?N.matrix.copy(X.matrixWorld):(N.matrix.copy(ft.matrixWorld),N.matrix.invert(),N.matrix.multiply(X.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(X.projectionMatrix),N.projectionMatrixInverse.copy(X.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=Jr*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(N){l=N,d!==null&&(d.fixedFoveation=N),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=N)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(O)},this.getCameraTexture=function(N){return p[N]};let L=null;function Y(N,X){if(h=X.getViewerPose(c||a),m=X,h!==null){let ft=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Mt=!1;ft.length!==O.cameras.length&&(O.cameras.length=0,Mt=!0);for(let xt=0;xt<ft.length;xt++){let H=ft[xt],ut=null;if(f!==null)ut=f.getViewport(H);else{let dt=u.getViewSubImage(d,H);ut=dt.viewport,xt===0&&(t.setRenderTargetTextures(y,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(y))}let j=P[xt];j===void 0&&(j=new Xe,j.layers.enable(xt),j.viewport=new Se,P[xt]=j),j.matrix.fromArray(H.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(H.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(ut.x,ut.y,ut.width,ut.height),xt===0&&(O.matrix.copy(j.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Mt===!0&&O.cameras.push(j)}let at=s.enabledFeatures;if(at&&at.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){u=n.getBinding();let xt=u.getDepthInformation(ft[0]);xt&&xt.isValid&&xt.texture&&x.init(xt,s.renderState)}if(at&&at.includes("camera-access")&&M){t.state.unbindTexture(),u=n.getBinding();for(let xt=0;xt<ft.length;xt++){let H=ft[xt].camera;if(H){let ut=p[H];ut||(ut=new Bs,p[H]=ut);let j=u.getCameraImage(H);ut.sourceTexture=j}}}}for(let ft=0;ft<v.length;ft++){let Mt=b[ft],at=v[ft];Mt!==null&&at!==void 0&&at.update(Mt,X,c||a)}L&&L(N,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),m=null}let tt=new du;tt.setAnimationLoop(Y),this.setAnimationLoop=function(N){L=N},this.dispose=function(){}}},$0=new Jt,vu=new Qt;vu.set(-1,0,0,0,1,0,0,0,1);function tx(i,t){function e(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function n(x,p){p.color.getRGB(x.fogColor.value,Vl(i)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function s(x,p,_,E,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(x,p):p.isMeshLambertMaterial?(r(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(x,p),u(x,p)):p.isMeshPhongMaterial?(r(x,p),h(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(x,p),d(x,p),p.isMeshPhysicalMaterial&&f(x,p,y)):p.isMeshMatcapMaterial?(r(x,p),m(x,p)):p.isMeshDepthMaterial?r(x,p):p.isMeshDistanceMaterial?(r(x,p),M(x,p)):p.isMeshNormalMaterial?r(x,p):p.isLineBasicMaterial?(a(x,p),p.isLineDashedMaterial&&o(x,p)):p.isPointsMaterial?l(x,p,_,E):p.isSpriteMaterial?c(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,e(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,e(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===Qe&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,e(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===Qe&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,e(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,e(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);let _=t.get(p),E=_.envMap,y=_.envMapRotation;E&&(x.envMap.value=E,x.envMapRotation.value.setFromMatrix4($0.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(vu),x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,x.aoMapTransform))}function a(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,e(p.map,x.mapTransform))}function o(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function l(x,p,_,E){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*_,x.scale.value=E*.5,p.map&&(x.map.value=p.map,e(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function c(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,e(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function h(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function u(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function d(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function f(x,p,_){x.ior.value=p.ior,p.diffuseRoughness>0&&(x.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qe&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.retroreflectivity>0&&(x.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=_.texture,x.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,x.specularIntensityMapTransform))}function m(x,p){p.matcap&&(x.matcap.value=p.matcap)}function M(x,p){let _=t.get(p).light;x.referencePosition.value.setFromMatrixPosition(_.matrixWorld),x.nearDistance.value=_.shadow.camera.near,x.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ex(i,t,e,n){let s={},r={};function a(_,E){let y=E.program;n.uniformBlockBinding(_,y,s[_.id])}function o(_,E){let y=s[_.id];y===void 0&&(m(_),y=l(_),s[_.id]=y,_.addEventListener("dispose",x));let v=E.program;n.updateUBOMapping(_,v);let b=t.render.frame;r[_.id]!==b&&(c(_),r[_.id]=b)}function l(_){let E=i.createBuffer(),y=_.__size,v=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,y,v),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function c(_){let E=s[_.id],y=_.uniforms,v=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let b=0,g=y.length;b<g;b++){let S=y[b];if(Array.isArray(S))for(let R=0,T=S.length;R<T;R++)h(S[R],b,R,v);else h(S,b,0,v)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(_,E,y,v){if(d(_,E,y,v)===!0){let b=_.__offset,g=_.value;if(Array.isArray(g)){let S=0;for(let R=0;R<g.length;R++){let T=g[R],U=M(T,!0);u(T,_.__data,S),S+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else u(g,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,_.__data)}}function u(_,E,y){typeof _=="number"||typeof _=="boolean"?E[y]=_:_.isMatrix3?(E[y]=_.elements[0],E[y+1]=_.elements[1],E[y+2]=_.elements[2],E[y+3]=0,E[y+4]=_.elements[3],E[y+5]=_.elements[4],E[y+6]=_.elements[5],E[y+7]=0,E[y+8]=_.elements[6],E[y+9]=_.elements[7],E[y+10]=_.elements[8],E[y+11]=0):ArrayBuffer.isView(_)?E.set(_.subarray(0,E.length-y),y):_.toArray(E,y)}function d(_,E,y,v){let b=_.value,g=E+"_"+y;if(Array.isArray(b)){v[g]===void 0&&(v[g]=[]);let S=v[g],R=!1;for(let T=0;T<b.length;T++)f(b[T],S,T)===!0&&(R=!0);return R}return f(b,v,g)}function f(_,E,y){if(E[y]===void 0)return typeof _=="number"||typeof _=="boolean"?E[y]=_:ArrayBuffer.isView(_)?E[y]=_.slice():E[y]=_.clone(),!0;{let v=E[y];if(typeof _=="number"||typeof _=="boolean"){if(v!==_)return E[y]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(v.equals(_)===!1)return v.copy(_),!0}}return!1}function m(_){let E=_.uniforms,y=0,v=16;for(let g=0,S=E.length;g<S;g++){let R=Array.isArray(E[g])?E[g]:[E[g]];for(let T=0,U=R.length;T<U;T++){let P=R[T],O=Array.isArray(P.value)?P.value:[P.value],I=Array.isArray(E[g])||Array.isArray(P.value),G=y;for(let Z=0,ot=O.length;Z<ot;Z++){let F=O[Z],J=M(F,I),L=y%v,Y=L%J.boundary,tt=L+Y;y+=Y,tt!==0&&v-tt<J.storage&&(y+=v-tt),Z===0&&(G=y),y+=J.storage}let W=P.type==="int"?Int32Array:P.type==="uint"?Uint32Array:Float32Array;P.__data=new W((y-G)/Float32Array.BYTES_PER_ELEMENT),P.__offset=G}}let b=y%v;return b>0&&(y+=v-b),_.__size=y,_.__cache={},this}function M(_,E){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=16,y.storage=48):_.isMatrix4?(y.boundary=16,y.storage=64):_.isTexture?Yt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(y.boundary=16,y.storage=_.byteLength):Yt("WebGLRenderer: Unsupported uniform value type.",_),E===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function x(_){let E=_.target;E.removeEventListener("dispose",x),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(let _ in s)i.deleteBuffer(s[_]);s={},r={}}return{bind:a,update:o,dispose:p}}var nx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Un=null;function ix(){return Un===null&&(Un=new Ns(nx,16,16,li,Sn),Un.name="DFG_LUT",Un.minFilter=Je,Un.magFilter=Je,Un.wrapS=wn,Un.wrapT=wn,Un.generateMipmaps=!1,Un.needsUpdate=!0),Un}var xo=class{constructor(t={}){let{canvas:e=Lh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=$e}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let M=f,x=new Set([La,Da,Fa]),p=new Set([$e,Mn,ns,Ai,Ua,Na]),_=new Uint32Array(4),E=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},v=null,b=null,g=[],S=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=In,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,U=!1,P=null,O=null,I=null,G=null;this._outputColorSpace=De;let W=0,Z=0,ot=null,F=-1,J=null,L=new Se,Y=new Se,tt=null,N=new Pt(0),X=0,ft=e.width,Mt=e.height,at=1,pt=null,Dt=null,xt=new Se(0,0,ft,Mt),H=new Se(0,0,ft,Mt),ut=!1,j=new ii,dt=new Kr,Lt=!1,Ht=!1,Zt=new Jt,Tt=new B,Ft=new Se,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},pe=!1;function ce(){return ot===null?at:1}let k=n;function it(A,z){return e.getContext(A,z)}let Ut,Xt,ht,te,K,St,C,w,V,ct,et,mt,_t,st,rt,bt,D,lt,nt,Et,yt,vt,Gt;try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Wt,!1),e.addEventListener("webglcontextrestored",$t,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),k===null){let z="webgl2";if(k=it(z,A),k===null)throw it(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ee()}catch(A){throw e.removeEventListener("webglcontextlost",Wt,!1),e.removeEventListener("webglcontextrestored",$t,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),qt("WebGLRenderer: "+A.message),A}function ee(){Ut=new pg(k),Ut.init(),yt=new j0(k,Ut),Xt=new ig(k,Ut,t,yt),ht=new J0(k,Ut),Xt.reversedDepthBuffer&&d&&ht.buffers.depth.setReversed(!0),O=k.createFramebuffer(),I=k.createFramebuffer(),G=k.createFramebuffer(),te=new xg(k),K=new F0,St=new q0(k,Ut,ht,K,Xt,yt,te),C=new fg(T),w=new yf(k),vt=new eg(k,w),V=new mg(k,w,te,vt),ct=new yg(k,V,w,vt,te),lt=new _g(k,Xt,St),rt=new sg(K),et=new P0(T,C,Ut,Xt,vt,rt),mt=new tx(T,K),_t=new L0,st=new G0(Ut),D=new tg(T,C,ht,ct,m,l),bt=new X0(T,ct,Xt),Gt=new ex(k,te,Xt,ht),nt=new ng(k,Ut,te),Et=new gg(k,Ut,te),te.programs=et.programs,T.capabilities=Xt,T.extensions=Ut,T.properties=K,T.renderLists=_t,T.shadowMap=bt,T.state=ht,T.info=te}M!==$e&&(R=new Sg(M,e.width,e.height,o,s,r));let gt=new $l(T,k);this.xr=gt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let A=Ut.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Ut.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(A){A!==void 0&&(at=A,this.setSize(ft,Mt,!1))},this.getSize=function(A){return A.set(ft,Mt)},this.setSize=function(A,z,$=!0){if(gt.isPresenting){Yt("WebGLRenderer: Can't change size while VR device is presenting.");return}ft=A,Mt=z,e.width=Math.floor(A*at),e.height=Math.floor(z*at),$===!0&&(e.style.width=A+"px",e.style.height=z+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(ft*at,Mt*at).floor()},this.setDrawingBufferSize=function(A,z,$){ft=A,Mt=z,at=$,e.width=Math.floor(A*$),e.height=Math.floor(z*$),this.setViewport(0,0,A,z)},this.setEffects=function(A){if(M===$e){qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let z=0;z<A.length;z++)if(A[z].isOutputPass===!0){Yt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(xt)},this.setViewport=function(A,z,$,q){A.isVector4?xt.set(A.x,A.y,A.z,A.w):xt.set(A,z,$,q),ht.viewport(L.copy(xt).multiplyScalar(ce()).round())},this.getScissor=function(A){return A.copy(H)},this.setScissor=function(A,z,$,q){A.isVector4?H.set(A.x,A.y,A.z,A.w):H.set(A,z,$,q),ht.scissor(Y.copy(H).multiplyScalar(ce()).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(A){ht.setScissorTest(ut=A)},this.setOpaqueSort=function(A){pt=A},this.setTransparentSort=function(A){Dt=A},this.getClearColor=function(A){return A.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,$=!0){let q=0;if(A){let Q=!1;if(ot!==null){let At=ot.texture.format;Q=x.has(At)}if(Q){let At=ot.texture.type,Bt=p.has(At),wt=D.getClearColor(),Nt=D.getClearAlpha(),Vt=wt.r,Kt=wt.g,se=wt.b;Bt?(_[0]=Vt,_[1]=Kt,_[2]=se,_[3]=Nt,k.clearBufferuiv(k.COLOR,0,_)):(E[0]=Vt,E[1]=Kt,E[2]=se,E[3]=Nt,k.clearBufferiv(k.COLOR,0,E))}else q|=k.COLOR_BUFFER_BIT}z&&(q|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),P=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Wt,!1),e.removeEventListener("webglcontextrestored",$t,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),D.dispose(),_t.dispose(),st.dispose(),St.dispose(),K.dispose(),C.dispose(),ct.dispose(),V.dispose(),vt.dispose(),Gt.dispose(),et.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",mc),gt.removeEventListener("sessionend",gc),hi.stop()};function Wt(A){A.preventDefault(),Bl("WebGLRenderer: Context Lost."),U=!0}function $t(){Bl("WebGLRenderer: Context Restored."),U=!1;let A=te.autoReset,z=bt.enabled,$=bt.autoUpdate,q=bt.needsUpdate,Q=bt.type;ee(),te.autoReset=A,bt.enabled=z,bt.autoUpdate=$,bt.needsUpdate=q,bt.type=Q}function Rt(A){qt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function me(A){let z=A.target;z.removeEventListener("dispose",me),Ne(z)}function Ne(A){qn(A),K.remove(A)}function qn(A){let z=K.get(A).programs;z!==void 0&&(z.forEach(function($){et.releaseProgram($)}),A.isShaderMaterial&&et.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,$,q,Q,At){z===null&&(z=oe);let Bt=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,wt=fd(A,z,$,q,Q);ht.setMaterial(q,Bt);let Nt=$.index,Vt=1;if(q.wireframe===!0){if(Nt=V.getWireframeAttribute($),Nt===void 0)return;Vt=2}let Kt=$.drawRange,se=$.attributes.position,Ot=Kt.start*Vt,re=(Kt.start+Kt.count)*Vt;At!==null&&(Ot=Math.max(Ot,At.start*Vt),re=Math.min(re,(At.start+At.count)*Vt)),Nt!==null?(Ot=Math.max(Ot,0),re=Math.min(re,Nt.count)):se!=null&&(Ot=Math.max(Ot,0),re=Math.min(re,se.count));let Te=re-Ot;if(Te<0||Te===1/0)return;vt.setup(Q,q,wt,$,Nt);let ye,_e=nt;if(Nt!==null&&(ye=w.get(Nt),_e=Et,_e.setIndex(ye)),Q.isMesh)q.wireframe===!0?(ht.setLineWidth(q.wireframeLinewidth*ce()),_e.setMode(k.LINES)):_e.setMode(k.TRIANGLES);else if(Q.isLine){let Oe=q.linewidth;Oe===void 0&&(Oe=1),ht.setLineWidth(Oe*ce()),Q.isLineSegments?_e.setMode(k.LINES):Q.isLineLoop?_e.setMode(k.LINE_LOOP):_e.setMode(k.LINE_STRIP)}else Q.isPoints?_e.setMode(k.POINTS):Q.isSprite&&_e.setMode(k.TRIANGLES);if(Q.isBatchedMesh)if(Ut.get("WEBGL_multi_draw"))_e.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let Oe=Q._multiDrawStarts,kt=Q._multiDrawCounts,Ye=Q._multiDrawCount,he=Nt?w.get(Nt).bytesPerElement:1,ui=K.get(q).currentProgram.getUniforms();for(let ke=0;ke<Ye;ke++)ui.setValue(k,"_gl_DrawID",ke),_e.render(Oe[ke]/he,kt[ke])}else if(Q.isInstancedMesh)_e.renderInstances(Ot,Te,Q.count);else if($.isInstancedBufferGeometry){let Oe=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,kt=Math.min($.instanceCount,Oe);_e.renderInstances(Ot,Te,kt)}else _e.render(Ot,Te)};function pc(A,z,$,q){P!==null&&A.isNodeMaterial&&P.setObject(q,A),Lt===!0&&rt.setState(A,$,!1),A.transparent===!0&&A.side===we&&A.forceSinglePass===!1?(A.side=Qe,A.needsUpdate=!0,cs(A,z,q),A.side=oi,A.needsUpdate=!0,cs(A,z,q),A.side=we):cs(A,z,q)}this.compile=function(A,z,$=null){$===null&&($=A),P!==null&&P.renderStart(A,z,$),b=st.get($),b.init(z),S.push(b),$.traverseVisible(function(Q){Q.isLight&&Q.layers.test(z.layers)&&(b.pushLight(Q),Q.castShadow&&b.pushShadow(Q))}),A!==$&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(z.layers)&&(b.pushLight(Q),Q.castShadow&&b.pushShadow(Q))}),b.setupLights(),P!==null&&P.updateLights(b.state.lightsArray),Ht=this.localClippingEnabled,Lt=rt.init(this.clippingPlanes,Ht),Lt===!0&&rt.setGlobalState(this.clippingPlanes,z),P!==null&&bt.render(b.state.shadowsArray,$,z);let q=new Set;return A.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let At=Q.material;if(At)if(Array.isArray(At))for(let Bt=0;Bt<At.length;Bt++){let wt=At[Bt];pc(wt,$,z,Q),q.add(wt)}else pc(At,$,z,Q),q.add(At)}),b=S.pop(),P!==null&&P.renderEnd(),q},this.compileAsync=function(A,z,$=null){let q=this.compile(A,z,$);return new Promise(Q=>{function At(){if(q.forEach(function(Bt){let Nt=K.get(Bt).currentProgram;(Nt===void 0||Nt.isReady())&&q.delete(Bt)}),q.size===0){Q(A);return}setTimeout(At,10)}Ut.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Co=null;function ud(A){Co&&Co(A)}function mc(){hi.stop()}function gc(){hi.start()}let hi=new du;hi.setAnimationLoop(ud),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(A){Co=A,gt.setAnimationLoop(A),A===null?hi.stop():hi.start()},gt.addEventListener("sessionstart",mc),gt.addEventListener("sessionend",gc),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;P!==null&&P.renderStart(A,z);let $=gt.enabled===!0&&gt.isPresenting===!0,q=R!==null&&(ot===null||$)&&R.begin(T,ot);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(z),z=gt.getCamera()),A.isScene===!0&&A.onBeforeRender(T,A,z,ot),b=st.get(A,S.length),b.init(z),b.state.textureUnits=St.getTextureUnits(),S.push(b),Zt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),z.isArrayCamera?dt.setFromArrayCamera(z):j.setFromProjectionMatrix(Zt,ln,z.reversedDepth),Ht=this.localClippingEnabled,Lt=rt.init(this.clippingPlanes,Ht),v=_t.get(A,g.length),v.init(),g.push(v),this.info.render.frame++,gt.enabled===!0&&gt.isPresenting===!0){let Bt=T.xr.getDepthSensingMesh();Bt!==null&&Io(Bt,z,-1/0,T.sortObjects)}Io(A,z,0,T.sortObjects),v.finish(),P!==null&&P.updateLights(b.state.lightsArray),T.sortObjects===!0&&v.sort(pt,Dt),pe=gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1,pe&&D.addToRenderList(v,A),this.info.autoReset===!0&&this.info.reset(),Lt===!0&&rt.beginShadows();let Q=b.state.shadowsArray;if(bt.render(Q,A,z),Lt===!0&&rt.endShadows(),(q&&R.hasRenderPass())===!1){let Bt=v.opaque,wt=v.transmissive;if(b.setupLights(),z.isArrayCamera){let Nt=z.cameras;if(wt.length>0)for(let Vt=0,Kt=Nt.length;Vt<Kt;Vt++){let se=Nt[Vt];_c(Bt,wt,A,se)}pe&&D.render(A);for(let Vt=0,Kt=Nt.length;Vt<Kt;Vt++){let se=Nt[Vt];xc(v,A,se,se.viewport)}}else wt.length>0&&_c(Bt,wt,A,z),pe&&D.render(A),xc(v,A,z)}ot!==null&&Z===0&&(St.updateMultisampleRenderTarget(ot),St.updateRenderTargetMipmap(ot)),q&&R.end(T),A.isScene===!0&&A.onAfterRender(T,A,z),vt.resetDefaultState(),F=-1,J=null,S.pop(),S.length>0?(b=S[S.length-1],St.setTextureUnits(b.state.textureUnits),Lt===!0&&rt.setGlobalState(T.clippingPlanes,b.state.camera)):b=null,g.pop(),g.length>0?v=g[g.length-1]:v=null,P!==null&&P.renderEnd()};function Io(A,z,$,q){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)b.pushLight(A),A.castShadow&&b.pushShadow(A);else if(A.isSprite){let Bt=z.isArrayCamera?dt:j;if(!A.frustumCulled||A.intersectsFrustum(Bt)){q&&Ft.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Zt);let wt=ct.update(A),Nt=A.material;Nt.visible&&v.push(A,wt,Nt,$,Ft.z,null,z)}}else if(A.isMesh||A.isLine||A.isPoints){let Bt=z.isArrayCamera?dt:j;if(!A.frustumCulled||A.intersectsFrustum(Bt)){let wt=ct.update(A),Nt=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ft.copy(A.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Ft.copy(wt.boundingSphere.center)),Ft.applyMatrix4(A.matrixWorld).applyMatrix4(Zt)),Array.isArray(Nt)){let Vt=wt.groups;for(let Kt=0,se=Vt.length;Kt<se;Kt++){let Ot=Vt[Kt],re=Nt[Ot.materialIndex];re&&re.visible&&v.push(A,wt,re,$,Ft.z,Ot,z)}}else Nt.visible&&v.push(A,wt,Nt,$,Ft.z,null,z)}}}let At=A.children;for(let Bt=0,wt=At.length;Bt<wt;Bt++)Io(At[Bt],z,$,q)}function xc(A,z,$,q){let{opaque:Q,transmissive:At,transparent:Bt}=A;b.setupLightsView($),Lt===!0&&rt.setGlobalState(T.clippingPlanes,$),q&&ht.viewport(L.copy(q)),Q.length>0&&ur(Q,z,$),At.length>0&&ur(At,z,$),Bt.length>0&&ur(Bt,z,$),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function _c(A,z,$,q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[q.id]===void 0){let Ot=Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[q.id]=new rn(1,1,{generateMipmaps:!0,type:Ot?Sn:$e,minFilter:Zn,samples:Math.max(4,Xt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ae.workingColorSpace})}let At=b.state.transmissionRenderTarget[q.id],Bt=q.viewport||L;At.setSize(Bt.z*T.transmissionResolutionScale,Bt.w*T.transmissionResolutionScale);let wt=T.getRenderTarget(),Nt=T.getActiveCubeFace(),Vt=T.getActiveMipmapLevel();T.setRenderTarget(At),T.getClearColor(N),X=T.getClearAlpha(),X<1&&T.setClearColor(16777215,.5),T.clear(),pe&&D.render($);let Kt=T.toneMapping;T.toneMapping=In;let se=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),b.setupLightsView(q),Lt===!0&&rt.setGlobalState(T.clippingPlanes,q),ur(A,$,q),St.updateMultisampleRenderTarget(At),St.updateRenderTargetMipmap(At),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let re=0,Te=z.length;re<Te;re++){let ye=z[re],{object:_e,geometry:Oe,material:kt,group:Ye}=ye;if(kt.side===we&&_e.layers.test(q.layers)){let he=kt.side;kt.side=Qe,kt.needsUpdate=!0,yc(_e,$,q,Oe,kt,Ye),kt.side=he,kt.needsUpdate=!0,Ot=!0}}Ot===!0&&(St.updateMultisampleRenderTarget(At),St.updateRenderTargetMipmap(At))}T.setRenderTarget(wt,Nt,Vt),T.setClearColor(N,X),se!==void 0&&(q.viewport=se),T.toneMapping=Kt}function ur(A,z,$){let q=z.isScene===!0?z.overrideMaterial:null;for(let Q=0,At=A.length;Q<At;Q++){let Bt=A[Q],{object:wt,geometry:Nt,group:Vt}=Bt,Kt=Bt.material;Kt.allowOverride===!0&&q!==null&&(Kt=q),wt.layers.test($.layers)&&yc(wt,z,$,Nt,Kt,Vt)}}function yc(A,z,$,q,Q,At){P!==null&&Q.isNodeMaterial&&P.setObject(A,Q),A.onBeforeRender(T,z,$,q,Q,At),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(T,z,$,q,A,At),Q.transparent===!0&&Q.side===we&&Q.forceSinglePass===!1?(Q.side=Qe,Q.needsUpdate=!0,T.renderBufferDirect($,z,q,Q,A,At),Q.side=oi,Q.needsUpdate=!0,T.renderBufferDirect($,z,q,Q,A,At),Q.side=we):T.renderBufferDirect($,z,q,Q,A,At),A.onAfterRender(T,z,$,q,Q,At)}function Mc(A){let z=0;for(let $ of A)$.texture!==null&&z++;return z}function cs(A,z,$){z.isScene!==!0&&(z=oe);let q=K.get(A),Q=b.state.lights,At=b.state.shadowsArray,Bt=Q.state.version,wt=et.getParameters(A,Q.state,At,z,$,b.state.lightProbeGridArray),Nt=et.getProgramCacheKey(wt),Vt=q.programs;q.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,q.fog=z.fog;let Kt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;q.envMap=C.get(A.envMap||q.environment,Kt),q.envMapRotation=q.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Vt===void 0&&(A.addEventListener("dispose",me),Vt=new Map,q.programs=Vt,q.programVariants=new Map);let se=Vt.get(Nt);if(se!==void 0){if(q.currentProgram===se&&q.lightsStateVersion===Bt)return vc(A,wt),se}else wt.uniforms=et.getUniforms(A),P!==null&&A.isNodeMaterial&&P.build(A,$,wt),A.onBeforeCompile(wt,T),se=et.acquireProgram(wt,Nt),Vt.set(Nt,se),q.uniforms=wt.uniforms;let Ot=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ot.clippingPlanes=rt.uniform),vc(A,wt),q.needsLights=md(A),q.lightsStateVersion=Bt,q.needsLights&&(Ot.ambientLightColor.value=Q.state.ambient,Ot.lightProbe.value=Q.state.probe,Ot.sunLights.value=Q.state.sun,Ot.sunLightShadows.value=Q.state.sunShadow,Ot.directionalLights.value=Q.state.directional,Ot.directionalLightShadows.value=Q.state.directionalShadow,Ot.spotLights.value=Q.state.spot,Ot.spotLightShadows.value=Q.state.spotShadow,Ot.rectAreaLights.value=Q.state.rectArea,Ot.ltc_1.value=Q.state.rectAreaLTC1,Ot.ltc_2.value=Q.state.rectAreaLTC2,Ot.pointLights.value=Q.state.point,Ot.pointLightShadows.value=Q.state.pointShadow,Ot.hemisphereLights.value=Q.state.hemi,Ot.sunShadowMatrix.value=Q.state.sunShadowMatrix,Ot.sunShadowCascade.value=Q.state.sunShadowCascade,Ot.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ot.spotLightMatrix.value=Q.state.spotLightMatrix,Ot.spotLightMap.value=Q.state.spotLightMap,Ot.pointShadowMatrix.value=Q.state.pointShadowMatrix),q.numLightProbeGrids=Mc(b.state.lightProbeGridArray),q.currentProgram=se,q.uniformsList=null,se}function dd(A,z,$,q,Q){let At=K.get(A),Bt=At.currentProgram.id+","+q+","+Q,wt=At.programVariants.get(Bt);return wt===void 0?(wt=cs(A,z,$),At.programVariants.set(Bt,wt)):(At.currentProgram=wt,At.uniformsList=null,At.outputColorSpace=q,At.toneMapping=Q),wt}function Sc(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=is.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function vc(A,z){let $=K.get(A);$.outputColorSpace=z.outputColorSpace,$.batching=z.batching,$.batchingColor=z.batchingColor,$.instancing=z.instancing,$.instancingColor=z.instancingColor,$.instancingMorph=z.instancingMorph,$.skinning=z.skinning,$.morphTargets=z.morphTargets,$.morphNormals=z.morphNormals,$.morphColors=z.morphColors,$.morphTargetsCount=z.morphTargetsCount,$.numClippingPlanes=z.numClippingPlanes,$.numIntersection=z.numClipIntersection,$.vertexAlphas=z.vertexAlphas,$.vertexTangents=z.vertexTangents,$.toneMapping=z.toneMapping}function fd(A,z,$,q,Q){z.isScene!==!0&&(z=oe),St.resetTextureUnits();let At=z.fog,Bt=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?z.environment:null,wt=ot===null?T.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:ae.workingColorSpace,Nt=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Vt=C.get(q.envMap||Bt,Nt),Kt=q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,se=!!$.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ot=!!$.morphAttributes.position,re=!!$.morphAttributes.normal,Te=!!$.morphAttributes.color,ye=In;q.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(ye=T.toneMapping);let _e=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Oe=_e!==void 0?_e.length:0,kt=K.get(q),Ye=b.state.lights;if(Lt===!0&&(Ht===!0||A!==J)){let ve=A===J&&q.id===F;rt.setState(q,A,ve)}let he=!1,ui=!1;q.version===kt.__version?kt.needsLights&&kt.lightsStateVersion!==Ye.state.version||Q.isBatchedMesh&&kt.batching===!1||!Q.isBatchedMesh&&kt.batching===!0||Q.isBatchedMesh&&kt.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&kt.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&kt.instancing===!1||!Q.isInstancedMesh&&kt.instancing===!0||Q.isSkinnedMesh&&kt.skinning===!1||!Q.isSkinnedMesh&&kt.skinning===!0||Q.isInstancedMesh&&kt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&kt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&kt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&kt.instancingMorph===!1&&Q.morphTexture!==null||kt.envMap!==Vt||q.fog===!0&&kt.fog!==At||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==rt.numPlanes||kt.numIntersection!==rt.numIntersection)||kt.vertexAlphas!==Kt||kt.vertexTangents!==se||kt.morphTargets!==Ot||kt.morphNormals!==re||kt.morphColors!==Te||kt.morphTargetsCount!==Oe||kt.numLightProbeGrids!==Mc(b.state.lightProbeGridArray)?he=!0:(kt.outputColorSpace!==wt||kt.toneMapping!==ye)&&(ui=!0):(he=!0,kt.__version=q.version);let ke=kt.currentProgram;(he===!0||ui===!0)&&(ke=ui===!0?dd(q,z,Q,wt,ye):cs(q,z,Q),P&&q.isNodeMaterial&&P.onUpdateProgram(q,ke,kt));let dr=!1,jn=!1,di=!1,le=ke.getUniforms(),Be=kt.uniforms;if(ht.useProgram(ke.program)&&(dr=!0,jn=!0,di=!0),q.id!==F&&(F=q.id,jn=!0),dr||J!==A){ht.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),le.setValue(k,"projectionMatrix",A.projectionMatrix),le.setValue(k,"viewMatrix",A.matrixWorldInverse);let Pe=le.map.cameraPosition;Pe!==void 0&&Pe.setValue(k,Tt.setFromMatrixPosition(A.matrixWorld)),Xt.logarithmicDepthBuffer&&le.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&le.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),J!==A&&(J=A,jn=!0,di=!0)}if(kt.needsLights&&(Ye.state.sunShadowMap.length>0&&le.setValue(k,"sunShadowMap",Ye.state.sunShadowMap,St),Ye.state.directionalShadowMap.length>0&&le.setValue(k,"directionalShadowMap",Ye.state.directionalShadowMap,St),Ye.state.spotShadowMap.length>0&&le.setValue(k,"spotShadowMap",Ye.state.spotShadowMap,St),Ye.state.pointShadowMap.length>0&&le.setValue(k,"pointShadowMap",Ye.state.pointShadowMap,St)),Q.isSkinnedMesh){le.setOptional(k,Q,"bindMatrix"),le.setOptional(k,Q,"bindMatrixInverse");let ve=Q.skeleton;ve&&(ve.boneTexture===null&&ve.computeBoneTexture(),le.setValue(k,"boneTexture",ve.boneTexture,St))}Q.isBatchedMesh&&(le.setOptional(k,Q,"batchingTexture"),le.setValue(k,"batchingTexture",Q._matricesTexture,St),le.setOptional(k,Q,"batchingIdTexture"),le.setValue(k,"batchingIdTexture",Q._indirectTexture,St),le.setOptional(k,Q,"batchingColorTexture"),Q._colorsTexture!==null&&le.setValue(k,"batchingColorTexture",Q._colorsTexture,St));let pn=$.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&lt.update(Q,$,ke),(jn||kt.receiveShadow!==Q.receiveShadow)&&(kt.receiveShadow=Q.receiveShadow,le.setValue(k,"receiveShadow",Q.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&z.environment!==null&&(Be.envMapIntensity.value=z.environmentIntensity),Be.dfgLUT!==void 0&&(Be.dfgLUT.value=ix()),jn){if(le.setValue(k,"toneMappingExposure",T.toneMappingExposure),kt.needsLights&&pd(Be,di),At&&q.fog===!0&&mt.refreshFogUniforms(Be,At),mt.refreshMaterialUniforms(Be,q,at,Mt,b.state.transmissionRenderTarget[A.id]),kt.needsLights&&kt.numLightProbeGrids>0){let ve=y,Pe=0;for(let Fn of b.state.lightProbeGridArray)Fn.texture!==null&&(ve.textures[Pe]=Fn.texture,ve.min[Pe]=Fn.boundingBox.min,ve.max[Pe]=Fn.boundingBox.max,ve.resolution[Pe]=Fn.resolution,Pe++);for(let Fn in ve)ve[Fn].length=Pe;Be.probesSH.value=ve.textures,Be.probesMin.value=ve.min,Be.probesMax.value=ve.max,Be.probesResolution.value=ve.resolution}is.upload(k,Sc(kt),Be,St)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(is.upload(k,Sc(kt),Be,St),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&le.setValue(k,"center",Q.center),le.setValue(k,"modelViewMatrix",Q.modelViewMatrix),le.setValue(k,"normalMatrix",Q.normalMatrix),le.setValue(k,"modelMatrix",Q.matrixWorld),q.uniformsGroups!==void 0){let ve=q.uniformsGroups;for(let Pe=0,Fn=ve.length;Pe<Fn;Pe++){let Ec=ve[Pe];Gt.update(Ec,ke),Gt.bind(Ec,ke)}}return ke}function pd(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.sunLights.needsUpdate=z,A.sunLightShadows.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function md(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return ot},this.setRenderTargetTextures=function(A,z,$){let q=K.get(A);q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),K.get(A.texture).__webglTexture=z,K.get(A.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:$,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){let $=K.get(A);$.__webglFramebuffer=z,$.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,$=0){ot=A,W=z,Z=$;let q=null,Q=!1,At=!1;if(A){let wt=K.get(A);if(wt.__useDefaultFramebuffer!==void 0){ht.bindFramebuffer(k.FRAMEBUFFER,wt.__webglFramebuffer),L.copy(A.viewport),Y.copy(A.scissor),tt=A.scissorTest,ht.viewport(L),ht.scissor(Y),ht.setScissorTest(tt),F=-1;return}else if(wt.__webglFramebuffer===void 0)St.setupRenderTarget(A);else if(wt.__hasExternalTextures)St.rebindTextures(A,K.get(A.texture).__webglTexture,K.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Kt=A.depthTexture;if(wt.__boundDepthTexture!==Kt){if(Kt!==null&&K.has(Kt)&&(A.width!==Kt.image.width||A.height!==Kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");St.setupDepthRenderbuffer(A)}}let Nt=A.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(At=!0);let Vt=K.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Vt[z])?q=Vt[z][$]:q=Vt[z],Q=!0):A.samples>0&&St.useMultisampledRTT(A)===!1?q=K.get(A).__webglMultisampledFramebuffer:Array.isArray(Vt)?q=Vt[$]:q=Vt,L.copy(A.viewport),Y.copy(A.scissor),tt=A.scissorTest}else L.copy(xt).multiplyScalar(at).floor(),Y.copy(H).multiplyScalar(at).floor(),tt=ut;if($!==0&&(q=O),ht.bindFramebuffer(k.FRAMEBUFFER,q)&&ht.drawBuffers(A,q),ht.viewport(L),ht.scissor(Y),ht.setScissorTest(tt),Q){let wt=K.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+z,wt.__webglTexture,$)}else if(At){let wt=z;for(let Nt=0;Nt<A.textures.length;Nt++){let Vt=K.get(A.textures[Nt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Nt,Vt.__webglTexture,$,wt)}}else if(A!==null&&$!==0){let wt=K.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,wt.__webglTexture,$)}F=-1};function bc(A){let z=K.get(A);return(z.__readFormat!==A.format||z.__readType!==A.type)&&(z.__readFormat=A.format,z.__readType=A.type,z.__formatReadable=Xt.textureFormatReadable(A.format),z.__typeReadable=Xt.textureTypeReadable(A.type)),z}this.readRenderTargetPixels=function(A,z,$,q,Q,At,Bt,wt=0){if(!(A&&A.isWebGLRenderTarget)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=K.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Bt!==void 0&&(Nt=Nt[Bt],Array.isArray(Nt)&&(Nt=Nt[0])),Nt){ht.bindFramebuffer(k.FRAMEBUFFER,Nt);try{let Vt=A.textures[wt],Kt=Vt.format,se=Vt.type;A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+wt);let Ot=bc(Vt);if(Ot.__formatReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ot.__typeReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-q&&$>=0&&$<=A.height-Q&&k.readPixels(z,$,q,Q,yt.convert(Kt),yt.convert(se),At)}finally{let Vt=ot!==null?K.get(ot).__webglFramebuffer:null;ht.bindFramebuffer(k.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(A,z,$,q,Q,At,Bt,wt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=K.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Bt!==void 0&&(Nt=Nt[Bt],Array.isArray(Nt)&&(Nt=Nt[0])),Nt)if(z>=0&&z<=A.width-q&&$>=0&&$<=A.height-Q){ht.bindFramebuffer(k.FRAMEBUFFER,Nt);let Vt=A.textures[wt],Kt=Vt.format,se=Vt.type;A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+wt);let Ot=bc(Vt);if(Ot.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ot.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let re=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,re),k.bufferData(k.PIXEL_PACK_BUFFER,At.byteLength,k.STREAM_READ),k.readPixels(z,$,q,Q,yt.convert(Kt),yt.convert(se),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Te=ot!==null?K.get(ot).__webglFramebuffer:null;ht.bindFramebuffer(k.FRAMEBUFFER,Te);let ye=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Oh(k,ye,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,re),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,At),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(re),k.deleteSync(ye),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,$=0){let q=Math.pow(2,-$),Q=Math.floor(A.image.width*q),At=Math.floor(A.image.height*q),Bt=z!==null?z.x:0,wt=z!==null?z.y:0;St.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,$,0,0,Bt,wt,Q,At),ht.unbindTexture()},this.copyTextureToTexture=function(A,z,$=null,q=null,Q=0,At=0){let Bt,wt,Nt,Vt,Kt,se,Ot,re,Te,ye=A.isCompressedTexture?A.mipmaps[At]:A.image;if($!==null)Bt=$.max.x-$.min.x,wt=$.max.y-$.min.y,Nt=$.isBox3?$.max.z-$.min.z:1,Vt=$.min.x,Kt=$.min.y,se=$.isBox3?$.min.z:0;else{let le=Math.pow(2,-Q);Bt=Math.floor(ye.width*le),wt=Math.floor(ye.height*le),A.isDataArrayTexture?Nt=ye.depth:A.isData3DTexture?Nt=Math.floor(ye.depth*le):Nt=1,Vt=0,Kt=0,se=0}q!==null?(Ot=q.x,re=q.y,Te=q.z):(Ot=0,re=0,Te=0);let _e=yt.convert(z.format),Oe=yt.convert(z.type),kt;z.isData3DTexture?(St.setTexture3D(z,0),kt=k.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(St.setTexture2DArray(z,0),kt=k.TEXTURE_2D_ARRAY):(St.setTexture2D(z,0),kt=k.TEXTURE_2D),ht.activeTexture(k.TEXTURE0),ht.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,z.flipY),ht.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),ht.pixelStorei(k.UNPACK_ALIGNMENT,z.unpackAlignment);let Ye=ht.getParameter(k.UNPACK_ROW_LENGTH),he=ht.getParameter(k.UNPACK_IMAGE_HEIGHT),ui=ht.getParameter(k.UNPACK_SKIP_PIXELS),ke=ht.getParameter(k.UNPACK_SKIP_ROWS),dr=ht.getParameter(k.UNPACK_SKIP_IMAGES);ht.pixelStorei(k.UNPACK_ROW_LENGTH,ye.width),ht.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ye.height),ht.pixelStorei(k.UNPACK_SKIP_PIXELS,Vt),ht.pixelStorei(k.UNPACK_SKIP_ROWS,Kt),ht.pixelStorei(k.UNPACK_SKIP_IMAGES,se);let jn=A.isDataArrayTexture||A.isData3DTexture,di=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){let le=K.get(A),Be=K.get(z),pn=K.get(le.__renderTarget),ve=K.get(Be.__renderTarget);ht.bindFramebuffer(k.READ_FRAMEBUFFER,pn.__webglFramebuffer),ht.bindFramebuffer(k.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Pe=0;Pe<Nt;Pe++)jn&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,K.get(A).__webglTexture,Q,se+Pe),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,K.get(z).__webglTexture,At,Te+Pe)),k.blitFramebuffer(Vt,Kt,Vt+Bt,Kt+wt,Ot,re,Ot+Bt,re+wt,k.DEPTH_BUFFER_BIT,k.NEAREST);ht.bindFramebuffer(k.READ_FRAMEBUFFER,null),ht.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Q!==0||A.isRenderTargetTexture||K.has(A)){let le=K.get(A),Be=K.get(z);ht.bindFramebuffer(k.READ_FRAMEBUFFER,I),ht.bindFramebuffer(k.DRAW_FRAMEBUFFER,G);for(let pn=0;pn<Nt;pn++)jn?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,le.__webglTexture,Q,se+pn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,le.__webglTexture,Q),di?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Be.__webglTexture,At,Te+pn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Be.__webglTexture,At),Q!==0?k.blitFramebuffer(Vt,Kt,Vt+Bt,Kt+wt,Ot,re,Ot+Bt,re+wt,k.COLOR_BUFFER_BIT,k.NEAREST):di?k.copyTexSubImage3D(kt,At,Ot,re,Te+pn,Vt,Kt,Bt,wt):k.copyTexSubImage2D(kt,At,Ot,re,Vt,Kt,Bt,wt);ht.bindFramebuffer(k.READ_FRAMEBUFFER,null),ht.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else di?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(kt,At,Ot,re,Te,Bt,wt,Nt,_e,Oe,ye.data):z.isCompressedArrayTexture?k.compressedTexSubImage3D(kt,At,Ot,re,Te,Bt,wt,Nt,_e,ye.data):k.texSubImage3D(kt,At,Ot,re,Te,Bt,wt,Nt,_e,Oe,ye):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,At,Ot,re,Bt,wt,_e,Oe,ye.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,At,Ot,re,ye.width,ye.height,_e,ye.data):k.texSubImage2D(k.TEXTURE_2D,At,Ot,re,Bt,wt,_e,Oe,ye);ht.pixelStorei(k.UNPACK_ROW_LENGTH,Ye),ht.pixelStorei(k.UNPACK_IMAGE_HEIGHT,he),ht.pixelStorei(k.UNPACK_SKIP_PIXELS,ui),ht.pixelStorei(k.UNPACK_SKIP_ROWS,ke),ht.pixelStorei(k.UNPACK_SKIP_IMAGES,dr),At===0&&z.generateMipmaps===!0&&z.mipmapsAutoUpdate===!0&&k.generateMipmap(kt),ht.unbindTexture()},this.initRenderTarget=function(A){K.get(A).__webglFramebuffer===void 0&&St.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?St.setTextureCube(A,0):A.isData3DTexture?St.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?St.setTexture2DArray(A,0):St.setTexture2D(A,0),ht.unbindTexture()},this.resetState=function(){W=0,Z=0,ot=null,ht.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}};function Mo(i,t,{fog:e=[40,120],light:n="fixed",ambient:s=.6}={}){let r=new xo({antialias:!0});r.setPixelRatio(Math.min(globalThis.devicePixelRatio||1,2)),r.setClearColor(new Pt(t.bg)),i.appendChild(r.domElement);let a=new Rs;e&&(a.fog=new As(new Pt(t.bg),e[0],e[1]));let o=new Xe(50,1,.1,400);a.add(new Zs(16777215,s));let l=new Ws(16777215,2.2);n==="camera"?(l.position.set(-.5,.9,.45),o.add(l),o.add(l.target),l.target.position.set(0,0,-1),a.add(o)):(l.position.set(20,30,25),a.add(l));function c(){let v=i.clientWidth||300,b=i.clientHeight||300;r.setSize(v,b),o.aspect=v/b,o.updateProjectionMatrix()}c();let h=new B,u=new B,d=new cn,f=new B,m=new Jt,M=new B,x=1,p="",_=()=>{let v=0;return a.traverse(b=>{(b.isMesh||b.isLine||b.isPoints)&&(v+=1+(b.isInstancedMesh?b.count:0)+(b.geometry&&b.geometry.attributes.position?b.geometry.attributes.position.count:0))}),v},E=v=>{v.sort((g,S)=>g-S);let b=v.length;return(v[Math.floor(b*.02)]+v[Math.min(b-1,Math.floor(b*.98))])/2};function y(v){a.updateMatrixWorld(!0);let b=[];a.traverse(T=>{if(T.isMesh||T.isLine||T.isPoints){if(T.isInstancedMesh)for(let U=0;U<T.count;U++)T.getMatrixAt(U,m),b.push(f.setFromMatrixPosition(m).applyMatrix4(T.matrixWorld).clone());else if(d.makeEmpty().expandByObject(T),!d.isEmpty())for(let U=0;U<8;U++)b.push(M.set(U&1?d.max.x:d.min.x,U&2?d.max.y:d.min.y,U&4?d.max.z:d.min.z).clone())}}),p=_();let g=b.filter(T=>Number.isFinite(T.x+T.y+T.z));if(!g.length){h.set(0,0,0),x=1;return}h.set(E(g.map(T=>T.x)),E(g.map(T=>T.y)),E(g.map(T=>T.z)));let S=g.map(T=>T.distanceTo(h)).sort((T,U)=>T-U),R=S[Math.min(S.length-1,Math.floor(S.length*.98))]*1.05;if(!(R>0)){x=1;return}x=Math.max(.3,Math.min(30,2.4*R/v))}return{renderer:r,scene:a,camera:o,resize:c,canvas:r.domElement,fit:y,changed:()=>_()!==p,centre:h,orbit(v,b,g,S){let R=x/Math.min(1,o.aspect*1.15),T=g*R,U=S?(u.set(h.x+S.x*T,h.y,h.z+S.z*T),u):h;e&&(a.fog.near=e[0]*R,a.fog.far=e[1]*R),o.position.set(U.x+Math.sin(v)*Math.cos(b)*T,U.y+Math.sin(b)*T,U.z+Math.cos(v)*Math.cos(b)*T),o.lookAt(U),o.updateMatrixWorld()},render(){r.render(a,o)},snapshot(){return r.render(a,o),r.domElement.toDataURL("image/png")},dispose(){a.traverse(v=>{v.geometry&&v.geometry.dispose(),v.material&&v.material.dispose(),v.isInstancedMesh&&v.dispose()}),r.dispose(),r.domElement.remove()}}}function bu(i,{yaw:t=.6,pitch:e=.3,dist:n=48,min:s=15,max:r=110,minPitch:a=.3,maxPitch:o=1.4,pan:l=!1,onChange:c,onClick:h,onHover:u}){let d=i.canvas,f={yaw:t,pitch:e,dist:n,x:0,z:0},m=new Map,M=e,x=.75,p=!1,_=null,E=0;d.style.touchAction="none";let y=T=>Math.max(s,Math.min(r,T)),v=T=>Math.max(a,Math.min(o,T)),b=T=>Math.max(-.7,Math.min(.7,T)),g=(T,U)=>{let P=2*Math.tan(25*Math.PI/180)/(d.clientHeight||300);f.x=b(f.x-(Math.cos(f.yaw)*T+Math.sin(f.yaw)*U)*P),f.z=b(f.z+(Math.sin(f.yaw)*T-Math.cos(f.yaw)*U)*P)},S=()=>{let[T,U]=[...m.values()];return Math.hypot(T.x-U.x,T.y-U.y)},R={pointerdown(T){m.set(T.pointerId,{x:T.clientX,y:T.clientY});try{d.setPointerCapture(T.pointerId)}catch{}m.size===1?(p=!1,_={x:T.clientX,y:T.clientY}):(p=!0,E=S())},pointermove(T){let U=m.get(T.pointerId);if(!U){T.pointerType==="mouse"&&u&&u(T.clientX,T.clientY);return}let P=T.clientX-U.x,O=T.clientY-U.y;if(U.x=T.clientX,U.y=T.clientY,m.size===2){let I=S();E>0&&I>0&&(f.dist=y(f.dist*E/I),c()),E=I;return}!p&&Math.abs(T.clientX-_.x)+Math.abs(T.clientY-_.y)>4&&(p=!0),p&&(l?g(P,O):(f.yaw-=P*.008,f.pitch=v(f.pitch+O*.008)),c())},pointerup(T){m.delete(T.pointerId)&&!p&&!m.size&&h&&h(T.clientX,T.clientY)},pointercancel(T){m.delete(T.pointerId)},wheel(T){T.preventDefault(),f.dist=y(f.dist*(1+Math.sign(T.deltaY)*.08)),c()}};for(let[T,U]of Object.entries(R))d.addEventListener(T,U,{passive:T!=="wheel"});return{get yaw(){return f.yaw},get pitch(){return f.pitch},get dist(){return f.dist},get x(){return f.x},get z(){return f.z},set(T){Object.assign(f,T),f.dist=y(f.dist),f.pitch=v(f.pitch),f.x=b(f.x),f.z=b(f.z),c()},get tilted(){return f.pitch<M-.2},tilt(T=!(f.pitch<M-.2)){return f.pitch=v(T?x:M),c(),T},apply(){i.orbit(f.yaw,f.pitch,f.dist,f)},dispose(){for(let[T,U]of Object.entries(R))d.removeEventListener(T,U)}}}var So=new B;function rs(i,t){let e=i.camera,n=i.canvas.clientWidth,s=i.canvas.clientHeight;So.set(t[0],t[1],t[2]).applyMatrix4(e.matrixWorldInverse);let r=-So.z;if(r<=e.near)return null;let a=s/(2*Math.tan(e.fov*Math.PI/360));return{x:n/2+So.x*a/r,y:s/2-So.y*a/r,depth:r,px:a/r}}function Eu(i,t,e,n,s=8){let r=null,a=1/0,o=null,l=1/0;for(let c of t){let h=rs(i,c.at);if(!h)continue;let u=Math.hypot(h.x-e,h.y-n),d=c.r*h.px;u<=d?h.depth<a&&(a=h.depth,r=c.key):u-d<=s&&u-d<l&&(l=u-d,o=c.key)}return r||o}var ar=(i,t)=>(Object.assign(i.style,t),i);function wu(i,t){getComputedStyle(i).position==="static"&&(i.style.position="relative");let e=`0 0 3px ${t.bg}, 0 0 3px ${t.bg}, 0 1px 2px ${t.bg}`,n=`color-mix(in srgb, ${t.bg} 72%, transparent)`,s=(S,R,T)=>{let U=document.createElement(S);return ar(U,R),(T||r).appendChild(U),U},r=ar(document.createElement("div"),{position:"absolute",inset:"0",pointerEvents:"none",overflow:"hidden",font:"13px system-ui, sans-serif",color:t.fg,userSelect:"none"});r.className="vgv-frame",i.appendChild(r);let a=s("div",{position:"absolute",left:"12px",top:"10px",right:"12px",color:t.muted,textShadow:e});a.className="vgv-stat";let o=s("div",{position:"absolute",left:"12px",top:"34px",right:"12px",display:"flex",flexWrap:"wrap",gap:"2px 12px",fontSize:"11px",color:t.muted,textShadow:e});o.className="vgv-legend";let l=s("div",{position:"absolute",left:"10px",right:"10px",bottom:"112px",maxHeight:"55%",overflowY:"auto",display:"none",flexDirection:"column",gap:"8px",padding:"10px 12px",borderRadius:"10px",background:t.bg,border:`1px solid ${t.muted}`,pointerEvents:"auto",userSelect:"text"});l.className="vgv-insights";let c=s("div",{position:"absolute",top:"34px",left:"0",right:"0",display:"none",justifyContent:"center"}),h=s("div",{position:"absolute",inset:"0"});h.className="vgv-labels";let u=s("div",{position:"absolute",inset:"0",pointerEvents:"none"});u.className="vgv-rings";let d=s("div",{position:"absolute",left:"0",right:"0",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",padding:"0 12px"});d.className="vgv-controls";let f=s("div",{position:"absolute",display:"none",maxWidth:"260px",padding:"4px 8px",borderRadius:"6px",background:t.bg,border:`1px solid ${t.muted}`,color:t.fg,fontSize:"12px"});f.className="vgv-tip",r.appendChild(l);function m(S,{label:R,title:T,run:U,off:P},O){let I=s("button",Object.assign({pointerEvents:P?"none":"auto",cursor:"pointer",minHeight:"36px",height:"auto",minWidth:"36px",width:"auto",padding:"6px 14px",margin:"0",borderRadius:"8px",border:`1px solid ${t.muted}`,background:t.bg,color:t.fg,font:"600 13px system-ui, sans-serif",boxShadow:"none",opacity:P?"0.35":"1",lineHeight:"1.2"},O||{}),S);return I.type="button",I.textContent=R,I.disabled=!!P,T&&(I.title=T,I.setAttribute("aria-label",T)),I.addEventListener("click",G=>{G.stopPropagation(),U()}),I}let M=S=>{let R=S.canvas.getBoundingClientRect(),T=r.getBoundingClientRect();return{x:R.left-T.left,y:R.top-T.top}},x=[],p=null,_=!1,E={},y=null,v=[],b=()=>{let S=o.querySelector(".vgv-mark");if(S&&S.remove(),!y)return;let R=s("span",{display:"inline-flex",alignItems:"center",gap:"5px"},o);R.className="vgv-mark",s("i",{width:"9px",height:"9px",borderRadius:"50%",border:`2px solid ${t.warn}`,boxSizing:"border-box"},R),R.append(y)},g=()=>{if(l.style.display=p&&_?"flex":"none",l.replaceChildren(),!(!p||!_)){if(p.plain){let S=s("div",{color:t.fg,lineHeight:"1.35",fontWeight:"600"},l);S.textContent=p.plain}p.about&&(s("div",{color:t.fg,lineHeight:"1.35"},l).textContent=p.about);for(let S of p.insights||[]){let R=s("div",{display:"flex",gap:"8px",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"},l);s("div",{color:t.muted,flex:"1 1 160px",lineHeight:"1.35"},R).textContent=S.text,S.run&&m(R,{label:S.label||"Show",title:S.title||S.label||"Show",run:S.run},{minHeight:"30px",padding:"4px 10px",fontWeight:"500"})}}};return{stat(S){a.textContent=S||""},explain(S){p=S||null,o.replaceChildren();for(let R of p&&p.legend||[]){let T=s("span",{display:"inline-flex",alignItems:"center",gap:"5px"},o);s("i",{width:"9px",height:"9px",borderRadius:"50%",background:R.color,display:"inline-block",flex:"none"},T),s("span",{},T).textContent=R.text}p||(_=!1),b(),g(),this.controls(E)},mark(S){y=S||null,b()},rings(S,R){for(;v.length<S.length;){let U=s("div",{position:"absolute",left:"0",top:"0",borderRadius:"50%",boxSizing:"border-box",willChange:"transform"},u);v.push(U)}let T=M(R);v.forEach((U,P)=>{let O=S[P],I=O&&rs(R,O.at);if(!I){U.style.display="none";return}I.x+=T.x,I.y+=T.y;let G=Math.max(4,Math.min(24,O.r*I.px))+4,W=2*G+(O.n>1?8:0);ar(U,{display:"",width:W+"px",height:W+"px",border:`2px solid ${t.warn}`,boxShadow:O.n>1?`inset 0 0 0 2px transparent, inset 0 0 0 3.5px ${t.warn}`:"none",transform:`translate(${Math.round(I.x-W/2)}px, ${Math.round(I.y-W/2)}px)`})})},controls(S={}){E=S;let{at:R="bottom",lines:T=[],buttons:U=[]}=S,P=p&&R==="bottom"?[...U,{label:_?"Close":"Insights",title:_?"Close the insights":"How the notes relate to this view and how to improve them",run:()=>{_=!_,g(),this.controls(E)}}]:U;if(d.replaceChildren(),ar(d,R==="centre"?{top:"50%",bottom:"auto",transform:"translateY(-50%)"}:{top:"auto",bottom:"18px",transform:"none"}),T.forEach((O,I)=>{s("div",{textAlign:"center",textShadow:e,color:I||R!=="centre"?t.muted:t.fg,fontWeight:I||R!=="centre"?"400":"600",fontSize:I||R!=="centre"?"13px":"14px"},d).textContent=O}),P.length){let O=s("div",{display:"flex",gap:"8px",alignItems:"center",justifyContent:"center",maxWidth:"100%"},d);P.forEach(I=>m(O,I,I.wide?{maxWidth:"70vw",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}:null))}},chip(S,R){c.replaceChildren(),c.style.display=S?"flex":"none",S&&m(c,{label:`${S}  \u2715`,title:`${S}. Clear`,run:R},{borderRadius:"18px",fontWeight:"400"})},labels(S){h.replaceChildren(),x=S.map(R=>{let T={position:"absolute",left:"0",top:"0",whiteSpace:"nowrap",color:R.color||t.fg,textShadow:e,font:`${R.strong?"700 15px":"12px"} system-ui, sans-serif`,willChange:"transform",background:n,borderRadius:"5px",padding:"1px 5px"},U=R.run?m(h,{label:R.text,title:R.title,run:R.run},Object.assign(T,{minHeight:"0",minWidth:"0",padding:"3px 5px",border:"none",background:n})):s("div",T,h);return R.run||(U.textContent=R.text),{l:R,n:U,w:U.offsetWidth,h:U.offsetHeight}})},tip(S,R,T){f.style.display=S?"block":"none",S&&(f.textContent=S,ar(f,{left:Math.max(4,Math.min(r.clientWidth-264,R+14))+"px",top:Math.max(4,T+16)+"px"}))},place(S){let R=r.clientWidth,T=r.clientHeight,U=[],P=M(S);for(let{l:O,n:I,w:G,h:W}of x){let Z=rs(S,O.at);Z&&(Z.x+=P.x,Z.y+=P.y);let ot=!!Z&&Z.x>-G&&Z.x<R+G&&Z.y>-W&&Z.y<T+W,F=0,J=0;ot&&(F=Math.max(6,Math.min(R-G-6,O.side==="right"?Z.x+(O.dx||0):Z.x-G/2)),J=Math.max(34+(o.offsetHeight?o.offsetHeight+6:0),Math.min(T-110,Z.y+(O.dy||0)-W/2)),ot=!U.some(L=>F<L[0]+L[2]&&F+G>L[0]&&J<L[1]+L[3]&&J+W>L[1])),I.style.display=ot?"":"none",ot&&(I.style.transform=`translate(${Math.round(F)}px, ${Math.round(J)}px)`,U.push([F,J,G,W]))}},dispose(){r.remove()}}}function Tu(i,t,e){let n=Mo(i,e.theme,t.stage),s=wu(i,e.theme),r=0,a=!1,o=null,l=new Map,c=()=>s.rings(l.size?M.targets().filter(p=>p.key.kind==="note"&&l.has(p.key.id)).map(p=>({at:p.at,r:p.r,n:l.get(p.key.id)})):[],n),h=()=>{n.changed()&&x(),m.apply(),M.frame&&M.frame(),s.place(n),c()},u=()=>{r=0,!a&&(h(),n.render())},d=()=>{!r&&!a&&(r=requestAnimationFrame(u))},f=(p,_)=>{let E=n.canvas.getBoundingClientRect();return m.apply(),Eu(n,M.targets(),p-E.left,_-E.top)},m=bu(n,{...t.home,onChange:d,onClick(p,_){let E=f(p,_);E&&(M.click(E),d())},onHover(p,_){let E=f(p,_),y=n.canvas.getBoundingClientRect();n.canvas.style.cursor=E?"pointer":"",s.tip(E&&E.tip?E.tip:null,p-y.left,_-y.top),(E&&E.kind+E.id)!==(o&&o.kind+o.id)&&(o=E,M.hover&&(M.hover(E),d()))}}),M=t.build({stage:n,frame:s,orbit:m,invalidate:d,...e}),x=()=>n.fit(t.home&&t.home.dist||48);return x(),d(),{view:t.id,resize(){n.resize(),d()},keyAt:f,noteAt(p,_){let E=f(p,_);return E&&E.kind==="note"?E.id:null},pageAt(p){m.apply();let _=rs(n,p),E=n.canvas.getBoundingClientRect();return _&&{x:_.x+E.left,y:_.y+E.top}},mark(p,_){l=p instanceof Map?p:new Map(Object.entries(p||{})),s.mark(l.size?_||"needs attention":null),d()},update(p){M.update(p||{}),x(),d()},stat:()=>M.stat(),today:()=>M.today?M.today():null,turn(p){return p&&m.set(p),{yaw:m.yaw,pitch:m.pitch,dist:m.dist}},snapshot(){return h(),n.snapshot()},api:M.api||{},dispose(){a=!0,cancelAnimationFrame(r),m.dispose(),M.dispose&&M.dispose(),s.dispose(),n.dispose()}}}var sx=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],It=(i,t)=>`${i} ${t}${i===1?"":"s"}`,fe=(i,t)=>i.length>t?i.slice(0,t-1)+"\u2026":i,ci=i=>{let[,t,e]=i.split("-");return`${sx[+t-1]} ${+e}`},vo=(i,t)=>Math.round(Math.abs(Date.parse(t)-Date.parse(i))/864e5);function rx(i,t=18){let e=i.length,n=Math.PI*(3-Math.sqrt(5));return i.map((s,r)=>{let a=e>1?1-r/(e-1)*2:0,o=Math.sqrt(1-a*a),l=r*n;return{x:Math.cos(l)*o*t,y:a*t,z:Math.sin(l)*o*t,size:.5+Math.sqrt((s.inlinks||0)+(s.outlinks||0))*.35}})}var Au={id:"bodies",name:"Notes",hint:"Every note as a sphere",home:{yaw:.6,pitch:.3,dist:48,min:15,max:110},build({stage:i,frame:t,data:e,onOpen:n}){let s=e.nodes,r=rx(s),a=new ge(new Ce(1,20,14),new Ee({roughness:.5}),Math.max(s.length,1));a.count=s.length;let o=new Jt,l=new Pt;r.forEach((u,d)=>{o.makeScale(u.size,u.size,u.size).setPosition(u.x,u.y,u.z),a.setMatrixAt(d,o),a.setColorAt(d,l.setHSL((s[d].cluster||0)*.137%1,.6,.55))}),i.scene.add(a);let c=r.map((u,d)=>({at:[u.x,u.y,u.z],r:u.size,key:{kind:"note",id:s[d].id,tip:s[d].name}})),h=()=>It(s.length,"note");return t.stat(h()),{targets:()=>c,click:u=>n(u.id),update(){},stat:h}}};var Ru={source:"PDB 5F9R (Jiang et al., Science 351:867, 2016) and 1BNA (Drew et al., PNAS 78:2179, 1981); public domain",q:.55914,lo:[-59.037,-52.177,-45.243],radius:1.8,protein:8622,rna:[[1,23],[2,18],[3,14],[4,16],[5,14],[6,14],[7,15],[8,15],[9,15],[10,15],[11,15],[12,16],[13,15],[14,15],[15,13],[16,16],[17,17],[18,13],[19,15],[20,14],[21,14],[22,14],[23,14],[24,10],[25,14],[26,14],[27,21],[28,22],[29,17],[30,15],[31,15],[32,17],[33,16],[34,18],[35,15],[36,16],[37,19],[38,15],[39,13],[40,17],[41,15],[42,19],[43,20],[44,16],[45,17],[46,17],[47,20],[48,20],[49,18],[50,16],[51,15],[52,17],[53,14],[54,17],[55,18],[56,16],[57,16],[58,15],[59,18],[60,16],[61,17],[62,15],[63,15],[64,17],[65,16],[66,17],[67,16],[68,17],[69,16],[70,16],[71,15],[72,16],[73,16],[74,17],[75,20],[76,16],[77,20],[78,14],[79,15],[80,16],[81,17],[82,18],[83,19],[84,19],[85,19],[86,15],[87,14],[88,16],[89,14],[90,18],[91,19],[92,20],[93,14],[94,15],[95,18],[96,15],[97,17],[98,19],[99,22],[100,20],[101,16],[102,17],[103,14],[104,15],[105,17],[106,19],[107,22],[108,19],[109,17],[110,16],[111,16],[112,15],[113,16],[114,15],[115,20],[116,20]],target:[[1,15],[2,15],[3,16],[4,16],[5,16],[6,15],[7,16],[8,15],[9,14],[10,18],[11,19],[12,16],[13,16],[14,18],[15,15],[16,15],[17,16],[18,14],[19,16],[20,15],[21,15],[22,13],[23,16],[24,17],[25,14],[26,16],[27,14],[28,18],[29,17],[30,17]],other:[[12,21],[13,19],[14,18],[15,16],[16,18],[17,19],[18,13],[19,22],[20,19],[21,14],[22,14],[23,15],[24,14],[25,16],[26,15],[27,15],[28,16],[29,16],[30,22]],spacer:20,pam:[[10,21],[9,22],[8,23]],flank:[[7,24],[6,25],[5,26],[4,27],[3,28],[2,29],[1,30]],step:{turn:.62351,rise:3.2376},pair:[[9.699,0,-2.305,0,0],[10.839,.901,-2.582,0,0],[9.939,-1.059,-1.289,0,0],[8.473,.907,-1.868,0,0],[8,1.916,-2.762,0,0],[6.881,2.551,-2.001,0,0],[5.884,1.565,-1.789,0,0],[7.28,2.993,-.605,0,0],[7.569,4.393,-.583,0,0],[6.113,2.528,.278,0,0],[5.076,2.087,-.754,0,0],[4.225,.946,-.343,0,1],[2.882,1.115,-.303,0,1],[2.389,2.221,-.546,0,1],[2.101,.031,-.017,0,1],[2.619,-1.208,.254,0,1],[1.832,-2.138,.454,0,1],[4.007,-1.353,.26,0,1],[4.641,-2.674,.601,0,1],[4.803,-.254,-.061,0,1],[-9.607,1.703,2.313,1,0],[-10.67,2.703,2.57,1,0],[-9.986,.564,1.436,1,0],[-8.324,2.485,1.789,1,0],[-7.756,3.509,2.615,1,0],[-6.674,4.18,1.825,1,0],[-5.519,3.332,1.755,1,0],[-7.034,4.586,.4,1,0],[-6.674,5.949,.158,1,0],[-6.253,3.555,-.414,1,0],[-5.004,3.39,.428,1,0],[-4.379,2.059,.236,1,1],[-4.984,.831,.172,1,1],[-4.103,-.178,.07,1,1],[-2.905,.441,.079,1,1],[-1.572,-.063,.016,1,1],[-1.289,-1.392,-.053,1,1],[-.579,.825,.041,1,1],[-.854,2.124,.134,1,1],[-2.04,2.718,.212,1,1],[-3.03,1.798,.18,1,1]],tails:{near:{o:[46.898,-16.831,-6.652],x:[.205,-.031,.978],y:[-.292,-.956,.03],z:[.934,-.292,-.205],phase:1.8705},far:{o:[-33.927,-16.831,-6.652],x:[-.732,-.357,.58],y:[-.659,.585,-.472],z:[-.17,-.728,-.664],phase:1.8705}},atoms:"TxsjTBsjTB4lTR8kTBklSh0nSSAoSyAqTB4rRx8pSyIrTSMtTCUuSycuTyMsUCUrUScsTyYoUSkqTygnUSsmTSUxTygzUSczSyc0SSYzTys0US03UC43Ui4yVC8zVC4uUy47VS87VTE8VzQ/VTRBVjU7VTU4VTc3WDQ3WTVAWTZCXThCWjREWTdHXDRIWjpCWzxCXD5EWz1GWj5AWDw+Wz8+Vz48Xj9DX0BFYUJEYUJCYURGY0ZFZkdCY0hHZUZJYUhIZkNEaEBCaj9AakFFa0NGbEVFa0NJZj9BYT5AZjtCZDtEYzs9YTo8YjY6YTs6Xjo4YT46YDY+YDQ+XjI8XDM8XzE6Xyw4XTE2YDE1YjI1YS8zZDE0Yy8zXy0yYSsxYywwWyw4Wyo4WSk2Vyo2Wik6WSc1VyQ0WCI0ViUvWSkwVCM0UyE1UiAzUSIyUiE3UCI3VCI5TiI5UB0xThwyTR0zURsvVBswURstTRoxShkxSxg0SRg1SRgvRhgwRRgyRRguTRYzTRU1UBU4TxM0Txg3URo5VRk7UBk8TRk8TBs9TBc8Shs9SRc8SBk9Rho9VBk3Vxg2WBo1VxszVxY1Whs1XRoyXR41Xxw2Xx8zXBwtXx4tWh0rWB4tWR4vXxorYhsnYBomYxgrZRkqYx0nZB0kZh4jaB8lYh8jZx0haSAfZyAdahweayIfayQebSQdbyQdaiYgaCYhaCYkZiUgZSYlZCUhYyUkbCYabiYZcCgabyobbScWcigZdykXeCocdCcedS0Xdy4Wei4Wei4YdjAVdDETczMTdDARezAVfTEVfy8Ufi4Sgy0UhCsVhioVhS4ShjAUhjAWhzITgioXgygYgiUXgSUWgigbgCgbgyscgyQZgiEYgCAZfh8YhB8ZhyAZhyEXiB8afyEbfSEceiQafCEfeiEZdCMYeCAVeiETfCIUeyARfiISfSERdSAacx8edR4ecR4achwaciAfbx8jbiAjcyEjdiEjcyAmeCIkbx0kbhwpbBklax4oaB8sZx4qbCIqaCAuZCIvZSQuZh8xZhsxaR0yYiIvYCQvXiYyXiQuZig1YSU3YCc5YyM3YCU7ZCo3Ziw4ZS45aDQ5ajQ5ZzI9ZzY5aDg4aDo7Zzo2aDw1ajw0Zj40bzs9bjg+cDc/bDlAbUA8bUI7bUQ/a0M5aUM7aEY7aEE7ZkY9ZUI8ZUQ9cEg+bEk+cUo+dEk9dEc+dUo7bUpBbE5Aa0tFa0lGaE5AaFA/Z1JDalZCZ1hBbFdCblVCcVZCcVlCclVCaFlEZltFZ11DaV1CZVtHZ1xIZFlIZV9EZ2NEZ2VEZGJBZ2JGamVIa2dIZ2NLaGRNZ2NPZ2FPZ2RRbGNIbmRHb2ZFcGdFcGJHbmVDbmZBbmtBbWU/bWM/bWc9a2lDa21Fa29EZm1FZG1GZGxJYmhIY2pMbGxHbm1IcG5HcHBHbmxKbWxNamtMbmpPc25Ec3JCdGxCdmtEdmpGeGlHeWdFb3ZBa3I9aXE8Z3A9aGw9ZW0/bXRDbXZFb3lGa3ZHbHRJaXVHcXZGc3ZGdXpFdXRHdXhAdXxAdHc+dnU9dXM7c3I8c3A7dHA5cW87cXtAcH1AcYFCbXxAbHw+anw9aHo+Z3g9Z3g7Znc+cX5Ecn9GdIBFdYNFc35IcX9Lc39NdX1Ndn1Pd39QeHxQdn9FeIBEeIJCeYRCen5De31FfX5He3tGfX1Je3lIfXtKfnpMd4FAd4M+doU/doc+dYI8c4E8doA6dIVAcodBdItDcIdCboZBbIRCaoNAaIFCZ4E+dYhEeYxFeIdIeohJfYdJfYVLf4RKgYVJgIJMeolCfIpBfI5AfYg/foo9gIs+gow9hI0+d5I/dY49dY06d4w6c405dpBCdpJEeJVEdZFGc5BGcY9Jco1JdY5MdIpMepJEfZNEfpdCf5FEf5BHgZNEf5JJfJRAfJU9e5c9e5k8e5M7fpE7d5k/eZ0/dZlAc5c8cZY/cpY7cJQ+cJQ8b5M6fp9De5tGfJ1Ifp5Iep9IgJxAgaA+gpo/hZc/hZc9hpZBfp49fZ87fKI8faM6e546ep83d583dp04d6A1e6I+e6Q/fag/eaRBd6NBeaZCdaNDgaZAhac+g6RCgqVFgKZFg6RGf6ZHgqRJgKVJg6U6h6g5gqQ4g6Q2g6k5hKw4h645gq03f604f6o5fq45ha08hq4+i64/ha5Ag7A/hLI/hbNAgrQ+iao+iqY/jaVBjKREjKdFjKo7jqo5j6w6ka05jao3jq47j7A7kbA+krE+jbI8jLM6irU7i7c7ibk8kK4/ka5Bk6xBlqxBkaxGjq9Ek6pAlKg/kqY9laZBl6RBl6M/mKRDlac7lKY5lKM5k6I3lqc3mac3maU5mqg2lp09mJ85mqA6lJ8+k5pAkqBCkZ9Ekp5Ijp1Hj51IkJw+jpo+j5g9j5Y9jJs9ipxBiZ49iZ5Ch58/h59BkZk7k5c6lJY7lJM7lJg4kpk2kZs2kpk0kJw0kJszlZc9lZRAlpJBmJdAmpg/nJpBmptCm55Ak5VBkpNCkI9CkJVDkJZGkZhGjZdGkYw8jpA7jI87ipA9ipI+iI89lI49lo08l4w/mYs/l447mZA8m5E6m5A4m5M7loxBl4xDmYlFlY1Fk4tFlohClYRBlYFClIBEln9AlH5Fln1BlXxDmoU/n4dAnIY7moU5mIU6m4c3ooQ/o4c+ooc8pII/poJAo4A/pYg/poo+p4k8p4s6qItAqY0/q45BrJBArI1CqIc7qYY5qIc1qoQ5q4M3rIA3rH85rH81pYY4o4Y2oYk2oIk1oYQ2o4I1pYI0ooA2oYw5o482oY07n482n5E0opU0nZIzn5Q4oJY5oZY7opQ7npg5n5s5n5w7oJw4oJ47oJ45opc9o5c/n5VBo5lApppAqJlBqpk/p5dCo5RCopJEn5FHpJBEppFFqJBGq5FHq5FJqpBLrZJJnpdInphGophKpJdNppZKppZOqJZMmZZImZhJmJlHmJRKmpNLnJRLmZpLmJxLmJ1Nl5tPlp9NlpxRm55Kn6FGnqJLm6RNnKFPmaVPm6FRmaNRn55HoZ1Fo51GpZxFpJ9Hpp9Ip55KpZ1Lp6JJpaNLpqJNo6RKqZ5Lp5xRq5tNrJpLrJlPrplLqZ9QqaFTpqFVqqNTqqRQqqVVo6NSoKBUoaRQo6ZQo6dRo6dNop5SoJxSoZtVn5tWoZpQo5xVpJtYopxbp5tYp5taqJpWop9ZoaFan6BbnqBdoaNZnZ9Zm55ZmZxdmp5XlZ5Yl5pXk51ZlZlYk5pYkZlZnJhcnZlenJhgnpdbnJNZnpZWm5NWnZRVnptfn5xhnJxkoZ1hpJxipJxkop1mpZplnJ9imqBjl59lmqNimKRkmKdjlqhllqplmJ1hlphflJ1fkaBhlKFekaNhlKNekqdgl5VjlpJgmJVllpdnlpllkJVgkJdgj5JjjpRkkZFljpRfjJZdiplfi5RbipZaiZNdi5hYiJtliJVlhJNjiJFjg5Fiho9ig45hjZxli6BkkJxlkptpkZdpkphriaBfiKJfjZ5djKBbjaJbjZ9YiJ5ghZ5ghaBihKJihJxhhJpfgppegZhdgJZef5dgf5Rdhp9khaFmhaVmh6BohqJrh6Fth6NviKJxiKRliaZkh6pjjKZjjahijapkjqxkj65mhahfgqpfhaZch6VZiKlbgKdifqtkf6VkfKZlfqNigqtng61mga9ng6pqgqhrgKdqhKdsha1mhq9lg7Bhia9kirFjhbNjg7VhhbZghbhfgrZig7hkgLVkibZeibVbiLNbjLVfjLZii7dijbRjirZajrRWirdWirdTirlRirhPirpNi7FXjK9Wja9Ui7BSjK1Yjq1Tj6xRi6pRkatQkqpOkalNk6xNjKtNiqpMiaZMiqtJiKtIhqxJiKxFjaRLjaNOi6FOkKRLkaRIk6RIlaZJl6ZJmKVHmKhKjaRQjKNSiaFTjqRUkKRUkaVWkaJUiaVRhqVRg6FRhadQhqlSgqdRhaxShqJOhaBMhJxOh6BKhJ1IiJxJhJtHiJpIhZdGiJtQhplTi5tRj5tQjJlOhp1UhJ1WgZpVhJ9XgZ1Tf51Sf5pRfZlRfp9QfqFRfaNPfKFTgJpPgZdOgJNPg5dMgpZSgpRUf5FVhJRVg5JZhpFXg5BbhY9afJVWeZNVe5hXfJlZe5tafZ1beZRQeJBPeZVOeJhPeJRMeJlNfI5Pe4pQf45OgItNgotMg4lLhYlKeY5YfYtWf4pVf4dUgItUgYdTgopTgohSdo1VdY9WdI5ZdI9ac49Uco1Tco1RcI5PbopPbY5Ocotbb4pYbIhbaotca4VdaYdgbYZhaohjbIdjaIlaZopaZIlbYolbZYpXZ4xWaYtVZo5Vao1UZ5BUao9TY4dfX4hhZIVgZoNfZ4JhZIFeYophYYxiYI5hYZBgYo1kZItlYY9mZYxnXY5hXJBfXJJhXJJjWY9fWY1dV41cVY5eVoxaXJRfXJdgX5hgYJdfX5liYppmYJpnYpxiYJ5iYJ5kX59gZJlmZZlpZ5tqaZtqZpdqZZVqYpVqZZRnZp1qZ59rZ55vZqJraKRraaRtaKVpa55ubJ1wa6Fzbp5wb55tbJ9saZ5zZ591aZ93a6B3ZZ11aJ15aZ17bZx8aJx9a5p5bZh5cJZ7b5l4cZh3bJd9bZZ/a5WAaZaAbpiBa5OBaZGCaJOEZpOEao+DaI2EbI6BapSGaZWIZ5eHZZeJa5eJZ5mGZpuGY5qFYZqGZ52EY5iDYZiCXpaEYpZ/ZJd8Ypp9YJOHX5SJXZSKYpGIYJaKX5iMW5mMYZqMY5mOYJyOZZqPXZqJV5qIW5yFWZ6EWp+CXJ+BWKGCWpeGWJWGVZSIWZOFWJKDWZCCVpGEWJSKV5ONVpWOVJWPWZOOWJKRW5GOVpeNVZmOUZqNVpyNVZ6NV6CMWKCLVqKNUpmKUJiJT5aKTJaKUZiGUpaGUpqFUJSKT5KLTJKOUJCLT5SPTpWRTJeRSpaTUJaTTJiQSpqPSJmORpqOS5yOTZ6PTqCOT6CMTaKPSJeNRpaLQ5WNR5SKRZKJQ5SHRpCHRZKRSJKURY+QRJOURJSXQ5KYRJKbQ5aYQpCXQo6YRIyZRIubQIyWPouWPI2WPI+VOo2YRoyYSIuYSoyXS4uWSIiYSYeZS4iaSYWaTY+XT42YUI2aTpGYTJGaSpCaUY2WU4uXVYyWVo2UU4mWUYeWVYeXUIWVV42YW4qYWpCZWJKaVpGbWJSYXY2WX4yWYoqYYY2UYI2aYY2cZI2cZYydYYudYougZY6aZ46ZaYyYa4yYZ4uXaYmVaoqTaIuRZ4eVaIWTZoaXbImTbYqQbYeOcImRcoqPcYyOdImOa4qNaomKbIeHaIuKbYuIb4uGcYmHc4qHcI2GcYeHcoWHcYKHcoCHdIWJb4OIbYGIa3+Fa4GKa4OCbYOAbIN+aYWCZ4WDZYOCZ4aFb4OBcYN/coGAdIF+c4WAdYZ+cn+Bc32BcXt9cnuDdXp+dXl8dHd8dXV8eHl7cnd8cHV8bnV7bXd6cHR+cXF/cXCBcG99bHN7anN6aXZ9aXB7ZnB6Z3Z5ZXh6Y3h+ZHh4Y3R8YnOCYHF9X3B+ZXJ/Z3KCZ3WDZ3WFaXGBZ3eCZ3mDZXqGaHuBY3mDYHmEX3mIX3iCXHiDW3qDWneBYXaGYXSIYXaMYnKIZXiNZHqNY3uPaHiMaXaLaHSKa3aLY3uLYn2LX3+OYX+JY4GIY4KLZoCIXHuOW3qSWnmMW3eMWXqKWXWOX3iSYHmWYXaSYX6VX3+ZYoCUZICTZn6VZ3+WZnyUXX+WWH2XWYKXWoSYWoSaXYWXWX2aWHubVXubVX2cWXqdWnyeW32cVHqbUXqbUHuYTnuYUnuXUnqSVHmSU36TUn+RUICQToCST4GOUHmRUHeQUnqNTnaPU3aMUneIUniGVXSJUHaITnaHTHmHS3mGTHSHSnSFSnWESXKFTXqJTHyKS4CIS4KHTYOGToSESYSHSYaKSIiKSYSMT4OIUYSIU4KHVIOGUoWLUoCIVH6HVX2DUX2BUn9/U399Tn2BUoR/VYR/VoR9UoaBT4eATYZ/T4mBWYOBXIB/WoODWYCFWoWFWoCHWX19V3t+V4F4WYN2VIN4VIR2VYZ2VIJ0WoR5XIV5XoR4YIV3XYd7W4h8XoF5YIB4YH92YX11YX56YX99YX1/ZIB8Xn91Xn5yXXxyXXtwXHt0Wnl0V3tyWnh3XHd7XnZ3Vnh0VHhzUXV1U3ZxVXZvUXZvUnl2UHl4TXl3TXl1UXt6U3x4U3x2THl5SXl5SHt7SXp9SHd5Rnd4RXl4RXV3Rnx7Q319QX5+RYB8Qnt8QHp8P3l+PXl/P3h6QXiAQHiCQHqGQnWDQXWFQn6EQICGRX+DR32DSX6DR3uEPYGCO4CBOYGBPoN/QIWAQYZ+QIWCQ4d+QoeCQ4iAO36COXyBNX1/N3yENnqENXqGNXmCOXx9N317N3h7OX15NoB3OX90NHt5Mnl4NHd3NHV2MHl3NXh1N3dzOXd0Onl1NnhxNnZvNXRvNXJvM3RxO3ZzPXZzPXlwPnRyQXNyQnR0QnJxQHlzQXtyRHxyRX10QH5yRntxSHtxSX1wSX1uSXhxS35xTYBwT39wUH5xTIJxSoNxSoZySYNvUYBuU4NrVH1sVn1tVXlqWXlsVoNtWYZoWYZuW4dyV4lwWYJqW4FoWYFlWoJjXH9oWn1pV4BmVYBjVYRkU39kVINgVIVfUYZfUIhfVYZdVIRbUoJcVYRZT4RgTYVgS4dkS4NgS4FiTIJeToZkTodnTIppUYdoUIdsUopqUIlvU4xtUotvUoxxTotlSY5nTo9kUJBlUZBnUpFjR4xjRYtlRItmRothR41fSY5fRo1dRodoRIhsR4VoR4NmSYJmRYNlR4prSIxtRI5vSo1tS49vSpFuSo5xQ5BrQY9rP5BsQ5JoRZRoR5NpRZVmQY1qP4tqPIttP4loPYdoPYZqPIdmP4lwPop0QYdxQod0Q4V1RYl0QI9zPpBzPZF1QpBzPZBxO5FwOZBxN5ByOpJuOY1xOItyOIt1Not2OYlxOox5OY96OZB8PIt6Po16PIl5P458OZF4OZN4PZR4O5d4PZl4Ppl6QJp7PJt3Opx4OZt6OZ13PZd8Ppd/QZZ/Q5h/PZaAQZR+RJN/RZN8RZJ7RJF/R5V8SJV5TJV4R5d4S5d7Tph7T5Z8Upd8Tpp9TJx8Spx7TZ59T5R9UJN+U5F9TpGATZGCSpKATI+DUJF6UZB4U5J3VJB1T5B3TY54S413Tox6Sot3TYp6S4p5U5R3VZV2WZV2VJh1VZt4UZt3WJV7XJJ7V5V+WY56W453XY13V4x6WpB2W5BzXZF0X5BzWZFyXpN1YJR1ZJN2YJd2Xpd4Xpd6XJh3YpB6Y455ZY55YI98YY5+YpB/X4x/Yo13Y4t1ZotzYYp0YItyZI5zZpByaJBzapByZZJxaJB1apF3a453bo54apJ5aox3a4p4bYd2aYl5aod7aId3aIV8bIlyb4lxcIdxa4pvcItyc4tydYx1c45ydI9vdpFwdY1uc4h1dId3eIh4c4V3dIR5eIZ1e4V0foh0e4Nzeolze4tye45ze5ByeolufY1ufYhteZB3e5F4fZB5eI95fJN3fpR4fpZ6fZh5f5V2fpZ8fpd+fJl+eph/gJl+gZqAgph9fJt9ep19e555e59+eaF+eqN9d6F/d556d593d6J3d6N1dJ52dJ90cqB4eKN5eKZ4e6l4d6d7fKV4f6V4gKh0gKN4gKJ6g6R4gKN9fqVzfqZxe6VweqRxgKRwf6RtgKJwe6VteaVseKJpeKdrfp1rfqBoepxse5tufJhtfZdveJpvd5tteJ1se5drfJVqfpVqgJRre5Roe5JnepBpepFlf5dpg5hqgplmgJlkgplshJpuhpdwg5xvgpRxhZFxgJJxgJByhpBsipBthpBphI9ohIxpgotriZRti5VujpNxi5duiphrjZhviptripRyipN0i5B0jZB1iJN2io9zi4xyjYxyj4tziYtwh4pxholvhIdwg4ZsgYVvkZBtlZJtlo9ql5JsmJFrmpFqk5F1k493lY93kpR2kpZ0lJVykZd0kY53kox5lYl6j4t6jY17i4x8i4l8iY19k4p2lIh1mId2k4hyl4VwlINul4Nvmox0nYp3mo50nY90n45znZF1oJB0oJF1m4x7m4p8nYl9mY59mZB8l5J9lpF/l5R9mYZ8nIJ8l4R8lYZ+loeAk4Z9nIV5nYR3oIR4oYN5nYV1n4Rzn4Fzn4VxoId5o4d6pYV9o4p6oot4pYt7oYZ+oYWAo4GBnoWBnoaDn4SFnoiEoIF+oX5+pHx+n318n3t8n3l+nXp6pH98p397qX99qn59p4F5poF3p4J1poJyp4RxqIF+qoKBqX+Cq36DqYSCp3+Dp32EqXmFpHyFo36GoX2GpH2JqHqBqXiArXaBqXd9qnZ8pnZ9rXqAr3qAsHqCsnmDsH1/sH18sX97sX94tHx4sn11r3uEr3qHsXeIrnyIrnyLrH2Nqn2MrX6PrXSIrnGIqnSJqXeLp3aMpnSNpniMrXKFrXF/q2+CqW6Ep22Dqm2GsnN/snF9s3J7tHSAtXKCsnKDsm99s217sWx4tGt8smp+sWuAsm2Br2qBr256rW15rG93qm92qmx6rXR2rnZ3rXh2rnl0rntzq3x3rH90r3JzsHFxrnBwrnBtsnBxrG9xq21wqG5wp25uqmtxqGlwqGdxqWdzpmVxqHBxpXFxo3NupXB2onR0pHF4p3duqHlrqHlwpXtyp3h0pHt0pnl2pXp2qnRpqXJlrXRprnZqr3dor3dssHlosHltsXprqXBpqG5no25oqGxpqGlop2lmqWhppW5koWxjn2xiom9hpHJgpHNeo3JcpXVdompjoGhjoGdloGVmoWZhpGVioGhnoGhqnmlrnmltomhrpGZqo2NrpWFqpF9rnGpqmmtrm21tmm5vmWptmGhrl2hpl2ZsnW5tnnBunHJsnnRunXhqn3lvm3xvn31tmn5vnn9tmoJtoHVqoXVoo3RnnnJnnHFmmHJlmXRol3Volndll3Zrk3dqlXltkXhqk3pukXpsj3ttmnplmXpgm3xlm31om35kmH5onXhinnhgnHVdoHhgoXpgoHxfo3thm3FgmXFfmHNemG9flW9elG5hkW5glW5jk25lknJllW1nkG9njnBnj3Bri29ni21pjHNqjHRtjXJwinZtindviHlvh3ptiHtxinFuiW9wjG1wjGxyh21vhmtwhGpvg2ttg2hwjWxuj2tukmtxkGpsjmlqj2hokGpnj2ZnkW5vk29wk3JvlHZymXVylXdzmHdzkG13kW15jXF3jnV2inR2jnd2inZ1jHh1i3p1kGx2kGl3lGd5j2d1j2V2jmN0j2B1jmB3lGp2l2l2mmp5mGpznGhznmh0nmxzn2p0mW56mW9+mXF5lnJ5mnF3lnV5lG1/l22Dkmx/kWyBjmuBjWuEi2qEl2qAnGmEmGaBmGZ+l2h+m2uAnmyBnm6Cn2+Dn21+n2p9oW5+oGt6m2+Cm3GEm3GGnHKImXSBlnWBm3aCmW6Jm22Km22Ml22Jl2qIlGmIk2qJlGeHnWyJn2uKoW2Lo2yLoGmIoXGLoHKNnnKNonOJo3KHo3SEpXaGonOPoXSRn3eRnneSo3STonWVoHSWo3aXoHiPn3qOnXqNm3mOnHuLmnuKl36LmniJmXeKnHeIl3qMlXqOk3uMkXqLlXuQk36MkX+Lj36HkoKLj4OKkIaKkoeKjoeJk36Hk32EkHqClnyEmH6Dmn2Dl4CCknmGkHeGjniGjHeFkXWIkXOHlHOGkXGJjXqHi3uHiHuEin2JiH2Ki3yMi32Ei36BiXx+jX+BjYKCj4SBjoaCkIiAjHh/iHZ9jXZ/jnR9kHN9jHJ+hnWBhHaBgnaAhXSEhnKEiHGFhHCEgnuAgnx8gn2Cgn2Egn+FgYGEgoODhIODgYSChXp6hX13g3l4gnZ5gHZ3f3d1f3R4h356ioB6i4J6hoJ6hoR5hoR3hoZ6jH55j312j3x7knt7k3t5k319kYB3koF0kYBwlH90ln92loB4mH11joFzjIFxjoRvioFxhIBygn5vgX1zjYJsjYNqioVrjoFoiYhnhYdmiopmjYtnjYtpj4tqi4xqiIVkh4Bih4RgiIZfhYhehYhchIdag4VbhIhYhH9lgX5khH9ogoBph39pgHxlfntlenxlfnhlf3hogXhpfXhqgndrfXdsgHdtfH1oen5pd4Fpe35sfYBsfoBueYNldoRje4RkfYVlfYZngIVkdoFkdIBicoFjcIFic4JmcYNnb4dncYNqcoFqc4dlc4plcYlhdYpkd4pmdY1jeYtlcI9ha41jbI5lb41mb5VdbZBaapNZZpFaZ5NZa5ZgbpdhbplhaZZiZ5VhZpNgaJFgZJJgb5ZicZdkdJpicpZmcpNlcZZoc5Jnc5ZgdZdedZtcdZVcd5Ndd5FdeZNfeZBeepFfcZtbcZ9cbptbbZ1abp1Xap1ZcZ1fcZ9gdKBgdKJgdp9geKBgeqJdep5heZ1je5tkfZtie5pmd6FZd6VYdp9YdqBVd55Tc6FUdKNac6ZadKhcdKpbcKVbbqdbbKdcbqlaa6lbbKpadaddd6hfealeeaxed6dhfKlbfaxZfqZagKdYgKNbeqpYeatWea9Wd6pVd6hTdadSeahRdq5Zd7Fad7Rac7BbcrJccLFebrBebLFdbLNdaq9cebBbe7JcfbJaf7NbfbBefbNUfrNSgK9Vga5Xg7BXhLFWhbBZebhQd7NSdrRVc7NVcrJTcrRXe7hUfLpUfrtTfr1TfLtXerpYeLpXerpaf7lSgbpQgblOgbtMg7hRhbtVg7dWhbtXg7dYhLlZgLZLfLZMg7NLhLJNhbNJhrJOh7NKirJNfbdIerhIebZHd7VHerpGfblEfrhGerRFebJEdq9Ge7FDfbBEf7FFfa1Ega9Gf6xFga1GeK5Kda5Ne61LfLBOf61NcrNLcLNMdbZNc7NJcbJHbq9HcrNEcLRDcLVBbrNDcaxHcapJcqhJc6pFc6xDcqtBda1DcatLcapNb6ZOcaxQb61Qba1Sa65TbLBVbrBWarFVbalNa6hNaqRLaKlMaKtOZaxOZaxMZKxQbKZJbaRHbqBIbqVFbaZDbqZBbac/a6U+cZ5NdKJMdaRKdqFNd6VLbqBQa5xQbKJRbqNTbKVVaqRWbadVa59Nap1La5tKaplKaZ5JbZtKb5lJb5VLcptGc5hIdJxFb5hNcJdPbZRRcZhScZZUdJhVb5ZVaZZRZpNQZ5hRaZpSZZhTaJVNZ5NLaZBLaJRIZJNGZ5FFYpJEZpBEY5BDZZBLZY1LYI1KZIxOY4pOYolRYoZRYYVTYIZVYINSY4tIYYpHYIdJYohFZIpDYIdDZYhBW4hJWYlJWotIXItHWoNKWX5GWn9MWIBNWIFPVn5MVYFQVH5NUYBRUoJHUoVIUoVKUolHU4dLU4lKU4tLWIRBWYI9WYdBWYg+V4lCW4JBXYBAX4M+XoI5Yn46YXw7X309Yog4Yoo6YYg8ZIs7YYM0YYIyXoQwYYAxYYMtYIQrX4IqYIIoYYYqYIcoYYonY4kmZYslZI0lZ4okXoArXX4qX3wpX3snYXwqY3oqY3ksZXcsZXspZHwlZn8nYXgtYXcwX3YwXXcwYngyYnc0YHMxXnIxXXI0W3E1Xm8xYW8yYmwyYWszYmg0Y2czYWc2XnQ4W3c6YHQ5YXA6Y3I3Ym46ZG83ZG04XXg2XHs3WHk1XXw1WHw3VX03VX83UoA2VHs5U388Vnw9VH8+V3o9WXk/WXtBVoE3VoM4VoQzWIU4V4c4Wok3Woc0U4Y1UoczU4s1UIczT4k1T4UzVIsxVY0xU48wUo8uV40vWYwwW4wuXYsvX4wwX48vYYswU5EyUZMxUpUvUZUtUZUzVZUvVpYtV5QsV5IsWJguV5ovWZUrW5MpXpQqX5QoWpMnWZEmWo4nXI4nWY0oXpUsYJcsYZMvYJkuXpotXZwuW54uX50wZJUuZZczaJUvaZQsapMxY5M2Z5I4YpE3YJA1YZE5X442Zpc9ZJc9Z5s5apk3Z5dBZJpDaZdDa5ZBZJ1AYp0+YJ4/Zp8/aaBCap4/a6BDbJ9Ba509bp5BbZw9b50/Ypw8X5w7XJk6YJw4Yps1X5k9XZY+WZU+X5VAXpE/XJNDXY9AW5BDW45CWphAU5g+V5pCWJlFWJdGVpZGWZZHVZo6Vpk4VJg3Vp06VJ48Vp4+WJ0+VJ9AWJg4V5Q2VpM1W5Y1W5QzXJg1V5M4U5I8WJA7V408Wo86UpA5T486T4w7To84S484S5A6So43UI8+UI1ATopBUI9CUpBCU5JEVJFGVZJITI1ASYxASYhASYo8SYg7SoQ7SYg4T4U8UYY8UYg+S39DTYVFSYJBR4FAR30/Q4E+QYM9QYU9P4I8SX89Sn07THo8S345TYA5TndBU3pDUHxGVHhFUXtIU3lISnhESXdCSHRCSHlGSnpIR3dHSXpKSHhARnY+SHU9R3M8RXg9Q3k+Qns8Qnw6QHw9SnU9THM7THE8TW87TnQ6UHU8UnY8VHU9VXM7VHM5V3I8TG9ASmtBTW9DT3FCUXFFU25ESG9BRWw+Q29CQ3FARHFEQ2pBQmk/P2s+QmZARGVARWRCRWQ+P2g8PGQ9PWg4Pmo3Pmw4P2o1P244QGw0QG41OGI5NGU8M2Q9M2I+OGA8OF46Nl05Nlw3OVw8NF46Ml44MF80L146MFw8MF0+MFo8MmQ2MGU3LWY2LGM2LGc4OGQyOGcyOmczOGMwNmEwNGIxN2gwOGowN24yNmsuN2orOWsqNmgrNW02N204MWs1MG40MHA1MG4yN285OW87OG4+Nmw9OXE8O3I6O3U6PXY4Png4OG5AOG1CN29EOHFEOWtDOWpFOmlBNW9FN25JMnBIMHFGLnBHMHNGNXBOOHVNOHZLNnVJOXBQOG9SNW9VOm5TNnJTNXRVMXZUNnZWOHVYOnNXOHVaO3NZOnNbMnRRMHRQLnRRLnJSMHNOLnNMLHVRKnVSKXNRJ3JSKXdTKnlVKXtVKnhXKHFNKG1OKHJLJnNKJXZLJnRHLGxRK2pRL21OMGpNMGpLMWlPMWdKMmdOMmZMM2RLLG1TK21VK29XLnBYLHNaMHJbJ21UJGxUI2hTI25SInBUInBWIXJSIXJXIXRUIXRWIHZXJmlRJmdQJWNSKGVNJ2RLKmNOJ2JKKmFNKGBLKWRUJ2FXK2RVLGJXLGZXJGVZIWFZI2daIWZcJWhcIWRWH2NVHl9UHmRTImBTI11SIlpUJV1RJ1pRJFtYIltaIllbJlxaIF1ZHl1bHFxZGlxaHV9cG2BdG15fHGJfHFtXG1pWGldWGVZVG1pTGVpSHVhSG1ZYG1NZG1NbG1FcHVJYHVJVG1FUHFFRGlBQG1VdGFRgFlVgG1dhGlZjHVhgFFBjFVBlFU5fFU5dFEtcFUtZFElYElFjEFFmD09mDU9lD1RmD05oDUxpDk5tDkpqDUhrD0lnCk5sCU9uCE1wCEtvBlBtB1FrBVJvCE1yB0t0BUpzBUh0B0x2BEtyAUpxAkluAEhtA0ptBElqBEdqBkZrBktpBEZoBENnBkNlB0FlAkJmB0VkCURiCkdiCUljCERgDEdiDUldEEhhEEZgDkVhDE5eDlJfCU9eD1FcEFNbDVVcEVNYEVdcEFldEFpZElteEVxgEVpiE15hDVtbC11ZCV1aCV9cDGBWDWJVDGRXDmVXCmRYCmZZC2ZcDGhdB2daC2RdDWNfD2RfEGVgDGFfCmBhCl1hClxgCV1kE2RcFGZdFWdeFGNaFGFZFGBXFF1WFF1UEmhcEmpcE21fEWxaEGpfEGtiEmtkEmxlDmljE2ljFWhlF2pkGGtmFmZkFWRjGGVnE2NlF2tiGnBkGW1eG29eGmtdFnJjFnRnE3NiFHRgFHZfE3JeFXBnFXBqGHBrGHFtFG5rFG1tEnBvEmtuHG5rH29rHGtsGmpuGmhvGmxwIG5mInFkH2xkIGpkIGhiIWlmIGZiIWZmIWVkH3JmH3VlIHZoIHhoHXZkIHVqIHZsI3duHnVuHHRtHXdwI3NtJXJuJnFqJXBwI3ByI3JzIm5yKXJtK3FrK29qK25oLXFtLnRuLnZsL3htLnlvK3lvL3twKm1sKmtrKGptKGpvLGlrJmhsJWVuJWNsImhtIGdvImttJWRwJWFxIWFxJmFzJV50JWJ1I11wIVxwHVxyIVlvH1hvIlltIFx0H1x3Hl93HF54IVx5H2B2HWN2GWN0H2V1IGZ3IWh2Iml0Imp4GWFwGmBuGF5sGV9qGVxsGF5zFlx0FV52E112F1p1Fl93FmB5FWN5E2R6GGB7FmR3FWd3E2d0E2l0F2h2GGp4Fmp6Gmt4E2VzEWVxDWRxE2RvEWRtEGZrEWFsD2VpD2FqDmNpDWJnDl9yDGB0CmBzD11xDVpuEVxtDVlsEVtrD1pqDWB2DGF4CmN4CWR5DWF6C2V2C2d2CWh0B2l0DWl2CGZwBmRwBGRwCWZuCmhtB2ZsCWttBWBwAl5yB15vCF5sBl9qBV1pBmFqBV13A1x4A2F3A2J6B1l2Clp5CFh0B1hyBFhyCFdwA1hvB1duBVdtB1d6CFZ8DFZ9B1R+C1R6DVN5DlN3DFN1DlB6DlB9EFN2EVNzElFzE1B0ElZzElZwEVd1ElFwFE9vFU9tE1BrEkxvF1BtGFFrGU9qG05rGlNsGVVuG1RpF1ZtGk1mHE5kG01iGEtlGUlkHU9kH1BiIVFiI1FhIlJlJFNlJFNoIlNpJFZlJldmJFdiJlNpJ1JrKFRsKVZrKVBrKFRvKVZwJ1pxK1ZxLFhzLVpyLVd1KVpuKVxtKVxqKlppK15uKV5pK19lLWBmJ2BmJGBmI2FoI19kIWBpIV5lIF9nK11jLl5iL2JhLlxgLllhL1ljLlhfLGFfLGNeKmRiKmNcLGdfK2lhK2tfK2tdLWljLGtkKm1gK3JgJ3BfJm5eI29eJm5bLXFgL3NiL3ZgL3diL3ZeL3hdLXxeMXZaMHpZKXpeKX1hJ3heJHlfI3tdJHlhIXxeInpiIHxgHn1hKntlLH1lLH5mK3lnKHVlJ3dpJnRmLnxkMH5jL4JjMn1iM3tjM3tlNHphLoBgLIJfKoNhKoVhK4FdLYBbLH9ZL4NbKYJiJ4NkKIRmJ4VnJYFkKoNnK4RoLYdoLYhpLYNqLYdlLolkLI1lMIhiModjMYthNIZhK4piKYxhJo5jKIxfKIleKo1dJohfJYtmIotmIYxnJY1oIopjH4piH4hhH4hfH4xhHY1fG45gHIteHYdiHYRhG4NjGoZfGIZdGYZaGIZZFoldG4haHIhYHYVVHopYHoRZIIJYHn5WIYFaGn5ZGX9WGH1VGH9bGX5dGXtdGX9fGYFVGIFTG4BRGIRTFoVRFoNPFodRGH9PGH1NG35KFnxMF3pLF3tIF31HGXlHGIFLGYNJHINJHYRHF4VJFYRJE4ZJFIhKEYZIH4RMI4NMH4VOHodPHIdOHohRIIBLIn5LJn5JIXxKIHtIH3lHH3dJIHhFJ4JGKYJGJIFDI4BBIX9DI38/JoRHJohKJYlIKIlLI4tIKINMKYFOK4BNLYBOJ4BPJYFRJH5RJoJTLX1KMX1JK3tIKnpJLXdKKnhNLoBIMIJHNINJL4RFMoVCModFMINLMoRNNoNPMIVPL4dOMYVRLYhQM4BONH5POH5OM3xQNHpQMXxSNn5LN31JO39KNn1HOH1FOHpFN31DOYFKOoNKPoNNOYZKOIZIO4hLPIJRP4BSOoJTOoRVOIZTOINXQ3xOPXpOPHlQP3hOQH5LQn5JRoBJQX9HQX1FP3xFQX9DRYNMRoRPRYJQRIZLRIZJQoVIRoZHQYVGRYZFQ4ZESIVQSIVSSYlVS4NTTIRVSoRXSIJXS4VZSolRS4tRR41QTIxPTY9PTZBNTZBRSY5UR5BURpFTRJJSR5FXSJNRR5RPRpNNRJRMSZZPR5FNRpBLQ49LQY9KR45KSo5JS4xJSotGQ45NQI1OPY9OQIxRQopRPotRQolTQJFPPpNQO5VNQJVRP5dSQJlTQJlWQppSP5RMPpVJO5RHQJZIQJdFP5VDQJNEP5ZCO5BHN49HPI1IP41HPoxEQYxDQYtAP4o/Q4tANpFMNZRMM5RNNpBON41RNYxNNpVKNZhKMphJMZlJNplJMpZHL5VGK5VIL5NELZNDMJFFLpRKLJNMLJRQLZBNLY9KK49JLo1KK41HLotJLIpFLZdOLphQK5pQK5tSMJpPKppPJ5tPJJpSJptNJZlMJ5hKI5hMJZZKI5ZKJpZVJJVXJZNSI5FOIZVQKJdWKZZYKplZK5pYKpRZKplbK5tdKptfLJ1hLJ9gLJ1jL51dMp1cNZpeM6BdNaBdNqBbNqBfMpxhM5piMpdiNJZiMZtlMJdhMJVgMpJeLZJeLJVhMpZcNJVaNpRbN5NaNJdYMpdXMZVVNJRUN5ZdOZVeOZJfO5FfOpdgOplfPZpgPpxgPZ5fN5JhN49iN4tgNY9jNZFlNpBnN45nN5JpOIpaNI5aMoxYNItWMopaOY5aPI5ZPYxbP4taPZBYPYxdP4tfQIdfPoxhPIhePIVePIZaOYRePoJbP4FZP39ZP35bQoJZP35XP3tXQHpVQXtUPHpWO3tbOHtYOXtdNnxaN3xcNnxeQXdWQ3ZVQnNUQHNWRXZWRHVYRnhWQnJSQXBRP3JPP25OPWpNP25KQnFLQnRKPXJHQHZIPXVGPndGOWlMOWdKO2dJOGZJOGRIN2NEOGFJOWFLPGFLPV9KPmBHP1xIMmhDMmpFMGRFMGJGLmFHMWBDMWpALmxBLWtDMGw8Lm5AK29BKW4/J25ALHJBKXNCKnZBKHdCKHlCKntCJnpDKm49KG07Jmo7KW05J2dAJWZAKmU+KmI+KWI7K2E/J2hCJmlEIWhDJ2pGKWlHJWtIKmpJI2xCIXA/IW9EHG9EHnNEIW0+IW47IGw5H204IWo5IGg4HWY6ImY3JGc3IGQ1JmQ2HGg3GWU2GmQ0GGk3FmQ3E2I0EmQ1FWA3FVw1EV42E2EyEWIwD2ExDWMxEWAuE2EsE2AqFWEoFWAmDl8yDF8zCmE2DFw0CVs1B1wzCFwxBVw0DWI5DmQ5DGY5EGE7EF88EGU4EGg4EWk6Ems6Emc8E2g+Fmc+FmU8EmdAF2g/GWVCG2tCG2s+HWVBHmNDHWJHIWFAIWFFIF9AHmZGHWdIG2dJGmdLHmtLH2pNHm5KF2dIFmVJFWRLFWhGFmtFFWxGF2tEF2NHFmBIFl5LGF9GFl5EFVxEFmBCE1xCFF9AE11AGGBRHWBNIWBMHlxMFmRQFGNQE2NSFmdQGGhRGGhUGmlVGmlYE2JOEGFOEGBKD2NODGJOD11MD1xKDVpLDFlKEVpKEFpGEldHDFtNCVpOCldPC1dRCVVOCVNPDFFRB1FODVJND1JNEVRNElVLEFBLElRPFFZPFlVOGFVQFFdSEVlSEldVF1VMG1hLGFNIF1FIFlBFFlJEFVJBFlBAFFRAH1VMIVROI1VPJVVOIlZRI1lIJFdEJlpJJ1tHJ11GKVpGKF5FKltEKl1DJVVIJlNGJFFFJFBDJ1FIKlJJK1NGLFBFIlFGH1BFHlJDHlFBHlBHHk5JG09MG0tKHlZCHlY9HllDHFpEG1hFHVxFIlZAI1U+I1M6JlY+J1g+KFQ8JlpAIk89IE49H00+I00+KEw8KE8/Kkw9Kk4/HlA7HE87G084G1E3GlE9Gk43GU41Fk81FlAzGEs0G0ozHEoyG0k1FU83E1A4ElQ3ElA6FFE8GFc1GFU0GFg6Flg8F1k+FFo7GFk1GlkyHloxGVwxGlwvGV4zHVo1IFo1IVk0I1kzIFo4Hlw5H185HVw7HmA6HF48HGA8IVY0I1QzI1UxJVQwIlI0IVYvIVYtJVgrH1csI1ouJFwtJ1wuKF0tI14uIV8tIV8rH2AuKloxLVkvKVk0KFs1LFg0Kl01KlcuK1UtLFcrLlYpKVMrK1kqLVspL1wqMF4pK10oMFssMlstNF8rM1kuNlsqOFwpOFonNlknOlwqOlomOlgkPVclP1glO1kiO1cgOFohPVQmP1MmQFIkQ1IlPlEoQE8oP1IiQVEgQlMfQlMdQlUgQ1cfRlceR1UfQ1ogR1gdSlgdS1gfTFkgS1UfTVUiTlMhTVEhTFQkSlclSFckS1gmUVMhUlEgUk8iUU8kVVIgVlMhVE0iVEskVkwmVUsoVUkjU0ghUUgiU0kfV04lWFAnV1IoVFIoW1EmXU8mXU0nXk8kX0smYE0lWFQoVlYoVVcsVVcmU1UqUVQrUVQwT1IqTVIsTFMuTE8sS1IvS1AuVFIuVVIwVlQzV1AwVU0wWFAyVU0tV1UwWFcwV1oxWFwxWlgvU1sxUVszUFwzUVsuUV0tUV8uUl0rUlk0UVk3U1w4UVY3UFQ2UVI3TlQ2UFo6UFw8Uls+Ulk+Tl09U11AVFxBV10/WVtCW1tCW1g/XVpEXFhFXlo+X1k8YVU7YVs7YF08X1w/YFY/YVRAYFI/YVA/YVRDXFA/XE07WVE/WVJCWE8/WlBEXFE6XFE4XU41XFM3YUs4YUk2ZE45Zkw4aE05a0s4bU05YEo6X0g7XUU4WUU0V0o3VUk1VEw6XEgxXUUvXkowXkouX00tYEktXkAxYkM1ZEU1ZEUyZUMxZEcxWz81Wj0yWj83WD03WUE4WUAyV0AvWD4sVkIvVUIsVEMxW0EtXEArXTwpXkEqYEEoYUMoY0MlZEUkXDcsXjcxYToxWDctVzcrVzUqVTkvUzcuVjgxVzkpVzknWTgmWDckVzwmVT0nVD0oVD8lWzgnXTYmXDIkXzcnYTUmZDYmZDgmZTQoWzMoWjEpWDAnWS4mWTArWzAtWjAwXS4tVzEmVS8hUzIlUTEjUTInVzIiWTIfWi8dWjQfWikfXSwjXikjXy0jUikhVSglVSYmVyQmWCIkVSceUycdUikcUCkaUiscUi4cTy4cTi8bUi4ZTC0fTSwjSiseRyseRiofRi0cQysfRC0dSi8iSi8lSCsmSDElSisqSCsrRi0rTCwsTS4sTC8pRyktRSkuRSswQy0wRScvSy0zRiw2QSw1Qik3STA1STM5SzM0TDMyTTU2TTUwTjI+UDI9TC8+Sy9BSi09TTQ/TjZDTDVETzg/TTpAUDg9TTw/UDZEUDlIUTpHUjVIUjVLVDNMVTJKVDNOTjxKTjxNTjtOSz1KSjxISz1FS0BFTz5NUD9QTj9STj9UUUFQTD9RSUBSST1TSDtSR0FQST1VSDtXRjtYRT1ZSjlYSjpbTT1ZSz5dRDlZQjpaQjpdQjheQDhZQDhXQjhVPjhWQzxeQzxhQDxiPzxgRD5hRz5hSEBjRkJjSkFjQDtkPj9mPzloQDppPzdnO0NqNz9oNz5qNj5mOz9rPEBuP0FtP0NuPD5vQEBsQ0FsREVrRD9qQUNoQUVnQUlnPkdqPklrP0ptQExuO0lsQUhuQ0hwRktwQ0ZxSEtsR01rSE9rSUlqSkdqS0ZsSkVoRU1qRE9pQlFrQVNqQk9nQVFmQ1FuQlJvQ1VwRVVxQlFyQldvQllwQ1h0QFtvRVtyR1t0Rlp5SV10RF13Q115QVt6QVp8QV96QmJ6Q2J9QWF/QFp4P1d4QVV5QFR7Pld2Q1V4RFN5RVR8RVJ9RlN3RlZ8R1d+RVWCR1l+Sll9SFqBS1x9Q1eAQVeCQFSEPlmBP1OAP1GBQVCCQE6EP09+PVB9PU96Pk16O095RVCFRU6HRVKGRVOJQ1KKQ1GMRlWJR1aHRlaLSlWIQVKJP1GKPk6NPFKJQE2JQEuJQkiNQUmHQUeHP0WIPUaIP0OHREyLRkuNRkuRSE2MQ0+SRFGTQ1KVRlKSR1STRFeRSlSSS1aTRliURVqUR16URFuWSFuRSl2QSmGOTFuPTl2OS1qNUFyMR16ORV+MRGGORGONRF6LRF2IR1yIQluHRGGQQ2KRRGaTQWGTR2OTSWWTSmmSS2SUSmiNSWeLSmaKTWiNT2iPT2aRUGqQUGeTUWqSR2mLRmiJRmqGRmyHQ2mKRGuLRmqNRmmER2qCRWmARWaASWqBSmx/S2uDRGp+Q2l8R2l7QWp7RmZ3SGd0RGR1QmR0QWZ1QmRyRmp2Rmx0SW11Sm1zRW50RW93Qm10SW13TG14TWt5T2t6S296TWd5UGR3S2V5S2J6TGF3TmJ7T2d1UGZyU2ZzVGVxT2dwTWZvTmRtUGNuTWRrVGd1Vmd1VmN3V2l3Wml3Wmh5W2p2WWR1WmF1WV94XGF0XV90YF9yYWFyYF1xXGJ5XWF7WmB/X2J8WWJ8V2N+VGB/VWV9VGZ/UWV/VWaCVWB7U156U1p9U114Ult3T1x3U1l2Tlp2UVd1T1h1TVZ0V1t8WFl9V1l/V1iBWll8W1l6XVl5WlZ5V1yAV1yDVVqGWF+EV1+GWF6IVWGHV1+KVWKJVWGNU1yDUFuDUFiDTleDTl2CTl+ETV+GUGGDTGGHT2OFTmOHTmWIUViBUVWAUVGCUlV+UVN8U1R6UVF9VVOFVFOHVVKJWFOFWVOCW1OCXFOAXFSDUlWIUVWKU1aOUFOLTlSNTlaOTVKNVViLVlmMWVmPWVaNXFOKWVKPYE+LY1OMZVKIZlWKYVCIYU2HY0mHYE2EXE2EXEuCZ0yMZ0qNaU2IaU2FaEuEak6EaEuBak6BaU2AaU1+aE6PZk6RZ02TaVKSalKNYk2TYlCUYk+XYkuUYEuWYEuYXkqVYlKTYlSVYFWUX1WSZFWVZVaSZ1iTZ1mVaFmRX1eVXVmUYFyTXFqWXl2PXV+PW1+QXlyMXlmJYVqMXmGPXWSPXWWNXmWLX2WRXmeSXGiRX2iUW2eNWmiLXGqKXGuJWGmLV2iNV2mJVWqOXmuMX22MYW2IYW2OY2uLZWqJZWaHZ2mKY2mFYWiEY2eCY2WBX2mDXWeEW2iDXmSDZGmAZWl+aGh/aWd+Zmt9Z2p6amiDa2WDbGSDa2mFamyFa2yDam2HaGGEaGF/ZmCEZ2GJY2CIZmGLYmGKZGGMY2GOal6Ba11/aFp/bVx/b12Ab2CAcVyBaFx7Z1p6aVh5all3ZVt4ZFl2ZF15alR5aVJ3ZlJ3a1N7bFB6bVB4a097alF1a0x2ak9xalFwalRxaVJualVvaVRtZ0l2a0d2ZUh2Y0l3ZUV3Y0p6aUdya0Zxa0pvakVvaEZubERtcEpwb0lsc0lwckdycEZycU1tcE5qckxpck1mcVBqb1Jsb1RtcVRub1ZrdEtqdUpodEhndUdld0lqeEprc0ZocURnb0RjcENpckFqc0Jscz9pdUFtdD5qdT9sbkdmbEdka0pka0tmakZkaEZmZUdlZ0NoaktjaU5jZU1iak9hZk5mZE9mY1FoZVFqY0xoYExoX0poYlNnYlVpX1VqX1ZrYldnX1dlXlVlXlllW1NqXlFuWlFpW05pWlJuWlJxWlByWk90V1NyV1ZwV1R0WVhxWU5wWktwXEtxXUlyWUpuVkpuVUxuVUhtXkxwYExxYU5zY05zYkxuZEtvZUpwZkxtXlF4YFR0YlVxYVdxY1huYlpuYlJ5ZFV8YlB9Y1F/YE59YVZ+YliAY1eCYlaEYFmAYFyCYl2AXl2CZleFaFmGaFuFaFWEaVSGalaCaFmIalqJbV2IalqMbVmHcFmGb1SGclmIcleKcVeCcVSBc1OBc1GAcVV+c1d+dVZ9c1l+dlKEdk6GeFOFeVWEfFWDfFKBflKAck6Ib0uIcFCKcVKLclOKb1ONcUyEcEuDcEaDcEyAdEmEdUeEd0eCeUiDd0aAeUZ+eEh9dkh8eUN9ekl7eUt6eUp3eEt2e016fkx5eUh3d0V0eENzfEZ0fEZxekZwfkZwdkV2dEN2cUV5dUB3dD52cT52dTx2cEJ3cEB8bD94aj96a0B1bUN9bUN/bT+Aa0SAakZ+a0V8cEGCcT+Dc0CEc0KGcDyFbzqGbTqKcDiGbzaEcDSEcDOGcTKCcDyJcD6Mbj+MbT+Ocj+MdT6Mdz+Md0GNeT6Ma0KKZ0GKbESIaUaIbkWJZDyJaDyFZTuEaT2DZzmMZjuPZjqQaTeNZj2OZj+QZECQYkGRaECRYUKNX0CLXkGKZEaMYkePYEmNXz6LXj2KWz2KWj2JXzqKWz2NWD2OVUCNWT2RWj+SXECQWkCUWESMVkWJWkaNWUiMWEqOWkqLV0yNWkyKWE2LV0+LWEOGVUKDW0KEXUaFX0OEX0aFYEGDY0WEY0CDZEKDVD6GUj+HUD+GVDuHUkGJUEKKT0SITUWIUEOMTkSOT0SQUUSRTUWSUUeFT0eBU0iEU0qGVkuFUkyFT0KBS0J/UECAUD5+Tj1+UUB8TEGDSUGESEOERUOESUCGST2HSDyHTD2HSUWER0iBRkqBSUmFSEZ/R0d9SUl8SEp6RUd8S0p9TEx9Tkx5TU1/TE+DS1B/Ukl6UUd5T0V5VEh8VUp9VUV+UkZ2UUV1UkJ1VEJ3UkVyUkNxVUZyUkB0Uz50Vz10UTxzUTxwTz5vTj9wUD5sVj9xWD9xXEBzWEBuWUJ0W0N1W0J4XUJ4WUZ2WUB4Wj96XTx7Vz57WD2AWDp+WDyCWDiAWDqCWzx3XTp2YTl3XDl0WTh0WTd2WDhyYj51ZT54YkB0YkBxYj5wY0FwY0B8ZT1/YUF9YUR9X0V+Y0V9Yjl9ZDh8ZTZ8YDh+Xjp+YDaAZjd4aTd5ajZ4Zjl1aDdzZjZyZDRzYjNxazh8bjV9bDp+ajOAai9/aDOCZzWDZjSFZDSEZjWHaTF8aTB6ay95ay13ZzB4bTF5bzB4cDJ3cjN2bzR4cDd3cDd0bjdzcThzczhvdTlwcTxwbz9wbTxwczZudTVtdTZqdDhqdDJscjJqdzZpeDdndjdjejdmfTdnfTZpfzdrfDRqdDVmczRkcDVicjFlcDBjcS9hby5kbjllcDtkcD1kbjpnbThpbDZobThrcDphcTxgcD5fcEBgcjtebj5ebD9ebUFcbkNda0FgbkNYbUZWaEhaZURXZERbZUBaZENeZT9cZEBeZklXZkxYY0xXYktVZ05WZ01UaU5YakxTYUxZX0xYXU1UXk5aX01dXk5fXUxhXE1jYE9VX1BSXk9PYVJSYFNPYlNNZFROZlRNaFVOZ1JLYU1RYUtPY0lPZUpPZ0dRaUlOXUlRW0dUWEZVVkdWWERTWUxRV01QVU1MVk9RVk9TWFFQWk1KWUtJWEtHXU5KWUdJVkdJVUZHWkRKWkVNXERKVUhLUkhLUElHUUlNUUdPUUdRUEVTUEhWUENXU0tIUk1GUktEUUtCVE9GU1FIVVNJVlNHVFRLVUlBWEhBWEc/WUdDWkY+UURCTUNAUUJFUURHU0FFTkZDS0dDSUg/SklETUk/TUo9TEg5T0w8T049TlA7T1A/TVI8TlI+T0Q6TEI3UUM7UUA5U0Q6SUE7RkE4SEE+RkY1RUc0REc5Q0c7QUU7QEU5QUM9SEY1SUYzSEQvTEczTEk0TUcwT0o0SkIySkAxRz4vSz4zTj0yTj0wTz8zQz8yQD8vQkA1Pz02PkE0Q0IvQkMtREMrQ0MpQkYuREcuR0EpRz8oRz8mSkIqS0QqTkQqT0QoUEMnUEAoUUMlRTspQjomRjkrSDksSjkpSTYoQTwpPj4nPkAoPTwrPzgsPTovPT4lPUAjOkIiP0AhQT8iP0IfOT4iNz4hNT4lNzwfMz8hLz0gMEIjMUMlM0QkMEQnNEYmMUYoM0coNEgpKzsiKT0hKj8gKjolKTsnKTsoJzshJTwgIkAgIzsfJD4kIz8lJEEmJEIoIj4nJkIlKEQmKUUqJ0YmLEAqLj8pLj0oKj8sMD8qMjsrNEArNDsoNTgoOTkpNTclMzgkNjUlNDchNzYrOjEtODUvNzcwNzgzNzozNzs2Nzk3Nz02OzMqPTEpPy4rPjEmPDIkPjIiQDEiPDIgQDIsQDUwRDMtRjIuRTIqQTIyQDM0RDI2PzE1QjY2Qjc8Rjs5RTo1RDQ+RjVASDVAQzA8RDBBRC48RTZCRjdERjVGRDVIRTlFQjlGRDtDSDRHSTNJSjRLTDVLSjFISS9HSy1GRy5JSTRNSjVPTTJPSDVRTjVRUTBTUjZSUjhRTjJVTjFXTixXTDJYSzBaSTFcSzRdTTNeTC5USyxTTipSTihTSixRRy1SRS1QRixUTytQUSpPVChRUitNVCpMUCxLUytTVStVVSdXVS1WVi1YUSdZUSRXUSNYTidZTilbUCpcTCpbUSVVUSNTVB9TUCNRTiBPUiBOTh5OUh5NUB1NVSNUWCJUWCFWWiBWWiRTWSZRXCdRXiZQXyZOXidMYSVOVx5dVyRcWSVdWidbXChcWypdUx1bUxpZUhlZUB1bTx9dUSBdTR9dVRpYVhhWWBhWWRdUVBlUUhlUURZUUBtUThZUThpUTRhUWhlYXxlVXRZYXh1TXx9TXiFSXB1RWxpQXBhQWRpPXBZPWBhOWRZOYSFWYyNUZCJSYyFYXyBbYh1aXh9cYRxcXx1dXRteYyVUZSdTZihVZilWYylSaShUbSpRbSdWbylXayZYay1TbC9Rby9OazFRaTJRaTVSajZQazhNZzdOcC9Scy9SdC1Rdi1QdDBUcy5WcS9XcTBZby9WcytQdipLcidPciZScyVNcSRScytLcytJcS1Iby1JcylHbyhIcSVGcC5GbC5Eay9CbzFDcTNFczNEcDRGaypDZipEaydDbSZCbihAbiRBcCc+byNAcCU+ciQ8aCtHZitIYi1IZyxLai9KZzFMazFLYzBEYC5DZTJDZjRFaDVEZTVHaDZGZzZHYy1BYitAYCpBXylAZCo+YCdEXCdFYSZHZCVGZSRHZCREZyNGZiNEXCxHWCxFXS5KXC1MXzBLWi1AVis/Wy4+WSY/WyQ/WSE9WSBBWR49WR5BVxs+VSVFUSZFViZIWCRIWSRLWCFHUi1EUy5GUTBHVS5HUCg+TCY+USg8SiFBUCBBTx5CUh8/SyRFRyRFTCVISiZJTSRJSSdDRyhCRiZARCZARyU+RiQ8QiE9RyM6SSI7SCU5RiE/RR5AQh9CQR5CRh1CQyJDQSNEPSNEQiVFQiRIQyZJQCRJPyRBPSU/OSI+PSY9PyU7Pik+PSQ5PB49ORw/Ph08OhxENhxFPBxGOCBFNSFFNSNENSVFNSFINh9JNB1KOB5KNBtMOBxLNhtMNxlOMCZBMCg/MiM+MyE+MyBBLyZDLSdDLilFLCtFKyZFKCZEJyhFJSlFJClCMClFMStHMyxGNC5HMSpJMixLLy1MMitONixCNzBBNitANCs+NS08NC47Nyw7MzBBMzJBNTZCMDNALzJCNDNFNTVGOTdHNTRJNTVLNTRNNDJNNTZPOTNFPDRFPTVDPzZDPTFFOzRBPDY+OjlAOzU8ODU8PDU6Pjk9Pjw9Ozw5QD08Oj48OD87Nj48NT8+Mzs7Mzo+NDk/Mjk5MDo/LjhBLDlAMTtDLz1DLj1FLz9BLD9FLUBCLEFEKkJELTZDKzZDLDdHKjNDKDdHKDhJKjdMJTlKJTlMJTxIJzRLKDJMKTNPKzJPKjFLJzRQJzVSJzJVJTdTIzVTITZVIzNSKjRVLDJXKjJZKzFbLjNXLzNVLjVYKTRaJzRcJjJcJTFeJjdcJTJaIzBaJC1aIytaIjBXJy1ZKCtZKShcKyxYLSpYLCdXLiVYKipgKCxiKSxkLSpgLi1gLilfMC1iJixhJC1jJCtlIiplIi1hJixmJippJStqJC1qKSppJCpsIytuJC1wIy9xIilwISdvJy1wKC9xJzNwKy5xKyxvLixuLy1vLyptKDFtKDNrKTVsKTdtJTRrLDVrLjdsLjtqMDVrLThoLDpmLjtlMDplKjxnLj1kMD9jMT5hMz5gMDxfMTtdNTheMTxbNjxeODtfOTdgOT1hODdkODNjNjdmNzloNjVoNDViMzNgNTBdMTRgNjRdNzRbOjNbOjFZODZaOzNdPTJePi5dPzNgOy9fOixgOSteOildOC1iOC1cNyxaOilXNi1YPCxYPixXQChWQC5XPylaQCdbPyVbPyNaQSdePihfPCVbOyNaOyJYOyBXOCRbOyRWOyNUPiFSOyVSOyRPPSdSOSJPQiJUQiBVRB5URCRVRiRURiVRRiJPQR9XQRxYQRhXQBxbPh1bPBxZPR5cPhlTQBhRPxdQPBpSQhpRRBlQRRdRRxZQRRtPRRdURxZVRhNVRBJURhdYSBJWRw9WRg5YRQ1YSg5WSw9YSw9URhBaRQ9cRBFeRRNeRw5eQhFeQRNfQBNiPxJjPxRbPRZfPBRaQhVjQhVmQRllRBVnRRNmRBZqPhdoPRpoPhtqPhpsOhloPh1qPh9sOx9tOyBvPyFsOh5sNx5tNRxwNR5rOBpuNxhvNxZuNxZsOBRvOBFuOhFsOxNrNhBtOg9qOw9oOg5mOA5mPg1oOw5kOg5iPA1gPg5fORBhOwtfPQpdPAtaOgxaPAddPgtZPgxXPgtVPwlVPw5WPAtTPAlRPwxPOgpPOQ1QOg1TQAhPQghOQgpLRAtLQwZNQApKQBBIPwpGQAhFPgxEQghEPQ5KPBBLOxFJOhNJPRJMPRFPOhRPOhJSOhBHNRFHOBBBOA1DNhNEMxREMRNDMhJBMxdEMRhELxhCMBhGLxJELhFDLBJBLBE/LBRBKxY/KxY7KhhALxY9MBY7MBQ4Mxc8NBY+Mxo9MRA7NA86NA44NRE6OBE6ORE8ORI+OBQ4Ow87PQ89QBI8Pw08PhI/PxVAQxZAPhZCPBdBPhVEQxNCRRBDRA5ERRRFSBRGShRESBZITBVGSxZIRxdKTBdJSBhLSxhLSA9DTA5FSQtBSglCSQdBTAhCSQxISwxKTQpKTgpLSQtMTQlITwdHUQhGUwdGUAlEUgpCUwxCVQ1BUQhAUQ5CUxJDVRNDTxJCThE/ThE9SxFAUxFFVRJHWRJHVBBKUhFLUBFKUhNNThJLUBROThNNWA9FWg5EXRBCWgtEWRFBWhI/XRZAWBM9VhM+WBE7WxdEXxhFWRhGWhlIVhhFXRRGYBRHZBVFXxFHYBFKXhBMXA5LWg5MWQ9OWQxLYRNCYxNAYxZAZhdAYhI+ZBA+Yw5AZQw/ZApBYho/YxtBZRxAXxs/Xx4/Xho9ZBxFaBxGYxtHYR1IYh9JXx1GahhEaxhBbRdBahVFbBRFaRlAaho9bBs9bB0+aBs8Zxk7ZBo5ZRw3cBw8cSA6cho6cRg7bhg7bx44ayE3bx80biEycCMxciMybyQvbiQ3bCU4byg3aig7aiQ7bCk1bCs0bC01ay41aysxbCkuaScwby42cjE1cC86by07cTE7bC48bzQ2cDU0cDg2bzYycDgxbzMwcjk2cj00dD0zdTw4dT45dz87d0E9dEE/cT81cEEzc0Iyc0M0bkIzdEIwdEYtd0ItdUIrdz8udkcxeUsyc0oydEk1cUo2cUg4cEw2eU8vd1EyeVAte1IteU8qe1I0elU0e1YyfVI2fU83ek04e1A7eVY1eFk1eFk5dlkzdFk1dlgxeFw3eF45e2E4e2A8fWI8f2E7gF86gWM6g2I4hl85hGU3gWU0gmg1f2YzgWo0f2gyhWI8h2E+hmFAhWJBiWI9iWQ9iGBCiGFEiWVDimBGil1GjF1Ii1pJjVlLhmhGiGlHiWtHhGhHgmdFf2hHf2lJfWdFiWdJi2hKjWlJjmhIjGZMimVNjmxJj21Ikm1LjHBHkXFHjHNHl25Gl2hIlWZJlmRIlWdMmW1KnG1GnW5Mm21NmmxMn3BHom1HonJFpHJHpXRGpHZFpXhFomxDo2pEpWlBpGpAomhEo2VFoWNFn2NGnWJFnmBEm2JGpmhCqGdAp2U+qGM+qmZBqmVDqmVFqmJDpWU+pGI9omM7oWU6omE/oV89omE5oWE3nmA4nGE2omA1oV02oVs0ol04m187l2E7nF09nVs8nFk7nVc6nVY9m2M7mWU8mWY4m2c9m2dAm2VBnGlBlmc6lGg4k2w7kmQ4kGg3kGM4lGw3lG83kG83lHA0knE6j3I7jHM5kHM9jnM+jnNBkHRCjXdDkXhDj3Y2kHY0knQ0j3k3jHo3ink4iHo4h3s1kHcykXcwlXYwkHgtkngrkXkpk3gnknollHowl3owmHozmnozl30wln4ulnwslYAul3k0mXY3mHQ3lng5lXs5lX04lH85kno9kX88kHs+kH4+m3Y3nXQ3nXQ7oHU2oXM2oXE1o3M3nHE5nG87nm88n24/m206nG04m283oG87o3E9pXE/pW46o3Y+oXhBpHc8m3VCmnVDm3g+nHo9nHo7nH4+nXw6nX47noE6mnBCmHBBl3JAl25BlW1Ak2tAk2tDkmo/kmZAlGY/jWo+jGtAi2s8i21Aim08im4+kWRAkmJBjmBBk2FDlF5FlV5BkV5AjVw+i1w/jltCkFpEjVw7i1w6ilo5i1g5jV03j1w4kFw6hlg5hlc2hVk1hFk6hFk8glc6h1U2hFQzg1I0iFIziFExi1M0g1Uxf1EvgFYuglItgk8shlAqgE8qgFAogVAmgFMoglEkgFQmgVMkgVUihkwriEwqhkomiUorikouikwmjkskik4ji04giFAjjEgijkgdjEQgjkMfkEIhjUAekUgfkkkdlEgclUYdlEwdkk4elUsglUgamUgXmEkVlkQXlEUWmEMWm0kYnEoWn0oXoEgXm00WoEwXo0wXpE4Yo1AYpEwVpU4aplAcqk4bpU8eo1Afpk0fqlIcrFIcrlAfrVAgrVQdrFYbrVkbrlkdrVoZsFAesU4gtE8gtU8esUwgtU8it1AiuFMhtlQhulMhu1Uhu1Yeu1gdvlYhu1Qdu1QauFQZuFQXvFIZu08atFQas1MWs1YatE8Zs04XsE0Xr00ZtUsXr00VrEkWrEgUq00Tq1ATqlARqlEVq0kYp0YYpkgZq0Uaq0IarEEYqkAWqj0XpkQXo0MapEEbo0IVpEMToUQboEQdnUQdnEUcoUUfpEUgoUgenEMfmkMfmUMimkEjmEEemT4flzwelzofmjkgmEQil0UllUYlk0cjmUYmmkglnEomnUkonUsllEYnkkoplEoqkUYqkEQqj0MsjkQokUwokU4oj08qjU4pklAmklInlFMoklQkkFAsjlEtjlYtiFUpilUmh1cojFYmiVkuhVwtiVwxil4wjFsxhFwwgl0wgWAtgF4yf1szfl8xflw1hGEvhWMvhmMshWUqhmUwh2cwiWgyiGg1h2EsiGEphmAnh2Alil8qjF8rjVsrkF0sgl4ngV4jgF0of1snfVooe1kneVgoeVgrd1cngWElgGIjgmMhgWIff2UkfWQlhGMihmQgiGIdiGUiimUghlwbiFshilgfhlcgilYehlUeiVQegVwcgV0agF0Yf1wef1ogfVohe1sgfFgjgmAagmEYg18UgmQZgmYXgmgYgWoWf2oVhmEXiGAVi18XimIUiGQTh2YTiGMQjFkXjlkYiFgXh1gVh1sVjVkUj1kTkVsUk1oVj1gRjVgQkFYQjFYOkF0UkV8Ukl8XlGAYkGEUj2ERjWARkGIQkF4ZkV4blF0djl0cjlsgjl8gjlsjjl8jjl0kkloblFgbl1kamFgck1YakFMaklQel1oYml0ZnF0ZmVwVmV4amWAcml8enGAfl2IcmV0fmlwhnVsjmFohnVofn1ken1cdoVYdnVUanlUXnVcXm1Mam1Idm1AdmlQfm08fmlMhmlAhmk8knlMWn1QTnlATolQTnVIQnFAOmk4Qm0wRnk8NmE8QlE0Qk04PlVAUk04Vl1EVlEsRkkkPkEoQj0kSkkcQj0wPjE0QiUsRi08OikkPiUcPiUURiEQRiEYMh0gLh0oLhUcJi0YSjEQUjEYWjUUYjkMTj0IRkUERjUARikcWhUgZiUsYjEwXiU0ai08WiEYchkUdhUcfhkgghkMdhkEbhEIfhz8cg0gfgkkhgUcjf0YjgEsggU0fgE0cgVAbf1EZgkglgUcpgkkrhEUoh0Img0Emf0cqfkgsf0cugEUue0gse0cpfUYpfkgwf0cze0Qyfkg1f0c3fkk5f0g7f0o9fUA0fD0ye0A1fEI6eUQ4fEM8eUU6ekY+fz4ugDwvgT8sgEIsfjoufzcvgTYtgTcrfTYvfTMvfTMyejIvgzUvhTQthTEuhTEwhzUthzcsiDcqhjktiDkohzsrhzsphjAtiSwsii0qhSsshSkthCcsgigrhCUtjSotjCgtiycrjisvjy4vjS8xkS8wjSYvjSQviyMwiSQwkCMwkiUxkSYzjyU0kigzjCEyih8ziCA0hyA2ix41jh00jhwyjxw2hiEyhCMzhSU0gyY2hyY1iCoziig3iyo4jio4jyw5kS03kSw1ki84hTA2hjA4gi01gCszfis0fCkzeikzhjI1hTY1hTYziTQ2izM3ijM6izE7jzM8jjA+hDg2hDw2hT03gTo3fjk2fDk5fTw6hD00hkAzg0M1hUExh0MwikEwh0QuhkM5hkY4hUg5h0M7iEY3iUk2i0g0i0Yzi0o4jEw3jEo0jkoykEkzkkkxjkwxkEg1kkc2kkY5k0Y6j0M7jUE6jkU9jkM/jkVBj0dBjkRDij0+jDs5jTw3jjk2jDw1hjs+hTg9hTc7gzw+hD4/gUA/fz8+gUI/hTc/hDQ/gjQ+gDU+hDNChjREhTNGhDVHgzVKgjI8gDI6fi85fy49fiw9fSs/fixBgCo9gCg5eyo/eilBeidCeiVAdypAdiw/dS5BdC9Bdi1EeiZEeCNFdiNGeyRIfCJJfSBIfSNLdh9Ddh1FdxxFdh5AdR5HdRxJcxtJcRxJdR5LeBtOdh5QcxhKcRdKcBhOchRKdBVJdRdJbRdMaxhOaxhSaRdNaBdKbRVQbRRTbhZWbxFScRZTchhUcRpVcRtXdBhTdhZSdxVUdRVQdxNPeBJRehBQbh1UbB5YbB5SayBSbh5PaxtWaRtYahpaahtcZxlXZhpVZBtVZhlTbBlabhlcbhtfcBdccRVgcxhechVidRhgdBdicB9dbiBebiFgcSBbdSBYdSBdaiFeaSJiaCFcZCFfZSRcYiNgYyZdYCZfaR5gaB1jah5naBpiZhphZRdhYxtibB1kbh1mcCBocRxlbyRlbidocCVjcCRhaSVoaShnailoaiVraSNsaiFraCNuaR9taCBvaCdlZyljZStkZS1jZylhaSpfaS1gaSldai5eaitbay1cbC9aYyplYStlYCpoXSpoXypjYSlpYShsXyZrXiVtXyptXyVpXSNoWyJqWyBrXyFoWiRrWCNsVSJqVyZtViBtVB5tUx1vVB5xUxtvUhlxVRhxURdwThdwVRh0WBd1WBV0WxVzVxd3VRl4Uxh2VxNzVxFyWRFwWxBwVQ9yWBJuWRJsXRRqVxNqVhVrVxdqVBVrXhduYBVvYhVuXRlwXBtvWhpuXB1wXxNwYRJxYRBvYw9vYBBzYBJ2YBB4Yg54XhB5YA9tYA5rYg9qZA5pXg1qXA1rWgxqWgtoWAtrYhFpYxNoZxNoYhVnZhNraBNsbBFsZxRvaRNxbBRxbBZwbRJyaQ1sagxqbAxpaAttZwlvZwtxZgdvaQ1oag1mbg5kaA5kaQ1haQtgag9gagteaw9dawxdbhJnchFnbhVocBZpbBZncBBqcg9rcw1qdQxqcQ5ucQxocgpndglkcAhmbwZobQVnbAVlbARpdhBgcg1fcQtecAlfcQpcbwhecAhcdw5jeRBkfRFiehBmew5gfQ5ffhBbfQteewpdewpaeQleeQlaeAlcexBdexRbdxNbdhFacxFadQ5XchBZcQxXfBVdfhdegBhafxdgfRhiehdifhlkhBRbgxRYhRVXhRJchhNehRRgiBJfgRNYgBNVgRZSfhFVfw9WfA1Vew5VfAtWfhlVgRtSfRpWehpWfR1WeRtZhRtWhxxShhtYhRtaiRxXhR5bhRhThhdRhRhOhhlNhhRRiBNShxBShg9RiA9TgxlOghpMgx1KfxpNfhlLfBdLfBZNexZKgx1OhCBOhyFMhCFQgSFRhSNQgSJUiB5Oih5Nix1LjB5JixxPjhtOiRtKihtHih5EiBlGiRZHiBRGhhVFiBJHhx5GhiBFhCFGgSJDgyVFgCRCgidEgCdCiSNHjiZFiyVKiSZMkCFFjyFCkSFBkR9GjSFBjCE/jSQ8ih8/iR88hx08hR49gx87hB85gSA8iCg+hyo+hiY9jCxDjy5DiytGiCtGiy5HhypIkytDky1FlS5FlCxBlCs8kyg/kyxHky1KkS1LlytKmSpLmStNmClPmyxKmy9JmzBLmi9Hmi1Omi1RmC1SmCxUnC9Sli5SlC5TkytTkitVki9RkzJRlDJPkzNTkypRkihSkyZUkiZQkSRQjiNRkSJNlyZWlidYliVamSZVmiVTmSNSnCZSlilYlSpbkylckylelS1amC5amDFZmjJZmzRZkSlajyhbjiVdjShYiyZZjSpYkSFbkiFdkR9fkiBZkh9Vjx5XlCJelSJgkyNikyJklyRgmSRikiVhkCZjjSRmjyhijSNiiyFiix5liiBghh5hiRxghRxiiBpghRphhBhhkBxlkB1nkBxpkhtkkhpikBpglBlhkR9okSBqjyBukiNqiiFsiR9rhx9riSNriiVsiSZujCdriihvjCltiRpqiBpthhhtihlpiRpviBpxhhtyhBp0ihpzihl1ixp3iBh1hR1xgx9xgRxwgyFwfx5yfB1yex90fCF0fyB0ehtveRtseB5pdxlseBdudxhqdxVudh5tdSBsdiNpcyFuciNtcSRwcyVxdCRzcyFzdiR0eCNseiVsfCVueyZwfCdyfydxfCd0fCJpfSFnfCFlfSJjfh9ngB9pghxpghtngxxreSFleCFjdSBkdyhkeSthdypmdClndCpqdixqciprfylffylkfy1mfipofSdafSJdfyFefCFbfh5eeidceClbeixZdCdcdSxccihdeyxcfC5cfi5afy9Zfi5efTBgey9ifTJhejFjezJjgStYgitUgihYhSZbhipbfitVfStSfi1ReypSeiZReSdVeSRReCVVeSNTfi9SgjNOfzNTgDVSgTJVhS9PhS9Lhy1QiSxPiy5PiipQgi1MgSxKfixIfilMgihLfTFJfzJGfDJLejFNei9NejNPezJGfDNDfDZDezdFeTNCeTQ/ezM+dzQ/fjdCfjlCgjlDgD1EgjxIgkBFhjtJhzxMiD5MiTpJijxHiD1GhTxOhT1QhjtShjlSgz5Qhz1UiDtWhjpYhDtXiT1XhzlZhTdbhjZdiDZdhDZahjRWhTFaiDJVhzBYiDBWhTVfhTFhgzFghjVjhzhjhzllhTlnhTpphzBihi5jhi1lhCxmiCxihylihShhiChkhCZhhCNkhy9nhy9phjNriC1rhCttgilthCdqgidsijFqizRrjTRpjjZpjDRtijRviTJvijZwjTJnjzNljjRjjTNikDBlji9kkS9njjZjkTdfjjpijTtkjTxgjzVbjjdZjDdYjjFcjzJYjS9ckDlYjzhUkT1XkT5ZkT1bkkBZjzxSjjtQkDpOkjxOjDxPjT9Pi0FPi0NPi0VNi0RLjEdOkDlNkjhLkTlJjzhHkjVLlTVJlDVHlzVFmDdGkTtIlDtEkT9Gj0BJkENJkERHkEdHkUhKkEhGkTxCkjs/kz4+kj89kTo+kTdBjTc/kDVCjDZAjTJDlj8/lkE+mEM7mEJAmkBAl0NClz86mD84lj42lTw2mj43nD85lkA0lD8ylT4wlD4ukkEyk0IwkUI0lz0xmTwvmDkulzksmzwvnT4vnEAxnUIxnEQzlzgvljYvkzQslTQxkzQykzM0kTI1lTE1kDgskTgpjzcojzotjDosjjowkzkpkzomkzgilTsmmD4olD8nlDUlkjEkki8kljIjlzQhljUfmjQhkDImjjAnjDAljTEpijAmhjElhTEnhy0khiwniSsjhTMkgTIjhDcjhDsigTokfTMmejYofzAoejAofi4qejYkeDgkdjUjezshez0ifDoffT4hfjwgdTcmczYncTooczUqdDcrdTMudjcvbjYnbDgpbTgrajYmajQnaTkpaTosaDgvZjssZj0uZDorZD8uZzMtaTItaTAuZTItZTEqYzQtbTErbC8qbi0qaiwnay0kbCskZywnZCspaCoray8jbC8hbzIhazEgaC4eZjEgZS0dZDAgYy4fYS4ecC4hcy8idC8gdC0jcy0mdCsndiomcyopdjEfejIeejMgdzQcdzYddDQbezAdgDAbfi0ffCwhfCohfSkjfCkmeikmfSgngTIehjIdhzIfhDUcgTYbhjYbgTUZhzAcjDIaii0bjSwbjiwdjisajjQekDMdkjMejjYgjDchjDgjijgfkzIakzMXkzIVky8aki4clDUXlDYVljgVlzkXkjcTkTkVjzgXjzYXjjoYOj1ROkFRPT9UPj9POz5MPkFMPz1MPDpLQDpJPT1IPz5GPj9EPD1DPUJDP0NDPEFAOj9DOD9EOD5HNj9IMUFJMkVBNUJCP0ZEQEdDP0VGPEdEO0hBOUlBN0hCOUtDOk1CNU1CNUlENUhGNkZHNUZJM0dJMkZNLk1JMkpHOlBEPFFDO09GOFFEOFNFNVRFNFJGNVVHNVhHMFZHL1JMM0xPNE1LNE9KN1lIOFtHOVdJNlpKM1xKMlxMMVlMM1xOM15PL11QMFlOM1VOM1NPM1BTLlVXL1ZTNl9QNmJQN15PNV9TM2BTMV1VM19YNGFZMF5bMVtXMVdaNlNVNVdUNFlVNmJaN2RaOGBYN2BcNWFeNV9gOWBjNlxkNVtgN1pcOFlbOlRaOVRgOFZgO2FjPGNkPGBgPV9kPF5mPVxnPFpmQFtnQVxoQFhpPVhmPlRkP1ZcPllfPllhRF1oRV9qRF9lRVtnRlppR1doSVhmS1lnSlRnR1RlRVhiRVhgRVZbSFJeR1JhTVhoTFZqT1ppT1ZnUFVnUVNlT1JkVVRlU1BiT1JiTlZhTVdfTFdZTlJaT1FdV1ZjWVZlVVhjV1VhWFNgWFJeVlJdWVRcXFRcWVFZVVNbVFdcU1lcUFxYUlZVXVZbX1VaXVhdXFdZXVhXXFdUWVdVXllRWlZQWFhTV1tWVl1WU2FUU11NVVtQX1tQYltPX11SXVxOXVpMW1tKWVxMXF5JWV5HWF5LWGBNWWBPWGFQVmZRVWVLVmNKX2BHYF9EYWFJXmJGXWJEW2RDWWRFXmdBWWlBWWdFWGtHWmlMWmlOW2ZLWmZJYGhBYWg/YmhEXmxAXG5AW21CX3E/W3NBW3BEW29GXW1HXW1JXXBOWHZKWnNIYnNAY3M+Y3FCYXVCX3dBXXdEYHpEXXhGX3VIYHRKYXVQXnpOXnpMZH1DZH5BZXpDZH5FYoBFZIJJZYRJYoRNYn9MY3tLZHlMZHpOZndRZX5UY35QZH1PaIVIaIdHaYNHaYVLaYNMaYRPaIJQbINQbYZQaoVUaYFSan1QantQa3tSbHdTbHxXa35WcIVQcodPcYNQcoZUcINXc4RYdYZZcoNccIFYcX1acnlTcX1TcX9Ud4ZYeIhZeIVWeYRaeIRcd39de4BdfYFee31geH1ceH5YeHxWeXhTe3RbeXhbf4JdgYNff4NbgH9cgn5dgntegHpdhnpegnZfgHhcgHRZf3hSf3pWf3pYiHpdintfiHxbiXhbiXZciHRbhnRZjHNZiXBXhnhWhnlUhXpPhXJNhnNRj3RZkXNbj3dZkHNWj3FWj3FTjXJSk3FRj3FOjXNQjHZNi3xRjHlTjHZTlnJSl3FTlXVTlnNPlnJNmXVJlXZGk3ZKkXpKkXpIkHxMkH1QknpPknhOnHZKnXRLnHhMnnlIm3tGoX5GnX9Dl4FLlYBOmH1Mo39IpX5Hon5KooFIooNGoYdIo4hIn4pHnIVKmohLmoNOmoJQnIJNnYNLpYlKp4tIpodLo4tLn45MpJFOn5JPno5OnYxPnopPnohQm4ZUmoxUm41TppBQqJJPp45QpZFSppBVpJFXopFWpJBZppFbopBaoZNboYxWoYpWn4pYnohZnoVZnYhbnItcm4tenY1bn4xZqJNaqZNdppVaqZNYq5RXrZNWrpZVr5JXsJBVsZRYs5RYsJZVsZhWsJpYsJxXspxVs55Us6BVtJ1StJtRs5lSsppUsI5WsIxUro1Xso5Ysoxas41csYxetY1dto9ctI9hsotgs4lgs4detIVftoJjtohotIlkuY5cupFauoxbu45eu5Fgu5Biuo5jvo9iwJFivo9nu41lvIlou4Niu4hhu4phwpBhxJJhwo5fxI5jxY9lxY1nw4xoyYxnxolox4pqxIlow4RpwINhwYdiwohkzIxlzo1lyotjzYlmzolozoZozIVpz4Rn0oRnz4FpzINoyoNmyYVlx4RjxIBgyH1kyX5m04Rk1oRl0oVi04Fk1H9l031k0X1l1nth0nhi0Hxjzn1hzHpgzIBeyoJdzYFgz4Bh13tf2ntf135e1npd13dd1nZb03Zc1nZY2HVX1HVX1HNX0nZZ0XhZ0Xpaz3xZzH1WzHZSznZW2XdV3HZV2XlW2HZT2HRS1nRQ1HRR1nVO2HVM03RL0nVPznhN0H9S0ntS03lR2ndL3HZK2nhN2HhJ13dH1nlG1HpH2HtD1X1F031D03xH0YBI1IBN1IFP1X5N1X1L231D3HxB235F2X9B2X8/14E+1YE/2IM+2oQ71oU+1YU71IQ/1YRC1oNE1oRG1IhJ0ItD0ohC1IZD3IQ83YQ53YE93YY+3og93Io92ok/3Iw+3Y482I492YtA141E24lJ3IhF24lD4I894ZA64Y4+35E+3pM93JQ/25JA3phA2ZdC2pNC2pNH341J349F4JpA4Jw/4phA4JpD3ptE3ptH3phH4JtI4Z5J35pM45RK45VM5JNJ5JJH5pFG45NF4ZVG459I4qJI5J5G5Z9K5p1L5p1N5ZpO6ZxO6p9O6J1S55lQ6JZT6pFN6ZRM6JdN7Z9N7qFN7Z1L7p5Q8J1P8ZpR75lR85lQ9ZpS8pZR8pZU75ZR7pdM7pVK7pNL7pFI749L8I1P75FP95pQ+ZpR9pxO95hO+ZhM+pZM/JZO+JNL/ZFM/ZRP/JRS+pZT+pVV/JRW/JNY+5Na/pFY/5BW/5FU/ZNU9pFL9JFJ9ZFO945L9oxM+ItO+Y1P94pQ9odP+ohS+YxS9ZFU9ZNZ95Ba+Y5a+Y1X9IZR9INP8odR9YVT9INV9YRX9odX8oVZ8YJa84Zb9IVd9YhZ8o1W75FX8JBb8Y5d8oxc74JZ7n9b74FW7YRa7YRc7Idd7Ylb54Zd6Ylb6Itd64pa7IhW7IlU64xQ6o9T6pBV6o5X5YVd5IRe5YVa5Ihd4Ylc4Ytc44xb3oxb3Y5d341Z3Y9Y4Y5Z441X5ItW5YxU5I5T5Y9R5o9P45NT4pFV35Bd4ZBd3pFg3ZJc25Jb2pRZ3JRX2JNY1pRa2JVW15dW2pRV25JU25BU3I9S3o5N3pJN3pVO3ZVR3JNR05Na0ZRa1JBb05JX0JJW0JNU0pNSzpJSzZRQ0JBRzo9P0pFQ1JBQ1I5S1oxS2otP2JBL1pBNzpZQ0JdPzJhSzJdOzpdLzJVJzpRIyZNLyZJGzZJHz5BI0pFI0pJG1IxL0I1Kz45Jx5JNxZJNyZFPx49LxY9Jxo1IyI1HwopIxYlFyYpHyotLzIpN0IZOz4VIzYdHwYhKvohKwolNwoZJwYVHwoJHxINGwH9Jw31GxoFHx4FJx4RKyYRLzoJOzXtKyn5JyYBKv35LvH5Lv4BNwHxMwHpLwnhLxHpLwHVOxXVNxnlMynlPyIFSxX9PxX1Ov3VRvXNQv3hRwXRSwXFSxHFUxnNTxHFWw29Xx29Xx3NVx3ZVxXdUxXlVx31ZynhayXZZwW9awG1bv3FZw3BcxW5dxnBfx3JexXBhxG5jxnJiyHFjx3NgxnZfyHhixHpew3xdxHhdxXZdwm9lwWxmwHBkw3BnwnFpxHNqxXVownVswnRuxndtxXdpwndmwXlkv35kw35oxHxpv3Rvv3NxvXRtv3dwwXhywHpywXxwvXt0vn5xwH9zwH5vv3xsvXxqu4BmvoZrvoJsunx1unt3uXtzun91uIB1uIJ0uoJxtoNztYR0uIdyuYRwuIZstn9nt39suIBusoR0sYV2sYJzsYZysolysYpws4lur4pvrYxwr4pssI1ssolssoRssoNrsIBmr4Rlr4ZlsIdnq4tyrIx0q4hxqYxxp4tvqIttqopspoprpItrp4xnqYlpq4Nsq35pqoBmqYJlqYVmootpo41nn4xqoYlmoIZlooRmnoZmnYVknoRooYNno4RrpINtpn9sp39upn1rpXpoo35om4Zim4VgnIlimIZjl4RjlYRllYVnlIlmkopmlIdok4lsmYptmotumolrmIhpj4ZijYZikIRgkIhgj4phkIxgko1gjY1ckJBck41dlYtclo5ZmIZZlodclIldi4taiYxbjIlbjIxYjI9YjpBWkI9WjY9Ti5BSkJFRkY5UkopWk4hWlIhTloRTlYpPlItQiY9Rh5BQiYxRi49Oi5FNjZBLj49Mi49HkI9GkI1Kj4pOj4hOkoNOlIVLlIdKk4lKiI5Hh5BFh45JiYxFi4pCjYlEiohCiIdAjYVAjYdEjYZGjIdIjIZKjYFNj4BHj4JGjoRHhoZAhIc+hYZCh4NAiII+iYA/ioBBh34/hX09iXo/in5CiIBFiIBIiH5Ni3pJintGgn0+gX07goA/gns/gnk/g3dBhHhDgHdCf3VBgnZFgnNFhHdFhHlJhHdKg39Mg35Hg3xGfXVAfHg/e3VCfHM+fXM8f3I8f289g3M6gm86hG88gG48f2k7e2Y2emo1e202fG03gnU3g3c4gHU2h3M2iHI0h280iHEwi3Awh28xgm8ygG8xfWwtgWssg2sshWwtg20viXcwi3kwhngxiHYthncshHUsgnYqg3UogHIqgXQugHgwf3kxensyd3Uue3Uugncmg3cjgnonf3clfnUkfHQke3Une3YheHckd3UjeXYne3kpe3oreH4ucXordXkpe3kffHcdfXogeXoed3gddHkedHogdHsccnscdH0ec38edX0jcX4kd4ApeH4ld30jcX0Zb3sYc34Yb38abH4aa38can0eaoMea34gbHwhanwkaX0ka3olbXglbXYmbngibXoha4YfaYcfbYYdbIYha4YjbYkmbYoocIkkcYslcYYmc4Ukc4QidYMidoQjeYQkeoMieYUmeIYndoYndYUlbIwpa40mbo4qaowraIsqZ4ksaIYrZoovaIYvZoYwaYUtbYYub4Yuc4IrbX8obIIqZ40wZY4yaI4vaYwyaIs0a4o2bIw3aog4aoY3bYg5b4c4bYs5bI07bo09b4s9bY4/a5A+apFAapA8ao46aYM4Z4Q6bIM6aYE3aIAzaYExaX0zZ3w0aHwva38wbn0tdIAwcIEyboEyaHo2Zng3aXs4aXg0aHcyanUxbHcwbHQya3EzbXIubnYvcnYudXs0cXozb3kybHA1am42bHI3b24ycW0yc28xc2o0dW0zdmsxdW8ydHM0dXU2d3Q1eXY2eXg3eXIzcWk2b2g1cGs4cmU2c2M4dWQ4cmI6cmA6c2Q8c2I+d2Y8eGU+eGM/emc/e2s/eGo8d2g7cV45cls6cV42bl46bl08a109al88alk8Z1w+aF87aGA5ZmA4ZGA5Z2E1aWE0aWIya2E1amA4alY6alQ7bFc5aFY4ZlU5ZFk2ZFI0YVYzZFkzZloyaFs0aVwzaVwwaV0ubF4uaFwsZlssZVouZlswZVAzZE4zaFA0ZlEwZFEvZVIsZlUtZlErZU8qaFMpZlMnaFUrbFYrbFcpblctblYvcFYwbFQwalQvZkwqZUopZkwtaUwpaU0na0wmbU4nbEgmb0oncEolb00nb00qck0rc0wqck4ucE4vcE8xbk8ubk4rbEUnakQma0YqbkQnb0QlcUMlcUEmckIidEQhdkEkcz8lbj4kbTwjbDggcjggdkQgeEQidkYedkIeeEAedz4aeT8ZdzoZcT4ebz4eaj0cazsabToZcDoZeUEXfEIWd0MYeEAUeD4Udj0SdDwUdT4Qdj4Ocz0QczsOcjwTc0AVb0AWa0EXbjwUdkENeEELdkMOdEALcz4KcT8Ibz4KckIGbUAFbT8KaUELa0QSbkIQbkEOckUFdUUEckYHcEUEcEgEbUgDbEYFbEsEbEwCaUoEaEoCaUgGaEkJZkkIaEkMakkPbEgMbEgJbk4CblAAcE4DbVAEalEEaVIGaFEHa1YGaFYJaVIKalALbE4KbU0LbU4Obk4Qb0wRbU8SalITalEPblcFblgDb1QFb1kHcFgJcFoLb1wJcFkPb10PbV0La10KalwIaFwIZ10JZV4KY10IZF8LZmANaGANaV4Lb1YQcVUSblUObVcSbVkUa1oUalwSaVkYZ10WaFwSYlcKYVoNYVsOY1wQaFYZaFYbaFQXZVYYZFgaYVkZYVkWXlYbXFkXYFgVY1YTY1INX1MNXVQOXlYQX1McXVMeYVMcXlEaW1EZW1EWXVEVWU0WW04SYU8UYk8WZE4WZE0UaEwTZkwQZEwPYk0QYk4SWUoXV0oYW0oZWkkVWEkTWUgQW0kQWUMQW0UMXUgPYEgTYkgUZ0cTZUUOYkYOWUERVkARWkEUW0AQWz8NXT4MX0AMXjwNXToMYTwKYT8NYkAPYEERYUETZkAWaj0PZj8PXTgOXDYNXDkRYDcPYjYNZDYNZTgOZDQQZDEPZzQRaDMPZzcQaDgUajcUaDkWZToXZTsZZDoVZDkTYjAQYC8PYDISYy4SZS0RZisTaCwUZSoUZicVZSsXZCoZZywWaC8YZjAYZzIZajEZbDUbbjIabi8ZcC4ZbC4Yai8YZSUTZiMVZiURYiUUYSMWXyIVYCESXyAWXSAYWx8UXx4SYR0SYx0SZRsSYxkSZBcSZhYRXRUTXxkSYRoSXR8bXCAcYB4bXB0aWR0aWBoZWhkXVhgdVhUZWhYYXBYYWxIYYRUZYxQZYBcZXhgYVxcfVRghWRcgVhQfVxMhVxAgWRAeWA8hVw0jVwsfWg4eXREeYBEfZQ8fYwseYQoeXgseVw0mVQwnWQ8mWQsmWQklWwclXQgjXAUoXwQlXwgjZAgjZBAlYA4lXwwkXQUrWwQtXQgsYAUrYAIrYwIrZAMpZAMtZAEvaAEsZgQqagcqZg4qZAsqZAgqZAIxZQAzYQIyZQQxZwUzaQYzaQcwawc0bAY2bQgybgcyawgwZwsvZw0vaBMvcBAwbQ0wbAg5bQY7aQg5bQo4cAo4cQ03bw42cQ46cw85bxA6bxI7bxA3ag82aBE2aRM1ZRU0axc1bRU1axM2dRA7dg48dBE9dxI6dhQ5eBY5eBY7ehU4exg3fBU6fhU6exU/ehNAehNCfBVCfRZFfBVHfhhEfhlCgBtDfRlAfBdAexg0eRYzfhgzehs0eBs0dx40dx43eSAzdyIyeiA1eyM1eCA3eiA6eiI7eiQ6eyE9fR5Aex08eh06dyIweSEudiUvdCEvdB8tdRwucxwvdxoqdxcucxkvcBkvbxcwcRUwbBgvaRgubRoubxsudhoneBomdBondhcoeBUpeBMpdhMrdxEneREldw4pdBEqcRQqbxQpahIpbQsrcA4qeBAjehAhdxIidw4ieAwjdgokdAsldAkhdQggcgYjcgolcQ4kbxAkahEkaAkkbAoldAgddgYcdAsccgcccQQdbwQdbgYfbQMZagMdbAYfaAkfbA4dbBAdbgwdbgoebQQWbQIVbgYWagQWaAIWZgMWZQQYZAQSYQQWZAYYZQgZZwkZZwsZZhAaXg4ZYQsZZAUQZAMOZwYQYgcQYAcQXwkQYAoSXQsNXA0RYA0SZRETZw8SaRASZg0RZAwRXgsKXAoIYAoJXg4KXBAKXRIKXxIMXhMIXRQGYBUJXhcKYBQMYxMMZRUMZRcMZxMMaBEMahAMZRAMYxEMXhQDXBMCYBIDXxYDYRcDYRkEYxoGYhsDYBwBYx0EYR8FZBwHZhwHZx4IZh8Iah0IaxwHbRwHahoGZxoGvUw8vUk9u0g8u0Y9uUk7uEg6uEk+uUZBuURCuEJBuURFukZGu0ZIu0hFukhCtkk3t0g1tkw4tEg3s0c5skU5s0M7sEQ5r0I3r0Q7sUI8sT9As0ZFs0lCskY/rUE2rUA0q0Q2q0A5rD45qj08qz4+qD47pjw8qEA9qkA/q0RArEVBrUZGq0FHqkBEoz08ojs7oz88ozw/ozpAozpDpTxDoTpEoTlGoT1Eoz1FpEFDpENDpkdGpkJKpUFJnjhHnjZInTlGnzpJnzlMoDtNoT1MnzxPnztSnz9PoT9No0RPoEdIoENInkNGoEFKnjtUnjpWmztTnj5VoD9VoEFWoENTnkJXn0NZnURVn0VUoElSnEhLnEVOnURQnURbnkRemkNbnEdankhanktZnUtXm0xbnE5bmUtZm0xXmUhVmEhSlklNmlFPmk5Smk9dm1FfmE5emFFbmlNamFRYmFJWllVZlldZlFRXllNVlFNQkUxQk01UlE9VlFlalVtbk1hcklpYk1tWkltUkVhTj1xUj15TjVpTj1hSjU9SjlJUj1RUjV9UjWJUjF5Xi19Ti2BQiV9PiVxPh19PhmBNhl1Qh1tPh1lQiFlTiFdUiFFTh1RNh1ZNh1dQhmJLhGJJiGNLhWRNgmRNgWZPgmhPf2ZQfmRSfmhRgWlRgGxQgG1OgG9NgHBQgHRPgXBXgW5UgW5RfGNTfGFUemRRe2VVfWVXfWdYfWpXemhZemdcemtafGxYe3BaenFTenJSem5Te21Ud2Zcd2VfdmVadmlddmlgdmxgd25fc21gcmxic29gdnBedm9adXBYdHRVc3hcdHRcb2xhbmtjbmtfbm9hbnBjbnNjb3Rha3NiaXNka3ZhbnZfbnVdbXlcbnRYbnNWbnJab29abnNcZ3NjZnJmZnFhZnViZndjZXlhZ3pgY3lgYXphY3teZnteZn1ZZ3ZVZ3ZaZndcXnlhXHljXnZgXXpfXX1fXH5dXn5bWn1bWH5cW35ZXn5ZXn1UYXZUYHVZX3pZVnxcVH5dVnpdVXxZVX5YVH1VVnxUU3pVUHtVU3pSWHlSV3dPW3VTXXNTW3dVWXhUT3hVTHlWUHdXTndTTXlRTndOUHdOS3VOT3RMUXVNU3RRVXJRWG5RVHFLSXNPRnROSnJRSXBNSHBLSm9JTG9KSWxJR2xITGxIT2xLUGlJU2pQUG1PUG5RT25NRmlJRGlIR2lMSGdHSGVISmRHTGVHSmFISWBGTWFHTmNIUGBLT2VSTmZOTWVMRl9HRF9FRmBKRlxHSFtJSlpITFtJSlVHTVdJTlpKT1dOTV1TTF1PS2BQTFxNSFNIR1JGRlRKSVJKS1BJTlFMS05NTU5PTlBPT1FUSldUSVdPS1RPSUpMSUhLR0xKSEtOR0lQSUhRSEdUSEVUSkhWS0pUS0xZSU9YR1JXR1BURlFSSU5URURVRUFVQ0VTRUVYRkNZRkRcRkZcQ0ZeRUheREpcREpaQ0xZQlFZQlBeQk9fQ01fQ0xdP0JcPj9cP0NZPkNePkJgPkdiOERjOkhjPUliPE5iPE5aPUpcPUlZPUleNkRiNEJjNkRfNUZjNEdlM0lmNUtlL0plMU1kNE1jNU1hNUtgNktdNU5ZM1ReNFFgLUlkK0hmLUdiLEtjK01kKk9iLFBhJk1hKFBfK1FfLFNbME1XLkxbLU1dJExfIk1fJElgJktdJEtaJE1ZJk9ZI01WIUxWJE9WJlBXKk1XLExWL01RLFBQK1JRKlRPKVFTIEtUHUtUIUhVIUxSIUpPIktNJE1OI0pLIUlKJUtKJkxMKEtOK0xKLElQLkhRKklRKEtQIUdIH0dHIkVJIkhFI0dDJEhCJklDJkZAJUU+KEdAKElCKkhELEdELUhDLUVKKUZIKEdGQipqQyxpRClsQCtrQCxtQS9tPzBuQy9uRTBtQzFxQTJwPzNxPTNyPDR0PjV0Pjd2PDh4QDh2Qjh1QjZzQDVzSDBtSC9wSTJtSC5rSy1rTC5pSy9nTjBqUC9rTjJoTDFmSjRkSjNiSDZkRzdmRjlmSDdoSDhqSjVoUjBsVC9uUTNsVDBpVC5oVC9lUzFlVzBlWDBjVjNlVDNkUzZnUThoTzplTjxmTjpjTjhfUDdiWzBiWy1iXDFkWzFgWjBeVzNdXDRcXTNZWzZcWDZcVDhcUzpdUz1iVjtjWDljWDhhXDNXWjFXXjNVWjVXWTZVWDlXWjpUWjpRWTxVWDtXWjxbWj1dWUBhVkFeVEFcUkJcVT9aVz5bXTpQXDlNXjlSXT1PXT9RXkFQYUFQYUJOYkJSYENUXz9WXz5YX0BaXkFcXj9eXkNdXkVbX0RZX0JYY0FMY0JJYz9MZ0FOa0FPbUNPbD9QaT5XZztWZjpVZDhVZjpSZzxSb0RNbkZMcEJMcURPcUZRckVTckNUdUVTdkVVdUJTc0FUcj9Tcj5RcTxQcDtSbzlTbjhSbjlVbztXbztZcT1WcT1UeEdVeUhXeElTe0ZUfUdTfEdQfEpQfkZPfEZMf0hOfkpOf0xQf05Pf09MgFBQgVBSglJTgU5TgExSfURKfENIfkJMgEVJf0dIgUlHgkpJhEhEhUhIhUpJhk5LiExThkdRhklNhEdCgkhBhURChkhAhko/h0xAiEtCikw/ik49i01BiU1DikpHjFRJi1BHjU48jVA6jkw9jlA+jlM9j1Q/j1NBklU/klc/k1RBkVNDkU9EkU5Gk1VMklRIlVg+lVs9lVY8llhAlllCmFhEl1ZFnFpEm1VFmVVGmVNKl0tIl05FmFFFnlpDn1xCn1hCoFlFn1tHoFpJn1hKo1lJpFpLo1ZJoVZKn1NHn1FHnUxIn05Qn1FNp1lMqFtNqFhJp1dNp1hQplVRpVNQqVRSqVNUqVJQp1FPp1FLplBJpEtHpE1Oq1JVq1NYrVNTq09VqU5WqUxWqEtUq0pXqkhYrElUqklTqEZQqkpJrE5Mq0tPrEdZq0Zcr0harUVYq0NXrEJVrENTrUBVrD1VrkBSrUJRrEJMsEhKsEdOsklPr0ZQrjtWrDpYsDxXrjpUrDlSrThQrjpPsDdQrzROsThOsDpNsj5Ps0BOtERKsD9HsD5JsTJOsDBOszNQszNMsTJKszNHszZItTNHtjFGtjVGtTdGtTlItjlKtjxLtz1Itz9IuEFJt0BFtz5Etz9BtjxEtjtG"};var Ze=i=>!!(i.person||i.ghost||i.moc);function fn(i){let t=i.filter(s=>!Ze(s)),e=s=>Math.max(1e-9,...t.map(s)),n={i:e(s=>Math.log1p(s.inlinks||0)),m:e(s=>Math.log1p(s.mentions||0)),b:e(s=>s.bc||0),r:e(s=>Math.log1p(s.recent||0))};return s=>.4*Math.log1p(s.inlinks||0)/n.i+.3*Math.log1p(s.mentions||0)/n.m+.2*(s.bc||0)/n.b+.1*Math.log1p(s.recent||0)/n.r}var tn=i=>{let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619);return t>>>0},Cu=i=>{let t=Math.max(1,...i.filter(e=>!Ze(e)).map(e=>e.recent||0));return e=>Ze(e)?0:Math.min(1,Math.exp(-(e.age||0)/7)+.6*(e.recent||0)/t)},Iu=i=>{let t=i.quality&&i.quality.stale_days||180;return e=>!Ze(e)&&!/\d{4}-\d{2}-\d{2}/.test(e.name||"")&&(e.age||0)>t};var Le={ATOM:1.8,SCALE:.16,PROTEIN:[.93,.93,.9],RNA:[.94,.34,.15],TARGET:[.13,.31,.8],OTHER:[.38,.64,.97],HIT:[1,.79,.2],NEAR:[.78,.62,.96],COIL:{lead:90,ease:40,radius:60,pitch:34},NEAR_AXIS:[0,1,0],FAR_AXIS:[-1,0,0]};function Uu(i,t,e,n){let s=new Float64Array(t*12),r=(_,E)=>_[0]*E[0]+_[1]*E[1]+_[2]*E[2],a=(_,E)=>[_[1]*E[2]-_[2]*E[1],_[2]*E[0]-_[0]*E[2],_[0]*E[1]-_[1]*E[0]],o=_=>{let E=Math.hypot(_[0],_[1],_[2])||1;return[_[0]/E,_[1]/E,_[2]/E]},l=(_,E,y)=>{let v=Math.cos(y),b=Math.sin(y);return[_.map((g,S)=>v*g+b*E[S]),E.map((g,S)=>v*g-b*_[S])]},c=i.o.slice(),h=o(i.z),u=o(i.x),d=a(h,u),f=0,m=null,M=null,x=0,p=0;if(n){let _=n.pitch/(2*Math.PI*n.radius);x=1/(n.radius*(1+_*_)),p=x*_;let E=n.axis,y=r(E,h);M=o([E[0]-y*h[0],E[1]-y*h[1],E[2]-y*h[2]]),m=a(M,h)}for(let _=0;_<t;_++){let E=i.phase+_*e.turn,y=Math.cos(E),v=Math.sin(E),b=_*12;for(let g=0;g<3;g++)s[b+g]=c[g],s[b+3+g]=y*u[g]+v*d[g],s[b+6+g]=y*d[g]-v*u[g],s[b+9+g]=h[g];if(n&&f>=n.lead){let g=Math.min(1,(f-n.lead)/(n.ease||1)+1e-9),S=g*g*(3-2*g);[h,m]=l(h,m,x*S*e.rise),[m,M]=l(m,M,p*S*e.rise),h=o(h);let R=r(u,h);u=o([u[0]-R*h[0],u[1]-R*h[1],u[2]-R*h[2]]),d=a(h,u)}for(let g=0;g<3;g++)c[g]+=h[g]*e.rise;f+=e.rise}return s}var tc=null;function or(){if(tc)return tc;let i=Ru,t=atob(i.atoms),e=t.length/3,n=new Float32Array(e*3),s=new Uint8Array(e),r=new Int16Array(e),a=new Int8Array(e).fill(-1),o=new Float32Array(e);for(let y=0;y<e*3;y++)n[y]=t.charCodeAt(y)*i.q+i.lo[y%3];let l=i.protein;if([i.rna,i.target,i.other].forEach((y,v)=>y.forEach(([b,g])=>{for(let S=0;S<g;S++,l++)s[l]=v+1,r[l]=b})),l!==e)throw new Error("the Cas9 model's tables don't add up to its atoms: run scripts/cas9_model.cjs again");for(let y=0;y<e;y++)i.flank.forEach(([v,b],g)=>{(s[y]===2&&r[y]===v||s[y]===3&&r[y]===b)&&(a[y]=g)});let c=12,h=new Map,u=y=>`${Math.floor(n[y*3]/c)},${Math.floor(n[y*3+1]/c)},${Math.floor(n[y*3+2]/c)}`,d=new Uint16Array(e);for(let y=0;y<e;y++){let v=u(y);h.has(v)||h.set(v,[]),h.get(v).push(y)}for(let y=0;y<e;y++){let v=n[y*3],b=n[y*3+1],g=n[y*3+2],S=Math.floor(v/c),R=Math.floor(b/c),T=Math.floor(g/c),U=0;for(let P=-1;P<=1;P++)for(let O=-1;O<=1;O++)for(let I=-1;I<=1;I++)for(let G of h.get(`${S+P},${R+O},${T+I}`)||[]){let W=n[G*3]-v,Z=n[G*3+1]-b,ot=n[G*3+2]-g;W*W+Z*Z+ot*ot<c*c&&U++}d[y]=U}let f=Array.from(d).sort((y,v)=>y-v),m=f[Math.floor(e*.08)],M=f[Math.floor(e*.97)];for(let y=0;y<e;y++)o[y]=1-.72*Math.max(0,Math.min(1,(d[y]-m)/Math.max(1,M-m)));let x=y=>{let v=[0,0,0],b=0;for(let g=0;g<e;g++)y(g)&&(v[0]+=n[g*3],v[1]+=n[g*3+1],v[2]+=n[g*3+2],b++);return v.map(g=>g/(b||1))},p=(y,v)=>{let b=-1,g=-1/0;for(let S=0;S<e;S++)if(y(S)){let R=v(S);R>g&&(g=R,b=S)}return[n[b*3],n[b*3+1],n[b*3+2]]},_=i.pair.map(([y,v,b,g,S])=>({x:y,y:v,z:b,strand:g,base:S,r:Le.ATOM})),E=[];for(let y of[0,1])for(let v of[0,1]){let b=_.filter(S=>S.strand===y&&S.base===v),g=S=>b.reduce((R,T)=>R+T[S],0)/b.length;E.push({x:g("x"),y:g("y"),z:g("z"),strand:y,base:v,r:v?3.3:3.6})}return tc={M:i,n:e,xyz:n,kind:s,res:r,flank:a,shade:o,pair:_,beads:E,base:[Le.PROTEIN,Le.RNA,Le.TARGET,Le.OTHER],flankAt:i.flank.map((y,v)=>x(b=>a[b]===v)),held:x(y=>s[y]===1&&r[y]<=i.spacer+1||s[y]===2&&r[y]>30-i.spacer),labels:{protein:p(y=>s[y]===0,y=>-n[y*3+1]),rna:p(y=>s[y]===1,y=>Math.hypot(n[y*3],n[y*3+1],n[y*3+2]))}}}function Nu(i,t,e){let n=or(),s=n.M,r=t&&t.ids?new Set(t.ids):null,a=new Map,o=i.filter(y=>!Ze(y)&&(!r||r.has(y.id))).sort((y,v)=>y.id<v.id?-1:y.id>v.id?1:0),l=new Set(o.map(y=>y.id));t&&t.notes.forEach(y=>{l.has(y.path)&&a.set(y.path,y.hits?"hit":"near")});let c=o.filter(y=>a.get(y.id)==="hit"),h=c.find(y=>y.id===e)||c[0]||null,u=h?o.indexOf(h):o.length>>1,d=o.slice(h?u+1:u),f=d.slice(0,s.flank.length).map(y=>y.id),m=d.slice(s.flank.length).map(y=>y.id),M=o.slice(0,u).reverse().map(y=>y.id),x=Uu(s.tails.near,m.length,s.step,{...Le.COIL,axis:Le.NEAR_AXIS}),p=Uu(s.tails.far,M.length,s.step,{...Le.COIL,axis:Le.FAR_AXIS}),_=new Map,E=new Map;return h&&(_.set(h.id,n.held),E.set(h.id,"held")),f.forEach((y,v)=>{_.set(y,n.flankAt[v]),E.set(y,"flank")}),[[m,x,"near"],[M,p,"far"]].forEach(([y,v,b])=>y.forEach((g,S)=>{_.set(g,[v[S*12],v[S*12+1],v[S*12+2]]),E.set(g,b)})),{pos:_,where:E,all:o,hits:a,sites:c,site:h?h.id:null,flankIds:f,nearIds:m,farIds:M,near:x,far:p,scan:t||null}}var lr=Le.SCALE,ec=28,ax=.3,as=i=>[i[0]*lr,-i[1]*lr,-i[2]*lr];function nc(i,t,e){let n=new Vn,s=new ge(t,e,i.n),r=new Jt,a=new Pt;for(let o=0;o<i.n;o++){r.makeScale(Le.ATOM,Le.ATOM,Le.ATOM).setPosition(i.xyz[o*3],i.xyz[o*3+1],i.xyz[o*3+2]),s.setMatrixAt(o,r);let l=i.base[i.kind[o]];s.setColorAt(o,a.setRGB(l[0],l[1],l[2],De).multiplyScalar(i.shade[o]))}return n.rotation.x=Math.PI,n.scale.setScalar(lr),n.add(s),{root:n,mesh:s}}var Pu={id:"cas9",name:"Cas9",hint:"Notes as DNA, the Guide scan's matches as cut sites",home:{yaw:0,pitch:.2,dist:44,min:14,max:240,minPitch:-1.4},stage:{light:"camera",fog:[70,260],ambient:.5},actions:["guide-scan"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,invalidate:a}){let o=or(),l=new Map(e.nodes.map(Y=>[Y.id,Y])),c=Y=>l.get(Y)?l.get(Y).name:Y,h=new Mi(1,1),u=new bi,{root:d,mesh:f}=nc(o,h,u);i.scene.add(d);let m=new Jt,M=new Pt,x=(Y,tt)=>M.setRGB(Y[0],Y[1],Y[2],De).multiplyScalar(tt),p=null,_=null,E=[],y={atoms:0,pairs:0,fine:0,beads:0},v=n.scan||null,b=n.selected||null,g=null,S=null,R=Y=>{let tt=_.hits.get(Y);return tt==="hit"?Le.HIT:tt==="near"?Le.NEAR:null},T=Y=>S&&!S.has(Y)?ax:1;function U(){for(let Y=0;Y<o.n;Y++){let tt=o.flank[Y]>=0?_.flankIds[o.flank[Y]]:null,N=tt?R(tt):null;f.setColorAt(Y,x(N||o.base[o.kind[Y]],o.shade[Y]*(tt?T(tt):1)))}f.instanceColor.needsUpdate=!0}function P(){p&&(d.remove(p),p.dispose());let Y=[_.nearIds,_.farIds].reduce((N,X)=>N+Math.min(X.length,ec)*o.pair.length+Math.max(0,X.length-ec)*o.beads.length,0);p=new ge(h,u,Math.max(Y,1)),p.count=Y;let tt=0;y={atoms:o.n,pairs:_.nearIds.length+_.farIds.length,fine:0,beads:0},[[_.nearIds,_.near,!0],[_.farIds,_.far,!1]].forEach(([N,X,ft])=>N.forEach((Mt,at)=>{let pt=at<ec,Dt=at*12,xt=R(Mt),H=T(Mt);pt?y.fine++:y.beads++;for(let ut of pt?o.pair:o.beads){m.makeScale(ut.r,ut.r,ut.r).setPosition(X[Dt]+X[Dt+3]*ut.x+X[Dt+6]*ut.y+X[Dt+9]*ut.z,X[Dt+1]+X[Dt+4]*ut.x+X[Dt+7]*ut.y+X[Dt+10]*ut.z,X[Dt+2]+X[Dt+5]*ut.x+X[Dt+8]*ut.y+X[Dt+11]*ut.z),p.setMatrixAt(tt,m);let j=ut.strand===0===ft?Le.OTHER:Le.TARGET;p.setColorAt(tt++,x(xt&&(ut.base||!pt)?xt:j,(ut.base?.78:1)*H))}})),y.atoms+=tt,d.add(p)}let O=()=>{if(!v)return`${It(_.all.length,"note")} \xB7 no guide`;let Y=`\u201C${v.guide}\u201D${v.where?" "+v.where:""}`,tt=[..._.hits.values()].filter(N=>N==="near").length;return _.sites.length?`${Y}: exact in ${It(_.sites.length,"note")} of ${_.all.length}${tt?` \xB7 look-alikes in ${tt}`:""}`:`${Y}: no match in ${It(_.all.length,"note")}`},I={label:"Open Guide scan",title:"Open Guide scan",run:()=>r("guide-scan")},G=()=>_.sites.findIndex(Y=>Y.id===_.site);function W(Y){let tt=_.sites.length;tt&&(g=_.sites[(G()+Y+tt)%tt].id,J(),a())}function Z(Y){_.hits.get(Y)==="hit"&&(g=Y,J(),a())}function ot(){t.stat(O());let Y=[{text:"Cas9 protein",at:as(o.labels.protein),dy:-16,run:()=>r("guide-scan"),title:"Cas9 protein. Open Guide scan"},{text:v?`RNA \xB7 ${fe(v.guide,24)}`:"RNA",at:as(o.labels.rna),color:"#f2764a",dy:-14,run:()=>r("guide-scan"),title:"The guide. Open Guide scan"},{text:"DNA",at:as(o.M.tails.near.o),color:"#8fbcfb",dy:16,title:_.sites.length?"DNA. Show the exact matches":"DNA. Open Guide scan",run:()=>{if(!_.sites.length)return r("guide-scan");S=new Set(_.sites.map(N=>N.id)),F(),a()}}],tt=_.site||(b&&_.pos.has(b)?b:null);if(tt&&Y.unshift({text:fe(c(tt),34),at:as(_.pos.get(tt)),strong:!0,dy:30,run:()=>s(tt),title:`Open ${c(tt)}`}),t.labels(Y),t.chip(S?`Exact matches of \u201C${fe(v.guide,24)}\u201D`:null,()=>{S=null,F(),a()}),!v)t.controls({lines:[`${It(_.all.length,"note")}, a base pair each. No guide yet.`],buttons:[I]});else if(!_.sites.length)t.controls({lines:[`No \u201C${fe(v.guide,24)}\u201D in these ${It(_.all.length,"note")}.`],buttons:[I]});else{let N=_.sites.length===1;t.controls({lines:[`Site ${G()+1} of ${_.sites.length}`],buttons:[{label:"\u2039",title:"Previous site",off:N,run:()=>W(-1)},{label:c(_.site),title:`Open ${c(_.site)}`,wide:!0,run:()=>s(_.site)},{label:"\u203A",title:"Next site",off:N,run:()=>W(1)}]})}}function F(){U(),P(),ot()}function J(){_=Nu(e.nodes,v,g),S&&!_.sites.length&&(S=null),E=[];for(let[Y,tt]of _.pos){let N=_.where.get(Y);E.push({at:as(tt),r:(N==="held"?14:N==="flank"?6:7)*lr,key:{kind:"note",id:Y,tip:c(Y)}})}F()}function L(){b&&_.hits.get(b)==="hit"&&_.site!==b?(g=b,J()):g=_.site}return J(),L(),{targets:()=>E,click(Y){b=Y.id,_.hits.get(Y.id)==="hit"?(g=Y.id,J()):ot(),s(Y.id)},update(Y){"scan"in Y&&(v=Y.scan||null,S=null),"selected"in Y&&(b=Y.selected||null),J(),L()},stat:O,today(){if(!_.site)return null;let Y=_.sites.length;return{text:`Cas9 is on ${c(_.site)}: site ${G()+1} of ${Y} for \u201C${v.guide}\u201D`,label:Y>1?"Next site":"Open it",run:()=>Y>1?W(1):s(_.site)}},api:{layout:()=>_,drew:()=>y,at:Y=>_.pos.has(Y)?as(_.pos.get(Y)):null,step:W,go:Z,highlighted:()=>S?[...S]:null}}}};var bo=18,Fu=4,Du="#facc15",ox=14;function lx(i,t){let e=t.X.map(a=>[a[0]*bo,a[1]*bo,(a[2]||0)*bo]),n=new Array(t.n).fill(0),s=new Map,r=new Map;t.domains.forEach(([a,o],l)=>{for(let c=a;c<=o&&c<t.n;c++)n[c]=l}),i.rows.forEach((a,o)=>{for(let l of new Set(a)){let c=i.ids[l];s.has(c)||s.set(c,[]),s.get(c).push(o)}});for(let[a,o]of s){let l=[0,0,0],c=tn(a),h=c%628/100,u=(c>>>10)%314/100-1.57,d=bo*.03;for(let f of o)for(let m=0;m<3;m++)l[m]+=e[f][m]/o.length;r.set(a,[l[0]+Math.cos(h)*Math.cos(u)*d,l[1]+Math.sin(u)*d,l[2]+Math.sin(h)*Math.cos(u)*d])}return{beads:e,domainOf:n,daysOf:s,notes:r}}var Lu={id:"genome",name:"Genome fold",hint:"The journals as one folded strand",home:{yaw:.6,pitch:.25,dist:46,min:12,max:110},stage:{fog:[34,80]},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:a,invalidate:o}){let l=e.strand,c=n.fold,h=c.n;if(h<Fu){let j=()=>`${It(h,"day")} of journals`;return t.stat(j()),t.controls({at:"centre",lines:[`Genome fold needs ${Fu} days of journals that name notes.`,`${It(h,"day")} so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:j,today:()=>null,api:{empty:!0}}}let u=lx(l,c),d=new Map(e.nodes.map(j=>[j.id,j])),f=fn(e.nodes),m=[...u.notes.keys()].filter(j=>d.has(j)),M=new Map(m.map(j=>[j,f(d.get(j))])),x=j=>.22+.55*Math.sqrt(Math.max(0,M.get(j))),p=a.palette,_=j=>p[j%p.length],E="#6b7280",y=new Jt,v=new Ge,b=new B,g=new B(0,1,0),S=new Pt,R=j=>(i.scene.add(j),j),T=R(new ge(new Ce(1,16,12),new Ee({roughness:.55}),h)),U=R(new ge(new hn(1,1,1,8,1,!0),new Ee({roughness:.7}),Math.max(h-1,1)));U.count=h-1;for(let j=0;j+1<h;j++){let dt=u.beads[j],Lt=u.beads[j+1],Ht=u.domainOf[j]===u.domainOf[j+1],Zt=Ht?.11:.05;b.set(Lt[0]-dt[0],Lt[1]-dt[1],Lt[2]-dt[2]);let Tt=b.length()||1e-6;y.compose(new B((dt[0]+Lt[0])/2,(dt[1]+Lt[1])/2,(dt[2]+Lt[2])/2),v.setFromUnitVectors(g,b.divideScalar(Tt)),new B(Zt,Tt,Zt)),U.setMatrixAt(j,y),U.setColorAt(j,S.set(Ht?_(u.domainOf[j]):E))}let P=R(new ge(new Ce(1,16,12),new Ee({roughness:.4}),Math.max(m.length,1)));P.count=m.length;let O=new be({color:Du,transparent:!0,opacity:.85}),I=new be({color:Du,transparent:!0,opacity:.18}),G=new Ce(.3,12,8),W=c.loops.map((j,dt)=>{let Lt=u.beads[j.a],Ht=u.beads[j.b],Zt=new yi(new B(...Lt),new B((Lt[0]+Ht[0])*.68,(Lt[1]+Ht[1])*.68,(Lt[2]+Ht[2])*.68),new B(...Ht)),Tt=Zt.getPoint(.5),Ft=R(new de(new ks(Zt,24,.045,6),O)),oe=R(new de(G,O));oe.position.copy(Tt);let pe=l.rows[j.a].filter(Ut=>l.rows[j.b].includes(Ut)),ce=[...new Set(pe)].map(Ut=>l.ids[Ut]),k=vo(l.days[j.a],l.days[j.b]),it=`${ci(l.days[j.a])} and ${ci(l.days[j.b])}`;return{k:dt,l:j,tube:Ft,dot:oe,mid:[Tt.x,Tt.y,Tt.z],ids:ce,apart:k,pair:it,tip:`${it}: ${It(j.count,"note")} named on both, ${It(k,"day")} apart`}}),Z=new vi(1,1.18,40),ot=j=>R(new de(Z,new be({color:j,side:we,fog:!1}))),F=ot(a.fg),J=ot(a.accent);F.position.set(...u.beads[h-1]),F.scale.setScalar(.62);let L=R(new Ke(new xe,new je({color:a.accent,transparent:!0,opacity:.7}))),Y=n.selected||null,tt=null,N=null,X=()=>tt&&u.notes.has(tt)?tt:Y&&u.notes.has(Y)?Y:null,ft=j=>d.get(j)?d.get(j).name:j,Mt=()=>`${It(h,"day")} \xB7 ${It(c.domains.length,"domain")} \xB7 ${It(c.loops.length,"loop")} \xB7 fit ${c.grade} (stress ${c.stress.toFixed(2)})`,at=W.reduce((j,dt)=>j&&j.l.count>=dt.l.count?j:dt,null),pt=[...m].sort((j,dt)=>M.get(dt)-M.get(j)).slice(0,ox);function Dt(){let j=X(),dt=j?new Set(u.daysOf.get(j)):null,Lt=N?new Set(N.ids):null;for(let Tt=0;Tt<h;Tt++){let Ft=dt&&dt.has(Tt)?.5:.32;y.makeScale(Ft,Ft,Ft).setPosition(...u.beads[Tt]),T.setMatrixAt(Tt,y),T.setColorAt(Tt,S.set(_(u.domainOf[Tt])).multiplyScalar(dt&&!dt.has(Tt)?.35:1))}m.forEach((Tt,Ft)=>{let oe=x(Tt)*(Tt===j?1.25:1);y.makeScale(oe,oe,oe).setPosition(...u.notes.get(Tt)),P.setMatrixAt(Ft,y),P.setColorAt(Ft,S.set(p[(d.get(Tt).cluster||0)%p.length]).multiplyScalar(Lt&&!Lt.has(Tt)?.25:1))});for(let Tt of[T,P])Tt.instanceMatrix.needsUpdate=!0,Tt.instanceColor&&(Tt.instanceColor.needsUpdate=!0);for(let Tt of W)Tt.tube.material=Tt.dot.material=!N||N===Tt?O:I;J.visible=!!(Y&&u.notes.has(Y)&&d.has(Y)),J.visible&&(J.position.set(...u.notes.get(Y)),J.scale.setScalar(x(Y)+.25));let Ht=[];if(j)for(let Tt of u.daysOf.get(j))Ht.push(...u.notes.get(j),...u.beads[Tt]);L.geometry.dispose(),L.geometry=new xe().setAttribute("position",new jt(Ht,3));let Zt=[];j&&Zt.push({text:fe(ft(j),34),at:u.notes.get(j),strong:!0,dy:-22,run:()=>H(j),title:`Open ${ft(j)}`}),c.domains.forEach(([Tt,Ft],oe)=>{Ft-Tt>=3&&Zt.push({text:`${ci(l.days[Tt])} \u2013 ${ci(l.days[Ft])}`,at:u.beads[Tt+Ft>>1],color:_(oe),dy:-14})});for(let Tt of Lt?N.ids.filter(Ft=>d.has(Ft)):pt)Tt!==j&&Zt.push({text:fe(ft(Tt),26),at:u.notes.get(Tt),dy:14});t.labels(Zt),t.chip(N?`Named on both ${N.pair}`:null,()=>{N=null,Dt(),o()}),t.stat(Mt())}function xt(j){N=j,Dt(),o()}function H(j){Y=j,Dt(),o(),s(j)}let ut=[];return u.beads.forEach((j,dt)=>ut.push({at:j,r:.4,key:{kind:"day",id:dt,tip:`${l.days[dt]} \xB7 ${It(new Set(l.rows[dt]).size,"note")} named`}})),m.forEach(j=>ut.push({at:u.notes.get(j),r:x(j),key:{kind:"note",id:j,tip:ft(j)}})),W.forEach(j=>ut.push({at:j.mid,r:.4,key:{kind:"loop",id:j.k,tip:j.tip}})),Dt(),{targets:()=>ut,click(j){j.kind==="note"?H(j.id):j.kind==="day"?s(l.paths[j.id]):xt(W[j.id])},hover(j){let dt=j&&j.kind==="note"?j.id:null;dt!==tt&&(tt=dt,Dt())},frame(){F.quaternion.copy(i.camera.quaternion),J.quaternion.copy(i.camera.quaternion)},update(j){"selected"in j&&(Y=j.selected||null,Dt())},stat:Mt,today:()=>at?{text:`Strongest loop: ${at.pair} name the same ${It(at.l.count,"note")}, ${It(at.apart,"day")} apart`,label:"Show them",run:()=>xt(at)}:null,api:{layout:()=>u,loops:()=>W.map(j=>({a:j.l.a,b:j.l.b,count:j.l.count,ids:j.ids,mid:j.mid})),shown:()=>N?N.k:null,selected:()=>Y,notes:()=>m,show:j=>xt(W[j])},dispose(){O.dispose(),I.dispose(),G.dispose(),Z.dispose()}}}};var Eo=18,ic="#60a5fa",sc="#f59e0b",Ou=864e5;function cx(i,t){let e=new Map;for(let a of i)!Ze(a)&&typeof a.born=="string"&&Number.isFinite(Date.parse(a.born))&&e.set(a.id,Date.parse(a.born)/Ou);let n=new Map,s=new Map;for(let a of e.keys())n.set(a,[]),s.set(a,[]);let r=new Set;for(let a of t){if(a.kind!=="link"||!e.has(a.source)||!e.has(a.target)||e.get(a.source)===e.get(a.target))continue;let[o,l]=e.get(a.source)<e.get(a.target)?[a.source,a.target]:[a.target,a.source],c=o+`
`+l;r.has(c)||(r.add(c),n.get(l).push(o),s.get(o).push(l))}return{day:e,older:n,newer:s}}function Bu(i,t){let e=new Set,n=[t];for(;n.length;)for(let s of i.get(n.pop())||[])e.has(s)||(e.add(s),n.push(s));return e}function hx(i,t){let e=[...t.day.keys()],n=e.map(h=>t.day.get(h)),s=Math.min(...n),r=Math.max(...n),a=Math.max(r-s,1),o=new Map(i.map(h=>[h.id,h])),l=[...new Set(e.map(h=>o.get(h).cluster||0))].sort((h,u)=>h-u),c=new Map;for(let h of e){let u=tn(h),f=l.indexOf(o.get(h).cluster||0)/Math.max(l.length,1)*Math.PI*2+(u%1e3/1e3-.5)*(Math.PI*2/Math.max(l.length,1))*.8,m=Eo*(.25+.65*((u>>>10)%1e3/1e3));c.set(h,[Math.cos(f)*m,((t.day.get(h)-s)/a-.5)*Eo*1.6,Math.sin(f)*m])}return{pos:c,from:s,to:r,axis:[[0,-Eo*.8,0],[0,Eo*.8,0]]}}var wo=i=>new Date(i*Ou).toISOString().slice(0,10),ku={id:"cones",name:"Light cones",hint:"What a note rested on and what it touched",home:{yaw:.7,pitch:.2,dist:52,min:14,max:120},stage:{fog:[40,95]},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:a,invalidate:o}){let l=cx(e.nodes,e.links),c=[...l.day.keys()];if(c.length<2){let F=()=>It(c.length,"dated note");return t.stat(F()),t.controls({at:"centre",lines:["Light cones needs notes with a date and links between them.",`${It(c.length,"dated note")} so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:F,today:()=>null,api:{empty:!0}}}let h=hx(e.nodes,l),u=new Map(e.nodes.map(F=>[F.id,F])),d=fn(e.nodes),f=F=>.25+.6*Math.sqrt(Math.max(0,d(u.get(F)))),m=F=>u.get(F).name,M=a.palette,x=new Jt,p=new Pt,_=F=>(i.scene.add(F),F),E=_(new ge(new Ce(1,16,12),new Ee({roughness:.45}),c.length)),y=[];for(let[F,J]of l.older)for(let L of J)y.push(...h.pos.get(L),...h.pos.get(F));let v=_(new Ke(new xe().setAttribute("position",new jt(y,3)),new je({color:a.muted,transparent:!0,opacity:.22})));_(new Ke(new xe().setAttribute("position",new jt([...h.axis[0],...h.axis[1]],3)),new je({color:a.muted,transparent:!0,opacity:.6})));let b=F=>new be({color:F,transparent:!0,opacity:.1,side:we,depthWrite:!1}),g=_(new de(new Qi(1,1,40,1,!0),b(ic))),S=_(new de(new Qi(1,1,40,1,!0),b(sc)));g.visible=S.visible=!1;let R=n.selected&&h.pos.has(n.selected)?n.selected:null,T=null,U=new Map,P=F=>(U.has(F)||U.set(F,{past:Bu(l.older,F),future:Bu(l.newer,F)}),U.get(F)),O=()=>T||R,I=()=>R?`${m(R)} \xB7 ${It(P(R).past.size,"note")} in its past \xB7 ${It(P(R).future.size,"note")} in its future`:`${It(c.length,"dated note")} \xB7 ${It(y.length/6,"link")} \xB7 ${vo(wo(h.from),wo(h.to))} days`;function G(F,J,L){let Y=h.pos.get(J)[1],tt=h.axis[1][1],N=h.axis[0][1],X=Math.max(L?tt-Y:Y-N,.5);F.visible=!0,F.scale.set(X*.55,X,X*.55),F.position.set(h.pos.get(J)[0],Y+(L?X/2:-X/2),h.pos.get(J)[2]),F.rotation.set(L?Math.PI:0,0,0)}function W(){let F=O(),J=F?P(F):null;c.forEach((Y,tt)=>{let N=f(Y)*(Y===F?1.4:1);x.makeScale(N,N,N).setPosition(...h.pos.get(Y)),E.setMatrixAt(tt,x);let X=J?Y===F?p.set(a.accent):J.past.has(Y)?p.set(ic):J.future.has(Y)?p.set(sc):p.set(M[(u.get(Y).cluster||0)%M.length]).multiplyScalar(.22):p.set(M[(u.get(Y).cluster||0)%M.length]);E.setColorAt(tt,X)}),E.instanceMatrix.needsUpdate=!0,E.instanceColor&&(E.instanceColor.needsUpdate=!0),g.visible=S.visible=!1,F&&(G(g,F,!1),G(S,F,!0));let L=[{text:ci(wo(h.from)),at:h.axis[0],dy:12,color:a.muted},{text:ci(wo(h.to)),at:h.axis[1],dy:-12,color:a.muted}];if(F&&L.push({text:fe(m(F),34),at:h.pos.get(F),strong:!0,dy:-18,run:()=>Z(F),title:`Open ${m(F)}`}),J){let Y=(tt,N)=>[...tt].sort((X,ft)=>N*(l.day.get(X)-l.day.get(ft)))[0];for(let[tt,N]of[[J.past,-1],[J.future,1]]){let X=Y(tt,N);X&&L.push({text:fe(m(X),26),at:h.pos.get(X),dy:14,color:N<0?ic:sc})}}t.labels(L),t.stat(I())}function Z(F){R=F,W(),o(),s(F)}let ot=c.map(F=>({at:h.pos.get(F),r:f(F),key:{kind:"note",id:F,tip:`${m(F)} \xB7 ${u.get(F).born}`}}));return W(),{targets:()=>ot,click(F){F.kind==="note"&&Z(F.id)},hover(F){let J=F&&F.kind==="note"?F.id:null;J!==T&&(T=J,W())},update(F){"selected"in F&&(R=F.selected&&h.pos.has(F.selected)?F.selected:null,W())},stat:I,today:()=>{let F=c.reduce((J,L)=>J&&P(J).future.size>=P(L).future.size?J:L,null);return F&&P(F).future.size?{text:`${m(F)} reaches the most: ${It(P(F).future.size,"note")} in its future`,label:"Show it",run:()=>{R=F,W(),o()}}:null},api:{layout:()=>h,graph:()=>l,cones:F=>P(F),selected:()=>R,notes:()=>c},dispose(){v.material.dispose(),g.material.dispose(),S.material.dispose()}}}};var Vu=(i,t)=>{let e=new Array(i).fill(0);for(let[n,s]of t)e[n]++,e[s]++;return e};function zu({n:i,bars:t,ground:e,sag:n,sagging:s,weakest:r,busiest:a,carry:o},l){let c=Vu(i,t),h=[];n[s]>0&&h.push({text:`${l(s)} sags most (${n[s].toFixed(2)}). It is held by ${It(c[s],"link")}; link it to a note near the ground notes and it stiffens.`,label:"Open note",note:s}),r>=0&&h.push({text:`${l(t[r][0])} \u2013 ${l(t[r][1])} is closest to buckling: it is pushed hardest, so if that link goes its notes lose their support. A second route between them takes the load.`,label:"Show link",bar:r}),a>=0&&h.push({text:`${l(t[a][0])} \u2013 ${l(t[a][1])} carries the most (${o[a].toFixed(1)}). Everything leaning on it is one edit from sagging.`,label:"Show link",bar:a});let u=c.map((d,f)=>[d,f]).filter(([d,f])=>d===1&&!e.includes(f)).length;return u&&h.push({text:`${It(u,"note")} hang from a single link. Each is a note to link from a second place.`,label:"Show worst",note:s}),{plain:"Picture your notes as a bridge. Links are the beams and notes are the joints. A note held up by only one beam droops, and a beam doing all the carrying is the one that snaps first.",about:"Each written link is a steel bar and each note a joint; the most linked notes are the ground. Load is the notes' weight. A note sags when few links hold it, and a link carries more when more notes lean on it.",insights:h}}function Gu({bars:i,vector:t,freq:e,k:n,count:s},r){let a=m=>Math.abs(t[m])<.05?0:t[m]>0?1:-1,o=t.filter((m,M)=>a(M)>0).length,l=t.filter((m,M)=>a(M)<0).length,c=i.filter(([m,M])=>a(m)*a(M)<0).length,h=t.indexOf(Math.max(...t)),u=t.indexOf(Math.min(...t)),d=[{text:`Mode ${n+1} splits the vault ${o} notes against ${l}; ${It(c,"link")} cross the cut${c<=Math.max(2,i.length*.05)?", so the two halves are barely connected":""}.`,label:"Show it",show:!0}];h!==u&&d.push({text:`${r(h)} and ${r(u)} swing furthest apart. A link between them, or through a shared note, ties the halves together.`,label:"Open "+r(h).slice(0,18),note:h});let f=t.filter((m,M)=>a(M)===0).length;return f&&d.push({text:`${It(f,"note")} sit on the nodal line, belonging to neither half. They are the bridges; keep their links.`,label:"Show it",show:!0}),{plain:"Picture your notes as a drum skin. Tap it and it wobbles in a pattern. The two halves that move against each other are the two clumps of your notes that hardly talk to each other.",about:"Notes are masses on a stretched sheet and links are springs. The sheet rings in the shapes the links allow; amber swings up while blue swings down, and the dark line between them does not move. A lower frequency means a cleaner cut.",insights:d,freq:e,count:s}}function Hu({n:i,bars:t,kept:e,hubs:n,order:s},r){let a=new Array(i).fill(0);t.forEach(([u,d],f)=>{e[f]&&(a[u]++,a[d]++)});let o=s.filter(u=>!a[u]&&!n.includes(u)),l=Vu(i,t),c=e.filter(Boolean).length,h=[];return h.push({text:`${c} of ${It(t.length,"link")} carry the vault between its ${n.length} hubs. The rest are never the short way from one hub to another.`,label:"Show it",show:!0}),o.length&&h.push({text:`${It(o.length,"note")} are off the backbone. ${r(o[0])} has ${It(l[o[0]],"link")} but none that leads to a hub; link it to one.`,label:"Open note",note:o[0]}),h.push({text:"Links off the backbone are not wrong, but they add detours. Where two notes say the same thing, keep the one on the backbone.",label:"Show it",show:!0}),{plain:"Picture your notes as a slime mould finding food. It keeps the tubes that get used and lets the rest dry up. The links that stay thick are the ones your notes really rely on.",about:"A slime mould thickens the tubes that carry the most flow and lets the rest die. Here each written link is a tube and the hubs are the food: what survives is the shortest set of links that holds the vault together.",insights:h}}function os(i,t,{max:e=120}={}){let n=fn(i),s=new Map(i.filter(u=>!Ze(u)).map(u=>[u.id,u])),r=new Map([...s.keys()].map(u=>[u,new Set]));for(let u of t)u.kind==="link"&&u.source!==u.target&&r.has(u.source)&&r.has(u.target)&&(r.get(u.source).add(u.target),r.get(u.target).add(u.source));let a=new Set,o=[];for(let u of[...r.keys()].sort()){if(a.has(u)||!r.get(u).size)continue;let d=[u];a.add(u);for(let f=0;f<d.length;f++)for(let m of r.get(d[f]))a.has(m)||(a.add(m),d.push(m));d.length>o.length&&(o=d)}let l=o.sort((u,d)=>n(s.get(d))-n(s.get(u))||(u<d?-1:1)).slice(0,e),c=new Map(l.map((u,d)=>[u,d])),h=[];for(let u of l)for(let d of r.get(u))c.has(d)&&c.get(u)<c.get(d)&&h.push([c.get(u),c.get(d)]);return{ids:l,bars:h,own:s,imp:n}}function ls(i,t,{radius:e=14,rest:n=3}={}){let s=i.length,r=i.map((a,o)=>{let l=tn(a)%6283/1e3,c=e*Math.sqrt((o+1)/s);return[Math.cos(l)*c,Math.sin(l)*c]});for(let a=0;a<80;a++){let o=r.map(()=>[0,0]),l=.5*(1-a/80);for(let c=0;c<s;c++)for(let h=c+1;h<s;h++){let u=r[c][0]-r[h][0],d=r[c][1]-r[h][1],f=6/(u*u+d*d+.01);o[c][0]+=u*f,o[c][1]+=d*f,o[h][0]-=u*f,o[h][1]-=d*f}for(let[c,h]of t){let u=r[h][0]-r[c][0],d=r[h][1]-r[c][1],f=Math.hypot(u,d)||1e-6,m=(f-n)*.08;o[c][0]+=u*m,o[c][1]+=d*m,o[h][0]-=u*m,o[h][1]-=d*m}for(let c=0;c<s;c++){let h=Math.hypot(...o[c])||1,u=Math.min(h,l*4)/h;r[c][0]+=o[c][0]*u,r[c][1]+=o[c][1]*u}}return r}function Wu({pos:i,bars:t,fixed:e,loads:n},{iterations:s=2e3,tolerance:r=1e-10,sway:a=1e-9}={}){let o=i.length,l=new Uint8Array(o).fill(1);for(let y of e)l[y]=0;let c=t.map(([y,v])=>{let b=[0,1,2].map(S=>i[v][S]-i[y][S]),g=Math.hypot(...b)||1e-9;return{L:g,c:b.map(S=>S/g)}}),h=a,u=y=>{let v=new Float64Array(3*o);t.forEach(([b,g],S)=>{let{L:R,c:T}=c[S],U=0;for(let P=0;P<3;P++)U+=T[P]*(y[3*g+P]-y[3*b+P]);U/=R;for(let P=0;P<3;P++)v[3*g+P]+=T[P]*U,v[3*b+P]-=T[P]*U});for(let b=0;b<o;b++)for(let g=0;g<3;g++)v[3*b+g]=l[b]?v[3*b+g]+h*y[3*b+g]:0;return v},d=new Float64Array(3*o),f=0;for(let y=0;y<o;y++)if(l[y]&&n[y])for(let v=0;v<3;v++)d[3*y+v]=n[y][v],f+=d[3*y+v]**2;let m=new Float64Array(3*o),M=Float64Array.from(d),x=Float64Array.from(d),p=M.reduce((y,v)=>y+v*v,0);for(let y=0;y<s&&p>r*Math.max(f,1e-30);y++){let v=u(x),b=0;for(let T=0;T<x.length;T++)b+=x[T]*v[T];if(b<=0)break;let g=p/b,S=0;for(let T=0;T<m.length;T++)m[T]+=g*x[T],M[T]-=g*v[T],S+=M[T]*M[T];let R=S/p;p=S;for(let T=0;T<x.length;T++)x[T]=M[T]+R*x[T]}let _=Array.from({length:o},(y,v)=>[m[3*v],m[3*v+1],m[3*v+2]]),E=t.map(([y,v],b)=>{let{L:g,c:S}=c[b],R=0;for(let T=0;T<3;T++)R+=S[T]*(_[v][T]-_[y][T]);return R/g});return{u:_,force:E,residual:f?Math.sqrt(p/f):0}}function Zu(i,t,{max:e=120,ground:n=.1}={}){let{ids:s,bars:r,own:a,imp:o}=os(i,t,{max:e}),l=s.length,c=ls(s,r),h=Math.max(1e-9,...s.map(x=>o(a.get(x)))),u=10,d=s.map((x,p)=>[c[p][0],(.5-o(a.get(x))/h)*2*u,c[p][1]]),f=Math.min(l,Math.max(3,Math.round(l*n))),m=[...Array(f).keys()],M=s.map(x=>(a.get(x).tasks||0)+.1);return{ids:s,pos:d,bars:r,fixed:m,loads:M.map(x=>[0,-x,0]),weight:M,ground:m.map(x=>s[x])}}function Yu(i,t){let e=i.bars.map(([o,l])=>Math.hypot(...[0,1,2].map(c=>i.pos[l][c]-i.pos[o][c]))),n=t.force.map(Math.abs),s=t.force.map((o,l)=>o<0?-o*e[l]*e[l]:0),r=o=>o.reduce((l,c,h)=>c>o[l]?h:l,0),a=t.u.map((o,l)=>i.fixed.includes(l)?0:Math.hypot(...o));return{len:e,carry:n,buckle:s,sag:a,busiest:n.length?r(n):-1,weakest:s.length&&Math.max(...s)>0?r(s):-1,sagging:a.length?r(a):-1}}var ux=.01,Xu="#60a5fa",rc="#f87171",Ju="#f59e0b",qu={id:"loadpaths",name:"Load paths",hint:"Which links carry the vault, and which note sags first",home:{yaw:.6,pitch:.65,dist:46,min:12,max:110},stage:{fog:[38,90]},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:a,invalidate:o}){let l=Zu(e.nodes,e.links);if(l.ids.length<4){let N=()=>It(l.ids.length,"linked note");return t.stat(N()),t.controls({at:"centre",lines:["Load paths needs a set of notes joined by written links.",`${It(l.ids.length,"note")} joined so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:N,today:()=>null,api:{empty:!0}}}let c=Wu(l,{sway:ux}),h=Yu(l,c),u=new Map(e.nodes.map(N=>[N.id,N])),d=fn(e.nodes),f=l.ids.length,m=N=>u.get(l.ids[N]).name,M=new Map(l.ids.map((N,X)=>[N,X])),x=N=>.3+.55*Math.sqrt(Math.max(0,d(u.get(l.ids[N])))),p=Math.max(...h.carry,1e-9),_=a.palette,E=new Jt,y=new Ge,v=new Pt,b=new B(0,1,0),g=N=>(i.scene.add(N),N),S=new Set(l.fixed),R=g(new ge(new Ce(1,16,12),new Ee({roughness:.45}),f)),T=g(new ge(new hn(1,1,1,8,1),new Ee({roughness:.6}),Math.max(l.bars.length,1))),U=N=>.03+.17*Math.sqrt(h.carry[N]/p),P=n.selected&&M.has(n.selected)?M.get(n.selected):null,O=null,I=null,G=N=>l.bars.map((X,ft)=>X[0]===N||X[1]===N?ft:-1).filter(X=>X>=0),W=N=>c.force[N]<0?"pushed":"pulled",Z=N=>h.carry[N].toFixed(h.carry[N]<10?2:1),ot=()=>{if(O!=null)return`${m(l.bars[O][0])} \u2013 ${m(l.bars[O][1])} \xB7 ${W(O)} with ${Z(O)}`;let N=I??P;if(N!=null){let X=G(N),ft=X.reduce((Mt,at)=>Mt+h.carry[at],0);return`${m(N)} \xB7 ${S.has(N)?"ground":`sags ${h.sag[N].toFixed(2)}`} \xB7 ${It(X.length,"bar")} carrying ${ft.toFixed(1)}`}return`${It(f,"note")} \xB7 ${It(l.bars.length,"bar")} \xB7 ${It(l.ground.length,"ground note")} \xB7 load ${l.weight.reduce((X,ft)=>X+ft,0).toFixed(1)}`};function F(){let N=I??P,X=new Set(N!=null?G(N):O!=null?[O]:[]),ft=new Set(O!=null?l.bars[O]:[]);for(let pt=0;pt<f;pt++){let Dt=x(pt)*(pt===N?1.4:1);E.makeScale(Dt,Dt,Dt).setPosition(...l.pos[pt]),R.setMatrixAt(pt,E);let xt=(N!=null||O!=null)&&pt!==N&&!ft.has(pt)&&!G(pt).some(H=>X.has(H));v.set(S.has(pt)?Ju:_[(u.get(l.ids[pt]).cluster||0)%_.length]),pt===N&&v.set(a.fg),xt&&v.multiplyScalar(.25),R.setColorAt(pt,v)}l.bars.forEach(([pt,Dt],xt)=>{let H=new B(...l.pos[pt]),ut=new B(...l.pos[Dt]),j=ut.clone().sub(H),dt=j.length()||1e-6,Lt=U(xt)*(X.has(xt)?1.6:1);y.setFromUnitVectors(b,j.normalize()),E.compose(H.add(ut).multiplyScalar(.5),y,new B(Lt,dt,Lt)),T.setMatrixAt(xt,E),v.set(c.force[xt]<0?rc:Xu),(N!=null||O!=null)&&!X.has(xt)&&v.multiplyScalar(.25),T.setColorAt(xt,v)});for(let pt of[R,T])pt.instanceMatrix.needsUpdate=!0,pt.instanceColor&&(pt.instanceColor.needsUpdate=!0);let Mt=[],at=(pt,Dt,xt)=>Mt.push({text:fe(Dt,34),at:l.pos[pt],dy:-14,color:xt});if(N!=null)Mt.push({text:fe(m(N),34),at:l.pos[N],strong:!0,dy:-18,run:()=>J(N),title:`Open ${m(N)}`});else if(O==null){if(h.sag[h.sagging]>0&&at(h.sagging,`${m(h.sagging)} sags most`,a.fg),h.weakest>=0){let[pt,Dt]=l.bars[h.weakest];at(h.sag[pt]>=h.sag[Dt]?pt:Dt,"closest to buckling",rc)}}else for(let pt of l.bars[O])at(pt,m(pt),a.fg);t.labels(Mt),t.stat(ot())}function J(N){P=N,O=null,F(),o(),s(l.ids[N])}let L=N=>[0,1,2].map(X=>(l.pos[l.bars[N][0]][X]+l.pos[l.bars[N][1]][X])/2),Y=[...l.ids.map((N,X)=>({at:l.pos[X],r:x(X),key:{kind:"note",id:N,tip:`${m(X)} \xB7 ${S.has(X)?"ground":`sags ${h.sag[X].toFixed(2)}`}`}})),...l.bars.map((N,X)=>({at:L(X),r:Math.max(U(X)*2,.35),key:{kind:"bar",id:String(X),tip:`${m(N[0])} \u2013 ${m(N[1])} \xB7 ${W(X)} with ${Z(X)}`}}))];return(()=>{let N=zu({n:f,bars:l.bars,ground:l.ground,sag:h.sag,sagging:h.sagging,weakest:h.weakest,busiest:h.busiest,carry:h.carry},m);t.explain({plain:N.plain,about:N.about,legend:[{color:Xu,text:"pulled"},{color:rc,text:"pushed"},{color:Ju,text:"ground"},{color:a.muted,text:"thicker bar = more load"}],insights:N.insights.map(X=>({text:X.text,label:X.label,run:()=>{X.bar!=null?(O=X.bar,P=null,F(),o()):J(X.note)}}))})})(),F(),{targets:()=>Y,click(N){N.kind==="note"?J(M.get(N.id)):N.kind==="bar"&&(O=+N.id,P=null,F(),o())},hover(N){let X=N&&N.kind==="note"?M.get(N.id):null;X!==I&&(I=X,F())},update(N){"selected"in N&&(P=N.selected&&M.has(N.selected)?M.get(N.selected):null,O=null,F())},stat:ot,today:()=>h.busiest<0?null:{text:`${m(l.bars[h.busiest][0])} \u2013 ${m(l.bars[h.busiest][1])} carries the most (${Z(h.busiest)}), ${W(h.busiest)}`,label:"Show it",run:()=>{O=h.busiest,P=null,F(),o()}},api:{truss:()=>l,solved:()=>c,read:()=>h,selected:()=>P==null?null:l.ids[P],bar:()=>O,notes:()=>l.ids},dispose(){R.material.dispose(),T.material.dispose()}}}};function dx(i,{sweeps:t=60,tolerance:e=1e-12}={}){let n=i.length,s=i.map(o=>Float64Array.from(o)),r=Array.from({length:n},(o,l)=>{let c=new Float64Array(n);return c[l]=1,c});for(let o=0;o<t;o++){let l=0;for(let c=0;c<n;c++)for(let h=c+1;h<n;h++)l+=s[c][h]*s[c][h];if(l<e*e)break;for(let c=0;c<n;c++)for(let h=c+1;h<n;h++){if(Math.abs(s[c][h])<1e-300)continue;let u=(s[h][h]-s[c][c])/(2*s[c][h]),d=Math.sign(u||1)/(Math.abs(u)+Math.sqrt(u*u+1)),f=1/Math.sqrt(d*d+1),m=d*f;for(let M=0;M<n;M++){let x=s[M][c],p=s[M][h];s[M][c]=f*x-m*p,s[M][h]=m*x+f*p}for(let M=0;M<n;M++){let x=s[c][M],p=s[h][M];s[c][M]=f*x-m*p,s[h][M]=m*x+f*p}for(let M=0;M<n;M++){let x=r[M][c],p=r[M][h];r[M][c]=f*x-m*p,r[M][h]=m*x+f*p}}}let a=[...Array(n).keys()].sort((o,l)=>s[o][o]-s[l][l]);return{values:a.map(o=>s[o][o]),vectors:a.map(o=>Array.from({length:n},(l,c)=>r[c][o]))}}function fx(i,t){let e=Array.from({length:i},()=>new Array(i).fill(0));for(let[n,s]of t)n!==s&&(e[n][n]++,e[s][s]++,e[n][s]--,e[s][n]--);return e}function px(i,t){let{values:e,vectors:n}=dx(fx(i,t)),s=[];for(let r=0;r<i;r++){if(e[r]<1e-9)continue;let a=n[r],o=Math.max(...a.map(Math.abs))||1,l=a.find(c=>Math.abs(c)>1e-9*o)<0?-1:1;s.push({value:e[r],freq:Math.sqrt(e[r]),vector:a.map(c=>l*c/o)})}return s}function ac(i,t=.05){let e=[],n=[],s=[];return i.forEach((r,a)=>(r>t?e:r<-t?n:s).push(a)),{up:e,down:n,rest:s}}function ju(i,t,{max:e=100}={}){let{ids:n,bars:s}=os(i,t,{max:e});return{ids:n,bars:s,pos:ls(n,s),modes:n.length>=3?px(n.length,s):[]}}var oc="#f59e0b",lc="#38bdf8",Qu=6,Ku=44,$u={id:"modes",name:"Normal modes",hint:"How the vault would ring: its natural cuts into halves",home:{yaw:.7,pitch:.8,dist:50,min:14,max:110},stage:{fog:[40,100]},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:a,invalidate:o}){let l=ju(e.nodes,e.links,{max:80}),c=l.ids.length;if(!l.modes.length){let K=()=>It(c,"linked note");return t.stat(K()),t.controls({at:"centre",lines:["Normal modes needs a set of notes joined by written links.",`${It(c,"note")} joined so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:K,today:()=>null,api:{empty:!0}}}let h=new Map(e.nodes.map(K=>[K.id,K])),u=K=>h.get(l.ids[K]).name,d=new Map(l.ids.map((K,St)=>[K,St])),f=new Pt(oc),m=new Pt(lc),M=new Pt(a.bg).lerp(new Pt(a.muted),.12),x=new Jt,p=new Pt,_=K=>(i.scene.add(K),K),E=l.pos.map(K=>K[0]),y=l.pos.map(K=>K[1]),v=2,b=Math.min(...E)-v,g=Math.max(...E)+v,S=Math.min(...y)-v,R=Math.max(...y)+v,T=(b+g)/2,U=(S+R)/2,P=g-b,O=R-S,I=K=>[l.pos[K][0]-T,l.pos[K][1]-U],G=new Si(P,O,Ku,Ku).rotateX(-Math.PI/2),W=G.attributes.position.count,Z=new Float32Array(W*c);for(let K=0;K<W;K++){let St=G.attributes.position.getX(K),C=G.attributes.position.getZ(K),w=0;for(let V=0;V<c;V++){let[ct,et]=I(V),mt=1/((St-ct)**2+(C-et)**2+4);Z[K*c+V]=mt,w+=mt}for(let V=0;V<c;V++)Z[K*c+V]/=w}G.setAttribute("color",new jt(new Float32Array(W*3),3));let ot=_(new de(G,new Ee({vertexColors:!0,roughness:.55,metalness:.05,side:we,transparent:!0,opacity:.9}))),F=_(new de(G,new Ee({color:a.fg,wireframe:!0,transparent:!0,opacity:.12}))),J=_(new ge(new Ce(1,16,12),new Ee({roughness:.4}),c)),L=new xe;L.setAttribute("position",new sn(new Float32Array(l.bars.length*6),3));let Y=_(new Ke(L,new je({color:a.fg,transparent:!0,opacity:.55})));Y.frustumCulled=J.frustumCulled=ot.frustumCulled=F.frustumCulled=!1;let tt=K=>.4+(K<6?.2:0),N=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,X=!1,ft=0,Mt=0,at=!N,pt=N?.25:0,Dt=null,xt=n.selected&&d.has(n.selected)?d.get(n.selected):null,H=null,ut=()=>l.modes[Mt],j=()=>Math.sin(pt*2*Math.PI),dt=new Float64Array(c),Lt=()=>ac(ut().vector),Ht=K=>ut().vector[K],Zt=()=>{let K=H??xt;if(K!=null)return`${u(K)} \xB7 ${Math.abs(Ht(K))<.05?"on a nodal line":Ht(K)>0?"swings up":"swings down"} ${Math.abs(Ht(K)).toFixed(2)} in mode ${Mt+1}`;let St=Lt();return`Mode ${Mt+1} of ${l.modes.length} \xB7 ${St.up.length} up, ${St.down.length} down \xB7 frequency ${ut().freq.toFixed(2)}`};function Tt(){let K=Lt(),St=[Mt===0?"The cleanest cut of the vault into two halves":`${It(K.up.length,"note")} swinging up, ${It(K.down.length,"note")} down, ${It(K.rest.length,"note")} on a nodal line`];t.controls({lines:St,buttons:[{label:"\u25C0",title:"Previous mode (slower)",off:Mt===0,run:()=>it(Mt-1)},{label:`Mode ${Mt+1}`,title:"Back to mode 1, the slowest",run:()=>it(0)},{label:"\u25B6",title:"Next mode (faster)",off:Mt===l.modes.length-1,run:()=>it(Mt+1)},{label:at?"Hold":"Ring",title:at?"Hold the sheet still":"Let the sheet ring",run:()=>{at=!at,Dt=null,Tt(),o()}}]})}function Ft(){let K=[],St=ut().vector,C=St.indexOf(Math.max(...St)),w=St.indexOf(Math.min(...St)),V=H??xt,ct=(et,mt,_t)=>K.push({text:fe(mt,34),at:[I(et)[0],0,I(et)[1]],dy:-14,color:_t});V!=null?K.push({text:fe(u(V),34),at:[I(V)[0],0,I(V)[1]],strong:!0,dy:-18,run:()=>Ut(V),title:`Open ${u(V)}`}):(ct(C,u(C),oc),w!==C&&ct(w,u(w),lc)),t.labels(K)}function oe(){let K=ut().vector,St=G.attributes.color;for(let C=0;C<W;C++){let w=0;for(let V=0;V<c;V++)w+=Z[C*c+V]*K[V];p.copy(M).lerp(w>=0?f:m,Math.min(1,Math.abs(w)**.8*1.25)),St.setXYZ(C,p.r,p.g,p.b)}St.needsUpdate=!0,ce()}function pe(){let K=Gu({bars:l.bars,vector:ut().vector,freq:ut().freq,k:Mt,count:l.modes.length},u);t.explain({plain:K.plain,about:K.about,legend:[{color:oc,text:"swings up"},{color:lc,text:"swings down"},{color:a.muted,text:"nodal line, still"}],insights:K.insights.map(St=>({text:St.text,label:St.label,run:()=>{St.note!=null?Ut(St.note):(xt=null,it(Mt))}}))})}function ce(){Ft(),t.stat(Zt())}function k(){let K=ut().vector,St=j(),C=G.attributes.position;for(let V=0;V<W;V++){let ct=0;for(let et=0;et<c;et++)ct+=Z[V*c+et]*K[et];C.setY(V,ct*Qu*St)}C.needsUpdate=!0,G.computeVertexNormals();let w=L.attributes.position;for(let V=0;V<c;V++)dt[V]=K[V]*Qu*St;l.bars.forEach(([V,ct],et)=>{let[mt,_t]=I(V),[st,rt]=I(ct);w.setXYZ(2*et,mt,dt[V]+.05,_t),w.setXYZ(2*et+1,st,dt[ct]+.05,rt)}),w.needsUpdate=!0;for(let V=0;V<c;V++){let[ct,et]=I(V),mt=V===(H??xt),_t=tt(V)*(mt?1.5:1);x.makeScale(_t,_t,_t).setPosition(ct,dt[V]+_t*.6,et),J.setMatrixAt(V,x),p.copy(M).lerp(K[V]>=0?f:m,Math.min(1,Math.abs(K[V])**.8*1.25+.25)),mt&&p.set(a.fg),J.setColorAt(V,p)}J.instanceMatrix.needsUpdate=!0,J.instanceColor&&(J.instanceColor.needsUpdate=!0)}function it(K){Mt=Math.max(0,Math.min(l.modes.length-1,K)),oe(),pe(),Tt(),k(),o()}function Ut(K){xt=K,ce(),k(),o(),s(l.ids[K])}let Xt=()=>l.ids.map((K,St)=>{let[C,w]=I(St);return{at:[C,dt[St]+.4,w],r:tt(St)*1.2,key:{kind:"note",id:K,tip:`${u(St)} \xB7 ${Math.abs(Ht(St))<.05?"still":Ht(St)>0?"up":"down"} ${Math.abs(Ht(St)).toFixed(2)}`}}}),ht=()=>{X=!0,clearTimeout(ft)},te=()=>{clearTimeout(ft),ft=setTimeout(()=>{X=!1,Dt=null,o()},1500)};return i.canvas.addEventListener("pointerdown",ht,!0),addEventListener("pointerup",te),addEventListener("pointercancel",te),pe(),oe(),Tt(),k(),{targets:Xt,click(K){K.kind==="note"&&Ut(d.get(K.id))},hover(K){let St=K&&K.kind==="note"?d.get(K.id):null;St!==H&&(H=St,ce(),k())},update(K){"selected"in K&&(xt=K.selected&&d.has(K.selected)?d.get(K.selected):null,ce(),k())},frame(){if(at&&!X){let K=performance.now();Dt!=null&&(pt=(pt+(K-Dt)/1e3*.5*Math.min(2.2,.45+ut().freq*.8))%1),Dt=K,k(),o()}else Dt=null},stat:Zt,today:()=>{let K=ac(l.modes[0].vector);return{text:`The vault's cleanest cut is ${K.up.length} notes against ${K.down.length}`,label:"Show it",run:()=>{xt=null,it(0)}}},api:{modes:()=>l.modes,ids:()=>l.ids,mode:()=>Mt,setMode:it,playing:()=>at,moving:()=>at&&!X,hold(K){at=!1,K!=null&&(pt=K),k(),Tt(),o()},selected:()=>xt==null?null:l.ids[xt],heights:()=>Array.from(dt),sheetHeights:()=>Array.from(G.attributes.position.array.filter((K,St)=>St%3===1)),split:Lt},dispose(){clearTimeout(ft),i.canvas.removeEventListener("pointerdown",ht,!0),removeEventListener("pointerup",te),removeEventListener("pointercancel",te);for(let K of[ot,F,J,Y])K.material.dispose();G.dispose(),L.dispose()}}}};function mx(i,t,e,n,s){let r=[],a=new Array(i).fill(-1);for(let h=0;h<i;h++)h!==s&&(a[h]=r.length,r.push(h));let o=r.length,l=Array.from({length:o},()=>new Float64Array(o+1));t.forEach(([h,u],d)=>{let f=e[d];for(let[m,M]of[[h,u],[u,h]])a[m]>=0&&(l[a[m]][a[m]]+=f,a[M]>=0&&(l[a[m]][a[M]]-=f))}),a[n]>=0&&(l[a[n]][o]=1);for(let h=0;h<o;h++)l[h][h]<1e-300&&(l[h][h]=1);for(let h=0;h<o;h++){let u=h;for(let f=h+1;f<o;f++)Math.abs(l[f][h])>Math.abs(l[u][h])&&(u=f);[l[h],l[u]]=[l[u],l[h]];let d=l[h][h];if(!(Math.abs(d)<1e-300))for(let f=h+1;f<o;f++){let m=l[f][h]/d;if(m)for(let M=h;M<=o;M++)l[f][M]-=m*l[h][M]}}let c=new Float64Array(o);for(let h=o-1;h>=0;h--){let u=l[h][o];for(let d=h+1;d<o;d++)u-=l[h][d]*c[d];c[h]=Math.abs(l[h][h])<1e-300?0:u/l[h][h]}return Array.from({length:i},(h,u)=>a[u]>=0?c[a[u]]:0)}function gx(i,t,e,n,s,r){let a=mx(i,t,t.map((o,l)=>e[l]/n[l]),s,r);return t.map(([o,l],c)=>e[c]/n[c]*(a[o]-a[l]))}function xx(i,t,{lengths:e,pairs:n,steps:s=200,dt:r=.5,floor:a=1e-6,keep:o=40}={}){let l=e||t.map(()=>1),c=t.map(()=>1),h=[Float32Array.from(c)],u=Math.max(1,Math.floor(s/(o-1)));for(let d=0;d<s&&n.length;d++){let[f,m]=n[d%n.length],M=gx(i,t,c,l,f,m);for(let x=0;x<c.length;x++)c[x]=Math.max(a,c[x]+r*(Math.abs(M[x])-c[x]));(d+1)%u===0&&h.length<o&&h.push(Float32Array.from(c))}for(;h.length<o;)h.push(Float32Array.from(c));return h[h.length-1]=Float32Array.from(c),{D:c,frames:h,steps:s}}function _x(i,t=.1){let e=Math.max(...i,1e-12),n=Array.from(i,s=>s/e);return{share:n,kept:n.map(s=>s>=t)}}function td(i,t,{max:e=80,hubs:n=6,steps:s=200}={}){let{ids:r,bars:a}=os(i,t,{max:e}),o=Array.from({length:Math.min(n,r.length)},(d,f)=>f),l=[];for(let d=0;d<o.length;d++)for(let f=d+1;f<o.length;f++)l.push([o[d],o[f]]);let c=l.length?xx(r.length,a,{pairs:l,steps:s}):{D:a.map(()=>1),frames:[Float32Array.from(a.map(()=>1))]},{share:h,kept:u}=_x(c.D);return{ids:r,bars:a,pos:ls(r,a),hubs:o,D:c.D,frames:c.frames,share:h,kept:u}}var yx=8,ed=.1,nd={id:"slime",name:"Slime mould",hint:"Which written links carry the vault, and which fade away",home:{yaw:.6,pitch:.75,dist:46,min:14,max:110},stage:{fog:[40,100]},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:a,invalidate:o}){let l=td(e.nodes,e.links,{max:80}),c=l.ids.length,h=l.frames.length-1;if(c<3||l.hubs.length<2){let it=()=>It(c,"linked note");return t.stat(it()),t.controls({at:"centre",lines:["Slime mould needs a set of notes joined by written links.",`${It(c,"note")} joined so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:it,today:()=>null,api:{empty:!0}}}let u=new Map(e.nodes.map(it=>[it.id,it])),d=it=>u.get(l.ids[it]).name,f=new Map(l.ids.map((it,Ut)=>[it,Ut])),m=new Set(l.hubs),M=Math.max(...l.D,1e-12),x=it=>(i.scene.add(it),it),p=l.pos.map(it=>it[0]),_=l.pos.map(it=>it[1]),E=(Math.min(...p)+Math.max(...p))/2,y=(Math.min(..._)+Math.max(..._))/2,v=20,b=Math.max(1e-9,...l.pos.map(it=>Math.hypot(it[0]-E,it[1]-y))),g=v/b,S=it=>[(l.pos[it][0]-E)*g,(l.pos[it][1]-y)*g],R=9,T=new Float64Array(c),U=[],P=it=>[S(it)[0],T[it],S(it)[1]],O=()=>{let it=new Float64Array(c);l.bars.forEach(([Xt,ht],te)=>{let K=Lt[te]/M;it[Xt]+=K,it[ht]+=K});let Ut=Math.max(...it,1e-9);for(let Xt=0;Xt<c;Xt++)T[Xt]=R*Math.sqrt(it[Xt]/Ut)*(m.has(Xt)?1:.85)},I=new Jt,G=new Pt,W=new Pt(a.bg).lerp(new Pt(a.muted),.55),Z=new Pt("#f59e0b"),ot=new Pt(a.accent||"#38bdf8"),F=new Pt(a.fg),J=new B(0,1,0),L=new B,Y=new B,tt=new Ge,N=new B,X=x(new ge(new hn(1,1,1,10,1),new Ee({roughness:.5}),l.bars.length)),ft=x(new ge(new Ce(1,16,12),new Ee({roughness:.4}),c));X.frustumCulled=ft.frustumCulled=!1;let Mt=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,at=Mt?h:0,pt=!Mt,Dt=null,xt=n.selected&&f.has(n.selected)?f.get(n.selected):null,H=null,ut=()=>{let it=l.frames[Math.floor(at)],Ut=l.frames[Math.min(h,Math.floor(at)+1)],Xt=at-Math.floor(at);return Array.from(it,(ht,te)=>ht+(Ut[te]-ht)*Xt)},j=it=>it.filter(Ut=>Ut/M>=ed).length,dt=it=>m.has(it)?.75:.4,Lt=ut();O();let Ht=()=>{let it=H??xt;if(it!=null){let Ut=l.bars.map((ht,te)=>ht[0]===it||ht[1]===it?te:-1).filter(ht=>ht>=0),Xt=Ut.filter(ht=>Lt[ht]/M>=ed).length;return`${d(it)} \xB7 ${m.has(it)?"hub \xB7 ":""}${Xt} of ${It(Ut.length,"link")} carry on`}return`${j(Lt)} of ${It(l.bars.length,"link")} carry on \xB7 fed by ${l.hubs.length} hubs \xB7 step ${Math.round(at)} of ${h}`};function Zt(){let it=at>=h;t.controls({lines:[it?"The links that carry flow between the hubs":"Tubes thicken where flow is high and thin where it is not"],buttons:[{label:pt&&!it?"Hold":it?"Grow again":"Play",title:pt&&!it?"Hold the growth":it?"Start again from tubes of equal width":"Let the mould grow",run:()=>{at>=h&&(at=0),pt=!(pt&&!it),Dt=null,Ft(),o()}},{label:"Start",title:"Back to tubes of equal width",off:at===0,run:()=>{at=0,pt=!1,Dt=null,Ft(),o()}},{label:"End",title:"Jump to the finished backbone",off:at>=h,run:()=>{at=h,pt=!1,Ft(),o()}}]})}function Tt(){let it=[],Ut=H??xt;U.length=0;let Xt=(ht,te)=>{te.at=P(ht),U.push([ht,te.at]),it.push(te)};for(let ht of l.hubs.slice(0,4))ht!==Ut&&Xt(ht,{text:fe(d(ht),30),dy:-16,color:a.accent});Ut!=null&&Xt(Ut,{text:fe(d(Ut),34),strong:!0,dy:-20,run:()=>pe(Ut),title:`Open ${d(Ut)}`}),t.labels(it)}function Ft(){Lt=ut(),oe(),Tt(),Zt(),t.stat(Ht())}function oe(){O(),l.bars.forEach(([it,Ut],Xt)=>{let[ht,te,K]=P(it),[St,C,w]=P(Ut),V=Math.min(1,Lt[Xt]/M),ct=.05+.4*Math.sqrt(V);L.set(St-ht,C-te,w-K);let et=L.length()||1e-6;L.normalize(),Y.set((ht+St)/2,(te+C)/2,(K+w)/2),tt.setFromUnitVectors(J,L),N.set(ct,et,ct),I.compose(Y,tt,N),X.setMatrixAt(Xt,I),G.copy(W).lerp(Z,Math.min(1,Math.sqrt(V)*1.1)),X.setColorAt(Xt,G)}),X.instanceMatrix.needsUpdate=!0,X.instanceColor&&(X.instanceColor.needsUpdate=!0);for(let it=0;it<c;it++){let[Ut,Xt,ht]=P(it),te=it===(H??xt),K=dt(it)*(te?1.4:1);I.makeScale(K,K,K).setPosition(Ut,Xt,ht),ft.setMatrixAt(it,I),G.copy(m.has(it)?ot:W).lerp(F,m.has(it)?0:.35),te&&G.copy(F),ft.setColorAt(it,G)}for(let[it,Ut]of U)Ut[1]=T[it];ft.instanceMatrix.needsUpdate=!0,ft.instanceColor&&(ft.instanceColor.needsUpdate=!0)}function pe(it){xt=it,Ft(),o(),s(l.ids[it])}let ce=()=>l.ids.map((it,Ut)=>({at:P(Ut),r:dt(Ut)*1.3,key:{kind:"note",id:it,tip:`${d(Ut)}${m.has(Ut)?" \xB7 hub":""}`}})),k=Hu({n:c,bars:l.bars,kept:l.kept,hubs:l.hubs,order:l.ids.map((it,Ut)=>Ut)},d);return t.explain({plain:k.plain,about:k.about,legend:[{color:"#f59e0b",text:"carries flow (higher = more)"},{color:a.muted,text:"fading"},{color:a.accent||"#38bdf8",text:"hub"}],insights:k.insights.map(it=>({text:it.text,label:it.label,run:()=>{it.note!=null?pe(it.note):(xt=null,at=h,pt=!1,Ft(),o())}}))}),Ft(),{targets:ce,click(it){it.kind==="note"&&pe(f.get(it.id))},hover(it){let Ut=it&&it.kind==="note"?f.get(it.id):null;Ut!==H&&(H=Ut,Ft())},update(it){"selected"in it&&(xt=it.selected&&f.has(it.selected)?f.get(it.selected):null,Ft())},frame(){if(pt&&at<h){let it=performance.now();Dt!=null&&(at=Math.min(h,at+(it-Dt)/1e3*yx)),Dt=it,at>=h?(pt=!1,Ft()):(Lt=ut(),oe(),t.stat(Ht())),o()}else Dt=null},stat:Ht,today:()=>({text:`${j(l.frames[h])} of ${It(l.bars.length,"link")} carry the vault between its ${l.hubs.length} hubs`,label:"Show it",run:()=>{xt=null,at=h,pt=!1,Ft()}}),api:{ids:()=>l.ids,hubs:()=>l.hubs.map(it=>l.ids[it]),step:()=>at,steps:()=>h,playing:()=>pt&&at<h,widths:()=>Array.from(Lt),final:()=>Array.from(l.D),setStep(it){at=Math.max(0,Math.min(h,it)),pt=!1,Ft(),o()},hold(){pt=!1,Ft()},selected:()=>xt==null?null:l.ids[xt],carrying:()=>j(Lt),links:()=>l.bars.length},dispose(){for(let it of[X,ft])it.material.dispose(),it.geometry.dispose()}}}};function id(i,{linkedOnly:t=!0}={}){let e=fn(i.nodes),n=new Map;for(let s of i.nodes)s.moc&&!n.has(s.cluster)&&n.set(s.cluster,s);return[...i.clusters].sort((s,r)=>r.size-s.size||s.id-r.id).map(s=>({cluster:s.id,name:s.label||s.name,moc:n.get(s.id)||null,notes:i.nodes.filter(r=>r.cluster===s.id&&!Ze(r)&&!(t&&r.isolated)).sort((r,a)=>e(a)-e(r)||(r.id<a.id?-1:1))})).filter(s=>s.notes.length)}var To=(i,t=1)=>{let e=Math.max(1,Math.ceil(Math.sqrt(i*t)));return{cols:e,rows:Math.ceil(i/e)}},cc=i=>{let t=tn(i),e=Math.imul(t^t>>>15,2246822507)>>>0;return[(t>>>4)%1e3/1e3,(e>>>7)%1e3/1e3]};function sd(i){let{cols:t,rows:e}=To(i),n=(t-1)/2,s=(e-1)/2,r=[];for(let a=0;a<e;a++)for(let o=0;o<t;o++)r.push([o-n,a-s]);return r.sort((a,o)=>Math.hypot(a[0],a[1])-Math.hypot(o[0],o[1])||a[1]-o[1]||a[0]-o[0]).slice(0,i)}var hc=2.4,rd=["#22d3ee","#f472b6","#facc15","#a5f3fc"],ad="#fb7185",uc="#facc15",Mx=(i,t,e)=>e(i)?0:t(i)>.3?2:1;function Sx(i){let t=fn(i.nodes),e=Cu(i.nodes),n=Iu(i),s=id(i),r=Math.max(...s.map(M=>To(M.notes.length).cols),2)*hc+3,{cols:a,rows:o}=To(Math.max(s.length,1),.8),l=[],c=[],h=new Set,u=-(a-1)*r/2,d=-(o-1)*r/2;s.forEach((M,x)=>{M.x=u+x%a*r,M.z=d+Math.floor(x/a)*r,c.push({x:M.x,z:M.z,size:r-1.2,d:x});let p=sd(M.notes.length);if(M.notes.forEach((_,E)=>{let y=Math.max(.7,Math.min(1.8,.35+Math.log1p(_.words||0)*.2)),v=.9+9*Math.sqrt(Math.max(0,t(_))),[b,g]=p[E];l.push({n:_,x:M.x+b*hc,z:M.z+g*hc,w:y,h:v,kind:"tower",d:x,level:Mx(_,e,n)}),h.add(_.id)}),M.moc){let _=Math.max(3,...l.filter(E=>E.d===x).map(E=>E.h));l.push({n:M.moc,x:M.x,z:M.z-r/2+1.6,w:.9,h:_+3,kind:"spire",d:x,level:2}),h.add(M.moc.id)}M.cars=Math.round(2+10*Math.min(1,M.notes.reduce((_,E)=>_+e(E),0)/6))});let f=d+(o-1)*r+r/2+3,m=Math.max(a*r-4,8);for(let M of i.nodes){if(Ze(M)||h.has(M.id))continue;let[x]=cc("stall:"+M.id);l.push({n:M,x:u-r/2+2+x*m,z:f+tn(M.id)%3*1.4,w:.7,h:.8,kind:"stall",d:-1,level:1})}return{towers:l,pads:c,districts:s,cell:r,front:f,bounds:{x:[u-r/2,-u+r/2],z:[d-r/2,f+3]}}}function vx(i){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d");e.fillStyle="#2a2a36",e.fillRect(0,0,128,128);for(let s=0;s<8;s++)for(let r=0;r<8;r++){let a=tn(`${i}:${r}:${s}`)%1e3/1e3,o=a<i;e.fillStyle=o?rd[(r+s*3)%rd.length]:"#3a3a4a",e.globalAlpha=o?.55+.45*(a/i):.5,e.fillRect(r*16+3,s*16+3,10,11)}let n=new Ds(t);return n.wrapS=n.wrapT=Yi,n.colorSpace=De,n.magFilter=Re,n}var cr=(i,t,e)=>new Pt(i).lerp(new Pt(t),e),od={id:"cyberpunk",name:"Cyberpunk",hint:"A neon city: topics are districts, notes are towers, stale ones go dark",home:{yaw:.55,pitch:.38,dist:58,min:12,max:140},stage:{fog:[55,170],ambient:.4},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:a,invalidate:o}){let l=Sx(e),c=l.towers,h=c.filter(H=>H.kind!=="stall");if(h.length<3){let H=()=>It(c.length,"note");return t.stat(H()),t.controls({at:"centre",lines:["Cyberpunk needs notes in topics, linked to one another.",`${It(h.length,"tower")} so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:H,today:()=>null,api:{empty:!0}}}let u=new Map(c.map(H=>[H.n.id,H])),d=H=>H.n.name,f=H=>(i.scene.add(H),H),m=H=>H.kind==="stall"?uc:a.palette[(H.n.cluster||0)%a.palette.length],M=new Map,x=(H,ut)=>{M.has(H)||M.set(H,new Set),M.get(H).add(ut)};for(let H of e.links)H.kind!=="wanted"&&u.has(H.source)&&u.has(H.target)&&(x(H.source,H.target),x(H.target,H.source));let p=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,_=new Jt,E=f(new ge(new yn(1,.1,1),new be,l.pads.length));l.pads.forEach((H,ut)=>{E.setMatrixAt(ut,_.makeScale(H.size,1,H.size).setPosition(H.x,-.05,H.z)),E.setColorAt(ut,cr(a.palette[l.districts[H.d].cluster%a.palette.length],a.bg,.86))});let y=f(new de(new yn(l.bounds.x[1]-l.bounds.x[0],.1,5),new be({color:cr(uc,a.bg,.9)})));y.position.set((l.bounds.x[0]+l.bounds.x[1])/2,-.06,l.front+.5);let v=[0,1,2].map(H=>{let ut=c.filter(Tt=>Tt.level===H&&Tt.kind!=="stall"),j=[],dt=[],Lt=[];ut.forEach(Tt=>{let Ft=Tt.w/2,oe=tn(Tt.n.id)%8/8;for(let[pe,ce,k,it]of[[-Ft,-Ft,Ft,-Ft],[Ft,-Ft,Ft,Ft],[Ft,Ft,-Ft,Ft],[-Ft,Ft,-Ft,-Ft]]){let Ut=j.length/3,Xt=Math.hypot(k-pe,it-ce)/4,ht=Tt.h/4;j.push(Tt.x+pe,0,Tt.z+ce,Tt.x+k,0,Tt.z+it,Tt.x+k,Tt.h,Tt.z+it,Tt.x+pe,Tt.h,Tt.z+ce),dt.push(oe,0,oe+Xt,0,oe+Xt,ht,oe,ht),Lt.push(Ut,Ut+1,Ut+2,Ut,Ut+2,Ut+3)}});let Ht=new xe().setAttribute("position",new jt(j,3)).setAttribute("uv",new jt(dt,2)).setAttribute("color",new jt(new Float32Array(j.length),3));Ht.setIndex(Lt);let Zt=f(new de(Ht,new be({map:vx([.04,.28,.7][H]),vertexColors:!0,side:we})));return Zt.frustumCulled=!1,{list:ut,geo:Ht,mesh:Zt}}),b=f(new ge(new yn(1,1,1),new be,c.length));b.frustumCulled=!1;let g=c.filter(H=>H.n.tasks>0),S=f(new ge(new Ce(1,10,8),new be({color:ad}),Math.max(g.length,1)));S.count=g.length,S.frustumCulled=!1,g.forEach((H,ut)=>S.setMatrixAt(ut,_.makeScale(.28,.28,.28).setPosition(H.x,H.h+.35,H.z)));let R=l.districts.flatMap(H=>Array.from({length:H.cars},(ut,j)=>{let[dt,Lt]=cc(`car:${H.cluster}:${j}`);return{d:H,u:dt,y:4+Lt*8,z:(dt-.5)*(l.cell-3),v:(.02+Lt*.05)*(j%2?1:-1),c:j%3?"#fca5a5":"#e0f2fe"}})),T=f(new ge(new yn(.7,.12,.14),new be,Math.max(R.length,1)));T.count=R.length,T.frustumCulled=!1,R.forEach((H,ut)=>T.setColorAt(ut,new Pt(H.c)));let U=f(new Ke(new xe,new je({color:"#22d3ee",transparent:!0,opacity:.9})));U.frustumCulled=!1;let P=n.selected&&u.has(n.selected)?n.selected:null,O=null,I=null,G=p,W=()=>O||P,Z=new Set,ot=H=>(I==null||H.d===I||H.d<0)&&(!W()||Z.has(H.n.id)),F=c.filter(H=>H.kind==="tower"&&H.level===0),J=H=>F.filter(ut=>ut.d===H),L=()=>{let H=W()&&u.get(W());return H&&H.kind==="spire"?`${d(H)} \xB7 map of ${It(l.districts[H.d].notes.length,"note")}`:H?`${d(H)} \xB7 ${It(H.n.inlinks||0,"link")} in \xB7 ${H.level===0?"dark":H.level===2?"busy":"dim"}${H.n.tasks?` \xB7 ${It(H.n.tasks,"open task")}`:""}`:`${It(c.filter(ut=>ut.kind==="tower").length,"tower")} \xB7 ${F.length} dark \xB7 ${It(l.districts.length,"district")}`};function Y(){let H=W();if(Z.clear(),H){Z.add(H);for(let dt of M.get(H)||[])Z.add(dt)}for(let dt of v){let Lt=dt.geo.getAttribute("color"),Ht=0;dt.list.forEach(Zt=>{let Tt=cr(m(Zt),"#ffffff",Zt.level===0?.55:.3).multiplyScalar(ot(Zt)?Zt.level===0?.5:1:.16);for(let Ft=0;Ft<16;Ft++)Lt.setXYZ(Ht++,Tt.r,Tt.g,Tt.b)}),Lt.needsUpdate=!0}c.forEach((dt,Lt)=>{let Ht=dt.kind==="stall",Zt=Ht?dt.w:dt.w*1.04;b.setMatrixAt(Lt,_.makeScale(Zt,Ht?dt.h:.12,Zt).setPosition(dt.x,Ht?dt.h/2:dt.h+.06,dt.z)),b.setColorAt(Lt,cr(m(dt),a.bg,ot(dt)?dt.level===0?.55:0:.85))}),b.instanceMatrix.needsUpdate=!0,b.instanceColor.needsUpdate=!0;let ut=[];if(H){let dt=u.get(H);for(let Lt of M.get(H)||[]){let Ht=u.get(Lt),Zt=[dt.x,dt.h,dt.z],Tt=[Ht.x,Ht.h,Ht.z],Ft=[(dt.x+Ht.x)/2,Math.max(dt.h,Ht.h)+3+Math.hypot(dt.x-Ht.x,dt.z-Ht.z)*.25,(dt.z+Ht.z)/2],oe=Zt;for(let pe=1;pe<=12;pe++){let ce=pe/12,k=[0,1,2].map(it=>(1-ce)*(1-ce)*Zt[it]+2*(1-ce)*ce*Ft[it]+ce*ce*Tt[it]);ut.push(...oe,...k),oe=k}}}U.geometry.setAttribute("position",new jt(ut,3)),U.visible=ut.length>0;let j=l.districts.map((dt,Lt)=>({d:dt,i:Lt})).filter(dt=>I==null||I===dt.i).map(({d:dt})=>({text:fe(dt.name,28),at:[dt.x,.4,dt.z+l.cell/2-.6],color:cr(a.palette[dt.cluster%a.palette.length],"#ffffff",.45).getStyle(),dy:6}));if(H){let dt=u.get(H);j.unshift({text:fe(d(dt),34),at:[dt.x,dt.h,dt.z],strong:!0,dy:-18,run:()=>tt(H),title:`Open ${d(dt)}`})}t.labels(j),t.stat(L()),t.chip(I==null?null:`District: ${fe(l.districts[I].name,24)}`,()=>{I=null,Y(),o()})}function tt(H){P=H,Y(),o(),s(H)}let N=H=>{I=H,P=null,Y(),o()},X=l.districts.map((H,ut)=>[J(ut).length,ut]).sort((H,ut)=>ut[0]-H[0])[0],ft=c.filter(H=>H.kind==="stall"),Mt=[...F].sort((H,ut)=>ut.h-H.h)[0],at=[];X&&X[0]&&at.push({text:`${l.districts[X[1]].name} is the darkest district: ${It(X[0],"stale note")}. Open the tallest and decide whether it is still true.`,label:"Show district",run:()=>N(X[1])}),Mt&&Mt.h>3&&at.push({text:`${d(Mt)} stands tall yet has gone dark: other notes lean on it and it has not been edited in ${Mt.n.age} days.`,label:"Open note",run:()=>tt(Mt.n.id)}),g.length&&at.push({text:`${It(g.length,"tower")} carry a pink beacon: an open task. The tallest is the one the most notes wait on.`,label:"Open note",run:()=>tt([...g].sort((H,ut)=>ut.h-H.h)[0].n.id)}),ft.length&&at.push({text:`${It(ft.length,"note")} stand as stalls on the street, in no topic. Link each to a topic's notes and it gets a tower.`,label:"Open note",run:()=>tt(ft[0].n.id)}),t.explain({plain:"Picture your notes as a city. A tall tower is a note everything else leans on. Lit windows mean someone has been in it lately; a dark tower has been left alone for a long time.",about:"Each topic is a district and each note a tower. Height is how many notes link to it and how much runs through it; lit windows are how recently it was edited; dark is stale. A pink beacon on a roof is an open task, the tall thin spire is the topic's map, and a stall on the street is a note in no topic.",legend:[{color:"#22d3ee",text:"height = relied on, windows = recent"},{color:"#6b7280",text:"dark = stale"},{color:ad,text:"beacon = open task"},{color:uc,text:"stall = no topic"}],insights:at}),t.controls({lines:["Pick a tower to see what it links to"]}),Y();let pt=performance.now(),Dt=H=>{R.forEach((ut,j)=>T.setMatrixAt(j,_.makeTranslation(ut.d.x+(((ut.u+ut.v*H)%1+1)%1-.5)*(l.cell-2),ut.y,ut.d.z+ut.z))),T.instanceMatrix.needsUpdate=!0,T.instanceColor&&(T.instanceColor.needsUpdate=!0)};Dt(0);let xt=0;return{targets:()=>c.filter(H=>I==null||H.d===I||H.d<0).map(H=>({at:[H.x,H.h/2,H.z],r:Math.max(H.w*.7,Math.min(H.h*.3,1.5)),key:{kind:"note",id:H.n.id,tip:`${d(H)}${H.level===0?" \xB7 dark":""}${H.n.tasks?` \xB7 ${It(H.n.tasks,"open task")}`:""}`}})),click(H){H.kind==="note"&&tt(H.id)},hover(H){let ut=H&&H.kind==="note"?H.id:null;ut!==O&&(O=ut,Y())},update(H){"selected"in H&&(P=H.selected&&u.has(H.selected)?H.selected:null,Y())},frame(){if(G)return;let H=(performance.now()-pt)/1e3;S.visible=Math.sin(H*4)>-.3,Dt(H),clearTimeout(xt),xt=setTimeout(o,33)},stat:L,today:()=>X&&X[0]?{text:`Darkest district: ${l.districts[X[1]].name} \xB7 ${It(X[0],"stale note")}`,label:"Go there",run:()=>N(X[1])}:null,api:{layout:()=>l,selected:()=>P,district:()=>I==null?null:l.districts[I].cluster,hold(){G=!0,S.visible=!0,o()},towers:()=>c.filter(H=>H.kind==="tower").length,stalls:()=>ft.length,dark:()=>F.length},dispose(){G=!0,clearTimeout(xt);for(let H of[E,y,b,S,T,U,...v.map(ut=>ut.mesh)])H.material.map&&H.material.map.dispose()}}}};var Pn=18,dc=2.5,hr=90,Ci="#22c55e",Ao="#f87171",ld=i=>dc+(Pn-dc)*(1-Math.min(1,Math.log1p(Math.max(0,i))/Math.log1p(365))),Jn=i=>(i.taskAge!=null?i.taskAge:i.age)||0;function bx(i){let t=i.nodes.filter(u=>!Ze(u)&&u.tasks>0),e=new Map;for(let u of t)e.has(u.cluster)||e.set(u.cluster,[]),e.get(u.cluster).push(u);let n=new Map(i.clusters.map(u=>[u.id,u.name])),s=[...e.keys()].sort((u,d)=>e.get(d).length-e.get(u).length||u-d),r=Math.max(1,t.length),a=s.map(u=>Math.max(.25,e.get(u).length/r*2*Math.PI*.92+.08)),o=a.reduce((u,d)=>u+d,0)||1,l=-Math.PI/2,c=s.map((u,d)=>{let f=a[d]/o*2*Math.PI,m={cluster:u,name:n.get(u)||"No topic",a0:l,a1:l+f,n:e.get(u).length};return l+=f,m}),h=[];for(let u of c)for(let d of e.get(u.cluster)){let f=tn(d.id),m=u.a0+(u.a1-u.a0)*(.1+.8*(f%100/100)),M=Math.max(dc*.6,Math.min(Pn,ld(Jn(d))+((f>>>7)%41-20)/20));h.push({n:d,x:Math.cos(m)*M,z:Math.sin(m)*M,r:.28+.16*Math.sqrt(d.tasks),h:.6+.9*d.tasks,holding:Jn(d)>hr})}return{blips:h,sectors:c,hold:ld(hr),tasks:t.reduce((u,d)=>u+d.tasks,0),notes:t.length}}var cd={id:"radar",name:"Radar",hint:"Open tasks as blips by how long they've waited; red = 90+ days",home:{yaw:0,pitch:1.5,dist:46,min:14,max:110,minPitch:.55,maxPitch:1.5,pan:!0},stage:{fog:!1,ambient:1},actions:["graph","triage"],build({stage:i,frame:t,orbit:e,data:n,inputs:s,onOpen:r,onAction:a,theme:o,invalidate:l}){let c=bx(n),h=new Map(c.blips.map(L=>[L.n.id,L])),u=L=>(i.scene.add(L),L),d=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,f=L=>(L.rotation.x=-Math.PI/2,L);if(c.notes<1){let L=()=>"No open tasks";return t.stat(L()),t.controls({at:"centre",lines:["Radar shows the notes that have open tasks.","No note has one."],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>a("graph")}]}),{targets:()=>[],click(){},update(){},stat:L,today:()=>null,api:{empty:!0}}}let m=new Jt,M=new Pt,x=(L,Y,tt)=>{let N=new xe().setAttribute("position",new jt(L,3));return u(new Ke(N,new je({color:Y,transparent:!0,opacity:tt})))};u(f(new de(new _i(Pn,64),new be({color:"#04140b"}))));let p=(L,Y,tt,N=.05)=>u(f(new de(new vi(L-N,L+N,96),new be({color:Y,transparent:!0,opacity:tt,side:we})))).position.set(0,.02,0);c.sectors.forEach((L,Y)=>{let tt=u(f(new de(new _i(Pn,24,-L.a1,L.a1-L.a0),new be({color:o.palette[Y%o.palette.length],transparent:!0,opacity:.3,side:we}))));tt.position.y=.01});for(let L=1;L<=4;L++)p(Pn*L/4,Ci,.25);p(c.hold,Ao,.7,.07),x(c.sectors.flatMap(L=>[0,.03,0,Math.cos(L.a0)*Pn,.03,Math.sin(L.a0)*Pn]),Ci,.3);let _=u(f(new de(new _i(Pn,32,0,.7),new be({color:Ci,transparent:!0,opacity:.22,side:we}))));_.position.y=.05;let E=u(new ge(new hn(1,1,1,14),new be,c.blips.length));E.frustumCulled=!1;let y=s.selected&&h.has(s.selected)?s.selected:null,v=null,b=d,g=()=>v||y,S=L=>fe(L.n.name,30),R=()=>{let L=g()&&h.get(g());return L?`${S(L)} \xB7 ${It(L.n.tasks,"open task")} \xB7 waiting ${Jn(L.n)} days`:`${It(c.tasks,"open task")} \xB7 ${It(c.notes,"note")}`},T=(L,Y)=>M.set(L).multiplyScalar(Y);function U(){let L=g();c.blips.forEach((tt,N)=>{let X=!L||tt.n.id===L,ft=tt.r*(tt.n.id===L?1.5:1);m.makeScale(ft,tt.h,ft).setPosition(tt.x,tt.h/2,tt.z),E.setMatrixAt(N,m),E.setColorAt(N,X?M.set(tt.n.id===L?o.fg:tt.holding?Ao:Ci):T(tt.holding?Ao:Ci,.25))}),E.instanceMatrix.needsUpdate=!0,E.instanceColor&&(E.instanceColor.needsUpdate=!0);let Y=c.sectors.map(tt=>{let N=(tt.a0+tt.a1)/2;return{text:`${fe(tt.name,24).toUpperCase()} \xB7 ${tt.n}`,at:[Math.cos(N)*(Pn+1.2),0,Math.sin(N)*(Pn+1.2)],color:Ci}});for(let tt of[...c.blips].sort((N,X)=>X.n.tasks-N.n.tasks).slice(0,8))Y.push({text:`${fe(tt.n.name,22)} \xB7 ${tt.n.tasks}`,at:[tt.x,tt.h,tt.z],dy:-10,color:tt.holding?"#fecaca":"#bbf7d0"});if(L){let tt=h.get(L);Y.unshift({text:S(tt),at:[tt.x,tt.h,tt.z],strong:!0,dy:-18,run:()=>P(L),title:`Open ${S(tt)}`})}t.labels(Y),t.stat(R())}function P(L){y=L,U(),l(),r(L)}let O=c.blips.filter(L=>L.holding),I=[...c.blips].sort((L,Y)=>Jn(Y.n)-Jn(L.n))[0],G=[];O.length&&G.push({text:`${It(O.length,"note")} ${O.length===1?"has":"have"} a task waiting more than ${hr} days. Each is either still wanted or can be crossed off.`,label:"Triage",run:()=>a("triage")}),I&&Jn(I.n)>30&&G.push({text:`${fe(I.n.name,40)} has waited longest: ${Jn(I.n)} days.`,label:"Open note",run:()=>P(I.n.id)});let W=c.sectors[0];W&&c.sectors.length>1&&G.push({text:`${W.name} holds the most notes with open tasks (${W.n} of ${c.notes}).`,label:"Open its busiest",run:()=>P(c.blips.filter(L=>L.n.cluster===W.cluster).sort((L,Y)=>Y.n.tasks-L.n.tasks)[0].n.id)}),t.explain({plain:"Picture a radar screen. Every note with an open task is a blip. The longer its oldest task has waited, the closer to the middle it drifts, and inside the red ring it has been waiting more than three months.",about:"Each topic has a slice of the screen and each note with open tasks is a blip in its slice. Distance from the centre is how long the oldest open task has waited (a year or more sits in the middle). The size of a blip, and the height of its column when you tilt, is how many open tasks it holds. Tick tasks off in the note and its blip drifts away or goes.",legend:[{color:Ci,text:"note with open tasks"},{color:Ao,text:"oldest task 90+ days"},{color:"#6b7280",text:"nearer the middle = waited longer"}],insights:G});let Z=()=>t.controls({lines:[O.length?`${It(O.length,"note")} holding past ${hr} days`:"Pick a blip to open its note"],buttons:[{label:e.tilted?"Flat":"Tilt",title:e.tilted?"Look straight down again":"Tilt into 3D: a blip becomes a column as tall as its task count",run:()=>{e.tilt(),Z()}},...O.length?[{label:"Triage",title:"Go through the open tasks one by one",run:()=>a("triage")}]:[]]});Z(),U();let ot=performance.now(),F=0,J=L=>{_.rotation.z=-(L*.5%(2*Math.PI))};return J(0),{targets:()=>c.blips.map(L=>({at:[L.x,L.h/2,L.z],r:Math.max(.7,L.r*1.3),key:{kind:"note",id:L.n.id,tip:`${L.n.name} \xB7 ${It(L.n.tasks,"open task")} \xB7 waiting ${Jn(L.n)} days`}})),click(L){L.kind==="note"&&P(L.id)},hover(L){let Y=L&&L.kind==="note"?L.id:null;Y!==v&&(v=Y,U())},update(L){"selected"in L&&(y=L.selected&&h.has(L.selected)?L.selected:null,U())},frame(){b||(J((performance.now()-ot)/1e3),clearTimeout(F),F=setTimeout(l,33))},stat:R,today:()=>O.length?{text:`${It(O.length,"note")} ${O.length===1?"has":"have"} tasks waiting ${hr}+ days \xB7 oldest: ${fe(I.n.name,30)} (${Jn(I.n)} days)`,label:"Triage",run:()=>a("triage")}:null,api:{layout:()=>c,selected:()=>y,hold(){b=!0,l()},blips:()=>c.blips.length,holding:()=>O.length,tilted:()=>e.tilted},dispose(){b=!0,clearTimeout(F)}}}};var Ro={low:0,medium:1,high:2},Ex=i=>20*(i+1)**2;async function hd({host:i,detail:t="medium",pbr:e=!1,warmup:n=3e3,run:s=5e3}={}){if(!(t in Ro))throw new Error(`bench: detail is one of ${Object.keys(Ro).join(", ")}`);if(!i)throw new Error("bench: host (an element to draw in) is required");let r=or(),a=Mo(i,fr(),{fog:!1});try{a.scene.add(nc(r,new Mi(1,Ro[t]),e?new Ee({roughness:.6}):new bi).root);let o=a.renderer.getContext(),l=o.getExtension("WEBGL_debug_renderer_info"),c=String(l&&o.getParameter(l.UNMASKED_RENDERER_WEBGL)||o.getParameter(o.RENDERER)||"unknown"),h=()=>new Promise(_=>requestAnimationFrame(_)),u=performance.now(),d=u,f=u,m=0,M=0,x=0;for(;d-u<n+s;)d=await h(),a.orbit(d/2e3,.3,42),a.render(),d-u>=n&&(x?(m++,M=Math.max(M,d-f)):x=d),f=d;let p=d-x;return{atoms:r.n,detail:t,triangles:r.n*Ex(Ro[t]),light:e?"pbr":"basic",fps:p>0?Math.round(m*1e3/p*10)/10:0,worstMs:Math.round(M*10)/10,frames:m,gpu:c}}finally{a.dispose()}}var fc={bodies:Au,cas9:Pu,genome:Lu,cones:ku,loadpaths:qu,modes:$u,slime:nd,cyberpunk:od,radar:cd},wx=Object.values(fc).map(i=>({id:i.id,name:i.name,hint:i.hint,actions:i.actions||[]}));function Tx(i,{view:t="bodies",data:e,inputs:n,onOpen:s,onAction:r,theme:a}={}){let o=fc[t];if(!o)throw new Error(`vault-graph-views: no view "${t}" (there is ${Object.keys(fc).join(", ")})`);let l=No(e);if(l.length||l.push(...Po(t,e,n)),l.length)throw new Error("vault-graph-views: "+l.join("; "));if(typeof s!="function")throw new Error("vault-graph-views: onOpen is required");if((o.actions||[]).length&&typeof r!="function")throw new Error(`vault-graph-views: onAction is required for the ${o.name} view (it asks the host for: ${o.actions.join(", ")})`);return Tu(i,o,{data:e,inputs:n||{},onOpen:s,onAction:r,theme:fr(a)})}return Sd(Ax);})();
