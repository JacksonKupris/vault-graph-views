var VaultGraphViews=(()=>{var Bl=Object.defineProperty;var sp=Object.getOwnPropertyDescriptor;var rp=Object.getOwnPropertyNames;var op=Object.prototype.hasOwnProperty;var ap=(i,t)=>{for(var e in t)Bl(i,e,{get:t[e],enumerable:!0})},lp=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of rp(t))!op.call(i,s)&&s!==e&&Bl(i,s,{get:()=>t[s],enumerable:!(n=sp(t,s))||n.enumerable});return i};var cp=i=>lp(Bl({},"__esModule",{value:!0}),i);var Gy={};ap(Gy,{VIEWS:()=>Vy,bench:()=>Kf,check:()=>kl,checkInputs:()=>Ol,mountViews:()=>zy});var Ys={top:{nodes:"array",links:"array",clusters:"array",wanted:"array"},node:{id:"string",name:"string",cluster:"number",folder:"string",inlinks:"number",outlinks:"number",words:"number"},link:{source:"string",target:"string",kind:"string"},cluster:{id:"number",name:"string",label:"string",size:"number"},strand:{days:"array",paths:"array",ids:"array",rows:"array"}},hp={n:"number",X:"array",stress:"number",grade:"string",domains:"array",loops:"array"},up={guide:"string",where:"string",notes:"array"},dp={ids:"array",level:"array",edges:"array",stats:"object"};var hn=i=>Array.isArray(i)?"array":i===null?"null":typeof i,mi=(i,t,e,n)=>{for(let[s,r]of Object.entries(n))hn(e[s])!==r&&i.push(`${t}.${s} should be ${r}, is ${hn(e[s])}`)};function kl(i){let t=[];if(!i||typeof i!="object")return["data is not an object"];if(mi(t,"data",i,Ys.top),t.length)return t;i.nodes[0]&&mi(t,"nodes[0]",i.nodes[0],Ys.node),i.links[0]&&mi(t,"links[0]",i.links[0],Ys.link),i.clusters[0]&&mi(t,"clusters[0]",i.clusters[0],Ys.cluster);let e=new Set(i.nodes.map(s=>s.id));for(let s of i.wanted)e.add(s.id);let n=i.links.filter(s=>!e.has(s.source)||!e.has(s.target)).length;return n&&t.push(`${n} links point at a note that is in neither nodes nor wanted`),t}function Ol(i,t,e){let n=[],s=e||{};if(i==="genome"){let r=t&&t.strand;if(hn(r)!=="object")return[`data.strand should be object, is ${hn(r)}`];if(mi(n,"data.strand",r,Ys.strand),hn(s.fold)!=="object")return n.concat(`inputs.fold should be object, is ${hn(s.fold)}`);if(mi(n,"inputs.fold",s.fold,hp),n.length)return n;let o=s.fold;(r.rows.length!==r.days.length||r.paths.length!==r.days.length)&&n.push(`data.strand has ${r.days.length} days, ${r.rows.length} rows and ${r.paths.length} paths: they should be the same number`),(o.n!==r.days.length||o.X.length!==o.n)&&n.push(`inputs.fold is for ${o.n} days (${o.X.length} points) and data.strand has ${r.days.length}: the fold is from other data`);let a=o.loops.filter(l=>!(l.a>=0&&l.a<o.n&&l.b>=0&&l.b<o.n&&typeof l.count=="number")).length;a&&n.push(`${a} of inputs.fold.loops don't name two days of the strand and a count`)}if(i==="foodweb"){if(hn(s.web)!=="object")return n.concat(`inputs.web should be object, is ${hn(s.web)}`);if(mi(n,"inputs.web",s.web,dp),n.length)return n;let r=s.web;r.level.length!==r.ids.length&&n.push(`inputs.web has ${r.ids.length} ids and ${r.level.length} levels: they should be the same`);let o=r.edges.filter(a=>!(a[0]>=0&&a[0]<r.ids.length&&a[1]>=0&&a[1]<r.ids.length)).length;o&&n.push(`${o} of inputs.web.edges don't name two of its ids`);for(let a of["mean","maxLevel","incoherence"])typeof r.stats[a]!="number"&&n.push(`inputs.web.stats.${a} should be number, is ${hn(r.stats[a])}`);if(n.length)return n}if(i==="cas9"&&s.scan!=null){if(hn(s.scan)!=="object")return[`inputs.scan should be object, is ${hn(s.scan)}`];mi(n,"inputs.scan",s.scan,up),s.scan.ids!==void 0&&!Array.isArray(s.scan.ids)&&n.push(`inputs.scan.ids should be array, is ${hn(s.scan.ids)}`),!n.length&&s.scan.notes[0]&&(typeof s.scan.notes[0].path!="string"||typeof s.scan.notes[0].hits!="number")&&n.push("inputs.scan.notes[0] should be { path: string, hits: number }")}return s.hour!=null&&typeof s.hour!="number"&&n.push(`inputs.hour should be number, is ${hn(s.hour)}`),s.selected!=null&&typeof s.selected!="string"&&n.push(`inputs.selected should be string, is ${hn(s.selected)}`),n}var fp=["#4385BE","#879A39","#DA702C","#8B7EC8","#3AA99F","#D14D41","#D0A215","#CE5D97","#205EA6","#66800B","#BC5215","#5E409D","#24837B","#AF3029","#AD8301","#A02F6F"];function co(i){return Object.assign({bg:"#14161a",fg:"#dddddd",muted:"#8a8f98",accent:"#6aa9ff",warn:"#f59e0b",palette:fp},i||{})}var fu=0,vc=1,pu=2;var Cr=1,mu=2,Rs=3,Ai=0,Ce=1,me=2,si=0,Cs=1,_n=2,Sc=3,bc=4,gu=5;var Ji=100,xu=101,_u=102,yu=103,Mu=104,vu=200,Su=201,bu=202,wu=203,wc=204,Ec=205,Eu=206,Tu=207,Au=208,Ru=209,Cu=210,Iu=211,Pu=212,Uu=213,Nu=214,ko=0,Oo=1,Vo=2,xs=3,zo=4,Go=5,Ho=6,Wo=7,Ir=0,Fu=1,Du=2,Vn=0,Pr=1,Ur=2,Nr=3,qi=4,Fr=5,Dr=6,Lr=7;var Tc=300,ji=301,Is=302,Sa=303,ba=304,_s=1e3,Ln=1001,Zo=1002,Ne=1003,Lu=1004;var Br=1005;var on=1006,wa=1007;var ri=1008;var dn=1009,Ac=1010,Rc=1011,Ps=1012,Ea=1013,Nn=1014,Tn=1015,qe=1016,Ta=1017,Aa=1018,Qi=1020,Cc=35902,Ic=35899,Pc=1021,Uc=1022,Fn=1023,ti=1026,oi=1027,Ra=1028,Ca=1029,Ri=1030,Ia=1031;var Pa=1033,kr=33776,Or=33777,Vr=33778,zr=33779,Ua=35840,Na=35841,Fa=35842,Da=35843,La=36196,Ba=37492,ka=37496,Oa=37488,Va=37489,Gr=37490,za=37491,Ga=37808,Ha=37809,Wa=37810,Za=37811,Ya=37812,Xa=37813,Ja=37814,qa=37815,ja=37816,Qa=37817,Ka=37818,$a=37819,tl=37820,el=37821,nl=36492,il=36494,sl=36495,rl=36283,ol=36284,Hr=36285,al=36286;var ir=2300,Yo=2301,Lo=2302,dc=2303,fc=2400,pc=2401,mc=2402;var Bu=3200;var Us=0,ku=1,ai="",ze="srgb",sr="srgb-linear",rr="linear",ge="srgb";var Bo=7680;var Ou=519,Vu=512,zu=513,Gu=514,Nc=515,Hu=516,Wu=517,Fc=518,Dc=519,Zu=35044;var Lc="300 es",Sn=2e3,ys=2001;function pp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function mp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yu(){let i=or("canvas");return i.style.display="block",i}var Nh={},Ms=null;function Bc(...i){let t="THREE."+i.shift();Ms?Ms("log",t,...i):console.log(t,...i)}function Xu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xt(...i){i=Xu(i);let t="THREE."+i.shift();if(Ms)Ms("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Kt(...i){i=Xu(i);let t="THREE."+i.shift();if(Ms)Ms("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function tr(...i){let t=i.join(" ");t in Nh||(Nh[t]=!0,Xt(...i))}function Ju(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var qu={[ko]:ko,[Vo]:Ho,[zo]:zo,[xs]:Go,[Oo]:Oo,[Ho]:Vo,[Wo]:Wo,[Go]:xs},Bn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Vl=Math.PI/180,Xo=180/Math.PI;function Wr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function ce(i,t,e){return Math.max(t,Math.min(e,i))}function gp(i,t){return(i%t+t)%t}function zl(i,t,e){return(1-e)*i+e*t}function ju(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function kc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function xp(i,t){if(t.constructor===Float32Array)return i;let e=kc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function _p(i,t){if(t.constructor===Float32Array)return i;let e=kc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Ut=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ge=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],h=n[s+1],c=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],p=r[o+2],M=r[o+3];if(d!==M||l!==u||h!==f||c!==p){let x=l*u+h*f+c*p+d*M;x<0&&(u=-u,f=-f,p=-p,M=-M,x=-x);let g=1-a;if(x<.9995){let y=Math.acos(x),w=Math.sin(y);g=Math.sin(g*y)/w,a=Math.sin(a*y)/w,l=l*g+u*a,h=h*g+f*a,c=c*g+p*a,d=d*g+M*a}else{l=l*g+u*a,h=h*g+f*a,c=c*g+p*a,d=d*g+M*a;let y=1/Math.sqrt(l*l+h*h+c*c+d*d);l*=y,h*=y,c*=y,d*=y}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],h=n[s+2],c=n[s+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+c*d+l*f-h*u,t[e+1]=l*p+c*u+h*d-a*f,t[e+2]=h*p+c*f+a*u-l*d,t[e+3]=c*p-a*d-l*u-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(n/2),c=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=u*c*d+h*f*p,this._y=h*f*d-u*c*p,this._z=h*c*p+u*f*d,this._w=h*c*d-u*f*p;break;case"YXZ":this._x=u*c*d+h*f*p,this._y=h*f*d-u*c*p,this._z=h*c*p-u*f*d,this._w=h*c*d+u*f*p;break;case"ZXY":this._x=u*c*d-h*f*p,this._y=h*f*d+u*c*p,this._z=h*c*p+u*f*d,this._w=h*c*d-u*f*p;break;case"ZYX":this._x=u*c*d-h*f*p,this._y=h*f*d+u*c*p,this._z=h*c*p-u*f*d,this._w=h*c*d+u*f*p;break;case"YZX":this._x=u*c*d+h*f*p,this._y=h*f*d+u*c*p,this._z=h*c*p-u*f*d,this._w=h*c*d-u*f*p;break;case"XZY":this._x=u*c*d-h*f*p,this._y=h*f*d-u*c*p,this._z=h*c*p+u*f*d,this._w=h*c*d+u*f*p;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],c=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(c-l)*f,this._y=(r-h)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(c-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+h)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-h)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+c)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,c=e._w;return this._x=n*c+o*a+s*h-r*l,this._y=s*c+o*l+r*a-n*h,this._z=r*c+o*h+n*l-s*a,this._w=o*c-n*a-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let h=Math.acos(a),c=Math.sin(h);l=Math.sin(l*h)/c,e=Math.sin(e*h)/c,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*s-a*n),c=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*h+o*d-a*c,this.y=n+l*c+a*h-r*d,this.z=s+l*d+r*c-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Gl.copy(this).projectOnVector(t),this.sub(Gl)}reflect(t){return this.sub(Gl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Gl=new G,Fh=new Ge,$t=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,l,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,h)}set(t,e,n,s,r,o,a,l,h){let c=this.elements;return c[0]=t,c[1]=s,c[2]=a,c[3]=e,c[4]=r,c[5]=l,c[6]=n,c[7]=o,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],c=n[4],d=n[7],u=n[2],f=n[5],p=n[8],M=s[0],x=s[3],g=s[6],y=s[1],w=s[4],_=s[7],S=s[2],b=s[5],m=s[8];return r[0]=o*M+a*y+l*S,r[3]=o*x+a*w+l*b,r[6]=o*g+a*_+l*m,r[1]=h*M+c*y+d*S,r[4]=h*x+c*w+d*b,r[7]=h*g+c*_+d*m,r[2]=u*M+f*y+p*S,r[5]=u*x+f*w+p*b,r[8]=u*g+f*_+p*m,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8];return e*o*c-e*a*h-n*r*c+n*a*l+s*r*h-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],d=c*o-a*h,u=a*l-c*r,f=h*r-o*l,p=e*d+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/p;return t[0]=d*M,t[1]=(s*h-c*n)*M,t[2]=(a*n-s*o)*M,t[3]=u*M,t[4]=(c*e-s*l)*M,t[5]=(s*r-a*e)*M,t[6]=f*M,t[7]=(n*l-h*e)*M,t[8]=(o*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*o+h*a)+o+t,-s*h,s*l,-s*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return tr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Hl.makeScale(t,e)),this}rotate(t){return tr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Hl.makeRotation(-t)),this}translate(t,e){return tr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Hl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Hl=new $t,Dh=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lh=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yp(){let i={enabled:!0,workingColorSpace:sr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ge&&(s.r=$n(s.r),s.g=$n(s.g),s.b=$n(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ge&&(s.r=gs(s.r),s.g=gs(s.g),s.b=gs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ai?rr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[sr]:{primaries:t,whitePoint:n,transfer:rr,toXYZ:Dh,fromXYZ:Lh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:n,transfer:ge,toXYZ:Dh,fromXYZ:Lh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),i}var le=yp();function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ns,Jo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ns===void 0&&(ns=or("canvas")),ns.width=t.width,ns.height=t.height;let s=ns.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ns}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=or("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$n(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($n(e[n]/255)*255):e[n]=$n(e[n]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Mp=0,vs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=Wr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Wl(s[o].image)):r.push(Wl(s[o]))}else r=Wl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Wl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Jo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}var vp=0,Zl=new G,an=class i extends Bn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ln,s=Ln,r=on,o=ri,a=Fn,l=dn,h=i.DEFAULT_ANISOTROPY,c=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Wr(),this.name="",this.source=new vs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Zl).x}get height(){return this.source.getSize(Zl).y}get depth(){return this.source.getSize(Zl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _s:t.x=t.x-Math.floor(t.x);break;case Ln:t.x=t.x<0?0:1;break;case Zo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _s:t.y=t.y-Math.floor(t.y);break;case Ln:t.y=t.y<0?0:1;break;case Zo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Tc;an.DEFAULT_ANISOTROPY=1;var we=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,h=l[0],c=l[4],d=l[8],u=l[1],f=l[5],p=l[9],M=l[2],x=l[6],g=l[10];if(Math.abs(c-u)<.01&&Math.abs(d-M)<.01&&Math.abs(p-x)<.01){if(Math.abs(c+u)<.1&&Math.abs(d+M)<.1&&Math.abs(p+x)<.1&&Math.abs(h+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(h+1)/2,_=(f+1)/2,S=(g+1)/2,b=(c+u)/4,m=(d+M)/4,v=(p+x)/4;return w>_&&w>S?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=b/n,r=m/n):_>S?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=b/s,r=v/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=m/r,s=v/r),this.set(n,s,r,e),this}let y=Math.sqrt((x-p)*(x-p)+(d-M)*(d-M)+(u-c)*(u-c));return Math.abs(y)<.001&&(y=1),this.x=(x-p)/y,this.y=(d-M)/y,this.z=(u-c)/y,this.w=Math.acos((h+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qo=class extends Bn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new an({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new vs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},De=class extends qo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ar=class extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var jo=class extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ht=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,l,h,c,d,u,f,p,M,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,h,c,d,u,f,p,M,x)}set(t,e,n,s,r,o,a,l,h,c,d,u,f,p,M,x){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=h,g[6]=c,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=M,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/is.setFromMatrixColumn(t,0).length(),r=1/is.setFromMatrixColumn(t,1).length(),o=1/is.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),h=Math.sin(s),c=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*c,f=o*d,p=a*c,M=a*d;e[0]=l*c,e[4]=-l*d,e[8]=h,e[1]=f+p*h,e[5]=u-M*h,e[9]=-a*l,e[2]=M-u*h,e[6]=p+f*h,e[10]=o*l}else if(t.order==="YXZ"){let u=l*c,f=l*d,p=h*c,M=h*d;e[0]=u+M*a,e[4]=p*a-f,e[8]=o*h,e[1]=o*d,e[5]=o*c,e[9]=-a,e[2]=f*a-p,e[6]=M+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*c,f=l*d,p=h*c,M=h*d;e[0]=u-M*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*c,e[9]=M-u*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*c,f=o*d,p=a*c,M=a*d;e[0]=l*c,e[4]=p*h-f,e[8]=u*h+M,e[1]=l*d,e[5]=M*h+u,e[9]=f*h-p,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*h,p=a*l,M=a*h;e[0]=l*c,e[4]=M-u*d,e[8]=p*d+f,e[1]=d,e[5]=o*c,e[9]=-a*c,e[2]=-h*c,e[6]=f*d+p,e[10]=u-M*d}else if(t.order==="XZY"){let u=o*l,f=o*h,p=a*l,M=a*h;e[0]=l*c,e[4]=-d,e[8]=h*c,e[1]=u*d+M,e[5]=o*c,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*c,e[10]=M*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sp,t,bp)}lookAt(t,e,n){let s=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),gi.crossVectors(n,pn),gi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),gi.crossVectors(n,pn)),gi.normalize(),ho.crossVectors(pn,gi),s[0]=gi.x,s[4]=ho.x,s[8]=pn.x,s[1]=gi.y,s[5]=ho.y,s[9]=pn.y,s[2]=gi.z,s[6]=ho.z,s[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],c=n[1],d=n[5],u=n[9],f=n[13],p=n[2],M=n[6],x=n[10],g=n[14],y=n[3],w=n[7],_=n[11],S=n[15],b=s[0],m=s[4],v=s[8],U=s[12],E=s[1],P=s[5],N=s[9],F=s[13],R=s[2],z=s[6],V=s[10],J=s[14],W=s[3],Y=s[7],j=s[11],H=s[15];return r[0]=o*b+a*E+l*R+h*W,r[4]=o*m+a*P+l*z+h*Y,r[8]=o*v+a*N+l*V+h*j,r[12]=o*U+a*F+l*J+h*H,r[1]=c*b+d*E+u*R+f*W,r[5]=c*m+d*P+u*z+f*Y,r[9]=c*v+d*N+u*V+f*j,r[13]=c*U+d*F+u*J+f*H,r[2]=p*b+M*E+x*R+g*W,r[6]=p*m+M*P+x*z+g*Y,r[10]=p*v+M*N+x*V+g*j,r[14]=p*U+M*F+x*J+g*H,r[3]=y*b+w*E+_*R+S*W,r[7]=y*m+w*P+_*z+S*Y,r[11]=y*v+w*N+_*V+S*j,r[15]=y*U+w*F+_*J+S*H,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],c=t[2],d=t[6],u=t[10],f=t[14],p=t[3],M=t[7],x=t[11],g=t[15],y=l*f-h*u,w=a*f-h*d,_=a*u-l*d,S=o*f-h*c,b=o*u-l*c,m=o*d-a*c;return e*(M*y-x*w+g*_)-n*(p*y-x*S+g*b)+s*(p*w-M*S+g*m)-r*(p*_-M*b+x*m)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],h=t[6],c=t[10];return e*(o*c-a*h)-n*(r*c-a*l)+s*(r*h-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],d=t[9],u=t[10],f=t[11],p=t[12],M=t[13],x=t[14],g=t[15],y=e*a-n*o,w=e*l-s*o,_=e*h-r*o,S=n*l-s*a,b=n*h-r*a,m=s*h-r*l,v=c*M-d*p,U=c*x-u*p,E=c*g-f*p,P=d*x-u*M,N=d*g-f*M,F=u*g-f*x,R=y*F-w*N+_*P+S*E-b*U+m*v;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/R;return t[0]=(a*F-l*N+h*P)*z,t[1]=(s*N-n*F-r*P)*z,t[2]=(M*m-x*b+g*S)*z,t[3]=(u*b-d*m-f*S)*z,t[4]=(l*E-o*F-h*U)*z,t[5]=(e*F-s*E+r*U)*z,t[6]=(x*_-p*m-g*w)*z,t[7]=(c*m-u*_+f*w)*z,t[8]=(o*N-a*E+h*v)*z,t[9]=(n*E-e*N-r*v)*z,t[10]=(p*b-M*_+g*y)*z,t[11]=(d*_-c*b-f*y)*z,t[12]=(a*U-o*P-l*v)*z,t[13]=(e*P-n*U+s*v)*z,t[14]=(M*w-p*S-x*y)*z,t[15]=(c*S-d*w+u*y)*z,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,h=r*o,c=r*a;return this.set(h*o+n,h*a-s*l,h*l+s*a,0,h*a+s*l,c*a+n,c*l-s*o,0,h*l-s*a,c*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,c=o+o,d=a+a,u=r*h,f=r*c,p=r*d,M=o*c,x=o*d,g=a*d,y=l*h,w=l*c,_=l*d,S=n.x,b=n.y,m=n.z;return s[0]=(1-(M+g))*S,s[1]=(f+_)*S,s[2]=(p-w)*S,s[3]=0,s[4]=(f-_)*b,s[5]=(1-(u+g))*b,s[6]=(x+y)*b,s[7]=0,s[8]=(p+w)*m,s[9]=(x-y)*m,s[10]=(1-(u+M))*m,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=is.set(s[0],s[1],s[2]).length(),a=is.set(s[4],s[5],s[6]).length(),l=is.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Rn.copy(this);let h=1/o,c=1/a,d=1/l;return Rn.elements[0]*=h,Rn.elements[1]*=h,Rn.elements[2]*=h,Rn.elements[4]*=c,Rn.elements[5]*=c,Rn.elements[6]*=c,Rn.elements[8]*=d,Rn.elements[9]*=d,Rn.elements[10]*=d,e.setFromRotationMatrix(Rn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Sn,l=!1){let h=this.elements,c=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),p,M;if(l)p=r/(o-r),M=o*r/(o-r);else if(a===Sn)p=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===ys)p=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=c,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=d,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=p,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Sn,l=!1){let h=this.elements,c=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),p,M;if(l)p=1/(o-r),M=o/(o-r);else if(a===Sn)p=-2/(o-r),M=-(o+r)/(o-r);else if(a===ys)p=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=c,h[4]=0,h[8]=0,h[12]=u,h[1]=0,h[5]=d,h[9]=0,h[13]=f,h[2]=0,h[6]=0,h[10]=p,h[14]=M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},is=new G,Rn=new Ht,Sp=new G(0,0,0),bp=new G(1,1,1),gi=new G,ho=new G,pn=new G,Bh=new Ht,kh=new Ge,ln=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],c=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ce(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kh.setFromEuler(this),this.setFromQuaternion(kh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ln.DEFAULT_ORDER="XYZ";var lr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},wp=0,Oh=new G,ss=new Ge,Jn=new Ht,uo=new G,Xs=new G,Ep=new G,Tp=new Ge,Vh=new G(1,0,0),zh=new G(0,1,0),Gh=new G(0,0,1),Hh={type:"added"},Ap={type:"removed"},rs={type:"childadded",child:null},Yl={type:"childremoved",child:null},Je=class i extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new G,e=new ln,n=new Ge,s=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ht},normalMatrix:{value:new $t}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.multiply(ss),this}rotateOnWorldAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.premultiply(ss),this}rotateX(t){return this.rotateOnAxis(Vh,t)}rotateY(t){return this.rotateOnAxis(zh,t)}rotateZ(t){return this.rotateOnAxis(Gh,t)}translateOnAxis(t,e){return Oh.copy(t).applyQuaternion(this.quaternion),this.position.add(Oh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vh,t)}translateY(t){return this.translateOnAxis(zh,t)}translateZ(t){return this.translateOnAxis(Gh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?uo.copy(t):uo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Xs,uo,this.up):Jn.lookAt(uo,Xs,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),ss.setFromRotationMatrix(Jn),this.quaternion.premultiply(ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hh),rs.child=t,this.dispatchEvent(rs),rs.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ap),Yl.child=t,this.dispatchEvent(Yl),Yl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hh),rs.child=t,this.dispatchEvent(rs),rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,t,Ep),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,Tp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let d=l[h];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),h=o(t.textures),c=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),c.length>0&&(n.images=c),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let h in a){let c=a[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Je.DEFAULT_UP=new G(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rn=class extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rp={type:"move"},Ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let M of t.hand.values()){let x=e.getJointPose(M,n),g=this._getHandJoint(h,M);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}let c=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],u=c.position.distanceTo(d.position),f=.02,p=.005;h.inputState.pinching&&u>f+p?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&u<=f-p&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new rn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},fo={h:0,s:0,l:0};function Xl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var _t=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=gp(t,1),e=ce(e,0,1),n=ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Xl(o,r,t+1/3),this.g=Xl(o,r,t),this.b=Xl(o,r,t-1/3)}return le.colorSpaceToWorking(this,s),this}setStyle(t,e=ze){function n(r){r!==void 0&&parseFloat(r)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){let n=Qu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=gs(t.r),this.g=gs(t.g),this.b=gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return le.workingToColorSpace($e.copy(this),t),Math.round(ce($e.r*255,0,255))*65536+Math.round(ce($e.g*255,0,255))*256+Math.round(ce($e.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace($e.copy(this),e);let n=$e.r,s=$e.g,r=$e.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,h,c=(a+o)/2;if(a===o)l=0,h=0;else{let d=o-a;switch(h=c<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=ze){le.workingToColorSpace($e.copy(this),t);let e=$e.r,n=$e.g,s=$e.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(xi),this.setHSL(xi.h+t,xi.s+e,xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xi),t.getHSL(fo);let n=zl(xi.h,fo.h,e),s=zl(xi.s,fo.s,e),r=zl(xi.l,fo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$e=new _t;_t.NAMES=Qu;var cr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new _t(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},hr=class extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Cn=new G,qn=new G,Jl=new G,jn=new G,os=new G,as=new G,Wh=new G,ql=new G,jl=new G,Ql=new G,Kl=new we,$l=new we,tc=new we,vi=class i{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Cn.subVectors(t,e),s.cross(Cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Cn.subVectors(s,e),qn.subVectors(n,e),Jl.subVectors(t,e);let o=Cn.dot(Cn),a=Cn.dot(qn),l=Cn.dot(Jl),h=qn.dot(qn),c=qn.dot(Jl),d=o*h-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(h*l-a*c)*u,p=(o*c-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(o,jn.y),l.addScaledVector(a,jn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Kl.setScalar(0),$l.setScalar(0),tc.setScalar(0),Kl.fromBufferAttribute(t,e),$l.fromBufferAttribute(t,n),tc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Kl,r.x),o.addScaledVector($l,r.y),o.addScaledVector(tc,r.z),o}static isFrontFacing(t,e,n,s){return Cn.subVectors(n,e),qn.subVectors(t,e),Cn.cross(qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Cn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;os.subVectors(s,n),as.subVectors(r,n),ql.subVectors(t,n);let l=os.dot(ql),h=as.dot(ql);if(l<=0&&h<=0)return e.copy(n);jl.subVectors(t,s);let c=os.dot(jl),d=as.dot(jl);if(c>=0&&d<=c)return e.copy(s);let u=l*d-c*h;if(u<=0&&l>=0&&c<=0&&l-c>0)return o=l/(l-c),e.copy(n).addScaledVector(os,o);Ql.subVectors(t,r);let f=os.dot(Ql),p=as.dot(Ql);if(p>=0&&f<=p)return e.copy(r);let M=f*h-l*p;if(M<=0&&h>=0&&p<=0)return a=h/(h-p),e.copy(n).addScaledVector(as,a);let x=c*p-f*d;if(x<=0&&d-c>=0&&f-p>=0)return Wh.subVectors(r,s),a=(d-c)/(d-c+(f-p)),e.copy(s).addScaledVector(Wh,a);let g=1/(x+M+u);return o=M*g,a=u*g,e.copy(n).addScaledVector(os,o).addScaledVector(as,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},bn=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(In.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(In.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=In.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,In):In.fromBufferAttribute(r,o),In.applyMatrix4(t.matrixWorld),this.expandByPoint(In);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),po.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),po.copy(n.boundingBox)),po.applyMatrix4(t.matrixWorld),this.union(po)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,In),In.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Js),mo.subVectors(this.max,Js),ls.subVectors(t.a,Js),cs.subVectors(t.b,Js),hs.subVectors(t.c,Js),_i.subVectors(cs,ls),yi.subVectors(hs,cs),ki.subVectors(ls,hs);let e=[0,-_i.z,_i.y,0,-yi.z,yi.y,0,-ki.z,ki.y,_i.z,0,-_i.x,yi.z,0,-yi.x,ki.z,0,-ki.x,-_i.y,_i.x,0,-yi.y,yi.x,0,-ki.y,ki.x,0];return!ec(e,ls,cs,hs,mo)||(e=[1,0,0,0,1,0,0,0,1],!ec(e,ls,cs,hs,mo))?!1:(go.crossVectors(_i,yi),e=[go.x,go.y,go.z],ec(e,ls,cs,hs,mo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,In).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(In).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Qn=[new G,new G,new G,new G,new G,new G,new G,new G],In=new G,po=new bn,ls=new G,cs=new G,hs=new G,_i=new G,yi=new G,ki=new G,Js=new G,mo=new G,go=new G,Oi=new G;function ec(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Oi.fromArray(i,r);let a=s.x*Math.abs(Oi.x)+s.y*Math.abs(Oi.y)+s.z*Math.abs(Oi.z),l=t.dot(Oi),h=e.dot(Oi),c=n.dot(Oi);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>a)return!1}return!0}var Ue=new G,xo=new Ut,Cp=0,gn=class extends Bn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zu,this.updateRanges=[],this.gpuType=Tn,this.version=0,this._normalizationScale=t!==void 0?kc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xo.fromBufferAttribute(this,e),xo.applyMatrix3(t),this.setXY(e,xo.x,xo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):xp(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):_p(t,this.array)}};var ur=class extends gn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var dr=class extends gn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Lt=class extends gn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ip=new bn,qs=new G,nc=new G,kn=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ip.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qs.subVectors(t,this.center);let e=qs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(qs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qs.copy(t.center).add(nc)),this.expandByPoint(qs.copy(t.center).sub(nc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Pp=0,vn=new Ht,ic=new Je,us=new G,mn=new bn,js=new bn,Ve=new G,ie=class i extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Wr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pp(t)?dr:ur)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,n){return vn.makeTranslation(t,e,n),this.applyMatrix4(vn),this}scale(t,e,n){return vn.makeScale(t,e,n),this.applyMatrix4(vn),this}lookAt(t){return ic.lookAt(t),ic.updateMatrix(),this.applyMatrix4(ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Lt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];js.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(mn.min,js.min),mn.expandByPoint(Ve),Ve.addVectors(mn.max,js.max),mn.expandByPoint(Ve)):(mn.expandByPoint(js.min),mn.expandByPoint(js.max))}mn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ve));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let h=0,c=a.count;h<c;h++)Ve.fromBufferAttribute(a,h),l&&(us.fromBufferAttribute(t,h),Ve.add(us)),s=Math.max(s,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new gn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],h=new Uint8Array(n.count);for(let U=0;U<n.count;U++)a[U]=new G,l[U]=new G;let c=new G,d=new G,u=new G,f=new Ut,p=new Ut,M=new Ut,x=new G,g=new G;function y(U,E,P){h[U]=h[E]=h[P]=1,c.fromBufferAttribute(n,U),d.fromBufferAttribute(n,E),u.fromBufferAttribute(n,P),f.fromBufferAttribute(r,U),p.fromBufferAttribute(r,E),M.fromBufferAttribute(r,P),d.sub(c),u.sub(c),p.sub(f),M.sub(f);let N=1/(p.x*M.y-M.x*p.y);isFinite(N)&&(x.copy(d).multiplyScalar(M.y).addScaledVector(u,-p.y).multiplyScalar(N),g.copy(u).multiplyScalar(p.x).addScaledVector(d,-M.x).multiplyScalar(N),a[U].add(x),a[E].add(x),a[P].add(x),l[U].add(g),l[E].add(g),l[P].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let U=0,E=w.length;U<E;++U){let P=w[U],N=P.start,F=P.count;for(let R=N,z=N+F;R<z;R+=3)y(t.getX(R+0),t.getX(R+1),t.getX(R+2))}let _=new G,S=new G,b=new G,m=new G;function v(U){b.fromBufferAttribute(s,U),m.copy(b);let E=a[U];_.copy(E),_.sub(b.multiplyScalar(b.dot(E))).normalize(),S.crossVectors(m,E);let N=S.dot(l[U])<0?-1:1;o.setXYZW(U,_.x,_.y,_.z,N)}for(let U=0,E=n.count;U<E;++U)h[U]&&v(U);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new gn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new G,r=new G,o=new G,a=new G,l=new G,h=new G,c=new G,d=new G;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),M=t.getX(u+1),x=t.getX(u+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,x),c.subVectors(o,r),d.subVectors(s,r),c.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,M),h.fromBufferAttribute(n,x),a.add(c),l.add(c),h.add(c),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(x,h.x,h.y,h.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),c.subVectors(o,r),d.subVectors(s,r),c.cross(d),n.setXYZ(u+0,c.x,c.y,c.z),n.setXYZ(u+1,c.x,c.y,c.z),n.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,l){let h=a.array,c=a.itemSize,d=a.normalized,u=new h.constructor(l.length*c),f=0,p=0;for(let M=0,x=l.length;M<x;M++){a.isInterleavedBufferAttribute?f=l[M]*a.data.stride+a.offset:f=l[M]*c;for(let g=0;g<c;g++)u[p++]=h[f++]}return new gn(u,c,d)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],h=t(l,n);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let l=[],h=r[a];for(let c=0,d=h.length;c<d;c++){let u=h[c],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let h=n[l];t.data.attributes[l]=h.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let d=0,u=h.length;d<u;d++){let f=h[d];c.push(f.toJSON(t.data))}c.length>0&&(s[l]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let c=s[h];this.setAttribute(h,c.clone(e))}let r=t.morphAttributes;for(let h in r){let c=[],d=r[h];for(let u=0,f=d.length;u<f;u++)c.push(d[u].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,c=o.length;h<c;h++){let d=o[h];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var sc=new G,Up=new G,Np=new $t,Pn=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=sc.subVectors(n,e).cross(Up.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(sc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Np.getNormalMatrix(t),s=this.coplanarPoint(sc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Fp=0,wn=class extends Bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Wr(),this.name="",this.type="Material",this.blending=Cs,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wc,this.blendDst=Ec,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ou,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bo,this.stencilZFail=Bo,this.stencilZPass=Bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new _t().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Pn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ut().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ut().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Kn=new G,rc=new G,_o=new G,yo=new G,bs=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){rc.copy(t).add(e).multiplyScalar(.5),_o.copy(e).sub(t).normalize(),yo.copy(this.origin).sub(rc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(_o),a=yo.dot(this.direction),l=-yo.dot(_o),h=yo.lengthSq(),c=Math.abs(1-o*o),d,u,f,p;if(c>0)if(d=o*l-a,u=o*a-l,p=r*c,d>=0)if(u>=-p)if(u<=p){let M=1/c;d*=M,u*=M,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+h}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+h;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+h;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+h):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+h):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+h);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(rc).addScaledVector(_o,u),f}intersectSphere(t,e){if(t.radius<0)return null;Kn.subVectors(t.center,this.origin);let n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,h=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,u=this.origin;return h>=0?(n=(t.min.x-u.x)*h,s=(t.max.x-u.x)*h):(n=(t.max.x-u.x)*h,s=(t.min.x-u.x)*h),c>=0?(r=(t.min.y-u.y)*c,o=(t.max.y-u.y)*c):(r=(t.max.y-u.y)*c,o=(t.min.y-u.y)*c),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,h=a.y,c=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,p=e.x-o.x,M=e.y-o.y,x=e.z-o.z,g=n.x-o.x,y=n.y-o.y,w=n.z-o.z,_=Math.abs(l),S=Math.abs(h),b=Math.abs(c),m,v,U,E,P,N,F,R,z,V,J,W;if(_>=S&&_>=b?(U=l,N=d,z=p,W=g,l>=0?(m=h,v=c,E=u,P=f,F=M,R=x,V=y,J=w):(m=c,v=h,E=f,P=u,F=x,R=M,V=w,J=y)):S>=b?(U=h,N=u,z=M,W=y,h>=0?(m=c,v=l,E=f,P=d,F=x,R=p,V=w,J=g):(m=l,v=c,E=d,P=f,F=p,R=x,V=g,J=w)):(U=c,N=f,z=x,W=w,c>=0?(m=l,v=h,E=d,P=u,F=p,R=M,V=g,J=y):(m=h,v=l,E=u,P=d,F=M,R=p,V=y,J=g)),U===0)return null;let Y=m/U,j=v/U,H=1/U,L=E-Y*N,O=P-j*N,B=F-Y*z,C=R-j*z,k=V-Y*W,K=J-j*W,et=k*C-K*B,ot=L*K-O*k,xt=B*O-C*L;if(s){if(et<0||ot<0||xt<0)return null}else if((et<0||ot<0||xt<0)&&(et>0||ot>0||xt>0))return null;let ft=et+ot+xt;if(ft===0)return null;let wt=H*(et*N+ot*z+xt*W);return(ft>0?wt<0:wt>0)?null:this.at(wt/ft,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oe=class extends wn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Ir,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Zh=new Ht,Vi=new bs,Mo=new kn,Yh=new G,vo=new G,So=new G,bo=new G,oc=new G,wo=new G,Xh=new G,Eo=new G,qt=class extends Je{constructor(t=new ie,e=new oe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){wo.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let c=a[l],d=r[l];c!==0&&(oc.fromBufferAttribute(d,t),o?wo.addScaledVector(oc,c):wo.addScaledVector(oc.sub(e),c))}e.add(wo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(r),Vi.copy(t.ray).recast(t.near),!(Mo.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(Mo,Yh)===null||Vi.origin.distanceToSquared(Yh)>(t.far-t.near)**2))&&(Zh.copy(r).invert(),Vi.copy(t.ray).applyMatrix4(Zh),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,M=u.length;p<M;p++){let x=u[p],g=o[x.materialIndex],y=Math.max(x.start,f.start),w=Math.min(a.count,Math.min(x.start+x.count,f.start+f.count));for(let _=y,S=w;_<S;_+=3){let b=a.getX(_),m=a.getX(_+1),v=a.getX(_+2);s=To(this,g,t,n,h,c,d,b,m,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),M=Math.min(a.count,f.start+f.count);for(let x=p,g=M;x<g;x+=3){let y=a.getX(x),w=a.getX(x+1),_=a.getX(x+2);s=To(this,o,t,n,h,c,d,y,w,_),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,M=u.length;p<M;p++){let x=u[p],g=o[x.materialIndex],y=Math.max(x.start,f.start),w=Math.min(l.count,Math.min(x.start+x.count,f.start+f.count));for(let _=y,S=w;_<S;_+=3){let b=_,m=_+1,v=_+2;s=To(this,g,t,n,h,c,d,b,m,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let x=p,g=M;x<g;x+=3){let y=x,w=x+1,_=x+2;s=To(this,o,t,n,h,c,d,y,w,_),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function Dp(i,t,e,n,s,r,o,a){let l;if(t.side===Ce?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ai,a),l===null)return null;Eo.copy(a),Eo.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(Eo);return h<e.near||h>e.far?null:{distance:h,point:Eo.clone(),object:i}}function To(i,t,e,n,s,r,o,a,l,h){i.getVertexPosition(a,vo),i.getVertexPosition(l,So),i.getVertexPosition(h,bo);let c=Dp(i,t,e,n,vo,So,bo,Xh);if(c){let d=new G;vi.getBarycoord(Xh,vo,So,bo,d),s&&(c.uv=vi.getInterpolatedAttribute(s,a,l,h,d,new Ut)),r&&(c.uv1=vi.getInterpolatedAttribute(r,a,l,h,d,new Ut)),o&&(c.normal=vi.getInterpolatedAttribute(o,a,l,h,d,new G),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));let u={a,b:l,c:h,normal:new G,materialIndex:0};vi.getNormal(vo,So,bo,u.normal),c.face=u,c.barycoord=d}return c}var fr=class extends an{constructor(t=null,e=1,n=1,s,r,o,a,l,h=Ne,c=Ne,d,u){super(null,o,a,l,h,c,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pr=class extends gn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ds=new Ht,Jh=new Ht,Ao=[],qh=new bn,Lp=new Ht,Qs=new qt,Ks=new kn,fe=class extends qt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new pr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Lp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new bn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ds),qh.copy(t.boundingBox).applyMatrix4(ds),this.boundingBox.union(qh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new kn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ds),Ks.copy(t.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(Ks)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Qs.geometry=this.geometry,Qs.material=this.material,Qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ks.copy(this.boundingSphere),Ks.applyMatrix4(n),t.ray.intersectsSphere(Ks)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ds),Jh.multiplyMatrices(n,ds),Qs.matrixWorld=Jh,Qs.raycast(t,Ao);for(let o=0,a=Ao.length;o<a;o++){let l=Ao[o];l.instanceId=r,l.object=this,e.push(l)}Ao.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new pr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new fr(new Float32Array(s*this.count),s,this.count,Ra,Tn));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<n.length;h++)o+=n[h];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},zi=new kn,Bp=new Ut(.5,.5),Ro=new G,Si=class{constructor(t=new Pn,e=new Pn,n=new Pn,s=new Pn,r=new Pn,o=new Pn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Sn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],h=r[3],c=r[4],d=r[5],u=r[6],f=r[7],p=r[8],M=r[9],x=r[10],g=r[11],y=r[12],w=r[13],_=r[14],S=r[15];if(s[0].setComponents(h-o,f-c,g-p,S-y).normalize(),s[1].setComponents(h+o,f+c,g+p,S+y).normalize(),s[2].setComponents(h+a,f+d,g+M,S+w).normalize(),s[3].setComponents(h-a,f-d,g-M,S-w).normalize(),n)s[4].setComponents(l,u,x,_).normalize(),s[5].setComponents(h-l,f-u,g-x,S-_).normalize();else if(s[4].setComponents(h-l,f-u,g-x,S-_).normalize(),e===Sn)s[5].setComponents(h+l,f+u,g+x,S+_).normalize();else if(e===ys)s[5].setComponents(l,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(t){zi.center.set(0,0,0);let e=Bp.distanceTo(t.center);return zi.radius=.7071067811865476+e,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ro.x=s.normal.x>0?t.max.x:t.min.x,Ro.y=s.normal.y>0?t.max.y:t.min.y,Ro.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},jh=new Ht,Qo=class i{constructor(){this.coordinateSystem=Sn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];jh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Si),n[s].setFromProjectionMatrix(jh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Si),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Fe=class extends wn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ko=new G,$o=new G,Qh=new Ht,$s=new bs,Co=new kn,ac=new G,Kh=new G,mr=class extends Je{constructor(t=new ie,e=new Fe){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ko.fromBufferAttribute(e,s-1),$o.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ko.distanceTo($o);t.setAttribute("lineDistance",new Lt(n,1))}else Xt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(s),Co.radius+=r,t.ray.intersectsSphere(Co)===!1)return;Qh.copy(s).invert(),$s.copy(t.ray).applyMatrix4(Qh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=this.isLineSegments?2:1,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let M=f,x=p-1;M<x;M+=h){let g=c.getX(M),y=c.getX(M+1),w=Io(this,t,$s,l,g,y,M);w&&e.push(w)}if(this.isLineLoop){let M=c.getX(p-1),x=c.getX(f),g=Io(this,t,$s,l,M,x,p-1);g&&e.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let M=f,x=p-1;M<x;M+=h){let g=Io(this,t,$s,l,M,M+1,M);g&&e.push(g)}if(this.isLineLoop){let M=Io(this,t,$s,l,p-1,f,p-1);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Io(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Ko.fromBufferAttribute(a,s),$o.fromBufferAttribute(a,r),e.distanceSqToSegment(Ko,$o,ac,Kh)>n)return;ac.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo(ac);if(!(h<t.near||h>t.far))return{distance:h,point:Kh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var $h=new G,tu=new G,He=class extends mr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)$h.fromBufferAttribute(e,s),tu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+$h.distanceTo(tu);t.setAttribute("lineDistance",new Lt(n,1))}else Xt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},gr=class extends mr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},bi=class extends wn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},eu=new Ht,gc=new bs,Po=new kn,Uo=new G,Gi=class extends Je{constructor(t=new ie,e=new bi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(s),Po.radius+=r,t.ray.intersectsSphere(Po)===!1)return;eu.copy(s).invert(),gc.copy(t.ray).applyMatrix4(eu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=n.index,d=n.attributes.position;if(h!==null){let u=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let p=u,M=f;p<M;p++){let x=h.getX(p);Uo.fromBufferAttribute(d,x),nu(Uo,x,l,s,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,M=f;p<M;p++)Uo.fromBufferAttribute(d,p),nu(Uo,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function nu(i,t,e,n,s,r,o){let a=gc.distanceSqToPoint(i);if(a<e){let l=new G;gc.closestPointToPoint(i,l),l.applyMatrix4(n);let h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var xr=class extends an{constructor(t=[],e=ji,n,s,r,o,a,l,h,c){super(t,e,n,s,r,o,a,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Hi=class extends an{constructor(t,e,n,s,r,o,a,l,h){super(t,e,n,s,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ei=class extends an{constructor(t,e,n=Nn,s,r,o,a=Ne,l=Ne,h,c=ti,d=1){if(c!==ti&&c!==oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,l,c,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new vs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},_r=class extends ei{constructor(t,e=Nn,n=ji,s,r,o=Ne,a=Ne,l,h=ti){let c={width:t,height:t,depth:1},d=[c,c,c,c,c,c];super(t,t,e,n,s,r,o,a,l,h),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},yr=class extends an{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},cn=class i extends ie{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],h=[],c=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Lt(h,3)),this.setAttribute("normal",new Lt(c,3)),this.setAttribute("uv",new Lt(d,2));function p(M,x,g,y,w,_,S,b,m,v,U){let E=_/m,P=S/v,N=_/2,F=S/2,R=b/2,z=m+1,V=v+1,J=0,W=0,Y=new G;for(let j=0;j<V;j++){let H=j*P-F;for(let L=0;L<z;L++){let O=L*E-N;Y[M]=O*y,Y[x]=H*w,Y[g]=R,h.push(Y.x,Y.y,Y.z),Y[M]=0,Y[x]=0,Y[g]=b>0?1:-1,c.push(Y.x,Y.y,Y.z),d.push(L/m),d.push(1-j/v),J+=1}}for(let j=0;j<v;j++)for(let H=0;H<m;H++){let L=u+H+z*j,O=u+H+z*(j+1),B=u+(H+1)+z*(j+1),C=u+(H+1)+z*j;l.push(L,O,C),l.push(O,B,C),W+=6}a.addGroup(f,W,U),f+=W,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Un=class i extends ie{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],h=new G,c=new Ut;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;h.x=t*Math.cos(f),h.y=t*Math.sin(f),o.push(h.x,h.y,h.z),a.push(0,0,1),c.x=(o[u]/t+1)/2,c.y=(o[u+1]/t+1)/2,l.push(c.x,c.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Lt(o,3)),this.setAttribute("normal",new Lt(a,3)),this.setAttribute("uv",new Lt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Me=class i extends ie{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let c=[],d=[],u=[],f=[],p=0,M=[],x=n/2,g=0;y(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(c),this.setAttribute("position",new Lt(d,3)),this.setAttribute("normal",new Lt(u,3)),this.setAttribute("uv",new Lt(f,2));function y(){let _=new G,S=new G,b=0,m=(e-t)/n;for(let v=0;v<=r;v++){let U=[],E=v/r,P=E*(e-t)+t;for(let N=0;N<=s;N++){let F=N/s,R=F*l+a,z=Math.sin(R),V=Math.cos(R);S.x=P*z,S.y=-E*n+x,S.z=P*V,d.push(S.x,S.y,S.z),_.set(z,m,V).normalize(),u.push(_.x,_.y,_.z),f.push(F,1-E),U.push(p++)}M.push(U)}for(let v=0;v<s;v++)for(let U=0;U<r;U++){let E=M[U][v],P=M[U+1][v],N=M[U+1][v+1],F=M[U][v+1];(t>0||U!==0)&&(c.push(E,P,F),b+=3),(e>0||U!==r-1)&&(c.push(P,N,F),b+=3)}h.addGroup(g,b,0),g+=b}function w(_){let S=p,b=new Ut,m=new G,v=0,U=_===!0?t:e,E=_===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,x*E,0),u.push(0,E,0),f.push(.5,.5),p++;let P=p;for(let N=0;N<=s;N++){let R=N/s*l+a,z=Math.cos(R),V=Math.sin(R);m.x=U*V,m.y=x*E,m.z=U*z,d.push(m.x,m.y,m.z),u.push(0,E,0),b.x=z*.5+.5,b.y=V*.5*E+.5,f.push(b.x,b.y),p++}for(let N=0;N<s;N++){let F=S+N,R=P+N;_===!0?c.push(R,R+1,F):c.push(R+1,R,F),v+=3}h.addGroup(g,v,_===!0?1:2),g+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ws=class i extends Me{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ta=class i extends ie{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),h(n),c(),this.setAttribute("position",new Lt(r,3)),this.setAttribute("normal",new Lt(r.slice(),3)),this.setAttribute("uv",new Lt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let w=new G,_=new G,S=new G;for(let b=0;b<e.length;b+=3)f(e[b+0],w),f(e[b+1],_),f(e[b+2],S),l(w,_,S,y)}function l(y,w,_,S){let b=S+1,m=[];for(let v=0;v<=b;v++){m[v]=[];let U=y.clone().lerp(_,v/b),E=w.clone().lerp(_,v/b),P=b-v;for(let N=0;N<=P;N++)N===0&&v===b?m[v][N]=U:m[v][N]=U.clone().lerp(E,N/P)}for(let v=0;v<b;v++)for(let U=0;U<2*(b-v)-1;U++){let E=Math.floor(U/2);U%2===0?(u(m[v][E+1]),u(m[v+1][E]),u(m[v][E])):(u(m[v][E+1]),u(m[v+1][E+1]),u(m[v+1][E]))}}function h(y){let w=new G;for(let _=0;_<r.length;_+=3)w.x=r[_+0],w.y=r[_+1],w.z=r[_+2],w.normalize().multiplyScalar(y),r[_+0]=w.x,r[_+1]=w.y,r[_+2]=w.z}function c(){let y=new G;for(let w=0;w<r.length;w+=3){y.x=r[w+0],y.y=r[w+1],y.z=r[w+2];let _=x(y)/2/Math.PI+.5,S=g(y)/Math.PI+.5;o.push(_,1-S)}p(),d()}function d(){for(let y=0;y<o.length;y+=6){let w=o[y+0],_=o[y+2],S=o[y+4],b=Math.max(w,_,S),m=Math.min(w,_,S);b>.9&&m<.1&&(w<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),S<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,w){let _=y*3;w.x=t[_+0],w.y=t[_+1],w.z=t[_+2]}function p(){let y=new G,w=new G,_=new G,S=new G,b=new Ut,m=new Ut,v=new Ut;for(let U=0,E=0;U<r.length;U+=9,E+=6){y.set(r[U+0],r[U+1],r[U+2]),w.set(r[U+3],r[U+4],r[U+5]),_.set(r[U+6],r[U+7],r[U+8]),b.set(o[E+0],o[E+1]),m.set(o[E+2],o[E+3]),v.set(o[E+4],o[E+5]),S.copy(y).add(w).add(_).divideScalar(3);let P=x(S);M(b,E+0,y,P),M(m,E+2,w,P),M(v,E+4,_,P)}}function M(y,w,_,S){S<0&&y.x===1&&(o[w]=y.x-1),_.x===0&&_.z===0&&(o[w]=S/2/Math.PI+.5)}function x(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var En=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,h;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),h=n[s]-o,h<0)a=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let c=n[s],u=n[s+1]-c,f=(o-c)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Ut:new G);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new G,s=[],r=[],o=[],a=new G,l=new Ht;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new G)}r[0]=new G,o[0]=new G;let h=Number.MAX_VALUE,c=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);c<=h&&(h=c,n.set(1,0,0)),d<=h&&(h=d,n.set(0,1,0)),u<=h&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ce(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ce(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Mr=class extends En{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Ut){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=h-this.aY;l=u*c-f*d+this.aX,h=u*d+f*c+this.aY}return n.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ea=class extends Mr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Oc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){s(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,c,d){let u=(o-r)/h-(a-r)/(h+c)+(a-o)/c,f=(a-o)/c-(l-o)/(c+d)+(l-a)/d;u*=c,f*=c,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var iu=new G,su=new G,lc=new Oc,cc=new Oc,hc=new Oc,na=class extends En{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new G){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,c;this.closed||a>0?h=s[(a-1)%r]:(su.subVectors(s[0],s[1]).add(s[0]),h=su);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?c=s[(a+2)%r]:(iu.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=iu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(h.distanceToSquared(d),f),M=Math.pow(d.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(c),f);M<1e-4&&(M=1),p<1e-4&&(p=M),x<1e-4&&(x=M),lc.initNonuniformCatmullRom(h.x,d.x,u.x,c.x,p,M,x),cc.initNonuniformCatmullRom(h.y,d.y,u.y,c.y,p,M,x),hc.initNonuniformCatmullRom(h.z,d.z,u.z,c.z,p,M,x)}else this.curveType==="catmullrom"&&(lc.initCatmullRom(h.x,d.x,u.x,c.x,this.tension),cc.initCatmullRom(h.y,d.y,u.y,c.y,this.tension),hc.initCatmullRom(h.z,d.z,u.z,c.z,this.tension));return n.set(lc.calc(l),cc.calc(l),hc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new G().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ru(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function kp(i,t){let e=1-i;return e*e*t}function Op(i,t){return 2*(1-i)*i*t}function Vp(i,t){return i*i*t}function er(i,t,e,n){return kp(i,t)+Op(i,e)+Vp(i,n)}function zp(i,t){let e=1-i;return e*e*e*t}function Gp(i,t){let e=1-i;return 3*e*e*i*t}function Hp(i,t){return 3*(1-i)*i*i*t}function Wp(i,t){return i*i*i*t}function nr(i,t,e,n,s){return zp(i,t)+Gp(i,e)+Hp(i,n)+Wp(i,s)}var ia=class extends En{constructor(t=new Ut,e=new Ut,n=new Ut,s=new Ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Ut){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(nr(t,s.x,r.x,o.x,a.x),nr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},sa=class extends En{constructor(t=new G,e=new G,n=new G,s=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new G){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(nr(t,s.x,r.x,o.x,a.x),nr(t,s.y,r.y,o.y,a.y),nr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ra=class extends En{constructor(t=new Ut,e=new Ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ut){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},oa=class extends En{constructor(t=new G,e=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new G){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new G){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},aa=class extends En{constructor(t=new Ut,e=new Ut,n=new Ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ut){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(er(t,s.x,r.x,o.x),er(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wi=class extends En{constructor(t=new G,e=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new G){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(er(t,s.x,r.x,o.x),er(t,s.y,r.y,o.y),er(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},la=class extends En{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ut){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],h=s[o],c=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(ru(a,l.x,h.x,c.x,d.x),ru(a,l.y,h.y,c.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Ut().fromArray(s))}return this}},Zp=Object.freeze({__proto__:null,ArcCurve:ea,CatmullRomCurve3:na,CubicBezierCurve:ia,CubicBezierCurve3:sa,EllipseCurve:Mr,LineCurve:ra,LineCurve3:oa,QuadraticBezierCurve:aa,QuadraticBezierCurve3:Wi,SplineCurve:la});var ni=class i extends ta{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Zi=class i extends ie{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),h=a+1,c=l+1,d=t/a,u=e/l,f=[],p=[],M=[],x=[];for(let g=0;g<c;g++){let y=g*u-o;for(let w=0;w<h;w++){let _=w*d-r;p.push(_,-y,0),M.push(0,0,1),x.push(w/a),x.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let w=y+h*g,_=y+h*(g+1),S=y+1+h*(g+1),b=y+1+h*g;f.push(w,_,b),f.push(_,S,b)}this.setIndex(f),this.setAttribute("position",new Lt(p,3)),this.setAttribute("normal",new Lt(M,3)),this.setAttribute("uv",new Lt(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ii=class i extends ie{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],h=[],c=[],d=t,u=(e-t)/s,f=new G,p=new Ut;for(let M=0;M<=s;M++){for(let x=0;x<=n;x++){let g=r+x/n*o;f.x=d*Math.cos(g),f.y=d*Math.sin(g),l.push(f.x,f.y,f.z),h.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,c.push(p.x,p.y)}d+=u}for(let M=0;M<s;M++){let x=M*(n+1);for(let g=0;g<n;g++){let y=g+x,w=y,_=y+n+1,S=y+n+2,b=y+1;a.push(w,_,b),a.push(_,S,b)}}this.setIndex(a),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var de=class i extends ie{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),h=0,c=[],d=new G,u=new G,f=[],p=[],M=[],x=[];for(let g=0;g<=n;g++){let y=[],w=g/n,_=o+w*a,S=t*Math.cos(_),b=Math.sqrt(t*t-S*S),m=0;g===0&&o===0?m=.5/e:g===n&&l===Math.PI&&(m=-.5/e);for(let v=0;v<=e;v++){let U=v/e,E=s+U*r;d.x=-b*Math.cos(E),d.y=S,d.z=b*Math.sin(E),p.push(d.x,d.y,d.z),u.copy(d).normalize(),M.push(u.x,u.y,u.z),x.push(U+m,1-w),y.push(h++)}c.push(y)}for(let g=0;g<n;g++)for(let y=0;y<e;y++){let w=c[g][y+1],_=c[g][y],S=c[g+1][y],b=c[g+1][y+1];(g!==0||o>0)&&f.push(w,_,b),(g!==n-1||l<Math.PI)&&f.push(_,S,b)}this.setIndex(f),this.setAttribute("position",new Lt(p,3)),this.setAttribute("normal",new Lt(M,3)),this.setAttribute("uv",new Lt(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var On=class i extends ie{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],h=[],c=[],d=[],u=new G,f=new G,p=new G;for(let M=0;M<=n;M++){let x=o+M/n*a;for(let g=0;g<=s;g++){let y=g/s*r;f.x=(t+e*Math.cos(x))*Math.cos(y),f.y=(t+e*Math.cos(x))*Math.sin(y),f.z=e*Math.sin(x),h.push(f.x,f.y,f.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),p.subVectors(f,u).normalize(),c.push(p.x,p.y,p.z),d.push(g/s),d.push(M/n)}}for(let M=1;M<=n;M++)for(let x=1;x<=s;x++){let g=(s+1)*M+x-1,y=(s+1)*(M-1)+x-1,w=(s+1)*(M-1)+x,_=(s+1)*M+x;l.push(g,y,_),l.push(y,w,_)}this.setIndex(l),this.setAttribute("position",new Lt(h,3)),this.setAttribute("normal",new Lt(c,3)),this.setAttribute("uv",new Lt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var vr=class i extends ie{constructor(t=new Wi(new G(-1,-1,0),new G(-1,1,0),new G(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new G,l=new G,h=new Ut,c=new G,d=[],u=[],f=[],p=[];M(),this.setIndex(p),this.setAttribute("position",new Lt(d,3)),this.setAttribute("normal",new Lt(u,3)),this.setAttribute("uv",new Lt(f,2));function M(){for(let w=0;w<e;w++)x(w);x(r===!1?e:0),y(),g()}function x(w){c=t.getPointAt(w/e,c);let _=o.normals[w],S=o.binormals[w];for(let b=0;b<=s;b++){let m=b/s*Math.PI*2,v=Math.sin(m),U=-Math.cos(m);l.x=U*_.x+v*S.x,l.y=U*_.y+v*S.y,l.z=U*_.z+v*S.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=c.x+n*l.x,a.y=c.y+n*l.y,a.z=c.z+n*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let w=1;w<=e;w++)for(let _=1;_<=s;_++){let S=(s+1)*(w-1)+(_-1),b=(s+1)*w+(_-1),m=(s+1)*w+_,v=(s+1)*(w-1)+_;p.push(S,b,v),p.push(b,m,v)}}function y(){for(let w=0;w<=e;w++)for(let _=0;_<=s;_++)h.x=w/e,h.y=_/s,f.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Zp[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Ki(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(ou(s))s.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(ou(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function en(i){let t={};for(let e=0;e<i.length;e++){let n=Ki(i[e]);for(let s in n)t[s]=n[s]}return t}function ou(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Yp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Vc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var li={clone:Ki,merge:en},Xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,We=class extends wn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xp,this.fragmentShader=Jp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ki(t.uniforms),this.uniformsGroups=Yp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new _t().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ut().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new we().fromArray(s.value);break;case"m3":this.uniforms[n].value=new $t().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ht().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Es=class extends We{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Te=class extends wn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Us,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var un=class extends wn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new _t(16777215),this.specular=new _t(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Us,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Ir,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Yi=class extends wn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Us,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Ir,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ca=class extends wn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ha=class extends wn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function fs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function No(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var wi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ua=class extends wi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fc,endingEnd:fc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case pc:r=t,a=2*e-n;break;case mc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case pc:o=t,l=2*n-e;break;case mc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let h=(n-e)*.5,c=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(l-n),this._offsetPrev=r*c,this._offsetNext=o*c}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,c=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),M=p*p,x=M*p,g=-u*x+2*u*M-u*p,y=(1+u)*x+(-1.5-2*u)*M+(-.5+u)*p+1,w=(-1-f)*x+(1.5+f)*M+.5*p,_=f*x-f*M;for(let S=0;S!==a;++S)r[S]=g*o[c+S]+y*o[h+S]+w*o[l+S]+_*o[d+S];return r}},da=class extends wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,c=(n-e)/(s-e),d=1-c;for(let u=0;u!==a;++u)r[u]=o[h+u]*d+o[l+u]*c;return r}},fa=class extends wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},pa=class extends wi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,c=this.inTangents,d=this.outTangents;if(!c||!d){let p=(n-e)/(s-e),M=1-p;for(let x=0;x!==a;++x)r[x]=o[h+x]*M+o[l+x]*p;return r}let u=a*2,f=t-1;for(let p=0;p!==a;++p){let M=o[h+p],x=o[l+p],g=f*u+p*2,y=d[g],w=d[g+1],_=t*u+p*2,S=c[_],b=c[_+1],m=jp(n,e,y,S,s);r[p]=Ku(m,M,w,b,x)}return r}};function Ku(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function qp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function jp(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Ku(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=qp(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var xn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=fs(e,this.TimeBufferType),this.values=fs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:fs(t.times,Array),values:fs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),No(t.settings)&&(n.settings={inTangents:fs(t.settings.inTangents,Array),outTangents:fs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new fa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new pa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ir:e=this.InterpolantFactoryMethodDiscrete;break;case Yo:e=this.InterpolantFactoryMethodLinear;break;case Lo:e=this.InterpolantFactoryMethodSmooth;break;case dc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ir;case this.InterpolantFactoryMethodLinear:return Yo;case this.InterpolantFactoryMethodSmooth:return Lo;case this.InterpolantFactoryMethodBezier:return dc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;No(this.settings)&&(au(this.settings.inTangents,t),au(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;No(this.settings)&&(lu(this.settings.inTangents,t),lu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Kt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Kt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Kt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&mp(s))for(let a=0,l=s.length;a!==l;++a){let h=s[a];if(isNaN(h)){Kt("KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Lo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,h=t[a],c=t[a+1];if(h!==c&&(a!==1||h!==t[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let M=e[d+p];if(M!==e[u+p]||M!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,h=0;h!==n;++h)e[l+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,No(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function au(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function lu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}xn.prototype.ValueTypeName="";xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=Yo;var Ei=class extends xn{constructor(t,e,n){super(t,e,n)}};Ei.prototype.ValueTypeName="bool";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=ir;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var ma=class extends xn{constructor(t,e,n,s){super(t,e,n,s)}};ma.prototype.ValueTypeName="color";var ga=class extends xn{constructor(t,e,n,s){super(t,e,n,s)}};ga.prototype.ValueTypeName="number";var xa=class extends wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),h=t*a;for(let c=h+a;h!==c;h+=4)Ge.slerpFlat(r,0,o,h-a,o,h,l);return r}},Sr=class extends xn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new xa(this.times,this.values,this.getValueSize(),t)}};Sr.prototype.ValueTypeName="quaternion";Sr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ti=class extends xn{constructor(t,e,n){super(t,e,n)}};Ti.prototype.ValueTypeName="string";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=ir;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var _a=class extends xn{constructor(t,e,n,s){super(t,e,n,s)}};_a.prototype.ValueTypeName="vector";var ya=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(c){a++,r===!1&&s.onStart!==void 0&&s.onStart(c,o,a),r=!0},this.itemEnd=function(c){o++,s.onProgress!==void 0&&s.onProgress(c,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return h.push(c,d),this},this.removeHandler=function(c){let d=h.indexOf(c);return d!==-1&&h.splice(d,2),this},this.getHandler=function(c){for(let d=0,u=h.length;d<u;d+=2){let f=h[d],p=h[d+1];if(f.global&&(f.lastIndex=0),f.test(c))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},$u=new ya,Ma=class{constructor(t){this.manager=t!==void 0?t:$u,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ma.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ts=class extends Je{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var uc=new Ht,cu=new G,hu=new G,br=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Si,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;cu.setFromMatrixPosition(t.matrixWorld),e.position.copy(cu),hu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){uc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(uc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===ys||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+h,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+h,0,0,.5,.5,0,0,0,1),e.multiply(uc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Fo=new G,Do=new Ge,Dn=new G,wr=class extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Fo,Do,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fo,Do,Dn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Fo,Do,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fo,Do,Dn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Mi=new G,uu=new Ut,du=new Ut,tn=class extends wr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Vl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xo*2*Math.atan(Math.tan(Vl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z)}getViewSize(t,e){return this.getViewBounds(t,uu,du),e.subVectors(du,uu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Vl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/h,s*=o.width/l,n*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var xc=class extends br{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}},Er=class extends Ts{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new xc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Xi=class extends wr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},_c=class extends br{constructor(){super(new Xi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Tr=class extends Ts{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new _c}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Ar=class extends Ts{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var ps=-90,ms=1,As=class extends Je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new tn(ps,ms,t,e);s.layers=this.layers,this.add(s);let r=new tn(ps,ms,t,e);r.layers=this.layers,this.add(r);let o=new tn(ps,ms,t,e);o.layers=this.layers,this.add(o);let a=new tn(ps,ms,t,e);a.layers=this.layers,this.add(a);let l=new tn(ps,ms,t,e);l.layers=this.layers,this.add(l);let h=new tn(ps,ms,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let h of e)this.remove(h);if(t===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,h,c]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.mipmapsAutoUpdate=M,t.setRenderTarget(n,5,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},va=class extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},Rr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Qp.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Qp(){this._document.hidden===!1&&this.reset()}var zc="\\[\\]\\.:\\/",Kp=new RegExp("["+zc+"]","g"),Gc="[^"+zc+"]",$p="[^"+zc.replace("\\.","")+"]",tm=/((?:WC+[\/:])*)/.source.replace("WC",Gc),em=/(WCOD+)?/.source.replace("WCOD",$p),nm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gc),im=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gc),sm=new RegExp("^"+tm+em+nm+im+"$"),rm=["material","materials","bones","map"],yc=class{constructor(t,e,n){let s=n||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},be=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Kp,"")}static parseTrackName(t){let e=sm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);rm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Xt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){Kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=e.nodeName;Kt("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=yc;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Zy=new Float32Array(1);var Mc=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function Hc(i,t,e,n){let s=om(n);switch(e){case Pc:return i*t;case Ra:return i*t/s.components*s.byteLength;case Ca:return i*t/s.components*s.byteLength;case Ri:return i*t*2/s.components*s.byteLength;case Ia:return i*t*2/s.components*s.byteLength;case Uc:return i*t*3/s.components*s.byteLength;case Fn:return i*t*4/s.components*s.byteLength;case Pa:return i*t*4/s.components*s.byteLength;case kr:case Or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vr:case zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Na:case Da:return Math.max(i,16)*Math.max(t,8)/4;case Ua:case Fa:return Math.max(i,8)*Math.max(t,8)/2;case La:case Ba:case Oa:case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ka:case Gr:case za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case qa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case $a:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case tl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case el:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case nl:case il:case sl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case rl:case ol:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Hr:case al:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function om(i){switch(i){case dn:case Ac:return{byteLength:1,components:1};case Ps:case Rc:case qe:return{byteLength:2,components:1};case Ta:case Aa:return{byteLength:2,components:4};case Nn:case Ea:case Tn:return{byteLength:4,components:1};case Cc:case Ic:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function vd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function lm(i){let t=new WeakMap;function e(a,l){let h=a.array,c=a.usage,d=h.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,h,c),a.onUploadCallback();let f;if(h instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)f=i.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=i.SHORT;else if(h instanceof Uint32Array)f=i.UNSIGNED_INT;else if(h instanceof Int32Array)f=i.INT;else if(h instanceof Int8Array)f=i.BYTE;else if(h instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,h){let c=l.array,d=l.updateRanges;if(i.bindBuffer(h,a),d.length===0)i.bufferSubData(h,0,c);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],M=d[f];M.start<=p.start+p.count+1?p.count=Math.max(p.count,M.start+M.count-p.start):(++u,d[u]=M)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let M=d[f];i.bufferSubData(h,M.start*c.BYTES_PER_ELEMENT,c,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}var cm=`#ifdef USE_ALPHAHASH
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
}`,ae={alphahash_fragment:cm,alphahash_pars_fragment:hm,alphamap_fragment:um,alphamap_pars_fragment:dm,alphatest_fragment:fm,alphatest_pars_fragment:pm,aomap_fragment:mm,aomap_pars_fragment:gm,batching_pars_vertex:xm,batching_vertex:_m,begin_vertex:ym,beginnormal_vertex:Mm,bsdfs:vm,iridescence_fragment:Sm,bumpmap_pars_fragment:bm,clipping_planes_fragment:wm,clipping_planes_pars_fragment:Em,clipping_planes_pars_vertex:Tm,clipping_planes_vertex:Am,color_fragment:Rm,color_pars_fragment:Cm,color_pars_vertex:Im,color_vertex:Pm,common:Um,defaultnormal_vertex:Nm,displacementmap_pars_vertex:Fm,displacementmap_vertex:Dm,emissivemap_fragment:Lm,emissivemap_pars_fragment:Bm,colorspace_fragment:km,colorspace_pars_fragment:Om,envmap_fragment:Vm,envmap_common_pars_fragment:zm,envmap_pars_fragment:Gm,envmap_pars_vertex:Hm,envmap_physical_pars_fragment:tg,envmap_vertex:Wm,fog_vertex:Zm,fog_pars_vertex:Ym,fog_fragment:Xm,fog_pars_fragment:Jm,gradientmap_pars_fragment:qm,lightmap_pars_fragment:jm,lights_lambert_fragment:Qm,lights_lambert_pars_fragment:Km,lights_pars_begin:$m,lights_toon_fragment:eg,lights_toon_pars_fragment:ng,lights_phong_fragment:ig,lights_phong_pars_fragment:sg,lights_physical_fragment:rg,lights_physical_pars_fragment:og,lights_fragment_begin:ag,lights_fragment_maps:lg,lights_fragment_end:cg,lightprobes_pars_fragment:hg,logdepthbuf_fragment:ug,logdepthbuf_pars_fragment:dg,logdepthbuf_pars_vertex:fg,logdepthbuf_vertex:pg,map_fragment:mg,map_pars_fragment:gg,map_particle_fragment:xg,map_particle_pars_fragment:_g,metalnessmap_fragment:yg,metalnessmap_pars_fragment:Mg,morphinstance_vertex:vg,morphcolor_vertex:Sg,morphnormal_vertex:bg,morphtarget_pars_vertex:wg,morphtarget_vertex:Eg,normal_fragment_begin:Tg,normal_fragment_maps:Ag,normal_pars_fragment:Rg,normal_pars_vertex:Cg,normal_vertex:Ig,normalmap_pars_fragment:Pg,clearcoat_normal_fragment_begin:Ug,clearcoat_normal_fragment_maps:Ng,clearcoat_pars_fragment:Fg,iridescence_pars_fragment:Dg,opaque_fragment:Lg,packing:Bg,premultiplied_alpha_fragment:kg,project_vertex:Og,dithering_fragment:Vg,dithering_pars_fragment:zg,roughnessmap_fragment:Gg,roughnessmap_pars_fragment:Hg,shadowmap_pars_fragment:Wg,shadowmap_pars_vertex:Zg,shadowmap_vertex:Yg,shadowmask_pars_fragment:Xg,skinbase_vertex:Jg,skinning_pars_vertex:qg,skinning_vertex:jg,skinnormal_vertex:Qg,specularmap_fragment:Kg,specularmap_pars_fragment:$g,tonemapping_fragment:t0,tonemapping_pars_fragment:e0,transmission_fragment:n0,transmission_pars_fragment:i0,uv_pars_fragment:s0,uv_pars_vertex:r0,uv_vertex:o0,worldpos_vertex:a0,background_vert:l0,background_frag:c0,backgroundCube_vert:h0,backgroundCube_frag:u0,cube_vert:d0,cube_frag:f0,depth_vert:p0,depth_frag:m0,distance_vert:g0,distance_frag:x0,equirect_vert:_0,equirect_frag:y0,linedashed_vert:M0,linedashed_frag:v0,meshbasic_vert:S0,meshbasic_frag:b0,meshlambert_vert:w0,meshlambert_frag:E0,meshmatcap_vert:T0,meshmatcap_frag:A0,meshnormal_vert:R0,meshnormal_frag:C0,meshphong_vert:I0,meshphong_frag:P0,meshphysical_vert:U0,meshphysical_frag:N0,meshtoon_vert:F0,meshtoon_frag:D0,points_vert:L0,points_frag:B0,shadow_vert:k0,shadow_frag:O0,sprite_vert:V0,sprite_frag:z0},Nt={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Gn={basic:{uniforms:en([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:en([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new _t(0)},envMapIntensity:{value:1}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:en([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:en([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:en([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new _t(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:en([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:en([Nt.points,Nt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:en([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:en([Nt.common,Nt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:en([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:en([Nt.sprite,Nt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:en([Nt.common,Nt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:en([Nt.lights,Nt.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};Gn.physical={uniforms:en([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};var ll={r:0,b:0,g:0},G0=new Ht,Sd=new $t;Sd.set(-1,0,0,0,1,0,0,0,1);function H0(i,t,e,n,s,r){let o=new _t(0),a=s===!0?0:1,l,h,c=null,d=0,u=null;function f(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){let _=y.backgroundBlurriness>0;w=t.get(w,_)}return w}function p(y){let w=!1,_=f(y);_===null?x(o,a):_&&_.isColor&&(x(_,1),w=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(y,w){let _=f(w);_&&_.isCubeTexture?(h===void 0&&(h=new qt(new cn(1,1,1),new We({name:"BackgroundCubeMaterial",uniforms:Ki(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,b,m){this.matrixWorld.copyPosition(m.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(G0.makeRotationFromEuler(w.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Sd),h.material.toneMapped=le.getTransfer(_.colorSpace)!==ge,(c!==_||d!==_.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,c=_,d=_.version,u=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new qt(new Zi(2,2),new We({name:"BackgroundMaterial",uniforms:Ki(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=le.getTransfer(_.colorSpace)!==ge,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(c!==_||d!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,c=_,d=_.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function x(y,w){y.getRGB(ll,Vc(i)),e.buffers.color.setClear(ll.r,ll.g,ll.b,w,r)}function g(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,w=1){o.set(y),a=w,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,x(o,a)},render:p,addToRenderList:M,dispose:g}}function W0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(P,N,F,R,z){let V=!1,J=d(P,R,F,N);r!==J&&(r=J,h(r.object)),V=f(P,R,F,z),V&&p(P,R,F,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,_(P,N,F,R),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function h(P){return i.bindVertexArray(P)}function c(P){return i.deleteVertexArray(P)}function d(P,N,F,R){let z=R.wireframe===!0,V=n[N.id];V===void 0&&(V={},n[N.id]=V);let J=P.isInstancedMesh===!0?P.id:0,W=V[J];W===void 0&&(W={},V[J]=W);let Y=W[F.id];Y===void 0&&(Y={},W[F.id]=Y);let j=Y[z];return j===void 0&&(j=u(l()),Y[z]=j),j}function u(P){let N=[],F=[],R=[];for(let z=0;z<e;z++)N[z]=0,F[z]=0,R[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:F,attributeDivisors:R,object:P,attributes:{},index:null}}function f(P,N,F,R){let z=r.attributes,V=N.attributes,J=0,W=F.getAttributes();for(let Y in W)if(W[Y].location>=0){let H=z[Y],L=V[Y];if(L===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(L=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(L=P.instanceColor)),H===void 0||H.attribute!==L||L&&H.data!==L.data)return!0;J++}return r.attributesNum!==J||r.index!==R}function p(P,N,F,R){let z={},V=N.attributes,J=0,W=F.getAttributes();for(let Y in W)if(W[Y].location>=0){let H=V[Y];H===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(H=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(H=P.instanceColor));let L={};L.attribute=H,H&&H.data&&(L.data=H.data),z[Y]=L,J++}r.attributes=z,r.attributesNum=J,r.index=R}function M(){let P=r.newAttributes;for(let N=0,F=P.length;N<F;N++)P[N]=0}function x(P){g(P,0)}function g(P,N){let F=r.newAttributes,R=r.enabledAttributes,z=r.attributeDivisors;F[P]=1,R[P]===0&&(i.enableVertexAttribArray(P),R[P]=1),z[P]!==N&&(i.vertexAttribDivisor(P,N),z[P]=N)}function y(){let P=r.newAttributes,N=r.enabledAttributes;for(let F=0,R=N.length;F<R;F++)N[F]!==P[F]&&(i.disableVertexAttribArray(F),N[F]=0)}function w(P,N,F,R,z,V,J){J===!0?i.vertexAttribIPointer(P,N,F,z,V):i.vertexAttribPointer(P,N,F,R,z,V)}function _(P,N,F,R){M();let z=R.attributes,V=F.getAttributes(),J=N.defaultAttributeValues;for(let W in V){let Y=V[W];if(Y.location>=0){let j=z[W];if(j===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(j=P.instanceColor)),j!==void 0){let H=j.normalized,L=j.itemSize,O=t.get(j);if(O===void 0)continue;let B=O.buffer,C=O.type,k=O.bytesPerElement,K=C===i.INT||C===i.UNSIGNED_INT||j.gpuType===Ea;if(j.isInterleavedBufferAttribute){let et=j.data,ot=et.isInterleavedBuffer===!0?et.stride:et.itemSize,xt=j.offset;if(et.isInstancedInterleavedBuffer||et.isInstancedBufferAttribute){for(let ft=0;ft<Y.locationSize;ft++)g(Y.location+ft,et.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let ft=0;ft<Y.locationSize;ft++)x(Y.location+ft);i.bindBuffer(i.ARRAY_BUFFER,B);for(let ft=0;ft<Y.locationSize;ft++)w(Y.location+ft,L/Y.locationSize,C,H,ot*k,(xt+L/Y.locationSize*ft)*k,K)}else{if(j.isInstancedBufferAttribute){for(let et=0;et<Y.locationSize;et++)g(Y.location+et,j.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let et=0;et<Y.locationSize;et++)x(Y.location+et);i.bindBuffer(i.ARRAY_BUFFER,B);for(let et=0;et<Y.locationSize;et++)w(Y.location+et,L/Y.locationSize,C,H,L*k,L/Y.locationSize*et*k,K)}}else if(J!==void 0){let H=J[W];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(Y.location,H);break;case 3:i.vertexAttrib3fv(Y.location,H);break;case 4:i.vertexAttrib4fv(Y.location,H);break;default:i.vertexAttrib1fv(Y.location,H)}}}}y()}function S(){U();for(let P in n){let N=n[P];for(let F in N){let R=N[F];for(let z in R){let V=R[z];for(let J in V)c(V[J].object),delete V[J];delete R[z]}}delete n[P]}}function b(P){if(n[P.id]===void 0)return;let N=n[P.id];for(let F in N){let R=N[F];for(let z in R){let V=R[z];for(let J in V)c(V[J].object),delete V[J];delete R[z]}}delete n[P.id]}function m(P){for(let N in n){let F=n[N];for(let R in F){let z=F[R];if(z[P.id]===void 0)continue;let V=z[P.id];for(let J in V)c(V[J].object),delete V[J];delete z[P.id]}}}function v(P){for(let N in n){let F=n[N],R=P.isInstancedMesh===!0?P.id:0,z=F[R];if(z!==void 0){for(let V in z){let J=z[V];for(let W in J)c(J[W].object),delete J[W];delete z[V]}delete F[R],Object.keys(F).length===0&&delete n[N]}}}function U(){E(),o=!0,r!==s&&(r=s,h(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:E,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:m,initAttributes:M,enableAttribute:x,disableUnusedAttributes:y}}function Z0(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,c){c!==0&&(i.drawArraysInstanced(n,l,h,c),e.update(h,n,c))}function a(l,h,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,c);let u=0;for(let f=0;f<c;f++)u+=h[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Y0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let m=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(m.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(m){return!(m!==Fn&&n.convert(m)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(m){let v=m===qe&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(m!==dn&&m!==Tn&&!v&&n.convert(m)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(m){if(m==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";m="mediump"}return m==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",c=l(h);c!==h&&(Xt("WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Xt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:M,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:_,maxSamples:S,samples:b}}function X0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Pn,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=c(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,M=d.clipIntersection,x=d.clipShadows,g=i.get(d);if(!s||p===null||p.length===0||r&&!x)r?c(null):h();else{let y=r?0:n,w=y*4,_=g.clippingState||null;l.value=_,_=c(p,u,w,f);for(let S=0;S!==w;++S)_[S]=e[S];g.clippingState=_,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(d,u,f,p){let M=d!==null?d.length:0,x=null;if(M!==0){if(x=l.value,p!==!0||x===null){let g=f+M*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(x===null||x.length<g)&&(x=new Float32Array(g));for(let w=0,_=f;w!==M;++w,_+=4)o.copy(d[w]).applyMatrix4(y,a),o.normal.toArray(x,_),x[_+3]=o.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,x}}var Xr=class extends De{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new xr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new cn(5,5,5),r=new We({name:"CubemapFromEquirect",uniforms:Ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ce,blending:si});r.uniforms.tEquirect.value=e;let o=new qt(s,r),a=e.minFilter;return e.minFilter===ri&&(e.minFilter=on),new As(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},td=256,J0=3,q0=20,bd=256,wd=16,j0=3,Q0=new G,K0=new _t,hl=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new As(1,10,null),this._boxMesh=new qt(new cn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Q0}=r,l=this._renderer;this._setSize(o);let h=this._allocateTarget(),c=this._getSourceTarget(!0);e>0&&(c.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,M=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(t.background=l.getClearColor(K0));let x=new As(n,s,c);return x.position.copy(a),x.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=p,t.background=M,e>0&&(c.texture.mipmapsAutoUpdate=!0,this._blur(h,e)),this._applyPMREM(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(td,ju(t))}_fromTexture(t,e){t.mapping===ji||t.mapping===Is?this._setSize(t.image.length===0?td:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=ed(t,!1,!1),n=Math.log2(t)-J0;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=ed(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ji||t.mapping===Is?(this._cubemapMaterial===null&&(this._cubemapMaterial=id()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=nd()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=$0(),this._integrationMaterial=tx());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/wd);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-j0)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(bd*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=ex());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function ed(i,t,e){return new Xr(i,{minFilter:ri,generateMipmaps:t,type:qe,colorSpace:sr,depthBuffer:e})}function Jr(i,t,e){return new We({name:i,uniforms:t,vertexShader:ae.cube_vert,fragmentShader:e,side:Ce,blending:si,depthTest:!1,depthWrite:!1})}function $0(){return Jr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${bd}u

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
	`)}function tx(){return Jr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:wd}},`

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
	`)}function nd(){return Jr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function id(){return Jr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function nx(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Sa||f===ba)if(t.has(u)){let p=t.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let M=new Xr(p.height);return M.fromEquirectangularTexture(i,u),t.set(u,M),u.addEventListener("dispose",h),a(M.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,p=f===Sa||f===ba,M=f===ji||f===Is;if(p||M){let x=e.get(u),g=x!==void 0?x.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new hl(i)),x=p?n.fromEquirectangular(u,x):n.fromCubemap(u,x),x.texture.pmremVersion=u.pmremVersion,e.set(u,x),x.texture;if(x!==void 0)return x.texture;{let y=u.image;return p&&y&&y.height>0||M&&y&&l(y)?(n===null&&(n=new hl(i)),x=p?n.fromEquirectangular(u):n.fromCubemap(u),x.texture.pmremVersion=u.pmremVersion,e.set(u,x),u.addEventListener("dispose",c),x.texture):null}}}return u}function a(u,f){return f===Sa?u.mapping=ji:f===ba&&(u.mapping=Is),u}function l(u){let f=0,p=6;for(let M=0;M<p;M++)u[M]!==void 0&&f++;return f===p}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function ix(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&tr("WebGLRenderer: "+n+" extension not supported."),s}}}function sx(i,t,e,n){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let x in p.attributes)t.remove(p.attributes[x]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let M=r.get(p);M&&(t.remove(M),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function h(p,M){return s[M.id]!==void 0||(M.addEventListener("dispose",a),s[M.id]=new WeakRef(M),o.register(M,M.id,M),e.memory.geometries++),M}function c(p){let M=p.attributes;for(let x in M)t.update(M[x],i.ARRAY_BUFFER)}function d(p){let M=p.index,x=p.attributes.position,g=0;if(x===void 0)return;let y=M!==null?M.array.length:x.array.length/3-1,w=x.count>=65535?dr:ur,_=new w(Math.ceil(y/3)*6,1),S=_.array;if(M!==null){let m=M.array;g=M.version;for(let v=0,U=0;v<y;v+=3){let E=m[v+0],P=m[v+1],N=m[v+2];S[U++]=E,S[U++]=P,S[U++]=P,S[U++]=N,S[U++]=N,S[U++]=E}}else{g=x.version;for(let m=0,v=0;m<y;m+=3){let U=m+0,E=m+1,P=m+2;S[v++]=U,S[v++]=E,S[v++]=E,S[v++]=P,S[v++]=P,S[v++]=U}}_.version=g;let b=r.get(p);b&&t.remove(b),r.set(p,_)}function u(p){let M=r.get(p);if(M){let x=p.index;x!==null&&M.version<x.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in s){let M=s[p].deref();M!==void 0&&l(M)}}return{get:h,update:c,getWireframeAttribute:u,dispose:f}}function rx(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function h(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function c(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let M=0;for(let x=0;x<f;x++)M+=u[x];e.update(M,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=c}function ox(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Kt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ax(i,t,e){let n=new WeakMap,s=new we;function r(o,a,l){let h=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0,u=n.get(a);if(u===void 0||u.count!==d){let U=function(){m.dispose(),n.delete(a),a.removeEventListener("dispose",U)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],w=0;f===!0&&(w=1),p===!0&&(w=2),M===!0&&(w=3);let _=a.attributes.position.count*w,S=1;_>t.maxTextureSize&&(S=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let b=new Float32Array(_*S*4*d),m=new ar(b,_,S,d);m.type=Tn,m.needsUpdate=!0;let v=w*4;for(let E=0;E<d;E++){let P=x[E],N=g[E],F=y[E],R=_*S*4*E;for(let z=0;z<P.count;z++){let V=z*v;f===!0&&(s.fromBufferAttribute(P,z),b[R+V+0]=s.x,b[R+V+1]=s.y,b[R+V+2]=s.z,b[R+V+3]=0),p===!0&&(s.fromBufferAttribute(N,z),b[R+V+4]=s.x,b[R+V+5]=s.y,b[R+V+6]=s.z,b[R+V+7]=0),M===!0&&(s.fromBufferAttribute(F,z),b[R+V+8]=s.x,b[R+V+9]=s.y,b[R+V+10]=s.z,b[R+V+11]=F.itemSize===4?s.w:1)}}u={count:d,texture:m,size:new Ut(_,S)},n.set(a,u),a.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let M=0;M<h.length;M++)f+=h[M];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function lx(i,t,e,n,s){let r=new WeakMap;function o(h){let c=s.render.frame,d=h.geometry,u=t.get(h,d);if(r.get(u)!==c&&(t.update(u),r.set(u,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==c&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,c))),h.isSkinnedMesh){let f=h.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function a(){r=new WeakMap}function l(h){let c=h.target;c.removeEventListener("dispose",l),n.releaseStatesOfObject(c),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:a}}var cx={[Pr]:"LINEAR_TONE_MAPPING",[Ur]:"REINHARD_TONE_MAPPING",[Nr]:"CINEON_TONE_MAPPING",[qi]:"ACES_FILMIC_TONE_MAPPING",[Dr]:"AGX_TONE_MAPPING",[Lr]:"NEUTRAL_TONE_MAPPING",[Fr]:"CUSTOM_TONE_MAPPING"};function hx(i,t,e,n,s,r){let o=new De(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,h=null,c=new ie;c.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Lt([0,2,0,0,2,0],2));let d=new Es({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new qt(c,d),f=new Xi(-1,1,1,-1,0,1),p=null,M=null,x=!1,g,y=null,w=[],_=!1;this.setSize=function(S,b){o.setSize(S,b),a!==null&&a.setSize(S,b),l!==null&&l.setSize(S,b);for(let m=0;m<w.length;m++){let v=w[m];v.setSize&&v.setSize(S,b)}},this.setEffects=function(S){w=S,_=w.length>0&&w[0].isRenderPass===!0;let b=o.width,m=o.height;w.length>0&&a===null&&(a=new De(b,m,{type:qe,depthBuffer:!1,stencilBuffer:!1}),l=new De(b,m,{type:qe,depthBuffer:!1,stencilBuffer:!1}));let v=s===!0&&w.some(U=>U.needsDepthTexture===!0);v!==(o.depthTexture!==null)&&(v===!0&&h===null&&(h=new ei(b,m),r===!0&&(h.format=oi,h.type=Qi)),o.dispose(),o.depthTexture=v?h:null,o.resolveDepthBuffer=v,o.storeMultisampledDepthBuffer=v);for(let U=0;U<w.length;U++){let E=w[U];E.setSize&&E.setSize(b,m),v&&E.needsDepthTexture===!0&&E.setDepthTexture&&E.setDepthTexture(h)}},this.begin=function(S,b){if(x||S.toneMapping===Vn&&w.length===0)return!1;if(y=b,b!==null){let m=b.width,v=b.height;(o.width!==m||o.height!==v)&&this.setSize(m,v)}return _===!1&&S.setRenderTarget(o),g=S.toneMapping,S.toneMapping=Vn,!0},this.hasRenderPass=function(){return _},this.end=function(S,b){S.toneMapping=g,x=!0;let m=o,v=a;for(let U=0;U<w.length;U++){let E=w[U];E.enabled!==!1&&(E.render(S,v,m,b),E.needsSwap!==!1&&(m=v,v=v===a?l:a))}if(p!==S.outputColorSpace||M!==S.toneMapping){p=S.outputColorSpace,M=S.toneMapping,d.defines={},le.getTransfer(p)===ge&&(d.defines.SRGB_TRANSFER="");let U=cx[M];U&&(d.defines[U]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=m.texture,S.setRenderTarget(y),S.render(u,f),y=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}var Ed=new an,Td=new ei(1,1),Ad=new _r(1),Rd=new ar,Cd=new jo,Id=new xr,sd=[],rd=[],od=new Float32Array(16),ad=new Float32Array(9),ld=new Float32Array(4);function Fs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=sd[s];if(r===void 0&&(r=new Float32Array(s),sd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function dl(i,t){let e=rd[t];e===void 0&&(e=new Int32Array(t),rd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ux(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function dx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function fx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function px(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function mx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Le(e,n))return;ld.set(n),i.uniformMatrix2fv(this.addr,!1,ld),Be(e,n)}}function gx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Le(e,n))return;ad.set(n),i.uniformMatrix3fv(this.addr,!1,ad),Be(e,n)}}function xx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Le(e,n))return;od.set(n),i.uniformMatrix4fv(this.addr,!1,od),Be(e,n)}}function _x(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function yx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function Mx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function vx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function Sx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function bx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function wx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function Ex(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function fl(i){return i.version===0&&(i.compareFunction=Dc,i.needsUpdate=!0),i}function Tx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=fl(Td):r=Ed,e.setTexture2D(t||r,s)}function Ax(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Cd,s)}function Rx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=fl(Ad):r=Id,e.setTextureCube(t||r,s)}function Cx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Rd,s)}function Ix(i){switch(i){case 5126:return ux;case 35664:return dx;case 35665:return fx;case 35666:return px;case 35674:return mx;case 35675:return gx;case 35676:return xx;case 5124:case 35670:return _x;case 35667:case 35671:return yx;case 35668:case 35672:return Mx;case 35669:case 35673:return vx;case 5125:return Sx;case 36294:return bx;case 36295:return wx;case 36296:return Ex;case 35678:case 36198:case 36298:case 36306:case 35682:return Tx;case 35679:case 36299:case 36307:return Ax;case 35680:case 36300:case 36308:case 36293:return Rx;case 36289:case 36303:case 36311:case 36292:return Cx}}function Px(i,t){i.uniform1fv(this.addr,t)}function Ux(i,t){let e=Fs(t,this.size,2);i.uniform2fv(this.addr,e)}function Nx(i,t){let e=Fs(t,this.size,3);i.uniform3fv(this.addr,e)}function Fx(i,t){let e=Fs(t,this.size,4);i.uniform4fv(this.addr,e)}function Dx(i,t){let e=Fs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Lx(i,t){let e=Fs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Bx(i,t){let e=Fs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function kx(i,t){i.uniform1iv(this.addr,t)}function Ox(i,t){i.uniform2iv(this.addr,t)}function Vx(i,t){i.uniform3iv(this.addr,t)}function zx(i,t){i.uniform4iv(this.addr,t)}function Gx(i,t){i.uniform1uiv(this.addr,t)}function Hx(i,t){i.uniform2uiv(this.addr,t)}function Wx(i,t){i.uniform3uiv(this.addr,t)}function Zx(i,t){i.uniform4uiv(this.addr,t)}function Yx(i,t,e){let n=this.cache,s=t.length,r=dl(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=fl(Td):o=Ed;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Xx(i,t,e){let n=this.cache,s=t.length,r=dl(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Cd,r[o])}function Jx(i,t,e){let n=this.cache,s=t.length,r=dl(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=fl(Ad):o=Id;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function qx(i,t,e){let n=this.cache,s=t.length,r=dl(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Rd,r[o])}function jx(i){switch(i){case 5126:return Px;case 35664:return Ux;case 35665:return Nx;case 35666:return Fx;case 35674:return Dx;case 35675:return Lx;case 35676:return Bx;case 5124:case 35670:return kx;case 35667:case 35671:return Ox;case 35668:case 35672:return Vx;case 35669:case 35673:return zx;case 5125:return Gx;case 36294:return Hx;case 36295:return Wx;case 36296:return Zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Yx;case 35679:case 36299:case 36307:return Xx;case 35680:case 36300:case 36308:case 36293:return Jx;case 36289:case 36303:case 36311:case 36292:return qx}}var Yc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ix(e.type)}},Xc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jx(e.type)}},Jc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Wc=/(\w+)(\])?(\[|\.)?/g;function cd(i,t){i.seq.push(t),i.map[t.id]=t}function Qx(i,t,e){let n=i.name,s=n.length;for(Wc.lastIndex=0;;){let r=Wc.exec(n),o=Wc.lastIndex,a=r[1],l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){cd(e,h===void 0?new Yc(a,i,t):new Xc(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Jc(a),cd(e,d)),e=d}}}var Ns=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Qx(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function hd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Kx=37297,$x=0;function t_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ud=new $t;function e_(i){le._getMatrix(ud,le.workingColorSpace,i);let t=`mat3( ${ud.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(i)){case rr:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function dd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+t_(i.getShaderSource(t),a)}else return r}function n_(i,t){let e=e_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var i_={[Pr]:"Linear",[Ur]:"Reinhard",[Nr]:"Cineon",[qi]:"ACESFilmic",[Dr]:"AgX",[Lr]:"Neutral",[Fr]:"Custom"};function s_(i,t){let e=i_[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var cl=new G;function r_(){le.getLuminanceCoefficients(cl);let i=cl.x.toFixed(4),t=cl.y.toFixed(4),e=cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function a_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function l_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Yr(i){return i!==""}function fd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function pd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var c_=/^[ \t]*#include +<([\w\d./]+)>/gm;function qc(i){return i.replace(c_,h_)}function h_(i,t){let e=ae[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return qc(e)}var u_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function md(i){return i.replace(u_,d_)}function d_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var f_={[Cr]:"SHADOWMAP_TYPE_PCF",[Rs]:"SHADOWMAP_TYPE_VSM"};function p_(i){return f_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var m_={[Is]:"ENVMAP_MODE_REFRACTION"};function g_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":m_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var x_={[Ir]:"ENVMAP_BLENDING_MULTIPLY",[Fu]:"ENVMAP_BLENDING_MIX",[Du]:"ENVMAP_BLENDING_ADD"};function __(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":x_[i.combine]||"ENVMAP_BLENDING_NONE"}function y_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=p_(e),h=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",c=g_(e),d=__(e),u=o_(e),f=a_(r),p=s.createProgram(),M,x,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Yr).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Yr).join(`
`),x.length>0&&(x+=`
`)):(M=[gd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),x=[gd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vn?"#define TONE_MAPPING":"",e.toneMapping!==Vn?ae.tonemapping_pars_fragment:"",e.toneMapping!==Vn?s_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,n_("linearToOutputTexel",e.outputColorSpace),r_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Yr).join(`
`)),o=qc(o),o=fd(o,e),o=pd(o,e),a=qc(a),a=fd(a,e),a=pd(a,e),o=md(o),a=md(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",e.glslVersion===Lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let y=g+M+o,w=g+x+a,_=hd(s,s.VERTEX_SHADER,y),S=hd(s,s.FRAGMENT_SHADER,w);s.attachShader(p,_),s.attachShader(p,S),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function b(E){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(p)||"",N=s.getShaderInfoLog(_)||"",F=s.getShaderInfoLog(S)||"",R=P.trim(),z=N.trim(),V=F.trim(),J=!0,W=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,_,S);else{let Y=dd(s,_,"vertex"),j=dd(s,S,"fragment");Kt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+R+`
`+Y+`
`+j)}else R!==""?Xt("WebGLProgram: Program Info Log:",R):(z===""||V==="")&&(W=!1);W&&(E.diagnostics={runnable:J,programLog:R,vertexShader:{log:z,prefix:M},fragmentShader:{log:V,prefix:x}})}s.deleteShader(_),s.deleteShader(S),m=new Ns(s,p),v=l_(s,p)}let m;this.getUniforms=function(){return m===void 0&&b(this),m};let v;this.getAttributes=function(){return v===void 0&&b(this),v};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(p,Kx)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$x++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=_,this.fragmentShader=S,this}var M_=0,jc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Qc(t),e.set(t,n)),n}},Qc=class{constructor(t){this.id=M_++,this.code=t,this.usedTimes=0}};function v_(i){return i===Ri||i===Gr||i===Hr}function S_(i,t,e,n,s,r){let o=new lr,a=new jc,l=new Set,h=[],c=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(m){return l.add(m),m===0?"uv":`uv${m}`}function p(m,v,U,E,P,N){let F=E.fog,R=P.geometry,z=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?E.environment:null,V=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,J=t.get(m.envMap||z,V),W=u[m.type],Y=n.precision;m.precision!==null&&(Y=n.getMaxPrecision(m.precision),Y!==m.precision&&Xt("WebGLProgram.getParameters:",m.precision,"not supported, using",Y,"instead."));let j=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,H=j!==void 0?j.length:0,L=0;R.morphAttributes.position!==void 0&&(L=1),R.morphAttributes.normal!==void 0&&(L=2),R.morphAttributes.color!==void 0&&(L=3);let O,B,C,k;if(W){let Pt=Gn[W];O=Pt.vertexShader,B=Pt.fragmentShader}else{O=m.vertexShader,B=m.fragmentShader;let Pt=a.getVertexShaderStage(m),_e=a.getFragmentShaderStage(m);a.update(m,Pt,_e),C=Pt.id,k=_e.id}let K=i.getRenderTarget(),et=i.state.buffers.depth.getReversed(),ot=P.isInstancedMesh===!0,xt=P.isBatchedMesh===!0,ft=!!m.map,wt=!!m.matcap,Mt=!!J,tt=Mt&&J.isPMREMTexture===!0,It=!!m.aoMap,Dt=!!m.lightMap,Yt=!!m.bumpMap&&m.wireframe===!1,Wt=!!m.normalMap,Bt=!!m.displacementMap,Qt=!!m.emissiveMap,ee=!!m.metalnessMap,Ae=!!m.roughnessMap,Se=m.anisotropy>0,q=m.clearcoat>0,Q=m.diffuseRoughness>0,St=m.dispersion>0,Jt=m.retroreflectivity>0,ut=m.iridescence>0,ne=m.sheen>0,Ct=m.transmission>0,at=Se&&!!m.anisotropyMap,I=q&&!!m.clearcoatMap,T=q&&!!m.clearcoatNormalMap,D=q&&!!m.clearcoatRoughnessMap,$=Q&&!!m.diffuseRoughnessMap,nt=ut&&!!m.iridescenceMap,ct=ut&&!!m.iridescenceThicknessMap,gt=ne&&!!m.sheenColorMap,rt=ne&&!!m.sheenRoughnessMap,dt=!!m.specularMap,vt=!!m.specularColorMap,Z=!!m.specularIntensityMap,pt=Ct&&!!m.transmissionMap,ht=Ct&&!!m.thicknessMap,Et=!!m.gradientMap,bt=!!m.alphaMap,Tt=m.alphaTest>0,Gt=!!m.alphaHash,re=!!m.extensions,yt=Vn;m.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(yt=i.toneMapping);let Zt=tt?J.isCompressedCubeTexture?J.image[0].mipmaps:J.mipmaps:null,se={shaderID:W,shaderType:m.type,shaderName:m.name,vertexShader:O,fragmentShader:B,defines:m.defines,customVertexShaderID:C,customFragmentShaderID:k,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:Y,batching:xt,batchingColor:xt&&P._colorsTexture!==null,instancing:ot,instancingColor:ot&&P.instanceColor!==null,instancingMorph:ot&&P.morphTexture!==null,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:ft,matcap:wt,envMap:Mt,envMapMode:Mt&&J.mapping,envMapPMREM:tt,envMapMaxLod:tt?Zt.length-1:null,envMapSize:tt?Zt[0].width:null,aoMap:It,lightMap:Dt,bumpMap:Yt,normalMap:Wt,displacementMap:Bt,emissiveMap:Qt,normalMapObjectSpace:Wt&&m.normalMapType===ku,normalMapTangentSpace:Wt&&m.normalMapType===Us,packedNormalMap:Wt&&m.normalMapType===Us&&v_(m.normalMap.format),metalnessMap:ee,roughnessMap:Ae,anisotropy:Se,anisotropyMap:at,clearcoat:q,clearcoatMap:I,clearcoatNormalMap:T,clearcoatRoughnessMap:D,diffuseRoughness:Q,diffuseRoughnessMap:$,dispersion:St,retroreflection:Jt,iridescence:ut,iridescenceMap:nt,iridescenceThicknessMap:ct,sheen:ne,sheenColorMap:gt,sheenRoughnessMap:rt,specularMap:dt,specularColorMap:vt,specularIntensityMap:Z,transmission:Ct,transmissionMap:pt,thicknessMap:ht,gradientMap:Et,opaque:m.transparent===!1&&m.blending===Cs&&m.alphaToCoverage===!1,alphaMap:bt,alphaTest:Tt,alphaHash:Gt,combine:m.combine,mapUv:ft&&f(m.map.channel),aoMapUv:It&&f(m.aoMap.channel),lightMapUv:Dt&&f(m.lightMap.channel),bumpMapUv:Yt&&f(m.bumpMap.channel),normalMapUv:Wt&&f(m.normalMap.channel),displacementMapUv:Bt&&f(m.displacementMap.channel),emissiveMapUv:Qt&&f(m.emissiveMap.channel),metalnessMapUv:ee&&f(m.metalnessMap.channel),roughnessMapUv:Ae&&f(m.roughnessMap.channel),anisotropyMapUv:at&&f(m.anisotropyMap.channel),clearcoatMapUv:I&&f(m.clearcoatMap.channel),clearcoatNormalMapUv:T&&f(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:D&&f(m.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:$&&f(m.diffuseRoughnessMap.channel),iridescenceMapUv:nt&&f(m.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&f(m.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&f(m.sheenColorMap.channel),sheenRoughnessMapUv:rt&&f(m.sheenRoughnessMap.channel),specularMapUv:dt&&f(m.specularMap.channel),specularColorMapUv:vt&&f(m.specularColorMap.channel),specularIntensityMapUv:Z&&f(m.specularIntensityMap.channel),transmissionMapUv:pt&&f(m.transmissionMap.channel),thicknessMapUv:ht&&f(m.thicknessMap.channel),alphaMapUv:bt&&f(m.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(Wt||Se),vertexNormals:!!R.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!R.attributes.uv&&(ft||bt),fog:!!F,useFog:m.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||R.attributes.normal===void 0&&Wt===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:et,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:L,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:N.filter(Pt=>Pt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:yt,decodeVideoTexture:ft&&m.map.isVideoTexture===!0&&le.getTransfer(m.map.colorSpace)===ge,decodeVideoTextureEmissive:Qt&&m.emissiveMap.isVideoTexture===!0&&le.getTransfer(m.emissiveMap.colorSpace)===ge,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===me,flipSided:m.side===Ce,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:re&&m.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&m.extensions.multiDraw===!0||xt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return se.vertexUv1s=l.has(1),se.vertexUv2s=l.has(2),se.vertexUv3s=l.has(3),l.clear(),se}function M(m){let v=[];if(m.shaderID?v.push(m.shaderID):(v.push(m.customVertexShaderID),v.push(m.customFragmentShaderID)),m.defines!==void 0)for(let U in m.defines)v.push(U),v.push(m.defines[U]);return m.isRawShaderMaterial===!1&&(x(v,m),g(v,m),v.push(i.outputColorSpace)),v.push(m.customProgramCacheKey),v.join()}function x(m,v){m.push(v.precision),m.push(v.outputColorSpace),m.push(v.envMapMode),m.push(v.envMapPMREM),m.push(v.envMapMaxLod),m.push(v.envMapSize),m.push(v.mapUv),m.push(v.alphaMapUv),m.push(v.lightMapUv),m.push(v.aoMapUv),m.push(v.bumpMapUv),m.push(v.normalMapUv),m.push(v.displacementMapUv),m.push(v.emissiveMapUv),m.push(v.metalnessMapUv),m.push(v.roughnessMapUv),m.push(v.anisotropyMapUv),m.push(v.clearcoatMapUv),m.push(v.clearcoatNormalMapUv),m.push(v.clearcoatRoughnessMapUv),m.push(v.diffuseRoughnessMapUv),m.push(v.iridescenceMapUv),m.push(v.iridescenceThicknessMapUv),m.push(v.sheenColorMapUv),m.push(v.sheenRoughnessMapUv),m.push(v.specularMapUv),m.push(v.specularColorMapUv),m.push(v.specularIntensityMapUv),m.push(v.transmissionMapUv),m.push(v.thicknessMapUv),m.push(v.combine),m.push(v.fogExp2),m.push(v.sizeAttenuation),m.push(v.morphTargetsCount),m.push(v.numSunLights),m.push(v.numDirLights),m.push(v.numPointLights),m.push(v.numSpotLights),m.push(v.numSpotLightMaps),m.push(v.numHemiLights),m.push(v.numRectAreaLights),m.push(v.numSunLightShadows),m.push(v.numDirLightShadows),m.push(v.numPointLightShadows),m.push(v.numSpotLightShadows),m.push(v.numSpotLightShadowsWithMaps),m.push(v.numLightProbes),m.push(v.numLightProbeGrids),m.push(v.shadowMapType),m.push(v.toneMapping),m.push(v.numClippingPlanes),m.push(v.numClipIntersection),m.push(v.depthPacking)}function g(m,v){o.disableAll(),v.instancing&&o.enable(0),v.instancingColor&&o.enable(1),v.instancingMorph&&o.enable(2),v.matcap&&o.enable(3),v.envMap&&o.enable(4),v.normalMapObjectSpace&&o.enable(5),v.normalMapTangentSpace&&o.enable(6),v.clearcoat&&o.enable(7),v.iridescence&&o.enable(8),v.alphaTest&&o.enable(9),v.vertexColors&&o.enable(10),v.vertexAlphas&&o.enable(11),v.vertexUv1s&&o.enable(12),v.vertexUv2s&&o.enable(13),v.vertexUv3s&&o.enable(14),v.vertexTangents&&o.enable(15),v.anisotropy&&o.enable(16),v.alphaHash&&o.enable(17),v.batching&&o.enable(18),v.dispersion&&o.enable(19),v.retroreflection&&o.enable(24),v.diffuseRoughness&&o.enable(25),v.batchingColor&&o.enable(20),v.gradientMap&&o.enable(21),v.packedNormalMap&&o.enable(22),v.vertexNormals&&o.enable(23),m.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),v.numLightProbeGrids>0&&o.enable(22),v.hasPositionAttribute&&o.enable(23),m.push(o.mask)}function y(m){let v=u[m.type],U;if(v){let E=Gn[v];U=li.clone(E.uniforms)}else U=m.uniforms;return U}function w(m,v){let U=c.get(v);return U!==void 0?++U.usedTimes:(U=new y_(i,v,m,s),h.push(U),c.set(v,U)),U}function _(m){if(--m.usedTimes===0){let v=h.indexOf(m);h[v]=h[h.length-1],h.pop(),c.delete(m.cacheKey),m.destroy()}}function S(m){a.remove(m)}function b(){a.dispose()}return{getParameters:p,getProgramCacheKey:M,getUniforms:y,acquireProgram:w,releaseProgram:_,releaseShaderCache:S,programs:h,dispose:b}}function b_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function w_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function xd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _d(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,M,x,g){let y=i[t];return y===void 0?(y={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:M,renderOrder:u.renderOrder,z:x,group:g},i[t]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=p,y.materialVariant=o(u),y.groupOrder=M,y.renderOrder=u.renderOrder,y.z=x,y.group=g),t++,y}function l(u,f,p,M,x,g,y){y.reversedDepth===!0&&(x=-x);let w=a(u,f,p,M,x,g);p.transmission>0?n.push(w):p.transparent===!0?s.push(w):e.push(w)}function h(u,f,p,M,x,g){let y=a(u,f,p,M,x,g);p.transmission>0?n.unshift(y):p.transparent===!0?s.unshift(y):e.unshift(y)}function c(u,f){e.length>1&&e.sort(u||w_),n.length>1&&n.sort(f||xd),s.length>1&&s.sort(f||xd)}function d(){for(let u=t,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:h,finish:d,sort:c}}function E_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new _d,i.set(n,[o])):s>=r.length?(o=new _d,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function T_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new _t};break;case"SpotLight":e={position:new G,direction:new G,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new _t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":e={color:new _t,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function A_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var R_=0;function C_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function I_(i){let t=new T_,e=A_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new G);let s=new G,r=new Ht,o=new Ht;function a(h){let c=0,d=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,p=0,M=0,x=0,g=0,y=0,w=0,_=0,S=0,b=0,m=0,v=0,U=0,E=0;h.sort(C_);for(let N=0,F=h.length;N<F;N++){let R=h[N],z=R.color,V=R.intensity,J=R.distance,W=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Ri?W=R.shadow.map.texture:W=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)c+=z.r*V,d+=z.g*V,u+=z.b*V;else if(R.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(R.sh.coefficients[Y],V);E++}else if(R.isSunLight){let Y=t.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let j=R.shadow,H=e.get(R);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[p]=H,n.sunShadowMap[p]=W;let L=j.getViewportCount();for(let O=0;O<L;O++)n.sunShadowMatrix[M+O]=j.getMatrix(O),n.sunShadowCascade[M+O]=j._cascadeData[O];M+=L,p++}n.sun[f]=Y,f++}else if(R.isDirectionalLight){let Y=t.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let j=R.shadow,H=e.get(R);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.directionalShadow[x]=H,n.directionalShadowMap[x]=W,n.directionalShadowMatrix[x]=R.shadow.matrix,S++}n.directional[x]=Y,x++}else if(R.isSpotLight){let Y=t.get(R);Y.position.setFromMatrixPosition(R.matrixWorld),Y.color.copy(z).multiplyScalar(V),Y.distance=J,Y.coneCos=Math.cos(R.angle),Y.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Y.decay=R.decay,n.spot[y]=Y;let j=R.shadow;if(R.map&&(n.spotLightMap[v]=R.map,v++,j.updateMatrices(R),R.castShadow&&U++),n.spotLightMatrix[y]=j.matrix,R.castShadow){let H=e.get(R);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.spotShadow[y]=H,n.spotShadowMap[y]=W,m++}y++}else if(R.isRectAreaLight){let Y=t.get(R);Y.color.copy(z).multiplyScalar(V),Y.halfWidth.set(R.width*.5,0,0),Y.halfHeight.set(0,R.height*.5,0),n.rectArea[w]=Y,w++}else if(R.isPointLight){let Y=t.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity),Y.distance=R.distance,Y.decay=R.decay,R.castShadow){let j=R.shadow,H=e.get(R);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=R.shadow.matrix,b++}n.point[g]=Y,g++}else if(R.isHemisphereLight){let Y=t.get(R);Y.skyColor.copy(R.color).multiplyScalar(V),Y.groundColor.copy(R.groundColor).multiplyScalar(V),n.hemi[_]=Y,_++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Nt.LTC_FLOAT_1,n.rectAreaLTC2=Nt.LTC_FLOAT_2):(n.rectAreaLTC1=Nt.LTC_HALF_1,n.rectAreaLTC2=Nt.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=d,n.ambient[2]=u;let P=n.hash;(P.sunLength!==f||P.directionalLength!==x||P.pointLength!==g||P.spotLength!==y||P.rectAreaLength!==w||P.hemiLength!==_||P.numSunShadows!==p||P.numDirectionalShadows!==S||P.numPointShadows!==b||P.numSpotShadows!==m||P.numSpotMaps!==v||P.numLightProbes!==E)&&(n.sun.length=f,n.directional.length=x,n.spot.length=y,n.rectArea.length=w,n.point.length=g,n.hemi.length=_,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=m,n.spotShadowMap.length=m,n.spotLightMatrix.length=m+v-U,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=E,P.sunLength=f,P.directionalLength=x,P.pointLength=g,P.spotLength=y,P.rectAreaLength=w,P.hemiLength=_,P.numSunShadows=p,P.numDirectionalShadows=S,P.numPointShadows=b,P.numSpotShadows=m,P.numSpotMaps=v,P.numLightProbes=E,n.version=R_++)}function l(h,c){let d=0,u=0,f=0,p=0,M=0,x=0,g=c.matrixWorldInverse;for(let y=0,w=h.length;y<w;y++){let _=h[y];if(_.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(g),d++}else if(_.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),u++}else if(_.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),p++}else if(_.isRectAreaLight){let S=n.rectArea[M];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),M++}else if(_.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){let S=n.hemi[x];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function yd(i){let t=new I_(i),e=[],n=[],s=[];function r(d){c.camera=d,e.length=0,n.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function h(d){t.setupView(e,d)}let c={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:c,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a}}function P_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new yd(i),t.set(s,[a])):r>=o.length?(a=new yd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var U_=`void main() {
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
}`,F_=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],D_=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Md=new Ht,Zr=new G,Zc=new G;function L_(i,t,e){let n=new Si,s=new Ut,r=new Ut,o=new we,a=new ca,l=new ha,h={},c=e.maxTextureSize,d={[Ai]:Ce,[Ce]:Ai,[me]:me},u=new We({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:U_,fragmentShader:N_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new ie;p.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new qt(p,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cr;let g=this.type;this.render=function(b,m,v){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||b.length===0)return;this.type===mu&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Cr);let U=i.getRenderTarget(),E=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),N=i.state;N.setBlending(si),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let F=g!==this.type;F&&m.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(z=>z.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,z=b.length;R<z;R++){let V=b[R],J=V.shadow;if(J===void 0){Xt("WebGLShadowMap:",V,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let W=J.getFrameExtents();s.multiply(W),r.copy(J.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/W.x),s.x=r.x*W.x,J.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/W.y),s.y=r.y*W.y,J.mapSize.y=r.y));let Y=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=Y,J.map===null||F===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===Rs){if(V.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new De(s.x,s.y,{format:Ri,type:qe,minFilter:on,magFilter:on,generateMipmaps:!1}),J.map.texture.name=V.name+".shadowMap",J.map.depthTexture=new ei(s.x,s.y,Tn),J.map.depthTexture.name=V.name+".shadowMapDepth",J.map.depthTexture.format=ti,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Ne,J.map.depthTexture.magFilter=Ne}else V.isPointLight?(J.map=new Xr(s.x),J.map.depthTexture=new _r(s.x,Nn)):(J.map=new De(s.x,s.y),J.map.depthTexture=new ei(s.x,s.y,Nn)),J.map.depthTexture.name=V.name+".shadowMap",J.map.depthTexture.format=ti,this.type===Cr?(J.map.depthTexture.compareFunction=Y?Fc:Nc,J.map.depthTexture.minFilter=on,J.map.depthTexture.magFilter=on):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Ne,J.map.depthTexture.magFilter=Ne);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let j=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();V.isPointLight!==!0&&J.updateMatrices(V,v);let H=(J.camera.layers.mask&4294967294)!==0?J.camera.layers:v.layers;for(let L=0;L<j;L++){let O=J.getCamera(L);if(V.isPointLight){let B=J.camera,C=J.matrix,k=V.distance||B.far;k!==B.far&&(B.far=k,B.updateProjectionMatrix()),Zr.setFromMatrixPosition(V.matrixWorld),B.position.copy(Zr),Zc.copy(B.position),Zc.add(F_[L]),B.up.copy(D_[L]),B.lookAt(Zc),B.updateMatrixWorld(),C.makeTranslation(-Zr.x,-Zr.y,-Zr.z),Md.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),J._frustum.setFromProjectionMatrix(Md,B.coordinateSystem,B.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,L),i.clear();else{L===0&&(i.setRenderTarget(J.map),i.clear());let B=J.getViewport(L);o.set(r.x*B.x,r.y*B.y,r.x*B.z,r.y*B.w),N.viewport(o)}n=J.getFrustum(L),_(m,v,O,V,H,this.type)}J.isPointLightShadow!==!0&&this.type===Rs&&y(J,v),J.needsUpdate=!1}g=this.type,x.needsUpdate=!1,i.setRenderTarget(U,E,P)};function y(b,m){let v=t.update(M);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new De(s.x,s.y,{format:Ri,type:qe}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(m,null,v,u,M,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(m,null,v,f,M,null)}function w(b,m,v,U){let E=null,P=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)E=P;else if(E=v.isPointLight===!0?l:a,i.localClippingEnabled&&m.clipShadows===!0&&Array.isArray(m.clippingPlanes)&&m.clippingPlanes.length!==0||m.displacementMap&&m.displacementScale!==0||m.alphaMap&&m.alphaTest>0||m.map&&m.alphaTest>0||m.alphaToCoverage===!0){let N=E.uuid,F=m.uuid,R=h[N];R===void 0&&(R={},h[N]=R);let z=R[F];z===void 0&&(z=E.clone(),R[F]=z,m.addEventListener("dispose",S)),E=z}if(E.visible=m.visible,E.wireframe=m.wireframe,U===Rs?E.side=m.shadowSide!==null?m.shadowSide:m.side:E.side=m.shadowSide!==null?m.shadowSide:d[m.side],E.alphaMap=m.alphaMap,E.alphaTest=m.alphaToCoverage===!0?.5:m.alphaTest,E.map=m.map,E.clipShadows=m.clipShadows,E.clippingPlanes=m.clippingPlanes,E.clipIntersection=m.clipIntersection,E.displacementMap=m.displacementMap,E.displacementScale=m.displacementScale,E.displacementBias=m.displacementBias,E.wireframeLinewidth=m.wireframeLinewidth,E.linewidth=m.linewidth,v.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let N=i.properties.get(E);N.light=v}return E}function _(b,m,v,U,E,P){if(b.visible===!1)return;if(b.layers.test(E)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===Rs)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);let R=t.update(b),z=b.material;if(Array.isArray(z)){let V=R.groups;for(let J=0,W=V.length;J<W;J++){let Y=V[J],j=z[Y.materialIndex];if(j&&j.visible){let H=w(b,j,U,P);b.onBeforeShadow(i,b,m,v,R,H,Y),i.renderBufferDirect(v,null,R,H,b,Y),b.onAfterShadow(i,b,m,v,R,H,Y)}}}else if(z.visible){let V=w(b,z,U,P);b.onBeforeShadow(i,b,m,v,R,V,null),i.renderBufferDirect(v,null,R,V,b,null),b.onAfterShadow(i,b,m,v,R,V,null)}}let F=b.children;for(let R=0,z=F.length;R<z;R++)_(F[R],m,v,U,E,P)}function S(b){b.target.removeEventListener("dispose",S);for(let v in h){let U=h[v],E=b.target.uuid;E in U&&(U[E].dispose(),delete U[E])}}}function B_(i,t){function e(){let Z=!1,pt=new we,ht=null,Et=new we(0,0,0,0);return{setMask:function(bt){ht!==bt&&!Z&&(i.colorMask(bt,bt,bt,bt),ht=bt)},setLocked:function(bt){Z=bt},setClear:function(bt,Tt,Gt,re,yt){yt===!0&&(bt*=re,Tt*=re,Gt*=re),pt.set(bt,Tt,Gt,re),Et.equals(pt)===!1&&(i.clearColor(bt,Tt,Gt,re),Et.copy(pt))},reset:function(){Z=!1,ht=null,Et.set(-1,0,0,0)}}}function n(){let Z=!1,pt=!1,ht=null,Et=null,bt=null;return{setReversed:function(Tt){if(pt!==Tt){let Gt=t.get("EXT_clip_control");Tt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),pt=Tt;let re=bt;bt=null,this.setClear(re)}},getReversed:function(){return pt},setTest:function(Tt){Tt?et(i.DEPTH_TEST):ot(i.DEPTH_TEST)},setMask:function(Tt){ht!==Tt&&!Z&&(i.depthMask(Tt),ht=Tt)},setFunc:function(Tt){if(pt&&(Tt=qu[Tt]),Et!==Tt){switch(Tt){case ko:i.depthFunc(i.NEVER);break;case Oo:i.depthFunc(i.ALWAYS);break;case Vo:i.depthFunc(i.LESS);break;case xs:i.depthFunc(i.LEQUAL);break;case zo:i.depthFunc(i.EQUAL);break;case Go:i.depthFunc(i.GEQUAL);break;case Ho:i.depthFunc(i.GREATER);break;case Wo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Et=Tt}},setLocked:function(Tt){Z=Tt},setClear:function(Tt){bt!==Tt&&(bt=Tt,pt&&(Tt=1-Tt),i.clearDepth(Tt))},reset:function(){Z=!1,ht=null,Et=null,bt=null,pt=!1}}}function s(){let Z=!1,pt=null,ht=null,Et=null,bt=null,Tt=null,Gt=null,re=null,yt=null;return{setTest:function(Zt){Z||(Zt?et(i.STENCIL_TEST):ot(i.STENCIL_TEST))},setMask:function(Zt){pt!==Zt&&!Z&&(i.stencilMask(Zt),pt=Zt)},setFunc:function(Zt,se,Pt){(ht!==Zt||Et!==se||bt!==Pt)&&(i.stencilFunc(Zt,se,Pt),ht=Zt,Et=se,bt=Pt)},setOp:function(Zt,se,Pt){(Tt!==Zt||Gt!==se||re!==Pt)&&(i.stencilOp(Zt,se,Pt),Tt=Zt,Gt=se,re=Pt)},setLocked:function(Zt){Z=Zt},setClear:function(Zt){yt!==Zt&&(i.clearStencil(Zt),yt=Zt)},reset:function(){Z=!1,pt=null,ht=null,Et=null,bt=null,Tt=null,Gt=null,re=null,yt=null}}}let r=new e,o=new n,a=new s,l={},h=new WeakMap,c={},d={},u={},f=new WeakMap,p=[],M=null,x=!1,g=null,y=null,w=null,_=null,S=null,b=null,m=null,v=new _t(0,0,0),U=0,E=!1,P=null,N=null,F=null,R=null,z=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,W=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Y)[1]),J=W>=1):Y.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),J=W>=2);let j=null,H={},L=i.getParameter(i.SCISSOR_BOX),O=i.getParameter(i.VIEWPORT),B=new we().fromArray(L),C=new we().fromArray(O);function k(Z,pt,ht,Et){let bt=new Uint8Array(4),Tt=i.createTexture();i.bindTexture(Z,Tt),i.texParameteri(Z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<ht;Gt++)Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,bt):i.texImage2D(pt+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,bt);return Tt}let K={};K[i.TEXTURE_2D]=k(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=k(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=k(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=k(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(i.DEPTH_TEST),o.setFunc(xs),Yt(!1),Wt(vc),et(i.CULL_FACE),It(si);function et(Z){c[Z]!==!0&&(i.enable(Z),c[Z]=!0)}function ot(Z){c[Z]!==!1&&(i.disable(Z),c[Z]=!1)}function xt(Z,pt){return u[Z]!==pt?(i.bindFramebuffer(Z,pt),u[Z]=pt,Z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pt),Z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function ft(Z,pt){let ht=p,Et=!1;if(Z){ht=f.get(pt),ht===void 0&&(ht=[],f.set(pt,ht));let bt=Z.textures;if(ht.length!==bt.length||ht[0]!==i.COLOR_ATTACHMENT0){for(let Tt=0,Gt=bt.length;Tt<Gt;Tt++)ht[Tt]=i.COLOR_ATTACHMENT0+Tt;ht.length=bt.length,Et=!0}}else ht[0]!==i.BACK&&(ht[0]=i.BACK,Et=!0);Et&&i.drawBuffers(ht)}function wt(Z){return M!==Z?(i.useProgram(Z),M=Z,!0):!1}let Mt={[Ji]:i.FUNC_ADD,[xu]:i.FUNC_SUBTRACT,[_u]:i.FUNC_REVERSE_SUBTRACT};Mt[yu]=i.MIN,Mt[Mu]=i.MAX;let tt={[vu]:i.ZERO,[Su]:i.ONE,[bu]:i.SRC_COLOR,[wc]:i.SRC_ALPHA,[Cu]:i.SRC_ALPHA_SATURATE,[Au]:i.DST_COLOR,[Eu]:i.DST_ALPHA,[wu]:i.ONE_MINUS_SRC_COLOR,[Ec]:i.ONE_MINUS_SRC_ALPHA,[Ru]:i.ONE_MINUS_DST_COLOR,[Tu]:i.ONE_MINUS_DST_ALPHA,[Iu]:i.CONSTANT_COLOR,[Pu]:i.ONE_MINUS_CONSTANT_COLOR,[Uu]:i.CONSTANT_ALPHA,[Nu]:i.ONE_MINUS_CONSTANT_ALPHA};function It(Z,pt,ht,Et,bt,Tt,Gt,re,yt,Zt){if(Z===si){x===!0&&(ot(i.BLEND),x=!1);return}if(x===!1&&(et(i.BLEND),x=!0),Z!==gu){if(Z!==g||Zt!==E){if((y!==Ji||S!==Ji)&&(i.blendEquation(i.FUNC_ADD),y=Ji,S=Ji),Zt)switch(Z){case Cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _n:i.blendFunc(i.ONE,i.ONE);break;case Sc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Kt("WebGLState: Invalid blending: ",Z);break}else switch(Z){case Cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _n:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Sc:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bc:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",Z);break}w=null,_=null,b=null,m=null,v.set(0,0,0),U=0,g=Z,E=Zt}return}bt=bt||pt,Tt=Tt||ht,Gt=Gt||Et,(pt!==y||bt!==S)&&(i.blendEquationSeparate(Mt[pt],Mt[bt]),y=pt,S=bt),(ht!==w||Et!==_||Tt!==b||Gt!==m)&&(i.blendFuncSeparate(tt[ht],tt[Et],tt[Tt],tt[Gt]),w=ht,_=Et,b=Tt,m=Gt),(re.equals(v)===!1||yt!==U)&&(i.blendColor(re.r,re.g,re.b,yt),v.copy(re),U=yt),g=Z,E=!1}function Dt(Z,pt){Z.side===me?ot(i.CULL_FACE):et(i.CULL_FACE);let ht=Z.side===Ce;pt&&(ht=!ht),Yt(ht),Z.blending===Cs&&Z.transparent===!1?It(si):It(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),o.setFunc(Z.depthFunc),o.setTest(Z.depthTest),o.setMask(Z.depthWrite),r.setMask(Z.colorWrite);let Et=Z.stencilWrite;a.setTest(Et),Et&&(a.setMask(Z.stencilWriteMask),a.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),a.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),Qt(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(Z){P!==Z&&(Z?i.frontFace(i.CW):i.frontFace(i.CCW),P=Z)}function Wt(Z){Z!==fu?(et(i.CULL_FACE),Z!==N&&(Z===vc?i.cullFace(i.BACK):Z===pu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ot(i.CULL_FACE),N=Z}function Bt(Z){Z!==F&&(J&&i.lineWidth(Z),F=Z)}function Qt(Z,pt,ht){Z?(et(i.POLYGON_OFFSET_FILL),(R!==pt||z!==ht)&&(R=pt,z=ht,o.getReversed()&&(pt=-pt,ht=-ht),i.polygonOffset(pt,ht))):ot(i.POLYGON_OFFSET_FILL)}function ee(Z){Z?et(i.SCISSOR_TEST):ot(i.SCISSOR_TEST)}function Ae(Z){Z===void 0&&(Z=i.TEXTURE0+V-1),j!==Z&&(i.activeTexture(Z),j=Z)}function Se(Z,pt,ht){ht===void 0&&(j===null?ht=i.TEXTURE0+V-1:ht=j);let Et=H[ht];Et===void 0&&(Et={type:void 0,texture:void 0},H[ht]=Et),(Et.type!==Z||Et.texture!==pt)&&(j!==ht&&(i.activeTexture(ht),j=ht),i.bindTexture(Z,pt||K[Z]),Et.type=Z,Et.texture=pt)}function q(){let Z=H[j];Z!==void 0&&Z.type!==void 0&&(i.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function Q(){try{i.compressedTexImage2D(...arguments)}catch(Z){Kt("WebGLState:",Z)}}function St(){try{i.compressedTexImage3D(...arguments)}catch(Z){Kt("WebGLState:",Z)}}function Jt(){try{i.texSubImage2D(...arguments)}catch(Z){Kt("WebGLState:",Z)}}function ut(){try{i.texSubImage3D(...arguments)}catch(Z){Kt("WebGLState:",Z)}}function ne(){try{i.compressedTexSubImage2D(...arguments)}catch(Z){Kt("WebGLState:",Z)}}function Ct(){try{i.compressedTexSubImage3D(...arguments)}catch(Z){Kt("WebGLState:",Z)}}function at(){try{i.texStorage2D(...arguments)}catch(Z){Kt("WebGLState:",Z)}}function I(){try{i.texStorage3D(...arguments)}catch(Z){Kt("WebGLState:",Z)}}function T(){try{i.texImage2D(...arguments)}catch(Z){Kt("WebGLState:",Z)}}function D(){try{i.texImage3D(...arguments)}catch(Z){Kt("WebGLState:",Z)}}function $(Z){return d[Z]!==void 0?d[Z]:i.getParameter(Z)}function nt(Z,pt){d[Z]!==pt&&(i.pixelStorei(Z,pt),d[Z]=pt)}function ct(Z){B.equals(Z)===!1&&(i.scissor(Z.x,Z.y,Z.z,Z.w),B.copy(Z))}function gt(Z){C.equals(Z)===!1&&(i.viewport(Z.x,Z.y,Z.z,Z.w),C.copy(Z))}function rt(Z,pt){let ht=h.get(pt);ht===void 0&&(ht=new WeakMap,h.set(pt,ht));let Et=ht.get(Z);Et===void 0&&(Et=i.getUniformBlockIndex(pt,Z.name),i.uniformBlockBinding(pt,Et,Et),ht.set(Z,Et))}function dt(Z,pt,ht){let bt=h.get(pt).get(Z);l[bt]!==ht&&(i.bindBufferBase(i.UNIFORM_BUFFER,bt,ht),l[bt]=ht)}function vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),c={},d={},j=null,H={},u={},l={},f=new WeakMap,p=[],M=null,x=!1,g=null,y=null,w=null,_=null,S=null,b=null,m=null,v=new _t(0,0,0),U=0,E=!1,P=null,N=null,F=null,R=null,z=null,B.set(0,0,i.canvas.width,i.canvas.height),C.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:et,disable:ot,bindFramebuffer:xt,drawBuffers:ft,useProgram:wt,setBlending:It,setMaterial:Dt,setFlipSided:Yt,setCullFace:Wt,setLineWidth:Bt,setPolygonOffset:Qt,setScissorTest:ee,activeTexture:Ae,bindTexture:Se,unbindTexture:q,compressedTexImage2D:Q,compressedTexImage3D:St,texImage2D:T,texImage3D:D,pixelStorei:nt,getParameter:$,updateUBOMapping:rt,uniformBlockBinding:dt,texStorage2D:at,texStorage3D:I,texSubImage2D:Jt,texSubImage3D:ut,compressedTexSubImage2D:ne,compressedTexSubImage3D:Ct,scissor:ct,viewport:gt,reset:vt}}function k_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ut,c=new WeakMap,d=new Set,u,f=new WeakMap,p=new Set,M=new FinalizationRegistry(I=>p.delete(I)),x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,T){return x?new OffscreenCanvas(I,T):or("canvas")}function y(I,T,D){let $=1,nt=at(I);if((nt.width>D||nt.height>D)&&($=D/Math.max(nt.width,nt.height)),$<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ct=Math.floor($*nt.width),gt=Math.floor($*nt.height);u===void 0&&(u=g(ct,gt));let rt=T?g(ct,gt):u;return rt.width=ct,rt.height=gt,rt.getContext("2d").drawImage(I,0,0,ct,gt),Xt("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+ct+"x"+gt+")."),rt}else return"data"in I&&Xt("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),I;return I}function w(I){return I.generateMipmaps}function _(I){i.generateMipmap(I)}function S(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(I,T,D,$,nt,ct=!1){if(I!==null){if(i[I]!==void 0)return i[I];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let gt;$&&(gt=t.get("EXT_texture_norm16"),gt||Xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let rt=T;if(T===i.RED&&(D===i.FLOAT&&(rt=i.R32F),D===i.HALF_FLOAT&&(rt=i.R16F),D===i.UNSIGNED_BYTE&&(rt=i.R8),D===i.UNSIGNED_SHORT&&gt&&(rt=gt.R16_EXT),D===i.SHORT&&gt&&(rt=gt.R16_SNORM_EXT)),T===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(rt=i.R8UI),D===i.UNSIGNED_SHORT&&(rt=i.R16UI),D===i.UNSIGNED_INT&&(rt=i.R32UI),D===i.BYTE&&(rt=i.R8I),D===i.SHORT&&(rt=i.R16I),D===i.INT&&(rt=i.R32I)),T===i.RG&&(D===i.FLOAT&&(rt=i.RG32F),D===i.HALF_FLOAT&&(rt=i.RG16F),D===i.UNSIGNED_BYTE&&(rt=i.RG8),D===i.UNSIGNED_SHORT&&gt&&(rt=gt.RG16_EXT),D===i.SHORT&&gt&&(rt=gt.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(rt=i.RG8UI),D===i.UNSIGNED_SHORT&&(rt=i.RG16UI),D===i.UNSIGNED_INT&&(rt=i.RG32UI),D===i.BYTE&&(rt=i.RG8I),D===i.SHORT&&(rt=i.RG16I),D===i.INT&&(rt=i.RG32I)),T===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),D===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),D===i.UNSIGNED_INT&&(rt=i.RGB32UI),D===i.BYTE&&(rt=i.RGB8I),D===i.SHORT&&(rt=i.RGB16I),D===i.INT&&(rt=i.RGB32I)),T===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),D===i.UNSIGNED_INT&&(rt=i.RGBA32UI),D===i.BYTE&&(rt=i.RGBA8I),D===i.SHORT&&(rt=i.RGBA16I),D===i.INT&&(rt=i.RGBA32I)),T===i.RGB&&(D===i.UNSIGNED_SHORT&&gt&&(rt=gt.RGB16_EXT),D===i.SHORT&&gt&&(rt=gt.RGB16_SNORM_EXT),D===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),D===i.UNSIGNED_INT_10F_11F_11F_REV&&(rt=i.R11F_G11F_B10F)),T===i.RGBA){let dt=ct?rr:le.getTransfer(nt);D===i.FLOAT&&(rt=i.RGBA32F),D===i.HALF_FLOAT&&(rt=i.RGBA16F),D===i.UNSIGNED_BYTE&&(rt=dt===ge?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT&&gt&&(rt=gt.RGBA16_EXT),D===i.SHORT&&gt&&(rt=gt.RGBA16_SNORM_EXT),D===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function m(I,T){let D;return I?T===null||T===Nn||T===Qi?D=i.DEPTH24_STENCIL8:T===Tn?D=i.DEPTH32F_STENCIL8:T===Ps&&(D=i.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Nn||T===Qi?D=i.DEPTH_COMPONENT24:T===Tn?D=i.DEPTH_COMPONENT32F:T===Ps&&(D=i.DEPTH_COMPONENT16),D}function v(I,T){return w(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ne&&I.minFilter!==on?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function U(I){let T=new WeakRef(I);n.get(I).__ref=T,p.add(T),M.register(I,T,T)}function E(I){let T=n.get(I).__ref;T!==void 0&&(p.delete(T),M.unregister(T))}function P(I){F(I.target)}function N(I){R(I.target)}function F(I){I.removeEventListener("dispose",P),E(I),V(I),I.isVideoTexture&&c.delete(I),I.isHTMLTexture&&d.delete(I)}function R(I){I.removeEventListener("dispose",N),E(I),W(I)}function z(){for(let I of p){let T=I.deref();T!==void 0&&(T.isRenderTarget===!0?R(T):F(T))}p.clear(),d.clear()}function V(I){let T=n.get(I);if(T.__webglInit===void 0)return;let D=I.source,$=f.get(D);if($){let nt=$[T.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&J(I),Object.keys($).length===0&&f.delete(D)}n.remove(I)}function J(I){let T=n.get(I);i.deleteTexture(T.__webglTexture);let D=I.source,$=f.get(D);delete $[T.__cacheKey],o.memory.textures--}function W(I){let T=n.get(I);T.__depthDisposeCallback&&T.__depthDisposeCallback();let D=I.depthTexture;if(D&&D.renderTarget===I&&F(D),I.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(T.__webglFramebuffer[nt]))for(let ct=0;ct<T.__webglFramebuffer[nt].length;ct++)i.deleteFramebuffer(T.__webglFramebuffer[nt][ct]);else i.deleteFramebuffer(T.__webglFramebuffer[nt]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[nt])}else{if(Array.isArray(T.__webglFramebuffer))for(let nt=0;nt<T.__webglFramebuffer.length;nt++)i.deleteFramebuffer(T.__webglFramebuffer[nt]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let nt=0;nt<T.__webglColorRenderbuffer.length;nt++)T.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[nt]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let $=I.textures;for(let nt=0,ct=$.length;nt<ct;nt++){let gt=n.get($[nt]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove($[nt])}n.remove(I)}let Y=0;function j(){Y=0}function H(){return Y}function L(I){Y=I}function O(){let I=Y;return I>=s.maxTextures&&Xt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,I}function B(I){let T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.mipmapsAutoUpdate),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function C(I,T){let D=n.get(I);if(I.isVideoTexture&&ne(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&D.__version!==I.version){let $=I.image;if($===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{Dt(D,I,T);return}}else I.isExternalTexture&&(D.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+T)}function k(I,T){let D=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&D.__version!==I.version){Dt(D,I,T);return}else I.isExternalTexture&&(D.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+T)}function K(I,T){let D=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&D.__version!==I.version){Dt(D,I,T);return}e.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+T)}function et(I,T){let D=n.get(I);if(I.version>0&&D.__version!==I.version){Yt(D,I,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+T)}let ot={[_s]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[Zo]:i.MIRRORED_REPEAT},xt={[Ne]:i.NEAREST,[Lu]:i.NEAREST_MIPMAP_NEAREST,[Br]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[wa]:i.LINEAR_MIPMAP_NEAREST,[ri]:i.LINEAR_MIPMAP_LINEAR},ft={[Vu]:i.NEVER,[Dc]:i.ALWAYS,[zu]:i.LESS,[Nc]:i.LEQUAL,[Gu]:i.EQUAL,[Fc]:i.GEQUAL,[Hu]:i.GREATER,[Wu]:i.NOTEQUAL};function wt(I,T){if(T.type===Tn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===on||T.magFilter===wa||T.magFilter===Br||T.magFilter===ri||T.minFilter===on||T.minFilter===wa||T.minFilter===Br||T.minFilter===ri)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,ot[T.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,ot[T.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,ot[T.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,xt[T.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,xt[T.minFilter]),T.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,ft[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ne||T.minFilter!==Br&&T.minFilter!==ri||T.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let D=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Mt(I,T){let D=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",P),U(T));let $=T.source,nt=f.get($);nt===void 0&&(nt={},f.set($,nt));let ct=B(T);if(ct!==I.__cacheKey){nt[ct]===void 0&&(nt[ct]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,D=!0),nt[ct].usedTimes++;let gt=nt[I.__cacheKey];gt!==void 0&&(nt[I.__cacheKey].usedTimes--,gt.usedTimes===0&&J(T)),I.__cacheKey=ct,I.__webglTexture=nt[ct].texture}return D}function tt(I,T,D){return Math.floor(Math.floor(I/D)/T)}function It(I,T,D,$){let ct=I.updateRanges;if(ct.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,D,$,T.data);else{ct.sort((Z,pt)=>Z.start-pt.start);let gt=0;for(let Z=1;Z<ct.length;Z++){let pt=ct[gt],ht=ct[Z],Et=pt.start+pt.count,bt=tt(ht.start,T.width,4),Tt=tt(pt.start,T.width,4);ht.start<=Et+1&&bt===Tt&&tt(ht.start+ht.count-1,T.width,4)===bt?pt.count=Math.max(pt.count,ht.start+ht.count-pt.start):(++gt,ct[gt]=ht)}ct.length=gt+1;let rt=e.getParameter(i.UNPACK_ROW_LENGTH),dt=e.getParameter(i.UNPACK_SKIP_PIXELS),vt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let Z=0,pt=ct.length;Z<pt;Z++){let ht=ct[Z],Et=Math.floor(ht.start/4),bt=Math.ceil(ht.count/4),Tt=Et%T.width,Gt=Math.floor(Et/T.width),re=bt,yt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Tt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Gt),e.texSubImage2D(i.TEXTURE_2D,0,Tt,Gt,re,yt,D,$,T.data)}I.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,rt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(i.UNPACK_SKIP_ROWS,vt)}}function Dt(I,T,D){let $=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&($=i.TEXTURE_3D);let nt=Mt(I,T),ct=T.source;e.bindTexture($,I.__webglTexture,i.TEXTURE0+D);let gt=n.get(ct);if(ct.version!==gt.__version||nt===!0){if(e.activeTexture(i.TEXTURE0+D),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let yt=le.getPrimaries(le.workingColorSpace),Zt=T.colorSpace===ai?null:le.getPrimaries(T.colorSpace),se=T.colorSpace===ai||yt===Zt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se)}e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let dt=y(T.image,!1,s.maxTextureSize);dt=Ct(T,dt);let vt=r.convert(T.format,T.colorSpace),Z=r.convert(T.type),pt=b(T.internalFormat,vt,Z,T.normalized,T.colorSpace,T.isVideoTexture);wt($,T);let ht,Et=T.mipmaps,bt=T.isVideoTexture!==!0,Tt=gt.__version===void 0||nt===!0,Gt=ct.dataReady,re=v(T,dt);if(T.isDepthTexture)pt=m(T.format===oi,T.type),Tt&&(bt?e.texStorage2D(i.TEXTURE_2D,1,pt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,pt,dt.width,dt.height,0,vt,Z,null));else if(T.isDataTexture)if(Et.length>0){bt&&Tt&&e.texStorage2D(i.TEXTURE_2D,re,pt,Et[0].width,Et[0].height);for(let yt=0,Zt=Et.length;yt<Zt;yt++)ht=Et[yt],bt?Gt&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,ht.width,ht.height,vt,Z,ht.data):e.texImage2D(i.TEXTURE_2D,yt,pt,ht.width,ht.height,0,vt,Z,ht.data);T.generateMipmaps=!1}else bt?(Tt&&e.texStorage2D(i.TEXTURE_2D,re,pt,dt.width,dt.height),Gt&&It(T,dt,vt,Z)):e.texImage2D(i.TEXTURE_2D,0,pt,dt.width,dt.height,0,vt,Z,dt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){bt&&Tt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,re,pt,Et[0].width,Et[0].height,dt.depth);for(let yt=0,Zt=Et.length;yt<Zt;yt++)if(ht=Et[yt],T.format!==Fn)if(vt!==null)if(bt){if(Gt)if(T.layerUpdates.size>0){let se=Hc(ht.width,ht.height,T.format,T.type);for(let Pt of T.layerUpdates){let _e=ht.data.subarray(Pt*se/ht.data.BYTES_PER_ELEMENT,(Pt+1)*se/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,Pt,ht.width,ht.height,1,vt,_e)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,0,ht.width,ht.height,dt.depth,vt,ht.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,yt,pt,ht.width,ht.height,dt.depth,0,ht.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else bt?Gt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,0,ht.width,ht.height,dt.depth,vt,Z,ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,yt,pt,ht.width,ht.height,dt.depth,0,vt,Z,ht.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{bt&&Tt&&e.texStorage2D(i.TEXTURE_2D,re,pt,Et[0].width,Et[0].height);for(let yt=0,Zt=Et.length;yt<Zt;yt++)ht=Et[yt],T.format!==Fn?vt!==null?bt?Gt&&e.compressedTexSubImage2D(i.TEXTURE_2D,yt,0,0,ht.width,ht.height,vt,ht.data):e.compressedTexImage2D(i.TEXTURE_2D,yt,pt,ht.width,ht.height,0,ht.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):bt?Gt&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,ht.width,ht.height,vt,Z,ht.data):e.texImage2D(i.TEXTURE_2D,yt,pt,ht.width,ht.height,0,vt,Z,ht.data)}else if(T.isDataArrayTexture)if(bt){if(Tt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,re,pt,dt.width,dt.height,dt.depth),Gt)if(T.layerUpdates.size>0){let yt=Hc(dt.width,dt.height,T.format,T.type);for(let Zt of T.layerUpdates){let se=dt.data.subarray(Zt*yt/dt.data.BYTES_PER_ELEMENT,(Zt+1)*yt/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Zt,dt.width,dt.height,1,vt,Z,se)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,vt,Z,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,pt,dt.width,dt.height,dt.depth,0,vt,Z,dt.data);else if(T.isData3DTexture)bt?(Tt&&e.texStorage3D(i.TEXTURE_3D,re,pt,dt.width,dt.height,dt.depth),Gt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,vt,Z,dt.data)):e.texImage3D(i.TEXTURE_3D,0,pt,dt.width,dt.height,dt.depth,0,vt,Z,dt.data);else if(T.isFramebufferTexture){if(Tt)if(bt)e.texStorage2D(i.TEXTURE_2D,re,pt,dt.width,dt.height);else{let yt=dt.width,Zt=dt.height;for(let se=0;se<re;se++)e.texImage2D(i.TEXTURE_2D,se,pt,yt,Zt,0,vt,Z,null),yt>>=1,Zt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let yt=i.canvas;if(yt.hasAttribute("layoutsubtree")||yt.setAttribute("layoutsubtree","true"),dt.parentNode!==yt){yt.appendChild(dt),d.add(T),yt.onpaint=Zt=>{let se=Zt.changedElements;for(let Pt of d)se.includes(Pt.image)&&(Pt.needsUpdate=!0)},yt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,dt);else{let se=i.RGBA,Pt=i.RGBA,_e=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,se,Pt,_e,dt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Et.length>0){if(bt&&Tt){let yt=at(Et[0]);e.texStorage2D(i.TEXTURE_2D,re,pt,yt.width,yt.height)}for(let yt=0,Zt=Et.length;yt<Zt;yt++)ht=Et[yt],bt?Gt&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,vt,Z,ht):e.texImage2D(i.TEXTURE_2D,yt,pt,vt,Z,ht);T.generateMipmaps=!1}else if(bt){if(Tt){let yt=at(dt);e.texStorage2D(i.TEXTURE_2D,re,pt,yt.width,yt.height)}Gt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Z,dt)}else e.texImage2D(i.TEXTURE_2D,0,pt,vt,Z,dt);w(T)&&T.mipmapsAutoUpdate===!0&&_($),gt.__version=ct.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function Yt(I,T,D){if(T.image.length!==6)return;let $=Mt(I,T),nt=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+D);let ct=n.get(nt);if(nt.version!==ct.__version||$===!0){e.activeTexture(i.TEXTURE0+D);let gt=le.getPrimaries(le.workingColorSpace),rt=T.colorSpace===ai?null:le.getPrimaries(T.colorSpace),dt=T.colorSpace===ai||gt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let vt=T.isCompressedTexture||T.image[0].isCompressedTexture,Z=T.image[0]&&T.image[0].isDataTexture,pt=[];for(let Pt=0;Pt<6;Pt++)!vt&&!Z?pt[Pt]=y(T.image[Pt],!0,s.maxCubemapSize):pt[Pt]=Z?T.image[Pt].image:T.image[Pt],pt[Pt]=Ct(T,pt[Pt]);let ht=pt[0],Et=r.convert(T.format,T.colorSpace),bt=r.convert(T.type),Tt=b(T.internalFormat,Et,bt,T.normalized,T.colorSpace),Gt=T.isVideoTexture!==!0,re=ct.__version===void 0||$===!0,yt=nt.dataReady,Zt=v(T,ht);wt(i.TEXTURE_CUBE_MAP,T);let se;if(T.isDepthTexture){if(Tt=m(T.format===oi,T.type),re)if(Gt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,Tt,ht.width,ht.height);else for(let Pt=0;Pt<6;Pt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,Tt,ht.width,ht.height,0,Et,bt,null)}else if(vt){Gt&&re&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Zt,Tt,ht.width,ht.height);for(let Pt=0;Pt<6;Pt++){se=pt[Pt].mipmaps;for(let _e=0;_e<se.length;_e++){let ke=se[_e];T.format!==Fn?Et!==null?Gt?yt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,_e,0,0,ke.width,ke.height,Et,ke.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,_e,Tt,ke.width,ke.height,0,ke.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,_e,0,0,ke.width,ke.height,Et,bt,ke.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,_e,Tt,ke.width,ke.height,0,Et,bt,ke.data)}}}else{if(se=T.mipmaps,Gt&&re){se.length>0&&Zt++;let Pt=at(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Zt,Tt,Pt.width,Pt.height)}for(let Pt=0;Pt<6;Pt++)if(Z){Gt?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,0,0,pt[Pt].width,pt[Pt].height,Et,bt,pt[Pt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,Tt,pt[Pt].width,pt[Pt].height,0,Et,bt,pt[Pt].data);for(let _e=0;_e<se.length;_e++){let fi=se[_e].image[Pt].image;Gt?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,_e+1,0,0,fi.width,fi.height,Et,bt,fi.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,_e+1,Tt,fi.width,fi.height,0,Et,bt,fi.data)}}else{Gt?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,0,0,Et,bt,pt[Pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,Tt,Et,bt,pt[Pt]);for(let _e=0;_e<se.length;_e++){let ke=se[_e];Gt?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,_e+1,0,0,Et,bt,ke.image[Pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,_e+1,Tt,Et,bt,ke.image[Pt])}}}w(T)&&T.mipmapsAutoUpdate===!0&&_(i.TEXTURE_CUBE_MAP),ct.__version=nt.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function Wt(I,T,D,$,nt,ct){let gt=r.convert(D.format,D.colorSpace),rt=r.convert(D.type),dt=b(D.internalFormat,gt,rt,D.normalized,D.colorSpace),vt=n.get(T),Z=n.get(D);if(Z.__renderTarget=T,!vt.__hasExternalTextures){let pt=Math.max(1,T.width>>ct),ht=Math.max(1,T.height>>ct);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,ct,dt,pt,ht,T.depth,0,gt,rt,null):e.texImage2D(nt,ct,dt,pt,ht,0,gt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),ut(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,nt,Z.__webglTexture,0,Jt(T)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,nt,Z.__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(I,T,D){if(i.bindRenderbuffer(i.RENDERBUFFER,I),T.depthBuffer){let $=T.depthTexture,nt=$&&$.isDepthTexture?$.type:null,ct=m(T.stencilBuffer,nt),gt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ut(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt(T),ct,T.width,T.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt(T),ct,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ct,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,I)}else{let $=T.textures;for(let nt=0;nt<$.length;nt++){let ct=$[nt],gt=r.convert(ct.format,ct.colorSpace),rt=r.convert(ct.type),dt=b(ct.internalFormat,gt,rt,ct.normalized,ct.colorSpace);ut(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt(T),dt,T.width,T.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt(T),dt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,dt,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Qt(I,T,D){let $=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let nt=n.get(T.depthTexture);nt.__renderTarget=T;let ct=$?T.depthTexture.image[0]:T.depthTexture.image;(!nt.__webglTexture||ct.width!==T.width||ct.height!==T.height)&&(ct.width=T.width,ct.height=T.height,T.depthTexture.needsUpdate=!0),$?et(T.depthTexture,0):C(T.depthTexture,0);let gt=nt.__webglTexture,rt=Jt(T),dt=$?i.TEXTURE_CUBE_MAP_POSITIVE_X+D:i.TEXTURE_2D,vt=T.depthTexture.format===oi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===ti)ut(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,vt,dt,gt,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,vt,dt,gt,0);else if(T.depthTexture.format===oi)ut(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,vt,dt,gt,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,vt,dt,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ee(I){let T=n.get(I),D=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){let $=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),$){let nt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,$.removeEventListener("dispose",nt)};$.addEventListener("dispose",nt),T.__depthDisposeCallback=nt}T.__boundDepthTexture=$}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if(D)for(let $=0;$<6;$++)Qt(T.__webglFramebuffer[$],I,$);else I.texture.mipmaps.length>0?Qt(T.__webglFramebuffer[0],I,0):Qt(T.__webglFramebuffer,I,0);else if(D){T.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[$]),T.__webglDepthbuffer[$]===void 0)T.__webglDepthbuffer[$]=i.createRenderbuffer(),Bt(T.__webglDepthbuffer[$],I,!1);else{let nt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=T.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,ct)}}else if(I.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Bt(T.__webglDepthbuffer,I,!1);else{let nt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,ct)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(I,T,D){let $=n.get(I);T!==void 0&&Wt($.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&ee(I)}function Se(I){let T=I.texture,D=n.get(I),$=n.get(T);I.addEventListener("dispose",N),U(I);let nt=I.textures,ct=I.isWebGLCubeRenderTarget===!0,gt=nt.length>1;if(gt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=T.version,o.memory.textures++),ct){D.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(T.mipmaps.length>0){D.__webglFramebuffer[rt]=[];for(let dt=0;dt<T.mipmaps.length;dt++)D.__webglFramebuffer[rt][dt]=i.createFramebuffer()}else D.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(T.mipmaps.length>0){D.__webglFramebuffer=[];for(let rt=0;rt<T.mipmaps.length;rt++)D.__webglFramebuffer[rt]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(gt)for(let rt=0,dt=nt.length;rt<dt;rt++){let vt=n.get(nt[rt]);vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&ut(I)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let rt=0;rt<nt.length;rt++){let dt=nt[rt];D.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[rt]);let vt=r.convert(dt.format,dt.colorSpace),Z=r.convert(dt.type),pt=b(dt.internalFormat,vt,Z,dt.normalized,dt.colorSpace,I.isXRRenderTarget===!0),ht=Jt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,pt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,D.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),Bt(D.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),wt(i.TEXTURE_CUBE_MAP,T);for(let rt=0;rt<6;rt++)if(T.mipmaps.length>0)for(let dt=0;dt<T.mipmaps.length;dt++)Wt(D.__webglFramebuffer[rt][dt],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,dt);else Wt(D.__webglFramebuffer[rt],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);w(T)?_(i.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(gt){for(let rt=0,dt=nt.length;rt<dt;rt++){let vt=nt[rt],Z=n.get(vt),pt=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,Z.__webglTexture),wt(pt,vt),Wt(D.__webglFramebuffer,I,vt,i.COLOR_ATTACHMENT0+rt,pt,0),w(vt)&&_(pt)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(rt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,$.__webglTexture),wt(rt,T),T.mipmaps.length>0)for(let dt=0;dt<T.mipmaps.length;dt++)Wt(D.__webglFramebuffer[dt],I,T,i.COLOR_ATTACHMENT0,rt,dt);else Wt(D.__webglFramebuffer,I,T,i.COLOR_ATTACHMENT0,rt,0);w(T)?_(rt):T.mipmaps.length>0&&i.texParameteri(rt,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}I.depthBuffer&&ee(I)}function q(I){let T=I.textures;for(let D=0,$=T.length;D<$;D++){let nt=T[D];if(w(nt)&&nt.mipmapsAutoUpdate===!0){let ct=S(I),gt=n.get(nt).__webglTexture;e.bindTexture(ct,gt),_(ct),e.unbindTexture()}}}let Q=[];function St(I){if(I.samples>0){if(ut(I)===!1){let T=I.textures,D=I.width,$=I.height,nt=i.COLOR_BUFFER_BIT,ct=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(I),rt=T.length>1;if(rt)for(let vt=0;vt<T.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let vt=0;vt<T.length;vt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[vt]);let Z=n.get(T[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Z,0)}i.blitFramebuffer(0,0,D,$,0,0,D,$,nt,i.NEAREST),l===!0&&(Q.length=0,Q.push(i.COLOR_ATTACHMENT0+vt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&Q.push(ct),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let vt=0;vt<T.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,gt.__webglColorRenderbuffer[vt]);let Z=n.get(T[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,Z,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let T=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Jt(I){return Math.min(s.maxSamples,I.samples)}function ut(I){let T=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ne(I){let T=o.render.frame;c.get(I)!==T&&(c.set(I,T),I.update())}function Ct(I,T){let D=I.colorSpace,$=I.format,nt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||D!==sr&&D!==ai&&(le.getTransfer(D)===ge?($!==Fn||nt!==dn)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",D)),T}function at(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=O,this.resetTextureUnits=j,this.getTextureUnits=H,this.setTextureUnits=L,this.setTexture2D=C,this.setTexture2DArray=k,this.setTexture3D=K,this.setTextureCube=et,this.rebindTextures=Ae,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=Wt,this.useMultisampledRTT=ut,this.dispose=z}function O_(i,t){function e(n,s=ai){let r,o=le.getTransfer(s);if(n===dn)return i.UNSIGNED_BYTE;if(n===Ta)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Aa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ic)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ac)return i.BYTE;if(n===Rc)return i.SHORT;if(n===Ps)return i.UNSIGNED_SHORT;if(n===Ea)return i.INT;if(n===Nn)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===qe)return i.HALF_FLOAT;if(n===Pc)return i.ALPHA;if(n===Uc)return i.RGB;if(n===Fn)return i.RGBA;if(n===ti)return i.DEPTH_COMPONENT;if(n===oi)return i.DEPTH_STENCIL;if(n===Ra)return i.RED;if(n===Ca)return i.RED_INTEGER;if(n===Ri)return i.RG;if(n===Ia)return i.RG_INTEGER;if(n===Pa)return i.RGBA_INTEGER;if(n===kr||n===Or||n===Vr||n===zr)if(o===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ua||n===Na||n===Fa||n===Da)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===La||n===Ba||n===ka||n===Oa||n===Va||n===Gr||n===za)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===La||n===Ba)return o===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ka)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Oa)return r.COMPRESSED_R11_EAC;if(n===Va)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Gr)return r.COMPRESSED_RG11_EAC;if(n===za)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ga||n===Ha||n===Wa||n===Za||n===Ya||n===Xa||n===Ja||n===qa||n===ja||n===Qa||n===Ka||n===$a||n===tl||n===el)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ga)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ha)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Za)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ya)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ja)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ja)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ka)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$a)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tl)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===el)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nl||n===il||n===sl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===nl)return o===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rl||n===ol||n===Hr||n===al)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===rl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ol)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===al)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var V_=`
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

}`,Kc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new yr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new We({vertexShader:V_,fragmentShader:z_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new qt(new Zi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$c=class extends Bn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,h=null,c=null,d=null,u=null,f=null,p=null,M=typeof XRWebGLBinding<"u",x=new Kc,g={},y=e.getContextAttributes(),w=null,_=null,S=[],b=[],m=new Ut,v=null,U=null,E=new tn;E.viewport=new we;let P=new tn;P.viewport=new we;let N=[E,P],F=new va,R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let C=S[B];return C===void 0&&(C=new Ss,S[B]=C),C.getTargetRaySpace()},this.getControllerGrip=function(B){let C=S[B];return C===void 0&&(C=new Ss,S[B]=C),C.getGripSpace()},this.getHand=function(B){let C=S[B];return C===void 0&&(C=new Ss,S[B]=C),C.getHandSpace()};function V(B){let C=b.indexOf(B.inputSource);if(C===-1)return;let k=S[C];k!==void 0&&(k.update(B.inputSource,B.frame,h||o),k.dispatchEvent({type:B.type,data:B.inputSource}))}function J(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",W);for(let B=0;B<S.length;B++){let C=b[B];C!==null&&(b[B]=null,S[B].disconnect(C))}R=null,z=null,x.reset();for(let B in g)delete g[B];if(t.setRenderTarget(w),f=null,u=null,d=null,s=null,_=null,O.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(m.width,m.height,!1),U!==null){let B=U.camera;B.fov=U.fov,B.zoom=U.zoom,B.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(B){h=B},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",J),s.addEventListener("inputsourceschange",W),y.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(m),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let k=null,K=null,et=null;y.depth&&(et=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,k=y.stencil?oi:ti,K=y.stencil?Qi:Nn);let ot={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(ot),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new De(u.textureWidth,u.textureHeight,{format:Fn,type:dn,depthTexture:new ei(u.textureWidth,u.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let k={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,k),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new De(f.framebufferWidth,f.framebufferHeight,{format:Fn,type:dn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),O.setContext(s),O.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function W(B){for(let C=0;C<B.removed.length;C++){let k=B.removed[C],K=b.indexOf(k);K>=0&&(b[K]=null,S[K].disconnect(k))}for(let C=0;C<B.added.length;C++){let k=B.added[C],K=b.indexOf(k);if(K===-1){for(let ot=0;ot<S.length;ot++)if(ot>=b.length){b.push(k),K=ot;break}else if(b[ot]===null){b[ot]=k,K=ot;break}if(K===-1)break}let et=S[K];et&&et.connect(k)}}function Y(B,C){C===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(C.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let C=B.near,k=B.far;x.texture!==null&&(x.depthNear>0&&(C=x.depthNear),x.depthFar>0&&(k=x.depthFar)),F.near=P.near=E.near=C,F.far=P.far=E.far=k,(R!==F.near||z!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),R=F.near,z=F.far),F.layers.mask=B.layers.mask|6,E.layers.mask=F.layers.mask&-5,P.layers.mask=F.layers.mask&-3;let K=B.parent,et=F.cameras;Y(F,K);for(let ot=0;ot<et.length;ot++)Y(et[ot],K);F.projectionMatrix.copy(E.projectionMatrix),F.projectionMatrixInverse.copy(E.projectionMatrixInverse),U===null&&B.isPerspectiveCamera&&(U={camera:B,fov:B.fov,zoom:B.zoom}),j(B,F,K)};function j(B,C,k){k===null?B.matrix.copy(C.matrixWorld):(B.matrix.copy(k.matrixWorld),B.matrix.invert(),B.matrix.multiply(C.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(C.projectionMatrix),B.projectionMatrixInverse.copy(C.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Xo*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(B){l=B,u!==null&&(u.fixedFoveation=B),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=B)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(F)},this.getCameraTexture=function(B){return g[B]};let H=null;function L(B,C){if(c=C.getViewerPose(h||o),p=C,c!==null){let k=c.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let K=!1;k.length!==F.cameras.length&&(F.cameras.length=0,K=!0);for(let ft=0;ft<k.length;ft++){let wt=k[ft],Mt=null;if(f!==null)Mt=f.getViewport(wt);else{let It=d.getViewSubImage(u,wt);Mt=It.viewport,ft===0&&(t.setRenderTargetTextures(_,It.colorTexture,It.depthStencilTexture),t.setRenderTarget(_))}let tt=N[ft];tt===void 0&&(tt=new tn,tt.layers.enable(ft),tt.viewport=new we,N[ft]=tt),tt.matrix.fromArray(wt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(wt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),ft===0&&(F.matrix.copy(tt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),K===!0&&F.cameras.push(tt)}let et=s.enabledFeatures;if(et&&et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=n.getBinding();let ft=d.getDepthInformation(k[0]);ft&&ft.isValid&&ft.texture&&x.init(ft,s.renderState)}if(et&&et.includes("camera-access")&&M){t.state.unbindTexture(),d=n.getBinding();for(let ft=0;ft<k.length;ft++){let wt=k[ft].camera;if(wt){let Mt=g[wt];Mt||(Mt=new yr,g[wt]=Mt);let tt=d.getCameraImage(wt);Mt.sourceTexture=tt}}}}for(let k=0;k<S.length;k++){let K=b[k],et=S[k];K!==null&&et!==void 0&&et.update(K,C,h||o)}H&&H(B,C),C.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:C}),p=null}let O=new vd;O.setAnimationLoop(L),this.setAnimationLoop=function(B){H=B},this.dispose=function(){}}},G_=new Ht,Pd=new $t;Pd.set(-1,0,0,0,1,0,0,0,1);function H_(i,t){function e(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function n(x,g){g.color.getRGB(x.fogColor.value,Vc(i)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function s(x,g,y,w,_){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(x,g):g.isMeshLambertMaterial?(r(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(x,g),d(x,g)):g.isMeshPhongMaterial?(r(x,g),c(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(x,g),u(x,g),g.isMeshPhysicalMaterial&&f(x,g,_)):g.isMeshMatcapMaterial?(r(x,g),p(x,g)):g.isMeshDepthMaterial?r(x,g):g.isMeshDistanceMaterial?(r(x,g),M(x,g)):g.isMeshNormalMaterial?r(x,g):g.isLineBasicMaterial?(o(x,g),g.isLineDashedMaterial&&a(x,g)):g.isPointsMaterial?l(x,g,y,w):g.isSpriteMaterial?h(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,e(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===Ce&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,e(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===Ce&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,e(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,e(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);let y=t.get(g),w=y.envMap,_=y.envMapRotation;w&&(x.envMap.value=w,x.envMapRotation.value.setFromMatrix4(G_.makeRotationFromEuler(_)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Pd),x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,x.aoMapTransform))}function o(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform))}function a(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function l(x,g,y,w){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*y,x.scale.value=w*.5,g.map&&(x.map.value=g.map,e(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function h(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function c(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function d(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function u(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function f(x,g,y){x.ior.value=g.ior,g.diffuseRoughness>0&&(x.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ce&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.retroreflectivity>0&&(x.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=y.texture,x.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,x.specularIntensityMapTransform))}function p(x,g){g.matcap&&(x.matcap.value=g.matcap)}function M(x,g){let y=t.get(g).light;x.referencePosition.value.setFromMatrixPosition(y.matrixWorld),x.nearDistance.value=y.shadow.camera.near,x.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function W_(i,t,e,n){let s={},r={};function o(y,w){let _=w.program;n.uniformBlockBinding(y,_,s[y.id])}function a(y,w){let _=s[y.id];_===void 0&&(p(y),_=l(y),s[y.id]=_,y.addEventListener("dispose",x));let S=w.program;n.updateUBOMapping(y,S);let b=t.render.frame;r[y.id]!==b&&(h(y),r[y.id]=b)}function l(y){let w=i.createBuffer(),_=y.__size,S=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,_,S),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function h(y){let w=s[y.id],_=y.uniforms,S=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let b=0,m=_.length;b<m;b++){let v=_[b];if(Array.isArray(v))for(let U=0,E=v.length;U<E;U++)c(v[U],b,U,S);else c(v,b,0,S)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function c(y,w,_,S){if(u(y,w,_,S)===!0){let b=y.__offset,m=y.value;if(Array.isArray(m)){let v=0;for(let U=0;U<m.length;U++){let E=m[U],P=M(E,!0);d(E,y.__data,v),v+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else d(m,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,y.__data)}}function d(y,w,_){typeof y=="number"||typeof y=="boolean"?w[_]=y:y.isMatrix3?(w[_]=y.elements[0],w[_+1]=y.elements[1],w[_+2]=y.elements[2],w[_+3]=0,w[_+4]=y.elements[3],w[_+5]=y.elements[4],w[_+6]=y.elements[5],w[_+7]=0,w[_+8]=y.elements[6],w[_+9]=y.elements[7],w[_+10]=y.elements[8],w[_+11]=0):ArrayBuffer.isView(y)?w.set(y.subarray(0,w.length-_),_):y.toArray(w,_)}function u(y,w,_,S){let b=y.value,m=w+"_"+_;if(Array.isArray(b)){S[m]===void 0&&(S[m]=[]);let v=S[m],U=!1;for(let E=0;E<b.length;E++)f(b[E],v,E)===!0&&(U=!0);return U}return f(b,S,m)}function f(y,w,_){if(w[_]===void 0)return typeof y=="number"||typeof y=="boolean"?w[_]=y:ArrayBuffer.isView(y)?w[_]=y.slice():w[_]=y.clone(),!0;{let S=w[_];if(typeof y=="number"||typeof y=="boolean"){if(S!==y)return w[_]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(S.equals(y)===!1)return S.copy(y),!0}}return!1}function p(y){let w=y.uniforms,_=0,S=16;for(let m=0,v=w.length;m<v;m++){let U=Array.isArray(w[m])?w[m]:[w[m]];for(let E=0,P=U.length;E<P;E++){let N=U[E],F=Array.isArray(N.value)?N.value:[N.value],R=Array.isArray(w[m])||Array.isArray(N.value),z=_;for(let J=0,W=F.length;J<W;J++){let Y=F[J],j=M(Y,R),H=_%S,L=H%j.boundary,O=H+L;_+=L,O!==0&&S-O<j.storage&&(_+=S-O),J===0&&(z=_),_+=j.storage}let V=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new V((_-z)/Float32Array.BYTES_PER_ELEMENT),N.__offset=z}}let b=_%S;return b>0&&(_+=S-b),y.__size=_,y.__cache={},this}function M(y,w){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=16,_.storage=48):y.isMatrix4?(_.boundary=16,_.storage=64):y.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(_.boundary=16,_.storage=y.byteLength):Xt("WebGLRenderer: Unsupported uniform value type.",y),w===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function x(y){let w=y.target;w.removeEventListener("dispose",x),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function g(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:g}}var Z_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),zn=null;function Y_(){return zn===null&&(zn=new fr(Z_,16,16,Ri,qe),zn.name="DFG_LUT",zn.minFilter=on,zn.magFilter=on,zn.wrapS=Ln,zn.wrapT=Ln,zn.generateMipmaps=!1,zn.needsUpdate=!0),zn}var ul=class{constructor(t={}){let{canvas:e=Yu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=dn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let M=f,x=new Set([Pa,Ia,Ca]),g=new Set([dn,Nn,Ps,Qi,Ta,Aa]),y=new Uint32Array(4),w=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]},S=null,b=null,m=[],v=[],U=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,P=!1,N=null,F=null,R=null,z=null;this._outputColorSpace=ze;let V=0,J=0,W=null,Y=-1,j=null,H=new we,L=new we,O=null,B=new _t(0),C=0,k=e.width,K=e.height,et=1,ot=null,xt=null,ft=new we(0,0,k,K),wt=new we(0,0,k,K),Mt=!1,tt=new Si,It=new Qo,Dt=!1,Yt=!1,Wt=new Ht,Bt=new G,Qt=new we,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function Se(){return W===null?et:1}let q=n;function Q(A,X){return e.getContext(A,X)}let St,Jt,ut,ne,Ct,at,I,T,D,$,nt,ct,gt,rt,dt,vt,Z,pt,ht,Et,bt,Tt,Gt;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Zt,!1),e.addEventListener("webglcontextrestored",se,!1),e.addEventListener("webglcontextcreationerror",Pt,!1),q===null){let X="webgl2";if(q=Q(X,A),q===null)throw Q(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}re()}catch(A){throw e.removeEventListener("webglcontextlost",Zt,!1),e.removeEventListener("webglcontextrestored",se,!1),e.removeEventListener("webglcontextcreationerror",Pt,!1),Kt("WebGLRenderer: "+A.message),A}function re(){St=new ix(q),St.init(),bt=new O_(q,St),Jt=new Y0(q,St,t,bt),ut=new B_(q,St),Jt.reversedDepthBuffer&&u&&ut.buffers.depth.setReversed(!0),F=q.createFramebuffer(),R=q.createFramebuffer(),z=q.createFramebuffer(),ne=new ox(q),Ct=new b_,at=new k_(q,St,ut,Ct,Jt,bt,ne),I=new nx(E),T=new lm(q),Tt=new W0(q,T),D=new sx(q,T,ne,Tt),$=new lx(q,D,T,Tt,ne),pt=new ax(q,Jt,at),dt=new X0(Ct),nt=new S_(E,I,St,Jt,Tt,dt),ct=new H_(E,Ct),gt=new E_,rt=new P_(St),Z=new H0(E,I,ut,$,p,l),vt=new L_(E,$,Jt),Gt=new W_(q,ne,Jt,ut),ht=new Z0(q,St,ne),Et=new rx(q,St,ne),ne.programs=nt.programs,E.capabilities=Jt,E.extensions=St,E.properties=Ct,E.renderLists=gt,E.shadowMap=vt,E.state=ut,E.info=ne}M!==dn&&(U=new hx(M,e.width,e.height,a,s,r));let yt=new $c(E,q);this.xr=yt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let A=St.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=St.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(A){A!==void 0&&(et=A,this.setSize(k,K,!1))},this.getSize=function(A){return A.set(k,K)},this.setSize=function(A,X,lt=!0){if(yt.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}k=A,K=X,e.width=Math.floor(A*et),e.height=Math.floor(X*et),lt===!0&&(e.style.width=A+"px",e.style.height=X+"px"),U!==null&&U.setSize(e.width,e.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(k*et,K*et).floor()},this.setDrawingBufferSize=function(A,X,lt){k=A,K=X,et=lt,e.width=Math.floor(A*lt),e.height=Math.floor(X*lt),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(M===dn){Kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){Xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(H)},this.getViewport=function(A){return A.copy(ft)},this.setViewport=function(A,X,lt,it){A.isVector4?ft.set(A.x,A.y,A.z,A.w):ft.set(A,X,lt,it),ut.viewport(H.copy(ft).multiplyScalar(Se()).round())},this.getScissor=function(A){return A.copy(wt)},this.setScissor=function(A,X,lt,it){A.isVector4?wt.set(A.x,A.y,A.z,A.w):wt.set(A,X,lt,it),ut.scissor(L.copy(wt).multiplyScalar(Se()).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(A){ut.setScissorTest(Mt=A)},this.setOpaqueSort=function(A){ot=A},this.setTransparentSort=function(A){xt=A},this.getClearColor=function(A){return A.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor(...arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,lt=!0){let it=0;if(A){let st=!1;if(W!==null){let Rt=W.texture.format;st=x.has(Rt)}if(st){let Rt=W.texture.type,kt=g.has(Rt),At=Z.getClearColor(),Ft=Z.getClearAlpha(),zt=At.r,te=At.g,he=At.b;kt?(y[0]=zt,y[1]=te,y[2]=he,y[3]=Ft,q.clearBufferuiv(q.COLOR,0,y)):(w[0]=zt,w[1]=te,w[2]=he,w[3]=Ft,q.clearBufferiv(q.COLOR,0,w))}else it|=q.COLOR_BUFFER_BIT}X&&(it|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),lt&&(it|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it!==0&&q.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),N=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Zt,!1),e.removeEventListener("webglcontextrestored",se,!1),e.removeEventListener("webglcontextcreationerror",Pt,!1),Z.dispose(),gt.dispose(),rt.dispose(),at.dispose(),Ct.dispose(),I.dispose(),$.dispose(),D.dispose(),Tt.dispose(),Gt.dispose(),nt.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",bh),yt.removeEventListener("sessionend",wh),Di.stop()};function Zt(A){A.preventDefault(),Bc("WebGLRenderer: Context Lost."),P=!0}function se(){Bc("WebGLRenderer: Context Restored."),P=!1;let A=ne.autoReset,X=vt.enabled,lt=vt.autoUpdate,it=vt.needsUpdate,st=vt.type;re(),ne.autoReset=A,vt.enabled=X,vt.autoUpdate=lt,vt.needsUpdate=it,vt.type=st}function Pt(A){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function _e(A){let X=A.target;X.removeEventListener("dispose",_e),ke(X)}function ke(A){fi(A),Ct.remove(A)}function fi(A){let X=Ct.get(A).programs;X!==void 0&&(X.forEach(function(lt){nt.releaseProgram(lt)}),A.isShaderMaterial&&nt.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,lt,it,st,Rt){X===null&&(X=ee);let kt=st.isMesh&&st.matrixWorld.determinantAffine()<0,At=ep(A,X,lt,it,st);ut.setMaterial(it,kt);let Ft=lt.index,zt=1;if(it.wireframe===!0){if(Ft=D.getWireframeAttribute(lt),Ft===void 0)return;zt=2}let te=lt.drawRange,he=lt.attributes.position,Ot=te.start*zt,ue=(te.start+te.count)*zt;Rt!==null&&(Ot=Math.max(Ot,Rt.start*zt),ue=Math.min(ue,(Rt.start+Rt.count)*zt)),Ft!==null?(Ot=Math.max(Ot,0),ue=Math.min(ue,Ft.count)):he!=null&&(Ot=Math.max(Ot,0),ue=Math.min(ue,he.count));let Pe=ue-Ot;if(Pe<0||Pe===1/0)return;Tt.setup(st,it,At,lt,Ft);let ve,ye=ht;if(Ft!==null&&(ve=T.get(Ft),ye=Et,ye.setIndex(ve)),st.isMesh)it.wireframe===!0?(ut.setLineWidth(it.wireframeLinewidth*Se()),ye.setMode(q.LINES)):ye.setMode(q.TRIANGLES);else if(st.isLine){let je=it.linewidth;je===void 0&&(je=1),ut.setLineWidth(je*Se()),st.isLineSegments?ye.setMode(q.LINES):st.isLineLoop?ye.setMode(q.LINE_LOOP):ye.setMode(q.LINE_STRIP)}else st.isPoints?ye.setMode(q.POINTS):st.isSprite&&ye.setMode(q.TRIANGLES);if(st.isBatchedMesh)if(St.get("WEBGL_multi_draw"))ye.renderMultiDraw(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount);else{let je=st._multiDrawStarts,Vt=st._multiDrawCounts,sn=st._multiDrawCount,xe=Ft?T.get(Ft).bytesPerElement:1,Li=Ct.get(it).currentProgram.getUniforms();for(let Qe=0;Qe<sn;Qe++)Li.setValue(q,"_gl_DrawID",Qe),ye.render(je[Qe]/xe,Vt[Qe])}else if(st.isInstancedMesh)ye.renderInstances(Ot,Pe,st.count);else if(lt.isInstancedBufferGeometry){let je=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Vt=Math.min(lt.instanceCount,je);ye.renderInstances(Ot,Pe,Vt)}else ye.render(Ot,Pe)};function Sh(A,X,lt,it){N!==null&&A.isNodeMaterial&&N.setObject(it,A),Dt===!0&&dt.setState(A,lt,!1),A.transparent===!0&&A.side===me&&A.forceSinglePass===!1?(A.side=Ce,A.needsUpdate=!0,Zs(A,X,it),A.side=Ai,A.needsUpdate=!0,Zs(A,X,it),A.side=me):Zs(A,X,it)}this.compile=function(A,X,lt=null){lt===null&&(lt=A),N!==null&&N.renderStart(A,X,lt),b=rt.get(lt),b.init(X),v.push(b),lt.traverseVisible(function(st){st.isLight&&st.layers.test(X.layers)&&(b.pushLight(st),st.castShadow&&b.pushShadow(st))}),A!==lt&&A.traverseVisible(function(st){st.isLight&&st.layers.test(X.layers)&&(b.pushLight(st),st.castShadow&&b.pushShadow(st))}),b.setupLights(),N!==null&&N.updateLights(b.state.lightsArray),Yt=this.localClippingEnabled,Dt=dt.init(this.clippingPlanes,Yt),Dt===!0&&dt.setGlobalState(this.clippingPlanes,X),N!==null&&vt.render(b.state.shadowsArray,lt,X);let it=new Set;return A.traverse(function(st){if(!(st.isMesh||st.isPoints||st.isLine||st.isSprite))return;let Rt=st.material;if(Rt)if(Array.isArray(Rt))for(let kt=0;kt<Rt.length;kt++){let At=Rt[kt];Sh(At,lt,X,st),it.add(At)}else Sh(Rt,lt,X,st),it.add(Rt)}),b=v.pop(),N!==null&&N.renderEnd(),it},this.compileAsync=function(A,X,lt=null){let it=this.compile(A,X,lt);return new Promise(st=>{function Rt(){if(it.forEach(function(kt){let Ft=Ct.get(kt).currentProgram;(Ft===void 0||Ft.isReady())&&it.delete(kt)}),it.size===0){st(A);return}setTimeout(Rt,10)}St.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let Dl=null;function $f(A){Dl&&Dl(A)}function bh(){Di.stop()}function wh(){Di.start()}let Di=new vd;Di.setAnimationLoop($f),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(A){Dl=A,yt.setAnimationLoop(A),A===null?Di.stop():Di.start()},yt.addEventListener("sessionstart",bh),yt.addEventListener("sessionend",wh),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N!==null&&N.renderStart(A,X);let lt=yt.enabled===!0&&yt.isPresenting===!0,it=U!==null&&(W===null||lt)&&U.begin(E,W);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(X),X=yt.getCamera()),A.isScene===!0&&A.onBeforeRender(E,A,X,W),b=rt.get(A,v.length),b.init(X),b.state.textureUnits=at.getTextureUnits(),v.push(b),Wt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),X.isArrayCamera?It.setFromArrayCamera(X):tt.setFromProjectionMatrix(Wt,Sn,X.reversedDepth),Yt=this.localClippingEnabled,Dt=dt.init(this.clippingPlanes,Yt),S=gt.get(A,m.length),S.init(),m.push(S),this.info.render.frame++,yt.enabled===!0&&yt.isPresenting===!0){let kt=E.xr.getDepthSensingMesh();kt!==null&&Ll(kt,X,-1/0,E.sortObjects)}Ll(A,X,0,E.sortObjects),S.finish(),N!==null&&N.updateLights(b.state.lightsArray),E.sortObjects===!0&&S.sort(ot,xt),Ae=yt.enabled===!1||yt.isPresenting===!1||yt.hasDepthSensing()===!1,Ae&&Z.addToRenderList(S,A),this.info.autoReset===!0&&this.info.reset(),Dt===!0&&dt.beginShadows();let st=b.state.shadowsArray;if(vt.render(st,A,X),Dt===!0&&dt.endShadows(),(it&&U.hasRenderPass())===!1){let kt=S.opaque,At=S.transmissive;if(b.setupLights(),X.isArrayCamera){let Ft=X.cameras;if(At.length>0)for(let zt=0,te=Ft.length;zt<te;zt++){let he=Ft[zt];Th(kt,At,A,he)}Ae&&Z.render(A);for(let zt=0,te=Ft.length;zt<te;zt++){let he=Ft[zt];Eh(S,A,he,he.viewport)}}else At.length>0&&Th(kt,At,A,X),Ae&&Z.render(A),Eh(S,A,X)}W!==null&&J===0&&(at.updateMultisampleRenderTarget(W),at.updateRenderTargetMipmap(W)),it&&U.end(E),A.isScene===!0&&A.onAfterRender(E,A,X),Tt.resetDefaultState(),Y=-1,j=null,v.pop(),v.length>0?(b=v[v.length-1],at.setTextureUnits(b.state.textureUnits),Dt===!0&&dt.setGlobalState(E.clippingPlanes,b.state.camera)):b=null,m.pop(),m.length>0?S=m[m.length-1]:S=null,N!==null&&N.renderEnd()};function Ll(A,X,lt,it){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)lt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)b.pushLight(A),A.castShadow&&b.pushShadow(A);else if(A.isSprite){let kt=X.isArrayCamera?It:tt;if(!A.frustumCulled||A.intersectsFrustum(kt)){it&&Qt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Wt);let At=$.update(A),Ft=A.material;Ft.visible&&S.push(A,At,Ft,lt,Qt.z,null,X)}}else if(A.isMesh||A.isLine||A.isPoints){let kt=X.isArrayCamera?It:tt;if(!A.frustumCulled||A.intersectsFrustum(kt)){let At=$.update(A),Ft=A.material;if(it&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Qt.copy(A.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Qt.copy(At.boundingSphere.center)),Qt.applyMatrix4(A.matrixWorld).applyMatrix4(Wt)),Array.isArray(Ft)){let zt=At.groups;for(let te=0,he=zt.length;te<he;te++){let Ot=zt[te],ue=Ft[Ot.materialIndex];ue&&ue.visible&&S.push(A,At,ue,lt,Qt.z,Ot,X)}}else Ft.visible&&S.push(A,At,Ft,lt,Qt.z,null,X)}}}let Rt=A.children;for(let kt=0,At=Rt.length;kt<At;kt++)Ll(Rt[kt],X,lt,it)}function Eh(A,X,lt,it){let{opaque:st,transmissive:Rt,transparent:kt}=A;b.setupLightsView(lt),Dt===!0&&dt.setGlobalState(E.clippingPlanes,lt),it&&ut.viewport(H.copy(it)),st.length>0&&ao(st,X,lt),Rt.length>0&&ao(Rt,X,lt),kt.length>0&&ao(kt,X,lt),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function Th(A,X,lt,it){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[it.id]===void 0){let Ot=St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[it.id]=new De(1,1,{generateMipmaps:!0,type:Ot?qe:dn,minFilter:ri,samples:Math.max(4,Jt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:le.workingColorSpace})}let Rt=b.state.transmissionRenderTarget[it.id],kt=it.viewport||H;Rt.setSize(kt.z*E.transmissionResolutionScale,kt.w*E.transmissionResolutionScale);let At=E.getRenderTarget(),Ft=E.getActiveCubeFace(),zt=E.getActiveMipmapLevel();E.setRenderTarget(Rt),E.getClearColor(B),C=E.getClearAlpha(),C<1&&E.setClearColor(16777215,.5),E.clear(),Ae&&Z.render(lt);let te=E.toneMapping;E.toneMapping=Vn;let he=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),b.setupLightsView(it),Dt===!0&&dt.setGlobalState(E.clippingPlanes,it),ao(A,lt,it),at.updateMultisampleRenderTarget(Rt),at.updateRenderTargetMipmap(Rt),St.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let ue=0,Pe=X.length;ue<Pe;ue++){let ve=X[ue],{object:ye,geometry:je,material:Vt,group:sn}=ve;if(Vt.side===me&&ye.layers.test(it.layers)){let xe=Vt.side;Vt.side=Ce,Vt.needsUpdate=!0,Ah(ye,lt,it,je,Vt,sn),Vt.side=xe,Vt.needsUpdate=!0,Ot=!0}}Ot===!0&&(at.updateMultisampleRenderTarget(Rt),at.updateRenderTargetMipmap(Rt))}E.setRenderTarget(At,Ft,zt),E.setClearColor(B,C),he!==void 0&&(it.viewport=he),E.toneMapping=te}function ao(A,X,lt){let it=X.isScene===!0?X.overrideMaterial:null;for(let st=0,Rt=A.length;st<Rt;st++){let kt=A[st],{object:At,geometry:Ft,group:zt}=kt,te=kt.material;te.allowOverride===!0&&it!==null&&(te=it),At.layers.test(lt.layers)&&Ah(At,X,lt,Ft,te,zt)}}function Ah(A,X,lt,it,st,Rt){N!==null&&st.isNodeMaterial&&N.setObject(A,st),A.onBeforeRender(E,X,lt,it,st,Rt),A.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),st.onBeforeRender(E,X,lt,it,A,Rt),st.transparent===!0&&st.side===me&&st.forceSinglePass===!1?(st.side=Ce,st.needsUpdate=!0,E.renderBufferDirect(lt,X,it,st,A,Rt),st.side=Ai,st.needsUpdate=!0,E.renderBufferDirect(lt,X,it,st,A,Rt),st.side=me):E.renderBufferDirect(lt,X,it,st,A,Rt),A.onAfterRender(E,X,lt,it,st,Rt)}function Rh(A){let X=0;for(let lt of A)lt.texture!==null&&X++;return X}function Zs(A,X,lt){X.isScene!==!0&&(X=ee);let it=Ct.get(A),st=b.state.lights,Rt=b.state.shadowsArray,kt=st.state.version,At=nt.getParameters(A,st.state,Rt,X,lt,b.state.lightProbeGridArray),Ft=nt.getProgramCacheKey(At),zt=it.programs;it.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,it.fog=X.fog;let te=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;it.envMap=I.get(A.envMap||it.environment,te),it.envMapRotation=it.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,zt===void 0&&(A.addEventListener("dispose",_e),zt=new Map,it.programs=zt,it.programVariants=new Map);let he=zt.get(Ft);if(he!==void 0){if(it.currentProgram===he&&it.lightsStateVersion===kt)return Ih(A,At),he}else At.uniforms=nt.getUniforms(A),N!==null&&A.isNodeMaterial&&N.build(A,lt,At),A.onBeforeCompile(At,E),he=nt.acquireProgram(At,Ft),zt.set(Ft,he),it.uniforms=At.uniforms;let Ot=it.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ot.clippingPlanes=dt.uniform),Ih(A,At),it.needsLights=ip(A),it.lightsStateVersion=kt,it.needsLights&&(Ot.ambientLightColor.value=st.state.ambient,Ot.lightProbe.value=st.state.probe,Ot.sunLights.value=st.state.sun,Ot.sunLightShadows.value=st.state.sunShadow,Ot.directionalLights.value=st.state.directional,Ot.directionalLightShadows.value=st.state.directionalShadow,Ot.spotLights.value=st.state.spot,Ot.spotLightShadows.value=st.state.spotShadow,Ot.rectAreaLights.value=st.state.rectArea,Ot.ltc_1.value=st.state.rectAreaLTC1,Ot.ltc_2.value=st.state.rectAreaLTC2,Ot.pointLights.value=st.state.point,Ot.pointLightShadows.value=st.state.pointShadow,Ot.hemisphereLights.value=st.state.hemi,Ot.sunShadowMatrix.value=st.state.sunShadowMatrix,Ot.sunShadowCascade.value=st.state.sunShadowCascade,Ot.directionalShadowMatrix.value=st.state.directionalShadowMatrix,Ot.spotLightMatrix.value=st.state.spotLightMatrix,Ot.spotLightMap.value=st.state.spotLightMap,Ot.pointShadowMatrix.value=st.state.pointShadowMatrix),it.numLightProbeGrids=Rh(b.state.lightProbeGridArray),it.currentProgram=he,it.uniformsList=null,he}function tp(A,X,lt,it,st){let Rt=Ct.get(A),kt=Rt.currentProgram.id+","+it+","+st,At=Rt.programVariants.get(kt);return At===void 0?(At=Zs(A,X,lt),Rt.programVariants.set(kt,At)):(Rt.currentProgram=At,Rt.uniformsList=null,Rt.outputColorSpace=it,Rt.toneMapping=st),At}function Ch(A){if(A.uniformsList===null){let X=A.currentProgram.getUniforms();A.uniformsList=Ns.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Ih(A,X){let lt=Ct.get(A);lt.outputColorSpace=X.outputColorSpace,lt.batching=X.batching,lt.batchingColor=X.batchingColor,lt.instancing=X.instancing,lt.instancingColor=X.instancingColor,lt.instancingMorph=X.instancingMorph,lt.skinning=X.skinning,lt.morphTargets=X.morphTargets,lt.morphNormals=X.morphNormals,lt.morphColors=X.morphColors,lt.morphTargetsCount=X.morphTargetsCount,lt.numClippingPlanes=X.numClippingPlanes,lt.numIntersection=X.numClipIntersection,lt.vertexAlphas=X.vertexAlphas,lt.vertexTangents=X.vertexTangents,lt.toneMapping=X.toneMapping}function ep(A,X,lt,it,st){X.isScene!==!0&&(X=ee),at.resetTextureUnits();let Rt=X.fog,kt=it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial?X.environment:null,At=W===null?E.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:le.workingColorSpace,Ft=it.isMeshStandardMaterial||it.isMeshLambertMaterial&&!it.envMap||it.isMeshPhongMaterial&&!it.envMap,zt=I.get(it.envMap||kt,Ft),te=it.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,he=!!lt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Ot=!!lt.morphAttributes.position,ue=!!lt.morphAttributes.normal,Pe=!!lt.morphAttributes.color,ve=Vn;it.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(ve=E.toneMapping);let ye=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,je=ye!==void 0?ye.length:0,Vt=Ct.get(it),sn=b.state.lights;if(Dt===!0&&(Yt===!0||A!==j)){let Ee=A===j&&it.id===Y;dt.setState(it,A,Ee)}let xe=!1,Li=!1;it.version===Vt.__version?Vt.needsLights&&Vt.lightsStateVersion!==sn.state.version||st.isBatchedMesh&&Vt.batching===!1||!st.isBatchedMesh&&Vt.batching===!0||st.isBatchedMesh&&Vt.batchingColor===!0&&st._colorsTexture===null||st.isBatchedMesh&&Vt.batchingColor===!1&&st._colorsTexture!==null||st.isInstancedMesh&&Vt.instancing===!1||!st.isInstancedMesh&&Vt.instancing===!0||st.isSkinnedMesh&&Vt.skinning===!1||!st.isSkinnedMesh&&Vt.skinning===!0||st.isInstancedMesh&&Vt.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&Vt.instancingColor===!1&&st.instanceColor!==null||st.isInstancedMesh&&Vt.instancingMorph===!0&&st.morphTexture===null||st.isInstancedMesh&&Vt.instancingMorph===!1&&st.morphTexture!==null||Vt.envMap!==zt||it.fog===!0&&Vt.fog!==Rt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==dt.numPlanes||Vt.numIntersection!==dt.numIntersection)||Vt.vertexAlphas!==te||Vt.vertexTangents!==he||Vt.morphTargets!==Ot||Vt.morphNormals!==ue||Vt.morphColors!==Pe||Vt.morphTargetsCount!==je||Vt.numLightProbeGrids!==Rh(b.state.lightProbeGridArray)?xe=!0:(Vt.outputColorSpace!==At||Vt.toneMapping!==ve)&&(Li=!0):(xe=!0,Vt.__version=it.version);let Qe=Vt.currentProgram;(xe===!0||Li===!0)&&(Qe=Li===!0?tp(it,X,st,At,ve):Zs(it,X,st),N&&it.isNodeMaterial&&N.onUpdateProgram(it,Qe,Vt));let lo=!1,pi=!1,Bi=!1,pe=Qe.getUniforms(),Xe=Vt.uniforms;if(ut.useProgram(Qe.program)&&(lo=!0,pi=!0,Bi=!0),it.id!==Y&&(Y=it.id,pi=!0),lo||j!==A){ut.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),pe.setValue(q,"projectionMatrix",A.projectionMatrix),pe.setValue(q,"viewMatrix",A.matrixWorldInverse);let Oe=pe.map.cameraPosition;Oe!==void 0&&Oe.setValue(q,Bt.setFromMatrixPosition(A.matrixWorld)),Jt.logarithmicDepthBuffer&&pe.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&pe.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),j!==A&&(j=A,pi=!0,Bi=!0)}if(Vt.needsLights&&(sn.state.sunShadowMap.length>0&&pe.setValue(q,"sunShadowMap",sn.state.sunShadowMap,at),sn.state.directionalShadowMap.length>0&&pe.setValue(q,"directionalShadowMap",sn.state.directionalShadowMap,at),sn.state.spotShadowMap.length>0&&pe.setValue(q,"spotShadowMap",sn.state.spotShadowMap,at),sn.state.pointShadowMap.length>0&&pe.setValue(q,"pointShadowMap",sn.state.pointShadowMap,at)),st.isSkinnedMesh){pe.setOptional(q,st,"bindMatrix"),pe.setOptional(q,st,"bindMatrixInverse");let Ee=st.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),pe.setValue(q,"boneTexture",Ee.boneTexture,at))}st.isBatchedMesh&&(pe.setOptional(q,st,"batchingTexture"),pe.setValue(q,"batchingTexture",st._matricesTexture,at),pe.setOptional(q,st,"batchingIdTexture"),pe.setValue(q,"batchingIdTexture",st._indirectTexture,at),pe.setOptional(q,st,"batchingColorTexture"),st._colorsTexture!==null&&pe.setValue(q,"batchingColorTexture",st._colorsTexture,at));let An=lt.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&pt.update(st,lt,Qe),(pi||Vt.receiveShadow!==st.receiveShadow)&&(Vt.receiveShadow=st.receiveShadow,pe.setValue(q,"receiveShadow",st.receiveShadow)),(it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial)&&it.envMap===null&&X.environment!==null&&(Xe.envMapIntensity.value=X.environmentIntensity),Xe.dfgLUT!==void 0&&(Xe.dfgLUT.value=Y_()),pi){if(pe.setValue(q,"toneMappingExposure",E.toneMappingExposure),Vt.needsLights&&np(Xe,Bi),Rt&&it.fog===!0&&ct.refreshFogUniforms(Xe,Rt),ct.refreshMaterialUniforms(Xe,it,et,K,b.state.transmissionRenderTarget[A.id]),Vt.needsLights&&Vt.numLightProbeGrids>0){let Ee=_,Oe=0;for(let Xn of b.state.lightProbeGridArray)Xn.texture!==null&&(Ee.textures[Oe]=Xn.texture,Ee.min[Oe]=Xn.boundingBox.min,Ee.max[Oe]=Xn.boundingBox.max,Ee.resolution[Oe]=Xn.resolution,Oe++);for(let Xn in Ee)Ee[Xn].length=Oe;Xe.probesSH.value=Ee.textures,Xe.probesMin.value=Ee.min,Xe.probesMax.value=Ee.max,Xe.probesResolution.value=Ee.resolution}Ns.upload(q,Ch(Vt),Xe,at)}if(it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Ns.upload(q,Ch(Vt),Xe,at),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&pe.setValue(q,"center",st.center),pe.setValue(q,"modelViewMatrix",st.modelViewMatrix),pe.setValue(q,"normalMatrix",st.normalMatrix),pe.setValue(q,"modelMatrix",st.matrixWorld),it.uniformsGroups!==void 0){let Ee=it.uniformsGroups;for(let Oe=0,Xn=Ee.length;Oe<Xn;Oe++){let Uh=Ee[Oe];Gt.update(Uh,Qe),Gt.bind(Uh,Qe)}}return Qe}function np(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.sunLights.needsUpdate=X,A.sunLightShadows.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function ip(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(A,X,lt){let it=Ct.get(A);it.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),Ct.get(A.texture).__webglTexture=X,Ct.get(A.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:lt,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){let lt=Ct.get(A);lt.__webglFramebuffer=X,lt.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,lt=0){W=A,V=X,J=lt;let it=null,st=!1,Rt=!1;if(A){let At=Ct.get(A);if(At.__useDefaultFramebuffer!==void 0){ut.bindFramebuffer(q.FRAMEBUFFER,At.__webglFramebuffer),H.copy(A.viewport),L.copy(A.scissor),O=A.scissorTest,ut.viewport(H),ut.scissor(L),ut.setScissorTest(O),Y=-1;return}else if(At.__webglFramebuffer===void 0)at.setupRenderTarget(A);else if(At.__hasExternalTextures)at.rebindTextures(A,Ct.get(A.texture).__webglTexture,Ct.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let te=A.depthTexture;if(At.__boundDepthTexture!==te){if(te!==null&&Ct.has(te)&&(A.width!==te.image.width||A.height!==te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(A)}}let Ft=A.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(Rt=!0);let zt=Ct.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(zt[X])?it=zt[X][lt]:it=zt[X],st=!0):A.samples>0&&at.useMultisampledRTT(A)===!1?it=Ct.get(A).__webglMultisampledFramebuffer:Array.isArray(zt)?it=zt[lt]:it=zt,H.copy(A.viewport),L.copy(A.scissor),O=A.scissorTest}else H.copy(ft).multiplyScalar(et).floor(),L.copy(wt).multiplyScalar(et).floor(),O=Mt;if(lt!==0&&(it=F),ut.bindFramebuffer(q.FRAMEBUFFER,it)&&ut.drawBuffers(A,it),ut.viewport(H),ut.scissor(L),ut.setScissorTest(O),st){let At=Ct.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+X,At.__webglTexture,lt)}else if(Rt){let At=X;for(let Ft=0;Ft<A.textures.length;Ft++){let zt=Ct.get(A.textures[Ft]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Ft,zt.__webglTexture,lt,At)}}else if(A!==null&&lt!==0){let At=Ct.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,At.__webglTexture,lt)}Y=-1};function Ph(A){let X=Ct.get(A);return(X.__readFormat!==A.format||X.__readType!==A.type)&&(X.__readFormat=A.format,X.__readType=A.type,X.__formatReadable=Jt.textureFormatReadable(A.format),X.__typeReadable=Jt.textureTypeReadable(A.type)),X}this.readRenderTargetPixels=function(A,X,lt,it,st,Rt,kt,At=0){if(!(A&&A.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Ct.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&kt!==void 0&&(Ft=Ft[kt],Array.isArray(Ft)&&(Ft=Ft[0])),Ft){ut.bindFramebuffer(q.FRAMEBUFFER,Ft);try{let zt=A.textures[At],te=zt.format,he=zt.type;A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+At);let Ot=Ph(zt);if(Ot.__formatReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ot.__typeReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-it&&lt>=0&&lt<=A.height-st&&q.readPixels(X,lt,it,st,bt.convert(te),bt.convert(he),Rt)}finally{let zt=W!==null?Ct.get(W).__webglFramebuffer:null;ut.bindFramebuffer(q.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(A,X,lt,it,st,Rt,kt,At=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=Ct.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&kt!==void 0&&(Ft=Ft[kt],Array.isArray(Ft)&&(Ft=Ft[0])),Ft)if(X>=0&&X<=A.width-it&&lt>=0&&lt<=A.height-st){ut.bindFramebuffer(q.FRAMEBUFFER,Ft);let zt=A.textures[At],te=zt.format,he=zt.type;A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+At);let Ot=Ph(zt);if(Ot.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ot.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ue=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,ue),q.bufferData(q.PIXEL_PACK_BUFFER,Rt.byteLength,q.STREAM_READ),q.readPixels(X,lt,it,st,bt.convert(te),bt.convert(he),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);let Pe=W!==null?Ct.get(W).__webglFramebuffer:null;ut.bindFramebuffer(q.FRAMEBUFFER,Pe);let ve=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await Ju(q,ve,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,ue),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Rt),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(ue),q.deleteSync(ve),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,lt=0){let it=Math.pow(2,-lt),st=Math.floor(A.image.width*it),Rt=Math.floor(A.image.height*it),kt=X!==null?X.x:0,At=X!==null?X.y:0;at.setTexture2D(A,0),q.copyTexSubImage2D(q.TEXTURE_2D,lt,0,0,kt,At,st,Rt),ut.unbindTexture()},this.copyTextureToTexture=function(A,X,lt=null,it=null,st=0,Rt=0){let kt,At,Ft,zt,te,he,Ot,ue,Pe,ve=A.isCompressedTexture?A.mipmaps[Rt]:A.image;if(lt!==null)kt=lt.max.x-lt.min.x,At=lt.max.y-lt.min.y,Ft=lt.isBox3?lt.max.z-lt.min.z:1,zt=lt.min.x,te=lt.min.y,he=lt.isBox3?lt.min.z:0;else{let pe=Math.pow(2,-st);kt=Math.floor(ve.width*pe),At=Math.floor(ve.height*pe),A.isDataArrayTexture?Ft=ve.depth:A.isData3DTexture?Ft=Math.floor(ve.depth*pe):Ft=1,zt=0,te=0,he=0}it!==null?(Ot=it.x,ue=it.y,Pe=it.z):(Ot=0,ue=0,Pe=0);let ye=bt.convert(X.format),je=bt.convert(X.type),Vt;X.isData3DTexture?(at.setTexture3D(X,0),Vt=q.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(at.setTexture2DArray(X,0),Vt=q.TEXTURE_2D_ARRAY):(at.setTexture2D(X,0),Vt=q.TEXTURE_2D),ut.activeTexture(q.TEXTURE0),ut.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,X.flipY),ut.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),ut.pixelStorei(q.UNPACK_ALIGNMENT,X.unpackAlignment);let sn=ut.getParameter(q.UNPACK_ROW_LENGTH),xe=ut.getParameter(q.UNPACK_IMAGE_HEIGHT),Li=ut.getParameter(q.UNPACK_SKIP_PIXELS),Qe=ut.getParameter(q.UNPACK_SKIP_ROWS),lo=ut.getParameter(q.UNPACK_SKIP_IMAGES);ut.pixelStorei(q.UNPACK_ROW_LENGTH,ve.width),ut.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ve.height),ut.pixelStorei(q.UNPACK_SKIP_PIXELS,zt),ut.pixelStorei(q.UNPACK_SKIP_ROWS,te),ut.pixelStorei(q.UNPACK_SKIP_IMAGES,he);let pi=A.isDataArrayTexture||A.isData3DTexture,Bi=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){let pe=Ct.get(A),Xe=Ct.get(X),An=Ct.get(pe.__renderTarget),Ee=Ct.get(Xe.__renderTarget);ut.bindFramebuffer(q.READ_FRAMEBUFFER,An.__webglFramebuffer),ut.bindFramebuffer(q.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Oe=0;Oe<Ft;Oe++)pi&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ct.get(A).__webglTexture,st,he+Oe),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ct.get(X).__webglTexture,Rt,Pe+Oe)),q.blitFramebuffer(zt,te,zt+kt,te+At,Ot,ue,Ot+kt,ue+At,q.DEPTH_BUFFER_BIT,q.NEAREST);ut.bindFramebuffer(q.READ_FRAMEBUFFER,null),ut.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(st!==0||A.isRenderTargetTexture||Ct.has(A)){let pe=Ct.get(A),Xe=Ct.get(X);ut.bindFramebuffer(q.READ_FRAMEBUFFER,R),ut.bindFramebuffer(q.DRAW_FRAMEBUFFER,z);for(let An=0;An<Ft;An++)pi?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,pe.__webglTexture,st,he+An):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,pe.__webglTexture,st),Bi?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Xe.__webglTexture,Rt,Pe+An):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Xe.__webglTexture,Rt),st!==0?q.blitFramebuffer(zt,te,zt+kt,te+At,Ot,ue,Ot+kt,ue+At,q.COLOR_BUFFER_BIT,q.NEAREST):Bi?q.copyTexSubImage3D(Vt,Rt,Ot,ue,Pe+An,zt,te,kt,At):q.copyTexSubImage2D(Vt,Rt,Ot,ue,zt,te,kt,At);ut.bindFramebuffer(q.READ_FRAMEBUFFER,null),ut.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Bi?A.isDataTexture||A.isData3DTexture?q.texSubImage3D(Vt,Rt,Ot,ue,Pe,kt,At,Ft,ye,je,ve.data):X.isCompressedArrayTexture?q.compressedTexSubImage3D(Vt,Rt,Ot,ue,Pe,kt,At,Ft,ye,ve.data):q.texSubImage3D(Vt,Rt,Ot,ue,Pe,kt,At,Ft,ye,je,ve):A.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Rt,Ot,ue,kt,At,ye,je,ve.data):A.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Rt,Ot,ue,ve.width,ve.height,ye,ve.data):q.texSubImage2D(q.TEXTURE_2D,Rt,Ot,ue,kt,At,ye,je,ve);ut.pixelStorei(q.UNPACK_ROW_LENGTH,sn),ut.pixelStorei(q.UNPACK_IMAGE_HEIGHT,xe),ut.pixelStorei(q.UNPACK_SKIP_PIXELS,Li),ut.pixelStorei(q.UNPACK_SKIP_ROWS,Qe),ut.pixelStorei(q.UNPACK_SKIP_IMAGES,lo),Rt===0&&X.generateMipmaps===!0&&X.mipmapsAutoUpdate===!0&&q.generateMipmap(Vt),ut.unbindTexture()},this.initRenderTarget=function(A){Ct.get(A).__webglFramebuffer===void 0&&at.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?at.setTextureCube(A,0):A.isData3DTexture?at.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?at.setTexture2DArray(A,0):at.setTexture2D(A,0),ut.unbindTexture()},this.resetState=function(){V=0,J=0,W=null,ut.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var Ds={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var yn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},X_=new Xi(-1,1,1,-1,0,1),th=class extends ie{constructor(){super(),this.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Lt([0,2,0,0,2,0],2))}},J_=new th,Ci=class{constructor(t){this._mesh=new qt(J_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,X_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var pl=class extends yn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof We?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=li.clone(t.uniforms),this.material=new We({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Ci(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var qr=class extends yn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ml=class extends yn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var gl=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Ut);this._width=n.width,this._height=n.height,e=new De(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qe}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new pl(Ds),this.copyPass.material.blending=si,this.timer=new Rr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}qr!==void 0&&(o instanceof qr?n=!0:o instanceof ml&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Ut);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var xl=class extends yn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new _t}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Ud={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new _t(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ls=class i extends yn{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Ut(t.x,t.y):new Ut(256,256),this.clearColor=new _t(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new De(r,o,{type:qe,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){let d=new De(r,o,{type:qe,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+c,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new De(r,o,{type:qe,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+c,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=Ud;this.highPassUniforms=li.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new We({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new Ut(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=li.clone(Ds.uniforms),this.blendMaterial=new We({uniforms:this.copyUniforms,vertexShader:Ds.vertexShader,fragmentShader:Ds.fragmentShader,premultipliedAlpha:!0,blending:_n,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new _t,this._oldClearAlpha=1,this._basic=new oe,this._fsQuad=new Ci(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ut(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,h=a+l;s.push((o*a+(o+1)*l)/h),r.push(h)}return new We({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ut(.5,.5)},direction:{value:new Ut(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}};Ls.BlurDirectionX=new Ut(1,0);Ls.BlurDirectionY=new Ut(0,1);var jr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var _l=class extends yn{constructor(){super(),this.isOutputPass=!0,this.uniforms=li.clone(jr.uniforms),this.material=new Es({name:jr.name,uniforms:this.uniforms,vertexShader:jr.vertexShader,fragmentShader:jr.fragmentShader}),this._fsQuad=new Ci(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},le.getTransfer(this._outputColorSpace)===ge&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Pr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ur?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Nr?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===qi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Dr?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Lr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Fr&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function yl(i,t,{fog:e=[40,120],light:n="fixed",ambient:s=.6,glow:r=null}={}){let o=new ul({antialias:!0});o.setPixelRatio(Math.min(globalThis.devicePixelRatio||1,2)),o.setClearColor(new _t(t.bg)),i.appendChild(o.domElement),r&&(o.toneMapping=qi);let a=new hr;e&&(a.fog=new cr(new _t(t.bg),e[0],e[1]));let l=new tn(50,1,.1,400);a.add(new Ar(16777215,s));let h=new Tr(16777215,2.2);n==="camera"?(h.position.set(-.5,.9,.45),l.add(h),l.add(h.target),h.target.position.set(0,0,-1),a.add(l)):(h.position.set(20,30,25),a.add(h));function c(){let v=i.clientWidth||300,U=i.clientHeight||300;o.setSize(v,U),d&&(d.setPixelRatio(o.getPixelRatio()),d.setSize(v,U)),l.aspect=v/U,l.updateProjectionMatrix()}let d=null;r&&(d=new gl(o),d.addPass(new xl(a,l)),d.addPass(new Ls(new Ut(256,256),r.strength??.8,r.radius??.6,r.threshold??.55)),d.addPass(new _l)),c();let u=new G,f=new G,p=new bn,M=new G,x=new Ht,g=new G,y=1,w="",_=()=>{let v=0;return a.traverse(U=>{(U.isMesh||U.isLine||U.isPoints)&&!U.userData.backdrop&&(v+=1+(U.isInstancedMesh?U.count:0)+(U.geometry&&U.geometry.attributes.position?U.geometry.attributes.position.count:0))}),v},S=v=>{v.sort((E,P)=>E-P);let U=v.length;return(v[Math.floor(U*.02)]+v[Math.min(U-1,Math.floor(U*.98))])/2};function b(v){a.updateMatrixWorld(!0);let U=[];a.traverse(F=>{if(!(!(F.isMesh||F.isLine||F.isPoints)||F.userData.backdrop)){if(F.isInstancedMesh)for(let R=0;R<F.count;R++)F.getMatrixAt(R,x),U.push(M.setFromMatrixPosition(x).applyMatrix4(F.matrixWorld).clone());else if(p.makeEmpty().expandByObject(F),!p.isEmpty())for(let R=0;R<8;R++)U.push(g.set(R&1?p.max.x:p.min.x,R&2?p.max.y:p.min.y,R&4?p.max.z:p.min.z).clone())}}),w=_();let E=U.filter(F=>Number.isFinite(F.x+F.y+F.z));if(!E.length){u.set(0,0,0),y=1;return}u.set(S(E.map(F=>F.x)),S(E.map(F=>F.y)),S(E.map(F=>F.z)));let P=E.map(F=>F.distanceTo(u)).sort((F,R)=>F-R),N=P[Math.min(P.length-1,Math.floor(P.length*.98))]*1.05;if(!(N>0)){y=1;return}y=Math.max(.3,Math.min(30,2.4*N/v))}let m=null;return{renderer:o,scene:a,camera:l,resize:c,canvas:o.domElement,fit:b,changed:()=>_()!==w,centre:u,orbit(v,U,E,P){let N=y/Math.min(1,l.aspect*1.15),F=E*N,R=P?(f.set(u.x+P.x*F,u.y,u.z+P.z*F),f):u;e&&(a.fog.near=e[0]*N,a.fog.far=e[1]*N),l.position.set(R.x+Math.sin(v)*Math.cos(U)*F,R.y+Math.sin(U)*F,R.z+Math.cos(v)*Math.cos(U)*F),l.lookAt(R),m&&m.position.copy(l.position),l.updateMatrixWorld()},sky({top:v,haze:U,stars:E=0,starColor:P="#ffffff"}){m&&(a.remove(m),m.traverse(Y=>{Y.geometry&&(Y.geometry.dispose(),Y.material.dispose())}));let N=300,F=new de(N,24,16),R=F.getAttribute("position"),z=[],V=new _t(U),J=new _t(v),W=new _t;for(let Y=0;Y<R.count;Y++){let j=Math.max(0,Math.min(1,R.getY(Y)/N/.5));W.copy(V).lerp(J,j*j*(3-2*j)),z.push(W.r,W.g,W.b)}if(F.setAttribute("color",new Lt(z,3)),m=new qt(F,new oe({vertexColors:!0,side:Ce,fog:!1,depthTest:!1,depthWrite:!1})),m.renderOrder=-10,m.frustumCulled=!1,m.userData.backdrop=!0,E>0){let Y=[];for(let H=0;H<E;H++){let L=H*2654435761%6283/1e3,O=.12+H*40503%1e3/1e3*.85,B=Math.sqrt(1-O*O);Y.push(Math.cos(L)*B*N*.98,O*N*.98,Math.sin(L)*B*N*.98)}let j=new Gi(new ie().setAttribute("position",new Lt(Y,3)),new bi({color:P,size:1.6,sizeAttenuation:!1,fog:!1,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.8}));j.renderOrder=-9,j.frustumCulled=!1,j.userData.backdrop=!0,m.add(j)}a.add(m),m.position.copy(l.position),o.setClearColor(V),e&&a.fog.color.copy(V)},render(){d?d.render():o.render(a,l)},snapshot(){return this.render(),o.domElement.toDataURL("image/png")},dispose(){a.traverse(v=>{v.geometry&&v.geometry.dispose(),v.material&&v.material.dispose(),v.isInstancedMesh&&v.dispose()}),d&&d.dispose(),o.dispose(),o.domElement.remove()}}}function Nd(i,{yaw:t=.6,pitch:e=.3,dist:n=48,min:s=15,max:r=110,minPitch:o=.3,maxPitch:a=1.4,pan:l=!1,onChange:h,onClick:c,onHover:d}){let u=i.canvas,f={yaw:t,pitch:e,dist:n,x:0,z:0},p=new Map,M=e,x=.75,g=!1,y=null,w=0;u.style.touchAction="none";let _=E=>Math.max(s,Math.min(r,E)),S=E=>Math.max(o,Math.min(a,E)),b=E=>Math.max(-.7,Math.min(.7,E)),m=(E,P)=>{let N=2*Math.tan(25*Math.PI/180)/(u.clientHeight||300);f.x=b(f.x-(Math.cos(f.yaw)*E+Math.sin(f.yaw)*P)*N),f.z=b(f.z+(Math.sin(f.yaw)*E-Math.cos(f.yaw)*P)*N)},v=()=>{let[E,P]=[...p.values()];return Math.hypot(E.x-P.x,E.y-P.y)},U={pointerdown(E){p.set(E.pointerId,{x:E.clientX,y:E.clientY});try{u.setPointerCapture(E.pointerId)}catch{}p.size===1?(g=!1,y={x:E.clientX,y:E.clientY}):(g=!0,w=v())},pointermove(E){let P=p.get(E.pointerId);if(!P){E.pointerType==="mouse"&&d&&d(E.clientX,E.clientY);return}let N=E.clientX-P.x,F=E.clientY-P.y;if(P.x=E.clientX,P.y=E.clientY,p.size===2){let R=v();w>0&&R>0&&(f.dist=_(f.dist*w/R),h()),w=R;return}!g&&Math.abs(E.clientX-y.x)+Math.abs(E.clientY-y.y)>4&&(g=!0),g&&(l?m(N,F):(f.yaw-=N*.008,f.pitch=S(f.pitch+F*.008)),h())},pointerup(E){p.delete(E.pointerId)&&!g&&!p.size&&c&&c(E.clientX,E.clientY)},pointercancel(E){p.delete(E.pointerId)},wheel(E){E.preventDefault(),f.dist=_(f.dist*(1+Math.sign(E.deltaY)*.08)),h()}};for(let[E,P]of Object.entries(U))u.addEventListener(E,P,{passive:E!=="wheel"});return{get yaw(){return f.yaw},get pitch(){return f.pitch},get dist(){return f.dist},get x(){return f.x},get z(){return f.z},set(E){Object.assign(f,E),f.dist=_(f.dist),f.pitch=S(f.pitch),f.x=b(f.x),f.z=b(f.z),h()},get tilted(){return f.pitch<M-.2},tilt(E=!(f.pitch<M-.2)){return f.pitch=S(E?x:M),h(),E},apply(){i.orbit(f.yaw,f.pitch,f.dist,f)},dispose(){for(let[E,P]of Object.entries(U))u.removeEventListener(E,P)}}}var Ml=new G;function Bs(i,t){let e=i.camera,n=i.canvas.clientWidth,s=i.canvas.clientHeight;Ml.set(t[0],t[1],t[2]).applyMatrix4(e.matrixWorldInverse);let r=-Ml.z;if(r<=e.near)return null;let o=s/(2*Math.tan(e.fov*Math.PI/360));return{x:n/2+Ml.x*o/r,y:s/2-Ml.y*o/r,depth:r,px:o/r}}function Fd(i,t,e,n,s=8){let r=null,o=1/0,a=null,l=1/0;for(let h of t){let c=Bs(i,h.at);if(!c)continue;let d=Math.hypot(c.x-e,c.y-n),u=h.r*c.px;d<=u?c.depth<o&&(o=c.depth,r=h.key):d-u<=s&&d-u<l&&(l=d-u,a=h.key)}return r||a}var Qr=(i,t)=>(Object.assign(i.style,t),i);function Dd(i,t){getComputedStyle(i).position==="static"&&(i.style.position="relative");let e=`0 0 3px ${t.bg}, 0 0 3px ${t.bg}, 0 1px 2px ${t.bg}`,n=`color-mix(in srgb, ${t.bg} 72%, transparent)`,s=(E,P,N)=>{let F=document.createElement(E);return Qr(F,P),(N||r).appendChild(F),F},r=Qr(document.createElement("div"),{position:"absolute",inset:"0",pointerEvents:"none",overflow:"hidden",font:"13px system-ui, sans-serif",color:t.fg,userSelect:"none"});r.className="vgv-frame",i.appendChild(r);let o=s("div",{position:"absolute",left:"12px",top:"10px",right:"12px",color:t.muted,textShadow:e});o.className="vgv-stat";let a=s("div",{position:"absolute",left:"12px",top:"34px",right:"12px",display:"flex",flexWrap:"wrap",gap:"2px 12px",fontSize:"11px",color:t.muted,textShadow:e});a.className="vgv-legend";let l=s("div",{position:"absolute",left:"10px",right:"10px",bottom:"112px",maxHeight:"55%",overflowY:"auto",display:"none",flexDirection:"column",gap:"8px",padding:"10px 12px",borderRadius:"10px",background:t.bg,border:`1px solid ${t.muted}`,pointerEvents:"auto",userSelect:"text"});l.className="vgv-insights";let h=s("div",{position:"absolute",top:"34px",left:"0",right:"0",display:"none",justifyContent:"center"}),c=s("div",{position:"absolute",inset:"0"});c.className="vgv-labels";let d=s("div",{position:"absolute",inset:"0",pointerEvents:"none"});d.className="vgv-rings";let u=s("div",{position:"absolute",left:"0",right:"0",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",padding:"0 12px"});u.className="vgv-controls";let f=s("div",{position:"absolute",display:"none",maxWidth:"260px",padding:"4px 8px",borderRadius:"6px",background:t.bg,border:`1px solid ${t.muted}`,color:t.fg,fontSize:"12px"});f.className="vgv-tip",r.appendChild(l);let p=40,M=24;function x(E,{label:P,title:N,run:F,off:R},z){let V=s("button",Object.assign({pointerEvents:R?"none":"auto",cursor:"pointer",minHeight:p+"px",height:"auto",minWidth:p+"px",width:"auto",padding:"6px 14px",margin:"0",borderRadius:"8px",border:`1px solid ${t.muted}`,background:t.bg,color:t.fg,font:"600 13px system-ui, sans-serif",boxShadow:"none",opacity:R?"0.35":"1",lineHeight:"1.2"},z||{}),E);return V.type="button",V.textContent=P,V.disabled=!!R,N&&(V.title=N,V.setAttribute("aria-label",N)),V.addEventListener("click",J=>{J.stopPropagation(),F()}),V}let g=E=>{let P=E.canvas.getBoundingClientRect(),N=r.getBoundingClientRect();return{x:P.left-N.left,y:P.top-N.top}},y=[],w=null,_=!1,S={},b=null,m=[],v=()=>{let E=a.querySelector(".vgv-mark");if(E&&E.remove(),!b)return;let P=s("span",{display:"inline-flex",alignItems:"center",gap:"5px"},a);P.className="vgv-mark",s("i",{width:"9px",height:"9px",borderRadius:"50%",border:`2px solid ${t.warn}`,boxSizing:"border-box"},P),P.append(b)},U=()=>{if(l.style.display=w&&_?"flex":"none",l.replaceChildren(),!(!w||!_)){if(w.plain){let E=s("div",{color:t.fg,lineHeight:"1.35",fontWeight:"600"},l);E.textContent=w.plain}w.about&&(s("div",{color:t.fg,lineHeight:"1.35"},l).textContent=w.about);for(let E of w.insights||[]){let P=s("div",{display:"flex",gap:"8px",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"},l);s("div",{color:t.muted,flex:"1 1 160px",lineHeight:"1.35"},P).textContent=E.text;let N=[...E.run?[{label:E.label||"Show",title:E.title||E.label||"Show",run:E.run}]:[],...E.extra||[]];for(let F of N)x(P,F,{minHeight:p+"px",padding:"4px 10px",fontWeight:"500"})}}};return{stat(E){o.textContent=E||""},explain(E){w=E||null,a.replaceChildren();for(let P of w&&w.legend||[]){let N=s("span",{display:"inline-flex",alignItems:"center",gap:"5px"},a);s("i",{width:"9px",height:"9px",borderRadius:"50%",background:P.color,display:"inline-block",flex:"none"},N),s("span",{},N).textContent=P.text}w||(_=!1),v(),U(),this.controls(S)},card(E){_=!!E&&!!w,U(),this.controls(S)},mark(E){b=E||null,v()},rings(E,P){for(;m.length<E.length;){let F=s("div",{position:"absolute",left:"0",top:"0",borderRadius:"50%",boxSizing:"border-box",willChange:"transform"},d);m.push(F)}let N=g(P);m.forEach((F,R)=>{let z=E[R],V=z&&Bs(P,z.at);if(!V){F.style.display="none";return}V.x+=N.x,V.y+=N.y;let J=Math.max(4,Math.min(24,z.r*V.px))+4,W=2*J+(z.n>1?8:0);Qr(F,{display:"",width:W+"px",height:W+"px",border:`2px solid ${t.warn}`,boxShadow:z.n>1?`inset 0 0 0 2px transparent, inset 0 0 0 3.5px ${t.warn}`:"none",transform:`translate(${Math.round(V.x-W/2)}px, ${Math.round(V.y-W/2)}px)`})})},controls(E={}){S=E;let{at:P="bottom",lines:N=[],buttons:F=[]}=E,R=w&&P==="bottom"?[...F,{label:_?"Close":"Insights",title:_?"Close the insights":"How the notes relate to this view and how to improve them",run:()=>{_=!_,U(),this.controls(S)}}]:F;if(u.replaceChildren(),Qr(u,P==="centre"?{top:"50%",bottom:"auto",transform:"translateY(-50%)"}:{top:"auto",bottom:"18px",transform:"none"}),N.forEach((z,V)=>{s("div",{textAlign:"center",textShadow:e,color:V||P!=="centre"?t.muted:t.fg,fontWeight:V||P!=="centre"?"400":"600",fontSize:V||P!=="centre"?"13px":"14px"},u).textContent=z}),R.length){let z=s("div",{display:"flex",gap:"8px",alignItems:"center",justifyContent:"center",maxWidth:"100%"},u);R.forEach(V=>x(z,V,V.wide?{maxWidth:"70vw",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}:null))}},chip(E,P){h.replaceChildren(),h.style.display=E?"flex":"none",E&&x(h,{label:`${E}  \u2715`,title:`${E}. Clear`,run:P},{borderRadius:"18px",fontWeight:"400"})},labels(E){c.replaceChildren(),y=E.map(P=>{let N={position:"absolute",left:"0",top:"0",whiteSpace:"nowrap",color:P.color||t.fg,textShadow:e,font:`${P.strong?"700 15px":"12px"} system-ui, sans-serif`,willChange:"transform",background:n,borderRadius:"5px",padding:"1px 5px"},F=P.run?x(c,{label:P.text,title:P.title,run:P.run},Object.assign(N,{minHeight:M+"px",minWidth:M+"px",padding:"3px 5px",border:"none",background:n})):s("div",N,c);return P.run||(F.textContent=P.text),{l:P,n:F,w:F.offsetWidth,h:F.offsetHeight}})},tip(E,P,N){f.style.display=E?"block":"none",E&&(f.textContent=E,Qr(f,{left:Math.max(4,Math.min(r.clientWidth-264,P+14))+"px",top:Math.max(4,N+16)+"px"}))},place(E){let P=r.clientWidth,N=r.clientHeight,F=[],R=g(E);for(let{l:z,n:V,w:J,h:W}of y){let Y=Bs(E,z.at);Y&&(Y.x+=R.x,Y.y+=R.y);let j=!!Y&&Y.x>-J&&Y.x<P+J&&Y.y>-W&&Y.y<N+W,H=0,L=0;j&&(H=Math.max(6,Math.min(P-J-6,z.side==="right"?Y.x+(z.dx||0):Y.x-J/2)),L=Math.max(34+(a.offsetHeight?a.offsetHeight+6:0),Math.min(N-110,Y.y+(z.dy||0)-W/2)),j=!F.some(O=>H<O[0]+O[2]&&H+J>O[0]&&L<O[1]+O[3]&&L+W>O[1])),V.style.display=j?"":"none",j&&(V.style.transform=`translate(${Math.round(H)}px, ${Math.round(L)}px)`,F.push([H,L,J,W]))}},dispose(){r.remove()}}}function Ld(i,t,e){let n=yl(i,e.theme,t.stage),s=Dd(i,e.theme),r=0,o=!1,a=null,l=new Map,h=!1,c=0,d=!!e.motion&&!(globalThis.matchMedia&&globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches);n.canvas.addEventListener("pointerenter",()=>{h=!0}),n.canvas.addEventListener("pointerleave",()=>{h=!1});let u=()=>s.rings(l.size?y.targets().filter(_=>_.key.kind==="note"&&l.has(_.key.id)).map(_=>({at:_.at,r:_.r,n:l.get(_.key.id)})):[],n),f=()=>{n.changed()&&w(),g.apply(),y.frame&&y.frame(),s.place(n),u()},p=()=>{if(r=0,!o){if(d){let _=performance.now(),S=Math.min(.1,(_-c)/1e3);c=_,y.tick&&y.tick(_/1e3,S),t.drift&&!h&&g.set({yaw:g.yaw+S*t.drift})}f(),n.render(),d&&M()}},M=()=>{!r&&!o&&(r=requestAnimationFrame(p))},x=(_,S)=>{let b=n.canvas.getBoundingClientRect();return g.apply(),Fd(n,y.targets(),_-b.left,S-b.top)},g=Nd(n,{...t.home,onChange:M,onClick(_,S){let b=x(_,S);b&&(y.click(b),M())},onHover(_,S){let b=x(_,S),m=n.canvas.getBoundingClientRect();n.canvas.style.cursor=b?"pointer":"",s.tip(b&&b.tip?b.tip:null,_-m.left,S-m.top),(b&&b.kind+b.id)!==(a&&a.kind+a.id)&&(a=b,y.hover&&(y.hover(b),M()))}}),y=t.build({stage:n,frame:s,orbit:g,invalidate:M,...e}),w=()=>n.fit(t.home&&t.home.dist||48);return w(),M(),{view:t.id,resize(){n.resize(),M()},keyAt:x,noteAt(_,S){let b=x(_,S);return b&&b.kind==="note"?b.id:null},pageAt(_){g.apply();let S=Bs(n,_),b=n.canvas.getBoundingClientRect();return S&&{x:S.x+b.left,y:S.y+b.top}},mark(_,S){l=_ instanceof Map?_:new Map(Object.entries(_||{})),s.mark(l.size?S||"needs attention":null),M()},update(_){y.update(_||{}),w(),M()},stat:()=>y.stat(),today:()=>y.today?y.today():null,turn(_){return _&&g.set(_),{yaw:g.yaw,pitch:g.pitch,dist:g.dist}},snapshot(){return f(),n.snapshot()},api:y.api||{},dispose(){o=!0,cancelAnimationFrame(r),g.dispose(),y.dispose&&y.dispose(),s.dispose(),n.dispose()}}}var q_=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],mt=(i,t)=>`${i} ${t}${i===1?"":"s"}`,jt=(i,t)=>i.length>t?i.slice(0,t-1)+"\u2026":i,Ii=i=>{let[,t,e]=i.split("-");return`${q_[+t-1]} ${+e}`},vl=(i,t)=>Math.round(Math.abs(Date.parse(t)-Date.parse(i))/864e5);function j_(i,t=18){let e=i.length,n=Math.PI*(3-Math.sqrt(5));return i.map((s,r)=>{let o=e>1?1-r/(e-1)*2:0,a=Math.sqrt(1-o*o),l=r*n;return{x:Math.cos(l)*a*t,y:o*t,z:Math.sin(l)*a*t,size:.5+Math.sqrt((s.inlinks||0)+(s.outlinks||0))*.35}})}var Bd={id:"bodies",name:"Notes",hint:"Every note as a sphere",home:{yaw:.6,pitch:.3,dist:48,min:15,max:110},build({stage:i,frame:t,data:e,onOpen:n}){let s=e.nodes,r=j_(s),o=new fe(new de(1,20,14),new Te({roughness:.5}),Math.max(s.length,1));o.count=s.length;let a=new Ht,l=new _t;r.forEach((d,u)=>{a.makeScale(d.size,d.size,d.size).setPosition(d.x,d.y,d.z),o.setMatrixAt(u,a),o.setColorAt(u,l.setHSL((s[u].cluster||0)*.137%1,.6,.55))}),i.scene.add(o);let h=r.map((d,u)=>({at:[d.x,d.y,d.z],r:d.size,key:{kind:"note",id:s[u].id,tip:s[u].name}})),c=()=>mt(s.length,"note");return t.stat(c()),{targets:()=>h,click:d=>n(d.id),update(){},stat:c}}};var kd={source:"PDB 5F9R (Jiang et al., Science 351:867, 2016) and 1BNA (Drew et al., PNAS 78:2179, 1981); public domain",q:.55914,lo:[-59.037,-52.177,-45.243],radius:1.8,protein:8622,rna:[[1,23],[2,18],[3,14],[4,16],[5,14],[6,14],[7,15],[8,15],[9,15],[10,15],[11,15],[12,16],[13,15],[14,15],[15,13],[16,16],[17,17],[18,13],[19,15],[20,14],[21,14],[22,14],[23,14],[24,10],[25,14],[26,14],[27,21],[28,22],[29,17],[30,15],[31,15],[32,17],[33,16],[34,18],[35,15],[36,16],[37,19],[38,15],[39,13],[40,17],[41,15],[42,19],[43,20],[44,16],[45,17],[46,17],[47,20],[48,20],[49,18],[50,16],[51,15],[52,17],[53,14],[54,17],[55,18],[56,16],[57,16],[58,15],[59,18],[60,16],[61,17],[62,15],[63,15],[64,17],[65,16],[66,17],[67,16],[68,17],[69,16],[70,16],[71,15],[72,16],[73,16],[74,17],[75,20],[76,16],[77,20],[78,14],[79,15],[80,16],[81,17],[82,18],[83,19],[84,19],[85,19],[86,15],[87,14],[88,16],[89,14],[90,18],[91,19],[92,20],[93,14],[94,15],[95,18],[96,15],[97,17],[98,19],[99,22],[100,20],[101,16],[102,17],[103,14],[104,15],[105,17],[106,19],[107,22],[108,19],[109,17],[110,16],[111,16],[112,15],[113,16],[114,15],[115,20],[116,20]],target:[[1,15],[2,15],[3,16],[4,16],[5,16],[6,15],[7,16],[8,15],[9,14],[10,18],[11,19],[12,16],[13,16],[14,18],[15,15],[16,15],[17,16],[18,14],[19,16],[20,15],[21,15],[22,13],[23,16],[24,17],[25,14],[26,16],[27,14],[28,18],[29,17],[30,17]],other:[[12,21],[13,19],[14,18],[15,16],[16,18],[17,19],[18,13],[19,22],[20,19],[21,14],[22,14],[23,15],[24,14],[25,16],[26,15],[27,15],[28,16],[29,16],[30,22]],spacer:20,pam:[[10,21],[9,22],[8,23]],flank:[[7,24],[6,25],[5,26],[4,27],[3,28],[2,29],[1,30]],step:{turn:.62351,rise:3.2376},pair:[[9.699,0,-2.305,0,0],[10.839,.901,-2.582,0,0],[9.939,-1.059,-1.289,0,0],[8.473,.907,-1.868,0,0],[8,1.916,-2.762,0,0],[6.881,2.551,-2.001,0,0],[5.884,1.565,-1.789,0,0],[7.28,2.993,-.605,0,0],[7.569,4.393,-.583,0,0],[6.113,2.528,.278,0,0],[5.076,2.087,-.754,0,0],[4.225,.946,-.343,0,1],[2.882,1.115,-.303,0,1],[2.389,2.221,-.546,0,1],[2.101,.031,-.017,0,1],[2.619,-1.208,.254,0,1],[1.832,-2.138,.454,0,1],[4.007,-1.353,.26,0,1],[4.641,-2.674,.601,0,1],[4.803,-.254,-.061,0,1],[-9.607,1.703,2.313,1,0],[-10.67,2.703,2.57,1,0],[-9.986,.564,1.436,1,0],[-8.324,2.485,1.789,1,0],[-7.756,3.509,2.615,1,0],[-6.674,4.18,1.825,1,0],[-5.519,3.332,1.755,1,0],[-7.034,4.586,.4,1,0],[-6.674,5.949,.158,1,0],[-6.253,3.555,-.414,1,0],[-5.004,3.39,.428,1,0],[-4.379,2.059,.236,1,1],[-4.984,.831,.172,1,1],[-4.103,-.178,.07,1,1],[-2.905,.441,.079,1,1],[-1.572,-.063,.016,1,1],[-1.289,-1.392,-.053,1,1],[-.579,.825,.041,1,1],[-.854,2.124,.134,1,1],[-2.04,2.718,.212,1,1],[-3.03,1.798,.18,1,1]],tails:{near:{o:[46.898,-16.831,-6.652],x:[.205,-.031,.978],y:[-.292,-.956,.03],z:[.934,-.292,-.205],phase:1.8705},far:{o:[-33.927,-16.831,-6.652],x:[-.732,-.357,.58],y:[-.659,.585,-.472],z:[-.17,-.728,-.664],phase:1.8705}},atoms:"TxsjTBsjTB4lTR8kTBklSh0nSSAoSyAqTB4rRx8pSyIrTSMtTCUuSycuTyMsUCUrUScsTyYoUSkqTygnUSsmTSUxTygzUSczSyc0SSYzTys0US03UC43Ui4yVC8zVC4uUy47VS87VTE8VzQ/VTRBVjU7VTU4VTc3WDQ3WTVAWTZCXThCWjREWTdHXDRIWjpCWzxCXD5EWz1GWj5AWDw+Wz8+Vz48Xj9DX0BFYUJEYUJCYURGY0ZFZkdCY0hHZUZJYUhIZkNEaEBCaj9AakFFa0NGbEVFa0NJZj9BYT5AZjtCZDtEYzs9YTo8YjY6YTs6Xjo4YT46YDY+YDQ+XjI8XDM8XzE6Xyw4XTE2YDE1YjI1YS8zZDE0Yy8zXy0yYSsxYywwWyw4Wyo4WSk2Vyo2Wik6WSc1VyQ0WCI0ViUvWSkwVCM0UyE1UiAzUSIyUiE3UCI3VCI5TiI5UB0xThwyTR0zURsvVBswURstTRoxShkxSxg0SRg1SRgvRhgwRRgyRRguTRYzTRU1UBU4TxM0Txg3URo5VRk7UBk8TRk8TBs9TBc8Shs9SRc8SBk9Rho9VBk3Vxg2WBo1VxszVxY1Whs1XRoyXR41Xxw2Xx8zXBwtXx4tWh0rWB4tWR4vXxorYhsnYBomYxgrZRkqYx0nZB0kZh4jaB8lYh8jZx0haSAfZyAdahweayIfayQebSQdbyQdaiYgaCYhaCYkZiUgZSYlZCUhYyUkbCYabiYZcCgabyobbScWcigZdykXeCocdCcedS0Xdy4Wei4Wei4YdjAVdDETczMTdDARezAVfTEVfy8Ufi4Sgy0UhCsVhioVhS4ShjAUhjAWhzITgioXgygYgiUXgSUWgigbgCgbgyscgyQZgiEYgCAZfh8YhB8ZhyAZhyEXiB8afyEbfSEceiQafCEfeiEZdCMYeCAVeiETfCIUeyARfiISfSERdSAacx8edR4ecR4achwaciAfbx8jbiAjcyEjdiEjcyAmeCIkbx0kbhwpbBklax4oaB8sZx4qbCIqaCAuZCIvZSQuZh8xZhsxaR0yYiIvYCQvXiYyXiQuZig1YSU3YCc5YyM3YCU7ZCo3Ziw4ZS45aDQ5ajQ5ZzI9ZzY5aDg4aDo7Zzo2aDw1ajw0Zj40bzs9bjg+cDc/bDlAbUA8bUI7bUQ/a0M5aUM7aEY7aEE7ZkY9ZUI8ZUQ9cEg+bEk+cUo+dEk9dEc+dUo7bUpBbE5Aa0tFa0lGaE5AaFA/Z1JDalZCZ1hBbFdCblVCcVZCcVlCclVCaFlEZltFZ11DaV1CZVtHZ1xIZFlIZV9EZ2NEZ2VEZGJBZ2JGamVIa2dIZ2NLaGRNZ2NPZ2FPZ2RRbGNIbmRHb2ZFcGdFcGJHbmVDbmZBbmtBbWU/bWM/bWc9a2lDa21Fa29EZm1FZG1GZGxJYmhIY2pMbGxHbm1IcG5HcHBHbmxKbWxNamtMbmpPc25Ec3JCdGxCdmtEdmpGeGlHeWdFb3ZBa3I9aXE8Z3A9aGw9ZW0/bXRDbXZFb3lGa3ZHbHRJaXVHcXZGc3ZGdXpFdXRHdXhAdXxAdHc+dnU9dXM7c3I8c3A7dHA5cW87cXtAcH1AcYFCbXxAbHw+anw9aHo+Z3g9Z3g7Znc+cX5Ecn9GdIBFdYNFc35IcX9Lc39NdX1Ndn1Pd39QeHxQdn9FeIBEeIJCeYRCen5De31FfX5He3tGfX1Je3lIfXtKfnpMd4FAd4M+doU/doc+dYI8c4E8doA6dIVAcodBdItDcIdCboZBbIRCaoNAaIFCZ4E+dYhEeYxFeIdIeohJfYdJfYVLf4RKgYVJgIJMeolCfIpBfI5AfYg/foo9gIs+gow9hI0+d5I/dY49dY06d4w6c405dpBCdpJEeJVEdZFGc5BGcY9Jco1JdY5MdIpMepJEfZNEfpdCf5FEf5BHgZNEf5JJfJRAfJU9e5c9e5k8e5M7fpE7d5k/eZ0/dZlAc5c8cZY/cpY7cJQ+cJQ8b5M6fp9De5tGfJ1Ifp5Iep9IgJxAgaA+gpo/hZc/hZc9hpZBfp49fZ87fKI8faM6e546ep83d583dp04d6A1e6I+e6Q/fag/eaRBd6NBeaZCdaNDgaZAhac+g6RCgqVFgKZFg6RGf6ZHgqRJgKVJg6U6h6g5gqQ4g6Q2g6k5hKw4h645gq03f604f6o5fq45ha08hq4+i64/ha5Ag7A/hLI/hbNAgrQ+iao+iqY/jaVBjKREjKdFjKo7jqo5j6w6ka05jao3jq47j7A7kbA+krE+jbI8jLM6irU7i7c7ibk8kK4/ka5Bk6xBlqxBkaxGjq9Ek6pAlKg/kqY9laZBl6RBl6M/mKRDlac7lKY5lKM5k6I3lqc3mac3maU5mqg2lp09mJ85mqA6lJ8+k5pAkqBCkZ9Ekp5Ijp1Hj51IkJw+jpo+j5g9j5Y9jJs9ipxBiZ49iZ5Ch58/h59BkZk7k5c6lJY7lJM7lJg4kpk2kZs2kpk0kJw0kJszlZc9lZRAlpJBmJdAmpg/nJpBmptCm55Ak5VBkpNCkI9CkJVDkJZGkZhGjZdGkYw8jpA7jI87ipA9ipI+iI89lI49lo08l4w/mYs/l447mZA8m5E6m5A4m5M7loxBl4xDmYlFlY1Fk4tFlohClYRBlYFClIBEln9AlH5Fln1BlXxDmoU/n4dAnIY7moU5mIU6m4c3ooQ/o4c+ooc8pII/poJAo4A/pYg/poo+p4k8p4s6qItAqY0/q45BrJBArI1CqIc7qYY5qIc1qoQ5q4M3rIA3rH85rH81pYY4o4Y2oYk2oIk1oYQ2o4I1pYI0ooA2oYw5o482oY07n482n5E0opU0nZIzn5Q4oJY5oZY7opQ7npg5n5s5n5w7oJw4oJ47oJ45opc9o5c/n5VBo5lApppAqJlBqpk/p5dCo5RCopJEn5FHpJBEppFFqJBGq5FHq5FJqpBLrZJJnpdInphGophKpJdNppZKppZOqJZMmZZImZhJmJlHmJRKmpNLnJRLmZpLmJxLmJ1Nl5tPlp9NlpxRm55Kn6FGnqJLm6RNnKFPmaVPm6FRmaNRn55HoZ1Fo51GpZxFpJ9Hpp9Ip55KpZ1Lp6JJpaNLpqJNo6RKqZ5Lp5xRq5tNrJpLrJlPrplLqZ9QqaFTpqFVqqNTqqRQqqVVo6NSoKBUoaRQo6ZQo6dRo6dNop5SoJxSoZtVn5tWoZpQo5xVpJtYopxbp5tYp5taqJpWop9ZoaFan6BbnqBdoaNZnZ9Zm55ZmZxdmp5XlZ5Yl5pXk51ZlZlYk5pYkZlZnJhcnZlenJhgnpdbnJNZnpZWm5NWnZRVnptfn5xhnJxkoZ1hpJxipJxkop1mpZplnJ9imqBjl59lmqNimKRkmKdjlqhllqplmJ1hlphflJ1fkaBhlKFekaNhlKNekqdgl5VjlpJgmJVllpdnlpllkJVgkJdgj5JjjpRkkZFljpRfjJZdiplfi5RbipZaiZNdi5hYiJtliJVlhJNjiJFjg5Fiho9ig45hjZxli6BkkJxlkptpkZdpkphriaBfiKJfjZ5djKBbjaJbjZ9YiJ5ghZ5ghaBihKJihJxhhJpfgppegZhdgJZef5dgf5Rdhp9khaFmhaVmh6BohqJrh6Fth6NviKJxiKRliaZkh6pjjKZjjahijapkjqxkj65mhahfgqpfhaZch6VZiKlbgKdifqtkf6VkfKZlfqNigqtng61mga9ng6pqgqhrgKdqhKdsha1mhq9lg7Bhia9kirFjhbNjg7VhhbZghbhfgrZig7hkgLVkibZeibVbiLNbjLVfjLZii7dijbRjirZajrRWirdWirdTirlRirhPirpNi7FXjK9Wja9Ui7BSjK1Yjq1Tj6xRi6pRkatQkqpOkalNk6xNjKtNiqpMiaZMiqtJiKtIhqxJiKxFjaRLjaNOi6FOkKRLkaRIk6RIlaZJl6ZJmKVHmKhKjaRQjKNSiaFTjqRUkKRUkaVWkaJUiaVRhqVRg6FRhadQhqlSgqdRhaxShqJOhaBMhJxOh6BKhJ1IiJxJhJtHiJpIhZdGiJtQhplTi5tRj5tQjJlOhp1UhJ1WgZpVhJ9XgZ1Tf51Sf5pRfZlRfp9QfqFRfaNPfKFTgJpPgZdOgJNPg5dMgpZSgpRUf5FVhJRVg5JZhpFXg5BbhY9afJVWeZNVe5hXfJlZe5tafZ1beZRQeJBPeZVOeJhPeJRMeJlNfI5Pe4pQf45OgItNgotMg4lLhYlKeY5YfYtWf4pVf4dUgItUgYdTgopTgohSdo1VdY9WdI5ZdI9ac49Uco1Tco1RcI5PbopPbY5Ocotbb4pYbIhbaotca4VdaYdgbYZhaohjbIdjaIlaZopaZIlbYolbZYpXZ4xWaYtVZo5Vao1UZ5BUao9TY4dfX4hhZIVgZoNfZ4JhZIFeYophYYxiYI5hYZBgYo1kZItlYY9mZYxnXY5hXJBfXJJhXJJjWY9fWY1dV41cVY5eVoxaXJRfXJdgX5hgYJdfX5liYppmYJpnYpxiYJ5iYJ5kX59gZJlmZZlpZ5tqaZtqZpdqZZVqYpVqZZRnZp1qZ59rZ55vZqJraKRraaRtaKVpa55ubJ1wa6Fzbp5wb55tbJ9saZ5zZ591aZ93a6B3ZZ11aJ15aZ17bZx8aJx9a5p5bZh5cJZ7b5l4cZh3bJd9bZZ/a5WAaZaAbpiBa5OBaZGCaJOEZpOEao+DaI2EbI6BapSGaZWIZ5eHZZeJa5eJZ5mGZpuGY5qFYZqGZ52EY5iDYZiCXpaEYpZ/ZJd8Ypp9YJOHX5SJXZSKYpGIYJaKX5iMW5mMYZqMY5mOYJyOZZqPXZqJV5qIW5yFWZ6EWp+CXJ+BWKGCWpeGWJWGVZSIWZOFWJKDWZCCVpGEWJSKV5ONVpWOVJWPWZOOWJKRW5GOVpeNVZmOUZqNVpyNVZ6NV6CMWKCLVqKNUpmKUJiJT5aKTJaKUZiGUpaGUpqFUJSKT5KLTJKOUJCLT5SPTpWRTJeRSpaTUJaTTJiQSpqPSJmORpqOS5yOTZ6PTqCOT6CMTaKPSJeNRpaLQ5WNR5SKRZKJQ5SHRpCHRZKRSJKURY+QRJOURJSXQ5KYRJKbQ5aYQpCXQo6YRIyZRIubQIyWPouWPI2WPI+VOo2YRoyYSIuYSoyXS4uWSIiYSYeZS4iaSYWaTY+XT42YUI2aTpGYTJGaSpCaUY2WU4uXVYyWVo2UU4mWUYeWVYeXUIWVV42YW4qYWpCZWJKaVpGbWJSYXY2WX4yWYoqYYY2UYI2aYY2cZI2cZYydYYudYougZY6aZ46ZaYyYa4yYZ4uXaYmVaoqTaIuRZ4eVaIWTZoaXbImTbYqQbYeOcImRcoqPcYyOdImOa4qNaomKbIeHaIuKbYuIb4uGcYmHc4qHcI2GcYeHcoWHcYKHcoCHdIWJb4OIbYGIa3+Fa4GKa4OCbYOAbIN+aYWCZ4WDZYOCZ4aFb4OBcYN/coGAdIF+c4WAdYZ+cn+Bc32BcXt9cnuDdXp+dXl8dHd8dXV8eHl7cnd8cHV8bnV7bXd6cHR+cXF/cXCBcG99bHN7anN6aXZ9aXB7ZnB6Z3Z5ZXh6Y3h+ZHh4Y3R8YnOCYHF9X3B+ZXJ/Z3KCZ3WDZ3WFaXGBZ3eCZ3mDZXqGaHuBY3mDYHmEX3mIX3iCXHiDW3qDWneBYXaGYXSIYXaMYnKIZXiNZHqNY3uPaHiMaXaLaHSKa3aLY3uLYn2LX3+OYX+JY4GIY4KLZoCIXHuOW3qSWnmMW3eMWXqKWXWOX3iSYHmWYXaSYX6VX3+ZYoCUZICTZn6VZ3+WZnyUXX+WWH2XWYKXWoSYWoSaXYWXWX2aWHubVXubVX2cWXqdWnyeW32cVHqbUXqbUHuYTnuYUnuXUnqSVHmSU36TUn+RUICQToCST4GOUHmRUHeQUnqNTnaPU3aMUneIUniGVXSJUHaITnaHTHmHS3mGTHSHSnSFSnWESXKFTXqJTHyKS4CIS4KHTYOGToSESYSHSYaKSIiKSYSMT4OIUYSIU4KHVIOGUoWLUoCIVH6HVX2DUX2BUn9/U399Tn2BUoR/VYR/VoR9UoaBT4eATYZ/T4mBWYOBXIB/WoODWYCFWoWFWoCHWX19V3t+V4F4WYN2VIN4VIR2VYZ2VIJ0WoR5XIV5XoR4YIV3XYd7W4h8XoF5YIB4YH92YX11YX56YX99YX1/ZIB8Xn91Xn5yXXxyXXtwXHt0Wnl0V3tyWnh3XHd7XnZ3Vnh0VHhzUXV1U3ZxVXZvUXZvUnl2UHl4TXl3TXl1UXt6U3x4U3x2THl5SXl5SHt7SXp9SHd5Rnd4RXl4RXV3Rnx7Q319QX5+RYB8Qnt8QHp8P3l+PXl/P3h6QXiAQHiCQHqGQnWDQXWFQn6EQICGRX+DR32DSX6DR3uEPYGCO4CBOYGBPoN/QIWAQYZ+QIWCQ4d+QoeCQ4iAO36COXyBNX1/N3yENnqENXqGNXmCOXx9N317N3h7OX15NoB3OX90NHt5Mnl4NHd3NHV2MHl3NXh1N3dzOXd0Onl1NnhxNnZvNXRvNXJvM3RxO3ZzPXZzPXlwPnRyQXNyQnR0QnJxQHlzQXtyRHxyRX10QH5yRntxSHtxSX1wSX1uSXhxS35xTYBwT39wUH5xTIJxSoNxSoZySYNvUYBuU4NrVH1sVn1tVXlqWXlsVoNtWYZoWYZuW4dyV4lwWYJqW4FoWYFlWoJjXH9oWn1pV4BmVYBjVYRkU39kVINgVIVfUYZfUIhfVYZdVIRbUoJcVYRZT4RgTYVgS4dkS4NgS4FiTIJeToZkTodnTIppUYdoUIdsUopqUIlvU4xtUotvUoxxTotlSY5nTo9kUJBlUZBnUpFjR4xjRYtlRItmRothR41fSY5fRo1dRodoRIhsR4VoR4NmSYJmRYNlR4prSIxtRI5vSo1tS49vSpFuSo5xQ5BrQY9rP5BsQ5JoRZRoR5NpRZVmQY1qP4tqPIttP4loPYdoPYZqPIdmP4lwPop0QYdxQod0Q4V1RYl0QI9zPpBzPZF1QpBzPZBxO5FwOZBxN5ByOpJuOY1xOItyOIt1Not2OYlxOox5OY96OZB8PIt6Po16PIl5P458OZF4OZN4PZR4O5d4PZl4Ppl6QJp7PJt3Opx4OZt6OZ13PZd8Ppd/QZZ/Q5h/PZaAQZR+RJN/RZN8RZJ7RJF/R5V8SJV5TJV4R5d4S5d7Tph7T5Z8Upd8Tpp9TJx8Spx7TZ59T5R9UJN+U5F9TpGATZGCSpKATI+DUJF6UZB4U5J3VJB1T5B3TY54S413Tox6Sot3TYp6S4p5U5R3VZV2WZV2VJh1VZt4UZt3WJV7XJJ7V5V+WY56W453XY13V4x6WpB2W5BzXZF0X5BzWZFyXpN1YJR1ZJN2YJd2Xpd4Xpd6XJh3YpB6Y455ZY55YI98YY5+YpB/X4x/Yo13Y4t1ZotzYYp0YItyZI5zZpByaJBzapByZZJxaJB1apF3a453bo54apJ5aox3a4p4bYd2aYl5aod7aId3aIV8bIlyb4lxcIdxa4pvcItyc4tydYx1c45ydI9vdpFwdY1uc4h1dId3eIh4c4V3dIR5eIZ1e4V0foh0e4Nzeolze4tye45ze5ByeolufY1ufYhteZB3e5F4fZB5eI95fJN3fpR4fpZ6fZh5f5V2fpZ8fpd+fJl+eph/gJl+gZqAgph9fJt9ep19e555e59+eaF+eqN9d6F/d556d593d6J3d6N1dJ52dJ90cqB4eKN5eKZ4e6l4d6d7fKV4f6V4gKh0gKN4gKJ6g6R4gKN9fqVzfqZxe6VweqRxgKRwf6RtgKJwe6VteaVseKJpeKdrfp1rfqBoepxse5tufJhtfZdveJpvd5tteJ1se5drfJVqfpVqgJRre5Roe5JnepBpepFlf5dpg5hqgplmgJlkgplshJpuhpdwg5xvgpRxhZFxgJJxgJByhpBsipBthpBphI9ohIxpgotriZRti5VujpNxi5duiphrjZhviptripRyipN0i5B0jZB1iJN2io9zi4xyjYxyj4tziYtwh4pxholvhIdwg4ZsgYVvkZBtlZJtlo9ql5JsmJFrmpFqk5F1k493lY93kpR2kpZ0lJVykZd0kY53kox5lYl6j4t6jY17i4x8i4l8iY19k4p2lIh1mId2k4hyl4VwlINul4Nvmox0nYp3mo50nY90n45znZF1oJB0oJF1m4x7m4p8nYl9mY59mZB8l5J9lpF/l5R9mYZ8nIJ8l4R8lYZ+loeAk4Z9nIV5nYR3oIR4oYN5nYV1n4Rzn4Fzn4VxoId5o4d6pYV9o4p6oot4pYt7oYZ+oYWAo4GBnoWBnoaDn4SFnoiEoIF+oX5+pHx+n318n3t8n3l+nXp6pH98p397qX99qn59p4F5poF3p4J1poJyp4RxqIF+qoKBqX+Cq36DqYSCp3+Dp32EqXmFpHyFo36GoX2GpH2JqHqBqXiArXaBqXd9qnZ8pnZ9rXqAr3qAsHqCsnmDsH1/sH18sX97sX94tHx4sn11r3uEr3qHsXeIrnyIrnyLrH2Nqn2MrX6PrXSIrnGIqnSJqXeLp3aMpnSNpniMrXKFrXF/q2+CqW6Ep22Dqm2GsnN/snF9s3J7tHSAtXKCsnKDsm99s217sWx4tGt8smp+sWuAsm2Br2qBr256rW15rG93qm92qmx6rXR2rnZ3rXh2rnl0rntzq3x3rH90r3JzsHFxrnBwrnBtsnBxrG9xq21wqG5wp25uqmtxqGlwqGdxqWdzpmVxqHBxpXFxo3NupXB2onR0pHF4p3duqHlrqHlwpXtyp3h0pHt0pnl2pXp2qnRpqXJlrXRprnZqr3dor3dssHlosHltsXprqXBpqG5no25oqGxpqGlop2lmqWhppW5koWxjn2xiom9hpHJgpHNeo3JcpXVdompjoGhjoGdloGVmoWZhpGVioGhnoGhqnmlrnmltomhrpGZqo2NrpWFqpF9rnGpqmmtrm21tmm5vmWptmGhrl2hpl2ZsnW5tnnBunHJsnnRunXhqn3lvm3xvn31tmn5vnn9tmoJtoHVqoXVoo3RnnnJnnHFmmHJlmXRol3Volndll3Zrk3dqlXltkXhqk3pukXpsj3ttmnplmXpgm3xlm31om35kmH5onXhinnhgnHVdoHhgoXpgoHxfo3thm3FgmXFfmHNemG9flW9elG5hkW5glW5jk25lknJllW1nkG9njnBnj3Bri29ni21pjHNqjHRtjXJwinZtindviHlvh3ptiHtxinFuiW9wjG1wjGxyh21vhmtwhGpvg2ttg2hwjWxuj2tukmtxkGpsjmlqj2hokGpnj2ZnkW5vk29wk3JvlHZymXVylXdzmHdzkG13kW15jXF3jnV2inR2jnd2inZ1jHh1i3p1kGx2kGl3lGd5j2d1j2V2jmN0j2B1jmB3lGp2l2l2mmp5mGpznGhznmh0nmxzn2p0mW56mW9+mXF5lnJ5mnF3lnV5lG1/l22Dkmx/kWyBjmuBjWuEi2qEl2qAnGmEmGaBmGZ+l2h+m2uAnmyBnm6Cn2+Dn21+n2p9oW5+oGt6m2+Cm3GEm3GGnHKImXSBlnWBm3aCmW6Jm22Km22Ml22Jl2qIlGmIk2qJlGeHnWyJn2uKoW2Lo2yLoGmIoXGLoHKNnnKNonOJo3KHo3SEpXaGonOPoXSRn3eRnneSo3STonWVoHSWo3aXoHiPn3qOnXqNm3mOnHuLmnuKl36LmniJmXeKnHeIl3qMlXqOk3uMkXqLlXuQk36MkX+Lj36HkoKLj4OKkIaKkoeKjoeJk36Hk32EkHqClnyEmH6Dmn2Dl4CCknmGkHeGjniGjHeFkXWIkXOHlHOGkXGJjXqHi3uHiHuEin2JiH2Ki3yMi32Ei36BiXx+jX+BjYKCj4SBjoaCkIiAjHh/iHZ9jXZ/jnR9kHN9jHJ+hnWBhHaBgnaAhXSEhnKEiHGFhHCEgnuAgnx8gn2Cgn2Egn+FgYGEgoODhIODgYSChXp6hX13g3l4gnZ5gHZ3f3d1f3R4h356ioB6i4J6hoJ6hoR5hoR3hoZ6jH55j312j3x7knt7k3t5k319kYB3koF0kYBwlH90ln92loB4mH11joFzjIFxjoRvioFxhIBygn5vgX1zjYJsjYNqioVrjoFoiYhnhYdmiopmjYtnjYtpj4tqi4xqiIVkh4Bih4RgiIZfhYhehYhchIdag4VbhIhYhH9lgX5khH9ogoBph39pgHxlfntlenxlfnhlf3hogXhpfXhqgndrfXdsgHdtfH1oen5pd4Fpe35sfYBsfoBueYNldoRje4RkfYVlfYZngIVkdoFkdIBicoFjcIFic4JmcYNnb4dncYNqcoFqc4dlc4plcYlhdYpkd4pmdY1jeYtlcI9ha41jbI5lb41mb5VdbZBaapNZZpFaZ5NZa5ZgbpdhbplhaZZiZ5VhZpNgaJFgZJJgb5ZicZdkdJpicpZmcpNlcZZoc5Jnc5ZgdZdedZtcdZVcd5Ndd5FdeZNfeZBeepFfcZtbcZ9cbptbbZ1abp1Xap1ZcZ1fcZ9gdKBgdKJgdp9geKBgeqJdep5heZ1je5tkfZtie5pmd6FZd6VYdp9YdqBVd55Tc6FUdKNac6ZadKhcdKpbcKVbbqdbbKdcbqlaa6lbbKpadaddd6hfealeeaxed6dhfKlbfaxZfqZagKdYgKNbeqpYeatWea9Wd6pVd6hTdadSeahRdq5Zd7Fad7Rac7BbcrJccLFebrBebLFdbLNdaq9cebBbe7JcfbJaf7NbfbBefbNUfrNSgK9Vga5Xg7BXhLFWhbBZebhQd7NSdrRVc7NVcrJTcrRXe7hUfLpUfrtTfr1TfLtXerpYeLpXerpaf7lSgbpQgblOgbtMg7hRhbtVg7dWhbtXg7dYhLlZgLZLfLZMg7NLhLJNhbNJhrJOh7NKirJNfbdIerhIebZHd7VHerpGfblEfrhGerRFebJEdq9Ge7FDfbBEf7FFfa1Ega9Gf6xFga1GeK5Kda5Ne61LfLBOf61NcrNLcLNMdbZNc7NJcbJHbq9HcrNEcLRDcLVBbrNDcaxHcapJcqhJc6pFc6xDcqtBda1DcatLcapNb6ZOcaxQb61Qba1Sa65TbLBVbrBWarFVbalNa6hNaqRLaKlMaKtOZaxOZaxMZKxQbKZJbaRHbqBIbqVFbaZDbqZBbac/a6U+cZ5NdKJMdaRKdqFNd6VLbqBQa5xQbKJRbqNTbKVVaqRWbadVa59Nap1La5tKaplKaZ5JbZtKb5lJb5VLcptGc5hIdJxFb5hNcJdPbZRRcZhScZZUdJhVb5ZVaZZRZpNQZ5hRaZpSZZhTaJVNZ5NLaZBLaJRIZJNGZ5FFYpJEZpBEY5BDZZBLZY1LYI1KZIxOY4pOYolRYoZRYYVTYIZVYINSY4tIYYpHYIdJYohFZIpDYIdDZYhBW4hJWYlJWotIXItHWoNKWX5GWn9MWIBNWIFPVn5MVYFQVH5NUYBRUoJHUoVIUoVKUolHU4dLU4lKU4tLWIRBWYI9WYdBWYg+V4lCW4JBXYBAX4M+XoI5Yn46YXw7X309Yog4Yoo6YYg8ZIs7YYM0YYIyXoQwYYAxYYMtYIQrX4IqYIIoYYYqYIcoYYonY4kmZYslZI0lZ4okXoArXX4qX3wpX3snYXwqY3oqY3ksZXcsZXspZHwlZn8nYXgtYXcwX3YwXXcwYngyYnc0YHMxXnIxXXI0W3E1Xm8xYW8yYmwyYWszYmg0Y2czYWc2XnQ4W3c6YHQ5YXA6Y3I3Ym46ZG83ZG04XXg2XHs3WHk1XXw1WHw3VX03VX83UoA2VHs5U388Vnw9VH8+V3o9WXk/WXtBVoE3VoM4VoQzWIU4V4c4Wok3Woc0U4Y1UoczU4s1UIczT4k1T4UzVIsxVY0xU48wUo8uV40vWYwwW4wuXYsvX4wwX48vYYswU5EyUZMxUpUvUZUtUZUzVZUvVpYtV5QsV5IsWJguV5ovWZUrW5MpXpQqX5QoWpMnWZEmWo4nXI4nWY0oXpUsYJcsYZMvYJkuXpotXZwuW54uX50wZJUuZZczaJUvaZQsapMxY5M2Z5I4YpE3YJA1YZE5X442Zpc9ZJc9Z5s5apk3Z5dBZJpDaZdDa5ZBZJ1AYp0+YJ4/Zp8/aaBCap4/a6BDbJ9Ba509bp5BbZw9b50/Ypw8X5w7XJk6YJw4Yps1X5k9XZY+WZU+X5VAXpE/XJNDXY9AW5BDW45CWphAU5g+V5pCWJlFWJdGVpZGWZZHVZo6Vpk4VJg3Vp06VJ48Vp4+WJ0+VJ9AWJg4V5Q2VpM1W5Y1W5QzXJg1V5M4U5I8WJA7V408Wo86UpA5T486T4w7To84S484S5A6So43UI8+UI1ATopBUI9CUpBCU5JEVJFGVZJITI1ASYxASYhASYo8SYg7SoQ7SYg4T4U8UYY8UYg+S39DTYVFSYJBR4FAR30/Q4E+QYM9QYU9P4I8SX89Sn07THo8S345TYA5TndBU3pDUHxGVHhFUXtIU3lISnhESXdCSHRCSHlGSnpIR3dHSXpKSHhARnY+SHU9R3M8RXg9Q3k+Qns8Qnw6QHw9SnU9THM7THE8TW87TnQ6UHU8UnY8VHU9VXM7VHM5V3I8TG9ASmtBTW9DT3FCUXFFU25ESG9BRWw+Q29CQ3FARHFEQ2pBQmk/P2s+QmZARGVARWRCRWQ+P2g8PGQ9PWg4Pmo3Pmw4P2o1P244QGw0QG41OGI5NGU8M2Q9M2I+OGA8OF46Nl05Nlw3OVw8NF46Ml44MF80L146MFw8MF0+MFo8MmQ2MGU3LWY2LGM2LGc4OGQyOGcyOmczOGMwNmEwNGIxN2gwOGowN24yNmsuN2orOWsqNmgrNW02N204MWs1MG40MHA1MG4yN285OW87OG4+Nmw9OXE8O3I6O3U6PXY4Png4OG5AOG1CN29EOHFEOWtDOWpFOmlBNW9FN25JMnBIMHFGLnBHMHNGNXBOOHVNOHZLNnVJOXBQOG9SNW9VOm5TNnJTNXRVMXZUNnZWOHVYOnNXOHVaO3NZOnNbMnRRMHRQLnRRLnJSMHNOLnNMLHVRKnVSKXNRJ3JSKXdTKnlVKXtVKnhXKHFNKG1OKHJLJnNKJXZLJnRHLGxRK2pRL21OMGpNMGpLMWlPMWdKMmdOMmZMM2RLLG1TK21VK29XLnBYLHNaMHJbJ21UJGxUI2hTI25SInBUInBWIXJSIXJXIXRUIXRWIHZXJmlRJmdQJWNSKGVNJ2RLKmNOJ2JKKmFNKGBLKWRUJ2FXK2RVLGJXLGZXJGVZIWFZI2daIWZcJWhcIWRWH2NVHl9UHmRTImBTI11SIlpUJV1RJ1pRJFtYIltaIllbJlxaIF1ZHl1bHFxZGlxaHV9cG2BdG15fHGJfHFtXG1pWGldWGVZVG1pTGVpSHVhSG1ZYG1NZG1NbG1FcHVJYHVJVG1FUHFFRGlBQG1VdGFRgFlVgG1dhGlZjHVhgFFBjFVBlFU5fFU5dFEtcFUtZFElYElFjEFFmD09mDU9lD1RmD05oDUxpDk5tDkpqDUhrD0lnCk5sCU9uCE1wCEtvBlBtB1FrBVJvCE1yB0t0BUpzBUh0B0x2BEtyAUpxAkluAEhtA0ptBElqBEdqBkZrBktpBEZoBENnBkNlB0FlAkJmB0VkCURiCkdiCUljCERgDEdiDUldEEhhEEZgDkVhDE5eDlJfCU9eD1FcEFNbDVVcEVNYEVdcEFldEFpZElteEVxgEVpiE15hDVtbC11ZCV1aCV9cDGBWDWJVDGRXDmVXCmRYCmZZC2ZcDGhdB2daC2RdDWNfD2RfEGVgDGFfCmBhCl1hClxgCV1kE2RcFGZdFWdeFGNaFGFZFGBXFF1WFF1UEmhcEmpcE21fEWxaEGpfEGtiEmtkEmxlDmljE2ljFWhlF2pkGGtmFmZkFWRjGGVnE2NlF2tiGnBkGW1eG29eGmtdFnJjFnRnE3NiFHRgFHZfE3JeFXBnFXBqGHBrGHFtFG5rFG1tEnBvEmtuHG5rH29rHGtsGmpuGmhvGmxwIG5mInFkH2xkIGpkIGhiIWlmIGZiIWZmIWVkH3JmH3VlIHZoIHhoHXZkIHVqIHZsI3duHnVuHHRtHXdwI3NtJXJuJnFqJXBwI3ByI3JzIm5yKXJtK3FrK29qK25oLXFtLnRuLnZsL3htLnlvK3lvL3twKm1sKmtrKGptKGpvLGlrJmhsJWVuJWNsImhtIGdvImttJWRwJWFxIWFxJmFzJV50JWJ1I11wIVxwHVxyIVlvH1hvIlltIFx0H1x3Hl93HF54IVx5H2B2HWN2GWN0H2V1IGZ3IWh2Iml0Imp4GWFwGmBuGF5sGV9qGVxsGF5zFlx0FV52E112F1p1Fl93FmB5FWN5E2R6GGB7FmR3FWd3E2d0E2l0F2h2GGp4Fmp6Gmt4E2VzEWVxDWRxE2RvEWRtEGZrEWFsD2VpD2FqDmNpDWJnDl9yDGB0CmBzD11xDVpuEVxtDVlsEVtrD1pqDWB2DGF4CmN4CWR5DWF6C2V2C2d2CWh0B2l0DWl2CGZwBmRwBGRwCWZuCmhtB2ZsCWttBWBwAl5yB15vCF5sBl9qBV1pBmFqBV13A1x4A2F3A2J6B1l2Clp5CFh0B1hyBFhyCFdwA1hvB1duBVdtB1d6CFZ8DFZ9B1R+C1R6DVN5DlN3DFN1DlB6DlB9EFN2EVNzElFzE1B0ElZzElZwEVd1ElFwFE9vFU9tE1BrEkxvF1BtGFFrGU9qG05rGlNsGVVuG1RpF1ZtGk1mHE5kG01iGEtlGUlkHU9kH1BiIVFiI1FhIlJlJFNlJFNoIlNpJFZlJldmJFdiJlNpJ1JrKFRsKVZrKVBrKFRvKVZwJ1pxK1ZxLFhzLVpyLVd1KVpuKVxtKVxqKlppK15uKV5pK19lLWBmJ2BmJGBmI2FoI19kIWBpIV5lIF9nK11jLl5iL2JhLlxgLllhL1ljLlhfLGFfLGNeKmRiKmNcLGdfK2lhK2tfK2tdLWljLGtkKm1gK3JgJ3BfJm5eI29eJm5bLXFgL3NiL3ZgL3diL3ZeL3hdLXxeMXZaMHpZKXpeKX1hJ3heJHlfI3tdJHlhIXxeInpiIHxgHn1hKntlLH1lLH5mK3lnKHVlJ3dpJnRmLnxkMH5jL4JjMn1iM3tjM3tlNHphLoBgLIJfKoNhKoVhK4FdLYBbLH9ZL4NbKYJiJ4NkKIRmJ4VnJYFkKoNnK4RoLYdoLYhpLYNqLYdlLolkLI1lMIhiModjMYthNIZhK4piKYxhJo5jKIxfKIleKo1dJohfJYtmIotmIYxnJY1oIopjH4piH4hhH4hfH4xhHY1fG45gHIteHYdiHYRhG4NjGoZfGIZdGYZaGIZZFoldG4haHIhYHYVVHopYHoRZIIJYHn5WIYFaGn5ZGX9WGH1VGH9bGX5dGXtdGX9fGYFVGIFTG4BRGIRTFoVRFoNPFodRGH9PGH1NG35KFnxMF3pLF3tIF31HGXlHGIFLGYNJHINJHYRHF4VJFYRJE4ZJFIhKEYZIH4RMI4NMH4VOHodPHIdOHohRIIBLIn5LJn5JIXxKIHtIH3lHH3dJIHhFJ4JGKYJGJIFDI4BBIX9DI38/JoRHJohKJYlIKIlLI4tIKINMKYFOK4BNLYBOJ4BPJYFRJH5RJoJTLX1KMX1JK3tIKnpJLXdKKnhNLoBIMIJHNINJL4RFMoVCModFMINLMoRNNoNPMIVPL4dOMYVRLYhQM4BONH5POH5OM3xQNHpQMXxSNn5LN31JO39KNn1HOH1FOHpFN31DOYFKOoNKPoNNOYZKOIZIO4hLPIJRP4BSOoJTOoRVOIZTOINXQ3xOPXpOPHlQP3hOQH5LQn5JRoBJQX9HQX1FP3xFQX9DRYNMRoRPRYJQRIZLRIZJQoVIRoZHQYVGRYZFQ4ZESIVQSIVSSYlVS4NTTIRVSoRXSIJXS4VZSolRS4tRR41QTIxPTY9PTZBNTZBRSY5UR5BURpFTRJJSR5FXSJNRR5RPRpNNRJRMSZZPR5FNRpBLQ49LQY9KR45KSo5JS4xJSotGQ45NQI1OPY9OQIxRQopRPotRQolTQJFPPpNQO5VNQJVRP5dSQJlTQJlWQppSP5RMPpVJO5RHQJZIQJdFP5VDQJNEP5ZCO5BHN49HPI1IP41HPoxEQYxDQYtAP4o/Q4tANpFMNZRMM5RNNpBON41RNYxNNpVKNZhKMphJMZlJNplJMpZHL5VGK5VIL5NELZNDMJFFLpRKLJNMLJRQLZBNLY9KK49JLo1KK41HLotJLIpFLZdOLphQK5pQK5tSMJpPKppPJ5tPJJpSJptNJZlMJ5hKI5hMJZZKI5ZKJpZVJJVXJZNSI5FOIZVQKJdWKZZYKplZK5pYKpRZKplbK5tdKptfLJ1hLJ9gLJ1jL51dMp1cNZpeM6BdNaBdNqBbNqBfMpxhM5piMpdiNJZiMZtlMJdhMJVgMpJeLZJeLJVhMpZcNJVaNpRbN5NaNJdYMpdXMZVVNJRUN5ZdOZVeOZJfO5FfOpdgOplfPZpgPpxgPZ5fN5JhN49iN4tgNY9jNZFlNpBnN45nN5JpOIpaNI5aMoxYNItWMopaOY5aPI5ZPYxbP4taPZBYPYxdP4tfQIdfPoxhPIhePIVePIZaOYRePoJbP4FZP39ZP35bQoJZP35XP3tXQHpVQXtUPHpWO3tbOHtYOXtdNnxaN3xcNnxeQXdWQ3ZVQnNUQHNWRXZWRHVYRnhWQnJSQXBRP3JPP25OPWpNP25KQnFLQnRKPXJHQHZIPXVGPndGOWlMOWdKO2dJOGZJOGRIN2NEOGFJOWFLPGFLPV9KPmBHP1xIMmhDMmpFMGRFMGJGLmFHMWBDMWpALmxBLWtDMGw8Lm5AK29BKW4/J25ALHJBKXNCKnZBKHdCKHlCKntCJnpDKm49KG07Jmo7KW05J2dAJWZAKmU+KmI+KWI7K2E/J2hCJmlEIWhDJ2pGKWlHJWtIKmpJI2xCIXA/IW9EHG9EHnNEIW0+IW47IGw5H204IWo5IGg4HWY6ImY3JGc3IGQ1JmQ2HGg3GWU2GmQ0GGk3FmQ3E2I0EmQ1FWA3FVw1EV42E2EyEWIwD2ExDWMxEWAuE2EsE2AqFWEoFWAmDl8yDF8zCmE2DFw0CVs1B1wzCFwxBVw0DWI5DmQ5DGY5EGE7EF88EGU4EGg4EWk6Ems6Emc8E2g+Fmc+FmU8EmdAF2g/GWVCG2tCG2s+HWVBHmNDHWJHIWFAIWFFIF9AHmZGHWdIG2dJGmdLHmtLH2pNHm5KF2dIFmVJFWRLFWhGFmtFFWxGF2tEF2NHFmBIFl5LGF9GFl5EFVxEFmBCE1xCFF9AE11AGGBRHWBNIWBMHlxMFmRQFGNQE2NSFmdQGGhRGGhUGmlVGmlYE2JOEGFOEGBKD2NODGJOD11MD1xKDVpLDFlKEVpKEFpGEldHDFtNCVpOCldPC1dRCVVOCVNPDFFRB1FODVJND1JNEVRNElVLEFBLElRPFFZPFlVOGFVQFFdSEVlSEldVF1VMG1hLGFNIF1FIFlBFFlJEFVJBFlBAFFRAH1VMIVROI1VPJVVOIlZRI1lIJFdEJlpJJ1tHJ11GKVpGKF5FKltEKl1DJVVIJlNGJFFFJFBDJ1FIKlJJK1NGLFBFIlFGH1BFHlJDHlFBHlBHHk5JG09MG0tKHlZCHlY9HllDHFpEG1hFHVxFIlZAI1U+I1M6JlY+J1g+KFQ8JlpAIk89IE49H00+I00+KEw8KE8/Kkw9Kk4/HlA7HE87G084G1E3GlE9Gk43GU41Fk81FlAzGEs0G0ozHEoyG0k1FU83E1A4ElQ3ElA6FFE8GFc1GFU0GFg6Flg8F1k+FFo7GFk1GlkyHloxGVwxGlwvGV4zHVo1IFo1IVk0I1kzIFo4Hlw5H185HVw7HmA6HF48HGA8IVY0I1QzI1UxJVQwIlI0IVYvIVYtJVgrH1csI1ouJFwtJ1wuKF0tI14uIV8tIV8rH2AuKloxLVkvKVk0KFs1LFg0Kl01KlcuK1UtLFcrLlYpKVMrK1kqLVspL1wqMF4pK10oMFssMlstNF8rM1kuNlsqOFwpOFonNlknOlwqOlomOlgkPVclP1glO1kiO1cgOFohPVQmP1MmQFIkQ1IlPlEoQE8oP1IiQVEgQlMfQlMdQlUgQ1cfRlceR1UfQ1ogR1gdSlgdS1gfTFkgS1UfTVUiTlMhTVEhTFQkSlclSFckS1gmUVMhUlEgUk8iUU8kVVIgVlMhVE0iVEskVkwmVUsoVUkjU0ghUUgiU0kfV04lWFAnV1IoVFIoW1EmXU8mXU0nXk8kX0smYE0lWFQoVlYoVVcsVVcmU1UqUVQrUVQwT1IqTVIsTFMuTE8sS1IvS1AuVFIuVVIwVlQzV1AwVU0wWFAyVU0tV1UwWFcwV1oxWFwxWlgvU1sxUVszUFwzUVsuUV0tUV8uUl0rUlk0UVk3U1w4UVY3UFQ2UVI3TlQ2UFo6UFw8Uls+Ulk+Tl09U11AVFxBV10/WVtCW1tCW1g/XVpEXFhFXlo+X1k8YVU7YVs7YF08X1w/YFY/YVRAYFI/YVA/YVRDXFA/XE07WVE/WVJCWE8/WlBEXFE6XFE4XU41XFM3YUs4YUk2ZE45Zkw4aE05a0s4bU05YEo6X0g7XUU4WUU0V0o3VUk1VEw6XEgxXUUvXkowXkouX00tYEktXkAxYkM1ZEU1ZEUyZUMxZEcxWz81Wj0yWj83WD03WUE4WUAyV0AvWD4sVkIvVUIsVEMxW0EtXEArXTwpXkEqYEEoYUMoY0MlZEUkXDcsXjcxYToxWDctVzcrVzUqVTkvUzcuVjgxVzkpVzknWTgmWDckVzwmVT0nVD0oVD8lWzgnXTYmXDIkXzcnYTUmZDYmZDgmZTQoWzMoWjEpWDAnWS4mWTArWzAtWjAwXS4tVzEmVS8hUzIlUTEjUTInVzIiWTIfWi8dWjQfWikfXSwjXikjXy0jUikhVSglVSYmVyQmWCIkVSceUycdUikcUCkaUiscUi4cTy4cTi8bUi4ZTC0fTSwjSiseRyseRiofRi0cQysfRC0dSi8iSi8lSCsmSDElSisqSCsrRi0rTCwsTS4sTC8pRyktRSkuRSswQy0wRScvSy0zRiw2QSw1Qik3STA1STM5SzM0TDMyTTU2TTUwTjI+UDI9TC8+Sy9BSi09TTQ/TjZDTDVETzg/TTpAUDg9TTw/UDZEUDlIUTpHUjVIUjVLVDNMVTJKVDNOTjxKTjxNTjtOSz1KSjxISz1FS0BFTz5NUD9QTj9STj9UUUFQTD9RSUBSST1TSDtSR0FQST1VSDtXRjtYRT1ZSjlYSjpbTT1ZSz5dRDlZQjpaQjpdQjheQDhZQDhXQjhVPjhWQzxeQzxhQDxiPzxgRD5hRz5hSEBjRkJjSkFjQDtkPj9mPzloQDppPzdnO0NqNz9oNz5qNj5mOz9rPEBuP0FtP0NuPD5vQEBsQ0FsREVrRD9qQUNoQUVnQUlnPkdqPklrP0ptQExuO0lsQUhuQ0hwRktwQ0ZxSEtsR01rSE9rSUlqSkdqS0ZsSkVoRU1qRE9pQlFrQVNqQk9nQVFmQ1FuQlJvQ1VwRVVxQlFyQldvQllwQ1h0QFtvRVtyR1t0Rlp5SV10RF13Q115QVt6QVp8QV96QmJ6Q2J9QWF/QFp4P1d4QVV5QFR7Pld2Q1V4RFN5RVR8RVJ9RlN3RlZ8R1d+RVWCR1l+Sll9SFqBS1x9Q1eAQVeCQFSEPlmBP1OAP1GBQVCCQE6EP09+PVB9PU96Pk16O095RVCFRU6HRVKGRVOJQ1KKQ1GMRlWJR1aHRlaLSlWIQVKJP1GKPk6NPFKJQE2JQEuJQkiNQUmHQUeHP0WIPUaIP0OHREyLRkuNRkuRSE2MQ0+SRFGTQ1KVRlKSR1STRFeRSlSSS1aTRliURVqUR16URFuWSFuRSl2QSmGOTFuPTl2OS1qNUFyMR16ORV+MRGGORGONRF6LRF2IR1yIQluHRGGQQ2KRRGaTQWGTR2OTSWWTSmmSS2SUSmiNSWeLSmaKTWiNT2iPT2aRUGqQUGeTUWqSR2mLRmiJRmqGRmyHQ2mKRGuLRmqNRmmER2qCRWmARWaASWqBSmx/S2uDRGp+Q2l8R2l7QWp7RmZ3SGd0RGR1QmR0QWZ1QmRyRmp2Rmx0SW11Sm1zRW50RW93Qm10SW13TG14TWt5T2t6S296TWd5UGR3S2V5S2J6TGF3TmJ7T2d1UGZyU2ZzVGVxT2dwTWZvTmRtUGNuTWRrVGd1Vmd1VmN3V2l3Wml3Wmh5W2p2WWR1WmF1WV94XGF0XV90YF9yYWFyYF1xXGJ5XWF7WmB/X2J8WWJ8V2N+VGB/VWV9VGZ/UWV/VWaCVWB7U156U1p9U114Ult3T1x3U1l2Tlp2UVd1T1h1TVZ0V1t8WFl9V1l/V1iBWll8W1l6XVl5WlZ5V1yAV1yDVVqGWF+EV1+GWF6IVWGHV1+KVWKJVWGNU1yDUFuDUFiDTleDTl2CTl+ETV+GUGGDTGGHT2OFTmOHTmWIUViBUVWAUVGCUlV+UVN8U1R6UVF9VVOFVFOHVVKJWFOFWVOCW1OCXFOAXFSDUlWIUVWKU1aOUFOLTlSNTlaOTVKNVViLVlmMWVmPWVaNXFOKWVKPYE+LY1OMZVKIZlWKYVCIYU2HY0mHYE2EXE2EXEuCZ0yMZ0qNaU2IaU2FaEuEak6EaEuBak6BaU2AaU1+aE6PZk6RZ02TaVKSalKNYk2TYlCUYk+XYkuUYEuWYEuYXkqVYlKTYlSVYFWUX1WSZFWVZVaSZ1iTZ1mVaFmRX1eVXVmUYFyTXFqWXl2PXV+PW1+QXlyMXlmJYVqMXmGPXWSPXWWNXmWLX2WRXmeSXGiRX2iUW2eNWmiLXGqKXGuJWGmLV2iNV2mJVWqOXmuMX22MYW2IYW2OY2uLZWqJZWaHZ2mKY2mFYWiEY2eCY2WBX2mDXWeEW2iDXmSDZGmAZWl+aGh/aWd+Zmt9Z2p6amiDa2WDbGSDa2mFamyFa2yDam2HaGGEaGF/ZmCEZ2GJY2CIZmGLYmGKZGGMY2GOal6Ba11/aFp/bVx/b12Ab2CAcVyBaFx7Z1p6aVh5all3ZVt4ZFl2ZF15alR5aVJ3ZlJ3a1N7bFB6bVB4a097alF1a0x2ak9xalFwalRxaVJualVvaVRtZ0l2a0d2ZUh2Y0l3ZUV3Y0p6aUdya0Zxa0pvakVvaEZubERtcEpwb0lsc0lwckdycEZycU1tcE5qckxpck1mcVBqb1Jsb1RtcVRub1ZrdEtqdUpodEhndUdld0lqeEprc0ZocURnb0RjcENpckFqc0Jscz9pdUFtdD5qdT9sbkdmbEdka0pka0tmakZkaEZmZUdlZ0NoaktjaU5jZU1iak9hZk5mZE9mY1FoZVFqY0xoYExoX0poYlNnYlVpX1VqX1ZrYldnX1dlXlVlXlllW1NqXlFuWlFpW05pWlJuWlJxWlByWk90V1NyV1ZwV1R0WVhxWU5wWktwXEtxXUlyWUpuVkpuVUxuVUhtXkxwYExxYU5zY05zYkxuZEtvZUpwZkxtXlF4YFR0YlVxYVdxY1huYlpuYlJ5ZFV8YlB9Y1F/YE59YVZ+YliAY1eCYlaEYFmAYFyCYl2AXl2CZleFaFmGaFuFaFWEaVSGalaCaFmIalqJbV2IalqMbVmHcFmGb1SGclmIcleKcVeCcVSBc1OBc1GAcVV+c1d+dVZ9c1l+dlKEdk6GeFOFeVWEfFWDfFKBflKAck6Ib0uIcFCKcVKLclOKb1ONcUyEcEuDcEaDcEyAdEmEdUeEd0eCeUiDd0aAeUZ+eEh9dkh8eUN9ekl7eUt6eUp3eEt2e016fkx5eUh3d0V0eENzfEZ0fEZxekZwfkZwdkV2dEN2cUV5dUB3dD52cT52dTx2cEJ3cEB8bD94aj96a0B1bUN9bUN/bT+Aa0SAakZ+a0V8cEGCcT+Dc0CEc0KGcDyFbzqGbTqKcDiGbzaEcDSEcDOGcTKCcDyJcD6Mbj+MbT+Ocj+MdT6Mdz+Md0GNeT6Ma0KKZ0GKbESIaUaIbkWJZDyJaDyFZTuEaT2DZzmMZjuPZjqQaTeNZj2OZj+QZECQYkGRaECRYUKNX0CLXkGKZEaMYkePYEmNXz6LXj2KWz2KWj2JXzqKWz2NWD2OVUCNWT2RWj+SXECQWkCUWESMVkWJWkaNWUiMWEqOWkqLV0yNWkyKWE2LV0+LWEOGVUKDW0KEXUaFX0OEX0aFYEGDY0WEY0CDZEKDVD6GUj+HUD+GVDuHUkGJUEKKT0SITUWIUEOMTkSOT0SQUUSRTUWSUUeFT0eBU0iEU0qGVkuFUkyFT0KBS0J/UECAUD5+Tj1+UUB8TEGDSUGESEOERUOESUCGST2HSDyHTD2HSUWER0iBRkqBSUmFSEZ/R0d9SUl8SEp6RUd8S0p9TEx9Tkx5TU1/TE+DS1B/Ukl6UUd5T0V5VEh8VUp9VUV+UkZ2UUV1UkJ1VEJ3UkVyUkNxVUZyUkB0Uz50Vz10UTxzUTxwTz5vTj9wUD5sVj9xWD9xXEBzWEBuWUJ0W0N1W0J4XUJ4WUZ2WUB4Wj96XTx7Vz57WD2AWDp+WDyCWDiAWDqCWzx3XTp2YTl3XDl0WTh0WTd2WDhyYj51ZT54YkB0YkBxYj5wY0FwY0B8ZT1/YUF9YUR9X0V+Y0V9Yjl9ZDh8ZTZ8YDh+Xjp+YDaAZjd4aTd5ajZ4Zjl1aDdzZjZyZDRzYjNxazh8bjV9bDp+ajOAai9/aDOCZzWDZjSFZDSEZjWHaTF8aTB6ay95ay13ZzB4bTF5bzB4cDJ3cjN2bzR4cDd3cDd0bjdzcThzczhvdTlwcTxwbz9wbTxwczZudTVtdTZqdDhqdDJscjJqdzZpeDdndjdjejdmfTdnfTZpfzdrfDRqdDVmczRkcDVicjFlcDBjcS9hby5kbjllcDtkcD1kbjpnbThpbDZobThrcDphcTxgcD5fcEBgcjtebj5ebD9ebUFcbkNda0FgbkNYbUZWaEhaZURXZERbZUBaZENeZT9cZEBeZklXZkxYY0xXYktVZ05WZ01UaU5YakxTYUxZX0xYXU1UXk5aX01dXk5fXUxhXE1jYE9VX1BSXk9PYVJSYFNPYlNNZFROZlRNaFVOZ1JLYU1RYUtPY0lPZUpPZ0dRaUlOXUlRW0dUWEZVVkdWWERTWUxRV01QVU1MVk9RVk9TWFFQWk1KWUtJWEtHXU5KWUdJVkdJVUZHWkRKWkVNXERKVUhLUkhLUElHUUlNUUdPUUdRUEVTUEhWUENXU0tIUk1GUktEUUtCVE9GU1FIVVNJVlNHVFRLVUlBWEhBWEc/WUdDWkY+UURCTUNAUUJFUURHU0FFTkZDS0dDSUg/SklETUk/TUo9TEg5T0w8T049TlA7T1A/TVI8TlI+T0Q6TEI3UUM7UUA5U0Q6SUE7RkE4SEE+RkY1RUc0REc5Q0c7QUU7QEU5QUM9SEY1SUYzSEQvTEczTEk0TUcwT0o0SkIySkAxRz4vSz4zTj0yTj0wTz8zQz8yQD8vQkA1Pz02PkE0Q0IvQkMtREMrQ0MpQkYuREcuR0EpRz8oRz8mSkIqS0QqTkQqT0QoUEMnUEAoUUMlRTspQjomRjkrSDksSjkpSTYoQTwpPj4nPkAoPTwrPzgsPTovPT4lPUAjOkIiP0AhQT8iP0IfOT4iNz4hNT4lNzwfMz8hLz0gMEIjMUMlM0QkMEQnNEYmMUYoM0coNEgpKzsiKT0hKj8gKjolKTsnKTsoJzshJTwgIkAgIzsfJD4kIz8lJEEmJEIoIj4nJkIlKEQmKUUqJ0YmLEAqLj8pLj0oKj8sMD8qMjsrNEArNDsoNTgoOTkpNTclMzgkNjUlNDchNzYrOjEtODUvNzcwNzgzNzozNzs2Nzk3Nz02OzMqPTEpPy4rPjEmPDIkPjIiQDEiPDIgQDIsQDUwRDMtRjIuRTIqQTIyQDM0RDI2PzE1QjY2Qjc8Rjs5RTo1RDQ+RjVASDVAQzA8RDBBRC48RTZCRjdERjVGRDVIRTlFQjlGRDtDSDRHSTNJSjRLTDVLSjFISS9HSy1GRy5JSTRNSjVPTTJPSDVRTjVRUTBTUjZSUjhRTjJVTjFXTixXTDJYSzBaSTFcSzRdTTNeTC5USyxTTipSTihTSixRRy1SRS1QRixUTytQUSpPVChRUitNVCpMUCxLUytTVStVVSdXVS1WVi1YUSdZUSRXUSNYTidZTilbUCpcTCpbUSVVUSNTVB9TUCNRTiBPUiBOTh5OUh5NUB1NVSNUWCJUWCFWWiBWWiRTWSZRXCdRXiZQXyZOXidMYSVOVx5dVyRcWSVdWidbXChcWypdUx1bUxpZUhlZUB1bTx9dUSBdTR9dVRpYVhhWWBhWWRdUVBlUUhlUURZUUBtUThZUThpUTRhUWhlYXxlVXRZYXh1TXx9TXiFSXB1RWxpQXBhQWRpPXBZPWBhOWRZOYSFWYyNUZCJSYyFYXyBbYh1aXh9cYRxcXx1dXRteYyVUZSdTZihVZilWYylSaShUbSpRbSdWbylXayZYay1TbC9Rby9OazFRaTJRaTVSajZQazhNZzdOcC9Scy9SdC1Rdi1QdDBUcy5WcS9XcTBZby9WcytQdipLcidPciZScyVNcSRScytLcytJcS1Iby1JcylHbyhIcSVGcC5GbC5Eay9CbzFDcTNFczNEcDRGaypDZipEaydDbSZCbihAbiRBcCc+byNAcCU+ciQ8aCtHZitIYi1IZyxLai9KZzFMazFLYzBEYC5DZTJDZjRFaDVEZTVHaDZGZzZHYy1BYitAYCpBXylAZCo+YCdEXCdFYSZHZCVGZSRHZCREZyNGZiNEXCxHWCxFXS5KXC1MXzBLWi1AVis/Wy4+WSY/WyQ/WSE9WSBBWR49WR5BVxs+VSVFUSZFViZIWCRIWSRLWCFHUi1EUy5GUTBHVS5HUCg+TCY+USg8SiFBUCBBTx5CUh8/SyRFRyRFTCVISiZJTSRJSSdDRyhCRiZARCZARyU+RiQ8QiE9RyM6SSI7SCU5RiE/RR5AQh9CQR5CRh1CQyJDQSNEPSNEQiVFQiRIQyZJQCRJPyRBPSU/OSI+PSY9PyU7Pik+PSQ5PB49ORw/Ph08OhxENhxFPBxGOCBFNSFFNSNENSVFNSFINh9JNB1KOB5KNBtMOBxLNhtMNxlOMCZBMCg/MiM+MyE+MyBBLyZDLSdDLilFLCtFKyZFKCZEJyhFJSlFJClCMClFMStHMyxGNC5HMSpJMixLLy1MMitONixCNzBBNitANCs+NS08NC47Nyw7MzBBMzJBNTZCMDNALzJCNDNFNTVGOTdHNTRJNTVLNTRNNDJNNTZPOTNFPDRFPTVDPzZDPTFFOzRBPDY+OjlAOzU8ODU8PDU6Pjk9Pjw9Ozw5QD08Oj48OD87Nj48NT8+Mzs7Mzo+NDk/Mjk5MDo/LjhBLDlAMTtDLz1DLj1FLz9BLD9FLUBCLEFEKkJELTZDKzZDLDdHKjNDKDdHKDhJKjdMJTlKJTlMJTxIJzRLKDJMKTNPKzJPKjFLJzRQJzVSJzJVJTdTIzVTITZVIzNSKjRVLDJXKjJZKzFbLjNXLzNVLjVYKTRaJzRcJjJcJTFeJjdcJTJaIzBaJC1aIytaIjBXJy1ZKCtZKShcKyxYLSpYLCdXLiVYKipgKCxiKSxkLSpgLi1gLilfMC1iJixhJC1jJCtlIiplIi1hJixmJippJStqJC1qKSppJCpsIytuJC1wIy9xIilwISdvJy1wKC9xJzNwKy5xKyxvLixuLy1vLyptKDFtKDNrKTVsKTdtJTRrLDVrLjdsLjtqMDVrLThoLDpmLjtlMDplKjxnLj1kMD9jMT5hMz5gMDxfMTtdNTheMTxbNjxeODtfOTdgOT1hODdkODNjNjdmNzloNjVoNDViMzNgNTBdMTRgNjRdNzRbOjNbOjFZODZaOzNdPTJePi5dPzNgOy9fOixgOSteOildOC1iOC1cNyxaOilXNi1YPCxYPixXQChWQC5XPylaQCdbPyVbPyNaQSdePihfPCVbOyNaOyJYOyBXOCRbOyRWOyNUPiFSOyVSOyRPPSdSOSJPQiJUQiBVRB5URCRVRiRURiVRRiJPQR9XQRxYQRhXQBxbPh1bPBxZPR5cPhlTQBhRPxdQPBpSQhpRRBlQRRdRRxZQRRtPRRdURxZVRhNVRBJURhdYSBJWRw9WRg5YRQ1YSg5WSw9YSw9URhBaRQ9cRBFeRRNeRw5eQhFeQRNfQBNiPxJjPxRbPRZfPBRaQhVjQhVmQRllRBVnRRNmRBZqPhdoPRpoPhtqPhpsOhloPh1qPh9sOx9tOyBvPyFsOh5sNx5tNRxwNR5rOBpuNxhvNxZuNxZsOBRvOBFuOhFsOxNrNhBtOg9qOw9oOg5mOA5mPg1oOw5kOg5iPA1gPg5fORBhOwtfPQpdPAtaOgxaPAddPgtZPgxXPgtVPwlVPw5WPAtTPAlRPwxPOgpPOQ1QOg1TQAhPQghOQgpLRAtLQwZNQApKQBBIPwpGQAhFPgxEQghEPQ5KPBBLOxFJOhNJPRJMPRFPOhRPOhJSOhBHNRFHOBBBOA1DNhNEMxREMRNDMhJBMxdEMRhELxhCMBhGLxJELhFDLBJBLBE/LBRBKxY/KxY7KhhALxY9MBY7MBQ4Mxc8NBY+Mxo9MRA7NA86NA44NRE6OBE6ORE8ORI+OBQ4Ow87PQ89QBI8Pw08PhI/PxVAQxZAPhZCPBdBPhVEQxNCRRBDRA5ERRRFSBRGShRESBZITBVGSxZIRxdKTBdJSBhLSxhLSA9DTA5FSQtBSglCSQdBTAhCSQxISwxKTQpKTgpLSQtMTQlITwdHUQhGUwdGUAlEUgpCUwxCVQ1BUQhAUQ5CUxJDVRNDTxJCThE/ThE9SxFAUxFFVRJHWRJHVBBKUhFLUBFKUhNNThJLUBROThNNWA9FWg5EXRBCWgtEWRFBWhI/XRZAWBM9VhM+WBE7WxdEXxhFWRhGWhlIVhhFXRRGYBRHZBVFXxFHYBFKXhBMXA5LWg5MWQ9OWQxLYRNCYxNAYxZAZhdAYhI+ZBA+Yw5AZQw/ZApBYho/YxtBZRxAXxs/Xx4/Xho9ZBxFaBxGYxtHYR1IYh9JXx1GahhEaxhBbRdBahVFbBRFaRlAaho9bBs9bB0+aBs8Zxk7ZBo5ZRw3cBw8cSA6cho6cRg7bhg7bx44ayE3bx80biEycCMxciMybyQvbiQ3bCU4byg3aig7aiQ7bCk1bCs0bC01ay41aysxbCkuaScwby42cjE1cC86by07cTE7bC48bzQ2cDU0cDg2bzYycDgxbzMwcjk2cj00dD0zdTw4dT45dz87d0E9dEE/cT81cEEzc0Iyc0M0bkIzdEIwdEYtd0ItdUIrdz8udkcxeUsyc0oydEk1cUo2cUg4cEw2eU8vd1EyeVAte1IteU8qe1I0elU0e1YyfVI2fU83ek04e1A7eVY1eFk1eFk5dlkzdFk1dlgxeFw3eF45e2E4e2A8fWI8f2E7gF86gWM6g2I4hl85hGU3gWU0gmg1f2YzgWo0f2gyhWI8h2E+hmFAhWJBiWI9iWQ9iGBCiGFEiWVDimBGil1GjF1Ii1pJjVlLhmhGiGlHiWtHhGhHgmdFf2hHf2lJfWdFiWdJi2hKjWlJjmhIjGZMimVNjmxJj21Ikm1LjHBHkXFHjHNHl25Gl2hIlWZJlmRIlWdMmW1KnG1GnW5Mm21NmmxMn3BHom1HonJFpHJHpXRGpHZFpXhFomxDo2pEpWlBpGpAomhEo2VFoWNFn2NGnWJFnmBEm2JGpmhCqGdAp2U+qGM+qmZBqmVDqmVFqmJDpWU+pGI9omM7oWU6omE/oV89omE5oWE3nmA4nGE2omA1oV02oVs0ol04m187l2E7nF09nVs8nFk7nVc6nVY9m2M7mWU8mWY4m2c9m2dAm2VBnGlBlmc6lGg4k2w7kmQ4kGg3kGM4lGw3lG83kG83lHA0knE6j3I7jHM5kHM9jnM+jnNBkHRCjXdDkXhDj3Y2kHY0knQ0j3k3jHo3ink4iHo4h3s1kHcykXcwlXYwkHgtkngrkXkpk3gnknollHowl3owmHozmnozl30wln4ulnwslYAul3k0mXY3mHQ3lng5lXs5lX04lH85kno9kX88kHs+kH4+m3Y3nXQ3nXQ7oHU2oXM2oXE1o3M3nHE5nG87nm88n24/m206nG04m283oG87o3E9pXE/pW46o3Y+oXhBpHc8m3VCmnVDm3g+nHo9nHo7nH4+nXw6nX47noE6mnBCmHBBl3JAl25BlW1Ak2tAk2tDkmo/kmZAlGY/jWo+jGtAi2s8i21Aim08im4+kWRAkmJBjmBBk2FDlF5FlV5BkV5AjVw+i1w/jltCkFpEjVw7i1w6ilo5i1g5jV03j1w4kFw6hlg5hlc2hVk1hFk6hFk8glc6h1U2hFQzg1I0iFIziFExi1M0g1Uxf1EvgFYuglItgk8shlAqgE8qgFAogVAmgFMoglEkgFQmgVMkgVUihkwriEwqhkomiUorikouikwmjkskik4ji04giFAjjEgijkgdjEQgjkMfkEIhjUAekUgfkkkdlEgclUYdlEwdkk4elUsglUgamUgXmEkVlkQXlEUWmEMWm0kYnEoWn0oXoEgXm00WoEwXo0wXpE4Yo1AYpEwVpU4aplAcqk4bpU8eo1Afpk0fqlIcrFIcrlAfrVAgrVQdrFYbrVkbrlkdrVoZsFAesU4gtE8gtU8esUwgtU8it1AiuFMhtlQhulMhu1Uhu1Yeu1gdvlYhu1Qdu1QauFQZuFQXvFIZu08atFQas1MWs1YatE8Zs04XsE0Xr00ZtUsXr00VrEkWrEgUq00Tq1ATqlARqlEVq0kYp0YYpkgZq0Uaq0IarEEYqkAWqj0XpkQXo0MapEEbo0IVpEMToUQboEQdnUQdnEUcoUUfpEUgoUgenEMfmkMfmUMimkEjmEEemT4flzwelzofmjkgmEQil0UllUYlk0cjmUYmmkglnEomnUkonUsllEYnkkoplEoqkUYqkEQqj0MsjkQokUwokU4oj08qjU4pklAmklInlFMoklQkkFAsjlEtjlYtiFUpilUmh1cojFYmiVkuhVwtiVwxil4wjFsxhFwwgl0wgWAtgF4yf1szfl8xflw1hGEvhWMvhmMshWUqhmUwh2cwiWgyiGg1h2EsiGEphmAnh2Alil8qjF8rjVsrkF0sgl4ngV4jgF0of1snfVooe1kneVgoeVgrd1cngWElgGIjgmMhgWIff2UkfWQlhGMihmQgiGIdiGUiimUghlwbiFshilgfhlcgilYehlUeiVQegVwcgV0agF0Yf1wef1ogfVohe1sgfFgjgmAagmEYg18UgmQZgmYXgmgYgWoWf2oVhmEXiGAVi18XimIUiGQTh2YTiGMQjFkXjlkYiFgXh1gVh1sVjVkUj1kTkVsUk1oVj1gRjVgQkFYQjFYOkF0UkV8Ukl8XlGAYkGEUj2ERjWARkGIQkF4ZkV4blF0djl0cjlsgjl8gjlsjjl8jjl0kkloblFgbl1kamFgck1YakFMaklQel1oYml0ZnF0ZmVwVmV4amWAcml8enGAfl2IcmV0fmlwhnVsjmFohnVofn1ken1cdoVYdnVUanlUXnVcXm1Mam1Idm1AdmlQfm08fmlMhmlAhmk8knlMWn1QTnlATolQTnVIQnFAOmk4Qm0wRnk8NmE8QlE0Qk04PlVAUk04Vl1EVlEsRkkkPkEoQj0kSkkcQj0wPjE0QiUsRi08OikkPiUcPiUURiEQRiEYMh0gLh0oLhUcJi0YSjEQUjEYWjUUYjkMTj0IRkUERjUARikcWhUgZiUsYjEwXiU0ai08WiEYchkUdhUcfhkgghkMdhkEbhEIfhz8cg0gfgkkhgUcjf0YjgEsggU0fgE0cgVAbf1EZgkglgUcpgkkrhEUoh0Img0Emf0cqfkgsf0cugEUue0gse0cpfUYpfkgwf0cze0Qyfkg1f0c3fkk5f0g7f0o9fUA0fD0ye0A1fEI6eUQ4fEM8eUU6ekY+fz4ugDwvgT8sgEIsfjoufzcvgTYtgTcrfTYvfTMvfTMyejIvgzUvhTQthTEuhTEwhzUthzcsiDcqhjktiDkohzsrhzsphjAtiSwsii0qhSsshSkthCcsgigrhCUtjSotjCgtiycrjisvjy4vjS8xkS8wjSYvjSQviyMwiSQwkCMwkiUxkSYzjyU0kigzjCEyih8ziCA0hyA2ix41jh00jhwyjxw2hiEyhCMzhSU0gyY2hyY1iCoziig3iyo4jio4jyw5kS03kSw1ki84hTA2hjA4gi01gCszfis0fCkzeikzhjI1hTY1hTYziTQ2izM3ijM6izE7jzM8jjA+hDg2hDw2hT03gTo3fjk2fDk5fTw6hD00hkAzg0M1hUExh0MwikEwh0QuhkM5hkY4hUg5h0M7iEY3iUk2i0g0i0Yzi0o4jEw3jEo0jkoykEkzkkkxjkwxkEg1kkc2kkY5k0Y6j0M7jUE6jkU9jkM/jkVBj0dBjkRDij0+jDs5jTw3jjk2jDw1hjs+hTg9hTc7gzw+hD4/gUA/fz8+gUI/hTc/hDQ/gjQ+gDU+hDNChjREhTNGhDVHgzVKgjI8gDI6fi85fy49fiw9fSs/fixBgCo9gCg5eyo/eilBeidCeiVAdypAdiw/dS5BdC9Bdi1EeiZEeCNFdiNGeyRIfCJJfSBIfSNLdh9Ddh1FdxxFdh5AdR5HdRxJcxtJcRxJdR5LeBtOdh5QcxhKcRdKcBhOchRKdBVJdRdJbRdMaxhOaxhSaRdNaBdKbRVQbRRTbhZWbxFScRZTchhUcRpVcRtXdBhTdhZSdxVUdRVQdxNPeBJRehBQbh1UbB5YbB5SayBSbh5PaxtWaRtYahpaahtcZxlXZhpVZBtVZhlTbBlabhlcbhtfcBdccRVgcxhechVidRhgdBdicB9dbiBebiFgcSBbdSBYdSBdaiFeaSJiaCFcZCFfZSRcYiNgYyZdYCZfaR5gaB1jah5naBpiZhphZRdhYxtibB1kbh1mcCBocRxlbyRlbidocCVjcCRhaSVoaShnailoaiVraSNsaiFraCNuaR9taCBvaCdlZyljZStkZS1jZylhaSpfaS1gaSldai5eaitbay1cbC9aYyplYStlYCpoXSpoXypjYSlpYShsXyZrXiVtXyptXyVpXSNoWyJqWyBrXyFoWiRrWCNsVSJqVyZtViBtVB5tUx1vVB5xUxtvUhlxVRhxURdwThdwVRh0WBd1WBV0WxVzVxd3VRl4Uxh2VxNzVxFyWRFwWxBwVQ9yWBJuWRJsXRRqVxNqVhVrVxdqVBVrXhduYBVvYhVuXRlwXBtvWhpuXB1wXxNwYRJxYRBvYw9vYBBzYBJ2YBB4Yg54XhB5YA9tYA5rYg9qZA5pXg1qXA1rWgxqWgtoWAtrYhFpYxNoZxNoYhVnZhNraBNsbBFsZxRvaRNxbBRxbBZwbRJyaQ1sagxqbAxpaAttZwlvZwtxZgdvaQ1oag1mbg5kaA5kaQ1haQtgag9gagteaw9dawxdbhJnchFnbhVocBZpbBZncBBqcg9rcw1qdQxqcQ5ucQxocgpndglkcAhmbwZobQVnbAVlbARpdhBgcg1fcQtecAlfcQpcbwhecAhcdw5jeRBkfRFiehBmew5gfQ5ffhBbfQteewpdewpaeQleeQlaeAlcexBdexRbdxNbdhFacxFadQ5XchBZcQxXfBVdfhdegBhafxdgfRhiehdifhlkhBRbgxRYhRVXhRJchhNehRRgiBJfgRNYgBNVgRZSfhFVfw9WfA1Vew5VfAtWfhlVgRtSfRpWehpWfR1WeRtZhRtWhxxShhtYhRtaiRxXhR5bhRhThhdRhRhOhhlNhhRRiBNShxBShg9RiA9TgxlOghpMgx1KfxpNfhlLfBdLfBZNexZKgx1OhCBOhyFMhCFQgSFRhSNQgSJUiB5Oih5Nix1LjB5JixxPjhtOiRtKihtHih5EiBlGiRZHiBRGhhVFiBJHhx5GhiBFhCFGgSJDgyVFgCRCgidEgCdCiSNHjiZFiyVKiSZMkCFFjyFCkSFBkR9GjSFBjCE/jSQ8ih8/iR88hx08hR49gx87hB85gSA8iCg+hyo+hiY9jCxDjy5DiytGiCtGiy5HhypIkytDky1FlS5FlCxBlCs8kyg/kyxHky1KkS1LlytKmSpLmStNmClPmyxKmy9JmzBLmi9Hmi1Omi1RmC1SmCxUnC9Sli5SlC5TkytTkitVki9RkzJRlDJPkzNTkypRkihSkyZUkiZQkSRQjiNRkSJNlyZWlidYliVamSZVmiVTmSNSnCZSlilYlSpbkylckylelS1amC5amDFZmjJZmzRZkSlajyhbjiVdjShYiyZZjSpYkSFbkiFdkR9fkiBZkh9Vjx5XlCJelSJgkyNikyJklyRgmSRikiVhkCZjjSRmjyhijSNiiyFiix5liiBghh5hiRxghRxiiBpghRphhBhhkBxlkB1nkBxpkhtkkhpikBpglBlhkR9okSBqjyBukiNqiiFsiR9rhx9riSNriiVsiSZujCdriihvjCltiRpqiBpthhhtihlpiRpviBpxhhtyhBp0ihpzihl1ixp3iBh1hR1xgx9xgRxwgyFwfx5yfB1yex90fCF0fyB0ehtveRtseB5pdxlseBdudxhqdxVudh5tdSBsdiNpcyFuciNtcSRwcyVxdCRzcyFzdiR0eCNseiVsfCVueyZwfCdyfydxfCd0fCJpfSFnfCFlfSJjfh9ngB9pghxpghtngxxreSFleCFjdSBkdyhkeSthdypmdClndCpqdixqciprfylffylkfy1mfipofSdafSJdfyFefCFbfh5eeidceClbeixZdCdcdSxccihdeyxcfC5cfi5afy9Zfi5efTBgey9ifTJhejFjezJjgStYgitUgihYhSZbhipbfitVfStSfi1ReypSeiZReSdVeSRReCVVeSNTfi9SgjNOfzNTgDVSgTJVhS9PhS9Lhy1QiSxPiy5PiipQgi1MgSxKfixIfilMgihLfTFJfzJGfDJLejFNei9NejNPezJGfDNDfDZDezdFeTNCeTQ/ezM+dzQ/fjdCfjlCgjlDgD1EgjxIgkBFhjtJhzxMiD5MiTpJijxHiD1GhTxOhT1QhjtShjlSgz5Qhz1UiDtWhjpYhDtXiT1XhzlZhTdbhjZdiDZdhDZahjRWhTFaiDJVhzBYiDBWhTVfhTFhgzFghjVjhzhjhzllhTlnhTpphzBihi5jhi1lhCxmiCxihylihShhiChkhCZhhCNkhy9nhy9phjNriC1rhCttgilthCdqgidsijFqizRrjTRpjjZpjDRtijRviTJvijZwjTJnjzNljjRjjTNikDBlji9kkS9njjZjkTdfjjpijTtkjTxgjzVbjjdZjDdYjjFcjzJYjS9ckDlYjzhUkT1XkT5ZkT1bkkBZjzxSjjtQkDpOkjxOjDxPjT9Pi0FPi0NPi0VNi0RLjEdOkDlNkjhLkTlJjzhHkjVLlTVJlDVHlzVFmDdGkTtIlDtEkT9Gj0BJkENJkERHkEdHkUhKkEhGkTxCkjs/kz4+kj89kTo+kTdBjTc/kDVCjDZAjTJDlj8/lkE+mEM7mEJAmkBAl0NClz86mD84lj42lTw2mj43nD85lkA0lD8ylT4wlD4ukkEyk0IwkUI0lz0xmTwvmDkulzksmzwvnT4vnEAxnUIxnEQzlzgvljYvkzQslTQxkzQykzM0kTI1lTE1kDgskTgpjzcojzotjDosjjowkzkpkzomkzgilTsmmD4olD8nlDUlkjEkki8kljIjlzQhljUfmjQhkDImjjAnjDAljTEpijAmhjElhTEnhy0khiwniSsjhTMkgTIjhDcjhDsigTokfTMmejYofzAoejAofi4qejYkeDgkdjUjezshez0ifDoffT4hfjwgdTcmczYncTooczUqdDcrdTMudjcvbjYnbDgpbTgrajYmajQnaTkpaTosaDgvZjssZj0uZDorZD8uZzMtaTItaTAuZTItZTEqYzQtbTErbC8qbi0qaiwnay0kbCskZywnZCspaCoray8jbC8hbzIhazEgaC4eZjEgZS0dZDAgYy4fYS4ecC4hcy8idC8gdC0jcy0mdCsndiomcyopdjEfejIeejMgdzQcdzYddDQbezAdgDAbfi0ffCwhfCohfSkjfCkmeikmfSgngTIehjIdhzIfhDUcgTYbhjYbgTUZhzAcjDIaii0bjSwbjiwdjisajjQekDMdkjMejjYgjDchjDgjijgfkzIakzMXkzIVky8aki4clDUXlDYVljgVlzkXkjcTkTkVjzgXjzYXjjoYOj1ROkFRPT9UPj9POz5MPkFMPz1MPDpLQDpJPT1IPz5GPj9EPD1DPUJDP0NDPEFAOj9DOD9EOD5HNj9IMUFJMkVBNUJCP0ZEQEdDP0VGPEdEO0hBOUlBN0hCOUtDOk1CNU1CNUlENUhGNkZHNUZJM0dJMkZNLk1JMkpHOlBEPFFDO09GOFFEOFNFNVRFNFJGNVVHNVhHMFZHL1JMM0xPNE1LNE9KN1lIOFtHOVdJNlpKM1xKMlxMMVlMM1xOM15PL11QMFlOM1VOM1NPM1BTLlVXL1ZTNl9QNmJQN15PNV9TM2BTMV1VM19YNGFZMF5bMVtXMVdaNlNVNVdUNFlVNmJaN2RaOGBYN2BcNWFeNV9gOWBjNlxkNVtgN1pcOFlbOlRaOVRgOFZgO2FjPGNkPGBgPV9kPF5mPVxnPFpmQFtnQVxoQFhpPVhmPlRkP1ZcPllfPllhRF1oRV9qRF9lRVtnRlppR1doSVhmS1lnSlRnR1RlRVhiRVhgRVZbSFJeR1JhTVhoTFZqT1ppT1ZnUFVnUVNlT1JkVVRlU1BiT1JiTlZhTVdfTFdZTlJaT1FdV1ZjWVZlVVhjV1VhWFNgWFJeVlJdWVRcXFRcWVFZVVNbVFdcU1lcUFxYUlZVXVZbX1VaXVhdXFdZXVhXXFdUWVdVXllRWlZQWFhTV1tWVl1WU2FUU11NVVtQX1tQYltPX11SXVxOXVpMW1tKWVxMXF5JWV5HWF5LWGBNWWBPWGFQVmZRVWVLVmNKX2BHYF9EYWFJXmJGXWJEW2RDWWRFXmdBWWlBWWdFWGtHWmlMWmlOW2ZLWmZJYGhBYWg/YmhEXmxAXG5AW21CX3E/W3NBW3BEW29GXW1HXW1JXXBOWHZKWnNIYnNAY3M+Y3FCYXVCX3dBXXdEYHpEXXhGX3VIYHRKYXVQXnpOXnpMZH1DZH5BZXpDZH5FYoBFZIJJZYRJYoRNYn9MY3tLZHlMZHpOZndRZX5UY35QZH1PaIVIaIdHaYNHaYVLaYNMaYRPaIJQbINQbYZQaoVUaYFSan1QantQa3tSbHdTbHxXa35WcIVQcodPcYNQcoZUcINXc4RYdYZZcoNccIFYcX1acnlTcX1TcX9Ud4ZYeIhZeIVWeYRaeIRcd39de4BdfYFee31geH1ceH5YeHxWeXhTe3RbeXhbf4JdgYNff4NbgH9cgn5dgntegHpdhnpegnZfgHhcgHRZf3hSf3pWf3pYiHpdintfiHxbiXhbiXZciHRbhnRZjHNZiXBXhnhWhnlUhXpPhXJNhnNRj3RZkXNbj3dZkHNWj3FWj3FTjXJSk3FRj3FOjXNQjHZNi3xRjHlTjHZTlnJSl3FTlXVTlnNPlnJNmXVJlXZGk3ZKkXpKkXpIkHxMkH1QknpPknhOnHZKnXRLnHhMnnlIm3tGoX5GnX9Dl4FLlYBOmH1Mo39IpX5Hon5KooFIooNGoYdIo4hIn4pHnIVKmohLmoNOmoJQnIJNnYNLpYlKp4tIpodLo4tLn45MpJFOn5JPno5OnYxPnopPnohQm4ZUmoxUm41TppBQqJJPp45QpZFSppBVpJFXopFWpJBZppFbopBaoZNboYxWoYpWn4pYnohZnoVZnYhbnItcm4tenY1bn4xZqJNaqZNdppVaqZNYq5RXrZNWrpZVr5JXsJBVsZRYs5RYsJZVsZhWsJpYsJxXspxVs55Us6BVtJ1StJtRs5lSsppUsI5WsIxUro1Xso5Ysoxas41csYxetY1dto9ctI9hsotgs4lgs4detIVftoJjtohotIlkuY5cupFauoxbu45eu5Fgu5Biuo5jvo9iwJFivo9nu41lvIlou4Niu4hhu4phwpBhxJJhwo5fxI5jxY9lxY1nw4xoyYxnxolox4pqxIlow4RpwINhwYdiwohkzIxlzo1lyotjzYlmzolozoZozIVpz4Rn0oRnz4FpzINoyoNmyYVlx4RjxIBgyH1kyX5m04Rk1oRl0oVi04Fk1H9l031k0X1l1nth0nhi0Hxjzn1hzHpgzIBeyoJdzYFgz4Bh13tf2ntf135e1npd13dd1nZb03Zc1nZY2HVX1HVX1HNX0nZZ0XhZ0Xpaz3xZzH1WzHZSznZW2XdV3HZV2XlW2HZT2HRS1nRQ1HRR1nVO2HVM03RL0nVPznhN0H9S0ntS03lR2ndL3HZK2nhN2HhJ13dH1nlG1HpH2HtD1X1F031D03xH0YBI1IBN1IFP1X5N1X1L231D3HxB235F2X9B2X8/14E+1YE/2IM+2oQ71oU+1YU71IQ/1YRC1oNE1oRG1IhJ0ItD0ohC1IZD3IQ83YQ53YE93YY+3og93Io92ok/3Iw+3Y482I492YtA141E24lJ3IhF24lD4I894ZA64Y4+35E+3pM93JQ/25JA3phA2ZdC2pNC2pNH341J349F4JpA4Jw/4phA4JpD3ptE3ptH3phH4JtI4Z5J35pM45RK45VM5JNJ5JJH5pFG45NF4ZVG459I4qJI5J5G5Z9K5p1L5p1N5ZpO6ZxO6p9O6J1S55lQ6JZT6pFN6ZRM6JdN7Z9N7qFN7Z1L7p5Q8J1P8ZpR75lR85lQ9ZpS8pZR8pZU75ZR7pdM7pVK7pNL7pFI749L8I1P75FP95pQ+ZpR9pxO95hO+ZhM+pZM/JZO+JNL/ZFM/ZRP/JRS+pZT+pVV/JRW/JNY+5Na/pFY/5BW/5FU/ZNU9pFL9JFJ9ZFO945L9oxM+ItO+Y1P94pQ9odP+ohS+YxS9ZFU9ZNZ95Ba+Y5a+Y1X9IZR9INP8odR9YVT9INV9YRX9odX8oVZ8YJa84Zb9IVd9YhZ8o1W75FX8JBb8Y5d8oxc74JZ7n9b74FW7YRa7YRc7Idd7Ylb54Zd6Ylb6Itd64pa7IhW7IlU64xQ6o9T6pBV6o5X5YVd5IRe5YVa5Ihd4Ylc4Ytc44xb3oxb3Y5d341Z3Y9Y4Y5Z441X5ItW5YxU5I5T5Y9R5o9P45NT4pFV35Bd4ZBd3pFg3ZJc25Jb2pRZ3JRX2JNY1pRa2JVW15dW2pRV25JU25BU3I9S3o5N3pJN3pVO3ZVR3JNR05Na0ZRa1JBb05JX0JJW0JNU0pNSzpJSzZRQ0JBRzo9P0pFQ1JBQ1I5S1oxS2otP2JBL1pBNzpZQ0JdPzJhSzJdOzpdLzJVJzpRIyZNLyZJGzZJHz5BI0pFI0pJG1IxL0I1Kz45Jx5JNxZJNyZFPx49LxY9Jxo1IyI1HwopIxYlFyYpHyotLzIpN0IZOz4VIzYdHwYhKvohKwolNwoZJwYVHwoJHxINGwH9Jw31GxoFHx4FJx4RKyYRLzoJOzXtKyn5JyYBKv35LvH5Lv4BNwHxMwHpLwnhLxHpLwHVOxXVNxnlMynlPyIFSxX9PxX1Ov3VRvXNQv3hRwXRSwXFSxHFUxnNTxHFWw29Xx29Xx3NVx3ZVxXdUxXlVx31ZynhayXZZwW9awG1bv3FZw3BcxW5dxnBfx3JexXBhxG5jxnJiyHFjx3NgxnZfyHhixHpew3xdxHhdxXZdwm9lwWxmwHBkw3BnwnFpxHNqxXVownVswnRuxndtxXdpwndmwXlkv35kw35oxHxpv3Rvv3NxvXRtv3dwwXhywHpywXxwvXt0vn5xwH9zwH5vv3xsvXxqu4BmvoZrvoJsunx1unt3uXtzun91uIB1uIJ0uoJxtoNztYR0uIdyuYRwuIZstn9nt39suIBusoR0sYV2sYJzsYZysolysYpws4lur4pvrYxwr4pssI1ssolssoRssoNrsIBmr4Rlr4ZlsIdnq4tyrIx0q4hxqYxxp4tvqIttqopspoprpItrp4xnqYlpq4Nsq35pqoBmqYJlqYVmootpo41nn4xqoYlmoIZlooRmnoZmnYVknoRooYNno4RrpINtpn9sp39upn1rpXpoo35om4Zim4VgnIlimIZjl4RjlYRllYVnlIlmkopmlIdok4lsmYptmotumolrmIhpj4ZijYZikIRgkIhgj4phkIxgko1gjY1ckJBck41dlYtclo5ZmIZZlodclIldi4taiYxbjIlbjIxYjI9YjpBWkI9WjY9Ti5BSkJFRkY5UkopWk4hWlIhTloRTlYpPlItQiY9Rh5BQiYxRi49Oi5FNjZBLj49Mi49HkI9GkI1Kj4pOj4hOkoNOlIVLlIdKk4lKiI5Hh5BFh45JiYxFi4pCjYlEiohCiIdAjYVAjYdEjYZGjIdIjIZKjYFNj4BHj4JGjoRHhoZAhIc+hYZCh4NAiII+iYA/ioBBh34/hX09iXo/in5CiIBFiIBIiH5Ni3pJintGgn0+gX07goA/gns/gnk/g3dBhHhDgHdCf3VBgnZFgnNFhHdFhHlJhHdKg39Mg35Hg3xGfXVAfHg/e3VCfHM+fXM8f3I8f289g3M6gm86hG88gG48f2k7e2Y2emo1e202fG03gnU3g3c4gHU2h3M2iHI0h280iHEwi3Awh28xgm8ygG8xfWwtgWssg2sshWwtg20viXcwi3kwhngxiHYthncshHUsgnYqg3UogHIqgXQugHgwf3kxensyd3Uue3Uugncmg3cjgnonf3clfnUkfHQke3Une3YheHckd3UjeXYne3kpe3oreH4ucXordXkpe3kffHcdfXogeXoed3gddHkedHogdHsccnscdH0ec38edX0jcX4kd4ApeH4ld30jcX0Zb3sYc34Yb38abH4aa38can0eaoMea34gbHwhanwkaX0ka3olbXglbXYmbngibXoha4YfaYcfbYYdbIYha4YjbYkmbYoocIkkcYslcYYmc4Ukc4QidYMidoQjeYQkeoMieYUmeIYndoYndYUlbIwpa40mbo4qaowraIsqZ4ksaIYrZoovaIYvZoYwaYUtbYYub4Yuc4IrbX8obIIqZ40wZY4yaI4vaYwyaIs0a4o2bIw3aog4aoY3bYg5b4c4bYs5bI07bo09b4s9bY4/a5A+apFAapA8ao46aYM4Z4Q6bIM6aYE3aIAzaYExaX0zZ3w0aHwva38wbn0tdIAwcIEyboEyaHo2Zng3aXs4aXg0aHcyanUxbHcwbHQya3EzbXIubnYvcnYudXs0cXozb3kybHA1am42bHI3b24ycW0yc28xc2o0dW0zdmsxdW8ydHM0dXU2d3Q1eXY2eXg3eXIzcWk2b2g1cGs4cmU2c2M4dWQ4cmI6cmA6c2Q8c2I+d2Y8eGU+eGM/emc/e2s/eGo8d2g7cV45cls6cV42bl46bl08a109al88alk8Z1w+aF87aGA5ZmA4ZGA5Z2E1aWE0aWIya2E1amA4alY6alQ7bFc5aFY4ZlU5ZFk2ZFI0YVYzZFkzZloyaFs0aVwzaVwwaV0ubF4uaFwsZlssZVouZlswZVAzZE4zaFA0ZlEwZFEvZVIsZlUtZlErZU8qaFMpZlMnaFUrbFYrbFcpblctblYvcFYwbFQwalQvZkwqZUopZkwtaUwpaU0na0wmbU4nbEgmb0oncEolb00nb00qck0rc0wqck4ucE4vcE8xbk8ubk4rbEUnakQma0YqbkQnb0QlcUMlcUEmckIidEQhdkEkcz8lbj4kbTwjbDggcjggdkQgeEQidkYedkIeeEAedz4aeT8ZdzoZcT4ebz4eaj0cazsabToZcDoZeUEXfEIWd0MYeEAUeD4Udj0SdDwUdT4Qdj4Ocz0QczsOcjwTc0AVb0AWa0EXbjwUdkENeEELdkMOdEALcz4KcT8Ibz4KckIGbUAFbT8KaUELa0QSbkIQbkEOckUFdUUEckYHcEUEcEgEbUgDbEYFbEsEbEwCaUoEaEoCaUgGaEkJZkkIaEkMakkPbEgMbEgJbk4CblAAcE4DbVAEalEEaVIGaFEHa1YGaFYJaVIKalALbE4KbU0LbU4Obk4Qb0wRbU8SalITalEPblcFblgDb1QFb1kHcFgJcFoLb1wJcFkPb10PbV0La10KalwIaFwIZ10JZV4KY10IZF8LZmANaGANaV4Lb1YQcVUSblUObVcSbVkUa1oUalwSaVkYZ10WaFwSYlcKYVoNYVsOY1wQaFYZaFYbaFQXZVYYZFgaYVkZYVkWXlYbXFkXYFgVY1YTY1INX1MNXVQOXlYQX1McXVMeYVMcXlEaW1EZW1EWXVEVWU0WW04SYU8UYk8WZE4WZE0UaEwTZkwQZEwPYk0QYk4SWUoXV0oYW0oZWkkVWEkTWUgQW0kQWUMQW0UMXUgPYEgTYkgUZ0cTZUUOYkYOWUERVkARWkEUW0AQWz8NXT4MX0AMXjwNXToMYTwKYT8NYkAPYEERYUETZkAWaj0PZj8PXTgOXDYNXDkRYDcPYjYNZDYNZTgOZDQQZDEPZzQRaDMPZzcQaDgUajcUaDkWZToXZTsZZDoVZDkTYjAQYC8PYDISYy4SZS0RZisTaCwUZSoUZicVZSsXZCoZZywWaC8YZjAYZzIZajEZbDUbbjIabi8ZcC4ZbC4Yai8YZSUTZiMVZiURYiUUYSMWXyIVYCESXyAWXSAYWx8UXx4SYR0SYx0SZRsSYxkSZBcSZhYRXRUTXxkSYRoSXR8bXCAcYB4bXB0aWR0aWBoZWhkXVhgdVhUZWhYYXBYYWxIYYRUZYxQZYBcZXhgYVxcfVRghWRcgVhQfVxMhVxAgWRAeWA8hVw0jVwsfWg4eXREeYBEfZQ8fYwseYQoeXgseVw0mVQwnWQ8mWQsmWQklWwclXQgjXAUoXwQlXwgjZAgjZBAlYA4lXwwkXQUrWwQtXQgsYAUrYAIrYwIrZAMpZAMtZAEvaAEsZgQqagcqZg4qZAsqZAgqZAIxZQAzYQIyZQQxZwUzaQYzaQcwawc0bAY2bQgybgcyawgwZwsvZw0vaBMvcBAwbQ0wbAg5bQY7aQg5bQo4cAo4cQ03bw42cQ46cw85bxA6bxI7bxA3ag82aBE2aRM1ZRU0axc1bRU1axM2dRA7dg48dBE9dxI6dhQ5eBY5eBY7ehU4exg3fBU6fhU6exU/ehNAehNCfBVCfRZFfBVHfhhEfhlCgBtDfRlAfBdAexg0eRYzfhgzehs0eBs0dx40dx43eSAzdyIyeiA1eyM1eCA3eiA6eiI7eiQ6eyE9fR5Aex08eh06dyIweSEudiUvdCEvdB8tdRwucxwvdxoqdxcucxkvcBkvbxcwcRUwbBgvaRgubRoubxsudhoneBomdBondhcoeBUpeBMpdhMrdxEneREldw4pdBEqcRQqbxQpahIpbQsrcA4qeBAjehAhdxIidw4ieAwjdgokdAsldAkhdQggcgYjcgolcQ4kbxAkahEkaAkkbAoldAgddgYcdAsccgcccQQdbwQdbgYfbQMZagMdbAYfaAkfbA4dbBAdbgwdbgoebQQWbQIVbgYWagQWaAIWZgMWZQQYZAQSYQQWZAYYZQgZZwkZZwsZZhAaXg4ZYQsZZAUQZAMOZwYQYgcQYAcQXwkQYAoSXQsNXA0RYA0SZRETZw8SaRASZg0RZAwRXgsKXAoIYAoJXg4KXBAKXRIKXxIMXhMIXRQGYBUJXhcKYBQMYxMMZRUMZRcMZxMMaBEMahAMZRAMYxEMXhQDXBMCYBIDXxYDYRcDYRkEYxoGYhsDYBwBYx0EYR8FZBwHZhwHZx4IZh8Iah0IaxwHbRwHahoGZxoGvUw8vUk9u0g8u0Y9uUk7uEg6uEk+uUZBuURCuEJBuURFukZGu0ZIu0hFukhCtkk3t0g1tkw4tEg3s0c5skU5s0M7sEQ5r0I3r0Q7sUI8sT9As0ZFs0lCskY/rUE2rUA0q0Q2q0A5rD45qj08qz4+qD47pjw8qEA9qkA/q0RArEVBrUZGq0FHqkBEoz08ojs7oz88ozw/ozpAozpDpTxDoTpEoTlGoT1Eoz1FpEFDpENDpkdGpkJKpUFJnjhHnjZInTlGnzpJnzlMoDtNoT1MnzxPnztSnz9PoT9No0RPoEdIoENInkNGoEFKnjtUnjpWmztTnj5VoD9VoEFWoENTnkJXn0NZnURVn0VUoElSnEhLnEVOnURQnURbnkRemkNbnEdankhanktZnUtXm0xbnE5bmUtZm0xXmUhVmEhSlklNmlFPmk5Smk9dm1FfmE5emFFbmlNamFRYmFJWllVZlldZlFRXllNVlFNQkUxQk01UlE9VlFlalVtbk1hcklpYk1tWkltUkVhTj1xUj15TjVpTj1hSjU9SjlJUj1RUjV9UjWJUjF5Xi19Ti2BQiV9PiVxPh19PhmBNhl1Qh1tPh1lQiFlTiFdUiFFTh1RNh1ZNh1dQhmJLhGJJiGNLhWRNgmRNgWZPgmhPf2ZQfmRSfmhRgWlRgGxQgG1OgG9NgHBQgHRPgXBXgW5UgW5RfGNTfGFUemRRe2VVfWVXfWdYfWpXemhZemdcemtafGxYe3BaenFTenJSem5Te21Ud2Zcd2VfdmVadmlddmlgdmxgd25fc21gcmxic29gdnBedm9adXBYdHRVc3hcdHRcb2xhbmtjbmtfbm9hbnBjbnNjb3Rha3NiaXNka3ZhbnZfbnVdbXlcbnRYbnNWbnJab29abnNcZ3NjZnJmZnFhZnViZndjZXlhZ3pgY3lgYXphY3teZnteZn1ZZ3ZVZ3ZaZndcXnlhXHljXnZgXXpfXX1fXH5dXn5bWn1bWH5cW35ZXn5ZXn1UYXZUYHVZX3pZVnxcVH5dVnpdVXxZVX5YVH1VVnxUU3pVUHtVU3pSWHlSV3dPW3VTXXNTW3dVWXhUT3hVTHlWUHdXTndTTXlRTndOUHdOS3VOT3RMUXVNU3RRVXJRWG5RVHFLSXNPRnROSnJRSXBNSHBLSm9JTG9KSWxJR2xITGxIT2xLUGlJU2pQUG1PUG5RT25NRmlJRGlIR2lMSGdHSGVISmRHTGVHSmFISWBGTWFHTmNIUGBLT2VSTmZOTWVMRl9HRF9FRmBKRlxHSFtJSlpITFtJSlVHTVdJTlpKT1dOTV1TTF1PS2BQTFxNSFNIR1JGRlRKSVJKS1BJTlFMS05NTU5PTlBPT1FUSldUSVdPS1RPSUpMSUhLR0xKSEtOR0lQSUhRSEdUSEVUSkhWS0pUS0xZSU9YR1JXR1BURlFSSU5URURVRUFVQ0VTRUVYRkNZRkRcRkZcQ0ZeRUheREpcREpaQ0xZQlFZQlBeQk9fQ01fQ0xdP0JcPj9cP0NZPkNePkJgPkdiOERjOkhjPUliPE5iPE5aPUpcPUlZPUleNkRiNEJjNkRfNUZjNEdlM0lmNUtlL0plMU1kNE1jNU1hNUtgNktdNU5ZM1ReNFFgLUlkK0hmLUdiLEtjK01kKk9iLFBhJk1hKFBfK1FfLFNbME1XLkxbLU1dJExfIk1fJElgJktdJEtaJE1ZJk9ZI01WIUxWJE9WJlBXKk1XLExWL01RLFBQK1JRKlRPKVFTIEtUHUtUIUhVIUxSIUpPIktNJE1OI0pLIUlKJUtKJkxMKEtOK0xKLElQLkhRKklRKEtQIUdIH0dHIkVJIkhFI0dDJEhCJklDJkZAJUU+KEdAKElCKkhELEdELUhDLUVKKUZIKEdGQipqQyxpRClsQCtrQCxtQS9tPzBuQy9uRTBtQzFxQTJwPzNxPTNyPDR0PjV0Pjd2PDh4QDh2Qjh1QjZzQDVzSDBtSC9wSTJtSC5rSy1rTC5pSy9nTjBqUC9rTjJoTDFmSjRkSjNiSDZkRzdmRjlmSDdoSDhqSjVoUjBsVC9uUTNsVDBpVC5oVC9lUzFlVzBlWDBjVjNlVDNkUzZnUThoTzplTjxmTjpjTjhfUDdiWzBiWy1iXDFkWzFgWjBeVzNdXDRcXTNZWzZcWDZcVDhcUzpdUz1iVjtjWDljWDhhXDNXWjFXXjNVWjVXWTZVWDlXWjpUWjpRWTxVWDtXWjxbWj1dWUBhVkFeVEFcUkJcVT9aVz5bXTpQXDlNXjlSXT1PXT9RXkFQYUFQYUJOYkJSYENUXz9WXz5YX0BaXkFcXj9eXkNdXkVbX0RZX0JYY0FMY0JJYz9MZ0FOa0FPbUNPbD9QaT5XZztWZjpVZDhVZjpSZzxSb0RNbkZMcEJMcURPcUZRckVTckNUdUVTdkVVdUJTc0FUcj9Tcj5RcTxQcDtSbzlTbjhSbjlVbztXbztZcT1WcT1UeEdVeUhXeElTe0ZUfUdTfEdQfEpQfkZPfEZMf0hOfkpOf0xQf05Pf09MgFBQgVBSglJTgU5TgExSfURKfENIfkJMgEVJf0dIgUlHgkpJhEhEhUhIhUpJhk5LiExThkdRhklNhEdCgkhBhURChkhAhko/h0xAiEtCikw/ik49i01BiU1DikpHjFRJi1BHjU48jVA6jkw9jlA+jlM9j1Q/j1NBklU/klc/k1RBkVNDkU9EkU5Gk1VMklRIlVg+lVs9lVY8llhAlllCmFhEl1ZFnFpEm1VFmVVGmVNKl0tIl05FmFFFnlpDn1xCn1hCoFlFn1tHoFpJn1hKo1lJpFpLo1ZJoVZKn1NHn1FHnUxIn05Qn1FNp1lMqFtNqFhJp1dNp1hQplVRpVNQqVRSqVNUqVJQp1FPp1FLplBJpEtHpE1Oq1JVq1NYrVNTq09VqU5WqUxWqEtUq0pXqkhYrElUqklTqEZQqkpJrE5Mq0tPrEdZq0Zcr0harUVYq0NXrEJVrENTrUBVrD1VrkBSrUJRrEJMsEhKsEdOsklPr0ZQrjtWrDpYsDxXrjpUrDlSrThQrjpPsDdQrzROsThOsDpNsj5Ps0BOtERKsD9HsD5JsTJOsDBOszNQszNMsTJKszNHszZItTNHtjFGtjVGtTdGtTlItjlKtjxLtz1Itz9IuEFJt0BFtz5Etz9BtjxEtjtG"};var Re=i=>!!(i.person||i.ghost||i.moc);function Ze(i){let t=i.filter(s=>!Re(s)),e=s=>Math.max(1e-9,...t.map(s)),n={i:e(s=>Math.log1p(s.inlinks||0)),m:e(s=>Math.log1p(s.mentions||0)),b:e(s=>s.bc||0),r:e(s=>Math.log1p(s.recent||0))};return s=>.4*Math.log1p(s.inlinks||0)/n.i+.3*Math.log1p(s.mentions||0)/n.m+.2*(s.bc||0)/n.b+.1*Math.log1p(s.recent||0)/n.r}var nn=i=>{let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619);return t>>>0},ks=i=>{let t=Math.max(1,...i.filter(e=>!Re(e)).map(e=>e.recent||0));return e=>Re(e)?0:Math.min(1,Math.exp(-(e.age||0)/7)+.6*(e.recent||0)/t)},Pi=i=>{let t=i.quality&&i.quality.stale_days||180;return e=>!Re(e)&&!/\d{4}-\d{2}-\d{2}/.test(e.name||"")&&(e.age||0)>t};var Ye={ATOM:1.8,SCALE:.16,PROTEIN:[.93,.93,.9],RNA:[.94,.34,.15],TARGET:[.13,.31,.8],OTHER:[.38,.64,.97],HIT:[1,.79,.2],NEAR:[.78,.62,.96],COIL:{lead:90,ease:40,radius:60,pitch:34},NEAR_AXIS:[0,1,0],FAR_AXIS:[-1,0,0]};function Od(i,t,e,n){let s=new Float64Array(t*12),r=(y,w)=>y[0]*w[0]+y[1]*w[1]+y[2]*w[2],o=(y,w)=>[y[1]*w[2]-y[2]*w[1],y[2]*w[0]-y[0]*w[2],y[0]*w[1]-y[1]*w[0]],a=y=>{let w=Math.hypot(y[0],y[1],y[2])||1;return[y[0]/w,y[1]/w,y[2]/w]},l=(y,w,_)=>{let S=Math.cos(_),b=Math.sin(_);return[y.map((m,v)=>S*m+b*w[v]),w.map((m,v)=>S*m-b*y[v])]},h=i.o.slice(),c=a(i.z),d=a(i.x),u=o(c,d),f=0,p=null,M=null,x=0,g=0;if(n){let y=n.pitch/(2*Math.PI*n.radius);x=1/(n.radius*(1+y*y)),g=x*y;let w=n.axis,_=r(w,c);M=a([w[0]-_*c[0],w[1]-_*c[1],w[2]-_*c[2]]),p=o(M,c)}for(let y=0;y<t;y++){let w=i.phase+y*e.turn,_=Math.cos(w),S=Math.sin(w),b=y*12;for(let m=0;m<3;m++)s[b+m]=h[m],s[b+3+m]=_*d[m]+S*u[m],s[b+6+m]=_*u[m]-S*d[m],s[b+9+m]=c[m];if(n&&f>=n.lead){let m=Math.min(1,(f-n.lead)/(n.ease||1)+1e-9),v=m*m*(3-2*m);[c,p]=l(c,p,x*v*e.rise),[p,M]=l(p,M,g*v*e.rise),c=a(c);let U=r(d,c);d=a([d[0]-U*c[0],d[1]-U*c[1],d[2]-U*c[2]]),u=o(c,d)}for(let m=0;m<3;m++)h[m]+=c[m]*e.rise;f+=e.rise}return s}var eh=null;function Kr(){if(eh)return eh;let i=kd,t=atob(i.atoms),e=t.length/3,n=new Float32Array(e*3),s=new Uint8Array(e),r=new Int16Array(e),o=new Int8Array(e).fill(-1),a=new Float32Array(e);for(let _=0;_<e*3;_++)n[_]=t.charCodeAt(_)*i.q+i.lo[_%3];let l=i.protein;if([i.rna,i.target,i.other].forEach((_,S)=>_.forEach(([b,m])=>{for(let v=0;v<m;v++,l++)s[l]=S+1,r[l]=b})),l!==e)throw new Error("the Cas9 model's tables don't add up to its atoms: run scripts/cas9_model.cjs again");for(let _=0;_<e;_++)i.flank.forEach(([S,b],m)=>{(s[_]===2&&r[_]===S||s[_]===3&&r[_]===b)&&(o[_]=m)});let h=12,c=new Map,d=_=>`${Math.floor(n[_*3]/h)},${Math.floor(n[_*3+1]/h)},${Math.floor(n[_*3+2]/h)}`,u=new Uint16Array(e);for(let _=0;_<e;_++){let S=d(_);c.has(S)||c.set(S,[]),c.get(S).push(_)}for(let _=0;_<e;_++){let S=n[_*3],b=n[_*3+1],m=n[_*3+2],v=Math.floor(S/h),U=Math.floor(b/h),E=Math.floor(m/h),P=0;for(let N=-1;N<=1;N++)for(let F=-1;F<=1;F++)for(let R=-1;R<=1;R++)for(let z of c.get(`${v+N},${U+F},${E+R}`)||[]){let V=n[z*3]-S,J=n[z*3+1]-b,W=n[z*3+2]-m;V*V+J*J+W*W<h*h&&P++}u[_]=P}let f=Array.from(u).sort((_,S)=>_-S),p=f[Math.floor(e*.08)],M=f[Math.floor(e*.97)];for(let _=0;_<e;_++)a[_]=1-.72*Math.max(0,Math.min(1,(u[_]-p)/Math.max(1,M-p)));let x=_=>{let S=[0,0,0],b=0;for(let m=0;m<e;m++)_(m)&&(S[0]+=n[m*3],S[1]+=n[m*3+1],S[2]+=n[m*3+2],b++);return S.map(m=>m/(b||1))},g=(_,S)=>{let b=-1,m=-1/0;for(let v=0;v<e;v++)if(_(v)){let U=S(v);U>m&&(m=U,b=v)}return[n[b*3],n[b*3+1],n[b*3+2]]},y=i.pair.map(([_,S,b,m,v])=>({x:_,y:S,z:b,strand:m,base:v,r:Ye.ATOM})),w=[];for(let _ of[0,1])for(let S of[0,1]){let b=y.filter(v=>v.strand===_&&v.base===S),m=v=>b.reduce((U,E)=>U+E[v],0)/b.length;w.push({x:m("x"),y:m("y"),z:m("z"),strand:_,base:S,r:S?3.3:3.6})}return eh={M:i,n:e,xyz:n,kind:s,res:r,flank:o,shade:a,pair:y,beads:w,base:[Ye.PROTEIN,Ye.RNA,Ye.TARGET,Ye.OTHER],flankAt:i.flank.map((_,S)=>x(b=>o[b]===S)),held:x(_=>s[_]===1&&r[_]<=i.spacer+1||s[_]===2&&r[_]>30-i.spacer),labels:{protein:g(_=>s[_]===0,_=>-n[_*3+1]),rna:g(_=>s[_]===1,_=>Math.hypot(n[_*3],n[_*3+1],n[_*3+2]))}}}function Vd(i,t,e){let n=Kr(),s=n.M,r=t&&t.ids?new Set(t.ids):null,o=new Map,a=i.filter(_=>!Re(_)&&(!r||r.has(_.id))).sort((_,S)=>_.id<S.id?-1:_.id>S.id?1:0),l=new Set(a.map(_=>_.id));t&&t.notes.forEach(_=>{l.has(_.path)&&o.set(_.path,_.hits?"hit":"near")});let h=a.filter(_=>o.get(_.id)==="hit"),c=h.find(_=>_.id===e)||h[0]||null,d=c?a.indexOf(c):a.length>>1,u=a.slice(c?d+1:d),f=u.slice(0,s.flank.length).map(_=>_.id),p=u.slice(s.flank.length).map(_=>_.id),M=a.slice(0,d).reverse().map(_=>_.id),x=Od(s.tails.near,p.length,s.step,{...Ye.COIL,axis:Ye.NEAR_AXIS}),g=Od(s.tails.far,M.length,s.step,{...Ye.COIL,axis:Ye.FAR_AXIS}),y=new Map,w=new Map;return c&&(y.set(c.id,n.held),w.set(c.id,"held")),f.forEach((_,S)=>{y.set(_,n.flankAt[S]),w.set(_,"flank")}),[[p,x,"near"],[M,g,"far"]].forEach(([_,S,b])=>_.forEach((m,v)=>{y.set(m,[S[v*12],S[v*12+1],S[v*12+2]]),w.set(m,b)})),{pos:y,where:w,all:a,hits:o,sites:h,site:c?c.id:null,flankIds:f,nearIds:p,farIds:M,near:x,far:g,scan:t||null}}var $r=Ye.SCALE,nh=28,Q_=.3,Os=i=>[i[0]*$r,-i[1]*$r,-i[2]*$r];function ih(i,t,e){let n=new rn,s=new fe(t,e,i.n),r=new Ht,o=new _t;for(let a=0;a<i.n;a++){r.makeScale(Ye.ATOM,Ye.ATOM,Ye.ATOM).setPosition(i.xyz[a*3],i.xyz[a*3+1],i.xyz[a*3+2]),s.setMatrixAt(a,r);let l=i.base[i.kind[a]];s.setColorAt(a,o.setRGB(l[0],l[1],l[2],ze).multiplyScalar(i.shade[a]))}return n.rotation.x=Math.PI,n.scale.setScalar($r),n.add(s),{root:n,mesh:s}}var zd={id:"cas9",name:"Cas9",hint:"Notes as DNA, the Guide scan's matches as cut sites",home:{yaw:0,pitch:.2,dist:44,min:14,max:240,minPitch:-1.4},stage:{light:"camera",fog:[70,260],ambient:.5},actions:["guide-scan"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,invalidate:o}){let a=Kr(),l=new Map(e.nodes.map(L=>[L.id,L])),h=L=>l.get(L)?l.get(L).name:L,c=new ni(1,1),d=new Yi,{root:u,mesh:f}=ih(a,c,d);i.scene.add(u);let p=new Ht,M=new _t,x=(L,O)=>M.setRGB(L[0],L[1],L[2],ze).multiplyScalar(O),g=null,y=null,w=[],_={atoms:0,pairs:0,fine:0,beads:0},S=n.scan||null,b=n.selected||null,m=null,v=null,U=L=>{let O=y.hits.get(L);return O==="hit"?Ye.HIT:O==="near"?Ye.NEAR:null},E=L=>v&&!v.has(L)?Q_:1;function P(){for(let L=0;L<a.n;L++){let O=a.flank[L]>=0?y.flankIds[a.flank[L]]:null,B=O?U(O):null;f.setColorAt(L,x(B||a.base[a.kind[L]],a.shade[L]*(O?E(O):1)))}f.instanceColor.needsUpdate=!0}function N(){g&&(u.remove(g),g.dispose());let L=[y.nearIds,y.farIds].reduce((B,C)=>B+Math.min(C.length,nh)*a.pair.length+Math.max(0,C.length-nh)*a.beads.length,0);g=new fe(c,d,Math.max(L,1)),g.count=L;let O=0;_={atoms:a.n,pairs:y.nearIds.length+y.farIds.length,fine:0,beads:0},[[y.nearIds,y.near,!0],[y.farIds,y.far,!1]].forEach(([B,C,k])=>B.forEach((K,et)=>{let ot=et<nh,xt=et*12,ft=U(K),wt=E(K);ot?_.fine++:_.beads++;for(let Mt of ot?a.pair:a.beads){p.makeScale(Mt.r,Mt.r,Mt.r).setPosition(C[xt]+C[xt+3]*Mt.x+C[xt+6]*Mt.y+C[xt+9]*Mt.z,C[xt+1]+C[xt+4]*Mt.x+C[xt+7]*Mt.y+C[xt+10]*Mt.z,C[xt+2]+C[xt+5]*Mt.x+C[xt+8]*Mt.y+C[xt+11]*Mt.z),g.setMatrixAt(O,p);let tt=Mt.strand===0===k?Ye.OTHER:Ye.TARGET;g.setColorAt(O++,x(ft&&(Mt.base||!ot)?ft:tt,(Mt.base?.78:1)*wt))}})),_.atoms+=O,u.add(g)}let F=()=>{if(!S)return`${mt(y.all.length,"note")} \xB7 no guide`;let L=`\u201C${S.guide}\u201D${S.where?" "+S.where:""}`,O=[...y.hits.values()].filter(B=>B==="near").length;return y.sites.length?`${L}: exact in ${mt(y.sites.length,"note")} of ${y.all.length}${O?` \xB7 look-alikes in ${O}`:""}`:`${L}: no match in ${mt(y.all.length,"note")}`},R={label:"Open Guide scan",title:"Open Guide scan",run:()=>r("guide-scan")},z=()=>y.sites.findIndex(L=>L.id===y.site);function V(L){let O=y.sites.length;O&&(m=y.sites[(z()+L+O)%O].id,j(),o())}function J(L){y.hits.get(L)==="hit"&&(m=L,j(),o())}function W(){t.stat(F());let L=[{text:"Cas9 protein",at:Os(a.labels.protein),dy:-16,run:()=>r("guide-scan"),title:"Cas9 protein. Open Guide scan"},{text:S?`RNA \xB7 ${jt(S.guide,24)}`:"RNA",at:Os(a.labels.rna),color:"#f2764a",dy:-14,run:()=>r("guide-scan"),title:"The guide. Open Guide scan"},{text:"DNA",at:Os(a.M.tails.near.o),color:"#8fbcfb",dy:16,title:y.sites.length?"DNA. Show the exact matches":"DNA. Open Guide scan",run:()=>{if(!y.sites.length)return r("guide-scan");v=new Set(y.sites.map(B=>B.id)),Y(),o()}}],O=y.site||(b&&y.pos.has(b)?b:null);if(O&&L.unshift({text:jt(h(O),34),at:Os(y.pos.get(O)),strong:!0,dy:30,run:()=>s(O),title:`Open ${h(O)}`}),t.labels(L),t.chip(v?`Exact matches of \u201C${jt(S.guide,24)}\u201D`:null,()=>{v=null,Y(),o()}),!S)t.controls({lines:[`${mt(y.all.length,"note")}, a base pair each. No guide yet.`],buttons:[R]});else if(!y.sites.length)t.controls({lines:[`No \u201C${jt(S.guide,24)}\u201D in these ${mt(y.all.length,"note")}.`],buttons:[R]});else{let B=y.sites.length===1;t.controls({lines:[`Site ${z()+1} of ${y.sites.length}`],buttons:[{label:"\u2039",title:"Previous site",off:B,run:()=>V(-1)},{label:h(y.site),title:`Open ${h(y.site)}`,wide:!0,run:()=>s(y.site)},{label:"\u203A",title:"Next site",off:B,run:()=>V(1)}]})}}function Y(){P(),N(),W()}function j(){y=Vd(e.nodes,S,m),v&&!y.sites.length&&(v=null),w=[];for(let[L,O]of y.pos){let B=y.where.get(L);w.push({at:Os(O),r:(B==="held"?14:B==="flank"?6:7)*$r,key:{kind:"note",id:L,tip:h(L)}})}Y()}function H(){b&&y.hits.get(b)==="hit"&&y.site!==b?(m=b,j()):m=y.site}return j(),H(),{targets:()=>w,click(L){b=L.id,y.hits.get(L.id)==="hit"?(m=L.id,j()):W(),s(L.id)},update(L){"scan"in L&&(S=L.scan||null,v=null),"selected"in L&&(b=L.selected||null),j(),H()},stat:F,today(){if(!y.site)return null;let L=y.sites.length;return{text:`Cas9 is on ${h(y.site)}: site ${z()+1} of ${L} for \u201C${S.guide}\u201D`,label:L>1?"Next site":"Open it",run:()=>L>1?V(1):s(y.site)}},api:{layout:()=>y,drew:()=>_,at:L=>y.pos.has(L)?Os(y.pos.get(L)):null,step:V,go:J,highlighted:()=>v?[...v]:null}}}};var Sl=18,Gd=4,Hd="#facc15",K_=14;function $_(i,t){let e=t.X.map(o=>[o[0]*Sl,o[1]*Sl,(o[2]||0)*Sl]),n=new Array(t.n).fill(0),s=new Map,r=new Map;t.domains.forEach(([o,a],l)=>{for(let h=o;h<=a&&h<t.n;h++)n[h]=l}),i.rows.forEach((o,a)=>{for(let l of new Set(o)){let h=i.ids[l];s.has(h)||s.set(h,[]),s.get(h).push(a)}});for(let[o,a]of s){let l=[0,0,0],h=nn(o),c=h%628/100,d=(h>>>10)%314/100-1.57,u=Sl*.03;for(let f of a)for(let p=0;p<3;p++)l[p]+=e[f][p]/a.length;r.set(o,[l[0]+Math.cos(c)*Math.cos(d)*u,l[1]+Math.sin(d)*u,l[2]+Math.sin(c)*Math.cos(d)*u])}return{beads:e,domainOf:n,daysOf:s,notes:r}}var Wd={id:"genome",name:"Genome fold",hint:"The journals as one folded strand",home:{yaw:.6,pitch:.25,dist:46,min:12,max:110},stage:{fog:[34,80]},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=e.strand,h=n.fold,c=h.n;if(c<Gd){let tt=()=>`${mt(c,"day")} of journals`;return t.stat(tt()),t.controls({at:"centre",lines:[`Genome fold needs ${Gd} days of journals that name notes.`,`${mt(c,"day")} so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:tt,today:()=>null,api:{empty:!0}}}let d=$_(l,h),u=new Map(e.nodes.map(tt=>[tt.id,tt])),f=Ze(e.nodes),p=[...d.notes.keys()].filter(tt=>u.has(tt)),M=new Map(p.map(tt=>[tt,f(u.get(tt))])),x=tt=>.22+.55*Math.sqrt(Math.max(0,M.get(tt))),g=o.palette,y=tt=>g[tt%g.length],w="#6b7280",_=new Ht,S=new Ge,b=new G,m=new G(0,1,0),v=new _t,U=tt=>(i.scene.add(tt),tt),E=U(new fe(new de(1,16,12),new Te({roughness:.55}),c)),P=U(new fe(new Me(1,1,1,8,1,!0),new Te({roughness:.7}),Math.max(c-1,1)));P.count=c-1;for(let tt=0;tt+1<c;tt++){let It=d.beads[tt],Dt=d.beads[tt+1],Yt=d.domainOf[tt]===d.domainOf[tt+1],Wt=Yt?.11:.05;b.set(Dt[0]-It[0],Dt[1]-It[1],Dt[2]-It[2]);let Bt=b.length()||1e-6;_.compose(new G((It[0]+Dt[0])/2,(It[1]+Dt[1])/2,(It[2]+Dt[2])/2),S.setFromUnitVectors(m,b.divideScalar(Bt)),new G(Wt,Bt,Wt)),P.setMatrixAt(tt,_),P.setColorAt(tt,v.set(Yt?y(d.domainOf[tt]):w))}let N=U(new fe(new de(1,16,12),new Te({roughness:.4}),Math.max(p.length,1)));N.count=p.length;let F=new oe({color:Hd,transparent:!0,opacity:.85}),R=new oe({color:Hd,transparent:!0,opacity:.18}),z=new de(.3,12,8),V=h.loops.map((tt,It)=>{let Dt=d.beads[tt.a],Yt=d.beads[tt.b],Wt=new Wi(new G(...Dt),new G((Dt[0]+Yt[0])*.68,(Dt[1]+Yt[1])*.68,(Dt[2]+Yt[2])*.68),new G(...Yt)),Bt=Wt.getPoint(.5),Qt=U(new qt(new vr(Wt,24,.045,6),F)),ee=U(new qt(z,F));ee.position.copy(Bt);let Ae=l.rows[tt.a].filter(St=>l.rows[tt.b].includes(St)),Se=[...new Set(Ae)].map(St=>l.ids[St]),q=vl(l.days[tt.a],l.days[tt.b]),Q=`${Ii(l.days[tt.a])} and ${Ii(l.days[tt.b])}`;return{k:It,l:tt,tube:Qt,dot:ee,mid:[Bt.x,Bt.y,Bt.z],ids:Se,apart:q,pair:Q,tip:`${Q}: ${mt(tt.count,"note")} named on both, ${mt(q,"day")} apart`}}),J=new ii(1,1.18,40),W=tt=>U(new qt(J,new oe({color:tt,side:me,fog:!1}))),Y=W(o.fg),j=W(o.accent);Y.position.set(...d.beads[c-1]),Y.scale.setScalar(.62);let H=U(new He(new ie,new Fe({color:o.accent,transparent:!0,opacity:.7}))),L=n.selected||null,O=null,B=null,C=()=>O&&d.notes.has(O)?O:L&&d.notes.has(L)?L:null,k=tt=>u.get(tt)?u.get(tt).name:tt,K=()=>`${mt(c,"day")} \xB7 ${mt(h.domains.length,"domain")} \xB7 ${mt(h.loops.length,"loop")} \xB7 fit ${h.grade} (stress ${h.stress.toFixed(2)})`,et=V.reduce((tt,It)=>tt&&tt.l.count>=It.l.count?tt:It,null),ot=[...p].sort((tt,It)=>M.get(It)-M.get(tt)).slice(0,K_);function xt(){let tt=C(),It=tt?new Set(d.daysOf.get(tt)):null,Dt=B?new Set(B.ids):null;for(let Bt=0;Bt<c;Bt++){let Qt=It&&It.has(Bt)?.5:.32;_.makeScale(Qt,Qt,Qt).setPosition(...d.beads[Bt]),E.setMatrixAt(Bt,_),E.setColorAt(Bt,v.set(y(d.domainOf[Bt])).multiplyScalar(It&&!It.has(Bt)?.35:1))}p.forEach((Bt,Qt)=>{let ee=x(Bt)*(Bt===tt?1.25:1);_.makeScale(ee,ee,ee).setPosition(...d.notes.get(Bt)),N.setMatrixAt(Qt,_),N.setColorAt(Qt,v.set(g[(u.get(Bt).cluster||0)%g.length]).multiplyScalar(Dt&&!Dt.has(Bt)?.25:1))});for(let Bt of[E,N])Bt.instanceMatrix.needsUpdate=!0,Bt.instanceColor&&(Bt.instanceColor.needsUpdate=!0);for(let Bt of V)Bt.tube.material=Bt.dot.material=!B||B===Bt?F:R;j.visible=!!(L&&d.notes.has(L)&&u.has(L)),j.visible&&(j.position.set(...d.notes.get(L)),j.scale.setScalar(x(L)+.25));let Yt=[];if(tt)for(let Bt of d.daysOf.get(tt))Yt.push(...d.notes.get(tt),...d.beads[Bt]);H.geometry.dispose(),H.geometry=new ie().setAttribute("position",new Lt(Yt,3));let Wt=[];tt&&Wt.push({text:jt(k(tt),34),at:d.notes.get(tt),strong:!0,dy:-22,run:()=>wt(tt),title:`Open ${k(tt)}`}),h.domains.forEach(([Bt,Qt],ee)=>{Qt-Bt>=3&&Wt.push({text:`${Ii(l.days[Bt])} \u2013 ${Ii(l.days[Qt])}`,at:d.beads[Bt+Qt>>1],color:y(ee),dy:-14})});for(let Bt of Dt?B.ids.filter(Qt=>u.has(Qt)):ot)Bt!==tt&&Wt.push({text:jt(k(Bt),26),at:d.notes.get(Bt),dy:14});t.labels(Wt),t.chip(B?`Named on both ${B.pair}`:null,()=>{B=null,xt(),a()}),t.stat(K())}function ft(tt){B=tt,xt(),a()}function wt(tt){L=tt,xt(),a(),s(tt)}let Mt=[];return d.beads.forEach((tt,It)=>Mt.push({at:tt,r:.4,key:{kind:"day",id:It,tip:`${l.days[It]} \xB7 ${mt(new Set(l.rows[It]).size,"note")} named`}})),p.forEach(tt=>Mt.push({at:d.notes.get(tt),r:x(tt),key:{kind:"note",id:tt,tip:k(tt)}})),V.forEach(tt=>Mt.push({at:tt.mid,r:.4,key:{kind:"loop",id:tt.k,tip:tt.tip}})),xt(),{targets:()=>Mt,click(tt){tt.kind==="note"?wt(tt.id):tt.kind==="day"?s(l.paths[tt.id]):ft(V[tt.id])},hover(tt){let It=tt&&tt.kind==="note"?tt.id:null;It!==O&&(O=It,xt())},frame(){Y.quaternion.copy(i.camera.quaternion),j.quaternion.copy(i.camera.quaternion)},update(tt){"selected"in tt&&(L=tt.selected||null,xt())},stat:K,today:()=>et?{text:`Strongest loop: ${et.pair} name the same ${mt(et.l.count,"note")}, ${mt(et.apart,"day")} apart`,label:"Show them",run:()=>ft(et)}:null,api:{layout:()=>d,loops:()=>V.map(tt=>({a:tt.l.a,b:tt.l.b,count:tt.l.count,ids:tt.ids,mid:tt.mid})),shown:()=>B?B.k:null,selected:()=>L,notes:()=>p,show:tt=>ft(V[tt])},dispose(){F.dispose(),R.dispose(),z.dispose(),J.dispose()}}}};var ty=new G(0,1,0),sh=new G,bl=new G,Zd=new G,ey=new G,Yd=new Ge,ny=new _t;function $i(i,t,e,n){sh.set(t[0],t[1],t[2]),bl.set(e[0],e[1],e[2]).sub(sh);let s=bl.length()||1e-6;return Zd.copy(sh).addScaledVector(bl,.5),Yd.setFromUnitVectors(ty,bl.multiplyScalar(1/s)),i.compose(Zd,Yd,ey.set(n,s,n))}function Mn(i,t,e,n){let s=new fe(i,t,Math.max(1,e.length)),r=new Ht;return s.count=e.length,s.frustumCulled=!1,e.forEach((o,a)=>{r.identity();let l=n(o,a,r);s.setMatrixAt(a,r),l!=null&&s.setColorAt(a,ny.set(l))}),s}var rh=null;function iy(){if(rh||typeof document>"u")return rh;let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),rh=new Hi(i)}function fn(i,t,{size:e=3.4,color:n="#ffffff",opacity:s=.95}={}){let r=new ie().setAttribute("position",new Lt(new Float32Array(Math.max(1,i)*3),3)),o=new Gi(r,new bi({color:n,size:e*2,map:iy(),sizeAttenuation:!1,transparent:!0,opacity:s,blending:_n,depthWrite:!1}));o.frustumCulled=!1,o.userData.backdrop=!0;let a=l=>{let h=r.getAttribute("position");for(let c=0;c<i;c++){let d=t(c,l);h.setXYZ(c,d[0],d[1],d[2])}h.needsUpdate=!0};return a(0),{object:o,tick:a}}function ci(i,t){i.remove(t),t.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose(),e.isInstancedMesh&&e.dispose()})}var Ie=(i,t,e)=>"#"+new _t(i).lerp(new _t(t),e).getHexString();var Ui=18,wl="#60a5fa",oh="#f59e0b",Jd=864e5;function sy(i,t){let e=new Map;for(let o of i)!Re(o)&&typeof o.born=="string"&&Number.isFinite(Date.parse(o.born))&&e.set(o.id,Date.parse(o.born)/Jd);let n=new Map,s=new Map;for(let o of e.keys())n.set(o,[]),s.set(o,[]);let r=new Set;for(let o of t){if(o.kind!=="link"||!e.has(o.source)||!e.has(o.target)||e.get(o.source)===e.get(o.target))continue;let[a,l]=e.get(o.source)<e.get(o.target)?[o.source,o.target]:[o.target,o.source],h=a+`
`+l;r.has(h)||(r.add(h),n.get(l).push(a),s.get(a).push(l))}return{day:e,older:n,newer:s}}function Xd(i,t){let e=new Set,n=[t];for(;n.length;)for(let s of i.get(n.pop())||[])e.has(s)||(e.add(s),n.push(s));return e}function ry(i,t){let e=[...t.day.keys()],n=e.map(c=>t.day.get(c)),s=Math.min(...n),r=Math.max(...n),o=Math.max(r-s,1),a=new Map(i.map(c=>[c.id,c])),l=[...new Set(e.map(c=>a.get(c).cluster||0))].sort((c,d)=>c-d),h=new Map;for(let c of e){let d=nn(c),f=l.indexOf(a.get(c).cluster||0)/Math.max(l.length,1)*Math.PI*2+(d%1e3/1e3-.5)*(Math.PI*2/Math.max(l.length,1))*.8,p=Ui*(.25+.65*((d>>>10)%1e3/1e3));h.set(c,[Math.cos(f)*p,((t.day.get(c)-s)/o-.5)*Ui*1.6,Math.sin(f)*p])}return{pos:h,from:s,to:r,axis:[[0,-Ui*.8,0],[0,Ui*.8,0]]}}var El=i=>new Date(i*Jd).toISOString().slice(0,10),qd={id:"cones",name:"Light cones",hint:"What a note rested on and what it touched",home:{yaw:.7,pitch:.2,dist:52,min:14,max:120},stage:{light:"camera",fog:[60,150],ambient:.6,glow:{strength:.6,radius:.5,threshold:.8}},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=sy(e.nodes,e.links),h=[...l.day.keys()];if(h.length<2){let L=()=>mt(h.length,"dated note");return t.stat(L()),t.controls({at:"centre",lines:["Light cones needs notes with a date and links between them.",`${mt(h.length,"dated note")} so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:L,today:()=>null,api:{empty:!0}}}let c=ry(e.nodes,l),d=new Map(e.nodes.map(L=>[L.id,L])),u=Ze(e.nodes),f=L=>.25+.6*Math.sqrt(Math.max(0,u(d.get(L)))),p=L=>d.get(L).name,M=o.palette,x=new Ht,g=new _t,y=L=>(i.scene.add(L),L),w=y(new fe(new de(1,16,12),new Te({roughness:.45}),h.length)),_=[];for(let[L,O]of l.older)for(let B of O)_.push(...c.pos.get(B),...c.pos.get(L));let S=y(new He(new ie().setAttribute("position",new Lt(_,3)),new Fe({color:o.muted,transparent:!0,opacity:.22})));y(new He(new ie().setAttribute("position",new Lt([...c.axis[0],...c.axis[1]],3)),new Fe({color:o.muted,transparent:!0,opacity:.6})));let b=[7,14,30,91,182,365,730].find(L=>(c.to-c.from)/L<=14)||730,m=Math.floor((c.to-c.from)/b);for(let L=0;L<=m;L++){let O=(L*b/Math.max(c.to-c.from,1)-.5)*Ui*1.6,B=[];for(let C=0;C<96;C++)B.push(Math.cos(C/96*Math.PI*2)*Ui*1.05,O,Math.sin(C/96*Math.PI*2)*Ui*1.05);y(new gr(new ie().setAttribute("position",new Lt(B,3)),new Fe({color:wl,transparent:!0,opacity:.3,blending:_n,depthWrite:!1})))}let v=fn(90,(L,O)=>[Math.cos(L*2.4)*.5,((L/90+O*.03)%1-.5)*Ui*1.6,Math.sin(L*2.4)*.5],{color:"#9cc4ff",size:4,opacity:.8});y(v.object),i.sky({top:"#03050b",haze:"#0b1020"});let U=L=>new oe({color:L,transparent:!0,opacity:.1,side:me,depthWrite:!1}),E=y(new qt(new ws(1,1,40,1,!0),U(wl))),P=y(new qt(new ws(1,1,40,1,!0),U(oh)));E.visible=P.visible=!1;let N=n.selected&&c.pos.has(n.selected)?n.selected:null,F=null,R=new Map,z=L=>(R.has(L)||R.set(L,{past:Xd(l.older,L),future:Xd(l.newer,L)}),R.get(L)),V=()=>F||N,J=()=>N?`${p(N)} \xB7 ${mt(z(N).past.size,"note")} in its past \xB7 ${mt(z(N).future.size,"note")} in its future`:`${mt(h.length,"dated note")} \xB7 ${mt(_.length/6,"link")} \xB7 ${vl(El(c.from),El(c.to))} days`;function W(L,O,B){let C=c.pos.get(O)[1],k=c.axis[1][1],K=c.axis[0][1],et=Math.max(B?k-C:C-K,.5);L.visible=!0,L.scale.set(et*.55,et,et*.55),L.position.set(c.pos.get(O)[0],C+(B?et/2:-et/2),c.pos.get(O)[2]),L.rotation.set(B?Math.PI:0,0,0)}function Y(){let L=V(),O=L?z(L):null;h.forEach((C,k)=>{let K=f(C)*(C===L?1.4:1);x.makeScale(K,K,K).setPosition(...c.pos.get(C)),w.setMatrixAt(k,x);let et=O?C===L?g.set(o.accent):O.past.has(C)?g.set(wl):O.future.has(C)?g.set(oh):g.set(M[(d.get(C).cluster||0)%M.length]).multiplyScalar(.22):g.set(M[(d.get(C).cluster||0)%M.length]);w.setColorAt(k,et)}),w.instanceMatrix.needsUpdate=!0,w.instanceColor&&(w.instanceColor.needsUpdate=!0),E.visible=P.visible=!1,L&&(W(E,L,!1),W(P,L,!0));let B=[{text:Ii(El(c.from)),at:c.axis[0],dy:12,color:o.muted},{text:Ii(El(c.to)),at:c.axis[1],dy:-12,color:o.muted}];if(L&&B.push({text:jt(p(L),34),at:c.pos.get(L),strong:!0,dy:-18,run:()=>j(L),title:`Open ${p(L)}`}),O){let C=(k,K)=>[...k].sort((et,ot)=>K*(l.day.get(et)-l.day.get(ot)))[0];for(let[k,K]of[[O.past,-1],[O.future,1]]){let et=C(k,K);et&&B.push({text:jt(p(et),26),at:c.pos.get(et),dy:14,color:K<0?wl:oh})}}t.labels(B),t.stat(J())}function j(L){N=L,Y(),a(),s(L)}let H=h.map(L=>({at:c.pos.get(L),r:f(L),key:{kind:"note",id:L,tip:`${p(L)} \xB7 ${d.get(L).born}`}}));return Y(),{targets:()=>H,tick(L){v.tick(L)},click(L){L.kind==="note"&&j(L.id)},hover(L){let O=L&&L.kind==="note"?L.id:null;O!==F&&(F=O,Y())},update(L){"selected"in L&&(N=L.selected&&c.pos.has(L.selected)?L.selected:null,Y())},stat:J,today:()=>{let L=h.reduce((O,B)=>O&&z(O).future.size>=z(B).future.size?O:B,null);return L&&z(L).future.size?{text:`${p(L)} reaches the most: ${mt(z(L).future.size,"note")} in its future`,label:"Show it",run:()=>{N=L,Y(),a()}}:null},api:{layout:()=>c,graph:()=>l,cones:L=>z(L),selected:()=>N,notes:()=>h},dispose(){S.material.dispose(),E.material.dispose(),P.material.dispose()}}}};var jd=(i,t)=>{let e=new Array(i).fill(0);for(let[n,s]of t)e[n]++,e[s]++;return e};function Qd({n:i,bars:t,ground:e,sag:n,sagging:s,weakest:r,busiest:o,carry:a},l){let h=jd(i,t),c=[];n[s]>0&&c.push({text:`${l(s)} sags most (${n[s].toFixed(2)}). It is held by ${mt(h[s],"link")}; link it to a note near the ground notes and it stiffens.`,label:"Open note",note:s}),r>=0&&c.push({text:`${l(t[r][0])} \u2013 ${l(t[r][1])} is closest to buckling: it is pushed hardest, so if that link goes its notes lose their support. A second route between them takes the load.`,label:"Show link",bar:r}),o>=0&&c.push({text:`${l(t[o][0])} \u2013 ${l(t[o][1])} carries the most (${a[o].toFixed(1)}). Everything leaning on it is one edit from sagging.`,label:"Show link",bar:o});let d=h.map((u,f)=>[u,f]).filter(([u,f])=>u===1&&!e.includes(f)).length;return d&&c.push({text:`${mt(d,"note")} hang from a single link. Each is a note to link from a second place.`,label:"Show worst",note:s}),{plain:"Picture your notes as a bridge. Links are the beams and notes are the joints. A note held up by only one beam droops, and a beam doing all the carrying is the one that snaps first.",about:"Each written link is a steel bar and each note a joint; the most linked notes are the ground. Load is the notes' weight. A note sags when few links hold it, and a link carries more when more notes lean on it.",insights:c}}function Kd({bars:i,vector:t,freq:e,k:n,count:s},r){let o=p=>Math.abs(t[p])<.05?0:t[p]>0?1:-1,a=t.filter((p,M)=>o(M)>0).length,l=t.filter((p,M)=>o(M)<0).length,h=i.filter(([p,M])=>o(p)*o(M)<0).length,c=t.indexOf(Math.max(...t)),d=t.indexOf(Math.min(...t)),u=[{text:`Mode ${n+1} splits the vault ${a} notes against ${l}; ${mt(h,"link")} cross the cut${h<=Math.max(2,i.length*.05)?", so the two halves are barely connected":""}.`,label:"Show it",show:!0}];c!==d&&u.push({text:`${r(c)} and ${r(d)} swing furthest apart. A link between them, or through a shared note, ties the halves together.`,label:"Open "+r(c).slice(0,18),note:c});let f=t.filter((p,M)=>o(M)===0).length;return f&&u.push({text:`${mt(f,"note")} sit on the nodal line, belonging to neither half. They are the bridges; keep their links.`,label:"Show it",show:!0}),{plain:"Picture your notes as a drum skin. Tap it and it wobbles in a pattern. The two halves that move against each other are the two clumps of your notes that hardly talk to each other.",about:"Notes are masses on a stretched sheet and links are springs. The sheet rings in the shapes the links allow; amber swings up while blue swings down, and the dark line between them does not move. A lower frequency means a cleaner cut.",insights:u,freq:e,count:s}}function $d({n:i,bars:t,kept:e,hubs:n,order:s},r){let o=new Array(i).fill(0);t.forEach(([d,u],f)=>{e[f]&&(o[d]++,o[u]++)});let a=s.filter(d=>!o[d]&&!n.includes(d)),l=jd(i,t),h=e.filter(Boolean).length,c=[];return c.push({text:`${h} of ${mt(t.length,"link")} carry the vault between its ${n.length} hubs. The rest are never the short way from one hub to another.`,label:"Show it",show:!0}),a.length&&c.push({text:`${mt(a.length,"note")} are off the backbone. ${r(a[0])} has ${mt(l[a[0]],"link")} but none that leads to a hub; link it to one.`,label:"Open note",note:a[0]}),c.push({text:"Links off the backbone are not wrong, but they add detours. Where two notes say the same thing, keep the one on the backbone.",label:"Show it",show:!0}),{plain:"Picture your notes as a slime mould finding food. It keeps the tubes that get used and lets the rest dry up. The links that stay thick are the ones your notes really rely on.",about:"A slime mould thickens the tubes that carry the most flow and lets the rest die. Here each written link is a tube and the hubs are the food: what survives is the shortest set of links that holds the vault together.",insights:c}}function to(i,t,{hubs:e=!1}={}){let n=new Map(i.filter(o=>!Re(o)||e&&o.moc).map(o=>[o.id,o])),s=e?o=>o==="link"||o==="moc":o=>o==="link",r=new Map([...n.keys()].map(o=>[o,new Set]));for(let o of t)s(o.kind)&&o.source!==o.target&&r.has(o.source)&&r.has(o.target)&&(r.get(o.source).add(o.target),r.get(o.target).add(o.source));return{own:n,adj:r}}function Vs(i,t,{max:e=120,hubs:n=0}={}){let s=Ze(i),{own:r,adj:o}=to(i,t,{hubs:!!n}),a=new Set,l=[];for(let M of[...o.keys()].sort()){if(a.has(M)||!o.get(M).size)continue;let x=[M];a.add(M);for(let g=0;g<x.length;g++)for(let y of o.get(x[g]))a.has(y)||(a.add(y),x.push(y));x.length>l.length&&(l=x)}let h=(M,x)=>s(r.get(x))-s(r.get(M))||(M<x?-1:1),c=M=>!!r.get(M).moc,u=[...l.filter(c).sort((M,x)=>o.get(x).size-o.get(M).size||(M<x?-1:1)).slice(0,n),...l.filter(M=>!c(M)).sort(h)].slice(0,e),f=new Map(u.map((M,x)=>[M,x])),p=[];for(let M of u)for(let x of o.get(M))f.has(x)&&f.get(M)<f.get(x)&&p.push([f.get(M),f.get(x)]);return{ids:u,bars:p,own:r,imp:s}}function zs(i,t,{radius:e=14,rest:n=3}={}){let s=i.length,r=i.map((o,a)=>{let l=nn(o)%6283/1e3,h=e*Math.sqrt((a+1)/s);return[Math.cos(l)*h,Math.sin(l)*h]});for(let o=0;o<80;o++){let a=r.map(()=>[0,0]),l=.5*(1-o/80);for(let h=0;h<s;h++)for(let c=h+1;c<s;c++){let d=r[h][0]-r[c][0],u=r[h][1]-r[c][1],f=6/(d*d+u*u+.01);a[h][0]+=d*f,a[h][1]+=u*f,a[c][0]-=d*f,a[c][1]-=u*f}for(let[h,c]of t){let d=r[c][0]-r[h][0],u=r[c][1]-r[h][1],f=Math.hypot(d,u)||1e-6,p=(f-n)*.08;a[h][0]+=d*p,a[h][1]+=u*p,a[c][0]-=d*p,a[c][1]-=u*p}for(let h=0;h<s;h++){let c=Math.hypot(...a[h])||1,d=Math.min(c,l*4)/c;r[h][0]+=a[h][0]*d,r[h][1]+=a[h][1]*d}}return r}function tf({pos:i,bars:t,fixed:e,loads:n},{iterations:s=2e3,tolerance:r=1e-10,sway:o=1e-9}={}){let a=i.length,l=new Uint8Array(a).fill(1);for(let _ of e)l[_]=0;let h=t.map(([_,S])=>{let b=[0,1,2].map(v=>i[S][v]-i[_][v]),m=Math.hypot(...b)||1e-9;return{L:m,c:b.map(v=>v/m)}}),c=o,d=_=>{let S=new Float64Array(3*a);t.forEach(([b,m],v)=>{let{L:U,c:E}=h[v],P=0;for(let N=0;N<3;N++)P+=E[N]*(_[3*m+N]-_[3*b+N]);P/=U;for(let N=0;N<3;N++)S[3*m+N]+=E[N]*P,S[3*b+N]-=E[N]*P});for(let b=0;b<a;b++)for(let m=0;m<3;m++)S[3*b+m]=l[b]?S[3*b+m]+c*_[3*b+m]:0;return S},u=new Float64Array(3*a),f=0;for(let _=0;_<a;_++)if(l[_]&&n[_])for(let S=0;S<3;S++)u[3*_+S]=n[_][S],f+=u[3*_+S]**2;let p=new Float64Array(3*a),M=Float64Array.from(u),x=Float64Array.from(u),g=M.reduce((_,S)=>_+S*S,0);for(let _=0;_<s&&g>r*Math.max(f,1e-30);_++){let S=d(x),b=0;for(let E=0;E<x.length;E++)b+=x[E]*S[E];if(b<=0)break;let m=g/b,v=0;for(let E=0;E<p.length;E++)p[E]+=m*x[E],M[E]-=m*S[E],v+=M[E]*M[E];let U=v/g;g=v;for(let E=0;E<x.length;E++)x[E]=M[E]+U*x[E]}let y=Array.from({length:a},(_,S)=>[p[3*S],p[3*S+1],p[3*S+2]]),w=t.map(([_,S],b)=>{let{L:m,c:v}=h[b],U=0;for(let E=0;E<3;E++)U+=v[E]*(y[S][E]-y[_][E]);return U/m});return{u:y,force:w,residual:f?Math.sqrt(g/f):0}}function ef(i,t,{max:e=120,ground:n=.1}={}){let{ids:s,bars:r,own:o,imp:a}=Vs(i,t,{max:e}),l=s.length,h=zs(s,r),c=Math.max(1e-9,...s.map(x=>a(o.get(x)))),d=10,u=s.map((x,g)=>[h[g][0],(.5-a(o.get(x))/c)*2*d,h[g][1]]),f=Math.min(l,Math.max(3,Math.round(l*n))),p=[...Array(f).keys()],M=s.map(x=>(o.get(x).tasks||0)+.1);return{ids:s,pos:u,bars:r,fixed:p,loads:M.map(x=>[0,-x,0]),weight:M,ground:p.map(x=>s[x])}}function nf(i,t){let e=i.bars.map(([a,l])=>Math.hypot(...[0,1,2].map(h=>i.pos[l][h]-i.pos[a][h]))),n=t.force.map(Math.abs),s=t.force.map((a,l)=>a<0?-a*e[l]*e[l]:0),r=a=>a.reduce((l,h,c)=>h>a[l]?c:l,0),o=t.u.map((a,l)=>i.fixed.includes(l)?0:Math.hypot(...a));return{len:e,carry:n,buckle:s,sag:o,busiest:n.length?r(n):-1,weakest:s.length&&Math.max(...s)>0?r(s):-1,sagging:o.length?r(o):-1}}var oy=.01,sf="#60a5fa",ah="#f87171",rf="#f59e0b",of={id:"loadpaths",name:"Load paths",hint:"Which links carry the vault, and which note sags first",home:{yaw:.6,pitch:.65,dist:46,min:12,max:110},stage:{fog:[38,90]},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=ef(e.nodes,e.links);if(l.ids.length<4){let B=()=>mt(l.ids.length,"linked note");return t.stat(B()),t.controls({at:"centre",lines:["Load paths needs a set of notes joined by written links.",`${mt(l.ids.length,"note")} joined so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:B,today:()=>null,api:{empty:!0}}}let h=tf(l,{sway:oy}),c=nf(l,h),d=new Map(e.nodes.map(B=>[B.id,B])),u=Ze(e.nodes),f=l.ids.length,p=B=>d.get(l.ids[B]).name,M=new Map(l.ids.map((B,C)=>[B,C])),x=B=>.3+.55*Math.sqrt(Math.max(0,u(d.get(l.ids[B])))),g=Math.max(...c.carry,1e-9),y=o.palette,w=new Ht,_=new Ge,S=new _t,b=new G(0,1,0),m=B=>(i.scene.add(B),B),v=new Set(l.fixed),U=m(new fe(new de(1,16,12),new Te({roughness:.45}),f)),E=m(new fe(new Me(1,1,1,8,1),new Te({roughness:.6}),Math.max(l.bars.length,1))),P=B=>.03+.17*Math.sqrt(c.carry[B]/g),N=n.selected&&M.has(n.selected)?M.get(n.selected):null,F=null,R=null,z=B=>l.bars.map((C,k)=>C[0]===B||C[1]===B?k:-1).filter(C=>C>=0),V=B=>h.force[B]<0?"pushed":"pulled",J=B=>c.carry[B].toFixed(c.carry[B]<10?2:1),W=()=>{if(F!=null)return`${p(l.bars[F][0])} \u2013 ${p(l.bars[F][1])} \xB7 ${V(F)} with ${J(F)}`;let B=R??N;if(B!=null){let C=z(B),k=C.reduce((K,et)=>K+c.carry[et],0);return`${p(B)} \xB7 ${v.has(B)?"ground":`sags ${c.sag[B].toFixed(2)}`} \xB7 ${mt(C.length,"bar")} carrying ${k.toFixed(1)}`}return`${mt(f,"note")} \xB7 ${mt(l.bars.length,"bar")} \xB7 ${mt(l.ground.length,"ground note")} \xB7 load ${l.weight.reduce((C,k)=>C+k,0).toFixed(1)}`};function Y(){let B=R??N,C=new Set(B!=null?z(B):F!=null?[F]:[]),k=new Set(F!=null?l.bars[F]:[]);for(let ot=0;ot<f;ot++){let xt=x(ot)*(ot===B?1.4:1);w.makeScale(xt,xt,xt).setPosition(...l.pos[ot]),U.setMatrixAt(ot,w);let ft=(B!=null||F!=null)&&ot!==B&&!k.has(ot)&&!z(ot).some(wt=>C.has(wt));S.set(v.has(ot)?rf:y[(d.get(l.ids[ot]).cluster||0)%y.length]),ot===B&&S.set(o.fg),ft&&S.multiplyScalar(.25),U.setColorAt(ot,S)}l.bars.forEach(([ot,xt],ft)=>{let wt=new G(...l.pos[ot]),Mt=new G(...l.pos[xt]),tt=Mt.clone().sub(wt),It=tt.length()||1e-6,Dt=P(ft)*(C.has(ft)?1.6:1);_.setFromUnitVectors(b,tt.normalize()),w.compose(wt.add(Mt).multiplyScalar(.5),_,new G(Dt,It,Dt)),E.setMatrixAt(ft,w),S.set(h.force[ft]<0?ah:sf),(B!=null||F!=null)&&!C.has(ft)&&S.multiplyScalar(.25),E.setColorAt(ft,S)});for(let ot of[U,E])ot.instanceMatrix.needsUpdate=!0,ot.instanceColor&&(ot.instanceColor.needsUpdate=!0);let K=[],et=(ot,xt,ft)=>K.push({text:jt(xt,34),at:l.pos[ot],dy:-14,color:ft});if(B!=null)K.push({text:jt(p(B),34),at:l.pos[B],strong:!0,dy:-18,run:()=>j(B),title:`Open ${p(B)}`});else if(F==null){if(c.sag[c.sagging]>0&&et(c.sagging,`${p(c.sagging)} sags most`,o.fg),c.weakest>=0){let[ot,xt]=l.bars[c.weakest];et(c.sag[ot]>=c.sag[xt]?ot:xt,"closest to buckling",ah)}}else for(let ot of l.bars[F])et(ot,p(ot),o.fg);t.labels(K),t.stat(W())}function j(B){N=B,F=null,Y(),a(),s(l.ids[B])}let H=B=>[0,1,2].map(C=>(l.pos[l.bars[B][0]][C]+l.pos[l.bars[B][1]][C])/2),L=[...l.ids.map((B,C)=>({at:l.pos[C],r:x(C),key:{kind:"note",id:B,tip:`${p(C)} \xB7 ${v.has(C)?"ground":`sags ${c.sag[C].toFixed(2)}`}`}})),...l.bars.map((B,C)=>({at:H(C),r:Math.max(P(C)*2,.35),key:{kind:"bar",id:String(C),tip:`${p(B[0])} \u2013 ${p(B[1])} \xB7 ${V(C)} with ${J(C)}`}}))];return(()=>{let B=Qd({n:f,bars:l.bars,ground:l.ground,sag:c.sag,sagging:c.sagging,weakest:c.weakest,busiest:c.busiest,carry:c.carry},p);t.explain({plain:B.plain,about:B.about,legend:[{color:sf,text:"pulled"},{color:ah,text:"pushed"},{color:rf,text:"ground"},{color:o.muted,text:"thicker bar = more load"}],insights:B.insights.map(C=>({text:C.text,label:C.label,run:()=>{C.bar!=null?(F=C.bar,N=null,Y(),a()):j(C.note)}}))})})(),Y(),{targets:()=>L,click(B){B.kind==="note"?j(M.get(B.id)):B.kind==="bar"&&(F=+B.id,N=null,Y(),a())},hover(B){let C=B&&B.kind==="note"?M.get(B.id):null;C!==R&&(R=C,Y())},update(B){"selected"in B&&(N=B.selected&&M.has(B.selected)?M.get(B.selected):null,F=null,Y())},stat:W,today:()=>c.busiest<0?null:{text:`${p(l.bars[c.busiest][0])} \u2013 ${p(l.bars[c.busiest][1])} carries the most (${J(c.busiest)}), ${V(c.busiest)}`,label:"Show it",run:()=>{F=c.busiest,N=null,Y(),a()}},api:{truss:()=>l,solved:()=>h,read:()=>c,selected:()=>N==null?null:l.ids[N],bar:()=>F,notes:()=>l.ids},dispose(){U.material.dispose(),E.material.dispose()}}}};function ay(i,{sweeps:t=60,tolerance:e=1e-12}={}){let n=i.length,s=i.map(a=>Float64Array.from(a)),r=Array.from({length:n},(a,l)=>{let h=new Float64Array(n);return h[l]=1,h});for(let a=0;a<t;a++){let l=0;for(let h=0;h<n;h++)for(let c=h+1;c<n;c++)l+=s[h][c]*s[h][c];if(l<e*e)break;for(let h=0;h<n;h++)for(let c=h+1;c<n;c++){if(Math.abs(s[h][c])<1e-300)continue;let d=(s[c][c]-s[h][h])/(2*s[h][c]),u=Math.sign(d||1)/(Math.abs(d)+Math.sqrt(d*d+1)),f=1/Math.sqrt(u*u+1),p=u*f;for(let M=0;M<n;M++){let x=s[M][h],g=s[M][c];s[M][h]=f*x-p*g,s[M][c]=p*x+f*g}for(let M=0;M<n;M++){let x=s[h][M],g=s[c][M];s[h][M]=f*x-p*g,s[c][M]=p*x+f*g}for(let M=0;M<n;M++){let x=r[M][h],g=r[M][c];r[M][h]=f*x-p*g,r[M][c]=p*x+f*g}}}let o=[...Array(n).keys()].sort((a,l)=>s[a][a]-s[l][l]);return{values:o.map(a=>s[a][a]),vectors:o.map(a=>Array.from({length:n},(l,h)=>r[h][a]))}}function ly(i,t){let e=Array.from({length:i},()=>new Array(i).fill(0));for(let[n,s]of t)n!==s&&(e[n][n]++,e[s][s]++,e[n][s]--,e[s][n]--);return e}function cy(i,t){let{values:e,vectors:n}=ay(ly(i,t)),s=[];for(let r=0;r<i;r++){if(e[r]<1e-9)continue;let o=n[r],a=Math.max(...o.map(Math.abs))||1,l=o.find(h=>Math.abs(h)>1e-9*a)<0?-1:1;s.push({value:e[r],freq:Math.sqrt(e[r]),vector:o.map(h=>l*h/a)})}return s}function lh(i,t=.05){let e=[],n=[],s=[];return i.forEach((r,o)=>(r>t?e:r<-t?n:s).push(o)),{up:e,down:n,rest:s}}function af(i,t,{max:e=100}={}){let{ids:n,bars:s}=Vs(i,t,{max:e});return{ids:n,bars:s,pos:zs(n,s),modes:n.length>=3?cy(n.length,s):[]}}var ch="#f59e0b",hh="#38bdf8",hy=6,uy=.18,lf=44,cf={id:"modes",name:"Normal modes",hint:"How the vault would ring: its natural cuts into halves",home:{yaw:.7,pitch:.8,dist:50,min:14,max:110},stage:{fog:[40,100]},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=af(e.nodes,e.links,{max:80}),h=l.ids.length;if(!l.modes.length){let at=()=>mt(h,"linked note");return t.stat(at()),t.controls({at:"centre",lines:["Normal modes needs a set of notes joined by written links.",`${mt(h,"note")} joined so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:at,today:()=>null,api:{empty:!0}}}let c=new Map(e.nodes.map(at=>[at.id,at])),d=at=>c.get(l.ids[at]).name,u=new Map(l.ids.map((at,I)=>[at,I])),f=new _t(ch),p=new _t(hh),M=new _t(o.bg).lerp(new _t(o.muted),.12),x=new Ht,g=new _t,y=at=>(i.scene.add(at),at),w=l.pos.map(at=>at[0]),_=l.pos.map(at=>at[1]),S=2,b=Math.min(...w)-S,m=Math.max(...w)+S,v=Math.min(..._)-S,U=Math.max(..._)+S,E=(b+m)/2,P=(v+U)/2,N=m-b,F=U-v,R=at=>[l.pos[at][0]-E,l.pos[at][1]-P],z=Math.max(hy,uy*Math.max(N,F)),V=new Zi(N,F,lf,lf).rotateX(-Math.PI/2),J=V.attributes.position.count,W=new Float32Array(J*h);for(let at=0;at<J;at++){let I=V.attributes.position.getX(at),T=V.attributes.position.getZ(at),D=0;for(let $=0;$<h;$++){let[nt,ct]=R($),gt=1/((I-nt)**2+(T-ct)**2+4);W[at*h+$]=gt,D+=gt}for(let $=0;$<h;$++)W[at*h+$]/=D}V.setAttribute("color",new Lt(new Float32Array(J*3),3));let Y=y(new qt(V,new Te({vertexColors:!0,roughness:.55,metalness:.05,side:me,transparent:!0,opacity:.9}))),j=y(new qt(V,new Te({color:o.fg,wireframe:!0,transparent:!0,opacity:.12}))),H=y(new fe(new de(1,16,12),new Te({roughness:.4}),h)),L=new ie;L.setAttribute("position",new gn(new Float32Array(l.bars.length*6),3));let O=y(new He(L,new Fe({color:o.fg,transparent:!0,opacity:.55})));O.frustumCulled=H.frustumCulled=Y.frustumCulled=j.frustumCulled=!1;let B=at=>.4+(at<6?.2:0),C=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,k=!1,K=0,et=0,ot=!C,xt=C?.25:0,ft=null,wt=n.selected&&u.has(n.selected)?u.get(n.selected):null,Mt=null,tt=()=>l.modes[et],It=()=>Math.sin(xt*2*Math.PI),Dt=new Float64Array(h),Yt=()=>lh(tt().vector),Wt=at=>tt().vector[at],Bt=()=>{let at=Mt??wt;if(at!=null)return`${d(at)} \xB7 ${Math.abs(Wt(at))<.05?"on a nodal line":Wt(at)>0?"swings up":"swings down"} ${Math.abs(Wt(at)).toFixed(2)} in mode ${et+1}`;let I=Yt();return`Mode ${et+1} of ${l.modes.length} \xB7 ${I.up.length} up, ${I.down.length} down \xB7 frequency ${tt().freq.toFixed(2)}`};function Qt(){let at=Yt(),I=[et===0?"The cleanest cut of the vault into two halves":`${mt(at.up.length,"note")} swinging up, ${mt(at.down.length,"note")} down, ${mt(at.rest.length,"note")} on a nodal line`];t.controls({lines:I,buttons:[{label:"\u25C0",title:"Previous mode (slower)",off:et===0,run:()=>St(et-1)},{label:`Mode ${et+1}`,title:"Back to mode 1, the slowest",run:()=>St(0)},{label:"\u25B6",title:"Next mode (faster)",off:et===l.modes.length-1,run:()=>St(et+1)},{label:ot?"Hold":"Ring",title:ot?"Hold the sheet still":"Let the sheet ring",run:()=>{ot=!ot,ft=null,Qt(),a()}}]})}function ee(){let at=[],I=tt().vector,T=I.indexOf(Math.max(...I)),D=I.indexOf(Math.min(...I)),$=Mt??wt,nt=(ct,gt,rt)=>at.push({text:jt(gt,34),at:[R(ct)[0],0,R(ct)[1]],dy:-14,color:rt});$!=null?at.push({text:jt(d($),34),at:[R($)[0],0,R($)[1]],strong:!0,dy:-18,run:()=>Jt($),title:`Open ${d($)}`}):(nt(T,d(T),ch),D!==T&&nt(D,d(D),hh)),t.labels(at)}function Ae(){let at=tt().vector,I=V.attributes.color;for(let T=0;T<J;T++){let D=0;for(let $=0;$<h;$++)D+=W[T*h+$]*at[$];g.copy(M).lerp(D>=0?f:p,Math.min(1,Math.abs(D)**.8*1.25)),I.setXYZ(T,g.r,g.g,g.b)}I.needsUpdate=!0,q()}function Se(){let at=Kd({bars:l.bars,vector:tt().vector,freq:tt().freq,k:et,count:l.modes.length},d);t.explain({plain:at.plain,about:at.about,legend:[{color:ch,text:"swings up"},{color:hh,text:"swings down"},{color:o.muted,text:"nodal line, still"}],insights:at.insights.map(I=>({text:I.text,label:I.label,run:()=>{I.note!=null?Jt(I.note):(wt=null,St(et))}}))})}function q(){ee(),t.stat(Bt())}function Q(){let at=tt().vector,I=It(),T=V.attributes.position;for(let $=0;$<J;$++){let nt=0;for(let ct=0;ct<h;ct++)nt+=W[$*h+ct]*at[ct];T.setY($,nt*z*I)}T.needsUpdate=!0,V.computeVertexNormals();let D=L.attributes.position;for(let $=0;$<h;$++)Dt[$]=at[$]*z*I;l.bars.forEach(([$,nt],ct)=>{let[gt,rt]=R($),[dt,vt]=R(nt);D.setXYZ(2*ct,gt,Dt[$]+.05,rt),D.setXYZ(2*ct+1,dt,Dt[nt]+.05,vt)}),D.needsUpdate=!0;for(let $=0;$<h;$++){let[nt,ct]=R($),gt=$===(Mt??wt),rt=B($)*(gt?1.5:1);x.makeScale(rt,rt,rt).setPosition(nt,Dt[$]+rt*.6,ct),H.setMatrixAt($,x),g.copy(M).lerp(at[$]>=0?f:p,Math.min(1,Math.abs(at[$])**.8*1.25+.25)),gt&&g.set(o.fg),H.setColorAt($,g)}H.instanceMatrix.needsUpdate=!0,H.instanceColor&&(H.instanceColor.needsUpdate=!0)}function St(at){et=Math.max(0,Math.min(l.modes.length-1,at)),Ae(),Se(),Qt(),Q(),a()}function Jt(at){wt=at,q(),Q(),a(),s(l.ids[at])}let ut=()=>l.ids.map((at,I)=>{let[T,D]=R(I);return{at:[T,Dt[I]+.4,D],r:B(I)*1.2,key:{kind:"note",id:at,tip:`${d(I)} \xB7 ${Math.abs(Wt(I))<.05?"still":Wt(I)>0?"up":"down"} ${Math.abs(Wt(I)).toFixed(2)}`}}}),ne=()=>{k=!0,clearTimeout(K)},Ct=()=>{clearTimeout(K),K=setTimeout(()=>{k=!1,ft=null,a()},1500)};return i.canvas.addEventListener("pointerdown",ne,!0),addEventListener("pointerup",Ct),addEventListener("pointercancel",Ct),Se(),Ae(),Qt(),Q(),{targets:ut,click(at){at.kind==="note"&&Jt(u.get(at.id))},hover(at){let I=at&&at.kind==="note"?u.get(at.id):null;I!==Mt&&(Mt=I,q(),Q())},update(at){"selected"in at&&(wt=at.selected&&u.has(at.selected)?u.get(at.selected):null,q(),Q())},frame(){if(ot&&!k){let at=performance.now();ft!=null&&(xt=(xt+(at-ft)/1e3*.5*Math.min(2.2,.45+tt().freq*.8))%1),ft=at,Q(),a()}else ft=null},stat:Bt,today:()=>{let at=lh(l.modes[0].vector);return{text:`The vault's cleanest cut is ${at.up.length} notes against ${at.down.length}`,label:"Show it",run:()=>{wt=null,St(0)}}},api:{modes:()=>l.modes,ids:()=>l.ids,mode:()=>et,setMode:St,playing:()=>ot,moving:()=>ot&&!k,hold(at){ot=!1,at!=null&&(xt=at),Q(),Qt(),a()},span:()=>Math.max(N,F),rise:()=>z,selected:()=>wt==null?null:l.ids[wt],heights:()=>Array.from(Dt),sheetHeights:()=>Array.from(V.attributes.position.array.filter((at,I)=>I%3===1)),split:Yt},dispose(){clearTimeout(K),i.canvas.removeEventListener("pointerdown",ne,!0),removeEventListener("pointerup",Ct),removeEventListener("pointercancel",Ct);for(let at of[Y,j,H,O])at.material.dispose();V.dispose(),L.dispose()}}}};function uh(i,t,e,n,s){let r=[],o=new Array(i).fill(-1);for(let c=0;c<i;c++)c!==s&&(o[c]=r.length,r.push(c));let a=r.length,l=Array.from({length:a},()=>new Float64Array(a+1));t.forEach(([c,d],u)=>{let f=e[u];for(let[p,M]of[[c,d],[d,c]])o[p]>=0&&(l[o[p]][o[p]]+=f,o[M]>=0&&(l[o[p]][o[M]]-=f))}),o[n]>=0&&(l[o[n]][a]=1);for(let c=0;c<a;c++)l[c][c]<1e-300&&(l[c][c]=1);for(let c=0;c<a;c++){let d=c;for(let f=c+1;f<a;f++)Math.abs(l[f][c])>Math.abs(l[d][c])&&(d=f);[l[c],l[d]]=[l[d],l[c]];let u=l[c][c];if(!(Math.abs(u)<1e-300))for(let f=c+1;f<a;f++){let p=l[f][c]/u;if(p)for(let M=c;M<=a;M++)l[f][M]-=p*l[c][M]}}let h=new Float64Array(a);for(let c=a-1;c>=0;c--){let d=l[c][a];for(let u=c+1;u<a;u++)d-=l[c][u]*h[u];h[c]=Math.abs(l[c][c])<1e-300?0:d/l[c][c]}return Array.from({length:i},(c,d)=>o[d]>=0?h[o[d]]:0)}function dy(i,t,e,n,s,r){let o=uh(i,t,t.map((a,l)=>e[l]/n[l]),s,r);return t.map(([a,l],h)=>e[h]/n[h]*(o[a]-o[l]))}function fy(i,t,{lengths:e,pairs:n,steps:s=200,dt:r=.5,floor:o=1e-6,keep:a=40}={}){let l=e||t.map(()=>1),h=t.map(()=>1),c=[Float32Array.from(h)],d=Math.max(1,Math.floor(s/(a-1)));for(let u=0;u<s&&n.length;u++){let[f,p]=n[u%n.length],M=dy(i,t,h,l,f,p);for(let x=0;x<h.length;x++)h[x]=Math.max(o,h[x]+r*(Math.abs(M[x])-h[x]));(u+1)%d===0&&c.length<a&&c.push(Float32Array.from(h))}for(;c.length<a;)c.push(Float32Array.from(h));return c[c.length-1]=Float32Array.from(h),{D:h,frames:c,steps:s}}function py(i,t=.1){let e=Math.max(...i,1e-12),n=Array.from(i,s=>s/e);return{share:n,kept:n.map(s=>s>=t)}}var my=24;function hf(i,t,{max:e=80,hubs:n=6,hubMax:s=my,steps:r=200}={}){let{ids:o,bars:a,own:l}=Vs(i,t,{max:e,hubs:s}),h=o.map((g,y)=>l.get(g).moc?y:-1).filter(g=>g>=0),c=h.length>=2?"hubs":"top",d=o.map((g,y)=>y).filter(g=>!h.includes(g)),u=c==="hubs"?h:d.slice(0,Math.min(n,d.length)),f=[];for(let g=0;g<u.length;g++)for(let y=g+1;y<u.length;y++)f.push([u[g],u[y]]);let p=f.length?fy(o.length,a,{pairs:f,steps:Math.max(r,f.length)}):{D:a.map(()=>1),frames:[Float32Array.from(a.map(()=>1))]},{share:M,kept:x}=py(p.D);return{ids:o,bars:a,pos:zs(o,a),hubs:u,fed:c,D:p.D,frames:p.frames,share:M,kept:x}}function uf(i=1){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function df(i,t){let e=Array.from({length:i},()=>[]);for(let[r,o]of t)e[r].push(o),e[o].push(r);let n=new Array(i).fill(-1),s=0;for(let r=0;r<i;r++){if(n[r]>=0)continue;let o=[r];for(n[r]=s;o.length;)for(let a of e[o.pop()])n[a]<0&&(n[a]=s,o.push(a));s++}return n}function Tl(i,t,e){if(e.length<2)return 0;let n=df(i,t),s=t.map(()=>1),r=0,o=0;for(let a=0;a<e.length;a++)for(let l=a+1;l<e.length;l++)o++,r+=n[e[a]]!==n[e[l]]?i:uh(i,t,s,e[a],e[l])[e[a]];return r/o}function ff(i,t,e){if(i<2||new Set(df(i,t)).size!==1)return null;let n=i-1,s=Array.from({length:n},(h,c)=>{let d=new Float64Array(2*n);return d[n+c]=1,d});for(let[h,c]of t){let d=h-1,u=c-1;d>=0&&s[d][d]++,u>=0&&s[u][u]++,d>=0&&u>=0&&(s[d][u]--,s[u][d]--)}for(let h=0;h<n;h++){let c=h;for(let u=h+1;u<n;u++)Math.abs(s[u][h])>Math.abs(s[c][h])&&(c=u);[s[h],s[c]]=[s[c],s[h]];let d=s[h][h];for(let u=0;u<2*n;u++)s[h][u]/=d;for(let u=0;u<n;u++){if(u===h||!s[u][h])continue;let f=s[u][h];for(let p=0;p<2*n;p++)s[u][p]-=f*s[h][p]}}let r=(h,c)=>h===0||c===0?0:s[h-1][n+c-1],o=(h,c)=>r(h,h)+r(c,c)-2*r(h,c),a=[];for(let h=0;h<e.length;h++)for(let c=h+1;c<e.length;c++)a.push([e[h],e[c]]);let l=h=>a.length?a.reduce((c,[d,u])=>c+h(d,u),0)/a.length:0;return{base:l(o),after:([h,c])=>{let d=o(h,c);return l((u,f)=>{let p=r(u,h)-r(u,c)-r(f,h)+r(f,c);return o(u,f)-p*p/(1+d)})}}}var Gs=(i,t)=>i<t?i+","+t:t+","+i;function gy(i,t,e,n=null){let s=(r,o)=>r!==o&&!t.has(Gs(r,o))&&!(n&&(n.has(r)||n.has(o)));for(let r=0;r<200;r++){let o=Math.floor(e()*i),a=Math.floor(e()*i);if(s(o,a))return[o,a]}for(let r=0;r<i;r++)for(let o=r+1;o<i;o++)if(s(r,o))return[r,o];return null}function xy(i,t,e,n,{shuffles:s=50,seed:r=1,fast:o,skip:a=null}={}){let l=o===void 0?ff(i,t,e):o,h=l?l.base:Tl(i,t,e),c=g=>l?l.after(g):Tl(i,[...t,g],e),d=new Set(t.map(([g,y])=>Gs(g,y))),u=a&&a.length?new Set(a):null;if(n[0]===n[1]||d.has(Gs(n[0],n[1]))||u&&(u.has(n[0])||u.has(n[1])))return{gain:0,p:1,valid:!1};let f=h-c(n),p=uf(r),M=0,x=new Set(d);x.add(Gs(n[0],n[1]));for(let g=0;g<s;g++){let y=gy(i,x,p,u);if(!y)break;h-c(y)>=f&&M++}return{gain:f,p:(1+M)/(1+s),valid:!0}}function _y(i,t,e,n,{shuffles:s=50,seed:r=1,alpha:o=.05,minGain:a=.001,skip:l=null}={}){let h=ff(i,t,e);return n.map(c=>({link:c,...xy(i,t,e,c,{shuffles:s,seed:r,fast:h,skip:l})})).filter(c=>c.valid&&c.p<o&&c.gain>=a).sort((c,d)=>d.gain-c.gain||c.p-d.p)}function yy(i,t,{max:e=200,seed:n=1,skip:s=null}={}){let r=new Set(t.map(([h,c])=>Gs(h,c))),o=[],a=new Set(s||[]);for(let h=0;h<i;h++)if(!a.has(h))for(let c=h+1;c<i;c++)!a.has(c)&&!r.has(Gs(h,c))&&o.push([h,c]);if(o.length<=e)return o;let l=uf(n);for(let h=o.length-1;h>0;h--){let c=Math.floor(l()*(h+1));[o[h],o[c]]=[o[c],o[h]]}return o.slice(0,e).sort((h,c)=>h[0]-c[0]||h[1]-c[1])}function pf(i,t,e,{steps:n=5,max:s=200,shuffles:r=50,seed:o=1,alpha:a=.05,minGain:l=.001,skip:h=null}={}){let c=t.map(([f,p])=>[f,p]),d=[],u=Tl(i,c,e);for(let f=0;f<n;f++){let p=_y(i,c,e,yy(i,c,{max:s,seed:o+f,skip:h}),{shuffles:r,seed:o+f,alpha:a,minGain:l,skip:h})[0];if(!p)break;c=[...c,p.link],d.push(p)}return{added:d,before:u,after:Tl(i,c,e)}}var My=8,mf=.1,gf={id:"slime",name:"Slime mould",hint:"Which written links carry the vault, and which fade away",home:{yaw:.6,pitch:.75,dist:46,min:14,max:110},stage:{fog:[40,100]},actions:["graph","add-link","decline-link"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=hf(e.nodes,e.links,{max:80}),h=l.ids.length,c=l.frames.length-1;if(h<3||l.hubs.length<2){let D=()=>mt(h,"linked note");return t.stat(D()),t.controls({at:"centre",lines:["Slime mould needs a set of notes joined by written links.",`${mt(h,"note")} joined so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:D,today:()=>null,api:{empty:!0}}}let d=new Map(e.nodes.map(D=>[D.id,D])),u=D=>d.get(l.ids[D]).name,f=new Map(l.ids.map((D,$)=>[D,$])),p=l.fed==="hubs"?"hubs":"most linked notes",M=new Set(l.hubs),x=Math.max(...l.D,1e-12),g=D=>(i.scene.add(D),D),y=l.pos.map(D=>D[0]),w=l.pos.map(D=>D[1]),_=(Math.min(...y)+Math.max(...y))/2,S=(Math.min(...w)+Math.max(...w))/2,b=20,m=Math.max(1e-9,...l.pos.map(D=>Math.hypot(D[0]-_,D[1]-S))),v=b/m,U=D=>[(l.pos[D][0]-_)*v,(l.pos[D][1]-S)*v],E=9,P=new Float64Array(h),N=[],F=D=>[U(D)[0],P[D],U(D)[1]],R=()=>{let D=new Float64Array(h);l.bars.forEach(([nt,ct],gt)=>{let rt=Yt[gt]/x;D[nt]+=rt,D[ct]+=rt});let $=Math.max(...D,1e-9);for(let nt=0;nt<h;nt++)P[nt]=E*Math.sqrt(D[nt]/$)*(M.has(nt)?1:.85)},z=new Ht,V=new _t,J=new _t(o.bg).lerp(new _t(o.muted),.55),W=new _t("#f59e0b"),Y=new _t(o.accent||"#38bdf8"),j=new _t(o.fg),H=new G(0,1,0),L=new G,O=new G,B=new Ge,C=new G,k=g(new fe(new Me(1,1,1,10,1),new Te({roughness:.5}),l.bars.length)),K=g(new fe(new de(1,16,12),new Te({roughness:.4}),h));k.frustumCulled=K.frustumCulled=!1;let et=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,ot=et?c:0,xt=!et,ft=null,wt=n.selected&&f.has(n.selected)?f.get(n.selected):null,Mt=null,tt=()=>{let D=l.frames[Math.floor(ot)],$=l.frames[Math.min(c,Math.floor(ot)+1)],nt=ot-Math.floor(ot);return Array.from(D,(ct,gt)=>ct+($[gt]-ct)*nt)},It=D=>D.filter($=>$/x>=mf).length,Dt=D=>M.has(D)?.75:.4,Yt=tt();R();let Wt=()=>{let D=Mt??wt;if(D!=null){let $=l.bars.map((ct,gt)=>ct[0]===D||ct[1]===D?gt:-1).filter(ct=>ct>=0),nt=$.filter(ct=>Yt[ct]/x>=mf).length;return`${u(D)} \xB7 ${M.has(D)?"hub \xB7 ":""}${nt} of ${mt($.length,"link")} carry on`}return`${It(Yt)} of ${mt(l.bars.length,"link")} carry on \xB7 fed by ${l.hubs.length} ${p} \xB7 step ${Math.round(ot)} of ${c}`};function Bt(){let D=ot>=c;t.controls({lines:[D?`The links that carry flow between the ${p}`:"Tubes thicken where flow is high and thin where it is not"],buttons:[{label:xt&&!D?"Hold":D?"Grow again":"Play",title:xt&&!D?"Hold the growth":D?"Start again from tubes of equal width":"Let the mould grow",run:()=>{ot>=c&&(ot=0),xt=!(xt&&!D),ft=null,ee(),a()}},{label:"Start",title:"Back to tubes of equal width",off:ot===0,run:()=>{ot=0,xt=!1,ft=null,ee(),a()}},{label:"End",title:"Jump to the finished backbone",off:ot>=c,run:()=>{ot=c,xt=!1,ee(),a()}},{label:"Simulate",title:`Find links that would shorten the routes between your ${p}, and test each against random links`,run:at}]})}function Qt(){let D=[],$=Mt??wt;N.length=0;let nt=(ct,gt)=>{gt.at=F(ct),N.push([ct,gt.at]),D.push(gt)};for(let ct of l.hubs.slice(0,4))ct!==$&&nt(ct,{text:jt(u(ct),30),dy:-16,color:o.accent});$!=null&&nt($,{text:jt(u($),34),strong:!0,dy:-20,run:()=>Se($),title:`Open ${u($)}`}),t.labels(D)}function ee(){Yt=tt(),Ae(),Qt(),Bt(),t.stat(Wt())}function Ae(){R(),l.bars.forEach(([D,$],nt)=>{let[ct,gt,rt]=F(D),[dt,vt,Z]=F($),pt=Math.min(1,Yt[nt]/x),ht=.05+.4*Math.sqrt(pt);L.set(dt-ct,vt-gt,Z-rt);let Et=L.length()||1e-6;L.normalize(),O.set((ct+dt)/2,(gt+vt)/2,(rt+Z)/2),B.setFromUnitVectors(H,L),C.set(ht,Et,ht),z.compose(O,B,C),k.setMatrixAt(nt,z),V.copy(J).lerp(W,Math.min(1,Math.sqrt(pt)*1.1)),k.setColorAt(nt,V)}),k.instanceMatrix.needsUpdate=!0,k.instanceColor&&(k.instanceColor.needsUpdate=!0);for(let D=0;D<h;D++){let[$,nt,ct]=F(D),gt=D===(Mt??wt),rt=Dt(D)*(gt?1.4:1);z.makeScale(rt,rt,rt).setPosition($,nt,ct),K.setMatrixAt(D,z),V.copy(M.has(D)?Y:J).lerp(j,M.has(D)?0:.35),gt&&V.copy(j),K.setColorAt(D,V)}for(let[D,$]of N)$[1]=P[D];K.instanceMatrix.needsUpdate=!0,K.instanceColor&&(K.instanceColor.needsUpdate=!0)}function Se(D){wt=D,ee(),a(),s(l.ids[D])}let q=()=>l.ids.map((D,$)=>({at:F($),r:Dt($)*1.3,key:{kind:"note",id:D,tip:`${u($)}${M.has($)?" \xB7 hub":""}`}})),Q=$d({n:h,bars:l.bars,kept:l.kept,hubs:l.hubs,order:l.ids.map((D,$)=>$)},u),St=null,Jt=new Set,ut=()=>{Jt.clear();for(let D of n.declined||[])Jt.add(D.from+">"+D.to)};ut();let ne=()=>St?St.rows.filter(D=>!Jt.has(D.from+">"+D.to)):[],Ct=D=>{let $=D.from+">"+D.to,nt=[f.get(D.from),f.get(D.to)],ct=`about 1 in ${Math.max(2,Math.round(1/D.p))}`;return{text:`Link ${u(nt[0])} to ${u(nt[1])}: routes between your ${p} get ${Math.max(1,Math.round(D.pct*100))}% shorter. A random link would do this ${ct} times.`,label:"Add link",title:`Add a link between ${u(nt[0])} and ${u(nt[1])}`,run:()=>{Jt.add($),I(),r("add-link",{from:D.from,to:D.to})},extra:[{label:"Decline",title:"Skip this link",run:()=>{Jt.add($),I(),r("decline-link",{from:D.from,to:D.to})}},{label:"Show",title:`Show ${u(nt[0])}`,run:()=>Se(nt[0])}]}};function at(){let D=pf(h,l.bars,l.hubs,{steps:5,max:200,shuffles:50,seed:1,skip:l.fed==="hubs"?l.hubs:null}),$=D.before;St={rows:D.added.map(ct=>{let gt={from:l.ids[ct.link[0]],to:l.ids[ct.link[1]],p:ct.p,pct:$>0?ct.gain/$:0};return $-=ct.gain,gt})},ut(),I(),t.card(!0)}function I(){let D=ne(),$=St&&!D.length?[{text:St.rows.length?"No more links to test.":`No link does better than a random one would. Your ${p} already reach each other about as well as links can.`,label:"Show it",run:()=>{wt=null,ot=c,xt=!1,ee(),a()}}]:[];t.explain({plain:Q.plain,about:Q.about,legend:T,insights:[...D.map(Ct),...$,...Q.insights.map(nt=>({text:nt.text,label:nt.label,run:()=>{nt.note!=null?Se(nt.note):(wt=null,ot=c,xt=!1,ee(),a())}}))]})}let T=[{color:"#f59e0b",text:"carries flow (higher = more)"},{color:o.muted,text:"fading"},{color:o.accent||"#38bdf8",text:"hub"}];return I(),ee(),{targets:q,click(D){D.kind==="note"&&Se(f.get(D.id))},hover(D){let $=D&&D.kind==="note"?f.get(D.id):null;$!==Mt&&(Mt=$,ee())},update(D){"declined"in D&&(n={...n,declined:D.declined},St&&(ut(),I())),"selected"in D&&(wt=D.selected&&f.has(D.selected)?f.get(D.selected):null,ee())},frame(){if(xt&&ot<c){let D=performance.now();ft!=null&&(ot=Math.min(c,ot+(D-ft)/1e3*My)),ft=D,ot>=c?(xt=!1,ee()):(Yt=tt(),Ae(),t.stat(Wt())),a()}else ft=null},stat:Wt,today:()=>({text:`${It(l.frames[c])} of ${mt(l.bars.length,"link")} carry the vault between its ${l.hubs.length} ${p}`,label:"Show it",run:()=>{wt=null,ot=c,xt=!1,ee()}}),api:{ids:()=>l.ids,hubs:()=>l.hubs.map(D=>l.ids[D]),step:()=>ot,steps:()=>c,playing:()=>xt&&ot<c,widths:()=>Array.from(Yt),final:()=>Array.from(l.D),setStep(D){ot=Math.max(0,Math.min(c,D)),xt=!1,ee(),a()},hold(){xt=!1,ee()},selected:()=>wt==null?null:l.ids[wt],carrying:()=>It(Yt),links:()=>l.bars.length},dispose(){for(let D of[k,K])D.material.dispose(),D.geometry.dispose()}}}};function Al(i,{linkedOnly:t=!0}={}){let e=Ze(i.nodes),n=new Map;for(let s of i.nodes)s.moc&&!n.has(s.cluster)&&n.set(s.cluster,s);return[...i.clusters].sort((s,r)=>r.size-s.size||s.id-r.id).map(s=>({cluster:s.id,name:s.label||s.name,moc:n.get(s.id)||null,notes:i.nodes.filter(r=>r.cluster===s.id&&!Re(r)&&!(t&&r.isolated)).sort((r,o)=>e(o)-e(r)||(r.id<o.id?-1:1))})).filter(s=>s.notes.length)}var Rl=(i,t=1)=>{let e=Math.max(1,Math.ceil(Math.sqrt(i*t)));return{cols:e,rows:Math.ceil(i/e)}},eo=i=>{let t=nn(i),e=Math.imul(t^t>>>15,2246822507)>>>0;return[(t>>>4)%1e3/1e3,(e>>>7)%1e3/1e3]};function xf(i){let{cols:t,rows:e}=Rl(i),n=(t-1)/2,s=(e-1)/2,r=[];for(let o=0;o<e;o++)for(let a=0;a<t;a++)r.push([a-n,o-s]);return r.sort((o,a)=>Math.hypot(o[0],o[1])-Math.hypot(a[0],a[1])||o[1]-a[1]||o[0]-a[0]).slice(0,i)}var dh=2.4,vy=["#22d3ee","#f472b6","#facc15","#a5f3fc"],_f="#fb7185",yf="#facc15",Sy=(i,t,e)=>e(i)?0:t(i)>.3?2:1;function by(i,{hall:t=!1,now:e=Date.now()}={}){let n=Ze(i.nodes),s=ks(i.nodes),r=Pi(i),o=Al(i),a=Math.max(...o.map(_=>Rl(_.notes.length).cols),2)*dh+3,{cols:l,rows:h}=Rl(Math.max(o.length,1),.8),c=[],d=[],u=new Set,f=-(l-1)*a/2,p=-(h-1)*a/2;o.forEach((_,S)=>{_.x=f+S%l*a,_.z=p+Math.floor(S/l)*a,d.push({x:_.x,z:_.z,size:a-1.2,d:S});let b=xf(_.notes.length);if(_.notes.forEach((m,v)=>{let U=Math.max(.7,Math.min(1.8,.35+Math.log1p(m.words||0)*.2)),E=.9+9*Math.sqrt(Math.max(0,n(m))),[P,N]=b[v];c.push({n:m,x:_.x+P*dh,z:_.z+N*dh,w:U,h:E,kind:"tower",d:S,level:Sy(m,s,r)}),u.add(m.id)}),_.moc){let m=Math.max(3,...c.filter(v=>v.d===S).map(v=>v.h));c.push(t?{n:_.moc,x:_.x,z:_.z+a/2-1.3,w:1.4,h:1.1,kind:"hall",d:S,level:2}:{n:_.moc,x:_.x,z:_.z-a/2+1.6,w:.9,h:m+3,kind:"spire",d:S,level:2}),u.add(_.moc.id)}_.cars=Math.round(2+10*Math.min(1,_.notes.reduce((m,v)=>m+s(v),0)/6))});let M=p+(h-1)*a+a/2+3,x=Math.max(l*a-4,8);for(let _ of i.nodes){if(Re(_)||u.has(_.id))continue;let[S]=eo("stall:"+_.id);c.push({n:_,x:f-a/2+2+S*x,z:M+nn(_.id)%3*1.4,w:.7,h:.8,kind:"stall",d:-1,level:1})}let g=e-7*864e5,y=_=>typeof _.n.born=="string"?Date.parse(_.n.born):NaN,w=c.filter(_=>_.kind==="tower"&&y(_)>=g).sort((_,S)=>y(S)-y(_)).slice(0,15).map(_=>_.n.id);return{towers:c,pads:d,districts:o,cell:a,front:M,fresh:w,bounds:{x:[f-a/2,-f+a/2],z:[p-a/2,M+3]}}}function wy(i,t){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d");n.fillStyle=t.wall,n.fillRect(0,0,128,128);for(let r=0;r<8;r++)for(let o=0;o<8;o++){let a=nn(`${i}:${o}:${r}`)%1e3/1e3,l=a<i;n.fillStyle=l?t.lit[(o+r*3)%t.lit.length]:t.pane,n.globalAlpha=l?.55+.45*(a/i):.5,n.fillRect(o*16+3,r*16+3,10,11)}let s=new Hi(e);return s.wrapS=s.wrapT=_s,s.colorSpace=ze,s.magFilter=Ne,s}var Ni=(i,t,e)=>new _t(i).lerp(new _t(t),e),Ey={id:"cyberpunk",name:"Cyberpunk",hint:"A neon city: topics are districts, notes are towers, stale ones go dark",stage:{fog:[55,170],ambient:.4},tower:"tower",hall:!1,cranes:!1,sheet:{wall:"#2a2a36",pane:"#3a3a4a",lit:vy},beacon:_f,beaconName:"pink",stall:yf,arc:"#22d3ee",wall:(i,t)=>Ni(i,"#ffffff",t===0?.55:.3).multiplyScalar(t===0?.5:1),lane:(i,t,e,n)=>({y:4+t*8,z:(i-.5)*(n-3),c:e%3?"#fca5a5":"#e0f2fe"}),stat:i=>`${mt(i.towers,"tower")} \xB7 ${i.dark} dark \xB7 ${mt(i.districts,"district")}`,plain:"Picture your notes as a city. A tall tower is a note everything else leans on. Lit windows mean someone has been in it lately; a dark tower has been left alone for a long time.",about:"Each topic is a district and each note a tower. Height is how many notes link to it and how much runs through it; lit windows are how recently it was edited; dark is stale. A pink beacon on a roof is an open task, the tall thin spire is the topic's map, and a stall on the street is a note in no topic.",legend:[{color:"#22d3ee",text:"height = relied on, windows = recent"},{color:"#6b7280",text:"dark = stale"},{color:_f,text:"beacon = open task"},{color:yf,text:"stall = no topic"}]},Ty="#e5e7eb",Mf="#facc15",fh=i=>({id:i.id,name:i.name,hint:i.hint,home:{yaw:.55,pitch:.38,dist:58,min:12,max:140},stage:i.stage,actions:["graph"],build({stage:t,frame:e,data:n,inputs:s,onOpen:r,onAction:o,theme:a,invalidate:l}){let h=by(n,{hall:i.hall}),c=h.towers,d=c.filter(Q=>Q.kind!=="stall");if(d.length<3){let Q=()=>mt(c.length,"note");return e.stat(Q()),e.controls({at:"centre",lines:[`${i.name} needs notes in topics, linked to one another.`,`${mt(d.length,i.tower)} so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>o("graph")}]}),{targets:()=>[],click(){},update(){},stat:Q,today:()=>null,api:{empty:!0}}}let u=new Map(c.map(Q=>[Q.n.id,Q])),f=Q=>Q.n.name,p=Q=>(t.scene.add(Q),Q),M=Q=>Q.kind==="stall"?i.stall:Q.kind==="hall"?Ty:a.palette[(Q.n.cluster||0)%a.palette.length],x=new Map,g=(Q,St)=>{x.has(Q)||x.set(Q,new Set),x.get(Q).add(St)};for(let Q of n.links)Q.kind!=="wanted"&&u.has(Q.source)&&u.has(Q.target)&&(g(Q.source,Q.target),g(Q.target,Q.source));let y=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,w=new Ht,_=typeof s.hour=="number"?s.hour:new Date().getHours(),S=_<5||_>=21,b=new _t(a.bg).getHSL({}).l<.5,m=i.sky?i.sky(_):null,v=null;m&&(t.sky({top:Ni(a.bg,m,b?0:.3),haze:Ni(a.bg,m,b?.035:.1),stars:S&&b?160:0}),v=p(new qt(new Un(Math.max(h.bounds.x[1]-h.bounds.x[0],h.cell*3)*4,48).rotateX(-Math.PI/2),new oe({color:Ni(i.ground,a.bg,b?.94:.45)}))),v.position.set((h.bounds.x[0]+h.bounds.x[1])/2,-.16,h.front),v.userData.backdrop=!0);let U=p(new fe(new cn(1,.1,1),new oe,h.pads.length));h.pads.forEach((Q,St)=>{U.setMatrixAt(St,w.makeScale(Q.size,1,Q.size).setPosition(Q.x,-.05,Q.z)),U.setColorAt(St,Ni(a.palette[h.districts[Q.d].cluster%a.palette.length],a.bg,.86))});let E=p(new qt(new cn(h.bounds.x[1]-h.bounds.x[0],.1,5),new oe({color:Ni(i.stall,a.bg,.9)})));E.position.set((h.bounds.x[0]+h.bounds.x[1])/2,-.06,h.front+.5);let P=[0,1,2].map(Q=>{let St=c.filter(I=>I.level===Q&&(I.kind==="tower"||I.kind==="spire")),Jt=[],ut=[],ne=[];St.forEach(I=>{let T=I.w/2,D=nn(I.n.id)%8/8;for(let[$,nt,ct,gt]of[[-T,-T,T,-T],[T,-T,T,T],[T,T,-T,T],[-T,T,-T,-T]]){let rt=Jt.length/3,dt=Math.hypot(ct-$,gt-nt)/4,vt=I.h/4;Jt.push(I.x+$,0,I.z+nt,I.x+ct,0,I.z+gt,I.x+ct,I.h,I.z+gt,I.x+$,I.h,I.z+nt),ut.push(D,0,D+dt,0,D+dt,vt,D,vt),ne.push(rt,rt+1,rt+2,rt,rt+2,rt+3)}});let Ct=new ie().setAttribute("position",new Lt(Jt,3)).setAttribute("uv",new Lt(ut,2)).setAttribute("color",new Lt(new Float32Array(Jt.length),3));Ct.setIndex(ne);let at=p(new qt(Ct,new oe({map:wy([.04,.28,.7][Q],i.sheet),vertexColors:!0,side:me})));return at.frustumCulled=!1,{list:St,geo:Ct,mesh:at}}),N=p(new fe(new cn(1,1,1),new oe,c.length));N.frustumCulled=!1;let F=c.filter(Q=>Q.n.tasks>0),R=p(new fe(new de(1,10,8),new oe({color:i.beacon}),Math.max(F.length,1)));R.count=F.length,R.frustumCulled=!1,F.forEach((Q,St)=>R.setMatrixAt(St,w.makeScale(.28,.28,.28).setPosition(Q.x,Q.h+.35,Q.z)));let z=h.districts.flatMap(Q=>Array.from({length:Q.cars},(St,Jt)=>{let[ut,ne]=eo(`car:${Q.cluster}:${Jt}`);return{d:Q,u:ut,v:(.02+ne*.05)*(Jt%2?1:-1),...i.lane(ut,ne,Jt,h.cell)}})),V=p(new fe(new cn(.7,.12,.14),new oe,Math.max(z.length,1)));V.count=z.length,V.frustumCulled=!1,z.forEach((Q,St)=>V.setColorAt(St,new _t(Q.c)));let J=p(new He(new ie,new Fe({color:i.arc,transparent:!0,opacity:.9})));J.frustumCulled=!1;let W=i.cranes?h.fresh.map(Q=>u.get(Q)):[],Y=c.filter(Q=>Q.kind==="hall"),j=[];for(let Q of W)j.push([Q.x+Q.w/2,Q.h+.8,Q.z+Q.w/2,.09,1.6,.09,Mf],[Q.x+Q.w/2-.45,Q.h+1.55,Q.z+Q.w/2,1.5,.09,.09,Mf]);for(let Q of Y)j.push([Q.x,Q.h+.7,Q.z,.07,1.4,.07,"#94a3b8"],[Q.x+.32,Q.h+1.2,Q.z,.6,.36,.05,a.palette[h.districts[Q.d].cluster%a.palette.length]]);let H=p(new fe(new cn(1,1,1),new oe,Math.max(j.length,1)));H.count=j.length,H.frustumCulled=!1,j.forEach(([Q,St,Jt,ut,ne,Ct,at],I)=>{H.setMatrixAt(I,w.makeScale(ut,ne,Ct).setPosition(Q,St,Jt)),H.setColorAt(I,new _t(at))});let L=c.filter(Q=>Q.kind==="tower").sort((Q,St)=>St.h-Q.h)[0]||null,O=s.selected&&u.has(s.selected)?s.selected:null,B=null,C=null,k=y,K=()=>B||O,et=new Set,ot=Q=>(C==null||Q.d===C||Q.d<0)&&(!K()||et.has(Q.n.id)),xt=c.filter(Q=>Q.kind==="tower"&&Q.level===0),ft=Q=>xt.filter(St=>St.d===Q),wt=()=>{let Q=K()&&u.get(K());return Q&&(Q.kind==="spire"||Q.kind==="hall")?`${f(Q)} \xB7 map of ${mt(h.districts[Q.d].notes.length,"note")}`:Q?`${f(Q)} \xB7 ${mt(Q.n.inlinks||0,"link")} in \xB7 ${Q.level===0?"dark":Q.level===2?"busy":"dim"}${Q.n.tasks?` \xB7 ${mt(Q.n.tasks,"open task")}`:""}`:i.stat({towers:c.filter(St=>St.kind==="tower").length,dark:xt.length,districts:h.districts.length,fresh:h.fresh.length,tallest:L?jt(f(L),22):""})};function Mt(){let Q=K();if(et.clear(),Q){et.add(Q);for(let ut of x.get(Q)||[])et.add(ut)}for(let ut of P){let ne=ut.geo.getAttribute("color"),Ct=0;ut.list.forEach(at=>{let I=i.wall(M(at),at.level).multiplyScalar(ot(at)?1:.16);for(let T=0;T<16;T++)ne.setXYZ(Ct++,I.r,I.g,I.b)}),ne.needsUpdate=!0}c.forEach((ut,ne)=>{let Ct=ut.kind==="stall"||ut.kind==="hall",at=Ct?ut.w:ut.w*1.04;N.setMatrixAt(ne,w.makeScale(at,Ct?ut.h:.12,at).setPosition(ut.x,Ct?ut.h/2:ut.h+.06,ut.z)),N.setColorAt(ne,Ni(M(ut),a.bg,ot(ut)?ut.level===0?.55:0:.85))}),N.instanceMatrix.needsUpdate=!0,N.instanceColor.needsUpdate=!0;let St=[];if(Q){let ut=u.get(Q);for(let ne of x.get(Q)||[]){let Ct=u.get(ne),at=[ut.x,ut.h,ut.z],I=[Ct.x,Ct.h,Ct.z],T=[(ut.x+Ct.x)/2,Math.max(ut.h,Ct.h)+3+Math.hypot(ut.x-Ct.x,ut.z-Ct.z)*.25,(ut.z+Ct.z)/2],D=at;for(let $=1;$<=12;$++){let nt=$/12,ct=[0,1,2].map(gt=>(1-nt)*(1-nt)*at[gt]+2*(1-nt)*nt*T[gt]+nt*nt*I[gt]);St.push(...D,...ct),D=ct}}}J.geometry.setAttribute("position",new Lt(St,3)),J.visible=St.length>0;let Jt=h.districts.map((ut,ne)=>({d:ut,i:ne})).filter(ut=>C==null||C===ut.i).map(({d:ut})=>({text:jt(ut.name,28)+(i.hall&&!ut.moc?" \xB7 no map":""),at:[ut.x,.4,ut.z+h.cell/2-.6],color:Ni(a.palette[ut.cluster%a.palette.length],"#ffffff",.45).getStyle(),dy:6}));if(Q){let ut=u.get(Q);Jt.unshift({text:jt(f(ut),34),at:[ut.x,ut.h,ut.z],strong:!0,dy:-18,run:()=>tt(Q),title:`Open ${f(ut)}`})}e.labels(Jt),e.stat(wt()),e.chip(C==null?null:`District: ${jt(h.districts[C].name,24)}`,()=>{C=null,Mt(),l()})}function tt(Q){O=Q,Mt(),l(),r(Q)}let It=Q=>{C=null,O=Q,Mt(),l()},Dt=Q=>{C=Q,O=null,Mt(),l()},Yt=h.districts.map((Q,St)=>[ft(St).length,St]).sort((Q,St)=>St[0]-Q[0])[0],Wt=c.filter(Q=>Q.kind==="stall"),Bt=[...xt].sort((Q,St)=>St.h-Q.h)[0],Qt=[];Yt&&Yt[0]&&Qt.push({text:`${h.districts[Yt[1]].name} is the darkest district: ${mt(Yt[0],"stale note")}. Open the tallest and decide whether it is still true.`,label:"Show district",run:()=>Dt(Yt[1])}),Bt&&Bt.h>3&&Qt.push({text:`${f(Bt)} stands tall yet has gone dark: other notes lean on it and it has not been edited in ${Bt.n.age} days.`,label:"Open note",run:()=>tt(Bt.n.id)}),F.length&&Qt.push({text:`${mt(F.length,i.tower)} with a ${i.beaconName} beacon: an open task. The tallest is the one the most notes wait on.`,label:"Open note",run:()=>tt([...F].sort((Q,St)=>St.h-Q.h)[0].n.id)}),Wt.length&&Qt.push({text:`${mt(Wt.length,"note")} stand as stalls on the street, in no topic. Link each to a topic's notes and it gets a ${i.tower}.`,label:"Open note",run:()=>tt(Wt[0].n.id)}),i.cranes&&L&&Qt.unshift({text:`${f(L)} is the tallest ${i.tower}: ${mt(L.n.inlinks||0,"note")} link to it.`,label:"Show tallest",run:()=>It(L.n.id)}),W.length&&Qt.push({text:`${mt(W.length,i.tower)} went up this week, each with a crane. The newest is ${f(W[0])}: link it to the notes it belongs with.`,label:"Open note",run:()=>tt(W[0].n.id)});let ee=h.districts.filter(Q=>!Q.moc);i.hall&&ee.length&&Qt.push({text:`${mt(ee.length,"district")} have no town hall: the topic has no map note. The biggest is ${ee[0].name}.`,label:"Show district",run:()=>Dt(h.districts.indexOf(ee[0]))}),e.explain({plain:i.plain,about:i.about,legend:i.legend,insights:Qt}),e.controls({lines:[`Pick a ${i.tower} to see what it links to`]}),Mt();let Ae=performance.now(),Se=Q=>{z.forEach((St,Jt)=>V.setMatrixAt(Jt,w.makeTranslation(St.d.x+(((St.u+St.v*Q)%1+1)%1-.5)*(h.cell-2),St.y,St.d.z+St.z))),V.instanceMatrix.needsUpdate=!0,V.instanceColor&&(V.instanceColor.needsUpdate=!0)};Se(0);let q=0;return{targets:()=>c.filter(Q=>C==null||Q.d===C||Q.d<0).map(Q=>({at:[Q.x,Q.h/2,Q.z],r:Math.max(Q.w*.7,Math.min(Q.h*.3,1.5)),key:{kind:"note",id:Q.n.id,tip:`${f(Q)}${Q.level===0?" \xB7 dark":""}${Q.n.tasks?` \xB7 ${mt(Q.n.tasks,"open task")}`:""}`}})),click(Q){Q.kind==="note"&&tt(Q.id)},hover(Q){let St=Q&&Q.kind==="note"?Q.id:null;St!==B&&(B=St,Mt())},update(Q){"selected"in Q&&(O=Q.selected&&u.has(Q.selected)?Q.selected:null,Mt())},frame(){if(k)return;let Q=(performance.now()-Ae)/1e3;R.visible=Math.sin(Q*4)>-.3,Se(Q),clearTimeout(q),q=setTimeout(l,33)},stat:wt,today:()=>Yt&&Yt[0]?{text:`Darkest district: ${h.districts[Yt[1]].name} \xB7 ${mt(Yt[0],"stale note")}`,label:"Go there",run:()=>Dt(Yt[1])}:null,api:{back:()=>t.camera.position.distanceTo(t.centre),sky:()=>m?{hour:_,glow:m,stars:S&&b}:null,layout:()=>h,selected:()=>O,district:()=>C==null?null:h.districts[C].cluster,hold(){k=!0,R.visible=!0,l()},towers:()=>c.filter(Q=>Q.kind==="tower").length,stalls:()=>Wt.length,dark:()=>xt.length,halls:()=>Y.length,cranes:()=>W.length,tallest:()=>L?L.n.id:null},dispose(){k=!0,clearTimeout(q);for(let Q of[U,E,...v?[v]:[],N,R,V,J,H,...P.map(St=>St.mesh)])Q.material.map&&Q.material.map.dispose()}}}}),vf=fh(Ey);var Sf="#ef4444",Ay="#a8a29e",bf="#5e626d",wf=(i,t,e)=>new _t(i).lerp(new _t(t),e),Ef=fh({id:"city",name:"City",hint:"Notes as buildings: tall = relied on, lit = recent, grey = stale; town halls are maps",stage:{fog:[55,170],ambient:.6},tower:"building",hall:!0,cranes:!0,sky:i=>i<5||i>=21?"#4f5fc4":i<8?"#f9a8d4":i<17?"#7dd3fc":"#fb923c",ground:"#6b8f71",sheet:{wall:"#d9dbe3",pane:"#3d4352",lit:["#ffd977","#ffe9a8","#ffc94d"]},beacon:Sf,beaconName:"red",stall:Ay,arc:"#ffd977",wall:(i,t)=>t===0?wf(i,bf,.72):wf(i,"#ffffff",.18),lane:(i,t,e,n)=>({y:.1,z:(e%2?1:-1)*(n/2-.3),c:e%2?"#fef08a":"#f87171"}),stat:i=>`${mt(i.towers,"building")} \xB7 ${i.fresh} new this week \xB7 tallest: ${i.tallest}`,plain:"Picture your notes as a town. A tall building is a note everything else leans on. Lit windows mean someone has been in it lately; a grey building has been left alone for a long time.",about:"Each topic is a district and each note a building in the topic's colour. Height is how many notes link to it and how much runs through it; lit windows are how recently it was edited; grey is stale. A crane stands on a note written this week, a red beacon is an open task, the pale hall with a flag is the topic's map, and a stall on the street is a note in no topic.",legend:[{color:"#ffd977",text:"height = relied on, windows = recent"},{color:bf,text:"grey = stale"},{color:"#facc15",text:"crane = new this week"},{color:Sf,text:"beacon = open task"},{color:"#e5e7eb",text:"hall = the topic's map"}]});var Hn=18,ph=2.5,no=90,ts="#22c55e",Cl="#f87171",Tf=i=>ph+(Hn-ph)*(1-Math.min(1,Math.log1p(Math.max(0,i))/Math.log1p(365))),hi=i=>(i.taskAge!=null?i.taskAge:i.age)||0;function Ry(i){let t=i.nodes.filter(d=>!Re(d)&&d.tasks>0),e=new Map;for(let d of t)e.has(d.cluster)||e.set(d.cluster,[]),e.get(d.cluster).push(d);let n=new Map(i.clusters.map(d=>[d.id,d.name])),s=[...e.keys()].sort((d,u)=>e.get(u).length-e.get(d).length||d-u),r=Math.max(1,t.length),o=s.map(d=>Math.max(.25,e.get(d).length/r*2*Math.PI*.92+.08)),a=o.reduce((d,u)=>d+u,0)||1,l=-Math.PI/2,h=s.map((d,u)=>{let f=o[u]/a*2*Math.PI,p={cluster:d,name:n.get(d)||"No topic",a0:l,a1:l+f,n:e.get(d).length};return l+=f,p}),c=[];for(let d of h)for(let u of e.get(d.cluster)){let f=nn(u.id),p=d.a0+(d.a1-d.a0)*(.1+.8*(f%100/100)),M=Math.max(ph*.6,Math.min(Hn,Tf(hi(u))+((f>>>7)%41-20)/20));c.push({n:u,x:Math.cos(p)*M,z:Math.sin(p)*M,r:.28+.16*Math.sqrt(u.tasks),h:.6+.9*u.tasks,holding:hi(u)>no})}return{blips:c,sectors:h,hold:Tf(no),tasks:t.reduce((d,u)=>d+u.tasks,0),notes:t.length}}var Af={id:"radar",name:"Radar",hint:"Open tasks as blips by how long they've waited; red = 90+ days",home:{yaw:0,pitch:1.5,dist:46,min:14,max:110,minPitch:.55,maxPitch:1.5,pan:!0},stage:{fog:!1,ambient:1},actions:["graph","triage"],build({stage:i,frame:t,orbit:e,data:n,inputs:s,onOpen:r,onAction:o,theme:a,invalidate:l}){let h=Ry(n),c=new Map(h.blips.map(H=>[H.n.id,H])),d=H=>(i.scene.add(H),H),u=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,f=H=>(H.rotation.x=-Math.PI/2,H);if(h.notes<1){let H=()=>"No open tasks";return t.stat(H()),t.controls({at:"centre",lines:["Radar shows the notes that have open tasks.","No note has one."],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>o("graph")}]}),{targets:()=>[],click(){},update(){},stat:H,today:()=>null,api:{empty:!0}}}let p=new Ht,M=new _t,x=(H,L,O)=>{let B=new ie().setAttribute("position",new Lt(H,3));return d(new He(B,new Fe({color:L,transparent:!0,opacity:O})))};d(f(new qt(new Un(Hn,64),new oe({color:"#04140b"}))));let g=(H,L,O,B=.05)=>d(f(new qt(new ii(H-B,H+B,96),new oe({color:L,transparent:!0,opacity:O,side:me})))).position.set(0,.02,0);h.sectors.forEach((H,L)=>{let O=d(f(new qt(new Un(Hn,24,-H.a1,H.a1-H.a0),new oe({color:a.palette[L%a.palette.length],transparent:!0,opacity:.3,side:me}))));O.position.y=.01});for(let H=1;H<=4;H++)g(Hn*H/4,ts,.25);g(h.hold,Cl,.7,.07),x(h.sectors.flatMap(H=>[0,.03,0,Math.cos(H.a0)*Hn,.03,Math.sin(H.a0)*Hn]),ts,.3);let y=d(f(new qt(new Un(Hn,32,0,.7),new oe({color:ts,transparent:!0,opacity:.22,side:me}))));y.position.y=.05;let w=d(new fe(new Me(1,1,1,14),new oe,h.blips.length));w.frustumCulled=!1;let _=s.selected&&c.has(s.selected)?s.selected:null,S=null,b=u,m=()=>S||_,v=H=>jt(H.n.name,30),U=()=>{let H=m()&&c.get(m());return H?`${v(H)} \xB7 ${mt(H.n.tasks,"open task")} \xB7 waiting ${hi(H.n)} days`:`${mt(h.tasks,"open task")} \xB7 ${mt(h.notes,"note")}`},E=(H,L)=>M.set(H).multiplyScalar(L);function P(){let H=m();h.blips.forEach((O,B)=>{let C=!H||O.n.id===H,k=O.r*(O.n.id===H?1.5:1);p.makeScale(k,O.h,k).setPosition(O.x,O.h/2,O.z),w.setMatrixAt(B,p),w.setColorAt(B,C?M.set(O.n.id===H?a.fg:O.holding?Cl:ts):E(O.holding?Cl:ts,.25))}),w.instanceMatrix.needsUpdate=!0,w.instanceColor&&(w.instanceColor.needsUpdate=!0);let L=h.sectors.map(O=>{let B=(O.a0+O.a1)/2;return{text:`${jt(O.name,24).toUpperCase()} \xB7 ${O.n}`,at:[Math.cos(B)*(Hn+1.2),0,Math.sin(B)*(Hn+1.2)],color:ts}});for(let O of[...h.blips].sort((B,C)=>C.n.tasks-B.n.tasks).slice(0,8))L.push({text:`${jt(O.n.name,22)} \xB7 ${O.n.tasks}`,at:[O.x,O.h,O.z],dy:-10,color:O.holding?"#fecaca":"#bbf7d0"});if(H){let O=c.get(H);L.unshift({text:v(O),at:[O.x,O.h,O.z],strong:!0,dy:-18,run:()=>N(H),title:`Open ${v(O)}`})}t.labels(L),t.stat(U())}function N(H){_=H,P(),l(),r(H)}let F=h.blips.filter(H=>H.holding),R=[...h.blips].sort((H,L)=>hi(L.n)-hi(H.n))[0],z=[];F.length&&z.push({text:`${mt(F.length,"note")} ${F.length===1?"has":"have"} a task waiting more than ${no} days. Each is either still wanted or can be crossed off.`,label:"Triage",run:()=>o("triage")}),R&&hi(R.n)>30&&z.push({text:`${jt(R.n.name,40)} has waited longest: ${hi(R.n)} days.`,label:"Open note",run:()=>N(R.n.id)});let V=h.sectors[0];V&&h.sectors.length>1&&z.push({text:`${V.name} holds the most notes with open tasks (${V.n} of ${h.notes}).`,label:"Open its busiest",run:()=>N(h.blips.filter(H=>H.n.cluster===V.cluster).sort((H,L)=>L.n.tasks-H.n.tasks)[0].n.id)}),t.explain({plain:"Picture a radar screen. Every note with an open task is a blip. The longer its oldest task has waited, the closer to the middle it drifts, and inside the red ring it has been waiting more than three months.",about:"Each topic has a slice of the screen and each note with open tasks is a blip in its slice. Distance from the centre is how long the oldest open task has waited (a year or more sits in the middle). The size of a blip, and the height of its column when you tilt, is how many open tasks it holds. Tick tasks off in the note and its blip drifts away or goes.",legend:[{color:ts,text:"note with open tasks"},{color:Cl,text:"oldest task 90+ days"},{color:"#6b7280",text:"nearer the middle = waited longer"}],insights:z});let J=()=>t.controls({lines:[F.length?`${mt(F.length,"note")} holding past ${no} days`:"Pick a blip to open its note"],buttons:[{label:e.tilted?"Flat":"Tilt",title:e.tilted?"Look straight down again":"Tilt into 3D: a blip becomes a column as tall as its task count",run:()=>{e.tilt(),J()}},...F.length?[{label:"Triage",title:"Go through the open tasks one by one",run:()=>o("triage")}]:[]]});J(),P();let W=performance.now(),Y=0,j=H=>{y.rotation.z=-(H*.5%(2*Math.PI))};return j(0),{targets:()=>h.blips.map(H=>({at:[H.x,H.h/2,H.z],r:Math.max(.7,H.r*1.3),key:{kind:"note",id:H.n.id,tip:`${H.n.name} \xB7 ${mt(H.n.tasks,"open task")} \xB7 waiting ${hi(H.n)} days`}})),click(H){H.kind==="note"&&N(H.id)},hover(H){let L=H&&H.kind==="note"?H.id:null;L!==S&&(S=L,P())},update(H){"selected"in H&&(_=H.selected&&c.has(H.selected)?H.selected:null,P())},frame(){b||(j((performance.now()-W)/1e3),clearTimeout(Y),Y=setTimeout(l,33))},stat:U,today:()=>F.length?{text:`${mt(F.length,"note")} ${F.length===1?"has":"have"} tasks waiting ${no}+ days \xB7 oldest: ${jt(R.n.name,30)} (${hi(R.n)} days)`,label:"Triage",run:()=>o("triage")}:null,api:{layout:()=>h,selected:()=>_,hold(){b=!0,l()},blips:()=>h.blips.length,holding:()=>F.length,tilted:()=>e.tilted},dispose(){b=!0,clearTimeout(Y)}}}};var Pl=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Rf=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],io=3.2,so=1.5,Cf=1.2,Cy=2.2,Iy=12,Py=3,Il="#fde047",Uy=[{key:"wd",n:7,name:"WEEK",labels:Pl},{key:"mo",n:12,name:"YEAR",labels:Rf}],ui=(i,t)=>i/t*2*Math.PI-Math.PI/2;function Ny(i,t=new Date,e=!1){let n=new Map(i.clusters.map(u=>[u.id,u.name])),s=Object.entries(i.rhythm||{}).map(([u,f])=>({cluster:+u,name:n.get(+u)||"No topic",wd:f.wd,mo:f.mo,tot:f.wd.reduce((p,M)=>p+M,0)})).filter(u=>u.tot>=Py&&n.has(u.cluster)).sort((u,f)=>u.tot-f.tot||u.cluster-f.cluster).slice(-Iy),r=io+s.length*so,o=r+3,a=Uy.map((u,f)=>{let p=new Array(u.n).fill(0);s.forEach(x=>x[u.key].forEach((g,y)=>{p[y]+=g}));let M=(f?1:-1)*o;return{...u,centre:e?[0,M]:[M,0],totals:p,peak:p.indexOf(Math.max(...p))}}),l=[];a.forEach((u,f)=>s.forEach((p,M)=>{let x=Math.max(1,...p[u.key]);for(let g=0;g<u.n;g++){let y=p[u.key][g],w=y/x;l.push({dial:f,ring:M,s:g,v:y,t:w,cluster:p.cluster,a0:ui(g,u.n),a1:ui(g+1,u.n),r0:io+M*so,r1:io+M*so+Cf,h:y?.15+Cy*w:.04})}}));let h=(t.getDay()+6)%7,c=new Date(t.getFullYear(),t.getMonth()+1,0).getDate(),d=t.getMonth();return{rings:s,dials:a,cells:l,rOut:r,now:{wd:h,mo:d,frac:{wd:(h+(t.getHours()+t.getMinutes()/60)/24)/7,mo:(d+(t.getDate()-1+t.getHours()/24)/c)/12}}}}var mh=(i,t)=>i[t].indexOf(Math.max(...i[t])),If={id:"clock",name:"Heat clock",hint:"When each topic comes up: weekday and month dials, hotter = more mentions",home:{yaw:0,pitch:1.5,dist:60,min:20,max:140,minPitch:.55,maxPitch:1.5,pan:!0},stage:{fog:!1,ambient:1},actions:["graph"],build({stage:i,frame:t,orbit:e,data:n,inputs:s,onOpen:r,onAction:o,theme:a,invalidate:l}){let h=(i.camera.aspect||1)<1,c=Ny(n,s.now||new Date,h),d=C=>(i.scene.add(C),C);if(c.rings.length<1){let C=()=>"No weekday or month pattern yet";return t.stat(C()),t.controls({at:"centre",lines:["The Heat clock shows when each topic comes up in your daily notes.","There is no pattern to show yet."],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>o("graph")}]}),{targets:()=>[],click(){},update(){},stat:C,today:()=>null,api:{empty:!0}}}let u=C=>a.palette[Math.max(0,n.clusters.findIndex(k=>k.id===C))%a.palette.length],f=new _t("#1f2933"),p=new _t("#1a2027"),M=new _t,x=new _t,g=(C,k,K)=>[C.centre[0]+Math.cos(k)*K,C.centre[1]+Math.sin(k)*K],y=[],w=[],_=C=>C.n===7?3:2,S=(...C)=>{for(let k of C)y.push(k[0],k[1],k[2])};for(let C of c.cells){let k=c.dials[C.dial],K=y.length/3,et=_(k),ot=(C.a1-C.a0)/et,xt=.012,ft=(tt,It,Dt)=>{let[Yt,Wt]=g(k,tt,It);return[Yt,Dt,Wt]};for(let tt=0;tt<et;tt++){let It=C.a0+tt*ot+(tt===0?xt:0),Dt=C.a0+(tt+1)*ot-(tt===et-1?xt:0);S(ft(It,C.r0,C.h),ft(Dt,C.r0,C.h),ft(Dt,C.r1,C.h),ft(It,C.r0,C.h),ft(Dt,C.r1,C.h),ft(It,C.r1,C.h)),S(ft(It,C.r1,0),ft(Dt,C.r1,0),ft(Dt,C.r1,C.h),ft(It,C.r1,0),ft(Dt,C.r1,C.h),ft(It,C.r1,C.h)),S(ft(It,C.r0,0),ft(Dt,C.r0,C.h),ft(Dt,C.r0,0),ft(It,C.r0,0),ft(It,C.r0,C.h),ft(Dt,C.r0,C.h))}let wt=C.a0+xt,Mt=C.a1-xt;S(ft(wt,C.r0,0),ft(wt,C.r1,0),ft(wt,C.r1,C.h),ft(wt,C.r0,0),ft(wt,C.r1,C.h),ft(wt,C.r0,C.h)),S(ft(Mt,C.r0,0),ft(Mt,C.r1,C.h),ft(Mt,C.r1,0),ft(Mt,C.r0,0),ft(Mt,C.r0,C.h),ft(Mt,C.r1,C.h)),w.push([K,y.length/3-K,et*6])}let b=new ie().setAttribute("position",new Lt(y,3)),m=new Lt(new Float32Array(y.length),3);b.setAttribute("color",m),d(new qt(b,new oe({vertexColors:!0,side:me}))).frustumCulled=!1;let v=[],U=[];c.dials.forEach(C=>{let k=c.now.frac[C.key],K=ui(k*C.n,C.n),et=c.now[C.key],ot=io-.6,xt=c.rOut+.4,[ft,wt]=g(C,K,ot),[Mt,tt]=g(C,K,xt);v.push(ft,.3,wt,Mt,.3,tt);for(let It of[ui(et,C.n),ui(et+1,C.n)]){let[Dt,Yt]=g(C,It,ot),[Wt,Bt]=g(C,It,xt);U.push(Dt,.3,Yt,Wt,.3,Bt)}});let E=(C,k)=>{let K=new ie().setAttribute("position",new Lt(C,3));return d(new He(K,new Fe({color:Il,transparent:!0,opacity:k})))};E(v,1),E(U,.55),c.dials.forEach(C=>{let k=ui(c.now.frac[C.key]*C.n,C.n),[K,et]=g(C,k,c.rOut+.4);d(new qt(new de(.4,12,8),new oe({color:Il}))).position.set(K,.3,et)});let P=new Map(c.rings.map(C=>[C.cluster,C])),N=C=>n.nodes.filter(k=>k.cluster===C&&!Re(k)).sort((k,K)=>K.inlinks+K.outlinks-(k.inlinks+k.outlinks)||(k.id<K.id?-1:1)),F=null,R=null,z=C=>c.dials[C.dial].labels[C.s],V=C=>Math.round(100*C.v/Math.max(1,P.get(C.cluster).tot)),J=new Map(c.cells.map((C,k)=>[`${C.dial}:${C.ring}:${C.s}`,k])),W=()=>{let C=R!=null&&c.cells[R];if(C)return`${jt(P.get(C.cluster).name,28)} \xB7 ${z(C)} \xB7 ${mt(C.v,"mention")}`;if(F!=null){let k=P.get(F);return`${jt(k.name,28)} \xB7 busiest ${Pl[mh(k,"wd")]} \xB7 ${Rf[mh(k,"mo")]} \xB7 ${mt(k.tot,"mention")}`}return`${mt(c.rings.length,"topic")} \xB7 busiest ${c.dials[0].labels[c.dials[0].peak]} \xB7 ${c.dials[1].labels[c.dials[1].peak]}`};function Y(){let C=m.array;c.cells.forEach((K,et)=>{let ot=F==null||K.cluster===F,[xt,ft,wt]=w[et],Mt=et===R;K.v?x.copy(f).lerp(M.set(u(K.cluster)),.15+.85*K.t):x.copy(p),ot||x.multiplyScalar(.3),Mt&&x.lerp(M.set(a.fg),.35);for(let tt=0;tt<ft;tt++){let It=tt<wt?1:.62;C[(xt+tt)*3]=x.r*It,C[(xt+tt)*3+1]=x.g*It,C[(xt+tt)*3+2]=x.b*It}}),m.needsUpdate=!0;let k=[];if(c.dials.forEach(K=>{K.labels.forEach((et,ot)=>{let xt=(ui(ot,K.n)+ui(ot+1,K.n))/2,[ft,wt]=g(K,xt,c.rOut+1.6);k.push({text:et,at:[ft,0,wt],color:ot===c.now[K.key]?Il:"#e2e8f0"})}),k.push({text:K.name,at:[K.centre[0],0,K.centre[1]],dy:-8,color:"#94a3b8"},{text:`busiest: ${K.labels[K.peak]}`,at:[K.centre[0],0,K.centre[1]],dy:8,color:"#f8fafc"})}),F!=null){let K=N(F)[0],et=P.get(F),ot=c.dials[0],xt=c.rings.indexOf(et),[ft,wt]=g(ot,ui(0,7),io+xt*so+Cf/2);k.push({text:jt(et.name,26),at:[ft,.5,wt],strong:!0,dy:-10,...K?{run:()=>r(K.id),title:`Open ${K.name}`}:{}})}t.labels(k),t.stat(W())}function j(C){F=F===C?null:C,Y(),O(),l()}let H=c.rings.filter(C=>C.tot>=10).map(C=>({r:C,k:Math.max(...C.wd)/C.tot})).sort((C,k)=>k.k-C.k)[0],L=[];L.push({text:`Mentions peak on ${c.dials[0].labels[c.dials[0].peak]} and in ${c.dials[1].labels[c.dials[1].peak]}.`,label:"Busiest topic",run:()=>j(c.rings[c.rings.length-1].cluster)}),H&&H.k>.3&&L.push({text:`${H.r.name} clusters on ${Pl[mh(H.r,"wd")]}: ${Math.round(H.k*100)}% of its mentions.`,label:"Show its ring",run:()=>j(H.r.cluster)}),t.explain({plain:"Picture two clock faces. One is a week, one is a year, and each topic is a ring on both. A cell glows when that topic comes up in your daily notes on that weekday or in that month.",about:"Each ring is a topic, the busiest outside. A cell's heat, and its height when you tilt, is that topic's share of its own mentions that fall on that weekday or month, so a bright cell is where the topic peaks. It counts mentions in daily notes, not hours worked. The yellow hand is right now.",legend:[{color:a.fg,text:"bright, tall cell: the topic's busiest weekday or month"},{color:"#1f2933",text:"dark cell: rarely"},{color:Il,text:"now"}],insights:L});function O(){let C=F!=null?N(F)[0]:null;t.controls({lines:[F!=null?`${P.get(F).name}`:"Pick a ring to see its topic"],buttons:[...C?[{label:`Open ${jt(C.name,18)}`,title:`Open ${C.name}, the topic's most linked note`,run:()=>r(C.id)}]:[],...F!=null?[{label:"Clear",title:"Show every topic again",run:()=>j(F)}]:[],{label:e.tilted?"Flat":"Tilt",title:e.tilted?"Look straight down again":"Tilt into 3D: a cell is as tall as its heat",run:()=>{e.tilt(),O()}}]})}O(),Y();let B=c.rings[c.rings.length-1];return{targets:()=>c.cells.map((C,k)=>{let K=c.dials[C.dial],et=(C.a0+C.a1)/2,[ot,xt]=g(K,et,(C.r0+C.r1)/2),ft=(C.a1-C.a0)*(C.r0+C.r1)/2;return{at:[ot,C.h/2,xt],r:Math.max(.55,Math.min(so*.6,ft*.4)),key:{kind:"ring",id:C.cluster,cell:k,tip:`${P.get(C.cluster).name} \xB7 ${z(C)} \xB7 ${mt(C.v,"mention")} (${V(C)}%)`}}}),click(C){C.kind==="ring"&&j(C.id)},hover(C){let k=C&&C.kind==="ring"?C.cell:null;k!==R&&(R=k,Y())},update(){},stat:W,today(){let C=c.now.wd,k=c.rings.map(et=>({r:et,k:et.wd[C]/et.tot})).sort((et,ot)=>ot.k-et.k)[0],K=k&&N(k.r.cluster)[0];return k&&k.k>0?{text:`It is ${Pl[C]}: ${jt(k.r.name,30)} usually comes up most on this day (${Math.round(k.k*100)}% of its mentions)`,label:K?"Open note":"Show ring",run:()=>K?r(K.id):j(k.r.cluster)}:null},api:{layout:()=>c,focus:()=>F,hovered:()=>R,tilted:()=>e.tilted,rings:()=>c.rings.length,cells:()=>c.cells.length,vertical:()=>h,cell:(C,k,K)=>J.get(`${C}:${k}:${K}`),top:()=>B&&B.cluster},dispose(){}}}};var gh=4,Fy=1.15,Df=4,Pf="#f87171",Uf="#fde047",Nf="#22d3ee",Dy=2.399963;function Ly(i,t){let e=new Map(t.ids.map((f,p)=>[f,p])),n=Ze(i.nodes),s=Pi(i),r=new Map,o=new Map,a=(f,p,M)=>{f.has(p)||f.set(p,[]),f.get(p).push(M)};for(let[f,p]of t.edges)a(r,t.ids[f],t.ids[p]),a(o,t.ids[p],t.ids[f]);let l=i.nodes.filter(f=>e.has(f.id)&&!Re(f)&&!f.isolated),h=Math.max(2,Math.ceil(Math.max(1,...l.map(f=>t.level[e.get(f.id)])))),c=Array.from({length:h},()=>[]);for(let f of l)c[Math.max(0,Math.min(h-1,Math.round(t.level[e.get(f.id)])-1))].push(f);let d=[];c.forEach((f,p)=>{f.sort((M,x)=>M.cluster-x.cluster||n(x)-n(M)),f.forEach((M,x)=>{let g=t.level[e.get(M.id)],y=Fy*Math.sqrt(x+.5)*1.5,w=x*Dy,_=(o.get(M.id)||[]).length;d.push({n:M,x:y*Math.cos(w),z:y*Math.sin(w),y:(g-1)*gh,r:.3+.9*Math.sqrt(Math.max(0,n(M))),level:g,band:p,reliedOn:_,leansOn:(r.get(M.id)||[]).length,endangered:_>=Df&&s(M)})})});let u=Math.max(4,...d.map(f=>Math.hypot(f.x,f.z)))+2;return{notes:d,bands:c.map(f=>f.length),radius:u,up:f=>o.get(f)||[],down:f=>r.get(f)||[]}}var Ff=(i,t,e)=>new _t(i).lerp(new _t(t),e),Lf={id:"foodweb",name:"Food web",hint:"Which notes feed which: the notes everything rests on at the base, logs and plans on top, stale ones others rest on in red",home:{yaw:.6,pitch:.3,dist:46,min:10,max:130},stage:{fog:[60,190],ambient:.5},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=Ly(e,n.web),h=l.notes,c=n.web.stats,d=W=>(i.scene.add(W),W);if(h.length<3){let W=()=>mt(h.length,"note");return t.stat(W()),t.controls({at:"centre",lines:["The Food web needs notes that link to one another.",`${mt(h.length,"note")} so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:W,today:()=>null,api:{empty:!0}}}let u=new Map(h.map(W=>[W.n.id,W])),f=W=>W.n.name,p=new Ht,M=W=>W.endangered?Pf:o.palette[(W.n.cluster||0)%o.palette.length],x=l.bands.map((W,Y)=>{if(!W)return null;let j=d(new qt(new Un(l.radius,48),new oe({color:Ff(o.palette[Y%o.palette.length],o.bg,.9),transparent:!0,opacity:.55,side:me})));return j.rotation.x=-Math.PI/2,j.position.y=Y*gh-.4,j.frustumCulled=!1,j}),g=d(new fe(new de(1,14,10),new oe,h.length));g.frustumCulled=!1;let y=W=>d(new He(new ie,new Fe({color:W,transparent:!0,opacity:.9}))),w=y(Uf),_=y(Nf);w.frustumCulled=_.frustumCulled=!1;let S=n.selected&&u.has(n.selected)?n.selected:null,b=null,m=()=>b||S,v=new Set,U=h.filter(W=>W.endangered),E=W=>W.endangered?" \xB7 stale, others rest on it":"",P=()=>{let W=m()&&u.get(m());return W?`${f(W)} \xB7 rests on ${mt(W.leansOn,"note")} \xB7 ${mt(W.reliedOn,"note")} rest on it${E(W)}`:`mean level ${c.mean.toFixed(1)} \xB7 top ${c.maxLevel.toFixed(1)} \xB7 incoherence ${c.incoherence.toFixed(2)} \xB7 ${mt(U.length,"endangered note")}`},N=(W,Y,j)=>j.push(W.x,W.y,W.z,Y.x,Y.y,Y.z);function F(){let W=m();v.clear(),W&&(v.add(W),l.up(W).forEach(L=>v.add(L)),l.down(W).forEach(L=>v.add(L))),h.forEach((L,O)=>{g.setMatrixAt(O,p.makeScale(L.r,L.r,L.r).setPosition(L.x,L.y,L.z)),g.setColorAt(O,Ff(M(L),o.bg,!W||v.has(L.n.id)?0:.8))}),g.instanceMatrix.needsUpdate=!0,g.instanceColor.needsUpdate=!0;let Y=[],j=[];if(W){let L=u.get(W);l.up(W).forEach(O=>u.has(O)&&N(u.get(O),L,Y)),l.down(W).forEach(O=>u.has(O)&&N(L,u.get(O),j))}w.geometry.setAttribute("position",new Lt(Y,3)),w.visible=Y.length>0,_.geometry.setAttribute("position",new Lt(j,3)),_.visible=j.length>0;let H=l.bands.map((L,O)=>L?{text:`${O===0?"Level 1 \xB7 the base":"Level "+(O+1)} (${L})`,at:[-l.radius,O*gh,0],color:"#bbf7d0"}:null).filter(Boolean);if(W){let L=u.get(W);H.unshift({text:jt(f(L),34),at:[L.x,L.y+L.r,L.z],strong:!0,dy:-18,run:()=>R(W),title:`Open ${f(L)}`})}t.labels(H),t.stat(P())}function R(W){S=W,F(),a(),s(W)}let z=[...U].sort((W,Y)=>Y.reliedOn-W.reliedOn)[0],V=[...h].filter(W=>W.band===0).sort((W,Y)=>Y.reliedOn-W.reliedOn)[0],J=[];return z&&J.push({text:`${f(z)} holds up ${mt(z.reliedOn,"note")} and has not been edited in ${z.n.age} days. Open it and decide whether it is still true.`,label:"Open note",run:()=>R(z.n.id)}),V&&V.reliedOn&&J.push({text:`${f(V)} is the most relied-on note at the base: ${mt(V.reliedOn,"note")} rest on it.`,label:"Open note",run:()=>R(V.n.id)}),t.explain({plain:"Picture a food chain. The notes everything rests on are the plants at the bottom; logs and plans that mostly point at other notes are the animals at the top. If a note at the bottom goes out of date, everything standing on it is built on something stale.",about:`A note rests on the notes it links to, so each note gets a level: the more links lead up from the base to it, the higher it sits. Level is worked out so that every link climbs by about one; incoherence ${c.incoherence.toFixed(2)} is how far the links are from a clean hierarchy (0 is a clean one, 1 shows no direction at all). A red sphere is a note ${Df} or more notes link to that has not been edited within the vault's stale limit. Pick a note: yellow lines go to the notes resting on it, blue to the notes it rests on.`,legend:[{color:"#bbf7d0",text:"height = level, the base at the bottom"},{color:Pf,text:"stale, and others rest on it"},{color:Uf,text:"rests on the picked note"},{color:Nf,text:"the picked note rests on"}],insights:J}),t.controls({lines:["Pick a note to see what rests on it"]}),F(),{targets:()=>h.map(W=>({at:[W.x,W.y,W.z],r:Math.max(W.r*1.2,.9),key:{kind:"note",id:W.n.id,tip:`${f(W)} \xB7 level ${W.level.toFixed(1)}${E(W)}`}})),click(W){W.kind==="note"&&R(W.id)},hover(W){let Y=W&&W.kind==="note"?W.id:null;Y!==b&&(b=Y,F())},update(W){"selected"in W&&(S=W.selected&&u.has(W.selected)?W.selected:null,F())},stat:P,today:()=>z?{text:`${f(z)} is stale and ${mt(z.reliedOn,"note")} rest on it`,label:"Open note",run:()=>R(z.n.id)}:null,api:{layout:()=>l,selected:()=>S,hold(){},notes:()=>h.length},dispose(){for(let W of[...x.filter(Boolean),g,w,_])W.geometry.dispose(),W.material.dispose()}}}};function Hs(i,t,e,n){return i.stat(e),i.controls({at:"centre",lines:n,buttons:[{label:"Open the graph",title:"Open the graph",run:()=>t("graph")}]}),{targets:()=>[],click(){},update(){},stat:()=>e,today:()=>null,api:{empty:!0}}}var _h=[8,18,32],Wn=[6,9,12],Of=40,Bf="#ef4444",Ul="#60a5fa",Nl=[[1.15,0,.3,"ZXY"],[1.15,0,.3+Math.PI/3,"ZXY"],[1.15,0,.3+2*Math.PI/3,"ZXY"]],By=2.399963,ro=.95;function xh(i,t){let{own:e,adj:n}=to(i.nodes,i.links),s=Ze(i.nodes),r=(m,v)=>s(e.get(v))-s(e.get(m))||(m<v?-1:1),o=[...e.keys()].filter(m=>n.get(m).size).sort(r);if(!o.length)return{centre:null,linked:0};let a=t&&e.has(t)&&n.get(t).size?t:o[0],l=new Map([[a,0]]),h=[a];for(let m=0;m<h.length;m++)for(let v of n.get(h[m]))l.has(v)||(l.set(v,l.get(h[m])+1),h.push(v));let c=_h.map((m,v)=>{let U=h.filter(E=>l.get(E)===v+1).sort(r);return{all:U.length,ids:U.slice(0,m)}}),d=new Set,u=new Set;for(let m of i.links)m.kind==="link"&&m.source!==m.target&&e.has(m.source)&&e.has(m.target)&&(m.target===a&&d.add(m.source),m.source===a&&u.add(m.target));let f=d.size,p=u.size,M=f+p,x=Math.min(M,Of),g=M?Math.max(f?1:0,Math.min(x-(p?1:0),Math.round(x*f/M))):0,y=[];for(let m=0,v=0;m<x;m++){let U=x>1?ro*.92*Math.cbrt(m+.35):0,E=1-2*((m*.618034+.5)%1),P=Math.sqrt(1-E*E),N=m*By,F=Math.floor((m+1)*g/x)>v;F&&v++,y.push({at:[U*P*Math.cos(N),U*E,U*P*Math.sin(N)],proton:F})}let w=new G,_=[];c.forEach((m,v)=>{let U=new ln(...Nl[v]);m.ids.forEach((E,P)=>{let N=P/m.ids.length*Math.PI*2+v*.7;w.set(Wn[v]*Math.cos(N),Wn[v]*Math.sin(N),0).applyEuler(U),_.push({id:E,shell:v,at:[w.x,w.y,w.z],r:.5+.5*Math.sqrt(Math.max(0,s(e.get(E))))})})});let S=c.map((m,v)=>{let U=.5/Math.max(1,m.ids.length)*Math.PI*2+v*.7+Math.PI;return w.set(Wn[v]*Math.cos(U),Wn[v]*Math.sin(U),0).applyEuler(new ln(...Nl[v])),[w.x,w.y,w.z]}),b=h[h.length-1];return{centre:a,own:e,protons:f,neutrons:p,shells:c,electrons:_,gaps:S,nucleus:y,nucleusR:ro*(1+.92*Math.cbrt(Math.max(x,1))),dist:m=>l.has(m)?l.get(m):null,within:h.filter(m=>l.get(m)>=1&&l.get(m)<=_h.length).length,linked:o.length,unreached:o.filter(m=>!l.has(m)),far:{id:b,d:l.get(b)}}}var kf=["one link away","two links away","three links away"],Vf={id:"atom",name:"Atom",hint:"One note as an atom: its links are the nucleus, the notes one, two and three links away its shells",drift:.08,home:{yaw:.25,pitch:.2,dist:33,min:10,max:160,minPitch:-1.4},stage:{light:"camera",fog:[70,240],ambient:.55,glow:{strength:.9,radius:.7,threshold:.5}},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=xh(e,n.selected),h=null,c=null,d=null,u=null,f=[];if(!l.centre)return Hs(t,r,mt(e.nodes.length,"note"),["The Atom needs notes that link to one another.","No written links yet."]);let p=b=>l.own.get(b).name,M=b=>o.palette[(l.own.get(b).cluster||0)%o.palette.length],x=[],g=()=>new un({color:"#ffffff",specular:"#777777",shininess:55}),y=()=>`${p(l.centre)} \xB7 ${mt(l.protons,"link")} in \xB7 ${l.neutrons} out \xB7 ${l.shells.map(b=>b.all).join(", ")} notes one, two and three links away`;function w(){h&&ci(i.scene,h),h=new rn;let b=()=>new de(1,24,16);h.add(Mn(b(),g(),l.nucleus,(R,z,V)=>(V.makeScale(ro,ro,ro).setPosition(...R.at),R.proton?Bf:Ul))),f=[[1.35,.16],[1.9,.07]].map(([R,z])=>{let V=new qt(new de(l.nucleusR*R,32,16),new oe({color:Ul,transparent:!0,opacity:z,blending:_n,depthWrite:!1,side:Ce}));return h.add(V),V});let m=Nl.map(R=>new ln(...R)),v=new G;c=fn(9,(R,z)=>{let V=Math.floor(R/3),J=z*(.9-.25*V)+R%3*Math.PI*2/3;return v.set(Wn[V]*Math.cos(J),Wn[V]*Math.sin(J),0).applyEuler(m[V]).toArray()},{size:5,color:"#bfdcff"}),h.add(c.object),d=fn(63,(R,z)=>{let V=R%9,J=Math.floor(R/9)+1,W=Math.floor(V/3),Y=z*(.9-.25*W)+V%3*Math.PI*2/3-J*.09;return v.set(Wn[W]*Math.cos(Y),Wn[W]*Math.sin(Y),0).applyEuler(m[W]).toArray()},{size:2.6,color:"#6aa8ff",opacity:.55}),h.add(d.object);let U=720,E=R=>[Wn[R%3],(R*2654435761>>>0)%10007/10007,(R*40503>>>0)%7919/7919,(R*69069>>>0)%6007/6007];u=fn(U,(R,z)=>{let[V,J,W,Y]=E(R),j=J*Math.PI*2+.05*z*(1+R%3),H=Math.acos(2*W-1),L=V*(1+.16*(Y-.5)+.02*Math.sin(z*2+R));return[L*Math.sin(H)*Math.cos(j),L*Math.cos(H),L*Math.sin(H)*Math.sin(j)]},{size:1.6,color:"#7fb6ff",opacity:.5}),h.add(u.object),l.shells.forEach((R,z)=>{let V=new qt(new On(Wn[z],.16-.04*z,8,160),new oe({color:Ie(Ul,o.fg,.35+.15*z),transparent:!0,opacity:R.ids.length?.85-.2*z:.25}));V.rotation.set(...Nl[z]),h.add(V)}),h.add(Mn(b(),g(),l.electrons,(R,z,V)=>(V.makeScale(R.r,R.r,R.r).setPosition(...R.at),M(R.id)))),i.scene.add(h);let P=[{text:jt(p(l.centre),34),at:[0,l.nucleusR,0],strong:!0,dy:-18,run:()=>s(l.centre),title:`Open ${p(l.centre)}`}];l.shells.forEach((R,z)=>{R.ids.length&&P.push({text:`${kf[z]} (${R.ids.length<R.all?`${R.ids.length} of ${R.all}`:R.all})`,at:l.gaps[z],color:o.muted,dy:14})});for(let R of l.electrons.filter(z=>z.shell===0).slice(0,4))P.push({text:jt(p(R.id),22),at:R.at,dy:-16,run:()=>E(R.id),title:`Open ${p(R.id)}`});t.labels(P),t.stat(y());let N=l.unreached[0],F=[];F.push({text:`${l.within} of ${mt(l.linked-1,"other linked note")} are within three links of ${p(l.centre)}.${l.far.d>3?` The farthest, ${p(l.far.id)}, is ${l.far.d} links away.`:""}`,...l.far.d>3?{label:"Open farthest",run:()=>E(l.far.id)}:{}}),l.shells[0].all===1&&F.push({text:`One link holds ${p(l.centre)} to the rest of the vault. A second link from a related note keeps it reachable if that one goes.`,label:"Open its neighbour",run:()=>E(l.shells[0].ids[0])}),N&&F.push({text:`${mt(l.unreached.length,"linked note")} can't be reached from here by any chain of links. ${p(N)} is the most relied-on of them.`,label:"Open note",run:()=>E(N)}),t.explain({plain:"Picture one note as an atom. Its own links are packed in the middle. The notes one link away circle closest, the notes two links away further out, and so on. A full, close shell means the note is well tied in.",about:`The nucleus is ${p(l.centre)}: a red ball for each note that links to it and a blue ball for each note it links to (at most ${Of} are drawn, in the same share). Each shell holds the notes that many written links away, the most relied-on first; a shell shows at most ${_h.join(", ")} of them, as an atom's shells do, and its label says how many there are in all. An electron takes its topic's colour and is bigger the more the vault leans on it.`,legend:[{color:Bf,text:"a note that links to it"},{color:Ul,text:"a note it links to"},{color:o.palette[0],text:"electron = a note, shell = links away, colour = topic"}],insights:F}),t.controls({lines:["Pick an electron to make it the nucleus"],buttons:[{label:"\u2039 Back",title:"Back to the note before",off:!x.length,run:()=>{l=xh(e,x.pop()),w(),a()}},{label:p(l.centre),title:`Open ${p(l.centre)}`,wide:!0,run:()=>s(l.centre)}]})}function _(b){if(b===l.centre||!l.own.has(b))return;let m=xh(e,b);m.centre===b&&(x.push(l.centre),l=m,w())}function S(b){_(b),a(),s(b)}return i.sky({top:"#02050f",haze:"#0b1432",stars:500,starColor:"#cfe0ff"}),w(),{targets:()=>[{at:[0,0,0],r:l.nucleusR,key:{kind:"note",id:l.centre,tip:`${p(l.centre)} \xB7 ${mt(l.protons,"link")} in, ${l.neutrons} out`}},...l.electrons.map(b=>({at:b.at,r:Math.max(b.r*1.3,.9),key:{kind:"note",id:b.id,tip:`${p(b.id)} \xB7 ${kf[b.shell]}`}}))],click(b){b.kind==="note"&&S(b.id)},update(b){"selected"in b&&b.selected&&_(b.selected)},stat:y,today:()=>null,api:{layout:()=>l,centre:()=>l.centre,back:()=>x.length},tick(b){c&&c.tick(b),d&&d.tick(b),u&&u.tick(b),f.forEach((m,v)=>m.scale.setScalar(1+.05*Math.sin(b*1.6+v)))},dispose(){h&&ci(i.scene,h)}}}};var di=9,Zn=1.8,yh=48,Hf=40,zf="#fbbf24";function Gf(i,t){let e=Al(i,{linkedOnly:!1});if(!e.length)return{topics:[],core:null};let n=Math.max(0,e.findIndex(w=>w.cluster===t)),s=e[n],{adj:r}=to(i.nodes,i.links,{hubs:!0}),o=Ze(i.nodes),a=ks(i.nodes),l=Pi(i),h=s.moc||s.notes[0],c=s.notes.filter(w=>w!==h),d=new Set(c.map(w=>w.id)),u=r.get(h.id)||new Set,f=w=>({id:w.id,state:l(w)?"stale":a(w)>.35?"active":"steady",size:.7+.6*Math.sqrt(Math.max(0,o(w)))}),p={docked:[],second:[],adrift:[]};for(let w of c)(u.has(w.id)?p.docked:[...r.get(w.id)||[]].some(_=>d.has(_))?p.second:p.adrift).push(w);let M=p.docked.slice(0,yh).map((w,_,S)=>{let b=_/S.length*Math.PI*2+Math.PI/2;return{...f(w),a:b,at:[di*Math.cos(b),di*Math.sin(b),Zn]}}),x=new Map(M.map(w=>[w.id,w.a])),g=p.second.slice(0,yh).map(w=>({...f(w),anchor:[...r.get(w.id)].filter(_=>x.has(_)).sort((_,S)=>x.get(_)-x.get(S))[0]||null})).sort((w,_)=>(w.anchor?x.get(w.anchor):99)-(_.anchor?x.get(_.anchor):99)||(w.id<_.id?-1:1)).map((w,_,S)=>{let b=_/S.length*Math.PI*2+Math.PI/2;return{...w,a:b,at:[di*Math.cos(b),di*Math.sin(b),-Zn]}}),y=p.adrift.slice(0,Hf).map(w=>{let[_,S]=eo(w.id),b=_*Math.PI*2,m=di+4.5+4*S;return{...f(w),at:[m*Math.cos(b),m*Math.sin(b),(nn(w.id)%100/100-.5)*8]}});return{topics:e.map(w=>({cluster:w.cluster,name:w.name})),index:n,cluster:s.cluster,name:s.name,core:{id:h.id,name:h.name,map:!!h.moc},docked:M,second:g,adrift:y,counts:{docked:p.docked.length,second:p.second.length,adrift:p.adrift.length}}}var Wf={id:"station",name:"Station",hint:"One topic as a ring station: notes its map links are docked, the rest ride the second ring or drift outside",drift:.06,home:{yaw:.65,pitch:.28,dist:50,min:12,max:170,minPitch:-1.4},stage:{light:"camera",fog:[80,260],ambient:.5,glow:{strength:.8,radius:.6,threshold:.55}},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=new Map(e.nodes.map(S=>[S.id,S])),h=S=>l.has(S)?l.get(S).cluster:void 0,c=Gf(e,h(n.selected)),d=null,u=null,f=null;if(!c.core)return Hs(t,r,mt(e.nodes.length,"note"),["The Station needs notes in a topic.","No notes yet."]);let p=S=>l.get(S).name,M=(S,b)=>S.length<b?`${S.length} of ${b}`:`${b}`,x=()=>`${c.name} \xB7 ${c.counts.docked} docked \xB7 ${c.counts.second} on the second ring \xB7 ${c.counts.adrift} adrift`;function g(){d&&ci(i.scene,d),d=new rn;let S=o.palette[(c.cluster||0)%o.palette.length],b=Ie(o.muted,o.bg,.25),m=Ie(o.muted,o.fg,.55),v=O=>O.state==="stale"?b:O.state==="active"?zf:S,U=O=>new un({color:O,specular:"#888888",shininess:40}),E=(O,B,C,k)=>{let K=new qt(O,B);return K.position.set(...C),k&&K.rotation.set(...k),d.add(K),K};E(new Me(1.5,1.5,7,28),U(m),[0,0,0],[Math.PI/2,0,0]),E(new de(1.5,28,16),U(S),[0,0,3.5]),E(new de(1.5,28,16),U(m),[0,0,-3.5]),E(new Me(.22,.22,16,10),U(m),[0,0,0],[Math.PI/2,0,0]);for(let O of[7.2,-7.2]){E(new Me(.12,.12,13,8),U(m),[0,0,O],[0,0,Math.PI/2]);for(let B of[4,-4])E(new cn(5,2.6,.08),new un({color:"#1e3a8a",emissive:"#0b1a45",specular:"#93c5fd",shininess:90}),[B,0,O])}for(let O of[Zn,-Zn])E(new On(di,.16,8,96),U(m),[0,0,O]);let P=new G,N=(O,B)=>B.makeRotationZ(O.a).scale(P.set(.85*O.size,1.15*O.size,1.1*O.size)).setPosition(...O.at);d.add(Mn(new cn(1,1,1),U("#ffffff"),[...c.docked,...c.second],(O,B,C)=>(N(O,C),v(O))));let F=new Map(c.docked.map(O=>[O.id,O.at])),R=()=>new Me(1,1,1,6),z=()=>new un({color:m,transparent:!0,opacity:.35,depthWrite:!1});d.add(Mn(R(),z(),c.docked,(O,B,C)=>{$i(C,[0,0,Zn],O.at,.05)})),d.add(Mn(R(),z(),c.second.filter(O=>O.anchor),(O,B,C)=>{$i(C,O.at,F.get(O.anchor),.05)})),d.add(Mn(new ni(1,0),new un({color:"#ffffff",flatShading:!0}),c.adrift,(O,B,C)=>(C.makeRotationZ(B).scale(P.set(.6*O.size,.45*O.size,.5*O.size)).setPosition(...O.at),O.state==="stale"?b:Ie(S,b,.6))));let V=[...c.docked.map(O=>[[0,0,Zn],O.at]),...c.second.filter(O=>O.anchor).map(O=>[F.get(O.anchor),O.at])];u=fn(V.length,(O,B)=>{let[C,k]=V[O],K=(B*.35+O*.618)%1;return[C[0]+(k[0]-C[0])*K,C[1]+(k[1]-C[1])*K,C[2]+(k[2]-C[2])*K]},{size:4,color:"#ffe9a8"}),d.add(u.object);let J=150;f=fn(J,(O,B)=>{let C=O/J*Math.PI*2,k=O%2?Zn:-Zn,K=di+(O%3-1)*.35;return[K*Math.cos(C),K*Math.sin(C),k+.45*(O%5===0?1:-1)*(.6+.4*Math.sin(B*2.5+O*7)*(O%7===0?1:0))]},{size:2.4,color:"#ffd98a",opacity:.9}),d.add(f.object),i.scene.add(d);let W=O=>({run:()=>s(O.id),title:`Open ${p(O.id)}`}),Y=[{text:jt(c.core.name,34),at:[0,1.6,3.5],strong:!0,dy:-16,run:()=>s(c.core.id),title:`Open ${c.core.name}`}];for(let O of c.docked.slice(0,5))Y.push({text:jt(p(O.id),22),at:O.at,dy:-14,...W(O)});c.docked.length&&Y.push({text:`docked (${M(c.docked,c.counts.docked)})`,at:[0,-di,Zn],color:o.muted,dy:16}),c.second.length&&Y.push({text:`second ring (${M(c.second,c.counts.second)})`,at:[di,0,-Zn],color:o.muted,dy:16}),c.adrift.length&&Y.push({text:`adrift (${M(c.adrift,c.counts.adrift)})`,at:c.adrift[0].at,color:o.muted,dy:16}),t.labels(Y),t.stat(x());let j=[],H=c.counts.docked+c.counts.second+c.counts.adrift;H&&j.push({text:`${c.counts.docked} of ${mt(H,"note")} in ${c.name} link with ${c.core.name}.`+(c.core.map?"":` ${c.name} has no map; ${c.core.name} is its most relied-on note.`),label:`Open ${jt(c.core.name,18)}`,run:()=>s(c.core.id)}),c.second.length&&j.push({text:`${mt(c.counts.second,"note")} link with the topic but not with ${c.core.name}. ${p(c.second[0].id)} is the most relied-on of them; a link from ${c.core.name} docks it.`,label:"Open note",run:()=>s(c.second[0].id)}),c.adrift.length&&j.push({text:`${mt(c.counts.adrift,"note")} link with nothing in ${c.name}. ${p(c.adrift[0].id)} is the most relied-on of them.`,label:"Open note",run:()=>s(c.adrift[0].id)}),t.explain({plain:"Picture a topic as a space station. The hub in the middle is the topic's map. Every note the map links with is a module bolted to the front ring. Notes that only link with other notes ride the second ring. Notes that link with nothing here drift outside as rocks.",about:`The hub is ${c.core.name}${c.core.map?", the topic's map":", the topic's most relied-on note (the topic has no map)"}. A spoke is a link between the hub and a note; a strut is a link between a second-ring note and a docked one. A module is bigger the more the vault leans on the note. A ring shows at most ${yh} modules and ${Hf} rocks are drawn, the most relied-on first; each label says how many there are in all.`,legend:[{color:zf,text:"edited lately"},{color:S,text:"a note of the topic"},{color:b,text:"stale"},{color:m,text:"spoke or strut = a link"}],insights:j});let L=O=>()=>{y(c.topics[(c.index+O+c.topics.length)%c.topics.length].cluster),a()};t.controls({lines:[`Topic ${c.index+1} of ${c.topics.length}`],buttons:[{label:"\u2039",title:"The topic before",off:c.topics.length<2,run:L(-1)},{label:c.name,title:`Open ${c.core.name}`,wide:!0,run:()=>s(c.core.id)},{label:"\u203A",title:"The next topic",off:c.topics.length<2,run:L(1)}]})}function y(S){if(S===void 0||S===c.cluster)return;let b=Gf(e,S);b.cluster===S&&(c=b,g())}i.sky({top:"#02050f",haze:"#0b1432",stars:500,starColor:"#cfe0ff"}),g();let w={active:"edited lately",steady:"",stale:"stale"},_=(S,b)=>[p(S.id),b,w[S.state]].filter(Boolean).join(" \xB7 ");return{targets:()=>[{at:[0,0,0],r:2.2,key:{kind:"note",id:c.core.id,tip:`${c.core.name} \xB7 the hub of ${c.name}`}},...c.docked.map(S=>({at:S.at,r:.9*S.size,key:{kind:"note",id:S.id,tip:_(S,"docked")}})),...c.second.map(S=>({at:S.at,r:.9*S.size,key:{kind:"note",id:S.id,tip:_(S,"second ring")}})),...c.adrift.map(S=>({at:S.at,r:.8*S.size,key:{kind:"note",id:S.id,tip:_(S,"adrift")}}))],click(S){S.kind==="note"&&s(S.id)},update(S){"selected"in S&&S.selected&&y(h(S.selected))},stat:x,today:()=>c.adrift.length?{text:`${p(c.adrift[0].id)} links with nothing in ${c.name}.`,label:"Open note",run:()=>s(c.adrift[0].id)}:null,api:{layout:()=>c,go:S=>{y(S),a()}},tick(S){u&&u.tick(S),f&&f.tick(S)},dispose(){d&&ci(i.scene,d)}}}};var Fi=30,Jf=37,qf=12,jf=4,Zf=1.5,Yf="#ef4444",Mh="#3b82f6",oo=.6,Ws=2.1,Yn=7.2,es=5;function Xf(i,t=[]){let e=[];for(let n=-i-1;n<=i;n++)for(let s=-i-1;s<=i;s++)for(let r of t.length?t:[0]){let o=n+r,a=s+r,l=Zf*(o+a/2),h=Zf*a*.8660254;(t.length||Math.max(Math.abs(n),Math.abs(s),Math.abs(n+s))<=i)&&e.push([l,h])}return e.sort((n,s)=>Math.hypot(...n)-Math.hypot(...s)||Math.atan2(n[1],n[0])-Math.atan2(s[1],s[0]))}function ky(i){let t=i.nodes.filter(y=>!Re(y)),e=ks(i.nodes),n=Pi(i),s=i.quality&&i.quality.stale_days||180,r=(y,w)=>y.id<w.id?-1:1,o=t.filter(y=>(y.age||0)<=Fi).sort((y,w)=>e(w)-e(y)||r(y,w)),a=t.filter(n),l=a.filter(y=>y.age<=s+Fi),h=Xf(3),c=Xf(3,[1/3,2/3]),d=o.slice(0,Jf).map((y,w)=>({id:y.id,cluster:y.cluster,heat:e(y),at:h[w],h:2.2+3.2*e(y)})),u=a.filter(y=>y.inlinks>0).sort((y,w)=>w.inlinks-y.inlinks||r(y,w)),f=u.length?u[0].inlinks:1,p=u.slice(0,qf).map((y,w)=>({id:y.id,cluster:y.cluster,links:y.inlinks,depth:.25+.75*(y.inlinks/f),at:c[w]})),M=new Map;for(let y of o)M.set(y.cluster,(M.get(y.cluster)||0)+1);let x=new Map(i.clusters.map(y=>[y.id,y.label||y.name])),g=[...M].sort((y,w)=>w[1]-y[1]||y[0]-w[0]).slice(0,jf).map(([y,w])=>({cluster:y,name:x.get(y)||`Topic ${y}`,edited:w,share:w/o.length}));return{edited:o.length,wentStale:l.length,stale:a.length,leaned:u.length,k:l.length?o.length/l.length:null,fuel:d,control:p,loops:g}}var Qf={id:"reactor",name:"Reactor",hint:"The last 30 days as a reactor: edited notes are fuel, stale notes others link to are control rods",home:{yaw:oo,pitch:.42,dist:62,min:10,max:200},stage:{light:"camera",fog:[90,300],ambient:.6,glow:{strength:.7,radius:.5,threshold:.85}},actions:["graph"],build({stage:i,frame:t,data:e,onOpen:n,onAction:s,theme:r,invalidate:o}){let a=ky(e),l=new Map(e.nodes.map(v=>[v.id,v])),h=v=>l.get(v).name;if(!a.fuel.length&&!a.control.length)return Hs(t,s,mt(e.nodes.length,"note"),[`The Reactor needs notes edited in the last ${Fi} days, or stale notes other notes link to.`,"Neither yet."]);let c=null,d=null,u=null,f=null,p=null,M=null,x=v=>r.palette[(v||0)%r.palette.length],g=a.k==null?null:a.k.toFixed(2),y=()=>`${g?`k ${g} \xB7 `:""}${mt(a.edited,"note")} edited in ${Fi} days \xB7 ${a.wentStale||"none"} went stale \xB7 ${mt(a.control.length,"control rod")}`,w=v=>oo+Math.PI+(v-(a.loops.length-1)/2)*1,_=(v,U,E)=>[U*Math.sin(v),E,U*Math.cos(v)];function S(){c&&ci(i.scene,c),c=new rn;let v=Ie("#5b6b86",r.bg,.25),U=Ie("#1b2742",r.bg,.2),E=Ie(r.fg,r.bg,.25),P=k=>d==null||d===k?0:.82,N=(k,K)=>new un({color:k,specular:"#666666",shininess:35,...K}),F=(k,K,et)=>{let ot=new qt(k,K);return ot.position.y=et,c.add(ot),ot},R=(k,K)=>new Me(k,k,K,64,1,!0,oo+Ws/2,Math.PI*2-Ws),z=(k,K)=>new de(k,64,20,oo+Ws/2+Math.PI/2,Math.PI*2-Ws,K?0:Math.PI/2,Math.PI/2);F(new Me(19,19,1,64),N(U),-5.5);let V=(k,K,et=me)=>new oe({color:k,transparent:!0,opacity:K,blending:_n,depthWrite:!1,side:et});[8,12.5,16,18.4].forEach((k,K)=>{let et=F(new ii(k-.07,k+.07,96),V(K===3?"#38bdf8":"#1d4ed8",.55-K*.08),-4.98);et.rotation.x=-Math.PI/2}),[-3,1,5,9,13].forEach(k=>{let K=F(new On(18,.045,6,128),V("#3b82f6",.5),k-1);K.rotation.x=Math.PI/2});for(let k=0;k<12;k++){let K=F(new On(18,.045,6,64,Math.PI/2),V("#3b82f6",.38),12);K.scale.y=.6,K.rotation.order="YXZ",K.rotation.y=k/12*Math.PI*2,K.rotation.z=0}let J=new Er("#38bdf8",90,40,1.6);J.position.set(0,3.5,0),c.add(J),F(new Me(5.9,5.9,Yn,48,1,!0),V("#22d3ee",.16,Ce),Yn/2);let W={side:me,transparent:!0,opacity:.3,depthWrite:!1};F(R(18,17),N(U,W),3.5),F(z(18,!0),N(U,W),12).scale.y=.6,F(R(6.2,12),N(v,{side:me}),3),F(z(6.2,!1),N(v,{side:me}),-3).scale.y=.5,F(z(6.2,!0),N(v,{side:me}),9).scale.y=.5,F(new Me(5.9,5.9,.3,48),N(E),-.2),F(new Me(5.9,5.9,.3,48),N(E),Yn),F(new Me(5.8,5.8,Yn,48,1,!1,oo+Ws/2,Math.PI*2-Ws),new un({color:"#38bdf8",transparent:!0,opacity:.2,depthWrite:!1,side:me}),Yn/2);let Y=k=>new Me(1,1,1,k);c.add(Mn(Y(12),new un({color:"#ffffff",shininess:70}),a.fuel,(k,K,et)=>($i(et,[k.at[0],0,k.at[1]],[k.at[0],k.h,k.at[1]],.42),Ie(Ie(E,x(k.cluster),.5+.5*k.heat),r.bg,P(k.cluster))))),c.add(Mn(Y(8),N("#ffffff"),a.control,(k,K,et)=>{let ot=Yn-es*k.depth;return $i(et,[k.at[0],ot,k.at[1]],[k.at[0],ot+es+1.4,k.at[1]],.2),Ie(E,r.bg,P(k.cluster))})),c.add(Mn(new de(1,12,8),N("#ffffff"),a.control,(k,K,et)=>(et.makeScale(.36,.36,.36).setPosition(k.at[0],Yn-es*k.depth+es+1.4,k.at[1]),Ie(E,r.bg,P(k.cluster)))));let j=[];a.loops.forEach((k,K)=>{let et=w(K),ot=.28+.5*k.share,xt=P(k.cluster),ft=_(et,13.5,0),wt=_(et+.2,10.5,0),Mt=new qt(new Me(1.9,1.4,12,24),N(Ie(x(k.cluster),r.bg,xt)));Mt.position.set(ft[0],1,ft[2]),c.add(Mt);let tt=new qt(new de(1.9,24,12,0,Math.PI*2,0,Math.PI/2),N(Ie(x(k.cluster),r.bg,xt)));tt.position.set(ft[0],7,ft[2]),c.add(tt);let It=new qt(new Me(.9,.9,3.4,16),N(Ie(v,r.bg,xt)));It.position.set(wt[0],1.2,wt[2]),c.add(It),j.push({from:_(et-.07,6.1,5),to:_(et-.05,12.4,5),w:ot,c:Ie(Yf,r.bg,xt)},{from:_(et+.05,12.6,1),to:[wt[0],1,wt[2]],w:ot,c:Ie(Mh,r.bg,xt)},{from:[wt[0],2.4,wt[2]],to:_(et+.12,6.1,3.2),w:ot,c:Ie(Mh,r.bg,xt)})});let H=a.fuel.slice(0,48);u=fn(H.length,(k,K)=>{let et=H[k],ot=(K*(.18+.1*(k*7%5)/5)+k*.37)%1;return[et.at[0]+.35*Math.sin(K*2+k),ot*Yn,et.at[1]+.35*Math.cos(K*2+k)]},{size:3,color:"#bfe9ff",opacity:.8}),c.add(u.object);let L=a.fuel.map(k=>[k.at[0],k.h,k.at[1]]);f=fn(L.length,(k,K)=>[L[k][0],L[k][1]+.1+.05*Math.sin(K*3+k),L[k][2]],{size:6,color:"#a5f3fc",opacity:1}),c.add(f.object);let O=a.loops.map((k,K)=>_(w(K),13.5,8));p=O.length?fn(O.length*14,(k,K)=>{let et=O[k%O.length],ot=(K*.12+k*.173)%1;return[et[0]+.9*Math.sin(k*2.3+ot*4),et[1]+ot*6,et[2]+.9*Math.cos(k*1.7+ot*4)]},{size:9,color:"#cbd5e1",opacity:.12}):null,p&&c.add(p.object),M=j.length?fn(j.length*4,(k,K)=>{let et=j[k%j.length],ot=(K*.22+Math.floor(k/j.length)/4)%1;return[0,1,2].map(xt=>et.from[xt]+(et.to[xt]-et.from[xt])*ot)},{size:4,color:"#fff1c2",opacity:.95}):null,M&&c.add(M.object),c.add(Mn(Y(12),N("#ffffff"),j,(k,K,et)=>($i(et,k.from,k.to,k.w),k.c))),i.scene.add(c);let B=a.loops.map((k,K)=>({text:`${jt(k.name,20)} (${k.edited})`,at:_(w(K),13.5,9),dy:-14,run:()=>b(k.cluster),title:`Only ${k.name}`}));for(let k of a.fuel.slice(0,3))B.push({text:jt(h(k.id),22),at:[k.at[0],k.h,k.at[1]],dy:-14,run:()=>n(k.id),title:`Open ${h(k.id)}`});a.control[0]&&B.push({text:jt(h(a.control[0].id),22),at:[a.control[0].at[0],Yn+es+1.4,a.control[0].at[1]],dy:-14,color:r.muted,run:()=>n(a.control[0].id),title:`Open ${h(a.control[0].id)}`}),t.labels(B),t.stat(y());let C=d==null?null:a.loops.find(k=>k.cluster===d);t.chip(C?`Only ${C.name}`:null,()=>b(null))}function b(v){d=v===d?null:v,S(),o()}let m=[];return g?m.push({text:`k is ${g}: ${mt(a.edited,"note")} edited in the last ${Fi} days for ${mt(a.wentStale,"note")} that went stale in them. ${a.k>=1?"Above 1, the vault is heating up.":"Below 1, the vault is cooling."}`,...a.fuel[0]?{label:"Open liveliest",run:()=>n(a.fuel[0].id)}:{}}):m.push({text:`${mt(a.edited,"note")} edited in the last ${Fi} days and none went stale in them, so there is no k to work out.`,...a.fuel[0]?{label:"Open liveliest",run:()=>n(a.fuel[0].id)}:{}}),a.control[0]&&m.push({text:`${mt(a.leaned,"stale note")} still ${a.leaned===1?"has":"have"} notes linking to ${a.leaned===1?"it":"them"}. ${h(a.control[0].id)} has the most: ${mt(a.control[0].links,"note")} link to it.`,label:"Open note",run:()=>n(a.control[0].id)}),a.loops[0]&&m.push({text:`${a.loops[0].name} had the most edits: ${a.loops[0].edited} of the ${a.edited}.`,label:"Only this topic",run:()=>b(a.loops[0].cluster)}),t.explain({plain:"Picture a reactor. Every note you edited this month is a fuel rod giving off heat. Every note left to go stale takes heat away. Divide one by the other and you get k: above 1 the vault is heating up, below 1 it is cooling.",about:`A fuel rod is a note edited in the last ${Fi} days, taller and brighter the livelier it is; the ${Jf} liveliest are drawn, the liveliest in the middle. A control rod is a stale note that other notes still link to, pushed deeper the more notes link to it; the ${qf} most linked are drawn. k is the notes edited in the ${Fi} days divided by the notes that went stale in them. Each coolant loop is one of the ${jf} topics with the most edited notes; its pipes are wider the bigger its share.`,legend:[{color:r.palette[0],text:"fuel rod = a note edited lately, colour = topic"},{color:Ie(r.fg,r.bg,.25),text:"control rod = a stale note others link to"},{color:Yf,text:"hot leg"},{color:Mh,text:"cold leg, back to the vessel"}],insights:m}),t.controls({lines:["Pick a rod to open its note, a loop to see only its topic"],buttons:[]}),i.sky({top:"#04060c",haze:"#0e121c"}),S(),{targets:()=>[...a.fuel.map(v=>({at:[v.at[0],v.h*.6,v.at[1]],r:.7,key:{kind:"note",id:v.id,tip:`${h(v.id)} \xB7 edited ${mt(l.get(v.id).age||0,"day")} ago`}})),...a.control.map(v=>({at:[v.at[0],Yn-es*v.depth+es+1.4,v.at[1]],r:.6,key:{kind:"note",id:v.id,tip:`${h(v.id)} \xB7 stale \xB7 ${mt(v.links,"note")} link to it`}})),...a.loops.map((v,U)=>({at:_(w(U),13.5,4),r:2.4,key:{kind:"loop",id:v.cluster,tip:`${v.name} \xB7 ${mt(v.edited,"note")} edited \xB7 pick to see only this topic`}}))],click(v){v.kind==="note"?n(v.id):v.kind==="loop"&&b(v.id)},update(){},stat:y,today:()=>a.control[0]?{text:`${h(a.control[0].id)} is stale and ${mt(a.control[0].links,"note")} link to it.`,label:"Open note",run:()=>n(a.control[0].id)}:null,api:{layout:()=>a,filter:b,only:()=>d},tick(v){for(let U of[u,f,p,M])U&&U.tick(v)},dispose(){c&&ci(i.scene,c)}}}};var Fl={low:0,medium:1,high:2},Oy=i=>20*(i+1)**2;async function Kf({host:i,detail:t="medium",pbr:e=!1,warmup:n=3e3,run:s=5e3}={}){if(!(t in Fl))throw new Error(`bench: detail is one of ${Object.keys(Fl).join(", ")}`);if(!i)throw new Error("bench: host (an element to draw in) is required");let r=Kr(),o=yl(i,co(),{fog:!1});try{o.scene.add(ih(r,new ni(1,Fl[t]),e?new Te({roughness:.6}):new Yi).root);let a=o.renderer.getContext(),l=a.getExtension("WEBGL_debug_renderer_info"),h=String(l&&a.getParameter(l.UNMASKED_RENDERER_WEBGL)||a.getParameter(a.RENDERER)||"unknown"),c=()=>new Promise(y=>requestAnimationFrame(y)),d=performance.now(),u=d,f=d,p=0,M=0,x=0;for(;u-d<n+s;)u=await c(),o.orbit(u/2e3,.3,42),o.render(),u-d>=n&&(x?(p++,M=Math.max(M,u-f)):x=u),f=u;let g=u-x;return{atoms:r.n,detail:t,triangles:r.n*Oy(Fl[t]),light:e?"pbr":"basic",fps:g>0?Math.round(p*1e3/g*10)/10:0,worstMs:Math.round(M*10)/10,frames:p,gpu:h}}finally{o.dispose()}}var vh={bodies:Bd,cas9:zd,genome:Wd,cones:qd,loadpaths:of,modes:cf,slime:gf,cyberpunk:vf,radar:Af,clock:If,foodweb:Lf,city:Ef,atom:Vf,station:Wf,reactor:Qf},Vy=Object.values(vh).map(i=>({id:i.id,name:i.name,hint:i.hint,actions:i.actions||[],under:(i.home.minPitch||0)<0}));function zy(i,{view:t="bodies",data:e,inputs:n,onOpen:s,onAction:r,theme:o,motion:a=!1}={}){let l=vh[t];if(!l)throw new Error(`vault-graph-views: no view "${t}" (there is ${Object.keys(vh).join(", ")})`);let h=kl(e);if(h.length||h.push(...Ol(t,e,n)),h.length)throw new Error("vault-graph-views: "+h.join("; "));if(typeof s!="function")throw new Error("vault-graph-views: onOpen is required");if((l.actions||[]).length&&typeof r!="function")throw new Error(`vault-graph-views: onAction is required for the ${l.name} view (it asks the host for: ${l.actions.join(", ")})`);return Ld(i,l,{data:e,inputs:n||{},onOpen:s,onAction:r,motion:a,theme:co(o)})}return cp(Gy);})();
