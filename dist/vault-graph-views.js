var VaultGraphViews=(()=>{var Fl=Object.defineProperty;var tp=Object.getOwnPropertyDescriptor;var ep=Object.getOwnPropertyNames;var np=Object.prototype.hasOwnProperty;var ip=(i,t)=>{for(var e in t)Fl(i,e,{get:t[e],enumerable:!0})},sp=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of ep(t))!np.call(i,s)&&s!==e&&Fl(i,s,{get:()=>t[s],enumerable:!(n=tp(t,s))||n.enumerable});return i};var rp=i=>sp(Fl({},"__esModule",{value:!0}),i);var By={};ip(By,{VIEWS:()=>Dy,bench:()=>Jf,check:()=>Dl,checkInputs:()=>Ll,mountViews:()=>Ly});var Hs={top:{nodes:"array",links:"array",clusters:"array",wanted:"array"},node:{id:"string",name:"string",cluster:"number",folder:"string",inlinks:"number",outlinks:"number",words:"number"},link:{source:"string",target:"string",kind:"string"},cluster:{id:"number",name:"string",label:"string",size:"number"},strand:{days:"array",paths:"array",ids:"array",rows:"array"}},op={n:"number",X:"array",stress:"number",grade:"string",domains:"array",loops:"array"},ap={guide:"string",where:"string",notes:"array"},lp={ids:"array",level:"array",edges:"array",stats:"object"};var hn=i=>Array.isArray(i)?"array":i===null?"null":typeof i,li=(i,t,e,n)=>{for(let[s,r]of Object.entries(n))hn(e[s])!==r&&i.push(`${t}.${s} should be ${r}, is ${hn(e[s])}`)};function Dl(i){let t=[];if(!i||typeof i!="object")return["data is not an object"];if(li(t,"data",i,Hs.top),t.length)return t;i.nodes[0]&&li(t,"nodes[0]",i.nodes[0],Hs.node),i.links[0]&&li(t,"links[0]",i.links[0],Hs.link),i.clusters[0]&&li(t,"clusters[0]",i.clusters[0],Hs.cluster);let e=new Set(i.nodes.map(s=>s.id));for(let s of i.wanted)e.add(s.id);let n=i.links.filter(s=>!e.has(s.source)||!e.has(s.target)).length;return n&&t.push(`${n} links point at a note that is in neither nodes nor wanted`),t}function Ll(i,t,e){let n=[],s=e||{};if(i==="genome"){let r=t&&t.strand;if(hn(r)!=="object")return[`data.strand should be object, is ${hn(r)}`];if(li(n,"data.strand",r,Hs.strand),hn(s.fold)!=="object")return n.concat(`inputs.fold should be object, is ${hn(s.fold)}`);if(li(n,"inputs.fold",s.fold,op),n.length)return n;let o=s.fold;(r.rows.length!==r.days.length||r.paths.length!==r.days.length)&&n.push(`data.strand has ${r.days.length} days, ${r.rows.length} rows and ${r.paths.length} paths: they should be the same number`),(o.n!==r.days.length||o.X.length!==o.n)&&n.push(`inputs.fold is for ${o.n} days (${o.X.length} points) and data.strand has ${r.days.length}: the fold is from other data`);let a=o.loops.filter(l=>!(l.a>=0&&l.a<o.n&&l.b>=0&&l.b<o.n&&typeof l.count=="number")).length;a&&n.push(`${a} of inputs.fold.loops don't name two days of the strand and a count`)}if(i==="foodweb"){if(hn(s.web)!=="object")return n.concat(`inputs.web should be object, is ${hn(s.web)}`);if(li(n,"inputs.web",s.web,lp),n.length)return n;let r=s.web;r.level.length!==r.ids.length&&n.push(`inputs.web has ${r.ids.length} ids and ${r.level.length} levels: they should be the same`);let o=r.edges.filter(a=>!(a[0]>=0&&a[0]<r.ids.length&&a[1]>=0&&a[1]<r.ids.length)).length;o&&n.push(`${o} of inputs.web.edges don't name two of its ids`);for(let a of["mean","maxLevel","incoherence"])typeof r.stats[a]!="number"&&n.push(`inputs.web.stats.${a} should be number, is ${hn(r.stats[a])}`);if(n.length)return n}if(i==="cas9"&&s.scan!=null){if(hn(s.scan)!=="object")return[`inputs.scan should be object, is ${hn(s.scan)}`];li(n,"inputs.scan",s.scan,ap),s.scan.ids!==void 0&&!Array.isArray(s.scan.ids)&&n.push(`inputs.scan.ids should be array, is ${hn(s.scan.ids)}`),!n.length&&s.scan.notes[0]&&(typeof s.scan.notes[0].path!="string"||typeof s.scan.notes[0].hits!="number")&&n.push("inputs.scan.notes[0] should be { path: string, hits: number }")}return s.hour!=null&&typeof s.hour!="number"&&n.push(`inputs.hour should be number, is ${hn(s.hour)}`),s.selected!=null&&typeof s.selected!="string"&&n.push(`inputs.selected should be string, is ${hn(s.selected)}`),n}var cp=["#4385BE","#879A39","#DA702C","#8B7EC8","#3AA99F","#D14D41","#D0A215","#CE5D97","#205EA6","#66800B","#BC5215","#5E409D","#24837B","#AF3029","#AD8301","#A02F6F"];function so(i){return Object.assign({bg:"#14161a",fg:"#dddddd",muted:"#8a8f98",accent:"#6aa9ff",warn:"#f59e0b",palette:cp},i||{})}var cu=0,xc=1,hu=2;var wr=1,uu=2,ws=3,Mi=0,De=1,ge=2,Qn=0,Es=1,Kn=2,_c=3,yc=4,du=5;var Wi=100,fu=101,pu=102,mu=103,gu=104,xu=200,_u=201,yu=202,Mu=203,Mc=204,vc=205,vu=206,Su=207,bu=208,wu=209,Eu=210,Tu=211,Au=212,Ru=213,Cu=214,No=0,Fo=1,Do=2,ps=3,Lo=4,Bo=5,ko=6,Oo=7,Er=0,Iu=1,Pu=2,Bn=0,Tr=1,Ar=2,Rr=3,Zi=4,Cr=5,Ir=6,Pr=7;var Sc=300,Yi=301,Ts=302,ya=303,Ma=304,ms=1e3,Fn=1001,Vo=1002,Ue=1003,Uu=1004;var Ur=1005;var on=1006,va=1007;var $n=1008;var dn=1009,bc=1010,wc=1011,As=1012,Sa=1013,Pn=1014,wn=1015,qe=1016,ba=1017,wa=1018,Xi=1020,Ec=35902,Tc=35899,Ac=1021,Rc=1022,Un=1023,Jn=1026,ti=1027,Ea=1028,Ta=1029,vi=1030,Aa=1031;var Ra=1033,Nr=33776,Fr=33777,Dr=33778,Lr=33779,Ca=35840,Ia=35841,Pa=35842,Ua=35843,Na=36196,Fa=37492,Da=37496,La=37488,Ba=37489,Br=37490,ka=37491,Oa=37808,Va=37809,za=37810,Ga=37811,Ha=37812,Wa=37813,Za=37814,Ya=37815,Xa=37816,Ja=37817,qa=37818,ja=37819,Qa=37820,Ka=37821,$a=36492,tl=36494,el=36495,nl=36283,il=36284,kr=36285,sl=36286;var tr=2300,zo=2301,Po=2302,cc=2303,hc=2400,uc=2401,dc=2402;var Nu=3200;var Rs=0,Fu=1,ei="",ze="srgb",er="srgb-linear",nr="linear",me="srgb";var Uo=7680;var Du=519,Lu=512,Bu=513,ku=514,Cc=515,Ou=516,Vu=517,Ic=518,Pc=519,zu=35044;var Uc="300 es",Mn=2e3,gs=2001;function hp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function up(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gu(){let i=ir("canvas");return i.style.display="block",i}var Ch={},xs=null;function Nc(...i){let t="THREE."+i.shift();xs?xs("log",t,...i):console.log(t,...i)}function Hu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xt(...i){i=Hu(i);let t="THREE."+i.shift();if(xs)xs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Kt(...i){i=Hu(i);let t="THREE."+i.shift();if(xs)xs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Qs(...i){let t=i.join(" ");t in Ch||(Ch[t]=!0,Xt(...i))}function Wu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Zu={[No]:No,[Do]:ko,[Lo]:Lo,[ps]:Bo,[Fo]:Fo,[ko]:Do,[Oo]:Oo,[Bo]:ps},Dn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Bl=Math.PI/180,Go=180/Math.PI;function Or(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function ce(i,t,e){return Math.max(t,Math.min(e,i))}function dp(i,t){return(i%t+t)%t}function kl(i,t,e){return(1-e)*i+e*t}function Yu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Fc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function fp(i,t){if(t.constructor===Float32Array)return i;let e=Fc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function pp(i,t){if(t.constructor===Float32Array)return i;let e=Fc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Pt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ge=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],m=r[o+2],M=r[o+3];if(d!==M||l!==u||c!==f||h!==m){let _=l*u+c*f+h*m+d*M;_<0&&(u=-u,f=-f,m=-m,M=-M,_=-_);let g=1-a;if(_<.9995){let y=Math.acos(_),b=Math.sin(y);g=Math.sin(g*y)/b,a=Math.sin(a*y)/b,l=l*g+u*a,c=c*g+f*a,h=h*g+m*a,d=d*g+M*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+m*a,d=d*g+M*a;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-a*f,t[e+2]=c*m+h*f+a*u-l*d,t[e+3]=h*m-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ih.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ih.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ol.copy(this).projectOnVector(t),this.sub(Ol)}reflect(t){return this.sub(Ol.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ol=new V,Ih=new Ge,$t=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],M=s[0],_=s[3],g=s[6],y=s[1],b=s[4],p=s[7],v=s[2],E=s[5],x=s[8];return r[0]=o*M+a*y+l*v,r[3]=o*_+a*b+l*E,r[6]=o*g+a*p+l*x,r[1]=c*M+h*y+d*v,r[4]=c*_+h*b+d*E,r[7]=c*g+h*p+d*x,r[2]=u*M+f*y+m*v,r[5]=u*_+f*b+m*E,r[8]=u*g+f*p+m*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,m=e*d+n*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/m;return t[0]=d*M,t[1]=(s*c-h*n)*M,t[2]=(a*n-s*o)*M,t[3]=u*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-a*e)*M,t[6]=f*M,t[7]=(n*l-c*e)*M,t[8]=(o*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Qs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vl.makeScale(t,e)),this}rotate(t){return Qs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vl.makeRotation(-t)),this}translate(t,e){return Qs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Vl=new $t,Ph=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uh=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mp(){let i={enabled:!0,workingColorSpace:er,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===me&&(s.r=Xn(s.r),s.g=Xn(s.g),s.b=Xn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===me&&(s.r=fs(s.r),s.g=fs(s.g),s.b=fs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ei?nr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[er]:{primaries:t,whitePoint:n,transfer:nr,toXYZ:Ph,fromXYZ:Uh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:n,transfer:me,toXYZ:Ph,fromXYZ:Uh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),i}var ae=mp();function Xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var $i,Ho=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{$i===void 0&&($i=ir("canvas")),$i.width=t.width,$i.height=t.height;let s=$i.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=$i}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ir("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Xn(e[n]/255)*255):e[n]=Xn(e[n]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},gp=0,_s=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Or(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(zl(s[o].image)):r.push(zl(s[o]))}else r=zl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function zl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ho.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}var xp=0,Gl=new V,an=class i extends Dn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Fn,s=Fn,r=on,o=$n,a=Un,l=dn,c=i.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=Or(),this.name="",this.source=new _s(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Gl).x}get height(){return this.source.getSize(Gl).y}get depth(){return this.source.getSize(Gl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ms:t.x=t.x-Math.floor(t.x);break;case Fn:t.x=t.x<0?0:1;break;case Vo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ms:t.y=t.y-Math.floor(t.y);break;case Fn:t.y=t.y<0?0:1;break;case Vo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Sc;an.DEFAULT_ANISOTROPY=1;var we=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],M=l[2],_=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-M)<.01&&Math.abs(m-_)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+M)<.1&&Math.abs(m+_)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,p=(f+1)/2,v=(g+1)/2,E=(h+u)/4,x=(d+M)/4,S=(m+_)/4;return b>p&&b>v?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=E/n,r=x/n):p>v?p<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(p),n=E/s,r=S/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=x/r,s=S/r),this.set(n,s,r,e),this}let y=Math.sqrt((_-m)*(_-m)+(d-M)*(d-M)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(_-m)/y,this.y=(d-M)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wo=class extends Dn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new an({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new _s(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ne=class extends Wo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},sr=class extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Zo=class extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ht=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,l,c,h,d,u,f,m,M,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,f,m,M,_)}set(t,e,n,s,r,o,a,l,c,h,d,u,f,m,M,_){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=m,g[11]=M,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ts.setFromMatrixColumn(t,0).length(),r=1/ts.setFromMatrixColumn(t,1).length(),o=1/ts.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,m=a*h,M=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-M*c,e[9]=-a*l,e[2]=M-u*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,m=c*h,M=c*d;e[0]=u+M*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=M+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,m=c*h,M=c*d;e[0]=u-M*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=M-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,m=a*h,M=a*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+M,e[1]=l*d,e[5]=M*c+u,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,m=a*l,M=a*c;e[0]=l*h,e[4]=M-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-M*d}else if(t.order==="XZY"){let u=o*l,f=o*c,m=a*l,M=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+M,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=M*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_p,t,yp)}lookAt(t,e,n){let s=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),ci.crossVectors(n,fn),ci.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),ci.crossVectors(n,fn)),ci.normalize(),ro.crossVectors(fn,ci),s[0]=ci.x,s[4]=ro.x,s[8]=fn.x,s[1]=ci.y,s[5]=ro.y,s[9]=fn.y,s[2]=ci.z,s[6]=ro.z,s[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],M=n[6],_=n[10],g=n[14],y=n[3],b=n[7],p=n[11],v=n[15],E=s[0],x=s[4],S=s[8],P=s[12],w=s[1],U=s[5],F=s[9],B=s[13],N=s[2],Z=s[6],H=s[10],J=s[14],G=s[3],I=s[7],W=s[11],D=s[15];return r[0]=o*E+a*w+l*N+c*G,r[4]=o*x+a*U+l*Z+c*I,r[8]=o*S+a*F+l*H+c*W,r[12]=o*P+a*B+l*J+c*D,r[1]=h*E+d*w+u*N+f*G,r[5]=h*x+d*U+u*Z+f*I,r[9]=h*S+d*F+u*H+f*W,r[13]=h*P+d*B+u*J+f*D,r[2]=m*E+M*w+_*N+g*G,r[6]=m*x+M*U+_*Z+g*I,r[10]=m*S+M*F+_*H+g*W,r[14]=m*P+M*B+_*J+g*D,r[3]=y*E+b*w+p*N+v*G,r[7]=y*x+b*U+p*Z+v*I,r[11]=y*S+b*F+p*H+v*W,r[15]=y*P+b*B+p*J+v*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],M=t[7],_=t[11],g=t[15],y=l*f-c*u,b=a*f-c*d,p=a*u-l*d,v=o*f-c*h,E=o*u-l*h,x=o*d-a*h;return e*(M*y-_*b+g*p)-n*(m*y-_*v+g*E)+s*(m*b-M*v+g*x)-r*(m*p-M*E+_*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],M=t[13],_=t[14],g=t[15],y=e*a-n*o,b=e*l-s*o,p=e*c-r*o,v=n*l-s*a,E=n*c-r*a,x=s*c-r*l,S=h*M-d*m,P=h*_-u*m,w=h*g-f*m,U=d*_-u*M,F=d*g-f*M,B=u*g-f*_,N=y*B-b*F+p*U+v*w-E*P+x*S;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Z=1/N;return t[0]=(a*B-l*F+c*U)*Z,t[1]=(s*F-n*B-r*U)*Z,t[2]=(M*x-_*E+g*v)*Z,t[3]=(u*E-d*x-f*v)*Z,t[4]=(l*w-o*B-c*P)*Z,t[5]=(e*B-s*w+r*P)*Z,t[6]=(_*p-m*x-g*b)*Z,t[7]=(h*x-u*p+f*b)*Z,t[8]=(o*F-a*w+c*S)*Z,t[9]=(n*w-e*F-r*S)*Z,t[10]=(m*E-M*p+g*y)*Z,t[11]=(d*p-h*E-f*y)*Z,t[12]=(a*P-o*U-l*S)*Z,t[13]=(e*U-n*P+s*S)*Z,t[14]=(M*b-m*v-_*y)*Z,t[15]=(h*v-d*b+u*y)*Z,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,m=r*d,M=o*h,_=o*d,g=a*d,y=l*c,b=l*h,p=l*d,v=n.x,E=n.y,x=n.z;return s[0]=(1-(M+g))*v,s[1]=(f+p)*v,s[2]=(m-b)*v,s[3]=0,s[4]=(f-p)*E,s[5]=(1-(u+g))*E,s[6]=(_+y)*E,s[7]=0,s[8]=(m+b)*x,s[9]=(_-y)*x,s[10]=(1-(u+M))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=ts.set(s[0],s[1],s[2]).length(),a=ts.set(s[4],s[5],s[6]).length(),l=ts.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Tn.copy(this);let c=1/o,h=1/a,d=1/l;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=d,Tn.elements[9]*=d,Tn.elements[10]*=d,e.setFromRotationMatrix(Tn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Mn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),m,M;if(l)m=r/(o-r),M=o*r/(o-r);else if(a===Mn)m=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===gs)m=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Mn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),m,M;if(l)m=1/(o-r),M=o/(o-r);else if(a===Mn)m=-2/(o-r),M=-(o+r)/(o-r);else if(a===gs)m=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ts=new V,Tn=new Ht,_p=new V(0,0,0),yp=new V(1,1,1),ci=new V,ro=new V,fn=new V,Nh=new Ht,Fh=new Ge,ln=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ce(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fh.setFromEuler(this),this.setFromQuaternion(Fh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ln.DEFAULT_ORDER="XYZ";var rr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Mp=0,Dh=new V,es=new Ge,Gn=new Ht,oo=new V,Ws=new V,vp=new V,Sp=new Ge,Lh=new V(1,0,0),Bh=new V(0,1,0),kh=new V(0,0,1),Oh={type:"added"},bp={type:"removed"},ns={type:"childadded",child:null},Hl={type:"childremoved",child:null},Je=class i extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=Or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new V,e=new ln,n=new Ge,s=new V(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ht},normalMatrix:{value:new $t}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.multiply(es),this}rotateOnWorldAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.premultiply(es),this}rotateX(t){return this.rotateOnAxis(Lh,t)}rotateY(t){return this.rotateOnAxis(Bh,t)}rotateZ(t){return this.rotateOnAxis(kh,t)}translateOnAxis(t,e){return Dh.copy(t).applyQuaternion(this.quaternion),this.position.add(Dh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Lh,t)}translateY(t){return this.translateOnAxis(Bh,t)}translateZ(t){return this.translateOnAxis(kh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?oo.copy(t):oo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Ws,oo,this.up):Gn.lookAt(oo,Ws,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),es.setFromRotationMatrix(Gn),this.quaternion.premultiply(es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Oh),ns.child=t,this.dispatchEvent(ns),ns.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bp),Hl.child=t,this.dispatchEvent(Hl),Hl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Oh),ns.child=t,this.dispatchEvent(ns),ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,t,vp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,Sp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Je.DEFAULT_UP=new V(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rn=class extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}},wp={type:"move"},ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let M of t.hand.values()){let _=e.getJointPose(M,n),g=this._getHandJoint(c,M);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new rn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},ao={h:0,s:0,l:0};function Wl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var xt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=dp(t,1),e=ce(e,0,1),n=ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Wl(o,r,t+1/3),this.g=Wl(o,r,t),this.b=Wl(o,r,t-1/3)}return ae.colorSpaceToWorking(this,s),this}setStyle(t,e=ze){function n(r){r!==void 0&&parseFloat(r)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){let n=Xu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}copyLinearToSRGB(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return ae.workingToColorSpace($e.copy(this),t),Math.round(ce($e.r*255,0,255))*65536+Math.round(ce($e.g*255,0,255))*256+Math.round(ce($e.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace($e.copy(this),e);let n=$e.r,s=$e.g,r=$e.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=ze){ae.workingToColorSpace($e.copy(this),t);let e=$e.r,n=$e.g,s=$e.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(ao);let n=kl(hi.h,ao.h,e),s=kl(hi.s,ao.s,e),r=kl(hi.l,ao.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$e=new xt;xt.NAMES=Xu;var or=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new xt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ar=class extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},An=new V,Hn=new V,Zl=new V,Wn=new V,is=new V,ss=new V,Vh=new V,Yl=new V,Xl=new V,Jl=new V,ql=new we,jl=new we,Ql=new we,pi=class i{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),An.subVectors(t,e),s.cross(An);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){An.subVectors(s,e),Hn.subVectors(n,e),Zl.subVectors(t,e);let o=An.dot(An),a=An.dot(Hn),l=An.dot(Zl),c=Hn.dot(Hn),h=Hn.dot(Zl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wn.x),l.addScaledVector(o,Wn.y),l.addScaledVector(a,Wn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return ql.setScalar(0),jl.setScalar(0),Ql.setScalar(0),ql.fromBufferAttribute(t,e),jl.fromBufferAttribute(t,n),Ql.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ql,r.x),o.addScaledVector(jl,r.y),o.addScaledVector(Ql,r.z),o}static isFrontFacing(t,e,n,s){return An.subVectors(n,e),Hn.subVectors(t,e),An.cross(Hn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),An.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;is.subVectors(s,n),ss.subVectors(r,n),Yl.subVectors(t,n);let l=is.dot(Yl),c=ss.dot(Yl);if(l<=0&&c<=0)return e.copy(n);Xl.subVectors(t,s);let h=is.dot(Xl),d=ss.dot(Xl);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(is,o);Jl.subVectors(t,r);let f=is.dot(Jl),m=ss.dot(Jl);if(m>=0&&f<=m)return e.copy(r);let M=f*c-l*m;if(M<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(ss,a);let _=h*m-f*d;if(_<=0&&d-h>=0&&f-m>=0)return Vh.subVectors(r,s),a=(d-h)/(d-h+(f-m)),e.copy(s).addScaledVector(Vh,a);let g=1/(_+M+u);return o=M*g,a=u*g,e.copy(n).addScaledVector(is,o).addScaledVector(ss,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vn=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lo.copy(n.boundingBox)),lo.applyMatrix4(t.matrixWorld),this.union(lo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zs),co.subVectors(this.max,Zs),rs.subVectors(t.a,Zs),os.subVectors(t.b,Zs),as.subVectors(t.c,Zs),ui.subVectors(os,rs),di.subVectors(as,os),Ni.subVectors(rs,as);let e=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Ni.z,Ni.y,ui.z,0,-ui.x,di.z,0,-di.x,Ni.z,0,-Ni.x,-ui.y,ui.x,0,-di.y,di.x,0,-Ni.y,Ni.x,0];return!Kl(e,rs,os,as,co)||(e=[1,0,0,0,1,0,0,0,1],!Kl(e,rs,os,as,co))?!1:(ho.crossVectors(ui,di),e=[ho.x,ho.y,ho.z],Kl(e,rs,os,as,co))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Zn=[new V,new V,new V,new V,new V,new V,new V,new V],Rn=new V,lo=new vn,rs=new V,os=new V,as=new V,ui=new V,di=new V,Ni=new V,Zs=new V,co=new V,ho=new V,Fi=new V;function Kl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Fi.fromArray(i,r);let a=s.x*Math.abs(Fi.x)+s.y*Math.abs(Fi.y)+s.z*Math.abs(Fi.z),l=t.dot(Fi),c=e.dot(Fi),h=n.dot(Fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Pe=new V,uo=new Pt,Ep=0,mn=class extends Dn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ep++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=zu,this.updateRanges=[],this.gpuType=wn,this.version=0,this._normalizationScale=t!==void 0?Fc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)uo.fromBufferAttribute(this,e),uo.applyMatrix3(t),this.setXY(e,uo.x,uo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):fp(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):pp(t,this.array)}};var lr=class extends mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var cr=class extends mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var kt=class extends mn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Tp=new vn,Ys=new V,$l=new V,Ln=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Tp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ys.subVectors(t,this.center);let e=Ys.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ys,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($l.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ys.copy(t.center).add($l)),this.expandByPoint(Ys.copy(t.center).sub($l))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ap=0,yn=new Ht,tc=new Je,ls=new V,pn=new vn,Xs=new vn,Ve=new V,se=class i extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=Or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hp(t)?cr:lr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,n){return yn.makeTranslation(t,e,n),this.applyMatrix4(yn),this}scale(t,e,n){return yn.makeScale(t,e,n),this.applyMatrix4(yn),this}lookAt(t){return tc.lookAt(t),tc.updateMatrix(),this.applyMatrix4(tc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new kt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ln);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let n=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(pn.min,Xs.min),pn.expandByPoint(Ve),Ve.addVectors(pn.max,Xs.max),pn.expandByPoint(Ve)):(pn.expandByPoint(Xs.min),pn.expandByPoint(Xs.max))}pn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ve));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ve.fromBufferAttribute(a,c),l&&(ls.fromBufferAttribute(t,c),Ve.add(ls)),s=Math.max(s,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new mn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)a[P]=new V,l[P]=new V;let h=new V,d=new V,u=new V,f=new Pt,m=new Pt,M=new Pt,_=new V,g=new V;function y(P,w,U){c[P]=c[w]=c[U]=1,h.fromBufferAttribute(n,P),d.fromBufferAttribute(n,w),u.fromBufferAttribute(n,U),f.fromBufferAttribute(r,P),m.fromBufferAttribute(r,w),M.fromBufferAttribute(r,U),d.sub(h),u.sub(h),m.sub(f),M.sub(f);let F=1/(m.x*M.y-M.x*m.y);isFinite(F)&&(_.copy(d).multiplyScalar(M.y).addScaledVector(u,-m.y).multiplyScalar(F),g.copy(u).multiplyScalar(m.x).addScaledVector(d,-M.x).multiplyScalar(F),a[P].add(_),a[w].add(_),a[U].add(_),l[P].add(g),l[w].add(g),l[U].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let P=0,w=b.length;P<w;++P){let U=b[P],F=U.start,B=U.count;for(let N=F,Z=F+B;N<Z;N+=3)y(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let p=new V,v=new V,E=new V,x=new V;function S(P){E.fromBufferAttribute(s,P),x.copy(E);let w=a[P];p.copy(w),p.sub(E.multiplyScalar(E.dot(w))).normalize(),v.crossVectors(x,w);let F=v.dot(l[P])<0?-1:1;o.setXYZW(P,p.x,p.y,p.z,F)}for(let P=0,w=n.count;P<w;++P)c[P]&&S(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new V,r=new V,o=new V,a=new V,l=new V,c=new V,h=new V,d=new V;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),M=t.getX(u+1),_=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,_),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,_),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let M=0,_=l.length;M<_;M++){a.isInterleavedBufferAttribute?f=l[M]*a.data.stride+a.offset:f=l[M]*h;for(let g=0;g<h;g++)u[m++]=c[f++]}return new mn(u,h,d)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ec=new V,Rp=new V,Cp=new $t,Cn=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ec.subVectors(n,e).cross(Rp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(ec),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Cp.getNormalMatrix(t),s=this.coplanarPoint(ec).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Ip=0,Sn=class extends Dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=Or(),this.name="",this.type="Material",this.blending=Es,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mc,this.blendDst=vc,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Uo,this.stencilZFail=Uo,this.stencilZPass=Uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new xt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Cn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Pt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Yn=new V,nc=new V,fo=new V,po=new V,Ms=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){nc.copy(t).add(e).multiplyScalar(.5),fo.copy(e).sub(t).normalize(),po.copy(this.origin).sub(nc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(fo),a=po.dot(this.direction),l=-po.dot(fo),c=po.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=r*h,d>=0)if(u>=-m)if(u<=m){let M=1/h;d*=M,u*=M,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(nc).addScaledVector(fo,u),f}intersectSphere(t,e){if(t.radius<0)return null;Yn.subVectors(t.center,this.origin);let n=Yn.dot(this.direction),s=Yn.dot(Yn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,m=e.x-o.x,M=e.y-o.y,_=e.z-o.z,g=n.x-o.x,y=n.y-o.y,b=n.z-o.z,p=Math.abs(l),v=Math.abs(c),E=Math.abs(h),x,S,P,w,U,F,B,N,Z,H,J,G;if(p>=v&&p>=E?(P=l,F=d,Z=m,G=g,l>=0?(x=c,S=h,w=u,U=f,B=M,N=_,H=y,J=b):(x=h,S=c,w=f,U=u,B=_,N=M,H=b,J=y)):v>=E?(P=c,F=u,Z=M,G=y,c>=0?(x=h,S=l,w=f,U=d,B=_,N=m,H=b,J=g):(x=l,S=h,w=d,U=f,B=m,N=_,H=g,J=b)):(P=h,F=f,Z=_,G=b,h>=0?(x=l,S=c,w=d,U=u,B=m,N=M,H=g,J=y):(x=c,S=l,w=u,U=d,B=M,N=m,H=y,J=g)),P===0)return null;let I=x/P,W=S/P,D=1/P,O=w-I*F,Q=U-W*F,k=B-I*Z,C=N-W*Z,nt=H-I*G,ut=J-W*G,ot=nt*C-ut*k,dt=O*ut-Q*nt,_t=k*Q-C*O;if(s){if(ot<0||dt<0||_t<0)return null}else if((ot<0||dt<0||_t<0)&&(ot>0||dt>0||_t>0))return null;let pt=ot+dt+_t;if(pt===0)return null;let Ct=D*(ot*F+dt*Z+_t*G);return(pt>0?Ct<0:Ct>0)?null:this.at(Ct/pt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},le=class extends Sn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Er,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},zh=new Ht,Di=new Ms,mo=new Ln,Gh=new V,go=new V,xo=new V,_o=new V,ic=new V,yo=new V,Hh=new V,Mo=new V,qt=class extends Je{constructor(t=new se,e=new le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){yo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(ic.fromBufferAttribute(d,t),o?yo.addScaledVector(ic,h):yo.addScaledVector(ic.sub(e),h))}e.add(yo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(r),Di.copy(t.ray).recast(t.near),!(mo.containsPoint(Di.origin)===!1&&(Di.intersectSphere(mo,Gh)===null||Di.origin.distanceToSquared(Gh)>(t.far-t.near)**2))&&(zh.copy(r).invert(),Di.copy(t.ray).applyMatrix4(zh),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Di)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,M=u.length;m<M;m++){let _=u[m],g=o[_.materialIndex],y=Math.max(_.start,f.start),b=Math.min(a.count,Math.min(_.start+_.count,f.start+f.count));for(let p=y,v=b;p<v;p+=3){let E=a.getX(p),x=a.getX(p+1),S=a.getX(p+2);s=vo(this,g,t,n,c,h,d,E,x,S),s&&(s.faceIndex=Math.floor(p/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),M=Math.min(a.count,f.start+f.count);for(let _=m,g=M;_<g;_+=3){let y=a.getX(_),b=a.getX(_+1),p=a.getX(_+2);s=vo(this,o,t,n,c,h,d,y,b,p),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,M=u.length;m<M;m++){let _=u[m],g=o[_.materialIndex],y=Math.max(_.start,f.start),b=Math.min(l.count,Math.min(_.start+_.count,f.start+f.count));for(let p=y,v=b;p<v;p+=3){let E=p,x=p+1,S=p+2;s=vo(this,g,t,n,c,h,d,E,x,S),s&&(s.faceIndex=Math.floor(p/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let _=m,g=M;_<g;_+=3){let y=_,b=_+1,p=_+2;s=vo(this,o,t,n,c,h,d,y,b,p),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}};function Pp(i,t,e,n,s,r,o,a){let l;if(t.side===De?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Mi,a),l===null)return null;Mo.copy(a),Mo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Mo);return c<e.near||c>e.far?null:{distance:c,point:Mo.clone(),object:i}}function vo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,go),i.getVertexPosition(l,xo),i.getVertexPosition(c,_o);let h=Pp(i,t,e,n,go,xo,_o,Hh);if(h){let d=new V;pi.getBarycoord(Hh,go,xo,_o,d),s&&(h.uv=pi.getInterpolatedAttribute(s,a,l,c,d,new Pt)),r&&(h.uv1=pi.getInterpolatedAttribute(r,a,l,c,d,new Pt)),o&&(h.normal=pi.getInterpolatedAttribute(o,a,l,c,d,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new V,materialIndex:0};pi.getNormal(go,xo,_o,u.normal),h.face=u,h.barycoord=d}return h}var hr=class extends an{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ue,h=Ue,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ur=class extends mn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},cs=new Ht,Wh=new Ht,So=[],Zh=new vn,Up=new Ht,Js=new qt,qs=new Ln,fe=class extends qt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ur(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Up)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,cs),Zh.copy(t.boundingBox).applyMatrix4(cs),this.boundingBox.union(Zh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ln),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,cs),qs.copy(t.boundingSphere).applyMatrix4(cs),this.boundingSphere.union(qs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Js.geometry=this.geometry,Js.material=this.material,Js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(n),t.ray.intersectsSphere(qs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,cs),Wh.multiplyMatrices(n,cs),Js.matrixWorld=Wh,Js.raycast(t,So);for(let o=0,a=So.length;o<a;o++){let l=So[o];l.instanceId=r,l.object=this,e.push(l)}So.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ur(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new hr(new Float32Array(s*this.count),s,this.count,Ea,wn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Li=new Ln,Np=new Pt(.5,.5),bo=new V,mi=class{constructor(t=new Cn,e=new Cn,n=new Cn,s=new Cn,r=new Cn,o=new Cn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],m=r[8],M=r[9],_=r[10],g=r[11],y=r[12],b=r[13],p=r[14],v=r[15];if(s[0].setComponents(c-o,f-h,g-m,v-y).normalize(),s[1].setComponents(c+o,f+h,g+m,v+y).normalize(),s[2].setComponents(c+a,f+d,g+M,v+b).normalize(),s[3].setComponents(c-a,f-d,g-M,v-b).normalize(),n)s[4].setComponents(l,u,_,p).normalize(),s[5].setComponents(c-l,f-u,g-_,v-p).normalize();else if(s[4].setComponents(c-l,f-u,g-_,v-p).normalize(),e===Mn)s[5].setComponents(c+l,f+u,g+_,v+p).normalize();else if(e===gs)s[5].setComponents(l,u,_,p).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(t){Li.center.set(0,0,0);let e=Np.distanceTo(t.center);return Li.radius=.7071067811865476+e,Li.applyMatrix4(t.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(bo.x=s.normal.x>0?t.max.x:t.min.x,bo.y=s.normal.y>0?t.max.y:t.min.y,bo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(bo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Yh=new Ht,Yo=class i{constructor(){this.coordinateSystem=Mn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Yh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new mi),n[s].setFromProjectionMatrix(Yh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new mi),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Fe=class extends Sn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Xo=new V,Jo=new V,Xh=new Ht,js=new Ms,wo=new Ln,sc=new V,Jh=new V,qo=class extends Je{constructor(t=new se,e=new Fe){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Xo.fromBufferAttribute(e,s-1),Jo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Xo.distanceTo(Jo);t.setAttribute("lineDistance",new kt(n,1))}else Xt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(s),wo.radius+=r,t.ray.intersectsSphere(wo)===!1)return;Xh.copy(s).invert(),js.copy(t.ray).applyMatrix4(Xh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let M=f,_=m-1;M<_;M+=c){let g=h.getX(M),y=h.getX(M+1),b=Eo(this,t,js,l,g,y,M);b&&e.push(b)}if(this.isLineLoop){let M=h.getX(m-1),_=h.getX(f),g=Eo(this,t,js,l,M,_,m-1);g&&e.push(g)}}else{let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let M=f,_=m-1;M<_;M+=c){let g=Eo(this,t,js,l,M,M+1,M);g&&e.push(g)}if(this.isLineLoop){let M=Eo(this,t,js,l,m-1,f,m-1);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Eo(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Xo.fromBufferAttribute(a,s),Jo.fromBufferAttribute(a,r),e.distanceSqToSegment(Xo,Jo,sc,Jh)>n)return;sc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(sc);if(!(c<t.near||c>t.far))return{distance:c,point:Jh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var qh=new V,jh=new V,He=class extends qo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)qh.fromBufferAttribute(e,s),jh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+qh.distanceTo(jh);t.setAttribute("lineDistance",new kt(n,1))}else Xt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var gi=class extends Sn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Qh=new Ht,fc=new Ms,To=new Ln,Ao=new V,Bi=class extends Je{constructor(t=new se,e=new gi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(s),To.radius+=r,t.ray.intersectsSphere(To)===!1)return;Qh.copy(s).invert(),fc.copy(t.ray).applyMatrix4(Qh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=u,M=f;m<M;m++){let _=c.getX(m);Ao.fromBufferAttribute(d,_),Kh(Ao,_,l,s,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=u,M=f;m<M;m++)Ao.fromBufferAttribute(d,m),Kh(Ao,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Kh(i,t,e,n,s,r,o){let a=fc.distanceSqToPoint(i);if(a<e){let l=new V;fc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var dr=class extends an{constructor(t=[],e=Yi,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},fr=class extends an{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var qn=class extends an{constructor(t,e,n=Pn,s,r,o,a=Ue,l=Ue,c,h=Jn,d=1){if(h!==Jn&&h!==ti)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new _s(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},pr=class extends qn{constructor(t,e=Pn,n=Yi,s,r,o=Ue,a=Ue,l,c=Jn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},mr=class extends an{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},cn=class i extends se{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(h,3)),this.setAttribute("uv",new kt(d,2));function m(M,_,g,y,b,p,v,E,x,S,P){let w=p/x,U=v/S,F=p/2,B=v/2,N=E/2,Z=x+1,H=S+1,J=0,G=0,I=new V;for(let W=0;W<H;W++){let D=W*U-B;for(let O=0;O<Z;O++){let Q=O*w-F;I[M]=Q*y,I[_]=D*b,I[g]=N,c.push(I.x,I.y,I.z),I[M]=0,I[_]=0,I[g]=E>0?1:-1,h.push(I.x,I.y,I.z),d.push(O/x),d.push(1-W/S),J+=1}}for(let W=0;W<S;W++)for(let D=0;D<x;D++){let O=u+D+Z*W,Q=u+D+Z*(W+1),k=u+(D+1)+Z*(W+1),C=u+(D+1)+Z*W;l.push(O,Q,C),l.push(Q,k,C),G+=6}a.addGroup(f,G,P),f+=G,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var In=class i extends se{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new V,h=new Pt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new kt(o,3)),this.setAttribute("normal",new kt(a,3)),this.setAttribute("uv",new kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ve=class i extends se{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,M=[],_=n/2,g=0;y(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new kt(d,3)),this.setAttribute("normal",new kt(u,3)),this.setAttribute("uv",new kt(f,2));function y(){let p=new V,v=new V,E=0,x=(e-t)/n;for(let S=0;S<=r;S++){let P=[],w=S/r,U=w*(e-t)+t;for(let F=0;F<=s;F++){let B=F/s,N=B*l+a,Z=Math.sin(N),H=Math.cos(N);v.x=U*Z,v.y=-w*n+_,v.z=U*H,d.push(v.x,v.y,v.z),p.set(Z,x,H).normalize(),u.push(p.x,p.y,p.z),f.push(B,1-w),P.push(m++)}M.push(P)}for(let S=0;S<s;S++)for(let P=0;P<r;P++){let w=M[P][S],U=M[P+1][S],F=M[P+1][S+1],B=M[P][S+1];(t>0||P!==0)&&(h.push(w,U,B),E+=3),(e>0||P!==r-1)&&(h.push(U,F,B),E+=3)}c.addGroup(g,E,0),g+=E}function b(p){let v=m,E=new Pt,x=new V,S=0,P=p===!0?t:e,w=p===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,_*w,0),u.push(0,w,0),f.push(.5,.5),m++;let U=m;for(let F=0;F<=s;F++){let N=F/s*l+a,Z=Math.cos(N),H=Math.sin(N);x.x=P*H,x.y=_*w,x.z=P*Z,d.push(x.x,x.y,x.z),u.push(0,w,0),E.x=Z*.5+.5,E.y=H*.5*w+.5,f.push(E.x,E.y),m++}for(let F=0;F<s;F++){let B=v+F,N=U+F;p===!0?h.push(N,N+1,B):h.push(N+1,N,B),S+=3}c.addGroup(g,S,p===!0?1:2),g+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},vs=class i extends ve{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},jo=class i extends se{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new kt(r,3)),this.setAttribute("normal",new kt(r.slice(),3)),this.setAttribute("uv",new kt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let b=new V,p=new V,v=new V;for(let E=0;E<e.length;E+=3)f(e[E+0],b),f(e[E+1],p),f(e[E+2],v),l(b,p,v,y)}function l(y,b,p,v){let E=v+1,x=[];for(let S=0;S<=E;S++){x[S]=[];let P=y.clone().lerp(p,S/E),w=b.clone().lerp(p,S/E),U=E-S;for(let F=0;F<=U;F++)F===0&&S===E?x[S][F]=P:x[S][F]=P.clone().lerp(w,F/U)}for(let S=0;S<E;S++)for(let P=0;P<2*(E-S)-1;P++){let w=Math.floor(P/2);P%2===0?(u(x[S][w+1]),u(x[S+1][w]),u(x[S][w])):(u(x[S][w+1]),u(x[S+1][w+1]),u(x[S+1][w]))}}function c(y){let b=new V;for(let p=0;p<r.length;p+=3)b.x=r[p+0],b.y=r[p+1],b.z=r[p+2],b.normalize().multiplyScalar(y),r[p+0]=b.x,r[p+1]=b.y,r[p+2]=b.z}function h(){let y=new V;for(let b=0;b<r.length;b+=3){y.x=r[b+0],y.y=r[b+1],y.z=r[b+2];let p=_(y)/2/Math.PI+.5,v=g(y)/Math.PI+.5;o.push(p,1-v)}m(),d()}function d(){for(let y=0;y<o.length;y+=6){let b=o[y+0],p=o[y+2],v=o[y+4],E=Math.max(b,p,v),x=Math.min(b,p,v);E>.9&&x<.1&&(b<.2&&(o[y+0]+=1),p<.2&&(o[y+2]+=1),v<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,b){let p=y*3;b.x=t[p+0],b.y=t[p+1],b.z=t[p+2]}function m(){let y=new V,b=new V,p=new V,v=new V,E=new Pt,x=new Pt,S=new Pt;for(let P=0,w=0;P<r.length;P+=9,w+=6){y.set(r[P+0],r[P+1],r[P+2]),b.set(r[P+3],r[P+4],r[P+5]),p.set(r[P+6],r[P+7],r[P+8]),E.set(o[w+0],o[w+1]),x.set(o[w+2],o[w+3]),S.set(o[w+4],o[w+5]),v.copy(y).add(b).add(p).divideScalar(3);let U=_(v);M(E,w+0,y,U),M(x,w+2,b,U),M(S,w+4,p,U)}}function M(y,b,p,v){v<0&&y.x===1&&(o[b]=y.x-1),p.x===0&&p.z===0&&(o[b]=v/2/Math.PI+.5)}function _(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Pt:new V);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new V,s=[],r=[],o=[],a=new V,l=new Ht;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new V)}r[0]=new V,o[0]=new V;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(ce(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ce(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},gr=class extends bn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Pt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Qo=class extends gr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Dc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var $h=new V,tu=new V,rc=new Dc,oc=new Dc,ac=new Dc,Ko=class extends bn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new V){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(tu.subVectors(s[0],s[1]).add(s[0]),c=tu);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:($h.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=$h),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),M=Math.pow(d.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(h),f);M<1e-4&&(M=1),m<1e-4&&(m=M),_<1e-4&&(_=M),rc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,M,_),oc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,M,_),ac.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,M,_)}else this.curveType==="catmullrom"&&(rc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),oc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),ac.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(rc.calc(l),oc.calc(l),ac.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new V().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function eu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Fp(i,t){let e=1-i;return e*e*t}function Dp(i,t){return 2*(1-i)*i*t}function Lp(i,t){return i*i*t}function Ks(i,t,e,n){return Fp(i,t)+Dp(i,e)+Lp(i,n)}function Bp(i,t){let e=1-i;return e*e*e*t}function kp(i,t){let e=1-i;return 3*e*e*i*t}function Op(i,t){return 3*(1-i)*i*i*t}function Vp(i,t){return i*i*i*t}function $s(i,t,e,n,s){return Bp(i,t)+kp(i,e)+Op(i,n)+Vp(i,s)}var $o=class extends bn{constructor(t=new Pt,e=new Pt,n=new Pt,s=new Pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Pt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($s(t,s.x,r.x,o.x,a.x),$s(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ta=class extends bn{constructor(t=new V,e=new V,n=new V,s=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new V){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($s(t,s.x,r.x,o.x,a.x),$s(t,s.y,r.y,o.y,a.y),$s(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ea=class extends bn{constructor(t=new Pt,e=new Pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Pt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},na=class extends bn{constructor(t=new V,e=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new V){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new V){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ia=class extends bn{constructor(t=new Pt,e=new Pt,n=new Pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Pt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ks(t,s.x,r.x,o.x),Ks(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ki=class extends bn{constructor(t=new V,e=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new V){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ks(t,s.x,r.x,o.x),Ks(t,s.y,r.y,o.y),Ks(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sa=class extends bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Pt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(eu(a,l.x,c.x,h.x,d.x),eu(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Pt().fromArray(s))}return this}},zp=Object.freeze({__proto__:null,ArcCurve:Qo,CatmullRomCurve3:Ko,CubicBezierCurve:$o,CubicBezierCurve3:ta,EllipseCurve:gr,LineCurve:ea,LineCurve3:na,QuadraticBezierCurve:ia,QuadraticBezierCurve3:ki,SplineCurve:sa});var jn=class i extends jo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Oi=class i extends se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],m=[],M=[],_=[];for(let g=0;g<h;g++){let y=g*u-o;for(let b=0;b<c;b++){let p=b*d-r;m.push(p,-y,0),M.push(0,0,1),_.push(b/a),_.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let b=y+c*g,p=y+c*(g+1),v=y+1+c*(g+1),E=y+1+c*g;f.push(b,p,E),f.push(p,v,E)}this.setIndex(f),this.setAttribute("position",new kt(m,3)),this.setAttribute("normal",new kt(M,3)),this.setAttribute("uv",new kt(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Vi=class i extends se{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=t,u=(e-t)/s,f=new V,m=new Pt;for(let M=0;M<=s;M++){for(let _=0;_<=n;_++){let g=r+_/n*o;f.x=d*Math.cos(g),f.y=d*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}d+=u}for(let M=0;M<s;M++){let _=M*(n+1);for(let g=0;g<n;g++){let y=g+_,b=y,p=y+n+1,v=y+n+2,E=y+1;a.push(b,p,E),a.push(p,v,E)}}this.setIndex(a),this.setAttribute("position",new kt(l,3)),this.setAttribute("normal",new kt(c,3)),this.setAttribute("uv",new kt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var de=class i extends se{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new V,u=new V,f=[],m=[],M=[],_=[];for(let g=0;g<=n;g++){let y=[],b=g/n,p=o+b*a,v=t*Math.cos(p),E=Math.sqrt(t*t-v*v),x=0;g===0&&o===0?x=.5/e:g===n&&l===Math.PI&&(x=-.5/e);for(let S=0;S<=e;S++){let P=S/e,w=s+P*r;d.x=-E*Math.cos(w),d.y=v,d.z=E*Math.sin(w),m.push(d.x,d.y,d.z),u.copy(d).normalize(),M.push(u.x,u.y,u.z),_.push(P+x,1-b),y.push(c++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<e;y++){let b=h[g][y+1],p=h[g][y],v=h[g+1][y],E=h[g+1][y+1];(g!==0||o>0)&&f.push(b,p,E),(g!==n-1||l<Math.PI)&&f.push(p,v,E)}this.setIndex(f),this.setAttribute("position",new kt(m,3)),this.setAttribute("normal",new kt(M,3)),this.setAttribute("uv",new kt(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var zi=class i extends se{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new V,f=new V,m=new V;for(let M=0;M<=n;M++){let _=o+M/n*a;for(let g=0;g<=s;g++){let y=g/s*r;f.x=(t+e*Math.cos(_))*Math.cos(y),f.y=(t+e*Math.cos(_))*Math.sin(y),f.z=e*Math.sin(_),c.push(f.x,f.y,f.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),m.subVectors(f,u).normalize(),h.push(m.x,m.y,m.z),d.push(g/s),d.push(M/n)}}for(let M=1;M<=n;M++)for(let _=1;_<=s;_++){let g=(s+1)*M+_-1,y=(s+1)*(M-1)+_-1,b=(s+1)*(M-1)+_,p=(s+1)*M+_;l.push(g,y,p),l.push(y,b,p)}this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(h,3)),this.setAttribute("uv",new kt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var xr=class i extends se{constructor(t=new ki(new V(-1,-1,0),new V(-1,1,0),new V(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new V,l=new V,c=new Pt,h=new V,d=[],u=[],f=[],m=[];M(),this.setIndex(m),this.setAttribute("position",new kt(d,3)),this.setAttribute("normal",new kt(u,3)),this.setAttribute("uv",new kt(f,2));function M(){for(let b=0;b<e;b++)_(b);_(r===!1?e:0),y(),g()}function _(b){h=t.getPointAt(b/e,h);let p=o.normals[b],v=o.binormals[b];for(let E=0;E<=s;E++){let x=E/s*Math.PI*2,S=Math.sin(x),P=-Math.cos(x);l.x=P*p.x+S*v.x,l.y=P*p.y+S*v.y,l.z=P*p.z+S*v.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let b=1;b<=e;b++)for(let p=1;p<=s;p++){let v=(s+1)*(b-1)+(p-1),E=(s+1)*b+(p-1),x=(s+1)*b+p,S=(s+1)*(b-1)+p;m.push(v,E,S),m.push(E,x,S)}}function y(){for(let b=0;b<=e;b++)for(let p=0;p<=s;p++)c.x=b/e,c.y=p/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new zp[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Ji(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(nu(s))s.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(nu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function tn(i){let t={};for(let e=0;e<i.length;e++){let n=Ji(i[e]);for(let s in n)t[s]=n[s]}return t}function nu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Gp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Lc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var ni={clone:Ji,merge:tn},Hp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,We=class extends Sn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hp,this.fragmentShader=Wp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ji(t.uniforms),this.uniformsGroups=Gp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new xt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Pt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new V().fromArray(s.value);break;case"v4":this.uniforms[n].value=new we().fromArray(s.value);break;case"m3":this.uniforms[n].value=new $t().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ht().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ss=class extends We{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Te=class extends Sn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rs,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var un=class extends Sn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new xt(16777215),this.specular=new xt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rs,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Er,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Gi=class extends Sn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rs,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Er,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ra=class extends Sn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},oa=class extends Sn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function hs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ro(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var xi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},aa=class extends xi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hc,endingEnd:hc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case uc:r=t,a=2*e-n;break;case dc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case uc:o=t,l=2*n-e;break;case dc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),M=m*m,_=M*m,g=-u*_+2*u*M-u*m,y=(1+u)*_+(-1.5-2*u)*M+(-.5+u)*m+1,b=(-1-f)*_+(1.5+f)*M+.5*m,p=f*_-f*M;for(let v=0;v!==a;++v)r[v]=g*o[h+v]+y*o[c+v]+b*o[l+v]+p*o[d+v];return r}},la=class extends xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},ca=class extends xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ha=class extends xi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-e)/(s-e),M=1-m;for(let _=0;_!==a;++_)r[_]=o[c+_]*M+o[l+_]*m;return r}let u=a*2,f=t-1;for(let m=0;m!==a;++m){let M=o[c+m],_=o[l+m],g=f*u+m*2,y=d[g],b=d[g+1],p=t*u+m*2,v=h[p],E=h[p+1],x=Yp(n,e,y,v,s);r[m]=Ju(x,M,b,E,_)}return r}};function Ju(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Zp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Yp(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Ju(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Zp(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var gn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=hs(e,this.TimeBufferType),this.values=hs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:hs(t.times,Array),values:hs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Ro(t.settings)&&(n.settings={inTangents:hs(t.settings.inTangents,Array),outTangents:hs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ca(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new la(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new aa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ha(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case tr:e=this.InterpolantFactoryMethodDiscrete;break;case zo:e=this.InterpolantFactoryMethodLinear;break;case Po:e=this.InterpolantFactoryMethodSmooth;break;case cc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return tr;case this.InterpolantFactoryMethodLinear:return zo;case this.InterpolantFactoryMethodSmooth:return Po;case this.InterpolantFactoryMethodBezier:return cc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Ro(this.settings)&&(iu(this.settings.inTangents,t),iu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Ro(this.settings)&&(su(this.settings.inTangents,t),su(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Kt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Kt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Kt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&up(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Kt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Po,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let M=e[d+m];if(M!==e[u+m]||M!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ro(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function iu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function su(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=zo;var _i=class extends gn{constructor(t,e,n){super(t,e,n)}};_i.prototype.ValueTypeName="bool";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=tr;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var ua=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}};ua.prototype.ValueTypeName="color";var da=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}};da.prototype.ValueTypeName="number";var fa=class extends xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ge.slerpFlat(r,0,o,c-a,o,c,l);return r}},_r=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new fa(this.times,this.values,this.getValueSize(),t)}};_r.prototype.ValueTypeName="quaternion";_r.prototype.InterpolantFactoryMethodSmooth=void 0;var yi=class extends gn{constructor(t,e,n){super(t,e,n)}};yi.prototype.ValueTypeName="string";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=tr;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var pa=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}};pa.prototype.ValueTypeName="vector";var ma=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},qu=new ma,ga=class{constructor(t){this.manager=t!==void 0?t:qu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};ga.DEFAULT_MATERIAL_NAME="__DEFAULT";var yr=class extends Je{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var lc=new Ht,ru=new V,ou=new V,xa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mi,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;ru.setFromMatrixPosition(t.matrixWorld),e.position.copy(ru),ou.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ou),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){lc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(lc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===gs||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(lc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Co=new V,Io=new Ge,Nn=new V,Mr=class extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Co,Io,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Co,Io,Nn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Co,Io,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Co,Io,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fi=new V,au=new Pt,lu=new Pt,sn=class extends Mr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Go*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Bl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Go*2*Math.atan(Math.tan(Bl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fi.x,fi.y).multiplyScalar(-t/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-t/fi.z)}getViewSize(t,e){return this.getViewBounds(t,au,lu),e.subVectors(lu,au)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Bl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Hi=class extends Mr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},pc=class extends xa{constructor(){super(new Hi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vr=class extends yr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new pc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Sr=class extends yr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var us=-90,ds=1,bs=class extends Je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new sn(us,ds,t,e);s.layers=this.layers,this.add(s);let r=new sn(us,ds,t,e);r.layers=this.layers,this.add(r);let o=new sn(us,ds,t,e);o.layers=this.layers,this.add(o);let a=new sn(us,ds,t,e);a.layers=this.layers,this.add(a);let l=new sn(us,ds,t,e);l.layers=this.layers,this.add(l);let c=new sn(us,ds,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===gs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=M,t.setRenderTarget(n,5,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},_a=class extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},br=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Xp.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Xp(){this._document.hidden===!1&&this.reset()}var Bc="\\[\\]\\.:\\/",Jp=new RegExp("["+Bc+"]","g"),kc="[^"+Bc+"]",qp="[^"+Bc.replace("\\.","")+"]",jp=/((?:WC+[\/:])*)/.source.replace("WC",kc),Qp=/(WCOD+)?/.source.replace("WCOD",qp),Kp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kc),$p=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kc),tm=new RegExp("^"+jp+Qp+Kp+$p+"$"),em=["material","materials","bones","map"],mc=class{constructor(t,e,n){let s=n||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},be=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Jp,"")}static parseTrackName(t){let e=tm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);em.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Xt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Kt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=mc;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Vy=new Float32Array(1);var gc=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function Oc(i,t,e,n){let s=nm(n);switch(e){case Ac:return i*t;case Ea:return i*t/s.components*s.byteLength;case Ta:return i*t/s.components*s.byteLength;case vi:return i*t*2/s.components*s.byteLength;case Aa:return i*t*2/s.components*s.byteLength;case Rc:return i*t*3/s.components*s.byteLength;case Un:return i*t*4/s.components*s.byteLength;case Ra:return i*t*4/s.components*s.byteLength;case Nr:case Fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Dr:case Lr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ia:case Ua:return Math.max(i,16)*Math.max(t,8)/4;case Ca:case Pa:return Math.max(i,8)*Math.max(t,8)/2;case Na:case Fa:case La:case Ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Da:case Br:case ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Va:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case za:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Wa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case qa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Qa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ka:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case $a:case tl:case el:return Math.ceil(i/4)*Math.ceil(t/4)*16;case nl:case il:return Math.ceil(i/4)*Math.ceil(t/4)*8;case kr:case sl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function nm(i){switch(i){case dn:case bc:return{byteLength:1,components:1};case As:case wc:case qe:return{byteLength:2,components:1};case ba:case wa:return{byteLength:2,components:4};case Pn:case Sa:case wn:return{byteLength:4,components:1};case Ec:case Tc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function xd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function sm(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],M=d[f];M.start<=m.start+m.count+1?m.count=Math.max(m.count,M.start+M.count-m.start):(++u,d[u]=M)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let M=d[f];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var rm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,om=`#ifdef USE_ALPHAHASH
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
#endif`,am=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,um=`#ifdef USE_AOMAP
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
#endif`,dm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fm=`#ifdef USE_BATCHING
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
#endif`,pm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_m=`#ifdef USE_IRIDESCENCE
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
#endif`,ym=`#ifdef USE_BUMPMAP
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
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Em=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Tm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Rm=`#define PI 3.141592653589793
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
} // validated`,Cm=`vec3 transformedNormal = objectNormal;
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
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Um=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lm=`#ifdef USE_ENVMAP
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
#endif`,Bm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,km=`#ifdef USE_ENVMAP
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
#endif`,Om=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vm=`#ifdef USE_ENVMAP
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
#endif`,zm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zm=`#ifdef USE_GRADIENTMAP
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
}`,Ym=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,jm=`#ifdef USE_ENVMAP
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
#endif`,Qm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$m=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eg=`PhysicalMaterial material;
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
#endif`,ng=`uniform sampler2D dfgLUT;
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
}`,ig=`
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
#endif`,sg=`#if defined( RE_IndirectDiffuse )
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
#endif`,rg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,og=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,ag=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ug=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pg=`#if defined( USE_POINTS_UV )
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
#endif`,mg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_g=`#if defined( USE_MORPHCOLORS )
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
#endif`,yg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mg=`#ifdef USE_MORPHTARGETS
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
#endif`,vg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ag=`#ifdef USE_NORMALMAP
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
#endif`,Rg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ig=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ug=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ng=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Og=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hg=`float getShadowMask() {
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
}`,Wg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zg=`#ifdef USE_SKINNING
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
#endif`,Yg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xg=`#ifdef USE_SKINNING
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
#endif`,Jg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kg=`#ifdef USE_TRANSMISSION
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
#endif`,$g=`#ifdef USE_TRANSMISSION
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
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,s0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,r0=`uniform sampler2D t2D;
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
}`,o0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a0=`uniform float backgroundBlurriness;
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
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h0=`#include <common>
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
}`,u0=`#if DEPTH_PACKING == 3200
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
}`,d0=`#define DISTANCE
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
}`,f0=`#define DISTANCE
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
}`,p0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g0=`uniform float scale;
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
}`,x0=`uniform vec3 diffuse;
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
}`,_0=`#include <common>
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
}`,y0=`uniform vec3 diffuse;
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
}`,M0=`#define LAMBERT
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
}`,v0=`#define LAMBERT
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
}`,S0=`#define MATCAP
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
}`,b0=`#define MATCAP
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
}`,w0=`#define NORMAL
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
}`,E0=`#define NORMAL
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
}`,T0=`#define PHONG
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
}`,A0=`#define PHONG
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
}`,R0=`#define STANDARD
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
}`,C0=`#define STANDARD
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
}`,I0=`#define TOON
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
}`,P0=`#define TOON
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
}`,U0=`uniform float size;
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
}`,N0=`uniform vec3 diffuse;
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
}`,F0=`#include <common>
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
}`,D0=`uniform vec3 color;
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
}`,L0=`uniform float rotation;
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
}`,B0=`uniform vec3 diffuse;
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
}`,oe={alphahash_fragment:rm,alphahash_pars_fragment:om,alphamap_fragment:am,alphamap_pars_fragment:lm,alphatest_fragment:cm,alphatest_pars_fragment:hm,aomap_fragment:um,aomap_pars_fragment:dm,batching_pars_vertex:fm,batching_vertex:pm,begin_vertex:mm,beginnormal_vertex:gm,bsdfs:xm,iridescence_fragment:_m,bumpmap_pars_fragment:ym,clipping_planes_fragment:Mm,clipping_planes_pars_fragment:vm,clipping_planes_pars_vertex:Sm,clipping_planes_vertex:bm,color_fragment:wm,color_pars_fragment:Em,color_pars_vertex:Tm,color_vertex:Am,common:Rm,defaultnormal_vertex:Cm,displacementmap_pars_vertex:Im,displacementmap_vertex:Pm,emissivemap_fragment:Um,emissivemap_pars_fragment:Nm,colorspace_fragment:Fm,colorspace_pars_fragment:Dm,envmap_fragment:Lm,envmap_common_pars_fragment:Bm,envmap_pars_fragment:km,envmap_pars_vertex:Om,envmap_physical_pars_fragment:jm,envmap_vertex:Vm,fog_vertex:zm,fog_pars_vertex:Gm,fog_fragment:Hm,fog_pars_fragment:Wm,gradientmap_pars_fragment:Zm,lightmap_pars_fragment:Ym,lights_lambert_fragment:Xm,lights_lambert_pars_fragment:Jm,lights_pars_begin:qm,lights_toon_fragment:Qm,lights_toon_pars_fragment:Km,lights_phong_fragment:$m,lights_phong_pars_fragment:tg,lights_physical_fragment:eg,lights_physical_pars_fragment:ng,lights_fragment_begin:ig,lights_fragment_maps:sg,lights_fragment_end:rg,lightprobes_pars_fragment:og,logdepthbuf_fragment:ag,logdepthbuf_pars_fragment:lg,logdepthbuf_pars_vertex:cg,logdepthbuf_vertex:hg,map_fragment:ug,map_pars_fragment:dg,map_particle_fragment:fg,map_particle_pars_fragment:pg,metalnessmap_fragment:mg,metalnessmap_pars_fragment:gg,morphinstance_vertex:xg,morphcolor_vertex:_g,morphnormal_vertex:yg,morphtarget_pars_vertex:Mg,morphtarget_vertex:vg,normal_fragment_begin:Sg,normal_fragment_maps:bg,normal_pars_fragment:wg,normal_pars_vertex:Eg,normal_vertex:Tg,normalmap_pars_fragment:Ag,clearcoat_normal_fragment_begin:Rg,clearcoat_normal_fragment_maps:Cg,clearcoat_pars_fragment:Ig,iridescence_pars_fragment:Pg,opaque_fragment:Ug,packing:Ng,premultiplied_alpha_fragment:Fg,project_vertex:Dg,dithering_fragment:Lg,dithering_pars_fragment:Bg,roughnessmap_fragment:kg,roughnessmap_pars_fragment:Og,shadowmap_pars_fragment:Vg,shadowmap_pars_vertex:zg,shadowmap_vertex:Gg,shadowmask_pars_fragment:Hg,skinbase_vertex:Wg,skinning_pars_vertex:Zg,skinning_vertex:Yg,skinnormal_vertex:Xg,specularmap_fragment:Jg,specularmap_pars_fragment:qg,tonemapping_fragment:jg,tonemapping_pars_fragment:Qg,transmission_fragment:Kg,transmission_pars_fragment:$g,uv_pars_fragment:t0,uv_pars_vertex:e0,uv_vertex:n0,worldpos_vertex:i0,background_vert:s0,background_frag:r0,backgroundCube_vert:o0,backgroundCube_frag:a0,cube_vert:l0,cube_frag:c0,depth_vert:h0,depth_frag:u0,distance_vert:d0,distance_frag:f0,equirect_vert:p0,equirect_frag:m0,linedashed_vert:g0,linedashed_frag:x0,meshbasic_vert:_0,meshbasic_frag:y0,meshlambert_vert:M0,meshlambert_frag:v0,meshmatcap_vert:S0,meshmatcap_frag:b0,meshnormal_vert:w0,meshnormal_frag:E0,meshphong_vert:T0,meshphong_frag:A0,meshphysical_vert:R0,meshphysical_frag:C0,meshtoon_vert:I0,meshtoon_frag:P0,points_vert:U0,points_frag:N0,shadow_vert:F0,shadow_frag:D0,sprite_vert:L0,sprite_frag:B0},Ut={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},On={basic:{uniforms:tn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:tn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new xt(0)},envMapIntensity:{value:1}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:tn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:tn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:tn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new xt(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:tn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:tn([Ut.points,Ut.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:tn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:tn([Ut.common,Ut.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:tn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:tn([Ut.sprite,Ut.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distance:{uniforms:tn([Ut.common,Ut.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distance_vert,fragmentShader:oe.distance_frag},shadow:{uniforms:tn([Ut.lights,Ut.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};On.physical={uniforms:tn([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};var rl={r:0,b:0,g:0},k0=new Ht,_d=new $t;_d.set(-1,0,0,0,1,0,0,0,1);function O0(i,t,e,n,s,r){let o=new xt(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){let p=y.backgroundBlurriness>0;b=t.get(b,p)}return b}function m(y){let b=!1,p=f(y);p===null?_(o,a):p&&p.isColor&&(_(p,1),b=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?e.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(y,b){let p=f(b);p&&p.isCubeTexture?(c===void 0&&(c=new qt(new cn(1,1,1),new We({name:"BackgroundCubeMaterial",uniforms:Ji(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=p,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(k0.makeRotationFromEuler(b.backgroundRotation)).transpose(),p.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(_d),c.material.toneMapped=ae.getTransfer(p.colorSpace)!==me,(h!==p||d!==p.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=p,d=p.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):p&&p.isTexture&&(l===void 0&&(l=new qt(new Oi(2,2),new We({name:"BackgroundMaterial",uniforms:Ji(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=p,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ae.getTransfer(p.colorSpace)!==me,p.matrixAutoUpdate===!0&&p.updateMatrix(),l.material.uniforms.uvTransform.value.copy(p.matrix),(h!==p||d!==p.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=p,d=p.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function _(y,b){y.getRGB(rl,Lc(i)),e.buffers.color.setClear(rl.r,rl.g,rl.b,b,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),a=b,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,_(o,a)},render:m,addToRenderList:M,dispose:g}}function V0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(U,F,B,N,Z){let H=!1,J=d(U,N,B,F);r!==J&&(r=J,c(r.object)),H=f(U,N,B,Z),H&&m(U,N,B,Z),Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,p(U,F,B,N),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function l(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function h(U){return i.deleteVertexArray(U)}function d(U,F,B,N){let Z=N.wireframe===!0,H=n[F.id];H===void 0&&(H={},n[F.id]=H);let J=U.isInstancedMesh===!0?U.id:0,G=H[J];G===void 0&&(G={},H[J]=G);let I=G[B.id];I===void 0&&(I={},G[B.id]=I);let W=I[Z];return W===void 0&&(W=u(l()),I[Z]=W),W}function u(U){let F=[],B=[],N=[];for(let Z=0;Z<e;Z++)F[Z]=0,B[Z]=0,N[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:B,attributeDivisors:N,object:U,attributes:{},index:null}}function f(U,F,B,N){let Z=r.attributes,H=F.attributes,J=0,G=B.getAttributes();for(let I in G)if(G[I].location>=0){let D=Z[I],O=H[I];if(O===void 0&&(I==="instanceMatrix"&&U.instanceMatrix&&(O=U.instanceMatrix),I==="instanceColor"&&U.instanceColor&&(O=U.instanceColor)),D===void 0||D.attribute!==O||O&&D.data!==O.data)return!0;J++}return r.attributesNum!==J||r.index!==N}function m(U,F,B,N){let Z={},H=F.attributes,J=0,G=B.getAttributes();for(let I in G)if(G[I].location>=0){let D=H[I];D===void 0&&(I==="instanceMatrix"&&U.instanceMatrix&&(D=U.instanceMatrix),I==="instanceColor"&&U.instanceColor&&(D=U.instanceColor));let O={};O.attribute=D,D&&D.data&&(O.data=D.data),Z[I]=O,J++}r.attributes=Z,r.attributesNum=J,r.index=N}function M(){let U=r.newAttributes;for(let F=0,B=U.length;F<B;F++)U[F]=0}function _(U){g(U,0)}function g(U,F){let B=r.newAttributes,N=r.enabledAttributes,Z=r.attributeDivisors;B[U]=1,N[U]===0&&(i.enableVertexAttribArray(U),N[U]=1),Z[U]!==F&&(i.vertexAttribDivisor(U,F),Z[U]=F)}function y(){let U=r.newAttributes,F=r.enabledAttributes;for(let B=0,N=F.length;B<N;B++)F[B]!==U[B]&&(i.disableVertexAttribArray(B),F[B]=0)}function b(U,F,B,N,Z,H,J){J===!0?i.vertexAttribIPointer(U,F,B,Z,H):i.vertexAttribPointer(U,F,B,N,Z,H)}function p(U,F,B,N){M();let Z=N.attributes,H=B.getAttributes(),J=F.defaultAttributeValues;for(let G in H){let I=H[G];if(I.location>=0){let W=Z[G];if(W===void 0&&(G==="instanceMatrix"&&U.instanceMatrix&&(W=U.instanceMatrix),G==="instanceColor"&&U.instanceColor&&(W=U.instanceColor)),W!==void 0){let D=W.normalized,O=W.itemSize,Q=t.get(W);if(Q===void 0)continue;let k=Q.buffer,C=Q.type,nt=Q.bytesPerElement,ut=C===i.INT||C===i.UNSIGNED_INT||W.gpuType===Sa;if(W.isInterleavedBufferAttribute){let ot=W.data,dt=ot.isInterleavedBuffer===!0?ot.stride:ot.itemSize,_t=W.offset;if(ot.isInstancedInterleavedBuffer||ot.isInstancedBufferAttribute){for(let pt=0;pt<I.locationSize;pt++)g(I.location+pt,ot.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let pt=0;pt<I.locationSize;pt++)_(I.location+pt);i.bindBuffer(i.ARRAY_BUFFER,k);for(let pt=0;pt<I.locationSize;pt++)b(I.location+pt,O/I.locationSize,C,D,dt*nt,(_t+O/I.locationSize*pt)*nt,ut)}else{if(W.isInstancedBufferAttribute){for(let ot=0;ot<I.locationSize;ot++)g(I.location+ot,W.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ot=0;ot<I.locationSize;ot++)_(I.location+ot);i.bindBuffer(i.ARRAY_BUFFER,k);for(let ot=0;ot<I.locationSize;ot++)b(I.location+ot,O/I.locationSize,C,D,O*nt,O/I.locationSize*ot*nt,ut)}}else if(J!==void 0){let D=J[G];if(D!==void 0)switch(D.length){case 2:i.vertexAttrib2fv(I.location,D);break;case 3:i.vertexAttrib3fv(I.location,D);break;case 4:i.vertexAttrib4fv(I.location,D);break;default:i.vertexAttrib1fv(I.location,D)}}}}y()}function v(){P();for(let U in n){let F=n[U];for(let B in F){let N=F[B];for(let Z in N){let H=N[Z];for(let J in H)h(H[J].object),delete H[J];delete N[Z]}}delete n[U]}}function E(U){if(n[U.id]===void 0)return;let F=n[U.id];for(let B in F){let N=F[B];for(let Z in N){let H=N[Z];for(let J in H)h(H[J].object),delete H[J];delete N[Z]}}delete n[U.id]}function x(U){for(let F in n){let B=n[F];for(let N in B){let Z=B[N];if(Z[U.id]===void 0)continue;let H=Z[U.id];for(let J in H)h(H[J].object),delete H[J];delete Z[U.id]}}}function S(U){for(let F in n){let B=n[F],N=U.isInstancedMesh===!0?U.id:0,Z=B[N];if(Z!==void 0){for(let H in Z){let J=Z[H];for(let G in J)h(J[G].object),delete J[G];delete Z[H]}delete B[N],Object.keys(B).length===0&&delete n[F]}}}function P(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:w,dispose:v,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:M,enableAttribute:_,disableUnusedAttributes:y}}function z0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function G0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==Un&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let S=x===qe&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==dn&&x!==wn&&!S&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Xt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Xt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),p=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:M,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:p,maxSamples:v,samples:E}}function H0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Cn,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,M=d.clipIntersection,_=d.clipShadows,g=i.get(d);if(!s||m===null||m.length===0||r&&!_)r?h(null):c();else{let y=r?0:n,b=y*4,p=g.clippingState||null;l.value=p,p=h(m,u,b,f);for(let v=0;v!==b;++v)p[v]=e[v];g.clippingState=p,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){let M=d!==null?d.length:0,_=null;if(M!==0){if(_=l.value,m!==!0||_===null){let g=f+M*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(_===null||_.length<g)&&(_=new Float32Array(g));for(let b=0,p=f;b!==M;++b,p+=4)o.copy(d[b]).applyMatrix4(y,a),o.normal.toArray(_,p),_[p+3]=o.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,_}}var Gr=class extends Ne{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new dr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new cn(5,5,5),r=new We({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:Qn});r.uniforms.tEquirect.value=e;let o=new qt(s,r),a=e.minFilter;return e.minFilter===$n&&(e.minFilter=on),new bs(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},ju=256,W0=3,Z0=20,yd=256,Md=16,Y0=3,X0=new V,J0=new xt,al=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new bs(1,10,null),this._boxMesh=new qt(new cn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=X0}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,M=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(t.background=l.getClearColor(J0));let _=new bs(n,s,h);return _.position.copy(a),_.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=m,t.background=M,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$u(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(ju,Yu(t))}_fromTexture(t,e){t.mapping===Yi||t.mapping===Ts?this._setSize(t.image.length===0?ju:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Qu(t,!1,!1),n=Math.log2(t)-W0;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Qu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Yi||t.mapping===Ts?(this._cubemapMaterial===null&&(this._cubemapMaterial=$u()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ku()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=q0(),this._integrationMaterial=j0());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Md);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-Y0)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(yd*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Q0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Qu(i,t,e){return new Gr(i,{minFilter:$n,generateMipmaps:t,type:qe,colorSpace:er,depthBuffer:e})}function Hr(i,t,e){return new We({name:i,uniforms:t,vertexShader:oe.cube_vert,fragmentShader:e,side:De,blending:Qn,depthTest:!1,depthWrite:!1})}function q0(){return Hr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${yd}u

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
	`)}function j0(){return Hr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Md}},`

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
	`)}function Q0(){return Hr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Z0}
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
	`)}function Ku(){return Hr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function $u(){return Hr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function K0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===ya||f===Ma)if(t.has(u)){let m=t.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let M=new Gr(m.height);return M.fromEquirectangularTexture(i,u),t.set(u,M),u.addEventListener("dispose",c),a(M.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,m=f===ya||f===Ma,M=f===Yi||f===Ts;if(m||M){let _=e.get(u),g=_!==void 0?_.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new al(i)),_=m?n.fromEquirectangular(u,_):n.fromCubemap(u,_),_.texture.pmremVersion=u.pmremVersion,e.set(u,_),_.texture;if(_!==void 0)return _.texture;{let y=u.image;return m&&y&&y.height>0||M&&y&&l(y)?(n===null&&(n=new al(i)),_=m?n.fromEquirectangular(u):n.fromCubemap(u),_.texture.pmremVersion=u.pmremVersion,e.set(u,_),u.addEventListener("dispose",h),_.texture):null}}}return u}function a(u,f){return f===ya?u.mapping=Yi:f===Ma&&(u.mapping=Ts),u}function l(u){let f=0,m=6;for(let M=0;M<m;M++)u[M]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function $0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Qs("WebGLRenderer: "+n+" extension not supported."),s}}}function tx(i,t,e,n){let s={},r=new WeakMap,o=new FinalizationRegistry(m=>delete s[m]);function a(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let _ in m.attributes)t.remove(m.attributes[_]);m.removeEventListener("dispose",a),delete s[m.id],o.unregister(m);let M=r.get(m);M&&(t.remove(M),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,M){return s[M.id]!==void 0||(M.addEventListener("dispose",a),s[M.id]=new WeakRef(M),o.register(M,M.id,M),e.memory.geometries++),M}function h(m){let M=m.attributes;for(let _ in M)t.update(M[_],i.ARRAY_BUFFER)}function d(m){let M=m.index,_=m.attributes.position,g=0;if(_===void 0)return;let y=M!==null?M.array.length:_.array.length/3-1,b=_.count>=65535?cr:lr,p=new b(Math.ceil(y/3)*6,1),v=p.array;if(M!==null){let x=M.array;g=M.version;for(let S=0,P=0;S<y;S+=3){let w=x[S+0],U=x[S+1],F=x[S+2];v[P++]=w,v[P++]=U,v[P++]=U,v[P++]=F,v[P++]=F,v[P++]=w}}else{g=_.version;for(let x=0,S=0;x<y;x+=3){let P=x+0,w=x+1,U=x+2;v[S++]=P,v[S++]=w,v[S++]=w,v[S++]=U,v[S++]=U,v[S++]=P}}p.version=g;let E=r.get(m);E&&t.remove(E),r.set(m,p)}function u(m){let M=r.get(m);if(M){let _=m.index;_!==null&&M.version<_.version&&d(m)}else d(m);return r.get(m)}function f(){for(let m in s){let M=s[m].deref();M!==void 0&&l(M)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function ex(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let M=0;for(let _=0;_<f;_++)M+=u[_];e.update(M,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function nx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Kt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ix(i,t,e){let n=new WeakMap,s=new we;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let P=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],b=0;f===!0&&(b=1),m===!0&&(b=2),M===!0&&(b=3);let p=a.attributes.position.count*b,v=1;p>t.maxTextureSize&&(v=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let E=new Float32Array(p*v*4*d),x=new sr(E,p,v,d);x.type=wn,x.needsUpdate=!0;let S=b*4;for(let w=0;w<d;w++){let U=_[w],F=g[w],B=y[w],N=p*v*4*w;for(let Z=0;Z<U.count;Z++){let H=Z*S;f===!0&&(s.fromBufferAttribute(U,Z),E[N+H+0]=s.x,E[N+H+1]=s.y,E[N+H+2]=s.z,E[N+H+3]=0),m===!0&&(s.fromBufferAttribute(F,Z),E[N+H+4]=s.x,E[N+H+5]=s.y,E[N+H+6]=s.z,E[N+H+7]=0),M===!0&&(s.fromBufferAttribute(B,Z),E[N+H+8]=s.x,E[N+H+9]=s.y,E[N+H+10]=s.z,E[N+H+11]=B.itemSize===4?s.w:1)}}u={count:d,texture:x,size:new Pt(p,v)},n.set(a,u),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function sx(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var rx={[Tr]:"LINEAR_TONE_MAPPING",[Ar]:"REINHARD_TONE_MAPPING",[Rr]:"CINEON_TONE_MAPPING",[Zi]:"ACES_FILMIC_TONE_MAPPING",[Ir]:"AGX_TONE_MAPPING",[Pr]:"NEUTRAL_TONE_MAPPING",[Cr]:"CUSTOM_TONE_MAPPING"};function ox(i,t,e,n,s,r){let o=new Ne(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new se;h.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new kt([0,2,0,0,2,0],2));let d=new Ss({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new qt(h,d),f=new Hi(-1,1,1,-1,0,1),m=null,M=null,_=!1,g,y=null,b=[],p=!1;this.setSize=function(v,E){o.setSize(v,E),a!==null&&a.setSize(v,E),l!==null&&l.setSize(v,E);for(let x=0;x<b.length;x++){let S=b[x];S.setSize&&S.setSize(v,E)}},this.setEffects=function(v){b=v,p=b.length>0&&b[0].isRenderPass===!0;let E=o.width,x=o.height;b.length>0&&a===null&&(a=new Ne(E,x,{type:qe,depthBuffer:!1,stencilBuffer:!1}),l=new Ne(E,x,{type:qe,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&b.some(P=>P.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new qn(E,x),r===!0&&(c.format=ti,c.type=Xi)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let P=0;P<b.length;P++){let w=b[P];w.setSize&&w.setSize(E,x),S&&w.needsDepthTexture===!0&&w.setDepthTexture&&w.setDepthTexture(c)}},this.begin=function(v,E){if(_||v.toneMapping===Bn&&b.length===0)return!1;if(y=E,E!==null){let x=E.width,S=E.height;(o.width!==x||o.height!==S)&&this.setSize(x,S)}return p===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=Bn,!0},this.hasRenderPass=function(){return p},this.end=function(v,E){v.toneMapping=g,_=!0;let x=o,S=a;for(let P=0;P<b.length;P++){let w=b[P];w.enabled!==!1&&(w.render(v,S,x,E),w.needsSwap!==!1&&(x=S,S=S===a?l:a))}if(m!==v.outputColorSpace||M!==v.toneMapping){m=v.outputColorSpace,M=v.toneMapping,d.defines={},ae.getTransfer(m)===me&&(d.defines.SRGB_TRANSFER="");let P=rx[M];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,v.setRenderTarget(y),v.render(u,f),y=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var vd=new an,Sd=new qn(1,1),bd=new pr(1),wd=new sr,Ed=new Zo,Td=new dr,td=[],ed=[],nd=new Float32Array(16),id=new Float32Array(9),sd=new Float32Array(4);function Is(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=td[s];if(r===void 0&&(r=new Float32Array(s),td[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function cl(i,t){let e=ed[t];e===void 0&&(e=new Int32Array(t),ed[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ax(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function lx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function cx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function hx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function ux(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Le(e,n))return;sd.set(n),i.uniformMatrix2fv(this.addr,!1,sd),Be(e,n)}}function dx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Le(e,n))return;id.set(n),i.uniformMatrix3fv(this.addr,!1,id),Be(e,n)}}function fx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Le(e,n))return;nd.set(n),i.uniformMatrix4fv(this.addr,!1,nd),Be(e,n)}}function px(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function mx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function gx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function xx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function _x(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function yx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function Mx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function vx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function hl(i){return i.version===0&&(i.compareFunction=Pc,i.needsUpdate=!0),i}function Sx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=hl(Sd):r=vd,e.setTexture2D(t||r,s)}function bx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ed,s)}function wx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=hl(bd):r=Td,e.setTextureCube(t||r,s)}function Ex(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||wd,s)}function Tx(i){switch(i){case 5126:return ax;case 35664:return lx;case 35665:return cx;case 35666:return hx;case 35674:return ux;case 35675:return dx;case 35676:return fx;case 5124:case 35670:return px;case 35667:case 35671:return mx;case 35668:case 35672:return gx;case 35669:case 35673:return xx;case 5125:return _x;case 36294:return yx;case 36295:return Mx;case 36296:return vx;case 35678:case 36198:case 36298:case 36306:case 35682:return Sx;case 35679:case 36299:case 36307:return bx;case 35680:case 36300:case 36308:case 36293:return wx;case 36289:case 36303:case 36311:case 36292:return Ex}}function Ax(i,t){i.uniform1fv(this.addr,t)}function Rx(i,t){let e=Is(t,this.size,2);i.uniform2fv(this.addr,e)}function Cx(i,t){let e=Is(t,this.size,3);i.uniform3fv(this.addr,e)}function Ix(i,t){let e=Is(t,this.size,4);i.uniform4fv(this.addr,e)}function Px(i,t){let e=Is(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ux(i,t){let e=Is(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Nx(i,t){let e=Is(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Fx(i,t){i.uniform1iv(this.addr,t)}function Dx(i,t){i.uniform2iv(this.addr,t)}function Lx(i,t){i.uniform3iv(this.addr,t)}function Bx(i,t){i.uniform4iv(this.addr,t)}function kx(i,t){i.uniform1uiv(this.addr,t)}function Ox(i,t){i.uniform2uiv(this.addr,t)}function Vx(i,t){i.uniform3uiv(this.addr,t)}function zx(i,t){i.uniform4uiv(this.addr,t)}function Gx(i,t,e){let n=this.cache,s=t.length,r=cl(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=hl(Sd):o=vd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Hx(i,t,e){let n=this.cache,s=t.length,r=cl(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ed,r[o])}function Wx(i,t,e){let n=this.cache,s=t.length,r=cl(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=hl(bd):o=Td;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function Zx(i,t,e){let n=this.cache,s=t.length,r=cl(e,s);Le(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||wd,r[o])}function Yx(i){switch(i){case 5126:return Ax;case 35664:return Rx;case 35665:return Cx;case 35666:return Ix;case 35674:return Px;case 35675:return Ux;case 35676:return Nx;case 5124:case 35670:return Fx;case 35667:case 35671:return Dx;case 35668:case 35672:return Lx;case 35669:case 35673:return Bx;case 5125:return kx;case 36294:return Ox;case 36295:return Vx;case 36296:return zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Gx;case 35679:case 36299:case 36307:return Hx;case 35680:case 36300:case 36308:case 36293:return Wx;case 36289:case 36303:case 36311:case 36292:return Zx}}var Gc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Tx(e.type)}},Hc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yx(e.type)}},Wc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Vc=/(\w+)(\])?(\[|\.)?/g;function rd(i,t){i.seq.push(t),i.map[t.id]=t}function Xx(i,t,e){let n=i.name,s=n.length;for(Vc.lastIndex=0;;){let r=Vc.exec(n),o=Vc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){rd(e,c===void 0?new Gc(a,i,t):new Hc(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Wc(a),rd(e,d)),e=d}}}var Cs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Xx(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function od(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Jx=37297,qx=0;function jx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ad=new $t;function Qx(i){ae._getMatrix(ad,ae.workingColorSpace,i);let t=`mat3( ${ad.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(i)){case nr:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ld(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+jx(i.getShaderSource(t),a)}else return r}function Kx(i,t){let e=Qx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var $x={[Tr]:"Linear",[Ar]:"Reinhard",[Rr]:"Cineon",[Zi]:"ACESFilmic",[Ir]:"AgX",[Pr]:"Neutral",[Cr]:"Custom"};function t_(i,t){let e=$x[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ol=new V;function e_(){ae.getLuminanceCoefficients(ol);let i=ol.x.toFixed(4),t=ol.y.toFixed(4),e=ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zr).join(`
`)}function i_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function s_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function zr(i){return i!==""}function cd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function hd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var r_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zc(i){return i.replace(r_,o_)}function o_(i,t){let e=oe[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Zc(e)}var a_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ud(i){return i.replace(a_,l_)}function l_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var c_={[wr]:"SHADOWMAP_TYPE_PCF",[ws]:"SHADOWMAP_TYPE_VSM"};function h_(i){return c_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var u_={[Ts]:"ENVMAP_MODE_REFRACTION"};function d_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":u_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var f_={[Er]:"ENVMAP_BLENDING_MULTIPLY",[Iu]:"ENVMAP_BLENDING_MIX",[Pu]:"ENVMAP_BLENDING_ADD"};function p_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":f_[i.combine]||"ENVMAP_BLENDING_NONE"}function m_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=h_(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=d_(e),d=p_(e),u=n_(e),f=i_(r),m=s.createProgram(),M,_,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(zr).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(zr).join(`
`),_.length>0&&(_+=`
`)):(M=[dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),_=[dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?oe.tonemapping_pars_fragment:"",e.toneMapping!==Bn?t_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,Kx("linearToOutputTexel",e.outputColorSpace),e_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zr).join(`
`)),o=Zc(o),o=cd(o,e),o=hd(o,e),a=Zc(a),a=cd(a,e),a=hd(a,e),o=ud(o),a=ud(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",e.glslVersion===Uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let y=g+M+o,b=g+_+a,p=od(s,s.VERTEX_SHADER,y),v=od(s,s.FRAGMENT_SHADER,b);s.attachShader(m,p),s.attachShader(m,v),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function E(w){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(m)||"",F=s.getShaderInfoLog(p)||"",B=s.getShaderInfoLog(v)||"",N=U.trim(),Z=F.trim(),H=B.trim(),J=!0,G=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,p,v);else{let I=ld(s,p,"vertex"),W=ld(s,v,"fragment");Kt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+N+`
`+I+`
`+W)}else N!==""?Xt("WebGLProgram: Program Info Log:",N):(Z===""||H==="")&&(G=!1);G&&(w.diagnostics={runnable:J,programLog:N,vertexShader:{log:Z,prefix:M},fragmentShader:{log:H,prefix:_}})}s.deleteShader(p),s.deleteShader(v),x=new Cs(s,m),S=s_(s,m)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(m,Jx)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qx++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=p,this.fragmentShader=v,this}var g_=0,Yc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Xc(t),e.set(t,n)),n}},Xc=class{constructor(t){this.id=g_++,this.code=t,this.usedTimes=0}};function x_(i){return i===vi||i===Br||i===kr}function __(i,t,e,n,s,r){let o=new rr,a=new Yc,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,S,P,w,U,F){let B=w.fog,N=U.geometry,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?w.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,J=t.get(x.envMap||Z,H),G=u[x.type],I=n.precision;x.precision!==null&&(I=n.getMaxPrecision(x.precision),I!==x.precision&&Xt("WebGLProgram.getParameters:",x.precision,"not supported, using",I,"instead."));let W=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,D=W!==void 0?W.length:0,O=0;N.morphAttributes.position!==void 0&&(O=1),N.morphAttributes.normal!==void 0&&(O=2),N.morphAttributes.color!==void 0&&(O=3);let Q,k,C,nt;if(G){let It=On[G];Q=It.vertexShader,k=It.fragmentShader}else{Q=x.vertexShader,k=x.fragmentShader;let It=a.getVertexShaderStage(x),_e=a.getFragmentShaderStage(x);a.update(x,It,_e),C=It.id,nt=_e.id}let ut=i.getRenderTarget(),ot=i.state.buffers.depth.getReversed(),dt=U.isInstancedMesh===!0,_t=U.isBatchedMesh===!0,pt=!!x.map,Ct=!!x.matcap,vt=!!J,K=vt&&J.isPMREMTexture===!0,Ft=!!x.aoMap,Dt=!!x.lightMap,Yt=!!x.bumpMap&&x.wireframe===!1,Wt=!!x.normalMap,Lt=!!x.displacementMap,Qt=!!x.emissiveMap,ee=!!x.metalnessMap,Ae=!!x.roughnessMap,Se=x.anisotropy>0,X=x.clearcoat>0,q=x.diffuseRoughness>0,St=x.dispersion>0,Jt=x.retroreflectivity>0,ct=x.iridescence>0,ne=x.sheen>0,Rt=x.transmission>0,st=Se&&!!x.anisotropyMap,R=X&&!!x.clearcoatMap,T=X&&!!x.clearcoatNormalMap,L=X&&!!x.clearcoatRoughnessMap,j=q&&!!x.diffuseRoughnessMap,$=ct&&!!x.iridescenceMap,at=ct&&!!x.iridescenceThicknessMap,gt=ne&&!!x.sheenColorMap,it=ne&&!!x.sheenRoughnessMap,ht=!!x.specularMap,Mt=!!x.specularColorMap,z=!!x.specularIntensityMap,ft=Rt&&!!x.transmissionMap,lt=Rt&&!!x.thicknessMap,wt=!!x.gradientMap,bt=!!x.alphaMap,Et=x.alphaTest>0,Gt=!!x.alphaHash,re=!!x.extensions,yt=Bn;x.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(yt=i.toneMapping);let Zt=K?J.isCompressedCubeTexture?J.image[0].mipmaps:J.mipmaps:null,ie={shaderID:G,shaderType:x.type,shaderName:x.name,vertexShader:Q,fragmentShader:k,defines:x.defines,customVertexShaderID:C,customFragmentShaderID:nt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:I,batching:_t,batchingColor:_t&&U._colorsTexture!==null,instancing:dt,instancingColor:dt&&U.instanceColor!==null,instancingMorph:dt&&U.morphTexture!==null,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:ae.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:pt,matcap:Ct,envMap:vt,envMapMode:vt&&J.mapping,envMapPMREM:K,envMapMaxLod:K?Zt.length-1:null,envMapSize:K?Zt[0].width:null,aoMap:Ft,lightMap:Dt,bumpMap:Yt,normalMap:Wt,displacementMap:Lt,emissiveMap:Qt,normalMapObjectSpace:Wt&&x.normalMapType===Fu,normalMapTangentSpace:Wt&&x.normalMapType===Rs,packedNormalMap:Wt&&x.normalMapType===Rs&&x_(x.normalMap.format),metalnessMap:ee,roughnessMap:Ae,anisotropy:Se,anisotropyMap:st,clearcoat:X,clearcoatMap:R,clearcoatNormalMap:T,clearcoatRoughnessMap:L,diffuseRoughness:q,diffuseRoughnessMap:j,dispersion:St,retroreflection:Jt,iridescence:ct,iridescenceMap:$,iridescenceThicknessMap:at,sheen:ne,sheenColorMap:gt,sheenRoughnessMap:it,specularMap:ht,specularColorMap:Mt,specularIntensityMap:z,transmission:Rt,transmissionMap:ft,thicknessMap:lt,gradientMap:wt,opaque:x.transparent===!1&&x.blending===Es&&x.alphaToCoverage===!1,alphaMap:bt,alphaTest:Et,alphaHash:Gt,combine:x.combine,mapUv:pt&&f(x.map.channel),aoMapUv:Ft&&f(x.aoMap.channel),lightMapUv:Dt&&f(x.lightMap.channel),bumpMapUv:Yt&&f(x.bumpMap.channel),normalMapUv:Wt&&f(x.normalMap.channel),displacementMapUv:Lt&&f(x.displacementMap.channel),emissiveMapUv:Qt&&f(x.emissiveMap.channel),metalnessMapUv:ee&&f(x.metalnessMap.channel),roughnessMapUv:Ae&&f(x.roughnessMap.channel),anisotropyMapUv:st&&f(x.anisotropyMap.channel),clearcoatMapUv:R&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:T&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:L&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:j&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:$&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:at&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:it&&f(x.sheenRoughnessMap.channel),specularMapUv:ht&&f(x.specularMap.channel),specularColorMapUv:Mt&&f(x.specularColorMap.channel),specularIntensityMapUv:z&&f(x.specularIntensityMap.channel),transmissionMapUv:ft&&f(x.transmissionMap.channel),thicknessMapUv:lt&&f(x.thicknessMap.channel),alphaMapUv:bt&&f(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Wt||Se),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!N.attributes.uv&&(pt||bt),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&Wt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ot,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:O,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:F.filter(It=>It.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:yt,decodeVideoTexture:pt&&x.map.isVideoTexture===!0&&ae.getTransfer(x.map.colorSpace)===me,decodeVideoTextureEmissive:Qt&&x.emissiveMap.isVideoTexture===!0&&ae.getTransfer(x.emissiveMap.colorSpace)===me,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ge,flipSided:x.side===De,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:re&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&x.extensions.multiDraw===!0||_t)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ie.vertexUv1s=l.has(1),ie.vertexUv2s=l.has(2),ie.vertexUv3s=l.has(3),l.clear(),ie}function M(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)S.push(P),S.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(_(S,x),g(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function _(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function g(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function y(x){let S=u[x.type],P;if(S){let w=On[S];P=ni.clone(w.uniforms)}else P=x.uniforms;return P}function b(x,S){let P=h.get(S);return P!==void 0?++P.usedTimes:(P=new m_(i,S,x,s),c.push(P),h.set(S,P)),P}function p(x){if(--x.usedTimes===0){let S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function v(x){a.remove(x)}function E(){a.dispose()}return{getParameters:m,getProgramCacheKey:M,getUniforms:y,acquireProgram:b,releaseProgram:p,releaseShaderCache:v,programs:c,dispose:E}}function y_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function M_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function fd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function pd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,M,_,g){let y=i[t];return y===void 0?(y={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:M,renderOrder:u.renderOrder,z:_,group:g},i[t]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=m,y.materialVariant=o(u),y.groupOrder=M,y.renderOrder=u.renderOrder,y.z=_,y.group=g),t++,y}function l(u,f,m,M,_,g,y){y.reversedDepth===!0&&(_=-_);let b=a(u,f,m,M,_,g);m.transmission>0?n.push(b):m.transparent===!0?s.push(b):e.push(b)}function c(u,f,m,M,_,g){let y=a(u,f,m,M,_,g);m.transmission>0?n.unshift(y):m.transparent===!0?s.unshift(y):e.unshift(y)}function h(u,f){e.length>1&&e.sort(u||M_),n.length>1&&n.sort(f||fd),s.length>1&&s.sort(f||fd)}function d(){for(let u=t,f=i.length;u<f;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function v_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new pd,i.set(n,[o])):s>=r.length?(o=new pd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function S_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new V,color:new xt};break;case"SpotLight":e={position:new V,direction:new V,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":e={color:new xt,position:new V,halfWidth:new V,halfHeight:new V};break}return i[t.id]=e,e}}}function b_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var w_=0;function E_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function T_(i){let t=new S_,e=b_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);let s=new V,r=new Ht,o=new Ht;function a(c){let h=0,d=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,m=0,M=0,_=0,g=0,y=0,b=0,p=0,v=0,E=0,x=0,S=0,P=0,w=0;c.sort(E_);for(let F=0,B=c.length;F<B;F++){let N=c[F],Z=N.color,H=N.intensity,J=N.distance,G=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===vi?G=N.shadow.map.texture:G=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=Z.r*H,d+=Z.g*H,u+=Z.b*H;else if(N.isLightProbe){for(let I=0;I<9;I++)n.probe[I].addScaledVector(N.sh.coefficients[I],H);w++}else if(N.isSunLight){let I=t.get(N);if(I.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let W=N.shadow,D=e.get(N);D.shadowIntensity=W.intensity,D.shadowBias=W.bias,D.shadowNormalBias=W.normalBias,D.shadowRadius=W.radius,D.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),n.sunShadow[m]=D,n.sunShadowMap[m]=G;let O=W.getViewportCount();for(let Q=0;Q<O;Q++)n.sunShadowMatrix[M+Q]=W.getMatrix(Q),n.sunShadowCascade[M+Q]=W._cascadeData[Q];M+=O,m++}n.sun[f]=I,f++}else if(N.isDirectionalLight){let I=t.get(N);if(I.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let W=N.shadow,D=e.get(N);D.shadowIntensity=W.intensity,D.shadowBias=W.bias,D.shadowNormalBias=W.normalBias,D.shadowRadius=W.radius,D.shadowMapSize=W.mapSize,n.directionalShadow[_]=D,n.directionalShadowMap[_]=G,n.directionalShadowMatrix[_]=N.shadow.matrix,v++}n.directional[_]=I,_++}else if(N.isSpotLight){let I=t.get(N);I.position.setFromMatrixPosition(N.matrixWorld),I.color.copy(Z).multiplyScalar(H),I.distance=J,I.coneCos=Math.cos(N.angle),I.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),I.decay=N.decay,n.spot[y]=I;let W=N.shadow;if(N.map&&(n.spotLightMap[S]=N.map,S++,W.updateMatrices(N),N.castShadow&&P++),n.spotLightMatrix[y]=W.matrix,N.castShadow){let D=e.get(N);D.shadowIntensity=W.intensity,D.shadowBias=W.bias,D.shadowNormalBias=W.normalBias,D.shadowRadius=W.radius,D.shadowMapSize=W.mapSize,n.spotShadow[y]=D,n.spotShadowMap[y]=G,x++}y++}else if(N.isRectAreaLight){let I=t.get(N);I.color.copy(Z).multiplyScalar(H),I.halfWidth.set(N.width*.5,0,0),I.halfHeight.set(0,N.height*.5,0),n.rectArea[b]=I,b++}else if(N.isPointLight){let I=t.get(N);if(I.color.copy(N.color).multiplyScalar(N.intensity),I.distance=N.distance,I.decay=N.decay,N.castShadow){let W=N.shadow,D=e.get(N);D.shadowIntensity=W.intensity,D.shadowBias=W.bias,D.shadowNormalBias=W.normalBias,D.shadowRadius=W.radius,D.shadowMapSize=W.mapSize,D.shadowCameraNear=W.camera.near,D.shadowCameraFar=W.camera.far,n.pointShadow[g]=D,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=N.shadow.matrix,E++}n.point[g]=I,g++}else if(N.isHemisphereLight){let I=t.get(N);I.skyColor.copy(N.color).multiplyScalar(H),I.groundColor.copy(N.groundColor).multiplyScalar(H),n.hemi[p]=I,p++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ut.LTC_FLOAT_1,n.rectAreaLTC2=Ut.LTC_FLOAT_2):(n.rectAreaLTC1=Ut.LTC_HALF_1,n.rectAreaLTC2=Ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let U=n.hash;(U.sunLength!==f||U.directionalLength!==_||U.pointLength!==g||U.spotLength!==y||U.rectAreaLength!==b||U.hemiLength!==p||U.numSunShadows!==m||U.numDirectionalShadows!==v||U.numPointShadows!==E||U.numSpotShadows!==x||U.numSpotMaps!==S||U.numLightProbes!==w)&&(n.sun.length=f,n.directional.length=_,n.spot.length=y,n.rectArea.length=b,n.point.length=g,n.hemi.length=p,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+S-P,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=w,U.sunLength=f,U.directionalLength=_,U.pointLength=g,U.spotLength=y,U.rectAreaLength=b,U.hemiLength=p,U.numSunShadows=m,U.numDirectionalShadows=v,U.numPointShadows=E,U.numSpotShadows=x,U.numSpotMaps=S,U.numLightProbes=w,n.version=w_++)}function l(c,h){let d=0,u=0,f=0,m=0,M=0,_=0,g=h.matrixWorldInverse;for(let y=0,b=c.length;y<b;y++){let p=c[y];if(p.isSunLight){let v=n.sun[d];v.direction.setFromMatrixPosition(p.matrixWorld),v.direction.transformDirection(g),d++}else if(p.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(p.matrixWorld),s.setFromMatrixPosition(p.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(p.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(p.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(p.matrixWorld),s.setFromMatrixPosition(p.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),m++}else if(p.isRectAreaLight){let v=n.rectArea[M];v.position.setFromMatrixPosition(p.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(p.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(p.width*.5,0,0),v.halfHeight.set(0,p.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),M++}else if(p.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(p.matrixWorld),v.position.applyMatrix4(g),f++}else if(p.isHemisphereLight){let v=n.hemi[_];v.direction.setFromMatrixPosition(p.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function md(i){let t=new T_(i),e=[],n=[],s=[];function r(d){h.camera=d,e.length=0,n.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function A_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new md(i),t.set(s,[a])):r>=o.length?(a=new md(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var R_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C_=`uniform sampler2D shadow_pass;
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
}`,I_=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],P_=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],gd=new Ht,Vr=new V,zc=new V;function U_(i,t,e){let n=new mi,s=new Pt,r=new Pt,o=new we,a=new ra,l=new oa,c={},h=e.maxTextureSize,d={[Mi]:De,[De]:Mi,[ge]:ge},u=new We({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:R_,fragmentShader:C_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new se;m.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new qt(m,u),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wr;let g=this.type;this.render=function(E,x,S){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||E.length===0)return;this.type===uu&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=wr);let P=i.getRenderTarget(),w=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Qn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let B=g!==this.type;B&&x.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(Z=>Z.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,Z=E.length;N<Z;N++){let H=E[N],J=H.shadow;if(J===void 0){Xt("WebGLShadowMap:",H,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let G=J.getFrameExtents();s.multiply(G),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/G.x),s.x=r.x*G.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/G.y),s.y=r.y*G.y,J.mapSize.y=r.y));let I=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=I,J.map===null||B===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===ws){if(H.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new Ne(s.x,s.y,{format:vi,type:qe,minFilter:on,magFilter:on,generateMipmaps:!1}),J.map.texture.name=H.name+".shadowMap",J.map.depthTexture=new qn(s.x,s.y,wn),J.map.depthTexture.name=H.name+".shadowMapDepth",J.map.depthTexture.format=Jn,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Ue,J.map.depthTexture.magFilter=Ue}else H.isPointLight?(J.map=new Gr(s.x),J.map.depthTexture=new pr(s.x,Pn)):(J.map=new Ne(s.x,s.y),J.map.depthTexture=new qn(s.x,s.y,Pn)),J.map.depthTexture.name=H.name+".shadowMap",J.map.depthTexture.format=Jn,this.type===wr?(J.map.depthTexture.compareFunction=I?Ic:Cc,J.map.depthTexture.minFilter=on,J.map.depthTexture.magFilter=on):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Ue,J.map.depthTexture.magFilter=Ue);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let W=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();H.isPointLight!==!0&&J.updateMatrices(H,S);let D=(J.camera.layers.mask&4294967294)!==0?J.camera.layers:S.layers;for(let O=0;O<W;O++){let Q=J.getCamera(O);if(H.isPointLight){let k=J.camera,C=J.matrix,nt=H.distance||k.far;nt!==k.far&&(k.far=nt,k.updateProjectionMatrix()),Vr.setFromMatrixPosition(H.matrixWorld),k.position.copy(Vr),zc.copy(k.position),zc.add(I_[O]),k.up.copy(P_[O]),k.lookAt(zc),k.updateMatrixWorld(),C.makeTranslation(-Vr.x,-Vr.y,-Vr.z),gd.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),J._frustum.setFromProjectionMatrix(gd,k.coordinateSystem,k.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,O),i.clear();else{O===0&&(i.setRenderTarget(J.map),i.clear());let k=J.getViewport(O);o.set(r.x*k.x,r.y*k.y,r.x*k.z,r.y*k.w),F.viewport(o)}n=J.getFrustum(O),p(x,S,Q,H,D,this.type)}J.isPointLightShadow!==!0&&this.type===ws&&y(J,S),J.needsUpdate=!1}g=this.type,_.needsUpdate=!1,i.setRenderTarget(P,w,U)};function y(E,x){let S=t.update(M);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Ne(s.x,s.y,{format:vi,type:qe}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(x,null,S,u,M,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(x,null,S,f,M,null)}function b(E,x,S,P){let w=null,U=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0)w=U;else if(w=S.isPointLight===!0?l:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let F=w.uuid,B=x.uuid,N=c[F];N===void 0&&(N={},c[F]=N);let Z=N[B];Z===void 0&&(Z=w.clone(),N[B]=Z,x.addEventListener("dispose",v)),w=Z}if(w.visible=x.visible,w.wireframe=x.wireframe,P===ws?w.side=x.shadowSide!==null?x.shadowSide:x.side:w.side=x.shadowSide!==null?x.shadowSide:d[x.side],w.alphaMap=x.alphaMap,w.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,w.map=x.map,w.clipShadows=x.clipShadows,w.clippingPlanes=x.clippingPlanes,w.clipIntersection=x.clipIntersection,w.displacementMap=x.displacementMap,w.displacementScale=x.displacementScale,w.displacementBias=x.displacementBias,w.wireframeLinewidth=x.wireframeLinewidth,w.linewidth=x.linewidth,S.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let F=i.properties.get(w);F.light=S}return w}function p(E,x,S,P,w,U){if(E.visible===!1)return;if(E.layers.test(w)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&U===ws)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let N=t.update(E),Z=E.material;if(Array.isArray(Z)){let H=N.groups;for(let J=0,G=H.length;J<G;J++){let I=H[J],W=Z[I.materialIndex];if(W&&W.visible){let D=b(E,W,P,U);E.onBeforeShadow(i,E,x,S,N,D,I),i.renderBufferDirect(S,null,N,D,E,I),E.onAfterShadow(i,E,x,S,N,D,I)}}}else if(Z.visible){let H=b(E,Z,P,U);E.onBeforeShadow(i,E,x,S,N,H,null),i.renderBufferDirect(S,null,N,H,E,null),E.onAfterShadow(i,E,x,S,N,H,null)}}let B=E.children;for(let N=0,Z=B.length;N<Z;N++)p(B[N],x,S,P,w,U)}function v(E){E.target.removeEventListener("dispose",v);for(let S in c){let P=c[S],w=E.target.uuid;w in P&&(P[w].dispose(),delete P[w])}}}function N_(i,t){function e(){let z=!1,ft=new we,lt=null,wt=new we(0,0,0,0);return{setMask:function(bt){lt!==bt&&!z&&(i.colorMask(bt,bt,bt,bt),lt=bt)},setLocked:function(bt){z=bt},setClear:function(bt,Et,Gt,re,yt){yt===!0&&(bt*=re,Et*=re,Gt*=re),ft.set(bt,Et,Gt,re),wt.equals(ft)===!1&&(i.clearColor(bt,Et,Gt,re),wt.copy(ft))},reset:function(){z=!1,lt=null,wt.set(-1,0,0,0)}}}function n(){let z=!1,ft=!1,lt=null,wt=null,bt=null;return{setReversed:function(Et){if(ft!==Et){let Gt=t.get("EXT_clip_control");Et?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),ft=Et;let re=bt;bt=null,this.setClear(re)}},getReversed:function(){return ft},setTest:function(Et){Et?ot(i.DEPTH_TEST):dt(i.DEPTH_TEST)},setMask:function(Et){lt!==Et&&!z&&(i.depthMask(Et),lt=Et)},setFunc:function(Et){if(ft&&(Et=Zu[Et]),wt!==Et){switch(Et){case No:i.depthFunc(i.NEVER);break;case Fo:i.depthFunc(i.ALWAYS);break;case Do:i.depthFunc(i.LESS);break;case ps:i.depthFunc(i.LEQUAL);break;case Lo:i.depthFunc(i.EQUAL);break;case Bo:i.depthFunc(i.GEQUAL);break;case ko:i.depthFunc(i.GREATER);break;case Oo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}wt=Et}},setLocked:function(Et){z=Et},setClear:function(Et){bt!==Et&&(bt=Et,ft&&(Et=1-Et),i.clearDepth(Et))},reset:function(){z=!1,lt=null,wt=null,bt=null,ft=!1}}}function s(){let z=!1,ft=null,lt=null,wt=null,bt=null,Et=null,Gt=null,re=null,yt=null;return{setTest:function(Zt){z||(Zt?ot(i.STENCIL_TEST):dt(i.STENCIL_TEST))},setMask:function(Zt){ft!==Zt&&!z&&(i.stencilMask(Zt),ft=Zt)},setFunc:function(Zt,ie,It){(lt!==Zt||wt!==ie||bt!==It)&&(i.stencilFunc(Zt,ie,It),lt=Zt,wt=ie,bt=It)},setOp:function(Zt,ie,It){(Et!==Zt||Gt!==ie||re!==It)&&(i.stencilOp(Zt,ie,It),Et=Zt,Gt=ie,re=It)},setLocked:function(Zt){z=Zt},setClear:function(Zt){yt!==Zt&&(i.clearStencil(Zt),yt=Zt)},reset:function(){z=!1,ft=null,lt=null,wt=null,bt=null,Et=null,Gt=null,re=null,yt=null}}}let r=new e,o=new n,a=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],M=null,_=!1,g=null,y=null,b=null,p=null,v=null,E=null,x=null,S=new xt(0,0,0),P=0,w=!1,U=null,F=null,B=null,N=null,Z=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,G=0,I=i.getParameter(i.VERSION);I.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(I)[1]),J=G>=1):I.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),J=G>=2);let W=null,D={},O=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),k=new we().fromArray(O),C=new we().fromArray(Q);function nt(z,ft,lt,wt){let bt=new Uint8Array(4),Et=i.createTexture();i.bindTexture(z,Et),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<lt;Gt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,wt,0,i.RGBA,i.UNSIGNED_BYTE,bt):i.texImage2D(ft+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,bt);return Et}let ut={};ut[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),ut[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ut[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(i.DEPTH_TEST),o.setFunc(ps),Yt(!1),Wt(xc),ot(i.CULL_FACE),Ft(Qn);function ot(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function dt(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function _t(z,ft){return u[z]!==ft?(i.bindFramebuffer(z,ft),u[z]=ft,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ft),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function pt(z,ft){let lt=m,wt=!1;if(z){lt=f.get(ft),lt===void 0&&(lt=[],f.set(ft,lt));let bt=z.textures;if(lt.length!==bt.length||lt[0]!==i.COLOR_ATTACHMENT0){for(let Et=0,Gt=bt.length;Et<Gt;Et++)lt[Et]=i.COLOR_ATTACHMENT0+Et;lt.length=bt.length,wt=!0}}else lt[0]!==i.BACK&&(lt[0]=i.BACK,wt=!0);wt&&i.drawBuffers(lt)}function Ct(z){return M!==z?(i.useProgram(z),M=z,!0):!1}let vt={[Wi]:i.FUNC_ADD,[fu]:i.FUNC_SUBTRACT,[pu]:i.FUNC_REVERSE_SUBTRACT};vt[mu]=i.MIN,vt[gu]=i.MAX;let K={[xu]:i.ZERO,[_u]:i.ONE,[yu]:i.SRC_COLOR,[Mc]:i.SRC_ALPHA,[Eu]:i.SRC_ALPHA_SATURATE,[bu]:i.DST_COLOR,[vu]:i.DST_ALPHA,[Mu]:i.ONE_MINUS_SRC_COLOR,[vc]:i.ONE_MINUS_SRC_ALPHA,[wu]:i.ONE_MINUS_DST_COLOR,[Su]:i.ONE_MINUS_DST_ALPHA,[Tu]:i.CONSTANT_COLOR,[Au]:i.ONE_MINUS_CONSTANT_COLOR,[Ru]:i.CONSTANT_ALPHA,[Cu]:i.ONE_MINUS_CONSTANT_ALPHA};function Ft(z,ft,lt,wt,bt,Et,Gt,re,yt,Zt){if(z===Qn){_===!0&&(dt(i.BLEND),_=!1);return}if(_===!1&&(ot(i.BLEND),_=!0),z!==du){if(z!==g||Zt!==w){if((y!==Wi||v!==Wi)&&(i.blendEquation(i.FUNC_ADD),y=Wi,v=Wi),Zt)switch(z){case Es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kn:i.blendFunc(i.ONE,i.ONE);break;case _c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Kt("WebGLState: Invalid blending: ",z);break}else switch(z){case Es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case _c:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yc:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",z);break}b=null,p=null,E=null,x=null,S.set(0,0,0),P=0,g=z,w=Zt}return}bt=bt||ft,Et=Et||lt,Gt=Gt||wt,(ft!==y||bt!==v)&&(i.blendEquationSeparate(vt[ft],vt[bt]),y=ft,v=bt),(lt!==b||wt!==p||Et!==E||Gt!==x)&&(i.blendFuncSeparate(K[lt],K[wt],K[Et],K[Gt]),b=lt,p=wt,E=Et,x=Gt),(re.equals(S)===!1||yt!==P)&&(i.blendColor(re.r,re.g,re.b,yt),S.copy(re),P=yt),g=z,w=!1}function Dt(z,ft){z.side===ge?dt(i.CULL_FACE):ot(i.CULL_FACE);let lt=z.side===De;ft&&(lt=!lt),Yt(lt),z.blending===Es&&z.transparent===!1?Ft(Qn):Ft(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let wt=z.stencilWrite;a.setTest(wt),wt&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Qt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(z){U!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),U=z)}function Wt(z){z!==cu?(ot(i.CULL_FACE),z!==F&&(z===xc?i.cullFace(i.BACK):z===hu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):dt(i.CULL_FACE),F=z}function Lt(z){z!==B&&(J&&i.lineWidth(z),B=z)}function Qt(z,ft,lt){z?(ot(i.POLYGON_OFFSET_FILL),(N!==ft||Z!==lt)&&(N=ft,Z=lt,o.getReversed()&&(ft=-ft,lt=-lt),i.polygonOffset(ft,lt))):dt(i.POLYGON_OFFSET_FILL)}function ee(z){z?ot(i.SCISSOR_TEST):dt(i.SCISSOR_TEST)}function Ae(z){z===void 0&&(z=i.TEXTURE0+H-1),W!==z&&(i.activeTexture(z),W=z)}function Se(z,ft,lt){lt===void 0&&(W===null?lt=i.TEXTURE0+H-1:lt=W);let wt=D[lt];wt===void 0&&(wt={type:void 0,texture:void 0},D[lt]=wt),(wt.type!==z||wt.texture!==ft)&&(W!==lt&&(i.activeTexture(lt),W=lt),i.bindTexture(z,ft||ut[z]),wt.type=z,wt.texture=ft)}function X(){let z=D[W];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function q(){try{i.compressedTexImage2D(...arguments)}catch(z){Kt("WebGLState:",z)}}function St(){try{i.compressedTexImage3D(...arguments)}catch(z){Kt("WebGLState:",z)}}function Jt(){try{i.texSubImage2D(...arguments)}catch(z){Kt("WebGLState:",z)}}function ct(){try{i.texSubImage3D(...arguments)}catch(z){Kt("WebGLState:",z)}}function ne(){try{i.compressedTexSubImage2D(...arguments)}catch(z){Kt("WebGLState:",z)}}function Rt(){try{i.compressedTexSubImage3D(...arguments)}catch(z){Kt("WebGLState:",z)}}function st(){try{i.texStorage2D(...arguments)}catch(z){Kt("WebGLState:",z)}}function R(){try{i.texStorage3D(...arguments)}catch(z){Kt("WebGLState:",z)}}function T(){try{i.texImage2D(...arguments)}catch(z){Kt("WebGLState:",z)}}function L(){try{i.texImage3D(...arguments)}catch(z){Kt("WebGLState:",z)}}function j(z){return d[z]!==void 0?d[z]:i.getParameter(z)}function $(z,ft){d[z]!==ft&&(i.pixelStorei(z,ft),d[z]=ft)}function at(z){k.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),k.copy(z))}function gt(z){C.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),C.copy(z))}function it(z,ft){let lt=c.get(ft);lt===void 0&&(lt=new WeakMap,c.set(ft,lt));let wt=lt.get(z);wt===void 0&&(wt=i.getUniformBlockIndex(ft,z.name),i.uniformBlockBinding(ft,wt,wt),lt.set(z,wt))}function ht(z,ft,lt){let bt=c.get(ft).get(z);l[bt]!==lt&&(i.bindBufferBase(i.UNIFORM_BUFFER,bt,lt),l[bt]=lt)}function Mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},W=null,D={},u={},l={},f=new WeakMap,m=[],M=null,_=!1,g=null,y=null,b=null,p=null,v=null,E=null,x=null,S=new xt(0,0,0),P=0,w=!1,U=null,F=null,B=null,N=null,Z=null,k.set(0,0,i.canvas.width,i.canvas.height),C.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:dt,bindFramebuffer:_t,drawBuffers:pt,useProgram:Ct,setBlending:Ft,setMaterial:Dt,setFlipSided:Yt,setCullFace:Wt,setLineWidth:Lt,setPolygonOffset:Qt,setScissorTest:ee,activeTexture:Ae,bindTexture:Se,unbindTexture:X,compressedTexImage2D:q,compressedTexImage3D:St,texImage2D:T,texImage3D:L,pixelStorei:$,getParameter:j,updateUBOMapping:it,uniformBlockBinding:ht,texStorage2D:st,texStorage3D:R,texSubImage2D:Jt,texSubImage3D:ct,compressedTexSubImage2D:ne,compressedTexSubImage3D:Rt,scissor:at,viewport:gt,reset:Mt}}function F_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pt,h=new WeakMap,d=new Set,u,f=new WeakMap,m=new Set,M=new FinalizationRegistry(R=>m.delete(R)),_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,T){return _?new OffscreenCanvas(R,T):ir("canvas")}function y(R,T,L){let j=1,$=st(R);if(($.width>L||$.height>L)&&(j=L/Math.max($.width,$.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let at=Math.floor(j*$.width),gt=Math.floor(j*$.height);u===void 0&&(u=g(at,gt));let it=T?g(at,gt):u;return it.width=at,it.height=gt,it.getContext("2d").drawImage(R,0,0,at,gt),Xt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+at+"x"+gt+")."),it}else return"data"in R&&Xt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function b(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(R,T,L,j,$,at=!1){if(R!==null){if(i[R]!==void 0)return i[R];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let gt;j&&(gt=t.get("EXT_texture_norm16"),gt||Xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=T;if(T===i.RED&&(L===i.FLOAT&&(it=i.R32F),L===i.HALF_FLOAT&&(it=i.R16F),L===i.UNSIGNED_BYTE&&(it=i.R8),L===i.UNSIGNED_SHORT&&gt&&(it=gt.R16_EXT),L===i.SHORT&&gt&&(it=gt.R16_SNORM_EXT)),T===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(it=i.R8UI),L===i.UNSIGNED_SHORT&&(it=i.R16UI),L===i.UNSIGNED_INT&&(it=i.R32UI),L===i.BYTE&&(it=i.R8I),L===i.SHORT&&(it=i.R16I),L===i.INT&&(it=i.R32I)),T===i.RG&&(L===i.FLOAT&&(it=i.RG32F),L===i.HALF_FLOAT&&(it=i.RG16F),L===i.UNSIGNED_BYTE&&(it=i.RG8),L===i.UNSIGNED_SHORT&&gt&&(it=gt.RG16_EXT),L===i.SHORT&&gt&&(it=gt.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(it=i.RG8UI),L===i.UNSIGNED_SHORT&&(it=i.RG16UI),L===i.UNSIGNED_INT&&(it=i.RG32UI),L===i.BYTE&&(it=i.RG8I),L===i.SHORT&&(it=i.RG16I),L===i.INT&&(it=i.RG32I)),T===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&(it=i.RGB8UI),L===i.UNSIGNED_SHORT&&(it=i.RGB16UI),L===i.UNSIGNED_INT&&(it=i.RGB32UI),L===i.BYTE&&(it=i.RGB8I),L===i.SHORT&&(it=i.RGB16I),L===i.INT&&(it=i.RGB32I)),T===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),L===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),L===i.UNSIGNED_INT&&(it=i.RGBA32UI),L===i.BYTE&&(it=i.RGBA8I),L===i.SHORT&&(it=i.RGBA16I),L===i.INT&&(it=i.RGBA32I)),T===i.RGB&&(L===i.UNSIGNED_SHORT&&gt&&(it=gt.RGB16_EXT),L===i.SHORT&&gt&&(it=gt.RGB16_SNORM_EXT),L===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),L===i.UNSIGNED_INT_10F_11F_11F_REV&&(it=i.R11F_G11F_B10F)),T===i.RGBA){let ht=at?nr:ae.getTransfer($);L===i.FLOAT&&(it=i.RGBA32F),L===i.HALF_FLOAT&&(it=i.RGBA16F),L===i.UNSIGNED_BYTE&&(it=ht===me?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT&&gt&&(it=gt.RGBA16_EXT),L===i.SHORT&&gt&&(it=gt.RGBA16_SNORM_EXT),L===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function x(R,T){let L;return R?T===null||T===Pn||T===Xi?L=i.DEPTH24_STENCIL8:T===wn?L=i.DEPTH32F_STENCIL8:T===As&&(L=i.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Pn||T===Xi?L=i.DEPTH_COMPONENT24:T===wn?L=i.DEPTH_COMPONENT32F:T===As&&(L=i.DEPTH_COMPONENT16),L}function S(R,T){return b(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ue&&R.minFilter!==on?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function P(R){let T=new WeakRef(R);n.get(R).__ref=T,m.add(T),M.register(R,T,T)}function w(R){let T=n.get(R).__ref;T!==void 0&&(m.delete(T),M.unregister(T))}function U(R){B(R.target)}function F(R){N(R.target)}function B(R){R.removeEventListener("dispose",U),w(R),H(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&d.delete(R)}function N(R){R.removeEventListener("dispose",F),w(R),G(R)}function Z(){for(let R of m){let T=R.deref();T!==void 0&&(T.isRenderTarget===!0?N(T):B(T))}m.clear(),d.clear()}function H(R){let T=n.get(R);if(T.__webglInit===void 0)return;let L=R.source,j=f.get(L);if(j){let $=j[T.__cacheKey];$.usedTimes--,$.usedTimes===0&&J(R),Object.keys(j).length===0&&f.delete(L)}n.remove(R)}function J(R){let T=n.get(R);i.deleteTexture(T.__webglTexture);let L=R.source,j=f.get(L);delete j[T.__cacheKey],o.memory.textures--}function G(R){let T=n.get(R);T.__depthDisposeCallback&&T.__depthDisposeCallback();let L=R.depthTexture;if(L&&L.renderTarget===R&&B(L),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(T.__webglFramebuffer[$]))for(let at=0;at<T.__webglFramebuffer[$].length;at++)i.deleteFramebuffer(T.__webglFramebuffer[$][at]);else i.deleteFramebuffer(T.__webglFramebuffer[$]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[$])}else{if(Array.isArray(T.__webglFramebuffer))for(let $=0;$<T.__webglFramebuffer.length;$++)i.deleteFramebuffer(T.__webglFramebuffer[$]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let $=0;$<T.__webglColorRenderbuffer.length;$++)T.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[$]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let j=R.textures;for(let $=0,at=j.length;$<at;$++){let gt=n.get(j[$]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(j[$])}n.remove(R)}let I=0;function W(){I=0}function D(){return I}function O(R){I=R}function Q(){let R=I;return R>=s.maxTextures&&Xt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),I+=1,R}function k(R){let T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.mipmapsAutoUpdate),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function C(R,T){let L=n.get(R);if(R.isVideoTexture&&ne(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&L.__version!==R.version){let j=R.image;if(j===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{Dt(L,R,T);return}}else R.isExternalTexture&&(L.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+T)}function nt(R,T){let L=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&L.__version!==R.version){Dt(L,R,T);return}else R.isExternalTexture&&(L.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+T)}function ut(R,T){let L=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&L.__version!==R.version){Dt(L,R,T);return}e.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+T)}function ot(R,T){let L=n.get(R);if(R.version>0&&L.__version!==R.version){Yt(L,R,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+T)}let dt={[ms]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[Vo]:i.MIRRORED_REPEAT},_t={[Ue]:i.NEAREST,[Uu]:i.NEAREST_MIPMAP_NEAREST,[Ur]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[va]:i.LINEAR_MIPMAP_NEAREST,[$n]:i.LINEAR_MIPMAP_LINEAR},pt={[Lu]:i.NEVER,[Pc]:i.ALWAYS,[Bu]:i.LESS,[Cc]:i.LEQUAL,[ku]:i.EQUAL,[Ic]:i.GEQUAL,[Ou]:i.GREATER,[Vu]:i.NOTEQUAL};function Ct(R,T){if(T.type===wn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===on||T.magFilter===va||T.magFilter===Ur||T.magFilter===$n||T.minFilter===on||T.minFilter===va||T.minFilter===Ur||T.minFilter===$n)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,dt[T.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,dt[T.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,dt[T.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,_t[T.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,_t[T.minFilter]),T.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,pt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ue||T.minFilter!==Ur&&T.minFilter!==$n||T.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let L=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function vt(R,T){let L=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",U),P(T));let j=T.source,$=f.get(j);$===void 0&&($={},f.set(j,$));let at=k(T);if(at!==R.__cacheKey){$[at]===void 0&&($[at]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,L=!0),$[at].usedTimes++;let gt=$[R.__cacheKey];gt!==void 0&&($[R.__cacheKey].usedTimes--,gt.usedTimes===0&&J(T)),R.__cacheKey=at,R.__webglTexture=$[at].texture}return L}function K(R,T,L){return Math.floor(Math.floor(R/L)/T)}function Ft(R,T,L,j){let at=R.updateRanges;if(at.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,L,j,T.data);else{at.sort((z,ft)=>z.start-ft.start);let gt=0;for(let z=1;z<at.length;z++){let ft=at[gt],lt=at[z],wt=ft.start+ft.count,bt=K(lt.start,T.width,4),Et=K(ft.start,T.width,4);lt.start<=wt+1&&bt===Et&&K(lt.start+lt.count-1,T.width,4)===bt?ft.count=Math.max(ft.count,lt.start+lt.count-ft.start):(++gt,at[gt]=lt)}at.length=gt+1;let it=e.getParameter(i.UNPACK_ROW_LENGTH),ht=e.getParameter(i.UNPACK_SKIP_PIXELS),Mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let z=0,ft=at.length;z<ft;z++){let lt=at[z],wt=Math.floor(lt.start/4),bt=Math.ceil(lt.count/4),Et=wt%T.width,Gt=Math.floor(wt/T.width),re=bt,yt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Et),e.pixelStorei(i.UNPACK_SKIP_ROWS,Gt),e.texSubImage2D(i.TEXTURE_2D,0,Et,Gt,re,yt,L,j,T.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,it),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(i.UNPACK_SKIP_ROWS,Mt)}}function Dt(R,T,L){let j=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(j=i.TEXTURE_3D);let $=vt(R,T),at=T.source;e.bindTexture(j,R.__webglTexture,i.TEXTURE0+L);let gt=n.get(at);if(at.version!==gt.__version||$===!0){if(e.activeTexture(i.TEXTURE0+L),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let yt=ae.getPrimaries(ae.workingColorSpace),Zt=T.colorSpace===ei?null:ae.getPrimaries(T.colorSpace),ie=T.colorSpace===ei||yt===Zt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie)}e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let ht=y(T.image,!1,s.maxTextureSize);ht=Rt(T,ht);let Mt=r.convert(T.format,T.colorSpace),z=r.convert(T.type),ft=E(T.internalFormat,Mt,z,T.normalized,T.colorSpace,T.isVideoTexture);Ct(j,T);let lt,wt=T.mipmaps,bt=T.isVideoTexture!==!0,Et=gt.__version===void 0||$===!0,Gt=at.dataReady,re=S(T,ht);if(T.isDepthTexture)ft=x(T.format===ti,T.type),Et&&(bt?e.texStorage2D(i.TEXTURE_2D,1,ft,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,ft,ht.width,ht.height,0,Mt,z,null));else if(T.isDataTexture)if(wt.length>0){bt&&Et&&e.texStorage2D(i.TEXTURE_2D,re,ft,wt[0].width,wt[0].height);for(let yt=0,Zt=wt.length;yt<Zt;yt++)lt=wt[yt],bt?Gt&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,lt.width,lt.height,Mt,z,lt.data):e.texImage2D(i.TEXTURE_2D,yt,ft,lt.width,lt.height,0,Mt,z,lt.data);T.generateMipmaps=!1}else bt?(Et&&e.texStorage2D(i.TEXTURE_2D,re,ft,ht.width,ht.height),Gt&&Ft(T,ht,Mt,z)):e.texImage2D(i.TEXTURE_2D,0,ft,ht.width,ht.height,0,Mt,z,ht.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){bt&&Et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,re,ft,wt[0].width,wt[0].height,ht.depth);for(let yt=0,Zt=wt.length;yt<Zt;yt++)if(lt=wt[yt],T.format!==Un)if(Mt!==null)if(bt){if(Gt)if(T.layerUpdates.size>0){let ie=Oc(lt.width,lt.height,T.format,T.type);for(let It of T.layerUpdates){let _e=lt.data.subarray(It*ie/lt.data.BYTES_PER_ELEMENT,(It+1)*ie/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,It,lt.width,lt.height,1,Mt,_e)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,0,lt.width,lt.height,ht.depth,Mt,lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,yt,ft,lt.width,lt.height,ht.depth,0,lt.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else bt?Gt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,yt,0,0,0,lt.width,lt.height,ht.depth,Mt,z,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,yt,ft,lt.width,lt.height,ht.depth,0,Mt,z,lt.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{bt&&Et&&e.texStorage2D(i.TEXTURE_2D,re,ft,wt[0].width,wt[0].height);for(let yt=0,Zt=wt.length;yt<Zt;yt++)lt=wt[yt],T.format!==Un?Mt!==null?bt?Gt&&e.compressedTexSubImage2D(i.TEXTURE_2D,yt,0,0,lt.width,lt.height,Mt,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,yt,ft,lt.width,lt.height,0,lt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):bt?Gt&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,lt.width,lt.height,Mt,z,lt.data):e.texImage2D(i.TEXTURE_2D,yt,ft,lt.width,lt.height,0,Mt,z,lt.data)}else if(T.isDataArrayTexture)if(bt){if(Et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,re,ft,ht.width,ht.height,ht.depth),Gt)if(T.layerUpdates.size>0){let yt=Oc(ht.width,ht.height,T.format,T.type);for(let Zt of T.layerUpdates){let ie=ht.data.subarray(Zt*yt/ht.data.BYTES_PER_ELEMENT,(Zt+1)*yt/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Zt,ht.width,ht.height,1,Mt,z,ie)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Mt,z,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ft,ht.width,ht.height,ht.depth,0,Mt,z,ht.data);else if(T.isData3DTexture)bt?(Et&&e.texStorage3D(i.TEXTURE_3D,re,ft,ht.width,ht.height,ht.depth),Gt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Mt,z,ht.data)):e.texImage3D(i.TEXTURE_3D,0,ft,ht.width,ht.height,ht.depth,0,Mt,z,ht.data);else if(T.isFramebufferTexture){if(Et)if(bt)e.texStorage2D(i.TEXTURE_2D,re,ft,ht.width,ht.height);else{let yt=ht.width,Zt=ht.height;for(let ie=0;ie<re;ie++)e.texImage2D(i.TEXTURE_2D,ie,ft,yt,Zt,0,Mt,z,null),yt>>=1,Zt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let yt=i.canvas;if(yt.hasAttribute("layoutsubtree")||yt.setAttribute("layoutsubtree","true"),ht.parentNode!==yt){yt.appendChild(ht),d.add(T),yt.onpaint=Zt=>{let ie=Zt.changedElements;for(let It of d)ie.includes(It.image)&&(It.needsUpdate=!0)},yt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ht);else{let ie=i.RGBA,It=i.RGBA,_e=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ie,It,_e,ht)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(wt.length>0){if(bt&&Et){let yt=st(wt[0]);e.texStorage2D(i.TEXTURE_2D,re,ft,yt.width,yt.height)}for(let yt=0,Zt=wt.length;yt<Zt;yt++)lt=wt[yt],bt?Gt&&e.texSubImage2D(i.TEXTURE_2D,yt,0,0,Mt,z,lt):e.texImage2D(i.TEXTURE_2D,yt,ft,Mt,z,lt);T.generateMipmaps=!1}else if(bt){if(Et){let yt=st(ht);e.texStorage2D(i.TEXTURE_2D,re,ft,yt.width,yt.height)}Gt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,z,ht)}else e.texImage2D(i.TEXTURE_2D,0,ft,Mt,z,ht);b(T)&&T.mipmapsAutoUpdate===!0&&p(j),gt.__version=at.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function Yt(R,T,L){if(T.image.length!==6)return;let j=vt(R,T),$=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+L);let at=n.get($);if($.version!==at.__version||j===!0){e.activeTexture(i.TEXTURE0+L);let gt=ae.getPrimaries(ae.workingColorSpace),it=T.colorSpace===ei?null:ae.getPrimaries(T.colorSpace),ht=T.colorSpace===ei||gt===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Mt=T.isCompressedTexture||T.image[0].isCompressedTexture,z=T.image[0]&&T.image[0].isDataTexture,ft=[];for(let It=0;It<6;It++)!Mt&&!z?ft[It]=y(T.image[It],!0,s.maxCubemapSize):ft[It]=z?T.image[It].image:T.image[It],ft[It]=Rt(T,ft[It]);let lt=ft[0],wt=r.convert(T.format,T.colorSpace),bt=r.convert(T.type),Et=E(T.internalFormat,wt,bt,T.normalized,T.colorSpace),Gt=T.isVideoTexture!==!0,re=at.__version===void 0||j===!0,yt=$.dataReady,Zt=S(T,lt);Ct(i.TEXTURE_CUBE_MAP,T);let ie;if(T.isDepthTexture){if(Et=x(T.format===ti,T.type),re)if(Gt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,Et,lt.width,lt.height);else for(let It=0;It<6;It++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,Et,lt.width,lt.height,0,wt,bt,null)}else if(Mt){Gt&&re&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Zt,Et,lt.width,lt.height);for(let It=0;It<6;It++){ie=ft[It].mipmaps;for(let _e=0;_e<ie.length;_e++){let ke=ie[_e];T.format!==Un?wt!==null?Gt?yt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,_e,0,0,ke.width,ke.height,wt,ke.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,_e,Et,ke.width,ke.height,0,ke.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,_e,0,0,ke.width,ke.height,wt,bt,ke.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,_e,Et,ke.width,ke.height,0,wt,bt,ke.data)}}}else{if(ie=T.mipmaps,Gt&&re){ie.length>0&&Zt++;let It=st(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Zt,Et,It.width,It.height)}for(let It=0;It<6;It++)if(z){Gt?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,0,0,ft[It].width,ft[It].height,wt,bt,ft[It].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,Et,ft[It].width,ft[It].height,0,wt,bt,ft[It].data);for(let _e=0;_e<ie.length;_e++){let oi=ie[_e].image[It].image;Gt?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,_e+1,0,0,oi.width,oi.height,wt,bt,oi.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,_e+1,Et,oi.width,oi.height,0,wt,bt,oi.data)}}else{Gt?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,0,0,wt,bt,ft[It]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,Et,wt,bt,ft[It]);for(let _e=0;_e<ie.length;_e++){let ke=ie[_e];Gt?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,_e+1,0,0,wt,bt,ke.image[It]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+It,_e+1,Et,wt,bt,ke.image[It])}}}b(T)&&T.mipmapsAutoUpdate===!0&&p(i.TEXTURE_CUBE_MAP),at.__version=$.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function Wt(R,T,L,j,$,at){let gt=r.convert(L.format,L.colorSpace),it=r.convert(L.type),ht=E(L.internalFormat,gt,it,L.normalized,L.colorSpace),Mt=n.get(T),z=n.get(L);if(z.__renderTarget=T,!Mt.__hasExternalTextures){let ft=Math.max(1,T.width>>at),lt=Math.max(1,T.height>>at);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,at,ht,ft,lt,T.depth,0,gt,it,null):e.texImage2D($,at,ht,ft,lt,0,gt,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),ct(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,$,z.__webglTexture,0,Jt(T)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,$,z.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(R,T,L){if(i.bindRenderbuffer(i.RENDERBUFFER,R),T.depthBuffer){let j=T.depthTexture,$=j&&j.isDepthTexture?j.type:null,at=x(T.stencilBuffer,$),gt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ct(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt(T),at,T.width,T.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt(T),at,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,at,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,R)}else{let j=T.textures;for(let $=0;$<j.length;$++){let at=j[$],gt=r.convert(at.format,at.colorSpace),it=r.convert(at.type),ht=E(at.internalFormat,gt,it,at.normalized,at.colorSpace);ct(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt(T),ht,T.width,T.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt(T),ht,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ht,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Qt(R,T,L){let j=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(T.depthTexture);$.__renderTarget=T;let at=j?T.depthTexture.image[0]:T.depthTexture.image;(!$.__webglTexture||at.width!==T.width||at.height!==T.height)&&(at.width=T.width,at.height=T.height,T.depthTexture.needsUpdate=!0),j?ot(T.depthTexture,0):C(T.depthTexture,0);let gt=$.__webglTexture,it=Jt(T),ht=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+L:i.TEXTURE_2D,Mt=T.depthTexture.format===ti?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===Jn)ct(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Mt,ht,gt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,Mt,ht,gt,0);else if(T.depthTexture.format===ti)ct(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Mt,ht,gt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,Mt,ht,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ee(R){let T=n.get(R),L=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){let j=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),j){let $=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,j.removeEventListener("dispose",$)};j.addEventListener("dispose",$),T.__depthDisposeCallback=$}T.__boundDepthTexture=j}if(R.depthTexture&&!T.__autoAllocateDepthBuffer)if(L)for(let j=0;j<6;j++)Qt(T.__webglFramebuffer[j],R,j);else R.texture.mipmaps.length>0?Qt(T.__webglFramebuffer[0],R,0):Qt(T.__webglFramebuffer,R,0);else if(L){T.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[j]),T.__webglDepthbuffer[j]===void 0)T.__webglDepthbuffer[j]=i.createRenderbuffer(),Lt(T.__webglDepthbuffer[j],R,!1);else{let $=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=T.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,at)}}else if(R.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Lt(T.__webglDepthbuffer,R,!1);else{let $=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,at)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(R,T,L){let j=n.get(R);T!==void 0&&Wt(j.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&ee(R)}function Se(R){let T=R.texture,L=n.get(R),j=n.get(T);R.addEventListener("dispose",F),P(R);let $=R.textures,at=R.isWebGLCubeRenderTarget===!0,gt=$.length>1;if(gt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=T.version,o.memory.textures++),at){L.__webglFramebuffer=[];for(let it=0;it<6;it++)if(T.mipmaps.length>0){L.__webglFramebuffer[it]=[];for(let ht=0;ht<T.mipmaps.length;ht++)L.__webglFramebuffer[it][ht]=i.createFramebuffer()}else L.__webglFramebuffer[it]=i.createFramebuffer()}else{if(T.mipmaps.length>0){L.__webglFramebuffer=[];for(let it=0;it<T.mipmaps.length;it++)L.__webglFramebuffer[it]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(gt)for(let it=0,ht=$.length;it<ht;it++){let Mt=n.get($[it]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&ct(R)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let it=0;it<$.length;it++){let ht=$[it];L.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[it]);let Mt=r.convert(ht.format,ht.colorSpace),z=r.convert(ht.type),ft=E(ht.internalFormat,Mt,z,ht.normalized,ht.colorSpace,R.isXRRenderTarget===!0),lt=Jt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,ft,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,L.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),Lt(L.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Ct(i.TEXTURE_CUBE_MAP,T);for(let it=0;it<6;it++)if(T.mipmaps.length>0)for(let ht=0;ht<T.mipmaps.length;ht++)Wt(L.__webglFramebuffer[it][ht],R,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,ht);else Wt(L.__webglFramebuffer[it],R,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);b(T)?p(i.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(gt){for(let it=0,ht=$.length;it<ht;it++){let Mt=$[it],z=n.get(Mt),ft=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ft=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,z.__webglTexture),Ct(ft,Mt),Wt(L.__webglFramebuffer,R,Mt,i.COLOR_ATTACHMENT0+it,ft,0),b(Mt)&&p(ft)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(it=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,j.__webglTexture),Ct(it,T),T.mipmaps.length>0)for(let ht=0;ht<T.mipmaps.length;ht++)Wt(L.__webglFramebuffer[ht],R,T,i.COLOR_ATTACHMENT0,it,ht);else Wt(L.__webglFramebuffer,R,T,i.COLOR_ATTACHMENT0,it,0);b(T)?p(it):T.mipmaps.length>0&&i.texParameteri(it,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}R.depthBuffer&&ee(R)}function X(R){let T=R.textures;for(let L=0,j=T.length;L<j;L++){let $=T[L];if(b($)&&$.mipmapsAutoUpdate===!0){let at=v(R),gt=n.get($).__webglTexture;e.bindTexture(at,gt),p(at),e.unbindTexture()}}}let q=[];function St(R){if(R.samples>0){if(ct(R)===!1){let T=R.textures,L=R.width,j=R.height,$=i.COLOR_BUFFER_BIT,at=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(R),it=T.length>1;if(it)for(let Mt=0;Mt<T.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let Mt=0;Mt<T.length;Mt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[Mt]);let z=n.get(T[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,z,0)}i.blitFramebuffer(0,0,L,j,0,0,L,j,$,i.NEAREST),l===!0&&(q.length=0,q.push(i.COLOR_ATTACHMENT0+Mt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&q.push(at),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,q))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let Mt=0;Mt<T.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,gt.__webglColorRenderbuffer[Mt]);let z=n.get(T[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,z,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let T=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Jt(R){return Math.min(s.maxSamples,R.samples)}function ct(R){let T=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ne(R){let T=o.render.frame;h.get(R)!==T&&(h.set(R,T),R.update())}function Rt(R,T){let L=R.colorSpace,j=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||L!==er&&L!==ei&&(ae.getTransfer(L)===me?(j!==Un||$!==dn)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",L)),T}function st(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=W,this.getTextureUnits=D,this.setTextureUnits=O,this.setTexture2D=C,this.setTexture2DArray=nt,this.setTexture3D=ut,this.setTextureCube=ot,this.rebindTextures=Ae,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=Wt,this.useMultisampledRTT=ct,this.dispose=Z}function D_(i,t){function e(n,s=ei){let r,o=ae.getTransfer(s);if(n===dn)return i.UNSIGNED_BYTE;if(n===ba)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ec)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Tc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===bc)return i.BYTE;if(n===wc)return i.SHORT;if(n===As)return i.UNSIGNED_SHORT;if(n===Sa)return i.INT;if(n===Pn)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===qe)return i.HALF_FLOAT;if(n===Ac)return i.ALPHA;if(n===Rc)return i.RGB;if(n===Un)return i.RGBA;if(n===Jn)return i.DEPTH_COMPONENT;if(n===ti)return i.DEPTH_STENCIL;if(n===Ea)return i.RED;if(n===Ta)return i.RED_INTEGER;if(n===vi)return i.RG;if(n===Aa)return i.RG_INTEGER;if(n===Ra)return i.RGBA_INTEGER;if(n===Nr||n===Fr||n===Dr||n===Lr)if(o===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Nr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Nr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Lr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ca||n===Ia||n===Pa||n===Ua)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ca)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ia)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Na||n===Fa||n===Da||n===La||n===Ba||n===Br||n===ka)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Na||n===Fa)return o===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Da)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===La)return r.COMPRESSED_R11_EAC;if(n===Ba)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Br)return r.COMPRESSED_RG11_EAC;if(n===ka)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Oa||n===Va||n===za||n===Ga||n===Ha||n===Wa||n===Za||n===Ya||n===Xa||n===Ja||n===qa||n===ja||n===Qa||n===Ka)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Oa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Va)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===za)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ga)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ha)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Za)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ya)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ja)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ja)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ka)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$a||n===tl||n===el)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===$a)return o===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===tl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===el)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nl||n===il||n===kr||n===sl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===nl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===il)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===kr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var L_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,B_=`
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

}`,Jc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new mr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new We({vertexShader:L_,fragmentShader:B_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new qt(new Oi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qc=class extends Dn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,M=typeof XRWebGLBinding<"u",_=new Jc,g={},y=e.getContextAttributes(),b=null,p=null,v=[],E=[],x=new Pt,S=null,P=null,w=new sn;w.viewport=new we;let U=new sn;U.viewport=new we;let F=[w,U],B=new _a,N=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let C=v[k];return C===void 0&&(C=new ys,v[k]=C),C.getTargetRaySpace()},this.getControllerGrip=function(k){let C=v[k];return C===void 0&&(C=new ys,v[k]=C),C.getGripSpace()},this.getHand=function(k){let C=v[k];return C===void 0&&(C=new ys,v[k]=C),C.getHandSpace()};function H(k){let C=E.indexOf(k.inputSource);if(C===-1)return;let nt=v[C];nt!==void 0&&(nt.update(k.inputSource,k.frame,c||o),nt.dispatchEvent({type:k.type,data:k.inputSource}))}function J(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",G);for(let k=0;k<v.length;k++){let C=E[k];C!==null&&(E[k]=null,v[k].disconnect(C))}N=null,Z=null,_.reset();for(let k in g)delete g[k];if(t.setRenderTarget(b),f=null,u=null,d=null,s=null,p=null,Q.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(x.width,x.height,!1),P!==null){let k=P.camera;k.fov=P.fov,k.zoom=P.zoom,k.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",J),s.addEventListener("inputsourceschange",G),y.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(x),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,ut=null,ot=null;y.depth&&(ot=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=y.stencil?ti:Jn,ut=y.stencil?Xi:Pn);let dt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(dt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),p=new Ne(u.textureWidth,u.textureHeight,{format:Un,type:dn,depthTexture:new qn(u.textureWidth,u.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let nt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Ne(f.framebufferWidth,f.framebufferHeight,{format:Un,type:dn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Q.setContext(s),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G(k){for(let C=0;C<k.removed.length;C++){let nt=k.removed[C],ut=E.indexOf(nt);ut>=0&&(E[ut]=null,v[ut].disconnect(nt))}for(let C=0;C<k.added.length;C++){let nt=k.added[C],ut=E.indexOf(nt);if(ut===-1){for(let dt=0;dt<v.length;dt++)if(dt>=E.length){E.push(nt),ut=dt;break}else if(E[dt]===null){E[dt]=nt,ut=dt;break}if(ut===-1)break}let ot=v[ut];ot&&ot.connect(nt)}}function I(k,C){C===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(C.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;let C=k.near,nt=k.far;_.texture!==null&&(_.depthNear>0&&(C=_.depthNear),_.depthFar>0&&(nt=_.depthFar)),B.near=U.near=w.near=C,B.far=U.far=w.far=nt,(N!==B.near||Z!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),N=B.near,Z=B.far),B.layers.mask=k.layers.mask|6,w.layers.mask=B.layers.mask&-5,U.layers.mask=B.layers.mask&-3;let ut=k.parent,ot=B.cameras;I(B,ut);for(let dt=0;dt<ot.length;dt++)I(ot[dt],ut);B.projectionMatrix.copy(w.projectionMatrix),B.projectionMatrixInverse.copy(w.projectionMatrixInverse),P===null&&k.isPerspectiveCamera&&(P={camera:k,fov:k.fov,zoom:k.zoom}),W(k,B,ut)};function W(k,C,nt){nt===null?k.matrix.copy(C.matrixWorld):(k.matrix.copy(nt.matrixWorld),k.matrix.invert(),k.matrix.multiply(C.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(C.projectionMatrix),k.projectionMatrixInverse.copy(C.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Go*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(k){l=k,u!==null&&(u.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(B)},this.getCameraTexture=function(k){return g[k]};let D=null;function O(k,C){if(h=C.getViewerPose(c||o),m=C,h!==null){let nt=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let ut=!1;nt.length!==B.cameras.length&&(B.cameras.length=0,ut=!0);for(let pt=0;pt<nt.length;pt++){let Ct=nt[pt],vt=null;if(f!==null)vt=f.getViewport(Ct);else{let Ft=d.getViewSubImage(u,Ct);vt=Ft.viewport,pt===0&&(t.setRenderTargetTextures(p,Ft.colorTexture,Ft.depthStencilTexture),t.setRenderTarget(p))}let K=F[pt];K===void 0&&(K=new sn,K.layers.enable(pt),K.viewport=new we,F[pt]=K),K.matrix.fromArray(Ct.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(Ct.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(vt.x,vt.y,vt.width,vt.height),pt===0&&(B.matrix.copy(K.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),ut===!0&&B.cameras.push(K)}let ot=s.enabledFeatures;if(ot&&ot.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=n.getBinding();let pt=d.getDepthInformation(nt[0]);pt&&pt.isValid&&pt.texture&&_.init(pt,s.renderState)}if(ot&&ot.includes("camera-access")&&M){t.state.unbindTexture(),d=n.getBinding();for(let pt=0;pt<nt.length;pt++){let Ct=nt[pt].camera;if(Ct){let vt=g[Ct];vt||(vt=new mr,g[Ct]=vt);let K=d.getCameraImage(Ct);vt.sourceTexture=K}}}}for(let nt=0;nt<v.length;nt++){let ut=E[nt],ot=v[nt];ut!==null&&ot!==void 0&&ot.update(ut,C,c||o)}D&&D(k,C),C.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:C}),m=null}let Q=new xd;Q.setAnimationLoop(O),this.setAnimationLoop=function(k){D=k},this.dispose=function(){}}},k_=new Ht,Ad=new $t;Ad.set(-1,0,0,0,1,0,0,0,1);function O_(i,t){function e(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function n(_,g){g.color.getRGB(_.fogColor.value,Lc(i)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function s(_,g,y,b,p){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(_,g):g.isMeshLambertMaterial?(r(_,g),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(_,g),d(_,g)):g.isMeshPhongMaterial?(r(_,g),h(_,g),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(_,g),u(_,g),g.isMeshPhysicalMaterial&&f(_,g,p)):g.isMeshMatcapMaterial?(r(_,g),m(_,g)):g.isMeshDepthMaterial?r(_,g):g.isMeshDistanceMaterial?(r(_,g),M(_,g)):g.isMeshNormalMaterial?r(_,g):g.isLineBasicMaterial?(o(_,g),g.isLineDashedMaterial&&a(_,g)):g.isPointsMaterial?l(_,g,y,b):g.isSpriteMaterial?c(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,e(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,e(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,e(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===De&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,e(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===De&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,e(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,e(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);let y=t.get(g),b=y.envMap,p=y.envMapRotation;b&&(_.envMap.value=b,_.envMapRotation.value.setFromMatrix4(k_.makeRotationFromEuler(p)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(Ad),_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap&&(_.lightMap.value=g.lightMap,_.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,_.lightMapTransform)),g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,_.aoMapTransform))}function o(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,e(g.map,_.mapTransform))}function a(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function l(_,g,y,b){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*y,_.scale.value=b*.5,g.map&&(_.map.value=g.map,e(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,e(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function c(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,e(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,e(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function h(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function d(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function u(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function f(_,g,y){_.ior.value=g.ior,g.diffuseRoughness>0&&(_.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(_.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,_.diffuseRoughnessMapTransform))),g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===De&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.retroreflectivity>0&&(_.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,_.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=y.texture,_.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,_.specularIntensityMapTransform))}function m(_,g){g.matcap&&(_.matcap.value=g.matcap)}function M(_,g){let y=t.get(g).light;_.referencePosition.value.setFromMatrixPosition(y.matrixWorld),_.nearDistance.value=y.shadow.camera.near,_.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function V_(i,t,e,n){let s={},r={};function o(y,b){let p=b.program;n.uniformBlockBinding(y,p,s[y.id])}function a(y,b){let p=s[y.id];p===void 0&&(m(y),p=l(y),s[y.id]=p,y.addEventListener("dispose",_));let v=b.program;n.updateUBOMapping(y,v);let E=t.render.frame;r[y.id]!==E&&(c(y),r[y.id]=E)}function l(y){let b=i.createBuffer(),p=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,p,v),i.bindBuffer(i.UNIFORM_BUFFER,null),b}function c(y){let b=s[y.id],p=y.uniforms,v=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let E=0,x=p.length;E<x;E++){let S=p[E];if(Array.isArray(S))for(let P=0,w=S.length;P<w;P++)h(S[P],E,P,v);else h(S,E,0,v)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,b,p,v){if(u(y,b,p,v)===!0){let E=y.__offset,x=y.value;if(Array.isArray(x)){let S=0;for(let P=0;P<x.length;P++){let w=x[P],U=M(w,!0);d(w,y.__data,S),S+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,y.__data)}}function d(y,b,p){typeof y=="number"||typeof y=="boolean"?b[p]=y:y.isMatrix3?(b[p]=y.elements[0],b[p+1]=y.elements[1],b[p+2]=y.elements[2],b[p+3]=0,b[p+4]=y.elements[3],b[p+5]=y.elements[4],b[p+6]=y.elements[5],b[p+7]=0,b[p+8]=y.elements[6],b[p+9]=y.elements[7],b[p+10]=y.elements[8],b[p+11]=0):ArrayBuffer.isView(y)?b.set(y.subarray(0,b.length-p),p):y.toArray(b,p)}function u(y,b,p,v){let E=y.value,x=b+"_"+p;if(Array.isArray(E)){v[x]===void 0&&(v[x]=[]);let S=v[x],P=!1;for(let w=0;w<E.length;w++)f(E[w],S,w)===!0&&(P=!0);return P}return f(E,v,x)}function f(y,b,p){if(b[p]===void 0)return typeof y=="number"||typeof y=="boolean"?b[p]=y:ArrayBuffer.isView(y)?b[p]=y.slice():b[p]=y.clone(),!0;{let v=b[p];if(typeof y=="number"||typeof y=="boolean"){if(v!==y)return b[p]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(v.equals(y)===!1)return v.copy(y),!0}}return!1}function m(y){let b=y.uniforms,p=0,v=16;for(let x=0,S=b.length;x<S;x++){let P=Array.isArray(b[x])?b[x]:[b[x]];for(let w=0,U=P.length;w<U;w++){let F=P[w],B=Array.isArray(F.value)?F.value:[F.value],N=Array.isArray(b[x])||Array.isArray(F.value),Z=p;for(let J=0,G=B.length;J<G;J++){let I=B[J],W=M(I,N),D=p%v,O=D%W.boundary,Q=D+O;p+=O,Q!==0&&v-Q<W.storage&&(p+=v-Q),J===0&&(Z=p),p+=W.storage}let H=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new H((p-Z)/Float32Array.BYTES_PER_ELEMENT),F.__offset=Z}}let E=p%v;return E>0&&(p+=v-E),y.__size=p,y.__cache={},this}function M(y,b){let p={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(p.boundary=4,p.storage=4):y.isVector2?(p.boundary=8,p.storage=8):y.isVector3||y.isColor?(p.boundary=16,p.storage=12):y.isVector4?(p.boundary=16,p.storage=16):y.isMatrix3?(p.boundary=16,p.storage=48):y.isMatrix4?(p.boundary=16,p.storage=64):y.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(p.boundary=16,p.storage=y.byteLength):Xt("WebGLRenderer: Unsupported uniform value type.",y),b===!0&&(p.boundary=16,p.storage=Math.ceil(p.storage/16)*16),p}function _(y){let b=y.target;b.removeEventListener("dispose",_),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function g(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:g}}var z_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),kn=null;function G_(){return kn===null&&(kn=new hr(z_,16,16,vi,qe),kn.name="DFG_LUT",kn.minFilter=on,kn.magFilter=on,kn.wrapS=Fn,kn.wrapT=Fn,kn.generateMipmaps=!1,kn.needsUpdate=!0),kn}var ll=class{constructor(t={}){let{canvas:e=Gu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=dn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let M=f,_=new Set([Ra,Aa,Ta]),g=new Set([dn,Pn,As,Xi,ba,wa]),y=new Uint32Array(4),b=new Int32Array(4),p={textures:[],min:[],max:[],resolution:[]},v=null,E=null,x=[],S=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,U=!1,F=null,B=null,N=null,Z=null;this._outputColorSpace=ze;let H=0,J=0,G=null,I=-1,W=null,D=new we,O=new we,Q=null,k=new xt(0),C=0,nt=e.width,ut=e.height,ot=1,dt=null,_t=null,pt=new we(0,0,nt,ut),Ct=new we(0,0,nt,ut),vt=!1,K=new mi,Ft=new Yo,Dt=!1,Yt=!1,Wt=new Ht,Lt=new V,Qt=new we,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function Se(){return G===null?ot:1}let X=n;function q(A,Y){return e.getContext(A,Y)}let St,Jt,ct,ne,Rt,st,R,T,L,j,$,at,gt,it,ht,Mt,z,ft,lt,wt,bt,Et,Gt;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Zt,!1),e.addEventListener("webglcontextrestored",ie,!1),e.addEventListener("webglcontextcreationerror",It,!1),X===null){let Y="webgl2";if(X=q(Y,A),X===null)throw q(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}re()}catch(A){throw e.removeEventListener("webglcontextlost",Zt,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",It,!1),Kt("WebGLRenderer: "+A.message),A}function re(){St=new $0(X),St.init(),bt=new D_(X,St),Jt=new G0(X,St,t,bt),ct=new N_(X,St),Jt.reversedDepthBuffer&&u&&ct.buffers.depth.setReversed(!0),B=X.createFramebuffer(),N=X.createFramebuffer(),Z=X.createFramebuffer(),ne=new nx(X),Rt=new y_,st=new F_(X,St,ct,Rt,Jt,bt,ne),R=new K0(w),T=new sm(X),Et=new V0(X,T),L=new tx(X,T,ne,Et),j=new sx(X,L,T,Et,ne),ft=new ix(X,Jt,st),ht=new H0(Rt),$=new __(w,R,St,Jt,Et,ht),at=new O_(w,Rt),gt=new v_,it=new A_(St),z=new O0(w,R,ct,j,m,l),Mt=new U_(w,j,Jt),Gt=new V_(X,ne,Jt,ct),lt=new z0(X,St,ne),wt=new ex(X,St,ne),ne.programs=$.programs,w.capabilities=Jt,w.extensions=St,w.properties=Rt,w.renderLists=gt,w.shadowMap=Mt,w.state=ct,w.info=ne}M!==dn&&(P=new ox(M,e.width,e.height,a,s,r));let yt=new qc(w,X);this.xr=yt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let A=St.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=St.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(A){A!==void 0&&(ot=A,this.setSize(nt,ut,!1))},this.getSize=function(A){return A.set(nt,ut)},this.setSize=function(A,Y,rt=!0){if(yt.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}nt=A,ut=Y,e.width=Math.floor(A*ot),e.height=Math.floor(Y*ot),rt===!0&&(e.style.width=A+"px",e.style.height=Y+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(nt*ot,ut*ot).floor()},this.setDrawingBufferSize=function(A,Y,rt){nt=A,ut=Y,ot=rt,e.width=Math.floor(A*rt),e.height=Math.floor(Y*rt),this.setViewport(0,0,A,Y)},this.setEffects=function(A){if(M===dn){Kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Y=0;Y<A.length;Y++)if(A[Y].isOutputPass===!0){Xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(pt)},this.setViewport=function(A,Y,rt,tt){A.isVector4?pt.set(A.x,A.y,A.z,A.w):pt.set(A,Y,rt,tt),ct.viewport(D.copy(pt).multiplyScalar(Se()).round())},this.getScissor=function(A){return A.copy(Ct)},this.setScissor=function(A,Y,rt,tt){A.isVector4?Ct.set(A.x,A.y,A.z,A.w):Ct.set(A,Y,rt,tt),ct.scissor(O.copy(Ct).multiplyScalar(Se()).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(A){ct.setScissorTest(vt=A)},this.setOpaqueSort=function(A){dt=A},this.setTransparentSort=function(A){_t=A},this.getClearColor=function(A){return A.copy(z.getClearColor())},this.setClearColor=function(){z.setClearColor(...arguments)},this.getClearAlpha=function(){return z.getClearAlpha()},this.setClearAlpha=function(){z.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,rt=!0){let tt=0;if(A){let et=!1;if(G!==null){let At=G.texture.format;et=_.has(At)}if(et){let At=G.texture.type,Bt=g.has(At),Tt=z.getClearColor(),Nt=z.getClearAlpha(),zt=Tt.r,te=Tt.g,he=Tt.b;Bt?(y[0]=zt,y[1]=te,y[2]=he,y[3]=Nt,X.clearBufferuiv(X.COLOR,0,y)):(b[0]=zt,b[1]=te,b[2]=he,b[3]=Nt,X.clearBufferiv(X.COLOR,0,b))}else tt|=X.COLOR_BUFFER_BIT}Y&&(tt|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(tt|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),tt!==0&&X.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),F=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Zt,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",It,!1),z.dispose(),gt.dispose(),it.dispose(),st.dispose(),Rt.dispose(),R.dispose(),j.dispose(),L.dispose(),Et.dispose(),Gt.dispose(),$.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",yh),yt.removeEventListener("sessionend",Mh),Ii.stop()};function Zt(A){A.preventDefault(),Nc("WebGLRenderer: Context Lost."),U=!0}function ie(){Nc("WebGLRenderer: Context Restored."),U=!1;let A=ne.autoReset,Y=Mt.enabled,rt=Mt.autoUpdate,tt=Mt.needsUpdate,et=Mt.type;re(),ne.autoReset=A,Mt.enabled=Y,Mt.autoUpdate=rt,Mt.needsUpdate=tt,Mt.type=et}function It(A){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function _e(A){let Y=A.target;Y.removeEventListener("dispose",_e),ke(Y)}function ke(A){oi(A),Rt.remove(A)}function oi(A){let Y=Rt.get(A).programs;Y!==void 0&&(Y.forEach(function(rt){$.releaseProgram(rt)}),A.isShaderMaterial&&$.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,rt,tt,et,At){Y===null&&(Y=ee);let Bt=et.isMesh&&et.matrixWorld.determinantAffine()<0,Tt=Qf(A,Y,rt,tt,et);ct.setMaterial(tt,Bt);let Nt=rt.index,zt=1;if(tt.wireframe===!0){if(Nt=L.getWireframeAttribute(rt),Nt===void 0)return;zt=2}let te=rt.drawRange,he=rt.attributes.position,Ot=te.start*zt,ue=(te.start+te.count)*zt;At!==null&&(Ot=Math.max(Ot,At.start*zt),ue=Math.min(ue,(At.start+At.count)*zt)),Nt!==null?(Ot=Math.max(Ot,0),ue=Math.min(ue,Nt.count)):he!=null&&(Ot=Math.max(Ot,0),ue=Math.min(ue,he.count));let Ie=ue-Ot;if(Ie<0||Ie===1/0)return;Et.setup(et,tt,Tt,rt,Nt);let Me,ye=lt;if(Nt!==null&&(Me=T.get(Nt),ye=wt,ye.setIndex(Me)),et.isMesh)tt.wireframe===!0?(ct.setLineWidth(tt.wireframeLinewidth*Se()),ye.setMode(X.LINES)):ye.setMode(X.TRIANGLES);else if(et.isLine){let je=tt.linewidth;je===void 0&&(je=1),ct.setLineWidth(je*Se()),et.isLineSegments?ye.setMode(X.LINES):et.isLineLoop?ye.setMode(X.LINE_LOOP):ye.setMode(X.LINE_STRIP)}else et.isPoints?ye.setMode(X.POINTS):et.isSprite&&ye.setMode(X.TRIANGLES);if(et.isBatchedMesh)if(St.get("WEBGL_multi_draw"))ye.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{let je=et._multiDrawStarts,Vt=et._multiDrawCounts,nn=et._multiDrawCount,xe=Nt?T.get(Nt).bytesPerElement:1,Pi=Rt.get(tt).currentProgram.getUniforms();for(let Qe=0;Qe<nn;Qe++)Pi.setValue(X,"_gl_DrawID",Qe),ye.render(je[Qe]/xe,Vt[Qe])}else if(et.isInstancedMesh)ye.renderInstances(Ot,Ie,et.count);else if(rt.isInstancedBufferGeometry){let je=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Vt=Math.min(rt.instanceCount,je);ye.renderInstances(Ot,Ie,Vt)}else ye.render(Ot,Ie)};function _h(A,Y,rt,tt){F!==null&&A.isNodeMaterial&&F.setObject(tt,A),Dt===!0&&ht.setState(A,rt,!1),A.transparent===!0&&A.side===ge&&A.forceSinglePass===!1?(A.side=De,A.needsUpdate=!0,Gs(A,Y,tt),A.side=Mi,A.needsUpdate=!0,Gs(A,Y,tt),A.side=ge):Gs(A,Y,tt)}this.compile=function(A,Y,rt=null){rt===null&&(rt=A),F!==null&&F.renderStart(A,Y,rt),E=it.get(rt),E.init(Y),S.push(E),rt.traverseVisible(function(et){et.isLight&&et.layers.test(Y.layers)&&(E.pushLight(et),et.castShadow&&E.pushShadow(et))}),A!==rt&&A.traverseVisible(function(et){et.isLight&&et.layers.test(Y.layers)&&(E.pushLight(et),et.castShadow&&E.pushShadow(et))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),Yt=this.localClippingEnabled,Dt=ht.init(this.clippingPlanes,Yt),Dt===!0&&ht.setGlobalState(this.clippingPlanes,Y),F!==null&&Mt.render(E.state.shadowsArray,rt,Y);let tt=new Set;return A.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;let At=et.material;if(At)if(Array.isArray(At))for(let Bt=0;Bt<At.length;Bt++){let Tt=At[Bt];_h(Tt,rt,Y,et),tt.add(Tt)}else _h(At,rt,Y,et),tt.add(At)}),E=S.pop(),F!==null&&F.renderEnd(),tt},this.compileAsync=function(A,Y,rt=null){let tt=this.compile(A,Y,rt);return new Promise(et=>{function At(){if(tt.forEach(function(Bt){let Nt=Rt.get(Bt).currentProgram;(Nt===void 0||Nt.isReady())&&tt.delete(Bt)}),tt.size===0){et(A);return}setTimeout(At,10)}St.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Ul=null;function qf(A){Ul&&Ul(A)}function yh(){Ii.stop()}function Mh(){Ii.start()}let Ii=new xd;Ii.setAnimationLoop(qf),typeof self<"u"&&Ii.setContext(self),this.setAnimationLoop=function(A){Ul=A,yt.setAnimationLoop(A),A===null?Ii.stop():Ii.start()},yt.addEventListener("sessionstart",yh),yt.addEventListener("sessionend",Mh),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;F!==null&&F.renderStart(A,Y);let rt=yt.enabled===!0&&yt.isPresenting===!0,tt=P!==null&&(G===null||rt)&&P.begin(w,G);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(Y),Y=yt.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,Y,G),E=it.get(A,S.length),E.init(Y),E.state.textureUnits=st.getTextureUnits(),S.push(E),Wt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Y.isArrayCamera?Ft.setFromArrayCamera(Y):K.setFromProjectionMatrix(Wt,Mn,Y.reversedDepth),Yt=this.localClippingEnabled,Dt=ht.init(this.clippingPlanes,Yt),v=gt.get(A,x.length),v.init(),x.push(v),this.info.render.frame++,yt.enabled===!0&&yt.isPresenting===!0){let Bt=w.xr.getDepthSensingMesh();Bt!==null&&Nl(Bt,Y,-1/0,w.sortObjects)}Nl(A,Y,0,w.sortObjects),v.finish(),F!==null&&F.updateLights(E.state.lightsArray),w.sortObjects===!0&&v.sort(dt,_t),Ae=yt.enabled===!1||yt.isPresenting===!1||yt.hasDepthSensing()===!1,Ae&&z.addToRenderList(v,A),this.info.autoReset===!0&&this.info.reset(),Dt===!0&&ht.beginShadows();let et=E.state.shadowsArray;if(Mt.render(et,A,Y),Dt===!0&&ht.endShadows(),(tt&&P.hasRenderPass())===!1){let Bt=v.opaque,Tt=v.transmissive;if(E.setupLights(),Y.isArrayCamera){let Nt=Y.cameras;if(Tt.length>0)for(let zt=0,te=Nt.length;zt<te;zt++){let he=Nt[zt];Sh(Bt,Tt,A,he)}Ae&&z.render(A);for(let zt=0,te=Nt.length;zt<te;zt++){let he=Nt[zt];vh(v,A,he,he.viewport)}}else Tt.length>0&&Sh(Bt,Tt,A,Y),Ae&&z.render(A),vh(v,A,Y)}G!==null&&J===0&&(st.updateMultisampleRenderTarget(G),st.updateRenderTargetMipmap(G)),tt&&P.end(w),A.isScene===!0&&A.onAfterRender(w,A,Y),Et.resetDefaultState(),I=-1,W=null,S.pop(),S.length>0?(E=S[S.length-1],st.setTextureUnits(E.state.textureUnits),Dt===!0&&ht.setGlobalState(w.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?v=x[x.length-1]:v=null,F!==null&&F.renderEnd()};function Nl(A,Y,rt,tt){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)rt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)E.pushLight(A),A.castShadow&&E.pushShadow(A);else if(A.isSprite){let Bt=Y.isArrayCamera?Ft:K;if(!A.frustumCulled||A.intersectsFrustum(Bt)){tt&&Qt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Wt);let Tt=j.update(A),Nt=A.material;Nt.visible&&v.push(A,Tt,Nt,rt,Qt.z,null,Y)}}else if(A.isMesh||A.isLine||A.isPoints){let Bt=Y.isArrayCamera?Ft:K;if(!A.frustumCulled||A.intersectsFrustum(Bt)){let Tt=j.update(A),Nt=A.material;if(tt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Qt.copy(A.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Qt.copy(Tt.boundingSphere.center)),Qt.applyMatrix4(A.matrixWorld).applyMatrix4(Wt)),Array.isArray(Nt)){let zt=Tt.groups;for(let te=0,he=zt.length;te<he;te++){let Ot=zt[te],ue=Nt[Ot.materialIndex];ue&&ue.visible&&v.push(A,Tt,ue,rt,Qt.z,Ot,Y)}}else Nt.visible&&v.push(A,Tt,Nt,rt,Qt.z,null,Y)}}}let At=A.children;for(let Bt=0,Tt=At.length;Bt<Tt;Bt++)Nl(At[Bt],Y,rt,tt)}function vh(A,Y,rt,tt){let{opaque:et,transmissive:At,transparent:Bt}=A;E.setupLightsView(rt),Dt===!0&&ht.setGlobalState(w.clippingPlanes,rt),tt&&ct.viewport(D.copy(tt)),et.length>0&&no(et,Y,rt),At.length>0&&no(At,Y,rt),Bt.length>0&&no(Bt,Y,rt),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Sh(A,Y,rt,tt){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[tt.id]===void 0){let Ot=St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[tt.id]=new Ne(1,1,{generateMipmaps:!0,type:Ot?qe:dn,minFilter:$n,samples:Math.max(4,Jt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ae.workingColorSpace})}let At=E.state.transmissionRenderTarget[tt.id],Bt=tt.viewport||D;At.setSize(Bt.z*w.transmissionResolutionScale,Bt.w*w.transmissionResolutionScale);let Tt=w.getRenderTarget(),Nt=w.getActiveCubeFace(),zt=w.getActiveMipmapLevel();w.setRenderTarget(At),w.getClearColor(k),C=w.getClearAlpha(),C<1&&w.setClearColor(16777215,.5),w.clear(),Ae&&z.render(rt);let te=w.toneMapping;w.toneMapping=Bn;let he=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),E.setupLightsView(tt),Dt===!0&&ht.setGlobalState(w.clippingPlanes,tt),no(A,rt,tt),st.updateMultisampleRenderTarget(At),st.updateRenderTargetMipmap(At),St.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let ue=0,Ie=Y.length;ue<Ie;ue++){let Me=Y[ue],{object:ye,geometry:je,material:Vt,group:nn}=Me;if(Vt.side===ge&&ye.layers.test(tt.layers)){let xe=Vt.side;Vt.side=De,Vt.needsUpdate=!0,bh(ye,rt,tt,je,Vt,nn),Vt.side=xe,Vt.needsUpdate=!0,Ot=!0}}Ot===!0&&(st.updateMultisampleRenderTarget(At),st.updateRenderTargetMipmap(At))}w.setRenderTarget(Tt,Nt,zt),w.setClearColor(k,C),he!==void 0&&(tt.viewport=he),w.toneMapping=te}function no(A,Y,rt){let tt=Y.isScene===!0?Y.overrideMaterial:null;for(let et=0,At=A.length;et<At;et++){let Bt=A[et],{object:Tt,geometry:Nt,group:zt}=Bt,te=Bt.material;te.allowOverride===!0&&tt!==null&&(te=tt),Tt.layers.test(rt.layers)&&bh(Tt,Y,rt,Nt,te,zt)}}function bh(A,Y,rt,tt,et,At){F!==null&&et.isNodeMaterial&&F.setObject(A,et),A.onBeforeRender(w,Y,rt,tt,et,At),A.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),et.onBeforeRender(w,Y,rt,tt,A,At),et.transparent===!0&&et.side===ge&&et.forceSinglePass===!1?(et.side=De,et.needsUpdate=!0,w.renderBufferDirect(rt,Y,tt,et,A,At),et.side=Mi,et.needsUpdate=!0,w.renderBufferDirect(rt,Y,tt,et,A,At),et.side=ge):w.renderBufferDirect(rt,Y,tt,et,A,At),A.onAfterRender(w,Y,rt,tt,et,At)}function wh(A){let Y=0;for(let rt of A)rt.texture!==null&&Y++;return Y}function Gs(A,Y,rt){Y.isScene!==!0&&(Y=ee);let tt=Rt.get(A),et=E.state.lights,At=E.state.shadowsArray,Bt=et.state.version,Tt=$.getParameters(A,et.state,At,Y,rt,E.state.lightProbeGridArray),Nt=$.getProgramCacheKey(Tt),zt=tt.programs;tt.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Y.environment:null,tt.fog=Y.fog;let te=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;tt.envMap=R.get(A.envMap||tt.environment,te),tt.envMapRotation=tt.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,zt===void 0&&(A.addEventListener("dispose",_e),zt=new Map,tt.programs=zt,tt.programVariants=new Map);let he=zt.get(Nt);if(he!==void 0){if(tt.currentProgram===he&&tt.lightsStateVersion===Bt)return Th(A,Tt),he}else Tt.uniforms=$.getUniforms(A),F!==null&&A.isNodeMaterial&&F.build(A,rt,Tt),A.onBeforeCompile(Tt,w),he=$.acquireProgram(Tt,Nt),zt.set(Nt,he),tt.uniforms=Tt.uniforms;let Ot=tt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ot.clippingPlanes=ht.uniform),Th(A,Tt),tt.needsLights=$f(A),tt.lightsStateVersion=Bt,tt.needsLights&&(Ot.ambientLightColor.value=et.state.ambient,Ot.lightProbe.value=et.state.probe,Ot.sunLights.value=et.state.sun,Ot.sunLightShadows.value=et.state.sunShadow,Ot.directionalLights.value=et.state.directional,Ot.directionalLightShadows.value=et.state.directionalShadow,Ot.spotLights.value=et.state.spot,Ot.spotLightShadows.value=et.state.spotShadow,Ot.rectAreaLights.value=et.state.rectArea,Ot.ltc_1.value=et.state.rectAreaLTC1,Ot.ltc_2.value=et.state.rectAreaLTC2,Ot.pointLights.value=et.state.point,Ot.pointLightShadows.value=et.state.pointShadow,Ot.hemisphereLights.value=et.state.hemi,Ot.sunShadowMatrix.value=et.state.sunShadowMatrix,Ot.sunShadowCascade.value=et.state.sunShadowCascade,Ot.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Ot.spotLightMatrix.value=et.state.spotLightMatrix,Ot.spotLightMap.value=et.state.spotLightMap,Ot.pointShadowMatrix.value=et.state.pointShadowMatrix),tt.numLightProbeGrids=wh(E.state.lightProbeGridArray),tt.currentProgram=he,tt.uniformsList=null,he}function jf(A,Y,rt,tt,et){let At=Rt.get(A),Bt=At.currentProgram.id+","+tt+","+et,Tt=At.programVariants.get(Bt);return Tt===void 0?(Tt=Gs(A,Y,rt),At.programVariants.set(Bt,Tt)):(At.currentProgram=Tt,At.uniformsList=null,At.outputColorSpace=tt,At.toneMapping=et),Tt}function Eh(A){if(A.uniformsList===null){let Y=A.currentProgram.getUniforms();A.uniformsList=Cs.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function Th(A,Y){let rt=Rt.get(A);rt.outputColorSpace=Y.outputColorSpace,rt.batching=Y.batching,rt.batchingColor=Y.batchingColor,rt.instancing=Y.instancing,rt.instancingColor=Y.instancingColor,rt.instancingMorph=Y.instancingMorph,rt.skinning=Y.skinning,rt.morphTargets=Y.morphTargets,rt.morphNormals=Y.morphNormals,rt.morphColors=Y.morphColors,rt.morphTargetsCount=Y.morphTargetsCount,rt.numClippingPlanes=Y.numClippingPlanes,rt.numIntersection=Y.numClipIntersection,rt.vertexAlphas=Y.vertexAlphas,rt.vertexTangents=Y.vertexTangents,rt.toneMapping=Y.toneMapping}function Qf(A,Y,rt,tt,et){Y.isScene!==!0&&(Y=ee),st.resetTextureUnits();let At=Y.fog,Bt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial?Y.environment:null,Tt=G===null?w.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:ae.workingColorSpace,Nt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial&&!tt.envMap||tt.isMeshPhongMaterial&&!tt.envMap,zt=R.get(tt.envMap||Bt,Nt),te=tt.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,he=!!rt.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Ot=!!rt.morphAttributes.position,ue=!!rt.morphAttributes.normal,Ie=!!rt.morphAttributes.color,Me=Bn;tt.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Me=w.toneMapping);let ye=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,je=ye!==void 0?ye.length:0,Vt=Rt.get(tt),nn=E.state.lights;if(Dt===!0&&(Yt===!0||A!==W)){let Ee=A===W&&tt.id===I;ht.setState(tt,A,Ee)}let xe=!1,Pi=!1;tt.version===Vt.__version?Vt.needsLights&&Vt.lightsStateVersion!==nn.state.version||et.isBatchedMesh&&Vt.batching===!1||!et.isBatchedMesh&&Vt.batching===!0||et.isBatchedMesh&&Vt.batchingColor===!0&&et._colorsTexture===null||et.isBatchedMesh&&Vt.batchingColor===!1&&et._colorsTexture!==null||et.isInstancedMesh&&Vt.instancing===!1||!et.isInstancedMesh&&Vt.instancing===!0||et.isSkinnedMesh&&Vt.skinning===!1||!et.isSkinnedMesh&&Vt.skinning===!0||et.isInstancedMesh&&Vt.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&Vt.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&Vt.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&Vt.instancingMorph===!1&&et.morphTexture!==null||Vt.envMap!==zt||tt.fog===!0&&Vt.fog!==At||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==ht.numPlanes||Vt.numIntersection!==ht.numIntersection)||Vt.vertexAlphas!==te||Vt.vertexTangents!==he||Vt.morphTargets!==Ot||Vt.morphNormals!==ue||Vt.morphColors!==Ie||Vt.morphTargetsCount!==je||Vt.numLightProbeGrids!==wh(E.state.lightProbeGridArray)?xe=!0:(Vt.outputColorSpace!==Tt||Vt.toneMapping!==Me)&&(Pi=!0):(xe=!0,Vt.__version=tt.version);let Qe=Vt.currentProgram;(xe===!0||Pi===!0)&&(Qe=Pi===!0?jf(tt,Y,et,Tt,Me):Gs(tt,Y,et),F&&tt.isNodeMaterial&&F.onUpdateProgram(tt,Qe,Vt));let io=!1,ai=!1,Ui=!1,pe=Qe.getUniforms(),Xe=Vt.uniforms;if(ct.useProgram(Qe.program)&&(io=!0,ai=!0,Ui=!0),tt.id!==I&&(I=tt.id,ai=!0),io||W!==A){ct.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),pe.setValue(X,"projectionMatrix",A.projectionMatrix),pe.setValue(X,"viewMatrix",A.matrixWorldInverse);let Oe=pe.map.cameraPosition;Oe!==void 0&&Oe.setValue(X,Lt.setFromMatrixPosition(A.matrixWorld)),Jt.logarithmicDepthBuffer&&pe.setValue(X,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&pe.setValue(X,"isOrthographic",A.isOrthographicCamera===!0),W!==A&&(W=A,ai=!0,Ui=!0)}if(Vt.needsLights&&(nn.state.sunShadowMap.length>0&&pe.setValue(X,"sunShadowMap",nn.state.sunShadowMap,st),nn.state.directionalShadowMap.length>0&&pe.setValue(X,"directionalShadowMap",nn.state.directionalShadowMap,st),nn.state.spotShadowMap.length>0&&pe.setValue(X,"spotShadowMap",nn.state.spotShadowMap,st),nn.state.pointShadowMap.length>0&&pe.setValue(X,"pointShadowMap",nn.state.pointShadowMap,st)),et.isSkinnedMesh){pe.setOptional(X,et,"bindMatrix"),pe.setOptional(X,et,"bindMatrixInverse");let Ee=et.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),pe.setValue(X,"boneTexture",Ee.boneTexture,st))}et.isBatchedMesh&&(pe.setOptional(X,et,"batchingTexture"),pe.setValue(X,"batchingTexture",et._matricesTexture,st),pe.setOptional(X,et,"batchingIdTexture"),pe.setValue(X,"batchingIdTexture",et._indirectTexture,st),pe.setOptional(X,et,"batchingColorTexture"),et._colorsTexture!==null&&pe.setValue(X,"batchingColorTexture",et._colorsTexture,st));let En=rt.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&ft.update(et,rt,Qe),(ai||Vt.receiveShadow!==et.receiveShadow)&&(Vt.receiveShadow=et.receiveShadow,pe.setValue(X,"receiveShadow",et.receiveShadow)),(tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial)&&tt.envMap===null&&Y.environment!==null&&(Xe.envMapIntensity.value=Y.environmentIntensity),Xe.dfgLUT!==void 0&&(Xe.dfgLUT.value=G_()),ai){if(pe.setValue(X,"toneMappingExposure",w.toneMappingExposure),Vt.needsLights&&Kf(Xe,Ui),At&&tt.fog===!0&&at.refreshFogUniforms(Xe,At),at.refreshMaterialUniforms(Xe,tt,ot,ut,E.state.transmissionRenderTarget[A.id]),Vt.needsLights&&Vt.numLightProbeGrids>0){let Ee=p,Oe=0;for(let zn of E.state.lightProbeGridArray)zn.texture!==null&&(Ee.textures[Oe]=zn.texture,Ee.min[Oe]=zn.boundingBox.min,Ee.max[Oe]=zn.boundingBox.max,Ee.resolution[Oe]=zn.resolution,Oe++);for(let zn in Ee)Ee[zn].length=Oe;Xe.probesSH.value=Ee.textures,Xe.probesMin.value=Ee.min,Xe.probesMax.value=Ee.max,Xe.probesResolution.value=Ee.resolution}Cs.upload(X,Eh(Vt),Xe,st)}if(tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Cs.upload(X,Eh(Vt),Xe,st),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&pe.setValue(X,"center",et.center),pe.setValue(X,"modelViewMatrix",et.modelViewMatrix),pe.setValue(X,"normalMatrix",et.normalMatrix),pe.setValue(X,"modelMatrix",et.matrixWorld),tt.uniformsGroups!==void 0){let Ee=tt.uniformsGroups;for(let Oe=0,zn=Ee.length;Oe<zn;Oe++){let Rh=Ee[Oe];Gt.update(Rh,Qe),Gt.bind(Rh,Qe)}}return Qe}function Kf(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.sunLights.needsUpdate=Y,A.sunLightShadows.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function $f(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(A,Y,rt){let tt=Rt.get(A);tt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),Rt.get(A.texture).__webglTexture=Y,Rt.get(A.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:rt,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){let rt=Rt.get(A);rt.__webglFramebuffer=Y,rt.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(A,Y=0,rt=0){G=A,H=Y,J=rt;let tt=null,et=!1,At=!1;if(A){let Tt=Rt.get(A);if(Tt.__useDefaultFramebuffer!==void 0){ct.bindFramebuffer(X.FRAMEBUFFER,Tt.__webglFramebuffer),D.copy(A.viewport),O.copy(A.scissor),Q=A.scissorTest,ct.viewport(D),ct.scissor(O),ct.setScissorTest(Q),I=-1;return}else if(Tt.__webglFramebuffer===void 0)st.setupRenderTarget(A);else if(Tt.__hasExternalTextures)st.rebindTextures(A,Rt.get(A.texture).__webglTexture,Rt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let te=A.depthTexture;if(Tt.__boundDepthTexture!==te){if(te!==null&&Rt.has(te)&&(A.width!==te.image.width||A.height!==te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(A)}}let Nt=A.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(At=!0);let zt=Rt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(zt[Y])?tt=zt[Y][rt]:tt=zt[Y],et=!0):A.samples>0&&st.useMultisampledRTT(A)===!1?tt=Rt.get(A).__webglMultisampledFramebuffer:Array.isArray(zt)?tt=zt[rt]:tt=zt,D.copy(A.viewport),O.copy(A.scissor),Q=A.scissorTest}else D.copy(pt).multiplyScalar(ot).floor(),O.copy(Ct).multiplyScalar(ot).floor(),Q=vt;if(rt!==0&&(tt=B),ct.bindFramebuffer(X.FRAMEBUFFER,tt)&&ct.drawBuffers(A,tt),ct.viewport(D),ct.scissor(O),ct.setScissorTest(Q),et){let Tt=Rt.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Tt.__webglTexture,rt)}else if(At){let Tt=Y;for(let Nt=0;Nt<A.textures.length;Nt++){let zt=Rt.get(A.textures[Nt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Nt,zt.__webglTexture,rt,Tt)}}else if(A!==null&&rt!==0){let Tt=Rt.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Tt.__webglTexture,rt)}I=-1};function Ah(A){let Y=Rt.get(A);return(Y.__readFormat!==A.format||Y.__readType!==A.type)&&(Y.__readFormat=A.format,Y.__readType=A.type,Y.__formatReadable=Jt.textureFormatReadable(A.format),Y.__typeReadable=Jt.textureTypeReadable(A.type)),Y}this.readRenderTargetPixels=function(A,Y,rt,tt,et,At,Bt,Tt=0){if(!(A&&A.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Rt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Bt!==void 0&&(Nt=Nt[Bt],Array.isArray(Nt)&&(Nt=Nt[0])),Nt){ct.bindFramebuffer(X.FRAMEBUFFER,Nt);try{let zt=A.textures[Tt],te=zt.format,he=zt.type;A.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Tt);let Ot=Ah(zt);if(Ot.__formatReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ot.__typeReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-tt&&rt>=0&&rt<=A.height-et&&X.readPixels(Y,rt,tt,et,bt.convert(te),bt.convert(he),At)}finally{let zt=G!==null?Rt.get(G).__webglFramebuffer:null;ct.bindFramebuffer(X.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(A,Y,rt,tt,et,At,Bt,Tt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Rt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Bt!==void 0&&(Nt=Nt[Bt],Array.isArray(Nt)&&(Nt=Nt[0])),Nt)if(Y>=0&&Y<=A.width-tt&&rt>=0&&rt<=A.height-et){ct.bindFramebuffer(X.FRAMEBUFFER,Nt);let zt=A.textures[Tt],te=zt.format,he=zt.type;A.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Tt);let Ot=Ah(zt);if(Ot.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ot.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ue=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,ue),X.bufferData(X.PIXEL_PACK_BUFFER,At.byteLength,X.STREAM_READ),X.readPixels(Y,rt,tt,et,bt.convert(te),bt.convert(he),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);let Ie=G!==null?Rt.get(G).__webglFramebuffer:null;ct.bindFramebuffer(X.FRAMEBUFFER,Ie);let Me=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await Wu(X,Me,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,ue),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,At),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(ue),X.deleteSync(Me),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,rt=0){let tt=Math.pow(2,-rt),et=Math.floor(A.image.width*tt),At=Math.floor(A.image.height*tt),Bt=Y!==null?Y.x:0,Tt=Y!==null?Y.y:0;st.setTexture2D(A,0),X.copyTexSubImage2D(X.TEXTURE_2D,rt,0,0,Bt,Tt,et,At),ct.unbindTexture()},this.copyTextureToTexture=function(A,Y,rt=null,tt=null,et=0,At=0){let Bt,Tt,Nt,zt,te,he,Ot,ue,Ie,Me=A.isCompressedTexture?A.mipmaps[At]:A.image;if(rt!==null)Bt=rt.max.x-rt.min.x,Tt=rt.max.y-rt.min.y,Nt=rt.isBox3?rt.max.z-rt.min.z:1,zt=rt.min.x,te=rt.min.y,he=rt.isBox3?rt.min.z:0;else{let pe=Math.pow(2,-et);Bt=Math.floor(Me.width*pe),Tt=Math.floor(Me.height*pe),A.isDataArrayTexture?Nt=Me.depth:A.isData3DTexture?Nt=Math.floor(Me.depth*pe):Nt=1,zt=0,te=0,he=0}tt!==null?(Ot=tt.x,ue=tt.y,Ie=tt.z):(Ot=0,ue=0,Ie=0);let ye=bt.convert(Y.format),je=bt.convert(Y.type),Vt;Y.isData3DTexture?(st.setTexture3D(Y,0),Vt=X.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(st.setTexture2DArray(Y,0),Vt=X.TEXTURE_2D_ARRAY):(st.setTexture2D(Y,0),Vt=X.TEXTURE_2D),ct.activeTexture(X.TEXTURE0),ct.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Y.flipY),ct.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),ct.pixelStorei(X.UNPACK_ALIGNMENT,Y.unpackAlignment);let nn=ct.getParameter(X.UNPACK_ROW_LENGTH),xe=ct.getParameter(X.UNPACK_IMAGE_HEIGHT),Pi=ct.getParameter(X.UNPACK_SKIP_PIXELS),Qe=ct.getParameter(X.UNPACK_SKIP_ROWS),io=ct.getParameter(X.UNPACK_SKIP_IMAGES);ct.pixelStorei(X.UNPACK_ROW_LENGTH,Me.width),ct.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Me.height),ct.pixelStorei(X.UNPACK_SKIP_PIXELS,zt),ct.pixelStorei(X.UNPACK_SKIP_ROWS,te),ct.pixelStorei(X.UNPACK_SKIP_IMAGES,he);let ai=A.isDataArrayTexture||A.isData3DTexture,Ui=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){let pe=Rt.get(A),Xe=Rt.get(Y),En=Rt.get(pe.__renderTarget),Ee=Rt.get(Xe.__renderTarget);ct.bindFramebuffer(X.READ_FRAMEBUFFER,En.__webglFramebuffer),ct.bindFramebuffer(X.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Oe=0;Oe<Nt;Oe++)ai&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Rt.get(A).__webglTexture,et,he+Oe),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Rt.get(Y).__webglTexture,At,Ie+Oe)),X.blitFramebuffer(zt,te,zt+Bt,te+Tt,Ot,ue,Ot+Bt,ue+Tt,X.DEPTH_BUFFER_BIT,X.NEAREST);ct.bindFramebuffer(X.READ_FRAMEBUFFER,null),ct.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(et!==0||A.isRenderTargetTexture||Rt.has(A)){let pe=Rt.get(A),Xe=Rt.get(Y);ct.bindFramebuffer(X.READ_FRAMEBUFFER,N),ct.bindFramebuffer(X.DRAW_FRAMEBUFFER,Z);for(let En=0;En<Nt;En++)ai?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,pe.__webglTexture,et,he+En):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,pe.__webglTexture,et),Ui?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Xe.__webglTexture,At,Ie+En):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Xe.__webglTexture,At),et!==0?X.blitFramebuffer(zt,te,zt+Bt,te+Tt,Ot,ue,Ot+Bt,ue+Tt,X.COLOR_BUFFER_BIT,X.NEAREST):Ui?X.copyTexSubImage3D(Vt,At,Ot,ue,Ie+En,zt,te,Bt,Tt):X.copyTexSubImage2D(Vt,At,Ot,ue,zt,te,Bt,Tt);ct.bindFramebuffer(X.READ_FRAMEBUFFER,null),ct.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Ui?A.isDataTexture||A.isData3DTexture?X.texSubImage3D(Vt,At,Ot,ue,Ie,Bt,Tt,Nt,ye,je,Me.data):Y.isCompressedArrayTexture?X.compressedTexSubImage3D(Vt,At,Ot,ue,Ie,Bt,Tt,Nt,ye,Me.data):X.texSubImage3D(Vt,At,Ot,ue,Ie,Bt,Tt,Nt,ye,je,Me):A.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,At,Ot,ue,Bt,Tt,ye,je,Me.data):A.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,At,Ot,ue,Me.width,Me.height,ye,Me.data):X.texSubImage2D(X.TEXTURE_2D,At,Ot,ue,Bt,Tt,ye,je,Me);ct.pixelStorei(X.UNPACK_ROW_LENGTH,nn),ct.pixelStorei(X.UNPACK_IMAGE_HEIGHT,xe),ct.pixelStorei(X.UNPACK_SKIP_PIXELS,Pi),ct.pixelStorei(X.UNPACK_SKIP_ROWS,Qe),ct.pixelStorei(X.UNPACK_SKIP_IMAGES,io),At===0&&Y.generateMipmaps===!0&&Y.mipmapsAutoUpdate===!0&&X.generateMipmap(Vt),ct.unbindTexture()},this.initRenderTarget=function(A){Rt.get(A).__webglFramebuffer===void 0&&st.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?st.setTextureCube(A,0):A.isData3DTexture?st.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?st.setTexture2DArray(A,0):st.setTexture2D(A,0),ct.unbindTexture()},this.resetState=function(){H=0,J=0,G=null,ct.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}};var Ps={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var xn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},H_=new Hi(-1,1,1,-1,0,1),jc=class extends se{constructor(){super(),this.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new kt([0,2,0,0,2,0],2))}},W_=new jc,Si=class{constructor(t){this._mesh=new qt(W_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,H_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var ul=class extends xn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof We?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ni.clone(t.uniforms),this.material=new We({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Si(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Wr=class extends xn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},dl=class extends xn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var fl=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Pt);this._width=n.width,this._height=n.height,e=new Ne(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qe}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ul(Ps),this.copyPass.material.blending=Qn,this.timer=new br}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Wr!==void 0&&(o instanceof Wr?n=!0:o instanceof dl&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Pt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var pl=class extends xn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new xt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Rd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Us=class i extends xn{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Pt(t.x,t.y):new Pt(256,256),this.clearColor=new xt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ne(r,o,{type:qe,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Ne(r,o,{type:qe,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Ne(r,o,{type:qe,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=Rd;this.highPassUniforms=ni.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new We({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Pt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ni.clone(Ps.uniforms),this.blendMaterial=new We({uniforms:this.copyUniforms,vertexShader:Ps.vertexShader,fragmentShader:Ps.fragmentShader,premultipliedAlpha:!0,blending:Kn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new xt,this._oldClearAlpha=1,this._basic=new le,this._fsQuad=new Si(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Pt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);let s=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new We({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new Pt(.5,.5)},direction:{value:new Pt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}};Us.BlurDirectionX=new Pt(1,0);Us.BlurDirectionY=new Pt(0,1);var Zr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var ml=class extends xn{constructor(){super(),this.isOutputPass=!0,this.uniforms=ni.clone(Zr.uniforms),this.material=new Ss({name:Zr.name,uniforms:this.uniforms,vertexShader:Zr.vertexShader,fragmentShader:Zr.fragmentShader}),this._fsQuad=new Si(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ae.getTransfer(this._outputColorSpace)===me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Tr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ar?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Rr?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Zi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ir?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Pr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Cr&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function gl(i,t,{fog:e=[40,120],light:n="fixed",ambient:s=.6,glow:r=null}={}){let o=new ll({antialias:!0});o.setPixelRatio(Math.min(globalThis.devicePixelRatio||1,2)),o.setClearColor(new xt(t.bg)),i.appendChild(o.domElement),r&&(o.toneMapping=Zi);let a=new ar;e&&(a.fog=new or(new xt(t.bg),e[0],e[1]));let l=new sn(50,1,.1,400);a.add(new Sr(16777215,s));let c=new vr(16777215,2.2);n==="camera"?(c.position.set(-.5,.9,.45),l.add(c),l.add(c.target),c.target.position.set(0,0,-1),a.add(l)):(c.position.set(20,30,25),a.add(c));function h(){let S=i.clientWidth||300,P=i.clientHeight||300;o.setSize(S,P),d&&(d.setPixelRatio(o.getPixelRatio()),d.setSize(S,P)),l.aspect=S/P,l.updateProjectionMatrix()}let d=null;r&&(d=new fl(o),d.addPass(new pl(a,l)),d.addPass(new Us(new Pt(256,256),r.strength??.8,r.radius??.6,r.threshold??.55)),d.addPass(new ml)),h();let u=new V,f=new V,m=new vn,M=new V,_=new Ht,g=new V,y=1,b="",p=()=>{let S=0;return a.traverse(P=>{(P.isMesh||P.isLine||P.isPoints)&&!P.userData.backdrop&&(S+=1+(P.isInstancedMesh?P.count:0)+(P.geometry&&P.geometry.attributes.position?P.geometry.attributes.position.count:0))}),S},v=S=>{S.sort((w,U)=>w-U);let P=S.length;return(S[Math.floor(P*.02)]+S[Math.min(P-1,Math.floor(P*.98))])/2};function E(S){a.updateMatrixWorld(!0);let P=[];a.traverse(B=>{if(!(!(B.isMesh||B.isLine||B.isPoints)||B.userData.backdrop)){if(B.isInstancedMesh)for(let N=0;N<B.count;N++)B.getMatrixAt(N,_),P.push(M.setFromMatrixPosition(_).applyMatrix4(B.matrixWorld).clone());else if(m.makeEmpty().expandByObject(B),!m.isEmpty())for(let N=0;N<8;N++)P.push(g.set(N&1?m.max.x:m.min.x,N&2?m.max.y:m.min.y,N&4?m.max.z:m.min.z).clone())}}),b=p();let w=P.filter(B=>Number.isFinite(B.x+B.y+B.z));if(!w.length){u.set(0,0,0),y=1;return}u.set(v(w.map(B=>B.x)),v(w.map(B=>B.y)),v(w.map(B=>B.z)));let U=w.map(B=>B.distanceTo(u)).sort((B,N)=>B-N),F=U[Math.min(U.length-1,Math.floor(U.length*.98))]*1.05;if(!(F>0)){y=1;return}y=Math.max(.3,Math.min(30,2.4*F/S))}let x=null;return{renderer:o,scene:a,camera:l,resize:h,canvas:o.domElement,fit:E,changed:()=>p()!==b,centre:u,orbit(S,P,w,U){let F=y/Math.min(1,l.aspect*1.15),B=w*F,N=U?(f.set(u.x+U.x*B,u.y,u.z+U.z*B),f):u;e&&(a.fog.near=e[0]*F,a.fog.far=e[1]*F),l.position.set(N.x+Math.sin(S)*Math.cos(P)*B,N.y+Math.sin(P)*B,N.z+Math.cos(S)*Math.cos(P)*B),l.lookAt(N),x&&x.position.copy(l.position),l.updateMatrixWorld()},sky({top:S,haze:P,stars:w=0,starColor:U="#ffffff"}){x&&(a.remove(x),x.traverse(I=>{I.geometry&&(I.geometry.dispose(),I.material.dispose())}));let F=300,B=new de(F,24,16),N=B.getAttribute("position"),Z=[],H=new xt(P),J=new xt(S),G=new xt;for(let I=0;I<N.count;I++){let W=Math.max(0,Math.min(1,N.getY(I)/F/.5));G.copy(H).lerp(J,W*W*(3-2*W)),Z.push(G.r,G.g,G.b)}if(B.setAttribute("color",new kt(Z,3)),x=new qt(B,new le({vertexColors:!0,side:De,fog:!1,depthTest:!1,depthWrite:!1})),x.renderOrder=-10,x.frustumCulled=!1,x.userData.backdrop=!0,w>0){let I=[];for(let D=0;D<w;D++){let O=D*2654435761%6283/1e3,Q=.12+D*40503%1e3/1e3*.85,k=Math.sqrt(1-Q*Q);I.push(Math.cos(O)*k*F*.98,Q*F*.98,Math.sin(O)*k*F*.98)}let W=new Bi(new se().setAttribute("position",new kt(I,3)),new gi({color:U,size:1.6,sizeAttenuation:!1,fog:!1,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.8}));W.renderOrder=-9,W.frustumCulled=!1,W.userData.backdrop=!0,x.add(W)}a.add(x),x.position.copy(l.position),o.setClearColor(H),e&&a.fog.color.copy(H)},render(){d?d.render():o.render(a,l)},snapshot(){return this.render(),o.domElement.toDataURL("image/png")},dispose(){a.traverse(S=>{S.geometry&&S.geometry.dispose(),S.material&&S.material.dispose(),S.isInstancedMesh&&S.dispose()}),d&&d.dispose(),o.dispose(),o.domElement.remove()}}}function Cd(i,{yaw:t=.6,pitch:e=.3,dist:n=48,min:s=15,max:r=110,minPitch:o=.3,maxPitch:a=1.4,pan:l=!1,onChange:c,onClick:h,onHover:d}){let u=i.canvas,f={yaw:t,pitch:e,dist:n,x:0,z:0},m=new Map,M=e,_=.75,g=!1,y=null,b=0;u.style.touchAction="none";let p=w=>Math.max(s,Math.min(r,w)),v=w=>Math.max(o,Math.min(a,w)),E=w=>Math.max(-.7,Math.min(.7,w)),x=(w,U)=>{let F=2*Math.tan(25*Math.PI/180)/(u.clientHeight||300);f.x=E(f.x-(Math.cos(f.yaw)*w+Math.sin(f.yaw)*U)*F),f.z=E(f.z+(Math.sin(f.yaw)*w-Math.cos(f.yaw)*U)*F)},S=()=>{let[w,U]=[...m.values()];return Math.hypot(w.x-U.x,w.y-U.y)},P={pointerdown(w){m.set(w.pointerId,{x:w.clientX,y:w.clientY});try{u.setPointerCapture(w.pointerId)}catch{}m.size===1?(g=!1,y={x:w.clientX,y:w.clientY}):(g=!0,b=S())},pointermove(w){let U=m.get(w.pointerId);if(!U){w.pointerType==="mouse"&&d&&d(w.clientX,w.clientY);return}let F=w.clientX-U.x,B=w.clientY-U.y;if(U.x=w.clientX,U.y=w.clientY,m.size===2){let N=S();b>0&&N>0&&(f.dist=p(f.dist*b/N),c()),b=N;return}!g&&Math.abs(w.clientX-y.x)+Math.abs(w.clientY-y.y)>4&&(g=!0),g&&(l?x(F,B):(f.yaw-=F*.008,f.pitch=v(f.pitch+B*.008)),c())},pointerup(w){m.delete(w.pointerId)&&!g&&!m.size&&h&&h(w.clientX,w.clientY)},pointercancel(w){m.delete(w.pointerId)},wheel(w){w.preventDefault(),f.dist=p(f.dist*(1+Math.sign(w.deltaY)*.08)),c()}};for(let[w,U]of Object.entries(P))u.addEventListener(w,U,{passive:w!=="wheel"});return{get yaw(){return f.yaw},get pitch(){return f.pitch},get dist(){return f.dist},get x(){return f.x},get z(){return f.z},set(w){Object.assign(f,w),f.dist=p(f.dist),f.pitch=v(f.pitch),f.x=E(f.x),f.z=E(f.z),c()},get tilted(){return f.pitch<M-.2},tilt(w=!(f.pitch<M-.2)){return f.pitch=v(w?_:M),c(),w},apply(){i.orbit(f.yaw,f.pitch,f.dist,f)},dispose(){for(let[w,U]of Object.entries(P))u.removeEventListener(w,U)}}}var xl=new V;function Ns(i,t){let e=i.camera,n=i.canvas.clientWidth,s=i.canvas.clientHeight;xl.set(t[0],t[1],t[2]).applyMatrix4(e.matrixWorldInverse);let r=-xl.z;if(r<=e.near)return null;let o=s/(2*Math.tan(e.fov*Math.PI/360));return{x:n/2+xl.x*o/r,y:s/2-xl.y*o/r,depth:r,px:o/r}}function Id(i,t,e,n,s=8){let r=null,o=1/0,a=null,l=1/0;for(let c of t){let h=Ns(i,c.at);if(!h)continue;let d=Math.hypot(h.x-e,h.y-n),u=c.r*h.px;d<=u?h.depth<o&&(o=h.depth,r=c.key):d-u<=s&&d-u<l&&(l=d-u,a=c.key)}return r||a}var Yr=(i,t)=>(Object.assign(i.style,t),i);function Pd(i,t){getComputedStyle(i).position==="static"&&(i.style.position="relative");let e=`0 0 3px ${t.bg}, 0 0 3px ${t.bg}, 0 1px 2px ${t.bg}`,n=`color-mix(in srgb, ${t.bg} 72%, transparent)`,s=(w,U,F)=>{let B=document.createElement(w);return Yr(B,U),(F||r).appendChild(B),B},r=Yr(document.createElement("div"),{position:"absolute",inset:"0",pointerEvents:"none",overflow:"hidden",font:"13px system-ui, sans-serif",color:t.fg,userSelect:"none"});r.className="vgv-frame",i.appendChild(r);let o=s("div",{position:"absolute",left:"12px",top:"10px",right:"12px",color:t.muted,textShadow:e});o.className="vgv-stat";let a=s("div",{position:"absolute",left:"12px",top:"34px",right:"12px",display:"flex",flexWrap:"wrap",gap:"2px 12px",fontSize:"11px",color:t.muted,textShadow:e});a.className="vgv-legend";let l=s("div",{position:"absolute",left:"10px",right:"10px",bottom:"112px",maxHeight:"55%",overflowY:"auto",display:"none",flexDirection:"column",gap:"8px",padding:"10px 12px",borderRadius:"10px",background:t.bg,border:`1px solid ${t.muted}`,pointerEvents:"auto",userSelect:"text"});l.className="vgv-insights";let c=s("div",{position:"absolute",top:"34px",left:"0",right:"0",display:"none",justifyContent:"center"}),h=s("div",{position:"absolute",inset:"0"});h.className="vgv-labels";let d=s("div",{position:"absolute",inset:"0",pointerEvents:"none"});d.className="vgv-rings";let u=s("div",{position:"absolute",left:"0",right:"0",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",padding:"0 12px"});u.className="vgv-controls";let f=s("div",{position:"absolute",display:"none",maxWidth:"260px",padding:"4px 8px",borderRadius:"6px",background:t.bg,border:`1px solid ${t.muted}`,color:t.fg,fontSize:"12px"});f.className="vgv-tip",r.appendChild(l);let m=40,M=24;function _(w,{label:U,title:F,run:B,off:N},Z){let H=s("button",Object.assign({pointerEvents:N?"none":"auto",cursor:"pointer",minHeight:m+"px",height:"auto",minWidth:m+"px",width:"auto",padding:"6px 14px",margin:"0",borderRadius:"8px",border:`1px solid ${t.muted}`,background:t.bg,color:t.fg,font:"600 13px system-ui, sans-serif",boxShadow:"none",opacity:N?"0.35":"1",lineHeight:"1.2"},Z||{}),w);return H.type="button",H.textContent=U,H.disabled=!!N,F&&(H.title=F,H.setAttribute("aria-label",F)),H.addEventListener("click",J=>{J.stopPropagation(),B()}),H}let g=w=>{let U=w.canvas.getBoundingClientRect(),F=r.getBoundingClientRect();return{x:U.left-F.left,y:U.top-F.top}},y=[],b=null,p=!1,v={},E=null,x=[],S=()=>{let w=a.querySelector(".vgv-mark");if(w&&w.remove(),!E)return;let U=s("span",{display:"inline-flex",alignItems:"center",gap:"5px"},a);U.className="vgv-mark",s("i",{width:"9px",height:"9px",borderRadius:"50%",border:`2px solid ${t.warn}`,boxSizing:"border-box"},U),U.append(E)},P=()=>{if(l.style.display=b&&p?"flex":"none",l.replaceChildren(),!(!b||!p)){if(b.plain){let w=s("div",{color:t.fg,lineHeight:"1.35",fontWeight:"600"},l);w.textContent=b.plain}b.about&&(s("div",{color:t.fg,lineHeight:"1.35"},l).textContent=b.about);for(let w of b.insights||[]){let U=s("div",{display:"flex",gap:"8px",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"},l);s("div",{color:t.muted,flex:"1 1 160px",lineHeight:"1.35"},U).textContent=w.text;let F=[...w.run?[{label:w.label||"Show",title:w.title||w.label||"Show",run:w.run}]:[],...w.extra||[]];for(let B of F)_(U,B,{minHeight:m+"px",padding:"4px 10px",fontWeight:"500"})}}};return{stat(w){o.textContent=w||""},explain(w){b=w||null,a.replaceChildren();for(let U of b&&b.legend||[]){let F=s("span",{display:"inline-flex",alignItems:"center",gap:"5px"},a);s("i",{width:"9px",height:"9px",borderRadius:"50%",background:U.color,display:"inline-block",flex:"none"},F),s("span",{},F).textContent=U.text}b||(p=!1),S(),P(),this.controls(v)},card(w){p=!!w&&!!b,P(),this.controls(v)},mark(w){E=w||null,S()},rings(w,U){for(;x.length<w.length;){let B=s("div",{position:"absolute",left:"0",top:"0",borderRadius:"50%",boxSizing:"border-box",willChange:"transform"},d);x.push(B)}let F=g(U);x.forEach((B,N)=>{let Z=w[N],H=Z&&Ns(U,Z.at);if(!H){B.style.display="none";return}H.x+=F.x,H.y+=F.y;let J=Math.max(4,Math.min(24,Z.r*H.px))+4,G=2*J+(Z.n>1?8:0);Yr(B,{display:"",width:G+"px",height:G+"px",border:`2px solid ${t.warn}`,boxShadow:Z.n>1?`inset 0 0 0 2px transparent, inset 0 0 0 3.5px ${t.warn}`:"none",transform:`translate(${Math.round(H.x-G/2)}px, ${Math.round(H.y-G/2)}px)`})})},controls(w={}){v=w;let{at:U="bottom",lines:F=[],buttons:B=[]}=w,N=b&&U==="bottom"?[...B,{label:p?"Close":"Insights",title:p?"Close the insights":"How the notes relate to this view and how to improve them",run:()=>{p=!p,P(),this.controls(v)}}]:B;if(u.replaceChildren(),Yr(u,U==="centre"?{top:"50%",bottom:"auto",transform:"translateY(-50%)"}:{top:"auto",bottom:"18px",transform:"none"}),F.forEach((Z,H)=>{s("div",{textAlign:"center",textShadow:e,color:H||U!=="centre"?t.muted:t.fg,fontWeight:H||U!=="centre"?"400":"600",fontSize:H||U!=="centre"?"13px":"14px"},u).textContent=Z}),N.length){let Z=s("div",{display:"flex",gap:"8px",alignItems:"center",justifyContent:"center",maxWidth:"100%"},u);N.forEach(H=>_(Z,H,H.wide?{maxWidth:"70vw",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}:null))}},chip(w,U){c.replaceChildren(),c.style.display=w?"flex":"none",w&&_(c,{label:`${w}  \u2715`,title:`${w}. Clear`,run:U},{borderRadius:"18px",fontWeight:"400"})},labels(w){h.replaceChildren(),y=w.map(U=>{let F={position:"absolute",left:"0",top:"0",whiteSpace:"nowrap",color:U.color||t.fg,textShadow:e,font:`${U.strong?"700 15px":"12px"} system-ui, sans-serif`,willChange:"transform",background:n,borderRadius:"5px",padding:"1px 5px"},B=U.run?_(h,{label:U.text,title:U.title,run:U.run},Object.assign(F,{minHeight:M+"px",minWidth:M+"px",padding:"3px 5px",border:"none",background:n})):s("div",F,h);return U.run||(B.textContent=U.text),{l:U,n:B,w:B.offsetWidth,h:B.offsetHeight}})},tip(w,U,F){f.style.display=w?"block":"none",w&&(f.textContent=w,Yr(f,{left:Math.max(4,Math.min(r.clientWidth-264,U+14))+"px",top:Math.max(4,F+16)+"px"}))},place(w){let U=r.clientWidth,F=r.clientHeight,B=[],N=g(w);for(let{l:Z,n:H,w:J,h:G}of y){let I=Ns(w,Z.at);I&&(I.x+=N.x,I.y+=N.y);let W=!!I&&I.x>-J&&I.x<U+J&&I.y>-G&&I.y<F+G,D=0,O=0;W&&(D=Math.max(6,Math.min(U-J-6,Z.side==="right"?I.x+(Z.dx||0):I.x-J/2)),O=Math.max(34+(a.offsetHeight?a.offsetHeight+6:0),Math.min(F-110,I.y+(Z.dy||0)-G/2)),W=!B.some(Q=>D<Q[0]+Q[2]&&D+J>Q[0]&&O<Q[1]+Q[3]&&O+G>Q[1])),H.style.display=W?"":"none",W&&(H.style.transform=`translate(${Math.round(D)}px, ${Math.round(O)}px)`,B.push([D,O,J,G]))}},dispose(){r.remove()}}}function Ud(i,t,e){let n=gl(i,e.theme,t.stage),s=Pd(i,e.theme),r=0,o=!1,a=null,l=new Map,c=!1,h=0,d=!!e.motion&&!(globalThis.matchMedia&&globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches);n.canvas.addEventListener("pointerenter",()=>{c=!0}),n.canvas.addEventListener("pointerleave",()=>{c=!1});let u=()=>s.rings(l.size?y.targets().filter(p=>p.key.kind==="note"&&l.has(p.key.id)).map(p=>({at:p.at,r:p.r,n:l.get(p.key.id)})):[],n),f=()=>{n.changed()&&b(),g.apply(),y.frame&&y.frame(),s.place(n),u()},m=()=>{if(r=0,!o){if(d){let p=performance.now(),v=Math.min(.1,(p-h)/1e3);h=p,y.tick&&y.tick(p/1e3,v),t.drift&&!c&&g.set({yaw:g.yaw+v*t.drift})}f(),n.render(),d&&M()}},M=()=>{!r&&!o&&(r=requestAnimationFrame(m))},_=(p,v)=>{let E=n.canvas.getBoundingClientRect();return g.apply(),Id(n,y.targets(),p-E.left,v-E.top)},g=Cd(n,{...t.home,onChange:M,onClick(p,v){let E=_(p,v);E&&(y.click(E),M())},onHover(p,v){let E=_(p,v),x=n.canvas.getBoundingClientRect();n.canvas.style.cursor=E?"pointer":"",s.tip(E&&E.tip?E.tip:null,p-x.left,v-x.top),(E&&E.kind+E.id)!==(a&&a.kind+a.id)&&(a=E,y.hover&&(y.hover(E),M()))}}),y=t.build({stage:n,frame:s,orbit:g,invalidate:M,...e}),b=()=>n.fit(t.home&&t.home.dist||48);return b(),M(),{view:t.id,resize(){n.resize(),M()},keyAt:_,noteAt(p,v){let E=_(p,v);return E&&E.kind==="note"?E.id:null},pageAt(p){g.apply();let v=Ns(n,p),E=n.canvas.getBoundingClientRect();return v&&{x:v.x+E.left,y:v.y+E.top}},mark(p,v){l=p instanceof Map?p:new Map(Object.entries(p||{})),s.mark(l.size?v||"needs attention":null),M()},update(p){y.update(p||{}),b(),M()},stat:()=>y.stat(),today:()=>y.today?y.today():null,turn(p){return p&&g.set(p),{yaw:g.yaw,pitch:g.pitch,dist:g.dist}},snapshot(){return f(),n.snapshot()},api:y.api||{},dispose(){o=!0,cancelAnimationFrame(r),g.dispose(),y.dispose&&y.dispose(),s.dispose(),n.dispose()}}}var Z_=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],mt=(i,t)=>`${i} ${t}${i===1?"":"s"}`,jt=(i,t)=>i.length>t?i.slice(0,t-1)+"\u2026":i,bi=i=>{let[,t,e]=i.split("-");return`${Z_[+t-1]} ${+e}`},_l=(i,t)=>Math.round(Math.abs(Date.parse(t)-Date.parse(i))/864e5);function Y_(i,t=18){let e=i.length,n=Math.PI*(3-Math.sqrt(5));return i.map((s,r)=>{let o=e>1?1-r/(e-1)*2:0,a=Math.sqrt(1-o*o),l=r*n;return{x:Math.cos(l)*a*t,y:o*t,z:Math.sin(l)*a*t,size:.5+Math.sqrt((s.inlinks||0)+(s.outlinks||0))*.35}})}var Nd={id:"bodies",name:"Notes",hint:"Every note as a sphere",home:{yaw:.6,pitch:.3,dist:48,min:15,max:110},build({stage:i,frame:t,data:e,onOpen:n}){let s=e.nodes,r=Y_(s),o=new fe(new de(1,20,14),new Te({roughness:.5}),Math.max(s.length,1));o.count=s.length;let a=new Ht,l=new xt;r.forEach((d,u)=>{a.makeScale(d.size,d.size,d.size).setPosition(d.x,d.y,d.z),o.setMatrixAt(u,a),o.setColorAt(u,l.setHSL((s[u].cluster||0)*.137%1,.6,.55))}),i.scene.add(o);let c=r.map((d,u)=>({at:[d.x,d.y,d.z],r:d.size,key:{kind:"note",id:s[u].id,tip:s[u].name}})),h=()=>mt(s.length,"note");return t.stat(h()),{targets:()=>c,click:d=>n(d.id),update(){},stat:h}}};var Fd={source:"PDB 5F9R (Jiang et al., Science 351:867, 2016) and 1BNA (Drew et al., PNAS 78:2179, 1981); public domain",q:.55914,lo:[-59.037,-52.177,-45.243],radius:1.8,protein:8622,rna:[[1,23],[2,18],[3,14],[4,16],[5,14],[6,14],[7,15],[8,15],[9,15],[10,15],[11,15],[12,16],[13,15],[14,15],[15,13],[16,16],[17,17],[18,13],[19,15],[20,14],[21,14],[22,14],[23,14],[24,10],[25,14],[26,14],[27,21],[28,22],[29,17],[30,15],[31,15],[32,17],[33,16],[34,18],[35,15],[36,16],[37,19],[38,15],[39,13],[40,17],[41,15],[42,19],[43,20],[44,16],[45,17],[46,17],[47,20],[48,20],[49,18],[50,16],[51,15],[52,17],[53,14],[54,17],[55,18],[56,16],[57,16],[58,15],[59,18],[60,16],[61,17],[62,15],[63,15],[64,17],[65,16],[66,17],[67,16],[68,17],[69,16],[70,16],[71,15],[72,16],[73,16],[74,17],[75,20],[76,16],[77,20],[78,14],[79,15],[80,16],[81,17],[82,18],[83,19],[84,19],[85,19],[86,15],[87,14],[88,16],[89,14],[90,18],[91,19],[92,20],[93,14],[94,15],[95,18],[96,15],[97,17],[98,19],[99,22],[100,20],[101,16],[102,17],[103,14],[104,15],[105,17],[106,19],[107,22],[108,19],[109,17],[110,16],[111,16],[112,15],[113,16],[114,15],[115,20],[116,20]],target:[[1,15],[2,15],[3,16],[4,16],[5,16],[6,15],[7,16],[8,15],[9,14],[10,18],[11,19],[12,16],[13,16],[14,18],[15,15],[16,15],[17,16],[18,14],[19,16],[20,15],[21,15],[22,13],[23,16],[24,17],[25,14],[26,16],[27,14],[28,18],[29,17],[30,17]],other:[[12,21],[13,19],[14,18],[15,16],[16,18],[17,19],[18,13],[19,22],[20,19],[21,14],[22,14],[23,15],[24,14],[25,16],[26,15],[27,15],[28,16],[29,16],[30,22]],spacer:20,pam:[[10,21],[9,22],[8,23]],flank:[[7,24],[6,25],[5,26],[4,27],[3,28],[2,29],[1,30]],step:{turn:.62351,rise:3.2376},pair:[[9.699,0,-2.305,0,0],[10.839,.901,-2.582,0,0],[9.939,-1.059,-1.289,0,0],[8.473,.907,-1.868,0,0],[8,1.916,-2.762,0,0],[6.881,2.551,-2.001,0,0],[5.884,1.565,-1.789,0,0],[7.28,2.993,-.605,0,0],[7.569,4.393,-.583,0,0],[6.113,2.528,.278,0,0],[5.076,2.087,-.754,0,0],[4.225,.946,-.343,0,1],[2.882,1.115,-.303,0,1],[2.389,2.221,-.546,0,1],[2.101,.031,-.017,0,1],[2.619,-1.208,.254,0,1],[1.832,-2.138,.454,0,1],[4.007,-1.353,.26,0,1],[4.641,-2.674,.601,0,1],[4.803,-.254,-.061,0,1],[-9.607,1.703,2.313,1,0],[-10.67,2.703,2.57,1,0],[-9.986,.564,1.436,1,0],[-8.324,2.485,1.789,1,0],[-7.756,3.509,2.615,1,0],[-6.674,4.18,1.825,1,0],[-5.519,3.332,1.755,1,0],[-7.034,4.586,.4,1,0],[-6.674,5.949,.158,1,0],[-6.253,3.555,-.414,1,0],[-5.004,3.39,.428,1,0],[-4.379,2.059,.236,1,1],[-4.984,.831,.172,1,1],[-4.103,-.178,.07,1,1],[-2.905,.441,.079,1,1],[-1.572,-.063,.016,1,1],[-1.289,-1.392,-.053,1,1],[-.579,.825,.041,1,1],[-.854,2.124,.134,1,1],[-2.04,2.718,.212,1,1],[-3.03,1.798,.18,1,1]],tails:{near:{o:[46.898,-16.831,-6.652],x:[.205,-.031,.978],y:[-.292,-.956,.03],z:[.934,-.292,-.205],phase:1.8705},far:{o:[-33.927,-16.831,-6.652],x:[-.732,-.357,.58],y:[-.659,.585,-.472],z:[-.17,-.728,-.664],phase:1.8705}},atoms:"TxsjTBsjTB4lTR8kTBklSh0nSSAoSyAqTB4rRx8pSyIrTSMtTCUuSycuTyMsUCUrUScsTyYoUSkqTygnUSsmTSUxTygzUSczSyc0SSYzTys0US03UC43Ui4yVC8zVC4uUy47VS87VTE8VzQ/VTRBVjU7VTU4VTc3WDQ3WTVAWTZCXThCWjREWTdHXDRIWjpCWzxCXD5EWz1GWj5AWDw+Wz8+Vz48Xj9DX0BFYUJEYUJCYURGY0ZFZkdCY0hHZUZJYUhIZkNEaEBCaj9AakFFa0NGbEVFa0NJZj9BYT5AZjtCZDtEYzs9YTo8YjY6YTs6Xjo4YT46YDY+YDQ+XjI8XDM8XzE6Xyw4XTE2YDE1YjI1YS8zZDE0Yy8zXy0yYSsxYywwWyw4Wyo4WSk2Vyo2Wik6WSc1VyQ0WCI0ViUvWSkwVCM0UyE1UiAzUSIyUiE3UCI3VCI5TiI5UB0xThwyTR0zURsvVBswURstTRoxShkxSxg0SRg1SRgvRhgwRRgyRRguTRYzTRU1UBU4TxM0Txg3URo5VRk7UBk8TRk8TBs9TBc8Shs9SRc8SBk9Rho9VBk3Vxg2WBo1VxszVxY1Whs1XRoyXR41Xxw2Xx8zXBwtXx4tWh0rWB4tWR4vXxorYhsnYBomYxgrZRkqYx0nZB0kZh4jaB8lYh8jZx0haSAfZyAdahweayIfayQebSQdbyQdaiYgaCYhaCYkZiUgZSYlZCUhYyUkbCYabiYZcCgabyobbScWcigZdykXeCocdCcedS0Xdy4Wei4Wei4YdjAVdDETczMTdDARezAVfTEVfy8Ufi4Sgy0UhCsVhioVhS4ShjAUhjAWhzITgioXgygYgiUXgSUWgigbgCgbgyscgyQZgiEYgCAZfh8YhB8ZhyAZhyEXiB8afyEbfSEceiQafCEfeiEZdCMYeCAVeiETfCIUeyARfiISfSERdSAacx8edR4ecR4achwaciAfbx8jbiAjcyEjdiEjcyAmeCIkbx0kbhwpbBklax4oaB8sZx4qbCIqaCAuZCIvZSQuZh8xZhsxaR0yYiIvYCQvXiYyXiQuZig1YSU3YCc5YyM3YCU7ZCo3Ziw4ZS45aDQ5ajQ5ZzI9ZzY5aDg4aDo7Zzo2aDw1ajw0Zj40bzs9bjg+cDc/bDlAbUA8bUI7bUQ/a0M5aUM7aEY7aEE7ZkY9ZUI8ZUQ9cEg+bEk+cUo+dEk9dEc+dUo7bUpBbE5Aa0tFa0lGaE5AaFA/Z1JDalZCZ1hBbFdCblVCcVZCcVlCclVCaFlEZltFZ11DaV1CZVtHZ1xIZFlIZV9EZ2NEZ2VEZGJBZ2JGamVIa2dIZ2NLaGRNZ2NPZ2FPZ2RRbGNIbmRHb2ZFcGdFcGJHbmVDbmZBbmtBbWU/bWM/bWc9a2lDa21Fa29EZm1FZG1GZGxJYmhIY2pMbGxHbm1IcG5HcHBHbmxKbWxNamtMbmpPc25Ec3JCdGxCdmtEdmpGeGlHeWdFb3ZBa3I9aXE8Z3A9aGw9ZW0/bXRDbXZFb3lGa3ZHbHRJaXVHcXZGc3ZGdXpFdXRHdXhAdXxAdHc+dnU9dXM7c3I8c3A7dHA5cW87cXtAcH1AcYFCbXxAbHw+anw9aHo+Z3g9Z3g7Znc+cX5Ecn9GdIBFdYNFc35IcX9Lc39NdX1Ndn1Pd39QeHxQdn9FeIBEeIJCeYRCen5De31FfX5He3tGfX1Je3lIfXtKfnpMd4FAd4M+doU/doc+dYI8c4E8doA6dIVAcodBdItDcIdCboZBbIRCaoNAaIFCZ4E+dYhEeYxFeIdIeohJfYdJfYVLf4RKgYVJgIJMeolCfIpBfI5AfYg/foo9gIs+gow9hI0+d5I/dY49dY06d4w6c405dpBCdpJEeJVEdZFGc5BGcY9Jco1JdY5MdIpMepJEfZNEfpdCf5FEf5BHgZNEf5JJfJRAfJU9e5c9e5k8e5M7fpE7d5k/eZ0/dZlAc5c8cZY/cpY7cJQ+cJQ8b5M6fp9De5tGfJ1Ifp5Iep9IgJxAgaA+gpo/hZc/hZc9hpZBfp49fZ87fKI8faM6e546ep83d583dp04d6A1e6I+e6Q/fag/eaRBd6NBeaZCdaNDgaZAhac+g6RCgqVFgKZFg6RGf6ZHgqRJgKVJg6U6h6g5gqQ4g6Q2g6k5hKw4h645gq03f604f6o5fq45ha08hq4+i64/ha5Ag7A/hLI/hbNAgrQ+iao+iqY/jaVBjKREjKdFjKo7jqo5j6w6ka05jao3jq47j7A7kbA+krE+jbI8jLM6irU7i7c7ibk8kK4/ka5Bk6xBlqxBkaxGjq9Ek6pAlKg/kqY9laZBl6RBl6M/mKRDlac7lKY5lKM5k6I3lqc3mac3maU5mqg2lp09mJ85mqA6lJ8+k5pAkqBCkZ9Ekp5Ijp1Hj51IkJw+jpo+j5g9j5Y9jJs9ipxBiZ49iZ5Ch58/h59BkZk7k5c6lJY7lJM7lJg4kpk2kZs2kpk0kJw0kJszlZc9lZRAlpJBmJdAmpg/nJpBmptCm55Ak5VBkpNCkI9CkJVDkJZGkZhGjZdGkYw8jpA7jI87ipA9ipI+iI89lI49lo08l4w/mYs/l447mZA8m5E6m5A4m5M7loxBl4xDmYlFlY1Fk4tFlohClYRBlYFClIBEln9AlH5Fln1BlXxDmoU/n4dAnIY7moU5mIU6m4c3ooQ/o4c+ooc8pII/poJAo4A/pYg/poo+p4k8p4s6qItAqY0/q45BrJBArI1CqIc7qYY5qIc1qoQ5q4M3rIA3rH85rH81pYY4o4Y2oYk2oIk1oYQ2o4I1pYI0ooA2oYw5o482oY07n482n5E0opU0nZIzn5Q4oJY5oZY7opQ7npg5n5s5n5w7oJw4oJ47oJ45opc9o5c/n5VBo5lApppAqJlBqpk/p5dCo5RCopJEn5FHpJBEppFFqJBGq5FHq5FJqpBLrZJJnpdInphGophKpJdNppZKppZOqJZMmZZImZhJmJlHmJRKmpNLnJRLmZpLmJxLmJ1Nl5tPlp9NlpxRm55Kn6FGnqJLm6RNnKFPmaVPm6FRmaNRn55HoZ1Fo51GpZxFpJ9Hpp9Ip55KpZ1Lp6JJpaNLpqJNo6RKqZ5Lp5xRq5tNrJpLrJlPrplLqZ9QqaFTpqFVqqNTqqRQqqVVo6NSoKBUoaRQo6ZQo6dRo6dNop5SoJxSoZtVn5tWoZpQo5xVpJtYopxbp5tYp5taqJpWop9ZoaFan6BbnqBdoaNZnZ9Zm55ZmZxdmp5XlZ5Yl5pXk51ZlZlYk5pYkZlZnJhcnZlenJhgnpdbnJNZnpZWm5NWnZRVnptfn5xhnJxkoZ1hpJxipJxkop1mpZplnJ9imqBjl59lmqNimKRkmKdjlqhllqplmJ1hlphflJ1fkaBhlKFekaNhlKNekqdgl5VjlpJgmJVllpdnlpllkJVgkJdgj5JjjpRkkZFljpRfjJZdiplfi5RbipZaiZNdi5hYiJtliJVlhJNjiJFjg5Fiho9ig45hjZxli6BkkJxlkptpkZdpkphriaBfiKJfjZ5djKBbjaJbjZ9YiJ5ghZ5ghaBihKJihJxhhJpfgppegZhdgJZef5dgf5Rdhp9khaFmhaVmh6BohqJrh6Fth6NviKJxiKRliaZkh6pjjKZjjahijapkjqxkj65mhahfgqpfhaZch6VZiKlbgKdifqtkf6VkfKZlfqNigqtng61mga9ng6pqgqhrgKdqhKdsha1mhq9lg7Bhia9kirFjhbNjg7VhhbZghbhfgrZig7hkgLVkibZeibVbiLNbjLVfjLZii7dijbRjirZajrRWirdWirdTirlRirhPirpNi7FXjK9Wja9Ui7BSjK1Yjq1Tj6xRi6pRkatQkqpOkalNk6xNjKtNiqpMiaZMiqtJiKtIhqxJiKxFjaRLjaNOi6FOkKRLkaRIk6RIlaZJl6ZJmKVHmKhKjaRQjKNSiaFTjqRUkKRUkaVWkaJUiaVRhqVRg6FRhadQhqlSgqdRhaxShqJOhaBMhJxOh6BKhJ1IiJxJhJtHiJpIhZdGiJtQhplTi5tRj5tQjJlOhp1UhJ1WgZpVhJ9XgZ1Tf51Sf5pRfZlRfp9QfqFRfaNPfKFTgJpPgZdOgJNPg5dMgpZSgpRUf5FVhJRVg5JZhpFXg5BbhY9afJVWeZNVe5hXfJlZe5tafZ1beZRQeJBPeZVOeJhPeJRMeJlNfI5Pe4pQf45OgItNgotMg4lLhYlKeY5YfYtWf4pVf4dUgItUgYdTgopTgohSdo1VdY9WdI5ZdI9ac49Uco1Tco1RcI5PbopPbY5Ocotbb4pYbIhbaotca4VdaYdgbYZhaohjbIdjaIlaZopaZIlbYolbZYpXZ4xWaYtVZo5Vao1UZ5BUao9TY4dfX4hhZIVgZoNfZ4JhZIFeYophYYxiYI5hYZBgYo1kZItlYY9mZYxnXY5hXJBfXJJhXJJjWY9fWY1dV41cVY5eVoxaXJRfXJdgX5hgYJdfX5liYppmYJpnYpxiYJ5iYJ5kX59gZJlmZZlpZ5tqaZtqZpdqZZVqYpVqZZRnZp1qZ59rZ55vZqJraKRraaRtaKVpa55ubJ1wa6Fzbp5wb55tbJ9saZ5zZ591aZ93a6B3ZZ11aJ15aZ17bZx8aJx9a5p5bZh5cJZ7b5l4cZh3bJd9bZZ/a5WAaZaAbpiBa5OBaZGCaJOEZpOEao+DaI2EbI6BapSGaZWIZ5eHZZeJa5eJZ5mGZpuGY5qFYZqGZ52EY5iDYZiCXpaEYpZ/ZJd8Ypp9YJOHX5SJXZSKYpGIYJaKX5iMW5mMYZqMY5mOYJyOZZqPXZqJV5qIW5yFWZ6EWp+CXJ+BWKGCWpeGWJWGVZSIWZOFWJKDWZCCVpGEWJSKV5ONVpWOVJWPWZOOWJKRW5GOVpeNVZmOUZqNVpyNVZ6NV6CMWKCLVqKNUpmKUJiJT5aKTJaKUZiGUpaGUpqFUJSKT5KLTJKOUJCLT5SPTpWRTJeRSpaTUJaTTJiQSpqPSJmORpqOS5yOTZ6PTqCOT6CMTaKPSJeNRpaLQ5WNR5SKRZKJQ5SHRpCHRZKRSJKURY+QRJOURJSXQ5KYRJKbQ5aYQpCXQo6YRIyZRIubQIyWPouWPI2WPI+VOo2YRoyYSIuYSoyXS4uWSIiYSYeZS4iaSYWaTY+XT42YUI2aTpGYTJGaSpCaUY2WU4uXVYyWVo2UU4mWUYeWVYeXUIWVV42YW4qYWpCZWJKaVpGbWJSYXY2WX4yWYoqYYY2UYI2aYY2cZI2cZYydYYudYougZY6aZ46ZaYyYa4yYZ4uXaYmVaoqTaIuRZ4eVaIWTZoaXbImTbYqQbYeOcImRcoqPcYyOdImOa4qNaomKbIeHaIuKbYuIb4uGcYmHc4qHcI2GcYeHcoWHcYKHcoCHdIWJb4OIbYGIa3+Fa4GKa4OCbYOAbIN+aYWCZ4WDZYOCZ4aFb4OBcYN/coGAdIF+c4WAdYZ+cn+Bc32BcXt9cnuDdXp+dXl8dHd8dXV8eHl7cnd8cHV8bnV7bXd6cHR+cXF/cXCBcG99bHN7anN6aXZ9aXB7ZnB6Z3Z5ZXh6Y3h+ZHh4Y3R8YnOCYHF9X3B+ZXJ/Z3KCZ3WDZ3WFaXGBZ3eCZ3mDZXqGaHuBY3mDYHmEX3mIX3iCXHiDW3qDWneBYXaGYXSIYXaMYnKIZXiNZHqNY3uPaHiMaXaLaHSKa3aLY3uLYn2LX3+OYX+JY4GIY4KLZoCIXHuOW3qSWnmMW3eMWXqKWXWOX3iSYHmWYXaSYX6VX3+ZYoCUZICTZn6VZ3+WZnyUXX+WWH2XWYKXWoSYWoSaXYWXWX2aWHubVXubVX2cWXqdWnyeW32cVHqbUXqbUHuYTnuYUnuXUnqSVHmSU36TUn+RUICQToCST4GOUHmRUHeQUnqNTnaPU3aMUneIUniGVXSJUHaITnaHTHmHS3mGTHSHSnSFSnWESXKFTXqJTHyKS4CIS4KHTYOGToSESYSHSYaKSIiKSYSMT4OIUYSIU4KHVIOGUoWLUoCIVH6HVX2DUX2BUn9/U399Tn2BUoR/VYR/VoR9UoaBT4eATYZ/T4mBWYOBXIB/WoODWYCFWoWFWoCHWX19V3t+V4F4WYN2VIN4VIR2VYZ2VIJ0WoR5XIV5XoR4YIV3XYd7W4h8XoF5YIB4YH92YX11YX56YX99YX1/ZIB8Xn91Xn5yXXxyXXtwXHt0Wnl0V3tyWnh3XHd7XnZ3Vnh0VHhzUXV1U3ZxVXZvUXZvUnl2UHl4TXl3TXl1UXt6U3x4U3x2THl5SXl5SHt7SXp9SHd5Rnd4RXl4RXV3Rnx7Q319QX5+RYB8Qnt8QHp8P3l+PXl/P3h6QXiAQHiCQHqGQnWDQXWFQn6EQICGRX+DR32DSX6DR3uEPYGCO4CBOYGBPoN/QIWAQYZ+QIWCQ4d+QoeCQ4iAO36COXyBNX1/N3yENnqENXqGNXmCOXx9N317N3h7OX15NoB3OX90NHt5Mnl4NHd3NHV2MHl3NXh1N3dzOXd0Onl1NnhxNnZvNXRvNXJvM3RxO3ZzPXZzPXlwPnRyQXNyQnR0QnJxQHlzQXtyRHxyRX10QH5yRntxSHtxSX1wSX1uSXhxS35xTYBwT39wUH5xTIJxSoNxSoZySYNvUYBuU4NrVH1sVn1tVXlqWXlsVoNtWYZoWYZuW4dyV4lwWYJqW4FoWYFlWoJjXH9oWn1pV4BmVYBjVYRkU39kVINgVIVfUYZfUIhfVYZdVIRbUoJcVYRZT4RgTYVgS4dkS4NgS4FiTIJeToZkTodnTIppUYdoUIdsUopqUIlvU4xtUotvUoxxTotlSY5nTo9kUJBlUZBnUpFjR4xjRYtlRItmRothR41fSY5fRo1dRodoRIhsR4VoR4NmSYJmRYNlR4prSIxtRI5vSo1tS49vSpFuSo5xQ5BrQY9rP5BsQ5JoRZRoR5NpRZVmQY1qP4tqPIttP4loPYdoPYZqPIdmP4lwPop0QYdxQod0Q4V1RYl0QI9zPpBzPZF1QpBzPZBxO5FwOZBxN5ByOpJuOY1xOItyOIt1Not2OYlxOox5OY96OZB8PIt6Po16PIl5P458OZF4OZN4PZR4O5d4PZl4Ppl6QJp7PJt3Opx4OZt6OZ13PZd8Ppd/QZZ/Q5h/PZaAQZR+RJN/RZN8RZJ7RJF/R5V8SJV5TJV4R5d4S5d7Tph7T5Z8Upd8Tpp9TJx8Spx7TZ59T5R9UJN+U5F9TpGATZGCSpKATI+DUJF6UZB4U5J3VJB1T5B3TY54S413Tox6Sot3TYp6S4p5U5R3VZV2WZV2VJh1VZt4UZt3WJV7XJJ7V5V+WY56W453XY13V4x6WpB2W5BzXZF0X5BzWZFyXpN1YJR1ZJN2YJd2Xpd4Xpd6XJh3YpB6Y455ZY55YI98YY5+YpB/X4x/Yo13Y4t1ZotzYYp0YItyZI5zZpByaJBzapByZZJxaJB1apF3a453bo54apJ5aox3a4p4bYd2aYl5aod7aId3aIV8bIlyb4lxcIdxa4pvcItyc4tydYx1c45ydI9vdpFwdY1uc4h1dId3eIh4c4V3dIR5eIZ1e4V0foh0e4Nzeolze4tye45ze5ByeolufY1ufYhteZB3e5F4fZB5eI95fJN3fpR4fpZ6fZh5f5V2fpZ8fpd+fJl+eph/gJl+gZqAgph9fJt9ep19e555e59+eaF+eqN9d6F/d556d593d6J3d6N1dJ52dJ90cqB4eKN5eKZ4e6l4d6d7fKV4f6V4gKh0gKN4gKJ6g6R4gKN9fqVzfqZxe6VweqRxgKRwf6RtgKJwe6VteaVseKJpeKdrfp1rfqBoepxse5tufJhtfZdveJpvd5tteJ1se5drfJVqfpVqgJRre5Roe5JnepBpepFlf5dpg5hqgplmgJlkgplshJpuhpdwg5xvgpRxhZFxgJJxgJByhpBsipBthpBphI9ohIxpgotriZRti5VujpNxi5duiphrjZhviptripRyipN0i5B0jZB1iJN2io9zi4xyjYxyj4tziYtwh4pxholvhIdwg4ZsgYVvkZBtlZJtlo9ql5JsmJFrmpFqk5F1k493lY93kpR2kpZ0lJVykZd0kY53kox5lYl6j4t6jY17i4x8i4l8iY19k4p2lIh1mId2k4hyl4VwlINul4Nvmox0nYp3mo50nY90n45znZF1oJB0oJF1m4x7m4p8nYl9mY59mZB8l5J9lpF/l5R9mYZ8nIJ8l4R8lYZ+loeAk4Z9nIV5nYR3oIR4oYN5nYV1n4Rzn4Fzn4VxoId5o4d6pYV9o4p6oot4pYt7oYZ+oYWAo4GBnoWBnoaDn4SFnoiEoIF+oX5+pHx+n318n3t8n3l+nXp6pH98p397qX99qn59p4F5poF3p4J1poJyp4RxqIF+qoKBqX+Cq36DqYSCp3+Dp32EqXmFpHyFo36GoX2GpH2JqHqBqXiArXaBqXd9qnZ8pnZ9rXqAr3qAsHqCsnmDsH1/sH18sX97sX94tHx4sn11r3uEr3qHsXeIrnyIrnyLrH2Nqn2MrX6PrXSIrnGIqnSJqXeLp3aMpnSNpniMrXKFrXF/q2+CqW6Ep22Dqm2GsnN/snF9s3J7tHSAtXKCsnKDsm99s217sWx4tGt8smp+sWuAsm2Br2qBr256rW15rG93qm92qmx6rXR2rnZ3rXh2rnl0rntzq3x3rH90r3JzsHFxrnBwrnBtsnBxrG9xq21wqG5wp25uqmtxqGlwqGdxqWdzpmVxqHBxpXFxo3NupXB2onR0pHF4p3duqHlrqHlwpXtyp3h0pHt0pnl2pXp2qnRpqXJlrXRprnZqr3dor3dssHlosHltsXprqXBpqG5no25oqGxpqGlop2lmqWhppW5koWxjn2xiom9hpHJgpHNeo3JcpXVdompjoGhjoGdloGVmoWZhpGVioGhnoGhqnmlrnmltomhrpGZqo2NrpWFqpF9rnGpqmmtrm21tmm5vmWptmGhrl2hpl2ZsnW5tnnBunHJsnnRunXhqn3lvm3xvn31tmn5vnn9tmoJtoHVqoXVoo3RnnnJnnHFmmHJlmXRol3Volndll3Zrk3dqlXltkXhqk3pukXpsj3ttmnplmXpgm3xlm31om35kmH5onXhinnhgnHVdoHhgoXpgoHxfo3thm3FgmXFfmHNemG9flW9elG5hkW5glW5jk25lknJllW1nkG9njnBnj3Bri29ni21pjHNqjHRtjXJwinZtindviHlvh3ptiHtxinFuiW9wjG1wjGxyh21vhmtwhGpvg2ttg2hwjWxuj2tukmtxkGpsjmlqj2hokGpnj2ZnkW5vk29wk3JvlHZymXVylXdzmHdzkG13kW15jXF3jnV2inR2jnd2inZ1jHh1i3p1kGx2kGl3lGd5j2d1j2V2jmN0j2B1jmB3lGp2l2l2mmp5mGpznGhznmh0nmxzn2p0mW56mW9+mXF5lnJ5mnF3lnV5lG1/l22Dkmx/kWyBjmuBjWuEi2qEl2qAnGmEmGaBmGZ+l2h+m2uAnmyBnm6Cn2+Dn21+n2p9oW5+oGt6m2+Cm3GEm3GGnHKImXSBlnWBm3aCmW6Jm22Km22Ml22Jl2qIlGmIk2qJlGeHnWyJn2uKoW2Lo2yLoGmIoXGLoHKNnnKNonOJo3KHo3SEpXaGonOPoXSRn3eRnneSo3STonWVoHSWo3aXoHiPn3qOnXqNm3mOnHuLmnuKl36LmniJmXeKnHeIl3qMlXqOk3uMkXqLlXuQk36MkX+Lj36HkoKLj4OKkIaKkoeKjoeJk36Hk32EkHqClnyEmH6Dmn2Dl4CCknmGkHeGjniGjHeFkXWIkXOHlHOGkXGJjXqHi3uHiHuEin2JiH2Ki3yMi32Ei36BiXx+jX+BjYKCj4SBjoaCkIiAjHh/iHZ9jXZ/jnR9kHN9jHJ+hnWBhHaBgnaAhXSEhnKEiHGFhHCEgnuAgnx8gn2Cgn2Egn+FgYGEgoODhIODgYSChXp6hX13g3l4gnZ5gHZ3f3d1f3R4h356ioB6i4J6hoJ6hoR5hoR3hoZ6jH55j312j3x7knt7k3t5k319kYB3koF0kYBwlH90ln92loB4mH11joFzjIFxjoRvioFxhIBygn5vgX1zjYJsjYNqioVrjoFoiYhnhYdmiopmjYtnjYtpj4tqi4xqiIVkh4Bih4RgiIZfhYhehYhchIdag4VbhIhYhH9lgX5khH9ogoBph39pgHxlfntlenxlfnhlf3hogXhpfXhqgndrfXdsgHdtfH1oen5pd4Fpe35sfYBsfoBueYNldoRje4RkfYVlfYZngIVkdoFkdIBicoFjcIFic4JmcYNnb4dncYNqcoFqc4dlc4plcYlhdYpkd4pmdY1jeYtlcI9ha41jbI5lb41mb5VdbZBaapNZZpFaZ5NZa5ZgbpdhbplhaZZiZ5VhZpNgaJFgZJJgb5ZicZdkdJpicpZmcpNlcZZoc5Jnc5ZgdZdedZtcdZVcd5Ndd5FdeZNfeZBeepFfcZtbcZ9cbptbbZ1abp1Xap1ZcZ1fcZ9gdKBgdKJgdp9geKBgeqJdep5heZ1je5tkfZtie5pmd6FZd6VYdp9YdqBVd55Tc6FUdKNac6ZadKhcdKpbcKVbbqdbbKdcbqlaa6lbbKpadaddd6hfealeeaxed6dhfKlbfaxZfqZagKdYgKNbeqpYeatWea9Wd6pVd6hTdadSeahRdq5Zd7Fad7Rac7BbcrJccLFebrBebLFdbLNdaq9cebBbe7JcfbJaf7NbfbBefbNUfrNSgK9Vga5Xg7BXhLFWhbBZebhQd7NSdrRVc7NVcrJTcrRXe7hUfLpUfrtTfr1TfLtXerpYeLpXerpaf7lSgbpQgblOgbtMg7hRhbtVg7dWhbtXg7dYhLlZgLZLfLZMg7NLhLJNhbNJhrJOh7NKirJNfbdIerhIebZHd7VHerpGfblEfrhGerRFebJEdq9Ge7FDfbBEf7FFfa1Ega9Gf6xFga1GeK5Kda5Ne61LfLBOf61NcrNLcLNMdbZNc7NJcbJHbq9HcrNEcLRDcLVBbrNDcaxHcapJcqhJc6pFc6xDcqtBda1DcatLcapNb6ZOcaxQb61Qba1Sa65TbLBVbrBWarFVbalNa6hNaqRLaKlMaKtOZaxOZaxMZKxQbKZJbaRHbqBIbqVFbaZDbqZBbac/a6U+cZ5NdKJMdaRKdqFNd6VLbqBQa5xQbKJRbqNTbKVVaqRWbadVa59Nap1La5tKaplKaZ5JbZtKb5lJb5VLcptGc5hIdJxFb5hNcJdPbZRRcZhScZZUdJhVb5ZVaZZRZpNQZ5hRaZpSZZhTaJVNZ5NLaZBLaJRIZJNGZ5FFYpJEZpBEY5BDZZBLZY1LYI1KZIxOY4pOYolRYoZRYYVTYIZVYINSY4tIYYpHYIdJYohFZIpDYIdDZYhBW4hJWYlJWotIXItHWoNKWX5GWn9MWIBNWIFPVn5MVYFQVH5NUYBRUoJHUoVIUoVKUolHU4dLU4lKU4tLWIRBWYI9WYdBWYg+V4lCW4JBXYBAX4M+XoI5Yn46YXw7X309Yog4Yoo6YYg8ZIs7YYM0YYIyXoQwYYAxYYMtYIQrX4IqYIIoYYYqYIcoYYonY4kmZYslZI0lZ4okXoArXX4qX3wpX3snYXwqY3oqY3ksZXcsZXspZHwlZn8nYXgtYXcwX3YwXXcwYngyYnc0YHMxXnIxXXI0W3E1Xm8xYW8yYmwyYWszYmg0Y2czYWc2XnQ4W3c6YHQ5YXA6Y3I3Ym46ZG83ZG04XXg2XHs3WHk1XXw1WHw3VX03VX83UoA2VHs5U388Vnw9VH8+V3o9WXk/WXtBVoE3VoM4VoQzWIU4V4c4Wok3Woc0U4Y1UoczU4s1UIczT4k1T4UzVIsxVY0xU48wUo8uV40vWYwwW4wuXYsvX4wwX48vYYswU5EyUZMxUpUvUZUtUZUzVZUvVpYtV5QsV5IsWJguV5ovWZUrW5MpXpQqX5QoWpMnWZEmWo4nXI4nWY0oXpUsYJcsYZMvYJkuXpotXZwuW54uX50wZJUuZZczaJUvaZQsapMxY5M2Z5I4YpE3YJA1YZE5X442Zpc9ZJc9Z5s5apk3Z5dBZJpDaZdDa5ZBZJ1AYp0+YJ4/Zp8/aaBCap4/a6BDbJ9Ba509bp5BbZw9b50/Ypw8X5w7XJk6YJw4Yps1X5k9XZY+WZU+X5VAXpE/XJNDXY9AW5BDW45CWphAU5g+V5pCWJlFWJdGVpZGWZZHVZo6Vpk4VJg3Vp06VJ48Vp4+WJ0+VJ9AWJg4V5Q2VpM1W5Y1W5QzXJg1V5M4U5I8WJA7V408Wo86UpA5T486T4w7To84S484S5A6So43UI8+UI1ATopBUI9CUpBCU5JEVJFGVZJITI1ASYxASYhASYo8SYg7SoQ7SYg4T4U8UYY8UYg+S39DTYVFSYJBR4FAR30/Q4E+QYM9QYU9P4I8SX89Sn07THo8S345TYA5TndBU3pDUHxGVHhFUXtIU3lISnhESXdCSHRCSHlGSnpIR3dHSXpKSHhARnY+SHU9R3M8RXg9Q3k+Qns8Qnw6QHw9SnU9THM7THE8TW87TnQ6UHU8UnY8VHU9VXM7VHM5V3I8TG9ASmtBTW9DT3FCUXFFU25ESG9BRWw+Q29CQ3FARHFEQ2pBQmk/P2s+QmZARGVARWRCRWQ+P2g8PGQ9PWg4Pmo3Pmw4P2o1P244QGw0QG41OGI5NGU8M2Q9M2I+OGA8OF46Nl05Nlw3OVw8NF46Ml44MF80L146MFw8MF0+MFo8MmQ2MGU3LWY2LGM2LGc4OGQyOGcyOmczOGMwNmEwNGIxN2gwOGowN24yNmsuN2orOWsqNmgrNW02N204MWs1MG40MHA1MG4yN285OW87OG4+Nmw9OXE8O3I6O3U6PXY4Png4OG5AOG1CN29EOHFEOWtDOWpFOmlBNW9FN25JMnBIMHFGLnBHMHNGNXBOOHVNOHZLNnVJOXBQOG9SNW9VOm5TNnJTNXRVMXZUNnZWOHVYOnNXOHVaO3NZOnNbMnRRMHRQLnRRLnJSMHNOLnNMLHVRKnVSKXNRJ3JSKXdTKnlVKXtVKnhXKHFNKG1OKHJLJnNKJXZLJnRHLGxRK2pRL21OMGpNMGpLMWlPMWdKMmdOMmZMM2RLLG1TK21VK29XLnBYLHNaMHJbJ21UJGxUI2hTI25SInBUInBWIXJSIXJXIXRUIXRWIHZXJmlRJmdQJWNSKGVNJ2RLKmNOJ2JKKmFNKGBLKWRUJ2FXK2RVLGJXLGZXJGVZIWFZI2daIWZcJWhcIWRWH2NVHl9UHmRTImBTI11SIlpUJV1RJ1pRJFtYIltaIllbJlxaIF1ZHl1bHFxZGlxaHV9cG2BdG15fHGJfHFtXG1pWGldWGVZVG1pTGVpSHVhSG1ZYG1NZG1NbG1FcHVJYHVJVG1FUHFFRGlBQG1VdGFRgFlVgG1dhGlZjHVhgFFBjFVBlFU5fFU5dFEtcFUtZFElYElFjEFFmD09mDU9lD1RmD05oDUxpDk5tDkpqDUhrD0lnCk5sCU9uCE1wCEtvBlBtB1FrBVJvCE1yB0t0BUpzBUh0B0x2BEtyAUpxAkluAEhtA0ptBElqBEdqBkZrBktpBEZoBENnBkNlB0FlAkJmB0VkCURiCkdiCUljCERgDEdiDUldEEhhEEZgDkVhDE5eDlJfCU9eD1FcEFNbDVVcEVNYEVdcEFldEFpZElteEVxgEVpiE15hDVtbC11ZCV1aCV9cDGBWDWJVDGRXDmVXCmRYCmZZC2ZcDGhdB2daC2RdDWNfD2RfEGVgDGFfCmBhCl1hClxgCV1kE2RcFGZdFWdeFGNaFGFZFGBXFF1WFF1UEmhcEmpcE21fEWxaEGpfEGtiEmtkEmxlDmljE2ljFWhlF2pkGGtmFmZkFWRjGGVnE2NlF2tiGnBkGW1eG29eGmtdFnJjFnRnE3NiFHRgFHZfE3JeFXBnFXBqGHBrGHFtFG5rFG1tEnBvEmtuHG5rH29rHGtsGmpuGmhvGmxwIG5mInFkH2xkIGpkIGhiIWlmIGZiIWZmIWVkH3JmH3VlIHZoIHhoHXZkIHVqIHZsI3duHnVuHHRtHXdwI3NtJXJuJnFqJXBwI3ByI3JzIm5yKXJtK3FrK29qK25oLXFtLnRuLnZsL3htLnlvK3lvL3twKm1sKmtrKGptKGpvLGlrJmhsJWVuJWNsImhtIGdvImttJWRwJWFxIWFxJmFzJV50JWJ1I11wIVxwHVxyIVlvH1hvIlltIFx0H1x3Hl93HF54IVx5H2B2HWN2GWN0H2V1IGZ3IWh2Iml0Imp4GWFwGmBuGF5sGV9qGVxsGF5zFlx0FV52E112F1p1Fl93FmB5FWN5E2R6GGB7FmR3FWd3E2d0E2l0F2h2GGp4Fmp6Gmt4E2VzEWVxDWRxE2RvEWRtEGZrEWFsD2VpD2FqDmNpDWJnDl9yDGB0CmBzD11xDVpuEVxtDVlsEVtrD1pqDWB2DGF4CmN4CWR5DWF6C2V2C2d2CWh0B2l0DWl2CGZwBmRwBGRwCWZuCmhtB2ZsCWttBWBwAl5yB15vCF5sBl9qBV1pBmFqBV13A1x4A2F3A2J6B1l2Clp5CFh0B1hyBFhyCFdwA1hvB1duBVdtB1d6CFZ8DFZ9B1R+C1R6DVN5DlN3DFN1DlB6DlB9EFN2EVNzElFzE1B0ElZzElZwEVd1ElFwFE9vFU9tE1BrEkxvF1BtGFFrGU9qG05rGlNsGVVuG1RpF1ZtGk1mHE5kG01iGEtlGUlkHU9kH1BiIVFiI1FhIlJlJFNlJFNoIlNpJFZlJldmJFdiJlNpJ1JrKFRsKVZrKVBrKFRvKVZwJ1pxK1ZxLFhzLVpyLVd1KVpuKVxtKVxqKlppK15uKV5pK19lLWBmJ2BmJGBmI2FoI19kIWBpIV5lIF9nK11jLl5iL2JhLlxgLllhL1ljLlhfLGFfLGNeKmRiKmNcLGdfK2lhK2tfK2tdLWljLGtkKm1gK3JgJ3BfJm5eI29eJm5bLXFgL3NiL3ZgL3diL3ZeL3hdLXxeMXZaMHpZKXpeKX1hJ3heJHlfI3tdJHlhIXxeInpiIHxgHn1hKntlLH1lLH5mK3lnKHVlJ3dpJnRmLnxkMH5jL4JjMn1iM3tjM3tlNHphLoBgLIJfKoNhKoVhK4FdLYBbLH9ZL4NbKYJiJ4NkKIRmJ4VnJYFkKoNnK4RoLYdoLYhpLYNqLYdlLolkLI1lMIhiModjMYthNIZhK4piKYxhJo5jKIxfKIleKo1dJohfJYtmIotmIYxnJY1oIopjH4piH4hhH4hfH4xhHY1fG45gHIteHYdiHYRhG4NjGoZfGIZdGYZaGIZZFoldG4haHIhYHYVVHopYHoRZIIJYHn5WIYFaGn5ZGX9WGH1VGH9bGX5dGXtdGX9fGYFVGIFTG4BRGIRTFoVRFoNPFodRGH9PGH1NG35KFnxMF3pLF3tIF31HGXlHGIFLGYNJHINJHYRHF4VJFYRJE4ZJFIhKEYZIH4RMI4NMH4VOHodPHIdOHohRIIBLIn5LJn5JIXxKIHtIH3lHH3dJIHhFJ4JGKYJGJIFDI4BBIX9DI38/JoRHJohKJYlIKIlLI4tIKINMKYFOK4BNLYBOJ4BPJYFRJH5RJoJTLX1KMX1JK3tIKnpJLXdKKnhNLoBIMIJHNINJL4RFMoVCModFMINLMoRNNoNPMIVPL4dOMYVRLYhQM4BONH5POH5OM3xQNHpQMXxSNn5LN31JO39KNn1HOH1FOHpFN31DOYFKOoNKPoNNOYZKOIZIO4hLPIJRP4BSOoJTOoRVOIZTOINXQ3xOPXpOPHlQP3hOQH5LQn5JRoBJQX9HQX1FP3xFQX9DRYNMRoRPRYJQRIZLRIZJQoVIRoZHQYVGRYZFQ4ZESIVQSIVSSYlVS4NTTIRVSoRXSIJXS4VZSolRS4tRR41QTIxPTY9PTZBNTZBRSY5UR5BURpFTRJJSR5FXSJNRR5RPRpNNRJRMSZZPR5FNRpBLQ49LQY9KR45KSo5JS4xJSotGQ45NQI1OPY9OQIxRQopRPotRQolTQJFPPpNQO5VNQJVRP5dSQJlTQJlWQppSP5RMPpVJO5RHQJZIQJdFP5VDQJNEP5ZCO5BHN49HPI1IP41HPoxEQYxDQYtAP4o/Q4tANpFMNZRMM5RNNpBON41RNYxNNpVKNZhKMphJMZlJNplJMpZHL5VGK5VIL5NELZNDMJFFLpRKLJNMLJRQLZBNLY9KK49JLo1KK41HLotJLIpFLZdOLphQK5pQK5tSMJpPKppPJ5tPJJpSJptNJZlMJ5hKI5hMJZZKI5ZKJpZVJJVXJZNSI5FOIZVQKJdWKZZYKplZK5pYKpRZKplbK5tdKptfLJ1hLJ9gLJ1jL51dMp1cNZpeM6BdNaBdNqBbNqBfMpxhM5piMpdiNJZiMZtlMJdhMJVgMpJeLZJeLJVhMpZcNJVaNpRbN5NaNJdYMpdXMZVVNJRUN5ZdOZVeOZJfO5FfOpdgOplfPZpgPpxgPZ5fN5JhN49iN4tgNY9jNZFlNpBnN45nN5JpOIpaNI5aMoxYNItWMopaOY5aPI5ZPYxbP4taPZBYPYxdP4tfQIdfPoxhPIhePIVePIZaOYRePoJbP4FZP39ZP35bQoJZP35XP3tXQHpVQXtUPHpWO3tbOHtYOXtdNnxaN3xcNnxeQXdWQ3ZVQnNUQHNWRXZWRHVYRnhWQnJSQXBRP3JPP25OPWpNP25KQnFLQnRKPXJHQHZIPXVGPndGOWlMOWdKO2dJOGZJOGRIN2NEOGFJOWFLPGFLPV9KPmBHP1xIMmhDMmpFMGRFMGJGLmFHMWBDMWpALmxBLWtDMGw8Lm5AK29BKW4/J25ALHJBKXNCKnZBKHdCKHlCKntCJnpDKm49KG07Jmo7KW05J2dAJWZAKmU+KmI+KWI7K2E/J2hCJmlEIWhDJ2pGKWlHJWtIKmpJI2xCIXA/IW9EHG9EHnNEIW0+IW47IGw5H204IWo5IGg4HWY6ImY3JGc3IGQ1JmQ2HGg3GWU2GmQ0GGk3FmQ3E2I0EmQ1FWA3FVw1EV42E2EyEWIwD2ExDWMxEWAuE2EsE2AqFWEoFWAmDl8yDF8zCmE2DFw0CVs1B1wzCFwxBVw0DWI5DmQ5DGY5EGE7EF88EGU4EGg4EWk6Ems6Emc8E2g+Fmc+FmU8EmdAF2g/GWVCG2tCG2s+HWVBHmNDHWJHIWFAIWFFIF9AHmZGHWdIG2dJGmdLHmtLH2pNHm5KF2dIFmVJFWRLFWhGFmtFFWxGF2tEF2NHFmBIFl5LGF9GFl5EFVxEFmBCE1xCFF9AE11AGGBRHWBNIWBMHlxMFmRQFGNQE2NSFmdQGGhRGGhUGmlVGmlYE2JOEGFOEGBKD2NODGJOD11MD1xKDVpLDFlKEVpKEFpGEldHDFtNCVpOCldPC1dRCVVOCVNPDFFRB1FODVJND1JNEVRNElVLEFBLElRPFFZPFlVOGFVQFFdSEVlSEldVF1VMG1hLGFNIF1FIFlBFFlJEFVJBFlBAFFRAH1VMIVROI1VPJVVOIlZRI1lIJFdEJlpJJ1tHJ11GKVpGKF5FKltEKl1DJVVIJlNGJFFFJFBDJ1FIKlJJK1NGLFBFIlFGH1BFHlJDHlFBHlBHHk5JG09MG0tKHlZCHlY9HllDHFpEG1hFHVxFIlZAI1U+I1M6JlY+J1g+KFQ8JlpAIk89IE49H00+I00+KEw8KE8/Kkw9Kk4/HlA7HE87G084G1E3GlE9Gk43GU41Fk81FlAzGEs0G0ozHEoyG0k1FU83E1A4ElQ3ElA6FFE8GFc1GFU0GFg6Flg8F1k+FFo7GFk1GlkyHloxGVwxGlwvGV4zHVo1IFo1IVk0I1kzIFo4Hlw5H185HVw7HmA6HF48HGA8IVY0I1QzI1UxJVQwIlI0IVYvIVYtJVgrH1csI1ouJFwtJ1wuKF0tI14uIV8tIV8rH2AuKloxLVkvKVk0KFs1LFg0Kl01KlcuK1UtLFcrLlYpKVMrK1kqLVspL1wqMF4pK10oMFssMlstNF8rM1kuNlsqOFwpOFonNlknOlwqOlomOlgkPVclP1glO1kiO1cgOFohPVQmP1MmQFIkQ1IlPlEoQE8oP1IiQVEgQlMfQlMdQlUgQ1cfRlceR1UfQ1ogR1gdSlgdS1gfTFkgS1UfTVUiTlMhTVEhTFQkSlclSFckS1gmUVMhUlEgUk8iUU8kVVIgVlMhVE0iVEskVkwmVUsoVUkjU0ghUUgiU0kfV04lWFAnV1IoVFIoW1EmXU8mXU0nXk8kX0smYE0lWFQoVlYoVVcsVVcmU1UqUVQrUVQwT1IqTVIsTFMuTE8sS1IvS1AuVFIuVVIwVlQzV1AwVU0wWFAyVU0tV1UwWFcwV1oxWFwxWlgvU1sxUVszUFwzUVsuUV0tUV8uUl0rUlk0UVk3U1w4UVY3UFQ2UVI3TlQ2UFo6UFw8Uls+Ulk+Tl09U11AVFxBV10/WVtCW1tCW1g/XVpEXFhFXlo+X1k8YVU7YVs7YF08X1w/YFY/YVRAYFI/YVA/YVRDXFA/XE07WVE/WVJCWE8/WlBEXFE6XFE4XU41XFM3YUs4YUk2ZE45Zkw4aE05a0s4bU05YEo6X0g7XUU4WUU0V0o3VUk1VEw6XEgxXUUvXkowXkouX00tYEktXkAxYkM1ZEU1ZEUyZUMxZEcxWz81Wj0yWj83WD03WUE4WUAyV0AvWD4sVkIvVUIsVEMxW0EtXEArXTwpXkEqYEEoYUMoY0MlZEUkXDcsXjcxYToxWDctVzcrVzUqVTkvUzcuVjgxVzkpVzknWTgmWDckVzwmVT0nVD0oVD8lWzgnXTYmXDIkXzcnYTUmZDYmZDgmZTQoWzMoWjEpWDAnWS4mWTArWzAtWjAwXS4tVzEmVS8hUzIlUTEjUTInVzIiWTIfWi8dWjQfWikfXSwjXikjXy0jUikhVSglVSYmVyQmWCIkVSceUycdUikcUCkaUiscUi4cTy4cTi8bUi4ZTC0fTSwjSiseRyseRiofRi0cQysfRC0dSi8iSi8lSCsmSDElSisqSCsrRi0rTCwsTS4sTC8pRyktRSkuRSswQy0wRScvSy0zRiw2QSw1Qik3STA1STM5SzM0TDMyTTU2TTUwTjI+UDI9TC8+Sy9BSi09TTQ/TjZDTDVETzg/TTpAUDg9TTw/UDZEUDlIUTpHUjVIUjVLVDNMVTJKVDNOTjxKTjxNTjtOSz1KSjxISz1FS0BFTz5NUD9QTj9STj9UUUFQTD9RSUBSST1TSDtSR0FQST1VSDtXRjtYRT1ZSjlYSjpbTT1ZSz5dRDlZQjpaQjpdQjheQDhZQDhXQjhVPjhWQzxeQzxhQDxiPzxgRD5hRz5hSEBjRkJjSkFjQDtkPj9mPzloQDppPzdnO0NqNz9oNz5qNj5mOz9rPEBuP0FtP0NuPD5vQEBsQ0FsREVrRD9qQUNoQUVnQUlnPkdqPklrP0ptQExuO0lsQUhuQ0hwRktwQ0ZxSEtsR01rSE9rSUlqSkdqS0ZsSkVoRU1qRE9pQlFrQVNqQk9nQVFmQ1FuQlJvQ1VwRVVxQlFyQldvQllwQ1h0QFtvRVtyR1t0Rlp5SV10RF13Q115QVt6QVp8QV96QmJ6Q2J9QWF/QFp4P1d4QVV5QFR7Pld2Q1V4RFN5RVR8RVJ9RlN3RlZ8R1d+RVWCR1l+Sll9SFqBS1x9Q1eAQVeCQFSEPlmBP1OAP1GBQVCCQE6EP09+PVB9PU96Pk16O095RVCFRU6HRVKGRVOJQ1KKQ1GMRlWJR1aHRlaLSlWIQVKJP1GKPk6NPFKJQE2JQEuJQkiNQUmHQUeHP0WIPUaIP0OHREyLRkuNRkuRSE2MQ0+SRFGTQ1KVRlKSR1STRFeRSlSSS1aTRliURVqUR16URFuWSFuRSl2QSmGOTFuPTl2OS1qNUFyMR16ORV+MRGGORGONRF6LRF2IR1yIQluHRGGQQ2KRRGaTQWGTR2OTSWWTSmmSS2SUSmiNSWeLSmaKTWiNT2iPT2aRUGqQUGeTUWqSR2mLRmiJRmqGRmyHQ2mKRGuLRmqNRmmER2qCRWmARWaASWqBSmx/S2uDRGp+Q2l8R2l7QWp7RmZ3SGd0RGR1QmR0QWZ1QmRyRmp2Rmx0SW11Sm1zRW50RW93Qm10SW13TG14TWt5T2t6S296TWd5UGR3S2V5S2J6TGF3TmJ7T2d1UGZyU2ZzVGVxT2dwTWZvTmRtUGNuTWRrVGd1Vmd1VmN3V2l3Wml3Wmh5W2p2WWR1WmF1WV94XGF0XV90YF9yYWFyYF1xXGJ5XWF7WmB/X2J8WWJ8V2N+VGB/VWV9VGZ/UWV/VWaCVWB7U156U1p9U114Ult3T1x3U1l2Tlp2UVd1T1h1TVZ0V1t8WFl9V1l/V1iBWll8W1l6XVl5WlZ5V1yAV1yDVVqGWF+EV1+GWF6IVWGHV1+KVWKJVWGNU1yDUFuDUFiDTleDTl2CTl+ETV+GUGGDTGGHT2OFTmOHTmWIUViBUVWAUVGCUlV+UVN8U1R6UVF9VVOFVFOHVVKJWFOFWVOCW1OCXFOAXFSDUlWIUVWKU1aOUFOLTlSNTlaOTVKNVViLVlmMWVmPWVaNXFOKWVKPYE+LY1OMZVKIZlWKYVCIYU2HY0mHYE2EXE2EXEuCZ0yMZ0qNaU2IaU2FaEuEak6EaEuBak6BaU2AaU1+aE6PZk6RZ02TaVKSalKNYk2TYlCUYk+XYkuUYEuWYEuYXkqVYlKTYlSVYFWUX1WSZFWVZVaSZ1iTZ1mVaFmRX1eVXVmUYFyTXFqWXl2PXV+PW1+QXlyMXlmJYVqMXmGPXWSPXWWNXmWLX2WRXmeSXGiRX2iUW2eNWmiLXGqKXGuJWGmLV2iNV2mJVWqOXmuMX22MYW2IYW2OY2uLZWqJZWaHZ2mKY2mFYWiEY2eCY2WBX2mDXWeEW2iDXmSDZGmAZWl+aGh/aWd+Zmt9Z2p6amiDa2WDbGSDa2mFamyFa2yDam2HaGGEaGF/ZmCEZ2GJY2CIZmGLYmGKZGGMY2GOal6Ba11/aFp/bVx/b12Ab2CAcVyBaFx7Z1p6aVh5all3ZVt4ZFl2ZF15alR5aVJ3ZlJ3a1N7bFB6bVB4a097alF1a0x2ak9xalFwalRxaVJualVvaVRtZ0l2a0d2ZUh2Y0l3ZUV3Y0p6aUdya0Zxa0pvakVvaEZubERtcEpwb0lsc0lwckdycEZycU1tcE5qckxpck1mcVBqb1Jsb1RtcVRub1ZrdEtqdUpodEhndUdld0lqeEprc0ZocURnb0RjcENpckFqc0Jscz9pdUFtdD5qdT9sbkdmbEdka0pka0tmakZkaEZmZUdlZ0NoaktjaU5jZU1iak9hZk5mZE9mY1FoZVFqY0xoYExoX0poYlNnYlVpX1VqX1ZrYldnX1dlXlVlXlllW1NqXlFuWlFpW05pWlJuWlJxWlByWk90V1NyV1ZwV1R0WVhxWU5wWktwXEtxXUlyWUpuVkpuVUxuVUhtXkxwYExxYU5zY05zYkxuZEtvZUpwZkxtXlF4YFR0YlVxYVdxY1huYlpuYlJ5ZFV8YlB9Y1F/YE59YVZ+YliAY1eCYlaEYFmAYFyCYl2AXl2CZleFaFmGaFuFaFWEaVSGalaCaFmIalqJbV2IalqMbVmHcFmGb1SGclmIcleKcVeCcVSBc1OBc1GAcVV+c1d+dVZ9c1l+dlKEdk6GeFOFeVWEfFWDfFKBflKAck6Ib0uIcFCKcVKLclOKb1ONcUyEcEuDcEaDcEyAdEmEdUeEd0eCeUiDd0aAeUZ+eEh9dkh8eUN9ekl7eUt6eUp3eEt2e016fkx5eUh3d0V0eENzfEZ0fEZxekZwfkZwdkV2dEN2cUV5dUB3dD52cT52dTx2cEJ3cEB8bD94aj96a0B1bUN9bUN/bT+Aa0SAakZ+a0V8cEGCcT+Dc0CEc0KGcDyFbzqGbTqKcDiGbzaEcDSEcDOGcTKCcDyJcD6Mbj+MbT+Ocj+MdT6Mdz+Md0GNeT6Ma0KKZ0GKbESIaUaIbkWJZDyJaDyFZTuEaT2DZzmMZjuPZjqQaTeNZj2OZj+QZECQYkGRaECRYUKNX0CLXkGKZEaMYkePYEmNXz6LXj2KWz2KWj2JXzqKWz2NWD2OVUCNWT2RWj+SXECQWkCUWESMVkWJWkaNWUiMWEqOWkqLV0yNWkyKWE2LV0+LWEOGVUKDW0KEXUaFX0OEX0aFYEGDY0WEY0CDZEKDVD6GUj+HUD+GVDuHUkGJUEKKT0SITUWIUEOMTkSOT0SQUUSRTUWSUUeFT0eBU0iEU0qGVkuFUkyFT0KBS0J/UECAUD5+Tj1+UUB8TEGDSUGESEOERUOESUCGST2HSDyHTD2HSUWER0iBRkqBSUmFSEZ/R0d9SUl8SEp6RUd8S0p9TEx9Tkx5TU1/TE+DS1B/Ukl6UUd5T0V5VEh8VUp9VUV+UkZ2UUV1UkJ1VEJ3UkVyUkNxVUZyUkB0Uz50Vz10UTxzUTxwTz5vTj9wUD5sVj9xWD9xXEBzWEBuWUJ0W0N1W0J4XUJ4WUZ2WUB4Wj96XTx7Vz57WD2AWDp+WDyCWDiAWDqCWzx3XTp2YTl3XDl0WTh0WTd2WDhyYj51ZT54YkB0YkBxYj5wY0FwY0B8ZT1/YUF9YUR9X0V+Y0V9Yjl9ZDh8ZTZ8YDh+Xjp+YDaAZjd4aTd5ajZ4Zjl1aDdzZjZyZDRzYjNxazh8bjV9bDp+ajOAai9/aDOCZzWDZjSFZDSEZjWHaTF8aTB6ay95ay13ZzB4bTF5bzB4cDJ3cjN2bzR4cDd3cDd0bjdzcThzczhvdTlwcTxwbz9wbTxwczZudTVtdTZqdDhqdDJscjJqdzZpeDdndjdjejdmfTdnfTZpfzdrfDRqdDVmczRkcDVicjFlcDBjcS9hby5kbjllcDtkcD1kbjpnbThpbDZobThrcDphcTxgcD5fcEBgcjtebj5ebD9ebUFcbkNda0FgbkNYbUZWaEhaZURXZERbZUBaZENeZT9cZEBeZklXZkxYY0xXYktVZ05WZ01UaU5YakxTYUxZX0xYXU1UXk5aX01dXk5fXUxhXE1jYE9VX1BSXk9PYVJSYFNPYlNNZFROZlRNaFVOZ1JLYU1RYUtPY0lPZUpPZ0dRaUlOXUlRW0dUWEZVVkdWWERTWUxRV01QVU1MVk9RVk9TWFFQWk1KWUtJWEtHXU5KWUdJVkdJVUZHWkRKWkVNXERKVUhLUkhLUElHUUlNUUdPUUdRUEVTUEhWUENXU0tIUk1GUktEUUtCVE9GU1FIVVNJVlNHVFRLVUlBWEhBWEc/WUdDWkY+UURCTUNAUUJFUURHU0FFTkZDS0dDSUg/SklETUk/TUo9TEg5T0w8T049TlA7T1A/TVI8TlI+T0Q6TEI3UUM7UUA5U0Q6SUE7RkE4SEE+RkY1RUc0REc5Q0c7QUU7QEU5QUM9SEY1SUYzSEQvTEczTEk0TUcwT0o0SkIySkAxRz4vSz4zTj0yTj0wTz8zQz8yQD8vQkA1Pz02PkE0Q0IvQkMtREMrQ0MpQkYuREcuR0EpRz8oRz8mSkIqS0QqTkQqT0QoUEMnUEAoUUMlRTspQjomRjkrSDksSjkpSTYoQTwpPj4nPkAoPTwrPzgsPTovPT4lPUAjOkIiP0AhQT8iP0IfOT4iNz4hNT4lNzwfMz8hLz0gMEIjMUMlM0QkMEQnNEYmMUYoM0coNEgpKzsiKT0hKj8gKjolKTsnKTsoJzshJTwgIkAgIzsfJD4kIz8lJEEmJEIoIj4nJkIlKEQmKUUqJ0YmLEAqLj8pLj0oKj8sMD8qMjsrNEArNDsoNTgoOTkpNTclMzgkNjUlNDchNzYrOjEtODUvNzcwNzgzNzozNzs2Nzk3Nz02OzMqPTEpPy4rPjEmPDIkPjIiQDEiPDIgQDIsQDUwRDMtRjIuRTIqQTIyQDM0RDI2PzE1QjY2Qjc8Rjs5RTo1RDQ+RjVASDVAQzA8RDBBRC48RTZCRjdERjVGRDVIRTlFQjlGRDtDSDRHSTNJSjRLTDVLSjFISS9HSy1GRy5JSTRNSjVPTTJPSDVRTjVRUTBTUjZSUjhRTjJVTjFXTixXTDJYSzBaSTFcSzRdTTNeTC5USyxTTipSTihTSixRRy1SRS1QRixUTytQUSpPVChRUitNVCpMUCxLUytTVStVVSdXVS1WVi1YUSdZUSRXUSNYTidZTilbUCpcTCpbUSVVUSNTVB9TUCNRTiBPUiBOTh5OUh5NUB1NVSNUWCJUWCFWWiBWWiRTWSZRXCdRXiZQXyZOXidMYSVOVx5dVyRcWSVdWidbXChcWypdUx1bUxpZUhlZUB1bTx9dUSBdTR9dVRpYVhhWWBhWWRdUVBlUUhlUURZUUBtUThZUThpUTRhUWhlYXxlVXRZYXh1TXx9TXiFSXB1RWxpQXBhQWRpPXBZPWBhOWRZOYSFWYyNUZCJSYyFYXyBbYh1aXh9cYRxcXx1dXRteYyVUZSdTZihVZilWYylSaShUbSpRbSdWbylXayZYay1TbC9Rby9OazFRaTJRaTVSajZQazhNZzdOcC9Scy9SdC1Rdi1QdDBUcy5WcS9XcTBZby9WcytQdipLcidPciZScyVNcSRScytLcytJcS1Iby1JcylHbyhIcSVGcC5GbC5Eay9CbzFDcTNFczNEcDRGaypDZipEaydDbSZCbihAbiRBcCc+byNAcCU+ciQ8aCtHZitIYi1IZyxLai9KZzFMazFLYzBEYC5DZTJDZjRFaDVEZTVHaDZGZzZHYy1BYitAYCpBXylAZCo+YCdEXCdFYSZHZCVGZSRHZCREZyNGZiNEXCxHWCxFXS5KXC1MXzBLWi1AVis/Wy4+WSY/WyQ/WSE9WSBBWR49WR5BVxs+VSVFUSZFViZIWCRIWSRLWCFHUi1EUy5GUTBHVS5HUCg+TCY+USg8SiFBUCBBTx5CUh8/SyRFRyRFTCVISiZJTSRJSSdDRyhCRiZARCZARyU+RiQ8QiE9RyM6SSI7SCU5RiE/RR5AQh9CQR5CRh1CQyJDQSNEPSNEQiVFQiRIQyZJQCRJPyRBPSU/OSI+PSY9PyU7Pik+PSQ5PB49ORw/Ph08OhxENhxFPBxGOCBFNSFFNSNENSVFNSFINh9JNB1KOB5KNBtMOBxLNhtMNxlOMCZBMCg/MiM+MyE+MyBBLyZDLSdDLilFLCtFKyZFKCZEJyhFJSlFJClCMClFMStHMyxGNC5HMSpJMixLLy1MMitONixCNzBBNitANCs+NS08NC47Nyw7MzBBMzJBNTZCMDNALzJCNDNFNTVGOTdHNTRJNTVLNTRNNDJNNTZPOTNFPDRFPTVDPzZDPTFFOzRBPDY+OjlAOzU8ODU8PDU6Pjk9Pjw9Ozw5QD08Oj48OD87Nj48NT8+Mzs7Mzo+NDk/Mjk5MDo/LjhBLDlAMTtDLz1DLj1FLz9BLD9FLUBCLEFEKkJELTZDKzZDLDdHKjNDKDdHKDhJKjdMJTlKJTlMJTxIJzRLKDJMKTNPKzJPKjFLJzRQJzVSJzJVJTdTIzVTITZVIzNSKjRVLDJXKjJZKzFbLjNXLzNVLjVYKTRaJzRcJjJcJTFeJjdcJTJaIzBaJC1aIytaIjBXJy1ZKCtZKShcKyxYLSpYLCdXLiVYKipgKCxiKSxkLSpgLi1gLilfMC1iJixhJC1jJCtlIiplIi1hJixmJippJStqJC1qKSppJCpsIytuJC1wIy9xIilwISdvJy1wKC9xJzNwKy5xKyxvLixuLy1vLyptKDFtKDNrKTVsKTdtJTRrLDVrLjdsLjtqMDVrLThoLDpmLjtlMDplKjxnLj1kMD9jMT5hMz5gMDxfMTtdNTheMTxbNjxeODtfOTdgOT1hODdkODNjNjdmNzloNjVoNDViMzNgNTBdMTRgNjRdNzRbOjNbOjFZODZaOzNdPTJePi5dPzNgOy9fOixgOSteOildOC1iOC1cNyxaOilXNi1YPCxYPixXQChWQC5XPylaQCdbPyVbPyNaQSdePihfPCVbOyNaOyJYOyBXOCRbOyRWOyNUPiFSOyVSOyRPPSdSOSJPQiJUQiBVRB5URCRVRiRURiVRRiJPQR9XQRxYQRhXQBxbPh1bPBxZPR5cPhlTQBhRPxdQPBpSQhpRRBlQRRdRRxZQRRtPRRdURxZVRhNVRBJURhdYSBJWRw9WRg5YRQ1YSg5WSw9YSw9URhBaRQ9cRBFeRRNeRw5eQhFeQRNfQBNiPxJjPxRbPRZfPBRaQhVjQhVmQRllRBVnRRNmRBZqPhdoPRpoPhtqPhpsOhloPh1qPh9sOx9tOyBvPyFsOh5sNx5tNRxwNR5rOBpuNxhvNxZuNxZsOBRvOBFuOhFsOxNrNhBtOg9qOw9oOg5mOA5mPg1oOw5kOg5iPA1gPg5fORBhOwtfPQpdPAtaOgxaPAddPgtZPgxXPgtVPwlVPw5WPAtTPAlRPwxPOgpPOQ1QOg1TQAhPQghOQgpLRAtLQwZNQApKQBBIPwpGQAhFPgxEQghEPQ5KPBBLOxFJOhNJPRJMPRFPOhRPOhJSOhBHNRFHOBBBOA1DNhNEMxREMRNDMhJBMxdEMRhELxhCMBhGLxJELhFDLBJBLBE/LBRBKxY/KxY7KhhALxY9MBY7MBQ4Mxc8NBY+Mxo9MRA7NA86NA44NRE6OBE6ORE8ORI+OBQ4Ow87PQ89QBI8Pw08PhI/PxVAQxZAPhZCPBdBPhVEQxNCRRBDRA5ERRRFSBRGShRESBZITBVGSxZIRxdKTBdJSBhLSxhLSA9DTA5FSQtBSglCSQdBTAhCSQxISwxKTQpKTgpLSQtMTQlITwdHUQhGUwdGUAlEUgpCUwxCVQ1BUQhAUQ5CUxJDVRNDTxJCThE/ThE9SxFAUxFFVRJHWRJHVBBKUhFLUBFKUhNNThJLUBROThNNWA9FWg5EXRBCWgtEWRFBWhI/XRZAWBM9VhM+WBE7WxdEXxhFWRhGWhlIVhhFXRRGYBRHZBVFXxFHYBFKXhBMXA5LWg5MWQ9OWQxLYRNCYxNAYxZAZhdAYhI+ZBA+Yw5AZQw/ZApBYho/YxtBZRxAXxs/Xx4/Xho9ZBxFaBxGYxtHYR1IYh9JXx1GahhEaxhBbRdBahVFbBRFaRlAaho9bBs9bB0+aBs8Zxk7ZBo5ZRw3cBw8cSA6cho6cRg7bhg7bx44ayE3bx80biEycCMxciMybyQvbiQ3bCU4byg3aig7aiQ7bCk1bCs0bC01ay41aysxbCkuaScwby42cjE1cC86by07cTE7bC48bzQ2cDU0cDg2bzYycDgxbzMwcjk2cj00dD0zdTw4dT45dz87d0E9dEE/cT81cEEzc0Iyc0M0bkIzdEIwdEYtd0ItdUIrdz8udkcxeUsyc0oydEk1cUo2cUg4cEw2eU8vd1EyeVAte1IteU8qe1I0elU0e1YyfVI2fU83ek04e1A7eVY1eFk1eFk5dlkzdFk1dlgxeFw3eF45e2E4e2A8fWI8f2E7gF86gWM6g2I4hl85hGU3gWU0gmg1f2YzgWo0f2gyhWI8h2E+hmFAhWJBiWI9iWQ9iGBCiGFEiWVDimBGil1GjF1Ii1pJjVlLhmhGiGlHiWtHhGhHgmdFf2hHf2lJfWdFiWdJi2hKjWlJjmhIjGZMimVNjmxJj21Ikm1LjHBHkXFHjHNHl25Gl2hIlWZJlmRIlWdMmW1KnG1GnW5Mm21NmmxMn3BHom1HonJFpHJHpXRGpHZFpXhFomxDo2pEpWlBpGpAomhEo2VFoWNFn2NGnWJFnmBEm2JGpmhCqGdAp2U+qGM+qmZBqmVDqmVFqmJDpWU+pGI9omM7oWU6omE/oV89omE5oWE3nmA4nGE2omA1oV02oVs0ol04m187l2E7nF09nVs8nFk7nVc6nVY9m2M7mWU8mWY4m2c9m2dAm2VBnGlBlmc6lGg4k2w7kmQ4kGg3kGM4lGw3lG83kG83lHA0knE6j3I7jHM5kHM9jnM+jnNBkHRCjXdDkXhDj3Y2kHY0knQ0j3k3jHo3ink4iHo4h3s1kHcykXcwlXYwkHgtkngrkXkpk3gnknollHowl3owmHozmnozl30wln4ulnwslYAul3k0mXY3mHQ3lng5lXs5lX04lH85kno9kX88kHs+kH4+m3Y3nXQ3nXQ7oHU2oXM2oXE1o3M3nHE5nG87nm88n24/m206nG04m283oG87o3E9pXE/pW46o3Y+oXhBpHc8m3VCmnVDm3g+nHo9nHo7nH4+nXw6nX47noE6mnBCmHBBl3JAl25BlW1Ak2tAk2tDkmo/kmZAlGY/jWo+jGtAi2s8i21Aim08im4+kWRAkmJBjmBBk2FDlF5FlV5BkV5AjVw+i1w/jltCkFpEjVw7i1w6ilo5i1g5jV03j1w4kFw6hlg5hlc2hVk1hFk6hFk8glc6h1U2hFQzg1I0iFIziFExi1M0g1Uxf1EvgFYuglItgk8shlAqgE8qgFAogVAmgFMoglEkgFQmgVMkgVUihkwriEwqhkomiUorikouikwmjkskik4ji04giFAjjEgijkgdjEQgjkMfkEIhjUAekUgfkkkdlEgclUYdlEwdkk4elUsglUgamUgXmEkVlkQXlEUWmEMWm0kYnEoWn0oXoEgXm00WoEwXo0wXpE4Yo1AYpEwVpU4aplAcqk4bpU8eo1Afpk0fqlIcrFIcrlAfrVAgrVQdrFYbrVkbrlkdrVoZsFAesU4gtE8gtU8esUwgtU8it1AiuFMhtlQhulMhu1Uhu1Yeu1gdvlYhu1Qdu1QauFQZuFQXvFIZu08atFQas1MWs1YatE8Zs04XsE0Xr00ZtUsXr00VrEkWrEgUq00Tq1ATqlARqlEVq0kYp0YYpkgZq0Uaq0IarEEYqkAWqj0XpkQXo0MapEEbo0IVpEMToUQboEQdnUQdnEUcoUUfpEUgoUgenEMfmkMfmUMimkEjmEEemT4flzwelzofmjkgmEQil0UllUYlk0cjmUYmmkglnEomnUkonUsllEYnkkoplEoqkUYqkEQqj0MsjkQokUwokU4oj08qjU4pklAmklInlFMoklQkkFAsjlEtjlYtiFUpilUmh1cojFYmiVkuhVwtiVwxil4wjFsxhFwwgl0wgWAtgF4yf1szfl8xflw1hGEvhWMvhmMshWUqhmUwh2cwiWgyiGg1h2EsiGEphmAnh2Alil8qjF8rjVsrkF0sgl4ngV4jgF0of1snfVooe1kneVgoeVgrd1cngWElgGIjgmMhgWIff2UkfWQlhGMihmQgiGIdiGUiimUghlwbiFshilgfhlcgilYehlUeiVQegVwcgV0agF0Yf1wef1ogfVohe1sgfFgjgmAagmEYg18UgmQZgmYXgmgYgWoWf2oVhmEXiGAVi18XimIUiGQTh2YTiGMQjFkXjlkYiFgXh1gVh1sVjVkUj1kTkVsUk1oVj1gRjVgQkFYQjFYOkF0UkV8Ukl8XlGAYkGEUj2ERjWARkGIQkF4ZkV4blF0djl0cjlsgjl8gjlsjjl8jjl0kkloblFgbl1kamFgck1YakFMaklQel1oYml0ZnF0ZmVwVmV4amWAcml8enGAfl2IcmV0fmlwhnVsjmFohnVofn1ken1cdoVYdnVUanlUXnVcXm1Mam1Idm1AdmlQfm08fmlMhmlAhmk8knlMWn1QTnlATolQTnVIQnFAOmk4Qm0wRnk8NmE8QlE0Qk04PlVAUk04Vl1EVlEsRkkkPkEoQj0kSkkcQj0wPjE0QiUsRi08OikkPiUcPiUURiEQRiEYMh0gLh0oLhUcJi0YSjEQUjEYWjUUYjkMTj0IRkUERjUARikcWhUgZiUsYjEwXiU0ai08WiEYchkUdhUcfhkgghkMdhkEbhEIfhz8cg0gfgkkhgUcjf0YjgEsggU0fgE0cgVAbf1EZgkglgUcpgkkrhEUoh0Img0Emf0cqfkgsf0cugEUue0gse0cpfUYpfkgwf0cze0Qyfkg1f0c3fkk5f0g7f0o9fUA0fD0ye0A1fEI6eUQ4fEM8eUU6ekY+fz4ugDwvgT8sgEIsfjoufzcvgTYtgTcrfTYvfTMvfTMyejIvgzUvhTQthTEuhTEwhzUthzcsiDcqhjktiDkohzsrhzsphjAtiSwsii0qhSsshSkthCcsgigrhCUtjSotjCgtiycrjisvjy4vjS8xkS8wjSYvjSQviyMwiSQwkCMwkiUxkSYzjyU0kigzjCEyih8ziCA0hyA2ix41jh00jhwyjxw2hiEyhCMzhSU0gyY2hyY1iCoziig3iyo4jio4jyw5kS03kSw1ki84hTA2hjA4gi01gCszfis0fCkzeikzhjI1hTY1hTYziTQ2izM3ijM6izE7jzM8jjA+hDg2hDw2hT03gTo3fjk2fDk5fTw6hD00hkAzg0M1hUExh0MwikEwh0QuhkM5hkY4hUg5h0M7iEY3iUk2i0g0i0Yzi0o4jEw3jEo0jkoykEkzkkkxjkwxkEg1kkc2kkY5k0Y6j0M7jUE6jkU9jkM/jkVBj0dBjkRDij0+jDs5jTw3jjk2jDw1hjs+hTg9hTc7gzw+hD4/gUA/fz8+gUI/hTc/hDQ/gjQ+gDU+hDNChjREhTNGhDVHgzVKgjI8gDI6fi85fy49fiw9fSs/fixBgCo9gCg5eyo/eilBeidCeiVAdypAdiw/dS5BdC9Bdi1EeiZEeCNFdiNGeyRIfCJJfSBIfSNLdh9Ddh1FdxxFdh5AdR5HdRxJcxtJcRxJdR5LeBtOdh5QcxhKcRdKcBhOchRKdBVJdRdJbRdMaxhOaxhSaRdNaBdKbRVQbRRTbhZWbxFScRZTchhUcRpVcRtXdBhTdhZSdxVUdRVQdxNPeBJRehBQbh1UbB5YbB5SayBSbh5PaxtWaRtYahpaahtcZxlXZhpVZBtVZhlTbBlabhlcbhtfcBdccRVgcxhechVidRhgdBdicB9dbiBebiFgcSBbdSBYdSBdaiFeaSJiaCFcZCFfZSRcYiNgYyZdYCZfaR5gaB1jah5naBpiZhphZRdhYxtibB1kbh1mcCBocRxlbyRlbidocCVjcCRhaSVoaShnailoaiVraSNsaiFraCNuaR9taCBvaCdlZyljZStkZS1jZylhaSpfaS1gaSldai5eaitbay1cbC9aYyplYStlYCpoXSpoXypjYSlpYShsXyZrXiVtXyptXyVpXSNoWyJqWyBrXyFoWiRrWCNsVSJqVyZtViBtVB5tUx1vVB5xUxtvUhlxVRhxURdwThdwVRh0WBd1WBV0WxVzVxd3VRl4Uxh2VxNzVxFyWRFwWxBwVQ9yWBJuWRJsXRRqVxNqVhVrVxdqVBVrXhduYBVvYhVuXRlwXBtvWhpuXB1wXxNwYRJxYRBvYw9vYBBzYBJ2YBB4Yg54XhB5YA9tYA5rYg9qZA5pXg1qXA1rWgxqWgtoWAtrYhFpYxNoZxNoYhVnZhNraBNsbBFsZxRvaRNxbBRxbBZwbRJyaQ1sagxqbAxpaAttZwlvZwtxZgdvaQ1oag1mbg5kaA5kaQ1haQtgag9gagteaw9dawxdbhJnchFnbhVocBZpbBZncBBqcg9rcw1qdQxqcQ5ucQxocgpndglkcAhmbwZobQVnbAVlbARpdhBgcg1fcQtecAlfcQpcbwhecAhcdw5jeRBkfRFiehBmew5gfQ5ffhBbfQteewpdewpaeQleeQlaeAlcexBdexRbdxNbdhFacxFadQ5XchBZcQxXfBVdfhdegBhafxdgfRhiehdifhlkhBRbgxRYhRVXhRJchhNehRRgiBJfgRNYgBNVgRZSfhFVfw9WfA1Vew5VfAtWfhlVgRtSfRpWehpWfR1WeRtZhRtWhxxShhtYhRtaiRxXhR5bhRhThhdRhRhOhhlNhhRRiBNShxBShg9RiA9TgxlOghpMgx1KfxpNfhlLfBdLfBZNexZKgx1OhCBOhyFMhCFQgSFRhSNQgSJUiB5Oih5Nix1LjB5JixxPjhtOiRtKihtHih5EiBlGiRZHiBRGhhVFiBJHhx5GhiBFhCFGgSJDgyVFgCRCgidEgCdCiSNHjiZFiyVKiSZMkCFFjyFCkSFBkR9GjSFBjCE/jSQ8ih8/iR88hx08hR49gx87hB85gSA8iCg+hyo+hiY9jCxDjy5DiytGiCtGiy5HhypIkytDky1FlS5FlCxBlCs8kyg/kyxHky1KkS1LlytKmSpLmStNmClPmyxKmy9JmzBLmi9Hmi1Omi1RmC1SmCxUnC9Sli5SlC5TkytTkitVki9RkzJRlDJPkzNTkypRkihSkyZUkiZQkSRQjiNRkSJNlyZWlidYliVamSZVmiVTmSNSnCZSlilYlSpbkylckylelS1amC5amDFZmjJZmzRZkSlajyhbjiVdjShYiyZZjSpYkSFbkiFdkR9fkiBZkh9Vjx5XlCJelSJgkyNikyJklyRgmSRikiVhkCZjjSRmjyhijSNiiyFiix5liiBghh5hiRxghRxiiBpghRphhBhhkBxlkB1nkBxpkhtkkhpikBpglBlhkR9okSBqjyBukiNqiiFsiR9rhx9riSNriiVsiSZujCdriihvjCltiRpqiBpthhhtihlpiRpviBpxhhtyhBp0ihpzihl1ixp3iBh1hR1xgx9xgRxwgyFwfx5yfB1yex90fCF0fyB0ehtveRtseB5pdxlseBdudxhqdxVudh5tdSBsdiNpcyFuciNtcSRwcyVxdCRzcyFzdiR0eCNseiVsfCVueyZwfCdyfydxfCd0fCJpfSFnfCFlfSJjfh9ngB9pghxpghtngxxreSFleCFjdSBkdyhkeSthdypmdClndCpqdixqciprfylffylkfy1mfipofSdafSJdfyFefCFbfh5eeidceClbeixZdCdcdSxccihdeyxcfC5cfi5afy9Zfi5efTBgey9ifTJhejFjezJjgStYgitUgihYhSZbhipbfitVfStSfi1ReypSeiZReSdVeSRReCVVeSNTfi9SgjNOfzNTgDVSgTJVhS9PhS9Lhy1QiSxPiy5PiipQgi1MgSxKfixIfilMgihLfTFJfzJGfDJLejFNei9NejNPezJGfDNDfDZDezdFeTNCeTQ/ezM+dzQ/fjdCfjlCgjlDgD1EgjxIgkBFhjtJhzxMiD5MiTpJijxHiD1GhTxOhT1QhjtShjlSgz5Qhz1UiDtWhjpYhDtXiT1XhzlZhTdbhjZdiDZdhDZahjRWhTFaiDJVhzBYiDBWhTVfhTFhgzFghjVjhzhjhzllhTlnhTpphzBihi5jhi1lhCxmiCxihylihShhiChkhCZhhCNkhy9nhy9phjNriC1rhCttgilthCdqgidsijFqizRrjTRpjjZpjDRtijRviTJvijZwjTJnjzNljjRjjTNikDBlji9kkS9njjZjkTdfjjpijTtkjTxgjzVbjjdZjDdYjjFcjzJYjS9ckDlYjzhUkT1XkT5ZkT1bkkBZjzxSjjtQkDpOkjxOjDxPjT9Pi0FPi0NPi0VNi0RLjEdOkDlNkjhLkTlJjzhHkjVLlTVJlDVHlzVFmDdGkTtIlDtEkT9Gj0BJkENJkERHkEdHkUhKkEhGkTxCkjs/kz4+kj89kTo+kTdBjTc/kDVCjDZAjTJDlj8/lkE+mEM7mEJAmkBAl0NClz86mD84lj42lTw2mj43nD85lkA0lD8ylT4wlD4ukkEyk0IwkUI0lz0xmTwvmDkulzksmzwvnT4vnEAxnUIxnEQzlzgvljYvkzQslTQxkzQykzM0kTI1lTE1kDgskTgpjzcojzotjDosjjowkzkpkzomkzgilTsmmD4olD8nlDUlkjEkki8kljIjlzQhljUfmjQhkDImjjAnjDAljTEpijAmhjElhTEnhy0khiwniSsjhTMkgTIjhDcjhDsigTokfTMmejYofzAoejAofi4qejYkeDgkdjUjezshez0ifDoffT4hfjwgdTcmczYncTooczUqdDcrdTMudjcvbjYnbDgpbTgrajYmajQnaTkpaTosaDgvZjssZj0uZDorZD8uZzMtaTItaTAuZTItZTEqYzQtbTErbC8qbi0qaiwnay0kbCskZywnZCspaCoray8jbC8hbzIhazEgaC4eZjEgZS0dZDAgYy4fYS4ecC4hcy8idC8gdC0jcy0mdCsndiomcyopdjEfejIeejMgdzQcdzYddDQbezAdgDAbfi0ffCwhfCohfSkjfCkmeikmfSgngTIehjIdhzIfhDUcgTYbhjYbgTUZhzAcjDIaii0bjSwbjiwdjisajjQekDMdkjMejjYgjDchjDgjijgfkzIakzMXkzIVky8aki4clDUXlDYVljgVlzkXkjcTkTkVjzgXjzYXjjoYOj1ROkFRPT9UPj9POz5MPkFMPz1MPDpLQDpJPT1IPz5GPj9EPD1DPUJDP0NDPEFAOj9DOD9EOD5HNj9IMUFJMkVBNUJCP0ZEQEdDP0VGPEdEO0hBOUlBN0hCOUtDOk1CNU1CNUlENUhGNkZHNUZJM0dJMkZNLk1JMkpHOlBEPFFDO09GOFFEOFNFNVRFNFJGNVVHNVhHMFZHL1JMM0xPNE1LNE9KN1lIOFtHOVdJNlpKM1xKMlxMMVlMM1xOM15PL11QMFlOM1VOM1NPM1BTLlVXL1ZTNl9QNmJQN15PNV9TM2BTMV1VM19YNGFZMF5bMVtXMVdaNlNVNVdUNFlVNmJaN2RaOGBYN2BcNWFeNV9gOWBjNlxkNVtgN1pcOFlbOlRaOVRgOFZgO2FjPGNkPGBgPV9kPF5mPVxnPFpmQFtnQVxoQFhpPVhmPlRkP1ZcPllfPllhRF1oRV9qRF9lRVtnRlppR1doSVhmS1lnSlRnR1RlRVhiRVhgRVZbSFJeR1JhTVhoTFZqT1ppT1ZnUFVnUVNlT1JkVVRlU1BiT1JiTlZhTVdfTFdZTlJaT1FdV1ZjWVZlVVhjV1VhWFNgWFJeVlJdWVRcXFRcWVFZVVNbVFdcU1lcUFxYUlZVXVZbX1VaXVhdXFdZXVhXXFdUWVdVXllRWlZQWFhTV1tWVl1WU2FUU11NVVtQX1tQYltPX11SXVxOXVpMW1tKWVxMXF5JWV5HWF5LWGBNWWBPWGFQVmZRVWVLVmNKX2BHYF9EYWFJXmJGXWJEW2RDWWRFXmdBWWlBWWdFWGtHWmlMWmlOW2ZLWmZJYGhBYWg/YmhEXmxAXG5AW21CX3E/W3NBW3BEW29GXW1HXW1JXXBOWHZKWnNIYnNAY3M+Y3FCYXVCX3dBXXdEYHpEXXhGX3VIYHRKYXVQXnpOXnpMZH1DZH5BZXpDZH5FYoBFZIJJZYRJYoRNYn9MY3tLZHlMZHpOZndRZX5UY35QZH1PaIVIaIdHaYNHaYVLaYNMaYRPaIJQbINQbYZQaoVUaYFSan1QantQa3tSbHdTbHxXa35WcIVQcodPcYNQcoZUcINXc4RYdYZZcoNccIFYcX1acnlTcX1TcX9Ud4ZYeIhZeIVWeYRaeIRcd39de4BdfYFee31geH1ceH5YeHxWeXhTe3RbeXhbf4JdgYNff4NbgH9cgn5dgntegHpdhnpegnZfgHhcgHRZf3hSf3pWf3pYiHpdintfiHxbiXhbiXZciHRbhnRZjHNZiXBXhnhWhnlUhXpPhXJNhnNRj3RZkXNbj3dZkHNWj3FWj3FTjXJSk3FRj3FOjXNQjHZNi3xRjHlTjHZTlnJSl3FTlXVTlnNPlnJNmXVJlXZGk3ZKkXpKkXpIkHxMkH1QknpPknhOnHZKnXRLnHhMnnlIm3tGoX5GnX9Dl4FLlYBOmH1Mo39IpX5Hon5KooFIooNGoYdIo4hIn4pHnIVKmohLmoNOmoJQnIJNnYNLpYlKp4tIpodLo4tLn45MpJFOn5JPno5OnYxPnopPnohQm4ZUmoxUm41TppBQqJJPp45QpZFSppBVpJFXopFWpJBZppFbopBaoZNboYxWoYpWn4pYnohZnoVZnYhbnItcm4tenY1bn4xZqJNaqZNdppVaqZNYq5RXrZNWrpZVr5JXsJBVsZRYs5RYsJZVsZhWsJpYsJxXspxVs55Us6BVtJ1StJtRs5lSsppUsI5WsIxUro1Xso5Ysoxas41csYxetY1dto9ctI9hsotgs4lgs4detIVftoJjtohotIlkuY5cupFauoxbu45eu5Fgu5Biuo5jvo9iwJFivo9nu41lvIlou4Niu4hhu4phwpBhxJJhwo5fxI5jxY9lxY1nw4xoyYxnxolox4pqxIlow4RpwINhwYdiwohkzIxlzo1lyotjzYlmzolozoZozIVpz4Rn0oRnz4FpzINoyoNmyYVlx4RjxIBgyH1kyX5m04Rk1oRl0oVi04Fk1H9l031k0X1l1nth0nhi0Hxjzn1hzHpgzIBeyoJdzYFgz4Bh13tf2ntf135e1npd13dd1nZb03Zc1nZY2HVX1HVX1HNX0nZZ0XhZ0Xpaz3xZzH1WzHZSznZW2XdV3HZV2XlW2HZT2HRS1nRQ1HRR1nVO2HVM03RL0nVPznhN0H9S0ntS03lR2ndL3HZK2nhN2HhJ13dH1nlG1HpH2HtD1X1F031D03xH0YBI1IBN1IFP1X5N1X1L231D3HxB235F2X9B2X8/14E+1YE/2IM+2oQ71oU+1YU71IQ/1YRC1oNE1oRG1IhJ0ItD0ohC1IZD3IQ83YQ53YE93YY+3og93Io92ok/3Iw+3Y482I492YtA141E24lJ3IhF24lD4I894ZA64Y4+35E+3pM93JQ/25JA3phA2ZdC2pNC2pNH341J349F4JpA4Jw/4phA4JpD3ptE3ptH3phH4JtI4Z5J35pM45RK45VM5JNJ5JJH5pFG45NF4ZVG459I4qJI5J5G5Z9K5p1L5p1N5ZpO6ZxO6p9O6J1S55lQ6JZT6pFN6ZRM6JdN7Z9N7qFN7Z1L7p5Q8J1P8ZpR75lR85lQ9ZpS8pZR8pZU75ZR7pdM7pVK7pNL7pFI749L8I1P75FP95pQ+ZpR9pxO95hO+ZhM+pZM/JZO+JNL/ZFM/ZRP/JRS+pZT+pVV/JRW/JNY+5Na/pFY/5BW/5FU/ZNU9pFL9JFJ9ZFO945L9oxM+ItO+Y1P94pQ9odP+ohS+YxS9ZFU9ZNZ95Ba+Y5a+Y1X9IZR9INP8odR9YVT9INV9YRX9odX8oVZ8YJa84Zb9IVd9YhZ8o1W75FX8JBb8Y5d8oxc74JZ7n9b74FW7YRa7YRc7Idd7Ylb54Zd6Ylb6Itd64pa7IhW7IlU64xQ6o9T6pBV6o5X5YVd5IRe5YVa5Ihd4Ylc4Ytc44xb3oxb3Y5d341Z3Y9Y4Y5Z441X5ItW5YxU5I5T5Y9R5o9P45NT4pFV35Bd4ZBd3pFg3ZJc25Jb2pRZ3JRX2JNY1pRa2JVW15dW2pRV25JU25BU3I9S3o5N3pJN3pVO3ZVR3JNR05Na0ZRa1JBb05JX0JJW0JNU0pNSzpJSzZRQ0JBRzo9P0pFQ1JBQ1I5S1oxS2otP2JBL1pBNzpZQ0JdPzJhSzJdOzpdLzJVJzpRIyZNLyZJGzZJHz5BI0pFI0pJG1IxL0I1Kz45Jx5JNxZJNyZFPx49LxY9Jxo1IyI1HwopIxYlFyYpHyotLzIpN0IZOz4VIzYdHwYhKvohKwolNwoZJwYVHwoJHxINGwH9Jw31GxoFHx4FJx4RKyYRLzoJOzXtKyn5JyYBKv35LvH5Lv4BNwHxMwHpLwnhLxHpLwHVOxXVNxnlMynlPyIFSxX9PxX1Ov3VRvXNQv3hRwXRSwXFSxHFUxnNTxHFWw29Xx29Xx3NVx3ZVxXdUxXlVx31ZynhayXZZwW9awG1bv3FZw3BcxW5dxnBfx3JexXBhxG5jxnJiyHFjx3NgxnZfyHhixHpew3xdxHhdxXZdwm9lwWxmwHBkw3BnwnFpxHNqxXVownVswnRuxndtxXdpwndmwXlkv35kw35oxHxpv3Rvv3NxvXRtv3dwwXhywHpywXxwvXt0vn5xwH9zwH5vv3xsvXxqu4BmvoZrvoJsunx1unt3uXtzun91uIB1uIJ0uoJxtoNztYR0uIdyuYRwuIZstn9nt39suIBusoR0sYV2sYJzsYZysolysYpws4lur4pvrYxwr4pssI1ssolssoRssoNrsIBmr4Rlr4ZlsIdnq4tyrIx0q4hxqYxxp4tvqIttqopspoprpItrp4xnqYlpq4Nsq35pqoBmqYJlqYVmootpo41nn4xqoYlmoIZlooRmnoZmnYVknoRooYNno4RrpINtpn9sp39upn1rpXpoo35om4Zim4VgnIlimIZjl4RjlYRllYVnlIlmkopmlIdok4lsmYptmotumolrmIhpj4ZijYZikIRgkIhgj4phkIxgko1gjY1ckJBck41dlYtclo5ZmIZZlodclIldi4taiYxbjIlbjIxYjI9YjpBWkI9WjY9Ti5BSkJFRkY5UkopWk4hWlIhTloRTlYpPlItQiY9Rh5BQiYxRi49Oi5FNjZBLj49Mi49HkI9GkI1Kj4pOj4hOkoNOlIVLlIdKk4lKiI5Hh5BFh45JiYxFi4pCjYlEiohCiIdAjYVAjYdEjYZGjIdIjIZKjYFNj4BHj4JGjoRHhoZAhIc+hYZCh4NAiII+iYA/ioBBh34/hX09iXo/in5CiIBFiIBIiH5Ni3pJintGgn0+gX07goA/gns/gnk/g3dBhHhDgHdCf3VBgnZFgnNFhHdFhHlJhHdKg39Mg35Hg3xGfXVAfHg/e3VCfHM+fXM8f3I8f289g3M6gm86hG88gG48f2k7e2Y2emo1e202fG03gnU3g3c4gHU2h3M2iHI0h280iHEwi3Awh28xgm8ygG8xfWwtgWssg2sshWwtg20viXcwi3kwhngxiHYthncshHUsgnYqg3UogHIqgXQugHgwf3kxensyd3Uue3Uugncmg3cjgnonf3clfnUkfHQke3Une3YheHckd3UjeXYne3kpe3oreH4ucXordXkpe3kffHcdfXogeXoed3gddHkedHogdHsccnscdH0ec38edX0jcX4kd4ApeH4ld30jcX0Zb3sYc34Yb38abH4aa38can0eaoMea34gbHwhanwkaX0ka3olbXglbXYmbngibXoha4YfaYcfbYYdbIYha4YjbYkmbYoocIkkcYslcYYmc4Ukc4QidYMidoQjeYQkeoMieYUmeIYndoYndYUlbIwpa40mbo4qaowraIsqZ4ksaIYrZoovaIYvZoYwaYUtbYYub4Yuc4IrbX8obIIqZ40wZY4yaI4vaYwyaIs0a4o2bIw3aog4aoY3bYg5b4c4bYs5bI07bo09b4s9bY4/a5A+apFAapA8ao46aYM4Z4Q6bIM6aYE3aIAzaYExaX0zZ3w0aHwva38wbn0tdIAwcIEyboEyaHo2Zng3aXs4aXg0aHcyanUxbHcwbHQya3EzbXIubnYvcnYudXs0cXozb3kybHA1am42bHI3b24ycW0yc28xc2o0dW0zdmsxdW8ydHM0dXU2d3Q1eXY2eXg3eXIzcWk2b2g1cGs4cmU2c2M4dWQ4cmI6cmA6c2Q8c2I+d2Y8eGU+eGM/emc/e2s/eGo8d2g7cV45cls6cV42bl46bl08a109al88alk8Z1w+aF87aGA5ZmA4ZGA5Z2E1aWE0aWIya2E1amA4alY6alQ7bFc5aFY4ZlU5ZFk2ZFI0YVYzZFkzZloyaFs0aVwzaVwwaV0ubF4uaFwsZlssZVouZlswZVAzZE4zaFA0ZlEwZFEvZVIsZlUtZlErZU8qaFMpZlMnaFUrbFYrbFcpblctblYvcFYwbFQwalQvZkwqZUopZkwtaUwpaU0na0wmbU4nbEgmb0oncEolb00nb00qck0rc0wqck4ucE4vcE8xbk8ubk4rbEUnakQma0YqbkQnb0QlcUMlcUEmckIidEQhdkEkcz8lbj4kbTwjbDggcjggdkQgeEQidkYedkIeeEAedz4aeT8ZdzoZcT4ebz4eaj0cazsabToZcDoZeUEXfEIWd0MYeEAUeD4Udj0SdDwUdT4Qdj4Ocz0QczsOcjwTc0AVb0AWa0EXbjwUdkENeEELdkMOdEALcz4KcT8Ibz4KckIGbUAFbT8KaUELa0QSbkIQbkEOckUFdUUEckYHcEUEcEgEbUgDbEYFbEsEbEwCaUoEaEoCaUgGaEkJZkkIaEkMakkPbEgMbEgJbk4CblAAcE4DbVAEalEEaVIGaFEHa1YGaFYJaVIKalALbE4KbU0LbU4Obk4Qb0wRbU8SalITalEPblcFblgDb1QFb1kHcFgJcFoLb1wJcFkPb10PbV0La10KalwIaFwIZ10JZV4KY10IZF8LZmANaGANaV4Lb1YQcVUSblUObVcSbVkUa1oUalwSaVkYZ10WaFwSYlcKYVoNYVsOY1wQaFYZaFYbaFQXZVYYZFgaYVkZYVkWXlYbXFkXYFgVY1YTY1INX1MNXVQOXlYQX1McXVMeYVMcXlEaW1EZW1EWXVEVWU0WW04SYU8UYk8WZE4WZE0UaEwTZkwQZEwPYk0QYk4SWUoXV0oYW0oZWkkVWEkTWUgQW0kQWUMQW0UMXUgPYEgTYkgUZ0cTZUUOYkYOWUERVkARWkEUW0AQWz8NXT4MX0AMXjwNXToMYTwKYT8NYkAPYEERYUETZkAWaj0PZj8PXTgOXDYNXDkRYDcPYjYNZDYNZTgOZDQQZDEPZzQRaDMPZzcQaDgUajcUaDkWZToXZTsZZDoVZDkTYjAQYC8PYDISYy4SZS0RZisTaCwUZSoUZicVZSsXZCoZZywWaC8YZjAYZzIZajEZbDUbbjIabi8ZcC4ZbC4Yai8YZSUTZiMVZiURYiUUYSMWXyIVYCESXyAWXSAYWx8UXx4SYR0SYx0SZRsSYxkSZBcSZhYRXRUTXxkSYRoSXR8bXCAcYB4bXB0aWR0aWBoZWhkXVhgdVhUZWhYYXBYYWxIYYRUZYxQZYBcZXhgYVxcfVRghWRcgVhQfVxMhVxAgWRAeWA8hVw0jVwsfWg4eXREeYBEfZQ8fYwseYQoeXgseVw0mVQwnWQ8mWQsmWQklWwclXQgjXAUoXwQlXwgjZAgjZBAlYA4lXwwkXQUrWwQtXQgsYAUrYAIrYwIrZAMpZAMtZAEvaAEsZgQqagcqZg4qZAsqZAgqZAIxZQAzYQIyZQQxZwUzaQYzaQcwawc0bAY2bQgybgcyawgwZwsvZw0vaBMvcBAwbQ0wbAg5bQY7aQg5bQo4cAo4cQ03bw42cQ46cw85bxA6bxI7bxA3ag82aBE2aRM1ZRU0axc1bRU1axM2dRA7dg48dBE9dxI6dhQ5eBY5eBY7ehU4exg3fBU6fhU6exU/ehNAehNCfBVCfRZFfBVHfhhEfhlCgBtDfRlAfBdAexg0eRYzfhgzehs0eBs0dx40dx43eSAzdyIyeiA1eyM1eCA3eiA6eiI7eiQ6eyE9fR5Aex08eh06dyIweSEudiUvdCEvdB8tdRwucxwvdxoqdxcucxkvcBkvbxcwcRUwbBgvaRgubRoubxsudhoneBomdBondhcoeBUpeBMpdhMrdxEneREldw4pdBEqcRQqbxQpahIpbQsrcA4qeBAjehAhdxIidw4ieAwjdgokdAsldAkhdQggcgYjcgolcQ4kbxAkahEkaAkkbAoldAgddgYcdAsccgcccQQdbwQdbgYfbQMZagMdbAYfaAkfbA4dbBAdbgwdbgoebQQWbQIVbgYWagQWaAIWZgMWZQQYZAQSYQQWZAYYZQgZZwkZZwsZZhAaXg4ZYQsZZAUQZAMOZwYQYgcQYAcQXwkQYAoSXQsNXA0RYA0SZRETZw8SaRASZg0RZAwRXgsKXAoIYAoJXg4KXBAKXRIKXxIMXhMIXRQGYBUJXhcKYBQMYxMMZRUMZRcMZxMMaBEMahAMZRAMYxEMXhQDXBMCYBIDXxYDYRcDYRkEYxoGYhsDYBwBYx0EYR8FZBwHZhwHZx4IZh8Iah0IaxwHbRwHahoGZxoGvUw8vUk9u0g8u0Y9uUk7uEg6uEk+uUZBuURCuEJBuURFukZGu0ZIu0hFukhCtkk3t0g1tkw4tEg3s0c5skU5s0M7sEQ5r0I3r0Q7sUI8sT9As0ZFs0lCskY/rUE2rUA0q0Q2q0A5rD45qj08qz4+qD47pjw8qEA9qkA/q0RArEVBrUZGq0FHqkBEoz08ojs7oz88ozw/ozpAozpDpTxDoTpEoTlGoT1Eoz1FpEFDpENDpkdGpkJKpUFJnjhHnjZInTlGnzpJnzlMoDtNoT1MnzxPnztSnz9PoT9No0RPoEdIoENInkNGoEFKnjtUnjpWmztTnj5VoD9VoEFWoENTnkJXn0NZnURVn0VUoElSnEhLnEVOnURQnURbnkRemkNbnEdankhanktZnUtXm0xbnE5bmUtZm0xXmUhVmEhSlklNmlFPmk5Smk9dm1FfmE5emFFbmlNamFRYmFJWllVZlldZlFRXllNVlFNQkUxQk01UlE9VlFlalVtbk1hcklpYk1tWkltUkVhTj1xUj15TjVpTj1hSjU9SjlJUj1RUjV9UjWJUjF5Xi19Ti2BQiV9PiVxPh19PhmBNhl1Qh1tPh1lQiFlTiFdUiFFTh1RNh1ZNh1dQhmJLhGJJiGNLhWRNgmRNgWZPgmhPf2ZQfmRSfmhRgWlRgGxQgG1OgG9NgHBQgHRPgXBXgW5UgW5RfGNTfGFUemRRe2VVfWVXfWdYfWpXemhZemdcemtafGxYe3BaenFTenJSem5Te21Ud2Zcd2VfdmVadmlddmlgdmxgd25fc21gcmxic29gdnBedm9adXBYdHRVc3hcdHRcb2xhbmtjbmtfbm9hbnBjbnNjb3Rha3NiaXNka3ZhbnZfbnVdbXlcbnRYbnNWbnJab29abnNcZ3NjZnJmZnFhZnViZndjZXlhZ3pgY3lgYXphY3teZnteZn1ZZ3ZVZ3ZaZndcXnlhXHljXnZgXXpfXX1fXH5dXn5bWn1bWH5cW35ZXn5ZXn1UYXZUYHVZX3pZVnxcVH5dVnpdVXxZVX5YVH1VVnxUU3pVUHtVU3pSWHlSV3dPW3VTXXNTW3dVWXhUT3hVTHlWUHdXTndTTXlRTndOUHdOS3VOT3RMUXVNU3RRVXJRWG5RVHFLSXNPRnROSnJRSXBNSHBLSm9JTG9KSWxJR2xITGxIT2xLUGlJU2pQUG1PUG5RT25NRmlJRGlIR2lMSGdHSGVISmRHTGVHSmFISWBGTWFHTmNIUGBLT2VSTmZOTWVMRl9HRF9FRmBKRlxHSFtJSlpITFtJSlVHTVdJTlpKT1dOTV1TTF1PS2BQTFxNSFNIR1JGRlRKSVJKS1BJTlFMS05NTU5PTlBPT1FUSldUSVdPS1RPSUpMSUhLR0xKSEtOR0lQSUhRSEdUSEVUSkhWS0pUS0xZSU9YR1JXR1BURlFSSU5URURVRUFVQ0VTRUVYRkNZRkRcRkZcQ0ZeRUheREpcREpaQ0xZQlFZQlBeQk9fQ01fQ0xdP0JcPj9cP0NZPkNePkJgPkdiOERjOkhjPUliPE5iPE5aPUpcPUlZPUleNkRiNEJjNkRfNUZjNEdlM0lmNUtlL0plMU1kNE1jNU1hNUtgNktdNU5ZM1ReNFFgLUlkK0hmLUdiLEtjK01kKk9iLFBhJk1hKFBfK1FfLFNbME1XLkxbLU1dJExfIk1fJElgJktdJEtaJE1ZJk9ZI01WIUxWJE9WJlBXKk1XLExWL01RLFBQK1JRKlRPKVFTIEtUHUtUIUhVIUxSIUpPIktNJE1OI0pLIUlKJUtKJkxMKEtOK0xKLElQLkhRKklRKEtQIUdIH0dHIkVJIkhFI0dDJEhCJklDJkZAJUU+KEdAKElCKkhELEdELUhDLUVKKUZIKEdGQipqQyxpRClsQCtrQCxtQS9tPzBuQy9uRTBtQzFxQTJwPzNxPTNyPDR0PjV0Pjd2PDh4QDh2Qjh1QjZzQDVzSDBtSC9wSTJtSC5rSy1rTC5pSy9nTjBqUC9rTjJoTDFmSjRkSjNiSDZkRzdmRjlmSDdoSDhqSjVoUjBsVC9uUTNsVDBpVC5oVC9lUzFlVzBlWDBjVjNlVDNkUzZnUThoTzplTjxmTjpjTjhfUDdiWzBiWy1iXDFkWzFgWjBeVzNdXDRcXTNZWzZcWDZcVDhcUzpdUz1iVjtjWDljWDhhXDNXWjFXXjNVWjVXWTZVWDlXWjpUWjpRWTxVWDtXWjxbWj1dWUBhVkFeVEFcUkJcVT9aVz5bXTpQXDlNXjlSXT1PXT9RXkFQYUFQYUJOYkJSYENUXz9WXz5YX0BaXkFcXj9eXkNdXkVbX0RZX0JYY0FMY0JJYz9MZ0FOa0FPbUNPbD9QaT5XZztWZjpVZDhVZjpSZzxSb0RNbkZMcEJMcURPcUZRckVTckNUdUVTdkVVdUJTc0FUcj9Tcj5RcTxQcDtSbzlTbjhSbjlVbztXbztZcT1WcT1UeEdVeUhXeElTe0ZUfUdTfEdQfEpQfkZPfEZMf0hOfkpOf0xQf05Pf09MgFBQgVBSglJTgU5TgExSfURKfENIfkJMgEVJf0dIgUlHgkpJhEhEhUhIhUpJhk5LiExThkdRhklNhEdCgkhBhURChkhAhko/h0xAiEtCikw/ik49i01BiU1DikpHjFRJi1BHjU48jVA6jkw9jlA+jlM9j1Q/j1NBklU/klc/k1RBkVNDkU9EkU5Gk1VMklRIlVg+lVs9lVY8llhAlllCmFhEl1ZFnFpEm1VFmVVGmVNKl0tIl05FmFFFnlpDn1xCn1hCoFlFn1tHoFpJn1hKo1lJpFpLo1ZJoVZKn1NHn1FHnUxIn05Qn1FNp1lMqFtNqFhJp1dNp1hQplVRpVNQqVRSqVNUqVJQp1FPp1FLplBJpEtHpE1Oq1JVq1NYrVNTq09VqU5WqUxWqEtUq0pXqkhYrElUqklTqEZQqkpJrE5Mq0tPrEdZq0Zcr0harUVYq0NXrEJVrENTrUBVrD1VrkBSrUJRrEJMsEhKsEdOsklPr0ZQrjtWrDpYsDxXrjpUrDlSrThQrjpPsDdQrzROsThOsDpNsj5Ps0BOtERKsD9HsD5JsTJOsDBOszNQszNMsTJKszNHszZItTNHtjFGtjVGtTdGtTlItjlKtjxLtz1Itz9IuEFJt0BFtz5Etz9BtjxEtjtG"};var Re=i=>!!(i.person||i.ghost||i.moc);function Ze(i){let t=i.filter(s=>!Re(s)),e=s=>Math.max(1e-9,...t.map(s)),n={i:e(s=>Math.log1p(s.inlinks||0)),m:e(s=>Math.log1p(s.mentions||0)),b:e(s=>s.bc||0),r:e(s=>Math.log1p(s.recent||0))};return s=>.4*Math.log1p(s.inlinks||0)/n.i+.3*Math.log1p(s.mentions||0)/n.m+.2*(s.bc||0)/n.b+.1*Math.log1p(s.recent||0)/n.r}var en=i=>{let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619);return t>>>0},Fs=i=>{let t=Math.max(1,...i.filter(e=>!Re(e)).map(e=>e.recent||0));return e=>Re(e)?0:Math.min(1,Math.exp(-(e.age||0)/7)+.6*(e.recent||0)/t)},wi=i=>{let t=i.quality&&i.quality.stale_days||180;return e=>!Re(e)&&!/\d{4}-\d{2}-\d{2}/.test(e.name||"")&&(e.age||0)>t};var Ye={ATOM:1.8,SCALE:.16,PROTEIN:[.93,.93,.9],RNA:[.94,.34,.15],TARGET:[.13,.31,.8],OTHER:[.38,.64,.97],HIT:[1,.79,.2],NEAR:[.78,.62,.96],COIL:{lead:90,ease:40,radius:60,pitch:34},NEAR_AXIS:[0,1,0],FAR_AXIS:[-1,0,0]};function Dd(i,t,e,n){let s=new Float64Array(t*12),r=(y,b)=>y[0]*b[0]+y[1]*b[1]+y[2]*b[2],o=(y,b)=>[y[1]*b[2]-y[2]*b[1],y[2]*b[0]-y[0]*b[2],y[0]*b[1]-y[1]*b[0]],a=y=>{let b=Math.hypot(y[0],y[1],y[2])||1;return[y[0]/b,y[1]/b,y[2]/b]},l=(y,b,p)=>{let v=Math.cos(p),E=Math.sin(p);return[y.map((x,S)=>v*x+E*b[S]),b.map((x,S)=>v*x-E*y[S])]},c=i.o.slice(),h=a(i.z),d=a(i.x),u=o(h,d),f=0,m=null,M=null,_=0,g=0;if(n){let y=n.pitch/(2*Math.PI*n.radius);_=1/(n.radius*(1+y*y)),g=_*y;let b=n.axis,p=r(b,h);M=a([b[0]-p*h[0],b[1]-p*h[1],b[2]-p*h[2]]),m=o(M,h)}for(let y=0;y<t;y++){let b=i.phase+y*e.turn,p=Math.cos(b),v=Math.sin(b),E=y*12;for(let x=0;x<3;x++)s[E+x]=c[x],s[E+3+x]=p*d[x]+v*u[x],s[E+6+x]=p*u[x]-v*d[x],s[E+9+x]=h[x];if(n&&f>=n.lead){let x=Math.min(1,(f-n.lead)/(n.ease||1)+1e-9),S=x*x*(3-2*x);[h,m]=l(h,m,_*S*e.rise),[m,M]=l(m,M,g*S*e.rise),h=a(h);let P=r(d,h);d=a([d[0]-P*h[0],d[1]-P*h[1],d[2]-P*h[2]]),u=o(h,d)}for(let x=0;x<3;x++)c[x]+=h[x]*e.rise;f+=e.rise}return s}var Qc=null;function Xr(){if(Qc)return Qc;let i=Fd,t=atob(i.atoms),e=t.length/3,n=new Float32Array(e*3),s=new Uint8Array(e),r=new Int16Array(e),o=new Int8Array(e).fill(-1),a=new Float32Array(e);for(let p=0;p<e*3;p++)n[p]=t.charCodeAt(p)*i.q+i.lo[p%3];let l=i.protein;if([i.rna,i.target,i.other].forEach((p,v)=>p.forEach(([E,x])=>{for(let S=0;S<x;S++,l++)s[l]=v+1,r[l]=E})),l!==e)throw new Error("the Cas9 model's tables don't add up to its atoms: run scripts/cas9_model.cjs again");for(let p=0;p<e;p++)i.flank.forEach(([v,E],x)=>{(s[p]===2&&r[p]===v||s[p]===3&&r[p]===E)&&(o[p]=x)});let c=12,h=new Map,d=p=>`${Math.floor(n[p*3]/c)},${Math.floor(n[p*3+1]/c)},${Math.floor(n[p*3+2]/c)}`,u=new Uint16Array(e);for(let p=0;p<e;p++){let v=d(p);h.has(v)||h.set(v,[]),h.get(v).push(p)}for(let p=0;p<e;p++){let v=n[p*3],E=n[p*3+1],x=n[p*3+2],S=Math.floor(v/c),P=Math.floor(E/c),w=Math.floor(x/c),U=0;for(let F=-1;F<=1;F++)for(let B=-1;B<=1;B++)for(let N=-1;N<=1;N++)for(let Z of h.get(`${S+F},${P+B},${w+N}`)||[]){let H=n[Z*3]-v,J=n[Z*3+1]-E,G=n[Z*3+2]-x;H*H+J*J+G*G<c*c&&U++}u[p]=U}let f=Array.from(u).sort((p,v)=>p-v),m=f[Math.floor(e*.08)],M=f[Math.floor(e*.97)];for(let p=0;p<e;p++)a[p]=1-.72*Math.max(0,Math.min(1,(u[p]-m)/Math.max(1,M-m)));let _=p=>{let v=[0,0,0],E=0;for(let x=0;x<e;x++)p(x)&&(v[0]+=n[x*3],v[1]+=n[x*3+1],v[2]+=n[x*3+2],E++);return v.map(x=>x/(E||1))},g=(p,v)=>{let E=-1,x=-1/0;for(let S=0;S<e;S++)if(p(S)){let P=v(S);P>x&&(x=P,E=S)}return[n[E*3],n[E*3+1],n[E*3+2]]},y=i.pair.map(([p,v,E,x,S])=>({x:p,y:v,z:E,strand:x,base:S,r:Ye.ATOM})),b=[];for(let p of[0,1])for(let v of[0,1]){let E=y.filter(S=>S.strand===p&&S.base===v),x=S=>E.reduce((P,w)=>P+w[S],0)/E.length;b.push({x:x("x"),y:x("y"),z:x("z"),strand:p,base:v,r:v?3.3:3.6})}return Qc={M:i,n:e,xyz:n,kind:s,res:r,flank:o,shade:a,pair:y,beads:b,base:[Ye.PROTEIN,Ye.RNA,Ye.TARGET,Ye.OTHER],flankAt:i.flank.map((p,v)=>_(E=>o[E]===v)),held:_(p=>s[p]===1&&r[p]<=i.spacer+1||s[p]===2&&r[p]>30-i.spacer),labels:{protein:g(p=>s[p]===0,p=>-n[p*3+1]),rna:g(p=>s[p]===1,p=>Math.hypot(n[p*3],n[p*3+1],n[p*3+2]))}}}function Ld(i,t,e){let n=Xr(),s=n.M,r=t&&t.ids?new Set(t.ids):null,o=new Map,a=i.filter(p=>!Re(p)&&(!r||r.has(p.id))).sort((p,v)=>p.id<v.id?-1:p.id>v.id?1:0),l=new Set(a.map(p=>p.id));t&&t.notes.forEach(p=>{l.has(p.path)&&o.set(p.path,p.hits?"hit":"near")});let c=a.filter(p=>o.get(p.id)==="hit"),h=c.find(p=>p.id===e)||c[0]||null,d=h?a.indexOf(h):a.length>>1,u=a.slice(h?d+1:d),f=u.slice(0,s.flank.length).map(p=>p.id),m=u.slice(s.flank.length).map(p=>p.id),M=a.slice(0,d).reverse().map(p=>p.id),_=Dd(s.tails.near,m.length,s.step,{...Ye.COIL,axis:Ye.NEAR_AXIS}),g=Dd(s.tails.far,M.length,s.step,{...Ye.COIL,axis:Ye.FAR_AXIS}),y=new Map,b=new Map;return h&&(y.set(h.id,n.held),b.set(h.id,"held")),f.forEach((p,v)=>{y.set(p,n.flankAt[v]),b.set(p,"flank")}),[[m,_,"near"],[M,g,"far"]].forEach(([p,v,E])=>p.forEach((x,S)=>{y.set(x,[v[S*12],v[S*12+1],v[S*12+2]]),b.set(x,E)})),{pos:y,where:b,all:a,hits:o,sites:c,site:h?h.id:null,flankIds:f,nearIds:m,farIds:M,near:_,far:g,scan:t||null}}var Jr=Ye.SCALE,Kc=28,X_=.3,Ds=i=>[i[0]*Jr,-i[1]*Jr,-i[2]*Jr];function $c(i,t,e){let n=new rn,s=new fe(t,e,i.n),r=new Ht,o=new xt;for(let a=0;a<i.n;a++){r.makeScale(Ye.ATOM,Ye.ATOM,Ye.ATOM).setPosition(i.xyz[a*3],i.xyz[a*3+1],i.xyz[a*3+2]),s.setMatrixAt(a,r);let l=i.base[i.kind[a]];s.setColorAt(a,o.setRGB(l[0],l[1],l[2],ze).multiplyScalar(i.shade[a]))}return n.rotation.x=Math.PI,n.scale.setScalar(Jr),n.add(s),{root:n,mesh:s}}var Bd={id:"cas9",name:"Cas9",hint:"Notes as DNA, the Guide scan's matches as cut sites",home:{yaw:0,pitch:.2,dist:44,min:14,max:240,minPitch:-1.4},stage:{light:"camera",fog:[70,260],ambient:.5},actions:["guide-scan"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,invalidate:o}){let a=Xr(),l=new Map(e.nodes.map(O=>[O.id,O])),c=O=>l.get(O)?l.get(O).name:O,h=new jn(1,1),d=new Gi,{root:u,mesh:f}=$c(a,h,d);i.scene.add(u);let m=new Ht,M=new xt,_=(O,Q)=>M.setRGB(O[0],O[1],O[2],ze).multiplyScalar(Q),g=null,y=null,b=[],p={atoms:0,pairs:0,fine:0,beads:0},v=n.scan||null,E=n.selected||null,x=null,S=null,P=O=>{let Q=y.hits.get(O);return Q==="hit"?Ye.HIT:Q==="near"?Ye.NEAR:null},w=O=>S&&!S.has(O)?X_:1;function U(){for(let O=0;O<a.n;O++){let Q=a.flank[O]>=0?y.flankIds[a.flank[O]]:null,k=Q?P(Q):null;f.setColorAt(O,_(k||a.base[a.kind[O]],a.shade[O]*(Q?w(Q):1)))}f.instanceColor.needsUpdate=!0}function F(){g&&(u.remove(g),g.dispose());let O=[y.nearIds,y.farIds].reduce((k,C)=>k+Math.min(C.length,Kc)*a.pair.length+Math.max(0,C.length-Kc)*a.beads.length,0);g=new fe(h,d,Math.max(O,1)),g.count=O;let Q=0;p={atoms:a.n,pairs:y.nearIds.length+y.farIds.length,fine:0,beads:0},[[y.nearIds,y.near,!0],[y.farIds,y.far,!1]].forEach(([k,C,nt])=>k.forEach((ut,ot)=>{let dt=ot<Kc,_t=ot*12,pt=P(ut),Ct=w(ut);dt?p.fine++:p.beads++;for(let vt of dt?a.pair:a.beads){m.makeScale(vt.r,vt.r,vt.r).setPosition(C[_t]+C[_t+3]*vt.x+C[_t+6]*vt.y+C[_t+9]*vt.z,C[_t+1]+C[_t+4]*vt.x+C[_t+7]*vt.y+C[_t+10]*vt.z,C[_t+2]+C[_t+5]*vt.x+C[_t+8]*vt.y+C[_t+11]*vt.z),g.setMatrixAt(Q,m);let K=vt.strand===0===nt?Ye.OTHER:Ye.TARGET;g.setColorAt(Q++,_(pt&&(vt.base||!dt)?pt:K,(vt.base?.78:1)*Ct))}})),p.atoms+=Q,u.add(g)}let B=()=>{if(!v)return`${mt(y.all.length,"note")} \xB7 no guide`;let O=`\u201C${v.guide}\u201D${v.where?" "+v.where:""}`,Q=[...y.hits.values()].filter(k=>k==="near").length;return y.sites.length?`${O}: exact in ${mt(y.sites.length,"note")} of ${y.all.length}${Q?` \xB7 look-alikes in ${Q}`:""}`:`${O}: no match in ${mt(y.all.length,"note")}`},N={label:"Open Guide scan",title:"Open Guide scan",run:()=>r("guide-scan")},Z=()=>y.sites.findIndex(O=>O.id===y.site);function H(O){let Q=y.sites.length;Q&&(x=y.sites[(Z()+O+Q)%Q].id,W(),o())}function J(O){y.hits.get(O)==="hit"&&(x=O,W(),o())}function G(){t.stat(B());let O=[{text:"Cas9 protein",at:Ds(a.labels.protein),dy:-16,run:()=>r("guide-scan"),title:"Cas9 protein. Open Guide scan"},{text:v?`RNA \xB7 ${jt(v.guide,24)}`:"RNA",at:Ds(a.labels.rna),color:"#f2764a",dy:-14,run:()=>r("guide-scan"),title:"The guide. Open Guide scan"},{text:"DNA",at:Ds(a.M.tails.near.o),color:"#8fbcfb",dy:16,title:y.sites.length?"DNA. Show the exact matches":"DNA. Open Guide scan",run:()=>{if(!y.sites.length)return r("guide-scan");S=new Set(y.sites.map(k=>k.id)),I(),o()}}],Q=y.site||(E&&y.pos.has(E)?E:null);if(Q&&O.unshift({text:jt(c(Q),34),at:Ds(y.pos.get(Q)),strong:!0,dy:30,run:()=>s(Q),title:`Open ${c(Q)}`}),t.labels(O),t.chip(S?`Exact matches of \u201C${jt(v.guide,24)}\u201D`:null,()=>{S=null,I(),o()}),!v)t.controls({lines:[`${mt(y.all.length,"note")}, a base pair each. No guide yet.`],buttons:[N]});else if(!y.sites.length)t.controls({lines:[`No \u201C${jt(v.guide,24)}\u201D in these ${mt(y.all.length,"note")}.`],buttons:[N]});else{let k=y.sites.length===1;t.controls({lines:[`Site ${Z()+1} of ${y.sites.length}`],buttons:[{label:"\u2039",title:"Previous site",off:k,run:()=>H(-1)},{label:c(y.site),title:`Open ${c(y.site)}`,wide:!0,run:()=>s(y.site)},{label:"\u203A",title:"Next site",off:k,run:()=>H(1)}]})}}function I(){U(),F(),G()}function W(){y=Ld(e.nodes,v,x),S&&!y.sites.length&&(S=null),b=[];for(let[O,Q]of y.pos){let k=y.where.get(O);b.push({at:Ds(Q),r:(k==="held"?14:k==="flank"?6:7)*Jr,key:{kind:"note",id:O,tip:c(O)}})}I()}function D(){E&&y.hits.get(E)==="hit"&&y.site!==E?(x=E,W()):x=y.site}return W(),D(),{targets:()=>b,click(O){E=O.id,y.hits.get(O.id)==="hit"?(x=O.id,W()):G(),s(O.id)},update(O){"scan"in O&&(v=O.scan||null,S=null),"selected"in O&&(E=O.selected||null),W(),D()},stat:B,today(){if(!y.site)return null;let O=y.sites.length;return{text:`Cas9 is on ${c(y.site)}: site ${Z()+1} of ${O} for \u201C${v.guide}\u201D`,label:O>1?"Next site":"Open it",run:()=>O>1?H(1):s(y.site)}},api:{layout:()=>y,drew:()=>p,at:O=>y.pos.has(O)?Ds(y.pos.get(O)):null,step:H,go:J,highlighted:()=>S?[...S]:null}}}};var yl=18,kd=4,Od="#facc15",J_=14;function q_(i,t){let e=t.X.map(o=>[o[0]*yl,o[1]*yl,(o[2]||0)*yl]),n=new Array(t.n).fill(0),s=new Map,r=new Map;t.domains.forEach(([o,a],l)=>{for(let c=o;c<=a&&c<t.n;c++)n[c]=l}),i.rows.forEach((o,a)=>{for(let l of new Set(o)){let c=i.ids[l];s.has(c)||s.set(c,[]),s.get(c).push(a)}});for(let[o,a]of s){let l=[0,0,0],c=en(o),h=c%628/100,d=(c>>>10)%314/100-1.57,u=yl*.03;for(let f of a)for(let m=0;m<3;m++)l[m]+=e[f][m]/a.length;r.set(o,[l[0]+Math.cos(h)*Math.cos(d)*u,l[1]+Math.sin(d)*u,l[2]+Math.sin(h)*Math.cos(d)*u])}return{beads:e,domainOf:n,daysOf:s,notes:r}}var Vd={id:"genome",name:"Genome fold",hint:"The journals as one folded strand",home:{yaw:.6,pitch:.25,dist:46,min:12,max:110},stage:{fog:[34,80]},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=e.strand,c=n.fold,h=c.n;if(h<kd){let K=()=>`${mt(h,"day")} of journals`;return t.stat(K()),t.controls({at:"centre",lines:[`Genome fold needs ${kd} days of journals that name notes.`,`${mt(h,"day")} so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:K,today:()=>null,api:{empty:!0}}}let d=q_(l,c),u=new Map(e.nodes.map(K=>[K.id,K])),f=Ze(e.nodes),m=[...d.notes.keys()].filter(K=>u.has(K)),M=new Map(m.map(K=>[K,f(u.get(K))])),_=K=>.22+.55*Math.sqrt(Math.max(0,M.get(K))),g=o.palette,y=K=>g[K%g.length],b="#6b7280",p=new Ht,v=new Ge,E=new V,x=new V(0,1,0),S=new xt,P=K=>(i.scene.add(K),K),w=P(new fe(new de(1,16,12),new Te({roughness:.55}),h)),U=P(new fe(new ve(1,1,1,8,1,!0),new Te({roughness:.7}),Math.max(h-1,1)));U.count=h-1;for(let K=0;K+1<h;K++){let Ft=d.beads[K],Dt=d.beads[K+1],Yt=d.domainOf[K]===d.domainOf[K+1],Wt=Yt?.11:.05;E.set(Dt[0]-Ft[0],Dt[1]-Ft[1],Dt[2]-Ft[2]);let Lt=E.length()||1e-6;p.compose(new V((Ft[0]+Dt[0])/2,(Ft[1]+Dt[1])/2,(Ft[2]+Dt[2])/2),v.setFromUnitVectors(x,E.divideScalar(Lt)),new V(Wt,Lt,Wt)),U.setMatrixAt(K,p),U.setColorAt(K,S.set(Yt?y(d.domainOf[K]):b))}let F=P(new fe(new de(1,16,12),new Te({roughness:.4}),Math.max(m.length,1)));F.count=m.length;let B=new le({color:Od,transparent:!0,opacity:.85}),N=new le({color:Od,transparent:!0,opacity:.18}),Z=new de(.3,12,8),H=c.loops.map((K,Ft)=>{let Dt=d.beads[K.a],Yt=d.beads[K.b],Wt=new ki(new V(...Dt),new V((Dt[0]+Yt[0])*.68,(Dt[1]+Yt[1])*.68,(Dt[2]+Yt[2])*.68),new V(...Yt)),Lt=Wt.getPoint(.5),Qt=P(new qt(new xr(Wt,24,.045,6),B)),ee=P(new qt(Z,B));ee.position.copy(Lt);let Ae=l.rows[K.a].filter(St=>l.rows[K.b].includes(St)),Se=[...new Set(Ae)].map(St=>l.ids[St]),X=_l(l.days[K.a],l.days[K.b]),q=`${bi(l.days[K.a])} and ${bi(l.days[K.b])}`;return{k:Ft,l:K,tube:Qt,dot:ee,mid:[Lt.x,Lt.y,Lt.z],ids:Se,apart:X,pair:q,tip:`${q}: ${mt(K.count,"note")} named on both, ${mt(X,"day")} apart`}}),J=new Vi(1,1.18,40),G=K=>P(new qt(J,new le({color:K,side:ge,fog:!1}))),I=G(o.fg),W=G(o.accent);I.position.set(...d.beads[h-1]),I.scale.setScalar(.62);let D=P(new He(new se,new Fe({color:o.accent,transparent:!0,opacity:.7}))),O=n.selected||null,Q=null,k=null,C=()=>Q&&d.notes.has(Q)?Q:O&&d.notes.has(O)?O:null,nt=K=>u.get(K)?u.get(K).name:K,ut=()=>`${mt(h,"day")} \xB7 ${mt(c.domains.length,"domain")} \xB7 ${mt(c.loops.length,"loop")} \xB7 fit ${c.grade} (stress ${c.stress.toFixed(2)})`,ot=H.reduce((K,Ft)=>K&&K.l.count>=Ft.l.count?K:Ft,null),dt=[...m].sort((K,Ft)=>M.get(Ft)-M.get(K)).slice(0,J_);function _t(){let K=C(),Ft=K?new Set(d.daysOf.get(K)):null,Dt=k?new Set(k.ids):null;for(let Lt=0;Lt<h;Lt++){let Qt=Ft&&Ft.has(Lt)?.5:.32;p.makeScale(Qt,Qt,Qt).setPosition(...d.beads[Lt]),w.setMatrixAt(Lt,p),w.setColorAt(Lt,S.set(y(d.domainOf[Lt])).multiplyScalar(Ft&&!Ft.has(Lt)?.35:1))}m.forEach((Lt,Qt)=>{let ee=_(Lt)*(Lt===K?1.25:1);p.makeScale(ee,ee,ee).setPosition(...d.notes.get(Lt)),F.setMatrixAt(Qt,p),F.setColorAt(Qt,S.set(g[(u.get(Lt).cluster||0)%g.length]).multiplyScalar(Dt&&!Dt.has(Lt)?.25:1))});for(let Lt of[w,F])Lt.instanceMatrix.needsUpdate=!0,Lt.instanceColor&&(Lt.instanceColor.needsUpdate=!0);for(let Lt of H)Lt.tube.material=Lt.dot.material=!k||k===Lt?B:N;W.visible=!!(O&&d.notes.has(O)&&u.has(O)),W.visible&&(W.position.set(...d.notes.get(O)),W.scale.setScalar(_(O)+.25));let Yt=[];if(K)for(let Lt of d.daysOf.get(K))Yt.push(...d.notes.get(K),...d.beads[Lt]);D.geometry.dispose(),D.geometry=new se().setAttribute("position",new kt(Yt,3));let Wt=[];K&&Wt.push({text:jt(nt(K),34),at:d.notes.get(K),strong:!0,dy:-22,run:()=>Ct(K),title:`Open ${nt(K)}`}),c.domains.forEach(([Lt,Qt],ee)=>{Qt-Lt>=3&&Wt.push({text:`${bi(l.days[Lt])} \u2013 ${bi(l.days[Qt])}`,at:d.beads[Lt+Qt>>1],color:y(ee),dy:-14})});for(let Lt of Dt?k.ids.filter(Qt=>u.has(Qt)):dt)Lt!==K&&Wt.push({text:jt(nt(Lt),26),at:d.notes.get(Lt),dy:14});t.labels(Wt),t.chip(k?`Named on both ${k.pair}`:null,()=>{k=null,_t(),a()}),t.stat(ut())}function pt(K){k=K,_t(),a()}function Ct(K){O=K,_t(),a(),s(K)}let vt=[];return d.beads.forEach((K,Ft)=>vt.push({at:K,r:.4,key:{kind:"day",id:Ft,tip:`${l.days[Ft]} \xB7 ${mt(new Set(l.rows[Ft]).size,"note")} named`}})),m.forEach(K=>vt.push({at:d.notes.get(K),r:_(K),key:{kind:"note",id:K,tip:nt(K)}})),H.forEach(K=>vt.push({at:K.mid,r:.4,key:{kind:"loop",id:K.k,tip:K.tip}})),_t(),{targets:()=>vt,click(K){K.kind==="note"?Ct(K.id):K.kind==="day"?s(l.paths[K.id]):pt(H[K.id])},hover(K){let Ft=K&&K.kind==="note"?K.id:null;Ft!==Q&&(Q=Ft,_t())},frame(){I.quaternion.copy(i.camera.quaternion),W.quaternion.copy(i.camera.quaternion)},update(K){"selected"in K&&(O=K.selected||null,_t())},stat:ut,today:()=>ot?{text:`Strongest loop: ${ot.pair} name the same ${mt(ot.l.count,"note")}, ${mt(ot.apart,"day")} apart`,label:"Show them",run:()=>pt(ot)}:null,api:{layout:()=>d,loops:()=>H.map(K=>({a:K.l.a,b:K.l.b,count:K.l.count,ids:K.ids,mid:K.mid})),shown:()=>k?k.k:null,selected:()=>O,notes:()=>m,show:K=>pt(H[K])},dispose(){B.dispose(),N.dispose(),Z.dispose(),J.dispose()}}}};var Ml=18,th="#60a5fa",eh="#f59e0b",Gd=864e5;function j_(i,t){let e=new Map;for(let o of i)!Re(o)&&typeof o.born=="string"&&Number.isFinite(Date.parse(o.born))&&e.set(o.id,Date.parse(o.born)/Gd);let n=new Map,s=new Map;for(let o of e.keys())n.set(o,[]),s.set(o,[]);let r=new Set;for(let o of t){if(o.kind!=="link"||!e.has(o.source)||!e.has(o.target)||e.get(o.source)===e.get(o.target))continue;let[a,l]=e.get(o.source)<e.get(o.target)?[o.source,o.target]:[o.target,o.source],c=a+`
`+l;r.has(c)||(r.add(c),n.get(l).push(a),s.get(a).push(l))}return{day:e,older:n,newer:s}}function zd(i,t){let e=new Set,n=[t];for(;n.length;)for(let s of i.get(n.pop())||[])e.has(s)||(e.add(s),n.push(s));return e}function Q_(i,t){let e=[...t.day.keys()],n=e.map(h=>t.day.get(h)),s=Math.min(...n),r=Math.max(...n),o=Math.max(r-s,1),a=new Map(i.map(h=>[h.id,h])),l=[...new Set(e.map(h=>a.get(h).cluster||0))].sort((h,d)=>h-d),c=new Map;for(let h of e){let d=en(h),f=l.indexOf(a.get(h).cluster||0)/Math.max(l.length,1)*Math.PI*2+(d%1e3/1e3-.5)*(Math.PI*2/Math.max(l.length,1))*.8,m=Ml*(.25+.65*((d>>>10)%1e3/1e3));c.set(h,[Math.cos(f)*m,((t.day.get(h)-s)/o-.5)*Ml*1.6,Math.sin(f)*m])}return{pos:c,from:s,to:r,axis:[[0,-Ml*.8,0],[0,Ml*.8,0]]}}var vl=i=>new Date(i*Gd).toISOString().slice(0,10),Hd={id:"cones",name:"Light cones",hint:"What a note rested on and what it touched",home:{yaw:.7,pitch:.2,dist:52,min:14,max:120},stage:{fog:[40,95]},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=j_(e.nodes,e.links),c=[...l.day.keys()];if(c.length<2){let I=()=>mt(c.length,"dated note");return t.stat(I()),t.controls({at:"centre",lines:["Light cones needs notes with a date and links between them.",`${mt(c.length,"dated note")} so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:I,today:()=>null,api:{empty:!0}}}let h=Q_(e.nodes,l),d=new Map(e.nodes.map(I=>[I.id,I])),u=Ze(e.nodes),f=I=>.25+.6*Math.sqrt(Math.max(0,u(d.get(I)))),m=I=>d.get(I).name,M=o.palette,_=new Ht,g=new xt,y=I=>(i.scene.add(I),I),b=y(new fe(new de(1,16,12),new Te({roughness:.45}),c.length)),p=[];for(let[I,W]of l.older)for(let D of W)p.push(...h.pos.get(D),...h.pos.get(I));let v=y(new He(new se().setAttribute("position",new kt(p,3)),new Fe({color:o.muted,transparent:!0,opacity:.22})));y(new He(new se().setAttribute("position",new kt([...h.axis[0],...h.axis[1]],3)),new Fe({color:o.muted,transparent:!0,opacity:.6})));let E=I=>new le({color:I,transparent:!0,opacity:.1,side:ge,depthWrite:!1}),x=y(new qt(new vs(1,1,40,1,!0),E(th))),S=y(new qt(new vs(1,1,40,1,!0),E(eh)));x.visible=S.visible=!1;let P=n.selected&&h.pos.has(n.selected)?n.selected:null,w=null,U=new Map,F=I=>(U.has(I)||U.set(I,{past:zd(l.older,I),future:zd(l.newer,I)}),U.get(I)),B=()=>w||P,N=()=>P?`${m(P)} \xB7 ${mt(F(P).past.size,"note")} in its past \xB7 ${mt(F(P).future.size,"note")} in its future`:`${mt(c.length,"dated note")} \xB7 ${mt(p.length/6,"link")} \xB7 ${_l(vl(h.from),vl(h.to))} days`;function Z(I,W,D){let O=h.pos.get(W)[1],Q=h.axis[1][1],k=h.axis[0][1],C=Math.max(D?Q-O:O-k,.5);I.visible=!0,I.scale.set(C*.55,C,C*.55),I.position.set(h.pos.get(W)[0],O+(D?C/2:-C/2),h.pos.get(W)[2]),I.rotation.set(D?Math.PI:0,0,0)}function H(){let I=B(),W=I?F(I):null;c.forEach((O,Q)=>{let k=f(O)*(O===I?1.4:1);_.makeScale(k,k,k).setPosition(...h.pos.get(O)),b.setMatrixAt(Q,_);let C=W?O===I?g.set(o.accent):W.past.has(O)?g.set(th):W.future.has(O)?g.set(eh):g.set(M[(d.get(O).cluster||0)%M.length]).multiplyScalar(.22):g.set(M[(d.get(O).cluster||0)%M.length]);b.setColorAt(Q,C)}),b.instanceMatrix.needsUpdate=!0,b.instanceColor&&(b.instanceColor.needsUpdate=!0),x.visible=S.visible=!1,I&&(Z(x,I,!1),Z(S,I,!0));let D=[{text:bi(vl(h.from)),at:h.axis[0],dy:12,color:o.muted},{text:bi(vl(h.to)),at:h.axis[1],dy:-12,color:o.muted}];if(I&&D.push({text:jt(m(I),34),at:h.pos.get(I),strong:!0,dy:-18,run:()=>J(I),title:`Open ${m(I)}`}),W){let O=(Q,k)=>[...Q].sort((C,nt)=>k*(l.day.get(C)-l.day.get(nt)))[0];for(let[Q,k]of[[W.past,-1],[W.future,1]]){let C=O(Q,k);C&&D.push({text:jt(m(C),26),at:h.pos.get(C),dy:14,color:k<0?th:eh})}}t.labels(D),t.stat(N())}function J(I){P=I,H(),a(),s(I)}let G=c.map(I=>({at:h.pos.get(I),r:f(I),key:{kind:"note",id:I,tip:`${m(I)} \xB7 ${d.get(I).born}`}}));return H(),{targets:()=>G,click(I){I.kind==="note"&&J(I.id)},hover(I){let W=I&&I.kind==="note"?I.id:null;W!==w&&(w=W,H())},update(I){"selected"in I&&(P=I.selected&&h.pos.has(I.selected)?I.selected:null,H())},stat:N,today:()=>{let I=c.reduce((W,D)=>W&&F(W).future.size>=F(D).future.size?W:D,null);return I&&F(I).future.size?{text:`${m(I)} reaches the most: ${mt(F(I).future.size,"note")} in its future`,label:"Show it",run:()=>{P=I,H(),a()}}:null},api:{layout:()=>h,graph:()=>l,cones:I=>F(I),selected:()=>P,notes:()=>c},dispose(){v.material.dispose(),x.material.dispose(),S.material.dispose()}}}};var Wd=(i,t)=>{let e=new Array(i).fill(0);for(let[n,s]of t)e[n]++,e[s]++;return e};function Zd({n:i,bars:t,ground:e,sag:n,sagging:s,weakest:r,busiest:o,carry:a},l){let c=Wd(i,t),h=[];n[s]>0&&h.push({text:`${l(s)} sags most (${n[s].toFixed(2)}). It is held by ${mt(c[s],"link")}; link it to a note near the ground notes and it stiffens.`,label:"Open note",note:s}),r>=0&&h.push({text:`${l(t[r][0])} \u2013 ${l(t[r][1])} is closest to buckling: it is pushed hardest, so if that link goes its notes lose their support. A second route between them takes the load.`,label:"Show link",bar:r}),o>=0&&h.push({text:`${l(t[o][0])} \u2013 ${l(t[o][1])} carries the most (${a[o].toFixed(1)}). Everything leaning on it is one edit from sagging.`,label:"Show link",bar:o});let d=c.map((u,f)=>[u,f]).filter(([u,f])=>u===1&&!e.includes(f)).length;return d&&h.push({text:`${mt(d,"note")} hang from a single link. Each is a note to link from a second place.`,label:"Show worst",note:s}),{plain:"Picture your notes as a bridge. Links are the beams and notes are the joints. A note held up by only one beam droops, and a beam doing all the carrying is the one that snaps first.",about:"Each written link is a steel bar and each note a joint; the most linked notes are the ground. Load is the notes' weight. A note sags when few links hold it, and a link carries more when more notes lean on it.",insights:h}}function Yd({bars:i,vector:t,freq:e,k:n,count:s},r){let o=m=>Math.abs(t[m])<.05?0:t[m]>0?1:-1,a=t.filter((m,M)=>o(M)>0).length,l=t.filter((m,M)=>o(M)<0).length,c=i.filter(([m,M])=>o(m)*o(M)<0).length,h=t.indexOf(Math.max(...t)),d=t.indexOf(Math.min(...t)),u=[{text:`Mode ${n+1} splits the vault ${a} notes against ${l}; ${mt(c,"link")} cross the cut${c<=Math.max(2,i.length*.05)?", so the two halves are barely connected":""}.`,label:"Show it",show:!0}];h!==d&&u.push({text:`${r(h)} and ${r(d)} swing furthest apart. A link between them, or through a shared note, ties the halves together.`,label:"Open "+r(h).slice(0,18),note:h});let f=t.filter((m,M)=>o(M)===0).length;return f&&u.push({text:`${mt(f,"note")} sit on the nodal line, belonging to neither half. They are the bridges; keep their links.`,label:"Show it",show:!0}),{plain:"Picture your notes as a drum skin. Tap it and it wobbles in a pattern. The two halves that move against each other are the two clumps of your notes that hardly talk to each other.",about:"Notes are masses on a stretched sheet and links are springs. The sheet rings in the shapes the links allow; amber swings up while blue swings down, and the dark line between them does not move. A lower frequency means a cleaner cut.",insights:u,freq:e,count:s}}function Xd({n:i,bars:t,kept:e,hubs:n,order:s},r){let o=new Array(i).fill(0);t.forEach(([d,u],f)=>{e[f]&&(o[d]++,o[u]++)});let a=s.filter(d=>!o[d]&&!n.includes(d)),l=Wd(i,t),c=e.filter(Boolean).length,h=[];return h.push({text:`${c} of ${mt(t.length,"link")} carry the vault between its ${n.length} hubs. The rest are never the short way from one hub to another.`,label:"Show it",show:!0}),a.length&&h.push({text:`${mt(a.length,"note")} are off the backbone. ${r(a[0])} has ${mt(l[a[0]],"link")} but none that leads to a hub; link it to one.`,label:"Open note",note:a[0]}),h.push({text:"Links off the backbone are not wrong, but they add detours. Where two notes say the same thing, keep the one on the backbone.",label:"Show it",show:!0}),{plain:"Picture your notes as a slime mould finding food. It keeps the tubes that get used and lets the rest dry up. The links that stay thick are the ones your notes really rely on.",about:"A slime mould thickens the tubes that carry the most flow and lets the rest die. Here each written link is a tube and the hubs are the food: what survives is the shortest set of links that holds the vault together.",insights:h}}function qr(i,t,{hubs:e=!1}={}){let n=new Map(i.filter(o=>!Re(o)||e&&o.moc).map(o=>[o.id,o])),s=e?o=>o==="link"||o==="moc":o=>o==="link",r=new Map([...n.keys()].map(o=>[o,new Set]));for(let o of t)s(o.kind)&&o.source!==o.target&&r.has(o.source)&&r.has(o.target)&&(r.get(o.source).add(o.target),r.get(o.target).add(o.source));return{own:n,adj:r}}function Ls(i,t,{max:e=120,hubs:n=0}={}){let s=Ze(i),{own:r,adj:o}=qr(i,t,{hubs:!!n}),a=new Set,l=[];for(let M of[...o.keys()].sort()){if(a.has(M)||!o.get(M).size)continue;let _=[M];a.add(M);for(let g=0;g<_.length;g++)for(let y of o.get(_[g]))a.has(y)||(a.add(y),_.push(y));_.length>l.length&&(l=_)}let c=(M,_)=>s(r.get(_))-s(r.get(M))||(M<_?-1:1),h=M=>!!r.get(M).moc,u=[...l.filter(h).sort((M,_)=>o.get(_).size-o.get(M).size||(M<_?-1:1)).slice(0,n),...l.filter(M=>!h(M)).sort(c)].slice(0,e),f=new Map(u.map((M,_)=>[M,_])),m=[];for(let M of u)for(let _ of o.get(M))f.has(_)&&f.get(M)<f.get(_)&&m.push([f.get(M),f.get(_)]);return{ids:u,bars:m,own:r,imp:s}}function Bs(i,t,{radius:e=14,rest:n=3}={}){let s=i.length,r=i.map((o,a)=>{let l=en(o)%6283/1e3,c=e*Math.sqrt((a+1)/s);return[Math.cos(l)*c,Math.sin(l)*c]});for(let o=0;o<80;o++){let a=r.map(()=>[0,0]),l=.5*(1-o/80);for(let c=0;c<s;c++)for(let h=c+1;h<s;h++){let d=r[c][0]-r[h][0],u=r[c][1]-r[h][1],f=6/(d*d+u*u+.01);a[c][0]+=d*f,a[c][1]+=u*f,a[h][0]-=d*f,a[h][1]-=u*f}for(let[c,h]of t){let d=r[h][0]-r[c][0],u=r[h][1]-r[c][1],f=Math.hypot(d,u)||1e-6,m=(f-n)*.08;a[c][0]+=d*m,a[c][1]+=u*m,a[h][0]-=d*m,a[h][1]-=u*m}for(let c=0;c<s;c++){let h=Math.hypot(...a[c])||1,d=Math.min(h,l*4)/h;r[c][0]+=a[c][0]*d,r[c][1]+=a[c][1]*d}}return r}function Jd({pos:i,bars:t,fixed:e,loads:n},{iterations:s=2e3,tolerance:r=1e-10,sway:o=1e-9}={}){let a=i.length,l=new Uint8Array(a).fill(1);for(let p of e)l[p]=0;let c=t.map(([p,v])=>{let E=[0,1,2].map(S=>i[v][S]-i[p][S]),x=Math.hypot(...E)||1e-9;return{L:x,c:E.map(S=>S/x)}}),h=o,d=p=>{let v=new Float64Array(3*a);t.forEach(([E,x],S)=>{let{L:P,c:w}=c[S],U=0;for(let F=0;F<3;F++)U+=w[F]*(p[3*x+F]-p[3*E+F]);U/=P;for(let F=0;F<3;F++)v[3*x+F]+=w[F]*U,v[3*E+F]-=w[F]*U});for(let E=0;E<a;E++)for(let x=0;x<3;x++)v[3*E+x]=l[E]?v[3*E+x]+h*p[3*E+x]:0;return v},u=new Float64Array(3*a),f=0;for(let p=0;p<a;p++)if(l[p]&&n[p])for(let v=0;v<3;v++)u[3*p+v]=n[p][v],f+=u[3*p+v]**2;let m=new Float64Array(3*a),M=Float64Array.from(u),_=Float64Array.from(u),g=M.reduce((p,v)=>p+v*v,0);for(let p=0;p<s&&g>r*Math.max(f,1e-30);p++){let v=d(_),E=0;for(let w=0;w<_.length;w++)E+=_[w]*v[w];if(E<=0)break;let x=g/E,S=0;for(let w=0;w<m.length;w++)m[w]+=x*_[w],M[w]-=x*v[w],S+=M[w]*M[w];let P=S/g;g=S;for(let w=0;w<_.length;w++)_[w]=M[w]+P*_[w]}let y=Array.from({length:a},(p,v)=>[m[3*v],m[3*v+1],m[3*v+2]]),b=t.map(([p,v],E)=>{let{L:x,c:S}=c[E],P=0;for(let w=0;w<3;w++)P+=S[w]*(y[v][w]-y[p][w]);return P/x});return{u:y,force:b,residual:f?Math.sqrt(g/f):0}}function qd(i,t,{max:e=120,ground:n=.1}={}){let{ids:s,bars:r,own:o,imp:a}=Ls(i,t,{max:e}),l=s.length,c=Bs(s,r),h=Math.max(1e-9,...s.map(_=>a(o.get(_)))),d=10,u=s.map((_,g)=>[c[g][0],(.5-a(o.get(_))/h)*2*d,c[g][1]]),f=Math.min(l,Math.max(3,Math.round(l*n))),m=[...Array(f).keys()],M=s.map(_=>(o.get(_).tasks||0)+.1);return{ids:s,pos:u,bars:r,fixed:m,loads:M.map(_=>[0,-_,0]),weight:M,ground:m.map(_=>s[_])}}function jd(i,t){let e=i.bars.map(([a,l])=>Math.hypot(...[0,1,2].map(c=>i.pos[l][c]-i.pos[a][c]))),n=t.force.map(Math.abs),s=t.force.map((a,l)=>a<0?-a*e[l]*e[l]:0),r=a=>a.reduce((l,c,h)=>c>a[l]?h:l,0),o=t.u.map((a,l)=>i.fixed.includes(l)?0:Math.hypot(...a));return{len:e,carry:n,buckle:s,sag:o,busiest:n.length?r(n):-1,weakest:s.length&&Math.max(...s)>0?r(s):-1,sagging:o.length?r(o):-1}}var K_=.01,Qd="#60a5fa",nh="#f87171",Kd="#f59e0b",$d={id:"loadpaths",name:"Load paths",hint:"Which links carry the vault, and which note sags first",home:{yaw:.6,pitch:.65,dist:46,min:12,max:110},stage:{fog:[38,90]},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=qd(e.nodes,e.links);if(l.ids.length<4){let k=()=>mt(l.ids.length,"linked note");return t.stat(k()),t.controls({at:"centre",lines:["Load paths needs a set of notes joined by written links.",`${mt(l.ids.length,"note")} joined so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:k,today:()=>null,api:{empty:!0}}}let c=Jd(l,{sway:K_}),h=jd(l,c),d=new Map(e.nodes.map(k=>[k.id,k])),u=Ze(e.nodes),f=l.ids.length,m=k=>d.get(l.ids[k]).name,M=new Map(l.ids.map((k,C)=>[k,C])),_=k=>.3+.55*Math.sqrt(Math.max(0,u(d.get(l.ids[k])))),g=Math.max(...h.carry,1e-9),y=o.palette,b=new Ht,p=new Ge,v=new xt,E=new V(0,1,0),x=k=>(i.scene.add(k),k),S=new Set(l.fixed),P=x(new fe(new de(1,16,12),new Te({roughness:.45}),f)),w=x(new fe(new ve(1,1,1,8,1),new Te({roughness:.6}),Math.max(l.bars.length,1))),U=k=>.03+.17*Math.sqrt(h.carry[k]/g),F=n.selected&&M.has(n.selected)?M.get(n.selected):null,B=null,N=null,Z=k=>l.bars.map((C,nt)=>C[0]===k||C[1]===k?nt:-1).filter(C=>C>=0),H=k=>c.force[k]<0?"pushed":"pulled",J=k=>h.carry[k].toFixed(h.carry[k]<10?2:1),G=()=>{if(B!=null)return`${m(l.bars[B][0])} \u2013 ${m(l.bars[B][1])} \xB7 ${H(B)} with ${J(B)}`;let k=N??F;if(k!=null){let C=Z(k),nt=C.reduce((ut,ot)=>ut+h.carry[ot],0);return`${m(k)} \xB7 ${S.has(k)?"ground":`sags ${h.sag[k].toFixed(2)}`} \xB7 ${mt(C.length,"bar")} carrying ${nt.toFixed(1)}`}return`${mt(f,"note")} \xB7 ${mt(l.bars.length,"bar")} \xB7 ${mt(l.ground.length,"ground note")} \xB7 load ${l.weight.reduce((C,nt)=>C+nt,0).toFixed(1)}`};function I(){let k=N??F,C=new Set(k!=null?Z(k):B!=null?[B]:[]),nt=new Set(B!=null?l.bars[B]:[]);for(let dt=0;dt<f;dt++){let _t=_(dt)*(dt===k?1.4:1);b.makeScale(_t,_t,_t).setPosition(...l.pos[dt]),P.setMatrixAt(dt,b);let pt=(k!=null||B!=null)&&dt!==k&&!nt.has(dt)&&!Z(dt).some(Ct=>C.has(Ct));v.set(S.has(dt)?Kd:y[(d.get(l.ids[dt]).cluster||0)%y.length]),dt===k&&v.set(o.fg),pt&&v.multiplyScalar(.25),P.setColorAt(dt,v)}l.bars.forEach(([dt,_t],pt)=>{let Ct=new V(...l.pos[dt]),vt=new V(...l.pos[_t]),K=vt.clone().sub(Ct),Ft=K.length()||1e-6,Dt=U(pt)*(C.has(pt)?1.6:1);p.setFromUnitVectors(E,K.normalize()),b.compose(Ct.add(vt).multiplyScalar(.5),p,new V(Dt,Ft,Dt)),w.setMatrixAt(pt,b),v.set(c.force[pt]<0?nh:Qd),(k!=null||B!=null)&&!C.has(pt)&&v.multiplyScalar(.25),w.setColorAt(pt,v)});for(let dt of[P,w])dt.instanceMatrix.needsUpdate=!0,dt.instanceColor&&(dt.instanceColor.needsUpdate=!0);let ut=[],ot=(dt,_t,pt)=>ut.push({text:jt(_t,34),at:l.pos[dt],dy:-14,color:pt});if(k!=null)ut.push({text:jt(m(k),34),at:l.pos[k],strong:!0,dy:-18,run:()=>W(k),title:`Open ${m(k)}`});else if(B==null){if(h.sag[h.sagging]>0&&ot(h.sagging,`${m(h.sagging)} sags most`,o.fg),h.weakest>=0){let[dt,_t]=l.bars[h.weakest];ot(h.sag[dt]>=h.sag[_t]?dt:_t,"closest to buckling",nh)}}else for(let dt of l.bars[B])ot(dt,m(dt),o.fg);t.labels(ut),t.stat(G())}function W(k){F=k,B=null,I(),a(),s(l.ids[k])}let D=k=>[0,1,2].map(C=>(l.pos[l.bars[k][0]][C]+l.pos[l.bars[k][1]][C])/2),O=[...l.ids.map((k,C)=>({at:l.pos[C],r:_(C),key:{kind:"note",id:k,tip:`${m(C)} \xB7 ${S.has(C)?"ground":`sags ${h.sag[C].toFixed(2)}`}`}})),...l.bars.map((k,C)=>({at:D(C),r:Math.max(U(C)*2,.35),key:{kind:"bar",id:String(C),tip:`${m(k[0])} \u2013 ${m(k[1])} \xB7 ${H(C)} with ${J(C)}`}}))];return(()=>{let k=Zd({n:f,bars:l.bars,ground:l.ground,sag:h.sag,sagging:h.sagging,weakest:h.weakest,busiest:h.busiest,carry:h.carry},m);t.explain({plain:k.plain,about:k.about,legend:[{color:Qd,text:"pulled"},{color:nh,text:"pushed"},{color:Kd,text:"ground"},{color:o.muted,text:"thicker bar = more load"}],insights:k.insights.map(C=>({text:C.text,label:C.label,run:()=>{C.bar!=null?(B=C.bar,F=null,I(),a()):W(C.note)}}))})})(),I(),{targets:()=>O,click(k){k.kind==="note"?W(M.get(k.id)):k.kind==="bar"&&(B=+k.id,F=null,I(),a())},hover(k){let C=k&&k.kind==="note"?M.get(k.id):null;C!==N&&(N=C,I())},update(k){"selected"in k&&(F=k.selected&&M.has(k.selected)?M.get(k.selected):null,B=null,I())},stat:G,today:()=>h.busiest<0?null:{text:`${m(l.bars[h.busiest][0])} \u2013 ${m(l.bars[h.busiest][1])} carries the most (${J(h.busiest)}), ${H(h.busiest)}`,label:"Show it",run:()=>{B=h.busiest,F=null,I(),a()}},api:{truss:()=>l,solved:()=>c,read:()=>h,selected:()=>F==null?null:l.ids[F],bar:()=>B,notes:()=>l.ids},dispose(){P.material.dispose(),w.material.dispose()}}}};function $_(i,{sweeps:t=60,tolerance:e=1e-12}={}){let n=i.length,s=i.map(a=>Float64Array.from(a)),r=Array.from({length:n},(a,l)=>{let c=new Float64Array(n);return c[l]=1,c});for(let a=0;a<t;a++){let l=0;for(let c=0;c<n;c++)for(let h=c+1;h<n;h++)l+=s[c][h]*s[c][h];if(l<e*e)break;for(let c=0;c<n;c++)for(let h=c+1;h<n;h++){if(Math.abs(s[c][h])<1e-300)continue;let d=(s[h][h]-s[c][c])/(2*s[c][h]),u=Math.sign(d||1)/(Math.abs(d)+Math.sqrt(d*d+1)),f=1/Math.sqrt(u*u+1),m=u*f;for(let M=0;M<n;M++){let _=s[M][c],g=s[M][h];s[M][c]=f*_-m*g,s[M][h]=m*_+f*g}for(let M=0;M<n;M++){let _=s[c][M],g=s[h][M];s[c][M]=f*_-m*g,s[h][M]=m*_+f*g}for(let M=0;M<n;M++){let _=r[M][c],g=r[M][h];r[M][c]=f*_-m*g,r[M][h]=m*_+f*g}}}let o=[...Array(n).keys()].sort((a,l)=>s[a][a]-s[l][l]);return{values:o.map(a=>s[a][a]),vectors:o.map(a=>Array.from({length:n},(l,c)=>r[c][a]))}}function ty(i,t){let e=Array.from({length:i},()=>new Array(i).fill(0));for(let[n,s]of t)n!==s&&(e[n][n]++,e[s][s]++,e[n][s]--,e[s][n]--);return e}function ey(i,t){let{values:e,vectors:n}=$_(ty(i,t)),s=[];for(let r=0;r<i;r++){if(e[r]<1e-9)continue;let o=n[r],a=Math.max(...o.map(Math.abs))||1,l=o.find(c=>Math.abs(c)>1e-9*a)<0?-1:1;s.push({value:e[r],freq:Math.sqrt(e[r]),vector:o.map(c=>l*c/a)})}return s}function ih(i,t=.05){let e=[],n=[],s=[];return i.forEach((r,o)=>(r>t?e:r<-t?n:s).push(o)),{up:e,down:n,rest:s}}function tf(i,t,{max:e=100}={}){let{ids:n,bars:s}=Ls(i,t,{max:e});return{ids:n,bars:s,pos:Bs(n,s),modes:n.length>=3?ey(n.length,s):[]}}var sh="#f59e0b",rh="#38bdf8",ny=6,iy=.18,ef=44,nf={id:"modes",name:"Normal modes",hint:"How the vault would ring: its natural cuts into halves",home:{yaw:.7,pitch:.8,dist:50,min:14,max:110},stage:{fog:[40,100]},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=tf(e.nodes,e.links,{max:80}),c=l.ids.length;if(!l.modes.length){let st=()=>mt(c,"linked note");return t.stat(st()),t.controls({at:"centre",lines:["Normal modes needs a set of notes joined by written links.",`${mt(c,"note")} joined so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:st,today:()=>null,api:{empty:!0}}}let h=new Map(e.nodes.map(st=>[st.id,st])),d=st=>h.get(l.ids[st]).name,u=new Map(l.ids.map((st,R)=>[st,R])),f=new xt(sh),m=new xt(rh),M=new xt(o.bg).lerp(new xt(o.muted),.12),_=new Ht,g=new xt,y=st=>(i.scene.add(st),st),b=l.pos.map(st=>st[0]),p=l.pos.map(st=>st[1]),v=2,E=Math.min(...b)-v,x=Math.max(...b)+v,S=Math.min(...p)-v,P=Math.max(...p)+v,w=(E+x)/2,U=(S+P)/2,F=x-E,B=P-S,N=st=>[l.pos[st][0]-w,l.pos[st][1]-U],Z=Math.max(ny,iy*Math.max(F,B)),H=new Oi(F,B,ef,ef).rotateX(-Math.PI/2),J=H.attributes.position.count,G=new Float32Array(J*c);for(let st=0;st<J;st++){let R=H.attributes.position.getX(st),T=H.attributes.position.getZ(st),L=0;for(let j=0;j<c;j++){let[$,at]=N(j),gt=1/((R-$)**2+(T-at)**2+4);G[st*c+j]=gt,L+=gt}for(let j=0;j<c;j++)G[st*c+j]/=L}H.setAttribute("color",new kt(new Float32Array(J*3),3));let I=y(new qt(H,new Te({vertexColors:!0,roughness:.55,metalness:.05,side:ge,transparent:!0,opacity:.9}))),W=y(new qt(H,new Te({color:o.fg,wireframe:!0,transparent:!0,opacity:.12}))),D=y(new fe(new de(1,16,12),new Te({roughness:.4}),c)),O=new se;O.setAttribute("position",new mn(new Float32Array(l.bars.length*6),3));let Q=y(new He(O,new Fe({color:o.fg,transparent:!0,opacity:.55})));Q.frustumCulled=D.frustumCulled=I.frustumCulled=W.frustumCulled=!1;let k=st=>.4+(st<6?.2:0),C=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,nt=!1,ut=0,ot=0,dt=!C,_t=C?.25:0,pt=null,Ct=n.selected&&u.has(n.selected)?u.get(n.selected):null,vt=null,K=()=>l.modes[ot],Ft=()=>Math.sin(_t*2*Math.PI),Dt=new Float64Array(c),Yt=()=>ih(K().vector),Wt=st=>K().vector[st],Lt=()=>{let st=vt??Ct;if(st!=null)return`${d(st)} \xB7 ${Math.abs(Wt(st))<.05?"on a nodal line":Wt(st)>0?"swings up":"swings down"} ${Math.abs(Wt(st)).toFixed(2)} in mode ${ot+1}`;let R=Yt();return`Mode ${ot+1} of ${l.modes.length} \xB7 ${R.up.length} up, ${R.down.length} down \xB7 frequency ${K().freq.toFixed(2)}`};function Qt(){let st=Yt(),R=[ot===0?"The cleanest cut of the vault into two halves":`${mt(st.up.length,"note")} swinging up, ${mt(st.down.length,"note")} down, ${mt(st.rest.length,"note")} on a nodal line`];t.controls({lines:R,buttons:[{label:"\u25C0",title:"Previous mode (slower)",off:ot===0,run:()=>St(ot-1)},{label:`Mode ${ot+1}`,title:"Back to mode 1, the slowest",run:()=>St(0)},{label:"\u25B6",title:"Next mode (faster)",off:ot===l.modes.length-1,run:()=>St(ot+1)},{label:dt?"Hold":"Ring",title:dt?"Hold the sheet still":"Let the sheet ring",run:()=>{dt=!dt,pt=null,Qt(),a()}}]})}function ee(){let st=[],R=K().vector,T=R.indexOf(Math.max(...R)),L=R.indexOf(Math.min(...R)),j=vt??Ct,$=(at,gt,it)=>st.push({text:jt(gt,34),at:[N(at)[0],0,N(at)[1]],dy:-14,color:it});j!=null?st.push({text:jt(d(j),34),at:[N(j)[0],0,N(j)[1]],strong:!0,dy:-18,run:()=>Jt(j),title:`Open ${d(j)}`}):($(T,d(T),sh),L!==T&&$(L,d(L),rh)),t.labels(st)}function Ae(){let st=K().vector,R=H.attributes.color;for(let T=0;T<J;T++){let L=0;for(let j=0;j<c;j++)L+=G[T*c+j]*st[j];g.copy(M).lerp(L>=0?f:m,Math.min(1,Math.abs(L)**.8*1.25)),R.setXYZ(T,g.r,g.g,g.b)}R.needsUpdate=!0,X()}function Se(){let st=Yd({bars:l.bars,vector:K().vector,freq:K().freq,k:ot,count:l.modes.length},d);t.explain({plain:st.plain,about:st.about,legend:[{color:sh,text:"swings up"},{color:rh,text:"swings down"},{color:o.muted,text:"nodal line, still"}],insights:st.insights.map(R=>({text:R.text,label:R.label,run:()=>{R.note!=null?Jt(R.note):(Ct=null,St(ot))}}))})}function X(){ee(),t.stat(Lt())}function q(){let st=K().vector,R=Ft(),T=H.attributes.position;for(let j=0;j<J;j++){let $=0;for(let at=0;at<c;at++)$+=G[j*c+at]*st[at];T.setY(j,$*Z*R)}T.needsUpdate=!0,H.computeVertexNormals();let L=O.attributes.position;for(let j=0;j<c;j++)Dt[j]=st[j]*Z*R;l.bars.forEach(([j,$],at)=>{let[gt,it]=N(j),[ht,Mt]=N($);L.setXYZ(2*at,gt,Dt[j]+.05,it),L.setXYZ(2*at+1,ht,Dt[$]+.05,Mt)}),L.needsUpdate=!0;for(let j=0;j<c;j++){let[$,at]=N(j),gt=j===(vt??Ct),it=k(j)*(gt?1.5:1);_.makeScale(it,it,it).setPosition($,Dt[j]+it*.6,at),D.setMatrixAt(j,_),g.copy(M).lerp(st[j]>=0?f:m,Math.min(1,Math.abs(st[j])**.8*1.25+.25)),gt&&g.set(o.fg),D.setColorAt(j,g)}D.instanceMatrix.needsUpdate=!0,D.instanceColor&&(D.instanceColor.needsUpdate=!0)}function St(st){ot=Math.max(0,Math.min(l.modes.length-1,st)),Ae(),Se(),Qt(),q(),a()}function Jt(st){Ct=st,X(),q(),a(),s(l.ids[st])}let ct=()=>l.ids.map((st,R)=>{let[T,L]=N(R);return{at:[T,Dt[R]+.4,L],r:k(R)*1.2,key:{kind:"note",id:st,tip:`${d(R)} \xB7 ${Math.abs(Wt(R))<.05?"still":Wt(R)>0?"up":"down"} ${Math.abs(Wt(R)).toFixed(2)}`}}}),ne=()=>{nt=!0,clearTimeout(ut)},Rt=()=>{clearTimeout(ut),ut=setTimeout(()=>{nt=!1,pt=null,a()},1500)};return i.canvas.addEventListener("pointerdown",ne,!0),addEventListener("pointerup",Rt),addEventListener("pointercancel",Rt),Se(),Ae(),Qt(),q(),{targets:ct,click(st){st.kind==="note"&&Jt(u.get(st.id))},hover(st){let R=st&&st.kind==="note"?u.get(st.id):null;R!==vt&&(vt=R,X(),q())},update(st){"selected"in st&&(Ct=st.selected&&u.has(st.selected)?u.get(st.selected):null,X(),q())},frame(){if(dt&&!nt){let st=performance.now();pt!=null&&(_t=(_t+(st-pt)/1e3*.5*Math.min(2.2,.45+K().freq*.8))%1),pt=st,q(),a()}else pt=null},stat:Lt,today:()=>{let st=ih(l.modes[0].vector);return{text:`The vault's cleanest cut is ${st.up.length} notes against ${st.down.length}`,label:"Show it",run:()=>{Ct=null,St(0)}}},api:{modes:()=>l.modes,ids:()=>l.ids,mode:()=>ot,setMode:St,playing:()=>dt,moving:()=>dt&&!nt,hold(st){dt=!1,st!=null&&(_t=st),q(),Qt(),a()},span:()=>Math.max(F,B),rise:()=>Z,selected:()=>Ct==null?null:l.ids[Ct],heights:()=>Array.from(Dt),sheetHeights:()=>Array.from(H.attributes.position.array.filter((st,R)=>R%3===1)),split:Yt},dispose(){clearTimeout(ut),i.canvas.removeEventListener("pointerdown",ne,!0),removeEventListener("pointerup",Rt),removeEventListener("pointercancel",Rt);for(let st of[I,W,D,Q])st.material.dispose();H.dispose(),O.dispose()}}}};function oh(i,t,e,n,s){let r=[],o=new Array(i).fill(-1);for(let h=0;h<i;h++)h!==s&&(o[h]=r.length,r.push(h));let a=r.length,l=Array.from({length:a},()=>new Float64Array(a+1));t.forEach(([h,d],u)=>{let f=e[u];for(let[m,M]of[[h,d],[d,h]])o[m]>=0&&(l[o[m]][o[m]]+=f,o[M]>=0&&(l[o[m]][o[M]]-=f))}),o[n]>=0&&(l[o[n]][a]=1);for(let h=0;h<a;h++)l[h][h]<1e-300&&(l[h][h]=1);for(let h=0;h<a;h++){let d=h;for(let f=h+1;f<a;f++)Math.abs(l[f][h])>Math.abs(l[d][h])&&(d=f);[l[h],l[d]]=[l[d],l[h]];let u=l[h][h];if(!(Math.abs(u)<1e-300))for(let f=h+1;f<a;f++){let m=l[f][h]/u;if(m)for(let M=h;M<=a;M++)l[f][M]-=m*l[h][M]}}let c=new Float64Array(a);for(let h=a-1;h>=0;h--){let d=l[h][a];for(let u=h+1;u<a;u++)d-=l[h][u]*c[u];c[h]=Math.abs(l[h][h])<1e-300?0:d/l[h][h]}return Array.from({length:i},(h,d)=>o[d]>=0?c[o[d]]:0)}function sy(i,t,e,n,s,r){let o=oh(i,t,t.map((a,l)=>e[l]/n[l]),s,r);return t.map(([a,l],c)=>e[c]/n[c]*(o[a]-o[l]))}function ry(i,t,{lengths:e,pairs:n,steps:s=200,dt:r=.5,floor:o=1e-6,keep:a=40}={}){let l=e||t.map(()=>1),c=t.map(()=>1),h=[Float32Array.from(c)],d=Math.max(1,Math.floor(s/(a-1)));for(let u=0;u<s&&n.length;u++){let[f,m]=n[u%n.length],M=sy(i,t,c,l,f,m);for(let _=0;_<c.length;_++)c[_]=Math.max(o,c[_]+r*(Math.abs(M[_])-c[_]));(u+1)%d===0&&h.length<a&&h.push(Float32Array.from(c))}for(;h.length<a;)h.push(Float32Array.from(c));return h[h.length-1]=Float32Array.from(c),{D:c,frames:h,steps:s}}function oy(i,t=.1){let e=Math.max(...i,1e-12),n=Array.from(i,s=>s/e);return{share:n,kept:n.map(s=>s>=t)}}var ay=24;function sf(i,t,{max:e=80,hubs:n=6,hubMax:s=ay,steps:r=200}={}){let{ids:o,bars:a,own:l}=Ls(i,t,{max:e,hubs:s}),c=o.map((g,y)=>l.get(g).moc?y:-1).filter(g=>g>=0),h=c.length>=2?"hubs":"top",d=o.map((g,y)=>y).filter(g=>!c.includes(g)),u=h==="hubs"?c:d.slice(0,Math.min(n,d.length)),f=[];for(let g=0;g<u.length;g++)for(let y=g+1;y<u.length;y++)f.push([u[g],u[y]]);let m=f.length?ry(o.length,a,{pairs:f,steps:Math.max(r,f.length)}):{D:a.map(()=>1),frames:[Float32Array.from(a.map(()=>1))]},{share:M,kept:_}=oy(m.D);return{ids:o,bars:a,pos:Bs(o,a),hubs:u,fed:h,D:m.D,frames:m.frames,share:M,kept:_}}function rf(i=1){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function of(i,t){let e=Array.from({length:i},()=>[]);for(let[r,o]of t)e[r].push(o),e[o].push(r);let n=new Array(i).fill(-1),s=0;for(let r=0;r<i;r++){if(n[r]>=0)continue;let o=[r];for(n[r]=s;o.length;)for(let a of e[o.pop()])n[a]<0&&(n[a]=s,o.push(a));s++}return n}function Sl(i,t,e){if(e.length<2)return 0;let n=of(i,t),s=t.map(()=>1),r=0,o=0;for(let a=0;a<e.length;a++)for(let l=a+1;l<e.length;l++)o++,r+=n[e[a]]!==n[e[l]]?i:oh(i,t,s,e[a],e[l])[e[a]];return r/o}function af(i,t,e){if(i<2||new Set(of(i,t)).size!==1)return null;let n=i-1,s=Array.from({length:n},(c,h)=>{let d=new Float64Array(2*n);return d[n+h]=1,d});for(let[c,h]of t){let d=c-1,u=h-1;d>=0&&s[d][d]++,u>=0&&s[u][u]++,d>=0&&u>=0&&(s[d][u]--,s[u][d]--)}for(let c=0;c<n;c++){let h=c;for(let u=c+1;u<n;u++)Math.abs(s[u][c])>Math.abs(s[h][c])&&(h=u);[s[c],s[h]]=[s[h],s[c]];let d=s[c][c];for(let u=0;u<2*n;u++)s[c][u]/=d;for(let u=0;u<n;u++){if(u===c||!s[u][c])continue;let f=s[u][c];for(let m=0;m<2*n;m++)s[u][m]-=f*s[c][m]}}let r=(c,h)=>c===0||h===0?0:s[c-1][n+h-1],o=(c,h)=>r(c,c)+r(h,h)-2*r(c,h),a=[];for(let c=0;c<e.length;c++)for(let h=c+1;h<e.length;h++)a.push([e[c],e[h]]);let l=c=>a.length?a.reduce((h,[d,u])=>h+c(d,u),0)/a.length:0;return{base:l(o),after:([c,h])=>{let d=o(c,h);return l((u,f)=>{let m=r(u,c)-r(u,h)-r(f,c)+r(f,h);return o(u,f)-m*m/(1+d)})}}}var ks=(i,t)=>i<t?i+","+t:t+","+i;function ly(i,t,e,n=null){let s=(r,o)=>r!==o&&!t.has(ks(r,o))&&!(n&&(n.has(r)||n.has(o)));for(let r=0;r<200;r++){let o=Math.floor(e()*i),a=Math.floor(e()*i);if(s(o,a))return[o,a]}for(let r=0;r<i;r++)for(let o=r+1;o<i;o++)if(s(r,o))return[r,o];return null}function cy(i,t,e,n,{shuffles:s=50,seed:r=1,fast:o,skip:a=null}={}){let l=o===void 0?af(i,t,e):o,c=l?l.base:Sl(i,t,e),h=g=>l?l.after(g):Sl(i,[...t,g],e),d=new Set(t.map(([g,y])=>ks(g,y))),u=a&&a.length?new Set(a):null;if(n[0]===n[1]||d.has(ks(n[0],n[1]))||u&&(u.has(n[0])||u.has(n[1])))return{gain:0,p:1,valid:!1};let f=c-h(n),m=rf(r),M=0,_=new Set(d);_.add(ks(n[0],n[1]));for(let g=0;g<s;g++){let y=ly(i,_,m,u);if(!y)break;c-h(y)>=f&&M++}return{gain:f,p:(1+M)/(1+s),valid:!0}}function hy(i,t,e,n,{shuffles:s=50,seed:r=1,alpha:o=.05,minGain:a=.001,skip:l=null}={}){let c=af(i,t,e);return n.map(h=>({link:h,...cy(i,t,e,h,{shuffles:s,seed:r,fast:c,skip:l})})).filter(h=>h.valid&&h.p<o&&h.gain>=a).sort((h,d)=>d.gain-h.gain||h.p-d.p)}function uy(i,t,{max:e=200,seed:n=1,skip:s=null}={}){let r=new Set(t.map(([c,h])=>ks(c,h))),o=[],a=new Set(s||[]);for(let c=0;c<i;c++)if(!a.has(c))for(let h=c+1;h<i;h++)!a.has(h)&&!r.has(ks(c,h))&&o.push([c,h]);if(o.length<=e)return o;let l=rf(n);for(let c=o.length-1;c>0;c--){let h=Math.floor(l()*(c+1));[o[c],o[h]]=[o[h],o[c]]}return o.slice(0,e).sort((c,h)=>c[0]-h[0]||c[1]-h[1])}function lf(i,t,e,{steps:n=5,max:s=200,shuffles:r=50,seed:o=1,alpha:a=.05,minGain:l=.001,skip:c=null}={}){let h=t.map(([f,m])=>[f,m]),d=[],u=Sl(i,h,e);for(let f=0;f<n;f++){let m=hy(i,h,e,uy(i,h,{max:s,seed:o+f,skip:c}),{shuffles:r,seed:o+f,alpha:a,minGain:l,skip:c})[0];if(!m)break;h=[...h,m.link],d.push(m)}return{added:d,before:u,after:Sl(i,h,e)}}var dy=8,cf=.1,hf={id:"slime",name:"Slime mould",hint:"Which written links carry the vault, and which fade away",home:{yaw:.6,pitch:.75,dist:46,min:14,max:110},stage:{fog:[40,100]},actions:["graph","add-link","decline-link"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=sf(e.nodes,e.links,{max:80}),c=l.ids.length,h=l.frames.length-1;if(c<3||l.hubs.length<2){let L=()=>mt(c,"linked note");return t.stat(L()),t.controls({at:"centre",lines:["Slime mould needs a set of notes joined by written links.",`${mt(c,"note")} joined so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:L,today:()=>null,api:{empty:!0}}}let d=new Map(e.nodes.map(L=>[L.id,L])),u=L=>d.get(l.ids[L]).name,f=new Map(l.ids.map((L,j)=>[L,j])),m=l.fed==="hubs"?"hubs":"most linked notes",M=new Set(l.hubs),_=Math.max(...l.D,1e-12),g=L=>(i.scene.add(L),L),y=l.pos.map(L=>L[0]),b=l.pos.map(L=>L[1]),p=(Math.min(...y)+Math.max(...y))/2,v=(Math.min(...b)+Math.max(...b))/2,E=20,x=Math.max(1e-9,...l.pos.map(L=>Math.hypot(L[0]-p,L[1]-v))),S=E/x,P=L=>[(l.pos[L][0]-p)*S,(l.pos[L][1]-v)*S],w=9,U=new Float64Array(c),F=[],B=L=>[P(L)[0],U[L],P(L)[1]],N=()=>{let L=new Float64Array(c);l.bars.forEach(([$,at],gt)=>{let it=Yt[gt]/_;L[$]+=it,L[at]+=it});let j=Math.max(...L,1e-9);for(let $=0;$<c;$++)U[$]=w*Math.sqrt(L[$]/j)*(M.has($)?1:.85)},Z=new Ht,H=new xt,J=new xt(o.bg).lerp(new xt(o.muted),.55),G=new xt("#f59e0b"),I=new xt(o.accent||"#38bdf8"),W=new xt(o.fg),D=new V(0,1,0),O=new V,Q=new V,k=new Ge,C=new V,nt=g(new fe(new ve(1,1,1,10,1),new Te({roughness:.5}),l.bars.length)),ut=g(new fe(new de(1,16,12),new Te({roughness:.4}),c));nt.frustumCulled=ut.frustumCulled=!1;let ot=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,dt=ot?h:0,_t=!ot,pt=null,Ct=n.selected&&f.has(n.selected)?f.get(n.selected):null,vt=null,K=()=>{let L=l.frames[Math.floor(dt)],j=l.frames[Math.min(h,Math.floor(dt)+1)],$=dt-Math.floor(dt);return Array.from(L,(at,gt)=>at+(j[gt]-at)*$)},Ft=L=>L.filter(j=>j/_>=cf).length,Dt=L=>M.has(L)?.75:.4,Yt=K();N();let Wt=()=>{let L=vt??Ct;if(L!=null){let j=l.bars.map((at,gt)=>at[0]===L||at[1]===L?gt:-1).filter(at=>at>=0),$=j.filter(at=>Yt[at]/_>=cf).length;return`${u(L)} \xB7 ${M.has(L)?"hub \xB7 ":""}${$} of ${mt(j.length,"link")} carry on`}return`${Ft(Yt)} of ${mt(l.bars.length,"link")} carry on \xB7 fed by ${l.hubs.length} ${m} \xB7 step ${Math.round(dt)} of ${h}`};function Lt(){let L=dt>=h;t.controls({lines:[L?`The links that carry flow between the ${m}`:"Tubes thicken where flow is high and thin where it is not"],buttons:[{label:_t&&!L?"Hold":L?"Grow again":"Play",title:_t&&!L?"Hold the growth":L?"Start again from tubes of equal width":"Let the mould grow",run:()=>{dt>=h&&(dt=0),_t=!(_t&&!L),pt=null,ee(),a()}},{label:"Start",title:"Back to tubes of equal width",off:dt===0,run:()=>{dt=0,_t=!1,pt=null,ee(),a()}},{label:"End",title:"Jump to the finished backbone",off:dt>=h,run:()=>{dt=h,_t=!1,ee(),a()}},{label:"Simulate",title:`Find links that would shorten the routes between your ${m}, and test each against random links`,run:st}]})}function Qt(){let L=[],j=vt??Ct;F.length=0;let $=(at,gt)=>{gt.at=B(at),F.push([at,gt.at]),L.push(gt)};for(let at of l.hubs.slice(0,4))at!==j&&$(at,{text:jt(u(at),30),dy:-16,color:o.accent});j!=null&&$(j,{text:jt(u(j),34),strong:!0,dy:-20,run:()=>Se(j),title:`Open ${u(j)}`}),t.labels(L)}function ee(){Yt=K(),Ae(),Qt(),Lt(),t.stat(Wt())}function Ae(){N(),l.bars.forEach(([L,j],$)=>{let[at,gt,it]=B(L),[ht,Mt,z]=B(j),ft=Math.min(1,Yt[$]/_),lt=.05+.4*Math.sqrt(ft);O.set(ht-at,Mt-gt,z-it);let wt=O.length()||1e-6;O.normalize(),Q.set((at+ht)/2,(gt+Mt)/2,(it+z)/2),k.setFromUnitVectors(D,O),C.set(lt,wt,lt),Z.compose(Q,k,C),nt.setMatrixAt($,Z),H.copy(J).lerp(G,Math.min(1,Math.sqrt(ft)*1.1)),nt.setColorAt($,H)}),nt.instanceMatrix.needsUpdate=!0,nt.instanceColor&&(nt.instanceColor.needsUpdate=!0);for(let L=0;L<c;L++){let[j,$,at]=B(L),gt=L===(vt??Ct),it=Dt(L)*(gt?1.4:1);Z.makeScale(it,it,it).setPosition(j,$,at),ut.setMatrixAt(L,Z),H.copy(M.has(L)?I:J).lerp(W,M.has(L)?0:.35),gt&&H.copy(W),ut.setColorAt(L,H)}for(let[L,j]of F)j[1]=U[L];ut.instanceMatrix.needsUpdate=!0,ut.instanceColor&&(ut.instanceColor.needsUpdate=!0)}function Se(L){Ct=L,ee(),a(),s(l.ids[L])}let X=()=>l.ids.map((L,j)=>({at:B(j),r:Dt(j)*1.3,key:{kind:"note",id:L,tip:`${u(j)}${M.has(j)?" \xB7 hub":""}`}})),q=Xd({n:c,bars:l.bars,kept:l.kept,hubs:l.hubs,order:l.ids.map((L,j)=>j)},u),St=null,Jt=new Set,ct=()=>{Jt.clear();for(let L of n.declined||[])Jt.add(L.from+">"+L.to)};ct();let ne=()=>St?St.rows.filter(L=>!Jt.has(L.from+">"+L.to)):[],Rt=L=>{let j=L.from+">"+L.to,$=[f.get(L.from),f.get(L.to)],at=`about 1 in ${Math.max(2,Math.round(1/L.p))}`;return{text:`Link ${u($[0])} to ${u($[1])}: routes between your ${m} get ${Math.max(1,Math.round(L.pct*100))}% shorter. A random link would do this ${at} times.`,label:"Add link",title:`Add a link between ${u($[0])} and ${u($[1])}`,run:()=>{Jt.add(j),R(),r("add-link",{from:L.from,to:L.to})},extra:[{label:"Decline",title:"Skip this link",run:()=>{Jt.add(j),R(),r("decline-link",{from:L.from,to:L.to})}},{label:"Show",title:`Show ${u($[0])}`,run:()=>Se($[0])}]}};function st(){let L=lf(c,l.bars,l.hubs,{steps:5,max:200,shuffles:50,seed:1,skip:l.fed==="hubs"?l.hubs:null}),j=L.before;St={rows:L.added.map(at=>{let gt={from:l.ids[at.link[0]],to:l.ids[at.link[1]],p:at.p,pct:j>0?at.gain/j:0};return j-=at.gain,gt})},ct(),R(),t.card(!0)}function R(){let L=ne(),j=St&&!L.length?[{text:St.rows.length?"No more links to test.":`No link does better than a random one would. Your ${m} already reach each other about as well as links can.`,label:"Show it",run:()=>{Ct=null,dt=h,_t=!1,ee(),a()}}]:[];t.explain({plain:q.plain,about:q.about,legend:T,insights:[...L.map(Rt),...j,...q.insights.map($=>({text:$.text,label:$.label,run:()=>{$.note!=null?Se($.note):(Ct=null,dt=h,_t=!1,ee(),a())}}))]})}let T=[{color:"#f59e0b",text:"carries flow (higher = more)"},{color:o.muted,text:"fading"},{color:o.accent||"#38bdf8",text:"hub"}];return R(),ee(),{targets:X,click(L){L.kind==="note"&&Se(f.get(L.id))},hover(L){let j=L&&L.kind==="note"?f.get(L.id):null;j!==vt&&(vt=j,ee())},update(L){"declined"in L&&(n={...n,declined:L.declined},St&&(ct(),R())),"selected"in L&&(Ct=L.selected&&f.has(L.selected)?f.get(L.selected):null,ee())},frame(){if(_t&&dt<h){let L=performance.now();pt!=null&&(dt=Math.min(h,dt+(L-pt)/1e3*dy)),pt=L,dt>=h?(_t=!1,ee()):(Yt=K(),Ae(),t.stat(Wt())),a()}else pt=null},stat:Wt,today:()=>({text:`${Ft(l.frames[h])} of ${mt(l.bars.length,"link")} carry the vault between its ${l.hubs.length} ${m}`,label:"Show it",run:()=>{Ct=null,dt=h,_t=!1,ee()}}),api:{ids:()=>l.ids,hubs:()=>l.hubs.map(L=>l.ids[L]),step:()=>dt,steps:()=>h,playing:()=>_t&&dt<h,widths:()=>Array.from(Yt),final:()=>Array.from(l.D),setStep(L){dt=Math.max(0,Math.min(h,L)),_t=!1,ee(),a()},hold(){_t=!1,ee()},selected:()=>Ct==null?null:l.ids[Ct],carrying:()=>Ft(Yt),links:()=>l.bars.length},dispose(){for(let L of[nt,ut])L.material.dispose(),L.geometry.dispose()}}}};function bl(i,{linkedOnly:t=!0}={}){let e=Ze(i.nodes),n=new Map;for(let s of i.nodes)s.moc&&!n.has(s.cluster)&&n.set(s.cluster,s);return[...i.clusters].sort((s,r)=>r.size-s.size||s.id-r.id).map(s=>({cluster:s.id,name:s.label||s.name,moc:n.get(s.id)||null,notes:i.nodes.filter(r=>r.cluster===s.id&&!Re(r)&&!(t&&r.isolated)).sort((r,o)=>e(o)-e(r)||(r.id<o.id?-1:1))})).filter(s=>s.notes.length)}var wl=(i,t=1)=>{let e=Math.max(1,Math.ceil(Math.sqrt(i*t)));return{cols:e,rows:Math.ceil(i/e)}},jr=i=>{let t=en(i),e=Math.imul(t^t>>>15,2246822507)>>>0;return[(t>>>4)%1e3/1e3,(e>>>7)%1e3/1e3]};function uf(i){let{cols:t,rows:e}=wl(i),n=(t-1)/2,s=(e-1)/2,r=[];for(let o=0;o<e;o++)for(let a=0;a<t;a++)r.push([a-n,o-s]);return r.sort((o,a)=>Math.hypot(o[0],o[1])-Math.hypot(a[0],a[1])||o[1]-a[1]||o[0]-a[0]).slice(0,i)}var ah=2.4,fy=["#22d3ee","#f472b6","#facc15","#a5f3fc"],df="#fb7185",ff="#facc15",py=(i,t,e)=>e(i)?0:t(i)>.3?2:1;function my(i,{hall:t=!1,now:e=Date.now()}={}){let n=Ze(i.nodes),s=Fs(i.nodes),r=wi(i),o=bl(i),a=Math.max(...o.map(p=>wl(p.notes.length).cols),2)*ah+3,{cols:l,rows:c}=wl(Math.max(o.length,1),.8),h=[],d=[],u=new Set,f=-(l-1)*a/2,m=-(c-1)*a/2;o.forEach((p,v)=>{p.x=f+v%l*a,p.z=m+Math.floor(v/l)*a,d.push({x:p.x,z:p.z,size:a-1.2,d:v});let E=uf(p.notes.length);if(p.notes.forEach((x,S)=>{let P=Math.max(.7,Math.min(1.8,.35+Math.log1p(x.words||0)*.2)),w=.9+9*Math.sqrt(Math.max(0,n(x))),[U,F]=E[S];h.push({n:x,x:p.x+U*ah,z:p.z+F*ah,w:P,h:w,kind:"tower",d:v,level:py(x,s,r)}),u.add(x.id)}),p.moc){let x=Math.max(3,...h.filter(S=>S.d===v).map(S=>S.h));h.push(t?{n:p.moc,x:p.x,z:p.z+a/2-1.3,w:1.4,h:1.1,kind:"hall",d:v,level:2}:{n:p.moc,x:p.x,z:p.z-a/2+1.6,w:.9,h:x+3,kind:"spire",d:v,level:2}),u.add(p.moc.id)}p.cars=Math.round(2+10*Math.min(1,p.notes.reduce((x,S)=>x+s(S),0)/6))});let M=m+(c-1)*a+a/2+3,_=Math.max(l*a-4,8);for(let p of i.nodes){if(Re(p)||u.has(p.id))continue;let[v]=jr("stall:"+p.id);h.push({n:p,x:f-a/2+2+v*_,z:M+en(p.id)%3*1.4,w:.7,h:.8,kind:"stall",d:-1,level:1})}let g=e-7*864e5,y=p=>typeof p.n.born=="string"?Date.parse(p.n.born):NaN,b=h.filter(p=>p.kind==="tower"&&y(p)>=g).sort((p,v)=>y(v)-y(p)).slice(0,15).map(p=>p.n.id);return{towers:h,pads:d,districts:o,cell:a,front:M,fresh:b,bounds:{x:[f-a/2,-f+a/2],z:[m-a/2,M+3]}}}function gy(i,t){let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d");n.fillStyle=t.wall,n.fillRect(0,0,128,128);for(let r=0;r<8;r++)for(let o=0;o<8;o++){let a=en(`${i}:${o}:${r}`)%1e3/1e3,l=a<i;n.fillStyle=l?t.lit[(o+r*3)%t.lit.length]:t.pane,n.globalAlpha=l?.55+.45*(a/i):.5,n.fillRect(o*16+3,r*16+3,10,11)}let s=new fr(e);return s.wrapS=s.wrapT=ms,s.colorSpace=ze,s.magFilter=Ue,s}var Ei=(i,t,e)=>new xt(i).lerp(new xt(t),e),xy={id:"cyberpunk",name:"Cyberpunk",hint:"A neon city: topics are districts, notes are towers, stale ones go dark",stage:{fog:[55,170],ambient:.4},tower:"tower",hall:!1,cranes:!1,sheet:{wall:"#2a2a36",pane:"#3a3a4a",lit:fy},beacon:df,beaconName:"pink",stall:ff,arc:"#22d3ee",wall:(i,t)=>Ei(i,"#ffffff",t===0?.55:.3).multiplyScalar(t===0?.5:1),lane:(i,t,e,n)=>({y:4+t*8,z:(i-.5)*(n-3),c:e%3?"#fca5a5":"#e0f2fe"}),stat:i=>`${mt(i.towers,"tower")} \xB7 ${i.dark} dark \xB7 ${mt(i.districts,"district")}`,plain:"Picture your notes as a city. A tall tower is a note everything else leans on. Lit windows mean someone has been in it lately; a dark tower has been left alone for a long time.",about:"Each topic is a district and each note a tower. Height is how many notes link to it and how much runs through it; lit windows are how recently it was edited; dark is stale. A pink beacon on a roof is an open task, the tall thin spire is the topic's map, and a stall on the street is a note in no topic.",legend:[{color:"#22d3ee",text:"height = relied on, windows = recent"},{color:"#6b7280",text:"dark = stale"},{color:df,text:"beacon = open task"},{color:ff,text:"stall = no topic"}]},_y="#e5e7eb",pf="#facc15",lh=i=>({id:i.id,name:i.name,hint:i.hint,home:{yaw:.55,pitch:.38,dist:58,min:12,max:140},stage:i.stage,actions:["graph"],build({stage:t,frame:e,data:n,inputs:s,onOpen:r,onAction:o,theme:a,invalidate:l}){let c=my(n,{hall:i.hall}),h=c.towers,d=h.filter(q=>q.kind!=="stall");if(d.length<3){let q=()=>mt(h.length,"note");return e.stat(q()),e.controls({at:"centre",lines:[`${i.name} needs notes in topics, linked to one another.`,`${mt(d.length,i.tower)} so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>o("graph")}]}),{targets:()=>[],click(){},update(){},stat:q,today:()=>null,api:{empty:!0}}}let u=new Map(h.map(q=>[q.n.id,q])),f=q=>q.n.name,m=q=>(t.scene.add(q),q),M=q=>q.kind==="stall"?i.stall:q.kind==="hall"?_y:a.palette[(q.n.cluster||0)%a.palette.length],_=new Map,g=(q,St)=>{_.has(q)||_.set(q,new Set),_.get(q).add(St)};for(let q of n.links)q.kind!=="wanted"&&u.has(q.source)&&u.has(q.target)&&(g(q.source,q.target),g(q.target,q.source));let y=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,b=new Ht,p=typeof s.hour=="number"?s.hour:new Date().getHours(),v=p<5||p>=21,E=new xt(a.bg).getHSL({}).l<.5,x=i.sky?i.sky(p):null,S=null;x&&(t.sky({top:Ei(a.bg,x,E?0:.3),haze:Ei(a.bg,x,E?.035:.1),stars:v&&E?160:0}),S=m(new qt(new In(Math.max(c.bounds.x[1]-c.bounds.x[0],c.cell*3)*4,48).rotateX(-Math.PI/2),new le({color:Ei(i.ground,a.bg,E?.94:.45)}))),S.position.set((c.bounds.x[0]+c.bounds.x[1])/2,-.16,c.front),S.userData.backdrop=!0);let P=m(new fe(new cn(1,.1,1),new le,c.pads.length));c.pads.forEach((q,St)=>{P.setMatrixAt(St,b.makeScale(q.size,1,q.size).setPosition(q.x,-.05,q.z)),P.setColorAt(St,Ei(a.palette[c.districts[q.d].cluster%a.palette.length],a.bg,.86))});let w=m(new qt(new cn(c.bounds.x[1]-c.bounds.x[0],.1,5),new le({color:Ei(i.stall,a.bg,.9)})));w.position.set((c.bounds.x[0]+c.bounds.x[1])/2,-.06,c.front+.5);let U=[0,1,2].map(q=>{let St=h.filter(R=>R.level===q&&(R.kind==="tower"||R.kind==="spire")),Jt=[],ct=[],ne=[];St.forEach(R=>{let T=R.w/2,L=en(R.n.id)%8/8;for(let[j,$,at,gt]of[[-T,-T,T,-T],[T,-T,T,T],[T,T,-T,T],[-T,T,-T,-T]]){let it=Jt.length/3,ht=Math.hypot(at-j,gt-$)/4,Mt=R.h/4;Jt.push(R.x+j,0,R.z+$,R.x+at,0,R.z+gt,R.x+at,R.h,R.z+gt,R.x+j,R.h,R.z+$),ct.push(L,0,L+ht,0,L+ht,Mt,L,Mt),ne.push(it,it+1,it+2,it,it+2,it+3)}});let Rt=new se().setAttribute("position",new kt(Jt,3)).setAttribute("uv",new kt(ct,2)).setAttribute("color",new kt(new Float32Array(Jt.length),3));Rt.setIndex(ne);let st=m(new qt(Rt,new le({map:gy([.04,.28,.7][q],i.sheet),vertexColors:!0,side:ge})));return st.frustumCulled=!1,{list:St,geo:Rt,mesh:st}}),F=m(new fe(new cn(1,1,1),new le,h.length));F.frustumCulled=!1;let B=h.filter(q=>q.n.tasks>0),N=m(new fe(new de(1,10,8),new le({color:i.beacon}),Math.max(B.length,1)));N.count=B.length,N.frustumCulled=!1,B.forEach((q,St)=>N.setMatrixAt(St,b.makeScale(.28,.28,.28).setPosition(q.x,q.h+.35,q.z)));let Z=c.districts.flatMap(q=>Array.from({length:q.cars},(St,Jt)=>{let[ct,ne]=jr(`car:${q.cluster}:${Jt}`);return{d:q,u:ct,v:(.02+ne*.05)*(Jt%2?1:-1),...i.lane(ct,ne,Jt,c.cell)}})),H=m(new fe(new cn(.7,.12,.14),new le,Math.max(Z.length,1)));H.count=Z.length,H.frustumCulled=!1,Z.forEach((q,St)=>H.setColorAt(St,new xt(q.c)));let J=m(new He(new se,new Fe({color:i.arc,transparent:!0,opacity:.9})));J.frustumCulled=!1;let G=i.cranes?c.fresh.map(q=>u.get(q)):[],I=h.filter(q=>q.kind==="hall"),W=[];for(let q of G)W.push([q.x+q.w/2,q.h+.8,q.z+q.w/2,.09,1.6,.09,pf],[q.x+q.w/2-.45,q.h+1.55,q.z+q.w/2,1.5,.09,.09,pf]);for(let q of I)W.push([q.x,q.h+.7,q.z,.07,1.4,.07,"#94a3b8"],[q.x+.32,q.h+1.2,q.z,.6,.36,.05,a.palette[c.districts[q.d].cluster%a.palette.length]]);let D=m(new fe(new cn(1,1,1),new le,Math.max(W.length,1)));D.count=W.length,D.frustumCulled=!1,W.forEach(([q,St,Jt,ct,ne,Rt,st],R)=>{D.setMatrixAt(R,b.makeScale(ct,ne,Rt).setPosition(q,St,Jt)),D.setColorAt(R,new xt(st))});let O=h.filter(q=>q.kind==="tower").sort((q,St)=>St.h-q.h)[0]||null,Q=s.selected&&u.has(s.selected)?s.selected:null,k=null,C=null,nt=y,ut=()=>k||Q,ot=new Set,dt=q=>(C==null||q.d===C||q.d<0)&&(!ut()||ot.has(q.n.id)),_t=h.filter(q=>q.kind==="tower"&&q.level===0),pt=q=>_t.filter(St=>St.d===q),Ct=()=>{let q=ut()&&u.get(ut());return q&&(q.kind==="spire"||q.kind==="hall")?`${f(q)} \xB7 map of ${mt(c.districts[q.d].notes.length,"note")}`:q?`${f(q)} \xB7 ${mt(q.n.inlinks||0,"link")} in \xB7 ${q.level===0?"dark":q.level===2?"busy":"dim"}${q.n.tasks?` \xB7 ${mt(q.n.tasks,"open task")}`:""}`:i.stat({towers:h.filter(St=>St.kind==="tower").length,dark:_t.length,districts:c.districts.length,fresh:c.fresh.length,tallest:O?jt(f(O),22):""})};function vt(){let q=ut();if(ot.clear(),q){ot.add(q);for(let ct of _.get(q)||[])ot.add(ct)}for(let ct of U){let ne=ct.geo.getAttribute("color"),Rt=0;ct.list.forEach(st=>{let R=i.wall(M(st),st.level).multiplyScalar(dt(st)?1:.16);for(let T=0;T<16;T++)ne.setXYZ(Rt++,R.r,R.g,R.b)}),ne.needsUpdate=!0}h.forEach((ct,ne)=>{let Rt=ct.kind==="stall"||ct.kind==="hall",st=Rt?ct.w:ct.w*1.04;F.setMatrixAt(ne,b.makeScale(st,Rt?ct.h:.12,st).setPosition(ct.x,Rt?ct.h/2:ct.h+.06,ct.z)),F.setColorAt(ne,Ei(M(ct),a.bg,dt(ct)?ct.level===0?.55:0:.85))}),F.instanceMatrix.needsUpdate=!0,F.instanceColor.needsUpdate=!0;let St=[];if(q){let ct=u.get(q);for(let ne of _.get(q)||[]){let Rt=u.get(ne),st=[ct.x,ct.h,ct.z],R=[Rt.x,Rt.h,Rt.z],T=[(ct.x+Rt.x)/2,Math.max(ct.h,Rt.h)+3+Math.hypot(ct.x-Rt.x,ct.z-Rt.z)*.25,(ct.z+Rt.z)/2],L=st;for(let j=1;j<=12;j++){let $=j/12,at=[0,1,2].map(gt=>(1-$)*(1-$)*st[gt]+2*(1-$)*$*T[gt]+$*$*R[gt]);St.push(...L,...at),L=at}}}J.geometry.setAttribute("position",new kt(St,3)),J.visible=St.length>0;let Jt=c.districts.map((ct,ne)=>({d:ct,i:ne})).filter(ct=>C==null||C===ct.i).map(({d:ct})=>({text:jt(ct.name,28)+(i.hall&&!ct.moc?" \xB7 no map":""),at:[ct.x,.4,ct.z+c.cell/2-.6],color:Ei(a.palette[ct.cluster%a.palette.length],"#ffffff",.45).getStyle(),dy:6}));if(q){let ct=u.get(q);Jt.unshift({text:jt(f(ct),34),at:[ct.x,ct.h,ct.z],strong:!0,dy:-18,run:()=>K(q),title:`Open ${f(ct)}`})}e.labels(Jt),e.stat(Ct()),e.chip(C==null?null:`District: ${jt(c.districts[C].name,24)}`,()=>{C=null,vt(),l()})}function K(q){Q=q,vt(),l(),r(q)}let Ft=q=>{C=null,Q=q,vt(),l()},Dt=q=>{C=q,Q=null,vt(),l()},Yt=c.districts.map((q,St)=>[pt(St).length,St]).sort((q,St)=>St[0]-q[0])[0],Wt=h.filter(q=>q.kind==="stall"),Lt=[..._t].sort((q,St)=>St.h-q.h)[0],Qt=[];Yt&&Yt[0]&&Qt.push({text:`${c.districts[Yt[1]].name} is the darkest district: ${mt(Yt[0],"stale note")}. Open the tallest and decide whether it is still true.`,label:"Show district",run:()=>Dt(Yt[1])}),Lt&&Lt.h>3&&Qt.push({text:`${f(Lt)} stands tall yet has gone dark: other notes lean on it and it has not been edited in ${Lt.n.age} days.`,label:"Open note",run:()=>K(Lt.n.id)}),B.length&&Qt.push({text:`${mt(B.length,i.tower)} with a ${i.beaconName} beacon: an open task. The tallest is the one the most notes wait on.`,label:"Open note",run:()=>K([...B].sort((q,St)=>St.h-q.h)[0].n.id)}),Wt.length&&Qt.push({text:`${mt(Wt.length,"note")} stand as stalls on the street, in no topic. Link each to a topic's notes and it gets a ${i.tower}.`,label:"Open note",run:()=>K(Wt[0].n.id)}),i.cranes&&O&&Qt.unshift({text:`${f(O)} is the tallest ${i.tower}: ${mt(O.n.inlinks||0,"note")} link to it.`,label:"Show tallest",run:()=>Ft(O.n.id)}),G.length&&Qt.push({text:`${mt(G.length,i.tower)} went up this week, each with a crane. The newest is ${f(G[0])}: link it to the notes it belongs with.`,label:"Open note",run:()=>K(G[0].n.id)});let ee=c.districts.filter(q=>!q.moc);i.hall&&ee.length&&Qt.push({text:`${mt(ee.length,"district")} have no town hall: the topic has no map note. The biggest is ${ee[0].name}.`,label:"Show district",run:()=>Dt(c.districts.indexOf(ee[0]))}),e.explain({plain:i.plain,about:i.about,legend:i.legend,insights:Qt}),e.controls({lines:[`Pick a ${i.tower} to see what it links to`]}),vt();let Ae=performance.now(),Se=q=>{Z.forEach((St,Jt)=>H.setMatrixAt(Jt,b.makeTranslation(St.d.x+(((St.u+St.v*q)%1+1)%1-.5)*(c.cell-2),St.y,St.d.z+St.z))),H.instanceMatrix.needsUpdate=!0,H.instanceColor&&(H.instanceColor.needsUpdate=!0)};Se(0);let X=0;return{targets:()=>h.filter(q=>C==null||q.d===C||q.d<0).map(q=>({at:[q.x,q.h/2,q.z],r:Math.max(q.w*.7,Math.min(q.h*.3,1.5)),key:{kind:"note",id:q.n.id,tip:`${f(q)}${q.level===0?" \xB7 dark":""}${q.n.tasks?` \xB7 ${mt(q.n.tasks,"open task")}`:""}`}})),click(q){q.kind==="note"&&K(q.id)},hover(q){let St=q&&q.kind==="note"?q.id:null;St!==k&&(k=St,vt())},update(q){"selected"in q&&(Q=q.selected&&u.has(q.selected)?q.selected:null,vt())},frame(){if(nt)return;let q=(performance.now()-Ae)/1e3;N.visible=Math.sin(q*4)>-.3,Se(q),clearTimeout(X),X=setTimeout(l,33)},stat:Ct,today:()=>Yt&&Yt[0]?{text:`Darkest district: ${c.districts[Yt[1]].name} \xB7 ${mt(Yt[0],"stale note")}`,label:"Go there",run:()=>Dt(Yt[1])}:null,api:{back:()=>t.camera.position.distanceTo(t.centre),sky:()=>x?{hour:p,glow:x,stars:v&&E}:null,layout:()=>c,selected:()=>Q,district:()=>C==null?null:c.districts[C].cluster,hold(){nt=!0,N.visible=!0,l()},towers:()=>h.filter(q=>q.kind==="tower").length,stalls:()=>Wt.length,dark:()=>_t.length,halls:()=>I.length,cranes:()=>G.length,tallest:()=>O?O.n.id:null},dispose(){nt=!0,clearTimeout(X);for(let q of[P,w,...S?[S]:[],F,N,H,J,D,...U.map(St=>St.mesh)])q.material.map&&q.material.map.dispose()}}}}),mf=lh(xy);var gf="#ef4444",yy="#a8a29e",xf="#5e626d",_f=(i,t,e)=>new xt(i).lerp(new xt(t),e),yf=lh({id:"city",name:"City",hint:"Notes as buildings: tall = relied on, lit = recent, grey = stale; town halls are maps",stage:{fog:[55,170],ambient:.6},tower:"building",hall:!0,cranes:!0,sky:i=>i<5||i>=21?"#4f5fc4":i<8?"#f9a8d4":i<17?"#7dd3fc":"#fb923c",ground:"#6b8f71",sheet:{wall:"#d9dbe3",pane:"#3d4352",lit:["#ffd977","#ffe9a8","#ffc94d"]},beacon:gf,beaconName:"red",stall:yy,arc:"#ffd977",wall:(i,t)=>t===0?_f(i,xf,.72):_f(i,"#ffffff",.18),lane:(i,t,e,n)=>({y:.1,z:(e%2?1:-1)*(n/2-.3),c:e%2?"#fef08a":"#f87171"}),stat:i=>`${mt(i.towers,"building")} \xB7 ${i.fresh} new this week \xB7 tallest: ${i.tallest}`,plain:"Picture your notes as a town. A tall building is a note everything else leans on. Lit windows mean someone has been in it lately; a grey building has been left alone for a long time.",about:"Each topic is a district and each note a building in the topic's colour. Height is how many notes link to it and how much runs through it; lit windows are how recently it was edited; grey is stale. A crane stands on a note written this week, a red beacon is an open task, the pale hall with a flag is the topic's map, and a stall on the street is a note in no topic.",legend:[{color:"#ffd977",text:"height = relied on, windows = recent"},{color:xf,text:"grey = stale"},{color:"#facc15",text:"crane = new this week"},{color:gf,text:"beacon = open task"},{color:"#e5e7eb",text:"hall = the topic's map"}]});var Vn=18,ch=2.5,Qr=90,qi="#22c55e",El="#f87171",Mf=i=>ch+(Vn-ch)*(1-Math.min(1,Math.log1p(Math.max(0,i))/Math.log1p(365))),ii=i=>(i.taskAge!=null?i.taskAge:i.age)||0;function My(i){let t=i.nodes.filter(d=>!Re(d)&&d.tasks>0),e=new Map;for(let d of t)e.has(d.cluster)||e.set(d.cluster,[]),e.get(d.cluster).push(d);let n=new Map(i.clusters.map(d=>[d.id,d.name])),s=[...e.keys()].sort((d,u)=>e.get(u).length-e.get(d).length||d-u),r=Math.max(1,t.length),o=s.map(d=>Math.max(.25,e.get(d).length/r*2*Math.PI*.92+.08)),a=o.reduce((d,u)=>d+u,0)||1,l=-Math.PI/2,c=s.map((d,u)=>{let f=o[u]/a*2*Math.PI,m={cluster:d,name:n.get(d)||"No topic",a0:l,a1:l+f,n:e.get(d).length};return l+=f,m}),h=[];for(let d of c)for(let u of e.get(d.cluster)){let f=en(u.id),m=d.a0+(d.a1-d.a0)*(.1+.8*(f%100/100)),M=Math.max(ch*.6,Math.min(Vn,Mf(ii(u))+((f>>>7)%41-20)/20));h.push({n:u,x:Math.cos(m)*M,z:Math.sin(m)*M,r:.28+.16*Math.sqrt(u.tasks),h:.6+.9*u.tasks,holding:ii(u)>Qr})}return{blips:h,sectors:c,hold:Mf(Qr),tasks:t.reduce((d,u)=>d+u.tasks,0),notes:t.length}}var vf={id:"radar",name:"Radar",hint:"Open tasks as blips by how long they've waited; red = 90+ days",home:{yaw:0,pitch:1.5,dist:46,min:14,max:110,minPitch:.55,maxPitch:1.5,pan:!0},stage:{fog:!1,ambient:1},actions:["graph","triage"],build({stage:i,frame:t,orbit:e,data:n,inputs:s,onOpen:r,onAction:o,theme:a,invalidate:l}){let c=My(n),h=new Map(c.blips.map(D=>[D.n.id,D])),d=D=>(i.scene.add(D),D),u=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,f=D=>(D.rotation.x=-Math.PI/2,D);if(c.notes<1){let D=()=>"No open tasks";return t.stat(D()),t.controls({at:"centre",lines:["Radar shows the notes that have open tasks.","No note has one."],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>o("graph")}]}),{targets:()=>[],click(){},update(){},stat:D,today:()=>null,api:{empty:!0}}}let m=new Ht,M=new xt,_=(D,O,Q)=>{let k=new se().setAttribute("position",new kt(D,3));return d(new He(k,new Fe({color:O,transparent:!0,opacity:Q})))};d(f(new qt(new In(Vn,64),new le({color:"#04140b"}))));let g=(D,O,Q,k=.05)=>d(f(new qt(new Vi(D-k,D+k,96),new le({color:O,transparent:!0,opacity:Q,side:ge})))).position.set(0,.02,0);c.sectors.forEach((D,O)=>{let Q=d(f(new qt(new In(Vn,24,-D.a1,D.a1-D.a0),new le({color:a.palette[O%a.palette.length],transparent:!0,opacity:.3,side:ge}))));Q.position.y=.01});for(let D=1;D<=4;D++)g(Vn*D/4,qi,.25);g(c.hold,El,.7,.07),_(c.sectors.flatMap(D=>[0,.03,0,Math.cos(D.a0)*Vn,.03,Math.sin(D.a0)*Vn]),qi,.3);let y=d(f(new qt(new In(Vn,32,0,.7),new le({color:qi,transparent:!0,opacity:.22,side:ge}))));y.position.y=.05;let b=d(new fe(new ve(1,1,1,14),new le,c.blips.length));b.frustumCulled=!1;let p=s.selected&&h.has(s.selected)?s.selected:null,v=null,E=u,x=()=>v||p,S=D=>jt(D.n.name,30),P=()=>{let D=x()&&h.get(x());return D?`${S(D)} \xB7 ${mt(D.n.tasks,"open task")} \xB7 waiting ${ii(D.n)} days`:`${mt(c.tasks,"open task")} \xB7 ${mt(c.notes,"note")}`},w=(D,O)=>M.set(D).multiplyScalar(O);function U(){let D=x();c.blips.forEach((Q,k)=>{let C=!D||Q.n.id===D,nt=Q.r*(Q.n.id===D?1.5:1);m.makeScale(nt,Q.h,nt).setPosition(Q.x,Q.h/2,Q.z),b.setMatrixAt(k,m),b.setColorAt(k,C?M.set(Q.n.id===D?a.fg:Q.holding?El:qi):w(Q.holding?El:qi,.25))}),b.instanceMatrix.needsUpdate=!0,b.instanceColor&&(b.instanceColor.needsUpdate=!0);let O=c.sectors.map(Q=>{let k=(Q.a0+Q.a1)/2;return{text:`${jt(Q.name,24).toUpperCase()} \xB7 ${Q.n}`,at:[Math.cos(k)*(Vn+1.2),0,Math.sin(k)*(Vn+1.2)],color:qi}});for(let Q of[...c.blips].sort((k,C)=>C.n.tasks-k.n.tasks).slice(0,8))O.push({text:`${jt(Q.n.name,22)} \xB7 ${Q.n.tasks}`,at:[Q.x,Q.h,Q.z],dy:-10,color:Q.holding?"#fecaca":"#bbf7d0"});if(D){let Q=h.get(D);O.unshift({text:S(Q),at:[Q.x,Q.h,Q.z],strong:!0,dy:-18,run:()=>F(D),title:`Open ${S(Q)}`})}t.labels(O),t.stat(P())}function F(D){p=D,U(),l(),r(D)}let B=c.blips.filter(D=>D.holding),N=[...c.blips].sort((D,O)=>ii(O.n)-ii(D.n))[0],Z=[];B.length&&Z.push({text:`${mt(B.length,"note")} ${B.length===1?"has":"have"} a task waiting more than ${Qr} days. Each is either still wanted or can be crossed off.`,label:"Triage",run:()=>o("triage")}),N&&ii(N.n)>30&&Z.push({text:`${jt(N.n.name,40)} has waited longest: ${ii(N.n)} days.`,label:"Open note",run:()=>F(N.n.id)});let H=c.sectors[0];H&&c.sectors.length>1&&Z.push({text:`${H.name} holds the most notes with open tasks (${H.n} of ${c.notes}).`,label:"Open its busiest",run:()=>F(c.blips.filter(D=>D.n.cluster===H.cluster).sort((D,O)=>O.n.tasks-D.n.tasks)[0].n.id)}),t.explain({plain:"Picture a radar screen. Every note with an open task is a blip. The longer its oldest task has waited, the closer to the middle it drifts, and inside the red ring it has been waiting more than three months.",about:"Each topic has a slice of the screen and each note with open tasks is a blip in its slice. Distance from the centre is how long the oldest open task has waited (a year or more sits in the middle). The size of a blip, and the height of its column when you tilt, is how many open tasks it holds. Tick tasks off in the note and its blip drifts away or goes.",legend:[{color:qi,text:"note with open tasks"},{color:El,text:"oldest task 90+ days"},{color:"#6b7280",text:"nearer the middle = waited longer"}],insights:Z});let J=()=>t.controls({lines:[B.length?`${mt(B.length,"note")} holding past ${Qr} days`:"Pick a blip to open its note"],buttons:[{label:e.tilted?"Flat":"Tilt",title:e.tilted?"Look straight down again":"Tilt into 3D: a blip becomes a column as tall as its task count",run:()=>{e.tilt(),J()}},...B.length?[{label:"Triage",title:"Go through the open tasks one by one",run:()=>o("triage")}]:[]]});J(),U();let G=performance.now(),I=0,W=D=>{y.rotation.z=-(D*.5%(2*Math.PI))};return W(0),{targets:()=>c.blips.map(D=>({at:[D.x,D.h/2,D.z],r:Math.max(.7,D.r*1.3),key:{kind:"note",id:D.n.id,tip:`${D.n.name} \xB7 ${mt(D.n.tasks,"open task")} \xB7 waiting ${ii(D.n)} days`}})),click(D){D.kind==="note"&&F(D.id)},hover(D){let O=D&&D.kind==="note"?D.id:null;O!==v&&(v=O,U())},update(D){"selected"in D&&(p=D.selected&&h.has(D.selected)?D.selected:null,U())},frame(){E||(W((performance.now()-G)/1e3),clearTimeout(I),I=setTimeout(l,33))},stat:P,today:()=>B.length?{text:`${mt(B.length,"note")} ${B.length===1?"has":"have"} tasks waiting ${Qr}+ days \xB7 oldest: ${jt(N.n.name,30)} (${ii(N.n)} days)`,label:"Triage",run:()=>o("triage")}:null,api:{layout:()=>c,selected:()=>p,hold(){E=!0,l()},blips:()=>c.blips.length,holding:()=>B.length,tilted:()=>e.tilted},dispose(){E=!0,clearTimeout(I)}}}};var Al=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Sf=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Kr=3.2,$r=1.5,bf=1.2,vy=2.2,Sy=12,by=3,Tl="#fde047",wy=[{key:"wd",n:7,name:"WEEK",labels:Al},{key:"mo",n:12,name:"YEAR",labels:Sf}],si=(i,t)=>i/t*2*Math.PI-Math.PI/2;function Ey(i,t=new Date,e=!1){let n=new Map(i.clusters.map(u=>[u.id,u.name])),s=Object.entries(i.rhythm||{}).map(([u,f])=>({cluster:+u,name:n.get(+u)||"No topic",wd:f.wd,mo:f.mo,tot:f.wd.reduce((m,M)=>m+M,0)})).filter(u=>u.tot>=by&&n.has(u.cluster)).sort((u,f)=>u.tot-f.tot||u.cluster-f.cluster).slice(-Sy),r=Kr+s.length*$r,o=r+3,a=wy.map((u,f)=>{let m=new Array(u.n).fill(0);s.forEach(_=>_[u.key].forEach((g,y)=>{m[y]+=g}));let M=(f?1:-1)*o;return{...u,centre:e?[0,M]:[M,0],totals:m,peak:m.indexOf(Math.max(...m))}}),l=[];a.forEach((u,f)=>s.forEach((m,M)=>{let _=Math.max(1,...m[u.key]);for(let g=0;g<u.n;g++){let y=m[u.key][g],b=y/_;l.push({dial:f,ring:M,s:g,v:y,t:b,cluster:m.cluster,a0:si(g,u.n),a1:si(g+1,u.n),r0:Kr+M*$r,r1:Kr+M*$r+bf,h:y?.15+vy*b:.04})}}));let c=(t.getDay()+6)%7,h=new Date(t.getFullYear(),t.getMonth()+1,0).getDate(),d=t.getMonth();return{rings:s,dials:a,cells:l,rOut:r,now:{wd:c,mo:d,frac:{wd:(c+(t.getHours()+t.getMinutes()/60)/24)/7,mo:(d+(t.getDate()-1+t.getHours()/24)/h)/12}}}}var hh=(i,t)=>i[t].indexOf(Math.max(...i[t])),wf={id:"clock",name:"Heat clock",hint:"When each topic comes up: weekday and month dials, hotter = more mentions",home:{yaw:0,pitch:1.5,dist:60,min:20,max:140,minPitch:.55,maxPitch:1.5,pan:!0},stage:{fog:!1,ambient:1},actions:["graph"],build({stage:i,frame:t,orbit:e,data:n,inputs:s,onOpen:r,onAction:o,theme:a,invalidate:l}){let c=(i.camera.aspect||1)<1,h=Ey(n,s.now||new Date,c),d=C=>(i.scene.add(C),C);if(h.rings.length<1){let C=()=>"No weekday or month pattern yet";return t.stat(C()),t.controls({at:"centre",lines:["The Heat clock shows when each topic comes up in your daily notes.","There is no pattern to show yet."],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>o("graph")}]}),{targets:()=>[],click(){},update(){},stat:C,today:()=>null,api:{empty:!0}}}let u=C=>a.palette[Math.max(0,n.clusters.findIndex(nt=>nt.id===C))%a.palette.length],f=new xt("#1f2933"),m=new xt("#1a2027"),M=new xt,_=new xt,g=(C,nt,ut)=>[C.centre[0]+Math.cos(nt)*ut,C.centre[1]+Math.sin(nt)*ut],y=[],b=[],p=C=>C.n===7?3:2,v=(...C)=>{for(let nt of C)y.push(nt[0],nt[1],nt[2])};for(let C of h.cells){let nt=h.dials[C.dial],ut=y.length/3,ot=p(nt),dt=(C.a1-C.a0)/ot,_t=.012,pt=(K,Ft,Dt)=>{let[Yt,Wt]=g(nt,K,Ft);return[Yt,Dt,Wt]};for(let K=0;K<ot;K++){let Ft=C.a0+K*dt+(K===0?_t:0),Dt=C.a0+(K+1)*dt-(K===ot-1?_t:0);v(pt(Ft,C.r0,C.h),pt(Dt,C.r0,C.h),pt(Dt,C.r1,C.h),pt(Ft,C.r0,C.h),pt(Dt,C.r1,C.h),pt(Ft,C.r1,C.h)),v(pt(Ft,C.r1,0),pt(Dt,C.r1,0),pt(Dt,C.r1,C.h),pt(Ft,C.r1,0),pt(Dt,C.r1,C.h),pt(Ft,C.r1,C.h)),v(pt(Ft,C.r0,0),pt(Dt,C.r0,C.h),pt(Dt,C.r0,0),pt(Ft,C.r0,0),pt(Ft,C.r0,C.h),pt(Dt,C.r0,C.h))}let Ct=C.a0+_t,vt=C.a1-_t;v(pt(Ct,C.r0,0),pt(Ct,C.r1,0),pt(Ct,C.r1,C.h),pt(Ct,C.r0,0),pt(Ct,C.r1,C.h),pt(Ct,C.r0,C.h)),v(pt(vt,C.r0,0),pt(vt,C.r1,C.h),pt(vt,C.r1,0),pt(vt,C.r0,0),pt(vt,C.r0,C.h),pt(vt,C.r1,C.h)),b.push([ut,y.length/3-ut,ot*6])}let E=new se().setAttribute("position",new kt(y,3)),x=new kt(new Float32Array(y.length),3);E.setAttribute("color",x),d(new qt(E,new le({vertexColors:!0,side:ge}))).frustumCulled=!1;let S=[],P=[];h.dials.forEach(C=>{let nt=h.now.frac[C.key],ut=si(nt*C.n,C.n),ot=h.now[C.key],dt=Kr-.6,_t=h.rOut+.4,[pt,Ct]=g(C,ut,dt),[vt,K]=g(C,ut,_t);S.push(pt,.3,Ct,vt,.3,K);for(let Ft of[si(ot,C.n),si(ot+1,C.n)]){let[Dt,Yt]=g(C,Ft,dt),[Wt,Lt]=g(C,Ft,_t);P.push(Dt,.3,Yt,Wt,.3,Lt)}});let w=(C,nt)=>{let ut=new se().setAttribute("position",new kt(C,3));return d(new He(ut,new Fe({color:Tl,transparent:!0,opacity:nt})))};w(S,1),w(P,.55),h.dials.forEach(C=>{let nt=si(h.now.frac[C.key]*C.n,C.n),[ut,ot]=g(C,nt,h.rOut+.4);d(new qt(new de(.4,12,8),new le({color:Tl}))).position.set(ut,.3,ot)});let U=new Map(h.rings.map(C=>[C.cluster,C])),F=C=>n.nodes.filter(nt=>nt.cluster===C&&!Re(nt)).sort((nt,ut)=>ut.inlinks+ut.outlinks-(nt.inlinks+nt.outlinks)||(nt.id<ut.id?-1:1)),B=null,N=null,Z=C=>h.dials[C.dial].labels[C.s],H=C=>Math.round(100*C.v/Math.max(1,U.get(C.cluster).tot)),J=new Map(h.cells.map((C,nt)=>[`${C.dial}:${C.ring}:${C.s}`,nt])),G=()=>{let C=N!=null&&h.cells[N];if(C)return`${jt(U.get(C.cluster).name,28)} \xB7 ${Z(C)} \xB7 ${mt(C.v,"mention")}`;if(B!=null){let nt=U.get(B);return`${jt(nt.name,28)} \xB7 busiest ${Al[hh(nt,"wd")]} \xB7 ${Sf[hh(nt,"mo")]} \xB7 ${mt(nt.tot,"mention")}`}return`${mt(h.rings.length,"topic")} \xB7 busiest ${h.dials[0].labels[h.dials[0].peak]} \xB7 ${h.dials[1].labels[h.dials[1].peak]}`};function I(){let C=x.array;h.cells.forEach((ut,ot)=>{let dt=B==null||ut.cluster===B,[_t,pt,Ct]=b[ot],vt=ot===N;ut.v?_.copy(f).lerp(M.set(u(ut.cluster)),.15+.85*ut.t):_.copy(m),dt||_.multiplyScalar(.3),vt&&_.lerp(M.set(a.fg),.35);for(let K=0;K<pt;K++){let Ft=K<Ct?1:.62;C[(_t+K)*3]=_.r*Ft,C[(_t+K)*3+1]=_.g*Ft,C[(_t+K)*3+2]=_.b*Ft}}),x.needsUpdate=!0;let nt=[];if(h.dials.forEach(ut=>{ut.labels.forEach((ot,dt)=>{let _t=(si(dt,ut.n)+si(dt+1,ut.n))/2,[pt,Ct]=g(ut,_t,h.rOut+1.6);nt.push({text:ot,at:[pt,0,Ct],color:dt===h.now[ut.key]?Tl:"#e2e8f0"})}),nt.push({text:ut.name,at:[ut.centre[0],0,ut.centre[1]],dy:-8,color:"#94a3b8"},{text:`busiest: ${ut.labels[ut.peak]}`,at:[ut.centre[0],0,ut.centre[1]],dy:8,color:"#f8fafc"})}),B!=null){let ut=F(B)[0],ot=U.get(B),dt=h.dials[0],_t=h.rings.indexOf(ot),[pt,Ct]=g(dt,si(0,7),Kr+_t*$r+bf/2);nt.push({text:jt(ot.name,26),at:[pt,.5,Ct],strong:!0,dy:-10,...ut?{run:()=>r(ut.id),title:`Open ${ut.name}`}:{}})}t.labels(nt),t.stat(G())}function W(C){B=B===C?null:C,I(),Q(),l()}let D=h.rings.filter(C=>C.tot>=10).map(C=>({r:C,k:Math.max(...C.wd)/C.tot})).sort((C,nt)=>nt.k-C.k)[0],O=[];O.push({text:`Mentions peak on ${h.dials[0].labels[h.dials[0].peak]} and in ${h.dials[1].labels[h.dials[1].peak]}.`,label:"Busiest topic",run:()=>W(h.rings[h.rings.length-1].cluster)}),D&&D.k>.3&&O.push({text:`${D.r.name} clusters on ${Al[hh(D.r,"wd")]}: ${Math.round(D.k*100)}% of its mentions.`,label:"Show its ring",run:()=>W(D.r.cluster)}),t.explain({plain:"Picture two clock faces. One is a week, one is a year, and each topic is a ring on both. A cell glows when that topic comes up in your daily notes on that weekday or in that month.",about:"Each ring is a topic, the busiest outside. A cell's heat, and its height when you tilt, is that topic's share of its own mentions that fall on that weekday or month, so a bright cell is where the topic peaks. It counts mentions in daily notes, not hours worked. The yellow hand is right now.",legend:[{color:a.fg,text:"bright, tall cell: the topic's busiest weekday or month"},{color:"#1f2933",text:"dark cell: rarely"},{color:Tl,text:"now"}],insights:O});function Q(){let C=B!=null?F(B)[0]:null;t.controls({lines:[B!=null?`${U.get(B).name}`:"Pick a ring to see its topic"],buttons:[...C?[{label:`Open ${jt(C.name,18)}`,title:`Open ${C.name}, the topic's most linked note`,run:()=>r(C.id)}]:[],...B!=null?[{label:"Clear",title:"Show every topic again",run:()=>W(B)}]:[],{label:e.tilted?"Flat":"Tilt",title:e.tilted?"Look straight down again":"Tilt into 3D: a cell is as tall as its heat",run:()=>{e.tilt(),Q()}}]})}Q(),I();let k=h.rings[h.rings.length-1];return{targets:()=>h.cells.map((C,nt)=>{let ut=h.dials[C.dial],ot=(C.a0+C.a1)/2,[dt,_t]=g(ut,ot,(C.r0+C.r1)/2),pt=(C.a1-C.a0)*(C.r0+C.r1)/2;return{at:[dt,C.h/2,_t],r:Math.max(.55,Math.min($r*.6,pt*.4)),key:{kind:"ring",id:C.cluster,cell:nt,tip:`${U.get(C.cluster).name} \xB7 ${Z(C)} \xB7 ${mt(C.v,"mention")} (${H(C)}%)`}}}),click(C){C.kind==="ring"&&W(C.id)},hover(C){let nt=C&&C.kind==="ring"?C.cell:null;nt!==N&&(N=nt,I())},update(){},stat:G,today(){let C=h.now.wd,nt=h.rings.map(ot=>({r:ot,k:ot.wd[C]/ot.tot})).sort((ot,dt)=>dt.k-ot.k)[0],ut=nt&&F(nt.r.cluster)[0];return nt&&nt.k>0?{text:`It is ${Al[C]}: ${jt(nt.r.name,30)} usually comes up most on this day (${Math.round(nt.k*100)}% of its mentions)`,label:ut?"Open note":"Show ring",run:()=>ut?r(ut.id):W(nt.r.cluster)}:null},api:{layout:()=>h,focus:()=>B,hovered:()=>N,tilted:()=>e.tilted,rings:()=>h.rings.length,cells:()=>h.cells.length,vertical:()=>c,cell:(C,nt,ut)=>J.get(`${C}:${nt}:${ut}`),top:()=>k&&k.cluster},dispose(){}}}};var uh=4,Ty=1.15,Cf=4,Ef="#f87171",Tf="#fde047",Af="#22d3ee",Ay=2.399963;function Ry(i,t){let e=new Map(t.ids.map((f,m)=>[f,m])),n=Ze(i.nodes),s=wi(i),r=new Map,o=new Map,a=(f,m,M)=>{f.has(m)||f.set(m,[]),f.get(m).push(M)};for(let[f,m]of t.edges)a(r,t.ids[f],t.ids[m]),a(o,t.ids[m],t.ids[f]);let l=i.nodes.filter(f=>e.has(f.id)&&!Re(f)&&!f.isolated),c=Math.max(2,Math.ceil(Math.max(1,...l.map(f=>t.level[e.get(f.id)])))),h=Array.from({length:c},()=>[]);for(let f of l)h[Math.max(0,Math.min(c-1,Math.round(t.level[e.get(f.id)])-1))].push(f);let d=[];h.forEach((f,m)=>{f.sort((M,_)=>M.cluster-_.cluster||n(_)-n(M)),f.forEach((M,_)=>{let g=t.level[e.get(M.id)],y=Ty*Math.sqrt(_+.5)*1.5,b=_*Ay,p=(o.get(M.id)||[]).length;d.push({n:M,x:y*Math.cos(b),z:y*Math.sin(b),y:(g-1)*uh,r:.3+.9*Math.sqrt(Math.max(0,n(M))),level:g,band:m,reliedOn:p,leansOn:(r.get(M.id)||[]).length,endangered:p>=Cf&&s(M)})})});let u=Math.max(4,...d.map(f=>Math.hypot(f.x,f.z)))+2;return{notes:d,bands:h.map(f=>f.length),radius:u,up:f=>o.get(f)||[],down:f=>r.get(f)||[]}}var Rf=(i,t,e)=>new xt(i).lerp(new xt(t),e),If={id:"foodweb",name:"Food web",hint:"Which notes feed which: the notes everything rests on at the base, logs and plans on top, stale ones others rest on in red",home:{yaw:.6,pitch:.3,dist:46,min:10,max:130},stage:{fog:[60,190],ambient:.5},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=Ry(e,n.web),c=l.notes,h=n.web.stats,d=G=>(i.scene.add(G),G);if(c.length<3){let G=()=>mt(c.length,"note");return t.stat(G()),t.controls({at:"centre",lines:["The Food web needs notes that link to one another.",`${mt(c.length,"note")} so far.`],buttons:[{label:"Open the graph",title:"Open the graph",run:()=>r("graph")}]}),{targets:()=>[],click(){},update(){},stat:G,today:()=>null,api:{empty:!0}}}let u=new Map(c.map(G=>[G.n.id,G])),f=G=>G.n.name,m=new Ht,M=G=>G.endangered?Ef:o.palette[(G.n.cluster||0)%o.palette.length],_=l.bands.map((G,I)=>{if(!G)return null;let W=d(new qt(new In(l.radius,48),new le({color:Rf(o.palette[I%o.palette.length],o.bg,.9),transparent:!0,opacity:.55,side:ge})));return W.rotation.x=-Math.PI/2,W.position.y=I*uh-.4,W.frustumCulled=!1,W}),g=d(new fe(new de(1,14,10),new le,c.length));g.frustumCulled=!1;let y=G=>d(new He(new se,new Fe({color:G,transparent:!0,opacity:.9}))),b=y(Tf),p=y(Af);b.frustumCulled=p.frustumCulled=!1;let v=n.selected&&u.has(n.selected)?n.selected:null,E=null,x=()=>E||v,S=new Set,P=c.filter(G=>G.endangered),w=G=>G.endangered?" \xB7 stale, others rest on it":"",U=()=>{let G=x()&&u.get(x());return G?`${f(G)} \xB7 rests on ${mt(G.leansOn,"note")} \xB7 ${mt(G.reliedOn,"note")} rest on it${w(G)}`:`mean level ${h.mean.toFixed(1)} \xB7 top ${h.maxLevel.toFixed(1)} \xB7 incoherence ${h.incoherence.toFixed(2)} \xB7 ${mt(P.length,"endangered note")}`},F=(G,I,W)=>W.push(G.x,G.y,G.z,I.x,I.y,I.z);function B(){let G=x();S.clear(),G&&(S.add(G),l.up(G).forEach(O=>S.add(O)),l.down(G).forEach(O=>S.add(O))),c.forEach((O,Q)=>{g.setMatrixAt(Q,m.makeScale(O.r,O.r,O.r).setPosition(O.x,O.y,O.z)),g.setColorAt(Q,Rf(M(O),o.bg,!G||S.has(O.n.id)?0:.8))}),g.instanceMatrix.needsUpdate=!0,g.instanceColor.needsUpdate=!0;let I=[],W=[];if(G){let O=u.get(G);l.up(G).forEach(Q=>u.has(Q)&&F(u.get(Q),O,I)),l.down(G).forEach(Q=>u.has(Q)&&F(O,u.get(Q),W))}b.geometry.setAttribute("position",new kt(I,3)),b.visible=I.length>0,p.geometry.setAttribute("position",new kt(W,3)),p.visible=W.length>0;let D=l.bands.map((O,Q)=>O?{text:`${Q===0?"Level 1 \xB7 the base":"Level "+(Q+1)} (${O})`,at:[-l.radius,Q*uh,0],color:"#bbf7d0"}:null).filter(Boolean);if(G){let O=u.get(G);D.unshift({text:jt(f(O),34),at:[O.x,O.y+O.r,O.z],strong:!0,dy:-18,run:()=>N(G),title:`Open ${f(O)}`})}t.labels(D),t.stat(U())}function N(G){v=G,B(),a(),s(G)}let Z=[...P].sort((G,I)=>I.reliedOn-G.reliedOn)[0],H=[...c].filter(G=>G.band===0).sort((G,I)=>I.reliedOn-G.reliedOn)[0],J=[];return Z&&J.push({text:`${f(Z)} holds up ${mt(Z.reliedOn,"note")} and has not been edited in ${Z.n.age} days. Open it and decide whether it is still true.`,label:"Open note",run:()=>N(Z.n.id)}),H&&H.reliedOn&&J.push({text:`${f(H)} is the most relied-on note at the base: ${mt(H.reliedOn,"note")} rest on it.`,label:"Open note",run:()=>N(H.n.id)}),t.explain({plain:"Picture a food chain. The notes everything rests on are the plants at the bottom; logs and plans that mostly point at other notes are the animals at the top. If a note at the bottom goes out of date, everything standing on it is built on something stale.",about:`A note rests on the notes it links to, so each note gets a level: the more links lead up from the base to it, the higher it sits. Level is worked out so that every link climbs by about one; incoherence ${h.incoherence.toFixed(2)} is how far the links are from a clean hierarchy (0 is a clean one, 1 shows no direction at all). A red sphere is a note ${Cf} or more notes link to that has not been edited within the vault's stale limit. Pick a note: yellow lines go to the notes resting on it, blue to the notes it rests on.`,legend:[{color:"#bbf7d0",text:"height = level, the base at the bottom"},{color:Ef,text:"stale, and others rest on it"},{color:Tf,text:"rests on the picked note"},{color:Af,text:"the picked note rests on"}],insights:J}),t.controls({lines:["Pick a note to see what rests on it"]}),B(),{targets:()=>c.map(G=>({at:[G.x,G.y,G.z],r:Math.max(G.r*1.2,.9),key:{kind:"note",id:G.n.id,tip:`${f(G)} \xB7 level ${G.level.toFixed(1)}${w(G)}`}})),click(G){G.kind==="note"&&N(G.id)},hover(G){let I=G&&G.kind==="note"?G.id:null;I!==E&&(E=I,B())},update(G){"selected"in G&&(v=G.selected&&u.has(G.selected)?G.selected:null,B())},stat:U,today:()=>Z?{text:`${f(Z)} is stale and ${mt(Z.reliedOn,"note")} rest on it`,label:"Open note",run:()=>N(Z.n.id)}:null,api:{layout:()=>l,selected:()=>v,hold(){},notes:()=>c.length},dispose(){for(let G of[..._.filter(Boolean),g,b,p])G.geometry.dispose(),G.material.dispose()}}}};var Cy=new V(0,1,0),dh=new V,Rl=new V,Pf=new V,Iy=new V,Uf=new Ge,Py=new xt;function ji(i,t,e,n){dh.set(t[0],t[1],t[2]),Rl.set(e[0],e[1],e[2]).sub(dh);let s=Rl.length()||1e-6;return Pf.copy(dh).addScaledVector(Rl,.5),Uf.setFromUnitVectors(Cy,Rl.multiplyScalar(1/s)),i.compose(Pf,Uf,Iy.set(n,s,n))}function _n(i,t,e,n){let s=new fe(i,t,Math.max(1,e.length)),r=new Ht;return s.count=e.length,s.frustumCulled=!1,e.forEach((o,a)=>{r.identity();let l=n(o,a,r);s.setMatrixAt(a,r),l!=null&&s.setColorAt(a,Py.set(l))}),s}function Os(i,t,{size:e=3.4,color:n="#ffffff",opacity:s=.95}={}){let r=new se().setAttribute("position",new kt(new Float32Array(Math.max(1,i)*3),3)),o=new Bi(r,new gi({color:n,size:e,sizeAttenuation:!1,transparent:!0,opacity:s,blending:Kn,depthWrite:!1}));o.frustumCulled=!1,o.userData.backdrop=!0;let a=l=>{let c=r.getAttribute("position");for(let h=0;h<i;h++){let d=t(h,l);c.setXYZ(h,d[0],d[1],d[2])}c.needsUpdate=!0};return a(0),{object:o,tick:a}}function ri(i,t){i.remove(t),t.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose(),e.isInstancedMesh&&e.dispose()})}var Ce=(i,t,e)=>"#"+new xt(i).lerp(new xt(t),e).getHexString();function Vs(i,t,e,n){return i.stat(e),i.controls({at:"centre",lines:n,buttons:[{label:"Open the graph",title:"Open the graph",run:()=>t("graph")}]}),{targets:()=>[],click(){},update(){},stat:()=>e,today:()=>null,api:{empty:!0}}}var ph=[8,18,32],Qi=[6,9,12],Df=40,Nf="#ef4444",Cl="#60a5fa",Il=[[1.15,0,.3,"ZXY"],[1.15,0,.3+Math.PI/3,"ZXY"],[1.15,0,.3+2*Math.PI/3,"ZXY"]],Uy=2.399963,to=.95;function fh(i,t){let{own:e,adj:n}=qr(i.nodes,i.links),s=Ze(i.nodes),r=(x,S)=>s(e.get(S))-s(e.get(x))||(x<S?-1:1),o=[...e.keys()].filter(x=>n.get(x).size).sort(r);if(!o.length)return{centre:null,linked:0};let a=t&&e.has(t)&&n.get(t).size?t:o[0],l=new Map([[a,0]]),c=[a];for(let x=0;x<c.length;x++)for(let S of n.get(c[x]))l.has(S)||(l.set(S,l.get(c[x])+1),c.push(S));let h=ph.map((x,S)=>{let P=c.filter(w=>l.get(w)===S+1).sort(r);return{all:P.length,ids:P.slice(0,x)}}),d=new Set,u=new Set;for(let x of i.links)x.kind==="link"&&x.source!==x.target&&e.has(x.source)&&e.has(x.target)&&(x.target===a&&d.add(x.source),x.source===a&&u.add(x.target));let f=d.size,m=u.size,M=f+m,_=Math.min(M,Df),g=M?Math.max(f?1:0,Math.min(_-(m?1:0),Math.round(_*f/M))):0,y=[];for(let x=0,S=0;x<_;x++){let P=_>1?to*.92*Math.cbrt(x+.35):0,w=1-2*((x*.618034+.5)%1),U=Math.sqrt(1-w*w),F=x*Uy,B=Math.floor((x+1)*g/_)>S;B&&S++,y.push({at:[P*U*Math.cos(F),P*w,P*U*Math.sin(F)],proton:B})}let b=new V,p=[];h.forEach((x,S)=>{let P=new ln(...Il[S]);x.ids.forEach((w,U)=>{let F=U/x.ids.length*Math.PI*2+S*.7;b.set(Qi[S]*Math.cos(F),Qi[S]*Math.sin(F),0).applyEuler(P),p.push({id:w,shell:S,at:[b.x,b.y,b.z],r:.5+.5*Math.sqrt(Math.max(0,s(e.get(w))))})})});let v=h.map((x,S)=>{let P=.5/Math.max(1,x.ids.length)*Math.PI*2+S*.7+Math.PI;return b.set(Qi[S]*Math.cos(P),Qi[S]*Math.sin(P),0).applyEuler(new ln(...Il[S])),[b.x,b.y,b.z]}),E=c[c.length-1];return{centre:a,own:e,protons:f,neutrons:m,shells:h,electrons:p,gaps:v,nucleus:y,nucleusR:to*(1+.92*Math.cbrt(Math.max(_,1))),dist:x=>l.has(x)?l.get(x):null,within:c.filter(x=>l.get(x)>=1&&l.get(x)<=ph.length).length,linked:o.length,unreached:o.filter(x=>!l.has(x)),far:{id:E,d:l.get(E)}}}var Ff=["one link away","two links away","three links away"],Lf={id:"atom",name:"Atom",hint:"One note as an atom: its links are the nucleus, the notes one, two and three links away its shells",drift:.08,home:{yaw:.25,pitch:.2,dist:33,min:10,max:160,minPitch:-1.4},stage:{light:"camera",fog:[70,240],ambient:.55,glow:{strength:.9,radius:.7,threshold:.5}},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=fh(e,n.selected),c=null,h=null,d=[];if(!l.centre)return Vs(t,r,mt(e.nodes.length,"note"),["The Atom needs notes that link to one another.","No written links yet."]);let u=p=>l.own.get(p).name,f=p=>o.palette[(l.own.get(p).cluster||0)%o.palette.length],m=[],M=()=>new un({color:"#ffffff",specular:"#777777",shininess:55}),_=()=>`${u(l.centre)} \xB7 ${mt(l.protons,"link")} in \xB7 ${l.neutrons} out \xB7 ${l.shells.map(p=>p.all).join(", ")} notes one, two and three links away`;function g(){c&&ri(i.scene,c),c=new rn;let p=()=>new de(1,24,16);c.add(_n(p(),M(),l.nucleus,(w,U,F)=>(F.makeScale(to,to,to).setPosition(...w.at),w.proton?Nf:Cl))),d=[[1.35,.16],[1.9,.07]].map(([w,U])=>{let F=new qt(new de(l.nucleusR*w,32,16),new le({color:Cl,transparent:!0,opacity:U,blending:Kn,depthWrite:!1,side:De}));return c.add(F),F});let v=Il.map(w=>new ln(...w)),E=new V;h=Os(9,(w,U)=>{let F=Math.floor(w/3),B=U*(.9-.25*F)+w%3*Math.PI*2/3;return E.set(Qi[F]*Math.cos(B),Qi[F]*Math.sin(B),0).applyEuler(v[F]).toArray()},{size:5,color:"#bfdcff"}),c.add(h.object),l.shells.forEach((w,U)=>{let F=new qt(new zi(Qi[U],.16-.04*U,8,160),new le({color:Ce(Cl,o.fg,.35+.15*U),transparent:!0,opacity:w.ids.length?.85-.2*U:.25}));F.rotation.set(...Il[U]),c.add(F)}),c.add(_n(p(),M(),l.electrons,(w,U,F)=>(F.makeScale(w.r,w.r,w.r).setPosition(...w.at),f(w.id)))),i.scene.add(c);let x=[{text:jt(u(l.centre),34),at:[0,l.nucleusR,0],strong:!0,dy:-18,run:()=>s(l.centre),title:`Open ${u(l.centre)}`}];l.shells.forEach((w,U)=>{w.ids.length&&x.push({text:`${Ff[U]} (${w.ids.length<w.all?`${w.ids.length} of ${w.all}`:w.all})`,at:l.gaps[U],color:o.muted,dy:14})});for(let w of l.electrons.filter(U=>U.shell===0).slice(0,4))x.push({text:jt(u(w.id),22),at:w.at,dy:-16,run:()=>b(w.id),title:`Open ${u(w.id)}`});t.labels(x),t.stat(_());let S=l.unreached[0],P=[];P.push({text:`${l.within} of ${mt(l.linked-1,"other linked note")} are within three links of ${u(l.centre)}.${l.far.d>3?` The farthest, ${u(l.far.id)}, is ${l.far.d} links away.`:""}`,...l.far.d>3?{label:"Open farthest",run:()=>b(l.far.id)}:{}}),l.shells[0].all===1&&P.push({text:`One link holds ${u(l.centre)} to the rest of the vault. A second link from a related note keeps it reachable if that one goes.`,label:"Open its neighbour",run:()=>b(l.shells[0].ids[0])}),S&&P.push({text:`${mt(l.unreached.length,"linked note")} can't be reached from here by any chain of links. ${u(S)} is the most relied-on of them.`,label:"Open note",run:()=>b(S)}),t.explain({plain:"Picture one note as an atom. Its own links are packed in the middle. The notes one link away circle closest, the notes two links away further out, and so on. A full, close shell means the note is well tied in.",about:`The nucleus is ${u(l.centre)}: a red ball for each note that links to it and a blue ball for each note it links to (at most ${Df} are drawn, in the same share). Each shell holds the notes that many written links away, the most relied-on first; a shell shows at most ${ph.join(", ")} of them, as an atom's shells do, and its label says how many there are in all. An electron takes its topic's colour and is bigger the more the vault leans on it.`,legend:[{color:Nf,text:"a note that links to it"},{color:Cl,text:"a note it links to"},{color:o.palette[0],text:"electron = a note, shell = links away, colour = topic"}],insights:P}),t.controls({lines:["Pick an electron to make it the nucleus"],buttons:[{label:"\u2039 Back",title:"Back to the note before",off:!m.length,run:()=>{l=fh(e,m.pop()),g(),a()}},{label:u(l.centre),title:`Open ${u(l.centre)}`,wide:!0,run:()=>s(l.centre)}]})}function y(p){if(p===l.centre||!l.own.has(p))return;let v=fh(e,p);v.centre===p&&(m.push(l.centre),l=v,g())}function b(p){y(p),a(),s(p)}return i.sky({top:"#02050f",haze:"#0b1432",stars:500,starColor:"#cfe0ff"}),g(),{targets:()=>[{at:[0,0,0],r:l.nucleusR,key:{kind:"note",id:l.centre,tip:`${u(l.centre)} \xB7 ${mt(l.protons,"link")} in, ${l.neutrons} out`}},...l.electrons.map(p=>({at:p.at,r:Math.max(p.r*1.3,.9),key:{kind:"note",id:p.id,tip:`${u(p.id)} \xB7 ${Ff[p.shell]}`}}))],click(p){p.kind==="note"&&b(p.id)},update(p){"selected"in p&&p.selected&&y(p.selected)},stat:_,today:()=>null,api:{layout:()=>l,centre:()=>l.centre,back:()=>m.length},tick(p){h&&h.tick(p),d.forEach((v,E)=>v.scale.setScalar(1+.05*Math.sin(p*1.6+E)))},dispose(){c&&ri(i.scene,c)}}}};var Ai=9,Ti=1.8,mh=48,Of=40,Bf="#fbbf24";function kf(i,t){let e=bl(i,{linkedOnly:!1});if(!e.length)return{topics:[],core:null};let n=Math.max(0,e.findIndex(b=>b.cluster===t)),s=e[n],{adj:r}=qr(i.nodes,i.links,{hubs:!0}),o=Ze(i.nodes),a=Fs(i.nodes),l=wi(i),c=s.moc||s.notes[0],h=s.notes.filter(b=>b!==c),d=new Set(h.map(b=>b.id)),u=r.get(c.id)||new Set,f=b=>({id:b.id,state:l(b)?"stale":a(b)>.35?"active":"steady",size:.7+.6*Math.sqrt(Math.max(0,o(b)))}),m={docked:[],second:[],adrift:[]};for(let b of h)(u.has(b.id)?m.docked:[...r.get(b.id)||[]].some(p=>d.has(p))?m.second:m.adrift).push(b);let M=m.docked.slice(0,mh).map((b,p,v)=>{let E=p/v.length*Math.PI*2+Math.PI/2;return{...f(b),a:E,at:[Ai*Math.cos(E),Ai*Math.sin(E),Ti]}}),_=new Map(M.map(b=>[b.id,b.a])),g=m.second.slice(0,mh).map(b=>({...f(b),anchor:[...r.get(b.id)].filter(p=>_.has(p)).sort((p,v)=>_.get(p)-_.get(v))[0]||null})).sort((b,p)=>(b.anchor?_.get(b.anchor):99)-(p.anchor?_.get(p.anchor):99)||(b.id<p.id?-1:1)).map((b,p,v)=>{let E=p/v.length*Math.PI*2+Math.PI/2;return{...b,a:E,at:[Ai*Math.cos(E),Ai*Math.sin(E),-Ti]}}),y=m.adrift.slice(0,Of).map(b=>{let[p,v]=jr(b.id),E=p*Math.PI*2,x=Ai+4.5+4*v;return{...f(b),at:[x*Math.cos(E),x*Math.sin(E),(en(b.id)%100/100-.5)*8]}});return{topics:e.map(b=>({cluster:b.cluster,name:b.name})),index:n,cluster:s.cluster,name:s.name,core:{id:c.id,name:c.name,map:!!c.moc},docked:M,second:g,adrift:y,counts:{docked:m.docked.length,second:m.second.length,adrift:m.adrift.length}}}var Vf={id:"station",name:"Station",hint:"One topic as a ring station: notes its map links are docked, the rest ride the second ring or drift outside",drift:.06,home:{yaw:.65,pitch:.28,dist:50,min:12,max:170,minPitch:-1.4},stage:{light:"camera",fog:[80,260],ambient:.5,glow:{strength:.8,radius:.6,threshold:.55}},actions:["graph"],build({stage:i,frame:t,data:e,inputs:n,onOpen:s,onAction:r,theme:o,invalidate:a}){let l=new Map(e.nodes.map(p=>[p.id,p])),c=p=>l.has(p)?l.get(p).cluster:void 0,h=kf(e,c(n.selected)),d=null,u=null;if(!h.core)return Vs(t,r,mt(e.nodes.length,"note"),["The Station needs notes in a topic.","No notes yet."]);let f=p=>l.get(p).name,m=(p,v)=>p.length<v?`${p.length} of ${v}`:`${v}`,M=()=>`${h.name} \xB7 ${h.counts.docked} docked \xB7 ${h.counts.second} on the second ring \xB7 ${h.counts.adrift} adrift`;function _(){d&&ri(i.scene,d),d=new rn;let p=o.palette[(h.cluster||0)%o.palette.length],v=Ce(o.muted,o.bg,.25),E=Ce(o.muted,o.fg,.55),x=D=>D.state==="stale"?v:D.state==="active"?Bf:p,S=D=>new un({color:D,specular:"#888888",shininess:40}),P=(D,O,Q,k)=>{let C=new qt(D,O);return C.position.set(...Q),k&&C.rotation.set(...k),d.add(C),C};P(new ve(1.5,1.5,7,28),S(E),[0,0,0],[Math.PI/2,0,0]),P(new de(1.5,28,16),S(p),[0,0,3.5]),P(new de(1.5,28,16),S(E),[0,0,-3.5]),P(new ve(.22,.22,16,10),S(E),[0,0,0],[Math.PI/2,0,0]);for(let D of[7.2,-7.2]){P(new ve(.12,.12,13,8),S(E),[0,0,D],[0,0,Math.PI/2]);for(let O of[4,-4])P(new cn(5,2.6,.08),new un({color:"#1e3a8a",emissive:"#0b1a45",specular:"#93c5fd",shininess:90}),[O,0,D])}for(let D of[Ti,-Ti])P(new zi(Ai,.16,8,96),S(E),[0,0,D]);let w=new V,U=(D,O)=>O.makeRotationZ(D.a).scale(w.set(.85*D.size,1.15*D.size,1.1*D.size)).setPosition(...D.at);d.add(_n(new cn(1,1,1),S("#ffffff"),[...h.docked,...h.second],(D,O,Q)=>(U(D,Q),x(D))));let F=new Map(h.docked.map(D=>[D.id,D.at])),B=()=>new ve(1,1,1,6),N=()=>new un({color:E,transparent:!0,opacity:.35,depthWrite:!1});d.add(_n(B(),N(),h.docked,(D,O,Q)=>{ji(Q,[0,0,Ti],D.at,.05)})),d.add(_n(B(),N(),h.second.filter(D=>D.anchor),(D,O,Q)=>{ji(Q,D.at,F.get(D.anchor),.05)})),d.add(_n(new jn(1,0),new un({color:"#ffffff",flatShading:!0}),h.adrift,(D,O,Q)=>(Q.makeRotationZ(O).scale(w.set(.6*D.size,.45*D.size,.5*D.size)).setPosition(...D.at),D.state==="stale"?v:Ce(p,v,.6))));let Z=[...h.docked.map(D=>[[0,0,Ti],D.at]),...h.second.filter(D=>D.anchor).map(D=>[F.get(D.anchor),D.at])];u=Os(Z.length,(D,O)=>{let[Q,k]=Z[D],C=(O*.35+D*.618)%1;return[Q[0]+(k[0]-Q[0])*C,Q[1]+(k[1]-Q[1])*C,Q[2]+(k[2]-Q[2])*C]},{size:4,color:"#ffe9a8"}),d.add(u.object),i.scene.add(d);let H=D=>({run:()=>s(D.id),title:`Open ${f(D.id)}`}),J=[{text:jt(h.core.name,34),at:[0,1.6,3.5],strong:!0,dy:-16,run:()=>s(h.core.id),title:`Open ${h.core.name}`}];for(let D of h.docked.slice(0,5))J.push({text:jt(f(D.id),22),at:D.at,dy:-14,...H(D)});h.docked.length&&J.push({text:`docked (${m(h.docked,h.counts.docked)})`,at:[0,-Ai,Ti],color:o.muted,dy:16}),h.second.length&&J.push({text:`second ring (${m(h.second,h.counts.second)})`,at:[Ai,0,-Ti],color:o.muted,dy:16}),h.adrift.length&&J.push({text:`adrift (${m(h.adrift,h.counts.adrift)})`,at:h.adrift[0].at,color:o.muted,dy:16}),t.labels(J),t.stat(M());let G=[],I=h.counts.docked+h.counts.second+h.counts.adrift;I&&G.push({text:`${h.counts.docked} of ${mt(I,"note")} in ${h.name} link with ${h.core.name}.`+(h.core.map?"":` ${h.name} has no map; ${h.core.name} is its most relied-on note.`),label:`Open ${jt(h.core.name,18)}`,run:()=>s(h.core.id)}),h.second.length&&G.push({text:`${mt(h.counts.second,"note")} link with the topic but not with ${h.core.name}. ${f(h.second[0].id)} is the most relied-on of them; a link from ${h.core.name} docks it.`,label:"Open note",run:()=>s(h.second[0].id)}),h.adrift.length&&G.push({text:`${mt(h.counts.adrift,"note")} link with nothing in ${h.name}. ${f(h.adrift[0].id)} is the most relied-on of them.`,label:"Open note",run:()=>s(h.adrift[0].id)}),t.explain({plain:"Picture a topic as a space station. The hub in the middle is the topic's map. Every note the map links with is a module bolted to the front ring. Notes that only link with other notes ride the second ring. Notes that link with nothing here drift outside as rocks.",about:`The hub is ${h.core.name}${h.core.map?", the topic's map":", the topic's most relied-on note (the topic has no map)"}. A spoke is a link between the hub and a note; a strut is a link between a second-ring note and a docked one. A module is bigger the more the vault leans on the note. A ring shows at most ${mh} modules and ${Of} rocks are drawn, the most relied-on first; each label says how many there are in all.`,legend:[{color:Bf,text:"edited lately"},{color:p,text:"a note of the topic"},{color:v,text:"stale"},{color:E,text:"spoke or strut = a link"}],insights:G});let W=D=>()=>{g(h.topics[(h.index+D+h.topics.length)%h.topics.length].cluster),a()};t.controls({lines:[`Topic ${h.index+1} of ${h.topics.length}`],buttons:[{label:"\u2039",title:"The topic before",off:h.topics.length<2,run:W(-1)},{label:h.name,title:`Open ${h.core.name}`,wide:!0,run:()=>s(h.core.id)},{label:"\u203A",title:"The next topic",off:h.topics.length<2,run:W(1)}]})}function g(p){if(p===void 0||p===h.cluster)return;let v=kf(e,p);v.cluster===p&&(h=v,_())}i.sky({top:"#02050f",haze:"#0b1432",stars:500,starColor:"#cfe0ff"}),_();let y={active:"edited lately",steady:"",stale:"stale"},b=(p,v)=>[f(p.id),v,y[p.state]].filter(Boolean).join(" \xB7 ");return{targets:()=>[{at:[0,0,0],r:2.2,key:{kind:"note",id:h.core.id,tip:`${h.core.name} \xB7 the hub of ${h.name}`}},...h.docked.map(p=>({at:p.at,r:.9*p.size,key:{kind:"note",id:p.id,tip:b(p,"docked")}})),...h.second.map(p=>({at:p.at,r:.9*p.size,key:{kind:"note",id:p.id,tip:b(p,"second ring")}})),...h.adrift.map(p=>({at:p.at,r:.8*p.size,key:{kind:"note",id:p.id,tip:b(p,"adrift")}}))],click(p){p.kind==="note"&&s(p.id)},update(p){"selected"in p&&p.selected&&g(c(p.selected))},stat:M,today:()=>h.adrift.length?{text:`${f(h.adrift[0].id)} links with nothing in ${h.name}.`,label:"Open note",run:()=>s(h.adrift[0].id)}:null,api:{layout:()=>h,go:p=>{g(p),a()}},tick(p){u&&u.tick(p)},dispose(){d&&ri(i.scene,d)}}}};var Ci=30,Wf=37,Zf=12,Yf=4,zf=1.5,Gf="#ef4444",gh="#3b82f6",eo=.6,zs=2.1,Ri=7.2,Ki=5;function Hf(i,t=[]){let e=[];for(let n=-i-1;n<=i;n++)for(let s=-i-1;s<=i;s++)for(let r of t.length?t:[0]){let o=n+r,a=s+r,l=zf*(o+a/2),c=zf*a*.8660254;(t.length||Math.max(Math.abs(n),Math.abs(s),Math.abs(n+s))<=i)&&e.push([l,c])}return e.sort((n,s)=>Math.hypot(...n)-Math.hypot(...s)||Math.atan2(n[1],n[0])-Math.atan2(s[1],s[0]))}function Ny(i){let t=i.nodes.filter(y=>!Re(y)),e=Fs(i.nodes),n=wi(i),s=i.quality&&i.quality.stale_days||180,r=(y,b)=>y.id<b.id?-1:1,o=t.filter(y=>(y.age||0)<=Ci).sort((y,b)=>e(b)-e(y)||r(y,b)),a=t.filter(n),l=a.filter(y=>y.age<=s+Ci),c=Hf(3),h=Hf(3,[1/3,2/3]),d=o.slice(0,Wf).map((y,b)=>({id:y.id,cluster:y.cluster,heat:e(y),at:c[b],h:2.2+3.2*e(y)})),u=a.filter(y=>y.inlinks>0).sort((y,b)=>b.inlinks-y.inlinks||r(y,b)),f=u.length?u[0].inlinks:1,m=u.slice(0,Zf).map((y,b)=>({id:y.id,cluster:y.cluster,links:y.inlinks,depth:.25+.75*(y.inlinks/f),at:h[b]})),M=new Map;for(let y of o)M.set(y.cluster,(M.get(y.cluster)||0)+1);let _=new Map(i.clusters.map(y=>[y.id,y.label||y.name])),g=[...M].sort((y,b)=>b[1]-y[1]||y[0]-b[0]).slice(0,Yf).map(([y,b])=>({cluster:y,name:_.get(y)||`Topic ${y}`,edited:b,share:b/o.length}));return{edited:o.length,wentStale:l.length,stale:a.length,leaned:u.length,k:l.length?o.length/l.length:null,fuel:d,control:m,loops:g}}var Xf={id:"reactor",name:"Reactor",hint:"The last 30 days as a reactor: edited notes are fuel, stale notes others link to are control rods",home:{yaw:eo,pitch:.42,dist:62,min:10,max:200},stage:{light:"camera",fog:[90,300],ambient:.6,glow:{strength:.7,radius:.5,threshold:.85}},actions:["graph"],build({stage:i,frame:t,data:e,onOpen:n,onAction:s,theme:r,invalidate:o}){let a=Ny(e),l=new Map(e.nodes.map(v=>[v.id,v])),c=v=>l.get(v).name;if(!a.fuel.length&&!a.control.length)return Vs(t,s,mt(e.nodes.length,"note"),[`The Reactor needs notes edited in the last ${Ci} days, or stale notes other notes link to.`,"Neither yet."]);let h=null,d=null,u=null,f=v=>r.palette[(v||0)%r.palette.length],m=a.k==null?null:a.k.toFixed(2),M=()=>`${m?`k ${m} \xB7 `:""}${mt(a.edited,"note")} edited in ${Ci} days \xB7 ${a.wentStale||"none"} went stale \xB7 ${mt(a.control.length,"control rod")}`,_=v=>eo+Math.PI+(v-(a.loops.length-1)/2)*1,g=(v,E,x)=>[E*Math.sin(v),x,E*Math.cos(v)];function y(){h&&ri(i.scene,h),h=new rn;let v=Ce(r.muted,r.fg,.35),E=Ce(r.muted,r.bg,.45),x=Ce(r.fg,r.bg,.25),S=I=>d==null||d===I?0:.82,P=(I,W)=>new un({color:I,specular:"#666666",shininess:35,...W}),w=(I,W,D)=>{let O=new qt(I,W);return O.position.y=D,h.add(O),O},U=(I,W)=>new ve(I,I,W,64,1,!0,eo+zs/2,Math.PI*2-zs),F=(I,W)=>new de(I,64,20,eo+zs/2+Math.PI/2,Math.PI*2-zs,W?0:Math.PI/2,Math.PI/2);w(new ve(19,19,1,64),P(E),-5.5);let B={side:ge,transparent:!0,opacity:.42,depthWrite:!1};w(U(18,17),P(E,B),3.5),w(F(18,!0),P(E,B),12).scale.y=.6,w(U(6.2,12),P(v,{side:ge}),3),w(F(6.2,!1),P(v,{side:ge}),-3).scale.y=.5,w(F(6.2,!0),P(v,{side:ge}),9).scale.y=.5,w(new ve(5.9,5.9,.3,48),P(x),-.2),w(new ve(5.9,5.9,.3,48),P(x),Ri),w(new ve(5.8,5.8,Ri,48,1,!1,eo+zs/2,Math.PI*2-zs),new un({color:"#38bdf8",transparent:!0,opacity:.2,depthWrite:!1,side:ge}),Ri/2);let N=I=>new ve(1,1,1,I);h.add(_n(N(12),new un({color:"#ffffff",shininess:70}),a.fuel,(I,W,D)=>(ji(D,[I.at[0],0,I.at[1]],[I.at[0],I.h,I.at[1]],.42),Ce(Ce(x,f(I.cluster),.5+.5*I.heat),r.bg,S(I.cluster))))),h.add(_n(N(8),P("#ffffff"),a.control,(I,W,D)=>{let O=Ri-Ki*I.depth;return ji(D,[I.at[0],O,I.at[1]],[I.at[0],O+Ki+1.4,I.at[1]],.2),Ce(x,r.bg,S(I.cluster))})),h.add(_n(new de(1,12,8),P("#ffffff"),a.control,(I,W,D)=>(D.makeScale(.36,.36,.36).setPosition(I.at[0],Ri-Ki*I.depth+Ki+1.4,I.at[1]),Ce(x,r.bg,S(I.cluster)))));let Z=[];a.loops.forEach((I,W)=>{let D=_(W),O=.28+.5*I.share,Q=S(I.cluster),k=g(D,13.5,0),C=g(D+.2,10.5,0),nt=new qt(new ve(1.9,1.4,12,24),P(Ce(f(I.cluster),r.bg,Q)));nt.position.set(k[0],1,k[2]),h.add(nt);let ut=new qt(new de(1.9,24,12,0,Math.PI*2,0,Math.PI/2),P(Ce(f(I.cluster),r.bg,Q)));ut.position.set(k[0],7,k[2]),h.add(ut);let ot=new qt(new ve(.9,.9,3.4,16),P(Ce(v,r.bg,Q)));ot.position.set(C[0],1.2,C[2]),h.add(ot),Z.push({from:g(D-.07,6.1,5),to:g(D-.05,12.4,5),w:O,c:Ce(Gf,r.bg,Q)},{from:g(D+.05,12.6,1),to:[C[0],1,C[2]],w:O,c:Ce(gh,r.bg,Q)},{from:[C[0],2.4,C[2]],to:g(D+.12,6.1,3.2),w:O,c:Ce(gh,r.bg,Q)})});let H=a.fuel.slice(0,48);u=Os(H.length,(I,W)=>{let D=H[I],O=(W*(.18+.1*(I*7%5)/5)+I*.37)%1;return[D.at[0]+.35*Math.sin(W*2+I),O*Ri,D.at[1]+.35*Math.cos(W*2+I)]},{size:3,color:"#bfe9ff",opacity:.8}),h.add(u.object),h.add(_n(N(12),P("#ffffff"),Z,(I,W,D)=>(ji(D,I.from,I.to,I.w),I.c))),i.scene.add(h);let J=a.loops.map((I,W)=>({text:`${jt(I.name,20)} (${I.edited})`,at:g(_(W),13.5,9),dy:-14,run:()=>b(I.cluster),title:`Only ${I.name}`}));for(let I of a.fuel.slice(0,3))J.push({text:jt(c(I.id),22),at:[I.at[0],I.h,I.at[1]],dy:-14,run:()=>n(I.id),title:`Open ${c(I.id)}`});a.control[0]&&J.push({text:jt(c(a.control[0].id),22),at:[a.control[0].at[0],Ri+Ki+1.4,a.control[0].at[1]],dy:-14,color:r.muted,run:()=>n(a.control[0].id),title:`Open ${c(a.control[0].id)}`}),t.labels(J),t.stat(M());let G=d==null?null:a.loops.find(I=>I.cluster===d);t.chip(G?`Only ${G.name}`:null,()=>b(null))}function b(v){d=v===d?null:v,y(),o()}let p=[];return m?p.push({text:`k is ${m}: ${mt(a.edited,"note")} edited in the last ${Ci} days for ${mt(a.wentStale,"note")} that went stale in them. ${a.k>=1?"Above 1, the vault is heating up.":"Below 1, the vault is cooling."}`,...a.fuel[0]?{label:"Open liveliest",run:()=>n(a.fuel[0].id)}:{}}):p.push({text:`${mt(a.edited,"note")} edited in the last ${Ci} days and none went stale in them, so there is no k to work out.`,...a.fuel[0]?{label:"Open liveliest",run:()=>n(a.fuel[0].id)}:{}}),a.control[0]&&p.push({text:`${mt(a.leaned,"stale note")} still ${a.leaned===1?"has":"have"} notes linking to ${a.leaned===1?"it":"them"}. ${c(a.control[0].id)} has the most: ${mt(a.control[0].links,"note")} link to it.`,label:"Open note",run:()=>n(a.control[0].id)}),a.loops[0]&&p.push({text:`${a.loops[0].name} had the most edits: ${a.loops[0].edited} of the ${a.edited}.`,label:"Only this topic",run:()=>b(a.loops[0].cluster)}),t.explain({plain:"Picture a reactor. Every note you edited this month is a fuel rod giving off heat. Every note left to go stale takes heat away. Divide one by the other and you get k: above 1 the vault is heating up, below 1 it is cooling.",about:`A fuel rod is a note edited in the last ${Ci} days, taller and brighter the livelier it is; the ${Wf} liveliest are drawn, the liveliest in the middle. A control rod is a stale note that other notes still link to, pushed deeper the more notes link to it; the ${Zf} most linked are drawn. k is the notes edited in the ${Ci} days divided by the notes that went stale in them. Each coolant loop is one of the ${Yf} topics with the most edited notes; its pipes are wider the bigger its share.`,legend:[{color:r.palette[0],text:"fuel rod = a note edited lately, colour = topic"},{color:Ce(r.fg,r.bg,.25),text:"control rod = a stale note others link to"},{color:Gf,text:"hot leg"},{color:gh,text:"cold leg, back to the vessel"}],insights:p}),t.controls({lines:["Pick a rod to open its note, a loop to see only its topic"],buttons:[]}),i.sky({top:"#04060c",haze:"#0e121c"}),y(),{targets:()=>[...a.fuel.map(v=>({at:[v.at[0],v.h*.6,v.at[1]],r:.7,key:{kind:"note",id:v.id,tip:`${c(v.id)} \xB7 edited ${mt(l.get(v.id).age||0,"day")} ago`}})),...a.control.map(v=>({at:[v.at[0],Ri-Ki*v.depth+Ki+1.4,v.at[1]],r:.6,key:{kind:"note",id:v.id,tip:`${c(v.id)} \xB7 stale \xB7 ${mt(v.links,"note")} link to it`}})),...a.loops.map((v,E)=>({at:g(_(E),13.5,4),r:2.4,key:{kind:"loop",id:v.cluster,tip:`${v.name} \xB7 ${mt(v.edited,"note")} edited \xB7 pick to see only this topic`}}))],click(v){v.kind==="note"?n(v.id):v.kind==="loop"&&b(v.id)},update(){},stat:M,today:()=>a.control[0]?{text:`${c(a.control[0].id)} is stale and ${mt(a.control[0].links,"note")} link to it.`,label:"Open note",run:()=>n(a.control[0].id)}:null,api:{layout:()=>a,filter:b,only:()=>d},tick(v){u&&u.tick(v)},dispose(){h&&ri(i.scene,h)}}}};var Pl={low:0,medium:1,high:2},Fy=i=>20*(i+1)**2;async function Jf({host:i,detail:t="medium",pbr:e=!1,warmup:n=3e3,run:s=5e3}={}){if(!(t in Pl))throw new Error(`bench: detail is one of ${Object.keys(Pl).join(", ")}`);if(!i)throw new Error("bench: host (an element to draw in) is required");let r=Xr(),o=gl(i,so(),{fog:!1});try{o.scene.add($c(r,new jn(1,Pl[t]),e?new Te({roughness:.6}):new Gi).root);let a=o.renderer.getContext(),l=a.getExtension("WEBGL_debug_renderer_info"),c=String(l&&a.getParameter(l.UNMASKED_RENDERER_WEBGL)||a.getParameter(a.RENDERER)||"unknown"),h=()=>new Promise(y=>requestAnimationFrame(y)),d=performance.now(),u=d,f=d,m=0,M=0,_=0;for(;u-d<n+s;)u=await h(),o.orbit(u/2e3,.3,42),o.render(),u-d>=n&&(_?(m++,M=Math.max(M,u-f)):_=u),f=u;let g=u-_;return{atoms:r.n,detail:t,triangles:r.n*Fy(Pl[t]),light:e?"pbr":"basic",fps:g>0?Math.round(m*1e3/g*10)/10:0,worstMs:Math.round(M*10)/10,frames:m,gpu:c}}finally{o.dispose()}}var xh={bodies:Nd,cas9:Bd,genome:Vd,cones:Hd,loadpaths:$d,modes:nf,slime:hf,cyberpunk:mf,radar:vf,clock:wf,foodweb:If,city:yf,atom:Lf,station:Vf,reactor:Xf},Dy=Object.values(xh).map(i=>({id:i.id,name:i.name,hint:i.hint,actions:i.actions||[],under:(i.home.minPitch||0)<0}));function Ly(i,{view:t="bodies",data:e,inputs:n,onOpen:s,onAction:r,theme:o,motion:a=!1}={}){let l=xh[t];if(!l)throw new Error(`vault-graph-views: no view "${t}" (there is ${Object.keys(xh).join(", ")})`);let c=Dl(e);if(c.length||c.push(...Ll(t,e,n)),c.length)throw new Error("vault-graph-views: "+c.join("; "));if(typeof s!="function")throw new Error("vault-graph-views: onOpen is required");if((l.actions||[]).length&&typeof r!="function")throw new Error(`vault-graph-views: onAction is required for the ${l.name} view (it asks the host for: ${l.actions.join(", ")})`);return Ud(i,l,{data:e,inputs:n||{},onOpen:s,onAction:r,motion:a,theme:so(o)})}return rp(By);})();
