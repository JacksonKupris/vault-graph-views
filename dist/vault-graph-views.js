var VaultGraphViews=(()=>{var Bl=Object.defineProperty;var sp=Object.getOwnPropertyDescriptor;var rp=Object.getOwnPropertyNames;var op=Object.prototype.hasOwnProperty;var ap=(i,t)=>{for(var e in t)Bl(i,e,{get:t[e],enumerable:!0})},lp=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of rp(t))!op.call(i,s)&&s!==e&&Bl(i,s,{get:()=>t[s],enumerable:!(n=sp(t,s))||n.enumerable});return i};var cp=i=>lp(Bl({},"__esModule",{value:!0}),i);var Gy={};ap(Gy,{VIEWS:()=>Vy,bench:()=>Kf,check:()=>kl,checkInputs:()=>Ol,mountViews:()=>zy});var Ys={top:{nodes:"array",links:"array",clusters:"array",wanted:"array"},node:{id:"string",name:"string",cluster:"number",folder:"string",inlinks:"number",outlinks:"number",words:"number"},link:{source:"string",target:"string",kind:"string"},cluster:{id:"number",name:"string",label:"string",size:"number"},strand:{days:"array",paths:"array",ids:"array",rows:"array"}},hp={n:"number",X:"array",stress:"number",grade:"string",domains:"array",loops:"array"},up={guide:"string",where:"string",notes:"array"},dp={ids:"array",level:"array",edges:"array",stats:"object"};var gn=i=>Array.isArray(i)?"array":i===null?"null":typeof i,xi=(i,t,e,n)=>{for(let[s,r]of Object.entries(n))gn(e[s])!==r&&i.push(`${t}.${s} should be ${r}, is ${gn(e[s])}`)};function kl(i){let t=[];if(!i||typeof i!="object")return["data is not an object"];if(xi(t,"data",i,Ys.top),t.length)return t;i.nodes[0]&&xi(t,"nodes[0]",i.nodes[0],Ys.node),i.links[0]&&xi(t,"links[0]",i.links[0],Ys.link),i.clusters[0]&&xi(t,"clusters[0]",i.clusters[0],Ys.cluster);let e=new Set(i.nodes.map(s=>s.id));for(let s of i.wanted)e.add(s.id);let n=i.links.filter(s=>!e.has(s.source)||!e.has(s.target)).length;return n&&t.push(`${n} links point at a note that is in neither nodes nor wanted`),t}function Ol(i,t,e){let n=[],s=e||{};if(i==="genome"){let r=t&&t.strand;if(gn(r)!=="object")return[`data.strand should be object, is ${gn(r)}`];if(xi(n,"data.strand",r,Ys.strand),gn(s.fold)!=="object")return n.concat(`inputs.fold should be object, is ${gn(s.fold)}`);if(xi(n,"inputs.fold",s.fold,hp),n.length)return n;let o=s.fold;(r.rows.length!==r.days.length||r.paths.length!==r.days.length)&&n.push(`data.strand has ${r.days.length} days, ${r.rows.length} rows and ${r.paths.length} paths: they should be the same number`),(o.n!==r.days.length||o.X.length!==o.n)&&n.push(`inputs.fold is for ${o.n} days (${o.X.length} points) and data.strand has ${r.days.length}: the fold is from other data`);let a=o.loops.filter(l=>!(l.a>=0&&l.a<o.n&&l.b>=0&&l.b<o.n&&typeof l.count=="number")).length;a&&n.push(`${a} of inputs.fold.loops don't name two days of the strand and a count`)}if(i==="foodweb"){if(gn(s.web)!=="object")return n.concat(`inputs.web should be object, is ${gn(s.web)}`);if(xi(n,"inputs.web",s.web,dp),n.length)return n;let r=s.web;r.level.length!==r.ids.length&&n.push(`inputs.web has ${r.ids.length} ids and ${r.level.length} levels: they should be the same`);let o=r.edges.filter(a=>!(a[0]>=0&&a[0]<r.ids.length&&a[1]>=0&&a[1]<r.ids.length)).length;o&&n.push(`${o} of inputs.web.edges don't name two of its ids`);for(let a of["mean","maxLevel","incoherence"])typeof r.stats[a]!="number"&&n.push(`inputs.web.stats.${a} should be number, is ${gn(r.stats[a])}`);if(n.length)return n}if(i==="cas9"&&s.scan!=null){if(gn(s.scan)!=="object")return[`inputs.scan should be object, is ${gn(s.scan)}`];xi(n,"inputs.scan",s.scan,up),s.scan.ids!==void 0&&!Array.isArray(s.scan.ids)&&n.push(`inputs.scan.ids should be array, is ${gn(s.scan.ids)}`),!n.length&&s.scan.notes[0]&&(typeof s.scan.notes[0].path!="string"||typeof s.scan.notes[0].hits!="number")&&n.push("inputs.scan.notes[0] should be { path: string, hits: number }")}return s.hour!=null&&typeof s.hour!="number"&&n.push(`inputs.hour should be number, is ${gn(s.hour)}`),s.selected!=null&&typeof s.selected!="string"&&n.push(`inputs.selected should be string, is ${gn(s.selected)}`),n}var fp=["#4385BE","#879A39","#DA702C","#8B7EC8","#3AA99F","#D14D41","#D0A215","#CE5D97","#205EA6","#66800B","#BC5215","#5E409D","#24837B","#AF3029","#AD8301","#A02F6F"];function co(i){return Object.assign({bg:"#14161a",fg:"#dddddd",muted:"#8a8f98",accent:"#6aa9ff",warn:"#f59e0b",palette:fp},i||{})}var mu=0,vc=1,gu=2;var Cr=1,xu=2,Rs=3,Ci=0,Ue=1,me=2,ri=0,Cs=1,pn=2,Sc=3,bc=4,_u=5;var qi=100,yu=101,Mu=102,vu=103,Su=104,bu=200,wu=201,Eu=202,Tu=203,wc=204,Ec=205,Au=206,Ru=207,Cu=208,Iu=209,Pu=210,Uu=211,Nu=212,Fu=213,Du=214,ko=0,Oo=1,Vo=2,xs=3,zo=4,Go=5,Ho=6,Wo=7,Ir=0,Lu=1,Bu=2,Hn=0,Pr=1,Ur=2,Nr=3,ji=4,Fr=5,Dr=6,Lr=7;var Tc=300,Qi=301,Is=302,Sa=303,ba=304,_s=1e3,On=1001,Zo=1002,De=1003,ku=1004;var Br=1005;var un=1006,wa=1007;var oi=1008;var xn=1009,Ac=1010,Rc=1011,Ps=1012,Ea=1013,Ln=1014,In=1015,tn=1016,Ta=1017,Aa=1018,Ki=1020,Cc=35902,Ic=35899,Pc=1021,Uc=1022,Bn=1023,ei=1026,ai=1027,Ra=1028,Ca=1029,Ii=1030,Ia=1031;var Pa=1033,kr=33776,Or=33777,Vr=33778,zr=33779,Ua=35840,Na=35841,Fa=35842,Da=35843,La=36196,Ba=37492,ka=37496,Oa=37488,Va=37489,Gr=37490,za=37491,Ga=37808,Ha=37809,Wa=37810,Za=37811,Ya=37812,Xa=37813,Ja=37814,qa=37815,ja=37816,Qa=37817,Ka=37818,$a=37819,tl=37820,el=37821,nl=36492,il=36494,sl=36495,rl=36283,ol=36284,Hr=36285,al=36286;var ir=2300,Yo=2301,Lo=2302,dc=2303,fc=2400,pc=2401,mc=2402;var Ou=3200;var Us=0,Vu=1,li="",We="srgb",sr="srgb-linear",rr="linear",_e="srgb";var Bo=7680;var zu=519,Gu=512,Hu=513,Wu=514,Nc=515,Zu=516,Yu=517,Fc=518,Dc=519,Xu=35044;var Lc="300 es",Tn=2e3,ys=2001;function pp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function mp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ju(){let i=or("canvas");return i.style.display="block",i}var Dh={},Ms=null;function Bc(...i){let t="THREE."+i.shift();Ms?Ms("log",t,...i):console.log(t,...i)}function qu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Kt(...i){i=qu(i);let t="THREE."+i.shift();if(Ms)Ms("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ne(...i){i=qu(i);let t="THREE."+i.shift();if(Ms)Ms("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function tr(...i){let t=i.join(" ");t in Dh||(Dh[t]=!0,Kt(...i))}function ju(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Qu={[ko]:ko,[Vo]:Ho,[zo]:zo,[xs]:Go,[Oo]:Oo,[Ho]:Vo,[Wo]:Wo,[Go]:xs},Vn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Vl=Math.PI/180,Xo=180/Math.PI;function Wr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function he(i,t,e){return Math.max(t,Math.min(e,i))}function gp(i,t){return(i%t+t)%t}function zl(i,t,e){return(1-e)*i+e*t}function Ku(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function kc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function xp(i,t){if(t.constructor===Float32Array)return i;let e=kc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function _p(i,t){if(t.constructor===Float32Array)return i;let e=kc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Dt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Le=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],h=n[s+1],c=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],p=r[o+2],M=r[o+3];if(d!==M||l!==u||h!==f||c!==p){let x=l*u+h*f+c*p+d*M;x<0&&(u=-u,f=-f,p=-p,M=-M,x=-x);let g=1-a;if(x<.9995){let y=Math.acos(x),w=Math.sin(y);g=Math.sin(g*y)/w,a=Math.sin(a*y)/w,l=l*g+u*a,h=h*g+f*a,c=c*g+p*a,d=d*g+M*a}else{l=l*g+u*a,h=h*g+f*a,c=c*g+p*a,d=d*g+M*a;let y=1/Math.sqrt(l*l+h*h+c*c+d*d);l*=y,h*=y,c*=y,d*=y}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],h=n[s+2],c=n[s+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+c*d+l*f-h*u,t[e+1]=l*p+c*u+h*d-a*f,t[e+2]=h*p+c*f+a*u-l*d,t[e+3]=c*p-a*d-l*u-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(n/2),c=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=u*c*d+h*f*p,this._y=h*f*d-u*c*p,this._z=h*c*p+u*f*d,this._w=h*c*d-u*f*p;break;case"YXZ":this._x=u*c*d+h*f*p,this._y=h*f*d-u*c*p,this._z=h*c*p-u*f*d,this._w=h*c*d+u*f*p;break;case"ZXY":this._x=u*c*d-h*f*p,this._y=h*f*d+u*c*p,this._z=h*c*p+u*f*d,this._w=h*c*d-u*f*p;break;case"ZYX":this._x=u*c*d-h*f*p,this._y=h*f*d+u*c*p,this._z=h*c*p-u*f*d,this._w=h*c*d+u*f*p;break;case"YZX":this._x=u*c*d+h*f*p,this._y=h*f*d+u*c*p,this._z=h*c*p-u*f*d,this._w=h*c*d-u*f*p;break;case"XZY":this._x=u*c*d-h*f*p,this._y=h*f*d-u*c*p,this._z=h*c*p+u*f*d,this._w=h*c*d+u*f*p;break;default:Kt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],c=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(c-l)*f,this._y=(r-h)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(c-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+h)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-h)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+c)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,c=e._w;return this._x=n*c+o*a+s*h-r*l,this._y=s*c+o*l+r*a-n*h,this._z=r*c+o*h+n*l-s*a,this._w=o*c-n*a-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let h=Math.acos(a),c=Math.sin(h);l=Math.sin(l*h)/c,e=Math.sin(e*h)/c,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*s-a*n),c=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*h+o*d-a*c,this.y=n+l*c+a*h-r*d,this.z=s+l*d+r*c-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Gl.copy(this).projectOnVector(t),this.sub(Gl)}reflect(t){return this.sub(Gl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Gl=new H,Lh=new Le,ie=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,l,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,h)}set(t,e,n,s,r,o,a,l,h){let c=this.elements;return c[0]=t,c[1]=s,c[2]=a,c[3]=e,c[4]=r,c[5]=l,c[6]=n,c[7]=o,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],c=n[4],d=n[7],u=n[2],f=n[5],p=n[8],M=s[0],x=s[3],g=s[6],y=s[1],w=s[4],_=s[7],S=s[2],b=s[5],m=s[8];return r[0]=o*M+a*y+l*S,r[3]=o*x+a*w+l*b,r[6]=o*g+a*_+l*m,r[1]=h*M+c*y+d*S,r[4]=h*x+c*w+d*b,r[7]=h*g+c*_+d*m,r[2]=u*M+f*y+p*S,r[5]=u*x+f*w+p*b,r[8]=u*g+f*_+p*m,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8];return e*o*c-e*a*h-n*r*c+n*a*l+s*r*h-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],d=c*o-a*h,u=a*l-c*r,f=h*r-o*l,p=e*d+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/p;return t[0]=d*M,t[1]=(s*h-c*n)*M,t[2]=(a*n-s*o)*M,t[3]=u*M,t[4]=(c*e-s*l)*M,t[5]=(s*r-a*e)*M,t[6]=f*M,t[7]=(n*l-h*e)*M,t[8]=(o*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*o+h*a)+o+t,-s*h,s*l,-s*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return tr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Hl.makeScale(t,e)),this}rotate(t){return tr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Hl.makeRotation(-t)),this}translate(t,e){return tr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Hl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Hl=new ie,Bh=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kh=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yp(){let i={enabled:!0,workingColorSpace:sr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_e&&(s.r=ti(s.r),s.g=ti(s.g),s.b=ti(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(s.r=gs(s.r),s.g=gs(s.g),s.b=gs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===li?rr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[sr]:{primaries:t,whitePoint:n,transfer:rr,toXYZ:Bh,fromXYZ:kh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:We},outputColorSpaceConfig:{drawingBufferColorSpace:We}},[We]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:Bh,fromXYZ:kh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:We}}}),i}var ce=yp();function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ns,Jo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ns===void 0&&(ns=or("canvas")),ns.width=t.width,ns.height=t.height;let s=ns.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ns}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=or("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ti(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ti(e[n]/255)*255):e[n]=ti(e[n]);return{data:e,width:t.width,height:t.height}}else return Kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Mp=0,vs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=Wr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Wl(s[o].image)):r.push(Wl(s[o]))}else r=Wl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Wl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Jo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Kt("Texture: Unable to serialize Texture."),{})}var vp=0,Zl=new H,dn=class i extends Vn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=On,s=On,r=un,o=oi,a=Bn,l=xn,h=i.DEFAULT_ANISOTROPY,c=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Wr(),this.name="",this.source=new vs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Zl).x}get height(){return this.source.getSize(Zl).y}get depth(){return this.source.getSize(Zl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _s:t.x=t.x-Math.floor(t.x);break;case On:t.x=t.x<0?0:1;break;case Zo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _s:t.y=t.y-Math.floor(t.y);break;case On:t.y=t.y<0?0:1;break;case Zo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Tc;dn.DEFAULT_ANISOTROPY=1;var Ae=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,h=l[0],c=l[4],d=l[8],u=l[1],f=l[5],p=l[9],M=l[2],x=l[6],g=l[10];if(Math.abs(c-u)<.01&&Math.abs(d-M)<.01&&Math.abs(p-x)<.01){if(Math.abs(c+u)<.1&&Math.abs(d+M)<.1&&Math.abs(p+x)<.1&&Math.abs(h+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(h+1)/2,_=(f+1)/2,S=(g+1)/2,b=(c+u)/4,m=(d+M)/4,v=(p+x)/4;return w>_&&w>S?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=b/n,r=m/n):_>S?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=b/s,r=v/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=m/r,s=v/r),this.set(n,s,r,e),this}let y=Math.sqrt((x-p)*(x-p)+(d-M)*(d-M)+(u-c)*(u-c));return Math.abs(y)<.001&&(y=1),this.x=(x-p)/y,this.y=(d-M)/y,this.z=(u-c)/y,this.w=Math.acos((h+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this.w=he(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this.w=he(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qo=class extends Vn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new dn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new vs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ke=class extends qo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ar=class extends dn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var jo=class extends dn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Xt=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,l,h,c,d,u,f,p,M,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,h,c,d,u,f,p,M,x)}set(t,e,n,s,r,o,a,l,h,c,d,u,f,p,M,x){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=h,g[6]=c,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=M,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/is.setFromMatrixColumn(t,0).length(),r=1/is.setFromMatrixColumn(t,1).length(),o=1/is.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),h=Math.sin(s),c=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*c,f=o*d,p=a*c,M=a*d;e[0]=l*c,e[4]=-l*d,e[8]=h,e[1]=f+p*h,e[5]=u-M*h,e[9]=-a*l,e[2]=M-u*h,e[6]=p+f*h,e[10]=o*l}else if(t.order==="YXZ"){let u=l*c,f=l*d,p=h*c,M=h*d;e[0]=u+M*a,e[4]=p*a-f,e[8]=o*h,e[1]=o*d,e[5]=o*c,e[9]=-a,e[2]=f*a-p,e[6]=M+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*c,f=l*d,p=h*c,M=h*d;e[0]=u-M*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*c,e[9]=M-u*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*c,f=o*d,p=a*c,M=a*d;e[0]=l*c,e[4]=p*h-f,e[8]=u*h+M,e[1]=l*d,e[5]=M*h+u,e[9]=f*h-p,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*h,p=a*l,M=a*h;e[0]=l*c,e[4]=M-u*d,e[8]=p*d+f,e[1]=d,e[5]=o*c,e[9]=-a*c,e[2]=-h*c,e[6]=f*d+p,e[10]=u-M*d}else if(t.order==="XZY"){let u=o*l,f=o*h,p=a*l,M=a*h;e[0]=l*c,e[4]=-d,e[8]=h*c,e[1]=u*d+M,e[5]=o*c,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*c,e[10]=M*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sp,t,bp)}lookAt(t,e,n){let s=this.elements;return _n.subVectors(t,e),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),_i.crossVectors(n,_n),_i.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),_i.crossVectors(n,_n)),_i.normalize(),ho.crossVectors(_n,_i),s[0]=_i.x,s[4]=ho.x,s[8]=_n.x,s[1]=_i.y,s[5]=ho.y,s[9]=_n.y,s[2]=_i.z,s[6]=ho.z,s[10]=_n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],c=n[1],d=n[5],u=n[9],f=n[13],p=n[2],M=n[6],x=n[10],g=n[14],y=n[3],w=n[7],_=n[11],S=n[15],b=s[0],m=s[4],v=s[8],U=s[12],E=s[1],P=s[5],F=s[9],L=s[13],R=s[2],V=s[6],z=s[10],X=s[14],G=s[3],W=s[7],tt=s[11],st=s[15];return r[0]=o*b+a*E+l*R+h*G,r[4]=o*m+a*P+l*V+h*W,r[8]=o*v+a*F+l*z+h*tt,r[12]=o*U+a*L+l*X+h*st,r[1]=c*b+d*E+u*R+f*G,r[5]=c*m+d*P+u*V+f*W,r[9]=c*v+d*F+u*z+f*tt,r[13]=c*U+d*L+u*X+f*st,r[2]=p*b+M*E+x*R+g*G,r[6]=p*m+M*P+x*V+g*W,r[10]=p*v+M*F+x*z+g*tt,r[14]=p*U+M*L+x*X+g*st,r[3]=y*b+w*E+_*R+S*G,r[7]=y*m+w*P+_*V+S*W,r[11]=y*v+w*F+_*z+S*tt,r[15]=y*U+w*L+_*X+S*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],c=t[2],d=t[6],u=t[10],f=t[14],p=t[3],M=t[7],x=t[11],g=t[15],y=l*f-h*u,w=a*f-h*d,_=a*u-l*d,S=o*f-h*c,b=o*u-l*c,m=o*d-a*c;return e*(M*y-x*w+g*_)-n*(p*y-x*S+g*b)+s*(p*w-M*S+g*m)-r*(p*_-M*b+x*m)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],h=t[6],c=t[10];return e*(o*c-a*h)-n*(r*c-a*l)+s*(r*h-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],d=t[9],u=t[10],f=t[11],p=t[12],M=t[13],x=t[14],g=t[15],y=e*a-n*o,w=e*l-s*o,_=e*h-r*o,S=n*l-s*a,b=n*h-r*a,m=s*h-r*l,v=c*M-d*p,U=c*x-u*p,E=c*g-f*p,P=d*x-u*M,F=d*g-f*M,L=u*g-f*x,R=y*L-w*F+_*P+S*E-b*U+m*v;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/R;return t[0]=(a*L-l*F+h*P)*V,t[1]=(s*F-n*L-r*P)*V,t[2]=(M*m-x*b+g*S)*V,t[3]=(u*b-d*m-f*S)*V,t[4]=(l*E-o*L-h*U)*V,t[5]=(e*L-s*E+r*U)*V,t[6]=(x*_-p*m-g*w)*V,t[7]=(c*m-u*_+f*w)*V,t[8]=(o*F-a*E+h*v)*V,t[9]=(n*E-e*F-r*v)*V,t[10]=(p*b-M*_+g*y)*V,t[11]=(d*_-c*b-f*y)*V,t[12]=(a*U-o*P-l*v)*V,t[13]=(e*P-n*U+s*v)*V,t[14]=(M*w-p*S-x*y)*V,t[15]=(c*S-d*w+u*y)*V,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,h=r*o,c=r*a;return this.set(h*o+n,h*a-s*l,h*l+s*a,0,h*a+s*l,c*a+n,c*l-s*o,0,h*l-s*a,c*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,c=o+o,d=a+a,u=r*h,f=r*c,p=r*d,M=o*c,x=o*d,g=a*d,y=l*h,w=l*c,_=l*d,S=n.x,b=n.y,m=n.z;return s[0]=(1-(M+g))*S,s[1]=(f+_)*S,s[2]=(p-w)*S,s[3]=0,s[4]=(f-_)*b,s[5]=(1-(u+g))*b,s[6]=(x+y)*b,s[7]=0,s[8]=(p+w)*m,s[9]=(x-y)*m,s[10]=(1-(u+M))*m,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=is.set(s[0],s[1],s[2]).length(),a=is.set(s[4],s[5],s[6]).length(),l=is.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Un.copy(this);let h=1/o,c=1/a,d=1/l;return Un.elements[0]*=h,Un.elements[1]*=h,Un.elements[2]*=h,Un.elements[4]*=c,Un.elements[5]*=c,Un.elements[6]*=c,Un.elements[8]*=d,Un.elements[9]*=d,Un.elements[10]*=d,e.setFromRotationMatrix(Un),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Tn,l=!1){let h=this.elements,c=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),p,M;if(l)p=r/(o-r),M=o*r/(o-r);else if(a===Tn)p=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===ys)p=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=c,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=d,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=p,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Tn,l=!1){let h=this.elements,c=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),p,M;if(l)p=1/(o-r),M=o/(o-r);else if(a===Tn)p=-2/(o-r),M=-(o+r)/(o-r);else if(a===ys)p=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=c,h[4]=0,h[8]=0,h[12]=u,h[1]=0,h[5]=d,h[9]=0,h[13]=f,h[2]=0,h[6]=0,h[10]=p,h[14]=M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},is=new H,Un=new Xt,Sp=new H(0,0,0),bp=new H(1,1,1),_i=new H,ho=new H,_n=new H,Oh=new Xt,Vh=new Le,fn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],c=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-he(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(he(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-he(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(he(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:Kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Oh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Oh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vh.setFromEuler(this),this.setFromQuaternion(Vh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fn.DEFAULT_ORDER="XYZ";var lr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},wp=0,zh=new H,ss=new Le,qn=new Xt,uo=new H,Xs=new H,Ep=new H,Tp=new Le,Gh=new H(1,0,0),Hh=new H(0,1,0),Wh=new H(0,0,1),Zh={type:"added"},Ap={type:"removed"},rs={type:"childadded",child:null},Yl={type:"childremoved",child:null},Ke=class i extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new H,e=new fn,n=new Le,s=new H(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xt},normalMatrix:{value:new ie}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.multiply(ss),this}rotateOnWorldAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.premultiply(ss),this}rotateX(t){return this.rotateOnAxis(Gh,t)}rotateY(t){return this.rotateOnAxis(Hh,t)}rotateZ(t){return this.rotateOnAxis(Wh,t)}translateOnAxis(t,e){return zh.copy(t).applyQuaternion(this.quaternion),this.position.add(zh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gh,t)}translateY(t){return this.translateOnAxis(Hh,t)}translateZ(t){return this.translateOnAxis(Wh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?uo.copy(t):uo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Xs,uo,this.up):qn.lookAt(uo,Xs,this.up),this.quaternion.setFromRotationMatrix(qn),s&&(qn.extractRotation(s.matrixWorld),ss.setFromRotationMatrix(qn),this.quaternion.premultiply(ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zh),rs.child=t,this.dispatchEvent(rs),rs.child=null):ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ap),Yl.child=t,this.dispatchEvent(Yl),Yl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zh),rs.child=t,this.dispatchEvent(rs),rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,t,Ep),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,Tp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let d=l[h];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),h=o(t.textures),c=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),c.length>0&&(n.images=c),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let h in a){let c=a[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ke.DEFAULT_UP=new H(0,1,0);Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hn=class extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rp={type:"move"},Ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let M of t.hand.values()){let x=e.getJointPose(M,n),g=this._getHandJoint(h,M);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}let c=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],u=c.position.distanceTo(d.position),f=.02,p=.005;h.inputState.pinching&&u>f+p?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&u<=f-p&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new hn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},$u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},fo={h:0,s:0,l:0};function Xl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Mt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ce.workingColorSpace){if(t=gp(t,1),e=he(e,0,1),n=he(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Xl(o,r,t+1/3),this.g=Xl(o,r,t),this.b=Xl(o,r,t-1/3)}return ce.colorSpaceToWorking(this,s),this}setStyle(t,e=We){function n(r){r!==void 0&&parseFloat(r)<1&&Kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){let n=$u[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ti(t.r),this.g=ti(t.g),this.b=ti(t.b),this}copyLinearToSRGB(t){return this.r=gs(t.r),this.g=gs(t.g),this.b=gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return ce.workingToColorSpace(rn.copy(this),t),Math.round(he(rn.r*255,0,255))*65536+Math.round(he(rn.g*255,0,255))*256+Math.round(he(rn.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.workingToColorSpace(rn.copy(this),e);let n=rn.r,s=rn.g,r=rn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,h,c=(a+o)/2;if(a===o)l=0,h=0;else{let d=o-a;switch(h=c<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=ce.workingColorSpace){return ce.workingToColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=We){ce.workingToColorSpace(rn.copy(this),t);let e=rn.r,n=rn.g,s=rn.b;return t!==We?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(yi),this.setHSL(yi.h+t,yi.s+e,yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(yi),t.getHSL(fo);let n=zl(yi.h,fo.h,e),s=zl(yi.s,fo.s,e),r=zl(yi.l,fo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new Mt;Mt.NAMES=$u;var cr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Mt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},hr=class extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Nn=new H,jn=new H,Jl=new H,Qn=new H,os=new H,as=new H,Yh=new H,ql=new H,jl=new H,Ql=new H,Kl=new Ae,$l=new Ae,tc=new Ae,bi=class i{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Nn.subVectors(t,e),s.cross(Nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Nn.subVectors(s,e),jn.subVectors(n,e),Jl.subVectors(t,e);let o=Nn.dot(Nn),a=Nn.dot(jn),l=Nn.dot(Jl),h=jn.dot(jn),c=jn.dot(Jl),d=o*h-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(h*l-a*c)*u,p=(o*c-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(o,Qn.y),l.addScaledVector(a,Qn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Kl.setScalar(0),$l.setScalar(0),tc.setScalar(0),Kl.fromBufferAttribute(t,e),$l.fromBufferAttribute(t,n),tc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Kl,r.x),o.addScaledVector($l,r.y),o.addScaledVector(tc,r.z),o}static isFrontFacing(t,e,n,s){return Nn.subVectors(n,e),jn.subVectors(t,e),Nn.cross(jn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Nn.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;os.subVectors(s,n),as.subVectors(r,n),ql.subVectors(t,n);let l=os.dot(ql),h=as.dot(ql);if(l<=0&&h<=0)return e.copy(n);jl.subVectors(t,s);let c=os.dot(jl),d=as.dot(jl);if(c>=0&&d<=c)return e.copy(s);let u=l*d-c*h;if(u<=0&&l>=0&&c<=0&&l-c>0)return o=l/(l-c),e.copy(n).addScaledVector(os,o);Ql.subVectors(t,r);let f=os.dot(Ql),p=as.dot(Ql);if(p>=0&&f<=p)return e.copy(r);let M=f*h-l*p;if(M<=0&&h>=0&&p<=0)return a=h/(h-p),e.copy(n).addScaledVector(as,a);let x=c*p-f*d;if(x<=0&&d-c>=0&&f-p>=0)return Yh.subVectors(r,s),a=(d-c)/(d-c+(f-p)),e.copy(s).addScaledVector(Yh,a);let g=1/(x+M+u);return o=M*g,a=u*g,e.copy(n).addScaledVector(os,o).addScaledVector(as,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},An=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Fn):Fn.fromBufferAttribute(r,o),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),po.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),po.copy(n.boundingBox)),po.applyMatrix4(t.matrixWorld),this.union(po)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Js),mo.subVectors(this.max,Js),ls.subVectors(t.a,Js),cs.subVectors(t.b,Js),hs.subVectors(t.c,Js),Mi.subVectors(cs,ls),vi.subVectors(hs,cs),Oi.subVectors(ls,hs);let e=[0,-Mi.z,Mi.y,0,-vi.z,vi.y,0,-Oi.z,Oi.y,Mi.z,0,-Mi.x,vi.z,0,-vi.x,Oi.z,0,-Oi.x,-Mi.y,Mi.x,0,-vi.y,vi.x,0,-Oi.y,Oi.x,0];return!ec(e,ls,cs,hs,mo)||(e=[1,0,0,0,1,0,0,0,1],!ec(e,ls,cs,hs,mo))?!1:(go.crossVectors(Mi,vi),e=[go.x,go.y,go.z],ec(e,ls,cs,hs,mo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Kn=[new H,new H,new H,new H,new H,new H,new H,new H],Fn=new H,po=new An,ls=new H,cs=new H,hs=new H,Mi=new H,vi=new H,Oi=new H,Js=new H,mo=new H,go=new H,Vi=new H;function ec(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Vi.fromArray(i,r);let a=s.x*Math.abs(Vi.x)+s.y*Math.abs(Vi.y)+s.z*Math.abs(Vi.z),l=t.dot(Vi),h=e.dot(Vi),c=n.dot(Vi);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>a)return!1}return!0}var Fe=new H,xo=new Dt,Cp=0,Mn=class extends Vn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xu,this.updateRanges=[],this.gpuType=In,this.version=0,this._normalizationScale=t!==void 0?kc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xo.fromBufferAttribute(this,e),xo.applyMatrix3(t),this.setXY(e,xo.x,xo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):xp(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):_p(t,this.array)}};var ur=class extends Mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var dr=class extends Mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ot=class extends Mn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ip=new An,qs=new H,nc=new H,zn=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ip.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qs.subVectors(t,this.center);let e=qs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(qs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qs.copy(t.center).add(nc)),this.expandByPoint(qs.copy(t.center).sub(nc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Pp=0,En=new Xt,ic=new Ke,us=new H,yn=new An,js=new An,He=new H,oe=class i extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Wr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pp(t)?dr:ur)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ie().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return ic.lookAt(t),ic.updateMatrix(),this.applyMatrix4(ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ot(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new An);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let n=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];js.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(yn.min,js.min),yn.expandByPoint(He),He.addVectors(yn.max,js.max),yn.expandByPoint(He)):(yn.expandByPoint(js.min),yn.expandByPoint(js.max))}yn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)He.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(He));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let h=0,c=a.count;h<c;h++)He.fromBufferAttribute(a,h),l&&(us.fromBufferAttribute(t,h),He.add(us)),s=Math.max(s,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Mn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],h=new Uint8Array(n.count);for(let U=0;U<n.count;U++)a[U]=new H,l[U]=new H;let c=new H,d=new H,u=new H,f=new Dt,p=new Dt,M=new Dt,x=new H,g=new H;function y(U,E,P){h[U]=h[E]=h[P]=1,c.fromBufferAttribute(n,U),d.fromBufferAttribute(n,E),u.fromBufferAttribute(n,P),f.fromBufferAttribute(r,U),p.fromBufferAttribute(r,E),M.fromBufferAttribute(r,P),d.sub(c),u.sub(c),p.sub(f),M.sub(f);let F=1/(p.x*M.y-M.x*p.y);isFinite(F)&&(x.copy(d).multiplyScalar(M.y).addScaledVector(u,-p.y).multiplyScalar(F),g.copy(u).multiplyScalar(p.x).addScaledVector(d,-M.x).multiplyScalar(F),a[U].add(x),a[E].add(x),a[P].add(x),l[U].add(g),l[E].add(g),l[P].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let U=0,E=w.length;U<E;++U){let P=w[U],F=P.start,L=P.count;for(let R=F,V=F+L;R<V;R+=3)y(t.getX(R+0),t.getX(R+1),t.getX(R+2))}let _=new H,S=new H,b=new H,m=new H;function v(U){b.fromBufferAttribute(s,U),m.copy(b);let E=a[U];_.copy(E),_.sub(b.multiplyScalar(b.dot(E))).normalize(),S.crossVectors(m,E);let F=S.dot(l[U])<0?-1:1;o.setXYZW(U,_.x,_.y,_.z,F)}for(let U=0,E=n.count;U<E;++U)h[U]&&v(U);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new H,r=new H,o=new H,a=new H,l=new H,h=new H,c=new H,d=new H;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),M=t.getX(u+1),x=t.getX(u+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,x),c.subVectors(o,r),d.subVectors(s,r),c.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,M),h.fromBufferAttribute(n,x),a.add(c),l.add(c),h.add(c),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(x,h.x,h.y,h.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),c.subVectors(o,r),d.subVectors(s,r),c.cross(d),n.setXYZ(u+0,c.x,c.y,c.z),n.setXYZ(u+1,c.x,c.y,c.z),n.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,l){let h=a.array,c=a.itemSize,d=a.normalized,u=new h.constructor(l.length*c),f=0,p=0;for(let M=0,x=l.length;M<x;M++){a.isInterleavedBufferAttribute?f=l[M]*a.data.stride+a.offset:f=l[M]*c;for(let g=0;g<c;g++)u[p++]=h[f++]}return new Mn(u,c,d)}if(this.index===null)return Kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],h=t(l,n);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let l=[],h=r[a];for(let c=0,d=h.length;c<d;c++){let u=h[c],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let h=n[l];t.data.attributes[l]=h.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let d=0,u=h.length;d<u;d++){let f=h[d];c.push(f.toJSON(t.data))}c.length>0&&(s[l]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let c=s[h];this.setAttribute(h,c.clone(e))}let r=t.morphAttributes;for(let h in r){let c=[],d=r[h];for(let u=0,f=d.length;u<f;u++)c.push(d[u].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,c=o.length;h<c;h++){let d=o[h];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var sc=new H,Up=new H,Np=new ie,Dn=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=sc.subVectors(n,e).cross(Up.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(sc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Np.getNormalMatrix(t),s=this.coplanarPoint(sc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Fp=0,Rn=class extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Wr(),this.name="",this.type="Material",this.blending=Cs,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wc,this.blendDst=Ec,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bo,this.stencilZFail=Bo,this.stencilZPass=Bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Kt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Mt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Dn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Dt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Dt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var $n=new H,rc=new H,_o=new H,yo=new H,bs=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=$n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($n.copy(this.origin).addScaledVector(this.direction,e),$n.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){rc.copy(t).add(e).multiplyScalar(.5),_o.copy(e).sub(t).normalize(),yo.copy(this.origin).sub(rc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(_o),a=yo.dot(this.direction),l=-yo.dot(_o),h=yo.lengthSq(),c=Math.abs(1-o*o),d,u,f,p;if(c>0)if(d=o*l-a,u=o*a-l,p=r*c,d>=0)if(u>=-p)if(u<=p){let M=1/c;d*=M,u*=M,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+h}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+h;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+h;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+h):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+h):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+h);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(rc).addScaledVector(_o,u),f}intersectSphere(t,e){if(t.radius<0)return null;$n.subVectors(t.center,this.origin);let n=$n.dot(this.direction),s=$n.dot($n)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,h=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,u=this.origin;return h>=0?(n=(t.min.x-u.x)*h,s=(t.max.x-u.x)*h):(n=(t.max.x-u.x)*h,s=(t.min.x-u.x)*h),c>=0?(r=(t.min.y-u.y)*c,o=(t.max.y-u.y)*c):(r=(t.max.y-u.y)*c,o=(t.min.y-u.y)*c),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,$n)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,h=a.y,c=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,p=e.x-o.x,M=e.y-o.y,x=e.z-o.z,g=n.x-o.x,y=n.y-o.y,w=n.z-o.z,_=Math.abs(l),S=Math.abs(h),b=Math.abs(c),m,v,U,E,P,F,L,R,V,z,X,G;if(_>=S&&_>=b?(U=l,F=d,V=p,G=g,l>=0?(m=h,v=c,E=u,P=f,L=M,R=x,z=y,X=w):(m=c,v=h,E=f,P=u,L=x,R=M,z=w,X=y)):S>=b?(U=h,F=u,V=M,G=y,h>=0?(m=c,v=l,E=f,P=d,L=x,R=p,z=w,X=g):(m=l,v=c,E=d,P=f,L=p,R=x,z=g,X=w)):(U=c,F=f,V=x,G=w,c>=0?(m=l,v=h,E=d,P=u,L=p,R=M,z=g,X=y):(m=h,v=l,E=u,P=d,L=M,R=p,z=y,X=g)),U===0)return null;let W=m/U,tt=v/U,st=1/U,O=E-W*F,at=P-tt*F,K=L-W*V,A=R-tt*V,D=z-W*G,j=X-tt*G,$=D*A-j*K,ut=O*j-at*D,ft=K*at-A*O;if(s){if($<0||ut<0||ft<0)return null}else if(($<0||ut<0||ft<0)&&($>0||ut>0||ft>0))return null;let ct=$+ut+ft;if(ct===0)return null;let vt=st*($*F+ut*V+ft*G);return(ct>0?vt<0:vt>0)?null:this.at(vt/ct,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},re=class extends Rn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=Ir,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Xh=new Xt,zi=new bs,Mo=new zn,Jh=new H,vo=new H,So=new H,bo=new H,oc=new H,wo=new H,qh=new H,Eo=new H,te=class extends Ke{constructor(t=new oe,e=new re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){wo.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let c=a[l],d=r[l];c!==0&&(oc.fromBufferAttribute(d,t),o?wo.addScaledVector(oc,c):wo.addScaledVector(oc.sub(e),c))}e.add(wo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(r),zi.copy(t.ray).recast(t.near),!(Mo.containsPoint(zi.origin)===!1&&(zi.intersectSphere(Mo,Jh)===null||zi.origin.distanceToSquared(Jh)>(t.far-t.near)**2))&&(Xh.copy(r).invert(),zi.copy(t.ray).applyMatrix4(Xh),!(n.boundingBox!==null&&zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,zi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,M=u.length;p<M;p++){let x=u[p],g=o[x.materialIndex],y=Math.max(x.start,f.start),w=Math.min(a.count,Math.min(x.start+x.count,f.start+f.count));for(let _=y,S=w;_<S;_+=3){let b=a.getX(_),m=a.getX(_+1),v=a.getX(_+2);s=To(this,g,t,n,h,c,d,b,m,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),M=Math.min(a.count,f.start+f.count);for(let x=p,g=M;x<g;x+=3){let y=a.getX(x),w=a.getX(x+1),_=a.getX(x+2);s=To(this,o,t,n,h,c,d,y,w,_),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,M=u.length;p<M;p++){let x=u[p],g=o[x.materialIndex],y=Math.max(x.start,f.start),w=Math.min(l.count,Math.min(x.start+x.count,f.start+f.count));for(let _=y,S=w;_<S;_+=3){let b=_,m=_+1,v=_+2;s=To(this,g,t,n,h,c,d,b,m,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let x=p,g=M;x<g;x+=3){let y=x,w=x+1,_=x+2;s=To(this,o,t,n,h,c,d,y,w,_),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function Dp(i,t,e,n,s,r,o,a){let l;if(t.side===Ue?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ci,a),l===null)return null;Eo.copy(a),Eo.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(Eo);return h<e.near||h>e.far?null:{distance:h,point:Eo.clone(),object:i}}function To(i,t,e,n,s,r,o,a,l,h){i.getVertexPosition(a,vo),i.getVertexPosition(l,So),i.getVertexPosition(h,bo);let c=Dp(i,t,e,n,vo,So,bo,qh);if(c){let d=new H;bi.getBarycoord(qh,vo,So,bo,d),s&&(c.uv=bi.getInterpolatedAttribute(s,a,l,h,d,new Dt)),r&&(c.uv1=bi.getInterpolatedAttribute(r,a,l,h,d,new Dt)),o&&(c.normal=bi.getInterpolatedAttribute(o,a,l,h,d,new H),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));let u={a,b:l,c:h,normal:new H,materialIndex:0};bi.getNormal(vo,So,bo,u.normal),c.face=u,c.barycoord=d}return c}var fr=class extends dn{constructor(t=null,e=1,n=1,s,r,o,a,l,h=De,c=De,d,u){super(null,o,a,l,h,c,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pr=class extends Mn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ds=new Xt,jh=new Xt,Ao=[],Qh=new An,Lp=new Xt,Qs=new te,Ks=new zn,fe=class extends te{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new pr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Lp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new An),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ds),Qh.copy(t.boundingBox).applyMatrix4(ds),this.boundingBox.union(Qh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new zn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ds),Ks.copy(t.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(Ks)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Qs.geometry=this.geometry,Qs.material=this.material,Qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ks.copy(this.boundingSphere),Ks.applyMatrix4(n),t.ray.intersectsSphere(Ks)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ds),jh.multiplyMatrices(n,ds),Qs.matrixWorld=jh,Qs.raycast(t,Ao);for(let o=0,a=Ao.length;o<a;o++){let l=Ao[o];l.instanceId=r,l.object=this,e.push(l)}Ao.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new pr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new fr(new Float32Array(s*this.count),s,this.count,Ra,In));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<n.length;h++)o+=n[h];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Gi=new zn,Bp=new Dt(.5,.5),Ro=new H,wi=class{constructor(t=new Dn,e=new Dn,n=new Dn,s=new Dn,r=new Dn,o=new Dn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Tn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],h=r[3],c=r[4],d=r[5],u=r[6],f=r[7],p=r[8],M=r[9],x=r[10],g=r[11],y=r[12],w=r[13],_=r[14],S=r[15];if(s[0].setComponents(h-o,f-c,g-p,S-y).normalize(),s[1].setComponents(h+o,f+c,g+p,S+y).normalize(),s[2].setComponents(h+a,f+d,g+M,S+w).normalize(),s[3].setComponents(h-a,f-d,g-M,S-w).normalize(),n)s[4].setComponents(l,u,x,_).normalize(),s[5].setComponents(h-l,f-u,g-x,S-_).normalize();else if(s[4].setComponents(h-l,f-u,g-x,S-_).normalize(),e===Tn)s[5].setComponents(h+l,f+u,g+x,S+_).normalize();else if(e===ys)s[5].setComponents(l,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){Gi.center.set(0,0,0);let e=Bp.distanceTo(t.center);return Gi.radius=.7071067811865476+e,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ro.x=s.normal.x>0?t.max.x:t.min.x,Ro.y=s.normal.y>0?t.max.y:t.min.y,Ro.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Kh=new Xt,Qo=class i{constructor(){this.coordinateSystem=Tn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Kh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new wi),n[s].setFromProjectionMatrix(Kh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new wi),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Be=class extends Rn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ko=new H,$o=new H,$h=new Xt,$s=new bs,Co=new zn,ac=new H,tu=new H,mr=class extends Ke{constructor(t=new oe,e=new Be){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ko.fromBufferAttribute(e,s-1),$o.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ko.distanceTo($o);t.setAttribute("lineDistance",new Ot(n,1))}else Kt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(s),Co.radius+=r,t.ray.intersectsSphere(Co)===!1)return;$h.copy(s).invert(),$s.copy(t.ray).applyMatrix4($h);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=this.isLineSegments?2:1,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let M=f,x=p-1;M<x;M+=h){let g=c.getX(M),y=c.getX(M+1),w=Io(this,t,$s,l,g,y,M);w&&e.push(w)}if(this.isLineLoop){let M=c.getX(p-1),x=c.getX(f),g=Io(this,t,$s,l,M,x,p-1);g&&e.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let M=f,x=p-1;M<x;M+=h){let g=Io(this,t,$s,l,M,M+1,M);g&&e.push(g)}if(this.isLineLoop){let M=Io(this,t,$s,l,p-1,f,p-1);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Io(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Ko.fromBufferAttribute(a,s),$o.fromBufferAttribute(a,r),e.distanceSqToSegment(Ko,$o,ac,tu)>n)return;ac.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo(ac);if(!(h<t.near||h>t.far))return{distance:h,point:tu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var eu=new H,nu=new H,Ze=class extends mr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)eu.fromBufferAttribute(e,s),nu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+eu.distanceTo(nu);t.setAttribute("lineDistance",new Ot(n,1))}else Kt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},gr=class extends mr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Ei=class extends Rn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},iu=new Xt,gc=new bs,Po=new zn,Uo=new H,Hi=class extends Ke{constructor(t=new oe,e=new Ei){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(s),Po.radius+=r,t.ray.intersectsSphere(Po)===!1)return;iu.copy(s).invert(),gc.copy(t.ray).applyMatrix4(iu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=n.index,d=n.attributes.position;if(h!==null){let u=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let p=u,M=f;p<M;p++){let x=h.getX(p);Uo.fromBufferAttribute(d,x),su(Uo,x,l,s,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,M=f;p<M;p++)Uo.fromBufferAttribute(d,p),su(Uo,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function su(i,t,e,n,s,r,o){let a=gc.distanceSqToPoint(i);if(a<e){let l=new H;gc.closestPointToPoint(i,l),l.applyMatrix4(n);let h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var xr=class extends dn{constructor(t=[],e=Qi,n,s,r,o,a,l,h,c){super(t,e,n,s,r,o,a,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Wi=class extends dn{constructor(t,e,n,s,r,o,a,l,h){super(t,e,n,s,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ni=class extends dn{constructor(t,e,n=Ln,s,r,o,a=De,l=De,h,c=ei,d=1){if(c!==ei&&c!==ai)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,l,c,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new vs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},_r=class extends ni{constructor(t,e=Ln,n=Qi,s,r,o=De,a=De,l,h=ei){let c={width:t,height:t,depth:1},d=[c,c,c,c,c,c];super(t,t,e,n,s,r,o,a,l,h),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},yr=class extends dn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ie=class i extends oe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],h=[],c=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ot(h,3)),this.setAttribute("normal",new Ot(c,3)),this.setAttribute("uv",new Ot(d,2));function p(M,x,g,y,w,_,S,b,m,v,U){let E=_/m,P=S/v,F=_/2,L=S/2,R=b/2,V=m+1,z=v+1,X=0,G=0,W=new H;for(let tt=0;tt<z;tt++){let st=tt*P-L;for(let O=0;O<V;O++){let at=O*E-F;W[M]=at*y,W[x]=st*w,W[g]=R,h.push(W.x,W.y,W.z),W[M]=0,W[x]=0,W[g]=b>0?1:-1,c.push(W.x,W.y,W.z),d.push(O/m),d.push(1-tt/v),X+=1}}for(let tt=0;tt<v;tt++)for(let st=0;st<m;st++){let O=u+st+V*tt,at=u+st+V*(tt+1),K=u+(st+1)+V*(tt+1),A=u+(st+1)+V*tt;l.push(O,at,A),l.push(at,K,A),G+=6}a.addGroup(f,G,U),f+=G,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Gn=class i extends oe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],h=new H,c=new Dt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;h.x=t*Math.cos(f),h.y=t*Math.sin(f),o.push(h.x,h.y,h.z),a.push(0,0,1),c.x=(o[u]/t+1)/2,c.y=(o[u+1]/t+1)/2,l.push(c.x,c.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ot(o,3)),this.setAttribute("normal",new Ot(a,3)),this.setAttribute("uv",new Ot(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},xe=class i extends oe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let c=[],d=[],u=[],f=[],p=0,M=[],x=n/2,g=0;y(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(c),this.setAttribute("position",new Ot(d,3)),this.setAttribute("normal",new Ot(u,3)),this.setAttribute("uv",new Ot(f,2));function y(){let _=new H,S=new H,b=0,m=(e-t)/n;for(let v=0;v<=r;v++){let U=[],E=v/r,P=E*(e-t)+t;for(let F=0;F<=s;F++){let L=F/s,R=L*l+a,V=Math.sin(R),z=Math.cos(R);S.x=P*V,S.y=-E*n+x,S.z=P*z,d.push(S.x,S.y,S.z),_.set(V,m,z).normalize(),u.push(_.x,_.y,_.z),f.push(L,1-E),U.push(p++)}M.push(U)}for(let v=0;v<s;v++)for(let U=0;U<r;U++){let E=M[U][v],P=M[U+1][v],F=M[U+1][v+1],L=M[U][v+1];(t>0||U!==0)&&(c.push(E,P,L),b+=3),(e>0||U!==r-1)&&(c.push(P,F,L),b+=3)}h.addGroup(g,b,0),g+=b}function w(_){let S=p,b=new Dt,m=new H,v=0,U=_===!0?t:e,E=_===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,x*E,0),u.push(0,E,0),f.push(.5,.5),p++;let P=p;for(let F=0;F<=s;F++){let R=F/s*l+a,V=Math.cos(R),z=Math.sin(R);m.x=U*z,m.y=x*E,m.z=U*V,d.push(m.x,m.y,m.z),u.push(0,E,0),b.x=V*.5+.5,b.y=z*.5*E+.5,f.push(b.x,b.y),p++}for(let F=0;F<s;F++){let L=S+F,R=P+F;_===!0?c.push(R,R+1,L):c.push(R+1,R,L),v+=3}h.addGroup(g,v,_===!0?1:2),g+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ws=class i extends xe{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ta=class i extends oe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),h(n),c(),this.setAttribute("position",new Ot(r,3)),this.setAttribute("normal",new Ot(r.slice(),3)),this.setAttribute("uv",new Ot(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let w=new H,_=new H,S=new H;for(let b=0;b<e.length;b+=3)f(e[b+0],w),f(e[b+1],_),f(e[b+2],S),l(w,_,S,y)}function l(y,w,_,S){let b=S+1,m=[];for(let v=0;v<=b;v++){m[v]=[];let U=y.clone().lerp(_,v/b),E=w.clone().lerp(_,v/b),P=b-v;for(let F=0;F<=P;F++)F===0&&v===b?m[v][F]=U:m[v][F]=U.clone().lerp(E,F/P)}for(let v=0;v<b;v++)for(let U=0;U<2*(b-v)-1;U++){let E=Math.floor(U/2);U%2===0?(u(m[v][E+1]),u(m[v+1][E]),u(m[v][E])):(u(m[v][E+1]),u(m[v+1][E+1]),u(m[v+1][E]))}}function h(y){let w=new H;for(let _=0;_<r.length;_+=3)w.x=r[_+0],w.y=r[_+1],w.z=r[_+2],w.normalize().multiplyScalar(y),r[_+0]=w.x,r[_+1]=w.y,r[_+2]=w.z}function c(){let y=new H;for(let w=0;w<r.length;w+=3){y.x=r[w+0],y.y=r[w+1],y.z=r[w+2];let _=x(y)/2/Math.PI+.5,S=g(y)/Math.PI+.5;o.push(_,1-S)}p(),d()}function d(){for(let y=0;y<o.length;y+=6){let w=o[y+0],_=o[y+2],S=o[y+4],b=Math.max(w,_,S),m=Math.min(w,_,S);b>.9&&m<.1&&(w<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),S<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,w){let _=y*3;w.x=t[_+0],w.y=t[_+1],w.z=t[_+2]}function p(){let y=new H,w=new H,_=new H,S=new H,b=new Dt,m=new Dt,v=new Dt;for(let U=0,E=0;U<r.length;U+=9,E+=6){y.set(r[U+0],r[U+1],r[U+2]),w.set(r[U+3],r[U+4],r[U+5]),_.set(r[U+6],r[U+7],r[U+8]),b.set(o[E+0],o[E+1]),m.set(o[E+2],o[E+3]),v.set(o[E+4],o[E+5]),S.copy(y).add(w).add(_).divideScalar(3);let P=x(S);M(b,E+0,y,P),M(m,E+2,w,P),M(v,E+4,_,P)}}function M(y,w,_,S){S<0&&y.x===1&&(o[w]=y.x-1),_.x===0&&_.z===0&&(o[w]=S/2/Math.PI+.5)}function x(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Kt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,h;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),h=n[s]-o,h<0)a=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let c=n[s],u=n[s+1]-c,f=(o-c)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Dt:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new H,s=[],r=[],o=[],a=new H,l=new Xt;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new H)}r[0]=new H,o[0]=new H;let h=Number.MAX_VALUE,c=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);c<=h&&(h=c,n.set(1,0,0)),d<=h&&(h=d,n.set(0,1,0)),u<=h&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(he(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(he(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Mr=class extends Cn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Dt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=h-this.aY;l=u*c-f*d+this.aX,h=u*d+f*c+this.aY}return n.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ea=class extends Mr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Oc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){s(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,c,d){let u=(o-r)/h-(a-r)/(h+c)+(a-o)/c,f=(a-o)/c-(l-o)/(c+d)+(l-a)/d;u*=c,f*=c,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var ru=new H,ou=new H,lc=new Oc,cc=new Oc,hc=new Oc,na=class extends Cn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new H){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,c;this.closed||a>0?h=s[(a-1)%r]:(ou.subVectors(s[0],s[1]).add(s[0]),h=ou);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?c=s[(a+2)%r]:(ru.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=ru),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(h.distanceToSquared(d),f),M=Math.pow(d.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(c),f);M<1e-4&&(M=1),p<1e-4&&(p=M),x<1e-4&&(x=M),lc.initNonuniformCatmullRom(h.x,d.x,u.x,c.x,p,M,x),cc.initNonuniformCatmullRom(h.y,d.y,u.y,c.y,p,M,x),hc.initNonuniformCatmullRom(h.z,d.z,u.z,c.z,p,M,x)}else this.curveType==="catmullrom"&&(lc.initCatmullRom(h.x,d.x,u.x,c.x,this.tension),cc.initCatmullRom(h.y,d.y,u.y,c.y,this.tension),hc.initCatmullRom(h.z,d.z,u.z,c.z,this.tension));return n.set(lc.calc(l),cc.calc(l),hc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new H().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function au(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function kp(i,t){let e=1-i;return e*e*t}function Op(i,t){return 2*(1-i)*i*t}function Vp(i,t){return i*i*t}function er(i,t,e,n){return kp(i,t)+Op(i,e)+Vp(i,n)}function zp(i,t){let e=1-i;return e*e*e*t}function Gp(i,t){let e=1-i;return 3*e*e*i*t}function Hp(i,t){return 3*(1-i)*i*i*t}function Wp(i,t){return i*i*i*t}function nr(i,t,e,n,s){return zp(i,t)+Gp(i,e)+Hp(i,n)+Wp(i,s)}var ia=class extends Cn{constructor(t=new Dt,e=new Dt,n=new Dt,s=new Dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Dt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(nr(t,s.x,r.x,o.x,a.x),nr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},sa=class extends Cn{constructor(t=new H,e=new H,n=new H,s=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new H){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(nr(t,s.x,r.x,o.x,a.x),nr(t,s.y,r.y,o.y,a.y),nr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ra=class extends Cn{constructor(t=new Dt,e=new Dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Dt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},oa=class extends Cn{constructor(t=new H,e=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new H){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new H){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},aa=class extends Cn{constructor(t=new Dt,e=new Dt,n=new Dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Dt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(er(t,s.x,r.x,o.x),er(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zi=class extends Cn{constructor(t=new H,e=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new H){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(er(t,s.x,r.x,o.x),er(t,s.y,r.y,o.y),er(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},la=class extends Cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Dt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],h=s[o],c=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(au(a,l.x,h.x,c.x,d.x),au(a,l.y,h.y,c.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Dt().fromArray(s))}return this}},Zp=Object.freeze({__proto__:null,ArcCurve:ea,CatmullRomCurve3:na,CubicBezierCurve:ia,CubicBezierCurve3:sa,EllipseCurve:Mr,LineCurve:ra,LineCurve3:oa,QuadraticBezierCurve:aa,QuadraticBezierCurve3:Zi,SplineCurve:la});var ii=class i extends ta{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Yi=class i extends oe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),h=a+1,c=l+1,d=t/a,u=e/l,f=[],p=[],M=[],x=[];for(let g=0;g<c;g++){let y=g*u-o;for(let w=0;w<h;w++){let _=w*d-r;p.push(_,-y,0),M.push(0,0,1),x.push(w/a),x.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let w=y+h*g,_=y+h*(g+1),S=y+1+h*(g+1),b=y+1+h*g;f.push(w,_,b),f.push(_,S,b)}this.setIndex(f),this.setAttribute("position",new Ot(p,3)),this.setAttribute("normal",new Ot(M,3)),this.setAttribute("uv",new Ot(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},si=class i extends oe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],h=[],c=[],d=t,u=(e-t)/s,f=new H,p=new Dt;for(let M=0;M<=s;M++){for(let x=0;x<=n;x++){let g=r+x/n*o;f.x=d*Math.cos(g),f.y=d*Math.sin(g),l.push(f.x,f.y,f.z),h.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,c.push(p.x,p.y)}d+=u}for(let M=0;M<s;M++){let x=M*(n+1);for(let g=0;g<n;g++){let y=g+x,w=y,_=y+n+1,S=y+n+2,b=y+1;a.push(w,_,b),a.push(_,S,b)}}this.setIndex(a),this.setAttribute("position",new Ot(l,3)),this.setAttribute("normal",new Ot(h,3)),this.setAttribute("uv",new Ot(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var pe=class i extends oe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),h=0,c=[],d=new H,u=new H,f=[],p=[],M=[],x=[];for(let g=0;g<=n;g++){let y=[],w=g/n,_=o+w*a,S=t*Math.cos(_),b=Math.sqrt(t*t-S*S),m=0;g===0&&o===0?m=.5/e:g===n&&l===Math.PI&&(m=-.5/e);for(let v=0;v<=e;v++){let U=v/e,E=s+U*r;d.x=-b*Math.cos(E),d.y=S,d.z=b*Math.sin(E),p.push(d.x,d.y,d.z),u.copy(d).normalize(),M.push(u.x,u.y,u.z),x.push(U+m,1-w),y.push(h++)}c.push(y)}for(let g=0;g<n;g++)for(let y=0;y<e;y++){let w=c[g][y+1],_=c[g][y],S=c[g+1][y],b=c[g+1][y+1];(g!==0||o>0)&&f.push(w,_,b),(g!==n-1||l<Math.PI)&&f.push(_,S,b)}this.setIndex(f),this.setAttribute("position",new Ot(p,3)),this.setAttribute("normal",new Ot(M,3)),this.setAttribute("uv",new Ot(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var vn=class i extends oe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],h=[],c=[],d=[],u=new H,f=new H,p=new H;for(let M=0;M<=n;M++){let x=o+M/n*a;for(let g=0;g<=s;g++){let y=g/s*r;f.x=(t+e*Math.cos(x))*Math.cos(y),f.y=(t+e*Math.cos(x))*Math.sin(y),f.z=e*Math.sin(x),h.push(f.x,f.y,f.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),p.subVectors(f,u).normalize(),c.push(p.x,p.y,p.z),d.push(g/s),d.push(M/n)}}for(let M=1;M<=n;M++)for(let x=1;x<=s;x++){let g=(s+1)*M+x-1,y=(s+1)*(M-1)+x-1,w=(s+1)*(M-1)+x,_=(s+1)*M+x;l.push(g,y,_),l.push(y,w,_)}this.setIndex(l),this.setAttribute("position",new Ot(h,3)),this.setAttribute("normal",new Ot(c,3)),this.setAttribute("uv",new Ot(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var vr=class i extends oe{constructor(t=new Zi(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new H,l=new H,h=new Dt,c=new H,d=[],u=[],f=[],p=[];M(),this.setIndex(p),this.setAttribute("position",new Ot(d,3)),this.setAttribute("normal",new Ot(u,3)),this.setAttribute("uv",new Ot(f,2));function M(){for(let w=0;w<e;w++)x(w);x(r===!1?e:0),y(),g()}function x(w){c=t.getPointAt(w/e,c);let _=o.normals[w],S=o.binormals[w];for(let b=0;b<=s;b++){let m=b/s*Math.PI*2,v=Math.sin(m),U=-Math.cos(m);l.x=U*_.x+v*S.x,l.y=U*_.y+v*S.y,l.z=U*_.z+v*S.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=c.x+n*l.x,a.y=c.y+n*l.y,a.z=c.z+n*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let w=1;w<=e;w++)for(let _=1;_<=s;_++){let S=(s+1)*(w-1)+(_-1),b=(s+1)*w+(_-1),m=(s+1)*w+_,v=(s+1)*(w-1)+_;p.push(S,b,v),p.push(b,m,v)}}function y(){for(let w=0;w<=e;w++)for(let _=0;_<=s;_++)h.x=w/e,h.y=_/s,f.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Zp[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function $i(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(lu(s))s.isRenderTargetTexture?(Kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(lu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function an(i){let t={};for(let e=0;e<i.length;e++){let n=$i(i[e]);for(let s in n)t[s]=n[s]}return t}function lu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Yp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Vc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}var ci={clone:$i,merge:an},Xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ye=class extends Rn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xp,this.fragmentShader=Jp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$i(t.uniforms),this.uniformsGroups=Yp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Mt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Dt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new H().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ae().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ie().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Xt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Es=class extends Ye{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ce=class extends Rn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Us,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var $e=class extends Rn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Mt(16777215),this.specular=new Mt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Us,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=Ir,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Xi=class extends Rn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Us,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=Ir,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ca=class extends Rn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ha=class extends Rn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function fs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function No(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ti=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ua=class extends Ti{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fc,endingEnd:fc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case pc:r=t,a=2*e-n;break;case mc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case pc:o=t,l=2*n-e;break;case mc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let h=(n-e)*.5,c=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(l-n),this._offsetPrev=r*c,this._offsetNext=o*c}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,c=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),M=p*p,x=M*p,g=-u*x+2*u*M-u*p,y=(1+u)*x+(-1.5-2*u)*M+(-.5+u)*p+1,w=(-1-f)*x+(1.5+f)*M+.5*p,_=f*x-f*M;for(let S=0;S!==a;++S)r[S]=g*o[c+S]+y*o[h+S]+w*o[l+S]+_*o[d+S];return r}},da=class extends Ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,c=(n-e)/(s-e),d=1-c;for(let u=0;u!==a;++u)r[u]=o[h+u]*d+o[l+u]*c;return r}},fa=class extends Ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},pa=class extends Ti{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,c=this.inTangents,d=this.outTangents;if(!c||!d){let p=(n-e)/(s-e),M=1-p;for(let x=0;x!==a;++x)r[x]=o[h+x]*M+o[l+x]*p;return r}let u=a*2,f=t-1;for(let p=0;p!==a;++p){let M=o[h+p],x=o[l+p],g=f*u+p*2,y=d[g],w=d[g+1],_=t*u+p*2,S=c[_],b=c[_+1],m=jp(n,e,y,S,s);r[p]=td(m,M,w,b,x)}return r}};function td(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function qp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function jp(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=td(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=qp(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Sn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=fs(e,this.TimeBufferType),this.values=fs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:fs(t.times,Array),values:fs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),No(t.settings)&&(n.settings={inTangents:fs(t.settings.inTangents,Array),outTangents:fs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new fa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new pa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ir:e=this.InterpolantFactoryMethodDiscrete;break;case Yo:e=this.InterpolantFactoryMethodLinear;break;case Lo:e=this.InterpolantFactoryMethodSmooth;break;case dc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Kt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ir;case this.InterpolantFactoryMethodLinear:return Yo;case this.InterpolantFactoryMethodSmooth:return Lo;case this.InterpolantFactoryMethodBezier:return dc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;No(this.settings)&&(cu(this.settings.inTangents,t),cu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;No(this.settings)&&(hu(this.settings.inTangents,t),hu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ne("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ne("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ne("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ne("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&mp(s))for(let a=0,l=s.length;a!==l;++a){let h=s[a];if(isNaN(h)){ne("KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Lo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,h=t[a],c=t[a+1];if(h!==c&&(a!==1||h!==t[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let M=e[d+p];if(M!==e[u+p]||M!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,h=0;h!==n;++h)e[l+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,No(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function cu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function hu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=Yo;var Ai=class extends Sn{constructor(t,e,n){super(t,e,n)}};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=ir;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var ma=class extends Sn{constructor(t,e,n,s){super(t,e,n,s)}};ma.prototype.ValueTypeName="color";var ga=class extends Sn{constructor(t,e,n,s){super(t,e,n,s)}};ga.prototype.ValueTypeName="number";var xa=class extends Ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),h=t*a;for(let c=h+a;h!==c;h+=4)Le.slerpFlat(r,0,o,h-a,o,h,l);return r}},Sr=class extends Sn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new xa(this.times,this.values,this.getValueSize(),t)}};Sr.prototype.ValueTypeName="quaternion";Sr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends Sn{constructor(t,e,n){super(t,e,n)}};Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=ir;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var _a=class extends Sn{constructor(t,e,n,s){super(t,e,n,s)}};_a.prototype.ValueTypeName="vector";var ya=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(c){a++,r===!1&&s.onStart!==void 0&&s.onStart(c,o,a),r=!0},this.itemEnd=function(c){o++,s.onProgress!==void 0&&s.onProgress(c,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return h.push(c,d),this},this.removeHandler=function(c){let d=h.indexOf(c);return d!==-1&&h.splice(d,2),this},this.getHandler=function(c){for(let d=0,u=h.length;d<u;d+=2){let f=h[d],p=h[d+1];if(f.global&&(f.lastIndex=0),f.test(c))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ed=new ya,Ma=class{constructor(t){this.manager=t!==void 0?t:ed,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ma.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ts=class extends Ke{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var uc=new Xt,uu=new H,du=new H,br=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wi,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;uu.setFromMatrixPosition(t.matrixWorld),e.position.copy(uu),du.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(du),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){uc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(uc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===ys||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+h,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+h,0,0,.5,.5,0,0,0,1),e.multiply(uc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Fo=new H,Do=new Le,kn=new H,wr=class extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Fo,Do,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fo,Do,kn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Fo,Do,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fo,Do,kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Si=new H,fu=new Dt,pu=new Dt,on=class extends wr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Vl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xo*2*Math.atan(Math.tan(Vl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Si.x,Si.y).multiplyScalar(-t/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-t/Si.z)}getViewSize(t,e){return this.getViewBounds(t,fu,pu),e.subVectors(pu,fu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Vl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/h,s*=o.width/l,n*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var xc=class extends br{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0}},Er=class extends Ts{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new xc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ji=class extends wr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},_c=class extends br{constructor(){super(new Ji(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Tr=class extends Ts{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.shadow=new _c}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Ar=class extends Ts{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var ps=-90,ms=1,As=class extends Ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new on(ps,ms,t,e);s.layers=this.layers,this.add(s);let r=new on(ps,ms,t,e);r.layers=this.layers,this.add(r);let o=new on(ps,ms,t,e);o.layers=this.layers,this.add(o);let a=new on(ps,ms,t,e);a.layers=this.layers,this.add(a);let l=new on(ps,ms,t,e);l.layers=this.layers,this.add(l);let h=new on(ps,ms,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let h of e)this.remove(h);if(t===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,h,c]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.mipmapsAutoUpdate=M,t.setRenderTarget(n,5,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},va=class extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},Rr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Qp.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Qp(){this._document.hidden===!1&&this.reset()}var zc="\\[\\]\\.:\\/",Kp=new RegExp("["+zc+"]","g"),Gc="[^"+zc+"]",$p="[^"+zc.replace("\\.","")+"]",tm=/((?:WC+[\/:])*)/.source.replace("WC",Gc),em=/(WCOD+)?/.source.replace("WCOD",$p),nm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gc),im=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gc),sm=new RegExp("^"+tm+em+nm+im+"$"),rm=["material","materials","bones","map"],yc=class{constructor(t,e,n){let s=n||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Te=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Kp,"")}static parseTrackName(t){let e=sm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);rm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=e.nodeName;ne("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Te.Composite=yc;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Zy=new Float32Array(1);var Mc=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function Hc(i,t,e,n){let s=om(n);switch(e){case Pc:return i*t;case Ra:return i*t/s.components*s.byteLength;case Ca:return i*t/s.components*s.byteLength;case Ii:return i*t*2/s.components*s.byteLength;case Ia:return i*t*2/s.components*s.byteLength;case Uc:return i*t*3/s.components*s.byteLength;case Bn:return i*t*4/s.components*s.byteLength;case Pa:return i*t*4/s.components*s.byteLength;case kr:case Or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vr:case zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Na:case Da:return Math.max(i,16)*Math.max(t,8)/4;case Ua:case Fa:return Math.max(i,8)*Math.max(t,8)/2;case La:case Ba:case Oa:case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ka:case Gr:case za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case qa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case $a:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case tl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case el:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case nl:case il:case sl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case rl:case ol:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Hr:case al:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function om(i){switch(i){case xn:case Ac:return{byteLength:1,components:1};case Ps:case Rc:case tn:return{byteLength:2,components:1};case Ta:case Aa:return{byteLength:2,components:4};case Ln:case Ea:case In:return{byteLength:4,components:1};case Cc:case Ic:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function bd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function lm(i){let t=new WeakMap;function e(a,l){let h=a.array,c=a.usage,d=h.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,h,c),a.onUploadCallback();let f;if(h instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)f=i.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=i.SHORT;else if(h instanceof Uint32Array)f=i.UNSIGNED_INT;else if(h instanceof Int32Array)f=i.INT;else if(h instanceof Int8Array)f=i.BYTE;else if(h instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,h){let c=l.array,d=l.updateRanges;if(i.bindBuffer(h,a),d.length===0)i.bufferSubData(h,0,c);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],M=d[f];M.start<=p.start+p.count+1?p.count=Math.max(p.count,M.start+M.count-p.start):(++u,d[u]=M)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let M=d[f];i.bufferSubData(h,M.start*c.BYTES_PER_ELEMENT,c,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}var cm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hm=`#ifdef USE_ALPHAHASH
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
#endif`,um=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mm=`#ifdef USE_AOMAP
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
#endif`,gm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xm=`#ifdef USE_BATCHING
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
#endif`,_m=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ym=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sm=`#ifdef USE_IRIDESCENCE
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
#endif`,bm=`#ifdef USE_BUMPMAP
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
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Im=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Um=`#define PI 3.141592653589793
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
} // validated`,Nm=`vec3 transformedNormal = objectNormal;
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
#endif`,Fm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,km="gl_FragColor = linearToOutputTexel( gl_FragColor );",Om=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vm=`#ifdef USE_ENVMAP
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
#endif`,zm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Hm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wm=`#ifdef USE_ENVMAP
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
#endif`,Zm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ym=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qm=`#ifdef USE_GRADIENTMAP
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
}`,jm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$m=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,tg=`#ifdef USE_ENVMAP
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
#endif`,eg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ig=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rg=`PhysicalMaterial material;
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
#endif`,og=`uniform sampler2D dfgLUT;
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
}`,ag=`
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
#endif`,lg=`#if defined( RE_IndirectDiffuse )
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
#endif`,cg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hg=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,ug=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_g=`#if defined( USE_POINTS_UV )
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
#endif`,yg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sg=`#if defined( USE_MORPHCOLORS )
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
#endif`,bg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wg=`#ifdef USE_MORPHTARGETS
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
#endif`,Eg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ag=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ig=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Pg=`#ifdef USE_NORMALMAP
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
#endif`,Ug=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ng=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Og=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xg=`float getShadowMask() {
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
}`,Jg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qg=`#ifdef USE_SKINNING
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
#endif`,jg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qg=`#ifdef USE_SKINNING
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
#endif`,Kg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$g=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,n0=`#ifdef USE_TRANSMISSION
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
#endif`,i0=`#ifdef USE_TRANSMISSION
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
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,l0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,c0=`uniform sampler2D t2D;
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
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u0=`uniform float backgroundBlurriness;
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
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p0=`#include <common>
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
}`,m0=`#if DEPTH_PACKING == 3200
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
}`,g0=`#define DISTANCE
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
}`,x0=`#define DISTANCE
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
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M0=`uniform float scale;
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
}`,v0=`uniform vec3 diffuse;
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
}`,S0=`#include <common>
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
}`,b0=`uniform vec3 diffuse;
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
}`,w0=`#define LAMBERT
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
}`,E0=`#define LAMBERT
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
}`,T0=`#define MATCAP
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
}`,A0=`#define MATCAP
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
}`,R0=`#define NORMAL
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
}`,C0=`#define NORMAL
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
}`,I0=`#define PHONG
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
}`,P0=`#define PHONG
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
}`,U0=`#define STANDARD
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
}`,N0=`#define STANDARD
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
}`,F0=`#define TOON
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
}`,D0=`#define TOON
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
}`,L0=`uniform float size;
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
}`,B0=`uniform vec3 diffuse;
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
}`,k0=`#include <common>
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
}`,O0=`uniform vec3 color;
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
}`,V0=`uniform float rotation;
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
}`,z0=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:cm,alphahash_pars_fragment:hm,alphamap_fragment:um,alphamap_pars_fragment:dm,alphatest_fragment:fm,alphatest_pars_fragment:pm,aomap_fragment:mm,aomap_pars_fragment:gm,batching_pars_vertex:xm,batching_vertex:_m,begin_vertex:ym,beginnormal_vertex:Mm,bsdfs:vm,iridescence_fragment:Sm,bumpmap_pars_fragment:bm,clipping_planes_fragment:wm,clipping_planes_pars_fragment:Em,clipping_planes_pars_vertex:Tm,clipping_planes_vertex:Am,color_fragment:Rm,color_pars_fragment:Cm,color_pars_vertex:Im,color_vertex:Pm,common:Um,defaultnormal_vertex:Nm,displacementmap_pars_vertex:Fm,displacementmap_vertex:Dm,emissivemap_fragment:Lm,emissivemap_pars_fragment:Bm,colorspace_fragment:km,colorspace_pars_fragment:Om,envmap_fragment:Vm,envmap_common_pars_fragment:zm,envmap_pars_fragment:Gm,envmap_pars_vertex:Hm,envmap_physical_pars_fragment:tg,envmap_vertex:Wm,fog_vertex:Zm,fog_pars_vertex:Ym,fog_fragment:Xm,fog_pars_fragment:Jm,gradientmap_pars_fragment:qm,lightmap_pars_fragment:jm,lights_lambert_fragment:Qm,lights_lambert_pars_fragment:Km,lights_pars_begin:$m,lights_toon_fragment:eg,lights_toon_pars_fragment:ng,lights_phong_fragment:ig,lights_phong_pars_fragment:sg,lights_physical_fragment:rg,lights_physical_pars_fragment:og,lights_fragment_begin:ag,lights_fragment_maps:lg,lights_fragment_end:cg,lightprobes_pars_fragment:hg,logdepthbuf_fragment:ug,logdepthbuf_pars_fragment:dg,logdepthbuf_pars_vertex:fg,logdepthbuf_vertex:pg,map_fragment:mg,map_pars_fragment:gg,map_particle_fragment:xg,map_particle_pars_fragment:_g,metalnessmap_fragment:yg,metalnessmap_pars_fragment:Mg,morphinstance_vertex:vg,morphcolor_vertex:Sg,morphnormal_vertex:bg,morphtarget_pars_vertex:wg,morphtarget_vertex:Eg,normal_fragment_begin:Tg,normal_fragment_maps:Ag,normal_pars_fragment:Rg,normal_pars_vertex:Cg,normal_vertex:Ig,normalmap_pars_fragment:Pg,clearcoat_normal_fragment_begin:Ug,clearcoat_normal_fragment_maps:Ng,clearcoat_pars_fragment:Fg,iridescence_pars_fragment:Dg,opaque_fragment:Lg,packing:Bg,premultiplied_alpha_fragment:kg,project_vertex:Og,dithering_fragment:Vg,dithering_pars_fragment:zg,roughnessmap_fragment:Gg,roughnessmap_pars_fragment:Hg,shadowmap_pars_fragment:Wg,shadowmap_pars_vertex:Zg,shadowmap_vertex:Yg,shadowmask_pars_fragment:Xg,skinbase_vertex:Jg,skinning_pars_vertex:qg,skinning_vertex:jg,skinnormal_vertex:Qg,specularmap_fragment:Kg,specularmap_pars_fragment:$g,tonemapping_fragment:t0,tonemapping_pars_fragment:e0,transmission_fragment:n0,transmission_pars_fragment:i0,uv_pars_fragment:s0,uv_pars_vertex:r0,uv_vertex:o0,worldpos_vertex:a0,background_vert:l0,background_frag:c0,backgroundCube_vert:h0,backgroundCube_frag:u0,cube_vert:d0,cube_frag:f0,depth_vert:p0,depth_frag:m0,distance_vert:g0,distance_frag:x0,equirect_vert:_0,equirect_frag:y0,linedashed_vert:M0,linedashed_frag:v0,meshbasic_vert:S0,meshbasic_frag:b0,meshlambert_vert:w0,meshlambert_frag:E0,meshmatcap_vert:T0,meshmatcap_frag:A0,meshnormal_vert:R0,meshnormal_frag:C0,meshphong_vert:I0,meshphong_frag:P0,meshphysical_vert:U0,meshphysical_frag:N0,meshtoon_vert:F0,meshtoon_frag:D0,points_vert:L0,points_frag:B0,shadow_vert:k0,shadow_frag:O0,sprite_vert:V0,sprite_frag:z0},Lt={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},Zn={basic:{uniforms:an([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:an([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Mt(0)},envMapIntensity:{value:1}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:an([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:an([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:an([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Mt(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:an([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:an([Lt.points,Lt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:an([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:an([Lt.common,Lt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:an([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:an([Lt.sprite,Lt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distance:{uniforms:an([Lt.common,Lt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distance_vert,fragmentShader:le.distance_frag},shadow:{uniforms:an([Lt.lights,Lt.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Zn.physical={uniforms:an([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ie},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};var ll={r:0,b:0,g:0},G0=new Xt,wd=new ie;wd.set(-1,0,0,0,1,0,0,0,1);function H0(i,t,e,n,s,r){let o=new Mt(0),a=s===!0?0:1,l,h,c=null,d=0,u=null;function f(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){let _=y.backgroundBlurriness>0;w=t.get(w,_)}return w}function p(y){let w=!1,_=f(y);_===null?x(o,a):_&&_.isColor&&(x(_,1),w=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(y,w){let _=f(w);_&&_.isCubeTexture?(h===void 0&&(h=new te(new Ie(1,1,1),new Ye({name:"BackgroundCubeMaterial",uniforms:$i(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,b,m){this.matrixWorld.copyPosition(m.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(G0.makeRotationFromEuler(w.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(wd),h.material.toneMapped=ce.getTransfer(_.colorSpace)!==_e,(c!==_||d!==_.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,c=_,d=_.version,u=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new te(new Yi(2,2),new Ye({name:"BackgroundMaterial",uniforms:$i(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ce.getTransfer(_.colorSpace)!==_e,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(c!==_||d!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,c=_,d=_.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function x(y,w){y.getRGB(ll,Vc(i)),e.buffers.color.setClear(ll.r,ll.g,ll.b,w,r)}function g(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,w=1){o.set(y),a=w,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,x(o,a)},render:p,addToRenderList:M,dispose:g}}function W0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(P,F,L,R,V){let z=!1,X=d(P,R,L,F);r!==X&&(r=X,h(r.object)),z=f(P,R,L,V),z&&p(P,R,L,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,_(P,F,L,R),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function h(P){return i.bindVertexArray(P)}function c(P){return i.deleteVertexArray(P)}function d(P,F,L,R){let V=R.wireframe===!0,z=n[F.id];z===void 0&&(z={},n[F.id]=z);let X=P.isInstancedMesh===!0?P.id:0,G=z[X];G===void 0&&(G={},z[X]=G);let W=G[L.id];W===void 0&&(W={},G[L.id]=W);let tt=W[V];return tt===void 0&&(tt=u(l()),W[V]=tt),tt}function u(P){let F=[],L=[],R=[];for(let V=0;V<e;V++)F[V]=0,L[V]=0,R[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:L,attributeDivisors:R,object:P,attributes:{},index:null}}function f(P,F,L,R){let V=r.attributes,z=F.attributes,X=0,G=L.getAttributes();for(let W in G)if(G[W].location>=0){let st=V[W],O=z[W];if(O===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(O=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(O=P.instanceColor)),st===void 0||st.attribute!==O||O&&st.data!==O.data)return!0;X++}return r.attributesNum!==X||r.index!==R}function p(P,F,L,R){let V={},z=F.attributes,X=0,G=L.getAttributes();for(let W in G)if(G[W].location>=0){let st=z[W];st===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(st=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(st=P.instanceColor));let O={};O.attribute=st,st&&st.data&&(O.data=st.data),V[W]=O,X++}r.attributes=V,r.attributesNum=X,r.index=R}function M(){let P=r.newAttributes;for(let F=0,L=P.length;F<L;F++)P[F]=0}function x(P){g(P,0)}function g(P,F){let L=r.newAttributes,R=r.enabledAttributes,V=r.attributeDivisors;L[P]=1,R[P]===0&&(i.enableVertexAttribArray(P),R[P]=1),V[P]!==F&&(i.vertexAttribDivisor(P,F),V[P]=F)}function y(){let P=r.newAttributes,F=r.enabledAttributes;for(let L=0,R=F.length;L<R;L++)F[L]!==P[L]&&(i.disableVertexAttribArray(L),F[L]=0)}function w(P,F,L,R,V,z,X){X===!0?i.vertexAttribIPointer(P,F,L,V,z):i.vertexAttribPointer(P,F,L,R,V,z)}function _(P,F,L,R){M();let V=R.attributes,z=L.getAttributes(),X=F.defaultAttributeValues;for(let G in z){let W=z[G];if(W.location>=0){let tt=V[G];if(tt===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(tt=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(tt=P.instanceColor)),tt!==void 0){let st=tt.normalized,O=tt.itemSize,at=t.get(tt);if(at===void 0)continue;let K=at.buffer,A=at.type,D=at.bytesPerElement,j=A===i.INT||A===i.UNSIGNED_INT||tt.gpuType===Ea;if(tt.isInterleavedBufferAttribute){let $=tt.data,ut=$.isInterleavedBuffer===!0?$.stride:$.itemSize,ft=tt.offset;if($.isInstancedInterleavedBuffer||$.isInstancedBufferAttribute){for(let ct=0;ct<W.locationSize;ct++)g(W.location+ct,$.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ct=0;ct<W.locationSize;ct++)x(W.location+ct);i.bindBuffer(i.ARRAY_BUFFER,K);for(let ct=0;ct<W.locationSize;ct++)w(W.location+ct,O/W.locationSize,A,st,ut*D,(ft+O/W.locationSize*ct)*D,j)}else{if(tt.isInstancedBufferAttribute){for(let $=0;$<W.locationSize;$++)g(W.location+$,tt.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let $=0;$<W.locationSize;$++)x(W.location+$);i.bindBuffer(i.ARRAY_BUFFER,K);for(let $=0;$<W.locationSize;$++)w(W.location+$,O/W.locationSize,A,st,O*D,O/W.locationSize*$*D,j)}}else if(X!==void 0){let st=X[G];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(W.location,st);break;case 3:i.vertexAttrib3fv(W.location,st);break;case 4:i.vertexAttrib4fv(W.location,st);break;default:i.vertexAttrib1fv(W.location,st)}}}}y()}function S(){U();for(let P in n){let F=n[P];for(let L in F){let R=F[L];for(let V in R){let z=R[V];for(let X in z)c(z[X].object),delete z[X];delete R[V]}}delete n[P]}}function b(P){if(n[P.id]===void 0)return;let F=n[P.id];for(let L in F){let R=F[L];for(let V in R){let z=R[V];for(let X in z)c(z[X].object),delete z[X];delete R[V]}}delete n[P.id]}function m(P){for(let F in n){let L=n[F];for(let R in L){let V=L[R];if(V[P.id]===void 0)continue;let z=V[P.id];for(let X in z)c(z[X].object),delete z[X];delete V[P.id]}}}function v(P){for(let F in n){let L=n[F],R=P.isInstancedMesh===!0?P.id:0,V=L[R];if(V!==void 0){for(let z in V){let X=V[z];for(let G in X)c(X[G].object),delete X[G];delete V[z]}delete L[R],Object.keys(L).length===0&&delete n[F]}}}function U(){E(),o=!0,r!==s&&(r=s,h(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:E,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:m,initAttributes:M,enableAttribute:x,disableUnusedAttributes:y}}function Z0(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,c){c!==0&&(i.drawArraysInstanced(n,l,h,c),e.update(h,n,c))}function a(l,h,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,c);let u=0;for(let f=0;f<c;f++)u+=h[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Y0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let m=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(m.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(m){return!(m!==Bn&&n.convert(m)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(m){let v=m===tn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(m!==xn&&m!==In&&!v&&n.convert(m)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(m){if(m==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";m="mediump"}return m==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",c=l(h);c!==h&&(Kt("WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Kt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:M,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:_,maxSamples:S,samples:b}}function X0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Dn,a=new ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=c(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,M=d.clipIntersection,x=d.clipShadows,g=i.get(d);if(!s||p===null||p.length===0||r&&!x)r?c(null):h();else{let y=r?0:n,w=y*4,_=g.clippingState||null;l.value=_,_=c(p,u,w,f);for(let S=0;S!==w;++S)_[S]=e[S];g.clippingState=_,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(d,u,f,p){let M=d!==null?d.length:0,x=null;if(M!==0){if(x=l.value,p!==!0||x===null){let g=f+M*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(x===null||x.length<g)&&(x=new Float32Array(g));for(let w=0,_=f;w!==M;++w,_+=4)o.copy(d[w]).applyMatrix4(y,a),o.normal.toArray(x,_),x[_+3]=o.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,x}}var Xr=class extends ke{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new xr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ie(5,5,5),r=new Ye({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:ri});r.uniforms.tEquirect.value=e;let o=new te(s,r),a=e.minFilter;return e.minFilter===oi&&(e.minFilter=un),new As(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},nd=256,J0=3,q0=20,Ed=256,Td=16,j0=3,Q0=new H,K0=new Mt,hl=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new As(1,10,null),this._boxMesh=new te(new Ie(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Q0}=r,l=this._renderer;this._setSize(o);let h=this._allocateTarget(),c=this._getSourceTarget(!0);e>0&&(c.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,M=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(t.background=l.getClearColor(K0));let x=new As(n,s,c);return x.position.copy(a),x.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=p,t.background=M,e>0&&(c.texture.mipmapsAutoUpdate=!0,this._blur(h,e)),this._applyPMREM(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(nd,Ku(t))}_fromTexture(t,e){t.mapping===Qi||t.mapping===Is?this._setSize(t.image.length===0?nd:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=id(t,!1,!1),n=Math.log2(t)-J0;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=id(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Qi||t.mapping===Is?(this._cubemapMaterial===null&&(this._cubemapMaterial=rd()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=sd()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=$0(),this._integrationMaterial=tx());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Td);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-j0)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(Ed*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=ex());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function id(i,t,e){return new Xr(i,{minFilter:oi,generateMipmaps:t,type:tn,colorSpace:sr,depthBuffer:e})}function Jr(i,t,e){return new Ye({name:i,uniforms:t,vertexShader:le.cube_vert,fragmentShader:e,side:Ue,blending:ri,depthTest:!1,depthWrite:!1})}function $0(){return Jr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ed}u

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
	`)}function tx(){return Jr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Td}},`

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
	`)}function ex(){return Jr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${q0}
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
	`)}function sd(){return Jr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function rd(){return Jr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function nx(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Sa||f===ba)if(t.has(u)){let p=t.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let M=new Xr(p.height);return M.fromEquirectangularTexture(i,u),t.set(u,M),u.addEventListener("dispose",h),a(M.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,p=f===Sa||f===ba,M=f===Qi||f===Is;if(p||M){let x=e.get(u),g=x!==void 0?x.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new hl(i)),x=p?n.fromEquirectangular(u,x):n.fromCubemap(u,x),x.texture.pmremVersion=u.pmremVersion,e.set(u,x),x.texture;if(x!==void 0)return x.texture;{let y=u.image;return p&&y&&y.height>0||M&&y&&l(y)?(n===null&&(n=new hl(i)),x=p?n.fromEquirectangular(u):n.fromCubemap(u),x.texture.pmremVersion=u.pmremVersion,e.set(u,x),u.addEventListener("dispose",c),x.texture):null}}}return u}function a(u,f){return f===Sa?u.mapping=Qi:f===ba&&(u.mapping=Is),u}function l(u){let f=0,p=6;for(let M=0;M<p;M++)u[M]!==void 0&&f++;return f===p}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function ix(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&tr("WebGLRenderer: "+n+" extension not supported."),s}}}function sx(i,t,e,n){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let x in p.attributes)t.remove(p.attributes[x]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let M=r.get(p);M&&(t.remove(M),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function h(p,M){return s[M.id]!==void 0||(M.addEventListener("dispose",a),s[M.id]=new WeakRef(M),o.register(M,M.id,M),e.memory.geometries++),M}function c(p){let M=p.attributes;for(let x in M)t.update(M[x],i.ARRAY_BUFFER)}function d(p){let M=p.index,x=p.attributes.position,g=0;if(x===void 0)return;let y=M!==null?M.array.length:x.array.length/3-1,w=x.count>=65535?dr:ur,_=new w(Math.ceil(y/3)*6,1),S=_.array;if(M!==null){let m=M.array;g=M.version;for(let v=0,U=0;v<y;v+=3){let E=m[v+0],P=m[v+1],F=m[v+2];S[U++]=E,S[U++]=P,S[U++]=P,S[U++]=F,S[U++]=F,S[U++]=E}}else{g=x.version;for(let m=0,v=0;m<y;m+=3){let U=m+0,E=m+1,P=m+2;S[v++]=U,S[v++]=E,S[v++]=E,S[v++]=P,S[v++]=P,S[v++]=U}}_.version=g;let b=r.get(p);b&&t.remove(b),r.set(p,_)}function u(p){let M=r.get(p);if(M){let x=p.index;x!==null&&M.version<x.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in s){let M=s[p].deref();M!==void 0&&l(M)}}return{get:h,update:c,getWireframeAttribute:u,dispose:f}}function rx(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function h(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function c(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let M=0;for(let x=0;x<f;x++)M+=u[x];e.update(M,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=c}function ox(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ne("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ax(i,t,e){let n=new WeakMap,s=new Ae;function r(o,a,l){let h=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0,u=n.get(a);if(u===void 0||u.count!==d){let U=function(){m.dispose(),n.delete(a),a.removeEventListener("dispose",U)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],w=0;f===!0&&(w=1),p===!0&&(w=2),M===!0&&(w=3);let _=a.attributes.position.count*w,S=1;_>t.maxTextureSize&&(S=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let b=new Float32Array(_*S*4*d),m=new ar(b,_,S,d);m.type=In,m.needsUpdate=!0;let v=w*4;for(let E=0;E<d;E++){let P=x[E],F=g[E],L=y[E],R=_*S*4*E;for(let V=0;V<P.count;V++){let z=V*v;f===!0&&(s.fromBufferAttribute(P,V),b[R+z+0]=s.x,b[R+z+1]=s.y,b[R+z+2]=s.z,b[R+z+3]=0),p===!0&&(s.fromBufferAttribute(F,V),b[R+z+4]=s.x,b[R+z+5]=s.y,b[R+z+6]=s.z,b[R+z+7]=0),M===!0&&(s.fromBufferAttribute(L,V),b[R+z+8]=s.x,b[R+z+9]=s.y,b[R+z+10]=s.z,b[R+z+11]=L.itemSize===4?s.w:1)}}u={count:d,texture:m,size:new Dt(_,S)},n.set(a,u),a.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let M=0;M<h.length;M++)f+=h[M];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function lx(i,t,e,n,s){let r=new WeakMap;function o(h){let c=s.render.frame,d=h.geometry,u=t.get(h,d);if(r.get(u)!==c&&(t.update(u),r.set(u,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==c&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,c))),h.isSkinnedMesh){let f=h.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function a(){r=new WeakMap}function l(h){let c=h.target;c.removeEventListener("dispose",l),n.releaseStatesOfObject(c),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:a}}var cx={[Pr]:"LINEAR_TONE_MAPPING",[Ur]:"REINHARD_TONE_MAPPING",[Nr]:"CINEON_TONE_MAPPING",[ji]:"ACES_FILMIC_TONE_MAPPING",[Dr]:"AGX_TONE_MAPPING",[Lr]:"NEUTRAL_TONE_MAPPING",[Fr]:"CUSTOM_TONE_MAPPING"};function hx(i,t,e,n,s,r){let o=new ke(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,h=null,c=new oe;c.setAttribute("position",new Ot([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ot([0,2,0,0,2,0],2));let d=new Es({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new te(c,d),f=new Ji(-1,1,1,-1,0,1),p=null,M=null,x=!1,g,y=null,w=[],_=!1;this.setSize=function(S,b){o.setSize(S,b),a!==null&&a.setSize(S,b),l!==null&&l.setSize(S,b);for(let m=0;m<w.length;m++){let v=w[m];v.setSize&&v.setSize(S,b)}},this.setEffects=function(S){w=S,_=w.length>0&&w[0].isRenderPass===!0;let b=o.width,m=o.height;w.length>0&&a===null&&(a=new ke(b,m,{type:tn,depthBuffer:!1,stencilBuffer:!1}),l=new ke(b,m,{type:tn,depthBuffer:!1,stencilBuffer:!1}));let v=s===!0&&w.some(U=>U.needsDepthTexture===!0);v!==(o.depthTexture!==null)&&(v===!0&&h===null&&(h=new ni(b,m),r===!0&&(h.format=ai,h.type=Ki)),o.dispose(),o.depthTexture=v?h:null,o.resolveDepthBuffer=v,o.storeMultisampledDepthBuffer=v);for(let U=0;U<w.length;U++){let E=w[U];E.setSize&&E.setSize(b,m),v&&E.needsDepthTexture===!0&&E.setDepthTexture&&E.setDepthTexture(h)}},this.begin=function(S,b){if(x||S.toneMapping===Hn&&w.length===0)return!1;if(y=b,b!==null){let m=b.width,v=b.height;(o.width!==m||o.height!==v)&&this.setSize(m,v)}return _===!1&&S.setRenderTarget(o),g=S.toneMapping,S.toneMapping=Hn,!0},this.hasRenderPass=function(){return _},this.end=function(S,b){S.toneMapping=g,x=!0;let m=o,v=a;for(let U=0;U<w.length;U++){let E=w[U];E.enabled!==!1&&(E.render(S,v,m,b),E.needsSwap!==!1&&(m=v,v=v===a?l:a))}if(p!==S.outputColorSpace||M!==S.toneMapping){p=S.outputColorSpace,M=S.toneMapping,d.defines={},ce.getTransfer(p)===_e&&(d.defines.SRGB_TRANSFER="");let U=cx[M];U&&(d.defines[U]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=m.texture,S.setRenderTarget(y),S.render(u,f),y=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}var Ad=new dn,Rd=new ni(1,1),Cd=new _r(1),Id=new ar,Pd=new jo,Ud=new xr,od=[],ad=[],ld=new Float32Array(16),cd=new Float32Array(9),hd=new Float32Array(4);function Fs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=od[s];if(r===void 0&&(r=new Float32Array(s),od[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function dl(i,t){let e=ad[t];e===void 0&&(e=new Int32Array(t),ad[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ux(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function dx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),Ve(e,t)}}function fx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),Ve(e,t)}}function px(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),Ve(e,t)}}function mx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(Oe(e,n))return;hd.set(n),i.uniformMatrix2fv(this.addr,!1,hd),Ve(e,n)}}function gx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(Oe(e,n))return;cd.set(n),i.uniformMatrix3fv(this.addr,!1,cd),Ve(e,n)}}function xx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(Oe(e,n))return;ld.set(n),i.uniformMatrix4fv(this.addr,!1,ld),Ve(e,n)}}function _x(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function yx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),Ve(e,t)}}function Mx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),Ve(e,t)}}function vx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),Ve(e,t)}}function Sx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function bx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),Ve(e,t)}}function wx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),Ve(e,t)}}function Ex(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),Ve(e,t)}}function fl(i){return i.version===0&&(i.compareFunction=Dc,i.needsUpdate=!0),i}function Tx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=fl(Rd):r=Ad,e.setTexture2D(t||r,s)}function Ax(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Pd,s)}function Rx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=fl(Cd):r=Ud,e.setTextureCube(t||r,s)}function Cx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Id,s)}function Ix(i){switch(i){case 5126:return ux;case 35664:return dx;case 35665:return fx;case 35666:return px;case 35674:return mx;case 35675:return gx;case 35676:return xx;case 5124:case 35670:return _x;case 35667:case 35671:return yx;case 35668:case 35672:return Mx;case 35669:case 35673:return vx;case 5125:return Sx;case 36294:return bx;case 36295:return wx;case 36296:return Ex;case 35678:case 36198:case 36298:case 36306:case 35682:return Tx;case 35679:case 36299:case 36307:return Ax;case 35680:case 36300:case 36308:case 36293:return Rx;case 36289:case 36303:case 36311:case 36292:return Cx}}function Px(i,t){i.uniform1fv(this.addr,t)}function Ux(i,t){let e=Fs(t,this.size,2);i.uniform2fv(this.addr,e)}function Nx(i,t){let e=Fs(t,this.size,3);i.uniform3fv(this.addr,e)}function Fx(i,t){let e=Fs(t,this.size,4);i.uniform4fv(this.addr,e)}function Dx(i,t){let e=Fs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Lx(i,t){let e=Fs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Bx(i,t){let e=Fs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function kx(i,t){i.uniform1iv(this.addr,t)}function Ox(i,t){i.uniform2iv(this.addr,t)}function Vx(i,t){i.uniform3iv(this.addr,t)}function zx(i,t){i.uniform4iv(this.addr,t)}function Gx(i,t){i.uniform1uiv(this.addr,t)}function Hx(i,t){i.uniform2uiv(this.addr,t)}function Wx(i,t){i.uniform3uiv(this.addr,t)}function Zx(i,t){i.uniform4uiv(this.addr,t)}function Yx(i,t,e){let n=this.cache,s=t.length,r=dl(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=fl(Rd):o=Ad;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Xx(i,t,e){let n=this.cache,s=t.length,r=dl(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Pd,r[o])}function Jx(i,t,e){let n=this.cache,s=t.length,r=dl(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=fl(Cd):o=Ud;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function qx(i,t,e){let n=this.cache,s=t.length,r=dl(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Id,r[o])}function jx(i){switch(i){case 5126:return Px;case 35664:return Ux;case 35665:return Nx;case 35666:return Fx;case 35674:return Dx;case 35675:return Lx;case 35676:return Bx;case 5124:case 35670:return kx;case 35667:case 35671:return Ox;case 35668:case 35672:return Vx;case 35669:case 35673:return zx;case 5125:return Gx;case 36294:return Hx;case 36295:return Wx;case 36296:return Zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Yx;case 35679:case 36299:case 36307:return Xx;case 35680:case 36300:case 36308:case 36293:return Jx;case 36289:case 36303:case 36311:case 36292:return qx}}var Yc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ix(e.type)}},Xc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jx(e.type)}},Jc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Wc=/(\w+)(\])?(\[|\.)?/g;function ud(i,t){i.seq.push(t),i.map[t.id]=t}function Qx(i,t,e){let n=i.name,s=n.length;for(Wc.lastIndex=0;;){let r=Wc.exec(n),o=Wc.lastIndex,a=r[1],l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){ud(e,h===void 0?new Yc(a,i,t):new Xc(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Jc(a),ud(e,d)),e=d}}}var Ns=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Qx(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function dd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Kx=37297,$x=0;function t_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var fd=new ie;function e_(i){ce._getMatrix(fd,ce.workingColorSpace,i);let t=`mat3( ${fd.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(i)){case rr:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return Kt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function pd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+t_(i.getShaderSource(t),a)}else return r}function n_(i,t){let e=e_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var i_={[Pr]:"Linear",[Ur]:"Reinhard",[Nr]:"Cineon",[ji]:"ACESFilmic",[Dr]:"AgX",[Lr]:"Neutral",[Fr]:"Custom"};function s_(i,t){let e=i_[t];return e===void 0?(Kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var cl=new H;function r_(){ce.getLuminanceCoefficients(cl);let i=cl.x.toFixed(4),t=cl.y.toFixed(4),e=cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function a_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function l_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Yr(i){return i!==""}function md(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function gd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var c_=/^[ \t]*#include +<([\w\d./]+)>/gm;function qc(i){return i.replace(c_,h_)}function h_(i,t){let e=le[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return qc(e)}var u_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xd(i){return i.replace(u_,d_)}function d_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _d(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var f_={[Cr]:"SHADOWMAP_TYPE_PCF",[Rs]:"SHADOWMAP_TYPE_VSM"};function p_(i){return f_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var m_={[Is]:"ENVMAP_MODE_REFRACTION"};function g_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":m_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var x_={[Ir]:"ENVMAP_BLENDING_MULTIPLY",[Lu]:"ENVMAP_BLENDING_MIX",[Bu]:"ENVMAP_BLENDING_ADD"};function __(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":x_[i.combine]||"ENVMAP_BLENDING_NONE"}function y_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=p_(e),h=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",c=g_(e),d=__(e),u=o_(e),f=a_(r),p=s.createProgram(),M,x,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Yr).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Yr).join(`
`),x.length>0&&(x+=`
`)):(M=[_d(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),x=[_d(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hn?"#define TONE_MAPPING":"",e.toneMapping!==Hn?le.tonemapping_pars_fragment:"",e.toneMapping!==Hn?s_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,n_("linearToOutputTexel",e.outputColorSpace),r_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Yr).join(`
`)),o=qc(o),o=md(o,e),o=gd(o,e),a=qc(a),a=md(a,e),a=gd(a,e),o=xd(o),a=xd(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",e.glslVersion===Lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let y=g+M+o,w=g+x+a,_=dd(s,s.VERTEX_SHADER,y),S=dd(s,s.FRAGMENT_SHADER,w);s.attachShader(p,_),s.attachShader(p,S),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function b(E){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(p)||"",F=s.getShaderInfoLog(_)||"",L=s.getShaderInfoLog(S)||"",R=P.trim(),V=F.trim(),z=L.trim(),X=!0,G=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,_,S);else{let W=pd(s,_,"vertex"),tt=pd(s,S,"fragment");ne("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+R+`
`+W+`
`+tt)}else R!==""?Kt("WebGLProgram: Program Info Log:",R):(V===""||z==="")&&(G=!1);G&&(E.diagnostics={runnable:X,programLog:R,vertexShader:{log:V,prefix:M},fragmentShader:{log:z,prefix:x}})}s.deleteShader(_),s.deleteShader(S),m=new Ns(s,p),v=l_(s,p)}let m;this.getUniforms=function(){return m===void 0&&b(this),m};let v;this.getAttributes=function(){return v===void 0&&b(this),v};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(p,Kx)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$x++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=_,this.fragmentShader=S,this}var M_=0,jc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Qc(t),e.set(t,n)),n}},Qc=class{constructor(t){this.id=M_++,this.code=t,this.usedTimes=0}};function v_(i){return i===Ii||i===Gr||i===Hr}function S_(i,t,e,n,s,r){let o=new lr,a=new jc,l=new Set,h=[],c=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(m){return l.add(m),m===0?"uv":`uv${m}`}function p(m,v,U,E,P,F){let L=E.fog,R=P.geometry,V=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?E.environment:null,z=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,X=t.get(m.envMap||V,z),G=u[m.type],W=n.precision;m.precision!==null&&(W=n.getMaxPrecision(m.precision),W!==m.precision&&Kt("WebGLProgram.getParameters:",m.precision,"not supported, using",W,"instead."));let tt=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,st=tt!==void 0?tt.length:0,O=0;R.morphAttributes.position!==void 0&&(O=1),R.morphAttributes.normal!==void 0&&(O=2),R.morphAttributes.color!==void 0&&(O=3);let at,K,A,D;if(G){let Ft=Zn[G];at=Ft.vertexShader,K=Ft.fragmentShader}else{at=m.vertexShader,K=m.fragmentShader;let Ft=a.getVertexShaderStage(m),ve=a.getFragmentShaderStage(m);a.update(m,Ft,ve),A=Ft.id,D=ve.id}let j=i.getRenderTarget(),$=i.state.buffers.depth.getReversed(),ut=P.isInstancedMesh===!0,ft=P.isBatchedMesh===!0,ct=!!m.map,vt=!!m.matcap,J=!!X,_t=J&&X.isPMREMTexture===!0,St=!!m.aoMap,Ut=!!m.lightMap,qt=!!m.bumpMap&&m.wireframe===!1,Jt=!!m.normalMap,lt=!!m.displacementMap,Nt=!!m.emissiveMap,q=!!m.metalnessMap,Ct=!!m.roughnessMap,Vt=m.anisotropy>0,Z=m.clearcoat>0,jt=m.diffuseRoughness>0,Rt=m.dispersion>0,$t=m.retroreflectivity>0,Et=m.iridescence>0,Me=m.sheen>0,zt=m.transmission>0,pt=Vt&&!!m.anisotropyMap,N=Z&&!!m.clearcoatMap,T=Z&&!!m.clearcoatNormalMap,nt=Z&&!!m.clearcoatRoughnessMap,I=jt&&!!m.diffuseRoughnessMap,et=Et&&!!m.iridescenceMap,xt=Et&&!!m.iridescenceThicknessMap,mt=Me&&!!m.sheenColorMap,B=Me&&!!m.sheenRoughnessMap,Q=!!m.specularMap,gt=!!m.specularColorMap,k=!!m.specularIntensityMap,it=zt&&!!m.transmissionMap,ht=zt&&!!m.thicknessMap,Tt=!!m.gradientMap,bt=!!m.alphaMap,At=m.alphaTest>0,kt=!!m.alphaHash,Qt=!!m.extensions,wt=Hn;m.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(wt=i.toneMapping);let Yt=_t?X.isCompressedCubeTexture?X.image[0].mipmaps:X.mipmaps:null,ae={shaderID:G,shaderType:m.type,shaderName:m.name,vertexShader:at,fragmentShader:K,defines:m.defines,customVertexShaderID:A,customFragmentShaderID:D,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:W,batching:ft,batchingColor:ft&&P._colorsTexture!==null,instancing:ut,instancingColor:ut&&P.instanceColor!==null,instancingMorph:ut&&P.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ce.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:ct,matcap:vt,envMap:J,envMapMode:J&&X.mapping,envMapPMREM:_t,envMapMaxLod:_t?Yt.length-1:null,envMapSize:_t?Yt[0].width:null,aoMap:St,lightMap:Ut,bumpMap:qt,normalMap:Jt,displacementMap:lt,emissiveMap:Nt,normalMapObjectSpace:Jt&&m.normalMapType===Vu,normalMapTangentSpace:Jt&&m.normalMapType===Us,packedNormalMap:Jt&&m.normalMapType===Us&&v_(m.normalMap.format),metalnessMap:q,roughnessMap:Ct,anisotropy:Vt,anisotropyMap:pt,clearcoat:Z,clearcoatMap:N,clearcoatNormalMap:T,clearcoatRoughnessMap:nt,diffuseRoughness:jt,diffuseRoughnessMap:I,dispersion:Rt,retroreflection:$t,iridescence:Et,iridescenceMap:et,iridescenceThicknessMap:xt,sheen:Me,sheenColorMap:mt,sheenRoughnessMap:B,specularMap:Q,specularColorMap:gt,specularIntensityMap:k,transmission:zt,transmissionMap:it,thicknessMap:ht,gradientMap:Tt,opaque:m.transparent===!1&&m.blending===Cs&&m.alphaToCoverage===!1,alphaMap:bt,alphaTest:At,alphaHash:kt,combine:m.combine,mapUv:ct&&f(m.map.channel),aoMapUv:St&&f(m.aoMap.channel),lightMapUv:Ut&&f(m.lightMap.channel),bumpMapUv:qt&&f(m.bumpMap.channel),normalMapUv:Jt&&f(m.normalMap.channel),displacementMapUv:lt&&f(m.displacementMap.channel),emissiveMapUv:Nt&&f(m.emissiveMap.channel),metalnessMapUv:q&&f(m.metalnessMap.channel),roughnessMapUv:Ct&&f(m.roughnessMap.channel),anisotropyMapUv:pt&&f(m.anisotropyMap.channel),clearcoatMapUv:N&&f(m.clearcoatMap.channel),clearcoatNormalMapUv:T&&f(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&f(m.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:I&&f(m.diffuseRoughnessMap.channel),iridescenceMapUv:et&&f(m.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&f(m.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&f(m.sheenColorMap.channel),sheenRoughnessMapUv:B&&f(m.sheenRoughnessMap.channel),specularMapUv:Q&&f(m.specularMap.channel),specularColorMapUv:gt&&f(m.specularColorMap.channel),specularIntensityMapUv:k&&f(m.specularIntensityMap.channel),transmissionMapUv:it&&f(m.transmissionMap.channel),thicknessMapUv:ht&&f(m.thicknessMap.channel),alphaMapUv:bt&&f(m.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(Jt||Vt),vertexNormals:!!R.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!R.attributes.uv&&(ct||bt),fog:!!L,useFog:m.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||R.attributes.normal===void 0&&Jt===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:$,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:O,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:F.filter(Ft=>Ft.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:wt,decodeVideoTexture:ct&&m.map.isVideoTexture===!0&&ce.getTransfer(m.map.colorSpace)===_e,decodeVideoTextureEmissive:Nt&&m.emissiveMap.isVideoTexture===!0&&ce.getTransfer(m.emissiveMap.colorSpace)===_e,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===me,flipSided:m.side===Ue,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:Qt&&m.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qt&&m.extensions.multiDraw===!0||ft)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return ae.vertexUv1s=l.has(1),ae.vertexUv2s=l.has(2),ae.vertexUv3s=l.has(3),l.clear(),ae}function M(m){let v=[];if(m.shaderID?v.push(m.shaderID):(v.push(m.customVertexShaderID),v.push(m.customFragmentShaderID)),m.defines!==void 0)for(let U in m.defines)v.push(U),v.push(m.defines[U]);return m.isRawShaderMaterial===!1&&(x(v,m),g(v,m),v.push(i.outputColorSpace)),v.push(m.customProgramCacheKey),v.join()}function x(m,v){m.push(v.precision),m.push(v.outputColorSpace),m.push(v.envMapMode),m.push(v.envMapPMREM),m.push(v.envMapMaxLod),m.push(v.envMapSize),m.push(v.mapUv),m.push(v.alphaMapUv),m.push(v.lightMapUv),m.push(v.aoMapUv),m.push(v.bumpMapUv),m.push(v.normalMapUv),m.push(v.displacementMapUv),m.push(v.emissiveMapUv),m.push(v.metalnessMapUv),m.push(v.roughnessMapUv),m.push(v.anisotropyMapUv),m.push(v.clearcoatMapUv),m.push(v.clearcoatNormalMapUv),m.push(v.clearcoatRoughnessMapUv),m.push(v.diffuseRoughnessMapUv),m.push(v.iridescenceMapUv),m.push(v.iridescenceThicknessMapUv),m.push(v.sheenColorMapUv),m.push(v.sheenRoughnessMapUv),m.push(v.specularMapUv),m.push(v.specularColorMapUv),m.push(v.specularIntensityMapUv),m.push(v.transmissionMapUv),m.push(v.thicknessMapUv),m.push(v.combine),m.push(v.fogExp2),m.push(v.sizeAttenuation),m.push(v.morphTargetsCount),m.push(v.numSunLights),m.push(v.numDirLights),m.push(v.numPointLights),m.push(v.numSpotLights),m.push(v.numSpotLightMaps),m.push(v.numHemiLights),m.push(v.numRectAreaLights),m.push(v.numSunLightShadows),m.push(v.numDirLightShadows),m.push(v.numPointLightShadows),m.push(v.numSpotLightShadows),m.push(v.numSpotLightShadowsWithMaps),m.push(v.numLightProbes),m.push(v.numLightProbeGrids),m.push(v.shadowMapType),m.push(v.toneMapping),m.push(v.numClippingPlanes),m.push(v.numClipIntersection),m.push(v.depthPacking)}function g(m,v){o.disableAll(),v.instancing&&o.enable(0),v.instancingColor&&o.enable(1),v.instancingMorph&&o.enable(2),v.matcap&&o.enable(3),v.envMap&&o.enable(4),v.normalMapObjectSpace&&o.enable(5),v.normalMapTangentSpace&&o.enable(6),v.clearcoat&&o.enable(7),v.iridescence&&o.enable(8),v.alphaTest&&o.enable(9),v.vertexColors&&o.enable(10),v.vertexAlphas&&o.enable(11),v.vertexUv1s&&o.enable(12),v.vertexUv2s&&o.enable(13),v.vertexUv3s&&o.enable(14),v.vertexTangents&&o.enable(15),v.anisotropy&&o.enable(16),v.alphaHash&&o.enable(17),v.batching&&o.enable(18),v.dispersion&&o.enable(19),v.retroreflection&&o.enable(24),v.diffuseRoughness&&o.enable(25),v.batchingColor&&o.enable(20),v.gradientMap&&o.enable(21),v.packedNormalMap&&o.enable(22),v.vertexNormals&&o.enable(23),m.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),v.numLightProbeGrids>0&&o.enable(22),v.hasPositionAttribute&&o.enable(23),m.push(o.mask)}function y(m){let v=u[m.type],U;if(v){let E=Zn[v];U=ci.clone(E.uniforms)}else U=m.uniforms;return U}function w(m,v){let U=c.get(v);return U!==void 0?++U.usedTimes:(U=new y_(i,v,m,s),h.push(U),c.set(v,U)),U}function _(m){if(--m.usedTimes===0){let v=h.indexOf(m);h[v]=h[h.length-1],h.pop(),c.delete(m.cacheKey),m.destroy()}}function S(m){a.remove(m)}function b(){a.dispose()}return{getParameters:p,getProgramCacheKey:M,getUniforms:y,acquireProgram:w,releaseProgram:_,releaseShaderCache:S,programs:h,dispose:b}}function b_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function w_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function yd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Md(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,M,x,g){let y=i[t];return y===void 0?(y={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:M,renderOrder:u.renderOrder,z:x,group:g},i[t]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=p,y.materialVariant=o(u),y.groupOrder=M,y.renderOrder=u.renderOrder,y.z=x,y.group=g),t++,y}function l(u,f,p,M,x,g,y){y.reversedDepth===!0&&(x=-x);let w=a(u,f,p,M,x,g);p.transmission>0?n.push(w):p.transparent===!0?s.push(w):e.push(w)}function h(u,f,p,M,x,g){let y=a(u,f,p,M,x,g);p.transmission>0?n.unshift(y):p.transparent===!0?s.unshift(y):e.unshift(y)}function c(u,f){e.length>1&&e.sort(u||w_),n.length>1&&n.sort(f||yd),s.length>1&&s.sort(f||yd)}function d(){for(let u=t,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:h,finish:d,sort:c}}function E_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Md,i.set(n,[o])):s>=r.length?(o=new Md,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function T_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new H,color:new Mt};break;case"SpotLight":e={position:new H,direction:new H,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":e={color:new Mt,position:new H,halfWidth:new H,halfHeight:new H};break}return i[t.id]=e,e}}}function A_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var R_=0;function C_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function I_(i){let t=new T_,e=A_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new H);let s=new H,r=new Xt,o=new Xt;function a(h){let c=0,d=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,p=0,M=0,x=0,g=0,y=0,w=0,_=0,S=0,b=0,m=0,v=0,U=0,E=0;h.sort(C_);for(let F=0,L=h.length;F<L;F++){let R=h[F],V=R.color,z=R.intensity,X=R.distance,G=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Ii?G=R.shadow.map.texture:G=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)c+=V.r*z,d+=V.g*z,u+=V.b*z;else if(R.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(R.sh.coefficients[W],z);E++}else if(R.isSunLight){let W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let tt=R.shadow,st=e.get(R);st.shadowIntensity=tt.intensity,st.shadowBias=tt.bias,st.shadowNormalBias=tt.normalBias,st.shadowRadius=tt.radius,st.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),n.sunShadow[p]=st,n.sunShadowMap[p]=G;let O=tt.getViewportCount();for(let at=0;at<O;at++)n.sunShadowMatrix[M+at]=tt.getMatrix(at),n.sunShadowCascade[M+at]=tt._cascadeData[at];M+=O,p++}n.sun[f]=W,f++}else if(R.isDirectionalLight){let W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let tt=R.shadow,st=e.get(R);st.shadowIntensity=tt.intensity,st.shadowBias=tt.bias,st.shadowNormalBias=tt.normalBias,st.shadowRadius=tt.radius,st.shadowMapSize=tt.mapSize,n.directionalShadow[x]=st,n.directionalShadowMap[x]=G,n.directionalShadowMatrix[x]=R.shadow.matrix,S++}n.directional[x]=W,x++}else if(R.isSpotLight){let W=t.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(V).multiplyScalar(z),W.distance=X,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,n.spot[y]=W;let tt=R.shadow;if(R.map&&(n.spotLightMap[v]=R.map,v++,tt.updateMatrices(R),R.castShadow&&U++),n.spotLightMatrix[y]=tt.matrix,R.castShadow){let st=e.get(R);st.shadowIntensity=tt.intensity,st.shadowBias=tt.bias,st.shadowNormalBias=tt.normalBias,st.shadowRadius=tt.radius,st.shadowMapSize=tt.mapSize,n.spotShadow[y]=st,n.spotShadowMap[y]=G,m++}y++}else if(R.isRectAreaLight){let W=t.get(R);W.color.copy(V).multiplyScalar(z),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),n.rectArea[w]=W,w++}else if(R.isPointLight){let W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){let tt=R.shadow,st=e.get(R);st.shadowIntensity=tt.intensity,st.shadowBias=tt.bias,st.shadowNormalBias=tt.normalBias,st.shadowRadius=tt.radius,st.shadowMapSize=tt.mapSize,st.shadowCameraNear=tt.camera.near,st.shadowCameraFar=tt.camera.far,n.pointShadow[g]=st,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=R.shadow.matrix,b++}n.point[g]=W,g++}else if(R.isHemisphereLight){let W=t.get(R);W.skyColor.copy(R.color).multiplyScalar(z),W.groundColor.copy(R.groundColor).multiplyScalar(z),n.hemi[_]=W,_++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_FLOAT_1,n.rectAreaLTC2=Lt.LTC_FLOAT_2):(n.rectAreaLTC1=Lt.LTC_HALF_1,n.rectAreaLTC2=Lt.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=d,n.ambient[2]=u;let P=n.hash;(P.sunLength!==f||P.directionalLength!==x||P.pointLength!==g||P.spotLength!==y||P.rectAreaLength!==w||P.hemiLength!==_||P.numSunShadows!==p||P.numDirectionalShadows!==S||P.numPointShadows!==b||P.numSpotShadows!==m||P.numSpotMaps!==v||P.numLightProbes!==E)&&(n.sun.length=f,n.directional.length=x,n.spot.length=y,n.rectArea.length=w,n.point.length=g,n.hemi.length=_,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=m,n.spotShadowMap.length=m,n.spotLightMatrix.length=m+v-U,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=E,P.sunLength=f,P.directionalLength=x,P.pointLength=g,P.spotLength=y,P.rectAreaLength=w,P.hemiLength=_,P.numSunShadows=p,P.numDirectionalShadows=S,P.numPointShadows=b,P.numSpotShadows=m,P.numSpotMaps=v,P.numLightProbes=E,n.version=R_++)}function l(h,c){let d=0,u=0,f=0,p=0,M=0,x=0,g=c.matrixWorldInverse;for(let y=0,w=h.length;y<w;y++){let _=h[y];if(_.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(g),d++}else if(_.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),u++}else if(_.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),p++}else if(_.isRectAreaLight){let S=n.rectArea[M];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),M++}else if(_.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){let S=n.hemi[x];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function vd(i){let t=new I_(i),e=[],n=[],s=[];function r(d){c.camera=d,e.length=0,n.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function h(d){t.setupView(e,d)}let c={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:c,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a}}function P_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new vd(i),t.set(s,[a])):r>=o.length?(a=new vd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var U_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N_=`uniform sampler2D shadow_pass;
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
}`,F_=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],D_=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Sd=new Xt,Zr=new H,Zc=new H;function L_(i,t,e){let n=new wi,s=new Dt,r=new Dt,o=new Ae,a=new ca,l=new ha,h={},c=e.maxTextureSize,d={[Ci]:Ue,[Ue]:Ci,[me]:me},u=new Ye({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:U_,fragmentShader:N_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new oe;p.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new te(p,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cr;let g=this.type;this.render=function(b,m,v){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||b.length===0)return;this.type===xu&&(Kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Cr);let U=i.getRenderTarget(),E=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),F=i.state;F.setBlending(ri),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let L=g!==this.type;L&&m.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(V=>V.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,V=b.length;R<V;R++){let z=b[R],X=z.shadow;if(X===void 0){Kt("WebGLShadowMap:",z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let G=X.getFrameExtents();s.multiply(G),r.copy(X.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/G.x),s.x=r.x*G.x,X.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/G.y),s.y=r.y*G.y,X.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=W,X.map===null||L===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Rs){if(z.isPointLight){Kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new ke(s.x,s.y,{format:Ii,type:tn,minFilter:un,magFilter:un,generateMipmaps:!1}),X.map.texture.name=z.name+".shadowMap",X.map.depthTexture=new ni(s.x,s.y,In),X.map.depthTexture.name=z.name+".shadowMapDepth",X.map.depthTexture.format=ei,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=De,X.map.depthTexture.magFilter=De}else z.isPointLight?(X.map=new Xr(s.x),X.map.depthTexture=new _r(s.x,Ln)):(X.map=new ke(s.x,s.y),X.map.depthTexture=new ni(s.x,s.y,Ln)),X.map.depthTexture.name=z.name+".shadowMap",X.map.depthTexture.format=ei,this.type===Cr?(X.map.depthTexture.compareFunction=W?Fc:Nc,X.map.depthTexture.minFilter=un,X.map.depthTexture.magFilter=un):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=De,X.map.depthTexture.magFilter=De);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let tt=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();z.isPointLight!==!0&&X.updateMatrices(z,v);let st=(X.camera.layers.mask&4294967294)!==0?X.camera.layers:v.layers;for(let O=0;O<tt;O++){let at=X.getCamera(O);if(z.isPointLight){let K=X.camera,A=X.matrix,D=z.distance||K.far;D!==K.far&&(K.far=D,K.updateProjectionMatrix()),Zr.setFromMatrixPosition(z.matrixWorld),K.position.copy(Zr),Zc.copy(K.position),Zc.add(F_[O]),K.up.copy(D_[O]),K.lookAt(Zc),K.updateMatrixWorld(),A.makeTranslation(-Zr.x,-Zr.y,-Zr.z),Sd.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Sd,K.coordinateSystem,K.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,O),i.clear();else{O===0&&(i.setRenderTarget(X.map),i.clear());let K=X.getViewport(O);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),F.viewport(o)}n=X.getFrustum(O),_(m,v,at,z,st,this.type)}X.isPointLightShadow!==!0&&this.type===Rs&&y(X,v),X.needsUpdate=!1}g=this.type,x.needsUpdate=!1,i.setRenderTarget(U,E,P)};function y(b,m){let v=t.update(M);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new ke(s.x,s.y,{format:Ii,type:tn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(m,null,v,u,M,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(m,null,v,f,M,null)}function w(b,m,v,U){let E=null,P=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)E=P;else if(E=v.isPointLight===!0?l:a,i.localClippingEnabled&&m.clipShadows===!0&&Array.isArray(m.clippingPlanes)&&m.clippingPlanes.length!==0||m.displacementMap&&m.displacementScale!==0||m.alphaMap&&m.alphaTest>0||m.map&&m.alphaTest>0||m.alphaToCoverage===!0){let F=E.uuid,L=m.uuid,R=h[F];R===void 0&&(R={},h[F]=R);let V=R[L];V===void 0&&(V=E.clone(),R[L]=V,m.addEventListener("dispose",S)),E=V}if(E.visible=m.visible,E.wireframe=m.wireframe,U===Rs?E.side=m.shadowSide!==null?m.shadowSide:m.side:E.side=m.shadowSide!==null?m.shadowSide:d[m.side],E.alphaMap=m.alphaMap,E.alphaTest=m.alphaToCoverage===!0?.5:m.alphaTest,E.map=m.map,E.clipShadows=m.clipShadows,E.clippingPlanes=m.clippingPlanes,E.clipIntersection=m.clipIntersection,E.displacementMap=m.displacementMap,E.displacementScale=m.displacementScale,E.displacementBias=m.displacementBias,E.wireframeLinewidth=m.wireframeLinewidth,E.linewidth=m.linewidth,v.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let F=i.properties.get(E);F.light=v}return E}function _(b,m,v,U,E,P){if(b.visible===!1)return;if(b.layers.test(E)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===Rs)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);let R=t.update(b),V=b.material;if(Array.isArray(V)){let z=R.groups;for(let X=0,G=z.length;X<G;X++){let W=z[X],tt=V[W.materialIndex];if(tt&&tt.visible){let st=w(b,tt,U,P);b.onBeforeShadow(i,b,m,v,R,st,W),i.renderBufferDirect(v,null,R,st,b,W),b.onAfterShadow(i,b,m,v,R,st,W)}}}else if(V.visible){let z=w(b,V,U,P);b.onBeforeShadow(i,b,m,v,R,z,null),i.renderBufferDirect(v,null,R,z,b,null),b.onAfterShadow(i,b,m,v,R,z,null)}}let L=b.children;for(let R=0,V=L.length;R<V;R++)_(L[R],m,v,U,E,P)}function S(b){b.target.removeEventListener("dispose",S);for(let v in h){let U=h[v],E=b.target.uuid;E in U&&(U[E].dispose(),delete U[E])}}}function B_(i,t){function e(){let k=!1,it=new Ae,ht=null,Tt=new Ae(0,0,0,0);return{setMask:function(bt){ht!==bt&&!k&&(i.colorMask(bt,bt,bt,bt),ht=bt)},setLocked:function(bt){k=bt},setClear:function(bt,At,kt,Qt,wt){wt===!0&&(bt*=Qt,At*=Qt,kt*=Qt),it.set(bt,At,kt,Qt),Tt.equals(it)===!1&&(i.clearColor(bt,At,kt,Qt),Tt.copy(it))},reset:function(){k=!1,ht=null,Tt.set(-1,0,0,0)}}}function n(){let k=!1,it=!1,ht=null,Tt=null,bt=null;return{setReversed:function(At){if(it!==At){let kt=t.get("EXT_clip_control");At?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),it=At;let Qt=bt;bt=null,this.setClear(Qt)}},getReversed:function(){return it},setTest:function(At){At?$(i.DEPTH_TEST):ut(i.DEPTH_TEST)},setMask:function(At){ht!==At&&!k&&(i.depthMask(At),ht=At)},setFunc:function(At){if(it&&(At=Qu[At]),Tt!==At){switch(At){case ko:i.depthFunc(i.NEVER);break;case Oo:i.depthFunc(i.ALWAYS);break;case Vo:i.depthFunc(i.LESS);break;case xs:i.depthFunc(i.LEQUAL);break;case zo:i.depthFunc(i.EQUAL);break;case Go:i.depthFunc(i.GEQUAL);break;case Ho:i.depthFunc(i.GREATER);break;case Wo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=At}},setLocked:function(At){k=At},setClear:function(At){bt!==At&&(bt=At,it&&(At=1-At),i.clearDepth(At))},reset:function(){k=!1,ht=null,Tt=null,bt=null,it=!1}}}function s(){let k=!1,it=null,ht=null,Tt=null,bt=null,At=null,kt=null,Qt=null,wt=null;return{setTest:function(Yt){k||(Yt?$(i.STENCIL_TEST):ut(i.STENCIL_TEST))},setMask:function(Yt){it!==Yt&&!k&&(i.stencilMask(Yt),it=Yt)},setFunc:function(Yt,ae,Ft){(ht!==Yt||Tt!==ae||bt!==Ft)&&(i.stencilFunc(Yt,ae,Ft),ht=Yt,Tt=ae,bt=Ft)},setOp:function(Yt,ae,Ft){(At!==Yt||kt!==ae||Qt!==Ft)&&(i.stencilOp(Yt,ae,Ft),At=Yt,kt=ae,Qt=Ft)},setLocked:function(Yt){k=Yt},setClear:function(Yt){wt!==Yt&&(i.clearStencil(Yt),wt=Yt)},reset:function(){k=!1,it=null,ht=null,Tt=null,bt=null,At=null,kt=null,Qt=null,wt=null}}}let r=new e,o=new n,a=new s,l={},h=new WeakMap,c={},d={},u={},f=new WeakMap,p=[],M=null,x=!1,g=null,y=null,w=null,_=null,S=null,b=null,m=null,v=new Mt(0,0,0),U=0,E=!1,P=null,F=null,L=null,R=null,V=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,G=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(W)[1]),X=G>=1):W.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),X=G>=2);let tt=null,st={},O=i.getParameter(i.SCISSOR_BOX),at=i.getParameter(i.VIEWPORT),K=new Ae().fromArray(O),A=new Ae().fromArray(at);function D(k,it,ht,Tt){let bt=new Uint8Array(4),At=i.createTexture();i.bindTexture(k,At),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<ht;kt++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,bt):i.texImage2D(it+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,bt);return At}let j={};j[i.TEXTURE_2D]=D(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=D(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=D(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=D(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(i.DEPTH_TEST),o.setFunc(xs),qt(!1),Jt(vc),$(i.CULL_FACE),St(ri);function $(k){c[k]!==!0&&(i.enable(k),c[k]=!0)}function ut(k){c[k]!==!1&&(i.disable(k),c[k]=!1)}function ft(k,it){return u[k]!==it?(i.bindFramebuffer(k,it),u[k]=it,k===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=it),k===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=it),!0):!1}function ct(k,it){let ht=p,Tt=!1;if(k){ht=f.get(it),ht===void 0&&(ht=[],f.set(it,ht));let bt=k.textures;if(ht.length!==bt.length||ht[0]!==i.COLOR_ATTACHMENT0){for(let At=0,kt=bt.length;At<kt;At++)ht[At]=i.COLOR_ATTACHMENT0+At;ht.length=bt.length,Tt=!0}}else ht[0]!==i.BACK&&(ht[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(ht)}function vt(k){return M!==k?(i.useProgram(k),M=k,!0):!1}let J={[qi]:i.FUNC_ADD,[yu]:i.FUNC_SUBTRACT,[Mu]:i.FUNC_REVERSE_SUBTRACT};J[vu]=i.MIN,J[Su]=i.MAX;let _t={[bu]:i.ZERO,[wu]:i.ONE,[Eu]:i.SRC_COLOR,[wc]:i.SRC_ALPHA,[Pu]:i.SRC_ALPHA_SATURATE,[Cu]:i.DST_COLOR,[Au]:i.DST_ALPHA,[Tu]:i.ONE_MINUS_SRC_COLOR,[Ec]:i.ONE_MINUS_SRC_ALPHA,[Iu]:i.ONE_MINUS_DST_COLOR,[Ru]:i.ONE_MINUS_DST_ALPHA,[Uu]:i.CONSTANT_COLOR,[Nu]:i.ONE_MINUS_CONSTANT_COLOR,[Fu]:i.CONSTANT_ALPHA,[Du]:i.ONE_MINUS_CONSTANT_ALPHA};function St(k,it,ht,Tt,bt,At,kt,Qt,wt,Yt){if(k===ri){x===!0&&(ut(i.BLEND),x=!1);return}if(x===!1&&($(i.BLEND),x=!0),k!==_u){if(k!==g||Yt!==E){if((y!==qi||S!==qi)&&(i.blendEquation(i.FUNC_ADD),y=qi,S=qi),Yt)switch(k){case Cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pn:i.blendFunc(i.ONE,i.ONE);break;case Sc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ne("WebGLState: Invalid blending: ",k);break}else switch(k){case Cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Sc:ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bc:ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ne("WebGLState: Invalid blending: ",k);break}w=null,_=null,b=null,m=null,v.set(0,0,0),U=0,g=k,E=Yt}return}bt=bt||it,At=At||ht,kt=kt||Tt,(it!==y||bt!==S)&&(i.blendEquationSeparate(J[it],J[bt]),y=it,S=bt),(ht!==w||Tt!==_||At!==b||kt!==m)&&(i.blendFuncSeparate(_t[ht],_t[Tt],_t[At],_t[kt]),w=ht,_=Tt,b=At,m=kt),(Qt.equals(v)===!1||wt!==U)&&(i.blendColor(Qt.r,Qt.g,Qt.b,wt),v.copy(Qt),U=wt),g=k,E=!1}function Ut(k,it){k.side===me?ut(i.CULL_FACE):$(i.CULL_FACE);let ht=k.side===Ue;it&&(ht=!ht),qt(ht),k.blending===Cs&&k.transparent===!1?St(ri):St(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let Tt=k.stencilWrite;a.setTest(Tt),Tt&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Nt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function qt(k){P!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),P=k)}function Jt(k){k!==mu?($(i.CULL_FACE),k!==F&&(k===vc?i.cullFace(i.BACK):k===gu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ut(i.CULL_FACE),F=k}function lt(k){k!==L&&(X&&i.lineWidth(k),L=k)}function Nt(k,it,ht){k?($(i.POLYGON_OFFSET_FILL),(R!==it||V!==ht)&&(R=it,V=ht,o.getReversed()&&(it=-it,ht=-ht),i.polygonOffset(it,ht))):ut(i.POLYGON_OFFSET_FILL)}function q(k){k?$(i.SCISSOR_TEST):ut(i.SCISSOR_TEST)}function Ct(k){k===void 0&&(k=i.TEXTURE0+z-1),tt!==k&&(i.activeTexture(k),tt=k)}function Vt(k,it,ht){ht===void 0&&(tt===null?ht=i.TEXTURE0+z-1:ht=tt);let Tt=st[ht];Tt===void 0&&(Tt={type:void 0,texture:void 0},st[ht]=Tt),(Tt.type!==k||Tt.texture!==it)&&(tt!==ht&&(i.activeTexture(ht),tt=ht),i.bindTexture(k,it||j[k]),Tt.type=k,Tt.texture=it)}function Z(){let k=st[tt];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function jt(){try{i.compressedTexImage2D(...arguments)}catch(k){ne("WebGLState:",k)}}function Rt(){try{i.compressedTexImage3D(...arguments)}catch(k){ne("WebGLState:",k)}}function $t(){try{i.texSubImage2D(...arguments)}catch(k){ne("WebGLState:",k)}}function Et(){try{i.texSubImage3D(...arguments)}catch(k){ne("WebGLState:",k)}}function Me(){try{i.compressedTexSubImage2D(...arguments)}catch(k){ne("WebGLState:",k)}}function zt(){try{i.compressedTexSubImage3D(...arguments)}catch(k){ne("WebGLState:",k)}}function pt(){try{i.texStorage2D(...arguments)}catch(k){ne("WebGLState:",k)}}function N(){try{i.texStorage3D(...arguments)}catch(k){ne("WebGLState:",k)}}function T(){try{i.texImage2D(...arguments)}catch(k){ne("WebGLState:",k)}}function nt(){try{i.texImage3D(...arguments)}catch(k){ne("WebGLState:",k)}}function I(k){return d[k]!==void 0?d[k]:i.getParameter(k)}function et(k,it){d[k]!==it&&(i.pixelStorei(k,it),d[k]=it)}function xt(k){K.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),K.copy(k))}function mt(k){A.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),A.copy(k))}function B(k,it){let ht=h.get(it);ht===void 0&&(ht=new WeakMap,h.set(it,ht));let Tt=ht.get(k);Tt===void 0&&(Tt=i.getUniformBlockIndex(it,k.name),i.uniformBlockBinding(it,Tt,Tt),ht.set(k,Tt))}function Q(k,it,ht){let bt=h.get(it).get(k);l[bt]!==ht&&(i.bindBufferBase(i.UNIFORM_BUFFER,bt,ht),l[bt]=ht)}function gt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),c={},d={},tt=null,st={},u={},l={},f=new WeakMap,p=[],M=null,x=!1,g=null,y=null,w=null,_=null,S=null,b=null,m=null,v=new Mt(0,0,0),U=0,E=!1,P=null,F=null,L=null,R=null,V=null,K.set(0,0,i.canvas.width,i.canvas.height),A.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:$,disable:ut,bindFramebuffer:ft,drawBuffers:ct,useProgram:vt,setBlending:St,setMaterial:Ut,setFlipSided:qt,setCullFace:Jt,setLineWidth:lt,setPolygonOffset:Nt,setScissorTest:q,activeTexture:Ct,bindTexture:Vt,unbindTexture:Z,compressedTexImage2D:jt,compressedTexImage3D:Rt,texImage2D:T,texImage3D:nt,pixelStorei:et,getParameter:I,updateUBOMapping:B,uniformBlockBinding:Q,texStorage2D:pt,texStorage3D:N,texSubImage2D:$t,texSubImage3D:Et,compressedTexSubImage2D:Me,compressedTexSubImage3D:zt,scissor:xt,viewport:mt,reset:gt}}function k_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Dt,c=new WeakMap,d=new Set,u,f=new WeakMap,p=new Set,M=new FinalizationRegistry(N=>p.delete(N)),x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,T){return x?new OffscreenCanvas(N,T):or("canvas")}function y(N,T,nt){let I=1,et=pt(N);if((et.width>nt||et.height>nt)&&(I=nt/Math.max(et.width,et.height)),I<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let xt=Math.floor(I*et.width),mt=Math.floor(I*et.height);u===void 0&&(u=g(xt,mt));let B=T?g(xt,mt):u;return B.width=xt,B.height=mt,B.getContext("2d").drawImage(N,0,0,xt,mt),Kt("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+xt+"x"+mt+")."),B}else return"data"in N&&Kt("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),N;return N}function w(N){return N.generateMipmaps}function _(N){i.generateMipmap(N)}function S(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(N,T,nt,I,et,xt=!1){if(N!==null){if(i[N]!==void 0)return i[N];Kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let mt;I&&(mt=t.get("EXT_texture_norm16"),mt||Kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let B=T;if(T===i.RED&&(nt===i.FLOAT&&(B=i.R32F),nt===i.HALF_FLOAT&&(B=i.R16F),nt===i.UNSIGNED_BYTE&&(B=i.R8),nt===i.UNSIGNED_SHORT&&mt&&(B=mt.R16_EXT),nt===i.SHORT&&mt&&(B=mt.R16_SNORM_EXT)),T===i.RED_INTEGER&&(nt===i.UNSIGNED_BYTE&&(B=i.R8UI),nt===i.UNSIGNED_SHORT&&(B=i.R16UI),nt===i.UNSIGNED_INT&&(B=i.R32UI),nt===i.BYTE&&(B=i.R8I),nt===i.SHORT&&(B=i.R16I),nt===i.INT&&(B=i.R32I)),T===i.RG&&(nt===i.FLOAT&&(B=i.RG32F),nt===i.HALF_FLOAT&&(B=i.RG16F),nt===i.UNSIGNED_BYTE&&(B=i.RG8),nt===i.UNSIGNED_SHORT&&mt&&(B=mt.RG16_EXT),nt===i.SHORT&&mt&&(B=mt.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(nt===i.UNSIGNED_BYTE&&(B=i.RG8UI),nt===i.UNSIGNED_SHORT&&(B=i.RG16UI),nt===i.UNSIGNED_INT&&(B=i.RG32UI),nt===i.BYTE&&(B=i.RG8I),nt===i.SHORT&&(B=i.RG16I),nt===i.INT&&(B=i.RG32I)),T===i.RGB_INTEGER&&(nt===i.UNSIGNED_BYTE&&(B=i.RGB8UI),nt===i.UNSIGNED_SHORT&&(B=i.RGB16UI),nt===i.UNSIGNED_INT&&(B=i.RGB32UI),nt===i.BYTE&&(B=i.RGB8I),nt===i.SHORT&&(B=i.RGB16I),nt===i.INT&&(B=i.RGB32I)),T===i.RGBA_INTEGER&&(nt===i.UNSIGNED_BYTE&&(B=i.RGBA8UI),nt===i.UNSIGNED_SHORT&&(B=i.RGBA16UI),nt===i.UNSIGNED_INT&&(B=i.RGBA32UI),nt===i.BYTE&&(B=i.RGBA8I),nt===i.SHORT&&(B=i.RGBA16I),nt===i.INT&&(B=i.RGBA32I)),T===i.RGB&&(nt===i.UNSIGNED_SHORT&&mt&&(B=mt.RGB16_EXT),nt===i.SHORT&&mt&&(B=mt.RGB16_SNORM_EXT),nt===i.UNSIGNED_INT_5_9_9_9_REV&&(B=i.RGB9_E5),nt===i.UNSIGNED_INT_10F_11F_11F_REV&&(B=i.R11F_G11F_B10F)),T===i.RGBA){let Q=xt?rr:ce.getTransfer(et);nt===i.FLOAT&&(B=i.RGBA32F),nt===i.HALF_FLOAT&&(B=i.RGBA16F),nt===i.UNSIGNED_BYTE&&(B=Q===_e?i.SRGB8_ALPHA8:i.RGBA8),nt===i.UNSIGNED_SHORT&&mt&&(B=mt.RGBA16_EXT),nt===i.SHORT&&mt&&(B=mt.RGBA16_SNORM_EXT),nt===i.UNSIGNED_SHORT_4_4_4_4&&(B=i.RGBA4),nt===i.UNSIGNED_SHORT_5_5_5_1&&(B=i.RGB5_A1)}return(B===i.R16F||B===i.R32F||B===i.RG16F||B===i.RG32F||B===i.RGBA16F||B===i.RGBA32F)&&t.get("EXT_color_buffer_float"),B}function m(N,T){let nt;return N?T===null||T===Ln||T===Ki?nt=i.DEPTH24_STENCIL8:T===In?nt=i.DEPTH32F_STENCIL8:T===Ps&&(nt=i.DEPTH24_STENCIL8,Kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ln||T===Ki?nt=i.DEPTH_COMPONENT24:T===In?nt=i.DEPTH_COMPONENT32F:T===Ps&&(nt=i.DEPTH_COMPONENT16),nt}function v(N,T){return w(N)===!0||N.isFramebufferTexture&&N.minFilter!==De&&N.minFilter!==un?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function U(N){let T=new WeakRef(N);n.get(N).__ref=T,p.add(T),M.register(N,T,T)}function E(N){let T=n.get(N).__ref;T!==void 0&&(p.delete(T),M.unregister(T))}function P(N){L(N.target)}function F(N){R(N.target)}function L(N){N.removeEventListener("dispose",P),E(N),z(N),N.isVideoTexture&&c.delete(N),N.isHTMLTexture&&d.delete(N)}function R(N){N.removeEventListener("dispose",F),E(N),G(N)}function V(){for(let N of p){let T=N.deref();T!==void 0&&(T.isRenderTarget===!0?R(T):L(T))}p.clear(),d.clear()}function z(N){let T=n.get(N);if(T.__webglInit===void 0)return;let nt=N.source,I=f.get(nt);if(I){let et=I[T.__cacheKey];et.usedTimes--,et.usedTimes===0&&X(N),Object.keys(I).length===0&&f.delete(nt)}n.remove(N)}function X(N){let T=n.get(N);i.deleteTexture(T.__webglTexture);let nt=N.source,I=f.get(nt);delete I[T.__cacheKey],o.memory.textures--}function G(N){let T=n.get(N);T.__depthDisposeCallback&&T.__depthDisposeCallback();let nt=N.depthTexture;if(nt&&nt.renderTarget===N&&L(nt),N.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(T.__webglFramebuffer[et]))for(let xt=0;xt<T.__webglFramebuffer[et].length;xt++)i.deleteFramebuffer(T.__webglFramebuffer[et][xt]);else i.deleteFramebuffer(T.__webglFramebuffer[et]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[et])}else{if(Array.isArray(T.__webglFramebuffer))for(let et=0;et<T.__webglFramebuffer.length;et++)i.deleteFramebuffer(T.__webglFramebuffer[et]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let et=0;et<T.__webglColorRenderbuffer.length;et++)T.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[et]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let I=N.textures;for(let et=0,xt=I.length;et<xt;et++){let mt=n.get(I[et]);mt.__webglTexture&&(i.deleteTexture(mt.__webglTexture),o.memory.textures--),n.remove(I[et])}n.remove(N)}let W=0;function tt(){W=0}function st(){return W}function O(N){W=N}function at(){let N=W;return N>=s.maxTextures&&Kt("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,N}function K(N){let T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.mipmapsAutoUpdate),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function A(N,T){let nt=n.get(N);if(N.isVideoTexture&&Me(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&nt.__version!==N.version){let I=N.image;if(I===null)Kt("WebGLRenderer: Texture marked for update but no image data found.");else if(I.complete===!1)Kt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ut(nt,N,T);return}}else N.isExternalTexture&&(nt.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture,i.TEXTURE0+T)}function D(N,T){let nt=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&nt.__version!==N.version){Ut(nt,N,T);return}else N.isExternalTexture&&(nt.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,nt.__webglTexture,i.TEXTURE0+T)}function j(N,T){let nt=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&nt.__version!==N.version){Ut(nt,N,T);return}e.bindTexture(i.TEXTURE_3D,nt.__webglTexture,i.TEXTURE0+T)}function $(N,T){let nt=n.get(N);if(N.version>0&&nt.__version!==N.version){qt(nt,N,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture,i.TEXTURE0+T)}let ut={[_s]:i.REPEAT,[On]:i.CLAMP_TO_EDGE,[Zo]:i.MIRRORED_REPEAT},ft={[De]:i.NEAREST,[ku]:i.NEAREST_MIPMAP_NEAREST,[Br]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[wa]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},ct={[Gu]:i.NEVER,[Dc]:i.ALWAYS,[Hu]:i.LESS,[Nc]:i.LEQUAL,[Wu]:i.EQUAL,[Fc]:i.GEQUAL,[Zu]:i.GREATER,[Yu]:i.NOTEQUAL};function vt(N,T){if(T.type===In&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===un||T.magFilter===wa||T.magFilter===Br||T.magFilter===oi||T.minFilter===un||T.minFilter===wa||T.minFilter===Br||T.minFilter===oi)&&Kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,ut[T.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,ut[T.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,ut[T.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,ft[T.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,ft[T.minFilter]),T.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,ct[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===De||T.minFilter!==Br&&T.minFilter!==oi||T.type===In&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let nt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function J(N,T){let nt=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",P),U(T));let I=T.source,et=f.get(I);et===void 0&&(et={},f.set(I,et));let xt=K(T);if(xt!==N.__cacheKey){et[xt]===void 0&&(et[xt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,nt=!0),et[xt].usedTimes++;let mt=et[N.__cacheKey];mt!==void 0&&(et[N.__cacheKey].usedTimes--,mt.usedTimes===0&&X(T)),N.__cacheKey=xt,N.__webglTexture=et[xt].texture}return nt}function _t(N,T,nt){return Math.floor(Math.floor(N/nt)/T)}function St(N,T,nt,I){let xt=N.updateRanges;if(xt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,nt,I,T.data);else{xt.sort((k,it)=>k.start-it.start);let mt=0;for(let k=1;k<xt.length;k++){let it=xt[mt],ht=xt[k],Tt=it.start+it.count,bt=_t(ht.start,T.width,4),At=_t(it.start,T.width,4);ht.start<=Tt+1&&bt===At&&_t(ht.start+ht.count-1,T.width,4)===bt?it.count=Math.max(it.count,ht.start+ht.count-it.start):(++mt,xt[mt]=ht)}xt.length=mt+1;let B=e.getParameter(i.UNPACK_ROW_LENGTH),Q=e.getParameter(i.UNPACK_SKIP_PIXELS),gt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let k=0,it=xt.length;k<it;k++){let ht=xt[k],Tt=Math.floor(ht.start/4),bt=Math.ceil(ht.count/4),At=Tt%T.width,kt=Math.floor(Tt/T.width),Qt=bt,wt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,At),e.pixelStorei(i.UNPACK_SKIP_ROWS,kt),e.texSubImage2D(i.TEXTURE_2D,0,At,kt,Qt,wt,nt,I,T.data)}N.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,B),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(i.UNPACK_SKIP_ROWS,gt)}}function Ut(N,T,nt){let I=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(I=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(I=i.TEXTURE_3D);let et=J(N,T),xt=T.source;e.bindTexture(I,N.__webglTexture,i.TEXTURE0+nt);let mt=n.get(xt);if(xt.version!==mt.__version||et===!0){if(e.activeTexture(i.TEXTURE0+nt),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let wt=ce.getPrimaries(ce.workingColorSpace),Yt=T.colorSpace===li?null:ce.getPrimaries(T.colorSpace),ae=T.colorSpace===li||wt===Yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae)}e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let Q=y(T.image,!1,s.maxTextureSize);Q=zt(T,Q);let gt=r.convert(T.format,T.colorSpace),k=r.convert(T.type),it=b(T.internalFormat,gt,k,T.normalized,T.colorSpace,T.isVideoTexture);vt(I,T);let ht,Tt=T.mipmaps,bt=T.isVideoTexture!==!0,At=mt.__version===void 0||et===!0,kt=xt.dataReady,Qt=v(T,Q);if(T.isDepthTexture)it=m(T.format===ai,T.type),At&&(bt?e.texStorage2D(i.TEXTURE_2D,1,it,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,it,Q.width,Q.height,0,gt,k,null));else if(T.isDataTexture)if(Tt.length>0){bt&&At&&e.texStorage2D(i.TEXTURE_2D,Qt,it,Tt[0].width,Tt[0].height);for(let wt=0,Yt=Tt.length;wt<Yt;wt++)ht=Tt[wt],bt?kt&&e.texSubImage2D(i.TEXTURE_2D,wt,0,0,ht.width,ht.height,gt,k,ht.data):e.texImage2D(i.TEXTURE_2D,wt,it,ht.width,ht.height,0,gt,k,ht.data);T.generateMipmaps=!1}else bt?(At&&e.texStorage2D(i.TEXTURE_2D,Qt,it,Q.width,Q.height),kt&&St(T,Q,gt,k)):e.texImage2D(i.TEXTURE_2D,0,it,Q.width,Q.height,0,gt,k,Q.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){bt&&At&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Qt,it,Tt[0].width,Tt[0].height,Q.depth);for(let wt=0,Yt=Tt.length;wt<Yt;wt++)if(ht=Tt[wt],T.format!==Bn)if(gt!==null)if(bt){if(kt)if(T.layerUpdates.size>0){let ae=Hc(ht.width,ht.height,T.format,T.type);for(let Ft of T.layerUpdates){let ve=ht.data.subarray(Ft*ae/ht.data.BYTES_PER_ELEMENT,(Ft+1)*ae/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,wt,0,0,Ft,ht.width,ht.height,1,gt,ve)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,wt,0,0,0,ht.width,ht.height,Q.depth,gt,ht.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,wt,it,ht.width,ht.height,Q.depth,0,ht.data,0,0);else Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else bt?kt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,wt,0,0,0,ht.width,ht.height,Q.depth,gt,k,ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,wt,it,ht.width,ht.height,Q.depth,0,gt,k,ht.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{bt&&At&&e.texStorage2D(i.TEXTURE_2D,Qt,it,Tt[0].width,Tt[0].height);for(let wt=0,Yt=Tt.length;wt<Yt;wt++)ht=Tt[wt],T.format!==Bn?gt!==null?bt?kt&&e.compressedTexSubImage2D(i.TEXTURE_2D,wt,0,0,ht.width,ht.height,gt,ht.data):e.compressedTexImage2D(i.TEXTURE_2D,wt,it,ht.width,ht.height,0,ht.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):bt?kt&&e.texSubImage2D(i.TEXTURE_2D,wt,0,0,ht.width,ht.height,gt,k,ht.data):e.texImage2D(i.TEXTURE_2D,wt,it,ht.width,ht.height,0,gt,k,ht.data)}else if(T.isDataArrayTexture)if(bt){if(At&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Qt,it,Q.width,Q.height,Q.depth),kt)if(T.layerUpdates.size>0){let wt=Hc(Q.width,Q.height,T.format,T.type);for(let Yt of T.layerUpdates){let ae=Q.data.subarray(Yt*wt/Q.data.BYTES_PER_ELEMENT,(Yt+1)*wt/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Yt,Q.width,Q.height,1,gt,k,ae)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,gt,k,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,it,Q.width,Q.height,Q.depth,0,gt,k,Q.data);else if(T.isData3DTexture)bt?(At&&e.texStorage3D(i.TEXTURE_3D,Qt,it,Q.width,Q.height,Q.depth),kt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,gt,k,Q.data)):e.texImage3D(i.TEXTURE_3D,0,it,Q.width,Q.height,Q.depth,0,gt,k,Q.data);else if(T.isFramebufferTexture){if(At)if(bt)e.texStorage2D(i.TEXTURE_2D,Qt,it,Q.width,Q.height);else{let wt=Q.width,Yt=Q.height;for(let ae=0;ae<Qt;ae++)e.texImage2D(i.TEXTURE_2D,ae,it,wt,Yt,0,gt,k,null),wt>>=1,Yt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let wt=i.canvas;if(wt.hasAttribute("layoutsubtree")||wt.setAttribute("layoutsubtree","true"),Q.parentNode!==wt){wt.appendChild(Q),d.add(T),wt.onpaint=Yt=>{let ae=Yt.changedElements;for(let Ft of d)ae.includes(Ft.image)&&(Ft.needsUpdate=!0)},wt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let ae=i.RGBA,Ft=i.RGBA,ve=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ae,Ft,ve,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Tt.length>0){if(bt&&At){let wt=pt(Tt[0]);e.texStorage2D(i.TEXTURE_2D,Qt,it,wt.width,wt.height)}for(let wt=0,Yt=Tt.length;wt<Yt;wt++)ht=Tt[wt],bt?kt&&e.texSubImage2D(i.TEXTURE_2D,wt,0,0,gt,k,ht):e.texImage2D(i.TEXTURE_2D,wt,it,gt,k,ht);T.generateMipmaps=!1}else if(bt){if(At){let wt=pt(Q);e.texStorage2D(i.TEXTURE_2D,Qt,it,wt.width,wt.height)}kt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,k,Q)}else e.texImage2D(i.TEXTURE_2D,0,it,gt,k,Q);w(T)&&T.mipmapsAutoUpdate===!0&&_(I),mt.__version=xt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function qt(N,T,nt){if(T.image.length!==6)return;let I=J(N,T),et=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+nt);let xt=n.get(et);if(et.version!==xt.__version||I===!0){e.activeTexture(i.TEXTURE0+nt);let mt=ce.getPrimaries(ce.workingColorSpace),B=T.colorSpace===li?null:ce.getPrimaries(T.colorSpace),Q=T.colorSpace===li||mt===B?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let gt=T.isCompressedTexture||T.image[0].isCompressedTexture,k=T.image[0]&&T.image[0].isDataTexture,it=[];for(let Ft=0;Ft<6;Ft++)!gt&&!k?it[Ft]=y(T.image[Ft],!0,s.maxCubemapSize):it[Ft]=k?T.image[Ft].image:T.image[Ft],it[Ft]=zt(T,it[Ft]);let ht=it[0],Tt=r.convert(T.format,T.colorSpace),bt=r.convert(T.type),At=b(T.internalFormat,Tt,bt,T.normalized,T.colorSpace),kt=T.isVideoTexture!==!0,Qt=xt.__version===void 0||I===!0,wt=et.dataReady,Yt=v(T,ht);vt(i.TEXTURE_CUBE_MAP,T);let ae;if(T.isDepthTexture){if(At=m(T.format===ai,T.type),Qt)if(kt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,At,ht.width,ht.height);else for(let Ft=0;Ft<6;Ft++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,At,ht.width,ht.height,0,Tt,bt,null)}else if(gt){kt&&Qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Yt,At,ht.width,ht.height);for(let Ft=0;Ft<6;Ft++){ae=it[Ft].mipmaps;for(let ve=0;ve<ae.length;ve++){let ze=ae[ve];T.format!==Bn?Tt!==null?kt?wt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,ve,0,0,ze.width,ze.height,Tt,ze.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,ve,At,ze.width,ze.height,0,ze.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?wt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,ve,0,0,ze.width,ze.height,Tt,bt,ze.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,ve,At,ze.width,ze.height,0,Tt,bt,ze.data)}}}else{if(ae=T.mipmaps,kt&&Qt){ae.length>0&&Yt++;let Ft=pt(it[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Yt,At,Ft.width,Ft.height)}for(let Ft=0;Ft<6;Ft++)if(k){kt?wt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,0,0,it[Ft].width,it[Ft].height,Tt,bt,it[Ft].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,At,it[Ft].width,it[Ft].height,0,Tt,bt,it[Ft].data);for(let ve=0;ve<ae.length;ve++){let mi=ae[ve].image[Ft].image;kt?wt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,ve+1,0,0,mi.width,mi.height,Tt,bt,mi.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,ve+1,At,mi.width,mi.height,0,Tt,bt,mi.data)}}else{kt?wt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,0,0,Tt,bt,it[Ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,At,Tt,bt,it[Ft]);for(let ve=0;ve<ae.length;ve++){let ze=ae[ve];kt?wt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,ve+1,0,0,Tt,bt,ze.image[Ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,ve+1,At,Tt,bt,ze.image[Ft])}}}w(T)&&T.mipmapsAutoUpdate===!0&&_(i.TEXTURE_CUBE_MAP),xt.__version=et.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Jt(N,T,nt,I,et,xt){let mt=r.convert(nt.format,nt.colorSpace),B=r.convert(nt.type),Q=b(nt.internalFormat,mt,B,nt.normalized,nt.colorSpace),gt=n.get(T),k=n.get(nt);if(k.__renderTarget=T,!gt.__hasExternalTextures){let it=Math.max(1,T.width>>xt),ht=Math.max(1,T.height>>xt);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,xt,Q,it,ht,T.depth,0,mt,B,null):e.texImage2D(et,xt,Q,it,ht,0,mt,B,null)}e.bindFramebuffer(i.FRAMEBUFFER,N),Et(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,I,et,k.__webglTexture,0,$t(T)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,I,et,k.__webglTexture,xt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(N,T,nt){if(i.bindRenderbuffer(i.RENDERBUFFER,N),T.depthBuffer){let I=T.depthTexture,et=I&&I.isDepthTexture?I.type:null,xt=m(T.stencilBuffer,et),mt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Et(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t(T),xt,T.width,T.height):nt?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t(T),xt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,xt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,N)}else{let I=T.textures;for(let et=0;et<I.length;et++){let xt=I[et],mt=r.convert(xt.format,xt.colorSpace),B=r.convert(xt.type),Q=b(xt.internalFormat,mt,B,xt.normalized,xt.colorSpace);Et(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t(T),Q,T.width,T.height):nt?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t(T),Q,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Q,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Nt(N,T,nt){let I=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let et=n.get(T.depthTexture);et.__renderTarget=T;let xt=I?T.depthTexture.image[0]:T.depthTexture.image;(!et.__webglTexture||xt.width!==T.width||xt.height!==T.height)&&(xt.width=T.width,xt.height=T.height,T.depthTexture.needsUpdate=!0),I?$(T.depthTexture,0):A(T.depthTexture,0);let mt=et.__webglTexture,B=$t(T),Q=I?i.TEXTURE_CUBE_MAP_POSITIVE_X+nt:i.TEXTURE_2D,gt=T.depthTexture.format===ai?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===ei)Et(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,gt,Q,mt,0,B):i.framebufferTexture2D(i.FRAMEBUFFER,gt,Q,mt,0);else if(T.depthTexture.format===ai)Et(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,gt,Q,mt,0,B):i.framebufferTexture2D(i.FRAMEBUFFER,gt,Q,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function q(N){let T=n.get(N),nt=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){let I=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),I){let et=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,I.removeEventListener("dispose",et)};I.addEventListener("dispose",et),T.__depthDisposeCallback=et}T.__boundDepthTexture=I}if(N.depthTexture&&!T.__autoAllocateDepthBuffer)if(nt)for(let I=0;I<6;I++)Nt(T.__webglFramebuffer[I],N,I);else N.texture.mipmaps.length>0?Nt(T.__webglFramebuffer[0],N,0):Nt(T.__webglFramebuffer,N,0);else if(nt){T.__webglDepthbuffer=[];for(let I=0;I<6;I++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[I]),T.__webglDepthbuffer[I]===void 0)T.__webglDepthbuffer[I]=i.createRenderbuffer(),lt(T.__webglDepthbuffer[I],N,!1);else{let et=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=T.__webglDepthbuffer[I];i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,xt)}}else if(N.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),lt(T.__webglDepthbuffer,N,!1);else{let et=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,xt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(N,T,nt){let I=n.get(N);T!==void 0&&Jt(I.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),nt!==void 0&&q(N)}function Vt(N){let T=N.texture,nt=n.get(N),I=n.get(T);N.addEventListener("dispose",F),U(N);let et=N.textures,xt=N.isWebGLCubeRenderTarget===!0,mt=et.length>1;if(mt||(I.__webglTexture===void 0&&(I.__webglTexture=i.createTexture()),I.__version=T.version,o.memory.textures++),xt){nt.__webglFramebuffer=[];for(let B=0;B<6;B++)if(T.mipmaps.length>0){nt.__webglFramebuffer[B]=[];for(let Q=0;Q<T.mipmaps.length;Q++)nt.__webglFramebuffer[B][Q]=i.createFramebuffer()}else nt.__webglFramebuffer[B]=i.createFramebuffer()}else{if(T.mipmaps.length>0){nt.__webglFramebuffer=[];for(let B=0;B<T.mipmaps.length;B++)nt.__webglFramebuffer[B]=i.createFramebuffer()}else nt.__webglFramebuffer=i.createFramebuffer();if(mt)for(let B=0,Q=et.length;B<Q;B++){let gt=n.get(et[B]);gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&Et(N)===!1){nt.__webglMultisampledFramebuffer=i.createFramebuffer(),nt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let B=0;B<et.length;B++){let Q=et[B];nt.__webglColorRenderbuffer[B]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,nt.__webglColorRenderbuffer[B]);let gt=r.convert(Q.format,Q.colorSpace),k=r.convert(Q.type),it=b(Q.internalFormat,gt,k,Q.normalized,Q.colorSpace,N.isXRRenderTarget===!0),ht=$t(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,it,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.RENDERBUFFER,nt.__webglColorRenderbuffer[B])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(nt.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(nt.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xt){e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture),vt(i.TEXTURE_CUBE_MAP,T);for(let B=0;B<6;B++)if(T.mipmaps.length>0)for(let Q=0;Q<T.mipmaps.length;Q++)Jt(nt.__webglFramebuffer[B][Q],N,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+B,Q);else Jt(nt.__webglFramebuffer[B],N,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0);w(T)?_(i.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(mt){for(let B=0,Q=et.length;B<Q;B++){let gt=et[B],k=n.get(gt),it=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(it=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,k.__webglTexture),vt(it,gt),Jt(nt.__webglFramebuffer,N,gt,i.COLOR_ATTACHMENT0+B,it,0),w(gt)&&_(it)}e.unbindTexture()}else{let B=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(B=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(B,I.__webglTexture),vt(B,T),T.mipmaps.length>0)for(let Q=0;Q<T.mipmaps.length;Q++)Jt(nt.__webglFramebuffer[Q],N,T,i.COLOR_ATTACHMENT0,B,Q);else Jt(nt.__webglFramebuffer,N,T,i.COLOR_ATTACHMENT0,B,0);w(T)?_(B):T.mipmaps.length>0&&i.texParameteri(B,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}N.depthBuffer&&q(N)}function Z(N){let T=N.textures;for(let nt=0,I=T.length;nt<I;nt++){let et=T[nt];if(w(et)&&et.mipmapsAutoUpdate===!0){let xt=S(N),mt=n.get(et).__webglTexture;e.bindTexture(xt,mt),_(xt),e.unbindTexture()}}}let jt=[];function Rt(N){if(N.samples>0){if(Et(N)===!1){let T=N.textures,nt=N.width,I=N.height,et=i.COLOR_BUFFER_BIT,xt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(N),B=T.length>1;if(B)for(let gt=0;gt<T.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),N.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let gt=0;gt<T.length;gt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),B){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[gt]);let k=n.get(T[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,k,0)}i.blitFramebuffer(0,0,nt,I,0,0,nt,I,et,i.NEAREST),l===!0&&(jt.length=0,jt.push(i.COLOR_ATTACHMENT0+gt),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&jt.push(xt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,jt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),B)for(let gt=0;gt<T.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,mt.__webglColorRenderbuffer[gt]);let k=n.get(T[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,k,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let T=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function $t(N){return Math.min(s.maxSamples,N.samples)}function Et(N){let T=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Me(N){let T=o.render.frame;c.get(N)!==T&&(c.set(N,T),N.update())}function zt(N,T){let nt=N.colorSpace,I=N.format,et=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||nt!==sr&&nt!==li&&(ce.getTransfer(nt)===_e?(I!==Bn||et!==xn)&&Kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ne("WebGLTextures: Unsupported texture color space:",nt)),T}function pt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=at,this.resetTextureUnits=tt,this.getTextureUnits=st,this.setTextureUnits=O,this.setTexture2D=A,this.setTexture2DArray=D,this.setTexture3D=j,this.setTextureCube=$,this.rebindTextures=Ct,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=Jt,this.useMultisampledRTT=Et,this.dispose=V}function O_(i,t){function e(n,s=li){let r,o=ce.getTransfer(s);if(n===xn)return i.UNSIGNED_BYTE;if(n===Ta)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Aa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ic)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ac)return i.BYTE;if(n===Rc)return i.SHORT;if(n===Ps)return i.UNSIGNED_SHORT;if(n===Ea)return i.INT;if(n===Ln)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===tn)return i.HALF_FLOAT;if(n===Pc)return i.ALPHA;if(n===Uc)return i.RGB;if(n===Bn)return i.RGBA;if(n===ei)return i.DEPTH_COMPONENT;if(n===ai)return i.DEPTH_STENCIL;if(n===Ra)return i.RED;if(n===Ca)return i.RED_INTEGER;if(n===Ii)return i.RG;if(n===Ia)return i.RG_INTEGER;if(n===Pa)return i.RGBA_INTEGER;if(n===kr||n===Or||n===Vr||n===zr)if(o===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ua||n===Na||n===Fa||n===Da)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===La||n===Ba||n===ka||n===Oa||n===Va||n===Gr||n===za)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===La||n===Ba)return o===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ka)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Oa)return r.COMPRESSED_R11_EAC;if(n===Va)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Gr)return r.COMPRESSED_RG11_EAC;if(n===za)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ga||n===Ha||n===Wa||n===Za||n===Ya||n===Xa||n===Ja||n===qa||n===ja||n===Qa||n===Ka||n===$a||n===tl||n===el)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ga)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ha)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wa)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Za)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ya)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xa)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ja)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qa)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ja)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qa)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ka)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$a)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===el)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nl||n===il||n===sl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===nl)return o===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rl||n===ol||n===Hr||n===al)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===rl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ol)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===al)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var V_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z_=`
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

}`,Kc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new yr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ye({vertexShader:V_,fragmentShader:z_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new te(new Yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$c=class extends Vn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,h=null,c=null,d=null,u=null,f=null,p=null,M=typeof XRWebGLBinding<"u",x=new Kc,g={},y=e.getContextAttributes(),w=null,_=null,S=[],b=[],m=new Dt,v=null,U=null,E=new on;E.viewport=new Ae;let P=new on;P.viewport=new Ae;let F=[E,P],L=new va,R=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let A=S[K];return A===void 0&&(A=new Ss,S[K]=A),A.getTargetRaySpace()},this.getControllerGrip=function(K){let A=S[K];return A===void 0&&(A=new Ss,S[K]=A),A.getGripSpace()},this.getHand=function(K){let A=S[K];return A===void 0&&(A=new Ss,S[K]=A),A.getHandSpace()};function z(K){let A=b.indexOf(K.inputSource);if(A===-1)return;let D=S[A];D!==void 0&&(D.update(K.inputSource,K.frame,h||o),D.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",G);for(let K=0;K<S.length;K++){let A=b[K];A!==null&&(b[K]=null,S[K].disconnect(A))}R=null,V=null,x.reset();for(let K in g)delete g[K];if(t.setRenderTarget(w),f=null,u=null,d=null,s=null,_=null,at.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(m.width,m.height,!1),U!==null){let K=U.camera;K.fov=U.fov,K.zoom=U.zoom,K.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&Kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(K){h=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",X),s.addEventListener("inputsourceschange",G),y.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(m),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let D=null,j=null,$=null;y.depth&&($=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,D=y.stencil?ai:ei,j=y.stencil?Ki:Ln);let ut={colorFormat:e.RGBA8,depthFormat:$,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(ut),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new ke(u.textureWidth,u.textureHeight,{format:Bn,type:xn,depthTexture:new ni(u.textureWidth,u.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,D),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let D={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,D),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new ke(f.framebufferWidth,f.framebufferHeight,{format:Bn,type:xn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),at.setContext(s),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function G(K){for(let A=0;A<K.removed.length;A++){let D=K.removed[A],j=b.indexOf(D);j>=0&&(b[j]=null,S[j].disconnect(D))}for(let A=0;A<K.added.length;A++){let D=K.added[A],j=b.indexOf(D);if(j===-1){for(let ut=0;ut<S.length;ut++)if(ut>=b.length){b.push(D),j=ut;break}else if(b[ut]===null){b[ut]=D,j=ut;break}if(j===-1)break}let $=S[j];$&&$.connect(D)}}function W(K,A){A===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(A.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let A=K.near,D=K.far;x.texture!==null&&(x.depthNear>0&&(A=x.depthNear),x.depthFar>0&&(D=x.depthFar)),L.near=P.near=E.near=A,L.far=P.far=E.far=D,(R!==L.near||V!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),R=L.near,V=L.far),L.layers.mask=K.layers.mask|6,E.layers.mask=L.layers.mask&-5,P.layers.mask=L.layers.mask&-3;let j=K.parent,$=L.cameras;W(L,j);for(let ut=0;ut<$.length;ut++)W($[ut],j);L.projectionMatrix.copy(E.projectionMatrix),L.projectionMatrixInverse.copy(E.projectionMatrixInverse),U===null&&K.isPerspectiveCamera&&(U={camera:K,fov:K.fov,zoom:K.zoom}),tt(K,L,j)};function tt(K,A,D){D===null?K.matrix.copy(A.matrixWorld):(K.matrix.copy(D.matrixWorld),K.matrix.invert(),K.matrix.multiply(A.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(A.projectionMatrix),K.projectionMatrixInverse.copy(A.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Xo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(L)},this.getCameraTexture=function(K){return g[K]};let st=null;function O(K,A){if(c=A.getViewerPose(h||o),p=A,c!==null){let D=c.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let j=!1;D.length!==L.cameras.length&&(L.cameras.length=0,j=!0);for(let ct=0;ct<D.length;ct++){let vt=D[ct],J=null;if(f!==null)J=f.getViewport(vt);else{let St=d.getViewSubImage(u,vt);J=St.viewport,ct===0&&(t.setRenderTargetTextures(_,St.colorTexture,St.depthStencilTexture),t.setRenderTarget(_))}let _t=F[ct];_t===void 0&&(_t=new on,_t.layers.enable(ct),_t.viewport=new Ae,F[ct]=_t),_t.matrix.fromArray(vt.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(vt.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(J.x,J.y,J.width,J.height),ct===0&&(L.matrix.copy(_t.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),j===!0&&L.cameras.push(_t)}let $=s.enabledFeatures;if($&&$.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=n.getBinding();let ct=d.getDepthInformation(D[0]);ct&&ct.isValid&&ct.texture&&x.init(ct,s.renderState)}if($&&$.includes("camera-access")&&M){t.state.unbindTexture(),d=n.getBinding();for(let ct=0;ct<D.length;ct++){let vt=D[ct].camera;if(vt){let J=g[vt];J||(J=new yr,g[vt]=J);let _t=d.getCameraImage(vt);J.sourceTexture=_t}}}}for(let D=0;D<S.length;D++){let j=b[D],$=S[D];j!==null&&$!==void 0&&$.update(j,A,h||o)}st&&st(K,A),A.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:A}),p=null}let at=new bd;at.setAnimationLoop(O),this.setAnimationLoop=function(K){st=K},this.dispose=function(){}}},G_=new Xt,Nd=new ie;Nd.set(-1,0,0,0,1,0,0,0,1);function H_(i,t){function e(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function n(x,g){g.color.getRGB(x.fogColor.value,Vc(i)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function s(x,g,y,w,_){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(x,g):g.isMeshLambertMaterial?(r(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(x,g),d(x,g)):g.isMeshPhongMaterial?(r(x,g),c(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(x,g),u(x,g),g.isMeshPhysicalMaterial&&f(x,g,_)):g.isMeshMatcapMaterial?(r(x,g),p(x,g)):g.isMeshDepthMaterial?r(x,g):g.isMeshDistanceMaterial?(r(x,g),M(x,g)):g.isMeshNormalMaterial?r(x,g):g.isLineBasicMaterial?(o(x,g),g.isLineDashedMaterial&&a(x,g)):g.isPointsMaterial?l(x,g,y,w):g.isSpriteMaterial?h(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,e(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===Ue&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,e(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===Ue&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,e(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,e(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);let y=t.get(g),w=y.envMap,_=y.envMapRotation;w&&(x.envMap.value=w,x.envMapRotation.value.setFromMatrix4(G_.makeRotationFromEuler(_)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Nd),x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,x.aoMapTransform))}function o(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform))}function a(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function l(x,g,y,w){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*y,x.scale.value=w*.5,g.map&&(x.map.value=g.map,e(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function h(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function c(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function d(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function u(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function f(x,g,y){x.ior.value=g.ior,g.diffuseRoughness>0&&(x.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ue&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.retroreflectivity>0&&(x.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=y.texture,x.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,x.specularIntensityMapTransform))}function p(x,g){g.matcap&&(x.matcap.value=g.matcap)}function M(x,g){let y=t.get(g).light;x.referencePosition.value.setFromMatrixPosition(y.matrixWorld),x.nearDistance.value=y.shadow.camera.near,x.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function W_(i,t,e,n){let s={},r={};function o(y,w){let _=w.program;n.uniformBlockBinding(y,_,s[y.id])}function a(y,w){let _=s[y.id];_===void 0&&(p(y),_=l(y),s[y.id]=_,y.addEventListener("dispose",x));let S=w.program;n.updateUBOMapping(y,S);let b=t.render.frame;r[y.id]!==b&&(h(y),r[y.id]=b)}function l(y){let w=i.createBuffer(),_=y.__size,S=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,_,S),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function h(y){let w=s[y.id],_=y.uniforms,S=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let b=0,m=_.length;b<m;b++){let v=_[b];if(Array.isArray(v))for(let U=0,E=v.length;U<E;U++)c(v[U],b,U,S);else c(v,b,0,S)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function c(y,w,_,S){if(u(y,w,_,S)===!0){let b=y.__offset,m=y.value;if(Array.isArray(m)){let v=0;for(let U=0;U<m.length;U++){let E=m[U],P=M(E,!0);d(E,y.__data,v),v+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else d(m,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,y.__data)}}function d(y,w,_){typeof y=="number"||typeof y=="boolean"?w[_]=y:y.isMatrix3?(w[_]=y.elements[0],w[_+1]=y.elements[1],w[_+2]=y.elements[2],w[_+3]=0,w[_+4]=y.elements[3],w[_+5]=y.elements[4],w[_+6]=y.elements[5],w[_+7]=0,w[_+8]=y.elements[6],w[_+9]=y.elements[7],w[_+10]=y.elements[8],w[_+11]=0):ArrayBuffer.isView(y)?w.set(y.subarray(0,w.length-_),_):y.toArray(w,_)}function u(y,w,_,S){let b=y.value,m=w+"_"+_;if(Array.isArray(b)){S[m]===void 0&&(S[m]=[]);let v=S[m],U=!1;for(let E=0;E<b.length;E++)f(b[E],v,E)===!0&&(U=!0);return U}return f(b,S,m)}function f(y,w,_){if(w[_]===void 0)return typeof y=="number"||typeof y=="boolean"?w[_]=y:ArrayBuffer.isView(y)?w[_]=y.slice():w[_]=y.clone(),!0;{let S=w[_];if(typeof y=="number"||typeof y=="boolean"){if(S!==y)return w[_]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(S.equals(y)===!1)return S.copy(y),!0}}return!1}function p(y){let w=y.uniforms,_=0,S=16;for(let m=0,v=w.length;m<v;m++){let U=Array.isArray(w[m])?w[m]:[w[m]];for(let E=0,P=U.length;E<P;E++){let F=U[E],L=Array.isArray(F.value)?F.value:[F.value],R=Array.isArray(w[m])||Array.isArray(F.value),V=_;for(let X=0,G=L.length;X<G;X++){let W=L[X],tt=M(W,R),st=_%S,O=st%tt.boundary,at=st+O;_+=O,at!==0&&S-at<tt.storage&&(_+=S-at),X===0&&(V=_),_+=tt.storage}let z=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new z((_-V)/Float32Array.BYTES_PER_ELEMENT),F.__offset=V}}let b=_%S;return b>0&&(_+=S-b),y.__size=_,y.__cache={},this}function M(y,w){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=16,_.storage=48):y.isMatrix4?(_.boundary=16,_.storage=64):y.isTexture?Kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(_.boundary=16,_.storage=y.byteLength):Kt("WebGLRenderer: Unsupported uniform value type.",y),w===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function x(y){let w=y.target;w.removeEventListener("dispose",x),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function g(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:g}}var Z_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Wn=null;function Y_(){return Wn===null&&(Wn=new fr(Z_,16,16,Ii,tn),Wn.name="DFG_LUT",Wn.minFilter=un,Wn.magFilter=un,Wn.wrapS=On,Wn.wrapT=On,Wn.generateMipmaps=!1,Wn.needsUpdate=!0),Wn}var ul=class{constructor(t={}){let{canvas:e=Ju(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=xn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let M=f,x=new Set([Pa,Ia,Ca]),g=new Set([xn,Ln,Ps,Ki,Ta,Aa]),y=new Uint32Array(4),w=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},S=null,b=null,m=[],v=[],U=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,P=!1,F=null,L=null,R=null,V=null;this._outputColorSpace=We;let z=0,X=0,G=null,W=-1,tt=null,st=new Ae,O=new Ae,at=null,K=new Mt(0),A=0,D=e.width,j=e.height,$=1,ut=null,ft=null,ct=new Ae(0,0,D,j),vt=new Ae(0,0,D,j),J=!1,_t=new wi,St=new Qo,Ut=!1,qt=!1,Jt=new Xt,lt=new H,Nt=new Ae,q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ct=!1;function Vt(){return G===null?$:1}let Z=n;function jt(C,Y){return e.getContext(C,Y)}let Rt,$t,Et,Me,zt,pt,N,T,nt,I,et,xt,mt,B,Q,gt,k,it,ht,Tt,bt,At,kt;try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Yt,!1),e.addEventListener("webglcontextrestored",ae,!1),e.addEventListener("webglcontextcreationerror",Ft,!1),Z===null){let Y="webgl2";if(Z=jt(Y,C),Z===null)throw jt(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qt()}catch(C){throw e.removeEventListener("webglcontextlost",Yt,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",Ft,!1),ne("WebGLRenderer: "+C.message),C}function Qt(){Rt=new ix(Z),Rt.init(),bt=new O_(Z,Rt),$t=new Y0(Z,Rt,t,bt),Et=new B_(Z,Rt),$t.reversedDepthBuffer&&u&&Et.buffers.depth.setReversed(!0),L=Z.createFramebuffer(),R=Z.createFramebuffer(),V=Z.createFramebuffer(),Me=new ox(Z),zt=new b_,pt=new k_(Z,Rt,Et,zt,$t,bt,Me),N=new nx(E),T=new lm(Z),At=new W0(Z,T),nt=new sx(Z,T,Me,At),I=new lx(Z,nt,T,At,Me),it=new ax(Z,$t,pt),Q=new X0(zt),et=new S_(E,N,Rt,$t,At,Q),xt=new H_(E,zt),mt=new E_,B=new P_(Rt),k=new H0(E,N,Et,I,p,l),gt=new L_(E,I,$t),kt=new W_(Z,Me,$t,Et),ht=new Z0(Z,Rt,Me),Tt=new rx(Z,Rt,Me),Me.programs=et.programs,E.capabilities=$t,E.extensions=Rt,E.properties=zt,E.renderLists=mt,E.shadowMap=gt,E.state=Et,E.info=Me}M!==xn&&(U=new hx(M,e.width,e.height,a,s,r));let wt=new $c(E,Z);this.xr=wt,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){let C=Rt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Rt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(C){C!==void 0&&($=C,this.setSize(D,j,!1))},this.getSize=function(C){return C.set(D,j)},this.setSize=function(C,Y,dt=!0){if(wt.isPresenting){Kt("WebGLRenderer: Can't change size while VR device is presenting.");return}D=C,j=Y,e.width=Math.floor(C*$),e.height=Math.floor(Y*$),dt===!0&&(e.style.width=C+"px",e.style.height=Y+"px"),U!==null&&U.setSize(e.width,e.height),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(D*$,j*$).floor()},this.setDrawingBufferSize=function(C,Y,dt){D=C,j=Y,$=dt,e.width=Math.floor(C*dt),e.height=Math.floor(Y*dt),this.setViewport(0,0,C,Y)},this.setEffects=function(C){if(M===xn){ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Y=0;Y<C.length;Y++)if(C[Y].isOutputPass===!0){Kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(st)},this.getViewport=function(C){return C.copy(ct)},this.setViewport=function(C,Y,dt,rt){C.isVector4?ct.set(C.x,C.y,C.z,C.w):ct.set(C,Y,dt,rt),Et.viewport(st.copy(ct).multiplyScalar(Vt()).round())},this.getScissor=function(C){return C.copy(vt)},this.setScissor=function(C,Y,dt,rt){C.isVector4?vt.set(C.x,C.y,C.z,C.w):vt.set(C,Y,dt,rt),Et.scissor(O.copy(vt).multiplyScalar(Vt()).round())},this.getScissorTest=function(){return J},this.setScissorTest=function(C){Et.setScissorTest(J=C)},this.setOpaqueSort=function(C){ut=C},this.setTransparentSort=function(C){ft=C},this.getClearColor=function(C){return C.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor(...arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha(...arguments)},this.clear=function(C=!0,Y=!0,dt=!0){let rt=0;if(C){let ot=!1;if(G!==null){let Pt=G.texture.format;ot=x.has(Pt)}if(ot){let Pt=G.texture.type,Gt=g.has(Pt),It=k.getClearColor(),Bt=k.getClearAlpha(),Zt=It.r,se=It.g,ue=It.b;Gt?(y[0]=Zt,y[1]=se,y[2]=ue,y[3]=Bt,Z.clearBufferuiv(Z.COLOR,0,y)):(w[0]=Zt,w[1]=se,w[2]=ue,w[3]=Bt,Z.clearBufferiv(Z.COLOR,0,w))}else rt|=Z.COLOR_BUFFER_BIT}Y&&(rt|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),dt&&(rt|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),rt!==0&&Z.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),F=C},this.dispose=function(){e.removeEventListener("webglcontextlost",Yt,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",Ft,!1),k.dispose(),mt.dispose(),B.dispose(),pt.dispose(),zt.dispose(),N.dispose(),I.dispose(),nt.dispose(),At.dispose(),kt.dispose(),et.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",Eh),wt.removeEventListener("sessionend",Th),Li.stop()};function Yt(C){C.preventDefault(),Bc("WebGLRenderer: Context Lost."),P=!0}function ae(){Bc("WebGLRenderer: Context Restored."),P=!1;let C=Me.autoReset,Y=gt.enabled,dt=gt.autoUpdate,rt=gt.needsUpdate,ot=gt.type;Qt(),Me.autoReset=C,gt.enabled=Y,gt.autoUpdate=dt,gt.needsUpdate=rt,gt.type=ot}function Ft(C){ne("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ve(C){let Y=C.target;Y.removeEventListener("dispose",ve),ze(Y)}function ze(C){mi(C),zt.remove(C)}function mi(C){let Y=zt.get(C).programs;Y!==void 0&&(Y.forEach(function(dt){et.releaseProgram(dt)}),C.isShaderMaterial&&et.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,dt,rt,ot,Pt){Y===null&&(Y=q);let Gt=ot.isMesh&&ot.matrixWorld.determinantAffine()<0,It=ep(C,Y,dt,rt,ot);Et.setMaterial(rt,Gt);let Bt=dt.index,Zt=1;if(rt.wireframe===!0){if(Bt=nt.getWireframeAttribute(dt),Bt===void 0)return;Zt=2}let se=dt.drawRange,ue=dt.attributes.position,Ht=se.start*Zt,de=(se.start+se.count)*Zt;Pt!==null&&(Ht=Math.max(Ht,Pt.start*Zt),de=Math.min(de,(Pt.start+Pt.count)*Zt)),Bt!==null?(Ht=Math.max(Ht,0),de=Math.min(de,Bt.count)):ue!=null&&(Ht=Math.max(Ht,0),de=Math.min(de,ue.count));let Ne=de-Ht;if(Ne<0||Ne===1/0)return;At.setup(ot,rt,It,dt,Bt);let we,Se=ht;if(Bt!==null&&(we=T.get(Bt),Se=Tt,Se.setIndex(we)),ot.isMesh)rt.wireframe===!0?(Et.setLineWidth(rt.wireframeLinewidth*Vt()),Se.setMode(Z.LINES)):Se.setMode(Z.TRIANGLES);else if(ot.isLine){let en=rt.linewidth;en===void 0&&(en=1),Et.setLineWidth(en*Vt()),ot.isLineSegments?Se.setMode(Z.LINES):ot.isLineLoop?Se.setMode(Z.LINE_LOOP):Se.setMode(Z.LINE_STRIP)}else ot.isPoints?Se.setMode(Z.POINTS):ot.isSprite&&Se.setMode(Z.TRIANGLES);if(ot.isBatchedMesh)if(Rt.get("WEBGL_multi_draw"))Se.renderMultiDraw(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount);else{let en=ot._multiDrawStarts,Wt=ot._multiDrawCounts,cn=ot._multiDrawCount,ye=Bt?T.get(Bt).bytesPerElement:1,Bi=zt.get(rt).currentProgram.getUniforms();for(let nn=0;nn<cn;nn++)Bi.setValue(Z,"_gl_DrawID",nn),Se.render(en[nn]/ye,Wt[nn])}else if(ot.isInstancedMesh)Se.renderInstances(Ht,Ne,ot.count);else if(dt.isInstancedBufferGeometry){let en=dt._maxInstanceCount!==void 0?dt._maxInstanceCount:1/0,Wt=Math.min(dt.instanceCount,en);Se.renderInstances(Ht,Ne,Wt)}else Se.render(Ht,Ne)};function wh(C,Y,dt,rt){F!==null&&C.isNodeMaterial&&F.setObject(rt,C),Ut===!0&&Q.setState(C,dt,!1),C.transparent===!0&&C.side===me&&C.forceSinglePass===!1?(C.side=Ue,C.needsUpdate=!0,Zs(C,Y,rt),C.side=Ci,C.needsUpdate=!0,Zs(C,Y,rt),C.side=me):Zs(C,Y,rt)}this.compile=function(C,Y,dt=null){dt===null&&(dt=C),F!==null&&F.renderStart(C,Y,dt),b=B.get(dt),b.init(Y),v.push(b),dt.traverseVisible(function(ot){ot.isLight&&ot.layers.test(Y.layers)&&(b.pushLight(ot),ot.castShadow&&b.pushShadow(ot))}),C!==dt&&C.traverseVisible(function(ot){ot.isLight&&ot.layers.test(Y.layers)&&(b.pushLight(ot),ot.castShadow&&b.pushShadow(ot))}),b.setupLights(),F!==null&&F.updateLights(b.state.lightsArray),qt=this.localClippingEnabled,Ut=Q.init(this.clippingPlanes,qt),Ut===!0&&Q.setGlobalState(this.clippingPlanes,Y),F!==null&&gt.render(b.state.shadowsArray,dt,Y);let rt=new Set;return C.traverse(function(ot){if(!(ot.isMesh||ot.isPoints||ot.isLine||ot.isSprite))return;let Pt=ot.material;if(Pt)if(Array.isArray(Pt))for(let Gt=0;Gt<Pt.length;Gt++){let It=Pt[Gt];wh(It,dt,Y,ot),rt.add(It)}else wh(Pt,dt,Y,ot),rt.add(Pt)}),b=v.pop(),F!==null&&F.renderEnd(),rt},this.compileAsync=function(C,Y,dt=null){let rt=this.compile(C,Y,dt);return new Promise(ot=>{function Pt(){if(rt.forEach(function(Gt){let Bt=zt.get(Gt).currentProgram;(Bt===void 0||Bt.isReady())&&rt.delete(Gt)}),rt.size===0){ot(C);return}setTimeout(Pt,10)}Rt.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let Dl=null;function $f(C){Dl&&Dl(C)}function Eh(){Li.stop()}function Th(){Li.start()}let Li=new bd;Li.setAnimationLoop($f),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(C){Dl=C,wt.setAnimationLoop(C),C===null?Li.stop():Li.start()},wt.addEventListener("sessionstart",Eh),wt.addEventListener("sessionend",Th),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;F!==null&&F.renderStart(C,Y);let dt=wt.enabled===!0&&wt.isPresenting===!0,rt=U!==null&&(G===null||dt)&&U.begin(E,G);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(Y),Y=wt.getCamera()),C.isScene===!0&&C.onBeforeRender(E,C,Y,G),b=B.get(C,v.length),b.init(Y),b.state.textureUnits=pt.getTextureUnits(),v.push(b),Jt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Y.isArrayCamera?St.setFromArrayCamera(Y):_t.setFromProjectionMatrix(Jt,Tn,Y.reversedDepth),qt=this.localClippingEnabled,Ut=Q.init(this.clippingPlanes,qt),S=mt.get(C,m.length),S.init(),m.push(S),this.info.render.frame++,wt.enabled===!0&&wt.isPresenting===!0){let Gt=E.xr.getDepthSensingMesh();Gt!==null&&Ll(Gt,Y,-1/0,E.sortObjects)}Ll(C,Y,0,E.sortObjects),S.finish(),F!==null&&F.updateLights(b.state.lightsArray),E.sortObjects===!0&&S.sort(ut,ft),Ct=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,Ct&&k.addToRenderList(S,C),this.info.autoReset===!0&&this.info.reset(),Ut===!0&&Q.beginShadows();let ot=b.state.shadowsArray;if(gt.render(ot,C,Y),Ut===!0&&Q.endShadows(),(rt&&U.hasRenderPass())===!1){let Gt=S.opaque,It=S.transmissive;if(b.setupLights(),Y.isArrayCamera){let Bt=Y.cameras;if(It.length>0)for(let Zt=0,se=Bt.length;Zt<se;Zt++){let ue=Bt[Zt];Rh(Gt,It,C,ue)}Ct&&k.render(C);for(let Zt=0,se=Bt.length;Zt<se;Zt++){let ue=Bt[Zt];Ah(S,C,ue,ue.viewport)}}else It.length>0&&Rh(Gt,It,C,Y),Ct&&k.render(C),Ah(S,C,Y)}G!==null&&X===0&&(pt.updateMultisampleRenderTarget(G),pt.updateRenderTargetMipmap(G)),rt&&U.end(E),C.isScene===!0&&C.onAfterRender(E,C,Y),At.resetDefaultState(),W=-1,tt=null,v.pop(),v.length>0?(b=v[v.length-1],pt.setTextureUnits(b.state.textureUnits),Ut===!0&&Q.setGlobalState(E.clippingPlanes,b.state.camera)):b=null,m.pop(),m.length>0?S=m[m.length-1]:S=null,F!==null&&F.renderEnd()};function Ll(C,Y,dt,rt){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)dt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)b.pushLight(C),C.castShadow&&b.pushShadow(C);else if(C.isSprite){let Gt=Y.isArrayCamera?St:_t;if(!C.frustumCulled||C.intersectsFrustum(Gt)){rt&&Nt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Jt);let It=I.update(C),Bt=C.material;Bt.visible&&S.push(C,It,Bt,dt,Nt.z,null,Y)}}else if(C.isMesh||C.isLine||C.isPoints){let Gt=Y.isArrayCamera?St:_t;if(!C.frustumCulled||C.intersectsFrustum(Gt)){let It=I.update(C),Bt=C.material;if(rt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Nt.copy(C.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Nt.copy(It.boundingSphere.center)),Nt.applyMatrix4(C.matrixWorld).applyMatrix4(Jt)),Array.isArray(Bt)){let Zt=It.groups;for(let se=0,ue=Zt.length;se<ue;se++){let Ht=Zt[se],de=Bt[Ht.materialIndex];de&&de.visible&&S.push(C,It,de,dt,Nt.z,Ht,Y)}}else Bt.visible&&S.push(C,It,Bt,dt,Nt.z,null,Y)}}}let Pt=C.children;for(let Gt=0,It=Pt.length;Gt<It;Gt++)Ll(Pt[Gt],Y,dt,rt)}function Ah(C,Y,dt,rt){let{opaque:ot,transmissive:Pt,transparent:Gt}=C;b.setupLightsView(dt),Ut===!0&&Q.setGlobalState(E.clippingPlanes,dt),rt&&Et.viewport(st.copy(rt)),ot.length>0&&ao(ot,Y,dt),Pt.length>0&&ao(Pt,Y,dt),Gt.length>0&&ao(Gt,Y,dt),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Rh(C,Y,dt,rt){if((dt.isScene===!0?dt.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[rt.id]===void 0){let Ht=Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[rt.id]=new ke(1,1,{generateMipmaps:!0,type:Ht?tn:xn,minFilter:oi,samples:Math.max(4,$t.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ce.workingColorSpace})}let Pt=b.state.transmissionRenderTarget[rt.id],Gt=rt.viewport||st;Pt.setSize(Gt.z*E.transmissionResolutionScale,Gt.w*E.transmissionResolutionScale);let It=E.getRenderTarget(),Bt=E.getActiveCubeFace(),Zt=E.getActiveMipmapLevel();E.setRenderTarget(Pt),E.getClearColor(K),A=E.getClearAlpha(),A<1&&E.setClearColor(16777215,.5),E.clear(),Ct&&k.render(dt);let se=E.toneMapping;E.toneMapping=Hn;let ue=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),b.setupLightsView(rt),Ut===!0&&Q.setGlobalState(E.clippingPlanes,rt),ao(C,dt,rt),pt.updateMultisampleRenderTarget(Pt),pt.updateRenderTargetMipmap(Pt),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let de=0,Ne=Y.length;de<Ne;de++){let we=Y[de],{object:Se,geometry:en,material:Wt,group:cn}=we;if(Wt.side===me&&Se.layers.test(rt.layers)){let ye=Wt.side;Wt.side=Ue,Wt.needsUpdate=!0,Ch(Se,dt,rt,en,Wt,cn),Wt.side=ye,Wt.needsUpdate=!0,Ht=!0}}Ht===!0&&(pt.updateMultisampleRenderTarget(Pt),pt.updateRenderTargetMipmap(Pt))}E.setRenderTarget(It,Bt,Zt),E.setClearColor(K,A),ue!==void 0&&(rt.viewport=ue),E.toneMapping=se}function ao(C,Y,dt){let rt=Y.isScene===!0?Y.overrideMaterial:null;for(let ot=0,Pt=C.length;ot<Pt;ot++){let Gt=C[ot],{object:It,geometry:Bt,group:Zt}=Gt,se=Gt.material;se.allowOverride===!0&&rt!==null&&(se=rt),It.layers.test(dt.layers)&&Ch(It,Y,dt,Bt,se,Zt)}}function Ch(C,Y,dt,rt,ot,Pt){F!==null&&ot.isNodeMaterial&&F.setObject(C,ot),C.onBeforeRender(E,Y,dt,rt,ot,Pt),C.modelViewMatrix.multiplyMatrices(dt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ot.onBeforeRender(E,Y,dt,rt,C,Pt),ot.transparent===!0&&ot.side===me&&ot.forceSinglePass===!1?(ot.side=Ue,ot.needsUpdate=!0,E.renderBufferDirect(dt,Y,rt,ot,C,Pt),ot.side=Ci,ot.needsUpdate=!0,E.renderBufferDirect(dt,Y,rt,ot,C,Pt),ot.side=me):E.renderBufferDirect(dt,Y,rt,ot,C,Pt),C.onAfterRender(E,Y,dt,rt,ot,Pt)}function Ih(C){let Y=0;for(let dt of C)dt.texture!==null&&Y++;return Y}function Zs(C,Y,dt){Y.isScene!==!0&&(Y=q);let rt=zt.get(C),ot=b.state.lights,Pt=b.state.shadowsArray,Gt=ot.state.version,It=et.getParameters(C,ot.state,Pt,Y,dt,b.state.lightProbeGridArray),Bt=et.getProgramCacheKey(It),Zt=rt.programs;rt.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?Y.environment:null,rt.fog=Y.fog;let se=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;rt.envMap=N.get(C.envMap||rt.environment,se),rt.envMapRotation=rt.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,Zt===void 0&&(C.addEventListener("dispose",ve),Zt=new Map,rt.programs=Zt,rt.programVariants=new Map);let ue=Zt.get(Bt);if(ue!==void 0){if(rt.currentProgram===ue&&rt.lightsStateVersion===Gt)return Uh(C,It),ue}else It.uniforms=et.getUniforms(C),F!==null&&C.isNodeMaterial&&F.build(C,dt,It),C.onBeforeCompile(It,E),ue=et.acquireProgram(It,Bt),Zt.set(Bt,ue),rt.uniforms=It.uniforms;let Ht=rt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ht.clippingPlanes=Q.uniform),Uh(C,It),rt.needsLights=ip(C),rt.lightsStateVersion=Gt,rt.needsLights&&(Ht.ambientLightColor.value=ot.state.ambient,Ht.lightProbe.value=ot.state.probe,Ht.sunLights.value=ot.state.sun,Ht.sunLightShadows.value=ot.state.sunShadow,Ht.directionalLights.value=ot.state.directional,Ht.directionalLightShadows.value=ot.state.directionalShadow,Ht.spotLights.value=ot.state.spot,Ht.spotLightShadows.value=ot.state.spotShadow,Ht.rectAreaLights.value=ot.state.rectArea,Ht.ltc_1.value=ot.state.rectAreaLTC1,Ht.ltc_2.value=ot.state.rectAreaLTC2,Ht.pointLights.value=ot.state.point,Ht.pointLightShadows.value=ot.state.pointShadow,Ht.hemisphereLights.value=ot.state.hemi,Ht.sunShadowMatrix.value=ot.state.sunShadowMatrix,Ht.sunShadowCascade.value=ot.state.sunShadowCascade,Ht.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,Ht.spotLightMatrix.value=ot.state.spotLightMatrix,Ht.spotLightMap.value=ot.state.spotLightMap,Ht.pointShadowMatrix.value=ot.state.pointShadowMatrix),rt.numLightProbeGrids=Ih(b.state.lightProbeGridArray),rt.currentProgram=ue,rt.uniformsList=null,ue}function tp(C,Y,dt,rt,ot){let Pt=zt.get(C),Gt=Pt.currentProgram.id+","+rt+","+ot,It=Pt.programVariants.get(Gt);return It===void 0?(It=Zs(C,Y,dt),Pt.programVariants.set(Gt,It)):(Pt.currentProgram=It,Pt.uniformsList=null,Pt.outputColorSpace=rt,Pt.toneMapping=ot),It}function Ph(C){if(C.uniformsList===null){let Y=C.currentProgram.getUniforms();C.uniformsList=Ns.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function Uh(C,Y){let dt=zt.get(C);dt.outputColorSpace=Y.outputColorSpace,dt.batching=Y.batching,dt.batchingColor=Y.batchingColor,dt.instancing=Y.instancing,dt.instancingColor=Y.instancingColor,dt.instancingMorph=Y.instancingMorph,dt.skinning=Y.skinning,dt.morphTargets=Y.morphTargets,dt.morphNormals=Y.morphNormals,dt.morphColors=Y.morphColors,dt.morphTargetsCount=Y.morphTargetsCount,dt.numClippingPlanes=Y.numClippingPlanes,dt.numIntersection=Y.numClipIntersection,dt.vertexAlphas=Y.vertexAlphas,dt.vertexTangents=Y.vertexTangents,dt.toneMapping=Y.toneMapping}function ep(C,Y,dt,rt,ot){Y.isScene!==!0&&(Y=q),pt.resetTextureUnits();let Pt=Y.fog,Gt=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial?Y.environment:null,It=G===null?E.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:ce.workingColorSpace,Bt=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial&&!rt.envMap||rt.isMeshPhongMaterial&&!rt.envMap,Zt=N.get(rt.envMap||Gt,Bt),se=rt.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,ue=!!dt.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Ht=!!dt.morphAttributes.position,de=!!dt.morphAttributes.normal,Ne=!!dt.morphAttributes.color,we=Hn;rt.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(we=E.toneMapping);let Se=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,en=Se!==void 0?Se.length:0,Wt=zt.get(rt),cn=b.state.lights;if(Ut===!0&&(qt===!0||C!==tt)){let Re=C===tt&&rt.id===W;Q.setState(rt,C,Re)}let ye=!1,Bi=!1;rt.version===Wt.__version?Wt.needsLights&&Wt.lightsStateVersion!==cn.state.version||ot.isBatchedMesh&&Wt.batching===!1||!ot.isBatchedMesh&&Wt.batching===!0||ot.isBatchedMesh&&Wt.batchingColor===!0&&ot._colorsTexture===null||ot.isBatchedMesh&&Wt.batchingColor===!1&&ot._colorsTexture!==null||ot.isInstancedMesh&&Wt.instancing===!1||!ot.isInstancedMesh&&Wt.instancing===!0||ot.isSkinnedMesh&&Wt.skinning===!1||!ot.isSkinnedMesh&&Wt.skinning===!0||ot.isInstancedMesh&&Wt.instancingColor===!0&&ot.instanceColor===null||ot.isInstancedMesh&&Wt.instancingColor===!1&&ot.instanceColor!==null||ot.isInstancedMesh&&Wt.instancingMorph===!0&&ot.morphTexture===null||ot.isInstancedMesh&&Wt.instancingMorph===!1&&ot.morphTexture!==null||Wt.envMap!==Zt||rt.fog===!0&&Wt.fog!==Pt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Q.numPlanes||Wt.numIntersection!==Q.numIntersection)||Wt.vertexAlphas!==se||Wt.vertexTangents!==ue||Wt.morphTargets!==Ht||Wt.morphNormals!==de||Wt.morphColors!==Ne||Wt.morphTargetsCount!==en||Wt.numLightProbeGrids!==Ih(b.state.lightProbeGridArray)?ye=!0:(Wt.outputColorSpace!==It||Wt.toneMapping!==we)&&(Bi=!0):(ye=!0,Wt.__version=rt.version);let nn=Wt.currentProgram;(ye===!0||Bi===!0)&&(nn=Bi===!0?tp(rt,Y,ot,It,we):Zs(rt,Y,ot),F&&rt.isNodeMaterial&&F.onUpdateProgram(rt,nn,Wt));let lo=!1,gi=!1,ki=!1,ge=nn.getUniforms(),Qe=Wt.uniforms;if(Et.useProgram(nn.program)&&(lo=!0,gi=!0,ki=!0),rt.id!==W&&(W=rt.id,gi=!0),lo||tt!==C){Et.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),ge.setValue(Z,"projectionMatrix",C.projectionMatrix),ge.setValue(Z,"viewMatrix",C.matrixWorldInverse);let Ge=ge.map.cameraPosition;Ge!==void 0&&Ge.setValue(Z,lt.setFromMatrixPosition(C.matrixWorld)),$t.logarithmicDepthBuffer&&ge.setValue(Z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&ge.setValue(Z,"isOrthographic",C.isOrthographicCamera===!0),tt!==C&&(tt=C,gi=!0,ki=!0)}if(Wt.needsLights&&(cn.state.sunShadowMap.length>0&&ge.setValue(Z,"sunShadowMap",cn.state.sunShadowMap,pt),cn.state.directionalShadowMap.length>0&&ge.setValue(Z,"directionalShadowMap",cn.state.directionalShadowMap,pt),cn.state.spotShadowMap.length>0&&ge.setValue(Z,"spotShadowMap",cn.state.spotShadowMap,pt),cn.state.pointShadowMap.length>0&&ge.setValue(Z,"pointShadowMap",cn.state.pointShadowMap,pt)),ot.isSkinnedMesh){ge.setOptional(Z,ot,"bindMatrix"),ge.setOptional(Z,ot,"bindMatrixInverse");let Re=ot.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),ge.setValue(Z,"boneTexture",Re.boneTexture,pt))}ot.isBatchedMesh&&(ge.setOptional(Z,ot,"batchingTexture"),ge.setValue(Z,"batchingTexture",ot._matricesTexture,pt),ge.setOptional(Z,ot,"batchingIdTexture"),ge.setValue(Z,"batchingIdTexture",ot._indirectTexture,pt),ge.setOptional(Z,ot,"batchingColorTexture"),ot._colorsTexture!==null&&ge.setValue(Z,"batchingColorTexture",ot._colorsTexture,pt));let Pn=dt.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&it.update(ot,dt,nn),(gi||Wt.receiveShadow!==ot.receiveShadow)&&(Wt.receiveShadow=ot.receiveShadow,ge.setValue(Z,"receiveShadow",ot.receiveShadow)),(rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial)&&rt.envMap===null&&Y.environment!==null&&(Qe.envMapIntensity.value=Y.environmentIntensity),Qe.dfgLUT!==void 0&&(Qe.dfgLUT.value=Y_()),gi){if(ge.setValue(Z,"toneMappingExposure",E.toneMappingExposure),Wt.needsLights&&np(Qe,ki),Pt&&rt.fog===!0&&xt.refreshFogUniforms(Qe,Pt),xt.refreshMaterialUniforms(Qe,rt,$,j,b.state.transmissionRenderTarget[C.id]),Wt.needsLights&&Wt.numLightProbeGrids>0){let Re=_,Ge=0;for(let Jn of b.state.lightProbeGridArray)Jn.texture!==null&&(Re.textures[Ge]=Jn.texture,Re.min[Ge]=Jn.boundingBox.min,Re.max[Ge]=Jn.boundingBox.max,Re.resolution[Ge]=Jn.resolution,Ge++);for(let Jn in Re)Re[Jn].length=Ge;Qe.probesSH.value=Re.textures,Qe.probesMin.value=Re.min,Qe.probesMax.value=Re.max,Qe.probesResolution.value=Re.resolution}Ns.upload(Z,Ph(Wt),Qe,pt)}if(rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Ns.upload(Z,Ph(Wt),Qe,pt),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&ge.setValue(Z,"center",ot.center),ge.setValue(Z,"modelViewMatrix",ot.modelViewMatrix),ge.setValue(Z,"normalMatrix",ot.normalMatrix),ge.setValue(Z,"modelMatrix",ot.matrixWorld),rt.uniformsGroups!==void 0){let Re=rt.uniformsGroups;for(let Ge=0,Jn=Re.length;Ge<Jn;Ge++){let Fh=Re[Ge];kt.update(Fh,nn),kt.bind(Fh,nn)}}return nn}function np(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.sunLights.needsUpdate=Y,C.sunLightShadows.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function ip(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(C,Y,dt){let rt=zt.get(C);rt.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),zt.get(C.texture).__webglTexture=Y,zt.get(C.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:dt,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Y){let dt=zt.get(C);dt.__webglFramebuffer=Y,dt.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(C,Y=0,dt=0){G=C,z=Y,X=dt;let rt=null,ot=!1,Pt=!1;if(C){let It=zt.get(C);if(It.__useDefaultFramebuffer!==void 0){Et.bindFramebuffer(Z.FRAMEBUFFER,It.__webglFramebuffer),st.copy(C.viewport),O.copy(C.scissor),at=C.scissorTest,Et.viewport(st),Et.scissor(O),Et.setScissorTest(at),W=-1;return}else if(It.__webglFramebuffer===void 0)pt.setupRenderTarget(C);else if(It.__hasExternalTextures)pt.rebindTextures(C,zt.get(C.texture).__webglTexture,zt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let se=C.depthTexture;if(It.__boundDepthTexture!==se){if(se!==null&&zt.has(se)&&(C.width!==se.image.width||C.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pt.setupDepthRenderbuffer(C)}}let Bt=C.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Pt=!0);let Zt=zt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Zt[Y])?rt=Zt[Y][dt]:rt=Zt[Y],ot=!0):C.samples>0&&pt.useMultisampledRTT(C)===!1?rt=zt.get(C).__webglMultisampledFramebuffer:Array.isArray(Zt)?rt=Zt[dt]:rt=Zt,st.copy(C.viewport),O.copy(C.scissor),at=C.scissorTest}else st.copy(ct).multiplyScalar($).floor(),O.copy(vt).multiplyScalar($).floor(),at=J;if(dt!==0&&(rt=L),Et.bindFramebuffer(Z.FRAMEBUFFER,rt)&&Et.drawBuffers(C,rt),Et.viewport(st),Et.scissor(O),Et.setScissorTest(at),ot){let It=zt.get(C.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+Y,It.__webglTexture,dt)}else if(Pt){let It=Y;for(let Bt=0;Bt<C.textures.length;Bt++){let Zt=zt.get(C.textures[Bt]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+Bt,Zt.__webglTexture,dt,It)}}else if(C!==null&&dt!==0){let It=zt.get(C.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,It.__webglTexture,dt)}W=-1};function Nh(C){let Y=zt.get(C);return(Y.__readFormat!==C.format||Y.__readType!==C.type)&&(Y.__readFormat=C.format,Y.__readType=C.type,Y.__formatReadable=$t.textureFormatReadable(C.format),Y.__typeReadable=$t.textureTypeReadable(C.type)),Y}this.readRenderTargetPixels=function(C,Y,dt,rt,ot,Pt,Gt,It=0){if(!(C&&C.isWebGLRenderTarget)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=zt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Gt!==void 0&&(Bt=Bt[Gt],Array.isArray(Bt)&&(Bt=Bt[0])),Bt){Et.bindFramebuffer(Z.FRAMEBUFFER,Bt);try{let Zt=C.textures[It],se=Zt.format,ue=Zt.type;C.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+It);let Ht=Nh(Zt);if(Ht.__formatReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ht.__typeReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-rt&&dt>=0&&dt<=C.height-ot&&Z.readPixels(Y,dt,rt,ot,bt.convert(se),bt.convert(ue),Pt)}finally{let Zt=G!==null?zt.get(G).__webglFramebuffer:null;Et.bindFramebuffer(Z.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(C,Y,dt,rt,ot,Pt,Gt,It=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=zt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Gt!==void 0&&(Bt=Bt[Gt],Array.isArray(Bt)&&(Bt=Bt[0])),Bt)if(Y>=0&&Y<=C.width-rt&&dt>=0&&dt<=C.height-ot){Et.bindFramebuffer(Z.FRAMEBUFFER,Bt);let Zt=C.textures[It],se=Zt.format,ue=Zt.type;C.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+It);let Ht=Nh(Zt);if(Ht.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ht.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let de=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,de),Z.bufferData(Z.PIXEL_PACK_BUFFER,Pt.byteLength,Z.STREAM_READ),Z.readPixels(Y,dt,rt,ot,bt.convert(se),bt.convert(ue),0),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null);let Ne=G!==null?zt.get(G).__webglFramebuffer:null;Et.bindFramebuffer(Z.FRAMEBUFFER,Ne);let we=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await ju(Z,we,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,de),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Pt),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null),Z.deleteBuffer(de),Z.deleteSync(we),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Y=null,dt=0){let rt=Math.pow(2,-dt),ot=Math.floor(C.image.width*rt),Pt=Math.floor(C.image.height*rt),Gt=Y!==null?Y.x:0,It=Y!==null?Y.y:0;pt.setTexture2D(C,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,dt,0,0,Gt,It,ot,Pt),Et.unbindTexture()},this.copyTextureToTexture=function(C,Y,dt=null,rt=null,ot=0,Pt=0){let Gt,It,Bt,Zt,se,ue,Ht,de,Ne,we=C.isCompressedTexture?C.mipmaps[Pt]:C.image;if(dt!==null)Gt=dt.max.x-dt.min.x,It=dt.max.y-dt.min.y,Bt=dt.isBox3?dt.max.z-dt.min.z:1,Zt=dt.min.x,se=dt.min.y,ue=dt.isBox3?dt.min.z:0;else{let ge=Math.pow(2,-ot);Gt=Math.floor(we.width*ge),It=Math.floor(we.height*ge),C.isDataArrayTexture?Bt=we.depth:C.isData3DTexture?Bt=Math.floor(we.depth*ge):Bt=1,Zt=0,se=0,ue=0}rt!==null?(Ht=rt.x,de=rt.y,Ne=rt.z):(Ht=0,de=0,Ne=0);let Se=bt.convert(Y.format),en=bt.convert(Y.type),Wt;Y.isData3DTexture?(pt.setTexture3D(Y,0),Wt=Z.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(pt.setTexture2DArray(Y,0),Wt=Z.TEXTURE_2D_ARRAY):(pt.setTexture2D(Y,0),Wt=Z.TEXTURE_2D),Et.activeTexture(Z.TEXTURE0),Et.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,Y.flipY),Et.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),Et.pixelStorei(Z.UNPACK_ALIGNMENT,Y.unpackAlignment);let cn=Et.getParameter(Z.UNPACK_ROW_LENGTH),ye=Et.getParameter(Z.UNPACK_IMAGE_HEIGHT),Bi=Et.getParameter(Z.UNPACK_SKIP_PIXELS),nn=Et.getParameter(Z.UNPACK_SKIP_ROWS),lo=Et.getParameter(Z.UNPACK_SKIP_IMAGES);Et.pixelStorei(Z.UNPACK_ROW_LENGTH,we.width),Et.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,we.height),Et.pixelStorei(Z.UNPACK_SKIP_PIXELS,Zt),Et.pixelStorei(Z.UNPACK_SKIP_ROWS,se),Et.pixelStorei(Z.UNPACK_SKIP_IMAGES,ue);let gi=C.isDataArrayTexture||C.isData3DTexture,ki=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){let ge=zt.get(C),Qe=zt.get(Y),Pn=zt.get(ge.__renderTarget),Re=zt.get(Qe.__renderTarget);Et.bindFramebuffer(Z.READ_FRAMEBUFFER,Pn.__webglFramebuffer),Et.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ge=0;Ge<Bt;Ge++)gi&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,zt.get(C).__webglTexture,ot,ue+Ge),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,zt.get(Y).__webglTexture,Pt,Ne+Ge)),Z.blitFramebuffer(Zt,se,Zt+Gt,se+It,Ht,de,Ht+Gt,de+It,Z.DEPTH_BUFFER_BIT,Z.NEAREST);Et.bindFramebuffer(Z.READ_FRAMEBUFFER,null),Et.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(ot!==0||C.isRenderTargetTexture||zt.has(C)){let ge=zt.get(C),Qe=zt.get(Y);Et.bindFramebuffer(Z.READ_FRAMEBUFFER,R),Et.bindFramebuffer(Z.DRAW_FRAMEBUFFER,V);for(let Pn=0;Pn<Bt;Pn++)gi?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,ge.__webglTexture,ot,ue+Pn):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,ge.__webglTexture,ot),ki?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Qe.__webglTexture,Pt,Ne+Pn):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Qe.__webglTexture,Pt),ot!==0?Z.blitFramebuffer(Zt,se,Zt+Gt,se+It,Ht,de,Ht+Gt,de+It,Z.COLOR_BUFFER_BIT,Z.NEAREST):ki?Z.copyTexSubImage3D(Wt,Pt,Ht,de,Ne+Pn,Zt,se,Gt,It):Z.copyTexSubImage2D(Wt,Pt,Ht,de,Zt,se,Gt,It);Et.bindFramebuffer(Z.READ_FRAMEBUFFER,null),Et.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else ki?C.isDataTexture||C.isData3DTexture?Z.texSubImage3D(Wt,Pt,Ht,de,Ne,Gt,It,Bt,Se,en,we.data):Y.isCompressedArrayTexture?Z.compressedTexSubImage3D(Wt,Pt,Ht,de,Ne,Gt,It,Bt,Se,we.data):Z.texSubImage3D(Wt,Pt,Ht,de,Ne,Gt,It,Bt,Se,en,we):C.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Pt,Ht,de,Gt,It,Se,en,we.data):C.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Pt,Ht,de,we.width,we.height,Se,we.data):Z.texSubImage2D(Z.TEXTURE_2D,Pt,Ht,de,Gt,It,Se,en,we);Et.pixelStorei(Z.UNPACK_ROW_LENGTH,cn),Et.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,ye),Et.pixelStorei(Z.UNPACK_SKIP_PIXELS,Bi),Et.pixelStorei(Z.UNPACK_SKIP_ROWS,nn),Et.pixelStorei(Z.UNPACK_SKIP_IMAGES,lo),Pt===0&&Y.generateMipmaps===!0&&Y.mipmapsAutoUpdate===!0&&Z.generateMipmap(Wt),Et.unbindTexture()},this.initRenderTarget=function(C){zt.get(C).__webglFramebuffer===void 0&&pt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?pt.setTextureCube(C,0):C.isData3DTexture?pt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?pt.setTexture2DArray(C,0):pt.setTexture2D(C,0),Et.unbindTexture()},this.resetState=function(){z=0,X=0,G=null,Et.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}};var Ds={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var bn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},X_=new Ji(-1,1,1,-1,0,1),th=class extends oe{constructor(){super(),this.setAttribute("position",new Ot([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ot([0,2,0,0,2,0],2))}},J_=new th,Pi=class{constructor(t){this._mesh=new te(J_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,X_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var pl=class extends bn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ye?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ci.clone(t.uniforms),this.material=new Ye({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Pi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var qr=class extends bn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ml=class extends bn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var gl=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Dt);this._width=n.width,this._height=n.height,e=new ke(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:tn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new pl(Ds),this.copyPass.material.blending=ri,this.timer=new Rr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}qr!==void 0&&(o instanceof qr?n=!0:o instanceof ml&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Dt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var xl=class extends bn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Mt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Fd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Mt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ls=class i extends bn{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Dt(t.x,t.y):new Dt(256,256),this.clearColor=new Mt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ke(r,o,{type:tn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){let d=new ke(r,o,{type:tn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+c,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new ke(r,o,{type:tn,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+c,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=Fd;this.highPassUniforms=ci.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ye({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new Dt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ci.clone(Ds.uniforms),this.blendMaterial=new Ye({uniforms:this.copyUniforms,vertexShader:Ds.vertexShader,fragmentShader:Ds.fragmentShader,premultipliedAlpha:!0,blending:pn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Mt,this._oldClearAlpha=1,this._basic=new re,this._fsQuad=new Pi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Dt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,h=a+l;s.push((o*a+(o+1)*l)/h),r.push(h)}return new Ye({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Dt(.5,.5)},direction:{value:new Dt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new Ye({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Ls.BlurDirectionX=new Dt(1,0);Ls.BlurDirectionY=new Dt(0,1);var jr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var _l=class extends bn{constructor(){super(),this.isOutputPass=!0,this.uniforms=ci.clone(jr.uniforms),this.material=new Es({name:jr.name,uniforms:this.uniforms,vertexShader:jr.vertexShader,fragmentShader:jr.fragmentShader}),this._fsQuad=new Pi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ce.getTransfer(this._outputColorSpace)===_e&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Pr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ur?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Nr?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ji?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Dr?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Lr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Fr&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function yl(i,t,{fog:e=[40,120],light:n="fixed",ambient:s=.6,glow:r=null}={}){let o=new ul({antialias:!0});o.setPixelRatio(Math.min(globalThis.devicePixelRatio||1,2)),o.setClearColor(new Mt(t.bg)),i.appendChild(o.domElement),r&&(o.toneMapping=ji);let a=new hr;e&&(a.fog=new cr(new Mt(t.bg),e[0],e[1]));let l=new on(50,1,.1,400);a.add(new Ar(16777215,s));let h=new Tr(16777215,2.2);n==="camera"?(h.position.set(-.5,.9,.45),l.add(h),l.add(h.target),h.target.position.set(0,0,-1),a.add(l)):(h.position.set(20,30,25),a.add(h));function c(){let v=i.clientWidth||300,U=i.clientHeight||300;o.setSize(v,U),d&&(d.setPixelRatio(o.getPixelRatio()),d.setSize(v,U)),l.aspect=v/U,l.updateProjectionMatrix()}let d=null;r&&(d=new gl(o),d.addPass(new xl(a,l)),d.addPass(new Ls(new Dt(256,256),r.strength??.8,r.radius??.6,r.threshold??.55)),d.addPass(new _l)),c();let u=new H,f=new H,p=new An,M=new H,x=new Xt,g=new H,y=1,w="",_=()=>{let v=0;return a.traverse(U=>{(U.isMesh||U.isLine||U.isPoints)&&!U.userData.backdrop&&(v+=1+(U.isInstancedMesh?U.count:0)+(U.geometry&&U.geometry.attributes.position?U.geometry.attributes.position.count:0))}),v},S=v=>{v.sort((E,P)=>E-P);let U=v.length;return(v[Math.floor(U*.02)]+v[Math.min(U-1,Math.floor(U*.98))])/2};function b(v){a.updateMatrixWorld(!0);let U=[];a.traverse(L=>{if(!(!(L.isMesh||L.isLine||L.isPoints)||L.userData.backdrop)){if(L.isInstancedMesh)for(let R=0;R<L.count;R++)L.getMatrixAt(R,x),U.push(M.setFromMatrixPosition(x).applyMatrix4(L.matrixWorld).clone());else if(p.makeEmpty().expandByObject(L),!p.isEmpty())for(let R=0;R<8;R++)U.push(g.set(R&1?p.max.x:p.min.x,R&2?p.max.y:p.min.y,R&4?p.max.z:p.min.z).clone())}}),w=_();let E=U.filter(L=>Number.isFinite(L.x+L.y+L.z));if(!E.length){u.set(0,0,0),y=1;return}u.set(S(E.map(L=>L.x)),S(E.map(L=>L.y)),S(E.map(L=>L.z)));let P=E.map(L=>L.distanceTo(u)).sort((L,R)=>L-R),F=P[Math.min(P.length-1,Math.floor(P.length*.98))]*1.05;if(!(F>0)){y=1;return}y=Math.max(.3,Math.min(30,2.4*F/v))}let m=null;return{renderer:o,scene:a,camera:l,resize:c,canvas:o.domElement,fit:b,changed:()=>_()!==w,centre:u,orbit(v,U,E,P){let F=y/Math.min(1,l.aspect*1.15),L=E*F,R=P?(f.set(u.x+P.x*L,u.y,u.z+P.z*L),f):u;e&&(a.fog.near=e[0]*F,a.fog.far=e[1]*F),l.position.set(R.x+Math.sin(v)*Math.cos(U)*L,R.y+Math.sin(U)*L,R.z+Math.cos(v)*Math.cos(U)*L),l.lookAt(R),m&&m.position.copy(l.position),l.updateMatrixWorld()},sky({top:v,haze:U,stars:E=0,starColor:P="#ffffff"}){m&&(a.remove(m),m.traverse(W=>{W.geometry&&(W.geometry.dispose(),W.material.dispose())}));let F=300,L=new pe(F,24,16),R=L.getAttribute("position"),V=[],z=new Mt(U),X=new Mt(v),G=new Mt;for(let W=0;W<R.count;W++){let tt=Math.max(0,Math.min(1,R.getY(W)/F/.5));G.copy(z).lerp(X,tt*tt*(3-2*tt)),V.push(G.r,G.g,G.b)}if(L.setAttribute("color",new Ot(V,3)),m=new te(L,new re({vertexColors:!0,side:Ue,fog:!1,depthTest:!1,depthWrite:!1})),m.renderOrder=-10,m.frustumCulled=!1,m.userData.backdrop=!0,E>0){let W=[];for(let st=0;st<E;st++){let O=st*2654435761%6283/1e3,at=.12+st*40503%1e3/1e3*.85,K=Math.sqrt(1-at*at);W.push(Math.cos(O)*K*F*.98,at*F*.98,Math.sin(O)*K*F*.98)}let tt=new Hi(new oe().setAttribute("position",new Ot(W,3)),new Ei({color:P,size:1.6,sizeAttenuation:!1,fog:!1,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.8}));tt.renderOrder=-9,tt.frustumCulled=!1,tt.userData.backdrop=!0,m.add(tt)}a.add(m),m.position.copy(l.position),o.setClearColor(z),e&&a.fog.color.copy(z)},render(){d?d.render():o.render(a,l)},snapshot(){return this.render(),o.domElement.toDataURL("image/png")},dispose(){a.traverse(v=>{v.geometry&&v.geometry.dispose(),v.material&&v.material.dispose(),v.isInstancedMesh&&v.dispose()}),d&&d.dispose(),o.dispose(),o.domElement.remove()}}}function Dd(i,{yaw:t=.6,pitch:e=.3,dist:n=48,min:s=15,max:r=110,minPitch:o=.3,maxPitch:a=1.4,pan:l=!1,onChange:h,onClick:c,onHover:d}){let u=i.canvas,f={yaw:t,pitch:e,dist:n,x:0,z:0},p=new Map,M=e,x=.75,g=!1,y=null,w=0;u.style.touchAction="none";let _=E=>Math.max(s,Math.min(r,E)),S=E=>Math.max(o,Math.min(a,E)),b=E=>Math.max(-.7,Math.min(.7,E)),m=(E,P)=>{let F=2*Math.tan(25*Math.PI/180)/(u.clientHeight||300);f.x=b(f.x-(Math.cos(f.yaw)*E+Math.sin(f.yaw)*P)*F),f.z=b(f.z+(Math.sin(f.yaw)*E-Math.cos(f.yaw)*P)*F)},v=()=>{let[E,P]=[...p.values()];return Math.hypot(E.x-P.x,E.y-P.y)},U={pointerdown(E){p.set(E.pointerId,{x:E.clientX,y:E.clientY});try{u.setPointerCapture(E.pointerId)}catch{}p.size===1?(g=!1,y={x:E.clientX,y:E.clientY}):(g=!0,w=v())},pointermove(E){let P=p.get(E.pointerId);if(!P){E.pointerType==="mouse"&&d&&d(E.clientX,E.clientY);return}let F=E.clientX-P.x,L=E.clientY-P.y;if(P.x=E.clientX,P.y=E.clientY,p.size===2){let R=v();w>0&&R>0&&(f.dist=_(f.dist*w/R),h()),w=R;return}!g&&Math.abs(E.clientX-y.x)+Math.abs(E.clientY-y.y)>4&&(g=!0),g&&(l?m(F,L):(f.yaw-=F*.008,f.pitch=S(f.pitch+L*.008)),h())},pointerup(E){p.delete(E.pointerId)&&!g&&!p.size&&c&&c(E.clientX,E.clientY)},pointercancel(E){p.delete(E.pointerId)},wheel(E){E.preventDefault(),f.dist=_(f.dist*(1+Math.sign(E.deltaY)*.08)),h()}};for(let[E,P]of Object.entries(U))u.addEventListener(E,P,{passive:E!=="wheel"});return{get yaw(){return f.yaw},get pitch(){return f.pitch},get dist(){return f.dist},get x(){return f.x},get z(){return f.z},set(E){Object.assign(f,E),f.dist=_(f.dist),f.pitch=S(f.pitch),f.x=b(f.x),f.z=b(f.z),h()},get tilted(){return f.pitch<M-.2},tilt(E=!(f.pitch<M-.2)){return f.pitch=S(E?x:M),h(),E},apply(){i.orbit(f.yaw,f.pitch,f.dist,f)},dispose(){for(let[E,P]of Object.entries(U))u.removeEventListener(E,P)}}}var Ml=new H;function Bs(i,t){let e=i.camera,n=i.canvas.clientWidth,s=i.canvas.clientHeight;Ml.set(t[0],t[1],t[2]).applyMatrix4(e.matrixWorldInverse);let r=-Ml.z;if(r<=e.near)return null;let o=s/(2*Math.tan(e.fov*Math.PI/360));return{x:n/2+Ml.x*o/r,y:s/2-Ml.y*o/r,depth:r,px:o/r}}function Ld(i,t,e,n,s=8){let r=null,o=1/0,a=null,l=1/0;for(let h of t){let c=Bs(i,h.at);if(!c)continue;let d=Math.hypot(c.x-e,c.y-n),u=h.r*c.px;d<=u?c.depth<o&&(o=c.depth,r=h.key):d-u<=s&&d-u<l&&(l=d-u,a=h.key)}return r||a}var Qr=(i,t)=>(Object.assign(i.style,t),i);function Bd(i,t){getComputedStyle(i).position==="static"&&(i.style.position="relative");let e=`0 0 3px ${t.bg}, 0 0 3px ${t.bg}, 0 1px 2px ${t.bg}`,n=`color-mix(in srgb, ${t.bg} 72%, transparent)`,s=(E,P,F)=>{let L=document.createElement(E);return Qr(L,P),(F||r).appendChild(L),L},r=Qr(document.createElement("div"),{position:"absolute",inset:"0",pointerEvents:"none",overflow:"hidden",font:"13px system-ui, sans-serif",color:t.fg,userSelect:"none"});r.className="vgv-frame",i.appendChild(r);let o=s("div",{position:"absolute",left:"12px",top:"10px",right:"12px",color:t.muted,textShadow:e});o.className="vgv-stat";let a=s("div",{position:"absolute",left:"12px",top:"34px",right:"12px",display:"flex",flexWrap:"wrap",gap:"2px 12px",fontSize:"11px",color:t.muted,textShadow:e});a.className="vgv-legend";let l=s("div",{position:"absolute",left:"10px",right:"10px",bottom:"112px",maxHeight:"55%",overflowY:"auto",display:"none",flexDirection:"column",gap:"8px",padding:"10px 12px",borderRadius:"10px",background:t.bg,border:`1px solid ${t.muted}`,pointerEvents:"auto",userSelect:"text"});l.className="vgv-insights";let h=s("div",{position:"absolute",top:"34px",left:"0",right:"0",display:"none",justifyContent:"center"}),c=s("div",{position:"absolute",inset:"0"});c.className="vgv-labels";let d=s("div",{position:"absolute",inset:"0",pointerEvents:"none"});d.className="vgv-rings";let u=s("div",{position:"absolute",left:"0",right:"0",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",padding:"0 12px"});u.className="vgv-controls";let f=s("div",{position:"absolute",display:"none",maxWidth:"260px",padding:"4px 8px",borderRadius:"6px",background:t.bg,border:`1px solid ${t.muted}`,color:t.fg,fontSize:"12px"});f.className="vgv-tip",r.appendChild(l);let p=40,M=24;function x(E,{label:P,title:F,run:L,off:R},V){let z=s("button",Object.assign({pointerEvents:R?"none":"auto",cursor:"pointer",minHeight:p+"px",height:"auto",minWidth:p+"px",width:"auto",padding:"6px 14px",margin:"0",borderRadius:"8px",border:`1px solid ${t.muted}`,background:t.bg,color:t.fg,font:"600 13px system-ui, sans-serif",boxShadow:"none",opacity:R?"0.35":"1",lineHeight:"1.2"},V||{}),E);return z.type="button",z.textContent=P,z.disabled=!!R,F&&(z.title=F,z.setAttribute("aria-label",F)),z.addEventListener("click",X=>{X.stopPropagation(),L()}),z}let g=E=>{let P=E.canvas.getBoundingClientRect(),F=r.getBoundingClientRect();return{x:P.left-F.left,y:P.top-F.top}},y=[],w=null,_=!1,S={},b=null,m=[],v=()=>{let E=a.querySelector(".vgv-mark");if(E&&E.remove(),!b)return;let P=s("span",{display:"inline-flex",alignItems:"center",gap:"5px"},a);P.className="vgv-mark",s("i",{width:"9px",height:"9px",borderRadius:"50%",border:`2px solid ${t.warn}`,boxSizing:"border-box"},P),P.append(b)},U=()=>{if(l.style.display=w&&_?"flex":"none",l.replaceChildren(),!(!w||!_)){if(w.plain){let E=s("div",{color:t.fg,lineHeight:"1.35",fontWeight:"600"},l);E.textContent=w.plain}w.about&&(s("div",{color:t.fg,lineHeight:"1.35"},l).textContent=w.about);for(let E of w.insights||[]){let P=s("div",{display:"flex",gap:"8px",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"},l);s("div",{color:t.muted,flex:"1 1 160px",lineHeight:"1.35"},P).textContent=E.text;let F=[...E.run?[{label:E.label||"Show",title:E.title||E.label||"Show",run:E.run}]:[],...E.extra||[]];for(let L of F)x(P,L,{minHeight:p+"px",padding:"4px 10px",fontWeight:"500"})}}};return{stat(E){o.textContent=E||""},explain(E){w=E||null,a.replaceChildren();for(let P of w&&w.legend||[]){let F=s("span",{display:"inline-flex",alignItems:"center",gap:"5px"},a);s("i",{width:"9px",height:"9px",borderRadius:"50%",background:P.color,display:"inline-block",flex:"none"},F),s("span",{},F).textContent=P.text}w||(_=!1),v(),U(),this.controls(S)},card(E){_=!!E&&!!w,U(),this.controls(S)},mark(E){b=E||null,v()},rings(E,P){for(;m.length<E.length;){let L=s("div",{position:"absolute",left:"0",top:"0",borderRadius:"50%",boxSizing:"border-box",willChange:"transform"},d);m.push(L)}let F=g(P);m.forEach((L,R)=>{let V=E[R],z=V&&Bs(P,V.at);if(!z){L.style.display="none";return}z.x+=F.x,z.y+=F.y;let X=Math.max(4,Math.min(24,V.r*z.px))+4,G=2*X+(V.n>1?8:0);Qr(L,{display:"",width:G+"px",height:G+"px",border:`2px solid ${t.warn}`,boxShadow:V.n>1?`inset 0 0 0 2px transparent, inset 0 0 0 3.5px ${t.warn}`:"none",transform:`translate(${Math.round(z.x-G/2)}px, ${Math.round(z.y-G/2)}px)`})})},controls(E={}){S=E;let{at:P="bottom",lines:F=[],buttons:L=[]}=E,R=w&&P==="bottom"?[...L,{label:_?"Close":"Insights",title:_?"Close the insights":"How the notes relate to this view and how to improve them",run:()=>{_=!_,U(),this.controls(S)}}]:L;if(u.replaceChildren(),Qr(u,P==="centre"?{top:"50%",bottom:"auto",transform:"translateY(-50%)"}:{top:"auto",bottom:"18px",transform:"none"}),F.forEach((V,z)=>{s("div",{textAlign:"center",textShadow:e,color:z||P!=="centre"?t.muted:t.fg,fontWeight:z||P!=="centre"?"400":"600",fontSize:z||P!=="centre"?"13px":"14px"},u).textContent=V}),R.length){let V=s("div",{display:"flex",gap:"8px",alignItems:"center",justifyContent:"center",maxWidth:"100%"},u);R.forEach(z=>x(V,z,z.wide?{maxWidth:"70vw",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}:null))}},chip(E,P){h.replaceChildren(),h.style.display=E?"flex":"none",E&&x(h,{label:`${E}  \u2715`,title:`${E}. Clear`,run:P},{borderRadius:"18px",fontWeight:"400"})},labels(E){c.replaceChildren(),y=E.map(P=>{let F={position:"absolute",left:"0",top:"0",whiteSpace:"nowrap",color:P.color||t.fg,textShadow:e,font:`${P.strong?"700 15px":"12px"} system-ui, sans-serif`,willChange:"transform",background:n,borderRadius:"5px",padding:"1px 5px"},L=P.run?x(c,{label:P.text,title:P.title,run:P.run},Object.assign(F,{minHeight:M+"px",minWidth:M+"px",padding:"3px 5px",border:"none",background:n})):s("div",F,c);return P.run||(L.textContent=P.text),{l:P,n:L,w:L.offsetWidth,h:L.offsetHeight}})},tip(E,P,F){f.style.display=E?"block":"none",E&&(f.textContent=E,Qr(f,{left:Math.max(4,Math.min(r.clientWidth-264,P+14))+"px",top:Math.max(4,F+16)+"px"}))},place(E){let P=r.clientWidth,F=r.clientHeight,L=[],R=g(E);for(let{l:V,n:z,w:X,h:G}of y){let W=Bs(E,V.at);W&&(W.x+=R.x,W.y+=R.y);let tt=!!W&&W.x>-X&&W.x<P+X&&W.y>-G&&W.y<F+G,st=0,O=0;tt&&(st=Math.max(6,Math.min(P-X-6,V.side==="right"?W.x+(V.dx||0):W.x-X/2)),O=Math.max(34+(a.offsetHeight?a.offsetHeight+6:0),Math.min(F-110,W.y+(V.dy||0)-G/2)),tt=!L.some(at=>st<at[0]+at[2]&&st+X>at[0]&&O<at[1]+at[3]&&O+G>at[1])),z.style.display=tt?"":"none",tt&&(z.style.transform=`translate(${Math.round(st)}px, ${Math.round(O)}px)`,L.push([st,O,X,G]))}},dispose(){r.remove()}}}function kd(i,t,e){let n=yl(i,e.theme,t.stage),s=Bd(i,e.theme),r=0,o=!1,a=null,l=new Map,h=!1,c=0,d=!!e.motion&&!(globalThis.matchMedia&&globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches);n.canvas.addEventListener("pointerenter",()=>{h=!0}),n.canvas.addEventListener("pointerleave",()=>{h=!1});let u=()=>s.rings(l.size?y.targets().filter(_=>_.key.kind==="note"&&l.has(_.key.id)).map(_=>({at:_.at,r:_.r,n:l.get(_.key.id)})):[],n),f=()=>{n.changed()&&w(),g.apply(),y.frame&&y.frame(),s.place(n),u()},p=()=>{if(r=0,!o){if(d){let _=performance.now(),S=Math.min(.1,(_-c)/1e3);c=_,y.tick&&y.tick(_/1e3,S),t.drift&&!h&&g.set({yaw:g.yaw+S*t.drift})}f(),n.render(),d&&M()}},M=()=>{!r&&!o&&(r=requestAnimationFrame(p))},x=(_,S)=>{let b=n.canvas.getBoundingClientRect();return g.apply(),Ld(n,y.targets(),_-b.left,S-b.top)},g=Dd(n,{...t.home,onChange:M,onClick(_,S){let b=x(_,S);b&&(y.click(b),M())},onHover(_,S){let b=x(_,S),m=n.canvas.getBoundingClientRect();n.canvas.style.cursor=b?"pointer":"",s.tip(b&&b.tip?b.tip:null,_-m.left,S-m.top),(b&&b.kind+b.id)!==(a&&a.kind+a.id)&&(a=b,y.hover&&(y.hover(b),M()))}}),y=t.build({stage:n,frame:s,orbit:g,invalidate:M,...e}),w=()=>n.fit(t.home&&t.home.dist||48);return w(),M(),{view:t.id,resize(){n.resize(),M()},keyAt:x,noteAt(_,S){let b=x(_,S);return b&&b.kind==="note"?b.id:null},pageAt(_){g.apply();let S=Bs(n,_),b=n.canvas.getBoundingClientRect();return S&&{x:S.x+b.left,y:S.y+b.top}},mark(_,S){l=_ instanceof Map?_:new Map(Object.entries(_||{})),s.mark(l.size?S||"needs attention":null),M()},update(_){y.update(_||{}),w(),M()},stat:()=>y.stat(),today:()=>y.today?y.today():null,turn(_){return _&&g.set(_),{yaw:g.yaw,pitch:g.pitch,dist:g.dist}},snapshot(){return f(),n.snapshot()},api:y.api||{},dispose(){o=!0,cancelAnimationFrame(r),g.dispose(),y.dispose&&y.dispose(),s.dispose(),n.dispose()}}}var q_=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],yt=(i,t)=>`${i} ${t}${i===1?"":"s"}`,ee=(i,t)=>i.length>t?i.slice(0,t-1)+"\u2026":i,Ui=i=>{let[,t,e]=i.split("-");return`${q_[+t-1]} ${+e}`},vl=(i,t)=>Math.round(Math.abs(Date.parse(t)-Date.parse(i))/864e5);function j_(i,t=18){let e=i.length,n=Math.PI*(3-Math.sqrt(5));return i.map((s,r)=>{let o=e>1?1-r/(e-1)*2:0,a=Math.sqrt(1-o*o),l=r*n;return{x:Math.cos(l)*a*t,y:o*t,z:Math.sin(l)*a*t,size:.5+Math.sqrt((s.inlinks||0)+(s.outlinks||0))*.35}})}var Od={id:"bodies",name:"Notes",hint:"Every note as a sphere",home:{yaw:.6,pitch:.3,dist:48,min:15,max:110},build({stage:i,frame:t,data:e,onOpen:n}){let s=e.nodes,r=j_(s),o=new fe(new pe(1,20,14),new Ce({roughness:.5}),Math.max(s.length,1));o.count=s.length;let a=new Xt,l=new Mt;r.forEach((d,u)=>{a.makeScale(d.size,d.size,d.size).setPosition(d.x,d.y,d.z),o.setMatrixAt(u,a),o.setColorAt(u,l.setHSL((s[u].cluster||0)*.137%1,.6,.55))}),i.scene.add(o);let h=r.map((d,u)=>({at:[d.x,d.y,d.z],r:d.size,key:{kind:"note",id:s[u].id,tip:s[u].name}})),c=()=>yt(s.length,"note");return t.stat(c()),{targets:()=>h,click:d=>n(d.id),update(){},stat:c}}};var Vd={source:"PDB 5F9R (Jiang et al., Science 351:867, 2016) and 1BNA (Drew et al., PNAS 78:2179, 1981); public domain",q:.55914,lo:[-59.037,-52.177,-45.243],radius:1.8,protein:8622,rna:[[1,23],[2,18],[3,14],[4,16],[5,14],[6,14],[7,15],[8,15],[9,15],[10,15],[11,15],[12,16],[13,15],[14,15],[15,13],[16,16],[17,17],[18,13],[19,15],[20,14],[21,14],[22,14],[23,14],[24,10],[25,14],[26,14],[27,21],[28,22],[29,17],[30,15],[31,15],[32,17],[33,16],[34,18],[35,15],[36,16],[37,19],[38,15],[39,13],[40,17],[41,15],[42,19],[43,20],[44,16],[45,17],[46,17],[47,20],[48,20],[49,18],[50,16],[51,15],[52,17],[53,14],[54,17],[55,18],[56,16],[57,16],[58,15],[59,18],[60,16],[61,17],[62,15],[63,15],[64,17],[65,16],[66,17],[67,16],[68,17],[69,16],[70,16],[71,15],[72,16],[73,16],[74,17],[75,20],[76,16],[77,20],[78,14],[79,15],[80,16],[81,17],[82,18],[83,19],[84,19],[85,19],[86,15],[87,14],[88,16],[89,14],[90,18],[91,19],[92,20],[93,14],[94,15],[95,18],[96,15],[97,17],[98,19],[99,22],[100,20],[101,16],[102,17],[103,14],[104,15],[105,17],[106,19],[107,22],[108,19],[109,17],[110,16],[111,16],[112,15],[113,16],[114,15],[115,20],[116,20]],target:[[1,15],[2,15],[3,16],[4,16],[5,16],[6,15],[7,16],[8,15],[9,14],[10,18],[11,19],[12,16],[13,16],[14,18],[15,15],[16,15],[17,16],[18,14],[19,16],[20,15],[21,15],[22,13],[23,16],[24,17],[25,14],[26,16],[27,14],[28,18],[29,17],[30,17]],other:[[12,21],[13,19],[14,18],[15,16],[16,18],[17,19],[18,13],[19,22],[20,19],[21,14],[22,14],[23,15],[24,14],[25,16],[26,15],[27,15],[28,16],[29,16],[30,22]],spacer:20,pam:[[10,21],[9,22],[8,23]],flank:[[7,24],[6,25],[5,26],[4,27],[3,28],[2,29],[1,30]],step:{turn:.62351,rise:3.2376},pair:[[9.699,0,-2.305,0,0],[10.839,.901,-2.582,0,0],[9.939,-1.059,-1.289,0,0],[8.473,.907,-1.868,0,0],[8,1.916,-2.762,0,0],[6.881,2.551,-2.001,0,0],[5.884,1.565,-1.789,0,0],[7.28,2.993,-.605,0,0],[7.569,4.393,-.583,0,0],[6.113,2.528,.278,0,0],[5.076,2.087,-.754,0,0],[4.225,.946,-.343,0,1],[2.882,1.115,-.303,0,1],[2.389,2.221,-.546,0,1],[2.101,.031,-.017,0,1],[2.619,-1.208,.254,0,1],[1.832,-2.138,.454,0,1],[4.007,-1.353,.26,0,1],[4.641,-2.674,.601,0,1],[4.803,-.254,-.061,0,1],[-9.607,1.703,2.313,1,0],[-10.67,2.703,2.57,1,0],[-9.986,.564,1.436,1,0],[-8.324,2.485,1.789,1,0],[-7.756,3.509,2.615,1,0],[-6.674,4.18,1.825,1,0],[-5.519,3.332,1.755,1,0],[-7.034,4.586,.4,1,0],[-6.674,5.949,.158,1,0],[-6.253,3.555,-.414,1,0],[-5.004,3.39,.428,1,0],[-4.379,2.059,.236,1,1],[-4.984,.831,.172,1,1],[-4.103,-.178,.07,1,1],[-2.905,.441,.079,1,1],[-1.572,-.063,.016,1,1],[-1.289,-1.392,-.053,1,1],[-.579,.825,.041,1,1],[-.854,2.124,.134,1,1],[-2.04,2.718,.212,1,1],[-3.03,1.798,.18,1,1]],tails:{near:{o:[46.898,-16.831,-6.652],x:[.205,-.031,.978],y:[-.292,-.956,.03],z:[.934,-.292,-.205],phase:1.8705},far:{o:[-33.927,-16.831,-6.652],x:[-.732,-.357,.58],y:[-.659,.585,-.472],z:[-.17,-.728,-.664],phase:1.8705}},atoms:"TxsjTBsjTB4lTR8kTBklSh0nSSAoSyAqTB4rRx8pSyIrTSMtTCUuSycuTyMsUCUrUScsTyYoUSkqTygnUSsmTSUxTygzUSczSyc0SSYzTys0US03UC43Ui4yVC8zVC4uUy47VS87VTE8VzQ/VTRBVjU7VTU4VTc3WDQ3WTVAWTZCXThCWjREWTdHXDRIWjpCWzxCXD5EWz1GWj5AWDw+Wz8+Vz48Xj9DX0BFYUJEYUJCYURGY0ZFZkdCY0hHZUZJYUhIZkNEaEBCaj9AakFFa0NGbEVFa0NJZj9BYT5AZjtCZDtEYzs9YTo8YjY6YTs6Xjo4YT46YDY+YDQ+XjI8XDM8XzE6Xyw4XTE2YDE1YjI1YS8zZDE0Yy8zXy0yYSsxYywwWyw4Wyo4WSk2Vyo2Wik6WSc1VyQ0WCI0ViUvWSkwVCM0UyE1UiAzUSIyUiE3UCI3VCI5TiI5UB0xThwyTR0zURsvVBswURstTRoxShkxSxg0SRg1SRgvRhgwRRgyRRguTRYzTRU1UBU4TxM0Txg3URo5VRk7UBk8TRk8TBs9TBc8Shs9SRc8SBk9Rho9VBk3Vxg2WBo1VxszVxY1Whs1XRoyXR41Xxw2Xx8zXBwtXx4tWh0rWB4tWR4vXxorYhsnYBomYxgrZRkqYx0nZB0kZh4jaB8lYh8jZx0haSAfZyAdahweayIfayQebSQdbyQdaiYgaCYhaCYkZiUgZSYlZCUhYyUkbCYabiYZcCgabyobbScWcigZdykXeCocdCcedS0Xdy4Wei4Wei4YdjAVdDETczMTdDARezAVfTEVfy8Ufi4Sgy0UhCsVhioVhS4ShjAUhjAWhzITgioXgygYgiUXgSUWgigbgCgbgyscgyQZgiEYgCAZfh8YhB8ZhyAZhyEXiB8afyEbfSEceiQafCEfeiEZdCMYeCAVeiETfCIUeyARfiISfSERdSAacx8edR4ecR4achwaciAfbx8jbiAjcyEjdiEjcyAmeCIkbx0kbhwpbBklax4oaB8sZx4qbCIqaCAuZCIvZSQuZh8xZhsxaR0yYiIvYCQvXiYyXiQuZig1YSU3YCc5YyM3YCU7ZCo3Ziw4ZS45aDQ5ajQ5ZzI9ZzY5aDg4aDo7Zzo2aDw1ajw0Zj40bzs9bjg+cDc/bDlAbUA8bUI7bUQ/a0M5aUM7aEY7aEE7ZkY9ZUI8ZUQ9cEg+bEk+cUo+dEk9dEc+dUo7bUpBbE5Aa0tFa0lGaE5AaFA/Z1JDalZCZ1hBbFdCblVCcVZCcVlCclVCaFlEZltFZ11DaV1CZVtHZ1xIZFlIZV9EZ2NEZ2VEZGJBZ2JGamVIa2dIZ2NLaGRNZ2NPZ2FPZ2RRbGNIbmRHb2ZFcGdFcGJHbmVDbmZBbmtBbWU/bWM/bWc9a2lDa21Fa29EZm1FZG1GZGxJYmhIY2pMbGxHbm1IcG5HcHBHbmxKbWxNamtMbmpPc25Ec3JCdGxCdmtEdmpGeGlHeWdFb3ZBa3I9aXE8Z3A9aGw9ZW0/bXRDbXZFb3lGa3ZHbHRJaXVHcXZGc3ZGdXpFdXRHdXhAdXxAdHc+dnU9dXM7c3I8c3A7dHA5cW87cXtAcH1AcYFCbXxAbHw+anw9aHo+Z3g9Z3g7Znc+cX5Ecn9GdIBFdYNFc35IcX9Lc39NdX1Ndn1Pd39QeHxQdn9FeIBEeIJCeYRCen5De31FfX5He3tGfX1Je3lIfXtKfnpMd4FAd4M+doU/doc+dYI8c4E8doA6dIVAcodBdItDcIdCboZBbIRCaoNAaIFCZ4E+dYhEeYxFeIdIeohJfYdJfYVLf4RKgYVJgIJMeolCfIpBfI5AfYg/foo9gIs+gow9hI0+d5I/dY49dY06d4w6c405dpBCdpJEeJVEdZFGc5BGcY9Jco1JdY5MdIpMepJEfZNEfpdCf5FEf5BHgZNEf5JJfJRAfJU9e5c9e5k8e5M7fpE7d5k/eZ0/dZlAc5c8cZY/cpY7cJQ+cJQ8b5M6fp9De5tGfJ1Ifp5Iep9IgJxAgaA+gpo/hZc/hZc9hpZBfp49fZ87fKI8faM6e546ep83d583dp04d6A1e6I+e6Q/fag/eaRBd6NBeaZCdaNDgaZAhac+g6RCgqVFgKZFg6RGf6ZHgqRJgKVJg6U6h6g5gqQ4g6Q2g6k5hKw4h645gq03f604f6o5fq45ha08hq4+i64/ha5Ag7A/hLI/hbNAgrQ+iao+iqY/jaVBjKREjKdFjKo7jqo5j6w6ka05jao3jq47j7A7kbA+krE+jbI8jLM6irU7i7c7ibk8kK4/ka5Bk6xBlqxBkaxGjq9Ek6pAlKg/kqY9laZBl6RBl6M/mKRDlac7lKY5lKM5k6I3lqc3mac3maU5mqg2lp09mJ85mqA6lJ8+k5pAkqBCkZ9Ekp5Ijp1Hj51IkJw+jpo+j5g9j5Y9jJs9ipxBiZ49iZ5Ch58/h59BkZk7k5c6lJY7lJM7lJg4kpk2kZs2kpk0kJw0kJszlZc9lZRAlpJBmJdAmpg/nJpBmptCm55Ak5VBkpNCkI9CkJVDkJZGkZhGjZdGkYw8jpA7jI87ipA9ipI+iI89lI49lo08l4w/mYs/l447mZA8m5E6m5A4m5M7loxBl4xDmYlFlY1Fk4tFlohClYRBlYFClIBEln9AlH5Fln1BlXxDmoU/n4dAnIY7moU5mIU6m4c3ooQ/o4c+ooc8pII/poJAo4A/pYg/poo+p4k8p4s6qItAqY0/q45BrJBArI1CqIc7qYY5qIc1qoQ5q4M3rIA3rH85rH81pYY4o4Y2oYk2oIk1oYQ2o4I1pYI0ooA2oYw5o482oY07n482n5E0opU0nZIzn5Q4oJY5oZY7opQ7npg5n5s5n5w7oJw4oJ47oJ45opc9o5c/n5VBo5lApppAqJlBqpk/p5dCo5RCopJEn5FHpJBEppFFqJBGq5FHq5FJqpBLrZJJnpdInphGophKpJdNppZKppZOqJZMmZZImZhJmJlHmJRKmpNLnJRLmZpLmJxLmJ1Nl5tPlp9NlpxRm55Kn6FGnqJLm6RNnKFPmaVPm6FRmaNRn55HoZ1Fo51GpZxFpJ9Hpp9Ip55KpZ1Lp6JJpaNLpqJNo6RKqZ5Lp5xRq5tNrJpLrJlPrplLqZ9QqaFTpqFVqqNTqqRQqqVVo6NSoKBUoaRQo6ZQo6dRo6dNop5SoJxSoZtVn5tWoZpQo5xVpJtYopxbp5tYp5taqJpWop9ZoaFan6BbnqBdoaNZnZ9Zm55ZmZxdmp5XlZ5Yl5pXk51ZlZlYk5pYkZlZnJhcnZlenJhgnpdbnJNZnpZWm5NWnZRVnptfn5xhnJxkoZ1hpJxipJxkop1mpZplnJ9imqBjl59lmqNimKRkmKdjlqhllqplmJ1hlphflJ1fkaBhlKFekaNhlKNekqdgl5VjlpJgmJVllpdnlpllkJVgkJdgj5JjjpRkkZFljpRfjJZdiplfi5RbipZaiZNdi5hYiJtliJVlhJNjiJFjg5Fiho9ig45hjZxli6BkkJxlkptpkZdpkphriaBfiKJfjZ5djKBbjaJbjZ9YiJ5ghZ5ghaBihKJihJxhhJpfgppegZhdgJZef5dgf5Rdhp9khaFmhaVmh6BohqJrh6Fth6NviKJxiKRliaZkh6pjjKZjjahijapkjqxkj65mhahfgqpfhaZch6VZiKlbgKdifqtkf6VkfKZlfqNigqtng61mga9ng6pqgqhrgKdqhKdsha1mhq9lg7Bhia9kirFjhbNjg7VhhbZghbhfgrZig7hkgLVkibZeibVbiLNbjLVfjLZii7dijbRjirZajrRWirdWirdTirlRirhPirpNi7FXjK9Wja9Ui7BSjK1Yjq1Tj6xRi6pRkatQkqpOkalNk6xNjKtNiqpMiaZMiqtJiKtIhqxJiKxFjaRLjaNOi6FOkKRLkaRIk6RIlaZJl6ZJmKVHmKhKjaRQjKNSiaFTjqRUkKRUkaVWkaJUiaVRhqVRg6FRhadQhqlSgqdRhaxShqJOhaBMhJxOh6BKhJ1IiJxJhJtHiJpIhZdGiJtQhplTi5tRj5tQjJlOhp1UhJ1WgZpVhJ9XgZ1Tf51Sf5pRfZlRfp9QfqFRfaNPfKFTgJpPgZdOgJNPg5dMgpZSgpRUf5FVhJRVg5JZhpFXg5BbhY9afJVWeZNVe5hXfJlZe5tafZ1beZRQeJBPeZVOeJhPeJRMeJlNfI5Pe4pQf45OgItNgotMg4lLhYlKeY5YfYtWf4pVf4dUgItUgYdTgopTgohSdo1VdY9WdI5ZdI9ac49Uco1Tco1RcI5PbopPbY5Ocotbb4pYbIhbaotca4VdaYdgbYZhaohjbIdjaIlaZopaZIlbYolbZYpXZ4xWaYtVZo5Vao1UZ5BUao9TY4dfX4hhZIVgZoNfZ4JhZIFeYophYYxiYI5hYZBgYo1kZItlYY9mZYxnXY5hXJBfXJJhXJJjWY9fWY1dV41cVY5eVoxaXJRfXJdgX5hgYJdfX5liYppmYJpnYpxiYJ5iYJ5kX59gZJlmZZlpZ5tqaZtqZpdqZZVqYpVqZZRnZp1qZ59rZ55vZqJraKRraaRtaKVpa55ubJ1wa6Fzbp5wb55tbJ9saZ5zZ591aZ93a6B3ZZ11aJ15aZ17bZx8aJx9a5p5bZh5cJZ7b5l4cZh3bJd9bZZ/a5WAaZaAbpiBa5OBaZGCaJOEZpOEao+DaI2EbI6BapSGaZWIZ5eHZZeJa5eJZ5mGZpuGY5qFYZqGZ52EY5iDYZiCXpaEYpZ/ZJd8Ypp9YJOHX5SJXZSKYpGIYJaKX5iMW5mMYZqMY5mOYJyOZZqPXZqJV5qIW5yFWZ6EWp+CXJ+BWKGCWpeGWJWGVZSIWZOFWJKDWZCCVpGEWJSKV5ONVpWOVJWPWZOOWJKRW5GOVpeNVZmOUZqNVpyNVZ6NV6CMWKCLVqKNUpmKUJiJT5aKTJaKUZiGUpaGUpqFUJSKT5KLTJKOUJCLT5SPTpWRTJeRSpaTUJaTTJiQSpqPSJmORpqOS5yOTZ6PTqCOT6CMTaKPSJeNRpaLQ5WNR5SKRZKJQ5SHRpCHRZKRSJKURY+QRJOURJSXQ5KYRJKbQ5aYQpCXQo6YRIyZRIubQIyWPouWPI2WPI+VOo2YRoyYSIuYSoyXS4uWSIiYSYeZS4iaSYWaTY+XT42YUI2aTpGYTJGaSpCaUY2WU4uXVYyWVo2UU4mWUYeWVYeXUIWVV42YW4qYWpCZWJKaVpGbWJSYXY2WX4yWYoqYYY2UYI2aYY2cZI2cZYydYYudYougZY6aZ46ZaYyYa4yYZ4uXaYmVaoqTaIuRZ4eVaIWTZoaXbImTbYqQbYeOcImRcoqPcYyOdImOa4qNaomKbIeHaIuKbYuIb4uGcYmHc4qHcI2GcYeHcoWHcYKHcoCHdIWJb4OIbYGIa3+Fa4GKa4OCbYOAbIN+aYWCZ4WDZYOCZ4aFb4OBcYN/coGAdIF+c4WAdYZ+cn+Bc32BcXt9cnuDdXp+dXl8dHd8dXV8eHl7cnd8cHV8bnV7bXd6cHR+cXF/cXCBcG99bHN7anN6aXZ9aXB7ZnB6Z3Z5ZXh6Y3h+ZHh4Y3R8YnOCYHF9X3B+ZXJ/Z3KCZ3WDZ3WFaXGBZ3eCZ3mDZXqGaHuBY3mDYHmEX3mIX3iCXHiDW3qDWneBYXaGYXSIYXaMYnKIZXiNZHqNY3uPaHiMaXaLaHSKa3aLY3uLYn2LX3+OYX+JY4GIY4KLZoCIXHuOW3qSWnmMW3eMWXqKWXWOX3iSYHmWYXaSYX6VX3+ZYoCUZICTZn6VZ3+WZnyUXX+WWH2XWYKXWoSYWoSaXYWXWX2aWHubVXubVX2cWXqdWnyeW32cVHqbUXqbUHuYTnuYUnuXUnqSVHmSU36TUn+RUICQToCST4GOUHmRUHeQUnqNTnaPU3aMUneIUniGVXSJUHaITnaHTHmHS3mGTHSHSnSFSnWESXKFTXqJTHyKS4CIS4KHTYOGToSESYSHSYaKSIiKSYSMT4OIUYSIU4KHVIOGUoWLUoCIVH6HVX2DUX2BUn9/U399Tn2BUoR/VYR/VoR9UoaBT4eATYZ/T4mBWYOBXIB/WoODWYCFWoWFWoCHWX19V3t+V4F4WYN2VIN4VIR2VYZ2VIJ0WoR5XIV5XoR4YIV3XYd7W4h8XoF5YIB4YH92YX11YX56YX99YX1/ZIB8Xn91Xn5yXXxyXXtwXHt0Wnl0V3tyWnh3XHd7XnZ3Vnh0VHhzUXV1U3ZxVXZvUXZvUnl2UHl4TXl3TXl1UXt6U3x4U3x2THl5SXl5SHt7SXp9SHd5Rnd4RXl4RXV3Rnx7Q319QX5+RYB8Qnt8QHp8P3l+PXl/P3h6QXiAQHiCQHqGQnWDQXWFQn6EQICGRX+DR32DSX6DR3uEPYGCO4CBOYGBPoN/QIWAQYZ+QIWCQ4d+QoeCQ4iAO36COXyBNX1/N3yENnqENXqGNXmCOXx9N317N3h7OX15NoB3OX90NHt5Mnl4NHd3NHV2MHl3NXh1N3dzOXd0Onl1NnhxNnZvNXRvNXJvM3RxO3ZzPXZzPXlwPnRyQXNyQnR0QnJxQHlzQXtyRHxyRX10QH5yRntxSHtxSX1wSX1uSXhxS35xTYBwT39wUH5xTIJxSoNxSoZySYNvUYBuU4NrVH1sVn1tVXlqWXlsVoNtWYZoWYZuW4dyV4lwWYJqW4FoWYFlWoJjXH9oWn1pV4BmVYBjVYRkU39kVINgVIVfUYZfUIhfVYZdVIRbUoJcVYRZT4RgTYVgS4dkS4NgS4FiTIJeToZkTodnTIppUYdoUIdsUopqUIlvU4xtUotvUoxxTotlSY5nTo9kUJBlUZBnUpFjR4xjRYtlRItmRothR41fSY5fRo1dRodoRIhsR4VoR4NmSYJmRYNlR4prSIxtRI5vSo1tS49vSpFuSo5xQ5BrQY9rP5BsQ5JoRZRoR5NpRZVmQY1qP4tqPIttP4loPYdoPYZqPIdmP4lwPop0QYdxQod0Q4V1RYl0QI9zPpBzPZF1QpBzPZBxO5FwOZBxN5ByOpJuOY1xOItyOIt1Not2OYlxOox5OY96OZB8PIt6Po16PIl5P458OZF4OZN4PZR4O5d4PZl4Ppl6QJp7PJt3Opx4OZt6OZ13PZd8Ppd/QZZ/Q5h/PZaAQZR+RJN/RZN8RZJ7RJF/R5V8SJV5TJV4R5d4S5d7Tph7T5Z8Upd8Tpp9TJx8Spx7TZ59T5R9UJN+U5F9TpGATZGCSpKATI+DUJF6UZB4U5J3VJB1T5B3TY54S413Tox6Sot3TYp6S4p5U5R3VZV2WZV2VJh1VZt4UZt3WJV7XJJ7V5V+WY56W453XY13V4x6WpB2W5BzXZF0X5BzWZFyXpN1YJR1ZJN2YJd2Xpd4Xpd6XJh3YpB6Y455ZY55YI98YY5+YpB/X4x/Yo13Y4t1ZotzYYp0YItyZI5zZpByaJBzapByZZJxaJB1apF3a453bo54apJ5aox3a4p4bYd2aYl5aod7aId3aIV8bIlyb4lxcIdxa4pvcItyc4tydYx1c45ydI9vdpFwdY1uc4h1dId3eIh4c4V3dIR5eIZ1e4V0foh0e4Nzeolze4tye45ze5ByeolufY1ufYhteZB3e5F4fZB5eI95fJN3fpR4fpZ6fZh5f5V2fpZ8fpd+fJl+eph/gJl+gZqAgph9fJt9ep19e555e59+eaF+eqN9d6F/d556d593d6J3d6N1dJ52dJ90cqB4eKN5eKZ4e6l4d6d7fKV4f6V4gKh0gKN4gKJ6g6R4gKN9fqVzfqZxe6VweqRxgKRwf6RtgKJwe6VteaVseKJpeKdrfp1rfqBoepxse5tufJhtfZdveJpvd5tteJ1se5drfJVqfpVqgJRre5Roe5JnepBpepFlf5dpg5hqgplmgJlkgplshJpuhpdwg5xvgpRxhZFxgJJxgJByhpBsipBthpBphI9ohIxpgotriZRti5VujpNxi5duiphrjZhviptripRyipN0i5B0jZB1iJN2io9zi4xyjYxyj4tziYtwh4pxholvhIdwg4ZsgYVvkZBtlZJtlo9ql5JsmJFrmpFqk5F1k493lY93kpR2kpZ0lJVykZd0kY53kox5lYl6j4t6jY17i4x8i4l8iY19k4p2lIh1mId2k4hyl4VwlINul4Nvmox0nYp3mo50nY90n45znZF1oJB0oJF1m4x7m4p8nYl9mY59mZB8l5J9lpF/l5R9mYZ8nIJ8l4R8lYZ+loeAk4Z9nIV5nYR3oIR4oYN5nYV1n4Rzn4Fzn4VxoId5o4d6pYV9o4p6oot4pYt7oYZ+oYWAo4GBnoWBnoaDn4SFnoiEoIF+oX5+pHx+n318n3t8n3l+nXp6pH98p397qX99qn59p4F5poF3p4J1poJyp4RxqIF+qoKBqX+Cq36DqYSCp3+Dp32EqXmFpHyFo36GoX2GpH2JqHqBqXiArXaBqXd9qnZ8pnZ9rXqAr3qAsHqCsnmDsH1/sH18sX97sX94tHx4sn11r3uEr3qHsXeIrnyIrnyLrH2Nqn2MrX6PrXSIrnGIqnSJqXeLp3aMpnSNpniMrXKFrXF/q2+CqW6Ep22Dqm2GsnN/snF9s3J7tHSAtXKCsnKDsm99s217sWx4tGt8smp+sWuAsm2Br2qBr256rW15rG93qm92qmx6rXR2rnZ3rXh2rnl0rntzq3x3rH90r3JzsHFxrnBwrnBtsnBxrG9xq21wqG5wp25uqmtxqGlwqGdxqWdzpmVxqHBxpXFxo3NupXB2onR0pHF4p3duqHlrqHlwpXtyp3h0pHt0pnl2pXp2qnRpqXJlrXRprnZqr3dor3dssHlosHltsXprqXBpqG5no25oqGxpqGlop2lmqWhppW5koWxjn2xiom9hpHJgpHNeo3JcpXVdompjoGhjoGdloGVmoWZhpGVioGhnoGhqnmlrnmltomhrpGZqo2NrpWFqpF9rnGpqmmtrm21tmm5vmWptmGhrl2hpl2ZsnW5tnnBunHJsnnRunXhqn3lvm3xvn31tmn5vnn9tmoJtoHVqoXVoo3RnnnJnnHFmmHJlmXRol3Volndll3Zrk3dqlXltkXhqk3pukXpsj3ttmnplmXpgm3xlm31om35kmH5onXhinnhgnHVdoHhgoXpgoHxfo3thm3FgmXFfmHNemG9flW9elG5hkW5glW5jk25lknJllW1nkG9njnBnj3Bri29ni21pjHNqjHRtjXJwinZtindviHlvh3ptiHtxinFuiW9wjG1wjGxyh21vhmtwhGpvg2ttg2hwjWxuj2tukmtxkGpsjmlqj2hokGpnj2ZnkW5vk29wk3JvlHZymXVylXdzmHdzkG13kW15jXF3jnV2inR2jnd2inZ1jHh1i3p1kGx2kGl3lGd5j2d1j2V2jmN0j2B1jmB3lGp2l2l2mmp5mGpznGhznmh0nmxzn2p0mW56mW9+mXF5lnJ5mnF3lnV5lG1/l22Dkmx/kWyBjmuBjWuEi2qEl2qAnGmEmGaBmGZ+l2h+m2uAnmyBnm6Cn2+Dn21+n2p9oW5+oGt6m2+Cm3GEm3GGnHKImXSBlnWBm3aCmW6Jm22Km22Ml22Jl2qIlGmIk2qJlGeHnWyJn2uKoW2Lo2yLoGmIoXGLoHKNnnKNonOJo3KHo3SEpXaGonOPoXSRn3eRnneSo3STonWVoHSWo3aXoHiPn3qOnXqNm3mOnHuLmnuKl36LmniJmXeKnHeIl3qMlXqOk3uMkXqLlXuQk36MkX+Lj36HkoKLj4OKkIaKkoeKjoeJk36Hk32EkHqClnyEmH6Dmn2Dl4CCknmGkHeGjniGjHeFkXWIkXOHlHOGkXGJjXqHi3uHiHuEin2JiH2Ki3yMi32Ei36BiXx+jX+BjYKCj4SBjoaCkIiAjHh/iHZ9jXZ/jnR9kHN9jHJ+hnWBhHaBgnaAhXSEhnKEiHGFhHCEgnuAgnx8gn2Cgn2Egn+FgYGEgoODhIODgYSChXp6hX13g3l4gnZ5gHZ3f3d1f3R4h356ioB6i4J6hoJ6hoR5hoR3hoZ6jH55j312j3x7knt7k3t5k319kYB3koF0kYBwlH90ln92loB4mH11joFzjIFxjoRvioFxhIBygn5vgX1zjYJsjYNqioVrjoFoiYhnhYdmiopmjYtnjYtpj4tqi4xqiIVkh4Bih4RgiIZfhYhehYhchIdag4VbhIhYhH9lgX5khH9ogoBph39pgHxlfntlenxlfnhlf3hogXhpfXhqgndrfXdsgHdtfH1oen5pd4Fpe35sfYBsfoBueYNldoRje4RkfYVlfYZngIVkdoFkdIBicoFjcIFic4JmcYNnb4dncYNqcoFqc4dlc4plcYlhdYpkd4pmdY1jeYtlcI9ha41jbI5lb41mb5VdbZBaapNZZpFaZ5NZa5ZgbpdhbplhaZZiZ5VhZpNgaJFgZJJgb5ZicZdkdJpicpZmcpNlcZZoc5Jnc5ZgdZdedZtcdZVcd5Ndd5FdeZNfeZBeepFfcZtbcZ9cbptbbZ1abp1Xap1ZcZ1fcZ9gdKBgdKJgdp9geKBgeqJdep5heZ1je5tkfZtie5pmd6FZd6VYdp9YdqBVd55Tc6FUdKNac6ZadKhcdKpbcKVbbqdbbKdcbqlaa6lbbKpadaddd6hfealeeaxed6dhfKlbfaxZfqZagKdYgKNbeqpYeatWea9Wd6pVd6hTdadSeahRdq5Zd7Fad7Rac7BbcrJccLFebrBebLFdbLNdaq9cebBbe7JcfbJaf7NbfbBefbNUfrNSgK9Vga5Xg7BXhLFWhbBZebhQd7NSdrRVc7NVcrJTcrRXe7hUfLpUfrtTfr1TfLtXerpYeLpXerpaf7lSgbpQgblOgbtMg7hRhbtVg7dWhbtXg7dYhLlZgLZLfLZMg7NLhLJNhbNJhrJOh7NKirJNfbdIerhIebZHd7VHerpGfblEfrhGerRFebJEdq9Ge7FDfbBEf7FFfa1Ega9Gf6xFga1GeK5Kda5Ne61LfLBOf61NcrNLcLNMdbZNc7NJcbJHbq9HcrNEcLRDcLVBbrNDcaxHcapJcqhJc6pFc6xDcqtBda1DcatLcapNb6ZOcaxQb61Qba1Sa65TbLBVbrBWarFVbalNa6hNaqRLaKlMaKtOZaxOZaxMZKxQbKZJbaRHbqBIbqVFbaZDbqZBbac/a6U+cZ5NdKJMdaRKdqFNd6VLbqBQa5xQbKJRbqNTbKVVaqRWbadVa59Nap1La5tKaplKaZ5JbZtKb5lJb5VLcptGc5hIdJxFb5hNcJdPbZRRcZhScZZUdJhVb5ZVaZZRZpNQZ5hRaZpSZZhTaJVNZ5NLaZBLaJRIZJNGZ5FFYpJEZpBEY5BDZZBLZY1LYI1KZIxOY4pOYolRYoZRYYVTYIZVYINSY4tIYYpHYIdJYohFZIpDYIdDZYhBW4hJWYlJWotIXItHWoNKWX5GWn9MWIBNWIFPVn5MVYFQVH5NUYBRUoJHUoVIUoVKUolHU4dLU4lKU4tLWIRBWYI9WYdBWYg+V4lCW4JBXYBAX4M+XoI5Yn46YXw7X309Yog4Yoo6YYg8ZIs7YYM0YYIyXoQwYYAxYYMtYIQrX4IqYIIoYYYqYIcoYYonY4kmZYslZI0lZ4okXoArXX4qX3wpX3snYXwqY3oqY3ksZXcsZXspZHwlZn8nYXgtYXcwX3YwXXcwYngyYnc0YHMxXnIxXXI0W3E1Xm8xYW8yYmwyYWszYmg0Y2czYWc2XnQ4W3c6YHQ5YXA6Y3I3Ym46ZG83ZG04XXg2XHs3WHk1XXw1WHw3VX03VX83UoA2VHs5U388Vnw9VH8+V3o9WXk/WXtBVoE3VoM4VoQzWIU4V4c4Wok3Woc0U4Y1UoczU4s1UIczT4k1T4UzVIsxVY0xU48wUo8uV40vWYwwW4wuXYsvX4wwX48vYYswU5EyUZMxUpUvUZUtUZUzVZUvVpYtV5QsV5IsWJguV5ovWZUrW5MpXpQqX5QoWpMnWZEmWo4nXI4nWY0oXpUsYJcsYZMvYJkuXpotXZwuW54uX50wZJUuZZczaJUvaZQsapMxY5M2Z5I4YpE3YJA1YZE5X442Zpc9ZJc9Z5s5apk3Z5dBZJpDaZdDa5ZBZJ1AYp0+YJ4/Zp8/aaBCap4/a6BDbJ9Ba509bp5BbZw9b50/Ypw8X5w7XJk6YJw4Yps1X5k9XZY+WZU+X5VAXpE/XJNDXY9AW5BDW45CWphAU5g+V5pCWJlFWJdGVpZGWZZHVZo6Vpk4VJg3Vp06VJ48Vp4+WJ0+VJ9AWJg4V5Q2VpM1W5Y1W5QzXJg1V5M4U5I8WJA7V408Wo86UpA5T486T4w7To84S484S5A6So43UI8+UI1ATopBUI9CUpBCU5JEVJFGVZJITI1ASYxASYhASYo8SYg7SoQ7SYg4T4U8UYY8UYg+S39DTYVFSYJBR4FAR30/Q4E+QYM9QYU9P4I8SX89Sn07THo8S345TYA5TndBU3pDUHxGVHhFUXtIU3lISnhESXdCSHRCSHlGSnpIR3dHSXpKSHhARnY+SHU9R3M8RXg9Q3k+Qns8Qnw6QHw9SnU9THM7THE8TW87TnQ6UHU8UnY8VHU9VXM7VHM5V3I8TG9ASmtBTW9DT3FCUXFFU25ESG9BRWw+Q29CQ3FARHFEQ2pBQmk/P2s+QmZARGVARWRCRWQ+P2g8PGQ9PWg4Pmo3Pmw4P2o1P244QGw0QG41OGI5NGU8M2Q9M2I+OGA8OF46Nl05Nlw3OVw8NF46Ml44MF80L146MFw8MF0+MFo8MmQ2MGU3LWY2LGM2LGc4OGQyOGcyOmczOGMwNmEwNGIxN2gwOGowN24yNmsuN2orOWsqNmgrNW02N204MWs1MG40MHA1MG4yN285OW87OG4+Nmw9OXE8O3I6O3U6PXY4Png4OG5AOG1CN29EOHFEOWtDOWpFOmlBNW9FN25JMnBIMHFGLnBHMHNGNXBOOHVNOHZLNnVJOXBQOG9SNW9VOm5TNnJTNXRVMXZUNnZWOHVYOnNXOHVaO3NZOnNbMnRRMHRQLnRRLnJSMHNOLnNMLHVRKnVSKXNRJ3JSKXdTKnlVKXtVKnhXKHFNKG1OKHJLJnNKJXZLJnRHLGxRK2pRL21OMGpNMGpLMWlPMWdKMmdOMmZMM2RLLG1TK21VK29XLnBYLHNaMHJbJ21UJGxUI2hTI25SInBUInBWIXJSIXJXIXRUIXRWIHZXJmlRJmdQJWNSKGVNJ2RLKmNOJ2JKKmFNKGBLKWRUJ2FXK2RVLGJXLGZXJGVZIWFZI2daIWZcJWhcIWRWH2NVHl9UHmRTImBTI11SIlpUJV1RJ1pRJFtYIltaIllbJlxaIF1ZHl1bHFxZGlxaHV9cG2BdG15fHGJfHFtXG1pWGldWGVZVG1pTGVpSHVhSG1ZYG1NZG1NbG1FcHVJYHVJVG1FUHFFRGlBQG1VdGFRgFlVgG1dhGlZjHVhgFFBjFVBlFU5fFU5dFEtcFUtZFElYElFjEFFmD09mDU9lD1RmD05oDUxpDk5tDkpqDUhrD0lnCk5sCU9uCE1wCEtvBlBtB1FrBVJvCE1yB0t0BUpzBUh0B0x2BEtyAUpxAkluAEhtA0ptBElqBEdqBkZrBktpBEZoBENnBkNlB0FlAkJmB0VkCURiCkdiCUljCERgDEdiDUldEEhhEEZgDkVhDE5eDlJfCU9eD1FcEFNbDVVcEVNYEVdcEFldEFpZElteEVxgEVpiE15hDVtbC11ZCV1aCV9cDGBWDWJVDGRXDmVXCmRYCmZZC2ZcDGhdB2daC2RdDWNfD2RfEGVgDGFfCmBhCl1hClxgCV1kE2RcFGZdFWdeFGNaFGFZFGBXFF1WFF1UEmhcEmpcE21fEWxaEGpfEGtiEmtkEmxlDmljE2ljFWhlF2pkGGtmFmZkFWRjGGVnE2NlF2tiGnBkGW1eG29eGmtdFnJjFnRnE3NiFHRgFHZfE3JeFXBnFXBqGHBrGHFtFG5rFG1tEnBvEmtuHG5rH29rHGtsGmpuGmhvGmxwIG5mInFkH2xkIGpkIGhiIWlmIGZiIWZmIWVkH3JmH3VlIHZoIHhoHXZkIHVqIHZsI3duHnVuHHRtHXdwI3NtJXJuJnFqJXBwI3ByI3JzIm5yKXJtK3FrK29qK25oLXFtLnRuLnZsL3htLnlvK3lvL3twKm1sKmtrKGptKGpvLGlrJmhsJWVuJWNsImhtIGdvImttJWRwJWFxIWFxJmFzJV50JWJ1I11wIVxwHVxyIVlvH1hvIlltIFx0H1x3Hl93HF54IVx5H2B2HWN2GWN0H2V1IGZ3IWh2Iml0Imp4GWFwGmBuGF5sGV9qGVxsGF5zFlx0FV52E112F1p1Fl93FmB5FWN5E2R6GGB7FmR3FWd3E2d0E2l0F2h2GGp4Fmp6Gmt4E2VzEWVxDWRxE2RvEWRtEGZrEWFsD2VpD2FqDmNpDWJnDl9yDGB0CmBzD11xDVpuEVxtDVlsEVtrD1pqDWB2DGF4CmN4CWR5DWF6C2V2C2d2CWh0B2l0DWl2CGZwBmRwBGRwCWZuCmhtB2ZsCWttBWBwAl5yB15vCF5sBl9qBV1pBmFqBV13A1x4A2F3A2J6B1l2Clp5CFh0B1hyBFhyCFdwA1hvB1duBVdtB1d6CFZ8DFZ9B1R+C1R6DVN5DlN3DFN1DlB6DlB9EFN2EVNzElFzE1B0ElZzElZwEVd1ElFwFE9vFU9tE1BrEkxvF1BtGFFrGU9qG05rGlNsGVVuG1RpF1ZtGk1mHE5kG01iGEtlGUlkHU9kH1BiIVFiI1FhIlJlJFNlJFNoIlNpJFZlJldmJFdiJlNpJ1JrKFRsKVZrKVBrKFRvKVZwJ1pxK1ZxLFhzLVpyLVd1KVpuKVxtKVxqKlppK15uKV5pK19lLWBmJ2BmJGBmI2FoI19kIWBpIV5lIF9nK11jLl5iL2JhLlxgLllhL1ljLlhfLGFfLGNeKmRiKmNcLGdfK2lhK2tfK2tdLWljLGtkKm1gK3JgJ3BfJm5eI29eJm5bLXFgL3NiL3ZgL3diL3ZeL3hdLXxeMXZaMHpZKXpeKX1hJ3heJHlfI3tdJHlhIXxeInpiIHxgHn1hKntlLH1lLH5mK3lnKHVlJ3dpJnRmLnxkMH5jL4JjMn1iM3tjM3tlNHphLoBgLIJfKoNhKoVhK4FdLYBbLH9ZL4NbKYJiJ4NkKIRmJ4VnJYFkKoNnK4RoLYdoLYhpLYNqLYdlLolkLI1lMIhiModjMYthNIZhK4piKYxhJo5jKIxfKIleKo1dJohfJYtmIotmIYxnJY1oIopjH4piH4hhH4hfH4xhHY1fG45gHIteHYdiHYRhG4NjGoZfGIZdGYZaGIZZFoldG4haHIhYHYVVHopYHoRZIIJYHn5WIYFaGn5ZGX9WGH1VGH9bGX5dGXtdGX9fGYFVGIFTG4BRGIRTFoVRFoNPFodRGH9PGH1NG35KFnxMF3pLF3tIF31HGXlHGIFLGYNJHINJHYRHF4VJFYRJE4ZJFIhKEYZIH4RMI4NMH4VOHodPHIdOHohRIIBLIn5LJn5JIXxKIHtIH3lHH3dJIHhFJ4JGKYJGJIFDI4BBIX9DI38/JoRHJohKJYlIKIlLI4tIKINMKYFOK4BNLYBOJ4BPJYFRJH5RJoJTLX1KMX1JK3tIKnpJLXdKKnhNLoBIMIJHNINJL4RFMoVCModFMINLMoRNNoNPMIVPL4dOMYVRLYhQM4BONH5POH5OM3xQNHpQMXxSNn5LN31JO39KNn1HOH1FOHpFN31DOYFKOoNKPoNNOYZKOIZIO4hLPIJRP4BSOoJTOoRVOIZTOINXQ3xOPXpOPHlQP3hOQH5LQn5JRoBJQX9HQX1FP3xFQX9DRYNMRoRPRYJQRIZLRIZJQoVIRoZHQYVGRYZFQ4ZESIVQSIVSSYlVS4NTTIRVSoRXSIJXS4VZSolRS4tRR41QTIxPTY9PTZBNTZBRSY5UR5BURpFTRJJSR5FXSJNRR5RPRpNNRJRMSZZPR5FNRpBLQ49LQY9KR45KSo5JS4xJSotGQ45NQI1OPY9OQIxRQopRPotRQolTQJFPPpNQO5VNQJVRP5dSQJlTQJlWQppSP5RMPpVJO5RHQJZIQJdFP5VDQJNEP5ZCO5BHN49HPI1IP41HPoxEQYxDQYtAP4o/Q4tANpFMNZRMM5RNNpBON41RNYxNNpVKNZhKMphJMZlJNplJMpZHL5VGK5VIL5NELZNDMJFFLpRKLJNMLJRQLZBNLY9KK49JLo1KK41HLotJLIpFLZdOLphQK5pQK5tSMJpPKppPJ5tPJJpSJptNJZlMJ5hKI5hMJZZKI5ZKJpZVJJVXJZNSI5FOIZVQKJdWKZZYKplZK5pYKpRZKplbK5tdKptfLJ1hLJ9gLJ1jL51dMp1cNZpeM6BdNaBdNqBbNqBfMpxhM5piMpdiNJZiMZtlMJdhMJVgMpJeLZJeLJVhMpZcNJVaNpRbN5NaNJdYMpdXMZVVNJRUN5ZdOZVeOZJfO5FfOpdgOplfPZpgPpxgPZ5fN5JhN49iN4tgNY9jNZFlNpBnN45nN5JpOIpaNI5aMoxYNItWMopaOY5aPI5ZPYxbP4taPZBYPYxdP4tfQIdfPoxhPIhePIVePIZaOYRePoJbP4FZP39ZP35bQoJZP35XP3tXQHpVQXtUPHpWO3tbOHtYOXtdNnxaN3xcNnxeQXdWQ3ZVQnNUQHNWRXZWRHVYRnhWQnJSQXBRP3JPP25OPWpNP25KQnFLQnRKPXJHQHZIPXVGPndGOWlMOWdKO2dJOGZJOGRIN2NEOGFJOWFLPGFLPV9KPmBHP1xIMmhDMmpFMGRFMGJGLmFHMWBDMWpALmxBLWtDMGw8Lm5AK29BKW4/J25ALHJBKXNCKnZBKHdCKHlCKntCJnpDKm49KG07Jmo7KW05J2dAJWZAKmU+KmI+KWI7K2E/J2hCJmlEIWhDJ2pGKWlHJWtIKmpJI2xCIXA/IW9EHG9EHnNEIW0+IW47IGw5H204IWo5IGg4HWY6ImY3JGc3IGQ1JmQ2HGg3GWU2GmQ0GGk3FmQ3E2I0EmQ1FWA3FVw1EV42E2EyEWIwD2ExDWMxEWAuE2EsE2AqFWEoFWAmDl8yDF8zCmE2DFw0CVs1B1wzCFwxBVw0DWI5DmQ5DGY5EGE7EF88EGU4EGg4EWk6Ems6Emc8E2g+Fmc+FmU8EmdAF2g/GWVCG2tCG2s+HWVBHmNDHWJHIWFAIWFFIF9AHmZGHWdIG2dJGmdLHmtLH2pNHm5KF2dIFmVJFWRLFWhGFmtFFWxGF2tEF2NHFmBIFl5LGF9GFl5EFVxEFmBCE1xCFF9AE11AGGBRHWBNIWBMHlxMFmRQFGNQE2NSFmdQGGhRGGhUGmlVGmlYE2JOEGFOEGBKD2NODGJOD11MD1xKDVpLDFlKEVpKEFpGEldHDFtNCVpOCldPC1dRCVVOCVNPDFFRB1FODVJND1JNEVRNElVLEFBLElRPFFZPFlVOGFVQFFdSEVlSEldVF1VMG1hLGFNIF1FIFlBFFlJEFVJBFlBAFFRAH1VMIVROI1VPJVVOIlZRI1lIJFdEJlpJJ1tHJ11GKVpGKF5FKltEKl1DJVVIJlNGJFFFJFBDJ1FIKlJJK1NGLFBFIlFGH1BFHlJDHlFBHlBHHk5JG09MG0tKHlZCHlY9HllDHFpEG1hFHVxFIlZAI1U+I1M6JlY+J1g+KFQ8JlpAIk89IE49H00+I00+KEw8KE8/Kkw9Kk4/HlA7HE87G084G1E3GlE9Gk43GU41Fk81FlAzGEs0G0ozHEoyG0k1FU83E1A4ElQ3ElA6FFE8GFc1GFU0GFg6Flg8F1k+FFo7GFk1GlkyHloxGVwxGlwvGV4zHVo1IFo1IVk0I1kzIFo4Hlw5H185HVw7HmA6HF48HGA8IVY0I1QzI1UxJVQwIlI0IVYvIVYtJVgrH1csI1ouJFwtJ1wuKF0tI14uIV8tIV8rH2AuKloxLVkvKVk0KFs1LFg0Kl01KlcuK1UtLFcrLlYpKVMrK1kqLVspL1wqMF4pK10oMFssMlstNF8rM1kuNlsqOFwpOFonNlknOlwqOlomOlgkPVclP1glO1kiO1cgOFohPVQmP1MmQFIkQ1IlPlEoQE8oP1IiQVEgQlMfQlMdQlUgQ1cfRlceR1UfQ1ogR1gdSlgdS1gfTFkgS1UfTVUiTlMhTVEhTFQkSlclSFckS1gmUVMhUlEgUk8iUU8kVVIgVlMhVE0iVEskVkwmVUsoVUkjU0ghUUgiU0kfV04lWFAnV1IoVFIoW1EmXU8mXU0nXk8kX0smYE0lWFQoVlYoVVcsVVcmU1UqUVQrUVQwT1IqTVIsTFMuTE8sS1IvS1AuVFIuVVIwVlQzV1AwVU0wWFAyVU0tV1UwWFcwV1oxWFwxWlgvU1sxUVszUFwzUVsuUV0tUV8uUl0rUlk0UVk3U1w4UVY3UFQ2UVI3TlQ2UFo6UFw8Uls+Ulk+Tl09U11AVFxBV10/WVtCW1tCW1g/XVpEXFhFXlo+X1k8YVU7YVs7YF08X1w/YFY/YVRAYFI/YVA/YVRDXFA/XE07WVE/WVJCWE8/WlBEXFE6XFE4XU41XFM3YUs4YUk2ZE45Zkw4aE05a0s4bU05YEo6X0g7XUU4WUU0V0o3VUk1VEw6XEgxXUUvXkowXkouX00tYEktXkAxYkM1ZEU1ZEUyZUMxZEcxWz81Wj0yWj83WD03WUE4WUAyV0AvWD4sVkIvVUIsVEMxW0EtXEArXTwpXkEqYEEoYUMoY0MlZEUkXDcsXjcxYToxWDctVzcrVzUqVTkvUzcuVjgxVzkpVzknWTgmWDckVzwmVT0nVD0oVD8lWzgnXTYmXDIkXzcnYTUmZDYmZDgmZTQoWzMoWjEpWDAnWS4mWTArWzAtWjAwXS4tVzEmVS8hUzIlUTEjUTInVzIiWTIfWi8dWjQfWikfXSwjXikjXy0jUikhVSglVSYmVyQmWCIkVSceUycdUikcUCkaUiscUi4cTy4cTi8bUi4ZTC0fTSwjSiseRyseRiofRi0cQysfRC0dSi8iSi8lSCsmSDElSisqSCsrRi0rTCwsTS4sTC8pRyktRSkuRSswQy0wRScvSy0zRiw2QSw1Qik3STA1STM5SzM0TDMyTTU2TTUwTjI+UDI9TC8+Sy9BSi09TTQ/TjZDTDVETzg/TTpAUDg9TTw/UDZEUDlIUTpHUjVIUjVLVDNMVTJKVDNOTjxKTjxNTjtOSz1KSjxISz1FS0BFTz5NUD9QTj9STj9UUUFQTD9RSUBSST1TSDtSR0FQST1VSDtXRjtYRT1ZSjlYSjpbTT1ZSz5dRDlZQjpaQjpdQjheQDhZQDhXQjhVPjhWQzxeQzxhQDxiPzxgRD5hRz5hSEBjRkJjSkFjQDtkPj9mPzloQDppPzdnO0NqNz9oNz5qNj5mOz9rPEBuP0FtP0NuPD5vQEBsQ0FsREVrRD9qQUNoQUVnQUlnPkdqPklrP0ptQExuO0lsQUhuQ0hwRktwQ0ZxSEtsR01rSE9rSUlqSkdqS0ZsSkVoRU1qRE9pQlFrQVNqQk9nQVFmQ1FuQlJvQ1VwRVVxQlFyQldvQllwQ1h0QFtvRVtyR1t0Rlp5SV10RF13Q115QVt6QVp8QV96QmJ6Q2J9QWF/QFp4P1d4QVV5QFR7Pld2Q1V4RFN5RVR8RVJ9RlN3RlZ8R1d+RVWCR1l+Sll9SFqBS1x9Q1eAQVeCQFSEPlmBP1OAP1GBQVCCQE6EP09+PVB9PU96Pk16O095RVCFRU6HRVKGRVOJQ1KKQ1GMRlWJR1aHRlaLSlWIQVKJP1GKPk6NPFKJQE2JQEuJQkiNQUmHQUeHP0WIPUaIP0OHREyLRkuNRkuRSE2MQ0+SRFGTQ1KVRlKSR1STRFeRSlSSS1aTRliURVqUR16URFuWSFuRSl2QSmGOTFuPTl2OS1qNUFyMR16ORV+MRGGORGONRF6LRF2IR1yIQluHRGGQQ2KRRGaTQWGTR2OTSWWTSmmSS2SUSmiNSWeLSmaKTWiNT2iPT2aRUGqQUGeTUWqSR2mLRmiJRmqGRmyHQ2mKRGuLRmqNRmmER2qCRWmARWaASWqBSmx/S2uDRGp+Q2l8R2l7QWp7RmZ3SGd0RGR1QmR0QWZ1QmRyRmp2Rmx0SW11Sm1zRW50RW93Qm10SW13TG14TWt5T2t6S296TWd5UGR3S2V5S2J6TGF3TmJ7T2d1UGZyU2ZzVGVxT2dwTWZvTmRtUGNuTWRrVGd1Vmd1VmN3V2l3Wml3Wmh5W2p2WWR1WmF1WV94XGF0XV90YF9yYWFyYF1xXGJ5XWF7WmB/X2J8WWJ8V2N+VGB/VWV9VGZ/UWV/VWaCVWB7U156U1p9U114Ult3T1x3U1l2Tlp2UVd1T1h1TVZ0V1t8WFl9V1l/V1iBWll8W1l6XVl5WlZ5V1yAV1yDVVqGWF+EV1+GWF6IVWGHV1+KVWKJVWGNU1yDUFuDUFiDTleDTl2CTl+ETV+GUGGDTGGHT2OFTmOHTmWIUViBUVWAUVGCUlV+UVN8U1R6UVF9VVOFVFOHVVKJWFOFWVOCW1OCXFOAXFSDUlWIUVWKU1aOUFOLTlSNTlaOTVKNVViLVlmMWVmPWVaNXFOKWVKPYE+LY1OMZVKIZlWKYVCIYU2HY0mHYE2EXE2EXEuCZ0yMZ0qNaU2IaU2FaEuEak6EaEuBak6BaU2AaU1+aE6PZk6RZ02TaVKSalKNYk2TYlCUYk+XYkuUYEuWYEuYXkqVYlKTYlSVYFWUX1WSZFWVZVaSZ1iTZ1mVaFmRX1eVXVmUYFyTXFqWXl2PXV+PW1+QXlyMXlmJYVqMXmGPXWSPXWWNXmWLX2WRXmeSXGiRX2iUW2eNWmiLXGqKXGuJWGmLV2iNV2mJVWqOXmuMX22MYW2IYW2OY2uLZWqJZWaHZ2mKY2mFYWiEY2eCY2WBX2mDXWeEW2iDXmSDZGmAZWl+aGh/aWd+Zmt9Z2p6amiDa2WDbGSDa2mFamyFa2yDam2HaGGEaGF/ZmCEZ2GJY2CIZmGLYmGKZGGMY2GOal6Ba11/aFp/bVx/b12Ab2CAcVyBaFx7Z1p6aVh5all3ZVt4ZFl2ZF15alR5aVJ3ZlJ3a1N7bFB6bVB4a097alF1a0x2ak9xalFwalRxaVJualVvaVRtZ0l2a0d2ZUh2Y0l3ZUV3Y0p6aUdya0Zxa0pvakVvaEZubERtcEpwb0lsc0lwckdycEZycU1tcE5qckxpck1mcVBqb1Jsb1RtcVRub1ZrdEtqdUpodEhndUdld0lqeEprc0ZocURnb0RjcENpckFqc0Jscz9pdUFtdD5qdT9sbkdmbEdka0pka0tmakZkaEZmZUdlZ0NoaktjaU5jZU1iak9hZk5mZE9mY1FoZVFqY0xoYExoX0poYlNnYlVpX1VqX1ZrYldnX1dlXlVlXlllW1NqXlFuWlFpW05pWlJuWlJxWlByWk90V1NyV1ZwV1R0WVhxWU5wWktwXEtxXUlyWUpuVkpuVUxuVUhtXkxwYExxYU5zY05zYkxuZEtvZUpwZkxtXlF4YFR0YlVxYVdxY1huYlpuYlJ5ZFV8YlB9Y1F/YE59YVZ+YliAY1eCYlaEYFmAYFyCYl2AXl2CZleFaFmGaFuFaFWEaVSGalaCaFmIalqJbV2IalqMbVmHcFmGb1SGclmIcleKcVeCcVSBc1OBc1GAcVV+c1d+dVZ9c1l+dlKEdk6GeFOFeVWEfFWDfFKBflKAck6Ib0uIcFCKcVKLclOKb1ONcUyEcEuDcEaDcEyAdEmEdUeEd0eCeUiDd0aAeUZ+eEh9dkh8eUN9ekl7eUt6eUp3eEt2e016fkx5eUh3d0V0eENzfEZ0fEZxekZwfkZwdkV2dEN2cUV5dUB3dD52cT52dTx2cEJ3cEB8bD94aj96a0B1bUN9bUN/bT+Aa0SAakZ+a0V8cEGCcT+Dc0CEc0KGcDyFbzqGbTqKcDiGbzaEcDSEcDOGcTKCcDyJcD6Mbj+MbT+Ocj+MdT6Mdz+Md0GNeT6Ma0KKZ0GKbESIaUaIbkWJZDyJaDyFZTuEaT2DZzmMZjuPZjqQaTeNZj2OZj+QZECQYkGRaECRYUKNX0CLXkGKZEaMYkePYEmNXz6LXj2KWz2KWj2JXzqKWz2NWD2OVUCNWT2RWj+SXECQWkCUWESMVkWJWkaNWUiMWEqOWkqLV0yNWkyKWE2LV0+LWEOGVUKDW0KEXUaFX0OEX0aFYEGDY0WEY0CDZEKDVD6GUj+HUD+GVDuHUkGJUEKKT0SITUWIUEOMTkSOT0SQUUSRTUWSUUeFT0eBU0iEU0qGVkuFUkyFT0KBS0J/UECAUD5+Tj1+UUB8TEGDSUGESEOERUOESUCGST2HSDyHTD2HSUWER0iBRkqBSUmFSEZ/R0d9SUl8SEp6RUd8S0p9TEx9Tkx5TU1/TE+DS1B/Ukl6UUd5T0V5VEh8VUp9VUV+UkZ2UUV1UkJ1VEJ3UkVyUkNxVUZyUkB0Uz50Vz10UTxzUTxwTz5vTj9wUD5sVj9xWD9xXEBzWEBuWUJ0W0N1W0J4XUJ4WUZ2WUB4Wj96XTx7Vz57WD2AWDp+WDyCWDiAWDqCWzx3XTp2YTl3XDl0WTh0WTd2WDhyYj51ZT54YkB0YkBxYj5wY0FwY0B8ZT1/YUF9YUR9X0V+Y0V9Yjl9ZDh8ZTZ8YDh+Xjp+YDaAZjd4aTd5ajZ4Zjl1aDdzZjZyZDRzYjNxazh8bjV9bDp+ajOAai9/aDOCZzWDZjSFZDSEZjWHaTF8aTB6ay95ay13ZzB4bTF5bzB4cDJ3cjN2bzR4cDd3cDd0bjdzcThzczhvdTlwcTxwbz9wbTxwczZudTVtdTZqdDhqdDJscjJqdzZpeDdndjdjejdmfTdnfTZpfzdrfDRqdDVmczRkcDVicjFlcDBjcS9hby5kbjllcDtkcD1kbjpnbThpbDZobThrcDphcTxgcD5fcEBgcjtebj5ebD9ebUFcbkNda0FgbkNYbUZWaEhaZURXZERbZUBaZENeZT9cZEBeZklXZkxYY0xXYktVZ05WZ01UaU5YakxTYUxZX0xYXU1UXk5aX01dXk5fXUxhXE1jYE9VX1BSXk9PYVJSYFNPYlNNZFROZlRNaFVOZ1JLYU1RYUtPY0lPZUpPZ0dRaUlOXUlRW0dUWEZVVkdWWERTWUxRV01QVU1MVk9RVk9TWFFQWk1KWUtJWEtHXU5KWUdJVkdJVUZHWkRKWkVNXERKVUhLUkhLUElHUUlNUUdPUUdRUEVTUEhWUENXU0tIUk1GUktEUUtCVE9GU1FIVVNJVlNHVFRLVUlBWEhBWEc/WUdDWkY+UURCTUNAUUJFUURHU0FFTkZDS0dDSUg/SklETUk/TUo9TEg5T0w8T049TlA7T1A/TVI8TlI+T0Q6TEI3UUM7UUA5U0Q6SUE7RkE4SEE+RkY1RUc0REc5Q0c7QUU7QEU5QUM9SEY1SUYzSEQvTEczTEk0TUcwT0o0SkIySkAxRz4vSz4zTj0yTj0wTz8zQz8yQD8vQkA1Pz02PkE0Q0IvQkMtREMrQ0MpQkYuREcuR0EpRz8oRz8mSkIqS0QqTkQqT0QoUEMnUEAoUUMlRTspQjomRjkrSDksSjkpSTYoQTwpPj4nPkAoPTwrPzgsPTovPT4lPUAjOkIiP0AhQT8iP0IfOT4iNz4hNT4lNzwfMz8hLz0gMEIjMUMlM0QkMEQnNEYmMUYoM0coNEgpKzsiKT0hKj8gKjolKTsnKTsoJzshJTwgIkAgIzsfJD4kIz8lJEEmJEIoIj4nJkIlKEQmKUUqJ0YmLEAqLj8pLj0oKj8sMD8qMjsrNEArNDsoNTgoOTkpNTclMzgkNjUlNDchNzYrOjEtODUvNzcwNzgzNzozNzs2Nzk3Nz02OzMqPTEpPy4rPjEmPDIkPjIiQDEiPDIgQDIsQDUwRDMtRjIuRTIqQTIyQDM0RDI2PzE1QjY2Qjc8Rjs5RTo1RDQ+RjVASDVAQzA8RDBBRC48RTZCRjdERjVGRDVIRTlFQjlGRDtDSDRHSTNJSjRLTDVLSjFISS9HSy1GRy5JSTRNSjVPTTJPSDVRTjVRUTBTUjZSUjhRTjJVTjFXTixXTDJYSzBaSTFcSzRdTTNeTC5USyxTTipSTihTSixRRy1SRS1QRixUTytQUSpPVChRUitNVCpMUCxLUytTVStVVSdXVS1WVi1YUSdZUSRXUSNYTidZTilbUCpcTCpbUSVVUSNTVB9TUCNRTiBPUiBOTh5OUh5NUB1NVSNUWCJUWCFWWiBWWiRTWSZRXCdRXiZQXyZOXidMYSVOVx5dVyRcWSVdWidbXChcWypdUx1bUxpZUhlZUB1bTx9dUSBdTR9dVRpYVhhWWBhWWRdUVBlUUhlUURZUUBtUThZUThpUTRhUWhlYXxlVXRZYXh1TXx9TXiFSXB1RWxpQXBhQWRpPXBZPWBhOWRZOYSFWYyNUZCJSYyFYXyBbYh1aXh9cYRxcXx1dXRteYyVUZSdTZihVZilWYylSaShUbSpRbSdWbylXayZYay1TbC9Rby9OazFRaTJRaTVSajZQazhNZzdOcC9Scy9SdC1Rdi1QdDBUcy5WcS9XcTBZby9WcytQdipLcidPciZScyVNcSRScytLcytJcS1Iby1JcylHbyhIcSVGcC5GbC5Eay9CbzFDcTNFczNEcDRGaypDZipEaydDbSZCbihAbiRBcCc+byNAcCU+ciQ8aCtHZitIYi1IZyxLai9KZzFMazFLYzBEYC5DZTJDZjRFaDVEZTVHaDZGZzZHYy1BYitAYCpBXylAZCo+YCdEXCdFYSZHZCVGZSRHZCREZyNGZiNEXCxHWCxFXS5KXC1MXzBLWi1AVis/Wy4+WSY/WyQ/WSE9WSBBWR49WR5BVxs+VSVFUSZFViZIWCRIWSRLWCFHUi1EUy5GUTBHVS5HUCg+TCY+USg8SiFBUCBBTx5CUh8/SyRFRyRFTCVISiZJTSRJSSdDRyhCRiZARCZARyU+RiQ8QiE9RyM6SSI7SCU5RiE/RR5AQh9CQR5CRh1CQyJDQSNEPSNEQiVFQiRIQyZJQCRJPyRBPSU/OSI+PSY9PyU7Pik+PSQ5PB49ORw/Ph08OhxENhxFPBxGOCBFNSFFNSNENSVFNSFINh9JNB1KOB5KNBtMOBxLNhtMNxlOMCZBMCg/MiM+MyE+MyBBLyZDLSdDLilFLCtFKyZFKCZEJyhFJSlFJClCMClFMStHMyxGNC5HMSpJMixLLy1MMitONixCNzBBNitANCs+NS08NC47Nyw7MzBBMzJBNTZCMDNALzJCNDNFNTVGOTdHNTRJNTVLNTRNNDJNNTZPOTNFPDRFPTVDPzZDPTFFOzRBPDY+OjlAOzU8ODU8PDU6Pjk9Pjw9Ozw5QD08Oj48OD87Nj48NT8+Mzs7Mzo+NDk/Mjk5MDo/LjhBLDlAMTtDLz1DLj1FLz9BLD9FLUBCLEFEKkJELTZDKzZDLDdHKjNDKDdHKDhJKjdMJTlKJTlMJTxIJzRLKDJMKTNPKzJPKjFLJzRQJzVSJzJVJTdTIzVTITZVIzNSKjRVLDJXKjJZKzFbLjNXLzNVLjVYKTRaJzRcJjJcJTFeJjdcJTJaIzBaJC1aIytaIjBXJy1ZKCtZKShcKyxYLSpYLCdXLiVYKipgKCxiKSxkLSpgLi1gLilfMC1iJixhJC1jJCtlIiplIi1hJixmJippJStqJC1qKSppJCpsIytuJC1wIy9xIilwISdvJy1wKC9xJzNwKy5xKyxvLixuLy1vLyptKDFtKDNrKTVsKTdtJTRrLDVrLjdsLjtqMDVrLThoLDpmLjtlMDplKjxnLj1kMD9jMT5hMz5gMDxfMTtdNTheMTxbNjxeODtfOTdgOT1hODdkODNjNjdmNzloNjVoNDViMzNgNTBdMTRgNjRdNzRbOjNbOjFZODZaOzNdPTJePi5dPzNgOy9fOixgOSteOildOC1iOC1cNyxaOilXNi1YPCxYPixXQChWQC5XPylaQCdbPyVbPyNaQSdePihfPCVbOyNaOyJYOyBXOCRbOyRWOyNUPiFSOyVSOyRPPSdSOSJPQiJUQiBVRB5URCRVRiRURiVRRiJPQR9XQRxYQRhXQBxbPh1bPBxZPR5cPhlTQBhRPxdQPBpSQhpRRBlQRRdRRxZQRRtPRRdURxZVRhNVRBJURhdYSBJWRw9WRg5YRQ1YSg5WSw9YSw9URhBaRQ9cRBFeRRNeRw5eQhFeQRNfQBNiPxJjPxRbPRZfPBRaQhVjQhVmQRllRBVnRRNmRBZqPhdoPRpoPhtqPhpsOhloPh1qPh9sOx9tOyBvPyFsOh5sNx5tNRxwNR5rOBpuNxhvNxZuNxZsOBRvOBFuOhFsOxNrNhBtOg9qOw9oOg5mOA5mPg1oOw5kOg5iPA1gPg5fORBhOwtfPQpdPAtaOgxaPAddPgtZPgxXPgtVPwlVPw5WPAtTPAlRPwxPOgpPOQ1QOg1TQAhPQghOQgpLRAtLQwZNQApKQBBIPwpGQAhFPgxEQghEPQ5KPBBLOxFJOhNJPRJMPRFPOhRPOhJSOhBHNRFHOBBBOA1DNhNEMxREMRNDMhJBMxdEMRhELxhCMBhGLxJELhFDLBJBLBE/LBRBKxY/KxY7KhhALxY9MBY7MBQ4Mxc8NBY+Mxo9MRA7NA86NA44NRE6OBE6ORE8ORI+OBQ4Ow87PQ89QBI8Pw08PhI/PxVAQxZAPhZCPBdBPhVEQxNCRRBDRA5ERRRFSBRGShRESBZITBVGSxZIRxdKTBdJSBhLSxhLSA9DTA5FSQtBSglCSQdBTAhCSQxISwxKTQpKTgpLSQtMTQlITwdHUQhGUwdGUAlEUgpCUwxCVQ1BUQhAUQ5CUxJDVRNDTxJCThE/ThE9SxFAUxFFVRJHWRJHVBBKUhFLUBFKUhNNThJLUBROThNNWA9FWg5EXRBCWgtEWRFBWhI/XRZAWBM9VhM+WBE7WxdEXxhFWRhGWhlIVhhFXRRGYBRHZBVFXxFHYBFKXhBMXA5LWg5MWQ9OWQxLYRNCYxNAYxZAZhdAYhI+ZBA+Yw5AZQw/ZApBYho/YxtBZRxAXxs/Xx4/Xho9ZBxFaBxGYxtHYR1IYh9JXx1GahhEaxhBbRdBahVFbBRFaRlAaho9bBs9bB0+aBs8Zxk7ZBo5ZRw3cBw8cSA6cho6cRg7bhg7bx44ayE3bx80biEycCMxciMybyQvbiQ3bCU4byg3aig7aiQ7bCk1bCs0bC01ay41aysxbCkuaScwby42cjE1cC86by07cTE7bC48bzQ2cDU0cDg2bzYycDgxbzMwcjk2cj00dD0zdTw4dT45dz87d0E9dEE/cT81cEEzc0Iyc0M0bkIzdEIwdEYtd0ItdUIrdz8udkcxeUsyc0oydEk1cUo2cUg4cEw2eU8vd1EyeVAte1IteU8qe1I0elU0e1YyfVI2fU83ek04e1A7eVY1eFk1eFk5dlkzdFk1dlgxeFw3eF45e2E4e2A8fWI8f2E7gF86gWM6g2I4hl85hGU3gWU0gmg1f2YzgWo0f2gyhWI8h2E+hmFAhWJBiWI9iWQ9iGBCiGFEiWVDimBGil1GjF1Ii1pJjVlLhmhGiGlHiWtHhGhHgmdFf2hHf2lJfWdFiWdJi2hKjWlJjmhIjGZMimVNjmxJj21Ikm1LjHBHkXFHjHNHl25Gl2hIlWZJlmRIlWdMmW1KnG1GnW5Mm21NmmxMn3BHom1HonJFpHJHpXRGpHZFpXhFomxDo2pEpWlBpGpAomhEo2VFoWNFn2NGnWJFnmBEm2JGpmhCqGdAp2U+qGM+qmZBqmVDqmVFqmJDpWU+pGI9omM7oWU6omE/oV89omE5oWE3nmA4nGE2omA1oV02oVs0ol04m187l2E7nF09nVs8nFk7nVc6nVY9m2M7mWU8mWY4m2c9m2dAm2VBnGlBlmc6lGg4k2w7kmQ4kGg3kGM4lGw3lG83kG83lHA0knE6j3I7jHM5kHM9jnM+jnNBkHRCjXdDkXhDj3Y2kHY0knQ0j3k3jHo3ink4iHo4h3s1kHcykXcwlXYwkHgtkngrkXkpk3gnknollHowl3owmHozmnozl30wln4ulnwslYAul3k0mXY3mHQ3lng5lXs5lX04lH85kno9kX88kHs+kH4+m3Y3nXQ3nXQ7oHU2oXM2oXE1o3M3nHE5nG87nm88n24/m206nG04m283oG87o3E9pXE/pW46o3Y+oXhBpHc8m3VCmnVDm3g+nHo9nHo7nH4+nXw6nX47noE6mnBCmHBBl3JAl25BlW1Ak2tAk2tDkmo/kmZAlGY/jWo+jGtAi2s8i21Aim08im4+kWRAkmJBjmBBk2FDlF5FlV5BkV5AjVw+i1w/jltCkFpEjVw7i1w6ilo5i1g5jV03j1w4kFw6hlg5hlc2hVk1hFk6hFk8glc6h1U2hFQzg1I0iFIziFExi1M0g1Uxf1EvgFYuglItgk8shlAqgE8qgFAogVAmgFMoglEkgFQmgVMkgVUihkwriEwqhkomiUorikouikwmjkskik4ji04giFAjjEgijkgdjEQgjkMfkEIhjUAekUgfkkkdlEgclUYdlEwdkk4elUsglUgamUgXmEkVlkQXlEUWmEMWm0kYnEoWn0oXoEgXm00WoEwXo0wXpE4Yo1AYpEwVpU4aplAcqk4bpU8eo1Afpk0fqlIcrFIcrlAfrVAgrVQdrFYbrVkbrlkdrVoZsFAesU4gtE8gtU8esUwgtU8it1AiuFMhtlQhulMhu1Uhu1Yeu1gdvlYhu1Qdu1QauFQZuFQXvFIZu08atFQas1MWs1YatE8Zs04XsE0Xr00ZtUsXr00VrEkWrEgUq00Tq1ATqlARqlEVq0kYp0YYpkgZq0Uaq0IarEEYqkAWqj0XpkQXo0MapEEbo0IVpEMToUQboEQdnUQdnEUcoUUfpEUgoUgenEMfmkMfmUMimkEjmEEemT4flzwelzofmjkgmEQil0UllUYlk0cjmUYmmkglnEomnUkonUsllEYnkkoplEoqkUYqkEQqj0MsjkQokUwokU4oj08qjU4pklAmklInlFMoklQkkFAsjlEtjlYtiFUpilUmh1cojFYmiVkuhVwtiVwxil4wjFsxhFwwgl0wgWAtgF4yf1szfl8xflw1hGEvhWMvhmMshWUqhmUwh2cwiWgyiGg1h2EsiGEphmAnh2Alil8qjF8rjVsrkF0sgl4ngV4jgF0of1snfVooe1kneVgoeVgrd1cngWElgGIjgmMhgWIff2UkfWQlhGMihmQgiGIdiGUiimUghlwbiFshilgfhlcgilYehlUeiVQegVwcgV0agF0Yf1wef1ogfVohe1sgfFgjgmAagmEYg18UgmQZgmYXgmgYgWoWf2oVhmEXiGAVi18XimIUiGQTh2YTiGMQjFkXjlkYiFgXh1gVh1sVjVkUj1kTkVsUk1oVj1gRjVgQkFYQjFYOkF0UkV8Ukl8XlGAYkGEUj2ERjWARkGIQkF4ZkV4blF0djl0cjlsgjl8gjlsjjl8jjl0kkloblFgbl1kamFgck1YakFMaklQel1oYml0ZnF0ZmVwVmV4amWAcml8enGAfl2IcmV0fmlwhnVsjmFohnVofn1ken1cdoVYdnVUanlUXnVcXm1Mam1Idm1AdmlQfm08fmlMhmlAhmk8knlMWn1QTnlATolQTnVIQnFAOmk4Qm0wRnk8NmE8QlE0Qk04PlVAUk04Vl1EVlEsRkkkPkEoQj0kSkkcQj0wPjE0QiUsRi08OikkPiUcPiUURiEQRiEYMh0gLh0oLhUcJi0YSjEQUjEYWjUUYjkMTj0IRkUERjUARikcWhUgZiUsYjEwXiU0ai08WiEYchkUdhUcfhkgghkMdhkEbhEIfhz8cg0gfgkkhgUcjf0YjgEsggU0fgE0cgVAbf1EZgkglgUcpgkkrhEUoh0Img0Emf0cqfkgsf0cugEUue0gse0cpfUYpfkgwf0cze0Qyfkg1f0c3fkk5f0g7f0o9fUA0fD0ye0A1fEI6eUQ4fEM8eUU6ekY+fz4ugDwvgT8sgEIsfjoufzcvgTYtgTcrfTYvfTMvfTMyejIvgzUvhTQthTEuhTEwhzUthzcsiDcqhjktiDkohzsrhzsphjAtiSwsii0qhSsshSkthCcsgigrhCUtjSotjCgtiycrjisvjy4vjS8xkS8wjSYvjSQviyMwiSQwkCMwkiUxkSYzjyU0kigzjCEyih8ziCA0hyA2ix41jh00jhwyjxw2hiEyhCMzhSU0gyY2hyY1iCoziig3iyo4jio4jyw5kS03kSw1ki84hTA2hjA4gi01gCszfis0fCkzeikzhjI1hTY1hTYziTQ2izM3ijM6izE7jzM8jjA+hDg2hDw2hT03gTo3fjk2fDk5fTw6hD00hkAzg0M1hUExh0MwikEwh0QuhkM5hkY4hUg5h0M7iEY3iUk2i0g0i0Yzi0o4jEw3jEo0jkoykEkzkkkxjkwxkEg1kkc2kkY5k0Y6j0M7jUE6jkU9jkM/jkVBj0dBjkRDij0+jDs5jTw3jjk2jDw1hjs+hTg9hTc7gzw+hD4/gUA/fz8+gUI/hTc/hDQ/gjQ+gDU+hDNChjREhTNGhDVHgzVKgjI8gDI6fi85fy49fiw9fSs/fixBgCo9gCg5eyo/eilBeidCeiVAdypAdiw/dS5BdC9Bdi1EeiZEeCNFdiNGeyRIfCJJfSBIfSNLdh9Ddh1FdxxFdh5AdR5HdRxJcxtJcRxJdR5LeBtOdh5QcxhKcRdKcBhOchRKdBVJdRdJbRdMaxhOaxhSaRdNaBdKbRVQbRRTbhZWbxFScRZTchhUcRpVcRtXdBhTdhZSdxVUdRVQdxNPeBJRehBQbh1UbB5YbB5SayBSbh5PaxtWaRtYahpaahtcZxlXZhpVZBtVZhlTbBlabhlcbhtfcBdccRVgcxhechVidRhgdBdicB9dbiBebiFgcSBbdSBYdSBdaiFeaSJiaCFcZCFfZSRcYiNgYyZdYCZfaR5gaB1jah5naBpiZhphZRdhYxtibB1kbh1mcCBocRxlbyRlbidocCVjcCRhaSVoaShnailoaiVraSNsaiFraCNuaR9taCBvaCdlZyljZStkZS1jZylhaSpfaS1gaSldai5eaitbay1cbC9aYyplYStlYCpoXSpoXypjYSlpYShsXyZrXiVtXyptXyVpXSNoWyJqWyBrXyFoWiRrWCNsVSJqVyZtViBtVB5tUx1vVB5xUxtvUhlxVRhxURdwThdwVRh0WBd1WBV0WxVzVxd3VRl4Uxh2VxNzVxFyWRFwWxBwVQ9yWBJuWRJsXRRqVxNqVhVrVxdqVBVrXhduYBVvYhVuXRlwXBtvWhpuXB1wXxNwYRJxYRBvYw9vYBBzYBJ2YBB4Yg54XhB5YA9tYA5rYg9qZA5pXg1qXA1rWgxqWgtoWAtrYhFpYxNoZxNoYhVnZhNraBNsbBFsZxRvaRNxbBRxbBZwbRJyaQ1sagxqbAxpaAttZwlvZwtxZgdvaQ1oag1mbg5kaA5kaQ1haQtgag9gagteaw9dawxdbhJnchFnbhVocBZpbBZncBBqcg9rcw1qdQxqcQ5ucQxocgpndglkcAhmbwZobQVnbAVlbARpdhBgcg1fcQtecAlfcQpcbwhecAhcdw5jeRBkfRFiehBmew5gfQ5ffhBbfQteewpdewpaeQleeQlaeAlcexBdexRbdxNbdhFacxFadQ5XchBZcQxXfBVdfhdegBhafxdgfRhiehdifhlkhBRbgxRYhRVXhRJchhNehRRgiBJfgRNYgBNVgRZSfhFVfw9WfA1Vew5VfAtWfhlVgRtSfRpWehpWfR1WeRtZhRtWhxxShhtYhRtaiRxXhR5bhRhThhdRhRhOhhlNhhRRiBNShxBShg9RiA9TgxlOghpMgx1KfxpNfhlLfBdLfBZNexZKgx1OhCBOhyFMhCFQgSFRhSNQgSJUiB5Oih5Nix1LjB5JixxPjhtOiRtKihtHih5EiBlGiRZHiBRGhhVFiBJHhx5GhiBFhCFGgSJDgyVFgCRCgidEgCdCiSNHjiZFiyVKiSZMkCFFjyFCkSFBkR9GjSFBjCE/jSQ8ih8/iR88hx08hR49gx87hB85gSA8iCg+hyo+hiY9jCxDjy5DiytGiCtGiy5HhypIkytDky1FlS5FlCxBlCs8kyg/kyxHky1KkS1LlytKmSpLmStNmClPmyxKmy9JmzBLmi9Hmi1Omi1RmC1SmCxUnC9Sli5SlC5TkytTkitVki9RkzJRlDJPkzNTkypRkihSkyZUkiZQkSRQjiNRkSJNlyZWlidYliVamSZVmiVTmSNSnCZSlilYlSpbkylckylelS1amC5amDFZmjJZmzRZkSlajyhbjiVdjShYiyZZjSpYkSFbkiFdkR9fkiBZkh9Vjx5XlCJelSJgkyNikyJklyRgmSRikiVhkCZjjSRmjyhijSNiiyFiix5liiBghh5hiRxghRxiiBpghRphhBhhkBxlkB1nkBxpkhtkkhpikBpglBlhkR9okSBqjyBukiNqiiFsiR9rhx9riSNriiVsiSZujCdriihvjCltiRpqiBpthhhtihlpiRpviBpxhhtyhBp0ihpzihl1ixp3iBh1hR1xgx9xgRxwgyFwfx5yfB1yex90fCF0fyB0ehtveRtseB5pdxlseBdudxhqdxVudh5tdSBsdiNpcyFuciNtcSRwcyVxdCRzcyFzdiR0eCNseiVsfCVueyZwfCdyfydxfCd0fCJpfSFnfCFlfSJjfh9ngB9pghxpghtngxxreSFleCFjdSBkdyhkeSthdypmdClndCpqdixqciprfylffylkfy1mfipofSdafSJdfyFefCFbfh5eeidceClbeixZdCdcdSxccihdeyxcfC5cfi5afy9Zfi5efTBgey9ifTJhejFjezJjgStYgitUgihYhSZbhipbfitVfStSfi1ReypSeiZReSdVeSRReCVVeSNTfi9SgjNOfzNTgDVSgTJVhS9PhS9Lhy1QiSxPiy5PiipQgi1MgSxKfixIfilMgihLfTFJfzJGfDJLejFNei9NejNPezJGfDNDfDZDezdFeTNCeTQ/ezM+dzQ/fjdCfjlCgjlDgD1EgjxIgkBFhjtJhzxMiD5MiTpJijxHiD1GhTxOhT1QhjtShjlSgz5Qhz1UiDtWhjpYhDtXiT1XhzlZhTdbhjZdiDZdhDZahjRWhTFaiDJVhzBYiDBWhTVfhTFhgzFghjVjhzhjhzllhTlnhTpphzBihi5jhi1lhCxmiCxihylihShhiChkhCZhhCNkhy9nhy9phjNriC1rhCttgilthCdqgidsijFqizRrjTRpjjZpjDRtijRviTJvijZwjTJnjzNljjRjjTNikDBlji9kkS9njjZjkTdfjjpijTtkjTxgjzVbjjdZjDdYjjFcjzJYjS9ckDlYjzhUkT1XkT5ZkT1bkkBZjzxSjjtQkDpOkjxOjDxPjT9Pi0FPi0NPi0VNi0RLjEdOkDlNkjhLkTlJjzhHkjVLlTVJlDVHlzVFmDdGkTtIlDtEkT9Gj0BJkENJkERHkEdHkUhKkEhGkTxCkjs/kz4+kj89kTo+kTdBjTc/kDVCjDZAjTJDlj8/lkE+mEM7mEJAmkBAl0NClz86mD84lj42lTw2mj43nD85lkA0lD8ylT4wlD4ukkEyk0IwkUI0lz0xmTwvmDkulzksmzwvnT4vnEAxnUIxnEQzlzgvljYvkzQslTQxkzQykzM0kTI1lTE1kDgskTgpjzcojzotjDosjjowkzkpkzomkzgilTsmmD4olD8nlDUlkjEkki8kljIjlzQhljUfmjQhkDImjjAnjDAljTEpijAmhjElhTEnhy0khiwniSsjhTMkgTIjhDcjhDsigTokfTMmejYofzAoejAofi4qejYkeDgkdjUjezshez0ifDoffT4hfjwgdTcmczYncTooczUqdDcrdTMudjcvbjYnbDgpbTgrajYmajQnaTkpaTosaDgvZjssZj0uZDorZD8uZzMtaTItaTAuZTItZTEqYzQtbTErbC8qbi0qaiwnay0kbCskZywnZCspaCoray8jbC8hbzIhazEgaC4eZjEgZS0dZDAgYy4fYS4ecC4hcy8idC8gdC0jcy0mdCsndiomcyopdjEfejIeejMgdzQcdzYddDQbezAdgDAbfi0ffCwhfCohfSkjfCkmeikmfSgngTIehjIdhzIfhDUcgTYbhjYbgTUZhzAcjDIaii0bjSwbjiwdjisajjQekDMdkjMejjYgjDchjDgjijgfkzIakzMXkzIVky8aki4clDUXlDYVljgVlzkXkjcTkTkVjzgXjzYXjjoYOj1ROkFRPT9UPj9POz5MPkFMPz1MPDpLQDpJPT1IPz5GPj9EPD1DPUJDP0NDPEFAOj9DOD9EOD5HNj9IMUFJMkVBNUJCP0ZEQEdDP0VGPEdEO0hBOUlBN0hCOUtDOk1CNU1CNUlENUhGNkZHNUZJM0dJMkZNLk1JMkpHOlBEPFFDO09GOFFEOFNFNVRFNFJGNVVHNVhHMFZHL1JMM0xPNE1LNE9KN1lIOFtHOVdJNlpKM1xKMlxMMVlMM1xOM15PL11QMFlOM1VOM1NPM1BTLlVXL1ZTNl9QNmJQN15PNV9TM2BTMV1VM19YNGFZMF5bMVtXMVdaNlNVNVdUNFlVNmJaN2RaOGBYN2BcNWFeNV9gOWBjNlxkNVtgN1pcOFlbOlRaOVRgOFZgO2FjPGNkPGBgPV9kPF5mPVxnPFpmQFtnQVxoQFhpPVhmPlRkP1ZcPllfPllhRF1oRV9qRF9lRVtnRlppR1doSVhmS1lnSlRnR1RlRVhiRVhgRVZbSFJeR1JhTVhoTFZqT1ppT1ZnUFVnUVNlT1JkVVRlU1BiT1JiTlZhTVdfTFdZTlJaT1FdV1ZjWVZlVVhjV1VhWFNgWFJeVlJdWVRcXFRcWVFZVVNbVFdcU1lcUFxYUlZVXVZbX1VaXVhdXFdZXVhXXFdUWVdVXllRWlZQWFhTV1tWVl1WU2FUU11NVVtQX1tQYltPX11SXVxOXVpMW1tKWVxMXF5JWV5HWF5LWGBNWWBPWGFQVmZRVWVLVmNKX2BHYF9EYWFJXmJGXWJEW2RDWWRFXmdBWWlBWWdFWGtHWmlMWmlOW2ZLWmZJYGhBYWg/YmhEXmxAXG5AW21CX3E/W3NBW3BEW29GXW1HXW1JXXBOWHZKWnNIYnNAY3M+Y3FCYXVCX3dBXXdEYHpEXXhGX3VIYHRKYXVQXnpOXnpMZH1DZH5BZXpDZH5FYoBFZIJJZYRJYoRNYn9MY3tLZHlMZHpOZndRZX5UY35QZH1PaIVIaIdHaYNHaYVLaYNMaYRPaIJQbINQbYZQaoVUaYFSan1QantQa3tSbHdTbHxXa35WcIVQcodPcYNQcoZUcINXc4RYdYZZcoNccIFYcX1acnlTcX1TcX9Ud4ZYeIhZeIVWeYRaeIRcd39de4BdfYFee31geH1ceH5YeHxWeXhTe3RbeXhbf4JdgYNff4NbgH9cgn5dgntegHpdhnpegnZfgHhcgHRZf3hSf3pWf3pYiHpdintfiHxbiXhbiXZciHRbhnRZjHNZiXBXhnhWhnlUhXpPhXJNhnNRj3RZkXNbj3dZkHNWj3FWj3FTjXJSk3FRj3FOjXNQjHZNi3xRjHlTjHZTlnJSl3FTlXVTlnNPlnJNmXVJlXZGk3ZKkXpKkXpIkHxMkH1QknpPknhOnHZKnXRLnHhMnnlIm3tGoX5GnX9Dl4FLlYBOmH1Mo39IpX5Hon5KooFIooNGoYdIo4hIn4pHnIVKmohLmoNOmoJQnIJNnYNLpYlKp4tIpodLo4tLn45MpJFOn5JPno5OnYxPnopPnohQm4ZUmoxUm41TppBQqJJPp45QpZFSppBVpJFXopFWpJBZppFbopBaoZNboYxWoYpWn4pYnohZnoVZnYhbnItcm4tenY1bn4xZqJNaqZNdppVaqZNYq5RXrZNWrpZVr5JXsJBVsZRYs5RYsJZVsZhWsJpYsJxXspxVs55Us6BVtJ1StJtRs5lSsppUsI5WsIxUro1Xso5Ysoxas41csYxetY1dto9ctI9hsotgs4lgs4detIVftoJjtohotIlkuY5cupFauoxbu45eu5Fgu5Biuo5jvo9iwJFivo9nu41lvIlou4Niu4hhu4phwpBhxJJhwo5fxI5jxY9lxY1nw4xoyYxnxolox4pqxIlow4RpwINhwYdiwohkzIxlzo1lyotjzYlmzolozoZozIVpz4Rn0oRnz4FpzINoyoNmyYVlx4RjxIBgyH1kyX5m04Rk1oRl0oVi04Fk1H9l031k0X1l1nth0nhi0Hxjzn1hzHpgzIBeyoJdzYFgz4Bh13tf2ntf135e1npd13dd1nZb03Zc1nZY2HVX1HVX1HNX0nZZ0XhZ0Xpaz3xZzH1WzHZSznZW2XdV3HZV2XlW2HZT2HRS1nRQ1HRR1nVO2HVM03RL0nVPznhN0H9S0ntS03lR2ndL3HZK2nhN2HhJ13dH1nlG1HpH2HtD1X1F031D03xH0YBI1IBN1IFP1X5N1X1L231D3HxB235F2X9B2X8/14E+1YE/2IM+2oQ71oU+1YU71IQ/1YRC1oNE1oRG1IhJ0ItD0ohC1IZD3IQ83YQ53YE93YY+3og93Io92ok/3Iw+3Y482I492YtA141E24lJ3IhF24lD4I894ZA64Y4+35E+3pM93JQ/25JA3phA2ZdC2pNC2pNH341J349F4JpA4Jw/4phA4JpD3ptE3ptH3phH4JtI4Z5J35pM45RK45VM5JNJ5JJH5pFG45NF4ZVG459I4qJI5J5G5Z9K5p1L5p1N5ZpO6ZxO6p9O6J1S55lQ6JZT6pFN6ZRM6JdN7Z9N7qFN7Z1L7p5Q8J1P8ZpR75lR85lQ9ZpS8pZR8pZU75ZR7pdM7pVK7pNL7pFI749L8I1P75FP95pQ+ZpR9pxO95hO+ZhM+pZM/JZO+JNL/ZFM/ZRP/JRS+pZT+pVV/JRW/JNY+5Na/pFY/5BW/5FU/ZNU9pFL9JFJ9ZFO945L9oxM+ItO+Y1P94pQ9odP+ohS+YxS9ZFU9ZNZ95Ba+Y5a+Y1X9IZR9INP8odR9YVT9INV9YRX9odX8oVZ8YJa84Zb9IVd9YhZ8o1W75FX8JBb8Y5d8oxc74JZ7n9b74FW7YRa7YRc7Idd7Ylb54Zd6Ylb6Itd64pa7IhW7IlU64xQ6o9T6pBV6o5X5YVd5IRe5YVa5Ihd4Ylc4Ytc44xb3oxb3Y5d341Z3Y9Y4Y5Z441X5ItW5YxU5I5T5Y9R5o9P45NT4pFV35Bd4ZBd3pFg3ZJc25Jb2pRZ3JRX2JNY1pRa2JVW15dW2pRV25JU25BU3I9S3o5N3pJN3pVO3ZVR3JNR05Na0ZRa1JBb05JX0JJW0JNU0pNSzpJSzZRQ0JBRzo9P0pFQ1JBQ1I5S1oxS2otP2JBL1pBNzpZQ0JdPzJhSzJdOzpdLzJVJzpRIyZNLyZJGzZJHz5BI0pFI0pJG1IxL0I1Kz45Jx5JNxZJNyZFPx49LxY9Jxo1IyI1HwopIxYlFyYpHyotLzIpN0IZOz4VIzYdHwYhKvohKwolNwoZJwYVHwoJHxINGwH9Jw31GxoFHx4FJx4RKyYRLzoJOzXtKyn5JyYBKv35LvH5Lv4BNwHxMwHpLwnhLxHpLwHVOxXVNxnlMynlPyIFSxX9PxX1Ov3VRvXNQv3hRwXRSwXFSxHFUxnNTxHFWw29Xx29Xx3NVx3ZVxXdUxXlVx31ZynhayXZZwW9awG1bv3FZw3BcxW5dxnBfx3JexXBhxG5jxnJiyHFjx3NgxnZfyHhixHpew3xdxHhdxXZdwm9lwWxmwHBkw3BnwnFpxHNqxXVownVswnRuxndtxXdpwndmwXlkv35kw35oxHxpv3Rvv3NxvXRtv3dwwXhywHpywXxwvXt0vn5xwH9zwH5vv3xsvXxqu4BmvoZrvoJsunx1unt3uXtzun91uIB1uIJ0uoJxtoNztYR0uIdyuYRwuIZstn9nt39suIBusoR0sYV2sYJzsYZysolysYpws4lur4pvrYxwr4pssI1ssolssoRssoNrsIBmr4Rlr4ZlsIdnq4tyrIx0q4hxqYxxp4tvqIttqopspoprpItrp4xnqYlpq4Nsq35pqoBmqYJlqYVmootpo41nn4xqoYlmoIZlooRmnoZmnYVknoRooYNno4RrpINtpn9sp39upn1rpXpoo35om4Zim4VgnIlimIZjl4RjlYRllYVnlIlmkopmlIdok4lsmYptmotumolrmIhpj4ZijYZikIRgkIhgj4phkIxgko1gjY1ckJBck41dlYtclo5ZmIZZlodclIldi4taiYxbjIlbjIxYjI9YjpBWkI9WjY9Ti5BSkJFRkY5UkopWk4hWlIhTloRTlYpPlItQiY9Rh5BQiYxRi49Oi5FNjZBLj49Mi49HkI9GkI1Kj4pOj4hOkoNOlIVLlIdKk4lKiI5Hh5BFh45JiYxFi4pCjYlEiohCiIdAjYVAjYdEjYZGjIdIjIZKjYFNj4BHj4JGjoRHhoZAhIc+hYZCh4NAiII+iYA/ioBBh34/hX09iXo/in5CiIBFiIBIiH5Ni3pJintGgn0+gX07goA/gns/gnk/g3dBhHhDgHdCf3VBgnZFgnNFhHdFhHlJhHdKg39Mg35Hg3xGfXVAfHg/e3VCfHM+fXM8f3I8f289g3M6gm86hG88gG48f2k7e2Y2emo1e202fG03gnU3g3c4gHU2h3M2iHI0h280iHEwi3Awh28xgm8ygG8xfWwtgWssg2sshWwtg20viXcwi3kwhngxiHYthncshHUsgnYqg3UogHIqgXQugHgwf3kxensyd3Uue3Uugncmg3cjgnonf3clfnUkfHQke3Une3YheHckd3UjeXYne3kpe3oreH4ucXordXkpe3kffHcdfXogeXoed3gddHkedHogdHsccnscdH0ec38edX0jcX4kd4ApeH4ld30jcX0Zb3sYc34Yb38abH4aa38can0eaoMea34gbHwhanwkaX0ka3olbXglbXYmbngibXoha4YfaYcfbYYdbIYha4YjbYkmbYoocIkkcYslcYYmc4Ukc4QidYMidoQjeYQkeoMieYUmeIYndoYndYUlbIwpa40mbo4qaowraIsqZ4ksaIYrZoovaIYvZoYwaYUtbYYub4Yuc4IrbX8obIIqZ40wZY4yaI4vaYwyaIs0a4o2bIw3aog4aoY3bYg5b4c4bYs5bI07bo09b4s9bY4/a5A+apFAapA8ao46aYM4Z4Q6bIM6aYE3aIAzaYExaX0zZ3w0aHwva38wbn0tdIAwcIEyboEyaHo2Zng3aXs4aXg0aHcyanUxbHcwbHQya3EzbXIubnYvcnYudXs0cXozb3kybHA1am42bHI3b24ycW0yc28xc2o0dW0zdmsxdW8ydHM0dXU2d3Q1eXY2eXg3eXIzcWk2b2g1cGs4cmU2c2M4dWQ4cmI6cmA6c2Q8c2I+d2Y8eGU+eGM/emc/e2s/eGo8d2g7cV45cls6cV42bl46bl08a109al88alk8Z1w+aF87aGA5ZmA4ZGA5Z2E1aWE0aWIya2E1amA4alY6alQ7bFc5aFY4ZlU5ZFk2ZFI0YVYzZFkzZloyaFs0aVwzaVwwaV0ubF4uaFwsZlssZVouZlswZVAzZE4zaFA0ZlEwZFEvZVIsZlUtZlErZU8qaFMpZlMnaFUrbFYrbFcpblctblYvcFYwbFQwalQvZkwqZUopZkwtaUwpaU0na0wmbU4nbEgmb0oncEolb00nb00qck0rc0wqck4ucE4vcE8xbk8ubk4rbEUnakQma0YqbkQnb0QlcUMlcUEmckIidEQhdkEkcz8lbj4kbTwjbDggcjggdkQgeEQidkYedkIeeEAedz4aeT8ZdzoZcT4ebz4eaj0cazsabToZcDoZeUEXfEIWd0MYeEAUeD4Udj0SdDwUdT4Qdj4Ocz0QczsOcjwTc0AVb0AWa0EXbjwUdkENeEELdkMOdEALcz4KcT8Ibz4KckIGbUAFbT8KaUELa0QSbkIQbkEOckUFdUUEckYHcEUEcEgEbUgDbEYFbEsEbEwCaUoEaEoCaUgGaEkJZkkIaEkMakkPbEgMbEgJbk4CblAAcE4DbVAEalEEaVIGaFEHa1YGaFYJaVIKalALbE4KbU0LbU4Obk4Qb0wRbU8SalITalEPblcFblgDb1QFb1kHcFgJcFoLb1wJcFkPb10PbV0La10KalwIaFwIZ10JZV4KY10IZF8LZmANaGANaV4Lb1YQcVUSblUObVcSbVkUa1oUalwSaVkYZ10WaFwSYlcKYVoNYVsOY1wQaFYZaFYbaFQXZVYYZFgaYVkZYVkWXlYbXFkXYFgVY1YTY1INX1MNXVQOXlYQX1McXVMeYVMcXlEaW1EZW1EWXVEVWU0WW04SYU8UYk8WZE4WZE0UaEwTZkwQZEwPYk0QYk4SWUoXV0oYW0oZWkkVWEkTWUgQW0kQWUMQW0UMXUgPYEgTYkgUZ0cTZUUOYkYOWUERVkARWkEUW0AQWz8NXT4MX0AMXjwNXToMYTwKYT8NYkAPYEERYUETZkAWaj0PZj8PXTgOXDYNXDkRYDcPYjYNZDYNZTgOZDQQZDEPZzQRaDMPZzcQaDgUajcUaDkWZToXZTsZZDoVZDkTYjAQYC8PYDISYy4SZS0RZisTaCwUZSoUZicVZSsXZCoZZywWaC8YZjAYZzIZajEZbDUbbjIabi8ZcC4ZbC4Yai8YZSUTZiMVZiURYiUUYSMWXyIVYCESXyAWXSAYWx8UXx4SYR0SYx0SZRsSYxkSZBcSZhYRXRUTXxkSYRoSXR8bXCAcYB4bXB0aWR0aWBoZWhkXVhgdVhUZWhYYXBYYWxIYYRUZYxQZYBcZXhgYVxcfVRghWRcgVhQfVxMhVxAgWRAeWA8hVw0jVwsfWg4eXREeYBEfZQ8fYwseYQoeXgseVw0mVQwnWQ8mWQsmWQklWwclXQgjXAUoXwQlXwgjZAgjZBAlYA4lXwwkXQUrWwQtXQgsYAUrYAIrYwIrZAMpZAMtZAEvaAEsZgQqagcqZg4qZAsqZAgqZAIxZQAzYQIyZQQxZwUzaQYzaQcwawc0bAY2bQgybgcyawgwZwsvZw0vaBMvcBAwbQ0wbAg5bQY7aQg5bQo4cAo4cQ03bw42cQ46cw85bxA6bxI7bxA3ag82aBE2aRM1ZRU0axc1bRU1axM2dRA7dg48dBE9dxI6dhQ5eBY5eBY7ehU4exg3fBU6fhU6exU/ehNAehNCfBVCfRZFfBVHfhhEfhlCgBtDfRlAfBdAexg0eRYzfhgzehs0eBs0dx40dx43eSAzdyIyeiA1eyM1eCA3eiA6eiI7eiQ6eyE9fR5Aex08eh06dyIweSEudiUvdCEvdB8tdRwucxwvdxoqdxcucxkvcBkvbxcwcRUwbBgvaRgubRoubxsudhoneBomdBondhcoeBUpeBMpdhMrdxEneREldw4pdBEqcRQqbxQpahIpbQsrcA4qeBAjehAhdxIidw4ieAwjdgokdAsldAkhdQggcgYjcgolcQ4kbxAkahEkaAkkbAoldAgddgYcdAsccgcccQQdbwQdbgYfbQMZagMdbAYfaAkfbA4dbBAdbgwdbgoebQQWbQIVbgYWagQWaAIWZgMWZQQYZAQSYQQWZAYYZQgZZwkZZwsZZhAaXg4ZYQsZZAUQZAMOZwYQYgcQYAcQXwkQYAoSXQsNXA0RYA0SZRETZw8SaRASZg0RZAwRXgsKXAoIYAoJXg4KXBAKXRIKXxIMXhMIXRQGYBUJXhcKYBQMYxMMZRUMZRcMZxMMaBEMahAMZRAMYxEMXhQDXBMCYBIDXxYDYRcDYRkEYxoGYhsDYBwBYx0EYR8FZBwHZhwHZx4IZh8Iah0IaxwHbRwHahoGZxoGvUw8vUk9u0g8u0Y9uUk7uEg6uEk+uUZBuURCuEJBuURFukZGu0ZIu0hFukhCtkk3t0g1tkw4tEg3s0c5skU5s0M7sEQ5r0I3r0Q7sUI8sT9As0ZFs0lCskY/rUE2rUA0q0Q2q0A5rD45qj08qz4+qD47pjw8qEA9qkA/q0RArEVBrUZGq0FHqkBEoz08ojs7oz88ozw/ozpAozpDpTxDoTpEoTlGoT1Eoz1FpEFDpENDpkdGpkJKpUFJnjhHnjZInTlGnzpJnzlMoDtNoT1MnzxPnztSnz9PoT9No0RPoEdIoENInkNGoEFKnjtUnjpWmztTnj5VoD9VoEFWoENTnkJXn0NZnURVn0VUoElSnEhLnEVOnURQnURbnkRemkNbnEdankhanktZnUtXm0xbnE5bmUtZm0xXmUhVmEhSlklNmlFPmk5Smk9dm1FfmE5emFFbmlNamFRYmFJWllVZlldZlFRXllNVlFNQkUxQk01UlE9VlFlalVtbk1hcklpYk1tWkltUkVhTj1xUj15TjVpTj1hSjU9SjlJUj1RUjV9UjWJUjF5Xi19Ti2BQiV9PiVxPh19PhmBNhl1Qh1tPh1lQiFlTiFdUiFFTh1RNh1ZNh1dQhmJLhGJJiGNLhWRNgmRNgWZPgmhPf2ZQfmRSfmhRgWlRgGxQgG1OgG9NgHBQgHRPgXBXgW5UgW5RfGNTfGFUemRRe2VVfWVXfWdYfWpXemhZemdcemtafGxYe3BaenFTenJSem5Te21Ud2Zcd2VfdmVadmlddmlgdmxgd25fc21gcmxic29gdnBedm9adXBYdHRVc3hcdHRcb2xhbmtjbmtfbm9hbnBjbnNjb3Rha3NiaXNka3ZhbnZfbnVdbXlcbnRYbnNWbnJab29abnNcZ3NjZnJmZnFhZnViZndjZXlhZ3pgY3lgYXphY3teZnteZn1ZZ3ZVZ3ZaZndcXnlhXHljXnZgXXpfXX1fXH5dXn5bWn1bWH5cW35ZXn5ZXn1UYXZUYHVZX3pZVnxcVH5dVnpdVXxZVX5YVH1VVnxUU3pVUHtVU3pSWHlSV3dPW3VTXXNTW3dVWXhUT3hVTHlWUHdXTndTTXlRTndOUHdOS3VOT3RMUXVNU3RRVXJRWG5RVHFLSXNPRnROSnJRSXBNSHBLSm9JTG9KSWxJR2xITGxIT2xLUGlJU2pQUG1PUG5RT25NRmlJRGlIR2lMSGdHSGVISmRHTGVHSmFISWBGTWFHTmNIUGBLT2VSTmZOTWVMRl9HRF9FRmBKRlxHSFtJSlpITFtJSlVHTVdJTlpKT1dOTV1TTF1PS2BQTFxNSFNIR1JGRlRKSVJKS1BJTlFMS05NTU5PTlBPT1FUSldUSVdPS1RPSUpMSUhLR0xKSEtOR0lQSUhRSEdUSEVUSkhWS0pUS0xZSU9YR1JXR1BURlFSSU5URURVRUFVQ0VTRUVYRkNZRkRcRkZcQ0ZeRUheREpcREpaQ0xZQlFZQlBeQk9fQ01fQ0xdP0JcPj9cP0NZPkNePkJgPkdiOERjOkhjPUliPE5iPE5aPUpcPUlZPUleNkRiNEJjNkRfNUZjNEdlM0lmNUtlL0plMU1kNE1jNU1hNUtgNktdNU5ZM1ReNFFgLUlkK0hmLUdiLEtjK01kKk9iLFBhJk1hKFBfK1FfLFNbME1XLkxbLU1dJExfIk1fJElgJktdJEtaJE1ZJk9ZI01WIUxWJE9WJlBXKk1XLExWL01RLFBQK1JRKlRPKVFTIEtUHUtUIUhVIUxSIUpPIktNJE1OI0pLIUlKJUtKJkxMKEtOK0xKLElQLkhRKklRKEtQIUdIH0dHIkVJIkhFI0dDJEhCJklDJkZAJUU+KEdAKElCKkhELEdELUhDLUVKKUZIKEdGQipqQyxpRClsQCtrQCxtQS9tPzBuQy9uRTBtQzFxQTJwPzNxPTNyPDR0PjV0Pjd2PDh4QDh2Qjh1QjZzQDVzSDBtSC9wSTJtSC5rSy1rTC5pSy9nTjBqUC9rTjJoTDFmSjRkSjNiSDZkRzdmRjlmSDdoSDhqSjVoUjBsVC9uUTNsVDBpVC5oVC9lUzFlVzBlWDBjVjNlVDNkUzZnUThoTzplTjxmTjpjTjhfUDdiWzBiWy1iXDFkWzFgWjBeVzNdXDRcXTNZWzZcWDZcVDhcUzpdUz1iVjtjWDljWDhhXDNXWjFXXjNVWjVXWTZVWDlXWjpUWjpRWTxVWDtXWjxbWj1dWUBhVkFeVEFcUkJcVT9aVz5bXTpQXDlNXjlSXT1PXT9RXkFQYUFQYUJOYkJSYENUXz9WXz5YX0BaXkFcXj9eXkNdXkVbX0RZX0JYY0FMY0JJYz9MZ0FOa0FPbUNPbD9QaT5XZztWZjpVZDhVZjpSZzxSb0RNbkZMcEJMcURPcUZRckVTckNUdUVTdkVVdUJTc0FUcj9Tcj5RcTxQcDtSbzlTbjhSbjlVbztXbztZcT1WcT1UeEdVeUhXeElTe0ZUfUdTfEdQfEpQfkZPfEZMf0hOfkpOf0xQf05Pf09MgFBQgVBSglJTgU5TgExSfURKfENIfkJMgEVJf0dIgUlHgkpJhEhEhUhIhUpJhk5LiExThkdRhklNhEdCgkhBhURChkhAhko/h0xAiEtCikw/ik49i01BiU1DikpHjFRJi1BHjU48jVA6jkw9jlA+jlM9j1Q/j1NBklU/klc/k1RBkVNDkU9EkU5Gk1VMklRIlVg+lVs9lVY8llhAlllCmFhEl1ZFnFpEm1VFmVVGmVNKl0tIl05FmFFFnlpDn1xCn1hCoFlFn1tHoFpJn1hKo1lJpFpLo1ZJoVZKn1NHn1FHnUxIn05Qn1FNp1lMqFtNqFhJp1dNp1hQplVRpVNQqVRSqVNUqVJQp1FPp1FLplBJpEtHpE1Oq1JVq1NYrVNTq09VqU5WqUxWqEtUq0pXqkhYrElUqklTqEZQqkpJrE5Mq0tPrEdZq0Zcr0harUVYq0NXrEJVrENTrUBVrD1VrkBSrUJRrEJMsEhKsEdOsklPr0ZQrjtWrDpYsDxXrjpUrDlSrThQrjpPsDdQrzROsThOsDpNsj5Ps0BOtERKsD9HsD5JsTJOsDBOszNQszNMsTJKszNHszZItTNHtjFGtjVGtTdGtTlItjlKtjxLtz1Itz9IuEFJt0BFtz5Etz9BtjxEtjtG"};var Pe=i=>!!(i.person||i.ghost||i.moc);function Xe(i){let t=i.filter(s=>!Pe(s)),e=s=>Math.max(1e-9,...t.map(s)),n={i:e(s=>Math.log1p(s.inlinks||0)),m:e(s=>Math.log1p(s.mentions||0)),b:e(s=>s.bc||0),r:e(s=>Math.log1p(s.recent||0))};return s=>.4*Math.log1p(s.inlinks||0)/n.i+.3*Math.log1p(s.mentions||0)/n.m+.2*(s.bc||0)/n.b+.1*Math.log1p(s.recent||0)/n.r}var Je=i=>{let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619);return t>>>0},ks=i=>{let t=Math.max(1,...i.filter(e=>!Pe(e)).map(e=>e.recent||0));return e=>Pe(e)?0:Math.min(1,Math.exp(-(e.age||0)/7)+.6*(e.recent||0)/t)},Ni=i=>{let t=i.quality&&i.quality.stale_days||180;return e=>!Pe(e)&&!/\d{4}-\d{2}-\d{2}/.test(e.name||"")&&(e.age||0)>t};var qe={ATOM:1.8,SCALE:.16,PROTEIN:[.93,.93,.9],RNA:[.94,.34,.15],TARGET:[.13,.31,.8],OTHER:[.38,.64,.97],HIT:[1,.79,.2],NEAR:[.78,.62,.96],COIL:{lead:90,ease:40,radius:60,pitch:34},NEAR_AXIS:[0,1,0],FAR_AXIS:[-1,0,0]};function zd(i,t,e,n){let s=new Float64Array(t*12),r=(y,w)=>y[0]*w[0]+y[1]*w[1]+y[2]*w[2],o=(y,w)=>[y[1]*w[2]-y[2]*w[1],y[2]*w[0]-y[0]*w[2],y[0]*w[1]-y[1]*w[0]],a=y=>{let w=Math.hypot(y[0],y[1],y[2])||1;return[y[0]/w,y[1]/w,y[2]/w]},l=(y,w,_)=>{let S=Math.cos(_),b=Math.sin(_);return[y.map((m,v)=>S*m+b*w[v]),w.map((m,v)=>S*m-b*y[v])]},h=i.o.slice(),c=a(i.z),d=a(i.x),u=o(c,d),f=0,p=null,M=null,x=0,g=0;if(n){let y=n.pitch/(2*Math.PI*n.radius);x=1/(n.radius*(1+y*y)),g=x*y;let w=n.axis,_=r(w,c);M=a([w[0]-_*c[0],w[1]-_*c[1],w[2]-_*c[2]]),p=o(M,c)}for(let y=0;y<t;y++){let w=i.phase+y*e.turn,_=Math.cos(w),S=Math.sin(w),b=y*12;for(let m=0;m<3;m++)s[b+m]=h[m],s[b+3+m]=_*d[m]+S*u[m],s[b+6+m]=_*u[m]-S*d[m],s[b+9+m]=c[m];if(n&&f>=n.lead){let m=Math.min(1,(f-n.lead)/(n.ease||1)+1e-9),v=m*m*(3-2*m);[c,p]=l(c,p,x*v*e.rise),[p,M]=l(p,M,g*v*e.rise),c=a(c);let U=r(d,c);d=a([d[0]-U*c[0],d[1]-U*c[1],d[2]-U*c[2]]),u=o(c,d)}for(let m=0;m<3;m++)h[m]+=c[m]*e.rise;f+=e.rise}return s}var eh=null;function Kr(){if(eh)return eh;let i=Vd,t=atob(i.atoms),e=t.length/3,n=new Float32Array(e*3),s=new Uint8Array(e),r=new Int16Array(e),o=new Int8Array(e).fill(-1),a=new Float32Array(e);for(let _=0;_<e*3;_++)n[_]=t.charCodeAt(_)*i.q+i.lo[_%3];let l=i.protein;if([i.rna,i.target,i.other].forEach((_,S)=>_.forEach(([b,m])=>{for(let v=0;v<m;v++,l++)s[l]=S+1,r[l]=b})),l!==e)throw new Error("the Cas9 model's tables don't add up to its atoms: run scripts/cas9_model.cjs again");for(let _=0;_<e;_++)i.flank.forEach(([S,b],m)=>{(s[_]===2&&r[_]===S||s[_]===3&&r[_]===b)&&(o[_]=m)});let h=12,c=new Map,d=_=>`${Math.floor(n[_*3]/h)},${Math.floor(n[_*3+1]/h)},${Math.floor(n[_*3+2]/h)}`,u=new Uint16Array(e);for(let _=0;_<e;_++){let S=d(_);c.has(S)||c.set(S,[]),c.get(S).push(_)}for(let _=0;_<e;_++){let S=n[_*3],b=n[_*3+1],m=n[_*3+2],v=Math.floor(S/h),U=Math.floor(b/h),E=Math.floor(m/h),P=0;for(let F=-1;F<=1;F++)for(let L=-1;L<=1;L++)for(let R=-1;R<=1;R++)for(let V of c.get(`${v+F},${U+L},${E+R}`)||[]){let z=n[V*3]-S,X=n[V*3+1]-b,G=n[V*3+2]-m;z*z+X*X+G*G<h*h&&P++}u[_]=P}let f=Array.from(u).sort((_,S)=>_-S),p=f[Math.floor(e*.08)],M=f[Math.floor(e*.97)];for(let _=0;_<e;_++)a[_]=1-.72*Math.max(0,Math.min(1,(u[_]-p)/Math.max(1,M-p)));let x=_=>{let S=[0,0,0],b=0;for(let m=0;m<e;m++)_(m)&&(S[0]+=n[m*3],S[1]+=n[m*3+1],S[2]+=n[m*3+2],b++);return S.map(m=>m/(b||1))},g=(_,S)=>{let b=-1,m=-1/0;for(let v=0;v<e;v++)if(_(v)){let U=S(v);U>m&&(m=U,b=v)}return[n[b*3],n[b*3+1],n[b*3+2]]},y=i.pair.map(([_,S,b,m,v])=>({x:_,y:S,z:b,strand:m,base:v,r:qe.ATOM})),w=[];for(let _ of[0,1])for(let S of[0,1]){let b=y.filter(v=>v.strand===_&&v.base===S),m=v=>b.reduce((U,E)=>U+E[v],0)/b.length;w.push({x:m("x"),y:m("y"),z:m("z"),strand:_,base:S,r:S?3.3:3.6})}return eh={M:i,n:e,xyz:n,kind:s,res:r,flank:o,shade:a,pair:y,beads:w,base:[qe.PROTEIN,qe.RNA,qe.TARGET,qe.OTHER],flankAt:i.flank.map((_,S)=>x(b=>o[b]===S)),held:x(_=>s[_]===1&&r[_]<=i.spacer+1||s[_]===2&&r[_]>30-i.spacer),labels:{protein:g(_=>s[_]===0,_=>-n[_*3+1]),rna:g(_=>s[_]===1,_=>Math.hypot(n[_*3],n[_*3+1],n[_*3+2]))}}}function Gd(i,t,e){let n=Kr(),s=n.M,r=t&&t.ids?new Set(t.ids):null,o=new Map,a=i.filter(_=>!Pe(_)&&(!r||r.has(_.id))).sort((_,S)=>_.id<S.id?-1:_.id>S.id?1:0),l=new Set(a.map(_=>_.id));t&&t.notes.forEach(_=>{l.has(_.path)&&o.set(_.path,_.hits?"hit":"near")});let h=a.filter(_=>o.get(_.id)==="hit"),c=h.find(_=>_.id===e)||h[0]||null,d=c?a.indexOf(c):a.length>>1,u=a.slice(c?d+1:d),f=u.slice(0,s.flank.length).map(_=>_.id),p=u.slice(s.flank.length).map(_=>_.id),M=a.slice(0,d).reverse().map(_=>_.id),x=zd(s.tails.near,p.length,s.step,{...qe.COIL,axis:qe.NEAR_AXIS}),g=zd(s.tails.far,M.length,s.step,{...qe.COIL,axis:qe.FAR_AXIS}),y=new Map,w=new Map;return c&&(y.set(c.id,n.held),w.set(c.id,"held")),f.forEach((_,S)=>{y.set(_,n.flankAt[S]),w.set(_,"flank")}),[[p,x,"near"],[M,g,"far"]].forEach(([_,S,b])=>_.forEach((m,v)=>{y.set(m,[S[v*12],S[v*12+1],S[v*12+2]]),w.set(m,b)})),{pos:y,where:w,all:a,hits:o,sites:h,site:c?c.id:null,flankIds:f,nearIds:p,farIds:M,near:x,far:g,scan:t||null}}var $r=qe.SCALE,nh=28,Q_=.3,Os=i=>[i[0]*$r,-i[1]*$r,-i[2]*$r];function ih(i,t,e){let n=new hn,s=new fe(t,e,i.n),r=new Xt,o=new Mt;for(let a=0;a<i.n;a++){r.makeScale(qe.ATOM,qe.ATOM,qe.ATOM).setPosition(i.xyz[a*3],i.xyz[a*3+1],i.xyz[a*3+2]),s.setMatrixAt(a,r);let l=i.base[i.kind[a]];s.setColorAt(a,o.setRGB(l[0],l[1],l[2],We).multiplyScalar(i.shade[a]))}return n.rotation.x=Math.PI,n.scale.setScalar($r),n.add(s),{root:n,mesh:s}}var Hd={id:"cas9",name:"Cas9",hint:"Notes as DNA, the Guide scan's matches as cut sites",home:{yaw:0,pitch:.2,dist:44,min:14,max:240,minPitch:-1.4},stage:{light:"camera",fog:[70,260],ambient:.5},actions:["guide-scan"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,invalidate:o}){let a=Kr(),l=new Map(e.nodes.map(O=>[O.id,O])),h=O=>l.get(O)?l.get(O).name:O,c=new ii(1,1),d=new Xi,{root:u,mesh:f}=ih(a,c,d);i.scene.add(u);let p=new Xt,M=new Mt,x=(O,at)=>M.setRGB(O[0],O[1],O[2],We).multiplyScalar(at),g=null,y=null,w=[],_={atoms:0,pairs:0,fine:0,beads:0},S=n.scan||null,b=n.selected||null,m=null,v=null,U=O=>{let at=y.hits.get(O);return at==="hit"?qe.HIT:at==="near"?qe.NEAR:null},E=O=>v&&!v.has(O)?Q_:1;function P(){for(let O=0;O<a.n;O++){let at=a.flank[O]>=0?y.flankIds[a.flank[O]]:null,K=at?U(at):null;f.setColorAt(O,x(K||a.base[a.kind[O]],a.shade[O]*(at?E(at):1)))}f.instanceColor.needsUpdate=!0}function F(){g&&(u.remove(g),g.dispose());let O=[y.nearIds,y.farIds].reduce((K,A)=>K+Math.min(A.length,nh)*a.pair.length+Math.max(0,A.length-nh)*a.beads.length,0);g=new fe(c,d,Math.max(O,1)),g.count=O;let at=0;_={atoms:a.n,pairs:y.nearIds.length+y.farIds.length,fine:0,beads:0},[[y.nearIds,y.near,!0],[y.farIds,y.far,!1]].forEach(([K,A,D])=>K.forEach((j,$)=>{let ut=$<nh,ft=$*12,ct=U(j),vt=E(j);ut?_.fine++:_.beads++;for(let J of ut?a.pair:a.beads){p.makeScale(J.r,J.r,J.r).setPosition(A[ft]+A[ft+3]*J.x+A[ft+6]*J.y+A[ft+9]*J.z,A[ft+1]+A[ft+4]*J.x+A[ft+7]*J.y+A[ft+10]*J.z,A[ft+2]+A[ft+5]*J.x+A[ft+8]*J.y+A[ft+11]*J.z),g.setMatrixAt(at,p);let _t=J.strand===0===D?qe.OTHER:qe.TARGET;g.setColorAt(at++,x(ct&&(J.base||!ut)?ct:_t,(J.base?.78:1)*vt))}})),_.atoms+=at,u.add(g)}let L=()=>{if(!S)return`${yt(y.all.length,"note")} \xB7 no guide`;let O=`\u201C${S.guide}\u201D${S.where?" "+S.where:""}`,at=[...y.hits.values()].filter(K=>K==="near").length;return y.sites.length?`${O}: exact in ${yt(y.sites.length,"note")} of ${y.all.length}${at?` \xB7 look-alikes in ${at}`:""}`:`${O}: no match in ${yt(y.all.length,"note")}`},R={label:"Open Guide scan",title:"Open Guide scan",run:()=>r("guide-scan")},V=()=>y.sites.findIndex(O=>O.id===y.site);function z(O){let at=y.sites.length;at&&(m=y.sites[(V()+O+at)%at].id,tt(),o())}function X(O){y.hits.get(O)==="hit"&&(m=O,tt(),o())}function G(){t.stat(L());let O=[{text:"Cas9 protein",at:Os(a.labels.protein),dy:-16,run:()=>r("guide-scan"),title:"Cas9 protein. Open Guide scan"},{text:S?`RNA \xB7 ${ee(S.guide,24)}`:"RNA",at:Os(a.labels.rna),color:"#f2764a",dy:-14,run:()=>r("guide-scan"),title:"The guide. Open Guide scan"},{text:"DNA",at:Os(a.M.tails.near.o),color:"#8fbcfb",dy:16,title:y.sites.length?"DNA. Show the exact matches":"DNA. Open Guide scan",run:()=>{if(!y.sites.length)return r("guide-scan");v=new Set(y.sites.map(K=>K.id)),W(),o()}}],at=y.site||(b&&y.pos.has(b)?b:null);if(at&&O.unshift({text:ee(h(at),34),at:Os(y.pos.get(at)),strong:!0,dy:30,run:()=>s(at),title:`Open ${h(at)}`}),t.labels(O),t.chip(v?`Exact matches of \u201C${ee(S.guide,24)}\u201D`:null,()=>{v=null,W(),o()}),!S)t.controls({lines:[`${yt(y.all.length,"note")}, a base pair each. No guide yet.`],buttons:[R]});else if(!y.sites.length)t.controls({lines:[`No \u201C${ee(S.guide,24)}\u201D in these ${yt(y.all.length,"note")}.`],buttons:[R]});else{let K=y.sites.length===1;t.controls({lines:[`Site ${V()+1} of ${y.sites.length}`],buttons:[{label:"\u2039",title:"Previous site",off:K,run:()=>z(-1)},{label:h(y.site),title:`Open ${h(y.site)}`,wide:!0,run:()=>s(y.site)},{label:"\u203A",title:"Next site",off:K,run:()=>z(1)}]})}}function W(){P(),F(),G()}function tt(){y=Gd(e.nodes,S,m),v&&!y.sites.length&&(v=null),w=[];for(let[O,at]of y.pos){let K=y.where.get(O);w.push({at:Os(at),r:(K==="held"?14:K==="flank"?6:7)*$r,key:{kind:"note",id:O,tip:h(O)}})}W()}function st(){b&&y.hits.get(b)==="hit"&&y.site!==b?(m=b,tt()):m=y.site}return tt(),st(),{targets:()=>w,click(O){b=O.id,y.hits.get(O.id)==="hit"?(m=O.id,tt()):G(),s(O.id)},update(O){"scan"in O&&(S=O.scan||null,v=null),"selected"in O&&(b=O.selected||null),tt(),st()},stat:L,today(){if(!y.site)return null;let O=y.sites.length;return{text:`Cas9 is on ${h(y.site)}: site ${V()+1} of ${O} for \u201C${S.guide}\u201D`,label:O>1?"Next site":"Open it",run:()=>O>1?z(1):s(y.site)}},api:{layout:()=>y,drew:()=>_,at:O=>y.pos.has(O)?Os(y.pos.get(O)):null,step:z,go:X,highlighted:()=>v?[...v]:null}}}};var K_=new H(0,1,0),sh=new H,Sl=new H,Wd=new H,$_=new H,Zd=new Le,ty=new Mt;function ts(i,t,e,n){sh.set(t[0],t[1],t[2]),Sl.set(e[0],e[1],e[2]).sub(sh);let s=Sl.length()||1e-6;return Wd.copy(sh).addScaledVector(Sl,.5),Zd.setFromUnitVectors(K_,Sl.multiplyScalar(1/s)),i.compose(Wd,Zd,$_.set(n,s,n))}function wn(i,t,e,n){let s=new fe(i,t,Math.max(1,e.length)),r=new Xt;return s.count=e.length,s.frustumCulled=!1,e.forEach((o,a)=>{r.identity();let l=n(o,a,r);s.setMatrixAt(a,r),l!=null&&s.setColorAt(a,ty.set(l))}),s}var rh=null;function ey(){if(rh||typeof document>"u")return rh;let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),rh=new Wi(i)}function be(i,t,{size:e=3.4,color:n="#ffffff",opacity:s=.95}={}){let r=new oe().setAttribute("position",new Ot(new Float32Array(Math.max(1,i)*3),3)),o=new Hi(r,new Ei({color:n,size:e*2,map:ey(),sizeAttenuation:!1,transparent:!0,opacity:s,blending:pn,depthWrite:!1}));o.frustumCulled=!1,o.userData.backdrop=!0;let a=l=>{let h=r.getAttribute("position");for(let c=0;c<i;c++){let d=t(c,l);h.setXYZ(c,d[0],d[1],d[2])}h.needsUpdate=!0};return a(0),{object:o,tick:a}}function hi(i,t){i.remove(t),t.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose(),e.isInstancedMesh&&e.dispose()})}var Ee=(i,t,e)=>"#"+new Mt(i).lerp(new Mt(t),e).getHexString();var bl=18,Yd=4,oh="#facc15",ny=14;function iy(i,t){let e=t.X.map(o=>[o[0]*bl,o[1]*bl,(o[2]||0)*bl]),n=new Array(t.n).fill(0),s=new Map,r=new Map;t.domains.forEach(([o,a],l)=>{for(let h=o;h<=a&&h<t.n;h++)n[h]=l}),i.rows.forEach((o,a)=>{for(let l of new Set(o)){let h=i.ids[l];s.has(h)||s.set(h,[]),s.get(h).push(a)}});for(let[o,a]of s){let l=[0,0,0],h=Je(o),c=h%628/100,d=(h>>>10)%314/100-1.57,u=bl*.03;for(let f of a)for(let p=0;p<3;p++)l[p]+=e[f][p]/a.length;r.set(o,[l[0]+Math.cos(c)*Math.cos(d)*u,l[1]+Math.sin(d)*u,l[2]+Math.sin(c)*Math.cos(d)*u])}return{beads:e,domainOf:n,daysOf:s,notes:r}}var Xd={id:"genome",name:"Genome fold",hint:"The journals as one folded strand",home:{yaw:.6,pitch:.25,dist:70,min:12,max:140},stage:{fog:[34,80],ambient:.55,glow:{strength:.6,radius:.5,threshold:.85}},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=e.strand,h=n.fold,c=h.n;if(c<Yd){let q=()=>`${yt(c,"day")} of journals`;return t.stat(q()),t.controls({at:"centre",lines:[`Genome fold needs ${Yd} days of journals that name notes.`,`${yt(c,"day")} so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:q,today:()=>null,api:{empty:!0}}}let d=iy(l,h),u=new Map(e.nodes.map(q=>[q.id,q])),f=Xe(e.nodes),p=[...d.notes.keys()].filter(q=>u.has(q)),M=new Map(p.map(q=>[q,f(u.get(q))])),x=q=>.14+.38*Math.sqrt(Math.max(0,M.get(q))),g=o.palette,y=q=>g[q%g.length],w="#6b7280",_=new Xt,S=new Le,b=new H,m=new H(0,1,0),v=new Mt,U=q=>(i.scene.add(q),q),E=U(new fe(new pe(1,16,12),new Ce({roughness:.55}),c)),P=[];for(let q=0;q+1<c;q++)P.push(Math.hypot(...[0,1,2].map(Ct=>d.beads[q+1][Ct]-d.beads[q][Ct])));let F=[...P].sort((q,Ct)=>q-Ct)[P.length>>1]||1,L=U(new fe(new xe(1,1,1,8,1,!0),new Ce({roughness:.7}),Math.max(c-1,1)));L.count=c-1;for(let q=0;q+1<c;q++){let Ct=d.beads[q],Vt=d.beads[q+1],Z=d.domainOf[q]===d.domainOf[q+1],jt=P[q]>F*4,Rt=jt?.025:Z?.09:.045;b.set(Vt[0]-Ct[0],Vt[1]-Ct[1],Vt[2]-Ct[2]);let $t=b.length()||1e-6;_.compose(new H((Ct[0]+Vt[0])/2,(Ct[1]+Vt[1])/2,(Ct[2]+Vt[2])/2),S.setFromUnitVectors(m,b.divideScalar($t)),new H(Rt,$t,Rt)),L.setMatrixAt(q,_),L.setColorAt(q,v.set(jt?Ee(w,o.bg,.45):Z?y(d.domainOf[q]):w))}let R=U(new fe(new pe(1,16,12),new Ce({roughness:.4}),Math.max(p.length,1)));R.count=p.length;let V=new re({color:oh,transparent:!0,opacity:.85}),z=new re({color:oh,transparent:!0,opacity:.18}),X=new pe(.3,12,8),G=h.loops.map((q,Ct)=>{let Vt=d.beads[q.a],Z=d.beads[q.b],jt=new Zi(new H(...Vt),new H((Vt[0]+Z[0])*.68,(Vt[1]+Z[1])*.68,(Vt[2]+Z[2])*.68),new H(...Z)),Rt=jt.getPoint(.5),$t=U(new te(new vr(jt,24,.045,6),V)),Et=U(new te(X,V));Et.position.copy(Rt);let Me=l.rows[q.a].filter(T=>l.rows[q.b].includes(T)),zt=[...new Set(Me)].map(T=>l.ids[T]),pt=vl(l.days[q.a],l.days[q.b]),N=`${Ui(l.days[q.a])} and ${Ui(l.days[q.b])}`;return{k:Ct,l:q,curve:jt,tube:$t,dot:Et,mid:[Rt.x,Rt.y,Rt.z],ids:zt,apart:pt,pair:N,tip:`${N}: ${yt(q.count,"note")} named on both, ${yt(pt,"day")} apart`}}),W=new si(1,1.18,40),tt=q=>U(new te(W,new re({color:q,side:me,fog:!1}))),st=tt(o.fg),O=tt(o.accent);st.position.set(...d.beads[c-1]),st.scale.setScalar(.62);let at=U(new Ze(new oe,new Be({color:o.accent,transparent:!0,opacity:.7}))),K=h.domains.map(([q,Ct],Vt)=>{let Z=[];for(let jt=q;jt<=Ct&&jt<c;jt++)Z.push(jt);return Z.length?be(Z.length,jt=>d.beads[Z[jt]],{size:12,color:y(Vt),opacity:.75}):null}).filter(Boolean),A=7,D=be(A,(q,Ct)=>{let Vt=((Ct*5-q*.9)%c+c)%c,Z=Math.min(Math.floor(Vt),c-2),jt=Vt-Z;return[0,1,2].map(Rt=>d.beads[Z][Rt]+(d.beads[Z+1][Rt]-d.beads[Z][Rt])*jt)},{size:14,color:"#e0f2fe",opacity:1}),j=G.length?be(G.length*2,(q,Ct)=>{let Vt=G[q%G.length].curve.getPoint((Ct*.12+(q>=G.length?.5:0)+q%G.length*.137)%1);return[Vt.x,Vt.y,Vt.z]},{size:8,color:oh,opacity:1}):null,$=[...K,D,...j?[j]:[]];for(let q of $)U(q.object);i.sky({top:"#04060c",haze:"#0e121c"});let ut=n.selected||null,ft=null,ct=null,vt=()=>ft&&d.notes.has(ft)?ft:ut&&d.notes.has(ut)?ut:null,J=q=>u.get(q)?u.get(q).name:q,_t=()=>`${yt(c,"day")} \xB7 ${yt(h.domains.length,"domain")} \xB7 ${yt(h.loops.length,"loop")} \xB7 fit ${h.grade} (stress ${h.stress.toFixed(2)})`,St=G.reduce((q,Ct)=>q&&q.l.count>=Ct.l.count?q:Ct,null),Ut=[...p].sort((q,Ct)=>M.get(Ct)-M.get(q)).slice(0,ny);function qt(){let q=vt(),Ct=q?new Set(d.daysOf.get(q)):null,Vt=ct?new Set(ct.ids):null;for(let Rt=0;Rt<c;Rt++){let $t=Ct&&Ct.has(Rt)?.45:.26;_.makeScale($t,$t,$t).setPosition(...d.beads[Rt]),E.setMatrixAt(Rt,_),E.setColorAt(Rt,v.set(y(d.domainOf[Rt])).multiplyScalar(Ct&&!Ct.has(Rt)?.35:1))}p.forEach((Rt,$t)=>{let Et=x(Rt)*(Rt===q?1.25:1);_.makeScale(Et,Et,Et).setPosition(...d.notes.get(Rt)),R.setMatrixAt($t,_),R.setColorAt($t,v.set(g[(u.get(Rt).cluster||0)%g.length]).multiplyScalar(Vt&&!Vt.has(Rt)?.25:1))});for(let Rt of[E,R])Rt.instanceMatrix.needsUpdate=!0,Rt.instanceColor&&(Rt.instanceColor.needsUpdate=!0);for(let Rt of G)Rt.tube.material=Rt.dot.material=!ct||ct===Rt?V:z;O.visible=!!(ut&&d.notes.has(ut)&&u.has(ut)),O.visible&&(O.position.set(...d.notes.get(ut)),O.scale.setScalar(x(ut)+.25));let Z=[];if(q)for(let Rt of d.daysOf.get(q))Z.push(...d.notes.get(q),...d.beads[Rt]);at.geometry.dispose(),at.geometry=new oe().setAttribute("position",new Ot(Z,3));let jt=[];q&&jt.push({text:ee(J(q),34),at:d.notes.get(q),strong:!0,dy:-22,run:()=>lt(q),title:`Open ${J(q)}`}),h.domains.forEach(([Rt,$t],Et)=>{$t-Rt>=3&&jt.push({text:`${Ui(l.days[Rt])} \u2013 ${Ui(l.days[$t])}`,at:d.beads[Rt+$t>>1],color:y(Et),dy:-14})});for(let Rt of Vt?ct.ids.filter($t=>u.has($t)):Ut)Rt!==q&&jt.push({text:ee(J(Rt),26),at:d.notes.get(Rt),dy:14});t.labels(jt),t.chip(ct?`Named on both ${ct.pair}`:null,()=>{ct=null,qt(),a()}),t.stat(_t())}function Jt(q){ct=q,qt(),a()}function lt(q){ut=q,qt(),a(),s(q)}let Nt=[];return d.beads.forEach((q,Ct)=>Nt.push({at:q,r:.4,key:{kind:"day",id:Ct,tip:`${l.days[Ct]} \xB7 ${yt(new Set(l.rows[Ct]).size,"note")} named`}})),p.forEach(q=>Nt.push({at:d.notes.get(q),r:x(q),key:{kind:"note",id:q,tip:J(q)}})),G.forEach(q=>Nt.push({at:q.mid,r:.4,key:{kind:"loop",id:q.k,tip:q.tip}})),qt(),{targets:()=>Nt,click(q){q.kind==="note"?lt(q.id):q.kind==="day"?s(l.paths[q.id]):Jt(G[q.id])},hover(q){let Ct=q&&q.kind==="note"?q.id:null;Ct!==ft&&(ft=Ct,qt())},frame(){st.quaternion.copy(i.camera.quaternion),O.quaternion.copy(i.camera.quaternion)},update(q){"selected"in q&&(ut=q.selected||null,qt())},tick(q){for(let Ct of $)Ct.tick(q)},stat:_t,today:()=>St?{text:`Strongest loop: ${St.pair} name the same ${yt(St.l.count,"note")}, ${yt(St.apart,"day")} apart`,label:"Show them",run:()=>Jt(St)}:null,api:{layout:()=>d,loops:()=>G.map(q=>({a:q.l.a,b:q.l.b,count:q.l.count,ids:q.ids,mid:q.mid})),shown:()=>ct?ct.k:null,selected:()=>ut,notes:()=>p,show:q=>Jt(G[q])},dispose(){for(let q of $)i.scene.remove(q.object),q.object.geometry.dispose(),q.object.material.dispose();V.dispose(),z.dispose(),X.dispose(),W.dispose()}}}};var Fi=18,wl="#60a5fa",ah="#f59e0b",qd=864e5;function sy(i,t){let e=new Map;for(let o of i)!Pe(o)&&typeof o.born=="string"&&Number.isFinite(Date.parse(o.born))&&e.set(o.id,Date.parse(o.born)/qd);let n=new Map,s=new Map;for(let o of e.keys())n.set(o,[]),s.set(o,[]);let r=new Set;for(let o of t){if(o.kind!=="link"||!e.has(o.source)||!e.has(o.target)||e.get(o.source)===e.get(o.target))continue;let[a,l]=e.get(o.source)<e.get(o.target)?[o.source,o.target]:[o.target,o.source],h=a+`
`+l;r.has(h)||(r.add(h),n.get(l).push(a),s.get(a).push(l))}return{day:e,older:n,newer:s}}function Jd(i,t){let e=new Set,n=[t];for(;n.length;)for(let s of i.get(n.pop())||[])e.has(s)||(e.add(s),n.push(s));return e}function ry(i,t){let e=[...t.day.keys()],n=e.map(c=>t.day.get(c)),s=Math.min(...n),r=Math.max(...n),o=Math.max(r-s,1),a=new Map(i.map(c=>[c.id,c])),l=[...new Set(e.map(c=>a.get(c).cluster||0))].sort((c,d)=>c-d),h=new Map;for(let c of e){let d=Je(c),f=l.indexOf(a.get(c).cluster||0)/Math.max(l.length,1)*Math.PI*2+(d%1e3/1e3-.5)*(Math.PI*2/Math.max(l.length,1))*.8,p=Fi*(.25+.65*((d>>>10)%1e3/1e3));h.set(c,[Math.cos(f)*p,((t.day.get(c)-s)/o-.5)*Fi*1.6,Math.sin(f)*p])}return{pos:h,from:s,to:r,axis:[[0,-Fi*.8,0],[0,Fi*.8,0]]}}var El=i=>new Date(i*qd).toISOString().slice(0,10),jd={id:"cones",name:"Light cones",hint:"What a note rested on and what it touched",home:{yaw:.7,pitch:.2,dist:52,min:14,max:120},stage:{light:"camera",fog:[60,150],ambient:.6,glow:{strength:.6,radius:.5,threshold:.8}},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=sy(e.nodes,e.links),h=[...l.day.keys()];if(h.length<2){let O=()=>yt(h.length,"dated note");return t.stat(O()),t.controls({at:"centre",lines:["Light cones needs notes with a date and links between them.",`${yt(h.length,"dated note")} so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:O,today:()=>null,api:{empty:!0}}}let c=ry(e.nodes,l),d=new Map(e.nodes.map(O=>[O.id,O])),u=Xe(e.nodes),f=O=>.25+.6*Math.sqrt(Math.max(0,u(d.get(O)))),p=O=>d.get(O).name,M=o.palette,x=new Xt,g=new Mt,y=O=>(i.scene.add(O),O),w=y(new fe(new pe(1,16,12),new Ce({roughness:.45}),h.length)),_=[];for(let[O,at]of l.older)for(let K of at)_.push(...c.pos.get(K),...c.pos.get(O));let S=y(new Ze(new oe().setAttribute("position",new Ot(_,3)),new Be({color:o.muted,transparent:!0,opacity:.22})));y(new Ze(new oe().setAttribute("position",new Ot([...c.axis[0],...c.axis[1]],3)),new Be({color:o.muted,transparent:!0,opacity:.6})));let b=[7,14,30,91,182,365,730].find(O=>(c.to-c.from)/O<=14)||730,m=Math.floor((c.to-c.from)/b);for(let O=0;O<=m;O++){let at=(O*b/Math.max(c.to-c.from,1)-.5)*Fi*1.6,K=[];for(let A=0;A<96;A++)K.push(Math.cos(A/96*Math.PI*2)*Fi*1.05,at,Math.sin(A/96*Math.PI*2)*Fi*1.05);y(new gr(new oe().setAttribute("position",new Ot(K,3)),new Be({color:wl,transparent:!0,opacity:.3,blending:pn,depthWrite:!1})))}let v=be(90,(O,at)=>[Math.cos(O*2.4)*.5,((O/90+at*.03)%1-.5)*Fi*1.6,Math.sin(O*2.4)*.5],{color:"#9cc4ff",size:4,opacity:.8});y(v.object),i.sky({top:"#03050b",haze:"#0b1020"});let U=O=>new re({color:O,transparent:!0,opacity:.1,side:me,depthWrite:!1}),E=y(new te(new ws(1,1,40,1,!0),U(wl))),P=y(new te(new ws(1,1,40,1,!0),U(ah)));E.visible=P.visible=!1;let F=n.selected&&c.pos.has(n.selected)?n.selected:null,L=null,R=new Map,V=O=>(R.has(O)||R.set(O,{past:Jd(l.older,O),future:Jd(l.newer,O)}),R.get(O)),z=()=>L||F,X=()=>F?`${p(F)} \xB7 ${yt(V(F).past.size,"note")} in its past \xB7 ${yt(V(F).future.size,"note")} in its future`:`${yt(h.length,"dated note")} \xB7 ${yt(_.length/6,"link")} \xB7 ${vl(El(c.from),El(c.to))} days`;function G(O,at,K){let A=c.pos.get(at)[1],D=c.axis[1][1],j=c.axis[0][1],$=Math.max(K?D-A:A-j,.5);O.visible=!0,O.scale.set($*.55,$,$*.55),O.position.set(c.pos.get(at)[0],A+(K?$/2:-$/2),c.pos.get(at)[2]),O.rotation.set(K?Math.PI:0,0,0)}function W(){let O=z(),at=O?V(O):null;h.forEach((A,D)=>{let j=f(A)*(A===O?1.4:1);x.makeScale(j,j,j).setPosition(...c.pos.get(A)),w.setMatrixAt(D,x);let $=at?A===O?g.set(o.accent):at.past.has(A)?g.set(wl):at.future.has(A)?g.set(ah):g.set(M[(d.get(A).cluster||0)%M.length]).multiplyScalar(.22):g.set(M[(d.get(A).cluster||0)%M.length]);w.setColorAt(D,$)}),w.instanceMatrix.needsUpdate=!0,w.instanceColor&&(w.instanceColor.needsUpdate=!0),E.visible=P.visible=!1,O&&(G(E,O,!1),G(P,O,!0));let K=[{text:Ui(El(c.from)),at:c.axis[0],dy:12,color:o.muted},{text:Ui(El(c.to)),at:c.axis[1],dy:-12,color:o.muted}];if(O&&K.push({text:ee(p(O),34),at:c.pos.get(O),strong:!0,dy:-18,run:()=>tt(O),title:`Open ${p(O)}`}),at){let A=(D,j)=>[...D].sort(($,ut)=>j*(l.day.get($)-l.day.get(ut)))[0];for(let[D,j]of[[at.past,-1],[at.future,1]]){let $=A(D,j);$&&K.push({text:ee(p($),26),at:c.pos.get($),dy:14,color:j<0?wl:ah})}}t.labels(K),t.stat(X())}function tt(O){F=O,W(),a(),s(O)}let st=h.map(O=>({at:c.pos.get(O),r:f(O),key:{kind:"note",id:O,tip:`${p(O)} \xB7 ${d.get(O).born}`}}));return W(),{targets:()=>st,tick(O){v.tick(O)},click(O){O.kind==="note"&&tt(O.id)},hover(O){let at=O&&O.kind==="note"?O.id:null;at!==L&&(L=at,W())},update(O){"selected"in O&&(F=O.selected&&c.pos.has(O.selected)?O.selected:null,W())},stat:X,today:()=>{let O=h.reduce((at,K)=>at&&V(at).future.size>=V(K).future.size?at:K,null);return O&&V(O).future.size?{text:`${p(O)} reaches the most: ${yt(V(O).future.size,"note")} in its future`,label:"Show it",run:()=>{F=O,W(),a()}}:null},api:{layout:()=>c,graph:()=>l,cones:O=>V(O),selected:()=>F,notes:()=>h},dispose(){S.material.dispose(),E.material.dispose(),P.material.dispose()}}}};var Qd=(i,t)=>{let e=new Array(i).fill(0);for(let[n,s]of t)e[n]++,e[s]++;return e};function Kd({n:i,bars:t,ground:e,sag:n,sagging:s,weakest:r,busiest:o,carry:a},l){let h=Qd(i,t),c=[];n[s]>0&&c.push({text:`${l(s)} sags most (${n[s].toFixed(2)}). It is held by ${yt(h[s],"link")}; link it to a note near the ground notes and it stiffens.`,label:"Open note",note:s}),r>=0&&c.push({text:`${l(t[r][0])} \u2013 ${l(t[r][1])} is closest to buckling: it is pushed hardest, so if that link goes its notes lose their support. A second route between them takes the load.`,label:"Show link",bar:r}),o>=0&&c.push({text:`${l(t[o][0])} \u2013 ${l(t[o][1])} carries the most (${a[o].toFixed(1)}). Everything leaning on it is one edit from sagging.`,label:"Show link",bar:o});let d=h.map((u,f)=>[u,f]).filter(([u,f])=>u===1&&!e.includes(f)).length;return d&&c.push({text:`${yt(d,"note")} hang from a single link. Each is a note to link from a second place.`,label:"Show worst",note:s}),{plain:"Picture your notes as a bridge. Links are the beams and notes are the joints. A note held up by only one beam droops, and a beam doing all the carrying is the one that snaps first.",about:"Each written link is a steel bar and each note a joint; the most linked notes are the ground. Load is the notes' weight. A note sags when few links hold it, and a link carries more when more notes lean on it.",insights:c}}function $d({bars:i,vector:t,freq:e,k:n,count:s},r){let o=p=>Math.abs(t[p])<.05?0:t[p]>0?1:-1,a=t.filter((p,M)=>o(M)>0).length,l=t.filter((p,M)=>o(M)<0).length,h=i.filter(([p,M])=>o(p)*o(M)<0).length,c=t.indexOf(Math.max(...t)),d=t.indexOf(Math.min(...t)),u=[{text:`Mode ${n+1} splits the vault ${a} notes against ${l}; ${yt(h,"link")} cross the cut${h<=Math.max(2,i.length*.05)?", so the two halves are barely connected":""}.`,label:"Show it",show:!0}];c!==d&&u.push({text:`${r(c)} and ${r(d)} swing furthest apart. A link between them, or through a shared note, ties the halves together.`,label:"Open "+r(c).slice(0,18),note:c});let f=t.filter((p,M)=>o(M)===0).length;return f&&u.push({text:`${yt(f,"note")} sit on the nodal line, belonging to neither half. They are the bridges; keep their links.`,label:"Show it",show:!0}),{plain:"Picture your notes as a drum skin. Tap it and it wobbles in a pattern. The two halves that move against each other are the two clumps of your notes that hardly talk to each other.",about:"Notes are masses on a stretched sheet and links are springs. The sheet rings in the shapes the links allow; amber swings up while blue swings down, and the dark line between them does not move. A lower frequency means a cleaner cut.",insights:u,freq:e,count:s}}function tf({n:i,bars:t,kept:e,hubs:n,order:s},r){let o=new Array(i).fill(0);t.forEach(([d,u],f)=>{e[f]&&(o[d]++,o[u]++)});let a=s.filter(d=>!o[d]&&!n.includes(d)),l=Qd(i,t),h=e.filter(Boolean).length,c=[];return c.push({text:`${h} of ${yt(t.length,"link")} carry the vault between its ${n.length} hubs. The rest are never the short way from one hub to another.`,label:"Show it",show:!0}),a.length&&c.push({text:`${yt(a.length,"note")} are off the backbone. ${r(a[0])} has ${yt(l[a[0]],"link")} but none that leads to a hub; link it to one.`,label:"Open note",note:a[0]}),c.push({text:"Links off the backbone are not wrong, but they add detours. Where two notes say the same thing, keep the one on the backbone.",label:"Show it",show:!0}),{plain:"Picture your notes as a slime mould finding food. It keeps the tubes that get used and lets the rest dry up. The links that stay thick are the ones your notes really rely on.",about:"A slime mould thickens the tubes that carry the most flow and lets the rest die. Here each written link is a tube and the hubs are the food: what survives is the shortest set of links that holds the vault together.",insights:c}}function to(i,t,{hubs:e=!1}={}){let n=new Map(i.filter(o=>!Pe(o)||e&&o.moc).map(o=>[o.id,o])),s=e?o=>o==="link"||o==="moc":o=>o==="link",r=new Map([...n.keys()].map(o=>[o,new Set]));for(let o of t)s(o.kind)&&o.source!==o.target&&r.has(o.source)&&r.has(o.target)&&(r.get(o.source).add(o.target),r.get(o.target).add(o.source));return{own:n,adj:r}}function Vs(i,t,{max:e=120,hubs:n=0}={}){let s=Xe(i),{own:r,adj:o}=to(i,t,{hubs:!!n}),a=new Set,l=[];for(let M of[...o.keys()].sort()){if(a.has(M)||!o.get(M).size)continue;let x=[M];a.add(M);for(let g=0;g<x.length;g++)for(let y of o.get(x[g]))a.has(y)||(a.add(y),x.push(y));x.length>l.length&&(l=x)}let h=(M,x)=>s(r.get(x))-s(r.get(M))||(M<x?-1:1),c=M=>!!r.get(M).moc,u=[...l.filter(c).sort((M,x)=>o.get(x).size-o.get(M).size||(M<x?-1:1)).slice(0,n),...l.filter(M=>!c(M)).sort(h)].slice(0,e),f=new Map(u.map((M,x)=>[M,x])),p=[];for(let M of u)for(let x of o.get(M))f.has(x)&&f.get(M)<f.get(x)&&p.push([f.get(M),f.get(x)]);return{ids:u,bars:p,own:r,imp:s}}function zs(i,t,{radius:e=14,rest:n=3}={}){let s=i.length,r=i.map((o,a)=>{let l=Je(o)%6283/1e3,h=e*Math.sqrt((a+1)/s);return[Math.cos(l)*h,Math.sin(l)*h]});for(let o=0;o<80;o++){let a=r.map(()=>[0,0]),l=.5*(1-o/80);for(let h=0;h<s;h++)for(let c=h+1;c<s;c++){let d=r[h][0]-r[c][0],u=r[h][1]-r[c][1],f=6/(d*d+u*u+.01);a[h][0]+=d*f,a[h][1]+=u*f,a[c][0]-=d*f,a[c][1]-=u*f}for(let[h,c]of t){let d=r[c][0]-r[h][0],u=r[c][1]-r[h][1],f=Math.hypot(d,u)||1e-6,p=(f-n)*.08;a[h][0]+=d*p,a[h][1]+=u*p,a[c][0]-=d*p,a[c][1]-=u*p}for(let h=0;h<s;h++){let c=Math.hypot(...a[h])||1,d=Math.min(c,l*4)/c;r[h][0]+=a[h][0]*d,r[h][1]+=a[h][1]*d}}return r}function ef({pos:i,bars:t,fixed:e,loads:n},{iterations:s=2e3,tolerance:r=1e-10,sway:o=1e-9}={}){let a=i.length,l=new Uint8Array(a).fill(1);for(let _ of e)l[_]=0;let h=t.map(([_,S])=>{let b=[0,1,2].map(v=>i[S][v]-i[_][v]),m=Math.hypot(...b)||1e-9;return{L:m,c:b.map(v=>v/m)}}),c=o,d=_=>{let S=new Float64Array(3*a);t.forEach(([b,m],v)=>{let{L:U,c:E}=h[v],P=0;for(let F=0;F<3;F++)P+=E[F]*(_[3*m+F]-_[3*b+F]);P/=U;for(let F=0;F<3;F++)S[3*m+F]+=E[F]*P,S[3*b+F]-=E[F]*P});for(let b=0;b<a;b++)for(let m=0;m<3;m++)S[3*b+m]=l[b]?S[3*b+m]+c*_[3*b+m]:0;return S},u=new Float64Array(3*a),f=0;for(let _=0;_<a;_++)if(l[_]&&n[_])for(let S=0;S<3;S++)u[3*_+S]=n[_][S],f+=u[3*_+S]**2;let p=new Float64Array(3*a),M=Float64Array.from(u),x=Float64Array.from(u),g=M.reduce((_,S)=>_+S*S,0);for(let _=0;_<s&&g>r*Math.max(f,1e-30);_++){let S=d(x),b=0;for(let E=0;E<x.length;E++)b+=x[E]*S[E];if(b<=0)break;let m=g/b,v=0;for(let E=0;E<p.length;E++)p[E]+=m*x[E],M[E]-=m*S[E],v+=M[E]*M[E];let U=v/g;g=v;for(let E=0;E<x.length;E++)x[E]=M[E]+U*x[E]}let y=Array.from({length:a},(_,S)=>[p[3*S],p[3*S+1],p[3*S+2]]),w=t.map(([_,S],b)=>{let{L:m,c:v}=h[b],U=0;for(let E=0;E<3;E++)U+=v[E]*(y[S][E]-y[_][E]);return U/m});return{u:y,force:w,residual:f?Math.sqrt(g/f):0}}function nf(i,t,{max:e=120,ground:n=.1}={}){let{ids:s,bars:r,own:o,imp:a}=Vs(i,t,{max:e}),l=s.length,h=zs(s,r),c=Math.max(1e-9,...s.map(x=>a(o.get(x)))),d=10,u=s.map((x,g)=>[h[g][0],(.5-a(o.get(x))/c)*2*d,h[g][1]]),f=Math.min(l,Math.max(3,Math.round(l*n))),p=[...Array(f).keys()],M=s.map(x=>(o.get(x).tasks||0)+.1);return{ids:s,pos:u,bars:r,fixed:p,loads:M.map(x=>[0,-x,0]),weight:M,ground:p.map(x=>s[x])}}function sf(i,t){let e=i.bars.map(([a,l])=>Math.hypot(...[0,1,2].map(h=>i.pos[l][h]-i.pos[a][h]))),n=t.force.map(Math.abs),s=t.force.map((a,l)=>a<0?-a*e[l]*e[l]:0),r=a=>a.reduce((l,h,c)=>h>a[l]?c:l,0),o=t.u.map((a,l)=>i.fixed.includes(l)?0:Math.hypot(...a));return{len:e,carry:n,buckle:s,sag:o,busiest:n.length?r(n):-1,weakest:s.length&&Math.max(...s)>0?r(s):-1,sagging:o.length?r(o):-1}}var oy=.01,rf="#60a5fa",lh="#f87171",of="#f59e0b",af={id:"loadpaths",name:"Load paths",hint:"Which links carry the vault, and which note sags first",home:{yaw:.6,pitch:.65,dist:46,min:12,max:110},stage:{light:"camera",fog:[60,150],ambient:.6,glow:{strength:.6,radius:.5,threshold:.8}},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=nf(e.nodes,e.links);if(l.ids.length<4){let A=()=>yt(l.ids.length,"linked note");return t.stat(A()),t.controls({at:"centre",lines:["Load paths needs a set of notes joined by written links.",`${yt(l.ids.length,"note")} joined so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:A,today:()=>null,api:{empty:!0}}}let h=ef(l,{sway:oy}),c=sf(l,h),d=new Map(e.nodes.map(A=>[A.id,A])),u=Xe(e.nodes),f=l.ids.length,p=A=>d.get(l.ids[A]).name,M=new Map(l.ids.map((A,D)=>[A,D])),x=A=>.3+.55*Math.sqrt(Math.max(0,u(d.get(l.ids[A])))),g=Math.max(...c.carry,1e-9),y=o.palette,w=new Xt,_=new Le,S=new Mt,b=new H(0,1,0),m=A=>(i.scene.add(A),A),v=new Set(l.fixed);i.sky({top:"#03050b",haze:"#0a0f1c"});let U=[!1,!0].map(A=>{let D=[];l.bars.forEach(([ut,ft],ct)=>{if(h.force[ct]<0!==A)return;let vt=Math.min(6,Math.round(1+5*c.carry[ct]/g));for(let J=0;J<vt;J++)D.push({i:ut,j:ft,phase:(ct*.618+J/vt)%1,dir:A?-1:1})});let j=(ut,ft)=>{let ct=D[ut],vt=((ct.phase+ct.dir*ft*.12)%1+1)%1,J=l.pos[ct.i],_t=l.pos[ct.j];return[J[0]+(_t[0]-J[0])*vt,J[1]+(_t[1]-J[1])*vt,J[2]+(_t[2]-J[2])*vt]},$=be(D.length,j,{color:A?"#ffb4a8":"#a8d0ff",size:3.4,opacity:.9});return m($.object),$}),E=m(new fe(new pe(1,16,12),new Ce({roughness:.45}),f)),P=m(new fe(new xe(1,1,1,8,1),new Ce({roughness:.6}),Math.max(l.bars.length,1))),F=A=>.03+.17*Math.sqrt(c.carry[A]/g),L=n.selected&&M.has(n.selected)?M.get(n.selected):null,R=null,V=null,z=A=>l.bars.map((D,j)=>D[0]===A||D[1]===A?j:-1).filter(D=>D>=0),X=A=>h.force[A]<0?"pushed":"pulled",G=A=>c.carry[A].toFixed(c.carry[A]<10?2:1),W=()=>{if(R!=null)return`${p(l.bars[R][0])} \u2013 ${p(l.bars[R][1])} \xB7 ${X(R)} with ${G(R)}`;let A=V??L;if(A!=null){let D=z(A),j=D.reduce(($,ut)=>$+c.carry[ut],0);return`${p(A)} \xB7 ${v.has(A)?"ground":`sags ${c.sag[A].toFixed(2)}`} \xB7 ${yt(D.length,"bar")} carrying ${j.toFixed(1)}`}return`${yt(f,"note")} \xB7 ${yt(l.bars.length,"bar")} \xB7 ${yt(l.ground.length,"ground note")} \xB7 load ${l.weight.reduce((D,j)=>D+j,0).toFixed(1)}`};function tt(){let A=V??L,D=new Set(A!=null?z(A):R!=null?[R]:[]),j=new Set(R!=null?l.bars[R]:[]);for(let ft=0;ft<f;ft++){let ct=x(ft)*(ft===A?1.4:1);w.makeScale(ct,ct,ct).setPosition(...l.pos[ft]),E.setMatrixAt(ft,w);let vt=(A!=null||R!=null)&&ft!==A&&!j.has(ft)&&!z(ft).some(J=>D.has(J));S.set(v.has(ft)?of:y[(d.get(l.ids[ft]).cluster||0)%y.length]),ft===A&&S.set(o.fg),vt&&S.multiplyScalar(.25),E.setColorAt(ft,S)}l.bars.forEach(([ft,ct],vt)=>{let J=new H(...l.pos[ft]),_t=new H(...l.pos[ct]),St=_t.clone().sub(J),Ut=St.length()||1e-6,qt=F(vt)*(D.has(vt)?1.6:1);_.setFromUnitVectors(b,St.normalize()),w.compose(J.add(_t).multiplyScalar(.5),_,new H(qt,Ut,qt)),P.setMatrixAt(vt,w),S.set(h.force[vt]<0?lh:rf),(A!=null||R!=null)&&!D.has(vt)&&S.multiplyScalar(.25),P.setColorAt(vt,S)});for(let ft of[E,P])ft.instanceMatrix.needsUpdate=!0,ft.instanceColor&&(ft.instanceColor.needsUpdate=!0);let $=[],ut=(ft,ct,vt)=>$.push({text:ee(ct,34),at:l.pos[ft],dy:-14,color:vt});if(A!=null)$.push({text:ee(p(A),34),at:l.pos[A],strong:!0,dy:-18,run:()=>st(A),title:`Open ${p(A)}`});else if(R==null){if(c.sag[c.sagging]>0&&ut(c.sagging,`${p(c.sagging)} sags most`,o.fg),c.weakest>=0){let[ft,ct]=l.bars[c.weakest];ut(c.sag[ft]>=c.sag[ct]?ft:ct,"closest to buckling",lh)}}else for(let ft of l.bars[R])ut(ft,p(ft),o.fg);t.labels($),t.stat(W())}function st(A){L=A,R=null,tt(),a(),s(l.ids[A])}let O=A=>[0,1,2].map(D=>(l.pos[l.bars[A][0]][D]+l.pos[l.bars[A][1]][D])/2),at=[...l.ids.map((A,D)=>({at:l.pos[D],r:x(D),key:{kind:"note",id:A,tip:`${p(D)} \xB7 ${v.has(D)?"ground":`sags ${c.sag[D].toFixed(2)}`}`}})),...l.bars.map((A,D)=>({at:O(D),r:Math.max(F(D)*2,.35),key:{kind:"bar",id:String(D),tip:`${p(A[0])} \u2013 ${p(A[1])} \xB7 ${X(D)} with ${G(D)}`}}))];return(()=>{let A=Kd({n:f,bars:l.bars,ground:l.ground,sag:c.sag,sagging:c.sagging,weakest:c.weakest,busiest:c.busiest,carry:c.carry},p);t.explain({plain:A.plain,about:A.about,legend:[{color:rf,text:"pulled"},{color:lh,text:"pushed"},{color:of,text:"ground"},{color:o.muted,text:"thicker bar = more load"}],insights:A.insights.map(D=>({text:D.text,label:D.label,run:()=>{D.bar!=null?(R=D.bar,L=null,tt(),a()):st(D.note)}}))})})(),tt(),{targets:()=>at,tick(A){for(let D of U)D.tick(A)},click(A){A.kind==="note"?st(M.get(A.id)):A.kind==="bar"&&(R=+A.id,L=null,tt(),a())},hover(A){let D=A&&A.kind==="note"?M.get(A.id):null;D!==V&&(V=D,tt())},update(A){"selected"in A&&(L=A.selected&&M.has(A.selected)?M.get(A.selected):null,R=null,tt())},stat:W,today:()=>c.busiest<0?null:{text:`${p(l.bars[c.busiest][0])} \u2013 ${p(l.bars[c.busiest][1])} carries the most (${G(c.busiest)}), ${X(c.busiest)}`,label:"Show it",run:()=>{R=c.busiest,L=null,tt(),a()}},api:{truss:()=>l,solved:()=>h,read:()=>c,selected:()=>L==null?null:l.ids[L],bar:()=>R,notes:()=>l.ids},dispose(){E.material.dispose(),P.material.dispose()}}}};function ay(i,{sweeps:t=60,tolerance:e=1e-12}={}){let n=i.length,s=i.map(a=>Float64Array.from(a)),r=Array.from({length:n},(a,l)=>{let h=new Float64Array(n);return h[l]=1,h});for(let a=0;a<t;a++){let l=0;for(let h=0;h<n;h++)for(let c=h+1;c<n;c++)l+=s[h][c]*s[h][c];if(l<e*e)break;for(let h=0;h<n;h++)for(let c=h+1;c<n;c++){if(Math.abs(s[h][c])<1e-300)continue;let d=(s[c][c]-s[h][h])/(2*s[h][c]),u=Math.sign(d||1)/(Math.abs(d)+Math.sqrt(d*d+1)),f=1/Math.sqrt(u*u+1),p=u*f;for(let M=0;M<n;M++){let x=s[M][h],g=s[M][c];s[M][h]=f*x-p*g,s[M][c]=p*x+f*g}for(let M=0;M<n;M++){let x=s[h][M],g=s[c][M];s[h][M]=f*x-p*g,s[c][M]=p*x+f*g}for(let M=0;M<n;M++){let x=r[M][h],g=r[M][c];r[M][h]=f*x-p*g,r[M][c]=p*x+f*g}}}let o=[...Array(n).keys()].sort((a,l)=>s[a][a]-s[l][l]);return{values:o.map(a=>s[a][a]),vectors:o.map(a=>Array.from({length:n},(l,h)=>r[h][a]))}}function ly(i,t){let e=Array.from({length:i},()=>new Array(i).fill(0));for(let[n,s]of t)n!==s&&(e[n][n]++,e[s][s]++,e[n][s]--,e[s][n]--);return e}function cy(i,t){let{values:e,vectors:n}=ay(ly(i,t)),s=[];for(let r=0;r<i;r++){if(e[r]<1e-9)continue;let o=n[r],a=Math.max(...o.map(Math.abs))||1,l=o.find(h=>Math.abs(h)>1e-9*a)<0?-1:1;s.push({value:e[r],freq:Math.sqrt(e[r]),vector:o.map(h=>l*h/a)})}return s}function ch(i,t=.05){let e=[],n=[],s=[];return i.forEach((r,o)=>(r>t?e:r<-t?n:s).push(o)),{up:e,down:n,rest:s}}function lf(i,t,{max:e=100}={}){let{ids:n,bars:s}=Vs(i,t,{max:e});return{ids:n,bars:s,pos:zs(n,s),modes:n.length>=3?cy(n.length,s):[]}}var hh="#f59e0b",uh="#38bdf8",hy=6,uy=.18,cf=44,hf={id:"modes",name:"Normal modes",hint:"How the vault would ring: its natural cuts into halves",home:{yaw:.7,pitch:.8,dist:50,min:14,max:110},stage:{light:"camera",fog:[70,170],ambient:.6,glow:{strength:.55,radius:.5,threshold:.8}},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=lf(e.nodes,e.links,{max:80}),h=l.ids.length;if(!l.modes.length){let pt=()=>yt(h,"linked note");return t.stat(pt()),t.controls({at:"centre",lines:["Normal modes needs a set of notes joined by written links.",`${yt(h,"note")} joined so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:pt,today:()=>null,api:{empty:!0}}}let c=new Map(e.nodes.map(pt=>[pt.id,pt])),d=pt=>c.get(l.ids[pt]).name,u=new Map(l.ids.map((pt,N)=>[pt,N])),f=new Mt(hh),p=new Mt(uh),M=new Mt(o.bg).lerp(new Mt(o.muted),.12),x=new Xt,g=new Mt,y=pt=>(i.scene.add(pt),pt),w=l.pos.map(pt=>pt[0]),_=l.pos.map(pt=>pt[1]),S=2,b=Math.min(...w)-S,m=Math.max(...w)+S,v=Math.min(..._)-S,U=Math.max(..._)+S,E=(b+m)/2,P=(v+U)/2,F=m-b,L=U-v,R=pt=>[l.pos[pt][0]-E,l.pos[pt][1]-P],V=Math.max(hy,uy*Math.max(F,L)),z=new Yi(F,L,cf,cf).rotateX(-Math.PI/2),X=z.attributes.position.count,G=new Float32Array(X*h);for(let pt=0;pt<X;pt++){let N=z.attributes.position.getX(pt),T=z.attributes.position.getZ(pt),nt=0;for(let I=0;I<h;I++){let[et,xt]=R(I),mt=1/((N-et)**2+(T-xt)**2+4);G[pt*h+I]=mt,nt+=mt}for(let I=0;I<h;I++)G[pt*h+I]/=nt}z.setAttribute("color",new Ot(new Float32Array(X*3),3));let W=y(new te(z,new Ce({vertexColors:!0,roughness:.55,metalness:.05,side:me,transparent:!0,opacity:.9}))),tt=y(new te(z,new Ce({color:o.fg,wireframe:!0,transparent:!0,opacity:.1}))),st=y(new fe(new pe(1,16,12),new Ce({roughness:.4}),h)),O=new oe;O.setAttribute("position",new Mn(new Float32Array(l.bars.length*6),3));let at=y(new Ze(O,new Be({color:o.fg,transparent:!0,opacity:.55})));at.frustumCulled=st.frustumCulled=W.frustumCulled=tt.frustumCulled=!1,i.sky({top:"#03050b",haze:"#0a0f1c"});let K=pt=>.4+(pt<6?.2:0),A=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,D=!1,j=0,$=0,ut=!A,ft=A?.25:0,ct=null,vt=n.selected&&u.has(n.selected)?u.get(n.selected):null,J=null,_t=()=>l.modes[$],St=()=>Math.sin(ft*2*Math.PI),Ut=new Float64Array(h),qt=()=>ch(_t().vector),Jt=pt=>_t().vector[pt],lt=()=>{let pt=J??vt;if(pt!=null)return`${d(pt)} \xB7 ${Math.abs(Jt(pt))<.05?"on a nodal line":Jt(pt)>0?"swings up":"swings down"} ${Math.abs(Jt(pt)).toFixed(2)} in mode ${$+1}`;let N=qt();return`Mode ${$+1} of ${l.modes.length} \xB7 ${N.up.length} up, ${N.down.length} down \xB7 frequency ${_t().freq.toFixed(2)}`};function Nt(){let pt=qt(),N=[$===0?"The cleanest cut of the vault into two halves":`${yt(pt.up.length,"note")} swinging up, ${yt(pt.down.length,"note")} down, ${yt(pt.rest.length,"note")} on a nodal line`];t.controls({lines:N,buttons:[{label:"\u25C0",title:"Previous mode (slower)",off:$===0,run:()=>Rt($-1)},{label:`Mode ${$+1}`,title:"Back to mode 1, the slowest",run:()=>Rt(0)},{label:"\u25B6",title:"Next mode (faster)",off:$===l.modes.length-1,run:()=>Rt($+1)},{label:ut?"Hold":"Ring",title:ut?"Hold the sheet still":"Let the sheet ring",run:()=>{ut=!ut,ct=null,Nt(),a()}}]})}function q(){let pt=[],N=_t().vector,T=N.indexOf(Math.max(...N)),nt=N.indexOf(Math.min(...N)),I=J??vt,et=(xt,mt,B)=>pt.push({text:ee(mt,34),at:[R(xt)[0],0,R(xt)[1]],dy:-14,color:B});I!=null?pt.push({text:ee(d(I),34),at:[R(I)[0],0,R(I)[1]],strong:!0,dy:-18,run:()=>$t(I),title:`Open ${d(I)}`}):(et(T,d(T),hh),nt!==T&&et(nt,d(nt),uh)),t.labels(pt)}function Ct(){let pt=_t().vector,N=z.attributes.color;for(let T=0;T<X;T++){let nt=0;for(let I=0;I<h;I++)nt+=G[T*h+I]*pt[I];g.copy(M).lerp(nt>=0?f:p,Math.min(1,Math.abs(nt)**.8*1.25)),N.setXYZ(T,g.r,g.g,g.b)}N.needsUpdate=!0,Z()}function Vt(){let pt=$d({bars:l.bars,vector:_t().vector,freq:_t().freq,k:$,count:l.modes.length},d);t.explain({plain:pt.plain,about:pt.about,legend:[{color:hh,text:"swings up"},{color:uh,text:"swings down"},{color:o.muted,text:"nodal line, still"}],insights:pt.insights.map(N=>({text:N.text,label:N.label,run:()=>{N.note!=null?$t(N.note):(vt=null,Rt($))}}))})}function Z(){q(),t.stat(lt())}function jt(){let pt=_t().vector,N=St(),T=z.attributes.position;for(let I=0;I<X;I++){let et=0;for(let xt=0;xt<h;xt++)et+=G[I*h+xt]*pt[xt];T.setY(I,et*V*N)}T.needsUpdate=!0,z.computeVertexNormals();let nt=O.attributes.position;for(let I=0;I<h;I++)Ut[I]=pt[I]*V*N;l.bars.forEach(([I,et],xt)=>{let[mt,B]=R(I),[Q,gt]=R(et);nt.setXYZ(2*xt,mt,Ut[I]+.05,B),nt.setXYZ(2*xt+1,Q,Ut[et]+.05,gt)}),nt.needsUpdate=!0;for(let I=0;I<h;I++){let[et,xt]=R(I),mt=I===(J??vt),B=K(I)*(mt?1.5:1);x.makeScale(B,B,B).setPosition(et,Ut[I]+B*.6,xt),st.setMatrixAt(I,x),g.copy(M).lerp(pt[I]>=0?f:p,Math.min(1,Math.abs(pt[I])**.8*1.25+.25)),mt&&g.set(o.fg),st.setColorAt(I,g)}st.instanceMatrix.needsUpdate=!0,st.instanceColor&&(st.instanceColor.needsUpdate=!0)}function Rt(pt){$=Math.max(0,Math.min(l.modes.length-1,pt)),Ct(),Vt(),Nt(),jt(),a()}function $t(pt){vt=pt,Z(),jt(),a(),s(l.ids[pt])}let Et=()=>l.ids.map((pt,N)=>{let[T,nt]=R(N);return{at:[T,Ut[N]+.4,nt],r:K(N)*1.2,key:{kind:"note",id:pt,tip:`${d(N)} \xB7 ${Math.abs(Jt(N))<.05?"still":Jt(N)>0?"up":"down"} ${Math.abs(Jt(N)).toFixed(2)}`}}}),Me=()=>{D=!0,clearTimeout(j)},zt=()=>{clearTimeout(j),j=setTimeout(()=>{D=!1,ct=null,a()},1500)};return i.canvas.addEventListener("pointerdown",Me,!0),addEventListener("pointerup",zt),addEventListener("pointercancel",zt),Vt(),Ct(),Nt(),jt(),{targets:Et,click(pt){pt.kind==="note"&&$t(u.get(pt.id))},hover(pt){let N=pt&&pt.kind==="note"?u.get(pt.id):null;N!==J&&(J=N,Z(),jt())},update(pt){"selected"in pt&&(vt=pt.selected&&u.has(pt.selected)?u.get(pt.selected):null,Z(),jt())},frame(){if(ut&&!D){let pt=performance.now();ct!=null&&(ft=(ft+(pt-ct)/1e3*.5*Math.min(2.2,.45+_t().freq*.8))%1),ct=pt,jt(),a()}else ct=null},stat:lt,today:()=>{let pt=ch(l.modes[0].vector);return{text:`The vault's cleanest cut is ${pt.up.length} notes against ${pt.down.length}`,label:"Show it",run:()=>{vt=null,Rt(0)}}},api:{modes:()=>l.modes,ids:()=>l.ids,mode:()=>$,setMode:Rt,playing:()=>ut,moving:()=>ut&&!D,hold(pt){ut=!1,pt!=null&&(ft=pt),jt(),Nt(),a()},span:()=>Math.max(F,L),rise:()=>V,selected:()=>vt==null?null:l.ids[vt],heights:()=>Array.from(Ut),sheetHeights:()=>Array.from(z.attributes.position.array.filter((pt,N)=>N%3===1)),split:qt},dispose(){clearTimeout(j),i.canvas.removeEventListener("pointerdown",Me,!0),removeEventListener("pointerup",zt),removeEventListener("pointercancel",zt);for(let pt of[W,tt,st,at])pt.material.dispose();z.dispose(),O.dispose()}}}};function dh(i,t,e,n,s){let r=[],o=new Array(i).fill(-1);for(let c=0;c<i;c++)c!==s&&(o[c]=r.length,r.push(c));let a=r.length,l=Array.from({length:a},()=>new Float64Array(a+1));t.forEach(([c,d],u)=>{let f=e[u];for(let[p,M]of[[c,d],[d,c]])o[p]>=0&&(l[o[p]][o[p]]+=f,o[M]>=0&&(l[o[p]][o[M]]-=f))}),o[n]>=0&&(l[o[n]][a]=1);for(let c=0;c<a;c++)l[c][c]<1e-300&&(l[c][c]=1);for(let c=0;c<a;c++){let d=c;for(let f=c+1;f<a;f++)Math.abs(l[f][c])>Math.abs(l[d][c])&&(d=f);[l[c],l[d]]=[l[d],l[c]];let u=l[c][c];if(!(Math.abs(u)<1e-300))for(let f=c+1;f<a;f++){let p=l[f][c]/u;if(p)for(let M=c;M<=a;M++)l[f][M]-=p*l[c][M]}}let h=new Float64Array(a);for(let c=a-1;c>=0;c--){let d=l[c][a];for(let u=c+1;u<a;u++)d-=l[c][u]*h[u];h[c]=Math.abs(l[c][c])<1e-300?0:d/l[c][c]}return Array.from({length:i},(c,d)=>o[d]>=0?h[o[d]]:0)}function dy(i,t,e,n,s,r){let o=dh(i,t,t.map((a,l)=>e[l]/n[l]),s,r);return t.map(([a,l],h)=>e[h]/n[h]*(o[a]-o[l]))}function fy(i,t,{lengths:e,pairs:n,steps:s=200,dt:r=.5,floor:o=1e-6,keep:a=40}={}){let l=e||t.map(()=>1),h=t.map(()=>1),c=[Float32Array.from(h)],d=Math.max(1,Math.floor(s/(a-1)));for(let u=0;u<s&&n.length;u++){let[f,p]=n[u%n.length],M=dy(i,t,h,l,f,p);for(let x=0;x<h.length;x++)h[x]=Math.max(o,h[x]+r*(Math.abs(M[x])-h[x]));(u+1)%d===0&&c.length<a&&c.push(Float32Array.from(h))}for(;c.length<a;)c.push(Float32Array.from(h));return c[c.length-1]=Float32Array.from(h),{D:h,frames:c,steps:s}}function py(i,t=.1){let e=Math.max(...i,1e-12),n=Array.from(i,s=>s/e);return{share:n,kept:n.map(s=>s>=t)}}var my=24;function uf(i,t,{max:e=80,hubs:n=6,hubMax:s=my,steps:r=200}={}){let{ids:o,bars:a,own:l}=Vs(i,t,{max:e,hubs:s}),h=o.map((g,y)=>l.get(g).moc?y:-1).filter(g=>g>=0),c=h.length>=2?"hubs":"top",d=o.map((g,y)=>y).filter(g=>!h.includes(g)),u=c==="hubs"?h:d.slice(0,Math.min(n,d.length)),f=[];for(let g=0;g<u.length;g++)for(let y=g+1;y<u.length;y++)f.push([u[g],u[y]]);let p=f.length?fy(o.length,a,{pairs:f,steps:Math.max(r,f.length)}):{D:a.map(()=>1),frames:[Float32Array.from(a.map(()=>1))]},{share:M,kept:x}=py(p.D);return{ids:o,bars:a,pos:zs(o,a),hubs:u,fed:c,D:p.D,frames:p.frames,share:M,kept:x}}function df(i=1){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function ff(i,t){let e=Array.from({length:i},()=>[]);for(let[r,o]of t)e[r].push(o),e[o].push(r);let n=new Array(i).fill(-1),s=0;for(let r=0;r<i;r++){if(n[r]>=0)continue;let o=[r];for(n[r]=s;o.length;)for(let a of e[o.pop()])n[a]<0&&(n[a]=s,o.push(a));s++}return n}function Tl(i,t,e){if(e.length<2)return 0;let n=ff(i,t),s=t.map(()=>1),r=0,o=0;for(let a=0;a<e.length;a++)for(let l=a+1;l<e.length;l++)o++,r+=n[e[a]]!==n[e[l]]?i:dh(i,t,s,e[a],e[l])[e[a]];return r/o}function pf(i,t,e){if(i<2||new Set(ff(i,t)).size!==1)return null;let n=i-1,s=Array.from({length:n},(h,c)=>{let d=new Float64Array(2*n);return d[n+c]=1,d});for(let[h,c]of t){let d=h-1,u=c-1;d>=0&&s[d][d]++,u>=0&&s[u][u]++,d>=0&&u>=0&&(s[d][u]--,s[u][d]--)}for(let h=0;h<n;h++){let c=h;for(let u=h+1;u<n;u++)Math.abs(s[u][h])>Math.abs(s[c][h])&&(c=u);[s[h],s[c]]=[s[c],s[h]];let d=s[h][h];for(let u=0;u<2*n;u++)s[h][u]/=d;for(let u=0;u<n;u++){if(u===h||!s[u][h])continue;let f=s[u][h];for(let p=0;p<2*n;p++)s[u][p]-=f*s[h][p]}}let r=(h,c)=>h===0||c===0?0:s[h-1][n+c-1],o=(h,c)=>r(h,h)+r(c,c)-2*r(h,c),a=[];for(let h=0;h<e.length;h++)for(let c=h+1;c<e.length;c++)a.push([e[h],e[c]]);let l=h=>a.length?a.reduce((c,[d,u])=>c+h(d,u),0)/a.length:0;return{base:l(o),after:([h,c])=>{let d=o(h,c);return l((u,f)=>{let p=r(u,h)-r(u,c)-r(f,h)+r(f,c);return o(u,f)-p*p/(1+d)})}}}var Gs=(i,t)=>i<t?i+","+t:t+","+i;function gy(i,t,e,n=null){let s=(r,o)=>r!==o&&!t.has(Gs(r,o))&&!(n&&(n.has(r)||n.has(o)));for(let r=0;r<200;r++){let o=Math.floor(e()*i),a=Math.floor(e()*i);if(s(o,a))return[o,a]}for(let r=0;r<i;r++)for(let o=r+1;o<i;o++)if(s(r,o))return[r,o];return null}function xy(i,t,e,n,{shuffles:s=50,seed:r=1,fast:o,skip:a=null}={}){let l=o===void 0?pf(i,t,e):o,h=l?l.base:Tl(i,t,e),c=g=>l?l.after(g):Tl(i,[...t,g],e),d=new Set(t.map(([g,y])=>Gs(g,y))),u=a&&a.length?new Set(a):null;if(n[0]===n[1]||d.has(Gs(n[0],n[1]))||u&&(u.has(n[0])||u.has(n[1])))return{gain:0,p:1,valid:!1};let f=h-c(n),p=df(r),M=0,x=new Set(d);x.add(Gs(n[0],n[1]));for(let g=0;g<s;g++){let y=gy(i,x,p,u);if(!y)break;h-c(y)>=f&&M++}return{gain:f,p:(1+M)/(1+s),valid:!0}}function _y(i,t,e,n,{shuffles:s=50,seed:r=1,alpha:o=.05,minGain:a=.001,skip:l=null}={}){let h=pf(i,t,e);return n.map(c=>({link:c,...xy(i,t,e,c,{shuffles:s,seed:r,fast:h,skip:l})})).filter(c=>c.valid&&c.p<o&&c.gain>=a).sort((c,d)=>d.gain-c.gain||c.p-d.p)}function yy(i,t,{max:e=200,seed:n=1,skip:s=null}={}){let r=new Set(t.map(([h,c])=>Gs(h,c))),o=[],a=new Set(s||[]);for(let h=0;h<i;h++)if(!a.has(h))for(let c=h+1;c<i;c++)!a.has(c)&&!r.has(Gs(h,c))&&o.push([h,c]);if(o.length<=e)return o;let l=df(n);for(let h=o.length-1;h>0;h--){let c=Math.floor(l()*(h+1));[o[h],o[c]]=[o[c],o[h]]}return o.slice(0,e).sort((h,c)=>h[0]-c[0]||h[1]-c[1])}function mf(i,t,e,{steps:n=5,max:s=200,shuffles:r=50,seed:o=1,alpha:a=.05,minGain:l=.001,skip:h=null}={}){let c=t.map(([f,p])=>[f,p]),d=[],u=Tl(i,c,e);for(let f=0;f<n;f++){let p=_y(i,c,e,yy(i,c,{max:s,seed:o+f,skip:h}),{shuffles:r,seed:o+f,alpha:a,minGain:l,skip:h})[0];if(!p)break;c=[...c,p.link],d.push(p)}return{added:d,before:u,after:Tl(i,c,e)}}var My=8,fh=.1,gf={id:"slime",name:"Slime mould",hint:"Which written links carry the vault, and which fade away",home:{yaw:.6,pitch:.75,dist:46,min:14,max:110},stage:{fog:[40,100],ambient:.55,glow:{strength:.6,radius:.5,threshold:.85}},actions:["graph","add-link","decline-link"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=uf(e.nodes,e.links,{max:80}),h=l.ids.length,c=l.frames.length-1;if(h<3||l.hubs.length<2){let B=()=>yt(h,"linked note");return t.stat(B()),t.controls({at:"centre",lines:["Slime mould needs a set of notes joined by written links.",`${yt(h,"note")} joined so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:B,today:()=>null,api:{empty:!0}}}let d=new Map(e.nodes.map(B=>[B.id,B])),u=B=>d.get(l.ids[B]).name,f=new Map(l.ids.map((B,Q)=>[B,Q])),p=l.fed==="hubs"?"hubs":"most linked notes",M=new Set(l.hubs),x=Math.max(...l.D,1e-12),g=B=>(i.scene.add(B),B),y=l.pos.map(B=>B[0]),w=l.pos.map(B=>B[1]),_=(Math.min(...y)+Math.max(...y))/2,S=(Math.min(...w)+Math.max(...w))/2,b=20,m=Math.max(1e-9,...l.pos.map(B=>Math.hypot(B[0]-_,B[1]-S))),v=b/m,U=B=>[(l.pos[B][0]-_)*v,(l.pos[B][1]-S)*v],E=9,P=new Float64Array(h),F=[],L=B=>[U(B)[0],P[B],U(B)[1]],R=()=>{let B=new Float64Array(h);l.bars.forEach(([gt,k],it)=>{let ht=qt[it]/x;B[gt]+=ht,B[k]+=ht});let Q=Math.max(...B,1e-9);for(let gt=0;gt<h;gt++)P[gt]=E*Math.sqrt(B[gt]/Q)*(M.has(gt)?1:.85)},V=new Xt,z=new Mt,X=new Mt(o.bg).lerp(new Mt(o.muted),.55),G=new Mt("#f59e0b"),W=new Mt(o.accent||"#38bdf8"),tt=new Mt(o.fg),st=new H(0,1,0),O=new H,at=new H,K=new Le,A=new H,D=g(new fe(new xe(1,1,1,10,1),new Ce({roughness:.5}),l.bars.length)),j=g(new fe(new pe(1,16,12),new Ce({roughness:.4}),h));D.frustumCulled=j.frustumCulled=!1;let $=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,ut=$?c:0,ft=!$,ct=null,vt=n.selected&&f.has(n.selected)?f.get(n.selected):null,J=null,_t=()=>{let B=l.frames[Math.floor(ut)],Q=l.frames[Math.min(c,Math.floor(ut)+1)],gt=ut-Math.floor(ut);return Array.from(B,(k,it)=>k+(Q[it]-k)*gt)},St=B=>B.filter(Q=>Q/x>=fh).length,Ut=B=>M.has(B)?.75:.4,qt=_t();R();let Jt=2,lt=[...M],Nt=be(Math.max(1,lt.length),B=>lt[B]===void 0?[0,-99,0]:L(lt[B]),{size:14,color:o.accent||"#38bdf8",opacity:.6}),q=be(l.bars.length*Jt,(B,Q)=>{let gt=B%l.bars.length,[k,it]=l.bars[gt],ht=qt[gt]/x>=fh,[Tt,bt]=P[k]<=P[it]?[k,it]:[it,k];if(!ht)return L(Tt);let At=(Q*.35+Math.floor(B/l.bars.length)/Jt+gt*.173)%1,kt=L(Tt),Qt=L(bt);return[0,1,2].map(wt=>kt[wt]+(Qt[wt]-kt[wt])*At)},{size:5,color:"#fde68a",opacity:.95}),Ct=[Nt,q];for(let B of Ct)g(B.object);i.sky({top:"#04060c",haze:"#0e121c"});let Vt=()=>{let B=J??vt;if(B!=null){let Q=l.bars.map((k,it)=>k[0]===B||k[1]===B?it:-1).filter(k=>k>=0),gt=Q.filter(k=>qt[k]/x>=fh).length;return`${u(B)} \xB7 ${M.has(B)?"hub \xB7 ":""}${gt} of ${yt(Q.length,"link")} carry on`}return`${St(qt)} of ${yt(l.bars.length,"link")} carry on \xB7 fed by ${l.hubs.length} ${p} \xB7 step ${Math.round(ut)} of ${c}`};function Z(){let B=ut>=c;t.controls({lines:[B?`The links that carry flow between the ${p}`:"Tubes thicken where flow is high and thin where it is not"],buttons:[{label:ft&&!B?"Hold":B?"Grow again":"Play",title:ft&&!B?"Hold the growth":B?"Start again from tubes of equal width":"Let the mould grow",run:()=>{ut>=c&&(ut=0),ft=!(ft&&!B),ct=null,Rt(),a()}},{label:"Start",title:"Back to tubes of equal width",off:ut===0,run:()=>{ut=0,ft=!1,ct=null,Rt(),a()}},{label:"End",title:"Jump to the finished backbone",off:ut>=c,run:()=>{ut=c,ft=!1,Rt(),a()}},{label:"Simulate",title:`Find links that would shorten the routes between your ${p}, and test each against random links`,run:et}]})}function jt(){let B=[],Q=J??vt;F.length=0;let gt=(k,it)=>{it.at=L(k),F.push([k,it.at]),B.push(it)};for(let k of l.hubs.slice(0,4))k!==Q&&gt(k,{text:ee(u(k),30),dy:-16,color:o.accent});Q!=null&&gt(Q,{text:ee(u(Q),34),strong:!0,dy:-20,run:()=>Et(Q),title:`Open ${u(Q)}`}),t.labels(B)}function Rt(){qt=_t(),$t(),jt(),Z(),t.stat(Vt())}function $t(){R(),l.bars.forEach(([B,Q],gt)=>{let[k,it,ht]=L(B),[Tt,bt,At]=L(Q),kt=Math.min(1,qt[gt]/x),Qt=.05+.4*Math.sqrt(kt);O.set(Tt-k,bt-it,At-ht);let wt=O.length()||1e-6;O.normalize(),at.set((k+Tt)/2,(it+bt)/2,(ht+At)/2),K.setFromUnitVectors(st,O),A.set(Qt,wt,Qt),V.compose(at,K,A),D.setMatrixAt(gt,V),z.copy(X).lerp(G,Math.min(1,Math.sqrt(kt)*1.1)),D.setColorAt(gt,z)}),D.instanceMatrix.needsUpdate=!0,D.instanceColor&&(D.instanceColor.needsUpdate=!0);for(let B=0;B<h;B++){let[Q,gt,k]=L(B),it=B===(J??vt),ht=Ut(B)*(it?1.4:1);V.makeScale(ht,ht,ht).setPosition(Q,gt,k),j.setMatrixAt(B,V),z.copy(M.has(B)?W:X).lerp(tt,M.has(B)?0:.35),it&&z.copy(tt),j.setColorAt(B,z)}for(let[B,Q]of F)Q[1]=P[B];j.instanceMatrix.needsUpdate=!0,j.instanceColor&&(j.instanceColor.needsUpdate=!0)}function Et(B){vt=B,Rt(),a(),s(l.ids[B])}let Me=()=>l.ids.map((B,Q)=>({at:L(Q),r:Ut(Q)*1.3,key:{kind:"note",id:B,tip:`${u(Q)}${M.has(Q)?" \xB7 hub":""}`}})),zt=tf({n:h,bars:l.bars,kept:l.kept,hubs:l.hubs,order:l.ids.map((B,Q)=>Q)},u),pt=null,N=new Set,T=()=>{N.clear();for(let B of n.declined||[])N.add(B.from+">"+B.to)};T();let nt=()=>pt?pt.rows.filter(B=>!N.has(B.from+">"+B.to)):[],I=B=>{let Q=B.from+">"+B.to,gt=[f.get(B.from),f.get(B.to)],k=`about 1 in ${Math.max(2,Math.round(1/B.p))}`;return{text:`Link ${u(gt[0])} to ${u(gt[1])}: routes between your ${p} get ${Math.max(1,Math.round(B.pct*100))}% shorter. A random link would do this ${k} times.`,label:"Add link",title:`Add a link between ${u(gt[0])} and ${u(gt[1])}`,run:()=>{N.add(Q),xt(),r("add-link",{from:B.from,to:B.to})},extra:[{label:"Decline",title:"Skip this link",run:()=>{N.add(Q),xt(),r("decline-link",{from:B.from,to:B.to})}},{label:"Show",title:`Show ${u(gt[0])}`,run:()=>Et(gt[0])}]}};function et(){let B=mf(h,l.bars,l.hubs,{steps:5,max:200,shuffles:50,seed:1,skip:l.fed==="hubs"?l.hubs:null}),Q=B.before;pt={rows:B.added.map(k=>{let it={from:l.ids[k.link[0]],to:l.ids[k.link[1]],p:k.p,pct:Q>0?k.gain/Q:0};return Q-=k.gain,it})},T(),xt(),t.card(!0)}function xt(){let B=nt(),Q=pt&&!B.length?[{text:pt.rows.length?"No more links to test.":`No link does better than a random one would. Your ${p} already reach each other about as well as links can.`,label:"Show it",run:()=>{vt=null,ut=c,ft=!1,Rt(),a()}}]:[];t.explain({plain:zt.plain,about:zt.about,legend:mt,insights:[...B.map(I),...Q,...zt.insights.map(gt=>({text:gt.text,label:gt.label,run:()=>{gt.note!=null?Et(gt.note):(vt=null,ut=c,ft=!1,Rt(),a())}}))]})}let mt=[{color:"#f59e0b",text:"carries flow (higher = more)"},{color:o.muted,text:"fading"},{color:o.accent||"#38bdf8",text:"hub"}];return xt(),Rt(),{targets:Me,click(B){B.kind==="note"&&Et(f.get(B.id))},hover(B){let Q=B&&B.kind==="note"?f.get(B.id):null;Q!==J&&(J=Q,Rt())},update(B){"declined"in B&&(n={...n,declined:B.declined},pt&&(T(),xt())),"selected"in B&&(vt=B.selected&&f.has(B.selected)?f.get(B.selected):null,Rt())},frame(){if(ft&&ut<c){let B=performance.now();ct!=null&&(ut=Math.min(c,ut+(B-ct)/1e3*My)),ct=B,ut>=c?(ft=!1,Rt()):(qt=_t(),$t(),t.stat(Vt())),a()}else ct=null},tick(B){for(let Q of Ct)Q.tick(B)},stat:Vt,today:()=>({text:`${St(l.frames[c])} of ${yt(l.bars.length,"link")} carry the vault between its ${l.hubs.length} ${p}`,label:"Show it",run:()=>{vt=null,ut=c,ft=!1,Rt()}}),api:{ids:()=>l.ids,hubs:()=>l.hubs.map(B=>l.ids[B]),step:()=>ut,steps:()=>c,playing:()=>ft&&ut<c,widths:()=>Array.from(qt),final:()=>Array.from(l.D),setStep(B){ut=Math.max(0,Math.min(c,B)),ft=!1,Rt(),a()},hold(){ft=!1,Rt()},selected:()=>vt==null?null:l.ids[vt],carrying:()=>St(qt),links:()=>l.bars.length},dispose(){for(let B of Ct)i.scene.remove(B.object),B.object.geometry.dispose(),B.object.material.dispose();for(let B of[D,j])B.material.dispose(),B.geometry.dispose()}}}};function Al(i,{linkedOnly:t=!0}={}){let e=Xe(i.nodes),n=new Map;for(let s of i.nodes)s.moc&&!n.has(s.cluster)&&n.set(s.cluster,s);return[...i.clusters].sort((s,r)=>r.size-s.size||s.id-r.id).map(s=>({cluster:s.id,name:s.label||s.name,moc:n.get(s.id)||null,notes:i.nodes.filter(r=>r.cluster===s.id&&!Pe(r)&&!(t&&r.isolated)).sort((r,o)=>e(o)-e(r)||(r.id<o.id?-1:1))})).filter(s=>s.notes.length)}var Rl=(i,t=1)=>{let e=Math.max(1,Math.ceil(Math.sqrt(i*t)));return{cols:e,rows:Math.ceil(i/e)}},eo=i=>{let t=Je(i),e=Math.imul(t^t>>>15,2246822507)>>>0;return[(t>>>4)%1e3/1e3,(e>>>7)%1e3/1e3]};function xf(i){let{cols:t,rows:e}=Rl(i),n=(t-1)/2,s=(e-1)/2,r=[];for(let o=0;o<e;o++)for(let a=0;a<t;a++)r.push([a-n,o-s]);return r.sort((o,a)=>Math.hypot(o[0],o[1])-Math.hypot(a[0],a[1])||o[1]-a[1]||o[0]-a[0]).slice(0,i)}var ph=2.4,vy=["#22d3ee","#f472b6","#facc15","#a5f3fc"],_f="#fb7185",yf="#facc15",Sy=(i,t,e)=>e(i)?0:t(i)>.3?2:1;function by(i,{hall:t=!1,now:e=Date.now()}={}){let n=Xe(i.nodes),s=ks(i.nodes),r=Ni(i),o=Al(i),a=Math.max(...o.map(_=>Rl(_.notes.length).cols),2)*ph+3,{cols:l,rows:h}=Rl(Math.max(o.length,1),.8),c=[],d=[],u=new Set,f=-(l-1)*a/2,p=-(h-1)*a/2;o.forEach((_,S)=>{_.x=f+S%l*a,_.z=p+Math.floor(S/l)*a,d.push({x:_.x,z:_.z,size:a-1.2,d:S});let b=xf(_.notes.length);if(_.notes.forEach((m,v)=>{let U=Math.max(.7,Math.min(1.8,.35+Math.log1p(m.words||0)*.2)),E=.9+9*Math.sqrt(Math.max(0,n(m))),[P,F]=b[v];c.push({n:m,x:_.x+P*ph,z:_.z+F*ph,w:U,h:E,kind:"tower",d:S,level:Sy(m,s,r)}),u.add(m.id)}),_.moc){let m=Math.max(3,...c.filter(v=>v.d===S).map(v=>v.h));c.push(t?{n:_.moc,x:_.x,z:_.z+a/2-1.3,w:1.4,h:1.1,kind:"hall",d:S,level:2}:{n:_.moc,x:_.x,z:_.z-a/2+1.6,w:.9,h:m+3,kind:"spire",d:S,level:2}),u.add(_.moc.id)}_.cars=Math.round(2+10*Math.min(1,_.notes.reduce((m,v)=>m+s(v),0)/6))});let M=p+(h-1)*a+a/2+3,x=Math.max(l*a-4,8);for(let _ of i.nodes){if(Pe(_)||u.has(_.id))continue;let[S]=eo("stall:"+_.id);c.push({n:_,x:f-a/2+2+S*x,z:M+Je(_.id)%3*1.4,w:.7,h:.8,kind:"stall",d:-1,level:1})}let g=e-7*864e5,y=_=>typeof _.n.born=="string"?Date.parse(_.n.born):NaN,w=c.filter(_=>_.kind==="tower"&&y(_)>=g).sort((_,S)=>y(S)-y(_)).slice(0,15).map(_=>_.n.id);return{towers:c,pads:d,districts:o,cell:a,front:M,fresh:w,bounds:{x:[f-a/2,-f+a/2],z:[p-a/2,M+3]}}}function wy(i,t){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d");n.fillStyle=t.wall,n.fillRect(0,0,128,128);for(let r=0;r<8;r++)for(let o=0;o<8;o++){let a=Je(`${i}:${o}:${r}`)%1e3/1e3,l=a<i;n.fillStyle=l?t.lit[(o+r*3)%t.lit.length]:t.pane,n.globalAlpha=l?.55+.45*(a/i):.5,n.fillRect(o*16+3,r*16+3,10,11)}let s=new Wi(e);return s.wrapS=s.wrapT=_s,s.colorSpace=We,s.magFilter=De,s}var ui=(i,t,e)=>new Mt(i).lerp(new Mt(t),e),Ey={id:"cyberpunk",name:"Cyberpunk",hint:"A neon city: topics are districts, notes are towers, stale ones go dark",stage:{fog:[55,170],ambient:.4,glow:{strength:.55,radius:.55,threshold:.62}},tower:"tower",hall:!1,cranes:!1,sheet:{wall:"#2a2a36",pane:"#3a3a4a",lit:vy},beacon:_f,beaconName:"pink",stall:yf,arc:"#22d3ee",wall:(i,t)=>ui(i,"#ffffff",t===0?.55:.3).multiplyScalar(t===0?.5:1),lane:(i,t,e,n)=>({y:4+t*8,z:(i-.5)*(n-3),c:e%3?"#fca5a5":"#e0f2fe"}),stat:i=>`${yt(i.towers,"tower")} \xB7 ${i.dark} dark \xB7 ${yt(i.districts,"district")}`,plain:"Picture your notes as a city. A tall tower is a note everything else leans on. Lit windows mean someone has been in it lately; a dark tower has been left alone for a long time.",about:"Each topic is a district and each note a tower. Height is how many notes link to it and how much runs through it; lit windows are how recently it was edited; dark is stale. A pink beacon on a roof is an open task, the tall thin spire is the topic's map, and a stall on the street is a note in no topic.",legend:[{color:"#22d3ee",text:"height = relied on, windows = recent"},{color:"#6b7280",text:"dark = stale"},{color:_f,text:"beacon = open task"},{color:yf,text:"stall = no topic"}]},Ty="#e5e7eb",Mf="#facc15",mh=i=>({id:i.id,name:i.name,hint:i.hint,home:{yaw:.55,pitch:.38,dist:58,min:12,max:140},stage:i.stage,actions:["graph"],build({stage:t,frame:e,data:n,inputs:s,onOpen:r,onAction:o,theme:a,invalidate:l}){let h=by(n,{hall:i.hall}),c=h.towers,d=c.filter(I=>I.kind!=="stall");if(d.length<3){let I=()=>yt(c.length,"note");return e.stat(I()),e.controls({at:"centre",lines:[`${i.name} needs notes in topics, linked to one another.`,`${yt(d.length,i.tower)} so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>o("graph")}]}),{targets:()=>[],click(){},update(){},stat:I,today:()=>null,api:{empty:!0}}}let u=new Map(c.map(I=>[I.n.id,I])),f=I=>I.n.name,p=I=>(t.scene.add(I),I),M=I=>I.kind==="stall"?i.stall:I.kind==="hall"?Ty:a.palette[(I.n.cluster||0)%a.palette.length],x=new Map,g=(I,et)=>{x.has(I)||x.set(I,new Set),x.get(I).add(et)};for(let I of n.links)I.kind!=="wanted"&&u.has(I.source)&&u.has(I.target)&&(g(I.source,I.target),g(I.target,I.source));let y=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,w=new Xt,_=typeof s.hour=="number"?s.hour:new Date().getHours(),S=_<5||_>=21,b=new Mt(a.bg).getHSL({}).l<.5,m=i.sky?i.sky(_):null,v=null;!m&&i.stage.glow&&t.sky({top:"#04060c",haze:"#0e121c"}),m&&(t.sky({top:ui(a.bg,m,b?0:.3),haze:ui(a.bg,m,b?.035:.1),stars:S&&b?160:0}),v=p(new te(new Gn(Math.max(h.bounds.x[1]-h.bounds.x[0],h.cell*3)*4,48).rotateX(-Math.PI/2),new re({color:ui(i.ground,a.bg,b?.94:.45)}))),v.position.set((h.bounds.x[0]+h.bounds.x[1])/2,-.16,h.front),v.userData.backdrop=!0);let U=p(new fe(new Ie(1,.1,1),new re,h.pads.length));h.pads.forEach((I,et)=>{U.setMatrixAt(et,w.makeScale(I.size,1,I.size).setPosition(I.x,-.05,I.z)),U.setColorAt(et,ui(a.palette[h.districts[I.d].cluster%a.palette.length],a.bg,.86))});let E=p(new te(new Ie(h.bounds.x[1]-h.bounds.x[0],.1,5),new re({color:ui(i.stall,a.bg,.9)})));E.position.set((h.bounds.x[0]+h.bounds.x[1])/2,-.06,h.front+.5);let P=[0,1,2].map(I=>{let et=c.filter(k=>k.level===I&&(k.kind==="tower"||k.kind==="spire")),xt=[],mt=[],B=[];et.forEach(k=>{let it=k.w/2,ht=Je(k.n.id)%8/8;for(let[Tt,bt,At,kt]of[[-it,-it,it,-it],[it,-it,it,it],[it,it,-it,it],[-it,it,-it,-it]]){let Qt=xt.length/3,wt=Math.hypot(At-Tt,kt-bt)/4,Yt=k.h/4;xt.push(k.x+Tt,0,k.z+bt,k.x+At,0,k.z+kt,k.x+At,k.h,k.z+kt,k.x+Tt,k.h,k.z+bt),mt.push(ht,0,ht+wt,0,ht+wt,Yt,ht,Yt),B.push(Qt,Qt+1,Qt+2,Qt,Qt+2,Qt+3)}});let Q=new oe().setAttribute("position",new Ot(xt,3)).setAttribute("uv",new Ot(mt,2)).setAttribute("color",new Ot(new Float32Array(xt.length),3));Q.setIndex(B);let gt=p(new te(Q,new re({map:wy([.04,.28,.7][I],i.sheet),vertexColors:!0,side:me})));return gt.frustumCulled=!1,{list:et,geo:Q,mesh:gt}}),F=p(new fe(new Ie(1,1,1),new re,c.length));F.frustumCulled=!1;let L=c.filter(I=>I.n.tasks>0),R=p(new fe(new pe(1,10,8),new re({color:i.beacon}),Math.max(L.length,1)));R.count=L.length,R.frustumCulled=!1;let V=I=>I.kind==="tower"&&I.h>4?Math.min(1.4,I.h*.12):0;L.forEach((I,et)=>R.setMatrixAt(et,w.makeScale(.28,.28,.28).setPosition(I.x,I.h+V(I)+.35,I.z)));let z=c.filter(I=>V(I)>0),X=p(new fe(new Ie(1,1,1),new re,Math.max(z.length,1)));X.count=z.length,X.frustumCulled=!1,z.forEach((I,et)=>{let xt=V(I);X.setMatrixAt(et,w.makeScale(I.w*.66,xt,I.w*.66).setPosition(I.x,I.h+.12+xt/2,I.z)),X.setColorAt(et,i.wall(M(I),I.level).multiplyScalar(.7))});let G=z.filter(I=>Je(I.n.id)%3===0),W=p(new fe(new Ie(1,1,1),new re,Math.max(G.length,1)));W.count=G.length,W.frustumCulled=!1,G.forEach((I,et)=>{let xt=1.2+Je(I.n.id)%5*.35;W.setMatrixAt(et,w.makeScale(.05,xt,.05).setPosition(I.x,I.h+.12+V(I)+xt/2,I.z)),W.setColorAt(et,ui(M(I),"#ffffff",.4))});let tt=h.districts.flatMap(I=>Array.from({length:I.cars},(et,xt)=>{let[mt,B]=eo(`car:${I.cluster}:${xt}`);return{d:I,u:mt,v:(.02+B*.05)*(xt%2?1:-1),...i.lane(mt,B,xt,h.cell)}})),st=p(new fe(new Ie(.7,.12,.14),new re,Math.max(tt.length,1)));st.count=tt.length,st.frustumCulled=!1,tt.forEach((I,et)=>st.setColorAt(et,new Mt(I.c)));let O=p(new Ze(new oe,new Be({color:i.arc,transparent:!0,opacity:.9})));O.frustumCulled=!1;let at=i.cranes?h.fresh.map(I=>u.get(I)):[],K=c.filter(I=>I.kind==="hall"),A=[];for(let I of at)A.push([I.x+I.w/2,I.h+.8,I.z+I.w/2,.09,1.6,.09,Mf],[I.x+I.w/2-.45,I.h+1.55,I.z+I.w/2,1.5,.09,.09,Mf]);for(let I of K)A.push([I.x,I.h+.7,I.z,.07,1.4,.07,"#94a3b8"],[I.x+.32,I.h+1.2,I.z,.6,.36,.05,a.palette[h.districts[I.d].cluster%a.palette.length]]);let D=p(new fe(new Ie(1,1,1),new re,Math.max(A.length,1)));D.count=A.length,D.frustumCulled=!1,A.forEach(([I,et,xt,mt,B,Q,gt],k)=>{D.setMatrixAt(k,w.makeScale(mt,B,Q).setPosition(I,et,xt)),D.setColorAt(k,new Mt(gt))});let j=c.filter(I=>I.kind==="tower").sort((I,et)=>et.h-I.h)[0]||null,$=s.selected&&u.has(s.selected)?s.selected:null,ut=null,ft=null,ct=y,vt=()=>ut||$,J=new Set,_t=I=>(ft==null||I.d===ft||I.d<0)&&(!vt()||J.has(I.n.id)),St=c.filter(I=>I.kind==="tower"&&I.level===0),Ut=I=>St.filter(et=>et.d===I),qt=()=>{let I=vt()&&u.get(vt());return I&&(I.kind==="spire"||I.kind==="hall")?`${f(I)} \xB7 map of ${yt(h.districts[I.d].notes.length,"note")}`:I?`${f(I)} \xB7 ${yt(I.n.inlinks||0,"link")} in \xB7 ${I.level===0?"dark":I.level===2?"busy":"dim"}${I.n.tasks?` \xB7 ${yt(I.n.tasks,"open task")}`:""}`:i.stat({towers:c.filter(et=>et.kind==="tower").length,dark:St.length,districts:h.districts.length,fresh:h.fresh.length,tallest:j?ee(f(j),22):""})};function Jt(){let I=vt();if(J.clear(),I){J.add(I);for(let mt of x.get(I)||[])J.add(mt)}for(let mt of P){let B=mt.geo.getAttribute("color"),Q=0;mt.list.forEach(gt=>{let k=i.wall(M(gt),gt.level).multiplyScalar(_t(gt)?1:.16);for(let it=0;it<16;it++)B.setXYZ(Q++,k.r,k.g,k.b)}),B.needsUpdate=!0}c.forEach((mt,B)=>{let Q=mt.kind==="stall"||mt.kind==="hall",gt=Q?mt.w:mt.w*1.04;F.setMatrixAt(B,w.makeScale(gt,Q?mt.h:.12,gt).setPosition(mt.x,Q?mt.h/2:mt.h+.06,mt.z)),F.setColorAt(B,ui(M(mt),a.bg,_t(mt)?mt.level===0?.55:0:.85))}),F.instanceMatrix.needsUpdate=!0,F.instanceColor.needsUpdate=!0;let et=[];if(I){let mt=u.get(I);for(let B of x.get(I)||[]){let Q=u.get(B),gt=[mt.x,mt.h,mt.z],k=[Q.x,Q.h,Q.z],it=[(mt.x+Q.x)/2,Math.max(mt.h,Q.h)+3+Math.hypot(mt.x-Q.x,mt.z-Q.z)*.25,(mt.z+Q.z)/2],ht=gt;for(let Tt=1;Tt<=12;Tt++){let bt=Tt/12,At=[0,1,2].map(kt=>(1-bt)*(1-bt)*gt[kt]+2*(1-bt)*bt*it[kt]+bt*bt*k[kt]);et.push(...ht,...At),ht=At}}}O.geometry.setAttribute("position",new Ot(et,3)),O.visible=et.length>0;let xt=h.districts.map((mt,B)=>({d:mt,i:B})).filter(mt=>ft==null||ft===mt.i).map(({d:mt})=>({text:ee(mt.name,28)+(i.hall&&!mt.moc?" \xB7 no map":""),at:[mt.x,.4,mt.z+h.cell/2-.6],color:ui(a.palette[mt.cluster%a.palette.length],"#ffffff",.45).getStyle(),dy:6}));if(I){let mt=u.get(I);xt.unshift({text:ee(f(mt),34),at:[mt.x,mt.h,mt.z],strong:!0,dy:-18,run:()=>lt(I),title:`Open ${f(mt)}`})}e.labels(xt),e.stat(qt()),e.chip(ft==null?null:`District: ${ee(h.districts[ft].name,24)}`,()=>{ft=null,Jt(),l()})}function lt(I){$=I,Jt(),l(),r(I)}let Nt=I=>{ft=null,$=I,Jt(),l()},q=I=>{ft=I,$=null,Jt(),l()},Ct=h.districts.map((I,et)=>[Ut(et).length,et]).sort((I,et)=>et[0]-I[0])[0],Vt=c.filter(I=>I.kind==="stall"),Z=[...St].sort((I,et)=>et.h-I.h)[0],jt=[];Ct&&Ct[0]&&jt.push({text:`${h.districts[Ct[1]].name} is the darkest district: ${yt(Ct[0],"stale note")}. Open the tallest and decide whether it is still true.`,label:"Show district",run:()=>q(Ct[1])}),Z&&Z.h>3&&jt.push({text:`${f(Z)} stands tall yet has gone dark: other notes lean on it and it has not been edited in ${Z.n.age} days.`,label:"Open note",run:()=>lt(Z.n.id)}),L.length&&jt.push({text:`${yt(L.length,i.tower)} with a ${i.beaconName} beacon: an open task. The tallest is the one the most notes wait on.`,label:"Open note",run:()=>lt([...L].sort((I,et)=>et.h-I.h)[0].n.id)}),Vt.length&&jt.push({text:`${yt(Vt.length,"note")} stand as stalls on the street, in no topic. Link each to a topic's notes and it gets a ${i.tower}.`,label:"Open note",run:()=>lt(Vt[0].n.id)}),i.cranes&&j&&jt.unshift({text:`${f(j)} is the tallest ${i.tower}: ${yt(j.n.inlinks||0,"note")} link to it.`,label:"Show tallest",run:()=>Nt(j.n.id)}),at.length&&jt.push({text:`${yt(at.length,i.tower)} went up this week, each with a crane. The newest is ${f(at[0])}: link it to the notes it belongs with.`,label:"Open note",run:()=>lt(at[0].n.id)});let Rt=h.districts.filter(I=>!I.moc);i.hall&&Rt.length&&jt.push({text:`${yt(Rt.length,"district")} have no town hall: the topic has no map note. The biggest is ${Rt[0].name}.`,label:"Show district",run:()=>q(h.districts.indexOf(Rt[0]))}),e.explain({plain:i.plain,about:i.about,legend:i.legend,insights:jt}),e.controls({lines:[`Pick a ${i.tower} to see what it links to`]}),Jt();let $t=performance.now(),Et=(I,et)=>[I.d.x+(((I.u+I.v*et)%1+1)%1-.5)*(h.cell-2),I.y,I.d.z+I.z],Me=[],zt=4.8;for(let I of h.pads)for(let et=0;et<=Math.floor(I.size/zt);et++){let xt=-I.size/2+.3+et*zt;Me.push([I.x+xt,.5,I.z-I.size/2+.3],[I.x+xt,.5,I.z+I.size/2-.3])}let pt=be(Me.length,I=>Me[I],{size:3,color:i.id==="city"?"#ffe2a0":"#ff9be0",opacity:.8});p(pt.object);let N=be(tt.length,(I,et)=>Et(tt[I],et),{size:3.5,color:i.id==="city"?"#fff2b0":"#e0f2fe",opacity:.9});p(N.object);let T=I=>{N.tick(I),tt.forEach((et,xt)=>st.setMatrixAt(xt,w.makeTranslation(...Et(et,I)))),st.instanceMatrix.needsUpdate=!0,st.instanceColor&&(st.instanceColor.needsUpdate=!0)};T(0);let nt=0;return{targets:()=>c.filter(I=>ft==null||I.d===ft||I.d<0).map(I=>({at:[I.x,I.h/2,I.z],r:Math.max(I.w*.7,Math.min(I.h*.3,1.5)),key:{kind:"note",id:I.n.id,tip:`${f(I)}${I.level===0?" \xB7 dark":""}${I.n.tasks?` \xB7 ${yt(I.n.tasks,"open task")}`:""}`}})),click(I){I.kind==="note"&&lt(I.id)},hover(I){let et=I&&I.kind==="note"?I.id:null;et!==ut&&(ut=et,Jt())},update(I){"selected"in I&&($=I.selected&&u.has(I.selected)?I.selected:null,Jt())},frame(){if(ct)return;let I=(performance.now()-$t)/1e3;R.visible=Math.sin(I*4)>-.3,T(I),clearTimeout(nt),nt=setTimeout(l,33)},stat:qt,today:()=>Ct&&Ct[0]?{text:`Darkest district: ${h.districts[Ct[1]].name} \xB7 ${yt(Ct[0],"stale note")}`,label:"Go there",run:()=>q(Ct[1])}:null,api:{back:()=>t.camera.position.distanceTo(t.centre),sky:()=>m?{hour:_,glow:m,stars:S&&b}:null,layout:()=>h,selected:()=>$,district:()=>ft==null?null:h.districts[ft].cluster,hold(){ct=!0,R.visible=!0,l()},towers:()=>c.filter(I=>I.kind==="tower").length,stalls:()=>Vt.length,dark:()=>St.length,halls:()=>K.length,cranes:()=>at.length,tallest:()=>j?j.n.id:null},dispose(){ct=!0,clearTimeout(nt);for(let I of[U,E,...v?[v]:[],F,R,st,O,D,X,W,...P.map(et=>et.mesh)])I.material.map&&I.material.map.dispose()}}}}),vf=mh(Ey);var Sf="#ef4444",Ay="#a8a29e",bf="#5e626d",wf=(i,t,e)=>new Mt(i).lerp(new Mt(t),e),Ef=mh({id:"city",name:"City",hint:"Notes as buildings: tall = relied on, lit = recent, grey = stale; town halls are maps",stage:{fog:[55,170],ambient:.6,glow:{strength:.3,radius:.4,threshold:.85}},tower:"building",hall:!0,cranes:!0,sky:i=>i<5||i>=21?"#4f5fc4":i<8?"#f9a8d4":i<17?"#7dd3fc":"#fb923c",ground:"#6b8f71",sheet:{wall:"#d9dbe3",pane:"#3d4352",lit:["#ffd977","#ffe9a8","#ffc94d"]},beacon:Sf,beaconName:"red",stall:Ay,arc:"#ffd977",wall:(i,t)=>t===0?wf(i,bf,.72):wf(i,"#ffffff",.18),lane:(i,t,e,n)=>({y:.1,z:(e%2?1:-1)*(n/2-.3),c:e%2?"#fef08a":"#f87171"}),stat:i=>`${yt(i.towers,"building")} \xB7 ${i.fresh} new this week \xB7 tallest: ${i.tallest}`,plain:"Picture your notes as a town. A tall building is a note everything else leans on. Lit windows mean someone has been in it lately; a grey building has been left alone for a long time.",about:"Each topic is a district and each note a building in the topic's colour. Height is how many notes link to it and how much runs through it; lit windows are how recently it was edited; grey is stale. A crane stands on a note written this week, a red beacon is an open task, the pale hall with a flag is the topic's map, and a stall on the street is a note in no topic.",legend:[{color:"#ffd977",text:"height = relied on, windows = recent"},{color:bf,text:"grey = stale"},{color:"#facc15",text:"crane = new this week"},{color:Sf,text:"beacon = open task"},{color:"#e5e7eb",text:"hall = the topic's map"}]});var je=18,gh=2.5,no=90,di="#22c55e",Cl="#f87171",Tf=i=>gh+(je-gh)*(1-Math.min(1,Math.log1p(Math.max(0,i))/Math.log1p(365))),fi=i=>(i.taskAge!=null?i.taskAge:i.age)||0;function Ry(i){let t=i.nodes.filter(d=>!Pe(d)&&d.tasks>0),e=new Map;for(let d of t)e.has(d.cluster)||e.set(d.cluster,[]),e.get(d.cluster).push(d);let n=new Map(i.clusters.map(d=>[d.id,d.name])),s=[...e.keys()].sort((d,u)=>e.get(u).length-e.get(d).length||d-u),r=Math.max(1,t.length),o=s.map(d=>Math.max(.25,e.get(d).length/r*2*Math.PI*.92+.08)),a=o.reduce((d,u)=>d+u,0)||1,l=-Math.PI/2,h=s.map((d,u)=>{let f=o[u]/a*2*Math.PI,p={cluster:d,name:n.get(d)||"No topic",a0:l,a1:l+f,n:e.get(d).length};return l+=f,p}),c=[];for(let d of h)for(let u of e.get(d.cluster)){let f=Je(u.id),p=d.a0+(d.a1-d.a0)*(.1+.8*(f%100/100)),M=Math.max(gh*.6,Math.min(je,Tf(fi(u))+((f>>>7)%41-20)/20));c.push({n:u,x:Math.cos(p)*M,z:Math.sin(p)*M,r:.28+.16*Math.sqrt(u.tasks),h:.6+.9*u.tasks,holding:fi(u)>no})}return{blips:c,sectors:h,hold:Tf(no),tasks:t.reduce((d,u)=>d+u.tasks,0),notes:t.length}}var Af={id:"radar",name:"Radar",hint:"Open tasks as blips by how long they've waited; red = 90+ days",home:{yaw:0,pitch:1.5,dist:46,min:14,max:110,minPitch:.55,maxPitch:1.5,pan:!0},stage:{fog:!1,ambient:1,glow:{strength:.7,radius:.5,threshold:.4}},actions:["graph","triage"],build({stage:i,frame:t,orbit:e,data:n,inputs:s,onOpen:r,onAction:o,theme:a,invalidate:l}){let h=Ry(n),c=new Map(h.blips.map(J=>[J.n.id,J])),d=J=>(i.scene.add(J),J),u=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,f=J=>(J.rotation.x=-Math.PI/2,J);if(h.notes<1){let J=()=>"No open tasks";return t.stat(J()),t.controls({at:"centre",lines:["Radar shows the notes that have open tasks.","No note has one."],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>o("graph")}]}),{targets:()=>[],click(){},update(){},stat:J,today:()=>null,api:{empty:!0}}}let p=new Xt,M=new Mt,x=(J,_t,St)=>{let Ut=new oe().setAttribute("position",new Ot(J,3));return d(new Ze(Ut,new Be({color:_t,transparent:!0,opacity:St})))};i.sky({top:"#010604",haze:"#03120a"}),d(f(new te(new Gn(je,64),new re({color:"#04140b"}))));let g=(J,_t,St,Ut=.05)=>d(f(new te(new si(J-Ut,J+Ut,96),new re({color:_t,transparent:!0,opacity:St,side:me})))).position.set(0,.02,0);h.sectors.forEach((J,_t)=>{let St=d(f(new te(new Gn(je,24,-J.a1,J.a1-J.a0),new re({color:a.palette[_t%a.palette.length],transparent:!0,opacity:.3,side:me}))));St.position.y=.01});for(let J=1;J<=4;J++)g(je*J/4,di,.25);g(h.hold,Cl,.7,.07),x(h.sectors.flatMap(J=>[0,.03,0,Math.cos(J.a0)*je,.03,Math.sin(J.a0)*je]),di,.3);let y=[];for(let J=0;J<360;J+=5){let _t=J*Math.PI/180,St=J%30===0,Ut=je-(St?.9:.45);y.push(Math.cos(_t)*Ut,.03,Math.sin(_t)*Ut,Math.cos(_t)*je,.03,Math.sin(_t)*je)}x(y,di,.55),x([-je,.03,0,je,.03,0,0,.03,-je,0,.03,je],di,.14);let w=1.3,_=40,S=[0,0,0],b=[0,0,0],m=[],v=new Mt(di);for(let J=0;J<=_;J++){let _t=J/_,St=_t*w,Ut=Math.pow(1-_t,2)*.75;S.push(Math.cos(St)*je,Math.sin(St)*je,0),b.push(v.r*Ut,v.g*Ut,v.b*Ut),J&&m.push(0,J,J+1)}let U=new oe().setAttribute("position",new Ot(S,3)).setAttribute("color",new Ot(b,3));U.setIndex(m);let E=d(f(new te(U,new re({vertexColors:!0,transparent:!0,blending:pn,depthWrite:!1,side:me}))));E.position.y=.05;let P=d(new fe(new xe(1,1,1,14),new re,h.blips.length));P.frustumCulled=!1;let F=s.selected&&c.has(s.selected)?s.selected:null,L=null,R=u,V=()=>L||F,z=J=>ee(J.n.name,30),X=()=>{let J=V()&&c.get(V());return J?`${z(J)} \xB7 ${yt(J.n.tasks,"open task")} \xB7 waiting ${fi(J.n)} days`:`${yt(h.tasks,"open task")} \xB7 ${yt(h.notes,"note")}`},G=(J,_t)=>M.set(J).multiplyScalar(_t),W=0,tt=h.blips.map(J=>Math.atan2(J.z,J.x)),st=J=>{let _t=((W-tt[J])%(2*Math.PI)+2*Math.PI)%(2*Math.PI);return Math.exp(-_t*1.3)};function O(){let J=V();h.blips.forEach((St,Ut)=>{let qt=!J||St.n.id===J,Jt=St.r*(St.n.id===J?1.5:1),lt=St.holding?Cl:di;p.makeScale(Jt,St.h,Jt).setPosition(St.x,St.h/2,St.z),P.setMatrixAt(Ut,p),P.setColorAt(Ut,qt?St.n.id===J?M.set(a.fg):G(lt,.55+.9*(R?.3:st(Ut))):G(lt,.25))}),P.instanceMatrix.needsUpdate=!0,P.instanceColor&&(P.instanceColor.needsUpdate=!0);let _t=h.sectors.map(St=>{let Ut=(St.a0+St.a1)/2;return{text:`${ee(St.name,24).toUpperCase()} \xB7 ${St.n}`,at:[Math.cos(Ut)*(je+1.2),0,Math.sin(Ut)*(je+1.2)],color:di}});for(let St of[...h.blips].sort((Ut,qt)=>qt.n.tasks-Ut.n.tasks).slice(0,8))_t.push({text:`${ee(St.n.name,22)} \xB7 ${St.n.tasks}`,at:[St.x,St.h,St.z],dy:-10,color:St.holding?"#fecaca":"#bbf7d0"});if(J){let St=c.get(J);_t.unshift({text:z(St),at:[St.x,St.h,St.z],strong:!0,dy:-18,run:()=>at(J),title:`Open ${z(St)}`})}t.labels(_t),t.stat(X())}function at(J){F=J,O(),l(),r(J)}let K=h.blips.filter(J=>J.holding),A=[...h.blips].sort((J,_t)=>fi(_t.n)-fi(J.n))[0],D=[];K.length&&D.push({text:`${yt(K.length,"note")} ${K.length===1?"has":"have"} a task waiting more than ${no} days. Each is either still wanted or can be crossed off.`,label:"Triage",run:()=>o("triage")}),A&&fi(A.n)>30&&D.push({text:`${ee(A.n.name,40)} has waited longest: ${fi(A.n)} days.`,label:"Open note",run:()=>at(A.n.id)});let j=h.sectors[0];j&&h.sectors.length>1&&D.push({text:`${j.name} holds the most notes with open tasks (${j.n} of ${h.notes}).`,label:"Open its busiest",run:()=>at(h.blips.filter(J=>J.n.cluster===j.cluster).sort((J,_t)=>_t.n.tasks-J.n.tasks)[0].n.id)}),t.explain({plain:"Picture a radar screen. Every note with an open task is a blip. The longer its oldest task has waited, the closer to the middle it drifts, and inside the red ring it has been waiting more than three months.",about:"Each topic has a slice of the screen and each note with open tasks is a blip in its slice. Distance from the centre is how long the oldest open task has waited (a year or more sits in the middle). The size of a blip, and the height of its column when you tilt, is how many open tasks it holds. Tick tasks off in the note and its blip drifts away or goes.",legend:[{color:di,text:"note with open tasks"},{color:Cl,text:"oldest task 90+ days"},{color:"#6b7280",text:"nearer the middle = waited longer"}],insights:D});let $=()=>t.controls({lines:[K.length?`${yt(K.length,"note")} holding past ${no} days`:"Pick a blip to open its note"],buttons:[{label:e.tilted?"Flat":"Tilt",title:e.tilted?"Look straight down again":"Tilt into 3D: a blip becomes a column as tall as its task count",run:()=>{e.tilt(),$()}},...K.length?[{label:"Triage",title:"Go through the open tasks one by one",run:()=>o("triage")}]:[]]});$(),O();let ut=performance.now(),ft=0,ct=J=>{W=J*.5%(2*Math.PI),E.rotation.z=-W};ct(0);let vt=()=>{V()||(h.blips.forEach((J,_t)=>{P.setColorAt(_t,G(J.holding?Cl:di,.55+.9*st(_t)))}),P.instanceColor&&(P.instanceColor.needsUpdate=!0))};return{targets:()=>h.blips.map(J=>({at:[J.x,J.h/2,J.z],r:Math.max(.7,J.r*1.3),key:{kind:"note",id:J.n.id,tip:`${J.n.name} \xB7 ${yt(J.n.tasks,"open task")} \xB7 waiting ${fi(J.n)} days`}})),click(J){J.kind==="note"&&at(J.id)},hover(J){let _t=J&&J.kind==="note"?J.id:null;_t!==L&&(L=_t,O())},update(J){"selected"in J&&(F=J.selected&&c.has(J.selected)?J.selected:null,O())},frame(){R||(ct((performance.now()-ut)/1e3),vt(),clearTimeout(ft),ft=setTimeout(l,33))},stat:X,today:()=>K.length?{text:`${yt(K.length,"note")} ${K.length===1?"has":"have"} tasks waiting ${no}+ days \xB7 oldest: ${ee(A.n.name,30)} (${fi(A.n)} days)`,label:"Triage",run:()=>o("triage")}:null,api:{layout:()=>h,selected:()=>F,hold(){R=!0,l()},blips:()=>h.blips.length,holding:()=>K.length,tilted:()=>e.tilted},dispose(){R=!0,clearTimeout(ft)}}}};var Pl=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Rf=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],io=3.2,so=1.5,Cf=1.2,Cy=2.2,Iy=12,Py=3,Il="#fde047",Uy=[{key:"wd",n:7,name:"WEEK",labels:Pl},{key:"mo",n:12,name:"YEAR",labels:Rf}],pi=(i,t)=>i/t*2*Math.PI-Math.PI/2;function Ny(i,t=new Date,e=!1){let n=new Map(i.clusters.map(u=>[u.id,u.name])),s=Object.entries(i.rhythm||{}).map(([u,f])=>({cluster:+u,name:n.get(+u)||"No topic",wd:f.wd,mo:f.mo,tot:f.wd.reduce((p,M)=>p+M,0)})).filter(u=>u.tot>=Py&&n.has(u.cluster)).sort((u,f)=>u.tot-f.tot||u.cluster-f.cluster).slice(-Iy),r=io+s.length*so,o=r+3,a=Uy.map((u,f)=>{let p=new Array(u.n).fill(0);s.forEach(x=>x[u.key].forEach((g,y)=>{p[y]+=g}));let M=(f?1:-1)*o;return{...u,centre:e?[0,M]:[M,0],totals:p,peak:p.indexOf(Math.max(...p))}}),l=[];a.forEach((u,f)=>s.forEach((p,M)=>{let x=Math.max(1,...p[u.key]);for(let g=0;g<u.n;g++){let y=p[u.key][g],w=y/x;l.push({dial:f,ring:M,s:g,v:y,t:w,cluster:p.cluster,a0:pi(g,u.n),a1:pi(g+1,u.n),r0:io+M*so,r1:io+M*so+Cf,h:y?.15+Cy*w:.04})}}));let h=(t.getDay()+6)%7,c=new Date(t.getFullYear(),t.getMonth()+1,0).getDate(),d=t.getMonth();return{rings:s,dials:a,cells:l,rOut:r,now:{wd:h,mo:d,frac:{wd:(h+(t.getHours()+t.getMinutes()/60)/24)/7,mo:(d+(t.getDate()-1+t.getHours()/24)/c)/12}}}}var xh=(i,t)=>i[t].indexOf(Math.max(...i[t])),If={id:"clock",name:"Heat clock",hint:"When each topic comes up: weekday and month dials, hotter = more mentions",home:{yaw:0,pitch:1.5,dist:60,min:20,max:140,minPitch:.55,maxPitch:1.5,pan:!0},stage:{fog:!1,ambient:1},actions:["graph"],build({stage:i,frame:t,orbit:e,data:n,inputs:s,onOpen:r,onAction:o,theme:a,invalidate:l}){let h=(i.camera.aspect||1)<1,c=Ny(n,s.now||new Date,h),d=A=>(i.scene.add(A),A);if(c.rings.length<1){let A=()=>"No weekday or month pattern yet";return t.stat(A()),t.controls({at:"centre",lines:["The Heat clock shows when each topic comes up in your daily notes.","There is no pattern to show yet."],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>o("graph")}]}),{targets:()=>[],click(){},update(){},stat:A,today:()=>null,api:{empty:!0}}}let u=A=>a.palette[Math.max(0,n.clusters.findIndex(D=>D.id===A))%a.palette.length],f=new Mt("#1f2933"),p=new Mt("#1a2027"),M=new Mt,x=new Mt,g=(A,D,j)=>[A.centre[0]+Math.cos(D)*j,A.centre[1]+Math.sin(D)*j],y=[],w=[],_=A=>A.n===7?3:2,S=(...A)=>{for(let D of A)y.push(D[0],D[1],D[2])};for(let A of c.cells){let D=c.dials[A.dial],j=y.length/3,$=_(D),ut=(A.a1-A.a0)/$,ft=.012,ct=(_t,St,Ut)=>{let[qt,Jt]=g(D,_t,St);return[qt,Ut,Jt]};for(let _t=0;_t<$;_t++){let St=A.a0+_t*ut+(_t===0?ft:0),Ut=A.a0+(_t+1)*ut-(_t===$-1?ft:0);S(ct(St,A.r0,A.h),ct(Ut,A.r0,A.h),ct(Ut,A.r1,A.h),ct(St,A.r0,A.h),ct(Ut,A.r1,A.h),ct(St,A.r1,A.h)),S(ct(St,A.r1,0),ct(Ut,A.r1,0),ct(Ut,A.r1,A.h),ct(St,A.r1,0),ct(Ut,A.r1,A.h),ct(St,A.r1,A.h)),S(ct(St,A.r0,0),ct(Ut,A.r0,A.h),ct(Ut,A.r0,0),ct(St,A.r0,0),ct(St,A.r0,A.h),ct(Ut,A.r0,A.h))}let vt=A.a0+ft,J=A.a1-ft;S(ct(vt,A.r0,0),ct(vt,A.r1,0),ct(vt,A.r1,A.h),ct(vt,A.r0,0),ct(vt,A.r1,A.h),ct(vt,A.r0,A.h)),S(ct(J,A.r0,0),ct(J,A.r1,A.h),ct(J,A.r1,0),ct(J,A.r0,0),ct(J,A.r0,A.h),ct(J,A.r1,A.h)),w.push([j,y.length/3-j,$*6])}let b=new oe().setAttribute("position",new Ot(y,3)),m=new Ot(new Float32Array(y.length),3);b.setAttribute("color",m),d(new te(b,new re({vertexColors:!0,side:me}))).frustumCulled=!1;let v=[],U=[];c.dials.forEach(A=>{let D=c.now.frac[A.key],j=pi(D*A.n,A.n),$=c.now[A.key],ut=io-.6,ft=c.rOut+.4,[ct,vt]=g(A,j,ut),[J,_t]=g(A,j,ft);v.push(ct,.3,vt,J,.3,_t);for(let St of[pi($,A.n),pi($+1,A.n)]){let[Ut,qt]=g(A,St,ut),[Jt,lt]=g(A,St,ft);U.push(Ut,.3,qt,Jt,.3,lt)}});let E=(A,D)=>{let j=new oe().setAttribute("position",new Ot(A,3));return d(new Ze(j,new Be({color:Il,transparent:!0,opacity:D})))};E(v,1),E(U,.55),c.dials.forEach(A=>{let D=pi(c.now.frac[A.key]*A.n,A.n),[j,$]=g(A,D,c.rOut+.4);d(new te(new pe(.4,12,8),new re({color:Il}))).position.set(j,.3,$)});let P=new Map(c.rings.map(A=>[A.cluster,A])),F=A=>n.nodes.filter(D=>D.cluster===A&&!Pe(D)).sort((D,j)=>j.inlinks+j.outlinks-(D.inlinks+D.outlinks)||(D.id<j.id?-1:1)),L=null,R=null,V=A=>c.dials[A.dial].labels[A.s],z=A=>Math.round(100*A.v/Math.max(1,P.get(A.cluster).tot)),X=new Map(c.cells.map((A,D)=>[`${A.dial}:${A.ring}:${A.s}`,D])),G=()=>{let A=R!=null&&c.cells[R];if(A)return`${ee(P.get(A.cluster).name,28)} \xB7 ${V(A)} \xB7 ${yt(A.v,"mention")}`;if(L!=null){let D=P.get(L);return`${ee(D.name,28)} \xB7 busiest ${Pl[xh(D,"wd")]} \xB7 ${Rf[xh(D,"mo")]} \xB7 ${yt(D.tot,"mention")}`}return`${yt(c.rings.length,"topic")} \xB7 busiest ${c.dials[0].labels[c.dials[0].peak]} \xB7 ${c.dials[1].labels[c.dials[1].peak]}`};function W(){let A=m.array;c.cells.forEach((j,$)=>{let ut=L==null||j.cluster===L,[ft,ct,vt]=w[$],J=$===R;j.v?x.copy(f).lerp(M.set(u(j.cluster)),.15+.85*j.t):x.copy(p),ut||x.multiplyScalar(.3),J&&x.lerp(M.set(a.fg),.35);for(let _t=0;_t<ct;_t++){let St=_t<vt?1:.62;A[(ft+_t)*3]=x.r*St,A[(ft+_t)*3+1]=x.g*St,A[(ft+_t)*3+2]=x.b*St}}),m.needsUpdate=!0;let D=[];if(c.dials.forEach(j=>{j.labels.forEach(($,ut)=>{let ft=(pi(ut,j.n)+pi(ut+1,j.n))/2,[ct,vt]=g(j,ft,c.rOut+1.6);D.push({text:$,at:[ct,0,vt],color:ut===c.now[j.key]?Il:"#e2e8f0"})}),D.push({text:j.name,at:[j.centre[0],0,j.centre[1]],dy:-8,color:"#94a3b8"},{text:`busiest: ${j.labels[j.peak]}`,at:[j.centre[0],0,j.centre[1]],dy:8,color:"#f8fafc"})}),L!=null){let j=F(L)[0],$=P.get(L),ut=c.dials[0],ft=c.rings.indexOf($),[ct,vt]=g(ut,pi(0,7),io+ft*so+Cf/2);D.push({text:ee($.name,26),at:[ct,.5,vt],strong:!0,dy:-10,...j?{run:()=>r(j.id),title:`Open ${j.name}`}:{}})}t.labels(D),t.stat(G())}function tt(A){L=L===A?null:A,W(),at(),l()}let st=c.rings.filter(A=>A.tot>=10).map(A=>({r:A,k:Math.max(...A.wd)/A.tot})).sort((A,D)=>D.k-A.k)[0],O=[];O.push({text:`Mentions peak on ${c.dials[0].labels[c.dials[0].peak]} and in ${c.dials[1].labels[c.dials[1].peak]}.`,label:"Busiest topic",run:()=>tt(c.rings[c.rings.length-1].cluster)}),st&&st.k>.3&&O.push({text:`${st.r.name} clusters on ${Pl[xh(st.r,"wd")]}: ${Math.round(st.k*100)}% of its mentions.`,label:"Show its ring",run:()=>tt(st.r.cluster)}),t.explain({plain:"Picture two clock faces. One is a week, one is a year, and each topic is a ring on both. A cell glows when that topic comes up in your daily notes on that weekday or in that month.",about:"Each ring is a topic, the busiest outside. A cell's heat, and its height when you tilt, is that topic's share of its own mentions that fall on that weekday or month, so a bright cell is where the topic peaks. It counts mentions in daily notes, not hours worked. The yellow hand is right now.",legend:[{color:a.fg,text:"bright, tall cell: the topic's busiest weekday or month"},{color:"#1f2933",text:"dark cell: rarely"},{color:Il,text:"now"}],insights:O});function at(){let A=L!=null?F(L)[0]:null;t.controls({lines:[L!=null?`${P.get(L).name}`:"Pick a ring to see its topic"],buttons:[...A?[{label:`Open ${ee(A.name,18)}`,title:`Open ${A.name}, the topic's most linked note`,run:()=>r(A.id)}]:[],...L!=null?[{label:"Clear",title:"Show every topic again",run:()=>tt(L)}]:[],{label:e.tilted?"Flat":"Tilt",title:e.tilted?"Look straight down again":"Tilt into 3D: a cell is as tall as its heat",run:()=>{e.tilt(),at()}}]})}at(),W();let K=c.rings[c.rings.length-1];return{targets:()=>c.cells.map((A,D)=>{let j=c.dials[A.dial],$=(A.a0+A.a1)/2,[ut,ft]=g(j,$,(A.r0+A.r1)/2),ct=(A.a1-A.a0)*(A.r0+A.r1)/2;return{at:[ut,A.h/2,ft],r:Math.max(.55,Math.min(so*.6,ct*.4)),key:{kind:"ring",id:A.cluster,cell:D,tip:`${P.get(A.cluster).name} \xB7 ${V(A)} \xB7 ${yt(A.v,"mention")} (${z(A)}%)`}}}),click(A){A.kind==="ring"&&tt(A.id)},hover(A){let D=A&&A.kind==="ring"?A.cell:null;D!==R&&(R=D,W())},update(){},stat:G,today(){let A=c.now.wd,D=c.rings.map($=>({r:$,k:$.wd[A]/$.tot})).sort(($,ut)=>ut.k-$.k)[0],j=D&&F(D.r.cluster)[0];return D&&D.k>0?{text:`It is ${Pl[A]}: ${ee(D.r.name,30)} usually comes up most on this day (${Math.round(D.k*100)}% of its mentions)`,label:j?"Open note":"Show ring",run:()=>j?r(j.id):tt(D.r.cluster)}:null},api:{layout:()=>c,focus:()=>L,hovered:()=>R,tilted:()=>e.tilted,rings:()=>c.rings.length,cells:()=>c.cells.length,vertical:()=>h,cell:(A,D,j)=>X.get(`${A}:${D}:${j}`),top:()=>K&&K.cluster},dispose(){}}}};var _h=4,Fy=1.15,Df=4,Pf="#f87171",Uf="#fde047",Nf="#22d3ee",Dy=2.399963;function Ly(i,t){let e=new Map(t.ids.map((f,p)=>[f,p])),n=Xe(i.nodes),s=Ni(i),r=new Map,o=new Map,a=(f,p,M)=>{f.has(p)||f.set(p,[]),f.get(p).push(M)};for(let[f,p]of t.edges)a(r,t.ids[f],t.ids[p]),a(o,t.ids[p],t.ids[f]);let l=i.nodes.filter(f=>e.has(f.id)&&!Pe(f)&&!f.isolated),h=Math.max(2,Math.ceil(Math.max(1,...l.map(f=>t.level[e.get(f.id)])))),c=Array.from({length:h},()=>[]);for(let f of l)c[Math.max(0,Math.min(h-1,Math.round(t.level[e.get(f.id)])-1))].push(f);let d=[];c.forEach((f,p)=>{f.sort((M,x)=>M.cluster-x.cluster||n(x)-n(M)),f.forEach((M,x)=>{let g=t.level[e.get(M.id)],y=Fy*Math.sqrt(x+.5)*1.5,w=x*Dy,_=(o.get(M.id)||[]).length;d.push({n:M,x:y*Math.cos(w),z:y*Math.sin(w),y:(g-1)*_h,r:.3+.9*Math.sqrt(Math.max(0,n(M))),level:g,band:p,reliedOn:_,leansOn:(r.get(M.id)||[]).length,endangered:_>=Df&&s(M)})})});let u=Math.max(4,...d.map(f=>Math.hypot(f.x,f.z)))+2;return{notes:d,bands:c.map(f=>f.length),radius:u,up:f=>o.get(f)||[],down:f=>r.get(f)||[]}}var Ff=(i,t,e)=>new Mt(i).lerp(new Mt(t),e),Lf={id:"foodweb",name:"Food web",hint:"Which notes feed which: the notes everything rests on at the base, logs and plans on top, stale ones others rest on in red",home:{yaw:.6,pitch:.3,dist:46,min:10,max:130},stage:{fog:[60,190],ambient:.5},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=Ly(e,n.web),h=l.notes,c=n.web.stats,d=G=>(i.scene.add(G),G);if(h.length<3){let G=()=>yt(h.length,"note");return t.stat(G()),t.controls({at:"centre",lines:["The Food web needs notes that link to one another.",`${yt(h.length,"note")} so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:G,today:()=>null,api:{empty:!0}}}let u=new Map(h.map(G=>[G.n.id,G])),f=G=>G.n.name,p=new Xt,M=G=>G.endangered?Pf:o.palette[(G.n.cluster||0)%o.palette.length],x=l.bands.map((G,W)=>{if(!G)return null;let tt=d(new te(new Gn(l.radius,48),new re({color:Ff(o.palette[W%o.palette.length],o.bg,.9),transparent:!0,opacity:.55,side:me})));return tt.rotation.x=-Math.PI/2,tt.position.y=W*_h-.4,tt.frustumCulled=!1,tt}),g=d(new fe(new pe(1,14,10),new re,h.length));g.frustumCulled=!1;let y=G=>d(new Ze(new oe,new Be({color:G,transparent:!0,opacity:.9}))),w=y(Uf),_=y(Nf);w.frustumCulled=_.frustumCulled=!1;let S=n.selected&&u.has(n.selected)?n.selected:null,b=null,m=()=>b||S,v=new Set,U=h.filter(G=>G.endangered),E=G=>G.endangered?" \xB7 stale, others rest on it":"",P=()=>{let G=m()&&u.get(m());return G?`${f(G)} \xB7 rests on ${yt(G.leansOn,"note")} \xB7 ${yt(G.reliedOn,"note")} rest on it${E(G)}`:`mean level ${c.mean.toFixed(1)} \xB7 top ${c.maxLevel.toFixed(1)} \xB7 incoherence ${c.incoherence.toFixed(2)} \xB7 ${yt(U.length,"endangered note")}`},F=(G,W,tt)=>tt.push(G.x,G.y,G.z,W.x,W.y,W.z);function L(){let G=m();v.clear(),G&&(v.add(G),l.up(G).forEach(O=>v.add(O)),l.down(G).forEach(O=>v.add(O))),h.forEach((O,at)=>{g.setMatrixAt(at,p.makeScale(O.r,O.r,O.r).setPosition(O.x,O.y,O.z)),g.setColorAt(at,Ff(M(O),o.bg,!G||v.has(O.n.id)?0:.8))}),g.instanceMatrix.needsUpdate=!0,g.instanceColor.needsUpdate=!0;let W=[],tt=[];if(G){let O=u.get(G);l.up(G).forEach(at=>u.has(at)&&F(u.get(at),O,W)),l.down(G).forEach(at=>u.has(at)&&F(O,u.get(at),tt))}w.geometry.setAttribute("position",new Ot(W,3)),w.visible=W.length>0,_.geometry.setAttribute("position",new Ot(tt,3)),_.visible=tt.length>0;let st=l.bands.map((O,at)=>O?{text:`${at===0?"Level 1 \xB7 the base":"Level "+(at+1)} (${O})`,at:[-l.radius,at*_h,0],color:"#bbf7d0"}:null).filter(Boolean);if(G){let O=u.get(G);st.unshift({text:ee(f(O),34),at:[O.x,O.y+O.r,O.z],strong:!0,dy:-18,run:()=>R(G),title:`Open ${f(O)}`})}t.labels(st),t.stat(P())}function R(G){S=G,L(),a(),s(G)}let V=[...U].sort((G,W)=>W.reliedOn-G.reliedOn)[0],z=[...h].filter(G=>G.band===0).sort((G,W)=>W.reliedOn-G.reliedOn)[0],X=[];return V&&X.push({text:`${f(V)} holds up ${yt(V.reliedOn,"note")} and has not been edited in ${V.n.age} days. Open it and decide whether it is still true.`,label:"Open note",run:()=>R(V.n.id)}),z&&z.reliedOn&&X.push({text:`${f(z)} is the most relied-on note at the base: ${yt(z.reliedOn,"note")} rest on it.`,label:"Open note",run:()=>R(z.n.id)}),t.explain({plain:"Picture a food chain. The notes everything rests on are the plants at the bottom; logs and plans that mostly point at other notes are the animals at the top. If a note at the bottom goes out of date, everything standing on it is built on something stale.",about:`A note rests on the notes it links to, so each note gets a level: the more links lead up from the base to it, the higher it sits. Level is worked out so that every link climbs by about one; incoherence ${c.incoherence.toFixed(2)} is how far the links are from a clean hierarchy (0 is a clean one, 1 shows no direction at all). A red sphere is a note ${Df} or more notes link to that has not been edited within the vault's stale limit. Pick a note: yellow lines go to the notes resting on it, blue to the notes it rests on.`,legend:[{color:"#bbf7d0",text:"height = level, the base at the bottom"},{color:Pf,text:"stale, and others rest on it"},{color:Uf,text:"rests on the picked note"},{color:Nf,text:"the picked note rests on"}],insights:X}),t.controls({lines:["Pick a note to see what rests on it"]}),L(),{targets:()=>h.map(G=>({at:[G.x,G.y,G.z],r:Math.max(G.r*1.2,.9),key:{kind:"note",id:G.n.id,tip:`${f(G)} \xB7 level ${G.level.toFixed(1)}${E(G)}`}})),click(G){G.kind==="note"&&R(G.id)},hover(G){let W=G&&G.kind==="note"?G.id:null;W!==b&&(b=W,L())},update(G){"selected"in G&&(S=G.selected&&u.has(G.selected)?G.selected:null,L())},stat:P,today:()=>V?{text:`${f(V)} is stale and ${yt(V.reliedOn,"note")} rest on it`,label:"Open note",run:()=>R(V.n.id)}:null,api:{layout:()=>l,selected:()=>S,hold(){},notes:()=>h.length},dispose(){for(let G of[...x.filter(Boolean),g,w,_])G.geometry.dispose(),G.material.dispose()}}}};function Hs(i,t,e,n){return i.stat(e),i.controls({at:"centre",lines:n,buttons:[{label:"Open the graph",title:"Open the graph",run:()=>t("graph")}]}),{targets:()=>[],click(){},update(){},stat:()=>e,today:()=>null,api:{empty:!0}}}var Mh=[8,18,32],Yn=[6,9,12],Of=40,Bf="#ef4444",Ul="#60a5fa",Nl=[[1.15,0,.3,"ZXY"],[1.15,0,.3+Math.PI/3,"ZXY"],[1.15,0,.3+2*Math.PI/3,"ZXY"]],By=2.399963,ro=.95;function yh(i,t){let{own:e,adj:n}=to(i.nodes,i.links),s=Xe(i.nodes),r=(m,v)=>s(e.get(v))-s(e.get(m))||(m<v?-1:1),o=[...e.keys()].filter(m=>n.get(m).size).sort(r);if(!o.length)return{centre:null,linked:0};let a=t&&e.has(t)&&n.get(t).size?t:o[0],l=new Map([[a,0]]),h=[a];for(let m=0;m<h.length;m++)for(let v of n.get(h[m]))l.has(v)||(l.set(v,l.get(h[m])+1),h.push(v));let c=Mh.map((m,v)=>{let U=h.filter(E=>l.get(E)===v+1).sort(r);return{all:U.length,ids:U.slice(0,m)}}),d=new Set,u=new Set;for(let m of i.links)m.kind==="link"&&m.source!==m.target&&e.has(m.source)&&e.has(m.target)&&(m.target===a&&d.add(m.source),m.source===a&&u.add(m.target));let f=d.size,p=u.size,M=f+p,x=Math.min(M,Of),g=M?Math.max(f?1:0,Math.min(x-(p?1:0),Math.round(x*f/M))):0,y=[];for(let m=0,v=0;m<x;m++){let U=x>1?ro*.92*Math.cbrt(m+.35):0,E=1-2*((m*.618034+.5)%1),P=Math.sqrt(1-E*E),F=m*By,L=Math.floor((m+1)*g/x)>v;L&&v++,y.push({at:[U*P*Math.cos(F),U*E,U*P*Math.sin(F)],proton:L})}let w=new H,_=[];c.forEach((m,v)=>{let U=new fn(...Nl[v]);m.ids.forEach((E,P)=>{let F=P/m.ids.length*Math.PI*2+v*.7;w.set(Yn[v]*Math.cos(F),Yn[v]*Math.sin(F),0).applyEuler(U),_.push({id:E,shell:v,at:[w.x,w.y,w.z],r:.5+.5*Math.sqrt(Math.max(0,s(e.get(E))))})})});let S=c.map((m,v)=>{let U=.5/Math.max(1,m.ids.length)*Math.PI*2+v*.7+Math.PI;return w.set(Yn[v]*Math.cos(U),Yn[v]*Math.sin(U),0).applyEuler(new fn(...Nl[v])),[w.x,w.y,w.z]}),b=h[h.length-1];return{centre:a,own:e,protons:f,neutrons:p,shells:c,electrons:_,gaps:S,nucleus:y,nucleusR:ro*(1+.92*Math.cbrt(Math.max(x,1))),dist:m=>l.has(m)?l.get(m):null,within:h.filter(m=>l.get(m)>=1&&l.get(m)<=Mh.length).length,linked:o.length,unreached:o.filter(m=>!l.has(m)),far:{id:b,d:l.get(b)}}}var kf=["one link away","two links away","three links away"],Vf={id:"atom",name:"Atom",hint:"One note as an atom: its links are the nucleus, the notes one, two and three links away its shells",drift:.08,home:{yaw:.25,pitch:.2,dist:33,min:10,max:160,minPitch:-1.4},stage:{light:"camera",fog:[70,240],ambient:.55,glow:{strength:.9,radius:.7,threshold:.5}},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=yh(e,n.selected),h=null,c=null,d=null,u=null,f=[];if(!l.centre)return Hs(t,r,yt(e.nodes.length,"note"),["The Atom needs notes that link to one another.","No written links yet."]);let p=b=>l.own.get(b).name,M=b=>o.palette[(l.own.get(b).cluster||0)%o.palette.length],x=[],g=()=>new $e({color:"#ffffff",specular:"#777777",shininess:55}),y=()=>`${p(l.centre)} \xB7 ${yt(l.protons,"link")} in \xB7 ${l.neutrons} out \xB7 ${l.shells.map(b=>b.all).join(", ")} notes one, two and three links away`;function w(){h&&hi(i.scene,h),h=new hn;let b=()=>new pe(1,24,16);h.add(wn(b(),g(),l.nucleus,(R,V,z)=>(z.makeScale(ro,ro,ro).setPosition(...R.at),R.proton?Bf:Ul))),f=[[1.35,.16],[1.9,.07]].map(([R,V])=>{let z=new te(new pe(l.nucleusR*R,32,16),new re({color:Ul,transparent:!0,opacity:V,blending:pn,depthWrite:!1,side:Ue}));return h.add(z),z});let m=Nl.map(R=>new fn(...R)),v=new H;c=be(9,(R,V)=>{let z=Math.floor(R/3),X=V*(.9-.25*z)+R%3*Math.PI*2/3;return v.set(Yn[z]*Math.cos(X),Yn[z]*Math.sin(X),0).applyEuler(m[z]).toArray()},{size:5,color:"#bfdcff"}),h.add(c.object),d=be(63,(R,V)=>{let z=R%9,X=Math.floor(R/9)+1,G=Math.floor(z/3),W=V*(.9-.25*G)+z%3*Math.PI*2/3-X*.09;return v.set(Yn[G]*Math.cos(W),Yn[G]*Math.sin(W),0).applyEuler(m[G]).toArray()},{size:2.6,color:"#6aa8ff",opacity:.55}),h.add(d.object);let U=720,E=R=>[Yn[R%3],(R*2654435761>>>0)%10007/10007,(R*40503>>>0)%7919/7919,(R*69069>>>0)%6007/6007];u=be(U,(R,V)=>{let[z,X,G,W]=E(R),tt=X*Math.PI*2+.05*V*(1+R%3),st=Math.acos(2*G-1),O=z*(1+.16*(W-.5)+.02*Math.sin(V*2+R));return[O*Math.sin(st)*Math.cos(tt),O*Math.cos(st),O*Math.sin(st)*Math.sin(tt)]},{size:1.6,color:"#7fb6ff",opacity:.5}),h.add(u.object),l.shells.forEach((R,V)=>{let z=new te(new vn(Yn[V],.16-.04*V,8,160),new re({color:Ee(Ul,o.fg,.35+.15*V),transparent:!0,opacity:R.ids.length?.85-.2*V:.25}));z.rotation.set(...Nl[V]),h.add(z)}),h.add(wn(b(),g(),l.electrons,(R,V,z)=>(z.makeScale(R.r,R.r,R.r).setPosition(...R.at),M(R.id)))),i.scene.add(h);let P=[{text:ee(p(l.centre),34),at:[0,l.nucleusR,0],strong:!0,dy:-18,run:()=>s(l.centre),title:`Open ${p(l.centre)}`}];l.shells.forEach((R,V)=>{R.ids.length&&P.push({text:`${kf[V]} (${R.ids.length<R.all?`${R.ids.length} of ${R.all}`:R.all})`,at:l.gaps[V],color:o.muted,dy:14})});for(let R of l.electrons.filter(V=>V.shell===0).slice(0,4))P.push({text:ee(p(R.id),22),at:R.at,dy:-16,run:()=>E(R.id),title:`Open ${p(R.id)}`});t.labels(P),t.stat(y());let F=l.unreached[0],L=[];L.push({text:`${l.within} of ${yt(l.linked-1,"other linked note")} are within three links of ${p(l.centre)}.${l.far.d>3?` The farthest, ${p(l.far.id)}, is ${l.far.d} links away.`:""}`,...l.far.d>3?{label:"Open farthest",run:()=>E(l.far.id)}:{}}),l.shells[0].all===1&&L.push({text:`One link holds ${p(l.centre)} to the rest of the vault. A second link from a related note keeps it reachable if that one goes.`,label:"Open its neighbour",run:()=>E(l.shells[0].ids[0])}),F&&L.push({text:`${yt(l.unreached.length,"linked note")} can't be reached from here by any chain of links. ${p(F)} is the most relied-on of them.`,label:"Open note",run:()=>E(F)}),t.explain({plain:"Picture one note as an atom. Its own links are packed in the middle. The notes one link away circle closest, the notes two links away further out, and so on. A full, close shell means the note is well tied in.",about:`The nucleus is ${p(l.centre)}: a red ball for each note that links to it and a blue ball for each note it links to (at most ${Of} are drawn, in the same share). Each shell holds the notes that many written links away, the most relied-on first; a shell shows at most ${Mh.join(", ")} of them, as an atom's shells do, and its label says how many there are in all. An electron takes its topic's colour and is bigger the more the vault leans on it.`,legend:[{color:Bf,text:"a note that links to it"},{color:Ul,text:"a note it links to"},{color:o.palette[0],text:"electron = a note, shell = links away, colour = topic"}],insights:L}),t.controls({lines:["Pick an electron to make it the nucleus"],buttons:[{label:"\u2039 Back",title:"Back to the note before",off:!x.length,run:()=>{l=yh(e,x.pop()),w(),a()}},{label:p(l.centre),title:`Open ${p(l.centre)}`,wide:!0,run:()=>s(l.centre)}]})}function _(b){if(b===l.centre||!l.own.has(b))return;let m=yh(e,b);m.centre===b&&(x.push(l.centre),l=m,w())}function S(b){_(b),a(),s(b)}return i.sky({top:"#02050f",haze:"#0b1432",stars:500,starColor:"#cfe0ff"}),w(),{targets:()=>[{at:[0,0,0],r:l.nucleusR,key:{kind:"note",id:l.centre,tip:`${p(l.centre)} \xB7 ${yt(l.protons,"link")} in, ${l.neutrons} out`}},...l.electrons.map(b=>({at:b.at,r:Math.max(b.r*1.3,.9),key:{kind:"note",id:b.id,tip:`${p(b.id)} \xB7 ${kf[b.shell]}`}}))],click(b){b.kind==="note"&&S(b.id)},update(b){"selected"in b&&b.selected&&_(b.selected)},stat:y,today:()=>null,api:{layout:()=>l,centre:()=>l.centre,back:()=>x.length},tick(b){c&&c.tick(b),d&&d.tick(b),u&&u.tick(b),f.forEach((m,v)=>m.scale.setScalar(1+.05*Math.sin(b*1.6+v)))},dispose(){h&&hi(i.scene,h)}}}};var ln=9,mn=1.8,vh=48,Hf=40,zf="#fbbf24";function Gf(i,t){let e=Al(i,{linkedOnly:!1});if(!e.length)return{topics:[],core:null};let n=Math.max(0,e.findIndex(w=>w.cluster===t)),s=e[n],{adj:r}=to(i.nodes,i.links,{hubs:!0}),o=Xe(i.nodes),a=ks(i.nodes),l=Ni(i),h=s.moc||s.notes[0],c=s.notes.filter(w=>w!==h),d=new Set(c.map(w=>w.id)),u=r.get(h.id)||new Set,f=w=>({id:w.id,state:l(w)?"stale":a(w)>.35?"active":"steady",size:.7+.6*Math.sqrt(Math.max(0,o(w)))}),p={docked:[],second:[],adrift:[]};for(let w of c)(u.has(w.id)?p.docked:[...r.get(w.id)||[]].some(_=>d.has(_))?p.second:p.adrift).push(w);let M=p.docked.slice(0,vh).map((w,_,S)=>{let b=_/S.length*Math.PI*2+Math.PI/2;return{...f(w),a:b,at:[ln*Math.cos(b),ln*Math.sin(b),mn]}}),x=new Map(M.map(w=>[w.id,w.a])),g=p.second.slice(0,vh).map(w=>({...f(w),anchor:[...r.get(w.id)].filter(_=>x.has(_)).sort((_,S)=>x.get(_)-x.get(S))[0]||null})).sort((w,_)=>(w.anchor?x.get(w.anchor):99)-(_.anchor?x.get(_.anchor):99)||(w.id<_.id?-1:1)).map((w,_,S)=>{let b=_/S.length*Math.PI*2+Math.PI/2;return{...w,a:b,at:[ln*Math.cos(b),ln*Math.sin(b),-mn]}}),y=p.adrift.slice(0,Hf).map(w=>{let[_,S]=eo(w.id),b=_*Math.PI*2,m=ln+4.5+4*S;return{...f(w),at:[m*Math.cos(b),m*Math.sin(b),(Je(w.id)%100/100-.5)*8]}});return{topics:e.map(w=>({cluster:w.cluster,name:w.name})),index:n,cluster:s.cluster,name:s.name,core:{id:h.id,name:h.name,map:!!h.moc},docked:M,second:g,adrift:y,counts:{docked:p.docked.length,second:p.second.length,adrift:p.adrift.length}}}var Wf={id:"station",name:"Station",hint:"One topic as a ring station: notes its map links are docked, the rest ride the second ring or drift outside",drift:.06,home:{yaw:.65,pitch:.28,dist:50,min:12,max:170,minPitch:-1.4},stage:{light:"camera",fog:[80,260],ambient:.5,glow:{strength:.8,radius:.6,threshold:.78}},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=new Map(e.nodes.map(S=>[S.id,S])),h=S=>l.has(S)?l.get(S).cluster:void 0,c=Gf(e,h(n.selected)),d=null,u=null,f=null;if(!c.core)return Hs(t,r,yt(e.nodes.length,"note"),["The Station needs notes in a topic.","No notes yet."]);let p=S=>l.get(S).name,M=(S,b)=>S.length<b?`${S.length} of ${b}`:`${b}`,x=()=>`${c.name} \xB7 ${c.counts.docked} docked \xB7 ${c.counts.second} on the second ring \xB7 ${c.counts.adrift} adrift`;function g(){d&&hi(i.scene,d),d=new hn;let S=o.palette[(c.cluster||0)%o.palette.length],b=Ee(o.muted,o.bg,.25),m=Ee(o.muted,o.fg,.3),v=lt=>lt.state==="stale"?b:lt.state==="active"?zf:S,U=lt=>new $e({color:lt,specular:"#888888",shininess:40}),E=(lt,Nt,q,Ct)=>{let Vt=new te(lt,Nt);return Vt.position.set(...q),Ct&&Vt.rotation.set(...Ct),d.add(Vt),Vt},P=Ee(m,"#000000",.45),F=Ee(S,"#ffffff",.1),L=new H,R=new Le,V=new Xt,z=(lt,Nt,q,Ct)=>d.add(wn(lt,Nt,q,Ct));E(new xe(1.5,1.5,7,28),U(m),[0,0,0],[Math.PI/2,0,0]),E(new pe(1.5,28,16),U(S),[0,0,3.5]),E(new pe(1.5,28,16),U(P),[0,0,-3.5]),E(new xe(.22,.22,16,10),U(m),[0,0,0],[Math.PI/2,0,0]);for(let lt of[-2.7,-.9,.9,2.7])E(new vn(1.56,.07,6,40),U(P),[0,0,lt]);for(let lt of[mn,-mn])E(new xe(2.1,2.1,.22,36),U(P),[0,0,lt],[Math.PI/2,0,0]),E(new vn(2.1,.06,6,48),new $e({color:F,emissive:F,emissiveIntensity:.6}),[0,0,lt+(lt>0?.12:-.12)]);z(new xe(.16,.26,.5,8),U(P),Array.from({length:6},(lt,Nt)=>Nt),(lt,Nt,q)=>q.makeRotationZ(lt/6*Math.PI*2).multiply(V.makeTranslation(1.05,0,-4.8)).multiply(V.makeRotationX(Math.PI/2)));let X=new pe(1.5,24,8,0,Math.PI*2,0,.8);X.rotateX(-Math.PI/2),E(X,new $e({color:"#d9e2f2",specular:"#ffffff",shininess:70,side:me}),[0,0,8.4]),E(new xe(.05,.05,1.2,6),U(m),[0,0,8.7],[Math.PI/2,0,0]);let G=new $e({color:"#1e3a8a",emissive:"#0b1a45",specular:"#93c5fd",shininess:90}),W=[];for(let lt of[7.2,-7.2]){E(new xe(.12,.12,13,8),U(m),[0,0,lt],[0,0,Math.PI/2]);for(let Nt of[4,-4]){E(new Ie(5,2.6,.08),G,[Nt,0,lt]);for(let q=-2;q<=2;q++)W.push({at:[Nt+q*.83,0,lt+.06],sc:[.04,2.6,.05]});for(let q of[-.86,.86,1.3,-1.3])W.push({at:[Nt,q,lt+.06],sc:[5,.04,.05]})}}z(new Ie(1,1,1),U("#ffffff"),W,(lt,Nt,q)=>(q.compose(L.set(...lt.at),R.identity(),new H(...lt.sc)),"#6f84ad"));for(let lt of[mn,-mn]){E(new vn(ln,.16,8,96),U(m),[0,0,lt]);for(let q of[.55,-.55])E(new vn(ln-.15,.05,6,96),U(P),[0,0,lt+q]);let Nt=E(new xe(ln-.8,ln-.8,.9,96,1,!0),new $e({color:P,specular:"#555555",shininess:30,side:me}),[0,0,lt],[Math.PI/2,0,0]);Nt.material.transparent=!0,Nt.material.opacity=.85}let tt=Array.from({length:96},(lt,Nt)=>({a:Nt/96*Math.PI*2,z:Nt%2?mn:-mn}));z(new Ie(1,1,1),U("#ffffff"),tt,(lt,Nt,q)=>(q.makeRotationZ(lt.a).setPosition(ln*Math.cos(lt.a),ln*Math.sin(lt.a),lt.z).multiply(V.makeScale(.12,.12,1.15)),P));let st=Array.from({length:12},(lt,Nt)=>Nt/12*Math.PI*2);z(new Ie(1,1,1),U("#ffffff"),st,(lt,Nt,q)=>(q.makeRotationZ(lt).setPosition((ln-.8)*Math.cos(lt),(ln-.8)*Math.sin(lt),0).multiply(V.makeScale(.28,.28,mn*2+.6)),m));let O=[...c.docked,...c.second],at=new H,K=(lt,Nt,q,Ct)=>Nt.makeRotationZ(lt.a).setPosition(...lt.at).multiply(V.compose(L.set(q[0],q[1],q[2]),R.identity(),at.set(Ct[0],Ct[1],Ct[2]))),A=lt=>lt.rotateZ(Math.PI/2);z(new Ie(1,1,1),U("#ffffff"),O,(lt,Nt,q)=>(K(lt,q,[0,0,0],[.85*lt.size,1.15*lt.size,1.1*lt.size]),v(lt))),z(A(new xe(.34,.42,1,10)),U("#ffffff"),O,(lt,Nt,q)=>(K(lt,q,[-.42*lt.size-.3,0,0],[.6,lt.size,lt.size]),P)),z(A(new xe(.03,.03,1,5)),U("#ffffff"),O,(lt,Nt,q)=>(K(lt,q,[.42*lt.size+.5+Nt%3*.25,0,.2],[1+Nt%3*.5,1,1]),"#8a96ad")),z(new Ie(1,1,1),U("#ffffff"),O,(lt,Nt,q)=>(K(lt,q,[0,0,Math.sign(lt.at[2])*(.55*lt.size+.5)],[.7*lt.size,1*lt.size,.04]),Ee(v(lt),"#000000",.35))),z(new Ie(1,1,1),new re,O,(lt,Nt,q)=>(K(lt,q,[.43*lt.size,0,0],[.03,.85*lt.size,.14*lt.size]),lt.state==="stale"?"#3a3f4c":"#c9a05a"));let D=new Map(c.docked.map(lt=>[lt.id,lt.at])),j=()=>new xe(1,1,1,6),$=()=>new $e({color:m,transparent:!0,opacity:.35,depthWrite:!1});d.add(wn(j(),$(),c.docked,(lt,Nt,q)=>{ts(q,[0,0,mn],lt.at,.05)})),d.add(wn(j(),$(),c.second.filter(lt=>lt.anchor),(lt,Nt,q)=>{ts(q,lt.at,D.get(lt.anchor),.05)}));let ut=new ii(1,1),ft=ut.getAttribute("position");for(let lt=0;lt<ft.count;lt++){let Nt=ft.getX(lt),q=ft.getY(lt),Ct=ft.getZ(lt),Vt=1+.28*Math.sin(Nt*4.1+q*2.3)*Math.cos(Ct*3.7+Nt*1.9)+.12*Math.sin(q*9+Ct*7);ft.setXYZ(lt,Nt*Vt,q*Vt,Ct*Vt)}ut.computeVertexNormals(),d.add(wn(ut,new $e({color:"#ffffff",flatShading:!0,shininess:6}),c.adrift,(lt,Nt,q)=>(q.makeRotationZ(Nt).scale(at.set(.6*lt.size,.45*lt.size,.5*lt.size)).setPosition(...lt.at),lt.state==="stale"?b:Ee(S,b,.6))));let ct=[[8.7,0,7.2],[-8.7,0,7.2],[8.7,0,-7.2],[-8.7,0,-7.2],[0,0,9],[0,0,-9]];d.add(be(ct.length,lt=>ct[lt],{size:5,color:"#ff8a7a"}).object);let vt=[...c.docked.map(lt=>[[0,0,mn],lt.at]),...c.second.filter(lt=>lt.anchor).map(lt=>[D.get(lt.anchor),lt.at])];u=be(vt.length,(lt,Nt)=>{let[q,Ct]=vt[lt],Vt=(Nt*.35+lt*.618)%1;return[q[0]+(Ct[0]-q[0])*Vt,q[1]+(Ct[1]-q[1])*Vt,q[2]+(Ct[2]-q[2])*Vt]},{size:4,color:"#ffe9a8"}),d.add(u.object);let J=150;f=be(J,(lt,Nt)=>{let q=lt/J*Math.PI*2,Ct=lt%2?mn:-mn,Vt=ln+(lt%3-1)*.35;return[Vt*Math.cos(q),Vt*Math.sin(q),Ct+.45*(lt%5===0?1:-1)*(.6+.4*Math.sin(Nt*2.5+lt*7)*(lt%7===0?1:0))]},{size:2.4,color:"#ffd98a",opacity:.9}),d.add(f.object),i.scene.add(d);let _t=lt=>({run:()=>s(lt.id),title:`Open ${p(lt.id)}`}),St=[{text:ee(c.core.name,34),at:[0,1.6,3.5],strong:!0,dy:-16,run:()=>s(c.core.id),title:`Open ${c.core.name}`}];for(let lt of c.docked.slice(0,5))St.push({text:ee(p(lt.id),22),at:lt.at,dy:-14,..._t(lt)});c.docked.length&&St.push({text:`docked (${M(c.docked,c.counts.docked)})`,at:[0,-ln,mn],color:o.muted,dy:16}),c.second.length&&St.push({text:`second ring (${M(c.second,c.counts.second)})`,at:[ln,0,-mn],color:o.muted,dy:16}),c.adrift.length&&St.push({text:`adrift (${M(c.adrift,c.counts.adrift)})`,at:c.adrift[0].at,color:o.muted,dy:16}),t.labels(St),t.stat(x());let Ut=[],qt=c.counts.docked+c.counts.second+c.counts.adrift;qt&&Ut.push({text:`${c.counts.docked} of ${yt(qt,"note")} in ${c.name} link with ${c.core.name}.`+(c.core.map?"":` ${c.name} has no map; ${c.core.name} is its most relied-on note.`),label:`Open ${ee(c.core.name,18)}`,run:()=>s(c.core.id)}),c.second.length&&Ut.push({text:`${yt(c.counts.second,"note")} link with the topic but not with ${c.core.name}. ${p(c.second[0].id)} is the most relied-on of them; a link from ${c.core.name} docks it.`,label:"Open note",run:()=>s(c.second[0].id)}),c.adrift.length&&Ut.push({text:`${yt(c.counts.adrift,"note")} link with nothing in ${c.name}. ${p(c.adrift[0].id)} is the most relied-on of them.`,label:"Open note",run:()=>s(c.adrift[0].id)}),t.explain({plain:"Picture a topic as a space station. The hub in the middle is the topic's map. Every note the map links with is a module bolted to the front ring. Notes that only link with other notes ride the second ring. Notes that link with nothing here drift outside as rocks.",about:`The hub is ${c.core.name}${c.core.map?", the topic's map":", the topic's most relied-on note (the topic has no map)"}. A spoke is a link between the hub and a note; a strut is a link between a second-ring note and a docked one. A module is bigger the more the vault leans on the note. A ring shows at most ${vh} modules and ${Hf} rocks are drawn, the most relied-on first; each label says how many there are in all.`,legend:[{color:zf,text:"edited lately"},{color:S,text:"a note of the topic"},{color:b,text:"stale"},{color:m,text:"spoke or strut = a link"}],insights:Ut});let Jt=lt=>()=>{y(c.topics[(c.index+lt+c.topics.length)%c.topics.length].cluster),a()};t.controls({lines:[`Topic ${c.index+1} of ${c.topics.length}`],buttons:[{label:"\u2039",title:"The topic before",off:c.topics.length<2,run:Jt(-1)},{label:c.name,title:`Open ${c.core.name}`,wide:!0,run:()=>s(c.core.id)},{label:"\u203A",title:"The next topic",off:c.topics.length<2,run:Jt(1)}]})}function y(S){if(S===void 0||S===c.cluster)return;let b=Gf(e,S);b.cluster===S&&(c=b,g())}i.sky({top:"#02050f",haze:"#0b1432",stars:500,starColor:"#cfe0ff"}),g();let w={active:"edited lately",steady:"",stale:"stale"},_=(S,b)=>[p(S.id),b,w[S.state]].filter(Boolean).join(" \xB7 ");return{targets:()=>[{at:[0,0,0],r:2.2,key:{kind:"note",id:c.core.id,tip:`${c.core.name} \xB7 the hub of ${c.name}`}},...c.docked.map(S=>({at:S.at,r:.9*S.size,key:{kind:"note",id:S.id,tip:_(S,"docked")}})),...c.second.map(S=>({at:S.at,r:.9*S.size,key:{kind:"note",id:S.id,tip:_(S,"second ring")}})),...c.adrift.map(S=>({at:S.at,r:.8*S.size,key:{kind:"note",id:S.id,tip:_(S,"adrift")}}))],click(S){S.kind==="note"&&s(S.id)},update(S){"selected"in S&&S.selected&&y(h(S.selected))},stat:x,today:()=>c.adrift.length?{text:`${p(c.adrift[0].id)} links with nothing in ${c.name}.`,label:"Open note",run:()=>s(c.adrift[0].id)}:null,api:{layout:()=>c,go:S=>{y(S),a()}},tick(S){u&&u.tick(S),f&&f.tick(S)},dispose(){d&&hi(i.scene,d)}}}};var Di=30,Jf=37,qf=12,jf=4,Zf=1.5,Yf="#ef4444",Sh="#3b82f6",oo=.6,Ws=2.1,Xn=7.2,es=5;function Xf(i,t=[]){let e=[];for(let n=-i-1;n<=i;n++)for(let s=-i-1;s<=i;s++)for(let r of t.length?t:[0]){let o=n+r,a=s+r,l=Zf*(o+a/2),h=Zf*a*.8660254;(t.length||Math.max(Math.abs(n),Math.abs(s),Math.abs(n+s))<=i)&&e.push([l,h])}return e.sort((n,s)=>Math.hypot(...n)-Math.hypot(...s)||Math.atan2(n[1],n[0])-Math.atan2(s[1],s[0]))}function ky(i){let t=i.nodes.filter(y=>!Pe(y)),e=ks(i.nodes),n=Ni(i),s=i.quality&&i.quality.stale_days||180,r=(y,w)=>y.id<w.id?-1:1,o=t.filter(y=>(y.age||0)<=Di).sort((y,w)=>e(w)-e(y)||r(y,w)),a=t.filter(n),l=a.filter(y=>y.age<=s+Di),h=Xf(3),c=Xf(3,[1/3,2/3]),d=o.slice(0,Jf).map((y,w)=>({id:y.id,cluster:y.cluster,heat:e(y),at:h[w],h:2.2+3.2*e(y)})),u=a.filter(y=>y.inlinks>0).sort((y,w)=>w.inlinks-y.inlinks||r(y,w)),f=u.length?u[0].inlinks:1,p=u.slice(0,qf).map((y,w)=>({id:y.id,cluster:y.cluster,links:y.inlinks,depth:.25+.75*(y.inlinks/f),at:c[w]})),M=new Map;for(let y of o)M.set(y.cluster,(M.get(y.cluster)||0)+1);let x=new Map(i.clusters.map(y=>[y.id,y.label||y.name])),g=[...M].sort((y,w)=>w[1]-y[1]||y[0]-w[0]).slice(0,jf).map(([y,w])=>({cluster:y,name:x.get(y)||`Topic ${y}`,edited:w,share:w/o.length}));return{edited:o.length,wentStale:l.length,stale:a.length,leaned:u.length,k:l.length?o.length/l.length:null,fuel:d,control:p,loops:g}}var Qf={id:"reactor",name:"Reactor",hint:"The last 30 days as a reactor: edited notes are fuel, stale notes others link to are control rods",home:{yaw:oo,pitch:.42,dist:62,min:10,max:200},stage:{light:"camera",fog:[90,300],ambient:.6,glow:{strength:.7,radius:.5,threshold:.85}},actions:["graph"],build({stage:i,frame:t,data:e,onOpen:n,onAction:s,theme:r,invalidate:o}){let a=ky(e),l=new Map(e.nodes.map(v=>[v.id,v])),h=v=>l.get(v).name;if(!a.fuel.length&&!a.control.length)return Hs(t,s,yt(e.nodes.length,"note"),[`The Reactor needs notes edited in the last ${Di} days, or stale notes other notes link to.`,"Neither yet."]);let c=null,d=null,u=null,f=null,p=null,M=null,x=v=>r.palette[(v||0)%r.palette.length],g=a.k==null?null:a.k.toFixed(2),y=()=>`${g?`k ${g} \xB7 `:""}${yt(a.edited,"note")} edited in ${Di} days \xB7 ${a.wentStale||"none"} went stale \xB7 ${yt(a.control.length,"control rod")}`,w=v=>oo+Math.PI+(v-(a.loops.length-1)/2)*1,_=(v,U,E)=>[U*Math.sin(v),E,U*Math.cos(v)];function S(){c&&hi(i.scene,c),c=new hn;let v=Ee("#5b6b86",r.bg,.25),U=Ee("#1b2742",r.bg,.2),E=Ee(r.fg,r.bg,.25),P=D=>d==null||d===D?0:.82,F=(D,j)=>new $e({color:D,specular:"#666666",shininess:35,...j}),L=(D,j,$)=>{let ut=new te(D,j);return ut.position.y=$,c.add(ut),ut},R=(D,j)=>new xe(D,D,j,64,1,!0,oo+Ws/2,Math.PI*2-Ws),V=(D,j)=>new pe(D,64,20,oo+Ws/2+Math.PI/2,Math.PI*2-Ws,j?0:Math.PI/2,Math.PI/2);L(new xe(19,19,1,64),F(U),-5.5);let z=(D,j,$=me)=>new re({color:D,transparent:!0,opacity:j,blending:pn,depthWrite:!1,side:$});[8,12.5,16,18.4].forEach((D,j)=>{let $=L(new si(D-.07,D+.07,96),z(j===3?"#38bdf8":"#1d4ed8",.55-j*.08),-4.98);$.rotation.x=-Math.PI/2}),[-3,1,5,9,13].forEach(D=>{let j=L(new vn(18,.045,6,128),z("#3b82f6",.5),D-1);j.rotation.x=Math.PI/2});for(let D=0;D<12;D++){let j=L(new vn(18,.045,6,64,Math.PI/2),z("#3b82f6",.38),12);j.scale.y=.6,j.rotation.order="YXZ",j.rotation.y=D/12*Math.PI*2,j.rotation.z=0}let X=new Er("#38bdf8",90,40,1.6);X.position.set(0,3.5,0),c.add(X),L(new xe(5.9,5.9,Xn,48,1,!0),z("#22d3ee",.16,Ue),Xn/2);let G={side:me,transparent:!0,opacity:.3,depthWrite:!1};L(R(18,17),F(U,G),3.5),L(V(18,!0),F(U,G),12).scale.y=.6,L(R(6.2,12),F(v,{side:me}),3),L(V(6.2,!1),F(v,{side:me}),-3).scale.y=.5,L(V(6.2,!0),F(v,{side:me}),9).scale.y=.5,L(new xe(5.9,5.9,.3,48),F(E),-.2),L(new xe(5.9,5.9,.3,48),F(E),Xn),L(new xe(5.8,5.8,Xn,48,1,!1,oo+Ws/2,Math.PI*2-Ws),new $e({color:"#38bdf8",transparent:!0,opacity:.2,depthWrite:!1,side:me}),Xn/2);let W=D=>new xe(1,1,1,D);c.add(wn(W(12),new $e({color:"#ffffff",shininess:70}),a.fuel,(D,j,$)=>(ts($,[D.at[0],0,D.at[1]],[D.at[0],D.h,D.at[1]],.42),Ee(Ee(E,x(D.cluster),.5+.5*D.heat),r.bg,P(D.cluster))))),c.add(wn(W(8),F("#ffffff"),a.control,(D,j,$)=>{let ut=Xn-es*D.depth;return ts($,[D.at[0],ut,D.at[1]],[D.at[0],ut+es+1.4,D.at[1]],.2),Ee(E,r.bg,P(D.cluster))})),c.add(wn(new pe(1,12,8),F("#ffffff"),a.control,(D,j,$)=>($.makeScale(.36,.36,.36).setPosition(D.at[0],Xn-es*D.depth+es+1.4,D.at[1]),Ee(E,r.bg,P(D.cluster)))));let tt=[];a.loops.forEach((D,j)=>{let $=w(j),ut=.28+.5*D.share,ft=P(D.cluster),ct=_($,13.5,0),vt=_($+.2,10.5,0),J=new te(new xe(1.9,1.4,12,24),F(Ee(x(D.cluster),r.bg,ft)));J.position.set(ct[0],1,ct[2]),c.add(J);let _t=new te(new pe(1.9,24,12,0,Math.PI*2,0,Math.PI/2),F(Ee(x(D.cluster),r.bg,ft)));_t.position.set(ct[0],7,ct[2]),c.add(_t);let St=new te(new xe(.9,.9,3.4,16),F(Ee(v,r.bg,ft)));St.position.set(vt[0],1.2,vt[2]),c.add(St),tt.push({from:_($-.07,6.1,5),to:_($-.05,12.4,5),w:ut,c:Ee(Yf,r.bg,ft)},{from:_($+.05,12.6,1),to:[vt[0],1,vt[2]],w:ut,c:Ee(Sh,r.bg,ft)},{from:[vt[0],2.4,vt[2]],to:_($+.12,6.1,3.2),w:ut,c:Ee(Sh,r.bg,ft)})});let st=a.fuel.slice(0,48);u=be(st.length,(D,j)=>{let $=st[D],ut=(j*(.18+.1*(D*7%5)/5)+D*.37)%1;return[$.at[0]+.35*Math.sin(j*2+D),ut*Xn,$.at[1]+.35*Math.cos(j*2+D)]},{size:3,color:"#bfe9ff",opacity:.8}),c.add(u.object);let O=a.fuel.map(D=>[D.at[0],D.h,D.at[1]]);f=be(O.length,(D,j)=>[O[D][0],O[D][1]+.1+.05*Math.sin(j*3+D),O[D][2]],{size:6,color:"#a5f3fc",opacity:1}),c.add(f.object);let at=a.loops.map((D,j)=>_(w(j),13.5,8));p=at.length?be(at.length*14,(D,j)=>{let $=at[D%at.length],ut=(j*.12+D*.173)%1;return[$[0]+.9*Math.sin(D*2.3+ut*4),$[1]+ut*6,$[2]+.9*Math.cos(D*1.7+ut*4)]},{size:9,color:"#cbd5e1",opacity:.12}):null,p&&c.add(p.object),M=tt.length?be(tt.length*4,(D,j)=>{let $=tt[D%tt.length],ut=(j*.22+Math.floor(D/tt.length)/4)%1;return[0,1,2].map(ft=>$.from[ft]+($.to[ft]-$.from[ft])*ut)},{size:4,color:"#fff1c2",opacity:.95}):null,M&&c.add(M.object),c.add(wn(W(12),F("#ffffff"),tt,(D,j,$)=>(ts($,D.from,D.to,D.w),D.c))),i.scene.add(c);let K=a.loops.map((D,j)=>({text:`${ee(D.name,20)} (${D.edited})`,at:_(w(j),13.5,9),dy:-14,run:()=>b(D.cluster),title:`Only ${D.name}`}));for(let D of a.fuel.slice(0,3))K.push({text:ee(h(D.id),22),at:[D.at[0],D.h,D.at[1]],dy:-14,run:()=>n(D.id),title:`Open ${h(D.id)}`});a.control[0]&&K.push({text:ee(h(a.control[0].id),22),at:[a.control[0].at[0],Xn+es+1.4,a.control[0].at[1]],dy:-14,color:r.muted,run:()=>n(a.control[0].id),title:`Open ${h(a.control[0].id)}`}),t.labels(K),t.stat(y());let A=d==null?null:a.loops.find(D=>D.cluster===d);t.chip(A?`Only ${A.name}`:null,()=>b(null))}function b(v){d=v===d?null:v,S(),o()}let m=[];return g?m.push({text:`k is ${g}: ${yt(a.edited,"note")} edited in the last ${Di} days for ${yt(a.wentStale,"note")} that went stale in them. ${a.k>=1?"Above 1, the vault is heating up.":"Below 1, the vault is cooling."}`,...a.fuel[0]?{label:"Open liveliest",run:()=>n(a.fuel[0].id)}:{}}):m.push({text:`${yt(a.edited,"note")} edited in the last ${Di} days and none went stale in them, so there is no k to work out.`,...a.fuel[0]?{label:"Open liveliest",run:()=>n(a.fuel[0].id)}:{}}),a.control[0]&&m.push({text:`${yt(a.leaned,"stale note")} still ${a.leaned===1?"has":"have"} notes linking to ${a.leaned===1?"it":"them"}. ${h(a.control[0].id)} has the most: ${yt(a.control[0].links,"note")} link to it.`,label:"Open note",run:()=>n(a.control[0].id)}),a.loops[0]&&m.push({text:`${a.loops[0].name} had the most edits: ${a.loops[0].edited} of the ${a.edited}.`,label:"Only this topic",run:()=>b(a.loops[0].cluster)}),t.explain({plain:"Picture a reactor. Every note you edited this month is a fuel rod giving off heat. Every note left to go stale takes heat away. Divide one by the other and you get k: above 1 the vault is heating up, below 1 it is cooling.",about:`A fuel rod is a note edited in the last ${Di} days, taller and brighter the livelier it is; the ${Jf} liveliest are drawn, the liveliest in the middle. A control rod is a stale note that other notes still link to, pushed deeper the more notes link to it; the ${qf} most linked are drawn. k is the notes edited in the ${Di} days divided by the notes that went stale in them. Each coolant loop is one of the ${jf} topics with the most edited notes; its pipes are wider the bigger its share.`,legend:[{color:r.palette[0],text:"fuel rod = a note edited lately, colour = topic"},{color:Ee(r.fg,r.bg,.25),text:"control rod = a stale note others link to"},{color:Yf,text:"hot leg"},{color:Sh,text:"cold leg, back to the vessel"}],insights:m}),t.controls({lines:["Pick a rod to open its note, a loop to see only its topic"],buttons:[]}),i.sky({top:"#04060c",haze:"#0e121c"}),S(),{targets:()=>[...a.fuel.map(v=>({at:[v.at[0],v.h*.6,v.at[1]],r:.7,key:{kind:"note",id:v.id,tip:`${h(v.id)} \xB7 edited ${yt(l.get(v.id).age||0,"day")} ago`}})),...a.control.map(v=>({at:[v.at[0],Xn-es*v.depth+es+1.4,v.at[1]],r:.6,key:{kind:"note",id:v.id,tip:`${h(v.id)} \xB7 stale \xB7 ${yt(v.links,"note")} link to it`}})),...a.loops.map((v,U)=>({at:_(w(U),13.5,4),r:2.4,key:{kind:"loop",id:v.cluster,tip:`${v.name} \xB7 ${yt(v.edited,"note")} edited \xB7 pick to see only this topic`}}))],click(v){v.kind==="note"?n(v.id):v.kind==="loop"&&b(v.id)},update(){},stat:y,today:()=>a.control[0]?{text:`${h(a.control[0].id)} is stale and ${yt(a.control[0].links,"note")} link to it.`,label:"Open note",run:()=>n(a.control[0].id)}:null,api:{layout:()=>a,filter:b,only:()=>d},tick(v){for(let U of[u,f,p,M])U&&U.tick(v)},dispose(){c&&hi(i.scene,c)}}}};var Fl={low:0,medium:1,high:2},Oy=i=>20*(i+1)**2;async function Kf({host:i,detail:t="medium",pbr:e=!1,warmup:n=3e3,run:s=5e3}={}){if(!(t in Fl))throw new Error(`bench: detail is one of ${Object.keys(Fl).join(", ")}`);if(!i)throw new Error("bench: host (an element to draw in) is required");let r=Kr(),o=yl(i,co(),{fog:!1});try{o.scene.add(ih(r,new ii(1,Fl[t]),e?new Ce({roughness:.6}):new Xi).root);let a=o.renderer.getContext(),l=a.getExtension("WEBGL_debug_renderer_info"),h=String(l&&a.getParameter(l.UNMASKED_RENDERER_WEBGL)||a.getParameter(a.RENDERER)||"unknown"),c=()=>new Promise(y=>requestAnimationFrame(y)),d=performance.now(),u=d,f=d,p=0,M=0,x=0;for(;u-d<n+s;)u=await c(),o.orbit(u/2e3,.3,42),o.render(),u-d>=n&&(x?(p++,M=Math.max(M,u-f)):x=u),f=u;let g=u-x;return{atoms:r.n,detail:t,triangles:r.n*Oy(Fl[t]),light:e?"pbr":"basic",fps:g>0?Math.round(p*1e3/g*10)/10:0,worstMs:Math.round(M*10)/10,frames:p,gpu:h}}finally{o.dispose()}}var bh={bodies:Od,cas9:Hd,genome:Xd,cones:jd,loadpaths:af,modes:hf,slime:gf,cyberpunk:vf,radar:Af,clock:If,foodweb:Lf,city:Ef,atom:Vf,station:Wf,reactor:Qf},Vy=Object.values(bh).map(i=>({id:i.id,name:i.name,hint:i.hint,actions:i.actions||[],under:(i.home.minPitch||0)<0}));function zy(i,{view:t="bodies",data:e,inputs:n,onOpen:s,onAction:r,theme:o,motion:a=!1}={}){let l=bh[t];if(!l)throw new Error(`vault-graph-views: no view "${t}" (there is ${Object.keys(bh).join(", ")})`);let h=kl(e);if(h.length||h.push(...Ol(t,e,n)),h.length)throw new Error("vault-graph-views: "+h.join("; "));if(typeof s!="function")throw new Error("vault-graph-views: onOpen is required");if((l.actions||[]).length&&typeof r!="function")throw new Error(`vault-graph-views: onAction is required for the ${l.name} view (it asks the host for: ${l.actions.join(", ")})`);return kd(i,l,{data:e,inputs:n||{},onOpen:s,onAction:r,motion:a,theme:co(o)})}return cp(Gy);})();
